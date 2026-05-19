/** Allow only same-site relative paths for post-sign-in redirects. */
export function safeNextPath(raw: string | null | undefined): string | null {
  const value = raw?.trim()
  if (!value || !value.startsWith('/') || value.startsWith('//')) return null
  return value
}
