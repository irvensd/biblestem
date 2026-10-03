'use client'

import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { type FormEvent, useEffect, useState } from 'react'
import { AUTH_REQUIRES_SUPABASE_MESSAGE } from '@/components/auth/DemoAuthProvider'
import { Button } from '@/components/ui/Button'
import { inputClassName } from '@/components/ui/form-styles'
import { getSupabaseBrowserClient, isSupabaseConfigured } from '@/lib/supabase/client'

export function ResetPasswordForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [ready, setReady] = useState(false)
  const [pending, setPending] = useState(false)
  const supabaseConfigured = isSupabaseConfigured()

  useEffect(() => {
    const supabase = getSupabaseBrowserClient()
    if (!supabase) return
    let cancelled = false

    const code = searchParams.get('code')
    if (code) {
      void supabase.auth.exchangeCodeForSession(code).then(({ error: exchangeError }) => {
        if (cancelled) return
        if (exchangeError) {
          setError(exchangeError.message)
          return
        }
        setReady(true)
      })
    }

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'PASSWORD_RECOVERY' || event === 'SIGNED_IN') setReady(true)
    })

    return () => {
      cancelled = true
      subscription.unsubscribe()
    }
  }, [searchParams])

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError(null)
    const supabase = getSupabaseBrowserClient()
    if (!supabase) {
      setError(AUTH_REQUIRES_SUPABASE_MESSAGE)
      return
    }
    if (password.length < 6) {
      setError('Use at least 6 characters.')
      return
    }
    setPending(true)
    try {
      const { error: updateError } = await supabase.auth.updateUser({ password })
      if (updateError) {
        setError(updateError.message)
        return
      }
      router.replace('/dashboard')
    } finally {
      setPending(false)
    }
  }

  return (
    <div className="section-space">
      <div className="container-shell flex justify-center">
        <div className="w-full max-w-md">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Account</p>
          <h1 className="mt-3 text-center text-2xl font-semibold tracking-tight text-zinc-900">Choose a new password</h1>
          <div className="mt-10 rounded-xl border border-zinc-200/90 bg-white p-8 shadow-sm ring-1 ring-zinc-950/[0.03]">
            {!supabaseConfigured ? (
              <p className="text-sm text-amber-950">{AUTH_REQUIRES_SUPABASE_MESSAGE}</p>
            ) : !ready && !error ? (
              <p className="text-sm text-zinc-600">Checking your reset link…</p>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                {error ? (
                  <p className="rounded-lg border border-red-200/90 bg-red-50/80 px-3 py-2 text-sm text-red-800" role="alert">
                    {error}
                  </p>
                ) : null}
                <label htmlFor="password" className="sr-only">
                  New password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  placeholder="New password"
                  className={inputClassName}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                  disabled={pending || !ready}
                />
                <Button type="submit" className="w-full" disabled={pending || !ready}>
                  {pending ? 'Saving…' : 'Save password'}
                </Button>
              </form>
            )}
            <p className="mt-6 text-center text-sm text-zinc-600">
              <Link href="/sign-in" className="font-medium text-blue-800 hover:text-blue-900">
                Back to sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
