(function () {
  function initOfficeSuiteSaasCarousel(root) {
    var scope = root || document;
    var viewport = scope.querySelector("[data-carousel-viewport]");
    var track = scope.querySelector("[data-carousel-track]");
    var prevBtn = scope.querySelector("[data-carousel-prev]");
    var nextBtn = scope.querySelector("[data-carousel-next]");
    var dots = Array.prototype.slice.call(
      scope.querySelectorAll("[data-carousel-dot]")
    );

    if (!viewport || !track || dots.length === 0) {
      return;
    }

    if (track.dataset.bound === "true") {
      return;
    }
    track.dataset.bound = "true";

    var slides = Array.prototype.slice.call(track.children);
    if (slides.length === 0) {
      return;
    }

    var index = 0;
    var maxIndex = slides.length - 1;

    function update() {
      var width = viewport.clientWidth;
      track.style.transform = "translateX(-" + index * width + "px)";
      dots.forEach(function (dot, i) {
        dot.classList.toggle("is-active", i === index);
      });
    }

    function goTo(nextIndex) {
      if (nextIndex < 0) {
        index = maxIndex;
      } else if (nextIndex > maxIndex) {
        index = 0;
      } else {
        index = nextIndex;
      }
      update();
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", function () {
        goTo(index - 1);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", function () {
        goTo(index + 1);
      });
    }

    dots.forEach(function (dot) {
      dot.addEventListener("click", function () {
        var nextIndex = Number(dot.getAttribute("data-carousel-dot"));
        if (!Number.isNaN(nextIndex)) {
          goTo(nextIndex);
        }
      });
    });

    window.addEventListener("resize", update);
    update();
  }

  window.initOfficeSuiteSaasCarousel = initOfficeSuiteSaasCarousel;
  initOfficeSuiteSaasCarousel();
})();
