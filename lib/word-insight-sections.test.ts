import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import {
  availableWordInsightTabs,
  cleanedRelatedReferences,
  wordInsightTabAfterKey,
} from './word-insight-sections'

describe('word insight sections', () => {
  it('opens Meaning and Biblical Context when both approved texts exist', () => {
    assert.deepEqual(
      availableWordInsightTabs({
        meaning: 'Conflict, battle, and struggle.',
        reference: 'Revelation 12:7',
        passageExplanation: 'The war in heaven was a conflict over truth.',
      }),
      ['meaning', 'context'],
    )
  })

  it('hides a tab when its approved text is missing', () => {
    assert.deepEqual(availableWordInsightTabs({ meaning: 'Love.' }), ['meaning'])
    assert.deepEqual(
      availableWordInsightTabs({ reference: 'Isaiah 14:12', passageExplanation: '   ' }),
      ['context'],
    )
    assert.deepEqual(availableWordInsightTabs({ relatedReferences: [' ', ''] }), [])
  })

  it('adds Scripture Connections only for references already provided', () => {
    assert.deepEqual(cleanedRelatedReferences([' John 1:1 ', 'John 1:1', '']), ['John 1:1'])
    assert.deepEqual(
      availableWordInsightTabs({
        meaning: 'Word.',
        relatedReferences: ['John 1:14'],
      }),
      ['meaning', 'connections'],
    )
  })

  it('moves between the tabs that are actually present', () => {
    const tabs = ['meaning', 'context'] as const
    assert.equal(wordInsightTabAfterKey([...tabs], 'meaning', 'ArrowRight'), 'context')
    assert.equal(wordInsightTabAfterKey([...tabs], 'context', 'ArrowRight'), 'context')
    assert.equal(wordInsightTabAfterKey([...tabs], 'context', 'Home'), 'meaning')
    assert.equal(wordInsightTabAfterKey([...tabs], 'meaning', 'End'), 'context')
    assert.equal(wordInsightTabAfterKey([...tabs], 'context', 'Enter'), 'context')
  })
})
