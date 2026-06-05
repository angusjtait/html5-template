/* =========================================================
   Launch Kit — Coming Soon  (vanilla JS, no dependencies)
   ========================================================= */
(function () {
  'use strict';

  /* ---- 1. SET YOUR LAUNCH DATE HERE ---------------------- */
  // Format: 'YYYY-MM-DDTHH:MM:SS'  (24h, local time)
  var LAUNCH_DATE = '2026-07-01T09:00:00';
  /* -------------------------------------------------------- */

  var target = new Date(LAUNCH_DATE).getTime();
  var els = {
    days:  document.getElementById('days'),
    hours: document.getElementById('hours'),
    mins:  document.getElementById('mins'),
    secs:  document.getElementById('secs')
  };

  function pad(n) { return n < 10 ? '0' + n : '' + n; }

  function tick() {
    var diff = target - Date.now();
    if (diff < 0) diff = 0;
    var d = Math.floor(diff / 86400000);
    var h = Math.floor((diff % 86400000) / 3600000);
    var m = Math.floor((diff % 3600000) / 60000);
    var s = Math.floor((diff % 60000) / 1000);
    els.days.textContent  = pad(d);
    els.hours.textContent = pad(h);
    els.mins.textContent  = pad(m);
    els.secs.textContent  = pad(s);
  }
  tick();
  setInterval(tick, 1000);

  /* ---- Footer year --------------------------------------- */
  document.getElementById('year').textContent = new Date().getFullYear();

  /* ---- Waitlist form ------------------------------------- */
  // By default this just validates + shows a success message.
  // To collect real emails, point the form at your provider
  // (Mailchimp / ConvertKit / Formspree) — see README.md.
  var form = document.getElementById('signup');
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

    // --- demo behaviour: replace with a real request if wired up ---
    note.textContent = "You're on the list! We'll be in touch. 🎉";
    form.reset();
  });
})();
