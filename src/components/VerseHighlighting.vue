<template>
  <div class="verse-highlighting-container">
    <!-- Scripture Text with Highlighting -->
    <div
      class="scripture-text"
      :class="{ 'selectable': isSelectable }"
      @mouseup="handleTextSelection"
      @touchend="handleTextSelection"
    >
      <p
        v-for="(verse, index) in verses"
        :key="index"
        class="verse-paragraph"
        :class="{ 'highlighted': highlightedVerses.includes(verse.id) }"
        @click="toggleVerseHighlight(verse.id)"
      >
        <span
          v-for="(word, wordIndex) in verse.words"
          :key="wordIndex"
          class="word"
          :class="{
            'selected': selectedWords.includes(word.id),
            'highlighted': highlightedWords.includes(word.id),
            'annotated': annotatedWords.includes(word.id)
          }"
          :data-word-id="word.id"
          :data-verse-id="verse.id"
          @click.stop="selectWord(word.id, verse.id)"
          @contextmenu.prevent="showWordContextMenu($event, word.id, verse.id)"
        >
          {{ word.text }}
        </span>
      </p>
    </div>

    <!-- Word Context Menu -->
    <div
      v-if="showContextMenu"
      class="fixed z-50 bg-white dark:bg-neutral-900 rounded-lg shadow-xl border border-neutral-200 dark:border-neutral-800 p-2 min-w-[200px]"
      :style="{ left: contextMenuPosition.x + 'px', top: contextMenuPosition.y + 'px' }"
      @click.stop
    >
      <div class="space-y-1">
        <button
          @click="highlightWord"
          class="w-full text-left px-3 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded transition-colors flex items-center gap-2"
        >
          <svg class="w-4 h-4 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
          Highlight
        </button>
        <button
          @click="addNote"
          class="w-full text-left px-3 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded transition-colors flex items-center gap-2"
        >
          <svg class="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
          Add Note
        </button>
        <button
          @click="lookupWord"
          class="w-full text-left px-3 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded transition-colors flex items-center gap-2"
        >
          <svg class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          Lookup
        </button>
        <button
          @click="shareVerse"
          class="w-full text-left px-3 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded transition-colors flex items-center gap-2"
        >
          <svg class="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
          </svg>
          Share
        </button>
      </div>
    </div>

    <!-- Note Editor Modal -->
    <div
      v-if="showNoteEditor"
      class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      @click="closeNoteEditor"
    >
      <div
        class="bg-white dark:bg-neutral-900 rounded-xl shadow-xl max-w-md w-full p-6"
        @click.stop
      >
        <h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
          Add Note
        </h3>
        <div class="mb-4">
          <div class="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
            Selected text: "{{ selectedText }}"
          </div>
          <textarea
            v-model="noteText"
            class="w-full h-32 p-3 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 resize-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Add your note here..."
          ></textarea>
        </div>
        <div class="flex gap-3">
          <button
            @click="saveNote"
            class="flex-1 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
          >
            Save Note
          </button>
          <button
            @click="closeNoteEditor"
            class="flex-1 px-4 py-2 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>

    <!-- Highlighting Controls -->
    <div
      v-if="highlightedVerses.length > 0 || highlightedWords.length > 0"
      class="fixed bottom-20 left-4 z-40 bg-white dark:bg-neutral-900 rounded-lg shadow-lg border border-neutral-200 dark:border-neutral-800 p-3"
    >
      <div class="flex items-center gap-2 mb-2">
        <svg class="w-4 h-4 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
        <span class="text-sm font-medium text-neutral-900 dark:text-neutral-100">
          {{ highlightedVerses.length + highlightedWords.length }} highlighted
        </span>
      </div>
      <div class="flex gap-2">
        <button
          @click="clearAllHighlights"
          class="px-3 py-1 text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
        >
          Clear All
        </button>
        <button
          @click="exportHighlights"
          class="px-3 py-1 text-xs bg-primary-500 text-white rounded hover:bg-primary-600 transition-colors"
        >
          Export
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useHapticFeedback } from '../composables/useMobileGestures'

interface Word {
  id: string
  text: string
  strongs?: string
  definition?: string
}

interface Verse {
  id: string
  words: Word[]
  reference: string
}

interface Props {
  scriptureText: string
  reference: string
  isSelectable?: boolean
  existingHighlights?: string[]
  existingNotes?: Record<string, string>
}

const props = withDefaults(defineProps<Props>(), {
  isSelectable: true,
  existingHighlights: () => [],
  existingNotes: () => ({})
})

const emit = defineEmits<{
  'highlight-add': [wordId: string, verseId: string]
  'highlight-remove': [wordId: string, verseId: string]
  'note-add': [wordId: string, verseId: string, note: string]
  'note-remove': [wordId: string, verseId: string]
  'word-lookup': [word: string, strongs?: string]
  'verse-share': [verseId: string, text: string]
}>()

const { light, medium } = useHapticFeedback()

// State
const verses = ref<Verse[]>([])
const highlightedVerses = ref<string[]>([])
const highlightedWords = ref<string[]>([])
const selectedWords = ref<string[]>([])
const annotatedWords = ref<string[]>([])
const showContextMenu = ref(false)
const showNoteEditor = ref(false)
const contextMenuPosition = ref({ x: 0, y: 0 })
const selectedWordId = ref('')
const selectedVerseId = ref('')
const selectedText = ref('')
const noteText = ref('')

// Computed
const highlightedCount = computed(() => highlightedVerses.value.length + highlightedWords.value.length)

// Methods
const parseScriptureText = () => {
  // Parse scripture text preserving punctuation and proper spacing
  const sentences = props.scriptureText.split(/[.!?]+/).filter(s => s.trim())
  
  verses.value = sentences.map((sentence, index) => {
    const trimmedSentence = sentence.trim()
    // Simply split by whitespace, keeping punctuation with words
    const words = trimmedSentence.split(/\s+/).filter(word => word.length > 0)
    
    return {
      id: `verse-${index + 1}`,
      reference: `${props.reference}:${index + 1}`,
      words: words.map((word, wordIndex) => ({
        id: `word-${index + 1}-${wordIndex + 1}`,
        text: word,
        strongs: undefined, // Would be populated from Strong's Concordance
        definition: undefined
      }))
    }
  })
}

const handleTextSelection = () => {
  const selection = window.getSelection()
  if (selection && selection.toString().trim()) {
    selectedText.value = selection.toString().trim()
    // Could emit selection event for parent components
  }
}

const selectWord = (wordId: string, verseId: string) => {
  light()
  selectedWords.value = [wordId]
  selectedWordId.value = wordId
  selectedVerseId.value = verseId
}

const toggleVerseHighlight = (verseId: string) => {
  medium()
  const index = highlightedVerses.value.indexOf(verseId)
  if (index > -1) {
    highlightedVerses.value.splice(index, 1)
    emit('highlight-remove', '', verseId)
  } else {
    highlightedVerses.value.push(verseId)
    emit('highlight-add', '', verseId)
  }
}

const showWordContextMenu = (event: MouseEvent, wordId: string, verseId: string) => {
  event.preventDefault()
  light()
  
  selectedWordId.value = wordId
  selectedVerseId.value = verseId
  
  contextMenuPosition.value = {
    x: event.clientX,
    y: event.clientY
  }
  
  showContextMenu.value = true
}

const highlightWord = () => {
  medium()
  if (selectedWordId.value) {
    const index = highlightedWords.value.indexOf(selectedWordId.value)
    if (index > -1) {
      highlightedWords.value.splice(index, 1)
      emit('highlight-remove', selectedWordId.value, selectedVerseId.value)
    } else {
      highlightedWords.value.push(selectedWordId.value)
      emit('highlight-add', selectedWordId.value, selectedVerseId.value)
    }
  }
  showContextMenu.value = false
}

const addNote = () => {
  light()
  showNoteEditor.value = true
  showContextMenu.value = false
}

const saveNote = () => {
  if (noteText.value.trim() && selectedWordId.value) {
    emit('note-add', selectedWordId.value, selectedVerseId.value, noteText.value.trim())
    annotatedWords.value.push(selectedWordId.value)
    noteText.value = ''
    showNoteEditor.value = false
  }
}

const closeNoteEditor = () => {
  showNoteEditor.value = false
  noteText.value = ''
}

const lookupWord = () => {
  const word = verses.value
    .flatMap(v => v.words)
    .find(w => w.id === selectedWordId.value)
  
  if (word) {
    emit('word-lookup', word.text, word.strongs)
  }
  showContextMenu.value = false
}

const shareVerse = () => {
  const verse = verses.value.find(v => v.id === selectedVerseId.value)
  if (verse) {
    const text = verse.words.map(w => w.text).join(' ')
    emit('verse-share', selectedVerseId.value, text)
  }
  showContextMenu.value = false
}

const clearAllHighlights = () => {
  medium()
  highlightedVerses.value = []
  highlightedWords.value = []
  selectedWords.value = []
  annotatedWords.value = []
}

const exportHighlights = () => {
  // Export highlighted content
  const highlights = {
    verses: highlightedVerses.value,
    words: highlightedWords.value,
    notes: props.existingNotes,
    timestamp: new Date().toISOString()
  }
  
  const blob = new Blob([JSON.stringify(highlights, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'scripture-highlights.json'
  a.click()
  URL.revokeObjectURL(url)
}

// Close context menu when clicking outside
const handleClickOutside = (event: MouseEvent) => {
  if (showContextMenu.value) {
    showContextMenu.value = false
  }
}

// Lifecycle
onMounted(() => {
  parseScriptureText()
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.verse-highlighting-container {
  position: relative;
}

.scripture-text.selectable {
  user-select: text;
  cursor: text;
}

.verse-paragraph {
  margin-bottom: 1rem;
  line-height: 1.8;
  font-size: 1.125rem;
  color: rgb(31 41 55);
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.dark .verse-paragraph {
  color: rgb(229 231 235);
}

.word {
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 2px 4px;
  border-radius: 4px;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal;
}

.word:hover {
  background-color: rgb(243 244 246);
}

.dark .word:hover {
  background-color: rgb(55 65 81);
}

.word.selected {
  background-color: rgb(59 130 246);
  color: white;
}

.word.highlighted {
  background-color: rgb(251 191 36);
  color: rgb(17 24 39);
  font-weight: 600;
}

.word.annotated {
  border-bottom: 2px solid rgb(34 197 94);
}

.word.annotated::after {
  content: '📝';
  position: absolute;
  top: -8px;
  right: -8px;
  font-size: 12px;
}

.verse-paragraph.highlighted {
  background-color: rgb(254 249 195);
  padding: 8px 12px;
  border-radius: 8px;
  border-left: 4px solid rgb(251 191 36);
}

.dark .verse-paragraph.highlighted {
  background-color: rgb(69 26 3);
  border-left-color: rgb(251 191 36);
}

/* Context menu animations */
.fixed.z-50 {
  animation: fadeInScale 0.15s ease-out;
}

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Mobile touch improvements */
@media (max-width: 768px) {
  .word {
    padding: 4px 6px;
    margin: 1px;
  }
  
  .verse-paragraph {
    font-size: 1rem;
    line-height: 1.6;
  }
}
</style>
