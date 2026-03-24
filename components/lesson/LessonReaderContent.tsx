'use client'

import { MetadataRow } from '@/components/site/MetadataRow'
import { PageHeader, type BreadcrumbItem } from '@/components/site/PageHeader'
import { WordStudyPopover } from '@/components/lesson/WordStudyPopover'
import type { LessonReaderContent as LessonContent } from '@/lib/lesson-content'
import type { Lesson, StudySeries } from '@/lib/mock-data'

interface LessonReaderContentProps {
  study: StudySeries
  lesson: Lesson
  content: LessonContent
  breadcrumbItems: BreadcrumbItem[]
}

export function LessonReaderContent({ study, lesson, content, breadcrumbItems }: LessonReaderContentProps) {
  const word = content.wordStudy

  return (
    <div className="border-b border-zinc-200/80 bg-stone-50 pb-14 pt-12 md:pb-16 md:pt-16">
      <div className="container-shell">
        <div className="mx-auto max-w-3xl">
          <PageHeader items={breadcrumbItems} />
          <h1 className="mt-8 text-3xl font-semibold tracking-[-0.02em] text-zinc-950 md:text-4xl md:leading-tight">{lesson.title}</h1>
          <p className="mt-3 text-lg leading-relaxed text-zinc-600">{lesson.summary}</p>
          <div className="mt-6">
            <MetadataRow
              items={[
                { label: 'Series', value: study.title },
                { label: 'Reading', value: lesson.duration },
                { label: 'Passage', value: lesson.scripture },
              ]}
            />
          </div>
        </div>
      </div>

      <div className="container-shell mt-12 md:mt-14">
        <article className="mx-auto max-w-3xl">
          <section className="border-t border-zinc-200 pt-10">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Opening thought</h2>
            <p className="mt-4 text-lg leading-[1.75] text-zinc-800">{content.openingThought}</p>
          </section>

          <section className="mt-14 border-t border-zinc-200 pt-10">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Scripture</h2>
            <p className="mt-3 text-sm text-zinc-500">{content.scriptureRef}</p>
            <blockquote className="mt-6 border-l-2 border-blue-800/25 pl-5 font-serif text-[17px] leading-[1.75] text-zinc-800">
              {content.scriptureQuote}
            </blockquote>
          </section>

          <section className="mt-14 border-t border-zinc-200 pt-10">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Teaching points</h2>
            <ul className="mt-5 space-y-4 text-base leading-[1.75] text-zinc-700">
              {content.teachingPoints.map((point) => (
                <li key={point} className="pl-1">
                  {point}
                </li>
              ))}
            </ul>
            {word ? (
              <p className="mt-6 text-base leading-[1.75] text-zinc-700">
                Key term:{' '}
                <WordStudyPopover
                  surface={word.surface}
                  study={{
                    lemma: word.lemma,
                    transliteration: word.transliteration,
                    meaning: word.meaning,
                    strongs: word.strongs,
                    note: word.note,
                  }}
                />
              </p>
            ) : null}
          </section>

          <section className="mt-14 border-t border-zinc-200 pt-10">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Reflect & journal</h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-600">{content.reflectPrompt}</p>
            <textarea
              className="mt-5 min-h-36 w-full rounded-xl border border-zinc-300/90 bg-white p-4 text-sm leading-relaxed text-zinc-800 outline-none ring-blue-200/80 focus:ring-2 focus:ring-offset-0"
              placeholder="Write your reflection..."
              aria-label="Reflection notes"
            />
            <p className="mt-2 text-xs text-zinc-500">Saved on this device</p>
          </section>

          <section className="mt-14 border-t border-zinc-200 pt-10">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Life application</h2>
            <p className="mt-4 text-base leading-[1.75] text-zinc-700">{content.lifeApplication}</p>
          </section>

          <section className="mt-14 border-t border-zinc-200 pb-4 pt-10">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Prayer</h2>
            <p className="mt-4 text-lg leading-[1.75] text-zinc-800">{content.prayer}</p>
          </section>
        </article>
      </div>
    </div>
  )
}
