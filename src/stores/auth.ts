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
    supabaseKey: import.meta.env.VITE_SUPABASE_ANON_KEY,
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
    name: string,
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
      emailVerified: true,
    }

    user.value = newUser
    saveUserToStorage(newUser)
    return { success: true }
  }

  const supabaseSignUp = async (email: string, password: string, name: string) => {
    // TODO: Implement Supabase sign up
    throw new Error('Supabase sign up not yet implemented')
  }

  const logout = async () => {
    isLoading.value = true
    clearError()

    try {
      if (config.value.useMockAuth) {
        await mockLogout()
      } else {
        await supabaseLogout()
      }
    } catch (err) {
      console.error('Logout error:', err)
    } finally {
      user.value = null
      clearUserFromStorage()
      isLoading.value = false
    }
  }

  const mockLogout = async () => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 500))
  }

  const supabaseLogout = async () => {
    // TODO: Implement Supabase logout
    // await supabase.auth.signOut()
  }

  const refreshSession = async () => {
    if (!isAuthenticated.value) return

    try {
      if (config.value.useMockAuth) {
        // Mock session is always valid
        return
      } else {
        // TODO: Implement Supabase session refresh
        // const { data, error } = await supabase.auth.refreshSession()
        // if (error) throw error
      }
    } catch (err) {
      console.error('Session refresh failed:', err)
      await logout()
    }
  }

  const initializeAuth = async () => {
    if (isInitialized.value) return

    isLoading.value = true
    clearError()

    try {
      if (config.value.useMockAuth) {
        await initializeMockAuth()
      } else {
        await initializeSupabaseAuth()
      }
    } catch (err) {
      console.error('Auth initialization failed:', err)
      setError('Failed to initialize authentication')
    } finally {
      isInitialized.value = true
      isLoading.value = false
    }
  }

  const initializeMockAuth = async () => {
    const savedUser = localStorage.getItem('biblestem_user')
    if (savedUser) {
      try {
        const userData = JSON.parse(savedUser)
        user.value = userData
      } catch (error) {
        console.error('Error parsing saved user:', error)
        clearUserFromStorage()
      }
    }
  }

  const initializeSupabaseAuth = async () => {
    // TODO: Implement Supabase auth initialization
    // const { data: { session } } = await supabase.auth.getSession()
    // if (session?.user) {
    //   user.value = transformSupabaseUser(session.user)
    // }
  }

  const saveUserToStorage = (userData: User) => {
    try {
      localStorage.setItem('biblestem_user', JSON.stringify(userData))
    } catch (error) {
      console.error('Failed to save user to storage:', error)
    }
  }

  const clearUserFromStorage = () => {
    try {
      localStorage.removeItem('biblestem_user')
    } catch (error) {
      console.error('Failed to clear user from storage:', error)
    }
  }

  const updateUserProfile = async (updates: Partial<User>) => {
    if (!user.value) return { success: false, error: 'User not authenticated' }

    isLoading.value = true
    clearError()

    try {
      if (config.value.useMockAuth) {
        return await mockUpdateProfile(updates)
      } else {
        return await supabaseUpdateProfile(updates)
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to update profile'
      setError(errorMessage)
      return { success: false, error: errorMessage }
    } finally {
      isLoading.value = false
    }
  }

  const mockUpdateProfile = async (updates: Partial<User>) => {
    await new Promise((resolve) => setTimeout(resolve, 800))

    user.value = { ...user.value!, ...updates, updatedAt: new Date().toISOString() }
    saveUserToStorage(user.value)
    return { success: true }
  }

  const supabaseUpdateProfile = async (updates: Partial<User>) => {
    // TODO: Implement Supabase profile update
    throw new Error('Supabase profile update not yet implemented')
  }

  return {
    // State
    user,
    isLoading,
    error,
    isInitialized,
    config,

    // Computed
    isAuthenticated,
    isPremium,
    hasValidSubscription,

    // Demo data
    demoUsers,

    // Actions
    login,
    signUp,
    logout,
    refreshSession,
    initializeAuth,
    updateUserProfile,
    clearError,
    setError,
  }
})
