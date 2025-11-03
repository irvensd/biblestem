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
        title: 'Teachability',
        duration: 6,
        scripture: 'Psalm 86:11',
        description:
          "A closed mind cannot receive new truth. If we come to the Bible to prove ourselves right, we've already decided what it can say",
        openingThought: 'A teachable spirit is essential for true Bible study. We must approach Scripture not to prove ourselves right, but to be transformed.',
          content: {
          scriptureText:
            'Teach me thy way, O LORD; I will walk in thy truth: unite my heart to fear thy name.',
          hebrewGreekWords: [
            {
              word: 'למדני',
              language: 'Hebrew',
              transliteration: 'lamdēni',
              meaning: 'teach me, instruct me - imperative form showing urgency and dependence',
              context: 'The psalmist uses the imperative, showing this is not a casual request but an urgent plea for instruction',
              references: ['Psalm 86:11', 'Psalm 25:5', 'Psalm 119:12'],
            },
            {
              word: 'יחד',
              language: 'Hebrew',
              transliteration: 'yachēd',
              meaning: 'together, united, without division - implies complete focus and single-mindedness',
              context: 'The psalmist wants his heart to be united in fear of God, not divided between God and the world',
              references: ['Psalm 86:11', 'Deuteronomy 6:5', 'Mark 12:30'],
            },
          ],
          teachingPoints: [
            {
              narrative:
                'A teachable spirit begins with the recognition that we don\'t have all the answers. We must come to Scripture willing to be corrected, not just to find confirmation of our opinions. The psalmist\'s request is urgent and dependent—"teach me"—using the imperative form. This isn\'t passive learning; it\'s desperate dependence. True teachability means we\'re ready to change based on what we discover in God\'s Word. A closed mind cannot receive new truth. If we come to the Bible to prove ourselves right, we\'ve already decided what it can say, and we\'ve closed ourselves off from what it might actually mean.',
              scriptures: [
                {
                  verse: 'Psalm 86:11',
                  text: 'Teach me thy way, O LORD; I will walk in thy truth: unite my heart to fear thy name.',
                },
              ],
              examples: [
                'Coming to Scripture with preconceived ideas prevents us from hearing God\'s truth',
                'The imperative form shows this is urgent, not optional',
                'Teachability requires both humility and obedience',
              ],
              rhetoricalQuestions: [
                'What assumptions do you bring to Scripture that might blind you to truth?',
                'Are you willing to let God\'s Word change your mind?',
              ],
            },
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
        openingThought: 'Pride has a strange quality—the more you have it, the less you can receive. Think of a clenched fist: no matter what treasure you offer, it cannot be placed inside a hand that won\'t open. In the same way, a proud heart cannot receive God\'s Word. Humility is not weakness; the Greek word for meekness (praÿtēs) means having power but restraining it—like a lion controlled by his master. True Bible study requires humility—the honest recognition that we need God\'s wisdom more than we need to prove our own.\n\nJames commands us to "receive with meekness the engrafted word." Notice it\'s "engrafted"—not just placed on top, but implanted deep within, growing roots and becoming part of our nature. But this implantation requires a receptive heart. A closed mind, a defensive posture, or a spirit of "I already know" will prevent the Word from taking root. We must lay aside our own wisdom and opinions, making room for God\'s truth to be planted within us.',
        content: {
          scriptureText: 'Wherefore lay apart all filthiness and superfluity of naughtiness, and receive with meekness the engrafted word, which is able to save your souls.',
          hebrewGreekWords: [
            {
              word: 'πραΰτητι',
              language: 'Greek',
              transliteration: 'praÿtēti',
              meaning: 'meekness, gentleness, humility - not weakness but controlled strength',
              context: 'This word describes not weakness but controlled strength. The Greek praÿtēs means having power but restraining it',
              references: ['James 1:21', 'Matthew 5:5', 'Galatians 5:23', 'Numbers 12:3'],
            },
            {
              word: 'ἔμφυτον',
              language: 'Greek',
              transliteration: 'emphuton',
              meaning: 'implanted, engrafted - suggesting something permanently growing within',
              context: 'The word describes something planted deep within us, growing roots and becoming part of our nature',
              references: ['James 1:21', 'Psalm 1:3', 'Jeremiah 17:8'],
            },
          ],
          teachingPoints: [
            {
              narrative:
                'Humility is the necessary posture for receiving God\'s Word effectively. James commands us to "receive with meekness"—the Greek word suggests flexibility and readiness to learn. This humility isn\'t self-deprecation; it\'s honest recognition of our need for God\'s wisdom. Pride creates a barrier—it says "I know" when we should say "teach me." The engrafted word becomes part of us, growing roots and transforming us from within. But this implantation requires open hands, not clenched fists. A humble heart is fertile soil for God\'s truth to grow deep and bear fruit.',
              scriptures: [
                {
                  verse: 'James 1:21',
                  text: 'Wherefore lay apart all filthiness and superfluity of naughtiness, and receive with meekness the engrafted word, which is able to save your souls.',
                },
              ],
              examples: [
                'Humility means coming to Scripture as a student, not a critic',
                'The engrafted word grows deep roots, changing us from within',
                'Pride prevents the Word from taking root in our hearts',
              ],
              rhetoricalQuestions: [
                'How does pride prevent you from truly receiving God\'s Word?',
                'What opinions or assumptions do you need to lay aside to make room for God\'s truth?',
              ],
            },
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
        openingThought: 'Knowledge without obedience is dangerous. It puffs up, creates pride, and leads to a hard heart. The Pharisees knew Scripture better than anyone—they could quote it from memory, debate its meanings, and teach it with authority. Yet Jesus said they were "blind guides" because their knowledge never translated into obedience. The goal of Bible study is transformation, not just information. What we learn must change how we live.\n\nThe psalmist says "Thy word have I hid in mine heart." The Hebrew word for "hidden" means stored up like treasure, intentionally preserved for future use. But hiding the Word isn\'t just about memorization—it\'s about internalization. It\'s hidden "in my heart," which in Hebrew means the center of thoughts, emotions, and will—the whole inner person. When God\'s Word is truly hidden in our hearts, it shapes our thinking, guides our decisions, and transforms our actions. The test of our Bible study isn\'t what we know—it\'s how we live.',
        content: {
          scriptureText: 'Thy word have I hid in mine heart, that I might not sin against thee.',
          hebrewGreekWords: [
            {
              word: 'צפנתי',
              language: 'Hebrew',
              transliteration: 'tsāpanīti',
              meaning: 'I have hidden, stored up, treasured - implies intentional safekeeping',
              context: 'This word describes storing something valuable for future use, like a treasure hidden for safety',
              references: ['Psalm 119:11', 'Proverbs 7:1', 'Deuteronomy 33:4'],
            },
            {
              word: 'בלבי',
              language: 'Hebrew',
              transliteration: 'bilvāvī',
              meaning: 'in my heart - the center of thoughts, emotions, and will',
              context: 'The Hebrew concept of "heart" encompasses mind, emotions, and will - the whole inner person',
              references: ['Psalm 119:11', 'Deuteronomy 6:6', 'Jeremiah 31:33'],
            },
          ],
          teachingPoints: [
            {
              narrative:
                'The purpose of Bible study is not merely to gain knowledge but to be transformed. We "hide" God\'s Word in our hearts not just by memorizing it, but by letting it shape our actions. The psalmist\'s goal is clear: "that I might not sin against thee"—practical holiness. Biblical knowledge should lead to biblical living. The test of our study is our obedience. Knowledge without application leads to spiritual pride. The Pharisees knew Scripture, but their knowledge made them harder, not holier. True Bible study isn\'t about accumulating facts; it\'s about transformation. When God\'s Word is truly hidden in our hearts, it changes our thinking, guides our decisions, and empowers us to resist sin.',
              scriptures: [
                {
                  verse: 'Psalm 119:11',
                  text: 'Thy word have I hid in mine heart, that I might not sin against thee.',
                },
              ],
              examples: [
                'Memorization without application leads to spiritual pride',
                'True Bible study transforms behavior, not just beliefs',
                'The goal is holiness, not just head knowledge',
              ],
              rhetoricalQuestions: [
                'What have you learned from Scripture recently that you haven\'t yet applied?',
                'How do you ensure your Bible study leads to obedience, not just information?',
              ],
            },
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
        openingThought: 'Peace doesn\'t come from having all the answers. It comes from trusting the One who does. When we love and trust God\'s Word, we find great peace—not because every question is answered, but because we trust the God who revealed it. The Hebrew word shālōm means more than absence of conflict; it means wholeness, completeness, harmony in all of life. This peace comes from loving God\'s law, trusting His sufficiency, and resting in His revelation.\n\nWe must trust that what God has chosen to reveal is exactly what we need. His Word is sufficient for our spiritual growth. When we doubt this, we stumble. The Hebrew for "offend" means a stumbling block—anything that causes us to fall. Questions are fine, but doubt that undermines God\'s Word causes us to trip. Great peace belongs to those who trust God\'s Word, not those who need to understand everything. We find stability not in having all answers, but in trusting the God who does.',
        content: {
          scriptureText: 'Great peace have they which love thy law: and nothing shall offend them.',
          hebrewGreekWords: [
            {
              word: 'שלום',
              language: 'Hebrew',
              transliteration: 'shālōm',
              meaning: 'peace, wholeness, completeness - not absence of conflict but presence of harmony',
              context: 'Biblical peace is not mere absence of conflict but the presence of wholeness, completeness, and harmony in all of life',
              references: ['Psalm 119:165', 'Isaiah 26:3', 'John 14:27', 'Philippians 4:7'],
            },
            {
              word: 'למוכשל',
              language: 'Hebrew',
              transliteration: 'lemokēshēl',
              meaning: 'a stumbling block, offense - anything that causes one to fall or stumble',
              context: 'The word describes anything that trips us up or causes us to fall spiritually. Trusting God\'s Word removes these stumbling blocks',
              references: ['Psalm 119:165', 'Isaiah 8:14', 'Romans 9:33', '1 Corinthians 1:23'],
            },
          ],
          teachingPoints: [
            {
              narrative:
                'When we love and trust God\'s Word, we find great peace—stability in the midst of life\'s storms. The Hebrew for "offend" means to stumble or fall. God\'s Word keeps us steady. This trust means we don\'t need to seek answers beyond what God has revealed. Peace comes not from having all answers, but from trusting in what God has made known. The world offers endless opinions, theories, and philosophies, but they create confusion and conflict. God\'s Word, when trusted and loved, creates wholeness. It answers what we need to know and grounds us in what we need to believe.',
              scriptures: [
                {
                  verse: 'Psalm 119:165',
                  text: 'Great peace have they which love thy law: and nothing shall offend them.',
                },
              ],
              examples: [
                'Trusting God\'s Word brings stability in uncertainty',
                'Doubt that undermines God\'s Word becomes a stumbling block',
                'Peace comes from loving God\'s law, not from answering every question',
              ],
              rhetoricalQuestions: [
                'In what areas do you struggle to trust what God has revealed?',
                'What questions make you lose peace instead of trusting God\'s sufficiency?',
              ],
            },
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
