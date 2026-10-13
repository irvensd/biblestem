import assert from 'node:assert/strict'
import { afterEach, describe, it } from 'node:test'
import type { QuizAnswerSlot } from './lesson-quiz-score'
import {
  persistSubmittedQuizAttempt,
  readLessonQuizResultLocal,
  saveLessonQuizDraft,
  saveLessonQuizResultLocal,
} from './lesson-quiz-storage'

const memory = new Map<string, string>()
const previousWindow = globalThis.window

function installMemoryStorage() {
  memory.clear()
  Object.assign(globalThis, {
    window: {
      localStorage: {
        getItem: (key: string) => memory.get(key) ?? null,
        setItem: (key: string, value: string) => {
          memory.set(key, value)
        },
        removeItem: (key: string) => {
          memory.delete(key)
        },
      },
    },
  })
}

afterEach(() => {
  if (previousWindow === undefined) {
    // @ts-expect-error test cleanup for a window that was not present
    delete globalThis.window
  } else {
    globalThis.window = previousWindow
  }
})

describe('quiz attempt storage', () => {
  it('restores a finished attempt after a reload', () => {
    installMemoryStorage()
    saveLessonQuizResultLocal('god-is-love', 'the-logic-of-love', {
      scorePercent: 80,
      passed: true,
      attempt: 1,
      savedAt: '2026-10-11T00:00:00.000Z',
    })
    const stored = readLessonQuizResultLocal('god-is-love', 'the-logic-of-love')
    assert.equal(stored?.status, 'submitted')
    assert.equal(stored?.scorePercent, 80)
    assert.equal(stored?.passed, true)
  })

  it('restores an in-progress draft without treating it as a pass', () => {
    installMemoryStorage()
    const answers: QuizAnswerSlot[] = [{ t: 'single', v: 0 }]
    saveLessonQuizDraft('god-is-love', 'the-logic-of-love', {
      attempt: 2,
      questionIndex: 0,
      answers,
      checked: [true],
    })
    memory.set(
      'biblestem-lesson-quiz:god-is-love:the-logic-of-love',
      JSON.stringify({
        scorePercent: 100,
        passed: true,
        attempt: 2,
        savedAt: '2026-10-11T00:00:00.000Z',
        status: 'in_progress',
        answers,
        checked: [true],
      }),
    )
    const stored = readLessonQuizResultLocal('god-is-love', 'the-logic-of-love')
    assert.equal(stored?.status, 'in_progress')
    assert.equal(stored?.passed, false)
    assert.equal(stored?.answers?.[0]?.t, 'single')
  })

  it('keeps the local result when the account sync fails', async () => {
    installMemoryStorage()
    await persistSubmittedQuizAttempt(
      'god-is-love',
      'the-logic-of-love',
      {
        scorePercent: 100,
        passed: true,
        attempt: 1,
        savedAt: '2026-10-11T00:00:00.000Z',
      },
      'user-1',
      async () => {
        throw new Error('offline')
      },
    )
    const stored = readLessonQuizResultLocal('god-is-love', 'the-logic-of-love')
    assert.equal(stored?.status, 'submitted')
    assert.equal(stored?.scorePercent, 100)
    assert.equal(stored?.passed, true)
  })

  it('ignores a storage write that the browser rejects', () => {
    installMemoryStorage()
    globalThis.window.localStorage.setItem = () => {
      throw new Error('quota')
    }
    assert.doesNotThrow(() =>
      saveLessonQuizResultLocal('god-is-love', 'the-logic-of-love', {
        scorePercent: 100,
        passed: true,
        attempt: 1,
        savedAt: '2026-10-11T00:00:00.000Z',
      }),
    )
    assert.equal(readLessonQuizResultLocal('god-is-love', 'the-logic-of-love'), null)
  })
})
