import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import { useRouteAccessibility } from '../composables/useRouteAccessibility'

const routes = [
  {
    path: '/',
    name: 'Home',
    // Group home page in its own chunk
    component: () => import(/* webpackChunkName: "home" */ '../views/HomePage.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    // Group dashboard with other authenticated pages
    component: () => import(/* webpackChunkName: "auth-pages" */ '../views/DashboardPage.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/study-series',
    name: 'StudySeries',
    // Group study-related pages together
    component: () => import(/* webpackChunkName: "study-pages" */ '../views/StudySeriesPage.vue')
  },
  {
    path: '/my-studies',
    name: 'MyStudies',
    // Group study-related pages together
    component: () => import(/* webpackChunkName: "study-pages" */ '../views/MyStudiesPage.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/daily-devotions',
    name: 'DailyDevotions',
    // Group authenticated content pages
    component: () => import(/* webpackChunkName: "auth-pages" */ '../views/DailyDevotionsPage.vue')
  },
  {
    path: '/search',
    name: 'Search',
    // Search page
    component: () => import(/* webpackChunkName: "search" */ '../views/SearchPage.vue')
  },
  {
    path: '/study/:id',
    name: 'Study',
    // Group study-related pages together
    component: () => import(/* webpackChunkName: "study-pages" */ '../views/StudyPage.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/study/:studyId/lesson/:lessonId',
    name: 'Lesson',
    // Group study-related pages together (lesson is likely the largest)
    component: () => import(/* webpackChunkName: "study-pages" */ '../views/LessonPage.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/profile',
    name: 'Profile',
    // Group user account pages together
    component: () => import(/* webpackChunkName: "auth-pages" */ '../views/ProfilePage.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/settings',
    name: 'Settings',
    // Group user account pages together
    component: () => import(/* webpackChunkName: "auth-pages" */ '../views/SettingsPage.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/sign-in',
    name: 'SignIn',
    // Group auth pages together
    component: () => import(/* webpackChunkName: "auth" */ '../views/SignInPage.vue')
  },
  {
    path: '/signin',
    redirect: '/sign-in'
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    // Group auth pages together
    component: () => import(/* webpackChunkName: "auth" */ '../views/SignUpPage.vue')
  },
  {
    path: '/signup',
    redirect: '/sign-up'
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    // Group auth pages together
    component: () => import(/* webpackChunkName: "auth" */ '../views/ForgotPasswordPage.vue')
  },
  {
    path: '/reset-password',
    name: 'ResetPassword',
    // Group auth pages together
    component: () => import(/* webpackChunkName: "auth" */ '../views/ResetPasswordPage.vue')
  },
  {
    path: '/verify-email',
    name: 'VerifyEmail',
    // Group auth pages together
    component: () => import(/* webpackChunkName: "auth" */ '../views/VerifyEmailPage.vue')
  },
  {
    path: '/about',
    name: 'About',
    // Group static/info pages together
    component: () => import(/* webpackChunkName: "static-pages" */ '../views/AboutPage.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    // Group static/info pages together
    component: () => import(/* webpackChunkName: "static-pages" */ '../views/ContactPage.vue')
  },
  {
    path: '/help',
    name: 'Help',
    // Group static/info pages together
    component: () => import(/* webpackChunkName: "static-pages" */ '../views/HelpCenterPage.vue')
  },
  {
    path: '/help-center',
    redirect: '/help'
  },
  {
    path: '/privacy',
    name: 'Privacy',
    // Group static/info pages together
    component: () => import(/* webpackChunkName: "static-pages" */ '../views/PrivacyPolicyPage.vue')
  },
  {
    path: '/privacy-policy',
    redirect: '/privacy'
  },
  {
    path: '/terms',
    name: 'Terms',
    // Group static/info pages together
    component: () => import(/* webpackChunkName: "static-pages" */ '../views/TermsOfServicePage.vue')
  },
  {
    path: '/terms-of-service',
    redirect: '/terms'
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    // 404 page in its own small chunk
    component: () => import(/* webpackChunkName: "not-found" */ '../views/NotFoundPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // If navigating with hash (e.g., /help#getting-started), scroll to element
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80 // Offset for sticky header
      }
    }
    // If browser back/forward button, restore saved position
    if (savedPosition) {
      return savedPosition
    }
    // Otherwise, scroll to top of page
    return { top: 0 }
  }
})

// Initialize route accessibility after router is created
const { initRouteAccessibility } = useRouteAccessibility(router)
initRouteAccessibility(router)

// Get auth store instance once (Pinia stores are singletons, but this is cleaner)
let authStoreInstance: ReturnType<typeof useAuthStore> | null = null

// Navigation guard for auth
router.beforeEach(async (to, from, next) => {
  // Prevent redirect loops - if already on sign-in page, don't redirect again
  if (to.name === 'SignIn' && from.name === 'SignIn') {
    next(false)
    return
  }
  
  // Get store instance (singleton, but ensure we have a reference)
  if (!authStoreInstance) {
    authStoreInstance = useAuthStore()
  }
  const authStore = authStoreInstance
  
  // Wait for auth initialization if not already initialized
  // But add a timeout to prevent infinite waiting
  if (!authStore.isInitialized) {
    try {
      const initPromise = authStore.initializeAuth()
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Auth initialization timeout')), 5000)
      )
      await Promise.race([initPromise, timeoutPromise])
    } catch (error) {
      console.error('Error initializing auth in router guard:', error)
      // Continue anyway - auth might be unavailable
    }
  }
  
  // Check if route requires auth
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    // Prevent redirect loop - don't redirect to SignIn if already going there
    if (to.name === 'SignIn') {
      next()
    } else {
      next({ name: 'SignIn', query: { redirect: to.fullPath } })
    }
  } else {
    next()
  }
})

// Route preloading for likely next routes
// Preload routes when user hovers over navigation links or is likely to navigate
router.beforeEach((to, from, next) => {
  // Preload likely next routes based on current route
  const preloadRoutes: Record<string, string[]> = {
    'Home': ['StudySeries', 'SignIn'],
    'SignIn': ['SignUp', 'Dashboard'],
    'SignUp': ['SignIn', 'Dashboard'],
    'Dashboard': ['StudySeries', 'MyStudies', 'Profile'],
    'StudySeries': ['Dashboard', 'MyStudies'],
    'MyStudies': ['Dashboard', 'StudySeries'],
    'Study': ['Lesson'],
  }
  
  const routesToPreload = preloadRoutes[from.name as string] || []
  
  // Preload routes in the background (non-blocking)
  routesToPreload.forEach(routeName => {
    try {
      const route = router.resolve({ name: routeName })
      if (route.matched.length > 0) {
        const matched = route.matched[0]
        // Preload the component if it's a lazy-loaded component
        if (matched && matched.components && 'default' in matched.components) {
          const component = matched.components.default as any
          // If it's a lazy load function, call it to preload
          if (typeof component === 'function') {
            // Preload in background, don't await
            component().catch(() => {
              // Silently fail - component will load on actual navigation
            })
          }
        }
      }
    } catch (error) {
      // Silently fail - route will load on actual navigation
    }
  })
  
  next()
})

// Preload on link hover (non-blocking optimization)
if (typeof window !== 'undefined') {
  let hoverTimeout: ReturnType<typeof setTimeout> | null = null
  
  document.addEventListener('mouseover', (e) => {
    const target = e.target as HTMLElement
    const link = target.closest('a[href]') as HTMLAnchorElement
    if (link && link.href.startsWith(window.location.origin)) {
      // Debounce to avoid excessive preloading
      if (hoverTimeout) {
        clearTimeout(hoverTimeout)
      }
      
      hoverTimeout = setTimeout(() => {
        try {
          const url = new URL(link.href)
          const route = router.resolve(url.pathname)
          if (route.matched.length > 0) {
            const matched = route.matched[0]
            // Preload the component if it's a lazy-loaded component
            if (matched && matched.components && 'default' in matched.components) {
              const component = matched.components.default as any
              // If it's a lazy load function, call it to preload
              if (typeof component === 'function') {
                // Preload in background, don't await
                component().catch(() => {
                  // Silently fail - component will load on actual navigation
                })
              }
            }
          }
        } catch (error) {
          // Silently fail - route will load on actual navigation
        }
        hoverTimeout = null
      }, 100) // 100ms delay before preloading
    }
  }, { passive: true })
}

export default router
