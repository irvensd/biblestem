'use client'

import Link from 'next/link'
import { type FormEvent, useState } from 'react'
import { useDemoAuth } from '@/components/auth/DemoAuthProvider'
import { Button } from '@/components/ui/Button'
import { inputClassName } from '@/components/ui/form-styles'
import { DEMO_LOGIN_EMAIL, DEMO_LOGIN_PASSWORD } from '@/lib/demo-auth'
import { isSupabaseConfigured } from '@/lib/supabase/client'

export function SignInForm() {
  const { isReady, login } = useDemoAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [pending, setPending] = useState(false)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError(null)
    setPending(true)
    try {
      const result = await login(email, password)
      if (!result.ok) {
        setError(result.message)
        return
      }
    } finally {
      setPending(false)
    }
  }

  if (!isReady) {
    return (
      <div className="mt-10 rounded-xl border border-zinc-200/90 bg-white p-8 shadow-sm ring-1 ring-zinc-950/[0.03]">
        <div className="h-10 animate-pulse rounded-lg bg-zinc-100" />
        <div className="mt-4 h-10 animate-pulse rounded-lg bg-zinc-100" />
        <div className="mt-4 h-10 animate-pulse rounded-lg bg-zinc-100" />
      </div>
    )
  }

  return (
    <>
      <div className="mt-10 rounded-xl border border-zinc-200/90 bg-white p-8 shadow-sm ring-1 ring-zinc-950/[0.03]">
        <form className="space-y-4" onSubmit={handleSubmit} noValidate>
          {error ? (
            <p className="rounded-lg border border-red-200/90 bg-red-50/80 px-3 py-2 text-sm text-red-800" role="alert">
              {error}
            </p>
          ) : null}
          <div>
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
              disabled={pending}
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder="Password"
              className={inputClassName}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={pending}
            />
          </div>
          <Button type="submit" className="w-full" disabled={pending}>
            {pending ? 'Signing in…' : 'Sign in'}
          </Button>
        </form>
        <p className="mt-6 text-center text-sm text-zinc-600">
          New to BibleStem?{' '}
          <Link href="/get-started" className="font-medium text-blue-800 hover:text-blue-900">
            Get started
          </Link>
        </p>
      </div>

      <div className="mt-6 rounded-lg border border-dashed border-zinc-200/90 bg-stone-50/90 px-4 py-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">Try BibleStem</p>
        <p className="mt-2 text-sm leading-relaxed text-zinc-600">
          {isSupabaseConfigured()
            ? 'With Supabase enabled, sign in with an account that exists in Supabase Auth (create it under Get started or in the Supabase dashboard). The demo email only works if that user exists.'
            : 'Use the shared credentials below in the form. Your session stays on this device.'}
        </p>
        <p className="mt-3 font-mono text-xs text-zinc-800">
          <span className="text-zinc-500">Email</span>{' '}
          <code className="rounded bg-white px-1.5 py-0.5 ring-1 ring-zinc-200/80">{DEMO_LOGIN_EMAIL}</code>
        </p>
        <p className="mt-2 font-mono text-xs text-zinc-800">
          <span className="text-zinc-500">Password</span>{' '}
          <code className="rounded bg-white px-1.5 py-0.5 ring-1 ring-zinc-200/80">{DEMO_LOGIN_PASSWORD}</code>
        </p>
      </div>
    </>
  )
}
