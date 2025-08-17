import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  bio?: string
  plan: 'free' | 'premium'
  studiesCompleted: number
  joinDate: string
  // Supabase fields for future use
  createdAt?: string
  updatedAt?: string
  emailVerified?: boolean
  subscriptionId?: string
  trialEndsAt?: string
}

export interface AuthError {
  message: string
  code?: string
}

export interface AuthConfig {
  useMockAuth: boolean
  supabaseUrl?: string
  supabaseKey?: string
}

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)
  const isLoading = ref(false)
  const error = ref<AuthError | null>(null)
  const isInitialized = ref(false)

  // Configuration for auth mode (mock vs real)
  const config = ref<AuthConfig>({
    useMockAuth: true, // Set to false when ready for Supabase
    supabaseUrl: import.meta.env.VITE_SUPABASE_URL,
    supabaseKey: import.meta.env.VITE_SUPABASE_ANON_KEY
  })

  const isAuthenticated = computed(() => !!user.value)
  const isPremium = computed(() => user.value?.plan === 'premium')
  const hasValidSubscription = computed(() => {
    if (!user.value) return false
    if (user.value.plan === 'free') return true
    if (user.value.plan === 'premium') {
      // In the future, check subscription status and trial period
      return true
    }
    return false
  })

  // Demo users for login
  const demoUsers = [
    {
      id: '1',
      name: 'John Smith',
      email: 'demo@biblestem.com',
      avatar: '',
      plan: 'premium' as const,
      studiesCompleted: 15,
      joinDate: '2024-01-15',
    },
    {
      id: '2',
      name: 'Sarah Johnson',
      email: 'free@biblestem.com',
      avatar: '',
      plan: 'free' as const,
      studiesCompleted: 7, // Updated to reflect 3 completed + 3 in progress studies
      joinDate: '2024-02-20',
    },
  ]

  const login = async (
    email: string,
    password: string,
  ): Promise<{ success: boolean; error?: string }> => {
    isLoading.value = true

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Demo login logic
      if (email === 'demo@biblestem.com' && password === 'demo123') {
        user.value = demoUsers[0]
        localStorage.setItem('biblestem_user', JSON.stringify(user.value))
        return { success: true }
      } else if (email === 'free@biblestem.com' && password === 'free123') {
        user.value = demoUsers[1]
        localStorage.setItem('biblestem_user', JSON.stringify(user.value))
        return { success: true }
      } else {
        return { success: false, error: 'Invalid email or password' }
      }
    } catch (error) {
      return { success: false, error: 'Login failed. Please try again.' }
    } finally {
      isLoading.value = false
    }
  }

  const logout = () => {
    user.value = null
    localStorage.removeItem('biblestem_user')
  }

  const initializeAuth = () => {
    const savedUser = localStorage.getItem('biblestem_user')
    if (savedUser) {
      try {
        user.value = JSON.parse(savedUser)
      } catch (error) {
        console.error('Error parsing saved user:', error)
        localStorage.removeItem('biblestem_user')
      }
    }
  }

  return {
    user,
    isLoading,
    isAuthenticated,
    isPremium,
    demoUsers,
    login,
    logout,
    initializeAuth,
  }
})
