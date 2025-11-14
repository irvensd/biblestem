/**
 * Monitoring Service
 * Initializes and manages Sentry error tracking
 */

import * as Sentry from '@sentry/vue'
import { config } from '../config'
import type { App } from 'vue'
import type { Router } from 'vue-router'

let isInitialized = false

/**
 * Initialize Sentry error tracking
 */
export function initSentry(app: App, router: Router): void {
  if (isInitialized) {
    console.warn('Sentry is already initialized')
    return
  }

  if (!config.services.sentry.isConfigured) {
    console.info('Sentry is not configured. Skipping initialization.')
    return
  }

  try {
    Sentry.init({
      app,
      dsn: config.services.sentry.dsn,
      environment: config.services.sentry.environment,
      integrations: [
        Sentry.browserTracingIntegration({ router }),
        Sentry.replayIntegration({
          maskAllText: false,
          blockAllMedia: false,
        }),
      ],
      // Performance Monitoring
      tracesSampleRate: config.isProduction ? 0.1 : 1.0, // 10% in production, 100% in dev
      // Session Replay
      replaysSessionSampleRate: config.isProduction ? 0.1 : 1.0,
      replaysOnErrorSampleRate: 1.0, // Always record replays on errors
      // Release tracking
      release: import.meta.env.VITE_APP_VERSION || 'unknown',
      // Filter out sensitive data
      beforeSend(event, hint) {
        // Don't send errors in development unless explicitly testing
        if (config.isDevelopment && !import.meta.env.VITE_SENTRY_DEBUG) {
          return null
        }

        // Filter out known non-critical errors
        if (event.exception) {
          const error = hint.originalException
          if (error instanceof Error) {
            // Ignore network errors (user offline, etc.)
            if (
              error.message.includes('Failed to fetch') ||
              error.message.includes('NetworkError') ||
              error.message.includes('Network request failed')
            ) {
              return null
            }
          }
        }

        return event
      },
      // Set user context
      initialScope: {
        tags: {
          component: 'biblestem',
        },
      },
    })

    isInitialized = true
    console.info('Sentry initialized successfully')
  } catch (error) {
    console.error('Failed to initialize Sentry:', error)
  }
}

/**
 * Set user context for Sentry
 */
export function setSentryUser(userId: string, email?: string, username?: string): void {
  if (!isInitialized) return

  Sentry.setUser({
    id: userId,
    email,
    username,
  })
}

/**
 * Clear user context
 */
export function clearSentryUser(): void {
  if (!isInitialized) return

  Sentry.setUser(null)
}

/**
 * Capture an exception
 */
export function captureException(error: Error, context?: Record<string, any>): void {
  if (!isInitialized) {
    console.error('Sentry not initialized:', error, context)
    return
  }

  Sentry.captureException(error, {
    extra: context,
  })
}

/**
 * Capture a message
 */
export function captureMessage(message: string, level: 'info' | 'warning' | 'error' = 'info'): void {
  if (!isInitialized) {
    console.log(`[${level.toUpperCase()}] ${message}`)
    return
  }

  Sentry.captureMessage(message, {
    level,
  })
}

/**
 * Add breadcrumb for debugging
 */
export function addBreadcrumb(message: string, category: string, data?: Record<string, any>): void {
  if (!isInitialized) return

  Sentry.addBreadcrumb({
    message,
    category,
    data,
    level: 'info',
  })
}

/**
 * Set additional context
 */
export function setContext(key: string, context: Record<string, any>): void {
  if (!isInitialized) return

  Sentry.setContext(key, context)
}

export default {
  init: initSentry,
  setUser: setSentryUser,
  clearUser: clearSentryUser,
  captureException,
  captureMessage,
  addBreadcrumb,
  setContext,
}

