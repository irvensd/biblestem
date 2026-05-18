/**
 * Canonical pillars for `ChurchCommunityPattern` (Foundations visual aid).
 */
export type ChurchCommunityPatternPillarData = {
  label: string
  tagline: string
}

export const CHURCH_COMMUNITY_PATTERN_DEFAULT_CAPTION =
  'The church is God\'s community for fellowship, healing, proclamation, and service.'

export const CHURCH_COMMUNITY_PATTERN_PILLARS: readonly ChurchCommunityPatternPillarData[] = [
  {
    label: 'Fellowship',
    tagline: 'shared life with God and one another',
  },
  {
    label: 'Healing',
    tagline: 'restoration, prayer, forgiveness, growth',
  },
  {
    label: 'Proclamation',
    tagline: 'revealing God\'s character through the gospel',
  },
  {
    label: 'Service',
    tagline: 'meeting needs, showing mercy, blessing the world',
  },
]
