import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import {
  clampPassageIndex,
  passageIndexAfterKey,
  passageProgressLabel,
} from './scripture-chain-navigation'

describe('scripture chain navigation', () => {
  it('starts at the first passage and steps forward and back', () => {
    assert.equal(clampPassageIndex(0, 3), 0)
    assert.equal(passageIndexAfterKey(0, 3, 'ArrowRight'), 1)
    assert.equal(passageIndexAfterKey(1, 3, 'ArrowLeft'), 0)
  })

  it('stays on the boundary instead of wrapping', () => {
    assert.equal(passageIndexAfterKey(0, 3, 'ArrowLeft'), 0)
    assert.equal(passageIndexAfterKey(0, 3, 'ArrowUp'), 0)
    assert.equal(passageIndexAfterKey(2, 3, 'ArrowRight'), 2)
    assert.equal(passageIndexAfterKey(2, 3, 'ArrowDown'), 2)
    assert.equal(passageIndexAfterKey(-4, 3, 'ArrowRight'), 1)
  })

  it('jumps to the ends with Home and End', () => {
    assert.equal(passageIndexAfterKey(1, 4, 'Home'), 0)
    assert.equal(passageIndexAfterKey(1, 4, 'End'), 3)
  })

  it('ignores keys that are not passage navigation', () => {
    assert.equal(passageIndexAfterKey(1, 4, 'Enter'), 1)
    assert.equal(passageIndexAfterKey(1, 4, ' '), 1)
  })

  it('labels progress from the current index', () => {
    assert.equal(passageProgressLabel(0, 3), 'Passage 1 of 3')
    assert.equal(passageProgressLabel(2, 3), 'Passage 3 of 3')
    assert.equal(passageProgressLabel(9, 3), 'Passage 3 of 3')
    assert.equal(passageProgressLabel(0, 0), 'Passage 0 of 0')
  })
})
