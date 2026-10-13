import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { renderToStaticMarkup } from 'react-dom/server'
import { LessonQuizBlock } from './LessonQuizBlock'
import type { LessonQuizPayload } from '@/lib/lesson-quiz-types'

const quiz: LessonQuizPayload = {
  settings: { quizRequired: true, passingScore: 70, allowRetake: true },
  questions: [
    {
      id: 'wdd-l1-q1',
      prompt: 'Where did Jesus experience deep sorrow before the cross?',
      options: ['Gethsemane', 'Babylon', 'Egypt', 'Mount Carmel'],
      correctIndex: 0,
      explanation: 'In Gethsemane, Jesus said His soul was exceeding sorrowful, even unto death.',
    },
    {
      id: 'gil-l1-q-1',
      prompt: 'According to 1 John 4:8, what is God?',
      options: ['Love', 'Confusion', 'Fear', 'Distance'],
      correctIndex: 0,
    },
  ],
}

describe('LessonQuizBlock markup', () => {
  it('shows the first question without the answer or the explanation', () => {
    const html = renderToStaticMarkup(
      <LessonQuizBlock quiz={quiz} studySlug="when-death-died" lessonSlug="lesson" onPassingChange={() => undefined} />,
    )
    assert.match(html, /Question 1 of 2/)
    assert.match(html, /Where did Jesus experience deep sorrow before the cross\?/)
    assert.match(html, /aria-label="Quiz progress"|aria-labelledby=/)
    assert.match(html, /Check answer/)
    assert.match(html, /disabled/)
    assert.doesNotMatch(html, /According to 1 John 4:8/)
    assert.doesNotMatch(html, /Correct answer/)
    assert.doesNotMatch(html, /In Gethsemane, Jesus said His soul was exceeding sorrowful/)
    assert.doesNotMatch(html, /Mark complete|Lesson complete/i)
  })
})
