/**
 * Migration Example
 * 
 * This file demonstrates how to migrate existing code to use the new
 * centralized services and utilities.
 */

import { ROUTES } from '@/constants/routes'
import { useUnifiedLoading } from '@/composables/useUnifiedLoading'
import { notesApi } from '@/services/apiService'
import { withErrorHandling } from '@/utils/errorHandler'
import { useRouter } from 'vue-router'

/**
 * Example: Migrating DashboardPage component
 * 
 * BEFORE (Old Pattern):
 * - Direct Supabase calls
 * - Scattered isLoading refs
 * - Magic route strings
 * - Inconsistent error handling
 */

// ❌ OLD WAY
/*
const isLoading = ref(false)
const router = useRouter()

const navigateToDailyDevotion = () => {
  router.push('/daily-devotions')  // Magic string
}

const loadDashboardData = async () => {
  try {
    isLoading.value = true
    
    if (authStore.user) {
      const supabase = getSupabase()  // Repeated calls
      if (supabase) {
        const { data: notes, error: notesError } = await supabase
          .from('study_notes')
          .select('*')
          .eq('user_id', authStore.user.id)
          .order('created_at', { ascending: false })
          .limit(5)
        
        if (notesError) {
          const errorInfo = handleSupabaseError(notesError, 'load recent notes')
          console.warn('Failed to load recent notes:', errorInfo.userFriendlyMessage)
          recentNotes.value = []
        } else {
          recentNotes.value = notes || []
        }
      }
    }
  } catch (error) {
    console.error('Error loading dashboard data:', error)
  } finally {
    isLoading.value = false
  }
}
*/

/**
 * ✅ NEW WAY (Improved Pattern)
 */
export function useImprovedDashboard() {
  const router = useRouter()
  const { isLoading, execute } = useUnifiedLoading('DashboardPage')

  /**
   * Navigate using route constants
   */
  const navigateToDailyDevotion = () => {
    router.push(ROUTES.DAILY_DEVOTIONS)  // Type-safe route
  }

  const navigateToBrowseStudies = () => {
    router.push(ROUTES.STUDY_SERIES)
  }

  const navigateToDailyStudy = () => {
    router.push(ROUTES.MY_STUDIES)
  }

  /**
   * Load dashboard data using centralized services
   */
  const loadDashboardData = async () => {
    // Use unified loading with proper error handling
    await execute(
      async () => {
        // Use API service instead of direct Supabase calls
        const { data: notes, error } = await notesApi.getUserNotes(
          authStore.user!.id,
          {
            pageSize: 5,
            orderBy: 'created_at',
            orderDirection: 'desc',
          }
        )

        if (error) {
          // Error is already handled by the API service
          // Just set empty array as fallback
          recentNotes.value = []
        } else {
          recentNotes.value = data || []
        }
      },
      {
        key: 'load-dashboard',
        minLoadingTime: 300,  // Prevent flash
        errorMessage: 'Failed to load dashboard data',
        logErrors: true,
      }
    )
  }

  return {
    isLoading,
    navigateToDailyDevotion,
    navigateToBrowseStudies,
    navigateToDailyStudy,
    loadDashboardData,
  }
}

/**
 * Example: Error handling with centralized utility
 */
export async function exampleWithErrorHandling() {
  const { data, error } = await withErrorHandling(
    async () => {
      // Your operation here
      return await someOperation()
    },
    {
      context: 'Load user data',
      log: true,
      userMessage: 'Unable to load user data. Please try again.',
    }
  )

  if (error) {
    // Handle error - already logged and formatted
    console.error('Operation failed:', error.userFriendlyMessage)
    return null
  }

  return data
}

