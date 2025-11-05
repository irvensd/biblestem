/**
 * Route name constants
 * Centralized route definitions to avoid magic strings across the codebase
 */

export const ROUTES = {
  // Public routes
  HOME: '/',
  DASHBOARD: '/dashboard',
  ABOUT: '/about',
  CONTACT: '/contact',
  
  // Authentication routes
  SIGN_IN: '/sign-in',
  SIGN_UP: '/sign-up',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/reset-password',
  VERIFY_EMAIL: '/verify-email',
  
  // Study routes
  STUDY_SERIES: '/study-series',
  MY_STUDIES: '/my-studies',
  STUDY_DETAIL: (id: string) => `/study-series/${id}`,
  LESSON_DETAIL: (studyId: string, lessonId: string) => `/study-series/${studyId}/lessons/${lessonId}`,
  
  // Content routes
  DAILY_DEVOTIONS: '/daily-devotions',
  
  // User routes
  PROFILE: '/profile',
  SETTINGS: '/settings',
  
  // Legal routes
  PRIVACY: '/privacy',
  TERMS: '/terms',
  HELP: '/help',
} as const

/**
 * Type-safe route builder helpers
 */
export const buildRoutes = {
  studyDetail: (id: string) => ROUTES.STUDY_DETAIL(id),
  lessonDetail: (studyId: string, lessonId: string) => ROUTES.LESSON_DETAIL(studyId, lessonId),
} as const

