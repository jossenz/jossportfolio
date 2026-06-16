document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('hamburger');
  var nav = document.querySelector('#header nav');
  if (!btn || !nav) return;

  btn.addEventListener('click', function () {
    var isOpen = btn.classList.toggle('is-open');
    nav.classList.toggle('is-open', isOpen);
  });

  document.addEventListener('click', function (e) {
    if (!btn.contains(e.target) && !nav.contains(e.target)) {
      btn.classList.remove('is-open');
      nav.classList.remove('is-open');
    }
  });
});
