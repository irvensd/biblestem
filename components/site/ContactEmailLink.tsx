import type { ReactNode } from 'react'
import {
  BIBLESTEM_CONTACT_EMAIL,
  contactMailtoHref,
  type ContactMailtoOptions,
} from '@/lib/site-contact'

type ContactEmailLinkProps = ContactMailtoOptions & {
  className?: string
  children?: ReactNode
  /** When true, link text is the email address. */
  showAddress?: boolean
}

/** Email-only contact link for BibleStem clients. */
export function ContactEmailLink({
  className,
  children,
  showAddress = false,
  subject,
  body,
}: ContactEmailLinkProps) {
  const href = contactMailtoHref({ subject, body })
  const label = children ?? (showAddress ? BIBLESTEM_CONTACT_EMAIL : 'Email us')

  return (
    <a href={href} className={className}>
      {label}
    </a>
  )
}
