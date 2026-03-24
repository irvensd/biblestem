import { getRecommendedSeriesSlugs, getSeriesBySlug } from '@/lib/product-queries'
import { studyPaths } from '@/lib/product-mock'
import type { StudySeries } from '@/lib/types/product'

/** Mock dashboard payload — replace with API / Supabase later. */

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

export type DashboardMock = {
  displayName: string
  headerStats: {
    streakDays: number
    lessonsCompleted: number
    totalMinutesStudied: number
  }
  progress: ProgressTotals
  activeStudy: ActiveStudyState | null
  recommendedSlugs: string[]
  notes: DashboardNote[]
  todayFocus: TodayFocus
  studyPaths: StudyPathItem[]
}

export function getGreetingPeriod(): 'morning' | 'afternoon' | 'evening' {
  const h = new Date().getHours()
  if (h < 12) return 'morning'
  if (h < 17) return 'afternoon'
  return 'evening'
}

export function greetingLabel(period: 'morning' | 'afternoon' | 'evening'): string {
  if (period === 'morning') return 'Good morning'
  if (period === 'afternoon') return 'Good afternoon'
  return 'Good evening'
}

export function displayNameFromEmail(email: string): string {
  const local = email.split('@')[0]?.replace(/\./g, ' ') ?? 'Friend'
  if (email.toLowerCase() === 'demo@biblestem.app') return 'Friend'
  return local.slice(0, 1).toUpperCase() + local.slice(1)
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

const pathNavItems: StudyPathItem[] = studyPaths.map((p) => ({
  id: p.slug,
  label: p.name,
  description: p.description,
  href: `/paths/${p.slug}`,
  isCurrent: p.slug === 'foundations',
  isRecommended: p.slug === 'theology',
}))

export const dashboardMock: DashboardMock = {
  displayName: 'Friend',
  headerStats: {
    streakDays: 5,
    lessonsCompleted: 12,
    totalMinutesStudied: 248,
  },
  progress: {
    studiesStarted: 3,
    studiesCompleted: 1,
    lessonsCompleted: 12,
    totalMinutes: 248,
    streakDays: 5,
  },
  activeStudy: {
    studySlug: 'gospel-of-john',
    studyTitle: 'The Gospel of John',
    lessonSlug: 'word-made-flesh',
    lessonTitle: 'The Word Made Flesh',
    scripture: 'John 1:1–18',
    progressPercent: 38,
    minutesRemaining: 16,
  },
  recommendedSlugs: getRecommendedSeriesSlugs(),
  notes: [
    {
      id: '1',
      reference: 'John 1:14 · The Word Made Flesh',
      snippet: 'Dwelling among us—presence, not abstraction. Need to revisit “glory” in context.',
      updatedLabel: 'Mar 21',
    },
    {
      id: '2',
      reference: 'Romans 1:16–17 · The Gospel',
      snippet: 'Righteousness revealed from faith to faith—note for small group prep.',
      updatedLabel: 'Mar 19',
    },
    {
      id: '3',
      reference: 'Matthew 5:3 · Beatitudes',
      snippet: 'Poor in spirit as humility before God, not self-deprecation.',
      updatedLabel: 'Mar 16',
    },
  ],
  todayFocus: {
    eyebrow: 'Today’s focus',
    verse: '“In the beginning was the Word, and the Word was with God, and the Word was God.”',
    reflection: 'Begin the week anchored in Christ’s identity before moving to application.',
    ctaLabel: 'Open lesson',
    lessonHref: '/study-library/gospel-of-john/lesson/word-made-flesh',
  },
  studyPaths: pathNavItems,
}
