(function () {
  var main = document.getElementById("appMain");
  if (!main) return;

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
  }

  function loadMergeSlot(slot) {
    var source = slot.getAttribute("data-merge-source");
    if (!source) return Promise.resolve();

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
          '<div class="container content-error">内容加载失败，请稍后重试。</div>';
      });
  }

  function loadHomeContent() {
    fetch("./home-content.html")
      .then(function (response) {
        if (!response.ok) {
          throw new Error("加载失败: home-content.html");
        }

        return response.text();
      })
      .then(function (fragmentHtml) {
        main.innerHTML = fragmentHtml;
        var slots = Array.prototype.slice.call(
          main.querySelectorAll("[data-merge-source]")
        );
        return Promise.all(slots.map(loadMergeSlot));
      })
      .then(function () {
        initDynamicModules();
      })
      .catch(function () {
        main.innerHTML =
          '<div class="container content-error">首页内容加载失败，请刷新页面重试。</div>';
      });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadHomeContent);
  } else {
    loadHomeContent();
  }
})();
