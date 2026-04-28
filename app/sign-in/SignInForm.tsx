'use client'

import Link from 'next/link'
import { type FormEvent, useState } from 'react'
import { AUTH_REQUIRES_SUPABASE_MESSAGE, useDemoAuth } from '@/components/auth/DemoAuthProvider'
import { Button } from '@/components/ui/Button'
import { inputClassName } from '@/components/ui/form-styles'
import { isSupabaseConfigured } from '@/lib/supabase/client'

export function SignInForm() {
  const { isReady, login } = useDemoAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [pending, setPending] = useState(false)

  const supabaseConfigured = isSupabaseConfigured()

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
    <div className="mt-10 rounded-xl border border-zinc-200/90 bg-white p-8 shadow-sm ring-1 ring-zinc-950/[0.03]">
      {!supabaseConfigured ? (
        <p
          className="mb-4 rounded-lg border border-amber-200/90 bg-amber-50/90 px-3 py-2 text-sm text-amber-950"
          role="status"
        >
          {AUTH_REQUIRES_SUPABASE_MESSAGE}
        </p>
      ) : null}
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
            disabled={pending || !supabaseConfigured}
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
            disabled={pending || !supabaseConfigured}
          />
        </div>
        <Button type="submit" className="w-full" disabled={pending || !supabaseConfigured}>
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
  )
}
