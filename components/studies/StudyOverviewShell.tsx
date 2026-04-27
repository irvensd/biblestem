'use client'

import { useEffect, useMemo, useSyncExternalStore } from 'react'
import Link from 'next/link'
import { CatalogSourceNotice } from '@/components/site/CatalogSourceNotice'
import { Button } from '@/components/ui/Button'
import { StudyOverviewHero } from '@/components/studies/StudyOverviewHero'
import { WhatYouWillLearn } from '@/components/studies/WhatYouWillLearn'
import { LessonList } from '@/components/studies/LessonList'
import { RelatedStudies } from '@/components/studies/RelatedStudies'
import { useDemoAuth } from '@/components/auth/DemoAuthProvider'
import { hydrateLocalProgressFromSupabase } from '@/lib/dashboard-progress-sync'
import {
  DASHBOARD_PROGRESS_STORAGE_KEY,
  emptyLocalProgress,
  lessonKey,
  readLocalProgress,
} from '@/lib/dashboard-local-progress'
import {
  allLessonsCompleted,
  computeSeriesProgressPercent,
  getPrimaryAction,
  lessonOverviewStatus,
  primaryCtaHref,
  primaryCtaLabel,
} from '@/lib/studies/progress'
import type { CatalogSource } from '@/lib/catalog/load-catalog'
import type { StudyOverviewStatic } from '@/lib/studies/types'
import type { StudyPath, StudySeries } from '@/lib/types/product'

interface StudyOverviewShellProps {
  overview: StudyOverviewStatic
  relatedStudies: StudySeries[]
  studyPaths: StudyPath[]
  showCatalogFallback: boolean
  catalogSource: CatalogSource
}

let progressSnapshotCache: ReturnType<typeof readLocalProgress> = emptyLocalProgress()
let progressSnapshotJson = ''

/** Stable snapshot for `useSyncExternalStore` (referential equality when storage unchanged). */
function getProgressSnapshot(): ReturnType<typeof readLocalProgress> {
  const next = readLocalProgress()
  const j = JSON.stringify(next)
  if (j !== progressSnapshotJson) {
    progressSnapshotJson = j
    progressSnapshotCache = next
  }
  return progressSnapshotCache
}

function subscribeProgress(onStoreChange: () => void): () => void {
  const onStorage = (e: StorageEvent) => {
    if (e.key === DASHBOARD_PROGRESS_STORAGE_KEY || e.key === null) onStoreChange()
  }
  const onCustom = () => onStoreChange()
  if (typeof window === 'undefined') return () => {}
  window.addEventListener('storage', onStorage)
  window.addEventListener('biblestem-progress', onCustom)
  return () => {
    window.removeEventListener('storage', onStorage)
    window.removeEventListener('biblestem-progress', onCustom)
  }
}

function currentLessonTitleFromProgress(
  overview: StudyOverviewStatic,
  p: ReturnType<typeof readLocalProgress>,
): string | null {
  if (allLessonsCompleted(overview.seriesSlug, overview.lessons, p)) return null
  const last = p.lastLesson
  if (last?.seriesSlug !== overview.seriesSlug) return null
  const match = overview.lessons.find((l) => l.slug === last.lessonSlug)
  if (!match) return null
  if (p.completedKeys.includes(lessonKey(overview.seriesSlug, match.slug))) return null
  return match.title
}

export function StudyOverviewShell({
  overview,
  relatedStudies,
  studyPaths,
  showCatalogFallback,
  catalogSource,
}: StudyOverviewShellProps) {
  const { user, isReady } = useDemoAuth()
  const progress = useSyncExternalStore(subscribeProgress, getProgressSnapshot, emptyLocalProgress)

  useEffect(() => {
    if (!user?.id) return
    void hydrateLocalProgressFromSupabase(user.id)
  }, [user?.id])

  const progressPercent = useMemo(
    () => computeSeriesProgressPercent(overview.seriesSlug, overview.lessons, progress),
    [overview.lessons, overview.seriesSlug, progress],
  )

  const seriesComplete = useMemo(
    () => allLessonsCompleted(overview.seriesSlug, overview.lessons, progress),
    [overview.lessons, overview.seriesSlug, progress],
  )

  const primaryAction = useMemo(
    () => getPrimaryAction(overview.seriesSlug, overview.lessons, progress),
    [overview.lessons, overview.seriesSlug, progress],
  )

  const heroHref = useMemo(
    () => primaryCtaHref(primaryAction, overview.seriesSlug, overview.lessons, progress),
    [overview.lessons, overview.seriesSlug, primaryAction, progress],
  )

  const heroLabel = primaryCtaLabel(primaryAction)

  const currentLessonTitle = useMemo(
    () => currentLessonTitleFromProgress(overview, progress),
    [overview, progress],
  )

  const getStatus = (slug: string) => lessonOverviewStatus(overview.seriesSlug, slug, progress)

  const progressAccountHint = useMemo(() => {
    if (!isReady) return null
    if (user?.id) {
      return (
        <p className="text-sm text-zinc-500">
          You&apos;re signed in. Lesson progress updates your account when you study while logged in.
        </p>
      )
    }
    if (user) {
      return (
        <p className="text-sm text-zinc-500">
          You&apos;re signed in. Progress is still stored on this device for now.
        </p>
      )
    }
    return (
      <p className="text-sm text-zinc-500">
        <Link
          href="/sign-in"
          className="font-medium text-blue-800 underline-offset-2 hover:text-blue-900 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800"
        >
          Sign in
        </Link>{' '}
        to save progress across devices when available.
      </p>
    )
  }, [isReady, user])

  return (
    <>
      {showCatalogFallback ? (
        <div className="border-b border-amber-200/50 bg-amber-50/40">
          <div className="container-shell py-2.5">
            <div className="max-w-xl">
              <CatalogSourceNotice source={catalogSource} />
            </div>
          </div>
        </div>
      ) : null}

      <nav aria-label="Breadcrumb" className="border-b border-zinc-200/80 bg-stone-50">
        <div className="container-shell max-w-5xl py-3 text-sm text-zinc-600">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <li>
              <Link
                href="/study-library"
                className="font-medium text-blue-800 hover:text-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800"
              >
                Study Library
              </Link>
            </li>
            <li className="text-zinc-400" aria-hidden>
              /
            </li>
            <li className="text-zinc-900">{overview.title}</li>
          </ol>
        </div>
      </nav>

      {seriesComplete ? (
        <div className="border-b border-zinc-200/80 bg-white">
          <div className="container-shell max-w-5xl py-8">
            <div className="rounded-xl border border-zinc-200/90 bg-stone-50/80 p-6 ring-1 ring-zinc-950/[0.03] md:p-8">
              <h2 className="text-lg font-semibold tracking-tight text-zinc-900">Study complete</h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                You have completed {overview.title}.
              </p>
              <div className="mt-6 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button href={`#lessons`} className="w-full sm:w-auto">
                  Review lessons
                </Button>
                <Button href="/study-library" variant="secondary" className="w-full sm:w-auto">
                  Explore related studies
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <StudyOverviewHero
        studyTitle={overview.title}
        subtitle={overview.subtitle}
        level={overview.level}
        pathLabel={overview.pathLabel}
        pathSlug={overview.pathSlug}
        durationSummary={overview.durationSummary}
        lessonCount={overview.lessonCount}
        estimatedMinutes={overview.estimatedMinutes}
        primaryCtaHref={heroHref}
        primaryCtaLabel={heroLabel}
        progressPercent={progressPercent}
        currentLessonTitle={currentLessonTitle}
        seriesComplete={seriesComplete}
        progressAccountHint={progressAccountHint}
      />

      <div className="bg-[#fafaf9] pb-16 pt-12 md:pb-20 md:pt-14">
        <div className="container-shell max-w-3xl space-y-14 md:space-y-16">
          <section>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">About this study</h2>
            <p className="mt-4 text-base leading-[1.75] text-zinc-700">{overview.longDescription}</p>
            <p className="mt-4 text-sm text-zinc-500">
              For: readers who want a calm, Scripture-first pace. Take it as slowly as you need.
            </p>
          </section>

          <WhatYouWillLearn items={overview.whatYouWillLearn} />

          <section id="lessons" className="scroll-mt-8">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
              Lessons in this study
            </h2>
            <div className="mt-6">
              <LessonList studySlug={overview.seriesSlug} lessons={overview.lessons} getStatus={getStatus} />
            </div>
          </section>
        </div>

        <div className="container-shell mt-16 max-w-5xl md:mt-20">
          <RelatedStudies studies={relatedStudies} paths={studyPaths} />
        </div>
      </div>
    </>
  )
}
