import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useAuthStore } from './auth'
import { getSupabase, isSupabaseAvailable, handleSupabaseError, requiresReAuth } from '../lib/supabase'
import { getSyncQueue } from '../composables/useSupabaseSync'
import { getCurrentTimestamp, ensureValidTimestamp, syncWithServerTimestamp } from '../utils/timestamps'
import { validateAndSanitizeNote } from '../utils/dataValidation'
import { useOptimisticUpdates } from '../composables/useOptimisticUpdates'
import { securityService } from '../services/securityService'

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
  const isInitializing = ref(false)
  const { startUpdate, completeUpdate, failUpdate, getSyncState } = useOptimisticUpdates()

  // Generate unique note ID
  const generateNoteId = () => {
    return `note_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  }

  // Create a new note
  const createNote = async (noteData: Omit<StudyNote, 'id' | 'createdAt' | 'updatedAt'>) => {
    const authStore = useAuthStore()
    
    // Rate limiting check
    if (authStore.user) {
      try {
        await securityService.checkNotesRateLimit(authStore.user.id)
      } catch (error) {
        console.error('Rate limit exceeded:', error)
        throw new Error('Too many notes created. Please wait a moment.')
      }
    }

    const id = generateNoteId()
    const now = getCurrentTimestamp() // Use centralized timestamp

    // Sanitize content for XSS protection
    const sanitizedContent = securityService.sanitizeNote(noteData.content)

    const note: StudyNote = {
      id,
      ...noteData,
      content: sanitizedContent,
      createdAt: now,
      updatedAt: now,
    }

    // Validate before saving
    const { data: validatedNote, validation } = validateAndSanitizeNote(note)
    
    if (!validation.isValid) {
      console.error('Note validation failed:', validation.errors)
      throw new Error(`Invalid note data: ${validation.errors.join(', ')}`)
    }
    
    // Additional security check
    if (!securityService.isSafeInput(validatedNote.content)) {
      securityService.logSecurityEvent({
        type: 'xss_attempt',
        userId: authStore.user?.id,
        details: 'Potential XSS in note content'
      })
      throw new Error('Invalid content detected')
    }

    // Optimistic update - add to local state immediately
    notesData.value[id] = validatedNote
    saveToStorage()
    
    // Start sync status tracking
    startUpdate(`note_${id}`, 'note')
    
    // Try to sync to Supabase immediately, queue if it fails
    saveNoteToSupabase(validatedNote).catch((error) => {
      console.error('Failed to sync note to Supabase:', error)
      // Queue for later sync
      const syncQueue = getSyncQueue()
      syncQueue.queueOperation('note_create', validatedNote, validatedNote.createdAt)
      completeUpdate(`note_${id}`)
    })
    
    return validatedNote
  }

  // Update an existing note
  const updateNote = async (noteId: string, updates: Partial<Omit<StudyNote, 'id' | 'createdAt'>>) => {
    if (notesData.value[noteId]) {
      const now = getCurrentTimestamp() // Use centralized timestamp
      
      // Sanitize content if present
      if (updates.content) {
        updates.content = securityService.sanitizeNote(updates.content)
      }
      
      const updatedNote = {
        ...notesData.value[noteId],
        ...updates,
        updatedAt: now,
      }
      
      // Validate before saving
      const { data: validatedNote, validation } = validateAndSanitizeNote(updatedNote)
      
      if (!validation.isValid) {
        console.error('Note validation failed:', validation.errors)
        throw new Error(`Invalid note data: ${validation.errors.join(', ')}`)
      }
      
      // Optimistic update - update local state immediately
      notesData.value[noteId] = validatedNote
      saveToStorage()
      
      // Start sync status tracking
      startUpdate(`note_${noteId}`, 'note')
      
      // Try to sync to Supabase immediately, queue if it fails
      saveNoteToSupabase(validatedNote).catch((error) => {
        console.error('Failed to sync note update to Supabase:', error)
        // Queue for later sync
        const syncQueue = getSyncQueue()
        syncQueue.queueOperation('note_update', validatedNote, now)
        completeUpdate(`note_${noteId}`)
      })
      
      return validatedNote
    }
    return null
  }

  // Delete a note
  const deleteNote = async (noteId: string) => {
    if (notesData.value[noteId]) {
      const note = notesData.value[noteId]
      delete notesData.value[noteId]
      saveToStorage()
      
      // Try to sync deletion to Supabase immediately, queue if it fails
      deleteNoteFromSupabase(noteId).catch((error) => {
        console.error('Failed to sync note deletion to Supabase:', error)
        // Queue for later sync
        const syncQueue = getSyncQueue()
        syncQueue.queueOperation('note_delete', { noteId })
      })
      
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

  const loadFromStorage = async () => {
    // Prevent duplicate initialization
    if (isLoaded.value || isInitializing.value) {
      return
    }
    
    isInitializing.value = true
    
    try {
      const saved = localStorage.getItem('biblestem_notes')
      if (saved) {
        notesData.value = JSON.parse(saved)
      }
      
      // Also load from Supabase if available
      await loadNotesFromSupabase()
      isLoaded.value = true
    } catch (error) {
      console.error('Failed to load notes from storage:', error)
      isLoaded.value = true
    } finally {
      isInitializing.value = false
    }
  }

  // Supabase sync functions
  const saveNoteToSupabase = async (note: StudyNote) => {
    const useSupabase = isSupabaseAvailable()
    const authStore = useAuthStore()
    
    if (!useSupabase || !authStore.user) {
      console.log('Supabase not available or user not authenticated - using local storage only')
      return
    }

    // Check if offline - if so, queue immediately
    const isOnline = navigator.onLine
    if (!isOnline) {
      console.log('Offline - queuing note for sync when online')
      const syncQueue = getSyncQueue()
      syncQueue.queueOperation('note_update', note, note.updatedAt || note.createdAt || new Date().toISOString())
      return
    }

    const supabase = getSupabase()
    if (!supabase) {
      // Queue if Supabase client not available
      console.log('Supabase client not available - queuing note for sync')
      const syncQueue = getSyncQueue()
      syncQueue.queueOperation('note_update', note, note.updatedAt || note.createdAt || new Date().toISOString())
      return
    }

    try {
      const { error } = await supabase
        .from('notes')
        .upsert({
          id: note.id,
          user_id: authStore.user.id,
          study_id: note.studyId,
          lesson_id: note.lessonId,
          content: note.content,
          scripture: note.scripture || null,
          tags: note.tags,
          type: note.type,
          is_private: note.isPrivate,
          created_at: note.createdAt,
          updated_at: note.updatedAt,
        }, {
          onConflict: 'id'
        })

      if (error) {
        const errorInfo = handleSupabaseError(error, 'save this note')
        console.error('Failed to save note to Supabase:', errorInfo.userFriendlyMessage, errorInfo)
        
        // If RLS violation, auth error, or network error, queue for later sync
        if (errorInfo.isRLSViolation || errorInfo.isAuthError || errorInfo.isNetworkError) {
          console.warn('Queuing note for later sync')
          const syncQueue = getSyncQueue()
          syncQueue.queueOperation('note_update', note, note.updatedAt || note.createdAt || new Date().toISOString())
          return
        }
        
        throw error
      }
      console.log('Note saved to Supabase:', note.id)
    } catch (error) {
      const errorInfo = handleSupabaseError(error, 'save this note')
      console.error('Failed to save note to Supabase:', errorInfo.userFriendlyMessage, errorInfo)
      
      // If it's a network error or we're offline, queue for sync
      if (errorInfo.isNetworkError || !navigator.onLine) {
        console.warn('Network error - queuing note for later sync')
        const syncQueue = getSyncQueue()
        syncQueue.queueOperation('note_update', note, note.updatedAt || note.createdAt || new Date().toISOString())
        return
      }
      
      // Only throw if it's not an RLS/auth error (those are handled above)
      if (!errorInfo.isRLSViolation && !errorInfo.isAuthError) {
        throw error
      }
    }
  }

  const deleteNoteFromSupabase = async (noteId: string) => {
    const useSupabase = isSupabaseAvailable()
    const authStore = useAuthStore()
    
    if (!useSupabase || !authStore.user) {
      console.log('Supabase not available or user not authenticated - using local storage only')
      return
    }

    const supabase = getSupabase()
    if (!supabase) return

    try {
      const { error } = await supabase
        .from('notes')
        .delete()
        .eq('id', noteId)
        .eq('user_id', authStore.user.id) // Ensure user can only delete their own notes

      if (error) {
        const errorInfo = handleSupabaseError(error, 'delete this note')
        console.error('Failed to delete note from Supabase:', errorInfo.userFriendlyMessage, errorInfo)
        
        // If RLS violation, auth error, or network error, queue for later sync
        if (errorInfo.isRLSViolation || errorInfo.isAuthError || errorInfo.isNetworkError) {
          console.warn('Queuing note deletion for later sync')
          const syncQueue = getSyncQueue()
          syncQueue.queueOperation('note_delete', { noteId })
          return
        }
        
        throw error
      }
      console.log('Note deleted from Supabase:', noteId)
    } catch (error) {
      const errorInfo = handleSupabaseError(error, 'delete this note')
      console.error('Failed to delete note from Supabase:', errorInfo.userFriendlyMessage, errorInfo)
      // Only throw if it's not an RLS/auth error
      if (!errorInfo.isRLSViolation && !errorInfo.isAuthError) {
        throw error
      }
    }
  }

  const loadNotesFromSupabase = async () => {
    const useSupabase = isSupabaseAvailable()
    const authStore = useAuthStore()
    
    if (!useSupabase || !authStore.user) {
      console.log('Supabase not available or user not authenticated - loading from local storage only')
      return
    }

    const supabase = getSupabase()
    if (!supabase) return

    try {
      const { data, error } = await supabase
        .from('notes')
        .select('*')
        .eq('user_id', authStore.user.id)
        .order('updated_at', { ascending: false })

      if (error) {
        const errorInfo = handleSupabaseError(error, 'load notes')
        console.error('Failed to load notes from Supabase:', errorInfo.userFriendlyMessage, errorInfo)
        
        // If RLS violation or auth error, fall back to local storage only
        if (errorInfo.isRLSViolation || errorInfo.isAuthError) {
          console.warn('RLS/Auth error - using local storage only for notes')
          return
        }
        
        throw error
      }

      if (data && data.length > 0) {
        // Convert Supabase data to local format
        const notesMap: NotesData = {}
        data.forEach((item: any) => {
          notesMap[item.id] = {
            id: item.id,
            studyId: item.study_id,
            lessonId: item.lesson_id,
            content: item.content,
            scripture: item.scripture || undefined,
            tags: item.tags || [],
            type: item.type || 'general',
            isPrivate: item.is_private ?? true,
            createdAt: item.created_at,
            updatedAt: item.updated_at,
          }
        })
        
        // Merge with local storage (offline created notes and conflict resolution)
        const localNotes = localStorage.getItem('biblestem_notes')
        if (localNotes) {
          try {
            const localNotesData = JSON.parse(localNotes) as NotesData
            // Merge logic: Use most recent version for conflicts, keep offline notes
            Object.keys(localNotesData).forEach((noteId) => {
              const localNote = localNotesData[noteId]
              const supabaseNote = notesMap[noteId]
              
              if (!supabaseNote) {
                // Note only exists locally (offline created) - keep it
                notesMap[noteId] = localNote
              } else {
                // Note exists in both - use the one with the most recent updatedAt
                const localDate = new Date(localNote.updatedAt).getTime()
                const supabaseDate = new Date(supabaseNote.updatedAt).getTime()
                
                if (localDate > supabaseDate) {
                  // Local version is newer - keep it and sync to Supabase
                  notesMap[noteId] = localNote
                  saveNoteToSupabase(localNote).catch((error) =>
                    console.error('Failed to sync newer local note to Supabase:', error),
                  )
                }
                // Otherwise keep Supabase version (already in notesMap)
              }
            })
          } catch (error) {
            console.error('Error parsing local notes:', error)
          }
        }
        
        notesData.value = notesMap
        saveToStorage() // Save merged data back to localStorage
        console.log('Notes loaded from Supabase:', Object.keys(notesMap).length, 'notes')
      } else {
        // No notes in Supabase, keep local storage if it exists
        console.log('No notes found in Supabase, using local storage')
      }
    } catch (error) {
      const errorInfo = handleSupabaseError(error, 'load notes')
      console.error('Failed to load notes from Supabase:', errorInfo.userFriendlyMessage, errorInfo)
      // Keep using local storage on error (graceful degradation)
    }
  }

  // Clear all notes (for testing/reset)
  const clearAllNotes = async () => {
    // Delete all notes from Supabase
    const useSupabase = isSupabaseAvailable()
    const authStore = useAuthStore()
    
    if (useSupabase && authStore.user) {
      const supabase = getSupabase()
      if (supabase) {
        try {
          await supabase
            .from('notes')
            .delete()
            .eq('user_id', authStore.user.id)
          console.log('All notes deleted from Supabase')
        } catch (error) {
          console.error('Failed to delete notes from Supabase:', error)
        }
      }
    }
    
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
