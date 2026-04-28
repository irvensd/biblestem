'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useMemo } from 'react'
import { useDemoAuth } from '@/components/auth/DemoAuthProvider'
import { ContinueStudyCard } from '@/components/dashboard/ContinueStudyCard'
import { CurrentPathCard } from '@/components/dashboard/CurrentPathCard'
import { DashboardHeader } from '@/components/dashboard/DashboardHeader'
import { DashboardStatsRow } from '@/components/dashboard/DashboardStatsRow'
import { NotesPreview } from '@/components/dashboard/NotesPreview'
import { QuickActions } from '@/components/dashboard/QuickActions'
import { RecommendedStudies } from '@/components/dashboard/RecommendedStudies'
import { TodaysFocusCard } from '@/components/dashboard/TodaysFocusCard'
import { CatalogSourceNotice } from '@/components/site/CatalogSourceNotice'
import { buildDashboardBundle, type DashboardBundle } from '@/lib/dashboard-compute'
import { getDashboardRecommendations } from '@/lib/dashboard-recommendations'
import { dashboardDisplayName } from '@/lib/dashboard-mock-data'
import { shouldShowCatalogFallbackNotice, type LoadedCatalog } from '@/lib/catalog/load-catalog'
import { persistTouchDashboardActivity } from '@/lib/dashboard-progress-sync'
import type { StudyPath, StudySeries } from '@/lib/types/product'
import { useDashboardProgress } from '@/hooks/useDashboardProgress'
import { useDashboardRecentNotes } from '@/hooks/useDashboardRecentNotes'

interface DashboardClientProps {
  catalog: LoadedCatalog
  studyPaths?: StudyPath[]
}

export function DashboardClient({ catalog, studyPaths: pathsProp }: DashboardClientProps) {
  const paths = pathsProp ?? catalog.paths
  const router = useRouter()
  const { user, isReady } = useDemoAuth()
  const { progress, ready: progressReady } = useDashboardProgress(user?.id)

  useEffect(() => {
    if (isReady && !user) {
      router.replace('/')
    }
  }, [isReady, user, router])

  const recentNotes = useDashboardRecentNotes(catalog, user?.id)

  const bundle: DashboardBundle = useMemo(
    () => buildDashboardBundle(catalog, progress),
    [catalog, progress],
  )

  const recommended: StudySeries[] = useMemo(
    () => getDashboardRecommendations(catalog, progress, bundle.activeStudy),
    [catalog, progress, bundle.activeStudy],
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
      ? bundle.activeStudy.continueHref
      : '/study-library/god-is-love/lesson/the-logic-of-love?step=0'
  return (
    <>
      <section className="border-b border-zinc-200/80 bg-stone-50 pb-10 pt-14 md:pb-12 md:pt-16">
        <div className="container-shell">
          <DashboardHeader userName={name} />
          <div className="mt-8 max-w-4xl">
            <DashboardStatsRow progress={bundle.progress} />
          </div>
          {shouldShowCatalogFallbackNotice(catalog) ? (
            <div className="mt-4 max-w-xl">
              <CatalogSourceNotice source={catalog.source} />
            </div>
          ) : null}
        </div>
      </section>

      <div className="section-space border-b border-transparent">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start lg:gap-12 xl:gap-14">
            <div className="flex flex-col gap-10">
              <ContinueStudyCard active={bundle.activeStudy} allLessonsComplete={bundle.allLessonsComplete} />
              <RecommendedStudies studies={recommended} paths={paths} />
              <NotesPreview notes={recentNotes} />
            </div>

            <aside className="flex flex-col gap-8 lg:sticky lg:top-24">
              <TodaysFocusCard focus={bundle.todayFocus} />
              <CurrentPathCard current={bundle.currentPath} />
              <QuickActions resumeHref={resumeHref} />
            </aside>
          </div>
        </div>
      </div>
    </>
  )
}
