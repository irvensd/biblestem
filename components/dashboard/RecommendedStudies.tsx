import { StudyCard } from '@/components/study/StudyCard'
import { getSeriesBySlug } from '@/lib/product-queries'
import type { StudySeries } from '@/lib/types/product'

interface RecommendedStudiesProps {
  slugs: string[]
}

export function RecommendedStudies({ slugs }: RecommendedStudiesProps) {
  const list: StudySeries[] = []
  for (const slug of slugs) {
    const s = getSeriesBySlug(slug)
    if (s) list.push(s)
  }

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
          <StudyCard key={study.slug} study={study} />
        ))}
      </div>
    </section>
  )
}
