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
  emailVerified?: boolean
}

export interface AuthError {
  message: string
  code?: string
}

// Demo users for quick login
const DEMO_USERS = {
  'demo@biblestem.com': {
    id: 'demo-premium-user',
    name: 'Demo Premium User',
    email: 'demo@biblestem.com',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    bio: 'Exploring the depths of God\'s Word with premium features.',
    plan: 'premium' as const,
    studiesCompleted: 12,
    joinDate: '2023-01-15T00:00:00.000Z',
    emailVerified: true,
  },
  'free@biblestem.com': {
    id: 'demo-free-user',
    name: 'Demo Free User',
    email: 'free@biblestem.com',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    bio: 'Starting my journey with Bible studies.',
    plan: 'free' as const,
    studiesCompleted: 3,
    joinDate: '2024-01-01T00:00:00.000Z',
    emailVerified: true,
  },
}

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)
  const isLoading = ref(false)
  const error = ref<AuthError | null>(null)
  const isInitialized = ref(false)

  const isAuthenticated = computed(() => !!user.value)
  const isPremium = computed(() => user.value?.plan === 'premium')

  const clearError = () => {
    error.value = null
  }

  const setError = (message: string, code?: string) => {
    error.value = { message, code }
  }

  const signUp = async (
    email: string,
    password: string,
    name: string,
  ): Promise<{ success: boolean; error?: string }> => {
    console.log('=== DEMO SIGNUP ===')
    console.log('Email:', email, 'Name:', name)

    isLoading.value = true
    clearError()

    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Create demo user
      const newUser: User = {
        id: `user-${Date.now()}`,
        name,
        email,
        plan: 'free',
        studiesCompleted: 0,
        joinDate: new Date().toISOString(),
        emailVerified: true,
      }

      user.value = newUser

      // Store in localStorage for persistence
      localStorage.setItem('biblestem_user', JSON.stringify(newUser))

      console.log('Demo user signup successful:', user.value)
      return { success: true }
    } catch (err: any) {
      console.error('Demo signup error:', err)
      const errorMessage = err.message || 'Sign up failed. Please try again.'
      setError(errorMessage, err.code)
      return { success: false, error: errorMessage }
    } finally {
      isLoading.value = false
    }
  }

  const login = async (
    email: string,
    password: string,
  ): Promise<{ success: boolean; error?: string }> => {
    console.log('=== DEMO LOGIN ===')
    console.log('Email:', email)

    isLoading.value = true
    clearError()

    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 800))

      // Check demo users
      if (email in DEMO_USERS) {
        const demoUser = DEMO_USERS[email as keyof typeof DEMO_USERS]
        user.value = { ...demoUser }
        
        // Store in localStorage for persistence
        localStorage.setItem('biblestem_user', JSON.stringify(user.value))
        
        console.log('Demo login successful:', user.value)
        return { success: true }
      }

      // For any other email/password, create a generic demo user
      const newUser: User = {
        id: `user-${Date.now()}`,
        name: email.split('@')[0] || 'Demo User',
        email,
        plan: 'free',
        studiesCompleted: Math.floor(Math.random() * 5),
        joinDate: new Date().toISOString(),
        emailVerified: true,
      }

      user.value = newUser
      localStorage.setItem('biblestem_user', JSON.stringify(user.value))

      console.log('Demo login complete:', user.value)
      return { success: true }
    } catch (err: any) {
      console.error('Demo login error:', err)
      const errorMessage = 'Login failed. Please try again.'
      setError(errorMessage, err.code)
      return { success: false, error: errorMessage }
    } finally {
      isLoading.value = false
    }
  }

  const logout = async () => {
    isLoading.value = true
    clearError()

    try {
      user.value = null
      localStorage.removeItem('biblestem_user')
      console.log('User logged out successfully')
    } catch (err: any) {
      console.error('Logout error:', err)
      setError('Failed to log out')
    } finally {
      isLoading.value = false
    }
  }

  const updateUserProfile = async (updates: Partial<User>) => {
    if (!user.value) return { success: false, error: 'User not authenticated' }

    isLoading.value = true
    clearError()

    try {
      // Update local user state
      user.value = { ...user.value, ...updates }
      
      // Update localStorage
      localStorage.setItem('biblestem_user', JSON.stringify(user.value))

      return { success: true }
    } catch (err: any) {
      console.error('Profile update error:', err)
      const errorMessage = 'Failed to update profile'
      setError(errorMessage)
      return { success: false, error: errorMessage }
    } finally {
      isLoading.value = false
    }
  }

  const initializeAuth = async () => {
    if (isInitialized.value) return

    console.log('=== INITIALIZING DEMO AUTH ===')

    try {
      // Check localStorage for existing user
      const storedUser = localStorage.getItem('biblestem_user')
      if (storedUser) {
        user.value = JSON.parse(storedUser)
        console.log('User loaded from localStorage:', user.value)
      } else {
        user.value = null
        console.log('No stored user found')
      }
    } catch (err) {
      console.error('Error loading user from localStorage:', err)
      user.value = null
    }

    isInitialized.value = true
  }

  return {
    // State
    user,
    isLoading,
    error,
    isInitialized,

    // Computed
    isAuthenticated,
    isPremium,

    // Actions
    signUp,
    login,
    logout,
    updateUserProfile,
    initializeAuth,
    clearError,
    setError,
  }
})
