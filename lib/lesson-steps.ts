import type { LessonReaderContent } from '@/lib/lesson-content'

export type LessonStepType =
  | 'opening_thought'
  | 'scripture'
  | 'teaching_points'
  | 'word_study'
  | 'reflect_journal'
  | 'life_application'
  | 'prayer'

export type WordStudyPayload = NonNullable<LessonReaderContent['wordStudy']>

export type LessonStep =
  | { type: 'opening_thought'; title: string; body: string }
  | {
      type: 'scripture'
      title: string
      reference: string
      quote: string
      /** When set, this substring in the quote is rendered as tappable (mock). */
      highlightSurface: string | null
      wordStudy: WordStudyPayload | null
    }
  | { type: 'teaching_points'; title: string; points: string[] }
  | { type: 'word_study'; title: string; intro: string; data: WordStudyPayload }
  | { type: 'reflect_journal'; title: string; prompt: string }
  | { type: 'life_application'; title: string; body: string }
  | { type: 'prayer'; title: string; body: string }

const SECTION_TITLES: Record<LessonStepType, string> = {
  opening_thought: 'Opening thought',
  scripture: 'Scripture',
  teaching_points: 'Teaching points',
  word_study: 'Word study',
  reflect_journal: 'Reflect',
  life_application: 'Life application',
  prayer: 'Prayer',
}

/** Ordered steps for the guided lesson flow (one screen at a time). */
export function buildLessonSteps(content: LessonReaderContent): LessonStep[] {
  const steps: LessonStep[] = []
  const ws = content.wordStudy ?? null

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
    highlightSurface: ws?.surface ?? null,
    wordStudy: ws,
  })

  steps.push({
    type: 'teaching_points',
    title: SECTION_TITLES.teaching_points,
    points: content.teachingPoints,
  })

  if (ws) {
    steps.push({
      type: 'word_study',
      title: SECTION_TITLES.word_study,
      intro: 'Take a closer look at the term that unlocks part of this passage.',
      data: ws,
    })
  }

  steps.push({
    type: 'reflect_journal',
    title: SECTION_TITLES.reflect_journal,
    prompt: content.reflectPrompt,
  })

  steps.push({
    type: 'life_application',
    title: SECTION_TITLES.life_application,
    body: content.lifeApplication,
  })

  steps.push({
    type: 'prayer',
    title: SECTION_TITLES.prayer,
    body: content.prayer,
  })

  return steps
}
