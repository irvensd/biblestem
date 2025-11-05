/**
 * Track and restore last read position
 * Remembers where the user left off in each study/lesson
 */

import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRouter } from 'vue-router'

export interface ReadPosition {
  studyId: string
  lessonId: string
  scrollPosition: number
  timestamp: string
  sectionId?: string
}

const STORAGE_KEY = 'biblestem_read_positions'
const SAVE_DEBOUNCE_MS = 500

export function useReadPosition(studyId: string, lessonId?: string) {
  const scrollPosition = ref(0)
  const savedPosition = ref<ReadPosition | null>(null)
  const router = useRouter()
  
  let saveTimeout: ReturnType<typeof setTimeout> | null = null
  let scrollHandler: (() => void) | null = null

  /**
   * Load saved positions from localStorage
   */
  const loadPositions = (): Record<string, ReadPosition> => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      return stored ? JSON.parse(stored) : {}
    } catch (error) {
      console.error('Failed to load read positions:', error)
      return {}
    }
  }

  /**
   * Save positions to localStorage
   */
  const savePositions = (positions: Record<string, ReadPosition>) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(positions))
    } catch (error) {
      console.error('Failed to save read positions:', error)
    }
  }

  /**
   * Get the storage key for a specific study/lesson
   */
  const getPositionKey = (sId: string, lId?: string): string => {
    return lId ? `${sId}_${lId}` : sId
  }

  /**
   * Get saved position for current study/lesson
   */
  const getSavedPosition = (): ReadPosition | null => {
    if (!lessonId) return null
    
    const positions = loadPositions()
    const key = getPositionKey(studyId, lessonId)
    return positions[key] || null
  }

  /**
   * Save current read position
   */
  const savePosition = (position?: Partial<ReadPosition>) => {
    if (!lessonId) return

    const positions = loadPositions()
    const key = getPositionKey(studyId, lessonId)
    
    positions[key] = {
      studyId,
      lessonId,
      scrollPosition: position?.scrollPosition ?? window.scrollY,
      timestamp: new Date().toISOString(),
      sectionId: position?.sectionId,
    }
    
    savePositions(positions)
  }

  /**
   * Save position with debounce
   */
  const debouncedSavePosition = () => {
    if (saveTimeout) {
      clearTimeout(saveTimeout)
    }
    
    saveTimeout = setTimeout(() => {
      savePosition()
    }, SAVE_DEBOUNCE_MS)
  }

  /**
   * Restore saved scroll position
   */
  const restorePosition = () => {
    const position = getSavedPosition()
    
    if (position) {
      savedPosition.value = position
      
      // Wait for DOM to be ready
      setTimeout(() => {
        if (position.sectionId) {
          // Scroll to specific section if available
          const element = document.getElementById(position.sectionId)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
            return
          }
        }
        
        // Otherwise scroll to saved position
        if (position.scrollPosition > 0) {
          window.scrollTo({
            top: position.scrollPosition,
            behavior: 'smooth'
          })
        }
      }, 100)
    }
  }

  /**
   * Clear position for a specific study/lesson
   */
  const clearPosition = (sId?: string, lId?: string) => {
    const positions = loadPositions()
    const key = getPositionKey(sId || studyId, lId || lessonId)
    delete positions[key]
    savePositions(positions)
  }

  /**
   * Get last read lesson for a study
   */
  const getLastReadLesson = (sId: string): string | null => {
    const positions = loadPositions()
    
    // Find the most recent position for this study
    let lastPosition: ReadPosition | null = null
    let lastTimestamp = 0
    
    for (const [key, position] of Object.entries(positions)) {
      if (position.studyId === sId) {
        const timestamp = new Date(position.timestamp).getTime()
        if (timestamp > lastTimestamp) {
          lastTimestamp = timestamp
          lastPosition = position
        }
      }
    }
    
    return lastPosition?.lessonId || null
  }

  /**
   * Navigate to last read position
   */
  const goToLastReadPosition = (sId: string) => {
    const lastLesson = getLastReadLesson(sId)
    
    if (lastLesson) {
      router.push(`/study/${sId}/lesson/${lastLesson}`)
      return true
    }
    
    return false
  }

  /**
   * Check if there's a saved position
   */
  const hasSavedPosition = (): boolean => {
    return getSavedPosition() !== null
  }

  // Set up scroll tracking
  onMounted(() => {
    // Restore position on mount
    restorePosition()
    
    // Track scroll position
    scrollHandler = () => {
      scrollPosition.value = window.scrollY
      debouncedSavePosition()
    }
    
    window.addEventListener('scroll', scrollHandler, { passive: true })
  })

  // Clean up
  onUnmounted(() => {
    if (scrollHandler) {
      window.removeEventListener('scroll', scrollHandler)
    }
    
    if (saveTimeout) {
      clearTimeout(saveTimeout)
    }
    
    // Save final position
    savePosition()
  })

  // Watch for route changes to save position
  watch(() => router.currentRoute.value, () => {
    savePosition()
  })

  return {
    scrollPosition: computed(() => scrollPosition.value),
    savedPosition: computed(() => savedPosition.value),
    hasSavedPosition,
    savePosition,
    restorePosition,
    clearPosition,
    getLastReadLesson,
    goToLastReadPosition,
  }
}

