'use client'

import type { LessonStep } from '@/lib/lesson-steps'
import { LessonQuizBlock } from '@/components/lessons/LessonQuizBlock'

type QuizStep = Extract<LessonStep, { type: 'quiz_review' }>

export type LessonQuizStepProps = {
  step: QuizStep
  studySlug: string
  lessonSlug: string
  userId?: string
  onPassingChange: (passed: boolean) => void
}

export function LessonQuizStep({ step, studySlug, lessonSlug, userId, onPassingChange }: LessonQuizStepProps) {
  return (
    <div className="pb-8 pt-10 md:pt-12" data-renderer="global-lesson-reader">
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400">{step.eyebrow}</p>
      <h2 className="mt-3 text-xl font-semibold tracking-tight text-zinc-900">{step.title}</h2>
      <p className="mt-3 text-sm leading-relaxed text-zinc-600">{step.description}</p>
      <div className="mt-8 max-w-[52ch]">
        <LessonQuizBlock
          quiz={step.quiz}
          studySlug={studySlug}
          lessonSlug={lessonSlug}
          userId={userId}
          onPassingChange={onPassingChange}
        />
      </div>
    </div>
  )
}
