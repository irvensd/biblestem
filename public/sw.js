/**
 * Service Worker for BibleStem
 * Handles caching strategies to prevent stale data
 */

const CACHE_VERSION = 'v2.0.0'
const CACHE_NAME = `biblestem-${CACHE_VERSION}`

// Resources to cache immediately on install
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json'
]

// Max age for different resource types (in milliseconds)
const CACHE_MAX_AGE = {
  static: 7 * 24 * 60 * 60 * 1000, // 7 days for static assets
  api: 5 * 60 * 1000, // 5 minutes for API data
  images: 30 * 24 * 60 * 60 * 1000, // 30 days for images
}

/**
 * Install event - cache static assets
 */
self.addEventListener('install', (event) => {
  console.log('[ServiceWorker] Installing version:', CACHE_VERSION)
  
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[ServiceWorker] Caching static assets')
      return cache.addAll(STATIC_ASSETS)
    }).then(() => {
      // Force the waiting service worker to become the active service worker
      return self.skipWaiting()
    })
  )
})

/**
 * Activate event - clean up old caches
 */
self.addEventListener('activate', (event) => {
  console.log('[ServiceWorker] Activating version:', CACHE_VERSION)
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('[ServiceWorker] Deleting old cache:', cacheName)
            return caches.delete(cacheName)
          }
        })
      )
    }).then(() => {
      // Take control of all pages immediately
      return self.clients.claim()
    })
  )
})

/**
 * Determine cache strategy based on request
 */
function getCacheStrategy(request) {
  const url = new URL(request.url)
  
  // API requests - Network first, fallback to cache
  if (url.pathname.includes('/api/') || url.origin.includes('supabase')) {
    return 'network-first'
  }
  
  // Images - Cache first
  if (request.destination === 'image') {
    return 'cache-first'
  }
  
  // Static assets (JS, CSS) - Stale while revalidate
  if (request.destination === 'script' || request.destination === 'style') {
    return 'stale-while-revalidate'
  }
  
  // HTML - Network first
  if (request.destination === 'document') {
    return 'network-first'
  }
  
  // Default - Network first
  return 'network-first'
}

/**
 * Check if cached response is still fresh
 */
function isCacheFresh(cachedResponse, maxAge) {
  if (!cachedResponse) return false
  
  const cachedTime = new Date(cachedResponse.headers.get('sw-cached-time'))
  const now = new Date()
  
  return (now.getTime() - cachedTime.getTime()) < maxAge
}

/**
 * Network first strategy - try network, fallback to cache
 */
async function networkFirst(request, maxAge = CACHE_MAX_AGE.api) {
  try {
    const networkResponse = await fetch(request)
    
    // Only cache successful responses
    if (networkResponse && networkResponse.status === 200) {
      const cache = await caches.open(CACHE_NAME)
      // Clone the response and add timestamp header
      const responseToCache = networkResponse.clone()
      const headers = new Headers(responseToCache.headers)
      headers.append('sw-cached-time', new Date().toISOString())
      
      const cachedResponse = new Response(await responseToCache.blob(), {
        status: responseToCache.status,
        statusText: responseToCache.statusText,
        headers: headers
      })
      
      cache.put(request, cachedResponse)
    }
    
    return networkResponse
  } catch (error) {
    console.log('[ServiceWorker] Network failed, trying cache:', request.url)
    const cachedResponse = await caches.match(request)
    
    if (cachedResponse) {
      return cachedResponse
    }
    
    // Return offline page or error response
    return new Response('Offline', {
      status: 503,
      statusText: 'Service Unavailable'
    })
  }
}

/**
 * Cache first strategy - try cache, fallback to network
 */
async function cacheFirst(request, maxAge = CACHE_MAX_AGE.images) {
  const cachedResponse = await caches.match(request)
  
  // Check if cache is still fresh
  if (cachedResponse && isCacheFresh(cachedResponse, maxAge)) {
    return cachedResponse
  }
  
  try {
    const networkResponse = await fetch(request)
    
    if (networkResponse && networkResponse.status === 200) {
      const cache = await caches.open(CACHE_NAME)
      const headers = new Headers(networkResponse.headers)
      headers.append('sw-cached-time', new Date().toISOString())
      
      const responseToCache = new Response(await networkResponse.clone().blob(), {
        status: networkResponse.status,
        statusText: networkResponse.statusText,
        headers: headers
      })
      
      cache.put(request, responseToCache)
    }
    
    return networkResponse
  } catch (error) {
    // If network fails and we have stale cache, return it
    if (cachedResponse) {
      return cachedResponse
    }
    
    throw error
  }
}

/**
 * Stale while revalidate - return cache immediately, update in background
 */
async function staleWhileRevalidate(request, maxAge = CACHE_MAX_AGE.static) {
  const cachedResponse = await caches.match(request)
  
  // Fetch from network in background
  const fetchPromise = fetch(request).then((networkResponse) => {
    if (networkResponse && networkResponse.status === 200) {
      const cache = caches.open(CACHE_NAME).then((cache) => {
        const headers = new Headers(networkResponse.headers)
        headers.append('sw-cached-time', new Date().toISOString())
        
        const responseToCache = new Response(networkResponse.clone().blob(), {
          status: networkResponse.status,
          statusText: networkResponse.statusText,
          headers: headers
        })
        
        cache.put(request, responseToCache)
      })
    }
    return networkResponse
  })
  
  // Return cached version immediately if available
  return cachedResponse || fetchPromise
}

/**
 * Fetch event - handle requests with appropriate caching strategy
 */
self.addEventListener('fetch', (event) => {
  const { request } = event
  const strategy = getCacheStrategy(request)
  
  if (strategy === 'network-first') {
    event.respondWith(networkFirst(request))
  } else if (strategy === 'cache-first') {
    event.respondWith(cacheFirst(request))
  } else if (strategy === 'stale-while-revalidate') {
    event.respondWith(staleWhileRevalidate(request))
  } else {
    event.respondWith(fetch(request))
  }
})

/**
 * Message event - handle messages from clients
 */
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }
  
  if (event.data && event.data.type === 'CLEAR_CACHE') {
    event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => caches.delete(cacheName))
        )
      }).then(() => {
        return self.clients.matchAll()
      }).then((clients) => {
        clients.forEach((client) => client.postMessage({ type: 'CACHE_CLEARED' }))
      })
    )
  }
})
