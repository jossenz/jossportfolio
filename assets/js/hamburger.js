document.addEventListener('DOMContentLoaded', function () {
  var header = document.getElementById('header');
  var btn = document.getElementById('hamburger');
  var nav = document.querySelector('#header nav');

  // Sticky header: transparent at top, solid pill once scrolled.
  if (header) {
    var onScroll = function () {
      header.classList.toggle('scrolled', window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  if (!btn || !nav) return;

  var setMenu = function (open) {
    btn.classList.toggle('is-open', open);
    nav.classList.toggle('is-open', open);
    if (header) header.classList.toggle('menu-open', open);
  };

  btn.addEventListener('click', function () {
    setMenu(!btn.classList.contains('is-open'));
  });

  document.addEventListener('click', function (e) {
    if (!btn.contains(e.target) && !nav.contains(e.target)) {
      setMenu(false);
    }
  });

  // Reveal project tiles one-by-one as they scroll into view (mobile).
  var tiles = document.querySelectorAll('.tiles article');
  if (tiles.length) {
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-in');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.35, rootMargin: '0px 0px -12% 0px' });
      tiles.forEach(function (t) { io.observe(t); });
    } else {
      // No IntersectionObserver support: show everything.
      tiles.forEach(function (t) { t.classList.add('reveal-in'); });
    }
  }
});
