/**
 * Network Status Composable
 * Monitors online/offline status and network quality
 */

import { ref, onMounted, onUnmounted, computed } from 'vue'

export interface NetworkStatus {
  isOnline: boolean
  wasOffline: boolean
  effectiveType?: string
  downlink?: number
  rtt?: number
}

export function useNetworkStatus() {
  const isOnline = ref(navigator.onLine)
  const wasOffline = ref(false)
  const effectiveType = ref<string | undefined>()
  const downlink = ref<number | undefined>()
  const rtt = ref<number | undefined>()

  const networkStatus = computed<NetworkStatus>(() => ({
    isOnline: isOnline.value,
    wasOffline: wasOffline.value,
    effectiveType: effectiveType.value,
    downlink: downlink.value,
    rtt: rtt.value,
  }))

  const updateNetworkStatus = () => {
    isOnline.value = navigator.onLine

    // If coming back online
    if (isOnline.value && wasOffline.value) {
      console.log('Network connection restored')
      wasOffline.value = false
    }

    // If going offline
    if (!isOnline.value && !wasOffline.value) {
      console.warn('Network connection lost')
      wasOffline.value = true
    }

    // Get connection information if available
    if ('connection' in navigator) {
      const connection = (navigator as any).connection
      effectiveType.value = connection?.effectiveType
      downlink.value = connection?.downlink
      rtt.value = connection?.rtt
    }
  }

  const handleOnline = () => {
    isOnline.value = true
    if (wasOffline.value) {
      wasOffline.value = false
      // Could dispatch event or trigger sync here
    }
  }

  const handleOffline = () => {
    isOnline.value = false
    wasOffline.value = true
    // Could dispatch event or trigger offline mode here
  }

  const handleConnectionChange = () => {
    updateNetworkStatus()
  }

  onMounted(() => {
    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    // Monitor connection changes
    if ('connection' in navigator) {
      const connection = (navigator as any).connection
      connection?.addEventListener('change', handleConnectionChange)
    }

    // Initial status
    updateNetworkStatus()
  })

  onUnmounted(() => {
    window.removeEventListener('online', handleOnline)
    window.removeEventListener('offline', handleOffline)

    if ('connection' in navigator) {
      const connection = (navigator as any).connection
      connection?.removeEventListener('change', handleConnectionChange)
    }
  })

  return {
    isOnline,
    wasOffline,
    effectiveType,
    downlink,
    rtt,
    networkStatus,
  }
}

