'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useLayoutEffect, useMemo } from 'react'
import { SignInForm } from '@/app/sign-in/SignInForm'
import { useDemoAuth } from '@/components/auth/DemoAuthProvider'
import { safeNextPath } from '@/lib/auth/safe-next-path'

export default function SignInPageClient() {
  const { user, isReady } = useDemoAuth()
  const router = useRouter()
  const searchParams = useSearchParams()
  const afterSignInHref = useMemo(
    () => safeNextPath(searchParams.get('next')) ?? '/dashboard',
    [searchParams],
  )

  useLayoutEffect(() => {
    if (isReady && user) {
      router.replace(afterSignInHref)
    }
  }, [isReady, user, router, afterSignInHref])

  useEffect(() => {
    if (isReady && !user) {
      router.prefetch('/dashboard')
    }
  }, [isReady, user, router])

  if (!isReady) {
    return (
      <div className="section-space">
        <div className="container-shell flex justify-center">
          <div className="w-full max-w-md">
            <div className="mt-10 h-10 animate-pulse rounded-lg bg-zinc-100" />
            <div className="mt-4 h-6 max-w-xs animate-pulse rounded-lg bg-zinc-100" />
          </div>
        </div>
      </div>
    )
  }

  if (user) {
    return null
  }

  return (
    <div className="section-space">
      <div className="container-shell flex justify-center">
        <div className="w-full max-w-md">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Account</p>
          <h1 className="mt-3 text-center text-2xl font-semibold tracking-tight text-zinc-900">Sign in</h1>
          <p className="mt-2 text-center text-sm leading-relaxed text-zinc-600">
            Welcome back. Sign in to open your dashboard and study library.
          </p>

          <SignInForm />
        </div>
      </div>
    </div>
  )
}
