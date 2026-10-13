/** Tabs for a Word Insight card. A tab is included only when approved text exists for it. */

export const WORD_INSIGHT_TABS = [
  { id: 'meaning', label: 'Meaning' },
  { id: 'context', label: 'Biblical Context' },
  { id: 'connections', label: 'Scripture Connections' },
] as const

export type WordInsightTabId = (typeof WORD_INSIGHT_TABS)[number]['id']

export type WordInsightTabInput = {
  meaning?: string
  reference?: string
  passageExplanation?: string
  relatedReferences?: string[]
}

const TAB_KEYS = new Set(['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'])

export function cleanedRelatedReferences(references: string[] | undefined): string[] {
  if (!references?.length) return []
  const seen = new Set<string>()
  const out: string[] = []
  for (const reference of references) {
    const text = reference.trim()
    if (!text || seen.has(text)) continue
    seen.add(text)
    out.push(text)
  }
  return out
}

export function availableWordInsightTabs(input: WordInsightTabInput): WordInsightTabId[] {
  const tabs: WordInsightTabId[] = []
  if (input.meaning?.trim()) tabs.push('meaning')
  if (input.reference?.trim() || input.passageExplanation?.trim()) tabs.push('context')
  if (cleanedRelatedReferences(input.relatedReferences).length > 0) tabs.push('connections')
  return tabs
}

export function isWordInsightTabKey(key: string): boolean {
  return TAB_KEYS.has(key)
}

export function wordInsightTabAfterKey(tabs: WordInsightTabId[], current: WordInsightTabId, key: string): WordInsightTabId {
  if (tabs.length === 0) return current
  const index = Math.max(0, tabs.indexOf(current))
  if (key === 'Home') return tabs[0] ?? current
  if (key === 'End') return tabs[tabs.length - 1] ?? current
  if (key === 'ArrowLeft' || key === 'ArrowUp') return tabs[Math.max(0, index - 1)] ?? current
  if (key === 'ArrowRight' || key === 'ArrowDown') return tabs[Math.min(tabs.length - 1, index + 1)] ?? current
  return tabs[index] ?? current
}
