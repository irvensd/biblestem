/**
 * Route Accessibility Composable
 * Manages focus and announcements when navigating between routes
 */

import { watch, nextTick, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAccessibility } from './useAccessibility'

/**
 * Manage accessibility for route changes
 */
export function useRouteAccessibility() {
  const router = useRouter()
  const { announcePageChange, announceNavigation } = useAccessibility()

  /**
   * Focus management for route changes
   */
  const focusMainContent = () => {
    nextTick(() => {
      // Try to focus main content area
      const mainContent = document.querySelector('main#main-content') as HTMLElement
      if (mainContent) {
        // Focus the main content container
        mainContent.setAttribute('tabindex', '-1')
        mainContent.focus()
        
        // Remove tabindex after focus (one-time focus)
        setTimeout(() => {
          mainContent.removeAttribute('tabindex')
        }, 0)
      } else {
        // Fallback: focus first heading
        const firstHeading = document.querySelector('h1, h2') as HTMLElement
        if (firstHeading) {
          firstHeading.setAttribute('tabindex', '-1')
          firstHeading.focus()
          setTimeout(() => {
            firstHeading.removeAttribute('tabindex')
          }, 0)
        }
      }
    })
  }

  /**
   * Announce route change to screen readers
   */
  const announceRouteChange = (routeName: string, routePath: string) => {
    // Get page title from route or document
    const pageTitle = document.title || routeName
    
    // Announce page change
    announcePageChange(pageTitle)
    
    // Additional context if available
    const routeMeta = router.currentRoute.value.meta
    if (routeMeta?.description) {
      announceNavigation(router.currentRoute.value.name as string || '', routeName)
    }
  }

  /**
   * Initialize route accessibility
   */
  const initRouteAccessibility = () => {
    // Watch for route changes
    router.afterEach((to, from) => {
      // Announce route change
      announceRouteChange(to.name as string || to.path, to.path)
      
      // Focus main content after route change
      focusMainContent()
    })

    // Initial focus on mount
    onMounted(() => {
      focusMainContent()
    })
  }

  return {
    focusMainContent,
    announceRouteChange,
    initRouteAccessibility
  }
}

