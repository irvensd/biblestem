import type { Metadata } from 'next'
import { notFound, redirect } from 'next/navigation'
import { StudyOverviewShell } from '@/components/studies/StudyOverviewShell'
import { StudyEmptyState } from '@/components/studies/StudyEmptyState'
import { signInRedirectUrl } from '@/lib/auth/auth-redirect'
import {
  getSeriesWithPathBySlugFromCatalog,
  loadCatalog,
  shouldShowCatalogFallbackNotice,
} from '@/lib/catalog/load-catalog'
import { getServerAuthUser } from '@/lib/supabase/server'
import { buildStudyOverviewStatic } from '@/lib/studies/derive-overview'
import { getRelatedStudies } from '@/lib/studies/related'
import { scriptureThreadsForSeries } from '@/lib/studies/series-scripture-threads'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const catalog = await loadCatalog()
  const data = getSeriesWithPathBySlugFromCatalog(catalog, slug)
  if (!data || data.isPublished === false) {
    return { title: 'Study not found · BibleStem', robots: { index: false, follow: false } }
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

  if (!data || data.isPublished === false) notFound()

  const user = await getServerAuthUser()
  if (!user) redirect(signInRedirectUrl(`/study-library/${slug}`))

  if (data.lessons.length === 0) {
    return <StudyEmptyState studyTitle={data.title} />
  }

  const overview = buildStudyOverviewStatic(data)
  const relatedStudies = getRelatedStudies(catalog, slug, 3)
  const scriptureThreads = await scriptureThreadsForSeries(data)

  return (
    <StudyOverviewShell
      overview={overview}
      studySeries={data}
      scriptureThreads={scriptureThreads}
      relatedStudies={relatedStudies}
      studyPaths={catalog.paths}
      showCatalogFallback={shouldShowCatalogFallbackNotice(catalog)}
      catalogSource={catalog.source}
    />
  )
}
