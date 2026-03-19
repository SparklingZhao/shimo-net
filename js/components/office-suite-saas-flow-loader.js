(function () {
  function extractMainHtml(pageHtml) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(pageHtml, "text/html");
    var mainNode = doc.querySelector("main");
    return mainNode ? mainNode.innerHTML : "";
  }

  function extractEmbeddableHtml(htmlText) {
    var mainHtml = extractMainHtml(htmlText);
    return mainHtml || htmlText;
  }

  function resolveSourceUrl(source) {
    if (!source) return source;
    if (/^(?:[a-z]+:)?\/\//i.test(source)) return source;

    function getProjectRootPath() {
      var pathname = window.location.pathname || "/";
      var markers = ["/dev/", "/main/"];

      for (var i = 0; i < markers.length; i += 1) {
        var marker = markers[i];
        var markerIndex = pathname.indexOf(marker);
        if (markerIndex !== -1) {
          return pathname.slice(0, markerIndex + marker.length);
        }
      }

      var pagesIndex = pathname.indexOf("/pages/");
      if (pagesIndex !== -1) {
        return pathname.slice(0, pagesIndex + 1);
      }

      return pathname.replace(/[^/]*$/, "");
    }

    var path = source;
    if (source.charAt(0) === "/") {
      path = getProjectRootPath() + source.slice(1);
    }

    return new URL(path, window.location.href).toString();
  }

  function rewriteRootRelativeUrls(scope) {
    if (!scope) return;

    var attrs = ["href", "src", "poster"];
    var selector = "[href^='/'], [src^='/'], [poster^='/']";
    var nodes = scope.querySelectorAll(selector);

    Array.prototype.forEach.call(nodes, function (node) {
      attrs.forEach(function (attr) {
        var value = node.getAttribute(attr);
        if (!value || value.charAt(0) !== "/") return;
        node.setAttribute(attr, resolveSourceUrl(value));
      });
    });

    var actionNodes = scope.querySelectorAll("form[action^='/']");
    Array.prototype.forEach.call(actionNodes, function (node) {
      var value = node.getAttribute("action");
      if (!value || value.charAt(0) !== "/") return;
      node.setAttribute("action", resolveSourceUrl(value));
    });

    var srcsetNodes = scope.querySelectorAll("[srcset]");
    Array.prototype.forEach.call(srcsetNodes, function (node) {
      var srcset = node.getAttribute("srcset");
      if (!srcset) return;

      var rewritten = srcset
        .split(",")
        .map(function (candidate) {
          var item = candidate.trim();
          if (!item) return item;

          var firstSpace = item.search(/\s/);
          if (firstSpace === -1) {
            return item.charAt(0) === "/" ? resolveSourceUrl(item) : item;
          }

          var urlPart = item.slice(0, firstSpace);
          var descriptor = item.slice(firstSpace);
          if (urlPart.charAt(0) !== "/") return item;
          return resolveSourceUrl(urlPart) + descriptor;
        })
        .join(", ");

      node.setAttribute("srcset", rewritten);
    });

    var styleUrlPattern = /url\(\s*(['"]?)(\/[^)'"]+)\1\s*\)/g;
    var styleNodes = scope.querySelectorAll("[style*='url(/'], [style*='url(\"/'], [style*='url(\\'/']");
    Array.prototype.forEach.call(styleNodes, function (node) {
      var styleText = node.getAttribute("style");
      if (!styleText) return;
      var rewrittenStyle = styleText.replace(styleUrlPattern, function (_, quote, urlPath) {
        var resolved = resolveSourceUrl(urlPath);
        var q = quote || "";
        return "url(" + q + resolved + q + ")";
      });
      node.setAttribute("style", rewrittenStyle);
    });
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
    var resolvedSource = resolveSourceUrl(source);

    slot.innerHTML = '<div class="container pc-flow-loading">模块内容加载中...</div>';

    return fetch(resolvedSource)
      .then(function (response) {
        if (!response.ok) {
          throw new Error("加载失败: " + resolvedSource);
        }
        return response.text();
      })
      .then(function (htmlText) {
        slot.innerHTML = extractEmbeddableHtml(htmlText);
        rewriteRootRelativeUrls(slot);
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
