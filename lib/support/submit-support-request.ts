'use server'

import {
  submitSupportRequest as persistSupportRequest,
  type SupportBrowserInfo,
} from '@/lib/supabase/support-requests'
import type { SupportIssueTypeLabel } from '@/lib/support/issue-types'

export type SupportRequestPayload = {
  name: string | null
  email: string
  issueType: SupportIssueTypeLabel
  pageUrl?: string | null
  studySlug?: string | null
  lessonSlug?: string | null
  stepNumber?: string | null
  message: string
  browserInfo?: SupportBrowserInfo | null
}

export type SubmitSupportRequestResult =
  | { ok: true }
  | { ok: false; message: string }

function parseStepNumber(raw: string | null | undefined): number | null {
  const s = raw?.trim()
  if (!s) return null
  const n = Number.parseInt(s, 10)
  return Number.isFinite(n) ? n : null
}

/**
 * Server Action for the support form: validates and inserts via the anon Supabase client.
 * `user_id` is not set server-side (anonymous JWT); identity is carried by email until SSR auth is wired.
 */
export async function submitSupportRequest(payload: SupportRequestPayload): Promise<SubmitSupportRequestResult> {
  return persistSupportRequest({
    userId: null,
    name: payload.name,
    email: payload.email,
    issueType: payload.issueType,
    pageUrl: payload.pageUrl,
    studySlug: payload.studySlug,
    lessonSlug: payload.lessonSlug,
    stepNumber: parseStepNumber(payload.stepNumber),
    message: payload.message,
    browserInfo: payload.browserInfo ?? null,
  })
}
