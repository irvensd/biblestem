export type JesusInSufferingPlacesCardData = {
  label: string
  description: string
  reference: string
}

export const JESUS_IN_SUFFERING_PLACES_REFLECTION_QUESTIONS: readonly string[] = [
  'What does this reveal about Jesus?',
  'What does this reveal about the Father?',
  'How does this speak to someone who is suffering?',
]

export const JESUS_IN_SUFFERING_PLACES_DEFAULT_CAPTION =
  'Tap each card to see where Jesus meets human suffering in Scripture.'

export const JESUS_IN_SUFFERING_PLACES_COMPLETE_SUMMARY =
  'God\u2019s answer to suffering is not distance. In Jesus, God comes near, carries grief, defeats death, and reveals the Father\u2019s heart.'

/** Lesson 3: six places where Jesus meets human suffering. */
export const JESUS_IN_SUFFERING_PLACES_CARDS: readonly JesusInSufferingPlacesCardData[] = [
  {
    label: 'Grief',
    description: 'Jesus wept at the tomb of Lazarus.',
    reference: 'John 11:35',
  },
  {
    label: 'Sickness',
    description: 'Jesus healed the sick and showed compassion to the afflicted.',
    reference: 'Matthew 4:23 to 24',
  },
  {
    label: 'Temptation',
    description: 'Jesus was tempted, yet without sin, and understands human weakness.',
    reference: 'Hebrews 4:15',
  },
  {
    label: 'Sin\u2019s Weight',
    description: 'Jesus bore grief, sorrow, and sin to bring healing.',
    reference: 'Isaiah 53:4 to 6',
  },
  {
    label: 'Abandonment',
    description: 'Jesus cried out under the weight of the cross so no sufferer would be beyond His reach.',
    reference: 'Matthew 27:46',
  },
  {
    label: 'Death',
    description: 'Through death, Jesus defeated the one who had the power of death.',
    reference: 'Hebrews 2:14',
  },
]
