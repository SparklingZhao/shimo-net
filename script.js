(function () {
  'use strict';

  // ---------- 高光跟随 ----------
  var cursorGlow = document.getElementById('cursorGlow');
  var body = document.body;

  function initCursorGlow() {
    if (!cursorGlow || window.matchMedia('(max-width: 1023px)').matches) return;
    body.classList.add('has-glow');
    document.addEventListener('mousemove', function (e) {
      cursorGlow.style.left = e.clientX + 'px';
      cursorGlow.style.top = e.clientY + 'px';
    });
  }

  initCursorGlow();
  window.addEventListener('resize', function () {
    if (window.matchMedia('(max-width: 1023px)').matches) body.classList.remove('has-glow');
    else if (cursorGlow) body.classList.add('has-glow');
  });

  // ---------- 3D 透视倾斜 ----------
  var tiltElements = document.querySelectorAll('[data-tilt]');

  function clamp(v, min, max) {
    return Math.min(Math.max(v, min), max);
  }

  function initTilt(el) {
    if (!el) return;
    var rect = el.getBoundingClientRect();
    var maxTilt = 8;
    var maxTiltY = 4;

    el.addEventListener('mousemove', function (e) {
      rect = el.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      var w = rect.width;
      var h = rect.height;
      var centerX = w / 2;
      var centerY = h / 2;
      var rotateX = ((y - centerY) / centerY) * -maxTiltY;
      var rotateY = ((x - centerX) / centerX) * maxTilt;
      rotateX = clamp(rotateX, -maxTiltY, maxTiltY);
      rotateY = clamp(rotateY, -maxTilt, maxTilt);
      el.style.transform = 'perspective(1000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
    });

    el.addEventListener('mouseleave', function () {
      el.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
  }

  tiltElements.forEach(initTilt);

  // 导航内链 3D 微交互
  document.querySelectorAll('.nav-center a, .nav-right .nav-link, .btn-demo').forEach(function (link) {
    link.addEventListener('mouseenter', function () {
      this.style.transform = 'translateZ(8px) scale(1.02)';
    });
    link.addEventListener('mouseleave', function () {
      this.style.transform = 'translateZ(0) scale(1)';
    });
  });

  // ---------- 视差滚动 ----------
  var parallaxLayers = document.querySelectorAll('.parallax-layer');

  function updateParallax() {
    var scrollY = window.scrollY || window.pageYOffset;
    var vh = window.innerHeight;

    parallaxLayers.forEach(function (layer) {
      var speed = parseFloat(layer.getAttribute('data-speed')) || 0.5;
      var rect = layer.getBoundingClientRect();
      var top = rect.top + scrollY;
      var layerCenter = top + rect.height / 2;
      var viewportCenter = scrollY + vh / 2;
      var offset = (viewportCenter - layerCenter) * (1 - speed) * 0.15;
      layer.style.transform = 'translate3d(0, ' + offset + 'px, 0)';
    });
  }

  function onScroll() {
    requestAnimationFrame(updateParallax);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  updateParallax();
})();
