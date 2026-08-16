// 寓意维度：出处权重、祝福方向匹配、姓氏妙配（金风玉露式双关）、寓意深度
window.NamesApp = window.NamesApp || {};
window.NamesApp.Meaning = (function () {
  function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }

  function config() { return window.NAMES_DB.config || {}; }

  // 出处权重（40%）：千古名句 > 名篇 > 雅词；单字词条 base 70
  function sourceScore(entry) {
    if (entry.length === 1) return 70;
    if (entry.frequency === "legend") return 100;
    if (entry.frequency === "classic") return 85;
    return 60;
  }

  // 祝福方向匹配（30%）：命中用户所选方向的比例
  function blessScore(entry, userBlessings) {
    if (!userBlessings || userBlessings.length === 0) return 70;
    const hits = entry.tags.filter(t => userBlessings.includes(t)).length;
    return 70 + 30 * (hits / userBlessings.length);
  }

  // 姓氏妙配（20%）：命中策展表 = 100，未命中 = 0（不给分不扣分）
  // 双字名取「姓+名首字」或「姓+完整名」匹配；单字/四字名取「姓+单字」匹配
  function compatScore(surname, given) {
    const list = config().surnameCompat || [];
    const first = given[0];
    for (const c of list) {
      if (c.surname === surname && (c.given === given || c.given === first)) {
        return { score: 100, note: c.note };
      }
    }
    return { score: 0, note: "" };
  }

  // 寓意深度（10%）：双关/比兴/对仗标注；单字词条寓意完整
  function depthScore(entry) {
    let s = 0;
    if (entry.meaning && /双关|比兴|对仗|谐音/.test(entry.meaning)) s += 5;
    if (entry.length === 1 && entry.meaning && entry.meaning.length >= 10) s += 5;
    return s;
  }

  /**
   * 寓意总分
   * entry: 词条
   * ctx: { surname(双关检查用姓，四字名=母姓), userBlessings, birthSeason }
   */
  function scoreMeaning(entry, ctx) {
    const src = sourceScore(entry);
    const bl = blessScore(entry, ctx.userBlessings);
    const cp = compatScore(ctx.surname, entry.given);
    const dp = depthScore(entry);

    let score = 0.40 * src + 0.30 * bl + 0.20 * cp.score + 0.10 * dp;
    const notes = [];

    if (cp.score) notes.push({ key: "compat", note: cp.note });
    if (entry.length === 2 && entry.frequency === "legend") notes.push({ key: "sourceLegend", title: entry.source.title });
    else if (entry.length === 2 && entry.frequency === "classic") notes.push({ key: "sourceClassic", title: entry.source.title });
    if (entry.category === "medicine") notes.push({ key: "sourceHerb" });

    // 季节加分（词条 season 含出生季节 → +5）
    if (ctx.birthSeason && entry.season && entry.season.includes(ctx.birthSeason)) {
      score += 5;
      notes.push({ key: "season", season: ctx.birthSeason });
    }

    return {
      score: clamp(Math.round(score * 10) / 10, 0, 100),
      source: src, bless: bl, compat: cp.score, depth: dp, notes: notes
    };
  }

  return { sourceScore, blessScore, compatScore, depthScore, scoreMeaning };
})();
