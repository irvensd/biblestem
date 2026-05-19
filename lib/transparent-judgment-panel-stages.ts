export type TransparentJudgmentPanelData = {
  label: string
  text: string
}

export const TRANSPARENT_JUDGMENT_PANEL_DEFAULT_CAPTION =
  'God does not ask for blind trust. He opens the record and reveals the justice of His ways.'

export const TRANSPARENT_JUDGMENT_PANEL_SCRIPTURE_ANCHORS = [
  'Revelation 20:4',
  '1 Corinthians 6:2-3',
  'Deuteronomy 32:4',
  'Revelation 15:3-4',
] as const

export const TRANSPARENT_JUDGMENT_PANELS: readonly TransparentJudgmentPanelData[] = [
  {
    label: 'Records Opened',
    text: 'God allows the redeemed to review the full story.',
  },
  {
    label: 'Questions Answered',
    text: 'Every case is understood in light of God\'s love and justice.',
  },
  {
    label: 'Judgment Affirmed',
    text: 'The redeemed agree that God\'s ways are just and true.',
  },
]
