# GitHub Actions workflows

## Workflows

### CI (`ci.yml`)

Runs on push and pull requests to `main`, `production`, and `develop`.

- **`app-readiness`**: `npm run check:app-readiness` (TypeScript, ESLint, lesson copy checks)
- **`build`**: `npm run build` (Next.js output in `.next/`)

### Deploy (`deploy.yml`)

Runs on push to `production` or manual dispatch: Docker image build/push, optional Netlify/Vercel steps.

## Secrets and environment variables

Use **`NEXT_PUBLIC_*`** names for values that must be available in the browser (Next.js convention). Example:

| Secret / variable | Purpose |
|-------------------|---------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon key |

Optional (if you add monitoring): `NEXT_PUBLIC_SENTRY_DSN`, `NEXT_PUBLIC_GA_MEASUREMENT_ID`, etc. See `MONITORING.md`.

> **Migration:** If you previously stored **`VITE_*`** secrets for an old Vite template, rename them in GitHub to **`NEXT_PUBLIC_*`** and update workflows accordingly.

### Platform deploy secrets

- **Netlify:** `NETLIFY_AUTH_TOKEN`, `NETLIFY_SITE_ID`
- **Vercel:** `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`

## Local check

```bash
npm run check:app-readiness
npm run build
```
