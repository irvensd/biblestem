export type EndOfEvilFlowStageData = {
  label: string
  description: string
}

export const END_OF_EVIL_FLOW_DEFAULT_CAPTION =
  'God ends evil in a way that reveals His justice and secures the universe in love.'

export const END_OF_EVIL_FLOW_SCRIPTURE_ANCHORS = [
  'Revelation 20:7-15',
  'Revelation 21:1-5',
  '2 Peter 3:10-13',
  'Nahum 1:9',
] as const

export const END_OF_EVIL_FLOW_STAGES: readonly EndOfEvilFlowStageData[] = [
  {
    label: 'New Jerusalem Descends',
    description: 'The holy city comes down from God.',
  },
  {
    label: 'Wicked Resurrected',
    description: 'The lost are raised after the thousand years.',
  },
  {
    label: 'Final Rebellion Exposed',
    description: 'Satan gathers the lost in one last attempt against God\'s city.',
  },
  {
    label: 'Judgment Fully Revealed',
    description: 'Every knee bows and God\'s justice is seen.',
  },
  {
    label: 'Evil Destroyed',
    description: 'Sin, Satan, death, and rebellion are brought to a final end.',
  },
  {
    label: 'Earth Made New',
    description: 'God creates a restored world where righteousness dwells.',
  },
]
