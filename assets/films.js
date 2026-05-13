(function () {
  function init() {
    var thumbs = document.querySelectorAll('.film-thumb');
    if (!thumbs.length) return;

    thumbs.forEach(function (thumb) {
      var video = thumb.querySelector('.film-video');
      var btn = thumb.querySelector('.film-play-btn');
      if (!video || !btn) return;

      function play() {
        thumbs.forEach(function (other) {
          if (other === thumb) return;
          var v = other.querySelector('.film-video');
          if (v && !v.paused) v.pause();
          other.classList.remove('playing');
        });
        thumb.classList.add('playing');
        video.muted = false;
        var p = video.play();
        if (p && p.catch) {
          p.catch(function () {
            video.muted = true;
            video.play();
          });
        }
      }

      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        play();
      });
      thumb.addEventListener('click', function () {
        if (video.paused) play();
        else video.pause();
      });
      video.addEventListener('pause', function () {
        if (!video.ended) return;
        thumb.classList.remove('playing');
      });
      video.addEventListener('ended', function () {
        thumb.classList.remove('playing');
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
