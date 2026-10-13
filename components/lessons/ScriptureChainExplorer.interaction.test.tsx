import assert from 'node:assert/strict'
import { afterEach, before, describe, it } from 'node:test'
import { JSDOM } from 'jsdom'

const dom = new JSDOM('<!doctype html><html><body><div id="root"></div></body></html>', {
  url: 'http://localhost/',
})

Object.assign(globalThis, {
  window: dom.window,
  document: dom.window.document,
  HTMLElement: dom.window.HTMLElement,
  HTMLButtonElement: dom.window.HTMLButtonElement,
  HTMLInputElement: dom.window.HTMLInputElement,
  HTMLTextAreaElement: dom.window.HTMLTextAreaElement,
  navigator: dom.window.navigator,
  MessageChannel: dom.window.MessageChannel,
  IS_REACT_ACT_ENVIRONMENT: true,
})

dom.window.requestAnimationFrame = (callback: FrameRequestCallback) =>
  setTimeout(() => callback(Date.now()), 0) as unknown as number
dom.window.cancelAnimationFrame = (id: number) => clearTimeout(id)

type ClientRoot = import('react-dom/client').Root
let root: ClientRoot | null = null
let explorer: typeof import('./ScriptureChainExplorer.tsx').ScriptureChainExplorer
let act: typeof import('react').act

const passages = [
  { reference: 'Genesis 1:1', verseText: 'In the beginning God created the heavens and the earth.' },
  { reference: 'John 1:1', title: 'The Word', verseText: 'In the beginning was the Word.', shortNote: 'The Word was with God.' },
  { reference: 'Psalm 33:6' },
]

function buttonNamed(name: string): HTMLButtonElement {
  const match = [...document.querySelectorAll('button')].find((node) => node.textContent?.trim() === name)
  assert.ok(match, `expected a button named ${name}`)
  return match as HTMLButtonElement
}

before(async () => {
  const react = await import('react')
  const client = await import('react-dom/client')
  const component = await import('./ScriptureChainExplorer')
  act = react.act
  explorer = component.ScriptureChainExplorer
  root = client.createRoot(document.getElementById('root')!)
})

afterEach(async () => {
  await act(async () => {
    root?.render(null)
  })
})

async function showChain() {
  const Explorer = explorer
  await act(async () => {
    root?.render(<Explorer references={passages} />)
  })
}

describe('Scripture chain passage controls', () => {
  it('moves forward and back without wrapping', async () => {
    await showChain()
    assert.match(document.body.textContent ?? '', /In the beginning God created the heavens and the earth\./)
    assert.equal(buttonNamed('Previous passage').disabled, true)

    await act(async () => {
      buttonNamed('Next passage').click()
    })
    assert.match(document.body.textContent ?? '', /In the beginning was the Word\./)
    assert.match(document.body.textContent ?? '', /The Word/)
    assert.match(document.body.textContent ?? '', /The Word was with God\./)
    assert.doesNotMatch(document.body.textContent ?? '', /In the beginning God created the heavens and the earth\./)

    await act(async () => {
      buttonNamed('Previous passage').click()
    })
    assert.match(document.body.textContent ?? '', /In the beginning God created the heavens and the earth\./)

    await act(async () => {
      buttonNamed('Next passage').click()
    })
    await act(async () => {
      buttonNamed('Next passage').click()
    })
    assert.match(document.body.textContent ?? '', /Psalm 33:6/)
    assert.equal(document.querySelector('blockquote'), null)
    assert.equal(buttonNamed('Next passage').disabled, true)

    await act(async () => {
      buttonNamed('Next passage').click()
    })
    assert.equal(buttonNamed('Next passage').disabled, true)
    assert.match(document.body.textContent ?? '', /Passage 3 of 3/)
  })

  it('opens a passage from its navigation button', async () => {
    await showChain()
    const chip = buttonNamed('Psalm 33:6')
    await act(async () => {
      chip.click()
    })
    assert.equal(chip.getAttribute('aria-current'), 'true')
    assert.match(document.body.textContent ?? '', /Passage 3 of 3/)
    assert.equal(document.querySelector('blockquote'), null)
  })

  it('moves with the keyboard and focuses the active passage', async () => {
    await showChain()
    const first = buttonNamed('Genesis 1:1')
    first.focus()
    await act(async () => {
      first.dispatchEvent(new dom.window.KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }))
    })
    await new Promise((resolve) => setTimeout(resolve, 0))
    const second = buttonNamed('John 1:1')
    assert.equal(second.getAttribute('aria-current'), 'true')
    assert.equal(document.activeElement, second)
    assert.match(document.body.textContent ?? '', /The Word was with God\./)

    await act(async () => {
      second.dispatchEvent(new dom.window.KeyboardEvent('keydown', { key: 'End', bubbles: true }))
    })
    await new Promise((resolve) => setTimeout(resolve, 0))
    const last = buttonNamed('Psalm 33:6')
    assert.equal(document.activeElement, last)
    assert.equal(buttonNamed('Next passage').disabled, true)

    await act(async () => {
      last.dispatchEvent(new dom.window.KeyboardEvent('keydown', { key: 'Home', bubbles: true }))
    })
    await new Promise((resolve) => setTimeout(resolve, 0))
    assert.equal(document.activeElement, buttonNamed('Genesis 1:1'))
    assert.equal(buttonNamed('Previous passage').disabled, true)
  })

  it('ignores passage keys while an input is focused', async () => {
    await showChain()
    const region = document.getElementById('root')?.firstElementChild
    assert.ok(region)
    const input = document.createElement('input')
    region.appendChild(input)
    input.focus()
    await act(async () => {
      input.dispatchEvent(new dom.window.KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }))
    })
    assert.equal(buttonNamed('Genesis 1:1').getAttribute('aria-current'), 'true')
    assert.match(document.body.textContent ?? '', /Passage 1 of 3/)
  })
})
