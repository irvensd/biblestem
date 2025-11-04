import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getSupabase, isSupabaseAvailable, handleSupabaseError, requiresReAuth } from '../lib/supabase'
import { logger } from '../utils/logger'
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

export const useAuthStore = defineStore('auth', () => {
  const user = ref<UserProfile | null>(null)
  const isLoading = ref(false)
  const error = ref<AuthError | null>(null)
  const isInitialized = ref(false)
  const useSupabase = isSupabaseAvailable()
  let authSubscription: { unsubscribe: () => void } | null = null

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
    logger.debug('=== SIGNUP ===')
    logger.debug('Email:', email, 'Name:', name, 'Using Supabase:', useSupabase)

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

        if (authError) {
          const errorInfo = handleSupabaseError(authError, 'sign up')
          // Enhance error message for UI
          authError.message = errorInfo.userFriendlyMessage
          throw authError
        }

          // Create user profile in database
          if (authData.user) {
            const { error: profileError } = await supabase.from('users').insert({
              id: authData.user.id,
              email,
              name,
              has_supported: false,
            })

            if (profileError) {
              const errorInfo = handleSupabaseError(profileError, 'create user profile')
              console.error('Profile creation error:', errorInfo.userFriendlyMessage, errorInfo)
              // Don't throw - auth succeeded, profile creation is secondary
            }

            // Map Supabase user to our user profile
            user.value = {
              id: authData.user.id,
              name,
              email: authData.user.email!,
              hasSupported: false,
              studiesCompleted: 0,
              joinDate: authData.user.created_at || new Date().toISOString(),
              emailVerified: authData.user.email_confirmed_at ? true : false,
            }
          }

        logger.debug('Signup successful with Supabase:', user.value)
        return { success: true }
      } else {
        // Supabase is required for sign up
        throw new Error('Supabase is not available. Please configure Supabase to create an account.')
      }
    } catch (err: any) {
      logger.error('Signup error:', err)
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
    logger.debug('=== LOGIN ===')
    logger.debug('Email:', email, 'Using Supabase:', useSupabase)

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

        if (authError) {
          const errorInfo = handleSupabaseError(authError, 'sign in')
          // Enhance error message for UI
          authError.message = errorInfo.userFriendlyMessage
          throw authError
        }

        if (authData.user) {
          // Fetch user profile from database
          const { data: profile, error: profileError } = await supabase
            .from('users')
            .select('*')
            .eq('id', authData.user.id)
            .single()

          if (profileError) {
            const errorInfo = handleSupabaseError(profileError, 'load user profile')
            // If RLS error, user might not have profile yet - create one
            if (errorInfo.isRLSViolation || errorInfo.isNotFound) {
              console.warn('Profile not found or RLS error - user may need profile creation')
            } else {
              console.error('Failed to load profile:', errorInfo.userFriendlyMessage, errorInfo)
            }
          }

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

                        logger.debug('Login successful with Supabase:', user.value)
          return { success: true }
        }

        return { success: false, error: 'No user data returned' }
      } else {
        // Supabase is required for login
        throw new Error('Supabase is not available. Please configure Supabase to log in.')
      }
    } catch (err: any) {
      logger.error('Login error:', err)
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
      // Cleanup auth subscription
      if (authSubscription) {
        authSubscription.unsubscribe()
        authSubscription = null
      }

      if (useSupabase) {
        const supabase = getSupabase()
        if (supabase) {
          await supabase.auth.signOut()
        }
      }

      user.value = null
      localStorage.removeItem('biblestem_user')
      isInitialized.value = false
      logger.debug('User logged out successfully')
          } catch (err: any) {
        logger.error('Logout error:', err)
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
            const errorInfo = handleSupabaseError(error, 'update profile')
            console.error('Database update error:', errorInfo.userFriendlyMessage, errorInfo)
            // If RLS violation, provide better error message
            if (errorInfo.isRLSViolation || errorInfo.isAuthError) {
              throw new Error('You do not have permission to update this profile. Please sign in again.')
            }
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

    logger.debug('=== INITIALIZING AUTH ===')
    logger.debug('Using Supabase:', useSupabase)

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
              logger.debug('User loaded from Supabase:', user.value)
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
              logger.debug('User created from session:', user.value)
            }
          } else {
            user.value = null
            logger.debug('No active session found')
          }

          // Listen for auth changes
          const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
            console.log('Auth state changed:', event, session)
            if (event === 'SIGNED_IN' && session?.user) {
              // Reload user profile
              await initializeAuth()
            } else if (event === 'SIGNED_OUT') {
              user.value = null
            }
          })

          // Store subscription for cleanup
          authSubscription = subscription
        }
      } else {
        // Fallback to localStorage if Supabase is not available
        logger.debug('Supabase not available, checking localStorage for user')
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
