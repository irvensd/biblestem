# BibleStem — Agent / contributor guide

This repository is a **Next.js** (App Router) application, not Vue/Vite. Use this file when orienting tools or new contributors.

## Stack

| Layer | Technology |
|--------|------------|
| Framework | **Next.js** 16+ (App Router), **React** 19 |
| Language | **TypeScript** |
| Styling | **Tailwind CSS** 3, PostCSS |
| Data / auth (optional) | **Supabase** (`@supabase/supabase-js`) — catalog + optional Auth + user progress |
| Lint / format | ESLint 9, Prettier |

## Project layout (high level)

```
app/                    # Routes: page.tsx, layout.tsx, loading.tsx
components/             # React components (UI, lesson, dashboard, site, auth)
lib/                    # Catalog loading, lesson content, dashboard logic, Supabase helpers
hooks/                  # Client hooks
supabase/               # SQL migrations, seed.sql, archived split seeds
scripts/                # Node/tsx tooling (e.g. sync reader content, lesson copy checks)
public/                 # Static assets
```

- **Catalog**: `lib/catalog/load-catalog.ts` (Supabase when configured, else mock from `lib/product-mock.ts`).
- **Lesson copy**: `lib/lesson-content.ts`; DB mirror via `supabase/seed.sql` / `npm run sync:supabase:reader`.
- **Env**: Public keys use the **`NEXT_PUBLIC_`** prefix (see `env.example`). Service role keys stay **server-only** (scripts), never in client bundles.

## Commands

```bash
npm run dev              # Next dev server (webpack; see package.json for dev:turbo)
npm run build            # Production build → .next/
npm run start            # Run production server (after build)
npm run type-check       # tsc --noEmit
npm run lint             # ESLint
npm run check:lesson-copy   # Lesson copy style (e.g. no em dashes in authored text)
npm run check:app-readiness # type-check + lint + check:lesson-copy
```

Do **not** assume Vue SFCs, `vite`, `src/main.ts`, or `VITE_*` env vars — those belong to an older template and are **not** used here.

## Conventions

- Prefer **server components** by default; add `'use client'` only when hooks or browser APIs are required.
- Match existing patterns for imports (`@/…`), Tailwind utility styling, and file naming.
- Before shipping content changes, follow `docs/APP_READINESS_CHECKLIST.md` and run `npm run check:app-readiness`.

## Docs map

| Doc | Purpose |
|-----|---------|
| `docs/APP_READINESS_CHECKLIST.md` | Pre-release checks |
| `docs/SEEDING_WORKFLOW.md` | Catalog / seed / reader content flow |
| `env.example` | Environment variable template |
| `DEPLOYMENT.md` / `MONITORING.md` | Hosting and observability (Next-oriented) |
