/**
 * Canonical data for `SecondComingStudyRecap` (Foundations — The Second Coming).
 */
export type SecondComingStudyRecapSectionData = {
  label: string
  description: string
}

export const SECOND_COMING_STUDY_RECAP_DEFAULT_CAPTION =
  'The story ends with Jesus receiving His people into eternal fellowship.'

export const SECOND_COMING_STUDY_RECAP_SECTIONS: readonly SecondComingStudyRecapSectionData[] = [
  {
    label: 'Bridegroom Promise',
    description: 'Jesus returns because He loves His people.',
  },
  {
    label: 'Visible Return',
    description: 'Every eye will see Him.',
  },
  {
    label: 'Signs of Nearness',
    description: 'The signs awaken hope and readiness.',
  },
  {
    label: 'Resurrection Hope',
    description: 'The dead in Christ rise and the living faithful are changed.',
  },
  {
    label: 'Eternal Fellowship',
    description: 'The redeemed will be forever with the Lord.',
  },
]
