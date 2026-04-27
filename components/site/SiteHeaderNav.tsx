'use client'

import Link from 'next/link'
import { useSiteNavLinks } from '@/hooks/useSiteNavLinks'

export function SiteHeaderNav() {
  const { logoHref, links } = useSiteNavLinks()

  return (
    <div className="flex min-w-0 flex-1 items-center gap-4">
      <Link
        href={logoHref}
        prefetch
        className="truncate text-base font-semibold tracking-tight text-zinc-900 sm:text-lg"
      >
        BibleStem
      </Link>

      <nav className="hidden items-center gap-5 md:flex lg:gap-6" aria-label="Primary">
        {links.map((link) => (
          <Link
            key={`${link.href}-${link.label}`}
            href={link.href}
            prefetch
            className="shrink-0 text-sm text-zinc-600 transition-colors hover:text-zinc-900"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  )
}
