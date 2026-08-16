// 五维合成：音律 / 形美 / 寓意 / 性别 / 字频，按 config.weights 加权
window.NamesApp = window.NamesApp || {};
window.NamesApp.Scoring = (function () {
  function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }

  function config() { return window.NAMES_DB.config || {}; }

  // 性别适配（5%）：匹配 100 / 中性 70 / 不限 80（冲突已在过滤层剔除）
  function genderScore(entry, userGender) {
    if (userGender === "any") return 80;
    if (entry.gender === userGender) return 100;
    return 70;
  }

  // 字频（5%）：平均字频排名越大越生僻，越不易重名（缺失按 3000 中性）
  function freqScore(givenChars) {
    let sum = 0, count = 0;
    for (const ch of givenChars) {
      const c = window.NAMES_DB.chars[ch];
      sum += (c && c.freqRank) || 3000;
      count++;
    }
    const avg = sum / count;
    return clamp(100 - (avg - 500) / 30, 40, 100);
  }

  /**
   * 候选总分
   * cand: { entry, fullName, chars, givenChars, tones, pinyins, strokes, structures, givenLen, compatSurname }
   * input: { gender, blessings, birthSeason }
   */
  function scoreCandidate(cand, input) {
    const p = window.NamesApp.Phonetics.scorePhonetic(cand);
    const s = window.NamesApp.Calligraphy.scoreShape(cand);
    const m = window.NamesApp.Meaning.scoreMeaning(cand.entry, {
      surname: cand.compatSurname,
      userBlessings: input.blessings,
      birthSeason: input.birthSeason
    });
    const g = genderScore(cand.entry, input.gender);
    const f = freqScore(cand.givenChars);

    const w = config().weights;
    // 按比例归一：用户滑杆无需合计 100
    const wsum = w.phonetic + w.shape + w.meaning + w.gender + w.freq || 1;
    const total = (w.phonetic * p.score + w.shape * s.score + w.meaning * m.score + w.gender * g + w.freq * f) / wsum;

    return {
      total: Math.round(total * 10) / 10,
      totalInt: Math.round(total),
      dims: { phonetic: p, shape: s, meaning: m, gender: g, freq: f },
      entry: cand.entry,
      fullName: cand.fullName,
      chars: cand.chars,
      givenChars: cand.givenChars,
      tones: cand.tones,
      pinyins: cand.pinyins,
      strokes: cand.strokes,
      structures: cand.structures,
      givenLen: cand.givenLen,
      compatSurname: cand.compatSurname,
      mode: cand.mode
    };
  }

  return { genderScore, freqScore, scoreCandidate };
})();
