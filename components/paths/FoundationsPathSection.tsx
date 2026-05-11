'use client'

import Link from 'next/link'
import { useMemo } from 'react'
import { useDemoAuth } from '@/components/auth/DemoAuthProvider'
import { useDashboardProgress } from '@/hooks/useDashboardProgress'
import type { StudySeries } from '@/lib/types/product'
import {
  completedFoundationStudyCount,
  currentFoundationStudy,
  firstIncompleteLesson,
  foundationPathEstimatedMinutes,
  isStudyFullyComplete,
  isStudyStarted,
  studyEstimatedMinutes,
} from '@/lib/foundation-path'

function purposeLine(series: StudySeries): string {
  const line = series.shortDescription?.trim() || series.subtitle?.trim() || ''
  if (line) return line.length > 160 ? `${line.slice(0, 157)}…` : line
  const d = series.description?.trim() ?? ''
  if (!d) return ''
  return d.length > 160 ? `${d.slice(0, 157)}…` : d
}

function StatusBadge({ status }: { status: 'completed' | 'current' | 'not_started' }) {
  const styles =
    status === 'completed'
      ? 'bg-emerald-50 text-emerald-900 ring-emerald-200/90'
      : status === 'current'
        ? 'bg-blue-50 text-blue-900 ring-blue-200/90'
        : 'bg-zinc-50 text-zinc-700 ring-zinc-200/90'
  const label =
    status === 'completed' ? 'Completed' : status === 'current' ? 'Current' : 'Not started'
  return (
    <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${styles}`}>
      {label}
    </span>
  )
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width={18} height={18} viewBox="0 0 24 24" fill="none" aria-hidden>
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

export type FoundationsPathSectionProps = {
  studies: StudySeries[]
}

export function FoundationsPathSection({ studies }: FoundationsPathSectionProps) {
  const { user, isReady } = useDemoAuth()
  const { progress, ready } = useDashboardProgress(user?.id)

  const stats = useMemo(() => {
    const minutesTotal = foundationPathEstimatedMinutes(studies)
    const done = completedFoundationStudyCount(studies, progress)
    const current = currentFoundationStudy(studies, progress)
    const allDone = studies.length > 0 && done === studies.length
    return {
      minutesTotal,
      studiesCompleted: done,
      total: studies.length,
      currentTitle: allDone ? null : current?.title ?? null,
      allDone,
    }
  }, [studies, progress])

  if (!isReady || !ready) {
    return (
      <div className="mt-10 rounded-xl border border-zinc-200/90 bg-white p-8 ring-1 ring-zinc-950/[0.03]">
        <div className="flex animate-pulse flex-col gap-3">
          <div className="h-4 w-48 rounded bg-zinc-100" />
          <div className="h-24 rounded-lg bg-zinc-100" />
          <div className="h-40 rounded-lg bg-zinc-100" />
        </div>
      </div>
    )
  }

  return (
    <div className="mt-10">
      <div className="rounded-xl border border-zinc-200/90 bg-white p-5 shadow-sm ring-1 ring-zinc-950/[0.03] sm:p-6">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">Progress summary</h2>
        <dl className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <dt className="text-xs font-medium text-zinc-500">Studies completed</dt>
            <dd className="mt-1 text-lg font-semibold tabular-nums text-zinc-900">
              {stats.studiesCompleted}
              <span className="text-sm font-normal text-zinc-500"> of {stats.total}</span>
            </dd>
          </div>
          <div>
            <dt className="text-xs font-medium text-zinc-500">Recommended next</dt>
            <dd className="mt-1 text-sm font-medium leading-snug text-zinc-900">
              {stats.allDone
                ? 'You have finished every study on this path.'
                : stats.currentTitle ?? 'Choose your first study below.'}
            </dd>
          </div>
          <div>
            <dt className="text-xs font-medium text-zinc-500">Available studies</dt>
            <dd className="mt-1 text-lg font-semibold tabular-nums text-zinc-900">{stats.total}</dd>
          </div>
          <div>
            <dt className="text-xs font-medium text-zinc-500">Estimated time</dt>
            <dd className="mt-1 text-lg font-semibold tabular-nums text-zinc-900">
              {stats.total === 0 ? '—' : `${stats.minutesTotal} min`}
            </dd>
          </div>
        </dl>
      </div>

      <div className="mt-12">
        <h2 className="text-base font-semibold text-zinc-900">Foundations Path Map</h2>
        <p className="mt-1 text-sm text-zinc-600">Walk these studies in order at your own pace.</p>

        <div className="relative mt-8 pl-2">
          <div className="absolute bottom-4 left-[21px] top-4 w-px bg-zinc-200" aria-hidden />

          <ul className="relative flex flex-col gap-10">
            {studies.map((series, index) => {
              const lessonsDone = series.lessons.filter((l) =>
                progress.completedKeys.includes(`${series.slug}::${l.slug}`),
              ).length
              const complete = isStudyFullyComplete(series, progress)
              const current = currentFoundationStudy(studies, progress)
              const isCurrent = !complete && current?.slug === series.slug
              const startedElsewhere =
                isStudyStarted(series, progress) && !complete && !isCurrent && lessonsDone > 0

              const status: 'completed' | 'current' | 'not_started' = complete
                ? 'completed'
                : isCurrent
                  ? 'current'
                  : 'not_started'

              const nextLesson = firstIncompleteLesson(series, progress)
              const sortedLessons = [...series.lessons].sort((a, b) => a.sortOrder - b.sortOrder)
              const firstLesson = sortedLessons[0]
              const line = purposeLine(series)

              const continueHref =
                nextLesson != null ? `/study-library/${series.slug}/lesson/${nextLesson.slug}` : `/study-library/${series.slug}`
              const startHref =
                firstLesson != null
                  ? `/study-library/${series.slug}/lesson/${firstLesson.slug}`
                  : `/study-library/${series.slug}`
              const reviewHref = `/study-library/${series.slug}`

              let ctaLabel = 'Start study'
              let ctaHref = startHref
              if (complete) {
                ctaLabel = 'Review'
                ctaHref = reviewHref
              } else if (isCurrent || startedElsewhere) {
                ctaLabel = 'Continue'
                ctaHref = continueHref
              }

              const minutes = studyEstimatedMinutes(series)

              const tileRing =
                isCurrent && !complete
                  ? 'ring-2 ring-blue-800/25 shadow-[0_0_0_1px_rgba(30,64,175,0.08)]'
                  : 'ring-1 ring-zinc-950/[0.04]'

              return (
                <li key={series.slug} className="relative flex gap-4">
                  <div className="relative z-[1] flex shrink-0 flex-col items-center pt-0.5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-900 shadow-sm">
                      {complete ? (
                        <CheckIcon className="text-emerald-700" />
                      ) : (
                        <span className="text-sm font-semibold tabular-nums">{index + 1}</span>
                      )}
                    </div>
                  </div>

                  <article
                    className={`min-w-0 flex-1 rounded-xl border border-zinc-200/90 bg-white p-5 shadow-sm ${tileRing}`}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Study {index + 1}</p>
                      <StatusBadge status={status} />
                    </div>
                    <h3 className="mt-2 text-lg font-semibold tracking-tight text-zinc-900">{series.title}</h3>
                    {line ? <p className="mt-2 text-sm leading-relaxed text-zinc-600">{line}</p> : null}
                    <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-zinc-500">
                      <span>{series.lessons.length} lessons</span>
                      <span>{minutes > 0 ? `~${minutes} min` : series.durationSummary}</span>
                      <span className="text-zinc-500">
                        Progress: {lessonsDone}/{series.lessons.length}
                      </span>
                    </div>
                    {startedElsewhere ? (
                      <p className="mt-2 text-xs text-zinc-500">You have saved progress in this study.</p>
                    ) : null}
                    <div className="mt-4">
                      <Link
                        href={ctaHref}
                        className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-blue-800 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-900"
                      >
                        {ctaLabel}
                      </Link>
                    </div>
                  </article>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}
