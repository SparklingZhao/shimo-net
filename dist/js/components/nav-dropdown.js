(function () {
  function initNavDropdowns() {
    var wrappers = Array.prototype.slice.call(document.querySelectorAll(".has-dropdown"));
    var currentOpen = null;
    var hoverMedia = window.matchMedia("(hover: hover) and (pointer: fine)");
    var viewportModeBreakpoint = 720;
    var gutter = 12;

    if (!wrappers.length) {
      return;
    }

    function isDesktopHoverMode() {
      return hoverMedia.matches && window.innerWidth > 980;
    }

    function getTrigger(wrapper) {
      return wrapper.querySelector(".nav-trigger");
    }

    function getDropdown(wrapper) {
      return wrapper.querySelector(".dropdown");
    }

    function clearPlacement(dropdown) {
      dropdown.classList.remove("dropdown-align-right", "dropdown-align-viewport");
      dropdown.style.removeProperty("--dropdown-fixed-top");
    }

    function placeDropdown(wrapper) {
      var trigger = getTrigger(wrapper);
      var dropdown = getDropdown(wrapper);
      var triggerRect;
      var dropdownWidth;
      var viewportWidth;
      var leftAlignedRightEdge;
      var rightAlignedLeftEdge;
      var needsViewportMode;

      if (!trigger || !dropdown) {
        return;
      }

      clearPlacement(dropdown);

      triggerRect = trigger.getBoundingClientRect();
      dropdownWidth = Math.ceil(dropdown.offsetWidth);
      viewportWidth = window.innerWidth;

      leftAlignedRightEdge = triggerRect.left + dropdownWidth;
      rightAlignedLeftEdge = triggerRect.right - dropdownWidth;
      needsViewportMode =
        viewportWidth <= viewportModeBreakpoint ||
        dropdownWidth >= viewportWidth - gutter * 2 ||
        (leftAlignedRightEdge > viewportWidth - gutter && rightAlignedLeftEdge < gutter);

      if (needsViewportMode) {
        dropdown.classList.add("dropdown-align-viewport");
        dropdown.style.setProperty("--dropdown-fixed-top", Math.round(triggerRect.bottom + 10) + "px");
        return;
      }

      if (leftAlignedRightEdge <= viewportWidth - gutter) {
        return;
      }

      dropdown.classList.add("dropdown-align-right");
    }

    function openDropdown(wrapper) {
      var trigger = getTrigger(wrapper);

      if (!wrapper || currentOpen === wrapper) {
        if (wrapper) {
          placeDropdown(wrapper);
        }
        return;
      }

      closeDropdown(currentOpen);
      placeDropdown(wrapper);
      wrapper.classList.add("open");
      currentOpen = wrapper;

      if (trigger) {
        trigger.setAttribute("aria-expanded", "true");
      }
    }

    function closeDropdown(wrapper) {
      var trigger = wrapper ? getTrigger(wrapper) : null;
      var dropdown = wrapper ? getDropdown(wrapper) : null;

      if (!wrapper) {
        return;
      }

      wrapper.classList.remove("open");

      if (trigger) {
        trigger.setAttribute("aria-expanded", "false");
      }

      if (dropdown) {
        clearPlacement(dropdown);
      }

      if (currentOpen === wrapper) {
        currentOpen = null;
      }
    }

    wrappers.forEach(function (wrapper) {
      var trigger = getTrigger(wrapper);
      var dropdown = getDropdown(wrapper);
      var closeTimer = null;

      if (!trigger || !dropdown) {
        return;
      }

      trigger.setAttribute("aria-haspopup", "true");
      trigger.setAttribute("aria-expanded", "false");

      wrapper.addEventListener("mouseenter", function () {
        if (!isDesktopHoverMode()) {
          return;
        }

        clearTimeout(closeTimer);
        openDropdown(wrapper);
      });

      wrapper.addEventListener("mouseleave", function () {
        if (!isDesktopHoverMode()) {
          return;
        }

        closeTimer = setTimeout(function () {
          closeDropdown(wrapper);
        }, 150);
      });

      trigger.addEventListener("click", function (event) {
        event.preventDefault();

        if (wrapper.classList.contains("open")) {
          closeDropdown(wrapper);
          return;
        }

        openDropdown(wrapper);
      });

      wrapper.addEventListener("focusin", function () {
        openDropdown(wrapper);
      });

      wrapper.addEventListener("focusout", function () {
        window.setTimeout(function () {
          if (!wrapper.contains(document.activeElement)) {
            closeDropdown(wrapper);
          }
        }, 0);
      });
    });

    document.addEventListener("click", function (event) {
      if (currentOpen && !currentOpen.contains(event.target)) {
        closeDropdown(currentOpen);
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && currentOpen) {
        closeDropdown(currentOpen);
      }
    });

    window.addEventListener("resize", function () {
      if (currentOpen) {
        placeDropdown(currentOpen);
      }
    });

    window.addEventListener("scroll", function () {
      if (currentOpen) {
        placeDropdown(currentOpen);
      }
    }, { passive: true });
  }

  window.initNavDropdowns = initNavDropdowns;
})();
