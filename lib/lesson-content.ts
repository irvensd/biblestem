/** Rich lesson copy for the reader (mock). Extend or replace when wiring CMS / Supabase. */
export interface LessonReaderContent {
  openingThought: string
  scriptureRef: string
  scriptureQuote: string
  teachingPoints: string[]
  wordStudy?: {
    surface: string
    lemma: string
    transliteration: string
    meaning: string
    strongs: string
    note: string
  }
  reflectPrompt: string
  lifeApplication: string
  prayer: string
}

const library: Record<string, LessonReaderContent> = {
  'word-made-flesh': {
    openingThought:
      'John opens with a deliberate echo of Genesis: before time and matter, the Word already was—personal, with God, and truly God.',
    scriptureRef: 'John 1:1–5 (ESV)',
    scriptureQuote:
      'In the beginning was the Word, and the Word was with God, and the Word was God. He was in the beginning with God. All things were made through him, and without him was not any thing made that was made. In him was life, and the life was the light of men. The light shines in the darkness, and the darkness has not overcome it.',
    teachingPoints: [
      '“In the beginning” invites readers to hear creation’s story anew: the Word stands behind all that exists.',
      'The identity of the Word is stated plainly—personal presence with the Father, and fully divine.',
      'Life and light are not abstract ideas; they are bound to the Word who enters the world’s darkness.',
    ],
    wordStudy: {
      surface: 'Word',
      lemma: 'λόγος',
      transliteration: 'logos',
      meaning: 'Speech, message, and divine self-expression—ultimately embodied in Christ.',
      strongs: 'G3056',
      note: 'John uses λόγος to connect God’s creative speech with the person who reveals the Father.',
    },
    reflectPrompt: 'Where do you most need the clarity of Christ—the light—this week?',
    lifeApplication: 'Name one relationship or responsibility where you will seek to walk in humility and truth, reflecting the Word’s character.',
    prayer: 'Father, help me receive Christ as life and light. Teach me to read Scripture with reverence and to follow Jesus with courage.',
  },
  _fallback: {
    openingThought: 'Approach this passage slowly. Let the text set the terms before you draw conclusions.',
    scriptureRef: 'Scripture',
    scriptureQuote:
      'Your word is a lamp to my feet and a light to my path. I have sworn an oath and confirmed it, to keep your righteous rules.',
    teachingPoints: [
      'Observation comes before interpretation: note repeated words, contrasts, and context.',
      'Theology and application should grow out of what the passage actually says.',
      'Original-language insights serve understanding, not speculation.',
    ],
    reflectPrompt: 'What truth in this passage most challenges your assumptions?',
    lifeApplication: 'Choose one response you can practice in the next seven days.',
    prayer: 'Lord, give me a quiet mind, a humble heart, and a willing spirit as I respond to your Word.',
  },
}

export function getLessonReaderContent(lessonSlug: string): LessonReaderContent {
  return library[lessonSlug] ?? library._fallback
}
