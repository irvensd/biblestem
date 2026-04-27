# BibleStem

Scripture-first Bible study on the web — **Next.js** (App Router), React, TypeScript, and Tailwind CSS.

## Prerequisites

- **Node.js 20** (see `package.json` `engines`)

## Setup

```bash
npm install
cp env.example .env.local   # add Supabase URL + anon key if using live catalog / auth
```

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|--------|-------------|
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run type-check` | TypeScript |
| `npm run lint` | ESLint |
| `npm run check:app-readiness` | Typecheck + lint + lesson copy checks |

## Environment variables

See **`env.example`**. Client-safe values use **`NEXT_PUBLIC_*`**. Never put the Supabase **service role** key in client code; it is for server-side scripts only (e.g. `npm run sync:supabase:reader`).

## Contributing / agents

Read **`AGENTS.md`** for stack details and repo layout (this is **not** a Vue/Vite project).
