const CACHE_NAME = 'biblestem-v1.0.0'
const OFFLINE_URL = '/offline.html'

// Resources to cache for offline use
const STATIC_CACHE_URLS = [
  '/',
  '/offline.html',
  '/manifest.json',
  // Core app shell resources will be added by build process
]

// API endpoints that can be cached
const API_CACHE_PATTERNS = [
  // Add API patterns here if needed
]

// Install event - cache static resources
self.addEventListener('install', (event) => {
  console.log('[ServiceWorker] Install')

  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME)
      console.log('[ServiceWorker] Caching app shell')
      await cache.addAll(STATIC_CACHE_URLS)
    })(),
  )

  // Force the waiting service worker to become the active service worker
  self.skipWaiting()
})

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[ServiceWorker] Activate')

  event.waitUntil(
    (async () => {
      // Clean up old caches
      const cacheNames = await caches.keys()
      await Promise.all(
        cacheNames
          .filter((cacheName) => cacheName !== CACHE_NAME)
          .map((cacheName) => {
            console.log('[ServiceWorker] Deleting old cache:', cacheName)
            return caches.delete(cacheName)
          }),
      )

      // Take control of all pages
      await self.clients.claim()
    })(),
  )
})

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return

  // Skip chrome-extension requests
  if (event.request.url.startsWith('chrome-extension://')) return

  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) return

  event.respondWith(
    (async () => {
      try {
        // Try cache first
        const cachedResponse = await caches.match(event.request)
        if (cachedResponse) {
          console.log('[ServiceWorker] Serving from cache:', event.request.url)
          return cachedResponse
        }

        // Try network
        const networkResponse = await fetch(event.request)

        // Cache successful responses
        if (networkResponse.status === 200) {
          const cache = await caches.open(CACHE_NAME)
          console.log('[ServiceWorker] Caching new resource:', event.request.url)
          cache.put(event.request, networkResponse.clone())
        }

        return networkResponse
      } catch (error) {
        console.log('[ServiceWorker] Network failed, serving offline page')

        // For navigation requests, serve offline page
        if (event.request.mode === 'navigate') {
          return caches.match(OFFLINE_URL)
        }

        // For other requests, you might want to return a fallback
        throw error
      }
    })(),
  )
})

// Background sync for when connectivity is restored
self.addEventListener('sync', (event) => {
  console.log('[ServiceWorker] Background sync:', event.tag)

  if (event.tag === 'sync-notes') {
    event.waitUntil(syncNotes())
  }

  if (event.tag === 'sync-progress') {
    event.waitUntil(syncProgress())
  }
})

// Push notifications (for future use)
self.addEventListener('push', (event) => {
  console.log('[ServiceWorker] Push received:', event)

  const options = {
    body: "Don't forget your daily Bible study!",
    icon: '/icons/icon-192x192.png',
    badge: '/icons/icon-72x72.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1,
    },
    actions: [
      {
        action: 'open-study',
        title: 'Start Study',
        icon: '/icons/action-study.png',
      },
      {
        action: 'close',
        title: 'Dismiss',
        icon: '/icons/action-close.png',
      },
    ],
  }

  event.waitUntil(self.registration.showNotification('BibleStem Reminder', options))
})

// Notification click handling
self.addEventListener('notificationclick', (event) => {
  console.log('[ServiceWorker] Notification click received.')

  event.notification.close()

  if (event.action === 'open-study') {
    event.waitUntil(clients.openWindow('/dashboard'))
  }
})

// Helper functions for background sync
async function syncNotes() {
  console.log('[ServiceWorker] Syncing notes...')
  // Implementation would sync offline notes when connectivity is restored
  // This would integrate with your notes store
}

async function syncProgress() {
  console.log('[ServiceWorker] Syncing progress...')
  // Implementation would sync study progress when connectivity is restored
  // This would integrate with your progress store
}

// Message handling from main app
self.addEventListener('message', (event) => {
  console.log('[ServiceWorker] Message received:', event.data)

  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }

  if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({
      type: 'VERSION',
      version: CACHE_NAME,
    })
  }
})
