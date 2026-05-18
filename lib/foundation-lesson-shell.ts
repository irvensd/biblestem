import type { LessonContentBlock } from '@/lib/lesson-content-blocks'
import type { LessonSection } from '@/lib/types/product'

export const PLACEHOLDER_BODY = 'This lesson content has not been added yet.'

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
  includeChurchCommunityPattern?: boolean
  churchCommunityHighlightIndices?: number[]
  churchCommunityCaption?: string
  includeKingdomContrastPattern?: boolean
  kingdomContrastHighlightIndices?: number[]
  kingdomContrastCaption?: string
  includeRevelation12Pattern?: boolean
  revelation12HighlightIndices?: number[]
  revelation12Caption?: string
  includeRemnantWitnessPattern?: boolean
  remnantWitnessHighlightIndices?: number[]
  remnantWitnessCaption?: string
  includeProphecyTimeline2300?: boolean
  prophecyTimeline2300Caption?: string
  includeSanctuaryDiagram?: boolean
  sanctuaryDiagramHighlightIndices?: number[]
  sanctuaryDiagramCaption?: string
  includeDayOfAtonementFlow?: boolean
  dayOfAtonementFlowHighlightIndices?: number[]
  dayOfAtonementFlowCaption?: string
  includeSweetBitterPattern?: boolean
  sweetBitterHighlightIndices?: number[]
  sweetBitterCaption?: string
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

  if (options.includeChurchCommunityPattern) {
    blocks.push({
      type: 'churchCommunityPattern',
      ...(options.churchCommunityHighlightIndices?.length
        ? { highlightedIndices: options.churchCommunityHighlightIndices }
        : {}),
      ...(options.churchCommunityCaption ? { caption: options.churchCommunityCaption } : {}),
    })
  }

  if (options.includeKingdomContrastPattern) {
    blocks.push({
      type: 'kingdomContrastPattern',
      ...(options.kingdomContrastHighlightIndices?.length
        ? { highlightedIndices: options.kingdomContrastHighlightIndices }
        : {}),
      ...(options.kingdomContrastCaption ? { caption: options.kingdomContrastCaption } : {}),
    })
  }

  if (options.includeRevelation12Pattern) {
    blocks.push({
      type: 'revelation12Pattern',
      ...(options.revelation12HighlightIndices?.length
        ? { highlightedIndices: options.revelation12HighlightIndices }
        : {}),
      ...(options.revelation12Caption ? { caption: options.revelation12Caption } : {}),
    })
  }

  if (options.includeRemnantWitnessPattern) {
    blocks.push({
      type: 'remnantWitnessPattern',
      ...(options.remnantWitnessHighlightIndices?.length
        ? { highlightedIndices: options.remnantWitnessHighlightIndices }
        : {}),
      ...(options.remnantWitnessCaption ? { caption: options.remnantWitnessCaption } : {}),
    })
  }

  if (options.includeProphecyTimeline2300) {
    blocks.push({
      type: 'prophecyTimeline2300',
      ...(options.prophecyTimeline2300Caption ? { caption: options.prophecyTimeline2300Caption } : {}),
    })
  }

  if (options.includeSanctuaryDiagram) {
    blocks.push({
      type: 'sanctuaryDiagram',
      ...(options.sanctuaryDiagramHighlightIndices?.length
        ? { highlightedIndices: options.sanctuaryDiagramHighlightIndices }
        : {}),
      ...(options.sanctuaryDiagramCaption ? { caption: options.sanctuaryDiagramCaption } : {}),
    })
  }

  if (options.includeDayOfAtonementFlow) {
    blocks.push({
      type: 'dayOfAtonementFlow',
      ...(options.dayOfAtonementFlowHighlightIndices?.length
        ? { highlightedIndices: options.dayOfAtonementFlowHighlightIndices }
        : {}),
      ...(options.dayOfAtonementFlowCaption ? { caption: options.dayOfAtonementFlowCaption } : {}),
    })
  }

  if (options.includeSweetBitterPattern) {
    blocks.push({
      type: 'sweetBitterPattern',
      ...(options.sweetBitterHighlightIndices?.length
        ? { highlightedIndices: options.sweetBitterHighlightIndices }
        : {}),
      ...(options.sweetBitterCaption ? { caption: options.sweetBitterCaption } : {}),
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
    includeChurchCommunityPattern?: boolean
    churchCommunityHighlightIndices?: number[]
    churchCommunityCaption?: string
    includeKingdomContrastPattern?: boolean
    kingdomContrastHighlightIndices?: number[]
    kingdomContrastCaption?: string
    includeRevelation12Pattern?: boolean
    revelation12HighlightIndices?: number[]
    revelation12Caption?: string
    includeRemnantWitnessPattern?: boolean
    remnantWitnessHighlightIndices?: number[]
    remnantWitnessCaption?: string
    includeProphecyTimeline2300?: boolean
    prophecyTimeline2300Caption?: string
    includeSanctuaryDiagram?: boolean
    sanctuaryDiagramHighlightIndices?: number[]
    sanctuaryDiagramCaption?: string
    includeDayOfAtonementFlow?: boolean
    dayOfAtonementFlowHighlightIndices?: number[]
    dayOfAtonementFlowCaption?: string
    includeSweetBitterPattern?: boolean
    sweetBitterHighlightIndices?: number[]
    sweetBitterCaption?: string
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
      includeChurchCommunityPattern: options?.includeChurchCommunityPattern,
      churchCommunityHighlightIndices: options?.churchCommunityHighlightIndices,
      churchCommunityCaption: options?.churchCommunityCaption,
      includeKingdomContrastPattern: options?.includeKingdomContrastPattern,
      kingdomContrastHighlightIndices: options?.kingdomContrastHighlightIndices,
      kingdomContrastCaption: options?.kingdomContrastCaption,
      includeRevelation12Pattern: options?.includeRevelation12Pattern,
      revelation12HighlightIndices: options?.revelation12HighlightIndices,
      revelation12Caption: options?.revelation12Caption,
      includeRemnantWitnessPattern: options?.includeRemnantWitnessPattern,
      remnantWitnessHighlightIndices: options?.remnantWitnessHighlightIndices,
      remnantWitnessCaption: options?.remnantWitnessCaption,
      includeProphecyTimeline2300: options?.includeProphecyTimeline2300,
      prophecyTimeline2300Caption: options?.prophecyTimeline2300Caption,
      includeSanctuaryDiagram: options?.includeSanctuaryDiagram,
      sanctuaryDiagramHighlightIndices: options?.sanctuaryDiagramHighlightIndices,
      sanctuaryDiagramCaption: options?.sanctuaryDiagramCaption,
      includeDayOfAtonementFlow: options?.includeDayOfAtonementFlow,
      dayOfAtonementFlowHighlightIndices: options?.dayOfAtonementFlowHighlightIndices,
      dayOfAtonementFlowCaption: options?.dayOfAtonementFlowCaption,
      includeSweetBitterPattern: options?.includeSweetBitterPattern,
      sweetBitterHighlightIndices: options?.sweetBitterHighlightIndices,
      sweetBitterCaption: options?.sweetBitterCaption,
    }),
    sectionType: 'other',
  }
}
