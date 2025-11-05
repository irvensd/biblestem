<template>
  <Transition name="fade">
    <div 
      v-if="showIndicator"
      class="flex items-center gap-2 text-xs font-medium transition-all"
      :class="indicatorClass"
    >
      <!-- Saving Icon -->
      <svg 
        v-if="state === 'saving'"
        class="w-4 h-4 animate-spin"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle 
          class="opacity-25" 
          cx="12" 
          cy="12" 
          r="10" 
          stroke="currentColor" 
          stroke-width="4"
        />
        <path 
          class="opacity-75" 
          fill="currentColor" 
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
      
      <!-- Saved Icon -->
      <svg 
        v-else-if="state === 'saved'"
        class="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          stroke-width="2" 
          d="M5 13l4 4L19 7"
        />
      </svg>
      
      <!-- Error Icon -->
      <svg 
        v-else-if="state === 'error'"
        class="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          stroke-width="2" 
          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      
      <span>{{ message }}</span>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { computed } from 'vue'

export type AutoSaveState = 'idle' | 'saving' | 'saved' | 'error'

interface Props {
  state?: AutoSaveState
  customMessage?: string
}

const props = withDefaults(defineProps<Props>(), {
  state: 'idle',
})

const showIndicator = computed(() => props.state !== 'idle')

const message = computed(() => {
  if (props.customMessage) return props.customMessage
  
  switch (props.state) {
    case 'saving':
      return 'Saving...'
    case 'saved':
      return 'All changes saved'
    case 'error':
      return 'Save failed'
    default:
      return ''
  }
})

const indicatorClass = computed(() => {
  switch (props.state) {
    case 'saving':
      return 'text-blue-600 dark:text-blue-400'
    case 'saved':
      return 'text-green-600 dark:text-green-400'
    case 'error':
      return 'text-red-600 dark:text-red-400'
    default:
      return 'text-neutral-500 dark:text-neutral-400'
  }
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

