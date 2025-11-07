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
            Join BibleStem
          </h1>
          <p class="text-xl text-white/90 animate-slide-up" style="animation-delay: 0.1s">
            Start your journey into deeper Bible study
          </p>
        </div>
      </div>
    </section>

    <!-- Sign Up Form -->
    <section class="py-12 md:py-16">
      <div class="max-w-6xl mx-auto px-6 md:px-8 lg:px-10">
        <div class="max-w-md mx-auto">
          <!-- Sign Up Card -->
          <div class="card p-8 animate-scale-in">
            <!-- Features Header -->
            <div class="mb-8">
              <div class="grid grid-cols-3 gap-4 text-center mb-6">
                <div>
                  <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg class="w-6 h-6 text-primary-600 dark:text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <p class="text-xs font-semibold text-gray-700 dark:text-gray-300">Free Studies</p>
                </div>
                <div>
                  <div class="w-12 h-12 bg-secondary-100 dark:bg-secondary-900/30 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg class="w-6 h-6 text-secondary-600 dark:text-secondary-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 1a1 1 0 011 1v1.707l3.707 3.707a1 1 0 010 2L5 10.414l-3.293 3.293a1 1 0 01-1.414-1.414L4.586 9H1a1 1 0 110-2h4.414l3.293-3.293zM13 9h4.586l3.293 3.293a1 1 0 01-1.414 1.414L16 10.414v4.586a1 1 0 01-2 0v-4.586l-3.293-3.293a1 1 0 112.828-2.828L13 5.586V1a1 1 0 112 0v4.586l1.707 1.707z" />
                    </svg>
                  </div>
                  <p class="text-xs font-semibold text-gray-700 dark:text-gray-300">Hebrew/Greek</p>
                </div>
                <div>
                  <div class="w-12 h-12 bg-accent-100 dark:bg-accent-900/30 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg class="w-6 h-6 text-accent-600 dark:text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <p class="text-xs font-semibold text-gray-700 dark:text-gray-300">Progress</p>
                </div>
              </div>
              <p class="text-center text-sm text-gray-600 dark:text-gray-400">
                Start with a free account and unlock these features
              </p>
            </div>

            <form @submit.prevent="handleSubmit" class="space-y-6">
              <!-- Full Name -->
              <div>
                <label for="name" class="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                  Full Name
                </label>
                <input
                  id="name"
                  v-model="name"
                  type="text"
                  required
                  placeholder="John Doe"
                  :class="[
                    'form-input w-full',
                    touched.name && errors.name ? 'form-input.error' : '',
                    touched.name && !errors.name && name ? 'form-input.success' : ''
                  ]"
                  autocomplete="name"
                  @blur="validateNameField"
                />
                <p v-if="touched.name && errors.name" class="mt-1 text-xs text-red-600 dark:text-red-400">
                  {{ errors.name }}
                </p>
              </div>

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
                  placeholder="Create a strong password"
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
                <div v-else-if="password" class="mt-2">
                  <div class="flex items-center gap-2 mb-1">
                    <div class="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        :class="[
                          'h-full transition-all duration-300',
                          passwordStrength.strength === 'weak' ? 'bg-red-500 w-1/4' : '',
                          passwordStrength.strength === 'fair' ? 'bg-yellow-500 w-1/2' : '',
                          passwordStrength.strength === 'good' ? 'bg-blue-500 w-3/4' : '',
                          passwordStrength.strength === 'strong' ? 'bg-green-500 w-full' : ''
                        ]"
                      ></div>
                    </div>
                    <span class="text-xs font-medium" :class="{
                      'text-red-600 dark:text-red-400': passwordStrength.strength === 'weak',
                      'text-yellow-600 dark:text-yellow-400': passwordStrength.strength === 'fair',
                      'text-blue-600 dark:text-blue-400': passwordStrength.strength === 'good',
                      'text-green-600 dark:text-green-400': passwordStrength.strength === 'strong'
                    }">
                      {{ passwordStrength.strength.charAt(0).toUpperCase() + passwordStrength.strength.slice(1) }}
                    </span>
                  </div>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    Must be at least 8 characters
                  </p>
                </div>
                <p v-else class="mt-2 text-xs text-gray-500 dark:text-gray-400">
                  Must be at least 8 characters
                </p>
              </div>

              <!-- Terms & Conditions -->
              <div>
                <label class="flex items-start">
                  <input type="checkbox" required class="mt-1 rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                  <span class="ml-2 text-sm text-gray-600 dark:text-gray-400">
                    I agree to the 
                    <a href="#" class="text-primary-600 hover:underline">Terms of Service</a>
                    and 
                    <a href="#" class="text-primary-600 hover:underline">Privacy Policy</a>
                  </span>
                </label>
              </div>

              <!-- Auth Error -->
              <div v-if="authStore.error" class="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                <p class="text-sm text-red-600 dark:text-red-400">{{ authStore.error.message }}</p>
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                :disabled="authStore.isLoading"
                class="btn btn-primary w-full py-3"
              >
                <span v-if="!authStore.isLoading">Create Account</span>
                <span v-else class="flex items-center justify-center gap-2">
                  <svg class="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Creating account...
                </span>
              </button>
            </form>

            <!-- Sign In Link -->
            <div class="mt-8 text-center">
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Already have an account?
                <router-link to="/sign-in" class="text-primary-600 dark:text-primary-400 font-semibold hover:underline">
                  Sign in
                </router-link>
              </p>
            </div>
          </div>

          <!-- Trust Indicators -->
          <div class="mt-8">
            <div class="flex flex-wrap justify-center gap-6 text-sm text-gray-600 dark:text-gray-400">
              <div class="flex items-center gap-2">
                <svg class="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                Free Forever
              </div>
              <div class="flex items-center gap-2">
                <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.005.46-.372.84-.836.84a.582.582 0 01-.568-.41 7.92 7.92 0 001.385-1.95.594.594 0 00-.641-.86 11.937 11.937 0 01-2.233-.912.594.594 0 00-.963.853 10.592 10.592 0 001.973 1.798.594.594 0 00.915-.782 7.726 7.726 0 00-1.03-1.097.594.594 0 00-.915.85c.18.28.327.58.439.9a.594.594 0 00.915-.78 9.567 9.567 0 00-1.226-1.134.594.594 0 00-.924.86c.118.234.22.475.302.723.11.332.165.682.159 1.034a.594.594 0 00.915.782c.118-.36.19-.733.213-1.113a.594.594 0 00-.915-.78 9.567 9.567 0 00-1.226-1.134.594.594 0 00-.924.86 9.567 9.567 0 00.439.9.594.594 0 01-.915.78 7.726 7.726 0 00-.569-.41.594.594 0 00-.836.84zm11.63 8.808c.004-.46.38-.84.844-.84a.594.594 0 01.568.41 7.92 7.92 0 00-1.385 1.95.594.594 0 00.641.86 11.937 11.937 0 012.233.912.594.594 0 00.963-.853 10.592 10.592 0 00-1.973-1.798.594.594 0 00-.915.782 7.726 7.726 0 001.03 1.097.594.594 0 00.915-.85 7.726 7.726 0 00-.439-.9.594.594 0 00-.915.78 9.567 9.567 0 001.226 1.134.594.594 0 00.924-.86 9.567 9.567 0 01-.302-.723.594.594 0 00-.915-.782 7.726 7.726 0 00-.159-1.034.594.594 0 00-.915-.782 7.726 7.726 0 00-.159 1.034.594.594 0 00-.915.782 7.726 7.726 0 00-.159-1.034.594.594 0 00-.915-.782c-.118.36-.19.733-.213 1.113a.594.594 0 00.915.78 9.567 9.567 0 001.226 1.134.594.594 0 00.924-.86 9.567 9.567 0 01-.439-.9.594.594 0 00.915-.78.594.594 0 00.836-.84z" clip-rule="evenodd" />
                </svg>
                Secure & Private
              </div>
              <div class="flex items-center gap-2">
                <svg class="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a6 6 0 00-6 6c0 1.887-.454 3.665-1.257 5.234a.75.75 0 00.12.07l4 2a.75.75 0 00.992-.884L6.485 12.5c.561-.974 1.015-2.052 1.015-3.5a3.5 3.5 0 017 0c0 1.448.454 2.526 1.015 3.5l-.95 1.92a.75.75 0 00.992.884l4-2a.75.75 0 00.12-.07A11.717 11.717 0 0016 8a6 6 0 00-6-6zM8.05 14.943a33.54 33.54 0 003.9 0 2.25 2.25 0 01-3.9 0z" />
                </svg>
                No Credit Card
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import { validateName, validateEmail, validatePassword, getPasswordStrength } from '../utils/validation'

const name = ref('')
const email = ref('')
const password = ref('')
const router = useRouter()
const authStore = useAuthStore()

// Validation errors
const errors = ref<Record<string, string>>({})
const touched = ref<Record<string, boolean>>({})

// Password strength
const passwordStrength = computed(() => getPasswordStrength(password.value))

// Validate individual fields
const validateNameField = () => {
  touched.value.name = true
  const result = validateName(name.value)
  if (result.isValid) {
    delete errors.value.name
  } else {
    errors.value.name = result.error || ''
  }
  return result.isValid
}

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

// Validate all fields
const validateForm = (): boolean => {
  const nameValid = validateNameField()
  const emailValid = validateEmailField()
  const passwordValid = validatePasswordField()
  
  return nameValid && emailValid && passwordValid
}

const handleSubmit = async () => {
  // Mark all fields as touched
  touched.value = { name: true, email: true, password: true }
  
  // Validate form
  if (!validateForm()) {
    return
  }

  const result = await authStore.signUp(email.value, password.value, name.value)
  if (result.success) {
    // Check if email verification is required
    if ((result as any).requiresVerification) {
      // Redirect to verification page with email
      router.push(`/verify-email?email=${encodeURIComponent(email.value)}`)
    } else {
      router.push('/dashboard')
    }
  }
}
</script>
