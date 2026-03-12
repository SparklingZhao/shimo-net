(function () {
  var tabContainer = document.querySelector('.know-tabs');
  if (!tabContainer) return;

  var tabs = tabContainer.querySelectorAll('.know-tab');
  var panels = document.querySelectorAll('.know-panel');

  tabContainer.addEventListener('click', function (e) {
    var tab = e.target.closest('.know-tab');
    if (!tab || tab.classList.contains('is-active')) return;

    tabs.forEach(function (t) {
      t.classList.remove('is-active');
      t.setAttribute('aria-selected', 'false');
    });

    panels.forEach(function (p) {
      p.classList.remove('is-active');
      p.hidden = true;
    });

    tab.classList.add('is-active');
    tab.setAttribute('aria-selected', 'true');

    var targetId = tab.getAttribute('aria-controls');
    var targetPanel = document.getElementById(targetId);
    if (targetPanel) {
      targetPanel.classList.add('is-active');
      targetPanel.hidden = false;
    }
  });

  tabContainer.addEventListener('keydown', function (e) {
    if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') return;

    var currentIndex = Array.prototype.indexOf.call(tabs, document.activeElement);
    if (currentIndex < 0) return;

    var nextIndex;
    if (e.key === 'ArrowDown') {
      nextIndex = (currentIndex + 1) % tabs.length;
    } else {
      nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    }

    tabs[nextIndex].focus();
    tabs[nextIndex].click();
    e.preventDefault();
  });
})();
