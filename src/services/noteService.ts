/**
 * Note Service
 * Handles all note-related API calls
 */

import { apiClient, handleApiError } from './api'
import { config } from '../config'
import type { StudyNote } from '../stores/notes'

export interface CreateNoteRequest {
  studyId: string
  lessonId: string
  content: string
  scripture?: string
  tags: string[]
  type: 'general' | 'reflection' | 'question' | 'insight' | 'prayer'
}

export interface UpdateNoteRequest {
  content?: string
  tags?: string[]
  scripture?: string
}

class NoteService {
  /**
   * Check if service is available
   */
  isAvailable() {
    return !config.isMockMode && config.isBackendReady
  }

  /**
   * Create a new note
   */
  async createNote(note: CreateNoteRequest): Promise<StudyNote> {
    if (!this.isAvailable()) {
      throw new Error('Note service not available in mock mode')
    }

    try {
      return await apiClient.post<StudyNote>('/notes', note)
    } catch (error) {
      throw handleApiError(error)
    }
  }

  /**
   * Get all notes for a user
   */
  async getUserNotes(userId: string): Promise<StudyNote[]> {
    if (!this.isAvailable()) {
      throw new Error('Note service not available in mock mode')
    }

    try {
      return await apiClient.get<StudyNote[]>(`/users/${userId}/notes`)
    } catch (error) {
      throw handleApiError(error)
    }
  }

  /**
   * Get notes for a specific study
   */
  async getStudyNotes(studyId: string): Promise<StudyNote[]> {
    if (!this.isAvailable()) {
      throw new Error('Note service not available in mock mode')
    }

    try {
      return await apiClient.get<StudyNote[]>(`/studies/${studyId}/notes`)
    } catch (error) {
      throw handleApiError(error)
    }
  }

  /**
   * Get notes for a specific lesson
   */
  async getLessonNotes(studyId: string, lessonId: string): Promise<StudyNote[]> {
    if (!this.isAvailable()) {
      throw new Error('Note service not available in mock mode')
    }

    try {
      return await apiClient.get<StudyNote[]>(`/studies/${studyId}/lessons/${lessonId}/notes`)
    } catch (error) {
      throw handleApiError(error)
    }
  }

  /**
   * Update a note
   */
  async updateNote(noteId: string, updates: UpdateNoteRequest): Promise<StudyNote> {
    if (!this.isAvailable()) {
      throw new Error('Note service not available in mock mode')
    }

    try {
      return await apiClient.put<StudyNote>(`/notes/${noteId}`, updates)
    } catch (error) {
      throw handleApiError(error)
    }
  }

  /**
   * Delete a note
   */
  async deleteNote(noteId: string): Promise<void> {
    if (!this.isAvailable()) {
      throw new Error('Note service not available in mock mode')
    }

    try {
      return await apiClient.delete<void>(`/notes/${noteId}`)
    } catch (error) {
      throw handleApiError(error)
    }
  }

  /**
   * Search notes
   */
  async searchNotes(query: string, userId: string): Promise<StudyNote[]> {
    if (!this.isAvailable()) {
      throw new Error('Note service not available in mock mode')
    }

    try {
      return await apiClient.get<StudyNote[]>('/notes/search', { query, userId })
    } catch (error) {
      throw handleApiError(error)
    }
  }
}

export const noteService = new NoteService()

