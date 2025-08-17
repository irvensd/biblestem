import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { supabase, type Database } from '@/lib/supabase'
import type { User as SupabaseUser } from '@supabase/supabase-js'

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
    useMockAuth: false, // Now using Supabase authentication
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
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) throw error

    if (data.user) {
      user.value = await transformSupabaseUser(data.user)
      return { success: true }
    }

    throw new Error('Login failed: No user data returned')
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
    console.log('Attempting Supabase signup for:', email)

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name: name
        }
      }
    })

    if (error) {
      console.error('Supabase signup error:', error)
      throw error
    }

    console.log('Supabase signup response:', data)

    if (data.user) {
      try {
        user.value = await transformSupabaseUser(data.user)
        console.log('User successfully transformed and set:', user.value)
        return { success: true }
      } catch (transformError) {
        console.error('Error transforming user:', transformError)
        // Fallback: create basic user object
        user.value = {
          id: data.user.id,
          name: name,
          email: email,
          plan: 'free',
          studiesCompleted: 0,
          joinDate: new Date().toISOString(),
          createdAt: data.user.created_at,
          emailVerified: data.user.email_confirmed_at ? true : false
        }
        return { success: true }
      }
    }

    throw new Error('Sign up failed: No user data returned')
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
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  }

  const refreshSession = async () => {
    if (!isAuthenticated.value) return

    try {
      if (config.value.useMockAuth) {
        // Mock session is always valid
        return
      } else {
        const { data, error } = await supabase.auth.refreshSession()
        if (error) throw error
        if (data.user) {
          user.value = await transformSupabaseUser(data.user)
        }
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
    const { data: { session } } = await supabase.auth.getSession()
    if (session?.user) {
      user.value = await transformSupabaseUser(session.user)
    }

    // Listen for auth changes
    supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === 'SIGNED_IN' && session?.user) {
        user.value = await transformSupabaseUser(session.user)
      } else if (event === 'SIGNED_OUT') {
        user.value = null
      }
    })
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

  const transformSupabaseUser = async (supabaseUser: SupabaseUser): Promise<User> => {
    // Get user profile from profiles table
    const { data: profile, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', supabaseUser.id)
      .single()

    if (error) {
      console.error('Error fetching user profile:', error)
      // Fallback to basic user data if profile fetch fails
      return {
        id: supabaseUser.id,
        name: supabaseUser.user_metadata?.name || supabaseUser.email?.split('@')[0] || 'User',
        email: supabaseUser.email || '',
        plan: 'free',
        studiesCompleted: 0,
        joinDate: supabaseUser.created_at || new Date().toISOString(),
        createdAt: supabaseUser.created_at,
        emailVerified: supabaseUser.email_confirmed_at ? true : false
      }
    }

    return {
      id: profile.id,
      name: profile.name,
      email: profile.email,
      avatar: profile.avatar_url,
      bio: profile.bio,
      plan: profile.plan,
      studiesCompleted: profile.studies_completed,
      joinDate: profile.join_date,
      createdAt: profile.created_at,
      updatedAt: profile.updated_at,
      emailVerified: profile.email_verified,
      subscriptionId: profile.subscription_id,
      trialEndsAt: profile.trial_ends_at
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
    if (!user.value) throw new Error('User not authenticated')

    // Update auth metadata if name or email changed
    if (updates.name || updates.email) {
      const authUpdates: any = {}
      if (updates.email) authUpdates.email = updates.email
      if (updates.name) authUpdates.data = { name: updates.name }

      const { error: authError } = await supabase.auth.updateUser(authUpdates)
      if (authError) throw authError
    }

    // Update profile table
    const { data, error } = await supabase
      .from('profiles')
      .update({
        name: updates.name,
        bio: updates.bio,
        avatar_url: updates.avatar,
        plan: updates.plan,
        studies_completed: updates.studiesCompleted
      })
      .eq('id', user.value.id)
      .select()
      .single()

    if (error) throw error

    // Update local user state
    user.value = { ...user.value, ...updates }
    return { success: true }
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
