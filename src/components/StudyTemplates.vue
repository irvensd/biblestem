<template>
  <div class="card p-4 sm:p-6">
    <div class="flex items-center justify-between mb-4 sm:mb-6">
      <h2 class="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-100">Study Templates</h2>
      <button @click="showAllTemplates = true" class="text-primary-600 hover:text-primary-700 font-medium text-sm">
        View All →
      </button>
    </div>

    <p class="text-neutral-600 dark:text-neutral-400 text-sm mb-4">
      Download structured worksheets to guide your personal Bible study
    </p>

    <!-- Featured Templates -->
    <div class="space-y-3">
      <div
        v-for="template in featuredTemplates"
        :key="template.id"
        class="group p-4 border border-neutral-200 dark:border-neutral-700 rounded-xl hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-200 cursor-pointer"
        @click="showTemplateDetail(template)"
      >
        <div class="flex items-start space-x-3">
          <div 
            class="w-10 h-10 rounded-lg bg-gradient-to-br flex items-center justify-center flex-shrink-0"
            :class="template.color"
          >
            <span class="text-lg">{{ template.icon }}</span>
          </div>
          
          <div class="flex-1 min-w-0">
            <div class="flex items-start justify-between">
              <div class="flex-1">
                <h4 class="font-semibold text-neutral-900 dark:text-neutral-100 text-sm">
                  {{ template.title }}
                </h4>
                <p class="text-xs text-neutral-600 dark:text-neutral-400 mt-1 line-clamp-2">
                  {{ template.description }}
                </p>
                
                <div class="flex items-center space-x-3 mt-2">
                  <span 
                    class="text-xs px-2 py-1 rounded"
                    :class="getDifficultyClass(template.difficulty)"
                  >
                    {{ template.difficulty.charAt(0).toUpperCase() + template.difficulty.slice(1) }}
                  </span>
                  <span class="text-xs text-neutral-500 dark:text-neutral-500">
                    {{ template.estimatedTime }}
                  </span>
                  <span 
                    v-if="template.isPremium"
                    class="text-xs px-2 py-1 rounded bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400"
                  >
                    Premium
                  </span>
                </div>
              </div>
              
              <button
                @click.stop="downloadTemplate(template.id)"
                class="ml-3 px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded hover:bg-primary-200 dark:hover:bg-primary-900/50 transition-colors"
                :disabled="template.isPremium && !authStore.isPremium"
              >
                {{ template.isPremium && !authStore.isPremium ? 'Premium' : 'Download' }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Template Detail Modal -->
    <div v-if="selectedTemplate" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" @click="selectedTemplate = null">
      <div class="bg-white dark:bg-neutral-800 rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" @click.stop>
        <div class="p-6 border-b border-neutral-200 dark:border-neutral-700">
          <div class="flex items-start justify-between">
            <div class="flex items-start space-x-3">
              <div 
                class="w-12 h-12 rounded-lg bg-gradient-to-br flex items-center justify-center"
                :class="selectedTemplate.color"
              >
                <span class="text-xl">{{ selectedTemplate.icon }}</span>
              </div>
              <div>
                <h3 class="text-xl font-bold text-neutral-900 dark:text-neutral-100">
                  {{ selectedTemplate.title }}
                </h3>
                <p class="text-neutral-600 dark:text-neutral-400 text-sm mt-1">
                  {{ selectedTemplate.description }}
                </p>
              </div>
            </div>
            <button @click="selectedTemplate = null" class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div class="p-6 space-y-6">
          <!-- Template Info -->
          <div class="flex items-center space-x-4 text-sm">
            <div class="flex items-center space-x-1">
              <span class="text-neutral-600 dark:text-neutral-400">Method:</span>
              <span class="font-medium text-neutral-900 dark:text-neutral-100">
                {{ selectedTemplate.method.charAt(0).toUpperCase() + selectedTemplate.method.slice(1) }}
              </span>
            </div>
            <div class="flex items-center space-x-1">
              <span class="text-neutral-600 dark:text-neutral-400">Time:</span>
              <span class="font-medium text-neutral-900 dark:text-neutral-100">
                {{ selectedTemplate.estimatedTime }}
              </span>
            </div>
            <span 
              class="px-2 py-1 rounded text-xs"
              :class="getDifficultyClass(selectedTemplate.difficulty)"
            >
              {{ selectedTemplate.difficulty.charAt(0).toUpperCase() + selectedTemplate.difficulty.slice(1) }}
            </span>
          </div>

          <!-- Template Sections -->
          <div class="space-y-4">
            <h4 class="font-semibold text-neutral-900 dark:text-neutral-100">What's Included:</h4>
            <div class="space-y-3">
              <div
                v-for="(section, index) in selectedTemplate.sections"
                :key="section.id"
                class="p-3 bg-neutral-50 dark:bg-neutral-700 rounded-lg"
              >
                <h5 class="font-medium text-neutral-900 dark:text-neutral-100 text-sm mb-1">
                  {{ section.title }}
                </h5>
                <p class="text-xs text-neutral-600 dark:text-neutral-400 mb-2">
                  {{ section.description }}
                </p>
                
                <div class="space-y-2">
                  <div v-if="section.instructions.length > 0">
                    <span class="text-xs font-medium text-neutral-700 dark:text-neutral-300">
                      {{ section.instructions.length }} guided instructions
                    </span>
                  </div>
                  <div v-if="section.questions.length > 0">
                    <span class="text-xs font-medium text-neutral-700 dark:text-neutral-300">
                      {{ section.questions.length }} study questions
                    </span>
                  </div>
                  <div v-if="section.tips && section.tips.length > 0">
                    <span class="text-xs font-medium text-neutral-700 dark:text-neutral-300">
                      {{ section.tips.length }} helpful tips
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Download Section -->
          <div class="flex items-center justify-between p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
            <div>
              <div class="font-medium text-neutral-900 dark:text-neutral-100 text-sm">
                Ready to get started?
              </div>
              <div class="text-xs text-neutral-600 dark:text-neutral-400">
                Download this template as a structured worksheet
              </div>
            </div>
            <button
              @click="downloadTemplate(selectedTemplate.id)"
              class="btn-primary text-sm"
              :disabled="selectedTemplate.isPremium && !authStore.isPremium"
            >
              {{ selectedTemplate.isPremium && !authStore.isPremium ? 'Requires Premium' : 'Download Template' }}
            </button>
          </div>

          <!-- Premium Upsell -->
          <div v-if="selectedTemplate.isPremium && !authStore.isPremium" class="p-4 bg-accent-50 dark:bg-accent-900/20 rounded-lg border border-accent-200 dark:border-accent-800">
            <div class="flex items-start space-x-3">
              <div class="w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <div class="flex-1">
                <div class="font-medium text-accent-800 dark:text-accent-200 text-sm">
                  Premium Template
                </div>
                <div class="text-xs text-accent-600 dark:text-accent-400 mt-1">
                  Upgrade to Premium to access advanced study templates with detailed guides and expert insights.
                </div>
                <button @click="$emit('upgrade')" class="mt-2 text-xs font-medium text-accent-700 dark:text-accent-300 hover:text-accent-800 dark:hover:text-accent-200">
                  Learn More →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- All Templates Modal -->
    <div v-if="showAllTemplates" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" @click="showAllTemplates = false">
      <div class="bg-white dark:bg-neutral-800 rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" @click.stop>
        <div class="p-6 border-b border-neutral-200 dark:border-neutral-700">
          <div class="flex items-center justify-between">
            <h3 class="text-xl font-bold text-neutral-900 dark:text-neutral-100">Study Templates</h3>
            <button @click="showAllTemplates = false" class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div class="p-6">
          <!-- Filter Tabs -->
          <div class="flex flex-wrap gap-2 mb-6">
            <button
              @click="templateFilter = 'all'"
              class="px-3 py-1 text-sm rounded-full transition-colors"
              :class="templateFilter === 'all' 
                ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400' 
                : 'bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-600'"
            >
              All Templates
            </button>
            <button
              @click="templateFilter = 'free'"
              class="px-3 py-1 text-sm rounded-full transition-colors"
              :class="templateFilter === 'free' 
                ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400' 
                : 'bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-600'"
            >
              Free
            </button>
            <button
              @click="templateFilter = 'premium'"
              class="px-3 py-1 text-sm rounded-full transition-colors"
              :class="templateFilter === 'premium' 
                ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400' 
                : 'bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-600'"
            >
              Premium
            </button>
          </div>

          <!-- Templates Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              v-for="template in filteredTemplates"
              :key="template.id"
              class="group p-4 border border-neutral-200 dark:border-neutral-700 rounded-xl hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-200 cursor-pointer"
              @click="showTemplateDetail(template)"
            >
              <div class="flex items-start space-x-3">
                <div 
                  class="w-10 h-10 rounded-lg bg-gradient-to-br flex items-center justify-center flex-shrink-0"
                  :class="template.color"
                >
                  <span class="text-lg">{{ template.icon }}</span>
                </div>
                
                <div class="flex-1 min-w-0">
                  <h4 class="font-semibold text-neutral-900 dark:text-neutral-100 text-sm mb-1">
                    {{ template.title }}
                  </h4>
                  <p class="text-xs text-neutral-600 dark:text-neutral-400 mb-2 line-clamp-2">
                    {{ template.description }}
                  </p>
                  
                  <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-2">
                      <span 
                        class="text-xs px-2 py-1 rounded"
                        :class="getDifficultyClass(template.difficulty)"
                      >
                        {{ template.difficulty.charAt(0).toUpperCase() + template.difficulty.slice(1) }}
                      </span>
                      <span class="text-xs text-neutral-500 dark:text-neutral-500">
                        {{ template.estimatedTime }}
                      </span>
                    </div>
                    
                    <div class="flex items-center space-x-2">
                      <span 
                        v-if="template.isPremium"
                        class="text-xs px-2 py-1 rounded bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400"
                      >
                        Premium
                      </span>
                      <button
                        @click.stop="downloadTemplate(template.id)"
                        class="text-xs font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                        :disabled="template.isPremium && !authStore.isPremium"
                      >
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import type { StudyTemplate } from '../stores/studyTemplates'

const emit = defineEmits(['upgrade'])

// Initialize stores safely
const authStore = ref({
  isAuthenticated: false,
  user: null,
  isPremium: false,
})
const templatesStore = ref({
  templates: [],
  getTemplatesByCategory: () => [],
})

// Initialize the real stores when component mounts
onMounted(async () => {
  try {
    const { useAuthStore } = await import('../stores/auth')
    const { useStudyTemplatesStore } = await import('../stores/studyTemplates')

    authStore.value = useAuthStore()
    templatesStore.value = useStudyTemplatesStore()
  } catch (error) {
    console.warn('Failed to initialize stores in StudyTemplates:', error)
  }
})

const showAllTemplates = ref(false)
const selectedTemplate = ref<StudyTemplate | null>(null)
const templateFilter = ref<'all' | 'free' | 'premium'>('all')

const featuredTemplates = computed(() => {
  return templatesStore.freeTemplates.slice(0, 3)
})

const filteredTemplates = computed(() => {
  switch (templateFilter.value) {
    case 'free':
      return templatesStore.freeTemplates
    case 'premium':
      return templatesStore.premiumTemplates
    default:
      return templatesStore.templates
  }
})

const showTemplateDetail = (template: StudyTemplate) => {
  selectedTemplate.value = template
}

const downloadTemplate = (templateId: string) => {
  const template = templatesStore.templates.find(t => t.id === templateId)
  if (!template) return

  if (template.isPremium && !authStore.isPremium) {
    emit('upgrade')
    return
  }

  templatesStore.downloadTemplate(templateId)
  
  // Show success message
  alert(`${template.title} template downloaded successfully!`)
}

const getDifficultyClass = (difficulty: string) => {
  switch (difficulty) {
    case 'beginner':
      return 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
    case 'intermediate':
      return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400'
    case 'advanced':
      return 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400'
    default:
      return 'bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400'
  }
}
</script>
