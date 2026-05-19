/**
 * Canonical data for `ReadinessHeartCheck` (Foundations — The Second Coming).
 */
export type ReadinessHeartCheckCardData = {
  label: string
  description: string
}

export const READINESS_HEART_CHECK_DEFAULT_CAPTION =
  'Jesus calls His people to watchfulness that grows out of love.'

export const READINESS_HEART_CHECK_DEFAULT_REFLECTION =
  'Readiness is not panic. Readiness is love awake.'

export const READINESS_HEART_CHECK_CARDS: readonly ReadinessHeartCheckCardData[] = [
  {
    label: 'Watchful',
    description: 'Awake to the nearness of Christ\'s return.',
  },
  {
    label: 'Faithful',
    description: 'Living with loyalty in daily life.',
  },
  {
    label: 'Loving',
    description: 'Reflecting the character of Jesus.',
  },
  {
    label: 'Spirit-Filled',
    description: 'Prepared by the Spirit, not self-confidence.',
  },
  {
    label: 'Hopeful',
    description: 'Looking for Jesus with joy, not fear.',
  },
]
