import type { LessonContentBlock, StudyVisualLessonBlock } from '@/lib/lesson-content-blocks'
import type { LessonReaderContent } from '@/lib/lesson-content'
import type { LessonQuizPayload } from '@/lib/lesson-quiz-types'
import { DEATH_RESURRECTION_FLOW_STAGES } from '@/lib/death-resurrection-flow-stages'

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

/** Lesson-only flow list: adjusts scriptures on the first-death and resurrection tiles (does not mutate canonical data). */
const firstDeathSleepFlowStages = DEATH_RESURRECTION_FLOW_STAGES.map((stage, index) => {
  if (index === 1) {
    return { ...stage, scriptures: ['John 11:11-14', 'Luke 8:52-53'] as const }
  }
  if (index === 2) {
    return { ...stage, scriptures: ['John 11:23-25', 'John 5:28-29'] as const }
  }
  return stage
})

const firstDeathSleepInsightBlocks: LessonContentBlock[] = [
  {
    type: 'deathResurrectionFlow',
    stages: firstDeathSleepFlowStages,
    highlightedIndices: [1, 2],
    subtitle: 'Focused on the first death as sleep and the resurrection as awakening.',
  },
  {
    type: 'scriptureChain',
    title: 'Death as Sleep',
    references: [
      { reference: 'John 11:11-14' },
      { reference: 'Luke 8:52-53' },
      { reference: 'John 11:23-25' },
      { reference: 'John 5:28-29' },
    ],
  },
  {
    type: 'paragraph',
    text: 'Takeaway: Jesus describes the first death as sleep and points our hope toward the resurrection.',
  },
]

const deadKnowContrastVisual: StudyVisualLessonBlock = {
  type: 'studyVisual',
  title: 'A Clearer Picture',
  accent: 'stone',
  payload: {
    variant: 'comparison',
    leftTitle: 'Common fear',
    rightTitle: 'Biblical teaching',
    leftItems: [
      'The dead are watching',
      'The dead are wandering',
      'The dead are communicating',
    ],
    rightItems: [
      'The dead rest unconsciously',
      'They await the resurrection',
      'Jesus will call them from the graves',
    ],
  },
  footnote:
    'Scripture does not deny grief. It brings clarity where culture often brings confusion.',
}

const whatDeadKnowInsightBlocks: LessonContentBlock[] = [
  deadKnowContrastVisual,
  {
    type: 'scriptureChain',
    title: 'What the Dead Know',
    references: [
      { reference: 'Ecclesiastes 9:5-6' },
      { reference: 'Psalm 146:4' },
      { reference: 'Job 7:9-10' },
      { reference: 'John 5:28-29' },
    ],
  },
  {
    type: 'paragraph',
    text: 'Takeaway: Scripture teaches that the dead are unconscious and await the resurrection when Jesus calls them from the graves.',
  },
]

const warningHopeVisual: StudyVisualLessonBlock = {
  type: 'studyVisual',
  title: 'Warning and Hope',
  accent: 'sage',
  payload: {
    variant: 'sequence',
    steps: [
      { label: 'Warning', subtitle: 'Do not seek messages from the dead.' },
      { label: 'Why', subtitle: 'The dead are unconscious.' },
      { label: 'Hope', subtitle: 'Jesus will raise the dead.' },
    ],
  },
  footnote: "God's warning is protection, not horror. His comfort is found in Christ.",
}

const speakToDeadInsightBlocks: LessonContentBlock[] = [
  warningHopeVisual,
  {
    type: 'scriptureChain',
    title: 'Protected From Deception',
    references: [
      { reference: 'Deuteronomy 18:10-12' },
      { reference: 'Ecclesiastes 9:5' },
      { reference: '2 Corinthians 11:14' },
      { reference: 'John 5:28-29' },
    ],
  },
  {
    type: 'paragraph',
    text: 'Takeaway: God warns against speaking to the dead because the dead cannot communicate, and deceptive spiritual powers can counterfeit comfort.',
  },
]

/** Lesson-only flow list: adjusts scriptures on the final stage tile (does not mutate canonical data). */
const secondDeathFlowStages = DEATH_RESURRECTION_FLOW_STAGES.map((stage, index) =>
  index === 4
    ? {
        ...stage,
        scriptures: ['Revelation 20:6', 'Revelation 20:14', 'Romans 6:23', 'Revelation 21:4'] as const,
      }
    : stage,
)

const secondDeathInsightBlocks: LessonContentBlock[] = [
  {
    type: 'deathResurrectionFlow',
    stages: secondDeathFlowStages,
    highlightedIndices: [4],
    subtitle:
      'The redeemed receive eternal life with Christ, while the second death brings the final end of sin and rebellion.',
  },
  {
    type: 'scriptureChain',
    title: 'The Second Death',
    references: [
      { reference: 'Matthew 10:28' },
      { reference: 'Romans 6:23' },
      { reference: 'Revelation 20:6' },
      { reference: 'Revelation 20:14' },
    ],
  },
  {
    type: 'paragraph',
    text: 'Takeaway: The second death is the final end of sin and rebellion, but those who belong to Christ are safe in His victory.',
  },
]

/** Lesson-only flow list: adjusts scriptures on the resurrection tile (does not mutate canonical data). */
const resurrectionHopeFlowStages = DEATH_RESURRECTION_FLOW_STAGES.map((stage, index) =>
  index === 2
    ? {
        ...stage,
        scriptures: ['John 5:28-29', '1 Thessalonians 4:16-17', '1 Corinthians 15:52'] as const,
      }
    : stage,
)

const resurrectionHopeInsightBlocks: LessonContentBlock[] = [
  {
    type: 'deathResurrectionFlow',
    stages: resurrectionHopeFlowStages,
    highlightedIndices: [2],
    subtitle: 'Jesus will call the dead from the graves, and they will be raised.',
  },
  {
    type: 'scriptureChain',
    title: 'Raised by His Voice',
    references: [
      { reference: 'John 5:28-29' },
      { reference: '1 Thessalonians 4:16-17' },
      { reference: '1 Corinthians 15:52' },
      { reference: 'John 11:25' },
    ],
  },
  {
    type: 'paragraph',
    text: 'Takeaway: The dead rest until Jesus returns and calls them from the graves in the resurrection.',
  },
]

const forgivenFreeInsightBlocks: LessonContentBlock[] = [
  {
    type: 'deathResurrectionFlow',
    title: 'From Death to Life in Christ',
    subtitle:
      'The full path from life, through death and resurrection, to judgment and eternal hope in Jesus.',
    highlightedIndices: [0, 1, 2, 3, 4],
  },
  {
    type: 'paragraph',
    text: 'Jesus is the center of the whole hope. He forgives, raises, judges with truth, and gives eternal life to those who trust Him.',
  },
  {
    type: 'scriptureChain',
    title: 'Forgiven and Free',
    references: [
      { reference: 'Hebrews 2:9' },
      { reference: 'Colossians 1:13-14' },
      { reference: 'Psalm 32:1-2' },
      { reference: 'Romans 8:1' },
    ],
  },
  {
    type: 'paragraph',
    text: 'Takeaway: Jesus tasted death for everyone so that sinners can be forgiven, freed from guilt, and restored to hope.',
  },
]

const deathNotTheEndInsightBlocks: LessonContentBlock[] = [
  {
    type: 'deathResurrectionFlow',
    title: 'Death Is Not the End',
    subtitle:
      'The Bible shows a clear path from life, to the first death, to resurrection, judgment, and final restoration.',
  },
  {
    type: 'scriptureChain',
    title: 'Hope Beyond Death',
    references: [
      { reference: 'John 11:25-26' },
      { reference: 'Revelation 2:11' },
      { reference: 'Revelation 20:6' },
      { reference: '1 Corinthians 15:26' },
    ],
  },
  {
    type: 'paragraph',
    text: 'Takeaway: Death is real, but Jesus is the resurrection and the life. Those who trust Him have hope beyond the grave.',
  },
]

/** Guided reader lessons for "What Happens When We Die?" (Foundations). */
export const whatHappensWhenWeDieSeriesLessonLibrary: Record<string, LessonReaderContent> = {
  'death-is-not-the-end': {
    openingThought: `Death feels final.

It stops conversations.
It interrupts plans.
It leaves empty rooms and unanswered questions.

But Scripture does not treat death as the end of the story.

The Bible is honest about death, but it is not hopeless about death. Jesus speaks of resurrection. Revelation speaks of victory. God's promise is bigger than the grave.

This lesson begins with a simple truth:

For those who trust Christ, death does not get the last word.`,
    scriptureRef: 'John 11:25',
    scriptureQuote: 'Jesus said unto her, I am the resurrection, and the life.',
    scriptureSecondaryRef: 'Revelation 2:11',
    scriptureSecondaryQuote: 'He that overcometh shall not be hurt of the second death.',
    scriptureAfterSecondary: `Scripture names two deaths.

The first death is the common death all people face in this broken world.

The second death is different. It is final separation from life, mercy, and restoration.

Jesus speaks of resurrection and victory for those who trust Him.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Revelation 20:6',
        quote:
          'Blessed and holy is he that hath part in the first resurrection: on such the second death hath no power.',
      },
      {
        type: 'scripture',
        reference: 'John 11:26',
        quote: 'And whosoever liveth and believeth in me shall never die.',
      },
    ],
    teachingPoints: [
      `1. The Bible speaks of more than one death

Revelation mentions the "second death."

That means Scripture also recognizes a first death.

The first death is the common death all human beings face in this broken world.

The second death is different. It is final separation from life, mercy, and restoration.

This study will help us understand both.`,
      `2. The first death is not final for believers

Jesus says, "I am the resurrection, and the life."

That means the grave is not stronger than Christ.

Those who die trusting Him are not beyond His reach.

The first death may stop the body for a time, but it cannot cancel God's promise of resurrection.`,
      `3. The second death has no power over the redeemed

Revelation 20:6 says the second death has no power over those who share in the first resurrection.

This is a serious truth, but also a hopeful one.

The Bible does not teach that evil and death continue forever.

God will bring sin to an end.

Those who are in Christ are safe in His victory.`,
      `4. Our hope is in Jesus, not speculation

Death creates many questions.

People guess.
Cultures speculate.
Fear invents stories.

But the Christian hope is not built on rumors about the afterlife.

It is built on Jesus, who says, "I am the resurrection, and the life."`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Resurrection',
      lemma: 'ἀνάστασις',
      transliteration: 'anastasis',
      meaning: 'To rise again, to be raised from death to life.',
      strongs: 'G386',
      reference: 'John 11:25',
      note: `The Bible's hope is not that death is harmless.

The hope is that Jesus has authority over death.

Resurrection means God can call life back from the grave.

Death is real, but it is not ultimate when Christ speaks.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The Bible does not ask us to pretend death is easy.

Even Jesus wept at the tomb of Lazarus.

But Jesus did not only grieve.

He also declared Himself to be the resurrection and the life.

That means Christian hope is not denial.

It is confidence in the One who has power over the grave.

This study will move carefully through what Scripture teaches about death, the unconscious state of the dead, the resurrection, the second death, and the forgiveness Jesus offers.

We are not chasing fear.

We are following Scripture.`,
    },
    studyInsightBlocks: deathNotTheEndInsightBlocks,
    reflectPrompt: `When you think about death, what question or fear comes up most strongly for you?

Be honest. This study is not asking you to pretend death is not painful. It is inviting you to bring your questions under the light of Scripture.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, anchor your hope in Jesus' words:

"I am the resurrection, and the life."

When fear of death, grief, or uncertainty rises, do not start with speculation.

Start with Christ.

Say:

"Jesus, You are stronger than the grave."

Then let Scripture shape your hope one truth at a time.

Prayer:

Jesus, thank You that death does not have the final word. Thank You for being the resurrection and the life. Help me bring my fears and questions to You honestly. Teach me what Scripture says, and anchor my hope in Your victory over sin, death, and the grave. Amen.`,
    prayer: '',
    completionSummary: `Death is real, but it is not final for those who trust Christ. Jesus is the resurrection and the life, and His promise reaches beyond the grave.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'wh-l1-q1',
          prompt: 'What does Jesus call Himself in John 11:25?',
          options: [
            'The resurrection and the life',
            'The hidden gate',
            'The end of hope',
            'The second death',
          ],
          correctIndex: 0,
          explanation:
            'Jesus says, "I am the resurrection, and the life," showing that hope beyond death is centered in Him.',
        },
        {
          id: 'wh-l1-q2',
          prompt: 'What does Revelation 2:11 mention?',
          options: ['The second death', 'The first city', 'The fall of Egypt', 'The end of Scripture'],
          correctIndex: 0,
          explanation:
            'Revelation 2:11 says the one who overcomes will not be hurt by the second death.',
        },
        {
          id: 'wh-l1-q3',
          prompt: 'According to Revelation 20:6, what has no power over those in the first resurrection?',
          options: ['The second death', 'Human weakness', 'Prayer', 'Scripture'],
          correctIndex: 0,
          explanation:
            'Revelation 20:6 says the second death has no power over those who share in the first resurrection.',
        },
        {
          id: 'wh-l1-q4',
          prompt: 'What is the Christian hope about death built on?',
          options: [
            'Jesus and His promise of resurrection',
            'Guessing about the afterlife',
            'Fear of spirits',
            'Human imagination',
          ],
          correctIndex: 0,
          explanation:
            'Christian hope is built on Jesus, who has authority over death and promises resurrection.',
        },
        {
          id: 'wh-l1-q5',
          kind: 'reflection',
          prompt:
            'How does knowing Jesus is the resurrection and the life affect the way you face death or grief?',
          explanation:
            'The Bible does not deny grief, but it gives hope through Christ\'s authority over death.',
        },
      ],
    },
  },
  'the-first-death-is-sleep': {
    openingThought: `Jesus used a surprising word for death.

Sleep.

That does not mean death is fake. Death is painful and real.

But Jesus wanted us to understand that the first death is not the final ending. It is a temporary state from which God can awaken His people.

When Jesus stood before death, He did not panic.

He spoke with authority.

For Him, the grave is not a locked door.

It is a place His voice can reach.`,
    scriptureRef: 'John 11:11',
    scriptureQuote: 'Our friend Lazarus sleepeth; but I go, that I may awake him out of sleep.',
    scriptureAfterPrimary: `Jesus chose sleep as a picture.

Death is real. Lazarus was not merely resting for the night.

But sleep points to something death cannot erase: God can awaken the dead.`,
    scriptureSecondaryRef: 'John 11:14',
    scriptureSecondaryQuote: 'Then said Jesus unto them plainly, Lazarus is dead.',
    scriptureAfterSecondary: `Jesus did not deny death.

He named it plainly.

Sleep was not denial. It was a picture of hope.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Luke 8:52',
        quote: 'Weep not; she is not dead, but sleepeth.',
      },
      {
        type: 'scripture',
        reference: 'John 11:23',
        quote: 'Jesus saith unto her, Thy brother shall rise again.',
      },
      {
        type: 'scripture',
        reference: 'John 11:25',
        quote: 'Jesus said unto her, I am the resurrection, and the life.',
      },
    ],
    teachingPoints: [
      `1. Jesus described the first death as sleep

When Lazarus died, Jesus first said he was sleeping.

Then He explained plainly that Lazarus was dead.

This shows us that Jesus used sleep as a picture for the first death.

Death is real, but it is not final when God plans to awaken the dead.`,
      `2. Sleep points to unconscious rest

Sleep is not active work.

It is not wandering.
It is not haunting.
It is not watching over the living.

It is rest.

The Bible uses sleep to help us understand that the dead are not living a separate conscious life somewhere else.

They rest until the resurrection.`,
      `3. Resurrection is the awakening

Jesus told Martha that her brother would rise again.

Her hope was not that Lazarus was already fully alive somewhere else.

Her hope was the resurrection.

That is the Bible's consistent hope.

God will awaken the dead.`,
      `4. Jesus is the resurrection and the life

The hope of resurrection is not based on human strength.

It is based on Christ.

Jesus does not merely teach resurrection.

He is the resurrection and the life.

The dead are safe in His memory, His power, and His promise.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Sleep',
      lemma: 'κοιμάω',
      transliteration: 'koimaō',
      meaning: 'A state of rest used in Scripture as a picture for the first death.',
      strongs: 'G2837',
      reference: 'John 11:11',
      note: `When Jesus calls death sleep, He is not minimizing grief.

He is revealing hope.

The first death is temporary because Jesus has authority to awaken the dead at the resurrection.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The Bible's teaching on death protects us from fear and confusion.

If the first death is sleep, then we do not need to imagine the dead wandering, suffering, watching, or trying to communicate.

They are resting.

They are unconscious.

They are awaiting the voice of Christ.

This makes the resurrection central.

Christian hope is not built on the idea that death secretly continues life in another form.

Christian hope is built on Jesus raising the dead.`,
    },
    studyInsightBlocks: firstDeathSleepInsightBlocks,
    reflectPrompt: `How does Jesus describing death as sleep change the way you think about the first death?

Think about fear, grief, confusion, and the hope of being awakened by Christ.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, let Jesus define death for you.

Not fear.
Not movies.
Not superstition.
Not culture.

Jesus.

When death feels terrifying, remember:

The first death is sleep.

The resurrection is awakening.

Christ is the voice that reaches the grave.

Let that truth steady your mind.

Prayer:

Jesus, thank You for speaking clearly about death. Thank You that the grave is not beyond Your voice. Help me understand death through Scripture, not fear or confusion. Teach me to trust Your promise of resurrection and to rest my hope in You. Amen.`,
    prayer: '',
    completionSummary: `Jesus called the first death sleep. That means the grave is not the end. The dead rest until Christ awakens them in the resurrection.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'wh-l2-q1',
          prompt: "What word did Jesus use to describe Lazarus' death in John 11:11?",
          options: ['Sleep', 'Celebration', 'Punishment only', 'Wandering'],
          correctIndex: 0,
          explanation:
            'Jesus said Lazarus was sleeping, then explained plainly that Lazarus was dead. He used sleep as a picture for the first death.',
        },
        {
          id: 'wh-l2-q2',
          prompt: 'What did Jesus say He was going to do for Lazarus?',
          options: [
            'Awake him out of sleep',
            'Forget him',
            'Leave him in the tomb forever',
            'Ask Lazarus to haunt the living',
          ],
          correctIndex: 0,
          explanation:
            'Jesus said He was going to awaken Lazarus out of sleep, pointing to His authority over death.',
        },
        {
          id: 'wh-l2-q3',
          prompt: 'What did Martha expect for Lazarus?',
          options: [
            'That he would rise again',
            'That he would never be seen again',
            'That he had become an angel',
            'That he was already haunting Bethany',
          ],
          correctIndex: 0,
          explanation: 'Martha expected Lazarus to rise again, showing resurrection as the biblical hope.',
        },
        {
          id: 'wh-l2-q4',
          prompt: 'What does the sleep picture teach about the first death?',
          options: [
            'It is an unconscious rest awaiting resurrection',
            'It is eternal torment',
            'It is communication with the living',
            'It is stronger than Jesus',
          ],
          correctIndex: 0,
          explanation:
            'Sleep points to unconscious rest. The first death waits for resurrection, not ongoing conscious activity.',
        },
        {
          id: 'wh-l2-q5',
          kind: 'reflection',
          prompt:
            'Why is resurrection a stronger hope than speculation about what happens immediately after death?',
          explanation:
            'Resurrection hope is based on Jesus\' authority and promise, not human guesses or fear.',
        },
      ],
    },
  },
  'what-the-dead-know': {
    openingThought: `If death is sleep, then the next question is simple:

What do the dead know?

The Bible answers clearly.

The dead are not watching us.
They are not guiding us.
They are not suffering in secret.
They are not communicating from another realm.

They are resting.

That truth may feel different from what many people have heard, but it is deeply comforting. God has not left us guessing. He tells us the dead rest until the resurrection.`,
    scriptureRef: 'Ecclesiastes 9:5',
    scriptureQuote: 'For the living know that they shall die: but the dead know not any thing.',
    scriptureAfterPrimary: `This is one of Scripture's clearest statements about the state of the dead.

The living are conscious.
The dead, in the first death, are not.`,
    scriptureSecondaryRef: 'Ecclesiastes 9:6',
    scriptureSecondaryQuote:
      'Also their love, and their hatred, and their envy, is now perished.',
    scriptureAfterSecondary: `Earthly passions and plans do not continue in the unconscious sleep of death.

The person is not lost to God.
But conscious activity in this life has ceased until resurrection.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Psalm 146:4',
        quote:
          'His breath goeth forth, he returneth to his earth; in that very day his thoughts perish.',
      },
      {
        type: 'scripture',
        reference: 'Job 7:9',
        quote: 'He that goeth down to the grave shall come up no more.',
      },
      {
        type: 'scripture',
        reference: 'Job 7:10',
        quote: 'He shall return no more to his house, neither shall his place know him any more.',
      },
    ],
    teachingPoints: [
      `1. The dead do not know anything

Ecclesiastes says the dead know nothing.

That is direct.

Death is not described as a conscious life somewhere else.

It is an unconscious rest.

This agrees with Jesus calling death sleep.`,
      `2. The thoughts of the dead perish

Psalm 146 says when a person dies, their thoughts perish.

This does not mean God forgets them.

It means their conscious thinking stops.

Their identity is safe with God, but they are not actively thinking, watching, or speaking.`,
      `3. The dead do not return to their homes

Job says the dead do not return to their houses.

This matters because many people are afraid of spirits of the dead.

But Scripture does not teach that deceased loved ones come back to visit, haunt, warn, or guide the living.

The dead rest until resurrection.`,
      `4. Resurrection is still the hope

If the dead are unconscious, then resurrection becomes even more important.

The Bible's hope is not that people float away at death.

The hope is that Jesus will raise the dead.

Death is sleep.

Resurrection is awakening.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Perish',
      lemma: 'אָבַד',
      transliteration: 'abad',
      meaning: 'To cease, pass away, come to an end, or stop.',
      strongs: 'H6',
      reference: 'Psalm 146:4',
      note: `Psalm 146 says a person's thoughts perish at death.

This means conscious activity stops in the first death.

The person is not lost to God, but they are resting until Christ calls them from the grave.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The Bible's teaching on death protects us from confusion.

When we believe the dead are conscious and able to communicate, we become vulnerable to fear, superstition, and deception.

But Scripture gives a clearer picture.

The dead know nothing.
Their thoughts have ceased.
They do not return to their homes.
They rest until the resurrection.

This does not make death less painful.

But it does remove confusion.

Your loved ones who died are not trapped, wandering, watching every painful moment, or trying to reach you.

They are resting in the sleep of death until the voice of Jesus wakes them.`,
    },
    studyInsightBlocks: whatDeadKnowInsightBlocks,
    reflectPrompt: `How does it affect you to know that the dead rest unconsciously until the resurrection?

Think about fear, grief, comfort, and the way Scripture brings clarity where culture often brings confusion.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, let Scripture correct fear.

When thoughts about death become heavy or confusing, return to what God has revealed:

The dead know nothing.
Their thoughts have ceased.
They do not return to the living.
Jesus will raise the dead.

Do not build your hope on fear.

Build it on Christ's promise.

Prayer:

Father, thank You for speaking clearly about death. Help me trust Your word more than fear, stories, or confusion. Comfort me with the truth that the dead rest until the resurrection. Keep my hope anchored in Jesus, who will call the dead to life. Amen.`,
    prayer: '',
    completionSummary: `The dead are not wandering or watching. Scripture teaches that they rest unconsciously until Jesus calls them from the grave.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'wh-l3-q1',
          prompt: 'According to Ecclesiastes 9:5, what do the dead know?',
          options: ['Nothing', 'Everything happening on earth', 'Secret future events', "Everyone's thoughts"],
          correctIndex: 0,
          explanation: 'Ecclesiastes 9:5 says the dead know not anything.',
        },
        {
          id: 'wh-l3-q2',
          prompt: "According to Psalm 146:4, what happens to a person's thoughts at death?",
          options: ['They perish', 'They become stronger', 'They guide the living', 'They turn into angels'],
          correctIndex: 0,
          explanation: 'Psalm 146:4 says that when a person dies, their thoughts perish.',
        },
        {
          id: 'wh-l3-q3',
          prompt: 'According to Job 7:9-10, do the dead return to their houses?',
          options: ['No', 'Yes, often', 'Only at night', 'Only to warn people'],
          correctIndex: 0,
          explanation: 'Job 7 teaches that the dead do not return to their houses.',
        },
        {
          id: 'wh-l3-q4',
          prompt: 'What is the biblical hope for the dead?',
          options: [
            'Resurrection through Jesus',
            'Haunting the living',
            'Wandering the earth',
            'Speaking through mediums',
          ],
          correctIndex: 0,
          explanation: 'The Bible\'s hope is resurrection. Jesus will call the dead from the graves.',
        },
        {
          id: 'wh-l3-q5',
          kind: 'reflection',
          prompt:
            'How can Scripture\'s clarity about death help protect your mind from fear or deception?',
          explanation:
            'God\'s word gives a clear picture of death as unconscious rest, which protects us from confusion and false spiritual claims.',
        },
      ],
    },
  },
  'why-god-warns-against-speaking-to-the-dead': {
    openingThought: `If the dead are resting unconsciously, then we need to ask another question:

Who are people encountering when they believe they are speaking with the dead?

The Bible does not treat this lightly.

God warns His people not to seek messages from the dead because the dead cannot communicate. That means spiritual encounters that claim to be dead loved ones are not what they appear to be.

This warning is not given to scare us.

It is given to protect us.

God wants His people grounded in truth, not vulnerable to deception.`,
    scriptureRef: 'Deuteronomy 18:10-11',
    scriptureQuote:
      'There shall not be found among you any one that maketh his son or his daughter to pass through the fire... or a consulter with familiar spirits, or a wizard, or a necromancer.',
    scriptureAfterPrimary: `God lists forbidden practices together.

Among them are attempts to contact the dead through mediums, spirits, and occult arts.

This is not a minor cultural detail.

It is a serious warning.`,
    scriptureSecondaryRef: 'Deuteronomy 18:12',
    scriptureSecondaryQuote: 'For all that do these things are an abomination unto the LORD.',
    scriptureAfterSecondary: `God does not call these practices forbidden because He is distant.

He calls them abomination because they lead people away from truth and into deception.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Deuteronomy 32:17',
        quote: 'They sacrificed unto devils, not to God.',
      },
      {
        type: 'scripture',
        reference: '2 Corinthians 11:14',
        quote: 'And no marvel; for Satan himself is transformed into an angel of light.',
      },
    ],
    teachingPoints: [
      `1. God forbids attempts to speak with the dead

Deuteronomy warns against necromancy, mediums, and occult practices.

Necromancy means seeking communication with the dead.

God does not forbid this because He is withholding comfort.

He forbids it because it is spiritually dangerous and deceptive.`,
      `2. The dead cannot communicate

Previous lessons showed that the dead know nothing, their thoughts perish, and they do not return to their homes.

So if the dead are unconscious, they are not sending messages.

They are not appearing to guide people.

They are not speaking through mediums.

Any spiritual experience claiming to be the dead must be tested by Scripture.`,
      `3. Deception can look comforting

2 Corinthians says Satan can appear as an angel of light.

That means deception does not always look dark.

Sometimes it looks emotional, beautiful, spiritual, or comforting.

The enemy does not need a lie to look evil.

He only needs it to look believable.`,
      `4. God protects us through His word

God's warning is an act of love.

He knows grief makes people vulnerable.

When someone deeply misses a loved one, they may become more open to anything that feels like contact.

Scripture protects the grieving heart by giving clear truth.

The dead are resting.

Jesus will raise them.

We do not seek the dead.

We trust the Lord of life.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Necromancy',
      lemma: 'דֹּרֵשׁ אֶל־הַמֵּתִים',
      transliteration: 'doresh el-hametim',
      meaning: 'Seeking communication with the dead.',
      strongs: 'H1875',
      reference: 'Deuteronomy 18:11',
      note: `The Bible warns against necromancy because the dead are unconscious and cannot communicate.

Spiritual encounters claiming to be the dead are deceptive and must be rejected.

God calls His people to seek truth from Him, not messages from the grave.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The Bible connects false worship, occult practices, and demonic deception.

That may sound intense, but Scripture is direct because the danger is real.

If the dead cannot communicate, then any supernatural "message from the dead" is not actually from the dead.

This protects us from a common deception:

"I felt comforted, so it must be from God."

Comfort alone is not the test of truth.

Scripture is.

God's comfort never requires us to ignore His word.

The safest place for grief is not spiritual curiosity.

It is the presence of Jesus.`,
    },
    studyInsightBlocks: speakToDeadInsightBlocks,
    reflectPrompt: `Why do you think grief can make people vulnerable to spiritual deception?

Think honestly about longing, comfort, fear, loneliness, and the desire to hear from someone who has died.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, commit to letting Scripture define spiritual truth.

Not emotion alone.
Not supernatural experiences.
Not culture.
Not grief.

Scripture.

If something contradicts God's word, reject it, even if it feels comforting.

Bring grief to Jesus instead.

He understands loss.
He wept at a tomb.
He promises resurrection.

Prayer:

Father, protect me from deception. Help me trust Your word when emotions are strong and grief feels heavy. Teach me not to seek comfort from forbidden places. Keep my hope anchored in Jesus, who understands sorrow and has power to raise the dead. Amen.`,
    prayer: '',
    completionSummary: `God's warning is protection. The dead rest until resurrection, and Jesus gives safer comfort than any counterfeit voice from the grave.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'wh-l4-q1',
          prompt: 'What does Deuteronomy 18 warn against?',
          options: [
            'Seeking communication with the dead',
            'Reading Scripture',
            'Praying to God',
            'Trusting Jesus',
          ],
          correctIndex: 0,
          explanation:
            'Deuteronomy 18 warns against necromancy and occult practices, including attempts to communicate with the dead.',
        },
        {
          id: 'wh-l4-q2',
          prompt: 'Why can the dead not communicate with the living?',
          options: [
            'They are unconscious and know nothing',
            'They are too busy',
            'They only speak at night',
            'They become angels',
          ],
          correctIndex: 0,
          explanation:
            'Ecclesiastes 9:5 says the dead know nothing, and Psalm 146:4 says their thoughts perish.',
        },
        {
          id: 'wh-l4-q3',
          prompt: 'According to 2 Corinthians 11:14, how can Satan appear?',
          options: [
            'As an angel of light',
            'As a harmless teacher only',
            'As a Roman soldier only',
            'As someone who always looks evil',
          ],
          correctIndex: 0,
          explanation:
            'Satan can appear as an angel of light, meaning deception can look spiritual or comforting.',
        },
        {
          id: 'wh-l4-q4',
          prompt: 'What should test spiritual experiences?',
          options: ['Scripture', 'Emotion alone', 'Popular opinion', 'Curiosity'],
          correctIndex: 0,
          explanation:
            'Spiritual experiences must be tested by Scripture, not merely by how comforting or supernatural they seem.',
        },
        {
          id: 'wh-l4-q5',
          kind: 'reflection',
          prompt:
            'How can you bring grief to Jesus instead of seeking comfort in spiritually dangerous places?',
          explanation:
            'Jesus understands grief, speaks truth, and promises resurrection. He is the safe place for sorrow.',
        },
      ],
    },
  },
  'the-second-death': {
    openingThought: `The Bible speaks about two deaths.

The first death is temporary. Jesus described it as sleep.

The second death is different.

It is final.

The second death is not a place where God keeps people alive forever in pain. It is the final end of sin, rebellion, and separation from God.

That truth is serious.

But it also shows us something hopeful:

God will not let evil live forever.`,
    scriptureRef: 'Revelation 20:14',
    scriptureQuote:
      'And death and hell were cast into the lake of fire. This is the second death.',
    scriptureAfterPrimary: `Revelation names this clearly.

The lake of fire is called the second death.

That means this is not the same as the first death, which is sleep until resurrection.`,
    scriptureSecondaryRef: 'Matthew 10:28',
    scriptureSecondaryQuote: 'Fear him which is able to destroy both soul and body in hell.',
    scriptureAfterSecondary: `Jesus teaches that final judgment is complete.

God is able to destroy both soul and body.

The Bible does not picture evil as immortal.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Revelation 20:6',
        quote:
          'Blessed and holy is he that hath part in the first resurrection: on such the second death hath no power.',
      },
      {
        type: 'scripture',
        reference: 'Romans 6:23',
        quote:
          'For the wages of sin is death; but the gift of God is eternal life through Jesus Christ our Lord.',
      },
    ],
    teachingPoints: [
      `1. The second death is final

Revelation calls the lake of fire the second death.

This is not the same as the first death.

The first death is sleep until resurrection.

The second death is the final destruction of sin and those who refuse God's mercy.

It has no resurrection after it.`,
      `2. Sin ends in death

Romans 6:23 says the wages of sin is death.

Not eternal life in torment.

Death.

Sin separates from the Source of life, and separation from God cannot produce life forever.

The final result of sin is destruction.`,
      `3. God destroys both soul and body

Jesus said God is able to destroy both soul and body.

That means the final judgment is complete.

The Bible does not picture evil as immortal.

It pictures God bringing evil to an end.

This protects God's character.

He is just, but He is not cruel.`,
      `4. The second death has no power over the redeemed

Revelation 20:6 says the second death has no power over those who belong to Christ.

This is why Jesus matters.

He tasted death for us.
He conquered the grave.
He offers eternal life.

In Him, the final death loses its claim.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Destroy',
      lemma: 'ἀπόλλυμι',
      transliteration: 'apollumi',
      meaning: 'To bring to ruin, end, or complete destruction.',
      strongs: 'G622',
      reference: 'Matthew 10:28',
      note: `Jesus said God can destroy both soul and body.

This means the final judgment is not eternal preservation in suffering.

It is the complete end of sin and rebellion.

God's goal is not endless pain.

His goal is a cleansed universe where death itself is gone.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `Many people have been taught to fear God because of confused ideas about hell.

But Scripture teaches that the second death is final destruction, not eternal conscious torture.

That does not make judgment light.

It makes it clear.

Sin is serious.
Rebellion is serious.
Rejecting life is serious.

But God's justice does not make Him cruel.

The same God who warns about the second death is the God who gave His Son so we could have eternal life.

The second death shows the final end of sin.

The cross shows how far God went to save us from it.`,
    },
    studyInsightBlocks: secondDeathInsightBlocks,
    reflectPrompt: `How does understanding the second death as the final end of sin affect your view of God's justice?

Think about the difference between God being just and God being cruel. Scripture shows that God deals with evil fully without making evil eternal.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, let the seriousness of judgment lead you toward Jesus, not away from Him.

The point is not panic.

The point is surrender.

Romans 6:23 gives both sides:

The wages of sin is death.

But the gift of God is eternal life through Jesus Christ our Lord.

Do not stop at the warning.

Receive the gift.

Prayer:

Father, help me understand Your justice clearly. Thank You that You will bring sin, death, and evil to an end. Thank You even more for giving eternal life through Jesus. Keep me from fear-based confusion, and lead me into humble trust, surrender, and hope. Amen.`,
    prayer: '',
    completionSummary: `The second death is the final end of sin and rebellion. But in Christ, eternal life is offered as a gift, and the second death has no power over the redeemed.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'wh-l5-q1',
          prompt: 'What does Revelation 20:14 call the lake of fire?',
          options: [
            'The second death',
            'A new beginning for sin',
            'A place where evil lives forever',
            'The first resurrection',
          ],
          correctIndex: 0,
          explanation: 'Revelation 20:14 says the lake of fire is the second death.',
        },
        {
          id: 'wh-l5-q2',
          prompt: 'According to Romans 6:23, what are the wages of sin?',
          options: ['Death', 'Eternal life', 'Popularity', 'Wisdom'],
          correctIndex: 0,
          explanation:
            'Romans 6:23 says the wages of sin is death, but the gift of God is eternal life through Jesus Christ.',
        },
        {
          id: 'wh-l5-q3',
          prompt: 'According to Matthew 10:28, what can God destroy?',
          options: [
            'Both soul and body',
            'Scripture',
            'His love',
            'The resurrection promise',
          ],
          correctIndex: 0,
          explanation:
            'Jesus said God is able to destroy both soul and body, showing the completeness of final judgment.',
        },
        {
          id: 'wh-l5-q4',
          prompt: 'Who does the second death have no power over?',
          options: [
            'Those who have part in the first resurrection',
            'Those who reject Christ forever',
            'Those who trust superstition',
            'Those who speak to the dead',
          ],
          correctIndex: 0,
          explanation:
            'Revelation 20:6 says the second death has no power over those who have part in the first resurrection.',
        },
        {
          id: 'wh-l5-q5',
          kind: 'reflection',
          prompt: 'Why is eternal life described as a gift, not something we earn?',
          explanation:
            'Romans 6:23 says eternal life is the gift of God through Jesus Christ. Our hope rests in Christ\'s grace, not human merit.',
        },
      ],
    },
  },
  'the-resurrection-hope': {
    openingThought: `The Bible's hope is not vague.

It is resurrection.

Jesus does not promise that death is harmless. He promises that death will not win.

One day, His voice will reach the graves. The sleeping dead will awaken. Those who belong to Christ will rise to life.

This is why believers do not grieve like people with no hope.

We grieve, but not without promise.

We mourn, but not without resurrection.`,
    scriptureRef: 'John 5:28-29',
    scriptureQuote: `The hour is coming, in the which all that are in the graves shall hear his voice.

And shall come forth.`,
    scriptureAfterPrimary: `Jesus grounds resurrection hope in His own authority.

The dead are in the graves.

They are not elsewhere.

They await His call.`,
    scriptureSecondaryRef: '1 Thessalonians 4:16',
    scriptureSecondaryQuote: 'For the Lord himself shall descend from heaven with a shout.',
    scriptureAfterSecondary: `Resurrection is tied to Christ's return.

The Lord descends.

The dead in Christ rise.

Hope is forward-looking, not vague.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: '1 Thessalonians 4:17',
        quote: 'And so shall we ever be with the Lord.',
      },
      {
        type: 'scripture',
        reference: '1 Corinthians 15:52',
        quote: 'For the trumpet shall sound, and the dead shall be raised incorruptible.',
      },
    ],
    teachingPoints: [
      `1. The dead are in the graves until Christ calls

Jesus said all who are in the graves will hear His voice.

That is clear and grounded.

The dead are not wandering.
They are not watching.
They are not communicating.

They are resting until Jesus calls them.`,
      `2. Resurrection happens by the voice of Jesus

The hope of the dead is not human memory.

It is not superstition.

It is not spiritual guesswork.

It is the voice of Christ.

The same Jesus who called Lazarus from the tomb will call His people from the grave.`,
      `3. The resurrection happens when Jesus returns

1 Thessalonians 4 connects the resurrection with the Lord descending from heaven.

This means the great hope of believers is tied to Christ's return.

The dead in Christ rise.

The living faithful are gathered.

And God's people are forever with the Lord.`,
      `4. The resurrection brings victory over death

1 Corinthians 15 says the dead will be raised incorruptible.

That means resurrection is not just coming back to the same broken condition.

God gives victory over decay, weakness, and death.

The resurrection is restoration.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Incorruptible',
      lemma: 'ἄφθαρτος',
      transliteration: 'aphthartos',
      meaning: 'Not subject to decay, ruin, or death.',
      strongs: 'G862',
      reference: '1 Corinthians 15:52',
      note: `When Scripture says the dead will be raised incorruptible, it means God's resurrection life is not fragile like our present life.

Jesus does not raise His people into temporary repair.

He raises them into lasting victory.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The resurrection keeps the Bible's teaching on death clear.

Death is sleep.

The dead know nothing.

The dead do not communicate with the living.

The second death is final.

And the resurrection is the hope of God's people.

This is why Scripture points us forward, not sideways.

Forward to Christ's return.
Forward to the trumpet.
Forward to the voice of Jesus.
Forward to the dead being raised.
Forward to being forever with the Lord.

Christian hope is not escape from the body.

It is resurrection through Christ.`,
    },
    studyInsightBlocks: resurrectionHopeInsightBlocks,
    reflectPrompt: `How does the promise of resurrection change the way you think about grief, death, or the future?

Think honestly. Resurrection hope does not erase grief, but it gives grief somewhere to stand.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, practice hope that looks forward.

When death, grief, or fear feels heavy, say:

"Jesus will call the dead to life."

Let that sentence interrupt despair.

Then read 1 Thessalonians 4:16-17 slowly.

Do not rush it.

Let the promise settle.

The dead in Christ will rise.

And so shall we ever be with the Lord.

Prayer:

Jesus, thank You for the promise of resurrection. Thank You that Your voice can reach the grave. Help me grieve with hope, trust Your return, and anchor my future in Your victory over death. Keep my heart steady until the day You make all things new. Amen.`,
    prayer: '',
    completionSummary: `The resurrection is the Bible's hope for the dead. Jesus will call, the graves will open, and His people will be raised to lasting life.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'wh-l6-q1',
          prompt: "According to John 5:28-29, who will hear Jesus' voice?",
          options: [
            'All who are in the graves',
            'Only angels',
            'Only people alive on earth',
            'No one',
          ],
          correctIndex: 0,
          explanation: 'Jesus said all who are in the graves will hear His voice and come forth.',
        },
        {
          id: 'wh-l6-q2',
          prompt: 'According to 1 Thessalonians 4:16, what happens when the Lord descends from heaven?',
          options: [
            'The dead in Christ rise',
            'The dead begin haunting the living',
            'The resurrection is cancelled',
            'Death becomes eternal',
          ],
          correctIndex: 0,
          explanation:
            '1 Thessalonians 4 teaches that the dead in Christ rise when the Lord descends from heaven.',
        },
        {
          id: 'wh-l6-q3',
          prompt: 'According to 1 Corinthians 15:52, how will the dead be raised?',
          options: ['Incorruptible', 'Still broken forever', 'As spirits only', 'Without hope'],
          correctIndex: 0,
          explanation:
            'Paul says the dead will be raised incorruptible, meaning not subject to decay or death.',
        },
        {
          id: 'wh-l6-q4',
          prompt: "What is the Bible's central hope for the dead?",
          options: [
            'Resurrection through Jesus',
            'Communication with the living',
            'Wandering the earth',
            'Escaping Scripture',
          ],
          correctIndex: 0,
          explanation: 'The Bible points to resurrection through Jesus as the hope for the dead.',
        },
        {
          id: 'wh-l6-q5',
          kind: 'reflection',
          prompt: 'What part of the resurrection promise gives you the most hope?',
          explanation:
            'The resurrection promise centers on Jesus\' return, His voice, and His power to raise the dead to life.',
        },
      ],
    },
  },
  'forgiven-and-free': {
    openingThought: `Death is not only something people fear in the future.

Sometimes death shows up in the heart now.

Guilt can make a person feel buried.
Shame can make hope feel impossible.
Sin can make someone feel too far gone.

But Jesus came to free us from more than the grave.

He came to free us from guilt, condemnation, and the power of sin.

He tasted death for everyone so that forgiveness could be real, freedom could be offered, and eternal life could become our hope.`,
    scriptureRef: 'Hebrews 2:9',
    scriptureQuote:
      'But we see Jesus, who was made a little lower than the angels for the suffering of death... that he by the grace of God should taste death for every man.',
    scriptureAfterPrimary: `Jesus did not save us from a distance.

He entered death itself so we could receive life.`,
    scriptureSecondaryRef: 'Colossians 1:13-14',
    scriptureSecondaryQuote:
      'Who hath delivered us from the power of darkness, and hath translated us into the kingdom of his dear Son.',
    scriptureAfterSecondary: `Forgiveness is not vague comfort.

It is deliverance from darkness and translation into Christ's kingdom.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Colossians 1:14',
        quote: 'In whom we have redemption through his blood, even the forgiveness of sins.',
      },
      {
        type: 'scripture',
        reference: 'Psalm 32:1',
        quote: 'Blessed is he whose transgression is forgiven, whose sin is covered.',
      },
      {
        type: 'scripture',
        reference: 'Psalm 32:2',
        quote: 'Blessed is the man unto whom the LORD imputeth not iniquity.',
      },
      {
        type: 'scripture',
        reference: '2 Corinthians 5:10',
        quote: 'For we must all appear before the judgment seat of Christ.',
      },
    ],
    teachingPoints: [
      `1. Jesus tasted death for everyone

Hebrews says Jesus tasted death for every person.

That means He entered the place humanity feared most.

He did not save us from a distance.

He stepped into death so we could receive life.`,
      `2. Forgiveness is real in Christ

Colossians says we have redemption and forgiveness through Jesus.

Forgiveness is not God pretending sin never happened.

It is God dealing with sin through Christ and releasing the sinner from guilt.

Jesus does not offer vague comfort.

He offers real pardon.`,
      `3. The forgiven person is blessed

Psalm 32 describes the blessing of forgiven sin.

Guilt is heavy.

Forgiveness lifts the weight.

The gospel does not leave people buried under shame.

It brings them into honest freedom before God.`,
      `4. Judgment is not hopeless for those in Christ

2 Corinthians says every life will appear before Christ.

That is serious.

But the believer does not face judgment without a Savior.

The One who judges is also the One who died, forgives, restores, and represents His people.

In Jesus, truth and mercy meet.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Redemption',
      lemma: 'ἀπολύτρωσις',
      transliteration: 'apolutrosis',
      meaning: 'Rescue, release, or deliverance through a paid cost.',
      strongs: 'G629',
      reference: 'Colossians 1:14',
      note: `Redemption means Jesus paid the cost to rescue us from the power of darkness.

We are not freed because sin was cheap.

We are freed because Christ gave Himself.

Forgiveness is costly grace.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `This study began with death, but it ends with Jesus.

That is the right order.

The Bible's teaching on death is not meant to make us obsessed with the grave.

It is meant to lead us to Christ.

Jesus tasted death.
Jesus forgives sin.
Jesus breaks the power of darkness.
Jesus raises the dead.
Jesus ends sin forever.
Jesus gives eternal life.

That means the believer can live forgiven and free.

Not careless.
Not proud.
Not pretending sin does not matter.

Free.

Free to come to God honestly.
Free to receive mercy.
Free to reject deception.
Free to grieve with hope.
Free to wait for resurrection.
Free to trust that death will not have the last word.`,
    },
    studyInsightBlocks: forgivenFreeInsightBlocks,
    reflectPrompt: `Where do you most need to receive the freedom Jesus gives: guilt, fear of death, shame, spiritual confusion, or fear of judgment?

Choose one area honestly. Jesus does not invite you to hide it. He invites you to bring it to Him.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, practice living as someone Christ has forgiven.

When guilt speaks, answer with Scripture.

"There is therefore now no condemnation to them which are in Christ Jesus."

When fear of death rises, answer with Jesus.

"I am the resurrection, and the life."

When shame says you are too far gone, remember:

Jesus tasted death for every person.

That includes you.

Do not rehearse what Christ has forgiven more than you receive what Christ has done.

Prayer:

Jesus, thank You for tasting death for me. Thank You for forgiveness, redemption, and resurrection hope. Free me from guilt, fear, shame, and confusion. Help me trust Your word more than my feelings. Teach me to live forgiven, honest, and anchored in Your promise of eternal life. Amen.`,
    prayer: '',
    completionSummary:
      'You have completed What Happens When We Die? The Bible\'s answer is clear: death is sleep, resurrection is hope, deception should be rejected, and Jesus gives forgiveness, freedom, and eternal life.',
    seriesCompleteScreen: {
      title: 'Study Complete',
      message:
        'You have completed What Happens When We Die? The Bible\'s answer is clear: death is sleep, resurrection is hope, deception should be rejected, and Jesus gives forgiveness, freedom, and eternal life.',
      primaryCta: { label: 'Back to Foundations Path', href: '/paths/foundations' },
      secondaryCta: {
        label: 'Review this study',
        href: '/study-library/what-happens-when-we-die',
      },
    },
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'wh-l7-q1',
          prompt: 'According to Hebrews 2:9, what did Jesus taste for every person?',
          options: ['Death', 'Wealth', 'Confusion', 'Pride'],
          correctIndex: 0,
          explanation:
            'Hebrews 2:9 says Jesus tasted death for every person by the grace of God.',
        },
        {
          id: 'wh-l7-q2',
          prompt: 'According to Colossians 1:13-14, what do we have in Christ?',
          options: [
            'Redemption and forgiveness of sins',
            'Fear without hope',
            'Confusion about God',
            'A reason to stay in darkness',
          ],
          correctIndex: 0,
          explanation:
            'Colossians says we have redemption through Christ\'s blood and the forgiveness of sins.',
        },
        {
          id: 'wh-l7-q3',
          prompt: 'According to Psalm 32, who is blessed?',
          options: [
            'The person whose sin is forgiven',
            'The person who hides forever',
            'The person who rejects mercy',
            'The person who trusts deception',
          ],
          correctIndex: 0,
          explanation:
            'Psalm 32 says blessed is the one whose transgression is forgiven and whose sin is covered.',
        },
        {
          id: 'wh-l7-q4',
          prompt: 'What is the center of our hope about death?',
          options: ['Jesus', 'Fear', 'Superstition', 'Human guessing'],
          correctIndex: 0,
          explanation:
            'The Bible\'s hope about death centers on Jesus, who forgives, raises the dead, and gives eternal life.',
        },
        {
          id: 'wh-l7-q5',
          kind: 'reflection',
          prompt:
            'What truth from this study do you want to carry with you when fear, grief, or guilt feels heavy?',
          explanation:
            'The goal is not just information about death. The goal is hope in Jesus, who forgives, raises, restores, and gives eternal life.',
        },
      ],
    },
  },
}
