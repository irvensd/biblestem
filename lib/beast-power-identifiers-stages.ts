/**
 * Canonical identifiers for `BeastPowerIdentifiers` (Foundations visual aid).
 */
export type BeastPowerIdentifierData = {
  label: string
  text: string
  reference?: string
}

export const BEAST_POWER_IDENTIFIERS_DEFAULT_CAPTION =
  'Revelation identifies the beast power by its principles, authority, actions, and historical role.'

export const BEAST_POWER_IDENTIFIERS: readonly BeastPowerIdentifierData[] = [
  {
    label: 'From the Sea',
    text: 'Rises among peoples, multitudes, nations, and tongues.',
    reference: 'Revelation 13:1',
  },
  {
    label: 'Seven Heads and Ten Horns',
    text: 'Connected to the political powers described in Daniel and Revelation.',
    reference: 'Revelation 13:1',
  },
  {
    label: 'Composite Beast',
    text: 'Carries features of leopard, bear, and lion, echoing Daniel 7.',
    reference: 'Revelation 13:2',
  },
  {
    label: 'Dragon\'s Authority',
    text: 'Receives power, throne, and great authority from the dragon.',
    reference: 'Revelation 13:2',
  },
  {
    label: 'Forty-Two Months',
    text: 'Exercises authority during the prophetic 1260-year period.',
    reference: 'Revelation 13:5',
  },
  {
    label: 'Blasphemy',
    text: 'Speaks claims and teachings that misrepresent God.',
    reference: 'Revelation 13:5-6',
  },
  {
    label: 'War Against the Saints',
    text: 'Uses power to persecute followers of Jesus.',
    reference: 'Revelation 13:7',
  },
]
