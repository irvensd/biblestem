# Production deployment checklist

Use this when the live site cannot reach Supabase or env vars are missing.

## Common causes

1. Production domain not listed in Supabase **Authentication → URL Configuration**
2. **`NEXT_PUBLIC_SUPABASE_URL`** / **`NEXT_PUBLIC_SUPABASE_ANON_KEY`** not set on the host (Vercel, Netlify, Docker, etc.)
3. Redeploy needed after changing env vars

> **Naming:** This is a **Next.js** app. Use **`NEXT_PUBLIC_*`** for client-visible config. Do not use `VITE_*` (Vite-only).

## Fix: Supabase dashboard

1. Open your project in the [Supabase dashboard](https://supabase.com/dashboard).
2. **Authentication** → **URL Configuration**
3. Set **Site URL** to your public origin, e.g. `https://your-domain.com`
4. Add **Redirect URLs** for your app (including `http://localhost:3000` for local dev if needed).

## Fix: hosting environment variables

### Vercel

1. Project → **Settings** → **Environment Variables**
2. Add for **Production** (and Preview if needed):

```bash
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

3. Redeploy.

### Netlify

1. **Site settings** → **Environment variables**
2. Add the same `NEXT_PUBLIC_*` variables as above.
3. Trigger a new deploy (clear cache if the build still embeds old values).

### Other hosts

Ensure these variables are available at **build time** (Next.js inlines `NEXT_PUBLIC_*` into the client bundle).

## Verify

1. Open the site in a private window.
2. DevTools → **Network**: requests to `*.supabase.co` should succeed.
3. Confirm catalog loads or, if Supabase is down, the amber **catalog fallback** notice appears (see `CatalogSourceNotice`).

## Security

- The **anon** key is intended to be public in the browser; protect data with **RLS** in Supabase.
- Never commit **service role** keys or put them in `NEXT_PUBLIC_*`.

## Build output note

Next.js writes to **`.next/`**, not `dist/`. Use your host’s Next.js integration (e.g. Netlify Next plugin, Vercel) rather than publishing a static `dist` folder.
