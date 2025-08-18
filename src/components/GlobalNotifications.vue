<template>
  <!-- Global Loading Overlay -->
  <Transition name="fade">
    <div
      v-if="safeIsLoading && showGlobalLoader"
      class="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center"
    >
      <div
        class="bg-white dark:bg-neutral-800 rounded-xl shadow-xl p-6 flex items-center space-x-4"
      >
        <div class="animate-spin rounded-full h-6 w-6 border-b-2 border-primary-600"></div>
        <span class="text-neutral-900 dark:text-neutral-100 font-medium">Loading...</span>
      </div>
    </div>
  </Transition>

  <!-- Error Notifications -->
  <div class="fixed top-4 right-4 z-40 space-y-3 max-w-sm">
    <TransitionGroup name="slide-fade" tag="div">
      <div
        v-for="error in safeErrors"
        :key="error.id"
        class="bg-white dark:bg-neutral-800 rounded-lg shadow-lg border-l-4 p-4 max-w-sm"
        :class="getErrorClasses(error.type)"
      >
        <div class="flex items-start space-x-3">
          <div class="flex-shrink-0">
            <svg
              v-if="error.type === 'error'"
              class="w-5 h-5 text-red-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clip-rule="evenodd"
              />
            </svg>
            <svg
              v-else-if="error.type === 'warning'"
              class="w-5 h-5 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                clip-rule="evenodd"
              />
            </svg>
            <svg v-else class="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clip-rule="evenodd"
              />
            </svg>
          </div>

          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-neutral-900 dark:text-neutral-100">
              {{ error.message }}
            </p>

            <p v-if="error.code" class="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
              Code: {{ error.code }}
            </p>

            <div
              v-if="error.details?.field"
              class="text-xs text-neutral-500 dark:text-neutral-400 mt-1"
            >
              Field: {{ error.details.field }}
            </div>
          </div>

          <button
            @click="errorStore.value?.removeError?.(error.id)"
            class="flex-shrink-0 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'

interface Props {
  showGlobalLoader?: boolean
}

withDefaults(defineProps<Props>(), {
  showGlobalLoader: true,
})

// Safe store initialization with refs
const errorStore = ref<any>(null)
const loadingStore = ref<any>(null)

// Safe computed properties for accessing store data
const safeErrors = computed(() => errorStore.value?.errors || [])
const safeIsLoading = computed(() => loadingStore.value?.isLoading?.value || false)

// Initialize stores when component mounts
onMounted(() => {
  try {
    errorStore.value = useErrorStore()
    loadingStore.value = useLoadingStore()
  } catch (error) {
    console.warn('Failed to initialize stores in GlobalNotifications:', error)
  }
})

const getErrorClasses = (type: 'error' | 'warning' | 'info') => {
  switch (type) {
    case 'error':
      return 'border-l-red-500 bg-red-50 dark:bg-red-900/10'
    case 'warning':
      return 'border-l-yellow-500 bg-yellow-50 dark:bg-yellow-900/10'
    case 'info':
      return 'border-l-blue-500 bg-blue-50 dark:bg-blue-900/10'
    default:
      return 'border-l-neutral-500 bg-neutral-50 dark:bg-neutral-900/10'
  }
}
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

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-in;
}

.slide-fade-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.slide-fade-move {
  transition: transform 0.3s ease;
}
</style>
