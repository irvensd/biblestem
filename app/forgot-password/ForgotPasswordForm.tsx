'use client'

import Link from 'next/link'
import { type FormEvent, useState } from 'react'
import { AUTH_REQUIRES_SUPABASE_MESSAGE } from '@/components/auth/DemoAuthProvider'
import { Button } from '@/components/ui/Button'
import { inputClassName } from '@/components/ui/form-styles'
import { passwordResetRedirectUrl } from '@/lib/site-url'
import { getSupabaseBrowserClient, isSupabaseConfigured } from '@/lib/supabase/client'

export function ForgotPasswordForm() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [sent, setSent] = useState(false)
  const [pending, setPending] = useState(false)
  const supabaseConfigured = isSupabaseConfigured()

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError(null)
    const supabase = getSupabaseBrowserClient()
    if (!supabase) {
      setError(AUTH_REQUIRES_SUPABASE_MESSAGE)
      return
    }
    setPending(true)
    try {
      const { error: resetError } = await supabase.auth.resetPasswordForEmail(email.trim().toLowerCase(), {
        redirectTo: passwordResetRedirectUrl(),
      })
      if (resetError) {
        setError(resetError.message)
        return
      }
      setSent(true)
    } finally {
      setPending(false)
    }
  }

  return (
    <div className="section-space">
      <div className="container-shell flex justify-center">
        <div className="w-full max-w-md">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Account</p>
          <h1 className="mt-3 text-center text-2xl font-semibold tracking-tight text-zinc-900">Reset your password</h1>
          <p className="mt-2 text-center text-sm leading-relaxed text-zinc-600">
            Enter the email on your account. If it matches, we will send a link to choose a new password.
          </p>
          <div className="mt-10 rounded-xl border border-zinc-200/90 bg-white p-8 shadow-sm ring-1 ring-zinc-950/[0.03]">
            {sent ? (
              <p className="text-sm leading-relaxed text-zinc-700" role="status">
                If an account exists for that email, a reset link is on its way. Open it on this device, then choose a
                new password.
              </p>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                {!supabaseConfigured ? (
                  <p className="rounded-lg border border-amber-200/90 bg-amber-50/90 px-3 py-2 text-sm text-amber-950">
                    {AUTH_REQUIRES_SUPABASE_MESSAGE}
                  </p>
                ) : null}
                {error ? (
                  <p className="rounded-lg border border-red-200/90 bg-red-50/80 px-3 py-2 text-sm text-red-800" role="alert">
                    {error}
                  </p>
                ) : null}
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Email address"
                  className={inputClassName}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={pending || !supabaseConfigured}
                />
                <Button type="submit" className="w-full" disabled={pending || !supabaseConfigured}>
                  {pending ? 'Sending…' : 'Send reset link'}
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
