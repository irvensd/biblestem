import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useAuthStore } from './auth'
import { getSupabase, isSupabaseAvailable, handleSupabaseError, requiresReAuth } from '../lib/supabase'
import { getSyncQueue } from '../composables/useSupabaseSync'
import { logger } from '../utils/logger'
import { 
  calculateCompletionPercentage, 
  isStudyCompleted as checkStudyCompleted,
  getStudyCompletionStatus,
  validateCompletedLessons,
  getTotalStudiesCompleted as calcTotalStudiesCompleted
} from '../utils/progressCalculations'
import { getCurrentTimestamp, ensureValidTimestamp, syncWithServerTimestamp } from '../utils/timestamps'
import { validateAndSanitizeProgress } from '../utils/dataValidation'
import { useOptimisticUpdates } from '../composables/useOptimisticUpdates'
import { notificationService } from '../services/notificationService'
import { getAllStudies, getStudyById } from '../data/studies'

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
  const { startUpdate, completeUpdate, failUpdate, getSyncState } = useOptimisticUpdates()

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
    
    // Check if study is now completed and show notification
    const study = getStudyById(studyId)
    if (study && study.lessons.length > 0) {
      const isCompleted = checkStudyCompleted(progress.completedLessons, study.lessons.length)
      if (isCompleted) {
        // Show completion notification
        notificationService.showProgressUpdate(study.title, true).catch((error) =>
          logger.warn('Failed to show progress notification:', error)
        )
      }
    }
    
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

    // Use centralized calculation for consistency
    return calculateCompletionPercentage(progress.completedLessons, totalLessons)
  }

  // Check if study is completed (all lessons done)
  const isStudyCompleted = (studyId: string, totalLessons: number): boolean => {
    const progress = progressData.value[studyId]
    if (!progress) return false

    // Use centralized calculation for consistency
    return checkStudyCompleted(progress.completedLessons, totalLessons)
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

    const progress = progressData.value[studyId]
    if (!progress) return

    // Check if offline - if so, queue immediately
    const isOnline = navigator.onLine
    if (!isOnline) {
      logger.debug('Offline - queuing progress for sync when online')
      const syncQueue = getSyncQueue()
      syncQueue.queueOperation('progress_save', {
        studyId,
        completedLessons: progress.completedLessons,
        currentLesson: progress.currentLesson,
        startedAt: progress.startedAt,
        lastAccessedAt: progress.lastAccessedAt,
        totalTimeSpent: progress.totalTimeSpent,
        acceptedChallenges: progress.acceptedChallenges,
      }, progress.lastAccessedAt || new Date().toISOString())
      return
    }

    const supabase = getSupabase()
    if (!supabase) {
      // Queue if Supabase client not available
      logger.debug('Supabase client not available - queuing progress for sync')
      const syncQueue = getSyncQueue()
      syncQueue.queueOperation('progress_save', {
        studyId,
        completedLessons: progress.completedLessons,
        currentLesson: progress.currentLesson,
        startedAt: progress.startedAt,
        lastAccessedAt: progress.lastAccessedAt,
        totalTimeSpent: progress.totalTimeSpent,
        acceptedChallenges: progress.acceptedChallenges,
      }, progress.lastAccessedAt || new Date().toISOString())
      return
    }

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
          syncQueue.queueOperation('progress_save', {
            studyId,
            completedLessons: progress.completedLessons,
            currentLesson: progress.currentLesson,
            startedAt: progress.startedAt,
            lastAccessedAt: progress.lastAccessedAt,
            totalTimeSpent: progress.totalTimeSpent,
            acceptedChallenges: progress.acceptedChallenges,
          }, progress.lastAccessedAt || new Date().toISOString())
          return
        }
        
        throw error
      }
      logger.debug('Progress saved to Supabase:', studyId)
    } catch (error) {
      const errorInfo = handleSupabaseError(error, 'save progress')
      console.error('Failed to save progress to Supabase:', errorInfo.userFriendlyMessage, errorInfo)
      
      // If it's a network error or we're offline, queue for sync
      if (errorInfo.isNetworkError || !navigator.onLine) {
        logger.warn('Network error - queuing progress for later sync')
        const syncQueue = getSyncQueue()
        syncQueue.queueOperation('progress_save', {
          studyId,
          completedLessons: progress.completedLessons,
          currentLesson: progress.currentLesson,
          startedAt: progress.startedAt,
          lastAccessedAt: progress.lastAccessedAt,
          totalTimeSpent: progress.totalTimeSpent,
          acceptedChallenges: progress.acceptedChallenges,
        }, progress.lastAccessedAt || new Date().toISOString())
        return
      }
      
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
        // Load local data for merging
        loadFromLocalStorage()
        
        // Merge Supabase data with local data intelligently
        data.forEach((record: any) => {
          const studyId = record.study_id
          const remoteProgress = {
            studyId: record.study_id,
            completedLessons: record.completed_lessons || [],
            currentLesson: record.current_lesson,
            startedAt: record.started_at,
            lastAccessedAt: record.last_accessed_at,
            totalTimeSpent: record.total_time_spent || 0,
            acceptedChallenges: record.accepted_challenges || [],
          }
          
          // If local data exists, merge intelligently
          if (progressData.value[studyId]) {
            const localProgress = progressData.value[studyId]
            const localTime = new Date(localProgress.lastAccessedAt || 0).getTime()
            const remoteTime = new Date(remoteProgress.lastAccessedAt || 0).getTime()
            
            // Merge completed lessons from both sources
            const mergedCompletedLessons = [
              ...new Set([...remoteProgress.completedLessons, ...localProgress.completedLessons])
            ]
            const mergedChallenges = [
              ...new Set([...remoteProgress.acceptedChallenges, ...localProgress.acceptedChallenges])
            ]
            
            // Use the most recent metadata
            if (remoteTime > localTime) {
              progressData.value[studyId] = {
                ...remoteProgress,
                completedLessons: mergedCompletedLessons,
                acceptedChallenges: mergedChallenges,
                totalTimeSpent: Math.max(remoteProgress.totalTimeSpent, localProgress.totalTimeSpent),
              }
            } else {
              progressData.value[studyId] = {
                ...localProgress,
                completedLessons: mergedCompletedLessons,
                acceptedChallenges: mergedChallenges,
              }
            }
            
            logger.debug(`Merged progress for study ${studyId} - Local: ${localProgress.completedLessons.length}, Remote: ${remoteProgress.completedLessons.length}, Merged: ${mergedCompletedLessons.length}`)
          } else {
            // No local data - use remote
            progressData.value[studyId] = remoteProgress
          }
        })
        
        // Save merged data to localStorage
        saveToStorage()
        console.log('Progress loaded and merged from Supabase')
        
        // Set up real-time sync
        setupRealtimeSync()
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

  // Real-time sync subscription reference
  let realtimeChannel: any = null

  // Set up real-time sync for progress updates
  const setupRealtimeSync = () => {
    const useSupabase = isSupabaseAvailable()
    const authStore = useAuthStore()
    
    if (!useSupabase || !authStore.user) {
      logger.debug('Cannot setup realtime sync - not available or user not authenticated')
      return
    }

    const supabase = getSupabase()
    if (!supabase || realtimeChannel) {
      return // Already set up or client not available
    }

    try {
      // Subscribe to changes in study_progress table for this user
      realtimeChannel = supabase
        .channel('study_progress_changes')
        .on(
          'postgres_changes',
          {
            event: '*',
            schema: 'public',
            table: 'study_progress',
            filter: `user_id=eq.${authStore.user.id}`
          },
          (payload: any) => {
            logger.debug('Received real-time progress update:', payload)
            
            if (payload.eventType === 'INSERT' || payload.eventType === 'UPDATE') {
              const record = payload.new
              const studyId = record.study_id
              
              const remoteProgress = {
                studyId: record.study_id,
                completedLessons: record.completed_lessons || [],
                currentLesson: record.current_lesson,
                startedAt: record.started_at,
                lastAccessedAt: record.last_accessed_at,
                totalTimeSpent: record.total_time_spent || 0,
                acceptedChallenges: record.accepted_challenges || [],
              }
              
              // Merge with local data
              if (progressData.value[studyId]) {
                const localProgress = progressData.value[studyId]
                progressData.value[studyId] = {
                  ...remoteProgress,
                  completedLessons: [
                    ...new Set([...remoteProgress.completedLessons, ...localProgress.completedLessons])
                  ],
                  acceptedChallenges: [
                    ...new Set([...remoteProgress.acceptedChallenges, ...localProgress.acceptedChallenges])
                  ],
                }
              } else {
                progressData.value[studyId] = remoteProgress
              }
              
              saveToStorage()
              logger.debug('Progress synced from real-time update')
            } else if (payload.eventType === 'DELETE') {
              const studyId = payload.old.study_id
              if (progressData.value[studyId]) {
                delete progressData.value[studyId]
                saveToStorage()
                logger.debug('Progress deleted from real-time update')
              }
            }
          }
        )
        .subscribe()

      logger.debug('Real-time sync set up for study progress')
    } catch (error) {
      logger.error('Error setting up real-time sync:', error)
    }
  }

  // Clean up real-time subscription
  const cleanupRealtimeSync = () => {
    if (realtimeChannel) {
      const supabase = getSupabase()
      if (supabase) {
        supabase.removeChannel(realtimeChannel)
      }
      realtimeChannel = null
      logger.debug('Real-time sync cleaned up')
    }
  }

  return {
    progressData,
    getStudyProgress,
    isLessonCompleted,
    isStudyCompleted,
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
    cleanupRealtimeSync,
    getSyncState,
  }
})
