export type GodsHeartInJudgmentPanelData = {
  label: string
  text: string
  reference: string
}

export const GODS_HEART_IN_JUDGMENT_DEFAULT_CAPTION =
  'Final judgment must be understood through the love of God revealed in Jesus.'

export const GODS_HEART_IN_JUDGMENT_PANELS: readonly GodsHeartInJudgmentPanelData[] = [
  {
    label: 'No Pleasure in Death',
    text: 'God takes no pleasure in the death of the wicked.',
    reference: 'Ezekiel 33:11',
  },
  {
    label: 'Love Does No Harm',
    text: 'Love works no ill to its neighbor.',
    reference: 'Romans 13:10',
  },
  {
    label: 'Perfect Love Casts Out Fear',
    text: 'God\u2019s love removes terror-based religion.',
    reference: '1 John 4:18',
  },
]
