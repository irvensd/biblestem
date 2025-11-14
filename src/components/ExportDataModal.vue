<template>
  <AccessibleModal
    :is-open="isOpen"
    title="Export Your Data"
    description="Download a copy of all your data"
    size="md"
    :close-on-backdrop="!isExporting"
    :close-on-escape="!isExporting"
    :show-close-button="!isExporting"
    @close="handleClose"
  >
    <template #title>
      <div class="flex items-start gap-4">
        <div class="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center flex-shrink-0">
          <svg class="w-7 h-7 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>
        <div class="flex-1">
          <h2 class="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-1">Export Your Data</h2>
          <p class="text-sm text-neutral-600 dark:text-neutral-400">Download a copy of all your data</p>
        </div>
      </div>
    </template>

    <div class="space-y-6">
      <!-- Info Message -->
      <div class="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-800 rounded-xl p-5">
        <div class="flex items-start gap-3">
          <svg class="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clip-rule="evenodd"
            />
          </svg>
          <div class="flex-1">
            <h3 class="font-semibold text-blue-900 dark:text-blue-100 mb-1">What will be exported?</h3>
            <p class="text-sm text-blue-700 dark:text-blue-300">
              Your exported file will include your profile information, study progress, notes, and settings in JSON format.
            </p>
          </div>
        </div>
      </div>

      <!-- What Will Be Exported -->
      <div class="space-y-3">
        <h4 class="text-base font-semibold text-neutral-900 dark:text-neutral-100">Your export includes:</h4>
        <ul class="space-y-3 text-sm text-neutral-700 dark:text-neutral-300">
          <li class="flex items-start gap-2">
            <svg class="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Your profile and account information</span>
          </li>
          <li class="flex items-start gap-2">
            <svg class="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>All study progress and completion data</span>
          </li>
          <li class="flex items-start gap-2">
            <svg class="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>All notes and reflections</span>
          </li>
          <li class="flex items-start gap-2">
            <svg class="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Your app settings and preferences</span>
          </li>
        </ul>
      </div>

      <!-- Success Message -->
      <div v-if="isSuccess" class="bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800 rounded-xl p-5">
        <div class="flex items-start gap-3">
          <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            />
          </svg>
          <div class="flex-1">
            <h3 class="font-semibold text-green-900 dark:text-green-100 mb-1">Export Successful!</h3>
            <p class="text-sm text-green-700 dark:text-green-300">
              Your data has been downloaded. Check your downloads folder for the JSON file.
            </p>
          </div>
        </div>
      </div>

      <!-- Error Message -->
      <div v-if="errorMessage" class="bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 rounded-xl p-5">
        <div class="flex items-start gap-3">
          <svg class="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clip-rule="evenodd"
            />
          </svg>
          <div class="flex-1">
            <h3 class="font-semibold text-red-900 dark:text-red-100 mb-1">Export Failed</h3>
            <p class="text-sm text-red-700 dark:text-red-300">{{ errorMessage }}</p>
          </div>
        </div>
      </div>
    </div>

    <template #footer>
      <button
        v-if="!isSuccess"
        type="button"
        @click="handleClose"
        class="px-6 py-3 rounded-xl border-2 border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 font-semibold hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-all focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2"
        :disabled="isExporting"
      >
        Cancel
      </button>
      <button
        v-if="!isSuccess"
        type="button"
        @click="handleExport"
        class="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-lg hover:shadow-xl"
        :disabled="isExporting"
      >
        <svg
          v-if="isExporting"
          class="animate-spin w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
        <svg
          v-else
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        {{ isExporting ? 'Exporting...' : 'Export Data' }}
      </button>
      <button
        v-if="isSuccess"
        type="button"
        @click="handleClose"
        class="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-lg hover:shadow-xl"
      >
        Done
      </button>
    </template>
  </AccessibleModal>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import AccessibleModal from './AccessibleModal.vue'

interface Props {
  isOpen: boolean
}

const props = defineProps<Props>()
const emit = defineEmits<{
  'update:isOpen': [value: boolean]
  'close': []
  'exported': []
}>()

const isExporting = ref(false)
const isSuccess = ref(false)
const errorMessage = ref('')

// Reset state when modal opens/closes
watch(() => props.isOpen, (newValue) => {
  if (newValue) {
    isExporting.value = false
    isSuccess.value = false
    errorMessage.value = ''
  }
})

const handleClose = () => {
  if (!isExporting.value) {
    emit('update:isOpen', false)
    emit('close')
    // Reset success state after a delay to allow modal to close
    setTimeout(() => {
      isSuccess.value = false
    }, 300)
  }
}

const handleExport = async () => {
  if (isExporting.value) {
    return
  }

  isExporting.value = true
  errorMessage.value = ''
  isSuccess.value = false

  try {
    const { downloadUserData } = await import('../services/dataExportService')
    await downloadUserData()
    
    // Success
    isSuccess.value = true
    emit('exported')
    
    // Auto-close after 3 seconds
    setTimeout(() => {
      if (isSuccess.value) {
        handleClose()
      }
    }, 3000)
  } catch (error: any) {
    console.error('Error exporting data:', error)
    errorMessage.value = error.message || 'Failed to export data. Please try again or contact support.'
    isSuccess.value = false
  } finally {
    isExporting.value = false
  }
}

// Auto-start export when modal opens
watch(() => props.isOpen, (newValue) => {
  if (newValue && !isExporting.value && !isSuccess.value) {
    // Small delay to let modal render
    setTimeout(() => {
      handleExport()
    }, 100)
  }
})
</script>

