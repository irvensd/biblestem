import type { StudyInsightVariant, WordInsight } from '@/lib/lesson-content'

/** Fields for the signature `WordInsight` study card (Greek/Hebrew). */
export type StudyToolWordInsightFields = {
  language: 'Greek' | 'Hebrew'
  originalWord: string
  transliteration: string
  meaning: string
  reference: string
  shortExplanation: string
  strongsNumber?: string
}

export type ScriptureChainVerse = {
  reference: string
  shortNote?: string
}

export type TeachingPointInsights = { pointIndex: number; insights: WordInsight[] }

/** Structured step payload (optional). Raw string `body` remains the default. */
export type LessonContentBlock =
  | { type: 'paragraph'; text: string; emphasisPhrases?: string[] }
  | { type: 'compactList'; items: string[] }
  | {
      type: 'scripture'
      reference: string
      quote: string
      insights?: WordInsight[]
      chain?: { reference: string }[]
      secondary?: { reference: string; quote: string }
      afterPrimary?: string
      afterPrimaryEmphasisPhrases?: string[]
      afterSecondary?: string
      afterSecondaryEmphasisPhrases?: string[]
    }
  | { type: 'teachingPoints'; points: string[]; teachingInsights?: TeachingPointInsights[] }
  | {
      type: 'studyInsight'
      title?: string
      body: string
      variant?: StudyInsightVariant
    }
  | { type: 'wordInsight'; study?: StudyToolWordInsightFields; insight?: WordInsight }
  | { type: 'scriptureChain'; title?: string; verses: ScriptureChainVerse[] }
  | { type: 'scriptureChain'; title?: string; references: { reference: string }[] }
  | { type: 'reflection'; prompt: string }
  | { type: 'lifeApplication'; text: string }
  | { type: 'prayer'; text: string }

/** Best-effort parse for `reader_content.scriptureSupplementBlocks` from JSONB. */
export function parseLessonContentBlocks(raw: unknown): LessonContentBlock[] | undefined {
  if (!Array.isArray(raw)) return undefined
  return raw as LessonContentBlock[]
}
