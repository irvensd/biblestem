/**
 * Canonical generosity flow stages for `GivingCirclePattern`.
 */
export type GivingCirclePatternStageData = {
  label: string
}

export const GIVING_CIRCLE_PATTERN_STAGES: readonly GivingCirclePatternStageData[] = [
  { label: 'God gives' },
  { label: 'We receive' },
  { label: 'We return thanks' },
  { label: 'We give to God and others' },
  { label: 'Others are blessed' },
  { label: 'God is glorified' },
] as const

export const GIVING_CIRCLE_PATTERN_DEFAULT_CAPTION =
  'God gives first, and His grace creates a circle of blessing through us.'
