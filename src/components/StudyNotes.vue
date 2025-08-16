<template>
  <div
    class="study-notes bg-white dark:bg-neutral-800 rounded-xl shadow-soft border border-neutral-200 dark:border-neutral-700"
  >
    <!-- Notes Header -->
    <div
      class="flex items-center justify-between p-4 border-b border-neutral-200 dark:border-neutral-700"
    >
      <div class="flex items-center space-x-2">
        <svg
          class="w-5 h-5 text-primary-600 dark:text-primary-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
        <h3 class="font-semibold text-neutral-900 dark:text-neutral-100">Study Notes</h3>
        <span class="text-sm text-neutral-500 dark:text-neutral-400"
          >({{ lessonNotes.length }})</span
        >
      </div>
      <button @click="showNewNoteForm = !showNewNoteForm" class="btn-primary text-sm py-2 px-3">
        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
        Add Note
      </button>
    </div>

    <!-- New Note Form -->
    <div
      v-if="showNewNoteForm"
      class="p-4 bg-neutral-50 dark:bg-neutral-700/50 border-b border-neutral-200 dark:border-neutral-700"
    >
      <form @submit.prevent="createNewNote" class="space-y-3">
        <!-- Note Type Selection -->
        <div class="flex flex-wrap gap-2">
          <button
            v-for="type in noteTypes"
            :key="type.value"
            type="button"
            @click="newNote.type = type.value"
            class="flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium transition-colors"
            :class="
              newNote.type === type.value
                ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 border border-primary-300 dark:border-primary-700'
                : 'bg-neutral-100 dark:bg-neutral-600 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-500'
            "
          >
            <span>{{ type.icon }}</span>
            <span>{{ type.label }}</span>
          </button>
        </div>

        <!-- Scripture Reference (Optional) -->
        <div>
          <input
            v-model="newNote.scripture"
            type="text"
            placeholder="Scripture reference (optional)"
            class="w-full px-3 py-2 text-sm border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 placeholder-neutral-500 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>

        <!-- Note Content -->
        <div>
          <textarea
            v-model="newNote.content"
            rows="4"
            placeholder="Write your note here..."
            class="w-full px-3 py-2 text-sm border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 placeholder-neutral-500 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none"
            required
          ></textarea>
        </div>

        <!-- Tags -->
        <div>
          <input
            v-model="newNote.tagsInput"
            type="text"
            placeholder="Tags (comma separated)"
            class="w-full px-3 py-2 text-sm border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 placeholder-neutral-500 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>

        <!-- Privacy Toggle -->
        <div class="flex items-center space-x-2">
          <input
            v-model="newNote.isPrivate"
            type="checkbox"
            id="note-private"
            class="rounded border-neutral-300 dark:border-neutral-600 text-primary-600 focus:ring-primary-500"
          />
          <label for="note-private" class="text-sm text-neutral-700 dark:text-neutral-300">
            Private note (only visible to you)
          </label>
        </div>

        <!-- Form Actions -->
        <div class="flex justify-end space-x-2">
          <button
            type="button"
            @click="cancelNewNote"
            class="px-4 py-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="btn-primary text-sm py-2 px-4"
            :disabled="!newNote.content.trim()"
          >
            Save Note
          </button>
        </div>
      </form>
    </div>

    <!-- Notes List -->
    <div class="max-h-96 overflow-y-auto">
      <div v-if="lessonNotes.length === 0" class="p-6 text-center">
        <svg
          class="w-12 h-12 text-neutral-400 dark:text-neutral-500 mx-auto mb-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        <p class="text-neutral-500 dark:text-neutral-400 text-sm">
          No notes yet. Start taking notes to enhance your study experience!
        </p>
      </div>

      <div v-else class="divide-y divide-neutral-200 dark:divide-neutral-700">
        <div
          v-for="note in lessonNotes"
          :key="note.id"
          class="p-4 hover:bg-neutral-50 dark:hover:bg-neutral-700/50 transition-colors"
        >
          <!-- Note Header -->
          <div class="flex items-start justify-between mb-2">
            <div class="flex items-center space-x-2">
              <span class="text-xs">{{ getNoteTypeInfo(note.type).icon }}</span>
              <span class="text-xs font-medium text-neutral-600 dark:text-neutral-400">
                {{ getNoteTypeInfo(note.type).label }}
              </span>
              <span
                v-if="note.scripture"
                class="text-xs text-primary-600 dark:text-primary-400 font-medium"
              >
                {{ note.scripture }}
              </span>
              <span v-if="note.isPrivate" class="text-xs text-amber-600 dark:text-amber-400">
                🔒 Private
              </span>
            </div>
            <div class="flex items-center space-x-1">
              <button
                @click="editNote(note)"
                class="p-1 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
                title="Edit note"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </button>
              <button
                @click="deleteNote(note.id)"
                class="p-1 text-neutral-400 hover:text-red-500 transition-colors"
                title="Delete note"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          <!-- Note Content -->
          <div class="text-sm text-neutral-700 dark:text-neutral-300 mb-2 whitespace-pre-wrap">
            {{ note.content }}
          </div>

          <!-- Note Tags -->
          <div v-if="note.tags.length > 0" class="flex flex-wrap gap-1 mb-2">
            <span
              v-for="tag in note.tags"
              :key="tag"
              class="px-2 py-1 text-xs bg-neutral-100 dark:bg-neutral-600 text-neutral-600 dark:text-neutral-300 rounded-full"
            >
              #{{ tag }}
            </span>
          </div>

          <!-- Note Timestamp -->
          <div class="text-xs text-neutral-500 dark:text-neutral-400">
            {{ formatDate(note.updatedAt) }}
          </div>
        </div>
      </div>
    </div>

    <!-- Edit Note Modal -->
    <div
      v-if="editingNote"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      @click.self="cancelEdit"
    >
      <div class="bg-white dark:bg-neutral-800 rounded-xl shadow-xl max-w-md w-full p-6">
        <h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-4">Edit Note</h3>

        <form @submit.prevent="saveEdit" class="space-y-3">
          <!-- Note Type Selection -->
          <div class="flex flex-wrap gap-2">
            <button
              v-for="type in noteTypes"
              :key="type.value"
              type="button"
              @click="editForm.type = type.value"
              class="flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium transition-colors"
              :class="
                editForm.type === type.value
                  ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 border border-primary-300 dark:border-primary-700'
                  : 'bg-neutral-100 dark:bg-neutral-600 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-500'
              "
            >
              <span>{{ type.icon }}</span>
              <span>{{ type.label }}</span>
            </button>
          </div>

          <!-- Scripture Reference -->
          <input
            v-model="editForm.scripture"
            type="text"
            placeholder="Scripture reference (optional)"
            class="w-full px-3 py-2 text-sm border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
          />

          <!-- Note Content -->
          <textarea
            v-model="editForm.content"
            rows="4"
            placeholder="Write your note here..."
            class="w-full px-3 py-2 text-sm border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 resize-none"
            required
          ></textarea>

          <!-- Tags -->
          <input
            v-model="editForm.tagsInput"
            type="text"
            placeholder="Tags (comma separated)"
            class="w-full px-3 py-2 text-sm border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
          />

          <!-- Privacy Toggle -->
          <div class="flex items-center space-x-2">
            <input
              v-model="editForm.isPrivate"
              type="checkbox"
              id="edit-note-private"
              class="rounded border-neutral-300 dark:border-neutral-600 text-primary-600 focus:ring-primary-500"
            />
            <label for="edit-note-private" class="text-sm text-neutral-700 dark:text-neutral-300">
              Private note
            </label>
          </div>

          <!-- Form Actions -->
          <div class="flex justify-end space-x-2 pt-2">
            <button
              type="button"
              @click="cancelEdit"
              class="px-4 py-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
            >
              Cancel
            </button>
            <button type="submit" class="btn-primary text-sm py-2 px-4">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useNotesStore, type StudyNote } from '@/stores/notes'

interface Props {
  studyId: string
  lessonId: string
}

const props = defineProps<Props>()

const notesStore = useNotesStore()

// Component state
const showNewNoteForm = ref(false)
const editingNote = ref<StudyNote | null>(null)

// Note types configuration
const noteTypes = [
  { value: 'general', label: 'General', icon: '📝' },
  { value: 'reflection', label: 'Reflection', icon: '💭' },
  { value: 'question', label: 'Question', icon: '❓' },
  { value: 'insight', label: 'Insight', icon: '💡' },
  { value: 'prayer', label: 'Prayer', icon: '🙏' },
] as const

// New note form
const newNote = ref({
  type: 'general' as StudyNote['type'],
  content: '',
  scripture: '',
  tagsInput: '',
  isPrivate: false,
})

// Edit form
const editForm = ref({
  type: 'general' as StudyNote['type'],
  content: '',
  scripture: '',
  tagsInput: '',
  isPrivate: false,
})

// Get lesson notes
const lessonNotes = computed(() => notesStore.getLessonNotes(props.studyId, props.lessonId).value)

// Helper functions
const getNoteTypeInfo = (type: StudyNote['type']) => {
  return noteTypes.find((t) => t.value === type) || noteTypes[0]
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  const now = new Date()
  const diff = now.getTime() - date.getTime()
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))

  if (days === 0) return 'Today'
  if (days === 1) return 'Yesterday'
  if (days < 7) return `${days} days ago`

  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined,
  })
}

const parseTags = (tagsInput: string): string[] => {
  return tagsInput
    .split(',')
    .map((tag) => tag.trim())
    .filter((tag) => tag.length > 0)
}

// Note actions
const createNewNote = () => {
  const tags = parseTags(newNote.value.tagsInput)

  notesStore.createNote({
    studyId: props.studyId,
    lessonId: props.lessonId,
    content: newNote.value.content,
    scripture: newNote.value.scripture || undefined,
    tags,
    isPrivate: newNote.value.isPrivate,
    type: newNote.value.type,
  })

  cancelNewNote()
}

const cancelNewNote = () => {
  showNewNoteForm.value = false
  newNote.value = {
    type: 'general',
    content: '',
    scripture: '',
    tagsInput: '',
    isPrivate: false,
  }
}

const editNote = (note: StudyNote) => {
  editingNote.value = note
  editForm.value = {
    type: note.type,
    content: note.content,
    scripture: note.scripture || '',
    tagsInput: note.tags.join(', '),
    isPrivate: note.isPrivate,
  }
}

const saveEdit = () => {
  if (editingNote.value) {
    const tags = parseTags(editForm.value.tagsInput)

    notesStore.updateNote(editingNote.value.id, {
      type: editForm.value.type,
      content: editForm.value.content,
      scripture: editForm.value.scripture || undefined,
      tags,
      isPrivate: editForm.value.isPrivate,
    })

    cancelEdit()
  }
}

const cancelEdit = () => {
  editingNote.value = null
  editForm.value = {
    type: 'general',
    content: '',
    scripture: '',
    tagsInput: '',
    isPrivate: false,
  }
}

const deleteNote = (noteId: string) => {
  if (confirm('Are you sure you want to delete this note? This action cannot be undone.')) {
    notesStore.deleteNote(noteId)
  }
}

onMounted(() => {
  notesStore.loadFromStorage()
})
</script>

<style scoped>
.study-notes {
  /* Custom scrollbar for notes list */
}

.study-notes ::-webkit-scrollbar {
  width: 6px;
}

.study-notes ::-webkit-scrollbar-track {
  @apply bg-neutral-100 dark:bg-neutral-700 rounded-full;
}

.study-notes ::-webkit-scrollbar-thumb {
  @apply bg-neutral-300 dark:bg-neutral-500 rounded-full;
}

.study-notes ::-webkit-scrollbar-thumb:hover {
  @apply bg-neutral-400 dark:bg-neutral-400;
}
</style>
