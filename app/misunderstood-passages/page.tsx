import type { Metadata } from 'next'
import { Button } from '@/components/ui/Button'
import { MisunderstoodPassagesClient } from '@/components/misunderstood-passages/MisunderstoodPassagesClient'
import { PageIntro } from '@/components/site/PageIntro'
import { getMisunderstoodPassagesWithThreads } from '@/lib/misunderstood-passages-server'
import { MISUNDERSTOOD_PASSAGES_STUDY_SLUG } from '@/lib/misunderstood-passages'

export const metadata: Metadata = {
  title: 'Misunderstood Bible Passages | BibleStem',
  description:
    'Study commonly misunderstood Bible passages with Scripture-first lessons, context, word insights, and Scripture threads.',
}

export default function MisunderstoodPassagesPage() {
  const passages = getMisunderstoodPassagesWithThreads()

  return (
    <>
      <section className="border-b border-zinc-200/80 bg-stone-50 pb-14 pt-16 md:pb-16 md:pt-20">
        <div className="container-shell">
          <PageIntro
            eyebrow="COLLECTION"
            title="Misunderstood Passages"
            description={
              <>
                Some Bible texts are quoted quickly but rarely studied carefully. These lessons slow down, compare
                Scripture with Scripture, and let the Bible explain itself.
                <span className="mt-4 block text-sm text-zinc-500">
                  Start with passages about death, the soul, resurrection, hell, and spiritualism.
                </span>
              </>
            }
          />
        </div>
      </section>

      <div className="section-space border-b border-zinc-200/80 bg-[#fafaf9]">
        <div className="container-shell max-w-4xl">
          <div className="rounded-xl border border-zinc-200/90 bg-white p-6 shadow-sm ring-1 ring-zinc-950/[0.03] md:p-8">
            <h2 className="text-lg font-semibold tracking-tight text-zinc-900">Why this collection exists</h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600 md:text-base">
              Many confusing Bible topics come from reading one verse in isolation. BibleStem&apos;s Misunderstood
              Passages collection helps you slow down, compare Scripture with Scripture, and study the context before
              forming conclusions.
            </p>
          </div>

          <div className="mt-12 md:mt-14">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Passages</h2>
            <MisunderstoodPassagesClient passages={passages} />
          </div>

          <section className="mt-14 rounded-xl border border-zinc-200/90 bg-stone-50/80 p-6 ring-1 ring-zinc-950/[0.03] md:mt-16 md:p-8">
            <h2 className="text-lg font-semibold tracking-tight text-zinc-900">Want the full study?</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-600 md:text-base">
              These passages are part of Death, Resurrection, and the Hope of Life, an advanced BibleStem study on
              death, the soul, resurrection, hell, and eternal life.
            </p>
            <div className="mt-6">
              <Button href={`/study-library/${MISUNDERSTOOD_PASSAGES_STUDY_SLUG}`}>Open full study</Button>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
