/**
 * Timestamp utilities for consistent time handling
 * Ensures timestamps are always in ISO format and can be synced with server
 */

/**
 * Get current timestamp in ISO format
 * This is the standard format used throughout the app
 * @returns ISO timestamp string
 */
export function getCurrentTimestamp(): string {
  return new Date().toISOString()
}

/**
 * Parse timestamp and ensure it's valid
 * @param timestamp - Timestamp to validate
 * @returns Valid ISO timestamp or current time if invalid
 */
export function ensureValidTimestamp(timestamp: string | Date | undefined): string {
  if (!timestamp) {
    return getCurrentTimestamp()
  }

  try {
    const date = typeof timestamp === 'string' ? new Date(timestamp) : timestamp
    if (isNaN(date.getTime())) {
      console.warn('Invalid timestamp:', timestamp, '- using current time')
      return getCurrentTimestamp()
    }
    return date.toISOString()
  } catch (error) {
    console.warn('Error parsing timestamp:', timestamp, error)
    return getCurrentTimestamp()
  }
}

/**
 * Compare two timestamps
 * @param timestamp1 - First timestamp
 * @param timestamp2 - Second timestamp
 * @returns Positive if timestamp1 is later, negative if earlier, 0 if equal
 */
export function compareTimestamps(timestamp1: string, timestamp2: string): number {
  const date1 = new Date(timestamp1).getTime()
  const date2 = new Date(timestamp2).getTime()
  return date1 - date2
}

/**
 * Get the more recent of two timestamps
 * @param timestamp1 - First timestamp
 * @param timestamp2 - Second timestamp
 * @returns The more recent timestamp
 */
export function getMostRecentTimestamp(timestamp1: string, timestamp2: string): string {
  return compareTimestamps(timestamp1, timestamp2) > 0 ? timestamp1 : timestamp2
}

/**
 * Sync timestamps with server
 * When receiving data from Supabase, use server timestamps over local
 * @param localTimestamp - Local timestamp
 * @param serverTimestamp - Server timestamp (from Supabase)
 * @returns Server timestamp if available and valid, otherwise local
 */
export function syncWithServerTimestamp(
  localTimestamp: string,
  serverTimestamp: string | undefined
): string {
  if (!serverTimestamp) {
    return ensureValidTimestamp(localTimestamp)
  }
  
  // Prefer server timestamp as it's the source of truth
  return ensureValidTimestamp(serverTimestamp)
}

/**
 * Format timestamp for display
 * @param timestamp - ISO timestamp
 * @returns Formatted timestamp string
 */
export function formatTimestamp(timestamp: string): string {
  try {
    const date = new Date(timestamp)
    return date.toLocaleString()
  } catch (error) {
    return timestamp
  }
}

/**
 * Get time ago string
 * @param timestamp - ISO timestamp
 * @returns Human-readable time ago string (e.g., "2 hours ago")
 */
export function getTimeAgo(timestamp: string): string {
  try {
    const date = new Date(timestamp)
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffSecs = Math.floor(diffMs / 1000)
    const diffMins = Math.floor(diffSecs / 60)
    const diffHours = Math.floor(diffMins / 60)
    const diffDays = Math.floor(diffHours / 24)

    if (diffDays > 0) {
      return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`
    } else if (diffHours > 0) {
      return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`
    } else if (diffMins > 0) {
      return `${diffMins} minute${diffMins > 1 ? 's' : ''} ago`
    } else {
      return 'Just now'
    }
  } catch (error) {
    return 'Unknown'
  }
}

