/**
 * Canonical baptism-by-immersion stages for `BaptismMeaningPattern`.
 */
export type BaptismMeaningPatternStageData = {
  label: string
  subtitle: string
}

export const BAPTISM_MEANING_PATTERN_STAGES: readonly BaptismMeaningPatternStageData[] = [
  { label: 'Old life', subtitle: 'surrendered to Jesus' },
  { label: 'Going under the water', subtitle: 'buried with Christ' },
  { label: 'Coming up from the water', subtitle: 'raised to new life' },
  { label: 'New life', subtitle: 'lived by faith through the Spirit' },
] as const

export const BAPTISM_MEANING_PATTERN_DEFAULT_CAPTION =
  'Baptism is a public sign that the old life is buried and new life begins in Christ.'
