import type { LessonStep } from '@/lib/lesson-steps'
import { ContentBlockRenderer, type ReflectionNotesContext } from '@/components/lessons/ContentBlockRenderer'
import { normalizeLessonStep } from '@/lib/lessons/normalizeLessonStep'

export interface LessonNoteContext {
  studySlug: string
  lessonSlug: string
  stepIndex: number
  userId?: string
}

export interface LessonStepRendererProps {
  step: LessonStep
  reflectionStorageKey: string
  noteContext: LessonNoteContext
  /** When set, one-time migration from a single lesson-wide reflection key (older readers). */
  legacyReflectionKey?: string
}

function sectionShellClass(step: LessonStep): string {
  if (step.type === 'db_section') {
    if (step.sectionType === 'scripture') return 'pb-10 pt-10 md:pb-12 md:pt-14'
    if (step.sectionType === 'reflection') return 'pb-8 pt-12 md:pb-10 md:pt-14'
    return 'pb-8 pt-10 md:pt-12'
  }
  switch (step.type) {
    case 'opening_thought':
      return 'pb-8 pt-10 md:pt-12'
    case 'core_claim':
    case 'gods_character':
      return 'pb-6 pt-2 md:pb-8'
    case 'scripture':
      return 'pb-10 pt-10 md:pb-12 md:pt-14'
    case 'teaching_points':
      return 'pb-6 pt-8 md:pt-10'
    case 'study_insight':
      return 'pb-8 pt-6'
    case 'word_study':
      return 'pb-8 pt-8 md:pt-10'
    case 'reflect_journal':
      return 'pb-8 pt-12 md:pb-10 md:pt-14'
    case 'life_application':
      return 'pb-8 pt-10 md:pt-12'
    case 'prayer':
      return 'mt-10 border-t border-zinc-200/70 pb-14 pt-12 md:pb-16 md:pt-14'
    default:
      return 'pb-8 pt-10 md:pt-12'
  }
}

function headingClass(step: LessonStep): string {
  if (step.type === 'scripture' || (step.type === 'db_section' && step.sectionType === 'scripture')) {
    return 'text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-400'
  }
  if (step.type === 'reflect_journal' || (step.type === 'db_section' && step.sectionType === 'reflection')) {
    return 'text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400'
  }
  return 'text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400'
}

/**
 * One step in the global reader: shell + heading come from step kind for spacing;
 * all body content is normalized to blocks and rendered only via `ContentBlockRenderer`.
 */
export function LessonStepRenderer({
  step,
  reflectionStorageKey,
  noteContext,
  legacyReflectionKey,
}: LessonStepRendererProps) {
  const shell = sectionShellClass(step)
  const hClass = headingClass(step)
  const normalized = normalizeLessonStep(step, noteContext.stepIndex + 1)

  const reflectionContext: ReflectionNotesContext = {
    storageKey: reflectionStorageKey,
    studySlug: noteContext.studySlug,
    lessonSlug: noteContext.lessonSlug,
    stepNumber: noteContext.stepIndex,
    userId: noteContext.userId,
    legacyMigrationKey: legacyReflectionKey,
  }

  return (
    <div className={shell} data-renderer="global-lesson-reader">
      <h2 className={hClass}>{normalized.label}</h2>

      <div className="mt-6 md:mt-7">
        <ContentBlockRenderer blocks={normalized.blocks} reflectionContext={reflectionContext} />
      </div>
    </div>
  )
}
