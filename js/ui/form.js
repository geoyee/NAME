// 表单交互：复姓识别、母姓入名切换、chips 互斥、示例填充
window.NamesApp = window.NamesApp || {};
window.NamesApp.UI = window.NamesApp.UI || {};
window.NamesApp.UI.Form = (function () {
  let state = { gender: "any", modes: ["double"], styles: ["any"], blessings: [], sort: "total", mode: "single", pairType: "mf", motherFirst: false, splitMode: "ff" };

  function $(id) { return document.getElementById(id); }

  function init() {
    initWeights();
    // 取名模式切换：单名 / 配对（双胞胎/龙凤胎）
    $("mode-switch").addEventListener("click", function (e) {
      const btn = e.target.closest(".pill");
      if (!btn) return;
      $("mode-switch").querySelectorAll(".pill").forEach(p => p.classList.remove("active"));
      btn.classList.add("active");
      state.mode = btn.dataset.value;
      const isPair = state.mode === "pair";
      $("pair-type-field").style.display = isPair ? "" : "none";
      $("pair-split-field").style.display = isPair ? "" : "none";
      $("gender-field").style.display = isPair ? "none" : "";
      $("length-field").style.display = isPair ? "none" : "";
      $("mother-field").style.display = "";
      // 配对模式下隐藏「母姓入名」勾选（改用随姓方式），单名模式恢复
      $("use-mother-line").style.display = isPair ? "none" : "";
      $("mother-order-field").style.display = (!isPair && $("use-mother").checked) ? "" : "none";
    });
    $("pair-type-group").addEventListener("click", function (e) {
      const btn = e.target.closest(".pill");
      if (!btn) return;
      $("pair-type-group").querySelectorAll(".pill").forEach(p => p.classList.remove("active"));
      btn.classList.add("active");
      state.pairType = btn.dataset.value;
      // 龙凤胎才显示性别随姓选项；非龙凤胎时若选中了性别随姓则回退「均随父姓」
      $("pair-split-mf").style.display = state.pairType === "mf" ? "" : "none";
      if (state.pairType !== "mf" && (state.splitMode === "genderA" || state.splitMode === "genderB")) {
        setSplitMode("ff");
      }
    });

    // 随姓方式（配对模式）：两组 chips 互斥
    function setSplitMode(v) {
      state.splitMode = v;
      document.querySelectorAll("#pair-split-group .chip, #pair-split-mf .chip").forEach(function (c) {
        c.classList.toggle("active", c.dataset.value === v);
      });
    }
    $("pair-split-group").addEventListener("click", function (e) {
      const btn = e.target.closest(".chip");
      if (btn) setSplitMode(btn.dataset.value);
    });
    $("pair-split-mf").addEventListener("click", function (e) {
      const btn = e.target.closest(".chip");
      if (btn) setSplitMode(btn.dataset.value);
    });
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

    // 母姓入名子选项组：排列（父前/母前）× 用字（单字→三字名 / 双字→四字名）
    // 复姓父姓时禁用：复姓+双字名本身就是四字名
    const useMother = $("use-mother");
    const isCompoundSurname = function (s) {
      return (window.NAMES_DB.surnames.compound || []).some(x => x.surname === s);
    };
    const syncMotherForms = function () {
      const father = $("father").value.trim();
      const mother = $("mother").value.trim();
      const sameSurname = mother && mother === father;
      const fatherCompound = isCompoundSurname(father);
      let title = "";
      if (!useMother.checked) title = "";
      else if (!mother) title = "请先填写母亲姓氏";
      else if (fatherCompound) title = "复姓+双字名即为四字名，无需母姓入名";
      else if (sameSurname) title = "母姓与父姓相同，母姓入名无意义";
      const disabled = !useMother.checked || !mother || sameSurname || fatherCompound;
      ["mode-tri", "mode-quad"].forEach(function (id) {
        const chip = $(id);
        chip.disabled = disabled;
        chip.title = title;
        if (disabled) {
          chip.classList.remove("active");
          state.modes = state.modes.filter(m => m !== "tri" && m !== "quad");
        }
      });
      $("mother-order-field").style.display = useMother.checked && !sameSurname && !fatherCompound ? "" : "none";
    };
    useMother.addEventListener("change", syncMotherForms);
    $("father").addEventListener("input", syncMotherForms);
    $("mother").addEventListener("input", syncMotherForms);

    // 排列方式：父姓在前 / 母姓在前
    $("mother-order-group").addEventListener("click", function (e) {
      const btn = e.target.closest(".pill");
      if (!btn) return;
      $("mother-order-group").querySelectorAll(".pill").forEach(p => p.classList.remove("active"));
      btn.classList.add("active");
      state.motherFirst = btn.dataset.value === "mother";
    });

    // 填入示例
    $("btn-example").addEventListener("click", fillExample);
  }

  function bindSurname(inputId, hintId) {
    const input = $(inputId);
    const hint = $(hintId);
    input.addEventListener("input", function () {
      const v = input.value.trim();
      if (!v) { hint.textContent = ""; return; }
      // 非汉字输入提示（生成时也会拦截）
      if (!/^[一-龥]+$/.test(v)) {
        hint.textContent = "✗ 姓氏请输入汉字";
        return;
      }
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
    $("mode-tri").disabled = false;
    $("mode-quad").disabled = false;
    // 排列：父姓在前
    $("mother-order-group").querySelectorAll(".pill").forEach(p => p.classList.toggle("active", p.dataset.value === "father"));
    state.motherFirst = false;
    $("mother-order-field").style.display = "";
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

  // ---------- 打分权重（可拖拽调整，localStorage 持久化） ----------
  const WEIGHTS_KEY = "namebook.weights";
  const weightKeys = ["phonetic", "shape", "meaning", "gender", "freq"];

  function defaultWeights() {
    const d = (window.NAMES_DB.config || {}).defaultWeights;
    return d || { phonetic: 30, shape: 25, meaning: 35, gender: 5, freq: 5 };
  }

  function getSavedWeights() {
    try {
      const s = JSON.parse(localStorage.getItem(WEIGHTS_KEY));
      if (s && typeof s.phonetic === "number" && typeof s.meaning === "number") return s;
    } catch (e) {}
    return defaultWeights();
  }

  function initWeights() {
    const saved = getSavedWeights();
    weightKeys.forEach(function (key) {
      const el = $("w-" + key);
      const val = $("wv-" + key);
      el.value = Math.round(saved[key]);
      val.textContent = Math.round(saved[key]);
      el.addEventListener("input", function () { val.textContent = this.value; });
    });
    $("btn-weight-reset").addEventListener("click", function () {
      const d = defaultWeights();
      weightKeys.forEach(function (key) {
        $("w-" + key).value = d[key];
        $("wv-" + key).textContent = d[key];
      });
      localStorage.removeItem(WEIGHTS_KEY);
    });
  }

  // 读取滑杆权重（打分按比例自动归一，无需合计为 100）
  function getWeights() {
    const w = {};
    weightKeys.forEach(function (key) {
      w[key] = parseInt($("w-" + key).value, 10) || 0;
    });
    try { localStorage.setItem(WEIGHTS_KEY, JSON.stringify(w)); } catch (e) { /* 存储不可用时忽略 */ }
    return w;
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
      birthMonth: $("birth-month").value ? parseInt($("birth-month").value, 10) : null,
      mode: state.mode,
      pairType: state.pairType,
      motherFirst: state.motherFirst,
      splitMode: state.splitMode
    };
  }

  function getState() { return state; }

  return { init: init, buildInput: buildInput, getState: getState, fillExample: fillExample, getWeights: getWeights, initWeights: initWeights };
})();
