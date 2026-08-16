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
    // 出生月份 → 季节
    input.birthSeason = input.birthMonth ? (window.NAMES_DB.config.seasonMap || {})[input.birthMonth] : null;
    const result = window.NamesApp.Candidate.generate(input);
    window.NamesApp.UI.Results.render(result, input);
  }

  function init() {
    window.NamesApp.UI.Form.init();

    $("btn-generate").addEventListener("click", generate);

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
