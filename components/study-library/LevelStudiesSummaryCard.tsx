'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/Button'
import {
  SUMMARY_CARD_ACTIONS_CLASS,
  SUMMARY_CARD_RECOMMENDED_NEXT_CLASS,
  SUMMARY_CARD_ROW_CLASS,
} from '@/components/study-library/summary-card-shared'
import { completedStudyCount, recommendedNextLabel } from '@/lib/study-library-levels'
import { readLocalProgress, type LocalDashboardProgress } from '@/lib/dashboard-local-progress'
import type { StudySeries } from '@/lib/types/product'

interface LevelStudiesSummaryCardProps {
  title: string
  description: string
  helperCopy?: string
  studies: StudySeries[]
  browseHref: string
  browseLabel: string
  emptyMessage: string
}

/** Summary card for a Study Library level (Intermediate / Advanced). */
export function LevelStudiesSummaryCard({
  title,
  description,
  helperCopy,
  studies,
  browseHref,
  browseLabel,
  emptyMessage,
}: LevelStudiesSummaryCardProps) {
  const [progress, setProgress] = useState<LocalDashboardProgress>(() => readLocalProgress())

  useEffect(() => {
    function refresh() {
      setProgress(readLocalProgress())
    }
    refresh()
    window.addEventListener('storage', refresh)
    window.addEventListener('biblestem-progress', refresh)
    return () => {
      window.removeEventListener('storage', refresh)
      window.removeEventListener('biblestem-progress', refresh)
    }
  }, [])

  const total = studies.length
  const completed = completedStudyCount(studies, progress)
  const recommended = recommendedNextLabel(studies, progress)
  const isEmpty = total === 0

  return (
    <div className="min-w-0 max-w-full rounded-xl border border-zinc-200/90 bg-white p-4 shadow-sm ring-1 ring-zinc-950/[0.03] sm:p-5">
      <div className={SUMMARY_CARD_ROW_CLASS}>
        <div className="min-w-0 flex-1 overflow-hidden">
          <h3 className="text-base font-semibold tracking-tight text-zinc-900">{title}</h3>
          <p className="mt-1 max-w-xl text-sm leading-relaxed text-zinc-600">{description}</p>
          {helperCopy ? (
            <p className="mt-2 max-w-xl text-xs leading-relaxed text-zinc-500">{helperCopy}</p>
          ) : null}
          {isEmpty ? (
            <p className="mt-4 text-sm text-zinc-500">{emptyMessage}</p>
          ) : (
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
                <dd className={SUMMARY_CARD_RECOMMENDED_NEXT_CLASS}>{recommended ?? '—'}</dd>
              </div>
            </dl>
          )}
        </div>
        <div className={SUMMARY_CARD_ACTIONS_CLASS}>
          <Button
            href={isEmpty ? undefined : browseHref}
            disabled={isEmpty}
            className="min-h-[44px] w-full justify-center px-4 text-center text-sm lg:w-full"
          >
            {browseLabel}
          </Button>
        </div>
      </div>
    </div>
  )
}
