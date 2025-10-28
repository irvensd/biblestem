<template>
  <component
    :is="tag"
    :type="tag === 'button' ? type : undefined"
    :disabled="disabled || loading"
    :aria-label="ariaLabel"
    :aria-describedby="ariaDescribedby"
    :aria-expanded="ariaExpanded"
    :aria-pressed="ariaPressed"
    :aria-controls="ariaControls"
    :aria-haspopup="ariaHaspopup"
    :aria-current="ariaCurrent"
    :aria-selected="ariaSelected"
    :aria-checked="ariaChecked"
    :aria-invalid="ariaInvalid"
    :aria-required="ariaRequired"
    :aria-readonly="ariaReadonly"
    :role="role"
    :tabindex="tabindex"
    :class="buttonClasses"
    @click="handleClick"
    @keydown="handleKeydown"
    @focus="handleFocus"
    @blur="handleBlur"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <!-- Loading Spinner -->
    <div
      v-if="loading"
      class="button-spinner"
      :class="spinnerClasses"
      :aria-hidden="true"
    >
      <div class="spinner-ring"></div>
    </div>

    <!-- Left Icon -->
    <component
      v-else-if="leftIcon"
      :is="leftIcon"
      class="button-icon-left"
      :class="iconClasses"
      :aria-hidden="true"
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
      :aria-hidden="true"
    />

    <!-- Badge -->
    <span
      v-if="badge"
      class="button-badge"
      :class="badgeClasses"
      :aria-label="`${badge} notifications`"
    >
      {{ badge }}
    </span>

    <!-- Screen Reader Only Text -->
    <span v-if="srOnlyText" class="sr-only">{{ srOnlyText }}</span>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useAccessibility, useFocusManagement } from '../composables/useAccessibility'

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
  
  // Accessibility props
  ariaLabel?: string
  ariaDescribedby?: string
  ariaExpanded?: boolean | 'true' | 'false'
  ariaPressed?: boolean | 'true' | 'false'
  ariaControls?: string
  ariaHaspopup?: boolean | 'true' | 'false' | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog'
  ariaCurrent?: boolean | 'true' | 'false' | 'page' | 'step' | 'location' | 'date' | 'time'
  ariaSelected?: boolean | 'true' | 'false'
  ariaChecked?: boolean | 'true' | 'false' | 'mixed'
  ariaInvalid?: boolean | 'true' | 'false' | 'grammar' | 'spelling'
  ariaRequired?: boolean | 'true' | 'false'
  ariaReadonly?: boolean | 'true' | 'false'
  role?: string
  tabindex?: number | string
  srOnlyText?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  type: 'button',
  tag: 'button',
  disabled: false,
  loading: false,
  fullWidth: false,
  badgeVariant: 'error',
  ariaExpanded: undefined,
  ariaPressed: undefined,
  ariaHaspopup: undefined,
  ariaCurrent: undefined,
  ariaSelected: undefined,
  ariaChecked: undefined,
  ariaInvalid: undefined,
  ariaRequired: undefined,
  ariaReadonly: undefined,
  tabindex: undefined
})

const emit = defineEmits<{
  click: [event: MouseEvent]
  keydown: [event: KeyboardEvent]
  focus: [event: FocusEvent]
  blur: [event: FocusEvent]
  mouseenter: [event: MouseEvent]
  mouseleave: [event: MouseEvent]
}>()

// Accessibility
const { announceSuccess, announceError } = useAccessibility()
const { focusElement } = useFocusManagement()

// Computed classes
const buttonClasses = computed(() => {
  const classes = ['accessible-button']
  
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
      classes.push('px-2 py-1 text-xs gap-1 min-h-[28px]')
      break
    case 'sm':
      classes.push('px-3 py-1.5 text-sm gap-1.5 min-h-[32px]')
      break
    case 'md':
      classes.push('px-4 py-2 text-sm gap-2 min-h-[40px]')
      break
    case 'lg':
      classes.push('px-6 py-3 text-base gap-2.5 min-h-[48px]')
      break
    case 'xl':
      classes.push('px-8 py-4 text-lg gap-3 min-h-[56px]')
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
  
  // Focus styles
  classes.push('focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-neutral-900')
  
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
    
    // Announce success for important actions
    if (props.variant === 'primary' || props.variant === 'success') {
      announceSuccess('Action completed')
    }
  }
}

const handleKeydown = (event: KeyboardEvent) => {
  emit('keydown', event)
  
  // Handle keyboard interactions
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    handleClick(event as any)
  }
  
  // Handle escape key for dismissible buttons
  if (event.key === 'Escape' && props.ariaHaspopup) {
    // Focus management for popup controls
    const popup = document.querySelector(`#${props.ariaControls}`)
    if (popup) {
      focusElement(popup as HTMLElement)
    }
  }
}

const handleFocus = (event: FocusEvent) => {
  emit('focus', event)
  
  // Announce button state to screen readers
  if (props.loading) {
    announceSuccess('Button is loading')
  }
}

const handleBlur = (event: FocusEvent) => {
  emit('blur', event)
}

const handleMouseEnter = (event: MouseEvent) => {
  emit('mouseenter', event)
}

const handleMouseLeave = (event: MouseEvent) => {
  emit('mouseleave', event)
}
</script>

<style scoped>
.accessible-button {
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

/* Screen reader only text */
.sr-only {
  @apply absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0;
  clip: rect(0, 0, 0, 0);
}

/* Focus ring */
.focus-ring {
  @apply focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-neutral-900;
}

/* Dark mode adjustments */
.dark .accessible-button[data-variant="secondary"] {
  @apply bg-neutral-800 text-neutral-100 border-neutral-700 hover:bg-neutral-700;
}

.dark .accessible-button[data-variant="outline"] {
  @apply border-primary-400 text-primary-400 hover:bg-primary-900/20;
}

.dark .accessible-button[data-variant="ghost"] {
  @apply text-neutral-300 hover:bg-neutral-800;
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .accessible-button {
    @apply border-2;
  }
  
  .accessible-button[data-variant="primary"] {
    @apply border-primary-800;
  }
  
  .accessible-button[data-variant="secondary"] {
    @apply border-secondary-800;
  }
  
  .accessible-button[data-variant="outline"] {
    @apply border-2;
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .accessible-button {
    @apply transition-none;
  }
  
  .accessible-button:hover {
    @apply transform-none;
  }
  
  .accessible-button:active {
    @apply transform-none;
  }
  
  .spinner-ring {
    @apply animate-none;
  }
}

/* Mobile optimizations */
@media (max-width: 640px) {
  .accessible-button {
    @apply touch-manipulation;
  }
  
  .accessible-button:active {
    @apply scale-95;
  }
}

/* Print styles */
@media print {
  .accessible-button {
    @apply bg-transparent border border-neutral-900 text-neutral-900;
  }
  
  .button-spinner,
  .button-badge {
    @apply hidden;
  }
}
</style>
