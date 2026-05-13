/**
 * Canonical stages for sanctuary-as-journey visuals (Christ-centered Foundations map).
 * Used by `SanctuaryJourneyMap` and optional `sanctuaryJourneyMap` lesson blocks.
 */
export type SanctuaryJourneyStageData = {
  stageName: string
  location: string
  symbol: string
  meaning: string
  scriptures: readonly string[]
}

export const SANCTUARY_JOURNEY_STAGES: readonly SanctuaryJourneyStageData[] = [
  {
    stageName: 'The Door',
    location: 'Entrance to the Courtyard',
    symbol: 'Access through Christ',
    meaning: 'Jesus is the way into restored relationship with God.',
    scriptures: ['John 10:9', 'John 14:6'],
  },
  {
    stageName: 'The Altar of Sacrifice',
    location: 'Courtyard',
    symbol: 'The Lamb',
    meaning: 'Jesus gave His life for our sins.',
    scriptures: ['John 1:29', '1 Peter 1:18-19'],
  },
  {
    stageName: 'The Laver',
    location: 'Courtyard',
    symbol: 'Washing',
    meaning: 'God cleanses and renews us through the Holy Spirit.',
    scriptures: ['Titus 3:5', 'Ezekiel 36:25-27'],
  },
  {
    stageName: 'The Table of Bread',
    location: 'Holy Place',
    symbol: 'Bread of Life',
    meaning: 'Jesus sustains us with His life and word.',
    scriptures: ['John 6:35', 'Matthew 4:4'],
  },
  {
    stageName: 'The Lampstand',
    location: 'Holy Place',
    symbol: 'Light',
    meaning: 'Jesus is the Light of the world and the Spirit illuminates our path.',
    scriptures: ['John 8:12', 'Revelation 4:5'],
  },
  {
    stageName: 'The Altar of Incense',
    location: 'Holy Place',
    symbol: 'Prayer and intercession',
    meaning: 'Through Christ, our prayers rise before God.',
    scriptures: ['Revelation 8:3-4', 'Hebrews 7:25'],
  },
  {
    stageName: 'The Ark of the Covenant',
    location: 'Most Holy Place',
    symbol: "God's presence and law of love",
    meaning: 'God desires to dwell with His people and write His law in their hearts.',
    scriptures: ['Hebrews 10:16', 'Exodus 25:21-22'],
  },
  {
    stageName: 'The Day of Atonement',
    location: 'Most Holy Place ministry',
    symbol: 'Final cleansing',
    meaning:
      'God completes the work of cleansing, judgment, restoration, and the complete removal of evil.',
    scriptures: ['Leviticus 16:15-22', 'Daniel 7:9-10', 'Revelation 14:6-7'],
  },
] as const
