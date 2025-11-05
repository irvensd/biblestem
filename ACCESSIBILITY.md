# Accessibility Implementation Guide

## Overview

BibleStem implements comprehensive accessibility features following WCAG 2.1 AA standards to ensure the application is usable by everyone, including users with disabilities.

## ✅ Implemented Features

### 1. ARIA Labels

All interactive elements have proper ARIA labels for screen readers.

**Examples**:
```vue
<!-- Buttons -->
<button aria-label="Close modal" @click="close">
  <svg aria-hidden="true">...</svg>
</button>

<!-- Navigation -->
<nav role="navigation" aria-label="Main navigation">
  <router-link 
    :aria-current="$route.path === '/dashboard' ? 'page' : undefined"
  >
    Dashboard
  </router-link>
</nav>

<!-- Study Cards -->
<article role="article" :aria-label="`Study: ${study.title}`">
  <button :aria-label="`Start studying ${study.title}`">
    Start Study
  </button>
</article>
```

### 2. Keyboard Navigation

**Modal Keyboard Support**:
- ✅ **Escape**: Closes modal
- ✅ **Tab**: Moves focus between focusable elements
- ✅ **Shift+Tab**: Moves focus backward
- ✅ **Focus trap**: Tab stays within modal
- ✅ **Focus restoration**: Returns focus to triggering element

**Implementation**:
```typescript
// Automatic focus trap in modals
const { trapFocus } = useFocusManagement()
focusCleanup = trapFocus(modalRef.value, {
  initialFocus: cancelButtonRef.value,
  preventScroll: true
})
```

### 3. Focus Management

**Route Navigation**:
- Focus automatically moves to main content on route change
- Screen reader announces page changes
- Focus visible with clear focus indicators

**Implementation**:
```typescript
// In router/index.ts
const { initRouteAccessibility } = useRouteAccessibility()
initRouteAccessibility()

// Automatically:
// - Focuses main content on route change
// - Announces page changes to screen readers
```

### 4. Screen Reader Announcements

**Automatic Announcements**:
- ✅ Page changes
- ✅ Modal openings/closings
- ✅ Success/error messages
- ✅ Loading states
- ✅ Form submissions

**Usage**:
```typescript
import { useAccessibility } from '@/composables/useAccessibility'

const { announceSuccess, announceError, announcePageChange } = useAccessibility()

// Announce success
announceSuccess('Note saved successfully')

// Announce error
announceError('Failed to save note')

// Announce page change
announcePageChange('Dashboard')
```

## Component Accessibility

### AccessibleModal

✅ Full keyboard navigation
✅ ARIA labels and descriptions
✅ Focus trap
✅ Focus restoration
✅ Screen reader announcements

```vue
<AccessibleModal
  :is-open="isOpen"
  title="Reset Lesson"
  description="This action cannot be undone"
  :trap-focus="true"
  :restore-focus="true"
  @close="close"
>
  <!-- Modal content -->
</AccessibleModal>
```

### ResetLessonModal

✅ Enhanced with:
- Full ARIA attributes
- Keyboard navigation
- Focus trap
- Screen reader announcements

### StudyCard

✅ Semantic HTML (`<article>`)
✅ ARIA labels on interactive elements
✅ Screen reader friendly text
✅ Focus indicators

### AppHeader

✅ Navigation landmarks
✅ ARIA current states
✅ Descriptive labels
✅ Keyboard accessible

## Accessibility Utilities

### useAccessibility()

Provides screen reader announcements:

```typescript
const {
  announce,
  announceSuccess,
  announceError,
  announceLoading,
  announcePageChange
} = useAccessibility()
```

### useFocusManagement()

Manages focus for modals and navigation:

```typescript
const {
  trapFocus,
  focusElement,
  focusNext,
  focusPrevious,
  getFocusableElements
} = useFocusManagement()
```

### useRouteAccessibility()

Handles route change accessibility:

```typescript
const {
  focusMainContent,
  announceRouteChange,
  initRouteAccessibility
} = useRouteAccessibility()
```

## Best Practices

### 1. Always Provide ARIA Labels

```vue
<!-- ✅ Good -->
<button aria-label="Close dialog">
  <svg aria-hidden="true">×</svg>
</button>

<!-- ❌ Bad -->
<button>
  <svg>×</svg>
</button>
```

### 2. Use Semantic HTML

```vue
<!-- ✅ Good -->
<article>
  <h2>Study Title</h2>
  <p>Description</p>
</article>

<!-- ❌ Bad -->
<div>
  <div>Study Title</div>
  <div>Description</div>
</div>
```

### 3. Ensure Keyboard Accessibility

```vue
<!-- ✅ Good -->
<button @click="action" @keydown.enter="action">
  Action
</button>

<!-- ❌ Bad -->
<div @click="action">Action</div>
```

### 4. Provide Focus Indicators

```vue
<!-- ✅ Good -->
<button class="focus:outline-none focus:ring-2 focus:ring-primary-500">
  Button
</button>

<!-- ❌ Bad -->
<button class="outline-none">Button</button>
```

### 5. Announce Dynamic Content

```typescript
// ✅ Good
const { announceSuccess } = useAccessibility()
await saveNote()
announceSuccess('Note saved successfully')

// ❌ Bad
await saveNote()
// No announcement
```

## Testing Accessibility

### Keyboard Testing

1. **Tab Navigation**: Can you navigate all interactive elements?
2. **Enter/Space**: Do buttons activate with keyboard?
3. **Escape**: Do modals close with Escape?
4. **Focus Visible**: Can you see where focus is?

### Screen Reader Testing

Test with:
- **NVDA** (Windows, free)
- **JAWS** (Windows, paid)
- **VoiceOver** (macOS/iOS, built-in)
- **TalkBack** (Android, built-in)

### Automated Testing

Use tools like:
- **axe DevTools** browser extension
- **WAVE** browser extension
- **Lighthouse** accessibility audit

## Accessibility Checklist

- [x] All buttons have ARIA labels or visible text
- [x] All images have alt text or aria-hidden
- [x] Forms have labels and error messages
- [x] Modals have focus traps
- [x] Route changes announce to screen readers
- [x] Focus visible on all interactive elements
- [x] Keyboard navigation works everywhere
- [x] Color contrast meets WCAG AA (4.5:1)
- [x] Semantic HTML used appropriately
- [x] ARIA roles used correctly
- [x] Live regions for dynamic content
- [x] Skip links for navigation

## Common Issues Fixed

### Issue 1: Missing ARIA Labels
**Fixed**: Added `aria-label` to all icon-only buttons and interactive elements

### Issue 2: Modal Keyboard Navigation
**Fixed**: Implemented focus trap and keyboard handlers in all modals

### Issue 3: Focus Management on Route Change
**Fixed**: Added automatic focus to main content on route navigation

### Issue 4: Screen Reader Announcements
**Fixed**: Created persistent live regions and proper announcement system

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [WebAIM Screen Reader Survey](https://webaim.org/projects/screenreadersurvey9/)
- [MDN Accessibility Guide](https://developer.mozilla.org/en-US/docs/Web/Accessibility)

## Future Enhancements

- [ ] High contrast mode toggle
- [ ] Font size adjustment
- [ ] Keyboard shortcuts documentation
- [ ] Accessibility preferences panel
- [ ] Automated accessibility testing in CI/CD

