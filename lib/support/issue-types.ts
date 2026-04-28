/** Labels shown in the technical support form (must match DB check constraint). */
export const SUPPORT_ISSUE_TYPE_LABELS = [
  'Bug',
  'Login issue',
  'Study progress issue',
  'Notes issue',
  'Broken link',
  'Content correction',
  'Quiz issue',
  'Donation/support issue',
  'General feedback',
] as const

export type SupportIssueTypeLabel = (typeof SUPPORT_ISSUE_TYPE_LABELS)[number]

/** Map URL ?type=… query values to form labels (case-sensitive keys). */
export function issueTypeFromQueryParam(raw: string | null): SupportIssueTypeLabel | '' {
  if (!raw?.trim()) return ''
  const key = raw.trim().toLowerCase()
  const map: Record<string, SupportIssueTypeLabel> = {
    bug: 'Bug',
    'login-issue': 'Login issue',
    progress: 'Study progress issue',
    notes: 'Notes issue',
    'broken-link': 'Broken link',
    'content-correction': 'Content correction',
    'quiz-issue': 'Quiz issue',
    donation: 'Donation/support issue',
    general: 'General feedback',
  }
  return map[key] ?? ''
}
