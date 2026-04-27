# Monitoring and analytics (Next.js)

This app is built with **Next.js**. Any error tracking or analytics should use **Next.js / React** SDKs and environment variables exposed to the browser via the **`NEXT_PUBLIC_`** prefix — **not** `VITE_*` (that prefix is for Vite projects only).

## Current state

There is **no** Sentry or Google Analytics package wired in the application code yet. The variables below are the **conventional names** to use when you add monitoring.

## Environment variables (browser-safe)

Set these in `.env.local` (local) or in your host’s dashboard (Vercel, Netlify, etc.):

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SENTRY_DSN` | Sentry DSN (if using [@sentry/nextjs](https://docs.sentry.io/platforms/javascript/guides/nextjs/)) |
| `NEXT_PUBLIC_SENTRY_ENVIRONMENT` | e.g. `production` / `development` |
| `NEXT_PUBLIC_ENABLE_ANALYTICS` | Feature flag string, e.g. `true` |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 Measurement ID (`G-XXXXXXXXXX`) |

Optional server-only secrets (never `NEXT_PUBLIC_*`): ingestion keys, API tokens, etc.

## Sentry (when you add it)

1. Create a project in [Sentry](https://sentry.io) and choose **Next.js** (not Vue).
2. Install `@sentry/nextjs` and follow the wizard.
3. Use `NEXT_PUBLIC_SENTRY_DSN` (or the SDK’s documented env names for Next).

## Google Analytics (when you add it)

1. Create a GA4 property and copy the Measurement ID.
2. Load GA in a client component or via `next/script` using `NEXT_PUBLIC_GA_MEASUREMENT_ID`.

## Privacy

If you add tracking, disclose it in your privacy policy and comply with applicable law (e.g. GDPR, CCPA). Consider a consent banner where required.

## References

- [Sentry for Next.js](https://docs.sentry.io/platforms/javascript/guides/nextjs/)
- [Next.js Environment Variables](https://nextjs.org/docs/app/building-your-application/configuring/environment-variables)
- [Google Analytics 4](https://developers.google.com/analytics/devguides/collection/ga4)
