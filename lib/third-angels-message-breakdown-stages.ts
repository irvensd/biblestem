/**
 * Canonical five-part breakdown for `ThirdAngelsMessageBreakdown` (Foundations visual aid).
 */
export type ThirdAngelsMessageBreakdownSectionData = {
  label: string
  description: string
}

export const THIRD_ANGELS_MESSAGE_BREAKDOWN_DEFAULT_CAPTION =
  'The third angel\'s message warns against coerced worship and calls people to faithful love.'

export const THIRD_ANGELS_MESSAGE_BREAKDOWN_SECTIONS: readonly ThirdAngelsMessageBreakdownSectionData[] =
  [
    {
      label: 'Worship Warning',
      description: 'A warning against worshiping the beast and his image.',
    },
    {
      label: 'The Mark',
      description: 'A sign of allegiance to a coercive system of false worship.',
    },
    {
      label: 'Consequence',
      description: 'False worship separates people from the life-giving love of God.',
    },
    {
      label: 'Patience of the Saints',
      description: 'God\'s people endure with faithful love.',
    },
    {
      label: 'Commandments and Faith',
      description: 'They keep the commandments of God and the faith of Jesus.',
    },
  ]
