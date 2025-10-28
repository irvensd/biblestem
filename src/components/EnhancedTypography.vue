<template>
  <component
    :is="tag"
    :class="typographyClasses"
    :style="typographyStyles"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'display' | 'heading' | 'body' | 'scripture' | 'mono' | 'caption'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl'
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold'
  color?: 'primary' | 'secondary' | 'tertiary' | 'inverse' | 'success' | 'warning' | 'error' | 'accent'
  align?: 'left' | 'center' | 'right' | 'justify'
  transform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize'
  decoration?: 'none' | 'underline' | 'line-through'
  gradient?: boolean
  gradientVariant?: 'primary' | 'warm' | 'cool'
  balance?: boolean
  pretty?: boolean
  truncate?: boolean
  clamp?: number
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'body',
  size: 'md',
  weight: 'normal',
  color: 'primary',
  align: 'left',
  transform: 'none',
  decoration: 'none',
  gradient: false,
  gradientVariant: 'primary',
  balance: false,
  pretty: false,
  truncate: false,
  clamp: undefined
})

// Computed tag based on variant and size
const tag = computed(() => {
  if (props.variant === 'display') {
    return 'h1'
  } else if (props.variant === 'heading') {
    if (['xs', 'sm'].includes(props.size)) return 'h4'
    if (['md', 'lg'].includes(props.size)) return 'h3'
    if (['xl', '2xl'].includes(props.size)) return 'h2'
    return 'h1'
  } else if (props.variant === 'scripture') {
    return 'p'
  } else if (props.variant === 'caption') {
    return 'span'
  }
  return 'p'
})

// Computed classes
const typographyClasses = computed(() => {
  const classes = ['enhanced-typography']
  
  // Variant classes
  switch (props.variant) {
    case 'display':
      classes.push('font-display')
      break
    case 'heading':
      classes.push('font-heading')
      break
    case 'body':
      classes.push('font-body')
      break
    case 'scripture':
      classes.push('font-scripture')
      break
    case 'mono':
      classes.push('font-mono')
      break
    case 'caption':
      classes.push('font-body')
      break
  }
  
  // Size classes
  switch (props.size) {
    case 'xs':
      classes.push('text-xs')
      break
    case 'sm':
      classes.push('text-sm')
      break
    case 'md':
      classes.push('text-base')
      break
    case 'lg':
      classes.push('text-lg')
      break
    case 'xl':
      classes.push('text-xl')
      break
    case '2xl':
      classes.push('text-2xl')
      break
    case '3xl':
      classes.push('text-3xl')
      break
    case '4xl':
      classes.push('text-4xl')
      break
    case '5xl':
      classes.push('text-5xl')
      break
    case '6xl':
      classes.push('text-6xl')
      break
  }
  
  // Weight classes
  switch (props.weight) {
    case 'light':
      classes.push('font-light')
      break
    case 'normal':
      classes.push('font-normal')
      break
    case 'medium':
      classes.push('font-medium')
      break
    case 'semibold':
      classes.push('font-semibold')
      break
    case 'bold':
      classes.push('font-bold')
      break
    case 'extrabold':
      classes.push('font-extrabold')
      break
  }
  
  // Color classes
  if (props.gradient) {
    switch (props.gradientVariant) {
      case 'primary':
        classes.push('text-gradient')
        break
      case 'warm':
        classes.push('text-gradient-warm')
        break
      case 'cool':
        classes.push('text-gradient-cool')
        break
    }
  } else {
    switch (props.color) {
      case 'primary':
        classes.push('text-neutral-900 dark:text-neutral-100')
        break
      case 'secondary':
        classes.push('text-neutral-600 dark:text-neutral-400')
        break
      case 'tertiary':
        classes.push('text-neutral-500 dark:text-neutral-500')
        break
      case 'inverse':
        classes.push('text-neutral-50 dark:text-neutral-900')
        break
      case 'success':
        classes.push('text-success-600 dark:text-success-400')
        break
      case 'warning':
        classes.push('text-warning-600 dark:text-warning-400')
        break
      case 'error':
        classes.push('text-error-600 dark:text-error-400')
        break
      case 'accent':
        classes.push('text-accent-600 dark:text-accent-400')
        break
    }
  }
  
  // Alignment classes
  switch (props.align) {
    case 'center':
      classes.push('text-center')
      break
    case 'right':
      classes.push('text-right')
      break
    case 'justify':
      classes.push('text-justify')
      break
    default:
      classes.push('text-left')
  }
  
  // Transform classes
  switch (props.transform) {
    case 'uppercase':
      classes.push('uppercase')
      break
    case 'lowercase':
      classes.push('lowercase')
      break
    case 'capitalize':
      classes.push('capitalize')
      break
  }
  
  // Decoration classes
  switch (props.decoration) {
    case 'underline':
      classes.push('underline')
      break
    case 'line-through':
      classes.push('line-through')
      break
  }
  
  // Text wrapping classes
  if (props.balance) {
    classes.push('text-balance')
  }
  
  if (props.pretty) {
    classes.push('text-pretty')
  }
  
  if (props.truncate) {
    classes.push('truncate')
  }
  
  return classes
})

// Computed styles
const typographyStyles = computed(() => {
  const styles: Record<string, string> = {}
  
  if (props.clamp) {
    styles.display = '-webkit-box'
    styles.webkitLineClamp = props.clamp.toString()
    styles.webkitBoxOrient = 'vertical'
    styles.overflow = 'hidden'
  }
  
  return styles
})
</script>

<style scoped>
.enhanced-typography {
  @apply leading-relaxed;
}

/* Display variant specific styles */
.font-display {
  @apply tracking-tight;
}

.font-heading {
  @apply tracking-tight;
}

.font-scripture {
  @apply leading-loose;
}

.font-mono {
  @apply leading-normal;
}

/* Responsive typography */
@media (max-width: 640px) {
  .enhanced-typography {
    @apply leading-normal;
  }
  
  .font-scripture {
    @apply leading-relaxed;
  }
}

/* Gradient text effects */
.text-gradient {
  background: linear-gradient(135deg, rgb(59 130 246), rgb(147 51 234));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.text-gradient-warm {
  background: linear-gradient(135deg, rgb(245 158 11), rgb(239 68 68));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.text-gradient-cool {
  background: linear-gradient(135deg, rgb(59 130 246), rgb(34 197 94));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Text balance and pretty */
.text-balance {
  text-wrap: balance;
}

.text-pretty {
  text-wrap: pretty;
}

/* Enhanced selection */
.enhanced-typography::selection {
  background: rgb(59 130 246 / 0.2);
  color: rgb(30 64 175);
}

.dark .enhanced-typography::selection {
  background: rgb(59 130 246 / 0.3);
  color: rgb(147 197 253);
}

/* Hover effects for interactive text */
.enhanced-typography[data-interactive="true"] {
  @apply cursor-pointer transition-colors duration-200;
}

.enhanced-typography[data-interactive="true"]:hover {
  @apply text-primary-600 dark:text-primary-400;
}

/* Focus states for accessible text */
.enhanced-typography:focus {
  @apply outline-none ring-2 ring-primary-500 ring-offset-2 ring-offset-white dark:ring-offset-neutral-900 rounded;
}

/* Print styles */
@media print {
  .enhanced-typography {
    @apply text-black;
  }
  
  .text-gradient,
  .text-gradient-warm,
  .text-gradient-cool {
    @apply text-black;
    background: none;
    -webkit-text-fill-color: initial;
  }
}
</style>
