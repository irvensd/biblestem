'use client'

import type { Session } from '@supabase/supabase-js'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { validateDemoCredentials } from '@/lib/demo-auth'
import { firstNameFromFullName } from '@/lib/name-utils'
import { getSupabaseBrowserClient, isSupabaseConfigured } from '@/lib/supabase/client'

const STORAGE_KEY = 'biblestem-demo-session'
const PROFILE_KEY = 'biblestem-demo-profile'

/** `id` is set when signed in with Supabase Auth; omitted for local demo mode. */
export type DemoUser = { id?: string; email: string; firstName?: string }

export type AuthActionResult = { ok: true } | { ok: false; message: string }

type DemoAuthContextValue = {
  user: DemoUser | null
  isReady: boolean
  login: (email: string, password: string) => Promise<AuthActionResult>
  register: (email: string, password: string, fullName: string) => Promise<AuthActionResult>
  logout: (options?: { navigateTo?: string }) => Promise<void>
  /** Persist a new first name (Supabase `profiles.display_name` when configured, otherwise local profile). */
  updateFirstName: (firstName: string) => Promise<AuthActionResult>
}

const DemoAuthContext = createContext<DemoAuthContextValue | null>(null)

/** Supabase GoTrue returns HTTP-style errors; 429 = auth rate limit (too many sign-ups/sign-ins). */
function formatSupabaseAuthError(err: { message: string; status?: number }): string {
  const msg = err.message ?? ''
  if (err.status === 429 || /429|too many requests|rate limit/i.test(msg)) {
    return (
      'Too many sign-in or sign-up attempts for now (Supabase rate limit). Wait 5–15 minutes and try again. ' +
      'If you were testing repeatedly, this is normal—Supabase also lets you review limits under Project Settings → Auth.'
    )
  }
  return msg
}

function readProfileFirstName(email: string): string | undefined {
  if (typeof window === 'undefined') return undefined
  try {
    const raw = localStorage.getItem(PROFILE_KEY)
    if (!raw) return undefined
    const p = JSON.parse(raw) as { email?: unknown; firstName?: unknown }
    if (typeof p.email !== 'string' || p.email.toLowerCase() !== email.toLowerCase()) return undefined
    if (typeof p.firstName === 'string' && p.firstName.trim()) return p.firstName.trim()
  } catch {
    /* ignore */
  }
  return undefined
}

function safeStorageSet(key: string, value: string): void {
  try {
    localStorage.setItem(key, value)
  } catch {
    /* ignore — blocked storage / private mode */
  }
}

function safeStorageRemove(key: string): void {
  try {
    localStorage.removeItem(key)
  } catch {
    /* ignore */
  }
}

function saveProfile(email: string, firstName: string): void {
  safeStorageSet(
    PROFILE_KEY,
    JSON.stringify({ email: email.trim().toLowerCase(), firstName }),
  )
}

function readStoredUser(): DemoUser | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as { email?: unknown }
    if (typeof parsed.email === 'string' && parsed.email.includes('@')) {
      const email = parsed.email
      const firstName = readProfileFirstName(email)
      return firstName ? { email, firstName } : { email }
    }
  } catch {
    /* ignore */
  }
  return null
}

async function mapSessionToUser(session: Session): Promise<DemoUser> {
  const email = session.user.email ?? ''
  const supabase = getSupabaseBrowserClient()
  let displayName: string | undefined
  if (supabase) {
    const { data } = await supabase.from('profiles').select('display_name').eq('id', session.user.id).single()
    displayName = data?.display_name ?? undefined
  }
  const meta = session.user.user_metadata as { full_name?: string }
  const fn =
    firstNameFromFullName(displayName ?? '') ||
    firstNameFromFullName(meta?.full_name ?? '') ||
    readProfileFirstName(email)
  return { id: session.user.id, email, firstName: fn || undefined }
}

export function DemoAuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<DemoUser | null>(null)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    if (!isSupabaseConfigured()) {
      queueMicrotask(() => {
        setUser(readStoredUser())
        setIsReady(true)
      })
      return
    }

    const supabase = getSupabaseBrowserClient()
    if (!supabase) {
      queueMicrotask(() => setIsReady(true))
      return
    }
    let cancelled = false

    async function applySession(session: Session | null) {
      if (cancelled) return
      if (session?.user) {
        setUser(await mapSessionToUser(session))
      } else {
        setUser(null)
      }
    }

    void supabase.auth.getSession().then(async ({ data: { session } }) => {
      await applySession(session)
      if (!cancelled) setIsReady(true)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      void applySession(session)
    })

    return () => {
      cancelled = true
      subscription.unsubscribe()
    }
  }, [])

  const login = useCallback(async (email: string, password: string): Promise<AuthActionResult> => {
    if (!isSupabaseConfigured()) {
      if (!validateDemoCredentials(email, password)) {
        return {
          ok: false,
          message:
            'Offline demo mode only accepts the demo email and password shown on this page. Use those exactly.',
        }
      }
      const normalized = email.trim().toLowerCase()
      const firstName = readProfileFirstName(normalized)
      const next: DemoUser = firstName ? { email: normalized, firstName } : { email: normalized }
      safeStorageSet(STORAGE_KEY, JSON.stringify({ email: normalized }))
      setUser(next)
      return { ok: true }
    }

    const supabase = getSupabaseBrowserClient()
    if (!supabase) return { ok: false, message: 'Could not connect to authentication.' }
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    })
    if (error) return { ok: false, message: formatSupabaseAuthError(error) }
    if (!data.session) {
      return {
        ok: false,
        message:
          'No active session. If email confirmation is required, confirm your email first, then try again.',
      }
    }
    setUser(await mapSessionToUser(data.session))
    return { ok: true }
  }, [])

  const register = useCallback(async (email: string, password: string, fullName: string): Promise<AuthActionResult> => {
    if (!isSupabaseConfigured()) {
      if (!validateDemoCredentials(email, password)) {
        return {
          ok: false,
          message:
            'Offline demo mode only accepts the demo email and password shown below, plus your name for the greeting.',
        }
      }
      const firstName = firstNameFromFullName(fullName)
      if (!firstName) {
        return { ok: false, message: 'Enter your first and last name so we can greet you on the dashboard.' }
      }
      const normalized = email.trim().toLowerCase()
      saveProfile(normalized, firstName)
      safeStorageSet(STORAGE_KEY, JSON.stringify({ email: normalized }))
      setUser({ email: normalized, firstName })
      return { ok: true }
    }

    const supabase = getSupabaseBrowserClient()
    if (!supabase) return { ok: false, message: 'Could not connect to authentication.' }
    const firstName = firstNameFromFullName(fullName)
    if (!firstName) {
      return { ok: false, message: 'Enter your first and last name.' }
    }
    const { data, error } = await supabase.auth.signUp({
      email: email.trim().toLowerCase(),
      password,
      options: { data: { full_name: fullName.trim() } },
    })
    if (error) return { ok: false, message: formatSupabaseAuthError(error) }
    if (data.session) {
      setUser(await mapSessionToUser(data.session))
      return { ok: true }
    }
    if (data.user) {
      return {
        ok: false,
        message:
          'Check your email to confirm your account. After confirming, return here and sign in. (You can disable email confirmation in Supabase → Authentication for local testing.)',
      }
    }
    return { ok: false, message: 'Could not complete sign-up. Try again or sign in if you already have an account.' }
  }, [])

  const logout = useCallback(async (options?: { navigateTo?: string }) => {
    const supabase = getSupabaseBrowserClient()
    if (supabase) {
      await supabase.auth.signOut()
    }
    safeStorageRemove(STORAGE_KEY)
    // Full-page navigation resets client state; skip setUser(null) so protected layouts never
    // flash “Redirecting…” between auth clearing and unload.
    if (typeof window !== 'undefined' && options?.navigateTo) {
      window.location.href = options.navigateTo
      return
    }
    setUser(null)
  }, [])

  const updateFirstName = useCallback(
    async (firstName: string): Promise<AuthActionResult> => {
      const trimmed = firstName.trim()
      if (!trimmed) return { ok: false, message: 'Enter a name first.' }

      const current = user
      if (!current) return { ok: false, message: 'You need to be signed in.' }

      if (!isSupabaseConfigured() || !current.id) {
        saveProfile(current.email, trimmed)
        setUser({ ...current, firstName: trimmed })
        return { ok: true }
      }

      const supabase = getSupabaseBrowserClient()
      if (!supabase) return { ok: false, message: 'Could not connect to authentication.' }
      const { error } = await supabase.from('profiles').upsert(
        {
          id: current.id,
          display_name: trimmed,
          updated_at: new Date().toISOString(),
        },
        { onConflict: 'id' },
      )
      if (error) return { ok: false, message: error.message }
      setUser({ ...current, firstName: trimmed })
      saveProfile(current.email, trimmed)
      return { ok: true }
    },
    [user],
  )

  const value = useMemo(
    () => ({ user, isReady, login, register, logout, updateFirstName }),
    [user, isReady, login, register, logout, updateFirstName],
  )

  return <DemoAuthContext.Provider value={value}>{children}</DemoAuthContext.Provider>
}

export function useDemoAuth(): DemoAuthContextValue {
  const ctx = useContext(DemoAuthContext)
  if (!ctx) {
    throw new Error('useDemoAuth must be used within DemoAuthProvider')
  }
  return ctx
}
