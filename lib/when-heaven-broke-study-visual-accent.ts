/** Indigo accent for When Heaven Broke study visuals (great controversy, no horror imagery). */
export const WHEN_HEAVEN_BROKE_STUDY_ACCENT = {
  emphArticle:
    'border-indigo-800/35 bg-indigo-50/50 ring-2 ring-indigo-800/15 ring-offset-2 ring-offset-stone-50 dark:border-indigo-700/40 dark:bg-indigo-950/30 dark:ring-indigo-700/20 dark:ring-offset-zinc-950',
  defaultArticle:
    'border-zinc-200/90 bg-white/90 ring-1 ring-zinc-950/[0.03] dark:border-zinc-700/80 dark:bg-zinc-900/60',
  badgeEmph: 'bg-indigo-800 text-white dark:bg-indigo-700',
  badgeDefault:
    'bg-indigo-50 text-indigo-950 ring-1 ring-indigo-200/80 dark:bg-indigo-950/50 dark:text-indigo-100 dark:ring-indigo-800/40',
  scripture: 'text-indigo-900/80 dark:text-indigo-200/80',
  columnHeader: 'border-indigo-200/80 bg-indigo-50/40 dark:border-indigo-800/30 dark:bg-indigo-950/25',
  note: 'text-xs text-zinc-600 dark:text-zinc-400',
} as const

export function clampWhenHeavenBrokeHighlightSet(
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
