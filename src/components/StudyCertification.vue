<template>
  <div class="max-w-4xl mx-auto">
    <!-- Quiz Mode -->
    <div v-if="!showResults && !showCertificate" class="space-y-6">
      <!-- Quiz Header -->
      <div class="text-center mb-8">
        <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
        <h2 class="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
          {{ study.title }} - Certification Quiz
        </h2>
        <p class="text-neutral-600 dark:text-neutral-400">
          Complete this assessment to earn your study certificate
        </p>
      </div>

      <!-- Progress Bar -->
      <div class="mb-8">
        <div class="flex justify-between text-sm text-neutral-600 dark:text-neutral-400 mb-2">
          <span>Question {{ currentQuestionIndex + 1 }} of {{ questions.length }}</span>
          <span>{{ Math.round(((currentQuestionIndex + 1) / questions.length) * 100) }}% Complete</span>
        </div>
        <div class="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
          <div
            class="bg-gradient-to-r from-purple-500 to-indigo-600 h-2 rounded-full transition-all duration-300"
            :style="`width: ${((currentQuestionIndex + 1) / questions.length) * 100}%`"
          ></div>
        </div>
      </div>

      <!-- Current Question -->
      <div class="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 p-8">
        <div class="mb-6">
          <div class="flex items-center space-x-3 mb-4">
            <div class="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
              {{ currentQuestionIndex + 1 }}
            </div>
            <span class="text-sm font-medium text-purple-600 dark:text-purple-400">
              {{ currentQuestion.type.charAt(0).toUpperCase() + currentQuestion.type.slice(1) }} Question
            </span>
          </div>
          
          <h3 class="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
            {{ currentQuestion.question }}
          </h3>

          <!-- Scripture Reference -->
          <div v-if="currentQuestion.scripture" class="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <div class="flex items-center space-x-2 mb-2">
              <svg class="w-4 h-4 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="text-sm font-medium text-blue-800 dark:text-blue-200">{{ currentQuestion.scripture }}</span>
            </div>
            <p class="text-sm text-blue-700 dark:text-blue-300 italic">
              "{{ currentQuestion.scriptureText }}"
            </p>
          </div>
        </div>

        <!-- Answer Options -->
        <div class="space-y-3">
          <button
            v-for="(option, index) in currentQuestion.options"
            :key="index"
            @click="selectAnswer(index)"
            class="w-full text-left p-4 rounded-lg border-2 transition-all duration-200"
            :class="selectedAnswer === index 
              ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20' 
              : 'border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600'"
          >
            <div class="flex items-center space-x-3">
              <div 
                class="w-6 h-6 rounded-full border-2 flex items-center justify-center"
                :class="selectedAnswer === index 
                  ? 'border-purple-500 bg-purple-500' 
                  : 'border-neutral-300 dark:border-neutral-600'"
              >
                <div v-if="selectedAnswer === index" class="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <span class="text-neutral-900 dark:text-neutral-100">{{ option }}</span>
            </div>
          </button>
        </div>

        <!-- Navigation -->
        <div class="flex justify-between items-center mt-8">
          <button
            @click="previousQuestion"
            :disabled="currentQuestionIndex === 0"
            class="flex items-center space-x-2 px-4 py-2 text-neutral-600 dark:text-neutral-400 disabled:opacity-50 disabled:cursor-not-allowed hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            <span>Previous</span>
          </button>

          <div class="flex space-x-3">
            <button
              v-if="currentQuestionIndex < questions.length - 1"
              @click="nextQuestion"
              :disabled="selectedAnswer === null"
              class="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next Question
            </button>
            <button
              v-else
              @click="submitQuiz"
              :disabled="selectedAnswer === null"
              class="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Submit Quiz
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Quiz Results -->
    <div v-if="showResults && !showCertificate" class="text-center space-y-8">
      <!-- Results Header -->
      <div>
        <div 
          class="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6"
          :class="isPassing ? 'bg-green-100 dark:bg-green-900/30' : 'bg-red-100 dark:bg-red-900/30'"
        >
          <svg 
            class="w-12 h-12"
            :class="isPassing ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'"
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path v-if="isPassing" fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            <path v-else fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </div>

        <h2 
          class="text-3xl font-bold mb-2"
          :class="isPassing ? 'text-green-800 dark:text-green-200' : 'text-red-800 dark:text-red-200'"
        >
          {{ isPassing ? 'Congratulations!' : 'Study More Needed' }}
        </h2>
        
        <p class="text-lg text-neutral-600 dark:text-neutral-400 mb-4">
          You scored {{ correctAnswers }} out of {{ questions.length }} questions correct
        </p>

        <div class="text-6xl font-bold mb-2" :class="isPassing ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'">
          {{ Math.round((correctAnswers / questions.length) * 100) }}%
        </div>

        <p class="text-neutral-600 dark:text-neutral-400">
          {{ isPassing ? 'You have successfully completed this study!' : `You need ${passingScore}% to pass. Review the material and try again.` }}
        </p>
      </div>

      <!-- Detailed Results -->
      <div class="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 p-6">
        <h3 class="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-4">Quiz Review</h3>
        <div class="space-y-4">
          <div
            v-for="(question, index) in questions"
            :key="index"
            class="p-4 rounded-lg"
            :class="userAnswers[index] === question.correct ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800' : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800'"
          >
            <div class="flex items-start space-x-3">
              <div 
                class="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                :class="userAnswers[index] === question.correct ? 'bg-green-500' : 'bg-red-500'"
              >
                <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path v-if="userAnswers[index] === question.correct" fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  <path v-else fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </div>
              <div class="flex-1">
                <p class="font-medium text-neutral-900 dark:text-neutral-100 mb-1">
                  Question {{ index + 1 }}: {{ question.question }}
                </p>
                <p class="text-sm text-neutral-600 dark:text-neutral-400">
                  Your answer: {{ question.options[userAnswers[index]] }}
                </p>
                <p v-if="userAnswers[index] !== question.correct" class="text-sm text-green-600 dark:text-green-400">
                  Correct answer: {{ question.options[question.correct] }}
                </p>
                <p v-if="question.explanation" class="text-sm text-neutral-500 dark:text-neutral-400 mt-2 italic">
                  {{ question.explanation }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          v-if="isPassing"
          @click="generateCertificate"
          class="btn-primary flex items-center space-x-2"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
          <span>Get Your Certificate</span>
        </button>
        
        <button
          @click="retakeQuiz"
          class="btn-secondary"
        >
          {{ isPassing ? 'Retake Quiz' : 'Try Again' }}
        </button>
        
        <button
          @click="$emit('close')"
          class="btn-neutral"
        >
          Return to Study
        </button>
      </div>
    </div>

    <!-- Certificate Display -->
    <div v-if="showCertificate" class="max-w-2xl mx-auto">
      <div class="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 border-2 border-amber-200 dark:border-amber-800 rounded-xl p-8 text-center">
        <!-- Certificate Header -->
        <div class="mb-6">
          <div class="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          </div>
          <h2 class="text-2xl font-bold text-amber-800 dark:text-amber-200 mb-2">
            Certificate of Completion
          </h2>
          <p class="text-amber-700 dark:text-amber-300">
            BibleStem Interactive Bible Study
          </p>
        </div>

        <!-- Certificate Content -->
        <div class="space-y-4 mb-8">
          <p class="text-lg text-neutral-700 dark:text-neutral-300">
            This certifies that
          </p>
          <p class="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
            {{ userName || 'Student' }}
          </p>
          <p class="text-lg text-neutral-700 dark:text-neutral-300">
            has successfully completed the study
          </p>
          <p class="text-xl font-bold text-primary-600 dark:text-primary-400">
            {{ study.title }}
          </p>
          <p class="text-neutral-600 dark:text-neutral-400">
            with a score of {{ Math.round((correctAnswers / questions.length) * 100) }}%
          </p>
          <p class="text-sm text-neutral-500 dark:text-neutral-400">
            Completed on {{ new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}
          </p>
        </div>

        <!-- Certificate Actions -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            @click="downloadCertificate"
            class="btn-primary flex items-center space-x-2"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Download Certificate</span>
          </button>
          
          <button
            @click="shareCertificate"
            class="btn-secondary flex items-center space-x-2"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
            </svg>
            <span>Share Achievement</span>
          </button>
          
          <button
            @click="$emit('close')"
            class="btn-neutral"
          >
            Continue Learning
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import type { Study } from '../data/studies'

interface QuizQuestion {
  id: string
  question: string
  type: 'multiple-choice' | 'true-false' | 'application'
  options: string[]
  correct: number
  explanation?: string
  scripture?: string
  scriptureText?: string
}

interface Props {
  study: Study
  userName?: string
}

const props = defineProps<Props>()
const emit = defineEmits(['close', 'certificate-earned'])

const currentQuestionIndex = ref(0)
const selectedAnswer = ref<number | null>(null)
const userAnswers = ref<number[]>([])
const showResults = ref(false)
const showCertificate = ref(false)

const passingScore = 80 // 80% required to pass

// Generate quiz questions based on study content
const questions = ref<QuizQuestion[]>([
  {
    id: '1',
    question: 'According to the lesson, what is the primary purpose of the heavenly sanctuary?',
    type: 'multiple-choice',
    options: [
      'To provide a place for angels to worship',
      'To serve as Christ\'s high priestly ministry center',
      'To store the Ten Commandments',
      'To be a dwelling place for God alone'
    ],
    correct: 1,
    explanation: 'Christ serves as our High Priest in the heavenly sanctuary, interceding for believers.',
    scripture: 'Hebrews 8:1-2',
    scriptureText: 'We have such a High Priest, who is seated at the right hand of the throne of the Majesty in the heavens, a Minister of the sanctuary and of the true tabernacle which the Lord erected, and not man.'
  },
  {
    id: '2',
    question: 'The earthly sanctuary was built according to the pattern shown to Moses on Mount Sinai.',
    type: 'true-false',
    options: ['True', 'False'],
    correct: 0,
    explanation: 'God showed Moses the exact pattern for the earthly sanctuary, which was a copy of the heavenly reality.',
    scripture: 'Exodus 25:40'
  },
  {
    id: '3',
    question: 'Which historical event marked the beginning of the investigative judgment according to Seventh-day Adventist understanding?',
    type: 'multiple-choice',
    options: [
      'The crucifixion of Christ in 31 AD',
      'The destruction of Jerusalem in 70 AD',
      'The cleansing of the sanctuary in 1844 AD',
      'The Protestant Reformation in 1517 AD'
    ],
    correct: 2,
    explanation: 'The 2300-day prophecy of Daniel 8:14 points to 1844 as the beginning of the cleansing of the heavenly sanctuary.',
    scripture: 'Daniel 8:14'
  },
  {
    id: '4',
    question: 'How should understanding Christ\'s heavenly ministry affect your daily prayer life?',
    type: 'application',
    options: [
      'Pray less because Christ is already interceding',
      'Pray with confidence knowing Christ advocates for you',
      'Focus only on praising God, not asking for things',
      'Pray directly to the Father without mentioning Christ'
    ],
    correct: 1,
    explanation: 'Knowing Christ intercedes for us should give us boldness and confidence in prayer.',
    scripture: 'Hebrews 4:14-16'
  },
  {
    id: '5',
    question: 'What is the significance of the Sabbath as described in the study?',
    type: 'multiple-choice',
    options: [
      'It was created only for the Jewish people',
      'It is a memorial of God\'s creative power for all humanity',
      'It was abolished when Christ died on the cross',
      'It is optional for Christians to observe'
    ],
    correct: 1,
    explanation: 'The Sabbath was instituted at creation as a memorial of God\'s creative power and a blessing for all people.',
    scripture: 'Genesis 2:2-3'
  }
])

const currentQuestion = computed(() => questions.value[currentQuestionIndex.value])
const correctAnswers = computed(() => 
  userAnswers.value.filter((answer, index) => answer === questions.value[index].correct).length
)
const isPassing = computed(() => 
  (correctAnswers.value / questions.value.length) * 100 >= passingScore
)

const selectAnswer = (answerIndex: number) => {
  selectedAnswer.value = answerIndex
}

const nextQuestion = () => {
  if (selectedAnswer.value !== null) {
    userAnswers.value[currentQuestionIndex.value] = selectedAnswer.value
    selectedAnswer.value = null
    currentQuestionIndex.value++
  }
}

const previousQuestion = () => {
  if (currentQuestionIndex.value > 0) {
    currentQuestionIndex.value--
    selectedAnswer.value = userAnswers.value[currentQuestionIndex.value] ?? null
  }
}

const submitQuiz = () => {
  if (selectedAnswer.value !== null) {
    userAnswers.value[currentQuestionIndex.value] = selectedAnswer.value
    showResults.value = true
    
    // Save results to localStorage for persistence
    const results = {
      studyId: props.study.id,
      score: correctAnswers.value,
      total: questions.value.length,
      passed: isPassing.value,
      completedAt: new Date().toISOString(),
      answers: userAnswers.value
    }
    localStorage.setItem(`quiz-results-${props.study.id}`, JSON.stringify(results))
  }
}

const retakeQuiz = () => {
  currentQuestionIndex.value = 0
  selectedAnswer.value = null
  userAnswers.value = []
  showResults.value = false
  showCertificate.value = false
}

const generateCertificate = () => {
  showCertificate.value = true
  
  // Emit certificate earned event for achievements system
  emit('certificate-earned', {
    studyId: props.study.id,
    studyTitle: props.study.title,
    score: Math.round((correctAnswers.value / questions.value.length) * 100),
    earnedAt: new Date()
  })
}

const downloadCertificate = () => {
  // In a real app, this would generate a PDF certificate
  const content = `CERTIFICATE OF COMPLETION

BibleStem Interactive Bible Study

This certifies that ${props.userName || 'Student'} has successfully completed the study:

${props.study.title}

Score: ${Math.round((correctAnswers.value / questions.value.length) * 100)}%
Date: ${new Date().toLocaleDateString()}

Congratulations on your commitment to Bible study!`

  const blob = new Blob([content], { type: 'text/plain' })
  const url = URL.createObjectURL(blob)
  
  const link = document.createElement('a')
  link.href = url
  link.download = `${props.study.title.replace(/[^a-zA-Z0-9]/g, '-')}-certificate.txt`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  
  URL.revokeObjectURL(url)
}

const shareCertificate = () => {
  const shareText = `I just completed "${props.study.title}" on BibleStem with a score of ${Math.round((correctAnswers.value / questions.value.length) * 100)}%! 🎓📖 #BibleStudy #Faith #Learning`
  
  if (navigator.share) {
    navigator.share({
      title: 'Bible Study Completion',
      text: shareText,
    })
  } else {
    navigator.clipboard.writeText(shareText).then(() => {
      alert('Certificate share text copied to clipboard!')
    })
  }
}

onMounted(() => {
  // Load any previous results if available
  const savedResults = localStorage.getItem(`quiz-results-${props.study.id}`)
  if (savedResults) {
    console.log('Previous quiz results found:', JSON.parse(savedResults))
  }
})
</script>

<style scoped>
/* Add any custom styles for the quiz interface */
.btn-primary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-primary:disabled:hover {
  background-color: inherit;
}
</style>
