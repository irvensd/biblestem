import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'
import { CANONICAL_SITE_ORIGIN } from '@/lib/site-url'

type CookieToSet = { name: string; value: string; options: CookieOptions }

function isVercelPreviewHost(host: string): boolean {
  const hostname = host.split(':')[0]?.toLowerCase() ?? ''
  return hostname.endsWith('.vercel.app')
}

export async function middleware(request: NextRequest) {
  const host = request.headers.get('host') ?? ''
  if (isVercelPreviewHost(host)) {
    const dest = new URL(`${request.nextUrl.pathname}${request.nextUrl.search}`, CANONICAL_SITE_ORIGIN)
    return NextResponse.redirect(dest, 301)
  }

  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-biblestem-pathname', `${request.nextUrl.pathname}${request.nextUrl.search}`)

  let supabaseResponse = NextResponse.next({
    request: { headers: requestHeaders },
  })

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim()
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim()
  if (!url || !key) return supabaseResponse

  const supabase = createServerClient(url, key, {
    cookies: {
      getAll() {
        return request.cookies.getAll()
      },
      setAll(cookiesToSet: CookieToSet[]) {
        cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
        supabaseResponse = NextResponse.next({
          request: { headers: requestHeaders },
        })
        cookiesToSet.forEach(({ name, value, options }) => supabaseResponse.cookies.set(name, value, options))
      },
    },
  })

  await supabase.auth.getUser()
  return supabaseResponse
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)'],
}
