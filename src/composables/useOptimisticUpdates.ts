/**
 * Optimistic updates composable
 * Provides sync state tracking and UI feedback for data operations
 */

import { ref, computed } from 'vue'

export type SyncState = 'idle' | 'syncing' | 'synced' | 'error'

export interface OptimisticUpdate {
  id: string
  type: 'progress' | 'note' | 'bookmark'
  state: SyncState
  error?: string
  timestamp: number
}

// Global sync state management
const updates = ref<Map<string, OptimisticUpdate>>(new Map())
const syncStates = ref<Map<string, SyncState>>(new Map())

export function useOptimisticUpdates() {
  /**
   * Start an optimistic update
   * @param id - Unique identifier for the update
   * @param type - Type of update
   */
  const startUpdate = (id: string, type: OptimisticUpdate['type']) => {
    updates.value.set(id, {
      id,
      type,
      state: 'syncing',
      timestamp: Date.now(),
    })
    syncStates.value.set(id, 'syncing')
  }

  /**
   * Mark an update as successfully synced
   * @param id - Update identifier
   */
  const completeUpdate = (id: string) => {
    const update = updates.value.get(id)
    if (update) {
      update.state = 'synced'
      syncStates.value.set(id, 'synced')
      
      // Auto-clear synced status after 2 seconds
      setTimeout(() => {
        updates.value.delete(id)
        syncStates.value.set(id, 'idle')
      }, 2000)
    }
  }

  /**
   * Mark an update as failed
   * @param id - Update identifier
   * @param error - Error message
   */
  const failUpdate = (id: string, error: string) => {
    const update = updates.value.get(id)
    if (update) {
      update.state = 'error'
      update.error = error
      syncStates.value.set(id, 'error')
    }
  }

  /**
   * Retry a failed update
   * @param id - Update identifier
   */
  const retryUpdate = (id: string) => {
    const update = updates.value.get(id)
    if (update && update.state === 'error') {
      update.state = 'syncing'
      update.error = undefined
      syncStates.value.set(id, 'syncing')
    }
  }

  /**
   * Clear an update
   * @param id - Update identifier
   */
  const clearUpdate = (id: string) => {
    updates.value.delete(id)
    syncStates.value.delete(id)
  }

  /**
   * Get sync state for a specific item
   * @param id - Item identifier
   */
  const getSyncState = (id: string): SyncState => {
    return syncStates.value.get(id) || 'idle'
  }

  /**
   * Check if any updates are in progress
   */
  const isSyncing = computed(() => {
    return Array.from(updates.value.values()).some(u => u.state === 'syncing')
  })

  /**
   * Check if any updates have errors
   */
  const hasErrors = computed(() => {
    return Array.from(updates.value.values()).some(u => u.state === 'error')
  })

  /**
   * Get all pending updates
   */
  const pendingUpdates = computed(() => {
    return Array.from(updates.value.values()).filter(u => u.state === 'syncing')
  })

  /**
   * Get all failed updates
   */
  const failedUpdates = computed(() => {
    return Array.from(updates.value.values()).filter(u => u.state === 'error')
  })

  /**
   * Get sync status for display
   */
  const syncStatus = computed(() => {
    if (isSyncing.value) return 'Syncing...'
    if (hasErrors.value) return 'Sync failed'
    return 'All changes saved'
  })

  return {
    // State
    updates: computed(() => Array.from(updates.value.values())),
    isSyncing,
    hasErrors,
    pendingUpdates,
    failedUpdates,
    syncStatus,

    // Actions
    startUpdate,
    completeUpdate,
    failUpdate,
    retryUpdate,
    clearUpdate,
    getSyncState,
  }
}

