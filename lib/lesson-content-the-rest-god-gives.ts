import type { LessonContentBlock, StudyVisualLessonBlock } from '@/lib/lesson-content-blocks'
import type { LessonReaderContent } from '@/lib/lesson-content'
import type { LessonQuizPayload } from '@/lib/lesson-quiz-types'
import { CREATION_REST_PATTERN_DEFAULT_CAPTION } from '@/lib/creation-rest-pattern-stages'

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

const creationRedemptionFinishedVisual: StudyVisualLessonBlock = {
  type: 'studyVisual',
  title: 'Completed work',
  accent: 'stone',
  description: 'Sabbath rest points to completed work: creation and redemption.',
  payload: {
    variant: 'comparison',
    leftTitle: 'Creation',
    rightTitle: 'Redemption',
    leftItems: ['God finished His work', 'God rested the seventh day'],
    rightItems: ['Jesus finished His work', 'Jesus rested in the tomb on the Sabbath'],
  },
  footnote: 'We rest because God has finished what we could never do.',
}

const newCovenantSabbathVisual: StudyVisualLessonBlock = {
  type: 'studyVisual',
  title: 'New covenant life',
  accent: 'sage',
  description: 'The new covenant writes God\'s love within.',
  payload: {
    variant: 'comparison',
    leftTitle: 'Old misunderstanding',
    rightTitle: 'New covenant reality',
    leftItems: ['obedience to earn acceptance'],
    rightItems: ['grace received', 'heart renewed', 'obedience from love'],
  },
  footnote: 'Sabbath is received by grace and lived from a heart being renewed by God.',
}

const sabbathCreationRedemptionVisual: StudyVisualLessonBlock = {
  type: 'studyVisual',
  title: 'Sabbath remembers both',
  accent: 'sage',
  description: 'Sabbath rest remembers both the gift of life and the gift of salvation.',
  payload: {
    variant: 'comparison',
    leftTitle: 'Creation',
    rightTitle: 'Redemption',
    leftItems: ['God made us.'],
    rightItems: ['God saves us.'],
  },
  footnote: 'The Sabbath points backward to creation and forward to redemption every week.',
}

const restGodGivesSeriesRecapVisual: StudyVisualLessonBlock = {
  type: 'studyVisual',
  title: 'The Rest God Gives',
  accent: 'stone',
  description: 'Sabbath rest points to the deeper rest Jesus gives.',
  payload: {
    variant: 'sequence',
    steps: [
      { label: 'Creation completed' },
      { label: 'Humanity receives' },
      { label: 'Creator remembered' },
      { label: 'Redeemer remembered' },
      { label: 'Christ\'s work finished' },
      { label: 'New covenant heart renewed' },
      { label: 'Soul rest received' },
    ],
  },
  footnote: 'God is Creator. God is Redeemer. Jesus is Lord of the Sabbath. Salvation is finished in Christ.',
}

const giftInTimeInsightBlocks: LessonContentBlock[] = [
  {
    type: 'creationRestPattern',
    title: 'Creation Moves Toward Rest',
    caption: CREATION_REST_PATTERN_DEFAULT_CAPTION,
  },
  {
    type: 'scriptureChain',
    title: 'A Gift in Time',
    references: [
      { reference: 'Genesis 2:1-3' },
      { reference: 'Exodus 20:8-11' },
      { reference: 'Mark 2:27-28' },
      { reference: 'Psalm 100:3' },
    ],
  },
  {
    type: 'paragraph',
    text: 'Takeaway: The Sabbath began at creation as a gift of sacred time, reminding humanity to rest in God\'s completed work.',
  },
]

/** Guided reader lessons for "The Rest God Gives" (Foundations). */
export const theRestGodGivesSeriesLessonLibrary: Record<string, LessonReaderContent> = {
  'a-gift-in-time': {
    openingThought: `Before God gave humanity work to manage, He gave humanity rest to receive.

That matters.

The Sabbath did not begin as a burden.

It began as a gift.

At the end of creation week, God rested, blessed the seventh day, and made it holy. Not because He was tired, but because His work was complete.

Humanity's first full day was not a workday.

It was a rest day.

That means life with God begins with receiving, not achieving.

The Sabbath is a sacred reminder that we were made to live from God's completed work, not from anxious striving.`,
    scriptureRef: 'Genesis 2:2-3',
    scriptureQuote:
      'And on the seventh day God ended his work which he had made; and he rested on the seventh day from all his work which he had made.\n\nAnd God blessed the seventh day, and sanctified it: because that in it he had rested from all his work which God created and made.',
    scriptureAfterPrimary: `At creation, God set apart the seventh day as blessed and holy time.

This was not an afterthought.

It was part of His design for human life.`,
    scriptureSecondaryRef: 'Mark 2:27-28',
    scriptureSecondaryQuote:
      'And he said unto them, The sabbath was made for man, and not man for the sabbath: Therefore the Son of man is Lord also of the sabbath.',
    scriptureAfterSecondary: `Jesus restores the Sabbath to its original purpose.

It was made for human blessing, not human burden.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Exodus 20:8-11',
        quote:
          'Remember the sabbath day, to keep it holy. Six days shalt thou labour, and do all thy work: But the seventh day is the sabbath of the LORD thy God: in it thou shalt not do any work, thou, nor thy son, nor thy daughter, thy manservant, nor thy maidservant, nor thy cattle, nor thy stranger that is within thy gates: For in six days the LORD made heaven and earth, the sea, and all that in them is, and rested the seventh day: wherefore the LORD blessed the sabbath day, and hallowed it.',
      },
    ],
    teachingPoints: [
      `1. The Sabbath began at creation

The Sabbath was not first introduced at Sinai.

It appears in Genesis, before Israel existed as a nation.

God rested on the seventh day, blessed it, and sanctified it.

That means the Sabbath is rooted in creation itself.

It is part of God's original design for humanity.`,
      `2. God rested because His work was complete

God did not rest because He was exhausted.

He rested because creation was finished, good, ordered, and complete.

The seventh day was filled with God's satisfaction and delight.

Sabbath rest is not laziness.

It is celebration of God's completed work.`,
      `3. The Sabbath was made for humanity

Jesus said, "The sabbath was made for man."

That means the Sabbath was created as a gift for human beings.

It was not designed to crush people with religious pressure.

It was designed to bless people with time, worship, rest, and relationship with God.`,
      `4. The Sabbath points us back to dependence

Exodus connects the Sabbath with God as Creator.

We rest because God made us.

We rest because our lives are not self-created.

We rest because everything begins with God's power, provision, and grace.

The Sabbath reminds us that we are creatures, not machines.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Sanctified',
      lemma: 'קָדַשׁ',
      transliteration: 'qadash',
      meaning: 'Set apart, made holy, or marked for a special purpose.',
      strongs: 'H6942',
      reference: 'Genesis 2:3',
      note: `God sanctified the seventh day.

That means He set it apart as sacred time.

The Sabbath is not ordinary time with a religious label attached. It is time God Himself blessed and marked for relationship, worship, rest, and remembrance.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'scripture_connection',
      body: `Genesis shows a powerful pattern.

God forms the world.
God fills the world.
Then God rests.

Human beings are created near the end of the sixth day, after the work of creation is already done.

So humanity wakes up to a finished world.

Before Adam and Eve work the garden, they receive life as a gift.

Before they produce anything, they rest in what God has made.

That is the spirit of the Sabbath.

It reminds us that life does not begin with our output.

It begins with God's goodness.

The Sabbath tells us every week:

You are not your productivity.
You are not your performance.
You are not the source of your own life.

God is Creator.

You are invited to rest in Him.`,
    },
    studyInsightBlocks: giftInTimeInsightBlocks,
    reflectPrompt: `Do you usually see rest as a gift from God or as something you have to earn after doing enough?

Think about your work, schedule, responsibilities, anxiety, and the pressure to prove your value through productivity.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, practice receiving rest as a gift.

Choose one moment to stop producing, stop scrolling, stop striving, and remember:

God is Creator.

You are His creature.

Your worth is not measured by how much you get done.

If Sabbath has felt like pressure, ask God to help you see it differently.

Not as religious weight.

As sacred time.

As a gift.

As a weekly invitation to rest in the God who made you.

Prayer:

Father, thank You for creating the Sabbath as a gift in time. Thank You that life begins with Your goodness, not my performance. Teach me to rest in You without guilt, fear, or striving. Help me remember that You are my Creator, my Provider, and the source of my life. Make Sabbath rest a doorway into deeper trust and relationship with You. Amen.`,
    prayer: '',
    completionSummary: `The Sabbath began at creation as a gift in time. God blessed the seventh day, made it holy, and invited humanity to rest in His completed work.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'trgg-l1-q1',
          prompt: 'Where does the Sabbath first appear in Scripture?',
          options: [
            'At creation in Genesis',
            'During the reign of David',
            'In Babylon',
            'Only in the New Testament',
          ],
          correctIndex: 0,
          explanation:
            'The Sabbath first appears in Genesis 2, where God rests, blesses the seventh day, and sanctifies it.',
        },
        {
          id: 'trgg-l1-q2',
          prompt: 'Why did God rest on the seventh day?',
          options: [
            'His work of creation was complete',
            'He was physically exhausted',
            'Humanity invented the Sabbath later',
            'Creation had failed',
          ],
          correctIndex: 0,
          explanation:
            'God rested because His work was finished and complete, not because He was tired.',
        },
        {
          id: 'trgg-l1-q3',
          prompt: 'According to Mark 2:27, who was the Sabbath made for?',
          options: ['Humanity', 'Angels only', 'Kings only', 'No one'],
          correctIndex: 0,
          explanation:
            'Jesus said the Sabbath was made for man, showing that it was given as a gift for human beings.',
        },
        {
          id: 'trgg-l1-q4',
          prompt: 'What does it mean that God sanctified the seventh day?',
          options: [
            'He set it apart as holy',
            'He made it ordinary',
            'He removed its meaning',
            'He made it a burden',
          ],
          correctIndex: 0,
          explanation:
            'To sanctify means to set apart as holy or special. God marked the seventh day as sacred time.',
        },
        {
          id: 'trgg-l1-q5',
          kind: 'reflection',
          prompt:
            'What would change in your life if you saw Sabbath as a gift instead of a burden?',
          explanation:
            'The Sabbath reminds us that life begins with God\'s completed work and that rest is received before it is earned.',
        },
      ],
    },
  },
  'rest-before-work': {
    openingThought: `Most of us think life works like this:

Work first.
Prove yourself first.
Earn your place first.
Then maybe you can rest.

But creation tells a different story.

Human beings were created near the end of the sixth day. By the time Adam and Eve opened their eyes, God's work of creation was already complete.

They did not begin life by producing.

They began life by receiving.

Their first full day was the Sabbath.

Before they worked in the garden, they rested in God's finished work.

That is not a small detail.

It shows us that life with God begins with grace.`,
    scriptureRef: 'Genesis 1:31',
    scriptureQuote: 'And God saw every thing that he had made, and, behold, it was very good.',
    scriptureAfterPrimary: `Creation was complete before humanity's first breath.

God looked at everything He had made and declared it very good.

Human life began inside that finished goodness.`,
    scriptureSecondaryRef: 'Genesis 2:1-3',
    scriptureSecondaryQuote:
      'Thus the heavens and the earth were finished, and all the host of them.\n\nAnd on the seventh day God ended his work which he had made; and he rested on the seventh day from all his work which he had made.',
    scriptureAfterSecondary: `The world was finished before the Sabbath was blessed.

God rested because His work was complete, not because creation was incomplete.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Psalm 100:3',
        quote:
          'Know ye that the LORD he is God: it is he that hath made us, and not we ourselves; we are his people, and the sheep of his pasture.',
      },
      {
        type: 'scripture',
        reference: 'Acts 17:25',
        quote:
          'Neither is worshipped with men\'s hands, as though he needed any thing, seeing he giveth to all life, and breath, and all things.',
      },
    ],
    teachingPoints: [
      `1. Humanity entered a finished creation

Genesis says God saw everything He made, and it was very good.

Human beings did not wake up into a half-built world.

They woke up into a world already formed, filled, blessed, and ready for life.

Before they contributed anything, they received everything.

Life began as gift.`,
      `2. Rest came before human labor

Adam and Eve were created on the sixth day, and the next full day was the seventh day.

That means their first full day of life was not a workday.

It was a rest day.

This teaches a deep spiritual principle:

We do not work to create our worth.

We work from the life God has already given.`,
      `3. We are created beings, not self-made beings

Psalm 100 says God made us, and not we ourselves.

That confronts the lie of self-sufficiency.

We are dependent creatures.

Every breath, ability, opportunity, and moment of life comes from God.

Sabbath rest reminds us that we are receivers before we are workers.`,
      `4. Work is good, but it is not our identity

God gave humanity meaningful work.

But He gave rest first.

Work has dignity, but work is not our source of worth.

Productivity can become an idol when we use it to prove we matter.

The Sabbath breaks that cycle by reminding us that our value begins with God's creation and care.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Finished',
      lemma: 'כָּלָה',
      transliteration: 'kalah',
      meaning: 'Completed, brought to its intended fullness, lacking nothing necessary.',
      strongs: 'H3615',
      reference: 'Genesis 2:1',
      note: `Genesis says the heavens and the earth were finished.

Humanity entered life after God's work was complete.

The Sabbath reminds us that we begin by receiving God's finished work before we offer Him our work.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'scripture_connection',
      body: `The order of creation is teaching us something.

God works.
God finishes.
God rests.
Humanity receives.
Then humanity lives and works from what God has already provided.

That pattern matters because sin flips the order.

Sin says:

Work until you are worthy.
Perform until you are accepted.
Produce until you matter.
Strive until you feel safe.

But Sabbath says:

You are created by God.
You are sustained by God.
You are loved before you produce.
You are invited to rest before you work.

This is not laziness.

This is alignment.

The healthiest work flows from rest in God, not anxiety to prove yourself.`,
    },
    studyInsightBlocks: [
      {
        type: 'creationRestPattern',
        title: 'Rest Before Work',
        highlightedIndices: [5, 6],
        caption: 'Humanity\'s first full day was rest, not production.',
      },
      {
        type: 'scriptureChain',
        title: 'Receiving Before Producing',
        references: [
          { reference: 'Genesis 1:31' },
          { reference: 'Genesis 2:1-3' },
          { reference: 'Psalm 100:3' },
          { reference: 'Acts 17:25' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: Human beings begin as receivers of God\'s completed work. Sabbath rest reminds us that our worth is rooted in God, not productivity.',
      },
    ],
    reflectPrompt: `Where do you feel the pressure to prove your worth through work, achievement, or productivity?

Think about your job, goals, ministry, school, fitness, money, social media, or how you feel when you are not producing.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, practice receiving before producing.

Before you start one workday, pause for two minutes and say:

"God made me. God sustains me. My worth is not my output."

Then begin your work from rest, not panic.

If you feel anxious, rushed, or behind, come back to the same truth:

I am a creature before I am a worker.

I receive before I produce.

God's finished work comes before mine.

Prayer:

Father, thank You that I do not have to create my own worth. Thank You for making me, sustaining me, and giving me life as a gift. Teach me to work faithfully without turning productivity into my identity. Help me receive rest before work and live from trust instead of striving. Amen.`,
    prayer: '',
    completionSummary: `Humanity's first full day was rest, not work. Sabbath reminds us that life begins by receiving God's completed work before producing our own.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'trgg-l2-q1',
          prompt: 'When did humanity enter the creation story?',
          options: [
            'After God had already formed and filled the world',
            'Before God created light',
            'Before God made the earth',
            'After the Sabbath was removed',
          ],
          correctIndex: 0,
          explanation:
            'Humanity was created on the sixth day, after God had already formed and filled the world.',
        },
        {
          id: 'trgg-l2-q2',
          prompt: 'What was humanity\'s first full day?',
          options: [
            'The Sabbath day of rest',
            'A day of anxious labor',
            'A day of earning existence',
            'A day of creating the world',
          ],
          correctIndex: 0,
          explanation:
            'Adam and Eve were created on the sixth day, and their first full day was the seventh day, the Sabbath.',
        },
        {
          id: 'trgg-l2-q3',
          prompt: 'According to Psalm 100:3, what should we know?',
          options: [
            'The Lord made us, and not we ourselves',
            'We created ourselves',
            'Our worth comes from productivity only',
            'God does not care about creation',
          ],
          correctIndex: 0,
          explanation:
            'Psalm 100:3 says God made us, and not we ourselves. We are created beings dependent on Him.',
        },
        {
          id: 'trgg-l2-q4',
          prompt: 'What does this lesson teach about work?',
          options: [
            'Work is good, but it is not our identity',
            'Work is always sinful',
            'Rest has no value',
            'Productivity creates our worth',
          ],
          correctIndex: 0,
          explanation:
            'Work has dignity, but Sabbath reminds us that our worth comes from God, not our productivity.',
        },
        {
          id: 'trgg-l2-q5',
          kind: 'reflection',
          prompt:
            'What would change if you began your week from rest in God instead of pressure to prove yourself?',
          explanation:
            'Sabbath rest teaches that we receive life from God before we produce work for God or others.',
        },
      ],
    },
  },
  'remember-the-creator': {
    openingThought: `The Sabbath begins with one word:

Remember.

That word matters because human beings forget quickly.

We forget where life comes from.
We forget who made us.
We forget that we are dependent.
We forget that the world is not held together by our effort.

The Sabbath calls us back to reality.

God is Creator.

We are created.

He is the source.

We are receivers.

Every seventh day, God gives humanity a sacred reminder that life did not begin with our work. It began with His.`,
    scriptureRef: 'Exodus 20:8-11',
    scriptureQuote:
      'Remember the sabbath day, to keep it holy.\n\nFor in six days the LORD made heaven and earth, the sea, and all that in them is, and rested the seventh day: wherefore the LORD blessed the sabbath day, and hallowed it.',
    scriptureAfterPrimary: `The Sabbath command begins with memory.

God ties sacred rest to creation itself.

He made all things in six days and rested the seventh.`,
    scriptureSecondaryRef: 'Psalm 95:6-7',
    scriptureSecondaryQuote:
      'O come, let us worship and bow down: let us kneel before the LORD our maker.\n\nFor he is our God; and we are the people of his pasture, and the sheep of his hand.',
    scriptureAfterSecondary: `Worship flows from remembering who made us.

We belong to the God who formed us and cares for us.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Revelation 14:6-7',
        quote:
          'Saying with a loud voice, Fear God, and give glory to him; for the hour of his judgment is come: and worship him that made heaven, and earth, and the sea, and the fountains of waters.',
      },
      {
        type: 'scripture',
        reference: 'Genesis 2:3',
        quote:
          'And God blessed the seventh day, and sanctified it: because that in it he had rested from all his work which God created and made.',
      },
    ],
    teachingPoints: [
      `1. The Sabbath calls us to remember

God says, "Remember the sabbath day."

The command begins with memory because forgetfulness is spiritually dangerous.

When we forget God as Creator, we start living as if we are self-made, self-sustained, and self-owned.

Sabbath restores our memory.

It brings us back to the God who made us.`,
      `2. Sabbath worship is rooted in creation

Exodus gives creation as the reason for Sabbath rest.

God made heaven, earth, the sea, and everything in them.

Then He rested the seventh day.

The Sabbath is not an empty ritual.

It is a weekly act of worship that acknowledges God as Creator.`,
      `3. Creation gives us identity

Psalm 95 says, "He is our God" and "we are the people of his pasture."

Because God made us, our identity begins with Him.

We are not accidents.

We are not machines.

We are not merely consumers, workers, or performers.

We are creatures made for relationship with our Maker.`,
      `4. The final call to worship points back to the Creator

Revelation calls the world to worship the One who made heaven, earth, sea, and fountains of waters.

That language echoes the Sabbath command.

At the end of history, God calls people back to true worship.

The Sabbath helps us remember who deserves our worship and why.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Remember',
      lemma: 'זָכַר',
      transliteration: 'zakar',
      meaning: 'To call back to mind, keep present, and act in light of what is true.',
      strongs: 'H2142',
      reference: 'Exodus 20:8',
      note: `In Scripture, remembering is not just mental recall.

To remember the Sabbath is to live in light of the truth that God is Creator.

It means setting apart sacred time to worship, rest, and return to dependence on Him.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'scripture_connection',
      body: `The Sabbath protects us from spiritual amnesia.

Without regular remembrance, we start believing lies.

"I made myself."

"I sustain myself."

"My worth comes from my output."

"My life belongs to me."

"My time is mine alone."

But Sabbath tells the truth:

God made me.
God sustains me.
God gives me life.
God owns time.
God is worthy of worship.

This is why the Sabbath is more than rest from activity.

It is a return to reality.

It teaches the soul to bow before the Creator and receive life as a gift.`,
    },
    studyInsightBlocks: [
      {
        type: 'creationRestPattern',
        title: 'Remember the Creator',
        highlightedIndices: [6],
        caption: 'The Sabbath reminds us that God is Creator and we live by His gift.',
      },
      {
        type: 'scriptureChain',
        title: 'Worship the Creator',
        references: [
          { reference: 'Genesis 2:1-3' },
          { reference: 'Exodus 20:8-11' },
          { reference: 'Psalm 95:6-7' },
          { reference: 'Revelation 14:6-7' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: The Sabbath calls us to remember, worship, and rest in the God who created all things.',
      },
    ],
    reflectPrompt: `Where are you most tempted to live as if everything depends on you?

Think about control, work, money, planning, ministry, family, goals, or the pressure to hold your life together by yourself.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, use the Sabbath command as a reset.

Pause and say:

"God is Creator. I am created."

Then name one area where you have been acting like the source instead of trusting the Source.

Maybe you have been carrying work like your worth depends on it.

Maybe you have been managing your future like God is absent.

Maybe you have treated your time as if it all belongs to you.

Let Sabbath remembrance call you back.

You are not the Creator.

That is good news.

Prayer:

Father, thank You for being my Creator. Thank You that I do not have to live as if everything depends on me. Help me remember the Sabbath as sacred time with You. Teach me to worship, rest, and live from dependence instead of self-sufficiency. Bring my heart back to You, the Maker and Sustainer of my life. Amen.`,
    prayer: '',
    completionSummary: `The Sabbath calls us to remember the Creator. It brings us back to worship, dependence, and the truth that life begins with God's completed work.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'trgg-l3-q1',
          prompt: 'What is the first word of the Sabbath commandment in Exodus 20:8?',
          options: ['Remember', 'Forget', 'Ignore', 'Replace'],
          correctIndex: 0,
          explanation:
            'The Sabbath commandment begins with "Remember," calling God\'s people to keep sacred time in view.',
        },
        {
          id: 'trgg-l3-q2',
          prompt: 'According to Exodus 20:11, why is the Sabbath connected to creation?',
          options: [
            'Because God made heaven and earth in six days and rested the seventh day',
            'Because humans invented rest later',
            'Because creation was unfinished',
            'Because God needed help creating',
          ],
          correctIndex: 0,
          explanation:
            'Exodus grounds the Sabbath in God\'s six-day work of creation and His rest on the seventh day.',
        },
        {
          id: 'trgg-l3-q3',
          prompt: 'According to Psalm 95:6-7, why should we worship and bow down?',
          options: [
            'The Lord is our Maker',
            'We created ourselves',
            'Worship is unnecessary',
            'God is distant and unknown',
          ],
          correctIndex: 0,
          explanation:
            'Psalm 95 calls us to worship because the Lord is our Maker and we are His people.',
        },
        {
          id: 'trgg-l3-q4',
          prompt: 'What does Revelation 14:7 call people to do?',
          options: [
            'Worship Him who made heaven, earth, sea, and fountains of waters',
            'Worship human achievement',
            'Forget the Creator',
            'Replace God\'s commandments',
          ],
          correctIndex: 0,
          explanation:
            'Revelation calls the world to worship the Creator, using language that echoes the Sabbath commandment.',
        },
        {
          id: 'trgg-l3-q5',
          kind: 'reflection',
          prompt:
            'How can remembering God as Creator help you release anxiety or self-sufficiency?',
          explanation:
            'The Sabbath reminds us that God is the source of life. We can rest because we are created, sustained, and cared for by Him.',
        },
      ],
    },
  },
  'remember-the-redeemer': {
    openingThought: `The Sabbath does not only point backward to creation.

It also points to redemption.

God did not only make us.

He rescues us.

In Exodus, the Sabbath command reminds us that God created the world. In Deuteronomy, the same command reminds Israel that God delivered them from slavery.

That means Sabbath rest carries two great truths:

God is Creator.

God is Redeemer.

We rest because life is His gift.

We rest because salvation is His work.

The Sabbath reminds us every week that we are not saved by anxious striving, but by the power and grace of God.`,
    scriptureRef: 'Deuteronomy 5:15',
    scriptureQuote:
      'And remember that thou wast a servant in the land of Egypt, and that the LORD thy God brought thee out thence through a mighty hand and by a stretched out arm: therefore the LORD thy God commanded thee to keep the sabbath day.',
    scriptureAfterPrimary: `The Sabbath is not only about creation.

It is also about deliverance.

Israel was told to remember slavery and God's mighty rescue.`,
    scriptureSecondaryRef: 'Ephesians 2:8-9',
    scriptureSecondaryQuote:
      'For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: Not of works, lest any man should boast.',
    scriptureAfterSecondary: `Salvation is received, not earned.

Grace comes before boasting.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Ephesians 2:10',
        quote: 'For we are his workmanship, created in Christ Jesus unto good works, which God hath before ordained that we should walk in them.',
      },
      {
        type: 'scripture',
        reference: 'Psalm 51:10-12',
        quote:
          'Create in me a clean heart, O God; and renew a right spirit within me.\n\nRestore unto me the joy of thy salvation.',
      },
      {
        type: 'scripture',
        reference: 'Titus 3:5',
        quote:
          'Not by works of righteousness which we have done, but according to his mercy he saved us, by the washing of regeneration, and renewing of the Holy Ghost.',
      },
    ],
    teachingPoints: [
      `1. Sabbath remembers deliverance

In Deuteronomy, the Sabbath is connected to Israel's deliverance from Egypt.

God tells them to remember that they were slaves and that He brought them out by His mighty hand.

They did not free themselves.

God delivered them.

The Sabbath became a weekly reminder that redemption is God's work.`,
      `2. Salvation is a gift, not a wage

Ephesians says we are saved by grace through faith, not by works.

That is the heartbeat of redemption.

We do not earn salvation like a paycheck.

We receive it as a gift.

The Sabbath trains the soul to stop striving and remember that God saves by grace.`,
      `3. Redemption creates new life

Ephesians also says we are created in Christ Jesus unto good works.

That means grace does not leave us unchanged.

God saves first.

Then He creates a new life within us.

Good works do not purchase salvation.

They flow from the salvation God has already given.`,
      `4. God creates clean hearts

Psalm 51 uses creation language for spiritual renewal:

"Create in me a clean heart."

The God who created the world is the same God who recreates the heart.

Sabbath reminds us that both creation and redemption depend on God's power.

We cannot create ourselves.

We cannot save ourselves.

We receive both life and salvation from Him.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Redeemer',
      lemma: 'גֹּאֵל',
      transliteration: 'goel',
      meaning: 'One who rescues, delivers, or buys back someone from bondage.',
      strongs: 'H1350',
      reference: 'Deuteronomy 5:15',
      note: `God is not only our Creator.

He is our Redeemer.

The Sabbath reminds us that the God who made us is also the God who saves us from bondage, restores the heart, and gives salvation as a gift of grace.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'scripture_connection',
      body: `The Sabbath is a protest against self-salvation.

Every week, it tells the truth:

You did not create yourself.

You cannot redeem yourself.

You cannot earn God's favor by working hard enough.

That does not mean obedience does not matter.

It means obedience belongs in the right place.

Grace comes first.

Salvation comes first.

God's mighty work comes first.

Then good works flow from a heart made new.

The Sabbath protects us from legalism because it points to a finished work we receive, not a ladder we climb.

It reminds us that God delivers before He asks us to walk in freedom.`,
    },
    studyInsightBlocks: [
      sabbathCreationRedemptionVisual,
      {
        type: 'scriptureChain',
        title: 'Remember the Redeemer',
        references: [
          { reference: 'Deuteronomy 5:12-15' },
          { reference: 'Ephesians 2:8-10' },
          { reference: 'Psalm 51:10-12' },
          { reference: 'Titus 3:5' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: The Sabbath reminds us that salvation is God\'s work. We rest in grace before we walk in good works.',
      },
    ],
    reflectPrompt: `Where are you tempted to treat salvation like something you must earn instead of something God gives?

Think about guilt, spiritual pressure, performance, fear of not doing enough, or trying to prove you are worthy of God's love.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, let Sabbath remind you of redemption.

Pause and say:

"God saves by grace."

Then ask yourself:

"Am I working from grace, or am I working to earn grace?"

There is a difference.

Working to earn grace produces anxiety.

Working from grace produces gratitude.

Choose one act of obedience this week, but do it from the right place.

Not to make God love you.

Because He already has loved you in Christ.

Prayer:

Father, thank You for being my Redeemer. Thank You for saving by grace, not by my works. Teach me to rest in Your finished work instead of striving to prove myself. Create in me a clean heart and restore the joy of Your salvation. Let my obedience flow from gratitude, trust, and love. Amen.`,
    prayer: '',
    completionSummary: `The Sabbath remembers the Redeemer. It reminds us that salvation is God's finished work, received by grace, and followed by a life made new.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'trgg-l4-q1',
          prompt: 'According to Deuteronomy 5:15, what was Israel told to remember?',
          options: [
            'That they were servants in Egypt and God delivered them',
            'That they freed themselves from Egypt',
            'That Sabbath had no meaning',
            'That work saves the soul',
          ],
          correctIndex: 0,
          explanation:
            'Deuteronomy connects the Sabbath with Israel\'s deliverance from Egypt by God\'s mighty hand.',
        },
        {
          id: 'trgg-l4-q2',
          prompt: 'According to Ephesians 2:8-9, how are we saved?',
          options: [
            'By grace through faith',
            'By works alone',
            'By earning enough favor',
            'By comparing ourselves to others',
          ],
          correctIndex: 0,
          explanation:
            'Ephesians says we are saved by grace through faith, not of works. Salvation is the gift of God.',
        },
        {
          id: 'trgg-l4-q3',
          prompt: 'According to Psalm 51:10, what does David ask God to create?',
          options: [
            'A clean heart',
            'A better reputation only',
            'A new nation only',
            'A stronger human effort',
          ],
          correctIndex: 0,
          explanation:
            'David asks God to create a clean heart, showing that spiritual renewal depends on God\'s creative power.',
        },
        {
          id: 'trgg-l4-q4',
          prompt: 'What does the Sabbath remind us about redemption?',
          options: [
            'Salvation is God\'s work and gift',
            'Salvation is earned by anxiety',
            'God only creates but never saves',
            'Grace removes the need for Jesus',
          ],
          correctIndex: 0,
          explanation:
            'The Sabbath points to redemption by reminding us that God delivers and saves by His grace.',
        },
        {
          id: 'trgg-l4-q5',
          kind: 'reflection',
          prompt:
            'How can Sabbath rest help you move from striving for acceptance to resting in God\'s grace?',
          explanation:
            'Sabbath rest reminds us that God\'s saving work comes before our response. We obey from grace, not to earn grace.',
        },
      ],
    },
  },
  'it-is-finished': {
    openingThought: `Some words change everything.

At the cross, Jesus said:

"It is finished."

He did not say, "It is almost done."

He did not say, "Now finish what I started."

He declared that the work the Father gave Him was complete.

That matters for Sabbath.

The Sabbath points us to God's completed work in creation. The cross points us to Christ's completed work in redemption.

Both teach the same deep truth:

We rest because God has finished what we could never do.`,
    scriptureRef: 'John 19:30',
    scriptureQuote:
      'When Jesus therefore had received the vinegar, he said, It is finished: and he bowed his head, and gave up the ghost.',
    scriptureAfterPrimary: `These were not words of defeat.

They were words of completion.

The saving work the Father gave the Son had reached its goal.`,
    scriptureSecondaryRef: 'John 17:4',
    scriptureSecondaryQuote:
      'I have glorified thee on the earth: I have finished the work which thou gavest me to do.',
    scriptureAfterSecondary: `Jesus lived with a clear mission and completed it faithfully.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Luke 23:54-56',
        quote:
          'And that day was the preparation, and the sabbath drew on.\n\nAnd they returned, and prepared spices and ointments; and rested the sabbath day according to the commandment.',
      },
      {
        type: 'scripture',
        reference: 'Hebrews 10:12',
        quote:
          'But this man, after he had offered one sacrifice for sins for ever, sat down on the right hand of God.',
      },
    ],
    teachingPoints: [
      `1. Jesus finished the work the Father gave Him

In John 17, Jesus says He finished the work the Father gave Him to do.

His life was not random.

His mission was clear.

He came to reveal the Father, live faithfully, bear sin, defeat the enemy, and open the way back to God.

At the cross, He completed that saving work.`,
      `2. "It is finished" means redemption is complete

When Jesus said, "It is finished," He was not announcing defeat.

He was announcing completion.

The debt had been paid.
The sacrifice had been offered.
The promise had been kept.
The way to God had been opened.

Redemption rests on Christ's finished work, not our unfinished striving.`,
      `3. Jesus rested in the tomb on the Sabbath

Luke tells us Jesus died on preparation day, and the Sabbath drew on.

His followers rested the Sabbath according to the commandment.

Jesus rested in the tomb over the Sabbath after finishing the work of redemption.

That connection is powerful.

At creation, God rested after finishing His work.

At redemption, Christ rested after finishing His work.`,
      `4. Christ's sacrifice is enough

Hebrews says Jesus offered one sacrifice for sins forever.

That means His sacrifice does not need to be repeated or improved.

We do not add to His saving work.

We receive it.

The Sabbath reminds us weekly that God's completed work is enough.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Finished',
      lemma: 'τετέλεσται',
      transliteration: 'tetelestai',
      meaning: 'Completed, fulfilled, brought to its intended goal.',
      strongs: 'G5055',
      reference: 'John 19:30',
      note: `When Jesus said, "It is finished," He declared that His saving work had reached its goal.

The cross was not failure.

It was fulfillment.

Sabbath rest helps us remember that salvation is grounded in Christ's completed work, not human effort.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The Sabbath and the cross speak the same language.

Creation says:

God finished.

Redemption says:

Christ finished.

Creation rest reminds us that life is a gift.

Redemption rest reminds us that salvation is a gift.

This is why Sabbath cannot be reduced to legalism.

At its heart, Sabbath is a weekly witness against anxious self-salvation.

It tells us to stop trying to be the source.

Stop trying to be the Savior.

Stop trying to finish what only Christ could complete.

Jesus' words still stand:

"It is finished."`,
    },
    studyInsightBlocks: [
      creationRedemptionFinishedVisual,
      {
        type: 'scriptureChain',
        title: 'It Is Finished',
        references: [
          { reference: 'John 17:4' },
          { reference: 'John 19:30' },
          { reference: 'Luke 23:54-56' },
          { reference: 'Hebrews 10:12' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: The Sabbath points to rest in God\'s completed work. Jesus finished the work of redemption, and His sacrifice is enough.',
      },
    ],
    reflectPrompt: `Where are you still trying to finish what Jesus has already completed?

Think about guilt, acceptance, forgiveness, salvation, spiritual pressure, or the need to prove yourself to God.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, practice resting in Christ's finished work.

When guilt says, "Do more so God will accept you," answer:

"It is finished."

When shame says, "You are still not enough," answer:

"Christ is enough."

When anxiety says, "You must hold everything together," answer:

"God is the source. Jesus is the Savior."

Let Sabbath become more than a day off.

Let it become a weekly protest against self-salvation.

Prayer:

Jesus, thank You for finishing the work of redemption. Thank You that Your sacrifice is enough and that I do not have to save myself. Teach me to rest in what You have completed. Free me from anxious striving, guilt-driven religion, and the pressure to prove myself. Help me receive Sabbath as a reminder of Your finished work. Amen.`,
    prayer: '',
    completionSummary: `Jesus finished the work of redemption. Sabbath rest points us to creation completed and salvation accomplished in Christ.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'trgg-l5-q1',
          prompt: 'What did Jesus say on the cross in John 19:30?',
          options: [
            '"It is finished"',
            '"It is almost done"',
            '"Finish this for Me"',
            '"Redemption failed"',
          ],
          correctIndex: 0,
          explanation:
            'Jesus declared, "It is finished," showing that His saving work had reached completion.',
        },
        {
          id: 'trgg-l5-q2',
          prompt: 'According to John 17:4, what did Jesus say He had finished?',
          options: [
            'The work the Father gave Him to do',
            'The work of creating Rome',
            'The work of avoiding suffering',
            'The work of ending Scripture',
          ],
          correctIndex: 0,
          explanation:
            'Jesus said He had finished the work the Father gave Him to do.',
        },
        {
          id: 'trgg-l5-q3',
          prompt: 'According to Luke 23:54-56, what did Jesus\' followers do as the Sabbath came?',
          options: [
            'Rested the Sabbath day according to the commandment',
            'Rejected the Sabbath',
            'Rewrote the commandments',
            'Pretended Jesus had not died',
          ],
          correctIndex: 0,
          explanation:
            'Luke says Jesus\' followers rested the Sabbath day according to the commandment.',
        },
        {
          id: 'trgg-l5-q4',
          prompt: 'According to Hebrews 10:12, how many sacrifices for sins did Jesus offer?',
          options: [
            'One sacrifice for sins forever',
            'Many incomplete sacrifices',
            'No sacrifice at all',
            'A temporary symbol only',
          ],
          correctIndex: 0,
          explanation:
            'Hebrews says Jesus offered one sacrifice for sins forever, showing the sufficiency of His work.',
        },
        {
          id: 'trgg-l5-q5',
          kind: 'reflection',
          prompt:
            'How can the words "It is finished" help you rest from trying to earn God\'s acceptance?',
          explanation:
            'Christ\'s finished work means salvation rests on what He has completed, not what we anxiously try to prove.',
        },
      ],
    },
  },
  'the-sabbath-and-the-new-covenant': {
    openingThought: `Some people think grace cancels obedience.

But Scripture shows something better.

Grace changes where obedience comes from.

In the new covenant, God does not erase His law. He writes it in the heart.

That means Sabbath rest is not about trying to earn salvation. It is about living from a restored relationship with God.

The Sabbath belongs inside the life of grace because it reminds us that God creates, God saves, and God transforms.

We do not keep Sabbath to make God love us.

We receive Sabbath because God already does.`,
    scriptureRef: 'Jeremiah 31:33',
    scriptureQuote:
      'I will put my law in their inward parts, and write it in their hearts; and will be their God, and they shall be my people.',
    scriptureAfterPrimary: `This is not shallow religion.

God is restoring the inner life where motives, desires, and choices are formed.`,
    scriptureSecondaryRef: 'Hebrews 8:10',
    scriptureSecondaryQuote:
      'I will put my laws into their mind, and write them in their hearts.',
    scriptureAfterSecondary: `The new covenant does not describe a lawless life.

It describes a transformed life.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Isaiah 56:6-7',
        quote:
          'Every one that keepeth the sabbath from polluting it, and taketh hold of my covenant.\n\nEven them will I bring to my holy mountain, and make them joyful in my house of prayer.',
      },
      {
        type: 'scripture',
        reference: 'Acts 13:42-44',
        quote:
          'And the next sabbath day came almost the whole city together to hear the word of God.',
      },
    ],
    teachingPoints: [
      `1. The new covenant reaches the heart

Jeremiah says God writes His law in the heart.

That means the new covenant is not shallow religion.

God is not only changing outward behavior.

He is restoring the inner life where motives, desires, and choices are formed.

Sabbath rest becomes meaningful when the heart receives it as love, not pressure.`,
      `2. Grace does not erase God's law

Hebrews repeats the promise that God writes His laws in the mind and heart.

The new covenant does not describe a lawless life.

It describes a transformed life.

God's law moves from external command to inward desire through the work of His Spirit.`,
      `3. Sabbath belongs to covenant relationship

Isaiah connects Sabbath keeping with taking hold of God's covenant.

This shows that Sabbath is relational.

It is not an empty ritual.

It is sacred time where God invites His people into worship, joy, and nearness.

The Sabbath is not only about stopping work.

It is about belonging to God.`,
      `4. The early believers still gathered on Sabbath

Acts shows people gathering on the Sabbath to hear the word of God.

This reminds us that Sabbath remained a meaningful time for worship, Scripture, and spiritual community.

The Sabbath was not meant to be a cold rule.

It was a weekly rhythm of grace, truth, and fellowship.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Covenant',
      lemma: 'διαθήκη',
      transliteration: 'diathēkē',
      meaning: 'A binding relationship promise.',
      strongs: 'G1242',
      reference: 'Jeremiah 31:33',
      note: `A covenant is more than a contract.

It is a relationship shaped by promise, faithfulness, and love.

In the new covenant, God writes His law in the heart so obedience flows from restored relationship instead of fear-based performance.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The Sabbath makes sense inside the new covenant.

Why?

Because the new covenant is about God doing inside us what we could never produce on our own.

God writes His law in the heart.
God gives His Spirit.
God creates new desires.
God restores relationship.
God teaches obedience from love.

That means Sabbath is not a ladder to climb toward acceptance.

It is a gift received by people who are already being drawn into God's grace.

The Sabbath reminds us that holiness is not self-manufactured.

Sacred time is received.

Rest is received.

Salvation is received.

Transformation is received.

Then obedience becomes response.`,
    },
    studyInsightBlocks: [
      newCovenantSabbathVisual,
      {
        type: 'scriptureChain',
        title: 'Sabbath in the New Covenant',
        references: [
          { reference: 'Jeremiah 31:31-34' },
          { reference: 'Hebrews 8:10' },
          { reference: 'Isaiah 56:6-7' },
          { reference: 'Acts 13:42-44' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: The Sabbath belongs within new covenant life as sacred time received by grace and lived from a heart being renewed by God.',
      },
    ],
    reflectPrompt: `Do you tend to see Sabbath obedience as pressure, privilege, or relationship?

Think honestly about whether Sabbath feels like a burden to perform, a gift to receive, or a weekly invitation into deeper trust with God.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, ask God to shift Sabbath from outward routine to inward relationship.

Before Sabbath begins, pray:

"Lord, write Your love deeper in my heart."

Then choose one simple way to receive the day differently.

Worship without rushing.
Read Scripture slowly.
Put down unnecessary work.
Spend time with people intentionally.
Notice what God has already done.
Rest without guilt.

Do not treat Sabbath like a spiritual scoreboard.

Treat it like sacred time with the God who saves and renews you.

Prayer:

Father, thank You for the new covenant promise. Thank You for writing Your law in hearts and minds through Your Spirit. Help me receive the Sabbath as a gift of grace, not a burden of performance. Teach me to rest, worship, and obey from love. Make my heart new in Jesus. Amen.`,
    prayer: '',
    completionSummary: `The Sabbath belongs inside the new covenant life. God writes His law in the heart so rest, worship, and obedience flow from grace instead of fear.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'trgg-l6-q1',
          prompt: 'According to Jeremiah 31:33, where does God promise to write His law?',
          options: [
            'In the heart',
            'On Roman coins',
            'In the clouds only',
            'On city walls only',
          ],
          correctIndex: 0,
          explanation:
            'Jeremiah says God will put His law in His people\'s inward parts and write it in their hearts.',
        },
        {
          id: 'trgg-l6-q2',
          prompt: 'What does Hebrews 8:10 say God will put into His people\'s minds and hearts?',
          options: [
            'His laws',
            'Fear of grace',
            'Confusion',
            'Self-salvation',
          ],
          correctIndex: 0,
          explanation:
            'Hebrews repeats the new covenant promise that God will write His laws in the mind and heart.',
        },
        {
          id: 'trgg-l6-q3',
          prompt: 'What does Isaiah 56 connect with taking hold of God\'s covenant?',
          options: [
            'Keeping the Sabbath',
            'Rejecting worship',
            'Ignoring prayer',
            'Forgetting creation',
          ],
          correctIndex: 0,
          explanation:
            'Isaiah speaks of those who keep the Sabbath and take hold of God\'s covenant.',
        },
        {
          id: 'trgg-l6-q4',
          prompt: 'What happened on the next Sabbath in Acts 13?',
          options: [
            'Almost the whole city came together to hear the word of God',
            'No one gathered for worship',
            'Scripture was rejected completely',
            'Sabbath was called meaningless',
          ],
          correctIndex: 0,
          explanation:
            'Acts 13 says almost the whole city came together on the next Sabbath to hear the word of God.',
        },
        {
          id: 'trgg-l6-q5',
          kind: 'reflection',
          prompt:
            'How can Sabbath become more about relationship with God than religious performance?',
          explanation:
            'The new covenant writes God\'s law in the heart, so Sabbath obedience flows from grace, love, and restored relationship.',
        },
      ],
    },
  },
  'rest-for-your-soul': {
    openingThought: `Some people stop working, but they still do not rest.

The body sits down, but the mind keeps running.

The calendar clears, but the soul stays heavy.

Jesus knows that kind of weariness.

That is why He does not only invite the tired to take a break.

He invites the weary to come to Him.

Sabbath rest points to something deeper than time off.

It points to the rest Jesus gives the soul.

The rest God gives is not escape from life.

It is life restored in His presence.`,
    scriptureRef: 'Matthew 11:28-30',
    scriptureQuote:
      'Come unto me, all ye that labour and are heavy laden, and I will give you rest.\n\nTake my yoke upon you, and learn of me.\n\nFor my yoke is easy, and my burden is light.',
    scriptureAfterPrimary: `This is the center of true rest.

Jesus does not first say, "Fix yourself."

He says, "Come."`,
    scriptureSecondaryRef: 'Mark 2:27-28',
    scriptureSecondaryQuote:
      'The sabbath was made for man, and not man for the sabbath.\n\nTherefore the Son of man is Lord also of the sabbath.',
    scriptureAfterSecondary: `Sabbath rest is a gift, not a crushing burden.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Hebrews 4:9-10',
        quote:
          'There remaineth therefore a rest to the people of God.\n\nFor he that is entered into his rest, he also hath ceased from his own works, as God did from his.',
      },
      {
        type: 'scripture',
        reference: 'Psalm 62:5',
        quote: 'My soul, wait thou only upon God; for my expectation is from him.',
      },
    ],
    teachingPoints: [
      `1. Jesus invites the weary to come

Jesus says, "Come unto me."

That is the center of true rest.

He does not first say, "Fix yourself."

He says, "Come."

The rest Jesus gives begins in relationship with Him.

He welcomes the burdened, the tired, the anxious, and the spiritually worn down.`,
      `2. Sabbath was made as a gift

Jesus said the Sabbath was made for humanity.

That means Sabbath rest is not meant to crush the soul.

It is meant to bless, restore, and reconnect us with God.

The Sabbath is sacred time where Jesus reminds us that we are not machines, slaves, or self-made beings.

We are loved creatures invited into rest.`,
      `3. God's rest means ceasing from self-saving works

Hebrews says the one who enters God's rest ceases from his own works.

This does not mean obedience stops.

It means anxious self-salvation stops.

We rest from trying to earn what God gives by grace.

We stop carrying the burden of proving our worth before Him.`,
      `4. True rest is found in trusting God

Psalm 62 says, "My soul, wait thou only upon God."

Soul rest comes when the heart stops leaning on everything else as ultimate.

Work cannot give this rest.

Success cannot give this rest.

Entertainment cannot give this rest.

Only God can quiet the soul at its deepest level.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Rest',
      lemma: 'ἀναπαύω',
      transliteration: 'anapauō',
      meaning: 'Relief, renewal, ceasing from striving, and being settled in God\'s care.',
      strongs: 'G373',
      reference: 'Matthew 11:28',
      note: `Biblical rest is more than stopping activity.

It is trusting God as Creator, Redeemer, Provider, and Lord.

Sabbath rest points to the deeper soul rest Jesus gives to those who come to Him.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The Rest God Gives has shown one clear movement:

God created the Sabbath as a gift in time.

Humanity began with rest before work.

The Sabbath calls us to remember the Creator.

The Sabbath calls us to remember the Redeemer.

Jesus finished the work of redemption.

The Sabbath belongs within new covenant grace.

Now Jesus invites the weary into rest for the soul.

This is the heart of the study.

Sabbath is not merely about stopping work.

It is about remembering whose work saves us.

It is about returning to the God who made us, redeemed us, and renews us.

The rest God gives is weekly, spiritual, relational, and deeply practical.

It teaches the soul:

God is Creator.
God is Redeemer.
Jesus is Lord of the Sabbath.
Salvation is finished in Christ.
I can stop striving and come near.`,
    },
    studyInsightBlocks: [
      restGodGivesSeriesRecapVisual,
      {
        type: 'scriptureChain',
        title: 'Rest for Your Soul',
        references: [
          { reference: 'Matthew 11:28-30' },
          { reference: 'Mark 2:27-28' },
          { reference: 'Hebrews 4:9-10' },
          { reference: 'Psalm 62:5' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: The Sabbath is God\'s gift of sacred time, pointing to the deeper soul rest Jesus gives to the weary.',
      },
    ],
    reflectPrompt: `Where is your soul most tired right now?

Think about striving, guilt, pressure, anxiety, grief, work, ministry, relationships, or trying to prove your worth.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, let Sabbath rest become soul rest.

Do not only stop working.

Come to Jesus.

Before or during Sabbath, take a quiet moment and pray:

"Jesus, this is what I have been carrying."

Then name it honestly.

A fear.
A burden.
A pressure.
A guilt.
A responsibility.
A place where you feel worn down.

Then receive His invitation:

"Come unto me... and I will give you rest."

Let Sabbath become a weekly return to the One who can actually quiet the soul.

Prayer:

Jesus, thank You for inviting the weary to come to You. Thank You for Sabbath as a gift of sacred time and for the deeper rest You give the soul. Help me stop striving for what only You can give. Teach me to rest in You as Creator, Redeemer, and Lord. Quiet my heart in Your love and lead me into the freedom of Your finished work. Amen.`,
    prayer: '',
    completionSummary: `You have completed The Rest God Gives. The Sabbath is God's weekly gift of sacred time, reminding us that creation and salvation are His finished work, and that Jesus gives true rest to the soul.`,
    seriesCompleteScreen: {
      title: 'Study Complete',
      message:
        'You have completed The Rest God Gives. The Sabbath is God\'s weekly gift of sacred time, reminding us that creation and salvation are His finished work, and that Jesus gives true rest to the soul.',
      primaryCta: { label: 'Back to Foundations Path', href: '/paths/foundations' },
      secondaryCta: {
        label: 'Review this study',
        href: '/study-library/the-rest-god-gives',
      },
    },
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'trgg-l7-q1',
          prompt: 'According to Matthew 11:28, who does Jesus invite to come to Him?',
          options: [
            'All who labour and are heavy laden',
            'Only people who feel perfect',
            'Only people with no burdens',
            'Those who never need rest',
          ],
          correctIndex: 0,
          explanation:
            'Jesus invites all who labor and are heavy laden to come to Him, promising rest.',
        },
        {
          id: 'trgg-l7-q2',
          prompt: 'According to Mark 2:27, who was the Sabbath made for?',
          options: ['Humanity', 'Angels only', 'No one', 'Kings only'],
          correctIndex: 0,
          explanation:
            'Jesus said the Sabbath was made for man, showing it was given as a gift for human beings.',
        },
        {
          id: 'trgg-l7-q3',
          prompt: 'According to Hebrews 4:9, what remains for the people of God?',
          options: ['Rest', 'Fear', 'Condemnation', 'Endless striving'],
          correctIndex: 0,
          explanation: 'Hebrews says there remains a rest for the people of God.',
        },
        {
          id: 'trgg-l7-q4',
          prompt: 'What is the deeper meaning of Sabbath rest in this lesson?',
          options: [
            'Coming to Jesus and resting in God\'s finished work',
            'Proving our worth through religious effort',
            'Ignoring God\'s grace',
            'Treating rest as laziness',
          ],
          correctIndex: 0,
          explanation:
            'Sabbath rest points to Jesus, who gives soul rest and teaches us to rest in God\'s completed work.',
        },
        {
          id: 'trgg-l7-q5',
          kind: 'reflection',
          prompt: 'What burden do you need to bring to Jesus so you can receive His rest?',
          explanation:
            'Jesus does not invite the weary to hide their burdens. He invites them to come to Him and receive rest for the soul.',
        },
      ],
    },
  },
}
