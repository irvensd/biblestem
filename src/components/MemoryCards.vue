<template>
  <div class="card p-4 sm:p-6">
    <div class="flex items-center justify-between mb-4 sm:mb-6">
      <h2 class="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-100">
        Scripture Memory
      </h2>
      <button
        @click="showMemorySystem = true"
        class="text-primary-600 hover:text-primary-700 font-medium text-sm"
      >
        Practice →
      </button>
    </div>

    <!-- Quick Stats -->
    <div class="grid grid-cols-3 gap-3 mb-4 sm:mb-6">
      <div
        class="text-center p-3 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg"
      >
        <div class="text-lg sm:text-xl font-bold text-blue-600 dark:text-blue-400">
          {{ memoryStats.memorizedCount }}
        </div>
        <div class="text-xs text-blue-600 dark:text-blue-400">Memorized</div>
      </div>
      <div
        class="text-center p-3 bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20 rounded-lg"
      >
        <div class="text-lg sm:text-xl font-bold text-amber-600 dark:text-amber-400">
          {{ memoryStats.dueCount }}
        </div>
        <div class="text-xs text-amber-600 dark:text-amber-400">Due Today</div>
      </div>
      <div
        class="text-center p-3 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg"
      >
        <div class="text-lg sm:text-xl font-bold text-green-600 dark:text-green-400">
          {{ memoryStats.streakDays }}
        </div>
        <div class="text-xs text-green-600 dark:text-green-400">Day Streak</div>
      </div>
    </div>

    <!-- Quick Practice -->
    <div v-if="dueCards.length > 0" class="mb-4 sm:mb-6">
      <h3 class="font-semibold text-neutral-900 dark:text-neutral-100 text-sm mb-3">
        Ready to Practice
      </h3>
      <div class="space-y-2">
        <div
          v-for="card in dueCards.slice(0, 3)"
          :key="card.id"
          class="flex items-center justify-between p-3 bg-neutral-50 dark:bg-neutral-800 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors cursor-pointer"
          @click="startCardPractice(card.id)"
        >
          <div class="flex-1 min-w-0">
            <div class="font-medium text-neutral-900 dark:text-neutral-100 text-sm">
              {{ card.reference }}
            </div>
            <div class="text-xs text-neutral-600 dark:text-neutral-400 truncate">
              {{ card.text.substring(0, 50) }}...
            </div>
            <div class="flex items-center space-x-2 mt-1">
              <span class="text-xs px-2 py-1 rounded" :class="getDifficultyClass(card.difficulty)">
                {{ card.difficulty }}
              </span>
              <div class="flex items-center space-x-1">
                <div
                  v-for="i in 5"
                  :key="i"
                  class="w-1 h-1 rounded-full"
                  :class="
                    i <= card.confidence ? 'bg-amber-400' : 'bg-neutral-300 dark:bg-neutral-600'
                  "
                ></div>
              </div>
            </div>
          </div>
          <button class="ml-3 text-primary-600 hover:text-primary-700 text-xs font-medium">
            Practice
          </button>
        </div>
      </div>
    </div>

    <!-- Memory Decks -->
    <div class="space-y-3">
      <h3 class="font-semibold text-neutral-900 dark:text-neutral-100 text-sm">Memory Decks</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div
          v-for="deck in Object.values(memoryStore.decks).slice(0, 4)"
          :key="deck.id"
          class="group p-3 border border-neutral-200 dark:border-neutral-700 rounded-lg hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-200 cursor-pointer"
          @click="showDeckDetail(deck)"
        >
          <div class="flex items-center space-x-3">
            <div
              class="w-8 h-8 rounded-lg bg-gradient-to-br flex items-center justify-center"
              :class="deck.color"
            >
              <span class="text-sm">{{ deck.icon }}</span>
            </div>
            <div class="flex-1 min-w-0">
              <h4 class="font-medium text-neutral-900 dark:text-neutral-100 text-xs truncate">
                {{ deck.title }}
              </h4>
              <p class="text-xs text-neutral-600 dark:text-neutral-400 truncate">
                {{ deck.cardIds.length }} verses
              </p>
            </div>
            <div class="text-xs text-neutral-500 dark:text-neutral-500">
              {{ getCompletedCardsInDeck(deck.id) }}/{{ deck.cardIds.length }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Memory System Modal -->
    <div
      v-if="showMemorySystem"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      @click="showMemorySystem = false"
    >
      <div
        class="bg-white dark:bg-neutral-800 rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        @click.stop
      >
        <div class="p-6 border-b border-neutral-200 dark:border-neutral-700">
          <div class="flex items-center justify-between">
            <h3 class="text-xl font-bold text-neutral-900 dark:text-neutral-100">
              Scripture Memory System
            </h3>
            <button
              @click="showMemorySystem = false"
              class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        <div class="p-6">
          <!-- Practice Mode Selection -->
          <div v-if="!currentStudySession" class="space-y-6">
            <!-- Study Stats -->
            <div class="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div class="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                <div class="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {{ memoryStats.totalCards }}
                </div>
                <div class="text-sm text-blue-600 dark:text-blue-400">Total Verses</div>
              </div>
              <div class="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
                <div class="text-2xl font-bold text-green-600 dark:text-green-400">
                  {{ memoryStats.memorizedCount }}
                </div>
                <div class="text-sm text-green-600 dark:text-green-400">Mastered</div>
              </div>
              <div class="text-center p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl">
                <div class="text-2xl font-bold text-amber-600 dark:text-amber-400">
                  {{ memoryStats.accuracy }}%
                </div>
                <div class="text-sm text-amber-600 dark:text-amber-400">Accuracy</div>
              </div>
              <div class="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                <div class="text-2xl font-bold text-purple-600 dark:text-purple-400">
                  {{ memoryStats.streakDays }}
                </div>
                <div class="text-sm text-purple-600 dark:text-purple-400">Day Streak</div>
              </div>
            </div>

            <!-- Practice Options -->
            <div class="space-y-4">
              <h4 class="font-semibold text-neutral-900 dark:text-neutral-100">
                Choose Practice Mode
              </h4>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  @click="startPracticeSession('review')"
                  class="p-4 text-left border border-neutral-200 dark:border-neutral-700 rounded-xl hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-200"
                  :disabled="dueCards.length === 0"
                >
                  <div class="flex items-center space-x-3">
                    <div
                      class="w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center"
                    >
                      <span class="text-lg">🔄</span>
                    </div>
                    <div>
                      <div class="font-medium text-neutral-900 dark:text-neutral-100">
                        Review Mode
                      </div>
                      <div class="text-sm text-neutral-600 dark:text-neutral-400">
                        {{ dueCards.length }} verses due for review
                      </div>
                    </div>
                  </div>
                </button>

                <button
                  @click="startPracticeSession('new')"
                  class="p-4 text-left border border-neutral-200 dark:border-neutral-700 rounded-xl hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-200"
                  :disabled="newCards.length === 0"
                >
                  <div class="flex items-center space-x-3">
                    <div
                      class="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center"
                    >
                      <span class="text-lg">✨</span>
                    </div>
                    <div>
                      <div class="font-medium text-neutral-900 dark:text-neutral-100">
                        Learn New
                      </div>
                      <div class="text-sm text-neutral-600 dark:text-neutral-400">
                        {{ newCards.length }} new verses to learn
                      </div>
                    </div>
                  </div>
                </button>

                <button
                  @click="startPracticeSession('random')"
                  class="p-4 text-left border border-neutral-200 dark:border-neutral-700 rounded-xl hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-200"
                >
                  <div class="flex items-center space-x-3">
                    <div
                      class="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center"
                    >
                      <span class="text-lg">🎲</span>
                    </div>
                    <div>
                      <div class="font-medium text-neutral-900 dark:text-neutral-100">
                        Random Practice
                      </div>
                      <div class="text-sm text-neutral-600 dark:text-neutral-400">
                        Mix of all verses
                      </div>
                    </div>
                  </div>
                </button>

                <button
                  @click="showDeckSelector = true"
                  class="p-4 text-left border border-neutral-200 dark:border-neutral-700 rounded-xl hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-200"
                >
                  <div class="flex items-center space-x-3">
                    <div
                      class="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center"
                    >
                      <span class="text-lg">📚</span>
                    </div>
                    <div>
                      <div class="font-medium text-neutral-900 dark:text-neutral-100">By Deck</div>
                      <div class="text-sm text-neutral-600 dark:text-neutral-400">
                        Choose specific topics
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <!-- Practice Session -->
          <div v-else class="space-y-6">
            <StudyFlashcard
              :card="currentCard"
              :session-stats="sessionStats"
              @answer="handleAnswer"
              @skip="skipCard"
              @end-session="endCurrentSession"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Deck Detail Modal -->
    <div
      v-if="selectedDeck"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      @click="selectedDeck = null"
    >
      <div
        class="bg-white dark:bg-neutral-800 rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        @click.stop
      >
        <div class="p-6 border-b border-neutral-200 dark:border-neutral-700">
          <div class="flex items-start justify-between">
            <div class="flex items-start space-x-3">
              <div
                class="w-12 h-12 rounded-lg bg-gradient-to-br flex items-center justify-center"
                :class="selectedDeck.color"
              >
                <span class="text-xl">{{ selectedDeck.icon }}</span>
              </div>
              <div>
                <h3 class="text-xl font-bold text-neutral-900 dark:text-neutral-100">
                  {{ selectedDeck.title }}
                </h3>
                <p class="text-neutral-600 dark:text-neutral-400 text-sm mt-1">
                  {{ selectedDeck.description }}
                </p>
                <div class="text-sm text-neutral-500 dark:text-neutral-500 mt-1">
                  {{ selectedDeck.cardIds.length }} verses •
                  {{ getCompletedCardsInDeck(selectedDeck.id) }} mastered
                </div>
              </div>
            </div>
            <button
              @click="selectedDeck = null"
              class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        <div class="p-6 space-y-4">
          <div class="flex items-center justify-between">
            <h4 class="font-semibold text-neutral-900 dark:text-neutral-100">
              Verses in this deck
            </h4>
            <button @click="startDeckPractice(selectedDeck.id)" class="btn-primary text-sm">
              Practice Deck
            </button>
          </div>

          <div class="space-y-2">
            <div
              v-for="card in getDeckCards(selectedDeck.id)"
              :key="card.id"
              class="p-3 border border-neutral-200 dark:border-neutral-700 rounded-lg"
            >
              <div class="flex items-start justify-between">
                <div class="flex-1 min-w-0">
                  <div class="font-medium text-neutral-900 dark:text-neutral-100 text-sm">
                    {{ card.reference }}
                  </div>
                  <div class="text-xs text-neutral-600 dark:text-neutral-400 mt-1 line-clamp-2">
                    {{ card.text }}
                  </div>
                  <div class="flex items-center space-x-2 mt-2">
                    <span
                      class="text-xs px-2 py-1 rounded"
                      :class="getDifficultyClass(card.difficulty)"
                    >
                      {{ card.difficulty }}
                    </span>
                    <div class="flex items-center space-x-1">
                      <div
                        v-for="i in 5"
                        :key="i"
                        class="w-1 h-1 rounded-full"
                        :class="
                          i <= card.confidence
                            ? 'bg-amber-400'
                            : 'bg-neutral-300 dark:bg-neutral-600'
                        "
                      ></div>
                    </div>
                    <span v-if="card.isMemorized" class="text-xs text-green-600 dark:text-green-400"
                      >✓ Mastered</span
                    >
                  </div>
                </div>
                <button
                  @click="startCardPractice(card.id)"
                  class="ml-3 text-primary-600 hover:text-primary-700 text-xs font-medium"
                >
                  Practice
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useMemoryCardsStore } from '../stores/memoryCards'
import type { MemoryCard, MemoryDeck } from '../stores/memoryCards'
import StudyFlashcard from './StudyFlashcard.vue'

const memoryStore = useMemoryCardsStore()

const showMemorySystem = ref(false)
const selectedDeck = ref<MemoryDeck | null>(null)
const showDeckSelector = ref(false)
const currentStudySession = ref<string | null>(null)
const currentCard = ref<MemoryCard | null>(null)
const sessionStats = ref({ current: 0, total: 0, correct: 0 })

const memoryStats = computed(() => memoryStore.getStudyStats())
const dueCards = computed(() => memoryStore.getDueForReview())
const newCards = computed(() => memoryStore.newCards)

const startCardPractice = (cardId: string) => {
  const card = memoryStore.cards[cardId]
  if (card) {
    currentCard.value = card
    currentStudySession.value = memoryStore.startStudySession([cardId])
    sessionStats.value = { current: 1, total: 1, correct: 0 }
    showMemorySystem.value = true
  }
}

const startPracticeSession = (mode: 'review' | 'new' | 'random') => {
  let cards: MemoryCard[] = []

  switch (mode) {
    case 'review':
      cards = dueCards.value.slice(0, 10)
      break
    case 'new':
      cards = newCards.value.slice(0, 5)
      break
    case 'random':
      cards = memoryStore.allCards
        .slice()
        .sort(() => Math.random() - 0.5)
        .slice(0, 10)
      break
  }

  if (cards.length > 0) {
    currentStudySession.value = memoryStore.startStudySession(cards.map((c) => c.id))
    currentCard.value = cards[0]
    sessionStats.value = { current: 1, total: cards.length, correct: 0 }
  }
}

const startDeckPractice = (deckId: string) => {
  const cards = memoryStore.getCardsForDeck(deckId)
  if (cards.length > 0) {
    currentStudySession.value = memoryStore.startStudySession(cards.map((c) => c.id))
    currentCard.value = cards[0]
    sessionStats.value = { current: 1, total: cards.length, correct: 0 }
    selectedDeck.value = null
  }
}

const handleAnswer = (wasCorrect: boolean) => {
  if (currentCard.value) {
    memoryStore.updateCardProgress(currentCard.value.id, wasCorrect)

    if (wasCorrect) {
      sessionStats.value.correct++
    }

    // Move to next card or end session
    const sessionCards = currentStudySession.value
      ? memoryStore.studySessions.find((s) => s.id === currentStudySession.value)?.cardsStudied ||
        []
      : []

    const nextIndex = sessionStats.value.current
    if (nextIndex < sessionCards.length) {
      currentCard.value = memoryStore.cards[sessionCards[nextIndex]]
      sessionStats.value.current++
    } else {
      endCurrentSession()
    }
  }
}

const skipCard = () => {
  handleAnswer(false)
}

const endCurrentSession = () => {
  if (currentStudySession.value) {
    memoryStore.endStudySession(
      currentStudySession.value,
      sessionStats.value.correct,
      5, // Mock duration
    )
  }
  currentStudySession.value = null
  currentCard.value = null
  sessionStats.value = { current: 0, total: 0, correct: 0 }
  showMemorySystem.value = false
}

const showDeckDetail = (deck: MemoryDeck) => {
  selectedDeck.value = deck
}

const getDeckCards = (deckId: string): MemoryCard[] => {
  return memoryStore.getCardsForDeck(deckId)
}

const getCompletedCardsInDeck = (deckId: string): number => {
  const cards = memoryStore.getCardsForDeck(deckId)
  return cards.filter((card) => card.isMemorized).length
}

const getDifficultyClass = (difficulty: string) => {
  switch (difficulty) {
    case 'easy':
      return 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
    case 'medium':
      return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400'
    case 'hard':
      return 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400'
    default:
      return 'bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400'
  }
}

onMounted(() => {
  memoryStore.loadFromStorage()
})
</script>
