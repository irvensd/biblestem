/**
 * Error Logging and Monitoring Service
 * Provides centralized error logging with support for external monitoring services
 */

export interface ErrorLog {
  level: 'error' | 'warning' | 'info'
  message: string
  error?: Error
  context?: Record<string, any>
  userId?: string
  timestamp: number
  userAgent?: string
  url?: string
  stack?: string
}

export interface ErrorLoggerConfig {
  enableConsole?: boolean
  enableMonitoring?: boolean
  monitoringService?: 'sentry' | 'logrocket' | 'custom'
  customLogger?: (log: ErrorLog) => void | Promise<void>
  userId?: string
  environment?: string
}

class ErrorLoggerService {
  private config: ErrorLoggerConfig = {
    enableConsole: true,
    enableMonitoring: false,
    monitoringService: 'custom',
  }

  private logs: ErrorLog[] = []
  private maxLogs = 100 // Keep last 100 logs in memory

  /**
   * Initialize the error logger with configuration
   */
  init(config: ErrorLoggerConfig) {
    this.config = { ...this.config, ...config }
  }

  /**
   * Log an error
   */
  async logError(
    message: string,
    error?: Error,
    context?: Record<string, any>
  ): Promise<void> {
    const log: ErrorLog = {
      level: 'error',
      message,
      error,
      context,
      userId: this.config.userId,
      timestamp: Date.now(),
      userAgent: typeof window !== 'undefined' ? navigator.userAgent : undefined,
      url: typeof window !== 'undefined' ? window.location.href : undefined,
      stack: error?.stack,
    }

    await this.processLog(log)
  }

  /**
   * Log a warning
   */
  async logWarning(
    message: string,
    context?: Record<string, any>
  ): Promise<void> {
    const log: ErrorLog = {
      level: 'warning',
      message,
      context,
      userId: this.config.userId,
      timestamp: Date.now(),
      userAgent: typeof window !== 'undefined' ? navigator.userAgent : undefined,
      url: typeof window !== 'undefined' ? window.location.href : undefined,
    }

    await this.processLog(log)
  }

  /**
   * Log an info message
   */
  async logInfo(
    message: string,
    context?: Record<string, any>
  ): Promise<void> {
    const log: ErrorLog = {
      level: 'info',
      message,
      context,
      userId: this.config.userId,
      timestamp: Date.now(),
      userAgent: typeof window !== 'undefined' ? navigator.userAgent : undefined,
      url: typeof window !== 'undefined' ? window.location.href : undefined,
    }

    await this.processLog(log)
  }

  /**
   * Process and send the log to all configured outputs
   */
  private async processLog(log: ErrorLog): Promise<void> {
    // Store in memory
    this.logs.push(log)
    if (this.logs.length > this.maxLogs) {
      this.logs.shift()
    }

    // Console output
    if (this.config.enableConsole) {
      this.logToConsole(log)
    }

    // External monitoring services
    if (this.config.enableMonitoring) {
      await this.logToMonitoringService(log)
    }

    // Custom logger
    if (this.config.customLogger) {
      try {
        await this.config.customLogger(log)
      } catch (error) {
        console.error('Custom logger failed:', error)
      }
    }
  }

  /**
   * Log to browser console
   */
  private logToConsole(log: ErrorLog): void {
    const logMessage = `[${log.level.toUpperCase()}] ${log.message}`
    const logData = {
      ...log.context,
      ...(log.error && { error: log.error }),
      timestamp: new Date(log.timestamp).toISOString(),
      url: log.url,
    }

    switch (log.level) {
      case 'error':
        console.error(logMessage, logData)
        if (log.error) {
          console.error('Error stack:', log.stack)
        }
        break
      case 'warning':
        console.warn(logMessage, logData)
        break
      case 'info':
        console.info(logMessage, logData)
        break
    }
  }

  /**
   * Log to external monitoring service
   */
  private async logToMonitoringService(log: ErrorLog): Promise<void> {
    const { monitoringService } = this.config

    switch (monitoringService) {
      case 'sentry':
        await this.logToSentry(log)
        break
      case 'logrocket':
        await this.logToLogRocket(log)
        break
      case 'custom':
        // Custom service handled by customLogger
        break
    }
  }

  /**
   * Log to Sentry (if available)
   */
  private async logToSentry(log: ErrorLog): Promise<void> {
    if (typeof window !== 'undefined' && (window as any).Sentry) {
      const Sentry = (window as any).Sentry

      const context = {
        ...log.context,
        userId: log.userId,
        url: log.url,
        userAgent: log.userAgent,
      }

      if (log.level === 'error' && log.error) {
        Sentry.captureException(log.error, {
          level: 'error',
          tags: {
            source: 'errorLogger',
          },
          extra: context,
        })
      } else {
        Sentry.captureMessage(log.message, {
          level: log.level === 'warning' ? 'warning' : 'info',
          tags: {
            source: 'errorLogger',
          },
          extra: context,
        })
      }
    }
  }

  /**
   * Log to LogRocket (if available)
   */
  private async logToLogRocket(log: ErrorLog): Promise<void> {
    if (typeof window !== 'undefined' && (window as any).LogRocket) {
      const LogRocket = (window as any).LogRocket

      if (log.level === 'error' && log.error) {
        LogRocket.captureException(log.error, {
          tags: log.context,
        })
      } else {
        LogRocket.log(log.message, log.context)
      }
    }
  }

  /**
   * Get recent logs
   */
  getRecentLogs(level?: ErrorLog['level'], limit = 10): ErrorLog[] {
    let filtered = this.logs

    if (level) {
      filtered = filtered.filter(log => log.level === level)
    }

    return filtered.slice(-limit).reverse()
  }

  /**
   * Clear all logs
   */
  clearLogs(): void {
    this.logs = []
  }

  /**
   * Export logs as JSON
   */
  exportLogs(): string {
    return JSON.stringify(this.logs, null, 2)
  }
}

// Singleton instance
export const errorLogger = new ErrorLoggerService()

// Initialize with defaults in browser environment
if (typeof window !== 'undefined') {
  errorLogger.init({
    enableConsole: !import.meta.env.PROD, // Only console in dev
    enableMonitoring: import.meta.env.PROD, // Enable monitoring in production
    environment: import.meta.env.MODE,
  })
}

/**
 * Vue composable for error logging
 */
export function useErrorLogger() {
  const logError = async (
    message: string,
    error?: Error,
    context?: Record<string, any>
  ) => {
    await errorLogger.logError(message, error, context)
  }

  const logWarning = async (
    message: string,
    context?: Record<string, any>
  ) => {
    await errorLogger.logWarning(message, context)
  }

  const logInfo = async (
    message: string,
    context?: Record<string, any>
  ) => {
    await errorLogger.logInfo(message, context)
  }

  return {
    logError,
    logWarning,
    logInfo,
    getRecentLogs: (level?: ErrorLog['level'], limit?: number) =>
      errorLogger.getRecentLogs(level, limit),
    clearLogs: () => errorLogger.clearLogs(),
    exportLogs: () => errorLogger.exportLogs(),
  }
}

