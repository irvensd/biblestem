import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import StudySeriesPage from '../views/StudySeriesPage.vue'
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
      path: '/study-series',
      name: 'study-series',
      component: StudySeriesPage
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

export default router
