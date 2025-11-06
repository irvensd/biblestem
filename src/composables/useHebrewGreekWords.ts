/**
 * Composable for fetching and managing Hebrew/Greek word definitions
 * Uses Bolls API to fetch real word definitions
 */

import { ref, computed } from 'vue'
import { bollsApiService, type BollsWordDefinition } from '../services/bollsApiService'
import { logger } from '../utils/logger'

export interface HebrewGreekWord {
  word: string
  language: 'Hebrew' | 'Greek'
  transliteration?: string
  meaning: string
  context?: string
  references?: string[]
  strongsNumber?: string
}

export function useHebrewGreekWords() {
  const words = ref<HebrewGreekWord[]>([])
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  /**
   * Fetch definition for a single word
   */
  const fetchWordDefinition = async (
    word: string,
    language: 'Hebrew' | 'Greek' = 'Hebrew'
  ): Promise<HebrewGreekWord | null> => {
    try {
      const definitions = await bollsApiService.getWordDefinition(word, 'BDBT', false)
      
      if (!definitions || definitions.length === 0) {
        logger.warn(`No definition found for word: ${word}`)
        return null
      }

      // Get the best match (highest weight)
      const bestMatch = definitions.reduce((best, current) => 
        current.weight > best.weight ? current : best
      )

      // Strip HTML from definition for plain text
      const stripHtml = (html: string): string => {
        const div = document.createElement('div')
        div.innerHTML = html
        return div.textContent || div.innerText || ''
      }

      return {
        word: bestMatch.lexeme,
        language,
        transliteration: bestMatch.transliteration,
        meaning: stripHtml(bestMatch.definition),
        context: bestMatch.short_definition,
        references: [],
        strongsNumber: bestMatch.topic,
      }
    } catch (err) {
      logger.error('Error fetching word definition:', err)
      return null
    }
  }

  /**
   * Fetch definitions for multiple words
   */
  const fetchMultipleWords = async (
    wordList: Array<{ word: string; language: 'Hebrew' | 'Greek' }>
  ): Promise<void> => {
    isLoading.value = true
    error.value = null
    words.value = []

    try {
      const promises = wordList.map(({ word, language }) =>
        fetchWordDefinition(word, language)
      )

      const results = await Promise.all(promises)
      words.value = results.filter((w): w is HebrewGreekWord => w !== null)
    } catch (err) {
      error.value = 'Failed to load word definitions'
      logger.error('Error fetching multiple word definitions:', err)
    } finally {
      isLoading.value = false
    }
  }

  /**
   * Fetch definitions by Strong's numbers
   */
  const fetchByStrongsNumbers = async (
    strongsNumbers: string[]
  ): Promise<void> => {
    isLoading.value = true
    error.value = null
    words.value = []

    try {
      const promises = strongsNumbers.map(async (strongsNum) => {
        const language = strongsNum.startsWith('H') ? 'Hebrew' : 'Greek'
        return fetchWordDefinition(strongsNum, language)
      })

      const results = await Promise.all(promises)
      words.value = results.filter((w): w is HebrewGreekWord => w !== null)
    } catch (err) {
      error.value = 'Failed to load word definitions'
      logger.error('Error fetching word definitions by Strong numbers:', err)
    } finally {
      isLoading.value = false
    }
  }

  /**
   * Extract key words from a scripture verse text
   * This is a simplified approach - you might want more sophisticated NLP
   */
  const extractKeyWords = (scriptureText: string, count: number = 5): string[] => {
    // Remove common words
    const commonWords = new Set([
      'the', 'and', 'of', 'to', 'a', 'in', 'that', 'is', 'was', 'he',
      'for', 'it', 'with', 'as', 'his', 'on', 'be', 'at', 'by', 'i',
      'this', 'had', 'not', 'are', 'but', 'from', 'or', 'have', 'an',
      'they', 'which', 'one', 'you', 'were', 'her', 'all', 'she', 'there',
      'would', 'their', 'we', 'him', 'been', 'has', 'when', 'who', 'will',
      'more', 'if', 'no', 'out', 'so', 'said', 'what', 'up', 'its', 'about',
      'than', 'into', 'them', 'can', 'only', 'other', 'then', 'now', 'may'
    ])

    const words = scriptureText
      .toLowerCase()
      .replace(/[^\w\s]/g, '') // Remove punctuation
      .split(/\s+/)
      .filter(word => 
        word.length > 3 && 
        !commonWords.has(word) &&
        !/^\d+$/.test(word) // Exclude numbers
      )

    // Count word frequency
    const wordCounts = words.reduce((acc, word) => {
      acc[word] = (acc[word] || 0) + 1
      return acc
    }, {} as Record<string, number>)

    // Sort by frequency and return top N unique words
    return Object.entries(wordCounts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, count)
      .map(([word]) => word)
  }

  const hasWords = computed(() => words.value.length > 0)

  return {
    words,
    isLoading,
    error,
    hasWords,
    fetchWordDefinition,
    fetchMultipleWords,
    fetchByStrongsNumbers,
    extractKeyWords,
  }
}

