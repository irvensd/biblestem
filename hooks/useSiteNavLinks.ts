'use client'

import { useDemoAuth } from '@/components/auth/DemoAuthProvider'
import { BIBLESTEM_THREADS_URL } from '@/lib/site-external-links'

export interface SiteNavLink {
  href: string
  label: string
  /** Highlights supportive CTAs (e.g. Donate) in the header row. */
  emphasis?: 'cta'
  /** Opens in a new tab (e.g. BibleStem Threads shop). */
  external?: boolean
}

/** Match exact route or nested paths under `href` (except `/`, which must match exactly). */
export function isSiteNavActive(pathname: string, href: string): boolean {
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function useSiteNavLinks(): { logoHref: string; links: SiteNavLink[] } {
  const { user, isReady } = useDemoAuth()
  const logoHref = user ? '/dashboard' : '/'
  const firstLabel = user ? 'Dashboard' : 'Home'

  const links: SiteNavLink[] = [
    { href: logoHref, label: isReady ? firstLabel : 'Home' },
    ...(user
      ? [
          { href: '/study-library', label: 'Study Library' } satisfies SiteNavLink,
          { href: '/paths', label: 'Paths' } satisfies SiteNavLink,
        ]
      : []),
    { href: '/about', label: 'About' },
    { href: BIBLESTEM_THREADS_URL, label: 'Threads', external: true },
    { href: '/donate', label: 'Donate', emphasis: 'cta' },
  ]

  return { logoHref, links }
}
