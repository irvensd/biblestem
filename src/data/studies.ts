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
        title: 'The Birth of Jesus',
        duration: 5,
        scripture: 'Luke 2:1-20',
        description: 'Discover the miraculous birth of our Savior',
        content: {
          scriptureText: 'In those days Caesar Augustus issued a decree that a census should be taken of the entire Roman world. This was the first census that took place while Quirinius was governor of Syria. And everyone went to their own town to register. So Joseph also went up from the town of Nazareth in Galilee to Judea, to Bethlehem the town of David, because he belonged to the house and line of David. He went there to register with Mary, who was pledged to be married to him and was expecting a child. While they were there, the time came for the baby to be born, and she gave birth to her firstborn, a son. She wrapped him in cloths and placed him in a manger, because there was no guest room available for them. And there were shepherds living out in the fields nearby, keeping watch over their flocks at night. An angel of the Lord appeared to them, and the glory of the Lord shone around them, and they were terrified. But the angel said to them, "Do not be afraid. I bring you good news that will cause great joy for all the people. Today in the town of David a Savior has been born to you; he is the Messiah, the Lord."',
          taggedScripture: [
            { type: 'text', text: 'But the ' },
            {
              type: 'word',
              text: 'angel',
              data: {
                original: 'ἄγγελος',
                transliteration: 'angelos',
                gloss: 'messenger, envoy, one who is sent',
                lemma: 'ἄγγελος',
                strongs: 'G32',
                partOfSpeech: 'Noun',
                language: 'greek',
                deeperStudy: {
                  etymology: 'From ἀγγέλλω (angello), meaning "to announce" or "to bring a message"',
                  frequency: 'Appears 175 times in the New Testament',
                  crossReferences: ['Matt 1:20', 'Luke 1:26', 'Heb 1:14']
                }
              }
            },
            { type: 'text', text: ' said to them, "Do not ' },
            {
              type: 'word',
              text: 'fear',
              data: {
                original: 'φοβέω',
                transliteration: 'phobeo',
                gloss: 'to fear, be afraid, reverence',
                lemma: 'φοβέω',
                strongs: 'G5399',
                partOfSpeech: 'Verb',
                language: 'greek',
                deeperStudy: {
                  etymology: 'From φόβος (phobos), meaning fear or reverence',
                  frequency: 'Appears 95 times in the New Testament',
                  crossReferences: ['Matt 10:28', 'Luke 12:4', '1 John 4:18']
                }
              }
            },
            { type: 'text', text: '. I bring you good ' },
            {
              type: 'word',
              text: 'news',
              data: {
                original: 'εὐαγγέλιον',
                transliteration: 'euangelion',
                gloss: 'good news, gospel',
                lemma: 'εὐαγγέλιον',
                strongs: 'G2098',
                partOfSpeech: 'Noun',
                language: 'greek',
                deeperStudy: {
                  etymology: 'From εὖ (eu) meaning "good" and ἀγγέλλω (angello) meaning "to announce"',
                  frequency: 'Appears 76 times in the New Testament',
                  crossReferences: ['Mark 1:1', 'Rom 1:16', '1 Cor 15:1']
                }
              }
            },
            { type: 'text', text: ' that will cause great joy for all the people. Today in the town of David a ' },
            {
              type: 'word',
              text: 'Savior',
              data: {
                original: 'σωτήρ',
                transliteration: 'soter',
                gloss: 'savior, deliverer',
                lemma: 'σωτήρ',
                strongs: 'G4990',
                partOfSpeech: 'Noun',
                language: 'greek',
                deeperStudy: {
                  etymology: 'From σώζω (sozo), meaning "to save" or "to deliver"',
                  frequency: 'Appears 24 times in the New Testament',
                  crossReferences: ['Luke 1:47', 'John 4:42', 'Titus 2:13']
                }
              }
            },
            { type: 'text', text: ' has been born to you; he is the ' },
            {
              type: 'word',
              text: 'Messiah',
              data: {
                original: 'Χριστός',
                transliteration: 'Christos',
                gloss: 'anointed one, Christ, Messiah',
                lemma: 'Χριστός',
                strongs: 'G5547',
                partOfSpeech: 'Noun',
                language: 'greek',
                deeperStudy: {
                  etymology: 'From χρίω (chrio), meaning "to anoint" - equivalent to Hebrew משיח (mashiach)',
                  frequency: 'Appears 529 times in the New Testament',
                  crossReferences: ['Matt 16:16', 'John 1:41', 'Acts 2:36']
                }
              }
            },
            { type: 'text', text: ', the Lord."' }
          ],
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
          taggedScripture: [
            { type: 'text', text: 'And a voice came from ' },
            {
              type: 'word',
              text: 'heaven',
              data: {
                original: 'שָׁמַיִם',
                transliteration: 'shamayim',
                gloss: 'heavens, sky, abode of God',
                lemma: 'שָׁמַיִם',
                strongs: 'H8064',
                partOfSpeech: 'Noun',
                language: 'hebrew',
                deeperStudy: {
                  etymology: 'Dual form, literally meaning "the two heavens" - referring to visible sky and spiritual realm',
                  frequency: 'Appears 420 times in the Hebrew Bible',
                  crossReferences: ['Gen 1:1', 'Ps 19:1', 'Isa 55:11']
                }
              }
            },
            { type: 'text', text: ': "You are my ' },
            {
              type: 'word',
              text: 'Son',
              data: {
                original: 'בֵּן',
                transliteration: 'ben',
                gloss: 'son, child, descendant',
                lemma: 'בֵּן',
                strongs: 'H1121',
                partOfSpeech: 'Noun',
                language: 'hebrew',
                deeperStudy: {
                  etymology: 'From בָּנָה (banah), meaning "to build" - a son builds the family line',
                  frequency: 'Appears 4906 times in the Hebrew Bible',
                  crossReferences: ['Ps 2:7', '2 Sam 7:14', 'Prov 1:8']
                }
              }
            },
            { type: 'text', text: ', whom I ' },
            {
              type: 'word',
              text: 'love',
              data: {
                original: 'אָהַב',
                transliteration: 'ahav',
                gloss: 'to love, like, choose',
                lemma: 'אָהַב',
                strongs: 'H157',
                partOfSpeech: 'Verb',
                language: 'hebrew',
                deeperStudy: {
                  etymology: 'Root meaning suggests "to breathe after" or "to desire" - deep affection',
                  frequency: 'Appears 217 times in the Hebrew Bible',
                  crossReferences: ['Deut 6:5', 'Hos 11:1', 'Jer 31:3']
                }
              }
            },
            { type: 'text', text: '; with you I am well pleased." The ' },
            {
              type: 'word',
              text: 'Spirit',
              data: {
                original: 'רוּחַ',
                transliteration: 'ruach',
                gloss: 'breath, wind, spirit',
                lemma: 'רוּחַ',
                strongs: 'H7307',
                partOfSpeech: 'Noun',
                language: 'hebrew',
                deeperStudy: {
                  etymology: 'From root meaning "to breathe" - the breath of life from God',
                  frequency: 'Appears 378 times in the Hebrew Bible',
                  crossReferences: ['Gen 1:2', 'Ezek 36:27', 'Joel 2:28']
                }
              }
            },
            { type: 'text', text: ' sent him into the wilderness.' }
          ],
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
        id: 'htsb-1',
        title: 'Prayer',
        duration: 6,
        scripture: 'Psalm 119:18',
        description: 'Opening the Bible without prayer is like walking into a dark room without turning on the light',
        content: {
          openingThought: 'Opening the Bible without prayer is like walking into a dark room without turning on the light. True understanding is not a product of intellect alone—it\'s a gift from God through the Holy Spirit.',
          scriptureText: 'Open thou mine eyes, that I may behold wondrous things out of thy law.',
          mainScriptures: ['Psa 119:18 – Open thou mine eyes, that I may behold wondrous things out of thy law.'],
          taggedScripture: [
            { type: 'text', text: 'Open thou mine ' },
            {
              type: 'word',
              text: 'eyes',
              data: {
                original: 'עֵינַיִם',
                transliteration: 'ayin',
                gloss: 'eyes, sight, figurative: mental or spiritual perception',
                lemma: 'עַיִן',
                strongs: 'H5869',
                partOfSpeech: 'Noun',
                language: 'hebrew',
                deeperStudy: {
                  etymology: 'From root meaning "to look" - represents physical and spiritual sight',
                  frequency: 'Appears 866 times in the Hebrew Bible',
                  crossReferences: ['Eph 1:18', '2 Kings 6:17', 'Matt 13:16']
                }
              }
            },
            { type: 'text', text: ', that I may behold wondrous things out of thy ' },
            {
              type: 'word',
              text: 'law',
              data: {
                original: 'תּוֹרָה',
                transliteration: 'torah',
                gloss: 'instruction, law, teaching',
                lemma: 'תּוֹרָה',
                strongs: 'H8451',
                partOfSpeech: 'Noun',
                language: 'hebrew',
                deeperStudy: {
                  etymology: 'From יָרָה (yarah) meaning "to shoot, direct, teach" - God\'s direction for life',
                  frequency: 'Appears 220 times in the Hebrew Bible',
                  crossReferences: ['Ps 1:2', 'Josh 1:8', '2 Tim 3:16']
                }
              }
            },
            { type: 'text', text: '.' }
          ],
          guidedStudy: [
            {
              pointTitle: 'Prayer',
              supportingScriptures: [
                'Psa 119:18 – Open thou mine eyes, that I may behold wondrous things out of thy law.',
                'Gen 3:7 – And the eyes of them both were opened, and they knew that they were naked; and they sewed fig leaves together, and made themselves aprons.',
                'Rev 3:17 – Because thou sayest, I am rich, and increased with goods, and have need of nothing; and knowest not that thou art wretched, and miserable, and poor, and blind, and naked:',
                'Rom 8:7 – Because the carnal mind is enmity against God: for it is not subject to the law of God, neither indeed can be.',
                'Pro 4:7 – Wisdom is the principal thing; therefore get wisdom: and with all thy getting get understanding.'
              ],
              commentary: 'When the Bible says "open my eyes," it is not speaking of the physically blind. It\'s referring to the opening of spiritual understanding. Adam and Eve were not physically blind before Genesis 3:7—their "opened eyes" meant awareness of sin. The Laodicean church in Revelation 3:17 is a picture of people rich in possessions but blind to their spiritual condition. This is a warning for us: we can be textually aware yet spiritually blind. A carnal mind cannot submit to God\'s law without transformation.',
              reflectQuestion: 'Can you think of a group in Scripture besides Laodicea that was spiritually blind?'
            },
            {
              pointTitle: 'Can Prayer Alone Lead to Wrong Conclusions?',
              supportingScriptures: [
                'Mat 15:9 – But in vain they do worship me, teaching for doctrines the commandments of men.'
              ],
              commentary: 'Yes. A person can pray but still arrive at the wrong conclusion if led by the wrong spirit. That\'s why we must ensure we are guided by the Spirit of truth.',
              reflectQuestion: 'How can we be certain we\'re being led by the right Spirit?'
            },
            {
              pointTitle: 'How to Receive the Holy Spirit',
              supportingScriptures: [
                'Luk 11:13 – If ye then, being evil, know how to give good gifts unto your children: how much more shall your heavenly Father give the Holy Spirit to them that ask him?',
                'Joh 16:13 – Howbeit when he, the Spirit of truth, is come, he will guide you into all truth: for he shall not speak of himself; but whatsoever he shall hear, that shall he speak: and he will shew you things to come.'
              ],
              commentary: 'Receiving the Holy Spirit is not about emotional displays or human-imposed rituals—it is as simple as asking in faith. The Spirit leads us into truth, never contradicting the Word of God.',
              reflectQuestion: 'What is one step you can take today to invite the Holy Spirit into your Bible study time?'
            }
          ],
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
          lifeApplication: 'Never open the Bible without first asking God for the Holy Spirit\'s guidance. Make it a daily habit: pray before every study session.',
          keyTakeaways: [
            'Spiritual sight is different from physical vision.',
            'Without the Holy Spirit, even prayer can be misdirected.',
            'God gives the Spirit freely to those who ask.'
          ],
          prayerPrompt: 'Lord, open my spiritual eyes to see Your truth. Give me understanding beyond what I could find on my own, and fill me with Your Spirit so I may walk in obedience.',
          deeperStudy: {
            wordStudy: 'Hebrew "ayin" (H5869 – "eyes") and its figurative use in Scripture.',
            caseStudy: 'Spiritual blindness in the Pharisees (John 9).',
            pdf: 'Praying Before You Study: A Step-by-Step Guide.',
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
          openingThought: 'God calls us to grow from milk to meat—to move from relying on others for our spiritual food to feeding ourselves from His Word. Guidance is good, but dependence on humans for our understanding can leave us vulnerable to deception.',
          scriptureText: 'When I was a child, I spake as a child, I understood as a child, I thought as a child: but when I became a man, I put away childish things.',
          mainScriptures: ['1Co 13:11 – When I was a child, I spake as a child, I understood as a child, I thought as a child: but when I became a man, I put away childish things.'],
          taggedScripture: [
            { type: 'text', text: 'When I was a ' },
            {
              type: 'word',
              text: 'child',
              data: {
                original: 'νήπιος',
                transliteration: 'nepios',
                gloss: 'infant, child, immature person',
                lemma: 'νήπιος',
                strongs: 'G3516',
                partOfSpeech: 'Noun',
                language: 'greek',
                deeperStudy: {
                  etymology: 'From νη (ne, not) and ἔπος (epos, word) - one who cannot speak clearly',
                  frequency: 'Appears 15 times in the New Testament',
                  crossReferences: ['Matt 11:25', 'Eph 4:14', 'Heb 5:13']
                }
              }
            },
            { type: 'text', text: ', I spake as a child, I understood as a child, I thought as a child: but when I became a ' },
            {
              type: 'word',
              text: 'man',
              data: {
                original: 'ἀνήρ',
                transliteration: 'aner',
                gloss: 'man, adult male, mature person',
                lemma: 'ἀνήρ',
                strongs: 'G435',
                partOfSpeech: 'Noun',
                language: 'greek',
                deeperStudy: {
                  etymology: 'From root meaning "to rise up" - one who has reached full stature',
                  frequency: 'Appears 216 times in the New Testament',
                  crossReferences: ['1 Cor 14:20', 'Eph 4:13', 'Heb 5:14']
                }
              }
            },
            { type: 'text', text: ', I put away childish things.' }
          ],
          guidedStudy: [
            {
              pointTitle: 'The Call to Maturity',
              supportingScriptures: [
                '1Co 13:11 – When I was a child, I spake as a child, I understood as a child, I thought as a child: but when I became a man, I put away childish things.',
                'Psa 146:3 – Put not your trust in princes, nor in the son of man, in whom there is no help.',
                '1Jn 2:27 – But the anointing which ye have received of him abideth in you, and ye need not that any man teach you: but as the same anointing teacheth you of all things, and is truth, and is no lie, and even as it hath taught you, ye shall abide in him.'
              ],
              commentary: 'It is natural to begin the Christian walk learning from others, but God desires that we grow to understand His Word personally. Over-reliance on human teachers creates a weak faith that can be easily swayed. Even in the Reformation era, people trusted the priesthood without searching Scripture, leading to widespread deception.',
              reflectQuestion: 'In what ways might you be leaning too heavily on others for your understanding of Scripture?'
            },
            {
              pointTitle: 'The Parrot Problem',
              supportingScriptures: [
                'Heb 5:13 – For every one that useth milk is unskilful in the word of righteousness: for he is a babe.',
                'Heb 5:14 – But strong meat belongeth to them that are of full age, even those who by reason of use have their senses exercised to discern both good and evil.'
              ],
              commentary: 'A parrot repeats what it hears but has no real understanding. In the same way, many believers can recite doctrinal conclusions but cannot explain how those conclusions are reached from Scripture. This reveals spiritual infancy.',
              reflectQuestion: 'If someone asked you to prove a key belief you hold, could you show them from the Bible step-by-step?'
            },
            {
              pointTitle: 'The Spirit as Our Primary Teacher',
              supportingScriptures: [
                'Joh 14:26 – But the Comforter, which is the Holy Ghost, whom the Father will send in my name, he shall teach you all things, and bring all things to your remembrance, whatsoever I have said unto you.'
              ],
              commentary: 'Human teachers have a role, but the Spirit is the ultimate Teacher. Every true insight must be tested against Scripture and confirmed by the Spirit\'s leading.',
              reflectQuestion: 'How often do you confirm a teaching you hear by personally studying the Scriptures?'
            }
          ],
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
          lifeApplication: 'Listen to sermons and read study guides, but always test them in Scripture. Develop your own study routine so you can confirm truth without relying solely on others.',
          keyTakeaways: [
            'Maturity means moving from dependence on others to personal discernment.',
            'Knowing what you believe is not enough—you must know why.',
            'The Holy Spirit is your ultimate Teacher.'
          ],
          prayerPrompt: 'Father, grow me from milk to meat. Give me the discipline to study Your Word for myself and the discernment to test all things by Your truth.',
          deeperStudy: {
            caseStudy: 'The Bereans testing Paul\'s teaching (Acts 17:10–12).',
            wordStudy: 'Greek "teleios" (G5046 – "mature, complete") and its New Testament usage.',
            pdf: 'From Milk to Meat: A Self-Study Growth Plan.',
            additionalReadings: ['From Dependence to Spiritual Maturity', 'Learning to Study Scripture Personally'],
            discussionQuestions: [
              'What are signs of spiritual maturity?',
              'Why is personal Bible study vital for growth?',
              'How do you balance learning from others with studying for yourself?'
            ]
          }
        }
      },
      {
        id: 'htsb-3',
        title: 'Must Have a Teachable Spirit',
        duration: 6,
        scripture: 'Psalm 86:11',
        description: 'A closed mind cannot receive new truth. If we come to the Bible to prove ourselves right, we\'ve already decided what it can say',
        content: {
          openingThought: 'A closed mind cannot receive new truth. If we come to the Bible to prove ourselves right, we\'ve already decided what it can say. A teachable spirit leaves pride at the door and allows God to correct, guide, and transform us.',
          scriptureText: 'Teach me thy way, O LORD; I will walk in thy truth: unite my heart to fear thy name.',
          mainScriptures: ['Psa 86:11 – Teach me thy way, O LORD; I will walk in thy truth: unite my heart to fear thy name.'],
          taggedScripture: [
            {
              type: 'word',
              text: 'Teach',
              data: {
                original: 'יָרָה',
                transliteration: 'yarah',
                gloss: 'to shoot, point out, instruct, teach',
                lemma: 'יָרָה',
                strongs: 'H3384',
                partOfSpeech: 'Verb',
                language: 'hebrew',
                deeperStudy: {
                  etymology: 'Root meaning "to throw, shoot" - like an archer hitting the target with truth',
                  frequency: 'Appears 84 times in the Hebrew Bible',
                  crossReferences: ['Isa 2:3', 'Mic 4:2', 'Ps 25:4']
                }
              }
            },
            { type: 'text', text: ' me thy way, O LORD; I will walk in thy truth: ' },
            {
              type: 'word',
              text: 'unite',
              data: {
                original: 'יָחַד',
                transliteration: 'yachad',
                gloss: 'to be united, joined together',
                lemma: 'יָחַד',
                strongs: 'H3161',
                partOfSpeech: 'Verb',
                language: 'hebrew',
                deeperStudy: {
                  etymology: 'From root meaning "to be one" - complete unity of purpose',
                  frequency: 'Appears 142 times in the Hebrew Bible',
                  crossReferences: ['Ps 86:11', 'Jer 32:39', 'Ezek 11:19']
                }
              }
            },
            { type: 'text', text: ' my heart to ' },
            {
              type: 'word',
              text: 'fear',
              data: {
                original: 'יָרֵא',
                transliteration: 'yare',
                gloss: 'to fear, revere, be in awe of',
                lemma: 'יָרֵא',
                strongs: 'H3372',
                partOfSpeech: 'Verb',
                language: 'hebrew',
                deeperStudy: {
                  etymology: 'Root meaning "to tremble" - healthy reverence and awe of God',
                  frequency: 'Appears 332 times in the Hebrew Bible',
                  crossReferences: ['Prov 9:10', 'Eccl 12:13', 'Ps 111:10']
                }
              }
            },
            { type: 'text', text: ' thy name.' }
          ],
          guidedStudy: [
            {
              pointTitle: 'Approaching as a Student, Not a Teacher',
              supportingScriptures: [
                'Psa 86:11 – Teach me thy way, O LORD; I will walk in thy truth: unite my heart to fear thy name.',
                'Mat 15:9 – But in vain they do worship me, teaching for doctrines the commandments of men.'
              ],
              commentary: 'David didn\'t say, "Confirm that I already know Your way." He said, "Teach me." A teachable spirit means coming to the Bible ready to learn—not with an agenda to prove our point. Many fall into the trap of using Scripture to back up their own ideas instead of letting it shape them.',
              reflectQuestion: 'Have you ever gone into Bible study looking for verses to support your opinion rather than seeking God\'s perspective?'
            },
            {
              pointTitle: 'Emptying Self to Be Filled',
              supportingScriptures: [],
              commentary: 'One reason we may not be filled with the Holy Spirit is that we\'re already full—of self, pride, and preconceived ideas. God\'s truth cannot enter a heart that refuses to yield.',
              reflectQuestion: 'What personal opinions or attitudes might be blocking you from receiving new insight from God\'s Word?'
            }
          ],
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
          lifeApplication: 'Begin each study with a surrender prayer: "Lord, teach me Your ways, even if it changes mine." Guard against the temptation to twist Scripture to match personal preference.',
          keyTakeaways: [
            'A teachable spirit comes to Scripture ready to learn, not to prove.',
            'Pride and self-confidence block the Spirit\'s instruction.',
            'Humility is the gateway to deeper understanding.'
          ],
          prayerPrompt: 'Lord, empty me of pride and self. Give me a humble, teachable spirit that welcomes Your correction and rejoices in Your truth.',
          deeperStudy: {
            caseStudy: 'Apollos receiving correction from Priscilla and Aquila (Acts 18:24–28).',
            wordStudy: 'Hebrew "limmad" (H3925 – "teach, instruct") in Psalms and Proverbs.',
            pdf: '7 Habits of a Teachable Bible Student.',
            additionalReadings: ['Humility and Scripture Study', 'Overcoming Pride in Bible Study'],
            discussionQuestions: [
              'What does it mean to have a teachable spirit?',
              'Why is humility essential in Bible study?',
              'How do you guard against pride in your learning?'
            ]
          }
        }
      },
      {
        id: 'htsb-4',
        title: 'Be Willing to Obey What You Learn',
        duration: 6,
        scripture: 'John 7:17',
        description: 'God reveals truth to those who are willing to follow it. Many never grow in Bible understanding because they treat Scripture as information rather than instruction',
        content: {
          openingThought: 'God reveals truth to those who are willing to follow it. Many never grow in Bible understanding because they treat Scripture as information rather than instruction.',
          scriptureText: 'If any man will do his will, he shall know of the doctrine, whether it be of God, or whether I speak of myself.',
          mainScriptures: ['Joh 7:17 – If any man will do his will, he shall know of the doctrine, whether it be of God, or whether I speak of myself.'],
          taggedScripture: [
            { type: 'text', text: 'If any man will ' },
            {
              type: 'word',
              text: 'do',
              data: {
                original: 'ποιέω',
                transliteration: 'poieo',
                gloss: 'to do, make, practice, perform',
                lemma: 'ποιέω',
                strongs: 'G4160',
                partOfSpeech: 'Verb',
                language: 'greek',
                deeperStudy: {
                  etymology: 'From root meaning "to make, create, accomplish" - active performance of God\'s will',
                  frequency: 'Appears 568 times in the New Testament',
                  crossReferences: ['Matt 7:24', 'Jas 1:22', 'Luke 6:46']
                }
              }
            },
            { type: 'text', text: ' his will, he shall ' },
            {
              type: 'word',
              text: 'know',
              data: {
                original: 'γινώσκω',
                transliteration: 'ginosko',
                gloss: 'to know, understand, perceive',
                lemma: 'γινώσκω',
                strongs: 'G1097',
                partOfSpeech: 'Verb',
                language: 'greek',
                deeperStudy: {
                  etymology: 'From root meaning "to know by experience" - experiential knowledge through obedience',
                  frequency: 'Appears 222 times in the New Testament',
                  crossReferences: ['John 8:32', '1 John 2:3', 'John 14:21']
                }
              }
            },
            { type: 'text', text: ' of the doctrine, whether it be of God, or whether I speak of myself.' }
          ],
          guidedStudy: [
            {
              pointTitle: 'Obedience Opens Understanding',
              supportingScriptures: [
                'Joh 7:17 – If any man will do his will, he shall know of the doctrine, whether it be of God, or whether I speak of myself.'
              ],
              commentary: 'Jesus tied knowing doctrine to the willingness to obey. We cannot expect God to unfold His mysteries to a heart that is unwilling to live by them.',
              reflectQuestion: 'Have you ever resisted studying a topic because you suspected it might require a change in your life?'
            },
            {
              pointTitle: 'Truth Without Action Is Dead',
              supportingScriptures: [
                'Jam 1:22 – But be ye doers of the word, and not hearers only, deceiving your own selves.'
              ],
              commentary: 'Knowledge without obedience breeds self-deception. The Pharisees knew the Scriptures yet rejected the Messiah. God\'s goal is transformation, not mere information.',
              reflectQuestion: 'How can you move from being a "hearer only" to a "doer" of God\'s Word?'
            }
          ],
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
          lifeApplication: 'When God shows you a truth, write down the specific step you\'ll take to obey it. Treat each study as a call to action.',
          keyTakeaways: [
            'Obedience is the key to deeper understanding.',
            'God reveals truth to those ready to follow it.',
            'Information without transformation is dangerous.'
          ],
          prayerPrompt: 'Lord, make me willing to obey all You reveal to me. Give me courage to act on truth, even when it is difficult.',
          deeperStudy: {
            caseStudy: 'Abraham obeying God\'s command to sacrifice Isaac (Genesis 22).',
            wordStudy: 'Greek "poieō" (G4160 – "to do, to act") and its link to obedience.',
            pdf: 'From Hearing to Doing: An Obedience Action Plan.',
            additionalReadings: ['The Practice of Biblical Living', 'Why Obedience Matters in Bible Study'],
            discussionQuestions: [
              'Why is obedience essential to understanding Scripture?',
              'How does acting on truth protect against deception?',
              'What is one area where obedience has deepened your understanding?'
            ]
          }
        }
      },
      {
        id: 'htsb-5',
        title: 'Approach the Bible with Prayer',
        duration: 6,
        scripture: 'Psalm 119:18',
        description: 'Prayer is not an optional extra in Bible study—it\'s the lifeline. Without the Holy Spirit\'s illumination, the Bible remains a closed book',
        content: {
          openingThought: 'Prayer is not an optional extra in Bible study—it\'s the lifeline. Without the Holy Spirit\'s illumination, the Bible remains a closed book.',
          scriptureText: 'Open thou mine eyes, that I may behold wondrous things out of thy law.',
          mainScriptures: ['Psa 119:18 – Open thou mine eyes, that I may behold wondrous things out of thy law.'],
          taggedScripture: [
            { type: 'text', text: 'Open thou mine ' },
            {
              type: 'word',
              text: 'eyes',
              data: {
                original: 'עֵינַיִם',
                transliteration: 'ayin',
                gloss: 'eyes, sight, figurative: mental or spiritual perception',
                lemma: 'עַיִן',
                strongs: 'H5869',
                partOfSpeech: 'Noun',
                language: 'hebrew',
                deeperStudy: {
                  etymology: 'From root meaning "to look" - represents physical and spiritual sight',
                  frequency: 'Appears 866 times in the Hebrew Bible',
                  crossReferences: ['Eph 1:18', '2 Kings 6:17', 'Matt 13:16']
                }
              }
            },
            { type: 'text', text: ', that I may behold wondrous things out of thy ' },
            {
              type: 'word',
              text: 'law',
              data: {
                original: 'תּוֹרָה',
                transliteration: 'torah',
                gloss: 'instruction, law, teaching',
                lemma: 'תּוֹרָה',
                strongs: 'H8451',
                partOfSpeech: 'Noun',
                language: 'hebrew',
                deeperStudy: {
                  etymology: 'From יָרָה (yarah) meaning "to shoot, direct, teach" - God\'s direction for life',
                  frequency: 'Appears 220 times in the Hebrew Bible',
                  crossReferences: ['Ps 1:2', 'Josh 1:8', '2 Tim 3:16']
                }
              }
            },
            { type: 'text', text: '.' }
          ],
          guidedStudy: [
            {
              pointTitle: 'Prayer Prepares the Heart',
              supportingScriptures: [
                'Psa 119:18 – Open thou mine eyes, that I may behold wondrous things out of thy law.',
                'Eph 1:17 – That the God of our Lord Jesus Christ, the Father of glory, may give unto you the spirit of wisdom and revelation in the knowledge of him.'
              ],
              commentary: 'David prayed for understanding before studying God\'s law. Prayer aligns our heart with God\'s will, making us receptive to His truth.',
              reflectQuestion: 'How often do you pause to pray before reading the Bible?'
            },
            {
              pointTitle: 'The Spirit Brings Clarity',
              supportingScriptures: [
                'Joh 16:13 – Howbeit when he, the Spirit of truth, is come, he will guide you into all truth.'
              ],
              commentary: 'The Holy Spirit opens spiritual eyes, revealing depths of meaning we\'d never see otherwise. Without Him, study remains intellectual but powerless.',
              reflectQuestion: 'Can you recall a time the Spirit made a passage come alive for you?'
            }
          ],
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
          lifeApplication: 'Begin each study session with prayer for understanding, humility, and application. Keep an ongoing dialogue with God as you read.',
          keyTakeaways: [
            'Prayer opens the heart to receive God\'s Word.',
            'The Holy Spirit is the true Teacher of Scripture.',
            'Study without prayer risks becoming lifeless knowledge.'
          ],
          prayerPrompt: 'Holy Spirit, open my eyes to see the wonders in Your Word. Lead me into all truth and give me the courage to walk in it.',
          deeperStudy: {
            caseStudy: 'Daniel seeking God in prayer for understanding of prophecy (Daniel 9).',
            wordStudy: 'Hebrew "pāthal" (H6605 – "to open, to make clear") in Psalm 119.',
            pdf: 'Prayers That Transform Bible Study.',
            additionalReadings: ['The Practice of Spiritual Reading', 'Opening Scripture with Prayer'],
            discussionQuestions: [
              'Why is prayer essential for Bible study?',
              'What role does the Holy Spirit play in understanding?',
              'How can you develop a habit of prayerful study?'
            ]
          }
        }
      },
      {
        id: 'htsb-6',
        title: 'Interpret Scripture with Scripture',
        duration: 6,
        scripture: 'Isaiah 28:10',
        description: 'The Bible is its own best interpreter. One verse, taken alone, can be misunderstood—but when compared with the whole, the meaning becomes clear',
        content: {
          openingThought: 'The Bible is its own best interpreter. One verse, taken alone, can be misunderstood—but when compared with the whole, the meaning becomes clear.',
          scriptureText: 'For precept must be upon precept, precept upon precept; line upon line, line upon line; here a little, and there a little.',
          mainScriptures: ['Isa 28:10 – For precept must be upon precept, precept upon precept; line upon line, line upon line; here a little, and there a little.'],
          taggedScripture: [
            { type: 'text', text: 'For ' },
            {
              type: 'word',
              text: 'precept',
              data: {
                original: 'צַו',
                transliteration: 'tsav',
                gloss: 'command, instruction, precept',
                lemma: 'צַו',
                strongs: 'H6673',
                partOfSpeech: 'Noun',
                language: 'hebrew',
                deeperStudy: {
                  etymology: 'From צָוָה (tsavah) meaning "to command" - divine instruction or order',
                  frequency: 'Appears 9 times in the Hebrew Bible',
                  crossReferences: ['Isa 28:10', 'Isa 28:13', 'Hos 5:11']
                }
              }
            },
            { type: 'text', text: ' must be upon precept, precept upon precept; ' },
            {
              type: 'word',
              text: 'line',
              data: {
                original: 'ק��ו',
                transliteration: 'qav',
                gloss: 'line, measuring line, rule',
                lemma: 'קַו',
                strongs: 'H6957',
                partOfSpeech: 'Noun',
                language: 'hebrew',
                deeperStudy: {
                  etymology: 'From קָוָה (qavah) meaning "to wait" - a measuring line for building properly',
                  frequency: 'Appears 25 times in the Hebrew Bible',
                  crossReferences: ['Isa 34:17', '2 Kgs 21:13', 'Lam 2:8']
                }
              }
            },
            { type: 'text', text: ' upon line, line upon line; here a little, and there a little.' }
          ],
          guidedStudy: [
            {
              pointTitle: 'Avoiding Isolated Interpretation',
              supportingScriptures: [
                'Isa 28:10 – For precept must be upon precept...',
                '2Pe 1:20 – Knowing this first, that no prophecy of the scripture is of any private interpretation.'
              ],
              commentary: 'Pulling a verse out of context can lead to false doctrine. Every teaching must be tested by the weight of Scripture as a whole.',
              reflectQuestion: 'Have you ever seen a verse misused because it was read in isolation?'
            },
            {
              pointTitle: 'Let the Bible Explain Itself',
              supportingScriptures: [
                'Luk 24:27 – And beginning at Moses and all the prophets, he expounded unto them in all the scriptures the things concerning himself.'
              ],
              commentary: 'Jesus showed His disciples how the Old Testament pointed to Him by comparing passages. The harmony of Scripture confirms its truth.',
              reflectQuestion: 'How might comparing multiple verses on a topic deepen your understanding?'
            }
          ],
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
          lifeApplication: 'When studying a topic, gather all related verses before forming a conclusion. Use cross-references and Bible tools to connect the dots.',
          keyTakeaways: [
            'The Bible interprets itself through harmony of verses.',
            'Context is essential to avoid false teaching.',
            'Cross-referencing reveals the fullness of truth.'
          ],
          prayerPrompt: 'Lord, teach me to compare Scripture with Scripture. Guard me from forming beliefs based on isolated texts and guide me into balanced truth.',
          deeperStudy: {
            caseStudy: 'How the prophecy of the Messiah is confirmed by multiple Scriptures (Isaiah 53, Psalm 22, Luke 24).',
            wordStudy: 'Hebrew "tsav" (H6673 – "command, instruction") in Isaiah 28:10.',
            pdf: 'Line Upon Line: A Cross-Referencing Study Guide.',
            additionalReadings: ['The Limits of Human Understanding', 'Finding Peace with Biblical Mysteries'],
            discussionQuestions: [
              'Why is it dangerous to base beliefs on a single verse?',
              'How does comparing verses strengthen doctrine?',
              'What tools can help you connect related Scriptures?'
            ]
          }
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
      },
      {
        id: 'p23-2',
        title: 'Green Pastures and Still Waters',
        duration: 5,
        scripture: 'Psalm 23:2',
        description: 'Finding rest and refreshment in Gods provision',
        content: {
          scriptureText: 'He makes me lie down in green pastures, he leads me beside quiet waters.',
          commentary: [
            'God provides what we need for spiritual nourishment',
            'Rest is part of Gods plan for our well-being',
            'Gods guidance leads us to places of peace'
          ],
          interactiveElement: {
            type: 'reflection',
            content: {
              question: 'Where do you find your spiritual rest and refreshment?',
              prompts: [
                'In prayer and meditation',
                'In reading Scripture',
                'In worship and fellowship',
                'In nature and quiet moments'
              ]
            }
          },
          lifeApplication: {
            challenge: 'Set aside time for rest and spiritual refreshment this week.',
            journaling: 'Describe what spiritual green pastures look like in your life.'
          },
          prayerPrompt: 'Ask God to lead you to places of rest and peace when you feel overwhelmed.'
        }
      },
      {
        id: 'p23-3',
        title: 'Through the Valley',
        duration: 5,
        scripture: 'Psalm 23:4',
        description: 'Gods presence in our darkest moments',
        content: {
          scriptureText: 'Even though I walk through the darkest valley, I will fear no evil, for you are with me...',
          commentary: [
            'God doesnt prevent all difficulties but walks with us through them',
            'His presence brings comfort and courage in fearful times',
            'The valley is a place of passage, not a permanent destination'
          ],
          interactiveElement: {
            type: 'reflection',
            content: {
              question: 'How has God shown His presence during a difficult time in your life?',
              prompts: [
                'Through answered prayer',
                'Through supportive friends',
                'Through unexpected provision',
                'Through inner peace and strength'
              ]
            }
          },
          lifeApplication: {
            challenge: 'Reach out to someone who might be walking through a difficult valley.',
            journaling: 'Write about a time when you felt Gods presence in a dark season.'
          },
          prayerPrompt: 'Thank God for His faithfulness in difficult times and ask for His presence in current struggles.'
        }
      },
      {
        id: 'p23-4',
        title: 'Goodness and Mercy Forever',
        duration: 5,
        scripture: 'Psalm 23:6',
        description: 'Gods eternal faithfulness and our eternal hope',
        content: {
          scriptureText: 'Surely your goodness and love will follow me all the days of my life, and I will dwell in the house of the Lord forever.',
          commentary: [
            'Gods goodness and mercy are constant companions throughout our lives',
            'We have the assurance of eternal fellowship with God',
            'This verse expresses confident faith in Gods character'
          ],
          interactiveElement: {
            type: 'reflection',
            content: {
              question: 'How does the promise of eternal life with God give you hope today?',
              prompts: [
                'It provides comfort in loss and grief',
                'It gives purpose to daily struggles',
                'It motivates faithful living',
                'It brings peace about the future'
              ]
            }
          },
          lifeApplication: {
            challenge: 'Share the hope of eternal life with someone this week.',
            journaling: 'Reflect on what dwelling in the house of the Lord forever means to you.'
          },
          prayerPrompt: 'Praise God for His goodness and mercy, and thank Him for the hope of eternal life.'
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
