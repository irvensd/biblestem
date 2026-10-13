import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { describe, it } from 'node:test'
import { renderToStaticMarkup } from 'react-dom/server'
import { ScriptureChain } from './ScriptureChain'
import { ScriptureChainExplorer } from './ScriptureChainExplorer'
import { ScriptureThread } from './ScriptureThread'

const passages = [
  { reference: 'Genesis 1:1', verseText: 'In the beginning God created the heavens and the earth.', shortNote: 'Creation is the starting point.' },
  { reference: 'John 1:1', title: 'The Word', verseText: 'In the beginning was the Word.' },
  { reference: 'Psalm 33:6' },
]

describe('ScriptureChainExplorer', () => {
  it('renders the first passage and hides later passage text', () => {
    const html = renderToStaticMarkup(<ScriptureChainExplorer references={passages} />)
    assert.match(html, /Passage 1 of 3/)
    assert.match(html, /In the beginning God created the heavens and the earth\./)
    assert.match(html, /Creation is the starting point\./)
    assert.doesNotMatch(html, /In the beginning was the Word\./)
    assert.match(html, /John 1:1/)
    assert.doesNotMatch(html, /The Word/)
    assert.match(html, /<blockquote/)
    assert.match(html, /Psalm 33:6/)
  })

  it('omits optional title, scripture, and note when they are missing', () => {
    const html = renderToStaticMarkup(
      <ScriptureChainExplorer references={[{ reference: 'Genesis 2:7' }]} />,
    )
    assert.match(html, /Genesis 2:7/)
    assert.match(html, /Passage 1 of 1/)
    assert.doesNotMatch(html, /<blockquote/)
    assert.match(html, /disabled/)
    assert.match(html, /Previous passage/)
    assert.match(html, /Next passage/)
  })

  it('exposes accessible names for progress, passages, and controls', () => {
    const html = renderToStaticMarkup(<ScriptureChainExplorer references={passages} />)
    assert.match(html, /aria-label="Scripture chain progress"/)
    assert.match(html, /aria-label="Passages in this chain"/)
    assert.match(html, /aria-valuenow="1"/)
    assert.match(html, /aria-valuemax="3"/)
    assert.match(html, /aria-current="true"/)
    assert.match(html, />Previous passage</)
    assert.match(html, />Next passage</)
  })

  it('does not render lesson completion controls', () => {
    const html = renderToStaticMarkup(<ScriptureChainExplorer references={passages} />)
    assert.doesNotMatch(html, /Mark complete|Lesson complete|completed/i)
    const source = readFileSync(new URL('./ScriptureChainExplorer.tsx', import.meta.url), 'utf8')
    assert.equal(source.includes('persistMarkLessonComplete'), false)
    assert.equal(source.includes('user_study_progress'), false)
  })
})

describe('existing scripture cards', () => {
  it('keeps a chain readable when only references are present', () => {
    const html = renderToStaticMarkup(
      <ScriptureChain
        title="Cross-references"
        references={[{ reference: 'Genesis 1:1' }, { reference: 'John 1:1' }]}
      />,
    )
    assert.match(html, /Cross-references/)
    assert.match(html, /Genesis 1:1/)
    assert.match(html, /Previous passage/)
  })

  it('keeps the completion recap as a static list', () => {
    const html = renderToStaticMarkup(
      <ScriptureThread
        title="Names"
        references={passages}
        completionMode
      />,
    )
    assert.match(html, /Scripture Thread completed/)
    assert.doesNotMatch(html, /Previous passage/)
    assert.match(html, /In the beginning was the Word\./)
  })
})
