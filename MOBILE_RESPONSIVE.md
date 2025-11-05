# Mobile & Responsive Implementation Guide

## Overview

BibleStem implements comprehensive mobile and responsive features to ensure optimal user experience across all devices.

## ✅ Implemented Features

### 1. Touch Gestures

Comprehensive touch gesture support across all components.

**Implementation**: `src/composables/useEnhancedGestures.ts`

```typescript
import { useEnhancedGestures } from '@/composables/useEnhancedGestures'

const { isDragging } = useEnhancedGestures(elementRef.value, {
  enableSwipe: true,
  onSwipeLeft: () => navigateNext(),
  onSwipeRight: () => navigatePrevious(),
  onSwipeDown: () => closeModal(),
  enablePullToRefresh: true,
  onPullToRefresh: async () => {
    await refreshData()
  },
  haptic: true // Enable haptic feedback
})
```

**Supported Gestures**:
- ✅ Swipe (left, right, up, down)
- ✅ Pull-to-refresh
- ✅ Long press
- ✅ Double tap
- ✅ Pinch zoom
- ✅ Tap with ripple effect

### 2. Mobile Navigation Fixed

Fixed content overlap issues with bottom navigation bar.

**Changes**:
```vue
<!-- Main content has safe area padding -->
<main class="pb-20 sm:pb-0 safe-area-bottom">
  <!-- Content -->
</main>

<!-- Mobile nav respects safe area -->
<nav class="safe-area-bottom">
  <!-- Navigation -->
</nav>
```

**Features**:
- Safe area insets for notched devices
- No content overlap with bottom nav
- Responsive height (16px mobile, 20px tablet)
- Proper z-index layering

### 3. Form Input Sizes

All form inputs are mobile-optimized to prevent iOS zoom and ensure proper touch targets.

**Implementation**: `src/assets/base.css`

```css
@media screen and (max-width: 768px) {
  input, textarea, select {
    font-size: 16px !important; /* Prevents iOS zoom */
    min-height: 44px; /* Touch target */
    padding: 12px 16px;
  }
  
  button {
    min-height: 44px; /* Touch target */
    padding: 12px 16px;
  }
}
```

**Benefits**:
- ✅ No unwanted zoom on iOS when focusing inputs
- ✅ All touch targets minimum 44x44 pixels (WCAG)
- ✅ Comfortable spacing for touch interaction
- ✅ Consistent sizing across all forms

### 4. Swipe-to-Dismiss Modals

Modals can be dismissed by swiping down on mobile devices.

**Implementation**: `src/composables/useSwipeToDismiss.ts`

```typescript
import { useSwipeToDismiss } from '@/composables/useSwipeToDismiss'

useSwipeToDismiss(modalRef.value, {
  onDismiss: closeModal,
  threshold: 100, // Minimum swipe distance
  haptic: true // Haptic feedback
})
```

**Features**:
- Swipe down to dismiss
- Visual feedback during swipe
- Haptic feedback at threshold
- Smooth animations
- Automatically integrated in ResetLessonModal

## Mobile Helper Utilities

### Device Detection

```typescript
import { isMobile, isTablet, isTouchDevice } from '@/utils/mobileHelpers'

if (isMobile()) {
  // Mobile-specific logic
}

if (isTouchDevice()) {
  // Enable touch gestures
}
```

### Viewport & Orientation

```typescript
import { 
  getViewportDimensions,
  isPortrait,
  isLandscape,
  getSafeAreaInsets
} from '@/utils/mobileHelpers'

const { width, height } = getViewportDimensions()
const insets = getSafeAreaInsets()
```

### Responsive Breakpoints

```typescript
import { matchesBreakpoint, Breakpoints } from '@/utils/mobileHelpers'

if (matchesBreakpoint('md')) {
  // Tablet and up
}

if (matchesBreakpoint('lg')) {
  // Desktop and up
}
```

### Input Optimization

```typescript
import { 
  getMobileInputFontSize,
  preventDoubleTapZoom,
  scrollIntoViewMobile
} from '@/utils/mobileHelpers'

// Prevent iOS zoom on input focus
inputElement.style.fontSize = getMobileInputFontSize()

// Prevent double-tap zoom
const cleanup = preventDoubleTapZoom(buttonElement)
```

## Best Practices

### 1. Touch Targets

Always ensure minimum 44x44 pixel touch targets:

```vue
<!-- ✅ Good -->
<button class="touch-target">Click me</button>

<!-- ❌ Bad -->
<button class="w-6 h-6">Click me</button>
```

### 2. Input Font Size

Use 16px font size on mobile to prevent iOS zoom:

```vue
<!-- ✅ Good -->
<input class="text-base md:text-sm" />

<!-- ❌ Bad -->
<input class="text-sm" />
```

### 3. Safe Area Insets

Respect device safe areas (notches):

```vue
<!-- ✅ Good -->
<div class="pb-20 safe-area-bottom">
  Content
</div>

<!-- ❌ Bad -->
<div class="pb-16">
  Content
</div>
```

### 4. Touch Feedback

Provide visual and haptic feedback:

```vue
<button 
  class="active:scale-95 transition-transform"
  @touchstart="light()"
>
  Button
</button>
```

## Mobile-Specific Components

### MobileNavigation

- ✅ Fixed bottom navigation
- ✅ Safe area padding
- ✅ Touch-optimized sizes
- ✅ Haptic feedback
- ✅ ARIA labels

### ResetLessonModal

- ✅ Swipe-to-dismiss
- ✅ Touch-optimized buttons
- ✅ Mobile-friendly sizing
- ✅ Keyboard + touch support

## CSS Utilities

### Safe Area Classes

```css
.safe-area-bottom  /* Respect bottom notch */
.safe-area-top     /* Respect top notch */
.safe-area-left    /* Respect left notch */
.safe-area-right   /* Respect right notch */
```

### Touch Target

```css
.touch-target  /* Minimum 44x44 touch target */
```

### Touch Manipulation

```css
.touch-manipulation  /* Prevent double-tap zoom */
```

## Responsive Design

### Breakpoints

- **xs**: 0-639px (mobile)
- **sm**: 640-767px (large mobile)
- **md**: 768-1023px (tablet)
- **lg**: 1024-1279px (laptop)
- **xl**: 1280-1535px (desktop)
- **2xl**: 1536px+ (large desktop)

### Mobile-First Approach

All styles are mobile-first, then enhanced for larger screens:

```vue
<div class="text-sm md:text-base lg:text-lg">
  Responsive text
</div>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  Responsive grid
</div>
```

## Testing Mobile Features

### Responsive Testing

Test on multiple devices:
- iPhone SE (small mobile)
- iPhone 14 Pro (standard mobile)
- iPad (tablet)
- Desktop

### Touch Gesture Testing

1. **Swipe**: Swipe left/right to navigate
2. **Pull-to-refresh**: Pull down at top of page
3. **Long press**: Hold for 500ms
4. **Double tap**: Tap twice quickly
5. **Pinch**: Pinch to zoom (where enabled)

### iOS-Specific Testing

- [ ] No zoom on input focus
- [ ] Safe area respected (notched devices)
- [ ] Bottom nav doesn't overlap content
- [ ] Swipe-to-dismiss works smoothly
- [ ] Haptic feedback works

### Android-Specific Testing

- [ ] Touch ripple effects work
- [ ] Back button behavior correct
- [ ] Navigation gestures don't conflict
- [ ] Material Design guidelines met

## Performance Optimization

### Touch Event Optimization

```typescript
// Use passive event listeners
element.addEventListener('touchstart', handler, { passive: true })

// Non-passive only when preventing default
element.addEventListener('touchmove', handler, { passive: false })
```

### Debouncing

```typescript
import { useDebounceFn } from '@vueuse/core'

const debouncedHandler = useDebounceFn(() => {
  // Handle gesture
}, 100)
```

## Troubleshooting

### Issue: Inputs zoom on iOS
**Solution**: Ensure font-size is at least 16px

### Issue: Bottom nav overlaps content
**Solution**: Add `pb-20 safe-area-bottom` to main content

### Issue: Swipe gestures don't work
**Solution**: Check touch event listeners are attached and passive is false for touchmove

### Issue: Haptic feedback not working
**Solution**: Check navigator.vibrate API availability and permissions

## Browser Support

- **iOS Safari**: Full support
- **Chrome Android**: Full support
- **Firefox Android**: Full support
- **Samsung Internet**: Full support
- **Desktop browsers**: Touch support where available

## Future Enhancements

- [ ] Gesture customization in settings
- [ ] Advanced pull-to-refresh animations
- [ ] Horizontal swipe navigation between lessons
- [ ] Touch-optimized tables and lists
- [ ] Progressive Web App gestures

