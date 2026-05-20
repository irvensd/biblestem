import { Button } from '@/components/ui/Button'
import type { FoundationsProgressInfo } from '@/lib/dashboard-mock-data'

interface FoundationsProgressCardProps {
  progress: FoundationsProgressInfo
}

export function FoundationsProgressCard({ progress }: FoundationsProgressCardProps) {
  const { completedCount, totalCount, recommendedStudyTitle, nextStudyTitle, progressPercent } = progress

  return (
    <section className="rounded-xl border border-zinc-200/90 bg-white p-4 shadow-sm ring-1 ring-zinc-950/[0.03]">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Foundations Progress</p>

      {totalCount === 0 ? (
        <p className="mt-3 text-sm text-zinc-600">No Foundation studies in the catalog yet.</p>
      ) : (
        <>
          <p className="mt-2 text-2xl font-semibold tabular-nums tracking-tight text-zinc-900">
            {completedCount}
            <span className="text-base font-medium text-zinc-500"> / {totalCount}</span>
          </p>
          <p className="text-xs text-zinc-500">studies completed</p>

          <div className="mt-3 space-y-2 text-sm">
            <div>
              <p className="text-xs font-medium text-zinc-500">Next in Foundations</p>
              <p className="mt-0.5 font-medium leading-snug break-words text-zinc-900">
                {recommendedStudyTitle ?? '—'}
              </p>
            </div>
            {nextStudyTitle ? (
              <div>
                <p className="text-xs font-medium text-zinc-500">After that</p>
                <p className="mt-0.5 leading-snug break-words text-zinc-800">{nextStudyTitle}</p>
              </div>
            ) : null}
          </div>

          <div className="mt-3">
            <div className="flex items-center justify-between gap-2 text-xs text-zinc-500">
              <span>Progress</span>
              <span className="tabular-nums font-medium text-zinc-700">{progressPercent}%</span>
            </div>
            <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-zinc-100">
              <div
                className="h-full rounded-full bg-blue-800/85 transition-[width] duration-300"
                style={{ width: `${Math.min(100, Math.max(0, progressPercent))}%` }}
              />
            </div>
          </div>
        </>
      )}

      <div className="mt-4">
        <Button href="/paths/foundations" className="w-full justify-center px-4 text-sm">
          Open Foundations Path
        </Button>
      </div>
    </section>
  )
}
