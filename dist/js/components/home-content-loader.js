(function () {
  var main = document.getElementById("appMain");
  if (!main) return;

  var DEFAULT_TITLE = "石墨文档企业服务 - 首页";
  var DEFAULT_MAIN_CLASS = "site-main";
  var HASH_SCROLL_OFFSET = 80;
  var VIEW_CONFIG = {
    home: {
      source: "/pages/home/home-content.html",
      mode: "fragment",
      title: DEFAULT_TITLE,
      mainClass: DEFAULT_MAIN_CLASS
    },
    "officesuite-business": {
      source: "/pages/officesuite/business.html",
      mode: "page",
      title: "石墨办公套件 面向团队 - 石墨文档企业服务",
      mainClass: DEFAULT_MAIN_CLASS + " pc-page"
    },
    "officesuite-enterprise": {
      source: "/pages/officesuite/enterprise.html",
      mode: "page",
      title: "石墨办公套件 面向企业 - 石墨文档企业服务",
      mainClass: DEFAULT_MAIN_CLASS + " pc-page"
    },
    "webofficesdk-integration": {
      source: "/pages/webofficesdk/integration.html",
      mode: "page",
      title: "石墨文档中台 面向集成 - 石墨文档企业服务",
      mainClass: DEFAULT_MAIN_CLASS + " dp-page"
    },
    collaboration: {
      source: "/pages/features/collaboration.html",
      mode: "page",
      title: "文档协作 - 石墨文档企业服务",
      mainClass: DEFAULT_MAIN_CLASS
    },
    document: {
      source: "/pages/features/document.html",
      mode: "page",
      title: "文档 - 石墨文档企业服务",
      mainClass: DEFAULT_MAIN_CLASS
    },
    writer: {
      source: "/pages/features/writer.html",
      mode: "page",
      title: "文稿 - 石墨文档企业服务",
      mainClass: DEFAULT_MAIN_CLASS
    },
    sheet: {
      source: "/pages/features/sheet.html",
      mode: "page",
      title: "表格 - 石墨文档企业服务",
      mainClass: DEFAULT_MAIN_CLASS
    },
    slide: {
      source: "/pages/features/slide.html",
      mode: "page",
      title: "幻灯片 - 石墨文档企业服务",
      mainClass: DEFAULT_MAIN_CLASS
    },
    table: {
      source: "/pages/features/table.html",
      mode: "page",
      title: "应用表格 - 石墨文档企业服务",
      mainClass: DEFAULT_MAIN_CLASS
    },
    form: {
      source: "/pages/features/form.html",
      mode: "page",
      title: "表单 - 石墨文档企业服务",
      mainClass: DEFAULT_MAIN_CLASS
    },
    knowledge: {
      source: "/pages/features/knowledge.html",
      mode: "page",
      title: "知识沉淀 - 石墨文档企业服务",
      mainClass: DEFAULT_MAIN_CLASS
    },
    "security-hub": {
      source: "/pages/features/security-hub.html",
      mode: "page",
      title: "安全保障 - 石墨文档企业服务",
      mainClass: DEFAULT_MAIN_CLASS
    },
    ai: {
      source: "/pages/features/ai.html",
      mode: "page",
      title: "AI 接入 - 石墨文档企业服务",
      mainClass: DEFAULT_MAIN_CLASS
    },
    about: {
      source: "/pages/about/about.html",
      mode: "page",
      title: "石墨文档企业服务 - 关于我们",
      mainClass: DEFAULT_MAIN_CLASS + " about-page"
    },
    partner: {
      source: "/pages/partner/partner.html",
      mode: "page",
      title: "渠道合作 - 石墨文档企业服务",
      mainClass: DEFAULT_MAIN_CLASS + " partner-page"
    },
    privacy: {
      source: "/pages/legal/privacy.html",
      mode: "page",
      title: "石墨文档隐私保护政策",
      mainClass: DEFAULT_MAIN_CLASS + " privacy-page"
    },
    service: {
      source: "/pages/legal/service.html",
      mode: "page",
      title: "石墨文档服务条款",
      mainClass: DEFAULT_MAIN_CLASS + " privacy-page"
    },
    behavior: {
      source: "/pages/legal/behavior.html",
      mode: "page",
      title: "石墨文档用户行为规范",
      mainClass: DEFAULT_MAIN_CLASS + " behavior-page"
    },
    "management-panel": {
      source: "/pages/features/management-panel.html",
      mode: "page",
      title: "企业管理 - 石墨文档企业服务",
      mainClass: DEFAULT_MAIN_CLASS
    },
    enterprise: {
      source: "/pages/features/management-panel.html",
      mode: "page",
      title: "企业管理 - 石墨文档企业服务",
      mainClass: DEFAULT_MAIN_CLASS
    }
  };

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

  function getCurrentView() {
    var params = new URLSearchParams(window.location.search);
    var view = params.get("page");
    return VIEW_CONFIG[view] ? view : "home";
  }

  function getCurrentConfig() {
    return VIEW_CONFIG[getCurrentView()];
  }

  function initDynamicModules() {
    if (typeof window.initDocTabs === "function") {
      window.initDocTabs();
    }

    if (typeof window.initDocumentTabs === "function") {
      window.initDocumentTabs();
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

    if (typeof window.initOfficeSuiteCarousel === "function") {
      window.initOfficeSuiteCarousel(main);
    }

    if (typeof window.initDpSceneTabs === "function") {
      window.initDpSceneTabs(main);
    }
  }

  function loadMergeSlot(slot) {
    var source = slot.getAttribute("data-merge-source");
    if (!source) return Promise.resolve();
    var resolvedSource = resolveSourceUrl(source);

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
          '<div class="container content-error">内容加载失败，请稍后重试。</div>';
      });
  }

  function restoreHashScroll() {
    var hash = window.location.hash;
    if (!hash) return;

    var id = decodeURIComponent(hash.slice(1));
    if (!id) return;

    window.requestAnimationFrame(function () {
      var target = document.getElementById(id);
      if (!target) return;

      var top = target.getBoundingClientRect().top + window.pageYOffset - HASH_SCROLL_OFFSET;
      window.scrollTo({ top: top, behavior: "smooth" });
    });
  }

  function setMainState(config) {
    main.className = config.mainClass || DEFAULT_MAIN_CLASS;
    document.title = config.title || DEFAULT_TITLE;
  }

  function loadCurrentContent() {
    var config = getCurrentConfig();
    setMainState(config);
    var resolvedSource = resolveSourceUrl(config.source);

    fetch(resolvedSource)
      .then(function (response) {
        if (!response.ok) {
          throw new Error("加载失败: " + resolvedSource);
        }

        return response.text();
      })
      .then(function (htmlText) {
        main.innerHTML = config.mode === "page" ? extractMainHtml(htmlText) : htmlText;
        rewriteRootRelativeUrls(main);
        var slots = Array.prototype.slice.call(
          main.querySelectorAll("[data-merge-source]")
        );
        return Promise.all(slots.map(loadMergeSlot));
      })
      .then(function () {
        initDynamicModules();
        restoreHashScroll();
      })
      .catch(function () {
        main.innerHTML =
          '<div class="container content-error">页面内容加载失败，请刷新页面重试。</div>';
      });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadCurrentContent);
  } else {
    loadCurrentContent();
  }
})();
