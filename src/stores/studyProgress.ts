import { ref } from 'vue'
import { defineStore } from 'pinia'

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
  
  // Initialize with some demo data
  const initializeDemoData = () => {
    if (Object.keys(progressData.value).length === 0) {
      progressData.value = {
        'life-of-jesus': {
          studyId: 'life-of-jesus',
          completedLessons: ['loj-1', 'loj-2'],
          currentLesson: 'loj-3',
          startedAt: '2024-01-15',
          lastAccessedAt: new Date().toISOString(),
          totalTimeSpent: 15
        },
        'psalm-23': {
          studyId: 'psalm-23',
          completedLessons: ['p23-1'],
          currentLesson: 'p23-2',
          startedAt: '2024-01-20',
          lastAccessedAt: new Date().toISOString(),
          totalTimeSpent: 8
        },
        'fruit-of-spirit': {
          studyId: 'fruit-of-spirit',
          completedLessons: ['fos-1'],
          startedAt: '2024-01-25',
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

  const completeLesson = (studyId: string, lessonId: string, timeSpent: number = 0) => {
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
  }

  const startStudy = (studyId: string, lessonId?: string) => {
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

  const loadFromStorage = () => {
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
    loadFromStorage,
    initializeDemoData
  }
})
