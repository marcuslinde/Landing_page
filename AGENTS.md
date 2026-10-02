# AGENTS.md

Single-page Danish landing page for inclusion consultant Dorte Linde. Vite + React 18 + TypeScript + Tailwind, vendored shadcn/ui. No router and no backend; `App.tsx` renders anchor sections.

## Commands
- Install: `npm install` (npm; `package-lock.json` is the source of truth).
- Dev: `npm run dev` — Vite dev server on port `3000`, auto-opens a browser.
- Build: `npm run build` — `tsc && vite build`. `tsc` is strict `noEmit` with `noUnusedLocals`/`noUnusedParameters`, so unused imports/vars fail the build.
- Lint: `npm run lint` — `eslint . --ext ts,tsx --max-warnings 0`; any warning fails (including `no-console` and unused vars).
- Preview build: `npm run preview`.

There is **no test framework or test script**. Do not add or claim tests; verify changes with `npm run lint` and `npm run build`.

## Architecture
- Entry: `index.html` → `src/main.tsx` → `src/App.tsx`.
- Feature sections: `src/components/*.tsx` (About, Book, Footer, Hero, Navbar, PresentationTopics, Pricing, Privacy, QuoteRequestForm, Testimonials).
- `Privacy` is shown via local state in `App.tsx`, not routing.
- `src/components/ui/` is vendored shadcn/ui (many components unused). The `cn()` helper lives at `src/components/ui/utils.ts`, not `@/lib/utils`.
- `@/` maps to `src/` (tsconfig `paths` + Vite alias), but existing code uses relative imports — match that.
- Static assets: `public/images/…`, referenced as `/images/…` (see `public/README.md`).
- `dist/` is generated, git-ignored, and not tracked; never edit by hand.

## Gotchas
- Tailwind theme colors are CSS variables in `src/index.css` defined as hex. Opacity modifiers like `bg-primary/15` silently fail; use arbitrary values such as `bg-[#117A8B]/15` (the existing pattern).
- Two ESLint configs exist. `.eslintrc.cjs` is authoritative; `.eslintrc.json` is stale and ignored. Edit the `.cjs`.
- Docker (`dockerfile`) runs the Vite **dev** server on port `5523` (`docker run -p 5523:5523 marcuslinde/dortelinde-demo`), while local `npm run dev` uses `3000`.
- User-facing copy is Danish; keep new text Danish.
- The quote form posts to a hardcoded Formspree endpoint in `src/components/QuoteRequestForm.tsx`.
- `animate-wobble`, `tilt-1`, and `tilt-2` are referenced in components but defined nowhere; they are no-ops.
