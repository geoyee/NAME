// 表单交互：复姓识别、母姓入名切换、chips 互斥、示例填充
window.NamesApp = window.NamesApp || {};
window.NamesApp.UI = window.NamesApp.UI || {};
window.NamesApp.UI.Form = (function () {
  let state = { gender: "any", modes: ["double"], styles: ["any"], blessings: [], sort: "total" };

  function $(id) { return document.getElementById(id); }

  function init() {
    // 出生年份选项（今年 + 前 11 年）
    const yearSel = $("birth-year");
    const now = new Date();
    const thisYear = now.getFullYear();
    for (let y = thisYear; y >= thisYear - 11; y--) {
      const o = document.createElement("option");
      o.value = String(y);
      o.textContent = y + " 年";
      yearSel.appendChild(o);
    }
    // 月份选项
    const monthSel = $("birth-month");
    for (let m = 1; m <= 12; m++) {
      const o = document.createElement("option");
      o.value = String(m);
      o.textContent = m + " 月";
      monthSel.appendChild(o);
    }
    // 祝福方向 chips
    const cfg = window.NAMES_DB.config;
    const bg = $("blessing-group");
    (cfg.blessingTags || []).forEach(function (t) {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "chip";
      b.dataset.value = t;
      b.textContent = t;
      b.addEventListener("click", function () {
        b.classList.toggle("active");
        state.blessings = Array.prototype.slice.call(bg.querySelectorAll(".chip.active")).map(x => x.dataset.value);
      });
      bg.appendChild(b);
    });

    // 姓氏输入：复姓识别
    bindSurname("father", "father-hint");
    bindSurname("mother", "mother-hint");

    // 性别 pill
    bindPills("gender-group", function (v) { state.gender = v; });

    // 名字长度 chips（多选；四字名依赖母姓入名）
    const modeGroup = $("mode-group");
    modeGroup.addEventListener("click", function (e) {
      const btn = e.target.closest(".chip");
      if (!btn || btn.disabled) return;
      btn.classList.toggle("active");
      state.modes = Array.prototype.slice.call(modeGroup.querySelectorAll(".chip.active")).map(x => x.dataset.value);
      if (state.modes.length === 0) { btn.classList.add("active"); state.modes = [btn.dataset.value]; } // 至少保留一个
    });

    // 风格 chips（「不限」与其余互斥）
    const styleGroup = $("style-group");
    styleGroup.addEventListener("click", function (e) {
      const btn = e.target.closest(".chip");
      if (!btn) return;
      if (btn.dataset.value === "any") {
        styleGroup.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
        btn.classList.add("active");
        state.styles = ["any"];
      } else {
        styleGroup.querySelector('[data-value="any"]').classList.remove("active");
        btn.classList.toggle("active");
        const active = Array.prototype.slice.call(styleGroup.querySelectorAll(".chip.active")).map(x => x.dataset.value);
        state.styles = active.length ? active : ["any"];
        if (!active.length) styleGroup.querySelector('[data-value="any"]').classList.add("active");
      }
    });

    // 母姓入名（四字名 = 父姓+母姓+双字）
    // 复姓父姓时四字名禁用：复姓+双字名本身就是四字名
    const useMother = $("use-mother");
    const isCompoundSurname = function (s) {
      return (window.NAMES_DB.surnames.compound || []).some(x => x.surname === s);
    };
    const syncQuad = function () {
      const father = $("father").value.trim();
      const mother = $("mother").value.trim();
      const quad = $("mode-quad");
      const sameSurname = mother && mother === father;
      const fatherCompound = isCompoundSurname(father);
      let title = "";
      if (fatherCompound) title = "复姓+双字名即为四字名，无需母姓入名";
      else if (sameSurname) title = "母姓与父姓相同，四字名无意义";
      quad.disabled = !useMother.checked || sameSurname || fatherCompound;
      quad.title = title;
      if (!useMother.checked || sameSurname || fatherCompound) {
        quad.classList.remove("active");
        state.modes = state.modes.filter(m => m !== "quad");
      }
    };
    useMother.addEventListener("change", syncQuad);
    $("father").addEventListener("input", syncQuad);
    $("mother").addEventListener("input", syncQuad);

    // 填入示例
    $("btn-example").addEventListener("click", fillExample);
  }

  function bindSurname(inputId, hintId) {
    const input = $(inputId);
    const hint = $(hintId);
    input.addEventListener("input", function () {
      const v = input.value.trim();
      if (!v) { hint.textContent = ""; return; }
      const compound = (window.NAMES_DB.surnames.compound || []).some(s => s.surname === v);
      const single = (window.NAMES_DB.surnames.single || []).some(s => s.surname === v);
      if (compound) hint.textContent = "✓ 已识别复姓：" + v + "（复姓+双字名即为四字名）";
      else if (single) hint.textContent = "";
      else hint.textContent = "自定义姓氏（笔画将按字估算）";
    });
  }

  function bindPills(groupId, onSelect) {
    const group = $(groupId);
    group.addEventListener("click", function (e) {
      const btn = e.target.closest(".pill");
      if (!btn) return;
      group.querySelectorAll(".pill").forEach(p => p.classList.remove("active"));
      btn.classList.add("active");
      onSelect(btn.dataset.value);
    });
  }

  function fillExample() {
    $("father").value = "叶";
    $("father-hint").textContent = "";
    $("mother").value = "林";
    $("mother-hint").textContent = "";
    $("use-mother").checked = true;
    $("mode-quad").disabled = false;
    // 性别：不限
    $("gender-group").querySelectorAll(".pill").forEach(p => p.classList.toggle("active", p.dataset.value === "any"));
    state.gender = "any";
    // 长度：双字 + 四字
    $("mode-group").querySelectorAll(".chip").forEach(c => c.classList.toggle("active", c.dataset.value === "double" || c.dataset.value === "quad"));
    state.modes = ["double", "quad"];
    // 风格：不限
    $("style-group").querySelectorAll(".chip").forEach(c => c.classList.toggle("active", c.dataset.value === "any"));
    state.styles = ["any"];
    // 祝福：清朗 + 自然
    $("blessing-group").querySelectorAll(".chip").forEach(c => c.classList.toggle("active", c.dataset.value === "清朗" || c.dataset.value === "自然"));
    state.blessings = ["清朗", "自然"];
    $("taboo").value = "";
    $("count").value = "15";
    $("birth-year").value = "";
    $("birth-month").value = "";
    window.NamesApp.App.generate();
  }

  // 收集表单输入（供 App 调用）
  function buildInput() {
    const mother = $("mother").value.trim();
    return {
      fatherSurname: $("father").value.trim(),
      motherSurname: mother,
      modes: state.modes.slice(),
      gender: state.gender,
      styles: state.styles.slice(),
      taboo: ($("taboo").value || "").split(/[、,，\s]+/).filter(Boolean),
      blessings: state.blessings.slice(),
      count: parseInt($("count").value, 10) || 15,
      birthYear: $("birth-year").value ? parseInt($("birth-year").value, 10) : null,
      birthMonth: $("birth-month").value ? parseInt($("birth-month").value, 10) : null
    };
  }

  function getState() { return state; }

  return { init: init, buildInput: buildInput, getState: getState, fillExample: fillExample };
})();
