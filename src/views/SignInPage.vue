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

        <h2 class="text-3xl font-bold text-neutral-900 dark:text-neutral-100">Welcome Back</h2>
        <p class="mt-2 text-neutral-600 dark:text-neutral-400">
          Sign in to continue your Bible study journey
        </p>
      </div>

      <!-- Demo Account Information -->
      <div
        class="card p-6 bg-primary-50 dark:bg-primary-900/20 border-primary-200 dark:border-primary-800"
      >
        <h3 class="font-semibold text-primary-800 dark:text-primary-200 mb-3">Demo Accounts</h3>
        <div class="space-y-2 text-sm">
          <div class="bg-white dark:bg-neutral-800 p-3 rounded-lg">
            <div class="font-medium text-neutral-800 dark:text-neutral-200">Premium User</div>
            <div class="text-neutral-600 dark:text-neutral-400">Email: demo@biblestem.com</div>
            <div class="text-neutral-600 dark:text-neutral-400">Password: demo123</div>
          </div>
          <div class="bg-white dark:bg-neutral-800 p-3 rounded-lg">
            <div class="font-medium text-neutral-800 dark:text-neutral-200">Free User</div>
            <div class="text-neutral-600 dark:text-neutral-400">Email: free@biblestem.com</div>
            <div class="text-neutral-600 dark:text-neutral-400">Password: free123</div>
          </div>
        </div>
      </div>

      <!-- Sign In Form -->
      <form @submit.prevent="handleSignIn" class="card p-8 space-y-6">
        <div>
          <label
            for="email"
            class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
          >
            Email Address
          </label>
          <input
            id="email"
            v-model="emailField.value.value"
            type="email"
            class="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-neutral-800 dark:text-neutral-100 transition-colors duration-200"
            :class="
              emailField.error.value
                ? 'border-red-500 dark:border-red-500'
                : 'border-neutral-300 dark:border-neutral-600'
            "
            placeholder="Enter your email"
            @blur="emailField.validate()"
            @input="emailField.clear()"
          />
          <p v-if="emailField.error.value" class="text-red-500 text-sm mt-1">
            {{ emailField.error.value }}
          </p>
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
              v-model="passwordField.value.value"
              :type="showPassword ? 'text' : 'password'"
              class="w-full px-4 py-3 pr-12 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-neutral-800 dark:text-neutral-100 transition-colors duration-200"
              :class="
                passwordField.error.value
                  ? 'border-red-500 dark:border-red-500'
                  : 'border-neutral-300 dark:border-neutral-600'
              "
              placeholder="Enter your password"
              @blur="passwordField.validate()"
              @input="passwordField.clear()"
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
          <p v-if="passwordField.error.value" class="text-red-500 text-sm mt-1">
            {{ passwordField.error.value }}
          </p>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input
              id="remember"
              v-model="form.remember"
              type="checkbox"
              class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded"
            />
            <label for="remember" class="ml-2 block text-sm text-neutral-700 dark:text-neutral-300">
              Remember me
            </label>
          </div>
          <a href="#" class="text-sm text-primary-600 hover:text-primary-500 font-medium">
            Forgot password?
          </a>
        </div>

        <!-- Error Message -->
        <div
          v-if="error"
          class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 px-4 py-3 rounded-lg text-sm"
        >
          {{ error }}
        </div>

        <button
          type="submit"
          :disabled="authStore.isLoading || !formValidation.isValid.value"
          class="w-full btn-primary flex items-center justify-center space-x-2"
          :class="{
            'opacity-50 cursor-not-allowed': authStore.isLoading || !formValidation.isValid.value,
          }"
        >
          <svg
            v-if="authStore.isLoading"
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
          <span>{{ authStore.isLoading ? 'Signing In...' : 'Sign In' }}</span>
        </button>

        <div class="text-center">
          <p class="text-neutral-600 dark:text-neutral-400">
            Don't have an account?
            <router-link to="/signup" class="text-primary-600 hover:text-primary-500 font-medium">
              Sign up for free
            </router-link>
          </p>
        </div>
      </form>

      <!-- Quick Login Buttons -->
      <div class="space-y-3">
        <button
          @click="quickLogin('premium')"
          :disabled="authStore.isLoading"
          class="w-full bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 disabled:opacity-50"
        >
          Quick Login as Premium User
        </button>
        <button
          @click="quickLogin('free')"
          :disabled="authStore.isLoading"
          class="w-full bg-neutral-600 hover:bg-neutral-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 disabled:opacity-50"
        >
          Quick Login as Free User
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import { useErrorStore } from '../stores/errors'
import {
  useFormValidation,
  useFieldValidation,
  validationRules,
} from '../composables/useValidation'

const router = useRouter()

<<<<<<< HEAD
const form = reactive({
  email: '',
  password: '',
  remember: false,
=======
// Safe store initialization
const authStoreRef = ref<any>(null)
const errorStoreRef = ref<any>(null)

// Safe computed for store access
const authStore = computed(() => {
  return (
    authStoreRef.value || {
      login: () => Promise.resolve({ success: false, error: 'Not ready' }),
      isLoading: false,
      error: null,
    }
  )
})

const errorStore = computed(() => {
  return (
    errorStoreRef.value || {
      addError: () => {},
      clearError: () => {},
    }
  )
})

// Initialize stores when component mounts
onMounted(() => {
  try {
    authStoreRef.value = useAuthStore()
    errorStoreRef.value = useErrorStore()
  } catch (error) {
    console.warn('Failed to initialize stores in SignInPage:', error)
  }
})

// Form validation
const emailField = useFieldValidation('', [
  validationRules.required('Email is required'),
  validationRules.email(),
])

const passwordField = useFieldValidation('', [
  validationRules.required('Password is required'),
  validationRules.minLength(3, 'Password must be at least 3 characters'), // Relaxed for demo
])

const formValidation = useFormValidation({
  email: emailField.rules,
  password: passwordField.rules,
>>>>>>> refs/remotes/origin/main
})

const showPassword = ref(false)
const error = ref('')
const remember = ref(false)

const handleSignIn = async () => {
  error.value = ''

<<<<<<< HEAD
  const result = await authStore.login(form.email, form.password)

  if (result.success) {
    // Redirect to dashboard after successful login
    router.push('/dashboard')
  } else {
    error.value = result.error || 'Login failed. Please try again.'
=======
  // Validate form before submitting
  if (!formValidation.validate()) {
    return
  }

  try {
    const result = await authStore.login(emailField.value.value, passwordField.value.value)

    if (result.success) {
      // Get redirect path from query params or default to dashboard
      const redirectPath = (router.currentRoute.value.query.redirect as string) || '/dashboard'
      router.push(redirectPath)
    } else {
      error.value = result.error || 'Login failed. Please try again.'
      errorStore.addValidationError(error.value)
    }
  } catch (err) {
    error.value = 'An unexpected error occurred. Please try again.'
    errorStore.handleError(err, 'Sign In')
>>>>>>> refs/remotes/origin/main
  }
}

const quickLogin = async (type: 'premium' | 'free') => {
  error.value = ''

  if (type === 'premium') {
    emailField.value.value = 'demo@biblestem.com'
    passwordField.value.value = 'demo123'
  } else {
    emailField.value.value = 'free@biblestem.com'
    passwordField.value.value = 'free123'
  }

<<<<<<< HEAD
=======
  // Clear any previous validation errors
  formValidation.clear()

>>>>>>> refs/remotes/origin/main
  await handleSignIn()
}
</script>
