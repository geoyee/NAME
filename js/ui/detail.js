// 卡片与详情：展开/收藏/复制、点评文案拼装（打分中间结果 → 模板句）
window.NamesApp = window.NamesApp || {};
window.NamesApp.UI = window.NamesApp.UI || {};
window.NamesApp.UI.Detail = (function () {
  const FAV_KEY = "namebook.favorites";

  // ---------- 点评模板渲染 ----------
  function renderNote(note) {
    const t = (window.NAMES_DB.config.commentTemplates || {})[note.key];
    if (!t) return null;
    return t.replace(/\{(\w+)\}/g, function (_, k) { return note[k] !== undefined ? note[k] : ""; });
  }

  function collectComments(c) {
    const comments = [];
    const d = c.dims;
    d.phonetic.tone.notes.forEach(n => { const s = renderNote(n); if (s) comments.push(s); });
    d.phonetic.read.notes.forEach(n => { const s = renderNote(n); if (s) comments.push(s); });
    d.meaning.notes.forEach(n => { const s = renderNote(n); if (s) comments.push(s); });
    return comments;
  }

  function collectShapeComments(c) {
    const comments = [];
    const d = c.dims.shape;
    d.stroke.notes.forEach(n => { const s = renderNote(n); if (s) comments.push(s); });
    d.structure.notes.forEach(n => { const s = renderNote(n); if (s) comments.push(s); });
    d.cursive.notes.forEach(n => { const s = renderNote(n); if (s) comments.push(s); });
    return comments;
  }

  // ---------- 收藏（localStorage，file:// 可用） ----------
  function getFavs() {
    try { return JSON.parse(localStorage.getItem(FAV_KEY)) || []; }
    catch (e) { return []; }
  }
  function setFavs(list) {
    localStorage.setItem(FAV_KEY, JSON.stringify(list));
    window.NamesApp.UI.Detail.refreshFavBadge();
  }
  function isFaved(fullName) { return getFavs().some(f => f.fullName === fullName); }
  function toggleFav(c) {
    let favs = getFavs();
    const hit = favs.findIndex(f => f.fullName === c.fullName);
    if (hit >= 0) favs.splice(hit, 1);
    else favs.push({
      fullName: c.fullName,
      given: c.entry.given,
      category: c.entry.category,
      source: c.entry.source.title,
      score: c.totalInt
    });
    setFavs(favs);
    return hit < 0; // true = 已收藏
  }
  function refreshFavBadge() {
    const el = document.getElementById("fav-count");
    if (el) el.textContent = getFavs().length;
  }

  // ---------- 卡片构建 ----------
  function buildCard(c, input, index) {
    const el = document.createElement("div");
    el.className = "card";

    const zodiac = input.birthYear ? window.NAMES_DB.config.zodiac[((input.birthYear - 4) % 12 + 12) % 12] : null;
    const catLabel = (window.NAMES_DB.config.categoryLabels || {})[c.entry.category] || c.entry.category;

    el.innerHTML =
      '<div class="card-head">' +
        '<span class="card-name">' + escapeHtml(c.fullName) + '</span>' +
        '<span class="card-badges">' +
          '<span class="score-badge" title="综合分">' + c.totalInt + '</span>' +
          (zodiac ? '<span class="zodiac-badge">' + zodiac + '</span>' : '') +
        '</span>' +
      '</div>' +
      '<div class="card-source">' + escapeHtml(c.entry.source.title) + (c.entry.source.author ? ' · ' + escapeHtml(c.entry.source.author) : '') + '</div>' +
      '<div class="card-tags">' +
        '<span class="tag-chip">' + catLabel + '</span>' +
        c.entry.tags.map(t => '<span class="tag-chip gray">' + escapeHtml(t) + '</span>').join('') +
      '</div>' +
      '<div class="card-detail"></div>' +
      '<div class="card-actions">' +
        '<button class="act-fav">♥ 收藏</button>' +
        '<button class="act-copy">📋 复制</button>' +
      '</div>';

    // 点击展开/收起
    el.addEventListener("click", function (e) {
      if (e.target.closest(".card-actions")) return;
      const open = el.classList.toggle("open");
      if (open) fillDetail(el, c, input);
    });

    // 收藏
    el.querySelector(".act-fav").addEventListener("click", function (e) {
      const faved = toggleFav(c);
      this.textContent = faved ? "♥ 已收藏" : "♥ 收藏";
      this.classList.toggle("faved", faved);
    });
    if (isFaved(c.fullName)) {
      const btn = el.querySelector(".act-fav");
      btn.textContent = "♥ 已收藏";
      btn.classList.add("faved");
    }

    // 复制
    el.querySelector(".act-copy").addEventListener("click", function () {
      copyText(c.fullName, this);
    });

    return el;
  }

  function fillDetail(el, c) {
    const d = el.querySelector(".card-detail");
    if (d.dataset.filled) return;
    d.dataset.filled = "1";
    const e = c.entry;

    const audio = collectComments(c);
    const shape = collectShapeComments(c);
    const pinyin = c.pinyins.join(" ");

    let html = "";
    html += '<div class="detail-quote">「' + escapeHtml(e.source.text) + '」' +
      '<span class="q-title">—— ' + escapeHtml(e.source.title) +
      (e.source.author ? '（' + escapeHtml(e.source.author) + ' · ' + escapeHtml(e.source.dynasty) + '）' : '') + '</span></div>';

    html += '<div class="detail-section"><b>寓意</b>' + escapeHtml(e.meaning) + '</div>';
    html += '<div class="detail-section"><b>拼音</b>' + escapeHtml(pinyin) + '</div>';

    if (audio.length) html += '<div class="detail-section"><b>音律</b>' + audio.map(escapeHtml).join('；') + '。</div>';
    if (shape.length) html += '<div class="detail-section"><b>书写</b>' + shape.map(escapeHtml).join('；') + '。</div>';

    // 五维条形图
    const dims = [
      ["音律", c.dims.phonetic.score], ["形美", c.dims.shape.score],
      ["寓意", c.dims.meaning.score], ["性别", c.dims.gender], ["字频", c.dims.freq]
    ];
    html += '<div class="dim-bars">' + dims.map(function (dd) {
      return '<div class="dim-bar">' +
        '<span class="dim-label">' + dd[0] + '</span>' +
        '<span class="dim-track"><span class="dim-fill" style="width:' + Math.round(dd[1]) + '%"></span></span>' +
        '<span class="dim-val">' + Math.round(dd[1]) + '</span></div>';
    }).join('') + '</div>';

    d.innerHTML = html;
  }

  function copyText(text, btn) {
    const done = function () {
      const old = btn.textContent;
      btn.textContent = "✓ 已复制";
      setTimeout(function () { btn.textContent = old; }, 1200);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, function () { fallbackCopy(text); done(); });
    } else { fallbackCopy(text); done(); }
  }
  function fallbackCopy(text) {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); } catch (e) {}
    document.body.removeChild(ta);
  }

  function escapeHtml(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  // 收藏抽屉渲染
  function renderFavList() {
    const list = document.getElementById("fav-list");
    const favs = getFavs();
    list.innerHTML = "";
    if (!favs.length) {
      list.innerHTML = '<p style="color:#6b655a;font-size:13px;">还没有收藏，点卡片上的「♥ 收藏」试试。</p>';
      return;
    }
    favs.forEach(function (f) {
      const item = document.createElement("div");
      item.className = "fav-item";
      item.innerHTML = '<span><span class="fav-name">' + escapeHtml(f.fullName) + '</span> · ' +
        escapeHtml(f.source) + ' · ' + f.score + '分</span>' +
        '<button data-name="' + escapeHtml(f.fullName) + '">移除</button>';
      item.querySelector("button").addEventListener("click", function () {
        setFavs(getFavs().filter(x => x.fullName !== f.fullName));
        renderFavList();
      });
      list.appendChild(item);
    });
  }

  return {
    buildCard: buildCard, renderNote: renderNote,
    getFavs: getFavs, toggleFav: toggleFav, isFaved: isFaved,
    refreshFavBadge: refreshFavBadge, renderFavList: renderFavList
  };
})();
