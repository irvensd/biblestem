import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomePage.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/DashboardPage.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/study-series',
    name: 'StudySeries',
    component: () => import('../views/StudySeriesPage.vue')
  },
  {
    path: '/my-studies',
    name: 'MyStudies',
    component: () => import('../views/MyStudiesPage.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/daily-devotions',
    name: 'DailyDevotions',
    component: () => import('../views/DailyDevotionsPage.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/study/:id',
    name: 'Study',
    component: () => import('../views/StudyPage.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/study/:studyId/lesson/:lessonId',
    name: 'Lesson',
    component: () => import('../views/LessonPage.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/ProfilePage.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('../views/SettingsPage.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/sign-in',
    name: 'SignIn',
    component: () => import('../views/SignInPage.vue')
  },
  {
    path: '/signin',
    redirect: '/sign-in'
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: () => import('../views/SignUpPage.vue')
  },
  {
    path: '/signup',
    redirect: '/sign-up'
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: () => import('../views/ForgotPasswordPage.vue')
  },
  {
    path: '/reset-password',
    name: 'ResetPassword',
    component: () => import('../views/ResetPasswordPage.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutPage.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/ContactPage.vue')
  },
  {
    path: '/help',
    name: 'Help',
    component: () => import('../views/HelpCenterPage.vue')
  },
  {
    path: '/help-center',
    redirect: '/help'
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: () => import('../views/PrivacyPolicyPage.vue')
  },
  {
    path: '/privacy-policy',
    redirect: '/privacy'
  },
  {
    path: '/terms',
    name: 'Terms',
    component: () => import('../views/TermsOfServicePage.vue')
  },
  {
    path: '/terms-of-service',
    redirect: '/terms'
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFoundPage.vue')
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

// Navigation guard for auth
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next({ name: 'SignIn' })
  } else {
    next()
  }
})

export default router
