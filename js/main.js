(function () {
  function bootstrap() {
    if (typeof window.initFloatingContact === "function") {
      window.initFloatingContact();
    }

    if (typeof window.initNavDropdowns === "function") {
      window.initNavDropdowns();
    }

    initTopNavState();
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

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootstrap);
  } else {
    bootstrap();
  }
})();
