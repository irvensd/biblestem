import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export interface StudyNote {
  id: string
  studyId: string
  lessonId: string
  content: string
  scripture?: string
  tags: string[]
  isPrivate: boolean
  createdAt: string
  updatedAt: string
  type: 'general' | 'reflection' | 'question' | 'insight' | 'prayer'
}

export interface NotesData {
  [noteId: string]: StudyNote
}

export const useNotesStore = defineStore('notes', () => {
  const notesData = ref<NotesData>({})
  const isLoaded = ref(false)

  // Generate unique note ID
  const generateNoteId = () => {
    return `note_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  }

  // Create a new note
  const createNote = (noteData: Omit<StudyNote, 'id' | 'createdAt' | 'updatedAt'>) => {
    const id = generateNoteId()
    const now = new Date().toISOString()

    const note: StudyNote = {
      id,
      ...noteData,
      createdAt: now,
      updatedAt: now,
    }

    notesData.value[id] = note
    saveToStorage()
    return note
  }

  // Update an existing note
  const updateNote = (noteId: string, updates: Partial<Omit<StudyNote, 'id' | 'createdAt'>>) => {
    if (notesData.value[noteId]) {
      notesData.value[noteId] = {
        ...notesData.value[noteId],
        ...updates,
        updatedAt: new Date().toISOString(),
      }
      saveToStorage()
      return notesData.value[noteId]
    }
    return null
  }

  // Delete a note
  const deleteNote = (noteId: string) => {
    if (notesData.value[noteId]) {
      delete notesData.value[noteId]
      saveToStorage()
      return true
    }
    return false
  }

  // Get notes for a specific study
  const getStudyNotes = (studyId: string) => {
    return Object.values(notesData.value)
      .filter((note) => note.studyId === studyId)
      .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
  }

  // Get notes for a specific lesson
  const getLessonNotes = (studyId: string, lessonId: string) => {
    return Object.values(notesData.value)
      .filter((note) => note.studyId === studyId && note.lessonId === lessonId)
      .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
  }

  // Get all notes
  const getAllNotes = computed(() =>
    Object.values(notesData.value).sort(
      (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
    ),
  )

  // Get notes by type
  const getNotesByType = (type: StudyNote['type']) => {
    return computed(() =>
      Object.values(notesData.value)
        .filter((note) => note.type === type)
        .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()),
    )
  }

  // Search notes
  const searchNotes = (query: string) => {
    if (!query.trim()) return []

    const searchTerm = query.toLowerCase()
    return Object.values(notesData.value)
      .filter(
        (note) =>
          note.content.toLowerCase().includes(searchTerm) ||
          note.scripture?.toLowerCase().includes(searchTerm) ||
          note.tags.some((tag) => tag.toLowerCase().includes(searchTerm)),
      )
      .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
  }

  // Get note by ID
  const getNoteById = (noteId: string) => {
    return computed(() => notesData.value[noteId] || null)
  }

  // Get statistics
  const getNotesStats = computed(() => {
    const notes = Object.values(notesData.value)
    return {
      total: notes.length,
      byType: {
        general: notes.filter((n) => n.type === 'general').length,
        reflection: notes.filter((n) => n.type === 'reflection').length,
        question: notes.filter((n) => n.type === 'question').length,
        insight: notes.filter((n) => n.type === 'insight').length,
        prayer: notes.filter((n) => n.type === 'prayer').length,
      },
      recentCount: notes.filter((n) => {
        const dayAgo = new Date()
        dayAgo.setDate(dayAgo.getDate() - 1)
        return new Date(n.createdAt) > dayAgo
      }).length,
    }
  })

  // Storage functions
  const saveToStorage = () => {
    try {
      localStorage.setItem('biblestem_notes', JSON.stringify(notesData.value))
    } catch (error) {
      console.error('Failed to save notes to storage:', error)
    }
  }

  const loadFromStorage = () => {
    try {
      const saved = localStorage.getItem('biblestem_notes')
      if (saved) {
        notesData.value = JSON.parse(saved)
      }
      isLoaded.value = true
    } catch (error) {
      console.error('Failed to load notes from storage:', error)
      isLoaded.value = true
    }
  }

  // Clear all notes (for testing/reset)
  const clearAllNotes = () => {
    notesData.value = {}
    saveToStorage()
  }

  // Export notes (for backup)
  const exportNotes = () => {
    return JSON.stringify(notesData.value, null, 2)
  }

  // Import notes (for restore)
  const importNotes = (notesJson: string) => {
    try {
      const imported = JSON.parse(notesJson)
      notesData.value = { ...notesData.value, ...imported }
      saveToStorage()
      return true
    } catch (error) {
      console.error('Failed to import notes:', error)
      return false
    }
  }

  return {
    // State
    notesData,
    isLoaded,

    // Actions
    createNote,
    updateNote,
    deleteNote,

    // Getters
    getStudyNotes,
    getLessonNotes,
    getAllNotes,
    getNotesByType,
    searchNotes,
    getNoteById,
    getNotesStats,

    // Storage
    loadFromStorage,
    saveToStorage,
    clearAllNotes,
    exportNotes,
    importNotes,
  }
})
