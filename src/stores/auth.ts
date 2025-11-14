import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getSupabase, isSupabaseAvailable, handleSupabaseError, requiresReAuth } from '../lib/supabase'
import { logger } from '../utils/logger'
import { securityService } from '../services/securityService'
import { sanitizeEmail, sanitizePlainText } from '../utils/sanitization'
import { getTotalStudiesCompleted } from '../utils/progressCalculations'
import { getAllStudies } from '../data/studies'
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
  let handleTokenRefreshError: (() => void) | null = null

  const isAuthenticated = computed(() => !!user.value)
  const hasSupported = computed(() => user.value?.hasSupported === true)

  /**
   * Calculate studies completed count from study_progress
   */
  const calculateStudiesCompleted = async (): Promise<number> => {
    try {
      // Import stores dynamically to avoid circular dependencies
      const { useStudyProgressStore } = await import('./studyProgress')
      const progressStore = useStudyProgressStore()

      // Ensure progress is initialized
      if (!progressStore.isInitialized) {
        await progressStore.loadFromStorage()
      }

      // Get all studies with their lessons
      const allStudies = getAllStudies()
      const studiesData: Record<string, { lessons: any[] }> = {}
      allStudies.forEach((study) => {
        studiesData[study.id] = { lessons: study.lessons || [] }
      })

      // Get all progress data
      const progressData = progressStore.getAllStudyProgress()

      // Calculate completed studies
      return getTotalStudiesCompleted(progressData, studiesData)
    } catch (error) {
      logger.error('Error calculating studies completed:', error)
      return 0
    }
  }

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

    // Rate limiting
    try {
      await securityService.checkAuthRateLimit(email)
    } catch (rateLimitError) {
      return {
        success: false,
        error: 'Too many signup attempts. Please try again later.'
      }
    }

    // Sanitize inputs
    const sanitizedEmail = sanitizeEmail(email)
    const sanitizedName = sanitizePlainText(name, { maxLength: 100, trim: true })

    if (!sanitizedEmail) {
      return { success: false, error: 'Invalid email address' }
    }

    isLoading.value = true
    clearError()

    try {
      if (useSupabase) {
        const supabase = getSupabase()
        if (!supabase) throw new Error('Supabase client not available')

        // Sign up with Supabase Auth (use sanitized inputs)
        const { data: authData, error: authError } = await supabase.auth.signUp({
          email: sanitizedEmail,
          password,
          options: {
            data: {
              name: sanitizedName,
            },
          },
        })

        if (authError) {
          const errorInfo = handleSupabaseError(authError, 'sign up')
          // Enhance error message for UI
          authError.message = errorInfo.userFriendlyMessage
          throw authError
        }

          // Create user profile in database (use sanitized inputs)
          if (authData.user) {
            const { error: profileError } = await supabase.from('users').insert({
              id: authData.user.id,
              email: sanitizedEmail,
              name: sanitizedName,
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
              studiesCompleted: await calculateStudiesCompleted(),
              joinDate: authData.user.created_at || new Date().toISOString(),
              emailVerified: authData.user.email_confirmed_at ? true : false,
            }
            
            // If email is not verified, redirect to verification page
            if (!authData.user.email_confirmed_at) {
              logger.debug('Email not verified - user needs to verify email')
              // Don't set user as authenticated until email is verified
              user.value = null
              return { 
                success: true, 
                error: 'Please check your email to verify your account before signing in.'
              }
            }
          }

        logger.debug('Signup successful with Supabase:', user.value)
        
        // Track signup in analytics
        import('../services/analytics').then(({ analytics }) => {
          analytics.trackSignup('email')
          if (user.value) {
            analytics.setUserProperties(user.value.id, {
              email: user.value.email,
              name: user.value.name,
            })
          }
        })
        
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
    rememberMe: boolean = false,
  ): Promise<{ success: boolean; error?: string }> => {
    logger.debug('=== LOGIN ===')
    logger.debug('Email:', email, 'Remember Me:', rememberMe, 'Using Supabase:', useSupabase)

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
        
        // Store remember me preference
        if (rememberMe) {
          localStorage.setItem('biblestem_remember_me', 'true')
          localStorage.setItem('biblestem_remembered_email', email)
        } else {
          localStorage.removeItem('biblestem_remember_me')
          localStorage.removeItem('biblestem_remembered_email')
        }

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
              studiesCompleted: await calculateStudiesCompleted(),
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
              studiesCompleted: await calculateStudiesCompleted(),
              joinDate: new Date().toISOString(),
              emailVerified: !!authData.user.email_confirmed_at,
            }
          }

                        logger.debug('Login successful with Supabase:', user.value)
          
          // Track login in analytics
          import('../services/analytics').then(({ analytics }) => {
            analytics.trackLogin('email')
            if (user.value) {
              analytics.setUserProperties(user.value.id, {
                email: user.value.email,
                name: user.value.name,
              })
            }
          })
          
          // Set Sentry user context
          import('../services/monitoring').then(({ setSentryUser }) => {
            if (user.value) {
              setSentryUser(user.value.id, user.value.email, user.value.name)
            }
          })
          
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
      // Clear analytics user
      import('../services/analytics').then(({ analytics }) => {
        analytics.clearUserProperties()
      })
      
      // Clear Sentry user context
      import('../services/monitoring').then(({ clearSentryUser }) => {
        clearSentryUser()
      })
      
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
          // Clean up any existing subscription before creating a new one
          if (authSubscription) {
            authSubscription.unsubscribe()
            authSubscription = null
          }

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
                studiesCompleted: await calculateStudiesCompleted(),
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
                studiesCompleted: await calculateStudiesCompleted(),
                joinDate: session.user.created_at,
                emailVerified: !!session.user.email_confirmed_at,
              }
              logger.debug('User created from session:', user.value)
            }
          } else {
            user.value = null
            logger.debug('No active session found')
          }

          // Handle token refresh errors (defined before subscription)
          handleTokenRefreshError = () => {
            console.warn('Token refresh failed')
            handleSessionExpiry()
          }
          
          // Listen for auth changes
          const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
            console.log('Auth state changed:', event, session)
            
            switch (event) {
              case 'SIGNED_IN':
                if (session?.user) {
                  // Reload user profile
                  await initializeAuth()
                }
                break
                
              case 'SIGNED_OUT':
                user.value = null
                isInitialized.value = false
                // Clear any stored session data
                localStorage.removeItem('biblestem_user')
                // Check if this was due to session expiry (not manual logout)
                // Note: We can't easily distinguish, so we'll handle expiry in TOKEN_REFRESHED
                break
                
              case 'TOKEN_REFRESHED':
                if (session) {
                  console.log('Token refreshed successfully')
                  // Optionally update user data on token refresh
                } else {
                  console.warn('Token refresh failed - session expired')
                  // Handle graceful logout
                  handleSessionExpiry()
                }
                break
                
              case 'USER_UPDATED':
                if (session?.user) {
                  // Reload user profile when user is updated
                  await initializeAuth()
                }
                break
                
              case 'PASSWORD_RECOVERY':
                // Handle password recovery flow
                console.log('Password recovery initiated')
                break
                
              default:
                // Handle other events
                console.log('Auth event:', event)
            }
          })
          
          if (typeof window !== 'undefined') {
            window.addEventListener('auth:token-refresh-failed', handleTokenRefreshError)
          }

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

  // Handle session expiry gracefully
  const handleSessionExpiry = () => {
    logger.warn('Session expired - logging out gracefully')
    
    // Clear user state
    user.value = null
    isInitialized.value = false
    
    // Clear stored session data
    localStorage.removeItem('biblestem_user')
    
    // Dispatch event for UI to show notification
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('auth:session-expired', {
        detail: {
          message: 'Your session has expired. Please sign in again to continue.',
        }
      }))
    }
    
    // If user is on a protected route, redirect to sign in
    if (typeof window !== 'undefined' && window.location.pathname !== '/sign-in') {
      // Use a small delay to allow the notification to show
      setTimeout(() => {
        window.location.href = '/sign-in?reason=session-expired'
      }, 1000)
    }
  }

  // Request password reset
  const requestPasswordReset = async (
    email: string,
  ): Promise<{ success: boolean; error?: string }> => {
    logger.debug('=== REQUEST PASSWORD RESET ===', email)

    isLoading.value = true
    clearError()

    try {
      if (useSupabase) {
        const supabase = getSupabase()
        if (!supabase) throw new Error('Supabase client not available')

        // Request password reset
        const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
          redirectTo: `${window.location.origin}/reset-password`,
        })

        if (resetError) {
          const errorInfo = handleSupabaseError(resetError, 'request password reset')
          throw new Error(errorInfo.userFriendlyMessage)
        }

        logger.debug('Password reset email sent successfully')
        return { success: true }
      } else {
        throw new Error('Supabase is not available. Please configure Supabase to reset your password.')
      }
    } catch (err: any) {
      logger.error('Password reset request error:', err)
      const errorMessage = err.message || 'Failed to send reset email. Please try again.'
      setError(errorMessage, err.code)
      return { success: false, error: errorMessage }
    } finally {
      isLoading.value = false
    }
  }

  // Reset password with token
  const resetPassword = async (
    token: string,
    newPassword: string,
  ): Promise<{ success: boolean; error?: string }> => {
    logger.debug('=== RESET PASSWORD ===')

    isLoading.value = true
    clearError()

    try {
      if (useSupabase) {
        const supabase = getSupabase()
        if (!supabase) throw new Error('Supabase client not available')

        // Supabase automatically handles tokens in URL hash
        // But we need to set the session if token is in URL
        if (typeof window !== 'undefined') {
          const hash = window.location.hash
          if (hash.includes('access_token=') && hash.includes('refresh_token=')) {
            const hashParams = new URLSearchParams(hash.substring(1))
            const accessToken = hashParams.get('access_token')
            const refreshToken = hashParams.get('refresh_token')
            
            if (accessToken && refreshToken) {
              const { error: sessionError } = await supabase.auth.setSession({
                access_token: accessToken,
                refresh_token: refreshToken,
              })
              
              if (sessionError) {
                const errorInfo = handleSupabaseError(sessionError, 'set password reset session')
                throw new Error(errorInfo.userFriendlyMessage || 'Invalid or expired reset token. Please request a new password reset link.')
              }
            }
          } else if (token && !hash.includes('access_token=')) {
            // If token is provided but not in hash, try to use it
            // This is a fallback for non-standard token formats
            throw new Error('Invalid reset token format. Please use the link from your email.')
          }
        }

        // Update password (session must be set first)
        const { error: updateError } = await supabase.auth.updateUser({
          password: newPassword,
        })

        if (updateError) {
          const errorInfo = handleSupabaseError(updateError, 'reset password')
          throw new Error(errorInfo.userFriendlyMessage)
        }

        logger.debug('Password reset successfully')
        return { success: true }
      } else {
        throw new Error('Supabase is not available. Please configure Supabase to reset your password.')
      }
    } catch (err: any) {
      logger.error('Password reset error:', err)
      const errorMessage = err.message || 'Failed to reset password. Please try again.'
      setError(errorMessage, err.code)
      return { success: false, error: errorMessage }
    } finally {
      isLoading.value = false
    }
  }

  // Verify email
  const verifyEmail = async (
    token: string,
  ): Promise<{ success: boolean; error?: string }> => {
    logger.debug('=== VERIFY EMAIL ===')

    isLoading.value = true
    clearError()

    try {
      if (useSupabase) {
        const supabase = getSupabase()
        if (!supabase) throw new Error('Supabase client not available')

        // Verify email - Supabase handles this via URL tokens automatically
        // But we can also verify using verifyOtp if token is provided
        if (token && typeof window !== 'undefined') {
          const hashParams = new URLSearchParams(window.location.hash.substring(1))
          const tokenHash = hashParams.get('token_hash') || token
          const type = hashParams.get('type') || 'email'

          if (tokenHash) {
            const { error: verifyError } = await supabase.auth.verifyOtp({
              token_hash: tokenHash,
              type: type as any,
            })

            if (verifyError) {
              const errorInfo = handleSupabaseError(verifyError, 'verify email')
              throw new Error(errorInfo.userFriendlyMessage)
            }
          }
        }

        // Reload user to get updated email verification status
        await initializeAuth()

        logger.debug('Email verified successfully')
        return { success: true }
      } else {
        throw new Error('Supabase is not available. Please configure Supabase to verify your email.')
      }
    } catch (err: any) {
      logger.error('Email verification error:', err)
      const errorMessage = err.message || 'Failed to verify email. Please try again.'
      setError(errorMessage, err.code)
      return { success: false, error: errorMessage }
    } finally {
      isLoading.value = false
    }
  }

  // Resend verification email
  const resendVerificationEmail = async (
    email: string,
  ): Promise<{ success: boolean; error?: string }> => {
    logger.debug('=== RESEND VERIFICATION EMAIL ===', email)

    isLoading.value = true
    clearError()

    try {
      if (useSupabase) {
        const supabase = getSupabase()
        if (!supabase) throw new Error('Supabase client not available')

        // Resend verification email
        const { error: resendError } = await supabase.auth.resend({
          type: 'signup',
          email,
          options: {
            emailRedirectTo: `${window.location.origin}/verify-email`,
          },
        })

        if (resendError) {
          const errorInfo = handleSupabaseError(resendError, 'resend verification email')
          throw new Error(errorInfo.userFriendlyMessage)
        }

        logger.debug('Verification email resent successfully')
        return { success: true }
      } else {
        throw new Error('Supabase is not available. Please configure Supabase to resend verification email.')
      }
    } catch (err: any) {
      logger.error('Resend verification email error:', err)
      const errorMessage = err.message || 'Failed to resend verification email. Please try again.'
      setError(errorMessage, err.code)
      return { success: false, error: errorMessage }
    } finally {
      isLoading.value = false
    }
  }

  // Cleanup method to unsubscribe from auth state changes
  const cleanup = () => {
    if (authSubscription) {
      authSubscription.unsubscribe()
      authSubscription = null
      logger.debug('Auth subscription cleaned up')
    }
    
    // Remove event listeners
    if (typeof window !== 'undefined' && handleTokenRefreshError) {
      window.removeEventListener('auth:token-refresh-failed', handleTokenRefreshError)
    }
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
    requestPasswordReset,
    resetPassword,
    verifyEmail,
    resendVerificationEmail,
    clearError,
    setError,
    cleanup,
  }
})
