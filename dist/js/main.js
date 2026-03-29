(function () {
  function bootstrap() {
    if (typeof window.initFloatingContact === "function") {
      window.initFloatingContact();
    }

    if (typeof window.initNavDropdowns === "function") {
      window.initNavDropdowns();
    }

    initTopNavState();
    initMobileNav();
  }

  function initTopNavState() {
    var nav = document.querySelector(".nav-mid");
    if (!nav) {
      return;
    }

    var navItems = Array.prototype.slice.call(nav.querySelectorAll(".nav-item"));
    var dropdownLinks = Array.prototype.slice.call(nav.querySelectorAll(".dropdown a"));

    function setActive(target) {
      navItems.forEach(function (item) {
        item.classList.remove("is-active");
      });

      if (target) {
        target.classList.add("is-active");
      }
    }

    navItems.forEach(function (item) {
      item.addEventListener("click", function () {
        setActive(item);
      });
    });

    dropdownLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        var wrapper = link.closest(".has-dropdown");
        var trigger = wrapper ? wrapper.querySelector(".nav-trigger") : null;

        if (trigger) {
          setActive(trigger);
        }
      });
    });
  }

  function initMobileNav() {
    var body = document.body;
    var toggle = document.getElementById("siteNavToggle");
    var close = document.getElementById("siteNavClose");
    var panel = document.getElementById("siteNavPanel");
    var backdrop = document.getElementById("siteNavBackdrop");
    var desktopBreakpoint = 980;

    if (!toggle || !panel || !backdrop) {
      return;
    }

    function isMobileViewport() {
      return window.innerWidth <= desktopBreakpoint;
    }

    function setExpanded(expanded) {
      toggle.setAttribute("aria-expanded", expanded ? "true" : "false");
      toggle.setAttribute("aria-label", expanded ? "关闭主导航" : "打开主导航");
      panel.setAttribute("aria-hidden", expanded ? "false" : "true");
      body.classList.toggle("nav-open", expanded);
      backdrop.hidden = !expanded;
    }

    function closePanel() {
      setExpanded(false);
    }

    function openPanel() {
      setExpanded(true);
    }

    toggle.addEventListener("click", function () {
      if (body.classList.contains("nav-open")) {
        closePanel();
        return;
      }

      openPanel();
    });

    if (close) {
      close.addEventListener("click", closePanel);
    }
    backdrop.addEventListener("click", closePanel);

    panel.addEventListener("click", function (event) {
      var target = event.target.closest("a, button");

      if (!target) {
        return;
      }

      if (target.classList.contains("nav-trigger")) {
        return;
      }

      closePanel();
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && body.classList.contains("nav-open")) {
        closePanel();
      }
    });

    window.addEventListener("resize", function () {
      if (!isMobileViewport()) {
        closePanel();
        return;
      }

      if (body.classList.contains("nav-open")) {
        backdrop.hidden = false;
      }
    });

    setExpanded(false);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootstrap);
  } else {
    bootstrap();
  }
})();
