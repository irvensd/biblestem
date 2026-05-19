/**
 * Canonical flow for `ComeOutCallFlow` (Foundations visual aid).
 */
export type ComeOutCallFlowStageData = {
  label: string
  description: string
}

export const COME_OUT_CALL_FLOW_DEFAULT_CAPTION =
  'God calls people out of Babylon because He loves them and wants them free.'

export const COME_OUT_CALL_FLOW_STAGES: readonly ComeOutCallFlowStageData[] = [
  {
    label: 'Confusion',
    description: 'False religion distorts God\'s character.',
  },
  {
    label: 'Illumination',
    description: 'The glory of God\'s character shines through Christ.',
  },
  {
    label: 'Call',
    description: 'God says, "Come out of her, My people."',
  },
  {
    label: 'Freedom',
    description: 'Jesus leads people out of fear, control, and false worship.',
  },
  {
    label: 'Witness',
    description: 'God\'s people reflect self-giving, non-coercive love.',
  },
]
