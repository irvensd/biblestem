export type ConditionalImmortalityPanelData = {
  label: string
  text: string
  reference: string
  variant?: 'lie' | 'truth'
}

export const CONDITIONAL_IMMORTALITY_DEFAULT_CAPTION =
  'The Bible teaches conditional immortality: eternal life is given in Christ.'

export const CONDITIONAL_IMMORTALITY_PANELS: readonly ConditionalImmortalityPanelData[] = [
  {
    label: 'The Lie',
    text: 'You shall not surely die.',
    reference: 'Genesis 3:4',
    variant: 'lie',
  },
  {
    label: 'God Alone Has Immortality',
    text: 'Immortality belongs inherently to God.',
    reference: '1 Timothy 6:16',
    variant: 'truth',
  },
  {
    label: 'Mortality Put On Immortality',
    text: 'The redeemed receive immortality at Christ\u2019s return.',
    reference: '1 Corinthians 15:51-54',
    variant: 'truth',
  },
  {
    label: 'Life Through Christ',
    text: 'Eternal life is a gift, not a natural possession.',
    reference: 'Romans 6:23',
    variant: 'truth',
  },
]
