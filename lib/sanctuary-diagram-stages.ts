/** Sanctuary layout zones (The Day of Atonement study). */
export type SanctuaryDiagramAreaData = {
  name: string
  phaseLabel: string
  furniture: readonly string[]
}

export const SANCTUARY_DIAGRAM_DEFAULT_CAPTION =
  'The earthly sanctuary was a teaching model pointing to the work of Jesus in the plan of salvation.'

export const SANCTUARY_DIAGRAM_AREAS: readonly SanctuaryDiagramAreaData[] = [
  {
    name: 'Courtyard',
    phaseLabel: "Christ's sacrifice",
    furniture: ['Altar of Burnt Offering', 'Laver'],
  },
  {
    name: 'Holy Place',
    phaseLabel: "Christ's continual mediation",
    furniture: ['Table of Showbread', 'Lampstand', 'Altar of Incense'],
  },
  {
    name: 'Most Holy Place',
    phaseLabel: "Christ's final atoning ministry",
    furniture: ['Ark of the Covenant'],
  },
]
