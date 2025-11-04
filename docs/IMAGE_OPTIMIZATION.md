# Image Optimization Guide

This guide covers image optimization strategies and best practices for the BibleStem app.

## Overview

Image optimization is crucial for:
- **Performance**: Faster page loads, better user experience
- **Bandwidth**: Reduced data usage, especially on mobile
- **SEO**: Better Core Web Vitals scores
- **User Experience**: Smooth loading with placeholders

## Components

### LazyImage Component

The `LazyImage` component provides:
- ✅ Lazy loading with Intersection Observer
- ✅ Responsive images with srcset
- ✅ Blur/skeleton/spinner placeholders
- ✅ Error handling with retry
- ✅ Fade-in animations
- ✅ Support for modern formats (WebP, AVIF)

### Usage

```vue
<template>
  <!-- Basic usage -->
  <LazyImage
    src="/path/to/image.jpg"
    alt="Description"
    width="800"
    height="600"
    aspect-ratio="16/9"
  />

  <!-- With lazy loading (default) -->
  <LazyImage
    src="/path/to/image.jpg"
    alt="Description"
    lazy
    show-blur-placeholder
  />

  <!-- Critical image (above the fold) -->
  <LazyImage
    src="/hero-image.jpg"
    alt="Hero"
    :lazy="false"
    fetchpriority="high"
    show-skeleton-placeholder
  />

  <!-- Responsive with srcset -->
  <LazyImage
    src="/path/to/image.jpg"
    alt="Description"
    :srcset="srcsetString"
    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  />
</template>
```

### Image Optimization Utilities

Located in `src/utils/imageOptimization.ts`:

#### Generate Responsive Srcset

```typescript
import { generateSrcset, generateSizes } from '@/utils/imageOptimization'

const srcset = generateSrcset('/image.jpg', [320, 640, 768, 1024, 1280])
const sizes = generateSizes({
  '(max-width: 640px)': '100vw',
  '(max-width: 1024px)': '50vw',
  default: '33vw'
})
```

#### Optimize Image URLs

```typescript
import { optimizeImageUrl } from '@/utils/imageOptimization'

// Add query parameters for image optimization service
const optimized = optimizeImageUrl('/image.jpg', {
  width: 800,
  height: 600,
  quality: 80,
  format: 'webp'
})
```

#### Create Blur Placeholders

```typescript
import { createBlurPlaceholder } from '@/utils/imageOptimization'

const blurDataUrl = await createBlurPlaceholder('/image.jpg', 20, 20)
// Use as blurSrc prop in LazyImage
```

## Best Practices

### 1. Use Appropriate Image Formats

- **AVIF**: Best compression, modern browsers
- **WebP**: Good compression, wide support
- **JPEG**: Fallback, universal support
- **PNG**: Only for images requiring transparency

### 2. Lazy Load Below-the-Fold Images

```vue
<!-- ✅ Good: Lazy load images below the fold -->
<LazyImage
  src="/below-fold.jpg"
  alt="Description"
  lazy
/>

<!-- ✅ Good: Don't lazy load above-the-fold images -->
<LazyImage
  src="/hero.jpg"
  alt="Hero"
  :lazy="false"
  fetchpriority="high"
/>
```

### 3. Provide Appropriate Dimensions

Always specify width and height or aspect ratio:

```vue
<!-- ✅ Good: Prevents layout shift -->
<LazyImage
  src="/image.jpg"
  alt="Description"
  width="800"
  height="600"
/>

<!-- ✅ Good: Using aspect ratio -->
<LazyImage
  src="/image.jpg"
  alt="Description"
  aspect-ratio="16/9"
/>
```

### 4. Use Responsive Images

For images that scale with viewport:

```vue
<LazyImage
  src="/image.jpg"
  alt="Description"
  :srcset="generateSrcset('/image.jpg')"
  :sizes="generateSizes()"
/>
```

### 5. Optimize Image Sizes

- **Hero images**: Max 1920px width
- **Card images**: Max 800px width
- **Thumbnails**: Max 400px width
- **Avatars**: Max 200px width

### 6. Use Placeholders

Provide visual feedback while images load:

```vue
<!-- Blur placeholder (recommended for photos) -->
<LazyImage
  src="/photo.jpg"
  alt="Photo"
  blur-src="/photo-blur.jpg"
  show-blur-placeholder
/>

<!-- Skeleton placeholder (for structured layouts) -->
<LazyImage
  src="/image.jpg"
  alt="Image"
  show-skeleton-placeholder
/>
```

### 7. Set Appropriate Fetch Priority

```vue
<!-- Critical: Above the fold, hero images -->
<LazyImage
  src="/hero.jpg"
  fetchpriority="high"
/>

<!-- Normal: Regular images -->
<LazyImage
  src="/image.jpg"
  fetchpriority="auto"
/>

<!-- Low: Below the fold, decorative images -->
<LazyImage
  src="/decorative.jpg"
  fetchpriority="low"
/>
```

## Image Optimization Service Setup

### Supabase Storage

Supabase Storage supports image transformations via URL parameters:

```typescript
// Example: Resize and optimize
const optimizedUrl = `/storage/v1/object/public/bucket/image.jpg?width=800&quality=80`
```

Update `optimizeImageUrl` function in `src/utils/imageOptimization.ts` to match your Supabase setup.

### Cloudinary (Alternative)

```typescript
const optimizedUrl = `https://res.cloudinary.com/demo/image/upload/w_800,q_80,f_webp/image.jpg`
```

### ImageKit (Alternative)

```typescript
const optimizedUrl = `https://ik.imagekit.io/demo/image.jpg?tr=w-800,q-80,f-webp`
```

## Checklist

When adding new images:

- [ ] Use `LazyImage` component instead of `<img>`
- [ ] Specify width/height or aspect-ratio
- [ ] Use lazy loading for below-the-fold images
- [ ] Provide appropriate fetch priority
- [ ] Use responsive srcset for scaling images
- [ ] Add placeholder (blur or skeleton)
- [ ] Optimize image file size before upload
- [ ] Use modern formats (WebP/AVIF) when possible
- [ ] Test on slow connections
- [ ] Verify no layout shift (CLS)

## Migration Guide

### Replacing Regular `<img>` Tags

**Before:**
```vue
<img src="/image.jpg" alt="Description" />
```

**After:**
```vue
<LazyImage
  src="/image.jpg"
  alt="Description"
  width="800"
  height="600"
/>
```

### Replacing Background Images

For background images, consider:
1. Using `<picture>` element with multiple sources
2. CSS `background-image` with media queries
3. Or convert to `<LazyImage>` with absolute positioning

## Performance Monitoring

Monitor image performance using:
- Chrome DevTools Network tab
- Lighthouse audits
- WebPageTest
- Core Web Vitals (LCP, CLS)

Target metrics:
- **LCP (Largest Contentful Paint)**: < 2.5s
- **CLS (Cumulative Layout Shift)**: < 0.1
- **Image load time**: < 1s on 3G

## Resources

- [Web.dev Image Optimization](https://web.dev/fast/#optimize-your-images)
- [MDN Responsive Images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
- [Cloudinary Image Transformation](https://cloudinary.com/documentation/image_transformations)
- [Supabase Storage](https://supabase.com/docs/guides/storage)
