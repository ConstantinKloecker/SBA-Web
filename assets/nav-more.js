(function () {
  function init() {
    var navLinks = document.querySelector('.nav-links');
    if (!navLinks) return;
    if (navLinks.querySelector('.nav-more')) return;

    var links = Array.prototype.slice.call(navLinks.querySelectorAll(':scope > .nav-link'));
    if (!links.length) return;

    var wrap = document.createElement('div');
    wrap.className = 'nav-more';

    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'nav-more-btn';
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-haspopup', 'true');
    btn.setAttribute('aria-label', 'More menu');
    btn.innerHTML = '<span>Menu</span><svg viewBox="0 0 12 8" width="10" height="7" aria-hidden="true"><path d="M1 1 L6 6 L11 1" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>';

    var panel = document.createElement('div');
    panel.className = 'nav-more-panel';
    panel.setAttribute('role', 'menu');

    links.forEach(function (a) {
      var clone = a.cloneNode(true);
      clone.classList.remove('nav-link');
      clone.classList.add('nav-more-item');
      clone.setAttribute('role', 'menuitem');
      panel.appendChild(clone);
    });

    wrap.appendChild(btn);
    wrap.appendChild(panel);

    var langToggle = navLinks.querySelector('.lang-toggle');
    if (langToggle) {
      navLinks.insertBefore(wrap, langToggle);
    } else {
      navLinks.appendChild(wrap);
    }

    function close() {
      wrap.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
    function toggle(e) {
      e.stopPropagation();
      var willOpen = !wrap.classList.contains('open');
      wrap.classList.toggle('open', willOpen);
      btn.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
    }
    btn.addEventListener('click', toggle);
    document.addEventListener('click', function (e) {
      if (!wrap.contains(e.target)) close();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') close();
    });
    panel.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') close();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
