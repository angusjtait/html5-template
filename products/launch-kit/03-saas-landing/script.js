/* =========================================================
   Launch Kit — SaaS Landing  (vanilla JS, no dependencies)
   ========================================================= */
(function () {
  'use strict';

  document.getElementById('year').textContent = new Date().getFullYear();

  // Hero email capture (demo). Wire to Formspree/your backend — see README.
  var form = document.getElementById('heroForm');
  var note = document.getElementById('note');
  var input = document.getElementById('email');
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var val = input.value.trim();
    note.classList.remove('error');
    if (!re.test(val)) {
      note.textContent = 'Please enter a valid email address.';
      note.classList.add('error');
      input.focus();
      return;
    }
    note.textContent = "Thanks! Check your inbox to confirm. 🎉";
    form.reset();
  });
})();
