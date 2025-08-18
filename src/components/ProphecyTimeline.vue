<template>
  <div class="w-full max-w-4xl mx-auto p-4">
    <!-- Timeline Header -->
    <div class="text-center mb-6">
      <h3 class="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
        {{ timeline.title }}
      </h3>
      <p v-if="timeline.description" class="text-sm text-neutral-600 dark:text-neutral-400">
        {{ timeline.description }}
      </p>
    </div>

    <!-- Timeline Controls -->
    <div class="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
      <!-- View Toggle -->
      <div class="flex items-center space-x-2">
        <button
          @click="viewMode = 'horizontal'"
          class="px-3 py-1 text-sm rounded-full transition-colors"
          :class="
            viewMode === 'horizontal'
              ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400'
              : 'bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-600'
          "
        >
          Horizontal
        </button>
        <button
          @click="viewMode = 'vertical'"
          class="px-3 py-1 text-sm rounded-full transition-colors"
          :class="
            viewMode === 'vertical'
              ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400'
              : 'bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-600'
          "
        >
          Vertical
        </button>
      </div>

      <!-- Zoom Controls -->
      <div class="flex items-center space-x-2">
        <button
          @click="zoomOut"
          class="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors"
          :disabled="zoomLevel <= 1"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
          </svg>
        </button>
        <span class="text-sm text-neutral-600 dark:text-neutral-400 min-w-[60px] text-center">
          {{ Math.round(zoomLevel * 100) }}%
        </span>
        <button
          @click="zoomIn"
          class="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors"
          :disabled="zoomLevel >= 3"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Horizontal Timeline -->
    <div v-if="viewMode === 'horizontal'" class="relative overflow-x-auto">
      <div
        class="relative min-w-full"
        :style="`transform: scale(${zoomLevel}); transform-origin: left top;`"
      >
        <!-- Timeline Line -->
        <div
          class="absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
        ></div>

        <!-- Timeline Events -->
        <div class="relative flex justify-between items-start min-w-[800px] pb-4">
          <div
            v-for="(event, index) in timeline.events"
            :key="event.date || index"
            class="relative flex flex-col items-center group cursor-pointer"
            :class="{ 'flex-1': !event.duration }"
            @click="selectEvent(event)"
          >
            <!-- Event Dot -->
            <div
              class="w-4 h-4 rounded-full border-4 bg-white dark:bg-neutral-800 transition-all duration-300 group-hover:scale-125 z-10"
              :class="
                selectedEvent === event
                  ? 'border-accent-500 shadow-lg'
                  : getEventColor(event, index)
              "
            ></div>

            <!-- Event Content -->
            <div class="mt-4 text-center max-w-[150px]">
              <div class="text-xs font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                {{ formatDate(event.date) }}
              </div>
              <div class="text-xs text-neutral-600 dark:text-neutral-400 leading-tight">
                {{ event.event }}
              </div>
              <div
                v-if="event.duration"
                class="text-xs text-primary-600 dark:text-primary-400 mt-1"
              >
                {{ event.duration }}
              </div>
              <div
                v-if="event.reference"
                class="text-xs text-secondary-600 dark:text-secondary-400 mt-1"
              >
                {{ event.reference }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Vertical Timeline -->
    <div v-else class="space-y-4">
      <div
        v-for="(event, index) in timeline.events"
        :key="event.date || index"
        class="relative flex items-start space-x-4 p-4 rounded-xl border border-neutral-200 dark:border-neutral-700 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300 cursor-pointer group"
        @click="selectEvent(event)"
        :class="
          selectedEvent === event
            ? 'bg-primary-50 dark:bg-primary-900/20 border-primary-300 dark:border-primary-600'
            : 'bg-white dark:bg-neutral-800'
        "
      >
        <!-- Timeline Line (for vertical) -->
        <div
          v-if="index < timeline.events.length - 1"
          class="absolute left-6 top-14 w-0.5 h-full bg-gradient-to-b from-primary-500 to-secondary-500"
        ></div>

        <!-- Event Dot -->
        <div
          class="w-4 h-4 rounded-full border-4 bg-white dark:bg-neutral-800 transition-all duration-300 group-hover:scale-125 z-10 flex-shrink-0 mt-1"
          :class="
            selectedEvent === event ? 'border-accent-500 shadow-lg' : getEventColor(event, index)
          "
        ></div>

        <!-- Event Content -->
        <div class="flex-1 min-w-0">
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
            <h4 class="font-semibold text-neutral-900 dark:text-neutral-100 text-sm">
              {{ formatDate(event.date) }}
            </h4>
            <div class="flex flex-wrap gap-2">
              <span
                v-if="event.duration"
                class="text-xs px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded"
              >
                {{ event.duration }}
              </span>
              <span
                v-if="event.reference"
                class="text-xs px-2 py-1 bg-secondary-100 dark:bg-secondary-900/30 text-secondary-600 dark:text-secondary-400 rounded"
              >
                {{ event.reference }}
              </span>
            </div>
          </div>

          <p class="text-sm text-neutral-700 dark:text-neutral-300">
            {{ event.event }}
          </p>

          <!-- Expansion for selected event -->
          <div
            v-if="selectedEvent === event && event.details"
            class="mt-3 p-3 bg-neutral-50 dark:bg-neutral-700 rounded-lg"
          >
            <p class="text-xs text-neutral-600 dark:text-neutral-400">
              {{ event.details }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Event Details Modal -->
    <div
      v-if="selectedEvent && showModal"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      @click="closeModal"
    >
      <div
        class="bg-white dark:bg-neutral-800 rounded-xl shadow-xl max-w-md w-full max-h-[80vh] overflow-y-auto"
        @click.stop
      >
        <div class="p-6">
          <!-- Header -->
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-bold text-neutral-900 dark:text-neutral-100">
              {{ formatDate(selectedEvent.date) }}
            </h3>
            <button
              @click="closeModal"
              class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <!-- Content -->
          <div class="space-y-4">
            <div>
              <h4 class="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Event</h4>
              <p class="text-sm text-neutral-700 dark:text-neutral-300">
                {{ selectedEvent.event }}
              </p>
            </div>

            <div
              v-if="selectedEvent.duration"
              class="flex items-center justify-between p-3 bg-primary-50 dark:bg-primary-900/20 rounded-lg"
            >
              <span class="text-sm font-medium text-neutral-900 dark:text-neutral-100"
                >Duration</span
              >
              <span class="text-sm text-primary-600 dark:text-primary-400">{{
                selectedEvent.duration
              }}</span>
            </div>

            <div
              v-if="selectedEvent.reference"
              class="flex items-center justify-between p-3 bg-secondary-50 dark:bg-secondary-900/20 rounded-lg"
            >
              <span class="text-sm font-medium text-neutral-900 dark:text-neutral-100"
                >Biblical Reference</span
              >
              <span class="text-sm text-secondary-600 dark:text-secondary-400">{{
                selectedEvent.reference
              }}</span>
            </div>

            <div v-if="selectedEvent.details">
              <h4 class="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Details</h4>
              <p class="text-sm text-neutral-600 dark:text-neutral-400">
                {{ selectedEvent.details }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface TimelineEvent {
  date: string
  event: string
  reference?: string
  duration?: string
  details?: string
}

interface Timeline {
  title: string
  description?: string
  startDate?: string
  endDate?: string
  events: TimelineEvent[]
}

interface Props {
  timeline: Timeline
}

const props = defineProps<Props>()

const viewMode = ref<'horizontal' | 'vertical'>('horizontal')
const zoomLevel = ref(1)
const selectedEvent = ref<TimelineEvent | null>(null)
const showModal = ref(false)

const zoomIn = () => {
  if (zoomLevel.value < 3) {
    zoomLevel.value += 0.25
  }
}

const zoomOut = () => {
  if (zoomLevel.value > 1) {
    zoomLevel.value -= 0.25
  }
}

const selectEvent = (event: TimelineEvent) => {
  selectedEvent.value = event
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
  selectedEvent.value = null
}

const formatDate = (date: string) => {
  // Handle different date formats
  if (date.includes('BC')) {
    return date
  }
  if (date.includes('AD')) {
    return date
  }
  if (date === 'Creation' || date === 'Future' || date === 'Exodus') {
    return date
  }
  return date
}

const getEventColor = (event: TimelineEvent, index: number) => {
  // Color code based on event type or era
  if (event.date.includes('BC')) {
    return 'border-amber-500'
  }
  if (event.date.includes('AD') && parseInt(event.date) <= 100) {
    return 'border-blue-500'
  }
  if (event.date.includes('1844') || event.date.includes('Future')) {
    return 'border-purple-500'
  }

  // Default color rotation
  const colors = [
    'border-primary-500',
    'border-secondary-500',
    'border-accent-500',
    'border-green-500',
    'border-red-500',
    'border-indigo-500',
  ]
  return colors[index % colors.length]
}

// Auto-select first event on mobile
if (window.innerWidth < 768) {
  viewMode.value = 'vertical'
}
</script>

<style scoped>
/* Custom scrollbar for timeline */
.overflow-x-auto::-webkit-scrollbar {
  height: 6px;
}

.overflow-x-auto::-webkit-scrollbar-track {
  background: rgb(229 231 235);
}

.overflow-x-auto::-webkit-scrollbar-thumb {
  background: rgb(156 163 175);
  border-radius: 3px;
}

.overflow-x-auto::-webkit-scrollbar-thumb:hover {
  background: rgb(107 114 128);
}

/* Dark mode scrollbar */
.dark .overflow-x-auto::-webkit-scrollbar-track {
  background: rgb(64 64 64);
}

.dark .overflow-x-auto::-webkit-scrollbar-thumb {
  background: rgb(115 115 115);
}

.dark .overflow-x-auto::-webkit-scrollbar-thumb:hover {
  background: rgb(163 163 163);
}
</style>
