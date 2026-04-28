'use client'

import { useRouter } from 'next/navigation'
import { useEffect, type ReactNode } from 'react'
import { useDemoAuth } from '@/components/auth/DemoAuthProvider'

/**
 * Client gate: study catalog routes require a Supabase session (or configured auth).
 * Redirects signed-out users to the home page.
 */
export function RequireAuth({ children }: { children: ReactNode }) {
  const { user, isReady } = useDemoAuth()
  const router = useRouter()

  useEffect(() => {
    if (isReady && !user) {
      router.replace('/')
    }
  }, [isReady, user, router])

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
          <p className="text-sm text-zinc-600">Redirecting…</p>
        </div>
      </div>
    )
  }

  return <>{children}</>
}
