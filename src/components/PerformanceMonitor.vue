<template>
  <div v-if="showMetrics" class="performance-monitor" :class="monitorClasses">
    <!-- Performance Metrics -->
    <div class="metrics-container">
      <div class="metrics-header">
        <h3 class="metrics-title">Performance Metrics</h3>
        <div class="metrics-actions">
          <button
            @click="refreshMetrics"
            class="refresh-btn"
            :disabled="isRefreshing"
          >
            <svg
              :class="{ 'animate-spin': isRefreshing }"
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
          <button @click="toggleExpanded" class="expand-btn">
            <svg
              :class="{ 'rotate-180': isExpanded }"
              class="w-4 h-4 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Overall Score -->
      <div class="overall-score">
        <div class="score-circle" :class="scoreClasses">
          <span class="score-value">{{ scores.overall }}</span>
        </div>
        <div class="score-info">
          <h4 class="score-label">Overall Performance</h4>
          <p class="score-description">{{ getScoreDescription(scores.overall) }}</p>
        </div>
      </div>

      <!-- Detailed Metrics -->
      <div v-if="isExpanded" class="detailed-metrics">
        <div class="metrics-grid">
          <!-- First Contentful Paint -->
          <div class="metric-card">
            <div class="metric-header">
              <h5 class="metric-title">First Contentful Paint</h5>
              <span class="metric-score" :class="getScoreClass(scores.fcp)">{{ scores.fcp }}</span>
            </div>
            <div class="metric-value">{{ formatTime(metrics.firstContentfulPaint) }}</div>
            <div class="metric-bar">
              <div class="metric-fill" :style="{ width: `${scores.fcp}%` }"></div>
            </div>
          </div>

          <!-- Largest Contentful Paint -->
          <div class="metric-card">
            <div class="metric-header">
              <h5 class="metric-title">Largest Contentful Paint</h5>
              <span class="metric-score" :class="getScoreClass(scores.lcp)">{{ scores.lcp }}</span>
            </div>
            <div class="metric-value">{{ formatTime(metrics.largestContentfulPaint) }}</div>
            <div class="metric-bar">
              <div class="metric-fill" :style="{ width: `${scores.lcp}%` }"></div>
            </div>
          </div>

          <!-- First Input Delay -->
          <div class="metric-card">
            <div class="metric-header">
              <h5 class="metric-title">First Input Delay</h5>
              <span class="metric-score" :class="getScoreClass(scores.fid)">{{ scores.fid }}</span>
            </div>
            <div class="metric-value">{{ formatTime(metrics.firstInputDelay) }}</div>
            <div class="metric-bar">
              <div class="metric-fill" :style="{ width: `${scores.fid}%` }"></div>
            </div>
          </div>

          <!-- Cumulative Layout Shift -->
          <div class="metric-card">
            <div class="metric-header">
              <h5 class="metric-title">Cumulative Layout Shift</h5>
              <span class="metric-score" :class="getScoreClass(scores.cls)">{{ scores.cls }}</span>
            </div>
            <div class="metric-value">{{ formatCLS(metrics.cumulativeLayoutShift) }}</div>
            <div class="metric-bar">
              <div class="metric-fill" :style="{ width: `${scores.cls}%` }"></div>
            </div>
          </div>

          <!-- Page Load Time -->
          <div class="metric-card">
            <div class="metric-header">
              <h5 class="metric-title">Page Load Time</h5>
              <span class="metric-score" :class="getScoreClass(getLoadTimeScore())">{{ getLoadTimeScore() }}</span>
            </div>
            <div class="metric-value">{{ formatTime(metrics.pageLoadTime) }}</div>
            <div class="metric-bar">
              <div class="metric-fill" :style="{ width: `${getLoadTimeScore()}%` }"></div>
            </div>
          </div>

          <!-- Time to Interactive -->
          <div class="metric-card">
            <div class="metric-header">
              <h5 class="metric-title">Time to Interactive</h5>
              <span class="metric-score" :class="getScoreClass(getTTIScore())">{{ getTTIScore() }}</span>
            </div>
            <div class="metric-value">{{ formatTime(metrics.timeToInteractive) }}</div>
            <div class="metric-bar">
              <div class="metric-fill" :style="{ width: `${getTTIScore()}%` }"></div>
            </div>
          </div>
        </div>

        <!-- Recommendations -->
        <div v-if="recommendations.length > 0" class="recommendations">
          <h5 class="recommendations-title">Recommendations</h5>
          <ul class="recommendations-list">
            <li v-for="(recommendation, index) in recommendations" :key="index" class="recommendation-item">
              <div class="recommendation-icon">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <span class="recommendation-text">{{ recommendation }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { usePerformanceMonitoring } from '../composables/usePerformance'

interface Props {
  showMetrics?: boolean
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  theme?: 'light' | 'dark' | 'auto'
  compact?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  showMetrics: true,
  position: 'bottom-right',
  theme: 'auto',
  compact: false
})

// Performance monitoring
const { metrics, measurePerformance, getPerformanceScore } = usePerformanceMonitoring()

// State
const isExpanded = ref(false)
const isRefreshing = ref(false)

// Computed
const scores = computed(() => getPerformanceScore())

const monitorClasses = computed(() => {
  const classes = ['fixed z-50']
  
  switch (props.position) {
    case 'top-left':
      classes.push('top-4 left-4')
      break
    case 'top-right':
      classes.push('top-4 right-4')
      break
    case 'bottom-left':
      classes.push('bottom-4 left-4')
      break
    case 'bottom-right':
      classes.push('bottom-4 right-4')
      break
  }
  
  if (props.compact) {
    classes.push('w-64')
  } else {
    classes.push('w-80')
  }
  
  return classes
})

const scoreClasses = computed(() => {
  const score = scores.value.overall
  
  if (score >= 90) return 'score-excellent'
  if (score >= 70) return 'score-good'
  if (score >= 50) return 'score-needs-improvement'
  return 'score-poor'
})

const recommendations = computed(() => {
  const recs: string[] = []
  
  if (scores.value.fcp < 70) {
    recs.push('Optimize critical rendering path and reduce render-blocking resources')
  }
  
  if (scores.value.lcp < 70) {
    recs.push('Optimize images and reduce server response times')
  }
  
  if (scores.value.fid < 70) {
    recs.push('Reduce JavaScript execution time and optimize third-party scripts')
  }
  
  if (scores.value.cls < 70) {
    recs.push('Ensure images and ads have size attributes to prevent layout shifts')
  }
  
  if (metrics.value.pageLoadTime > 3000) {
    recs.push('Optimize bundle size and enable compression')
  }
  
  return recs
})

// Methods
const formatTime = (ms: number): string => {
  if (ms < 1000) return `${Math.round(ms)}ms`
  return `${(ms / 1000).toFixed(1)}s`
}

const formatCLS = (value: number): string => {
  return value.toFixed(3)
}

const getScoreClass = (score: number): string => {
  if (score >= 90) return 'score-excellent'
  if (score >= 70) return 'score-good'
  if (score >= 50) return 'score-needs-improvement'
  return 'score-poor'
}

const getScoreDescription = (score: number): string => {
  if (score >= 90) return 'Excellent performance'
  if (score >= 70) return 'Good performance'
  if (score >= 50) return 'Needs improvement'
  return 'Poor performance'
}

const getLoadTimeScore = (): number => {
  const loadTime = metrics.value.pageLoadTime
  if (loadTime < 1000) return 100
  if (loadTime < 2000) return 80
  if (loadTime < 3000) return 60
  if (loadTime < 4000) return 40
  return 20
}

const getTTIScore = (): number => {
  const tti = metrics.value.timeToInteractive
  if (tti < 2000) return 100
  if (tti < 3000) return 80
  if (tti < 4000) return 60
  if (tti < 5000) return 40
  return 20
}

const refreshMetrics = async () => {
  isRefreshing.value = true
  measurePerformance()
  
  // Wait a bit for metrics to update
  setTimeout(() => {
    isRefreshing.value = false
  }, 1000)
}

const toggleExpanded = () => {
  isExpanded.value = !isExpanded.value
}

// Lifecycle
onMounted(() => {
  measurePerformance()
})
</script>

<style scoped>
.performance-monitor {
  @apply bg-white dark:bg-neutral-900 rounded-lg shadow-xl border border-neutral-200 dark:border-neutral-800;
}

.metrics-container {
  @apply p-4;
}

.metrics-header {
  @apply flex items-center justify-between mb-4;
}

.metrics-title {
  @apply text-lg font-semibold text-neutral-900 dark:text-neutral-100;
}

.metrics-actions {
  @apply flex items-center space-x-2;
}

.refresh-btn,
.expand-btn {
  @apply p-1 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors;
}

.overall-score {
  @apply flex items-center space-x-4 mb-4;
}

.score-circle {
  @apply w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg;
}

.score-excellent {
  @apply bg-success-500;
}

.score-good {
  @apply bg-primary-500;
}

.score-needs-improvement {
  @apply bg-warning-500;
}

.score-poor {
  @apply bg-error-500;
}

.score-info {
  @apply flex-1;
}

.score-label {
  @apply font-semibold text-neutral-900 dark:text-neutral-100;
}

.score-description {
  @apply text-sm text-neutral-600 dark:text-neutral-400;
}

.detailed-metrics {
  @apply space-y-4;
}

.metrics-grid {
  @apply grid grid-cols-1 gap-3;
}

.metric-card {
  @apply p-3 bg-neutral-50 dark:bg-neutral-800 rounded-lg;
}

.metric-header {
  @apply flex items-center justify-between mb-2;
}

.metric-title {
  @apply text-sm font-medium text-neutral-900 dark:text-neutral-100;
}

.metric-score {
  @apply text-xs font-bold px-2 py-1 rounded;
}

.metric-value {
  @apply text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2;
}

.metric-bar {
  @apply w-full h-2 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden;
}

.metric-fill {
  @apply h-full transition-all duration-300;
}

.score-excellent .metric-fill {
  @apply bg-success-500;
}

.score-good .metric-fill {
  @apply bg-primary-500;
}

.score-needs-improvement .metric-fill {
  @apply bg-warning-500;
}

.score-poor .metric-fill {
  @apply bg-error-500;
}

.recommendations {
  @apply mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg;
}

.recommendations-title {
  @apply text-sm font-semibold text-blue-900 dark:text-blue-100 mb-2;
}

.recommendations-list {
  @apply space-y-2;
}

.recommendation-item {
  @apply flex items-start space-x-2;
}

.recommendation-icon {
  @apply w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0;
}

.recommendation-text {
  @apply text-xs text-blue-800 dark:text-blue-200;
}

/* Mobile optimizations */
@media (max-width: 640px) {
  .performance-monitor {
    @apply w-72;
  }
  
  .overall-score {
    @apply flex-col space-x-0 space-y-2;
  }
  
  .score-circle {
    @apply w-12 h-12 text-base;
  }
}

/* Animation */
.animate-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>
