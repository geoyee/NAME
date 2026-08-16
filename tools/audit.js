#!/usr/bin/env node
/**
 * 「名典」数据质量审计：node tools/audit.js
 *
 * 结构化检查（validate.js 之外的内容质量审计）：
 *  1. 出处原文至少包含名字用字之一（出处与名字的相关性）
 *  2. 出处原文长度合理（过短可能为杜撰）
 *  3. 作者-朝代一致性（同一作者不允许出现两个朝代）
 *  4. 名字用字不含危险字/避讳黑名单字
 *  5. tags 全部属于 12 个祝福方向
 *  6. 名字用字生僻度上限（freqRank > 6000 提醒人工复核）
 *  7. verified:false 清单
 * 退出码：0 = 无硬错误；1 = 存在硬错误（软提示只打印）
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");
const errors = [];
const warnings = [];

function loadFile(filename) {
  const file = path.join(ROOT, "data", filename);
  if (!fs.existsSync(file)) return null;
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

const DB = {};
for (const f of ["config.js", "bad_homophones.js", "chars.js", "names.js"]) {
  const db = loadFile(f);
  if (db) Object.assign(DB, db);
}

const names = DB.names || [];
const chars = DB.chars || {};
const config = DB.config || {};
const banned = (DB.badHomo && DB.badHomo.bannedChars) || [];
const tagSet = new Set(config.blessingTags || []);
const freqHard = 8000;   // 超过视为过度生僻（软提示）
const minLen = 5;        // 出处原文最短字符数（软提示）

// ---------- 1. 出处相关性 ----------
const noCharInSource = [];
for (const n of names) {
  const g = [...n.given];
  const inSrc = g.filter(ch => (n.source && n.source.text && n.source.text.includes(ch)));
  if (inSrc.length === 0) {
    errors.push(`[出处] ${n.given}（${n.source && n.source.title}）：原文不含名字用字「${n.given}」`);
    noCharInSource.push(n.given);
  }
}

// ---------- 2. 出处长度 ----------
// 成语类（title 含「成语」）4 字即合法（成语本身就是原文）；其他 ≥5 字
const shortSources = [];
for (const n of names) {
  const len = (n.source && n.source.text) ? [...n.source.text].length : 0;
  const isIdiom = n.source && n.source.title && n.source.title.includes("成语");
  const threshold = isIdiom ? 4 : minLen;
  if (len > 0 && len < threshold) {
    warnings.push(`[出处长度] ${n.given}（${n.source.title}）：原文仅 ${len} 字「${n.source.text}」，建议人工核对`);
    shortSources.push(n.given);
  }
}

// ---------- 3. 作者-朝代一致性 ----------
// 「佚名」为不同时代的无名氏合称，不参与冲突检查
const authorDynasty = new Map();
const conflict = new Map();
for (const n of names) {
  const a = n.source && n.source.author;
  const d = n.source && n.source.dynasty;
  if (!a || !d || a === "佚名") continue;
  if (!authorDynasty.has(a)) authorDynasty.set(a, d);
  else if (authorDynasty.get(a) !== d) {
    if (!conflict.has(a)) conflict.set(a, []);
    conflict.get(a).push(d);
  }
}
for (const [a, ds] of conflict) {
  errors.push(`[朝代冲突] 作者「${a}」出现多个朝代：${authorDynasty.get(a)} / ${[...new Set(ds)].join("、")}`);
}

// ---------- 4. 危险字 ----------
for (const n of names) {
  for (const ch of n.given) {
    if (banned.includes(ch)) errors.push(`[危险字] ${n.given} 含黑名单字「${ch}」`);
  }
}

// ---------- 5. tags 枚举 ----------
for (const n of names) {
  for (const t of n.tags || []) {
    if (!tagSet.has(t)) errors.push(`[tags] ${n.given} 含非法标签「${t}」`);
  }
}

// ---------- 6. 生僻度 ----------
const rare = [];
for (const n of names) {
  for (const ch of n.given) {
    const c = chars[ch];
    if (c && c.freqRank > freqHard && !rare.includes(n.given)) rare.push(n.given);
  }
}
if (rare.length) warnings.push(`[生僻] 字频 > ${freqHard} 的词条（建议复核是否过于生僻）：${rare.join(" ")}`);

// ---------- 7. verified:false ----------
const unverified = names.filter(n => n.verified === false);
if (unverified.length) {
  warnings.push(`[待校对] verified:false 词条：${unverified.map(n => n.given).join(" ")}`);
}

// ---------- 汇总 ----------
console.log("======== 「名典」数据质量审计 ========");
console.log(`词条 ${names.length} / 字库 ${Object.keys(chars).length}`);
console.log(`作者 ${authorDynasty.size} 位，朝代冲突 ${conflict.size} 处`);
if (errors.length) {
  console.log(`\n❌ 硬错误 ${errors.length} 个：`);
  errors.forEach(e => console.log("  " + e));
}
if (warnings.length) {
  console.log(`\n⚠️  软提示 ${warnings.length} 个：`);
  warnings.forEach(w => console.log("  " + w));
}
console.log("\n" + (errors.length ? "❌ 审计未通过" : "✅ 审计通过（无硬错误）"));
process.exit(errors.length ? 1 : 0);
