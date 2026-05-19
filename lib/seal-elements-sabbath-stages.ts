/**
 * Canonical data for `SealElementsSabbath` (Foundations visual aid).
 */
export type SealElementsSabbathElementData = {
  label: string
  text: string
}

export const SEAL_ELEMENTS_SABBATH_DEFAULT_CAPTION =
  'The Sabbath points to God\'s name, authority, and creative dominion.'

export const SEAL_ELEMENTS_SABBATH_SOURCE = 'Exodus 20:8-11'

export const SEAL_ELEMENTS_SABBATH_EXPLANATION =
  'The Sabbath commandment contains the elements of God\'s authority and points to Him as Creator.'

export const SEAL_ELEMENTS_SABBATH_ELEMENTS: readonly SealElementsSabbathElementData[] = [
  {
    label: 'Name',
    text: 'The LORD',
  },
  {
    label: 'Title',
    text: 'Creator',
  },
  {
    label: 'Territory',
    text: 'Heaven, earth, sea, and all that is in them',
  },
]
