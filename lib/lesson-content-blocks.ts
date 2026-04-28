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

/** Accent tokens map to calm BibleStem shells (border + wash). */
export type StudyVisualAccent = 'stone' | 'sky' | 'sage' | 'amber'

/** Discriminated payloads for `studyVisual` blocks (SVG-forward, data-driven). */
export type StudyVisualTimelinePayload = {
  variant: 'timeline'
  nodes: { label: string; subtitle?: string; reference?: string }[]
}

export type StudyVisualComparisonPayload = {
  variant: 'comparison'
  leftTitle: string
  rightTitle: string
  leftItems?: string[]
  rightItems?: string[]
}

export type StudyVisualSequencePayload = {
  variant: 'sequence'
  steps: { label: string; subtitle?: string; reference?: string }[]
}

export type StudyVisualProphecyDiagramPayload = {
  variant: 'prophecyDiagram'
  /** Horizontal stages or eras (light labels; Scripture-first). */
  stages: { label: string; reference?: string }[]
}

export type StudyVisualScriptureChainPayload = {
  variant: 'scriptureChainVisual'
  references: { reference: string; note?: string }[]
}

/** Daniel 2 statue progression — fixed narrative visual (see `Daniel2KingdomsDiagram`). */
export type StudyVisualDaniel2KingdomsPayload = {
  variant: 'daniel2KingdomsDiagram'
  /** Overrides default “Second Coming of Christ” line under God’s eternal kingdom. */
  secondComingLabel?: string
  /** Default true: on small screens, tap a row to reveal its Daniel 2 imagery note. */
  enableMobileTapReveal?: boolean
}

export type StudyVisualPayload =
  | StudyVisualTimelinePayload
  | StudyVisualComparisonPayload
  | StudyVisualSequencePayload
  | StudyVisualProphecyDiagramPayload
  | StudyVisualScriptureChainPayload
  | StudyVisualDaniel2KingdomsPayload

/**
 * Reusable branded visual for timelines, comparisons, sequences, prophecy sketches, and scripture chains.
 * Embed in lesson JSON arrays (`afterTeachingBlocks`, `studyInsightBlocks`, or supplement blocks).
 */
export type StudyVisualLessonBlock = {
  type: 'studyVisual'
  title?: string
  subtitle?: string
  /** Short intro above the graphic. */
  description?: string
  /** Verse refs shown as a calm reference line (e.g. single column string array). */
  verseReferences?: string[]
  footnote?: string
  accent?: StudyVisualAccent
  /** Extra explanation; on small screens wrapped in `<details>` when `collapsibleOnMobile` is true. */
  collapsibleExplanation?: string
  collapsibleLabel?: string
  collapsibleOnMobile?: boolean
  payload: StudyVisualPayload
}

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
  | StudyVisualLessonBlock

/** Best-effort parse for `reader_content.scriptureSupplementBlocks` from JSONB. */
export function parseLessonContentBlocks(raw: unknown): LessonContentBlock[] | undefined {
  if (!Array.isArray(raw)) return undefined
  return raw as LessonContentBlock[]
}
