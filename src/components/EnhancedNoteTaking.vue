<template>
  <div class="note-taking-container">
    <!-- Note Editor -->
    <div class="note-editor">
      <div class="editor-header">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
              {{ isEditing ? 'Edit Note' : 'Add Note' }}
            </h3>
            <p class="text-sm text-neutral-600 dark:text-neutral-400">
              {{ reference }}
            </p>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <button
            @click="togglePreview"
            class="px-3 py-1 text-sm bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
          >
            {{ showPreview ? 'Edit' : 'Preview' }}
          </button>
          <button
            @click="saveNote"
            :disabled="!noteContent.trim()"
            class="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            {{ isEditing ? 'Update' : 'Save' }}
          </button>
        </div>
      </div>

      <!-- Rich Text Toolbar -->
      <div v-if="!showPreview" class="toolbar">
        <div class="toolbar-group">
          <button
            @click="formatText('bold')"
            :class="{ 'active': isFormatActive('bold') }"
            class="toolbar-btn"
            title="Bold"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 4h8a4 4 0 014 4 4 4 0 01-4 4H6z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 12h9a4 4 0 014 4 4 4 0 01-4 4H6z" />
            </svg>
          </button>
          <button
            @click="formatText('italic')"
            :class="{ 'active': isFormatActive('italic') }"
            class="toolbar-btn"
            title="Italic"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 4L6 20M14 4l4 16" />
            </svg>
          </button>
          <button
            @click="formatText('underline')"
            :class="{ 'active': isFormatActive('underline') }"
            class="toolbar-btn"
            title="Underline"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </button>
        </div>

        <div class="toolbar-group">
          <button
            @click="insertHeading(1)"
            class="toolbar-btn"
            title="Heading 1"
          >
            H1
          </button>
          <button
            @click="insertHeading(2)"
            class="toolbar-btn"
            title="Heading 2"
          >
            H2
          </button>
          <button
            @click="insertHeading(3)"
            class="toolbar-btn"
            title="Heading 3"
          >
            H3
          </button>
        </div>

        <div class="toolbar-group">
          <button
            @click="insertList('bullet')"
            class="toolbar-btn"
            title="Bullet List"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
          </button>
          <button
            @click="insertList('number')"
            class="toolbar-btn"
            title="Numbered List"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </button>
        </div>

        <div class="toolbar-group">
          <button
            @click="insertQuote"
            class="toolbar-btn"
            title="Quote"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </button>
          <button
            @click="insertLink"
            class="toolbar-btn"
            title="Insert Link"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
          </button>
        </div>

        <div class="toolbar-group">
          <button
            @click="insertEmoji"
            class="toolbar-btn"
            title="Insert Emoji"
          >
            😊
          </button>
          <button
            @click="insertTimestamp"
            class="toolbar-btn"
            title="Insert Timestamp"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Editor Content -->
      <div v-if="!showPreview" class="editor-content">
        <div
          ref="editorRef"
          class="editor-textarea"
          contenteditable="true"
          @input="handleInput"
          @keydown="handleKeydown"
          @paste="handlePaste"
          v-html="sanitizedNoteContent"
        ></div>
      </div>

      <!-- Preview -->
      <div v-else class="preview-content">
        <div class="prose prose-neutral dark:prose-invert max-w-none" v-html="renderedContent"></div>
      </div>

      <!-- Tags -->
      <div class="tags-section">
        <div class="flex items-center gap-2 mb-2">
          <svg class="w-4 h-4 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
          </svg>
          <span class="text-sm font-medium text-neutral-700 dark:text-neutral-300">Tags</span>
        </div>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tag in availableTags"
            :key="tag"
            @click="toggleTag(tag)"
            class="px-3 py-1 text-xs rounded-full cursor-pointer transition-colors"
            :class="selectedTags.includes(tag) ? 'bg-primary-500 text-white' : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'"
          >
            {{ tag }}
          </span>
          <input
            v-model="newTag"
            @keydown.enter="addTag"
            @blur="addTag"
            class="px-3 py-1 text-xs bg-transparent border border-dashed border-neutral-300 dark:border-neutral-600 rounded-full focus:outline-none focus:border-primary-500"
            placeholder="Add tag..."
          />
        </div>
      </div>

      <!-- Character Count -->
      <div class="flex justify-between items-center text-xs text-neutral-500 dark:text-neutral-400">
        <span>{{ characterCount }} characters</span>
        <span>{{ wordCount }} words</span>
      </div>
    </div>

    <!-- Existing Notes List -->
    <div v-if="existingNotes.length > 0" class="existing-notes">
      <h4 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
        Previous Notes
      </h4>
      <div class="space-y-3">
        <div
          v-for="note in existingNotes"
          :key="note.id"
          class="note-item"
        >
          <div class="note-header">
            <div class="flex items-center gap-2">
              <span class="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                {{ note.reference }}
              </span>
              <span class="text-xs text-neutral-500 dark:text-neutral-400">
                {{ formatDate(note.createdAt) }}
              </span>
            </div>
            <div class="flex items-center gap-2">
              <button
                @click="editNote(note)"
                class="p-1 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded transition-colors"
              >
                <svg class="w-4 h-4 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </button>
              <button
                @click="deleteNote(note.id)"
                class="p-1 hover:bg-red-100 dark:hover:bg-red-900/20 rounded transition-colors"
              >
                <svg class="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </div>
            <div class="note-content prose prose-sm prose-neutral dark:prose-invert max-w-none" v-html="sanitizeRichText(note.content)"></div>
          <div v-if="note.tags && note.tags.length > 0" class="note-tags">
            <span
              v-for="tag in note.tags"
              :key="tag"
              class="px-2 py-1 text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from 'vue'
import { useHapticFeedback } from '../composables/useMobileGestures'
import { sanitizeRichText, sanitizeHtml } from '../utils/sanitize'

interface Note {
  id: string
  content: string
  reference: string
  tags: string[]
  createdAt: string
  updatedAt: string
}

interface Props {
  reference: string
  existingNotes?: Note[]
  initialContent?: string
  isEditing?: boolean
  editingNote?: Note
}

const props = withDefaults(defineProps<Props>(), {
  existingNotes: () => [],
  initialContent: '',
  isEditing: false,
  editingNote: undefined
})

const emit = defineEmits<{
  'note-save': [note: Omit<Note, 'id' | 'createdAt' | 'updatedAt'>]
  'note-update': [id: string, note: Omit<Note, 'id' | 'createdAt' | 'updatedAt'>]
  'note-delete': [id: string]
}>()

const { light, medium } = useHapticFeedback()

// State
const editorRef = ref<HTMLElement>()
const noteContent = ref('')
const showPreview = ref(false)
const selectedTags = ref<string[]>([])
const newTag = ref('')
const availableTags = ref([
  'Prayer', 'Study', 'Reflection', 'Application', 'Question', 'Insight',
  'Challenge', 'Encouragement', 'Scripture', 'Personal', 'Work', 'Family'
])

// Computed
const characterCount = computed(() => noteContent.value.length)
const wordCount = computed(() => {
  const text = noteContent.value.replace(/<[^>]*>/g, '') // Remove HTML tags
  return text.trim().split(/\s+/).filter(word => word.length > 0).length
})

const sanitizedNoteContent = computed(() => {
  // Sanitize the note content before rendering
  return sanitizeHtml(noteContent.value)
})

const renderedContent = computed(() => {
  // Simple markdown-like rendering with sanitization
  const html = noteContent.value
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>')
    .replace(/^\* (.*$)/gim, '<li>$1</li>')
    .replace(/^\d+\. (.*$)/gim, '<li>$1</li>')
    .replace(/\n/g, '<br>')
  
  // Sanitize the rendered HTML
  return sanitizeRichText(html)
})

// Methods
const handleInput = (event: Event) => {
  const target = event.target as HTMLElement
  noteContent.value = target.innerHTML
}

const handleKeydown = (event: KeyboardEvent) => {
  // Handle keyboard shortcuts
  if (event.ctrlKey || event.metaKey) {
    switch (event.key) {
      case 'b':
        event.preventDefault()
        formatText('bold')
        break
      case 'i':
        event.preventDefault()
        formatText('italic')
        break
      case 'u':
        event.preventDefault()
        formatText('underline')
        break
      case 's':
        event.preventDefault()
        saveNote()
        break
    }
  }
}

const handlePaste = (event: ClipboardEvent) => {
  event.preventDefault()
  const text = event.clipboardData?.getData('text/plain') || ''
  document.execCommand('insertText', false, text)
}

const formatText = (command: string) => {
  light()
  document.execCommand(command, false)
  editorRef.value?.focus()
}

const isFormatActive = (command: string): boolean => {
  return document.queryCommandState(command)
}

const insertHeading = (level: number) => {
  medium()
  const text = `Heading ${level}`
  document.execCommand('insertText', false, `\n#${'#'.repeat(level - 1)} ${text}\n`)
  editorRef.value?.focus()
}

const insertList = (type: 'bullet' | 'number') => {
  medium()
  const command = type === 'bullet' ? 'insertUnorderedList' : 'insertOrderedList'
  document.execCommand(command, false)
  editorRef.value?.focus()
}

const insertQuote = () => {
  medium()
  document.execCommand('insertText', false, '\n> Quote text here\n')
  editorRef.value?.focus()
}

const insertLink = () => {
  const url = prompt('Enter URL:')
  if (url) {
    const text = prompt('Enter link text:', url)
    if (text) {
      document.execCommand('createLink', false, url)
    }
  }
  editorRef.value?.focus()
}

const insertEmoji = () => {
  const emojis = ['😊', '🙏', '❤️', '✨', '🌟', '💡', '🔥', '📖', '🎯', '💪']
  const emoji = emojis[Math.floor(Math.random() * emojis.length)]
  document.execCommand('insertText', false, emoji)
  editorRef.value?.focus()
}

const insertTimestamp = () => {
  const timestamp = new Date().toLocaleString()
  document.execCommand('insertText', false, `\n*${timestamp}*\n`)
  editorRef.value?.focus()
}

const togglePreview = () => {
  light()
  showPreview.value = !showPreview.value
}

const toggleTag = (tag: string) => {
  light()
  const index = selectedTags.value.indexOf(tag)
  if (index > -1) {
    selectedTags.value.splice(index, 1)
  } else {
    selectedTags.value.push(tag)
  }
}

const addTag = () => {
  if (newTag.value.trim() && !selectedTags.value.includes(newTag.value.trim())) {
    selectedTags.value.push(newTag.value.trim())
    newTag.value = ''
  }
}

const saveNote = () => {
  if (!noteContent.value.trim()) return
  
  medium()
  
  const note = {
    content: noteContent.value,
    reference: props.reference,
    tags: selectedTags.value
  }
  
  if (props.isEditing && props.editingNote) {
    emit('note-update', props.editingNote.id, note)
  } else {
    emit('note-save', note)
  }
  
  // Reset form
  noteContent.value = ''
  selectedTags.value = []
  showPreview.value = false
}

const editNote = (note: Note) => {
  light()
  noteContent.value = note.content
  selectedTags.value = [...note.tags]
  showPreview.value = false
  
  // Scroll to editor
  nextTick(() => {
    editorRef.value?.focus()
  })
}

const deleteNote = (id: string) => {
  if (confirm('Are you sure you want to delete this note?')) {
    medium()
    emit('note-delete', id)
  }
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

// Lifecycle
onMounted(() => {
  if (props.initialContent) {
    noteContent.value = props.initialContent
  }
  if (props.editingNote) {
    noteContent.value = props.editingNote.content
    selectedTags.value = [...props.editingNote.tags]
  }
})
</script>

<style scoped>
.note-taking-container {
  @apply space-y-6;
}

.note-editor {
  @apply bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 p-6 shadow-sm;
}

.editor-header {
  @apply flex items-center justify-between mb-4 pb-4 border-b border-neutral-200 dark:border-neutral-700;
}

.toolbar {
  @apply flex items-center gap-2 mb-4 p-3 bg-neutral-50 dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700;
}

.toolbar-group {
  @apply flex items-center gap-1 pr-3 border-r border-neutral-300 dark:border-neutral-600 last:border-r-0 last:pr-0;
}

.toolbar-btn {
  @apply p-2 rounded hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors;
}

.toolbar-btn.active {
  @apply bg-primary-500 text-white;
}

.editor-content {
  @apply border border-neutral-300 dark:border-neutral-600 rounded-lg overflow-hidden;
}

.editor-textarea {
  @apply min-h-[200px] p-4 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 focus:outline-none resize-none;
}

.preview-content {
  @apply min-h-[200px] p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700;
}

.tags-section {
  @apply mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-700;
}

.existing-notes {
  @apply bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 p-6 shadow-sm;
}

.note-item {
  @apply p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700;
}

.note-header {
  @apply flex items-center justify-between mb-2;
}

.note-content {
  @apply mb-3;
}

.note-tags {
  @apply flex flex-wrap gap-2;
}

/* Prose styling for preview */
.prose h1 {
  @apply text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4;
}

.prose h2 {
  @apply text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-3;
}

.prose h3 {
  @apply text-lg font-medium text-neutral-900 dark:text-neutral-100 mb-2;
}

.prose blockquote {
  @apply border-l-4 border-primary-500 pl-4 italic text-neutral-700 dark:text-neutral-300 my-4;
}

.prose ul, .prose ol {
  @apply ml-4 my-2;
}

.prose li {
  @apply mb-1;
}

.prose strong {
  @apply font-semibold text-neutral-900 dark:text-neutral-100;
}

.prose em {
  @apply italic text-neutral-700 dark:text-neutral-300;
}

/* Mobile optimizations */
@media (max-width: 768px) {
  .toolbar {
    @apply flex-wrap gap-1;
  }
  
  .toolbar-group {
    @apply flex-wrap gap-1 pr-2;
  }
  
  .editor-textarea {
    @apply min-h-[150px] p-3;
  }
}
</style>
