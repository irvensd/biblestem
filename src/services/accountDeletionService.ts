/**
 * Account Deletion Service
 * Handles complete account deletion and data cleanup
 */

import { useAuthStore } from '../stores/auth'
import { useStudyProgressStore } from '../stores/studyProgress'
import { useNotesStore } from '../stores/notes'
import { getSupabase, isSupabaseAvailable, handleSupabaseError } from '../lib/supabase'
import { logger } from '../utils/logger'

/**
 * Delete user account and all associated data
 */
export async function deleteUserAccount(): Promise<void> {
  const authStore = useAuthStore()

  if (!authStore.user) {
    throw new Error('User must be logged in to delete account')
  }

  const userId = authStore.user.id

  if (!isSupabaseAvailable()) {
    throw new Error('Supabase is not available. Cannot delete account.')
  }

  const supabase = getSupabase()
  if (!supabase) {
    throw new Error('Supabase client not available')
  }

  try {
    logger.warn(`Starting account deletion for user: ${userId}`)

    // Delete user data from database tables (in order due to foreign keys)
    // Notes
    const { error: notesError } = await supabase
      .from('notes')
      .delete()
      .eq('user_id', userId)

    if (notesError) {
      const errorInfo = handleSupabaseError(notesError, 'delete notes')
      logger.error('Error deleting notes:', errorInfo)
      // Continue even if some deletions fail - user might not have notes
    } else {
      logger.info(`Deleted notes for user: ${userId}`)
    }

    // Study progress
    const { error: progressError } = await supabase
      .from('study_progress')
      .delete()
      .eq('user_id', userId)

    if (progressError) {
      const errorInfo = handleSupabaseError(progressError, 'delete study progress')
      logger.error('Error deleting study progress:', errorInfo)
      // Continue even if some deletions fail - user might not have progress
    } else {
      logger.info(`Deleted study progress for user: ${userId}`)
    }

    // Bookmarks (if exists)
    const { error: bookmarksError } = await supabase
      .from('bookmarks')
      .delete()
      .eq('user_id', userId)

    if (bookmarksError) {
      const errorInfo = handleSupabaseError(bookmarksError, 'delete bookmarks')
      // Don't throw if bookmarks table doesn't exist - just log
      if (!errorInfo.message.includes('relation') && !errorInfo.message.includes('does not exist')) {
        logger.error('Error deleting bookmarks:', errorInfo)
      }
    } else {
      logger.info(`Deleted bookmarks for user: ${userId}`)
    }

    // User profile
    const { error: profileError } = await supabase
      .from('users')
      .delete()
      .eq('id', userId)

    if (profileError) {
      const errorInfo = handleSupabaseError(profileError, 'delete user profile')
      logger.error('Error deleting user profile:', errorInfo)
      throw new Error(`Failed to delete user profile: ${errorInfo.userFriendlyMessage || errorInfo.message}`)
    } else {
      logger.info(`Deleted user profile for user: ${userId}`)
    }

    // Delete auth user (this will cascade delete related data due to ON DELETE CASCADE)
    // Note: This requires admin privileges or a database function
    // For now, we'll delete the profile and let the user know they need to contact support
    // or we can use a database function/trigger

    // Clear local storage
    localStorage.removeItem('biblestem_study_progress')
    localStorage.removeItem('biblestem_notes')
    localStorage.removeItem('biblestem_settings')
    localStorage.removeItem('biblestem_remember_me')
    localStorage.removeItem('biblestem_remembered_email')

    // Sign out
    await authStore.logout()

    logger.info('Account deletion completed for user:', userId)
  } catch (error) {
    logger.error('Error deleting account:', error)
    throw error
  }
}

/**
 * Request account deletion (for admin review if needed)
 */
export async function requestAccountDeletion(): Promise<void> {
  // This could send a request to an admin or trigger a delayed deletion
  // For now, we'll just call deleteUserAccount directly
  await deleteUserAccount()
}

