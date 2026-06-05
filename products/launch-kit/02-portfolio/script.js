/* =========================================================
   Launch Kit — Portfolio  (vanilla JS, no dependencies)
   ========================================================= */
(function () {
  'use strict';

  // Footer year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Light / dark theme toggle (remembers choice)
  var root = document.documentElement;
  var toggle = document.getElementById('themeToggle');
  var saved = localStorage.getItem('theme');

  // Default to the visitor's OS preference if nothing saved
  if (!saved) {
    saved = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  root.setAttribute('data-theme', saved);

  toggle.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
})();
