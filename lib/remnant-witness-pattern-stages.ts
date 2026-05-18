/**
 * Canonical remnant identity flow stages for `RemnantWitnessPattern` (Foundations visual aid).
 */
export type RemnantWitnessPatternStageData = {
  label: string
  tagline: string
}

export const REMNANT_WITNESS_PATTERN_DEFAULT_CAPTION =
  'The remnant is called to preserve God\'s truth, reveal Jesus, and carry the gospel with humility and love.'

export const REMNANT_WITNESS_PATTERN_STAGES: readonly RemnantWitnessPatternStageData[] = [
  {
    label: 'Commandments of God',
    tagline: 'guarding and preserving God\'s law of love',
  },
  {
    label: 'Testimony of Jesus',
    tagline: 'pointing to Jesus as the true revelation of God\'s character',
  },
  {
    label: 'Faith of Jesus',
    tagline: 'trusting Christ, not self',
  },
  {
    label: 'Spirit of Prophecy',
    tagline: 'God\'s guidance through inspired witness',
  },
  {
    label: 'Mission',
    tagline: 'truth spoken in love to the world',
  },
]
