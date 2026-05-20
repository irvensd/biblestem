export type EdenToEdenTimelineStepData = {
  label: string
  description: string
  reference: string
}

export const EDEN_TO_EDEN_TIMELINE_DEFAULT_CAPTION =
  'The Bible begins with Eden and ends with Eden restored.'

export const EDEN_TO_EDEN_TIMELINE_STEPS: readonly EdenToEdenTimelineStepData[] = [
  {
    label: 'Creation',
    description: 'God creates a good world for love, beauty, work, rest, and fellowship.',
    reference: 'Genesis 1\u20132',
  },
  {
    label: 'The Fall',
    description: 'Sin damages humanity, creation, and relationship with God.',
    reference: 'Genesis 3',
  },
  {
    label: 'Redemption',
    description: 'Jesus enters the story to restore what sin has broken.',
    reference: 'John 3:16',
  },
  {
    label: 'New Creation',
    description: 'God makes a new heaven and a new earth.',
    reference: 'Revelation 21:1-5',
  },
  {
    label: 'Eden Restored',
    description: 'The curse is removed and the tree of life appears again.',
    reference: 'Revelation 22:1-3',
  },
]
