import type { MetadataRoute } from 'next'
import { getSiteUrl } from '@/lib/site-url'

const PUBLIC_PATHS = [
  '/',
  '/about',
  '/contact',
  '/studies',
  '/donate',
  '/privacy',
  '/terms',
  '/sign-in',
  '/sign-up',
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const site = getSiteUrl()
  const lastModified = new Date()
  return PUBLIC_PATHS.map((path) => ({
    url: path === '/' ? site : `${site}${path}`,
    lastModified,
  }))
}
