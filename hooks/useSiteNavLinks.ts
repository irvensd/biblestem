'use client'

import { useDemoAuth } from '@/components/auth/DemoAuthProvider'

export interface SiteNavLink {
  href: string
  label: string
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
    { href: '/donate', label: 'Donate' },
  ]

  return { logoHref, links }
}
