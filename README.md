# Storybook Adventures — Website

Marketing site for [Storybook Adventures](https://www.storybookadventures.io), a children's iOS app that turns hand-drawn pictures into AI-animated stories.

## Stack

- Static HTML + CSS + vanilla JS
- Hosted on GitHub Pages
- Fonts: Lilita One + Nunito (Google Fonts)

## Local Development

```bash
# From repo root, serve with any static file server:
python3 -m http.server 8765
# Then open http://localhost:8765
```

## Structure

- `index.html` — Landing page
- `privacy.html`, `terms.html`, `impressum.html`, `support.html` — Legal pages (EN + DE)
- `confirm.html`, `unsubscribe.html` — Newsletter confirmation / unsubscribe landing pages
- `style.css` — All styles
- `assets/` — Images, screenshots, video

## Language Toggle

The site supports English + German. Content in both languages is embedded in the same HTML, toggled via `[lang="en"]` / `[lang="de"]` and a small script that sets `body.lang-de`.

## License

© 2026 Storybook Adventures. All rights reserved.
