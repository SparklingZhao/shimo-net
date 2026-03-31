(function () {
  function getScrollOffset() {
    var topNav = document.querySelector(".top-nav");
    return (topNav ? topNav.offsetHeight : 0) + 18;
  }

  function setActiveLink(links, targetId) {
    Array.prototype.forEach.call(links, function (link) {
      var isActive = link.getAttribute("href") === "#" + targetId;
      link.classList.toggle("is-active", isActive);

      if (isActive) {
        link.setAttribute("aria-current", "true");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  function getCurrentSectionId(sections) {
    var offset = getScrollOffset() + 80;
    var currentId = sections[0].id;

    Array.prototype.forEach.call(sections, function (section) {
      if (section.getBoundingClientRect().top <= offset) {
        currentId = section.id;
      }
    });

    return currentId;
  }

  function bindLayout(layout) {
    if (!layout || layout.getAttribute("data-case-bound") === "true") {
      return;
    }

    layout.setAttribute("data-case-bound", "true");

    var links = layout.querySelectorAll("[data-case-link]");
    var sections = layout.querySelectorAll("[data-case-section]");

    if (!links.length || !sections.length) {
      return;
    }

    function syncActiveLink() {
      setActiveLink(links, getCurrentSectionId(sections));
    }

    Array.prototype.forEach.call(links, function (link) {
      link.addEventListener("click", function (event) {
        var hash = link.getAttribute("href");
        var target = hash ? document.querySelector(hash) : null;

        if (!target) {
          return;
        }

        event.preventDefault();

        var top = target.getBoundingClientRect().top + window.pageYOffset - getScrollOffset();
        var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        window.scrollTo({
          top: top,
          behavior: reduceMotion ? "auto" : "smooth"
        });

        if (window.history && window.history.replaceState) {
          window.history.replaceState(null, "", hash);
        } else {
          window.location.hash = hash;
        }

        setActiveLink(links, target.id);
      });
    });

    var ticking = false;

    function scheduleSync() {
      if (ticking) {
        return;
      }

      ticking = true;
      window.requestAnimationFrame(function () {
        ticking = false;
        syncActiveLink();
      });
    }

    var observer = new IntersectionObserver(
      function () {
        syncActiveLink();
      },
      {
        rootMargin: "-" + getScrollOffset() + "px 0px -55% 0px",
        threshold: [0.18, 0.32, 0.5]
      }
    );

    Array.prototype.forEach.call(sections, function (section) {
      observer.observe(section);
    });

    window.addEventListener("scroll", scheduleSync, { passive: true });
    window.addEventListener("resize", scheduleSync);

    var initialId = window.location.hash ? window.location.hash.slice(1) : sections[0].id;
    setActiveLink(links, initialId);
    scheduleSync();
  }

  function activateTabGroup(group, targetId, focusTab) {
    var tabs = group.querySelectorAll("[role='tab']");
    var panels = group.querySelectorAll("[data-tab-panel]");

    Array.prototype.forEach.call(tabs, function (tab) {
      var isActive = tab.getAttribute("data-tab-target") === targetId;
      tab.classList.toggle("is-active", isActive);
      tab.setAttribute("aria-selected", isActive ? "true" : "false");
      tab.setAttribute("tabindex", isActive ? "0" : "-1");

      if (isActive && focusTab) {
        tab.focus();
      }
    });

    Array.prototype.forEach.call(panels, function (panel) {
      var isActive = panel.id === targetId;
      panel.classList.toggle("is-active", isActive);
      panel.hidden = !isActive;
    });
  }

  function bindTabGroup(group) {
    if (!group || group.getAttribute("data-tabs-bound") === "true") {
      return;
    }

    group.setAttribute("data-tabs-bound", "true");

    var tabs = Array.prototype.slice.call(group.querySelectorAll("[role='tab']"));

    if (!tabs.length) {
      return;
    }

    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        activateTabGroup(group, tab.getAttribute("data-tab-target"), false);
      });

      tab.addEventListener("keydown", function (event) {
        var currentIndex = tabs.indexOf(tab);
        var nextIndex = currentIndex;

        if (event.key === "ArrowRight" || event.key === "ArrowDown") {
          nextIndex = (currentIndex + 1) % tabs.length;
        } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
          nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
        } else if (event.key === "Home") {
          nextIndex = 0;
        } else if (event.key === "End") {
          nextIndex = tabs.length - 1;
        } else {
          return;
        }

        event.preventDefault();
        activateTabGroup(group, tabs[nextIndex].getAttribute("data-tab-target"), true);
      });
    });
  }

  function initIntegrationCaseNav(scope) {
    var root = scope || document;
    var layouts = root.querySelectorAll("[data-case-layout]");
    var tabGroups = root.querySelectorAll("[data-case-tabs]");

    Array.prototype.forEach.call(layouts, bindLayout);
    Array.prototype.forEach.call(tabGroups, bindTabGroup);
  }

  window.initIntegrationCaseNav = initIntegrationCaseNav;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      initIntegrationCaseNav();
    });
  } else {
    initIntegrationCaseNav();
  }
})();
