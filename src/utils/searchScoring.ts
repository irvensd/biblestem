/**
 * Search relevance scoring utilities
 * Provides intelligent search result ranking
 */

export interface SearchMatch {
  item: any
  score: number
  matchType: 'exact' | 'starts_with' | 'contains' | 'fuzzy'
  matchFields: string[]
}

/**
 * Calculate relevance score for a search match
 * Higher score = more relevant
 */
export function calculateRelevanceScore(
  item: any,
  query: string,
  options: {
    fields: string[]
    weights?: Record<string, number>
    boostRecent?: boolean
    boostPopular?: boolean
    userProgress?: any
  } = { fields: [] }
): SearchMatch {
  const lowerQuery = query.toLowerCase().trim()
  let score = 0
  const matchFields: string[] = []
  let matchType: SearchMatch['matchType'] = 'fuzzy'

  // Default weights for different fields
  const defaultWeights: Record<string, number> = {
    title: 10,
    description: 5,
    tags: 7,
    scripture: 6,
    content: 4,
  }

  const weights = { ...defaultWeights, ...options.weights }

  // Check each field for matches
  for (const field of options.fields) {
    const fieldValue = getNestedValue(item, field)
    if (!fieldValue) continue

    const fieldStr = String(fieldValue).toLowerCase()
    const fieldWeight = weights[field] || 1

    // Exact match (highest score)
    if (fieldStr === lowerQuery) {
      score += 100 * fieldWeight
      matchType = 'exact'
      matchFields.push(field)
    }
    // Starts with query (high score)
    else if (fieldStr.startsWith(lowerQuery)) {
      score += 50 * fieldWeight
      if (matchType === 'fuzzy') matchType = 'starts_with'
      matchFields.push(field)
    }
    // Contains query (medium score)
    else if (fieldStr.includes(lowerQuery)) {
      score += 25 * fieldWeight
      if (matchType === 'fuzzy') matchType = 'contains'
      matchFields.push(field)
    }
    // Fuzzy match (lower score)
    else if (fuzzyMatch(fieldStr, lowerQuery)) {
      score += 10 * fieldWeight
      matchFields.push(field)
    }
  }

  // Handle array fields (tags)
  if (Array.isArray(item.tags)) {
    item.tags.forEach((tag: string) => {
      const tagLower = tag.toLowerCase()
      if (tagLower === lowerQuery) {
        score += 70
        matchFields.push('tags')
      } else if (tagLower.includes(lowerQuery)) {
        score += 35
        matchFields.push('tags')
      }
    })
  }

  // Boost for recent activity
  if (options.boostRecent && item.lastAccessedAt) {
    const daysSinceAccess = getDaysSince(item.lastAccessedAt)
    if (daysSinceAccess < 7) {
      score += (7 - daysSinceAccess) * 2
    }
  }

  // Boost for popular/completed items
  if (options.boostPopular && options.userProgress) {
    if (options.userProgress.completedLessons?.length > 0) {
      score += options.userProgress.completedLessons.length
    }
  }

  // Boost for in-progress items
  if (options.userProgress && options.userProgress.currentLesson) {
    score += 15
  }

  return {
    item,
    score,
    matchType,
    matchFields: [...new Set(matchFields)],
  }
}

/**
 * Get nested value from object using dot notation
 */
function getNestedValue(obj: any, path: string): any {
  return path.split('.').reduce((current, prop) => current?.[prop], obj)
}

/**
 * Simple fuzzy matching algorithm
 * Returns true if all characters in query appear in order in text
 */
function fuzzyMatch(text: string, query: string): boolean {
  let queryIndex = 0
  
  for (let i = 0; i < text.length && queryIndex < query.length; i++) {
    if (text[i] === query[queryIndex]) {
      queryIndex++
    }
  }
  
  return queryIndex === query.length
}

/**
 * Get days since a timestamp
 */
function getDaysSince(timestamp: string): number {
  try {
    const date = new Date(timestamp)
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    return Math.floor(diffMs / (1000 * 60 * 60 * 24))
  } catch {
    return 999
  }
}

/**
 * Sort search results by relevance
 */
export function sortByRelevance(matches: SearchMatch[]): SearchMatch[] {
  return matches.sort((a, b) => {
    // Sort by score descending
    if (b.score !== a.score) {
      return b.score - a.score
    }
    
    // If scores are equal, prioritize by match type
    const matchTypeOrder = { exact: 0, starts_with: 1, contains: 2, fuzzy: 3 }
    return matchTypeOrder[a.matchType] - matchTypeOrder[b.matchType]
  })
}

/**
 * Highlight matches in text
 */
export function highlightMatches(text: string, query: string): string {
  if (!query || !text) return text
  
  const lowerText = text.toLowerCase()
  const lowerQuery = query.toLowerCase()
  
  // Find all matches
  const matches: Array<{ start: number; end: number }> = []
  let index = 0
  
  while ((index = lowerText.indexOf(lowerQuery, index)) !== -1) {
    matches.push({ start: index, end: index + query.length })
    index += query.length
  }
  
  if (matches.length === 0) return text
  
  // Build highlighted string
  let result = ''
  let lastIndex = 0
  
  matches.forEach(match => {
    result += text.substring(lastIndex, match.start)
    result += `<mark class="bg-yellow-200 dark:bg-yellow-900/50 font-semibold">${text.substring(match.start, match.end)}</mark>`
    lastIndex = match.end
  })
  
  result += text.substring(lastIndex)
  
  return result
}

/**
 * Get search excerpt with context
 */
export function getSearchExcerpt(text: string, query: string, maxLength: number = 150): string {
  const lowerText = text.toLowerCase()
  const lowerQuery = query.toLowerCase()
  const index = lowerText.indexOf(lowerQuery)
  
  if (index === -1) {
    return text.substring(0, maxLength) + (text.length > maxLength ? '...' : '')
  }
  
  // Get context around the match
  const contextBefore = 40
  const contextAfter = maxLength - contextBefore - query.length
  
  const start = Math.max(0, index - contextBefore)
  const end = Math.min(text.length, index + query.length + contextAfter)
  
  const excerpt = (start > 0 ? '...' : '') +
                  text.substring(start, end) +
                  (end < text.length ? '...' : '')
  
  return excerpt
}

