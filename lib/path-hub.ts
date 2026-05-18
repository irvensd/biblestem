import type { LoadedCatalog } from '@/lib/catalog/load-catalog'
import {
  getVisibleStudyTrackHubCards,
  type StudyTrackHubCard,
} from '@/lib/study-tracks'

export type { StudyTrackHubCard as PathHubCardDefinition }

/** @deprecated Use `getVisibleStudyTrackHubCards` — kept for existing imports. */
export function getVisiblePathHubCards(catalog: LoadedCatalog): StudyTrackHubCard[] {
  return getVisibleStudyTrackHubCards(catalog)
}
