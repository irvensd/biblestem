<template>
  <div class="enhanced-card" :class="cardClasses">
    <!-- Card Header -->
    <div v-if="$slots.header || title" class="card-header">
      <slot name="header">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-3">
            <div v-if="icon" class="card-icon" :class="iconClasses">
              <component :is="icon" class="w-5 h-5" />
            </div>
            <div>
              <h3 v-if="title" class="text-heading-sm font-semibold text-neutral-900 dark:text-neutral-100">
                {{ title }}
              </h3>
              <p v-if="subtitle" class="text-body-sm text-neutral-600 dark:text-neutral-400 mt-1">
                {{ subtitle }}
              </p>
            </div>
          </div>
          <div v-if="$slots.actions" class="flex items-center space-x-2">
            <slot name="actions" />
          </div>
        </div>
      </slot>
    </div>

    <!-- Card Content -->
    <div class="card-content" :class="contentClasses">
      <slot />
    </div>

    <!-- Card Footer -->
    <div v-if="$slots.footer" class="card-footer">
      <slot name="footer" />
    </div>

    <!-- Loading Overlay -->
    <div v-if="loading" class="card-loading">
      <div class="loading-spinner">
        <div class="spinner-ring"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'default' | 'elevated' | 'flat' | 'interactive' | 'glass'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  title?: string
  subtitle?: string
  icon?: any
  iconVariant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'neutral'
  loading?: boolean
  disabled?: boolean
  clickable?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'md',
  padding: 'md',
  iconVariant: 'primary',
  loading: false,
  disabled: false,
  clickable: false
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

// Computed classes
const cardClasses = computed(() => {
  const classes = ['enhanced-card']
  
  // Variant classes
  switch (props.variant) {
    case 'elevated':
      classes.push('card-elevated')
      break
    case 'flat':
      classes.push('card-flat')
      break
    case 'interactive':
      classes.push('card-interactive')
      break
    case 'glass':
      classes.push('glass')
      break
    default:
      classes.push('card')
  }
  
  // Size classes
  switch (props.size) {
    case 'sm':
      classes.push('card-sm')
      break
    case 'lg':
      classes.push('card-lg')
      break
    case 'xl':
      classes.push('card-xl')
      break
    default:
      classes.push('card-md')
  }
  
  // Interactive states
  if (props.clickable && !props.disabled) {
    classes.push('cursor-pointer hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200')
  }
  
  if (props.disabled) {
    classes.push('opacity-50 cursor-not-allowed')
  }
  
  return classes
})

const contentClasses = computed(() => {
  const classes = []
  
  // Padding classes
  switch (props.padding) {
    case 'none':
      classes.push('p-0')
      break
    case 'sm':
      classes.push('p-4')
      break
    case 'lg':
      classes.push('p-8')
      break
    case 'xl':
      classes.push('p-10')
      break
    default:
      classes.push('p-6')
  }
  
  return classes
})

const iconClasses = computed(() => {
  const classes = ['w-10 h-10 rounded-lg flex items-center justify-center']
  
  switch (props.iconVariant) {
    case 'primary':
      classes.push('bg-primary-100 text-primary-600 dark:bg-primary-900/20 dark:text-primary-400')
      break
    case 'secondary':
      classes.push('bg-secondary-100 text-secondary-600 dark:bg-secondary-900/20 dark:text-secondary-400')
      break
    case 'success':
      classes.push('bg-success-100 text-success-600 dark:bg-success-900/20 dark:text-success-400')
      break
    case 'warning':
      classes.push('bg-warning-100 text-warning-600 dark:bg-warning-900/20 dark:text-warning-400')
      break
    case 'error':
      classes.push('bg-error-100 text-error-600 dark:bg-error-900/20 dark:text-error-400')
      break
    default:
      classes.push('bg-neutral-100 text-neutral-600 dark:bg-neutral-900/20 dark:text-neutral-400')
  }
  
  return classes
})

// Click handler
const handleClick = (event: MouseEvent) => {
  if (props.clickable && !props.disabled && !props.loading) {
    emit('click', event)
  }
}
</script>

<style scoped>
.enhanced-card {
  @apply relative overflow-hidden;
}

.card-sm {
  @apply text-sm;
}

.card-md {
  @apply text-base;
}

.card-lg {
  @apply text-lg;
}

.card-xl {
  @apply text-xl;
}

.card-header {
  @apply px-6 py-4 border-b border-neutral-200 dark:border-neutral-800;
}

.card-content {
  @apply flex-1;
}

.card-footer {
  @apply px-6 py-4 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-800/50;
}

.card-loading {
  @apply absolute inset-0 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm flex items-center justify-center z-10;
}

.loading-spinner {
  @apply w-8 h-8;
}

.spinner-ring {
  @apply w-full h-full border-2 border-transparent border-t-primary-600 rounded-full animate-spin;
}

/* Card variants */
.card-sm .card-header {
  @apply px-4 py-3;
}

.card-sm .card-footer {
  @apply px-4 py-3;
}

.card-lg .card-header {
  @apply px-8 py-6;
}

.card-lg .card-footer {
  @apply px-8 py-6;
}

.card-xl .card-header {
  @apply px-10 py-8;
}

.card-xl .card-footer {
  @apply px-10 py-8;
}

/* Interactive states */
.enhanced-card:hover .card-icon {
  @apply scale-105 transition-transform duration-200;
}

.enhanced-card:active {
  @apply scale-95 transition-transform duration-100;
}

/* Focus states */
.enhanced-card:focus {
  @apply outline-none ring-2 ring-primary-500 ring-offset-2 ring-offset-white dark:ring-offset-neutral-900;
}

/* Loading state */
.card-loading .loading-spinner {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

/* Mobile optimizations */
@media (max-width: 640px) {
  .card-header {
    @apply px-4 py-3;
  }
  
  .card-footer {
    @apply px-4 py-3;
  }
  
  .card-content {
    @apply p-4;
  }
}
</style>
