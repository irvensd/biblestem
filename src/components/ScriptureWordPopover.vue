<template>
  <div class="relative inline-block">
    <!-- Word trigger -->
    <button
      @click="togglePopover"
      @keydown.enter="togglePopover"
      @keydown.space.prevent="togglePopover"
      :class="wordClasses"
      class="scripture-word hover:bg-primary-100 dark:hover:bg-primary-900/30 rounded-sm px-1 py-0.5 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-1"
      :aria-describedby="popoverId"
      :aria-expanded="isOpen"
      role="button"
      tabindex="0"
    >
      {{ displayText }}
    </button>

    <!-- Popover -->
    <Transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-1"
    >
      <div
        v-if="isOpen"
        :id="popoverId"
        class="absolute z-50 mt-2 p-4 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg shadow-xl min-w-[280px] max-w-[320px]"
        :class="popoverPosition"
        role="tooltip"
        @click.stop
      >
        <!-- Close button -->
        <button
          @click="closePopover"
          class="absolute top-2 right-2 w-6 h-6 flex items-center justify-center text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 rounded"
          aria-label="Close word study"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        <!-- Word info header -->
        <div class="mb-3 pr-6">
          <div class="flex items-center space-x-2 mb-1">
            <span 
              class="text-lg font-semibold"
              :class="isHebrew ? 'font-hebrew text-right' : 'font-greek'"
              :dir="isHebrew ? 'rtl' : 'ltr'"
            >
              {{ wordData.original }}
            </span>
            <span class="text-xs px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400">
              {{ isHebrew ? 'Hebrew' : 'Greek' }}
            </span>
          </div>
          <div class="text-sm text-neutral-600 dark:text-neutral-400 font-mono">
            {{ wordData.transliteration }}
          </div>
        </div>

        <!-- Strong's number -->
        <div class="mb-3">
          <div class="text-xs text-neutral-500 dark:text-neutral-400 uppercase tracking-wide font-medium mb-1">
            Strong's Number
          </div>
          <div class="flex items-center space-x-2">
            <span class="font-mono text-sm font-medium text-primary-600 dark:text-primary-400">
              {{ wordData.strongs }}
            </span>
            <button
              v-if="isPremium"
              @click="playPronunciation"
              class="w-6 h-6 flex items-center justify-center text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 rounded"
              aria-label="Play pronunciation"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.804L4.5 13.5H2a1 1 0 01-1-1v-5a1 1 0 011-1h2.5l3.883-3.304a1 1 0 011.617.804zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.983 5.983 0 01-1.757 4.243 1 1 0 01-1.415-1.414A3.983 3.983 0 0013 10a3.983 3.983 0 00-1.172-2.829 1 1 0 010-1.414z" clip-rule="evenodd"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Lemma -->
        <div class="mb-3">
          <div class="text-xs text-neutral-500 dark:text-neutral-400 uppercase tracking-wide font-medium mb-1">
            Lemma
          </div>
          <div 
            class="text-sm font-medium"
            :class="isHebrew ? 'font-hebrew text-right' : 'font-greek'"
            :dir="isHebrew ? 'rtl' : 'ltr'"
          >
            {{ wordData.lemma }}
          </div>
        </div>

        <!-- Gloss (definition) -->
        <div class="mb-3">
          <div class="text-xs text-neutral-500 dark:text-neutral-400 uppercase tracking-wide font-medium mb-1">
            Definition
          </div>
          <div class="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
            {{ wordData.gloss }}
          </div>
        </div>

        <!-- Part of speech -->
        <div class="mb-3">
          <div class="text-xs text-neutral-500 dark:text-neutral-400 uppercase tracking-wide font-medium mb-1">
            Part of Speech
          </div>
          <span class="inline-block px-2 py-1 text-xs bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-300 rounded-full">
            {{ wordData.partOfSpeech }}
          </span>
        </div>

        <!-- Premium deeper study section -->
        <div v-if="isPremium && wordData.deeperStudy" class="border-t border-neutral-200 dark:border-neutral-700 pt-3">
          <button
            @click="showDeeperStudy = !showDeeperStudy"
            class="flex items-center justify-between w-full text-left text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            <span>Deeper Study</span>
            <svg 
              class="w-4 h-4 transition-transform duration-200"
              :class="{ 'rotate-180': showDeeperStudy }"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
          
          <div v-if="showDeeperStudy" class="mt-2 space-y-2">
            <div v-if="wordData.deeperStudy.etymology" class="text-xs">
              <div class="text-neutral-500 dark:text-neutral-400 font-medium mb-1">Etymology</div>
              <div class="text-neutral-600 dark:text-neutral-400">{{ wordData.deeperStudy.etymology }}</div>
            </div>
            <div v-if="wordData.deeperStudy.frequency" class="text-xs">
              <div class="text-neutral-500 dark:text-neutral-400 font-medium mb-1">Usage Frequency</div>
              <div class="text-neutral-600 dark:text-neutral-400">{{ wordData.deeperStudy.frequency }}</div>
            </div>
            <div v-if="wordData.deeperStudy.crossReferences?.length" class="text-xs">
              <div class="text-neutral-500 dark:text-neutral-400 font-medium mb-1">Cross References</div>
              <div class="flex flex-wrap gap-1">
                <span 
                  v-for="ref in wordData.deeperStudy.crossReferences.slice(0, 3)"
                  :key="ref"
                  class="px-2 py-1 text-xs bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 rounded"
                >
                  {{ ref }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Upgrade CTA for non-premium users -->
        <div v-else-if="!isPremium && wordData.deeperStudy" class="border-t border-neutral-200 dark:border-neutral-700 pt-3">
          <div class="flex items-center space-x-2 text-xs text-neutral-500 dark:text-neutral-400">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"/>
            </svg>
            <span>Premium: Etymology, frequency, cross-references</span>
          </div>
          <button 
            @click="$emit('upgrade')"
            class="mt-2 text-xs font-medium text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300"
          >
            Upgrade to unlock →
          </button>
        </div>
      </div>
    </Transition>

    <!-- Click outside overlay -->
    <div 
      v-if="isOpen"
      class="fixed inset-0 z-40"
      @click="closePopover"
      aria-hidden="true"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

interface WordData {
  original: string
  transliteration: string
  gloss: string
  lemma: string
  strongs: string
  partOfSpeech: string
  language: 'hebrew' | 'greek'
  deeperStudy?: {
    etymology?: string
    frequency?: string
    crossReferences?: string[]
  }
}

interface Props {
  wordData: WordData
  displayText: string
  isPremium: boolean
}

const props = defineProps<Props>()

const emit = defineEmits<{
  upgrade: []
}>()

const isOpen = ref(false)
const showDeeperStudy = ref(false)
const popoverId = computed(() => `popover-${props.wordData.strongs}`)

const isHebrew = computed(() => props.wordData.language === 'hebrew')

const wordClasses = computed(() => ({
  'font-hebrew': isHebrew.value,
  'font-greek': !isHebrew.value,
  'text-primary-700 dark:text-primary-300': true,
  'cursor-pointer': true
}))

const popoverPosition = computed(() => {
  // Simple positioning - in a real app you'd calculate optimal position
  return 'left-0'
})

const togglePopover = () => {
  isOpen.value = !isOpen.value
  if (!isOpen.value) {
    showDeeperStudy.value = false
  }
}

const closePopover = () => {
  isOpen.value = false
  showDeeperStudy.value = false
}

const playPronunciation = () => {
  // In a real app, this would play audio pronunciation
  console.log(`Playing pronunciation for ${props.wordData.original}`)
}

// Close on escape key
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && isOpen.value) {
    closePopover()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
.font-hebrew {
  font-family: 'SBL Hebrew', 'Ezra SIL', 'Times New Roman', serif;
  direction: rtl;
}

.font-greek {
  font-family: 'SBL Greek', 'Times New Roman', serif;
  direction: ltr;
}

.scripture-word {
  text-decoration: underline;
  text-decoration-color: currentColor;
  text-decoration-thickness: 1px;
  text-underline-offset: 2px;
  text-decoration-style: dotted;
}
</style>
