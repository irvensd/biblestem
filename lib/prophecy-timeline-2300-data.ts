/** Static data for the Daniel 8:14 2300-day/year prophecy timeline. */
export const PROPHECY_TIMELINE_2300_DEFAULT_CAPTION =
  "Daniel's 2300-day prophecy points to the beginning of the final phase of Christ's heavenly ministry."

export const PROPHECY_TIMELINE_2300_ARIA_LABEL =
  'Timeline of the 2300-day prophecy from 457 BC to 1844 AD.'

export const PROPHECY_TIMELINE_2300_START = {
  year: '457 BC',
  label: 'Command to Restore and Rebuild Jerusalem',
} as const

export const PROPHECY_TIMELINE_2300_END = {
  year: '1844 AD',
  label: 'Sanctuary Cleansed',
} as const

export const PROPHECY_TIMELINE_2300_SEVENTY_WEEKS = {
  title: '70 Weeks = 490 Years',
  from: '457 BC',
  to: '34 AD',
  nestedTitle: '69 Weeks = 483 Years',
  nestedTo: '27 AD',
} as const

export const PROPHECY_TIMELINE_2300_REMAINDER = {
  title: '1,810 Years',
  from: '34 AD',
  to: '1844 AD',
} as const

export const PROPHECY_TIMELINE_2300_MARKERS = [
  { year: '27 AD', label: 'Jesus begins ministry' },
  { year: '31 AD', label: 'Jesus crucified', subLabel: 'Cut off', highlight: true },
  { year: '34 AD', label: 'End of 70 weeks' },
] as const

export const PROPHECY_TIMELINE_2300_HALF_WEEKS = [
  { label: '3 1/2 years', span: '27 AD to 31 AD' },
  { label: '3 1/2 years', span: '31 AD to 34 AD' },
] as const
