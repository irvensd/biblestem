import { StudyCard } from '@/components/study/StudyCard'
import { SectionHeading } from '@/components/site/SectionHeading'
import type { StudyPath, StudySeries } from '@/lib/types/product'

interface RelatedStudiesProps {
  studies: StudySeries[]
  paths: StudyPath[]
}

export function RelatedStudies({ studies, paths }: RelatedStudiesProps) {
  if (studies.length === 0) return null

  return (
    <section className="scroll-mt-8 border-t border-zinc-200/90 pt-14 md:pt-16">
      <SectionHeading
        size="sm"
        title="Recommended next"
        description="Studies that often sit next to this one on the shelf."
      />
      <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {studies.map((s) => (
          <StudyCard key={s.slug} study={s} paths={paths} />
        ))}
      </div>
    </section>
  )
}
