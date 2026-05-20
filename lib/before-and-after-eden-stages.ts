export type BeforeAndAfterEdenColumnItem = {
  label: string
}

export type BeforeAndAfterEdenPairData = {
  before: string
  after: string
  explanation: string
}

export const BEFORE_AND_AFTER_EDEN_DEFAULT_CAPTION =
  'Tap each contrast pair to see how sin changed what God made good.'

export const BEFORE_AND_AFTER_EDEN_BEFORE_COLUMN = {
  title: 'God\u2019s Original Design',
  scripture: 'Genesis 1:31 \u00b7 Genesis 2:15 to 17 \u00b7 Genesis 2:18 to 25',
  items: [
    'Life',
    'Trust',
    'Peace',
    'Communion with God',
    'Meaningful work',
    'Human unity',
    'Goodness',
  ] as const,
}

export const BEFORE_AND_AFTER_EDEN_AFTER_COLUMN = {
  title: 'After Sin Entered',
  scripture: 'Genesis 3:7 to 19 \u00b7 Romans 5:12 \u00b7 Romans 6:23',
  items: [
    'Fear',
    'Shame',
    'Blame',
    'Pain',
    'Struggle',
    'Separation',
    'Death',
  ] as const,
}

export const BEFORE_AND_AFTER_EDEN_PAIRS: readonly BeforeAndAfterEdenPairData[] = [
  {
    before: 'Life',
    after: 'Death',
    explanation: 'Sin did not improve humanity. Death entered where God had given life.',
  },
  {
    before: 'Trust',
    after: 'Distrust',
    explanation: 'Sin did not improve humanity. Distrust replaced trust in God\u2019s word.',
  },
  {
    before: 'Peace',
    after: 'Fear',
    explanation: 'Sin did not improve humanity. Fear followed hiding from the Creator.',
  },
  {
    before: 'Communion with God',
    after: 'Hiding',
    explanation: 'Sin did not improve humanity. Separation replaced nearness to God.',
  },
  {
    before: 'Unity',
    after: 'Blame',
    explanation: 'Sin did not improve humanity. Blame replaced human unity.',
  },
]

export const BEFORE_AND_AFTER_EDEN_PAIR_EXPLANATION =
  'Sin did not improve humanity. It damaged what God made good.'

export const BEFORE_AND_AFTER_EDEN_COMPLETE_SUMMARY =
  'Suffering is not proof that God\u2019s design failed. It is proof that sin is destructive. Scripture begins with a good creation and moves toward full restoration.'
