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
    id: 'how-to-study-bible',
    title: 'How to Study the Bible: The Preparation',
    description: 'A 6-part Bible study series designed to prepare the believer to approach God\'s Word with prayer, maturity, humility, obedience, a teaching spirit, and trust in what God has revealed.',
    category: 'free',
    totalDuration: 36, // 6 lessons × 6 minutes each
    difficulty: 'beginner',
    tags: ['Bible Study', 'Preparation', 'Spiritual Growth', 'Learning'],
    image: 'bible-study-prep',
    color: 'from-emerald-500 to-emerald-600',
    features: ['Interactive word study', 'Guided study sections', 'Reflection questions', 'Premium content'],
    lessons: [
      {
        id: 'htsb-1',
        title: 'Prayer',
        duration: 6,
        scripture: 'Psalm 119:18',
        description: 'Opening the Bible without prayer is like walking into a dark room without turning on the light',
        content: {
          scriptureText: 'Open thou mine eyes, that I may behold wondrous things out of thy law.',
          commentary: [
            'Prayer is the essential first step in Bible study. We acknowledge our dependence on God for spiritual understanding.',
            'The psalmist recognizes that spiritual truths are hidden from our natural understanding and require divine revelation.',
            'Without God\'s illumination, we can read the words but miss the transformative power of Scripture.',
            'This prayer expresses humility - admitting we need God\'s help to understand His own Word.'
          ],
          interactiveElement: {
            type: 'quiz',
            content: {
              questions: [
                {
                  question: 'In Psalm 119:18, what kind of "eyes" is the psalmist talking about?',
                  options: [
                    'Physical vision',
                    'Spiritual understanding',
                    'Night vision goggles'
                  ],
                  correct: 1
                }
              ]
            }
          },
          lifeApplication: {
            challenge: 'Never open the Bible without first asking God for the Holy Spirit\'s guidance. Make it a daily habit: pray before every study session.',
            journaling: 'Write about a time when God opened your understanding to His Word.'
          },
          prayerPrompt: 'Lord, open my spiritual eyes to see Your truth. Give me understanding beyond what I could find on my own, and fill me with Your Spirit so I may walk in obedience.',
          deeperStudy: {
            additionalReadings: ['The Practice of Spiritual Reading', 'Opening Scripture with Prayer'],
            discussionQuestions: [
              'Why is prayer essential before studying the Bible?',
              'How does the Holy Spirit open our understanding?',
              'What is the danger of studying without prayer?'
            ]
          }
        }
      },
      {
        id: 'htsb-2',
        title: 'Mature and Be Weaned Off from Human Dependence',
        duration: 6,
        scripture: '1 Corinthians 13:11',
        description: 'God calls us to grow from milk to meat—to move from relying on others for our spiritual food to feeding ourselves',
        content: {
          scriptureText: 'When I was a child, I spake as a child, I understood as a child, I thought as a child: but when I became a man, I put away childish things.',
          commentary: [
            'Spiritual maturity means moving from dependence on others\' faith to developing your own relationship with God.',
            'While teachers and mentors are valuable, we must learn to study and discover truth for ourselves.',
            'Childlike faith is beautiful, but childish dependence on others\' understanding limits our growth.',
            'Mature believers can discern truth from Scripture rather than simply accepting what others say.'
          ],
          interactiveElement: {
            type: 'quiz',
            content: {
              questions: [
                {
                  question: 'According to Hebrews 5:14, what belongs to those of full age?',
                  options: [
                    'Milk',
                    'Strong meat',
                    'Water'
                  ],
                  correct: 1
                }
              ]
            }
          },
          lifeApplication: {
            challenge: 'Listen to sermons and read study guides, but always test them in Scripture. Develop your own study routine so you can confirm truth without relying solely on others.',
            journaling: 'Reflect on areas where you might be leaning too heavily on others for spiritual understanding.'
          },
          prayerPrompt: 'Father, grow me from milk to meat. Give me the discipline to study Your Word for myself and the discernment to test all things by Your truth.'
        }
      },
      {
        id: 'htsb-3',
        title: 'Must Have a Teachable Spirit',
        duration: 6,
        scripture: 'Psalm 86:11',
        description: 'A closed mind cannot receive new truth. If we come to the Bible to prove ourselves right, we\'ve already decided what it can say',
        content: {
          scriptureText: 'Teach me thy way, O LORD; I will walk in thy truth: unite my heart to fear thy name.',
          commentary: [
            'A teachable spirit begins with recognizing that we don\'t know everything and need God\'s instruction.',
            'Pride is the enemy of learning. When we think we already know, we close ourselves to new understanding.',
            'An undivided heart seeks God\'s truth above personal preferences or preconceived ideas.',
            'The fear of the Lord is the beginning of wisdom - reverent awe opens us to divine instruction.'
          ],
          interactiveElement: {
            type: 'quiz',
            content: {
              questions: [
                {
                  question: 'What is one key requirement for having a teachable spirit?',
                  options: [
                    'Being stubborn about your beliefs',
                    'Emptying self to receive God\'s truth',
                    'Knowing more than everyone else'
                  ],
                  correct: 1
                }
              ]
            }
          },
          lifeApplication: {
            challenge: 'Begin each study with a surrender prayer: "Lord, teach me Your ways, even if it changes mine." Guard against the temptation to twist Scripture to match personal preference.',
            journaling: 'Write about a time when God corrected your understanding of His Word.'
          },
          prayerPrompt: 'Lord, empty me of pride and self. Give me a humble, teachable spirit that welcomes Your correction and rejoices in Your truth.'
        }
      },
      {
        id: 'htsb-4',
        title: 'Be Willing to Obey What You Learn',
        duration: 6,
        scripture: 'John 7:17',
        description: 'God reveals truth to those who are willing to follow it. Many never grow in Bible understanding because they treat Scripture as information rather than instruction',
        content: {
          scriptureText: 'If any man will do his will, he shall know of the doctrine, whether it be of God, or whether I speak of myself.',
          commentary: [
            'Knowledge without obedience is worthless. God doesn\'t give us His Word just to satisfy our curiosity.',
            'Many people enjoy studying Scripture but resist applying its teachings to their daily lives.',
            'True understanding comes through doing, not just hearing. Obedience deepens our comprehension.',
            'When we refuse to obey what we already know, God may withhold further revelation.'
          ],
          interactiveElement: {
            type: 'quiz',
            content: {
              questions: [
                {
                  question: 'According to James 1:22, what happens if we are hearers only and not doers?',
                  options: [
                    'We grow spiritually',
                    'We deceive ourselves',
                    'We impress others'
                  ],
                  correct: 1
                }
              ]
            }
          },
          lifeApplication: {
            challenge: 'When God shows you a truth, write down the specific step you\'ll take to obey it. Treat each study as a call to action.',
            journaling: 'Identify one area where you need to move from hearing to doing God\'s Word.'
          },
          prayerPrompt: 'Lord, make me willing to obey all You reveal to me. Give me courage to act on truth, even when it is difficult.'
        }
      },
      {
        id: 'htsb-5',
        title: 'Approach the Bible with Prayer',
        duration: 6,
        scripture: 'Psalm 119:18',
        description: 'Prayer is not an optional extra in Bible study—it\'s the lifeline. Without the Holy Spirit\'s illumination, the Bible remains a closed book',
        content: {
          scriptureText: 'Open thou mine eyes, that I may behold wondrous things out of thy law.',
          commentary: [
            'Prayer is the essential first step in Bible study. We acknowledge our dependence on God for spiritual understanding.',
            'The psalmist recognizes that spiritual truths are hidden from our natural understanding and require divine revelation.',
            'Without God\'s illumination, we can read the words but miss the transformative power of Scripture.',
            'This prayer expresses humility - admitting we need God\'s help to understand His own Word.'
          ],
          interactiveElement: {
            type: 'quiz',
            content: {
              questions: [
                {
                  question: 'Who guides us into all truth?',
                  options: [
                    'The church',
                    'The Holy Spirit',
                    'Our own wisdom'
                  ],
                  correct: 1
                }
              ]
            }
          },
          lifeApplication: {
            challenge: 'Begin each study session with prayer for understanding, humility, and application. Keep an ongoing dialogue with God as you read.',
            journaling: 'Write about how prayer has enhanced your Bible study experience.'
          },
          prayerPrompt: 'Holy Spirit, open my eyes to see the wonders in Your Word. Lead me into all truth and give me the courage to walk in it.'
        }
      },
      {
        id: 'htsb-6',
        title: 'Interpret Scripture with Scripture',
        duration: 6,
        scripture: 'Isaiah 28:10',
        description: 'The Bible is its own best interpreter. One verse, taken alone, can be misunderstood—but when compared with the whole, the meaning becomes clear',
        content: {
          scriptureText: 'For precept must be upon precept, precept upon precept; line upon line, line upon line; here a little, and there a little.',
          commentary: [
            'God hasn\'t revealed everything to us, and that\'s okay. He gives us what we need to know to live faithfully.',
            'Some people become frustrated when they can\'t understand everything in Scripture. This verse teaches contentment with mystery.',
            'Our focus should be on obeying what God has clearly revealed rather than speculating about hidden things.',
            'What God has revealed is sufficient for faith and godly living. We can trust Him with the rest.'
          ],
          interactiveElement: {
            type: 'quiz',
            content: {
              questions: [
                {
                  question: 'According to 2 Peter 1:20, what is no prophecy of Scripture of?',
                  options: [
                    'Private interpretation',
                    'Public teaching',
                    'Divine origin'
                  ],
                  correct: 0
                }
              ]
            }
          },
          lifeApplication: {
            challenge: 'When studying a topic, gather all related verses before forming a conclusion. Use cross-references and Bible tools to connect the dots.',
            journaling: 'Reflect on how comparing multiple verses has clarified a biblical truth for you.'
          },
          prayerPrompt: 'Lord, teach me to compare Scripture with Scripture. Guard me from forming beliefs based on isolated texts and guide me into balanced truth.'
        }
      }
    ]
  },
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
          scriptureText: 'In those days Caesar Augustus issued a decree that a census should be taken of the entire Roman world. This was the first census that took place while Quirinius was governor of Syria. And everyone went to their own town to register. So Joseph also went up from the town of Nazareth in Galilee to Judea, to Bethlehem the town of David, because he belonged to the house and line of David. He went there to register with Mary, who was pledged to be married to him and was expecting a child. While they were there, the time came for the baby to be born, and she gave birth to her firstborn, a son. She wrapped him in cloths and placed him in a manger, because there was no guest room available for them. And there were shepherds living out in the fields nearby, keeping watch over their flocks at night. An angel of the Lord appeared to them, and the glory of the Lord shone around them, and they were terrified. But the angel said to them, "Do not be afraid. I bring you good news that will cause great joy for all the people. Today in the town of David a Savior has been born to you; he is the Messiah, the Lord."',
          commentary: [
            'The birth of Jesus fulfilled ancient prophecies spoken by the prophets hundreds of years earlier. Micah prophesied that the Messiah would be born in Bethlehem, and Isaiah spoke of a virgin giving birth to a son called Immanuel.',
            'God chose humble circumstances to enter our world - not a palace, but a stable; not announced to kings, but to shepherds. This demonstrates Gods heart for the lowly and His identification with common people.',
            'The angels announced "good news of great joy" - the birth of Jesus is the most joyful event in human history because it means God has come to rescue us from sin and death.',
            'Jesus being placed in a manger foreshadows His entire ministry - He came to feed the spiritually hungry and be the Bread of Life for all who would believe in Him.'
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
          scriptureText: 'At that time Jesus came from Nazareth in Galilee and was baptized by John in the Jordan. Just as Jesus was coming up out of the water, he saw heaven being torn open and the Spirit descending on him like a dove. And a voice came from heaven: "You are my Son, whom I love; with you I am well pleased." At once the Spirit sent him out into the wilderness, and he was in the wilderness forty days, being tempted by Satan. He was with the wild animals, and angels attended him. After John was put in prison, Jesus went into Galilee, proclaiming the good news of God. "The time is fulfilled," he said. "The kingdom of God has come near. Repent and believe the good news!"',
          commentary: [
            'Jesus identification with sinful humanity through baptism shows His willingness to fulfill all righteousness. Though sinless, He submitted to baptism to identify with us and set an example of obedience.',
            'The Trinity is beautifully revealed at Jesus baptism - the Son being baptized, the Spirit descending like a dove, and the Father speaking approval from heaven. This is one of the clearest pictures of the three persons of the Trinity working together.',
            'Jesus was tempted in the wilderness for forty days yet remained completely sinless. This qualified Him to be our perfect sacrifice and shows us that victory over temptation is possible through Gods strength.',
            'Jesus first proclamation was about the kingdom of God coming near. This meant that Gods reign and rule were breaking into human history through Jesus ministry, death, and resurrection.'
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
          scriptureText: 'Now when Jesus saw the crowds, he went up on a mountainside and sat down. His disciples came to him, and he began to teach them. He said: "Blessed are the poor in spirit, for theirs is the kingdom of heaven. Blessed are those who mourn, for they will be comforted. Blessed are the meek, for they will inherit the earth. Blessed are those who hunger and thirst for righteousness, for they will be filled. Blessed are the merciful, for they will be shown mercy. Blessed are the pure in heart, for they will see God. Blessed are the peacemakers, for they will be called children of God. Blessed are those who are persecuted because of righteousness, for theirs is the kingdom of heaven. Blessed are you when people insult you, persecute you and falsely say all kinds of evil against you because of me. Rejoice and be glad, because great is your reward in heaven."',
          commentary: [
            'Jesus compassion led Him to teach and heal the multitudes. He saw their spiritual hunger and physical needs, responding with both miraculous healings and life-changing teaching that addressed their deepest needs.',
            'The Beatitudes reveal Gods heart for the humble, broken, and seeking. Each blessing shows that Gods kingdom operates by different values than the world - weakness becomes strength, mourning leads to comfort, and persecution brings reward.',
            'Jesus teachings turned worldly wisdom upside down. The world says "blessed are the rich, the powerful, the popular" but Jesus says "blessed are the poor in spirit, the meek, the persecuted." Gods kingdom has different priorities.',
            'Each Beatitude contains both a present reality and a future promise. Those who embrace these attitudes receive both current spiritual blessings and eternal rewards in Gods kingdom.'
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
          scriptureText: 'Later, knowing that everything had now been finished, and so that Scripture would be fulfilled, Jesus said, "I am thirsty." A jar of wine vinegar was there, so they soaked a sponge in it, put the sponge on a stalk of the hyssop plant, and lifted it to Jesus lips. When he had received the drink, Jesus said, "It is finished." With that, he bowed his head and gave up his spirit. Now it was the day of Preparation, and the next day was to be a special Sabbath. Because the Jewish leaders did not want the bodies left on the crosses during the Sabbath, they asked Pilate to have the legs broken and the bodies taken down.',
          commentary: [
            'Jesus willingly gave His life for our sins. His death was not an accident or defeat, but a deliberate sacrifice. He had the power to come down from the cross but chose to stay and pay the price for our redemption.',
            'The cross demonstrates both Gods perfect love and perfect justice. His love motivated Him to provide salvation, while His justice required that sin be punished. Jesus bore our punishment so we could receive His righteousness.',
            'Jesus final words "It is finished" reveal His completed mission. The Greek word "tetelestai" means "paid in full" - like a receipt stamped when a debt is completely satisfied. Our sin debt has been paid in full.',
            'The physical details of the crucifixion fulfill numerous Old Testament prophecies, demonstrating that this was Gods plan from eternity past to redeem humanity through the sacrificial death of His Son.'
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
          scriptureText: 'On the first day of the week, very early in the morning, the women took the spices they had prepared and went to the tomb. They found the stone rolled away from the tomb, but when they entered, they did not find the body of the Lord Jesus. While they were wondering about this, suddenly two men in clothes that gleamed like lightning stood beside them. In their fright the women bowed down with their faces to the ground, but the men said to them, "Why do you look for the living among the dead? He is not here; he has risen! Remember how he told you, while he was still with you in Galilee: The Son of Man must be delivered over to the hands of sinners, be crucified and on the third day be raised again." Then they remembered his words. When they came back from the tomb, they told all these things to the Eleven and to all the others.',
          commentary: [
            'The empty tomb proves Jesus victory over death and validates all His claims about being the Son of God. Death could not hold Him because He is the source of life itself.',
            'The resurrection gives us hope for eternal life and assures us that everyone who believes in Jesus will also be raised from the dead. Because He lives, we too shall live.',
            'Jesus appearances to the disciples after His resurrection confirmed all His promises and proved that His death had accomplished its purpose. He showed them His hands and side as evidence of His identity.',
            'The angels reminder "Remember how he told you" emphasizes that Jesus had predicted His death and resurrection. This was not Plan B, but Gods eternal plan of salvation unfolding exactly as promised.'
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
          prayerPrompt: 'Thank God for revealing the future to give us hope and guidance.'
        }
      }
    ]
  }
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
  return allStudies.find(study => study.id === id)
}
