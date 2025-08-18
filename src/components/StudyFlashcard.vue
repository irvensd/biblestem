<template>
  <div class="max-w-2xl mx-auto">
    <!-- Progress Header -->
    <div class="mb-6">
      <div
        class="flex items-center justify-between text-sm text-neutral-600 dark:text-neutral-400 mb-2"
      >
        <span>Progress</span>
        <span>{{ sessionStats.current }} / {{ sessionStats.total }}</span>
      </div>
      <div class="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
        <div
          class="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full transition-all duration-300"
          :style="`width: ${(sessionStats.current / sessionStats.total) * 100}%`"
        ></div>
      </div>
      <div class="text-center mt-2">
        <span class="text-sm text-neutral-600 dark:text-neutral-400">
          Accuracy:
          {{
            sessionStats.total > 0
              ? Math.round((sessionStats.correct / sessionStats.current) * 100)
              : 0
          }}%
        </span>
      </div>
    </div>

    <!-- Flashcard -->
<<<<<<< HEAD
    <div class="relative">
      <div
        class="card p-8 cursor-pointer transition-all duration-300 hover:scale-105 min-h-[300px] flex flex-col justify-center"
=======
    <div class="relative perspective-1000">
      <div
        class="card-container relative w-full min-h-[300px] cursor-pointer touch-manipulation"
        :class="{ flipped: isFlipped, 'touch-active': isTouching }"
>>>>>>> refs/remotes/origin/main
        @click="flipCard"
        @touchstart="handleTouchStart"
        @touchend="handleTouchEnd"
        @touchcancel="handleTouchEnd"
      >
        <!-- Front Side (Reference) -->
<<<<<<< HEAD
        <div v-if="!isFlipped" class="text-center space-y-4">
          <div class="text-sm text-neutral-600 dark:text-neutral-400">What verse is this?</div>

          <div class="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-100">
            {{ card?.reference }}
          </div>

          <div class="text-sm text-neutral-500 dark:text-neutral-500">
            Click to reveal the verse
          </div>

          <!-- Card Info -->
          <div class="flex items-center justify-center space-x-3 mt-6">
            <span
              class="text-xs px-2 py-1 rounded"
              :class="getDifficultyClass(card?.difficulty || 'medium')"
            >
              {{ card?.difficulty }}
            </span>
            <span
              class="text-xs px-2 py-1 rounded bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400"
            >
              {{ card?.category }}
            </span>
            <div class="flex items-center space-x-1">
              <span class="text-xs text-neutral-600 dark:text-neutral-400">Confidence:</span>
              <div class="flex items-center space-x-1">
                <div
                  v-for="i in 5"
                  :key="i"
                  class="w-2 h-2 rounded-full"
                  :class="
                    i <= (card?.confidence || 1)
                      ? 'bg-amber-400'
                      : 'bg-neutral-300 dark:bg-neutral-600'
                  "
                ></div>
=======
        <div
          class="card-face card-front card p-8 absolute inset-0 flex flex-col justify-center backface-hidden"
        >
          <div class="text-center space-y-4">
            <div class="text-sm text-neutral-600 dark:text-neutral-400">What verse is this?</div>

            <div class="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-100">
              {{ card?.reference }}
            </div>

            <div class="text-sm text-neutral-500 dark:text-neutral-500">
              Click to reveal the verse
            </div>

            <!-- Card Info -->
            <div class="flex items-center justify-center space-x-3 mt-6">
              <span
                class="text-xs px-2 py-1 rounded"
                :class="getDifficultyClass(card?.difficulty || 'medium')"
              >
                {{ card?.difficulty }}
              </span>
              <span
                class="text-xs px-2 py-1 rounded bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400"
              >
                {{ card?.category }}
              </span>
              <div class="flex items-center space-x-1">
                <span class="text-xs text-neutral-600 dark:text-neutral-400">Confidence:</span>
                <div class="flex items-center space-x-1">
                  <div
                    v-for="i in 5"
                    :key="i"
                    class="w-2 h-2 rounded-full"
                    :class="
                      i <= (card?.confidence || 1)
                        ? 'bg-amber-400'
                        : 'bg-neutral-300 dark:bg-neutral-600'
                    "
                  ></div>
                </div>
>>>>>>> refs/remotes/origin/main
              </div>
            </div>
          </div>

          <!-- Flip Indicator -->
          <div class="absolute top-4 right-4 text-neutral-400">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
              />
            </svg>
          </div>
        </div>

        <!-- Back Side (Verse Text) -->
<<<<<<< HEAD
        <div v-else class="text-center space-y-6">
          <div class="text-sm text-neutral-600 dark:text-neutral-400">
            {{ card?.reference }}
          </div>

          <div
            class="text-lg sm:text-xl leading-relaxed text-neutral-900 dark:text-neutral-100 font-medium"
          >
            "{{ card?.text }}"
          </div>

          <div class="text-sm text-neutral-500 dark:text-neutral-500">
            How well did you remember this verse?
=======
        <div
          class="card-face card-back card p-8 absolute inset-0 flex flex-col justify-center backface-hidden"
        >
          <div class="text-center space-y-6">
            <div class="text-sm text-neutral-600 dark:text-neutral-400">
              {{ card?.reference }}
            </div>

            <div
              class="text-lg sm:text-xl leading-relaxed text-neutral-900 dark:text-neutral-100 font-medium"
            >
              "{{ card?.text }}"
            </div>

            <div class="text-sm text-neutral-500 dark:text-neutral-500">
              How well did you remember this verse?
            </div>

            <!-- Answer Buttons -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8">
              <button
                @click.stop="handleAnswer(false)"
                class="p-3 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors font-medium"
              >
                😓 Need Practice
              </button>
              <button
                @click.stop="handleAnswer(true)"
                class="p-3 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 rounded-lg hover:bg-yellow-200 dark:hover:bg-yellow-900/50 transition-colors font-medium"
              >
                🤔 Almost There
              </button>
              <button
                @click.stop="handleAnswer(true)"
                class="p-3 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors font-medium"
              >
                🎯 Perfect!
              </button>
            </div>
>>>>>>> refs/remotes/origin/main
          </div>

          <!-- Flip Indicator -->
          <div class="absolute top-4 right-4 text-neutral-400">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
              />
            </svg>
          </div>
        </div>
<<<<<<< HEAD

        <!-- Flip Indicator -->
        <div class="absolute top-4 right-4 text-neutral-400">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
            />
          </svg>
        </div>
=======
>>>>>>> refs/remotes/origin/main
      </div>
    </div>

    <!-- Action Buttons -->
    <div class="flex items-center justify-between mt-6">
      <button @click="$emit('skip')" class="btn-secondary text-sm">Skip for Now</button>

      <div class="flex items-center space-x-2">
        <button
          v-if="sessionStats.current > 1"
          @click="previousCard"
          class="p-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
          disabled
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <span class="text-sm text-neutral-600 dark:text-neutral-400">
          {{ sessionStats.current }} of {{ sessionStats.total }}
        </span>

        <button
          v-if="sessionStats.current < sessionStats.total"
          @click="nextCard"
          class="p-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
          disabled
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <button @click="$emit('end-session')" class="btn-secondary text-sm">End Session</button>
    </div>

    <!-- Study Tips -->
    <div
      class="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800"
    >
      <h4 class="font-semibold text-blue-800 dark:text-blue-200 text-sm mb-2">💡 Memory Tips</h4>
      <div class="space-y-1 text-xs text-blue-600 dark:text-blue-400">
        <p>• Try to visualize the scene or create mental images</p>
        <p>• Break longer verses into smaller chunks</p>
        <p>• Focus on keywords and their connections</p>
        <p>• Practice writing the verse from memory</p>
      </div>
    </div>

    <!-- Verse Context -->
    <div v-if="card?.theme" class="mt-4 p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
      <h4 class="font-semibold text-neutral-900 dark:text-neutral-100 text-sm mb-2">
        📖 Theme: {{ card.theme }}
      </h4>
      <div class="text-xs text-neutral-600 dark:text-neutral-400">
        This verse teaches us about {{ card.theme.toLowerCase() }} and how we can apply biblical
        principles to our daily lives.
      </div>
    </div>

    <!-- Session Complete Modal -->
    <div
      v-if="showSessionComplete"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
    >
      <div
        class="bg-white dark:bg-neutral-800 rounded-xl shadow-xl max-w-md w-full p-6 text-center"
      >
        <div
          class="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <span class="text-2xl">🎉</span>
        </div>

        <h3 class="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">Great Work!</h3>

        <p class="text-neutral-600 dark:text-neutral-400 text-sm mb-4">
          You completed {{ sessionStats.total }} verses with
          {{ Math.round((sessionStats.correct / sessionStats.total) * 100) }}% accuracy!
        </p>

        <div class="space-y-3">
          <button @click="startNewSession" class="w-full btn-primary">Practice More</button>
          <button @click="$emit('end-session')" class="w-full btn-secondary">Finish</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import type { MemoryCard } from '../stores/memoryCards'

interface Props {
  card: MemoryCard | null
  sessionStats: {
    current: number
    total: number
    correct: number
  }
}

const props = defineProps<Props>()
const emit = defineEmits(['answer', 'skip', 'end-session'])

const isFlipped = ref(false)
const showSessionComplete = ref(false)
const isTouching = ref(false)

const flipCard = () => {
  isFlipped.value = !isFlipped.value
}

const handleTouchStart = (event: TouchEvent) => {
  isTouching.value = true
  // Prevent default to avoid conflicts with click
  event.preventDefault()
}

const handleTouchEnd = (event: TouchEvent) => {
  isTouching.value = false
  // Only flip if this was a tap (not a scroll or swipe)
  if (event.type === 'touchend') {
    flipCard()
  }
}

const handleAnswer = (wasCorrect: boolean) => {
  emit('answer', wasCorrect)
  isFlipped.value = false

  // Check if session is complete
  if (props.sessionStats.current >= props.sessionStats.total) {
    showSessionComplete.value = true
  }
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

const nextCard = () => {
  // This would be handled by parent component
}

const previousCard = () => {
  // This would be handled by parent component
}

const startNewSession = () => {
  showSessionComplete.value = false
  // This would trigger a new session in parent
}

// Reset flip state when card changes
watch(
  () => props.card,
  () => {
    isFlipped.value = false
    showSessionComplete.value = false
  },
)
</script>

<style scoped>
<<<<<<< HEAD
/* Card flip styles removed - using simple content toggle instead */
=======
/* 3D Card Flip Animation */
.perspective-1000 {
  perspective: 1000px;
}

.card-container {
  transform-style: preserve-3d;
  transition: transform 0.6s ease-in-out;
}

.card-container.flipped {
  transform: rotateY(180deg);
}

.card-face {
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

.card-front {
  transform: rotateY(0deg);
}

.card-back {
  transform: rotateY(180deg);
}

.backface-hidden {
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

/* Hover effect for non-flipped state */
.card-container:not(.flipped):hover {
  transform: scale(1.05);
}

.card-container.flipped:hover {
  transform: rotateY(180deg) scale(1.05);
}

/* Touch interactions */
.card-container.touch-active {
  transform: scale(0.98);
  transition: transform 0.1s ease;
}

.card-container.touch-active.flipped {
  transform: rotateY(180deg) scale(0.98);
}

/* Better mobile touch target */
@media (max-width: 768px) {
  .card-container {
    min-height: 280px;
    touch-action: manipulation;
  }

  .card-face {
    padding: 1.5rem;
  }
}
>>>>>>> refs/remotes/origin/main
</style>
