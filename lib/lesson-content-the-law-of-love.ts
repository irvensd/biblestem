import type { LessonContentBlock, StudyVisualLessonBlock } from '@/lib/lesson-content-blocks'
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

const loveTowardGodAndOthersVisual: StudyVisualLessonBlock = {
  type: 'studyVisual',
  title: 'Love in two directions',
  accent: 'sage',
  payload: {
    variant: 'comparison',
    leftTitle: 'Love toward God',
    rightTitle: 'Love toward others',
    leftItems: ['Worship', 'Loyalty', 'Reverence', 'Sacred time'],
    rightItems: ['Honor', 'Faithfulness', 'Truth', 'Respect', 'Contentment'],
  },
  footnote: 'The Ten Commandments show love in two directions: toward God and toward people.',
}

const godsLawVersusSinVisual: StudyVisualLessonBlock = {
  type: 'studyVisual',
  title: 'Law and sin',
  accent: 'stone',
  payload: {
    variant: 'comparison',
    leftTitle: 'God\'s law',
    rightTitle: 'Sin within us',
    leftItems: ['love', 'truth', 'faithfulness', 'worship', 'life'],
    rightItems: ['selfishness', 'hiding', 'betrayal', 'idolatry', 'death'],
  },
  footnote: 'The law reveals love. Sin reveals our need for a Savior.',
}

const lawRevealsRescueVisual: StudyVisualLessonBlock = {
  type: 'studyVisual',
  title: 'The law shows the need',
  accent: 'sage',
  payload: {
    variant: 'sequence',
    steps: [
      {
        label: 'The law reveals',
        subtitle: 'God\'s love and our need.',
      },
      {
        label: 'Human effort cannot',
        subtitle: 'Erase guilt, heal the heart, or create righteousness.',
      },
      {
        label: 'Jesus provides',
        subtitle: 'Forgiveness, righteousness, and new life.',
      },
    ],
  },
  footnote: 'The law shows the need. Jesus provides the rescue.',
}

const selfMadeVersusGiftRighteousnessVisual: StudyVisualLessonBlock = {
  type: 'studyVisual',
  title: 'Two kinds of righteousness',
  accent: 'stone',
  payload: {
    variant: 'comparison',
    leftTitle: 'Self-made righteousness',
    rightTitle: 'Christ\'s righteousness',
    leftItems: ['performance', 'pride', 'fear', 'insecurity'],
    rightItems: ['gift', 'grace', 'acceptance', 'transformation'],
  },
  footnote: 'Righteousness is received in Christ before it is reflected in the life.',
}

const oldWayVersusNewCovenantVisual: StudyVisualLessonBlock = {
  type: 'studyVisual',
  title: 'Law on the heart',
  accent: 'sage',
  payload: {
    variant: 'comparison',
    leftTitle: 'Old way',
    rightTitle: 'New covenant',
    leftItems: ['law outside', 'heart resistant', 'obedience by fear'],
    rightItems: ['law within', 'heart renewed', 'obedience by the Spirit'],
  },
  footnote: 'God does not lower love. He writes it within.',
}

const falseFreedomVersusTrueFreedomVisual: StudyVisualLessonBlock = {
  type: 'studyVisual',
  title: 'Two kinds of freedom',
  accent: 'sage',
  payload: {
    variant: 'comparison',
    leftTitle: 'False Freedom',
    rightTitle: 'True Freedom',
    leftItems: ['do whatever self wants', 'bondage', 'harm', 'guilt', 'broken trust'],
    rightItems: ['live in God\'s love', 'peace', 'trust', 'worship', 'restored relationships'],
  },
  footnote: 'The law of liberty protects the life love was made for.',
}

const lawOfLoveSeriesRecapVisual: StudyVisualLessonBlock = {
  type: 'studyVisual',
  title: 'The Law of Love',
  accent: 'sage',
  payload: {
    variant: 'sequence',
    steps: [
      { label: 'God is love', subtitle: '' },
      { label: 'His law reveals love', subtitle: '' },
      { label: 'Sin bends us away from love', subtitle: '' },
      { label: 'Jesus gives righteousness', subtitle: '' },
      { label: 'The Spirit writes love within', subtitle: '' },
      { label: 'God\'s law becomes liberty', subtitle: '' },
      { label: 'Believers live love in action', subtitle: '' },
    ],
  },
  footnote: 'We do not obey to become loved. We obey because love has reached us.',
}

const loveLivedOutInsightBlocks: LessonContentBlock[] = [
  lawOfLoveSeriesRecapVisual,
  {
    type: 'scriptureChain',
    title: 'Love Lived Out',
    references: [
      { reference: '1 John 4:19' },
      { reference: 'John 13:34-35' },
      { reference: 'Galatians 5:13-14' },
      { reference: 'Romans 13:10' },
    ],
  },
  {
    type: 'paragraph',
    text: 'Takeaway: God\'s love comes first. As we receive His love in Christ, we begin to live love toward God and others.',
  },
]

const lawOfLibertyInsightBlocks: LessonContentBlock[] = [
  falseFreedomVersusTrueFreedomVisual,
  {
    type: 'scriptureChain',
    title: 'The Law of Liberty',
    references: [
      { reference: 'James 1:25' },
      { reference: 'Psalm 119:32' },
      { reference: 'Romans 13:10' },
      { reference: 'John 8:36' },
    ],
  },
  {
    type: 'paragraph',
    text: 'Takeaway: God\'s law is not bondage. It reveals the life of love and freedom that Jesus restores in us.',
  },
]

const writtenOnTheHeartInsightBlocks: LessonContentBlock[] = [
  oldWayVersusNewCovenantVisual,
  {
    type: 'scriptureChain',
    title: 'Written on the Heart',
    references: [
      { reference: 'Jeremiah 31:31-34' },
      { reference: 'Hebrews 8:10' },
      { reference: 'Ezekiel 36:26-27' },
      { reference: 'Romans 7:6' },
    ],
  },
  {
    type: 'paragraph',
    text: 'Takeaway: In the new covenant, God writes His law of love in the heart and creates obedience through the Spirit.',
  },
]

const giftOfRighteousnessInsightBlocks: LessonContentBlock[] = [
  selfMadeVersusGiftRighteousnessVisual,
  {
    type: 'scriptureChain',
    title: 'The Gift of Righteousness',
    references: [
      { reference: 'Romans 3:24' },
      { reference: 'Romans 5:17' },
      { reference: 'Jeremiah 23:6' },
      { reference: 'Philippians 3:9' },
    ],
  },
  {
    type: 'paragraph',
    text: 'Takeaway: God gives righteousness through Jesus. Faith receives the gift, and grace begins transforming the life.',
  },
]

const saviorWeNeedInsightBlocks: LessonContentBlock[] = [
  lawRevealsRescueVisual,
  {
    type: 'scriptureChain',
    title: 'The Savior We Need',
    references: [
      { reference: 'Romans 7:24-25' },
      { reference: 'Isaiah 64:6' },
      { reference: 'Jeremiah 23:6' },
      { reference: 'Romans 5:19' },
    ],
  },
  {
    type: 'paragraph',
    text: 'Takeaway: God\'s law reveals our need, but Jesus provides the righteousness and rescue we could never create ourselves.',
  },
]

const problemWithinInsightBlocks: LessonContentBlock[] = [
  godsLawVersusSinVisual,
  {
    type: 'scriptureChain',
    title: 'The Problem Within',
    references: [
      { reference: 'Romans 7:12' },
      { reference: 'Romans 7:14-15' },
      { reference: '1 John 3:4' },
      { reference: 'Romans 13:10' },
    ],
  },
  {
    type: 'paragraph',
    text: 'Takeaway: God\'s law is good, but sin bends the human heart away from love. We need more than instruction. We need rescue.',
  },
]

const loveInActionInsightBlocks: LessonContentBlock[] = [
  loveTowardGodAndOthersVisual,
  {
    type: 'scriptureChain',
    title: 'Love in Action',
    references: [
      { reference: '1 John 4:8' },
      { reference: 'Exodus 20:1-17' },
      { reference: 'Matthew 22:36-40' },
      { reference: 'Romans 13:10' },
    ],
  },
  {
    type: 'paragraph',
    text: 'Takeaway: God\'s law is not opposed to love. It shows what love looks like in action toward God and others.',
  },
]

/** Guided reader lessons for "The Law of Love" (Foundations). */
export const theLawOfLoveSeriesLessonLibrary: Record<string, LessonReaderContent> = {
  'what-love-looks-like': {
    openingThought: `Everyone talks about love.

But not everyone defines love the same way.

For some, love is a feeling.
For others, love is attraction.
For others, love is approval.
For others, love means letting people do whatever they want.

But Scripture gives love a clearer shape.

Love is not merely something God feels.

Love is who God is.

And because God is love, His law shows what love looks like when it becomes action.

The Ten Commandments are not random restrictions.

They are a picture of life lived in love toward God and toward others.`,
    scriptureRef: 'Matthew 22:37-40',
    scriptureQuote:
      'Jesus said unto him, Thou shalt love the Lord thy God with all thy heart, and with all thy soul, and with all thy mind. This is the first and great commandment. And the second is like unto it, Thou shalt love thy neighbour as thyself. On these two commandments hang all the law and the prophets.',
    scriptureAfterPrimary: `Jesus does not replace the law with vague sentiment.

He shows what holds it together: love for God and love for neighbor.

The whole law hangs on these two loves.`,
    scriptureSecondaryRef: '1 John 4:8',
    scriptureSecondaryQuote: 'He that loveth not knoweth not God; for God is love.',
    scriptureAfterSecondary: `Love is not just one quality God has.

Love is the foundation of His character.

Everything God commands must be understood through who He is.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Exodus 20:1-17',
        quote:
          'And God spake all these words, saying, I am the LORD thy God, which have brought thee out of the land of Egypt, out of the house of bondage.',
      },
      {
        type: 'scripture',
        reference: 'Romans 13:10',
        quote: 'Love worketh no ill to his neighbour: therefore love is the fulfilling of the law.',
      },
    ],
    teachingPoints: [
      `1. God is love

First John says, "God is love."

This means love is not just one quality God has.

Love is the foundation of His character.

Everything God commands must be understood through who He is.

If God is love, then His law is not designed to destroy freedom.

It is designed to show what love looks like in real life.`,
      `2. The law shows love toward God

Jesus said the first great commandment is to love God with all the heart, soul, and mind.

The first part of the Ten Commandments shows what love toward God looks like.

No rival gods.
No false worship.
No misuse of His name.
Remembering the sacred time He set apart.

Love toward God is not vague emotion.

It becomes loyalty, worship, reverence, and trust.`,
      `3. The law shows love toward people

Jesus said the second great commandment is to love your neighbor as yourself.

The last part of the Ten Commandments shows what love toward people looks like.

Honor.
Faithfulness.
Respect for life.
Truthfulness.
Contentment.
Respect for what belongs to others.

Love does not harm another person.

Love protects relationship.`,
      `4. God's law describes the best kind of life

Imagine a world where no one lied, stole, cheated, abused, murdered, envied, or betrayed.

Imagine every relationship marked by truth, faithfulness, respect, worship, and love.

That is not bondage.

That is freedom.

God's law describes the kind of life human beings were made for.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Law',
      lemma: 'νόμος',
      transliteration: 'nomos',
      meaning: 'Instruction, direction, or revealed will.',
      strongs: 'G3551',
      reference: 'Romans 13:10',
      note: `God's law is not merely a list of rules.

It is instruction from the God who is love.

The law reveals what love looks like vertically toward God and horizontally toward other people.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `Many people misunderstand God's law because they separate it from God's character.

If God were controlling, His law would be control.

If God were selfish, His law would be selfish.

But God is love.

That means His law reflects love.

Jesus makes this clear when He says the whole law hangs on love for God and love for neighbor.

The law does not replace love.

The law describes love.

It shows us that love is not only a feeling.

Love tells the truth.
Love honors life.
Love protects trust.
Love refuses betrayal.
Love worships God above idols.
Love respects what belongs to others.
Love does no harm to a neighbor.

God's law is love in action.`,
    },
    studyInsightBlocks: loveInActionInsightBlocks,
    reflectPrompt: `When you hear the word "law," do you tend to think of love, restriction, protection, or pressure?

Be honest. Think about your past experiences with rules, religion, authority, and how those experiences may affect the way you view God's commandments.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, choose one commandment and ask:

"What does this teach me about love?"

Do not start with fear.

Start with God's character.

For example:

Truthfulness teaches love protects trust.

Faithfulness teaches love protects commitment.

Worship teaches love gives God the highest place.

Contentment teaches love does not grasp for what belongs to another.

Let God reshape how you see His law.

Not as cold restriction.

As love made visible.

Prayer:

Father, thank You that Your law reflects Your heart. Help me see Your commandments through the truth that You are love. Teach me to love You with all my heart and to love others as myself. Remove fear-based religion from my heart and replace it with trust, obedience, and love shaped by Jesus. Amen.`,
    prayer: '',
    completionSummary: `God's law is not random restriction. Because God is love, His commandments show what love looks like in action toward Him and toward others.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'tlol-l1-q1',
          prompt: 'According to 1 John 4:8, what is God?',
          options: ['Love', 'Confusion', 'Fear', 'Selfishness'],
          correctIndex: 0,
          explanation:
            'First John says plainly that God is love. His law must be understood in light of His loving character.',
        },
        {
          id: 'tlol-l1-q2',
          prompt: 'According to Matthew 22:37-40, what two loves summarize the law?',
          options: [
            'Love for God and love for neighbor',
            'Love for money and success',
            'Love for power and control',
            'Love for comfort and popularity',
          ],
          correctIndex: 0,
          explanation:
            'Jesus said the law and the prophets hang on loving God with all the heart and loving your neighbor as yourself.',
        },
        {
          id: 'tlol-l1-q3',
          prompt: 'According to Romans 13:10, what is the fulfilling of the law?',
          options: ['Love', 'Pride', 'Fear', 'Control'],
          correctIndex: 0,
          explanation:
            'Romans 13:10 says love does no harm to a neighbor, therefore love is the fulfilling of the law.',
        },
        {
          id: 'tlol-l1-q4',
          prompt: 'What does this lesson teach about the Ten Commandments?',
          options: [
            'They show what love looks like toward God and people',
            'They are random restrictions with no purpose',
            'They replace the need for love',
            'They are unrelated to God\'s character',
          ],
          correctIndex: 0,
          explanation:
            'The Ten Commandments reveal love in action vertically toward God and horizontally toward others.',
        },
        {
          id: 'tlol-l1-q5',
          kind: 'reflection',
          prompt: 'Which commandment helps you see love more clearly right now, and why?',
          explanation:
            'God\'s law becomes clearer when we see each command as a picture of love protecting relationship.',
        },
      ],
    },
  },
  'the-problem-within-us': {
    openingThought: `If God's law is love in action, then the real problem is not the law.

The problem is us.

We may admire love, but we do not naturally live it perfectly.

We know honesty is good, but we still hide.
We know faithfulness matters, but we still drift.
We know selfishness damages people, but we still choose ourselves.
We know love is right, but we still fall short of it.

The Bible does not flatter the human heart.

It tells the truth.

God's law is good, but sin bends us away from love.`,
    scriptureRef: 'Romans 7:12',
    scriptureQuote: 'Wherefore the law is holy, and the commandment holy, and just, and good.',
    scriptureAfterPrimary: `The law is not the villain.

God's commandments are not corrupt, selfish, or broken.

They reveal what is right because they reflect the character of the God who is love.

The problem is not that God's law is flawed.

The problem is that sin has damaged us.`,
    scriptureSecondaryRef: 'Romans 7:14-15',
    scriptureSecondaryQuote:
      'For we know that the law is spiritual: but I am carnal, sold under sin. For that which I do I allow not: for what I would, that do I not; but what I hate, that do I.',
    scriptureAfterSecondary: `Paul describes the human struggle honestly.

We may know what is right and still fail to do it.

We may hate what is wrong and still fall into it.

The problem runs deeper than information.

We do not only need better instructions.

We need a new heart.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: '1 John 3:4',
        quote:
          'Whosoever committeth sin transgresseth also the law: for sin is the transgression of the law.',
      },
      {
        type: 'scripture',
        reference: 'Romans 13:10',
        quote: 'Love worketh no ill to his neighbour: therefore love is the fulfilling of the law.',
      },
    ],
    teachingPoints: [
      `1. God's law is holy, just, and good

Paul says the law is holy, just, and good.

That means the law is not the villain.

God's commandments are not corrupt, selfish, or broken.

They reveal what is right because they reflect the character of the God who is love.

The problem is not that God's law is flawed.

The problem is that sin has damaged us.`,
      `2. Sin is lawlessness

First John says sin is the transgression of the law.

If the law is love in action, then sin is the violation of love.

Sin is not merely breaking a rule.

Sin is moving against love.

It damages trust, wounds relationships, distorts worship, and turns the heart inward.`,
      `3. We are naturally bent toward self

Romans 7 describes the human struggle honestly.

We may know what is right and still fail to do it.

We may hate what is wrong and still fall into it.

This shows that the problem runs deeper than information.

We do not only need better instructions.

We need a new heart.`,
      `4. Love cannot be produced by willpower alone

Romans 13 says love fulfills the law.

But fallen human beings cannot manufacture perfect love from within themselves.

We can improve behavior temporarily.

We can manage appearances.

We can try harder.

But the kind of love God's law describes requires more than self-effort.

It requires God's saving grace.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Sin',
      lemma: 'ἁμαρτία',
      transliteration: 'hamartia',
      meaning: 'Transgression of God\'s law, a violation of love, and a turning away from God\'s design.',
      strongs: 'G266',
      reference: '1 John 3:4',
      note: `Sin is not just bad behavior.

Because God's law is love, sin is whatever moves against love.

It bends the heart away from God and toward selfishness.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `Romans 7 helps us stop pretending.

It shows us that the human problem is not lack of advice.

It is moral and spiritual brokenness.

God's law says love.

But sin says self.

God's law says truth.

But sin says hide.

God's law says faithfulness.

But sin says take what you want.

God's law says worship God.

But sin says worship anything that serves you.

This is why self-improvement cannot save us.

The law can reveal what love looks like, but it cannot create love in a heart that is sold under sin.

We need more than rules.

We need rescue.`,
    },
    studyInsightBlocks: problemWithinInsightBlocks,
    reflectPrompt: `Where do you see the struggle of Romans 7 in your own life?

Think about an area where you know what is right, but still struggle to live it consistently.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, be honest about one area where willpower has not been enough.

Do not excuse it.

Do not hide it.

Do not pretend it is smaller than it is.

Bring it to God and say:

"Lord, Your way is good, but I need Your grace to live it."

That is not weakness.

That is truth.

The person who admits the problem is finally ready for rescue.

Prayer:

Father, thank You that Your law is holy, just, and good. Help me stop blaming Your commands for what sin has broken in me. Show me where my heart is bent away from love. I confess that willpower is not enough. I need Your grace, Your Spirit, and Your saving work in Jesus. Amen.`,
    prayer: '',
    completionSummary: `God's law is good, but sin bends the heart away from love. The problem is not God's command. The problem is our need for rescue.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'tlol-l2-q1',
          prompt: 'According to Romans 7:12, how does Paul describe the law?',
          options: [
            'Holy, just, and good',
            'Evil and useless',
            'Confusing and selfish',
            'Temporary and meaningless',
          ],
          correctIndex: 0,
          explanation: 'Paul says the law is holy, and the commandment is holy, just, and good.',
        },
        {
          id: 'tlol-l2-q2',
          prompt: 'According to 1 John 3:4, what is sin?',
          options: [
            'Transgression of the law',
            'A harmless mistake only',
            'A lack of intelligence',
            'Something God ignores completely',
          ],
          correctIndex: 0,
          explanation:
            'First John defines sin as transgression of the law. Since the law is love in action, sin violates love.',
        },
        {
          id: 'tlol-l2-q3',
          prompt: 'What does Romans 7:14-15 reveal about the human condition?',
          options: [
            'We can know what is right and still struggle to do it',
            'Humans naturally obey perfectly',
            'God\'s law is the problem',
            'Sin is easy to overcome without grace',
          ],
          correctIndex: 0,
          explanation:
            'Paul describes the struggle of wanting to do what is right but still doing what he hates.',
        },
        {
          id: 'tlol-l2-q4',
          prompt: 'According to Romans 13:10, what fulfills the law?',
          options: ['Love', 'Pride', 'Fear', 'Self-protection'],
          correctIndex: 0,
          explanation: 'Romans 13:10 says love is the fulfilling of the law.',
        },
        {
          id: 'tlol-l2-q5',
          kind: 'reflection',
          prompt: 'Why do you think admitting your need is the first step toward receiving grace?',
          explanation:
            'The law reveals what love looks like, but our failure shows our need for Jesus. Honesty opens the heart to rescue.',
        },
      ],
    },
  },
  'why-we-need-a-savior': {
    openingThought: `The law shows us what love looks like.

But the law cannot save us.

That may sound strange at first. If God's law is good, why can't it fix us?

Because a mirror can show dirt, but it cannot wash your face.

God's law can reveal where we are out of harmony with love, but it cannot create a new heart by itself.

The problem is deeper than needing better rules.

We need rescue.

We need righteousness outside of ourselves.

We need a Savior.`,
    scriptureRef: 'Romans 7:24-25',
    scriptureQuote:
      'O wretched man that I am! who shall deliver me from the body of this death? I thank God through Jesus Christ our Lord.',
    scriptureAfterPrimary: `Paul does not end in despair.

He cries out for deliverance, then thanks God through Jesus Christ our Lord.

The law drove him to see his need.

Christ became the answer.`,
    scriptureSecondaryRef: 'Romans 5:19',
    scriptureSecondaryQuote:
      'For as by one man\'s disobedience many were made sinners, so by the obedience of one shall many be made righteous.',
    scriptureAfterSecondary: `Adam's failure brought brokenness into the human story.

Christ's faithfulness brings righteousness, grace, and life.

We are not saved by trying to become our own savior.

We are saved by receiving Jesus as the Savior we need.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Isaiah 64:6',
        quote:
          'But we are all as an unclean thing, and all our righteousnesses are as filthy rags; and we all do fade as a leaf; and our iniquities, like the wind, have taken us away.',
      },
      {
        type: 'scripture',
        reference: 'Jeremiah 23:6',
        quote:
          'In his days Judah shall be saved, and Israel shall dwell safely: and this is his name whereby he shall be called, THE LORD OUR RIGHTEOUSNESS.',
      },
    ],
    teachingPoints: [
      `1. Knowing the law is not enough

Romans 7 shows a person who knows what is right but still feels trapped by what is wrong.

That is painfully honest.

Information can show us the path, but it cannot give us power to walk it.

God's law can diagnose the problem.

But diagnosis is not the same as healing.`,
      `2. Human righteousness cannot save

Isaiah says our righteousnesses are like filthy rags.

That does not mean good choices are meaningless.

It means our best efforts cannot erase sin, heal the heart, or make us righteous before God.

If salvation depends on our moral record, we are finished.

That is why the gospel is necessary.`,
      `3. Jesus is our righteousness

Jeremiah gives the coming Savior a powerful title:

"The Lord our righteousness."

This means righteousness does not begin inside us.

It comes to us as a gift from Christ.

Jesus lived the life of love we failed to live.

He becomes the righteousness we could never manufacture.`,
      `4. Christ's obedience restores what human disobedience broke

Romans 5 contrasts Adam's disobedience with Christ's obedience.

Adam's failure brought brokenness into the human story.

Christ's faithfulness brings righteousness, grace, and life.

We are not saved by trying to become our own savior.

We are saved by receiving Jesus as the Savior we need.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Righteousness',
      lemma: 'δικαιοσύνη',
      transliteration: 'dikaiosynē',
      meaning: 'Right relationship, right standing, and a life aligned with God\'s love.',
      strongs: 'G1343',
      reference: 'Jeremiah 23:6',
      note: `Biblical righteousness is not self-made perfection.

It is received from Christ and then reflected through a transformed life.

Jesus is "The Lord our righteousness" because He provides what we could never produce on our own.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The moment we understand God's law as love, we also understand why we need Jesus.

The law says:

Love God completely.
Love people faithfully.
Tell the truth.
Protect life.
Honor relationships.
Live without selfish grasping.

Then we look at ourselves and realize:

We have not loved perfectly.
We have not trusted fully.
We have not lived consistently.
We have not kept ourselves pure from selfishness.

So what do we do?

We do not lower the law.

We do not pretend sin is small.

We come to Christ.

Jesus does not erase God's law of love.

He fulfills it, reveals it, and writes it into the hearts of those who trust Him.`,
    },
    studyInsightBlocks: saviorWeNeedInsightBlocks,
    reflectPrompt: `Where have you been trying to become righteous by your own strength instead of receiving Christ as your righteousness?

Think about performance, guilt, comparison, religious image, or trying to prove you are good enough for God.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, stop trying to be your own savior.

That does not mean stop caring about obedience.

It means stop making your obedience the foundation of your acceptance.

When you see your failure, do not run from God.

Run to Christ.

Say:

"Jesus, You are my righteousness."

Then ask Him to teach you to live from that gift.

Not for approval.

From approval.

Not to earn love.

Because love has already reached you.

Prayer:

Jesus, thank You for being the Savior I need. I confess that my own righteousness cannot save me. Thank You for living the life of love I failed to live and for offering me righteousness as a gift. Help me stop trusting my performance and start resting in You. Write Your love into my heart. Amen.`,
    prayer: '',
    completionSummary: `The law reveals our need, but Jesus provides the rescue. We do not become righteous by saving ourselves. Christ is the Lord our righteousness.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'tlol-l3-q1',
          prompt: 'According to Romans 7:24-25, who delivers us?',
          options: [
            'Jesus Christ our Lord',
            'Our own willpower',
            'Religious image',
            'Human comparison',
          ],
          correctIndex: 0,
          explanation:
            'Paul cries out for deliverance and then thanks God through Jesus Christ our Lord.',
        },
        {
          id: 'tlol-l3-q2',
          prompt: 'According to Isaiah 64:6, how does Scripture describe human righteousness apart from God?',
          options: [
            'As filthy rags',
            'As perfect enough to save',
            'As greater than Christ\'s righteousness',
            'As unnecessary to discuss',
          ],
          correctIndex: 0,
          explanation:
            'Isaiah says our righteousnesses are as filthy rags, showing that human effort cannot save us.',
        },
        {
          id: 'tlol-l3-q3',
          prompt: 'What title does Jeremiah 23:6 give to the coming Savior?',
          options: [
            'The Lord our righteousness',
            'The Lord our confusion',
            'The Lord our fear',
            'The Lord our performance',
          ],
          correctIndex: 0,
          explanation:
            'Jeremiah identifies the Savior as "The Lord our righteousness," showing that righteousness comes from Him.',
        },
        {
          id: 'tlol-l3-q4',
          prompt: 'According to Romans 5:19, what comes through Christ\'s obedience?',
          options: [
            'Many shall be made righteous',
            'Sin becomes stronger',
            'Grace becomes useless',
            'Humanity saves itself',
          ],
          correctIndex: 0,
          explanation:
            'Romans 5 contrasts Adam\'s disobedience with Christ\'s obedience, through which many are made righteous.',
        },
        {
          id: 'tlol-l3-q5',
          kind: 'reflection',
          prompt: 'What would change if you trusted Jesus as your righteousness instead of trying to prove yourself?',
          explanation:
            'Jesus provides the righteousness we cannot create. Faith receives His gift and learns to live from His grace.',
        },
      ],
    },
  },
  'righteousness-as-a-gift': {
    openingThought: `Most people think righteousness is something you achieve.

Do enough good.
Avoid enough bad.
Try hard enough.
Prove yourself long enough.

But Scripture presents righteousness differently.

Righteousness is not something sinners manufacture.

It is something God gives through Jesus.

That does not make obedience meaningless.

It puts obedience in the right order.

We do not become accepted because we finally produce enough righteousness.

We receive righteousness from Christ, and then His grace begins reshaping the life.`,
    scriptureRef: 'Romans 3:24',
    scriptureQuote:
      'Being justified freely by his grace through the redemption that is in Christ Jesus.',
    scriptureAfterPrimary: `Freely does not mean cheaply.

It means we do not purchase it.

Jesus paid the cost.

Grace gives what human effort could never earn.

Justification is God's declaration that we are accepted in Christ, not because of our record, but because of His redemption.`,
    scriptureSecondaryRef: 'Romans 5:17',
    scriptureSecondaryQuote:
      'For if by one man\'s offence death reigned by one; much more they which receive abundance of grace and of the gift of righteousness shall reign in life by one, Jesus Christ.',
    scriptureAfterSecondary: `Righteousness is a gift.

A gift is received, not earned.

If righteousness came by our performance, it would not be a gift.

In Christ, God gives us what we lack.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Jeremiah 23:6',
        quote:
          'In his days Judah shall be saved, and Israel shall dwell safely: and this is his name whereby he shall be called, THE LORD OUR RIGHTEOUSNESS.',
      },
      {
        type: 'scripture',
        reference: 'Philippians 3:9',
        quote:
          'And be found in him, not having mine own righteousness, which is of the law, but that which is through the faith of Christ, the righteousness which is of God by faith.',
      },
    ],
    teachingPoints: [
      `1. We are justified freely by grace

Romans says we are justified freely by God's grace.

Freely does not mean cheaply.

It means we do not purchase it.

Jesus paid the cost.

Grace gives what human effort could never earn.

Justification is God's declaration that we are accepted in Christ, not because of our record, but because of His redemption.`,
      `2. Righteousness is a gift

Romans 5 calls righteousness a gift.

That word matters.

A gift is received, not earned.

If righteousness came by our performance, it would not be a gift.

In Christ, God gives us what we lack.

He covers us with the righteousness of Jesus and begins forming righteousness within us by His Spirit.`,
      `3. Jesus is our righteousness

Jeremiah calls the promised Savior "The Lord our righteousness."

This means righteousness is not first a personal achievement.

It is found in a Person.

Jesus is the righteous One.

When we trust Him, we stand before God in Him.

Our confidence is not our spiritual résumé.

Our confidence is Christ.`,
      `4. Faith receives Christ's righteousness

Paul says he does not want to be found having his own righteousness, but the righteousness that comes through faith.

Faith lets go of self-trust.

Faith stops trying to impress God.

Faith receives Jesus and rests in His righteousness.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Justified',
      lemma: 'δικαιόω',
      transliteration: 'dikaioō',
      meaning: 'Declared right, accepted, or counted righteous before God.',
      strongs: 'G1344',
      reference: 'Romans 3:24',
      note: `Justification is not God pretending sin does not matter.

It is God accepting the believer because of Jesus.

Through Christ's redemption, God gives righteousness as a gift and brings sinners into right standing with Him.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `Righteousness as a gift protects us from two mistakes.

The first mistake is pride.

Pride says, "I am righteous because I performed well."

The second mistake is despair.

Despair says, "I can never be righteous because I have failed too much."

The gospel corrects both.

To pride, the gospel says:

You did not earn this.

To despair, the gospel says:

You can receive this.

Christ is the center.

He gives righteousness for our standing before God.

Then He works righteousness into our lives through grace and the Spirit.

The gift comes first.

The transformation follows.`,
    },
    studyInsightBlocks: giftOfRighteousnessInsightBlocks,
    reflectPrompt: `Which do you struggle with more: pride in your performance or despair over your failure?

Both can keep your eyes on self. The gospel calls you to look to Christ as your righteousness.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, practice receiving righteousness as a gift.

When you do well, say:

"Thank You, Jesus. Any good in me is because of Your grace."

When you fail, say:

"Jesus, You are still my righteousness. Lead me back into Your grace."

Do not let success make you proud.

Do not let failure make you hide.

Return to Christ either way.

He is the foundation.

Prayer:

Father, thank You for justifying me freely by Your grace. Thank You for giving righteousness through Jesus instead of leaving me to create it myself. Deliver me from pride when I do well and despair when I fail. Help me receive Christ as my righteousness and live a transformed life through Your Spirit. Amen.`,
    prayer: '',
    completionSummary: `Righteousness is not manufactured by human effort. It is given through Jesus, received by faith, and reflected through a life transformed by grace.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'tlol-l4-q1',
          prompt: 'According to Romans 3:24, how are we justified?',
          options: [
            'Freely by God\'s grace through redemption in Christ',
            'By proving we are better than others',
            'By never needing mercy',
            'By ignoring sin',
          ],
          correctIndex: 0,
          explanation:
            'Romans 3:24 says we are justified freely by His grace through the redemption that is in Christ Jesus.',
        },
        {
          id: 'tlol-l4-q2',
          prompt: 'According to Romans 5:17, what does God give?',
          options: [
            'The gift of righteousness',
            'The gift of fear',
            'The gift of pride',
            'The gift of self-salvation',
          ],
          correctIndex: 0,
          explanation: 'Romans 5:17 calls righteousness a gift received through Jesus Christ.',
        },
        {
          id: 'tlol-l4-q3',
          prompt: 'What title does Jeremiah 23:6 give to the promised Savior?',
          options: [
            'The Lord our righteousness',
            'The Lord our performance',
            'The Lord our confusion',
            'The Lord our shame',
          ],
          correctIndex: 0,
          explanation:
            'Jeremiah calls the promised Savior "The Lord our righteousness," showing that righteousness is found in Him.',
        },
        {
          id: 'tlol-l4-q4',
          prompt: 'What kind of righteousness did Paul desire in Philippians 3:9?',
          options: [
            'The righteousness through faith in Christ',
            'His own righteousness apart from Christ',
            'Righteousness based on pride',
            'Righteousness without grace',
          ],
          correctIndex: 0,
          explanation:
            'Paul wanted to be found in Christ, not having his own righteousness, but the righteousness that comes through faith.',
        },
        {
          id: 'tlol-l4-q5',
          kind: 'reflection',
          prompt: 'How can receiving righteousness as a gift change the way you respond to success and failure?',
          explanation:
            'The gospel frees us from pride when we succeed and despair when we fail because our standing rests in Christ.',
        },
      ],
    },
  },
  'the-new-covenant': {
    openingThought: `God's goal was never to leave His law only on stone.

He wanted His love written in human hearts.

That is the heart of the new covenant.

The problem was not that God's law was bad. The problem was that humanity was broken. We needed more than commandments outside of us. We needed transformation inside of us.

So God promised something deeper.

"I will put my law in their inward parts."

The new covenant is not God lowering His standard.

It is God changing the heart so love can be lived from within.`,
    scriptureRef: 'Jeremiah 31:33',
    scriptureQuote:
      'But this shall be the covenant that I will make with the house of Israel; After those days, saith the LORD, I will put my law in their inward parts, and write it in their hearts; and will be their God, and they shall be my people.',
    scriptureAfterPrimary: `God is not interested in surface-level religion.

He wants inward restoration.

The new covenant deals with the place where motives, desires, thoughts, and choices are formed.`,
    scriptureSecondaryRef: 'Hebrews 8:10',
    scriptureSecondaryQuote:
      'For this is the covenant that I will make with the house of Israel after those days, saith the Lord; I will put my laws into their mind, and write them in their hearts: and I will be to them a God, and they shall be to me a people.',
    scriptureAfterSecondary: `The new covenant does not say God destroys His law.

It says He writes it within His people.

God's law still reflects His character of love.

But instead of being only an external command, God wants it to become an internal desire.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Romans 7:6',
        quote:
          'But now we are delivered from the law, that being dead wherein we were held; that we should serve in newness of spirit, and not in the oldness of the letter.',
      },
      {
        type: 'scripture',
        reference: 'Ezekiel 36:26-27',
        quote:
          'A new heart also will I give you, and a new spirit will I put within you: and I will take away the stony heart out of your flesh, and I will give you an heart of flesh. And I will put my spirit within you, and cause you to walk in my statutes, and ye shall keep my judgments, and do them.',
      },
    ],
    teachingPoints: [
      `1. The new covenant reaches the heart

Jeremiah says God will write His law in the heart.

That means God is not interested in surface-level religion.

He wants inward restoration.

The new covenant deals with the place where motives, desires, thoughts, and choices are formed.`,
      `2. God's law is not removed

The new covenant does not say God destroys His law.

It says He writes it within His people.

That matters.

God's law still reflects His character of love.

But instead of being only an external command, God wants it to become an internal desire.`,
      `3. The Spirit creates new obedience

Romans says we serve in newness of spirit.

Ezekiel says God gives a new heart and puts His Spirit within us.

This means obedience in the new covenant is not powered by fear-based striving.

It is the result of God's Spirit working within the heart.`,
      `4. Relationship is the goal

God says, "I will be their God, and they shall be my people."

The new covenant is not merely about improved behavior.

It is about restored relationship.

God writes His law in the heart because He wants His people to live close to Him, shaped by His love.`,
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
      note: `The new covenant is God's promise to restore His people from the inside out.

He does not merely command love from a distance.

He writes His law of love in the heart through His Spirit, creating a life that reflects Him.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The new covenant helps us avoid two mistakes.

The first mistake is thinking God's law no longer matters.

But God says He writes His law in the heart.

The second mistake is thinking obedience is produced by human effort alone.

But God says He gives a new heart and puts His Spirit within us.

The new covenant is better than both errors.

God keeps His law of love.

God transforms the heart.

God restores relationship.

This is what grace does.

Grace does not erase love.

Grace writes love deeper.`,
    },
    studyInsightBlocks: writtenOnTheHeartInsightBlocks,
    reflectPrompt: `Where do you need God to write His love deeper into your heart?

Think about your motives, reactions, relationships, habits, private thoughts, or the places where obedience still feels forced instead of Spirit-led.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, ask God for deeper than behavior change.

Ask for heart change.

Pray this simple prayer each day:

"Lord, write Your love in me."

Then pay attention to one area where your heart resists love.

Maybe it is patience.
Maybe it is honesty.
Maybe it is forgiveness.
Maybe it is purity.
Maybe it is surrender.

Do not only ask, "What rule am I breaking?"

Ask, "Where is God trying to restore love in me?"

That is new covenant living.

Prayer:

Father, thank You for the new covenant promise. Thank You for not leaving Your law only outside of me, but for writing Your love in my heart. Give me a new heart and renew my spirit. Teach me to serve in newness of spirit, not fear-based religion. Make my life reflect the love of Jesus. Amen.`,
    prayer: '',
    completionSummary: `The new covenant does not erase God's law. It brings His law of love into the heart through the Spirit, creating a life changed from within.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'tlol-l5-q1',
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
          id: 'tlol-l5-q2',
          prompt: 'What does the new covenant show about God\'s law?',
          options: [
            'God wants His law written within His people',
            'God\'s law was evil',
            'God\'s law has no connection to love',
            'God removed all desire for obedience',
          ],
          correctIndex: 0,
          explanation:
            'The new covenant does not remove God\'s law. It writes His law of love in the heart.',
        },
        {
          id: 'tlol-l5-q3',
          prompt: 'According to Ezekiel 36:26-27, what does God promise to give?',
          options: [
            'A new heart and His Spirit',
            'A reason to hide from Him',
            'A life without transformation',
            'A lawless heart',
          ],
          correctIndex: 0,
          explanation: 'Ezekiel says God will give a new heart and put His Spirit within His people.',
        },
        {
          id: 'tlol-l5-q4',
          prompt: 'According to Romans 7:6, how are believers called to serve?',
          options: [
            'In newness of spirit',
            'In pride and fear',
            'In oldness without love',
            'In self-salvation',
          ],
          correctIndex: 0,
          explanation:
            'Romans says believers serve in newness of spirit, showing that the new life is Spirit-led.',
        },
        {
          id: 'tlol-l5-q5',
          kind: 'reflection',
          prompt: 'What would change if God\'s law felt less like pressure outside of you and more like love being written within you?',
          explanation:
            'The new covenant is about inward transformation. God writes His love in the heart so obedience flows from restored relationship.',
        },
      ],
    },
  },
  'the-law-of-liberty': {
    openingThought: `Most people do not connect law with freedom.

They hear "law" and think restriction.

But Scripture uses a different phrase:

"The law of liberty."

That sounds strange until we understand what God's law really is.

God's law does not protect selfishness.

It protects love.

It protects worship.
It protects truth.
It protects marriage.
It protects life.
It protects trust.
It protects human dignity.

Sin promises freedom but produces bondage.

God's law reveals the kind of life where love can actually breathe.`,
    scriptureRef: 'James 1:25',
    scriptureQuote:
      'But whoso looketh into the perfect law of liberty, and continueth therein, he being not a forgetful hearer, but a doer of the work, this man shall be blessed in his deed.',
    scriptureAfterPrimary: `James calls God's law the perfect law of liberty.

That means God's law is not the enemy of freedom.

It shows what freedom looks like when love is restored.

True freedom is not doing whatever desire demands.

True freedom is being able to live in harmony with God's love.`,
    scriptureSecondaryRef: 'Psalm 119:32',
    scriptureSecondaryQuote: 'I will run the way of thy commandments, when thou shalt enlarge my heart.',
    scriptureAfterSecondary: `The psalmist does not see God's commandments as a prison.

He sees them as a path he can run with joy when God enlarges the heart.

God's law and true freedom belong together.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Romans 13:10',
        quote: 'Love worketh no ill to his neighbour: therefore love is the fulfilling of the law.',
      },
      {
        type: 'scripture',
        reference: 'John 8:36',
        quote: 'If the Son therefore shall make you free, ye shall be free indeed.',
      },
    ],
    teachingPoints: [
      `1. God's law is called the law of liberty

James calls God's law the perfect law of liberty.

That means God's law is not the enemy of freedom.

It shows what freedom looks like when love is restored.

True freedom is not doing whatever desire demands.

True freedom is being able to live in harmony with God's love.`,
      `2. Sin promises freedom but creates bondage

Sin often feels like freedom at first.

Do what you want.
Say what you want.
Take what you want.
Worship what you want.

But selfishness does not produce liberty.

It produces slavery to appetite, pride, fear, lust, anger, comparison, and guilt.

God's law protects us from the bondage sin creates.`,
      `3. Love does no harm

Romans says love works no harm to a neighbor.

That is why love fulfills the law.

The commandments are not random barriers.

They are boundaries that protect life and relationship.

A world without truth, faithfulness, worship, contentment, and respect is not free.

It is broken.`,
      `4. Jesus makes freedom real

John 8 says the Son makes us free indeed.

The law can describe freedom, but Jesus gives the power to live in it.

He frees us from condemnation.

He frees us from sin's mastery.

He frees us to love God and others from a renewed heart.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Liberty',
      lemma: 'ἐλευθερία',
      transliteration: 'eleutheria',
      meaning: 'Freedom, release from bondage, and the ability to live as God designed.',
      strongs: 'G1657',
      reference: 'James 1:25',
      note: `Biblical liberty is not lawlessness.

It is freedom from the slavery of sin so we can live in love.

God's law is called the law of liberty because it describes the life Jesus frees us to live.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `Freedom without love becomes destruction.

That is why God's law matters.

If someone says, "I am free to lie," trust dies.

If someone says, "I am free to steal," safety dies.

If someone says, "I am free to betray," covenant dies.

If someone says, "I am free to worship anything," the heart becomes enslaved to idols.

God's commandments are not chains on love.

They are the shape of love.

The more Christ restores the heart, the more God's law begins to look less like pressure and more like freedom.`,
    },
    studyInsightBlocks: lawOfLibertyInsightBlocks,
    reflectPrompt: `Where have you mistaken freedom for doing whatever you want?

Think about a place where God's boundary may actually be protecting your peace, relationships, worship, or future.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, look at one commandment through the lens of freedom.

Ask:

"What bondage does this command protect me from?"

For example:

Truthfulness protects me from deception and broken trust.

Faithfulness protects me from betrayal and divided love.

Sabbath rest protects me from endless striving.

Worship protects me from idols that cannot save.

Do not just ask, "What is God stopping me from doing?"

Ask, "What kind of freedom is God inviting me into?"

Prayer:

Father, help me see Your law as the law of liberty. Free me from false ideas of freedom that lead to bondage. Teach me to love what protects life, truth, worship, and relationship. Let Jesus make me free indeed, and help me walk in Your commandments with a heart enlarged by grace. Amen.`,
    prayer: '',
    completionSummary: `God's law is the law of liberty. It does not chain love down. It shows the free, whole, restored life Jesus came to give.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'tlol-l6-q1',
          prompt: 'What does James 1:25 call God\'s law?',
          options: [
            'The perfect law of liberty',
            'The law of confusion',
            'The law of fear',
            'The law of bondage',
          ],
          correctIndex: 0,
          explanation:
            'James calls God\'s law the perfect law of liberty, showing that God\'s law is connected to true freedom.',
        },
        {
          id: 'tlol-l6-q2',
          prompt: 'According to Romans 13:10, what does love do?',
          options: [
            'Works no harm to a neighbor',
            'Ignores truth',
            'Encourages selfishness',
            'Destroys faithfulness',
          ],
          correctIndex: 0,
          explanation: 'Romans says love works no harm to a neighbor, therefore love fulfills the law.',
        },
        {
          id: 'tlol-l6-q3',
          prompt: 'According to John 8:36, who makes us free indeed?',
          options: ['The Son', 'Human pride', 'Selfish desire', 'Fear'],
          correctIndex: 0,
          explanation: 'Jesus said if the Son makes you free, you shall be free indeed.',
        },
        {
          id: 'tlol-l6-q4',
          prompt: 'What is true freedom according to this lesson?',
          options: [
            'Living in harmony with God\'s love',
            'Doing whatever desire demands',
            'Ignoring every boundary',
            'Rejecting relationship with God',
          ],
          correctIndex: 0,
          explanation:
            'True freedom is not lawlessness. It is freedom from sin\'s bondage so we can live in God\'s love.',
        },
        {
          id: 'tlol-l6-q5',
          kind: 'reflection',
          prompt: 'Which commandment can you now see as protection instead of restriction?',
          explanation:
            'God\'s law protects the life love was made for. His boundaries guard worship, trust, relationships, and freedom.',
        },
      ],
    },
  },
  'living-a-life-of-love': {
    openingThought: `The goal of God's law is not religious performance.

The goal is love.

Not love as a slogan.
Not love as a feeling only.
Not love as approval of everything.

Real love.

Love that honors God.
Love that tells the truth.
Love that protects trust.
Love that serves.
Love that refuses to harm.
Love that reflects the heart of Jesus.

The Christian life is not about earning God's love.

It is about receiving His love so deeply that it begins to flow through us.

We love because He first loved us.`,
    scriptureRef: '1 John 4:19',
    scriptureQuote: 'We love him, because he first loved us.',
    scriptureAfterPrimary: `That order matters.

Christian love does not begin with human effort.

It begins with receiving God's love in Christ.

God's love becomes the source, motive, and pattern for how we live.`,
    scriptureSecondaryRef: 'John 13:34-35',
    scriptureSecondaryQuote:
      'A new commandment I give unto you, That ye love one another; as I have loved you, that ye also love one another. By this shall all men know that ye are my disciples, if ye have love one to another.',
    scriptureAfterSecondary: `Christ is the standard.

Not culture.
Not emotions.
Not convenience.
Not personal preference.

Jesus shows us love that serves, forgives, sacrifices, tells the truth, and seeks the good of others.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Galatians 5:13-14',
        quote:
          'For, brethren, ye have been called unto liberty; only use not liberty for an occasion to the flesh, but by love serve one another. For all the law is fulfilled in one word, even in this; Thou shalt love thy neighbour as thyself.',
      },
      {
        type: 'scripture',
        reference: 'Romans 13:10',
        quote: 'Love worketh no ill to his neighbour: therefore love is the fulfilling of the law.',
      },
    ],
    teachingPoints: [
      `1. Love begins with God

First John says we love because God first loved us.

That order matters.

Christian love does not begin with human effort.

It begins with receiving God's love in Christ.

God's love becomes the source, motive, and pattern for how we live.`,
      `2. Jesus shows the shape of love

Jesus said, "Love one another; as I have loved you."

That means Christ is the standard.

Not culture.
Not emotions.
Not convenience.
Not personal preference.

Jesus shows us love that serves, forgives, sacrifices, tells the truth, and seeks the good of others.`,
      `3. Love serves instead of using people

Galatians says, "By love serve one another."

Sin uses people.

Love serves people.

Sin asks, "What can I get?"

Love asks, "How can I bless?"

A life shaped by God's law is not self-centered. It becomes others-centered because grace has changed the heart.`,
      `4. Love fulfills the law

Romans and Galatians both connect love with the fulfillment of the law.

This does not mean love makes God's commandments meaningless.

It means love is what the commandments were describing all along.

The law points to love.

Grace restores love.

The Spirit produces love.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Fulfill',
      lemma: 'πληρόω',
      transliteration: 'plēroō',
      meaning: 'To bring to fullness, complete, or live out the intended purpose.',
      strongs: 'G4137',
      reference: 'Romans 13:10',
      note: `Love fulfills the law because love is the purpose the law was always pointing toward.

God's commandments are not empty rules.

They describe a life where love for God and love for others becomes real.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The Law of Love has shown one clear truth:

God's law is not opposed to love.

God's law reveals love.

But fallen human beings cannot produce that love on their own.

That is why we need Jesus.

He gives righteousness as a gift.
He writes the law in the heart.
He frees us from sin's bondage.
He teaches us to live by the Spirit.
He forms love within us.

So the Christian life is not:

"Keep the law so God will love you."

It is:

"Receive God's love in Christ, then let His love shape your life."

That changes everything.

Obedience becomes response, not performance.

Service becomes gratitude, not self-promotion.

Love becomes the evidence that Christ is working in us.`,
    },
    studyInsightBlocks: loveLivedOutInsightBlocks,
    reflectPrompt: `Where is God inviting you to live love more clearly right now?

Think about your home, friendships, church, workplace, private life, online behavior, or the way you treat people who frustrate you.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, practice love in action.

Choose one person and ask:

"What would love look like here?"

Then make it practical.

Tell the truth kindly.
Serve without needing credit.
Forgive instead of rehearsing the offense.
Listen before defending yourself.
Honor God when no one sees.
Refuse to harm someone with your words.

Do not make love vague.

Make it visible.

Prayer:

Father, thank You for loving me first. Thank You for showing me Your heart through Jesus. Write Your law of love deeper into my heart. Teach me to love You with all that I am and to love others with humility, truth, patience, and grace. Let my life show that Your love is real. Amen.`,
    prayer: '',
    completionSummary: `You have completed The Law of Love. God's law reveals His character, exposes our need, points us to Jesus, and shows the life of love He writes in the heart through grace.`,
    seriesCompleteScreen: {
      title: 'Study Complete',
      message:
        'You have completed The Law of Love. God\'s law reveals His character, exposes our need, points us to Jesus, and shows the life of love He writes in the heart through grace.',
      primaryCta: { label: 'Back to Foundations Path', href: '/paths/foundations' },
      secondaryCta: {
        label: 'Review this study',
        href: '/study-library/the-law-of-love',
      },
    },
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'tlol-l7-q1',
          prompt: 'According to 1 John 4:19, why do we love God?',
          options: [
            'Because He first loved us',
            'Because we earned His love',
            'Because fear saves us',
            'Because love is unnecessary',
          ],
          correctIndex: 0,
          explanation:
            'First John says we love Him because He first loved us. God\'s love comes before our response.',
        },
        {
          id: 'tlol-l7-q2',
          prompt: 'According to John 13:34-35, how will people know Jesus\' disciples?',
          options: [
            'By their love for one another',
            'By their wealth',
            'By their popularity',
            'By their arguments',
          ],
          correctIndex: 0,
          explanation: 'Jesus said people would know His disciples by their love for one another.',
        },
        {
          id: 'tlol-l7-q3',
          prompt: 'According to Galatians 5:13, how should believers serve one another?',
          options: ['By love', 'By pride', 'By force', 'By selfish ambition'],
          correctIndex: 0,
          explanation: 'Galatians says believers are to serve one another by love.',
        },
        {
          id: 'tlol-l7-q4',
          prompt: 'According to Romans 13:10, what fulfills the law?',
          options: ['Love', 'Fear', 'Control', 'Selfishness'],
          correctIndex: 0,
          explanation: 'Romans says love does no harm to a neighbor, therefore love is the fulfilling of the law.',
        },
        {
          id: 'tlol-l7-q5',
          kind: 'reflection',
          prompt: 'What is one practical way you can make love visible this week?',
          explanation: 'Biblical love is not only a feeling. It becomes action that reflects the heart of God.',
        },
      ],
    },
  },
}
