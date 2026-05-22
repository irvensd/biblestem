'use client'

import Link from 'next/link'
import { useDemoAuth } from '@/components/auth/DemoAuthProvider'
import { signUpRedirectUrl } from '@/lib/auth/auth-redirect'
import { getPathNameForSeries } from '@/lib/product-queries'
import { effectiveStudySeriesMinutes, formatStudyTotalDurationLabel } from '@/lib/studies/derive-overview'
import { getStudyLibrarySummaryLine } from '@/lib/study-summary-line'
import type { StudyPath, StudySeries } from '@/lib/types/product'

interface StudyPreviewCardProps {
  study: StudySeries
  paths?: StudyPath[]
}

/** Public preview card — Start free routes to sign-up or the authenticated study overview. */
export function StudyPreviewCard({ study, paths }: StudyPreviewCardProps) {
  const { user, isReady } = useDemoAuth()
  const trackLabel = getPathNameForSeries(study, paths)
  const cardTeaser = getStudyLibrarySummaryLine(study)
  const durationLabel = formatStudyTotalDurationLabel(effectiveStudySeriesMinutes(study))
  const overviewHref = `/study-library/${study.slug}`
  const ctaHref = isReady && user ? overviewHref : signUpRedirectUrl(overviewHref)

  return (
    <article className="flex h-full min-w-0 max-w-full flex-col rounded-xl border border-zinc-200/90 bg-white p-6 shadow-sm ring-1 ring-zinc-950/[0.03]">
      <div className="mb-3 h-1 w-10 rounded-full bg-blue-800/60" />
      <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">{trackLabel}</p>
      <h3 className="mt-2 text-lg font-semibold tracking-tight text-zinc-900">{study.title}</h3>
      <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-zinc-600">{cardTeaser}</p>
      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-1 text-xs text-zinc-500">
        <span>{study.lessonsCount} lessons</span>
        <span>{durationLabel}</span>
      </div>
      <Link
        href={ctaHref}
        className="mt-5 inline-flex min-h-[44px] items-center text-sm font-medium text-blue-800 hover:text-blue-900"
      >
        Start free
      </Link>
    </article>
  )
}
