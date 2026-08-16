// 音律维度：声调组合（平仄）、声韵连读、谐音检测
window.NamesApp = window.NamesApp || {};
window.NamesApp.Phonetics = (function () {
  // 声母表（用于拼音拆分；y/w 开头视为零声母）
  const INITIALS = ["zh", "ch", "sh", "z", "c", "s", "b", "p", "m", "f", "d", "t", "n", "l", "g", "k", "h", "j", "q", "x", "r"];

  function isPing(tone) { return tone === 1 || tone === 2; }

  function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }

  // 拼音 → { initial, final }（零声母 initial 为空串）
  function splitPinyin(py) {
    for (const ini of INITIALS) {
      if (py.indexOf(ini) === 0) return { initial: ini, final: py.slice(ini.length) };
    }
    return { initial: "", final: py };
  }

  /**
   * 声调组合分（占音律 40%）
   * tones: 全名声调数组（含姓）；givenLen: 名部分字数；pinyins: 全名拼音数组
   */
  function toneScore(tones, givenLen, pinyins) {
    const cfg = window.NAMES_DB.config;
    const n = tones.length;
    let score = 60;
    const notes = [];

    // 平仄交替
    for (let i = 0; i < n - 1; i++) {
      if (isPing(tones[i]) !== isPing(tones[i + 1])) score += 5;
    }

    // 黄金调型（按全名总字数查表）
    const pattern = tones.join("");
    const golden = (cfg.goldenTonePatterns || {})[n] || [];
    if (golden.includes(pattern)) {
      score += 15;
      notes.push({ key: "toneGolden", pattern: pattern, pinyin: pinyins.join(" ") });
    }

    // 三连平 / 三连仄
    let pingRun = 0, zeRun = 0;
    for (const t of tones) {
      if (isPing(t)) { pingRun++; zeRun = 0; } else { zeRun++; pingRun = 0; }
      if (pingRun >= 3 || zeRun >= 3) {
        score -= 30;
        notes.push({ key: "toneFlat" });
        break;
      }
    }

    // 末字与姓同调（单字名罚得更重）
    const surnameLen = n - givenLen;
    if (surnameLen >= 1 && tones[n - 1] === tones[surnameLen - 1]) {
      score -= (givenLen === 1) ? 20 : 10;
      notes.push({ key: "toneSameWithSurname" });
    }

    // 名内两字同调
    if (givenLen === 2 && tones[n - 2] === tones[n - 1]) {
      score -= 8;
      notes.push({ key: "toneInnerSame" });
    }

    // 平收响亮
    if (isPing(tones[n - 1])) {
      score += 5;
      notes.push({ key: "tonePingEnd" });
    } else {
      notes.push({ key: "toneZeEnd" });
    }

    return { score: clamp(score, 0, 100), notes: notes };
  }

  /**
   * 声韵连读分（占音律 35%）
   * pinyins/tones: 全名拼音与声调；givenChars: 名部分字符（叠字豁免判断）
   */
  function readScore(pinyins, tones, givenChars) {
    const givenLen = givenChars.length;
    const n = pinyins.length;
    let score = 100;
    const notes = [];
    const parts = pinyins.map((py, i) => ({ py: py, tone: tones[i], parts: splitPinyin(py) }));

    for (let i = 0; i < n - 1; i++) {
      const a = parts[i], b = parts[i + 1];
      const inGiven = i >= n - givenLen;                    // 该相邻对位于名内
      const isRepeated = inGiven && givenLen === 2 && givenChars[0] === givenChars[1]; // 叠字豁免

      if (a.parts.initial === b.parts.initial) {
        if (a.parts.initial === "") { score -= 8; notes.push({ key: "readZeroInit" }); }
        else if (!isRepeated) { score -= 15; notes.push({ key: "readSameInit", ini: a.parts.initial }); }
      }
      if (a.parts.final === b.parts.final && a.tone === b.tone) {
        if (isRepeated) { notes.push({ key: "readRepeated" }); }
        else { score -= 15; notes.push({ key: "readSameFinal" }); }
      }
      if (a.tone === 3 && b.tone === 3) {
        score -= 8;
        notes.push({ key: "readDoubleShang" });
      }
    }

    if (notes.length === 0) notes.push({ key: "readGood" });
    return { score: clamp(score, 30, 100), notes: notes };
  }

  /**
   * 谐音三层检测：字面 / 拼音全串 / 危险字。返回命中的规则列表（空 = 通过）
   */
  function checkBadHomophone(fullName, fullPinyin, givenPinyin) {
    const bad = window.NAMES_DB.badHomo || {};
    const hits = [];
    if ((bad.fullNames || []).includes(fullName)) hits.push("fullName:" + fullName);
    const concat = fullPinyin.join("");
    const givenConcat = givenPinyin.join("");
    const patterns = bad.pinyinPatterns || [];
    for (const p of patterns) {
      if (p === concat || p === givenConcat) { hits.push("pinyin:" + p); break; }
    }
    const banned = bad.bannedChars || [];
    const givenChars = fullName.slice(fullName.length - givenPinyin.length);
    if (givenChars.split("").some(ch => banned.includes(ch))) hits.push("bannedChar");
    return hits;
  }

  /**
   * 音律总分
   * cand: { tones, pinyins, givenLen, givenChars, fullName }
   */
  function scorePhonetic(cand) {
    const t = toneScore(cand.tones, cand.givenLen, cand.pinyins);
    const r = readScore(cand.pinyins, cand.tones, cand.givenChars);
    const badHits = checkBadHomophone(
      cand.fullName,
      cand.pinyins,
      cand.pinyins.slice(cand.pinyins.length - cand.givenLen)
    );
    const homo = badHits.length ? 0 : 100;
    const score = 0.40 * t.score + 0.35 * r.score + 0.25 * homo;
    return { score: Math.round(score * 10) / 10, tone: t, read: r, homo: homo, badHits: badHits };
  }

  return { splitPinyin, isPing, toneScore, readScore, checkBadHomophone, scorePhonetic };
})();
