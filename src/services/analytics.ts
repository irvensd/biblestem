/**
 * Analytics Service
 * Provides Google Analytics and custom analytics tracking
 */

import { config } from '../config'

declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'set' | 'js',
      targetId: string | 'event' | Date | Record<string, any>,
      config?: Record<string, any>
    ) => void
    dataLayer?: any[]
  }
}

interface AnalyticsEvent {
  action: string
  category: string
  label?: string
  value?: number
  [key: string]: any
}

class AnalyticsService {
  private isInitialized = false
  private measurementId: string | null = null

  /**
   * Initialize Google Analytics
   */
  init(measurementId?: string): void {
    if (this.isInitialized) {
      console.warn('Analytics is already initialized')
      return
    }

    if (!config.features.analytics) {
      console.info('Analytics is disabled. Skipping initialization.')
      return
    }

    const id = measurementId || config.services.googleAnalytics.measurementId

    if (!id) {
      console.warn('Google Analytics Measurement ID not provided')
      return
    }

    this.measurementId = id

    // Load Google Analytics script
    if (typeof window !== 'undefined') {
      // Create dataLayer
      if (!window.dataLayer) {
        window.dataLayer = []
      }
      window.gtag = function (
        command: 'config' | 'event' | 'set' | 'js',
        targetId: string | 'event' | Date | Record<string, any>,
        config?: Record<string, any>
      ) {
        if (command === 'js') {
          window.dataLayer!.push({ 'gtag.js': targetId })
        } else if (command === 'set' && typeof targetId === 'object') {
          window.dataLayer!.push({ event: 'set', ...targetId })
        } else {
          window.dataLayer!.push(arguments as any)
        }
      } as any

      // Initialize gtag
      if (window.gtag) {
        window.gtag('js', new Date())
        window.gtag('config', id, {
          page_path: window.location.pathname,
          send_page_view: true,
        })
      }

      // Load script
      const script = document.createElement('script')
      script.async = true
      script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`
      document.head.appendChild(script)

      this.isInitialized = true
      console.info('Google Analytics initialized')
    }
  }

  /**
   * Track page view
   */
  trackPageView(path: string, title?: string): void {
    if (!this.isInitialized || !window.gtag) return

    window.gtag('config', this.measurementId!, {
      page_path: path,
      page_title: title,
    })
  }

  /**
   * Track custom event
   */
  trackEvent(event: AnalyticsEvent): void {
    if (!this.isInitialized || !window.gtag) {
      // Fallback to console in development
      if (config.isDevelopment) {
        console.log('[Analytics Event]', event)
      }
      return
    }

    window.gtag('event', event.action, {
      event_category: event.category,
      event_label: event.label,
      value: event.value,
      ...event,
    })
  }

  /**
   * Track user signup
   */
  trackSignup(method: string = 'email'): void {
    this.trackEvent({
      action: 'sign_up',
      category: 'engagement',
      label: method,
    })
  }

  /**
   * Track user login
   */
  trackLogin(method: string = 'email'): void {
    this.trackEvent({
      action: 'login',
      category: 'engagement',
      label: method,
    })
  }

  /**
   * Track study started
   */
  trackStudyStarted(studyId: string, studyTitle: string): void {
    this.trackEvent({
      action: 'study_started',
      category: 'study',
      label: studyTitle,
      study_id: studyId,
    })
  }

  /**
   * Track lesson completed
   */
  trackLessonCompleted(studyId: string, lessonId: string, studyTitle: string): void {
    this.trackEvent({
      action: 'lesson_completed',
      category: 'study',
      label: studyTitle,
      study_id: studyId,
      lesson_id: lessonId,
    })
  }

  /**
   * Track study completed
   */
  trackStudyCompleted(studyId: string, studyTitle: string): void {
    this.trackEvent({
      action: 'study_completed',
      category: 'study',
      label: studyTitle,
      study_id: studyId,
    })
  }

  /**
   * Track search
   */
  trackSearch(query: string, resultsCount: number): void {
    this.trackEvent({
      action: 'search',
      category: 'engagement',
      label: query,
      value: resultsCount,
    })
  }

  /**
   * Track note created
   */
  trackNoteCreated(studyId: string): void {
    this.trackEvent({
      action: 'note_created',
      category: 'engagement',
      study_id: studyId,
    })
  }

  /**
   * Track donation
   */
  trackDonation(amount: number, currency: string = 'USD'): void {
    this.trackEvent({
      action: 'donation',
      category: 'monetization',
      value: amount,
      currency,
    })
  }

  /**
   * Set user properties
   */
  setUserProperties(userId: string, properties?: Record<string, any>): void {
    if (!this.isInitialized || !window.gtag) return

    window.gtag('set', { user_id: userId })
    if (properties) {
      window.gtag('set', properties)
    }
  }

  /**
   * Clear user properties
   */
  clearUserProperties(): void {
    if (!this.isInitialized || !window.gtag) return

    window.gtag('set', { user_id: undefined })
  }
}

// Singleton instance
export const analytics = new AnalyticsService()

/**
 * Vue composable for analytics
 */
export function useAnalytics() {
  return {
    trackPageView: (path: string, title?: string) => analytics.trackPageView(path, title),
    trackEvent: (event: AnalyticsEvent) => analytics.trackEvent(event),
    trackSignup: (method?: string) => analytics.trackSignup(method),
    trackLogin: (method?: string) => analytics.trackLogin(method),
    trackStudyStarted: (studyId: string, studyTitle: string) =>
      analytics.trackStudyStarted(studyId, studyTitle),
    trackLessonCompleted: (studyId: string, lessonId: string, studyTitle: string) =>
      analytics.trackLessonCompleted(studyId, lessonId, studyTitle),
    trackStudyCompleted: (studyId: string, studyTitle: string) =>
      analytics.trackStudyCompleted(studyId, studyTitle),
    trackSearch: (query: string, resultsCount: number) => analytics.trackSearch(query, resultsCount),
    trackNoteCreated: (studyId: string) => analytics.trackNoteCreated(studyId),
    trackDonation: (amount: number, currency?: string) => analytics.trackDonation(amount, currency),
    setUserProperties: (userId: string, properties?: Record<string, any>) =>
      analytics.setUserProperties(userId, properties),
    clearUserProperties: () => analytics.clearUserProperties(),
  }
}

