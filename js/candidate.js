// 候选生成 pipeline：生成 → 硬过滤 → 打分 → 排序 → 去重 → Top N
window.NamesApp = window.NamesApp || {};
window.NamesApp.Candidate = (function () {
  function config() { return window.NAMES_DB.config || {}; }

  // 字级信息（未知字返回中性兜底：笔画 10、结构 null、字频 3000、连笔 3）
  function charInfo(ch) {
    const c = window.NAMES_DB.chars && window.NAMES_DB.chars[ch];
    return c || { pinyin: "?", tone: 5, strokes: 10, structure: null, freqRank: 3000, cursiveScore: 3 };
  }

  /**
   * 解析姓氏 → { text, pinyin[], tones[], strokes[], structures[], known }
   * 优先查姓氏库（单姓/复姓），未收录按字拆分并标记 known:false
   */
  function resolveSurname(surnameText) {
    const s = (surnameText || "").trim();
    if (!s) return null;
    const list = window.NAMES_DB.surnames || { single: [], compound: [] };
    const single = list.single.find(x => x.surname === s);
    if (single) {
      return {
        text: s, pinyin: [single.pinyin], tones: [single.tone],
        strokes: [single.strokes], structures: [single.structure], known: true
      };
    }
    const compound = list.compound.find(x => x.surname === s);
    if (compound) {
      const chars = [...s];
      return {
        text: s, pinyin: compound.pinyin, tones: compound.tones,
        strokes: compound.strokes, structures: chars.map(ch => charInfo(ch).structure), known: true
      };
    }
    const chars = [...s];
    return {
      text: s,
      pinyin: chars.map(ch => charInfo(ch).pinyin),
      tones: chars.map(ch => charInfo(ch).tone),
      strokes: chars.map(ch => charInfo(ch).strokes),
      structures: chars.map(ch => charInfo(ch).structure),
      known: false
    };
  }

  // 风格选项 → 类别集合；空或含 any → null（全库）
  function stylesToCategories(styles) {
    const map = config().styleMap || {};
    if (!styles || styles.length === 0 || styles.includes("any")) return null;
    const cats = new Set();
    for (const st of styles) (map[st] || []).forEach(c => cats.add(c));
    return cats;
  }

  /**
   * 生成候选（未过滤）
   * modes: double 双字名 / single 单字名 / quad 父姓+母姓+单字
   */
  // 是否纯汉字（姓氏/母姓校验用）
  function isCJK(s) {
    return /^[一-龥]+$/.test(s || "");
  }

  function buildCandidates(input) {
    const out = [];
    const sur = resolveSurname(input.fatherSurname);
    if (!sur) return out;
    // 非汉字姓氏直接返回空（乱输入防护）
    if (!isCJK(sur.text)) return out;
    const modes = Array.isArray(input.modes) ? input.modes : ["double"];
    const cats = stylesToCategories(input.styles);
    const entries = (window.NAMES_DB.names || []).filter(n => !cats || cats.has(n.category));
    // 母姓入名要求母姓为汉字、存在且与父姓不同（「王王×」无意义）
    const motherOk = input.motherSurname && isCJK(input.motherSurname) &&
      input.motherSurname.trim() !== (input.fatherSurname || "").trim();

    for (const entry of entries) {
      if (modes.includes("double") && entry.length === 2) {
        out.push(makeCandidate(entry, sur, input, "double"));
      }
      if (modes.includes("single") && entry.length === 1) {
        out.push(makeCandidate(entry, sur, input, "single"));
      }
      // 母姓入名四式（父姓为复姓时表单层禁用）：
      // tri   父姓+母姓+单字（3 字）  quad  父姓+母姓+双字（4 字）
      // trimf 母姓+父姓+单字（3 字）  quadmf 母姓+父姓+双字（4 字）
      const motherFirst = !!input.motherFirst;
      if (modes.includes("tri") && entry.length === 1 && motherOk) {
        out.push(makeCandidate(entry, sur, input, motherFirst ? "trimf" : "tri"));
      }
      if (modes.includes("quad") && entry.length === 2 && motherOk) {
        out.push(makeCandidate(entry, sur, input, motherFirst ? "quadmf" : "quad"));
      }
    }
    return out;
  }

  function makeCandidate(entry, sur, input, mode) {
    let surnameText, surnamePinyin, surnameTones, surnameStrokes, surnameStructures, compatSurname;
    if (mode === "quad" || mode === "quadmf" || mode === "tri" || mode === "trimf") {
      const mother = resolveSurname(input.motherSurname);
      const motherFirst = mode === "quadmf" || mode === "trimf";
      const first = motherFirst ? mother : sur;
      const second = motherFirst ? sur : mother;
      surnameText = first.text + second.text;
      surnamePinyin = first.pinyin.concat(second.pinyin);
      surnameTones = first.tones.concat(second.tones);
      surnameStrokes = first.strokes.concat(second.strokes);
      surnameStructures = first.structures.concat(second.structures);
      compatSurname = input.motherSurname.trim();   // 母姓入名优先查「母姓+名首字」妙配
    } else {
      surnameText = sur.text;
      surnamePinyin = sur.pinyin;
      surnameTones = sur.tones;
      surnameStrokes = sur.strokes;
      surnameStructures = sur.structures;
      compatSurname = sur.text;
    }

    const givenChars = [...entry.given];
    const fullName = surnameText + entry.given;
    const tones = surnameTones.concat(entry.tones);
    const pinyins = surnamePinyin.concat(entry.pinyin.split(" "));
    const chars = [...surnameText].concat(givenChars);
    const strokes = chars.map(ch => charInfo(ch).strokes);
    const structures = chars.map(ch => charInfo(ch).structure);

    return {
      entry: entry,
      givenChars: givenChars,
      fullName: fullName,
      chars: chars,
      tones: tones,
      pinyins: pinyins,
      strokes: strokes,
      structures: structures,
      givenLen: entry.length,
      compatSurname: compatSurname,
      mode: mode
    };
  }

  /**
   * 硬过滤（全剔，不进打分）：
   *  1. 避讳字（含同音映射）  2. 性别冲突  3. 谐音三层  4. 生僻字
   */
  function filterCandidates(cands, input) {
    const bad = window.NAMES_DB.badHomo || {};
    const homoMap = config().tabooHomophones || {};
    const taboo = (input.taboo || []).filter(Boolean);

    return cands.filter(c => {
      // 1. 避讳字 + 同音映射
      for (const t of taboo) {
        if (c.givenChars.includes(t)) return false;
        const homo = homoMap[t];
        if (homo && c.givenChars.some(ch => homo.includes(ch))) return false;
      }
      // 2. 性别冲突
      if (input.gender === "m" && c.entry.gender === "f") return false;
      if (input.gender === "f" && c.entry.gender === "m") return false;
      // 3. 谐音三层
      if ((bad.fullNames || []).includes(c.fullName)) return false;
      const concat = c.pinyins.join("");
      const givenConcat = c.pinyins.slice(c.pinyins.length - c.givenLen).join("");
      if ((bad.pinyinPatterns || []).some(p => p === concat || p === givenConcat)) return false;
      if ((bad.bannedChars || []).some(bc => c.givenChars.includes(bc))) return false;
      // 4. 生僻字（字库缺失或排名 > 20000）
      for (const ch of c.givenChars) {
        const info = window.NAMES_DB.chars[ch];
        if (!info || !info.freqRank || info.freqRank > 20000) return false;
      }
      return true;
    });
  }

  /**
   * 完整 pipeline
   * input: { fatherSurname, motherSurname, modes[], gender, styles[], taboo[], blessings[], count, birthYear, birthMonth }
   * 返回 { candidates, totalGenerated, totalFiltered, ms }
   */
  function generate(input) {
    const t0 = (typeof performance !== "undefined" && performance.now) ? performance.now() : Date.now();
    // count 防御：非数字/负数/超大 → clamp 到 [1, 100]
    input.count = Math.max(1, Math.min(100, parseInt(input.count, 10) || 15));
    const raw = buildCandidates(input);
    const filtered = filterCandidates(raw, input);
    const scored = filtered.map(c => window.NamesApp.Scoring.scoreCandidate(c, input));

    scored.sort((a, b) =>
      b.total - a.total ||
      b.dims.meaning.score - a.dims.meaning.score ||
      b.dims.phonetic.score - a.dims.phonetic.score
    );

    // 相同 given 去重（保留最高分）
    const seen = new Set();
    const deduped = [];
    for (const s of scored) {
      if (seen.has(s.entry.given)) continue;
      seen.add(s.entry.given);
      deduped.push(s);
    }

    // 多样性：同一首字最多 3 个（避免「清×」「×月」扎堆），其余按原序递补
    // 生成多批（最多 90 个）供「换一批」翻页；candidates 为首批
    const diversified = [];
    const firstCount = {};
    for (const s of deduped) {
      const key = s.entry.given[0];
      if ((firstCount[key] || 0) >= 3) continue;
      firstCount[key] = (firstCount[key] || 0) + 1;
      diversified.push(s);
    }
    const BATCH_CAP = 90;

    const t1 = (typeof performance !== "undefined" && performance.now) ? performance.now() : Date.now();
    return {
      candidates: diversified.slice(0, input.count),
      all: diversified.slice(0, BATCH_CAP),
      totalGenerated: raw.length,
      totalFiltered: filtered.length,
      ms: Math.round((t1 - t0) * 10) / 10
    };
  }

  return { charInfo, resolveSurname, stylesToCategories, buildCandidates, makeCandidate, filterCandidates, generate, isCJK };
})();
