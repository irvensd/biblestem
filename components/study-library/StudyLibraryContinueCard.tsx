'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { computeActiveStudy } from '@/lib/dashboard-compute'
import { readLocalProgress, type LocalDashboardProgress } from '@/lib/dashboard-local-progress'
import type { StudyPath, StudySeries } from '@/lib/types/product'

interface StudyLibraryContinueCardProps {
  allSeries: StudySeries[]
  paths: StudyPath[]
}

/** Compact continue-studying card for the Study Library sidebar. */
export function StudyLibraryContinueCard({ allSeries, paths }: StudyLibraryContinueCardProps) {
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

  const active = useMemo(
    () => computeActiveStudy({ source: 'mock', paths, allSeries }, progress),
    [allSeries, paths, progress],
  )

  if (!active) return null

  const continueLabel = active.progressPercent >= 100 ? 'Review lesson' : 'Continue lesson'

  return (
    <section className="rounded-xl border border-zinc-200/90 bg-white p-4 shadow-sm ring-1 ring-zinc-950/[0.03] sm:p-5">
      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-400">Continue studying</p>
      <p className="mt-2 text-xs font-medium text-zinc-500">{active.studyTitle}</p>
      <h3 className="mt-1 text-sm font-semibold leading-snug tracking-tight text-zinc-900">{active.lessonTitle}</h3>
      <div className="mt-4">
        <Button href={active.continueHref} className="w-full justify-center text-sm">
          {continueLabel}
        </Button>
      </div>
      <p className="mt-3 text-center text-xs text-zinc-500">
        <Link className="font-medium text-blue-800 hover:text-blue-900" href="/dashboard">
          Open dashboard
        </Link>
      </p>
    </section>
  )
}
