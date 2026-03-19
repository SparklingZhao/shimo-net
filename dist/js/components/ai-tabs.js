(function () {
  function initAiTabs() {
    var tabContainer = document.querySelector(".ai-tabs");
    if (!tabContainer || tabContainer.dataset.bound === "true") return;

    tabContainer.dataset.bound = "true";
    var tabs = Array.prototype.slice.call(
      tabContainer.querySelectorAll(".ai-tab")
    );
    var panels = Array.prototype.slice.call(
      document.querySelectorAll(".ai-panel")
    );

    function syncUrl(tabKey) {
      if (!tabKey || !window.history || !window.history.replaceState) return;

      var url = new URL(window.location.href);
      url.searchParams.set("tab", tabKey);
      url.hash = "";
      window.history.replaceState(null, "", url.toString());
    }

    function activateTab(tab, shouldSyncUrl) {
      if (!tab) return;

      tabs.forEach(function (t) {
        t.classList.remove("is-active");
        t.setAttribute("aria-selected", "false");
      });

      panels.forEach(function (p) {
        p.classList.remove("is-active");
        p.hidden = true;
      });

      tab.classList.add("is-active");
      tab.setAttribute("aria-selected", "true");

      var targetId = tab.getAttribute("aria-controls");
      var targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add("is-active");
        targetPanel.hidden = false;
      }

      if (shouldSyncUrl) {
        syncUrl(tab.getAttribute("data-tab"));
      }
    }

    function getRequestedTab() {
      var params = new URLSearchParams(window.location.search);
      var queryTab = params.get("tab");
      if (queryTab) return queryTab;

      return (window.location.hash || "").replace(/^#/, "");
    }

    tabContainer.addEventListener("click", function (e) {
      var tab = e.target.closest(".ai-tab");
      if (!tab || tab.classList.contains("is-active")) return;
      activateTab(tab, true);
    });

    tabContainer.addEventListener("keydown", function (e) {
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;

      var currentIndex = Array.prototype.indexOf.call(tabs, document.activeElement);
      if (currentIndex < 0) return;

      var nextIndex;
      if (e.key === "ArrowRight") {
        nextIndex = (currentIndex + 1) % tabs.length;
      } else {
        nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
      }

      tabs[nextIndex].focus();
      tabs[nextIndex].click();
      e.preventDefault();
    });

    var requestedTab = getRequestedTab();
    var initialTab = tabs.find(function (tab) {
      return tab.getAttribute("data-tab") === requestedTab;
    });

    if (initialTab) {
      activateTab(initialTab, false);
    }
  }

  window.initAiTabs = initAiTabs;
  initAiTabs();
})();
