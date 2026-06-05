# Coming Soon / Waitlist — Launch Kit

A modern, fully responsive "coming soon" page with a live countdown timer and
waitlist signup form. **Zero dependencies, zero build step** — just open the
files and edit.

## Files
| File | What it is |
|------|-----------|
| `index.html` | The page markup. Edit your text here. |
| `style.css`  | All styling. Brand colours live at the top. |
| `script.js`  | Countdown + form logic. Set your launch date here. |

## Quick start (3 steps)

1. **Set your launch date** — open `script.js`, line ~10:
   ```js
   var LAUNCH_DATE = '2026-07-01T09:00:00';
   ```
2. **Rebrand the colours** — open `style.css`, edit the variables at the top:
   ```css
   --accent:   #7c5cff;   /* your primary colour   */
   --accent-2: #00d4ff;   /* your secondary colour */
   ```
3. **Edit your copy** — open `index.html` and change the headline, subtext,
   page `<title>`, and the social links (`.social` section).

That's it. Drag `index.html` into any browser to preview.

## Collecting real emails

By default the form just validates and shows a success message. To capture real
signups, use any of these free providers — no backend needed:

**Option A — Formspree** (easiest)
1. Create a free form at [formspree.io](https://formspree.io).
2. In `index.html`, change the form tag to:
   ```html
   <form class="signup" id="signup" action="https://formspree.io/f/YOUR_ID" method="POST">
   ```
3. In `script.js`, delete the demo block at the bottom (the part under
   `--- demo behaviour ---`) so the form submits normally.

**Option B — Mailchimp / ConvertKit**
Paste the `action` URL from your audience's embedded-form code into the same
`action` attribute, and keep the `name="email"` on the input.

## Deploy (free)
Drop the folder onto [Netlify Drop](https://app.netlify.com/drop) or push to a
GitHub repo and enable GitHub Pages. Live in under a minute.

## License
Single-site / personal & commercial use for the purchaser. Do not resell or
redistribute the template files themselves.
