<template>
  <div class="relative inline-block">
    <!-- Word trigger -->
    <span
      @click="togglePopover"
      @mouseenter="showPopover"
      @mouseleave="hidePopover"
      class="underline decoration-2 decoration-primary-400 cursor-pointer hover:decoration-primary-600 transition-colors"
      :class="getLanguageColor()"
    >
      {{ word.word }}
    </span>

    <!-- Popover -->
    <div
      v-if="isVisible"
      class="absolute z-50 w-80 p-4 bg-white dark:bg-neutral-800 rounded-xl shadow-xl border border-neutral-200 dark:border-neutral-700"
      :class="popoverPosition"
    >
      <!-- Close button for mobile -->
      <button
        @click="hidePopover"
        class="absolute top-2 right-2 w-6 h-6 flex items-center justify-center rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors sm:hidden"
      >
        <svg
          class="w-4 h-4 text-neutral-600 dark:text-neutral-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <!-- Language badge -->
      <div class="flex items-center justify-between mb-3">
        <span
          class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium"
          :class="getLanguageBadgeColor()"
        >
          {{ word.language }}
        </span>

        <!-- Audio pronunciation button -->
        <button
          @click="playPronunciation"
          class="flex items-center space-x-1 px-2 py-1 text-xs text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M9 12a3 3 0 106 0 3 3 0 00-6 0zm-7 0a13 13 0 0113-13 13 13 0 01-13 13 13 13 0 010-26z"
            />
          </svg>
          <span>Listen</span>
        </button>
      </div>

      <!-- Word information -->
      <div class="space-y-3">
        <!-- Original word -->
        <div>
          <div class="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
            Original Word
          </div>
          <div
            class="text-lg font-bold text-neutral-900 dark:text-neutral-100"
            :dir="word.language === 'Hebrew' ? 'rtl' : 'ltr'"
          >
            {{ word.word }}
          </div>
        </div>

        <!-- Transliteration -->
        <div>
          <div class="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
            Transliteration
          </div>
          <div class="text-base text-neutral-800 dark:text-neutral-200 italic">
            {{ word.transliteration }}
          </div>
        </div>

        <!-- Meaning -->
        <div>
          <div class="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Meaning</div>
          <div class="text-sm text-neutral-800 dark:text-neutral-200">
            {{ word.meaning }}
          </div>
        </div>

        <!-- Context -->
        <div>
          <div class="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Context</div>
          <div class="text-sm text-neutral-600 dark:text-neutral-400">
            {{ word.context }}
          </div>
        </div>

        <!-- References -->
        <div v-if="word.references.length > 0">
          <div class="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
            Biblical References
          </div>
          <div class="flex flex-wrap gap-1">
            <span
              v-for="reference in word.references"
              :key="reference"
              class="inline-block px-2 py-1 text-xs bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded"
            >
              {{ reference }}
            </span>
          </div>
        </div>
      </div>

      <!-- Bottom note -->
      <div class="mt-4 pt-3 border-t border-neutral-200 dark:border-neutral-700">
        <div class="text-xs text-neutral-500 dark:text-neutral-500 text-center">
          Tap words in Scripture to see original language insights
        </div>
      </div>

      <!-- Popover arrow -->
      <div
        class="absolute w-3 h-3 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 transform rotate-45"
        :class="arrowPosition"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { GreekHebrewWord } from '../data/studies'

interface Props {
  word: GreekHebrewWord
  position?: 'top' | 'bottom' | 'left' | 'right'
}

const props = withDefaults(defineProps<Props>(), {
  position: 'top',
})

const isVisible = ref(false)
const isMobile = ref(window.innerWidth < 768)

// Position classes for the popover
const popoverPosition = computed(() => {
  switch (props.position) {
    case 'top':
      return 'bottom-full left-1/2 transform -translate-x-1/2 mb-2'
    case 'bottom':
      return 'top-full left-1/2 transform -translate-x-1/2 mt-2'
    case 'left':
      return 'right-full top-1/2 transform -translate-y-1/2 mr-2'
    case 'right':
      return 'left-full top-1/2 transform -translate-y-1/2 ml-2'
    default:
      return 'bottom-full left-1/2 transform -translate-x-1/2 mb-2'
  }
})

// Arrow position classes
const arrowPosition = computed(() => {
  switch (props.position) {
    case 'top':
      return 'top-full left-1/2 transform -translate-x-1/2 -mt-px'
    case 'bottom':
      return 'bottom-full left-1/2 transform -translate-x-1/2 -mb-px'
    case 'left':
      return 'left-full top-1/2 transform -translate-y-1/2 -ml-px'
    case 'right':
      return 'right-full top-1/2 transform -translate-y-1/2 -mr-px'
    default:
      return 'top-full left-1/2 transform -translate-x-1/2 -mt-px'
  }
})

const showPopover = () => {
  if (!isMobile.value) {
    isVisible.value = true
  }
}

const hidePopover = () => {
  if (!isMobile.value) {
    isVisible.value = false
  }
}

const togglePopover = () => {
  isVisible.value = !isVisible.value
}

const getLanguageColor = () => {
  switch (props.word.language) {
    case 'Greek':
      return 'text-blue-700 dark:text-blue-400'
    case 'Hebrew':
      return 'text-amber-700 dark:text-amber-400'
    case 'Aramaic':
      return 'text-purple-700 dark:text-purple-400'
    default:
      return 'text-primary-700 dark:text-primary-400'
  }
}

const getLanguageBadgeColor = () => {
  switch (props.word.language) {
    case 'Greek':
      return 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
    case 'Hebrew':
      return 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300'
    case 'Aramaic':
      return 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300'
    default:
      return 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
  }
}

const playPronunciation = () => {
  // In a real app, this would play audio pronunciation
  // For now, we'll just show a message
  console.log(`Playing pronunciation for: ${props.word.transliteration}`)

  // You could integrate with a text-to-speech API or audio files here
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(props.word.transliteration)
    utterance.rate = 0.7
    utterance.pitch = 1
    speechSynthesis.speak(utterance)
  }
}

// Close popover when clicking outside
document.addEventListener('click', (event) => {
  const target = event.target as HTMLElement
  if (!target.closest('.relative.inline-block')) {
    isVisible.value = false
  }
})
</script>

<style scoped>
/* Custom styling for Hebrew text direction */
[dir='rtl'] {
  font-family: 'SBL Hebrew', 'Times New Roman', serif;
}
</style>
