export type SatansMethodsMatrixRowData = {
  method: string
  description: string
  reference: string
}

export const SATANS_METHODS_MATRIX_DEFAULT_CAPTION =
  'Tap a method to highlight the Scripture passage that exposes it.'

export const SATANS_METHODS_MATRIX_ROWS: readonly SatansMethodsMatrixRowData[] = [
  {
    method: 'Deception',
    description: 'Falsehood and misleading claims about God and His people.',
    reference: '2 Thessalonians 2:9 to 10',
  },
  {
    method: 'Accusation',
    description: 'Charging the righteous before God and slandering their motives.',
    reference: 'Job 1:6 to 11',
  },
  {
    method: 'Misuse of Scripture',
    description: 'Twisting the Bible to justify rebellion.',
    reference: 'Matthew 4:5 to 7',
  },
  {
    method: 'False miracles',
    description: 'Signs that impress the senses but lead away from truth.',
    reference: 'Revelation 13:13 to 14',
  },
  {
    method: 'Destruction',
    description: 'Stealing, killing, and destroying what God made for good.',
    reference: 'John 10:10',
  },
  {
    method: 'War in heaven',
    description: 'Open rebellion against God and His angels.',
    reference: 'Revelation 12:7 to 9',
  },
]
