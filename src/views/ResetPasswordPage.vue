<template>
  <div class="min-h-screen bg-gray-50 dark:bg-neutral-900">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 text-white py-12 md:py-16 overflow-hidden">
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -top-40 -right-40 w-96 h-96 bg-white rounded-full blur-3xl opacity-10 animate-pulse"></div>
        <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-white rounded-full blur-3xl opacity-10 animate-pulse" style="animation-delay: 1s"></div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-2xl mx-auto text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-4 animate-slide-up">
            Set New Password
          </h1>
          <p class="text-xl text-white/90 animate-slide-up" style="animation-delay: 0.1s">
            Enter your new password below
          </p>
        </div>
      </div>
    </section>

    <!-- Reset Password Form -->
    <section class="py-12 md:py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-md mx-auto">
          <!-- Form Card -->
          <div class="card p-8 animate-scale-in">
            <div v-if="!passwordReset" class="space-y-6">
              <form @submit.prevent="handleSubmit">
                <!-- New Password -->
                <div>
                  <label for="password" class="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                    New Password
                  </label>
                  <input
                    id="password"
                    v-model="password"
                    type="password"
                    required
                    placeholder="Enter new password"
                    :class="[
                      'form-input w-full',
                      touched.password && errors.password ? 'form-input.error' : '',
                      touched.password && !errors.password && password ? 'form-input.success' : ''
                    ]"
                    autocomplete="new-password"
                    @blur="validatePasswordField"
                  />
                  <p v-if="touched.password && errors.password" class="mt-1 text-xs text-red-600 dark:text-red-400">
                    {{ errors.password }}
                  </p>
                  <p v-else-if="password" class="mt-2 text-xs text-gray-500 dark:text-gray-400">
                    Must be at least 8 characters
                  </p>
                </div>

                <!-- Confirm Password -->
                <div>
                  <label for="confirmPassword" class="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                    Confirm Password
                  </label>
                  <input
                    id="confirmPassword"
                    v-model="confirmPassword"
                    type="password"
                    required
                    placeholder="Confirm new password"
                    :class="[
                      'form-input w-full',
                      touched.confirmPassword && errors.confirmPassword ? 'form-input.error' : '',
                      touched.confirmPassword && !errors.confirmPassword && confirmPassword && password === confirmPassword ? 'form-input.success' : ''
                    ]"
                    autocomplete="new-password"
                    @blur="validateConfirmPasswordField"
                  />
                  <p v-if="touched.confirmPassword && errors.confirmPassword" class="mt-1 text-xs text-red-600 dark:text-red-400">
                    {{ errors.confirmPassword }}
                  </p>
                </div>

                <!-- Error Message -->
                <div v-if="error" class="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                  <p class="text-sm text-red-600 dark:text-red-400">{{ error }}</p>
                </div>

                <!-- Submit Button -->
                <button
                  type="submit"
                  :disabled="isLoading"
                  class="btn btn-primary w-full py-3"
                >
                  <span v-if="!isLoading">Reset Password</span>
                  <span v-else class="flex items-center justify-center gap-2">
                    <svg class="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Resetting...
                  </span>
                </button>
              </form>
            </div>

            <!-- Success Message -->
            <div v-else class="text-center space-y-6">
              <div class="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto">
                <svg class="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h2 class="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">Password Reset Successful</h2>
                <p class="text-gray-600 dark:text-gray-400 mb-4">
                  Your password has been reset successfully. You can now sign in with your new password.
                </p>
              </div>
              <router-link 
                to="/sign-in"
                class="btn btn-primary w-full py-3 inline-block text-center"
              >
                Sign In
              </router-link>
            </div>

            <!-- Back to Sign In -->
            <div v-if="!passwordReset" class="mt-8 text-center">
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
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import { validatePassword } from '../utils/validation'

const password = ref('')
const confirmPassword = ref('')
const passwordReset = ref(false)
const isLoading = ref(false)
const error = ref('')
const route = useRoute()
const router = useRouter()
const authStore = useAuthStore()

// Validation errors
const errors = ref<Record<string, string>>({})
const touched = ref<Record<string, boolean>>({})

// Extract token from URL hash (Supabase sends tokens in hash)
const getResetToken = () => {
  if (typeof window === 'undefined') return null
  
  // Supabase password reset tokens are in the URL hash
  const hash = window.location.hash
  if (hash.includes('access_token=') || hash.includes('type=recovery')) {
    // Token is in hash - Supabase will handle this automatically
    return 'hash_token' // Placeholder - actual token is in URL hash
  }
  // Also check query params (fallback)
  const token = route.query.token as string
  return token || null
}

onMounted(async () => {
  // Check if we have a token in the URL
  if (typeof window !== 'undefined') {
    const hash = window.location.hash
    const hasToken = hash.includes('access_token=') || hash.includes('type=recovery')
    
    if (!hasToken) {
      error.value = 'Invalid or missing reset token. Please request a new password reset link.'
    }
  }
})

const validatePasswordField = () => {
  touched.value.password = true
  const result = validatePassword(password.value, { minLength: 8 })
  if (result.isValid) {
    delete errors.value.password
  } else {
    errors.value.password = result.error || ''
  }
  return result.isValid
}

const validateConfirmPasswordField = () => {
  touched.value.confirmPassword = true
  if (!confirmPassword.value) {
    errors.value.confirmPassword = 'Please confirm your password'
    return false
  }
  if (password.value !== confirmPassword.value) {
    errors.value.confirmPassword = 'Passwords do not match'
    return false
  }
  delete errors.value.confirmPassword
  return true
}

const handleSubmit = async () => {
  touched.value = { password: true, confirmPassword: true }
  error.value = ''
  
  if (!validatePasswordField() || !validateConfirmPasswordField()) {
    return
  }

  // Check if we have a token in the URL hash
  if (typeof window !== 'undefined') {
    const hash = window.location.hash
    const hasToken = hash.includes('access_token=') || hash.includes('type=recovery')
    
    if (!hasToken) {
      error.value = 'Invalid or missing reset token. Please request a new password reset link.'
      return
    }
  }

  isLoading.value = true
  try {
    // Pass empty string as token - the auth store will extract from URL hash
    const result = await authStore.resetPassword('', password.value)
    if (result.success) {
      passwordReset.value = true
      // Clean up URL hash
      if (typeof window !== 'undefined') {
        window.history.replaceState({}, '', window.location.pathname)
      }
    } else {
      error.value = result.error || 'Failed to reset password. Please try again.'
    }
  } catch (err: any) {
    error.value = err.message || 'An error occurred. Please try again.'
  } finally {
    isLoading.value = false
  }
}
</script>

