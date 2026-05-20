import type { LessonReaderContent } from '@/lib/lesson-content'
import type { StudySeries } from '@/lib/types/product'

export const DEEPER_PROGRESS_UNIT = 'Part'
export const FOUNDATION_PROGRESS_UNIT = 'Step'

export const DEEPER_SIDEBAR_MAP_LABEL = 'Study flow'
export const FOUNDATION_SIDEBAR_MAP_LABEL = 'Lesson map'

export const DEEPER_QUIZ_TITLE = 'Review the Evidence'

/** Short tagline for cards and compact UI. */
export const DEEPER_STUDIES_TAGLINE =
  'Hard questions. Clear Scripture. A closer look at the character of God.'

/** Primary Deeper Studies browse and hub description. */
export const DEEPER_STUDIES_DESCRIPTION =
  'Explore hard questions people raise about God, and trace the answers through Scripture.'

/** Apologetic lesson flow (eight parts). */
export const DEEPER_STEP_TITLES = {
  objection: 'The Objection',
  tension: 'The Tension',
  scriptureTrail: 'Scripture Trail',
  answer: 'The Answer',
  godsCharacter: "God's Character",
  heartCheck: 'Heart Check',
  practice: 'Practice',
  review: DEEPER_QUIZ_TITLE,
} as const

export const DEEPER_TENSION_STEP_TITLE = DEEPER_STEP_TITLES.tension
/** @deprecated Use DEEPER_TENSION_STEP_TITLE */
export const DEEPER_CORE_CLAIM_STEP_TITLE = DEEPER_TENSION_STEP_TITLE

/** True when reader content uses the Deeper Studies apologetic workflow. */
export function isDeeperStudyWorkflow(content: LessonReaderContent): boolean {
  if (content.scriptureStepTitle !== DEEPER_STEP_TITLES.scriptureTrail) return false
  const opening = content.openingThoughtStepTitle
  return (
    opening === DEEPER_STEP_TITLES.objection ||
    opening === 'The Question' // legacy label
  )
}

/** True for catalog entries on the Deeper Studies track (internal Intermediate level). */
export function isDeeperStudySeries(study: Pick<StudySeries, 'level'>): boolean {
  return study.level === 'Intermediate'
}

export function lessonProgressLabel(
  index: number,
  total: number,
  deeper: boolean,
  options?: { pct?: number },
): string {
  const unit = deeper ? DEEPER_PROGRESS_UNIT : FOUNDATION_PROGRESS_UNIT
  const base = `${unit} ${index + 1} of ${total}`
  if (options?.pct !== undefined) {
    return `${base} · ${options.pct}% through`
  }
  return base
}

export function lessonProgressAriaLabel(index: number, total: number, deeper: boolean): string {
  const unit = deeper ? DEEPER_PROGRESS_UNIT : FOUNDATION_PROGRESS_UNIT
  return `${unit} ${index + 1} of ${total}`
}
