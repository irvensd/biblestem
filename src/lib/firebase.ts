// Firebase configuration
import { initializeApp } from 'firebase/app'
import { getAuth, connectAuthEmulator } from 'firebase/auth'
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore'
import { getAnalytics } from 'firebase/analytics'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBU1FBQxJD6o58uaZe0WDTTgYnKYIfxXv0',
  authDomain: 'biblestem-f4af5.firebaseapp.com',
  projectId: 'biblestem-f4af5',
  storageBucket: 'biblestem-f4af5.firebasestorage.app',
  messagingSenderId: '449774070184',
  appId: '1:449774070184:web:3b8866cf2b30f39c06d59d',
  measurementId: 'G-J8MDFMWM21',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase services
export const auth = getAuth(app)
export const db = getFirestore(app)

// Initialize Analytics (only in production)
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null

// User interface for Firebase
export interface FirebaseUser {
  uid: string
  email: string | null
  displayName: string | null
  photoURL: string | null
  emailVerified: boolean
  createdAt?: string
}

export default app
