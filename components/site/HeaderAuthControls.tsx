'use client'

import { Button } from '@/components/ui/Button'
import { useDemoAuth } from '@/components/auth/DemoAuthProvider'

export function HeaderAuthControls() {
  const { user, isReady, logout } = useDemoAuth()

  if (!isReady) {
    return (
      <div className="flex items-center gap-2">
        <span
          className="inline-flex h-9 min-w-[4.5rem] items-center justify-center rounded-xl bg-zinc-100/80"
          aria-hidden
        />
        <span
          className="inline-flex h-9 min-w-[6.5rem] items-center justify-center rounded-xl bg-zinc-100/80"
          aria-hidden
        />
      </div>
    )
  }

  if (user) {
    return (
      <div className="flex max-w-[min(100vw-8rem,20rem)] items-center justify-end gap-2 sm:gap-3">
        <span
          className="hidden max-w-[11rem] truncate text-sm text-zinc-600 md:inline"
          title={user.email}
        >
          {user.email}
        </span>
        <span className="rounded-md bg-zinc-200/90 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-zinc-600">
          Demo
        </span>
        <button
          type="button"
          onClick={() => logout()}
          className="rounded-xl px-3 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-900"
        >
          Sign out
        </button>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-2">
      <Button href="/sign-in" variant="ghost" className="inline-flex">
        Sign in
      </Button>
      <Button href="/get-started">Get started</Button>
    </div>
  )
}
