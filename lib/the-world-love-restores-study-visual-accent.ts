/** Warm rose accent for The World Love Restores study visuals (relational, no fantasy heaven art). */
export const WORLD_LOVE_RESTORES_STUDY_ACCENT = {
  emphArticle:
    'border-rose-800/35 bg-rose-50/50 ring-2 ring-rose-800/15 ring-offset-2 ring-offset-stone-50 dark:border-rose-700/40 dark:bg-rose-950/30 dark:ring-rose-700/20 dark:ring-offset-zinc-950',
  defaultArticle:
    'border-zinc-200/90 bg-white/90 ring-1 ring-zinc-950/[0.03] dark:border-zinc-700/80 dark:bg-zinc-900/60',
  gardenArticle:
    'border-emerald-800/30 bg-emerald-50/40 ring-1 ring-emerald-800/10 dark:border-emerald-700/35 dark:bg-emerald-950/25 dark:ring-emerald-700/15',
  badgeEmph: 'bg-rose-800 text-white dark:bg-rose-700',
  badgeDefault: 'bg-rose-50 text-rose-950 ring-1 ring-rose-200/80 dark:bg-rose-950/50 dark:text-rose-100 dark:ring-rose-800/40',
  badgeGarden: 'bg-emerald-800 text-white dark:bg-emerald-700',
  scripture: 'text-rose-900/80 dark:text-rose-200/80',
  checkmark: 'text-emerald-700 dark:text-emerald-400',
  columnHeader: 'border-rose-200/80 bg-rose-50/40 dark:border-rose-800/30 dark:bg-rose-950/25',
  note: 'text-xs text-zinc-600 dark:text-zinc-400',
} as const

export function clampWorldLoveRestoresHighlightSet(
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
