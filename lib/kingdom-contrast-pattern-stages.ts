/**
 * Canonical contrast pillars for `KingdomContrastPattern` (Foundations visual aid).
 */
export type KingdomContrastPatternPillarData = {
  label: string
  tagline: string
}

export const KINGDOM_CONTRAST_PATTERN_DEFAULT_CAPTION =
  'Jesus reveals power under love, not power over people.'

export const KINGDOM_CONTRAST_PATTERN_PILLARS: readonly KingdomContrastPatternPillarData[] = [
  {
    label: 'Worldly Power',
    tagline: 'control, coercion, self-exaltation, force',
  },
  {
    label: 'Christ\'s Kingdom',
    tagline: 'humility, service, truth, self-giving love',
  },
  {
    label: 'Counterfeit Religion',
    tagline: 'uses God\'s name while misrepresenting God\'s character',
  },
  {
    label: 'True Worship',
    tagline: 'reveals God\'s character through Jesus',
  },
]
