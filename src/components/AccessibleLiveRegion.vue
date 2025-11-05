/**
 * Accessible Live Region Component
 * Provides persistent live regions for screen reader announcements
 */

<template>
  <div
    :id="id"
    :aria-live="priority"
    :aria-atomic="atomic"
    :role="role"
    class="sr-only"
  >
    {{ message }}
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

interface Props {
  id: string
  priority?: 'polite' | 'assertive'
  atomic?: boolean
  role?: 'status' | 'alert' | 'log' | 'timer'
}

const props = withDefaults(defineProps<Props>(), {
  priority: 'polite',
  atomic: true,
  role: 'status'
})

const message = ref('')

// Expose method to update message
defineExpose({
  announce: (text: string) => {
    // Clear first to ensure new message is announced
    message.value = ''
    // Use nextTick to ensure DOM update
    setTimeout(() => {
      message.value = text
    }, 0)
  },
  clear: () => {
    message.value = ''
  }
})
</script>

