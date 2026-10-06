# Portfolio

Personal software engineer portfolio site (brittanychiang.com-style layout), built with minimal tooling: Vite, vanilla HTML/CSS/JS, and Vitest.

## Prerequisites

Node.js 18 or newer (validated on Node 22).

## Commands

```bash
npm install
npm run dev      # local dev server
npm test         # Vitest
npm run build    # production output in dist/
npm run preview  # serve dist/ locally
```

## Editing content

All copy, links, experience, and projects live in a single config file:

[`src/data/content.js`](src/data/content.js)

Update `<title>` and the meta description in [`index.html`](index.html) when you change your name or site summary. Keep a local `myinfo.txt` (gitignored) as scratch notes if you like; only `content.js` is used by the site.

## Project structure

| Path | Role |
|------|------|
| `src/render.js` | Builds the DOM from content config |
| `src/interactions.js` | Scroll-spy nav, experience tabs, keyboard support |
| `src/main.js` | Entry: render then attach interactions |
| `src/styles/` | CSS variables, layout, components |
| `tests/` | Render and interaction tests (jsdom) |

## Publishing

Production builds go to `dist/` via `npm run build`. **GitHub Pages** deploys automatically on push to `main` using [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) (build, test, upload artifact, deploy).

- **Live site:** [https://jmaalihan3.github.io/](https://jmaalihan3.github.io/) (user Pages repo `jmaalihan3.github.io`)
- **Repo settings:** Settings → Pages → Build and deployment → Source: **GitHub Actions**

If you ever move to a **project** repo (not `username.github.io`), set Vite `base: '/<repo-name>/'` in [`vite.config.js`](vite.config.js) and rebuild.

## Conventions

See [`.claude/CLAUDE.md`](.claude/CLAUDE.md) for development principles, testing expectations, and prompt/history logging.
