import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useAuthStore } from './auth'
import { getSupabase, isSupabaseAvailable } from '../lib/supabase'

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

  // Ensure progressData is always initialized
  const ensureInitialized = () => {
    if (!progressData.value || typeof progressData.value !== 'object') {
      progressData.value = {}
    }
  }

  // Initialize with some demo data including completed studies
  const initializeDemoData = () => {
    if (Object.keys(progressData.value).length === 0) {
      progressData.value = {
        // Completed Studies
        'psalm-23': {
          studyId: 'psalm-23',
          completedLessons: ['p23-1', 'p23-2', 'p23-3', 'p23-4'], // All 4 lessons completed
          currentLesson: 'p23-4',
          startedAt: '2024-01-10',
          lastAccessedAt: new Date().toISOString(),
          totalTimeSpent: 20,
          acceptedChallenges: ['p23-1', 'p23-2', 'p23-3', 'p23-4'],
        },
        'lords-prayer': {
          studyId: 'lords-prayer',
          completedLessons: ['lp-1', 'lp-2', 'lp-3', 'lp-4', 'lp-5', 'lp-6'], // All 6 lessons completed
          currentLesson: 'lp-6',
          startedAt: '2024-01-05',
          lastAccessedAt: new Date().toISOString(),
          totalTimeSpent: 30,
          acceptedChallenges: ['lp-1', 'lp-2', 'lp-3', 'lp-4', 'lp-5', 'lp-6'],
        },
        'faith-over-fear': {
          studyId: 'faith-over-fear',
          completedLessons: ['fof-1', 'fof-2', 'fof-3', 'fof-4', 'fof-5'], // All 5 lessons completed
          currentLesson: 'fof-5',
          startedAt: '2024-01-01',
          lastAccessedAt: new Date().toISOString(),
          totalTimeSpent: 25,
          acceptedChallenges: ['fof-1', 'fof-2', 'fof-3', 'fof-4', 'fof-5'],
        },

        // In Progress Studies
        'life-of-jesus': {
          studyId: 'life-of-jesus',
          completedLessons: ['loj-1', 'loj-2', 'loj-3'], // 3 out of 5 completed
          currentLesson: 'loj-4',
          startedAt: '2024-01-15',
          lastAccessedAt: new Date().toISOString(),
          totalTimeSpent: 15,
          acceptedChallenges: ['loj-1', 'loj-2', 'loj-3'],
        },
        'how-to-study-bible': {
          studyId: 'how-to-study-bible',
          completedLessons: ['htsb-1', 'htsb-2'], // 2 out of 6 completed
          currentLesson: 'htsb-3',
          startedAt: '2024-01-20',
          lastAccessedAt: new Date().toISOString(),
          totalTimeSpent: 12,
          acceptedChallenges: ['htsb-1', 'htsb-2'],
        },
        'fruit-of-spirit': {
          studyId: 'fruit-of-spirit',
          completedLessons: ['fos-1'], // Just started
          currentLesson: 'fos-2',
          startedAt: '2024-01-25',
          lastAccessedAt: new Date().toISOString(),
          totalTimeSpent: 5,
          acceptedChallenges: ['fos-1'],
        },

        // Started but minimal progress
        'armor-of-god': {
          studyId: 'armor-of-god',
          completedLessons: ['aog-1'], // Just first lesson
          currentLesson: 'aog-2',
          startedAt: '2024-01-28',
          lastAccessedAt: new Date().toISOString(),
          totalTimeSpent: 5,
          acceptedChallenges: ['aog-1'],
        },
      }
      saveToStorage()
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
      console.error('Failed to sync progress to Supabase:', error),
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
      console.error('Failed to sync progress to Supabase:', error),
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
      console.error('Failed to sync progress to Supabase:', error),
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
      console.error('Failed to sync progress to Supabase:', error),
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
    console.log('Firebase sync disabled - using local storage only')
  }

  const saveProgressToSupabase = async (studyId: string) => {
    const useSupabase = isSupabaseAvailable()
    const authStore = useAuthStore()
    
    if (!useSupabase || !authStore.user) {
      console.log('Supabase not available or user not authenticated - using local storage only')
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

      if (error) throw error
      console.log('Progress saved to Supabase:', studyId)
    } catch (error) {
      console.error('Failed to save progress to Supabase:', error)
    }
  }

  const loadProgressFromSupabase = async () => {
    const useSupabase = isSupabaseAvailable()
    const authStore = useAuthStore()
    
    if (!useSupabase || !authStore.user) {
      console.log('Supabase not available or user not authenticated - loading from local storage')
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

      if (error) throw error

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
      console.error('Failed to load progress from Supabase:', error)
      loadFromLocalStorage()
    }
  }

  const loadFromLocalStorage = () => {
    ensureInitialized()
    const saved = localStorage.getItem('biblestem_study_progress')
    if (saved) {
      try {
        progressData.value = JSON.parse(saved)
        console.log('Progress loaded from localStorage')
      } catch (error) {
        console.error('Error loading study progress from localStorage:', error)
        initializeDemoData()
      }
    } else {
      console.log('No saved progress found, initializing demo data')
      initializeDemoData()
    }
  }

  const loadFromStorage = async () => {
    await loadProgressFromSupabase()
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

  const resetStudyProgress = (studyId: string) => {
    delete progressData.value[studyId]
    saveToStorage()
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
    initializeDemoData,
  }
})
