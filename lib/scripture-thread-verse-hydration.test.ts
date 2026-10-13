import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import type { LessonReaderContent } from './lesson-content'
import { hydrateLessonScriptureThreadVerseText } from './scripture-thread-verse-hydration'

describe('scripture chain verse hydration', () => {
  it('copies lesson scripture onto a matching chain reference and leaves other passages blank', () => {
    const content = {
      scriptureRef: 'Genesis 1:1',
      scriptureQuote: 'In the beginning God created the heavens and the earth.',
      scriptureSupplementBlocks: [
        {
          type: 'scriptureChain',
          title: 'Cross-references',
          references: [{ reference: 'Genesis 1:1' }, { reference: 'John 1:1' }],
        },
      ],
    } as LessonReaderContent

    const hydrated = hydrateLessonScriptureThreadVerseText(content)
    const block = hydrated.scriptureSupplementBlocks?.[0]
    assert.equal(block?.type, 'scriptureChain')
    if (block?.type !== 'scriptureChain' || !('references' in block)) {
      assert.fail('expected a reference chain')
    }
    assert.equal(block.references[0]?.verseText, 'In the beginning God created the heavens and the earth.')
    assert.equal(block.references[1]?.verseText, undefined)
  })
})
