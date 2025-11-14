# Monitoring & Analytics Setup Guide

## Overview

BibleStem includes comprehensive monitoring and analytics capabilities using **Sentry** for error tracking and **Google Analytics** for user analytics.

## Features

### ✅ Error Tracking (Sentry)
- Automatic error capture
- Performance monitoring
- Session replay
- User context tracking
- Release tracking

### ✅ User Analytics (Google Analytics)
- Page view tracking
- Custom event tracking
- User engagement metrics
- Conversion tracking
- User property tracking

## Setup Instructions

### 1. Sentry Setup

#### Step 1: Create Sentry Account
1. Go to [sentry.io](https://sentry.io) and sign up
2. Create a new project
3. Select **Vue** as your platform
4. Copy your **DSN** (Data Source Name)

#### Step 2: Configure Environment Variables
Add to your `.env` file:

```bash
VITE_SENTRY_DSN=https://your-dsn@sentry.io/your-project-id
VITE_SENTRY_ENVIRONMENT=production
VITE_SENTRY_DEBUG=false
```

#### Step 3: Verify Setup
The app will automatically initialize Sentry when the DSN is configured. Check the browser console for:
```
Sentry initialized successfully
```

### 2. Google Analytics Setup

#### Step 1: Create Google Analytics Account
1. Go to [Google Analytics](https://analytics.google.com)
2. Create a new property (GA4)
3. Get your **Measurement ID** (format: `G-XXXXXXXXXX`)

#### Step 2: Configure Environment Variables
Add to your `.env` file:

```bash
VITE_ENABLE_ANALYTICS=true
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

#### Step 3: Verify Setup
Check browser console for:
```
Google Analytics initialized
```

## Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_SENTRY_DSN` | Sentry DSN for error tracking | Yes (for Sentry) |
| `VITE_SENTRY_ENVIRONMENT` | Environment name (development/production) | Yes (for Sentry) |
| `VITE_SENTRY_DEBUG` | Enable Sentry in development | No (default: false) |
| `VITE_ENABLE_ANALYTICS` | Enable analytics tracking | Yes (for GA) |
| `VITE_GA_MEASUREMENT_ID` | Google Analytics Measurement ID | Yes (for GA) |

### Feature Flags

Analytics can be disabled via environment variable:
```bash
VITE_ENABLE_ANALYTICS=false
```

## Usage

### Error Tracking

Errors are automatically captured by:
- Error boundaries
- Unhandled promise rejections
- Vue error handlers
- Manual error logging

#### Manual Error Logging

```typescript
import { captureException } from '@/services/monitoring'

try {
  // Your code
} catch (error) {
  captureException(error as Error, {
    context: 'user_action',
    userId: 'user-123',
  })
}
```

#### Adding Breadcrumbs

```typescript
import { addBreadcrumb } from '@/services/monitoring'

addBreadcrumb('User clicked button', 'user_interaction', {
  buttonId: 'signup-button',
})
```

### Analytics Tracking

#### Using the Composable

```vue
<script setup lang="ts">
import { useAnalytics } from '@/services/analytics'

const analytics = useAnalytics()

// Track custom event
analytics.trackEvent({
  action: 'button_click',
  category: 'engagement',
  label: 'signup_button',
})

// Track study started
analytics.trackStudyStarted('study-123', 'Bible Study Title')

// Track lesson completed
analytics.trackLessonCompleted('study-123', 'lesson-456', 'Bible Study Title')
</script>
```

#### Available Tracking Methods

- `trackPageView(path, title)` - Track page navigation
- `trackEvent(event)` - Track custom events
- `trackSignup(method)` - Track user signups
- `trackLogin(method)` - Track user logins
- `trackStudyStarted(studyId, studyTitle)` - Track study starts
- `trackLessonCompleted(studyId, lessonId, studyTitle)` - Track lesson completions
- `trackStudyCompleted(studyId, studyTitle)` - Track study completions
- `trackSearch(query, resultsCount)` - Track searches
- `trackNoteCreated(studyId)` - Track note creation
- `trackDonation(amount, currency)` - Track donations
- `setUserProperties(userId, properties)` - Set user properties
- `clearUserProperties()` - Clear user properties

## Automatic Tracking

The following events are automatically tracked:

### Page Views
- All route changes are tracked automatically
- Includes path and route name

### User Authentication
- Signup events
- Login events
- User properties set on login

### Errors
- All errors captured by error boundaries
- Unhandled exceptions
- Promise rejections

## Performance Monitoring

Sentry automatically tracks:
- Page load performance
- API request performance
- Component render performance
- Navigation timing

## Session Replay

Sentry Session Replay is enabled:
- **Production**: 10% of sessions recorded
- **Development**: 100% of sessions recorded
- **Errors**: 100% of error sessions recorded

## Privacy Considerations

### Data Collected
- Error messages and stack traces
- User interactions (clicks, navigation)
- Performance metrics
- Browser information
- User ID (when logged in)

### Data Not Collected
- Passwords or sensitive form data
- Credit card information
- Personal identifiable information (unless explicitly set)

### User Consent
Consider implementing a cookie consent banner if required by your jurisdiction (GDPR, CCPA, etc.).

## Production Checklist

- [ ] Sentry DSN configured
- [ ] Google Analytics Measurement ID configured
- [ ] Environment variables set in production
- [ ] Error alerts configured in Sentry
- [ ] Analytics goals/conversions set up in GA
- [ ] Privacy policy updated with tracking disclosure
- [ ] Cookie consent implemented (if required)

## Troubleshooting

### Sentry Not Initializing
1. Check that `VITE_SENTRY_DSN` is set correctly
2. Verify DSN format: `https://xxx@xxx.ingest.sentry.io/xxx`
3. Check browser console for initialization messages
4. Ensure `VITE_SENTRY_DEBUG=true` in development if needed

### Analytics Not Tracking
1. Verify `VITE_ENABLE_ANALYTICS=true`
2. Check `VITE_GA_MEASUREMENT_ID` is correct
3. Use browser DevTools → Network tab to see GA requests
4. Check Google Analytics Real-Time reports

### Errors Not Appearing in Sentry
1. Verify Sentry is initialized (check console)
2. Check Sentry project settings
3. Verify environment matches `VITE_SENTRY_ENVIRONMENT`
4. Check Sentry rate limits

## Best Practices

1. **Don't log sensitive data** - Never log passwords, tokens, or PII
2. **Use appropriate log levels** - Use `error` for errors, `warning` for warnings
3. **Add context** - Include relevant context when logging errors
4. **Test in development** - Use `VITE_SENTRY_DEBUG=true` to test Sentry locally
5. **Monitor regularly** - Check Sentry dashboard for new errors
6. **Set up alerts** - Configure Sentry alerts for critical errors

## Resources

- [Sentry Documentation](https://docs.sentry.io/platforms/javascript/guides/vue/)
- [Google Analytics Documentation](https://developers.google.com/analytics)
- [Sentry Vue Integration](https://docs.sentry.io/platforms/javascript/guides/vue/)
- [GA4 Event Tracking](https://developers.google.com/analytics/devguides/collection/ga4/events)

