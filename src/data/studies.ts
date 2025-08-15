export interface Lesson {
  id: string
  title: string
  duration: number // in minutes
  scripture: string
  description: string
  hookVideo?: string
  content: {
    scriptureText: string
    commentary: string[]
    interactiveElement: {
      type: 'quiz' | 'timeline' | 'reflection' | 'drag-drop' | 'tracker'
      content: any
    }
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

// Free Bible Studies
export const freeStudies: Study[] = [
  {
    id: 'life-of-jesus',
    title: 'Life of Jesus',
    description: 'Birth, ministry, miracles, parables, cross & resurrection. Interactive timelines and scripture quizzes.',
    category: 'free',
    totalDuration: 25,
    difficulty: 'beginner',
    tags: ['Jesus', 'Gospel', 'New Testament'],
    image: 'life-of-jesus',
    color: 'from-blue-500 to-blue-600',
    features: ['Interactive timelines', 'Scripture quizzes', 'Short lessons'],
    lessons: [
      {
        id: 'loj-1',
        title: 'The Birth of Jesus',
        duration: 5,
        scripture: 'Luke 2:1-20',
        description: 'Discover the miraculous birth of our Savior',
        content: {
          scriptureText: 'In those days Caesar Augustus issued a decree that a census should be taken of the entire Roman world...',
          commentary: [
            'The birth of Jesus fulfilled ancient prophecies',
            'God chose humble circumstances to enter our world',
            'The angels announced good news of great joy'
          ],
          interactiveElement: {
            type: 'timeline',
            content: {
              events: [
                { year: '6-4 BC', event: 'Jesus is born in Bethlehem' },
                { year: '4 BC', event: 'Herod the Great dies' },
                { year: '6-7 AD', event: 'Jesus visits the temple at age 12' }
              ]
            }
          },
          lifeApplication: {
            challenge: 'Consider how God might want to work through ordinary circumstances in your life today.',
            journaling: 'Write about a time when God surprised you in an unexpected way.'
          },
          prayerPrompt: 'Thank God for coming to earth as a baby, showing His love for humanity.'
        }
      },
      {
        id: 'loj-2',
        title: 'Jesus Begins His Ministry',
        duration: 5,
        scripture: 'Mark 1:9-15',
        description: 'Jesus is baptized and begins His public ministry',
        content: {
          scriptureText: 'At that time Jesus came from Nazareth in Galilee and was baptized by John in the Jordan...',
          commentary: [
            'Jesus identification with sinful humanity through baptism',
            'The Trinity revealed at Jesus baptism',
            'Jesus was tempted yet remained sinless'
          ],
          interactiveElement: {
            type: 'quiz',
            content: {
              questions: [
                {
                  question: 'Who baptized Jesus?',
                  options: ['Peter', 'John the Baptist', 'James', 'Andrew'],
                  correct: 1
                },
                {
                  question: 'How long was Jesus tempted in the wilderness?',
                  options: ['30 days', '40 days', '50 days', '7 days'],
                  correct: 1
                }
              ]
            }
          },
          lifeApplication: {
            challenge: 'Follow Jesus example of prayer and Scripture during times of testing.',
            journaling: 'Reflect on how you can resist temptation in your daily life.'
          },
          prayerPrompt: 'Ask God for strength to follow Jesus example during difficult times.'
        }
      },
      {
        id: 'loj-3',
        title: 'Miracles and Teaching',
        duration: 5,
        scripture: 'Matthew 5:1-12',
        description: 'Jesus performs miracles and teaches the Beatitudes',
        content: {
          scriptureText: 'Now when Jesus saw the crowds, he went up on a mountainside and sat down...',
          commentary: [
            'Jesus compassion led to miraculous healings',
            'The Beatitudes reveal Gods heart for the humble',
            'Jesus teachings turned worldly wisdom upside down'
          ],
          interactiveElement: {
            type: 'reflection',
            content: {
              question: 'Which Beatitude speaks most to your heart today and why?',
              prompts: [
                'Poor in spirit - humble dependence on God',
                'Mourn - comfort in times of loss',
                'Meek - gentle strength',
                'Hunger for righteousness - desire for Gods ways'
              ]
            }
          },
          lifeApplication: {
            challenge: 'Practice one Beatitude this week in your daily interactions.',
            journaling: 'Write about how you can show more mercy to others.'
          },
          prayerPrompt: 'Pray for a heart that reflects the attitudes Jesus describes in the Beatitudes.'
        }
      },
      {
        id: 'loj-4',
        title: 'The Cross',
        duration: 5,
        scripture: 'John 19:28-30',
        description: 'Jesus sacrificial death for our salvation',
        content: {
          scriptureText: 'Later, knowing that everything had now been finished, and so that Scripture would be fulfilled...',
          commentary: [
            'Jesus willingly gave His life for our sins',
            'The cross demonstrates Gods love and justice',
            'Jesus final words reveal His completed mission'
          ],
          interactiveElement: {
            type: 'reflection',
            content: {
              question: 'What does "It is finished" mean to you personally?',
              prompts: [
                'Our debt of sin is paid in full',
                'The barrier between God and humanity is removed',
                'We can have peace with God through Jesus'
              ]
            }
          },
          lifeApplication: {
            challenge: 'Share with someone this week what Jesus sacrifice means to you.',
            journaling: 'Write a thank you letter to Jesus for His sacrifice.'
          },
          prayerPrompt: 'Thank Jesus for His willing sacrifice and the forgiveness He offers.'
        }
      },
      {
        id: 'loj-5',
        title: 'The Resurrection',
        duration: 5,
        scripture: 'Luke 24:1-12',
        description: 'Jesus conquers death and rises victorious',
        content: {
          scriptureText: 'On the first day of the week, very early in the morning, the women took the spices they had prepared...',
          commentary: [
            'The empty tomb proves Jesus victory over death',
            'The resurrection gives us hope for eternal life',
            'Jesus appearance to the disciples confirms His promises'
          ],
          interactiveElement: {
            type: 'quiz',
            content: {
              questions: [
                {
                  question: 'Who first discovered the empty tomb?',
                  options: ['The disciples', 'Women followers', 'Roman guards', 'Religious leaders'],
                  correct: 1
                },
                {
                  question: 'What does the resurrection prove about Jesus?',
                  options: ['He was a good teacher', 'He is the Son of God', 'He was just a prophet', 'He was popular'],
                  correct: 1
                }
              ]
            }
          },
          lifeApplication: {
            challenge: 'Live this week with the joy and hope that comes from knowing Jesus is alive.',
            journaling: 'Write about how the resurrection changes your perspective on current challenges.'
          },
          prayerPrompt: 'Praise Jesus for His victory over death and the eternal life He offers.'
        }
      }
    ]
  },
  {
    id: 'fruit-of-spirit',
    title: 'Fruit of the Spirit',
    description: 'Short reflections, daily challenges, journaling prompts exploring the nine fruits.',
    category: 'free',
    totalDuration: 45,
    difficulty: 'beginner',
    tags: ['Character', 'Holy Spirit', 'Christian Living'],
    image: 'fruit-of-spirit',
    color: 'from-green-500 to-green-600',
    features: ['Daily challenges', 'Journaling prompts', 'Character development'],
    lessons: [
      {
        id: 'fos-1',
        title: 'Love',
        duration: 5,
        scripture: 'Galatians 5:22-23',
        description: 'Gods love transforms how we love others',
        content: {
          scriptureText: 'But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control...',
          commentary: [
            'Love is the foundation of all other spiritual fruits',
            'Gods love for us enables us to love others',
            'Love is demonstrated through actions, not just feelings'
          ],
          interactiveElement: {
            type: 'reflection',
            content: {
              question: 'How can you show Gods love to someone today?',
              prompts: [
                'Through acts of service',
                'Through encouraging words',
                'Through patient understanding',
                'Through sacrificial giving'
              ]
            }
          },
          lifeApplication: {
            challenge: 'Perform one act of love today for someone who might not expect it.',
            journaling: 'Reflect on how Gods love has changed your life.'
          },
          prayerPrompt: 'Ask God to fill your heart with His love for others.'
        }
      }
      // Additional lessons would follow similar pattern...
    ]
  },
  {
    id: 'lords-prayer',
    title: 'The Lords Prayer',
    description: 'Line-by-line study with prayer exercises.',
    category: 'free',
    totalDuration: 30,
    difficulty: 'beginner',
    tags: ['Prayer', 'Jesus Teaching', 'Spiritual Disciplines'],
    image: 'lords-prayer',
    color: 'from-purple-500 to-purple-600',
    features: ['Prayer exercises', 'Line-by-line study', 'Practical application'],
    lessons: [
      {
        id: 'lp-1',
        title: 'Our Father in Heaven',
        duration: 5,
        scripture: 'Matthew 6:9',
        description: 'Understanding our relationship with God as Father',
        content: {
          scriptureText: 'This, then, is how you should pray: Our Father in heaven, hallowed be your name...',
          commentary: [
            'God desires an intimate Father-child relationship',
            'We can approach God with confidence as His children',
            'Prayer begins with recognizing Gods character'
          ],
          interactiveElement: {
            type: 'reflection',
            content: {
              question: 'What does it mean to you that God is your Father?',
              prompts: [
                'He loves you unconditionally',
                'He provides for your needs',
                'He protects and guides you',
                'He disciplines you with love'
              ]
            }
          },
          lifeApplication: {
            challenge: 'Start your prayers this week by acknowledging God as your loving Father.',
            journaling: 'Write about what kind of Father God has been to you.'
          },
          prayerPrompt: 'Thank God for adopting you as His child and calling you by name.'
        }
      }
      // Additional lessons would follow...
    ]
  },
  {
    id: 'armor-of-god',
    title: 'Armor of God',
    description: 'Ephesians 6 breakdown, gamified "equip your armor" tracker.',
    category: 'free',
    totalDuration: 35,
    difficulty: 'beginner',
    tags: ['Spiritual Warfare', 'Ephesians', 'Victory'],
    image: 'armor-of-god',
    color: 'from-red-500 to-red-600',
    features: ['Gamified tracker', 'Spiritual warfare', 'Interactive armor'],
    lessons: [
      {
        id: 'aog-1',
        title: 'Belt of Truth',
        duration: 5,
        scripture: 'Ephesians 6:14',
        description: 'Truth as the foundation of spiritual protection',
        content: {
          scriptureText: 'Stand firm then, with the belt of truth buckled around your waist...',
          commentary: [
            'Truth is the foundation that holds everything together',
            'Gods Word is absolute truth in a relative world',
            'Living in truth protects us from deception'
          ],
          interactiveElement: {
            type: 'tracker',
            content: {
              type: 'armor-piece',
              piece: 'belt',
              challenge: 'Read one verse about truth each day this week'
            }
          },
          lifeApplication: {
            challenge: 'Commit to speaking truth in all your conversations this week.',
            journaling: 'Reflect on areas where you need to align more closely with Gods truth.'
          },
          prayerPrompt: 'Ask God to help you love and live His truth.'
        }
      }
      // Additional armor pieces would follow...
    ]
  },
  {
    id: 'psalm-23',
    title: 'Psalm 23',
    description: 'Shepherd imagery, personal application, meditation audio.',
    category: 'free',
    totalDuration: 20,
    difficulty: 'beginner',
    tags: ['Psalms', 'Comfort', 'Gods Care'],
    image: 'psalm-23',
    color: 'from-teal-500 to-teal-600',
    features: ['Meditation audio', 'Shepherd imagery', 'Personal application'],
    lessons: [
      {
        id: 'p23-1',
        title: 'The Lord is My Shepherd',
        duration: 5,
        scripture: 'Psalm 23:1',
        description: 'Understanding Gods role as our caring Shepherd',
        content: {
          scriptureText: 'The Lord is my shepherd, I lack nothing.',
          commentary: [
            'God personally cares for each of His people',
            'A shepherd knows each sheep individually',
            'In Gods care, we have everything we need'
          ],
          interactiveElement: {
            type: 'reflection',
            content: {
              question: 'How has God shown His care for you like a shepherd?',
              prompts: [
                'He has provided for your needs',
                'He has protected you from harm',
                'He has guided you in difficult decisions',
                'He has comforted you in times of trouble'
              ]
            }
          },
          lifeApplication: {
            challenge: 'Trust God as your Shepherd in one area where you feel anxious this week.',
            journaling: 'Write about a time when God provided for you in an unexpected way.'
          },
          prayerPrompt: 'Thank God for being your personal Shepherd who knows and cares for you.'
        }
      }
      // Additional verses would follow...
    ]
  },
  {
    id: 'bible-7-stories',
    title: 'Bible in 7 Stories',
    description: 'Creation to Second Coming in simple narrative form.',
    category: 'free',
    totalDuration: 35,
    difficulty: 'beginner',
    tags: ['Bible Overview', 'Salvation History', 'Big Picture'],
    image: 'bible-stories',
    color: 'from-indigo-500 to-indigo-600',
    features: ['Biblical overview', 'Narrative format', 'Salvation timeline'],
    lessons: [
      {
        id: 'b7s-1',
        title: 'Creation: The Perfect Beginning',
        duration: 5,
        scripture: 'Genesis 1:1-31',
        description: 'Gods perfect creation and humanitys special role',
        content: {
          scriptureText: 'In the beginning God created the heavens and the earth...',
          commentary: [
            'God created everything good and perfect',
            'Humans were created in Gods image',
            'God established the Sabbath as a memorial of creation'
          ],
          interactiveElement: {
            type: 'timeline',
            content: {
              events: [
                { day: 1, event: 'Light and darkness' },
                { day: 2, event: 'Sky and waters' },
                { day: 3, event: 'Land, seas, and plants' },
                { day: 4, event: 'Sun, moon, and stars' },
                { day: 5, event: 'Sea creatures and birds' },
                { day: 6, event: 'Land animals and humans' },
                { day: 7, event: 'God rested and blessed the Sabbath' }
              ]
            }
          },
          lifeApplication: {
            challenge: 'Take time this week to appreciate Gods creation around you.',
            journaling: 'Reflect on what it means to be made in Gods image.'
          },
          prayerPrompt: 'Praise God for His beautiful creation and for making you in His image.'
        }
      }
      // Additional stories would follow...
    ]
  },
  {
    id: 'faith-over-fear',
    title: 'Faith Over Fear',
    description: 'Bible promises for anxiety and courage.',
    category: 'free',
    totalDuration: 25,
    difficulty: 'beginner',
    tags: ['Fear', 'Faith', 'Anxiety', 'Courage'],
    image: 'faith-over-fear',
    color: 'from-yellow-500 to-yellow-600',
    features: ['Anxiety relief', 'Bible promises', 'Courage building'],
    lessons: [
      {
        id: 'fof-1',
        title: 'Fear Not',
        duration: 5,
        scripture: 'Isaiah 41:10',
        description: 'Gods command and promise to not fear',
        content: {
          scriptureText: 'So do not fear, for I am with you; do not be dismayed, for I am your God...',
          commentary: [
            'Fear is addressed over 300 times in the Bible',
            'Gods presence is our source of courage',
            'We can choose faith over fear in every situation'
          ],
          interactiveElement: {
            type: 'reflection',
            content: {
              question: 'What fears do you need to surrender to God today?',
              prompts: [
                'Fear of the future',
                'Fear of failure',
                'Fear of rejection',
                'Fear of loss'
              ]
            }
          },
          lifeApplication: {
            challenge: 'When fear arises this week, immediately turn to prayer and Gods promises.',
            journaling: 'Write down specific fears and counter each with a Bible promise.'
          },
          prayerPrompt: 'Ask God to replace your fears with faith in His goodness and power.'
        }
      }
      // Additional lessons would follow...
    ]
  }
]

// Premium Bible Studies
export const premiumStudies: Study[] = [
  {
    id: 'daniel-revelation',
    title: 'Prophecies of Daniel & Revelation',
    description: 'Historicist perspective, prophecy charts, interactive timeline maps.',
    category: 'premium',
    totalDuration: 350,
    difficulty: 'advanced',
    tags: ['Prophecy', 'Daniel', 'Revelation', 'End Times'],
    image: 'prophecies',
    color: 'from-purple-600 to-indigo-600',
    features: ['Prophecy charts', 'Interactive timelines', 'Historicist perspective', 'Video explainers'],
    lessons: [
      {
        id: 'dr-1',
        title: 'Introduction to Biblical Prophecy',
        duration: 25,
        scripture: 'Daniel 2:20-22',
        description: 'Understanding Gods method of revealing future events',
        content: {
          scriptureText: 'Daniel said: "Praise be to the name of God for ever and ever; wisdom and power are his..."',
          commentary: [
            'God reveals the future to prepare and encourage His people',
            'Biblical prophecy uses symbolic language that requires careful study',
            'The historicist method sees prophecy as a continuous timeline'
          ],
          interactiveElement: {
            type: 'timeline',
            content: {
              events: [
                { period: '605 BC', event: 'Daniel taken to Babylon' },
                { period: '553 BC', event: 'Vision of four beasts' },
                { period: '95 AD', event: 'John receives Revelation' }
              ]
            }
          },
          lifeApplication: {
            challenge: 'Study one prophetic passage this week and look for its historical fulfillment.',
            journaling: 'Reflect on how studying prophecy strengthens your faith.'
          },
          prayerPrompt: 'Thank God for revealing the future to give us hope and guidance.',
          deeperStudy: {
            pdf: 'prophecy-principles.pdf',
            additionalReadings: [
              'The Great Controversy chapters 1-3',
              'Daniel and Revelation Study Guide'
            ],
            discussionQuestions: [
              'Why does God reveal future events to His people?',
              'How should prophetic study affect our daily Christian living?'
            ]
          }
        }
      }
      // Additional lessons would follow...
    ]
  },
  {
    id: 'sanctuary-blueprint',
    title: 'The Sanctuary Blueprint',
    description: 'Old & New Testament connections, 3D tabernacle walkthrough, typology exercises.',
    category: 'premium',
    totalDuration: 250,
    difficulty: 'intermediate',
    tags: ['Sanctuary', 'Typology', 'Salvation', 'Old Testament'],
    image: 'sanctuary',
    color: 'from-amber-600 to-orange-600',
    features: ['3D walkthrough', 'Typology exercises', 'Visual diagrams', 'Audio narration'],
    lessons: [
      {
        id: 'sb-1',
        title: 'Gods Dwelling Place',
        duration: 25,
        scripture: 'Exodus 25:8-9',
        description: 'Understanding Gods desire to dwell with His people',
        content: {
          scriptureText: 'Then have them make a sanctuary for me, and I will dwell among them...',
          commentary: [
            'The sanctuary reveals Gods plan of salvation',
            'Every detail points to Jesus Christ',
            'The services taught Israel about forgiveness and cleansing'
          ],
          interactiveElement: {
            type: 'drag-drop',
            content: {
              type: '3d-walkthrough',
              description: 'Explore the tabernacle courtyard and identify each piece of furniture'
            }
          },
          lifeApplication: {
            challenge: 'Consider how God wants to dwell in your heart as His temple.',
            journaling: 'Write about what needs to be cleansed from your personal temple.'
          },
          prayerPrompt: 'Invite God to make His dwelling place in your heart.',
          deeperStudy: {
            pdf: 'sanctuary-layout.pdf',
            additionalReadings: [
              'Patriarchs and Prophets chapter 30',
              'The Desire of Ages chapter 16'
            ]
          }
        }
      }
      // Additional lessons would follow...
    ]
  },
  {
    id: 'health-bible',
    title: 'Health & the Bible',
    description: 'Biblical health principles, plant-based lifestyle insights, practical recipes.',
    category: 'premium',
    totalDuration: 175,
    difficulty: 'intermediate',
    tags: ['Health', 'Lifestyle', 'Wellness', 'Stewardship'],
    image: 'health',
    color: 'from-green-600 to-teal-600',
    features: ['Recipe planner', 'Health tracker', 'Lifestyle tips', 'Video demonstrations'],
    lessons: [
      {
        id: 'hb-1',
        title: 'Your Body is a Temple',
        duration: 25,
        scripture: '1 Corinthians 6:19-20',
        description: 'Understanding our responsibility for physical health',
        content: {
          scriptureText: 'Do you not know that your bodies are temples of the Holy Spirit...',
          commentary: [
            'Our bodies belong to God and should be cared for accordingly',
            'Physical health affects our spiritual and mental well-being',
            'Gods original diet in Eden provides the blueprint for health'
          ],
          interactiveElement: {
            type: 'tracker',
            content: {
              type: 'meal-planner',
              description: 'Plan three plant-based meals using biblical principles'
            }
          },
          lifeApplication: {
            challenge: 'Make one healthy change to your diet this week.',
            journaling: 'Reflect on how your physical health affects your spiritual life.'
          },
          prayerPrompt: 'Ask God to help you honor Him through your health choices.',
          deeperStudy: {
            pdf: 'biblical-health-principles.pdf',
            additionalReadings: [
              'Ministry of Healing chapters 1-3',
              'Counsels on Diet and Foods'
            ]
          }
        }
      }
      // Additional lessons would follow...
    ]
  },
  {
    id: 'sabbath-rest',
    title: 'Sabbath Rest in Scripture',
    description: 'Creation to eternity, interactive "Sabbath in history" timeline, journal prompts.',
    category: 'premium',
    totalDuration: 200,
    difficulty: 'intermediate',
    tags: ['Sabbath', 'Rest', 'Worship', 'Creation'],
    image: 'sabbath',
    color: 'from-blue-600 to-purple-600',
    features: ['Historical timeline', 'Worship guides', 'Rest exercises', 'Nature meditations'],
    lessons: [
      {
        id: 'sr-1',
        title: 'Created for Rest',
        duration: 25,
        scripture: 'Genesis 2:1-3',
        description: 'Gods pattern of work and rest established at creation',
        content: {
          scriptureText: 'By the seventh day God had finished the work he had been doing...',
          commentary: [
            'God established the Sabbath as a memorial of creation',
            'Rest is not idleness but spiritual renewal',
            'The Sabbath is a gift, not a burden'
          ],
          interactiveElement: {
            type: 'timeline',
            content: {
              events: [
                { period: 'Creation', event: 'God establishes Sabbath rest' },
                { period: 'Eden', event: 'Adam and Eve enjoy Sabbath with God' },
                { period: 'Sinai', event: 'Sabbath included in Ten Commandments' }
              ]
            }
          },
          lifeApplication: {
            challenge: 'Plan a technology-free time this Sabbath to connect with God.',
            journaling: 'Write about what true rest means to you.'
          },
          prayerPrompt: 'Thank God for the gift of Sabbath rest and renewal.',
          deeperStudy: {
            pdf: 'sabbath-through-history.pdf',
            additionalReadings: [
              'The Desire of Ages chapter 29',
              'Testimonies volume 6, pages 349-368'
            ]
          }
        }
      }
      // Additional lessons would follow...
    ]
  }
  // Additional premium studies would follow the same pattern...
]

export const allStudies = [...freeStudies, ...premiumStudies]

// Helper functions
export const getFreeStudies = () => freeStudies
export const getPremiumStudies = () => premiumStudies
export const getStudyById = (id: string) => allStudies.find(study => study.id === id)
export const getStudiesByCategory = (category: 'free' | 'premium') => 
  allStudies.filter(study => study.category === category)
