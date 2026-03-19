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
    "suite-business": {
      source: "/pages/suite/business.html",
      mode: "page",
      title: "石墨办公套件 面向团队 - 石墨文档企业服务",
      mainClass: DEFAULT_MAIN_CLASS + " pc-page"
    },
    "suite-enterprise": {
      source: "/pages/suite/enterprise.html",
      mode: "page",
      title: "石墨办公套件 面向企业 - 石墨文档企业服务",
      mainClass: DEFAULT_MAIN_CLASS + " pc-page"
    },
    "sdk-integration": {
      source: "/pages/sdk/integration.html",
      mode: "page",
      title: "石墨文档中台 面向集成 - 石墨文档企业服务",
      mainClass: DEFAULT_MAIN_CLASS + " dp-page"
    },
    "office-suite-saas": {
      source: "/pages/suite/business.html",
      mode: "page",
      title: "石墨办公套件公有云服务 - 石墨文档企业服务",
      mainClass: DEFAULT_MAIN_CLASS + " pc-page"
    },
    "office-suite-private": {
      source: "/pages/suite/enterprise.html",
      mode: "page",
      title: "石墨办公套件私有化服务 - 石墨文档企业服务",
      mainClass: DEFAULT_MAIN_CLASS + " pc-page"
    },
    "weboffice-sdk": {
      source: "/pages/sdk/integration.html",
      mode: "page",
      title: "石墨文档中台 - 石墨文档企业服务",
      mainClass: DEFAULT_MAIN_CLASS + " dp-page"
    },
    collaboration: {
      source: "/pages/features/collaboration.html",
      mode: "page",
      title: "文档协作 - 石墨文档企业服务",
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

    if (typeof window.initKnowledgeTabs === "function") {
      window.initKnowledgeTabs();
    }

    if (typeof window.initEnterpriseTabs === "function") {
      window.initEnterpriseTabs();
    }

    if (typeof window.initSecurityHubTabs === "function") {
      window.initSecurityHubTabs();
    }

    if (typeof window.initOfficeSuiteSaasCarousel === "function") {
      window.initOfficeSuiteSaasCarousel(main);
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

    fetch(config.source)
      .then(function (response) {
        if (!response.ok) {
          throw new Error("加载失败: " + config.source);
        }

        return response.text();
      })
      .then(function (htmlText) {
        main.innerHTML = config.mode === "page" ? extractMainHtml(htmlText) : htmlText;
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
