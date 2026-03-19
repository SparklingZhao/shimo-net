(function () {
  function initFloatingContact() {
    var wrap = document.querySelector(".float-contact");
    var btn = document.getElementById("floatContactToggle");
    if (!wrap || !btn) return;

    var links = wrap.querySelectorAll(".float-item");
    var activePointerId = null;
    var startX = 0;
    var startY = 0;
    var startLeft = 0;
    var startTop = 0;
    var dragging = false;
    var dragThreshold = 6;

    function setExpanded(open) {
      wrap.classList.toggle("open", open);
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    }

    function clampAndSetPosition(left, top) {
      var rect = wrap.getBoundingClientRect();
      var maxLeft = Math.max(0, window.innerWidth - rect.width);
      var maxTop = Math.max(0, window.innerHeight - rect.height);
      var clamp = window.SiteUtils && window.SiteUtils.clamp
        ? window.SiteUtils.clamp
        : function (value, min, max) {
            return Math.min(Math.max(value, min), max);
          };

      var nextLeft = clamp(left, 0, maxLeft);
      var nextTop = clamp(top, 0, maxTop);
      wrap.style.left = nextLeft + "px";
      wrap.style.top = nextTop + "px";
      wrap.style.right = "auto";
      wrap.style.bottom = "auto";
    }

    btn.addEventListener("pointerdown", function (e) {
      activePointerId = e.pointerId;
      dragging = false;
      startX = e.clientX;
      startY = e.clientY;
      var rect = wrap.getBoundingClientRect();
      startLeft = rect.left;
      startTop = rect.top;
      btn.setPointerCapture(e.pointerId);
    });

    btn.addEventListener("pointermove", function (e) {
      if (activePointerId !== e.pointerId) return;
      var dx = e.clientX - startX;
      var dy = e.clientY - startY;

      if (!dragging && (Math.abs(dx) > dragThreshold || Math.abs(dy) > dragThreshold)) {
        dragging = true;
      }
      if (!dragging) return;

      e.preventDefault();
      clampAndSetPosition(startLeft + dx, startTop + dy);
    });

    btn.addEventListener("pointerup", function (e) {
      if (activePointerId !== e.pointerId) return;
      if (!dragging) {
        setExpanded(!wrap.classList.contains("open"));
      }
      activePointerId = null;
      dragging = false;
    });

    btn.addEventListener("pointercancel", function (e) {
      if (activePointerId !== e.pointerId) return;
      activePointerId = null;
      dragging = false;
    });

    wrap.addEventListener("click", function (e) {
      e.stopPropagation();
    });

    links.forEach(function (link) {
      link.addEventListener("click", function () {
        setExpanded(false);
      });
    });

    document.addEventListener("click", function () {
      setExpanded(false);
    });

    window.addEventListener("resize", function () {
      if (wrap.style.left || wrap.style.top) {
        var rect = wrap.getBoundingClientRect();
        clampAndSetPosition(rect.left, rect.top);
      }
    });
  }

  window.initFloatingContact = initFloatingContact;
})();
