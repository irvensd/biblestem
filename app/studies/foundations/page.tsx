import type { Metadata } from 'next'
import { StudiesTrackPreviewLayout } from '@/components/studies/StudiesTrackPreviewLayout'
import { loadCatalog } from '@/lib/catalog/load-catalog'
import { getFoundationBrowseStudies } from '@/lib/study-library-levels'
import { STUDY_TRACKS } from '@/lib/study-tracks'

const track = STUDY_TRACKS[0]

export const metadata: Metadata = {
  title: `Preview ${track.publicLabel} · BibleStem Studies`,
  description: track.browsePageDescription,
}

export default async function StudiesFoundationsPreviewPage() {
  const catalog = await loadCatalog()
  const studies = getFoundationBrowseStudies(catalog)

  return (
    <StudiesTrackPreviewLayout
      track={track}
      studies={studies}
      paths={catalog.paths}
      emptyMessage="No Foundation studies are available to preview yet."
    />
  )
}
