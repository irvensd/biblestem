import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { LessonList } from '@/components/study/LessonList'
import { PageIntro } from '@/components/site/PageIntro'
import { PageHeader } from '@/components/site/PageHeader'
import { MetadataRow } from '@/components/site/MetadataRow'
import { SectionHeading } from '@/components/site/SectionHeading'
import { studies } from '@/lib/mock-data'

export default async function StudyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const study = studies.find((item) => item.slug === slug)
  if (!study) return notFound()

  const firstLesson = study.lessons[0]

  return (
    <>
      <section className="border-b border-zinc-200/80 bg-stone-50 pb-12 pt-12 md:pb-14 md:pt-16">
        <div className="container-shell">
          <PageHeader
            items={[
              { label: 'Home', href: '/' },
              { label: 'Study Library', href: '/study-library' },
              { label: study.title },
            ]}
          />
          <PageIntro
            className="max-w-3xl"
            eyebrow="Series"
            title={study.title}
            description={study.description}
            showRule
          />
          <div className="mt-8">
            <MetadataRow
              items={[
                { label: 'Lessons', value: String(study.lessonsCount) },
                { label: 'Duration', value: study.duration },
                { label: 'Level', value: study.level },
                { label: 'Category', value: study.category },
              ]}
            />
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href={`/study-library/${study.slug}/lesson/${firstLesson.slug}`}>Start study</Button>
            <Button href="/study-library" variant="secondary">
              Browse more
            </Button>
            <Button href="/sign-in" variant="ghost">
              Save for later
            </Button>
          </div>
        </div>
      </section>

      <div className="section-space">
        <div className="container-shell max-w-3xl space-y-14 md:space-y-16">
          <section>
            <SectionHeading size="sm" title="Overview" />
            <p className="mt-5 text-base leading-[1.75] text-zinc-700">
              This series moves carefully through Scripture with theological depth, reading clarity, and space for reflection. Take it at the pace that fits your life—consistency matters more than speed.
            </p>
          </section>

          <section>
            <SectionHeading size="sm" title="Lessons" />
            <div className="mt-8">
              <LessonList studySlug={study.slug} lessons={study.lessons} />
            </div>
          </section>

          <section className="border-t border-zinc-200 pt-12">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">What you&apos;ll learn</h2>
            <ul className="mt-5 space-y-3 text-base leading-relaxed text-zinc-700">
              <li>How to observe and interpret biblical passages in context.</li>
              <li>How key original-language words enrich understanding without overwhelming the text.</li>
              <li>How doctrine and life application connect in faithful, humble study.</li>
            </ul>
          </section>

          <section>
            <p className="text-sm leading-relaxed text-zinc-600">
              Approach: read prayerfully, note questions as you go, and return to the passage before leaning on secondary sources.
            </p>
          </section>
        </div>
      </div>
    </>
  )
}
