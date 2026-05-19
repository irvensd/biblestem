/**
 * Canonical five-part breakdown for `FirstAngelsMessageBreakdown` (Foundations visual aid).
 */
export type FirstAngelsMessageBreakdownSectionData = {
  label: string
  description: string
}

export const FIRST_ANGELS_MESSAGE_BREAKDOWN_DEFAULT_CAPTION =
  'The first angel\'s message is God\'s final gospel call to the whole world.'

export const FIRST_ANGELS_MESSAGE_BREAKDOWN_SECTIONS: readonly FirstAngelsMessageBreakdownSectionData[] = [
  {
    label: 'Everlasting Gospel',
    description: 'The good news of God\'s faithful love revealed in Christ.',
  },
  {
    label: 'Fear God',
    description: 'Stand in awe of His goodness, mercy, holiness, and love.',
  },
  {
    label: 'Give Glory to Him',
    description: 'Magnify the beauty of His character in word and life.',
  },
  {
    label: 'Hour of Judgment',
    description: 'God\'s final work of justice, truth, and salvation has come.',
  },
  {
    label: 'Worship the Creator',
    description:
      'Return to the One who made heaven, earth, sea, and fountains of waters.',
  },
]
