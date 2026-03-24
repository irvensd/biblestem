import { StudyCard } from '@/components/study/StudyCard'
import { PageIntro } from '@/components/site/PageIntro'
import { SectionHeading } from '@/components/site/SectionHeading'
import { inputClassName, selectClassName } from '@/components/ui/form-styles'
import { studies } from '@/lib/mock-data'

const collections = ['Foundational Studies', 'Growth Studies', 'Advanced Studies'] as const

export default function StudyLibraryPage() {
  return (
    <>
      <section className="border-b border-zinc-200/80 bg-stone-50 pb-14 pt-16 md:pb-16 md:pt-20">
        <div className="container-shell">
          <PageIntro
            eyebrow="Library"
            title="Study Library"
            description="Structured studies for serious Bible learning—browse by collection or open any series."
          />
          <div className="mt-10 rounded-xl border border-zinc-200/90 bg-white p-4 shadow-sm ring-1 ring-zinc-950/[0.03] md:p-5">
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
              <input
                type="search"
                placeholder="Search studies"
                className={inputClassName}
                aria-label="Search studies"
              />
              <select className={selectClassName} aria-label="Filter by category" defaultValue="">
                <option value="">All categories</option>
                <option>Foundations</option>
                <option>Theology</option>
                <option>Life Application</option>
                <option>Prophecy</option>
              </select>
              <select className={selectClassName} aria-label="Filter by level" defaultValue="">
                <option value="">All levels</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
              <select className={selectClassName} aria-label="Sort studies" defaultValue="">
                <option>Sort: Recommended</option>
                <option>Newest</option>
                <option>Most lessons</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      <div className="section-space">
        <div className="container-shell space-y-16 md:space-y-20">
          {collections.map((collection) => {
            const filtered = studies.filter((study) => study.collection === collection)
            return (
              <section key={collection}>
                <SectionHeading
                  size="sm"
                  title={collection}
                  description="Thoughtful learning paths with clear structure."
                />
                <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-10 lg:grid-cols-3">
                  {filtered.map((study) => (
                    <StudyCard key={study.slug} study={study} />
                  ))}
                </div>
              </section>
            )
          })}
        </div>
      </div>
    </>
  )
}
