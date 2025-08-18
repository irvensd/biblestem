<template>
  <div
    class="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl p-6 border border-amber-200 dark:border-amber-800"
  >
    <!-- Header -->
    <div class="flex items-start space-x-4 mb-4">
      <div
        class="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0"
      >
        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      </div>
      <div class="flex-1">
        <h3 class="text-lg font-bold text-amber-900 dark:text-amber-100 mb-1">
          Study Workbook Available
        </h3>
        <p class="text-sm text-amber-700 dark:text-amber-300">
          Download a comprehensive PDF workbook with study guides, note-taking spaces, and
          discussion questions.
        </p>
      </div>
    </div>

    <!-- Workbook Contents Preview -->
    <div class="mb-4">
      <h4 class="text-sm font-semibold text-amber-900 dark:text-amber-100 mb-2">
        What's Included:
      </h4>
      <ul class="text-sm text-amber-800 dark:text-amber-200 space-y-1">
        <li class="flex items-center space-x-2">
          <svg
            class="w-4 h-4 text-amber-600 dark:text-amber-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
          <span>Complete lesson content with Scripture references</span>
        </li>
        <li class="flex items-center space-x-2">
          <svg
            class="w-4 h-4 text-amber-600 dark:text-amber-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
          <span>Greek/Hebrew word studies with definitions</span>
        </li>
        <li class="flex items-center space-x-2">
          <svg
            class="w-4 h-4 text-amber-600 dark:text-amber-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
          <span>Discussion questions for group study</span>
        </li>
        <li class="flex items-center space-x-2">
          <svg
            class="w-4 h-4 text-amber-600 dark:text-amber-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
          <span>Note-taking templates and reflection spaces</span>
        </li>
        <li class="flex items-center space-x-2">
          <svg
            class="w-4 h-4 text-amber-600 dark:text-amber-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
          <span>Practical application exercises</span>
        </li>
      </ul>
    </div>

    <!-- Download Actions -->
    <div class="flex flex-col sm:flex-row gap-3">
      <button
        @click="downloadPDF"
        :disabled="isDownloading"
        class="flex-1 flex items-center justify-center space-x-2 bg-amber-600 hover:bg-amber-700 disabled:bg-amber-400 text-white px-4 py-3 rounded-lg font-medium transition-colors"
      >
        <svg
          v-if="!isDownloading"
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
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
        <span>{{ isDownloading ? 'Generating PDF...' : 'Download PDF Workbook' }}</span>
      </button>

      <button
        @click="previewPDF"
        class="flex items-center justify-center space-x-2 bg-white dark:bg-neutral-800 border border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-300 hover:bg-amber-50 dark:hover:bg-amber-900/20 px-4 py-3 rounded-lg font-medium transition-colors"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
        <span>Preview</span>
      </button>
    </div>

    <!-- File Info -->
    <div class="mt-4 flex items-center justify-between text-xs text-amber-700 dark:text-amber-300">
      <span>PDF • {{ estimatedPages }} pages • {{ estimatedSize }}</span>
      <span>Compatible with all devices</span>
    </div>

    <!-- Preview Modal -->
    <div
      v-if="showPreview"
      class="fixed inset-0 bg-black/75 z-50 flex items-center justify-center p-4"
      @click="closePreview"
    >
      <div
        class="bg-white dark:bg-neutral-800 rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
        @click.stop
      >
        <div class="p-6 border-b border-neutral-200 dark:border-neutral-700">
          <div class="flex items-center justify-between">
            <h3 class="text-xl font-bold text-neutral-900 dark:text-neutral-100">
              Workbook Preview
            </h3>
            <button
              @click="closePreview"
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
        </div>

        <div class="p-6 overflow-y-auto max-h-[70vh]">
          <!-- Preview Content -->
          <div class="space-y-6">
            <div class="bg-neutral-50 dark:bg-neutral-700 p-4 rounded-lg">
              <h4 class="font-bold text-neutral-900 dark:text-neutral-100 mb-3">
                Sample Page: Lesson Overview
              </h4>
              <div class="space-y-3 text-sm text-neutral-700 dark:text-neutral-300">
                <div class="border-l-4 border-primary-500 pl-3">
                  <strong>{{ lesson?.title || 'Lesson Title' }}</strong>
                </div>
                <div>
                  <strong>Scripture Focus:</strong> {{ lesson?.scripture || 'Scripture Reference' }}
                </div>
                <div><strong>Duration:</strong> {{ lesson?.duration || '30' }} minutes</div>
                <div class="mt-4">
                  <strong>Key Learning Objectives:</strong>
                  <ul class="list-disc list-inside mt-2 space-y-1">
                    <li>Understand the historical context of the passage</li>
                    <li>Explore original language meanings</li>
                    <li>Apply biblical principles to daily life</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="bg-neutral-50 dark:bg-neutral-700 p-4 rounded-lg">
              <h4 class="font-bold text-neutral-900 dark:text-neutral-100 mb-3">
                Sample Page: Note-Taking Template
              </h4>
              <div class="space-y-3">
                <div class="border border-neutral-300 dark:border-neutral-600 p-3 rounded">
                  <label
                    class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                    >Key Insights:</label
                  >
                  <div
                    class="h-16 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-600 rounded"
                  ></div>
                </div>
                <div class="border border-neutral-300 dark:border-neutral-600 p-3 rounded">
                  <label
                    class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                    >Personal Application:</label
                  >
                  <div
                    class="h-16 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-600 rounded"
                  ></div>
                </div>
                <div class="border border-neutral-300 dark:border-neutral-600 p-3 rounded">
                  <label
                    class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                    >Questions for Further Study:</label
                  >
                  <div
                    class="h-16 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-600 rounded"
                  ></div>
                </div>
              </div>
            </div>

            <div class="text-center">
              <button @click="downloadPDF" class="btn-primary">Download Complete Workbook</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Lesson } from '../data/studies'

interface Props {
  lesson: Lesson
  pdfUrl?: string
}

const props = defineProps<Props>()

const isDownloading = ref(false)
const showPreview = ref(false)

// Estimated PDF properties
const estimatedPages = computed(() => {
  const basePages = 8 // Base pages for lesson content
  const commentaryPages = Math.ceil((props.lesson.content.commentary?.length || 0) / 2)
  const questionsPages = Math.ceil(
    (props.lesson.content.deeperStudy?.discussionQuestions?.length || 0) / 3,
  )
  const wordStudyPages = Math.ceil((props.lesson.content.hebrewGreekWords?.length || 0) / 2)

  return basePages + commentaryPages + questionsPages + wordStudyPages
})

const estimatedSize = computed(() => {
  const sizeInMB = estimatedPages.value * 0.3 // Approximate 300KB per page
  return sizeInMB < 1 ? `${Math.round(sizeInMB * 1000)}KB` : `${sizeInMB.toFixed(1)}MB`
})

const downloadPDF = async () => {
  isDownloading.value = true

  try {
    // In a real app, this would call an API to generate the PDF
    if (props.pdfUrl) {
      // Download existing PDF
      const link = document.createElement('a')
      link.href = props.pdfUrl
      link.download = `${props.lesson.title.replace(/[^a-zA-Z0-9]/g, '-')}-workbook.pdf`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } else {
      // Generate PDF dynamically
      await generatePDF()
    }

    // Track download for analytics
    console.log(`PDF downloaded: ${props.lesson.title}`)
  } catch (error) {
    console.error('Error downloading PDF:', error)
    alert('Error downloading PDF. Please try again.')
  } finally {
    isDownloading.value = false
  }
}

const generatePDF = async () => {
  // Simulate PDF generation
  await new Promise((resolve) => setTimeout(resolve, 2000))

  // In a real app, you would use a library like jsPDF or call a backend service
  // For demo purposes, we'll create a simple text file
  const content = createPDFContent()
  const blob = new Blob([content], { type: 'text/plain' })
  const url = URL.createObjectURL(blob)

  const link = document.createElement('a')
  link.href = url
  link.download = `${props.lesson.title.replace(/[^a-zA-Z0-9]/g, '-')}-workbook.txt`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)

  URL.revokeObjectURL(url)
}

const createPDFContent = () => {
  let content = `BIBLE STUDY WORKBOOK\n\n`
  content += `Lesson: ${props.lesson.title}\n`
  content += `Scripture: ${props.lesson.scripture}\n`
  content += `Duration: ${props.lesson.duration} minutes\n\n`

  content += `LESSON OVERVIEW\n`
  content += `${props.lesson.description}\n\n`

  content += `SCRIPTURE TEXT\n`
  content += `"${props.lesson.content.scriptureText}"\n\n`

  if (props.lesson.content.commentary) {
    content += `COMMENTARY\n`
    props.lesson.content.commentary.forEach((paragraph, index) => {
      content += `${index + 1}. ${paragraph}\n\n`
    })
  }

  if (props.lesson.content.hebrewGreekWords) {
    content += `ORIGINAL LANGUAGE STUDY\n`
    props.lesson.content.hebrewGreekWords.forEach((word) => {
      content += `${word.language}: ${word.word} (${word.transliteration})\n`
      content += `Meaning: ${word.meaning}\n`
      content += `Context: ${word.context}\n`
      content += `References: ${word.references.join(', ')}\n\n`
    })
  }

  content += `LIFE APPLICATION\n`
  content += `Challenge: ${props.lesson.content.lifeApplication.challenge}\n\n`

  if (props.lesson.content.lifeApplication.journaling) {
    content += `Journaling Prompt: ${props.lesson.content.lifeApplication.journaling}\n\n`
  }

  content += `PRAYER\n`
  content += `${props.lesson.content.prayerPrompt}\n\n`

  if (props.lesson.content.deeperStudy?.discussionQuestions) {
    content += `DISCUSSION QUESTIONS\n`
    props.lesson.content.deeperStudy.discussionQuestions.forEach((question, index) => {
      content += `${index + 1}. ${question}\n\n`
    })
  }

  content += `NOTES SECTION\n`
  content += `_`.repeat(50) + '\n'.repeat(10)

  return content
}

const previewPDF = () => {
  showPreview.value = true
}

const closePreview = () => {
  showPreview.value = false
}
</script>

<style scoped>
/* Animation for download button */
.animate-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
