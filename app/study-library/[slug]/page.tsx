import type { Metadata } from 'next'
import { StudyOverviewShell } from '@/components/studies/StudyOverviewShell'
import { StudyEmptyState } from '@/components/studies/StudyEmptyState'
import { StudyNotFound } from '@/components/studies/StudyNotFound'
import {
  getSeriesWithPathBySlugFromCatalog,
  loadCatalog,
  shouldShowCatalogFallbackNotice,
} from '@/lib/catalog/load-catalog'
import { buildStudyOverviewStatic } from '@/lib/studies/derive-overview'
import { getRelatedStudies } from '@/lib/studies/related'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const catalog = await loadCatalog()
  const data = getSeriesWithPathBySlugFromCatalog(catalog, slug)
  if (!data || data.isPublished === false) {
    return { title: 'Study not found · BibleStem' }
  }
  return {
    title: `${data.title} · BibleStem`,
    description: data.description,
  }
}

export default async function StudySeriesOverviewPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const catalog = await loadCatalog()
  const data = getSeriesWithPathBySlugFromCatalog(catalog, slug)

  if (!data || data.isPublished === false) {
    return <StudyNotFound />
  }

  if (data.lessons.length === 0) {
    return <StudyEmptyState studyTitle={data.title} />
  }

  const overview = buildStudyOverviewStatic(data)
  const relatedStudies = getRelatedStudies(catalog, slug, 3)

  return (
    <StudyOverviewShell
      overview={overview}
      relatedStudies={relatedStudies}
      studyPaths={catalog.paths}
      showCatalogFallback={shouldShowCatalogFallbackNotice(catalog)}
      catalogSource={catalog.source}
    />
  )
}
