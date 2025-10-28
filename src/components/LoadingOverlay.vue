<template>
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="isLoading"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
        @click.self="handleBackdrop"
      >
        <div class="bg-white dark:bg-neutral-900 rounded-2xl p-8 shadow-2xl max-w-sm mx-4">
          <!-- Spinner -->
          <div class="flex justify-center mb-4">
            <div class="relative w-16 h-16">
              <div class="absolute inset-0 border-4 border-primary-200 dark:border-primary-800 rounded-full"></div>
              <div
                class="absolute inset-0 border-4 border-transparent border-t-primary-600 dark:border-t-primary-400 rounded-full animate-spin"
              ></div>
            </div>
          </div>

          <!-- Loading Message -->
          <div class="text-center">
            <h3 v-if="message" class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
              {{ message }}
            </h3>
            <p v-if="subtitle" class="text-sm text-neutral-600 dark:text-neutral-400">{{ subtitle }}</p>
          </div>

          <!-- Progress Bar (if percentage provided) -->
          <div v-if="progress !== null" class="mt-4">
            <div class="h-2 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
              <div
                class="h-full bg-gradient-to-r from-primary-500 to-blue-600 transition-all duration-300"
                :style="{ width: `${Math.min(100, Math.max(0, progress))}%` }"
              ></div>
            </div>
            <p class="text-xs text-neutral-500 dark:text-neutral-400 mt-2 text-center">{{ progress }}%</p>
          </div>

          <!-- Cancel Button (if cancellable) -->
          <div v-if="cancellable" class="mt-6">
            <button
              @click="$emit('cancel')"
              class="w-full px-4 py-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useLoadingStore } from '../stores/loading'

interface Props {
  message?: string
  subtitle?: string
  progress?: number | null
  cancellable?: boolean
  clickBackdrop?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  message: 'Loading...',
  subtitle: undefined,
  progress: null,
  cancellable: false,
  clickBackdrop: false,
})

const emit = defineEmits<{
  cancel: []
}>()

const loadingStore = useLoadingStore()
const isLoading = computed(() => loadingStore.globalLoading)

const handleBackdrop = () => {
  if (props.clickBackdrop && props.cancellable) {
    emit('cancel')
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

