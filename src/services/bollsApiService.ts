/**
 * Bolls Bible API Service
 * https://bolls.life/api/
 * 
 * Provides access to Bible verses and Hebrew/Greek word definitions
 */

import { logger } from '../utils/logger'

const BOLLS_API_BASE = 'https://bolls.life'

export interface BollsVerse {
  pk: number
  translation: string
  book: number
  chapter: number
  verse: number
  text: string
  comment?: string
}

export interface BollsWordDefinition {
  topic: string // Strong number
  definition: string // HTML string with definition
  lexeme: string // The found word itself
  transliteration: string
  pronunciation: string
  short_definition: string
  weight: number // 0-1, how close the match is
}

export interface BollsTranslation {
  short_name: string // e.g., "KJV", "NIV"
  full_name: string // e.g., "King James Version"
  updated: number // milliseconds since 1970
  dir?: 'rtl' // for right-to-left languages
}

class BollsApiService {
  /**
   * Get list of available translations
   */
  async getTranslations(): Promise<BollsTranslation[]> {
    try {
      const response = await fetch(`${BOLLS_API_BASE}/get-translations/`)
      if (!response.ok) {
        throw new Error(`Failed to fetch translations: ${response.statusText}`)
      }
      return await response.json()
    } catch (error) {
      logger.error('Error fetching translations from Bolls API:', error)
      throw error
    }
  }

  /**
   * Fetch a specific verse
   * @param translation - Translation code (e.g., 'KJV', 'NIV')
   * @param book - Book number (1-66)
   * @param chapter - Chapter number
   * @param verse - Verse number
   */
  async getVerse(
    translation: string,
    book: number,
    chapter: number,
    verse: number
  ): Promise<BollsVerse> {
    try {
      const url = `${BOLLS_API_BASE}/get-verse/${translation}/${book}/${chapter}/${verse}/`
      const response = await fetch(url)
      
      if (!response.ok) {
        throw new Error(`Failed to fetch verse: ${response.statusText}`)
      }
      
      return await response.json()
    } catch (error) {
      logger.error('Error fetching verse from Bolls API:', error)
      throw error
    }
  }

  /**
   * Fetch a whole chapter
   * @param translation - Translation code (e.g., 'KJV', 'NIV')
   * @param book - Book number (1-66)
   * @param chapter - Chapter number
   */
  async getChapter(
    translation: string,
    book: number,
    chapter: number
  ): Promise<BollsVerse[]> {
    try {
      const url = `${BOLLS_API_BASE}/get-text/${translation}/${book}/${chapter}/`
      const response = await fetch(url)
      
      if (!response.ok) {
        throw new Error(`Failed to fetch chapter: ${response.statusText}`)
      }
      
      return await response.json()
    } catch (error) {
      logger.error('Error fetching chapter from Bolls API:', error)
      throw error
    }
  }

  /**
   * Get Hebrew or Greek word definitions
   * @param word - Hebrew or Greek word, or Strong's number (e.g., 'H125', 'G523')
   * @param dictionary - 'BDBT' (Brown-Driver-Briggs/Thayer's) or 'RUSD' (Russian)
   * @param extended - Return extended search results
   */
  async getWordDefinition(
    word: string,
    dictionary: 'BDBT' | 'RUSD' = 'BDBT',
    extended: boolean = false
  ): Promise<BollsWordDefinition[]> {
    try {
      const encodedWord = encodeURIComponent(word)
      const url = `${BOLLS_API_BASE}/dictionary-definition/${dictionary}/${encodedWord}/${extended ? '?extended=true' : ''}`
      
      const response = await fetch(url)
      
      if (!response.ok) {
        throw new Error(`Failed to fetch word definition: ${response.statusText}`)
      }
      
      const definitions = await response.json()
      return definitions
    } catch (error) {
      logger.error('Error fetching word definition from Bolls API:', error)
      throw error
    }
  }

  /**
   * Parse a scripture reference string (e.g., "John 3:16") into book, chapter, verse
   * Note: This is a simplified parser. For production, use a more robust solution.
   */
  parseReference(reference: string): { book: number; chapter: number; verse: number } | null {
    // This is a simplified parser - in production you'd want a more comprehensive one
    // For now, just support basic formats like "John 3:16"
    
    const bookMap: Record<string, number> = {
      // Old Testament
      'Genesis': 1, 'Gen': 1,
      'Exodus': 2, 'Ex': 2, 'Exod': 2,
      'Leviticus': 3, 'Lev': 3,
      'Numbers': 4, 'Num': 4,
      'Deuteronomy': 5, 'Deut': 5,
      'Joshua': 6, 'Josh': 6,
      'Judges': 7, 'Judg': 7,
      'Ruth': 8,
      '1 Samuel': 9, '1Sam': 9,
      '2 Samuel': 10, '2Sam': 10,
      '1 Kings': 11, '1Ki': 11,
      '2 Kings': 12, '2Ki': 12,
      '1 Chronicles': 13, '1Chr': 13,
      '2 Chronicles': 14, '2Chr': 14,
      'Ezra': 15,
      'Nehemiah': 16, 'Neh': 16,
      'Esther': 17, 'Esth': 17,
      'Job': 18,
      'Psalms': 19, 'Psalm': 19, 'Ps': 19,
      'Proverbs': 20, 'Prov': 20,
      'Ecclesiastes': 21, 'Eccl': 21,
      'Song of Solomon': 22, 'Song': 22,
      'Isaiah': 23, 'Isa': 23,
      'Jeremiah': 24, 'Jer': 24,
      'Lamentations': 25, 'Lam': 25,
      'Ezekiel': 26, 'Ezek': 26,
      'Daniel': 27, 'Dan': 27,
      'Hosea': 28, 'Hos': 28,
      'Joel': 29,
      'Amos': 30,
      'Obadiah': 31, 'Obad': 31,
      'Jonah': 32,
      'Micah': 33, 'Mic': 33,
      'Nahum': 34, 'Nah': 34,
      'Habakkuk': 35, 'Hab': 35,
      'Zephaniah': 36, 'Zeph': 36,
      'Haggai': 37, 'Hag': 37,
      'Zechariah': 38, 'Zech': 38,
      'Malachi': 39, 'Mal': 39,
      // New Testament
      'Matthew': 40, 'Matt': 40, 'Mt': 40,
      'Mark': 41, 'Mk': 41,
      'Luke': 42, 'Lk': 42,
      'John': 43, 'Jn': 43,
      'Acts': 44,
      'Romans': 45, 'Rom': 45,
      '1 Corinthians': 46, '1Cor': 46, '1 Cor': 46,
      '2 Corinthians': 47, '2Cor': 47, '2 Cor': 47,
      'Galatians': 48, 'Gal': 48,
      'Ephesians': 49, 'Eph': 49,
      'Philippians': 50, 'Phil': 50,
      'Colossians': 51, 'Col': 51,
      '1 Thessalonians': 52, '1Thess': 52, '1 Thess': 52,
      '2 Thessalonians': 53, '2Thess': 53, '2 Thess': 53,
      '1 Timothy': 54, '1Tim': 54, '1 Tim': 54,
      '2 Timothy': 55, '2Tim': 55, '2 Tim': 55,
      'Titus': 56,
      'Philemon': 57, 'Phlm': 57,
      'Hebrews': 58, 'Heb': 58,
      'James': 59, 'Jas': 59,
      '1 Peter': 60, '1Pet': 60, '1 Pet': 60,
      '2 Peter': 61, '2Pet': 61, '2 Pet': 61,
      '1 John': 62, '1Jn': 62, '1 John': 62,
      '2 John': 63, '2Jn': 63, '2 John': 63,
      '3 John': 64, '3Jn': 64, '3 John': 64,
      'Jude': 65,
      'Revelation': 66, 'Rev': 66,
    }

    try {
      // Match pattern like "John 3:16" or "1 John 3:16"
      const match = reference.match(/^(\d?\s?[A-Za-z]+)\s+(\d+):(\d+)/)
      
      if (!match) {
        logger.warn(`Could not parse reference: ${reference}`)
        return null
      }

      const [, bookName, chapterStr, verseStr] = match
      const book = bookMap[bookName.trim()]
      const chapter = parseInt(chapterStr, 10)
      const verse = parseInt(verseStr, 10)

      if (!book || isNaN(chapter) || isNaN(verse)) {
        logger.warn(`Invalid reference parts: ${reference}`)
        return null
      }

      return { book, chapter, verse }
    } catch (error) {
      logger.error('Error parsing reference:', error)
      return null
    }
  }

  /**
   * Helper to get book name from book number
   */
  getBookName(bookNumber: number): string {
    const bookNames: Record<number, string> = {
      1: 'Genesis', 2: 'Exodus', 3: 'Leviticus', 4: 'Numbers', 5: 'Deuteronomy',
      6: 'Joshua', 7: 'Judges', 8: 'Ruth', 9: '1 Samuel', 10: '2 Samuel',
      11: '1 Kings', 12: '2 Kings', 13: '1 Chronicles', 14: '2 Chronicles',
      15: 'Ezra', 16: 'Nehemiah', 17: 'Esther', 18: 'Job', 19: 'Psalms',
      20: 'Proverbs', 21: 'Ecclesiastes', 22: 'Song of Solomon', 23: 'Isaiah',
      24: 'Jeremiah', 25: 'Lamentations', 26: 'Ezekiel', 27: 'Daniel',
      28: 'Hosea', 29: 'Joel', 30: 'Amos', 31: 'Obadiah', 32: 'Jonah',
      33: 'Micah', 34: 'Nahum', 35: 'Habakkuk', 36: 'Zephaniah', 37: 'Haggai',
      38: 'Zechariah', 39: 'Malachi',
      40: 'Matthew', 41: 'Mark', 42: 'Luke', 43: 'John', 44: 'Acts',
      45: 'Romans', 46: '1 Corinthians', 47: '2 Corinthians', 48: 'Galatians',
      49: 'Ephesians', 50: 'Philippians', 51: 'Colossians', 52: '1 Thessalonians',
      53: '2 Thessalonians', 54: '1 Timothy', 55: '2 Timothy', 56: 'Titus',
      57: 'Philemon', 58: 'Hebrews', 59: 'James', 60: '1 Peter', 61: '2 Peter',
      62: '1 John', 63: '2 John', 64: '3 John', 65: 'Jude', 66: 'Revelation',
    }

    return bookNames[bookNumber] || `Book ${bookNumber}`
  }
}

// Export singleton instance
export const bollsApiService = new BollsApiService()

