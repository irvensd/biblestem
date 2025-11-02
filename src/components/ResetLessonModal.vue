<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
    @click="closeModal"
  >
    <div
      class="relative bg-white dark:bg-neutral-800 rounded-2xl shadow-2xl max-w-md w-full mx-4 transform transition-all duration-300"
      :class="isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'"
      @click.stop
    >
      <!-- Header -->
      <div class="p-6 pb-4">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
            </svg>
          </div>
          <div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white">Reset Lesson Progress</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400">This action cannot be undone</p>
          </div>
        </div>
        
        <div class="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-xl p-4 mb-6">
          <div class="flex items-start gap-3">
            <svg class="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
            </svg>
            <div>
              <p class="text-sm font-medium text-orange-800 dark:text-orange-200 mb-1">
                Are you sure you want to reset this lesson?
              </p>
              <p class="text-xs text-orange-700 dark:text-orange-300">
                This will mark <strong>"{{ lessonTitle }}"</strong> as incomplete and allow you to study it again. Your notes and highlights will be preserved.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Actions -->
      <div class="px-6 pb-6">
        <div class="flex gap-3">
          <button
            @click="closeModal"
            class="flex-1 px-4 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl transition-colors duration-200"
          >
            Cancel
          </button>
          <button
            @click="confirmReset"
            class="group flex-1 px-4 py-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            <svg class="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
            </svg>
            Reset Lesson
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch, onUnmounted } from 'vue'

interface Props {
  isOpen: boolean
  lessonTitle: string
}

interface Emits {
  (e: 'close'): void
  (e: 'confirm'): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const closeModal = () => {
  // Restore body overflow before closing
  document.body.style.overflow = ''
  emit('close')
}

const confirmReset = () => {
  emit('confirm')
  // Small delay to ensure the reset completes before closing
  setTimeout(() => {
    closeModal()
  }, 100)
}

// Close modal on Escape key
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && props.isOpen) {
    closeModal()
  }
}

watch(() => props.isOpen, (isOpen) => {
  if (isOpen) {
    document.addEventListener('keydown', handleKeydown)
    document.body.style.overflow = 'hidden'
  } else {
    document.removeEventListener('keydown', handleKeydown)
    document.body.style.overflow = ''
  }
})

// Cleanup on component unmount
onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>
