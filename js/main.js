(function () {
  function bootstrap() {
    if (typeof window.initFloatingContact === "function") {
      window.initFloatingContact();
    }

    initTopNavState();
  }

  function initTopNavState() {
    var nav = document.querySelector(".nav-mid");
    if (!nav) {
      return;
    }

    var navItems = Array.prototype.slice.call(nav.querySelectorAll(".nav-item"));
    var productTrigger = nav.querySelector(".nav-trigger");
    var dropdownWrapper = nav.querySelector(".has-dropdown");
    var dropdownLinks = dropdownWrapper
      ? Array.prototype.slice.call(dropdownWrapper.querySelectorAll(".dropdown a"))
      : [];

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

    if (productTrigger && dropdownWrapper) {
      productTrigger.addEventListener("click", function () {
        var isOpen = dropdownWrapper.classList.toggle("open");
        productTrigger.setAttribute("aria-expanded", String(isOpen));
      });

      dropdownLinks.forEach(function (link) {
        link.addEventListener("click", function () {
          setActive(productTrigger);
          dropdownWrapper.classList.remove("open");
          productTrigger.setAttribute("aria-expanded", "false");
        });
      });

      document.addEventListener("click", function (event) {
        if (!dropdownWrapper.contains(event.target)) {
          dropdownWrapper.classList.remove("open");
          productTrigger.setAttribute("aria-expanded", "false");
        }
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootstrap);
  } else {
    bootstrap();
  }
})();
