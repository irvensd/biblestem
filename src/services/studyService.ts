/**
 * Study Service
 * Handles all study-related API calls
 */

import { apiClient, handleApiError } from './api'
import { config } from '../config'
import type { Study, Lesson } from '../data/studies'

export interface GetStudiesParams {
  category?: 'free' | 'premium'
  difficulty?: 'beginner' | 'intermediate' | 'advanced'
  tags?: string[]
  search?: string
  limit?: number
  offset?: number
}

export interface GetStudyResponse {
  study: Study
  recommendations?: Study[]
}

class StudyService {
  /**
   * Check if service is available
   */
  isAvailable() {
    return !config.isMockMode && config.isBackendReady
  }

  /**
   * Get all studies
   */
  async getAllStudies(params?: GetStudiesParams): Promise<Study[]> {
    if (!this.isAvailable()) {
      throw new Error('Study service not available in mock mode')
    }

    try {
      return await apiClient.get<Study[]>('/studies', params as any)
    } catch (error) {
      throw handleApiError(error)
    }
  }

  /**
   * Get single study by ID
   */
  async getStudyById(studyId: string): Promise<GetStudyResponse> {
    if (!this.isAvailable()) {
      throw new Error('Study service not available in mock mode')
    }

    try {
      return await apiClient.get<GetStudyResponse>(`/studies/${studyId}`)
    } catch (error) {
      throw handleApiError(error)
    }
  }

  /**
   * Get lessons for a study
   */
  async getStudyLessons(studyId: string): Promise<Lesson[]> {
    if (!this.isAvailable()) {
      throw new Error('Study service not available in mock mode')
    }

    try {
      return await apiClient.get<Lesson[]>(`/studies/${studyId}/lessons`)
    } catch (error) {
      throw handleApiError(error)
    }
  }

  /**
   * Get single lesson
   */
  async getLesson(studyId: string, lessonId: string): Promise<Lesson> {
    if (!this.isAvailable()) {
      throw new Error('Study service not available in mock mode')
    }

    try {
      return await apiClient.get<Lesson>(`/studies/${studyId}/lessons/${lessonId}`)
    } catch (error) {
      throw handleApiError(error)
    }
  }

  /**
   * Search studies
   */
  async searchStudies(query: string, params?: GetStudiesParams): Promise<Study[]> {
    if (!this.isAvailable()) {
      throw new Error('Study service not available in mock mode')
    }

    try {
      return await apiClient.get<Study[]>('/studies/search', {
        query,
        ...params,
      } as any)
    } catch (error) {
      throw handleApiError(error)
    }
  }

  /**
   * Get recommended studies
   */
  async getRecommendedStudies(userId: string, limit: number = 5): Promise<Study[]> {
    if (!this.isAvailable()) {
      throw new Error('Study service not available in mock mode')
    }

    try {
      return await apiClient.get<Study[]>('/studies/recommended', {
        userId,
        limit,
      })
    } catch (error) {
      throw handleApiError(error)
    }
  }
}

export const studyService = new StudyService()

