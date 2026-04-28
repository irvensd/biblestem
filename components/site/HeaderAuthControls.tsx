'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { useDemoAuth } from '@/components/auth/DemoAuthProvider'
import { dashboardDisplayName } from '@/lib/dashboard-mock-data'

export function HeaderAuthControls() {
  const { user, isReady, logout } = useDemoAuth()

  if (!isReady) {
    return (
      <div className="flex items-center gap-1.5 sm:gap-2">
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
      <div className="flex max-w-[min(100vw-8rem,18rem)] items-center justify-end gap-1.5 sm:max-w-none sm:gap-3">
        <span
          className="max-w-[min(42vw,11rem)] truncate text-sm text-zinc-600 sm:max-w-[13rem]"
          title={user.email}
        >
          {displayLabel}
        </span>
        {!user.id ? (
          <span className="rounded-md bg-zinc-200/90 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-zinc-600">
            Demo
          </span>
        ) : null}
        <Link
          href="/settings"
          prefetch
          className="hidden min-h-[44px] items-center rounded-xl px-3 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-900 sm:inline-flex"
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
          className="min-h-[44px] min-w-[44px] rounded-xl px-2 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-900 sm:min-w-0 sm:px-3"
        >
          Sign out
        </button>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-1 sm:gap-2">
      <Button href="/sign-in" variant="ghost" className="inline-flex min-h-[44px] px-2.5 text-xs sm:px-4 sm:text-sm">
        Sign in
      </Button>
      <Button href="/get-started" className="inline-flex min-h-[44px] whitespace-nowrap px-3 text-xs sm:px-5 sm:text-sm">
        Get started
      </Button>
    </div>
  )
}
