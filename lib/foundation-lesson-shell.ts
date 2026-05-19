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
  includeFirstAngelsMessageBreakdown?: boolean
  firstAngelsMessageBreakdownHighlightIndices?: number[]
  firstAngelsMessageBreakdownCaption?: string
  includeEverlastingGospelFlow?: boolean
  everlastingGospelFlowHighlightIndices?: number[]
  everlastingGospelFlowCaption?: string
  includeFearGloryJudgmentCreatorMap?: boolean
  fearGloryJudgmentCreatorMapHighlightIndices?: number[]
  fearGloryJudgmentCreatorMapCaption?: string
  includeCreatorWorshipSabbathBridge?: boolean
  creatorWorshipSabbathBridgeHighlightIndices?: number[]
  creatorWorshipSabbathBridgeCaption?: string
  includeSecondAngelsMessageBreakdown?: boolean
  secondAngelsMessageBreakdownHighlightIndices?: number[]
  secondAngelsMessageBreakdownCaption?: string
  includeAncientBabylonPattern?: boolean
  ancientBabylonPatternHighlightIndices?: number[]
  ancientBabylonPatternCaption?: string
  includeChristVsBabylonContrast?: boolean
  christVsBabylonContrastHighlightIndices?: number[]
  christVsBabylonContrastCaption?: string
  includeEndTimeBabylonIdentifiers?: boolean
  endTimeBabylonIdentifiersHighlightIndices?: number[]
  endTimeBabylonIdentifiersCaption?: string
  includeComeOutCallFlow?: boolean
  comeOutCallFlowHighlightIndices?: number[]
  comeOutCallFlowCaption?: string
  includeThirdAngelsMessageBreakdown?: boolean
  thirdAngelsMessageBreakdownHighlightIndices?: number[]
  thirdAngelsMessageBreakdownCaption?: string
  includeTrueWorshipVsCoercion?: boolean
  trueWorshipVsCoercionHighlightIndices?: number[]
  trueWorshipVsCoercionCaption?: string
  includeBeastPowerIdentifiers?: boolean
  beastPowerIdentifiersHighlightIndices?: number[]
  beastPowerIdentifiersCaption?: string
  includeImageOfBeastFormation?: boolean
  imageOfBeastFormationHighlightIndices?: number[]
  imageOfBeastFormationCaption?: string
  includeMarkVsSealComparison?: boolean
  markVsSealComparisonHighlightIndices?: number[]
  markVsSealComparisonCaption?: string
  includeSealElementsSabbath?: boolean
  sealElementsSabbathHighlightIndices?: number[]
  sealElementsSabbathCaption?: string
  includePatienceSaintsTriad?: boolean
  patienceSaintsTriadHighlightIndices?: number[]
  patienceSaintsTriadCaption?: string
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

  if (options.includeFirstAngelsMessageBreakdown) {
    blocks.push({
      type: 'firstAngelsMessageBreakdown',
      ...(options.firstAngelsMessageBreakdownHighlightIndices?.length
        ? { highlightedIndices: options.firstAngelsMessageBreakdownHighlightIndices }
        : {}),
      ...(options.firstAngelsMessageBreakdownCaption
        ? { caption: options.firstAngelsMessageBreakdownCaption }
        : {}),
    })
  }

  if (options.includeEverlastingGospelFlow) {
    blocks.push({
      type: 'everlastingGospelFlow',
      ...(options.everlastingGospelFlowHighlightIndices?.length
        ? { highlightedIndices: options.everlastingGospelFlowHighlightIndices }
        : {}),
      ...(options.everlastingGospelFlowCaption ? { caption: options.everlastingGospelFlowCaption } : {}),
    })
  }

  if (options.includeFearGloryJudgmentCreatorMap) {
    blocks.push({
      type: 'fearGloryJudgmentCreatorMap',
      ...(options.fearGloryJudgmentCreatorMapHighlightIndices?.length
        ? { highlightedIndices: options.fearGloryJudgmentCreatorMapHighlightIndices }
        : {}),
      ...(options.fearGloryJudgmentCreatorMapCaption
        ? { caption: options.fearGloryJudgmentCreatorMapCaption }
        : {}),
    })
  }

  if (options.includeCreatorWorshipSabbathBridge) {
    blocks.push({
      type: 'creatorWorshipSabbathBridge',
      ...(options.creatorWorshipSabbathBridgeHighlightIndices?.length
        ? { highlightedIndices: options.creatorWorshipSabbathBridgeHighlightIndices }
        : {}),
      ...(options.creatorWorshipSabbathBridgeCaption
        ? { caption: options.creatorWorshipSabbathBridgeCaption }
        : {}),
    })
  }

  if (options.includeSecondAngelsMessageBreakdown) {
    blocks.push({
      type: 'secondAngelsMessageBreakdown',
      ...(options.secondAngelsMessageBreakdownHighlightIndices?.length
        ? { highlightedIndices: options.secondAngelsMessageBreakdownHighlightIndices }
        : {}),
      ...(options.secondAngelsMessageBreakdownCaption
        ? { caption: options.secondAngelsMessageBreakdownCaption }
        : {}),
    })
  }

  if (options.includeAncientBabylonPattern) {
    blocks.push({
      type: 'ancientBabylonPattern',
      ...(options.ancientBabylonPatternHighlightIndices?.length
        ? { highlightedIndices: options.ancientBabylonPatternHighlightIndices }
        : {}),
      ...(options.ancientBabylonPatternCaption ? { caption: options.ancientBabylonPatternCaption } : {}),
    })
  }

  if (options.includeChristVsBabylonContrast) {
    blocks.push({
      type: 'christVsBabylonContrast',
      ...(options.christVsBabylonContrastHighlightIndices?.length
        ? { highlightedIndices: options.christVsBabylonContrastHighlightIndices }
        : {}),
      ...(options.christVsBabylonContrastCaption
        ? { caption: options.christVsBabylonContrastCaption }
        : {}),
    })
  }

  if (options.includeEndTimeBabylonIdentifiers) {
    blocks.push({
      type: 'endTimeBabylonIdentifiers',
      ...(options.endTimeBabylonIdentifiersHighlightIndices?.length
        ? { highlightedIndices: options.endTimeBabylonIdentifiersHighlightIndices }
        : {}),
      ...(options.endTimeBabylonIdentifiersCaption
        ? { caption: options.endTimeBabylonIdentifiersCaption }
        : {}),
    })
  }

  if (options.includeComeOutCallFlow) {
    blocks.push({
      type: 'comeOutCallFlow',
      ...(options.comeOutCallFlowHighlightIndices?.length
        ? { highlightedIndices: options.comeOutCallFlowHighlightIndices }
        : {}),
      ...(options.comeOutCallFlowCaption ? { caption: options.comeOutCallFlowCaption } : {}),
    })
  }

  if (options.includeThirdAngelsMessageBreakdown) {
    blocks.push({
      type: 'thirdAngelsMessageBreakdown',
      ...(options.thirdAngelsMessageBreakdownHighlightIndices?.length
        ? { highlightedIndices: options.thirdAngelsMessageBreakdownHighlightIndices }
        : {}),
      ...(options.thirdAngelsMessageBreakdownCaption
        ? { caption: options.thirdAngelsMessageBreakdownCaption }
        : {}),
    })
  }

  if (options.includeTrueWorshipVsCoercion) {
    blocks.push({
      type: 'trueWorshipVsCoercion',
      ...(options.trueWorshipVsCoercionHighlightIndices?.length
        ? { highlightedIndices: options.trueWorshipVsCoercionHighlightIndices }
        : {}),
      ...(options.trueWorshipVsCoercionCaption ? { caption: options.trueWorshipVsCoercionCaption } : {}),
    })
  }

  if (options.includeBeastPowerIdentifiers) {
    blocks.push({
      type: 'beastPowerIdentifiers',
      ...(options.beastPowerIdentifiersHighlightIndices?.length
        ? { highlightedIndices: options.beastPowerIdentifiersHighlightIndices }
        : {}),
      ...(options.beastPowerIdentifiersCaption ? { caption: options.beastPowerIdentifiersCaption } : {}),
    })
  }

  if (options.includeImageOfBeastFormation) {
    blocks.push({
      type: 'imageOfBeastFormation',
      ...(options.imageOfBeastFormationHighlightIndices?.length
        ? { highlightedIndices: options.imageOfBeastFormationHighlightIndices }
        : {}),
      ...(options.imageOfBeastFormationCaption ? { caption: options.imageOfBeastFormationCaption } : {}),
    })
  }

  if (options.includeMarkVsSealComparison) {
    blocks.push({
      type: 'markVsSealComparison',
      ...(options.markVsSealComparisonHighlightIndices?.length
        ? { highlightedIndices: options.markVsSealComparisonHighlightIndices }
        : {}),
      ...(options.markVsSealComparisonCaption ? { caption: options.markVsSealComparisonCaption } : {}),
    })
  }

  if (options.includeSealElementsSabbath) {
    blocks.push({
      type: 'sealElementsSabbath',
      ...(options.sealElementsSabbathHighlightIndices?.length
        ? { highlightedIndices: options.sealElementsSabbathHighlightIndices }
        : {}),
      ...(options.sealElementsSabbathCaption ? { caption: options.sealElementsSabbathCaption } : {}),
    })
  }

  if (options.includePatienceSaintsTriad) {
    blocks.push({
      type: 'patienceSaintsTriad',
      ...(options.patienceSaintsTriadHighlightIndices?.length
        ? { highlightedIndices: options.patienceSaintsTriadHighlightIndices }
        : {}),
      ...(options.patienceSaintsTriadCaption ? { caption: options.patienceSaintsTriadCaption } : {}),
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
    includeFirstAngelsMessageBreakdown?: boolean
    firstAngelsMessageBreakdownHighlightIndices?: number[]
    firstAngelsMessageBreakdownCaption?: string
    includeEverlastingGospelFlow?: boolean
    everlastingGospelFlowHighlightIndices?: number[]
    everlastingGospelFlowCaption?: string
    includeFearGloryJudgmentCreatorMap?: boolean
    fearGloryJudgmentCreatorMapHighlightIndices?: number[]
    fearGloryJudgmentCreatorMapCaption?: string
    includeCreatorWorshipSabbathBridge?: boolean
    creatorWorshipSabbathBridgeHighlightIndices?: number[]
    creatorWorshipSabbathBridgeCaption?: string
    includeSecondAngelsMessageBreakdown?: boolean
    secondAngelsMessageBreakdownHighlightIndices?: number[]
    secondAngelsMessageBreakdownCaption?: string
    includeAncientBabylonPattern?: boolean
    ancientBabylonPatternHighlightIndices?: number[]
    ancientBabylonPatternCaption?: string
    includeChristVsBabylonContrast?: boolean
    christVsBabylonContrastHighlightIndices?: number[]
    christVsBabylonContrastCaption?: string
    includeEndTimeBabylonIdentifiers?: boolean
    endTimeBabylonIdentifiersHighlightIndices?: number[]
    endTimeBabylonIdentifiersCaption?: string
    includeComeOutCallFlow?: boolean
    comeOutCallFlowHighlightIndices?: number[]
    comeOutCallFlowCaption?: string
    includeThirdAngelsMessageBreakdown?: boolean
    thirdAngelsMessageBreakdownHighlightIndices?: number[]
    thirdAngelsMessageBreakdownCaption?: string
    includeTrueWorshipVsCoercion?: boolean
    trueWorshipVsCoercionHighlightIndices?: number[]
    trueWorshipVsCoercionCaption?: string
    includeBeastPowerIdentifiers?: boolean
    beastPowerIdentifiersHighlightIndices?: number[]
    beastPowerIdentifiersCaption?: string
    includeImageOfBeastFormation?: boolean
    imageOfBeastFormationHighlightIndices?: number[]
    imageOfBeastFormationCaption?: string
    includeMarkVsSealComparison?: boolean
    markVsSealComparisonHighlightIndices?: number[]
    markVsSealComparisonCaption?: string
    includeSealElementsSabbath?: boolean
    sealElementsSabbathHighlightIndices?: number[]
    sealElementsSabbathCaption?: string
    includePatienceSaintsTriad?: boolean
    patienceSaintsTriadHighlightIndices?: number[]
    patienceSaintsTriadCaption?: string
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
      includeFirstAngelsMessageBreakdown: options?.includeFirstAngelsMessageBreakdown,
      firstAngelsMessageBreakdownHighlightIndices: options?.firstAngelsMessageBreakdownHighlightIndices,
      firstAngelsMessageBreakdownCaption: options?.firstAngelsMessageBreakdownCaption,
      includeEverlastingGospelFlow: options?.includeEverlastingGospelFlow,
      everlastingGospelFlowHighlightIndices: options?.everlastingGospelFlowHighlightIndices,
      everlastingGospelFlowCaption: options?.everlastingGospelFlowCaption,
      includeFearGloryJudgmentCreatorMap: options?.includeFearGloryJudgmentCreatorMap,
      fearGloryJudgmentCreatorMapHighlightIndices: options?.fearGloryJudgmentCreatorMapHighlightIndices,
      fearGloryJudgmentCreatorMapCaption: options?.fearGloryJudgmentCreatorMapCaption,
      includeCreatorWorshipSabbathBridge: options?.includeCreatorWorshipSabbathBridge,
      creatorWorshipSabbathBridgeHighlightIndices: options?.creatorWorshipSabbathBridgeHighlightIndices,
      creatorWorshipSabbathBridgeCaption: options?.creatorWorshipSabbathBridgeCaption,
      includeSecondAngelsMessageBreakdown: options?.includeSecondAngelsMessageBreakdown,
      secondAngelsMessageBreakdownHighlightIndices: options?.secondAngelsMessageBreakdownHighlightIndices,
      secondAngelsMessageBreakdownCaption: options?.secondAngelsMessageBreakdownCaption,
      includeAncientBabylonPattern: options?.includeAncientBabylonPattern,
      ancientBabylonPatternHighlightIndices: options?.ancientBabylonPatternHighlightIndices,
      ancientBabylonPatternCaption: options?.ancientBabylonPatternCaption,
      includeChristVsBabylonContrast: options?.includeChristVsBabylonContrast,
      christVsBabylonContrastHighlightIndices: options?.christVsBabylonContrastHighlightIndices,
      christVsBabylonContrastCaption: options?.christVsBabylonContrastCaption,
      includeEndTimeBabylonIdentifiers: options?.includeEndTimeBabylonIdentifiers,
      endTimeBabylonIdentifiersHighlightIndices: options?.endTimeBabylonIdentifiersHighlightIndices,
      endTimeBabylonIdentifiersCaption: options?.endTimeBabylonIdentifiersCaption,
      includeComeOutCallFlow: options?.includeComeOutCallFlow,
      comeOutCallFlowHighlightIndices: options?.comeOutCallFlowHighlightIndices,
      comeOutCallFlowCaption: options?.comeOutCallFlowCaption,
      includeThirdAngelsMessageBreakdown: options?.includeThirdAngelsMessageBreakdown,
      thirdAngelsMessageBreakdownHighlightIndices: options?.thirdAngelsMessageBreakdownHighlightIndices,
      thirdAngelsMessageBreakdownCaption: options?.thirdAngelsMessageBreakdownCaption,
      includeTrueWorshipVsCoercion: options?.includeTrueWorshipVsCoercion,
      trueWorshipVsCoercionHighlightIndices: options?.trueWorshipVsCoercionHighlightIndices,
      trueWorshipVsCoercionCaption: options?.trueWorshipVsCoercionCaption,
      includeBeastPowerIdentifiers: options?.includeBeastPowerIdentifiers,
      beastPowerIdentifiersHighlightIndices: options?.beastPowerIdentifiersHighlightIndices,
      beastPowerIdentifiersCaption: options?.beastPowerIdentifiersCaption,
      includeImageOfBeastFormation: options?.includeImageOfBeastFormation,
      imageOfBeastFormationHighlightIndices: options?.imageOfBeastFormationHighlightIndices,
      imageOfBeastFormationCaption: options?.imageOfBeastFormationCaption,
      includeMarkVsSealComparison: options?.includeMarkVsSealComparison,
      markVsSealComparisonHighlightIndices: options?.markVsSealComparisonHighlightIndices,
      markVsSealComparisonCaption: options?.markVsSealComparisonCaption,
      includeSealElementsSabbath: options?.includeSealElementsSabbath,
      sealElementsSabbathHighlightIndices: options?.sealElementsSabbathHighlightIndices,
      sealElementsSabbathCaption: options?.sealElementsSabbathCaption,
      includePatienceSaintsTriad: options?.includePatienceSaintsTriad,
      patienceSaintsTriadHighlightIndices: options?.patienceSaintsTriadHighlightIndices,
      patienceSaintsTriadCaption: options?.patienceSaintsTriadCaption,
    }),
    sectionType: 'other',
  }
}

/** True when catalog sections are the seeded foundation shell, not authored reader steps. */
export function isFoundationLessonShellSections(sections: LessonSection[]): boolean {
  if (sections.length === 0) return false
  return sections.every((section) => section.heading === 'Lesson content coming soon')
}
