'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import { CompletionScreen } from '@/components/lessons/CompletionScreen'
import { LessonHeader } from '@/components/lessons/LessonHeader'
import { LessonMobileMap } from '@/components/lessons/LessonMobileMap'
import { LessonNavigation } from '@/components/lessons/LessonNavigation'
import { LessonLayout } from '@/components/lessons/LessonLayout'
import { LessonSidebar } from '@/components/lessons/LessonSidebar'
import { LessonStepRenderer } from '@/components/lessons/LessonStepRenderer'
import { buildLessonSteps, buildLessonStepsFromSections } from '@/lib/lesson-steps'
import { useDemoAuth } from '@/components/auth/DemoAuthProvider'
import { persistMarkLessonComplete, persistSaveLessonProgress } from '@/lib/dashboard-progress-sync'
import { readLocalProgress } from '@/lib/dashboard-local-progress'
import { countWordInsightsInContent } from '@/lib/lesson-insight-count'
import { lessonNoteStorageKey, countLocalLessonNotes } from '@/lib/lesson-notes'
import { getNextLessonInSeries } from '@/lib/product-queries'
import { computeSeriesProgressPercent } from '@/lib/studies/progress'
import type { StudyOverviewLessonRow } from '@/lib/studies/types'
import type { LessonReaderContent as LessonContent } from '@/lib/lesson-content'
import type { Lesson, StudySeries } from '@/lib/types/product'

export interface LessonReaderProps {
  study: StudySeries
  lesson: Lesson
  content: LessonContent
}

/** Single global guided lesson reader: layout, steps, sidebar, completion, and progress. */
export function LessonReader({ study, lesson, content }: LessonReaderProps) {
  const { user } = useDemoAuth()
  const userId = user?.id

  const steps = useMemo(() => {
    if (lesson.sections.length > 0) {
      return buildLessonStepsFromSections(lesson.sections, lesson.scripture)
    }
    return buildLessonSteps(content)
  }, [lesson.sections, lesson.scripture, content])
  const total = steps.length
  const [index, setIndex] = useState(0)
  const [complete, setComplete] = useState(false)
  const [progressTick, setProgressTick] = useState(0)
  const [notesTick, setNotesTick] = useState(0)

  const nextLesson = useMemo(() => getNextLessonInSeries(study, lesson.slug), [study, lesson.slug])

  const progress = complete ? 1 : (index + 1) / total

  const lessonRows: StudyOverviewLessonRow[] = useMemo(
    () =>
      [...study.lessons]
        .sort((a, b) => a.sortOrder - b.sortOrder)
        .map((l, i) => ({
          id: l.id,
          slug: l.slug,
          lessonNumber: i + 1,
          title: l.title,
          shortDescription: l.summary,
          estimatedMinutes: l.durationMinutes,
        })),
    [study.lessons],
  )

  const seriesProgressPercent = useMemo(() => {
    if (typeof window === 'undefined') return 0
    return computeSeriesProgressPercent(study.slug, lessonRows, readLocalProgress())
  }, [study.slug, lessonRows, progressTick, complete])

  useEffect(() => {
    const onProg = () => setProgressTick((t) => t + 1)
    window.addEventListener('biblestem-progress', onProg)
    return () => window.removeEventListener('biblestem-progress', onProg)
  }, [])

  useEffect(() => {
    const onNote = () => setNotesTick((t) => t + 1)
    window.addEventListener('biblestem-lesson-note', onNote)
    window.addEventListener('storage', onNote)
    return () => {
      window.removeEventListener('biblestem-lesson-note', onNote)
      window.removeEventListener('storage', onNote)
    }
  }, [])

  const wordInsightCount = useMemo(() => countWordInsightsInContent(content), [content])
  const notesCount = useMemo(() => {
    if (typeof window === 'undefined') return 0
    return countLocalLessonNotes(study.slug, lesson.slug, total)
  }, [study.slug, lesson.slug, total, notesTick, index])

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

  const reflectionLegacyKey = `biblestem-reflection-${study.slug}-${lesson.slug}`
  const stepNoteKey = lessonNoteStorageKey(study.slug, lesson.slug, index)

  const isReflectStep =
    steps[index]?.type === 'reflect_journal' ||
    (steps[index]?.type === 'db_section' && steps[index]?.sectionType === 'reflection')

  const backHref = `/study-library/${study.slug}`
  const reviewHref = `/study-library/${study.slug}/lesson/${lesson.slug}`

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [index, complete])

  useEffect(() => {
    if (complete || total <= 0) return
    void persistSaveLessonProgress(study.slug, lesson.slug, index, total, userId)
  }, [complete, index, total, study.slug, lesson.slug, userId])

  useEffect(() => {
    if (!complete) return
    void persistMarkLessonComplete(study.slug, lesson.slug, total, userId)
    setProgressTick((t) => t + 1)
  }, [complete, study.slug, lesson.slug, total, userId])

  const stepThroughPct = total > 0 ? Math.round(((index + 1) / total) * 100) : 0

  const sideRail =
    !complete && total > 0 ? (
      <LessonSidebar
        lessonTitle={lesson.title}
        steps={steps}
        currentIndex={index}
        wordInsightCount={wordInsightCount}
        notesCount={notesCount}
        estimatedMinutes={lesson.durationMinutes}
        studyTitle={study.title}
        onGoToNextStep={index < total - 1 ? () => setIndex((i) => i + 1) : undefined}
      />
    ) : null

  const mobileMap =
    !complete && total > 1 ? (
      <LessonMobileMap steps={steps} currentIndex={index} onSelectStep={(i) => setIndex(i)} />
    ) : null

  return (
    <LessonLayout
      progress={progress}
      stepIndex={complete ? undefined : index}
      totalSteps={complete ? undefined : total}
      sideRail={sideRail}
      mobileLessonMap={mobileMap}
    >
      <LessonHeader
        backHref={backHref}
        seriesTitle={study.title}
        lessonTitle={lesson.title}
        stepLabel={
          complete ? '' : `Step ${index + 1} of ${total} · ${stepThroughPct}% through`
        }
        showCompleteLabel={complete}
      />

      <main className="min-h-[50vh] pb-6">
        {complete ? (
          <CompletionScreen
            seriesSlug={study.slug}
            seriesTitle={study.title}
            lessonTitle={lesson.title}
            nextLesson={nextLesson}
            completionSummary={content.completionSummary}
            forwardQuestion={content.forwardQuestion}
            seriesCompleteScreen={content.seriesCompleteScreen}
            studyProgressPercent={seriesProgressPercent}
            reviewLessonHref={reviewHref}
            backToSeriesHref={backHref}
          />
        ) : (
          <div key={index} className="transition-opacity duration-200 ease-out">
            <LessonStepRenderer
              step={steps[index]!}
              reflectionStorageKey={stepNoteKey}
              noteContext={{
                studySlug: study.slug,
                lessonSlug: lesson.slug,
                stepIndex: index,
                userId,
              }}
              legacyReflectionKey={isReflectStep ? reflectionLegacyKey : undefined}
            />
          </div>
        )}
      </main>

      {complete ? null : (
        <LessonNavigation
          continueLabel={index === total - 1 ? 'Finish lesson' : 'Continue'}
          onContinue={handleContinue}
          showPrevious={index > 0}
          onPrevious={handlePreviousStep}
        />
      )}
    </LessonLayout>
  )
}

/** @deprecated Use `LessonReader`. */
export const LessonReaderContent = LessonReader
/** @deprecated Use `LessonReaderProps`. */
export type LessonReaderContentProps = LessonReaderProps
