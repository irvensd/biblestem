/**
 * Canonical comparison + bridge points for `CreatorWorshipSabbathBridge`.
 */
export type CreatorWorshipSabbathBridgePointData = {
  label: string
  description: string
}

export const CREATOR_WORSHIP_SABBATH_BRIDGE_DEFAULT_CAPTION =
  'The first angel\'s message calls the world back to the Creator, the Sabbath, and the rest found in Christ.'

export const CREATOR_WORSHIP_SABBATH_BRIDGE_REVELATION = {
  reference: 'Revelation 14:7',
  quote: 'Worship Him who made heaven and earth, the sea...',
} as const

export const CREATOR_WORSHIP_SABBATH_BRIDGE_EXODUS = {
  reference: 'Exodus 20:11',
  quote:
    'For in six days the LORD made heaven and earth, the sea, and all that in them is...',
} as const

export const CREATOR_WORSHIP_SABBATH_BRIDGE_POINTS: readonly CreatorWorshipSabbathBridgePointData[] = [
  {
    label: 'Creator',
    description: 'God made all things.',
  },
  {
    label: 'Sabbath',
    description: 'The seventh day remembers His creative work.',
  },
  {
    label: 'Rest',
    description: 'We receive salvation by dependence, not self-manufactured works.',
  },
  {
    label: 'Worship',
    description: 'The final message calls the world back to Creator-centered worship.',
  },
]
