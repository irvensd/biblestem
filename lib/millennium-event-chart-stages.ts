/**
 * Canonical data for `MillenniumEventChart` (Foundations — The Millennium).
 */
export type MillenniumEventChartCardData = {
  title: string
  text: string
  references: readonly string[]
}

export type MillenniumEventChartColumnData = {
  label: string
  cards: readonly MillenniumEventChartCardData[]
}

export const MILLENNIUM_EVENT_CHART_DEFAULT_CAPTION =
  'The Millennium is framed by two resurrections and reveals God\'s transparent justice before evil is finally ended.'

export const MILLENNIUM_EVENT_CHART_BEFORE: MillenniumEventChartColumnData = {
  label: 'Before the Millennium',
  cards: [
    {
      title: 'General Ruin of Earth',
      text: 'Earth is brought to ruin by demonic and human deeds.',
      references: ['Revelation 11:18', 'Revelation 20:1', 'Isaiah 14:12-17', 'Isaiah 24:4-13'],
    },
    {
      title: 'The Second Coming of Christ',
      text: 'Jesus returns in glory.',
      references: ['Revelation 19:11-21', 'Matthew 24:29-31', '1 Thessalonians 4:13-18'],
    },
    {
      title: 'Resurrection of the Righteous',
      text: 'The dead in Christ rise at His coming.',
      references: ['Revelation 20:4-5', '1 Thessalonians 4:16-17'],
    },
    {
      title: 'Wicked Slain at the Second Coming',
      text: 'Those who persist in rebellion are destroyed by the brightness of His coming.',
      references: ['Revelation 19:21', '2 Thessalonians 2:8'],
    },
  ],
}

export const MILLENNIUM_EVENT_CHART_DURING: MillenniumEventChartColumnData = {
  label: 'During the Millennium',
  cards: [
    {
      title: 'Satan Is in Chains',
      text: 'Satan is bound by circumstances and can deceive the nations no more.',
      references: ['Revelation 20:1-3', 'Isaiah 14:15-17'],
    },
    {
      title: 'Wicked of All Ages Are Dead',
      text: 'The lost remain dead during the thousand years.',
      references: ['Revelation 19:21', 'Revelation 20:5', 'Jeremiah 25:33'],
    },
    {
      title: 'Earth Lies Desolate',
      text: 'The earth is left empty and ruined like a bottomless pit.',
      references: ['Revelation 20:1', 'Jeremiah 4:23-25'],
    },
    {
      title: 'Redeemed Engage in Judgment',
      text: 'The redeemed reign with Christ and review the records of judgment.',
      references: ['Revelation 20:4', '1 Corinthians 6:2-3'],
    },
  ],
}

export const MILLENNIUM_EVENT_CHART_AFTER: MillenniumEventChartColumnData = {
  label: 'After the Millennium',
  cards: [
    {
      title: 'New Jerusalem Comes to Earth',
      text: 'The holy city descends from God out of heaven.',
      references: ['Revelation 20:9', 'Revelation 21:1-2'],
    },
    {
      title: 'Wicked Are Resurrected',
      text: 'The lost are raised after the thousand years and join Satan in final rebellion.',
      references: ['Revelation 20:5-8'],
    },
    {
      title: 'Executive Judgment Occurs',
      text: 'The final judgment is carried out before the universe.',
      references: ['Revelation 20:11-15'],
    },
    {
      title: 'Evil Destroyed and Earth Made New',
      text: 'Satan, sin, and death are destroyed, and the earth is cleansed and made new.',
      references: ['Revelation 20:9', 'Revelation 21:1-5', '2 Peter 3:10-13'],
    },
  ],
}
