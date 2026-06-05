# One-Page Portfolio — Launch Kit

A modern, responsive single-page portfolio with **light/dark mode**, a work
grid, about, and contact sections. **Zero dependencies, no build step.**

## Files
| File | What it is |
|------|-----------|
| `index.html` | Your content: hero, work, about, contact. |
| `style.css`  | All styling + light/dark theme variables. |
| `script.js`  | Theme toggle (remembers choice) + footer year. |

## Quick start
1. **Your name & intro** — edit the nav brand, hero headline, and lead text in `index.html`.
2. **Your projects** — duplicate/edit the three `<article class="project">` blocks.
   Swap the `.thumb` gradient classes or replace with `<img>` tags.
3. **About & skills** — edit the about paragraph and the `.skills` list items.
4. **Contact** — change the `mailto:` email and the social links.
5. **Colours** — open `style.css`, edit `--accent` / `--accent-2` (both the
   `:root` light values and the `:root[data-theme="dark"]` dark values).

## Light / dark mode
Works automatically: defaults to the visitor's OS preference, and the 🌗 toggle
in the nav lets them switch — their choice is remembered via `localStorage`.

## Using real images
Replace a `<div class="thumb thumb-1"></div>` with:
```html
<img src="images/project-1.jpg" alt="Project name" class="thumb">
```
(Add `object-fit:cover` to `.thumb` in CSS if your images need cropping.)

## Deploy (free)
Drop the folder on [Netlify Drop](https://app.netlify.com/drop) or use GitHub Pages.

## License
See the kit's `LICENSE.txt`. Use on unlimited projects; don't resell the files.
