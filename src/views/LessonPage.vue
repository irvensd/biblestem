<template>
  <div class="min-h-screen" :class="gradientClass">
    <!-- Enhanced Reading Progress -->
    <ReadingProgress
      :current-section="currentSection"
      :total-sections="6"
      :time-spent="timeSpent"
      :estimated-remaining="estimatedRemaining"
      :section-refs="sectionRefs"
      @section-change="handleSectionChange"
      @time-update="handleTimeUpdate"
    />

    <div v-if="lesson" class="container-base py-8 sm:py-12">
      <!-- Header Section -->
      <div class="mb-12">
        <button
          @click="router.back()"
          class="mb-6 flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Study
        </button>

        <div class="mb-6">
          <div class="inline-block px-3 py-1 bg-white/20 dark:bg-neutral-900/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
            {{ study?.title }}
          </div>
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            {{ lesson.title }}
          </h1>
          <p class="text-white/80 text-lg mb-4">{{ lesson.description }}</p>
          <div class="flex items-center gap-4 text-white/70">
            <span class="flex items-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              {{ lesson.scripture }}
            </span>
            <span class="flex items-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {{ lesson.duration }} min
            </span>
          </div>
        </div>
      </div>

      <!-- Section 1: Opening Thought -->
      <section
        ref="section1"
        class="mb-16"
        @scroll="updateCurrentSection"
      >
        <div class="bg-white/95 dark:bg-neutral-900/95 backdrop-blur-lg rounded-2xl p-8 lg:p-12 shadow-2xl">
          <div class="flex items-center gap-3 mb-6">
            <div
              class="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-blue-600 flex items-center justify-center"
            >
              <span class="text-white font-bold">01</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-100">
              Opening Thought
            </h2>
          </div>
          <div class="p-8 bg-gradient-to-br from-primary-50 to-blue-50 dark:from-primary-900/30 dark:to-blue-900/30 rounded-xl border border-primary-200 dark:border-primary-800">
            <p class="text-xl sm:text-2xl text-neutral-800 dark:text-neutral-200 leading-relaxed italic font-serif">
              "{{ lesson.openingThought }}"
            </p>
          </div>
        </div>
      </section>

      <!-- Section 2: Scripture Exploration -->
      <section ref="section2" class="mb-16">
        <div class="bg-white/95 dark:bg-neutral-900/95 backdrop-blur-lg rounded-2xl p-8 lg:p-12 shadow-2xl">
          <div class="flex items-center justify-between mb-6">
            <div class="flex items-center gap-3">
              <div
                class="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center"
              >
                <span class="text-white font-bold">02</span>
              </div>
              <h2 class="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-100">
                Scripture
              </h2>
            </div>
            <button
              v-if="lesson.content.taggedScripture || lesson.content.hebrewGreekWords"
              @click="showGreekHebrew = !showGreekHebrew"
              class="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105 flex items-center gap-2"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
              {{ showGreekHebrew ? 'Hide' : 'Show' }} Original Text
            </button>
          </div>

          <!-- Enhanced Scripture Display with Highlighting -->
          <div class="mb-6">
            <VerseHighlighting
              :scripture-text="lesson.content.scriptureText || ''"
              :reference="lesson.scripture"
              :is-selectable="true"
              :existing-highlights="existingHighlights"
              :existing-notes="existingNotes"
              @highlight-add="handleHighlightAdd"
              @highlight-remove="handleHighlightRemove"
              @note-add="handleNoteAdd"
              @note-remove="handleNoteRemove"
              @word-lookup="handleWordLookup"
              @verse-share="handleVerseShare"
            />
          </div>

          <!-- Greek/Hebrew Words Display -->
          <div v-if="showGreekHebrew && (lesson.content.taggedScripture || lesson.content.hebrewGreekWords)">
            <div class="mt-8 p-6 bg-amber-50 dark:bg-amber-900/20 rounded-xl border-2 border-amber-200 dark:border-amber-800">
              <h3 class="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
                Word Study
              </h3>
              <div v-if="lesson.content.taggedScripture" class="space-y-4">
                <div
                  v-for="(tag, index) in lesson.content.taggedScripture"
                  :key="index"
                  class="p-4 bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800"
                >
                  <div class="font-bold text-emerald-700 dark:text-emerald-400 mb-1">
                    {{ tag.data?.word }}
                  </div>
                  <div class="text-sm text-neutral-600 dark:text-neutral-400">
                    <div><strong>Language:</strong> {{ tag.data?.language }}</div>
                    <div><strong>Meaning:</strong> {{ tag.data?.meaning }}</div>
                    <div v-if="tag.data?.context"><strong>Context:</strong> {{ tag.data.context }}</div>
                  </div>
                </div>
              </div>
              <div v-if="lesson.content.hebrewGreekWords" class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div
                  v-for="(word, index) in lesson.content.hebrewGreekWords"
                  :key="index"
                  class="p-4 bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800"
                >
                  <div class="font-bold text-primary-700 dark:text-primary-400 mb-1">
                    {{ word.word }}
                  </div>
                  <div class="text-sm text-neutral-600 dark:text-neutral-400">
                    <div><strong>Language:</strong> {{ word.language }}</div>
                    <div><strong>Meaning:</strong> {{ word.meaning }}</div>
                    <div v-if="word.context"><strong>Context:</strong> {{ word.context }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 3: Commentary / Teaching Points -->
      <section ref="section3" class="mb-16">
        <div class="bg-white/95 dark:bg-neutral-900/95 backdrop-blur-lg rounded-2xl p-8 lg:p-12 shadow-2xl">
          <div class="flex items-center gap-3 mb-6">
            <div
              class="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center"
            >
              <span class="text-white font-bold">03</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-100">
              {{ lesson.content.teachingPoints ? 'Teaching Points' : 'Commentary' }}
            </h2>
          </div>

          <!-- Traditional Commentary Format -->
          <div v-if="lesson.content.commentary" class="space-y-4">
            <div
              v-for="(point, index) in lesson.content.commentary"
              :key="index"
              class="group p-6 bg-gradient-to-br from-white to-blue-50 dark:from-neutral-800 dark:to-indigo-950 rounded-xl border-l-4 border-primary-500 dark:border-primary-400 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div class="flex items-start gap-4">
                <div
                  class="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300"
                >
                  <span class="text-white text-lg font-bold">{{ index + 1 }}</span>
                </div>
                <p class="text-neutral-800 dark:text-neutral-100 leading-relaxed text-base font-medium pt-1">
                  {{ point }}
                </p>
              </div>
            </div>
          </div>

          <!-- Sermon-Style Teaching Points -->
          <div v-if="lesson.content.teachingPoints" class="space-y-8">
            <div
              v-for="(teachingPoint, pointIndex) in lesson.content.teachingPoints"
              :key="pointIndex"
              class="group p-8 bg-gradient-to-br from-white to-purple-50 dark:from-neutral-800 dark:to-purple-950 rounded-xl border-l-4 border-purple-500 dark:border-purple-400 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <!-- Point Title -->
              <div v-if="teachingPoint.title" class="mb-4">
                <h3 class="text-xl font-bold text-purple-700 dark:text-purple-400">
                  {{ teachingPoint.title }}
                </h3>
              </div>

              <!-- Narrative Text -->
              <div class="mb-6">
                <p class="text-lg leading-relaxed text-neutral-800 dark:text-neutral-100 font-medium">
                  {{ teachingPoint.narrative }}
                </p>
              </div>

              <!-- Scripture References -->
              <div v-if="teachingPoint.scriptures && teachingPoint.scriptures.length > 0" class="space-y-4 mb-6">
                <div
                  v-for="(scripture, scriptIndex) in teachingPoint.scriptures"
                  :key="scriptIndex"
                  class="p-5 bg-indigo-50 dark:bg-indigo-950/30 rounded-lg border-l-4 border-indigo-400 dark:border-indigo-600"
                >
                  <div class="flex items-start gap-3 mb-2">
                    <svg class="w-6 h-6 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <div class="flex-1">
                      <p class="font-bold text-indigo-700 dark:text-indigo-400 mb-1">{{ scripture.verse }}</p>
                      <p v-if="scripture.text" class="text-neutral-700 dark:text-neutral-300 text-base italic">
                        "{{ scripture.text }}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Examples -->
              <div v-if="teachingPoint.examples && teachingPoint.examples.length > 0" class="mb-4">
                <p class="text-sm font-semibold text-neutral-600 dark:text-neutral-400 mb-2 uppercase tracking-wide">Examples</p>
                <ul class="space-y-2">
                  <li
                    v-for="(example, exIndex) in teachingPoint.examples"
                    :key="exIndex"
                    class="flex items-start gap-2 text-neutral-700 dark:text-neutral-300"
                  >
                    <span class="text-indigo-600 dark:text-indigo-400 font-bold mt-1">•</span>
                    <span>{{ example }}</span>
                  </li>
                </ul>
              </div>

              <!-- Rhetorical Questions -->
              <div v-if="teachingPoint.rhetoricalQuestions && teachingPoint.rhetoricalQuestions.length > 0" class="mt-6 p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border border-yellow-300 dark:border-yellow-800">
                <p class="text-sm font-semibold text-yellow-700 dark:text-yellow-400 mb-3 uppercase tracking-wide flex items-center gap-2">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Questions to Consider
                </p>
                <div v-for="(question, qIndex) in teachingPoint.rhetoricalQuestions" :key="qIndex" class="mb-2">
                  <p class="text-neutral-800 dark:text-neutral-200 font-medium italic">{{ question }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 4: Interactive Element -->
      <section ref="section4" class="mb-16">
        <div class="bg-white/95 dark:bg-neutral-900/95 backdrop-blur-lg rounded-2xl p-8 lg:p-12 shadow-2xl">
          <div class="flex items-center gap-3 mb-6">
            <div
              class="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center"
            >
              <span class="text-white font-bold">04</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-100">
              Reflect & Journal
            </h2>
          </div>

          <!-- Enhanced Note-Taking Section -->
          <div class="space-y-6">
            <div class="p-8 bg-gradient-to-br from-orange-100 via-amber-100 to-yellow-100 dark:from-orange-950/40 dark:via-amber-950/40 dark:to-yellow-950/40 rounded-xl border-2 border-orange-300 dark:border-orange-700 shadow-lg">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <p class="text-lg sm:text-xl font-semibold text-neutral-900 dark:text-neutral-100 leading-relaxed pt-1">
                  {{ getReflectionPrompt() }}
                </p>
              </div>
            </div>

            <EnhancedNoteTaking
              :reference="lesson.scripture"
              :existing-notes="lessonNotes"
              :initial-content="reflectionNotes"
              @note-save="handleNoteSave"
              @note-update="handleNoteUpdate"
              @note-delete="handleNoteDelete"
            />
          </div>
        </div>
      </section>

      <!-- Section 5: Life Application -->
      <section ref="section5" class="mb-16">
        <div class="bg-white/95 dark:bg-neutral-900/95 backdrop-blur-lg rounded-2xl p-8 lg:p-12 shadow-2xl">
          <div class="flex items-center gap-3 mb-6">
            <div
              class="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center"
            >
              <span class="text-white font-bold">05</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-100">
              Life Application
            </h2>
          </div>

          <div class="p-8 bg-gradient-to-br from-emerald-100 via-teal-100 to-cyan-100 dark:from-emerald-950/40 dark:via-teal-950/40 dark:to-cyan-950/40 rounded-xl border-l-4 border-emerald-500 dark:border-emerald-400 shadow-xl">
            <div class="flex items-start gap-6 mb-6">
              <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center flex-shrink-0 shadow-xl">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                </svg>
              </div>
              <div class="flex-1 pt-2">
                <h3 class="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 flex items-center gap-3">
                  Challenge
                  <span class="text-base px-3 py-1 bg-emerald-500 text-white rounded-full font-semibold">Action Required</span>
                </h3>
                <p class="text-lg sm:text-xl text-neutral-800 dark:text-neutral-200 leading-relaxed font-medium">
                  {{ lesson.content.lifeApplication.challenge }}
                </p>
                <div v-if="lesson.content.lifeApplication.journaling" class="mt-6 p-6 bg-white dark:bg-neutral-900 rounded-xl border-2 border-emerald-200 dark:border-emerald-800 shadow-lg">
                  <p class="text-sm font-bold text-emerald-700 dark:text-emerald-400 mb-3 uppercase tracking-wide">Journal Prompt</p>
                  <p class="text-neutral-800 dark:text-neutral-200 italic text-lg leading-relaxed">{{ lesson.content.lifeApplication.journaling }}</p>
                </div>
              </div>
            </div>

            <div class="flex items-center justify-between pt-6 border-t-2 border-emerald-300 dark:border-emerald-700">
              <div class="flex items-center gap-3">
                <svg class="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span class="font-semibold text-neutral-900 dark:text-neutral-100">Ready to take action?</span>
              </div>
              <label class="flex items-center gap-3 cursor-pointer group">
                <div class="relative">
                  <input
                    type="checkbox"
                    v-model="applicationComplete"
                    class="sr-only"
                    @change="saveApplicationStatus"
                  />
                  <div
                    class="w-14 h-8 rounded-full transition-all duration-300 flex items-center p-1"
                    :class="applicationComplete ? 'bg-emerald-500' : 'bg-neutral-300 dark:bg-neutral-700'"
                  >
                    <div
                      class="w-6 h-6 bg-white rounded-full shadow-lg transform transition-transform duration-300"
                      :class="applicationComplete ? 'translate-x-6' : 'translate-x-0'"
                    ></div>
                  </div>
                </div>
                <span class="font-bold text-neutral-900 dark:text-neutral-100 text-lg group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {{ applicationComplete ? 'Completed ✓' : 'Mark as complete' }}
                </span>
              </label>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 6: Prayer & Notes -->
      <section ref="section6" class="mb-16">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <!-- Prayer -->
          <div class="bg-white/95 dark:bg-neutral-900/95 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
            <div class="flex items-center gap-3 mb-6">
              <div
                class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center"
              >
                <span class="text-white font-bold">06</span>
              </div>
              <h2 class="text-2xl font-bold text-neutral-900 dark:text-neutral-100">Prayer</h2>
            </div>
            <div class="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl border border-blue-200 dark:border-blue-800">
              <p class="text-lg leading-relaxed text-neutral-800 dark:text-neutral-200 font-serif italic">
                {{ lesson.content.prayerPrompt }}
              </p>
            </div>
          </div>

          <!-- Personal Notes -->
          <div class="bg-white/95 dark:bg-neutral-900/95 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
            <div class="flex items-center gap-3 mb-6">
              <svg class="w-8 h-8 text-neutral-600 dark:text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
              <h2 class="text-2xl font-bold text-neutral-900 dark:text-neutral-100">Your Notes</h2>
            </div>
            <textarea
              v-model="personalNotes"
              placeholder="Jot down insights, questions, or reflections..."
              class="w-full h-48 p-4 rounded-xl border-2 border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 focus:border-primary-500 focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900/50 transition-all duration-200 resize-none"
              @blur="autoSaveNotes"
            ></textarea>
            <p class="text-xs text-neutral-500 dark:text-neutral-400 mt-2">
              💾 Auto-saved
            </p>
          </div>
        </div>
      </section>

      <!-- Enhanced Study Navigation -->
      <StudyNavigation
        :current-lesson="lesson"
        :current-lesson-index="currentLessonIndex"
        :total-lessons="study?.lessons.length || 0"
        :lesson-progress="progressPercentage"
        :previous-lesson="previousLesson"
        :next-lesson="nextLesson"
        :is-bookmarked="isBookmarked"
        :can-access-next-lesson="canAccessNextLesson"
        @lesson-navigate="handleLessonNavigate"
        @lesson-complete="handleLessonComplete"
        @lesson-bookmark="handleLessonBookmark"
        @lesson-share="handleLessonShare"
        @study-overview="handleStudyOverview"
        @view-notes="handleViewNotes"
        @download-pdf="handleDownloadPdf"
        @report-issue="handleReportIssue"
      />

      <!-- Complete Button -->
      <div class="mb-16 text-center">
        <button
          @click="completeLesson"
          class="px-8 py-4 bg-gradient-to-r from-primary-600 to-blue-600 text-white text-lg font-bold rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-3 mx-auto"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          Complete This Lesson
        </button>
      </div>
    </div>

    <!-- Lesson Not Found -->
    <div v-else class="container-base py-16 text-center">
      <div class="text-6xl mb-4">📖</div>
      <h2 class="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">Lesson Not Found</h2>
      <p class="text-neutral-600 dark:text-neutral-400 mb-6">This lesson doesn't exist or has been removed.</p>
      <button
        @click="router.back()"
        class="btn-primary inline-flex items-center gap-2"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        Go Back
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getStudyById, getLessonById } from '../data/studies'
import { useStudyProgressStore } from '../stores/studyProgress'
import { useNotesStore } from '../stores/notes'
import ReadingProgress from '../components/ReadingProgress.vue'
import VerseHighlighting from '../components/VerseHighlighting.vue'
import EnhancedNoteTaking from '../components/EnhancedNoteTaking.vue'
import StudyNavigation from '../components/StudyNavigation.vue'
import { useHapticFeedback } from '../composables/useMobileGestures'
import { useAuthStore } from '../stores/auth'

const route = useRoute()
const router = useRouter()
const authStore = useAuthStore()
const progressStore = useStudyProgressStore()
const notesStore = useNotesStore()
const { light, medium } = useHapticFeedback()

const study = computed(() => getStudyById(route.params.studyId as string))
const lesson = computed(() => getLessonById(route.params.studyId as string, route.params.lessonId as string))

// State
const showGreekHebrew = ref(false)
const reflectionNotes = ref('')
const personalNotes = ref('')
const applicationComplete = ref(false)
const currentSection = ref(1)
const timeSpent = ref(0)
const estimatedRemaining = ref(0)
const existingHighlights = ref<string[]>([])
const existingNotes = ref<Record<string, string>>({})
const lessonNotes = ref<any[]>([])
const isBookmarked = ref(false)

// Section refs
const section1 = ref<HTMLElement>()
const section2 = ref<HTMLElement>()
const section3 = ref<HTMLElement>()
const section4 = ref<HTMLElement>()
const section5 = ref<HTMLElement>()
const section6 = ref<HTMLElement>()

// Computed properties
const gradientClass = computed(() => {
  if (!study.value) return 'bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-950 dark:to-neutral-900'
  return study.value.category === 'premium'
    ? 'bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 dark:from-neutral-950 dark:via-indigo-950 dark:to-purple-950'
    : 'bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 dark:from-neutral-950 dark:via-blue-950 dark:to-indigo-950'
})

const progressPercentage = computed(() => {
  return Math.min((currentSection.value / 6) * 100, 100)
})

const currentSectionColor = computed(() => {
  const colors = {
    1: 'border-primary-500',
    2: 'border-emerald-500',
    3: 'border-purple-500',
    4: 'border-orange-500',
    5: 'border-emerald-500',
    6: 'border-blue-500',
  }
  return colors[currentSection.value as keyof typeof colors] || 'border-primary-500'
})

// Navigation computed properties
const currentLessonIndex = computed(() => {
  if (!study.value || !lesson.value) return 0
  return study.value.lessons.findIndex(l => l.id === lesson.value?.id) || 0
})

const previousLesson = computed(() => {
  if (!study.value || currentLessonIndex.value <= 0) return undefined
  return study.value.lessons[currentLessonIndex.value - 1]
})

const nextLesson = computed(() => {
  if (!study.value || currentLessonIndex.value >= study.value.lessons.length - 1) return undefined
  return study.value.lessons[currentLessonIndex.value + 1]
})

const canAccessNextLesson = computed(() => {
  if (!nextLesson.value) return false
  return progressStore.isLessonCompleted(route.params.studyId as string, lesson.value?.id || '')
})

// Section refs object for ReadingProgress component
const sectionRefs = computed((): Record<number, HTMLElement> => {
  const refs: Record<number, HTMLElement> = {}
  if (section1.value) refs[1] = section1.value
  if (section2.value) refs[2] = section2.value
  if (section3.value) refs[3] = section3.value
  if (section4.value) refs[4] = section4.value
  if (section5.value) refs[5] = section5.value
  if (section6.value) refs[6] = section6.value
  return refs
})

// Methods
const getReflectionPrompt = () => {
  if (!lesson.value?.content?.interactiveElement) return 'Take a moment to reflect on what you\'ve learned...'
  
  if (lesson.value.content.interactiveElement.type === 'reflection') {
    return lesson.value.content.interactiveElement.content.question || 'What insights can you take away from this lesson?'
  }
  
  return 'Take a moment to reflect on what you\'ve learned...'
}

const updateCurrentSection = () => {
  const scrollPosition = window.scrollY + window.innerHeight / 2
  
  const sections = [section1, section2, section3, section4, section5, section6]
  const rects = sections.map(s => s.value?.getBoundingClientRect())
  
  for (let i = sections.length - 1; i >= 0; i--) {
    const rect = rects[i]
    if (rect && rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
      currentSection.value = i + 1
      break
    }
  }
}

const autoSaveReflection = () => {
  if (reflectionNotes.value.trim()) {
    notesStore.createNote({
      studyId: route.params.studyId as string,
      lessonId: route.params.lessonId as string,
      content: reflectionNotes.value,
      scripture: lesson.value?.scripture,
      tags: ['reflection'],
      isPrivate: true,
      type: 'reflection',
    })
  }
}

const autoSaveNotes = () => {
  if (personalNotes.value.trim()) {
    notesStore.createNote({
      studyId: route.params.studyId as string,
      lessonId: route.params.lessonId as string,
      content: personalNotes.value,
      scripture: lesson.value?.scripture,
      tags: ['personal-notes'],
      isPrivate: true,
      type: 'general',
    })
  }
}

const saveApplicationStatus = () => {
  if (applicationComplete.value) {
    progressStore.acceptChallenge(
      route.params.studyId as string,
      route.params.lessonId as string
    )
  }
}

const completeLesson = async () => {
  const studyId = route.params.studyId as string
  const lessonId = route.params.lessonId as string

  // Mark lesson as completed
  progressStore.completeLesson(studyId, lessonId)

  // Save all notes
  if (reflectionNotes.value.trim()) {
    autoSaveReflection()
  }
  if (personalNotes.value.trim()) {
    autoSaveNotes()
  }

  // Navigate back to study page
  router.push(`/study/${studyId}`)
}

// Enhanced component event handlers
const handleSectionChange = (section: number) => {
  currentSection.value = section
}

const handleTimeUpdate = (time: number) => {
  timeSpent.value = time
  // Estimate remaining time based on current progress
  const remainingSections = 6 - currentSection.value
  estimatedRemaining.value = Math.max(0, remainingSections * 2) // 2 minutes per section estimate
}

const handleHighlightAdd = (wordId: string, verseId: string) => {
  light()
  if (wordId) {
    existingHighlights.value.push(wordId)
  }
  // Save to storage
  localStorage.setItem('biblestem_highlights', JSON.stringify(existingHighlights.value))
}

const handleHighlightRemove = (wordId: string, verseId: string) => {
  light()
  if (wordId) {
    const index = existingHighlights.value.indexOf(wordId)
    if (index > -1) {
      existingHighlights.value.splice(index, 1)
    }
  }
  localStorage.setItem('biblestem_highlights', JSON.stringify(existingHighlights.value))
}

const handleNoteAdd = (wordId: string, verseId: string, note: string) => {
  medium()
  existingNotes.value[wordId] = note
  localStorage.setItem('biblestem_notes', JSON.stringify(existingNotes.value))
}

const handleNoteRemove = (wordId: string, verseId: string) => {
  light()
  delete existingNotes.value[wordId]
  localStorage.setItem('biblestem_notes', JSON.stringify(existingNotes.value))
}

const handleWordLookup = (word: string, strongs?: string) => {
  light()
  // Open word lookup modal or external resource
  console.log('Looking up word:', word, strongs)
}

const handleVerseShare = (verseId: string, text: string) => {
  medium()
  // Implement sharing functionality
  if (navigator.share) {
    navigator.share({
      title: 'Scripture Verse',
      text: text,
      url: window.location.href
    })
  } else {
    // Fallback to clipboard
    navigator.clipboard.writeText(text)
  }
}

const handleNoteSave = (note: any) => {
  medium()
  notesStore.createNote({
    studyId: route.params.studyId as string,
    lessonId: route.params.lessonId as string,
    content: note.content,
    type: 'reflection',
    tags: note.tags,
    isPrivate: true
  })
}

const handleNoteUpdate = (id: string, note: any) => {
  light()
  notesStore.updateNote(id, {
    content: note.content,
    tags: note.tags
  })
}

const handleNoteDelete = (id: string) => {
  medium()
  notesStore.deleteNote(id)
}

const handleLessonNavigate = (lessonId: string) => {
  medium()
  router.push(`/study/${route.params.studyId}/lesson/${lessonId}`)
}

const handleLessonComplete = (lessonId: string) => {
  medium()
  progressStore.completeLesson(route.params.studyId as string, lessonId)
}

const handleLessonBookmark = (lessonId: string, bookmarked: boolean) => {
  light()
  isBookmarked.value = bookmarked
  // Save bookmark state
  localStorage.setItem(`biblestem_bookmark_${lessonId}`, JSON.stringify(bookmarked))
}

const handleLessonShare = (lessonId: string) => {
  medium()
  if (navigator.share) {
    navigator.share({
      title: lesson.value?.title,
      text: lesson.value?.description,
      url: window.location.href
    })
  }
}

const handleStudyOverview = () => {
  light()
  router.push(`/study/${route.params.studyId}`)
}

const handleViewNotes = (lessonId: string) => {
  light()
  // Scroll to notes section or open notes modal
  console.log('Viewing notes for lesson:', lessonId)
}

const handleDownloadPdf = (lessonId: string) => {
  medium()
  // Implement PDF download
  console.log('Downloading PDF for lesson:', lessonId)
}

const handleReportIssue = (lessonId: string) => {
  light()
  // Open issue reporting modal
  console.log('Reporting issue for lesson:', lessonId)
}

// Lifecycle
onMounted(() => {
  window.addEventListener('scroll', updateCurrentSection)
  
  // Load saved notes and reflection
  try {
    const savedNotes = notesStore.getLessonNotes(route.params.studyId as string, route.params.lessonId as string).value
    if (savedNotes && savedNotes.length > 0) {
      savedNotes.forEach(note => {
        if (note.type === 'reflection') reflectionNotes.value = note.content
        if (note.type === 'general') personalNotes.value = note.content
      })
    }
    
    // Load existing highlights and notes
    const savedHighlights = localStorage.getItem('biblestem_highlights')
    if (savedHighlights) {
      existingHighlights.value = JSON.parse(savedHighlights)
    }
    
    const savedNotesData = localStorage.getItem('biblestem_notes')
    if (savedNotesData) {
      existingNotes.value = JSON.parse(savedNotesData)
    }
    
    // Load bookmark state
    const bookmarkState = localStorage.getItem(`biblestem_bookmark_${route.params.lessonId}`)
    if (bookmarkState) {
      isBookmarked.value = JSON.parse(bookmarkState)
    }
    
    // Load lesson notes for the note-taking component
    lessonNotes.value = savedNotes || []
    
  } catch (error) {
    console.warn('Could not load enhanced data:', error)
  }

  updateCurrentSection()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateCurrentSection)
})
</script>
