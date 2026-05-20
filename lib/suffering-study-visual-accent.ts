/** Sage accent for Why Does God Allow Suffering? study visuals. */
export const SUFFERING_STUDY_ACCENT = {
  emphArticle:
    'border-emerald-800/35 bg-emerald-50/50 ring-2 ring-emerald-800/15 ring-offset-2 ring-offset-stone-50 dark:border-emerald-700/40 dark:bg-emerald-950/30 dark:ring-emerald-700/20 dark:ring-offset-zinc-950',
  defaultArticle:
    'border-zinc-200/90 bg-white/90 ring-1 ring-zinc-950/[0.03] dark:border-zinc-700/80 dark:bg-zinc-900/60',
  badgeEmph: 'bg-emerald-800 text-white dark:bg-emerald-700',
  badgeDefault:
    'bg-emerald-50 text-emerald-950 ring-1 ring-emerald-200/80 dark:bg-emerald-950/50 dark:text-emerald-100 dark:ring-emerald-800/40',
  scripture: 'text-emerald-900/80 dark:text-emerald-200/80',
  columnBefore:
    'border-emerald-200/80 bg-emerald-50/40 dark:border-emerald-800/30 dark:bg-emerald-950/25',
  columnAfter: 'border-amber-200/80 bg-amber-50/40 dark:border-amber-800/30 dark:bg-amber-950/25',
  note: 'text-xs text-zinc-600 dark:text-zinc-400',
} as const

export function clampSufferingStudyHighlightSet(
  indices: readonly number[] | undefined,
  len: number,
): Set<number> {
  const out = new Set<number>()
  if (!indices?.length || len <= 0) return out
  for (const i of indices) {
    if (Number.isInteger(i) && i >= 0 && i < len) out.add(i)
  }
  return out
}
