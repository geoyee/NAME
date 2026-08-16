// 结果区：卡片瀑布渲染、排序切换、空态、摘要
window.NamesApp = window.NamesApp || {};
window.NamesApp.UI = window.NamesApp.UI || {};
window.NamesApp.UI.Results = (function () {
  let candidates = [];       // 当前候选集（含五维分）
  let input = null;          // 当前输入

  function $(id) { return document.getElementById(id); }

  function render(result, inp) {
    candidates = result.candidates;
    input = inp;
    applySort(window.NamesApp.UI.Form.getState().sort);

    // 摘要
    const summary = $("summary");
    const zodiac = inp.birthYear ? " · 生肖：" + window.NAMES_DB.config.zodiac[((inp.birthYear - 4) % 12 + 12) % 12] : "";
    summary.textContent = "共生成 " + result.totalGenerated + " 候选 → 通过 " + result.totalFiltered +
      " → 展示前 " + candidates.length + " · 用时 " + result.ms + "ms" + zodiac;
    summary.classList.remove("hidden");
    $("sort-row").classList.remove("hidden");

    const empty = $("empty");
    if (candidates.length === 0) {
      empty.classList.remove("hidden");
    } else {
      empty.classList.add("hidden");
    }
  }

  function applySort(key) {
    const access = {
      total: function (c) { return c.total; },
      phonetic: function (c) { return c.dims.phonetic.score; },
      shape: function (c) { return c.dims.shape.score; },
      meaning: function (c) { return c.dims.meaning.score; }
    }[key] || function (c) { return c.total; };
    const sorted = candidates.slice().sort(function (a, b) {
      return access(b) - access(a) || b.dims.meaning.score - a.dims.meaning.score;
    });
    drawCards(sorted);
  }

  function drawCards(list) {
    const cards = $("cards");
    cards.innerHTML = "";
    list.forEach(function (c, i) {
      cards.appendChild(window.NamesApp.UI.Detail.buildCard(c, input, i));
    });
  }

  return { render: render, applySort: applySort, getCandidates: function () { return candidates; } };
})();
