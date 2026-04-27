# Testing

This project is **Next.js** + **React**. Older references in this file to **Vitest + Vue Test Utils** applied to a different template and are **not** current.

## What exists today

- **`npm run type-check`** — TypeScript
- **`npm run lint`** — ESLint
- **`npm run check:app-readiness`** — typecheck, lint, and lesson copy rules (`scripts/check-lesson-copy-style.ts`)

## Adding unit or integration tests

If you introduce **Vitest** or **Jest** for React components, configure them for **`.tsx`** / Next.js (e.g. `jsdom`, Testing Library for React). Do not use Vue Test Utils.

## E2E

Consider **Playwright** or **Cypress** for end-to-end flows against `npm run dev` or a preview URL.
