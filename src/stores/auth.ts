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

  const clearError = () => {
    error.value = null
  }

  const setError = (message: string, code?: string) => {
    error.value = { message, code }
  }

  const login = async (
    email: string,
    password: string,
  ): Promise<{ success: boolean; error?: string }> => {
    isLoading.value = true
    clearError()

    try {
      if (config.value.useMockAuth) {
        return await mockLogin(email, password)
      } else {
        return await supabaseLogin(email, password)
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Login failed. Please try again.'
      setError(errorMessage)
      return { success: false, error: errorMessage }
    } finally {
      isLoading.value = false
    }
  }

  const mockLogin = async (email: string, password: string) => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Demo login logic
    if (email === 'demo@biblestem.com' && password === 'demo123') {
      user.value = demoUsers[0]
      saveUserToStorage(user.value)
      return { success: true }
    } else if (email === 'free@biblestem.com' && password === 'free123') {
      user.value = demoUsers[1]
      saveUserToStorage(user.value)
      return { success: true }
    } else {
      return { success: false, error: 'Invalid email or password' }
    }
  }

  const supabaseLogin = async (email: string, password: string) => {
    // TODO: Implement Supabase authentication
    // const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    // if (error) throw error
    // user.value = transformSupabaseUser(data.user)
    // return { success: true }
    throw new Error('Supabase authentication not yet implemented')
  }

  const signUp = async (
    email: string,
    password: string,
    name: string
  ): Promise<{ success: boolean; error?: string }> => {
    isLoading.value = true
    clearError()

    try {
      if (config.value.useMockAuth) {
        return await mockSignUp(email, password, name)
      } else {
        return await supabaseSignUp(email, password, name)
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Sign up failed. Please try again.'
      setError(errorMessage)
      return { success: false, error: errorMessage }
    } finally {
      isLoading.value = false
    }
  }

  const mockSignUp = async (email: string, password: string, name: string) => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1200))

    // Check if user already exists
    if (email === 'demo@biblestem.com' || email === 'free@biblestem.com') {
      return { success: false, error: 'An account with this email already exists' }
    }

    // Create new mock user
    const newUser: User = {
      id: Date.now().toString(),
      name,
      email,
      plan: 'free',
      studiesCompleted: 0,
      joinDate: new Date().toISOString(),
      createdAt: new Date().toISOString(),
      emailVerified: true
    }

    user.value = newUser
    saveUserToStorage(newUser)
    return { success: true }
  }

  const supabaseSignUp = async (email: string, password: string, name: string) => {
    // TODO: Implement Supabase sign up
    throw new Error('Supabase sign up not yet implemented')
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
