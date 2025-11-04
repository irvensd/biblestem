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
            Welcome Back
          </h1>
          <p class="text-xl text-white/90 animate-slide-up" style="animation-delay: 0.1s">
            Continue your journey into God's Word
          </p>
        </div>
      </div>
    </section>

    <!-- Sign In Form -->
    <section class="py-12 md:py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-md mx-auto">
          <!-- Sign In Card -->
          <div class="card p-8 animate-scale-in">
            <form @submit.prevent="handleSubmit" class="space-y-6">
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

              <!-- Password -->
              <div>
                <label for="password" class="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                  Password
                </label>
                <input
                  id="password"
                  v-model="password"
                  type="password"
                  required
                  placeholder="Enter your password"
                  class="form-input w-full"
                  autocomplete="current-password"
                />
              </div>

              <!-- Error Message -->
              <div v-if="loginError" class="rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-4">
                <div class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                  </svg>
                  <div class="flex-1">
                    <p class="text-sm font-medium text-red-800 dark:text-red-200">{{ loginError }}</p>
                  </div>
                </div>
              </div>

              <!-- Remember Me & Forgot Password -->
              <div class="flex items-center justify-between">
                <label class="flex items-center">
                  <input type="checkbox" class="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                  <span class="ml-2 text-sm text-gray-600 dark:text-gray-400">Remember me</span>
                </label>
                <a href="#" class="text-sm text-primary-600 hover:underline">Forgot password?</a>
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                :disabled="authStore.isLoading"
                class="btn btn-primary w-full py-3"
              >
                <span v-if="!authStore.isLoading">Sign In</span>
                <span v-else class="flex items-center justify-center gap-2">
                  <svg class="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing in...
                </span>
              </button>
            </form>

            <!-- Divider -->
            <div class="my-8 flex items-center">
              <div class="flex-1 border-t border-gray-300 dark:border-gray-700"></div>
              <span class="px-4 text-sm text-gray-500 dark:text-gray-400">Quick Demo</span>
              <div class="flex-1 border-t border-gray-300 dark:border-gray-700"></div>
            </div>

            <!-- Demo Button -->
            <button 
              @click="useDemoAccount" 
              class="group w-full flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>Try Demo Account</span>
              <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <p class="text-xs text-center text-gray-500 dark:text-gray-400 mt-2">
              Email: demo@biblestem.com • Password: demo123
            </p>

            <!-- Sign Up Link -->
            <div class="mt-8 text-center">
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Don't have an account?
                <router-link to="/sign-up" class="text-primary-600 dark:text-primary-400 font-semibold hover:underline">
                  Sign up
                </router-link>
              </p>
            </div>
          </div>

          <!-- Trust Indicators -->
          <div class="mt-8 text-center">
            <div class="flex flex-wrap justify-center gap-6 text-sm text-gray-600 dark:text-gray-400">
              <div class="flex items-center gap-2">
                <svg class="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.005.46-.372.84-.836.84a.582.582 0 01-.568-.41 7.92 7.92 0 001.385-1.95.594.594 0 00-.641-.86 11.937 11.937 0 01-2.233-.912.594.594 0 00-.963.853 10.592 10.592 0 001.973 1.798.594.594 0 00.915-.782 7.726 7.726 0 00-1.03-1.097.594.594 0 00-.915.85c.18.28.327.58.439.9a.594.594 0 00.915-.78 9.567 9.567 0 00-1.226-1.134.594.594 0 00-.924.86c.118.234.22.475.302.723.11.332.165.682.159 1.034a.594.594 0 00.915.782c.118-.36.19-.733.213-1.113a.594.594 0 00-.915-.78 9.567 9.567 0 00-1.226-1.134.594.594 0 00-.924.86 9.567 9.567 0 00.439.9.594.594 0 01-.915.78 7.726 7.726 0 00-.569-.41.594.594 0 00-.836.84zm11.63 8.808c.004-.46.38-.84.844-.84a.594.594 0 01.568.41 7.92 7.92 0 00-1.385 1.95.594.594 0 00.641.86 11.937 11.937 0 012.233.912.594.594 0 00.963-.853 10.592 10.592 0 00-1.973-1.798.594.594 0 00-.915.782 7.726 7.726 0 001.03 1.097.594.594 0 00.915-.85 7.726 7.726 0 00-.439-.9.594.594 0 00-.915.78 9.567 9.567 0 001.226 1.134.594.594 0 00.924-.86 9.567 9.567 0 01-.302-.723.594.594 0 00-.915-.782 7.726 7.726 0 00-.159-1.034.594.594 0 00-.915.782c-.118.36-.19.733-.213 1.113a.594.594 0 00.915.78 9.567 9.567 0 001.226 1.134.594.594 0 00.924-.86 9.567 9.567 0 01-.439-.9.594.594 0 00.915-.78.594.594 0 00.836-.84z" clip-rule="evenodd" />
                </svg>
                Secure Login
              </div>
              <div class="flex items-center gap-2">
                <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                </svg>
                Your Data is Safe
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const email = ref('')
const password = ref('')
const loginError = ref<string | null>(null)
const router = useRouter()
const authStore = useAuthStore()

// Clear error when user starts typing
watch([email, password], () => {
  if (loginError.value) {
    loginError.value = null
  }
})

// Convert technical errors to user-friendly messages
const getUserFriendlyError = (error: string | undefined): string => {
  if (!error) return 'Wrong email or password. Please try again.'
  
  const errorLower = error.toLowerCase()
  
  // Supabase auth error codes
  if (errorLower.includes('invalid login credentials') || 
      errorLower.includes('invalid_credentials') ||
      errorLower.includes('email not confirmed') ||
      errorLower.includes('user not found') ||
      errorLower.includes('invalid password')) {
    return 'Wrong email or password. Please check your credentials and try again.'
  }
  
  // Network errors
  if (errorLower.includes('network') || errorLower.includes('fetch')) {
    return 'Network error. Please check your internet connection and try again.'
  }
  
  // Rate limiting
  if (errorLower.includes('rate limit') || errorLower.includes('too many')) {
    return 'Too many login attempts. Please wait a moment and try again.'
  }
  
  // Generic fallback
  return 'Wrong email or password. Please try again.'
}

const handleSubmit = async () => {
  loginError.value = null // Clear previous errors
  
  const result = await authStore.login(email.value, password.value)
  
  if (result.success) {
    loginError.value = null
    router.push('/dashboard')
  } else {
    // Show user-friendly error message
    loginError.value = getUserFriendlyError(result.error)
  }
}

const useDemoAccount = async () => {
  email.value = 'demo@biblestem.com'
  password.value = 'demo123'
  loginError.value = null
  await handleSubmit()
}
</script>
