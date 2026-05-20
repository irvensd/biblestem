export type HeavenToRebellionTimelineStageData = {
  label: string
  tagline: string
  reference: string
}

export const HEAVEN_TO_REBELLION_TIMELINE_DEFAULT_CAPTION =
  'Tap each stage to trace where evil began and how rebellion unfolded in heaven.'

export const HEAVEN_TO_REBELLION_TIMELINE_STAGES: readonly HeavenToRebellionTimelineStageData[] = [
  {
    label: 'Creation declared good',
    tagline: 'God made a perfect world and called it very good.',
    reference: 'Genesis 1:31',
  },
  {
    label: 'Lucifer created perfect',
    tagline: 'The anointed cherub was blameless until iniquity was found.',
    reference: 'Ezekiel 28:14 to 15',
  },
  {
    label: 'Fall from heaven',
    tagline: 'Pride led to rebellion and expulsion from heaven.',
    reference: 'Isaiah 14:12',
  },
  {
    label: 'God is not the author of sin',
    tagline: 'Temptation does not come from God, who is light without darkness.',
    reference: 'James 1:13 to 17',
  },
  {
    label: 'God is light',
    tagline: 'In Him is no darkness at all.',
    reference: '1 John 1:5',
  },
]
