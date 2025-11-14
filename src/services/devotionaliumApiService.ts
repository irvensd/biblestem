/**
 * Devotionalium API Service
 * https://devotionalium.com/api/docs
 * 
 * Fetches daily Bible verses from Devotionalium API
 */

import { logger } from '../utils/logger'

const DEVOTIONALIUM_API_BASE = 'https://devotionalium.com/api/v2'

export interface DevotionaliumVerse {
  id: number
  text: string
  reference: string
  book: string
  chapter: number
  verse: number
  translation: string
}

export interface DevotionaliumResponse {
  date: string
  verses: DevotionaliumVerse[]
  tanakh?: DevotionaliumVerse[]
  newTestament?: DevotionaliumVerse[]
  quran?: DevotionaliumVerse[]
}

/**
 * Fetch daily verses from Devotionalium API
 * @param date - Optional date in YYYY-MM-DD format. If not provided, returns today's verses
 * @param lang - Language code (e.g., 'en-us', 'de-de'). Default: 'en-us'
 * @param bibleVersion - Bible version to use
 */
export async function fetchDailyVerses(
  date?: string,
  lang: string = 'en-us',
  bibleVersion?: string
): Promise<DevotionaliumResponse | null> {
  try {
    const params = new URLSearchParams()
    if (date) {
      params.append('date', date)
    }
    params.append('lang', lang)
    if (bibleVersion) {
      params.append('bibleVersion', bibleVersion)
    }

    const url = `${DEVOTIONALIUM_API_BASE}?${params.toString()}`
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(`Devotionalium API error: ${response.status} ${response.statusText}`)
    }

    const data = await response.json()
    return data as DevotionaliumResponse
  } catch (error) {
    logger.error('Error fetching daily verses from Devotionalium API:', error)
    return null
  }
}

/**
 * Get today's verse (simplified - returns first New Testament verse or first verse)
 */
export async function getTodaysVerseFromAPI(): Promise<{ text: string; reference: string } | null> {
  try {
    const response = await fetchDailyVerses()
    if (!response || !response.verses || response.verses.length === 0) {
      return null
    }

    // Prefer New Testament verse, otherwise use first verse
    const verse = response.newTestament?.[0] || response.verses[0]
    
    return {
      text: verse.text,
      reference: verse.reference || `${verse.book} ${verse.chapter}:${verse.verse}`,
    }
  } catch (error) {
    logger.error('Error getting today\'s verse from API:', error)
    return null
  }
}

/**
 * Get verses for multiple dates (for recent devotions)
 */
export async function getVersesForDates(
  dates: string[],
  lang: string = 'en-us'
): Promise<Array<{ date: string; verse: { text: string; reference: string } | null }>> {
  try {
    const promises = dates.map(async (date) => {
      const response = await fetchDailyVerses(date, lang)
      if (!response || !response.verses || response.verses.length === 0) {
        return { date, verse: null }
      }

      const verse = response.newTestament?.[0] || response.verses[0]
      return {
        date,
        verse: {
          text: verse.text,
          reference: verse.reference || `${verse.book} ${verse.chapter}:${verse.verse}`,
        },
      }
    })

    return await Promise.all(promises)
  } catch (error) {
    logger.error('Error fetching verses for multiple dates:', error)
    return dates.map(date => ({ date, verse: null }))
  }
}

/**
 * Get recent devotions (past 3 days)
 */
export async function getRecentDevotions(count: number = 3): Promise<Array<{
  date: string
  dateLabel: string
  verse: { text: string; reference: string } | null
}>> {
  const dates: string[] = []
  const dateLabels: string[] = []
  
  for (let i = 1; i <= count; i++) {
    const date = new Date()
    date.setDate(date.getDate() - i)
    const dateStr = date.toISOString().split('T')[0]
    dates.push(dateStr)
    
    // Create human-readable label
    if (i === 1) {
      dateLabels.push('Yesterday')
    } else {
      dateLabels.push(`${i} days ago`)
    }
  }

  const verses = await getVersesForDates(dates)
  
  return verses.map((item, index) => ({
    date: item.date,
    dateLabel: dateLabels[index],
    verse: item.verse,
  }))
}

