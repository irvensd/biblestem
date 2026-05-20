export type DeceptionPatternBuilderStepData = {
  label: string
  description: string
  reference: string
}

export const DECEPTION_PATTERN_BUILDER_DEFAULT_CAPTION =
  'Tap each step to see how deception follows a pattern. Reorder steps to reflect the sequence you are studying.'

/** Eden lesson: four-step deception sequence (canonical order). */
export const EDEN_DECEPTION_PATTERN_STEPS: readonly DeceptionPatternBuilderStepData[] = [
  {
    label: "Question God's Word",
    description: 'Satan begins by making Eve reconsider what God actually said.',
    reference: 'Genesis 3:1',
  },
  {
    label: 'Deny the Consequence',
    description: 'Satan tells Eve that disobedience will not bring the result God warned about.',
    reference: 'Genesis 3:4',
  },
  {
    label: "Attack God's Motive",
    description: 'Satan suggests God is withholding something good from humanity.',
    reference: 'Genesis 3:5',
  },
  {
    label: 'Make Sin Look Desirable',
    description: 'The forbidden fruit appears good, pleasant, and able to make one wise.',
    reference: 'Genesis 3:6',
  },
]

export const EDEN_DECEPTION_PATTERN_CANONICAL_ORDER: readonly string[] = EDEN_DECEPTION_PATTERN_STEPS.map(
  (s) => s.label,
)

export const EDEN_DECEPTION_PATTERN_COMPLETE_SUMMARY =
  'This is how deception works. It does not always begin by rejecting God openly. It begins by making distrust seem reasonable.'

export type DeceptionPatternScenarioData = {
  prompt: string
  /** Step label the scenario illustrates. */
  answer: string
}

export const EDEN_DECEPTION_PATTERN_SCENARIOS: readonly DeceptionPatternScenarioData[] = [
  { prompt: 'Did God really mean that command for today?', answer: "Question God's Word" },
  { prompt: 'This will not really affect my spiritual life.', answer: 'Deny the Consequence' },
  { prompt: 'God just does not want me to be happy.', answer: "Attack God's Motive" },
  { prompt: 'This choice will finally give me what I deserve.', answer: 'Make Sin Look Desirable' },
]

export const DECEPTION_PATTERN_BUILDER_STEPS: readonly DeceptionPatternBuilderStepData[] = [
  {
    label: 'Question God\'s word',
    description: 'Satan casts doubt on what God has clearly said.',
    reference: 'Genesis 3:1',
  },
  {
    label: 'Deny the warning',
    description: 'The serpent contradicts the consequence God announced.',
    reference: 'Genesis 3:4',
  },
  {
    label: 'Misrepresent God\'s character',
    description: 'Evil is framed as freedom and God as withholding good.',
    reference: 'Genesis 3:5',
  },
  {
    label: 'Sin enters the world',
    description: 'Disobedience brings death and separation.',
    reference: 'Romans 5:12',
  },
  {
    label: 'The Son appears',
    description: 'Christ came to destroy the works of the devil.',
    reference: '1 John 3:8',
  },
]
