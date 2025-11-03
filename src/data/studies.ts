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
  category: 'free' | 'supporter' // supporter = deeper studies for those who donate
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
      "A 6-part Bible study series designed to prepare the believer to approach God's Word with prayer, maturity, teachability, obedience, a teaching spirit, and trust in what God has revealed.",
    category: 'free',
    totalDuration: 42,
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
        openingThought: 'Imagine trying to read in total darkness. You might hold the book, turn the pages, even trace your finger across the words—but the words remain invisible. There\'s no light to illuminate the text, no way to understand what\'s written. In the same way, opening Scripture without prayer leaves our spiritual eyes blind. We can read the words with our minds, analyze the grammar, study the history—but without the light of the Holy Spirit, the deeper meaning remains hidden.\n\nThe psalmist\'s plea, "Open my eyes that I may see wondrous things," is not just poetic language—it\'s an essential instruction for every believer. Prayer is the lamp that turns the written Word into living light. Before we read, we must pause to ask: "Lord, help me see what I cannot see." This isn\'t weakness; it\'s wisdom. We come to God\'s Word not as masters of the text, but as students in need of illumination. The foundation of all Bible study is humble prayer, asking God to illuminate His Word with understanding that only He can provide.',
        content: {
          scriptureText: 'Open thou mine eyes, that I may behold wondrous things out of thy law.',
          teachingPoints: [
            {
              narrative:
                'Opening the Bible without prayer is like walking into a dark room without turning on the light. Prayer is the essential first step in Bible study because we acknowledge our utter dependence on God for spiritual understanding. The psalmist recognizes that spiritual truths are hidden from our natural understanding and require divine revelation. Without God\'s illumination, we can read the words with our intellect, analyze the grammar, and study the historical context—but we miss the transformative power that Scripture is meant to have in our hearts and lives.\n\nThe natural man, as Paul reminds us, cannot receive the things of the Spirit. They appear foolish to him. But when we come in prayer, inviting the Holy Spirit to guide us, the same passage we\'ve read a hundred times becomes alive with new meaning. Prayer transforms Bible study from an academic exercise into a divine encounter.',
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
                'Prayer transforms Bible study from information-gathering to heart transformation',
              ],
              rhetoricalQuestions: [
                'When was the last time you asked God to open your understanding before reading His Word?',
                'Have you ever read a passage multiple times, then suddenly had it illuminated through prayer?',
                'What would change if you began every Bible study session with intentional prayer?',
              ],
            },
            {
              title: 'Why Prayer Matters',
              narrative:
                'Without God\'s illumination through prayer, we may read the words of Scripture but completely miss the transformative power that God intends for us. Spiritual things must be spiritually discerned. The Bible itself tells us that the natural person cannot understand the things of the Spirit. Scripture wasn\'t written to be privately interpreted or intellectually decoded—it was given through the Holy Spirit to holy men of God. The same Spirit who inspired the writing is needed to illuminate the reading. How can we expect to understand Scripture if we don\'t ask the Author for illumination? Prayer isn\'t optional decoration; it\'s essential connection to the very source of spiritual truth.',
              scriptures: [
                {
                  verse: '2 Peter 1:20-21',
                  text: 'Knowing this first, that no prophecy of the scripture is of any private interpretation. For the prophecy came not in old time by the will of man: but holy men of God spake as they were moved by the Holy Ghost.',
                },
              ],
              rhetoricalQuestions: [
                'How can we expect to understand Scripture if we don\'t ask the Author for illumination?',
                'Have you ever realized that the Holy Spirit who wrote the Bible is the same Spirit who must read it through you?',
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
        openingThought: 'There\'s nothing wrong with a baby who needs to be fed. Their dependence is natural, expected, and necessary. But imagine a thirty-year-old who still had to be spoon-fed every meal. That would be tragic—not because there\'s anything wrong with being fed, but because there\'s something profoundly wrong with never learning to feed yourself. In the same way, God calls believers to grow from milk to meat, from dependence to maturity. While pastors, teachers, and Bible study leaders are tremendous gifts to the church, they are meant to equip us to feed ourselves from God\'s Word, not to become our sole source of spiritual nourishment.\n\nMaturity in Bible study means developing the ability to feed yourself spiritually. It means learning to read Scripture, understand its meaning, and apply its truth without having someone else decode it for you. The Holy Spirit didn\'t just inspire the writing of Scripture; He also empowers its reading. You have everything you need to study God\'s Word for yourself—not in isolation, but in dependence on the Spirit who wrote it.',
        content: {
          scriptureText:
            'When I was a child, I spake as a child, I understood as a child, I thought as a child: but when I became a man, I put away childish things.',
          teachingPoints: [
            {
              narrative:
                'God calls us to grow from milk to meat—to move from relying on others for our spiritual food to feeding ourselves. Just as a child eventually learns to feed themselves, we must mature in our Bible study. While teachers and pastors are valuable gifts to the church, they are meant to equip us to study independently, not to become our sole source of truth. Paul speaks of leaving behind childish things when we become adults. In the spiritual realm, this means transitioning from perpetual spiritual infancy to responsible, self-directed growth. A mature believer doesn\'t reject their teachers; they verify their teaching. They don\'t abandon community; they bring something to contribute. They can feed themselves AND help feed others.',
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
                'This isn\'t about arrogance or rejecting our teachers—it\'s about the responsibility to verify truth yourself. The Bible commends those who, like the Bereans, "searched the scriptures daily" to confirm what they were taught. These Bereans weren\'t disrespectful or rebellious. They listened attentively to Paul, received his teaching with readiness—but then they tested it in Scripture. That combination of receptivity and verification made them "more noble." God gave you the Holy Spirit to guide you into truth. You don\'t need to wait for someone else to tell you what Scripture means. The anointing abides in you. That doesn\'t replace teachers; it empowers your own study.',
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
        title: 'Teachability – The Humble Mindset',
        duration: 6,
        scripture: 'Psalm 25:9',
        description:
          "A proud mind can't receive new truth. God teaches those who come with humility.",
        openingThought: 'The teachable heart is God\'s classroom. Imagine approaching a famous teacher with your mind already made up about what they should say. You wouldn\'t learn anything—not because the teacher isn\'t wise, but because you\'ve already closed the door to anything that contradicts your assumptions. In the same way, pride prevents us from receiving divine truth. A proud mind can\'t receive new truth because it has already decided what truth looks like.\n\nGod teaches those who come with humility. The meek—those who acknowledge their need for correction and instruction—are the ones God guides in judgment and teaches His way. This isn\'t about intelligence or education; it\'s about posture. A teachable heart listens for conviction, not confirmation. It\'s willing to be corrected, eager to learn, and humble enough to admit when it doesn\'t understand. When we approach Scripture with this spirit, God opens His Word to us in ways that pride cannot access.',
        content: {
          scriptureText: 'The meek will He guide in judgment: and the meek will He teach His way.',
          teachingPoints: [
            {
              narrative:
                'Humility is the soil where divine truth grows. The proud heart resists instruction, believing it already knows enough. But God guides and teaches the meek—those who recognize their need for divine wisdom. When we come to Scripture convinced we have all the answers, we\'ve already closed the door to deeper understanding. God hides truth from the proud but reveals it to those willing to be corrected. A teachable heart listens for conviction, not confirmation. It doesn\'t seek to prove itself right; it seeks to be transformed by truth.\n\nThe key is coming to God\'s Word with an open heart, ready to have our assumptions challenged and our understanding deepened. This humility doesn\'t mean ignorance—it means acknowledging that God\'s wisdom far surpasses our own. When we approach Scripture this way, we position ourselves to receive the instruction and guidance only God can provide.',
              scriptures: [
                {
                  verse: 'Psalm 25:9',
                  text: 'The meek will He guide in judgment: and the meek will He teach His way.',
                },
              ],
              examples: [
                'A proud mind cannot receive new truth because it has already decided what truth looks like',
                'Humility acknowledges our need for divine wisdom',
                'God teaches those who are willing to be corrected',
              ],
              rhetoricalQuestions: [
                'When reading the Bible, do you listen to learn—or to be right?',
                'What assumptions do you bring to Scripture that might blind you to God\'s truth?',
                'Are you willing to have your understanding corrected by God\'s Word?',
              ],
            },
          ],
          lifeApplication: {
            challenge:
              'Before each study, pray for humility. Ask God to remove bias and open your heart to correction.',
            journaling: 'Write about a time when God corrected your thinking through Scripture.',
          },
          prayerPrompt:
            'Father, give me a humble spirit. Remove pride and open my mind to receive Your truth in full.',
        },
        completed: false,
      },
      {
        id: 'htsb-4',
        title: 'Obedience – The Key to Understanding',
        duration: 8,
        scripture: 'John 7:17',
        description:
          'Obedience unlocks insight. When we do what we know, God reveals more.',
        openingThought: 'Light followed is light increased. This is one of the most profound spiritual principles in Scripture: obedience is the key that unlocks deeper understanding. Jesus made this clear when He said, "If any man will do His will, he shall know of the doctrine." This isn\'t just good advice—it\'s a spiritual law. When we act on what God has revealed, He reveals more.\n\nThis principle transforms how we approach Bible study. We\'re not studying to accumulate knowledge for its own sake. We\'re studying to know how to live, and when we live what we know, God entrusts us with greater light. Spiritual understanding grows through obedience, not argument. Those who act on God\'s Word are the ones who receive clearer insight into its deeper meanings. Truth lived becomes truth understood in ways that mere intellectual knowledge can never achieve.',
        content: {
          scriptureText: 'If any man will do His will, he shall know of the doctrine, whether it be of God.',
          teachingPoints: [
            {
              narrative:
                'Obedience unlocks insight in ways that argument never can. Spiritual understanding grows through practice, not just study. Jesus promises that those who choose to do God\'s will will discover whether His doctrine is truly from God. This isn\'t theoretical—it\'s experiential. When we act on what we know, God reveals more. Those who obey are entrusted with greater light because they\'ve proven faithful with what they\'ve already received.\n\nThe Holy Spirit teaches through practice. Truth lived becomes truth understood. We might read about faith, but when we step out in faith, we understand it in a way that reading alone cannot provide. This principle means our Bible study must always lead to action. Every truth we learn should have practical application, and every application should open us to receive deeper truth. Obedience isn\'t optional for spiritual growth—it\'s the pathway to greater understanding.',
              scriptures: [
                {
                  verse: 'John 7:17',
                  text: 'If any man will do His will, he shall know of the doctrine, whether it be of God.',
                },
              ],
              examples: [
                'Those who act on God\'s Word receive clearer insight into its deeper meanings',
                'Truth lived becomes truth understood in ways intellectual knowledge cannot',
                'Obedience proves our faithfulness and opens the door to greater revelation',
              ],
              rhetoricalQuestions: [
                'Are you obeying the truths God has already shown you?',
                'What truth have you learned but not yet applied to your life?',
                'How has obedience deepened your understanding of Scripture?',
              ],
            },
          ],
          lifeApplication: {
            challenge:
              'Choose one clear command of God and practice it faithfully this week.',
            journaling: 'Record how obedience changes your understanding of Scripture.',
          },
          prayerPrompt:
            'Lord, help me walk in the truth I know. Let my actions reflect my understanding of Your Word.',
        },
        completed: false,
      },
      {
        id: 'htsb-5',
        title: 'Teaching Spirit – Sharing What You Learn',
        duration: 8,
        scripture: 'Matthew 10:8',
        description:
          'When we share God\'s Word, it strengthens both others and ourselves.',
        openingThought: 'Truth multiplies when it\'s shared. Jesus made this clear when He commissioned His disciples: "Freely ye have received, freely give." What we\'ve learned from God is never meant to stay locked up in our own hearts. Teaching others reinforces what we\'ve learned ourselves. When we explain God\'s Word to someone else, we often gain clarity we didn\'t have before. The process of sharing forces us to articulate truth clearly, and in that articulation, understanding deepens.\n\nSharing Scripture invites the Holy Spirit to clarify our understanding. Every believer is called to be a teacher, not necessarily from a pulpit or platform, but through lifestyle and love. When you share what God showed you in your study, you\'re participating in the Great Commission. You\'re helping someone else grow, and in the process, God blesses you with even greater understanding. This isn\'t about being an expert—it\'s about being faithful with what God has given you.',
        content: {
          scriptureText: 'Freely ye have received, freely give.',
          teachingPoints: [
            {
              narrative:
                'Teaching others reinforces what we\'ve learned ourselves. When we share Scripture, we\'re not just helping someone else—we\'re strengthening our own understanding. The process of explaining God\'s Word forces us to think carefully about what we\'ve learned, and in that thinking, clarity emerges. Sharing invites the Holy Spirit to clarify our understanding because we\'re participating in God\'s work of multiplication.\n\nEvery believer is called to be a teacher through lifestyle and love. This doesn\'t mean we need all the answers or theological degrees—it means we faithfully share what God has shown us. When you teach what you\'ve learned, you\'re being faithful with the revelation God has given you, and He promises to entrust faithful stewards with more. Freely you received, so freely give.',
              scriptures: [
                {
                  verse: 'Matthew 10:8',
                  text: 'Freely ye have received, freely give.',
                },
              ],
              examples: [
                'Explaining truth to others deepens our own understanding',
                'Sharing Scripture opens the door for the Holy Spirit to clarify insight',
                'Teaching multiplies the impact of what we\'ve learned',
              ],
              rhetoricalQuestions: [
                'Who could benefit from something God showed you recently?',
                'How has sharing Scripture deepened your faith?',
                'What\'s holding you back from teaching others what you\'ve learned?',
              ],
            },
          ],
          lifeApplication: {
            challenge: 'Share one insight from your study with someone this week.',
            journaling: 'Write about how sharing Scripture deepened your faith.',
          },
          prayerPrompt:
            'Father, make me a channel of Your truth. Let my words bring light to others.',
        },
        completed: false,
      },
      {
        id: 'htsb-6',
        title: 'Trusting What\'s Revealed – Walking by Faith',
        duration: 8,
        scripture: 'Deuteronomy 29:29',
        description:
          'Faith accepts what God has revealed and trusts Him for what He has not yet explained.',
        openingThought: 'Faith begins where explanation ends. Moses made this clear when he said, "The secret things belong unto the Lord our God: but those things which are revealed belong unto us." God has given us everything we need to know—not everything we want to know, but everything we need. The spiritually mature learn to rest in God\'s sufficiency, trusting that what He has revealed is what we need for this moment.\n\nThis principle is crucial for Bible study. We can study forever and still have unanswered questions. But faith accepts what God has revealed and trusts Him for what He has not yet explained. God reveals enough to trust Him, not everything to satisfy curiosity. When we can rest in this reality, we find peace even in our questions. Great peace belongs to those who trust God\'s revealed Word, not those who demand answers to every mystery.',
        content: {
          scriptureText: 'The secret things belong unto the Lord our God: but those things which are revealed belong unto us and to our children forever.',
          teachingPoints: [
            {
              narrative:
                'God reveals enough to trust Him, not everything to satisfy curiosity. The secret things belong to Him, but what He has revealed belongs to us. This distinction is crucial for spiritual maturity. Faith is choosing to rest in God\'s wisdom when answers are missing. The spiritually mature walk by trust, not by full understanding. They know God has given them everything they need, even if He hasn\'t answered every question.\n\nThis principle transforms how we approach unanswered questions in Scripture. Instead of demanding explanations or losing faith when mysteries remain, we trust the God who revealed them. We accept what God has made known and trust Him for what He has kept secret. This trust doesn\'t mean ignoring hard questions—it means bringing them to God in faith, believing He knows what He\'s doing even when we don\'t.',
              scriptures: [
                {
                  verse: 'Deuteronomy 29:29',
                  text: 'The secret things belong unto the Lord our God: but those things which are revealed belong unto us and to our children forever.',
                },
              ],
              examples: [
                'Faith is choosing to trust God\'s wisdom when answers are missing',
                'God reveals enough to guide us, not everything to satisfy us',
                'Those who trust God\'s revealed Word find peace even in mystery',
              ],
              rhetoricalQuestions: [
                'Do I trust God\'s Word even when I don\'t understand everything?',
                'What questions have I been demanding God answer instead of trusting Him with?',
                'How has trusting God\'s revealed Word brought me peace?',
              ],
            },
          ],
          lifeApplication: {
            challenge:
              'Turn one of your biggest Bible questions into a prayer of trust this week.',
            journaling: 'Describe how trusting God\'s silence strengthens your faith.',
          },
          prayerPrompt:
            'Lord, I choose to rest in what You\'ve revealed. Help me trust that Your Word is enough for every step of my journey.',
        },
        completed: false,
      },
    ],
  },
]

// Deeper studies available as a thank you to supporters
export const supporterStudies: Study[] = [
  {
    id: 'sanctuary-study',
    title: 'The Sanctuary Study',
    description:
      'An in-depth exploration of the heavenly sanctuary, its significance in prophecy, and its relationship to Christ\'s ministry',
    category: 'supporter',
    totalDuration: 180,
    difficulty: 'advanced',
    tags: ['Sanctuary', 'Prophecy', 'Hebrew Tabernacle', 'Christ\'s Ministry', 'Advanced'],
    image: 'sanctuary',
    color: 'from-purple-600 to-purple-700',
    features: [
      'Historical context',
      'Prophetic significance',
      'Symbolic meanings',
      'Supporter content',
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
          commentary: ['Deeper study content available for supporters'],
          interactiveElement: { type: 'reflection', content: {} },
          lifeApplication: {
            challenge: 'Deeper application available for supporters',
          },
          prayerPrompt: 'Extended prayer guide for supporters',
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
          commentary: ['Deeper study content available for supporters'],
          interactiveElement: { type: 'reflection', content: {} },
          lifeApplication: {
            challenge: 'Deeper application available for supporters',
          },
          prayerPrompt: 'Extended prayer guide for supporters',
        },
        completed: false,
      },
    ],
  },
  {
    id: 'prophecy-timeline',
    title: 'Biblical Prophecy Timeline',
    description: 'A comprehensive study of major biblical prophecies and their fulfillment throughout history',
    category: 'supporter',
    totalDuration: 240,
    difficulty: 'advanced',
    tags: ['Prophecy', 'History', 'Timeline', 'Fulfillment', 'Advanced'],
    image: 'prophecy',
    color: 'from-blue-600 to-blue-700',
    features: [
      'Interactive timeline',
      'Historical context',
      'Prophetic fulfillment',
      'Supporter content',
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
          commentary: ['Deeper study content available for supporters'],
          interactiveElement: { type: 'reflection', content: {} },
          lifeApplication: {
            challenge: 'Deeper application available for supporters',
          },
          prayerPrompt: 'Extended prayer guide for supporters',
        },
        completed: false,
      },
    ],
  },
  {
    id: 'three-angels-message',
    title: 'The Three Angels\' Message',
    description: 'Deep study of Revelation 14 and the three-fold message to the world before Christ\'s return',
    category: 'supporter',
    totalDuration: 210,
    difficulty: 'advanced',
    tags: ['Revelation', 'Last Days', 'Evangelism', 'Three Angels', 'Advanced'],
    image: 'three-angels',
    color: 'from-orange-600 to-orange-700',
    features: [
      'Revelation study',
      'Last-day messages',
      'Evangelism focus',
      'Supporter content',
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
          commentary: ['Deeper study content available for supporters'],
          interactiveElement: { type: 'reflection', content: {} },
          lifeApplication: {
            challenge: 'Deeper application available for supporters',
          },
          prayerPrompt: 'Extended prayer guide for supporters',
        },
        completed: false,
      },
    ],
  },
  {
    id: 'sabbath-study',
    title: 'The Sabbath: Divine Rest',
    description: 'An in-depth exploration of the Sabbath from creation to its significance today',
    category: 'supporter',
    totalDuration: 150,
    difficulty: 'intermediate',
    tags: ['Sabbath', 'Creation', 'Law', 'Rest', 'Intermediate'],
    image: 'sabbath',
    color: 'from-green-600 to-green-700',
    features: [
      'Biblical foundations',
      'Practical application',
      'Historical significance',
      'Supporter content',
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
          commentary: ['Deeper study content available for supporters'],
          interactiveElement: { type: 'reflection', content: {} },
          lifeApplication: {
            challenge: 'Deeper application available for supporters',
          },
          prayerPrompt: 'Extended prayer guide for supporters',
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

export function getSupporterStudies(): Study[] {
  return supporterStudies
}

export function getAllStudies(): Study[] {
  return [...freeStudies, ...supporterStudies]
}

// Check if user has access to a study
export function hasAccessToStudy(study: Study, userHasSupported: boolean): boolean {
  if (study.category === 'free') return true
  if (study.category === 'supporter') return userHasSupported
  return false
}

export function getStudyById(id: string): Study | undefined {
  return getAllStudies().find((s) => s.id === id)
}

export function getLessonById(studyId: string, lessonId: string): Lesson | undefined {
  const study = getStudyById(studyId)
  return study?.lessons.find((l) => l.id === lessonId)
}
