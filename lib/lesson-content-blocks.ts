import type { GuidedReflectionPrompts } from '@/lib/guided-reflection'
import type { StudyInsightVariant, WordInsight } from '@/lib/lesson-content'
import type { CreationRestPatternStageData } from '@/lib/creation-rest-pattern-stages'
import type { GivingCirclePatternStageData } from '@/lib/giving-circle-pattern-stages'
import type { WholePersonHealthAreaData } from '@/lib/whole-person-health-pattern-stages'
import type { BaptismMeaningPatternStageData } from '@/lib/baptism-meaning-pattern-stages'
import type { ChurchCommunityPatternPillarData } from '@/lib/church-community-pattern-stages'
import type { KingdomContrastPatternPillarData } from '@/lib/kingdom-contrast-pattern-stages'
import type { Revelation12PatternStageData } from '@/lib/revelation-12-pattern-stages'
import type { RemnantWitnessPatternStageData } from '@/lib/remnant-witness-pattern-stages'
import type { SweetBitterPatternStageData } from '@/lib/sweet-bitter-pattern-stages'
import type { DayOfAtonementFlowStageData } from '@/lib/day-of-atonement-flow-stages'
import type { SanctuaryDiagramAreaData } from '@/lib/sanctuary-diagram-stages'
import type { FirstAngelsMessageBreakdownSectionData } from '@/lib/first-angels-message-breakdown-stages'
import type { EverlastingGospelFlowStageData } from '@/lib/everlasting-gospel-flow-stages'
import type { FearGloryJudgmentCreatorResponseData } from '@/lib/fear-glory-judgment-creator-map-stages'
import type { CreatorWorshipSabbathBridgePointData } from '@/lib/creator-worship-sabbath-bridge-stages'
import type { SecondAngelsMessageBreakdownSectionData } from '@/lib/second-angels-message-breakdown-stages'
import type { AncientBabylonPatternStageData } from '@/lib/ancient-babylon-pattern-stages'
import type { ChristVsBabylonContrastStepData } from '@/lib/christ-vs-babylon-contrast-stages'
import type { EndTimeBabylonIdentifierData } from '@/lib/end-time-babylon-identifiers-stages'
import type { ComeOutCallFlowStageData } from '@/lib/come-out-call-flow-stages'
import type { ThirdAngelsMessageBreakdownSectionData } from '@/lib/third-angels-message-breakdown-stages'
import type { TrueWorshipVsCoercionStepData } from '@/lib/true-worship-vs-coercion-stages'
import type { BeastPowerIdentifierData } from '@/lib/beast-power-identifiers-stages'
import type { ImageOfBeastFormationStageData } from '@/lib/image-of-beast-formation-stages'
import type { MarkVsSealComparisonItemData } from '@/lib/mark-vs-seal-comparison-stages'
import type { SealElementsSabbathElementData } from '@/lib/seal-elements-sabbath-stages'
import type { PatienceSaintsTriadElementData } from '@/lib/patience-saints-triad-stages'
import type { DeathResurrectionStageData } from '@/lib/death-resurrection-flow-stages'
import type { ReadinessHeartCheckCardData } from '@/lib/readiness-heart-check-stages'
import type { SecondComingStudyRecapSectionData } from '@/lib/second-coming-study-recap-stages'
import type { SecondComingLoveStoryStageData } from '@/lib/second-coming-love-story-stages'
import type { ResurrectionHopeFlowStageData } from '@/lib/resurrection-hope-flow-stages'
import type { MillenniumEventChartColumnData } from '@/lib/millennium-event-chart-stages'
import type { MillenniumPurposeFlowStageData } from '@/lib/millennium-purpose-flow-stages'
import type { SatanBoundExplainerCardData } from '@/lib/satan-bound-explainer-stages'
import type { TransparentJudgmentPanelData } from '@/lib/transparent-judgment-panel-stages'
import type { TwoResurrectionsComparisonColumnData } from '@/lib/two-resurrections-comparison-stages'
import type { EndOfEvilFlowStageData } from '@/lib/end-of-evil-flow-stages'
import type { MillenniumStudyRecapSectionData } from '@/lib/millennium-study-recap-stages'
import type { EndOfEvilCoreContrastColumnData } from '@/lib/end-of-evil-core-contrast-stages'
import type { WagesOfSinFlowStageData } from '@/lib/wages-of-sin-flow-stages'
import type { ConditionalImmortalityPanelData } from '@/lib/conditional-immortality-panel-stages'
import type { ForeverLanguageCardData } from '@/lib/forever-language-explainer-stages'
import type { SecondDeathExplainerStageData } from '@/lib/second-death-explainer-stages'
import type { GodsHeartInJudgmentPanelData } from '@/lib/gods-heart-in-judgment-stages'
import type { EndOfEvilStudyRecapSectionData } from '@/lib/end-of-evil-study-recap-stages'
import type { NewEarthRelationalHopeCardData } from '@/lib/new-earth-relational-hope-stages'
import type { EdenToEdenTimelineStepData } from '@/lib/eden-to-eden-timeline-stages'
import type { GodWithUsTempleCubePanelData } from '@/lib/god-with-us-temple-cube-stages'
import type { RestoredBodyHopeStageData } from '@/lib/restored-body-hope-stages'
import type { NoMoreCurseRestorationCardData } from '@/lib/no-more-curse-restoration-stages'
import type { PleasuresForevermoreJoyAreaData } from '@/lib/pleasures-forevermore-map-stages'
import type { WorldLoveRestoresRecapSectionData } from '@/lib/world-love-restores-recap-stages'
import type { HeavenToRebellionTimelineStageData } from '@/lib/heaven-to-rebellion-timeline-stages'
import type { WorshipDirectionDiagramPillarData } from '@/lib/worship-direction-diagram-stages'
import type { WorshipShiftPanelData, WorshipShiftScenarioData } from '@/lib/worship-shift-stages'
import type {
  DeceptionPatternBuilderStepData,
  DeceptionPatternScenarioData,
} from '@/lib/deception-pattern-builder-stages'
import type {
  SatansMethodsMatrixRowData,
  SatansMethodsMatrixScenarioData,
} from '@/lib/satans-methods-matrix-stages'
import type { BeforeAndAfterEdenPairData } from '@/lib/before-and-after-eden-stages'
import type { JesusInSufferingPlacesCardData } from '@/lib/jesus-in-suffering-places-stages'
import type { FromGroaningToGloryStageData } from '@/lib/from-groaning-to-glory-stages'
import type { RefinersFireStageData } from '@/lib/refiners-fire-stages'
import type { WhyDelayIsNotIndifferenceStageData } from '@/lib/why-delay-is-not-indifference-stages'
import type {
  GreatControversyReflectionCardData,
  GreatControversyResolutionTimelineStepData,
} from '@/lib/great-controversy-resolution-timeline-stages'
import type { SanctuaryJourneyStageData } from '@/lib/sanctuary-journey-stages'
import type { ProphecyTimelineItem } from '@/lib/prophecy-timeline-types'

/** Fields for the signature `WordInsight` study card (Greek/Hebrew). */
export type StudyToolWordInsightFields = {
  language: 'Greek' | 'Hebrew'
  originalWord: string
  transliteration: string
  meaning: string
  reference: string
  shortExplanation: string
  strongsNumber?: string
  /** Other passages already named for this word. Omitted when the lesson does not list any. */
  relatedReferences?: string[]
}

export type ScriptureChainVerse = {
  reference: string
  /** Optional heading already authored for this passage. */
  title?: string
  /** Filled from scripture already quoted in the lesson when the reference matches. */
  verseText?: string
  shortNote?: string
}

export type TeachingPointInsights = { pointIndex: number; insights: WordInsight[] }

/** Accent tokens map to calm BibleStem shells (border + wash). */
export type StudyVisualAccent = 'stone' | 'sky' | 'sage' | 'amber'

/** Discriminated payloads for `studyVisual` blocks (SVG-forward, data-driven). */
export type StudyVisualTimelinePayload = {
  variant: 'timeline'
  nodes: { label: string; subtitle?: string; reference?: string }[]
}

export type StudyVisualComparisonPayload = {
  variant: 'comparison'
  leftTitle: string
  rightTitle: string
  leftItems?: string[]
  rightItems?: string[]
}

export type StudyVisualSequencePayload = {
  variant: 'sequence'
  steps: { label: string; subtitle?: string; reference?: string }[]
}

export type StudyVisualProphecyDiagramPayload = {
  variant: 'prophecyDiagram'
  /** Horizontal stages or eras (light labels; Scripture-first). */
  stages: { label: string; reference?: string }[]
}

export type StudyVisualScriptureChainPayload = {
  variant: 'scriptureChainVisual'
  references: { reference: string; note?: string }[]
}

/** Daniel 2 statue progression — fixed narrative visual (see `Daniel2KingdomsDiagram`). */
export type StudyVisualDaniel2KingdomsPayload = {
  variant: 'daniel2KingdomsDiagram'
  /** Overrides default “Second Coming of Christ” line under God’s eternal kingdom. */
  secondComingLabel?: string
  /** Default true: on small screens, tap a row to reveal its Daniel 2 imagery note. */
  enableMobileTapReveal?: boolean
}

export type StudyVisualPayload =
  | StudyVisualTimelinePayload
  | StudyVisualComparisonPayload
  | StudyVisualSequencePayload
  | StudyVisualProphecyDiagramPayload
  | StudyVisualScriptureChainPayload
  | StudyVisualDaniel2KingdomsPayload

/**
 * Reusable branded visual for timelines, comparisons, sequences, prophecy sketches, and scripture chains.
 * Embed in lesson JSON arrays (`afterTeachingBlocks`, `studyInsightBlocks`, or supplement blocks).
 */
export type StudyVisualLessonBlock = {
  type: 'studyVisual'
  title?: string
  subtitle?: string
  /** Short intro above the graphic. */
  description?: string
  /** Verse refs shown as a calm reference line (e.g. single column string array). */
  verseReferences?: string[]
  footnote?: string
  accent?: StudyVisualAccent
  /** Extra explanation; on small screens wrapped in `<details>` when `collapsibleOnMobile` is true. */
  collapsibleExplanation?: string
  collapsibleLabel?: string
  collapsibleOnMobile?: boolean
  payload: StudyVisualPayload
}

/** Structured step payload (optional). Raw string `body` remains the default. */
export type LessonContentBlock =
  | { type: 'paragraph'; text: string; emphasisPhrases?: string[] }
  | { type: 'compactList'; items: string[] }
  | {
      type: 'scripture'
      reference: string
      quote: string
      insights?: WordInsight[]
      chain?: { reference: string }[]
      secondary?: { reference: string; quote: string }
      afterPrimary?: string
      afterPrimaryEmphasisPhrases?: string[]
      afterSecondary?: string
      afterSecondaryEmphasisPhrases?: string[]
    }
  | { type: 'teachingPoints'; points: string[]; teachingInsights?: TeachingPointInsights[] }
  | {
      type: 'studyInsight'
      title?: string
      body: string
      variant?: StudyInsightVariant
    }
  | { type: 'wordInsight'; study?: StudyToolWordInsightFields; insight?: WordInsight }
  | {
      type: 'scriptureThread'
      title: string
      question?: string
      references: { reference: string; verseText?: string; shortNote?: string }[]
      takeaway?: string
      relatedHref?: string
      relatedLabel?: string
    }
  | { type: 'scriptureChain'; title?: string; verses: ScriptureChainVerse[] }
  | {
      type: 'scriptureChain'
      title?: string
      references: { reference: string; title?: string; verseText?: string; shortNote?: string }[]
    }
  | {
      type: 'reflection'
      prompt: string
      placeholder?: string
      /** Passage-specific Observe, Interpret, and Apply prompts. Ignored unless all three have text. */
      guidedPrompts?: GuidedReflectionPrompts
    }
  | { type: 'lifeApplication'; text: string }
  | { type: 'prayer'; text: string }
  | {
      type: 'prophecyTimeline'
      /** Eyebrow / subtitle above the heading (e.g. “490 Years / 70 Weeks”). */
      label?: string
      /** Visible title replacing the default “Timeline” heading. */
      heading?: string
      id?: string
      items: ProphecyTimelineItem[]
      footerNotes?: string[]
    }
  | {
      type: 'sanctuaryJourneyMap'
      /** 0-based indices into the rendered stage list (`stages` when set, otherwise the Foundations map order). */
      highlightedIndices?: number[]
      /** Optional heading above the map (e.g. study title). */
      title?: string
      /** Optional subheading under the title. */
      subtitle?: string
      /** When set (non-empty), replaces the default Foundations list for this block only (e.g. lesson-specific refs or extra tiles). */
      stages?: SanctuaryJourneyStageData[]
    }
  | {
      type: 'deathResurrectionFlow'
      /** 0-based indices into the rendered stage list (`stages` when set, otherwise the Foundations flow order). */
      highlightedIndices?: number[]
      title?: string
      subtitle?: string
      stages?: DeathResurrectionStageData[]
    }
  | {
      type: 'creationRestPattern'
      /** 0-based indices into the rendered stage list (`stages` when set, otherwise the canonical pattern order). */
      highlightedIndices?: number[]
      title?: string
      subtitle?: string
      caption?: string
      stages?: CreationRestPatternStageData[]
    }
  | {
      type: 'givingCirclePattern'
      /** 0-based indices into the rendered stage list (`stages` when set, otherwise the canonical pattern order). */
      highlightedIndices?: number[]
      title?: string
      subtitle?: string
      caption?: string
      stages?: GivingCirclePatternStageData[]
    }
  | {
      type: 'wholePersonHealthPattern'
      /** 0-based indices into the rendered area list (`areas` when set, otherwise the canonical pattern order). */
      highlightedIndices?: number[]
      title?: string
      subtitle?: string
      caption?: string
      areas?: WholePersonHealthAreaData[]
    }
  | {
      type: 'baptismMeaningPattern'
      /** 0-based indices into the rendered stage list (`stages` when set, otherwise the canonical pattern order). */
      highlightedIndices?: number[]
      title?: string
      subtitle?: string
      caption?: string
      stages?: BaptismMeaningPatternStageData[]
    }
  | {
      type: 'churchCommunityPattern'
      /** 0-based indices into the rendered pillar list (`pillars` when set, otherwise the canonical order). */
      highlightedIndices?: number[]
      title?: string
      subtitle?: string
      caption?: string
      pillars?: ChurchCommunityPatternPillarData[]
    }
  | {
      type: 'kingdomContrastPattern'
      /** 0-based indices into the rendered pillar list (`pillars` when set, otherwise the canonical order). */
      highlightedIndices?: number[]
      title?: string
      subtitle?: string
      caption?: string
      pillars?: KingdomContrastPatternPillarData[]
    }
  | {
      type: 'revelation12Pattern'
      /** 0-based indices into the rendered stage list (`stages` when set, otherwise the canonical order). */
      highlightedIndices?: number[]
      title?: string
      subtitle?: string
      caption?: string
      stages?: Revelation12PatternStageData[]
    }
  | {
      type: 'remnantWitnessPattern'
      /** 0-based indices into the rendered stage list (`stages` when set, otherwise the canonical order). */
      highlightedIndices?: number[]
      title?: string
      subtitle?: string
      caption?: string
      stages?: RemnantWitnessPatternStageData[]
    }
  | {
      type: 'prophecyTimeline2300'
      title?: string
      subtitle?: string
      caption?: string
    }
  | {
      type: 'sanctuaryDiagram'
      highlightedIndices?: number[]
      title?: string
      subtitle?: string
      caption?: string
      areas?: SanctuaryDiagramAreaData[]
    }
  | {
      type: 'dayOfAtonementFlow'
      highlightedIndices?: number[]
      title?: string
      subtitle?: string
      caption?: string
      stages?: DayOfAtonementFlowStageData[]
    }
  | {
      type: 'sweetBitterPattern'
      highlightedIndices?: number[]
      title?: string
      subtitle?: string
      caption?: string
      stages?: SweetBitterPatternStageData[]
    }
  | {
      type: 'firstAngelsMessageBreakdown'
      highlightedIndices?: number[]
      title?: string
      subtitle?: string
      caption?: string
      sections?: FirstAngelsMessageBreakdownSectionData[]
    }
  | {
      type: 'everlastingGospelFlow'
      highlightedIndices?: number[]
      title?: string
      subtitle?: string
      caption?: string
      stages?: EverlastingGospelFlowStageData[]
    }
  | {
      type: 'fearGloryJudgmentCreatorMap'
      highlightedIndices?: number[]
      title?: string
      subtitle?: string
      caption?: string
      centerLabel?: string
      centerDescription?: string
      responses?: FearGloryJudgmentCreatorResponseData[]
    }
  | {
      type: 'creatorWorshipSabbathBridge'
      highlightedIndices?: number[]
      title?: string
      subtitle?: string
      caption?: string
      revelationReference?: string
      revelationQuote?: string
      exodusReference?: string
      exodusQuote?: string
      bridgePoints?: CreatorWorshipSabbathBridgePointData[]
    }
  | {
      type: 'secondAngelsMessageBreakdown'
      highlightedIndices?: number[]
      title?: string
      subtitle?: string
      caption?: string
      sections?: SecondAngelsMessageBreakdownSectionData[]
    }
  | {
      type: 'ancientBabylonPattern'
      highlightedIndices?: number[]
      title?: string
      subtitle?: string
      caption?: string
      stages?: AncientBabylonPatternStageData[]
    }
  | {
      type: 'christVsBabylonContrast'
      highlightedIndices?: number[]
      title?: string
      subtitle?: string
      caption?: string
      christSteps?: ChristVsBabylonContrastStepData[]
      babylonSteps?: ChristVsBabylonContrastStepData[]
      christColumnTitle?: string
      babylonColumnTitle?: string
      christScriptureRef?: string
      babylonScriptureRef?: string
    }
  | {
      type: 'endTimeBabylonIdentifiers'
      highlightedIndices?: number[]
      title?: string
      subtitle?: string
      caption?: string
      note?: string
      identifiers?: EndTimeBabylonIdentifierData[]
    }
  | {
      type: 'comeOutCallFlow'
      highlightedIndices?: number[]
      title?: string
      subtitle?: string
      caption?: string
      stages?: ComeOutCallFlowStageData[]
    }
  | {
      type: 'thirdAngelsMessageBreakdown'
      highlightedIndices?: number[]
      title?: string
      subtitle?: string
      caption?: string
      sections?: ThirdAngelsMessageBreakdownSectionData[]
    }
  | {
      type: 'trueWorshipVsCoercion'
      highlightedIndices?: number[]
      title?: string
      subtitle?: string
      caption?: string
      trueWorshipSteps?: TrueWorshipVsCoercionStepData[]
      coercedSteps?: TrueWorshipVsCoercionStepData[]
      trueWorshipColumnTitle?: string
      coercedColumnTitle?: string
      trueWorshipScriptureRef?: string
      coercedScriptureRef?: string
    }
  | {
      type: 'beastPowerIdentifiers'
      highlightedIndices?: number[]
      title?: string
      subtitle?: string
      caption?: string
      identifiers?: BeastPowerIdentifierData[]
    }
  | {
      type: 'imageOfBeastFormation'
      highlightedIndices?: number[]
      title?: string
      subtitle?: string
      caption?: string
      note?: string
      stages?: ImageOfBeastFormationStageData[]
    }
  | {
      type: 'markVsSealComparison'
      highlightedIndices?: number[]
      title?: string
      subtitle?: string
      caption?: string
      note?: string
      sealItems?: MarkVsSealComparisonItemData[]
      markItems?: MarkVsSealComparisonItemData[]
      sealColumnTitle?: string
      markColumnTitle?: string
      sealScriptureRef?: string
      markScriptureRef?: string
    }
  | {
      type: 'sealElementsSabbath'
      highlightedIndices?: number[]
      title?: string
      subtitle?: string
      caption?: string
      sourceReference?: string
      elements?: SealElementsSabbathElementData[]
      explanation?: string
    }
  | {
      type: 'patienceSaintsTriad'
      highlightedIndices?: number[]
      title?: string
      subtitle?: string
      caption?: string
      elements?: PatienceSaintsTriadElementData[]
    }
  | {
      type: 'readinessHeartCheck'
      highlightedIndices?: number[]
      title?: string
      subtitle?: string
      caption?: string
      reflectionPrompt?: string
      cards?: ReadinessHeartCheckCardData[]
    }
  | {
      type: 'secondComingStudyRecap'
      highlightedIndices?: number[]
      title?: string
      subtitle?: string
      caption?: string
      sections?: SecondComingStudyRecapSectionData[]
    }
  | {
      type: 'secondComingLoveStory'
      highlightedIndices?: number[]
      title?: string
      subtitle?: string
      caption?: string
      stages?: SecondComingLoveStoryStageData[]
    }
  | {
      type: 'resurrectionHopeFlow'
      highlightedIndices?: number[]
      title?: string
      subtitle?: string
      caption?: string
      stages?: ResurrectionHopeFlowStageData[]
    }
  | {
      type: 'millenniumEventChart'
      title?: string
      subtitle?: string
      caption?: string
      before?: MillenniumEventChartColumnData
      during?: MillenniumEventChartColumnData
      after?: MillenniumEventChartColumnData
    }
  | {
      type: 'millenniumPurposeFlow'
      highlightedIndices?: number[]
      title?: string
      subtitle?: string
      caption?: string
      scriptureAnchors?: readonly string[]
      stages?: MillenniumPurposeFlowStageData[]
    }
  | {
      type: 'satanBoundExplainer'
      highlightedIndices?: number[]
      title?: string
      subtitle?: string
      caption?: string
      scriptureAnchors?: readonly string[]
      cards?: SatanBoundExplainerCardData[]
    }
  | {
      type: 'transparentJudgmentPanel'
      highlightedIndices?: number[]
      title?: string
      subtitle?: string
      caption?: string
      scriptureAnchors?: readonly string[]
      panels?: TransparentJudgmentPanelData[]
    }
  | {
      type: 'twoResurrectionsComparison'
      highlightedIndices?: number[]
      title?: string
      subtitle?: string
      caption?: string
      firstColumn?: TwoResurrectionsComparisonColumnData
      secondColumn?: TwoResurrectionsComparisonColumnData
    }
  | {
      type: 'endOfEvilFlow'
      highlightedIndices?: number[]
      title?: string
      subtitle?: string
      caption?: string
      scriptureAnchors?: readonly string[]
      stages?: EndOfEvilFlowStageData[]
    }
  | {
      type: 'millenniumStudyRecap'
      highlightedIndices?: number[]
      title?: string
      subtitle?: string
      caption?: string
      sections?: MillenniumStudyRecapSectionData[]
    }
  | {
      type: 'endOfEvilCoreContrast'
      highlightedIndices?: readonly number[]
      title?: string
      subtitle?: string
      caption?: string
      scriptureAnchors?: readonly string[]
      eternalTormentColumn?: EndOfEvilCoreContrastColumnData
      biblicalColumn?: EndOfEvilCoreContrastColumnData
    }
  | {
      type: 'wagesOfSinFlow'
      highlightedIndices?: readonly number[]
      title?: string
      subtitle?: string
      caption?: string
      scriptureAnchors?: readonly string[]
      stages?: readonly WagesOfSinFlowStageData[]
    }
  | {
      type: 'conditionalImmortalityPanel'
      highlightedIndices?: readonly number[]
      title?: string
      subtitle?: string
      caption?: string
      panels?: readonly ConditionalImmortalityPanelData[]
    }
  | {
      type: 'foreverLanguageExplainer'
      highlightedIndices?: readonly number[]
      title?: string
      subtitle?: string
      caption?: string
      note?: string
      cards?: readonly ForeverLanguageCardData[]
    }
  | {
      type: 'secondDeathExplainer'
      highlightedIndices?: readonly number[]
      title?: string
      subtitle?: string
      caption?: string
      scriptureAnchors?: readonly string[]
      stages?: readonly SecondDeathExplainerStageData[]
    }
  | {
      type: 'godsHeartInJudgment'
      highlightedIndices?: readonly number[]
      title?: string
      subtitle?: string
      caption?: string
      panels?: readonly GodsHeartInJudgmentPanelData[]
    }
  | {
      type: 'endOfEvilStudyRecap'
      highlightedIndices?: readonly number[]
      title?: string
      subtitle?: string
      caption?: string
      sections?: readonly EndOfEvilStudyRecapSectionData[]
    }
  | {
      type: 'newEarthRelationalHope'
      highlightedIndices?: readonly number[]
      title?: string
      subtitle?: string
      caption?: string
      cards?: readonly NewEarthRelationalHopeCardData[]
    }
  | {
      type: 'edenToEdenTimeline'
      highlightedIndices?: readonly number[]
      title?: string
      subtitle?: string
      caption?: string
      steps?: readonly EdenToEdenTimelineStepData[]
    }
  | {
      type: 'godWithUsTempleCube'
      highlightedIndices?: readonly number[]
      title?: string
      subtitle?: string
      caption?: string
      panels?: readonly GodWithUsTempleCubePanelData[]
    }
  | {
      type: 'restoredBodyHope'
      highlightedIndices?: readonly number[]
      title?: string
      subtitle?: string
      caption?: string
      stages?: readonly RestoredBodyHopeStageData[]
    }
  | {
      type: 'noMoreCurseRestoration'
      highlightedIndices?: readonly number[]
      title?: string
      subtitle?: string
      caption?: string
      cards?: readonly NoMoreCurseRestorationCardData[]
    }
  | {
      type: 'pleasuresForevermoreMap'
      highlightedIndices?: readonly number[]
      title?: string
      subtitle?: string
      caption?: string
      joyAreas?: readonly PleasuresForevermoreJoyAreaData[]
    }
  | {
      type: 'worldLoveRestoresRecap'
      highlightedIndices?: readonly number[]
      title?: string
      subtitle?: string
      caption?: string
      sections?: readonly WorldLoveRestoresRecapSectionData[]
    }
  | {
      type: 'heavenToRebellionTimeline'
      highlightedIndices?: readonly number[]
      title?: string
      subtitle?: string
      caption?: string
      stages?: readonly HeavenToRebellionTimelineStageData[]
      /** Optional label above the visual (e.g. “Trace the Fall”). */
      sectionEyebrow?: string
      /** Optional subtitle under the section eyebrow. */
      sectionSubtitle?: string
    }
  | { type: 'coreClaim'; text: string }
  | { type: 'godsCharacter'; text: string }
  | { type: 'deeperHelperLine'; text: string }
  | { type: 'deeperTrailSummary'; title?: string; text: string }
  | { type: 'deeperPracticeCallout'; title: string; text: string }
  | { type: 'sectionIntro'; eyebrow: string; subtitle?: string }
  | {
      type: 'worshipDirectionDiagram'
      highlightedIndices?: readonly number[]
      title?: string
      subtitle?: string
      caption?: string
      pillars?: readonly WorshipDirectionDiagramPillarData[]
    }
  | {
      type: 'worshipShift'
      highlightedIndices?: readonly number[]
      title?: string
      subtitle?: string
      caption?: string
      panels?: readonly WorshipShiftPanelData[]
      scenarios?: readonly WorshipShiftScenarioData[]
      sectionEyebrow?: string
      sectionSubtitle?: string
    }
  | {
      type: 'deceptionPatternBuilder'
      highlightedIndices?: readonly number[]
      title?: string
      subtitle?: string
      caption?: string
      steps?: readonly DeceptionPatternBuilderStepData[]
      scenarios?: readonly DeceptionPatternScenarioData[]
      canonicalOrder?: readonly string[]
      completionSummary?: string
      sectionEyebrow?: string
      sectionSubtitle?: string
    }
  | {
      type: 'satansMethodsMatrix'
      highlightedIndices?: readonly number[]
      title?: string
      subtitle?: string
      caption?: string
      rows?: readonly SatansMethodsMatrixRowData[]
      scenarios?: readonly SatansMethodsMatrixScenarioData[]
      completionSummary?: string
      matchScriptures?: boolean
      sectionEyebrow?: string
      sectionSubtitle?: string
    }
  | {
      type: 'fromGroaningToGlory'
      highlightedIndices?: readonly number[]
      title?: string
      subtitle?: string
      caption?: string
      stages?: readonly FromGroaningToGloryStageData[]
      reflectionQuestions?: readonly string[]
      completionSummary?: string
      sectionEyebrow?: string
      sectionSubtitle?: string
    }
  | {
      type: 'refinersFire'
      highlightedIndices?: readonly number[]
      title?: string
      subtitle?: string
      caption?: string
      stages?: readonly RefinersFireStageData[]
      reflectionQuestions?: readonly string[]
      completionSummary?: string
      sectionEyebrow?: string
      sectionSubtitle?: string
    }
  | {
      type: 'jesusInSufferingPlaces'
      highlightedIndices?: readonly number[]
      title?: string
      subtitle?: string
      caption?: string
      cards?: readonly JesusInSufferingPlacesCardData[]
      reflectionQuestions?: readonly string[]
      completionSummary?: string
      sectionEyebrow?: string
      sectionSubtitle?: string
    }
  | {
      type: 'whyDelayIsNotIndifference'
      highlightedIndices?: readonly number[]
      title?: string
      subtitle?: string
      caption?: string
      steps?: readonly WhyDelayIsNotIndifferenceStageData[]
      reflectionQuestions?: readonly string[]
      completionSummary?: string
      sectionEyebrow?: string
      sectionSubtitle?: string
    }
  | {
      type: 'beforeAndAfterEden'
      highlightedIndices?: readonly number[]
      title?: string
      subtitle?: string
      caption?: string
      pairs?: readonly BeforeAndAfterEdenPairData[]
      completionSummary?: string
      sectionEyebrow?: string
      sectionSubtitle?: string
    }
  | {
      type: 'greatControversyResolutionTimeline'
      highlightedIndices?: readonly number[]
      title?: string
      subtitle?: string
      caption?: string
      steps?: readonly GreatControversyResolutionTimelineStepData[]
      reflectionCards?: readonly GreatControversyReflectionCardData[]
      completionSummary?: string
      sectionEyebrow?: string
      sectionSubtitle?: string
    }
  | { type: 'studyCta'; label: string; href: string }
  | StudyVisualLessonBlock

/** Best-effort parse for `reader_content.scriptureSupplementBlocks` from JSONB. */
export function parseLessonContentBlocks(raw: unknown): LessonContentBlock[] | undefined {
  if (!Array.isArray(raw)) return undefined
  return raw as LessonContentBlock[]
}
