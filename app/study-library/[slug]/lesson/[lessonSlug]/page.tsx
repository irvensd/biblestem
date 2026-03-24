import { notFound } from 'next/navigation'
import { LessonReaderContent } from '@/components/lesson/LessonReaderContent'
import { getLessonReaderContent } from '@/lib/lesson-content'
import { findLessonInCatalog } from '@/lib/product-queries'

export default async function LessonReaderPage({
  params,
}: {
  params: Promise<{ slug: string; lessonSlug: string }>
}) {
  const { slug, lessonSlug } = await params
  const data = findLessonInCatalog(slug, lessonSlug)
  if (!data) return notFound()

  const { series, lesson } = data
  const content = getLessonReaderContent(lessonSlug)

  return <LessonReaderContent study={series} lesson={lesson} content={content} />
}
