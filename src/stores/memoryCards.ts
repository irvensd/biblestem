import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface MemoryCard {
  id: string
  reference: string
  text: string
  category: string
  difficulty: 'easy' | 'medium' | 'hard'
  theme?: string
  studyId?: string
  lessonId?: string
  isMemorized: boolean
  reviewCount: number
  confidence: number // 1-5 scale
  dateAdded: string
  lastReviewed?: string
  nextReview?: string
}

export interface MemoryDeck {
  id: string
  title: string
  description: string
  cardIds: string[]
  color: string
  icon: string
}

export interface StudySession {
  id: string
  startTime: string
  endTime?: string
  cardsStudied: string[]
  correctAnswers: number
  totalCards: number
  duration: number // in minutes
}

export const useMemoryCardsStore = defineStore('memoryCards', () => {
  const cards = ref<Record<string, MemoryCard>>({})
  const decks = ref<Record<string, MemoryDeck>>({})
  const studySessions = ref<StudySession[]>([])
  const currentSession = ref<string | null>(null)

  // Initialize with some default cards
  const initializeDefaultCards = () => {
    const defaultCards: MemoryCard[] = [
      // How to Study the Bible series
      {
        id: 'psalm-119-18',
        reference: 'Psalm 119:18',
        text: 'Open thou mine eyes, that I may behold wondrous things out of thy law.',
        category: 'Bible Study',
        difficulty: 'medium',
        theme: 'Prayer',
        studyId: 'how-to-study-bible',
        lessonId: 'htsb-1',
        isMemorized: false,
        reviewCount: 0,
        confidence: 1,
        dateAdded: new Date().toISOString(),
      },
      {
        id: '1cor-13-11',
        reference: '1 Corinthians 13:11',
        text: 'When I was a child, I spake as a child, I understood as a child, I thought as a child: but when I became a man, I put away childish things.',
        category: 'Bible Study',
        difficulty: 'medium',
        theme: 'Maturity',
        studyId: 'how-to-study-bible',
        lessonId: 'htsb-2',
        isMemorized: false,
        reviewCount: 0,
        confidence: 1,
        dateAdded: new Date().toISOString(),
      },
      // Popular memory verses
      {
        id: 'john-3-16',
        reference: 'John 3:16',
        text: 'For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.',
        category: 'Salvation',
        difficulty: 'easy',
        theme: "God's Love",
        isMemorized: false,
        reviewCount: 0,
        confidence: 1,
        dateAdded: new Date().toISOString(),
      },
      {
        id: 'romans-8-28',
        reference: 'Romans 8:28',
        text: 'And we know that all things work together for good to them that love God, to them who are the called according to his purpose.',
        category: 'Encouragement',
        difficulty: 'medium',
        theme: "God's Plans",
        isMemorized: false,
        reviewCount: 0,
        confidence: 1,
        dateAdded: new Date().toISOString(),
      },
      {
        id: 'philippians-4-13',
        reference: 'Philippians 4:13',
        text: 'I can do all things through Christ which strengtheneth me.',
        category: 'Strength',
        difficulty: 'easy',
        theme: "God's Power",
        isMemorized: false,
        reviewCount: 0,
        confidence: 1,
        dateAdded: new Date().toISOString(),
      },
    ]

    defaultCards.forEach((card) => {
      cards.value[card.id] = card
    })
  }

  // Initialize default decks
  const initializeDefaultDecks = () => {
    const defaultDecks: MemoryDeck[] = [
      {
        id: 'bible-study-basics',
        title: 'Bible Study Basics',
        description: 'Essential verses for Bible study foundation',
        cardIds: ['psalm-119-18', '1cor-13-11'],
        color: 'from-blue-400 to-blue-600',
        icon: '📖',
      },
      {
        id: 'salvation-verses',
        title: 'Salvation & Grace',
        description: "Key verses about salvation and God's grace",
        cardIds: ['john-3-16'],
        color: 'from-green-400 to-green-600',
        icon: '✝️',
      },
      {
        id: 'strength-comfort',
        title: 'Strength & Comfort',
        description: 'Verses for encouragement and strength',
        cardIds: ['romans-8-28', 'philippians-4-13'],
        color: 'from-purple-400 to-purple-600',
        icon: '💪',
      },
    ]

    defaultDecks.forEach((deck) => {
      decks.value[deck.id] = deck
    })
  }

  // Computed properties
  const allCards = computed(() => Object.values(cards.value))
  const memorizedCards = computed(() => allCards.value.filter((card) => card.isMemorized))
  const newCards = computed(() => allCards.value.filter((card) => card.reviewCount === 0))

  // Get cards due for review (simplified algorithm)
  const getDueForReview = () => {
    const now = new Date()
    return allCards.value.filter((card) => {
      if (!card.lastReviewed) return card.reviewCount > 0

      const lastReview = new Date(card.lastReviewed)
      const daysSince = Math.floor((now.getTime() - lastReview.getTime()) / (1000 * 60 * 60 * 24))

      // Simple spaced repetition: review based on confidence level
      const reviewInterval = Math.pow(2, card.confidence - 1) // 1, 2, 4, 8, 16 days
      return daysSince >= reviewInterval
    })
  }

  // Get cards for a specific deck
  const getCardsForDeck = (deckId: string): MemoryCard[] => {
    const deck = decks.value[deckId]
    if (!deck) return []

    return deck.cardIds.map((cardId) => cards.value[cardId]).filter(Boolean)
  }

  // Study session management
  const startStudySession = (cardIds: string[]): string => {
    const sessionId = `session-${Date.now()}`
    const session: StudySession = {
      id: sessionId,
      startTime: new Date().toISOString(),
      cardsStudied: cardIds,
      correctAnswers: 0,
      totalCards: cardIds.length,
      duration: 0,
    }

    studySessions.value.push(session)
    currentSession.value = sessionId
    return sessionId
  }

  const endStudySession = (sessionId: string, correctAnswers: number, duration: number) => {
    const session = studySessions.value.find((s) => s.id === sessionId)
    if (session) {
      session.endTime = new Date().toISOString()
      session.correctAnswers = correctAnswers
      session.duration = duration
    }
    currentSession.value = null
    saveToStorage()
  }

  // Update card progress
  const updateCardProgress = (cardId: string, wasCorrect: boolean) => {
    const card = cards.value[cardId]
    if (!card) return

    card.reviewCount++
    card.lastReviewed = new Date().toISOString()

    if (wasCorrect) {
      card.confidence = Math.min(5, card.confidence + 1)
      if (card.confidence >= 4) {
        card.isMemorized = true
      }
    } else {
      card.confidence = Math.max(1, card.confidence - 1)
      card.isMemorized = false
    }

    // Calculate next review date
    const nextReviewDays = Math.pow(2, card.confidence - 1)
    const nextReview = new Date()
    nextReview.setDate(nextReview.getDate() + nextReviewDays)
    card.nextReview = nextReview.toISOString()

    saveToStorage()
  }

  // Get study statistics
  const getStudyStats = () => {
    const total = allCards.value.length
    const memorized = memorizedCards.value.length
    const due = getDueForReview().length
    const accuracy =
      studySessions.value.length > 0
        ? Math.round(
            (studySessions.value.reduce((acc, session) => acc + session.correctAnswers, 0) /
              studySessions.value.reduce((acc, session) => acc + session.totalCards, 0)) *
              100,
          )
        : 0

    // Calculate streak (simplified)
    const streak = Math.floor(Math.random() * 15) + 1 // Mock data for now

    return {
      totalCards: total,
      memorizedCount: memorized,
      dueCount: due,
      accuracy,
      streakDays: streak,
    }
  }

  // Storage management
  const saveToStorage = () => {
    try {
      localStorage.setItem('biblestem-memory-cards', JSON.stringify(cards.value))
      localStorage.setItem('biblestem-memory-decks', JSON.stringify(decks.value))
      localStorage.setItem('biblestem-memory-sessions', JSON.stringify(studySessions.value))
    } catch (error) {
      console.error('Failed to save memory cards to storage:', error)
    }
  }

  const loadFromStorage = () => {
    try {
      const savedCards = localStorage.getItem('biblestem-memory-cards')
      const savedDecks = localStorage.getItem('biblestem-memory-decks')
      const savedSessions = localStorage.getItem('biblestem-memory-sessions')

      if (savedCards) {
        cards.value = JSON.parse(savedCards)
      } else {
        initializeDefaultCards()
      }

      if (savedDecks) {
        decks.value = JSON.parse(savedDecks)
      } else {
        initializeDefaultDecks()
      }

      if (savedSessions) {
        studySessions.value = JSON.parse(savedSessions)
      }

      // If no cards exist, initialize defaults
      if (Object.keys(cards.value).length === 0) {
        initializeDefaultCards()
        initializeDefaultDecks()
        saveToStorage()
      }
    } catch (error) {
      console.error('Failed to load memory cards from storage:', error)
      initializeDefaultCards()
      initializeDefaultDecks()
    }
  }

  return {
    // State
    cards,
    decks,
    studySessions,
    currentSession,

    // Computed
    allCards,
    memorizedCards,
    newCards,

    // Actions
    getDueForReview,
    getCardsForDeck,
    startStudySession,
    endStudySession,
    updateCardProgress,
    getStudyStats,
    saveToStorage,
    loadFromStorage,
  }
})
