import path from 'node:path'
import { fileURLToPath } from 'node:url'
import type { NextConfig } from 'next'

const projectRoot = path.dirname(fileURLToPath(import.meta.url))

const isVercel = Boolean(process.env.VERCEL)

const nextConfig: NextConfig = {
  reactStrictMode: true,
  /** Browsers often request `/favicon.ico` by convention; serve the PNG asset there too. */
  async rewrites() {
    return [{ source: '/favicon.ico', destination: '/favicon.png' }]
  },
  /** Default; explicit so deploys never assume a non-Next output folder. */
  distDir: '.next',
  /**
   * Standalone output is for Docker/Node (`node server.js`). Apply only for production
   * builds: with `next dev`, leaving `output: 'standalone'` on can yield incomplete
   * `.next/dev` artifacts (missing `routes-manifest.json`, compiled `page.js` files, etc.).
   *
   * Vercel sets `VERCEL=1` and uses its own Next.js deployment — standalone there can
   * break the deploy step.
   * @see https://github.com/vercel/vercel/blob/main/errors/now-next-routes-manifest.md
   */
  ...(process.env.NODE_ENV === 'production' && !isVercel ? { output: 'standalone' as const } : {}),
  /** Pin workspace root when multiple lockfiles exist (avoids odd standalone paths). */
  turbopack: {
    root: projectRoot,
  },
}

export default nextConfig
