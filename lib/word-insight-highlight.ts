import type { WordInsight } from '@/lib/lesson-content'

function escapeRegExp(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

/** Normalize curly quotes and dashes so authored `surface` strings match scripture copy. */
export function normalizeWordInsightText(s: string): string {
  return s
    .replace(/[\u2018\u2019\u201B`´]/g, "'")
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/\u2013|\u2014/g, '-')
}

function surfaceVariants(surface: string): string[] {
  const trimmed = surface.trim()
  if (!trimmed) return []
  const variants = new Set<string>([trimmed])
  const straightApos = trimmed.replace(/[\u2018\u2019\u201B]/g, "'")
  const curlyApos = trimmed.replace(/'/g, '\u2019')
  variants.add(straightApos)
  variants.add(curlyApos)
  return [...variants]
}

/** Returns true when any surface variant appears in the quote (case-insensitive). */
export function wordInsightSurfaceInQuote(quote: string, surface: string): boolean {
  const variants = surfaceVariants(surface)
  if (!variants.length || !quote.trim()) return false
  const normalizedQuote = normalizeWordInsightText(quote)
  return variants.some((variant) =>
    normalizedQuote.includes(normalizeWordInsightText(variant)),
  )
}

/** Insights whose `surface` text actually appears in the passage (for hint + highlights). */
export function wordInsightsInQuote(quote: string, insights: WordInsight[]): WordInsight[] {
  return insights.filter((ins) => wordInsightSurfaceInQuote(quote, ins.surface))
}

export function buildWordInsightSplitRegex(insights: WordInsight[]): RegExp | null {
  const patterns = insights
    .flatMap((ins) => surfaceVariants(ins.surface))
    .sort((a, b) => b.length - a.length)
    .map((s) => escapeRegExp(s))
  if (!patterns.length) return null
  return new RegExp(`(${patterns.join('|')})`, 'gi')
}

export function matchWordInsightPart(part: string, insights: WordInsight[]): WordInsight | undefined {
  return insights.find((w) =>
    surfaceVariants(w.surface).some(
      (variant) => normalizeWordInsightText(variant) === normalizeWordInsightText(part),
    ),
  )
}
