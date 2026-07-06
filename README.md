# Ricardo Altamirano — Personal Site

A fast, static personal landing page built with [Astro](https://astro.build). Dark-first,
brutalist-technical design with an electric-cyan accent.

## Editing content

**All content lives in one file:** [`src/data/content.ts`](src/data/content.ts).

Change your bio, projects, experience, stack, and links there — no need to touch any markup.
Each section of the file is commented to show what it controls.

A few useful spots:

- `site` — name, role, SEO title/description, and your deployed URL (used for canonical + Open Graph).
- `hero.headline` / `hero.accent` — the big statement. Keep `accent` as an exact substring of `headline`; that phrase is highlighted in cyan.
- `projects` — add/remove cards in *Selected Work*. Set `metric` for a highlighted stat (e.g. `"78% faster"`).
- `stack` — grouped tech chips.

### Add your CV

Drop your PDF at `public/RICARDO-ALTAMIRANO-2026.pdf` so the hero's **Download CV** button works.
(Rename it or update the path in `hero.ctas` if you use a different filename.)

## Design system

Tokens (colors, fonts, spacing, motion) live in [`src/styles/global.css`](src/styles/global.css).
Fonts: **Archivo** (display), **IBM Plex Sans** (body), **IBM Plex Mono** (labels), loaded from Google Fonts.

## Commands

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Local dev server at `localhost:4321`         |
| `npm run build`   | Build production site to `./dist/`           |
| `npm run preview` | Preview the production build locally         |

## Deploy

The site is fully static (`dist/`). Easiest options:

- **Vercel** — import the repo, framework auto-detected as Astro, deploy. Free.
- **Netlify** — build command `npm run build`, publish directory `dist`.
- **GitHub Pages** — see the [Astro deploy guide](https://docs.astro.build/en/guides/deploy/github/).

After you have a domain, set `site` in both `astro.config.mjs` and `src/data/content.ts`.
