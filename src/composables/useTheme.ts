import { ref, onMounted, watch } from 'vue'

export type Theme = 'light' | 'dark' | 'system'

const theme = ref<Theme>('system')
const isDarkMode = ref(false)

export function useTheme() {
  // Initialize theme on mount
  const initTheme = () => {
    // Load saved theme preference
    const savedTheme = localStorage.getItem('biblestem_theme') as Theme | null
    
    if (savedTheme) {
      theme.value = savedTheme
    } else {
      // Detect system preference
      theme.value = 'system'
    }
    
    applyTheme()
  }

  // Apply the current theme
  const applyTheme = () => {
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
  const setTheme = (newTheme: Theme) => {
    theme.value = newTheme
    localStorage.setItem('biblestem_theme', newTheme)
    applyTheme()
  }

  // Toggle between light and dark
  const toggleTheme = () => {
    const newTheme = isDarkMode.value ? 'light' : 'dark'
    setTheme(newTheme)
  }

  // Watch for system theme changes
  const watchSystemTheme = () => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      
      const handleChange = (e: MediaQueryListEvent) => {
        if (theme.value === 'system') {
          isDarkMode.value = e.matches
          applyTheme()
        }
      }
      
      mediaQuery.addEventListener('change', handleChange)
      
      return () => {
        mediaQuery.removeEventListener('change', handleChange)
      }
    }
  }

  onMounted(() => {
    initTheme()
    watchSystemTheme()
  })

  return {
    theme,
    isDarkMode,
    setTheme,
    toggleTheme,
    initTheme,
    applyTheme
  }
}

