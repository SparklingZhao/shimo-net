(function () {
  function initDocumentTabs() {
    var tabContainer = document.querySelector(".doc-collab-tabs");
    if (!tabContainer || tabContainer.dataset.bound === "true") return;

    tabContainer.dataset.bound = "true";

    var tabs = Array.prototype.slice.call(
      tabContainer.querySelectorAll(".doc-collab-tab")
    );
    var panels = Array.prototype.slice.call(
      document.querySelectorAll(".doc-collab-panel")
    );

    function activateTab(tab) {
      if (!tab) return;

      tabs.forEach(function (item) {
        item.classList.remove("is-active");
        item.setAttribute("aria-selected", "false");
      });

      panels.forEach(function (panel) {
        panel.classList.remove("is-active");
        panel.hidden = true;
      });

      tab.classList.add("is-active");
      tab.setAttribute("aria-selected", "true");

      var targetId = tab.getAttribute("aria-controls");
      var targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add("is-active");
        targetPanel.hidden = false;
      }
    }

    tabContainer.addEventListener("click", function (event) {
      var tab = event.target.closest(".doc-collab-tab");
      if (!tab || tab.classList.contains("is-active")) return;
      activateTab(tab);
    });

    tabContainer.addEventListener("keydown", function (event) {
      if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;

      var currentIndex = Array.prototype.indexOf.call(tabs, document.activeElement);
      if (currentIndex < 0) return;

      var nextIndex =
        event.key === "ArrowRight"
          ? (currentIndex + 1) % tabs.length
          : (currentIndex - 1 + tabs.length) % tabs.length;

      tabs[nextIndex].focus();
      activateTab(tabs[nextIndex]);
      event.preventDefault();
    });
  }

  window.initDocumentTabs = initDocumentTabs;
  initDocumentTabs();
})();
