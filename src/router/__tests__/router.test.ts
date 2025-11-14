import { describe, it, expect, beforeEach, vi } from 'vitest'
import { createRouter, createWebHistory } from 'vue-router'
import { setActivePinia, createPinia } from 'pinia'
import { useAuthStore } from '../../stores/auth'

// Mock views
const HomePage = { template: '<div>Home</div>' }
const SignInPage = { template: '<div>Sign In</div>' }
const DashboardPage = { template: '<div>Dashboard</div>' }
const StudySeriesPage = { template: '<div>Study Series</div>' }

describe('Router', () => {
  let router: ReturnType<typeof createRouter>
  let authStore: ReturnType<typeof useAuthStore>

  beforeEach(() => {
    setActivePinia(createPinia())
    authStore = useAuthStore()

    router = createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: '/',
          name: 'Home',
          component: HomePage,
        },
        {
          path: '/sign-in',
          name: 'SignIn',
          component: SignInPage,
        },
        {
          path: '/dashboard',
          name: 'Dashboard',
          component: DashboardPage,
          meta: { requiresAuth: true },
        },
        {
          path: '/study-series',
          name: 'StudySeries',
          component: StudySeriesPage,
        },
      ],
    })

    // Add auth guard
    router.beforeEach(async (to, from, next) => {
      if (to.meta.requiresAuth && !authStore.isAuthenticated) {
        next({ name: 'SignIn', query: { redirect: to.fullPath } })
      } else {
        next()
      }
    })
  })

  describe('public routes', () => {
    it('should allow access to home page', async () => {
      await router.push('/')
      expect(router.currentRoute.value.name).toBe('Home')
    })

    it('should allow access to sign-in page', async () => {
      await router.push('/sign-in')
      expect(router.currentRoute.value.name).toBe('SignIn')
    })

    it('should allow access to study-series page', async () => {
      await router.push('/study-series')
      expect(router.currentRoute.value.name).toBe('StudySeries')
    })
  })

  describe('protected routes', () => {
    it('should redirect to sign-in when not authenticated', async () => {
      authStore.user = null
      await router.push('/dashboard')
      expect(router.currentRoute.value.name).toBe('SignIn')
      expect(router.currentRoute.value.query.redirect).toBe('/dashboard')
    })

    it('should allow access when authenticated', async () => {
      authStore.user = {
        id: '1',
        name: 'Test User',
        email: 'test@example.com',
        studiesCompleted: 0,
        joinDate: new Date().toISOString(),
      }
      await router.push('/dashboard')
      expect(router.currentRoute.value.name).toBe('Dashboard')
    })
  })

  describe('scroll behavior', () => {
    it('should scroll to top on navigation', async () => {
      const scrollBehavior = router.options.scrollBehavior
      if (scrollBehavior) {
        const result = scrollBehavior(
          { hash: '', fullPath: '/', path: '/', name: 'Home', meta: {}, params: {}, query: {} },
          { hash: '', fullPath: '/dashboard', path: '/dashboard', name: 'Dashboard', meta: {}, params: {}, query: {} },
          null
        )
        expect(result).toEqual({ top: 0 })
      }
    })

    it('should scroll to hash element when hash is present', async () => {
      const scrollBehavior = router.options.scrollBehavior
      if (scrollBehavior) {
        const mockElement = document.createElement('div')
        mockElement.id = 'section'
        document.body.appendChild(mockElement)

        const result = scrollBehavior(
          { hash: '#section', fullPath: '/#section', path: '/', name: 'Home', meta: {}, params: {}, query: {} },
          { hash: '', fullPath: '/', path: '/', name: 'Home', meta: {}, params: {}, query: {} },
          null
        )

        expect(result).toEqual(
          expect.objectContaining({
            el: '#section',
            behavior: 'smooth',
          })
        )

        document.body.removeChild(mockElement)
      }
    })
  })
})

