import type { Metadata } from 'next'
import { StudyLevelBrowseLayout } from '@/components/study-library/StudyLevelBrowseLayout'
import { loadCatalog, shouldShowCatalogFallbackNotice } from '@/lib/catalog/load-catalog'
import { getAdvancedBrowseStudies } from '@/lib/study-library-levels'
import { getBrowseBreadcrumbParent, STUDY_TRACKS } from '@/lib/study-tracks'

const track = STUDY_TRACKS[2]

export const metadata: Metadata = {
  title: `${track.browsePageTitle} · Study Library · BibleStem`,
  description: track.browsePageDescription,
}

export default async function AdvancedStudiesBrowsePage({
  searchParams,
}: {
  searchParams: Promise<{ from?: string }>
}) {
  const { from } = await searchParams
  const catalog = await loadCatalog()
  const studies = getAdvancedBrowseStudies(catalog.allSeries)

  return (
    <StudyLevelBrowseLayout
      breadcrumbParent={getBrowseBreadcrumbParent(from)}
      breadcrumbLabel={track.publicLabel}
      eyebrow={track.publicLabel}
      title={track.browsePageTitle}
      description={track.browsePageDescription}
      catalogSource={catalog.source}
      showCatalogFallback={shouldShowCatalogFallbackNotice(catalog)}
      studies={studies}
      paths={catalog.paths}
      feature={{
        title: track.browseFeatureTitle,
        text: track.browseFeatureText,
      }}
      emptyMessage="No advanced studies are available in the catalog yet."
    />
  )
}
