export type SatansMethodsMatrixRowData = {
  method: string
  description: string
  reference: string
}

export type SatansMethodsMatrixScenarioData = {
  prompt: string
  /** Method label the scenario illustrates. */
  answer: string
}

export const SATANS_METHODS_MATRIX_DEFAULT_CAPTION =
  'Tap a method to highlight its Scripture. Match each method to the correct passage, then work through the examples.'

export const SATANS_METHODS_MATRIX_COMPLETE_SUMMARY =
  'Satan\u2019s power depends on deception. Scripture exposes his methods so God\u2019s people can stand in truth.'

/** Lesson 4: six methods with passages from the Scripture Trail. */
export const WAR_BEHIND_WORLD_METHODS_MATRIX_ROWS: readonly SatansMethodsMatrixRowData[] = [
  {
    method: 'Deception',
    description: 'Satan distorts truth to mislead the world.',
    reference: 'Revelation 12:9',
  },
  {
    method: 'Accusation',
    description: 'Satan brings charges to produce shame, fear, and distrust.',
    reference: 'Revelation 12:10',
  },
  {
    method: 'Persecution',
    description: 'Satan makes war against those who remain loyal to God.',
    reference: 'Revelation 12:17',
  },
  {
    method: 'Misused Scripture',
    description: 'Satan can quote Scripture while twisting its meaning away from God\u2019s character.',
    reference: 'Matthew 4:5 to 7',
  },
  {
    method: 'False Miracles',
    description: 'Satan can use signs and wonders to support lies.',
    reference: '2 Thessalonians 2:9 to 10',
  },
  {
    method: 'Destruction',
    description: 'Satan\u2019s kingdom steals, kills, and destroys.',
    reference: 'John 10:10',
  },
]

export const WAR_BEHIND_WORLD_METHODS_MATRIX_SCENARIOS: readonly SatansMethodsMatrixScenarioData[] = [
  { prompt: 'You are too guilty for God to receive you.', answer: 'Accusation' },
  { prompt: 'A miracle happened, so the message must be true.', answer: 'False Miracles' },
  {
    prompt: 'This Bible verse proves I can test God and be reckless.',
    answer: 'Misused Scripture',
  },
  {
    prompt: 'Everyone who follows God should be pressured into silence.',
    answer: 'Persecution',
  },
  { prompt: 'God is holding you back from real freedom.', answer: 'Deception' },
]

/** Generic fallback rows (older placeholder). */
export const SATANS_METHODS_MATRIX_ROWS: readonly SatansMethodsMatrixRowData[] =
  WAR_BEHIND_WORLD_METHODS_MATRIX_ROWS
