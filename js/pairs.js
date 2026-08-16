// 双胞胎/龙凤胎配对取名：从 data/pairs.js 配对表生成成对名字
// 每半独立走「构建候选 → 过滤 → 打分」，对分取平均排序
window.NamesApp = window.NamesApp || {};
window.NamesApp.Pairs = (function () {
  const C = function () { return window.NamesApp.Candidate; };
  const S = function () { return window.NamesApp.Scoring; };

  function entryByGiven(given) {
    return (window.NAMES_DB.names || []).find(n => n.given === given);
  }

  // 配对场景性别匹配：mm 男男 / ff 女女 / mf 龙凤（u 任意）
  function pairOk(pair, pairType) {
    if (pairType === "mf") {
      const g = h => h.gender === "u" ? null : h.gender;
      const ga = g(pair.a), gb = g(pair.b);
      return (ga === "m" && gb === "f") || (ga === "f" && gb === "m") ||
             (ga === "m" && gb === null) || (ga === "f" && gb === null) ||
             (ga === null && gb === "m") || (ga === null && gb === "f");
    }
    const ok = h => h.gender === "u" || h.gender === (pairType === "mm" ? "m" : "f");
    return ok(pair.a) && ok(pair.b);
  }

  /**
   * 随姓方式（splitMode）：
   *   ff       均随父姓
   *   fm       均随母姓（无母姓则回退父姓）
   *   fmOrder  长随父姓，幼随母姓
   *   mfOrder  长随母姓，幼随父姓
   *   genderA  男随父姓，女随母姓（龙凤胎专属）
   *   genderB  女随父姓，男随母姓（龙凤胎专属）
   */
  function surnameFor(half, index, input) {
    const father = (input.fatherSurname || "").trim();
    const mother = (input.motherSurname || "").trim();
    const motherOk = mother && mother !== father;
    const split = input.splitMode || "ff";
    if (split === "fm" && motherOk) return mother;
    if (split === "fmOrder") return index === 1 && motherOk ? mother : father;
    if (split === "mfOrder") return index === 0 && motherOk ? mother : father;
    if (split === "genderA" && motherOk) {
      if (half.gender === "m") return father;
      if (half.gender === "f") return mother;
      return index === 0 ? father : mother;
    }
    if (split === "genderB" && motherOk) {
      if (half.gender === "f") return father;
      if (half.gender === "m") return mother;
      return index === 0 ? mother : father;
    }
    return father;
  }

  /**
   * input: { fatherSurname, motherSurname?, pairType: "mm"|"ff"|"mf", splitMode,
   *          styles, taboo, blessings, count }
   * 返回 { pairs: [{ pair, a, b, total, totalInt }], totalFiltered, ms }
   */
  function generate(input) {
    const t0 = (typeof performance !== "undefined" && performance.now) ? performance.now() : Date.now();
    input.count = Math.max(1, Math.min(100, parseInt(input.count, 10) || 10));
    const list = (window.NAMES_DB.pairs || []).filter(p => pairOk(p, input.pairType));
    const sur = C().resolveSurname(input.fatherSurname);
    if (!sur || !C().isCJK(sur.text)) return { pairs: [], totalFiltered: 0, ms: 0 };
    const cats = C().stylesToCategories(input.styles);
    // 配对模式不做性别硬过滤（pairOk 已保证），评分按不限性别
    const scoreInput = Object.assign({}, input, { gender: "any" });
    const filterInput = Object.assign({}, input, { gender: "any" });

    const halves = [["a", 0], ["b", 1]];
    const out = [];
    for (const p of list) {
      const ea = entryByGiven(p.a.given);
      const eb = entryByGiven(p.b.given);
      if (!ea || !eb) continue;
      if (cats && !cats.has(ea.category) && !cats.has(eb.category)) continue;

      // 每半独立决定随姓（支持一随父一随母）
      const buildHalf = (entry, half, index) => {
        const surname = surnameFor(half, index, input);
        const sur = C().resolveSurname(surname);
        if (!sur) return null;
        const halfInput = Object.assign({}, filterInput, { fatherSurname: surname });
        const c = C().makeCandidate(entry, sur, halfInput, entry.length === 2 ? "double" : "single");
        const [f] = C().filterCandidates([c], filterInput);
        if (!f) return null;
        return S().scoreCandidate(f, scoreInput);
      };
      const sa = buildHalf(ea, p.a, 0);
      const sb = buildHalf(eb, p.b, 1);
      if (!sa || !sb) continue;

      const avg = (sa.total + sb.total) / 2;
      out.push({
        pair: p,
        a: sa, b: sb,
        total: Math.round(avg * 10) / 10,
        totalInt: Math.round(avg)
      });
    }
    out.sort((x, y) => y.total - x.total || y.a.total + y.b.total - (x.a.total + x.b.total));
    const t1 = (typeof performance !== "undefined" && performance.now) ? performance.now() : Date.now();
    const PAIR_CAP = 60;
    return {
      pairs: out.slice(0, input.count || 10),
      all: out.slice(0, PAIR_CAP),
      totalFiltered: out.length,
      ms: Math.round((t1 - t0) * 10) / 10
    };
  }

  return { generate: generate, pairOk: pairOk, surnameFor: surnameFor };
})();
