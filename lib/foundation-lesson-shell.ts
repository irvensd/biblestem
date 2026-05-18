import type { LessonContentBlock } from '@/lib/lesson-content-blocks'
import type { LessonSection } from '@/lib/types/product'

const PLACEHOLDER_BODY = 'This lesson content has not been added yet.'

export const FOUNDATION_SHELL_PLACEHOLDER_LEGACY =
  'This lesson has been created, but the study content has not been added yet.'

export function buildFoundationLessonShellSectionBody(options: {
  overviewHref: string
  placeholderText?: string
  includeCreationRestPattern?: boolean
  creationHighlightIndices?: number[]
  creationCaption?: string
  includeGivingCirclePattern?: boolean
  givingCircleHighlightIndices?: number[]
  givingCircleCaption?: string
  includeWholePersonHealthPattern?: boolean
  wholePersonHealthHighlightIndices?: number[]
  wholePersonHealthCaption?: string
  includeBaptismMeaningPattern?: boolean
  baptismMeaningHighlightIndices?: number[]
  baptismMeaningCaption?: string
}): string {
  const blocks: LessonContentBlock[] = [
    { type: 'paragraph', text: options.placeholderText ?? PLACEHOLDER_BODY },
  ]

  if (options.includeCreationRestPattern) {
    blocks.push({
      type: 'creationRestPattern',
      ...(options.creationHighlightIndices?.length
        ? { highlightedIndices: options.creationHighlightIndices }
        : {}),
      ...(options.creationCaption ? { caption: options.creationCaption } : {}),
    })
  }

  if (options.includeGivingCirclePattern) {
    blocks.push({
      type: 'givingCirclePattern',
      ...(options.givingCircleHighlightIndices?.length
        ? { highlightedIndices: options.givingCircleHighlightIndices }
        : {}),
      ...(options.givingCircleCaption ? { caption: options.givingCircleCaption } : {}),
    })
  }

  if (options.includeWholePersonHealthPattern) {
    blocks.push({
      type: 'wholePersonHealthPattern',
      ...(options.wholePersonHealthHighlightIndices?.length
        ? { highlightedIndices: options.wholePersonHealthHighlightIndices }
        : {}),
      ...(options.wholePersonHealthCaption ? { caption: options.wholePersonHealthCaption } : {}),
    })
  }

  if (options.includeBaptismMeaningPattern) {
    blocks.push({
      type: 'baptismMeaningPattern',
      ...(options.baptismMeaningHighlightIndices?.length
        ? { highlightedIndices: options.baptismMeaningHighlightIndices }
        : {}),
      ...(options.baptismMeaningCaption ? { caption: options.baptismMeaningCaption } : {}),
    })
  }

  blocks.push({ type: 'studyCta', label: 'Back to study overview', href: options.overviewHref })

  return JSON.stringify({ blocks })
}

export function foundationLessonShellSection(
  lessonId: string,
  sectionId: string,
  overviewHref: string,
  options?: {
    placeholderText?: string
    includeCreationRestPattern?: boolean
    creationHighlightIndices?: number[]
    creationCaption?: string
    includeGivingCirclePattern?: boolean
    givingCircleHighlightIndices?: number[]
    givingCircleCaption?: string
    includeWholePersonHealthPattern?: boolean
    wholePersonHealthHighlightIndices?: number[]
    wholePersonHealthCaption?: string
    includeBaptismMeaningPattern?: boolean
    baptismMeaningHighlightIndices?: number[]
    baptismMeaningCaption?: string
  },
): LessonSection {
  return {
    id: sectionId,
    lessonId,
    sortOrder: 1,
    heading: 'Lesson content coming soon',
    body: buildFoundationLessonShellSectionBody({
      overviewHref,
      placeholderText: options?.placeholderText,
      includeCreationRestPattern: options?.includeCreationRestPattern,
      creationHighlightIndices: options?.creationHighlightIndices,
      creationCaption: options?.creationCaption,
      includeGivingCirclePattern: options?.includeGivingCirclePattern,
      givingCircleHighlightIndices: options?.givingCircleHighlightIndices,
      givingCircleCaption: options?.givingCircleCaption,
      includeWholePersonHealthPattern: options?.includeWholePersonHealthPattern,
      wholePersonHealthHighlightIndices: options?.wholePersonHealthHighlightIndices,
      wholePersonHealthCaption: options?.wholePersonHealthCaption,
      includeBaptismMeaningPattern: options?.includeBaptismMeaningPattern,
      baptismMeaningHighlightIndices: options?.baptismMeaningHighlightIndices,
      baptismMeaningCaption: options?.baptismMeaningCaption,
    }),
    sectionType: 'other',
  }
}
