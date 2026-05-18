/** Sweet / bitter flow from Revelation 10 (The Day of Atonement study). */
export type SweetBitterPatternStageData = {
  label: string
  tagline: string
  /** Visual tone for the card accent. */
  tone: 'neutral' | 'sweet' | 'bitter'
}

export const SWEET_BITTER_PATTERN_DEFAULT_CAPTION =
  'Revelation 10 shows that disappointment did not end the mission. It clarified it.'

export const SWEET_BITTER_PATTERN_STAGES: readonly SweetBitterPatternStageData[] = [
  { label: 'Little Book Opened', tagline: "Daniel's prophecy becomes understood", tone: 'neutral' },
  { label: 'Sweet in the Mouth', tagline: 'The message brings excitement and expectation', tone: 'sweet' },
  { label: 'Bitter in the Belly', tagline: 'The disappointment reveals a misunderstood event', tone: 'bitter' },
  { label: 'Prophesy Again', tagline: 'God sends His people back to proclaim truth more clearly', tone: 'neutral' },
]
