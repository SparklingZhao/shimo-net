/**
 * 集成案例：左侧竖向 tab 切换右侧场景卡片。
 * - 独立打开 pages/webofficesdk/integration.html：DOMContentLoaded 时初始化。
 * - welcome.html?page=… 动态注入：由 home-content-loader 在内容插入后调用 initDpSceneTabs(main)。
 */
(function () {
  var hashChangeBound = false;

  function activateScene(group, targetId, focusTab) {
    var tabs = group.querySelectorAll("[role='tab']");
    var panels = group.querySelectorAll("[data-scene-panel]");

    Array.prototype.forEach.call(tabs, function (tab) {
      var isActive = tab.getAttribute("data-scene-target") === targetId;
      tab.classList.toggle("is-active", isActive);
      tab.setAttribute("aria-selected", isActive ? "true" : "false");
      tab.setAttribute("tabindex", isActive ? "0" : "-1");
      if (isActive && focusTab) {
        tab.focus();
      }
    });

    Array.prototype.forEach.call(panels, function (panel) {
      var isActive = panel.id === targetId;
      panel.classList.toggle("is-active", isActive);
      panel.hidden = !isActive;
    });
  }

  function bindGroup(group) {
    if (group.getAttribute("data-scene-bound") === "true") {
      return;
    }
    group.setAttribute("data-scene-bound", "true");

    var tabs = Array.prototype.slice.call(group.querySelectorAll("[role='tab']"));

    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        activateScene(group, tab.getAttribute("data-scene-target"), false);
      });

      tab.addEventListener("keydown", function (event) {
        var currentIndex = tabs.indexOf(tab);
        var nextIndex = currentIndex;

        if (event.key === "ArrowDown" || event.key === "ArrowRight") {
          nextIndex = (currentIndex + 1) % tabs.length;
        } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
          nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
        } else if (event.key === "Home") {
          nextIndex = 0;
        } else if (event.key === "End") {
          nextIndex = tabs.length - 1;
        } else {
          return;
        }

        event.preventDefault();
        activateScene(group, tabs[nextIndex].getAttribute("data-scene-target"), true);
      });
    });

    if (window.location.hash) {
      var targetPanel = group.querySelector(
        window.location.hash + "[data-scene-panel]"
      );
      if (targetPanel) {
        activateScene(group, targetPanel.id, false);
      }
    }
  }

  function initDpSceneTabs(scope) {
    var root = scope || document;
    var sceneGroups = root.querySelectorAll("[data-scene-tabs]");

    Array.prototype.forEach.call(sceneGroups, function (group) {
      bindGroup(group);
    });

    if (!hashChangeBound) {
      hashChangeBound = true;
      window.addEventListener("hashchange", function () {
        var all = document.querySelectorAll("[data-scene-tabs]");
        Array.prototype.forEach.call(all, function (group) {
          var targetPanel = window.location.hash
            ? group.querySelector(window.location.hash + "[data-scene-panel]")
            : null;

          if (targetPanel) {
            activateScene(group, targetPanel.id, false);
          }
        });
      });
    }
  }

  window.initDpSceneTabs = initDpSceneTabs;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      initDpSceneTabs();
    });
  } else {
    initDpSceneTabs();
  }
})();
