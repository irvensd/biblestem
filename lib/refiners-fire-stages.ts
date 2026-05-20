export type RefinersFireStageData = {
  label: string
  description: string
  reference: string
}

export const REFINERS_FIRE_REFLECTION_QUESTIONS: readonly string[] = [
  'What is this trial revealing in me?',
  'What might God be trying to heal?',
  'Where do I need to depend on grace instead of self?',
  'How can this trial make me more like Christ?',
]

export const REFINERS_FIRE_DEFAULT_CAPTION =
  'Tap each stage to see how the Refiner works through trials in Scripture.'

export const REFINERS_FIRE_COMPLETE_SUMMARY =
  'The furnace is not proof of abandonment. In the hands of the Refiner, trials can reveal, purify, strengthen, and prepare what God sees as precious.'

/** Lesson 4: five-stage refining process. */
export const REFINERS_FIRE_STAGES: readonly RefinersFireStageData[] = [
  {
    label: 'Pressure Reveals',
    description: 'Trials can expose hidden fears, motives, wounds, and weaknesses.',
    reference: 'Psalm 139:23 to 24',
  },
  {
    label: 'Faith Is Tested',
    description: 'Testing reveals whether faith is rooted in God or circumstances.',
    reference: '1 Peter 1:6 to 7',
  },
  {
    label: 'Dross Is Removed',
    description: 'God works to remove what corrupts the heart.',
    reference: 'Malachi 3:2 to 3',
  },
  {
    label: 'Grace Sustains',
    description: 'God\u2019s strength is revealed in human weakness.',
    reference: '2 Corinthians 12:9',
  },
  {
    label: 'Character Is Strengthened',
    description: 'Tribulation can produce endurance, proven character, and hope.',
    reference: 'Romans 5:3 to 5',
  },
]
