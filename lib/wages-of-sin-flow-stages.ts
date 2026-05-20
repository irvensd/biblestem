export type WagesOfSinFlowStageData = {
  label: string
  description: string
}

export const WAGES_OF_SIN_FLOW_DEFAULT_CAPTION =
  'The Bible\u2019s consistent language is death, perishing, destruction, and ashes, not endless conscious torment.'

export const WAGES_OF_SIN_FLOW_SCRIPTURE_ANCHORS = [
  'Romans 6:23',
  'John 3:16',
  'James 1:15',
  'Malachi 4:1-3',
  'Psalm 37:20',
] as const

export const WAGES_OF_SIN_FLOW_STAGES: readonly WagesOfSinFlowStageData[] = [
  { label: 'Sin', description: 'Rebellion separates from the God of life.' },
  { label: 'Death', description: 'The wages of sin is death.' },
  { label: 'Perish', description: 'Those who reject life do not live forever.' },
  { label: 'Consumed', description: 'The wicked are destroyed like stubble.' },
  { label: 'Ashes', description: 'Evil is fully ended and removed.' },
]
