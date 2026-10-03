import type { Metadata } from 'next'
import { headers } from 'next/headers'
import { notFound, redirect } from 'next/navigation'
import type { ReactNode } from 'react'
import { signInRedirectUrl } from '@/lib/auth/auth-redirect'
import {
  findLessonInCatalogFromCatalog,
  getSeriesWithPathBySlugFromCatalog,
  loadCatalog,
} from '@/lib/catalog/load-catalog'
import { getServerAuthUser } from '@/lib/supabase/server'

const LIBRARY_SECTIONS = new Set(['foundations', 'intermediate', 'hard-questions', 'advanced'])

function pathOnly(raw: string): string {
  const cut = raw.split('?')[0] ?? raw
  return cut.length > 1 && cut.endsWith('/') ? cut.slice(0, -1) : cut
}

export const metadata: Metadata = {
  title: 'Study Library · BibleStem',
  description: 'Browse BibleStudy series and lessons.',
  robots: { index: false, follow: false },
}

/** Signed-out visitors are sent to sign-in. Lessons with no real reader content 404 first. */
export default async function StudyLibraryLayout({ children }: { children: ReactNode }) {
  const pathname = (await headers()).get('x-biblestem-pathname') ?? '/study-library'
  const path = pathOnly(pathname)

  const lessonMatch = /^\/study-library\/([^/]+)\/lesson\/([^/]+)$/.exec(path)
  if (lessonMatch) {
    const catalog = await loadCatalog()
    const seriesSlug = decodeURIComponent(lessonMatch[1] ?? '')
    const lessonSlug = decodeURIComponent(lessonMatch[2] ?? '')
    if (!findLessonInCatalogFromCatalog(catalog, seriesSlug, lessonSlug)) notFound()
  }

  const seriesMatch = /^\/study-library\/([^/]+)$/.exec(path)
  if (seriesMatch) {
    const seriesSlug = decodeURIComponent(seriesMatch[1] ?? '')
    if (!LIBRARY_SECTIONS.has(seriesSlug)) {
      const catalog = await loadCatalog()
      const series = getSeriesWithPathBySlugFromCatalog(catalog, seriesSlug)
      if (!series || series.isPublished === false) notFound()
    }
  }

  const user = await getServerAuthUser()
  if (!user) redirect(signInRedirectUrl(pathname))

  return children
}
