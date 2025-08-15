import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export interface StudyTemplate {
  id: string
  title: string
  description: string
  method: 'inductive' | 'topical' | 'verse-by-verse' | 'character' | 'historical' | 'theological'
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  estimatedTime: string
  icon: string
  color: string
  isPremium: boolean
  sections: TemplateSection[]
  downloadable: boolean
  pdfUrl?: string
}

export interface TemplateSection {
  id: string
  title: string
  description: string
  instructions: string[]
  questions: string[]
  tips?: string[]
}

export const useStudyTemplatesStore = defineStore('studyTemplates', () => {
  const templates = ref<StudyTemplate[]>([
    {
      id: 'inductive-basic',
      title: 'Inductive Bible Study',
      description: 'Observe, interpret, and apply Scripture through systematic study',
      method: 'inductive',
      difficulty: 'beginner',
      estimatedTime: '45-60 minutes',
      icon: '🔍',
      color: 'from-blue-500 to-blue-600',
      isPremium: false,
      downloadable: true,
      sections: [
        {
          id: 'observation',
          title: 'Step 1: Observation',
          description: 'What does the passage say?',
          instructions: [
            'Read the passage 3 times slowly',
            'Look for repeated words, phrases, or themes',
            'Note the who, what, when, where, why, and how',
            'Mark key words and phrases',
            'Identify the literary structure'
          ],
          questions: [
            'Who are the main characters?',
            'What is happening in this passage?',
            'When and where does this take place?',
            'What words or phrases are repeated?',
            'What stands out to you?'
          ],
          tips: [
            'Don\'t rush this step - observation is the foundation',
            'Use different colored pens to mark different themes',
            'Ask questions about everything you observe'
          ]
        },
        {
          id: 'interpretation',
          title: 'Step 2: Interpretation',
          description: 'What does the passage mean?',
          instructions: [
            'Consider the historical and cultural context',
            'Look up unfamiliar words in original languages',
            'Compare with other Scripture passages',
            'Identify the main theme or message',
            'Consider the author\'s original intent'
          ],
          questions: [
            'What did this mean to the original audience?',
            'What is the main theme or message?',
            'How does this fit with the surrounding context?',
            'What does this teach about God\'s character?',
            'Are there any difficult passages to understand?'
          ],
          tips: [
            'Let Scripture interpret Scripture',
            'Use reliable commentaries and study tools',
            'Consider the genre of literature (poetry, narrative, etc.)'
          ]
        },
        {
          id: 'application',
          title: 'Step 3: Application',
          description: 'What does this mean for my life today?',
          instructions: [
            'Identify timeless principles from the passage',
            'Consider how these principles apply today',
            'Look for specific actions to take',
            'Identify attitudes that need to change',
            'Make practical commitments'
          ],
          questions: [
            'What is God saying to me through this passage?',
            'How should this change my thinking or behavior?',
            'What specific action will I take this week?',
            'What promises can I claim?',
            'What warnings should I heed?'
          ],
          tips: [
            'Be specific in your applications',
            'Focus on one main application to avoid overwhelming yourself',
            'Share your insights with others for accountability'
          ]
        }
      ]
    },
    {
      id: 'topical-study',
      title: 'Topical Bible Study',
      description: 'Study a specific theme or topic throughout Scripture',
      method: 'topical',
      difficulty: 'intermediate',
      estimatedTime: '60-90 minutes',
      icon: '📝',
      color: 'from-green-500 to-green-600',
      isPremium: false,
      downloadable: true,
      sections: [
        {
          id: 'topic-selection',
          title: 'Step 1: Choose Your Topic',
          description: 'Select a biblical theme to explore',
          instructions: [
            'Choose a topic that interests you or addresses a current need',
            'Make sure the topic is broad enough for study but specific enough to be manageable',
            'Consider topics like love, forgiveness, faith, prayer, wisdom, etc.',
            'Write down why this topic is important to you'
          ],
          questions: [
            'What topic would be most helpful for your spiritual growth?',
            'What questions do you have about this topic?',
            'How does this topic relate to your current life situation?'
          ]
        },
        {
          id: 'verse-collection',
          title: 'Step 2: Gather Relevant Verses',
          description: 'Find Scripture passages that address your topic',
          instructions: [
            'Use a concordance or Bible app to find relevant verses',
            'Look for the topic in different books of the Bible',
            'Include both Old and New Testament passages',
            'Write out each verse in full',
            'Note the biblical reference for each verse'
          ],
          questions: [
            'What does the Old Testament teach about this topic?',
            'What does the New Testament add to our understanding?',
            'Are there any apparent contradictions to resolve?',
            'Which verses seem most significant?'
          ]
        },
        {
          id: 'analysis',
          title: 'Step 3: Analyze and Synthesize',
          description: 'Study what Scripture teaches about your topic',
          instructions: [
            'Group verses by similar themes or aspects',
            'Look for progression of revelation from OT to NT',
            'Note any conditions, promises, or commands',
            'Consider different perspectives presented',
            'Summarize the biblical teaching'
          ],
          questions: [
            'What are the main biblical principles about this topic?',
            'How does God\'s character relate to this topic?',
            'What examples from biblical characters illustrate this topic?',
            'What promises does God make regarding this topic?'
          ]
        }
      ]
    },
    {
      id: 'verse-by-verse',
      title: 'Verse-by-Verse Study',
      description: 'Deep dive into a specific passage, examining each verse carefully',
      method: 'verse-by-verse',
      difficulty: 'intermediate',
      estimatedTime: '30-45 minutes',
      icon: '📖',
      color: 'from-purple-500 to-purple-600',
      isPremium: false,
      downloadable: true,
      sections: [
        {
          id: 'passage-selection',
          title: 'Step 1: Select Your Passage',
          description: 'Choose a meaningful section of Scripture',
          instructions: [
            'Choose a passage that forms a complete thought (5-15 verses typically)',
            'Consider the literary boundaries (paragraph breaks, chapter divisions)',
            'Make sure you understand the broader context',
            'Read the passage multiple times'
          ],
          questions: [
            'Why did you choose this particular passage?',
            'What is the main theme or message?',
            'How does this passage fit into the larger book?'
          ]
        },
        {
          id: 'verse-analysis',
          title: 'Step 2: Analyze Each Verse',
          description: 'Examine individual verses in detail',
          instructions: [
            'Write out each verse in your own words (paraphrase)',
            'Look up key words in original languages',
            'Note verb tenses and grammatical structures',
            'Consider the logical flow from verse to verse',
            'Ask detailed questions about each verse'
          ],
          questions: [
            'What is the main point of this verse?',
            'How does this verse connect to the previous one?',
            'What questions does this verse raise?',
            'What does this reveal about God or humanity?'
          ]
        },
        {
          id: 'synthesis',
          title: 'Step 3: Put It All Together',
          description: 'Understand the passage as a whole',
          instructions: [
            'Summarize the main message of the entire passage',
            'Identify the key theological truths',
            'Consider how this passage applies to your life',
            'Look for connections to other Scripture passages'
          ],
          questions: [
            'What is the central message of this passage?',
            'How do all the verses work together?',
            'What is God teaching through this passage?',
            'How should this change my life?'
          ]
        }
      ]
    },
    {
      id: 'character-study',
      title: 'Biblical Character Study',
      description: 'Learn from the lives and examples of biblical people',
      method: 'character',
      difficulty: 'beginner',
      estimatedTime: '45-60 minutes',
      icon: '👤',
      color: 'from-amber-500 to-amber-600',
      isPremium: true,
      downloadable: true,
      sections: [
        {
          id: 'character-selection',
          title: 'Step 1: Choose a Character',
          description: 'Select a biblical person to study',
          instructions: [
            'Choose someone who interests you or whose life has lessons you need',
            'Consider both positive and negative examples',
            'Research where this person appears in Scripture',
            'Read their complete story if possible'
          ],
          questions: [
            'Why are you drawn to study this person?',
            'What do you already know about them?',
            'What would you like to learn from their life?'
          ]
        },
        {
          id: 'life-overview',
          title: 'Step 2: Study Their Life',
          description: 'Examine the character\'s background and story',
          instructions: [
            'Create a timeline of major events in their life',
            'Note their family background and cultural context',
            'Identify their occupation and social status',
            'Look for patterns in their behavior',
            'Note their relationship with God'
          ],
          questions: [
            'What shaped this person\'s character?',
            'What were the major turning points in their life?',
            'How did they respond to challenges?',
            'What were their strengths and weaknesses?'
          ]
        },
        {
          id: 'lessons-learned',
          title: 'Step 3: Extract Life Lessons',
          description: 'Apply insights from their life to yours',
          instructions: [
            'Identify positive qualities to emulate',
            'Note mistakes to avoid',
            'Consider how God worked in their life',
            'Look for principles that apply today',
            'Make specific applications to your situation'
          ],
          questions: [
            'What positive qualities can I develop?',
            'What mistakes can I learn from?',
            'How did God show grace in their failures?',
            'What encouragement do I find in their story?'
          ]
        }
      ]
    },
    {
      id: 'historical-context',
      title: 'Historical Context Study',
      description: 'Understand Scripture through its historical and cultural background',
      method: 'historical',
      difficulty: 'advanced',
      estimatedTime: '90-120 minutes',
      icon: '🏛️',
      color: 'from-red-500 to-red-600',
      isPremium: true,
      downloadable: true,
      sections: [
        {
          id: 'research-background',
          title: 'Step 1: Research the Background',
          description: 'Understand the historical setting',
          instructions: [
            'Research the time period when the text was written',
            'Study the political and social climate',
            'Learn about religious practices of the time',
            'Understand the geography and culture',
            'Identify the author and audience'
          ],
          questions: [
            'When was this written and by whom?',
            'Who was the original audience?',
            'What was happening politically and socially?',
            'What religious practices were common?'
          ]
        },
        {
          id: 'cultural-analysis',
          title: 'Step 2: Analyze Cultural Elements',
          description: 'Examine cultural practices and their significance',
          instructions: [
            'Identify customs and traditions mentioned',
            'Research the meaning of cultural practices',
            'Understand social hierarchies and relationships',
            'Study economic and trade practices',
            'Examine religious festivals and observances'
          ],
          questions: [
            'What cultural practices are mentioned?',
            'How do these practices affect the meaning?',
            'What would the original audience understand that we might miss?'
          ]
        }
      ]
    },
    {
      id: 'theological-themes',
      title: 'Theological Theme Study',
      description: 'Explore major theological concepts and doctrines',
      method: 'theological',
      difficulty: 'advanced',
      estimatedTime: '75-90 minutes',
      icon: '⛪',
      color: 'from-indigo-500 to-indigo-600',
      isPremium: true,
      downloadable: true,
      sections: [
        {
          id: 'doctrine-selection',
          title: 'Step 1: Choose a Theological Theme',
          description: 'Select a doctrine or theological concept to study',
          instructions: [
            'Choose themes like salvation, grace, Trinity, prophecy, etc.',
            'Consider your current questions about God',
            'Select something foundational to Christian faith',
            'Research how this doctrine has been understood historically'
          ],
          questions: [
            'What theological questions are you wrestling with?',
            'Which doctrines are most important to understand?',
            'How has the church historically understood this theme?'
          ]
        },
        {
          id: 'biblical-foundation',
          title: 'Step 2: Build Biblical Foundation',
          description: 'Establish what Scripture teaches about this theme',
          instructions: [
            'Gather key verses that address the theme',
            'Study how the theme develops throughout Scripture',
            'Note progressive revelation from OT to NT',
            'Consider different biblical authors\' perspectives',
            'Look for systematic presentations of the doctrine'
          ],
          questions: [
            'What does the Old Testament teach about this?',
            'How does the New Testament expand our understanding?',
            'What are the key verses that define this doctrine?'
          ]
        }
      ]
    }
  ])

  const freeTemplates = computed(() => templates.value.filter(t => !t.isPremium))
  const premiumTemplates = computed(() => templates.value.filter(t => t.isPremium))

  const getTemplatesByMethod = (method: string) => {
    return templates.value.filter(t => t.method === method)
  }

  const getTemplatesByDifficulty = (difficulty: string) => {
    return templates.value.filter(t => t.difficulty === difficulty)
  }

  const downloadTemplate = (templateId: string) => {
    const template = templates.value.find(t => t.id === templateId)
    if (!template) return

    // Generate PDF content as text (in a real app, this would generate an actual PDF)
    const content = generateTemplateContent(template)
    
    // Create and download the file
    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${template.title.replace(/\s+/g, '_')}_Study_Template.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const generateTemplateContent = (template: StudyTemplate): string => {
    let content = `${template.title.toUpperCase()}\n`
    content += `${'='.repeat(template.title.length)}\n\n`
    content += `Description: ${template.description}\n`
    content += `Estimated Time: ${template.estimatedTime}\n`
    content += `Difficulty: ${template.difficulty.charAt(0).toUpperCase() + template.difficulty.slice(1)}\n\n`

    template.sections.forEach((section, index) => {
      content += `${section.title.toUpperCase()}\n`
      content += `${'-'.repeat(section.title.length)}\n`
      content += `${section.description}\n\n`

      if (section.instructions.length > 0) {
        content += `Instructions:\n`
        section.instructions.forEach((instruction, i) => {
          content += `${i + 1}. ${instruction}\n`
        })
        content += `\n`
      }

      if (section.questions.length > 0) {
        content += `Study Questions:\n`
        section.questions.forEach((question, i) => {
          content += `${i + 1}. ${question}\n`
          content += `   Answer: ________________________\n\n`
        })
      }

      if (section.tips && section.tips.length > 0) {
        content += `Tips:\n`
        section.tips.forEach(tip => {
          content += `• ${tip}\n`
        })
        content += `\n`
      }

      content += `Notes:\n`
      content += `${'_'.repeat(50)}\n`
      content += `${'_'.repeat(50)}\n`
      content += `${'_'.repeat(50)}\n\n`
    })

    content += `\nPersonal Application:\n`
    content += `What is God teaching me through this study?\n`
    content += `${'_'.repeat(50)}\n`
    content += `${'_'.repeat(50)}\n\n`
    content += `How will I apply this to my life this week?\n`
    content += `${'_'.repeat(50)}\n`
    content += `${'_'.repeat(50)}\n\n`
    content += `Prayer:\n`
    content += `${'_'.repeat(50)}\n`
    content += `${'_'.repeat(50)}\n\n`

    return content
  }

  return {
    templates,
    freeTemplates,
    premiumTemplates,
    getTemplatesByMethod,
    getTemplatesByDifficulty,
    downloadTemplate
  }
})
