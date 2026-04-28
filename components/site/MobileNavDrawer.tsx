'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useDemoAuth } from '@/components/auth/DemoAuthProvider'
import { useSiteNavLinks, type SiteNavLink } from '@/hooks/useSiteNavLinks'

export function MobileNavDrawer() {
  const [open, setOpen] = useState(false)
  const { links } = useSiteNavLinks()
  const { user } = useDemoAuth()
  const drawerLinks: SiteNavLink[] = user
    ? [...links, { href: '/settings', label: 'Settings' }]
    : links

  useEffect(() => {
    if (!open) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = prev
      }
    }
    return undefined
  }, [open])

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? 'Close menu' : 'Open menu'}
        className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-zinc-200/90 bg-white px-3 text-sm font-medium text-zinc-800 shadow-sm ring-1 ring-zinc-950/[0.04] transition-colors hover:bg-zinc-50"
      >
        {open ? 'Close' : 'Menu'}
      </button>

      {open ? (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-zinc-950/40"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />
          <div
            id="mobile-nav-panel"
            className="fixed left-0 right-0 top-[calc(4rem+env(safe-area-inset-top))] z-[45] max-h-[min(70vh,calc(100dvh-4rem-env(safe-area-inset-top)))] overflow-y-auto border-b border-zinc-200/90 bg-stone-50 px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] shadow-lg"
          >
            <nav aria-label="Primary mobile" className="flex flex-col gap-1">
              {drawerLinks.map((link) => (
                <Link
                  key={`${link.href}-${link.label}`}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block min-h-[44px] rounded-xl px-4 py-3 text-base font-medium text-zinc-800 transition-colors hover:bg-zinc-100"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </>
      ) : null}
    </div>
  )
}
