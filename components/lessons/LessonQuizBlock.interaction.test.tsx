import assert from 'node:assert/strict'
import { afterEach, before, describe, it } from 'node:test'
import { JSDOM } from 'jsdom'
import type { LessonQuizPayload } from '@/lib/lesson-quiz-types'

const dom = new JSDOM('<!doctype html><html><body><div id="root"></div></body></html>', {
  url: 'http://localhost/',
})

Object.assign(globalThis, {
  window: dom.window,
  self: dom.window,
  document: dom.window.document,
  HTMLElement: dom.window.HTMLElement,
  HTMLButtonElement: dom.window.HTMLButtonElement,
  HTMLInputElement: dom.window.HTMLInputElement,
  HTMLTextAreaElement: dom.window.HTMLTextAreaElement,
  navigator: dom.window.navigator,
  localStorage: dom.window.localStorage,
  MessageChannel: dom.window.MessageChannel,
  IS_REACT_ACT_ENVIRONMENT: true,
})

type ClientRoot = import('react-dom/client').Root
let root: ClientRoot | null = null
let QuizBlock: typeof import('./LessonQuizBlock').LessonQuizBlock
let act: typeof import('react').act

const explained: LessonQuizPayload = {
  settings: { quizRequired: true, passingScore: 100, allowRetake: true },
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

const mixed: LessonQuizPayload = {
  settings: { quizRequired: false, passingScore: 70, allowRetake: false },
  questions: [
    {
      id: 'gil-l1-q-3',
      kind: 'multi',
      prompt: 'What does Scripture help reveal?',
      options: ['God’s character', 'God’s will', 'God’s plan of salvation', 'That God wants to remain unknown'],
      correctIndices: [0, 1, 2],
    },
    {
      id: 'gil-l1-q-5',
      kind: 'reflection',
      prompt: 'What would change if you read the Bible as God personally making Himself known to you?',
      explanation:
        'This reflection helps the learner move from seeing Scripture as mere information to seeing it as communication from a God of love.',
    },
  ],
}

function buttonNamed(name: string): HTMLButtonElement {
  const match = [...document.querySelectorAll('button')].find((node) => node.textContent?.trim() === name)
  assert.ok(match, `expected a button named ${name}`)
  return match as HTMLButtonElement
}

function inputFor(option: string): HTMLInputElement {
  const label = [...document.querySelectorAll('label')].find((node) => node.textContent?.includes(option))
  const input = label?.querySelector('input')
  assert.ok(input, `expected an input for ${option}`)
  return input as HTMLInputElement
}

before(async () => {
  const react = await import('react')
  const client = await import('react-dom/client')
  const component = await import('./LessonQuizBlock')
  act = react.act
  QuizBlock = component.LessonQuizBlock
  root = client.createRoot(document.getElementById('root')!)
})

afterEach(async () => {
  window.localStorage.clear()
  await act(async () => {
    root?.render(null)
  })
})

async function show(quiz: LessonQuizPayload, onPassingChange: (passed: boolean) => void, lessonSlug = 'lesson') {
  const Block = QuizBlock
  await act(async () => {
    root?.render(
      <Block quiz={quiz} studySlug="when-death-died" lessonSlug={lessonSlug} onPassingChange={onPassingChange} />,
    )
  })
}

describe('interactive knowledge check', () => {
  it('checks one question at a time and reveals the approved explanation only after Check answer', async () => {
    const passing: boolean[] = []
    await show(explained, (passed) => passing.push(passed))
    assert.equal(passing.at(-1), false)
    assert.equal(buttonNamed('Check answer').disabled, true)
    assert.equal(document.body.textContent?.includes('Correct answer'), false)
    assert.equal(document.body.textContent?.includes('In Gethsemane'), false)

    await act(async () => {
      inputFor('Babylon').click()
    })
    assert.equal(document.body.textContent?.includes('Correct answer'), false)
    assert.equal(buttonNamed('Check answer').disabled, false)

    await act(async () => {
      buttonNamed('Check answer').click()
    })
    assert.match(document.body.textContent ?? '', /Not quite\./)
    assert.match(document.body.textContent ?? '', /Your answer/)
    assert.match(document.body.textContent ?? '', /Correct answer/)
    assert.match(
      document.body.textContent ?? '',
      /In Gethsemane, Jesus said His soul was exceeding sorrowful, even unto death\./,
    )
    assert.equal(document.activeElement, document.querySelector('[aria-live="polite"]'))
    assert.equal(passing.includes(true), false)

    await act(async () => {
      buttonNamed('Next question').click()
    })
    assert.match(document.body.textContent ?? '', /Question 2 of 2/)
    assert.match(document.body.textContent ?? '', /According to 1 John 4:8, what is God\?/)
    assert.equal(document.body.textContent?.includes('In Gethsemane'), false)

    await act(async () => {
      inputFor('Love').click()
    })
    await act(async () => {
      buttonNamed('Check answer').click()
    })
    assert.match(document.body.textContent ?? '', /Correct\./)
    assert.equal(document.body.textContent?.includes('In Gethsemane'), false)

    await act(async () => {
      const results = buttonNamed('See results')
      results.click()
      results.click()
    })
    assert.match(document.body.textContent ?? '', /50%/)
    assert.match(document.body.textContent ?? '', /need 100%/)
    assert.equal(passing.filter(Boolean).length, 0)
    const stored = JSON.parse(window.localStorage.getItem('biblestem-lesson-quiz:when-death-died:lesson') ?? '{}') as {
      status?: string
      scorePercent?: number
    }
    assert.equal(stored.status, 'submitted')
    assert.equal(stored.scorePercent, 50)
  })

  it('restores an in-progress answer after leaving and does not mark the lesson passed', async () => {
    await show(explained, () => undefined, 'draft-lesson')
    await act(async () => {
      inputFor('Gethsemane').click()
    })
    await act(async () => {
      root?.render(null)
    })
    const passing: boolean[] = []
    await show(explained, (passed) => passing.push(passed), 'draft-lesson')
    assert.equal(inputFor('Gethsemane').checked, true)
    assert.equal(document.body.textContent?.includes('Correct answer'), false)
    assert.equal(passing.includes(true), false)
  })

  it('restores a finished score and allows a failed required quiz to be retaken', async () => {
    window.localStorage.setItem(
      'biblestem-lesson-quiz:when-death-died:saved-lesson',
      JSON.stringify({
        scorePercent: 50,
        passed: false,
        attempt: 1,
        savedAt: '2026-10-11T00:00:00.000Z',
        status: 'submitted',
      }),
    )
    const passing: boolean[] = []
    await show(explained, (passed) => passing.push(passed), 'saved-lesson')
    assert.match(document.body.textContent ?? '', /50%/)
    assert.match(document.body.textContent ?? '', /Retake quiz/)
    assert.equal(passing.at(-1), false)

    await act(async () => {
      buttonNamed('Retake quiz').click()
    })
    assert.match(document.body.textContent ?? '', /Question 1 of 2/)
    assert.equal(document.body.textContent?.includes('Correct answer'), false)
    const draft = JSON.parse(
      window.localStorage.getItem('biblestem-lesson-quiz:when-death-died:saved-lesson') ?? '{}',
    ) as { status?: string; attempt?: number }
    assert.equal(draft.status, 'in_progress')
    assert.equal(draft.attempt, 2)
  })

  it('keeps an optional quiz from inventing an explanation and still records a completed attempt', async () => {
    const passing: boolean[] = []
    await show(mixed, (passed) => passing.push(passed), 'mixed-lesson')
    await act(async () => {
      for (const option of ['God’s character', 'God’s will', 'God’s plan of salvation']) {
        inputFor(option).click()
      }
    })
    assert.equal(document.body.textContent?.includes('Correct answer'), false)
    await act(async () => {
      buttonNamed('Check answer').click()
    })
    assert.match(document.body.textContent ?? '', /Correct\./)
    assert.equal(document.body.textContent?.includes('communication from a God of love'), false)

    await act(async () => {
      buttonNamed('Next question').click()
    })
    const response = document.querySelector('textarea')
    assert.ok(response)
    await act(async () => {
      const setter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, 'value')?.set
      setter?.call(response, 'I would listen for His heart.')
      response.dispatchEvent(new dom.window.Event('input', { bubbles: true }))
    })
    await act(async () => {
      buttonNamed('Check answer').click()
    })
    assert.match(document.body.textContent ?? '', /Recorded\./)
    assert.match(
      document.body.textContent ?? '',
      /This reflection helps the learner move from seeing Scripture as mere information to seeing it as communication from a God of love\./,
    )
    await act(async () => {
      buttonNamed('See results').click()
    })
    assert.match(document.body.textContent ?? '', /100%/)
    assert.match(document.body.textContent ?? '', /\(pass\)/)
    assert.equal(document.body.textContent?.includes('Retake quiz'), false)
    assert.equal(passing.at(-1), true)
  })
})
