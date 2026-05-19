/**
 * Canonical comparison data for `MarkVsSealComparison` (Foundations visual aid).
 */
export type MarkVsSealComparisonItemData = {
  label: string
}

export const MARK_VS_SEAL_COMPARISON_DEFAULT_CAPTION =
  'The final issue is worship, allegiance, authority, and love.'

export const MARK_VS_SEAL_COMPARISON_NOTE =
  'The mark is not received ignorantly before the final worship crisis. It is connected to enforced worship and allegiance.'

export const MARK_VS_SEAL_SEAL = {
  columnTitle: 'Seal of God',
  scriptureRef: 'Revelation 7:1-3; Ezekiel 20:12, 20; Exodus 20:8-11',
  items: [
    { label: 'God\'s authority' },
    { label: 'Written in the forehead' },
    { label: 'Law in the heart' },
    { label: 'Sabbath as sign' },
    { label: 'Worship by love' },
    { label: 'Loyalty to Creator' },
  ],
} as const

export const MARK_VS_SEAL_MARK = {
  columnTitle: 'Mark of the Beast',
  scriptureRef: 'Revelation 13:16-17; Revelation 14:9-10',
  items: [
    { label: 'Human authority' },
    { label: 'Forehead or hand' },
    { label: 'False worship' },
    { label: 'Enforced rest' },
    { label: 'Compliance by pressure' },
    { label: 'Loyalty to the beast system' },
  ],
} as const
