import { LessonTextRenderer } from '@/components/lessons/LessonTextRenderer'
import { ReflectionNotes } from '@/components/lessons/ReflectionNotes'
import { ScriptureBlock } from '@/components/lessons/ScriptureBlock'
import { ScriptureChain } from '@/components/lessons/ScriptureChain'
import { StudyInsightCard } from '@/components/lessons/StudyInsightCard'
import { StudyVisualBlock } from '@/components/lessons/StudyVisualBlock'
import { TeachingPointsBlock } from '@/components/lessons/TeachingPointsBlock'
import { WordInsight } from '@/components/lessons/WordInsight'
import { WordInsightCard } from '@/components/lessons/WordInsightCard'
import { ProphecyTimeline } from '@/components/study/ProphecyTimeline'
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
          highlightedIndices={block.highlightedIndices}
          title={block.title}
          subtitle={block.subtitle}
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
