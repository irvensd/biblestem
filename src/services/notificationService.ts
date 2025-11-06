/**
 * Notification Service
 * Handles browser notifications for study reminders, daily devotions, and updates
 */

import { logger } from '../utils/logger'

export interface NotificationPreferences {
  enabled: boolean
  dailyReminder: boolean
  dailyReminderTime: string // HH:MM format (e.g., "09:00")
  studyReminders: boolean
  studyReminderDays: number // Days without studying before reminder (default: 3)
  progressUpdates: boolean
  appUpdates: boolean
}

const DEFAULT_PREFERENCES: NotificationPreferences = {
  enabled: true,
  dailyReminder: true,
  dailyReminderTime: '09:00',
  studyReminders: true,
  studyReminderDays: 3,
  progressUpdates: true,
  appUpdates: true,
}

class NotificationService {
  private preferences: NotificationPreferences = { ...DEFAULT_PREFERENCES }
  private permission: NotificationPermission = 'default'
  private registration: ServiceWorkerRegistration | null = null
  private dailyReminderInterval: ReturnType<typeof setInterval> | null = null
  private studyReminderCheckInterval: ReturnType<typeof setInterval> | null = null

  constructor() {
    this.loadPreferences()
    this.checkPermission()
    this.initializeServiceWorker()
  }

  /**
   * Check current notification permission
   */
  private checkPermission(): void {
    if ('Notification' in window) {
      this.permission = Notification.permission
    }
  }

  /**
   * Initialize service worker for background notifications
   */
  private async initializeServiceWorker(): Promise<void> {
    if ('serviceWorker' in navigator) {
      try {
        this.registration = await navigator.serviceWorker.ready
        logger.debug('Service worker ready for notifications')
      } catch (error) {
        logger.warn('Service worker not available for notifications:', error)
      }
    }
  }

  /**
   * Load notification preferences from localStorage
   */
  private loadPreferences(): void {
    try {
      const saved = localStorage.getItem('biblestem_notification_preferences')
      if (saved) {
        const parsed = JSON.parse(saved)
        this.preferences = { ...DEFAULT_PREFERENCES, ...parsed }
      }
    } catch (error) {
      logger.error('Error loading notification preferences:', error)
      this.preferences = { ...DEFAULT_PREFERENCES }
    }
  }

  /**
   * Save notification preferences to localStorage
   */
  private savePreferences(): void {
    try {
      localStorage.setItem('biblestem_notification_preferences', JSON.stringify(this.preferences))
    } catch (error) {
      logger.error('Error saving notification preferences:', error)
    }
  }

  /**
   * Request notification permission from user
   */
  async requestPermission(): Promise<boolean> {
    if (!('Notification' in window)) {
      logger.warn('Notifications not supported in this browser')
      return false
    }

    if (this.permission === 'granted') {
      return true
    }

    if (this.permission === 'denied') {
      logger.warn('Notification permission denied by user')
      return false
    }

    try {
      const permission = await Notification.requestPermission()
      this.permission = permission
      return permission === 'granted'
    } catch (error) {
      logger.error('Error requesting notification permission:', error)
      return false
    }
  }

  /**
   * Check if notifications are enabled and permission is granted
   */
  isEnabled(): boolean {
    return this.preferences.enabled && this.permission === 'granted'
  }

  /**
   * Get current notification preferences
   */
  getPreferences(): NotificationPreferences {
    return { ...this.preferences }
  }

  /**
   * Update notification preferences
   */
  updatePreferences(updates: Partial<NotificationPreferences>): void {
    this.preferences = { ...this.preferences, ...updates }
    this.savePreferences()

    // Restart scheduled notifications if enabled
    if (this.preferences.enabled && this.permission === 'granted') {
      this.scheduleNotifications()
    } else {
      this.cancelNotifications()
    }
  }

  /**
   * Enable or disable notifications
   */
  async setEnabled(enabled: boolean): Promise<boolean> {
    if (enabled && this.permission !== 'granted') {
      const granted = await this.requestPermission()
      if (!granted) {
        return false
      }
    }

    this.updatePreferences({ enabled })
    return true
  }

  /**
   * Show a notification
   */
  async showNotification(
    title: string,
    options: NotificationOptions = {}
  ): Promise<Notification | null> {
    if (!this.isEnabled()) {
      logger.debug('Notifications disabled or permission not granted')
      return null
    }

    const defaultOptions: NotificationOptions = {
      icon: '/icons/icon-192x192.png',
      badge: '/icons/icon-72x72.png',
      tag: 'biblestem-notification',
      requireInteraction: false,
      ...options,
    }

    try {
      if (this.registration) {
        // Use service worker for PWA notifications
        await this.registration.showNotification(title, defaultOptions)
        return null // Service worker notifications don't return Notification object
      } else {
        // Fallback to regular browser notifications
        return new Notification(title, defaultOptions)
      }
    } catch (error) {
      logger.error('Error showing notification:', error)
      return null
    }
  }

  /**
   * Schedule daily reminder notification
   */
  private scheduleDailyReminder(): void {
    this.cancelDailyReminder()

    if (!this.preferences.dailyReminder || !this.isEnabled()) {
      return
    }

    const [hours, minutes] = this.preferences.dailyReminderTime.split(':').map(Number)
    const now = new Date()
    const reminderTime = new Date()
    reminderTime.setHours(hours, minutes, 0, 0)

    // If reminder time has passed today, schedule for tomorrow
    if (reminderTime < now) {
      reminderTime.setDate(reminderTime.getDate() + 1)
    }

    const msUntilReminder = reminderTime.getTime() - now.getTime()

    this.dailyReminderInterval = setTimeout(() => {
      this.showNotification('Daily Bible Study Reminder', {
        body: 'Time for your daily time in God\'s Word! Open BibleStem to continue your journey.',
        tag: 'daily-reminder',
        requireInteraction: false,
      })

      // Schedule next day's reminder
      this.scheduleDailyReminder()
    }, msUntilReminder)

    logger.debug(`Daily reminder scheduled for ${reminderTime.toLocaleString()}`)
  }

  /**
   * Cancel daily reminder
   */
  private cancelDailyReminder(): void {
    if (this.dailyReminderInterval) {
      clearTimeout(this.dailyReminderInterval)
      this.dailyReminderInterval = null
    }
  }

  /**
   * Check if user needs a study reminder (hasn't studied in X days)
   */
  private async checkStudyReminder(): Promise<void> {
    if (!this.preferences.studyReminders || !this.isEnabled()) {
      return
    }

    try {
      // Load progress from localStorage
      const progressData = localStorage.getItem('biblestem_study_progress')
      if (!progressData) {
        // No progress at all - show welcome reminder
        this.showNotification('Start Your Bible Study Journey', {
          body: 'Welcome to BibleStem! Begin your first study today.',
          tag: 'study-reminder',
        })
        return
      }

      const progress = JSON.parse(progressData)
      const now = new Date()
      let lastStudyDate: Date | null = null

      // Find most recent study session
      for (const studyId in progress) {
        const studyProgress = progress[studyId]
        if (studyProgress.lastAccessedAt) {
          const date = new Date(studyProgress.lastAccessedAt)
          if (!lastStudyDate || date > lastStudyDate) {
            lastStudyDate = date
          }
        }
      }

      if (!lastStudyDate) {
        // Never studied - show welcome reminder
        this.showNotification('Start Your Bible Study Journey', {
          body: 'Welcome to BibleStem! Begin your first study today.',
          tag: 'study-reminder',
        })
        return
      }

      const daysSinceLastStudy = Math.floor(
        (now.getTime() - lastStudyDate.getTime()) / (1000 * 60 * 60 * 24)
      )

      if (daysSinceLastStudy >= this.preferences.studyReminderDays) {
        this.showNotification('Continue Your Bible Study', {
          body: `It's been ${daysSinceLastStudy} days since your last study. Continue growing in God's Word!`,
          tag: 'study-reminder',
        })
      }
    } catch (error) {
      logger.error('Error checking study reminder:', error)
    }
  }

  /**
   * Schedule study reminder checks (runs once per day)
   */
  private scheduleStudyReminderCheck(): void {
    this.cancelStudyReminderCheck()

    if (!this.preferences.studyReminders || !this.isEnabled()) {
      return
    }

    // Check immediately
    this.checkStudyReminder()

    // Then check once per day (every 24 hours)
    this.studyReminderCheckInterval = setInterval(() => {
      this.checkStudyReminder()
    }, 24 * 60 * 60 * 1000) // 24 hours
  }

  /**
   * Cancel study reminder checks
   */
  private cancelStudyReminderCheck(): void {
    if (this.studyReminderCheckInterval) {
      clearInterval(this.studyReminderCheckInterval)
      this.studyReminderCheckInterval = null
    }
  }

  /**
   * Schedule all notifications
   */
  scheduleNotifications(): void {
    if (!this.isEnabled()) {
      this.cancelNotifications()
      return
    }

    this.scheduleDailyReminder()
    this.scheduleStudyReminderCheck()
  }

  /**
   * Cancel all scheduled notifications
   */
  cancelNotifications(): void {
    this.cancelDailyReminder()
    this.cancelStudyReminderCheck()
  }

  /**
   * Show progress update notification (when study is completed)
   */
  async showProgressUpdate(studyTitle: string, isCompleted: boolean): Promise<void> {
    if (!this.preferences.progressUpdates || !this.isEnabled()) {
      return
    }

    if (isCompleted) {
      await this.showNotification('Study Completed! 🎉', {
        body: `Congratulations! You've completed "${studyTitle}". Great job!`,
        tag: 'progress-update',
      })
    }
  }

  /**
   * Show app update notification
   */
  async showAppUpdate(available: boolean): Promise<void> {
    if (!this.preferences.appUpdates || !this.isEnabled()) {
      return
    }

    if (available) {
      await this.showNotification('App Update Available', {
        body: 'A new version of BibleStem is available. Click to update.',
        tag: 'app-update',
        requireInteraction: true,
      })
    }
  }
}

// Export singleton instance
export const notificationService = new NotificationService()

