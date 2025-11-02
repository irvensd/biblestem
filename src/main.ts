import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { initSupabase } from './lib/supabase'
import App from './App.vue'
import router from './router'

// Initialize theme from localStorage or system preference
const savedTheme = localStorage.getItem('biblestem_theme')
if (savedTheme === 'light' || savedTheme === 'dark') {
  document.documentElement.classList.add(savedTheme)
  document.documentElement.classList.remove(savedTheme === 'dark' ? 'light' : 'dark')
} else {
  // System preference or default
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  if (systemPrefersDark) {
    document.documentElement.classList.add('dark')
    document.documentElement.classList.remove('light')
  } else {
    document.documentElement.classList.add('light')
    document.documentElement.classList.remove('dark')
  }
}

// Initialize Supabase
initSupabase()

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

app.mount('#app')

// Register enhanced service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      const registration = await navigator.serviceWorker.register('/sw-enhanced.js', {
        scope: '/'
      })
      
      console.log('Enhanced Service Worker registered successfully:', registration.scope)
      
      // Handle updates
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // New content is available, notify user
              if (confirm('New version available! Reload to update?')) {
                window.location.reload()
              }
            }
          })
        }
      })
      
    } catch (error) {
      console.error('Service Worker registration failed:', error)
    }
  })
}
