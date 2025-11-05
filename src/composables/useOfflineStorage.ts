import { ref, computed, onUnmounted } from 'vue'
import { getSyncQueue } from './useSupabaseSync'

interface OfflineItem<T = any> {
  key: string
  data: T
  timestamp: number
  expiresAt?: number
  version: string
  syncStatus: 'pending' | 'synced' | 'failed'
}

export function useOfflineStorage() {
  const storage = ref<Map<string, OfflineItem>>(new Map())
  const pendingSyncs = ref<Set<string>>(new Set())
  const isOnline = ref(navigator.onLine)
  const cleanupInterval = ref<ReturnType<typeof setInterval> | null>(null)
  const eventHandlers: Array<{ element: Window; event: string; handler: EventListener }> = []

  // Initialize storage from localStorage
  const initializeStorage = () => {
    try {
      const keys = Object.keys(localStorage).filter(key => key.startsWith('offline_'))
      keys.forEach(key => {
        const item = localStorage.getItem(key)
        if (item) {
          const parsed = JSON.parse(item)
          storage.value.set(key.replace('offline_', ''), parsed)
        }
      })
    } catch (error) {
      console.error('Failed to initialize offline storage:', error)
    }
  }

  // Set item in offline storage
  const set = <T>(key: string, data: T, ttl?: number): void => {
    const item: OfflineItem<T> = {
      key,
      data,
      timestamp: Date.now(),
      expiresAt: ttl ? Date.now() + ttl : undefined,
      version: '1.0.0',
      syncStatus: 'pending'
    }

    storage.value.set(key, item)
    
    // Save to localStorage
    try {
      localStorage.setItem(`offline_${key}`, JSON.stringify(item))
    } catch (error) {
      console.error('Failed to save to localStorage:', error)
    }

    // Add to pending syncs
    pendingSyncs.value.add(key)
  }

  // Get item from offline storage
  const get = <T>(key: string): T | null => {
    const item = storage.value.get(key)
    if (!item) return null

    // Check if expired
    if (item.expiresAt && Date.now() > item.expiresAt) {
      remove(key)
      return null
    }

    return item.data
  }

  // Check if item exists
  const has = (key: string): boolean => {
    const item = storage.value.get(key)
    if (!item) return false

    // Check if expired
    if (item.expiresAt && Date.now() > item.expiresAt) {
      remove(key)
      return false
    }

    return true
  }

  // Remove item
  const remove = (key: string): boolean => {
    const deleted = storage.value.delete(key)
    pendingSyncs.value.delete(key)
    
    try {
      localStorage.removeItem(`offline_${key}`)
    } catch (error) {
      console.error('Failed to remove from localStorage:', error)
    }

    return deleted
  }

  // Clear all offline storage
  const clear = (): void => {
    storage.value.clear()
    pendingSyncs.value.clear()
    
    try {
      const keys = Object.keys(localStorage).filter(key => key.startsWith('offline_'))
      keys.forEach(key => localStorage.removeItem(key))
    } catch (error) {
      console.error('Failed to clear localStorage:', error)
    }
  }

  // Get all keys
  const keys = (): string[] => {
    return Array.from(storage.value.keys())
  }

  // Get storage size
  const size = computed(() => storage.value.size)

  // Get pending syncs
  const getPendingSyncs = (): string[] => {
    return Array.from(pendingSyncs.value)
  }

  // Mark as synced
  const markAsSynced = (key: string): void => {
    const item = storage.value.get(key)
    if (item) {
      item.syncStatus = 'synced'
      pendingSyncs.value.delete(key)
      
      // Update localStorage
      try {
        localStorage.setItem(`offline_${key}`, JSON.stringify(item))
      } catch (error) {
        console.error('Failed to update localStorage:', error)
      }
    }
  }

  // Mark as failed
  const markAsFailed = (key: string): void => {
    const item = storage.value.get(key)
    if (item) {
      item.syncStatus = 'failed'
      
      // Update localStorage
      try {
        localStorage.setItem(`offline_${key}`, JSON.stringify(item))
      } catch (error) {
        console.error('Failed to update localStorage:', error)
      }
    }
  }

  // Cleanup expired items
  const cleanup = (): void => {
    const now = Date.now()
    const expiredKeys: string[] = []

    for (const [key, item] of storage.value.entries()) {
      if (item.expiresAt && now > item.expiresAt) {
        expiredKeys.push(key)
      }
    }

    expiredKeys.forEach(key => remove(key))
  }

  // Get storage usage
  const getStorageUsage = (): { used: number; available: number; percentage: number } => {
    try {
      let used = 0
      for (const [key, item] of storage.value.entries()) {
        used += JSON.stringify(item).length
      }

      // Estimate available space (5MB limit for most browsers)
      const available = 5 * 1024 * 1024 - used
      const percentage = (used / (5 * 1024 * 1024)) * 100

      return { used, available, percentage }
    } catch (error) {
      console.error('Failed to calculate storage usage:', error)
      return { used: 0, available: 0, percentage: 0 }
    }
  }

  // Export data for backup
  const exportData = (): string => {
    const data = Object.fromEntries(storage.value)
    return JSON.stringify(data, null, 2)
  }

  // Import data from backup
  const importData = (jsonData: string): boolean => {
    try {
      const data = JSON.parse(jsonData)
      Object.entries(data).forEach(([key, value]) => {
        storage.value.set(key, value as OfflineItem)
        localStorage.setItem(`offline_${key}`, JSON.stringify(value))
      })
      return true
    } catch (error) {
      console.error('Failed to import data:', error)
      return false
    }
  }

  // Online/offline detection
  const handleOnline = () => {
    isOnline.value = true
    // Trigger sync when coming back online
    syncPendingData()
  }

  const handleOffline = () => {
    isOnline.value = false
  }

  // Sync pending data
  const syncPendingData = async (): Promise<void> => {
    if (!isOnline.value) return

    const pendingKeys = getPendingSyncs()
    
    for (const key of pendingKeys) {
      try {
        const item = storage.value.get(key)
        if (!item) continue

        // Simulate API call
        await syncToServer(key, item.data)
        markAsSynced(key)
      } catch (error) {
        console.error(`Failed to sync ${key}:`, error)
        markAsFailed(key)
      }
    }
  }

  // Sync to server using Supabase sync queue
  const syncToServer = async (key: string, data: any): Promise<void> => {
    const syncQueue = getSyncQueue()
    
    // Determine operation type from key pattern
    if (key.startsWith('study_progress_')) {
      const studyId = key.replace('study_progress_', '')
      syncQueue.queueOperation('progress_save', {
        studyId,
        ...data
      })
    } else if (key.startsWith('study_notes_')) {
      // Extract studyId and lessonId from key pattern: study_notes_{studyId}_{lessonId}
      const parts = key.replace('study_notes_', '').split('_')
      if (parts.length >= 2) {
        const studyId = parts[0]
        const lessonId = parts.slice(1).join('_')
        // Find the note in the notes store or create sync payload
        syncQueue.queueOperation('note_update', {
          studyId,
          lessonId,
          content: data,
          updatedAt: new Date().toISOString()
        })
      }
    } else if (key.startsWith('bookmark_')) {
      const bookmarkId = key.replace('bookmark_', '')
      syncQueue.queueOperation('bookmark_update', {
        id: bookmarkId,
        ...data
      })
    } else {
      // Generic sync - try to determine type from data structure
      if (data.type === 'note' || data.noteId) {
        syncQueue.queueOperation('note_update', data)
      } else if (data.studyId && data.completedLessons !== undefined) {
        syncQueue.queueOperation('progress_save', data)
      } else {
        console.warn(`Unknown sync type for key: ${key}`)
        // Still mark as synced to avoid retry loops
        return Promise.resolve()
      }
    }
    
    // Return resolved promise - actual sync happens via queue
    return Promise.resolve()
  }

  // Event listeners
  if (typeof window !== 'undefined') {
    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)
    
    // Store handlers for cleanup
    eventHandlers.push(
      { element: window, event: 'online', handler: handleOnline },
      { element: window, event: 'offline', handler: handleOffline },
    )
  }

  // Initialize
  initializeStorage()

  // Cleanup expired items every 5 minutes
  if (typeof window !== 'undefined') {
    cleanupInterval.value = setInterval(cleanup, 5 * 60 * 1000)
  }

  // Cleanup on unmount
  onUnmounted(() => {
    // Clear interval
    if (cleanupInterval.value) {
      clearInterval(cleanupInterval.value)
      cleanupInterval.value = null
    }
    
    // Remove event listeners
    eventHandlers.forEach(({ element, event, handler }) => {
      element.removeEventListener(event, handler)
    })
    eventHandlers.length = 0
  })

  return {
    // State
    isOnline,
    size,
    
    // Methods
    set,
    get,
    has,
    remove,
    clear,
    keys,
    getPendingSyncs,
    markAsSynced,
    markAsFailed,
    cleanup,
    getStorageUsage,
    exportData,
    importData,
    syncPendingData
  }
}

// Specialized storage for different data types
export function useStudyOfflineStorage() {
  const storage = useOfflineStorage()

  const saveStudyProgress = (studyId: string, progress: any) => {
    storage.set(`study_progress_${studyId}`, progress, 24 * 60 * 60 * 1000) // 24 hours
  }

  const getStudyProgress = (studyId: string) => {
    return storage.get(`study_progress_${studyId}`)
  }

  const saveStudyNotes = (studyId: string, lessonId: string, notes: string) => {
    storage.set(`study_notes_${studyId}_${lessonId}`, notes, 7 * 24 * 60 * 60 * 1000) // 7 days
  }

  const getStudyNotes = (studyId: string, lessonId: string) => {
    return storage.get(`study_notes_${studyId}_${lessonId}`)
  }

  const saveStudyData = (studyId: string, studyData: any) => {
    storage.set(`study_data_${studyId}`, studyData, 60 * 60 * 1000) // 1 hour
  }

  const getStudyData = (studyId: string) => {
    return storage.get(`study_data_${studyId}`)
  }

  const saveUserPreferences = (preferences: any) => {
    storage.set('user_preferences', preferences, 30 * 24 * 60 * 60 * 1000) // 30 days
  }

  const getUserPreferences = () => {
    return storage.get('user_preferences')
  }

  return {
    ...storage,
    saveStudyProgress,
    getStudyProgress,
    saveStudyNotes,
    getStudyNotes,
    saveStudyData,
    getStudyData,
    saveUserPreferences,
    getUserPreferences
  }
}
