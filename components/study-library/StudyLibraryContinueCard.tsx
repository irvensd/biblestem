'use client'

import { useMemo } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { useLocalDashboardProgress } from '@/hooks/useLocalDashboardProgress'
import { computeActiveStudy } from '@/lib/dashboard-compute'
import { hasMeaningfulProgress } from '@/lib/dashboard-progress-metrics'
import type { StudyPath, StudySeries } from '@/lib/types/product'

interface StudyLibraryContinueCardProps {
  allSeries: StudySeries[]
  paths: StudyPath[]
}

/** Continue studying or a compact start prompt for the Study Library sidebar. */
export function StudyLibraryContinueCard({ allSeries, paths }: StudyLibraryContinueCardProps) {
  const progress = useLocalDashboardProgress()

  const catalog = useMemo(() => ({ source: 'mock' as const, paths, allSeries }), [paths, allSeries])

  const active = useMemo(() => computeActiveStudy(catalog, progress), [catalog, progress])

  if (!active || !hasMeaningfulProgress(progress)) {
    return (
      <section className="rounded-xl border border-zinc-200/90 bg-white p-4 shadow-sm ring-1 ring-zinc-950/[0.03] sm:p-5">
        <h2 className="text-sm font-semibold tracking-tight text-zinc-900">Start studying</h2>
        <p className="mt-2 text-sm leading-relaxed text-zinc-600">Begin with the Foundations Path.</p>
        <div className="mt-4">
          <Button href="/paths/foundations" className="w-full justify-center text-sm">
            Open Foundations Path
          </Button>
        </div>
      </section>
    )
  }

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
