/** Public contact email — clients reach BibleStem by email only. */
export const BIBLESTEM_CONTACT_EMAIL = 'hello@biblestem.io'

export type ContactMailtoOptions = {
  subject?: string
  body?: string
}

/** Builds a `mailto:` href for the public contact address. */
export function contactMailtoHref(options: ContactMailtoOptions = {}): string {
  const params = new URLSearchParams()
  if (options.subject?.trim()) params.set('subject', options.subject.trim())
  if (options.body?.trim()) params.set('body', options.body.trim())
  const qs = params.toString()
  return qs ? `mailto:${BIBLESTEM_CONTACT_EMAIL}?${qs}` : `mailto:${BIBLESTEM_CONTACT_EMAIL}`
}
