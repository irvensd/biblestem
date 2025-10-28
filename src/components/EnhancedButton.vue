<template>
  <component
    :is="tag"
    :type="tag === 'button' ? type : undefined"
    :disabled="disabled || loading"
    :class="buttonClasses"
    @click="handleClick"
    @keydown="handleKeydown"
  >
    <!-- Loading Spinner -->
    <div v-if="loading" class="button-spinner" :class="spinnerClasses">
      <div class="spinner-ring"></div>
    </div>

    <!-- Left Icon -->
    <component
      v-else-if="leftIcon"
      :is="leftIcon"
      class="button-icon-left"
      :class="iconClasses"
    />

    <!-- Button Content -->
    <span class="button-content" :class="contentClasses">
      <slot />
    </span>

    <!-- Right Icon -->
    <component
      v-if="rightIcon && !loading"
      :is="rightIcon"
      class="button-icon-right"
      :class="iconClasses"
    />

    <!-- Badge -->
    <span v-if="badge" class="button-badge" :class="badgeClasses">
      {{ badge }}
    </span>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success' | 'warning'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  type?: 'button' | 'submit' | 'reset'
  tag?: 'button' | 'a' | 'router-link'
  disabled?: boolean
  loading?: boolean
  fullWidth?: boolean
  leftIcon?: any
  rightIcon?: any
  badge?: string | number
  badgeVariant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  href?: string
  to?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  type: 'button',
  tag: 'button',
  disabled: false,
  loading: false,
  fullWidth: false,
  badgeVariant: 'error'
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

// Computed classes
const buttonClasses = computed(() => {
  const classes = ['enhanced-button']
  
  // Base button classes
  classes.push('inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus-ring disabled:opacity-50 disabled:cursor-not-allowed')
  
  // Variant classes
  switch (props.variant) {
    case 'primary':
      classes.push('bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800 shadow-sm hover:shadow-md')
      break
    case 'secondary':
      classes.push('bg-secondary-100 text-secondary-900 hover:bg-secondary-200 active:bg-secondary-300 border border-secondary-300')
      break
    case 'outline':
      classes.push('bg-transparent text-primary-600 border border-primary-600 hover:bg-primary-50 active:bg-primary-100')
      break
    case 'ghost':
      classes.push('bg-transparent text-secondary-700 hover:bg-secondary-100 active:bg-secondary-200')
      break
    case 'danger':
      classes.push('bg-error-600 text-white hover:bg-error-700 active:bg-error-800 shadow-sm hover:shadow-md')
      break
    case 'success':
      classes.push('bg-success-600 text-white hover:bg-success-700 active:bg-success-800 shadow-sm hover:shadow-md')
      break
    case 'warning':
      classes.push('bg-warning-600 text-white hover:bg-warning-700 active:bg-warning-800 shadow-sm hover:shadow-md')
      break
  }
  
  // Size classes
  switch (props.size) {
    case 'xs':
      classes.push('px-2 py-1 text-xs gap-1')
      break
    case 'sm':
      classes.push('px-3 py-1.5 text-sm gap-1.5')
      break
    case 'md':
      classes.push('px-4 py-2 text-sm gap-2')
      break
    case 'lg':
      classes.push('px-6 py-3 text-base gap-2.5')
      break
    case 'xl':
      classes.push('px-8 py-4 text-lg gap-3')
      break
  }
  
  // Full width
  if (props.fullWidth) {
    classes.push('w-full')
  }
  
  // Interactive states
  if (!props.disabled && !props.loading) {
    classes.push('hover:-translate-y-0.5 active:scale-95')
  }
  
  return classes
})

const contentClasses = computed(() => {
  const classes = []
  
  if (props.loading) {
    classes.push('opacity-0')
  } else {
    classes.push('opacity-100')
  }
  
  return classes
})

const iconClasses = computed(() => {
  const classes = []
  
  switch (props.size) {
    case 'xs':
      classes.push('w-3 h-3')
      break
    case 'sm':
      classes.push('w-4 h-4')
      break
    case 'md':
      classes.push('w-4 h-4')
      break
    case 'lg':
      classes.push('w-5 h-5')
      break
    case 'xl':
      classes.push('w-6 h-6')
      break
  }
  
  return classes
})

const spinnerClasses = computed(() => {
  const classes = []
  
  switch (props.size) {
    case 'xs':
      classes.push('w-3 h-3')
      break
    case 'sm':
      classes.push('w-4 h-4')
      break
    case 'md':
      classes.push('w-4 h-4')
      break
    case 'lg':
      classes.push('w-5 h-5')
      break
    case 'xl':
      classes.push('w-6 h-6')
      break
  }
  
  return classes
})

const badgeClasses = computed(() => {
  const classes = ['absolute -top-1 -right-1 min-w-[1.25rem] h-5 px-1 text-xs font-medium rounded-full flex items-center justify-center']
  
  switch (props.badgeVariant) {
    case 'primary':
      classes.push('bg-primary-600 text-white')
      break
    case 'secondary':
      classes.push('bg-secondary-600 text-white')
      break
    case 'success':
      classes.push('bg-success-600 text-white')
      break
    case 'warning':
      classes.push('bg-warning-600 text-white')
      break
    case 'error':
      classes.push('bg-error-600 text-white')
      break
  }
  
  return classes
})

// Event handlers
const handleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    handleClick(event as any)
  }
}
</script>

<style scoped>
.enhanced-button {
  @apply relative;
}

.button-spinner {
  @apply absolute;
}

.spinner-ring {
  @apply w-full h-full border-2 border-transparent border-t-current rounded-full animate-spin;
}

.button-icon-left {
  @apply flex-shrink-0;
}

.button-icon-right {
  @apply flex-shrink-0;
}

.button-content {
  @apply transition-opacity duration-200;
}

.button-badge {
  @apply flex-shrink-0;
}

/* Dark mode adjustments */
.dark .enhanced-button[data-variant="secondary"] {
  @apply bg-neutral-800 text-neutral-100 border-neutral-700 hover:bg-neutral-700;
}

.dark .enhanced-button[data-variant="outline"] {
  @apply border-primary-400 text-primary-400 hover:bg-primary-900/20;
}

.dark .enhanced-button[data-variant="ghost"] {
  @apply text-neutral-300 hover:bg-neutral-800;
}

/* Focus states */
.enhanced-button:focus {
  @apply outline-none ring-2 ring-primary-500 ring-offset-2 ring-offset-white dark:ring-offset-neutral-900;
}

/* Loading state */
.enhanced-button:disabled {
  @apply cursor-not-allowed;
}

/* Hover effects */
.enhanced-button:not(:disabled):not(:active):hover {
  @apply shadow-lg;
}

/* Active state */
.enhanced-button:not(:disabled):active {
  @apply transform scale-95;
}

/* Mobile optimizations */
@media (max-width: 640px) {
  .enhanced-button {
    @apply touch-manipulation;
  }
  
  .enhanced-button:active {
    @apply scale-95;
  }
}

/* Animation for button appearance */
.enhanced-button {
  animation: buttonFadeIn 0.2s ease-out;
}

@keyframes buttonFadeIn {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
