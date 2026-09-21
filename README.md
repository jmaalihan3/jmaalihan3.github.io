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

Replace placeholder values before publishing. Update `<title>` and meta description in [`index.html`](index.html) when you set your name and summary.

## Project structure

| Path | Role |
|------|------|
| `src/render.js` | Builds the DOM from content config |
| `src/interactions.js` | Scroll-spy nav, experience tabs, keyboard support |
| `src/main.js` | Entry: render then attach interactions |
| `src/styles/` | CSS variables, layout, components |
| `tests/` | Render and interaction tests (jsdom) |

## Publishing

`npm run build` writes static assets to `dist/`. No remote or deploy target is configured yet; host `dist/` on GitHub Pages, Netlify, or similar when ready.

## Conventions

See [`.claude/CLAUDE.md`](.claude/CLAUDE.md) for development principles, testing expectations, and prompt/history logging.
