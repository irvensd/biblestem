<template>
  <div class="min-h-screen bg-gray-50 dark:bg-neutral-900">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 text-white py-12 md:py-16 overflow-hidden">
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -top-40 -right-40 w-96 h-96 bg-white rounded-full blur-3xl opacity-10 animate-pulse"></div>
        <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-white rounded-full blur-3xl opacity-10 animate-pulse" style="animation-delay: 1s"></div>
      </div>
      
      <div class="max-w-6xl mx-auto px-6 md:px-8 lg:px-10 relative z-10">
        <div class="max-w-2xl mx-auto text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-4 animate-slide-up">
            Reset Password
          </h1>
          <p class="text-xl text-white/90 animate-slide-up" style="animation-delay: 0.1s">
            Enter your email to receive password reset instructions
          </p>
        </div>
      </div>
    </section>

    <!-- Forgot Password Form -->
    <section class="py-12 md:py-16">
      <div class="max-w-6xl mx-auto px-6 md:px-8 lg:px-10">
        <div class="max-w-md mx-auto">
          <!-- Form Card -->
          <div class="card p-8 animate-scale-in">
            <div v-if="!emailSent" class="space-y-6">
              <form @submit.prevent="handleSubmit">
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
                    :class="[
                      'form-input w-full',
                      touched.email && errors.email ? 'form-input.error' : '',
                      touched.email && !errors.email && email ? 'form-input.success' : ''
                    ]"
                    autocomplete="email"
                    @blur="validateEmailField"
                  />
                  <p v-if="touched.email && errors.email" class="mt-1 text-xs text-red-600 dark:text-red-400">
                    {{ errors.email }}
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
                  <span v-if="!isLoading">Send Reset Link</span>
                  <span v-else class="flex items-center justify-center gap-2">
                    <svg class="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
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
                <h2 class="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">Check Your Email</h2>
                <p class="text-gray-600 dark:text-gray-400 mb-4">
                  We've sent password reset instructions to <strong>{{ email }}</strong>
                </p>
                <p class="text-sm text-gray-500 dark:text-gray-500">
                  Didn't receive the email? Check your spam folder or try again.
                </p>
              </div>
              <button
                @click="emailSent = false; email = ''"
                class="btn btn-secondary w-full py-3"
              >
                Try Different Email
              </button>
            </div>

            <!-- Back to Sign In -->
            <div class="mt-8 text-center">
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
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import { validateEmail } from '../utils/validation'

const email = ref('')
const emailSent = ref(false)
const isLoading = ref(false)
const error = ref('')
const router = useRouter()
const authStore = useAuthStore()

// Validation errors
const errors = ref<Record<string, string>>({})
const touched = ref<Record<string, boolean>>({})

// Load remembered email if available
onMounted(() => {
  const rememberedEmail = localStorage.getItem('biblestem_remembered_email')
  if (rememberedEmail) {
    email.value = rememberedEmail
  }
})

const validateEmailField = () => {
  touched.value.email = true
  const result = validateEmail(email.value)
  if (result.isValid) {
    delete errors.value.email
  } else {
    errors.value.email = result.error || ''
  }
  return result.isValid
}

const handleSubmit = async () => {
  touched.value = { email: true }
  error.value = ''
  
  if (!validateEmailField()) {
    return
  }

  isLoading.value = true
  try {
    const result = await authStore.requestPasswordReset(email.value)
    if (result.success) {
      emailSent.value = true
    } else {
      error.value = result.error || 'Failed to send reset email. Please try again.'
    }
  } catch (err: any) {
    error.value = err.message || 'An error occurred. Please try again.'
  } finally {
    isLoading.value = false
  }
}
</script>

