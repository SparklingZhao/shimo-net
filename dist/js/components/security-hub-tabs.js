(function () {
  function initSecurityHubTabs() {
    var tabNav = document.querySelector(".sh-tab-nav");
    if (!tabNav || tabNav.dataset.bound === "true") return;
    tabNav.dataset.bound = "true";

    var tabs = Array.prototype.slice.call(
      tabNav.querySelectorAll(".sh-tab-btn")
    );
    var panels = Array.prototype.slice.call(
      document.querySelectorAll(".sh-tab-panel")
    );

    function syncUrl(tabKey) {
      if (!tabKey || !window.history || !window.history.replaceState) return;

      var url = new URL(window.location.href);
      url.searchParams.set("tab", tabKey);
      url.hash = "";
      window.history.replaceState(null, "", url.toString());
    }

    function activate(idx, shouldSyncUrl) {
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

      if (shouldSyncUrl && tabs[idx]) {
        syncUrl(tabs[idx].getAttribute("data-tab"));
      }
    }

    function getRequestedTabIndex() {
      var params = new URLSearchParams(window.location.search);
      var requestedTab = params.get("tab") || (window.location.hash || "").replace(/^#/, "");
      if (!requestedTab) return 0;

      var matchedIndex = tabs.findIndex(function (tab) {
        return tab.getAttribute("data-tab") === requestedTab;
      });

      return matchedIndex >= 0 ? matchedIndex : 0;
    }

    tabNav.addEventListener("click", function (e) {
      var btn = e.target.closest(".sh-tab-btn");
      if (!btn || btn.classList.contains("is-active")) return;
      var idx = parseInt(btn.dataset.idx, 10);
      if (!isNaN(idx)) activate(idx, true);
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
      activate(next, true);
      e.preventDefault();
    });

    activate(getRequestedTabIndex(), false);
  }

  window.initSecurityHubTabs = initSecurityHubTabs;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSecurityHubTabs);
  } else {
    initSecurityHubTabs();
  }
})();
