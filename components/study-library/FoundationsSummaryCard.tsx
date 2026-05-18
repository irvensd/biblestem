'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/Button'
import {
  completedFoundationStudyCount,
  currentFoundationStudy,
} from '@/lib/foundation-path'
import { readLocalProgress, type LocalDashboardProgress } from '@/lib/dashboard-local-progress'
import type { StudySeries } from '@/lib/types/product'

interface FoundationsSummaryCardProps {
  orderedList: StudySeries[]
}

/** Foundations Path summary for Study Library (browse lives on /study-library/foundations). */
export function FoundationsSummaryCard({ orderedList }: FoundationsSummaryCardProps) {
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

  const completed = completedFoundationStudyCount(orderedList, progress)
  const total = orderedList.length
  const current = currentFoundationStudy(orderedList, progress)
  const allDone = total > 0 && completed >= total

  const recommendedTitle =
    total === 0 ? null : allDone ? 'Every study complete' : (current?.title ?? null)

  return (
    <div className="min-w-0 max-w-full rounded-xl border border-zinc-200/90 bg-white p-4 shadow-sm ring-1 ring-zinc-950/[0.03] sm:p-5">
      <div className="flex min-w-0 flex-col gap-4 lg:flex-row lg:items-start lg:justify-between lg:gap-6">
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-semibold tracking-tight text-zinc-900">Foundations Path</h3>
          <p className="mt-1 max-w-xl text-sm leading-relaxed text-zinc-600">
            Follow the beginner studies in a clear guided order.
          </p>
          <p className="mt-2 max-w-xl text-xs leading-relaxed text-zinc-500">
            The path keeps these studies in the recommended order.
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
              <dd className="mt-0.5 break-words font-medium leading-snug text-zinc-900">
                {recommendedTitle ?? '—'}
              </dd>
            </div>
          </dl>
        </div>
        <div className="flex w-full min-w-0 shrink-0 flex-col gap-2 lg:w-60 lg:shrink-0">
          <Button href="/paths/foundations" className="min-h-[44px] w-full justify-center px-4 text-center text-sm lg:w-full">
            Open Foundations Path
          </Button>
          <Button
            href="/study-library/foundations"
            variant="secondary"
            className="min-h-[44px] w-full justify-center whitespace-normal px-4 text-center text-sm lg:w-full lg:whitespace-nowrap"
          >
            Browse Foundation Studies
          </Button>
        </div>
      </div>
    </div>
  )
}
