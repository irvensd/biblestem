/**
 * Canonical contrast data for `TrueWorshipVsCoercion` (Foundations visual aid).
 */
export type TrueWorshipVsCoercionStepData = {
  label: string
}

export const TRUE_WORSHIP_VS_COERCION_DEFAULT_CAPTION =
  'God seeks love, not forced compliance.'

export const TRUE_WORSHIP_TRUE = {
  columnTitle: 'True Worship',
  scriptureRef: '1 John 4:19; John 4:23-24',
  steps: [
    { label: 'Love awakens love' },
    { label: 'Freedom preserved' },
    { label: 'Heart surrendered' },
    { label: 'Spirit and truth' },
    { label: 'Voluntary loyalty' },
  ],
} as const

export const TRUE_WORSHIP_COERCED = {
  columnTitle: 'Coerced Worship',
  scriptureRef: 'Revelation 13:15-17',
  steps: [
    { label: 'Fear drives compliance' },
    { label: 'Liberty violated' },
    { label: 'Outward submission' },
    { label: 'Civil pressure' },
    { label: 'Forced allegiance' },
  ],
} as const
