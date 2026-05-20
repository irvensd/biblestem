/** Warm copper accent for The End of Evil study visuals (no flame/torture imagery). */
export const END_OF_EVIL_STUDY_ACCENT = {
  emphArticle:
    'border-amber-800/35 bg-amber-50/50 ring-2 ring-amber-800/15 ring-offset-2 ring-offset-stone-50 dark:border-amber-700/40 dark:bg-amber-950/30 dark:ring-amber-700/20 dark:ring-offset-zinc-950',
  defaultArticle:
    'border-zinc-200/90 bg-white/90 ring-1 ring-zinc-950/[0.03] dark:border-zinc-700/80 dark:bg-zinc-900/60',
  badgeEmph: 'bg-amber-800 text-white dark:bg-amber-700',
  badgeDefault: 'bg-amber-50 text-amber-950 ring-1 ring-amber-200/80 dark:bg-amber-950/50 dark:text-amber-100 dark:ring-amber-800/40',
  scripture: 'text-amber-900/80 dark:text-amber-200/80',
  columnHeader: 'border-amber-200/80 bg-amber-50/40 dark:border-amber-800/30 dark:bg-amber-950/25',
  columnHeaderMuted: 'border-zinc-300/80 bg-zinc-50/60 dark:border-zinc-600/80 dark:bg-zinc-800/40',
  note: 'text-xs text-zinc-600 dark:text-zinc-400',
} as const

export function clampEndOfEvilHighlightSet(
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
