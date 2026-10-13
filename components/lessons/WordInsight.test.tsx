import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { renderToStaticMarkup } from 'react-dom/server'
import { WordInsight } from './WordInsight'
import { WordInsightCard } from './WordInsightCard'

const polemos = {
  surface: 'War',
  lemma: 'πόλεμος (polemos)',
  transliteration: 'polemos',
  meaning:
    'The word translated “war” is connected to conflict, battle, and struggle. It can describe more than physical fighting.',
  strongs: 'G4171',
  reference: 'Revelation 12:7',
  note: 'The war in heaven was not only about strength. It was a conflict over truth, loyalty, and the character of God.',
}

describe('Word insight card', () => {
  it('shows the Greek term and hides the passage note until Biblical Context is chosen', () => {
    const html = renderToStaticMarkup(<WordInsightCard insight={polemos} />)
    assert.match(html, /πόλεμος \(polemos\)/)
    assert.match(html, /lang="el"/)
    assert.match(html, /dir="ltr"/)
    assert.match(html, /polemos/)
    assert.match(html, /Greek/)
    assert.match(html, /Strong&#x27;s G4171|Strong's G4171/)
    assert.match(html, /Lexical sense/)
    assert.match(html, /conflict, battle, and struggle/)
    assert.match(html, /Biblical Context/)
    assert.doesNotMatch(html, /Scripture Connections/)
    assert.doesNotMatch(html, /The war in heaven was not only about strength/)
    assert.doesNotMatch(html, /Part of speech/)
  })

  it('renders Hebrew right to left and omits a missing Strong’s number', () => {
    const html = renderToStaticMarkup(
      <WordInsight
        language="Hebrew"
        originalWord="הֵילֵל (helel)"
        transliteration="helel"
        meaning="Often understood as light-bearer or morning star (see context in Isaiah 14:12, KJV)."
        reference="Isaiah 14:12"
        shortExplanation="Lucifer was created to reflect light, not steal glory."
      />,
    )
    assert.match(html, /הֵילֵל/)
    assert.match(html, /lang="he"/)
    assert.match(html, /dir="rtl"/)
    assert.doesNotMatch(html, /Strong/)
  })

  it('lists only the related passages a lesson already names', () => {
    const html = renderToStaticMarkup(
      <WordInsight
        language="Greek"
        originalWord="ἀγάπη"
        transliteration="agapē"
        meaning="Love."
        shortExplanation=""
        relatedReferences={['1 John 4:8', '1 John 4:8']}
      />,
    )
    assert.match(html, /Scripture Connections/)
    assert.doesNotMatch(html, /1 John 4:8/)
    assert.doesNotMatch(html, /Biblical Context/)
  })
})
