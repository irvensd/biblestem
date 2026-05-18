import type { StudyInsightVariant, WordInsight } from '@/lib/lesson-content'
import type { CreationRestPatternStageData } from '@/lib/creation-rest-pattern-stages'
import type { GivingCirclePatternStageData } from '@/lib/giving-circle-pattern-stages'
import type { WholePersonHealthAreaData } from '@/lib/whole-person-health-pattern-stages'
import type { BaptismMeaningPatternStageData } from '@/lib/baptism-meaning-pattern-stages'
import type { ChurchCommunityPatternPillarData } from '@/lib/church-community-pattern-stages'
import type { KingdomContrastPatternPillarData } from '@/lib/kingdom-contrast-pattern-stages'
import type { Revelation12PatternStageData } from '@/lib/revelation-12-pattern-stages'
import type { RemnantWitnessPatternStageData } from '@/lib/remnant-witness-pattern-stages'
import type { SweetBitterPatternStageData } from '@/lib/sweet-bitter-pattern-stages'
import type { DayOfAtonementFlowStageData } from '@/lib/day-of-atonement-flow-stages'
import type { SanctuaryDiagramAreaData } from '@/lib/sanctuary-diagram-stages'
import type { DeathResurrectionStageData } from '@/lib/death-resurrection-flow-stages'
import type { SanctuaryJourneyStageData } from '@/lib/sanctuary-journey-stages'
import type { ProphecyTimelineItem } from '@/lib/prophecy-timeline-types'

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
  | {
      type: 'scriptureThread'
      title: string
      question?: string
      references: { reference: string; verseText?: string; shortNote?: string }[]
      takeaway?: string
      relatedHref?: string
      relatedLabel?: string
    }
  | { type: 'scriptureChain'; title?: string; verses: ScriptureChainVerse[] }
  | { type: 'scriptureChain'; title?: string; references: { reference: string }[] }
  | { type: 'reflection'; prompt: string }
  | { type: 'lifeApplication'; text: string }
  | { type: 'prayer'; text: string }
  | {
      type: 'prophecyTimeline'
      /** Eyebrow / subtitle above the heading (e.g. “490 Years / 70 Weeks”). */
      label?: string
      /** Visible title replacing the default “Timeline” heading. */
      heading?: string
      id?: string
      items: ProphecyTimelineItem[]
      footerNotes?: string[]
    }
  | {
      type: 'sanctuaryJourneyMap'
      /** 0-based indices into the rendered stage list (`stages` when set, otherwise the Foundations map order). */
      highlightedIndices?: number[]
      /** Optional heading above the map (e.g. study title). */
      title?: string
      /** Optional subheading under the title. */
      subtitle?: string
      /** When set (non-empty), replaces the default Foundations list for this block only (e.g. lesson-specific refs or extra tiles). */
      stages?: SanctuaryJourneyStageData[]
    }
  | {
      type: 'deathResurrectionFlow'
      /** 0-based indices into the rendered stage list (`stages` when set, otherwise the Foundations flow order). */
      highlightedIndices?: number[]
      title?: string
      subtitle?: string
      stages?: DeathResurrectionStageData[]
    }
  | {
      type: 'creationRestPattern'
      /** 0-based indices into the rendered stage list (`stages` when set, otherwise the canonical pattern order). */
      highlightedIndices?: number[]
      title?: string
      subtitle?: string
      caption?: string
      stages?: CreationRestPatternStageData[]
    }
  | {
      type: 'givingCirclePattern'
      /** 0-based indices into the rendered stage list (`stages` when set, otherwise the canonical pattern order). */
      highlightedIndices?: number[]
      title?: string
      subtitle?: string
      caption?: string
      stages?: GivingCirclePatternStageData[]
    }
  | {
      type: 'wholePersonHealthPattern'
      /** 0-based indices into the rendered area list (`areas` when set, otherwise the canonical pattern order). */
      highlightedIndices?: number[]
      title?: string
      subtitle?: string
      caption?: string
      areas?: WholePersonHealthAreaData[]
    }
  | {
      type: 'baptismMeaningPattern'
      /** 0-based indices into the rendered stage list (`stages` when set, otherwise the canonical pattern order). */
      highlightedIndices?: number[]
      title?: string
      subtitle?: string
      caption?: string
      stages?: BaptismMeaningPatternStageData[]
    }
  | {
      type: 'churchCommunityPattern'
      /** 0-based indices into the rendered pillar list (`pillars` when set, otherwise the canonical order). */
      highlightedIndices?: number[]
      title?: string
      subtitle?: string
      caption?: string
      pillars?: ChurchCommunityPatternPillarData[]
    }
  | {
      type: 'kingdomContrastPattern'
      /** 0-based indices into the rendered pillar list (`pillars` when set, otherwise the canonical order). */
      highlightedIndices?: number[]
      title?: string
      subtitle?: string
      caption?: string
      pillars?: KingdomContrastPatternPillarData[]
    }
  | {
      type: 'revelation12Pattern'
      /** 0-based indices into the rendered stage list (`stages` when set, otherwise the canonical order). */
      highlightedIndices?: number[]
      title?: string
      subtitle?: string
      caption?: string
      stages?: Revelation12PatternStageData[]
    }
  | {
      type: 'remnantWitnessPattern'
      /** 0-based indices into the rendered stage list (`stages` when set, otherwise the canonical order). */
      highlightedIndices?: number[]
      title?: string
      subtitle?: string
      caption?: string
      stages?: RemnantWitnessPatternStageData[]
    }
  | {
      type: 'prophecyTimeline2300'
      title?: string
      subtitle?: string
      caption?: string
    }
  | {
      type: 'sanctuaryDiagram'
      highlightedIndices?: number[]
      title?: string
      subtitle?: string
      caption?: string
      areas?: SanctuaryDiagramAreaData[]
    }
  | {
      type: 'dayOfAtonementFlow'
      highlightedIndices?: number[]
      title?: string
      subtitle?: string
      caption?: string
      stages?: DayOfAtonementFlowStageData[]
    }
  | {
      type: 'sweetBitterPattern'
      highlightedIndices?: number[]
      title?: string
      subtitle?: string
      caption?: string
      stages?: SweetBitterPatternStageData[]
    }
  | { type: 'studyCta'; label: string; href: string }
  | StudyVisualLessonBlock

/** Best-effort parse for `reader_content.scriptureSupplementBlocks` from JSONB. */
export function parseLessonContentBlocks(raw: unknown): LessonContentBlock[] | undefined {
  if (!Array.isArray(raw)) return undefined
  return raw as LessonContentBlock[]
}
