import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { initSupabase } from './lib/supabase'
import { initSentry } from './services/monitoring'
import { analytics } from './services/analytics'
import App from './App.vue'
import router from './router'

// Initialize Supabase
initSupabase()

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

// Initialize monitoring and analytics (must be after router)
initSentry(app, router)
analytics.init()

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
