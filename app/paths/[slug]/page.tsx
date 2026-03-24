import { notFound } from 'next/navigation'
import { StudyCard } from '@/components/study/StudyCard'
import { PageIntro } from '@/components/site/PageIntro'
import { PageHeader } from '@/components/site/PageHeader'
import { getSeriesForPathSlug, getStudyPathBySlug } from '@/lib/product-queries'

export default async function PathDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const path = getStudyPathBySlug(slug)
  if (!path) return notFound()

  const seriesList = getSeriesForPathSlug(slug)

  return (
    <>
      <section className="border-b border-zinc-200/80 bg-stone-50 pb-14 pt-16 md:pb-16 md:pt-20">
        <div className="container-shell">
          <PageHeader
            items={[
              { label: 'Home', href: '/' },
              { label: 'Paths', href: '/paths' },
              { label: path.name },
            ]}
          />
          <PageIntro
            className="max-w-3xl"
            eyebrow="Path"
            title={path.name}
            description={path.description}
            showRule
          />
        </div>
      </section>

      <div className="section-space">
        <div className="container-shell">
          {seriesList.length === 0 ? (
            <p className="text-center text-sm text-zinc-600">No series in this path yet.</p>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {seriesList.map((study) => (
                <StudyCard key={study.slug} study={study} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}
