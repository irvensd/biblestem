import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { isSupabaseConfigured } from '@/lib/supabase/client'

type CookieToSet = { name: string; value: string; options: CookieOptions }

function supabaseEnv(): { url: string; key: string } | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim()
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim()
  if (!url || !key) return null
  return { url, key }
}

/** Cookie-backed Supabase client for Server Components, route handlers, and server actions. */
export async function createSupabaseServerClient() {
  const env = supabaseEnv()
  if (!env) {
    throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY')
  }
  const cookieStore = await cookies()
  return createServerClient(env.url, env.key, {
    cookies: {
      getAll() {
        return cookieStore.getAll()
      },
      setAll(cookiesToSet: CookieToSet[]) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options))
        } catch {
          // Called from a Server Component. Middleware refreshes the session cookie.
        }
      },
    },
  })
}

/** Signed-in Supabase user from the request cookies, or null. */
export async function getServerAuthUser() {
  if (!isSupabaseConfigured()) return null
  const supabase = await createSupabaseServerClient()
  const { data, error } = await supabase.auth.getSession()
  if (error || !data.session?.user) return null
  return data.session.user
}
