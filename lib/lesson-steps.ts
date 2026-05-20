import type { LessonContentBlock } from '@/lib/lesson-content-blocks'
import {
  type LessonReaderContent,
  type StudyInsightVariant,
  type WordInsight,
  wordStudyToInsight,
} from '@/lib/lesson-content'
import type { LessonQuizPayload } from '@/lib/lesson-quiz-types'
import type { LessonSection, LessonSectionType } from '@/lib/types/product'
import {
  DEEPER_QUIZ_TITLE,
  DEEPER_STEP_TITLES,
  DEEPER_TENSION_STEP_TITLE,
  isDeeperStudyWorkflow,
} from '@/lib/deeper-lesson-workflow'

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

function wordStepInsightsFromContent(content: LessonReaderContent): WordInsight[] {
  if (content.wordStudyInsights?.length) return content.wordStudyInsights
  if (content.wordStudy) return [wordStudyToInsight(content.wordStudy)]
  return []
}

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
  | { type: 'core_claim'; title: string; body: string }
  | { type: 'gods_character'; title: string; body: string }
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
      /** Deeper Studies: line above Scripture Thread. */
      trailHelper?: string
      /** Deeper Studies: summary after thread blocks. */
      trailSummaryTitle?: string
      trailSummary?: string
    }
  | {
      type: 'teaching_points'
      title: string
      points: string[]
      teachingInsights: { pointIndex: number; insights: WordInsight[] }[]
      appendBlocks?: LessonContentBlock[]
    }
  | { type: 'word_study'; title: string; intro: string; insights: WordInsight[] }
  | {
      type: 'study_insight'
      title: string
      body: string
      variant?: StudyInsightVariant
      appendBlocks?: LessonContentBlock[]
    }
  | { type: 'reflect_journal'; title: string; prompt: string; reflectPlaceholder?: string }
  | {
      type: 'life_application'
      title: string
      body: string
      practiceCalloutTitle?: string
      deeperPracticeCallout?: boolean
    }
  | { type: 'prayer'; title: string; body: string }
  | {
      type: 'quiz_review'
      eyebrow: string
      title: string
      description: string
      quiz: LessonQuizPayload
    }

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
  if (content.wordStudyFullStep === false) return false
  return wordStepInsightsFromContent(content).length > 0
}

/** Ordered steps for the guided lesson flow (one screen at a time). */
export function buildLessonSteps(content: LessonReaderContent): LessonStep[] {
  const steps: LessonStep[] = []
  const insightPlacement = content.studyInsight?.placement ?? 'after_teaching'
  const si = content.studyInsight
  const deeper = isDeeperStudyWorkflow(content)

  steps.push({
    type: 'opening_thought',
    title: content.openingThoughtStepTitle ?? SECTION_TITLES.opening_thought,
    body: content.openingThought,
  })

  if (deeper && content.coreClaim?.trim()) {
    steps.push({
      type: 'core_claim',
      title: content.tensionStepTitle ?? DEEPER_TENSION_STEP_TITLE,
      body: content.coreClaim.trim(),
    })
  }

  steps.push({
    type: 'scripture',
    title: content.scriptureStepTitle ?? SECTION_TITLES.scripture,
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
    trailHelper: deeper ? content.scriptureTrailHelper : undefined,
    trailSummaryTitle: deeper ? content.scriptureTrailSummaryTitle : undefined,
    trailSummary: deeper ? content.scriptureTrailSummary : undefined,
  })

  if (si && insightPlacement === 'after_scripture') {
    steps.push({
      type: 'study_insight',
      title: si.title ?? SECTION_TITLES.study_insight,
      body: si.body,
      variant: si.variant,
      appendBlocks: content.studyInsightBlocks,
    })
  }

  steps.push({
    type: 'teaching_points',
    title: content.teachingPointsStepTitle ?? SECTION_TITLES.teaching_points,
    points: content.teachingPoints,
    teachingInsights: content.teachingWordInsights ?? [],
    appendBlocks: content.afterTeachingBlocks,
  })

  const wordStudyIntroDefault = 'Take a closer look at the term that unlocks part of this passage.'
  const stepInsights = wordStepInsightsFromContent(content)
  const wsStep: LessonStep | null =
    includeFullWordStudyStep(content) && stepInsights.length
      ? {
          type: 'word_study',
          title: content.wordStudyStepTitle ?? SECTION_TITLES.word_study,
          intro:
            content.wordStudyStepIntro !== undefined ? content.wordStudyStepIntro : wordStudyIntroDefault,
          insights: stepInsights,
        }
      : null

  if (si && insightPlacement === 'after_teaching') {
    const insightStep: LessonStep = {
      type: 'study_insight',
      title: si.title ?? SECTION_TITLES.study_insight,
      body: si.body,
      variant: si.variant,
      appendBlocks: content.studyInsightBlocks,
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

  if (deeper && content.godsCharacter?.trim()) {
    steps.push({
      type: 'gods_character',
      title: content.godsCharacterStepTitle ?? DEEPER_STEP_TITLES.godsCharacter,
      body: content.godsCharacter.trim(),
    })
  }

  const practiceBody =
    deeper && content.prayer.trim()
      ? `${content.lifeApplication.trim()}\n\n${content.prayer.trim()}`
      : content.lifeApplication

  steps.push({
    type: 'reflect_journal',
    title: content.reflectStepTitle ?? SECTION_TITLES.reflect_journal,
    prompt: content.reflectPrompt,
    reflectPlaceholder: deeper ? content.reflectPlaceholder : undefined,
  })

  steps.push({
    type: 'life_application',
    title: content.lifeApplicationStepTitle ?? SECTION_TITLES.life_application,
    body: practiceBody,
    practiceCalloutTitle: deeper ? content.practiceCalloutTitle : undefined,
    deeperPracticeCallout: deeper && Boolean(content.practiceCalloutTitle?.trim()),
  })

  if (content.prayer.trim() && !deeper) {
    steps.push({
      type: 'prayer',
      title: SECTION_TITLES.prayer,
      body: content.prayer,
    })
  }

  const endQuiz = content.lessonQuiz
  if (endQuiz?.questions?.length) {
    steps.push({
      type: 'quiz_review',
      eyebrow: endQuiz.eyebrow ?? 'CHECK YOUR UNDERSTANDING',
      title: endQuiz.title ?? (deeper ? DEEPER_QUIZ_TITLE : 'Quick Review'),
      description: endQuiz.description ?? 'Check your understanding before moving on.',
      quiz: endQuiz,
    })
  }

  return steps
}
