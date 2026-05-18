/**
 * Canonical creation-week forming/filling stages for `CreationRestPattern`.
 * Days 1–3 form; days 4–6 fill; day 7 is rest.
 */
export type CreationRestPatternStageData = {
  dayLabel: string
  phase: 'forming' | 'filling' | 'rest'
  summary: string
}

export const CREATION_REST_PATTERN_STAGES: readonly CreationRestPatternStageData[] = [
  {
    dayLabel: 'Day 1',
    phase: 'forming',
    summary: 'Light separated from darkness',
  },
  {
    dayLabel: 'Day 4',
    phase: 'filling',
    summary: 'Sun, moon, and stars fill the space',
  },
  {
    dayLabel: 'Day 2',
    phase: 'forming',
    summary: 'Sky and waters formed',
  },
  {
    dayLabel: 'Day 5',
    phase: 'filling',
    summary: 'Birds and sea creatures fill the spaces',
  },
  {
    dayLabel: 'Day 3',
    phase: 'forming',
    summary: 'Dry land and vegetation formed',
  },
  {
    dayLabel: 'Day 6',
    phase: 'filling',
    summary: 'Land animals and humanity fill the land',
  },
  {
    dayLabel: 'Day 7',
    phase: 'rest',
    summary: 'God rests, blesses, and sanctifies the seventh day',
  },
] as const

export const CREATION_REST_PATTERN_DEFAULT_CAPTION =
  'Creation rises toward rest. Humanity begins life by receiving God’s completed work.'
