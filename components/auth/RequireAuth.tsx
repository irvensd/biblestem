'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useEffect, type ReactNode } from 'react'
import { useDemoAuth } from '@/components/auth/DemoAuthProvider'
import { safeNextPath } from '@/lib/auth/safe-next-path'

/**
 * Gates study content (series pages, lessons, guided paths). Catalog browse routes stay public.
 * Sends signed-out users to sign-in with a return URL.
 */
export function RequireAuth({ children }: { children: ReactNode }) {
  const { user, isReady } = useDemoAuth()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (!isReady || user) return
    const next = safeNextPath(pathname) ?? '/dashboard'
    router.replace(`/sign-in?next=${encodeURIComponent(next)}`)
  }, [isReady, user, router, pathname])

  if (!isReady) {
    return (
      <div className="min-h-[50vh] border-b border-zinc-200/80 bg-stone-50">
        <div className="container-shell py-16">
          <div className="h-10 w-48 animate-pulse rounded-lg bg-zinc-200/80" />
          <div className="mt-6 h-6 max-w-lg animate-pulse rounded-lg bg-zinc-200/60" />
        </div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-[40vh] border-b border-zinc-200/80 bg-stone-50">
        <div className="container-shell py-16">
          <p className="text-sm text-zinc-600">Redirecting to sign-in…</p>
        </div>
      </div>
    )
  }

  return <>{children}</>
}
