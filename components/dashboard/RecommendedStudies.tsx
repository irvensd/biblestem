import { StudyCard } from '@/components/study/StudyCard'
import type { StudyPath, StudySeries } from '@/lib/types/product'

interface RecommendedStudiesProps {
  studies: StudySeries[]
  paths?: StudyPath[]
}

export function RecommendedStudies({ studies, paths }: RecommendedStudiesProps) {
  const list = studies

  return (
    <section>
      <div className="mb-6 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Recommended next</p>
          <h2 className="mt-2 text-lg font-semibold tracking-tight text-zinc-900 md:text-xl">Based on your progress</h2>
        </div>
        <p className="text-sm text-zinc-500">Curated for where you are in the library.</p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        {list.map((study) => (
          <StudyCard key={study.slug} study={study} paths={paths} />
        ))}
      </div>
    </section>
  )
}
