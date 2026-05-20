'use client'

import { Button } from '@/components/ui/Button'
import { useLocalDashboardProgress } from '@/hooks/useLocalDashboardProgress'
import {
  completedFoundationStudyCount,
  currentFoundationStudy,
} from '@/lib/foundation-path'
import {
  SUMMARY_CARD_ACTIONS_CLASS,
  SUMMARY_CARD_RECOMMENDED_NEXT_CLASS,
  SUMMARY_CARD_ROW_CLASS,
} from '@/components/study-library/summary-card-shared'
import { STUDY_TRACKS } from '@/lib/study-tracks'
import type { StudySeries } from '@/lib/types/product'

const foundationsTrack = STUDY_TRACKS[0]

interface FoundationsSummaryCardProps {
  orderedList: StudySeries[]
}

/** Foundations track summary for Study Library (browse lives on /study-library/foundations). */
export function FoundationsSummaryCard({ orderedList }: FoundationsSummaryCardProps) {
  const progress = useLocalDashboardProgress()

  const completed = completedFoundationStudyCount(orderedList, progress)
  const total = orderedList.length
  const current = currentFoundationStudy(orderedList, progress)
  const allDone = total > 0 && completed >= total

  const recommendedTitle =
    total === 0 ? null : allDone ? 'Every study complete' : (current?.title ?? null)

  return (
    <div className="min-w-0 max-w-full rounded-xl border border-zinc-200/90 bg-white p-4 shadow-sm ring-1 ring-zinc-950/[0.03] sm:p-5">
      <div className={SUMMARY_CARD_ROW_CLASS}>
        <div className="min-w-0 flex-1 overflow-hidden">
          <h3 className="text-base font-semibold tracking-tight text-zinc-900">
            {foundationsTrack.summaryCardTitle}
          </h3>
          <p className="mt-1 max-w-xl text-sm leading-relaxed text-zinc-600">
            {foundationsTrack.summaryDescription}
          </p>
          <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-3 sm:gap-4">
            <div className="min-w-0">
              <dt className="text-xs font-medium text-zinc-500">Studies available</dt>
              <dd className="mt-0.5 font-semibold tabular-nums text-zinc-900">{total}</dd>
            </div>
            <div className="min-w-0">
              <dt className="text-xs font-medium text-zinc-500">Completed</dt>
              <dd className="mt-0.5 font-semibold tabular-nums text-zinc-900">
                {completed} / {total}
              </dd>
            </div>
            <div className="min-w-0 sm:col-span-1">
              <dt className="text-xs font-medium text-zinc-500">Recommended next</dt>
              <dd className={SUMMARY_CARD_RECOMMENDED_NEXT_CLASS}>{recommendedTitle ?? '—'}</dd>
            </div>
          </dl>
        </div>
        <div className={SUMMARY_CARD_ACTIONS_CLASS}>
          <Button
            href={foundationsTrack.pathHref}
            className="min-h-[44px] w-full justify-center px-4 text-center text-sm lg:w-full"
          >
            {foundationsTrack.pathOpenCta}
          </Button>
          <Button
            href={foundationsTrack.browseHref}
            variant="secondary"
            className="min-h-[44px] w-full justify-center px-4 text-center text-sm lg:w-full"
          >
            {foundationsTrack.browseCta}
          </Button>
        </div>
      </div>
    </div>
  )
}
