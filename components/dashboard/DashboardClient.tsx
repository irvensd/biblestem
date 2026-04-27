'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useMemo } from 'react'
import { useDemoAuth } from '@/components/auth/DemoAuthProvider'
import { ContinueStudyCard } from '@/components/dashboard/ContinueStudyCard'
import { DashboardHeader } from '@/components/dashboard/DashboardHeader'
import { NotesPreview } from '@/components/dashboard/NotesPreview'
import { ProgressSummary } from '@/components/dashboard/ProgressSummary'
import { QuickActions } from '@/components/dashboard/QuickActions'
import { RecommendedStudies } from '@/components/dashboard/RecommendedStudies'
import { StudyPaths } from '@/components/dashboard/StudyPaths'
import { TodaysFocusCard } from '@/components/dashboard/TodaysFocusCard'
import { CatalogSourceNotice } from '@/components/site/CatalogSourceNotice'
import { buildDashboardBundle, type DashboardBundle } from '@/lib/dashboard-compute'
import { dashboardDisplayName } from '@/lib/dashboard-mock-data'
import { shouldShowCatalogFallbackNotice, type LoadedCatalog } from '@/lib/catalog/load-catalog'
import { persistTouchDashboardActivity } from '@/lib/dashboard-progress-sync'
import type { StudyPath, StudySeries } from '@/lib/types/product'
import { useDashboardProgress } from '@/hooks/useDashboardProgress'

interface DashboardClientProps {
  catalog: LoadedCatalog
  recommendedStudies: StudySeries[]
  studyPaths?: StudyPath[]
}

export function DashboardClient({ catalog, recommendedStudies, studyPaths }: DashboardClientProps) {
  const router = useRouter()
  const { user, isReady } = useDemoAuth()
  const { progress, ready: progressReady } = useDashboardProgress(user?.id)

  useEffect(() => {
    if (isReady && !user) {
      router.replace('/')
    }
  }, [isReady, user, router])

  const bundle: DashboardBundle = useMemo(
    () => buildDashboardBundle(catalog, progress),
    [catalog, progress],
  )

  useEffect(() => {
    if (!isReady || !user) return
    void persistTouchDashboardActivity(user.id)
  }, [isReady, user])

  if (!isReady) {
    return (
      <div className="min-h-[60vh] border-b border-zinc-200/80 bg-stone-50">
        <div className="container-shell py-16">
          <div className="h-8 w-48 animate-pulse rounded-lg bg-zinc-200/80" />
          <div className="mt-6 h-12 max-w-md animate-pulse rounded-lg bg-zinc-200/80" />
          <div className="mt-10 h-40 animate-pulse rounded-xl bg-zinc-200/60" />
        </div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-[40vh] border-b border-zinc-200/80 bg-stone-50">
        <div className="container-shell py-16">
          <p className="text-sm text-zinc-600">Redirecting…</p>
        </div>
      </div>
    )
  }

  if (!progressReady) {
    return (
      <div className="min-h-[60vh] border-b border-zinc-200/80 bg-stone-50">
        <div className="container-shell py-16">
          <div className="h-8 w-48 animate-pulse rounded-lg bg-zinc-200/80" />
          <div className="mt-6 h-12 max-w-md animate-pulse rounded-lg bg-zinc-200/80" />
          <div className="mt-10 h-40 animate-pulse rounded-xl bg-zinc-200/60" />
        </div>
      </div>
    )
  }

  const name = dashboardDisplayName(user.email, user.firstName)
  const resumeHref =
    bundle.activeStudy != null
      ? `/study-library/${bundle.activeStudy.studySlug}/lesson/${bundle.activeStudy.lessonSlug}`
      : '/study-library'

  return (
    <>
      <section className="border-b border-zinc-200/80 bg-stone-50 pb-12 pt-14 md:pb-16 md:pt-16">
        <div className="container-shell">
          <DashboardHeader userName={name} headerStats={bundle.headerStats} />
          {shouldShowCatalogFallbackNotice(catalog) ? (
            <div className="mt-4 max-w-xl">
              <CatalogSourceNotice source={catalog.source} />
            </div>
          ) : null}
        </div>
      </section>

      <div className="section-space border-b border-transparent">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_17.5rem] lg:items-start lg:gap-14 xl:gap-16">
            <div className="flex flex-col gap-12 lg:gap-14">
              <ContinueStudyCard active={bundle.activeStudy} allLessonsComplete={bundle.allLessonsComplete} />
              <RecommendedStudies studies={recommendedStudies} paths={studyPaths} />
              <ProgressSummary progress={bundle.progress} />
              <NotesPreview notes={bundle.notes} />
            </div>

            <aside className="flex flex-col gap-12 lg:sticky lg:top-24">
              <TodaysFocusCard focus={bundle.todayFocus} />
              <StudyPaths paths={bundle.studyPathsNav} />
              <QuickActions resumeHref={resumeHref} />
            </aside>
          </div>
        </div>
      </div>
    </>
  )
}
