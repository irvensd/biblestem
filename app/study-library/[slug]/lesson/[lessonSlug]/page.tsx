import { notFound, redirect } from 'next/navigation'
import { LessonReader } from '@/components/lessons/LessonReader'
import { CatalogSourceNotice } from '@/components/site/CatalogSourceNotice'
import { signInRedirectUrl } from '@/lib/auth/auth-redirect'
import {
  findLessonInCatalogFromCatalog,
  loadCatalog,
  shouldShowCatalogFallbackNotice,
} from '@/lib/catalog/load-catalog'
import { isFoundationLessonShellSections } from '@/lib/foundation-lesson-shell'
import { isPlaceholderReaderContent } from '@/lib/catalog/lesson-readiness'
import { resolveLessonReaderContent } from '@/lib/lesson-content'
import { hydrateLessonScriptureThreadVerseText } from '@/lib/scripture-thread-verse-hydration'
import { fetchAuthorizedLessonBody } from '@/lib/supabase/fetch-lesson-body'
import { getServerAuthUser } from '@/lib/supabase/server'

export default async function LessonReaderPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string; lessonSlug: string }>
  searchParams: Promise<{ step?: string | string[] }>
}) {
  const { slug, lessonSlug } = await params
  const catalog = await loadCatalog()
  const data = findLessonInCatalogFromCatalog(catalog, slug, lessonSlug)
  if (!data) return notFound()

  const user = await getServerAuthUser()
  if (!user) {
    redirect(signInRedirectUrl(`/study-library/${slug}/lesson/${lessonSlug}`))
  }

  const sp = await searchParams
  const raw = Array.isArray(sp.step) ? sp.step[0] : sp.step
  const parsed = raw != null && /^\d+$/.test(String(raw)) ? parseInt(String(raw), 10) : 0
  const initialStepIndex = Number.isFinite(parsed) && parsed >= 0 ? parsed : 0

  const { series, lesson } = data
  const body = await fetchAuthorizedLessonBody(lesson.id)
  const content = hydrateLessonScriptureThreadVerseText(
    resolveLessonReaderContent(lessonSlug, body.readerContent),
  )
  const sections = body.sections.length > 0 ? body.sections : lesson.sections
  const sectionsAreShell = sections.length === 0 || isFoundationLessonShellSections(sections)
  if (sectionsAreShell && isPlaceholderReaderContent(content)) notFound()

  return (
    <>
      {shouldShowCatalogFallbackNotice(catalog) ? (
        <div className="border-b border-amber-200/50 bg-amber-50/40">
          <div className="container-shell py-2.5">
            <div className="max-w-xl">
              <CatalogSourceNotice source={catalog.source} />
            </div>
          </div>
        </div>
      ) : null}
      <LessonReader
        key={`${slug}-${lessonSlug}-${initialStepIndex}`}
        study={series}
        lesson={{ ...lesson, sections: body.sections, readerContent: undefined }}
        content={content}
        initialStepIndex={initialStepIndex}
      />
    </>
  )
}
