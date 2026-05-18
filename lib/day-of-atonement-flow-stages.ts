/** Ministry of Jesus flow (The Day of Atonement study). */
export type DayOfAtonementFlowStageData = {
  label: string
  description: string
}

export const DAY_OF_ATONEMENT_FLOW_DEFAULT_CAPTION =
  'The Day of Atonement points to Jesus bringing the plan of redemption to its final resolution.'

export const DAY_OF_ATONEMENT_FLOW_STAGES: readonly DayOfAtonementFlowStageData[] = [
  { label: 'Sacrifice', description: 'Jesus gives Himself for humanity.' },
  { label: 'Resurrection', description: 'Jesus rises victorious over sin and death.' },
  { label: 'Mediation', description: 'Jesus ministers as our High Priest.' },
  { label: 'Cleansing', description: 'Jesus cleanses the conscience and resolves the sin problem.' },
  { label: 'Confidence', description: "Believers stand before God in Christ's love." },
]
