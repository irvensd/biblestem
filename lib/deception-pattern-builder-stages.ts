export type DeceptionPatternBuilderStepData = {
  label: string
  description: string
  reference: string
}

export const DECEPTION_PATTERN_BUILDER_DEFAULT_CAPTION =
  'Tap each step to see how deception follows a pattern. Reorder steps to reflect the sequence you are studying.'

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
