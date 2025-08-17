<template>
  <div v-if="hasError" class="error-boundary">
    <div class="min-h-screen bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center p-4">
      <div class="max-w-md w-full bg-white dark:bg-neutral-800 rounded-xl shadow-xl p-8 text-center">
        <div class="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg class="w-8 h-8 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        
        <h2 class="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
          Oops! Something went wrong
        </h2>
        
        <p class="text-neutral-600 dark:text-neutral-400 mb-6 text-sm">
          We encountered an unexpected error. This has been reported to our team.
        </p>

        <div v-if="showDetails" class="mb-6 p-4 bg-neutral-100 dark:bg-neutral-700 rounded-lg text-left">
          <p class="text-xs text-neutral-600 dark:text-neutral-400 font-mono break-all">
            {{ errorMessage }}
          </p>
        </div>
        
        <div class="space-y-3">
          <button 
            @click="retry"
            class="w-full btn-primary"
          >
            Try Again
          </button>
          
          <button 
            @click="goHome"
            class="w-full btn-secondary"
          >
            Go to Home
          </button>
          
          <button 
            @click="showDetails = !showDetails"
            class="w-full text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
          >
            {{ showDetails ? 'Hide' : 'Show' }} Error Details
          </button>
        </div>
      </div>
    </div>
  </div>
  
  <div v-else>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, onErrorCaptured, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { useErrorStore } from '../stores/errors'

const router = useRouter()
const errorStore = useErrorStore()

const hasError = ref(false)
const errorMessage = ref('')
const showDetails = ref(false)

onErrorCaptured((error, instance, info) => {
  console.error('Error boundary caught error:', error)
  console.error('Component info:', info)
  
  hasError.value = true
  errorMessage.value = error.message || 'Unknown error occurred'
  
  // Report error to error store
  errorStore.handleError(error, `Component: ${info}`)
  
  // Prevent error from propagating
  return false
})

const retry = async () => {
  hasError.value = false
  errorMessage.value = ''
  showDetails.value = false
  
  // Force component re-render
  await nextTick()
}

const goHome = () => {
  hasError.value = false
  router.push('/')
}
</script>

<style scoped>
.error-boundary {
  isolation: isolate;
}
</style>
