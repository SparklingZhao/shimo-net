(function () {
  function extractMainHtml(pageHtml) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(pageHtml, "text/html");
    var mainNode = doc.querySelector("main");
    return mainNode ? mainNode.innerHTML : "";
  }

  function initDynamicModules() {
    if (typeof window.initDocTabs === "function") {
      window.initDocTabs();
    }

    if (typeof window.initKnowledgeTabs === "function") {
      window.initKnowledgeTabs();
    }

    if (typeof window.initEnterpriseTabs === "function") {
      window.initEnterpriseTabs();
    }

    if (typeof window.initSecurityHubTabs === "function") {
      window.initSecurityHubTabs();
    }
  }

  function loadMergeSlot(slot) {
    var source = slot.getAttribute("data-merge-source");
    if (!source) return Promise.resolve();

    slot.innerHTML = '<div class="container pc-flow-loading">模块内容加载中...</div>';

    return fetch(source)
      .then(function (response) {
        if (!response.ok) {
          throw new Error("加载失败: " + source);
        }
        return response.text();
      })
      .then(function (htmlText) {
        slot.innerHTML = extractMainHtml(htmlText);
      })
      .catch(function () {
        slot.innerHTML =
          '<div class="container pc-flow-error">模块加载失败，请刷新页面重试。</div>';
      });
  }

  function loadAll() {
    var slots = Array.prototype.slice.call(
      document.querySelectorAll(".pc-flow-slot[data-merge-source]")
    );
    if (!slots.length) return;

    Promise.all(slots.map(loadMergeSlot)).then(function () {
      initDynamicModules();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadAll);
  } else {
    loadAll();
  }
})();
