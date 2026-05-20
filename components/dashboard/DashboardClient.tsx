'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useMemo } from 'react'
import { useDemoAuth } from '@/components/auth/DemoAuthProvider'
import { DashboardHeader } from '@/components/dashboard/DashboardHeader'
import { DashboardStatsRow } from '@/components/dashboard/DashboardStatsRow'
import { ExploreNext } from '@/components/dashboard/ExploreNext'
import { FoundationsProgressCard } from '@/components/dashboard/FoundationsProgressCard'
import { QuickActions } from '@/components/dashboard/QuickActions'
import { TodaysStudyCard } from '@/components/dashboard/TodaysStudyCard'
import { CatalogSourceNotice } from '@/components/site/CatalogSourceNotice'
import { buildDashboardBundle, type DashboardBundle } from '@/lib/dashboard-compute'
import { getDashboardRecommendations } from '@/lib/dashboard-recommendations'
import { dashboardDisplayName } from '@/lib/dashboard-mock-data'
import { shouldShowCatalogFallbackNotice, type LoadedCatalog } from '@/lib/catalog/load-catalog'
import { hasMeaningfulProgress } from '@/lib/dashboard-progress-metrics'
import type { StudyPath } from '@/lib/types/product'
import { useDashboardProgress } from '@/hooks/useDashboardProgress'

interface DashboardClientProps {
  catalog: LoadedCatalog
  studyPaths?: StudyPath[]
}

export function DashboardClient({ catalog }: DashboardClientProps) {
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

  const exploreStudies = useMemo(
    () => getDashboardRecommendations(catalog, progress, bundle.activeStudy),
    [catalog, progress, bundle.activeStudy],
  )

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
    bundle.activeStudy?.continueHref ??
    (hasMeaningfulProgress(progress) ? '/study-library' : '/study-library/god-is-love/lesson/the-logic-of-love?step=0')

  const showExploreNoSuggestions =
    exploreStudies.length === 0 && hasMeaningfulProgress(progress)

  return (
    <>
      <section className="border-b border-zinc-200/80 bg-stone-50 pb-6 pt-14 md:pb-8 md:pt-16">
        <div className="container-shell">
          <DashboardHeader userName={name} />
          <div className="mt-6 max-w-4xl">
            <DashboardStatsRow progress={bundle.progress} />
          </div>
          {shouldShowCatalogFallbackNotice(catalog) ? (
            <div className="mt-3 max-w-xl">
              <CatalogSourceNotice source={catalog.source} />
            </div>
          ) : null}
        </div>
      </section>

      <div className="pb-14 pt-6 md:pb-16 md:pt-8">
        <div className="container-shell">
          <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,7fr)_minmax(0,3fr)] lg:gap-8 xl:gap-10">
            <div className="flex min-w-0 flex-col gap-6">
              <TodaysStudyCard active={bundle.activeStudy} allLessonsComplete={bundle.allLessonsComplete} />
              <div className="lg:hidden">
                <FoundationsProgressCard progress={bundle.foundationsProgress} />
              </div>
              <ExploreNext studies={exploreStudies} showNoSuggestionsEmpty={showExploreNoSuggestions} />
              <div className="lg:hidden">
                <QuickActions resumeHref={resumeHref} />
              </div>
            </div>

            <aside className="hidden flex-col gap-5 lg:sticky lg:top-24 lg:flex">
              <FoundationsProgressCard progress={bundle.foundationsProgress} />
              <QuickActions resumeHref={resumeHref} />
            </aside>
          </div>
        </div>
      </div>
    </>
  )
}
