<template>
  <div
    class="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full space-y-8">
      <!-- Header -->
      <div class="text-center">
        <router-link to="/" class="inline-flex items-center space-x-3 mb-8 group">
          <div
            class="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-200"
          >
            <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-1h7v1zm3-2H7v-1h10v1zm0-2H7V9h10v4zm0-6H7V6h10v1z"
              />
            </svg>
          </div>
          <div class="flex flex-col">
            <span class="text-2xl font-bold gradient-text">BibleStem</span>
            <span class="text-sm text-neutral-500 -mt-1">Interactive Bible Study</span>
          </div>
        </router-link>

        <h2 class="text-3xl font-bold text-neutral-900 dark:text-neutral-100">
          Start Your Journey
        </h2>
        <p class="mt-2 text-neutral-600 dark:text-neutral-400">
          Create your free account to begin studying God's Word
        </p>
      </div>

      <!-- Benefits Section -->
      <div
        class="card p-6 bg-primary-50 dark:bg-primary-900/20 border-primary-200 dark:border-primary-800"
      >
        <h3 class="font-semibold text-primary-800 dark:text-primary-200 mb-3">What you'll get:</h3>
        <div class="space-y-2 text-sm">
          <div class="flex items-center space-x-2">
            <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="text-neutral-700 dark:text-neutral-300">Access to bible studies</span>
          </div>
          <div class="flex items-center space-x-2">
            <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="text-neutral-700 dark:text-neutral-300">Personal progress tracking</span>
          </div>
          <div class="flex items-center space-x-2">
            <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="text-neutral-700 dark:text-neutral-300"
              >Interactive quizzes and timelines</span
            >
          </div>
          <div class="flex items-center space-x-2">
            <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="text-neutral-700 dark:text-neutral-300"
              >Achievement badges and milestones</span
            >
          </div>
        </div>
      </div>

      <!-- Sign Up Form -->
      <form @submit.prevent="handleSignUp" class="card p-8 space-y-6">
        <div>
          <label
            for="name"
            class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
          >
            Full Name
          </label>
          <input
            id="name"
            v-model="form.name"
            type="text"
            required
            class="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-neutral-800 dark:text-neutral-100 transition-colors duration-200"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label
            for="email"
            class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
          >
            Email Address
          </label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            required
            class="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-neutral-800 dark:text-neutral-100 transition-colors duration-200"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label
            for="password"
            class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
          >
            Password
          </label>
          <div class="relative">
            <input
              id="password"
              v-model="form.password"
              :type="showPassword ? 'text' : 'password'"
              required
              class="w-full px-4 py-3 pr-12 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-neutral-800 dark:text-neutral-100 transition-colors duration-200"
              placeholder="Create a password"
            />
            <button
              type="button"
              @click="showPassword = !showPassword"
              class="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300"
            >
              <svg
                v-if="showPassword"
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                />
              </svg>
            </button>
          </div>
          <div class="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
            Password must be at least 8 characters long
          </div>
        </div>

        <div>
          <label
            for="confirmPassword"
            class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
          >
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            v-model="form.confirmPassword"
            type="password"
            required
            class="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-neutral-800 dark:text-neutral-100 transition-colors duration-200"
            placeholder="Confirm your password"
          />
        </div>

        <div class="flex items-start">
          <div class="flex items-center h-5">
            <input
              id="terms"
              v-model="form.agreeToTerms"
              type="checkbox"
              required
              class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded"
            />
          </div>
          <div class="ml-3 text-sm">
            <label for="terms" class="text-neutral-700 dark:text-neutral-300">
              I agree to the
              <a href="#" class="text-primary-600 hover:text-primary-500 font-medium"
                >Terms of Service</a
              >
              and
              <a href="#" class="text-primary-600 hover:text-primary-500 font-medium"
                >Privacy Policy</a
              >
            </label>
          </div>
        </div>

        <div class="flex items-start">
          <div class="flex items-center h-5">
            <input
              id="newsletter"
              v-model="form.subscribeNewsletter"
              type="checkbox"
              class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded"
            />
          </div>
          <div class="ml-3 text-sm">
            <label for="newsletter" class="text-neutral-700 dark:text-neutral-300">
              Send me updates about new studies and features
            </label>
          </div>
        </div>

        <!-- Error Message -->
        <div
          v-if="error"
          class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 px-4 py-3 rounded-lg text-sm"
        >
          {{ error }}
        </div>

        <!-- Success Message -->
        <div
          v-if="success"
          class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-600 dark:text-green-400 px-4 py-3 rounded-lg text-sm"
        >
          {{ success }}
        </div>

        <button
          type="submit"
          :disabled="isLoading"
          class="w-full btn-primary flex items-center justify-center space-x-2"
          :class="{ 'opacity-50 cursor-not-allowed': isLoading }"
        >
          <svg
            v-if="isLoading"
            class="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <span>{{ isLoading ? 'Creating Account...' : 'Create Account' }}</span>
        </button>

        <div class="text-center">
          <p class="text-neutral-600 dark:text-neutral-400">
            Already have an account?
            <router-link to="/signin" class="text-primary-600 hover:text-primary-500 font-medium">
              Sign in here
            </router-link>
          </p>
        </div>
      </form>

      <!-- Demo Note -->
      <div class="card p-4 bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800">
        <div class="flex items-start space-x-3">
          <svg class="w-5 h-5 text-amber-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
              clip-rule="evenodd"
            />
          </svg>
          <div>
            <h4 class="font-medium text-amber-800 dark:text-amber-200">Demo Mode</h4>
            <p class="text-sm text-amber-700 dark:text-amber-300 mt-1">
              This is a demo. For now, use the existing demo accounts to explore the platform. Full
              registration will be available in the production version.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const form = reactive({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  agreeToTerms: false,
  subscribeNewsletter: false,
})

const showPassword = ref(false)
const isLoading = ref(false)
const error = ref('')
const success = ref('')

const validateForm = () => {
  if (form.password.length < 8) {
    error.value = 'Password must be at least 8 characters long'
    return false
  }

  if (form.password !== form.confirmPassword) {
    error.value = 'Passwords do not match'
    return false
  }

  if (!form.agreeToTerms) {
    error.value = 'You must agree to the Terms of Service and Privacy Policy'
    return false
  }

  return true
}

const handleSignUp = async () => {
  error.value = ''
  success.value = ''

  if (!validateForm()) {
    return
  }

  isLoading.value = true

  try {
    const result = await authStore.signUp(form.email, form.password, form.name)

    if (result.success) {
      success.value = 'Account created successfully! Redirecting to dashboard...'
      setTimeout(() => {
        router.push('/dashboard')
      }, 1500)
    } else {
      error.value = result.error || 'Failed to create account. Please try again.'
    }
  } catch (err) {
    console.error('Signup error:', err)
    error.value = err instanceof Error ? err.message : 'Failed to create account. Please try again.'
  } finally {
    isLoading.value = false
  }
}
</script>
