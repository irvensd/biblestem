export type GreatControversyResolutionTimelineStepData = {
  label: string
  description: string
  reference: string
  /** Shown when the stage is expanded: what this step reveals about God. */
  godReveals?: string
}

export type GreatControversyReflectionCardData = {
  prompt: string
}

export const GREAT_CONTROVERSY_RESOLUTION_TIMELINE_DEFAULT_CAPTION =
  'Tap each stage to see its Scripture and what it reveals about God.'

export const FINAL_ANSWER_TO_EVIL_COMPLETE_SUMMARY =
  'God\u2019s final answer to evil is not only judgment. It is full restoration through the revealed character and victory of Jesus.'

/** Lesson 5: seven-stage resolution path from rebellion to new creation. */
export const FINAL_ANSWER_TO_EVIL_TIMELINE_STEPS: readonly GreatControversyResolutionTimelineStepData[] = [
  {
    label: 'Rebellion Begins',
    description: 'Lucifer turns from worship to self-exaltation.',
    reference: 'Isaiah 14:13 to 14',
    godReveals: 'God created a free being capable of love. Rebellion was chosen, not designed by God.',
  },
  {
    label: 'Sin Enters Earth',
    description: 'Satan deceives humanity by attacking trust in God\u2019s word and character.',
    reference: 'Genesis 3:4 to 5',
    godReveals: 'God speaks clearly and warns honestly. Satan distorts truth, but God still seeks His fallen children.',
  },
  {
    label: 'Christ Reveals the Father',
    description: 'Jesus shows what God is truly like.',
    reference: 'John 14:9',
    godReveals: 'To know the Father\u2019s heart, look at Jesus. God is not distant from human suffering.',
  },
  {
    label: 'The Cross Exposes Satan',
    description: 'Satan\u2019s hatred and God\u2019s love are revealed clearly.',
    reference: 'Colossians 2:15',
    godReveals: 'At the cross, accusation is answered by intercession. God\u2019s love is stronger than Satan\u2019s hatred.',
  },
  {
    label: 'Satan Is Judged',
    description: 'The deceiver faces final destruction.',
    reference: 'Revelation 20:10',
    godReveals: 'God is merciful, but not permissive toward evil forever. Justice will be complete.',
  },
  {
    label: 'Creation Is Restored',
    description: 'God removes death, sorrow, crying, and pain.',
    reference: 'Revelation 21:1 to 5',
    godReveals: 'God\u2019s final answer is restoration, not only destruction. He makes all things new.',
  },
  {
    label: 'Evil Never Rises Again',
    description: 'God\u2019s victory is complete and permanent.',
    reference: 'Nahum 1:9',
    godReveals: 'Evil will not return. The universe will be safe, healed, and settled in truth forever.',
  },
]

export const FINAL_ANSWER_TO_EVIL_REFLECTION_CARDS: readonly GreatControversyReflectionCardData[] = [
  { prompt: 'What part of God\u2019s answer to evil gives you the most hope?' },
  { prompt: 'Which Scripture from this lesson speaks most directly to your doubts?' },
  { prompt: 'What accusation against God does the cross answer for you?' },
]

/** Generic fallback steps (older placeholder). */
export const GREAT_CONTROVERSY_RESOLUTION_TIMELINE_STEPS: readonly GreatControversyResolutionTimelineStepData[] =
  FINAL_ANSWER_TO_EVIL_TIMELINE_STEPS
