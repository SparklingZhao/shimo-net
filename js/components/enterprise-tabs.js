(function () {
  function initEnterpriseTabs(root) {
    var scope = root || document;
    var tabNavs = scope.querySelectorAll(".ent-tabs");
    if (!tabNavs.length) return;

    tabNavs.forEach(function (tabNav) {
      if (tabNav.dataset.bound === "true") return;

      tabNav.dataset.bound = "true";
      var section = tabNav.closest(".ent-tabs-section") || scope;
      var tabs = Array.prototype.slice.call(tabNav.querySelectorAll(".ent-tab"));
      var panels = Array.prototype.slice.call(section.querySelectorAll(".ent-panel"));

      function activateTab(tab) {
        if (!tab) return;

        tabs.forEach(function (t) {
          t.classList.remove("is-active");
          t.setAttribute("aria-selected", "false");
        });

        panels.forEach(function (panel) {
          panel.classList.remove("is-active");
          panel.hidden = true;
        });

        tab.classList.add("is-active");
        tab.setAttribute("aria-selected", "true");

        var targetId = tab.getAttribute("aria-controls");
        var targetPanel = panels.find(function (panel) {
          return panel.id === targetId;
        });

        if (targetPanel) {
          targetPanel.classList.add("is-active");
          targetPanel.hidden = false;
        }
      }

      tabNav.addEventListener("click", function (e) {
        var tab = e.target.closest(".ent-tab");
        if (!tab || tab.classList.contains("is-active")) return;
        activateTab(tab);
      });

      tabNav.addEventListener("keydown", function (e) {
        if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;

        var currentIndex = tabs.indexOf(document.activeElement);
        if (currentIndex < 0) return;

        var nextIndex;
        if (e.key === "ArrowRight") {
          nextIndex = (currentIndex + 1) % tabs.length;
        } else {
          nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
        }

        tabs[nextIndex].focus();
        activateTab(tabs[nextIndex]);
        e.preventDefault();
      });
    });
  }

  window.initEnterpriseTabs = initEnterpriseTabs;
  initEnterpriseTabs();
})();
