/**
 * Canonical flow for `AncientBabylonPattern` (Foundations visual aid).
 */
export type AncientBabylonPatternStageData = {
  label: string
  description: string
  tone?: 'neutral' | 'caution'
}

export const ANCIENT_BABYLON_PATTERN_DEFAULT_CAPTION =
  'Babylon represents the attempt to replace trust in God with human pride, control, and false worship.'

export const ANCIENT_BABYLON_PATTERN_STAGES: readonly AncientBabylonPatternStageData[] = [
  {
    label: 'Rebellion and Unbelief',
    description: 'Babel begins with distrust in God\'s covenant promise.',
    tone: 'neutral',
  },
  {
    label: 'Self-Exaltation',
    description: 'Humanity attempts to build upward and make a name for itself.',
    tone: 'caution',
  },
  {
    label: 'Confusion',
    description: 'God confuses the language and scatters the people.',
    tone: 'neutral',
  },
  {
    label: 'Forced Worship',
    description: 'Babylon later uses power and threat to command worship.',
    tone: 'caution',
  },
  {
    label: 'Fall',
    description: 'Babylon collapses under the weight of pride and blasphemy.',
    tone: 'caution',
  },
]
