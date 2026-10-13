import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import {
  firstUncheckedQuestion,
  visibleQuizQuestionIndex,
  initialQuizAnswers,
  isQuizAnswerCorrect,
  isQuizQuestionAnswered,
  passingChangeAfterQuizSubmit,
  quizBlocksLessonContinue,
  quizMeetsPassingScore,
  quizReadyToScore,
  sanitizeCheckedFlags,
  scoreQuizPercent,
} from './lesson-quiz-score'
import type { LessonQuizQuestion, LessonQuizSettings } from './lesson-quiz-types'

const single: LessonQuizQuestion = {
  id: 'single',
  prompt: 'According to Isaiah 53, what did Jesus bear and carry?',
  options: ['Our griefs and sorrows', 'His own sin', 'Roman wealth', 'Human applause'],
  correctIndex: 0,
  explanation: 'Isaiah 53 says Jesus bore our griefs and carried our sorrows.',
}

const multi: LessonQuizQuestion = {
  id: 'multi',
  kind: 'multi',
  prompt: 'What does Scripture help reveal?',
  options: ['God’s character', 'God’s will', 'God’s plan of salvation', 'That God wants to remain unknown'],
  correctIndices: [0, 1, 2],
}

const reflection: LessonQuizQuestion = {
  id: 'reflection',
  kind: 'reflection',
  prompt: 'What would change if you read the Bible as God personally making Himself known to you?',
  explanation:
    'This reflection helps the learner move from seeing Scripture as mere information to seeing it as communication from a God of love.',
}

const questions = [single, multi, reflection]
const required: LessonQuizSettings = { quizRequired: true, passingScore: 70, allowRetake: true }
const optional: LessonQuizSettings = { quizRequired: false, passingScore: 70, allowRetake: true }

describe('quiz scoring', () => {
  it('scores a selected answer only when it matches the answer key', () => {
    assert.equal(isQuizQuestionAnswered(single, { t: 'single', v: 1 }), true)
    assert.equal(isQuizAnswerCorrect(single, { t: 'single', v: 1 }), false)
    assert.equal(isQuizAnswerCorrect(single, { t: 'single', v: 0 }), true)
    assert.equal(isQuizAnswerCorrect(single, { t: 'single', v: null }), false)
  })

  it('scores multi-select as an exact set', () => {
    assert.equal(isQuizQuestionAnswered(multi, { t: 'multi', v: [0] }), true)
    assert.equal(isQuizAnswerCorrect(multi, { t: 'multi', v: [0] }), false)
    assert.equal(isQuizAnswerCorrect(multi, { t: 'multi', v: [2, 0, 1] }), true)
    assert.equal(isQuizAnswerCorrect(multi, { t: 'multi', v: [0, 1, 2, 3] }), false)
  })

  it('scores a reflection as correct only when it has text', () => {
    assert.equal(isQuizAnswerCorrect(reflection, { t: 'reflection', v: '   ' }), false)
    assert.equal(isQuizAnswerCorrect(reflection, { t: 'reflection', v: 'I would listen for His heart.' }), true)
  })

  it('rounds the percent from the share of correct answers', () => {
    const answers = initialQuizAnswers(questions)
    answers[0] = { t: 'single', v: 0 }
    answers[1] = { t: 'multi', v: [0] }
    answers[2] = { t: 'reflection', v: 'A response' }
    assert.equal(scoreQuizPercent(questions, answers), 67)
    assert.equal(quizMeetsPassingScore(67, 70), false)
    assert.equal(quizMeetsPassingScore(70, 70), true)
    assert.equal(scoreQuizPercent([], []), 0)
  })

  it('keeps a required quiz from unlocking the lesson until the passing score', () => {
    assert.equal(passingChangeAfterQuizSubmit(required, 67), false)
    assert.equal(passingChangeAfterQuizSubmit(required, 70), true)
    assert.equal(passingChangeAfterQuizSubmit(optional, 0), true)
    assert.equal(quizBlocksLessonContinue(true, false), true)
    assert.equal(quizBlocksLessonContinue(true, true), false)
    assert.equal(quizBlocksLessonContinue(false, false), false)
  })

  it('does not treat an unchecked or skipped question as ready to score', () => {
    const answers = initialQuizAnswers(questions)
    answers[0] = { t: 'single', v: 1 }
    const checked = sanitizeCheckedFlags(questions, answers, [true, true, false])
    assert.deepEqual(checked, [true, false, false])
    assert.equal(firstUncheckedQuestion(checked), 1)
    assert.equal(visibleQuizQuestionIndex([true, false, false], 0), 0)
    assert.equal(visibleQuizQuestionIndex([true, false, false], 2), 1)
    assert.equal(quizReadyToScore(questions, answers, checked), false)
  })
})
