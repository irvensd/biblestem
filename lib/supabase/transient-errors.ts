/**
 * Heuristics for Supabase/PostgREST failures that are worth retrying (network blips, edge hiccups).
 * Auth/RLS/schema errors are not treated as transient.
 */
export function isTransientNetworkError(message: string): boolean {
  const m = message.toLowerCase()
  if (m.includes('fetch failed')) return true
  if (m.includes('network') && m.includes('request')) return true
  if (m.includes('networkerror')) return true
  if (m.includes('econnreset')) return true
  if (m.includes('etimedout')) return true
  if (m.includes('socket hang up')) return true
  if (m.includes('503') || m.includes('502') || m.includes('504')) return true
  if (m.includes('timeout')) return true
  return false
}

export class TransientCatalogFetchError extends Error {
  readonly transient = true
  constructor(message: string) {
    super(message)
    this.name = 'TransientCatalogFetchError'
  }
}
