/**
 * Canonical whole-person health areas for `WholePersonHealthPattern`.
 */
export type WholePersonHealthAreaData = {
  area: 'Body' | 'Mind' | 'Heart' | 'Spirit'
  items: readonly string[]
}

export const WHOLE_PERSON_HEALTH_AREAS: readonly WholePersonHealthAreaData[] = [
  {
    area: 'Body',
    items: ['nutrition', 'movement', 'rest', 'temperance'],
  },
  {
    area: 'Mind',
    items: ['thoughts', 'clarity', 'wisdom', 'choices'],
  },
  {
    area: 'Heart',
    items: ['emotions', 'relationships', 'peace', 'healing'],
  },
  {
    area: 'Spirit',
    items: ['trust', 'worship', 'surrender', 'purpose'],
  },
] as const

export const WHOLE_PERSON_HEALTH_DEFAULT_CAPTION =
  'God cares about the whole person: body, mind, heart, and spirit.'
