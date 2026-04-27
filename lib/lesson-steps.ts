import type { LessonContentBlock } from '@/lib/lesson-content-blocks'
import {
  type LessonReaderContent,
  type StudyInsightVariant,
  type WordInsight,
  wordStudyToInsight,
} from '@/lib/lesson-content'
import type { LessonSection, LessonSectionType } from '@/lib/types/product'

export type LessonStepType =
  | 'opening_thought'
  | 'scripture'
  | 'teaching_points'
  | 'word_study'
  | 'study_insight'
  | 'reflect_journal'
  | 'life_application'
  | 'prayer'

export type WordStudyPayload = NonNullable<LessonReaderContent['wordStudy']>

export type LessonStep =
  | {
      type: 'db_section'
      sectionType: LessonSectionType
      heading: string
      body: string
      /** Lesson-level scripture ref (e.g. John 1:1–18); used when sectionType is scripture. */
      lessonScripture: string
      /** Optional structured blocks (when set, preferred over raw `body` for non-scripture/reflection). */
      structuredBlocks?: LessonContentBlock[]
    }
  | { type: 'opening_thought'; title: string; body: string }
  | {
      type: 'scripture'
      title: string
      reference: string
      quote: string
      secondaryReference?: string
      secondaryQuote?: string
      afterPrimary?: string
      afterPrimaryEmphasisPhrases?: string[]
      afterSecondary?: string
      afterSecondaryEmphasisPhrases?: string[]
      /** Tappable word insights (legacy: single highlightSurface + wordStudy still supported via build). */
      insights: WordInsight[]
      /** Optional cross-ref chain on the Scripture step. */
      scriptureChain?: { reference: string }[]
      /** Study tools / structured blocks below scripture UI on this step. */
      supplementBlocks?: LessonContentBlock[]
    }
  | {
      type: 'teaching_points'
      title: string
      points: string[]
      teachingInsights: { pointIndex: number; insights: WordInsight[] }[]
    }
  | { type: 'word_study'; title: string; intro: string; data: WordStudyPayload }
  | { type: 'study_insight'; title: string; body: string; variant?: StudyInsightVariant }
  | { type: 'reflect_journal'; title: string; prompt: string }
  | { type: 'life_application'; title: string; body: string }
  | { type: 'prayer'; title: string; body: string }

/** One step per row from `lesson_sections` (Supabase or mock with sections). */
function tryParseStructuredBlocks(raw: string): LessonContentBlock[] | undefined {
  const t = raw.trim()
  if (!/^\s*\{\s*"blocks"\s*:\s*\[/.test(t)) return undefined
  try {
    const v = JSON.parse(t) as unknown
    if (!v || typeof v !== 'object') return undefined
    const o = v as Record<string, unknown>
    if (!Array.isArray(o.blocks)) return undefined
    return o.blocks as LessonContentBlock[]
  } catch {
    return undefined
  }
}

export function buildLessonStepsFromSections(sections: LessonSection[], lessonScripture: string): LessonStep[] {
  return [...sections]
    .sort((a, b) => a.sortOrder - b.sortOrder)
    .map(
      (s): LessonStep => ({
        type: 'db_section',
        sectionType: s.sectionType,
        heading: s.heading,
        body: s.body,
        lessonScripture,
        structuredBlocks: tryParseStructuredBlocks(s.body),
      }),
    )
}

const SECTION_TITLES: Record<LessonStepType, string> = {
  opening_thought: 'Opening Thought',
  scripture: 'Scripture',
  teaching_points: 'Teaching Points',
  word_study: 'Word study',
  study_insight: 'Study Insight',
  reflect_journal: 'Reflect',
  life_application: 'Life Application',
  prayer: 'Prayer',
}

function scriptureInsightsFromContent(content: LessonReaderContent): WordInsight[] {
  if (content.scriptureWordInsights?.length) return content.scriptureWordInsights
  if (content.wordStudy) return [wordStudyToInsight(content.wordStudy)]
  return []
}

function includeFullWordStudyStep(content: LessonReaderContent): boolean {
  return Boolean(content.wordStudy && content.wordStudyFullStep !== false)
}

/** Ordered steps for the guided lesson flow (one screen at a time). */
export function buildLessonSteps(content: LessonReaderContent): LessonStep[] {
  const steps: LessonStep[] = []
  const ws = content.wordStudy ?? null
  const insightPlacement = content.studyInsight?.placement ?? 'after_teaching'
  const si = content.studyInsight

  steps.push({
    type: 'opening_thought',
    title: SECTION_TITLES.opening_thought,
    body: content.openingThought,
  })

  steps.push({
    type: 'scripture',
    title: SECTION_TITLES.scripture,
    reference: content.scriptureRef,
    quote: content.scriptureQuote,
    secondaryReference: content.scriptureSecondaryRef,
    secondaryQuote: content.scriptureSecondaryQuote,
    afterPrimary: content.scriptureAfterPrimary,
    afterPrimaryEmphasisPhrases: content.scriptureAfterPrimaryEmphasisPhrases,
    afterSecondary: content.scriptureAfterSecondary,
    afterSecondaryEmphasisPhrases: content.scriptureAfterSecondaryEmphasisPhrases,
    insights: scriptureInsightsFromContent(content),
    scriptureChain: content.scriptureChain,
    supplementBlocks: content.scriptureSupplementBlocks,
  })

  if (si && insightPlacement === 'after_scripture') {
    steps.push({
      type: 'study_insight',
      title: si.title ?? SECTION_TITLES.study_insight,
      body: si.body,
      variant: si.variant,
    })
  }

  steps.push({
    type: 'teaching_points',
    title: SECTION_TITLES.teaching_points,
    points: content.teachingPoints,
    teachingInsights: content.teachingWordInsights ?? [],
  })

  const wordStudyIntroDefault = 'Take a closer look at the term that unlocks part of this passage.'
  const wsStep: LessonStep | null =
    includeFullWordStudyStep(content) && ws
      ? {
          type: 'word_study',
          title: content.wordStudyStepTitle ?? SECTION_TITLES.word_study,
          intro:
            content.wordStudyStepIntro !== undefined ? content.wordStudyStepIntro : wordStudyIntroDefault,
          data: ws,
        }
      : null

  if (si && insightPlacement === 'after_teaching') {
    const insightStep: LessonStep = {
      type: 'study_insight',
      title: si.title ?? SECTION_TITLES.study_insight,
      body: si.body,
      variant: si.variant,
    }
    if (content.wordStudyBeforeStudyInsight && wsStep) {
      steps.push(wsStep, insightStep)
    } else {
      steps.push(insightStep)
      if (wsStep) steps.push(wsStep)
    }
  } else if (wsStep) {
    steps.push(wsStep)
  }

  steps.push({
    type: 'reflect_journal',
    title: SECTION_TITLES.reflect_journal,
    prompt: content.reflectPrompt,
  })

  steps.push({
    type: 'life_application',
    title: content.lifeApplicationStepTitle ?? SECTION_TITLES.life_application,
    body: content.lifeApplication,
  })

  if (content.prayer.trim()) {
    steps.push({
      type: 'prayer',
      title: SECTION_TITLES.prayer,
      body: content.prayer,
    })
  }

  return steps
}
