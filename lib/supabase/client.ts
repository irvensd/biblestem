import { createClient, type SupabaseClient } from '@supabase/supabase-js'

/** True when URL + anon key are set (browser and server). */
export function isSupabaseConfigured(): boolean {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL?.trim() && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim(),
  )
}

let browserSingleton: SupabaseClient | null = null

/** Supabase persists the JWT under keys like `sb-<project-ref>-auth-token`. */
export function clearSupabaseBrowserAuthStorage(): void {
  if (typeof window === 'undefined') return
  try {
    const toRemove: string[] = []
    for (let i = 0; i < window.localStorage.length; i++) {
      const key = window.localStorage.key(i)
      if (key?.startsWith('sb-') && key.endsWith('-auth-token')) toRemove.push(key)
    }
    for (const key of toRemove) {
      window.localStorage.removeItem(key)
    }
  } catch {
    /* Safari private mode / blocked storage */
  }
}

/** Drops the singleton so the next client does not reuse a stale in-memory session (e.g. after logout). */
export function resetSupabaseBrowserClient(): void {
  browserSingleton = null
}

/**
 * Single browser client for auth + user-scoped tables (RLS). Returns null when env is not set.
 */
export function getSupabaseBrowserClient(): SupabaseClient | null {
  if (!isSupabaseConfigured()) return null
  if (!browserSingleton) {
    browserSingleton = createSupabaseBrowserClient()
  }
  return browserSingleton
}

/**
 * Server or client: use the public anon key only. Never import the service role in client code.
 * Throws if env is missing — call `isSupabaseConfigured()` first or catch at the fetch layer.
 */
export function createSupabaseBrowserClient(): SupabaseClient {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url?.trim() || !key?.trim()) {
    throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY')
  }
  return createClient(url.trim(), key.trim())
}
