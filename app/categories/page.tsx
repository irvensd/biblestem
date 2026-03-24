import { CategoryCard } from '@/components/study/CategoryCard'
import { StudyCard } from '@/components/study/StudyCard'
import { PageIntro } from '@/components/site/PageIntro'
import { SectionHeading } from '@/components/site/SectionHeading'
import { categories, seriesCountForCategory, studies } from '@/lib/mock-data'

const featured = studies.filter((s) => s.featured).slice(0, 3)

export default function CategoriesPage() {
  return (
    <>
      <section className="border-b border-zinc-200/80 bg-stone-50 pb-14 pt-16 md:pb-16 md:pt-20">
        <div className="container-shell">
          <PageIntro
            eyebrow="Browse"
            title="Study categories"
            description="Choose a lane that fits your season—each category gathers series designed for careful reading."
          />
        </div>
      </section>

      <div className="section-space">
        <div className="container-shell">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <CategoryCard
                key={category.name}
                name={category.name}
                description={category.description}
                seriesCount={seriesCountForCategory(category.name)}
                href="/study-library"
              />
            ))}
          </div>

          <div className="mt-16 md:mt-20">
            <SectionHeading
              size="sm"
              title="Featured series"
              description="A few places to begin while you explore categories."
            />
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-10 lg:grid-cols-3">
              {featured.map((study) => (
                <StudyCard key={study.slug} study={study} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
