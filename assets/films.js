(function () {
  function initFilms() {
    var videos = document.querySelectorAll('.film-video');
    if (!videos.length) return;
    videos.forEach(function (video) {
      // When this video starts playing, pause all the others.
      video.addEventListener('play', function () {
        videos.forEach(function (other) {
          if (other !== video && !other.paused) other.pause();
        });
      });
    });
  }

  function initCarousel() {
    var track = document.getElementById('appstoreTrack');
    if (!track) return;
    var slides = Array.prototype.slice.call(track.querySelectorAll('.appstore-slide'));
    if (!slides.length) return;

    function currentIndex() {
      // Find the slide whose center is closest to the track's visible center.
      var center = track.scrollLeft + track.clientWidth / 2;
      var best = 0;
      var bestDist = Infinity;
      slides.forEach(function (s, i) {
        var sCenter = s.offsetLeft + s.offsetWidth / 2;
        var d = Math.abs(sCenter - center);
        if (d < bestDist) { bestDist = d; best = i; }
      });
      return best;
    }

    function scrollToIndex(i) {
      var clamped = Math.max(0, Math.min(slides.length - 1, i));
      slides[clamped].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }

    document.querySelectorAll('[data-carousel-nav]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var dir = btn.getAttribute('data-carousel-nav') === 'next' ? 1 : -1;
        scrollToIndex(currentIndex() + dir);
      });
    });
  }

  function init() {
    initFilms();
    initCarousel();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
