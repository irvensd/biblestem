'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useLayoutEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { useDemoAuth } from '@/components/auth/DemoAuthProvider'
import { Button } from '@/components/ui/Button'
import { isSiteNavActive, useSiteNavLinks, type SiteNavLink } from '@/hooks/useSiteNavLinks'
import { dashboardDisplayName } from '@/lib/dashboard-mock-data'

function IconMenu({ className }: { className?: string }) {
  return (
    <svg className={className} width={22} height={22} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  )
}

function IconClose({ className }: { className?: string }) {
  return (
    <svg className={className} width={22} height={22} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  )
}

/** Matches `SiteHeader`: `min-h-16` chrome under `safe-area-inset-top`. Portaled overlays must align with this strip. */
const MOBILE_SITE_HEADER_SHELL_TOP = 'calc(4rem + env(safe-area-inset-top, 0px))'

export function MobileNavDrawer() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const { links } = useSiteNavLinks()
  const { user, isReady, logout } = useDemoAuth()
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

  /** Plain `overflow: hidden` on the body resets scroll position on many mobile browsers. */
  useLayoutEffect(() => {
    if (!open) return undefined
    const root = document.documentElement
    const scrollY = window.scrollY

    root.style.position = 'fixed'
    root.style.top = `-${scrollY}px`
    root.style.left = '0'
    root.style.right = '0'
    root.style.width = '100%'
    root.style.overflow = 'hidden'

    return () => {
      root.style.removeProperty('position')
      root.style.removeProperty('top')
      root.style.removeProperty('left')
      root.style.removeProperty('right')
      root.style.removeProperty('width')
      root.style.removeProperty('overflow')
      window.scrollTo(0, scrollY)
    }
  }, [open])

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? 'Close menu' : 'Open menu'}
        className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl bg-zinc-100/75 text-zinc-800 transition-colors hover:bg-zinc-200/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-800 focus-visible:ring-offset-2"
      >
        {open ? <IconClose className="shrink-0" /> : <IconMenu className="shrink-0" />}
      </button>

      {open && typeof document !== 'undefined'
        ? createPortal(
            <>
              <button
                type="button"
                style={{ top: MOBILE_SITE_HEADER_SHELL_TOP }}
                className="fixed inset-x-0 bottom-0 z-[90] bg-zinc-950/40"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              />
              <div
                id="mobile-nav-panel"
                style={{ top: MOBILE_SITE_HEADER_SHELL_TOP }}
                className="fixed left-0 right-0 z-[95] max-h-[min(70vh,calc(100dvh-4rem-env(safe-area-inset-top)))] overflow-y-auto border-b border-zinc-200/90 bg-stone-50 px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] shadow-lg"
              >
                <nav aria-label="Primary mobile" className="flex flex-col gap-1">
                  {drawerLinks.map((link) => {
                    const active = !link.external && isSiteNavActive(pathname, link.href)
                    const base =
                      'block min-h-[44px] rounded-xl px-4 py-3 text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-800 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-50'

                    if (link.external) {
                      return (
                        <a
                          key={`${link.href}-${link.label}`}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="BibleStem Threads apparel shop"
                          onClick={() => setOpen(false)}
                          className={`${base} text-zinc-800 hover:bg-zinc-100`}
                        >
                          {link.label}
                        </a>
                      )
                    }

                    if (link.emphasis === 'cta') {
                      return (
                        <Link
                          key={`${link.href}-${link.label}`}
                          href={link.href}
                          onClick={() => setOpen(false)}
                          aria-current={active ? 'page' : undefined}
                          className={`${base} border text-center font-semibold ${
                            active
                              ? 'border-blue-900 bg-blue-900 text-white hover:bg-blue-950'
                              : 'border-blue-800/40 bg-blue-800/[0.07] text-blue-950 hover:bg-blue-800/12'
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
                        onClick={() => setOpen(false)}
                        aria-current={active ? 'page' : undefined}
                        className={`${base} ${active ? 'bg-zinc-200/90 text-zinc-950' : 'text-zinc-800 hover:bg-zinc-100'}`}
                      >
                        {link.label}
                      </Link>
                    )
                  })}
                </nav>
                {!isReady ? null : user ? (
                  <div className="mt-4 border-t border-zinc-200/90 pt-4">
                    <p className="px-4 pb-3 text-xs text-zinc-500">
                      Signed in as{' '}
                      <span className="font-medium text-zinc-800">
                        {dashboardDisplayName(user.email, user.firstName)}
                      </span>
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        void (async () => {
                          await logout({ navigateTo: '/' })
                          setOpen(false)
                        })()
                      }}
                      className="flex min-h-[44px] w-full items-center justify-center rounded-xl px-4 text-sm font-medium text-zinc-800 transition-colors hover:bg-zinc-100"
                    >
                      Sign out
                    </button>
                  </div>
                ) : (
                  <div className="mt-4 flex flex-col gap-2 border-t border-zinc-200/90 pt-4">
                    <Button
                      href="/sign-in"
                      variant="secondary"
                      className="min-h-[44px] w-full justify-center px-4 text-sm font-medium"
                      onClick={() => setOpen(false)}
                    >
                      Sign in
                    </Button>
                    <Button
                      href="/get-started"
                      className="min-h-[44px] w-full justify-center px-4 text-sm font-medium"
                      onClick={() => setOpen(false)}
                    >
                      Get started
                    </Button>
                  </div>
                )}
              </div>
            </>,
            document.body,
          )
        : null}
    </div>
  )
}
