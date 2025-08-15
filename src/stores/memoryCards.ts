import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export interface MemoryCard {
  id: string
  reference: string
  text: string
  category: string
  difficulty: 'easy' | 'medium' | 'hard'
  theme: string
  studyId?: string
  lessonId?: string
  isMemorized: boolean
  reviewCount: number
  lastReviewed?: string
  confidence: 1 | 2 | 3 | 4 | 5 // 1 = need practice, 5 = mastered
  dateAdded: string
}

export interface MemoryDeck {
  id: string
  title: string
  description: string
  category: string
  cardIds: string[]
  isDefault: boolean
  color: string
  icon: string
}

export interface StudySession {
  id: string
  date: string
  cardsStudied: string[]
  correctAnswers: number
  totalCards: number
  duration: number // in minutes
}

export const useMemoryCardsStore = defineStore('memoryCards', () => {
  const cards = ref<Record<string, MemoryCard>>({})
  const decks = ref<Record<string, MemoryDeck>>({})
  const studySessions = ref<StudySession[]>([])

  // Initialize with key verses from Bible studies
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
        dateAdded: new Date().toISOString()
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
        dateAdded: new Date().toISOString()
      },
      {
        id: 'psalm-86-11',
        reference: 'Psalm 86:11',
        text: 'Teach me thy way, O LORD; I will walk in thy truth: unite my heart to fear thy name.',
        category: 'Bible Study',
        difficulty: 'medium',
        theme: 'Teachable Spirit',
        studyId: 'how-to-study-bible',
        lessonId: 'htsb-3',
        isMemorized: false,
        reviewCount: 0,
        confidence: 1,
        dateAdded: new Date().toISOString()
      },
      {
        id: 'john-7-17',
        reference: 'John 7:17',
        text: 'If any man will do his will, he shall know of the doctrine, whether it be of God, or whether I speak of myself.',
        category: 'Bible Study',
        difficulty: 'medium',
        theme: 'Obedience',
        studyId: 'how-to-study-bible',
        lessonId: 'htsb-4',
        isMemorized: false,
        reviewCount: 0,
        confidence: 1,
        dateAdded: new Date().toISOString()
      },

      // Popular memory verses
      {
        id: 'john-3-16',
        reference: 'John 3:16',
        text: 'For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.',
        category: 'Salvation',
        difficulty: 'medium',
        theme: 'God\'s Love',
        isMemorized: false,
        reviewCount: 0,
        confidence: 1,
        dateAdded: new Date().toISOString()
      },
      {
        id: 'romans-8-28',
        reference: 'Romans 8:28',
        text: 'And we know that all things work together for good to them that love God, to them who are the called according to his purpose.',
        category: 'Comfort',
        difficulty: 'medium',
        theme: 'God\'s Sovereignty',
        isMemorized: false,
        reviewCount: 0,
        confidence: 1,
        dateAdded: new Date().toISOString()
      },
      {
        id: 'philippians-4-13',
        reference: 'Philippians 4:13',
        text: 'I can do all things through Christ which strengtheneth me.',
        category: 'Strength',
        difficulty: 'easy',
        theme: 'God\'s Power',
        isMemorized: false,
        reviewCount: 0,
        confidence: 1,
        dateAdded: new Date().toISOString()
      },
      {
        id: 'psalm-23-1',
        reference: 'Psalm 23:1',
        text: 'The LORD is my shepherd; I shall not want.',
        category: 'Comfort',
        difficulty: 'easy',
        theme: 'God\'s Care',
        studyId: 'psalm-23',
        isMemorized: false,
        reviewCount: 0,
        confidence: 1,
        dateAdded: new Date().toISOString()
      },
      {
        id: 'jeremiah-29-11',
        reference: 'Jeremiah 29:11',
        text: 'For I know the thoughts that I think toward you, saith the LORD, thoughts of peace, and not of evil, to give you an expected end.',
        category: 'Hope',
        difficulty: 'medium',
        theme: 'God\'s Plans',
        isMemorized: false,
        reviewCount: 0,
        confidence: 1,
        dateAdded: new Date().toISOString()
      },
      {
        id: 'proverbs-3-5-6',
        reference: 'Proverbs 3:5-6',
        text: 'Trust in the LORD with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths.',
        category: 'Guidance',
        difficulty: 'medium',
        theme: 'Trust',
        isMemorized: false,
        reviewCount: 0,
        confidence: 1,
        dateAdded: new Date().toISOString()
      },
      {
        id: 'isaiah-41-10',
        reference: 'Isaiah 41:10',
        text: 'Fear thou not; for I am with thee: be not dismayed; for I am thy God: I will strengthen thee; yea, I will help thee; yea, I will uphold thee with the right hand of my righteousness.',
        category: 'Comfort',
        difficulty: 'hard',
        theme: 'Overcoming Fear',
        isMemorized: false,
        reviewCount: 0,
        confidence: 1,
        dateAdded: new Date().toISOString()
      },
      {
        id: 'matthew-6-33',
        reference: 'Matthew 6:33',
        text: 'But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you.',
        category: 'Priorities',
        difficulty: 'medium',
        theme: 'God\'s Kingdom',
        isMemorized: false,
        reviewCount: 0,
        confidence: 1,
        dateAdded: new Date().toISOString()
      }
    ]

    // Convert to record format
    defaultCards.forEach(card => {
      cards.value[card.id] = card
    })
  }

  const initializeDefaultDecks = () => {
    const defaultDecks: MemoryDeck[] = [
      {
        id: 'bible-study-basics',
        title: 'Bible Study Basics',
        description: 'Key verses about studying God\'s Word',
        category: 'Bible Study',
        cardIds: ['psalm-119-18', '1cor-13-11', 'psalm-86-11', 'john-7-17'],
        isDefault: true,
        color: 'from-emerald-500 to-emerald-600',
        icon: '📖'
      },
      {
        id: 'essential-verses',
        title: 'Essential Verses',
        description: 'Must-know Bible verses for every Christian',
        category: 'Foundation',
        cardIds: ['john-3-16', 'romans-8-28', 'philippians-4-13', 'psalm-23-1'],
        isDefault: true,
        color: 'from-blue-500 to-blue-600',
        icon: '⭐'
      },
      {
        id: 'comfort-promises',
        title: 'Comfort & Promises',
        description: 'Verses for difficult times and God\'s promises',
        category: 'Comfort',
        cardIds: ['romans-8-28', 'psalm-23-1', 'jeremiah-29-11', 'isaiah-41-10'],
        isDefault: true,
        color: 'from-teal-500 to-teal-600',
        icon: '🤗'
      },
      {
        id: 'guidance-wisdom',
        title: 'Guidance & Wisdom',
        description: 'Verses about seeking God\'s direction',
        category: 'Guidance',
        cardIds: ['proverbs-3-5-6', 'psalm-86-11', 'matthew-6-33'],
        isDefault: true,
        color: 'from-purple-500 to-purple-600',
        icon: '🧭'
      }
    ]

    defaultDecks.forEach(deck => {
      decks.value[deck.id] = deck
    })
  }

  const allCards = computed(() => Object.values(cards.value))
  const memorizedCards = computed(() => allCards.value.filter(card => card.isMemorized))
  const reviewCards = computed(() => allCards.value.filter(card => card.reviewCount > 0 && !card.isMemorized))
  const newCards = computed(() => allCards.value.filter(card => card.reviewCount === 0))

  const cardsByDifficulty = computed(() => {
    return {
      easy: allCards.value.filter(card => card.difficulty === 'easy'),
      medium: allCards.value.filter(card => card.difficulty === 'medium'),
      hard: allCards.value.filter(card => card.difficulty === 'hard')
    }
  })

  const cardsByCategory = computed(() => {
    const categories: Record<string, MemoryCard[]> = {}
    allCards.value.forEach(card => {
      if (!categories[card.category]) {
        categories[card.category] = []
      }
      categories[card.category].push(card)
    })
    return categories
  })

  const getCardsForDeck = (deckId: string): MemoryCard[] => {
    const deck = decks.value[deckId]
    if (!deck) return []
    
    return deck.cardIds.map(cardId => cards.value[cardId]).filter(Boolean)
  }

  const getDueForReview = (): MemoryCard[] => {
    const now = new Date()
    return allCards.value.filter(card => {
      if (card.isMemorized) return false
      if (card.reviewCount === 0) return true
      
      if (!card.lastReviewed) return true
      
      const lastReview = new Date(card.lastReviewed)
      const daysSinceReview = Math.floor((now.getTime() - lastReview.getTime()) / (1000 * 60 * 60 * 24))
      
      // Spaced repetition: review intervals based on confidence level
      const reviewIntervals = { 1: 1, 2: 3, 3: 7, 4: 14, 5: 30 }
      const requiredInterval = reviewIntervals[card.confidence] || 1
      
      return daysSinceReview >= requiredInterval
    })
  }

  const addCard = (cardData: Omit<MemoryCard, 'id' | 'isMemorized' | 'reviewCount' | 'confidence' | 'dateAdded'>) => {
    const id = `${cardData.reference.toLowerCase().replace(/\s+/g, '-').replace(/:/g, '-')}`
    const card: MemoryCard = {
      ...cardData,
      id,
      isMemorized: false,
      reviewCount: 0,
      confidence: 1,
      dateAdded: new Date().toISOString()
    }
    
    cards.value[id] = card
    saveToStorage()
    return id
  }

  const updateCardProgress = (cardId: string, wasCorrect: boolean) => {
    const card = cards.value[cardId]
    if (!card) return

    card.reviewCount++
    card.lastReviewed = new Date().toISOString()

    if (wasCorrect) {
      card.confidence = Math.min(5, card.confidence + 1)
      if (card.confidence === 5) {
        card.isMemorized = true
      }
    } else {
      card.confidence = Math.max(1, card.confidence - 1)
      card.isMemorized = false
    }

    saveToStorage()
  }

  const createDeck = (deckData: Omit<MemoryDeck, 'id' | 'isDefault'>) => {
    const id = `deck-${Date.now()}`
    const deck: MemoryDeck = {
      ...deckData,
      id,
      isDefault: false
    }
    
    decks.value[id] = deck
    saveToStorage()
    return id
  }

  const addCardToDeck = (deckId: string, cardId: string) => {
    const deck = decks.value[deckId]
    if (deck && !deck.cardIds.includes(cardId)) {
      deck.cardIds.push(cardId)
      saveToStorage()
    }
  }

  const removeCardFromDeck = (deckId: string, cardId: string) => {
    const deck = decks.value[deckId]
    if (deck) {
      deck.cardIds = deck.cardIds.filter(id => id !== cardId)
      saveToStorage()
    }
  }

  const startStudySession = (cardIds: string[]) => {
    const sessionId = `session-${Date.now()}`
    const session: StudySession = {
      id: sessionId,
      date: new Date().toISOString(),
      cardsStudied: cardIds,
      correctAnswers: 0,
      totalCards: cardIds.length,
      duration: 0
    }
    
    studySessions.value.push(session)
    return sessionId
  }

  const endStudySession = (sessionId: string, correctAnswers: number, duration: number) => {
    const session = studySessions.value.find(s => s.id === sessionId)
    if (session) {
      session.correctAnswers = correctAnswers
      session.duration = duration
      saveToStorage()
    }
  }

  const getStudyStats = () => {
    const totalCards = allCards.value.length
    const memorizedCount = memorizedCards.value.length
    const reviewCount = reviewCards.value.length
    const dueCount = getDueForReview().length
    
    const totalSessions = studySessions.value.length
    const totalCardsStudied = studySessions.value.reduce((sum, session) => sum + session.cardsStudied.length, 0)
    const totalCorrect = studySessions.value.reduce((sum, session) => sum + session.correctAnswers, 0)
    const accuracy = totalCardsStudied > 0 ? Math.round((totalCorrect / totalCardsStudied) * 100) : 0

    return {
      totalCards,
      memorizedCount,
      reviewCount,
      dueCount,
      totalSessions,
      accuracy,
      streakDays: calculateStreak()
    }
  }

  const calculateStreak = (): number => {
    // Simple streak calculation based on recent sessions
    const now = new Date()
    let streak = 0
    
    for (let i = 0; i < 30; i++) {
      const checkDate = new Date(now.getTime() - (i * 24 * 60 * 60 * 1000))
      const dateString = checkDate.toISOString().split('T')[0]
      
      const hasSession = studySessions.value.some(session => 
        session.date.startsWith(dateString)
      )
      
      if (hasSession) {
        streak++
      } else if (i > 0) {
        break // First gap breaks the streak (unless today has no session yet)
      }
    }
    
    return streak
  }

  const saveToStorage = () => {
    localStorage.setItem('biblestem_memory_cards', JSON.stringify({
      cards: cards.value,
      decks: decks.value,
      sessions: studySessions.value
    }))
  }

  const loadFromStorage = () => {
    const saved = localStorage.getItem('biblestem_memory_cards')
    if (saved) {
      try {
        const data = JSON.parse(saved)
        cards.value = data.cards || {}
        decks.value = data.decks || {}
        studySessions.value = data.sessions || []
        
        // If no cards loaded, initialize defaults
        if (Object.keys(cards.value).length === 0) {
          initializeDefaultCards()
          initializeDefaultDecks()
          saveToStorage()
        }
      } catch (error) {
        console.error('Error loading memory cards:', error)
        initializeDemoData()
      }
    } else {
      initializeDemoData()
    }
  }

  const initializeDemoData = () => {
    initializeDefaultCards()
    initializeDefaultDecks()
    
    // Add some demo progress
    updateCardProgress('john-3-16', true)
    updateCardProgress('john-3-16', true)
    updateCardProgress('psalm-23-1', true)
    updateCardProgress('philippians-4-13', true)
    updateCardProgress('philippians-4-13', true)
    updateCardProgress('philippians-4-13', true)
    
    saveToStorage()
  }

  return {
    cards,
    decks,
    studySessions,
    allCards,
    memorizedCards,
    reviewCards,
    newCards,
    cardsByDifficulty,
    cardsByCategory,
    getCardsForDeck,
    getDueForReview,
    addCard,
    updateCardProgress,
    createDeck,
    addCardToDeck,
    removeCardFromDeck,
    startStudySession,
    endStudySession,
    getStudyStats,
    loadFromStorage,
    initializeDemoData
  }
})
