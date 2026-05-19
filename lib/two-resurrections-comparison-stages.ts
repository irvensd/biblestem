export type TwoResurrectionsComparisonItemData = {
  label: string
}

export type TwoResurrectionsComparisonColumnData = {
  columnTitle: string
  scriptureRef: string
  items: readonly TwoResurrectionsComparisonItemData[]
}

export const TWO_RESURRECTIONS_COMPARISON_DEFAULT_CAPTION =
  'The Millennium is framed by two resurrections with two very different outcomes.'

export const TWO_RESURRECTIONS_FIRST: TwoResurrectionsComparisonColumnData = {
  columnTitle: 'First Resurrection',
  scriptureRef: 'Revelation 20:4-6; 1 Thessalonians 4:16-17; John 5:28-29',
  items: [
    { label: 'Occurs at the Second Coming' },
    { label: 'For the righteous' },
    { label: 'Begins the Millennium' },
    { label: 'Redeemed reign with Christ' },
    { label: 'Resurrection of life' },
  ],
}

export const TWO_RESURRECTIONS_SECOND: TwoResurrectionsComparisonColumnData = {
  columnTitle: 'Second Resurrection',
  scriptureRef: 'Revelation 20:5-9; Revelation 20:11-15; John 5:28-29',
  items: [
    { label: 'Occurs after the Millennium' },
    { label: 'For the wicked' },
    { label: 'Followed by final rebellion' },
    { label: 'Leads to executive judgment' },
    { label: 'Resurrection of condemnation' },
  ],
}
