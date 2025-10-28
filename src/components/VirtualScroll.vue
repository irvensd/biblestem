<template>
  <div
    ref="containerRef"
    class="virtual-scroll-container"
    :class="containerClasses"
    :style="containerStyles"
    @scroll="handleScroll"
  >
    <!-- Scrollable Content -->
    <div
      class="virtual-scroll-content"
      :style="contentStyles"
    >
      <!-- Visible Items -->
      <div
        v-for="(item, index) in visibleItems"
        :key="getItemKey(item, visibleStartIndex + index)"
        class="virtual-scroll-item"
        :class="itemClasses"
        :style="getItemStyles(visibleStartIndex + index)"
      >
        <slot
          :item="item"
          :index="visibleStartIndex + index"
          :isVisible="true"
        />
      </div>
    </div>

    <!-- Loading States -->
    <div
      v-if="isLoading && showLoading"
      class="virtual-scroll-loading"
      :class="loadingClasses"
    >
      <slot name="loading">
        <div class="flex items-center justify-center p-4">
          <div class="spinner-ring"></div>
          <span class="ml-2 text-sm text-neutral-600 dark:text-neutral-400">Loading...</span>
        </div>
      </slot>
    </div>

    <!-- Empty State -->
    <div
      v-if="!isLoading && items.length === 0 && showEmpty"
      class="virtual-scroll-empty"
      :class="emptyClasses"
    >
      <slot name="empty">
        <div class="flex flex-col items-center justify-center p-8 text-center">
          <svg class="w-12 h-12 text-neutral-400 dark:text-neutral-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <p class="text-neutral-600 dark:text-neutral-400">No items to display</p>
        </div>
      </slot>
    </div>

    <!-- Scrollbar -->
    <div
      v-if="showScrollbar"
      class="virtual-scroll-scrollbar"
      :class="scrollbarClasses"
      :style="scrollbarStyles"
    >
      <div
        class="scrollbar-thumb"
        :style="scrollbarThumbStyles"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useVirtualScrolling } from './usePerformance'

interface Props<T> {
  items: T[]
  itemHeight: number
  containerHeight?: number
  overscan?: number
  isLoading?: boolean
  showLoading?: boolean
  showEmpty?: boolean
  showScrollbar?: boolean
  itemKey?: string | ((item: T, index: number) => string | number)
  itemSpacing?: number
  horizontal?: boolean
  reverse?: boolean
  stickyHeader?: boolean
  stickyFooter?: boolean
  headerHeight?: number
  footerHeight?: number
}

const props = withDefaults(defineProps<Props<any>>(), {
  containerHeight: 400,
  overscan: 5,
  isLoading: false,
  showLoading: true,
  showEmpty: true,
  showScrollbar: true,
  itemKey: 'id',
  itemSpacing: 0,
  horizontal: false,
  reverse: false,
  stickyHeader: false,
  stickyFooter: false,
  headerHeight: 0,
  footerHeight: 0
})

const emit = defineEmits<{
  'scroll': [scrollTop: number, scrollLeft: number]
  'item-visible': [item: any, index: number]
  'item-hidden': [item: any, index: number]
  'load-more': []
}>()

// Refs
const containerRef = ref<HTMLElement | null>(null)
const scrollTop = ref(0)
const scrollLeft = ref(0)

// Virtual scrolling setup
const {
  visibleItems,
  visibleStartIndex,
  visibleEndIndex,
  totalHeight,
  offsetY,
  updateVisibleItems
} = useVirtualScrolling(props.items, {
  itemHeight: props.itemHeight,
  containerHeight: props.containerHeight,
  overscan: props.overscan
})

// Computed
const containerClasses = computed(() => {
  const classes = ['relative']
  
  if (props.horizontal) {
    classes.push('flex')
  } else {
    classes.push('overflow-y-auto overflow-x-hidden')
  }
  
  if (props.showScrollbar) {
    classes.push('scrollbar-thin')
  } else {
    classes.push('scrollbar-none')
  }
  
  return classes
})

const containerStyles = computed(() => {
  const styles: Record<string, string> = {}
  
  if (props.horizontal) {
    styles.width = `${props.containerHeight}px`
    styles.height = `${props.itemHeight}px`
  } else {
    styles.height = `${props.containerHeight}px`
  }
  
  return styles
})

const contentStyles = computed(() => {
  const styles: Record<string, string> = {}
  
  if (props.horizontal) {
    styles.width = `${totalHeight.value}px`
    styles.transform = `translateX(${offsetY.value}px)`
  } else {
    styles.height = `${totalHeight.value}px`
    styles.transform = `translateY(${offsetY.value}px)`
  }
  
  return styles
})

const itemClasses = computed(() => {
  const classes = ['absolute']
  
  if (props.horizontal) {
    classes.push('top-0')
  } else {
    classes.push('left-0 right-0')
  }
  
  return classes
})

const loadingClasses = computed(() => {
  const classes = ['absolute inset-0 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm flex items-center justify-center']
  
  if (props.stickyHeader) {
    classes.push('top-' + props.headerHeight)
  }
  
  if (props.stickyFooter) {
    classes.push('bottom-' + props.footerHeight)
  }
  
  return classes
})

const emptyClasses = computed(() => {
  const classes = ['absolute inset-0 flex items-center justify-center']
  
  if (props.stickyHeader) {
    classes.push('top-' + props.headerHeight)
  }
  
  if (props.stickyFooter) {
    classes.push('bottom-' + props.footerHeight)
  }
  
  return classes
})

const scrollbarClasses = computed(() => {
  const classes = ['absolute right-0 top-0 bottom-0 w-2 bg-neutral-200 dark:bg-neutral-700 rounded']
  
  if (props.stickyHeader) {
    classes.push('top-' + props.headerHeight)
  }
  
  if (props.stickyFooter) {
    classes.push('bottom-' + props.footerHeight)
  }
  
  return classes
})

const scrollbarStyles = computed(() => {
  const styles: Record<string, string> = {}
  
  if (props.stickyHeader) {
    styles.top = `${props.headerHeight}px`
  }
  
  if (props.stickyFooter) {
    styles.bottom = `${props.footerHeight}px`
  }
  
  return styles
})

const scrollbarThumbStyles = computed(() => {
  const visibleHeight = props.containerHeight - (props.stickyHeader ? props.headerHeight : 0) - (props.stickyFooter ? props.footerHeight : 0)
  const thumbHeight = Math.max(20, (visibleHeight / totalHeight.value) * visibleHeight)
  const thumbTop = (scrollTop.value / totalHeight.value) * visibleHeight
  
  return {
    height: `${thumbHeight}px`,
    transform: `translateY(${thumbTop}px)`,
    background: 'rgb(156 163 175)',
    borderRadius: '4px',
    cursor: 'pointer'
  }
})

// Methods
const getItemKey = (item: any, index: number): string | number => {
  if (typeof props.itemKey === 'function') {
    return props.itemKey(item, index)
  }
  return item[props.itemKey] || index
}

const getItemStyles = (index: number): Record<string, string> => {
  const styles: Record<string, string> = {}
  
  if (props.horizontal) {
    styles.left = `${index * (props.itemHeight + props.itemSpacing)}px`
    styles.width = `${props.itemHeight}px`
  } else {
    styles.top = `${index * (props.itemHeight + props.itemSpacing)}px`
    styles.height = `${props.itemHeight}px`
  }
  
  return styles
}

const handleScroll = (event: Event) => {
  const target = event.target as HTMLElement
  
  if (props.horizontal) {
    scrollLeft.value = target.scrollLeft
  } else {
    scrollTop.value = target.scrollTop
  }
  
  emit('scroll', scrollTop.value, scrollLeft.value)
  
  // Check if we need to load more items
  const scrollPercentage = scrollTop.value / (totalHeight.value - props.containerHeight)
  if (scrollPercentage > 0.8 && !props.isLoading) {
    emit('load-more')
  }
  
  // Emit item visibility events
  visibleItems.value.forEach((item, index: number) => {
    const actualIndex = visibleStartIndex.value + index
    emit('item-visible', item, actualIndex)
  })
}

// Watch for changes
watch(() => props.items, () => {
  updateVisibleItems()
}, { deep: true })

watch(() => props.itemHeight, () => {
  updateVisibleItems()
})

// Lifecycle
onMounted(() => {
  updateVisibleItems()
})

onUnmounted(() => {
  // Cleanup if needed
})
</script>

<style scoped>
.virtual-scroll-container {
  @apply relative;
}

.virtual-scroll-content {
  @apply relative;
}

.virtual-scroll-item {
  @apply transition-all duration-200;
}

.virtual-scroll-loading {
  @apply z-10;
}

.virtual-scroll-empty {
  @apply z-10;
}

.virtual-scroll-scrollbar {
  @apply z-20;
}

.scrollbar-thumb {
  @apply transition-all duration-200 hover:bg-neutral-400 dark:hover:bg-neutral-500;
}

.spinner-ring {
  @apply w-6 h-6 border-2 border-transparent border-t-primary-600 rounded-full animate-spin;
}

/* Scrollbar styles */
.scrollbar-thin {
  scrollbar-width: thin;
}

.scrollbar-thin::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

.scrollbar-thin::-webkit-scrollbar-track {
  background: transparent;
}

.scrollbar-thin::-webkit-scrollbar-thumb {
  background: rgb(156 163 175);
  border-radius: 3px;
}

.scrollbar-thin::-webkit-scrollbar-thumb:hover {
  background: rgb(107 114 128);
}

.scrollbar-none {
  scrollbar-width: none;
}

.scrollbar-none::-webkit-scrollbar {
  display: none;
}

/* Dark mode scrollbar */
.dark .scrollbar-thin::-webkit-scrollbar-thumb {
  background: rgb(75 85 99);
}

.dark .scrollbar-thin::-webkit-scrollbar-thumb:hover {
  background: rgb(107 114 128);
}

/* Mobile optimizations */
@media (max-width: 640px) {
  .virtual-scroll-container {
    @apply touch-manipulation;
  }
  
  .virtual-scroll-scrollbar {
    @apply w-1;
  }
}

/* Print styles */
@media print {
  .virtual-scroll-container {
    @apply overflow-visible;
  }
  
  .virtual-scroll-content {
    @apply transform-none;
  }
  
  .virtual-scroll-item {
    @apply relative;
  }
}
</style>
