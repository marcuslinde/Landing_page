# AGENTS.md

Single-page Danish landing page for inclusion consultant Dorte Linde. Vite + React 18 + TypeScript + Tailwind, vendored shadcn/ui. No router and no backend; `App.tsx` renders anchor sections.

## Commands
- Install: `npm install` (npm; `package-lock.json` is the source of truth).
- Dev: `npm run dev` — Vite dev server on port `3000`, auto-opens a browser.
- Build: `npm run build` — `tsc && vite build`. `tsc` is strict `noEmit` with `noUnusedLocals`/`noUnusedParameters`, so unused imports/vars fail the build.
- Lint: `npm run lint` — `eslint . --ext ts,tsx --max-warnings 0`; any warning fails (including `no-console` and unused vars).
- Test: `npm run test` — Vitest + jsdom, SSR-render based (`tests/`). No browser or network. Use `npm run test:watch` while iterating.
- Preview build: `npm run preview`.

Verify changes with **`npm run lint`, `npm run test`, and `npm run build`** — all three must pass. The suite is intentionally thin and asserts structure/invariants (head metadata, one `h1`, heading order, image `alt` + file existence, section anchors, form gating), **not** marketing copy — so text changes won't break it, but removing the gating checkbox/date minimum or the metadata will.

## Architecture
- Entry: `index.html` → `src/main.tsx` → `src/App.tsx`.
- Feature sections: `src/components/*.tsx` (About, Book, Footer, Hero, Navbar, PresentationTopics, Pricing, Privacy, QuoteRequestForm, Testimonials).
- `Privacy` is shown via local state in `App.tsx`, not routing.
- `src/components/ui/` is vendored shadcn/ui, trimmed to only the components the page uses (`button`, `card`, `input`, `label`, `select`, `sonner`, `textarea`, `utils`). The `cn()` helper lives at `src/components/ui/utils.ts`, not `@/lib/utils`. If you add a shadcn component, add its `@radix-ui/*` dependency too.
- `@/` maps to `src/` (tsconfig `paths` + Vite alias), but existing code uses relative imports — match that.
- Static assets: `public/images/…`, referenced as `/images/…` (see `public/README.md`). Content images are WebP; the exceptions are the favicon (`public/favicon.svg`), `public/apple-touch-icon.png`, and the Open Graph image `public/images/og-dortelinde.jpg` (1200×630 JPG — social scrapers handle JPG more reliably than WebP). `public/` is copied verbatim into `dist/`, so delete unused files rather than leaving them.
- `dist/` is generated, git-ignored, and not tracked; never edit by hand.
- Tests live in `tests/` (outside `tsconfig`'s `src` include, so `tsc`/build ignore them) and are configured by the test-only `vitest.config.ts`; the production `vite.config.ts` is untouched. They render components with `react-dom/server` + `jsdom` — no browser, no network.

## Gotchas
- Tailwind theme colors are stored as bare HSL channels in `src/index.css` (e.g. `--primary: 188 78% 31%`) and referenced in `tailwind.config.ts` as `hsl(var(--primary) / <alpha-value>)`, so opacity modifiers like `bg-primary/15` work. Do **not** put `hsl()` around the variable or change the channels back to hex.
- The `--hero-*` variables are the exception: they hold full color values and are used directly via `var(--hero-…)` (inline styles in `Hero.tsx`, and as colors in `tailwind.config.ts`).
- Fonts (Inter, Rubik) are self-hosted via `@fontsource/*`, imported in `src/main.tsx`. There is no external Google Fonts request and **no dark mode** — the site is light-only (`next-themes` and the `.dark` palette were removed).
- Two ESLint configs exist. `.eslintrc.cjs` is authoritative; `.eslintrc.json` is stale and ignored. Edit the `.cjs`.
- Docker (`dockerfile`) runs the Vite **dev** server on port `5523` (`docker run -p 5523:5523 marcuslinde/dortelinde-demo`), while local `npm run dev` uses `3000`.
- User-facing copy is Danish; keep new text Danish.
- The quote form posts to a hardcoded Formspree endpoint in `src/components/QuoteRequestForm.tsx`.
