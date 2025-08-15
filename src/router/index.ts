import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import HomePage from '../views/HomePage.vue'
import StudySeriesPage from '../views/StudySeriesPage.vue'
import StudyPage from '../views/StudyPage.vue'
import SignInPage from '../views/SignInPage.vue'
import SignUpPage from '../views/SignUpPage.vue'
import DashboardPage from '../views/DashboardPage.vue'
import DailyDevotionsPage from '../views/DailyDevotionsPage.vue'
import MyStudiesPage from '../views/MyStudiesPage.vue'
import PlaceholderPage from '../views/PlaceholderPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignInPage,
      meta: { requiresGuest: true }
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUpPage,
      meta: { requiresGuest: true }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardPage,
      meta: { requiresAuth: true }
    },
    {
      path: '/study-series',
      name: 'study-series',
      component: StudySeriesPage
    },
    {
      path: '/study/:id',
      name: 'study',
      component: StudyPage,
      props: true
    },
    {
      path: '/my-studies',
      name: 'my-studies',
      component: MyStudiesPage,
      meta: { requiresAuth: true }
    },
    {
      path: '/daily-devotions',
      name: 'daily-devotions',
      component: DailyDevotionsPage,
      meta: { requiresAuth: true }
    },
    {
      path: '/profile',
      name: 'profile',
      component: PlaceholderPage,
      meta: { requiresAuth: true }
    },
    {
      path: '/settings',
      name: 'settings',
      component: PlaceholderPage,
      meta: { requiresAuth: true }
    },
    {
      path: '/about',
      name: 'about',
      component: PlaceholderPage
    },
    {
      path: '/contact',
      name: 'contact',
      component: PlaceholderPage
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: PlaceholderPage
    },
    {
      path: '/blog',
      name: 'blog',
      component: PlaceholderPage
    },
    {
      path: '/help',
      name: 'help',
      component: PlaceholderPage
    },
    // Catch all route - must be last
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: PlaceholderPage
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top when navigating to a new route
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Navigation guards
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()

  // Initialize auth state if not already done
  authStore.initializeAuth()

  // Check if route requires authentication
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next({ name: 'signin', query: { redirect: to.fullPath } })
    return
  }

  // Check if route requires guest (not authenticated)
  if (to.meta.requiresGuest && authStore.isAuthenticated) {
    next({ name: 'dashboard' })
    return
  }

  next()
})

export default router
