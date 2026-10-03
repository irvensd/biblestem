/** Public site origin. Sitemap, canonical tags, and auth emails use this host. */
export const CANONICAL_SITE_ORIGIN = 'https://biblestem.io'

export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  if (!fromEnv) return CANONICAL_SITE_ORIGIN
  return fromEnv.replace(/\/$/, '')
}

export function passwordResetRedirectUrl(): string {
  return `${getSiteUrl()}/auth/reset`
}
