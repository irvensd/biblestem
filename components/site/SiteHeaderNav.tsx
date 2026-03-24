'use client'

import Link from 'next/link'
import { useDemoAuth } from '@/components/auth/DemoAuthProvider'

const secondaryLinks = [
  { href: '/study-library', label: 'Study Library' },
  { href: '/paths', label: 'Paths' },
  { href: '/about', label: 'About' },
  { href: '/support', label: 'Support' },
] as const

export function SiteHeaderNav() {
  const { user, isReady } = useDemoAuth()
  const rootHref = user ? '/dashboard' : '/'
  const firstLabel = user ? 'Dashboard' : 'Home'

  return (
    <>
      <Link href={rootHref} className="text-lg font-semibold tracking-tight text-zinc-900">
        BibleStem
      </Link>

      <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
        <Link href={rootHref} className="text-sm text-zinc-600 transition-colors hover:text-zinc-900">
          {isReady ? firstLabel : 'Home'}
        </Link>
        {secondaryLinks.map((link) => (
          <Link key={link.href} href={link.href} className="text-sm text-zinc-600 transition-colors hover:text-zinc-900">
            {link.label}
          </Link>
        ))}
      </nav>
    </>
  )
}
