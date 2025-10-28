<template>
  <component
    :is="tag"
    :to="to"
    :href="href"
    :type="type"
    :disabled="disabled"
    :class="buttonClasses"
    :style="buttonStyles"
    @click="handleClick"
    @touchstart="handleTouchStart"
    @touchend="handleTouchEnd"
    @touchcancel="handleTouchEnd"
    v-bind="$attrs"
  >
    <div class="flex items-center justify-center gap-2">
      <!-- Loading Spinner -->
      <div v-if="loading" class="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent"></div>
      
      <!-- Icon (left) -->
      <component v-if="iconLeft" :is="iconLeft" :class="iconClasses" />
      
      <!-- Content -->
      <slot />
      
      <!-- Icon (right) -->
      <component v-if="iconRight" :is="iconRight" :class="iconClasses" />
    </div>
    
    <!-- Ripple Effect -->
    <div
      v-if="showRipple"
      class="absolute inset-0 rounded-inherit overflow-hidden pointer-events-none"
    >
      <div
        ref="rippleElement"
        class="absolute w-0 h-0 bg-white/20 rounded-full transition-all duration-300 ease-out"
        :style="rippleStyle"
      ></div>
    </div>
  </component>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useTouchFeedback } from '../composables/useMobileGestures'

interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  disabled?: boolean
  loading?: boolean
  fullWidth?: boolean
  to?: string
  href?: string
  type?: 'button' | 'submit' | 'reset'
  iconLeft?: any
  iconRight?: any
  ripple?: boolean
  haptic?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  loading: false,
  fullWidth: false,
  ripple: true,
  haptic: true
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const { light } = useTouchFeedback()
const rippleElement = ref<HTMLElement>()
const showRipple = ref(false)
const rippleStyle = ref({})

// Determine component tag
const tag = computed(() => {
  if (props.to) return 'router-link'
  if (props.href) return 'a'
  return 'button'
})

// Button classes
const buttonClasses = computed(() => {
  const baseClasses = [
    'relative',
    'inline-flex',
    'items-center',
    'justify-center',
    'font-medium',
    'rounded-lg',
    'transition-all',
    'duration-200',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-offset-2',
    'touch-manipulation',
    'select-none',
    'overflow-hidden'
  ]

  // Size classes
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm min-h-[36px]',
    md: 'px-4 py-2 text-sm min-h-[44px]',
    lg: 'px-6 py-3 text-base min-h-[52px]',
    xl: 'px-8 py-4 text-lg min-h-[60px]'
  }

  // Variant classes
  const variantClasses = {
    primary: [
      'bg-primary-600',
      'text-white',
      'hover:bg-primary-700',
      'active:bg-primary-800',
      'focus:ring-primary-500',
      'disabled:bg-primary-300',
      'disabled:cursor-not-allowed'
    ],
    secondary: [
      'bg-neutral-100',
      'text-neutral-900',
      'hover:bg-neutral-200',
      'active:bg-neutral-300',
      'focus:ring-neutral-500',
      'dark:bg-neutral-800',
      'dark:text-neutral-100',
      'dark:hover:bg-neutral-700',
      'dark:active:bg-neutral-600',
      'disabled:bg-neutral-200',
      'disabled:cursor-not-allowed',
      'dark:disabled:bg-neutral-700'
    ],
    outline: [
      'border',
      'border-neutral-300',
      'bg-transparent',
      'text-neutral-700',
      'hover:bg-neutral-50',
      'active:bg-neutral-100',
      'focus:ring-neutral-500',
      'dark:border-neutral-600',
      'dark:text-neutral-300',
      'dark:hover:bg-neutral-800',
      'dark:active:bg-neutral-700',
      'disabled:border-neutral-200',
      'disabled:cursor-not-allowed',
      'dark:disabled:border-neutral-700'
    ],
    ghost: [
      'bg-transparent',
      'text-neutral-700',
      'hover:bg-neutral-100',
      'active:bg-neutral-200',
      'focus:ring-neutral-500',
      'dark:text-neutral-300',
      'dark:hover:bg-neutral-800',
      'dark:active:bg-neutral-700',
      'disabled:cursor-not-allowed'
    ],
    danger: [
      'bg-red-600',
      'text-white',
      'hover:bg-red-700',
      'active:bg-red-800',
      'focus:ring-red-500',
      'disabled:bg-red-300',
      'disabled:cursor-not-allowed'
    ]
  }

  // Full width
  if (props.fullWidth) {
    baseClasses.push('w-full')
  }

  return [
    ...baseClasses,
    ...sizeClasses[props.size],
    ...variantClasses[props.variant]
  ]
})

// Icon classes
const iconClasses = computed(() => {
  const sizeMap = {
    sm: 'w-4 h-4',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
    xl: 'w-6 h-6'
  }
  return sizeMap[props.size]
})

// Button styles
const buttonStyles = computed(() => {
  return {
    minHeight: props.size === 'sm' ? '36px' : props.size === 'md' ? '44px' : props.size === 'lg' ? '52px' : '60px'
  }
})

// Touch handlers
const handleTouchStart = (event: TouchEvent) => {
  if (props.disabled || props.loading) return
  
  if (props.haptic) {
    light()
  }
  
  if (props.ripple) {
    createRipple(event)
  }
}

const handleTouchEnd = () => {
  // Touch end logic if needed
}

const handleClick = (event: MouseEvent) => {
  if (props.disabled || props.loading) {
    event.preventDefault()
    return
  }
  
  emit('click', event)
}

// Ripple effect
const createRipple = (event: TouchEvent) => {
  if (!rippleElement.value) return
  
  const rect = (event.currentTarget as HTMLElement).getBoundingClientRect()
  const size = Math.max(rect.width, rect.height)
  const x = event.touches[0].clientX - rect.left - size / 2
  const y = event.touches[0].clientY - rect.top - size / 2
  
  rippleStyle.value = {
    width: `${size}px`,
    height: `${size}px`,
    left: `${x}px`,
    top: `${y}px`,
    transform: 'scale(0)',
    opacity: '1'
  }
  
  showRipple.value = true
  
  // Trigger animation
  requestAnimationFrame(() => {
    if (rippleElement.value) {
      rippleElement.value.style.transform = 'scale(1)'
      rippleElement.value.style.opacity = '0'
    }
  })
  
  // Clean up after animation
  setTimeout(() => {
    showRipple.value = false
  }, 300)
}
</script>
</template>
