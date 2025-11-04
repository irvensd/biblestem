/**
 * Image Optimization Utility
 * Provides helper functions for optimizing image loading and display
 */

export interface ImageOptimizationOptions {
  width?: number
  height?: number
  quality?: number
  format?: 'webp' | 'jpg' | 'png' | 'avif'
  fit?: 'cover' | 'contain' | 'fill' | 'inside' | 'outside'
}

/**
 * Generate responsive srcset for images
 * Useful for responsive images that adapt to viewport size
 * @param baseUrl - Base image URL
 * @param widths - Array of widths in pixels
 * @param options - Optimization options
 * @returns srcset string
 */
export function generateSrcset(
  baseUrl: string,
  widths: number[] = [320, 640, 768, 1024, 1280, 1920],
  options: ImageOptimizationOptions = {}
): string {
  const { quality = 80, format } = options
  
  return widths
    .map((width) => {
      const optimizedUrl = optimizeImageUrl(baseUrl, { ...options, width, quality, format })
      return `${optimizedUrl} ${width}w`
    })
    .join(', ')
}

/**
 * Generate sizes attribute for responsive images
 * @param breakpoints - Object with breakpoint names and sizes
 * @returns sizes string
 */
export function generateSizes(
  breakpoints: Record<string, string> = {
    '(max-width: 640px)': '100vw',
    '(max-width: 1024px)': '50vw',
    default: '33vw'
  }
): string {
  const sizes: string[] = []
  
  Object.entries(breakpoints).forEach(([query, size]) => {
    if (query === 'default') {
      sizes.push(size)
    } else {
      sizes.push(`${query} ${size}`)
    }
  })
  
  return sizes.join(', ')
}

/**
 * Optimize image URL with query parameters
 * This assumes an image optimization service (like Cloudinary, ImageKit, or Supabase Storage)
 * @param url - Original image URL
 * @param options - Optimization options
 * @returns Optimized image URL
 */
export function optimizeImageUrl(
  url: string,
  options: ImageOptimizationOptions = {}
): string {
  if (!url) return ''
  
  // If it's a data URL or already optimized, return as-is
  if (url.startsWith('data:') || url.startsWith('blob:')) {
    return url
  }
  
  // Check if URL already has query parameters
  const urlObj = new URL(url, window.location.origin)
  
  const { width, height, quality = 80, format, fit = 'cover' } = options
  
  // Add optimization parameters
  // Adjust these based on your image optimization service
  if (width) {
    urlObj.searchParams.set('w', width.toString())
  }
  
  if (height) {
    urlObj.searchParams.set('h', height.toString())
  }
  
  if (quality !== undefined) {
    urlObj.searchParams.set('q', quality.toString())
  }
  
  if (format) {
    urlObj.searchParams.set('f', format)
  }
  
  if (fit) {
    urlObj.searchParams.set('fit', fit)
  }
  
  // For Supabase Storage, the format might be different
  // Example: /storage/v1/object/public/bucket/image.jpg?width=640&quality=80
  // Adjust based on your setup
  
  return urlObj.toString()
}

/**
 * Create a blur placeholder data URL
 * Generates a tiny, low-quality version of the image as a placeholder
 * @param url - Image URL
 * @param width - Placeholder width (default: 20px)
 * @param height - Placeholder height (default: 20px)
 * @returns Promise resolving to data URL
 */
export async function createBlurPlaceholder(
  url: string,
  width: number = 20,
  height: number = 20
): Promise<string> {
  try {
    // Create a small, low-quality version for blur placeholder
    const optimizedUrl = optimizeImageUrl(url, {
      width,
      height,
      quality: 10,
      fit: 'cover'
    })
    
    // Fetch the image and convert to base64
    const response = await fetch(optimizedUrl)
    const blob = await response.blob()
    
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onloadend = () => resolve(reader.result as string)
      reader.onerror = reject
      reader.readAsDataURL(blob)
    })
  } catch (error) {
    // Return a simple gray placeholder if loading fails
    return `data:image/svg+xml;base64,${btoa(
      `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#e5e7eb"/></svg>`
    )}`
  }
}

/**
 * Check if WebP is supported
 * @returns Promise resolving to boolean
 */
export function isWebPSupported(): Promise<boolean> {
  return new Promise((resolve) => {
    const webP = new Image()
    webP.onload = webP.onerror = () => {
      resolve(webP.height === 2)
    }
    webP.src =
      'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA'
  })
}

/**
 * Get optimal image format based on browser support
 * @returns Preferred format (webp, avif, or fallback)
 */
export async function getOptimalFormat(): Promise<'webp' | 'avif' | 'jpg'> {
  // Check for AVIF support (most modern, smallest file size)
  const avifSupported = await new Promise<boolean>((resolve) => {
    const avif = new Image()
    avif.onload = avif.onerror = () => {
      resolve(avif.height === 2)
    }
    avif.src =
      'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgABogQEAwgMg8f8D///8WfhwB8+ErK42A='
  })
  
  if (avifSupported) return 'avif'
  
  // Check for WebP support
  const webpSupported = await isWebPSupported()
  if (webpSupported) return 'webp'
  
  // Fallback to JPEG
  return 'jpg'
}

/**
 * Generate responsive image sources for <picture> element
 * @param baseUrl - Base image URL
 * @param options - Optimization options
 * @returns Array of source objects
 */
export async function generateResponsiveSources(
  baseUrl: string,
  options: ImageOptimizationOptions = {}
): Promise<Array<{ srcset: string; type?: string; sizes?: string; media?: string }>> {
  const sources: Array<{ srcset: string; type?: string; sizes?: string; media?: string }> = []
  
  // Get optimal format
  const format = await getOptimalFormat()
  
  // Generate different formats for different viewports
  const widths = [320, 640, 768, 1024, 1280, 1920]
  
  // Modern format (WebP or AVIF)
  if (format !== 'jpg') {
    sources.push({
      srcset: generateSrcset(baseUrl, widths, { ...options, format }),
      type: `image/${format}`,
      sizes: generateSizes()
    })
  }
  
  // Fallback to original format
  sources.push({
    srcset: generateSrcset(baseUrl, widths, { ...options, format: 'jpg' }),
    sizes: generateSizes()
  })
  
  return sources
}

/**
 * Preload critical images
 * @param urls - Array of image URLs to preload
 * @returns Promise resolving when all images are loaded
 */
export async function preloadImages(urls: string[]): Promise<void> {
  const promises = urls.map((url) => {
    return new Promise<void>((resolve, reject) => {
      const img = new Image()
      img.onload = () => resolve()
      img.onerror = () => reject(new Error(`Failed to preload: ${url}`))
      img.src = url
    })
  })
  
  await Promise.allSettled(promises)
}

/**
 * Get image dimensions without loading full image
 * @param url - Image URL
 * @returns Promise resolving to { width, height }
 */
export function getImageDimensions(url: string): Promise<{ width: number; height: number }> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => {
      resolve({ width: img.naturalWidth, height: img.naturalHeight })
    }
    img.onerror = reject
    img.src = url
  })
}

/**
 * Calculate optimal image size based on container
 * @param containerWidth - Container width in pixels
 * @param containerHeight - Container height in pixels
 * @param aspectRatio - Image aspect ratio (width/height)
 * @param devicePixelRatio - Device pixel ratio (default: window.devicePixelRatio or 2)
 * @returns Optimal width and height
 */
export function calculateOptimalSize(
  containerWidth: number,
  containerHeight: number,
  aspectRatio: number,
  devicePixelRatio: number = typeof window !== 'undefined' ? window.devicePixelRatio || 2 : 2
): { width: number; height: number } {
  const targetWidth = containerWidth * devicePixelRatio
  const targetHeight = containerHeight * devicePixelRatio
  
  let width: number
  let height: number
  
  if (targetWidth / aspectRatio <= targetHeight) {
    width = Math.ceil(targetWidth)
    height = Math.ceil(targetWidth / aspectRatio)
  } else {
    height = Math.ceil(targetHeight)
    width = Math.ceil(targetHeight * aspectRatio)
  }
  
  // Round to nearest 10 for optimization
  width = Math.ceil(width / 10) * 10
  height = Math.ceil(height / 10) * 10
  
  return { width, height }
}
