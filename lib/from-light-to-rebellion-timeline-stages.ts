import type { HeavenToRebellionTimelineStageData } from '@/lib/heaven-to-rebellion-timeline-stages'

export const FROM_LIGHT_TO_REBELLION_DEFAULT_CAPTION =
  'Tap each stage to follow how a created being moved from perfection toward rebellion in heaven.'

/** Lesson 1 visual: From Light to Rebellion (five tappable stages). */
export const FROM_LIGHT_TO_REBELLION_STAGES: readonly HeavenToRebellionTimelineStageData[] = [
  {
    label: 'Created Perfect',
    tagline: 'Lucifer began as a created being without corruption.',
    reference: 'Ezekiel 28:15',
  },
  {
    label: 'Honored Near God',
    tagline: 'He held a position of trust and nearness to the throne.',
    reference: 'Ezekiel 28:14',
  },
  {
    label: 'Pride Entered the Heart',
    tagline: 'His beauty became the doorway to self-exaltation.',
    reference: 'Ezekiel 28:17',
  },
  {
    label: 'The Desire to Rise',
    tagline: 'Lucifer wanted a throne that belonged to God alone.',
    reference: 'Isaiah 14:13 to 14',
  },
  {
    label: 'The Fall From Heaven',
    tagline: 'Rebellion led to separation from heaven.',
    reference: 'Luke 10:18',
  },
]
