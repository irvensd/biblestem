/**
 * Canonical flow for `ImageOfBeastFormation` (Foundations visual aid).
 */
export type ImageOfBeastFormationStageData = {
  label: string
  description: string
}

export const IMAGE_OF_BEAST_FORMATION_DEFAULT_CAPTION =
  'The image of the beast appears when religion uses civil power to compel worship.'

export const IMAGE_OF_BEAST_FORMATION_NOTE =
  'The issue is not politics for its own sake. The issue is civil power enforcing worship.'

export const IMAGE_OF_BEAST_FORMATION_STAGES: readonly ImageOfBeastFormationStageData[] = [
  {
    label: 'Religious Authority',
    description: 'A system claims authority in matters of worship.',
  },
  {
    label: 'Political Partnership',
    description: 'Civil power is used to support religious claims.',
  },
  {
    label: 'Coercive Law',
    description: 'Worship is enforced through law and penalty.',
  },
  {
    label: 'Liberty Violated',
    description: 'Conscience is pressured or punished.',
  },
  {
    label: 'False Worship Crisis',
    description: 'The world faces a test of allegiance.',
  },
]
