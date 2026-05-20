export type WhyDelayIsNotIndifferenceStageData = {
  label: string
  description: string
  reference: string
}

export const WHY_DELAY_REFLECTION_QUESTIONS: readonly string[] = [
  'What lie about God is being exposed here?',
  'What does this reveal about God\u2019s character?',
  'How does this help me trust God while evil still exists?',
]

export const WHY_DELAY_IS_NOT_INDIFFERENCE_DEFAULT_CAPTION =
  'Tap each stage to see its Scripture, explanation, and reflection prompts.'

export const WHY_DELAY_IS_NOT_INDIFFERENCE_COMPLETE_SUMMARY =
  'God\u2019s delay is not indifference. It is His wise and loving way of exposing evil, preserving freedom, revealing His character, and ending suffering forever.'

/** Lesson 2: five-stage reasoning path. */
export const WHY_DELAY_IS_NOT_INDIFFERENCE_STAGES: readonly WhyDelayIsNotIndifferenceStageData[] = [
  {
    label: 'Sin Begins in Deception',
    description: 'Satan\u2019s rebellion spreads through lies and misrepresentation.',
    reference: 'Revelation 12:7 to 9',
  },
  {
    label: 'Immediate Force Could Leave Questions',
    description: 'Fear-based obedience is not the same as love-based worship.',
    reference: '1 John 4:18',
  },
  {
    label: 'Sin Reveals Its Fruit',
    description: 'Rebellion leads to death, pain, accusation, and destruction.',
    reference: 'Romans 6:23',
  },
  {
    label: 'God Reveals His Character',
    description: 'God acts in love, truth, justice, patience, and mercy.',
    reference: '1 John 4:8',
  },
  {
    label: 'Evil Ends Permanently',
    description: 'God will make an utter end, and affliction will not rise again.',
    reference: 'Nahum 1:9',
  },
]
