<template>
  <div class="form-field">
    <label 
      v-if="label"
      :for="id" 
      class="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300"
      :class="{ 'text-red-600 dark:text-red-400': hasError }"
    >
      {{ label }}
      <span v-if="required" class="text-red-500 ml-1">*</span>
    </label>
    
    <div class="relative">
      <slot :hasError="hasError" :isValid="isValid" />
      
      <!-- Validation Icon -->
      <div 
        v-if="showValidationIcon && (hasError || isValid)"
        class="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
      >
        <!-- Error Icon -->
        <svg 
          v-if="hasError"
          class="w-5 h-5 text-red-500"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path 
            fill-rule="evenodd" 
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" 
            clip-rule="evenodd" 
          />
        </svg>
        
        <!-- Success Icon -->
        <svg 
          v-else-if="isValid"
          class="w-5 h-5 text-green-500"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path 
            fill-rule="evenodd" 
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
            clip-rule="evenodd" 
          />
        </svg>
      </div>
    </div>
    
    <!-- Error Message -->
    <Transition name="slide-fade">
      <div 
        v-if="hasError && errorMessage" 
        class="mt-2 flex items-start gap-2 text-xs text-red-600 dark:text-red-400"
      >
        <svg class="w-4 h-4 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
        </svg>
        <span>{{ errorMessage }}</span>
      </div>
    </Transition>
    
    <!-- Helper Text -->
    <p 
      v-if="helperText && !hasError" 
      class="mt-2 text-xs text-gray-500 dark:text-gray-400"
    >
      {{ helperText }}
    </p>
    
    <!-- Success Message -->
    <Transition name="slide-fade">
      <div 
        v-if="successMessage && isValid" 
        class="mt-2 flex items-start gap-2 text-xs text-green-600 dark:text-green-400"
      >
        <svg class="w-4 h-4 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
        </svg>
        <span>{{ successMessage }}</span>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  id?: string
  label?: string
  errorMessage?: string
  helperText?: string
  successMessage?: string
  required?: boolean
  showValidationIcon?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  showValidationIcon: true,
  required: false,
})

// Computed properties
const hasError = computed(() => !!props.errorMessage)
const isValid = computed(() => !props.errorMessage && props.successMessage !== undefined)
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.15s ease-in;
}

.slide-fade-enter-from {
  transform: translateY(-4px);
  opacity: 0;
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-2px);
}
</style>

