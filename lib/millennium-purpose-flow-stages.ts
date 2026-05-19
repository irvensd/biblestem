export type MillenniumPurposeFlowStageData = {
  label: string
  description: string
}

export const MILLENNIUM_PURPOSE_FLOW_DEFAULT_CAPTION =
  'God governs with justice, transparency, and love.'

export const MILLENNIUM_PURPOSE_FLOW_SCRIPTURE_ANCHORS = [
  'Revelation 20:4',
  '1 Corinthians 6:2-3',
  'Deuteronomy 32:4',
  'Revelation 15:3',
] as const

export const MILLENNIUM_PURPOSE_FLOW_STAGES: readonly MillenniumPurposeFlowStageData[] = [
  {
    label: 'Evil Has Run Its Course',
    description: 'The great controversy has revealed the destructive results of rebellion.',
  },
  {
    label: 'God Opens the Records',
    description: 'The redeemed are invited to review the full story.',
  },
  {
    label: 'Questions Are Answered',
    description: 'Every concern about God\'s justice is addressed.',
  },
  {
    label: 'God\'s Character Is Vindicated',
    description: 'The redeemed see that God\'s judgments are righteous and true.',
  },
  {
    label: 'Evil Never Rises Again',
    description: 'The universe is fully settled in love and trust.',
  },
]
