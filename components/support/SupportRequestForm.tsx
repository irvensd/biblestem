'use client'

import { useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useDemoAuth } from '@/components/auth/DemoAuthProvider'
import { Button } from '@/components/ui/Button'
import { inputClassName, selectClassName } from '@/components/ui/form-styles'
import {
  SUPPORT_ISSUE_TYPE_LABELS,
  issueTypeFromQueryParam,
  type SupportIssueTypeLabel,
} from '@/lib/support/issue-types'
import {
  submitSupportRequest,
  type SupportRequestPayload,
} from '@/lib/support/submit-support-request'

function collectBrowserInfo(): NonNullable<SupportRequestPayload['browserInfo']> {
  if (typeof window === 'undefined') return {}
  return {
    userAgent: navigator.userAgent,
    language: navigator.language,
    viewportWidth: window.innerWidth,
    viewportHeight: window.innerHeight,
  }
}

export type SupportRequestFormVariant = 'standalone' | 'embedded'

const standaloneShellClass =
  'rounded-xl border border-zinc-200/90 bg-white p-6 shadow-sm ring-1 ring-zinc-950/[0.03]'

export function SupportRequestForm({
  variant = 'standalone',
  onSubmitted,
  onDismiss,
}: {
  variant?: SupportRequestFormVariant
  /** UI hook after a successful submit (does not change submission logic). */
  onSubmitted?: () => void
  /** When set, embedded success state shows a Done control that calls this. */
  onDismiss?: () => void
}) {
  const searchParams = useSearchParams()
  const { user, isReady } = useDemoAuth()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [issueType, setIssueType] = useState<SupportIssueTypeLabel | ''>('')
  const [pageUrl, setPageUrl] = useState('')
  const [studySlug, setStudySlug] = useState('')
  const [lessonSlug, setLessonSlug] = useState('')
  const [stepNumber, setStepNumber] = useState('')
  const [message, setMessage] = useState('')

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    setPageUrl(window.location.href)
  }, [])

  const queryMappedType = useMemo(() => issueTypeFromQueryParam(searchParams.get('type')), [searchParams])

  useEffect(() => {
    const study = searchParams.get('study')?.trim() ?? ''
    const lesson = searchParams.get('lesson')?.trim() ?? ''
    const step = searchParams.get('step')?.trim() ?? ''
    if (study) setStudySlug(study)
    if (lesson) setLessonSlug(lesson)
    if (step) setStepNumber(step)
    if (queryMappedType) setIssueType(queryMappedType)
  }, [searchParams, queryMappedType])

  useEffect(() => {
    if (!isReady || !user) return
    setEmail((e) => (e.trim() ? e : user.email))
    setName((n) => {
      if (n.trim()) return n
      return user.firstName?.trim() ? user.firstName.trim() : n
    })
  }, [isReady, user])

  const onSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()
      setErrorMsg(null)

      const trimmedEmail = email.trim()
      const trimmedMessage = message.trim()

      if (!trimmedEmail) {
        setErrorMsg('Please enter your email.')
        return
      }
      if (!issueType) {
        setErrorMsg('Please choose an issue type.')
        return
      }
      if (trimmedMessage.length < 10) {
        setErrorMsg('Please enter a message of at least 10 characters.')
        return
      }

      const href = typeof window !== 'undefined' ? window.location.href : pageUrl

      const payload: SupportRequestPayload = {
        name: name.trim() || null,
        email: trimmedEmail,
        issueType,
        pageUrl: href,
        studySlug: studySlug.trim() || null,
        lessonSlug: lessonSlug.trim() || null,
        stepNumber: stepNumber.trim() || null,
        message: trimmedMessage,
        browserInfo: collectBrowserInfo(),
      }

      setLoading(true)
      try {
        const result = await submitSupportRequest(payload)
        if (result.ok) {
          setSuccess(true)
          onSubmitted?.()
        } else {
          setErrorMsg(result.message)
        }
      } catch {
        setErrorMsg('Something went wrong. Please try again.')
      } finally {
        setLoading(false)
      }
    },
    [email, issueType, lessonSlug, message, name, onSubmitted, pageUrl, stepNumber, studySlug],
  )

  const followUpHint =
    variant === 'embedded'
      ? 'We review submissions as time allows. You can send another report anytime from Settings.'
      : 'We review submissions as time allows. You can send another report anytime from this page.'

  if (success) {
    const body = (
      <>
        <div className="mb-3 h-1 w-10 rounded-full bg-blue-800/50" aria-hidden />
        <p className="text-base font-medium text-zinc-900">Thanks. Your report was received.</p>
        <p className="mt-2 text-sm leading-relaxed text-zinc-600">{followUpHint}</p>
        {variant === 'embedded' && onDismiss ? (
          <div className="mt-4">
            <Button type="button" variant="secondary" onClick={onDismiss}>
              Done
            </Button>
          </div>
        ) : null}
      </>
    )
    if (variant === 'standalone') {
      return (
        <div className={standaloneShellClass} role="status">
          {body}
        </div>
      )
    }
    return <div role="status">{body}</div>
  }

  const formEl = (
      <form onSubmit={onSubmit} noValidate className="min-w-0 space-y-5">
        {errorMsg ? (
          <div
            className="rounded-lg border border-red-200/90 bg-red-50/90 px-3 py-2.5 text-sm text-red-900"
            role="alert"
          >
            {errorMsg}
          </div>
        ) : null}

        <div className="grid min-w-0 gap-5 sm:grid-cols-2">
        <div className="min-w-0">
          <label htmlFor="support-name" className="block text-sm font-medium text-zinc-800">
            Name <span className="font-normal text-zinc-500">(optional)</span>
          </label>
          <input
            id="support-name"
            name="name"
            type="text"
            autoComplete="name"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
            className={`${inputClassName} mt-1.5`}
          />
        </div>
        <div>
          <label htmlFor="support-email" className="block text-sm font-medium text-zinc-800">
            Email <span className="text-red-700">*</span>
          </label>
          <input
            id="support-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            className={`${inputClassName} mt-1.5`}
          />
        </div>
        </div>

        <div>
        <label htmlFor="support-issue-type" className="block text-sm font-medium text-zinc-800">
          Issue type <span className="text-red-700">*</span>
        </label>
        <div className="relative mt-1.5">
          <select
            id="support-issue-type"
            name="issueType"
            required
            value={issueType}
            onChange={(ev) => setIssueType(ev.target.value as SupportIssueTypeLabel | '')}
            className={`${selectClassName} bg-[length:1rem_1rem] bg-[right_0.65rem_center] bg-no-repeat`}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%2371717a' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.6' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
            }}
          >
            <option value="">Choose one…</option>
            {SUPPORT_ISSUE_TYPE_LABELS.map((label) => (
              <option key={label} value={label}>
                {label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="support-page-url" className="block text-sm font-medium text-zinc-800">
          Page URL
        </label>
        <input
          id="support-page-url"
          name="pageUrl"
          type="url"
          readOnly
          value={pageUrl}
          className={`${inputClassName} mt-1.5 bg-zinc-50 text-zinc-600`}
        />
        <p className="mt-1 text-xs text-zinc-500">Filled automatically from your browser.</p>
      </div>

      <div className="grid min-w-0 gap-5 sm:grid-cols-3">
        <div>
          <label htmlFor="support-study-slug" className="block text-sm font-medium text-zinc-800">
            Study slug <span className="font-normal text-zinc-500">(optional)</span>
          </label>
          <input
            id="support-study-slug"
            name="studySlug"
            type="text"
            value={studySlug}
            onChange={(ev) => setStudySlug(ev.target.value)}
            className={`${inputClassName} mt-1.5`}
            placeholder="e.g. god-is-love"
          />
        </div>
        <div>
          <label htmlFor="support-lesson-slug" className="block text-sm font-medium text-zinc-800">
            Lesson slug <span className="font-normal text-zinc-500">(optional)</span>
          </label>
          <input
            id="support-lesson-slug"
            name="lessonSlug"
            type="text"
            value={lessonSlug}
            onChange={(ev) => setLessonSlug(ev.target.value)}
            className={`${inputClassName} mt-1.5`}
            placeholder="e.g. the-logic-of-love"
          />
        </div>
        <div>
          <label htmlFor="support-step" className="block text-sm font-medium text-zinc-800">
            Step <span className="font-normal text-zinc-500">(optional)</span>
          </label>
          <input
            id="support-step"
            name="stepNumber"
            inputMode="numeric"
            value={stepNumber}
            onChange={(ev) => setStepNumber(ev.target.value)}
            className={`${inputClassName} mt-1.5`}
            placeholder="e.g. 3"
          />
        </div>
      </div>

      <div>
        <label htmlFor="support-message" className="block text-sm font-medium text-zinc-800">
          Message <span className="text-red-700">*</span>
        </label>
        <textarea
          id="support-message"
          name="message"
          required
          rows={5}
          value={message}
          onChange={(ev) => setMessage(ev.target.value)}
          className={`${inputClassName} mt-1.5 resize-y`}
          placeholder="Describe what happened or what you noticed."
          minLength={10}
        />
        <p className="mt-1 text-xs text-zinc-500">At least 10 characters.</p>
      </div>

      <div className="flex flex-wrap items-center gap-3 pt-1">
        <Button type="submit" variant="primary" disabled={loading}>
          {loading ? 'Sending…' : 'Send report'}
        </Button>
      </div>
      </form>
  )

  if (variant === 'standalone') {
    return <div className={standaloneShellClass}>{formEl}</div>
  }
  return formEl
}
