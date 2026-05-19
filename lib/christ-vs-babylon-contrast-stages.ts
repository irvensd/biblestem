/**
 * Canonical contrast data for `ChristVsBabylonContrast` (Foundations visual aid).
 */
export type ChristVsBabylonContrastStepData = {
  label: string
}

export const CHRIST_VS_BABYLON_CONTRAST_DEFAULT_CAPTION =
  'Jesus reveals greatness through humility. Babylon seeks greatness through self-exaltation.'

export const CHRIST_VS_BABYLON_CHRIST = {
  columnTitle: 'The Way of Christ',
  scriptureRef: 'Philippians 2:5-11',
  steps: [
    { label: 'Humility' },
    { label: 'Self-giving love' },
    { label: 'Service' },
    { label: 'Liberty' },
    { label: 'Exalted by God' },
  ],
} as const

export const CHRIST_VS_BABYLON_BABYLON = {
  columnTitle: 'The Way of Babylon',
  scriptureRef: 'Isaiah 14:12-15',
  steps: [
    { label: 'Pride' },
    { label: 'Self-exaltation' },
    { label: 'Control' },
    { label: 'Coercion' },
    { label: 'Brought down' },
  ],
} as const
