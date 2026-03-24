'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useDemoAuth } from '@/components/auth/DemoAuthProvider'
import { ContinueStudyCard } from '@/components/dashboard/ContinueStudyCard'
import { DashboardHeader } from '@/components/dashboard/DashboardHeader'
import { NotesPreview } from '@/components/dashboard/NotesPreview'
import { ProgressSummary } from '@/components/dashboard/ProgressSummary'
import { QuickActions } from '@/components/dashboard/QuickActions'
import { RecommendedStudies } from '@/components/dashboard/RecommendedStudies'
import { StudyPaths } from '@/components/dashboard/StudyPaths'
import { TodaysFocusCard } from '@/components/dashboard/TodaysFocusCard'
import { dashboardMock, displayNameFromEmail } from '@/lib/dashboard-mock-data'

export function DashboardClient() {
  const router = useRouter()
  const { user, isReady } = useDemoAuth()

  useEffect(() => {
    if (isReady && !user) {
      router.replace('/sign-in')
    }
  }, [isReady, user, router])

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
    return null
  }

  const name = displayNameFromEmail(user.email)
  const resumeHref =
    dashboardMock.activeStudy != null
      ? `/study-library/${dashboardMock.activeStudy.studySlug}/lesson/${dashboardMock.activeStudy.lessonSlug}`
      : '/study-library'

  return (
    <>
      <section className="border-b border-zinc-200/80 bg-stone-50 pb-12 pt-14 md:pb-16 md:pt-16">
        <div className="container-shell">
          <DashboardHeader userName={name} />
        </div>
      </section>

      <div className="section-space border-b border-transparent">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_17.5rem] lg:items-start lg:gap-14 xl:gap-16">
            <div className="flex flex-col gap-12 lg:gap-14">
              <ContinueStudyCard active={dashboardMock.activeStudy} />
              <RecommendedStudies slugs={dashboardMock.recommendedSlugs} />
              <ProgressSummary progress={dashboardMock.progress} />
              <NotesPreview notes={dashboardMock.notes} />
            </div>

            <aside className="flex flex-col gap-12 lg:sticky lg:top-24">
              <TodaysFocusCard focus={dashboardMock.todayFocus} />
              <StudyPaths paths={dashboardMock.studyPaths} />
              <QuickActions resumeHref={resumeHref} />
            </aside>
          </div>
        </div>
      </div>
    </>
  )
}
