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

// Demo user for testing - hardcoded credentials
const DEMO_USER = {
  email: 'demo@biblestem.com',
  password: 'demo123', // Hardcoded password for demo
  profile: {
    id: 'demo-user-001',
    name: 'Demo User',
    email: 'demo@biblestem.com',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    bio: "Testing BibleStem's interactive Bible studies.",
    hasSupported: false, // Regular user by default
    studiesCompleted: 5,
    joinDate: '2024-01-15T00:00:00.000Z',
    emailVerified: true,
  }
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
              plan: 'free',
              email_verified: false,
            })

            if (profileError) {
              console.error('Profile creation error:', profileError)
              // If profile already exists, that's okay - user might have signed up before
              if (!profileError.message.includes('duplicate') && !profileError.message.includes('unique')) {
                throw profileError
              }
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
      // Check for demo account FIRST (before Supabase)
      if (email === DEMO_USER.email && password === DEMO_USER.password) {
        console.log('=== DEMO LOGIN ===')
        await new Promise((resolve) => setTimeout(resolve, 500))
        user.value = { ...DEMO_USER.profile }
        localStorage.setItem('biblestem_user', JSON.stringify(user.value))
        console.log('Demo login successful:', user.value)
        return { success: true }
      }

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
            // Map plan to hasSupported (premium plan = hasSupported)
            user.value = {
              id: profile.id,
              name: profile.name,
              email: profile.email,
              avatar: profile.avatar,
              bio: profile.bio,
              hasSupported: profile.plan === 'premium',
              studiesCompleted: 0, // TODO: Calculate from study_progress
              joinDate: profile.created_at,
              emailVerified: profile.email_verified,
            }
          } else {
            // Create profile if it doesn't exist yet
            const userName = authData.user.user_metadata?.name || authData.user.email!.split('@')[0]
            const { error: insertError } = await supabase.from('users').insert({
              id: authData.user.id,
              email: authData.user.email!,
              name: userName,
              plan: 'free',
              email_verified: !!authData.user.email_confirmed_at,
            })

            if (insertError) {
              console.error('Failed to create user profile:', insertError)
            }

            // Create local user object
            user.value = {
              id: authData.user.id,
              name: userName,
              email: authData.user.email!,
              hasSupported: false,
              studiesCompleted: 0,
              joinDate: authData.user.created_at || new Date().toISOString(),
              emailVerified: !!authData.user.email_confirmed_at,
            }
          }

          console.log('Login successful with Supabase:', user.value)
          return { success: true }
        }

        return { success: false, error: 'No user data returned' }
      } else {
        // No Supabase and not demo - show error
        throw new Error('Invalid login credentials')
      }
    } catch (err: any) {
      console.error('Login error:', err)
      
      // Handle Supabase auth errors specifically
      let errorMessage = 'Invalid login credentials. Please check your email and password.'
      
      if (err?.message) {
        const errMsg = err.message.toLowerCase()
        
        // Supabase auth error codes
        if (errMsg.includes('invalid login credentials') || 
            errMsg.includes('invalid_credentials') ||
            errMsg.includes('invalid password')) {
          errorMessage = 'Invalid login credentials. Please check your email and password.'
        } else if (errMsg.includes('email not confirmed') || 
                   errMsg.includes('email_not_confirmed')) {
          errorMessage = 'Please verify your email address before signing in.'
        } else if (errMsg.includes('user not found')) {
          errorMessage = 'No account found with this email address.'
        } else if (errMsg.includes('rate limit') || errMsg.includes('too many requests')) {
          errorMessage = 'Too many login attempts. Please wait a moment and try again.'
        } else if (errMsg.includes('network') || errMsg.includes('fetch')) {
          errorMessage = 'Network error. Please check your internet connection and try again.'
        } else {
          // Use the original error message if it's not a known auth error
          errorMessage = err.message
        }
      }
      
      setError(errorMessage, err?.code)
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

  const forgotPassword = async (email: string): Promise<{ success: boolean; error?: string }> => {
    isLoading.value = true
    clearError()

    try {
      if (useSupabase) {
        const supabase = getSupabase()
        if (!supabase) throw new Error('Supabase client not available')

        // Send password reset email
        const { error } = await supabase.auth.resetPasswordForEmail(email, {
          redirectTo: `${window.location.origin}/reset-password`,
        })

        if (error) throw error

        return { success: true }
      } else {
        // Demo mode - just return success (no actual email sent)
        await new Promise((resolve) => setTimeout(resolve, 500))
        return { success: true }
      }
    } catch (err: any) {
      console.error('Forgot password error:', err)
      let errorMessage = 'Failed to send password reset email. Please try again.'

      if (err?.message) {
        const errMsg = err.message.toLowerCase()
        if (errMsg.includes('rate limit') || errMsg.includes('too many requests')) {
          errorMessage = 'Too many requests. Please wait a moment and try again.'
        } else if (errMsg.includes('network') || errMsg.includes('fetch')) {
          errorMessage = 'Network error. Please check your internet connection and try again.'
        }
      }

      setError(errorMessage, err?.code)
      return { success: false, error: errorMessage }
    } finally {
      isLoading.value = false
    }
  }

  const resetPassword = async (newPassword: string): Promise<{ success: boolean; error?: string }> => {
    isLoading.value = true
    clearError()

    try {
      if (useSupabase) {
        const supabase = getSupabase()
        if (!supabase) throw new Error('Supabase client not available')

        // Update password
        const { error } = await supabase.auth.updateUser({
          password: newPassword,
        })

        if (error) throw error

        return { success: true }
      } else {
        // Demo mode
        await new Promise((resolve) => setTimeout(resolve, 500))
        return { success: true }
      }
    } catch (err: any) {
      console.error('Reset password error:', err)
      let errorMessage = 'Failed to reset password. Please try again.'

      if (err?.message) {
        const errMsg = err.message.toLowerCase()
        if (errMsg.includes('password')) {
          errorMessage = 'Password must be at least 6 characters long.'
        } else if (errMsg.includes('network') || errMsg.includes('fetch')) {
          errorMessage = 'Network error. Please check your internet connection and try again.'
        }
      }

      setError(errorMessage, err?.code)
      return { success: false, error: errorMessage }
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
              // Map plan to hasSupported (premium plan = hasSupported)
              user.value = {
                id: profile.id,
                name: profile.name,
                email: profile.email,
                avatar: profile.avatar,
                bio: profile.bio,
                hasSupported: profile.plan === 'premium',
                studiesCompleted: 0, // TODO: Calculate from study_progress
                joinDate: profile.created_at,
                emailVerified: profile.email_verified,
              }
              console.log('User loaded from Supabase:', user.value)
            } else {
              // Create profile from session if it doesn't exist
              const userName = session.user.user_metadata?.name || session.user.email!.split('@')[0]
              const { error: insertError } = await supabase.from('users').insert({
                id: session.user.id,
                email: session.user.email!,
                name: userName,
                plan: 'free',
                email_verified: !!session.user.email_confirmed_at,
              })

              if (insertError) {
                console.error('Failed to create user profile:', insertError)
              }

              user.value = {
                id: session.user.id,
                name: userName,
                email: session.user.email!,
                hasSupported: false,
                studiesCompleted: 0,
                joinDate: session.user.created_at,
                emailVerified: !!session.user.email_confirmed_at,
              }
              console.log('User profile created from session:', user.value)
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
    forgotPassword,
    resetPassword,
    updateUserProfile,
    initializeAuth,
    clearError,
    setError,
  }
})
