import assert from 'node:assert/strict'
import { afterEach, before, describe, it } from 'node:test'
import { JSDOM } from 'jsdom'
import { WordInsightCard } from './WordInsightCard'

const dom = new JSDOM('<!doctype html><html><body><div id="root"></div></body></html>', {
  url: 'http://localhost/',
})

Object.assign(globalThis, {
  window: dom.window,
  document: dom.window.document,
  HTMLElement: dom.window.HTMLElement,
  HTMLButtonElement: dom.window.HTMLButtonElement,
  navigator: dom.window.navigator,
  IS_REACT_ACT_ENVIRONMENT: true,
})

dom.window.requestAnimationFrame = (callback: FrameRequestCallback) =>
  setTimeout(() => callback(Date.now()), 0) as unknown as number

type ClientRoot = import('react-dom/client').Root
let root: ClientRoot | null = null
let act: typeof import('react').act

const insight = {
  surface: 'War',
  lemma: 'πόλεμος (polemos)',
  transliteration: 'polemos',
  meaning: 'The word translated “war” is connected to conflict, battle, and struggle.',
  strongs: 'G4171',
  reference: 'Revelation 12:7',
  note: 'The war in heaven was not only about strength.',
  relatedReferences: ['Revelation 12:17'],
}

function buttonNamed(name: string): HTMLButtonElement {
  const match = [...document.querySelectorAll('button')].find((node) => node.textContent?.trim() === name)
  assert.ok(match, `expected a button named ${name}`)
  return match as HTMLButtonElement
}

before(async () => {
  const react = await import('react')
  const client = await import('react-dom/client')
  act = react.act
  root = client.createRoot(document.getElementById('root')!)
})

afterEach(async () => {
  await act(async () => {
    root?.render(null)
  })
})

describe('word insight tabs', () => {
  it('moves with the pointer and the keyboard without leaving the card', async () => {
    await act(async () => {
      root?.render(<WordInsightCard insight={insight} />)
    })
    assert.equal(buttonNamed('Meaning').getAttribute('aria-selected'), 'true')
    assert.match(document.body.textContent ?? '', /conflict, battle, and struggle/)
    assert.equal(document.body.textContent?.includes('The war in heaven was not only about strength'), false)
    assert.equal(document.body.textContent?.includes('Revelation 12:17'), false)

    await act(async () => {
      buttonNamed('Biblical Context').click()
    })
    assert.match(document.body.textContent ?? '', /Revelation 12:7/)
    assert.match(document.body.textContent ?? '', /The war in heaven was not only about strength/)
    assert.equal(document.body.textContent?.includes('conflict, battle, and struggle'), false)

    buttonNamed('Biblical Context').focus()
    await act(async () => {
      buttonNamed('Biblical Context').dispatchEvent(
        new dom.window.KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }),
      )
    })
    await new Promise((resolve) => setTimeout(resolve, 0))
    const connections = buttonNamed('Scripture Connections')
    assert.equal(connections.getAttribute('aria-selected'), 'true')
    assert.equal(document.activeElement, connections)
    assert.match(document.body.textContent ?? '', /Revelation 12:17/)
    assert.equal(document.body.textContent?.includes('Mark complete'), false)
  })
})
