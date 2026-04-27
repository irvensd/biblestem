import Link from 'next/link'
import type { ReactNode } from 'react'
import { Button } from '@/components/ui/Button'
import type { StudyLevel } from '@/lib/types/product'
import { StudySummaryCard } from '@/components/studies/StudySummaryCard'

interface StudyOverviewHeroProps {
  studyTitle: string
  subtitle: string
  level: StudyLevel
  pathLabel: string
  pathSlug: string
  durationSummary: string
  lessonCount: number
  estimatedMinutes: number
  primaryCtaHref: string
  primaryCtaLabel: string
  progressPercent: number
  currentLessonTitle: string | null
  seriesComplete: boolean
  /** Auth-aware line under CTAs (sign-in prompt vs signed-in reassurance). */
  progressAccountHint: ReactNode | null
}

export function StudyOverviewHero({
  studyTitle,
  subtitle,
  level,
  pathLabel,
  pathSlug,
  durationSummary,
  lessonCount,
  estimatedMinutes,
  primaryCtaHref,
  primaryCtaLabel,
  progressPercent,
  currentLessonTitle,
  seriesComplete,
  progressAccountHint,
}: StudyOverviewHeroProps) {
  return (
    <section className="border-b border-zinc-200/80 bg-stone-50 pb-12 pt-10 md:pb-16 md:pt-14">
      <div className="container-shell max-w-5xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_min(380px,100%)] lg:items-start lg:gap-12">
          <div>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-full border border-zinc-200/90 bg-white px-3 py-1 text-xs font-medium text-zinc-700">
                {level}
              </span>
              <Link
                href={`/paths/${pathSlug}`}
                className="inline-flex items-center rounded-full border border-zinc-200/90 bg-white px-3 py-1 text-xs font-medium text-zinc-700 transition-colors hover:border-zinc-300 hover:text-zinc-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800"
              >
                {pathLabel}
              </Link>
            </div>
            <h1 className="mt-5 text-3xl font-semibold tracking-tight text-zinc-900 md:text-[2rem] md:leading-tight">
              {studyTitle}
            </h1>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-zinc-600">{subtitle}</p>
            <p className="mt-4 text-sm text-zinc-500">
              {lessonCount} lessons · {durationSummary}
            </p>
            <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href={primaryCtaHref} className="w-full sm:w-auto">
                {primaryCtaLabel}
              </Button>
              <Button href="/study-library" variant="secondary" className="w-full sm:w-auto">
                Back to library
              </Button>
            </div>
            {progressAccountHint ? <div className="mt-5">{progressAccountHint}</div> : null}
          </div>
          <StudySummaryCard
            lessonCount={lessonCount}
            estimatedMinutes={estimatedMinutes}
            level={level}
            pathLabel={pathLabel}
            progressPercent={progressPercent}
            currentLessonTitle={currentLessonTitle}
            seriesComplete={seriesComplete}
          />
        </div>
      </div>
    </section>
  )
}
