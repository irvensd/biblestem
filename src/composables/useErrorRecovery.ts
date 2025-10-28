import { ref, computed } from 'vue'
import { useNetworkError, type RetryOptions } from './useNetworkError'

export interface ErrorRecoveryConfig {
  maxRetries: number
  baseDelay: number
  maxDelay: number
  backoffMultiplier: number
  retryableErrors: string[]
  nonRetryableErrors: string[]
}

export interface RecoveryAction {
  id: string
  name: string
  description: string
  action: () => Promise<void>
  icon?: string
  variant?: 'primary' | 'secondary' | 'warning' | 'error'
}

export function useErrorRecovery() {
  const { handleNetworkError, retryWithBackoff } = useNetworkError()
  
  // State
  const recoveryActions = ref<RecoveryAction[]>([])
  const isRecovering = ref(false)
  const recoveryHistory = ref<Array<{
    timestamp: number
    action: string
    success: boolean
    error?: string
  }>>([])
  
  // Default configuration
  const defaultConfig: ErrorRecoveryConfig = {
    maxRetries: 3,
    baseDelay: 1000,
    maxDelay: 10000,
    backoffMultiplier: 2,
    retryableErrors: [
      'NETWORK_ERROR',
      'SERVER_ERROR',
      'RATE_LIMITED',
      'TIMEOUT_ERROR'
    ],
    nonRetryableErrors: [
      'UNAUTHORIZED',
      'FORBIDDEN',
      'NOT_FOUND',
      'VALIDATION_ERROR'
    ]
  }
  
  // Computed
  const hasRecoveryActions = computed(() => recoveryActions.value.length > 0)
  const canRetry = computed(() => {
    const lastError = recoveryHistory.value[recoveryHistory.value.length - 1]
    return lastError && !lastError.success && !isRecovering.value
  })
  
  // Methods
  const addRecoveryAction = (action: RecoveryAction) => {
    const existingIndex = recoveryActions.value.findIndex(a => a.id === action.id)
    if (existingIndex >= 0) {
      recoveryActions.value[existingIndex] = action
    } else {
      recoveryActions.value.push(action)
    }
  }
  
  const removeRecoveryAction = (id: string) => {
    const index = recoveryActions.value.findIndex(a => a.id === id)
    if (index >= 0) {
      recoveryActions.value.splice(index, 1)
    }
  }
  
  const clearRecoveryActions = () => {
    recoveryActions.value = []
  }
  
  const executeRecoveryAction = async (actionId: string): Promise<boolean> => {
    const action = recoveryActions.value.find(a => a.id === actionId)
    if (!action) return false
    
    isRecovering.value = true
    
    try {
      await action.action()
      
      // Record successful recovery
      recoveryHistory.value.push({
        timestamp: Date.now(),
        action: action.name,
        success: true
      })
      
      // Remove the action if it was successful
      removeRecoveryAction(actionId)
      
      return true
    } catch (error) {
      // Record failed recovery
      recoveryHistory.value.push({
        timestamp: Date.now(),
        action: action.name,
        success: false,
        error: error instanceof Error ? error.message : String(error)
      })
      
      return false
    } finally {
      isRecovering.value = false
    }
  }
  
  const executeAllRecoveryActions = async (): Promise<boolean> => {
    if (recoveryActions.value.length === 0) return true
    
    isRecovering.value = true
    let allSuccessful = true
    
    try {
      for (const action of recoveryActions.value) {
        const success = await executeRecoveryAction(action.id)
        if (!success) {
          allSuccessful = false
        }
      }
      
      return allSuccessful
    } finally {
      isRecovering.value = false
    }
  }
  
  const retryWithRecovery = async <T>(
    operation: () => Promise<T>,
    config: Partial<ErrorRecoveryConfig> = {}
  ): Promise<T> => {
    const finalConfig = { ...defaultConfig, ...config }
    
    try {
      return await retryWithBackoff(operation, {
        maxRetries: finalConfig.maxRetries,
        baseDelay: finalConfig.baseDelay,
        maxDelay: finalConfig.maxDelay,
        backoffMultiplier: finalConfig.backoffMultiplier
      })
    } catch (error) {
      const networkError = handleNetworkError(error)
      
      // Add recovery actions based on error type
      await addRecoveryActionsForError(networkError)
      
      throw networkError
    }
  }
  
  const addRecoveryActionsForError = async (error: any) => {
    const errorCode = error.code || 'UNKNOWN_ERROR'
    
    // Clear existing actions
    clearRecoveryActions()
    
    // Add actions based on error type
    switch (errorCode) {
      case 'NETWORK_ERROR':
        addRecoveryAction({
          id: 'check-connection',
          name: 'Check Connection',
          description: 'Verify your internet connection',
          action: async () => {
            if (!navigator.onLine) {
              throw new Error('No internet connection')
            }
          },
          icon: 'wifi',
          variant: 'warning'
        })
        break
        
      case 'SERVER_ERROR':
        addRecoveryAction({
          id: 'retry-server',
          name: 'Retry Request',
          description: 'Try the request again',
          action: async () => {
            await new Promise(resolve => setTimeout(resolve, 2000))
          },
          icon: 'refresh',
          variant: 'primary'
        })
        break
        
      case 'UNAUTHORIZED':
        addRecoveryAction({
          id: 're-authenticate',
          name: 'Sign In Again',
          description: 'Your session has expired',
          action: async () => {
            // This would typically redirect to login
            window.location.href = '/signin'
          },
          icon: 'login',
          variant: 'error'
        })
        break
        
      case 'RATE_LIMITED':
        addRecoveryAction({
          id: 'wait-and-retry',
          name: 'Wait and Retry',
          description: 'Wait a moment before trying again',
          action: async () => {
            await new Promise(resolve => setTimeout(resolve, 5000))
          },
          icon: 'clock',
          variant: 'warning'
        })
        break
        
      case 'FORBIDDEN':
        addRecoveryAction({
          id: 'contact-support',
          name: 'Contact Support',
          description: 'You don\'t have permission for this action',
          action: async () => {
            // This would typically open a support form
            console.log('Opening support form...')
          },
          icon: 'help',
          variant: 'error'
        })
        break
        
      default:
        addRecoveryAction({
          id: 'generic-retry',
          name: 'Try Again',
          description: 'Retry the operation',
          action: async () => {
            await new Promise(resolve => setTimeout(resolve, 1000))
          },
          icon: 'refresh',
          variant: 'primary'
        })
    }
  }
  
  const clearRecoveryHistory = () => {
    recoveryHistory.value = []
  }
  
  const getRecoveryStats = () => {
    const total = recoveryHistory.value.length
    const successful = recoveryHistory.value.filter(r => r.success).length
    const failed = total - successful
    
    return {
      total,
      successful,
      failed,
      successRate: total > 0 ? (successful / total) * 100 : 0
    }
  }
  
  return {
    // State
    recoveryActions,
    isRecovering,
    recoveryHistory,
    
    // Computed
    hasRecoveryActions,
    canRetry,
    
    // Methods
    addRecoveryAction,
    removeRecoveryAction,
    clearRecoveryActions,
    executeRecoveryAction,
    executeAllRecoveryActions,
    retryWithRecovery,
    clearRecoveryHistory,
    getRecoveryStats
  }
}

// Global error recovery manager
export class GlobalErrorRecovery {
  private static instance: GlobalErrorRecovery
  private recoveryActions: Map<string, RecoveryAction> = new Map()
  private errorHandlers: Map<string, (error: any) => Promise<void>> = new Map()
  
  static getInstance(): GlobalErrorRecovery {
    if (!GlobalErrorRecovery.instance) {
      GlobalErrorRecovery.instance = new GlobalErrorRecovery()
    }
    return GlobalErrorRecovery.instance
  }
  
  registerErrorHandler(errorType: string, handler: (error: any) => Promise<void>) {
    this.errorHandlers.set(errorType, handler)
  }
  
  unregisterErrorHandler(errorType: string) {
    this.errorHandlers.delete(errorType)
  }
  
  async handleError(error: any): Promise<boolean> {
    const errorType = error.code || error.name || 'UNKNOWN_ERROR'
    const handler = this.errorHandlers.get(errorType)
    
    if (handler) {
      try {
        await handler(error)
        return true
      } catch (handlerError) {
        console.error('Error handler failed:', handlerError)
        return false
      }
    }
    
    return false
  }
  
  addRecoveryAction(action: RecoveryAction) {
    this.recoveryActions.set(action.id, action)
  }
  
  removeRecoveryAction(id: string) {
    this.recoveryActions.delete(id)
  }
  
  getRecoveryActions(): RecoveryAction[] {
    return Array.from(this.recoveryActions.values())
  }
  
  clearRecoveryActions() {
    this.recoveryActions.clear()
  }
}

// Global instance
export const globalErrorRecovery = GlobalErrorRecovery.getInstance()

// Auto-recovery for common errors
if (typeof window !== 'undefined') {
  // Handle unhandled promise rejections
  window.addEventListener('unhandledrejection', async (event) => {
    const handled = await globalErrorRecovery.handleError(event.reason)
    if (handled) {
      event.preventDefault()
    }
  })
  
  // Handle global errors
  window.addEventListener('error', async (event) => {
    const handled = await globalErrorRecovery.handleError(event.error)
    if (handled) {
      event.preventDefault()
    }
  })
}
