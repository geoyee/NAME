// 形美维度：笔画搭配、结构搭配、连笔（行书连写）友好度
window.NamesApp = window.NamesApp || {};
window.NamesApp.Calligraphy = (function () {
  function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }

  // 取字级信息（未知字返回 null，调用方以中性分兜底）
  function charInfo(ch) {
    return (window.NAMES_DB.chars && window.NAMES_DB.chars[ch]) || null;
  }

  /**
   * 笔画搭配分（占形美 35%）
   * strokes: 全名笔画数组
   */
  function strokeScore(strokes) {
    const n = strokes.length;
    const total = strokes.reduce((a, b) => a + b, 0);
    let score = 60;
    const notes = [];

    if (total >= 9 && total <= 24) { score += 10; notes.push({ key: "strokeBalance", total: total }); }
    else if (total >= 28) { score -= 20; notes.push({ key: "strokeHeavy", total: total }); }

    for (let i = 0; i < n - 1; i++) {
      if (Math.abs(strokes[i] - strokes[i + 1]) >= 8) { score -= 10; notes.push({ key: "strokeJump" }); }
    }

    // 三字以上：笔画有梯度（疏密有致）加分
    if (n >= 3) {
      const mean = total / n;
      const std = Math.sqrt(strokes.reduce((a, b) => a + (b - mean) * (b - mean), 0) / n);
      if (std >= 3) { score += 8; notes.push({ key: "strokeGradient" }); }
    }

    return { score: clamp(score, 0, 100), notes: notes };
  }

  /**
   * 结构搭配分（占形美 30%）
   * structures: 全名结构数组（未知为 null）
   */
  function structureScore(structures, givenLen) {
    const n = structures.length;
    let score = 60;
    const notes = [];

    const defined = structures.filter(s => s);
    if (n >= 3 && defined.length === n && structures.every(s => s === structures[0])) {
      score -= 15;
      notes.push({ key: "structureSame" });
    }

    if (givenLen === 2) {
      const g = structures.slice(n - 2);
      if (g[0] && g[1]) {
        if (g[0] === g[1]) score -= 8;
        else { score += 8; notes.push({ key: "structureMix" }); }
      }
    } else if (n === 2) {
      const a = structures[0], b = structures[1];
      if (a && b) {
        if (a === b) score -= 8;
        else { score += 8; notes.push({ key: "structureMix" }); }
      }
    }

    if (defined.length === n && structures.every(s => s === "single")) score -= 5;

    return { score: clamp(score, 0, 100), notes: notes };
  }

  /**
   * 连笔分（占形美 35%）
   * chars: 全名字符数组
   */
  function cursiveScore(chars) {
    const n = chars.length;
    let score = 0;
    let count = 0;
    const notes = [];

    for (const ch of chars) {
      const c = charInfo(ch);
      score += (c && c.cursiveScore) || 3;
      count++;
    }
    score = (score / count / 5) * 100;

    // 末字末笔为点/折：断笔收势
    const last = charInfo(chars[n - 1]);
    if (last && (last.lastStroke === "点" || last.lastStroke === "折")) {
      score -= 10;
      notes.push({ key: "cursiveBreak" });
    }

    // 相邻前字末笔出锋（横/竖/撇/钩）：易带出连笔
    for (let i = 0; i < n - 1; i++) {
      const c = charInfo(chars[i]);
      if (c && ["横", "竖", "撇", "钩"].includes(c.lastStroke)) score += 5;
    }

    if (!notes.length) notes.push({ key: "cursiveGood" });
    return { score: clamp(score, 0, 100), notes: notes };
  }

  /**
   * 形美总分
   * cand: { chars, givenLen, strokes, structures }
   */
  function scoreShape(cand) {
    const st = strokeScore(cand.strokes);
    const su = structureScore(cand.structures, cand.givenLen);
    const cu = cursiveScore(cand.chars);
    const score = 0.35 * st.score + 0.30 * su.score + 0.35 * cu.score;
    return { score: Math.round(score * 10) / 10, stroke: st, structure: su, cursive: cu };
  }

  return { charInfo, strokeScore, structureScore, cursiveScore, scoreShape };
})();
