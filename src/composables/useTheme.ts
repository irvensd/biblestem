import { ref, watch } from 'vue'

export type Theme = 'light' | 'dark' | 'system'

// Global state - shared across all components
const theme = ref<Theme>('system')
const isDarkMode = ref(false)

// Initialize theme on module load
function initTheme() {
  // Load saved theme preference
  const savedTheme = localStorage.getItem('biblestem_theme') as Theme | null
  
  if (savedTheme) {
    theme.value = savedTheme
  } else {
    // Detect system preference
    theme.value = 'system'
  }
  
  applyTheme()
  
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

// Set theme
function setTheme(newTheme: Theme) {
  theme.value = newTheme
  localStorage.setItem('biblestem_theme', newTheme)
  applyTheme()
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
  return {
    theme,
    isDarkMode,
    setTheme,
    toggleTheme,
    initTheme,
    applyTheme
  }
}

