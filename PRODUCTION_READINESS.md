# Production readiness notes

**Stack:** BibleStem is a **Next.js** (App Router) + **React** + **TypeScript** application. Older content in this file that referenced **Vue**, **Vite**, **Pinia**, or **Vue Router** was **incorrect** for this repository and has been removed.

## What to verify before launch

1. **Environment** — `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` (and optional `NEXT_PUBLIC_SITE_URL`) set on the host. See `env.example` and `DEPLOYMENT.md`.
2. **Database** — Migrations applied; seed or sync workflow per `docs/SEEDING_WORKFLOW.md`.
3. **Auth** — Supabase Auth URL settings match your production domain.
4. **Quality gate** — `npm run check:app-readiness` passes in CI (`docs/APP_READINESS_CHECKLIST.md`).
5. **Monitoring** — Optional Sentry/GA: see `MONITORING.md` (Next.js / `NEXT_PUBLIC_*` conventions).

## Build

- Output directory: **`.next`** (not Vite’s `dist`).
- Production server: `npm run build` then `npm run start`, or use the platform’s Next.js integration (Vercel, Netlify plugin, Docker standalone).

For deployment steps, use **`DEPLOYMENT.md`** and **`DEPLOYMENT_CHECKLIST.md`**.
