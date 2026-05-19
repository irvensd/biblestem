import { LessonTextRenderer } from '@/components/lessons/LessonTextRenderer'
import { ReflectionNotes } from '@/components/lessons/ReflectionNotes'
import { ScriptureBlock } from '@/components/lessons/ScriptureBlock'
import { ScriptureChain } from '@/components/lessons/ScriptureChain'
import { ScriptureThread } from '@/components/lessons/ScriptureThread'
import { StudyInsightCard } from '@/components/lessons/StudyInsightCard'
import { StudyVisualBlock } from '@/components/lessons/StudyVisualBlock'
import { TeachingPointsBlock } from '@/components/lessons/TeachingPointsBlock'
import { WordInsight } from '@/components/lessons/WordInsight'
import { WordInsightCard } from '@/components/lessons/WordInsightCard'
import { ProphecyTimeline } from '@/components/study/ProphecyTimeline'
import { CreationRestPattern } from '@/components/study/CreationRestPattern'
import { GivingCirclePattern } from '@/components/study/GivingCirclePattern'
import { WholePersonHealthPattern } from '@/components/study/WholePersonHealthPattern'
import { BaptismMeaningPattern } from '@/components/study/BaptismMeaningPattern'
import { ChurchCommunityPattern } from '@/components/study/ChurchCommunityPattern'
import { KingdomContrastPattern } from '@/components/study/KingdomContrastPattern'
import { Revelation12Pattern } from '@/components/study/Revelation12Pattern'
import { RemnantWitnessPattern } from '@/components/study/RemnantWitnessPattern'
import { ProphecyTimeline2300 } from '@/components/study/ProphecyTimeline2300'
import { SanctuaryDiagram } from '@/components/study/SanctuaryDiagram'
import { DayOfAtonementFlow } from '@/components/study/DayOfAtonementFlow'
import { SweetBitterPattern } from '@/components/study/SweetBitterPattern'
import { FirstAngelsMessageBreakdown } from '@/components/study/FirstAngelsMessageBreakdown'
import { EverlastingGospelFlow } from '@/components/study/EverlastingGospelFlow'
import { FearGloryJudgmentCreatorMap } from '@/components/study/FearGloryJudgmentCreatorMap'
import { CreatorWorshipSabbathBridge } from '@/components/study/CreatorWorshipSabbathBridge'
import { SecondAngelsMessageBreakdown } from '@/components/study/SecondAngelsMessageBreakdown'
import { AncientBabylonPattern } from '@/components/study/AncientBabylonPattern'
import { ChristVsBabylonContrast } from '@/components/study/ChristVsBabylonContrast'
import { EndTimeBabylonIdentifiers } from '@/components/study/EndTimeBabylonIdentifiers'
import { ComeOutCallFlow } from '@/components/study/ComeOutCallFlow'
import { ThirdAngelsMessageBreakdown } from '@/components/study/ThirdAngelsMessageBreakdown'
import { TrueWorshipVsCoercion } from '@/components/study/TrueWorshipVsCoercion'
import { BeastPowerIdentifiers } from '@/components/study/BeastPowerIdentifiers'
import { ImageOfBeastFormation } from '@/components/study/ImageOfBeastFormation'
import { MarkVsSealComparison } from '@/components/study/MarkVsSealComparison'
import { SealElementsSabbath } from '@/components/study/SealElementsSabbath'
import { PatienceSaintsTriad } from '@/components/study/PatienceSaintsTriad'
import { DeathResurrectionFlow } from '@/components/study/DeathResurrectionFlow'
import { SanctuaryJourneyMap } from '@/components/study/SanctuaryJourneyMap'
import { Button } from '@/components/ui/Button'
import type { LessonContentBlock } from '@/lib/lesson-content-blocks'

export interface ReflectionNotesContext {
  storageKey: string
  studySlug: string
  lessonSlug: string
  stepNumber: number
  userId?: string
  legacyMigrationKey?: string
}

export type ContentBlockRendererProps = {
  blocks: LessonContentBlock[]
  className?: string
  reflectionContext?: ReflectionNotesContext
}

/** Global structured block renderer (CMS / JSON sections + scripture supplements). */
export function ContentBlockRenderer({ blocks, className = '', reflectionContext }: ContentBlockRendererProps) {
  return (
    <div
      data-renderer="global-lesson-reader"
      className={`flex max-w-[52ch] flex-col gap-6 ${className}`.trim()}
    >
      {blocks.map((b, i) => (
        <div key={i}>{renderBlock(b, reflectionContext)}</div>
      ))}
    </div>
  )
}

function renderBlock(block: LessonContentBlock, reflectionContext?: ReflectionNotesContext) {
  switch (block.type) {
    case 'paragraph':
      return (
        <LessonTextRenderer text={block.text} phraseEmphasis={block.emphasisPhrases} />
      )
    case 'compactList':
      return (
        <ul className="list-none space-y-2 border-l-2 border-zinc-200/80 pl-4 text-[1.0625rem] leading-relaxed text-zinc-700 md:text-[1.08rem]">
          {block.items.map((item, j) => (
            <li key={j}>{item}</li>
          ))}
        </ul>
      )
    case 'scripture':
      return (
        <ScriptureBlock
          reference={block.reference}
          quote={block.quote}
          insights={block.insights ?? []}
          chain={block.chain}
          secondary={block.secondary}
          afterPrimary={block.afterPrimary}
          afterPrimaryEmphasisPhrases={block.afterPrimaryEmphasisPhrases}
          afterSecondary={block.afterSecondary}
          afterSecondaryEmphasisPhrases={block.afterSecondaryEmphasisPhrases}
        />
      )
    case 'teachingPoints':
      return (
        <TeachingPointsBlock
          points={block.points}
          teachingInsights={block.teachingInsights ?? []}
        />
      )
    case 'studyInsight':
      return (
        <StudyInsightCard
          title={block.title ?? 'Study insight'}
          body={block.body}
          variant={block.variant}
        />
      )
    case 'wordInsight':
      if (block.study) {
        return <WordInsight {...block.study} />
      }
      if (block.insight) {
        return <WordInsightCard insight={block.insight} />
      }
      return null
    case 'scriptureThread':
      return (
        <div className="min-w-0 max-w-full overflow-x-hidden">
          <ScriptureThread
            title={block.title}
            question={block.question}
            references={block.references ?? []}
            takeaway={block.takeaway}
            relatedHref={block.relatedHref}
            relatedLabel={block.relatedLabel}
          />
        </div>
      )
    case 'scriptureChain':
      if ('verses' in block && Array.isArray(block.verses)) {
        return <ScriptureChain title={block.title} verses={block.verses} />
      }
      if ('references' in block && Array.isArray(block.references)) {
        return <ScriptureChain title={block.title} references={block.references} />
      }
      return null
    case 'reflection':
      if (reflectionContext) {
        return (
          <ReflectionNotes
            storageKey={reflectionContext.storageKey}
            prompt={block.prompt}
            introLine="Take a moment. Don't rush this."
            studySlug={reflectionContext.studySlug}
            lessonSlug={reflectionContext.lessonSlug}
            stepNumber={reflectionContext.stepNumber}
            userId={reflectionContext.userId}
            legacyMigrationKey={reflectionContext.legacyMigrationKey}
          />
        )
      }
      return (
        <p className="text-[1.0625rem] leading-relaxed text-zinc-700 md:text-[1.08rem]">{block.prompt}</p>
      )
    case 'lifeApplication':
      return <LessonTextRenderer text={block.text} />
    case 'prayer':
      return <LessonTextRenderer text={block.text} tone="prayer" />
    case 'studyVisual':
      return <StudyVisualBlock block={block} />
    case 'sanctuaryJourneyMap':
      return (
        <SanctuaryJourneyMap
          stages={'stages' in block ? block.stages : undefined}
          highlightedIndices={block.highlightedIndices}
          title={block.title}
          subtitle={block.subtitle}
        />
      )
    case 'deathResurrectionFlow':
      return (
        <DeathResurrectionFlow
          stages={'stages' in block ? block.stages : undefined}
          highlightedIndices={block.highlightedIndices}
          title={block.title}
          subtitle={block.subtitle}
        />
      )
    case 'creationRestPattern':
      return (
        <CreationRestPattern
          stages={'stages' in block ? block.stages : undefined}
          highlightedIndices={block.highlightedIndices}
          title={block.title}
          subtitle={block.subtitle}
          caption={block.caption}
        />
      )
    case 'givingCirclePattern':
      return (
        <GivingCirclePattern
          stages={'stages' in block ? block.stages : undefined}
          highlightedIndices={block.highlightedIndices}
          title={block.title}
          subtitle={block.subtitle}
          caption={block.caption}
        />
      )
    case 'wholePersonHealthPattern':
      return (
        <WholePersonHealthPattern
          areas={'areas' in block ? block.areas : undefined}
          highlightedIndices={block.highlightedIndices}
          title={block.title}
          subtitle={block.subtitle}
          caption={block.caption}
        />
      )
    case 'baptismMeaningPattern':
      return (
        <BaptismMeaningPattern
          stages={'stages' in block ? block.stages : undefined}
          highlightedIndices={block.highlightedIndices}
          title={block.title}
          subtitle={block.subtitle}
          caption={block.caption}
        />
      )
    case 'churchCommunityPattern':
      return (
        <ChurchCommunityPattern
          pillars={'pillars' in block ? block.pillars : undefined}
          highlightedIndices={block.highlightedIndices}
          title={block.title}
          subtitle={block.subtitle}
          caption={block.caption}
        />
      )
    case 'kingdomContrastPattern':
      return (
        <KingdomContrastPattern
          pillars={'pillars' in block ? block.pillars : undefined}
          highlightedIndices={block.highlightedIndices}
          title={block.title}
          subtitle={block.subtitle}
          caption={block.caption}
        />
      )
    case 'revelation12Pattern':
      return (
        <Revelation12Pattern
          stages={'stages' in block ? block.stages : undefined}
          highlightedIndices={block.highlightedIndices}
          title={block.title}
          subtitle={block.subtitle}
          caption={block.caption}
        />
      )
    case 'remnantWitnessPattern':
      return (
        <RemnantWitnessPattern
          stages={'stages' in block ? block.stages : undefined}
          highlightedIndices={block.highlightedIndices}
          title={block.title}
          subtitle={block.subtitle}
          caption={block.caption}
        />
      )
    case 'prophecyTimeline2300':
      return (
        <ProphecyTimeline2300 title={block.title} subtitle={block.subtitle} caption={block.caption} />
      )
    case 'sanctuaryDiagram':
      return (
        <SanctuaryDiagram
          areas={'areas' in block ? block.areas : undefined}
          highlightedIndices={block.highlightedIndices}
          title={block.title}
          subtitle={block.subtitle}
          caption={block.caption}
        />
      )
    case 'dayOfAtonementFlow':
      return (
        <DayOfAtonementFlow
          stages={'stages' in block ? block.stages : undefined}
          highlightedIndices={block.highlightedIndices}
          title={block.title}
          subtitle={block.subtitle}
          caption={block.caption}
        />
      )
    case 'sweetBitterPattern':
      return (
        <SweetBitterPattern
          stages={'stages' in block ? block.stages : undefined}
          highlightedIndices={block.highlightedIndices}
          title={block.title}
          subtitle={block.subtitle}
          caption={block.caption}
        />
      )
    case 'firstAngelsMessageBreakdown':
      return (
        <FirstAngelsMessageBreakdown
          sections={'sections' in block ? block.sections : undefined}
          highlightedIndices={block.highlightedIndices}
          title={block.title}
          subtitle={block.subtitle}
          caption={block.caption}
        />
      )
    case 'everlastingGospelFlow':
      return (
        <EverlastingGospelFlow
          stages={'stages' in block ? block.stages : undefined}
          highlightedIndices={block.highlightedIndices}
          title={block.title}
          subtitle={block.subtitle}
          caption={block.caption}
        />
      )
    case 'fearGloryJudgmentCreatorMap':
      return (
        <FearGloryJudgmentCreatorMap
          responses={'responses' in block ? block.responses : undefined}
          centerLabel={'centerLabel' in block ? block.centerLabel : undefined}
          centerDescription={'centerDescription' in block ? block.centerDescription : undefined}
          highlightedIndices={block.highlightedIndices}
          title={block.title}
          subtitle={block.subtitle}
          caption={block.caption}
        />
      )
    case 'creatorWorshipSabbathBridge':
      return (
        <CreatorWorshipSabbathBridge
          bridgePoints={'bridgePoints' in block ? block.bridgePoints : undefined}
          revelationReference={'revelationReference' in block ? block.revelationReference : undefined}
          revelationQuote={'revelationQuote' in block ? block.revelationQuote : undefined}
          exodusReference={'exodusReference' in block ? block.exodusReference : undefined}
          exodusQuote={'exodusQuote' in block ? block.exodusQuote : undefined}
          highlightedIndices={block.highlightedIndices}
          title={block.title}
          subtitle={block.subtitle}
          caption={block.caption}
        />
      )
    case 'secondAngelsMessageBreakdown':
      return (
        <SecondAngelsMessageBreakdown
          sections={'sections' in block ? block.sections : undefined}
          highlightedIndices={block.highlightedIndices}
          title={block.title}
          subtitle={block.subtitle}
          caption={block.caption}
        />
      )
    case 'ancientBabylonPattern':
      return (
        <AncientBabylonPattern
          stages={'stages' in block ? block.stages : undefined}
          highlightedIndices={block.highlightedIndices}
          title={block.title}
          subtitle={block.subtitle}
          caption={block.caption}
        />
      )
    case 'christVsBabylonContrast':
      return (
        <ChristVsBabylonContrast
          christSteps={'christSteps' in block ? block.christSteps : undefined}
          babylonSteps={'babylonSteps' in block ? block.babylonSteps : undefined}
          christColumnTitle={'christColumnTitle' in block ? block.christColumnTitle : undefined}
          babylonColumnTitle={'babylonColumnTitle' in block ? block.babylonColumnTitle : undefined}
          christScriptureRef={'christScriptureRef' in block ? block.christScriptureRef : undefined}
          babylonScriptureRef={'babylonScriptureRef' in block ? block.babylonScriptureRef : undefined}
          highlightedIndices={block.highlightedIndices}
          title={block.title}
          subtitle={block.subtitle}
          caption={block.caption}
        />
      )
    case 'endTimeBabylonIdentifiers':
      return (
        <EndTimeBabylonIdentifiers
          identifiers={'identifiers' in block ? block.identifiers : undefined}
          note={'note' in block ? block.note : undefined}
          highlightedIndices={block.highlightedIndices}
          title={block.title}
          subtitle={block.subtitle}
          caption={block.caption}
        />
      )
    case 'comeOutCallFlow':
      return (
        <ComeOutCallFlow
          stages={'stages' in block ? block.stages : undefined}
          highlightedIndices={block.highlightedIndices}
          title={block.title}
          subtitle={block.subtitle}
          caption={block.caption}
        />
      )
    case 'thirdAngelsMessageBreakdown':
      return (
        <ThirdAngelsMessageBreakdown
          sections={'sections' in block ? block.sections : undefined}
          highlightedIndices={block.highlightedIndices}
          title={block.title}
          subtitle={block.subtitle}
          caption={block.caption}
        />
      )
    case 'trueWorshipVsCoercion':
      return (
        <TrueWorshipVsCoercion
          trueWorshipSteps={'trueWorshipSteps' in block ? block.trueWorshipSteps : undefined}
          coercedSteps={'coercedSteps' in block ? block.coercedSteps : undefined}
          trueWorshipColumnTitle={'trueWorshipColumnTitle' in block ? block.trueWorshipColumnTitle : undefined}
          coercedColumnTitle={'coercedColumnTitle' in block ? block.coercedColumnTitle : undefined}
          trueWorshipScriptureRef={'trueWorshipScriptureRef' in block ? block.trueWorshipScriptureRef : undefined}
          coercedScriptureRef={'coercedScriptureRef' in block ? block.coercedScriptureRef : undefined}
          highlightedIndices={block.highlightedIndices}
          title={block.title}
          subtitle={block.subtitle}
          caption={block.caption}
        />
      )
    case 'beastPowerIdentifiers':
      return (
        <BeastPowerIdentifiers
          identifiers={'identifiers' in block ? block.identifiers : undefined}
          highlightedIndices={block.highlightedIndices}
          title={block.title}
          subtitle={block.subtitle}
          caption={block.caption}
        />
      )
    case 'imageOfBeastFormation':
      return (
        <ImageOfBeastFormation
          stages={'stages' in block ? block.stages : undefined}
          note={'note' in block ? block.note : undefined}
          highlightedIndices={block.highlightedIndices}
          title={block.title}
          subtitle={block.subtitle}
          caption={block.caption}
        />
      )
    case 'markVsSealComparison':
      return (
        <MarkVsSealComparison
          sealItems={'sealItems' in block ? block.sealItems : undefined}
          markItems={'markItems' in block ? block.markItems : undefined}
          sealColumnTitle={'sealColumnTitle' in block ? block.sealColumnTitle : undefined}
          markColumnTitle={'markColumnTitle' in block ? block.markColumnTitle : undefined}
          sealScriptureRef={'sealScriptureRef' in block ? block.sealScriptureRef : undefined}
          markScriptureRef={'markScriptureRef' in block ? block.markScriptureRef : undefined}
          note={'note' in block ? block.note : undefined}
          highlightedIndices={block.highlightedIndices}
          title={block.title}
          subtitle={block.subtitle}
          caption={block.caption}
        />
      )
    case 'sealElementsSabbath':
      return (
        <SealElementsSabbath
          elements={'elements' in block ? block.elements : undefined}
          sourceReference={'sourceReference' in block ? block.sourceReference : undefined}
          explanation={'explanation' in block ? block.explanation : undefined}
          highlightedIndices={block.highlightedIndices}
          title={block.title}
          subtitle={block.subtitle}
          caption={block.caption}
        />
      )
    case 'patienceSaintsTriad':
      return (
        <PatienceSaintsTriad
          elements={'elements' in block ? block.elements : undefined}
          highlightedIndices={block.highlightedIndices}
          title={block.title}
          subtitle={block.subtitle}
          caption={block.caption}
        />
      )
    case 'studyCta':
      return (
        <div className="max-w-none pt-2">
          <Button href={block.href} variant="primary">
            {block.label}
          </Button>
        </div>
      )
    case 'prophecyTimeline':
      return (
        <ProphecyTimeline
          id={block.id}
          label={block.label}
          heading={block.heading}
          items={block.items}
          footerNotes={block.footerNotes}
        />
      )
    default:
      return null
  }
}
