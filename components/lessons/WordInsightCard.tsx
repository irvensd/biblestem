import { WordInsight as WordInsightPanel } from '@/components/lessons/WordInsight'
import type { WordInsight } from '@/lib/lesson-content'

function inferLanguage(insight: WordInsight): 'Greek' | 'Hebrew' {
  const raw = insight.language?.trim().toLowerCase()
  if (raw === 'greek' || raw === 'hebrew') return raw === 'hebrew' ? 'Hebrew' : 'Greek'
  const s = insight.strongs?.trim()
  if (s && /^H\d/i.test(s)) return 'Hebrew'
  if (s && /^G\d/i.test(s)) return 'Greek'
  return 'Greek'
}

export interface WordInsightCardProps {
  insight: WordInsight
  /** When false, omit top “Word insight” label (e.g. inside popover). */
  showProductLabel?: boolean
  className?: string
}

/** Maps legacy popover insight shape to the signature Word Insight card. */
export function WordInsightCard({
  insight,
  showProductLabel = true,
  className = '',
}: WordInsightCardProps) {
  const bridge = insight.explanation?.trim() ?? ''
  const note = insight.note?.trim() ?? ''
  const explanation = bridge && note && bridge !== note ? `${bridge}\n\n${note}` : bridge || note
  return (
    <WordInsightPanel
      language={inferLanguage(insight)}
      originalWord={insight.lemma}
      transliteration={insight.transliteration}
      meaning={insight.meaning}
      reference={insight.reference?.trim() ?? ''}
      shortExplanation={explanation}
      strongsNumber={insight.strongs?.trim() || undefined}
      relatedReferences={insight.relatedReferences}
      showLabel={showProductLabel}
      className={className}
    />
  )
}
