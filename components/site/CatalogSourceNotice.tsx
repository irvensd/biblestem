import type { CatalogSource } from '@/lib/catalog/load-catalog'

interface CatalogSourceNoticeProps {
  source: CatalogSource
  showWhenMockOnly?: boolean
}

/**
 * Small, non-blocking notice when the app falls back from Supabase to local mock catalog.
 */
export function CatalogSourceNotice({ source, showWhenMockOnly = true }: CatalogSourceNoticeProps) {
  if (showWhenMockOnly && source !== 'mock') return null
  return (
    <div
      role="status"
      aria-live="polite"
      className="rounded-lg border border-amber-200/70 bg-amber-50/70 px-3 py-2 text-xs text-amber-900/90"
    >
      Using local catalog fallback while the live catalog is unavailable or slow to reach. You can keep
      studying; reconnect to sync the latest catalog when your network allows.
    </div>
  )
}
