import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  updateProfile,
  User as FirebaseUser
} from 'firebase/auth'
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore'
import { auth, db } from '@/lib/firebase'

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

  const transformFirebaseUser = async (firebaseUser: FirebaseUser): Promise<User> => {
    console.log('Transforming Firebase user:', firebaseUser.uid)

    // Try to get user profile from Firestore
    const userDocRef = doc(db, 'users', firebaseUser.uid)
    const userDoc = await getDoc(userDocRef)

    if (userDoc.exists()) {
      const userData = userDoc.data()
      return {
        id: firebaseUser.uid,
        name: userData.name || firebaseUser.displayName || 'User',
        email: firebaseUser.email || '',
        avatar: userData.avatar || firebaseUser.photoURL,
        bio: userData.bio,
        plan: userData.plan || 'free',
        studiesCompleted: userData.studiesCompleted || 0,
        joinDate: userData.joinDate || firebaseUser.metadata.creationTime || new Date().toISOString(),
        emailVerified: firebaseUser.emailVerified
      }
    } else {
      // Create user profile if it doesn't exist
      const newUser: User = {
        id: firebaseUser.uid,
        name: firebaseUser.displayName || firebaseUser.email?.split('@')[0] || 'User',
        email: firebaseUser.email || '',
        avatar: firebaseUser.photoURL,
        plan: 'free',
        studiesCompleted: 0,
        joinDate: firebaseUser.metadata.creationTime || new Date().toISOString(),
        emailVerified: firebaseUser.emailVerified
      }

      // Save to Firestore
      await setDoc(userDocRef, {
        name: newUser.name,
        email: newUser.email,
        avatar: newUser.avatar,
        bio: newUser.bio,
        plan: newUser.plan,
        studiesCompleted: newUser.studiesCompleted,
        joinDate: newUser.joinDate,
        emailVerified: newUser.emailVerified
      })

      return newUser
    }
  }

  const signUp = async (
    email: string,
    password: string,
    name: string
  ): Promise<{ success: boolean; error?: string }> => {
    console.log('=== FIREBASE SIGNUP ===')
    console.log('Email:', email, 'Name:', name)
    
    isLoading.value = true
    clearError()

    try {
      // Create user with Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const firebaseUser = userCredential.user

      console.log('Firebase user created:', firebaseUser.uid)

      // Update the user's display name
      await updateProfile(firebaseUser, {
        displayName: name
      })

      // Transform and set user
      user.value = await transformFirebaseUser(firebaseUser)
      
      console.log('User signup successful:', user.value)
      return { success: true }

    } catch (err: any) {
      console.error('Firebase signup error:', err)
      const errorMessage = err.message || 'Sign up failed. Please try again.'
      setError(errorMessage, err.code)
      return { success: false, error: errorMessage }
    } finally {
      isLoading.value = false
    }
  }

  const login = async (
    email: string,
    password: string
  ): Promise<{ success: boolean; error?: string }> => {
    console.log('=== FIREBASE LOGIN ===')
    console.log('Email:', email)
    
    isLoading.value = true
    clearError()

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      const firebaseUser = userCredential.user

      console.log('Firebase login successful:', firebaseUser.uid)
      
      user.value = await transformFirebaseUser(firebaseUser)
      
      console.log('User login complete:', user.value)
      return { success: true }

    } catch (err: any) {
      console.error('Firebase login error:', err)
      let errorMessage = 'Login failed. Please try again.'
      
      if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password') {
        errorMessage = 'Invalid email or password.'
      } else if (err.code === 'auth/too-many-requests') {
        errorMessage = 'Too many failed attempts. Please try again later.'
      }
      
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
      await signOut(auth)
      user.value = null
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
      const userDocRef = doc(db, 'users', user.value.id)
      await updateDoc(userDocRef, updates)
      
      // Update local user state
      user.value = { ...user.value, ...updates }
      
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

    console.log('=== INITIALIZING FIREBASE AUTH ===')
    
    return new Promise<void>((resolve) => {
      const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
        console.log('Auth state changed:', firebaseUser?.uid || 'No user')
        
        try {
          if (firebaseUser) {
            user.value = await transformFirebaseUser(firebaseUser)
            console.log('User loaded from auth state:', user.value)
          } else {
            user.value = null
          }
        } catch (err) {
          console.error('Error loading user from auth state:', err)
          user.value = null
        }
        
        if (!isInitialized.value) {
          isInitialized.value = true
          resolve()
        }
      })

      // Store unsubscribe function for cleanup if needed
      // You could store this in the store for cleanup on logout
    })
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
    setError
  }
})
