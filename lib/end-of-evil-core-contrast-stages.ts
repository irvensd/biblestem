export type EndOfEvilCoreContrastItemData = {
  label: string
}

export type EndOfEvilCoreContrastColumnData = {
  columnTitle: string
  items: readonly EndOfEvilCoreContrastItemData[]
}

export const END_OF_EVIL_CORE_CONTRAST_DEFAULT_CAPTION =
  'God\u2019s final judgment does not preserve evil forever. It brings evil to a complete end.'

export const END_OF_EVIL_CORE_CONTRAST_SCRIPTURE_ANCHORS = [
  'John 3:16',
  'Romans 6:23',
  'Malachi 4:1-3',
  'Ezekiel 28:18-19',
  'Revelation 21:4',
] as const

export const END_OF_EVIL_CORE_CONTRAST_ETERNAL_TORMENT: EndOfEvilCoreContrastColumnData = {
  columnTitle: 'Eternal Torment View',
  items: [
    { label: 'Evil continues forever' },
    { label: 'The lost live forever in pain' },
    { label: 'Suffering never ends' },
    { label: 'Death is never fully destroyed' },
    { label: 'God\u2019s universe contains eternal misery' },
  ],
}

export const END_OF_EVIL_CORE_CONTRAST_BIBLICAL: EndOfEvilCoreContrastColumnData = {
  columnTitle: 'Biblical End of Evil',
  items: [
    { label: 'Evil is brought to an end' },
    { label: 'The wicked perish' },
    { label: 'The wages of sin is death' },
    { label: 'Satan is reduced to ashes' },
    { label: 'God makes all things new' },
  ],
}
