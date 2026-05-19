export type SatanBoundExplainerCardData = {
  label: string
  text: string
}

export const SATAN_BOUND_EXPLAINER_DEFAULT_CAPTION =
  'Satan is bound by a chain of events that removes his power to deceive.'

export const SATAN_BOUND_EXPLAINER_SCRIPTURE_ANCHORS = [
  'Revelation 20:1-3',
  'Jeremiah 4:23-25',
  'Isaiah 14:15-17',
  'Leviticus 16:20-22',
] as const

export const SATAN_BOUND_EXPLAINER_CARDS: readonly SatanBoundExplainerCardData[] = [
  {
    label: 'Bound by Circumstances',
    text: 'The wicked are dead, the redeemed are with Christ, and Satan has no one to deceive.',
  },
  {
    label: 'Desolate Earth',
    text: 'The earth lies ruined and empty, described as the bottomless pit.',
  },
  {
    label: 'No More Deception',
    text: 'Revelation says he is bound so that he should deceive the nations no more.',
  },
  {
    label: 'Responsibility Exposed',
    text: 'Satan is revealed as the instigator of sin and suffering.',
  },
]
