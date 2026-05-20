export type WorshipShiftPanelId = 'true' | 'inward' | 'demanded'

export type WorshipShiftPanelData = {
  id: WorshipShiftPanelId
  label: string
  direction: string
  reference: string
  meaning: string
}

export type WorshipShiftScenarioData = {
  prompt: string
  answer: WorshipShiftPanelId
}

export const WORSHIP_SHIFT_DEFAULT_CAPTION =
  'Tap a panel to review each worship direction, then identify which direction each scenario reflects.'

export const WORSHIP_SHIFT_PANELS: readonly WorshipShiftPanelData[] = [
  {
    id: 'true',
    label: 'True Worship',
    direction: 'The creature honors the Creator and receives life from Him.',
    reference: 'Revelation 14:7',
    meaning: 'God receives first place.',
  },
  {
    id: 'inward',
    label: 'Inward Worship',
    direction: 'The creature turns inward and treats self as the center.',
    reference: 'Isaiah 14:13 to 14',
    meaning: 'Self becomes the center.',
  },
  {
    id: 'demanded',
    label: 'Demanded Worship',
    direction: 'The creature seeks control and allegiance from others.',
    reference: 'Matthew 4:8 to 10',
    meaning: 'Satan tries to receive what belongs only to God.',
  },
]

export const WORSHIP_SHIFT_SCENARIOS: readonly WorshipShiftScenarioData[] = [
  {
    prompt: 'I want people to notice my gifts more than I want God to be glorified.',
    answer: 'inward',
  },
  {
    prompt: 'I choose obedience even when no one sees it.',
    answer: 'true',
  },
  {
    prompt: 'I manipulate others so they will admire or depend on me.',
    answer: 'demanded',
  },
  {
    prompt: 'I care more about my platform than my character.',
    answer: 'inward',
  },
]

export const WORSHIP_SHIFT_ANSWER_LABELS: Record<WorshipShiftPanelId, string> = {
  true: 'True Worship',
  inward: 'Inward Worship',
  demanded: 'Demanded Worship',
}
