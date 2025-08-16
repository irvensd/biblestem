import { ref, onMounted } from 'vue'

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[]
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed'
    platform: string
  }>
  prompt(): Promise<void>
}

export function usePWA() {
  const isInstallable = ref(false)
  const isInstalled = ref(false)
  const isOffline = ref(!navigator.onLine)
  const updateAvailable = ref(false)
  const showInstallPrompt = ref(false)
  
  let deferredPrompt: BeforeInstallPromptEvent | null = null
  let registration: ServiceWorkerRegistration | null = null

  // Check if app is already installed
  const checkIfInstalled = () => {
    if (window.matchMedia('(display-mode: standalone)').matches) {
      isInstalled.value = true
    }
    
    // Check for iOS Safari standalone mode
    if ((window.navigator as any).standalone === true) {
      isInstalled.value = true
    }
  }

  // Register service worker
  const registerServiceWorker = async () => {
    if ('serviceWorker' in navigator) {
      try {
        registration = await navigator.serviceWorker.register('/sw.js', {
          scope: '/'
        })
        
        console.log('Service Worker registered successfully:', registration)
        
        // Check for updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration!.installing
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                updateAvailable.value = true
                console.log('New content is available; please refresh.')
              }
            })
          }
        })
        
        // Listen for controlling service worker
        navigator.serviceWorker.addEventListener('controllerchange', () => {
          window.location.reload()
        })
        
      } catch (error) {
        console.error('Service Worker registration failed:', error)
      }
    }
  }

  // Update service worker
  const updateServiceWorker = () => {
    if (registration && registration.waiting) {
      registration.waiting.postMessage({ type: 'SKIP_WAITING' })
    }
  }

  // Install PWA
  const installPWA = async () => {
    if (deferredPrompt) {
      try {
        await deferredPrompt.prompt()
        const { outcome } = await deferredPrompt.userChoice
        
        if (outcome === 'accepted') {
          isInstalled.value = true
          showInstallPrompt.value = false
          console.log('PWA installed successfully')
        }
        
        deferredPrompt = null
        isInstallable.value = false
      } catch (error) {
        console.error('Error installing PWA:', error)
      }
    }
  }

  // Share content (Web Share API)
  const shareContent = async (data: { title?: string; text?: string; url?: string }) => {
    if (navigator.share) {
      try {
        await navigator.share(data)
        return true
      } catch (error) {
        console.error('Error sharing:', error)
        return false
      }
    }
    
    // Fallback to clipboard
    if (navigator.clipboard && data.url) {
      try {
        await navigator.clipboard.writeText(data.url)
        return true
      } catch (error) {
        console.error('Error copying to clipboard:', error)
        return false
      }
    }
    
    return false
  }

  // Request notification permission
  const requestNotificationPermission = async () => {
    if ('Notification' in window) {
      const permission = await Notification.requestPermission()
      return permission === 'granted'
    }
    return false
  }

  // Show notification
  const showNotification = (title: string, options?: NotificationOptions) => {
    if (Notification.permission === 'granted') {
      if (registration) {
        return registration.showNotification(title, {
          icon: '/icons/icon-192x192.png',
          badge: '/icons/icon-72x72.png',
          ...options
        })
      } else {
        return new Notification(title, {
          icon: '/icons/icon-192x192.png',
          ...options
        })
      }
    }
  }

  // Schedule background sync
  const scheduleBackgroundSync = (tag: string) => {
    if (registration && 'sync' in registration) {
      return (registration as any).sync.register(tag)
    }
  }

  // Get app version
  const getAppVersion = async () => {
    if (registration && registration.active) {
      return new Promise((resolve) => {
        const messageChannel = new MessageChannel()
        messageChannel.port1.onmessage = (event) => {
          resolve(event.data.version)
        }
        registration.active!.postMessage({ type: 'GET_VERSION' }, [messageChannel.port2])
      })
    }
    return null
  }

  // Setup event listeners
  const setupEventListeners = () => {
    // Install prompt
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault()
      deferredPrompt = e as BeforeInstallPromptEvent
      isInstallable.value = true
      
      // Show install prompt after a delay
      setTimeout(() => {
        if (!isInstalled.value && isInstallable.value) {
          showInstallPrompt.value = true
        }
      }, 30000) // Show after 30 seconds
    })

    // App installed
    window.addEventListener('appinstalled', () => {
      isInstalled.value = true
      isInstallable.value = false
      showInstallPrompt.value = false
      console.log('PWA was installed')
    })

    // Online/offline status
    window.addEventListener('online', () => {
      isOffline.value = false
      console.log('App is online')
    })

    window.addEventListener('offline', () => {
      isOffline.value = true
      console.log('App is offline')
    })

    // Visibility change (for background sync)
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden && isOffline.value) {
        // App became visible and we're offline, try to sync
        scheduleBackgroundSync('sync-on-focus')
      }
    })
  }

  // Initialize PWA
  const initializePWA = () => {
    checkIfInstalled()
    registerServiceWorker()
    setupEventListeners()
  }

  onMounted(() => {
    initializePWA()
  })

  return {
    // State
    isInstallable,
    isInstalled,
    isOffline,
    updateAvailable,
    showInstallPrompt,
    
    // Methods
    installPWA,
    updateServiceWorker,
    shareContent,
    requestNotificationPermission,
    showNotification,
    scheduleBackgroundSync,
    getAppVersion,
    
    // Utils
    initializePWA
  }
}
