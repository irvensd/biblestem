import path from 'node:path'
import { fileURLToPath } from 'node:url'
import type { NextConfig } from 'next'

const projectRoot = path.dirname(fileURLToPath(import.meta.url))

const nextConfig: NextConfig = {
  reactStrictMode: true,
  /** Enables `node server.js` Docker / Node deployments. */
  output: 'standalone',
  /** Pin workspace root when multiple lockfiles exist (avoids odd standalone paths). */
  turbopack: {
    root: projectRoot,
  },
}

export default nextConfig
