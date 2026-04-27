'use client'

import { useRouter } from 'next/navigation'
import { startTransition, useEffect, type ReactNode } from 'react'
import { useDemoAuth } from '@/components/auth/DemoAuthProvider'

export function HomeGate({ children }: { children: ReactNode }) {
  const router = useRouter()
  const { user, isReady } = useDemoAuth()

  useEffect(() => {
    if (isReady && user) {
      startTransition(() => {
        router.replace('/dashboard')
      })
    }
  }, [isReady, user, router])

  if (!isReady) {
    return (
      <div className="min-h-[50vh] border-b border-zinc-200/80 bg-stone-50">
        <div className="container-shell py-24">
          <div className="mx-auto max-w-2xl space-y-4">
            <div className="h-10 w-40 animate-pulse rounded-lg bg-zinc-200/80" />
            <div className="h-6 max-w-lg animate-pulse rounded-lg bg-zinc-200/60" />
            <div className="h-6 max-w-md animate-pulse rounded-lg bg-zinc-200/60" />
          </div>
        </div>
      </div>
    )
  }

  if (user) {
    return null
  }

  return <>{children}</>
}
