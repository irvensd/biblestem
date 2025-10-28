// Clean studies data - ready to be populated step by step

export interface GreekHebrewWord {
  word: string
  language: 'Greek' | 'Hebrew' | 'Aramaic'
  transliteration: string
  meaning: string
  context: string
  references: string[]
}

export interface ScriptureReference {
  verse: string
  text?: string
  translation?: string
  wordStudy?: GreekHebrewWord[]
}

export interface TeachingPoint {
  title?: string
  narrative: string
  scriptures: ScriptureReference[]
  examples?: string[]
  rhetoricalQuestions?: string[]
}

export interface Lesson {
  id: string
  title: string
  duration: number // in minutes
  scripture: string
  description: string
  hookVideo?: string
  openingThought?: string
  content: {
    // Traditional format
    scriptureText?: string
    commentary?: string[]
    interactiveElement?: {
      type: 'quiz' | 'timeline' | 'reflection' | 'drag-drop' | 'tracker' | 'diagram' | 'comparison' | 'checklist'
      content: any
    }
    // Sermon/teaching format
    teachingPoints?: TeachingPoint[]
    hebrewGreekWords?: GreekHebrewWord[]
    taggedScripture?: Array<{
      type: 'text' | 'word'
      text: string
      data?: GreekHebrewWord
    }>
    guidedStudy?: Array<{
      pointTitle: string
      supportingScriptures?: string[]
      commentary?: string
      reflectQuestion?: string
    }>
    keyTakeaways?: string[]
    lifeApplication: {
      challenge: string
      journaling?: string
    }
    prayerPrompt: string
    deeperStudy?: {
      pdf?: string
      additionalReadings?: string[]
      discussionQuestions?: string[]
    }
  }
  completed?: boolean
}

export interface Study {
  id: string
  title: string
  description: string
  category: 'free' | 'premium'
  lessons: Lesson[]
  totalDuration: number
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  tags: string[]
  image: string
  color: string
  features: string[]
}

// SAMPLE DATA - Adding one complete study to start
export const freeStudies: Study[] = [
  {
    id: 'how-to-study-bible',
    title: 'How to Study the Bible: The Preparation',
    description:
      "A 6-part Bible study series designed to prepare the believer to approach God's Word with prayer, maturity, humility, obedience, a teaching spirit, and trust in what God has revealed.",
    category: 'free',
    totalDuration: 36,
    difficulty: 'beginner',
    tags: ['Bible Study', 'Preparation', 'Spiritual Growth', 'Learning'],
    image: 'bible-study-prep',
    color: 'from-emerald-500 to-emerald-600',
    features: [
      'Interactive word study',
      'Guided study sections',
      'Reflection questions',
      'Free content',
    ],
    lessons: [
      {
        id: 'htsb-1',
        title: 'Prayer',
        duration: 6,
        scripture: 'Psalm 119:18',
        description:
          'Opening the Bible without prayer is like walking into a dark room without turning on the light',
        openingThought: 'The foundation of all Bible study is humble prayer, asking God to illuminate His Word.',
        content: {
          scriptureText: 'Open thou mine eyes, that I may behold wondrous things out of thy law.',
          teachingPoints: [
            {
              narrative:
                'Opening the Bible without prayer is like walking into a dark room without turning on the light. Prayer is the essential first step in Bible study because we acknowledge our utter dependence on God for spiritual understanding. The psalmist recognizes that spiritual truths are hidden from our natural understanding and require divine revelation.',
              scriptures: [
                {
                  verse: 'Psalm 119:18',
                  text: 'Open thou mine eyes, that I may behold wondrous things out of thy law.',
                  wordStudy: [
                    {
                      word: 'עיני',
                      language: 'Hebrew',
                      transliteration: 'einai',
                      meaning: 'eyes, sight, vision - representing spiritual perception and understanding',
                      context: 'The psalmist is asking for spiritual eyes to see God\'s truth, not just physical vision',
                      references: ['Psalm 119:18', 'Proverbs 20:12', 'Ephesians 1:18'],
                    },
                  ],
                },
                {
                  verse: '1 Corinthians 2:14',
                  text: 'But the natural man receiveth not the things of the Spirit of God: for they are foolishness unto him: neither can he know them, because they are spiritually discerned.',
                },
              ],
              examples: [
                'Without God\'s illumination, we can read the words but miss the transformative power of Scripture',
                'This prayer expresses humility - admitting we need God\'s help to understand His own Word',
              ],
              rhetoricalQuestions: [
                'When was the last time you asked God to open your understanding before reading His Word?',
                'Have you ever read a passage multiple times, then suddenly had it illuminated through prayer?',
              ],
            },
            {
              title: 'Why Prayer Matters',
              narrative:
                'Without God\'s illumination through prayer, we may read the words of Scripture but completely miss the transformative power that God intends for us. Spiritual things must be spiritually discerned. The Bible itself tells us that the natural person cannot understand the things of the Spirit.',
              scriptures: [
                {
                  verse: '2 Peter 1:20-21',
                  text: 'Knowing this first, that no prophecy of the scripture is of any private interpretation. For the prophecy came not in old time by the will of man: but holy men of God spake as they were moved by the Holy Ghost.',
                },
              ],
              rhetoricalQuestions: [
                'How can we expect to understand Scripture if we don\'t ask the Author for illumination?',
              ],
            },
          ],
          lifeApplication: {
            challenge:
              "Never open the Bible without first asking God for the Holy Spirit's guidance. Make it a daily habit: pray before every study session. Before you read, take a moment to ask God to open your eyes, to give you understanding, and to speak to your heart.",
            journaling: 'Write about a time when God opened your understanding to His Word. What difference did prayer make?',
          },
          prayerPrompt:
            'Lord, open my spiritual eyes to see Your truth. Give me understanding beyond what I could find on my own, and fill me with Your Spirit so I may walk in obedience. I come to Your Word today, humbly asking You to illuminate it for me.',
        },
        completed: false,
      },
      {
        id: 'htsb-2',
        title: 'Maturity - Weaning Off Human Dependence',
        duration: 6,
        scripture: '1 Corinthians 13:11',
        description:
          'God calls us to grow from milk to meat—to move from relying on others for our spiritual food to feeding ourselves',
        openingThought: 'Maturity in Bible study means developing the ability to feed yourself spiritually, not just being fed.',
        content: {
          scriptureText:
            'When I was a child, I spake as a child, I understood as a child, I thought as a child: but when I became a man, I put away childish things.',
          teachingPoints: [
            {
              narrative:
                'God calls us to grow from milk to meat—to move from relying on others for our spiritual food to feeding ourselves. Just as a child eventually learns to feed themselves, we must mature in our Bible study. While teachers and pastors are valuable gifts to the church, they are meant to equip us to study independently, not to become our sole source of truth.',
              scriptures: [
                {
                  verse: '1 Corinthians 13:11',
                  text: 'When I was a child, I spake as a child, I understood as a child, I thought as a child: but when I became a man, I put away childish things.',
                },
                {
                  verse: 'Hebrews 5:13-14',
                  text: 'For every one that useth milk is unskilful in the word of righteousness: for he is a babe. But strong meat belongeth to them that are of full age, even those who by reason of use have their senses exercised to discern both good and evil.',
                },
              ],
              examples: [
                'A mature believer can test what they hear against the Word of God',
                'A baby needs to be spoon-fed, but an adult can prepare their own meals',
              ],
              rhetoricalQuestions: [
                'Are you still relying entirely on others to tell you what the Bible means?',
                'What would happen if you could no longer attend church or Bible study? Would you still grow spiritually?',
              ],
            },
            {
              title: 'The Responsibility of Maturity',
              narrative:
                'This isn\'t about arrogance or rejecting our teachers—it\'s about the responsibility to verify truth yourself. The Bible commends those who, like the Bereans, "searched the scriptures daily" to confirm what they were taught.',
              scriptures: [
                {
                  verse: 'Acts 17:11',
                  text: 'These were more noble than those in Thessalonica, in that they received the word with all readiness of mind, and searched the scriptures daily, whether those things were so.',
                },
                {
                  verse: '1 John 2:27',
                  text: 'But the anointing which ye have received of him abideth in you, and ye need not that any man teach you: but as the same anointing teacheth you of all things, and is truth, and is no lie, and even as it hath taught you, ye shall abide in him.',
                },
              ],
              examples: [
                'The noble Bereans listened to Paul but then searched Scripture to confirm his teaching',
                'God gave you the Holy Spirit to guide you into truth - you don\'t need to wait for someone else to tell you what it means',
              ],
              rhetoricalQuestions: [
                'When you hear a teaching, do you automatically accept it or do you test it in Scripture?',
                'Do you know how to study God\'s Word for yourself, or do you depend on others for interpretation?',
              ],
            },
          ],
          lifeApplication: {
            challenge:
              'Listen to sermons and read study guides, but always test them in Scripture. Develop your own study routine so you can confirm truth without relying solely on others. Set aside time to read the Bible for yourself, without commentary or study notes, and let the Holy Spirit teach you.',
            journaling:
              'Reflect on areas where you might be leaning too heavily on others for spiritual understanding. What steps will you take to develop your own study habits?',
          },
          prayerPrompt:
            'Father, grow me from milk to meat. Give me the discipline to study Your Word for myself and the discernment to test all things by Your truth. I pray that I would be like the noble Bereans, searching the Scriptures daily.',
        },
        completed: false,
      },
      {
        id: 'htsb-3',
        title: 'Teachability',
        duration: 6,
        scripture: 'Psalm 86:11',
        description:
          "A closed mind cannot receive new truth. If we come to the Bible to prove ourselves right, we've already decided what it can say",
        content: {
          scriptureText:
            'Teach me thy way, O LORD; I will walk in thy truth: unite my heart to fear thy name.',
          commentary: [
            'A teachable spirit begins with the recognition that we don\'t have all the answers.',
            'We must come to Scripture willing to be corrected, not just to find confirmation of our opinions.',
            'The psalmist requests both learning and obedience - not just knowledge but action.',
            "True teachability means we're ready to change based on what we discover in God's Word.",
          ],
          interactiveElement: {
            type: 'reflection',
            content: {
              question:
                'Think of a time when Scripture challenged your preconceptions. How did you respond?',
            },
          },
          lifeApplication: {
            challenge:
              "When you encounter difficult or challenging passages in Scripture, ask: 'What is God teaching me here?' rather than 'How can I make this mean what I want?'",
            journaling: 'Write about an area where you struggle to remain teachable.',
          },
          prayerPrompt:
            'Lord, unite my heart to fear Your name. Remove my pride and help me approach Your Word with humility and teachability.',
        },
        completed: false,
      },
      {
        id: 'htsb-4',
        title: 'Humility',
        duration: 6,
        scripture: 'James 1:21',
        description:
          "Pride is the great barrier to receiving God's Word. We must come in humility",
        content: {
          scriptureText: 'Wherefore lay apart all filthiness and superfluity of naughtiness, and receive with meekness the engrafted word, which is able to save your souls.',
          commentary: [
            'Humility is the necessary posture for receiving God\'s Word effectively.',
            'James commands us to "receive with meekness" - the Greek word suggests flexibility and readiness to learn.',
            'The "engrafted word" implies something permanent, something that becomes part of us.',
            'This humility isn\'t self-deprecation - it\'s honest recognition of our need for God\'s wisdom.',
          ],
          interactiveElement: {
            type: 'reflection',
            content: {
              question:
                'How does pride prevent you from truly receiving God\'s Word? In what areas do you need more humility?',
            },
          },
          lifeApplication: {
            challenge:
              "Before each study session, pray: 'Lord, I lay aside my own wisdom and opinions. I come to receive Your truth with humility.'",
            journaling: 'Reflect on the connection between humility and receiving God\'s Word.',
          },
          prayerPrompt:
            'Lord, grant me meekness - not weakness, but the strength to lay aside my pride and receive Your Word with an open, teachable heart.',
        },
        completed: false,
      },
      {
        id: 'htsb-5',
        title: 'Obedience',
        duration: 6,
        scripture: 'Psalm 119:11',
        description:
          'Knowledge without obedience leads to a hard heart. The goal of Bible study is transformation, not just information',
        content: {
          scriptureText: 'Thy word have I hid in mine heart, that I might not sin against thee.',
          commentary: [
            'The purpose of Bible study is not merely to gain knowledge but to be transformed.',
            'We "hide" God\'s Word in our hearts not just by memorizing it, but by letting it shape our actions.',
            'The psalmist\'s goal is clear: "that I might not sin against thee" - practical holiness.',
            'Biblical knowledge should lead to biblical living. The test of our study is our obedience.',
          ],
          interactiveElement: {
            type: 'reflection',
            content: {
              question:
                'What have you learned from Scripture recently that you haven\'t yet applied? What\'s stopping you?',
            },
          },
          lifeApplication: {
            challenge:
              "After each study session, ask: 'What does God want me to do with this truth today?' Then do it.",
            journaling:
              'Write about a time when obeying God\'s Word transformed your life.',
          },
          prayerPrompt:
            'Father, help me not just to learn Your Word but to obey it. May Your Word be hidden in my heart so that I might not sin against You.',
        },
        completed: false,
      },
      {
        id: 'htsb-6',
        title: 'Trust',
        duration: 6,
        scripture: 'Psalm 119:165',
        description:
          'We must trust that what God has revealed is what we need. His Word is sufficient',
        content: {
          scriptureText: 'Great peace have they which love thy law: and nothing shall offend them.',
          commentary: [
            'When we love and trust God\'s Word, we find great peace - stability in the midst of life\'s storms.',
            'The Hebrew for "offend" means to stumble or fall. God\'s Word keeps us steady.',
            'This trust means we don\'t need to seek answers beyond what God has revealed.',
            'Peace comes not from having all answers, but from trusting in what God has made known.',
          ],
          interactiveElement: {
            type: 'reflection',
            content: {
              question:
                'In what areas do you struggle to trust what God has revealed? What questions make you lose peace?',
            },
          },
          lifeApplication: {
            challenge:
              'When you encounter difficult questions in your study, first ask: "What has God clearly revealed?" Trust His sufficient Word.',
            journaling: 'Reflect on how trusting God\'s Word has brought you peace.',
          },
          prayerPrompt:
            'Lord, grant me great peace through loving and trusting Your law. Help me to find my security in Your revealed truth.',
        },
        completed: false,
      },
    ],
  },
]

export const premiumStudies: Study[] = [
  {
    id: 'sanctuary-study',
    title: 'The Sanctuary Study',
    description:
      'An in-depth exploration of the heavenly sanctuary, its significance in prophecy, and its relationship to Christ\'s ministry',
    category: 'premium',
    totalDuration: 180,
    difficulty: 'advanced',
    tags: ['Sanctuary', 'Prophecy', 'Hebrew Tabernacle', 'Christ\'s Ministry', 'Advanced'],
    image: 'sanctuary',
    color: 'from-purple-600 to-purple-700',
    features: [
      'Historical context',
      'Prophetic significance',
      'Symbolic meanings',
      'Premium content',
    ],
    lessons: [
      {
        id: 'sanctuary-1',
        title: 'The Earthly Sanctuary Pattern',
        duration: 30,
        scripture: 'Exodus 25:8',
        description: 'Understanding the pattern given to Moses and its heavenly counterpart',
        content: {
          scriptureText: 'And let them make me a sanctuary; that I may dwell among them',
          commentary: ['Coming soon in premium version'],
          interactiveElement: { type: 'reflection', content: {} },
          lifeApplication: {
            challenge: 'Premium content coming soon',
          },
          prayerPrompt: 'Premium content coming soon',
        },
        completed: false,
      },
      {
        id: 'sanctuary-2',
        title: 'The Daily Service',
        duration: 30,
        scripture: 'Hebrews 9:6',
        description: 'Exploring the daily ministration in the earthly sanctuary',
        content: {
          scriptureText: 'Now when these things were thus ordained, the priests went always into the first tabernacle...',
          commentary: ['Coming soon in premium version'],
          interactiveElement: { type: 'reflection', content: {} },
          lifeApplication: {
            challenge: 'Premium content coming soon',
          },
          prayerPrompt: 'Premium content coming soon',
        },
        completed: false,
      },
    ],
  },
  {
    id: 'prophecy-timeline',
    title: 'Biblical Prophecy Timeline',
    description: 'A comprehensive study of major biblical prophecies and their fulfillment throughout history',
    category: 'premium',
    totalDuration: 240,
    difficulty: 'advanced',
    tags: ['Prophecy', 'History', 'Timeline', 'Fulfillment', 'Advanced'],
    image: 'prophecy',
    color: 'from-blue-600 to-blue-700',
    features: [
      'Interactive timeline',
      'Historical context',
      'Prophetic fulfillment',
      'Premium content',
    ],
    lessons: [
      {
        id: 'prophecy-1',
        title: 'Daniel\'s Prophetic Vision',
        duration: 40,
        scripture: 'Daniel 2',
        description: 'The prophetic kingdoms and the stone that crushes them all',
        content: {
          scriptureText: 'This is the dream; and we will tell the interpretation thereof before the king',
          commentary: ['Coming soon in premium version'],
          interactiveElement: { type: 'reflection', content: {} },
          lifeApplication: {
            challenge: 'Premium content coming soon',
          },
          prayerPrompt: 'Premium content coming soon',
        },
        completed: false,
      },
    ],
  },
  {
    id: 'three-angels-message',
    title: 'The Three Angels\' Message',
    description: 'Deep study of Revelation 14 and the three-fold message to the world before Christ\'s return',
    category: 'premium',
    totalDuration: 210,
    difficulty: 'advanced',
    tags: ['Revelation', 'Last Days', 'Evangelism', 'Three Angels', 'Advanced'],
    image: 'three-angels',
    color: 'from-orange-600 to-orange-700',
    features: [
      'Revelation study',
      'Last-day messages',
      'Evangelism focus',
      'Premium content',
    ],
    lessons: [
      {
        id: 'three-angels-1',
        title: 'The First Angel\'s Message',
        duration: 35,
        scripture: 'Revelation 14:6-7',
        description: 'The everlasting gospel and the call to worship the Creator',
        content: {
          scriptureText: 'And I saw another angel fly in the midst of heaven, having the everlasting gospel...',
          commentary: ['Coming soon in premium version'],
          interactiveElement: { type: 'reflection', content: {} },
          lifeApplication: {
            challenge: 'Premium content coming soon',
          },
          prayerPrompt: 'Premium content coming soon',
        },
        completed: false,
      },
    ],
  },
  {
    id: 'sabbath-study',
    title: 'The Sabbath: Divine Rest',
    description: 'An in-depth exploration of the Sabbath from creation to its significance today',
    category: 'premium',
    totalDuration: 150,
    difficulty: 'intermediate',
    tags: ['Sabbath', 'Creation', 'Law', 'Rest', 'Intermediate'],
    image: 'sabbath',
    color: 'from-green-600 to-green-700',
    features: [
      'Biblical foundations',
      'Practical application',
      'Historical significance',
      'Premium content',
    ],
    lessons: [
      {
        id: 'sabbath-1',
        title: 'Sabbath at Creation',
        duration: 25,
        scripture: 'Genesis 2:1-3',
        description: 'Understanding God\'s rest after creation',
        content: {
          scriptureText: 'And on the seventh day God ended his work which he had made; and he rested',
          commentary: ['Coming soon in premium version'],
          interactiveElement: { type: 'reflection', content: {} },
          lifeApplication: {
            challenge: 'Premium content coming soon',
          },
          prayerPrompt: 'Premium content coming soon',
        },
        completed: false,
      },
    ],
  },
]

// Helper functions to get studies
export function getFreeStudies(): Study[] {
  return freeStudies
}

export function getPremiumStudies(): Study[] {
  return premiumStudies
}

export function getAllStudies(): Study[] {
  return [...freeStudies, ...premiumStudies]
}

export function getStudyById(id: string): Study | undefined {
  return getAllStudies().find((s) => s.id === id)
}

export function getLessonById(studyId: string, lessonId: string): Lesson | undefined {
  const study = getStudyById(studyId)
  return study?.lessons.find((l) => l.id === lessonId)
}
