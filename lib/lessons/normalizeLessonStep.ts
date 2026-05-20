import type { LessonContentBlock } from '@/lib/lesson-content-blocks'
import type { LessonStep } from '@/lib/lesson-steps'

/** Alias for CMS / normalized step blocks (same as `LessonContentBlock`). */
export type ContentBlock = LessonContentBlock

/**
 * Single canonical shape for the guided reader: every `LessonStep` is flattened
 * to labeled blocks before any React rendering.
 */
export type NormalizedLessonStep = {
  /** 1-based step index in the lesson flow (for debugging / analytics). */
  stepNumber: number
  label: string
  blocks: LessonContentBlock[]
}

function dbSectionLabel(step: Extract<LessonStep, { type: 'db_section' }>): string {
  return step.heading
}

function lessonStepToBlocks(step: LessonStep): LessonContentBlock[] {
  switch (step.type) {
    case 'db_section': {
      if (step.sectionType === 'scripture') {
        return [
          {
            type: 'scripture',
            reference: step.lessonScripture,
            quote: step.body,
          },
        ]
      }
      if (step.sectionType === 'reflection') {
        return [{ type: 'reflection', prompt: step.body }]
      }
      if (step.structuredBlocks?.length) {
        return step.structuredBlocks
      }
      return [{ type: 'paragraph', text: step.body }]
    }
    case 'opening_thought':
      return [{ type: 'paragraph', text: step.body }]
    case 'core_claim':
      return [{ type: 'coreClaim', text: step.body }]
    case 'gods_character':
      return [{ type: 'godsCharacter', text: step.body }]
    case 'scripture': {
      const blocks: LessonContentBlock[] = [
        {
          type: 'scripture',
          reference: step.reference,
          quote: step.quote,
          insights: step.insights,
          chain: step.scriptureChain,
          secondary:
            step.secondaryReference && step.secondaryQuote
              ? { reference: step.secondaryReference, quote: step.secondaryQuote }
              : undefined,
          afterPrimary: step.afterPrimary,
          afterPrimaryEmphasisPhrases: step.afterPrimaryEmphasisPhrases,
          afterSecondary: step.afterSecondary,
          afterSecondaryEmphasisPhrases: step.afterSecondaryEmphasisPhrases,
        },
      ]
      if (step.trailHelper?.trim()) {
        blocks.push({ type: 'deeperHelperLine', text: step.trailHelper.trim() })
      }
      if (step.supplementBlocks?.length) {
        blocks.push(...step.supplementBlocks)
      }
      if (step.trailSummary?.trim()) {
        blocks.push({
          type: 'deeperTrailSummary',
          title: step.trailSummaryTitle?.trim() || 'What this trail shows:',
          text: step.trailSummary.trim(),
        })
      }
      return blocks
    }
    case 'teaching_points': {
      const blocks: LessonContentBlock[] = [
        {
          type: 'teachingPoints',
          points: step.points,
          teachingInsights: step.teachingInsights,
        },
      ]
      if (step.appendBlocks?.length) blocks.push(...step.appendBlocks)
      return blocks
    }
    case 'word_study': {
      const blocks: LessonContentBlock[] = []
      if (step.intro.trim()) {
        blocks.push({ type: 'paragraph', text: step.intro })
      }
      for (const insight of step.insights) {
        blocks.push({ type: 'wordInsight', insight })
      }
      return blocks
    }
    case 'study_insight': {
      const blocks: LessonContentBlock[] = [
        {
          type: 'studyInsight',
          title: step.title,
          body: step.body,
          variant: step.variant,
        },
      ]
      if (step.appendBlocks?.length) blocks.push(...step.appendBlocks)
      return blocks
    }
    case 'reflect_journal':
      return [
        {
          type: 'reflection',
          prompt: step.prompt,
          placeholder: step.reflectPlaceholder,
        },
      ]
    case 'life_application':
      if (step.deeperPracticeCallout && step.practiceCalloutTitle?.trim()) {
        return [
          {
            type: 'deeperPracticeCallout',
            title: step.practiceCalloutTitle.trim(),
            text: step.body,
          },
        ]
      }
      return [{ type: 'lifeApplication', text: step.body }]
    case 'prayer':
      return [{ type: 'prayer', text: step.body }]
    case 'quiz_review':
      return []
    default:
      return []
  }
}

function stepLabel(step: LessonStep): string {
  if (step.type === 'db_section') return dbSectionLabel(step)
  return step.title
}

/** Convert any built lesson step into blocks for `ContentBlockRenderer`. */
export function normalizeLessonStep(step: LessonStep, stepNumber: number): NormalizedLessonStep {
  return {
    stepNumber,
    label: stepLabel(step),
    blocks: lessonStepToBlocks(step),
  }
}
