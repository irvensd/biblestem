import { safeNextPath } from '@/lib/auth/safe-next-path'

/** Read post-auth return path from `redirect` (preferred) or legacy `next`. */
export function readAuthRedirectParam(
  searchParams: Pick<URLSearchParams, 'get'> | { get(name: string): string | null },
): string | null {
  return safeNextPath(searchParams.get('redirect')) ?? safeNextPath(searchParams.get('next'))
}

export function signInRedirectUrl(returnPath: string): string {
  const safe = safeNextPath(returnPath)
  if (!safe) return '/sign-in'
  return `/sign-in?redirect=${encodeURIComponent(safe)}`
}

export function signUpRedirectUrl(returnPath: string): string {
  const safe = safeNextPath(returnPath)
  if (!safe) return '/sign-up'
  return `/sign-up?redirect=${encodeURIComponent(safe)}`
}
