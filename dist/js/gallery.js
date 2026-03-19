(function () {
  var IMAGE_DIR_URL = "/assets/images/";
  var MANIFEST_URL = "/docs/images-manifest.json";

  var state = {
    allImages: [],
    filteredImages: []
  };

  function sortNames(a, b) {
    return a.localeCompare(b, "zh-CN");
  }

  function normalizeName(name) {
    return String(name || "").trim();
  }

  function getImageRecord(name) {
    var normalized = normalizeName(name);
    return {
      name: normalized,
      relativePath: "assets/images/" + normalized,
      urlPath: IMAGE_DIR_URL + normalized,
      src: IMAGE_DIR_URL + encodeURIComponent(normalized)
    };
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function parseNamesFromDirectoryText(text) {
    var names = [];
    var seen = new Set();

    var hrefPattern = /href\s*=\s*["']([^"']+\.png(?:\?[^"']*)?)["']/gi;
    var hrefMatch = null;
    while ((hrefMatch = hrefPattern.exec(text))) {
      var href = hrefMatch[1].split("?")[0];
      var clean = href.replace(/^.*\//, "");
      clean = decodeURIComponent(clean);
      if (!seen.has(clean)) {
        names.push(clean);
        seen.add(clean);
      }
    }

    var rawPathPattern = /(?:^|[\s"'(])([a-zA-Z0-9._@%-]+\.png)(?:$|[\s"')])/g;
    var rawMatch = null;
    while ((rawMatch = rawPathPattern.exec(text))) {
      var direct = decodeURIComponent(rawMatch[1]);
      if (!seen.has(direct)) {
        names.push(direct);
        seen.add(direct);
      }
    }

    return names;
  }

  async function fetchByDirectoryIndex() {
    var response = await fetch(IMAGE_DIR_URL, { cache: "no-store" });
    if (!response.ok) {
      throw new Error("目录读取失败: " + response.status);
    }

    var text = await response.text();
    var names = parseNamesFromDirectoryText(text);
    if (!names.length) {
      throw new Error("目录中未解析到 PNG");
    }

    return names;
  }

  async function fetchByManifest() {
    var response = await fetch(MANIFEST_URL, { cache: "no-store" });
    if (!response.ok) {
      throw new Error("清单读取失败: " + response.status);
    }

    var data = await response.json();
    if (!data || !Array.isArray(data.items)) {
      throw new Error("清单格式不正确");
    }

    return data.items.map(function (item) {
      return item && item.name;
    }).filter(Boolean);
  }

  async function loadImages() {
    var source = "";
    var names = [];

    try {
      names = await fetchByDirectoryIndex();
      source = "assets/images 目录索引";
    } catch (directoryError) {
      names = await fetchByManifest();
      source = "docs/images-manifest.json（目录索引不可用，使用清单回退）";
    }

    var unique = Array.from(new Set(names.map(normalizeName).filter(Boolean)));
    unique.sort(sortNames);

    state.allImages = unique.map(getImageRecord);
    state.filteredImages = state.allImages.slice();
    updateMeta(source);
    renderGrid();
  }

  function updateMeta(source) {
    var meta = document.getElementById("galleryMeta");
    if (!meta) {
      return;
    }
    meta.textContent = "共 " + state.filteredImages.length + " / " + state.allImages.length + " 张图片，数据源：" + source;
  }

  function renderGrid() {
    var grid = document.getElementById("galleryGrid");
    var empty = document.getElementById("emptyState");

    if (!grid || !empty) {
      return;
    }

    if (!state.filteredImages.length) {
      grid.innerHTML = "";
      empty.hidden = false;
      return;
    }

    empty.hidden = true;
    grid.innerHTML = state.filteredImages.map(function (item) {
      return [
        "<article class=\"gallery-card\">",
        "  <div class=\"gallery-thumb-wrap\">",
        "    <img class=\"gallery-thumb\" loading=\"lazy\" src=\"" + escapeHtml(item.src) + "\" alt=\"" + escapeHtml(item.name) + "\">",
        "  </div>",
        "  <div class=\"gallery-info\">",
        "    <p class=\"gallery-name\">" + escapeHtml(item.name) + "</p>",
        "    <p class=\"gallery-path\">" + escapeHtml(item.relativePath) + "</p>",
        "  </div>",
        "</article>"
      ].join("");
    }).join("");
  }

  function applySearch(keyword) {
    var value = normalizeName(keyword).toLowerCase();
    if (!value) {
      state.filteredImages = state.allImages.slice();
    } else {
      state.filteredImages = state.allImages.filter(function (item) {
        return item.name.toLowerCase().indexOf(value) > -1;
      });
    }
    updateMeta("当前内存数据");
    renderGrid();
  }

  function bindEvents() {
    var searchInput = document.getElementById("searchInput");
    var refreshBtn = document.getElementById("refreshBtn");

    if (searchInput) {
      searchInput.addEventListener("input", function (event) {
        applySearch(event.target.value);
      });
    }

    if (refreshBtn) {
      refreshBtn.addEventListener("click", function () {
        loadImages().catch(showError);
      });
    }
  }

  function showError(error) {
    var message = error && error.message ? error.message : "未知错误";
    var meta = document.getElementById("galleryMeta");
    if (meta) {
      meta.textContent = "加载失败：" + message;
    }
    state.allImages = [];
    state.filteredImages = [];
    renderGrid();
  }

  function bootstrap() {
    bindEvents();
    loadImages().catch(showError);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootstrap);
  } else {
    bootstrap();
  }
})();
