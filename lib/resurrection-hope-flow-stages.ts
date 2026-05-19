/**
 * Canonical data for `ResurrectionHopeFlow` (Foundations — The Second Coming).
 */
export type ResurrectionHopeFlowStageData = {
  label: string
  description: string
}

export const RESURRECTION_HOPE_FLOW_DEFAULT_CAPTION =
  'The Second Coming turns grief into resurrection hope.'

export const RESURRECTION_HOPE_FLOW_STAGES: readonly ResurrectionHopeFlowStageData[] = [
  {
    label: 'Jesus Descends',
    description: 'The Lord descends from heaven.',
  },
  {
    label: 'Trumpet Sounds',
    description: 'The trumpet of God announces His return.',
  },
  {
    label: 'Dead in Christ Rise',
    description: 'Believers who died in Christ are resurrected.',
  },
  {
    label: 'Living Faithful Transformed',
    description: 'The living faithful are changed.',
  },
  {
    label: 'Together With the Lord',
    description: 'All the redeemed meet the Lord and remain with Him forever.',
  },
]
