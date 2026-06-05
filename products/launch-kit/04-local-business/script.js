/* =========================================================
   Launch Kit — Local Business  (vanilla JS, no dependencies)
   ========================================================= */
(function () {
  'use strict';

  document.getElementById('year').textContent = new Date().getFullYear();

  // Quote form (demo). To receive real enquiries, point the form at Formspree
  // (or your email tool) — see README.md.
  var form = document.getElementById('quoteForm');
  var note = document.getElementById('note');
  var name = document.getElementById('name');
  var phone = document.getElementById('phone');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    note.classList.remove('error');
    if (!name.value.trim() || !phone.value.trim()) {
      note.textContent = 'Please add your name and phone number.';
      note.classList.add('error');
      return;
    }
    note.textContent = "Thanks! We'll call you back shortly. 🌿";
    form.reset();
  });
})();
