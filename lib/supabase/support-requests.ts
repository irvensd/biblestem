import { createClient } from '@supabase/supabase-js'
import type { SupportIssueTypeLabel } from '@/lib/support/issue-types'
import { SUPPORT_ISSUE_TYPE_LABELS } from '@/lib/support/issue-types'

export type SupportSeverity = 'P0' | 'P1' | 'P2' | 'P3'

export type SupportBrowserInfo = {
  userAgent?: string
  language?: string
  viewportWidth?: number
  viewportHeight?: number
}

export type SubmitSupportRequestInput = {
  userId?: string | null
  name?: string | null
  email: string
  issueType: SupportIssueTypeLabel
  severity?: SupportSeverity | null
  pageUrl?: string | null
  studySlug?: string | null
  lessonSlug?: string | null
  stepNumber?: number | null
  message: string
  browserInfo?: SupportBrowserInfo | null
}

export type SubmitSupportRequestResult =
  | { ok: true }
  | { ok: false; message: string }

const LABEL_SET = new Set<string>(SUPPORT_ISSUE_TYPE_LABELS)

/** Default severity by issue category (overridable via `input.severity`). */
export function severityForIssueType(issueType: SupportIssueTypeLabel): SupportSeverity {
  const map: Record<SupportIssueTypeLabel, SupportSeverity> = {
    'Login issue': 'P1',
    'Study progress issue': 'P1',
    'Notes issue': 'P1',
    Bug: 'P2',
    'Broken link': 'P2',
    'Content correction': 'P2',
    'Quiz issue': 'P2',
    'Donation/support issue': 'P2',
    'General feedback': 'P3',
  }
  return map[issueType] ?? 'P2'
}

function validateInput(input: SubmitSupportRequestInput): string | null {
  const email = input.email?.trim() ?? ''
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'A valid email is required.'
  if (!input.issueType || !LABEL_SET.has(input.issueType)) return 'Please choose an issue type.'
  const msg = input.message?.trim() ?? ''
  if (msg.length < 10) return 'Please enter a message of at least 10 characters.'
  if (input.severity != null && !['P0', 'P1', 'P2', 'P3'].includes(input.severity)) {
    return 'Invalid severity.'
  }
  return null
}

/**
 * Inserts a row into `support_requests` using the public anon key (server-side).
 * Does not use the service role. Call only from trusted server code (e.g. a Server Action).
 */
export async function submitSupportRequest(input: SubmitSupportRequestInput): Promise<SubmitSupportRequestResult> {
  const err = validateInput(input)
  if (err) return { ok: false, message: err }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim()
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim()

  if (!url || !anonKey) {
    return {
      ok: false,
      message:
        'Report saving is not configured yet (Supabase URL or anon key is missing). Your report was not saved. Check back after deployment settings are complete.',
    }
  }

  const severity = input.severity ?? severityForIssueType(input.issueType)

  const supabase = createClient(url, anonKey)

  const row = {
    user_id: input.userId?.trim() || null,
    name: input.name?.trim() || null,
    email: input.email.trim(),
    issue_type: input.issueType,
    severity,
    page_url: input.pageUrl?.trim() || null,
    study_slug: input.studySlug?.trim() || null,
    lesson_slug: input.lessonSlug?.trim() || null,
    step_number: input.stepNumber ?? null,
    message: input.message.trim(),
    browser_info: input.browserInfo ?? null,
    status: 'new' as const,
  }

  const { error } = await supabase.from('support_requests').insert(row)

  if (error) {
    console.error('[support_requests]', error.message, error.code, error.details)
    const missingTable =
      error.code === '42P01' ||
      error.code === 'PGRST205' ||
      /relation.*does not exist/i.test(error.message ?? '') ||
      /could not find the table/i.test(error.message ?? '')
    if (missingTable) {
      return {
        ok: false,
        message:
          'Saving reports is not connected yet (database table missing). Apply migrations or contact the site administrator. Your report was not saved.',
      }
    }
    return { ok: false, message: 'Something went wrong. Please try again.' }
  }

  return { ok: true }
}
