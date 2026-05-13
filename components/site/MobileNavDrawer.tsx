'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
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
        className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl bg-zinc-100/75 text-zinc-800 transition-colors hover:bg-zinc-200/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-800 focus-visible:ring-offset-2"
      >
        {open ? <IconClose className="shrink-0" /> : <IconMenu className="shrink-0" />}
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
              {drawerLinks.map((link) => {
                const active = isSiteNavActive(pathname, link.href)
                const base =
                  'block min-h-[44px] rounded-xl px-4 py-3 text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-800 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-50'

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
        </>
      ) : null}
    </div>
  )
}
