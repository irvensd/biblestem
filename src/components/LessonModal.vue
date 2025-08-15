<template>
  <div class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
    <div class="bg-white dark:bg-neutral-900 rounded-2xl shadow-strong max-w-5xl w-full max-h-[95vh] overflow-hidden flex flex-col">
      <!-- Modal Header with Progress Bar -->
      <div class="bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
        <!-- Progress Bar -->
        <div class="w-full bg-white/20 h-1">
          <div
            class="h-1 bg-white transition-all duration-300 ease-out"
            :style="`width: ${((currentStepIndex + 1) / steps.length) * 100}%`"
          ></div>
        </div>

        <!-- Header Content -->
        <div class="p-6">
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-4">
              <div class="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <span class="text-2xl font-bold">{{ lessonIndex + 1 }}</span>
              </div>
              <div>
                <h2 class="text-2xl font-bold">{{ lesson.title }}</h2>
                <p class="text-primary-100">{{ lesson.scripture }} • {{ lesson.duration }} minutes</p>
              </div>
            </div>
            <button
              @click="$emit('close')"
              class="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors duration-200"
              aria-label="Close lesson"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Modal Content -->
      <div class="flex-1 overflow-y-auto">
        <div class="p-6">
          <!-- Hook Section -->
          <section v-if="currentStep === 'hook'" class="animate-fade-in">
            <div class="text-center mb-8">
              <div class="w-20 h-20 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                  <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
                {{ lesson.title }}
              </h3>
              <p class="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-6">
                {{ lesson.description }}
              </p>
              <div class="inline-flex items-center space-x-2 bg-primary-50 dark:bg-primary-900/20 px-4 py-2 rounded-full border border-primary-200 dark:border-primary-800">
                <svg class="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span class="text-primary-700 dark:text-primary-300 text-sm font-medium">{{ lesson.duration }} minute lesson • {{ lesson.scripture }}</span>
              </div>
            </div>

            <!-- Study Path Preview -->
            <div class="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-xl p-6 mb-8 border border-primary-200 dark:border-primary-800">
              <h4 class="font-bold text-neutral-800 dark:text-neutral-200 mb-4 text-center">Your Study Journey Today</h4>
              <div class="grid grid-cols-5 gap-4">
                <div class="text-center">
                  <div class="w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span class="text-white text-sm font-bold">1</span>
                  </div>
                  <span class="text-xs text-neutral-600 dark:text-neutral-400">Introduction</span>
                </div>
                <div class="text-center">
                  <div class="w-8 h-8 bg-neutral-300 dark:bg-neutral-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span class="text-white text-sm font-bold">2</span>
                  </div>
                  <span class="text-xs text-neutral-600 dark:text-neutral-400">Scripture</span>
                </div>
                <div class="text-center">
                  <div class="w-8 h-8 bg-neutral-300 dark:bg-neutral-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span class="text-white text-sm font-bold">3</span>
                  </div>
                  <span class="text-xs text-neutral-600 dark:text-neutral-400">Interactive</span>
                </div>
                <div class="text-center">
                  <div class="w-8 h-8 bg-neutral-300 dark:bg-neutral-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span class="text-white text-sm font-bold">4</span>
                  </div>
                  <span class="text-xs text-neutral-600 dark:text-neutral-400">Application</span>
                </div>
                <div class="text-center">
                  <div class="w-8 h-8 bg-neutral-300 dark:bg-neutral-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span class="text-white text-sm font-bold">5</span>
                  </div>
                  <span class="text-xs text-neutral-600 dark:text-neutral-400">Prayer</span>
                </div>
              </div>
            </div>

            <!-- Hook Video/Animation Placeholder -->
            <div v-if="lesson.hookVideo || isPremium" class="mb-8">
              <div class="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-xl flex items-center justify-center border border-primary-200 dark:border-primary-800">
                <div class="text-center">
                  <div class="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <p class="text-primary-600 dark:text-primary-400 font-medium">
                    {{ isPremium ? 'Intro Video Available' : 'Video Hook (Premium Feature)' }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Getting Started Message -->
            <div class="text-center">
              <p class="text-neutral-600 dark:text-neutral-400 mb-6">
                Ready to dive deep into God's Word? This lesson will guide you through Scripture, interactive learning, and practical application.
              </p>
              <div class="inline-flex items-center space-x-2 text-primary-600 dark:text-primary-400">
                <span class="text-sm font-medium">Click "Next" to begin exploring {{ lesson.scripture }}</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </div>
            </div>
          </section>

          <!-- Scripture Exploration Section -->
          <section v-if="currentStep === 'scripture'" class="animate-fade-in">
            <div class="text-center mb-8">
              <h3 class="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">
                Scripture Exploration
              </h3>
              <p class="text-neutral-600 dark:text-neutral-400">
                Click on any word to explore its original meaning
              </p>
            </div>

            <!-- Scripture Text with Interactive Words -->
            <div class="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-xl p-6 sm:p-8 mb-8 border border-primary-200 dark:border-primary-800">
              <div class="text-center mb-6">
                <div class="inline-flex items-center px-4 py-2 bg-white dark:bg-neutral-800 rounded-full shadow-sm border border-neutral-200 dark:border-neutral-700">
                  <svg class="w-4 h-4 text-primary-600 dark:text-primary-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span class="text-sm font-medium text-neutral-700 dark:text-neutral-300">{{ lesson.scripture }}</span>
                </div>
              </div>

              <!-- Interactive Scripture Text -->
              <div class="text-lg sm:text-xl leading-relaxed text-neutral-800 dark:text-neutral-200 text-center max-w-4xl mx-auto">
                <template v-if="lesson.content.taggedScripture">
                  <template v-for="(segment, index) in lesson.content.taggedScripture" :key="index">
                    <ScriptureWordPopover
                      v-if="segment.type === 'word'"
                      :word-data="segment.data"
                      :display-text="segment.text"
                      :is-premium="isPremium"
                      @upgrade="$emit('upgrade')"
                      class="mx-0.5"
                    />
                    <span v-else class="mx-0.5">{{ segment.text }}</span>
                  </template>
                </template>
                <template v-else>
                  <!-- Fallback for lessons without tagged text -->
                  <span class="italic">"{{ lesson.content.scriptureText }}"</span>
                </template>
              </div>

              <!-- Language indicator -->
              <div class="flex justify-center mt-6">
                <div class="flex items-center space-x-4 text-xs text-neutral-500 dark:text-neutral-400">
                  <div class="flex items-center space-x-1">
                    <div class="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span>Greek Text Available</span>
                  </div>
                  <div class="flex items-center space-x-1">
                    <div class="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span>Hebrew Text Available</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Commentary -->
            <div class="grid md:grid-cols-2 gap-6">
              <div class="card p-6">
                <h4 class="font-bold text-lg mb-4 text-neutral-800 dark:text-neutral-200 flex items-center">
                  <svg class="w-5 h-5 mr-2 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  Key Insights
                </h4>
                <div class="space-y-3">
                  <div
                    v-for="(point, index) in lesson.content.commentary.slice(0, 2)"
                    :key="point"
                    class="flex items-start space-x-3"
                  >
                    <div class="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span class="text-white text-xs font-bold">{{ index + 1 }}</span>
                    </div>
                    <p class="text-neutral-700 dark:text-neutral-300 leading-relaxed text-sm">{{ point }}</p>
                  </div>
                </div>
              </div>

              <div class="card p-6">
                <h4 class="font-bold text-lg mb-4 text-neutral-800 dark:text-neutral-200 flex items-center">
                  <svg class="w-5 h-5 mr-2 text-secondary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
                  </svg>
                  Cultural Context
                </h4>
                <div class="space-y-3">
                  <div
                    v-for="(point, index) in lesson.content.commentary.slice(2)"
                    :key="point"
                    class="flex items-start space-x-3"
                  >
                    <div class="w-6 h-6 bg-secondary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span class="text-white text-xs font-bold">{{ index + 3 }}</span>
                    </div>
                    <p class="text-neutral-700 dark:text-neutral-300 leading-relaxed text-sm">{{ point }}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Interactive Element Section -->
          <section v-if="currentStep === 'interactive'" class="animate-fade-in">
            <h3 class="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">
              Interactive Learning
            </h3>

            <!-- Quiz -->
            <div v-if="lesson.content.interactiveElement.type === 'quiz'" class="space-y-6">
              <div
                v-for="(question, qIndex) in lesson.content.interactiveElement.content.questions"
                :key="qIndex"
                class="card p-6"
              >
                <h4 class="font-bold text-lg mb-4 text-neutral-800 dark:text-neutral-200">
                  {{ question.question }}
                </h4>
                <div class="space-y-3">
                  <label
                    v-for="(option, oIndex) in question.options"
                    :key="oIndex"
                    class="flex items-center space-x-3 p-3 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 cursor-pointer transition-colors duration-200"
                    :class="{ 
                      'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800': quizAnswers[qIndex] === oIndex && oIndex === question.correct,
                      'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800': quizAnswers[qIndex] === oIndex && oIndex !== question.correct,
                      'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800': quizAnswers[qIndex] !== undefined && oIndex === question.correct
                    }"
                  >
                    <input
                      v-model="quizAnswers[qIndex]"
                      :value="oIndex"
                      type="radio"
                      :name="`question-${qIndex}`"
                      class="text-primary-600 focus:ring-primary-500"
                    />
                    <span class="text-neutral-700 dark:text-neutral-300">{{ option }}</span>
                    <svg v-if="quizAnswers[qIndex] === oIndex && oIndex === question.correct" class="w-5 h-5 text-green-600 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                    <svg v-if="quizAnswers[qIndex] === oIndex && oIndex !== question.correct" class="w-5 h-5 text-red-600 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
                    </svg>
                  </label>
                </div>
              </div>
            </div>

            <!-- Reflection -->
            <div v-else-if="lesson.content.interactiveElement.type === 'reflection'" class="space-y-6">
              <div class="card p-6">
                <h4 class="font-bold text-lg mb-4 text-neutral-800 dark:text-neutral-200">
                  {{ lesson.content.interactiveElement.content.question }}
                </h4>
                <div v-if="lesson.content.interactiveElement.content.prompts" class="grid md:grid-cols-2 gap-4 mb-6">
                  <div
                    v-for="prompt in lesson.content.interactiveElement.content.prompts"
                    :key="prompt"
                    class="p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg border border-primary-200 dark:border-primary-800"
                  >
                    <p class="text-primary-700 dark:text-primary-300">{{ prompt }}</p>
                  </div>
                </div>
                <textarea
                  v-model="reflectionAnswer"
                  class="w-full h-32 p-4 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-neutral-800 dark:text-neutral-100"
                  placeholder="Write your reflection here..."
                ></textarea>
              </div>
            </div>

            <!-- Timeline -->
            <div v-else-if="lesson.content.interactiveElement.type === 'timeline'" class="space-y-6">
              <div class="card p-6">
                <h4 class="font-bold text-lg mb-6 text-neutral-800 dark:text-neutral-200">Timeline</h4>
                <div class="space-y-4">
                  <div
                    v-for="event in lesson.content.interactiveElement.content.events"
                    :key="event.event"
                    class="flex items-center space-x-4"
                  >
                    <div class="w-3 h-3 bg-primary-500 rounded-full"></div>
                    <div class="flex-1 border-l-2 border-neutral-200 dark:border-neutral-700 pl-4 pb-4">
                      <div class="font-bold text-primary-600">{{ event.year || event.day || event.period }}</div>
                      <div class="text-neutral-700 dark:text-neutral-300">{{ event.event }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Tracker -->
            <div v-else-if="lesson.content.interactiveElement.type === 'tracker'" class="space-y-6">
              <div class="card p-6 text-center">
                <div class="w-24 h-24 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h4 class="font-bold text-lg mb-4 text-neutral-800 dark:text-neutral-200">
                  Challenge Tracker
                </h4>
                <p class="text-neutral-600 dark:text-neutral-400 mb-6">
                  {{ lesson.content.interactiveElement.content.challenge }}
                </p>
                <button class="btn-accent">
                  Mark Challenge Complete
                </button>
              </div>
            </div>
          </section>

          <!-- Life Application Section -->
          <section v-if="currentStep === 'application'" class="animate-fade-in">
            <h3 class="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">
              Life Application
            </h3>
            
            <div class="grid md:grid-cols-2 gap-6">
              <!-- Challenge -->
              <div class="card p-6">
                <div class="flex items-center space-x-3 mb-4">
                  <div class="w-10 h-10 bg-accent-500 rounded-lg flex items-center justify-center">
                    <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <h4 class="font-bold text-lg text-neutral-800 dark:text-neutral-200">This Week's Challenge</h4>
                </div>
                <p class="text-neutral-700 dark:text-neutral-300 mb-4">
                  {{ lesson.content.lifeApplication.challenge }}
                </p>
                <button class="btn-secondary w-full">
                  Accept Challenge
                </button>
              </div>

              <!-- Journaling -->
              <div v-if="lesson.content.lifeApplication.journaling" class="card p-6">
                <div class="flex items-center space-x-3 mb-4">
                  <div class="w-10 h-10 bg-secondary-500 rounded-lg flex items-center justify-center">
                    <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"/>
                      <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <h4 class="font-bold text-lg text-neutral-800 dark:text-neutral-200">Journal Prompt</h4>
                </div>
                <p class="text-neutral-700 dark:text-neutral-300 mb-4">
                  {{ lesson.content.lifeApplication.journaling }}
                </p>
                <textarea
                  v-model="journalEntry"
                  class="w-full h-24 p-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent dark:bg-neutral-800 dark:text-neutral-100"
                  placeholder="Write your thoughts here..."
                ></textarea>
              </div>
            </div>
          </section>

          <!-- Prayer Section -->
          <section v-if="currentStep === 'prayer'" class="animate-fade-in">
            <h3 class="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">
              Closing Prayer
            </h3>
            
            <div class="card p-8 text-center bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 border-primary-200 dark:border-primary-800">
              <div class="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"/>
                </svg>
              </div>
              
              <h4 class="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">Prayer Prompt</h4>
              <p class="text-lg text-neutral-700 dark:text-neutral-300 mb-6 italic">
                "{{ lesson.content.prayerPrompt }}"
              </p>
              
              <div v-if="isPremium" class="flex justify-center space-x-4">
                <button class="btn-secondary">
                  🔊 Audio Prayer
                </button>
                <button class="btn-secondary">
                  📖 Written Prayer
                </button>
              </div>
            </div>

            <!-- Deeper Study (Premium) -->
            <div v-if="isPremium && lesson.content.deeperStudy" class="mt-8">
              <h4 class="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
                Deeper Study Resources
              </h4>
              <div class="grid md:grid-cols-3 gap-4">
                <div v-if="lesson.content.deeperStudy.pdf" class="card p-4 text-center">
                  <svg class="w-8 h-8 text-red-500 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clip-rule="evenodd"/>
                  </svg>
                  <p class="text-sm font-medium">Study Guide PDF</p>
                  <button class="text-primary-600 text-xs mt-1">Download</button>
                </div>
                
                <div v-if="lesson.content.deeperStudy.additionalReadings" class="card p-4 text-center">
                  <svg class="w-8 h-8 text-blue-500 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
                  </svg>
                  <p class="text-sm font-medium">Additional Reading</p>
                  <button class="text-primary-600 text-xs mt-1">View List</button>
                </div>
                
                <div v-if="lesson.content.deeperStudy.discussionQuestions" class="card p-4 text-center">
                  <svg class="w-8 h-8 text-green-500 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clip-rule="evenodd"/>
                  </svg>
                  <p class="text-sm font-medium">Discussion Questions</p>
                  <button class="text-primary-600 text-xs mt-1">View Questions</button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <!-- Modal Footer -->
      <div class="bg-neutral-50 dark:bg-neutral-800 p-6 border-t border-neutral-200 dark:border-neutral-700 flex-shrink-0">
        <div class="flex items-center justify-between">
          <!-- Progress Indicator -->
          <div class="flex items-center space-x-3">
            <div class="flex items-center space-x-1">
              <div
                v-for="(step, index) in steps"
                :key="step"
                class="w-3 h-3 rounded-full transition-all duration-300"
                :class="index === currentStepIndex
                  ? 'bg-primary-500 ring-2 ring-primary-200 ring-opacity-50'
                  : index < currentStepIndex
                    ? 'bg-green-500'
                    : 'bg-neutral-300 dark:bg-neutral-600'"
              ></div>
            </div>
            <span class="text-sm font-medium text-neutral-700 dark:text-neutral-300">
              {{ currentStepIndex + 1 }} of {{ steps.length }}
            </span>
            <span class="text-xs text-neutral-500 dark:text-neutral-400 capitalize">
              {{ steps[currentStepIndex] }}
            </span>
          </div>

          <!-- Navigation Buttons -->
          <div class="flex items-center space-x-3">
            <button
              v-if="currentStepIndex > 0"
              @click="previousStep"
              class="btn-secondary"
            >
              ← Previous
            </button>
            
            <button
              v-if="currentStepIndex < steps.length - 1"
              @click="nextStep"
              class="btn-primary"
            >
              Next →
            </button>
            
            <button
              v-else
              @click="completeLesson"
              class="btn-primary"
            >
              Complete Lesson ✓
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Lesson, Study } from '../data/studies'
import ScriptureWordPopover from './ScriptureWordPopover.vue'

interface Props {
  lesson: Lesson
  study: Study
  lessonIndex: number
  isPremium: boolean
}

const props = defineProps<Props>()

const emit = defineEmits<{
  close: []
  complete: [lessonId: string]
  next: []
  upgrade: []
}>()

const steps = ['hook', 'scripture', 'interactive', 'application', 'prayer']
const currentStepIndex = ref(0)

const currentStep = computed(() => steps[currentStepIndex.value])

// Interactive element states
const quizAnswers = ref<Record<number, number>>({})
const reflectionAnswer = ref('')
const journalEntry = ref('')

const nextStep = () => {
  if (currentStepIndex.value < steps.length - 1) {
    currentStepIndex.value++
  }
}

const previousStep = () => {
  if (currentStepIndex.value > 0) {
    currentStepIndex.value--
  }
}

const completeLesson = () => {
  emit('complete', props.lesson.id)
  // Could also emit progress data here for saving
}
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
