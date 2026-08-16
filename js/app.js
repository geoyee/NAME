// 应用入口：组装表单、生成、排序、收藏抽屉
window.NamesApp = window.NamesApp || {};
window.NamesApp.App = (function () {
  function $(id) { return document.getElementById(id); }

  function generate() {
    const input = window.NamesApp.UI.Form.buildInput();
    if (!input.fatherSurname) {
      alert("请先填写父亲姓氏");
      return;
    }
    // 乱输入防护：姓氏必须为汉字
    const isCJK = function (s) { return /^[一-龥]+$/.test(s); };
    if (!isCJK(input.fatherSurname)) {
      alert("父亲姓氏请输入汉字（如：王、欧阳）");
      return;
    }
    if (input.motherSurname && !isCJK(input.motherSurname)) {
      alert("母亲姓氏请输入汉字");
      return;
    }
    // 自定义权重（滑杆 → 运行时覆盖 config，打分模块按比例自动归一）
    window.NAMES_DB.config.weights = window.NamesApp.UI.Form.getWeights();
    // 出生月份 → 季节
    input.birthSeason = input.birthMonth ? (window.NAMES_DB.config.seasonMap || {})[input.birthMonth] : null;

    if (input.mode === "pair") {
      const result = window.NamesApp.Pairs.generate(input);
      window.NamesApp.UI.Results.renderPairs(result, input);
    } else {
      const result = window.NamesApp.Candidate.generate(input);
      window.NamesApp.UI.Results.render(result, input);
    }
  }

  function init() {
    window.NamesApp.UI.Form.init();

    $("btn-generate").addEventListener("click", generate);

    // 换一批（循环翻页，不重新生成）
    $("btn-next-batch").addEventListener("click", function () {
      window.NamesApp.UI.Results.nextBatch();
    });

    // 排序切换（仅重排，不重算）
    $("sort-group").addEventListener("click", function (e) {
      const btn = e.target.closest(".chip");
      if (!btn) return;
      $("sort-group").querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
      btn.classList.add("active");
      window.NamesApp.UI.Form.getState().sort = btn.dataset.value;
      window.NamesApp.UI.Results.applySort(btn.dataset.value);
    });

    // 收藏抽屉
    $("btn-fav").addEventListener("click", function () {
      window.NamesApp.UI.Detail.renderFavList();
      $("fav-overlay").classList.remove("hidden");
    });
    $("btn-fav-close").addEventListener("click", function () {
      $("fav-overlay").classList.add("hidden");
    });
    $("fav-overlay").addEventListener("click", function (e) {
      if (e.target === this) this.classList.add("hidden");
    });
    $("btn-fav-clear").addEventListener("click", function () {
      if (confirm("确定清空全部收藏？")) {
        localStorage.removeItem("namebook.favorites");
        window.NamesApp.UI.Detail.refreshFavBadge();
        window.NamesApp.UI.Detail.renderFavList();
      }
    });

    window.NamesApp.UI.Detail.refreshFavBadge();
  }

  return { init: init, generate: generate };
})();

window.NamesApp.App.init();
