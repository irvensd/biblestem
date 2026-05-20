export type FromGroaningToGloryStageData = {
  label: string
  description: string
  reference: string
}

export const FROM_GROANING_TO_GLORY_REFLECTION_QUESTIONS: readonly string[] = [
  'What does this stage reveal about God\u2019s plan?',
  'How does this give hope to someone who is suffering?',
  'What faithful response does this invite from me?',
]

export const FROM_GROANING_TO_GLORY_DEFAULT_CAPTION =
  'Tap each stage to follow Scripture from creation groaning to God making all things new.'

export const FROM_GROANING_TO_GLORY_COMPLETE_SUMMARY =
  'Suffering is real, but it is not final. Scripture moves from creation groaning to Christ redeeming, believers comforting, Satan being judged, and God making all things new.'

/** Lesson 5: six-stage timeline from groaning to glory. */
export const FROM_GROANING_TO_GLORY_STAGES: readonly FromGroaningToGloryStageData[] = [
  {
    label: 'Creation Groans',
    description: 'The whole creation suffers under the weight of sin.',
    reference: 'Romans 8:22 to 23',
  },
  {
    label: 'Christ Enters Pain',
    description: 'Jesus bears grief, sorrow, sin, and suffering.',
    reference: 'Isaiah 53:3 to 5',
  },
  {
    label: 'Believers Comfort Others',
    description: 'God comforts His people so they can comfort others.',
    reference: '2 Corinthians 1:3 to 4',
  },
  {
    label: 'The Dead in Christ Rise',
    description: 'Death is not final for those who belong to Christ.',
    reference: '1 Thessalonians 4:16',
  },
  {
    label: 'Satan Is Judged',
    description: 'The deceiver and destroyer will face final judgment.',
    reference: 'Revelation 20:10',
  },
  {
    label: 'God Makes All Things New',
    description: 'God removes death, sorrow, crying, and pain forever.',
    reference: 'Revelation 21:1 to 5',
  },
]
