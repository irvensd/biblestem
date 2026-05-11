'use client'

import Link from 'next/link'
import { useSiteNavLinks } from '@/hooks/useSiteNavLinks'

export function SiteHeaderNav() {
  const { logoHref, links } = useSiteNavLinks()

  return (
    <div className="flex min-w-0 flex-1 items-center gap-3 md:gap-4">
      <Link
        href={logoHref}
        prefetch
        aria-label="BibleStem home"
        className="relative isolate z-[1] flex min-w-0 shrink-0 items-center gap-2 rounded-sm outline-none ring-offset-2 focus-visible:ring-2 focus-visible:ring-blue-800 sm:gap-3"
      >
        <img
          src="/logo.png"
          alt=""
          width={96}
          height={96}
          className="biblestem-logo-img h-11 w-11 shrink-0 sm:h-12 sm:w-12"
          decoding="async"
          fetchPriority="high"
        />
        <span className="hidden truncate text-base font-semibold tracking-tight text-zinc-900 sm:inline sm:text-lg">
          BibleStem
        </span>
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
