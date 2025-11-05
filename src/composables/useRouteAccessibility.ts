/**
 * Route Accessibility Composable
 * Manages focus and announcements when navigating between routes
 */

import { watch, nextTick, onMounted } from 'vue'
import type { Router } from 'vue-router'
import { useAccessibility } from './useAccessibility'

/**
 * Manage accessibility for route changes
 * @param router - Vue Router instance
 */
export function useRouteAccessibility(router?: Router) {
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
  const announceRouteChange = (routeName: string, routePath: string, routeMeta?: Record<string, unknown>) => {
    // Get page title from route or document
    const pageTitle = document.title || routeName
    
    // Announce page change
    announcePageChange(pageTitle)
    
    // Additional context if available
    if (routeMeta?.description) {
      announceNavigation(routeName, routeName)
    }
  }

  /**
   * Initialize route accessibility
   * @param routerInstance - Router instance to watch (optional if called from router setup)
   */
  const initRouteAccessibility = (routerInstance?: Router) => {
    const activeRouter = routerInstance || router
    
    if (!activeRouter) {
      console.warn('Router not available for accessibility initialization')
      return
    }

    // Watch for route changes
    activeRouter.afterEach((to, from) => {
      // Announce route change
      announceRouteChange(to.name as string || to.path, to.path, to.meta)
      
      // Focus main content after route change
      focusMainContent()
    })

    // Initial focus on mount (only when used in component)
    if (!routerInstance) {
      onMounted(() => {
        focusMainContent()
      })
    }
  }

  return {
    focusMainContent,
    announceRouteChange,
    initRouteAccessibility
  }
}

