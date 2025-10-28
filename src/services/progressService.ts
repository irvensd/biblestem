/**
 * Progress Service
 * Handles all progress tracking API calls
 */

import { apiClient, handleApiError } from './api'
import { config } from '../config'
import type { StudyProgress } from '../stores/studyProgress'

export interface UpdateProgressRequest {
  completedLessons: string[]
  currentLesson: string
  totalTimeSpent: number
  acceptedChallenges?: string[]
}

class ProgressService {
  /**
   * Check if service is available
   */
  isAvailable() {
    return !config.isMockMode && config.isBackendReady
  }

  /**
   * Get user's progress for all studies
   */
  async getUserProgress(userId: string): Promise<Record<string, StudyProgress>> {
    if (!this.isAvailable()) {
      throw new Error('Progress service not available in mock mode')
    }

    try {
      return await apiClient.get<Record<string, StudyProgress>>(`/users/${userId}/progress`)
    } catch (error) {
      throw handleApiError(error)
    }
  }

  /**
   * Get progress for a specific study
   */
  async getStudyProgress(userId: string, studyId: string): Promise<StudyProgress | null> {
    if (!this.isAvailable()) {
      throw new Error('Progress service not available in mock mode')
    }

    try {
      return await apiClient.get<StudyProgress | null>(`/users/${userId}/progress/${studyId}`)
    } catch (error) {
      throw handleApiError(error)
    }
  }

  /**
   * Update progress for a study
   */
  async updateProgress(userId: string, studyId: string, progress: UpdateProgressRequest): Promise<StudyProgress> {
    if (!this.isAvailable()) {
      throw new Error('Progress service not available in mock mode')
    }

    try {
      return await apiClient.put<StudyProgress>(`/users/${userId}/progress/${studyId}`, progress)
    } catch (error) {
      throw handleApiError(error)
    }
  }

  /**
   * Mark lesson as completed
   */
  async completeLesson(userId: string, studyId: string, lessonId: string): Promise<StudyProgress> {
    if (!this.isAvailable()) {
      throw new Error('Progress service not available in mock mode')
    }

    try {
      return await apiClient.post<StudyProgress>(`/users/${userId}/progress/${studyId}/lessons/${lessonId}/complete`)
    } catch (error) {
      throw handleApiError(error)
    }
  }

  /**
   * Reset progress for a study
   */
  async resetProgress(userId: string, studyId: string): Promise<void> {
    if (!this.isAvailable()) {
      throw new Error('Progress service not available in mock mode')
    }

    try {
      return await apiClient.delete<void>(`/users/${userId}/progress/${studyId}`)
    } catch (error) {
      throw handleApiError(error)
    }
  }

  /**
   * Get user statistics
   */
  async getUserStats(userId: string): Promise<{
    totalCompleted: number
    totalTimeSpent: number
    inProgressCount: number
    totalStudies: number
  }> {
    if (!this.isAvailable()) {
      throw new Error('Progress service not available in mock mode')
    }

    try {
      return await apiClient.get(`/users/${userId}/stats`)
    } catch (error) {
      throw handleApiError(error)
    }
  }
}

export const progressService = new ProgressService()

