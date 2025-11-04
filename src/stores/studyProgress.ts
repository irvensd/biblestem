import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useAuthStore } from './auth'
import { getSupabase, isSupabaseAvailable, handleSupabaseError, requiresReAuth } from '../lib/supabase'
import { getSyncQueue } from '../composables/useSupabaseSync'
import { logger } from '../utils/logger'

export interface StudyProgress {
  studyId: string
  completedLessons: string[]
  currentLesson?: string
  startedAt: string
  lastAccessedAt: string
  totalTimeSpent: number
  acceptedChallenges: string[] // Track accepted challenges by lesson ID
}

export const useStudyProgressStore = defineStore('studyProgress', () => {
  const progressData = ref<Record<string, StudyProgress>>({})
  const isInitialized = ref(false)
  const isInitializing = ref(false)

  // Ensure progressData is always initialized
  const ensureInitialized = () => {
    if (!progressData.value || typeof progressData.value !== 'object') {
      progressData.value = {}
    }
  }

  const getStudyProgress = (studyId: string): StudyProgress | null => {
    return progressData.value[studyId] || null
  }

  const isLessonCompleted = (studyId: string, lessonId: string): boolean => {
    ensureInitialized()
    const progress = progressData.value[studyId]
    return progress ? progress.completedLessons.includes(lessonId) : false
  }

  const incompleteLesson = async (studyId: string, lessonId: string) => {
    if (!progressData.value[studyId]) {
      return // No progress to modify
    }

    const progress = progressData.value[studyId]
    
    // Remove lesson from completed lessons
    const index = progress.completedLessons.indexOf(lessonId)
    if (index > -1) {
      progress.completedLessons.splice(index, 1)
    }

    // Remove from accepted challenges if it was there
    if (progress.acceptedChallenges) {
      const challengeIndex = progress.acceptedChallenges.indexOf(lessonId)
      if (challengeIndex > -1) {
        progress.acceptedChallenges.splice(challengeIndex, 1)
      }
    }

    progress.lastAccessedAt = new Date().toISOString()
    saveToStorage()
    
    // Fire and forget Supabase sync - don't block UI
    saveProgressToSupabase(studyId).catch((error) =>
      logger.error('Failed to sync progress to Supabase:', error),
    )
  }

  const completeLesson = async (studyId: string, lessonId: string, timeSpent: number = 0) => {
    ensureInitialized()
    
    if (!progressData.value[studyId]) {
      progressData.value[studyId] = {
        studyId,
        completedLessons: [],
        startedAt: new Date().toISOString(),
        lastAccessedAt: new Date().toISOString(),
        totalTimeSpent: 0,
        acceptedChallenges: [],
      }
    }

    const progress = progressData.value[studyId]

    if (!progress.completedLessons.includes(lessonId)) {
      progress.completedLessons.push(lessonId)
    }

    progress.lastAccessedAt = new Date().toISOString()
    progress.totalTimeSpent += timeSpent

    saveToStorage()
    // Fire and forget Supabase sync - don't block UI
    saveProgressToSupabase(studyId).catch((error) =>
      logger.error('Failed to sync progress to Supabase:', error),
    )
  }

  const isChallengeAccepted = (studyId: string, lessonId: string): boolean => {
    const progress = progressData.value[studyId]
    return progress ? (progress.acceptedChallenges || []).includes(lessonId) : false
  }

  const acceptChallenge = async (studyId: string, lessonId: string) => {
    if (!progressData.value[studyId]) {
      progressData.value[studyId] = {
        studyId,
        completedLessons: [],
        startedAt: new Date().toISOString(),
        lastAccessedAt: new Date().toISOString(),
        totalTimeSpent: 0,
        acceptedChallenges: [],
      }
    }

    const progress = progressData.value[studyId]
    
    if (!progress.acceptedChallenges) {
      progress.acceptedChallenges = []
    }

    if (!progress.acceptedChallenges.includes(lessonId)) {
      progress.acceptedChallenges.push(lessonId)
    }

    progress.lastAccessedAt = new Date().toISOString()
    saveToStorage()
    
    // Fire and forget Supabase sync - don't block UI
    saveProgressToSupabase(studyId).catch((error) =>
      logger.error('Failed to sync progress to Supabase:', error),
    )
  }

  const startStudy = async (studyId: string, lessonId?: string) => {
    if (!progressData.value[studyId]) {
      progressData.value[studyId] = {
        studyId,
        completedLessons: [],
        currentLesson: lessonId,
        startedAt: new Date().toISOString(),
        lastAccessedAt: new Date().toISOString(),
        totalTimeSpent: 0,
        acceptedChallenges: [],
      }
    } else {
      progressData.value[studyId].lastAccessedAt = new Date().toISOString()
      if (lessonId) {
        progressData.value[studyId].currentLesson = lessonId
      }
    }

    saveToStorage()
    // Fire and forget Supabase sync - don't block UI
    saveProgressToSupabase(studyId).catch((error: any) =>
      logger.error('Failed to sync progress to Supabase:', error),
    )
  }

  const getStudyCompletionPercentage = (studyId: string, totalLessons: number): number => {
    const progress = progressData.value[studyId]
    if (!progress) return 0

    return Math.round((progress.completedLessons.length / totalLessons) * 100)
  }

  const getAllStudyProgress = () => {
    return progressData.value
  }

  const getTotalStudiesCompleted = (): number => {
    return Object.values(progressData.value).filter(
      (progress) => progress.completedLessons.length > 0,
    ).length
  }

  const getTotalTimeSpent = (): number => {
    return Object.values(progressData.value).reduce(
      (total, progress) => total + progress.totalTimeSpent,
      0,
    )
  }

  const saveToStorage = () => {
    localStorage.setItem('biblestem_study_progress', JSON.stringify(progressData.value))
  }

  const syncWithFirebase = async () => {
    // Firebase integration disabled for now
    logger.debug('Firebase sync disabled - using local storage only')
  }

  const saveProgressToSupabase = async (studyId: string) => {
    const useSupabase = isSupabaseAvailable()
    const authStore = useAuthStore()
    
    if (!useSupabase || !authStore.user) {
      logger.debug('Supabase not available or user not authenticated - using local storage only')
      return
    }

    const supabase = getSupabase()
    if (!supabase) return

    const progress = progressData.value[studyId]
    if (!progress) return

    try {
      const { error } = await supabase
        .from('study_progress')
        .upsert({
          user_id: authStore.user.id,
          study_id: studyId,
          completed_lessons: progress.completedLessons,
          current_lesson: progress.currentLesson,
          started_at: progress.startedAt,
          last_accessed_at: progress.lastAccessedAt,
          total_time_spent: progress.totalTimeSpent,
          accepted_challenges: progress.acceptedChallenges,
          updated_at: new Date().toISOString()
        }, {
          onConflict: 'user_id,study_id'
        })

      if (error) {
        const errorInfo = handleSupabaseError(error, 'save progress')
        logger.error('Failed to save progress to Supabase:', errorInfo.userFriendlyMessage, errorInfo)
        
        // If RLS violation, auth error, or network error, queue for later sync
        if (errorInfo.isRLSViolation || errorInfo.isAuthError || errorInfo.isNetworkError) {
          logger.warn('Queuing progress for later sync')
          const syncQueue = getSyncQueue()
          syncQueue.queueOperation('progress_save', progress)
          return
        }
        
        throw error
      }
      logger.debug('Progress saved to Supabase:', studyId)
    } catch (error) {
      const errorInfo = handleSupabaseError(error, 'save progress')
      console.error('Failed to save progress to Supabase:', errorInfo.userFriendlyMessage, errorInfo)
      // Don't throw RLS/auth errors - graceful degradation
      if (errorInfo.isRLSViolation || errorInfo.isAuthError) {
        return
      }
    }
  }

  const loadProgressFromSupabase = async () => {
    const useSupabase = isSupabaseAvailable()
    const authStore = useAuthStore()
    
    if (!useSupabase || !authStore.user) {
      logger.debug('Supabase not available or user not authenticated - loading from local storage')
      loadFromLocalStorage()
      return
    }

    const supabase = getSupabase()
    if (!supabase) {
      loadFromLocalStorage()
      return
    }

    try {
      const { data, error } = await supabase
        .from('study_progress')
        .select('*')
        .eq('user_id', authStore.user.id)

      if (error) {
        const errorInfo = handleSupabaseError(error, 'load progress')
        console.error('Failed to load progress from Supabase:', errorInfo.userFriendlyMessage, errorInfo)
        
        // If RLS violation or auth error, fall back to local storage
        if (errorInfo.isRLSViolation || errorInfo.isAuthError) {
          logger.warn('RLS/Auth error - loading from local storage only')
          loadFromLocalStorage()
          return
        }
        
        throw error
      }

      if (data && data.length > 0) {
        // Convert Supabase data to local format
        const progressMap: Record<string, StudyProgress> = {}
        data.forEach((item: any) => {
          progressMap[item.study_id] = {
            studyId: item.study_id,
            completedLessons: item.completed_lessons || [],
            currentLesson: item.current_lesson,
            startedAt: item.started_at,
            lastAccessedAt: item.last_accessed_at,
            totalTimeSpent: item.total_time_spent || 0,
            acceptedChallenges: item.accepted_challenges || []
          }
        })
        progressData.value = progressMap
        console.log('Progress loaded from Supabase:', progressMap)
      } else {
        // No progress in Supabase, load from local storage or initialize
        loadFromLocalStorage()
      }
    } catch (error) {
      const errorInfo = handleSupabaseError(error, 'load progress')
      console.error('Failed to load progress from Supabase:', errorInfo.userFriendlyMessage, errorInfo)
      // Fall back to local storage on any error (graceful degradation)
      loadFromLocalStorage()
    }
  }

  const loadFromLocalStorage = () => {
    ensureInitialized()
    const saved = localStorage.getItem('biblestem_study_progress')
    if (saved) {
      try {
        progressData.value = JSON.parse(saved)
        logger.debug('Progress loaded from localStorage')
      } catch (error) {
        logger.error('Error loading study progress from localStorage:', error)
        progressData.value = {}
      }
    } else {
      logger.debug('No saved progress found, starting with empty progress')
      progressData.value = {}
    }
  }

  const loadFromStorage = async () => {
    // Prevent duplicate initialization
    if (isInitialized.value || isInitializing.value) {
      return
    }
    
    isInitializing.value = true
    
    try {
      // Try to load from Supabase first if available
      await loadProgressFromSupabase()
      isInitialized.value = true
    } catch (error) {
      console.error('Failed to load progress:', error)
      // Fallback to local storage only
      loadFromLocalStorage()
      isInitialized.value = true
    } finally {
      isInitializing.value = false
    }
  }

  // Premium Features
  const canAccessLesson = (
    studyId: string,
    lessonIndex: number,
    userIsPremium: boolean,
    study: any,
  ): boolean => {
    // Premium studies require premium access
    if (study.category === 'premium' && !userIsPremium) {
      return false
    }

    // First lesson is always accessible
    if (lessonIndex === 0) return true

    // Sequential access - previous lesson must be completed
    const progress = progressData.value[studyId]
    if (!progress) return false

    const previousLessonId = study.lessons[lessonIndex - 1].id
    return progress.completedLessons.includes(previousLessonId)
  }

  const getPremiumFeatures = () => {
    return [
      'Video/animation explainers',
      'Verse-by-verse breakdowns',
      'Advanced quizzes with leaderboards',
      'Personal notes and journaling',
      'Downloadable study guides',
      'Interactive diagrams and timelines',
      '3D visualizations',
      'Audio content and meditations',
      'Priority customer support',
      'Offline study access',
    ]
  }

  const resetStudyProgress = async (studyId: string) => {
    // Reset progress to initial state (cleared but study marked as started)
    progressData.value[studyId] = {
      studyId,
      completedLessons: [],
      currentLesson: undefined,
      startedAt: new Date().toISOString(),
      lastAccessedAt: new Date().toISOString(),
      totalTimeSpent: 0,
      acceptedChallenges: [],
    }
    
    saveToStorage()
    
                // Try to sync to Supabase immediately, queue if it fails
            saveProgressToSupabase(studyId).catch((error) => {
              console.error('Failed to sync reset progress to Supabase:', error)
              // Queue for later sync
              const syncQueue = getSyncQueue()
              syncQueue.queueOperation('progress_reset', { studyId })
            })
  }

  return {
    progressData,
    getStudyProgress,
    isLessonCompleted,
    completeLesson,
    incompleteLesson,
    startStudy,
    getStudyCompletionPercentage,
    getAllStudyProgress,
    getTotalStudiesCompleted,
    getTotalTimeSpent,
    canAccessLesson,
    getPremiumFeatures,
    resetStudyProgress,
    loadFromStorage,
    isChallengeAccepted,
    acceptChallenge,
  }
})
