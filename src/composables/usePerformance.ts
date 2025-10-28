import { ref, onMounted, onUnmounted, nextTick } from 'vue'

export interface LazyLoadOptions {
  root?: Element | null
  rootMargin?: string
  threshold?: number | number[]
  once?: boolean
}

export interface VirtualScrollOptions {
  itemHeight: number
  containerHeight: number
  overscan?: number
}

export function useLazyLoading(options: LazyLoadOptions = {}) {
  const isIntersecting = ref(false)
  const isLoaded = ref(false)
  const element = ref<HTMLElement | null>(null)
  
  const defaultOptions: LazyLoadOptions = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1,
    once: true,
    ...options
  }
  
  let observer: IntersectionObserver | null = null
  
  const setupObserver = () => {
    if (typeof window === 'undefined' || !element.value) return
    
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isIntersecting.value = entry.isIntersecting
          
          if (entry.isIntersecting && !isLoaded.value) {
            isLoaded.value = true
            
            if (defaultOptions.once && observer) {
              observer.disconnect()
            }
          }
        })
      },
      {
        root: defaultOptions.root,
        rootMargin: defaultOptions.rootMargin,
        threshold: defaultOptions.threshold
      }
    )
    
    observer.observe(element.value)
  }
  
  const cleanup = () => {
    if (observer) {
      observer.disconnect()
      observer = null
    }
  }
  
  onMounted(() => {
    nextTick(() => {
      setupObserver()
    })
  })
  
  onUnmounted(() => {
    cleanup()
  })
  
  return {
    element,
    isIntersecting,
    isLoaded,
    setupObserver,
    cleanup
  }
}

export function useVirtualScrolling<T>(
  items: T[],
  options: VirtualScrollOptions
) {
  const scrollTop = ref(0)
  const containerRef = ref<HTMLElement | null>(null)
  
  const { itemHeight, containerHeight, overscan = 5 } = options
  
  const visibleItems = ref<T[]>([])
  const visibleStartIndex = ref(0)
  const visibleEndIndex = ref(0)
  const totalHeight = ref(0)
  const offsetY = ref(0)
  
  const updateVisibleItems = () => {
    const startIndex = Math.max(0, Math.floor(scrollTop.value / itemHeight) - overscan)
    const endIndex = Math.min(
      items.length - 1,
      Math.ceil((scrollTop.value + containerHeight) / itemHeight) + overscan
    )
    
    visibleStartIndex.value = startIndex
    visibleEndIndex.value = endIndex
    visibleItems.value = items.slice(startIndex, endIndex + 1)
    
    totalHeight.value = items.length * itemHeight
    offsetY.value = startIndex * itemHeight
  }
  
  const handleScroll = (event: Event) => {
    const target = event.target as HTMLElement
    scrollTop.value = target.scrollTop
    updateVisibleItems()
  }
  
  onMounted(() => {
    updateVisibleItems()
    
    if (containerRef.value) {
      containerRef.value.addEventListener('scroll', handleScroll, { passive: true })
    }
  })
  
  onUnmounted(() => {
    if (containerRef.value) {
      containerRef.value.removeEventListener('scroll', handleScroll)
    }
  })
  
  return {
    containerRef,
    visibleItems,
    visibleStartIndex,
    visibleEndIndex,
    totalHeight,
    offsetY,
    updateVisibleItems
  }
}

export function useImagePreloading() {
  const loadedImages = ref<Set<string>>(new Set())
  const loadingImages = ref<Set<string>>(new Set())
  const failedImages = ref<Set<string>>(new Set())
  
  const preloadImage = (src: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      if (loadedImages.value.has(src)) {
        resolve()
        return
      }
      
      if (loadingImages.value.has(src)) {
        // Wait for existing load to complete
        const checkLoaded = () => {
          if (loadedImages.value.has(src)) {
            resolve()
          } else if (failedImages.value.has(src)) {
            reject(new Error(`Failed to load image: ${src}`))
          } else {
            setTimeout(checkLoaded, 100)
          }
        }
        checkLoaded()
        return
      }
      
      loadingImages.value.add(src)
      
      const img = new Image()
      img.onload = () => {
        loadedImages.value.add(src)
        loadingImages.value.delete(src)
        resolve()
      }
      img.onerror = () => {
        failedImages.value.add(src)
        loadingImages.value.delete(src)
        reject(new Error(`Failed to load image: ${src}`))
      }
      img.src = src
    })
  }
  
  const preloadImages = async (srcs: string[]): Promise<void> => {
    const promises = srcs.map(src => preloadImage(src))
    await Promise.allSettled(promises)
  }
  
  const isImageLoaded = (src: string): boolean => {
    return loadedImages.value.has(src)
  }
  
  const isImageLoading = (src: string): boolean => {
    return loadingImages.value.has(src)
  }
  
  const isImageFailed = (src: string): boolean => {
    return failedImages.value.has(src)
  }
  
  return {
    loadedImages,
    loadingImages,
    failedImages,
    preloadImage,
    preloadImages,
    isImageLoaded,
    isImageLoading,
    isImageFailed
  }
}

export function useCodeSplitting() {
  const loadedModules = ref<Set<string>>(new Set())
  const loadingModules = ref<Set<string>>(new Set())
  const failedModules = ref<Set<string>>(new Set())
  
  const loadModule = async <T>(modulePath: string): Promise<T> => {
    if (loadedModules.value.has(modulePath)) {
      return (window as any).__loadedModules?.[modulePath] as T
    }
    
    if (loadingModules.value.has(modulePath)) {
      // Wait for existing load to complete
      return new Promise((resolve, reject) => {
        const checkLoaded = () => {
          if (loadedModules.value.has(modulePath)) {
            resolve((window as any).__loadedModules?.[modulePath] as T)
          } else if (failedModules.value.has(modulePath)) {
            reject(new Error(`Failed to load module: ${modulePath}`))
          } else {
            setTimeout(checkLoaded, 100)
          }
        }
        checkLoaded()
      })
    }
    
    loadingModules.value.add(modulePath)
    
    try {
      const module = await import(/* @vite-ignore */ modulePath)
      loadedModules.value.add(modulePath)
      loadingModules.value.delete(modulePath)
      
      // Cache the module
      if (!(window as any).__loadedModules) {
        ;(window as any).__loadedModules = {}
      }
      ;(window as any).__loadedModules[modulePath] = module
      
      return module as T
    } catch (error) {
      failedModules.value.add(modulePath)
      loadingModules.value.delete(modulePath)
      throw error
    }
  }
  
  const preloadModule = (modulePath: string): Promise<void> => {
    return loadModule(modulePath).then(() => {})
  }
  
  const isModuleLoaded = (modulePath: string): boolean => {
    return loadedModules.value.has(modulePath)
  }
  
  const isModuleLoading = (modulePath: string): boolean => {
    return loadingModules.value.has(modulePath)
  }
  
  const isModuleFailed = (modulePath: string): boolean => {
    return failedModules.value.has(modulePath)
  }
  
  return {
    loadedModules,
    loadingModules,
    failedModules,
    loadModule,
    preloadModule,
    isModuleLoaded,
    isModuleLoading,
    isModuleFailed
  }
}

export function usePerformanceMonitoring() {
  const metrics = ref({
    pageLoadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    firstInputDelay: 0,
    cumulativeLayoutShift: 0,
    timeToInteractive: 0
  })
  
  const measurePerformance = () => {
    if (typeof window === 'undefined' || !('performance' in window)) return
    
    // Page load time
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
    if (navigation) {
      metrics.value.pageLoadTime = navigation.loadEventEnd - navigation.fetchStart
    }
    
    // Web Vitals
    if ('PerformanceObserver' in window) {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const fcp = entries.find(entry => entry.name === 'first-contentful-paint')
        if (fcp) {
          metrics.value.firstContentfulPaint = fcp.startTime
        }
      })
      fcpObserver.observe({ entryTypes: ['paint'] })
      
      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1]
        if (lastEntry) {
          metrics.value.largestContentfulPaint = lastEntry.startTime
        }
      })
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })
      
      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const firstInput = entries[0] as any
        if (firstInput) {
          metrics.value.firstInputDelay = firstInput.processingStart - firstInput.startTime
        }
      })
      fidObserver.observe({ entryTypes: ['first-input'] })
      
      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value
          }
        }
        metrics.value.cumulativeLayoutShift = clsValue
      })
      clsObserver.observe({ entryTypes: ['layout-shift'] })
    }
  }
  
  const getPerformanceScore = () => {
    const scores = {
      fcp: metrics.value.firstContentfulPaint < 1800 ? 100 : Math.max(0, 100 - (metrics.value.firstContentfulPaint - 1800) / 10),
      lcp: metrics.value.largestContentfulPaint < 2500 ? 100 : Math.max(0, 100 - (metrics.value.largestContentfulPaint - 2500) / 10),
      fid: metrics.value.firstInputDelay < 100 ? 100 : Math.max(0, 100 - (metrics.value.firstInputDelay - 100) / 2),
      cls: metrics.value.cumulativeLayoutShift < 0.1 ? 100 : Math.max(0, 100 - metrics.value.cumulativeLayoutShift * 1000)
    }
    
    return {
      overall: Math.round((scores.fcp + scores.lcp + scores.fid + scores.cls) / 4),
      fcp: Math.round(scores.fcp),
      lcp: Math.round(scores.lcp),
      fid: Math.round(scores.fid),
      cls: Math.round(scores.cls)
    }
  }
  
  onMounted(() => {
    measurePerformance()
  })
  
  return {
    metrics,
    measurePerformance,
    getPerformanceScore
  }
}

export function useResourceHints() {
  const preloadedResources = ref<Set<string>>(new Set())
  
  const preloadResource = (href: string, as: string, type?: string) => {
    if (preloadedResources.value.has(href)) return
    
    const link = document.createElement('link')
    link.rel = 'preload'
    link.href = href
    link.as = as
    
    if (type) {
      link.type = type
    }
    
    document.head.appendChild(link)
    preloadedResources.value.add(href)
  }
  
  const prefetchResource = (href: string) => {
    if (preloadedResources.value.has(href)) return
    
    const link = document.createElement('link')
    link.rel = 'prefetch'
    link.href = href
    
    document.head.appendChild(link)
    preloadedResources.value.add(href)
  }
  
  const preconnectDomain = (domain: string) => {
    const link = document.createElement('link')
    link.rel = 'preconnect'
    link.href = domain
    
    document.head.appendChild(link)
  }
  
  const dnsPrefetchDomain = (domain: string) => {
    const link = document.createElement('link')
    link.rel = 'dns-prefetch'
    link.href = domain
    
    document.head.appendChild(link)
  }
  
  return {
    preloadedResources,
    preloadResource,
    prefetchResource,
    preconnectDomain,
    dnsPrefetchDomain
  }
}
