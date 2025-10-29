import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getSupabase, isSupabaseAvailable } from '../lib/supabase'
import type { User } from '@supabase/supabase-js'

export interface UserProfile {
  id: string
  name: string
  email: string
  avatar?: string
  bio?: string
  hasSupported?: boolean // Optional: Track if user has donated (for recognition)
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
    id: 'demo-supporter-user',
    name: 'Demo User',
    email: 'demo@biblestem.com',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    bio: "Exploring the depths of God's Word and supporting the ministry.",
    hasSupported: true, // This user has donated
    studiesCompleted: 12,
    joinDate: '2023-01-15T00:00:00.000Z',
    emailVerified: true,
  },
  'test@biblestem.com': {
    id: 'demo-regular-user',
    name: 'Test User',
    email: 'test@biblestem.com',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    bio: 'Starting my journey with Bible studies.',
    hasSupported: false,
    studiesCompleted: 3,
    joinDate: '2024-01-01T00:00:00.000Z',
    emailVerified: true,
  },
}

export const useAuthStore = defineStore('auth', () => {
  const user = ref<UserProfile | null>(null)
  const isLoading = ref(false)
  const error = ref<AuthError | null>(null)
  const isInitialized = ref(false)
  const useSupabase = isSupabaseAvailable()

  const isAuthenticated = computed(() => !!user.value)
  const hasSupported = computed(() => user.value?.hasSupported === true)

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
    console.log('=== SIGNUP ===')
    console.log('Email:', email, 'Name:', name, 'Using Supabase:', useSupabase)

    isLoading.value = true
    clearError()

    try {
      if (useSupabase) {
        const supabase = getSupabase()
        if (!supabase) throw new Error('Supabase client not available')

        // Sign up with Supabase Auth
        const { data: authData, error: authError } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              name,
            },
          },
        })

        if (authError) throw authError

          // Create user profile in database
          if (authData.user) {
            const { error: profileError } = await supabase.from('users').insert({
              id: authData.user.id,
              email,
              name,
              has_supported: false,
            })

            if (profileError) console.error('Profile creation error:', profileError)

            // Map Supabase user to our user profile
            user.value = {
              id: authData.user.id,
              name,
              email: authData.user.email!,
              hasSupported: false,
              studiesCompleted: 0,
              joinDate: new Date().toISOString(),
              emailVerified: authData.user.email_confirmed_at ? true : false,
            }
          }

        console.log('Signup successful with Supabase:', user.value)
        return { success: true }
      } else {
        // Fallback to demo mode
        console.log('=== DEMO SIGNUP (fallback) ===')
        await new Promise((resolve) => setTimeout(resolve, 1000))

        const newUser: UserProfile = {
          id: `user-${Date.now()}`,
          name,
          email,
          hasSupported: false,
          studiesCompleted: 0,
          joinDate: new Date().toISOString(),
          emailVerified: true,
        }

        user.value = newUser
        localStorage.setItem('biblestem_user', JSON.stringify(newUser))

        console.log('Demo user signup successful:', user.value)
        return { success: true }
      }
    } catch (err: any) {
      console.error('Signup error:', err)
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
    console.log('=== LOGIN ===')
    console.log('Email:', email, 'Using Supabase:', useSupabase)

    isLoading.value = true
    clearError()

    try {
      if (useSupabase) {
        const supabase = getSupabase()
        if (!supabase) throw new Error('Supabase client not available')

        // Sign in with Supabase Auth
        const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
          email,
          password,
        })

        if (authError) throw authError

        if (authData.user) {
          // Fetch user profile from database
          const { data: profile, error: profileError } = await supabase
            .from('users')
            .select('*')
            .eq('id', authData.user.id)
            .single()

          if (profile) {
            user.value = {
              id: profile.id,
              name: profile.name,
              email: profile.email,
              avatar: profile.avatar,
              bio: profile.bio,
              hasSupported: profile.has_supported || false,
              studiesCompleted: 0, // TODO: Calculate from study_progress
              joinDate: profile.created_at,
              emailVerified: profile.email_verified,
            }
          } else {
            // Fallback if profile doesn't exist yet
            user.value = {
              id: authData.user.id,
              name: authData.user.user_metadata.name || email.split('@')[0],
              email: authData.user.email!,
              hasSupported: false,
              studiesCompleted: 0,
              joinDate: new Date().toISOString(),
              emailVerified: !!authData.user.email_confirmed_at,
            }
          }

          console.log('Login successful with Supabase:', user.value)
          return { success: true }
        }

        return { success: false, error: 'No user data returned' }
      } else {
        // Fallback to demo mode
        console.log('=== DEMO LOGIN (fallback) ===')
        await new Promise((resolve) => setTimeout(resolve, 800))

        if (email in DEMO_USERS) {
          const demoUser = DEMO_USERS[email as keyof typeof DEMO_USERS]
          user.value = { ...demoUser }
          localStorage.setItem('biblestem_user', JSON.stringify(user.value))
          console.log('Demo login successful:', user.value)
          return { success: true }
        }

        const newUser: UserProfile = {
          id: `user-${Date.now()}`,
          name: email.split('@')[0] || 'Demo User',
          email,
          hasSupported: false,
          studiesCompleted: Math.floor(Math.random() * 5),
          joinDate: new Date().toISOString(),
          emailVerified: true,
        }

        user.value = newUser
        localStorage.setItem('biblestem_user', JSON.stringify(user.value))
        console.log('Demo login complete:', user.value)
        return { success: true }
      }
    } catch (err: any) {
      console.error('Login error:', err)
      const errorMessage = err.message || 'Login failed. Please try again.'
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
      if (useSupabase) {
        const supabase = getSupabase()
        if (supabase) {
          await supabase.auth.signOut()
        }
      }

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

  const updateUserProfile = async (updates: Partial<UserProfile>) => {
    if (!user.value) return { success: false, error: 'User not authenticated' }

    isLoading.value = true
    clearError()

    try {
      // Update local user state
      user.value = { ...user.value, ...updates }

      if (useSupabase) {
        const supabase = getSupabase()
        if (supabase) {
          // Update profile in database
          const { error } = await supabase
            .from('users')
            .update({
              name: updates.name,
              bio: updates.bio,
              avatar: updates.avatar,
            })
            .eq('id', user.value.id)

          if (error) {
            console.error('Database update error:', error)
            throw error
          }
        }
      } else {
        // Update localStorage as fallback
        localStorage.setItem('biblestem_user', JSON.stringify(user.value))
      }

      return { success: true }
    } catch (err: any) {
      console.error('Profile update error:', err)
      const errorMessage = err.message || 'Failed to update profile'
      setError(errorMessage)
      return { success: false, error: errorMessage }
    } finally {
      isLoading.value = false
    }
  }

  const initializeAuth = async () => {
    if (isInitialized.value) return

    console.log('=== INITIALIZING AUTH ===')
    console.log('Using Supabase:', useSupabase)

    try {
      if (useSupabase) {
        const supabase = getSupabase()
        if (supabase) {
          // Get current session
          const { data: { session }, error: sessionError } = await supabase.auth.getSession()

          if (session && session.user && !sessionError) {
            // Fetch user profile from database
            const { data: profile } = await supabase
              .from('users')
              .select('*')
              .eq('id', session.user.id)
              .single()

            if (profile) {
              user.value = {
                id: profile.id,
                name: profile.name,
                email: profile.email,
                avatar: profile.avatar,
                bio: profile.bio,
                hasSupported: profile.has_supported || false,
                studiesCompleted: 0, // TODO: Calculate from study_progress
                joinDate: profile.created_at,
                emailVerified: profile.email_verified,
              }
              console.log('User loaded from Supabase:', user.value)
            } else {
              // Create profile from session if it doesn't exist
              user.value = {
                id: session.user.id,
                name: session.user.user_metadata.name || session.user.email!.split('@')[0],
                email: session.user.email!,
                hasSupported: false,
                studiesCompleted: 0,
                joinDate: session.user.created_at,
                emailVerified: !!session.user.email_confirmed_at,
              }
              console.log('User created from session:', user.value)
            }
          } else {
            user.value = null
            console.log('No active session found')
          }

          // Listen for auth changes
          supabase.auth.onAuthStateChange(async (event, session) => {
            console.log('Auth state changed:', event, session)
            if (event === 'SIGNED_IN' && session?.user) {
              // Reload user profile
              await initializeAuth()
            } else if (event === 'SIGNED_OUT') {
              user.value = null
            }
          })
        }
      } else {
        // Fallback to localStorage
        console.log('=== INITIALIZING DEMO AUTH (fallback) ===')
        const storedUser = localStorage.getItem('biblestem_user')
        if (storedUser) {
          user.value = JSON.parse(storedUser)
          console.log('User loaded from localStorage:', user.value)
        } else {
          user.value = null
          console.log('No stored user found')
        }
      }
    } catch (err) {
      console.error('Error initializing auth:', err)
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
    hasSupported,

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
