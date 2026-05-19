/**
 * Canonical hub map for `FearGloryJudgmentCreatorMap` (Foundations visual aid).
 */
export type FearGloryJudgmentCreatorResponseData = {
  label: string
  description: string
}

export const FEAR_GLORY_JUDGMENT_CREATOR_MAP_DEFAULT_CAPTION =
  'The gospel produces awe, worship, witness, and confidence before God.'

export const FEAR_GLORY_JUDGMENT_CREATOR_MAP_CENTER = {
  label: 'Everlasting Gospel',
  description: 'The good news of God\'s faithful love revealed in Christ.',
} as const

export const FEAR_GLORY_JUDGMENT_CREATOR_MAP_RESPONSES: readonly FearGloryJudgmentCreatorResponseData[] = [
  {
    label: 'Fear God',
    description: 'Awe, reverence, and wonder in response to His love.',
  },
  {
    label: 'Give Glory',
    description: 'Declare and reflect His good character.',
  },
  {
    label: 'Judgment Hour',
    description: 'Stand with confidence because the Judge is just and good.',
  },
  {
    label: 'Worship the Creator',
    description: 'Honor the One who made and sustains all things.',
  },
]
