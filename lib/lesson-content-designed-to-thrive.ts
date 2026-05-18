import type { StudyVisualLessonBlock } from '@/lib/lesson-content-blocks'
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

const sowGrowReapVisual: StudyVisualLessonBlock = {
  type: 'studyVisual',
  title: 'Cause and effect',
  accent: 'sage',
  description: 'Choices are seeds. Over time, what we sow begins to grow.',
  payload: {
    variant: 'sequence',
    steps: [
      {
        label: 'Sow',
        subtitle: 'thoughts, habits, choices, relationships',
      },
      {
        label: 'Grow',
        subtitle: 'character, health, peace, damage, strength, weakness',
      },
      {
        label: 'Reap',
        subtitle: 'life-giving outcomes or destructive outcomes',
      },
    ],
  },
  footnote: 'God designed life with moral, spiritual, mental, relational, and physical cause and effect.',
}

const foodWisdomVisual: StudyVisualLessonBlock = {
  type: 'studyVisual',
  title: 'Food and wisdom',
  accent: 'stone',
  description: 'Food choices do not save us, but they can help us steward life wisely.',
  payload: {
    variant: 'sequence',
    steps: [
      {
        label: 'God\'s original design',
        subtitle: 'simple, life-giving, creation-based food',
      },
      {
        label: 'Daniel\'s choice',
        subtitle: 'conviction, clarity, discipline',
      },
      {
        label: 'Wisdom\'s warning',
        subtitle: 'avoid excess, avoid appetite ruling the life',
      },
    ],
  },
  footnote: 'Health is not salvation. Health is stewardship.',
}

const freedomCheckVisual: StudyVisualLessonBlock = {
  type: 'studyVisual',
  title: 'Freedom check',
  accent: 'sky',
  description: 'Freedom means refusing to be mastered by what damages the life God gave you.',
  payload: {
    variant: 'sequence',
    steps: [
      { label: 'Ask', subtitle: 'Does this cloud my judgment?' },
      { label: 'Ask', subtitle: 'Does this control my appetite?' },
      { label: 'Ask', subtitle: 'Does this weaken my witness?' },
      { label: 'Ask', subtitle: 'Does this harm my body, mind, or relationships?' },
      { label: 'Ask', subtitle: 'Does this pull me away from God?' },
    ],
  },
}

/** Guided reader lessons for "Designed to Thrive" (Foundations). */
export const designedToThriveSeriesLessonLibrary: Record<string, LessonReaderContent> = {
  'choices-have-consequences': {
    openingThought: `God designed life to work by principles.

Choices matter.

What we think, eat, drink, watch, say, practice, avoid, and repeat shapes real outcomes in our bodies, minds, relationships, and spiritual lives.

This is not because God is waiting to punish every mistake.

It is because love requires real freedom, and real freedom means our choices have real consequences.

The Bible calls this wisdom.

Wisdom is learning how life works under God's design and choosing the path that leads to life.`,
    scriptureRef: 'Galatians 6:7',
    scriptureQuote:
      'Be not deceived; God is not mocked: for whatsoever a man soweth, that shall he also reap.',
    scriptureAfterPrimary: `Choices are seeds.

Over time, what we sow begins to grow.`,
    scriptureSecondaryRef: 'Proverbs 26:2',
    scriptureSecondaryQuote: 'The curse causeless shall not come.',
    scriptureAfterSecondary: `Life operates by real cause and effect, not random fate.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Proverbs 8:34-36',
        quote:
          'Blessed is the man that heareth me, watching daily at my gates, waiting at the posts of my doors.\n\nFor whoso findeth me findeth life, and shall obtain favour of the LORD.\n\nBut he that sinneth against me wrongeth his own soul: all they that hate me love death.',
      },
      {
        type: 'scripture',
        reference: 'Deuteronomy 30:19',
        quote:
          'I have set before you life and death, blessing and cursing: therefore choose life.',
      },
    ],
    teachingPoints: [
      `1. Life operates by cause and effect

Galatians says we reap what we sow.

This means actions produce outcomes.

Choices are seeds.

Habits are seeds.

Thoughts are seeds.

Appetites are seeds.

Relationships are seeds.

Over time, what we sow begins to grow.

God is not arbitrary. He designed life with moral, spiritual, mental, relational, and physical cause and effect.`,
      `2. Wisdom understands how life works

Proverbs says the person who finds wisdom finds life.

Wisdom is not just knowing facts.

Wisdom is skill for living.

It means learning the principles God built into reality and making choices that align with life, health, peace, and love.

A wise person asks:

"What will this produce if I keep choosing it?"`,
      `3. Sin wounds the person who practices it

Proverbs says, "He that sinneth against me wrongeth his own soul."

That is a serious line.

Sin is not just a broken rule.

It is a self-damaging path.

Choices that move against God's design eventually wound the mind, body, relationships, conscience, and soul.

God warns us because He loves us.`,
      `4. God invites us to choose life

Deuteronomy says, "Choose life."

God does not force love, wisdom, or obedience.

He invites.

He teaches.

He warns.

He empowers.

Because God loves us, He cares about the direction our choices are taking us.

His commands are not random restrictions.

They are loving instructions for life.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Wisdom',
      lemma: 'חָכְמָה',
      transliteration: 'chokmah',
      meaning: 'Skill for living, discernment, and the ability to understand life\'s principles and make good choices.',
      strongs: 'H2451',
      reference: 'Proverbs 8:35',
      note: `Biblical wisdom is not merely intelligence.

It is learning how life works under God's design and choosing what leads to life, blessing, health, and wholeness.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'scripture_connection',
      body: `Some people think God's blessings and consequences work like random lightning bolts.

Be good, get a prize.

Mess up, get punished.

But Scripture presents something deeper.

God created a world where choices matter.

A loving choice tends to produce relational health.

A selfish choice tends to produce relational damage.

A wise habit tends to produce strength.

A destructive habit tends to produce weakness.

A clear mind tends to support better decisions.

A clouded mind tends to create confusion.

This is not about shame.

It is about reality.

God loves us too much to pretend our choices do not matter.

He teaches us wisdom because He wants us to live.`,
    },
    studyInsightBlocks: [
      sowGrowReapVisual,
      {
        type: 'scriptureChain',
        title: 'Choices Have Consequences',
        references: [
          { reference: 'Proverbs 26:2' },
          { reference: 'Galatians 6:7' },
          { reference: 'Proverbs 8:34-36' },
          { reference: 'Deuteronomy 30:19' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: God designed life with cause and effect. Wisdom means learning His principles and choosing the path that leads to life.',
      },
    ],
    reflectPrompt: `What is one choice or habit in your life that is already producing visible fruit?

Think about your health, thoughts, sleep, eating, relationships, spiritual life, screen time, emotions, or daily routines.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, identify one seed you are sowing.

Ask:

"What will this produce if I keep choosing it?"

Then choose one small adjustment toward life.

Drink more water.
Sleep earlier.
Pray before reacting.
Take a walk.
Tell the truth.
Eat something nourishing.
Turn off what is feeding anxiety.
Make peace with someone.
Choose Scripture over scrolling.

Do not try to fix everything at once.

Wisdom often begins with one honest choice.

Prayer:

Father, thank You for designing life with wisdom and love. Help me see that my choices matter without falling into shame or fear. Teach me to understand cause and effect in my body, mind, relationships, and spiritual life. Give me wisdom to choose what leads to life, health, peace, and deeper trust in You. Amen.`,
    prayer: '',
    completionSummary: `Choices are seeds. God designed life with cause and effect, and wisdom teaches us to choose what leads to life, health, and wholeness.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'dtt-l1-q1',
          prompt: 'According to Galatians 6:7, what will a person reap?',
          options: [
            'Whatever they sow',
            'Whatever others choose for them',
            'Nothing at all',
            'Only random outcomes',
          ],
          correctIndex: 0,
          explanation:
            'Galatians teaches the principle of cause and effect: whatever a person sows, they will also reap.',
        },
        {
          id: 'dtt-l1-q2',
          prompt: 'According to Proverbs 8:35, what does the person who finds wisdom find?',
          options: ['Life', 'Confusion', 'Pride', 'Self-destruction'],
          correctIndex: 0,
          explanation: 'Proverbs says whoever finds wisdom finds life and obtains favor from the Lord.',
        },
        {
          id: 'dtt-l1-q3',
          prompt: 'According to Proverbs 8:36, what happens when a person sins against wisdom?',
          options: [
            'They wrong their own soul',
            'They become healthier automatically',
            'They avoid all consequences',
            'They become free from responsibility',
          ],
          correctIndex: 0,
          explanation:
            'Proverbs says the person who sins against wisdom wrongs his own soul, showing that foolish choices are self-damaging.',
        },
        {
          id: 'dtt-l1-q4',
          prompt: 'According to Deuteronomy 30:19, what does God invite His people to choose?',
          options: ['Life', 'Death', 'Confusion', 'Bondage'],
          correctIndex: 0,
          explanation: 'God says, "Choose life," revealing His desire for human flourishing and blessing.',
        },
        {
          id: 'dtt-l1-q5',
          kind: 'reflection',
          prompt: 'What is one small life-giving choice God may be inviting you to make this week?',
          explanation:
            'Wisdom begins with honest choices that align with God\'s design for life, health, peace, and wholeness.',
        },
      ],
    },
  },
  'wisdom-for-whole-life': {
    openingThought: `Wisdom is more than knowing right answers.

Wisdom is knowing how life works.

It helps us see the connection between choices and outcomes, habits and health, thoughts and peace, appetites and consequences.

God does not give wisdom to limit our lives.

He gives wisdom to protect and bless our lives.

Because God loves us, He teaches us how to live in harmony with the way He designed us.

Health is not only about the body.

It involves the whole person.

The mind.
The heart.
The body.
The spirit.

God wants wisdom to shape all of it.`,
    scriptureRef: 'Proverbs 3:5-8',
    scriptureQuote:
      'Trust in the LORD with all thine heart; and lean not unto thine own understanding.\n\nIn all thy ways acknowledge him, and he shall direct thy paths.\n\nBe not wise in thine own eyes: fear the LORD, and depart from evil.\n\nIt shall be health to thy navel, and marrow to thy bones.',
    scriptureAfterPrimary: `Wisdom begins with trust and reaches into every area of life.`,
    scriptureSecondaryRef: 'Proverbs 4:20-23',
    scriptureSecondaryQuote:
      'My son, attend to my words; incline thine ear unto my sayings.\n\nFor they are life unto those that find them, and health to all their flesh.\n\nKeep thy heart with all diligence; for out of it are the issues of life.',
    scriptureAfterSecondary: `God's Word guards the inner life from which the outer life flows.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'James 1:5',
        quote:
          'If any of you lack wisdom, let him ask of God, that giveth to all men liberally.',
      },
      {
        type: 'scripture',
        reference: 'Psalm 119:105',
        quote: 'Thy word is a lamp unto my feet, and a light unto my path.',
      },
    ],
    teachingPoints: [
      `1. Wisdom begins with trust

Proverbs says to trust in the Lord with all your heart and not lean on your own understanding.

That is where wisdom begins.

We do not see everything clearly on our own.

Our desires can mislead us.

Our culture can normalize unhealthy patterns.

Our emotions can make destructive choices feel reasonable.

Wisdom begins when we trust God more than our own limited perspective.`,
      `2. God's wisdom directs the path

Proverbs says that when we acknowledge God in all our ways, He directs our paths.

God cares about "all" our ways.

Not just church.
Not just prayer.
Not just doctrine.

He cares about how we eat, rest, think, work, speak, spend, relate, and respond.

Wisdom brings God into every area of life.`,
      `3. God's Word brings life and health

Proverbs says God's words are life to those who find them and health to all their flesh.

This does not mean Scripture replaces wise medical care.

It means God's instruction leads us toward life.

His Word teaches principles that protect the mind, guide the heart, and shape healthier choices.`,
      `4. The heart must be guarded

Proverbs says to keep the heart with all diligence because the issues of life flow from it.

The heart is the inner life: thoughts, motives, desires, emotions, and loyalties.

Health is not only physical.

A bitter heart, anxious mind, uncontrolled appetite, or restless spirit can damage the whole person.

Wisdom guards the inner life because the outer life flows from it.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Heart',
      lemma: 'לֵב',
      transliteration: 'leb',
      meaning: 'The inner life of a person, including thoughts, motives, desires, emotions, and will.',
      strongs: 'H3820',
      reference: 'Proverbs 4:23',
      note: `In Scripture, the heart is not merely emotion.

It is the center of the person.

God's wisdom guards the heart because what happens inside us shapes what happens through us.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'scripture_connection',
      body: `Wisdom is whole-life discipleship.

It refuses to divide life into "spiritual" and "ordinary" categories.

The way we sleep matters.
The way we eat matters.
The way we handle stress matters.
The way we speak matters.
The way we think matters.
The way we treat the body matters.
The way we respond to God matters.

Not because we are trying to earn salvation.

Because God loves the whole person.

The Bible connects wisdom with health because wise living aligns us with God's design.

Foolishness ignores cause and effect.

Wisdom listens, learns, and adjusts.`,
    },
    studyInsightBlocks: [
      {
        type: 'wholePersonHealthPattern',
        title: 'Wisdom for the Whole Person',
        caption: 'God\'s wisdom touches the whole life.',
      },
      {
        type: 'scriptureChain',
        title: 'Wisdom and Health',
        references: [
          { reference: 'Proverbs 3:5-8' },
          { reference: 'Proverbs 4:20-23' },
          { reference: 'James 1:5' },
          { reference: 'Psalm 119:105' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: Wisdom is skill for whole-life living. God gives wisdom to guide the heart, mind, body, and spirit toward life.',
      },
    ],
    reflectPrompt: `Where are you leaning on your own understanding instead of asking God for wisdom?

Think about your health choices, stress patterns, relationships, habits, schedule, thoughts, spiritual life, or emotional reactions.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, ask God for wisdom in one specific area of your life.

Do not pray vaguely.

Name the area.

"Lord, give me wisdom with my sleep."

"Lord, give me wisdom with my eating."

"Lord, give me wisdom with my emotions."

"Lord, give me wisdom with my schedule."

"Lord, give me wisdom with this relationship."

Then take one wise step.

Not ten.

One.

Wisdom grows through repeated obedience to light God has already given.

Prayer:

Father, thank You for caring about my whole life. I confess that I often lean on my own understanding and ignore the wisdom You give. Teach me to trust You with my body, mind, heart, and spirit. Give me practical wisdom for the choices in front of me, and help me walk in the path that leads to life, health, and peace. Amen.`,
    prayer: '',
    completionSummary: `Wisdom is skill for whole-life living. God gives wisdom to guide the heart, mind, body, and spirit toward life and wholeness.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'dtt-l2-q1',
          prompt: 'According to Proverbs 3:5, what should we do with all our heart?',
          options: [
            'Trust in the Lord',
            'Trust only in ourselves',
            'Ignore wisdom',
            'Follow every feeling',
          ],
          correctIndex: 0,
          explanation:
            'Proverbs says to trust in the Lord with all your heart and not lean on your own understanding.',
        },
        {
          id: 'dtt-l2-q2',
          prompt: 'According to Proverbs 3:6, what happens when we acknowledge God in all our ways?',
          options: [
            'He directs our paths',
            'He ignores our choices',
            'He removes all responsibility',
            'He makes wisdom unnecessary',
          ],
          correctIndex: 0,
          explanation:
            'Proverbs says that when we acknowledge God in all our ways, He will direct our paths.',
        },
        {
          id: 'dtt-l2-q3',
          prompt: 'According to Proverbs 4:22, what are God\'s words to those who find them?',
          options: [
            'Life and health',
            'Confusion and fear',
            'Empty ideas',
            'A burden without purpose',
          ],
          correctIndex: 0,
          explanation:
            'Proverbs says God\'s words are life to those who find them and health to all their flesh.',
        },
        {
          id: 'dtt-l2-q4',
          prompt: 'According to James 1:5, what should we do if we lack wisdom?',
          options: [
            'Ask God',
            'Pretend we already know everything',
            'Ignore the need',
            'Follow the loudest voice',
          ],
          correctIndex: 0,
          explanation:
            'James says that if anyone lacks wisdom, they should ask God, who gives generously.',
        },
        {
          id: 'dtt-l2-q5',
          kind: 'reflection',
          prompt: 'What is one area where you need God\'s wisdom for healthier living?',
          explanation:
            'God\'s wisdom is practical. It guides the whole person toward life, health, peace, and wholeness.',
        },
      ],
    },
  },
  'saved-means-made-whole': {
    openingThought: `Many people think salvation only means going to heaven one day.

That is true, but it is not the whole picture.

In Scripture, salvation is bigger than future escape.

It includes rescue, healing, restoration, freedom, and wholeness.

Jesus did not come only to forgive our record.

He came to restore our lives.

He cares about the whole person.

The heart.
The mind.
The body.
The spirit.
The way we live.
The way we think.
The way we treat what He has entrusted to us.

God's salvation reaches deeper than guilt.

It reaches into the places where sin has broken us and begins making us whole.`,
    scriptureRef: 'John 10:10',
    scriptureQuote:
      'I am come that they might have life, and that they might have it more abundantly.',
    scriptureAfterPrimary: `Jesus came for life restored under God's love, not life without hardship.`,
    scriptureSecondaryRef: '3 John 1:2',
    scriptureSecondaryQuote:
      'Beloved, I wish above all things that thou mayest prosper and be in health, even as thy soul prospereth.',
    scriptureAfterSecondary: `God cares about spiritual life and physical well-being together.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Romans 12:1-2',
        quote:
          'Present your bodies a living sacrifice, holy, acceptable unto God, which is your reasonable service.\n\nAnd be not conformed to this world: but be ye transformed by the renewing of your mind.',
      },
      {
        type: 'scripture',
        reference: '1 Thessalonians 5:23',
        quote:
          'And the very God of peace sanctify you wholly.\n\nAnd I pray God your whole spirit and soul and body be preserved blameless unto the coming of our Lord Jesus Christ.',
      },
    ],
    teachingPoints: [
      `1. Jesus came to give abundant life

Jesus said He came so we might have life more abundantly.

That does not mean life without hardship.

It means life restored under God's love and purpose.

Abundant life is not shallow prosperity.

It is the life God designed us to live: forgiven, restored, surrendered, wise, and connected to Him.`,
      `2. God cares about our health

Third John expresses a desire for health and soul prosperity.

This shows that spiritual life and physical well-being are not enemies.

God cares about the whole person.

He is not interested in saving the "spiritual" part of us while ignoring the body, mind, emotions, and daily life.`,
      `3. Salvation renews the mind

Romans says we are transformed by the renewing of the mind.

This means God's work in us includes how we think.

Our thoughts affect choices.
Our choices affect habits.
Our habits affect health.
Our health affects service, clarity, and emotional resilience.

God's truth renews the mind so the whole life can be transformed.`,
      `4. God wants whole-person restoration

First Thessalonians speaks of spirit, soul, and body.

God's saving work is not fragmented.

He wants to sanctify us wholly.

This does not mean perfect health in a broken world.

It means every part of our life belongs to God and can be brought under His healing, wisdom, and grace.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Whole',
      lemma: 'ὁλοτελής',
      transliteration: 'holoteles',
      meaning: 'Complete, restored, integrated, and not divided into disconnected parts.',
      strongs: 'G3651',
      reference: '1 Thessalonians 5:23',
      note: `Biblical wholeness means God cares about the entire person.

Salvation includes forgiveness, but it also reaches into the body, mind, heart, habits, relationships, and spiritual life.

God restores people from the inside out.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The Bible does not treat human beings like disconnected pieces.

You are not a soul trapped inside a disposable body.

You are a whole person.

What affects the body can affect the mind.

What affects the mind can affect the emotions.

What affects the heart can affect the body.

What affects the spirit can shape the whole life.

This is why health matters in discipleship.

Not because healthy habits save us.

Jesus saves.

But healthy choices can help us live with greater clarity, energy, peace, and usefulness in God's hands.

Health is stewardship.

Wholeness is God's desire.

And salvation is God's work of restoring what sin has damaged.`,
    },
    studyInsightBlocks: [
      {
        type: 'wholePersonHealthPattern',
        title: 'Saved Means Made Whole',
        caption: 'God\'s salvation reaches the whole person.',
        highlightedIndices: [3],
      },
      {
        type: 'scriptureChain',
        title: 'Made Whole',
        references: [
          { reference: 'John 10:10' },
          { reference: '3 John 1:2' },
          { reference: 'Romans 12:1-2' },
          { reference: '1 Thessalonians 5:23' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: Salvation is more than future hope. Jesus came to restore the whole person and lead us into abundant life.',
      },
    ],
    reflectPrompt: `What part of your life most needs God's restoring work right now?

Think about your body, thoughts, emotions, habits, relationships, spiritual life, or the way you respond to stress.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, invite God into one area of your whole life.

Do not separate it from your faith.

If it is sleep, bring it to God.

If it is anxiety, bring it to God.

If it is eating, bring it to God.

If it is bitterness, bring it to God.

If it is screen time, bring it to God.

If it is neglecting your body, bring it to God.

Ask:

"Lord, what would restoration look like here?"

Then take one small step toward wholeness.

Not perfection.

One faithful step.

Prayer:

Father, thank You that salvation is not shallow. Thank You for caring about my whole life: body, mind, heart, and spirit. Help me receive the abundant life Jesus came to give. Renew my mind, heal what is broken, and teach me to steward my life with wisdom and grace. Make me whole in You. Amen.`,
    prayer: '',
    completionSummary: `Salvation is more than future hope. Jesus came to bring abundant life and restore the whole person: body, mind, heart, and spirit.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'dtt-l3-q1',
          prompt: 'According to John 10:10, why did Jesus come?',
          options: [
            'That we might have life more abundantly',
            'That we might live without purpose',
            'That health would never matter',
            'That wisdom would be unnecessary',
          ],
          correctIndex: 0,
          explanation:
            'Jesus said He came so that we might have life and have it more abundantly.',
        },
        {
          id: 'dtt-l3-q2',
          prompt: 'According to 3 John 1:2, what does John desire for the believer?',
          options: [
            'That they prosper and be in health',
            'That they ignore the body',
            'That they reject wisdom',
            'That they live without restoration',
          ],
          correctIndex: 0,
          explanation:
            'John expresses a desire for health and soul prosperity, showing concern for whole-person well-being.',
        },
        {
          id: 'dtt-l3-q3',
          prompt: 'According to Romans 12:2, how are we transformed?',
          options: [
            'By the renewing of the mind',
            'By ignoring our thoughts',
            'By copying the world',
            'By avoiding God\'s wisdom',
          ],
          correctIndex: 0,
          explanation: 'Romans says we are transformed by the renewing of the mind.',
        },
        {
          id: 'dtt-l3-q4',
          prompt: 'According to 1 Thessalonians 5:23, what does God want to sanctify?',
          options: [
            'The whole person',
            'Only outward appearance',
            'Only public behavior',
            'Nothing in the present life',
          ],
          correctIndex: 0,
          explanation:
            'Paul prays that God would sanctify believers wholly: spirit, soul, and body.',
        },
        {
          id: 'dtt-l3-q5',
          kind: 'reflection',
          prompt: 'What is one area where you want Jesus to bring deeper wholeness?',
          explanation:
            'Jesus came to restore the whole person. God\'s healing work reaches the body, mind, heart, and spirit.',
        },
      ],
    },
  },
  'your-body-matters-to-god': {
    openingThought: `Your body is not an accident.

It is not disposable.

It is not separate from your spiritual life.

God made you as a whole person, and your body is part of the life He entrusted to you.

That means health is not about vanity.

It is not about worshiping appearance.

It is not about trying to earn salvation by perfect habits.

Health is stewardship.

Your body matters because God made it, Jesus redeemed it, and the Spirit desires to dwell in you.

The question is not, "How do I become perfect?"

The better question is:

"How can I honor God with the body and life He has given me?"`,
    scriptureRef: '1 Corinthians 6:19-20',
    scriptureQuote:
      'What? know ye not that your body is the temple of the Holy Ghost which is in you, which ye have of God?\n\nAnd ye are not your own. For ye are bought with a price: therefore glorify God in your body, and in your spirit, which are God\'s.',
    scriptureAfterPrimary: `The body has sacred value because it belongs to God.`,
    scriptureSecondaryRef: '1 Corinthians 10:31',
    scriptureSecondaryQuote:
      'Whether therefore ye eat, or drink, or whatsoever ye do, do all to the glory of God.',
    scriptureAfterSecondary: `Faith reaches into everyday choices, not only dramatic spiritual moments.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Romans 12:1',
        quote:
          'Present your bodies a living sacrifice, holy, acceptable unto God, which is your reasonable service.',
      },
      {
        type: 'scripture',
        reference: 'Genesis 1:27',
        quote: 'So God created man in his own image.',
      },
    ],
    teachingPoints: [
      `1. Your body belongs to God

Paul says, "Ye are not your own."

That is not meant to make us feel trapped.

It is meant to remind us that our lives have sacred value.

We belong to the God who created us and redeemed us.

The body is not meaningless.

It belongs to God.`,
      `2. The body is a temple

Paul calls the body the temple of the Holy Spirit.

A temple is a place set apart for God's presence.

That means how we treat the body matters.

Food, rest, movement, sexual purity, substances, stress, and habits are not disconnected from discipleship.

God cares about the whole person.`,
      `3. Everyday choices can glorify God

First Corinthians says even eating and drinking can be done to God's glory.

That brings faith into daily life.

Health is not limited to dramatic spiritual moments.

It shows up in ordinary choices.

What we consume.
How we rest.
How we move.
How we manage appetite.
How we care for what God entrusted to us.`,
      `4. Stewardship is not perfectionism

Romans calls us to present our bodies to God.

This is not a call to shame, obsession, or comparison.

Some people face sickness, disability, trauma, limitations, or circumstances beyond their control.

God is not asking for image-driven perfection.

He is inviting faithful stewardship.

We honor Him with the measure of light, strength, ability, and opportunity we have.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Temple',
      lemma: 'ναός',
      transliteration: 'naos',
      meaning: 'A sacred place set apart for God\'s presence.',
      strongs: 'G3485',
      reference: '1 Corinthians 6:19',
      note: `Calling the body a temple gives the body spiritual dignity.

It means the body is not something to worship or neglect.

It is something to steward because it belongs to God and is meant to glorify Him.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'scripture_connection',
      body: `The Bible does not teach body worship.

It teaches body stewardship.

There is a difference.

Body worship says:

"My appearance is my identity."

Body neglect says:

"My body does not matter."

Biblical stewardship says:

"My body belongs to God, and I want to care for it faithfully."

That balance matters.

Health should never become pride.

It should never become legalism.

It should never become shame.

But it also should not be ignored.

If the body is God's temple, then caring for it is one way we respond to His love.`,
    },
    studyInsightBlocks: [
      {
        type: 'wholePersonHealthPattern',
        title: 'Your Body Matters to God',
        caption: 'The body is part of whole-person stewardship.',
        highlightedIndices: [0],
        areas: [
          { area: 'Body', items: ['nutrition', 'movement', 'rest', 'temperance'] },
          { area: 'Mind', items: ['clarity', 'focus', 'thoughts', 'wisdom'] },
          { area: 'Heart', items: ['peace', 'relationships', 'emotions', 'healing'] },
          { area: 'Spirit', items: ['worship', 'surrender', 'trust', 'purpose'] },
        ],
      },
      {
        type: 'scriptureChain',
        title: 'Glorify God in Your Body',
        references: [
          { reference: 'Genesis 1:27' },
          { reference: 'Romans 12:1' },
          { reference: '1 Corinthians 6:19-20' },
          { reference: '1 Corinthians 10:31' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: Your body matters to God because He created it, redeemed it, and calls you to glorify Him through faithful stewardship.',
      },
    ],
    reflectPrompt: `Do you tend to neglect your body, obsess over your body, or steward your body?

Think honestly about your habits, motives, routines, appetite, rest, exercise, appearance, and how your view of God shapes the way you care for yourself.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, choose one simple way to honor God with your body.

Do not try to overhaul everything at once.

Choose one faithful step.

Drink more water.
Go for a walk.
Sleep earlier.
Eat one nourishing meal.
Stretch.
Avoid something that clouds your mind.
Rest without guilt.
Pray before eating.
Stop speaking harshly about your body.

Then say:

"Lord, this body belongs to You. Help me steward it with gratitude."

The goal is not perfection.

The goal is worshipful care.

Prayer:

Father, thank You for creating and redeeming me as a whole person. Help me see my body as something entrusted to me, not something to worship or neglect. Teach me to glorify You in what I eat, drink, do, and choose. Free me from shame, pride, and carelessness. Give me wisdom to steward my body with gratitude and grace. Amen.`,
    prayer: '',
    completionSummary: `Your body matters to God. It is part of the life He created, redeemed, and entrusted to you for faithful stewardship.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'dtt-l4-q1',
          prompt: 'According to 1 Corinthians 6:19, what is the body called?',
          options: [
            'The temple of the Holy Ghost',
            'Something meaningless',
            'A tool for selfishness only',
            'A burden God ignores',
          ],
          correctIndex: 0,
          explanation:
            'Paul says the body is the temple of the Holy Ghost, showing that the body has sacred value.',
        },
        {
          id: 'dtt-l4-q2',
          prompt: 'According to 1 Corinthians 6:20, why should believers glorify God in their body?',
          options: [
            'They were bought with a price',
            'Their body belongs only to culture',
            'Appearance saves them',
            'Health earns salvation',
          ],
          correctIndex: 0,
          explanation:
            'Paul says believers are bought with a price, therefore they should glorify God in body and spirit.',
        },
        {
          id: 'dtt-l4-q3',
          prompt: 'According to 1 Corinthians 10:31, what should be done to the glory of God?',
          options: [
            'Eating, drinking, and whatever we do',
            'Only public worship services',
            'Nothing physical',
            'Only preaching',
          ],
          correctIndex: 0,
          explanation: 'Paul says even eating and drinking should be done to the glory of God.',
        },
        {
          id: 'dtt-l4-q4',
          prompt: 'What does this lesson teach about health stewardship?',
          options: [
            'It is a response to God\'s love, not a way to earn salvation',
            'It is about pride and appearance',
            'It means God loves healthy people more',
            'It has nothing to do with faith',
          ],
          correctIndex: 0,
          explanation:
            'Health stewardship honors God with the life He has entrusted to us. It is not a way to earn salvation.',
        },
        {
          id: 'dtt-l4-q5',
          kind: 'reflection',
          prompt: 'What is one practical way you can glorify God in your body this week?',
          explanation:
            'The body belongs to God. Faithful stewardship begins with one wise, worshipful choice.',
        },
      ],
    },
  },
  'the-original-design-for-food': {
    openingThought: `Food is not only fuel.

It is part of God's design for life.

Before sin entered the world, before sickness damaged the body, and before appetite became distorted, God gave humanity food from the earth.

The first diet was simple, life-giving, and connected to creation.

That matters.

The Bible does not present eating as a way to earn salvation. Jesus saves us by grace.

But Scripture does invite us to think wisely about what we put into the body God has entrusted to us.

Food can either support life or work against it.

God's original design points us toward wisdom, gratitude, and care.`,
    scriptureRef: 'Genesis 1:29',
    scriptureQuote:
      'And God said, Behold, I have given you every herb bearing seed, which is upon the face of all the earth, and every tree, in the which is the fruit of a tree yielding seed.',
    scriptureAfterPrimary: `God's first gift of food was simple, life-giving, and rooted in creation.`,
    scriptureSecondaryRef: 'Daniel 1:8',
    scriptureSecondaryQuote:
      'But Daniel purposed in his heart that he would not defile himself with the portion of the king\'s meat.',
    scriptureAfterSecondary: `Daniel chose faithfulness over pressure when appetite and culture pushed another way.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Daniel 1:12',
        quote:
          'Prove thy servants, I beseech thee, ten days; and let them give us pulse to eat, and water to drink.',
      },
      {
        type: 'scripture',
        reference: 'Daniel 1:15',
        quote:
          'And at the end of ten days their countenances appeared fairer and fatter in flesh than all the children which did eat the portion of the king\'s meat.',
      },
      {
        type: 'scripture',
        reference: 'Proverbs 23:20-21',
        quote:
          'Be not among winebibbers; among riotous eaters of flesh.\n\nFor the drunkard and the glutton shall come to poverty.',
      },
    ],
    teachingPoints: [
      `1. God gave humanity food from creation

Genesis 1 shows God giving humanity plants, fruits, seeds, and food from the earth.

This was not random.

It was part of His original design.

Before sin, God provided food that supported life, strength, and flourishing.

The original diet reminds us that God cares about what sustains the body.`,
      `2. Food is a gift to receive with gratitude

God says, "I have given you."

That phrase matters.

Food is not only something we consume.

It is something we receive.

Every meal is a reminder that life depends on God's provision.

When we eat with gratitude, food becomes more than appetite.

It becomes stewardship.`,
      `3. Daniel chose principle over pressure

Daniel lived in a culture where compromise would have been easy.

But he purposed in his heart not to defile himself.

His food choice was not about pride.

It was about faithfulness, clarity, discipline, and loyalty to God.

Daniel teaches us that appetite should not rule the conscience.`,
      `4. Appetite needs wisdom and self-control

Proverbs warns against drunkenness and gluttony.

This is not body-shaming.

It is wisdom.

Uncontrolled appetite can damage judgment, health, finances, relationships, and spiritual sensitivity.

God wants us free, not enslaved by cravings.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Temperance',
      lemma: 'ἐγκράτεια',
      transliteration: 'egkrateia',
      meaning: 'Self-control, balance, and wise restraint.',
      strongs: 'G1466',
      reference: 'Galatians 5:23',
      note: `Temperance is not harsh self-punishment.

It is Spirit-shaped self-control.

God wants appetite to serve life, not rule the person. Wise eating is part of caring for the body He has entrusted to us.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'scripture_connection',
      body: `The Bible's teaching on food should be held with balance.

Food choices do not save us.

Jesus saves.

A healthy diet does not make someone spiritually superior.

And people should not be shamed for their background, health struggles, access to food, or where they are starting.

But the opposite error is also dangerous.

We should not pretend food has no effect.

What we eat can affect energy, clarity, mood, long-term health, discipline, and ability to serve.

God's original design invites us to choose food that supports life.

Daniel's example invites us to make choices based on conviction, not pressure.

Proverbs invites us to avoid excess and appetite-driven living.

Health is not salvation.

Health is stewardship.`,
    },
    studyInsightBlocks: [
      foodWisdomVisual,
      {
        type: 'scriptureChain',
        title: 'Food and Wisdom',
        references: [
          { reference: 'Genesis 1:29' },
          { reference: 'Daniel 1:8-16' },
          { reference: 'Proverbs 23:20-21' },
          { reference: '1 Corinthians 10:31' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: God\'s original design for food points toward life, gratitude, and stewardship. We eat wisely not to earn salvation, but to honor the life God has given.',
      },
    ],
    reflectPrompt: `What does your current relationship with food reveal about your habits, appetite, gratitude, or self-control?

Be honest without shame. Think about nourishment, excess, restriction, emotional eating, convenience, discipline, gratitude, and whether your choices are helping or hurting your whole life.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, make one food choice that moves you closer to wisdom.

Keep it simple.

Add more fruit or vegetables.
Drink more water.
Prepare one nourishing meal.
Eat with gratitude instead of rushing.
Avoid eating past fullness.
Pause before using food to numb stress.
Choose clarity over craving.

Do not turn this into perfectionism.

Ask one question:

"Will this choice help me care for the life God has entrusted to me?"

Start there.

Prayer:

Father, thank You for providing food as a gift. Help me see eating as part of whole-life stewardship, not shame or pride. Teach me wisdom, gratitude, and self-control. Give me freedom from appetite ruling my choices, and help me care for my body in a way that honors You. Amen.`,
    prayer: '',
    completionSummary: `Food is part of God's design for life. Wise eating does not earn salvation, but it helps us steward the body and life God has entrusted to us.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'dtt-l5-q1',
          prompt: 'According to Genesis 1:29, what did God give humanity for food?',
          options: [
            'Herbs bearing seed and fruit from trees',
            'Only processed foods',
            'Nothing from creation',
            'Food that had no connection to life',
          ],
          correctIndex: 0,
          explanation:
            'Genesis 1:29 shows God giving humanity plants, seeds, and fruit from the earth as part of His original design.',
        },
        {
          id: 'dtt-l5-q2',
          prompt: 'What did Daniel purpose in his heart?',
          options: [
            'That he would not defile himself with the king\'s food',
            'That appetite should always rule him',
            'That food choices never matter',
            'That he should reject God\'s wisdom',
          ],
          correctIndex: 0,
          explanation:
            'Daniel 1:8 says Daniel purposed in his heart not to defile himself, showing conviction and faithfulness.',
        },
        {
          id: 'dtt-l5-q3',
          prompt: 'What did Daniel request to eat and drink for ten days?',
          options: ['Pulse and water', 'Wine and sweets', 'The king\'s full table', 'Nothing at all'],
          correctIndex: 0,
          explanation: 'Daniel requested pulse, meaning plant-based food, and water for ten days.',
        },
        {
          id: 'dtt-l5-q4',
          prompt: 'What does Proverbs 23 warn against?',
          options: [
            'Drunkenness and gluttony',
            'Gratitude',
            'Wisdom',
            'Self-control',
          ],
          correctIndex: 0,
          explanation:
            'Proverbs warns against winebibbing and riotous eating, showing the danger of uncontrolled appetite.',
        },
        {
          id: 'dtt-l5-q5',
          kind: 'reflection',
          prompt: 'What is one simple food choice you can make this week to practice better stewardship?',
          explanation:
            'Food choices do not save us, but wise choices can support health, clarity, gratitude, and faithful stewardship.',
        },
      ],
    },
  },
  'clear-mind-clean-life': {
    openingThought: `God wants His people to live with clarity.

A clear mind matters.

What clouds the mind can weaken judgment.
What weakens judgment can shape choices.
What shapes choices can affect the whole life.

That is why Scripture speaks plainly about temperance, self-control, and avoiding what damages the body or dulls spiritual sensitivity.

This is not about shame.

It is about freedom.

God does not call us away from destructive habits because He wants less joy for us.

He calls us away because He wants us whole, awake, wise, and free.`,
    scriptureRef: 'Proverbs 20:1',
    scriptureQuote:
      'Wine is a mocker, strong drink is raging: and whosoever is deceived thereby is not wise.',
    scriptureAfterPrimary: `Scripture warns plainly about what clouds judgment and deceives the mind.`,
    scriptureSecondaryRef: '1 Corinthians 6:11',
    scriptureSecondaryQuote:
      'And such were some of you: but ye are washed, but ye are sanctified, but ye are justified.',
    scriptureAfterSecondary: `The gospel restores people from what once mastered them. In Christ, freedom begins.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Proverbs 23:29-32',
        quote:
          'Who hath woe? who hath sorrow? who hath contentions? who hath babbling? who hath wounds without cause? who hath redness of eyes?\n\nThey that tarry long at the wine; they that go to seek mixed wine.\n\nAt the last it biteth like a serpent, and stingeth like an adder.',
      },
      {
        type: 'scripture',
        reference: '1 Corinthians 6:12',
        quote: 'All things are lawful unto me, but I will not be brought under the power of any.',
      },
    ],
    teachingPoints: [
      `1. Scripture warns about what clouds judgment

Proverbs says wine is a mocker and strong drink is raging.

The warning is not random.

Anything that clouds judgment can lead people into decisions they would not make with a clear mind.

God's wisdom protects us from being deceived by what promises pleasure but produces damage.`,
      `2. Destructive habits often promise relief but create bondage

Proverbs 23 shows the sorrow, conflict, wounds, and regret that can come from intoxicating habits.

This principle reaches beyond alcohol.

Anything that masters the person can become bondage.

Substances, cravings, entertainment, lust, anger, food, screens, or unhealthy patterns can promise escape while quietly taking control.`,
      `3. Jesus restores people from the old life

First Corinthians says, "such were some of you."

That phrase is full of hope.

God does not define believers by what once mastered them.

Through Christ, people can be washed, sanctified, and justified.

The gospel does not only forgive.

It begins freedom.`,
      `4. Freedom means not being mastered

Paul says, "I will not be brought under the power of any."

That is a clear principle for health and holiness.

The question is not only, "Can I do this?"

The better question is:

"Is this mastering me?"

God wants His people free, clear-minded, and able to respond to His Spirit.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Temperance',
      lemma: 'ἐγκράτεια',
      transliteration: 'egkrateia',
      meaning: 'Self-control, wise restraint, and freedom from being ruled by appetite or habit.',
      strongs: 'G1466',
      reference: 'Galatians 5:23',
      note: `Temperance is not joyless restriction.

It is Spirit-shaped freedom.

God teaches us to avoid what masters, clouds, weakens, or destroys so we can live with clarity, wisdom, and love.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'scripture_connection',
      body: `The Bible's call to clear-minded living is not about looking down on people who struggle.

Everyone has something that can master them.

For one person, it may be alcohol.

For another, it may be food, anger, lust, shopping, approval, screens, or constant distraction.

The principle is the same:

God does not want anything ruling the life except His love.

Temperance is about freedom.

A clear mind helps us hear God's word more honestly.

A clean life helps us avoid unnecessary harm.

A surrendered heart helps us break patterns that once controlled us.

Jesus does not shame the bound.

He sets captives free.`,
    },
    studyInsightBlocks: [
      freedomCheckVisual,
      {
        type: 'scriptureChain',
        title: 'Clear Mind, Clean Life',
        references: [
          { reference: 'Proverbs 20:1' },
          { reference: 'Proverbs 23:29-35' },
          { reference: '1 Corinthians 6:11-12' },
          { reference: 'Galatians 5:22-23' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: God calls us to temperance and clear-minded living, not to shame us, but to free us from what clouds, controls, and damages.',
      },
    ],
    reflectPrompt: `What is one habit, appetite, or pattern that may be mastering you more than you want to admit?

Think honestly without shame. Consider substances, food, scrolling, entertainment, lust, anger, spending, approval, or anything that weakens your clarity and freedom.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, do a simple freedom check.

Choose one habit and ask:

"Is this helping me live clear, free, and whole?"

If the honest answer is no, take one small step.

Remove the trigger.
Set a limit.
Ask for accountability.
Replace the habit with prayer, movement, rest, Scripture, or a healthier routine.
Get help if the pattern is bigger than willpower.

Do not confuse conviction with condemnation.

Conviction invites you toward freedom.

Condemnation tells you to hide.

Jesus invites you into the light so He can heal what has been ruling you.

Prayer:

Father, thank You for calling me to freedom, not bondage. Show me what is clouding my mind, weakening my choices, or mastering my life. Give me wisdom, self-control, and courage to walk away from what destroys. Thank You that in Jesus I can be washed, restored, and made free. Amen.`,
    prayer: '',
    completionSummary: `God calls us to clear-minded, free, and whole living. Temperance is not shame. It is freedom from what clouds the mind and masters the life.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'dtt-l6-q1',
          prompt: 'According to Proverbs 20:1, what is not wise?',
          options: [
            'Being deceived by wine or strong drink',
            'Seeking wisdom',
            'Living with a clear mind',
            'Asking God for help',
          ],
          correctIndex: 0,
          explanation:
            'Proverbs warns that wine is a mocker and strong drink is raging, and whoever is deceived by it is not wise.',
        },
        {
          id: 'dtt-l6-q2',
          prompt: 'What does Proverbs 23 describe as the result of lingering long with wine?',
          options: [
            'Sorrow, conflict, wounds, and harm',
            'Perfect wisdom',
            'Spiritual clarity',
            'Guaranteed health',
          ],
          correctIndex: 0,
          explanation:
            'Proverbs 23 describes the painful consequences connected with intoxicating habits.',
        },
        {
          id: 'dtt-l6-q3',
          prompt: 'According to 1 Corinthians 6:11, what has God done for believers?',
          options: [
            'Washed, sanctified, and justified them',
            'Left them trapped forever',
            'Ignored their need for freedom',
            'Told them change is impossible',
          ],
          correctIndex: 0,
          explanation:
            'Paul says believers have been washed, sanctified, and justified, showing the restoring work of Christ.',
        },
        {
          id: 'dtt-l6-q4',
          prompt: 'According to 1 Corinthians 6:12, what should not happen to us?',
          options: [
            'We should not be brought under the power of anything',
            'We should be mastered by every appetite',
            'We should ignore self-control',
            'We should reject freedom',
          ],
          correctIndex: 0,
          explanation:
            'Paul says he will not be brought under the power of any, giving a principle of freedom from being mastered.',
        },
        {
          id: 'dtt-l6-q5',
          kind: 'reflection',
          prompt: 'What is one practical step you can take toward clearer, freer living this week?',
          explanation:
            'Temperance is Spirit-shaped freedom. God invites us to step away from what clouds, controls, or damages us.',
        },
      ],
    },
  },
  'jesus-the-healer': {
    openingThought: `Jesus did not come into the world as a distant teacher with good ideas.

He came near.

He touched the sick.
He restored the broken.
He forgave sinners.
He lifted the ashamed.
He opened blind eyes.
He gave peace to troubled hearts.

His healing ministry shows us something important about God:

God cares about the whole person.

Jesus came to save us from sin, but His salvation reaches every place sin has damaged: body, mind, heart, relationships, and spirit.

He is not only interested in getting people to heaven one day.

He is also restoring people into wholeness now.`,
    scriptureRef: 'Acts 10:38',
    scriptureQuote:
      'God anointed Jesus of Nazareth with the Holy Ghost and with power: who went about doing good, and healing all that were oppressed of the devil; for God was with him.',
    scriptureAfterPrimary: `Jesus went about doing good and healing those oppressed by the devil, revealing God's heart for suffering people.`,
    scriptureSecondaryRef: 'Isaiah 53:5',
    scriptureSecondaryQuote:
      'But he was wounded for our transgressions, he was bruised for our iniquities.\n\nAnd with his stripes we are healed.',
    scriptureAfterSecondary: `Christ bore our sin and its wounds so healing could reach what sin had broken.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Matthew 1:21',
        quote:
          'And she shall bring forth a son, and thou shalt call his name JESUS: for he shall save his people from their sins.',
      },
      {
        type: 'scripture',
        reference: 'John 10:10',
        quote: 'I am come that they might have life, and that they might have it more abundantly.',
      },
      {
        type: 'scripture',
        reference: 'Matthew 9:35',
        quote:
          'And Jesus went about all the cities and villages, teaching in their synagogues, and preaching the gospel of the kingdom, and healing every sickness and every disease among the people.',
      },
    ],
    teachingPoints: [
      `1. Jesus came to save from sin

Matthew 1 says Jesus came to save His people from their sins.

This is the center of His mission.

Sin is the deepest disease.

It separates us from God, damages the heart, corrupts desire, and brings death.

Jesus did not come merely to improve our habits.

He came to rescue us from sin itself.`,
      `2. Jesus healed because God cares about suffering

Acts says Jesus went about doing good and healing those oppressed by the devil.

His miracles were not random displays of power.

They revealed God's heart.

Every healing showed that sickness, oppression, pain, and brokenness were never part of God's original design.

Jesus came to confront what sin had done.`,
      `3. Healing points to whole-person restoration

Matthew 9 shows Jesus teaching, preaching, and healing.

He addressed the mind with truth.

He addressed the heart with the gospel.

He addressed the body with healing.

He addressed the spirit with restoration.

Jesus' ministry was whole-person ministry.

He came to make people whole, not merely informed.`,
      `4. Final healing is still ahead

Jesus healed many people during His earthly ministry, but not every sickness disappeared from the world immediately.

That matters.

We should not shame people who are still sick, struggling, disabled, grieving, or waiting.

In this life, healing may come in different ways and at different times.

But the resurrection promises complete restoration.

Jesus' healing ministry is a preview of the day when sin, sickness, pain, and death will be gone forever.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Heal',
      lemma: 'רָפָא',
      transliteration: 'rapha',
      meaning: 'To restore, make whole, mend, or bring back to health.',
      strongs: 'H7495',
      reference: 'Isaiah 53:5',
      note: `Biblical healing is bigger than physical recovery alone.

Jesus heals by forgiving sin, restoring relationship with God, renewing the mind, freeing the heart, and one day making all things completely whole.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `Designed to Thrive has shown one clear truth:

God cares about the whole life.

Choices have consequences.

Wisdom guides the whole person.

Salvation includes restoration and wholeness.

The body matters to God.

Food can be received with wisdom and gratitude.

Temperance protects clarity and freedom.

And Jesus stands at the center as the Healer.

This keeps health from becoming legalism.

We do not care for the body to earn salvation.

We care for the body because Jesus has redeemed the whole person.

We do not pursue health to feel superior.

We pursue wisdom because God's design is good.

We do not shame people who struggle.

We point people to the Savior who restores.

Jesus is the Healer of body, mind, heart, and spirit.`,
    },
    studyInsightBlocks: [
      {
        type: 'wholePersonHealthPattern',
        title: 'Jesus Restores the Whole Person',
        caption: 'Jesus came to save, heal, restore, and make whole.',
        highlightedIndices: [0, 1, 2, 3],
        areas: [
          { area: 'Body', items: ['healing', 'stewardship', 'strength', 'care'] },
          { area: 'Mind', items: ['truth', 'clarity', 'renewal', 'wisdom'] },
          { area: 'Heart', items: ['peace', 'forgiveness', 'emotional healing', 'love'] },
          { area: 'Spirit', items: ['salvation', 'trust', 'worship', 'surrender'] },
        ],
      },
      {
        type: 'scriptureChain',
        title: 'Jesus the Healer',
        references: [
          { reference: 'Isaiah 53:5' },
          { reference: 'Matthew 1:21' },
          { reference: 'Acts 10:38' },
          { reference: 'Matthew 9:35' },
          { reference: 'John 10:10' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: Jesus came to save from sin and restore the whole person. His healing ministry reveals God\'s desire for life, freedom, and wholeness.',
      },
    ],
    reflectPrompt: `Where do you most need Jesus' healing work right now?

Think about sin, guilt, health, habits, emotional wounds, anxiety, relationships, shame, weariness, or spiritual distance from God.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, bring one area of brokenness to Jesus honestly.

Do not hide it.

Do not spiritualize it away.

Do not pretend it is not affecting you.

Pray:

"Jesus, this is where I need Your healing."

Then take one wise step in cooperation with His grace.

Confess sin.
Ask for help.
Rest.
Forgive.
Seek counsel.
Start a healthier habit.
Remove what is damaging you.
Return to Scripture.
Make a medical appointment if needed.
Talk to someone trustworthy.

Healing is not always instant.

But coming to Jesus is always the right place to begin.

Prayer:

Jesus, thank You for coming near to broken people. Thank You for saving from sin, healing the wounded, restoring the weary, and caring about the whole person. I bring You the places in me that need Your touch. Give me wisdom, courage, and faith to cooperate with Your restoring work. Make me whole in Your love. Amen.`,
    prayer: '',
    completionSummary: `You have completed Designed to Thrive. God cares about the whole person. Through wisdom, stewardship, temperance, and the healing grace of Jesus, He invites us into life, wholeness, and restoration.`,
    seriesCompleteScreen: {
      title: 'Study Complete',
      message:
        'You have completed Designed to Thrive. God cares about the whole person. Through wisdom, stewardship, temperance, and the healing grace of Jesus, He invites us into life, wholeness, and restoration.',
      primaryCta: { label: 'Back to Foundations Path', href: '/paths/foundations' },
      secondaryCta: {
        label: 'Review this study',
        href: '/study-library/designed-to-thrive',
      },
    },
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'dtt-l7-q1',
          prompt: 'According to Acts 10:38, what did Jesus go about doing?',
          options: [
            'Doing good and healing those oppressed of the devil',
            'Ignoring human suffering',
            'Teaching without compassion',
            'Avoiding broken people',
          ],
          correctIndex: 0,
          explanation:
            'Acts says Jesus went about doing good and healing those oppressed of the devil, showing God\'s care for suffering people.',
        },
        {
          id: 'dtt-l7-q2',
          prompt: 'According to Matthew 1:21, what did Jesus come to save His people from?',
          options: ['Their sins', 'Wisdom', 'Health', 'Compassion'],
          correctIndex: 0,
          explanation:
            'Matthew says Jesus would save His people from their sins, showing the deepest purpose of His mission.',
        },
        {
          id: 'dtt-l7-q3',
          prompt: 'According to Matthew 9:35, what did Jesus do among the people?',
          options: [
            'Taught, preached, and healed',
            'Only criticized them',
            'Avoided the sick',
            'Rejected the needy',
          ],
          correctIndex: 0,
          explanation:
            'Matthew says Jesus taught, preached the gospel of the kingdom, and healed sickness and disease.',
        },
        {
          id: 'dtt-l7-q4',
          prompt: 'What does this lesson teach about health and salvation?',
          options: [
            'Jesus saves and restores the whole person',
            'Health habits earn salvation',
            'Sickness means God has rejected someone',
            'The body does not matter to God',
          ],
          correctIndex: 0,
          explanation:
            'The lesson shows that Jesus saves from sin and restores the whole person: body, mind, heart, and spirit.',
        },
        {
          id: 'dtt-l7-q5',
          kind: 'reflection',
          prompt: 'What is one area where you need to invite Jesus\' healing and wisdom this week?',
          explanation:
            'Jesus is the Healer. He invites us to bring our brokenness to Him and cooperate with His restoring grace.',
        },
      ],
    },
  },
}
