import { PathCard } from '@/components/study/PathCard'
import { PageIntro } from '@/components/site/PageIntro'
import { SectionHeading } from '@/components/site/SectionHeading'
import { StudyCard } from '@/components/study/StudyCard'
import { getRecommendedSeriesSlugs, getSeriesBySlug, getStudyPaths, seriesCountForPathSlug } from '@/lib/product-queries'

const featuredSlugs = getRecommendedSeriesSlugs()

export default function PathsPage() {
  const paths = getStudyPaths()
  const featured = featuredSlugs
    .map((slug) => getSeriesBySlug(slug))
    .filter((s): s is NonNullable<typeof s> => s != null)

  return (
    <>
      <section className="border-b border-zinc-200/80 bg-stone-50 pb-14 pt-16 md:pb-16 md:pt-20">
        <div className="container-shell">
          <PageIntro
            eyebrow="Browse"
            title="Study paths"
            description="Choose a track that fits your season—each path gathers series designed for careful reading."
          />
        </div>
      </section>

      <div className="section-space">
        <div className="container-shell">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {paths.map((path) => (
              <PathCard key={path.id} path={path} seriesCount={seriesCountForPathSlug(path.slug)} />
            ))}
          </div>

          <div className="mt-16 md:mt-20">
            <SectionHeading
              size="sm"
              title="Recommended series"
              description="A few places to begin while you explore paths."
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
