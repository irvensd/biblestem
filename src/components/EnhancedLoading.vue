<template>
  <div class="loading-container" :class="containerClass">
    <!-- Spinner Loading -->
    <div v-if="type === 'spinner'" class="loading-spinner" :class="sizeClass">
      <div class="spinner" :class="spinnerClass">
        <div class="spinner-ring"></div>
        <div class="spinner-ring"></div>
        <div class="spinner-ring"></div>
        <div class="spinner-ring"></div>
      </div>
      <p v-if="message" class="loading-message">{{ message }}</p>
    </div>

    <!-- Dots Loading -->
    <div v-else-if="type === 'dots'" class="loading-dots" :class="sizeClass">
      <div class="dots-container">
        <div class="dot" :style="{ animationDelay: '0s' }"></div>
        <div class="dot" :style="{ animationDelay: '0.1s' }"></div>
        <div class="dot" :style="{ animationDelay: '0.2s' }"></div>
      </div>
      <p v-if="message" class="loading-message">{{ message }}</p>
    </div>

    <!-- Pulse Loading -->
    <div v-else-if="type === 'pulse'" class="loading-pulse" :class="sizeClass">
      <div class="pulse-circle" :class="pulseClass"></div>
      <p v-if="message" class="loading-message">{{ message }}</p>
    </div>

    <!-- Skeleton Loading -->
    <div v-else-if="type === 'skeleton'" class="loading-skeleton">
      <div class="skeleton-content">
        <div class="skeleton-line skeleton-line-lg"></div>
        <div class="skeleton-line skeleton-line-md"></div>
        <div class="skeleton-line skeleton-line-sm"></div>
        <div class="skeleton-line skeleton-line-md"></div>
      </div>
      <p v-if="message" class="loading-message">{{ message }}</p>
    </div>

    <!-- Progress Loading -->
    <div v-else-if="type === 'progress'" class="loading-progress" :class="sizeClass">
      <div class="progress-container">
        <div class="progress-bar">
          <div 
            class="progress-fill" 
            :style="{ width: `${progress}%` }"
            :class="progressClass"
          ></div>
        </div>
        <div class="progress-text">
          <span v-if="showPercentage">{{ Math.round(progress) }}%</span>
          <span v-if="message" class="progress-message">{{ message }}</span>
        </div>
      </div>
    </div>

    <!-- Overlay Loading -->
    <div v-else-if="type === 'overlay'" class="loading-overlay">
      <div class="overlay-backdrop" :class="backdropClass"></div>
      <div class="overlay-content">
        <div class="loading-spinner" :class="sizeClass">
          <div class="spinner" :class="spinnerClass">
            <div class="spinner-ring"></div>
            <div class="spinner-ring"></div>
            <div class="spinner-ring"></div>
            <div class="spinner-ring"></div>
          </div>
          <p v-if="message" class="loading-message">{{ message }}</p>
        </div>
      </div>
    </div>

    <!-- Inline Loading -->
    <div v-else-if="type === 'inline'" class="loading-inline">
      <div class="inline-spinner" :class="sizeClass">
        <div class="spinner-ring"></div>
      </div>
      <span v-if="message" class="inline-message">{{ message }}</span>
    </div>

    <!-- Button Loading -->
    <div v-else-if="type === 'button'" class="loading-button" :class="buttonClass">
      <div class="button-spinner" :class="sizeClass">
        <div class="spinner-ring"></div>
      </div>
      <span v-if="message" class="button-message">{{ message }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type LoadingType = 'spinner' | 'dots' | 'pulse' | 'skeleton' | 'progress' | 'overlay' | 'inline' | 'button'
type LoadingSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type LoadingVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'neutral'

interface Props {
  type?: LoadingType
  size?: LoadingSize
  variant?: LoadingVariant
  message?: string
  progress?: number
  showPercentage?: boolean
  fullscreen?: boolean
  transparent?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'spinner',
  size: 'md',
  variant: 'primary',
  message: '',
  progress: 0,
  showPercentage: false,
  fullscreen: false,
  transparent: false
})

// Computed classes
const containerClass = computed(() => ({
  'loading-fullscreen': props.fullscreen,
  'loading-transparent': props.transparent
}))

const sizeClass = computed(() => `loading-${props.size}`)

const spinnerClass = computed(() => `spinner-${props.variant}`)

const pulseClass = computed(() => `pulse-${props.variant}`)

const progressClass = computed(() => `progress-${props.variant}`)

const backdropClass = computed(() => ({
  'backdrop-blur': !props.transparent,
  'backdrop-transparent': props.transparent
}))

const buttonClass = computed(() => `button-${props.variant}`)
</script>

<style scoped>
.loading-container {
  @apply flex items-center justify-center;
}

.loading-fullscreen {
  @apply fixed inset-0 z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm;
}

.loading-transparent {
  @apply bg-transparent;
}

/* Spinner Styles */
.loading-spinner {
  @apply flex flex-col items-center justify-center space-y-4;
}

.spinner {
  @apply relative;
}

.spinner-ring {
  @apply absolute border-2 border-transparent rounded-full animate-spin;
}

.spinner-ring:nth-child(1) {
  @apply w-full h-full border-t-current;
  animation-duration: 1.2s;
}

.spinner-ring:nth-child(2) {
  @apply w-3/4 h-3/4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-r-current;
  animation-duration: 1s;
  animation-direction: reverse;
}

.spinner-ring:nth-child(3) {
  @apply w-1/2 h-1/2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-b-current;
  animation-duration: 0.8s;
}

.spinner-ring:nth-child(4) {
  @apply w-1/4 h-1/4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-l-current;
  animation-duration: 0.6s;
  animation-direction: reverse;
}

/* Spinner Variants */
.spinner-primary .spinner-ring {
  @apply border-primary-500;
}

.spinner-secondary .spinner-ring {
  @apply border-neutral-500;
}

.spinner-success .spinner-ring {
  @apply border-emerald-500;
}

.spinner-warning .spinner-ring {
  @apply border-amber-500;
}

.spinner-error .spinner-ring {
  @apply border-red-500;
}

.spinner-neutral .spinner-ring {
  @apply border-neutral-400;
}

/* Spinner Sizes */
.loading-xs .spinner {
  @apply w-4 h-4;
}

.loading-sm .spinner {
  @apply w-6 h-6;
}

.loading-md .spinner {
  @apply w-8 h-8;
}

.loading-lg .spinner {
  @apply w-12 h-12;
}

.loading-xl .spinner {
  @apply w-16 h-16;
}

/* Dots Loading */
.loading-dots {
  @apply flex flex-col items-center justify-center space-y-4;
}

.dots-container {
  @apply flex space-x-2;
}

.dot {
  @apply w-3 h-3 bg-primary-500 rounded-full animate-bounce;
}

.loading-xs .dot {
  @apply w-2 h-2;
}

.loading-sm .dot {
  @apply w-2.5 h-2.5;
}

.loading-md .dot {
  @apply w-3 h-3;
}

.loading-lg .dot {
  @apply w-4 h-4;
}

.loading-xl .dot {
  @apply w-5 h-5;
}

/* Pulse Loading */
.loading-pulse {
  @apply flex flex-col items-center justify-center space-y-4;
}

.pulse-circle {
  @apply rounded-full animate-pulse;
}

.loading-xs .pulse-circle {
  @apply w-4 h-4;
}

.loading-sm .pulse-circle {
  @apply w-6 h-6;
}

.loading-md .pulse-circle {
  @apply w-8 h-8;
}

.loading-lg .pulse-circle {
  @apply w-12 h-12;
}

.loading-xl .pulse-circle {
  @apply w-16 h-16;
}

.pulse-primary {
  @apply bg-primary-500;
}

.pulse-secondary {
  @apply bg-neutral-500;
}

.pulse-success {
  @apply bg-emerald-500;
}

.pulse-warning {
  @apply bg-amber-500;
}

.pulse-error {
  @apply bg-red-500;
}

.pulse-neutral {
  @apply bg-neutral-400;
}

/* Skeleton Loading */
.loading-skeleton {
  @apply flex flex-col items-center justify-center space-y-4;
}

.skeleton-content {
  @apply space-y-3 w-full max-w-md;
}

.skeleton-line {
  @apply bg-neutral-200 dark:bg-neutral-700 rounded animate-pulse;
}

.skeleton-line-lg {
  @apply h-6 w-full;
}

.skeleton-line-md {
  @apply h-4 w-3/4;
}

.skeleton-line-sm {
  @apply h-3 w-1/2;
}

/* Progress Loading */
.loading-progress {
  @apply flex flex-col items-center justify-center space-y-4 w-full max-w-md;
}

.progress-container {
  @apply w-full space-y-2;
}

.progress-bar {
  @apply w-full h-2 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden;
}

.progress-fill {
  @apply h-full transition-all duration-300 ease-out rounded-full;
}

.progress-primary {
  @apply bg-primary-500;
}

.progress-secondary {
  @apply bg-neutral-500;
}

.progress-success {
  @apply bg-emerald-500;
}

.progress-warning {
  @apply bg-amber-500;
}

.progress-error {
  @apply bg-red-500;
}

.progress-neutral {
  @apply bg-neutral-400;
}

.progress-text {
  @apply flex justify-between text-sm text-neutral-600 dark:text-neutral-400;
}

/* Overlay Loading */
.loading-overlay {
  @apply fixed inset-0 z-50 flex items-center justify-center;
}

.overlay-backdrop {
  @apply absolute inset-0 bg-white/80 dark:bg-neutral-900/80;
}

.backdrop-blur {
  @apply backdrop-blur-sm;
}

.backdrop-transparent {
  @apply bg-transparent;
}

.overlay-content {
  @apply relative z-10;
}

/* Inline Loading */
.loading-inline {
  @apply flex items-center space-x-2;
}

.inline-spinner {
  @apply relative;
}

.inline-spinner .spinner-ring {
  @apply w-4 h-4 border-2 border-transparent border-t-current rounded-full animate-spin;
}

.loading-xs .inline-spinner .spinner-ring {
  @apply w-3 h-3;
}

.loading-sm .inline-spinner .spinner-ring {
  @apply w-3.5 h-3.5;
}

.loading-md .inline-spinner .spinner-ring {
  @apply w-4 h-4;
}

.loading-lg .inline-spinner .spinner-ring {
  @apply w-5 h-5;
}

.loading-xl .inline-spinner .spinner-ring {
  @apply w-6 h-6;
}

.inline-message {
  @apply text-sm text-neutral-600 dark:text-neutral-400;
}

/* Button Loading */
.loading-button {
  @apply flex items-center space-x-2 px-4 py-2 rounded-lg font-medium;
}

.button-spinner {
  @apply relative;
}

.button-spinner .spinner-ring {
  @apply w-4 h-4 border-2 border-transparent border-t-current rounded-full animate-spin;
}

.button-primary {
  @apply bg-primary-500 text-white;
}

.button-secondary {
  @apply bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300;
}

.button-success {
  @apply bg-emerald-500 text-white;
}

.button-warning {
  @apply bg-amber-500 text-white;
}

.button-error {
  @apply bg-red-500 text-white;
}

.button-neutral {
  @apply bg-neutral-500 text-white;
}

.button-message {
  @apply text-sm;
}

/* Loading Message */
.loading-message {
  @apply text-sm text-neutral-600 dark:text-neutral-400 text-center;
}

.progress-message {
  @apply text-xs;
}

/* Animations */
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes bounce {
  0%, 20%, 53%, 80%, 100% {
    transform: translate3d(0, 0, 0);
  }
  40%, 43% {
    transform: translate3d(0, -8px, 0);
  }
  70% {
    transform: translate3d(0, -4px, 0);
  }
  90% {
    transform: translate3d(0, -2px, 0);
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}

.animate-bounce {
  animation: bounce 1s infinite;
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Mobile optimizations */
@media (max-width: 640px) {
  .loading-fullscreen {
    @apply p-4;
  }
  
  .loading-message {
    @apply text-xs;
  }
}
</style>
