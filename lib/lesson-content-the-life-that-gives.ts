import type { LessonContentBlock, StudyVisualLessonBlock } from '@/lib/lesson-content-blocks'
import type { LessonReaderContent } from '@/lib/lesson-content'
import type { LessonQuizPayload } from '@/lib/lesson-quiz-types'
import { GIVING_CIRCLE_PATTERN_DEFAULT_CAPTION } from '@/lib/giving-circle-pattern-stages'

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

const lifeThatGivesSeriesRecapVisual: StudyVisualLessonBlock = {
  type: 'studyVisual',
  title: 'The Life That Gives',
  accent: 'amber',
  description: 'Generosity is love made visible.',
  payload: {
    variant: 'sequence',
    steps: [
      { label: 'God gives first' },
      { label: 'We receive with gratitude' },
      { label: 'Grace turns us outward' },
      { label: 'We steward what belongs to God' },
      { label: 'We return tithe' },
      { label: 'We give offerings' },
      { label: 'Love becomes action' },
    ],
  },
  footnote: 'God forms generous people who trust, steward, give, and love in deed and truth.',
}

const forcedVsHeartGivingVisual: StudyVisualLessonBlock = {
  type: 'studyVisual',
  title: 'Two kinds of giving',
  accent: 'amber',
  description: 'God forms the giver, not just the gift.',
  payload: {
    variant: 'comparison',
    leftTitle: 'Forced giving',
    rightTitle: 'Heart giving',
    leftItems: ['pressure', 'guilt', 'comparison', 'resentment'],
    rightItems: ['gratitude', 'trust', 'joy', 'love'],
  },
  footnote: 'Offerings flow from grace, not religious pressure.',
}

const takingToGivingVisual: StudyVisualLessonBlock = {
  type: 'studyVisual',
  title: 'Grace changes the heart',
  accent: 'sage',
  description: 'Jesus redeems us from self-centered living into other-centered love.',
  payload: {
    variant: 'comparison',
    leftTitle: 'Before grace',
    rightTitle: 'After grace',
    leftItems: ['taking', 'self-protection', 'pride', 'using others', 'fear'],
    rightItems: ['receiving', 'gratitude', 'service', 'generosity', 'love'],
  },
  footnote: 'Only grace can turn a taker into a giver.',
}

const godGivesFirstInsightBlocks: LessonContentBlock[] = [
  {
    type: 'givingCirclePattern',
    title: 'God Gives First',
    caption: GIVING_CIRCLE_PATTERN_DEFAULT_CAPTION,
  },
  {
    type: 'scriptureChain',
    title: 'The Great Giver',
    references: [
      { reference: 'James 1:17' },
      { reference: 'John 3:16' },
      { reference: 'Romans 8:32' },
      { reference: '1 Timothy 2:5-6' },
    ],
  },
  {
    type: 'paragraph',
    text: 'Takeaway: Every good gift comes from God, and His greatest gift is Jesus. Christian generosity begins by receiving the love God has already given.',
  },
]

/** Guided reader lessons for "The Life That Gives" (Foundations). */
export const theLifeThatGivesSeriesLessonLibrary: Record<string, LessonReaderContent> = {
  'god-gives-first': {
    openingThought: `The Christian life does not begin with what we give to God.

It begins with what God has given to us.

Before we loved Him, He loved us.

Before we served Him, He served us.

Before we gave anything back, He gave us life, breath, mercy, grace, and Jesus.

That matters because biblical generosity is not rooted in guilt.

It is rooted in grace.

God is the Great Giver.

And when His love reaches the heart, it begins to make us generous too.`,
    scriptureRef: 'James 1:17',
    scriptureQuote:
      'Every good gift and every perfect gift is from above, and cometh down from the Father of lights.',
    scriptureAfterPrimary: `Every truly good thing in life begins with God's generosity.

We are receivers before we are givers.`,
    scriptureSecondaryRef: 'John 3:16',
    scriptureSecondaryQuote:
      'For God so loved the world, that he gave his only begotten Son.',
    scriptureAfterSecondary: `God's greatest gift reveals the depth of His love.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Romans 8:32',
        quote:
          'He that spared not his own Son, but delivered him up for us all, how shall he not with him also freely give us all things?',
      },
      {
        type: 'scripture',
        reference: '1 Timothy 2:5-6',
        quote:
          'For there is one God, and one mediator between God and men, the man Christ Jesus.\n\nWho gave himself a ransom for all.',
      },
    ],
    teachingPoints: [
      `1. Every good gift begins with God

James says every good and perfect gift comes from above.

That means everything truly good in our lives begins with God's generosity.

Life is a gift.
Breath is a gift.
Provision is a gift.
Grace is a gift.
Salvation is a gift.

Before we ever give anything, we are receivers.`,
      `2. God's greatest gift is Jesus

John 3:16 says God loved the world and gave His only begotten Son.

This is the center of Christian giving.

God did not give us leftovers.

He gave His Son.

The cross reveals that God's generosity is not shallow, cheap, or distant.

God gives Himself for the salvation of others.`,
      `3. Jesus gave Himself for us

First Timothy says Jesus gave Himself as a ransom for all.

Jesus was not forced into generosity.

He willingly gave Himself.

He gave His life to rescue us from sin, selfishness, fear, and death.

Christian generosity begins by looking at the self-giving heart of Christ.`,
      `4. God's giving teaches us to trust Him

Romans 8 says if God did not spare His own Son, we can trust Him to freely give what we truly need.

This does not mean God gives us every selfish desire.

It means His greatest gift proves His heart.

If God gave Jesus, we can trust His love, care, provision, and wisdom.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Gift',
      lemma: 'δῶρον',
      transliteration: 'dōron',
      meaning: 'Something given freely, not earned or purchased by the receiver.',
      strongs: 'G1435',
      reference: 'James 1:17',
      note: `A gift reveals the heart of the giver.

God's gifts reveal His character of love.

The greatest gift is Jesus, and every act of Christian generosity is meant to flow from receiving Him.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `God's kingdom starts with giving because God Himself is the Great Giver.

The world often teaches us to get, keep, protect, and accumulate.

But the gospel begins with a God who gives.

He gives life.
He gives mercy.
He gives daily provision.
He gives His Son.
He gives salvation.

And His giving is meant to create a new kind of life in us.

We do not give to make God generous.

We give because God has already been generous.

We do not give to earn His love.

We give because His love has reached us first.`,
    },
    studyInsightBlocks: godGivesFirstInsightBlocks,
    reflectPrompt: `When you think about giving, do you usually start with guilt, pressure, or God's generosity?

Think about money, time, service, energy, attention, and how your view of God shapes your willingness to give.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, begin with gratitude before giving.

Make a short list of five gifts God has already given you.

They may be simple:

Life.
Food.
Friendship.
Forgiveness.
Another day.
A skill.
A lesson.
A chance to grow.
Jesus.

Then ask:

"How can I reflect God's generosity today?"

Start small.

Encourage someone.
Share what you have.
Give time without needing applause.
Help someone without making it about you.

Generosity grows best in the soil of gratitude.

Prayer:

Father, thank You for being the Great Giver. Every good gift comes from You, and the greatest gift is Jesus. Help me receive Your love deeply so that generosity can grow in me. Free me from guilt-driven giving, selfishness, and fear. Teach me to give because You gave first. Amen.`,
    prayer: '',
    completionSummary: `God gives first. Every good gift comes from Him, and His greatest gift is Jesus. Christian generosity begins by receiving His grace.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'tltg-l1-q1',
          prompt: 'According to James 1:17, where does every good and perfect gift come from?',
          options: [
            'From above, from the Father of lights',
            'From human pride',
            'From selfishness',
            'From chance only',
          ],
          correctIndex: 0,
          explanation:
            'James says every good and perfect gift comes from above, from the Father of lights.',
        },
        {
          id: 'tltg-l1-q2',
          prompt: 'According to John 3:16, what did God give because He loved the world?',
          options: [
            'His only begotten Son',
            'A temporary idea',
            'A selfish command',
            'A burden without hope',
          ],
          correctIndex: 0,
          explanation: 'John 3:16 says God so loved the world that He gave His only begotten Son.',
        },
        {
          id: 'tltg-l1-q3',
          prompt: 'According to 1 Timothy 2:5-6, what did Jesus give Himself as?',
          options: [
            'A ransom for all',
            'A symbol of fear',
            'A reason to boast',
            'A replacement for love',
          ],
          correctIndex: 0,
          explanation: 'First Timothy says Jesus gave Himself a ransom for all.',
        },
        {
          id: 'tltg-l1-q4',
          prompt: 'What does Romans 8:32 teach us about God\'s heart?',
          options: [
            'If God gave His Son, we can trust His generous care',
            'God is unwilling to give anything',
            'God only gives when we force Him',
            'God\'s greatest gift was small',
          ],
          correctIndex: 0,
          explanation:
            'Romans 8:32 teaches that the gift of Jesus proves God\'s generous heart and care for us.',
        },
        {
          id: 'tltg-l1-q5',
          kind: 'reflection',
          prompt: 'What is one gift from God you often take for granted?',
          explanation:
            'Recognizing God\'s gifts helps generosity grow from gratitude instead of pressure.',
        },
      ],
    },
  },
  'the-circle-of-blessing': {
    openingThought: `God's kingdom does not run on taking.

It runs on giving.

Sin turns life inward.

It asks, "What can I get?"
"What can I keep?"
"How can this benefit me?"

But God's love moves in the opposite direction.

God gives.
We receive.
Grace changes us.
Then we give.

That is the circle of blessing.

True generosity does not end with us. It flows through us.`,
    scriptureRef: 'Luke 6:38',
    scriptureQuote:
      'Give, and it shall be given unto you; good measure, pressed down, and shaken together, and running over.\n\nFor with the same measure that ye mete withal it shall be measured to you again.',
    scriptureAfterPrimary: `This is not a selfish formula for getting rich.

It is a picture of how love works.

When generosity moves outward, blessing multiplies.`,
    scriptureSecondaryRef: 'Philippians 2:3-5',
    scriptureSecondaryQuote:
      'Let nothing be done through strife or vainglory; but in lowliness of mind let each esteem other better than themselves.\n\nLook not every man on his own things, but every man also on the things of others.\n\nLet this mind be in you, which was also in Christ Jesus.',
    scriptureAfterSecondary: `The mind of Christ looks beyond self-interest to the good of others.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: '1 John 4:19',
        quote: 'We love him, because he first loved us.',
      },
      {
        type: 'scripture',
        reference: 'Acts 20:35',
        quote: 'It is more blessed to give than to receive.',
      },
    ],
    teachingPoints: [
      `1. Giving creates a circle of blessing

Jesus says, "Give, and it shall be given unto you."

This is not a selfish formula for getting rich.

It is a picture of how love works.

When generosity moves outward, blessing multiplies.

Giving opens the heart, blesses others, and reflects the character of God.`,
      `2. God's love moves us outward

First John says we love because God first loved us.

God's love comes first.

We receive before we give.

But once God's love reaches us, it does not stay locked inside us.

Love received becomes love returned to God and love extended to others.`,
      `3. The mind of Christ is others-centered

Philippians tells us to look not only to our own interests, but also to the interests of others.

That is the mind of Jesus.

Christ did not use His position for selfish gain.

He gave Himself.

The life of Jesus shows that the highest kind of life is not self-protection, but self-giving love.`,
      `4. Giving is more blessed than taking

Jesus said it is more blessed to give than to receive.

That does not mean receiving is bad.

We receive every good gift from God.

But when receiving turns into hoarding, the soul shrinks.

Giving expands the heart because it aligns us with God's own character.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Blessing',
      lemma: 'εὐλογία',
      transliteration: 'eulogia',
      meaning: 'A gift, benefit, favor, or good that flows from God and brings life.',
      strongs: 'G2129',
      reference: 'Acts 20:35',
      note: `Blessing is not meant to stop with the receiver.

God blesses us so that His goodness can move through us to others.

The circle of blessing begins with God and continues as His love shapes us into givers.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The world often teaches a broken cycle:

Get.
Keep.
Protect.
Consume.
Repeat.

But God's kingdom teaches a better way:

Receive.
Give thanks.
Share.
Bless.
Reflect God.
Repeat.

This is not only about money.

It includes attention, mercy, time, forgiveness, hospitality, encouragement, service, and resources.

The circle of blessing begins with God as the Great Giver.

Then His grace creates generosity in us.

When we give, we are not losing life.

We are participating in the way life was meant to flow.`,
    },
    studyInsightBlocks: [
      {
        type: 'givingCirclePattern',
        title: 'The Circle of Blessing',
        caption: 'Grace received becomes love shared.',
        stages: [
          { label: 'God gives' },
          { label: 'We receive' },
          { label: 'We give thanks' },
          { label: 'We bless others' },
          { label: 'Others experience God\'s goodness' },
          { label: 'God is glorified' },
        ],
      },
      {
        type: 'scriptureChain',
        title: 'The Circle of Blessing',
        references: [
          { reference: 'Luke 6:38' },
          { reference: 'Philippians 2:3-5' },
          { reference: '1 John 4:19' },
          { reference: 'Acts 20:35' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: God gives first, and His love moves us outward into a life of generosity, service, and blessing.',
      },
    ],
    reflectPrompt: `Where are you more tempted to take, keep, or protect than to give, share, or bless?

Think about your time, money, attention, emotional energy, forgiveness, encouragement, or willingness to serve.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, practice the circle of blessing.

Choose one gift God has given you and let it move through you.

If God has given you encouragement, encourage someone.

If God has given you time, serve someone.

If God has given you resources, share with someone.

If God has given you mercy, show mercy to someone.

Do not overcomplicate it.

Ask one simple question:

"How can I let God's goodness move through me today?"

Prayer:

Father, thank You for giving first. Thank You that Your love moves outward and creates blessing. Teach me to receive with gratitude and give with joy. Free me from the fear of losing and the habit of hoarding. Let Your generosity shape my heart so others can experience Your goodness through my life. Amen.`,
    prayer: '',
    completionSummary: `God gives first, and His grace creates a circle of blessing. What we receive from Him is meant to flow through us to others.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'tltg-l2-q1',
          prompt: 'According to Luke 6:38, what happens when we give?',
          options: [
            'It shall be given unto us',
            'God forgets us',
            'Giving becomes meaningless',
            'Love stops flowing',
          ],
          correctIndex: 0,
          explanation:
            'Jesus teaches that giving creates a circle of blessing. What we measure out is measured back to us.',
        },
        {
          id: 'tltg-l2-q2',
          prompt: 'According to 1 John 4:19, why do we love?',
          options: [
            'Because God first loved us',
            'Because we earned God\'s love',
            'Because fear creates love',
            'Because love begins with us',
          ],
          correctIndex: 0,
          explanation:
            'First John says we love because God first loved us. God\'s love is the source of our love.',
        },
        {
          id: 'tltg-l2-q3',
          prompt: 'According to Philippians 2:3-5, what mindset should believers have?',
          options: [
            'The mind of Christ, looking also to the interests of others',
            'A self-centered mind',
            'A greedy mind',
            'A careless mind',
          ],
          correctIndex: 0,
          explanation:
            'Philippians calls believers to have the mind of Christ and to care about the interests of others.',
        },
        {
          id: 'tltg-l2-q4',
          prompt: 'According to Acts 20:35, what did Jesus say is more blessed?',
          options: [
            'To give than to receive',
            'To take than to give',
            'To hoard than to share',
            'To ignore others',
          ],
          correctIndex: 0,
          explanation: 'Jesus said it is more blessed to give than to receive.',
        },
        {
          id: 'tltg-l2-q5',
          kind: 'reflection',
          prompt:
            'What is one specific way you can let God\'s goodness move through you this week?',
          explanation:
            'The circle of blessing continues when we receive from God and then share His goodness with others.',
        },
      ],
    },
  },
  'from-taking-to-giving': {
    openingThought: `Sin turns the heart inward.

It teaches us to take, protect, compete, compare, and consume.

But Jesus came to rescue us from that way of living.

The gospel does not only forgive selfish people.

It transforms takers into givers.

God's love reaches us while we are curved inward, then begins turning us outward toward Him and others.

That is what grace does.

It does not simply cancel guilt.

It creates a new kind of life.`,
    scriptureRef: 'Titus 2:14',
    scriptureQuote:
      'Who gave himself for us, that he might redeem us from all iniquity, and purify unto himself a peculiar people, zealous of good works.',
    scriptureAfterPrimary: `Jesus gave Himself to redeem and purify a people who begin to love what He loves.`,
    scriptureSecondaryRef: 'Galatians 1:3-5',
    scriptureSecondaryQuote:
      'Grace be to you and peace from God the Father, and from our Lord Jesus Christ.\n\nWho gave himself for our sins, that he might deliver us from this present evil world.',
    scriptureAfterSecondary: `The gospel delivers us from a self-centered age into a new life in Christ.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: '2 Timothy 3:1-5',
        quote:
          'For men shall be lovers of their own selves... lovers of pleasures more than lovers of God.',
      },
      {
        type: 'scripture',
        reference: 'Philippians 2:4-5',
        quote:
          'Look not every man on his own things, but every man also on the things of others.\n\nLet this mind be in you, which was also in Christ Jesus.',
      },
    ],
    teachingPoints: [
      `1. Jesus gave Himself to redeem us

Titus says Jesus gave Himself for us.

That is the foundation of Christian transformation.

Jesus did not give a small gift from a safe distance.

He gave Himself.

His self-giving love redeems us from lawlessness, lovelessness, and selfishness.`,
      `2. Redemption changes what we desire

Titus says Jesus purifies a people who are zealous for good works.

That means grace does not leave the heart unchanged.

Jesus saves us from sin's guilt and from sin's pattern.

He begins creating a people who want to bless, serve, love, and give.`,
      `3. The present evil age is self-centered

Second Timothy describes a world where people are lovers of themselves, lovers of money, proud, unthankful, unholy, unloving, and lovers of pleasure more than lovers of God.

That is the spirit of taking.

When self becomes the center, people become tools, resources become idols, and love becomes conditional.

Jesus delivers us from that way of life.`,
      `4. The mind of Christ moves outward

Philippians calls us to look not only to our own interests, but also to the interests of others.

That is the mind of Jesus.

Christ's life moved outward in love.

When His Spirit works in us, we begin to move outward too.

We become less obsessed with getting and more open to giving.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Redeem',
      lemma: 'λυτρόω',
      transliteration: 'lutroō',
      meaning: 'To rescue, release, or deliver by paying a cost.',
      strongs: 'G3084',
      reference: 'Titus 2:14',
      note: `Jesus redeems us not only from guilt, but also from the selfish pattern of sin.

His self-giving love frees us from the life of taking and forms in us a new life of giving.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The gospel changes the direction of the heart.

Sin says:

Take for yourself.
Protect yourself.
Exalt yourself.
Please yourself.
Use others for yourself.

Jesus says:

Receive My love.
Trust My grace.
Let Me free you.
Serve in love.
Give because God has given to you.

This is not natural to the fallen heart.

It is supernatural.

Only grace can turn a taker into a giver.

Only Jesus can break the inward curve of selfishness and teach us the joy of other-centered love.`,
    },
    studyInsightBlocks: [
      takingToGivingVisual,
      {
        type: 'scriptureChain',
        title: 'From Taking to Giving',
        references: [
          { reference: 'Titus 2:14' },
          { reference: 'Galatians 1:3-5' },
          { reference: '2 Timothy 3:1-5' },
          { reference: 'Philippians 2:4-5' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: Jesus gave Himself to redeem us from selfishness and form in us a life of love, service, and generosity.',
      },
    ],
    reflectPrompt: `Where do you see the taking spirit of sin showing up in your own life?

Think about control, money, attention, relationships, comfort, pride, comparison, or using people to meet your own needs.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, identify one place where your heart naturally turns inward.

Then ask Jesus to turn it outward.

Use this simple question:

"What would giving look like here?"

If you usually protect your time, give someone your presence.

If you usually hold tightly to resources, share something.

If you usually seek attention, encourage someone else.

If you usually defend yourself, listen first.

Do not try to manufacture generosity from guilt.

Start with Jesus.

He gave Himself for you.

Let His love become the power that moves you outward.

Prayer:

Jesus, thank You for giving Yourself for me. Thank You for redeeming me from selfishness, fear, and the spirit of taking. Show me where my heart is still curved inward. Teach me to receive Your love deeply and reflect it freely. Make me generous, humble, and willing to bless others because You first blessed me. Amen.`,
    prayer: '',
    completionSummary: `Jesus gave Himself to redeem us from the inward pull of sin. His grace turns takers into givers and forms a life of other-centered love.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'tltg-l3-q1',
          prompt: 'According to Titus 2:14, what did Jesus give?',
          options: [
            'Himself for us',
            'A small leftover gift',
            'A reason to be selfish',
            'A message without sacrifice',
          ],
          correctIndex: 0,
          explanation:
            'Titus says Jesus gave Himself for us to redeem and purify a people zealous for good works.',
        },
        {
          id: 'tltg-l3-q2',
          prompt: 'According to Galatians 1:4, what did Jesus give Himself for?',
          options: [
            'Our sins, to deliver us from this present evil world',
            'His own selfish gain',
            'Human applause',
            'A temporary example only',
          ],
          correctIndex: 0,
          explanation:
            'Galatians says Jesus gave Himself for our sins so He might deliver us from this present evil world.',
        },
        {
          id: 'tltg-l3-q3',
          prompt: 'What does 2 Timothy 3 describe as a mark of the last days?',
          options: [
            'People being lovers of their own selves',
            'People naturally becoming perfect',
            'A world without selfishness',
            'Sin disappearing without Christ',
          ],
          correctIndex: 0,
          explanation:
            'Second Timothy describes people as lovers of their own selves, showing the self-centered spirit of sin.',
        },
        {
          id: 'tltg-l3-q4',
          prompt: 'According to Philippians 2:4-5, what mind should believers have?',
          options: [
            'The mind of Christ, looking also to the interests of others',
            'A mind focused only on self',
            'A mind ruled by greed',
            'A mind that ignores others',
          ],
          correctIndex: 0,
          explanation:
            'Paul calls believers to have the mind of Christ and to look also to the interests of others.',
        },
        {
          id: 'tltg-l3-q5',
          kind: 'reflection',
          prompt: 'What is one practical way Jesus is calling you to move from taking to giving?',
          explanation:
            'Grace changes the direction of the heart. Jesus redeems us from self-centered living and teaches us to love outwardly.',
        },
      ],
    },
  },
  'everything-belongs-to-god': {
    openingThought: `Generosity begins with ownership.

If we believe everything belongs to us, giving will always feel like losing.

But if we believe everything belongs to God, giving becomes stewardship.

Scripture teaches that God owns the earth, the resources in it, and even the ability we have to produce wealth.

That means we are not owners in the ultimate sense.

We are stewards.

A steward manages what belongs to someone else.

When we understand that everything comes from God, generosity stops being a threat and becomes an act of trust.`,
    scriptureRef: 'Psalm 24:1',
    scriptureQuote:
      'The earth is the LORD\'S, and the fulness thereof; the world, and they that dwell therein.',
    scriptureAfterPrimary: `Everything we see, use, and depend on begins with God's ownership.`,
    scriptureSecondaryRef: 'Haggai 2:8',
    scriptureSecondaryQuote: 'The silver is mine, and the gold is mine, saith the LORD of hosts.',
    scriptureAfterSecondary: `Material blessings belong to God, not to human pride.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Deuteronomy 8:18',
        quote:
          'But thou shalt remember the LORD thy God: for it is he that giveth thee power to get wealth.',
      },
      {
        type: 'scripture',
        reference: '1 Chronicles 29:14',
        quote:
          'But who am I, and what is my people, that we should be able to offer so willingly after this sort?\n\nFor all things come of thee, and of thine own have we given thee.',
      },
    ],
    teachingPoints: [
      `1. The earth belongs to God

Psalm 24 says the earth is the Lord's and everything in it.

That is a direct challenge to the way we often think.

Our money, possessions, opportunities, skills, and resources do not begin with us.

They belong to God first.

We hold them temporarily, but He owns them ultimately.`,
      `2. Material blessings belong to God

Haggai says the silver and gold belong to the Lord.

God is not against material blessing.

But He does want us to see material blessing correctly.

Money is not our master.

Possessions are not our identity.

Resources are not meant to become idols.

They are gifts entrusted by God for faithful use.`,
      `3. God gives the ability to produce wealth

Deuteronomy says God gives the power to get wealth.

This includes strength, intelligence, opportunity, timing, health, relationships, and ability.

Even when we work hard, we are still dependent on God.

Hard work matters.

But hard work is not independent from grace.`,
      `4. Giving is returning what came from God

David said, "Of thine own have we given thee."

That is the heart of stewardship.

When we give to God, we are not enriching Him.

We are returning from what He already gave.

Generosity is not God taking from us.

It is God inviting us to participate in His purpose with what was His all along.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Steward',
      lemma: 'οἰκονόμος',
      transliteration: 'oikonomos',
      meaning: 'A person entrusted to manage what belongs to another.',
      strongs: 'G3623',
      reference: '1 Chronicles 29:14',
      note: `A steward does not own everything independently.

A steward manages faithfully.

Biblical stewardship means recognizing that our lives, resources, abilities, and opportunities belong to God and are entrusted to us for His purposes.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'scripture_connection',
      body: `The question is not only, "How much should I give?"

The deeper question is:

"What do I believe I own?"

If we believe everything is ours, giving feels like loss.

If we believe everything is God's, giving becomes worship.

This changes how we see money.

Money is not merely personal power.

It is entrusted influence.

It can serve selfishness, or it can serve love.

It can build ego, or it can bless people.

It can feed fear, or it can support mission.

The Bible's view is simple:

God owns everything.

We manage what He gives.

Faithful generosity begins there.`,
    },
    studyInsightBlocks: [
      {
        type: 'givingCirclePattern',
        title: 'Stewardship',
        caption: 'Stewardship begins when we realize everything belongs to God.',
        stages: [
          { label: 'God owns' },
          { label: 'God entrusts' },
          { label: 'We manage' },
          { label: 'We give' },
          { label: 'Others are blessed' },
          { label: 'God is honored' },
        ],
      },
      {
        type: 'scriptureChain',
        title: 'Everything Belongs to God',
        references: [
          { reference: 'Psalm 24:1' },
          { reference: 'Haggai 2:8' },
          { reference: 'Deuteronomy 8:18' },
          { reference: '1 Chronicles 29:14' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: God owns all things and gives us the ability to produce and manage resources. Generosity is returning to God from what He already gave.',
      },
    ],
    reflectPrompt: `What resource do you tend to treat as fully yours instead of entrusted by God?

Think about money, time, skills, influence, possessions, career opportunities, or even your physical energy.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, choose one resource and consciously give it back to God.

It may be money.
It may be time.
It may be a skill.
It may be your schedule.
It may be your influence.

Pray over it and say:

"Lord, this came from You. Show me how to manage it faithfully."

Then take one practical step.

Give.
Serve.
Budget with intention.
Stop wasting what God entrusted.
Use your skill to bless someone.
Share something you have been holding too tightly.

Stewardship starts when ownership is surrendered.

Prayer:

Father, thank You for every gift You have entrusted to me. The earth is Yours, and everything I have comes from You. Help me stop living like an owner and start living like a faithful steward. Teach me to manage my resources with wisdom, gratitude, and generosity. Use what You have placed in my hands to bless others and honor You. Amen.`,
    prayer: '',
    completionSummary: `Everything belongs to God. We are not ultimate owners, but stewards entrusted with His gifts to manage faithfully and generously.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'tltg-l4-q1',
          prompt: 'According to Psalm 24:1, who does the earth belong to?',
          options: ['The Lord', 'Human pride', 'The strongest person', 'No one'],
          correctIndex: 0,
          explanation: 'Psalm 24:1 says the earth is the Lord\'s and the fullness thereof.',
        },
        {
          id: 'tltg-l4-q2',
          prompt: 'According to Haggai 2:8, what belongs to the Lord?',
          options: [
            'The silver and the gold',
            'Only spiritual things',
            'Nothing material',
            'Only the temple furniture',
          ],
          correctIndex: 0,
          explanation:
            'God says the silver and the gold are His, showing that material blessings belong to Him.',
        },
        {
          id: 'tltg-l4-q3',
          prompt: 'According to Deuteronomy 8:18, who gives the power to get wealth?',
          options: ['The Lord God', 'Human pride alone', 'Luck only', 'Money itself'],
          correctIndex: 0,
          explanation:
            'Deuteronomy says God gives the power to get wealth, reminding us that even our ability comes from Him.',
        },
        {
          id: 'tltg-l4-q4',
          prompt: 'According to 1 Chronicles 29:14, what did David recognize about giving?',
          options: [
            'All things come from God, and we give back from what is His',
            'Giving makes humans superior to God',
            'God needs our money to survive',
            'Resources have no connection to worship',
          ],
          correctIndex: 0,
          explanation:
            'David said, "All things come of thee, and of thine own have we given thee."',
        },
        {
          id: 'tltg-l4-q5',
          kind: 'reflection',
          prompt:
            'How would your generosity change if you truly believed everything you have belongs to God?',
          explanation:
            'Stewardship begins by recognizing that God owns everything and we manage His gifts for His purposes.',
        },
      ],
    },
  },
  'returning-the-tithe': {
    openingThought: `Tithe is not about God needing money.

God owns everything.

The earth is His.
The silver is His.
The gold is His.
The breath in our lungs is His.

So why does God ask His people to return tithe?

Because tithe teaches trust.

It reminds us that increase comes from God. It trains the heart to acknowledge Him first. It keeps money from becoming our master.

Tithe is not a bribe.

It is not a payment for salvation.

It is a faith response to the God who provides.`,
    scriptureRef: 'Leviticus 27:30',
    scriptureQuote:
      'And all the tithe of the land... is the LORD\'S: it is holy unto the LORD.',
    scriptureAfterPrimary: `The tithe already belongs to God.

Returning it is recognition, not invention.`,
    scriptureSecondaryRef: 'Genesis 28:22',
    scriptureSecondaryQuote:
      'And of all that thou shalt give me I will surely give the tenth unto thee.',
    scriptureAfterSecondary: `Jacob understood that giving back began with receiving from God.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Numbers 18:21',
        quote:
          'And, behold, I have given the children of Levi all the tenth in Israel for an inheritance, for their service.',
      },
      {
        type: 'scripture',
        reference: 'Malachi 3:10',
        quote:
          'Bring ye all the tithes into the storehouse, that there may be meat in mine house.',
      },
      {
        type: 'scripture',
        reference: 'Deuteronomy 8:18',
        quote:
          'But thou shalt remember the LORD thy God: for it is he that giveth thee power to get wealth.',
      },
    ],
    teachingPoints: [
      `1. Tithe belongs to the Lord

Leviticus says the tithe is the Lord's and is holy unto Him.

That means tithe is not first described as something we invent.

It already belongs to God.

Returning tithe is an act of recognition.

We acknowledge that God is the source of our increase and that everything we have comes from Him.`,
      `2. Tithe is connected to trust

Jacob promised to give a tenth of what God gave him.

The language is important:

"Of all that thou shalt give me."

Jacob understood that giving back began with receiving from God.

Tithe trains the heart to remember that provision is not self-created.

God gives first.`,
      `3. Tithe supports God's work

Numbers shows that the tithe supported the Levites in their service.

In Scripture, tithe is connected to the work of ministry, worship, and spiritual service.

It is not random giving.

It is structured support for the work God appointed.

Tithe reminds us that God's mission is meant to be sustained by God's people.`,
      `4. Tithe confronts fear and self-reliance

Malachi calls God's people to bring the tithes into the storehouse.

The issue was not only money.

It was trust.

When we hold back what belongs to God, we often reveal fear underneath.

Fear that there will not be enough.
Fear that we must secure ourselves.
Fear that God cannot provide.

Tithe becomes a weekly or monthly confession:

God is my source.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Tithe',
      lemma: 'מַעֲשֵׂר',
      transliteration: 'ma\'aser',
      meaning: 'A tenth.',
      strongs: 'H4643',
      reference: 'Leviticus 27:30',
      note: `Tithe means returning one tenth of increase to God.

It is not about earning salvation or buying blessing.

It is an act of worship, trust, and stewardship that recognizes God as the source of all provision.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'scripture_connection',
      body: `Tithe is one of the clearest ways Scripture challenges the heart's relationship with money.

Money can make us feel powerful.

It can make us feel secure.

It can make us feel independent.

But tithe interrupts that illusion.

It says:

God gave first.
God owns everything.
God provides increase.
God's work matters.
Money is not my master.

Returning tithe does not mean we are paying God back as if we could settle the account.

We cannot.

It means we are acknowledging Him first with what He has entrusted to us.

This keeps generosity from becoming vague.

Tithe gives faith a concrete practice.`,
    },
    studyInsightBlocks: [
      {
        type: 'givingCirclePattern',
        title: 'Returning the tithe',
        caption: 'Tithe is returned, not paid. It belongs to the Lord.',
        stages: [
          { label: 'God gives increase' },
          { label: 'We recognize Him as source' },
          { label: 'We return the tenth' },
          { label: 'God\'s work is supported' },
          { label: 'The heart learns trust' },
        ],
      },
      {
        type: 'scriptureChain',
        title: 'Returning What Belongs to God',
        references: [
          { reference: 'Genesis 28:22' },
          { reference: 'Leviticus 27:30' },
          { reference: 'Numbers 18:21' },
          { reference: 'Malachi 3:10' },
          { reference: 'Deuteronomy 8:18' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: Tithe is the tenth that belongs to the Lord. Returning it is an act of worship, trust, and support for God\'s work.',
      },
    ],
    reflectPrompt: `What does your relationship with money reveal about your trust in God?

Think about fear, control, generosity, anxiety, budgeting, giving, and whether you see God as your true source.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, look honestly at your increase and your giving.

Do not start with shame.

Start with surrender.

Ask:

"Lord, am I recognizing You first with what You have entrusted to me?"

If you already return tithe, ask God to keep it from becoming empty routine.

If you do not, ask God to help you take a faithful next step.

Tithe is not about God needing your money.

It is about your heart learning to trust the God who gives.

Prayer:

Father, thank You for being the source of all provision. Everything I have comes from You. Teach me to return tithe with faith, gratitude, and trust. Free me from fear, greed, and self-reliance. Help me honor You first and support Your work with a willing heart. Amen.`,
    prayer: '',
    completionSummary: `Tithe belongs to the Lord. Returning it is not buying salvation, but acknowledging God as the source of every increase and supporting His work with trust.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'tltg-l5-q1',
          prompt: 'According to Leviticus 27:30, who does the tithe belong to?',
          options: ['The Lord', 'The strongest person', 'Human pride', 'No one'],
          correctIndex: 0,
          explanation: 'Leviticus says the tithe is the Lord\'s and is holy unto Him.',
        },
        {
          id: 'tltg-l5-q2',
          prompt: 'What does the word "tithe" mean?',
          options: [
            'A tenth',
            'A random amount',
            'A yearly tax only',
            'A feeling of generosity',
          ],
          correctIndex: 0,
          explanation: 'Tithe means a tenth. It refers to returning one tenth of increase to God.',
        },
        {
          id: 'tltg-l5-q3',
          prompt: 'According to Numbers 18:21, what did the tithe support?',
          options: [
            'The service of the Levites',
            'The building of Egypt',
            'Personal luxury only',
            'Roman soldiers',
          ],
          correctIndex: 0,
          explanation:
            'Numbers shows that the tithe supported the Levites in their spiritual service.',
        },
        {
          id: 'tltg-l5-q4',
          prompt: 'According to Deuteronomy 8:18, what should we remember?',
          options: [
            'God gives the power to get wealth',
            'Wealth comes only from luck',
            'Money is our savior',
            'God has no connection to provision',
          ],
          correctIndex: 0,
          explanation: 'Deuteronomy reminds us that God gives the power to get wealth.',
        },
        {
          id: 'tltg-l5-q5',
          kind: 'reflection',
          prompt:
            'What is one practical step you can take to acknowledge God first with your resources?',
          explanation:
            'Tithe trains the heart to recognize God as the source of provision and to trust Him with what He has entrusted to us.',
        },
      ],
    },
  },
  'offerings-from-the-heart': {
    openingThought: `Tithe teaches us to recognize God as the source.

Offerings teach us to respond with love.

Tithe is the tenth that belongs to the Lord.

Offerings go beyond the tithe. They are gifts freely given from a grateful heart.

God does not want forced generosity.

He wants willing love.

An offering is not about impressing God, proving spirituality, or giving under pressure.

It is the heart saying:

"God has been generous to me, so I want my life to become generous too."`,
    scriptureRef: '2 Corinthians 9:7',
    scriptureQuote:
      'Every man according as he purposeth in his heart, so let him give; not grudgingly, or of necessity: for God loveth a cheerful giver.',
    scriptureAfterPrimary: `God wants willing, thoughtful, love-shaped giving.`,
    scriptureSecondaryRef: 'Deuteronomy 16:17',
    scriptureSecondaryQuote:
      'Every man shall give as he is able, according to the blessing of the LORD thy God which he hath given thee.',
    scriptureAfterSecondary: `Offerings are faithful responses to God's blessing, not competitions for attention.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: '2 Corinthians 9:6',
        quote:
          'He which soweth sparingly shall reap also sparingly; and he which soweth bountifully shall reap also bountifully.',
      },
      {
        type: 'scripture',
        reference: 'Matthew 6:19-21',
        quote:
          'Lay not up for yourselves treasures upon earth.\n\nFor where your treasure is, there will your heart be also.',
      },
    ],
    teachingPoints: [
      `1. Offerings are given willingly

Paul says giving should not be grudging or forced.

That matters.

God is not looking for generosity that comes from manipulation, guilt, or public pressure.

He wants the heart.

A true offering is willing, thoughtful, and love-shaped.`,
      `2. Offerings are connected to ability

Deuteronomy says every person should give as they are able, according to the blessing God has given.

This means offerings are not about comparison.

One person may give more. Another may give less.

The issue is not showing off.

The issue is faithful response to God's blessing.`,
      `3. Generosity is like sowing

Paul compares giving to sowing seed.

A person who sows sparingly reaps sparingly. A person who sows generously reaps generously.

This is not a selfish formula for getting rich.

It is a kingdom principle.

Generosity produces blessing, shapes the heart, supports God's work, and blesses people.`,
      `4. Giving reveals the heart

Jesus said where your treasure is, there your heart will be also.

Money follows worship.

What we invest in reveals what we value.

Offerings help train the heart away from selfish treasure and toward God's kingdom.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Cheerful',
      lemma: 'ἱλαρός',
      transliteration: 'hilaros',
      meaning: 'Willing, glad, ready, and free from resentment.',
      strongs: 'G2431',
      reference: '2 Corinthians 9:7',
      note: `God loves a cheerful giver because cheerful giving reflects trust.

It shows that the heart is not giving under fear or pressure, but in response to God's generosity and grace.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `Offerings reveal the difference between religious pressure and gospel generosity.

Pressure says:

"You have to give so God will approve of you."

Grace says:

"God has already given to you, so now you are free to give with joy."

Offerings are not meant to be careless or random.

They should be thoughtful.

They should be intentional.

They should come from a heart that recognizes God's blessing and wants to participate in His work.

This is why cheerful giving matters.

God is not only looking at the amount.

He is forming the heart behind the gift.`,
    },
    studyInsightBlocks: [
      forcedVsHeartGivingVisual,
      {
        type: 'scriptureChain',
        title: 'Giving From the Heart',
        references: [
          { reference: 'Deuteronomy 16:17' },
          { reference: '2 Corinthians 9:6-10' },
          { reference: 'Matthew 6:19-21' },
          { reference: 'Acts 20:35' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: Offerings are willing gifts that flow from gratitude, trust, and love for God\'s kingdom.',
      },
    ],
    reflectPrompt: `When you give, what usually motivates you: gratitude, guilt, pressure, love, fear, or trust?

Be honest. God is not only interested in the gift itself. He wants to heal and form the heart behind the giving.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, plan one offering from the heart.

Do not make it random.

Pray first.

Ask:

"Lord, what have You blessed me with, and how can I respond with generosity?"

Then give in a way that is willing and thoughtful.

It may be financial.

It may be practical.

It may be serving someone in need.

It may be supporting ministry.

The goal is not to impress anyone.

The goal is to let gratitude become action.

Prayer:

Father, thank You for every blessing You have given me. Teach me to give willingly, thoughtfully, and cheerfully. Free me from guilt-driven giving and selfish holding. Shape my heart through generosity, and help my resources reflect love for You and compassion for others. Amen.`,
    prayer: '',
    completionSummary: `Offerings flow from the heart. God invites cheerful, willing generosity that reflects gratitude, trust, and love.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'tltg-l6-q1',
          prompt: 'According to 2 Corinthians 9:7, what kind of giver does God love?',
          options: [
            'A cheerful giver',
            'A resentful giver',
            'A forced giver',
            'A boastful giver',
          ],
          correctIndex: 0,
          explanation:
            'Paul says God loves a cheerful giver, meaning giving should come willingly from the heart.',
        },
        {
          id: 'tltg-l6-q2',
          prompt: 'According to Deuteronomy 16:17, how should each person give?',
          options: [
            'As they are able, according to God\'s blessing',
            'Only to impress others',
            'Exactly the same amount as everyone else',
            'With no thought or gratitude',
          ],
          correctIndex: 0,
          explanation:
            'Deuteronomy teaches that giving should be according to ability and the blessing God has given.',
        },
        {
          id: 'tltg-l6-q3',
          prompt: 'What does 2 Corinthians 9:6 compare generosity to?',
          options: ['Sowing seed', 'Hiding treasure', 'Losing faith', 'Buying salvation'],
          correctIndex: 0,
          explanation: 'Paul compares giving to sowing. Generous sowing leads to generous reaping.',
        },
        {
          id: 'tltg-l6-q4',
          prompt: 'According to Matthew 6:21, what follows our treasure?',
          options: ['Our heart', 'Our fear only', 'Our confusion', 'Our pride alone'],
          correctIndex: 0,
          explanation: 'Jesus said where your treasure is, there your heart will be also.',
        },
        {
          id: 'tltg-l6-q5',
          kind: 'reflection',
          prompt: 'What is one way you can let gratitude become action this week?',
          explanation:
            'Offerings are not only about money. They are willing responses of love, trust, and gratitude toward God and others.',
        },
      ],
    },
  },
  'giving-as-love-in-action': {
    openingThought: `Love that never gives is only a theory.

God's love moved.

God gave life.
God gave breath.
God gave provision.
God gave His Son.

When His love reaches us, it begins to move through us.

Giving is not only about money.

It is about a life shaped by God's generosity.

Tithes, offerings, service, mercy, time, encouragement, and practical help all become ways love takes action.

The life that gives is not trying to impress God.

It is reflecting the God who gave first.`,
    scriptureRef: '1 John 3:16-18',
    scriptureQuote:
      'Hereby perceive we the love of God, because he laid down his life for us.\n\nAnd we ought to lay down our lives for the brethren.\n\nMy little children, let us not love in word, neither in tongue; but in deed and in truth.',
    scriptureAfterPrimary: `God's love is seen in sacrifice, and ours should become visible in action too.`,
    scriptureSecondaryRef: 'Acts 20:35',
    scriptureSecondaryQuote: 'It is more blessed to give than to receive.',
    scriptureAfterSecondary: `Giving blesses the giver because it aligns us with God's heart.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Matthew 23:23',
        quote:
          'Ye pay tithe of mint and anise and cummin, and have omitted the weightier matters of the law, judgment, mercy, and faith.',
      },
      {
        type: 'scripture',
        reference: 'Luke 11:42',
        quote: 'These ought ye to have done, and not to leave the other undone.',
      },
      {
        type: 'scripture',
        reference: '2 Corinthians 9:8',
        quote: 'And God is able to make all grace abound toward you.',
      },
    ],
    teachingPoints: [
      `1. God's love becomes visible through action

John says we understand love because Jesus laid down His life for us.

Then he calls believers to love not only in word, but in deed and truth.

Real love moves beyond speech.

It becomes practical.

It gives.
It serves.
It notices needs.
It responds with compassion.`,
      `2. Giving includes more than money

Tithe and offerings matter, but generosity is bigger than financial giving.

A giving life includes time, attention, encouragement, hospitality, mercy, forgiveness, service, and practical help.

Money is one part of stewardship.

But the whole life belongs to God.`,
      `3. God cares about both giving and mercy

Jesus corrected leaders who were careful about tithe but neglected judgment, mercy, and faith.

He did not say tithe was meaningless.

He said they should not leave mercy undone.

This matters.

Biblical giving cannot be separated from love, justice, compassion, and faithfulness.

God wants the gift and the heart.`,
      `4. Grace supplies what generosity requires

Second Corinthians says God is able to make all grace abound toward us.

Generosity can feel risky.

We fear not having enough.
We fear being overlooked.
We fear losing control.

But grace teaches us that God is able to supply what He calls us to share.

We give because we trust the Giver.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Deed',
      lemma: 'ἔργον',
      transliteration: 'ergon',
      meaning: 'An action, work, or something actually done.',
      strongs: 'G2041',
      reference: '1 John 3:18',
      note: `First John says love should be shown in deed and truth.

This means biblical love is not only spoken.

It becomes visible through practical action, sacrifice, generosity, and faithful care for others.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The Life That Gives has shown one clear movement:

God gives first.

His grace creates a circle of blessing.

Jesus redeems us from taking and self-centeredness.

Everything belongs to God.

Tithe teaches trust.

Offerings express willing gratitude.

Now the whole life becomes love in action.

This is the point.

God is not merely trying to get money from His people.

He is forming generous people.

People who trust Him.
People who steward faithfully.
People who give cheerfully.
People who care about mercy.
People who bless others because they have been blessed.

Generosity is not a side topic.

It is a sign that God's love is reshaping the heart.`,
    },
    studyInsightBlocks: [
      lifeThatGivesSeriesRecapVisual,
      {
        type: 'scriptureChain',
        title: 'Love Made Visible',
        references: [
          { reference: '1 John 3:16-18' },
          { reference: 'Acts 20:35' },
          { reference: 'Matthew 23:23' },
          { reference: '2 Corinthians 9:8' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: God\'s love becomes visible through generosity, mercy, service, stewardship, and practical care for others.',
      },
    ],
    reflectPrompt: `Where is God inviting you to make love more visible through giving?

Think beyond money. Consider your time, attention, encouragement, mercy, service, resources, skills, and willingness to help someone in need.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, practice giving as love in action.

Choose one concrete act of generosity.

Not vague good intentions.

Something real.

Give an offering.
Help someone quietly.
Encourage someone who feels forgotten.
Share a resource.
Serve without needing credit.
Return tithe with renewed trust.
Make room in your schedule for someone else's need.

Before you do it, pray:

"Lord, let this reflect Your love, not my ego."

Then give with humility.

The goal is not to be seen as generous.

The goal is to let God's generosity move through you.

Prayer:

Father, thank You for giving first. Thank You for the gift of Jesus and for every blessing You have entrusted to me. Make my life generous in deed and in truth. Teach me to return tithe with trust, give offerings with joy, serve with humility, and love people in practical ways. Let my life reflect Your giving heart. Amen.`,
    prayer: '',
    completionSummary: `You have completed The Life That Gives. God gives first, and His grace forms generous people who return, share, serve, and love in action.`,
    seriesCompleteScreen: {
      title: 'Study Complete',
      message:
        'You have completed The Life That Gives. God gives first, and His grace forms generous people who return, share, serve, and love in action.',
      primaryCta: { label: 'Back to Foundations Path', href: '/paths/foundations' },
      secondaryCta: {
        label: 'Review this study',
        href: '/study-library/the-life-that-gives',
      },
    },
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'tltg-l7-q1',
          prompt: 'According to 1 John 3:16, how do we perceive the love of God?',
          options: [
            'Jesus laid down His life for us',
            'God ignored human need',
            'Love never requires action',
            'Giving is unnecessary',
          ],
          correctIndex: 0,
          explanation:
            'First John says we perceive the love of God because Jesus laid down His life for us.',
        },
        {
          id: 'tltg-l7-q2',
          prompt: 'According to 1 John 3:18, how should we love?',
          options: [
            'In deed and in truth',
            'In words only',
            'In appearance only',
            'With no practical action',
          ],
          correctIndex: 0,
          explanation:
            'John teaches that love should not remain only in word or tongue, but should be shown in deed and truth.',
        },
        {
          id: 'tltg-l7-q3',
          prompt: 'According to Acts 20:35, what did Jesus say is more blessed?',
          options: [
            'To give than to receive',
            'To hoard than to share',
            'To take than to give',
            'To ignore the needy',
          ],
          correctIndex: 0,
          explanation: 'Jesus said it is more blessed to give than to receive.',
        },
        {
          id: 'tltg-l7-q4',
          prompt: 'What did Jesus say was neglected in Matthew 23:23?',
          options: [
            'Judgment, mercy, and faith',
            'Greed, pride, and selfishness',
            'Wealth, power, and status',
            'Appearance, applause, and control',
          ],
          correctIndex: 0,
          explanation:
            'Jesus corrected those who were careful with tithe but neglected the weightier matters of the law: judgment, mercy, and faith.',
        },
        {
          id: 'tltg-l7-q5',
          kind: 'reflection',
          prompt: 'What is one practical way you can love in deed and truth this week?',
          explanation:
            'Biblical love becomes visible through action. Giving, serving, mercy, and practical care show that God\'s love is shaping the heart.',
        },
      ],
    },
  },
}
