import assert from 'node:assert/strict'
import { afterEach, before, beforeEach, describe, it } from 'node:test'
import { JSDOM } from 'jsdom'
import { parseStoredReflection, serializeStoredReflection } from '@/lib/guided-reflection'

const dom = new JSDOM('<!doctype html><html><body><div id="root"></div></body></html>', {
  url: 'http://localhost/',
})

Object.assign(globalThis, {
  window: dom.window,
  document: dom.window.document,
  localStorage: dom.window.localStorage,
  HTMLElement: dom.window.HTMLElement,
  HTMLButtonElement: dom.window.HTMLButtonElement,
  HTMLTextAreaElement: dom.window.HTMLTextAreaElement,
  navigator: dom.window.navigator,
  IS_REACT_ACT_ENVIRONMENT: true,
})

type ClientRoot = import('react-dom/client').Root
type NotesComponent = typeof import('./ReflectionNotes').ReflectionNotes
let root: ClientRoot | null = null
let act: typeof import('react').act
let ReflectionNotes: NotesComponent

const storageKey = 'biblestem-lesson-note:god-is-love:the-logic-of-love:3'

function buttonNamed(name: string): HTMLButtonElement {
  const match = [...document.querySelectorAll('button')].find((node) => node.textContent?.trim() === name)
  assert.ok(match, `expected a button named ${name}`)
  return match as HTMLButtonElement
}

function reflectionField(): HTMLTextAreaElement {
  const label = [...document.querySelectorAll('label')].find((node) => node.textContent?.trim() === 'Your reflection')
  assert.ok(label)
  const field = document.getElementById(label.getAttribute('for') ?? '')
  assert.equal(field?.tagName, 'TEXTAREA')
  return field as HTMLTextAreaElement
}

function guidedField(): HTMLTextAreaElement {
  const main = reflectionField()
  const other = [...document.querySelectorAll('textarea')].find((node) => node !== main)
  assert.equal(other?.tagName, 'TEXTAREA')
  return other as HTMLTextAreaElement
}

function statusText(): string {
  return document.querySelector('[role="status"]')?.textContent ?? ''
}

function typeInto(field: HTMLTextAreaElement, value: string) {
  const setter = Object.getOwnPropertyDescriptor(dom.window.HTMLTextAreaElement.prototype, 'value')?.set
  setter?.call(field, value)
  field.dispatchEvent(new dom.window.Event('input', { bubbles: true }))
}

async function renderNotes(
  extra: Partial<import('./ReflectionNotes').ReflectionNotesProps> = {},
) {
  await act(async () => {
    root?.render(
      <ReflectionNotes
        storageKey={storageKey}
        prompt="Think about the verse."
        studySlug="god-is-love"
        lessonSlug="the-logic-of-love"
        stepNumber={3}
        quickResponses={[]}
        loadRemote={async () => null}
        saveRemote={async () => true}
        allowGuided
        {...extra}
      />,
    )
  })
}

before(async () => {
  const react = await import('react')
  const client = await import('react-dom/client')
  act = react.act
  root = client.createRoot(document.getElementById('root')!)
  ReflectionNotes = (await import('./ReflectionNotes')).ReflectionNotes
})

beforeEach(() => {
  localStorage.clear()
})

afterEach(async () => {
  await act(async () => {
    root?.render(null)
  })
})

describe('guided reflection notes', () => {
  it('creates, edits, and reloads a private note', async () => {
    const calls: unknown[][] = []
    await renderNotes({
      userId: 'user-a',
      saveRemote: async (...args) => {
        calls.push(args)
        return true
      },
    })
    await act(async () => {
      typeInto(reflectionField(), 'Love is named here.')
    })
    await act(async () => {
      buttonNamed('Save note').click()
    })
    assert.equal(localStorage.getItem(storageKey), 'Love is named here.')
    assert.equal(statusText(), 'Saved to your account')
    assert.equal(calls.length, 1)
    assert.deepEqual(calls[0].slice(0, 4), ['user-a', 'god-is-love', 'the-logic-of-love', 3])

    await act(async () => {
      typeInto(reflectionField(), 'Love is named here. I can practice it.')
    })
    assert.match(statusText(), /Unsaved changes/)
    await act(async () => {
      buttonNamed('Save note').click()
    })
    assert.equal(localStorage.getItem(storageKey), 'Love is named here. I can practice it.')
    assert.equal(calls.length, 2)
    let noteKeys = 0
    for (let index = 0; index < localStorage.length; index += 1) {
      if (localStorage.key(index)?.startsWith('biblestem-lesson-note:')) noteKeys += 1
    }
    assert.equal(noteKeys, 1)

    await act(async () => {
      root?.render(null)
    })
    await renderNotes({
      userId: 'user-a',
      saveRemote: async () => true,
    })
    assert.equal(reflectionField().value, 'Love is named here. I can practice it.')
  })

  it('keeps an existing plain note and adds guided answers beside it', async () => {
    localStorage.setItem(storageKey, 'My private note')
    await renderNotes()
    assert.equal(reflectionField().value, 'My private note')
    assert.equal(document.body.textContent?.includes('What does the biblical passage explicitly say?'), false)

    await act(async () => {
      buttonNamed('Guided reflection').click()
    })
    assert.match(document.body.textContent ?? '', /What does the biblical passage explicitly say\?/)
    await act(async () => {
      typeInto(guidedField(), 'The verse says God loved the world.')
    })
    await act(async () => {
      buttonNamed('Save note').click()
    })
    const parsed = parseStoredReflection(localStorage.getItem(storageKey) ?? '')
    assert.equal(parsed.note, 'My private note')
    assert.equal(parsed.guided.observe, 'The verse says God loved the world.')
    assert.equal(reflectionField().value.includes('"biblestemReflection"'), false)
  })

  it('reloads guided answers into the same sections', async () => {
    localStorage.setItem(
      storageKey,
      serializeStoredReflection('My private note', {
        observe: 'It names love.',
        interpret: 'Love is the reason.',
        apply: '',
      }),
    )
    await renderNotes()
    assert.equal(reflectionField().value, 'My private note')
    assert.equal(guidedField().value, 'It names love.')
    await act(async () => {
      buttonNamed('Interpret').click()
    })
    assert.equal(guidedField().value, 'Love is the reason.')
  })

  it('does not report success when the account save fails', async () => {
    await renderNotes({
      userId: 'user-a',
      saveRemote: async () => false,
    })
    await act(async () => {
      typeInto(reflectionField(), 'Still in the box')
    })
    await act(async () => {
      buttonNamed('Save note').click()
    })
    assert.equal(reflectionField().value, 'Still in the box')
    assert.match(statusText(), /did not update/)
    assert.equal(statusText().includes('Saved to your account'), false)
    assert.equal(localStorage.getItem(storageKey), 'Still in the box')
  })

  it('keeps the text when the device cannot store it', async () => {
    await renderNotes()
    const storageProto = Object.getPrototypeOf(localStorage) as Storage
    const original = storageProto.setItem
    storageProto.setItem = () => {
      throw new Error('quota')
    }
    try {
      await act(async () => {
        typeInto(reflectionField(), 'Held in the form')
        buttonNamed('Save note').click()
      })
      assert.equal(reflectionField().value, 'Held in the form')
      assert.match(statusText(), /Could not save/)
      assert.equal(statusText().includes('Saved to your account'), false)
      assert.equal(statusText().includes('Saved on this device'), false)
    } finally {
      storageProto.setItem = original
    }
  })

  it('does not send a note when nobody is signed in', async () => {
    let called = false
    let loaded = false
    await renderNotes({
      loadRemote: async () => {
        loaded = true
        return 'someone else'
      },
      saveRemote: async () => {
        called = true
        return true
      },
    })
    await act(async () => {
      typeInto(reflectionField(), 'Device only')
      buttonNamed('Save note').click()
    })
    assert.equal(called, false)
    assert.equal(loaded, false)
    assert.equal(reflectionField().value, 'Device only')
    assert.equal(statusText(), 'Saved on this device')
    assert.equal(localStorage.getItem(storageKey), 'Device only')
  })

  it('saves empty content once for the signed-in owner', async () => {
    const calls: unknown[][] = []
    let release: (value: boolean) => void = () => {}
    await renderNotes({
      userId: 'user-a',
      saveRemote: (...args) => {
        calls.push(args)
        return new Promise<boolean>((resolve) => {
          release = resolve
        })
      },
    })
    await act(async () => {
      buttonNamed('Save note').click()
      buttonNamed('Save note').click()
    })
    assert.equal(calls.length, 1)
    assert.deepEqual(calls[0].slice(0, 4), ['user-a', 'god-is-love', 'the-logic-of-love', 3])
    assert.equal(calls[0][4], '')
    await act(async () => {
      release(true)
    })
    assert.equal(localStorage.getItem(storageKey), '')
    assert.equal(statusText(), 'Saved to your account')
  })

  it('keeps each section while moving with the keyboard', async () => {
    await renderNotes()
    await act(async () => {
      buttonNamed('Guided reflection').click()
    })
    const tablist = document.querySelector('[role="tablist"]')
    assert.match(tablist?.className ?? '', /grid-cols-1/)
    assert.match(tablist?.className ?? '', /sm:grid-cols-3/)
    assert.equal(tablist?.getAttribute('aria-label'), 'Guided reflection')

    await act(async () => {
      typeInto(guidedField(), 'What is written')
    })
    buttonNamed('Observe').focus()
    await act(async () => {
      buttonNamed('Observe').dispatchEvent(
        new dom.window.KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }),
      )
    })
    assert.equal(buttonNamed('Interpret').getAttribute('aria-selected'), 'true')
    assert.equal(document.activeElement, buttonNamed('Interpret'))
    await act(async () => {
      typeInto(guidedField(), 'What it means here')
    })
    await act(async () => {
      buttonNamed('Interpret').dispatchEvent(
        new dom.window.KeyboardEvent('keydown', { key: 'ArrowLeft', bubbles: true }),
      )
    })
    assert.equal(guidedField().value, 'What is written')
    await act(async () => {
      buttonNamed('Apply').click()
    })
    assert.match(
      document.body.textContent ?? '',
      /How should the passage shape the reader's understanding, decisions, or actions\?/,
    )
  })

  it('uses passage prompts only when the lesson supplies all three', async () => {
    await renderNotes({
      guidedPrompts: {
        observe: 'What does John 3:16 explicitly say?',
        interpret: 'What does John 3:16 mean beside the verses around it?',
        apply: 'How should John 3:16 shape a decision this week?',
      },
    })
    await act(async () => {
      buttonNamed('Guided reflection').click()
    })
    assert.match(document.body.textContent ?? '', /What does John 3:16 explicitly say\?/)
    assert.equal(document.body.textContent?.includes('What does the biblical passage explicitly say?'), false)

    await act(async () => {
      root?.render(null)
    })
    await renderNotes({
      guidedPrompts: { observe: 'Only this', interpret: ' ', apply: '' },
    })
    await act(async () => {
      buttonNamed('Guided reflection').click()
    })
    assert.match(document.body.textContent ?? '', /What does the biblical passage explicitly say\?/)
    assert.equal(document.body.textContent?.includes('Only this'), false)
  })

  it('leaves other step notes as a single field and renders typed text as text', async () => {
    await renderNotes({ allowGuided: false })
    assert.equal(
      [...document.querySelectorAll('button')].some((node) => node.textContent?.trim() === 'Guided reflection'),
      false,
    )
    await act(async () => {
      typeInto(reflectionField(), '<img src=x onerror=alert(1)>')
    })
    assert.equal(document.querySelector('img'), null)
    assert.equal(reflectionField().value, '<img src=x onerror=alert(1)>')
  })
})
