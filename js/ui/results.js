// 结果区：卡片瀑布渲染、排序切换、空态、摘要
window.NamesApp = window.NamesApp || {};
window.NamesApp.UI = window.NamesApp.UI || {};
window.NamesApp.UI.Results = (function () {
  let candidates = [];       // 当前候选集（含五维分）
  let allList = [];          // 全部分批候选（供「换一批」翻页）
  let sortedAll = [];        // 按当前排序键全量排序后的列表（翻页窗口基于它）
  let pairMode = false;      // 当前是否配对模式
  let input = null;          // 当前输入
  let pageStart = 0;         // 当前批起始下标

  function $(id) { return document.getElementById(id); }

  function pageSize() {
    return input && input.count ? input.count : 15;
  }

  function pageCount() {
    return Math.max(1, Math.ceil(allList.length / pageSize()));
  }

  function render(result, inp) {
    candidates = result.candidates;
    allList = result.all || result.candidates;
    pairMode = false;
    input = inp;
    pageStart = 0;
    applySort(window.NamesApp.UI.Form.getState().sort);

    // 单名模式恢复排序控件（配对模式隐藏排序、保留「换一批」）
    $("sort-label").style.display = "";
    $("sort-group").style.display = "";

    const summary = $("summary");
    summary.classList.remove("hidden");
    $("sort-row").classList.remove("hidden");
    updateSummary(result);
    updateBatchLabel();

    const empty = $("empty");
    if (allList.length === 0) empty.classList.remove("hidden");
    else empty.classList.add("hidden");
  }

  function updateSummary(result) {
    const summary = $("summary");
    const zodiac = input.birthYear ? " · 生肖：" + window.NAMES_DB.config.zodiac[((input.birthYear - 4) % 12 + 12) % 12] : "";
    summary.textContent = "共生成 " + result.totalGenerated + " 候选 → 通过 " + result.totalFiltered +
      " · 用时 " + result.ms + "ms" + zodiac;
  }

  function updateBatchLabel() {
    const btn = $("btn-next-batch");
    const n = pageSize();
    const pages = pageCount();
    if (allList.length > n) {
      btn.classList.remove("hidden");
      btn.textContent = "换一批 ⟳（第 " + (Math.floor(pageStart / n) + 1) + " / " + pages + " 批）";
    } else {
      btn.classList.add("hidden");
    }
  }

  function nextBatch() {
    const n = pageSize();
    if (allList.length <= n) return;
    pageStart += n;
    if (pageStart >= allList.length) pageStart = 0;   // 循环换批
    if (pairMode) drawPairCards(allList.slice(pageStart, pageStart + n));
    else drawCards(sortedAll.slice(pageStart, pageStart + n));
    updateBatchLabel();
  }

  // 全量排序（保持翻页窗口一致），candidates 仍为首批（兼容测试/摘要）
  function applySort(key) {
    const access = {
      total: function (c) { return c.total; },
      phonetic: function (c) { return c.dims.phonetic.score; },
      shape: function (c) { return c.dims.shape.score; },
      meaning: function (c) { return c.dims.meaning.score; }
    }[key] || function (c) { return c.total; };
    sortedAll = allList.slice().sort(function (a, b) {
      return access(b) - access(a) || b.dims.meaning.score - a.dims.meaning.score;
    });
    candidates = sortedAll.slice(0, pageSize());
    const n = pageSize();
    drawCards(sortedAll.slice(pageStart, pageStart + n));
  }

  function drawCards(list) {
    const cards = $("cards");
    cards.innerHTML = "";
    list.forEach(function (c, i) {
      cards.appendChild(window.NamesApp.UI.Detail.buildCard(c, input, i));
    });
  }

  // ---------- 配对模式渲染 ----------
  function renderPairs(result, inp) {
    candidates = [];
    allList = result.all || result.pairs;
    pairMode = true;
    input = inp;
    pageStart = 0;
    // 配对模式：保留「换一批」，隐藏排序控件（配对按平均分排序，不支持重排）
    $("sort-row").classList.remove("hidden");
    $("sort-label").style.display = "none";
    $("sort-group").style.display = "none";

    const summary = $("summary");
    const typeLabel = { mm: "双胞胎（兄弟）", ff: "双胞胎（姐妹）", mf: "龙凤胎" }[inp.pairType] || "";
    summary.textContent = "配对取名 · " + typeLabel + " → 共 " + result.totalFiltered + " 对 · 用时 " + result.ms + "ms";
    summary.classList.remove("hidden");
    updateBatchLabel();

    drawPairCards(allList.slice(0, pageSize()));

    const empty = $("empty");
    if (allList.length === 0) empty.classList.remove("hidden");
    else empty.classList.add("hidden");
  }

  function drawPairCards(list) {
    const cards = $("cards");
    cards.innerHTML = "";
    list.forEach(function (p, i) {
      cards.appendChild(window.NamesApp.UI.Detail.buildPairCard(p, input, i));
    });
  }

  return { render: render, applySort: applySort, renderPairs: renderPairs, nextBatch: nextBatch, getCandidates: function () { return candidates; } };
})();
