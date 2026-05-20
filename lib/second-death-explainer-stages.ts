export type SecondDeathExplainerStageData = {
  label: string
  description: string
}

export const SECOND_DEATH_EXPLAINER_DEFAULT_CAPTION =
  'The lake of fire is called the second death because it brings evil to a complete and irreversible end.'

export const SECOND_DEATH_EXPLAINER_SCRIPTURE_ANCHORS = [
  'Revelation 20:9-15',
  'Revelation 21:4',
  'Nahum 1:9',
] as const

export const SECOND_DEATH_EXPLAINER_STAGES: readonly SecondDeathExplainerStageData[] = [
  {
    label: 'Final Rebellion',
    description: 'The lost choose rebellion even after God\u2019s justice is revealed.',
  },
  {
    label: 'Lake of Fire',
    description: 'The final judgment brings sin and rebellion to an end.',
  },
  {
    label: 'Second Death',
    description: 'This death is final and irreversible.',
  },
  {
    label: 'Death Destroyed',
    description: 'Death itself is cast into the lake of fire.',
  },
  {
    label: 'No More Death',
    description: 'God\u2019s restored universe contains no death, sorrow, crying, or pain.',
  },
]
