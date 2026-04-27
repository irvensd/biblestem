# App Readiness Checklist

Run this before shipping new lesson content or cutting a release.

## Content + data

- Update lesson copy in `lib/lesson-content.ts`
- Update catalog metadata (slug/title/order/duration) in:
  - `lib/product-mock.ts`
  - `supabase/seed.sql`
- Seed Supabase with **`supabase/seed.sql`** (do not use archived split seeds under `supabase/seed_archive/` unless you know why)
- Progress persistence:
  - With Supabase env + Supabase Auth: `user_study_progress` and `user_activity_days` (see `supabase/migrations/004_user_study_progress_auth.sql`)
  - Without Supabase or demo-only session: browser `localStorage` via `lib/dashboard-local-progress.ts`

## Validation (automated)

Run once:

```bash
npm run check:app-readiness
```

This runs:

1. `npm run type-check` — TypeScript
2. `npm run lint` — ESLint
3. `npm run check:lesson-copy` — authored lesson copy must not contain em dashes (`—`)

To run only the copy rule:

```bash
npm run check:lesson-copy
```

Copy `.env.local` from `env.example` (never commit secrets); use the **anon** key in the app, **service role** only for `npm run sync:supabase:reader`. See `docs/SEEDING_WORKFLOW.md` for content flow.

## Manual QA

- Study library shows expected lesson count and order
- Lesson detail shows realistic duration values
- Lesson reader line breaks and spacing look correct on mobile
- Step 5 reflection input remains available for each lesson
- Completing final lesson shows series-complete experience
- Dashboard updates progress and all-caught-up state correctly
