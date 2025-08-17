import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import { useErrorStore } from '../stores/errors'
import { useLoadingStore } from '../stores/loading'
import HomePage from '../views/HomePage.vue'
import StudySeriesPage from '../views/StudySeriesPage.vue'
import StudyPage from '../views/StudyPage.vue'
import SignInPage from '../views/SignInPage.vue'
import SignUpPage from '../views/SignUpPage.vue'
import DashboardPage from '../views/DashboardPage.vue'
import DailyDevotionsPage from '../views/DailyDevotionsPage.vue'
import MyStudiesPage from '../views/MyStudiesPage.vue'
import ProfilePage from '../views/ProfilePage.vue'
import SettingsPage from '../views/SettingsPage.vue'
import PlaceholderPage from '../views/PlaceholderPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignInPage,
      meta: { requiresGuest: true },
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUpPage,
      meta: { requiresGuest: true },
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardPage,
      meta: { requiresAuth: true },
    },
    {
      path: '/study-series',
      name: 'study-series',
      component: StudySeriesPage,
    },
    {
      path: '/study/:id',
      name: 'study',
      component: StudyPage,
      props: true,
      meta: { requiresAuth: true, checkPremium: true },
    },
    {
      path: '/my-studies',
      name: 'my-studies',
      component: MyStudiesPage,
      meta: { requiresAuth: true },
    },
    {
      path: '/daily-devotions',
      name: 'daily-devotions',
      component: DailyDevotionsPage,
      meta: { requiresAuth: true },
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfilePage,
      meta: { requiresAuth: true },
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingsPage,
      meta: { requiresAuth: true },
    },
    {
      path: '/about',
      name: 'about',
      component: PlaceholderPage,
    },
    {
      path: '/contact',
      name: 'contact',
      component: PlaceholderPage,
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: PlaceholderPage,
    },
    {
      path: '/blog',
      name: 'blog',
      component: PlaceholderPage,
    },
    {
      path: '/help',
      name: 'help',
      component: PlaceholderPage,
    },
    // Catch all route - must be last
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: PlaceholderPage,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top when navigating to a new route
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

// Navigation guards
router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore()
  const errorStore = useErrorStore()
  const loadingStore = useLoadingStore()

  try {
    // Show loading for navigation
    loadingStore.setLoading('navigation', true)

    // Wait for auth initialization if not ready
    if (!authStore.isInitialized) {
      await authStore.initializeAuth()
    }

    // Check if route requires authentication
    if (to.meta.requiresAuth && !authStore.isAuthenticated) {
      errorStore.addError('Please sign in to access this page', { type: 'info' })
      next({ name: 'signin', query: { redirect: to.fullPath } })
      return
    }

    // Check if route requires guest (not authenticated)
    if (to.meta.requiresGuest && authStore.isAuthenticated) {
      next({ name: 'dashboard' })
      return
    }

    // Check premium access for studies
    if (to.meta.checkPremium && to.params.id) {
      const studyId = to.params.id as string
      const isPremiumStudy = await checkIfPremiumStudy(studyId)

      if (isPremiumStudy && !authStore.isPremium) {
        errorStore.addError('Premium subscription required for this study', { type: 'warning' })
        next({ name: 'study-series', query: { premium: 'required' } })
        return
      }
    }

    // Validate study exists
    if (to.name === 'study' && to.params.id) {
      const studyExists = await validateStudyExists(to.params.id as string)
      if (!studyExists) {
        errorStore.addError('Study not found', { type: 'warning' })
        next({ name: 'study-series' })
        return
      }
    }

    next()
  } catch (error) {
    console.error('Navigation guard error:', error)
    errorStore.handleError(error, 'Navigation')
    next({ name: 'home' })
  } finally {
    loadingStore.clearLoading('navigation')
  }
})

// Helper function to check if study is premium
async function checkIfPremiumStudy(studyId: string): Promise<boolean> {
  try {
    // Import dynamically to avoid circular dependencies
    const { getPremiumStudies } = await import('../data/studies')
    const premiumStudies = getPremiumStudies()
    return premiumStudies.some((study) => study.id === studyId)
  } catch {
    return false
  }
}

// Helper function to validate study exists
async function validateStudyExists(studyId: string): Promise<boolean> {
  try {
    const { getStudyById } = await import('../data/studies')
    const study = getStudyById(studyId)
    return !!study
  } catch {
    return false
  }
}

// Global error handler for navigation
router.onError((error) => {
  console.error('Router error:', error)
  const errorStore = useErrorStore()
  errorStore.handleError(error, 'Router')
})

export default router
