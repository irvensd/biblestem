export type WorshipDirectionDiagramPillarData = {
  label: string
  tagline: string
  reference: string
}

export const WORSHIP_DIRECTION_DIAGRAM_DEFAULT_CAPTION =
  'Worship always moves toward someone. Scripture contrasts worship toward God, self, and control over others.'

export const WORSHIP_DIRECTION_DIAGRAM_PILLARS: readonly WorshipDirectionDiagramPillarData[] = [
  {
    label: 'Toward God',
    tagline: 'True worship honors the Creator and receives life from Him.',
    reference: 'Matthew 4:10',
  },
  {
    label: 'Toward self',
    tagline: 'Pride turns worship inward and seeks honor for oneself.',
    reference: 'Isaiah 14:13 to 14',
  },
  {
    label: 'Control over others',
    tagline: 'Self-exaltation often demands allegiance and power from others.',
    reference: 'Romans 1:21 to 25',
  },
]
