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
}: {
  params: Promise<{ slug: string; lessonSlug: string }>
}) {
  const { slug, lessonSlug } = await params
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
      <LessonReader study={series} lesson={lesson} content={content} />
    </>
  )
}
