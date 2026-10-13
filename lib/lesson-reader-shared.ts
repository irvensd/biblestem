/** Client-safe lesson helpers. Do not import lesson libraries from this file. */

export const STUDY_INSIGHT_VARIANT_LABELS = {
  prophecy_lens: 'Prophecy Lens',
  word_insight: 'Word Insight',
  historical_context: 'Historical Context',
  scripture_connection: 'Scripture Connection',
  doctrine_clarity: 'Doctrine Clarity',
  christ_connection: 'Christ Connection',
} as const

type WordStudyFields = {
  surface: string
  lemma: string
  transliteration: string
  meaning: string
  strongs: string
  note: string
  reference?: string
  relatedReferences?: string[]
}

export function wordStudyToInsight(ws: WordStudyFields) {
  return {
    surface: ws.surface,
    lemma: ws.lemma,
    transliteration: ws.transliteration,
    meaning: ws.meaning,
    strongs: ws.strongs,
    note: ws.note,
    ...(ws.reference?.trim() ? { reference: ws.reference.trim() } : {}),
    ...(ws.relatedReferences?.length ? { relatedReferences: ws.relatedReferences } : {}),
  }
}
