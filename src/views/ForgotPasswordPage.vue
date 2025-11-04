<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-neutral-900 dark:to-neutral-800 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <!-- Header -->
      <div class="text-center">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">Reset Password</h1>
        <p class="text-gray-600 dark:text-gray-400">
          Enter your email address and we'll send you a link to reset your password.
        </p>
      </div>

      <!-- Form Card -->
      <div class="card p-8 animate-scale-in">
        <!-- Success Message -->
        <div v-if="success" class="rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-4 mb-6">
          <div class="flex items-start gap-3">
            <svg class="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            <div class="flex-1">
              <p class="text-sm font-medium text-green-800 dark:text-green-200">
                Check your email! We've sent you a link to reset your password.
              </p>
              <p class="text-xs text-green-700 dark:text-green-300 mt-1">
                Didn't receive the email? Check your spam folder or try again.
              </p>
            </div>
          </div>
        </div>

        <!-- Error Message -->
        <div v-if="error" class="rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-4 mb-6">
          <div class="flex items-start gap-3">
            <svg class="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
            </svg>
            <div class="flex-1">
              <p class="text-sm font-medium text-red-800 dark:text-red-200">{{ error }}</p>
            </div>
          </div>
        </div>

        <form v-if="!success" @submit.prevent="handleSubmit" class="space-y-6">
          <!-- Email -->
          <div>
            <label for="email" class="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
              Email Address
            </label>
            <input
              id="email"
              v-model="email"
              type="email"
              required
              placeholder="your@email.com"
              class="form-input w-full"
              autocomplete="email"
            />
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            :disabled="authStore.isLoading"
            class="btn btn-primary w-full py-3"
          >
            <span v-if="!authStore.isLoading">Send Reset Link</span>
            <span v-else class="flex items-center justify-center gap-2">
              <svg class="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
          </button>
        </form>

        <!-- Back to Sign In -->
        <div class="mt-6 text-center">
          <router-link
            to="/sign-in"
            class="text-sm text-primary-600 dark:text-primary-400 font-semibold hover:underline"
          >
            ← Back to Sign In
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const email = ref('')
const error = ref<string | null>(null)
const success = ref(false)
const router = useRouter()
const authStore = useAuthStore()

// Clear error when user starts typing
watch(email, () => {
  if (error.value) {
    error.value = null
  }
})

const handleSubmit = async () => {
  error.value = null
  success.value = false

  const result = await authStore.forgotPassword(email.value)

  if (result.success) {
    success.value = true
  } else {
    error.value = result.error || 'Failed to send password reset email. Please try again.'
  }
}
</script>
