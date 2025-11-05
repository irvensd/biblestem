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
            Verify Your Email
          </h1>
          <p class="text-xl text-white/90 animate-slide-up" style="animation-delay: 0.1s">
            Check your inbox for verification instructions
          </p>
        </div>
      </div>
    </section>

    <!-- Verify Email Content -->
    <section class="py-12 md:py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-md mx-auto">
          <!-- Card -->
          <div class="card p-8 animate-scale-in">
            <div v-if="!emailVerified" class="text-center space-y-6">
              <!-- Icon -->
              <div class="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto">
                <svg class="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>

              <!-- Instructions -->
              <div>
                <h2 class="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">Check Your Email</h2>
                <p class="text-gray-600 dark:text-gray-400 mb-4">
                  We've sent a verification email to <strong>{{ email }}</strong>
                </p>
                <p class="text-sm text-gray-500 dark:text-gray-500">
                  Click the link in the email to verify your account. The link will expire in 24 hours.
                </p>
              </div>

              <!-- Error Message -->
              <div v-if="error" class="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                <p class="text-sm text-red-600 dark:text-red-400">{{ error }}</p>
              </div>

              <!-- Resend Button -->
              <div class="space-y-3">
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Didn't receive the email?
                </p>
                <button
                  @click="handleResend"
                  :disabled="isResending || isLoading"
                  class="btn btn-secondary w-full py-3"
                >
                  <span v-if="!isResending">Resend Verification Email</span>
                  <span v-else class="flex items-center justify-center gap-2">
                    <svg class="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                </button>
              </div>

              <!-- Success Message -->
              <div v-if="resendSuccess" class="p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                <p class="text-sm text-green-600 dark:text-green-400">Verification email sent! Please check your inbox.</p>
              </div>
            </div>

            <!-- Success State -->
            <div v-else class="text-center space-y-6">
              <div class="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto">
                <svg class="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h2 class="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">Email Verified!</h2>
                <p class="text-gray-600 dark:text-gray-400 mb-4">
                  Your email has been verified successfully. You can now access all features.
                </p>
              </div>
              <router-link 
                to="/dashboard"
                class="btn btn-primary w-full py-3 inline-block text-center"
              >
                Go to Dashboard
              </router-link>
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
import { useRoute, useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const email = ref('')
const emailVerified = ref(false)
const isResending = ref(false)
const isLoading = ref(false)
const error = ref('')
const resendSuccess = ref(false)
const route = useRoute()
const router = useRouter()
const authStore = useAuthStore()

// Extract email from query params or auth store
onMounted(async () => {
  // Get email from query params or auth store
  email.value = (route.query.email as string) || authStore.user?.email || ''
  
  // Check if verification token is in URL (Supabase handles this automatically)
  if (typeof window !== 'undefined') {
    const hash = window.location.hash
    if (hash.includes('token_hash=') || hash.includes('access_token=')) {
      // Auto-verify if token is present
      try {
        isLoading.value = true
        const hashParams = new URLSearchParams(hash.substring(1))
        const tokenHash = hashParams.get('token_hash') || hashParams.get('access_token') || ''
        
        if (tokenHash) {
          const result = await authStore.verifyEmail(tokenHash)
          if (result.success) {
            emailVerified.value = true
            // Clean up URL
            window.history.replaceState({}, '', window.location.pathname)
          } else {
            error.value = result.error || 'Failed to verify email'
          }
        }
      } catch (err: any) {
        error.value = err.message || 'Failed to verify email'
      } finally {
        isLoading.value = false
      }
    }
  }
})

const handleResend = async () => {
  if (!email.value) {
    error.value = 'Email address is required'
    return
  }

  isResending.value = true
  error.value = ''
  resendSuccess.value = false

  try {
    const result = await authStore.resendVerificationEmail(email.value)
    if (result.success) {
      resendSuccess.value = true
      setTimeout(() => {
        resendSuccess.value = false
      }, 5000)
    } else {
      error.value = result.error || 'Failed to resend verification email'
    }
  } catch (err: any) {
    error.value = err.message || 'An error occurred. Please try again.'
  } finally {
    isResending.value = false
  }
}
</script>

