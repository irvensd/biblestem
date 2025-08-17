import { ref } from 'vue'
import { defineStore } from 'pinia'
import { supabase } from '@/lib/supabase'
import { useAuthStore } from './auth'

export interface StudyProgress {
  studyId: string
  completedLessons: string[]
  currentLesson?: string
  startedAt: string
  lastAccessedAt: string
  totalTimeSpent: number
}

export const useStudyProgressStore = defineStore('studyProgress', () => {
  const progressData = ref<Record<string, StudyProgress>>({})
  
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
          totalTimeSpent: 20
        },
        'lords-prayer': {
          studyId: 'lords-prayer',
          completedLessons: ['lp-1', 'lp-2', 'lp-3', 'lp-4', 'lp-5', 'lp-6'], // All 6 lessons completed
          currentLesson: 'lp-6',
          startedAt: '2024-01-05',
          lastAccessedAt: new Date().toISOString(),
          totalTimeSpent: 30
        },
        'faith-over-fear': {
          studyId: 'faith-over-fear',
          completedLessons: ['fof-1', 'fof-2', 'fof-3', 'fof-4', 'fof-5'], // All 5 lessons completed
          currentLesson: 'fof-5',
          startedAt: '2024-01-01',
          lastAccessedAt: new Date().toISOString(),
          totalTimeSpent: 25
        },

        // In Progress Studies
        'life-of-jesus': {
          studyId: 'life-of-jesus',
          completedLessons: ['loj-1', 'loj-2', 'loj-3'], // 3 out of 5 completed
          currentLesson: 'loj-4',
          startedAt: '2024-01-15',
          lastAccessedAt: new Date().toISOString(),
          totalTimeSpent: 15
        },
        'how-to-study-bible': {
          studyId: 'how-to-study-bible',
          completedLessons: ['htsb-1', 'htsb-2'], // 2 out of 6 completed
          currentLesson: 'htsb-3',
          startedAt: '2024-01-20',
          lastAccessedAt: new Date().toISOString(),
          totalTimeSpent: 12
        },
        'fruit-of-spirit': {
          studyId: 'fruit-of-spirit',
          completedLessons: ['fos-1'], // Just started
          currentLesson: 'fos-2',
          startedAt: '2024-01-25',
          lastAccessedAt: new Date().toISOString(),
          totalTimeSpent: 5
        },

        // Started but minimal progress
        'armor-of-god': {
          studyId: 'armor-of-god',
          completedLessons: ['aog-1'], // Just first lesson
          currentLesson: 'aog-2',
          startedAt: '2024-01-28',
          lastAccessedAt: new Date().toISOString(),
          totalTimeSpent: 5
        }
      }
      saveToStorage()
    }
  }

  const getStudyProgress = (studyId: string): StudyProgress | null => {
    return progressData.value[studyId] || null
  }

  const isLessonCompleted = (studyId: string, lessonId: string): boolean => {
    const progress = progressData.value[studyId]
    return progress ? progress.completedLessons.includes(lessonId) : false
  }

  const completeLesson = async (studyId: string, lessonId: string, timeSpent: number = 0) => {
    if (!progressData.value[studyId]) {
      progressData.value[studyId] = {
        studyId,
        completedLessons: [],
        startedAt: new Date().toISOString(),
        lastAccessedAt: new Date().toISOString(),
        totalTimeSpent: 0
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
    saveProgressToSupabase(studyId).catch(error =>
      console.error('Failed to sync progress to Supabase:', error)
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
        totalTimeSpent: 0
      }
    } else {
      progressData.value[studyId].lastAccessedAt = new Date().toISOString()
      if (lessonId) {
        progressData.value[studyId].currentLesson = lessonId
      }
    }

    saveToStorage()
    // Fire and forget Supabase sync - don't block UI
    saveProgressToSupabase(studyId).catch(error =>
      console.error('Failed to sync progress to Supabase:', error)
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
    return Object.values(progressData.value).filter(progress => 
      progress.completedLessons.length > 0
    ).length
  }

  const getTotalTimeSpent = (): number => {
    return Object.values(progressData.value).reduce((total, progress) => 
      total + progress.totalTimeSpent, 0
    )
  }

  const saveToStorage = () => {
    localStorage.setItem('biblestem_study_progress', JSON.stringify(progressData.value))
  }

  const syncWithSupabase = async () => {
    const authStore = useAuthStore()
    if (!authStore.isAuthenticated || authStore.config.useMockAuth) return

    try {
      // Fetch user's study progress from Supabase
      const { data, error } = await supabase
        .from('study_progress')
        .select('*')
        .eq('user_id', authStore.user!.id)

      if (error) throw error

      // Transform Supabase data to local format
      const supabaseProgress: Record<string, StudyProgress> = {}
      data?.forEach(item => {
        supabaseProgress[item.study_id] = {
          studyId: item.study_id,
          completedLessons: item.completed_lessons || [],
          currentLesson: item.current_lesson,
          startedAt: item.started_at,
          lastAccessedAt: item.last_accessed_at,
          totalTimeSpent: item.total_time_spent
        }
      })

      progressData.value = supabaseProgress
    } catch (error) {
      console.error('Error syncing study progress:', error)
    }
  }

  const saveProgressToSupabase = async (studyId: string) => {
    const authStore = useAuthStore()
    if (!authStore.isAuthenticated || authStore.config.useMockAuth) return

    const progress = progressData.value[studyId]
    if (!progress) return

    try {
      const { error } = await supabase
        .from('study_progress')
        .upsert({
          user_id: authStore.user!.id,
          study_id: studyId,
          completed_lessons: progress.completedLessons,
          current_lesson: progress.currentLesson,
          started_at: progress.startedAt,
          last_accessed_at: progress.lastAccessedAt,
          total_time_spent: progress.totalTimeSpent
        })

      if (error) throw error
    } catch (error) {
      console.error('Error saving progress to Supabase:', error)
    }
  }

  const loadFromStorage = () => {
    // Force demo data initialization for testing completed studies
    // In production, this would load from localStorage normally
    initializeDemoData()

    /* Normal localStorage loading:
    const saved = localStorage.getItem('biblestem_study_progress')
    if (saved) {
      try {
        progressData.value = JSON.parse(saved)
      } catch (error) {
        console.error('Error loading study progress:', error)
        initializeDemoData()
      }
    } else {
      initializeDemoData()
    }
    */
  }

  // Premium Features
  const canAccessLesson = (studyId: string, lessonIndex: number, userIsPremium: boolean, study: any): boolean => {
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
      'Offline study access'
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
    startStudy,
    getStudyCompletionPercentage,
    getAllStudyProgress,
    getTotalStudiesCompleted,
    getTotalTimeSpent,
    canAccessLesson,
    getPremiumFeatures,
    resetStudyProgress,
    loadFromStorage,
    initializeDemoData,
    syncWithSupabase,
    saveProgressToSupabase
  }
})
