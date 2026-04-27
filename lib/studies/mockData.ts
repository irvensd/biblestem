/**
 * Study overview content is driven by `loadCatalog()` (Supabase or `lib/product-mock.ts`).
 * Per-series bullets live on `StudySeries.whatYouWillLearn` (optional JSON from DB later).
 * Local progress is read in the client from `lib/dashboard-local-progress.ts`.
 */

export { buildStudyOverviewStatic } from './derive-overview'
export type { StudyOverviewLessonRow, StudyOverviewStatic } from './types'
