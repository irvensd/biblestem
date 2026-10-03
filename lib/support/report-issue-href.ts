/**
 * Builds `/support` URLs with query params for contextual bug/content/quiz reports.
 * The support form is public. Signed-in visitors can also open it from Settings.
 */
export function supportReportHref(params: Record<string, string | undefined | null>): string {
  const q = new URLSearchParams()
  for (const [key, value] of Object.entries(params)) {
    if (value == null || value === '') continue
    q.set(key, value)
  }
  const s = q.toString()
  return s ? `/support?${s}` : '/support'
}

/** Subtle inline style for contextual report links (avoid clutter). */
export const REPORT_ISSUE_LINK_CLASSNAME =
  'text-sm text-zinc-500 underline decoration-zinc-300/80 underline-offset-[3px] transition-colors hover:text-zinc-800'
