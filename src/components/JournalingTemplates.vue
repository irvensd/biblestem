<template>
  <div class="space-y-6">
    <!-- Header -->
    <div class="text-center mb-6">
      <h3 class="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
        Journaling Templates
      </h3>
      <p class="text-sm text-neutral-600 dark:text-neutral-400">
        Choose a template to guide your personal reflection and application
      </p>
    </div>

    <!-- Template Selector -->
    <div class="flex flex-wrap gap-2 justify-center mb-6">
      <button
        v-for="template in journalTemplates"
        :key="template.id"
        @click="selectedTemplate = template.id"
        class="px-3 py-2 text-sm rounded-full transition-colors"
        :class="
          selectedTemplate === template.id
            ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400'
            : 'bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-600'
        "
      >
        {{ template.icon }} {{ template.name }}
      </button>
    </div>

    <!-- Active Template -->
    <div
      class="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 overflow-hidden"
    >
      <div class="bg-gradient-to-r from-primary-500 to-secondary-500 text-white p-4">
        <div class="flex items-center space-x-3">
          <div class="text-2xl">{{ currentTemplate.icon }}</div>
          <div>
            <h4 class="font-bold text-lg">{{ currentTemplate.name }}</h4>
            <p class="text-primary-100 text-sm">{{ currentTemplate.description }}</p>
          </div>
        </div>
      </div>

      <div class="p-6 space-y-6">
        <!-- Template Sections -->
        <div
          v-for="(section, index) in currentTemplate.sections"
          :key="section.id"
          class="space-y-3"
        >
          <div class="flex items-center space-x-3">
            <div
              class="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white text-sm font-bold"
            >
              {{ index + 1 }}
            </div>
            <h5 class="font-semibold text-neutral-900 dark:text-neutral-100">
              {{ section.title }}
            </h5>
          </div>

          <p class="text-sm text-neutral-600 dark:text-neutral-400 ml-11">
            {{ section.prompt }}
          </p>

          <!-- Text Area -->
          <div class="ml-11">
            <textarea
              v-model="journalEntries[section.id]"
              class="w-full p-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-neutral-900 dark:text-neutral-100 resize-none transition-all"
              :rows="section.rows || 4"
              :placeholder="section.placeholder"
              @input="saveEntry(section.id)"
            ></textarea>

            <!-- Character count -->
            <div class="flex justify-between items-center mt-2 text-xs text-neutral-500">
              <span>{{ (journalEntries[section.id] || '').length }} characters</span>
              <div class="flex items-center space-x-2">
                <button
                  @click="clearSection(section.id)"
                  class="text-red-500 hover:text-red-600 transition-colors"
                  v-if="journalEntries[section.id]"
                >
                  Clear
                </button>
                <button
                  @click="expandSection(section.id)"
                  class="text-primary-500 hover:text-primary-600 transition-colors"
                >
                  {{ expandedSections.includes(section.id) ? 'Collapse' : 'Expand' }}
                </button>
              </div>
            </div>
          </div>

          <!-- Scripture References (if any) -->
          <div v-if="section.scriptureReferences" class="ml-11">
            <div class="text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-2">
              Related Scriptures:
            </div>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="reference in section.scriptureReferences"
                :key="reference"
                class="inline-block px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded cursor-pointer hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                @click="openScripture(reference)"
              >
                {{ reference }}
              </span>
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div
          class="flex flex-col sm:flex-row gap-3 pt-6 border-t border-neutral-200 dark:border-neutral-700"
        >
          <button
            @click="saveToCloud"
            :disabled="isSaving"
            class="flex items-center justify-center space-x-2 bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 text-white px-4 py-3 rounded-lg font-medium transition-colors"
          >
            <svg
              v-if="!isSaving"
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            <svg v-else class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <span>{{ isSaving ? 'Saving...' : 'Save to Account' }}</span>
          </button>

          <button
            @click="exportEntry"
            class="flex items-center justify-center space-x-2 bg-white dark:bg-neutral-700 border border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-600 px-4 py-3 rounded-lg font-medium transition-colors"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span>Export as PDF</span>
          </button>

          <button
            @click="shareEntry"
            class="flex items-center justify-center space-x-2 bg-secondary-600 hover:bg-secondary-700 text-white px-4 py-3 rounded-lg font-medium transition-colors"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
              />
            </svg>
            <span>Share with Group</span>
          </button>
        </div>

        <!-- Save Status -->
        <div v-if="lastSaved" class="text-center">
          <p class="text-xs text-neutral-500 dark:text-neutral-400">
            Last saved: {{ formatLastSaved(lastSaved) }}
          </p>
        </div>
      </div>
    </div>

    <!-- Previous Entries -->
    <div v-if="previousEntries.length > 0" class="mt-8">
      <h4 class="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-4">
        Previous Journal Entries
      </h4>
      <div class="space-y-3">
        <div
          v-for="entry in previousEntries.slice(0, 3)"
          :key="entry.id"
          class="p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700 cursor-pointer hover:border-primary-300 dark:hover:border-primary-600 transition-colors"
          @click="loadPreviousEntry(entry)"
        >
          <div class="flex justify-between items-start mb-2">
            <span class="font-medium text-neutral-900 dark:text-neutral-100">
              {{ entry.lessonTitle }}
            </span>
            <span class="text-xs text-neutral-500 dark:text-neutral-400">
              {{ formatDate(entry.date) }}
            </span>
          </div>
          <p class="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">
            {{ entry.preview }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import type { Lesson } from '../data/studies'

interface JournalSection {
  id: string
  title: string
  prompt: string
  placeholder: string
  rows?: number
  scriptureReferences?: string[]
}

interface JournalTemplate {
  id: string
  name: string
  icon: string
  description: string
  sections: JournalSection[]
}

interface Props {
  lesson: Lesson
}

const props = defineProps<Props>()

const selectedTemplate = ref('reflection')
const journalEntries = ref<Record<string, string>>({})
const expandedSections = ref<string[]>([])
const isSaving = ref(false)
const lastSaved = ref<Date | null>(null)
const previousEntries = ref<
  Array<{ id: string; lessonTitle: string; date: Date; preview: string }>
>([])

// Journal Templates
const journalTemplates: JournalTemplate[] = [
  {
    id: 'reflection',
    name: 'Personal Reflection',
    icon: '💭',
    description: 'Deep personal reflection on the lesson content',
    sections: [
      {
        id: 'key-insights',
        title: 'Key Insights',
        prompt: 'What key insights did you gain from this lesson? What stood out to you most?',
        placeholder: 'Share the most important things you learned...',
      },
      {
        id: 'personal-application',
        title: 'Personal Application',
        prompt: 'How can you apply these biblical principles to your daily life?',
        placeholder: 'Describe specific ways you will apply this...',
      },
      {
        id: 'challenges',
        title: 'Areas of Challenge',
        prompt: 'What areas of your life does this lesson challenge you to grow in?',
        placeholder: 'Be honest about areas where you need to grow...',
      },
      {
        id: 'prayer-requests',
        title: 'Prayer Requests',
        prompt: 'What would you like to pray about based on this lesson?',
        placeholder: 'Share your prayer requests and concerns...',
      },
    ],
  },
  {
    id: 'inductive',
    name: 'Inductive Study',
    icon: '🔍',
    description: 'Systematic observation, interpretation, and application',
    sections: [
      {
        id: 'observation',
        title: 'Observation',
        prompt: 'What does the text say? List key facts, people, places, and events.',
        placeholder: 'Record what you observe in the passage...',
        rows: 5,
      },
      {
        id: 'interpretation',
        title: 'Interpretation',
        prompt: 'What does the text mean? Consider context, culture, and original meaning.',
        placeholder: 'Explain what the passage means...',
        rows: 5,
      },
      {
        id: 'application',
        title: 'Application',
        prompt: 'How does this apply to my life today? What action will you take?',
        placeholder: 'Describe how you will apply this to your life...',
        rows: 4,
      },
      {
        id: 'correlation',
        title: 'Cross-References',
        prompt: 'What other Bible passages relate to this topic?',
        placeholder: 'List related verses and how they connect...',
        rows: 3,
        scriptureReferences: ['Romans 8:28', '1 Corinthians 10:13', 'Philippians 4:13'],
      },
    ],
  },
  {
    id: 'devotional',
    name: 'Devotional',
    icon: '🙏',
    description: 'Heart-focused meditation and worship',
    sections: [
      {
        id: 'praise',
        title: 'Praise & Worship',
        prompt:
          'How does this lesson inspire you to praise God? What attributes of God do you see?',
        placeholder: 'Express your praise and worship...',
      },
      {
        id: 'confession',
        title: 'Confession',
        prompt: 'Is there anything in your life that needs to be confessed before God?',
        placeholder: 'Be honest with God about your struggles...',
      },
      {
        id: 'thanksgiving',
        title: 'Thanksgiving',
        prompt: 'What are you thankful for based on this lesson?',
        placeholder: 'List things you are grateful for...',
      },
      {
        id: 'supplication',
        title: 'Prayer Requests',
        prompt: 'What do you want to ask God for? What are your needs and concerns?',
        placeholder: 'Share your prayer requests...',
      },
    ],
  },
  {
    id: 'character-study',
    name: 'Character Study',
    icon: '👤',
    description: 'Focus on biblical characters and their lessons',
    sections: [
      {
        id: 'character-traits',
        title: 'Character Traits',
        prompt: 'What character traits do you observe in the people mentioned in this lesson?',
        placeholder: 'Describe the positive and negative traits you see...',
      },
      {
        id: 'choices-consequences',
        title: 'Choices & Consequences',
        prompt: 'What choices did they make and what were the consequences?',
        placeholder: 'Analyze the decisions made and their outcomes...',
      },
      {
        id: 'lessons-learned',
        title: 'Lessons for Today',
        prompt: 'What can you learn from their example? What would you do differently?',
        placeholder: 'Reflect on the lessons for your own life...',
      },
      {
        id: 'character-growth',
        title: 'Personal Character Growth',
        prompt: 'What character qualities do you want to develop in your own life?',
        placeholder: 'Identify areas where you want to grow...',
      },
    ],
  },
]

const currentTemplate = computed(() => {
  return journalTemplates.find((t) => t.id === selectedTemplate.value) || journalTemplates[0]
})

const saveEntry = (sectionId: string) => {
  // Auto-save to local storage
  const key = `journal-${props.lesson.id}-${selectedTemplate.value}-${sectionId}`
  localStorage.setItem(key, journalEntries.value[sectionId] || '')
  lastSaved.value = new Date()
}

const clearSection = (sectionId: string) => {
  journalEntries.value[sectionId] = ''
  saveEntry(sectionId)
}

const expandSection = (sectionId: string) => {
  const index = expandedSections.value.indexOf(sectionId)
  if (index > -1) {
    expandedSections.value.splice(index, 1)
  } else {
    expandedSections.value.push(sectionId)
  }
}

const saveToCloud = async () => {
  isSaving.value = true
  try {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // In a real app, this would save to the backend
    console.log('Saving journal entry to cloud:', {
      lessonId: props.lesson.id,
      template: selectedTemplate.value,
      entries: journalEntries.value,
      timestamp: new Date(),
    })

    lastSaved.value = new Date()
  } catch (error) {
    console.error('Error saving to cloud:', error)
    alert('Error saving to cloud. Your entries are saved locally.')
  } finally {
    isSaving.value = false
  }
}

const exportEntry = () => {
  const content = createExportContent()
  const blob = new Blob([content], { type: 'text/plain' })
  const url = URL.createObjectURL(blob)

  const link = document.createElement('a')
  link.href = url
  link.download = `${props.lesson.title}-journal-${selectedTemplate.value}.txt`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)

  URL.revokeObjectURL(url)
}

const createExportContent = () => {
  let content = `BIBLE STUDY JOURNAL\n\n`
  content += `Lesson: ${props.lesson.title}\n`
  content += `Scripture: ${props.lesson.scripture}\n`
  content += `Template: ${currentTemplate.value.name}\n`
  content += `Date: ${new Date().toLocaleDateString()}\n\n`

  currentTemplate.value.sections.forEach((section) => {
    content += `${section.title.toUpperCase()}\n`
    content += `${section.prompt}\n\n`
    content += `${journalEntries.value[section.id] || '[No entry]'}\n\n`
    content += '-'.repeat(50) + '\n\n'
  })

  return content
}

const shareEntry = () => {
  // Implement sharing functionality
  if (navigator.share) {
    navigator.share({
      title: `Bible Study Journal - ${props.lesson.title}`,
      text: createShareText(),
    })
  } else {
    navigator.clipboard.writeText(createShareText()).then(() => {
      alert('Journal entry copied to clipboard!')
    })
  }
}

const createShareText = () => {
  const keyInsights =
    journalEntries.value['key-insights'] || journalEntries.value['observation'] || ''
  return `Studying "${props.lesson.title}" (${props.lesson.scripture})\n\nKey insights: ${keyInsights.substring(0, 200)}${keyInsights.length > 200 ? '...' : ''}\n\n#BibleStudy #Faith`
}

const openScripture = (reference: string) => {
  // In a real app, this could open a Bible reader or external link
  console.log('Opening scripture:', reference)
  alert(`Opening ${reference} - This would open in a Bible reader.`)
}

const loadPreviousEntry = (entry: any) => {
  // Load a previous journal entry
  console.log('Loading previous entry:', entry)
}

const formatLastSaved = (date: Date) => {
  const now = new Date()
  const diff = now.getTime() - date.getTime()
  const minutes = Math.floor(diff / 60000)

  if (minutes < 1) return 'Just now'
  if (minutes < 60) return `${minutes} minute${minutes === 1 ? '' : 's'} ago`

  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `${hours} hour${hours === 1 ? '' : 's'} ago`

  return date.toLocaleDateString()
}

const formatDate = (date: Date) => {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

// Load saved entries on mount
onMounted(() => {
  currentTemplate.value.sections.forEach((section) => {
    const key = `journal-${props.lesson.id}-${selectedTemplate.value}-${section.id}`
    const saved = localStorage.getItem(key)
    if (saved) {
      journalEntries.value[section.id] = saved
    }
  })

  // Load previous entries from localStorage
  const keys = Object.keys(localStorage).filter((key) => key.startsWith('journal-'))
  // This would be replaced with actual data loading in a real app
})

// Watch template changes and load saved data
watch(selectedTemplate, (newTemplate) => {
  journalEntries.value = {}
  currentTemplate.value.sections.forEach((section) => {
    const key = `journal-${props.lesson.id}-${newTemplate}-${section.id}`
    const saved = localStorage.getItem(key)
    if (saved) {
      journalEntries.value[section.id] = saved
    }
  })
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

textarea:focus {
  outline: none;
}
</style>
