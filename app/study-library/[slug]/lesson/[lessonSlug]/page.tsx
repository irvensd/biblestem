import { notFound } from 'next/navigation'
import { LessonReader } from '@/components/lessons/LessonReader'
import { CatalogSourceNotice } from '@/components/site/CatalogSourceNotice'
import { getLessonReaderContent } from '@/lib/lesson-content'
import {
  findLessonInCatalogFromCatalog,
  loadCatalog,
  shouldShowCatalogFallbackNotice,
} from '@/lib/catalog/load-catalog'

export default async function LessonReaderPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string; lessonSlug: string }>
  searchParams: Promise<{ step?: string | string[] }>
}) {
  const { slug, lessonSlug } = await params
  const sp = await searchParams
  const raw = Array.isArray(sp.step) ? sp.step[0] : sp.step
  const parsed = raw != null && /^\d+$/.test(String(raw)) ? parseInt(String(raw), 10) : 0
  const initialStepIndex = Number.isFinite(parsed) && parsed >= 0 ? parsed : 0

  const catalog = await loadCatalog()
  const data = findLessonInCatalogFromCatalog(catalog, slug, lessonSlug)
  if (!data) return notFound()

  const { series, lesson } = data
  const content = lesson.readerContent ?? getLessonReaderContent(lessonSlug)

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
        lesson={lesson}
        content={content}
        initialStepIndex={initialStepIndex}
      />
    </>
  )
}
