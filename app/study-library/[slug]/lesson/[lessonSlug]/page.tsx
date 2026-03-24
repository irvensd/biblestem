import { notFound } from 'next/navigation'
import { LessonReaderContent } from '@/components/lesson/LessonReaderContent'
import { getLessonReaderContent } from '@/lib/lesson-content'
import { studies } from '@/lib/mock-data'

function findLesson(slug: string, lessonSlug: string) {
  const study = studies.find((item) => item.slug === slug)
  if (!study) return null
  const lesson = study.lessons.find((item) => item.slug === lessonSlug)
  if (!lesson) return null
  return { study, lesson }
}

export default async function LessonReaderPage({
  params,
}: {
  params: Promise<{ slug: string; lessonSlug: string }>
}) {
  const { slug, lessonSlug } = await params
  const data = findLesson(slug, lessonSlug)
  if (!data) return notFound()

  const { study, lesson } = data
  const content = getLessonReaderContent(lessonSlug)

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Study Library', href: '/study-library' },
    { label: study.title, href: `/study-library/${study.slug}` },
    { label: lesson.title },
  ]

  return <LessonReaderContent study={study} lesson={lesson} content={content} breadcrumbItems={breadcrumbItems} />
}
