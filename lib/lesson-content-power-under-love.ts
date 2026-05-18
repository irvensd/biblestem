import type { LessonReaderContent } from '@/lib/lesson-content'
import type { LessonQuizPayload } from '@/lib/lesson-quiz-types'

const QUIZ_SHELL: Pick<LessonQuizPayload, 'eyebrow' | 'title' | 'description' | 'settings'> = {
  eyebrow: 'CHECK YOUR UNDERSTANDING',
  title: 'Quick Review',
  description: 'Check your understanding before moving on.',
  settings: {
    quizRequired: false,
    passingScore: 70,
    allowRetake: true,
  },
}

/** Guided reader lessons for "Power Under Love" (Foundations). */
export const powerUnderLoveSeriesLessonLibrary: Record<string, LessonReaderContent> = {
  'the-upside-down-kingdom': {
    openingThought: `The world usually defines greatness by control.

Who has the most authority?
Who has the biggest platform?
Who gets served?
Who gets obeyed?
Who gets the final word?

Jesus flips the whole thing over.

In His kingdom, greatness is not measured by how many people serve you.

Greatness is measured by how deeply you love, how humbly you serve, and how willingly you lay yourself down for the good of others.

This is the upside-down kingdom.

The world says power means standing over people.

Jesus says true power kneels to wash feet.`,
    scriptureRef: 'Luke 22:26',
    scriptureQuote: `But ye shall not be so: but he that is greatest among you, let him be as the younger.

And he that is chief, as he that doth serve.`,
    scriptureAfterPrimary: `Jesus reverses worldly greatness. In His kingdom, the greatest becomes like the younger, and the chief becomes like the one who serves.`,
    scriptureSecondaryRef: 'Luke 22:24-25',
    scriptureSecondaryQuote: `And there was also a strife among them, which of them should be accounted the greatest.

And he said unto them, The kings of the Gentiles exercise lordship over them.`,
    scriptureAfterSecondary: `The disciples argued about greatness while Jesus described how worldly rulers exercise power over others.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Matthew 11:29',
        quote: 'Take my yoke upon you, and learn of me; for I am meek and lowly in heart.',
      },
      {
        type: 'scripture',
        reference: 'John 13:4-5',
        quote: `He riseth from supper, and laid aside his garments; and took a towel, and girded himself.

After that he poureth water into a bason, and began to wash the disciples' feet.`,
      },
      {
        type: 'scripture',
        reference: 'John 13:14-15',
        quote: `If I then, your Lord and Master, have washed your feet; ye also ought to wash one another's feet.

For I have given you an example, that ye should do as I have done to you.`,
      },
    ],
    teachingPoints: [
      `1. The disciples misunderstood greatness

Luke says the disciples argued about which of them should be considered the greatest.

That argument sounds embarrassing, but it is painfully human.

We naturally want position, recognition, control, and importance.

Even people close to Jesus can still think like the kingdoms of this world.

Jesus had to confront their idea of greatness.`,
      `2. The world uses power over people

Jesus said the kings of the Gentiles exercise lordship over others.

That is the pattern of worldly power.

Domination.
Control.
Status.
Force.
Religious pride.
Human authority used to elevate self.

This is not the spirit of Christ's kingdom.

Whenever religion starts operating by control instead of love, it begins to misrepresent God.`,
      `3. Jesus defines greatness as service

Jesus said the greatest should become like the younger, and the one who governs should become like the one who serves.

This is not weakness.

This is the strength of divine love.

Jesus does not use power to exploit.

He uses power to bless.

In His kingdom, authority exists to serve, protect, heal, and restore.`,
      `4. Jesus revealed God by washing feet

In John 13, Jesus washed the disciples' feet.

This was not random humility theater.

It was a revelation of God's character.

Jesus said, "He that hath seen me hath seen the Father."

So when Jesus kneels with a towel, we are seeing what God is like.

God's power is not selfish domination.

God's power is self-giving love.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Meek',
      lemma: 'πραΰς',
      transliteration: 'praus',
      meaning: 'Gentle strength, humility, and power under control.',
      strongs: 'G4239',
      reference: 'Matthew 11:29',
      note: `Meekness is not weakness.

Jesus is meek and lowly in heart, yet He is the King of the universe.

Meekness means God's power is governed by love, humility, patience, and service.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `This lesson introduces the main contrast of the whole study.

There are two ways to use power.

Power over:
control, coercion, domination, self-exaltation, force

Power under love:
humility, service, sacrifice, truth, freedom

Jesus founded His kingdom on power under love.

That matters because Scripture warns that a counterfeit religious system would later rise claiming to represent God while operating by the opposite spirit.

Before we study apostasy, prophecy, and the little horn, we need to see the original.

Jesus is the original.

He is the standard.

Any system that claims God's name but operates through coercion, self-exaltation, persecution, or control is not reflecting the kingdom of Christ.

The test is simple:

Does it look like Jesus with the towel?`,
    },
    studyInsightBlocks: [
      {
        type: 'kingdomContrastPattern',
        title: 'The Upside-Down Kingdom',
        caption: 'Jesus reveals power under love, not power over people.',
      },
      {
        type: 'scriptureChain',
        title: 'The Upside-Down Kingdom',
        references: [
          { reference: 'Luke 22:24-30' },
          { reference: 'Matthew 11:29' },
          { reference: 'John 13:1-17' },
          { reference: 'John 14:9' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: Jesus defines greatness as humble service. His kingdom operates by self-giving love, not domination or control.',
      },
    ],
    reflectPrompt: `Where do you most often see the desire for control show up in your own life?

Think about relationships, leadership, church, work, conflict, opinions, social media, ministry, family, or the way you respond when you feel overlooked.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, practice the upside-down kingdom.

Choose one quiet act of service that does not put you in the spotlight.

Help without announcing it.
Apologize first.
Listen instead of controlling the conversation.
Serve someone who cannot repay you.
Let someone else receive credit.
Choose humility when pride wants the microphone.

Do not make this dramatic.

Just pick up the towel.

That is where the kingdom starts looking real.

Prayer:

Jesus, thank You for showing me what God is really like. You are meek and lowly in heart, yet You are Lord of all. Teach me to reject the spirit of control, pride, and self-exaltation. Form in me the humility of Your kingdom. Help me use whatever influence I have to serve, heal, bless, and reveal Your love. Amen.`,
    prayer: '',
    completionSummary: `Jesus reveals the upside-down kingdom, where greatness is humility, power is love, and authority exists to serve.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'pul-l1-q1',
          prompt: 'According to Luke 22:24, what were the disciples arguing about?',
          options: [
            'Which of them should be considered the greatest',
            'Which city they should visit next',
            'Which food they should eat',
            'Which Roman law they preferred',
          ],
          correctIndex: 0,
          explanation:
            'Luke says the disciples argued about which of them should be accounted the greatest.',
        },
        {
          id: 'pul-l1-q2',
          prompt: 'According to Luke 22:25, how did Jesus describe the kings of the Gentiles?',
          options: [
            'They exercise lordship over others',
            'They always serve humbly',
            'They refuse authority',
            'They never seek power',
          ],
          correctIndex: 0,
          explanation:
            'Jesus said worldly rulers exercise lordship over others, describing a power-over model of authority.',
        },
        {
          id: 'pul-l1-q3',
          prompt: 'According to Luke 22:26, how should greatness work among Jesus\' followers?',
          options: [
            'The greatest should become like one who serves',
            'The greatest should dominate everyone',
            'The greatest should avoid humility',
            'The greatest should demand attention',
          ],
          correctIndex: 0,
          explanation:
            'Jesus said the greatest among His followers should be like the younger, and the one who governs should be like the one who serves.',
        },
        {
          id: 'pul-l1-q4',
          prompt: 'According to Matthew 11:29, how did Jesus describe Himself?',
          options: [
            'Meek and lowly in heart',
            'Proud and controlling',
            'Harsh and impatient',
            'Distant and cold',
          ],
          correctIndex: 0,
          explanation:
            'Jesus described Himself as meek and lowly in heart, revealing the humble nature of His kingdom.',
        },
        {
          id: 'pul-l1-q5',
          kind: 'reflection',
          prompt: 'What is one practical way you can choose service over control this week?',
          explanation:
            'Jesus\' kingdom operates by humble, self-giving love. True greatness is revealed through service.',
        },
      ],
    },
  },
  'power-over-or-power-under': {
    openingThought: `There are two kinds of power.

One kind stands over people.

It controls.
It pressures.
It threatens.
It uses fear.
It protects itself.

The other kind gets underneath people.

It serves.
It lifts.
It heals.
It sacrifices.
It gives freedom.

Jesus did not merely teach the second kind of power.

He lived it.

He washed feet.
He served enemies.
He healed the wounded.
He refused retaliation.
He laid down His life.

The kingdom of Jesus is not power over people.

It is power under love.`,
    scriptureRef: 'Luke 12:37',
    scriptureQuote: `Blessed are those servants, whom the lord when he cometh shall find watching.

Verily I say unto you, that he shall gird himself, and make them to sit down to meat, and will come forth and serve them.`,
    scriptureAfterPrimary: `Jesus pictures the Master serving the servants. That is not how human power usually works, but it is how His kingdom operates.`,
    scriptureSecondaryRef: 'John 13:3-5',
    scriptureSecondaryQuote: `Jesus knowing that the Father had given all things into his hands, and that he was come from God, and went to God.

He riseth from supper, and laid aside his garments; and took a towel, and girded himself.

After that he poureth water into a bason, and began to wash the disciples' feet.`,
    scriptureAfterSecondary: `Jesus knew all authority was His, yet He used that authority in humble service.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Luke 6:27-28',
        quote: `Love your enemies, do good to them which hate you.

Bless them that curse you, and pray for them which despitefully use you.`,
      },
      {
        type: 'scripture',
        reference: '1 Peter 2:23-24',
        quote: `Who, when he was reviled, reviled not again.

When he suffered, he threatened not; but committed himself to him that judgeth righteously.

Who his own self bare our sins in his own body on the tree.`,
      },
    ],
    teachingPoints: [
      `1. Jesus uses authority to serve

Luke 12 gives a shocking picture of the Master serving the servants.

That is not how human power usually works.

In our world, the more authority someone gains, the more they often expect others to serve them.

But Jesus reveals a different kind of kingdom.

Even as Lord, He serves.

His authority is not selfish.

It is love in action.`,
      `2. Jesus washed feet with full awareness of His power

John says Jesus knew the Father had given all things into His hands.

Then He picked up a towel.

Do not miss that.

Jesus was not humble because He lacked authority.

He was humble because His authority was governed by love.

The One who held all things in His hands used those hands to wash dirty feet.

That is power under love.`,
      `3. Jesus rejects the cycle of retaliation

Luke 6 calls His followers to love enemies, do good, bless, and pray.

This is not natural.

The natural response is to return insult for insult and harm for harm.

But Jesus teaches a kingdom where evil is not overcome by becoming evil back.

It is overcome by self-giving love.`,
      `4. Jesus suffered without threatening

Peter says that when Jesus was reviled, He did not revile in return.

When He suffered, He did not threaten.

At the cross, Jesus had the power to retaliate, but He chose love.

He bore sin without becoming sinful.

He absorbed violence without becoming violent.

This is the highest revelation of God's character.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Power',
      lemma: 'δύναμις',
      transliteration: 'dynamis',
      meaning: 'Ability, strength, authority, or capacity to act.',
      strongs: 'G1411',
      reference: 'Luke 12:37',
      note: `Power itself is not evil.

The question is how power is used.

Worldly power uses strength to control others.

Christlike power uses strength to serve, protect, heal, and sacrifice for others.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The contrast between power over and power under is one of the clearest ways to understand the difference between Christ's kingdom and counterfeit religion.

Power over says:

"I am above you, so you must serve me."

Power under love says:

"I have strength, so I will use it to serve you."

Power over uses fear.

Power under love creates freedom.

Power over protects the self.

Power under love gives the self.

Power over demands submission.

Power under love invites trust.

Jesus is not weak.

He is the King.

But His kingship is revealed through humble service, enemy love, and non-retaliating sacrifice.

This becomes the test for any religious system claiming to represent God.

Does it look like Jesus washing feet and bearing the cross?

Or does it look like human power wearing religious clothes?

That question matters. A lot.`,
    },
    studyInsightBlocks: [
      {
        type: 'kingdomContrastPattern',
        title: 'Power Over or Power Under',
        caption: 'Jesus uses power to serve, not to control.',
      },
      {
        type: 'scriptureChain',
        title: 'Power Under Love',
        references: [
          { reference: 'Luke 12:37' },
          { reference: 'John 13:1-17' },
          { reference: 'Luke 6:27-38' },
          { reference: '1 Peter 2:21-24' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: Jesus reveals divine power as humble service, enemy love, and self-sacrificing non-retaliation.',
      },
    ],
    reflectPrompt: `When you have influence over others, do you tend to use it to control, protect yourself, serve, or lift others?

Think about leadership, family, ministry, work, friendship, conflict, social media, and the way you respond when someone challenges you.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, practice power under love.

Choose one situation where you have influence.

Then ask:

"How would Jesus use power here?"

Maybe that means listening instead of interrupting.

Maybe it means serving instead of demanding.

Maybe it means refusing to retaliate.

Maybe it means protecting someone vulnerable.

Maybe it means apologizing instead of defending your image.

Maybe it means telling the truth without using it like a hammer.

Whatever it is, let your strength become service.

Prayer:

Jesus, You are Lord of all, yet You chose the towel and the cross. Teach me the difference between power over people and power under love. Free me from control, pride, retaliation, and self-protection. Help me use whatever influence I have to serve, heal, protect, and reveal Your character. Amen.`,
    prayer: '',
    completionSummary: `Jesus reveals power under love. He uses authority to serve, heal, forgive, and lay down His life rather than control or retaliate.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'pul-l2-q1',
          prompt: 'According to Luke 12:37, what does the master do for the servants?',
          options: [
            'He serves them',
            'He ignores them',
            'He humiliates them',
            'He refuses to come near them',
          ],
          correctIndex: 0,
          explanation:
            'Jesus describes the master as serving the servants, revealing the upside-down nature of His kingdom.',
        },
        {
          id: 'pul-l2-q2',
          prompt: 'According to John 13, what did Jesus do after knowing all things were given into His hands?',
          options: [
            'He washed His disciples\' feet',
            'He demanded praise',
            'He used power selfishly',
            'He abandoned His disciples',
          ],
          correctIndex: 0,
          explanation:
            'John shows Jesus using full authority in humble service by washing His disciples\' feet.',
        },
        {
          id: 'pul-l2-q3',
          prompt: 'According to Luke 6:27-28, how does Jesus tell us to treat enemies?',
          options: [
            'Love them, do good, bless, and pray',
            'Hate them back',
            'Destroy them immediately',
            'Ignore all mercy',
          ],
          correctIndex: 0,
          explanation: 'Jesus teaches enemy love as part of His kingdom\'s way of overcoming evil.',
        },
        {
          id: 'pul-l2-q4',
          prompt: 'According to 1 Peter 2:23, how did Jesus respond when He was reviled and suffered?',
          options: [
            'He did not revile or threaten in return',
            'He returned evil for evil',
            'He used violence to defend pride',
            'He lost trust in the Father',
          ],
          correctIndex: 0,
          explanation:
            'Peter says Jesus did not retaliate when reviled or threatened when He suffered.',
        },
        {
          id: 'pul-l2-q5',
          kind: 'reflection',
          prompt:
            'What is one relationship where God is calling you to use influence through service instead of control?',
          explanation:
            'Christlike power does not dominate. It serves, lifts, protects, and sacrifices in love.',
        },
      ],
    },
  },
  'the-falling-away': {
    openingThought: `Jesus built His kingdom on humble, self-giving love.

But Scripture warns that a counterfeit form of religion would rise.

It would claim to represent God while operating by a different spirit.

Instead of humility, self-exaltation.

Instead of service, control.

Instead of love, coercion.

Instead of truth that reveals God's character, teachings that distort Him.

The Bible calls this a falling away.

Not a rejection of religion altogether.

Something more dangerous.

Religion that keeps God's name but loses God's character.`,
    scriptureRef: '2 Thessalonians 2:3',
    scriptureQuote:
      'Let no man deceive you by any means: for that day shall not come, except there come a falling away first.',
    scriptureAfterPrimary: `Paul warns that before the day he describes, there must first be a falling away.`,
    scriptureSecondaryRef: '2 Thessalonians 2:4',
    scriptureSecondaryQuote: `Who opposeth and exalteth himself above all that is called God, or that is worshipped.

So that he as God sitteth in the temple of God, shewing himself that he is God.`,
    scriptureAfterSecondary: `The apostasy is marked by self-exaltation and a religious power that claims the place belonging to God alone.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: '2 Thessalonians 2:7',
        quote: 'For the mystery of iniquity doth already work.',
      },
      {
        type: 'scripture',
        reference: 'Acts 20:29-30',
        quote: `After my departing shall grievous wolves enter in among you, not sparing the flock.

Also of your own selves shall men arise, speaking perverse things, to draw away disciples after them.`,
      },
      {
        type: 'scripture',
        reference: '1 Timothy 4:1',
        quote:
          'Now the Spirit speaketh expressly, that in the latter times some shall depart from the faith.',
      },
    ],
    teachingPoints: [
      `1. The falling away was foretold

Paul warned that a falling away would come.

This means the church would face more than outside persecution.

It would also face internal corruption.

The danger would not only be unbelief attacking from the outside.

It would be counterfeit religion rising from within.

That is a sobering warning.`,
      `2. Apostasy means abandoning truth

The phrase "falling away" points to apostasy.

Apostasy is not merely making a mistake.

It is a departure from truth.

But the most dangerous apostasy does not always look openly anti-God.

Sometimes it wears religious language while replacing God's character with human control.

That is deception with a church hat on. Dangerous outfit.`,
      `3. The apostasy exalts human authority

Paul describes a power that exalts itself and sits in the temple of God as if it were God.

The issue is self-exaltation.

Human authority takes the place that belongs only to God.

When a religious system claims power over conscience, forgiveness, worship, truth, or God's law, it is stepping into territory that belongs to God alone.`,
      `4. The mystery of lawlessness was already working

Paul said the mystery of iniquity, or lawlessness, was already at work.

This means the spirit of apostasy began early.

It develops when people keep religious form but abandon the law of love.

Lawlessness is not only rule-breaking.

At its core, it is living against the self-giving love that defines God's kingdom.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Apostasy',
      lemma: 'ἀποστασία',
      transliteration: 'apostasia',
      meaning: 'A falling away, departure, or abandonment of truth.',
      strongs: 'G646',
      reference: '2 Thessalonians 2:3',
      note: `Apostasy is especially dangerous when it keeps religious language while losing the character of Jesus.

The issue is not merely wrong information.

It is a system that misrepresents God by replacing humble love with self-exaltation, control, and lawlessness.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The Bible's warning about apostasy is not given so we can become arrogant.

Prophecy is not a toy for religious ego.

God exposes deception because He loves people.

That means we must be careful.

The target is not sincere individuals who may be caught in a system.

The target is the false system itself.

Paul warns of a religious power that exalts itself, opposes God's authority, and draws people away from the truth.

That is serious.

But the spirit in which we study it matters.

If we study prophecy with pride, we are already missing Jesus.

If we study it with fear, we will become harsh.

If we study it with love, we will see why God warns us.

God tells the truth to rescue, not to create hatred.`,
    },
    studyInsightBlocks: [
      {
        type: 'kingdomContrastPattern',
        title: 'The Falling Away',
        caption: 'Apostasy keeps religious form while losing the character of Jesus.',
      },
      {
        type: 'scriptureChain',
        title: 'The Falling Away',
        references: [
          { reference: '2 Thessalonians 2:3-7' },
          { reference: 'Acts 20:28-31' },
          { reference: '1 Timothy 4:1' },
          { reference: 'Matthew 7:15-20' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: Scripture foretold a falling away: a counterfeit religious system that would claim God\'s name while misrepresenting His character.',
      },
    ],
    reflectPrompt: `Why is it possible for religion to look spiritual while still operating by the wrong spirit?

Think about pride, control, fear, self-exaltation, tradition, manipulation, and whether a system looks like Jesus in character.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, test your view of truth by the character of Jesus.

Ask:

"Does this teaching reveal God's love more clearly?"

"Does this practice honor freedom of conscience?"

"Does this authority point people to Jesus or place itself between people and Jesus?"

"Does this spirit look like the towel and the cross?"

Then ask the harder question:

"Where might I personally be tempted toward self-exaltation, control, or religious pride?"

Do not only identify apostasy out there.

Let Jesus correct the spirit in here.

Prayer:

Father, thank You for warning us because You love us. Help me recognize any form of religion that misrepresents Your character. Keep me from pride, fear, and harshness as I study truth. Give me discernment to see the difference between Christ's kingdom and counterfeit religion. Let the humility and love of Jesus guard my heart. Amen.`,
    prayer: '',
    completionSummary: `Scripture foretold a falling away: counterfeit religion that claims God's name while replacing Christlike love with self-exaltation, control, and lawlessness.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'pul-l3-q1',
          prompt: 'According to 2 Thessalonians 2:3, what must come before the day Paul describes?',
          options: [
            'A falling away',
            'A rejection of all prophecy',
            'A world without religion',
            'A complete end to deception',
          ],
          correctIndex: 0,
          explanation: 'Paul says that day will not come unless there is first a falling away.',
        },
        {
          id: 'pul-l3-q2',
          prompt: 'According to 2 Thessalonians 2:4, what does the apostate power do?',
          options: [
            'Exalts itself above all that is called God',
            'Humbly washes feet',
            'Refuses religious authority',
            'Points only to Jesus with no self-exaltation',
          ],
          correctIndex: 0,
          explanation:
            'Paul describes a power that opposes and exalts itself above all that is called God.',
        },
        {
          id: 'pul-l3-q3',
          prompt: 'According to Acts 20:29-30, where would some danger arise from?',
          options: [
            'From among the believers themselves',
            'Only from people who never knew religion',
            'Only from political rulers',
            'Only from distant nations',
          ],
          correctIndex: 0,
          explanation:
            'Paul warned that some would arise from among the believers, speaking distorted things and drawing disciples after themselves.',
        },
        {
          id: 'pul-l3-q4',
          prompt: 'According to 1 Timothy 4:1, what would some do in later times?',
          options: [
            'Depart from the faith',
            'Become unable to be deceived',
            'Stop needing discernment',
            'Avoid all false teaching automatically',
          ],
          correctIndex: 0,
          explanation: 'Paul says the Spirit expressly warns that some will depart from the faith.',
        },
        {
          id: 'pul-l3-q5',
          kind: 'reflection',
          prompt: 'What is one way you can study prophetic truth without pride or hostility?',
          explanation:
            'God exposes deception because He loves people. Truth must be held with humility, discernment, and the spirit of Jesus.',
        },
      ],
    },
  },
  'the-little-horn': {
    openingThought: `Bible prophecy does not exist to make people arrogant.

It exists to make people awake.

God does not reveal deception so His people can feel superior.

He reveals deception so His people can recognize what misrepresents His character and return to the truth as it is in Jesus.

Daniel 7 gives us a prophetic picture of world powers rising and falling.

But the main issue is not merely politics.

The main issue is worship, authority, truth, and the character of God.

Daniel sees a "little horn" power that rises from among the nations and opposes God's people, God's truth, and God's law.

This lesson introduces that prophecy carefully.

The goal is not fear.

The goal is discernment.`,
    scriptureRef: 'Daniel 7:8',
    scriptureQuote: `I considered the horns, and, behold, there came up among them another little horn.

Behold, in this horn were eyes like the eyes of man, and a mouth speaking great things.`,
    scriptureAfterPrimary: `Daniel focuses on a little horn that rises among the horns and speaks with human pride and great words.`,
    scriptureSecondaryRef: 'Daniel 7:25',
    scriptureSecondaryQuote: `And he shall speak great words against the most High.

And shall wear out the saints of the most High.

And think to change times and laws.`,
    scriptureAfterSecondary: `The little horn opposes God, persecutes His people, and attempts to change what belongs to God.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Daniel 7:17',
        quote: 'These great beasts, which are four, are four kings, which shall arise out of the earth.',
      },
      {
        type: 'scripture',
        reference: 'Daniel 7:23',
        quote: 'The fourth beast shall be the fourth kingdom upon earth.',
      },
      {
        type: 'scripture',
        reference: 'Revelation 17:15',
        quote:
          'The waters which thou sawest... are peoples, and multitudes, and nations, and tongues.',
      },
    ],
    teachingPoints: [
      `1. Prophecy uses symbols

Daniel 7 is filled with symbolic language.

Beasts, winds, seas, horns, and kingdoms all point to larger realities.

Daniel explains that the beasts represent kingdoms.

Revelation explains that waters can represent peoples, multitudes, nations, and tongues.

This means we should not guess wildly.

Scripture helps interpret Scripture.

That is the safest way to study prophecy.`,
      `2. The four beasts represent four kingdoms

Daniel sees four beasts rising from the sea.

The prophecy itself says these beasts represent kingdoms.

This means Daniel is being shown a sequence of world powers.

The vision is not random.

It is a prophetic overview of history, showing how earthly kingdoms rise, rule, and eventually fall.

But Daniel's focus narrows to a particular power that comes later: the little horn.`,
      `3. The little horn rises among divided powers

Daniel says the little horn rises among the horns of the fourth beast.

In Bible prophecy, horns often represent kings or powers.

This little horn does not appear as a completely separate pagan empire disconnected from the previous kingdom.

It rises in the aftermath of the fourth kingdom's division.

This detail matters because prophecy gives identifying marks, not vague speculation.`,
      `4. The little horn opposes God's authority

Daniel says the little horn speaks great words against the Most High, wears out the saints, and thinks to change times and laws.

That is serious.

The issue is not merely political influence.

The little horn represents a power that claims religious authority while opposing God's authority.

It speaks against God.

It persecutes God's people.

It attempts to tamper with God's law.

This is counterfeit religion operating through power over people rather than power under love.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Horn',
      lemma: 'קֶרֶן',
      transliteration: 'qeren',
      meaning: 'In Bible prophecy, a horn often represents a king, kingdom, or ruling power.',
      strongs: 'H7161',
      reference: 'Daniel 7:8',
      note: `The little horn is not mainly about appearance or size.

It represents a power that rises in history and can be identified by its actions: self-exaltation, opposition to God's truth, persecution, and attempted change of God's law.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `Daniel 7 gives us a prophetic framework.

The four beasts represent kingdoms.

The fourth beast represents a powerful kingdom that later becomes divided.

Among that division, another power rises.

This little horn is different.

It speaks religiously.

It claims authority.

It persecutes.

It attempts to change what belongs to God.

The major issue is character.

Jesus revealed God through humility, service, freedom, and self-giving love.

The little horn operates by a different spirit: self-exaltation, coercion, control, and opposition to God's law.

That is why prophecy matters.

It helps us recognize when religion no longer looks like Jesus.`,
    },
    studyInsightBlocks: [
      {
        type: 'kingdomContrastPattern',
        title: 'The Little Horn',
        caption: 'Prophecy helps us recognize religious power that misrepresents God\'s character.',
      },
      {
        type: 'scriptureChain',
        title: 'The Little Horn',
        references: [
          { reference: 'Daniel 7:2-8' },
          { reference: 'Daniel 7:17' },
          { reference: 'Daniel 7:23-25' },
          { reference: 'Revelation 17:15' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: Daniel\'s little horn prophecy identifies a power that rises from history, claims religious authority, opposes God\'s truth, and misrepresents His character.',
      },
    ],
    reflectPrompt: `Why is it important to let Scripture interpret prophecy instead of building conclusions on guesses, fear, or tradition?

Think about symbols, context, humility, history, and the danger of using prophecy to attack people rather than expose deception.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, practice careful prophecy study.

Before drawing a conclusion, ask:

"What does the Bible say this symbol means?"

"What is the context?"

"What character of God is being revealed or defended?"

"Does my attitude while studying this look like Jesus?"

That last question is not optional.

Prophecy studied without humility turns into a theological weapon.

Prophecy studied with Christlike love becomes a lamp.

Prayer:

Father, thank You for giving prophecy to guide, warn, and protect Your people. Help me study with humility and care. Teach me to let Scripture interpret Scripture. Keep me from fear, arrogance, and careless conclusions. Above all, help me see Jesus clearly and recognize anything that misrepresents Your love, truth, and character. Amen.`,
    prayer: '',
    completionSummary: `Daniel's little horn prophecy reveals a power that claims religious authority while opposing God's truth, His people, and His law.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'pul-l4-q1',
          prompt: 'According to Daniel 7:17, what do the four beasts represent?',
          options: [
            'Four kings or kingdoms',
            'Four literal animals only',
            'Four private dreams with no meaning',
            'Four random symbols with no explanation',
          ],
          correctIndex: 0,
          explanation: 'Daniel 7:17 explains that the four beasts represent four kings or kingdoms.',
        },
        {
          id: 'pul-l4-q2',
          prompt: 'According to Daniel 7:23, what does the fourth beast represent?',
          options: [
            'The fourth kingdom upon earth',
            'A single animal with no symbolic meaning',
            'A peaceful village',
            'A private family conflict',
          ],
          correctIndex: 0,
          explanation: 'Daniel 7:23 says the fourth beast represents the fourth kingdom upon earth.',
        },
        {
          id: 'pul-l4-q3',
          prompt: 'According to Revelation 17:15, what can waters represent in prophecy?',
          options: [
            'Peoples, multitudes, nations, and tongues',
            'Nothing symbolic',
            'Only literal oceans',
            'One person only',
          ],
          correctIndex: 0,
          explanation:
            'Revelation explains that waters can represent peoples, multitudes, nations, and tongues.',
        },
        {
          id: 'pul-l4-q4',
          prompt: 'According to Daniel 7:25, what does the little horn attempt to do?',
          options: [
            'Speak against the Most High, wear out the saints, and change times and laws',
            'Wash feet like Jesus',
            'Reject self-exaltation completely',
            'Protect God\'s law from change',
          ],
          correctIndex: 0,
          explanation:
            'Daniel says the little horn speaks against the Most High, wears out the saints, and thinks to change times and laws.',
        },
        {
          id: 'pul-l4-q5',
          kind: 'reflection',
          prompt: 'What is one attitude you need to guard against when studying prophecy?',
          explanation:
            'Prophecy should be studied with humility, Scripture, prayer, and love. It is meant to expose deception, not produce pride.',
        },
      ],
    },
  },
  'when-religion-misrepresents-god': {
    openingThought: `Not everything that uses God's name reveals God's character.

That is hard, but Scripture is honest about it.

Religion can become a mask for control.

It can speak about God while acting nothing like Him.

It can use sacred language while replacing humility with pride, service with domination, and truth with human tradition.

This is why Jesus constantly brought people back to the heart of God.

The danger of counterfeit religion is not that it looks completely godless.

The danger is that it looks religious while misrepresenting God.`,
    scriptureRef: 'Daniel 7:25',
    scriptureQuote: `And he shall speak great words against the most High.

And shall wear out the saints of the most High.

And think to change times and laws.`,
    scriptureAfterPrimary: `Daniel identifies a power that opposes God, persecutes His people, and attempts to change what belongs to God.`,
    scriptureSecondaryRef: '2 Thessalonians 2:4',
    scriptureSecondaryQuote: `Who opposeth and exalteth himself above all that is called God, or that is worshipped.

So that he as God sitteth in the temple of God, shewing himself that he is God.`,
    scriptureAfterSecondary: `Paul describes religious self-exaltation that claims the place belonging to God alone.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Matthew 15:3',
        quote: 'Why do ye also transgress the commandment of God by your tradition?',
      },
      {
        type: 'scripture',
        reference: 'Matthew 15:8-9',
        quote: `This people draweth nigh unto me with their mouth, and honoureth me with their lips.

But in vain they do worship me, teaching for doctrines the commandments of men.`,
      },
      {
        type: 'scripture',
        reference: 'Mark 7:7-8',
        quote: `Howbeit in vain do they worship me, teaching for doctrines the commandments of men.

For laying aside the commandment of God, ye hold the tradition of men.`,
      },
    ],
    teachingPoints: [
      `1. Counterfeit religion speaks against God

Daniel says the little horn speaks great words against the Most High.

This does not always mean openly denying God's existence.

Sometimes speaking against God means claiming to represent Him while teaching things that distort His character.

When religion presents God as coercive, cruel, arbitrary, or dependent on human authority, it speaks falsely about Him.`,
      `2. Counterfeit religion persecutes God's people

Daniel says this power wears out the saints of the Most High.

That means it uses pressure, force, and oppression against those who remain faithful to God.

This is the opposite of Jesus.

Jesus invites.

He draws.

He serves.

He does not force love, because forced love is not love.

A system that uses coercion in God's name is already misrepresenting the God it claims to defend.`,
      `3. Counterfeit religion tampers with God's law

Daniel says this power would think to change times and laws.

That is a major prophetic marker.

God's law reveals His character of love.

To tamper with His law is to tamper with the picture of His character.

Jesus never treated God's commandments as disposable.

He exposed human tradition when it replaced God's command.`,
      `4. Human tradition can replace God's truth

Jesus confronted religious leaders for making God's commandment void through tradition.

This is not a small issue.

Tradition becomes dangerous when it carries more authority than Scripture.

If human teachings replace God's Word, people may think they are worshiping God while actually following human authority.

That is why Scripture must remain above tradition.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Tradition',
      lemma: 'παράδοσις',
      transliteration: 'paradosis',
      meaning: 'A teaching, custom, or practice passed down over time.',
      strongs: 'G3862',
      reference: 'Matthew 15:3',
      note: `Tradition is not always wrong.

But tradition becomes dangerous when it replaces, contradicts, or carries more authority than the commandment of God.

Jesus calls His people back to Scripture, truth, and the character of the Father.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `This lesson is delicate because prophecy deals with systems, not hatred toward individuals.

That distinction matters.

Many sincere people can be inside systems that teach error.

God loves them.

Jesus died for them.

The goal of prophecy is not to make us despise people.

The goal is to expose deception so people can be free.

Daniel's little horn is identified by its spirit and actions:

It exalts itself.

It speaks against God.

It wears out the saints.

It attempts to change God's law.

It replaces God's command with human authority.

That spirit does not look like Jesus washing feet.

It looks like power over people.

This is why the title of this study matters.

God's kingdom is power under love.

Counterfeit religion uses power over people.`,
    },
    studyInsightBlocks: [
      {
        type: 'kingdomContrastPattern',
        title: 'When Religion Misrepresents God',
        caption: 'The test of true religion is whether it reveals the character of Jesus.',
      },
      {
        type: 'scriptureChain',
        title: 'Misrepresenting God',
        references: [
          { reference: 'Daniel 7:25' },
          { reference: '2 Thessalonians 2:4' },
          { reference: 'Matthew 15:3-9' },
          { reference: 'Mark 7:7-8' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: Counterfeit religion uses God\'s name while replacing His character with self-exaltation, coercion, and human authority over Scripture.',
      },
    ],
    reflectPrompt: `Why is it dangerous when human tradition is treated as if it has the same authority as God's Word?

Think about worship, conscience, obedience, God's law, religious pressure, and the difference between following Jesus and following human systems.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, practice testing religious ideas by Scripture and the character of Jesus.

Ask:

"Does this teaching come from Scripture?"

"Does this practice reveal the love and humility of Jesus?"

"Does this system honor conscience, or does it pressure and control?"

"Does this tradition support God's Word, or replace it?"

Also ask the personal version:

"Where have I let tradition, habit, or people's approval carry more weight than God's Word?"

That question will sting if you answer it honestly. Good. Let truth do surgery, not demolition.

Prayer:

Father, thank You for giving truth because You love us. Help me recognize religion that misrepresents Your character. Keep me from pride, hatred, and careless judgment. Teach me to test all things by Scripture and by the life of Jesus. Give me courage to follow Your Word above human tradition and compassion for people caught in confusion. Amen.`,
    prayer: '',
    completionSummary: `Counterfeit religion uses God's name while misrepresenting His character through self-exaltation, coercion, and human authority over Scripture.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'pul-l5-q1',
          prompt: 'According to Daniel 7:25, what does the little horn speak against?',
          options: [
            'The Most High',
            'Human tradition only',
            'Its own authority',
            'The kingdoms of the earth only',
          ],
          correctIndex: 0,
          explanation:
            'Daniel says the little horn speaks great words against the Most High, showing opposition to God\'s authority.',
        },
        {
          id: 'pul-l5-q2',
          prompt: 'According to Daniel 7:25, what does the little horn do to the saints?',
          options: [
            'Wears them out',
            'Serves them humbly',
            'Protects them from persecution',
            'Refuses coercion',
          ],
          correctIndex: 0,
          explanation:
            'Daniel says this power wears out the saints of the Most High, pointing to persecution and oppression.',
        },
        {
          id: 'pul-l5-q3',
          prompt: 'According to Daniel 7:25, what does the little horn think to change?',
          options: [
            'Times and laws',
            'The weather only',
            'The Roman language',
            'Nothing connected to worship',
          ],
          correctIndex: 0,
          explanation: 'Daniel identifies an attempted change of times and laws as a marker of this power.',
        },
        {
          id: 'pul-l5-q4',
          prompt: 'According to Matthew 15:3, what did Jesus accuse the religious leaders of doing?',
          options: [
            'Transgressing the commandment of God by tradition',
            'Honoring Scripture above all tradition',
            'Rejecting human authority over God\'s Word',
            'Refusing to add human teachings',
          ],
          correctIndex: 0,
          explanation: 'Jesus said they transgressed the commandment of God by their tradition.',
        },
        {
          id: 'pul-l5-q5',
          kind: 'reflection',
          prompt: 'What is one belief or practice you should test more carefully by Scripture?',
          explanation:
            'God calls His people to follow His Word above human tradition and to hold truth with the spirit of Jesus.',
        },
      ],
    },
  },
  'truth-without-arrogance': {
    openingThought: `Truth is not safe in the hands of pride.

A person can identify deception correctly and still carry the wrong spirit.

That matters.

Prophecy is not given so believers can feel superior. It is given because God loves people enough to expose what harms them.

When God reveals false systems, He is not giving His people permission to hate the people inside them.

He is calling His people to discernment, humility, compassion, and faithfulness.

Truth should make us more like Jesus.

If truth makes us arrogant, we are mishandling it.`,
    scriptureRef: 'Ephesians 4:15',
    scriptureQuote:
      'But speaking the truth in love, may grow up into him in all things, which is the head, even Christ.',
    scriptureAfterPrimary: `Paul joins truth and love. Believers grow into Christ when both are held together.`,
    scriptureSecondaryRef: '1 Corinthians 8:1',
    scriptureSecondaryQuote: 'Knowledge puffeth up, but charity edifieth.',
    scriptureAfterSecondary: `Knowledge without love can puff up. Love builds up.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: '2 Timothy 2:24-25',
        quote: `And the servant of the Lord must not strive; but be gentle unto all men, apt to teach, patient.

In meekness instructing those that oppose themselves.`,
      },
      {
        type: 'scripture',
        reference: '2 Timothy 2:26',
        quote: 'And that they may recover themselves out of the snare of the devil.',
      },
      {
        type: 'scripture',
        reference: 'Jude 1:22-23',
        quote: `And of some have compassion, making a difference.

And others save with fear, pulling them out of the fire.`,
      },
    ],
    teachingPoints: [
      `1. Truth must be spoken in love

Paul says believers are to speak the truth in love.

Not truth without love.

Not love without truth.

Both are necessary.

Truth without love becomes harsh.

Love without truth becomes shallow.

The character of Jesus holds both together.`,
      `2. Knowledge can create pride

First Corinthians warns that knowledge can puff up.

That is a serious warning for anyone studying prophecy.

Knowing more does not automatically mean becoming more Christlike.

If knowledge makes us proud, dismissive, or cruel, something is wrong.

Truth should humble us because everything we know is a gift of grace.`,
      `3. God's servant must be gentle

Second Timothy says the servant of the Lord must not strive, but be gentle, patient, and able to teach.

This does not mean weakness.

It means truth should be carried with the spirit of Christ.

People are not won by arrogance.

They are helped by patient, clear, compassionate truth.`,
      `4. The goal is rescue, not humiliation

Paul says people may recover themselves out of the snare of the devil.

That shows the purpose of correction.

The goal is not to embarrass people.

The goal is rescue.

If someone is trapped in deception, the loving response is not mockery.

It is patient truth, prayer, and compassion.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Meekness',
      lemma: 'πραΰτης',
      transliteration: 'prautes',
      meaning: 'Humility, gentleness, and strength under the control of love.',
      strongs: 'G4240',
      reference: '2 Timothy 2:25',
      note: `Meekness does not mean avoiding truth.

It means carrying truth with the character of Jesus.

A meek person can be clear without being cruel, firm without being proud, and faithful without becoming harsh.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `Prophetic truth must be handled carefully.

When people learn about apostasy, counterfeit religion, and the little horn, the temptation is to start looking down on others.

That is a trap.

The moment truth becomes a weapon for ego, we have stepped away from the spirit of Jesus.

God exposes deception because He wants people free.

That means we must distinguish between systems and people.

Systems can teach error.

Systems can misrepresent God.

Systems can claim authority that belongs only to Him.

But people inside those systems may be sincere, wounded, confused, uninformed, or genuinely seeking God.

Jesus died for them.

So we tell the truth.

But we do not tell it with contempt.

We tell it with tears, humility, and love.`,
    },
    studyInsightBlocks: [
      {
        type: 'studyVisual',
        title: 'Truth posture',
        accent: 'sage',
        description: 'Prophetic truth must be carried with the spirit of Jesus.',
        payload: {
          variant: 'sequence',
          steps: [
            {
              label: 'Truth Without Love',
              subtitle: 'arrogance, attack, pride, harshness',
            },
            {
              label: 'Love Without Truth',
              subtitle: 'avoidance, compromise, confusion, silence',
            },
            {
              label: 'Truth With Love',
              subtitle: 'clarity, humility, patience, compassion',
            },
          ],
        },
        footnote: 'Prophetic truth must be carried with the spirit of Jesus.',
      },
      {
        type: 'scriptureChain',
        title: 'Truth Without Arrogance',
        references: [
          { reference: '1 Corinthians 8:1' },
          { reference: 'Ephesians 4:15' },
          { reference: '2 Timothy 2:24-26' },
          { reference: 'Jude 1:22-23' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: God\'s people must expose deception without hatred, pride, or condemnation toward the people caught in it.',
      },
    ],
    reflectPrompt: `When you learn difficult truth, does it make you more humble, more compassionate, or more proud?

Think about prophecy, doctrinal differences, conversations with people who disagree, online debates, and whether your tone reflects Jesus.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, practice truth without arrogance.

Before you correct someone, post something, or explain a difficult doctrine, ask:

"Am I trying to rescue or win?"

"Do I see this person as someone Jesus loves?"

"Is my tone helping or hardening?"

"Can I say this clearly without contempt?"

If you cannot carry the truth with love, pause before speaking.

That pause might save the conversation.

It might also save you from becoming the very kind of religious spirit this study is warning about.

Prayer:

Father, thank You for giving truth because You love people. Keep me from pride, harshness, and contempt. Teach me to speak clearly without arrogance and to love people without compromising truth. Give me the meekness of Jesus, the patience of the Spirit, and the courage to hold truth with compassion. Amen.`,
    prayer: '',
    completionSummary: `Truth must be carried without arrogance. God exposes deception to rescue people, and His people must speak clearly with humility, patience, and love.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'pul-l6-q1',
          prompt: 'According to Ephesians 4:15, how should believers speak the truth?',
          options: ['In love', 'In arrogance', 'With contempt', 'Without patience'],
          correctIndex: 0,
          explanation:
            'Paul says believers are to speak the truth in love so they may grow up into Christ.',
        },
        {
          id: 'pul-l6-q2',
          prompt: 'According to 1 Corinthians 8:1, what can knowledge do without love?',
          options: [
            'Puff up',
            'Always make people humble',
            'Remove the need for compassion',
            'Replace charity',
          ],
          correctIndex: 0,
          explanation: 'Paul warns that knowledge can puff up, but love builds up.',
        },
        {
          id: 'pul-l6-q3',
          prompt: 'According to 2 Timothy 2:24-25, how should the servant of the Lord teach?',
          options: [
            'With gentleness, patience, and meekness',
            'With pride and arguments',
            'With cruelty',
            'With no concern for people',
          ],
          correctIndex: 0,
          explanation:
            'Paul says the servant of the Lord must be gentle, patient, able to teach, and instruct in meekness.',
        },
        {
          id: 'pul-l6-q4',
          prompt: 'According to 2 Timothy 2:26, what is the goal of correction?',
          options: [
            'That people may recover from the snare of the devil',
            'That people may be humiliated',
            'That believers may feel superior',
            'That truth may become a weapon for pride',
          ],
          correctIndex: 0,
          explanation: 'The goal is rescue and recovery, not humiliation or spiritual superiority.',
        },
        {
          id: 'pul-l6-q5',
          kind: 'reflection',
          prompt: 'What is one way you can speak truth more like Jesus this week?',
          explanation:
            'Truth should be clear, but it must be carried with humility, patience, and love.',
        },
      ],
    },
  },
  'holding-truth-with-love': {
    openingThought: `God tells the truth because He loves people.

That is the spirit we must carry.

Prophecy is not about winning arguments.

It is not about exposing error so we can feel superior.

It is not about treating people like enemies because they do not yet see what Scripture says.

Truth belongs in the hands of love.

Jesus reveals a kingdom where truth is clear, but never cruel.

Firm, but not arrogant.

Faithful, but not hateful.

The same God who exposes deception also calls every person to Himself with mercy.

If we hold truth without love, we misrepresent the very God we claim to defend.`,
    scriptureRef: 'John 8:31-32',
    scriptureQuote: `If ye continue in my word, then are ye my disciples indeed.

And ye shall know the truth, and the truth shall make you free.`,
    scriptureAfterPrimary: `Jesus ties discipleship to His word and promises that truth brings freedom, not bondage to fear or pride.`,
    scriptureSecondaryRef: '1 John 4:7-8',
    scriptureSecondaryQuote: `Beloved, let us love one another: for love is of God.

He that loveth not knoweth not God; for God is love.`,
    scriptureAfterSecondary: `Love is not optional. Whoever does not love does not know God, because God is love.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Revelation 14:6',
        quote:
          'And I saw another angel fly in the midst of heaven, having the everlasting gospel to preach unto them that dwell on the earth.',
      },
      {
        type: 'scripture',
        reference: 'Revelation 14:7',
        quote: `Fear God, and give glory to him; for the hour of his judgment is come.

Worship him that made heaven, and earth, and the sea, and the fountains of waters.`,
      },
      {
        type: 'scripture',
        reference: 'Revelation 14:12',
        quote:
          'Here is the patience of the saints: here are they that keep the commandments of God, and the faith of Jesus.',
      },
    ],
    teachingPoints: [
      `1. Truth is meant to make people free

Jesus said the truth shall make you free.

That tells us the purpose of truth.

Truth is not given to enslave people to fear.

Truth is not given to inflate religious pride.

Truth is given to break deception, restore sight, and lead people into freedom with God.

If our use of truth does not move toward freedom, we need to check our spirit.`,
      `2. Love is the evidence that we know God

First John says whoever does not love does not know God, because God is love.

That is not soft language.

It is direct.

A person may know facts about prophecy and still fail to reflect the character of God.

Love is not optional decoration.

Love is the evidence that truth has reached the heart.`,
      `3. The final message is the everlasting gospel

Revelation 14 begins with the everlasting gospel.

That matters.

The final warning message is not detached from good news.

It calls people to worship the Creator, reject false worship, and remain faithful to God.

But it is still gospel.

God warns because God saves.

God exposes deception because God loves.`,
      `4. God's people hold commandments and faith together

Revelation describes God's faithful people as those who keep the commandments of God and the faith of Jesus.

This is not legalism.

It is loyalty shaped by faith.

They hold truth, but they hold it with the spirit of Jesus.

They worship God, trust Christ, obey His Word, and endure with patience.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Gospel',
      lemma: 'εὐαγγέλιον',
      transliteration: 'euangelion',
      meaning: 'Good news.',
      strongs: 'G2098',
      reference: 'Revelation 14:6',
      note: `The everlasting gospel is the foundation of the final message.

Prophetic truth must never be separated from the good news of Jesus.

God's warnings are not rooted in hatred.

They are rooted in His desire to save, free, and restore people.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `Power Under Love has shown one clear contrast.

Jesus' kingdom is built on humility, service, truth, freedom, and self-giving love.

Counterfeit religion is marked by self-exaltation, coercion, control, persecution, and the replacement of God's Word with human authority.

Daniel and Paul warned that apostasy would come.

Prophecy helps us recognize religious systems that misrepresent God.

But the final lesson is crucial:

The way we hold truth must match the truth we hold.

If we expose coercion with a coercive spirit, we missed Jesus.

If we condemn people while claiming to defend God's love, we missed Jesus.

If we study prophecy and become proud, we missed Jesus.

The truth that frees must be carried by the love that restores.`,
    },
    studyInsightBlocks: [
      {
        type: 'kingdomContrastPattern',
        title: 'Holding Truth With Love',
        caption: 'God\'s truth must be held with the love of Jesus.',
      },
      {
        type: 'scriptureChain',
        title: 'Truth That Frees',
        references: [
          { reference: 'John 8:31-32' },
          { reference: '1 John 4:7-8' },
          { reference: 'Revelation 14:6-12' },
          { reference: 'Ephesians 4:15' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: God exposes deception because He loves people. His people must hold truth with humility, compassion, faithfulness, and the spirit of Jesus.',
      },
    ],
    reflectPrompt: `How can you hold difficult truth without losing the love of Jesus?

Think about prophecy, religious differences, family conversations, online posts, church discussions, and how your tone either reveals or hides God's character.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, choose one truth you care deeply about and ask:

"Am I holding this like Jesus?"

Then test yourself.

Does my tone sound patient?

Does my motive aim to rescue?

Do I distinguish systems from people?

Do I want others to be free, or do I just want to be right?

Do I speak in a way that reveals God's character?

If the answer exposes you, good.

That is not failure.

That is discipleship.

Let Jesus reshape not only what you believe, but how you carry what you believe.

Prayer:

Father, thank You for giving truth that frees. Thank You for exposing deception because You love people. Keep me from pride, contempt, fear, and harshness. Help me hold Your Word with humility, clarity, courage, and compassion. Let the faith of Jesus shape my spirit, and let Your love guide the way I speak, teach, and live. Amen.`,
    prayer: '',
    completionSummary: `You have completed Power Under Love. Jesus reveals a kingdom of humility, service, truth, freedom, and self-giving love. Prophecy exposes counterfeit religion so people can be rescued, and God's truth must always be held with the love of Jesus.`,
    seriesCompleteScreen: {
      title: 'Study Complete',
      message:
        'You have completed Power Under Love. Jesus reveals a kingdom of humility, service, truth, freedom, and self-giving love. Prophecy exposes counterfeit religion so people can be rescued, and God\'s truth must always be held with the love of Jesus.',
      primaryCta: { label: 'Back to Foundations Path', href: '/paths/foundations' },
      secondaryCta: {
        label: 'Review this study',
        href: '/study-library/power-under-love',
      },
    },
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'pul-l7-q1',
          prompt: 'According to John 8:31-32, what does the truth do?',
          options: [
            'Makes people free',
            'Makes people arrogant',
            'Removes the need for love',
            'Replaces Jesus',
          ],
          correctIndex: 0,
          explanation:
            'Jesus said those who continue in His word will know the truth, and the truth will make them free.',
        },
        {
          id: 'pul-l7-q2',
          prompt: 'According to 1 John 4:8, what is God?',
          options: ['Love', 'Fear', 'Confusion', 'Selfishness'],
          correctIndex: 0,
          explanation:
            'First John says that whoever does not love does not know God, because God is love.',
        },
        {
          id: 'pul-l7-q3',
          prompt: 'According to Revelation 14:6, what message is proclaimed to the world?',
          options: [
            'The everlasting gospel',
            'A message of human pride',
            'A message without Jesus',
            'A message that hides truth',
          ],
          correctIndex: 0,
          explanation: 'Revelation 14 begins the final warning message with the everlasting gospel.',
        },
        {
          id: 'pul-l7-q4',
          prompt: 'According to Revelation 14:12, what marks God\'s faithful people?',
          options: [
            'The commandments of God and the faith of Jesus',
            'Hatred toward others',
            'Pride in their own knowledge',
            'Rejection of faith',
          ],
          correctIndex: 0,
          explanation:
            'Revelation describes the saints as those who keep the commandments of God and the faith of Jesus.',
        },
        {
          id: 'pul-l7-q5',
          kind: 'reflection',
          prompt: 'What is one way you can let the love of Jesus shape how you share truth?',
          explanation:
            'Prophetic truth must be carried with humility, compassion, courage, and the spirit of Christ.',
        },
      ],
    },
  },
}
