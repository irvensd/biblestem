'use client'

import Link from 'next/link'
import { useMemo } from 'react'
import { useDemoAuth } from '@/components/auth/DemoAuthProvider'
import { useDashboardProgress } from '@/hooks/useDashboardProgress'
import type { Lesson, StudySeries } from '@/lib/types/product'
import {
  chapterCompletedStudyCount,
  completedFoundationStudyCount,
  currentFoundationStudy,
  firstIncompleteLesson,
  isStudyFullyComplete,
  isStudyStarted,
  nextIncompleteFoundationStudyAfterCurrent,
  partitionFoundationStudiesIntoChapters,
} from '@/lib/foundation-path'
import type { LocalDashboardProgress } from '@/lib/dashboard-local-progress'
import { effectiveStudySeriesMinutes } from '@/lib/studies/derive-overview'
import { getStudyLibrarySummaryLine } from '@/lib/study-summary-line'

type JourneyBadge = 'completed' | 'current' | 'next' | 'available'

function sortedLessonsForStudy(study: StudySeries): Lesson[] {
  return [...study.lessons].sort((a, b) => a.sortOrder - b.sortOrder)
}

function JourneyCheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width={14} height={14} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M20 6L9 17l-5-5"
        stroke="currentColor"
        strokeWidth={2.25}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function RowStatusBadge({ kind }: { kind: JourneyBadge }) {
  if (kind === 'available') return null

  const styles =
    kind === 'completed'
      ? 'bg-emerald-50/90 text-emerald-900 ring-emerald-200/85'
      : kind === 'current'
        ? 'bg-blue-50 text-blue-900 ring-blue-200/90'
        : 'bg-blue-50/40 text-blue-950/85 ring-blue-100/90'

  const label =
    kind === 'completed' ? 'Completed' : kind === 'current' ? 'Current' : 'Recommended next'

  return (
    <span
      className={`inline-flex max-w-full rounded-full px-2 py-0.5 text-[10px] font-medium leading-snug ring-1 ring-inset sm:max-w-none sm:text-[11px] sm:leading-tight ${styles}`}
    >
      {label}
    </span>
  )
}

function rowHrefSet(study: StudySeries, progress: LocalDashboardProgress) {
  const sortedLessons = sortedLessonsForStudy(study)
  const firstLesson = sortedLessons[0]
  const nextLesson = firstIncompleteLesson(study, progress)
  const overviewHref = `/study-library/${study.slug}`
  const continueHref =
    nextLesson != null ? `/study-library/${study.slug}/lesson/${nextLesson.slug}` : overviewHref
  const startHref =
    firstLesson != null ? `/study-library/${study.slug}/lesson/${firstLesson.slug}` : overviewHref
  return { overviewHref, continueHref, startHref }
}

/** CTA derived from badge + status (badge = status only; label matches spec). */
function rowCta(
  study: StudySeries,
  badge: JourneyBadge,
  progress: LocalDashboardProgress,
): { label: string; href: string } {
  const { overviewHref, continueHref, startHref } = rowHrefSet(study, progress)
  switch (badge) {
    case 'completed':
      return { label: 'Review', href: overviewHref }
    case 'current':
      return { label: 'Continue', href: continueHref }
    case 'next':
      return { label: 'Start', href: startHref }
    default:
      return { label: 'Open', href: overviewHref }
  }
}

function rowBadge(props: {
  study: StudySeries
  ordered: StudySeries[]
  nextAfterCurrent: StudySeries | null
  currentStudy: StudySeries | null
  progress: LocalDashboardProgress
}): JourneyBadge {
  const complete = isStudyFullyComplete(props.study, props.progress)
  if (complete) return 'completed'
  if (props.currentStudy?.slug === props.study.slug) return 'current'
  if (props.nextAfterCurrent?.slug === props.study.slug) return 'next'
  return 'available'
}

function progressPrimaryCta(
  current: StudySeries | null,
  progress: LocalDashboardProgress,
  ordered: StudySeries[],
  allDone: boolean,
): { label: string; href: string } | null {
  if (ordered.length === 0) return null
  if (allDone) {
    const last = ordered[ordered.length - 1]
    return { label: 'Review study', href: `/study-library/${last.slug}` }
  }
  if (!current) return null
  if (isStudyStarted(current, progress)) {
    const { continueHref } = rowHrefSet(current, progress)
    return { label: 'Continue study', href: continueHref }
  }
  const { startHref } = rowHrefSet(current, progress)
  return { label: 'Start study', href: startHref }
}

function FoundationsJourneySkeleton() {
  return (
    <div className="mx-auto w-full max-w-[68rem]">
      <div className="rounded-lg border border-zinc-200/90 bg-white p-4 ring-1 ring-zinc-950/[0.03] sm:p-5">
        <div className="flex animate-pulse flex-col gap-3">
          <div className="h-4 w-48 rounded bg-zinc-100" />
          <div className="h-14 rounded-lg bg-zinc-100" />
          <div className="h-24 rounded-lg bg-zinc-100" />
        </div>
      </div>
    </div>
  )
}

export type FoundationsPathSectionProps = {
  studies: StudySeries[]
}

export function FoundationsPathSection({ studies: orderedStudies }: FoundationsPathSectionProps) {
  const { user, isReady } = useDemoAuth()
  const { progress, ready } = useDashboardProgress(user?.id)

  const foundationsCompletedCount = completedFoundationStudyCount(orderedStudies, progress)
  const currentFoundationsStudy = currentFoundationStudy(orderedStudies, progress)
  const nextAfterCurrent = nextIncompleteFoundationStudyAfterCurrent(orderedStudies, progress)

  const chapters = useMemo(
    () => partitionFoundationStudiesIntoChapters(orderedStudies),
    [orderedStudies],
  )

  const indexBySlug = useMemo(() => {
    const m = new Map<string, number>()
    orderedStudies.forEach((s, i) => m.set(s.slug, i))
    return m
  }, [orderedStudies])

  const allStudiesComplete =
    orderedStudies.length > 0 && foundationsCompletedCount >= orderedStudies.length
  const progressPct =
    orderedStudies.length > 0 ? (foundationsCompletedCount / orderedStudies.length) * 100 : 0

  const primaryCta = progressPrimaryCta(
    currentFoundationsStudy,
    progress,
    orderedStudies,
    allStudiesComplete,
  )

  if (!isReady || !ready) {
    return <FoundationsJourneySkeleton />
  }

  if (orderedStudies.length === 0) {
    return null
  }

  return (
    <div className="mx-auto w-full max-w-[68rem]">
      <div className="min-w-0 max-w-full rounded-lg border border-zinc-200/90 bg-white px-3.5 py-3 shadow-sm ring-1 ring-zinc-950/[0.025] sm:px-4 sm:py-3.5">
        <div className="flex min-w-0 flex-wrap items-start justify-between gap-x-4 gap-y-1">
          <p className="text-sm font-semibold text-zinc-900">Foundations journey progress</p>
          <p className="text-sm tabular-nums text-zinc-700">
            {foundationsCompletedCount} / {orderedStudies.length}{' '}
            <span className="font-normal text-zinc-500">complete</span>
          </p>
        </div>

        {orderedStudies.length > 0 ? (
          <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-zinc-100" role="presentation">
            <div
              className="h-full rounded-full bg-blue-700 transition-[width] duration-300"
              style={{ width: `${progressPct}%` }}
            />
          </div>
        ) : null}

        {!allStudiesComplete && currentFoundationsStudy ? (
          <div className="mt-3 min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-400">Recommended next</p>
            <p className="mt-0.5 break-words text-sm font-semibold leading-snug text-zinc-900">{currentFoundationsStudy.title}</p>
          </div>
        ) : allStudiesComplete ? (
          <p className="mt-3 text-xs text-zinc-600">You have finished every study on this path.</p>
        ) : null}

        {primaryCta ? (
          <div className="mt-3 flex min-w-0 flex-col gap-x-4 gap-y-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-y-1">
            <Link
              href={primaryCta.href}
              className="inline-flex min-h-[44px] items-center py-2 text-sm font-semibold text-blue-800 underline-offset-2 hover:text-blue-950 hover:underline sm:min-h-0 sm:py-0"
            >
              {primaryCta.label}
            </Link>
            {!allStudiesComplete && currentFoundationsStudy ? (
              <Link
                href={`/study-library/${currentFoundationsStudy.slug}`}
                className="inline-flex min-h-[44px] items-center py-2 text-xs font-medium text-zinc-500 underline-offset-2 hover:text-zinc-800 hover:underline sm:min-h-0 sm:py-0"
              >
                Study overview
              </Link>
            ) : null}
          </div>
        ) : null}
      </div>

      <div className="mt-6 space-y-2.5">
        <h2 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-500">
          Your foundations journey
        </h2>
        <div className="space-y-3 sm:space-y-3.5">
          {chapters.map((chapter) => {
            const chDone = chapterCompletedStudyCount(chapter.studies, progress)
            const total = chapter.studies.length
            return (
              <article
                key={`${chapter.chapterLabel}:${chapter.title}`}
                className="overflow-hidden rounded-lg border border-zinc-200/80 bg-white ring-1 ring-zinc-950/[0.02]"
              >
                <header className="border-b border-zinc-200/75 px-3 py-2 sm:px-3.5 sm:py-2.5">
                  {chapter.chapterLabel ? (
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-400">
                      {chapter.chapterLabel}
                    </p>
                  ) : null}
                  <h3 className="mt-0.5 text-[15px] font-semibold tracking-tight text-zinc-900">{chapter.title}</h3>
                  <p className="mt-0.5 text-xs tabular-nums text-zinc-600">
                    {chDone} of {total} complete
                  </p>
                </header>

                <ul className="divide-y divide-zinc-100 bg-white/80" aria-label={`Studies in ${chapter.title}`}>
                  {chapter.studies.map((study) => {
                    const journeyStep = indexBySlug.get(study.slug)! + 1
                    const badge = rowBadge({
                      study,
                      ordered: orderedStudies,
                      nextAfterCurrent,
                      currentStudy: currentFoundationsStudy,
                      progress,
                    })
                    const complete = isStudyFullyComplete(study, progress)
                    const { label: ctaLabel, href: ctaHref } = rowCta(study, badge, progress)
                    const descText = getStudyLibrarySummaryLine(study)

                    const mins = effectiveStudySeriesMinutes(study)
                    const metaDuration =
                      mins > 0 ? `${mins} min` : study.durationSummary.trim() || `${study.lessonsCount} lessons`
                    const rowHighlight =
                      badge === 'current' && !complete ? 'bg-blue-50/40' : 'bg-white hover:bg-zinc-50/40'

                    const rowCtaClass =
                      badge === 'current'
                        ? 'text-sm font-semibold text-blue-800 underline-offset-2 hover:text-blue-950 hover:underline'
                        : badge === 'completed'
                          ? 'text-sm font-medium text-zinc-600 underline-offset-2 hover:text-zinc-900 hover:underline'
                          : 'text-sm font-medium text-zinc-700 underline-offset-2 hover:text-zinc-900 hover:underline'

                    const rowCtaInteractiveClass = `${rowCtaClass} inline-flex min-h-[44px] items-center leading-snug sm:min-h-0`

                    return (
                      <li key={study.slug}>
                        <div
                          className={`flex min-w-0 flex-col px-2.5 py-2.5 sm:flex-row sm:items-start sm:gap-3 sm:px-3 sm:py-2 ${rowHighlight}`}
                        >
                          <div className="flex min-w-0 flex-1 items-start gap-2">
                            <div
                              className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-[11px] font-semibold tabular-nums sm:mt-0 ${
                                complete
                                  ? 'border-emerald-200/90 bg-emerald-50/80 text-emerald-800'
                                  : badge === 'current'
                                    ? 'border-blue-300/80 bg-white text-blue-900'
                                    : 'border-zinc-200 bg-zinc-50 text-zinc-600'
                              }`}
                              aria-hidden
                            >
                              {complete ? <JourneyCheckIcon className="text-emerald-700" /> : journeyStep}
                            </div>
                            <div className="min-w-0 flex-1">
                              <h4 className="break-words text-sm font-semibold leading-tight text-zinc-900 sm:truncate">
                                {study.title}
                              </h4>
                              <p className="mt-0.5 line-clamp-2 text-xs leading-snug text-zinc-600 sm:line-clamp-1">
                                {descText}
                              </p>
                              <p className="mt-1 min-w-0 break-words text-[11px] leading-relaxed tabular-nums text-zinc-500 sm:text-xs">
                                {study.lessonsCount} lessons · {metaDuration} · {study.level}
                              </p>

                              <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 sm:hidden">
                                <RowStatusBadge kind={badge} />
                                <Link href={ctaHref} className={`${rowCtaInteractiveClass} w-fit shrink-0`}>
                                  {ctaLabel}
                                </Link>
                              </div>
                            </div>
                          </div>

                          <div className="hidden shrink-0 flex-col items-end justify-start gap-1.5 pt-2 sm:flex sm:pt-0">
                            <RowStatusBadge kind={badge} />
                            <Link href={ctaHref} className={`${rowCtaInteractiveClass} whitespace-nowrap`}>
                              {ctaLabel}
                            </Link>
                          </div>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </div>
  )
}
