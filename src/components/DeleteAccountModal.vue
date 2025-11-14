<template>
  <AccessibleModal
    :is-open="isOpen"
    title="Delete Account"
    description="This action cannot be undone"
    size="md"
    :close-on-backdrop="!isDeleting"
    :close-on-escape="!isDeleting"
    :show-close-button="!isDeleting"
    @close="handleClose"
  >
    <template #title>
      <div class="flex items-start gap-4">
        <div class="w-14 h-14 bg-red-100 dark:bg-red-900/30 rounded-2xl flex items-center justify-center flex-shrink-0">
          <svg class="w-7 h-7 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </div>
        <div class="flex-1">
          <h2 class="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-1">Delete Account</h2>
          <p class="text-sm text-neutral-600 dark:text-neutral-400">This action cannot be undone</p>
        </div>
      </div>
    </template>

    <div class="space-y-6">
      <!-- Warning Message -->
      <div class="bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 rounded-xl p-5">
        <div class="flex items-start gap-3">
          <svg class="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
              clip-rule="evenodd"
            />
          </svg>
          <div class="flex-1">
            <h3 class="font-semibold text-red-900 dark:text-red-100 mb-1">Warning: Permanent Deletion</h3>
            <p class="text-sm text-red-700 dark:text-red-300">
              This will permanently delete your account and all associated data. This action cannot be undone.
            </p>
          </div>
        </div>
      </div>

      <!-- What Will Be Deleted -->
      <div class="space-y-3">
        <h4 class="text-base font-semibold text-neutral-900 dark:text-neutral-100">The following will be deleted:</h4>
        <ul class="space-y-3 text-sm text-neutral-700 dark:text-neutral-300">
          <li class="flex items-start gap-2">
            <svg class="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span>Your profile and account information</span>
          </li>
          <li class="flex items-start gap-2">
            <svg class="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span>All study progress and completion data</span>
          </li>
          <li class="flex items-start gap-2">
            <svg class="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span>All notes and reflections</span>
          </li>
          <li class="flex items-start gap-2">
            <svg class="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span>All bookmarks and saved items</span>
          </li>
        </ul>
      </div>

      <!-- Confirmation Input -->
      <div class="space-y-3">
        <label for="delete-confirm" class="block text-sm font-semibold text-neutral-900 dark:text-neutral-100">
          Type <span class="font-mono bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 px-2.5 py-1 rounded-md">DELETE</span> to confirm:
        </label>
        <input
          id="delete-confirm"
          v-model="confirmationText"
          type="text"
          placeholder="Type DELETE here"
          class="w-full px-4 py-3.5 rounded-xl border-2 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2"
          :class="
            confirmationText && confirmationText !== 'DELETE'
              ? 'border-red-300 dark:border-red-700 bg-red-50 dark:bg-red-900/20 focus:border-red-500 dark:focus:border-red-500 focus:ring-red-500'
              : 'border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 focus:border-primary-500 dark:focus:border-primary-500 focus:ring-primary-500'
          "
          :disabled="isDeleting"
          @keydown.enter="handleDelete"
        />
        <p v-if="confirmationText && confirmationText !== 'DELETE'" class="text-sm text-red-600 dark:text-red-400 font-medium flex items-center gap-2">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
          </svg>
          Text must match exactly: DELETE
        </p>
      </div>

      <!-- Error Message -->
      <div v-if="errorMessage" class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4">
        <p class="text-sm text-red-700 dark:text-red-300">{{ errorMessage }}</p>
      </div>
    </div>

    <template #footer>
      <button
        type="button"
        @click="handleClose"
        class="px-6 py-3 rounded-xl border-2 border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 font-semibold hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-all focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2"
        :disabled="isDeleting"
      >
        Cancel
      </button>
      <button
        type="button"
        @click="handleDelete"
        class="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-semibold transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 shadow-lg hover:shadow-xl"
        :disabled="confirmationText !== 'DELETE' || isDeleting"
      >
        <svg
          v-if="isDeleting"
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
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
        {{ isDeleting ? 'Deleting...' : 'Delete Account' }}
      </button>
    </template>
  </AccessibleModal>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import AccessibleModal from './AccessibleModal.vue'

interface Props {
  isOpen: boolean
}

const props = defineProps<Props>()
const emit = defineEmits<{
  'update:isOpen': [value: boolean]
  'close': []
  'deleted': []
}>()

const router = useRouter()
const confirmationText = ref('')
const isDeleting = ref(false)
const errorMessage = ref('')

// Reset confirmation when modal opens/closes
watch(() => props.isOpen, (newValue) => {
  if (newValue) {
    confirmationText.value = ''
    errorMessage.value = ''
    isDeleting.value = false
  }
})

const handleClose = () => {
  if (!isDeleting.value) {
    emit('update:isOpen', false)
    emit('close')
  }
}

const handleDelete = async () => {
  if (confirmationText.value !== 'DELETE' || isDeleting.value) {
    return
  }

  isDeleting.value = true
  errorMessage.value = ''

  try {
    const { deleteUserAccount } = await import('../services/accountDeletionService')
    await deleteUserAccount()
    
    // Success - emit deleted event and close
    emit('deleted')
    emit('update:isOpen', false)
    
    // Redirect to home
    router.push('/')
  } catch (error: any) {
    console.error('Error deleting account:', error)
    errorMessage.value = error.message || 'Failed to delete account. Please try again or contact support.'
    isDeleting.value = false
  }
}
</script>

