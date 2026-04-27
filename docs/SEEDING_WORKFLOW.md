# Content and data workflow

This doc is the single place that defines **where lesson content lives** and **how it gets into Supabase** vs the app bundle.

## Roles of each artifact

| Artifact | Role |
|----------|------|
| **`lib/lesson-content.ts`** | Authoring source for lesson **reader** copy (steps, scripture, teaching points, etc.). TypeScript types and exports live here. Used by the app when a lesson is rendered from **embedded** content and by `npm run sync:supabase:reader`. |
| **`lib/product-mock.ts`** | Fallback **catalog** (paths, series, lesson metadata: titles, slugs, duration, scripture line) when Supabase is unreachable or not configured. Must stay aligned with DB catalog shape. |
| **`supabase/seed.sql`** | **Canonical SQL** to reset/seed the database: `study_paths`, `study_series`, `lessons`, and `reader_content` JSON for each lesson. Use this for SQL Editor / `supabase db` workflows. |
| **Supabase `public.lessons.reader_content`** | Production runtime copy for lessons when the catalog is loaded from Supabase. Populated by `seed.sql` and/or `npm run sync:supabase:reader`. |

## End-to-end flow (recommended)

1. **Author or edit** lesson text in `lib/lesson-content.ts` (and adjust types if the shape changes).
2. **Mirror catalog metadata** (slug, title, order, duration, scripture) in `lib/product-mock.ts` and the same fields in `supabase/seed.sql` so mock and DB stay consistent.
3. **Push reader JSON to Supabase** (fast iteration on copy without hand-editing huge SQL):
   - `npm run sync:supabase:reader`
   - Optional: `npm run sync:supabase:reader -- --slug=<lesson-slug>`
4. **Or** paste/run **`supabase/seed.sql`** in the Supabase SQL Editor when you want a full reset with one script.
5. **User progress** (streaks, completions, “continue study”) is stored in Supabase when the app uses **Supabase Auth** (`user_study_progress`, `user_activity_days`). See migration `004_user_study_progress_auth.sql`. Demo mode without env still uses browser `localStorage` for progress.

## Archived split seeds

Older `seed_00x_*.sql` files live under **`supabase/seed_archive/`** for reference only. **Do not use them for normal seeding** — use **`supabase/seed.sql`** and `npm run sync:supabase:reader`. See `seed_archive/README.md`.

## Operational notes

- If Supabase is unavailable, the app can fall back to the **mock catalog** from `lib/product-mock.ts` and show a catalog fallback notice on key pages.
- For **local auth testing**, disable email confirmation (or confirm emails) in the Supabase Auth settings so sign-up returns a session immediately.
