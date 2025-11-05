import { ref, watch, onMounted } from 'vue'

export type Theme = 'light' | 'dark' | 'system'

// Global state - shared across all components
const theme = ref<Theme>('system')
const isDarkMode = ref(false)
const isInitialized = ref(false)

/**
 * Initialize theme on module load
 * Enhanced with proper error handling and persistence check
 */
function initTheme() {
  // Prevent double initialization
  if (isInitialized.value) {
    return
  }
  
  try {
    // Load saved theme preference from localStorage
    const savedTheme = localStorage.getItem('biblestem_theme') as Theme | null
    
    if (savedTheme && ['light', 'dark', 'system'].includes(savedTheme)) {
      theme.value = savedTheme
    } else {
      // Detect system preference
      theme.value = 'system'
      // Save default preference
      localStorage.setItem('biblestem_theme', 'system')
    }
    
    // Apply theme immediately
    applyTheme()
    
    // Mark as initialized
    isInitialized.value = true
    
    // Watch for system theme changes
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      
      const handleChange = (e: MediaQueryListEvent) => {
        if (theme.value === 'system') {
          isDarkMode.value = e.matches
          applyTheme()
        }
      }
      
      mediaQuery.addEventListener('change', handleChange)
    }
  } catch (error) {
    console.error('Failed to initialize theme:', error)
    // Fallback to system theme
    theme.value = 'system'
    applyTheme()
    isInitialized.value = true
  }
}

// Apply the current theme
function applyTheme() {
  const root = document.documentElement
  
  if (theme.value === 'system') {
    // Detect system preference
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    isDarkMode.value = systemPrefersDark
  } else {
    isDarkMode.value = theme.value === 'dark'
  }
  
  // Apply to DOM
  if (isDarkMode.value) {
    root.classList.add('dark')
    root.classList.remove('light')
  } else {
    root.classList.remove('dark')
    root.classList.add('light')
  }
}

/**
 * Set theme preference
 * Persists to localStorage and applies immediately
 */
function setTheme(newTheme: Theme) {
  try {
    theme.value = newTheme
    localStorage.setItem('biblestem_theme', newTheme)
    applyTheme()
  } catch (error) {
    console.error('Failed to set theme:', error)
  }
}

// Toggle between light and dark
function toggleTheme() {
  const newTheme = isDarkMode.value ? 'light' : 'dark'
  setTheme(newTheme)
}

// Initialize on module load
if (typeof window !== 'undefined') {
  initTheme()
}

export function useTheme() {
  // Ensure theme is initialized when composable is used
  if (!isInitialized.value) {
    initTheme()
  }
  
  return {
    theme,
    isDarkMode,
    isInitialized,
    setTheme,
    toggleTheme,
    initTheme,
    applyTheme
  }
}

