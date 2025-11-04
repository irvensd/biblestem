/**
 * Logger Utility
 * Provides environment-aware logging that can be stripped in production builds
 */

type LogLevel = 'debug' | 'info' | 'warn' | 'error'

interface LoggerConfig {
  enabled: boolean
  level: LogLevel
  prefix?: string
}

const isDevelopment = import.meta.env.DEV
const isProduction = import.meta.env.PROD

// Default configuration
const config: LoggerConfig = {
  enabled: isDevelopment,
  level: isDevelopment ? 'debug' : 'error',
  prefix: '[BibleStem]',
}

const logLevels: Record<LogLevel, number> = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3,
}

/**
 * Check if a log level should be output
 */
const shouldLog = (level: LogLevel): boolean => {
  if (!config.enabled) return false
  return logLevels[level] >= logLevels[config.level]
}

/**
 * Format log message with prefix and timestamp
 */
const formatMessage = (level: LogLevel, ...args: any[]): any[] => {
  const timestamp = isDevelopment ? `[${new Date().toISOString()}]` : ''
  const prefix = config.prefix ? `${config.prefix} ` : ''
  const levelPrefix = `[${level.toUpperCase()}]`
  
  return [`${prefix}${levelPrefix}${timestamp}`, ...args]
}

/**
 * Logger instance
 */
export const logger = {
  /**
   * Debug logs (development only)
   */
  debug: (...args: any[]) => {
    if (shouldLog('debug')) {
      console.debug(...formatMessage('debug', ...args))
    }
  },

  /**
   * Info logs
   */
  info: (...args: any[]) => {
    if (shouldLog('info')) {
      console.info(...formatMessage('info', ...args))
    }
  },

  /**
   * Warning logs
   */
  warn: (...args: any[]) => {
    if (shouldLog('warn')) {
      console.warn(...formatMessage('warn', ...args))
    }
  },

  /**
   * Error logs (always logged, even in production)
   */
  error: (...args: any[]) => {
    if (shouldLog('error')) {
      console.error(...formatMessage('error', ...args))
    }
  },

  /**
   * Log groups for better organization
   */
  group: (label: string) => {
    if (shouldLog('debug')) {
      console.group(...formatMessage('debug', label))
    }
  },

  groupEnd: () => {
    if (shouldLog('debug')) {
      console.groupEnd()
    }
  },

  /**
   * Configure logger
   */
  configure: (newConfig: Partial<LoggerConfig>) => {
    Object.assign(config, newConfig)
  },

  /**
   * Check if logging is enabled
   */
  isEnabled: () => config.enabled,

  /**
   * Get current log level
   */
  getLevel: () => config.level,
}

// In production, override console methods to be no-ops if configured
if (isProduction && !config.enabled) {
  // These will be removed by Vite's tree-shaking if not used
  const noop = () => {}
  if (!shouldLog('debug')) {
    logger.debug = noop
    logger.group = noop
    logger.groupEnd = noop
  }
  if (!shouldLog('info')) {
    logger.info = noop
  }
  if (!shouldLog('warn')) {
    logger.warn = noop
  }
}

export default logger
