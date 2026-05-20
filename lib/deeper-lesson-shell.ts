import { PLACEHOLDER_BODY } from '@/lib/foundation-lesson-shell'
import type { LessonReaderContent } from '@/lib/lesson-content'
import type { LessonContentBlock } from '@/lib/lesson-content-blocks'
import { DEEPER_STEP_TITLES } from '@/lib/deeper-lesson-workflow'

export const WHEN_HEAVEN_BROKE_STUDY_SLUG = 'when-heaven-broke-origin-of-evil'
export const WHEN_HEAVEN_BROKE_OVERVIEW_HREF = `/study-library/${WHEN_HEAVEN_BROKE_STUDY_SLUG}`

export const WHY_DOES_GOD_ALLOW_SUFFERING_STUDY_SLUG = 'why-does-god-allow-suffering'
export const WHY_DOES_GOD_ALLOW_SUFFERING_OVERVIEW_HREF = `/study-library/${WHY_DOES_GOD_ALLOW_SUFFERING_STUDY_SLUG}`

/** Deeper Studies that ship first in the bundled mock catalog (merge with Supabase when remote is sparse). */
export const DEEPER_MOCK_FIRST_SERIES_SLUGS: ReadonlySet<string> = new Set([
  WHEN_HEAVEN_BROKE_STUDY_SLUG,
  WHY_DOES_GOD_ALLOW_SUFFERING_STUDY_SLUG,
])

/** Placeholder reader payload for a Deeper Studies lesson shell (eight-part apologetic flow). */
export function buildDeeperShellLesson(options: {
  primaryScripture: string
  visualBlock: LessonContentBlock
  overviewHref?: string
}): LessonReaderContent {
  const overview = options.overviewHref ?? WHEN_HEAVEN_BROKE_OVERVIEW_HREF
  return {
    openingThoughtStepTitle: DEEPER_STEP_TITLES.objection,
    openingThought: PLACEHOLDER_BODY,
    coreClaim: PLACEHOLDER_BODY,
    scriptureStepTitle: DEEPER_STEP_TITLES.scriptureTrail,
    scriptureRef: options.primaryScripture,
    scriptureQuote: PLACEHOLDER_BODY,
    teachingPointsStepTitle: DEEPER_STEP_TITLES.answer,
    teachingPoints: [PLACEHOLDER_BODY],
    godsCharacter: PLACEHOLDER_BODY,
    afterTeachingBlocks: [
      options.visualBlock,
      { type: 'studyCta', label: 'Back to study overview', href: overview },
    ],
    reflectStepTitle: DEEPER_STEP_TITLES.heartCheck,
    reflectPrompt: PLACEHOLDER_BODY,
    lifeApplicationStepTitle: DEEPER_STEP_TITLES.practice,
    lifeApplication: PLACEHOLDER_BODY,
    prayer: '',
    wordStudyFullStep: false,
  }
}
