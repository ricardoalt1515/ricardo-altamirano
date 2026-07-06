# ricardo-altamirano.vercel.app

Personal site and CV of **Ricardo Altamirano** — AI Engineer. Built with [Astro](https://astro.build),
fully static, dark-first brutalist-technical design with an electric-cyan accent.

Live: [ricardo-altamirano.vercel.app](https://ricardo-altamirano.vercel.app)

## Structure

- `src/data/content.ts` — all site content (bio, projects, experience, stack, links). Sections are commented; markup rarely needs touching.
- `src/components/` — one Astro component per section (Hero, About, Work, Experience, Stack, OpenSource, Contact) plus CommandPalette and the AgentTrace hero animation.
- `cv/cv.html` — the CV source of truth. The published PDF is generated from it (see below).
- `public/RICARDO-ALTAMIRANO-2026.pdf` — the generated CV served by the hero's **Download CV** button.
- `public/llms.txt` — agent-readable summary of the site; kept in sync with `content.ts` manually.

## Updating the CV

Edit `cv/cv.html`, then regenerate the PDF:

```sh
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --no-pdf-header-footer \
  --print-to-pdf=public/RICARDO-ALTAMIRANO-2026.pdf \
  "file://$PWD/cv/cv.html"
```

Keep `cv/cv.html`, `src/data/content.ts`, and `public/llms.txt` telling the same story —
recruiters and LLM screeners cross-check them.

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

Deployed on **Vercel** from this repo's `main` branch; every push redeploys the site
(including the CV PDF and `llms.txt`).
