# SaaS / Product Landing — Launch Kit

A clean, conversion-focused landing page: hero with email capture, social proof
logos, feature grid, pricing table, and a closing CTA. **Zero dependencies.**

## Files
| File | What it is |
|------|-----------|
| `index.html` | All sections: hero, logos, features, pricing, CTA. |
| `style.css`  | All styling. Brand colours at the top. |
| `script.js`  | Hero email form (demo) + footer year. |

## Quick start
1. **Product name & pitch** — edit the nav brand, hero headline, and lead text.
2. **Features** — edit the six `.feature` blocks (emoji icon, title, text).
3. **Pricing** — edit the three `.plan` blocks: names, prices, and `<li>` items.
   The middle plan has `.featured` (the highlighted "most popular" one).
4. **Logos / social proof** — edit the `.logo-row` company names.
5. **Colours** — open `style.css`, change `--accent` and `--accent-2` at the top.

## Wiring up the email form
By default the hero form validates and shows a success message. To collect real
signups (no backend needed):
1. Create a free form at [formspree.io](https://formspree.io).
2. Change the form tag in `index.html` to:
   ```html
   <form class="hero-form" id="heroForm" action="https://formspree.io/f/YOUR_ID" method="POST">
   ```
3. In `script.js`, remove the demo submit block so the form posts normally.

(Mailchimp/ConvertKit embedded-form `action` URLs work the same way.)

## Deploy (free)
[Netlify Drop](https://app.netlify.com/drop) or GitHub Pages — live in a minute.

## License
See the kit's `LICENSE.txt`. Use on unlimited projects; don't resell the files.
