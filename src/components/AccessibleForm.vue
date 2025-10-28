<template>
  <form
    ref="formRef"
    class="accessible-form"
    :class="formClasses"
    :novalidate="true"
    @submit="handleSubmit"
    @reset="handleReset"
  >
    <!-- Form Header -->
    <div v-if="showHeader" class="form-header" :class="headerClasses">
      <h2 v-if="title" :id="titleId" class="form-title" :class="titleClasses">
        {{ title }}
      </h2>
      <p v-if="description" :id="descriptionId" class="form-description" :class="descriptionClasses">
        {{ description }}
      </p>
    </div>

    <!-- Form Fields -->
    <div class="form-fields" :class="fieldsClasses">
      <slot />
    </div>

    <!-- Form Actions -->
    <div v-if="$slots.actions" class="form-actions" :class="actionsClasses">
      <slot name="actions" />
    </div>

    <!-- Form Status -->
    <div v-if="showStatus" class="form-status" :class="statusClasses">
      <!-- Success Message -->
      <div
        v-if="isSuccess"
        class="status-message status-success"
        :class="successClasses"
        role="status"
        :aria-live="'polite'"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        <span>{{ successMessage }}</span>
      </div>

      <!-- Error Message -->
      <div
        v-if="hasErrors"
        class="status-message status-error"
        :class="errorClasses"
        role="alert"
        :aria-live="'assertive'"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
        <div>
          <h4 class="error-title">Please correct the following errors:</h4>
          <ul class="error-list">
            <li v-for="(error, field) in errors" :key="field" class="error-item">
              <a
                :href="`#${field}`"
                class="error-link"
                @click="focusField(field)"
              >
                {{ error }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Loading State -->
      <div
        v-if="isLoading"
        class="status-message status-loading"
        :class="loadingClasses"
        role="status"
        :aria-live="'polite'"
      >
        <div class="spinner-ring"></div>
        <span>{{ loadingMessage }}</span>
      </div>
    </div>

    <!-- Screen Reader Only Text -->
    <div class="sr-only" :aria-live="'polite'">
      {{ screenReaderText }}
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick } from 'vue'
import { useAccessibility, useFocusManagement } from '../composables/useAccessibility'

interface FormField {
  name: string
  value: any
  required?: boolean
  valid?: boolean
  error?: string
}

interface Props {
  title?: string
  description?: string
  showHeader?: boolean
  showStatus?: boolean
  validateOnChange?: boolean
  validateOnBlur?: boolean
  validateOnSubmit?: boolean
  autoFocus?: boolean
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'card' | 'minimal'
}

const props = withDefaults(defineProps<Props>(), {
  showHeader: true,
  showStatus: true,
  validateOnChange: true,
  validateOnBlur: true,
  validateOnSubmit: true,
  autoFocus: false,
  size: 'md',
  variant: 'default'
})

const emit = defineEmits<{
  submit: [data: Record<string, any>]
  reset: []
  validate: [field: string, value: any]
  'field-change': [field: string, value: any]
  'field-blur': [field: string, value: any]
  'field-focus': [field: string, value: any]
}>()

// Refs
const formRef = ref<HTMLFormElement | null>(null)
const fields = ref<Map<string, FormField>>(new Map())
const errors = ref<Record<string, string>>({})
const isSubmitting = ref(false)
const isSuccess = ref(false)
const isLoading = ref(false)
const successMessage = ref('')
const loadingMessage = ref('')
const titleId = ref(`form-title-${Math.random().toString(36).substr(2, 9)}`)
const descriptionId = ref(`form-description-${Math.random().toString(36).substr(2, 9)}`)

// Accessibility
const { announceSuccess, announceError, announceLoading } = useAccessibility()
const { focusElement } = useFocusManagement()

// Computed
const formClasses = computed(() => {
  const classes = ['space-y-6']
  
  switch (props.variant) {
    case 'card':
      classes.push('bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800 p-6')
      break
    case 'minimal':
      classes.push('space-y-4')
      break
    default:
      classes.push('space-y-6')
  }
  
  switch (props.size) {
    case 'sm':
      classes.push('text-sm')
      break
    case 'lg':
      classes.push('text-lg')
      break
    default:
      classes.push('text-base')
  }
  
  return classes
})

const headerClasses = computed(() => {
  const classes = []
  
  if (props.variant === 'card') {
    classes.push('pb-4 border-b border-neutral-200 dark:border-neutral-800')
  }
  
  return classes
})

const titleClasses = computed(() => {
  const classes = ['font-semibold text-neutral-900 dark:text-neutral-100']
  
  switch (props.size) {
    case 'sm':
      classes.push('text-lg')
      break
    case 'lg':
      classes.push('text-2xl')
      break
    default:
      classes.push('text-xl')
  }
  
  return classes
})

const descriptionClasses = computed(() => {
  return ['text-neutral-600 dark:text-neutral-400 mt-1']
})

const fieldsClasses = computed(() => {
  const classes = ['space-y-4']
  
  if (props.variant === 'minimal') {
    classes.push('space-y-3')
  }
  
  return classes
})

const actionsClasses = computed(() => {
  const classes = ['flex items-center justify-end space-x-3 pt-4']
  
  if (props.variant === 'card') {
    classes.push('border-t border-neutral-200 dark:border-neutral-800')
  }
  
  return classes
})

const statusClasses = computed(() => {
  return ['mt-4']
})

const successClasses = computed(() => {
  return ['flex items-center space-x-2 p-4 bg-success-50 dark:bg-success-900/20 border border-success-200 dark:border-success-800 rounded-lg text-success-800 dark:text-success-200']
})

const errorClasses = computed(() => {
  return ['flex items-start space-x-2 p-4 bg-error-50 dark:bg-error-900/20 border border-error-200 dark:border-error-800 rounded-lg text-error-800 dark:text-error-200']
})

const loadingClasses = computed(() => {
  return ['flex items-center space-x-2 p-4 bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded-lg text-primary-800 dark:text-primary-200']
})

const hasErrors = computed(() => {
  return Object.keys(errors.value).length > 0
})

const screenReaderText = computed(() => {
  if (isSuccess.value) {
    return `Form submitted successfully: ${successMessage.value}`
  }
  
  if (hasErrors.value) {
    const errorCount = Object.keys(errors.value).length
    return `Form has ${errorCount} error${errorCount > 1 ? 's' : ''}. Please review and correct.`
  }
  
  if (isLoading.value) {
    return `Form is loading: ${loadingMessage.value}`
  }
  
  return 'Form ready for submission'
})

// Methods
const registerField = (name: string, field: FormField) => {
  fields.value.set(name, field)
}

const unregisterField = (name: string) => {
  fields.value.delete(name)
  delete errors.value[name]
}

const updateField = (name: string, updates: Partial<FormField>) => {
  const field = fields.value.get(name)
  if (field) {
    Object.assign(field, updates)
    fields.value.set(name, field)
    
    emit('field-change', name, field.value)
    
    // Validate on change
    if (props.validateOnChange) {
      validateField(name, field.value)
    }
  }
}

const validateField = (name: string, value: any): boolean => {
  const field = fields.value.get(name)
  if (!field) return true
  
  let isValid = true
  let errorMessage = ''
  
  // Required validation
  if (field.required && (!value || (typeof value === 'string' && value.trim() === ''))) {
    isValid = false
    errorMessage = `${name} is required`
  }
  
  // Custom validation
  emit('validate', name, value)
  
  // Update field state
  field.valid = isValid
  field.error = errorMessage
  
  // Update errors
  if (isValid) {
    delete errors.value[name]
  } else {
    errors.value[name] = errorMessage
  }
  
  return isValid
}

const validateForm = (): boolean => {
  let isValid = true
  
  fields.value.forEach((field, name) => {
    const fieldValid = validateField(name, field.value)
    if (!fieldValid) {
      isValid = false
    }
  })
  
  return isValid
}

const focusField = (fieldName: string) => {
  const fieldElement = document.querySelector(`[name="${fieldName}"]`) as HTMLElement
  if (fieldElement) {
    focusElement(fieldElement)
  }
}

const handleSubmit = async (event: Event) => {
  event.preventDefault()
  
  if (isSubmitting.value) return
  
  // Validate form
  if (props.validateOnSubmit && !validateForm()) {
    announceError('Form has validation errors. Please correct them before submitting.')
    focusField(Object.keys(errors.value)[0])
    return
  }
  
  // Prepare form data
  const formData: Record<string, any> = {}
  fields.value.forEach((field, name) => {
    formData[name] = field.value
  })
  
  // Submit form
  isSubmitting.value = true
  isLoading.value = true
  loadingMessage.value = 'Submitting form...'
  
  try {
    await emit('submit', formData)
    
    // Success
    isSuccess.value = true
    successMessage.value = 'Form submitted successfully!'
    announceSuccess('Form submitted successfully')
    
    // Reset form after success
    setTimeout(() => {
      handleReset()
    }, 3000)
    
  } catch (error) {
    // Error
    announceError('Form submission failed. Please try again.')
    console.error('Form submission error:', error)
  } finally {
    isSubmitting.value = false
    isLoading.value = false
  }
}

const handleReset = () => {
  // Reset all fields
  fields.value.forEach((field, name) => {
    field.value = ''
    field.valid = undefined
    field.error = undefined
  })
  
  // Clear errors
  errors.value = {}
  
  // Reset states
  isSuccess.value = false
  isLoading.value = false
  
  // Reset form element
  if (formRef.value) {
    formRef.value.reset()
  }
  
  emit('reset')
  announceSuccess('Form reset')
}

// Watch for errors
watch(errors, (newErrors) => {
  if (Object.keys(newErrors).length > 0) {
    announceError(`Form has ${Object.keys(newErrors).length} validation error${Object.keys(newErrors).length > 1 ? 's' : ''}`)
  }
}, { deep: true })

// Expose methods for parent components
defineExpose({
  registerField,
  unregisterField,
  updateField,
  validateField,
  validateForm,
  focusField,
  handleSubmit,
  handleReset,
  fields: fields.value,
  errors: errors.value,
  hasErrors,
  isSubmitting,
  isSuccess,
  isLoading
})
</script>

<style scoped>
.accessible-form {
  @apply relative;
}

.form-header {
  @apply flex-shrink-0;
}

.form-title {
  @apply flex-1;
}

.form-description {
  @apply flex-1;
}

.form-fields {
  @apply flex-1;
}

.form-actions {
  @apply flex-shrink-0;
}

.form-status {
  @apply flex-shrink-0;
}

.status-message {
  @apply flex items-start space-x-2;
}

.status-success {
  @apply text-success-800 dark:text-success-200;
}

.status-error {
  @apply text-error-800 dark:text-error-200;
}

.status-loading {
  @apply text-primary-800 dark:text-primary-200;
}

.error-title {
  @apply font-semibold mb-2;
}

.error-list {
  @apply space-y-1;
}

.error-item {
  @apply list-disc list-inside;
}

.error-link {
  @apply underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded;
}

.spinner-ring {
  @apply w-5 h-5 border-2 border-transparent border-t-current rounded-full animate-spin;
}

/* Screen reader only text */
.sr-only {
  @apply absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0;
  clip: rect(0, 0, 0, 0);
}

/* High contrast mode */
@media (prefers-contrast: high) {
  .accessible-form {
    @apply border-2 border-neutral-900 dark:border-neutral-100;
  }
  
  .status-success {
    @apply border-2 border-success-900 dark:border-success-100;
  }
  
  .status-error {
    @apply border-2 border-error-900 dark:border-error-100;
  }
  
  .status-loading {
    @apply border-2 border-primary-900 dark:border-primary-100;
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .spinner-ring {
    @apply animate-none;
  }
}

/* Mobile optimizations */
@media (max-width: 640px) {
  .form-actions {
    @apply flex-col space-x-0 space-y-3;
  }
  
  .form-actions > * {
    @apply w-full;
  }
}

/* Print styles */
@media print {
  .form-actions,
  .form-status {
    @apply hidden;
  }
  
  .accessible-form {
    @apply border-none shadow-none;
  }
}
</style>
