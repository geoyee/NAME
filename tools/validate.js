#!/usr/bin/env node
/**
 * 「名典」数据校验脚本：node tools/validate.js
 *
 * 校验规则：
 *  1. 数据文件可解析（JS 包装的 JSON 字面量）
 *  2. 词条必填字段齐全、枚举值合法
 *  3. 一字一验：词条/姓氏/黑名单中的每个字必须存在于 chars.js，且拼音/声调/笔画一致（支持 altPinyin 多音字）
 *  4. 无重复 id / given，黑名单格式合法
 *  5. verified:false 词条仅 warning（出处待人工校对），不阻断
 *
 * 退出码：0 = 通过（可含 warning）；1 = 存在 error
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");
const errors = [];
const warnings = [];

function loadFile(filename) {
  const file = path.join(ROOT, "data", filename);
  if (!fs.existsSync(file)) {
    warnings.push(`[skip] data/${filename} 不存在（尚未编写）`);
    return null;
  }
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  try {
    vm.runInContext(fs.readFileSync(file, "utf8"), sandbox, { filename: file });
    return sandbox.window.NAMES_DB;
  } catch (e) {
    errors.push(`[parse] data/${filename}: ${e.message}`);
    return null;
  }
}

// 各文件自带 window.NAMES_DB = { key: ... }，逐个加载后合并
const DB = { chars: null, names: null, surnames: null, badHomo: null, config: null, pairs: null };
for (const f of ["config.js", "surnames.js", "bad_homophones.js", "chars.js", "names.js", "pairs.js"]) {
  const db = loadFile(f);
  if (db) Object.assign(DB, db);
}

const charKeys = DB.chars ? Object.keys(DB.chars) : [];

// ---------- chars ----------
if (DB.chars) {
  for (const [ch, c] of Object.entries(DB.chars)) {
    if (!c.pinyin || !c.tone || !c.strokes || !c.structure)
      errors.push(`[chars] 字「${ch}」缺必填字段 pinyin/tone/strokes/structure`);
    if (!["lr", "tb", "half", "single", "lcr", "full"].includes(c.structure))
      errors.push(`[chars] 字「${ch}」非法 structure: ${c.structure}`);
  }
}

// ---------- surnames ----------
const surnameChars = new Set();
if (DB.surnames) {
  const seenS = new Set();
  for (const group of ["single", "compound"]) {
    if (!DB.surnames[group]) { errors.push(`[surnames] 缺少 ${group}`); continue; }
    for (const s of DB.surnames[group]) {
      if (seenS.has(s.surname)) errors.push(`[surnames] 重复姓氏: ${s.surname}`);
      seenS.add(s.surname);
      for (const ch of s.surname) surnameChars.add(ch);
      if (group === "single") {
        if (!s.pinyin || !s.tone || !s.strokes)
          errors.push(`[surnames] 单姓「${s.surname}」缺 pinyin/tone/strokes`);
        if (charKeys.length && DB.chars[s.surname]) {
          const c = DB.chars[s.surname];
          const pyOk = c.pinyin === s.pinyin || (c.altPinyin || []).includes(s.pinyin);
          if (!pyOk) errors.push(`[surnames] 姓「${s.surname}」拼音与 chars 不一致: ${c.pinyin} vs ${s.pinyin}`);
          if (pyOk && c.tone !== s.tone && !(c.altPinyin && c.altPinyin.includes(s.pinyin)))
            errors.push(`[surnames] 姓「${s.surname}」声调与 chars 不一致: ${c.tone} vs ${s.tone}`);
          if (c.strokes !== s.strokes) errors.push(`[surnames] 姓「${s.surname}」笔画与 chars 不一致: ${c.strokes} vs ${s.strokes}`);
        }
      } else {
        if (!Array.isArray(s.pinyin) || !Array.isArray(s.tones) || !Array.isArray(s.strokes) ||
            s.pinyin.length !== s.surname.length || s.tones.length !== s.surname.length || s.strokes.length !== s.surname.length)
          errors.push(`[surnames] 复姓「${s.surname}」pinyin/tones/strokes 数组长度不符`);
      }
    }
  }
}

// ---------- bad_homophones ----------
if (DB.badHomo) {
  for (const key of ["fullNames", "pinyinPatterns", "bannedChars"]) {
    if (!Array.isArray(DB.badHomo[key])) errors.push(`[badHomo] ${key} 须为数组`);
    else if (!DB.badHomo[key].every(x => typeof x === "string"))
      errors.push(`[badHomo] ${key} 含非字符串元素`);
  }
  if (Array.isArray(DB.badHomo.bannedChars) && charKeys.length) {
    for (const ch of DB.badHomo.bannedChars) {
      if (!DB.chars[ch]) errors.push(`[badHomo] 危险字「${ch}」不在 chars.js`);
    }
  }
}

// ---------- config ----------
if (DB.config) {
  const w = DB.config.weights;
  if (!w) errors.push("[config] 缺少 weights");
  else {
    const sum = Object.values(w).reduce((a, b) => a + b, 0);
    if (Math.abs(sum - 1) > 0.001) warnings.push(`[config] 权重合计 ${sum}，建议为 1.00`);
  }
  if (!DB.config.goldenTonePatterns || !DB.config.goldenTonePatterns[2] || !DB.config.goldenTonePatterns[3] || !DB.config.goldenTonePatterns[4])
    errors.push("[config] goldenTonePatterns 须包含 2/3/4 字组");
  for (const c of DB.config.surnameCompat || []) {
    if (!c.surname || !c.given) errors.push(`[config] surnameCompat 缺字段: ${JSON.stringify(c)}`);
    for (const ch of c.surname + c.given) if (charKeys.length && !DB.chars[ch]) errors.push(`[config] surnameCompat 字「${ch}」不在 chars.js`);
  }
  for (const [key, vals] of Object.entries(DB.config.tabooHomophones || {})) {
    for (const ch of key + vals.join("")) if (charKeys.length && !DB.chars[ch]) errors.push(`[config] tabooHomophones 字「${ch}」不在 chars.js`);
  }
}

// ---------- names ----------
const CATEGORIES = ["shijing", "chuci", "tangshi", "songci", "yuanqu", "hanfu", "medicine", "solar", "nature", "wenyan", "jindai"];
if (DB.names) {
  const seenId = new Set(), seenGiven = new Set();
  const catCount = {};
  for (const n of DB.names) {
    if (!n.id) { errors.push(`[names] 缺 id: ${JSON.stringify(n).slice(0, 60)}`); continue; }
    if (seenId.has(n.id)) errors.push(`[names] 重复 id: ${n.id}`);
    seenId.add(n.id);

    if (!n.given || typeof n.given !== "string") { errors.push(`[names] ${n.id}: 缺 given`); continue; }
    if (seenGiven.has(n.given + "|" + n.length)) warnings.push(`[names] 重复词条: ${n.given}（多出处应在详情页合并）`);
    seenGiven.add(n.given + "|" + n.length);

    catCount[n.category] = (catCount[n.category] || 0) + 1;

    if (![1, 2].includes(n.length)) errors.push(`[names] ${n.id} (${n.given}): length 须为 1|2`);
    if ([...n.given].length !== n.length) errors.push(`[names] ${n.id} (${n.given}): length 与实际字数不符`);
    if (!n.pinyin || n.pinyin.split(" ").length !== n.length) errors.push(`[names] ${n.id} (${n.given}): pinyin 分词数与字数不符`);
    if (!Array.isArray(n.tones) || n.tones.length !== n.length) errors.push(`[names] ${n.id} (${n.given}): tones 长度与字数不符`);
    if (!CATEGORIES.includes(n.category)) errors.push(`[names] ${n.id} (${n.given}): 非法 category「${n.category}」`);
    if (!["f", "m", "u"].includes(n.gender)) errors.push(`[names] ${n.id} (${n.given}): 非法 gender「${n.gender}」`);
    if (!["legend", "classic", "common"].includes(n.frequency)) errors.push(`[names] ${n.id} (${n.given}): 非法 frequency「${n.frequency}」`);
    if (!n.source || !n.source.text || !n.source.title) errors.push(`[names] ${n.id} (${n.given}): 缺出处 source.text/title`);
    if (!n.meaning || n.meaning.length < 4) errors.push(`[names] ${n.id} (${n.given}): 缺寓意 meaning`);
    if (!Array.isArray(n.tags) || n.tags.length === 0) errors.push(`[names] ${n.id} (${n.given}): 缺祝福标签 tags`);
    if (n.season && (!Array.isArray(n.season) || !n.season.every(s => [1, 2, 3, 4].includes(s))))
      errors.push(`[names] ${n.id} (${n.given}): season 须为 1-4 数组`);

    if (n.verified === false) warnings.push(`[names] ${n.id} (${n.given}): verified:false，出处待人工校对`);

    if (charKeys.length) {
      const charsOf = [...n.given];
      const py = n.pinyin ? n.pinyin.split(" ") : [];
      charsOf.forEach((ch, i) => {
        if (!DB.chars[ch]) errors.push(`[names] ${n.id} (${n.given}): 字「${ch}」不在 chars.js`);
        else {
          const c = DB.chars[ch];
          const pyOk = py[i] && (c.pinyin === py[i] || (c.altPinyin || []).includes(py[i]));
          if (py[i] && !pyOk) errors.push(`[names] ${n.id} (${n.given}): 字「${ch}」拼音与 chars 不一致 (${py[i]} vs ${c.pinyin})`);
          if (pyOk && n.tones && n.tones[i] !== c.tone && !(c.altPinyin && c.altPinyin.includes(py[i])))
            errors.push(`[names] ${n.id} (${n.given}): 字「${ch}」声调与 chars 不一致 (${n.tones[i]} vs ${c.tone})`);
        }
      });
    }
  }
  console.log(`[names] 词条总数: ${DB.names.length}`);
  for (const [cat, cnt] of Object.entries(catCount)) {
    const label = DB.config && DB.config.categoryLabels ? DB.config.categoryLabels[cat] || cat : cat;
    console.log(`  ${label}(${cat}): ${cnt}`);
  }
} else {
  errors.push("[names] 缺少 names 数组");
}

// ---------- 姓氏字覆盖 ----------
if (charKeys.length) {
  for (const ch of surnameChars) {
    if (!DB.chars[ch]) errors.push(`[chars] 姓氏用字「${ch}」不在 chars.js`);
  }
}

// ---------- pairs 配对库 ----------
if (DB.pairs) {
  const nameSet = new Set((DB.names || []).map(n => n.given + "|" + n.length));
  const seenPairId = new Set();
  for (const p of DB.pairs) {
    if (!p.id) { errors.push("[pairs] 缺 id"); continue; }
    if (seenPairId.has(p.id)) errors.push(`[pairs] 重复 id: ${p.id}`);
    seenPairId.add(p.id);
    if (!p.a || !p.b || !p.a.given || !p.b.given) { errors.push(`[pairs] ${p.id}: 缺 a/b.given`); continue; }
    if (!p.note || !p.source) errors.push(`[pairs] ${p.id}: 缺 note/source`);
    for (const half of [p.a, p.b]) {
      if (!["m", "f", "u"].includes(half.gender)) errors.push(`[pairs] ${p.id} (${half.given}): 非法 gender「${half.gender}」`);
      const entry = (DB.names || []).find(n => n.given === half.given);
      if (!entry) errors.push(`[pairs] ${p.id} (${half.given}): 词条不在 names.js`);
    }
  }
  console.log(`[pairs] 配对总数: ${DB.pairs.length}`);
}

// ---------- 汇总 ----------
console.log("========================================");
if (errors.length) {
  console.log(`❌ 发现 ${errors.length} 个错误:`);
  errors.forEach(e => console.log("  " + e));
}
if (warnings.length) {
  console.log(`⚠️  ${warnings.length} 个警告:`);
  warnings.forEach(w => console.log("  " + w));
}
console.log(errors.length ? "❌ 校验未通过" : "✅ 校验通过" +
  (charKeys.length ? `（字库 ${charKeys.length} 字，词条 ${DB.names ? DB.names.length : 0} 条）` : "（字库未就绪，跳过外键校验）"));
process.exit(errors.length ? 1 : 0);
