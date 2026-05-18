import Link from 'next/link'
import { CopyMisunderstoodSummaryButton } from '@/components/lessons/CopyMisunderstoodSummaryButton'
import { READER_FOCUS_RING } from '@/components/lessons/lesson-reader-focus'
import { ScriptureChain } from '@/components/lessons/ScriptureChain'
import { ScriptureThread } from '@/components/lessons/ScriptureThread'
import { Button } from '@/components/ui/Button'
import { REPORT_ISSUE_LINK_CLASSNAME, supportReportHref } from '@/lib/support/report-issue-href'
import type { SeriesCompleteScreenCopy } from '@/lib/lesson-content'
import type { LessonScriptureChainRecap } from '@/lib/lesson-scripture-chains'
import type { LessonScriptureThreadRecap } from '@/lib/scripture-thread-types'
import { buildMisunderstoodPassageCopyText, type MisunderstoodPassage } from '@/lib/misunderstood-passages'
import { formatLessonDuration } from '@/lib/product-queries'
import type { WordInsightCompletionLine } from '@/lib/word-insights-completion'
import type { Lesson } from '@/lib/types/product'

interface CompletionScreenProps {
  seriesSlug: string
  /** Lesson slug for contextual issue reporting. */
  lessonSlug: string
  /** Total steps in this lesson (used as step hint when lesson is complete). */
  lessonStepCount: number
  seriesTitle: string
  lessonTitle: string
  nextLesson: Lesson | null
  /** One line under the title; when set, replaces the default “walked through…” paragraph. */
  completionSummary?: string
  /** Shown before the next-lesson card when present. */
  forwardQuestion?: string
  /** When this lesson is the last in the series, overrides the default “series complete” copy and CTAs. */
  seriesCompleteScreen?: SeriesCompleteScreenCopy
  /** 0–100: approximate series progress from local + in-progress lessons. */
  studyProgressPercent?: number
  reviewLessonHref: string
  backToSeriesHref: string
  /** Primary Scripture Thread for this lesson (completion recap). */
  scriptureThread?: LessonScriptureThreadRecap | null
  /** Additional legacy chains (shown only when no primary thread). */
  scriptureChains?: LessonScriptureChainRecap[]
  /** Word-study recap when the lesson includes insights (see `extractWordInsightsForCompletion`). */
  wordInsightLines?: WordInsightCompletionLine[]
  /** Misunderstood Passages recap when this lesson is in that curated list. */
  misunderstoodPassage?: MisunderstoodPassage
}

export function CompletionScreen({
  seriesSlug,
  lessonSlug,
  lessonStepCount,
  seriesTitle,
  lessonTitle,
  nextLesson,
  completionSummary,
  forwardQuestion,
  seriesCompleteScreen,
  studyProgressPercent,
  reviewLessonHref,
  backToSeriesHref,
  scriptureThread,
  scriptureChains,
  wordInsightLines,
  misunderstoodPassage,
}: CompletionScreenProps) {
  const isSeriesComplete = !nextLesson
  const useSeriesCompleteScreen = isSeriesComplete && seriesCompleteScreen
  const defaultBody = (
    <>
      You’ve walked through <span className="font-medium text-zinc-800">{lessonTitle}</span> in {seriesTitle}. Take a
      breath—consistency in study matters more than speed.
    </>
  )

  const progressLabel =
    typeof studyProgressPercent === 'number' && studyProgressPercent >= 0 ? (
      <div className="mt-5 rounded-xl border border-zinc-200/80 bg-stone-50/60 px-4 py-3">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400">Study progress</p>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-2xl font-semibold tabular-nums text-zinc-900">{studyProgressPercent}%</span>
          <span className="text-xs text-zinc-500">through this series (approx.)</span>
        </div>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-zinc-200/80">
          <div
            className="h-full rounded-full bg-blue-800/80 transition-[width]"
            style={{ width: `${Math.min(100, studyProgressPercent)}%` }}
          />
        </div>
      </div>
    ) : null

  return (
    <div className="space-y-8 pb-4 pt-2">
      <div className="rounded-xl border border-zinc-200/90 bg-white p-8 ring-1 ring-zinc-950/[0.03] md:p-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
          {useSeriesCompleteScreen ? 'This study' : isSeriesComplete ? 'This series' : 'This lesson'}
        </p>
        <h2 className="mt-3 text-xl font-semibold tracking-tight text-zinc-900 md:text-2xl">
          {useSeriesCompleteScreen
            ? seriesCompleteScreen.title
            : isSeriesComplete
              ? 'Series complete'
              : 'Lesson complete'}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-zinc-600">
          {useSeriesCompleteScreen
            ? seriesCompleteScreen.message
            : completionSummary
              ? completionSummary
              : defaultBody}
        </p>
        {progressLabel}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link
            href={backToSeriesHref}
            className={`inline-flex items-center justify-center rounded-xl border border-zinc-300 bg-white px-4 py-3 text-center text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-50 ${READER_FOCUS_RING}`}
          >
            Back to series
          </Link>
          <Link
            href={reviewLessonHref}
            className={`inline-flex items-center justify-center rounded-xl border border-zinc-200/90 bg-stone-50/80 px-4 py-3 text-center text-sm font-medium text-zinc-800 transition-colors hover:bg-stone-50 ${READER_FOCUS_RING}`}
          >
            Review this lesson
          </Link>
        </div>
      </div>

      {scriptureThread ? (
        <section className="min-w-0 max-w-full overflow-hidden md:px-1">
          <ScriptureThread {...scriptureThread} completionMode />
        </section>
      ) : scriptureChains?.length ? (
        <section className="rounded-xl border border-zinc-200/90 bg-white px-5 py-6 ring-1 ring-zinc-950/[0.03] md:px-8 md:py-7">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400">SCRIPTURE THREAD</p>
          <h3 className="mt-2 text-lg font-semibold tracking-tight text-zinc-900">Connections from this lesson</h3>
          <div className="mt-5 flex flex-col gap-4">
            {scriptureChains.map((chain) => (
              <ScriptureChain
                key={chain.id}
                title={chain.title}
                takeaway={chain.takeaway}
                verses={chain.verses}
                references={chain.references}
              />
            ))}
          </div>
        </section>
      ) : null}

      {wordInsightLines?.length ? (
        <section className="rounded-xl border border-zinc-200/90 bg-white px-5 py-6 ring-1 ring-zinc-950/[0.03] md:px-8 md:py-7">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400">WORD INSIGHTS</p>
          <h3 className="mt-2 text-lg font-semibold tracking-tight text-zinc-900">Terms from this lesson</h3>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed">
            {wordInsightLines.map((line) => (
              <li key={line.id} className="border-b border-zinc-100 pb-3 last:border-b-0 last:pb-0">
                <p className="font-medium text-zinc-900">{line.headline}</p>
                <p className="mt-1 text-zinc-600">{line.meaning}</p>
                {line.subtitle ? <p className="mt-1 text-xs text-zinc-400">{line.subtitle}</p> : null}
                {line.reference ? <p className="mt-1 text-xs text-zinc-400">{line.reference}</p> : null}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {misunderstoodPassage ? (
        <section className="rounded-xl border border-zinc-200/90 bg-white px-5 py-6 ring-1 ring-zinc-950/[0.03] md:px-8 md:py-7">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400">MISUNDERSTOOD PASSAGE</p>
          <h3 className="mt-2 text-lg font-semibold tracking-tight text-zinc-900">What this lesson clarified</h3>
          <div className="mt-4 space-y-3 text-sm leading-relaxed">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wide text-zinc-400">Passage</p>
              <p className="mt-1 font-medium text-zinc-900">{misunderstoodPassage.title}</p>
              <p className="mt-1 text-zinc-500">{misunderstoodPassage.reference}</p>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wide text-zinc-400">Common view</p>
              <p className="mt-1 text-zinc-600">{misunderstoodPassage.commonView}</p>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wide text-zinc-400">Scripture pattern</p>
              <p className="mt-1 text-zinc-600">{misunderstoodPassage.scripturePattern}</p>
            </div>
          </div>
          <div className="mt-5">
            <CopyMisunderstoodSummaryButton text={buildMisunderstoodPassageCopyText(misunderstoodPassage)} />
          </div>
        </section>
      ) : null}

      {forwardQuestion ? (
        <div className="rounded-xl border border-zinc-200/90 bg-white px-6 py-5 ring-1 ring-zinc-950/[0.03] md:px-8 md:py-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Before you continue</p>
          <p className="mt-3 text-[1.0625rem] leading-[1.75] text-zinc-800 md:text-[1.08rem]">{forwardQuestion}</p>
        </div>
      ) : null}

      {nextLesson ? (
        <div className="rounded-xl border border-zinc-200/90 bg-stone-50/80 p-6 ring-1 ring-zinc-950/[0.03] md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Next lesson</p>
          <h3 className="mt-2 text-lg font-semibold tracking-tight text-zinc-900">{nextLesson.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600">{nextLesson.summary}</p>
          <p className="mt-3 text-xs text-zinc-500">
            {formatLessonDuration(nextLesson.durationMinutes)} · {nextLesson.scripture}
          </p>
          <div className="mt-6">
            <Button className={READER_FOCUS_RING} href={`/study-library/${seriesSlug}/lesson/${nextLesson.slug}`}>
              Continue to next lesson
            </Button>
          </div>
        </div>
      ) : useSeriesCompleteScreen ? (
        <div className="rounded-xl border border-zinc-200/90 bg-stone-50/80 p-6 ring-1 ring-zinc-950/[0.03] md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">What next</p>
          <p className="mt-3 text-sm text-zinc-600">
            You&apos;ve finished the last lesson in this series. Celebrate the milestone—then keep the habit going in
            the library.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button className={READER_FOCUS_RING} href={seriesCompleteScreen.primaryCta.href}>
              {seriesCompleteScreen.primaryCta.label}
            </Button>
            <Button className={READER_FOCUS_RING} href={seriesCompleteScreen.secondaryCta.href} variant="secondary">
              {seriesCompleteScreen.secondaryCta.label}
            </Button>
          </div>
        </div>
      ) : (
        <div className="rounded-xl border border-zinc-200/90 bg-stone-50/80 p-6 ring-1 ring-zinc-950/[0.03] md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">What next</p>
          <h3 className="mt-2 text-lg font-semibold tracking-tight text-zinc-900">You&apos;ve completed this study</h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600">
            Review any lesson in this series, or continue building momentum in the library.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href={`/study-library/${seriesSlug}`}>Review this series</Button>
            <Button href="/study-library" variant="secondary">
              Browse studies
            </Button>
          </div>
          <Link
            href={`/study-library/${seriesSlug}`}
            className={`mt-5 inline-block text-sm font-medium text-blue-800 hover:text-blue-900 ${READER_FOCUS_RING} rounded-sm`}
          >
            See lesson list →
          </Link>
        </div>
      )}

      <p className="text-center">
        <Link
          href={supportReportHref({
            type: 'content-correction',
            study: seriesSlug,
            lesson: lessonSlug,
            step: String(lessonStepCount),
          })}
          className={REPORT_ISSUE_LINK_CLASSNAME}
        >
          Report an issue with this lesson
        </Link>
      </p>
    </div>
  )
}
