<template>
  <Transition name="fade">
    <div 
      v-if="showIndicator"
      class="fixed bottom-4 right-4 z-50 flex items-center gap-2 px-4 py-2 rounded-lg shadow-lg text-sm font-medium transition-all"
      :class="indicatorClass"
    >
      <!-- Syncing -->
      <svg 
        v-if="isSyncing" 
        class="animate-spin h-4 w-4" 
        viewBox="0 0 24 24"
      >
        <circle 
          class="opacity-25" 
          cx="12" 
          cy="12" 
          r="10" 
          stroke="currentColor" 
          stroke-width="4" 
          fill="none"
        />
        <path 
          class="opacity-75" 
          fill="currentColor" 
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>

      <!-- Synced -->
      <svg 
        v-else-if="!hasErrors" 
        class="h-4 w-4" 
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

      <!-- Error -->
      <svg 
        v-else 
        class="h-4 w-4" 
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

      <span>{{ syncStatus }}</span>

      <!-- Retry button for errors -->
      <button 
        v-if="hasErrors"
        @click="retryAll"
        class="ml-2 text-xs underline hover:no-underline"
      >
        Retry
      </button>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useOptimisticUpdates } from '../composables/useOptimisticUpdates'

const { 
  isSyncing, 
  hasErrors, 
  syncStatus,
  failedUpdates,
  retryUpdate,
} = useOptimisticUpdates()

// Show indicator when syncing or has errors
const showIndicator = computed(() => isSyncing.value || hasErrors.value)

// Dynamic class based on sync state
const indicatorClass = computed(() => {
  if (hasErrors.value) {
    return 'bg-red-500 text-white'
  } else if (isSyncing.value) {
    return 'bg-blue-500 text-white'
  } else {
    return 'bg-green-500 text-white'
  }
})

// Retry all failed updates
const retryAll = () => {
  failedUpdates.value.forEach(update => {
    retryUpdate(update.id)
  })
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>

