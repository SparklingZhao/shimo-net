(function () {
  function bootstrap() {
    if (typeof window.initFloatingContact === "function") {
      window.initFloatingContact();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootstrap);
  } else {
    bootstrap();
  }
})();
