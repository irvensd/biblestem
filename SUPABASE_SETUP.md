# Supabase setup (BibleStem)

This app uses **Next.js**. Public Supabase values belong in **`.env.local`** with the **`NEXT_PUBLIC_`** prefix (see `env.example`). Do **not** use `VITE_*` variable names; those are for Vite projects only.

## 1. Create a Supabase project

1. Go to [supabase.com](https://supabase.com) and create a project.
2. In **Settings → API**, copy:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public** key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## 2. Apply database schema

Run the SQL migrations in `supabase/migrations/` in order (e.g. via Supabase **SQL Editor** or `supabase db push`), then seed with **`supabase/seed.sql`** or your chosen workflow (see `docs/SEEDING_WORKFLOW.md`).

## 3. Configure the app locally

```bash
cp env.example .env.local
```

Set at minimum:

```env
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

Optional: `NEXT_PUBLIC_SITE_URL` for absolute URLs.

## 4. Service role (scripts only)

`SUPABASE_SERVICE_ROLE_KEY` is for **server-side scripts** (e.g. `npm run sync:supabase:reader`) only. Never expose it in client code or `NEXT_PUBLIC_*` variables.

## 5. Auth URL configuration

In Supabase **Authentication → URL Configuration**, set **Site URL** and **Redirect URLs** to match your production domain (and localhost for development).

## 6. Verify

Run `npm run dev` and confirm the app loads the catalog (or shows the catalog fallback notice if Supabase is unreachable).
