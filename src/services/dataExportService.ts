/**
 * Data Export Service
 * Handles exporting user data for GDPR compliance and user requests
 */

import { useAuthStore } from '../stores/auth'
import { useStudyProgressStore } from '../stores/studyProgress'
import { useNotesStore, type StudyNote } from '../stores/notes'
import { getSupabase, isSupabaseAvailable } from '../lib/supabase'

export interface ExportedData {
  exportDate: string
  user: {
    id: string
    name: string
    email: string
    avatar?: string
    bio?: string
    joinDate: string
    hasSupported?: boolean
  }
  studyProgress: Array<{
    studyId: string
    completedLessons: string[]
    currentLesson?: string
    startedAt: string
    lastAccessedAt: string
    totalTimeSpent: number
    acceptedChallenges: string[]
  }>
  notes: Array<{
    id: string
    studyId: string
    lessonId: string
    content: string
    scripture?: string
    tags: string[]
    type: string
    createdAt: string
    updatedAt: string
  }>
  settings: {
    fontSize?: number
    showOriginalLanguages?: boolean
    autoSaveNotes?: boolean
  }
}

/**
 * Export all user data
 */
export async function exportUserData(): Promise<ExportedData> {
  const authStore = useAuthStore()
  const progressStore = useStudyProgressStore()
  const notesStore = useNotesStore()

  if (!authStore.user) {
    throw new Error('User must be logged in to export data')
  }

  // Load all data if not already loaded
  if (!progressStore.isInitialized) {
    await progressStore.loadFromStorage()
  }

  if (!notesStore.isLoaded) {
    await notesStore.loadFromStorage()
  }

  // Get study progress
  const allProgress = progressStore.getAllStudyProgress()
  const studyProgress = Object.values(allProgress).map((progress) => ({
    studyId: progress.studyId,
    completedLessons: progress.completedLessons,
    currentLesson: progress.currentLesson,
    startedAt: progress.startedAt,
    lastAccessedAt: progress.lastAccessedAt,
    totalTimeSpent: progress.totalTimeSpent,
    acceptedChallenges: progress.acceptedChallenges || [],
  }))

  // Get notes (getAllNotes is a computed that returns StudyNote[])
  // Access computed value directly - Pinia unwraps computed refs
  const notes = (notesStore.getAllNotes as any).value.map((note: StudyNote) => ({
    id: note.id,
    studyId: note.studyId,
    lessonId: note.lessonId,
    content: note.content,
    scripture: note.scripture,
    tags: note.tags,
    type: note.type,
    createdAt: note.createdAt,
    updatedAt: note.updatedAt,
  }))

  // Get settings
  const settingsStr = localStorage.getItem('biblestem_settings')
  let settings = {}
  if (settingsStr) {
    try {
      settings = JSON.parse(settingsStr)
    } catch (error) {
      console.error('Error parsing settings:', error)
    }
  }

  // Compile export data
  const exportedData: ExportedData = {
    exportDate: new Date().toISOString(),
    user: {
      id: authStore.user.id,
      name: authStore.user.name,
      email: authStore.user.email,
      avatar: authStore.user.avatar,
      bio: authStore.user.bio,
      joinDate: authStore.user.joinDate,
      hasSupported: authStore.user.hasSupported,
    },
    studyProgress,
    notes,
    settings,
  }

  return exportedData
}

/**
 * Download user data as JSON file
 */
export async function downloadUserData(): Promise<void> {
  try {
    const data = await exportUserData()
    const json = JSON.stringify(data, null, 2)
    const blob = new Blob([json], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `biblestem-data-export-${new Date().toISOString().split('T')[0]}.json`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  } catch (error) {
    console.error('Error exporting data:', error)
    throw error
  }
}

