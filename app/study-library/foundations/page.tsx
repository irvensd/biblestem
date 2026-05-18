import type { Metadata } from 'next'
import { StudyLevelBrowseLayout } from '@/components/study-library/StudyLevelBrowseLayout'
import { loadCatalog, shouldShowCatalogFallbackNotice } from '@/lib/catalog/load-catalog'
import { getFoundationBrowseStudies } from '@/lib/study-library-levels'
import { getBrowseBreadcrumbParent, STUDY_TRACKS } from '@/lib/study-tracks'

const track = STUDY_TRACKS[0]

export const metadata: Metadata = {
  title: `${track.browsePageTitle} · Study Library · BibleStem`,
  description: track.browsePageDescription,
}

export default async function FoundationStudiesBrowsePage({
  searchParams,
}: {
  searchParams: Promise<{ from?: string }>
}) {
  const { from } = await searchParams
  const catalog = await loadCatalog()
  const studies = getFoundationBrowseStudies(catalog)

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
        title: 'Want the guided order?',
        text: 'Use the Foundations Path to move through these studies in sequence.',
        buttonHref: track.pathHref,
        buttonLabel: 'Open Foundations Path',
      }}
      emptyMessage="No Foundation studies are available in the catalog yet."
    />
  )
}
