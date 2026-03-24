'use client'

import Link from 'next/link'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { CompletionScreen } from '@/components/lesson/CompletionScreen'
import { LessonHeader } from '@/components/lesson/LessonHeader'
import { LessonStepNavigation } from '@/components/lesson/LessonStepNavigation'
import { LessonLayout } from '@/components/lesson/LessonLayout'
import { LessonSectionRenderer } from '@/components/lesson/LessonSectionRenderer'
import { buildLessonSteps } from '@/lib/lesson-steps'
import { getNextLessonInSeries } from '@/lib/product-queries'
import type { LessonReaderContent as LessonContent } from '@/lib/lesson-content'
import type { Lesson, StudySeries } from '@/lib/types/product'

interface LessonReaderContentProps {
  study: StudySeries
  lesson: Lesson
  content: LessonContent
}

export function LessonReaderContent({ study, lesson, content }: LessonReaderContentProps) {
  const steps = useMemo(() => buildLessonSteps(content), [content])
  const total = steps.length
  const [index, setIndex] = useState(0)
  const [complete, setComplete] = useState(false)

  const nextLesson = useMemo(() => getNextLessonInSeries(study, lesson.slug), [study, lesson.slug])

  const progress = complete ? 1 : (index + 1) / total

  const handleContinue = useCallback(() => {
    if (complete) return
    if (index < total - 1) {
      setIndex((i) => i + 1)
    } else {
      setComplete(true)
    }
  }, [complete, index, total])

  const handlePreviousStep = useCallback(() => {
    if (complete) return
    setIndex((i) => Math.max(0, i - 1))
  }, [complete])

  const reflectionKey = `biblestem-reflection-${study.slug}-${lesson.slug}`
  const backHref = `/study-library/${study.slug}`

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [index, complete])

  return (
    <LessonLayout progress={progress}>
      <LessonHeader
        backHref={backHref}
        seriesTitle={study.title}
        lessonTitle={lesson.title}
        stepLabel={complete ? '' : `Step ${index + 1} of ${total}`}
        showCompleteLabel={complete}
      />

      <main className={`min-h-[50vh] ${complete ? 'pb-8' : 'pb-32'}`}>
        {complete ? (
          <CompletionScreen
            seriesSlug={study.slug}
            seriesTitle={study.title}
            lessonTitle={lesson.title}
            nextLesson={nextLesson}
          />
        ) : (
          <div key={index} className="transition-opacity duration-200 ease-out">
            <LessonSectionRenderer step={steps[index]!} reflectionStorageKey={reflectionKey} />
          </div>
        )}
      </main>

      {complete ? (
        <div className="fixed bottom-0 left-0 right-0 z-30 border-t border-zinc-200/90 bg-stone-50/95 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-sm md:static md:z-0 md:border-t-0 md:bg-transparent md:pb-0 md:pt-8 md:backdrop-blur-none">
          <div className="mx-auto w-full max-w-[700px] px-5 sm:px-6 md:px-0">
            <Link
              href={backHref}
              className="flex w-full items-center justify-center rounded-xl border border-zinc-300 bg-white py-3.5 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-50"
            >
              Back to series
            </Link>
          </div>
        </div>
      ) : (
        <LessonStepNavigation
          continueLabel={index === total - 1 ? 'Finish lesson' : 'Continue'}
          onContinue={handleContinue}
          showPrevious={index > 0}
          onPrevious={handlePreviousStep}
        />
      )}
    </LessonLayout>
  )
}
