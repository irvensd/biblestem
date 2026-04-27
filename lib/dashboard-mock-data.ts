import { getSeriesBySlug } from '@/lib/product-queries'
import type { StudySeries } from '@/lib/types/product'

/** Shared dashboard UI types and formatting helpers. Progress is computed in `dashboard-compute`. */

export type DashboardNote = {
  id: string
  reference: string
  snippet: string
  updatedLabel: string
}

export type ActiveStudyState = {
  studySlug: string
  studyTitle: string
  lessonSlug: string
  lessonTitle: string
  scripture: string
  progressPercent: number
  minutesRemaining: number
}

export type TodayFocus = {
  eyebrow: string
  verse: string
  reflection: string
  ctaLabel: string
  lessonHref: string
}

export type StudyPathItem = {
  id: string
  label: string
  description: string
  href: string
  isCurrent?: boolean
  isRecommended?: boolean
}

export type ProgressTotals = {
  studiesStarted: number
  studiesCompleted: number
  lessonsCompleted: number
  totalMinutes: number
  streakDays: number
}

export type GreetingPeriod = 'night' | 'morning' | 'afternoon' | 'evening'

/** Local time: late night (before 5am or after 9:59pm) vs morning/afternoon/evening. */
export function getGreetingPeriod(): GreetingPeriod {
  const h = new Date().getHours()
  if (h >= 22 || h < 5) return 'night'
  if (h < 12) return 'morning'
  if (h < 17) return 'afternoon'
  return 'evening'
}

export function greetingLabel(period: GreetingPeriod): string {
  if (period === 'night') return 'Good night'
  if (period === 'morning') return 'Good morning'
  if (period === 'afternoon') return 'Good afternoon'
  return 'Good evening'
}

export function displayNameFromEmail(email: string): string {
  const local = email.split('@')[0]?.replace(/\./g, ' ') ?? 'Friend'
  if (email.toLowerCase() === 'demo@biblestem.app') return 'Friend'
  return local.slice(0, 1).toUpperCase() + local.slice(1)
}

/** Prefer saved first name from signup; fall back to email-derived label. */
export function dashboardDisplayName(email: string, firstName?: string | null): string {
  const trimmed = firstName?.trim()
  if (trimmed) return trimmed.slice(0, 1).toUpperCase() + trimmed.slice(1)
  return displayNameFromEmail(email)
}

export function formatStudyMinutes(total: number): string {
  if (total < 60) return `${total} min`
  const h = Math.floor(total / 60)
  const m = total % 60
  if (m === 0) return `${h}h`
  return `${h}h ${m}m`
}

export function studyBySlug(slug: string): StudySeries | undefined {
  return getSeriesBySlug(slug)
}
