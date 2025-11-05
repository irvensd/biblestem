/**
 * Data validation utilities for Supabase operations
 * Ensures data integrity before saving to the database
 */

import type { StudyProgress } from '../stores/studyProgress'
import type { StudyNote } from '../stores/notes'

/**
 * Validation result interface
 */
export interface ValidationResult {
  isValid: boolean
  errors: string[]
}

/**
 * Validate study progress data before saving
 * @param progress - Progress data to validate
 * @returns Validation result
 */
export function validateProgressData(progress: StudyProgress): ValidationResult {
  const errors: string[] = []

  // Study ID is required
  if (!progress.studyId || typeof progress.studyId !== 'string') {
    errors.push('Study ID is required and must be a string')
  }

  // Completed lessons must be an array
  if (!Array.isArray(progress.completedLessons)) {
    errors.push('Completed lessons must be an array')
  }

  // Validate timestamps
  if (!isValidTimestamp(progress.startedAt)) {
    errors.push('Started at timestamp is invalid')
  }

  if (!isValidTimestamp(progress.lastAccessedAt)) {
    errors.push('Last accessed at timestamp is invalid')
  }

  // Total time spent must be non-negative number
  if (typeof progress.totalTimeSpent !== 'number' || progress.totalTimeSpent < 0) {
    errors.push('Total time spent must be a non-negative number')
  }

  // Accepted challenges must be an array if present
  if (progress.acceptedChallenges && !Array.isArray(progress.acceptedChallenges)) {
    errors.push('Accepted challenges must be an array')
  }

  return {
    isValid: errors.length === 0,
    errors,
  }
}

/**
 * Validate note data before saving
 * @param note - Note data to validate
 * @returns Validation result
 */
export function validateNoteData(note: StudyNote): ValidationResult {
  const errors: string[] = []

  // Note ID is required
  if (!note.id || typeof note.id !== 'string') {
    errors.push('Note ID is required and must be a string')
  }

  // Study ID is required
  if (!note.studyId || typeof note.studyId !== 'string') {
    errors.push('Study ID is required and must be a string')
  }

  // Lesson ID is required
  if (!note.lessonId || typeof note.lessonId !== 'string') {
    errors.push('Lesson ID is required and must be a string')
  }

  // Content must be a string
  if (typeof note.content !== 'string') {
    errors.push('Content must be a string')
  }

  // Content should not be empty (unless it's a very recent note)
  if (note.content.trim().length === 0) {
    errors.push('Content cannot be empty')
  }

  // Tags must be an array
  if (!Array.isArray(note.tags)) {
    errors.push('Tags must be an array')
  }

  // Type must be valid
  const validTypes = ['general', 'reflection', 'question', 'insight', 'prayer']
  if (!validTypes.includes(note.type)) {
    errors.push(`Type must be one of: ${validTypes.join(', ')}`)
  }

  // Validate timestamps
  if (!isValidTimestamp(note.createdAt)) {
    errors.push('Created at timestamp is invalid')
  }

  if (!isValidTimestamp(note.updatedAt)) {
    errors.push('Updated at timestamp is invalid')
  }

  // is Private must be boolean
  if (typeof note.isPrivate !== 'boolean') {
    errors.push('isPrivate must be a boolean')
  }

  return {
    isValid: errors.length === 0,
    errors,
  }
}

/**
 * Check if a timestamp is valid
 * @param timestamp - Timestamp to validate
 * @returns True if valid
 */
function isValidTimestamp(timestamp: string | undefined): boolean {
  if (!timestamp) return false
  
  try {
    const date = new Date(timestamp)
    return !isNaN(date.getTime())
  } catch {
    return false
  }
}

/**
 * Sanitize progress data for Supabase
 * Removes invalid data and ensures proper format
 * @param progress - Progress data to sanitize
 * @returns Sanitized progress data
 */
export function sanitizeProgressData(progress: StudyProgress): StudyProgress {
  return {
    ...progress,
    completedLessons: [...new Set(progress.completedLessons)], // Remove duplicates
    totalTimeSpent: Math.max(0, progress.totalTimeSpent || 0), // Ensure non-negative
    acceptedChallenges: [...new Set(progress.acceptedChallenges || [])], // Remove duplicates
  }
}

/**
 * Sanitize note data for Supabase
 * Removes invalid data and ensures proper format
 * @param note - Note data to sanitize
 * @returns Sanitized note data
 */
export function sanitizeNoteData(note: StudyNote): StudyNote {
  return {
    ...note,
    content: note.content.trim(),
    tags: [...new Set(note.tags)], // Remove duplicates
    scripture: note.scripture?.trim(),
  }
}

/**
 * Validate and sanitize progress data
 * @param progress - Progress data to validate
 * @returns Object with validated data and any errors
 */
export function validateAndSanitizeProgress(progress: StudyProgress): {
  data: StudyProgress
  validation: ValidationResult
} {
  const sanitized = sanitizeProgressData(progress)
  const validation = validateProgressData(sanitized)
  
  return {
    data: sanitized,
    validation,
  }
}

/**
 * Validate and sanitize note data
 * @param note - Note data to validate
 * @returns Object with validated data and any errors
 */
export function validateAndSanitizeNote(note: StudyNote): {
  data: StudyNote
  validation: ValidationResult
} {
  const sanitized = sanitizeNoteData(note)
  const validation = validateNoteData(sanitized)
  
  return {
    data: sanitized,
    validation,
  }
}

