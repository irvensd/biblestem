<template>
  <div v-if="hasError" class="error-boundary">
    <!-- Error Display -->
    <div class="error-container">
      <div class="error-icon">
        <svg class="w-16 h-16 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
          />
        </svg>
      </div>
      
      <div class="error-content">
        <h2 class="error-title">Oops! Something went wrong</h2>
        <p class="error-message">
          {{ userFriendlyMessage }}
        </p>
        
        <!-- Error Details (Development Only) -->
        <details v-if="isDevelopment" class="error-details">
          <summary class="error-details-summary">Technical Details</summary>
          <div class="error-details-content">
            <div class="error-info">
              <strong>Error:</strong> {{ error?.name || 'Unknown Error' }}
            </div>
            <div class="error-info">
              <strong>Message:</strong> {{ error?.message || 'No message available' }}
            </div>
            <div class="error-info">
              <strong>Stack:</strong>
              <pre class="error-stack">{{ error?.stack }}</pre>
            </div>
            <div v-if="errorInfo" class="error-info">
              <strong>Component Stack:</strong>
              <pre class="error-stack">{{ errorInfo.componentStack }}</pre>
            </div>
          </div>
        </details>
        
        <!-- Action Buttons -->
        <div class="error-actions">
          <button
            @click="retry"
            class="error-btn error-btn-primary"
            :disabled="isRetrying"
          >
            <svg v-if="isRetrying" class="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            {{ isRetrying ? 'Retrying...' : 'Try Again' }}
          </button>
          
          <button
            @click="goHome"
            class="error-btn error-btn-secondary"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Go Home
          </button>
          
          <button
            @click="reportError"
            class="error-btn error-btn-outline"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Report Issue
          </button>
        </div>
        
        <!-- Help Text -->
        <div class="error-help">
          <p class="text-sm text-neutral-600 dark:text-neutral-400">
            If this problem persists, please contact support or try refreshing the page.
          </p>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Normal Content -->
  <slot v-else />
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { useHapticFeedback } from '../composables/useMobileGestures'

interface Props {
  fallback?: boolean
  onError?: (error: Error, errorInfo: any) => void
}

const props = withDefaults(defineProps<Props>(), {
  fallback: false,
  onError: undefined
})

const emit = defineEmits<{
  'error-caught': [error: Error, errorInfo: any]
  'error-retry': []
}>()

const router = useRouter()
const { medium, heavy } = useHapticFeedback()

// State
const hasError = ref(false)
const error = ref<Error | null>(null)
const errorInfo = ref<any>(null)
const isRetrying = ref(false)
const retryCount = ref(0)
const maxRetries = 3

// Computed
const isDevelopment = computed(() => {
  return import.meta.env.DEV
})

const userFriendlyMessage = computed(() => {
  if (!error.value) return 'An unexpected error occurred.'
  
  const errorMessage = error.value.message.toLowerCase()
  
  // Network errors
  if (errorMessage.includes('network') || errorMessage.includes('fetch')) {
    return 'Unable to connect to the server. Please check your internet connection and try again.'
  }
  
  // Authentication errors
  if (errorMessage.includes('auth') || errorMessage.includes('unauthorized')) {
    return 'Your session has expired. Please sign in again to continue.'
  }
  
  // Permission errors
  if (errorMessage.includes('permission') || errorMessage.includes('forbidden')) {
    return 'You don\'t have permission to access this content. Please contact support if you believe this is an error.'
  }
  
  // Database errors
  if (errorMessage.includes('database') || errorMessage.includes('sql')) {
    return 'There was a problem accessing the data. Please try again in a moment.'
  }
  
  // Generic errors
  return 'Something went wrong while loading this page. Please try again.'
})

// Methods
const handleError = (err: Error, info: any) => {
  hasError.value = true
  error.value = err
  errorInfo.value = info
  
  // Log error for debugging
  console.error('ErrorBoundary caught an error:', err, info)
  
  // Call custom error handler if provided
  if (props.onError) {
    props.onError(err, info)
  }
  
  // Emit event for parent components
  emit('error-caught', err, info)
  
  // Track error for analytics (if available)
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'exception', {
      description: err.message,
      fatal: false
    })
  }
}

const retry = async () => {
  if (retryCount.value >= maxRetries) {
    heavy()
    return
  }
  
  medium()
  isRetrying.value = true
  retryCount.value++
  
  try {
    // Wait a bit before retrying
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Reset error state
    hasError.value = false
    error.value = null
    errorInfo.value = null
    
    // Emit retry event
    emit('error-retry')
    
    // Force re-render of child components
    await new Promise(resolve => setTimeout(resolve, 100))
    
  } catch (err) {
    console.error('Retry failed:', err)
  } finally {
    isRetrying.value = false
  }
}

const goHome = () => {
  medium()
  hasError.value = false
  error.value = null
  errorInfo.value = null
  retryCount.value = 0
  router.push('/')
}

const reportError = () => {
  heavy()
  
  // Create error report
  const errorReport = {
    error: error.value?.message,
    stack: error.value?.stack,
    componentStack: errorInfo.value?.componentStack,
    userAgent: navigator.userAgent,
    url: window.location.href,
    timestamp: new Date().toISOString(),
    retryCount: retryCount.value
  }
  
  // Copy to clipboard
  navigator.clipboard.writeText(JSON.stringify(errorReport, null, 2))
  
  // Show feedback (you could use a toast notification here)
  console.log('Error report copied to clipboard:', errorReport)
  
  // In a real app, you might send this to an error reporting service
  // like Sentry, LogRocket, or your own backend
}

// Global error handler
const globalErrorHandler = (event: ErrorEvent) => {
  handleError(new Error(event.message), {
    filename: event.filename,
    lineno: event.lineno,
    colno: event.colno
  })
}

const unhandledRejectionHandler = (event: PromiseRejectionEvent) => {
  handleError(new Error(event.reason), {
    type: 'unhandledRejection',
    reason: event.reason
  })
}

// Lifecycle
onMounted(() => {
  // Add global error listeners
  window.addEventListener('error', globalErrorHandler)
  window.addEventListener('unhandledrejection', unhandledRejectionHandler)
})

onUnmounted(() => {
  // Remove global error listeners
  window.removeEventListener('error', globalErrorHandler)
  window.removeEventListener('unhandledrejection', unhandledRejectionHandler)
})

// Expose error handling method for programmatic use
defineExpose({
  handleError,
  retry,
  reset: () => {
    hasError.value = false
    error.value = null
    errorInfo.value = null
    retryCount.value = 0
  }
})
</script>

<style scoped>
.error-boundary {
  @apply min-h-screen bg-neutral-50 dark:bg-neutral-950 flex items-center justify-center p-4;
}

.error-container {
  @apply max-w-md w-full bg-white dark:bg-neutral-900 rounded-xl shadow-xl border border-neutral-200 dark:border-neutral-800 p-8 text-center;
}

.error-icon {
  @apply mb-6;
}

.error-content {
  @apply space-y-6;
}

.error-title {
  @apply text-2xl font-bold text-neutral-900 dark:text-neutral-100;
}

.error-message {
  @apply text-neutral-600 dark:text-neutral-400 leading-relaxed;
}

.error-details {
  @apply text-left;
}

.error-details-summary {
  @apply cursor-pointer text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100;
}

.error-details-content {
  @apply mt-3 p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg text-xs;
}

.error-info {
  @apply mb-3;
}

.error-stack {
  @apply text-xs text-neutral-600 dark:text-neutral-400 whitespace-pre-wrap break-words;
}

.error-actions {
  @apply flex flex-col sm:flex-row gap-3;
}

.error-btn {
  @apply flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed;
}

.error-btn-primary {
  @apply bg-primary-500 text-white hover:bg-primary-600 active:scale-95;
}

.error-btn-secondary {
  @apply bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 active:scale-95;
}

.error-btn-outline {
  @apply border border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 active:scale-95;
}

.error-help {
  @apply pt-4 border-t border-neutral-200 dark:border-neutral-700;
}

/* Mobile optimizations */
@media (max-width: 640px) {
  .error-container {
    @apply p-6;
  }
  
  .error-actions {
    @apply flex-col;
  }
  
  .error-btn {
    @apply w-full;
  }
}

/* Animation for error appearance */
.error-container {
  animation: errorSlideIn 0.3s ease-out;
}

@keyframes errorSlideIn {
  from {
    opacity: 0;
    transform: translateY(-20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>