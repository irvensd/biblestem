<template>
  <div class="study-categories" :class="containerClasses">
    <!-- Categories Header -->
    <div v-if="showHeader" class="categories-header" :class="headerClasses">
      <div class="header-content">
        <h2 v-if="title" class="categories-title" :class="titleClasses">
          {{ title }}
        </h2>
        <p v-if="description" class="categories-description" :class="descriptionClasses">
          {{ description }}
        </p>
      </div>
      <div v-if="showActions" class="header-actions">
        <button
          class="btn btn-outline btn-sm"
          @click="showCreateForm = true"
        >
          <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
          Add Category
        </button>
      </div>
    </div>

    <!-- Categories Grid -->
    <div class="categories-grid" :class="gridClasses">
      <div
        v-for="category in categories"
        :key="category.id"
        class="category-card"
        :class="cardClasses"
        @click="selectCategory(category)"
        @keydown="handleCardKeydown($event, category)"
      >
        <!-- Category Icon -->
        <div class="category-icon" :class="getCategoryIconClasses(category)">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              :d="getCategoryIconPath(category.icon)"
            />
          </svg>
        </div>

        <!-- Category Content -->
        <div class="category-content">
          <h3 class="category-name" :class="nameClasses">
            {{ category.name }}
          </h3>
          <p class="category-description" :class="descClasses">
            {{ category.description }}
          </p>
          <div class="category-stats">
            <span class="study-count" :class="countClasses">
              {{ category.studyCount }} {{ category.studyCount === 1 ? 'study' : 'studies' }}
            </span>
            <span class="category-date" :class="dateClasses">
              {{ formatDate(category.updatedAt) }}
            </span>
          </div>
        </div>

        <!-- Category Actions -->
        <div v-if="showActions" class="category-actions">
          <button
            class="action-btn"
            :aria-label="`Edit ${category.name} category`"
            @click.stop="editCategory(category)"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </button>
          <button
            class="action-btn"
            :aria-label="`Delete ${category.name} category`"
            @click.stop="deleteCategory(category)"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>

        <!-- Selection Indicator -->
        <div
          v-if="isSelected(category)"
          class="selection-indicator"
          :class="selectionClasses"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
          </svg>
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="categories.length === 0" class="empty-state" :class="emptyClasses">
        <svg class="w-12 h-12 text-neutral-400 dark:text-neutral-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
        <h3 class="empty-title">No categories yet</h3>
        <p class="empty-description">Create your first category to organize your studies</p>
        <button
          class="btn btn-primary"
          @click="showCreateForm = true"
        >
          Create Category
        </button>
      </div>
    </div>

    <!-- Create/Edit Category Modal -->
    <AccessibleModal
      :is-open="showCreateForm || showEditForm"
      :title="isEditing ? 'Edit Category' : 'Create Category'"
      size="md"
      @close="closeForm"
    >
      <AccessibleForm
        :title="isEditing ? 'Edit Category' : 'Create Category'"
        @submit="handleFormSubmit"
      >
        <div class="form-fields">
          <!-- Category Name -->
          <div class="form-group">
            <label for="category-name" class="form-label">Name</label>
            <input
              id="category-name"
              v-model="formData.name"
              type="text"
              class="form-input"
              placeholder="Enter category name"
              required
            />
          </div>

          <!-- Category Description -->
          <div class="form-group">
            <label for="category-description" class="form-label">Description</label>
            <textarea
              id="category-description"
              v-model="formData.description"
              class="form-textarea"
              placeholder="Enter category description"
              rows="3"
            ></textarea>
          </div>

          <!-- Category Color -->
          <div class="form-group">
            <label for="category-color" class="form-label">Color</label>
            <div class="color-picker">
              <div
                v-for="color in availableColors"
                :key="color.value"
                class="color-option"
                :class="{ 'selected': formData.color === color.value }"
                :style="{ backgroundColor: color.bg, color: color.text }"
                @click="formData.color = color.value"
              >
                <svg v-if="formData.color === color.value" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              </div>
            </div>
          </div>

          <!-- Category Icon -->
          <div class="form-group">
            <label for="category-icon" class="form-label">Icon</label>
            <div class="icon-picker">
              <div
                v-for="icon in availableIcons"
                :key="icon.name"
                class="icon-option"
                :class="{ 'selected': formData.icon === icon.name }"
                @click="formData.icon = icon.name"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="icon.path" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <template #actions>
          <button type="button" class="btn btn-outline" @click="closeForm">
            Cancel
          </button>
          <button type="submit" class="btn btn-primary">
            {{ isEditing ? 'Update' : 'Create' }} Category
          </button>
        </template>
      </AccessibleForm>
    </AccessibleModal>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useStudyOrganization, type StudyCategory } from '../composables/useStudyOrganization'
import { useAccessibility } from '../composables/useAccessibility'
import AccessibleModal from './AccessibleModal.vue'
import AccessibleForm from './AccessibleForm.vue'

interface Props {
  title?: string
  description?: string
  showHeader?: boolean
  showActions?: boolean
  selectable?: boolean
  multiple?: boolean
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'card' | 'minimal'
}

const props = withDefaults(defineProps<Props>(), {
  showHeader: true,
  showActions: true,
  selectable: false,
  multiple: false,
  size: 'md',
  variant: 'default'
})

const emit = defineEmits<{
  'category-selected': [category: StudyCategory]
  'category-created': [category: StudyCategory]
  'category-updated': [category: StudyCategory]
  'category-deleted': [category: StudyCategory]
}>()

// Composables
const {
  categories,
  createCategory,
  updateCategory,
  deleteCategory,
  initialize
} = useStudyOrganization()

const { announceSuccess, announceError } = useAccessibility()

// State
const selectedCategories = ref<StudyCategory[]>([])
const showCreateForm = ref(false)
const showEditForm = ref(false)
const editingCategory = ref<StudyCategory | null>(null)
const formData = ref({
  name: '',
  description: '',
  color: 'bg-blue-100 text-blue-800',
  icon: 'book'
})

// Computed
const isEditing = computed(() => showEditForm.value && editingCategory.value)

const containerClasses = computed(() => {
  const classes = ['study-categories']
  
  switch (props.variant) {
    case 'card':
      classes.push('bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800 p-6')
      break
    case 'minimal':
      classes.push('space-y-4')
      break
    default:
      classes.push('space-y-6')
  }
  
  return classes
})

const headerClasses = computed(() => {
  const classes = ['flex items-center justify-between']
  
  if (props.variant === 'card') {
    classes.push('pb-4 border-b border-neutral-200 dark:border-neutral-800')
  }
  
  return classes
})

const titleClasses = computed(() => {
  const classes = ['font-semibold text-neutral-900 dark:text-neutral-100']
  
  switch (props.size) {
    case 'sm':
      classes.push('text-lg')
      break
    case 'lg':
      classes.push('text-2xl')
      break
    default:
      classes.push('text-xl')
  }
  
  return classes
})

const descriptionClasses = computed(() => {
  return ['text-neutral-600 dark:text-neutral-400 mt-1']
})

const gridClasses = computed(() => {
  const classes = ['grid gap-4']
  
  switch (props.size) {
    case 'sm':
      classes.push('grid-cols-1 sm:grid-cols-2 lg:grid-cols-3')
      break
    case 'lg':
      classes.push('grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4')
      break
    default:
      classes.push('grid-cols-1 sm:grid-cols-2 lg:grid-cols-3')
  }
  
  return classes
})

const cardClasses = computed(() => {
  const classes = ['category-card']
  
  classes.push('bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800 p-4 transition-all duration-200')
  
  if (props.selectable) {
    classes.push('cursor-pointer hover:shadow-md hover:-translate-y-0.5')
  }
  
  if (props.variant === 'minimal') {
    classes.push('p-3')
  }
  
  return classes
})

const nameClasses = computed(() => {
  const classes = ['font-semibold text-neutral-900 dark:text-neutral-100']
  
  switch (props.size) {
    case 'sm':
      classes.push('text-sm')
      break
    case 'lg':
      classes.push('text-lg')
      break
    default:
      classes.push('text-base')
  }
  
  return classes
})

const descClasses = computed(() => {
  return ['text-sm text-neutral-600 dark:text-neutral-400 mt-1']
})

const countClasses = computed(() => {
  return ['text-xs font-medium text-neutral-500 dark:text-neutral-400']
})

const dateClasses = computed(() => {
  return ['text-xs text-neutral-400 dark:text-neutral-500']
})

const emptyClasses = computed(() => {
  return ['col-span-full flex flex-col items-center justify-center py-12 text-center']
})

const selectionClasses = computed(() => {
  return ['absolute top-2 right-2 w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center']
})

const availableColors = computed(() => [
  { value: 'bg-blue-100 text-blue-800', bg: '#dbeafe', text: '#1e40af' },
  { value: 'bg-green-100 text-green-800', bg: '#dcfce7', text: '#166534' },
  { value: 'bg-yellow-100 text-yellow-800', bg: '#fef3c7', text: '#92400e' },
  { value: 'bg-red-100 text-red-800', bg: '#fee2e2', text: '#991b1b' },
  { value: 'bg-purple-100 text-purple-800', bg: '#e9d5ff', text: '#6b21a8' },
  { value: 'bg-pink-100 text-pink-800', bg: '#fce7f3', text: '#be185d' },
  { value: 'bg-indigo-100 text-indigo-800', bg: '#e0e7ff', text: '#3730a3' },
  { value: 'bg-gray-100 text-gray-800', bg: '#f3f4f6', text: '#374151' }
])

const availableIcons = computed(() => [
  { name: 'book', path: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
  { name: 'sun', path: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z' },
  { name: 'eye', path: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' },
  { name: 'clock', path: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
  { name: 'academic-cap', path: 'M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' },
  { name: 'heart', path: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' },
  { name: 'star', path: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z' },
  { name: 'home', path: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' }
])

// Methods
const selectCategory = (category: StudyCategory) => {
  if (!props.selectable) return
  
  if (props.multiple) {
    const index = selectedCategories.value.findIndex(cat => cat.id === category.id)
    if (index >= 0) {
      selectedCategories.value.splice(index, 1)
    } else {
      selectedCategories.value.push(category)
    }
  } else {
    selectedCategories.value = [category]
  }
  
  emit('category-selected', category)
}

const isSelected = (category: StudyCategory): boolean => {
  return selectedCategories.value.some(cat => cat.id === category.id)
}

const editCategory = (category: StudyCategory) => {
  editingCategory.value = category
  formData.value = {
    name: category.name,
    description: category.description,
    color: category.color,
    icon: category.icon
  }
  showEditForm.value = true
}

const deleteCategory = async (category: StudyCategory) => {
  if (confirm(`Are you sure you want to delete "${category.name}"? This will move all bookmarks to uncategorized.`)) {
    try {
      await deleteCategory(category.id)
      announceSuccess(`Category "${category.name}" deleted`)
      emit('category-deleted', category)
    } catch (error) {
      announceError('Failed to delete category')
      console.error('Category deletion error:', error)
    }
  }
}

const handleFormSubmit = async (data: Record<string, any>) => {
  try {
    if (isEditing.value && editingCategory.value) {
      await updateCategory(editingCategory.value.id, formData.value)
      announceSuccess(`Category "${formData.value.name}" updated`)
      emit('category-updated', editingCategory.value)
    } else {
      const newCategory = await createCategory(formData.value)
      announceSuccess(`Category "${formData.value.name}" created`)
      emit('category-created', newCategory)
    }
    
    closeForm()
  } catch (error) {
    announceError('Failed to save category')
    console.error('Category save error:', error)
  }
}

const closeForm = () => {
  showCreateForm.value = false
  showEditForm.value = false
  editingCategory.value = null
  formData.value = {
    name: '',
    description: '',
    color: 'bg-blue-100 text-blue-800',
    icon: 'book'
  }
}

const handleCardKeydown = (event: KeyboardEvent, category: StudyCategory) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    selectCategory(category)
  }
}

const getCategoryIconClasses = (category: StudyCategory) => {
  return ['w-12 h-12 rounded-lg flex items-center justify-center', category.color]
}

const getCategoryIconPath = (iconName: string): string => {
  const icon = availableIcons.value.find(i => i.name === iconName)
  return icon?.path || availableIcons.value[0].path
}

const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(date)
}

// Lifecycle
onMounted(async () => {
  await initialize()
})
</script>

<style scoped>
.study-categories {
  @apply relative;
}

.categories-header {
  @apply flex-shrink-0;
}

.categories-title {
  @apply flex-1;
}

.categories-description {
  @apply flex-1;
}

.header-actions {
  @apply flex-shrink-0;
}

.categories-grid {
  @apply flex-1;
}

.category-card {
  @apply relative cursor-pointer;
}

.category-icon {
  @apply flex-shrink-0;
}

.category-content {
  @apply flex-1 mt-3;
}

.category-name {
  @apply flex-1;
}

.category-description {
  @apply flex-1;
}

.category-stats {
  @apply flex items-center justify-between mt-2;
}

.study-count {
  @apply flex-shrink-0;
}

.category-date {
  @apply flex-shrink-0;
}

.category-actions {
  @apply absolute top-2 right-2 flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200;
}

.action-btn {
  @apply p-1 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors focus-ring;
}

.selection-indicator {
  @apply absolute top-2 right-2;
}

.empty-state {
  @apply flex-shrink-0;
}

.empty-title {
  @apply text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2;
}

.empty-description {
  @apply text-neutral-600 dark:text-neutral-400 mb-4;
}

.form-fields {
  @apply space-y-4;
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

.color-picker {
  @apply grid grid-cols-4 gap-2;
}

.color-option {
  @apply w-8 h-8 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-110;
}

.icon-picker {
  @apply grid grid-cols-5 gap-2;
}

.icon-option {
  @apply p-2 rounded-lg border border-neutral-300 dark:border-neutral-600 cursor-pointer transition-all duration-200 hover:bg-neutral-100 dark:hover:bg-neutral-800;
}

.icon-option.selected {
  @apply border-primary-500 bg-primary-50 dark:bg-primary-900/20;
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

/* Focus ring */
.focus-ring {
  @apply focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-neutral-900;
}

/* High contrast mode */
@media (prefers-contrast: high) {
  .category-card {
    @apply border-2 border-neutral-900 dark:border-neutral-100;
  }
  
  .color-option,
  .icon-option {
    @apply border-2 border-neutral-900 dark:border-neutral-100;
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .category-card,
  .color-option,
  .icon-option {
    @apply transition-none;
  }
  
  .category-card:hover {
    @apply transform-none;
  }
}

/* Mobile optimizations */
@media (max-width: 640px) {
  .categories-grid {
    @apply grid-cols-1;
  }
  
  .header-actions {
    @apply mt-2;
  }
  
  .color-picker {
    @apply grid-cols-4;
  }
  
  .icon-picker {
    @apply grid-cols-4;
  }
}

/* Print styles */
@media print {
  .study-categories {
    @apply border-none shadow-none;
  }
  
  .category-actions,
  .header-actions {
    @apply hidden;
  }
}
</style>
