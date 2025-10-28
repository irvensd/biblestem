<template>
  <div class="study-bookmark" :class="bookmarkClasses">
    <!-- Bookmark Button -->
    <button
      ref="bookmarkButtonRef"
      class="bookmark-button"
      :class="buttonClasses"
      :aria-label="buttonLabel"
      :aria-pressed="isBookmarked"
      :disabled="isLoading"
      @click="handleToggle"
      @keydown="handleKeydown"
    >
      <!-- Bookmark Icon -->
      <svg
        v-if="!isLoading"
        class="bookmark-icon"
        :class="iconClasses"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          v-if="isBookmarked"
          d="M5 4a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 20V4z"
        />
        <path
          v-else
          d="M5 4a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 20V4z"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        />
      </svg>

      <!-- Loading Spinner -->
      <div v-else class="bookmark-spinner" :class="spinnerClasses">
        <div class="spinner-ring"></div>
      </div>

      <!-- Bookmark Count -->
      <span v-if="showCount && bookmarkCount > 0" class="bookmark-count" :class="countClasses">
        {{ bookmarkCount }}
      </span>
    </button>

    <!-- Bookmark Menu -->
    <div
      v-if="showMenu && isBookmarked"
      class="bookmark-menu"
      :class="menuClasses"
      :style="menuStyles"
    >
      <!-- Menu Header -->
      <div class="menu-header">
        <h3 class="menu-title">Bookmark Options</h3>
        <button
          class="menu-close"
          :aria-label="'Close bookmark menu'"
          @click="closeMenu"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Bookmark Details -->
      <div class="menu-content">
        <!-- Title -->
        <div class="form-group">
          <label for="bookmark-title" class="form-label">Title</label>
          <input
            id="bookmark-title"
            v-model="bookmarkTitle"
            type="text"
            class="form-input"
            placeholder="Enter bookmark title"
            @blur="updateBookmark"
          />
        </div>

        <!-- Description -->
        <div class="form-group">
          <label for="bookmark-description" class="form-label">Description</label>
          <textarea
            id="bookmark-description"
            v-model="bookmarkDescription"
            class="form-textarea"
            placeholder="Enter bookmark description"
            rows="3"
            @blur="updateBookmark"
          ></textarea>
        </div>

        <!-- Category -->
        <div class="form-group">
          <label for="bookmark-category" class="form-label">Category</label>
          <select
            id="bookmark-category"
            v-model="selectedCategoryId"
            class="form-select"
            @change="updateBookmark"
          >
            <option value="">No category</option>
            <option
              v-for="category in categories"
              :key="category.id"
              :value="category.id"
            >
              {{ category.name }}
            </option>
          </select>
        </div>

        <!-- Tags -->
        <div class="form-group">
          <label for="bookmark-tags" class="form-label">Tags</label>
          <div class="tags-input">
            <div class="tags-list">
              <span
                v-for="tag in bookmarkTags"
                :key="tag"
                class="tag"
                :class="getTagColor(tag)"
              >
                {{ tag }}
                <button
                  class="tag-remove"
                  :aria-label="`Remove tag ${tag}`"
                  @click="removeTag(tag)"
                >
                  <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </span>
            </div>
            <input
              id="bookmark-tags"
              v-model="newTag"
              type="text"
              class="form-input"
              placeholder="Add tags (press Enter)"
              @keydown="handleTagKeydown"
              @blur="addTag"
            />
          </div>
        </div>

        <!-- Actions -->
        <div class="menu-actions">
          <button
            class="btn btn-outline btn-sm"
            @click="removeBookmark"
          >
            Remove Bookmark
          </button>
          <button
            class="btn btn-primary btn-sm"
            @click="closeMenu"
          >
            Done
          </button>
        </div>
      </div>
    </div>

    <!-- Backdrop -->
    <div
      v-if="showMenu"
      class="bookmark-backdrop"
      @click="closeMenu"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { useStudyOrganization } from '../composables/useStudyOrganization'
import { useAccessibility } from '../composables/useAccessibility'

interface Props {
  studyId: string
  lessonId?: string
  title?: string
  description?: string
  variant?: 'default' | 'minimal' | 'floating'
  size?: 'sm' | 'md' | 'lg'
  showCount?: boolean
  showMenu?: boolean
  position?: 'top' | 'bottom' | 'left' | 'right'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'md',
  showCount: false,
  showMenu: true,
  position: 'bottom'
})

const emit = defineEmits<{
  'bookmark-added': [bookmark: any]
  'bookmark-removed': [bookmark: any]
  'bookmark-updated': [bookmark: any]
}>()

// Composables
const {
  categories,
  userBookmarks,
  isBookmarked: checkIsBookmarked,
  getBookmark,
  toggleBookmark,
  addBookmark,
  updateBookmark: updateBookmarkData,
  removeBookmark: removeBookmarkData,
  getTagColor
} = useStudyOrganization()

const { announceSuccess, announceError } = useAccessibility()

// Refs
const bookmarkButtonRef = ref<HTMLButtonElement | null>(null)
const isLoading = ref(false)
const showMenu = ref(false)
const bookmarkTitle = ref('')
const bookmarkDescription = ref('')
const selectedCategoryId = ref('')
const bookmarkTags = ref<string[]>([])
const newTag = ref('')

// Computed
const isBookmarked = computed(() => checkIsBookmarked(props.studyId, props.lessonId))

const currentBookmark = computed(() => getBookmark(props.studyId, props.lessonId))

const bookmarkCount = computed(() => {
  return userBookmarks.value.filter(bookmark => bookmark.studyId === props.studyId).length
})

const buttonLabel = computed(() => {
  if (isLoading.value) return 'Processing bookmark...'
  return isBookmarked.value ? 'Remove bookmark' : 'Add bookmark'
})

const bookmarkClasses = computed(() => {
  const classes = ['relative']
  
  if (props.variant === 'floating') {
    classes.push('fixed z-50')
  }
  
  return classes
})

const buttonClasses = computed(() => {
  const classes = ['bookmark-button']
  
  // Base classes
  classes.push('inline-flex items-center justify-center rounded-lg transition-all duration-200 focus-ring')
  
  // Variant classes
  switch (props.variant) {
    case 'minimal':
      classes.push('bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800')
      break
    case 'floating':
      classes.push('bg-white dark:bg-neutral-900 shadow-lg hover:shadow-xl border border-neutral-200 dark:border-neutral-800')
      break
    default:
      classes.push('bg-primary-100 text-primary-600 hover:bg-primary-200 dark:bg-primary-900/20 dark:text-primary-400 dark:hover:bg-primary-900/40')
  }
  
  // Size classes
  switch (props.size) {
    case 'sm':
      classes.push('p-2 text-sm')
      break
    case 'lg':
      classes.push('p-3 text-lg')
      break
    default:
      classes.push('p-2.5 text-base')
  }
  
  // State classes
  if (isBookmarked.value) {
    classes.push('text-primary-600 dark:text-primary-400')
  }
  
  if (isLoading.value) {
    classes.push('opacity-50 cursor-not-allowed')
  }
  
  return classes
})

const iconClasses = computed(() => {
  const classes = []
  
  switch (props.size) {
    case 'sm':
      classes.push('w-4 h-4')
      break
    case 'lg':
      classes.push('w-6 h-6')
      break
    default:
      classes.push('w-5 h-5')
  }
  
  return classes
})

const spinnerClasses = computed(() => {
  const classes = []
  
  switch (props.size) {
    case 'sm':
      classes.push('w-4 h-4')
      break
    case 'lg':
      classes.push('w-6 h-6')
      break
    default:
      classes.push('w-5 h-5')
  }
  
  return classes
})

const countClasses = computed(() => {
  return ['ml-1 text-xs font-medium']
})

const menuClasses = computed(() => {
  const classes = ['bookmark-menu']
  
  // Position classes
  switch (props.position) {
    case 'top':
      classes.push('bottom-full mb-2')
      break
    case 'left':
      classes.push('right-full mr-2')
      break
    case 'right':
      classes.push('left-full ml-2')
      break
    default:
      classes.push('top-full mt-2')
  }
  
  return classes
})

const menuStyles = computed(() => {
  const styles: Record<string, string> = {}
  
  if (props.variant === 'floating') {
    styles.position = 'fixed'
    styles.top = '50%'
    styles.left = '50%'
    styles.transform = 'translate(-50%, -50%)'
  }
  
  return styles
})

// Methods
const handleToggle = async () => {
  if (isLoading.value) return
  
  isLoading.value = true
  
  try {
    await toggleBookmark(props.studyId, props.lessonId, props.title)
    
    if (isBookmarked.value) {
      announceSuccess('Bookmark added')
      emit('bookmark-added', currentBookmark.value)
    } else {
      announceSuccess('Bookmark removed')
      emit('bookmark-removed', currentBookmark.value)
    }
  } catch (error) {
    announceError('Failed to update bookmark')
    console.error('Bookmark toggle error:', error)
  } finally {
    isLoading.value = false
  }
}

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    handleToggle()
  } else if (event.key === 'Escape') {
    closeMenu()
  }
}

const openMenu = () => {
  if (!props.showMenu || !isBookmarked.value) return
  
  showMenu.value = true
  
  // Load current bookmark data
  if (currentBookmark.value) {
    bookmarkTitle.value = currentBookmark.value.title
    bookmarkDescription.value = currentBookmark.value.description || ''
    selectedCategoryId.value = currentBookmark.value.categoryId || ''
    bookmarkTags.value = [...currentBookmark.value.tags]
  }
}

const closeMenu = () => {
  showMenu.value = false
  newTag.value = ''
}

const updateBookmark = async () => {
  if (!currentBookmark.value) return
  
  try {
    await updateBookmarkData(currentBookmark.value.id, {
      title: bookmarkTitle.value,
      description: bookmarkDescription.value,
      categoryId: selectedCategoryId.value || undefined,
      tags: bookmarkTags.value
    })
    
    announceSuccess('Bookmark updated')
    emit('bookmark-updated', currentBookmark.value)
  } catch (error) {
    announceError('Failed to update bookmark')
    console.error('Bookmark update error:', error)
  }
}

const removeBookmark = async () => {
  if (!currentBookmark.value) return
  
  try {
    await removeBookmarkData(currentBookmark.value.id)
    announceSuccess('Bookmark removed')
    emit('bookmark-removed', currentBookmark.value)
    closeMenu()
  } catch (error) {
    announceError('Failed to remove bookmark')
    console.error('Bookmark removal error:', error)
  }
}

const addTag = () => {
  const tag = newTag.value.trim()
  if (tag && !bookmarkTags.value.includes(tag)) {
    bookmarkTags.value.push(tag)
    newTag.value = ''
    updateBookmark()
  }
}

const removeTag = (tag: string) => {
  bookmarkTags.value = bookmarkTags.value.filter(t => t !== tag)
  updateBookmark()
}

const handleTagKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Enter') {
    event.preventDefault()
    addTag()
  } else if (event.key === 'Backspace' && newTag.value === '' && bookmarkTags.value.length > 0) {
    bookmarkTags.value.pop()
    updateBookmark()
  }
}

// Watch for bookmark changes
watch(isBookmarked, (newValue) => {
  if (newValue && props.showMenu) {
    openMenu()
  }
})

// Lifecycle
onMounted(() => {
  // Initialize bookmark data if already bookmarked
  if (isBookmarked.value && currentBookmark.value) {
    bookmarkTitle.value = currentBookmark.value.title
    bookmarkDescription.value = currentBookmark.value.description || ''
    selectedCategoryId.value = currentBookmark.value.categoryId || ''
    bookmarkTags.value = [...currentBookmark.value.tags]
  }
})

onUnmounted(() => {
  // Cleanup if needed
})
</script>

<style scoped>
.study-bookmark {
  @apply relative;
}

.bookmark-button {
  @apply relative;
}

.bookmark-icon {
  @apply transition-colors duration-200;
}

.bookmark-spinner {
  @apply relative;
}

.spinner-ring {
  @apply w-full h-full border-2 border-transparent border-t-current rounded-full animate-spin;
}

.bookmark-count {
  @apply flex-shrink-0;
}

.bookmark-menu {
  @apply absolute z-50 w-80 bg-white dark:bg-neutral-900 rounded-lg shadow-xl border border-neutral-200 dark:border-neutral-800;
}

.menu-header {
  @apply flex items-center justify-between p-4 border-b border-neutral-200 dark:border-neutral-800;
}

.menu-title {
  @apply text-lg font-semibold text-neutral-900 dark:text-neutral-100;
}

.menu-close {
  @apply p-1 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors focus-ring;
}

.menu-content {
  @apply p-4 space-y-4;
}

.form-group {
  @apply space-y-2;
}

.form-label {
  @apply block text-sm font-medium text-neutral-700 dark:text-neutral-300;
}

.form-input {
  @apply block w-full px-3 py-2 text-sm border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 placeholder-neutral-500 dark:placeholder-neutral-400 focus-ring focus:border-primary-500;
}

.form-textarea {
  @apply form-input resize-none;
}

.form-select {
  @apply form-input pr-10;
}

.tags-input {
  @apply space-y-2;
}

.tags-list {
  @apply flex flex-wrap gap-2;
}

.tag {
  @apply inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium;
}

.tag-remove {
  @apply p-0.5 rounded hover:bg-black/10 dark:hover:bg-white/10 transition-colors;
}

.menu-actions {
  @apply flex items-center justify-end space-x-2 pt-4 border-t border-neutral-200 dark:border-neutral-800;
}

.btn {
  @apply inline-flex items-center justify-center px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 focus-ring;
}

.btn-outline {
  @apply bg-transparent text-neutral-700 border border-neutral-300 hover:bg-neutral-50 dark:text-neutral-300 dark:border-neutral-600 dark:hover:bg-neutral-800;
}

.btn-primary {
  @apply bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800 shadow-sm hover:shadow-md;
}

.btn-sm {
  @apply px-2 py-1 text-xs;
}

.bookmark-backdrop {
  @apply fixed inset-0 z-40 bg-black/20 backdrop-blur-sm;
}

/* Focus ring */
.focus-ring {
  @apply focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-neutral-900;
}

/* High contrast mode */
@media (prefers-contrast: high) {
  .bookmark-menu {
    @apply border-2 border-neutral-900 dark:border-neutral-100;
  }
  
  .bookmark-button {
    @apply border border-neutral-900 dark:border-neutral-100;
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .bookmark-button,
  .spinner-ring {
    @apply transition-none animate-none;
  }
}

/* Mobile optimizations */
@media (max-width: 640px) {
  .bookmark-menu {
    @apply w-72;
  }
  
  .menu-content {
    @apply p-3 space-y-3;
  }
  
  .menu-actions {
    @apply flex-col space-x-0 space-y-2;
  }
  
  .menu-actions .btn {
    @apply w-full;
  }
}

/* Print styles */
@media print {
  .study-bookmark {
    @apply hidden;
  }
}
</style>
