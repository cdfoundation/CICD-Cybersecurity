(function () {
  var KEY = 'td-color-theme';
  var root = document.documentElement;

  function current() {
    return root.getAttribute('data-bs-theme') === 'dark' ? 'dark' : 'light';
  }

  function sync(btn) {
    var isDark = current() === 'dark';
    var label = isDark
      ? btn.getAttribute('data-label-light')
      : btn.getAttribute('data-label-dark');
    btn.setAttribute('aria-label', label);
    btn.setAttribute('title', label);
  }

  function init() {
    var btn = document.getElementById('td-theme-toggle');
    if (!btn) return;

    sync(btn);

    btn.addEventListener('click', function () {
      var next = current() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-bs-theme', next);
      try {
        localStorage.setItem(KEY, next);
      } catch (_) {}
      sync(btn);
    });

    if (typeof MutationObserver !== 'undefined') {
      new MutationObserver(function () { sync(btn); }).observe(root, {
        attributeFilter: ['data-bs-theme']
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
