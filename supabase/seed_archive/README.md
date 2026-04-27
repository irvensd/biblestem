# Archived split seed files (historical)

These `seed_00x_*.sql` scripts were used before **`../seed.sql`** became the single canonical seed for the project.

- **Do not run these for routine work.** Use **`supabase/seed.sql`** in the SQL Editor (or `supabase db` workflows) and/or `npm run sync:supabase:reader` for reader JSON updates.
- Files are kept only for archaeology or one-off comparisons. They are not maintained in lockstep with `lib/lesson-content.ts`.

If you need the latest catalog + reader content, always start from **`../seed.sql`**.
