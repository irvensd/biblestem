export interface GreekHebrewWord {
  word: string
  language: 'Greek' | 'Hebrew' | 'Aramaic'
  transliteration: string
  meaning: string
  context: string
  references: string[]
}

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
      type:
        | 'quiz'
        | 'timeline'
        | 'reflection'
        | 'drag-drop'
        | 'tracker'
        | 'diagram'
        | 'comparison'
        | 'checklist'
      content: any
    }
    hebrewGreekWords?: GreekHebrewWord[]
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
    id: 'how-to-study-bible',
    title: 'How to Study the Bible: The Preparation',
    description:
      "A 6-part Bible study series designed to prepare the believer to approach God's Word with prayer, maturity, humility, obedience, a teaching spirit, and trust in what God has revealed.",
    category: 'free',
    totalDuration: 36, // 6 lessons × 6 minutes each
    difficulty: 'beginner',
    tags: ['Bible Study', 'Preparation', 'Spiritual Growth', 'Learning'],
    image: 'bible-study-prep',
    color: 'from-emerald-500 to-emerald-600',
    features: [
      'Interactive word study',
      'Guided study sections',
      'Reflection questions',
      'Premium content',
    ],
    lessons: [
      {
        id: 'htsb-1',
        title: 'Prayer',
        duration: 6,
        scripture: 'Psalm 119:18',
        description:
          'Opening the Bible without prayer is like walking into a dark room without turning on the light',
        content: {
          scriptureText: 'Open thou mine eyes, that I may behold wondrous things out of thy law.',
          commentary: [
            'Prayer is the essential first step in Bible study. We acknowledge our dependence on God for spiritual understanding.',
            'The psalmist recognizes that spiritual truths are hidden from our natural understanding and require divine revelation.',
            "Without God's illumination, we can read the words but miss the transformative power of Scripture.",
            "This prayer expresses humility - admitting we need God's help to understand His own Word.",
          ],
          interactiveElement: {
            type: 'quiz',
            content: {
              questions: [
                {
                  question: 'In Psalm 119:18, what kind of "eyes" is the psalmist talking about?',
                  options: ['Physical vision', 'Spiritual understanding', 'Night vision goggles'],
                  correct: 1,
                },
              ],
            },
          },
          lifeApplication: {
            challenge:
              "Never open the Bible without first asking God for the Holy Spirit's guidance. Make it a daily habit: pray before every study session.",
            journaling: 'Write about a time when God opened your understanding to His Word.',
          },
          prayerPrompt:
            'Lord, open my spiritual eyes to see Your truth. Give me understanding beyond what I could find on my own, and fill me with Your Spirit so I may walk in obedience.',
          deeperStudy: {
            additionalReadings: [
              'The Practice of Spiritual Reading',
              'Opening Scripture with Prayer',
            ],
            discussionQuestions: [
              'Why is prayer essential before studying the Bible?',
              'How does the Holy Spirit open our understanding?',
              'What is the danger of studying without prayer?',
            ],
          },
        },
      },
      {
        id: 'htsb-2',
        title: 'Mature and Be Weaned Off from Human Dependence',
        duration: 6,
        scripture: '1 Corinthians 13:11',
        description:
          'God calls us to grow from milk to meat—to move from relying on others for our spiritual food to feeding ourselves',
        content: {
          scriptureText:
            'When I was a child, I spake as a child, I understood as a child, I thought as a child: but when I became a man, I put away childish things.',
          commentary: [
            "Spiritual maturity means moving from dependence on others' faith to developing your own relationship with God.",
            'While teachers and mentors are valuable, we must learn to study and discover truth for ourselves.',
            "Childlike faith is beautiful, but childish dependence on others' understanding limits our growth.",
            'Mature believers can discern truth from Scripture rather than simply accepting what others say.',
          ],
          interactiveElement: {
            type: 'quiz',
            content: {
              questions: [
                {
                  question: 'According to Hebrews 5:14, what belongs to those of full age?',
                  options: ['Milk', 'Strong meat', 'Water'],
                  correct: 1,
                },
              ],
            },
          },
          lifeApplication: {
            challenge:
              'Listen to sermons and read study guides, but always test them in Scripture. Develop your own study routine so you can confirm truth without relying solely on others.',
            journaling:
              'Reflect on areas where you might be leaning too heavily on others for spiritual understanding.',
          },
          prayerPrompt:
            'Father, grow me from milk to meat. Give me the discipline to study Your Word for myself and the discernment to test all things by Your truth.',
        },
      },
      {
        id: 'htsb-3',
        title: 'Must Have a Teachable Spirit',
        duration: 6,
        scripture: 'Psalm 86:11',
        description:
          "A closed mind cannot receive new truth. If we come to the Bible to prove ourselves right, we've already decided what it can say",
        content: {
          scriptureText:
            'Teach me thy way, O LORD; I will walk in thy truth: unite my heart to fear thy name.',
          commentary: [
            "A teachable spirit begins with recognizing that we don't know everything and need God's instruction.",
            'Pride is the enemy of learning. When we think we already know, we close ourselves to new understanding.',
            "An undivided heart seeks God's truth above personal preferences or preconceived ideas.",
            'The fear of the Lord is the beginning of wisdom - reverent awe opens us to divine instruction.',
          ],
          interactiveElement: {
            type: 'quiz',
            content: {
              questions: [
                {
                  question: 'What is one key requirement for having a teachable spirit?',
                  options: [
                    'Being stubborn about your beliefs',
                    "Emptying self to receive God's truth",
                    'Knowing more than everyone else',
                  ],
                  correct: 1,
                },
              ],
            },
          },
          lifeApplication: {
            challenge:
              'Begin each study with a surrender prayer: "Lord, teach me Your ways, even if it changes mine." Guard against the temptation to twist Scripture to match personal preference.',
            journaling: 'Write about a time when God corrected your understanding of His Word.',
          },
          prayerPrompt:
            'Lord, empty me of pride and self. Give me a humble, teachable spirit that welcomes Your correction and rejoices in Your truth.',
        },
      },
      {
        id: 'htsb-4',
        title: 'Be Willing to Obey What You Learn',
        duration: 6,
        scripture: 'John 7:17',
        description:
          'God reveals truth to those who are willing to follow it. Many never grow in Bible understanding because they treat Scripture as information rather than instruction',
        content: {
          scriptureText:
            'If any man will do his will, he shall know of the doctrine, whether it be of God, or whether I speak of myself.',
          commentary: [
            "Knowledge without obedience is worthless. God doesn't give us His Word just to satisfy our curiosity.",
            'Many people enjoy studying Scripture but resist applying its teachings to their daily lives.',
            'True understanding comes through doing, not just hearing. Obedience deepens our comprehension.',
            'When we refuse to obey what we already know, God may withhold further revelation.',
          ],
          interactiveElement: {
            type: 'quiz',
            content: {
              questions: [
                {
                  question:
                    'According to James 1:22, what happens if we are hearers only and not doers?',
                  options: ['We grow spiritually', 'We deceive ourselves', 'We impress others'],
                  correct: 1,
                },
              ],
            },
          },
          lifeApplication: {
            challenge:
              "When God shows you a truth, write down the specific step you'll take to obey it. Treat each study as a call to action.",
            journaling:
              "Identify one area where you need to move from hearing to doing God's Word.",
          },
          prayerPrompt:
            'Lord, make me willing to obey all You reveal to me. Give me courage to act on truth, even when it is difficult.',
        },
      },
      {
        id: 'htsb-5',
        title: 'Approach the Bible with Prayer',
        duration: 6,
        scripture: 'Psalm 119:18',
        description:
          "Prayer is not an optional extra in Bible study—it's the lifeline. Without the Holy Spirit's illumination, the Bible remains a closed book",
        content: {
          scriptureText: 'Open thou mine eyes, that I may behold wondrous things out of thy law.',
          commentary: [
            'Prayer is the essential first step in Bible study. We acknowledge our dependence on God for spiritual understanding.',
            'The psalmist recognizes that spiritual truths are hidden from our natural understanding and require divine revelation.',
            "Without God's illumination, we can read the words but miss the transformative power of Scripture.",
            "This prayer expresses humility - admitting we need God's help to understand His own Word.",
          ],
          interactiveElement: {
            type: 'quiz',
            content: {
              questions: [
                {
                  question: 'Who guides us into all truth?',
                  options: ['The church', 'The Holy Spirit', 'Our own wisdom'],
                  correct: 1,
                },
              ],
            },
          },
          lifeApplication: {
            challenge:
              'Begin each study session with prayer for understanding, humility, and application. Keep an ongoing dialogue with God as you read.',
            journaling: 'Write about how prayer has enhanced your Bible study experience.',
          },
          prayerPrompt:
            'Holy Spirit, open my eyes to see the wonders in Your Word. Lead me into all truth and give me the courage to walk in it.',
        },
      },
      {
        id: 'htsb-6',
        title: 'Interpret Scripture with Scripture',
        duration: 6,
        scripture: 'Isaiah 28:10',
        description:
          'The Bible is its own best interpreter. One verse, taken alone, can be misunderstood—but when compared with the whole, the meaning becomes clear',
        content: {
          scriptureText:
            'For precept must be upon precept, precept upon precept; line upon line, line upon line; here a little, and there a little.',
          commentary: [
            "God hasn't revealed everything to us, and that's okay. He gives us what we need to know to live faithfully.",
            "Some people become frustrated when they can't understand everything in Scripture. This verse teaches contentment with mystery.",
            'Our focus should be on obeying what God has clearly revealed rather than speculating about hidden things.',
            'What God has revealed is sufficient for faith and godly living. We can trust Him with the rest.',
          ],
          interactiveElement: {
            type: 'quiz',
            content: {
              questions: [
                {
                  question: 'According to 2 Peter 1:20, what is no prophecy of Scripture of?',
                  options: ['Private interpretation', 'Public teaching', 'Divine origin'],
                  correct: 0,
                },
              ],
            },
          },
          lifeApplication: {
            challenge:
              'When studying a topic, gather all related verses before forming a conclusion. Use cross-references and Bible tools to connect the dots.',
            journaling:
              'Reflect on how comparing multiple verses has clarified a biblical truth for you.',
          },
          prayerPrompt:
            'Lord, teach me to compare Scripture with Scripture. Guard me from forming beliefs based on isolated texts and guide me into balanced truth.',
        },
      },
    ],
  },
  {
    id: 'where-bible-came-from',
    title: 'Where Did the Bible Come From?',
    description:
      'Explore the divine inspiration, canonical formation, manuscript preservation, and translation reliability of Scripture. Build confidence that you can trust this book.',
    category: 'free',
    totalDuration: 30, // 5 lessons × 6 minutes each
    difficulty: 'beginner',
    tags: ['Bible History', 'Inspiration', 'Canon', 'Manuscripts', 'Translation'],
    image: 'bible-origins',
    color: 'from-blue-500 to-blue-600',
    features: [
      'Historical evidence',
      'Manuscript studies',
      'Translation principles',
      'Trust builders',
    ],
    lessons: [
      {
        id: 'wbcf-1',
        title: "Divine Inspiration: God's Breathed Word",
        duration: 6,
        scripture: '2 Timothy 3:16',
        description: 'Understanding how God moved through human authors to give us His Word',
        content: {
          scriptureText:
            'All Scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness.',
          commentary: [
            "The Bible claims divine authorship through human instruments. God superintended the writing process while preserving each author's personality and style.",
            'The Greek word "theopneustos" means "God-breathed" - Scripture originates from God Himself, not human imagination.',
            'Divine inspiration ensures accuracy in the original manuscripts while using the cultural context and language of each human author.',
            "This divine-human cooperation explains both the Bible's supernatural unity and its diverse literary styles across centuries.",
          ],
          interactiveElement: {
            type: 'quiz',
            content: {
              questions: [
                {
                  question: 'What does "theopneustos" mean in 2 Timothy 3:16?',
                  options: ['Human wisdom', 'God-breathed', 'Ancient writing'],
                  correct: 1,
                },
              ],
            },
          },
          lifeApplication: {
            challenge:
              "Approach the Bible this week as God's direct communication to you. Let this truth change how you read and respond to Scripture.",
            journaling:
              'Write about what it means to you that God chose to speak through His written Word.',
          },
          prayerPrompt:
            'Thank God for breathing His truth into human language so we can know Him and His will for our lives.',
        },
      },
      {
        id: 'wbcf-2',
        title: 'The Formation of the Canon',
        duration: 6,
        scripture: 'Revelation 22:18-19',
        description: 'How the 66 books were recognized as authentic Scripture',
        content: {
          scriptureText:
            'For I testify unto every man that heareth the words of the prophecy of this book, If any man shall add unto these things, God shall add unto him the plagues that are written in this book.',
          commentary: [
            "The biblical canon wasn't decided by human committees but recognized by the early church through divine guidance and established criteria.",
            'Books were accepted based on apostolic authorship, doctrinal consistency, widespread church acceptance, and self-authenticating divine authority.',
            "The Old Testament canon was essentially established by Jesus' time, and He validated it by His use and references.",
            'The New Testament canon was recognized through the same Spirit that inspired the writing, confirming which books carried divine authority.',
          ],
          interactiveElement: {
            type: 'timeline',
            content: {
              events: [
                { period: '400 BC', event: 'Old Testament canon essentially complete' },
                { period: '50-95 AD', event: 'New Testament books written' },
                { period: '367 AD', event: 'Athanasius lists 27 NT books' },
                { period: '397 AD', event: 'Council of Carthage confirms canon' },
              ],
            },
          },
          lifeApplication: {
            challenge:
              "Study how Jesus referenced Old Testament books to see His validation of Scripture's authority.",
            journaling:
              "Reflect on why having a closed canon protects the integrity of God's revelation.",
          },
          prayerPrompt:
            'Thank God for preserving exactly the books He intended for His people throughout all generations.',
        },
      },
      {
        id: 'wbcf-3',
        title: 'Manuscript Evidence and Preservation',
        duration: 6,
        scripture: 'Isaiah 40:8',
        description: 'How God preserved His Word through thousands of ancient manuscripts',
        content: {
          scriptureText:
            'The grass withereth, the flower fadeth: but the word of our God shall stand for ever.',
          commentary: [
            'We have more manuscript evidence for the Bible than any other ancient document, with over 5,800 Greek New Testament manuscripts.',
            'The Dead Sea Scrolls confirmed the accurate preservation of Old Testament texts across more than 1,000 years.',
            'Minor variations between manuscripts actually demonstrate the careful transmission process - scribes were meticulous about accuracy.',
            "No major doctrine depends on disputed textual variants. The manuscript evidence overwhelmingly supports the Bible's reliable preservation.",
          ],
          interactiveElement: {
            type: 'quiz',
            content: {
              questions: [
                {
                  question: 'Approximately how many Greek New Testament manuscripts exist today?',
                  options: ['About 500', 'About 5,800', 'About 50'],
                  correct: 1,
                },
              ],
            },
          },
          lifeApplication: {
            challenge:
              "Research the manuscript evidence for one book of the Bible and be amazed at God's preservation.",
            journaling:
              "Write about how knowing the Bible's manuscript reliability strengthens your faith.",
          },
          prayerPrompt:
            'Praise God for His faithfulness in preserving His Word across centuries and cultures.',
        },
      },
      {
        id: 'wbcf-4',
        title: 'Translation Principles and Reliability',
        duration: 6,
        scripture: 'Nehemiah 8:8',
        description:
          "Understanding how God's Word crosses language barriers while maintaining truth",
        content: {
          scriptureText:
            'So they read in the book in the law of God distinctly, and gave the sense, and caused them to understand the reading.',
          commentary: [
            'Translation has biblical precedent - Ezra and the Levites translated and explained Hebrew Scripture to Aramaic-speaking Jews.',
            'Good translation balances word-for-word accuracy with thought-for-thought clarity, preserving both meaning and readability.',
            'Multiple translation approaches (formal, dynamic, paraphrase) serve different purposes in Bible study and devotional reading.',
            "The abundance of quality translations today gives us confidence that God's message transcends any single language or culture.",
          ],
          interactiveElement: {
            type: 'reflection',
            content: {
              question: 'Which Bible translation(s) do you use and why?',
              prompts: [
                'Formal equivalence (word-for-word accuracy)',
                'Dynamic equivalence (thought-for-thought clarity)',
                'Paraphrase (contemporary expression)',
                'Multiple translations for comparison',
              ],
            },
          },
          lifeApplication: {
            challenge:
              'Compare a familiar passage in 2-3 different translations to see how they complement each other.',
            journaling:
              "Reflect on how translation work is itself a ministry of making God's Word accessible.",
          },
          prayerPrompt:
            'Thank God for translators who have dedicated their lives to making His Word available in every language.',
        },
      },
      {
        id: 'wbcf-5',
        title: 'Can I Trust This Book?',
        duration: 6,
        scripture: 'Psalm 119:160',
        description: "Building unshakeable confidence in Scripture's trustworthiness",
        content: {
          scriptureText:
            'Thy word is true from the beginning: and every one of thy righteous judgments endureth for ever.',
          commentary: [
            "The Bible's internal consistency across 1,500 years, 40+ authors, and multiple cultures demonstrates divine orchestration.",
            'Archaeological discoveries continue to confirm biblical historical accuracy rather than contradicting it.',
            "Fulfilled prophecies provide supernatural evidence of the Bible's divine origin - no human could predict the future with such precision.",
            "The Bible's transformative power in millions of lives throughout history testifies to its divine authority and truth.",
          ],
          interactiveElement: {
            type: 'quiz',
            content: {
              questions: [
                {
                  question: "What is one key evidence for the Bible's divine origin?",
                  options: ["It's an old book", 'Fulfilled prophecies', "It's popular"],
                  correct: 1,
                },
              ],
            },
          },
          lifeApplication: {
            challenge:
              "Choose one fulfilled prophecy to study this week and see God's supernatural knowledge of the future.",
            journaling:
              "Write about specific ways you've seen the Bible prove trustworthy in your own life.",
          },
          prayerPrompt:
            "Declare your confidence in God's Word and ask Him to deepen your trust in its complete reliability.",
        },
      },
    ],
  },
  {
    id: 'bible-story-one-sweep',
    title: 'The Story of the Bible in One Sweep',
    description:
      'See the big picture narrative from Creation to New Earth: Creation → Fall → Covenant → Christ → Church → New Earth. Not just scattered verses, but one unified story.',
    category: 'free',
    totalDuration: 42, // 7 lessons × 6 minutes each
    difficulty: 'beginner',
    tags: ['Bible Overview', 'Salvation History', 'Big Picture', 'Narrative', 'Timeline'],
    image: 'bible-timeline',
    color: 'from-purple-500 to-purple-600',
    features: ['Complete narrative', 'Biblical timeline', 'Unified story', 'Big picture view'],
    lessons: [
      {
        id: 'bsos-1',
        title: 'Creation: The Perfect Beginning',
        duration: 6,
        scripture: 'Genesis 1:31',
        description: 'God creates a perfect world for relationship with humanity',
        content: {
          scriptureText:
            'And God saw every thing that he had made, and, behold, it was very good. And the evening and the morning were the sixth day.',
          commentary: [
            'God created everything perfect - no death, suffering, or sin. The world was designed for unbroken fellowship between Creator and creation.',
            "Humanity was made in God's image as His representatives on earth, given dominion and responsibility to care for creation.",
            'The Sabbath was established as a weekly reminder of our dependence on God and His perfect creation order.',
            'This perfect beginning sets the stage for understanding what sin destroyed and what God is working to restore.',
          ],
          interactiveElement: {
            type: 'timeline',
            content: {
              events: [
                { day: 1, event: 'Light separated from darkness' },
                { day: 2, event: 'Waters above and below separated' },
                { day: 3, event: 'Land, seas, and vegetation created' },
                { day: 4, event: 'Sun, moon, and stars created' },
                { day: 5, event: 'Sea creatures and birds created' },
                { day: 6, event: 'Land animals and humans created' },
                { day: 7, event: 'God rested and sanctified the Sabbath' },
              ],
            },
          },
          lifeApplication: {
            challenge:
              "Observe God's creation this week and reflect on His original perfect design.",
            journaling:
              "Write about what it means to be made in God's image and how that affects your daily life.",
          },
          prayerPrompt:
            'Thank God for creating you in His image and for the hope of restoration to His perfect design.',
        },
      },
      {
        id: 'bsos-2',
        title: 'The Fall: Paradise Lost',
        duration: 6,
        scripture: 'Genesis 3:6',
        description: 'Sin enters the world and breaks the perfect relationship with God',
        content: {
          scriptureText:
            'And when the woman saw that the tree was good for food, and that it was pleasant to the eyes, and a tree to be desired to make one wise, she took of the fruit thereof, and did eat, and gave also unto her husband with her; and he did eat.',
          commentary: [
            "Adam and Eve's disobedience brought sin, death, and separation from God into the world, affecting all creation.",
            'The temptation followed the same pattern we face today: the lust of the flesh, lust of the eyes, and pride of life.',
            "Immediately after the fall, God promised redemption through the woman's offspring who would crush the serpent's head.",
            'Death entered as the consequence of sin, but even in judgment, God showed mercy by providing clothing and a way back to Him.',
          ],
          interactiveElement: {
            type: 'reflection',
            content: {
              question: "How do you see the effects of the fall in today's world?",
              prompts: [
                'Broken relationships and conflict',
                'Death and suffering',
                'Corruption and injustice',
                'Separation from God',
              ],
            },
          },
          lifeApplication: {
            challenge:
              'Recognize the reality of sin in your own life this week and turn to God for forgiveness.',
            journaling: 'Reflect on how sin has affected your relationship with God and others.',
          },
          prayerPrompt:
            "Confess your need for God's forgiveness and thank Him for the promise of redemption.",
        },
      },
      {
        id: 'bsos-3',
        title: "The Covenant: God's Promise of Redemption",
        duration: 6,
        scripture: 'Genesis 12:3',
        description: 'God chooses Abraham and makes promises that will bless all nations',
        content: {
          scriptureText:
            'And I will bless them that bless thee, and curse him that curseth thee: and in thee shall all families of the earth be blessed.',
          commentary: [
            'God chose Abraham to be the father of a nation through which the promised Redeemer would come to bless all humanity.',
            'The covenant included promises of land, descendants, and blessing - both physical and spiritual fulfillment.',
            'This covenant was confirmed to Isaac, Jacob, and developed through the nation of Israel throughout the Old Testament.',
            'Every covenant in Scripture points forward to the ultimate fulfillment in Jesus Christ, the promised seed.',
          ],
          interactiveElement: {
            type: 'timeline',
            content: {
              events: [
                { period: '2100 BC', event: 'God calls Abraham' },
                { period: '2000 BC', event: 'Isaac born' },
                { period: '1900 BC', event: 'Jacob receives covenant' },
                { period: '1500 BC', event: 'Law given through Moses' },
                { period: '1000 BC', event: 'Davidic covenant established' },
              ],
            },
          },
          lifeApplication: {
            challenge:
              "Study how God's faithfulness to His promises with Abraham encourages your faith today.",
            journaling: "Write about God's faithfulness in keeping His promises in your own life.",
          },
          prayerPrompt:
            'Thank God for His faithfulness to His promises and for including you in His covenant family.',
        },
      },
      {
        id: 'bsos-4',
        title: 'Christ: The Promise Fulfilled',
        duration: 6,
        scripture: 'Galatians 4:4',
        description: 'Jesus comes as the promised Redeemer to restore the broken relationship',
        content: {
          scriptureText:
            'But when the fulness of the time was come, God sent forth his Son, made of a woman, made under the law.',
          commentary: [
            'Jesus is the promised seed of Abraham, the descendant of David, and the fulfillment of all Old Testament prophecies.',
            'His life, death, and resurrection accomplished what the law could not - complete forgiveness and restoration to God.',
            "Christ's sacrifice was the once-for-all payment for sin, replacing the temporary sacrificial system with permanent redemption.",
            "Through Jesus, the covenant promises are extended to all nations, fulfilling God's promise to bless all families of the earth.",
          ],
          interactiveElement: {
            type: 'quiz',
            content: {
              questions: [
                {
                  question: "Jesus is the fulfillment of God's promise to whom?",
                  options: ['Moses only', 'Abraham and all nations', 'Israel only'],
                  correct: 1,
                },
              ],
            },
          },
          lifeApplication: {
            challenge:
              'Study one Old Testament prophecy about Jesus and marvel at its fulfillment.',
            journaling:
              "Write about what Jesus' life, death, and resurrection mean to you personally.",
          },
          prayerPrompt:
            "Thank Jesus for fulfilling God's promises and providing the way back to the Father.",
        },
      },
      {
        id: 'bsos-5',
        title: 'The Church: Spreading the Good News',
        duration: 6,
        scripture: 'Matthew 28:19-20',
        description: "God's people commissioned to take the gospel to all nations",
        content: {
          scriptureText:
            'Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost: Teaching them to observe all things whatsoever I have commanded you.',
          commentary: [
            "The church is commissioned to continue Christ's mission of reconciling the world to God through the gospel message.",
            'The Holy Spirit empowers believers to be witnesses, starting locally and extending to the ends of the earth.',
            'The church represents all nations and peoples unified in Christ, breaking down barriers of race, culture, and social status.',
            "This missionary mandate continues until Jesus returns and God's kingdom is fully established on earth.",
          ],
          interactiveElement: {
            type: 'reflection',
            content: {
              question: 'How can you participate in the Great Commission today?',
              prompts: [
                'Share the gospel with someone locally',
                'Support missionaries around the world',
                'Live as a witness in your community',
                'Pray for unreached people groups',
              ],
            },
          },
          lifeApplication: {
            challenge:
              'Find one way to participate in the Great Commission this week, whether locally or globally.',
            journaling:
              "Reflect on your role in God's mission to reach all nations with the gospel.",
          },
          prayerPrompt:
            'Ask God to use you in His mission to reach all peoples with the good news of salvation.',
        },
      },
      {
        id: 'bsos-6',
        title: 'The Second Coming: Christ Returns in Glory',
        duration: 6,
        scripture: 'Revelation 19:11',
        description: 'Jesus returns to establish His kingdom and judge the earth',
        content: {
          scriptureText:
            'And I saw heaven opened, and behold a white horse; and he that sat upon him was called Faithful and True, and in righteousness he doth judge and make war.',
          commentary: [
            "Jesus will return in glory and power to establish God's kingdom on earth and judge all humanity.",
            'His second coming will be visible to all, unlike His first coming in humility and obscurity.',
            'The righteous will be resurrected to eternal life, while the wicked will face eternal judgment.',
            "This hope of Christ's return motivates faithful living and urgent evangelism in the present age.",
          ],
          interactiveElement: {
            type: 'quiz',
            content: {
              questions: [
                {
                  question: "How will Jesus' second coming differ from His first?",
                  options: [
                    'It will be in secret',
                    'It will be in glory and power',
                    'It will be only for believers',
                  ],
                  correct: 1,
                },
              ],
            },
          },
          lifeApplication: {
            challenge:
              'Live this week with the anticipation that Jesus could return at any moment.',
            journaling:
              "Write about how the hope of Christ's return affects your priorities and decisions.",
          },
          prayerPrompt:
            'Pray for Jesus to return soon and for readiness to meet Him when He comes.',
        },
      },
      {
        id: 'bsos-7',
        title: 'New Earth: Paradise Restored',
        duration: 6,
        scripture: 'Revelation 21:4',
        description: 'God creates a new heaven and earth where righteousness dwells forever',
        content: {
          scriptureText:
            'And God shall wipe away all tears from their eyes; and there shall be no more death, neither sorrow, nor crying, neither shall there be any more pain: for the former things are passed away.',
          commentary: [
            'God will create a new heaven and new earth where sin, death, and suffering are permanently removed.',
            'The New Jerusalem will be the eternal home of the redeemed, where God dwells with His people forever.',
            'All of creation will be restored to its original perfection, surpassing even the Garden of Eden.',
            "This is the ultimate fulfillment of all God's promises - eternal life in perfect fellowship with our Creator.",
          ],
          interactiveElement: {
            type: 'reflection',
            content: {
              question: 'What aspect of the new earth are you most looking forward to?',
              prompts: [
                'No more death or suffering',
                'Perfect fellowship with God',
                'Reunion with loved ones',
                "Serving God without sin's hindrance",
              ],
            },
          },
          lifeApplication: {
            challenge:
              'Let the hope of eternity motivate faithful service and patient endurance in present trials.',
            journaling: 'Describe your hopes and expectations for life in the new earth.',
          },
          prayerPrompt:
            'Thank God for the promise of eternal life and ask Him to help you live with eternal perspective.',
        },
      },
    ],
  },
  {
    id: 'gods-word-in-history',
    title: "God's Word in History",
    description:
      "Discover how prophecy and fulfillment demonstrate God's control over history. See archaeological and historical evidence confirming Scripture's accuracy.",
    category: 'free',
    totalDuration: 30, // 5 lessons × 6 minutes each
    difficulty: 'beginner',
    tags: ['Prophecy', 'History', 'Archaeology', 'Fulfillment', 'Evidence'],
    image: 'history-prophecy',
    color: 'from-orange-500 to-orange-600',
    features: [
      'Prophetic fulfillment',
      'Historical evidence',
      'Archaeological discoveries',
      'Timeline studies',
    ],
    lessons: [
      {
        id: 'gwih-1',
        title: 'Prophecy: God Declares the End from the Beginning',
        duration: 6,
        scripture: 'Isaiah 46:10',
        description: "Understanding how biblical prophecy proves God's sovereignty over history",
        content: {
          scriptureText:
            'Declaring the end from the beginning, and from ancient times the things that are not yet done, saying, My counsel shall stand, and I will do all my pleasure.',
          commentary: [
            'Only God can accurately predict future events centuries in advance with perfect accuracy.',
            "Biblical prophecy serves as God's signature on Scripture, proving its divine origin beyond human ability.",
            'Prophecies have specific details that cannot be explained away as lucky guesses or general predictions.',
            "The fulfillment of prophecy demonstrates God's control over history and His faithfulness to His word.",
          ],
          interactiveElement: {
            type: 'quiz',
            content: {
              questions: [
                {
                  question: 'What does Isaiah 46:10 say God can do that proves His deity?',
                  options: ['Create the world', 'Declare the end from the beginning', 'Judge sin'],
                  correct: 1,
                },
              ],
            },
          },
          lifeApplication: {
            challenge:
              "Study one specific prophecy and its fulfillment to strengthen your faith in God's sovereignty.",
            journaling:
              "Write about how God's control over the future gives you confidence in His promises.",
          },
          prayerPrompt:
            'Praise God for His perfect knowledge of the future and His faithful fulfillment of every promise.',
        },
      },
      {
        id: 'gwih-2',
        title: "Daniel's Prophecies: Kingdoms Rise and Fall",
        duration: 6,
        scripture: 'Daniel 2:44',
        description:
          'How Daniel predicted the rise and fall of world empires with stunning accuracy',
        content: {
          scriptureText:
            'And in the days of these kings shall the God of heaven set up a kingdom, which shall never be destroyed: and the kingdom shall not be left to other people, but it shall break in pieces and consume all these kingdoms, and it shall stand for ever.',
          commentary: [
            "Daniel's prophecy of the four kingdoms (Babylon, Medo-Persia, Greece, Rome) was fulfilled exactly as predicted.",
            "The details about Alexander's empire dividing and Rome's iron strength were given centuries before they occurred.",
            "The stone that destroys the image represents God's eternal kingdom established through Jesus Christ.",
            "These prophecies demonstrate God's sovereignty over human governments and His ultimate victory.",
          ],
          interactiveElement: {
            type: 'timeline',
            content: {
              events: [
                { period: '605 BC', event: 'Daniel taken to Babylon' },
                { period: '539 BC', event: 'Medo-Persia conquers Babylon' },
                { period: '331 BC', event: 'Greece conquers Persia' },
                { period: '168 BC', event: 'Rome conquers Greece' },
                { period: '27 BC', event: 'Roman Empire established' },
              ],
            },
          },
          lifeApplication: {
            challenge: "Research how one of Daniel's prophecies was fulfilled in history.",
            journaling:
              "Reflect on how God's sovereignty over nations affects your view of current world events.",
          },
          prayerPrompt:
            'Thank God that He rules over all earthly kingdoms and His kingdom will endure forever.',
        },
      },
      {
        id: 'gwih-3',
        title: 'Messianic Prophecies: Jesus Foretold',
        duration: 6,
        scripture: 'Isaiah 53:5',
        description: 'Old Testament prophecies about Jesus fulfilled in perfect detail',
        content: {
          scriptureText:
            'But he was wounded for our transgressions, he was bruised for our iniquities: the chastening of our peace was upon him; and with his stripes we are healed.',
          commentary: [
            'Over 300 Old Testament prophecies about the Messiah were fulfilled in Jesus Christ with mathematical precision.',
            'Details about His birth, life, death, and resurrection were predicted centuries before His coming.',
            'The probability of one person fulfilling even 48 prophecies is 1 in 10 to the 157th power - essentially impossible.',
            "These fulfilled prophecies prove Jesus is the promised Messiah and validate the Bible's divine inspiration.",
          ],
          interactiveElement: {
            type: 'quiz',
            content: {
              questions: [
                {
                  question: 'Approximately how many Old Testament prophecies did Jesus fulfill?',
                  options: ['About 50', 'About 150', 'Over 300'],
                  correct: 2,
                },
              ],
            },
          },
          lifeApplication: {
            challenge: "Study one specific Messianic prophecy and its fulfillment in Jesus' life.",
            journaling:
              'Write about how fulfilled prophecy strengthens your confidence in Jesus as the Messiah.',
          },
          prayerPrompt:
            'Thank Jesus for fulfilling every prophecy about the Messiah and proving His divine identity.',
        },
      },
      {
        id: 'gwih-4',
        title: 'Archaeological Confirmations',
        duration: 6,
        scripture: 'Luke 3:1-2',
        description: 'How archaeological discoveries continue to confirm biblical accounts',
        content: {
          scriptureText:
            'Now in the fifteenth year of the reign of Tiberius Caesar, Pontius Pilate being governor of Judaea, and Herod being tetrarch of Galilee...',
          commentary: [
            'Archaeological discoveries have consistently confirmed biblical historical accounts rather than contradicting them.',
            'The discovery of the Pilate Stone confirmed the existence of Pontius Pilate as described in the Gospels.',
            'Excavations at biblical sites like Jerusalem, Jericho, and Capernaum support the biblical narratives.',
            'No archaeological discovery has ever definitively contradicted a biblical historical claim.',
          ],
          interactiveElement: {
            type: 'reflection',
            content: {
              question: 'How does archaeological evidence affect your confidence in the Bible?',
              prompts: [
                'Confirms biblical historical accuracy',
                'Demonstrates careful record-keeping',
                "Supports the Bible's reliability",
                'Encourages further study',
              ],
            },
          },
          lifeApplication: {
            challenge: 'Research one archaeological discovery that confirms a biblical account.',
            journaling:
              "Write about how external evidence supports your faith in Scripture's accuracy.",
          },
          prayerPrompt:
            "Thank God for providing external confirmations of His Word's historical reliability.",
        },
      },
      {
        id: 'gwih-5',
        title: 'History Validates Scripture',
        duration: 6,
        scripture: '2 Peter 1:21',
        description: "How historical evidence demonstrates the Bible's supernatural accuracy",
        content: {
          scriptureText:
            'For the prophecy came not in old time by the will of man: but holy men of God spake as they were moved by the Holy Ghost.',
          commentary: [
            "The Bible's historical accuracy in describing ancient cultures, customs, and events demonstrates divine guidance.",
            'Secular historians increasingly acknowledge the Bible as a reliable historical source for ancient times.',
            "The preservation of biblical manuscripts through historical upheavals shows God's protecting hand.",
            "Historical fulfillment of biblical prophecies provides objective evidence of the Bible's supernatural origin.",
          ],
          interactiveElement: {
            type: 'quiz',
            content: {
              questions: [
                {
                  question: 'According to 2 Peter 1:21, who moved the prophets to speak?',
                  options: ['Their own will', 'Human wisdom', 'The Holy Spirit'],
                  correct: 2,
                },
              ],
            },
          },
          lifeApplication: {
            challenge:
              "Share with someone how historical evidence supports the Bible's reliability.",
            journaling:
              "Reflect on how history confirms your confidence in Scripture's truthfulness.",
          },
          prayerPrompt:
            'Praise God for moving through history to validate His Word and strengthen our faith.',
        },
      },
    ],
  },
  {
    id: 'who-is-jesus',
    title: 'Who Is Jesus According to the Bible?',
    description:
      "Explore Old Testament prophecies and New Testament fulfillment. Discover how Christ is the center of all Scripture and the key to understanding God's plan.",
    category: 'free',
    totalDuration: 36, // 6 lessons × 6 minutes each
    difficulty: 'beginner',
    tags: ['Jesus', 'Messiah', 'Prophecy', 'Christ', 'Scripture Center'],
    image: 'jesus-center',
    color: 'from-yellow-500 to-yellow-600',
    features: [
      'Messianic prophecies',
      'Christ-centered study',
      'OT/NT connections',
      "Jesus as Scripture's center",
    ],
    lessons: [
      {
        id: 'wij-1',
        title: 'The Promised Seed',
        duration: 6,
        scripture: 'Genesis 3:15',
        description: 'The first Messianic promise given in the Garden of Eden',
        content: {
          scriptureText:
            'And I will put enmity between thee and the woman, and between thy seed and her seed; it shall bruise thy head, and thou shalt bruise his heel.',
          commentary: [
            'This is the first gospel promise - the "proto-evangelium" - given immediately after humanity\'s fall into sin.',
            "The woman's seed refers to Jesus, born of a virgin, who would defeat Satan and reverse the curse of sin.",
            "Satan would wound the Messiah (crucifixion), but Christ would deliver the fatal blow to Satan's power.",
            'This promise runs like a golden thread through all of Scripture, ultimately fulfilled in Jesus Christ.',
          ],
          interactiveElement: {
            type: 'quiz',
            content: {
              questions: [
                {
                  question: 'What is Genesis 3:15 often called?',
                  options: [
                    'The first commandment',
                    'The proto-evangelium (first gospel)',
                    'The creation mandate',
                  ],
                  correct: 1,
                },
              ],
            },
          },
          lifeApplication: {
            challenge: 'Look for Jesus in Old Testament passages you read this week.',
            journaling:
              'Write about how it feels to know God had a plan for redemption from the very beginning.',
          },
          prayerPrompt:
            "Thank God for His immediate promise of redemption even in the moment of humanity's greatest failure.",
        },
      },
      {
        id: 'wij-2',
        title: 'The Son of Abraham and David',
        duration: 6,
        scripture: 'Matthew 1:1',
        description: 'Jesus fulfills the covenant promises made to Abraham and David',
        content: {
          scriptureText:
            'The book of the generation of Jesus Christ, the son of David, the son of Abraham.',
          commentary: [
            'Jesus is the promised seed of Abraham through whom all nations would be blessed with salvation.',
            "As the son of David, Jesus is the rightful heir to David's throne and the eternal kingdom promised to his lineage.",
            "The genealogies in Matthew and Luke demonstrate Jesus' legal and biological right to these covenant promises.",
            'Through Jesus, both the physical and spiritual promises to Abraham and David find their ultimate fulfillment.',
          ],
          interactiveElement: {
            type: 'timeline',
            content: {
              events: [
                { period: '2100 BC', event: 'Promise to Abraham' },
                { period: '1000 BC', event: 'Promise to David' },
                { period: '4 BC', event: 'Jesus born as promised heir' },
                { period: '30 AD', event: 'Jesus begins ministry' },
                { period: 'Future', event: 'Jesus returns to establish kingdom' },
              ],
            },
          },
          lifeApplication: {
            challenge: 'Study how Jesus fulfills one specific promise made to Abraham or David.',
            journaling:
              "Reflect on how Jesus' fulfillment of ancient promises gives you confidence in future promises.",
          },
          prayerPrompt:
            'Thank Jesus for fulfilling the covenant promises and including you in the family of faith.',
        },
      },
      {
        id: 'wij-3',
        title: 'The Suffering Servant',
        duration: 6,
        scripture: 'Isaiah 53:3',
        description: "Isaiah's detailed prophecy of the Messiah's suffering and sacrifice",
        content: {
          scriptureText:
            'He is despised and rejected of men; a man of sorrows, and acquainted with grief: and we hid as it were our faces from him; he was despised, and we esteemed him not.',
          commentary: [
            "Isaiah 53 describes the Messiah's suffering in such detail it reads like an eyewitness account of the crucifixion.",
            "The chapter explains the purpose of Christ's suffering - bearing our sins and providing healing through His wounds.",
            'Jesus was rejected by His own people, fulfilling the prophecy that He would be despised and not esteemed.',
            'This prophecy, written 700 years before Christ, demonstrates the supernatural foreknowledge of God.',
          ],
          interactiveElement: {
            type: 'reflection',
            content: {
              question: 'How does Isaiah 53 help you understand what Jesus did for you?',
              prompts: [
                'He bore our griefs and sorrows',
                'He was wounded for our transgressions',
                'His stripes bring us healing',
                'He made intercession for transgressors',
              ],
            },
          },
          lifeApplication: {
            challenge: "Read Isaiah 53 alongside the Gospel accounts of Jesus' crucifixion.",
            journaling: "Write about what Jesus' willing suffering means to you personally.",
          },
          prayerPrompt:
            'Thank Jesus for willingly suffering in your place and bearing the punishment for your sins.',
        },
      },
      {
        id: 'wij-4',
        title: 'The Eternal Son of God',
        duration: 6,
        scripture: 'John 1:1',
        description: "Understanding Jesus' divine nature as revealed in Scripture",
        content: {
          scriptureText:
            'In the beginning was the Word, and the Word was with God, and the Word was God.',
          commentary: [
            'Jesus is not just a great teacher or prophet - He is the eternal Word of God who became flesh.',
            'The New Testament clearly presents Jesus as both fully God and fully man, the God-man.',
            'His divine nature is evidenced by His sinless life, supernatural power, and resurrection from the dead.',
            'Only as God could Jesus provide the infinite sacrifice necessary to pay for the sins of the world.',
          ],
          interactiveElement: {
            type: 'quiz',
            content: {
              questions: [
                {
                  question: "According to John 1:1, what was the Word's relationship to God?",
                  options: [
                    'The Word was created by God',
                    'The Word was with God and was God',
                    'The Word was separate from God',
                  ],
                  correct: 1,
                },
              ],
            },
          },
          lifeApplication: {
            challenge: "Study other passages that teach about Jesus' divine nature.",
            journaling: 'Write about what it means to you that Jesus is both God and man.',
          },
          prayerPrompt: 'Worship Jesus as your God and Savior, fully divine yet fully human.',
        },
      },
      {
        id: 'wij-5',
        title: 'The Risen Lord',
        duration: 6,
        scripture: 'Psalm 16:10',
        description: 'Old Testament prophecies of resurrection fulfilled in Jesus',
        content: {
          scriptureText:
            'For thou wilt not leave my soul in hell; neither wilt thou suffer thine Holy One to see corruption.',
          commentary: [
            'David prophesied that the Holy One would not remain in the grave or experience bodily decay.',
            "Peter explains in Acts 2 that this prophecy was fulfilled in Jesus' resurrection on the third day.",
            "The resurrection validates all of Jesus' claims about His identity and mission.",
            "Christ's victory over death provides the foundation for our hope of eternal life.",
          ],
          interactiveElement: {
            type: 'quiz',
            content: {
              questions: [
                {
                  question: 'What did Psalm 16:10 prophesy about the Holy One?',
                  options: [
                    'He would live forever',
                    'He would not see corruption in the grave',
                    'He would be born of a virgin',
                  ],
                  correct: 1,
                },
              ],
            },
          },
          lifeApplication: {
            challenge: 'Study the resurrection accounts in all four Gospels this week.',
            journaling:
              "Reflect on how Jesus' resurrection changes everything about life and death.",
          },
          prayerPrompt:
            'Praise Jesus for His victory over death and the hope of resurrection He provides.',
        },
      },
      {
        id: 'wij-6',
        title: 'The Center of Scripture',
        duration: 6,
        scripture: 'Luke 24:27',
        description: 'How all of Scripture points to Jesus Christ',
        content: {
          scriptureText:
            'And beginning at Moses and all the prophets, he expounded unto them in all the scriptures the things concerning himself.',
          commentary: [
            'Jesus showed the disciples that all Scripture - Old and New Testament - is ultimately about Him.',
            "The ceremonial law, sacrificial system, and prophetic writings all point forward to Christ's redemptive work.",
            'Understanding Jesus as the center of Scripture brings unity and clarity to Bible study.',
            'Every book of the Bible contributes to the revelation of who Jesus is and what He has accomplished.',
          ],
          interactiveElement: {
            type: 'reflection',
            content: {
              question:
                'How does seeing Jesus as the center of Scripture change your Bible reading?',
              prompts: [
                'It provides unity to the whole Bible',
                'It makes Old Testament passages more meaningful',
                "It deepens appreciation for God's plan",
                'It focuses on the gospel message',
              ],
            },
          },
          lifeApplication: {
            challenge:
              'Look for Christ in every chapter you read this week, asking "How does this point to Jesus?"',
            journaling: "Write about a new way you've seen Jesus revealed in Scripture recently.",
          },
          prayerPrompt:
            'Ask God to open your eyes to see Jesus throughout all of Scripture as you read and study.',
        },
      },
    ],
  },
  {
    id: 'bible-and-salvation',
    title: 'The Bible and Salvation',
    description:
      'Understand the relationship between law and grace, the cross, faith, and obedience. Discover why the Bible is a living book that points to redemption.',
    category: 'free',
    totalDuration: 30, // 5 lessons × 6 minutes each
    difficulty: 'beginner',
    tags: ['Salvation', 'Law', 'Grace', 'Faith', 'Redemption', 'Cross'],
    image: 'salvation-cross',
    color: 'from-red-500 to-red-600',
    features: ['Law vs Grace', 'Cross-centered', 'Faith and works', 'Living Word'],
    lessons: [
      {
        id: 'bas-1',
        title: "The Law: Mirror of God's Holiness",
        duration: 6,
        scripture: 'Romans 3:20',
        description:
          "Understanding the law's purpose in revealing sin and pointing to our need for salvation",
        content: {
          scriptureText:
            'Therefore by the deeds of the law there shall no flesh be justified in his sight: for by the law is the knowledge of sin.',
          commentary: [
            "The law serves as a mirror, showing us God's perfect standard and our failure to meet it.",
            "No one can be saved by keeping the law because we have all fallen short of God's perfect standard.",
            'The law was never intended to save us but to reveal our need for a Savior.',
            "Understanding the law's purpose helps us appreciate the grace offered through Jesus Christ.",
          ],
          interactiveElement: {
            type: 'quiz',
            content: {
              questions: [
                {
                  question: 'According to Romans 3:20, what does the law provide?',
                  options: ['Salvation', 'Knowledge of sin', 'Eternal life'],
                  correct: 1,
                },
              ],
            },
          },
          lifeApplication: {
            challenge:
              "Examine your life against God's perfect standard and recognize your need for grace.",
            journaling:
              "Write about how understanding the law's purpose changes your view of salvation.",
          },
          prayerPrompt:
            'Thank God for His perfect law that reveals your need and drives you to His grace.',
        },
      },
      {
        id: 'bas-2',
        title: "Grace: God's Unmerited Favor",
        duration: 6,
        scripture: 'Ephesians 2:8-9',
        description: "Discovering salvation as God's free gift, not human achievement",
        content: {
          scriptureText:
            'For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: Not of works, lest any man should boast.',
          commentary: [
            "Salvation is entirely God's work, not dependent on human effort or merit.",
            "Grace means receiving what we don't deserve - forgiveness and eternal life through Christ.",
            "Faith is the means by which we receive salvation, but even faith is enabled by God's grace.",
            'This eliminates human boasting and gives all glory to God for our salvation.',
          ],
          interactiveElement: {
            type: 'reflection',
            content: {
              question: 'What does it mean to you that salvation is by grace alone?',
              prompts: [
                'It removes the pressure to earn salvation',
                'It humbles human pride',
                'It gives assurance of salvation',
                'It motivates gratitude and service',
              ],
            },
          },
          lifeApplication: {
            challenge:
              "Rest in the assurance that your salvation depends on God's grace, not your performance.",
            journaling: "Reflect on how God's grace has changed your life and perspective.",
          },
          prayerPrompt:
            'Thank God for His amazing grace that saved you when you deserved condemnation.',
        },
      },
      {
        id: 'bas-3',
        title: "The Cross: God's Solution for Sin",
        duration: 6,
        scripture: '1 Corinthians 1:18',
        description: "Understanding how Jesus' death on the cross provides complete salvation",
        content: {
          scriptureText:
            'For the preaching of the cross is to them that perish foolishness; but unto us which are saved it is the power of God.',
          commentary: [
            "The cross demonstrates both God's love and His justice - love that provides salvation, justice that demands payment for sin.",
            "Jesus' death was a substitutionary sacrifice, taking the punishment we deserved.",
            'The cross is the power of God for salvation, not human wisdom or philosophy.',
            'What seems foolish to the world is actually the wisdom of God and the only way to eternal life.',
          ],
          interactiveElement: {
            type: 'quiz',
            content: {
              questions: [
                {
                  question: 'To those who are saved, what is the preaching of the cross?',
                  options: ['Foolishness', 'The power of God', 'Human wisdom'],
                  correct: 1,
                },
              ],
            },
          },
          lifeApplication: {
            challenge:
              'Meditate on the cross daily this week and what Jesus accomplished there for you.',
            journaling:
              'Write about what the cross means to you personally and how it affects your daily life.',
          },
          prayerPrompt:
            'Thank Jesus for willingly going to the cross to bear your sins and provide your salvation.',
        },
      },
      {
        id: 'bas-4',
        title: 'Faith: The Hand That Receives',
        duration: 6,
        scripture: 'Romans 10:17',
        description: "Understanding how faith connects us to God's salvation",
        content: {
          scriptureText: 'So then faith cometh by hearing, and hearing by the word of God.',
          commentary: [
            "Faith is not a work we perform but the means by which we receive God's gift of salvation.",
            "Faith comes from hearing God's Word - the Bible is instrumental in producing saving faith.",
            "True faith involves trusting completely in Christ's finished work rather than our own efforts.",
            'Faith is both a gift from God and a response to His revealed truth in Scripture.',
          ],
          interactiveElement: {
            type: 'reflection',
            content: {
              question: "How has God's Word strengthened your faith?",
              prompts: [
                'Through promises that proved true',
                "Through understanding God's character",
                'Through seeing His faithfulness in Scripture',
                'Through personal application of biblical truth',
              ],
            },
          },
          lifeApplication: {
            challenge:
              "Let God's Word strengthen your faith by reading and believing His promises.",
            journaling: 'Write about how your faith has grown through studying the Bible.',
          },
          prayerPrompt:
            'Ask God to increase your faith as you continue to hear and study His Word.',
        },
      },
      {
        id: 'bas-5',
        title: 'The Living Word: Scripture That Transforms',
        duration: 6,
        scripture: 'Hebrews 4:12',
        description:
          'Discovering why the Bible is a living book that continues to point to redemption',
        content: {
          scriptureText:
            'For the word of God is quick, and powerful, and sharper than any twoedged sword, piercing even to the dividing asunder of soul and spirit, and of the joints and marrow, and is a discerner of the thoughts and intents of the heart.',
          commentary: [
            "The Bible is not just an ancient book but the living Word of God that actively works in believers' lives.",
            "Scripture has the power to convict, convert, and transform hearts because it is God's own Word.",
            'The Word penetrates to the deepest parts of human nature, revealing our true condition and need.',
            'Every time we read Scripture, God can speak fresh truth and direction into our lives.',
          ],
          interactiveElement: {
            type: 'quiz',
            content: {
              questions: [
                {
                  question: "According to Hebrews 4:12, God's Word is sharper than what?",
                  options: ['Any single-edged sword', 'Any two-edged sword', 'Any weapon'],
                  correct: 1,
                },
              ],
            },
          },
          lifeApplication: {
            challenge:
              "Let God's Word examine your heart this week and respond to what He reveals.",
            journaling:
              'Reflect on how the Bible has been "living and active" in your personal experience.',
          },
          prayerPrompt:
            'Ask God to continue using His living Word to transform your heart and mind.',
        },
      },
    ],
  },
  {
    id: 'bible-interprets-itself',
    title: 'The Bible Interprets Itself',
    description:
      'Learn the principle of "line upon line, precept upon precept." Master how to compare Scripture with Scripture to understand doctrine correctly.',
    category: 'free',
    totalDuration: 30, // 5 lessons × 6 minutes each
    difficulty: 'beginner',
    tags: ['Interpretation', 'Scripture Study', 'Line upon Line', 'Doctrine', 'Hermeneutics'],
    image: 'scripture-study',
    color: 'from-teal-500 to-teal-600',
    features: [
      'Interpretation principles',
      'Scripture comparison',
      'Doctrinal study',
      'Cross-referencing',
    ],
    lessons: [
      {
        id: 'bii-1',
        title: 'Line Upon Line, Precept Upon Precept',
        duration: 6,
        scripture: 'Isaiah 28:10',
        description:
          "Understanding God's method of revealing truth progressively throughout Scripture",
        content: {
          scriptureText:
            'For precept must be upon precept, precept upon precept; line upon line, line upon line; here a little, and there a little.',
          commentary: [
            'God reveals truth progressively throughout Scripture, building understanding step by step.',
            'No single verse contains all truth on a topic - we must gather all relevant passages.',
            "This method prevents misunderstanding and helps us see the full picture of God's truth.",
            'Patient, careful study allows the Bible to unfold its meaning naturally.',
          ],
          interactiveElement: {
            type: 'quiz',
            content: {
              questions: [
                {
                  question: 'According to Isaiah 28:10, how does God reveal truth?',
                  options: [
                    'All at once in single verses',
                    'Line upon line, here a little and there a little',
                    'Only through special revelation',
                  ],
                  correct: 1,
                },
              ],
            },
          },
          lifeApplication: {
            challenge: 'Choose a biblical topic and study all the verses that relate to it.',
            journaling:
              'Write about how gathering multiple verses has clarified a biblical truth for you.',
          },
          prayerPrompt: 'Ask God for patience and wisdom as you study His Word systematically.',
        },
      },
      {
        id: 'bii-2',
        title: 'Scripture as Its Own Commentary',
        duration: 6,
        scripture: '2 Peter 1:20',
        description:
          'Learning to let the Bible explain itself rather than imposing outside interpretations',
        content: {
          scriptureText:
            'Knowing this first, that no prophecy of the scripture is of any private interpretation.',
          commentary: [
            'Scripture should be its own interpreter - the Bible explains itself better than any human commentary.',
            'Private interpretation leads to error; letting Scripture explain Scripture leads to truth.',
            'The Holy Spirit who inspired the writing also guides in understanding when we compare Scripture with Scripture.',
            'This principle protects against human bias and denominational traditions that may contradict biblical truth.',
          ],
          interactiveElement: {
            type: 'reflection',
            content: {
              question: 'How can you apply the principle of letting Scripture interpret Scripture?',
              prompts: [
                'Use cross-references in your Bible',
                'Compare similar passages on the same topic',
                'Look for biblical definitions of key terms',
                'Let clearer passages explain more difficult ones',
              ],
            },
          },
          lifeApplication: {
            challenge:
              'When studying a difficult passage, find other Scriptures that shed light on the same topic.',
            journaling:
              'Reflect on a time when comparing Scriptures clarified a confusing passage.',
          },
          prayerPrompt:
            'Ask the Holy Spirit to guide you as you let Scripture be its own interpreter.',
        },
      },
      {
        id: 'bii-3',
        title: 'The Clear Interprets the Unclear',
        duration: 6,
        scripture: '2 Timothy 3:16',
        description: 'Using clear, direct statements to understand symbolic or difficult passages',
        content: {
          scriptureText:
            'All scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness.',
          commentary: [
            'When facing difficult or symbolic passages, look for clear, direct statements on the same topic.',
            "God doesn't hide essential truths in obscure passages - important doctrines are stated clearly multiple times.",
            'Difficult passages should be understood in light of clear ones, not the reverse.',
            'This prevents building doctrine on uncertain foundations and maintains biblical balance.',
          ],
          interactiveElement: {
            type: 'quiz',
            content: {
              questions: [
                {
                  question:
                    'When studying difficult passages, what should guide our interpretation?',
                  options: [
                    'Human traditions',
                    'Personal opinions',
                    'Clear, direct statements in Scripture',
                  ],
                  correct: 2,
                },
              ],
            },
          },
          lifeApplication: {
            challenge:
              "Find a clear passage that explains a symbolic or difficult text you've wondered about.",
            journaling: 'Write about how focusing on clear passages has helped your understanding.',
          },
          prayerPrompt:
            'Thank God for making essential truths clear and understandable in His Word.',
        },
      },
      {
        id: 'bii-4',
        title: 'Context Determines Meaning',
        duration: 6,
        scripture: '2 Timothy 2:15',
        description: 'Understanding the importance of historical, literary, and biblical context',
        content: {
          scriptureText:
            'Study to shew thyself approved unto God, a workman that needeth not to be ashamed, rightly dividing the word of truth.',
          commentary: [
            'Proper Bible study requires careful attention to context - who wrote it, to whom, when, and why.',
            'The immediate context (surrounding verses) often provides the key to understanding difficult passages.',
            'Historical and cultural context helps us understand what the original audience would have understood.',
            'Rightly dividing the word means applying sound principles of interpretation to reach accurate conclusions.',
          ],
          interactiveElement: {
            type: 'reflection',
            content: {
              question: 'What types of context should you consider when studying Scripture?',
              prompts: [
                'Historical context (when and why written)',
                'Literary context (surrounding passages)',
                'Cultural context (customs and practices)',
                'Biblical context (how it fits with all Scripture)',
              ],
            },
          },
          lifeApplication: {
            challenge:
              'Before interpreting a verse, study its context by reading the entire chapter.',
            journaling:
              'Reflect on how understanding context has changed your interpretation of a passage.',
          },
          prayerPrompt: 'Ask God to help you be a careful student who rightly divides His Word.',
        },
      },
      {
        id: 'bii-5',
        title: 'Building Sound Doctrine',
        duration: 6,
        scripture: 'Titus 2:1',
        description: 'Using proper interpretation principles to establish biblical beliefs',
        content: {
          scriptureText: 'But speak thou the things which become sound doctrine.',
          commentary: [
            'Sound doctrine is built by comparing all relevant Scriptures on a topic, not isolated verses.',
            'True biblical doctrine will be consistent throughout Scripture when properly understood.',
            "Personal beliefs must be tested against the full counsel of God's Word.",
            'Sound interpretation leads to sound doctrine, which leads to sound Christian living.',
          ],
          interactiveElement: {
            type: 'quiz',
            content: {
              questions: [
                {
                  question: 'What should be the foundation for sound doctrine?',
                  options: [
                    'Popular opinion',
                    'Church traditions',
                    'All relevant Scriptures properly interpreted',
                  ],
                  correct: 2,
                },
              ],
            },
          },
          lifeApplication: {
            challenge:
              'Test one of your beliefs by gathering all relevant Scriptures on that topic.',
            journaling:
              'Write about how proper interpretation has strengthened or corrected your understanding.',
          },
          prayerPrompt:
            'Ask God to help you build all your beliefs on the solid foundation of His Word.',
        },
      },
    ],
  },
  {
    id: 'bible-in-daily-life',
    title: 'The Bible in My Daily Life',
    description:
      "Learn to apply God's Word to your decisions, habits, and relationships. Discover how to let Scripture shape your character and lifestyle practically.",
    category: 'free',
    totalDuration: 30, // 5 lessons × 6 minutes each
    difficulty: 'beginner',
    tags: ['Daily Living', 'Application', 'Character', 'Decisions', 'Practical Faith'],
    image: 'daily-living',
    color: 'from-green-500 to-green-600',
    features: [
      'Practical application',
      'Daily decisions',
      'Character formation',
      'Lifestyle transformation',
    ],
    lessons: [
      {
        id: 'bidl-1',
        title: 'Scripture for Daily Decisions',
        duration: 6,
        scripture: 'Psalm 119:105',
        description: "Using God's Word as a lamp to guide your daily choices",
        content: {
          scriptureText: 'Thy word is a lamp unto my feet, and a light unto my path.',
          commentary: [
            "God's Word provides practical guidance for the decisions we face every day.",
            'Like a lamp, Scripture illuminates the next step without necessarily showing the entire journey.',
            "Biblical principles apply to modern situations even when specific circumstances aren't directly addressed.",
            'Regular Bible reading creates a foundation of wisdom for making God-honoring choices.',
          ],
          interactiveElement: {
            type: 'reflection',
            content: {
              question: "How can you use Scripture to guide a decision you're currently facing?",
              prompts: [
                'Look for relevant biblical principles',
                'Pray for wisdom and understanding',
                'Seek counsel from mature believers',
                'Consider what would honor God most',
              ],
            },
          },
          lifeApplication: {
            challenge:
              'Before making any significant decision this week, search Scripture for relevant guidance.',
            journaling:
              "Write about a time when God's Word clearly guided a decision in your life.",
          },
          prayerPrompt:
            'Ask God to help you consistently turn to His Word for guidance in all areas of life.',
        },
      },
      {
        id: 'bidl-2',
        title: 'Transforming Habits Through Scripture',
        duration: 6,
        scripture: 'Romans 12:2',
        description: "Allowing God's Word to renew your mind and change your patterns",
        content: {
          scriptureText:
            'And be not conformed to this world: but be ye transformed by the renewing of your mind, that ye may prove what is that good, and acceptable, and perfect, will of God.',
          commentary: [
            "Transformation happens through mind renewal, which occurs through regular engagement with God's Word.",
            'Bad habits are replaced not by willpower alone but by filling the mind with biblical truth.',
            'Scripture provides both the motivation and the method for developing godly habits.',
            'Consistent Bible study gradually reshapes our thinking patterns and automatic responses.',
          ],
          interactiveElement: {
            type: 'quiz',
            content: {
              questions: [
                {
                  question: 'According to Romans 12:2, how does transformation occur?',
                  options: [
                    'By trying harder',
                    'By the renewing of your mind',
                    'By changing circumstances',
                  ],
                  correct: 1,
                },
              ],
            },
          },
          lifeApplication: {
            challenge:
              'Identify one habit you want to change and find Scripture that addresses that area.',
            journaling:
              "Reflect on how God's Word has already changed some of your habits or attitudes.",
          },
          prayerPrompt:
            'Ask God to use His Word to transform your mind and establish godly patterns in your life.',
        },
      },
      {
        id: 'bidl-3',
        title: 'Biblical Relationships',
        duration: 6,
        scripture: 'Ephesians 4:32',
        description: 'Applying Scripture to improve your relationships with others',
        content: {
          scriptureText:
            "And be ye kind one to another, tenderhearted, forgiving one another, even as God for Christ's sake hath forgiven you.",
          commentary: [
            "Scripture provides specific instructions for healthy relationships based on God's love for us.",
            'Biblical forgiveness is the foundation for maintaining strong relationships despite human failures.',
            "Kindness and tenderheartedness reflect God's character and create an atmosphere of grace.",
            'Our relationships should demonstrate the gospel by showing undeserved love and forgiveness.',
          ],
          interactiveElement: {
            type: 'reflection',
            content: {
              question: 'Which biblical relationship principle do you most need to practice?',
              prompts: [
                'Forgiveness toward those who hurt you',
                'Kindness in daily interactions',
                'Patience with difficult people',
                "Love that seeks others' good",
              ],
            },
          },
          lifeApplication: {
            challenge:
              'Choose one relationship and apply a specific biblical principle to improve it this week.',
            journaling:
              'Write about how biblical principles have positively affected your relationships.',
          },
          prayerPrompt: 'Ask God to help you treat others the way He has treated you in Christ.',
        },
      },
      {
        id: 'bidl-4',
        title: "Character Formation Through God's Word",
        duration: 6,
        scripture: '2 Timothy 3:17',
        description: "How Scripture shapes us into people who reflect God's character",
        content: {
          scriptureText:
            'That the man of God may be perfect, throughly furnished unto all good works.',
          commentary: [
            "God's Word equips us completely for every good work and aspect of Christian character.",
            'Character formation is a gradual process that happens through consistent exposure to Scripture.',
            'The Bible provides both the standard for godly character and the power to achieve it.',
            "As we meditate on God's Word, His character becomes increasingly reflected in our lives.",
          ],
          interactiveElement: {
            type: 'quiz',
            content: {
              questions: [
                {
                  question: 'According to 2 Timothy 3:17, Scripture makes us ready for what?',
                  options: ['All good works', 'All circumstances', 'All knowledge'],
                  correct: 0,
                },
              ],
            },
          },
          lifeApplication: {
            challenge:
              'Focus on developing one character trait this week by studying what Scripture says about it.',
            journaling: "Reflect on how studying God's Word has shaped your character over time.",
          },
          prayerPrompt:
            'Ask God to continue molding your character through the influence of His Word.',
        },
      },
      {
        id: 'bidl-5',
        title: 'Living Out Your Faith',
        duration: 6,
        scripture: 'James 1:22',
        description: 'Moving from Bible knowledge to practical Christian living',
        content: {
          scriptureText:
            'But be ye doers of the word, and not hearers only, deceiving your own selves.',
          commentary: [
            'True Bible study always leads to life change - knowledge without application is spiritual deception.',
            'God wants us to live out what we learn, not just accumulate biblical information.',
            "Practical obedience is the evidence that we truly understand and believe God's Word.",
            'Each study session should result in specific steps toward more faithful Christian living.',
          ],
          interactiveElement: {
            type: 'reflection',
            content: {
              question: "What is one way you can be a doer of God's Word today?",
              prompts: [
                'Act on a truth you recently learned',
                'Apply a biblical principle to a current situation',
                'Change a behavior that contradicts Scripture',
                'Serve someone based on biblical love',
              ],
            },
          },
          lifeApplication: {
            challenge:
              "Create a personal action plan for applying the truths you've learned in this study series.",
            journaling:
              "Write about specific ways your life has changed through studying and applying God's Word.",
          },
          prayerPrompt:
            "Commit to being a doer of God's Word, not just a hearer, in every area of your life.",
        },
      },
    ],
  },
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
    features: [
      'Prophecy charts',
      'Interactive timelines',
      'Historicist perspective',
      'Video explainers',
    ],
    lessons: [
      {
        id: 'dr-1',
        title: 'Introduction to Biblical Prophecy',
        duration: 25,
        scripture: 'Daniel 2:20-22',
        description: 'Understanding Gods method of revealing future events',
        content: {
          scriptureText:
            'Daniel said: "Praise be to the name of God for ever and ever; wisdom and power are his..."',
          commentary: [
            'God reveals the future to prepare and encourage His people',
            'Biblical prophecy uses symbolic language that requires careful study',
            'The historicist method sees prophecy as a continuous timeline',
          ],
          interactiveElement: {
            type: 'timeline',
            content: {
              events: [
                { period: '605 BC', event: 'Daniel taken to Babylon' },
                { period: '553 BC', event: 'Vision of four beasts' },
                { period: '95 AD', event: 'John receives Revelation' },
              ],
            },
          },
          lifeApplication: {
            challenge:
              'Study one prophetic passage this week and look for its historical fulfillment.',
            journaling: 'Reflect on how studying prophecy strengthens your faith.',
          },
          prayerPrompt: 'Thank God for revealing the future to give us hope and guidance.',
        },
      },
    ],
  },
  {
    id: 'heavenly-sanctuary',
    title: "The Heavenly Sanctuary: Christ's Ministry Above",
    description:
      "Explore the biblical foundation of Christ's high priestly ministry in the heavenly sanctuary, understanding the significance of the two-apartment system and its role in salvation history.",
    category: 'premium',
    totalDuration: 180, // 6 lessons × 30 minutes each
    difficulty: 'intermediate',
    tags: ['sanctuary', 'prophecy', 'salvation', 'priesthood', 'judgment'],
    image: 'sanctuary',
    color: 'from-purple-500 to-indigo-600',
    features: [
      'Greek/Hebrew word studies',
      'Interactive sanctuary diagrams',
      'Historical archaeology images',
      'Downloadable PDF workbook',
      'Audio devotionals',
      'Certification badge',
    ],
    lessons: [
      {
        id: 'earthly-sanctuary-pattern',
        title: 'The Earthly Sanctuary: A Pattern of Heavenly Things',
        duration: 30,
        scripture: 'Hebrews 8:1-5',
        description:
          'Understanding how the earthly sanctuary served as a copy and shadow of the heavenly reality.',
        content: {
          scriptureText:
            'Now this is the main point of the things we are saying: We have such a High Priest, who is seated at the right hand of the throne of the Majesty in the heavens, a Minister of the sanctuary and of the true tabernacle which the Lord erected, and not man.',
          commentary: [
            "The earthly sanctuary built by Moses was constructed according to the exact pattern shown to him on Mount Sinai (Exodus 25:40). This wasn't merely an architectural blueprint, but a prophetic revelation of Christ's ministry in heaven.",
            'The Hebrew word "tabniyth" (pattern) indicates a detailed model or representation. Just as the earthly sanctuary had two apartments - the Holy Place and the Most Holy Place - so the heavenly sanctuary has corresponding areas of ministry.',
            "The furniture and services of the earthly sanctuary each pointed forward to different aspects of Christ's work: the altar of burnt offering (His sacrifice), the laver (cleansing), the table of showbread (sustenance), the golden candlestick (illumination), and the altar of incense (intercession).",
          ],
          interactiveElement: {
            type: 'timeline',
            content: {
              title: 'Sanctuary Services Throughout History',
              events: [
                {
                  date: '1445 BC',
                  event: 'Moses receives sanctuary pattern on Sinai',
                  reference: 'Exodus 25:40',
                },
                {
                  date: '1444 BC',
                  event: 'Earthly sanctuary constructed and dedicated',
                  reference: 'Exodus 40:17',
                },
                {
                  date: '31 AD',
                  event: 'Christ crucified - earthly services fulfilled',
                  reference: 'Matthew 27:51',
                },
                {
                  date: '31 AD',
                  event: 'Christ begins heavenly high priestly ministry',
                  reference: 'Hebrews 4:14',
                },
                {
                  date: '1844 AD',
                  event: 'Investigative judgment begins in Most Holy Place',
                  reference: 'Daniel 8:14',
                },
              ],
            },
          },
          lifeApplication: {
            challenge:
              'This week, spend time in prayer recognizing Christ as your High Priest who intercedes for you daily.',
            journaling:
              'How does knowing Christ ministers for you in heaven change your approach to prayer and worship?',
          },
          prayerPrompt:
            'Thank Jesus for His continuous ministry on your behalf in the heavenly sanctuary.',
          deeperStudy: {
            pdf: '/pdfs/sanctuary-study-guide.pdf',
            additionalReadings: [
              'Leviticus 16 - The Day of Atonement service',
              "Hebrews 9-10 - Christ's superior sacrifice and ministry",
            ],
            discussionQuestions: [
              "How does the sanctuary system help us understand God's plan of salvation?",
              'What comfort do you find in knowing Christ intercedes for you?',
              'How can we apply the principle of cleansing in our daily spiritual lives?',
            ],
          },
        },
      },
    ],
  },
  {
    id: 'daniel-revelation',
    title: 'Daniel and Revelation: The Apocalyptic Connection',
    description:
      "Unlock the prophetic mysteries connecting Daniel and Revelation, understanding how these books work together to reveal God's plan for the end times.",
    category: 'premium',
    totalDuration: 210, // 7 lessons × 30 minutes each
    difficulty: 'advanced',
    tags: ['prophecy', 'apocalyptic', 'end-times', 'beasts', 'judgment'],
    image: 'prophecies',
    color: 'from-red-500 to-orange-600',
    features: [
      'Prophecy timeline charts',
      'Beast identification diagrams',
      'Greek/Hebrew word studies',
      'Historical fulfillment maps',
      'Audio commentary',
      'Advanced certification',
    ],
    lessons: [
      {
        id: 'image-of-daniel-2',
        title: 'The Great Image: Kingdoms of Earth',
        duration: 30,
        scripture: 'Daniel 2:31-45',
        description:
          "Explore Nebuchadnezzar's dream and its prophetic outline of world history from Babylon to God's eternal kingdom.",
        content: {
          scriptureText:
            "You, O king, were watching; and behold, a great image! This great image, whose splendor was excellent, stood before you; and its form was awesome. This image's head was of fine gold, its chest and arms of silver, its belly and thighs of bronze, its legs of iron, its feet partly of iron and partly of clay.",
          commentary: [
            'Daniel 2 presents the grand outline of world history through the symbolism of a great metallic image. Each metal represents a successive world empire, decreasing in value but increasing in strength and harshness.',
            'The head of gold represents Babylon (605-539 BC), the greatest empire of its time. The chest and arms of silver symbolize Medo-Persia (539-331 BC), which conquered Babylon but was inferior in splendor.',
            'The belly and thighs of bronze represent Greece (331-168 BC) under Alexander the Great and his successors. The legs of iron symbolize Rome (168 BC - 476 AD), the strongest and most enduring empire.',
          ],
          interactiveElement: {
            type: 'timeline',
            content: {
              title: 'Kingdoms of Daniel 2',
              description: 'The succession of world empires as prophesied',
              events: [
                {
                  date: '605 BC',
                  event: 'Babylon (Head of Gold)',
                  reference: 'Daniel 2:38',
                  duration: '66 years',
                },
                {
                  date: '539 BC',
                  event: 'Medo-Persia (Chest/Arms of Silver)',
                  reference: 'Daniel 2:39a',
                  duration: '208 years',
                },
                {
                  date: '331 BC',
                  event: 'Greece (Belly/Thighs of Bronze)',
                  reference: 'Daniel 2:39b',
                  duration: '163 years',
                },
                {
                  date: '168 BC',
                  event: 'Rome (Legs of Iron)',
                  reference: 'Daniel 2:40',
                  duration: '644 years',
                },
                {
                  date: '476 AD',
                  event: 'Divided Europe (Feet of Iron/Clay)',
                  reference: 'Daniel 2:41-43',
                  duration: 'ongoing',
                },
                {
                  date: 'Future',
                  event: "God's Kingdom (Stone)",
                  reference: 'Daniel 2:44-45',
                  duration: 'eternal',
                },
              ],
            },
          },
          lifeApplication: {
            challenge:
              "Consider how temporary earthly powers are compared to God's eternal kingdom.",
            journaling:
              "How does understanding prophecy strengthen your faith in God's sovereignty?",
          },
          prayerPrompt: 'Praise God for His sovereignty over the nations and His eternal kingdom.',
          deeperStudy: {
            pdf: '/pdfs/daniel-2-prophetic-chart.pdf',
            additionalReadings: [
              'Revelation 13 - The beast powers in end-time prophecy',
              'Daniel 7 - The four beasts representing the same kingdoms',
            ],
          },
        },
      },
    ],
  },
  {
    id: 'three-angels-messages',
    title: "The Three Angels' Messages: Heaven's Final Appeal",
    description:
      "Discover the urgent messages of Revelation 14:6-12 that God is calling His people to proclaim before Christ's return.",
    category: 'premium',
    totalDuration: 150, // 5 lessons × 30 minutes each
    difficulty: 'intermediate',
    tags: ['angels', 'messages', 'judgment', 'Babylon', 'mark-of-beast', 'remnant'],
    image: 'three-angels',
    color: 'from-blue-500 to-cyan-600',
    features: [
      'Interactive message breakdown',
      'Modern application studies',
      'Historical context maps',
      'Greek word analysis',
      'Discussion guides',
      'Ministry training materials',
    ],
    lessons: [
      {
        id: 'first-angel-judgment',
        title: 'First Angel: The Hour of Judgment Has Come',
        duration: 30,
        scripture: 'Revelation 14:6-7',
        description:
          "Understand the first angel's message calling the world to fear God and worship the Creator as judgment begins.",
        content: {
          scriptureText:
            'Then I saw another angel flying in the midst of heaven, having the everlasting gospel to preach to those who dwell on the earth—to every nation, tribe, tongue, and people— saying with a loud voice, "Fear God and give glory to Him, for the hour of His judgment has come; and worship Him who made heaven and earth, the sea and the fountains of water."',
          commentary: [
            'The first angel proclaims the "everlasting gospel" - the same good news of salvation that has always existed, but now with special urgency because "the hour of judgment has come."',
            'This message connects directly to Daniel 8:14 and the cleansing of the sanctuary that began in 1844. The judgment mentioned here is the investigative judgment that determines who will be saved.',
            'The call to "worship Him who made heaven and earth" is a direct reference to the Fourth Commandment and the Sabbath, highlighting God as Creator in contrast to false systems of worship.',
          ],
          interactiveElement: {
            type: 'comparison',
            content: {
              title: 'Creator vs. Created Worship',
              leftSide: {
                title: 'Worship the Creator',
                points: [
                  'Remember the Sabbath day (Exodus 20:8-11)',
                  'Worship on the seventh day',
                  'Acknowledges God as Creator',
                  'Based on Scripture alone',
                ],
              },
              rightSide: {
                title: 'Worship of Created Things',
                points: [
                  'Sunday worship (man-made tradition)',
                  'Worship on the first day',
                  'Elevates human authority',
                  'Based on church tradition',
                ],
              },
            },
          },
          lifeApplication: {
            challenge:
              'This week, consciously worship God as Creator by spending time in nature and observing the Sabbath.',
            journaling: 'How can you better honor God as Creator in your daily life?',
          },
          prayerPrompt:
            'Thank God for creating you and ask Him to help you worship Him in spirit and truth.',
          deeperStudy: {
            pdf: '/pdfs/first-angel-message-study.pdf',
            additionalReadings: [
              'Genesis 2:1-3 - The institution of the Sabbath',
              'Exodus 20:8-11 - The Fourth Commandment',
            ],
          },
        },
      },
    ],
  },
  {
    id: 'sabbath-seal-of-god',
    title: "The Sabbath: God's Seal and Sign",
    description:
      "Explore the biblical significance of the Sabbath as God's sign of creative power and covenant relationship with His people.",
    category: 'premium',
    totalDuration: 150, // 5 lessons × 30 minutes each
    difficulty: 'intermediate',
    tags: ['sabbath', 'commandments', 'seal', 'creation', 'covenant', 'worship'],
    image: 'sabbath',
    color: 'from-indigo-500 to-blue-600',
    features: [
      'Sabbath through Scripture study',
      'Historical Sabbath observance',
      'Practical Sabbath keeping',
      'Hebrew word studies',
      'Worship planning guides',
      'Family Sabbath activities',
    ],
    lessons: [
      {
        id: 'creation-sabbath',
        title: "Creation and the Sabbath: God's Memorial",
        duration: 30,
        scripture: 'Genesis 2:1-3',
        description:
          "Discover how the Sabbath was established at creation as a memorial of God's creative power and a blessing for all humanity.",
        content: {
          scriptureText:
            'Thus the heavens and the earth, and all the host of them, were finished. And on the seventh day God ended His work which He had done, and He rested on the seventh day from all His work which He had done. Then God blessed the seventh day and sanctified it, because in it He rested from all His work which God had created and made.',
          commentary: [
            "The Sabbath was instituted before sin entered the world, making it part of God's perfect plan for humanity. It was not given only to Jews but to all people as a blessing.",
            'God "rested" not because He was tired, but to establish a pattern for humanity. The Hebrew word "shabat" means to cease or stop, providing a rhythm of work and rest.',
            'The three actions God took - rested, blessed, and sanctified the seventh day - establish the Sabbath as holy time set apart for special communion with the Creator.',
          ],
          interactiveElement: {
            type: 'timeline',
            content: {
              title: 'The Sabbath Through History',
              events: [
                {
                  date: 'Creation',
                  event: 'God rests and sanctifies the seventh day',
                  reference: 'Genesis 2:2-3',
                },
                {
                  date: 'Exodus',
                  event: 'Sabbath included in Ten Commandments',
                  reference: 'Exodus 20:8-11',
                },
                {
                  date: "Jesus' Ministry",
                  event: 'Jesus observes and teaches about Sabbath',
                  reference: 'Luke 4:16',
                },
                {
                  date: 'Early Church',
                  event: 'Apostles continue Sabbath observance',
                  reference: 'Acts 13:14',
                },
                {
                  date: '321 AD',
                  event: "Constantine's Sunday law issued",
                  reference: 'Historical record',
                },
                {
                  date: 'End Times',
                  event: 'Sabbath becomes test of loyalty',
                  reference: 'Revelation 14:12',
                },
              ],
            },
          },
          lifeApplication: {
            challenge:
              'Plan to observe the Sabbath this week from Friday evening to Saturday evening, focusing on rest and worship.',
            journaling:
              'How can keeping the Sabbath deepen your relationship with God and provide rest for your soul?',
          },
          prayerPrompt:
            'Thank God for the gift of the Sabbath and ask Him to help you honor this holy time.',
          deeperStudy: {
            pdf: '/pdfs/sabbath-through-scripture.pdf',
            additionalReadings: [
              'Exodus 20:8-11 - The Fourth Commandment',
              'Isaiah 58:13-14 - The blessing of proper Sabbath observance',
            ],
          },
        },
      },
    ],
  },
]

// All studies combined
export const allStudies: Study[] = [...freeStudies, ...premiumStudies]

// Helper functions for backward compatibility
export function getFreeStudies(): Study[] {
  return freeStudies
}

export function getPremiumStudies(): Study[] {
  return premiumStudies
}

export function getStudyById(id: string): Study | undefined {
  return allStudies.find((study) => study.id === id)
}
