'use client'

import Link from 'next/link'
import { useDemoAuth } from '@/components/auth/DemoAuthProvider'

export function SiteFooterProductLinks() {
  const { user, isReady } = useDemoAuth()

  const links = user
    ? [
        { href: '/dashboard', label: 'Dashboard' },
        { href: '/study-library', label: 'Study Library' },
        { href: '/paths', label: 'Paths' },
      ]
    : [
        { href: '/get-started', label: 'Get started' },
        { href: '/sign-in', label: 'Sign in' },
      ]

  return (
    <ul className="mt-3 space-y-2">
      {(isReady ? links : [{ href: '/sign-in', label: 'Sign in' }]).map((link) => (
        <li key={`${link.href}-${link.label}`}>
          <Link href={link.href} className="text-sm text-zinc-600 hover:text-zinc-900">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}
