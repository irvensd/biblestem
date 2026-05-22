import type { Metadata } from 'next'
import { StudiesTrackPreviewLayout } from '@/components/studies/StudiesTrackPreviewLayout'
import { loadCatalog } from '@/lib/catalog/load-catalog'
import { getIntermediateBrowseStudies } from '@/lib/study-library-levels'
import { STUDY_TRACKS } from '@/lib/study-tracks'

const track = STUDY_TRACKS[1]

export const metadata: Metadata = {
  title: `Preview ${track.publicLabel} · BibleStem Studies`,
  description: track.browsePageDescription,
}

export default async function StudiesHardQuestionsPreviewPage() {
  const catalog = await loadCatalog()
  const studies = getIntermediateBrowseStudies(catalog.allSeries)

  return (
    <StudiesTrackPreviewLayout
      track={track}
      studies={studies}
      paths={catalog.paths}
      emptyMessage="No Hard Questions studies are available to preview yet."
    />
  )
}
