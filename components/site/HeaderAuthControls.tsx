'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { useDemoAuth } from '@/components/auth/DemoAuthProvider'
import { dashboardDisplayName } from '@/lib/dashboard-mock-data'

export function HeaderAuthControls() {
  const { user, isReady, logout } = useDemoAuth()

  if (!isReady) {
    return (
      <div className="hidden items-center gap-1.5 sm:gap-2 md:flex">
        <span
          className="inline-flex h-9 min-w-[3rem] items-center justify-center rounded-xl bg-zinc-100/80 sm:min-w-[4.5rem]"
          aria-hidden
        />
        <span
          className="inline-flex h-9 min-w-[4rem] items-center justify-center rounded-xl bg-zinc-100/80 sm:min-w-[6.5rem]"
          aria-hidden
        />
      </div>
    )
  }

  if (user) {
    const displayLabel = dashboardDisplayName(user.email, user.firstName)
    return (
      <div className="hidden max-w-none items-center justify-end gap-2 border-l border-zinc-200/90 pl-4 md:flex lg:gap-3 lg:pl-5">
        <span className="max-w-[11rem] truncate text-sm font-semibold text-zinc-800 lg:max-w-[13rem]" title={user.email}>
          {displayLabel}
        </span>
        <Link
          href="/settings"
          prefetch
          className="inline-flex min-h-[44px] items-center rounded-lg px-3 py-2 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-800 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-50"
        >
          Settings
        </Link>
        <button
          type="button"
          onClick={() => {
            void (async () => {
              await logout({ navigateTo: '/' })
            })()
          }}
          className="min-h-[44px] min-w-[44px] rounded-lg px-2 py-2 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-800 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-50 sm:min-w-0 sm:px-3"
        >
          Sign out
        </button>
      </div>
    )
  }

  return (
    <div className="hidden items-center gap-1 sm:gap-2 md:flex">
      <Button href="/sign-in" variant="ghost" className="inline-flex min-h-[44px] px-2.5 text-xs sm:px-4 sm:text-sm">
        Sign in
      </Button>
      <Button href="/get-started" className="inline-flex min-h-[44px] whitespace-nowrap px-3 text-xs sm:px-5 sm:text-sm">
        Get started
      </Button>
    </div>
  )
}
