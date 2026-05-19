/**
 * Canonical data for `PatienceSaintsTriad` (Foundations visual aid).
 */
export type PatienceSaintsTriadElementData = {
  label: string
  description: string
}

export const PATIENCE_SAINTS_TRIAD_DEFAULT_CAPTION =
  'God\'s people endure through the faith of Jesus and love-motivated obedience.'

export const PATIENCE_SAINTS_TRIAD_ELEMENTS: readonly PatienceSaintsTriadElementData[] = [
  {
    label: 'Endurance',
    description: 'They remain faithful under pressure.',
  },
  {
    label: 'Commandments of God',
    description: 'They love God\'s law because they trust His character.',
  },
  {
    label: 'Faith of Jesus',
    description: 'They rely on Christ\'s faithfulness as the basis of salvation.',
  },
]
