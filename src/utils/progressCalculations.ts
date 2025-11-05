/**
 * Centralized progress calculation utilities
 * Ensures consistent calculation across the app
 */

export interface LessonProgress {
  totalLessons: number
  completedLessons: number
  completionPercentage: number
}

export interface StudyCompletionStatus {
  isCompleted: boolean
  completedCount: number
  totalCount: number
  percentage: number
}

/**
 * Calculate study completion percentage
 * @param completedLessons - Array of completed lesson IDs
 * @param totalLessons - Total number of lessons in the study
 * @returns Completion percentage (0-100)
 */
export function calculateCompletionPercentage(
  completedLessons: string[],
  totalLessons: number
): number {
  if (totalLessons === 0) return 0
  return Math.round((completedLessons.length / totalLessons) * 100)
}

/**
 * Check if a study is completed
 * A study is considered completed when ALL lessons are marked as complete
 * @param completedLessons - Array of completed lesson IDs
 * @param totalLessons - Total number of lessons
 * @returns True if study is 100% complete
 */
export function isStudyCompleted(
  completedLessons: string[],
  totalLessons: number
): boolean {
  if (totalLessons === 0) return false
  return completedLessons.length >= totalLessons
}

/**
 * Get study completion status with detailed information
 * @param completedLessons - Array of completed lesson IDs
 * @param totalLessons - Total number of lessons
 * @returns Detailed completion status
 */
export function getStudyCompletionStatus(
  completedLessons: string[],
  totalLessons: number
): StudyCompletionStatus {
  const completedCount = Math.min(completedLessons.length, totalLessons)
  const percentage = calculateCompletionPercentage(completedLessons, totalLessons)
  const isCompleted = isStudyCompleted(completedLessons, totalLessons)

  return {
    isCompleted,
    completedCount,
    totalCount: totalLessons,
    percentage,
  }
}

/**
 * Validate lesson completion data
 * Ensures completed lessons are unique and valid
 * @param completedLessons - Array of completed lesson IDs
 * @param validLessonIds - Array of valid lesson IDs for the study
 * @returns Validated and deduplicated array of completed lessons
 */
export function validateCompletedLessons(
  completedLessons: string[],
  validLessonIds: string[]
): string[] {
  // Remove duplicates
  const unique = [...new Set(completedLessons)]
  
  // Filter out invalid lesson IDs
  const valid = unique.filter(id => validLessonIds.includes(id))
  
  return valid
}

/**
 * Calculate total studies completed
 * @param progressData - Record of study progress
 * @param studiesData - Record of studies with their lessons
 * @returns Number of completed studies
 */
export function getTotalStudiesCompleted(
  progressData: Record<string, { completedLessons: string[] }>,
  studiesData: Record<string, { lessons: any[] }>
): number {
  let completed = 0
  
  for (const [studyId, progress] of Object.entries(progressData)) {
    const study = studiesData[studyId]
    if (!study) continue
    
    const totalLessons = study.lessons?.length || 0
    if (isStudyCompleted(progress.completedLessons, totalLessons)) {
      completed++
    }
  }
  
  return completed
}

/**
 * Calculate average completion across all studies
 * @param progressData - Record of study progress
 * @param studiesData - Record of studies with their lessons
 * @returns Average completion percentage
 */
export function getAverageCompletion(
  progressData: Record<string, { completedLessons: string[] }>,
  studiesData: Record<string, { lessons: any[] }>
): number {
  let totalPercentage = 0
  let studyCount = 0
  
  for (const [studyId, progress] of Object.entries(progressData)) {
    const study = studiesData[studyId]
    if (!study) continue
    
    const totalLessons = study.lessons?.length || 0
    if (totalLessons > 0) {
      totalPercentage += calculateCompletionPercentage(progress.completedLessons, totalLessons)
      studyCount++
    }
  }
  
  return studyCount > 0 ? Math.round(totalPercentage / studyCount) : 0
}

