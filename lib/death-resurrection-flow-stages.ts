/**
 * Canonical stages for death-and-resurrection flow visuals (Foundations).
 * Used by `DeathResurrectionFlow` and optional `deathResurrectionFlow` lesson blocks.
 */
export type DeathResurrectionStageData = {
  stageName: string
  description: string
  scriptures: readonly string[]
}

export const DEATH_RESURRECTION_FLOW_STAGES: readonly DeathResurrectionStageData[] = [
  {
    stageName: 'Life Now',
    description:
      'Human beings live, choose, trust, and respond to God in this present life.',
    scriptures: ['Deuteronomy 30:19', 'John 3:16'],
  },
  {
    stageName: 'The First Death',
    description:
      'The first death is described by Jesus as sleep, an unconscious state awaiting resurrection.',
    scriptures: ['John 11:11-14', 'Ecclesiastes 9:5'],
  },
  {
    stageName: 'The Resurrection',
    description: 'Jesus will call the dead from the graves, and they will be raised.',
    scriptures: ['John 5:28-29', '1 Thessalonians 4:16'],
  },
  {
    stageName: 'Judgment',
    description:
      'God brings every life into truth and settles the question of each person\'s response to Him.',
    scriptures: ['2 Corinthians 5:10', 'Revelation 20:12'],
  },
  {
    stageName: 'Eternal Life or Second Death',
    description:
      'The redeemed receive eternal life with Christ, while the second death brings the final end of sin and rebellion.',
    scriptures: ['Revelation 20:6', 'Revelation 20:14', 'Revelation 21:4'],
  },
] as const
