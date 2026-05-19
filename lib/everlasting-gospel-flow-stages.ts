/**
 * Canonical flow for `EverlastingGospelFlow` (Foundations visual aid).
 */
export type EverlastingGospelFlowStageData = {
  label: string
  description: string
  /** Highlights the cross step with warm crimson accent when set. */
  tone?: 'neutral' | 'crimson'
}

export const EVERLASTING_GOSPEL_FLOW_DEFAULT_CAPTION =
  'The everlasting gospel reveals the kind of God God is.'

export const EVERLASTING_GOSPEL_FLOW_STAGES: readonly EverlastingGospelFlowStageData[] = [
  {
    label: 'God\'s Love',
    description: '"I have loved you with an everlasting love."',
    tone: 'neutral',
  },
  {
    label: 'God\'s Righteousness',
    description: 'God remains relationally faithful even when humanity fails.',
    tone: 'neutral',
  },
  {
    label: 'Christ Crucified',
    description: 'At the cross, Jesus reveals God\'s self-sacrificing love.',
    tone: 'crimson',
  },
  {
    label: 'Justified by Grace',
    description: 'God gives sinners a right standing through Christ.',
    tone: 'neutral',
  },
  {
    label: 'Gospel Witness',
    description: 'God\'s people proclaim His faithful love to the world.',
    tone: 'neutral',
  },
]
