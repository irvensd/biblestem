'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { isSiteNavActive, useSiteNavLinks } from '@/hooks/useSiteNavLinks'

export function SiteHeaderNav() {
  const pathname = usePathname()
  const { logoHref, links } = useSiteNavLinks()

  return (
    <div className="flex min-w-0 flex-1 items-center gap-4 md:gap-6 lg:gap-8">
      <Link
        href={logoHref}
        prefetch
        aria-label="BibleStem home"
        className="relative isolate z-[1] flex min-w-0 shrink-0 items-center gap-2.5 rounded-sm outline-none ring-offset-2 transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-blue-800 sm:gap-3"
      >
        <Image
          src="/logo.png"
          alt=""
          width={96}
          height={96}
          className="biblestem-logo-img h-11 w-11 shrink-0 sm:h-12 sm:w-12"
          decoding="async"
          priority
        />
        <span className="hidden truncate text-base font-semibold tracking-tight text-zinc-900 sm:inline sm:text-lg">
          BibleStem
        </span>
      </Link>

      <nav className="hidden min-w-0 items-center gap-1 lg:gap-1.5 xl:gap-2 md:flex" aria-label="Primary">
        {links.map((link) => {
          const active = isSiteNavActive(pathname, link.href)

          if (link.emphasis === 'cta') {
            return (
              <Link
                key={`${link.href}-${link.label}`}
                href={link.href}
                prefetch
                aria-current={active ? 'page' : undefined}
                className={`shrink-0 rounded-full border px-3.5 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-800 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-50 ${
                  active
                    ? 'border-blue-900 bg-blue-900 text-white shadow-sm hover:bg-blue-950'
                    : 'border-blue-800/40 bg-blue-800/[0.07] text-blue-950 hover:border-blue-800/55 hover:bg-blue-800/12'
                }`}
              >
                {link.label}
              </Link>
            )
          }

          return (
            <Link
              key={`${link.href}-${link.label}`}
              href={link.href}
              prefetch
              aria-current={active ? 'page' : undefined}
              className={`shrink-0 rounded-lg px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-800 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-50 ${
                active
                  ? 'bg-zinc-200/80 text-zinc-950 shadow-sm'
                  : 'text-zinc-700 hover:bg-zinc-100/90 hover:text-zinc-950'
              }`}
            >
              {link.label}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
