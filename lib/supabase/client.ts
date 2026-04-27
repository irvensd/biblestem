import { createClient, type SupabaseClient } from '@supabase/supabase-js'

/** True when URL + anon key are set (browser and server). */
export function isSupabaseConfigured(): boolean {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL?.trim() && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim(),
  )
}

let browserSingleton: SupabaseClient | null = null

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
