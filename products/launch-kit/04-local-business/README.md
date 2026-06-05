# Local Business One-Pager — Launch Kit

A lead-generating single-page site for any local service business (lawn care,
cleaning, trades, mobile services, cafés, salons). Built to **get the phone
ringing**: click-to-call buttons, a quote form, social proof, and a sticky
"call now" bar on mobile. **Zero dependencies.**

## Why it converts
- 📞 **Click-to-call** everywhere (`tel:` links) + sticky mobile call bar
- ⭐ Social proof band (reviews, stats) up top
- 📝 Simple quote form (the main conversion goal)
- ⚡ Fast, mobile-first — most local searches are on phones

## Quick start
1. **Business name & phone** — search/replace `0400 000 000` with the real number
   (it appears in 4 places: nav, hero, contact list, sticky bar). Replace
   `Evergreen` and the `🌿` brand in the nav + footer.
2. **Suburb** — replace `[Your Suburb]` throughout.
3. **Services** — edit the four `.card` blocks under `#services`.
4. **Photos** — replace the `.shot` gradient divs in the gallery with real
   before/after job photos (`<img class="shot" src="...">`). Before/afters convert best.
5. **Reviews** — edit the testimonial quotes + names.
6. **Colours** — open `style.css`, change `--accent` / `--accent-2` to match the brand.

## Receiving quote enquiries (no backend)
1. Create a free form at [formspree.io](https://formspree.io).
2. Change the form tag in `index.html` to:
   ```html
   <form class="quote" id="quoteForm" action="https://formspree.io/f/YOUR_ID" method="POST">
   ```
3. Add `name="..."` attributes to each input (e.g. `name="name"`, `name="phone"`,
   `name="message"`) and remove the demo block in `script.js`.

## Deploy (free)
[Netlify Drop](https://app.netlify.com/drop) or GitHub Pages — live in a minute.
A custom domain (e.g. evergreenlawns.com.au) makes it look pro for ~$10-20/yr.

## License
See the kit's `LICENSE.txt`. Use on unlimited client projects; don't resell the files.
