(function () {
  function initSecurityHubTabs() {
    var tabNav = document.querySelector(".sh-tab-nav");
    if (!tabNav || tabNav.dataset.bound === "true") return;
    tabNav.dataset.bound = "true";

    var tabs = tabNav.querySelectorAll(".sh-tab-btn");
    var panels = document.querySelectorAll(".sh-tab-panel");

    function activate(idx) {
      tabs.forEach(function (btn, i) {
        var isActive = i === idx;
        btn.classList.toggle("is-active", isActive);
        btn.setAttribute("aria-selected", isActive ? "true" : "false");
      });

      panels.forEach(function (panel, i) {
        var isActive = i === idx;
        panel.classList.toggle("is-active", isActive);
        panel.hidden = !isActive;
      });
    }

    tabNav.addEventListener("click", function (e) {
      var btn = e.target.closest(".sh-tab-btn");
      if (!btn || btn.classList.contains("is-active")) return;
      var idx = parseInt(btn.dataset.idx, 10);
      if (!isNaN(idx)) activate(idx);
    });

    tabNav.addEventListener("keydown", function (e) {
      if (e.key !== "ArrowUp" && e.key !== "ArrowDown" &&
          e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
      var currentIdx = Array.prototype.indexOf.call(tabs, document.activeElement);
      if (currentIdx < 0) return;
      var isNext = e.key === "ArrowDown" || e.key === "ArrowRight";
      var next = isNext
        ? (currentIdx + 1) % tabs.length
        : (currentIdx - 1 + tabs.length) % tabs.length;
      tabs[next].focus();
      activate(next);
      e.preventDefault();
    });

    activate(0);
  }

  window.initSecurityHubTabs = initSecurityHubTabs;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSecurityHubTabs);
  } else {
    initSecurityHubTabs();
  }
})();
