/**
 * Supabase Sync Queue
 * Manages offline Supabase operations and syncs them when online
 */

import { ref } from 'vue'
import { getSupabase, isSupabaseAvailable, handleSupabaseError } from '../lib/supabase'
import { useAuthStore } from '../stores/auth'

export type SyncOperationType =
  | 'note_create'
  | 'note_update'
  | 'note_delete'
  | 'progress_save'
  | 'progress_reset'
  | 'bookmark_create'
  | 'bookmark_update'
  | 'bookmark_delete'

export interface SyncOperation {
  id: string
  type: SyncOperationType
  payload: any
  timestamp: number
  retries: number
}

const STORAGE_KEY = 'biblestem_sync_queue'
const MAX_RETRIES = 3
const MAX_QUEUE_SIZE = 100

export function useSupabaseSync() {
  const queue = ref<SyncOperation[]>([])
  const isProcessing = ref(false)
  const isOnline = ref(navigator.onLine)
  const eventHandlers: Array<{ element: Window; event: string; handler: EventListener }> = []

  // Load queue from localStorage
  const loadQueue = () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        queue.value = JSON.parse(stored)
      }
    } catch (error) {
      console.error('Failed to load sync queue:', error)
    }
  }

  // Save queue to localStorage
  const saveQueue = () => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(queue.value))
    } catch (error) {
      console.error('Failed to save sync queue:', error)
      // If storage is full, remove oldest items
      if (queue.value.length > 0) {
        queue.value.shift()
        saveQueue()
      }
    }
  }

  // Add operation to queue
  const queueOperation = (type: SyncOperation['type'], payload: any): string => {
    const id = `sync_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    
    // Remove oldest items if queue is full
    if (queue.value.length >= MAX_QUEUE_SIZE) {
      queue.value.shift()
    }

    const operation: SyncOperation = {
      id,
      type,
      payload,
      timestamp: Date.now(),
      retries: 0,
    }

    queue.value.push(operation)
    saveQueue()

    // Try to process immediately if online
    if (isOnline.value && !isProcessing.value) {
      processQueue()
    }

    return id
  }

  // Process queued operations
  const processQueue = async () => {
    if (!isOnline.value || isProcessing.value || queue.value.length === 0) {
      return
    }

    if (!isSupabaseAvailable()) {
      console.log('Supabase not available - queue will be processed later')
      return
    }

    isProcessing.value = true
    const supabase = getSupabase()
    const authStore = useAuthStore()

    if (!supabase || !authStore.user) {
      isProcessing.value = false
      return
    }

    const operationsToProcess = [...queue.value]
    queue.value = []

    for (const operation of operationsToProcess) {
      try {
        await processOperation(supabase, authStore, operation)
        console.log(`Successfully synced operation: ${operation.id}`)
      } catch (error) {
        // Re-queue if retries not exceeded
        if (operation.retries < MAX_RETRIES) {
          operation.retries++
          queue.value.push(operation)
          console.warn(`Operation ${operation.id} failed, will retry (${operation.retries}/${MAX_RETRIES})`)
        } else {
          console.error(`Operation ${operation.id} failed after ${MAX_RETRIES} retries:`, error)
        }
      }
    }

    saveQueue()
    isProcessing.value = false
  }

  // Process a single operation
  const processOperation = async (
    supabase: any,
    authStore: any,
    operation: SyncOperation,
  ): Promise<void> => {
    const { type, payload } = operation

    switch (type) {
      case 'note_create':
      case 'note_update':
        {
          const { error } = await supabase.from('notes').upsert(
            {
              id: payload.id,
              user_id: authStore.user.id,
              study_id: payload.studyId,
              lesson_id: payload.lessonId,
              content: payload.content,
              scripture: payload.scripture || null,
              tags: payload.tags,
              type: payload.type,
              is_private: payload.isPrivate,
              created_at: payload.createdAt,
              updated_at: payload.updatedAt,
            },
            { onConflict: 'id' },
          )

          if (error) {
            const errorInfo = handleSupabaseError(error, `sync ${type}`)
            // Don't throw RLS/auth errors - they'll be handled gracefully
            if (!errorInfo.isRLSViolation && !errorInfo.isAuthError) {
              throw error
            }
          }
        }
        break

      case 'note_delete':
        {
          const { error } = await supabase
            .from('notes')
            .delete()
            .eq('id', payload.noteId)
            .eq('user_id', authStore.user.id)

          if (error) {
            const errorInfo = handleSupabaseError(error, 'sync note delete')
            if (!errorInfo.isRLSViolation && !errorInfo.isAuthError) {
              throw error
            }
          }
        }
        break

      case 'progress_save':
        {
          const { error } = await supabase.from('study_progress').upsert(
            {
              user_id: authStore.user.id,
              study_id: payload.studyId,
              completed_lessons: payload.completedLessons,
              current_lesson: payload.currentLesson,
              started_at: payload.startedAt,
              last_accessed_at: payload.lastAccessedAt,
              total_time_spent: payload.totalTimeSpent,
              accepted_challenges: payload.acceptedChallenges,
              updated_at: new Date().toISOString(),
            },
            { onConflict: 'user_id,study_id' },
          )

          if (error) {
            const errorInfo = handleSupabaseError(error, 'sync progress')
            if (!errorInfo.isRLSViolation && !errorInfo.isAuthError) {
              throw error
            }
          }
        }
        break

      case 'progress_reset':
        {
          const { error } = await supabase.from('study_progress').upsert(
            {
              user_id: authStore.user.id,
              study_id: payload.studyId,
              completed_lessons: [],
              current_lesson: null,
              started_at: new Date().toISOString(),
              last_accessed_at: new Date().toISOString(),
              total_time_spent: 0,
              accepted_challenges: [],
              updated_at: new Date().toISOString(),
            },
            { onConflict: 'user_id,study_id' },
          )

          if (error) {
            const errorInfo = handleSupabaseError(error, 'sync progress reset')
            if (!errorInfo.isRLSViolation && !errorInfo.isAuthError) {
              throw error
            }
          }
        }
        break

      case 'bookmark_create':
      case 'bookmark_update':
        {
          const bookmark = payload
          const { error } = await supabase.from('bookmarks').upsert(
            {
              id: bookmark.id,
              user_id: authStore.user.id,
              study_id: bookmark.studyId,
              lesson_id: bookmark.lessonId || null,
              title: bookmark.title,
              description: bookmark.description || null,
              tags: bookmark.tags || [],
              category_id: bookmark.categoryId || null,
              created_at: bookmark.createdAt
                ? new Date(bookmark.createdAt).toISOString()
                : new Date().toISOString(),
              updated_at: bookmark.updatedAt
                ? new Date(bookmark.updatedAt).toISOString()
                : new Date().toISOString(),
            },
            { onConflict: 'user_id,study_id,lesson_id' },
          )

          if (error) {
            const errorInfo = handleSupabaseError(error, `sync ${type}`)
            if (!errorInfo.isRLSViolation && !errorInfo.isAuthError) {
              throw error
            }
          }
        }
        break

      case 'bookmark_delete':
        {
          const { error } = await supabase
            .from('bookmarks')
            .delete()
            .eq('id', payload.bookmarkId)
            .eq('user_id', authStore.user.id)

          if (error) {
            const errorInfo = handleSupabaseError(error, 'sync bookmark delete')
            if (!errorInfo.isRLSViolation && !errorInfo.isAuthError) {
              throw error
            }
          }
        }
        break
    }
  }

  // Clear queue
  const clearQueue = () => {
    queue.value = []
    saveQueue()
  }

  // Get queue size
  const getQueueSize = () => queue.value.length

  // Handle online/offline events
  const handleOnline = () => {
    isOnline.value = true
    if (queue.value.length > 0 && !isProcessing.value) {
      processQueue()
    }
  }

  const handleOffline = () => {
    isOnline.value = false
  }

  // Cleanup function
  const cleanup = () => {
    // Remove all event listeners
    eventHandlers.forEach(({ element, event, handler }) => {
      element.removeEventListener(event, handler)
    })
    eventHandlers.length = 0
  }

  // Initialize immediately (not in lifecycle hooks since this may be called from stores)
  loadQueue()
  
  if (typeof window !== 'undefined') {
    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    // Store handlers for cleanup
    eventHandlers.push(
      { element: window, event: 'online', handler: handleOnline },
      { element: window, event: 'offline', handler: handleOffline },
    )

    // Process queue if online and there are pending operations
    if (isOnline.value && queue.value.length > 0) {
      processQueue()
    }
  }

  return {
    queue: queue.value,
    isProcessing,
    isOnline,
    queueOperation,
    processQueue,
    clearQueue,
    getQueueSize,
    cleanup,
  }
}

// Global sync queue instance
let globalSyncQueue: ReturnType<typeof useSupabaseSync> | null = null

export const getSyncQueue = () => {
  if (!globalSyncQueue) {
    globalSyncQueue = useSupabaseSync()
  }
  return globalSyncQueue
}
