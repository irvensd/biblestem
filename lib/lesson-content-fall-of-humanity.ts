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

const firstLieContrastVisual: StudyVisualLessonBlock = {
  type: 'studyVisual',
  title: 'The First Lie',
  accent: 'stone',
  description: 'A simple contrast between deception and truth in Eden.',
  payload: {
    variant: 'comparison',
    leftTitle: "The serpent's lie",
    rightTitle: 'The truth',
    leftItems: ['God is withholding good from you.'],
    rightItems: ["God's word protects life because God is love."],
  },
}

const trustToHidingSequenceVisual: StudyVisualLessonBlock = {
  type: 'studyVisual',
  title: 'From trust broken to blame',
  accent: 'sage',
  description: 'How fractured trust unfolds in Eden and in us.',
  payload: {
    variant: 'sequence',
    steps: [
      { label: 'Lie believed', subtitle: '' },
      { label: 'Trust broken', subtitle: '' },
      { label: 'Fear enters', subtitle: '' },
      { label: 'Hiding begins', subtitle: '' },
      { label: 'Blame spreads', subtitle: '' },
    ],
  },
}

const shameCycleVisual: StudyVisualLessonBlock = {
  type: 'studyVisual',
  title: 'The shame spiral',
  accent: 'stone',
  description: 'How sin often moves from exposure toward blame.',
  payload: {
    variant: 'sequence',
    steps: [
      { label: 'Sin', subtitle: '' },
      { label: 'Shame', subtitle: '' },
      { label: 'Covering', subtitle: '' },
      { label: 'Hiding', subtitle: '' },
      { label: 'Blame', subtitle: '' },
    ],
  },
}

const christInterruptsShameVisual: StudyVisualLessonBlock = {
  type: 'studyVisual',
  title: 'Christ interrupts with',
  accent: 'sage',
  description: 'Truth, grace, and restoration reverse the downward pull.',
  payload: {
    variant: 'sequence',
    steps: [
      { label: 'Truth', subtitle: '' },
      { label: 'Grace', subtitle: '' },
      { label: 'Restoration', subtitle: '' },
    ],
  },
}

const sinInwardVsLoveVisual: StudyVisualLessonBlock = {
  type: 'studyVisual',
  title: "Sin and God's design",
  accent: 'stone',
  description: 'A simple contrast: life bent inward versus life restored in love.',
  payload: {
    variant: 'comparison',
    leftTitle: 'Sin',
    rightTitle: "God's design",
    leftItems: ['Life turned inward'],
    rightItems: ['Life restored in love'],
  },
}

const sinHeartDownwardSequenceVisual: StudyVisualLessonBlock = {
  type: 'studyVisual',
  title: 'How sin spreads',
  accent: 'sage',
  description: 'False belief about God bends the heart toward self and harm to relationship.',
  payload: {
    variant: 'sequence',
    steps: [
      { label: 'False view of God', subtitle: '' },
      { label: 'Broken trust', subtitle: '' },
      { label: 'Distorted desire', subtitle: '' },
      { label: 'Self-centered action', subtitle: '' },
      { label: 'Damaged relationships', subtitle: '' },
    ],
  },
}

const lieToLifeSequenceVisual: StudyVisualLessonBlock = {
  type: 'studyVisual',
  title: 'When a lie takes hold',
  accent: 'stone',
  description: 'How deception moves from belief toward life.',
  payload: {
    variant: 'sequence',
    steps: [
      { label: 'Lie believed', subtitle: '' },
      { label: 'Perception distorted', subtitle: '' },
      { label: 'Desire reshaped', subtitle: '' },
      { label: 'Choice made', subtitle: '' },
      { label: 'Life affected', subtitle: '' },
    ],
  },
}

const truthRenewalSequenceVisual: StudyVisualLessonBlock = {
  type: 'studyVisual',
  title: 'When truth returns',
  accent: 'sage',
  description: 'Truth reframes trust, desire, and the direction of life.',
  payload: {
    variant: 'sequence',
    steps: [
      { label: 'Truth received', subtitle: '' },
      { label: 'Trust restored', subtitle: '' },
      { label: 'Desire renewed', subtitle: '' },
      { label: 'Life transformed', subtitle: '' },
    ],
  },
}

const edenWildernessReversalVisual: StudyVisualLessonBlock = {
  type: 'studyVisual',
  title: 'Eden and the wilderness',
  accent: 'stone',
  description: 'Where humanity fell versus where Christ stood faithful.',
  payload: {
    variant: 'comparison',
    leftTitle: 'Eden',
    rightTitle: 'Wilderness',
    leftItems: ['Abundance', 'Deception', 'Distrust', 'Fall'],
    rightItems: ['Hunger', 'Scripture', 'Trust', 'Victory'],
  },
}

const fallRestorationComparisonVisual: StudyVisualLessonBlock = {
  type: 'studyVisual',
  title: 'What the fall broke, Christ restores',
  accent: 'sage',
  description: 'Three arenas of damage—and how Jesus heals them.',
  payload: {
    variant: 'comparison',
    leftTitle: 'The fall damaged',
    rightTitle: 'Jesus restores',
    leftItems: ['Perception', 'Relationship', 'Morality'],
    rightItems: ['Truth', 'Trust', 'Love'],
  },
}

/** Guided reader lessons for "The Fall of Humanity" (Foundations). */
export const fallOfHumanitySeriesLessonLibrary: Record<string, LessonReaderContent> = {
  'the-first-humanity-lie': {
    openingThought: `The fall of humanity did not begin with fruit.

It began with a lie.

Before Adam and Eve disobeyed, they first listened to a false picture of God. The serpent did not begin by attacking their behavior. He attacked their trust.

He made God sound restrictive.
He made God's word sound questionable.
He made disobedience sound like freedom.

That is still how temptation works.

Sin often begins when we start believing something false about God.`,
    scriptureRef: 'Genesis 3:1',
    scriptureQuote: `Now the serpent was more subtil than any beast of the field which the LORD God had made.`,
    scriptureSecondaryRef: 'Genesis 3:4 to 5',
    scriptureSecondaryQuote: `And the serpent said unto the woman, Ye shall not surely die.

For God doth know that in the day ye eat thereof, then your eyes shall be opened, and ye shall be as gods, knowing good and evil.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Revelation 12:9',
        quote:
          'And the great dragon was cast out, that old serpent, called the Devil, and Satan, which deceiveth the whole world.',
      },
    ],
    teachingPoints: [
      `1. The serpent attacked trust first

Genesis 3 shows Satan entering the story through deception.

He did not begin with open rebellion.

He began with a question:

"Has God really said?"

That question was designed to loosen trust in God's word.

Temptation often begins the same way today. It asks us to treat God's word as uncertain, outdated, unfair, or unnecessary.`,
      `2. Satan made God look restrictive

God had given Adam and Eve a garden full of freedom.

They were surrounded by abundance.

But Satan focused attention on the one boundary God gave.

He made it sound as if God was withholding life, joy, and freedom.

This is one of the enemy's oldest lies:

"God is keeping something good from you."`,
      `3. Satan contradicted God directly

God warned that disobedience would bring death.

The serpent said, "Ye shall not surely die."

This was not just a different opinion.

It was a direct contradiction of God's word.

The fall began when humanity listened to a voice that made God seem dishonest.`,
      `4. The lie was about God's character

The deepest issue in Eden was not appetite.

It was trust.

Satan suggested that God was selfish, controlling, and withholding something humanity needed.

Once Eve believed that picture of God, disobedience began to look reasonable.

This is why knowing God's true character matters.

Wrong pictures of God lead to wrong responses to God.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: 'Genesis describes the serpent as "subtil."',
    wordStudy: {
      surface: 'Subtil',
      lemma: 'עָרוּם (arum)',
      transliteration: 'arum',
      meaning: 'Cunning, crafty, shrewd, or deceptive.',
      strongs: 'H6175',
      reference: 'Genesis 3:1',
      note: `This does not mean the serpent looked obviously dangerous.

It means his deception was calculated.

The enemy's first attack was not loud. It was subtle. He twisted God's word just enough to make distrust feel reasonable.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'doctrine_clarity',
      body: `The first lie was not only "you will not die."

The deeper lie was this:

God cannot be trusted.

That lie poisoned the human heart.

If God cannot be trusted, then His boundaries look like control.
If God cannot be trusted, then His commands look like restriction.
If God cannot be trusted, then rebellion starts to feel like freedom.

But Scripture tells the truth.

God's boundary in Eden was not selfish. It was protective.

He was not withholding life.

He was protecting life.

The fall began when humanity accepted a false story about God.

Salvation begins as Jesus reveals the truth about God again.`,
    },
    studyInsightBlocks: [
      firstLieContrastVisual,
      {
        type: 'scriptureChain',
        title: 'The First Lie',
        references: [
          { reference: 'Genesis 3:1' },
          { reference: 'Genesis 3:4 to 5' },
          { reference: 'Revelation 12:9' },
          { reference: 'John 8:44' },
        ],
      },
      {
        type: 'paragraph',
        text: "Takeaway: Satan's first strategy was deception. He attacked God's word and character so humanity would stop trusting God.",
      },
    ],
    reflectPrompt: `What false picture of God are you most tempted to believe when life feels difficult?

Maybe you are tempted to see God as distant, restrictive, angry, unfair, or silent. Be honest. The goal is not to pretend trust is easy. The goal is to bring the lie into the light.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, notice when temptation tries to make God look untrustworthy.

When you feel pulled toward something God warns against, pause and ask:

"What is this temptation telling me about God?"

Then ask:

"Does that picture match Jesus?"

The enemy works by distortion.

Jesus restores truth.

Prayer:

Father, help me recognize lies about Your character. Teach me to trust Your word even when temptation makes disobedience look attractive. Show me that Your boundaries are not meant to steal life, but to protect it. Keep my heart anchored in Jesus, who reveals the truth about You. Amen.`,
    prayer: '',
    completionSummary:
      'The fall began with a lie about God. But Jesus reveals the truth: God is not withholding life from us. He is protecting us and calling us back to trust.',
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'foh-l1-q1',
          prompt: "Where does Genesis 3 place the beginning of humanity's fall?",
          options: [
            'In a battle between nations',
            'In a conversation involving deception',
            'In a lack of intelligence',
            'In a shortage of food',
          ],
          correctIndex: 1,
          explanation:
            "Genesis 3 shows the fall beginning through a deceptive conversation where the serpent questioned God's word and character.",
        },
        {
          id: 'foh-l1-q2',
          prompt: 'What did the serpent first question?',
          options: ["Adam's name", 'The beauty of the garden', "God's word", 'The existence of angels'],
          correctIndex: 2,
          explanation:
            "The serpent began by questioning what God had said, weakening trust in God's word.",
        },
        {
          id: 'foh-l1-q3',
          prompt: 'According to Revelation 12:9, who is the serpent connected with?',
          options: ['Moses', 'Satan, who deceives the whole world', 'Gabriel', 'A normal animal only'],
          correctIndex: 1,
          explanation:
            'Revelation 12:9 identifies the old serpent as the Devil and Satan, the one who deceives the whole world.',
        },
        {
          id: 'foh-l1-q4',
          prompt: "What was the deeper lie behind the serpent's temptation?",
          options: ['God cannot be trusted', 'Fruit is always dangerous', 'Humans cannot make choices', 'The garden was not real'],
          correctIndex: 0,
          explanation:
            "The serpent's deeper attack was against God's character, making Him appear restrictive and untrustworthy.",
        },
        {
          id: 'foh-l1-q5',
          kind: 'reflection',
          prompt: "How can remembering God's true character help you resist temptation?",
          explanation:
            "Temptation often distorts God's character. Remembering that God is loving, truthful, and protective helps us trust Him when sin looks attractive.",
        },
      ],
    },
  },
  'when-trust-was-broken': {
    openingThought: `Sin did not only break a rule.

It broke trust.

After Adam and Eve believed the serpent's lie, their relationship with God changed immediately. The God they once welcomed, they now avoided. The voice that once brought peace now made them afraid.

They hid.

That one detail tells us a lot.

The fall was not just legal. It was relational. Humanity began seeing God through fear instead of love.

And when trust in God is broken, everything else starts to crack too.`,
    scriptureRef: 'Genesis 3:8',
    scriptureQuote: `And they heard the voice of the LORD God walking in the garden in the cool of the day.`,
    scriptureSecondaryRef: 'Genesis 3:9 to 10',
    scriptureSecondaryQuote: `And the LORD God called unto Adam, and said unto him, Where art thou?

And he said, I heard thy voice in the garden, and I was afraid, because I was naked; and I hid myself.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Genesis 3:12',
        quote: `And the man said, The woman whom thou gavest to be with me, she gave me of the tree, and I did eat.`,
      },
    ],
    teachingPoints: [
      `1. Sin changed how humanity saw God

Before the fall, Adam and Eve lived openly before God.

There was no fear.
No hiding.
No shame.

But after sin entered, they heard God's voice and ran from Him.

God had not changed.

Their perception of Him had.

Sin made the loving Creator look like someone to avoid.`,
      `2. God came looking for them

The first question God asks after the fall is not, "How dare you?"

It is, "Where art thou?"

God knew where Adam was physically.

The question was relational.

God was drawing Adam out of hiding and inviting him to face what had happened.

Even after sin, God moved toward humanity.`,
      `3. Fear replaced trust

Adam said, "I was afraid."

That is one of the first emotional consequences of sin.

The lie about God created distance in the human heart.

When people believe God is unsafe, they hide.

They hide behind performance, excuses, religion, distraction, or silence.

But hiding never heals what trust has broken.`,
      `4. Broken trust led to blame

When God questioned Adam, Adam blamed Eve and indirectly blamed God:

"The woman whom thou gavest to be with me."

Sin fractured both the vertical relationship with God and the horizontal relationship with another human being.

Once trust in God was broken, love between people began to break too.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: 'Genesis names one feeling that entered when trust broke.',
    wordStudy: {
      surface: 'Afraid',
      lemma: 'יָרֵא (yare)',
      transliteration: 'yare',
      meaning: 'Fear, dread, or alarm in the presence of danger.',
      strongs: 'H3372',
      reference: 'Genesis 3:10',
      note: `Adam's fear shows how deeply sin distorted humanity's view of God.

God came near, but Adam felt threatened.

Sin does not only make us guilty.

It makes us suspicious of the very One who came to save us.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'doctrine_clarity',
      body: `Genesis 3 shows that sin damages relationships before it damages behavior patterns.

Adam and Eve's first response was not confession.

It was hiding.

Then blame.

That pattern still shows up in us.

We hide when we feel exposed.
We blame when we feel guilty.
We defend ourselves when we feel ashamed.

But God's response in Eden reveals His heart.

He came looking.

He asked questions.

He invited honesty.

He did not abandon them in their fear.

The same God still calls people out of hiding today.`,
    },
    studyInsightBlocks: [
      trustToHidingSequenceVisual,
      {
        type: 'scriptureChain',
        title: 'From Trust to Hiding',
        references: [
          { reference: 'Genesis 3:8 to 10' },
          { reference: 'Genesis 3:12' },
          { reference: 'Psalm 139:7 to 10' },
          { reference: 'Romans 5:8' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: Sin broke trust and led humanity into fear, hiding, and blame, but God still moved toward us with mercy.',
      },
    ],
    reflectPrompt: `Where do you tend to hide from God when you feel guilty, afraid, or exposed?

This could be through busyness, silence, excuses, overworking, religious performance, distraction, or pretending everything is fine.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, practice coming out of hiding.

When you feel the urge to avoid God, pause and say:

"God is calling me toward healing, not away from love."

Then bring one honest sentence to Him.

Not a polished prayer.
Not a perfect explanation.
Just truth.

Something like:

"Lord, I feel ashamed."
"Lord, I am afraid."
"Lord, I have been avoiding You."

Honesty is often the first step back into trust.

Prayer:

Father, I admit that I sometimes hide from You. When I feel guilty or afraid, I forget Your heart and assume You are against me. Help me trust that You are calling me toward healing. Teach me to come into the light with honesty, and restore my trust in Your love. Amen.`,
    prayer: '',
    completionSummary:
      'Sin broke trust and made humanity afraid of God. But even then, God came looking. His first move was not abandonment. It was pursuit.',
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'foh-l2-q1',
          prompt: "After Adam and Eve sinned, what did they do when they heard God's voice?",
          options: ['They worshiped immediately', 'They hid themselves', 'They built an altar', 'They left the garden peacefully'],
          correctIndex: 1,
          explanation: 'Genesis 3:8-10 shows that Adam and Eve hid from God after sin entered.',
        },
        {
          id: 'foh-l2-q2',
          prompt: 'What question did God ask Adam?',
          options: ['"Where art thou?"', '"Why are you stronger?"', '"Who made the garden?"', '"Did you create yourself?"'],
          correctIndex: 0,
          explanation:
            'God asked, "Where art thou?" not because He lacked information, but because He was drawing Adam into honest relationship.',
        },
        {
          id: 'foh-l2-q3',
          prompt: 'What emotion did Adam mention in Genesis 3:10?',
          options: ['Pride', 'Joy', 'Fear', 'Excitement'],
          correctIndex: 2,
          explanation: `Adam said, "I was afraid," showing that sin introduced fear into humanity's relationship with God.`,
        },
        {
          id: 'foh-l2-q4',
          prompt: 'What did Adam do when God questioned him?',
          options: [
            'Took full responsibility immediately',
            'Blamed Eve and indirectly blamed God',
            'Asked for forgiveness first',
            'Denied that anything happened',
          ],
          correctIndex: 1,
          explanation:
            'Adam said the woman whom God gave him gave him the fruit—shifting blame to Eve and indirectly toward God.',
        },
        {
          id: 'foh-l2-q5',
          kind: 'reflection',
          prompt: 'Why is honesty with God important when trust has been damaged?',
          explanation:
            'Honesty brings fear, shame, and guilt into the light where God can begin healing and restoring trust.',
        },
      ],
    },
  },
  'the-birth-of-shame': {
    openingThought: `Shame was not part of God's original design.

Before sin, Adam and Eve were fully known and unafraid. There was no hiding, no covering, no blaming, and no need to protect themselves from love.

Then sin entered.

Suddenly, they saw themselves differently. They felt exposed. They tried to cover what was broken. They hid from God and turned against each other.

That is what shame does.

It makes us feel unsafe with God, unsafe with people, and unsafe even within ourselves.

But God did not leave humanity buried under shame.

He came looking.`,
    scriptureRef: 'Genesis 3:7',
    scriptureQuote: `And the eyes of them both were opened, and they knew that they were naked.`,
    scriptureSecondaryRef: 'Genesis 3:12 to 13',
    scriptureSecondaryQuote: `And the man said, The woman whom thou gavest to be with me, she gave me of the tree, and I did eat.

And the woman said, The serpent beguiled me, and I did eat.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Romans 3:23',
        quote: `For all have sinned, and come short of the glory of God.`,
      },
    ],
    teachingPoints: [
      `1. Shame changed how humanity saw itself

Genesis says Adam and Eve knew they were naked.

This was more than physical awareness.

It was the first experience of guilt, exposure, and inner disconnection.

Sin made them see themselves through fear instead of innocence.

They no longer felt safe being fully known.`,
      `2. Shame led to covering

Adam and Eve tried to cover themselves with fig leaves.

That first covering represents a deeper human instinct.

When shame enters, we try to manage how we are seen.

We cover with image.
We cover with performance.
We cover with excuses.
We cover with silence.

But human coverings cannot heal the heart.`,
      `3. Shame led to blame

When God questioned Adam, he blamed Eve and indirectly blamed God.

Then Eve blamed the serpent.

This is how shame protects itself.

Instead of confessing, it deflects.
Instead of owning, it accuses.
Instead of healing, it hides.

Blame may feel safer in the moment, but it keeps the wound open.`,
      `4. Shame is connected to falling short of God's glory

Romans 3:23 says all have sinned and come short of the glory of God.

God's glory is the visible beauty of His character.

Humanity was created to reflect that glory, to live in love, truth, trust, and relational wholeness.

Sin damaged that reflection.

Shame is what it feels like when we sense that something in us is no longer whole.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: 'Romans connects sin with glory, not only guilt.',
    wordStudy: {
      surface: 'Glory',
      lemma: 'δόξα (doxa)',
      transliteration: 'doxa',
      meaning: 'In Scripture, glory often points to the visible beauty, weight, and radiance of who God is.',
      strongs: 'G1391',
      reference: 'Romans 3:23',
      note: `Romans 3:23 says sin causes humanity to fall short of God's glory.

This means sin is not only breaking rules.

It is falling out of harmony with God's character.

We were made to reflect His love.

Shame reminds us that sin has damaged that reflection, but Jesus came to restore it.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'doctrine_clarity',
      body: `The fall affected humanity at more than one level.

It affected how we see God.
It affected how we see ourselves.
It affected how we relate to others.

That is why Genesis 3 feels so painfully familiar.

We still hide.
We still cover.
We still blame.
We still defend ourselves when we feel exposed.

But God's response in Eden shows us something important.

He did not ignore sin.

But He also did not abandon the sinner.

He came near, asked questions, and began the work of redemption.

The answer to shame is not better hiding.

The answer is restored trust in God's love.`,
    },
    studyInsightBlocks: [
      shameCycleVisual,
      christInterruptsShameVisual,
      {
        type: 'scriptureChain',
        title: 'From Shame to Restoration',
        references: [
          { reference: 'Genesis 3:7' },
          { reference: 'Genesis 3:12 to 13' },
          { reference: 'Romans 3:23' },
          { reference: 'Romans 5:8' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: Sin brought shame, hiding, and blame, but God moves toward us with truth and grace to restore what was damaged.',
      },
    ],
    reflectPrompt: `What is one way shame causes you to hide, cover, or blame instead of coming honestly to God?

Do not answer this to condemn yourself. Answer it so you can recognize the pattern and bring it into the light.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, notice one moment when you feel the urge to cover yourself.

Maybe you want to defend.
Maybe you want to blame.
Maybe you want to act like you are fine.
Maybe you want to disappear.

Pause and bring that moment to God.

Say:

"Lord, I feel exposed, but I do not want to hide from You."

Shame grows in secrecy.

Healing begins in honest surrender.

Prayer:

Father, You see me fully and still move toward me with love. Help me stop hiding behind image, excuses, and fear. Teach me to bring my shame into Your presence instead of running from You. Restore in me the beauty of Your character, and help me trust the grace revealed in Jesus. Amen.`,
    prayer: '',
    completionSummary:
      'Shame entered through sin, but shame does not get the final word. God still comes near, calling humanity out of hiding and into restoration.',
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'foh-l3-q1',
          prompt: 'What did Adam and Eve realize after they sinned?',
          options: ['That they were naked', 'That the garden disappeared', 'That God had changed', 'That they were angels'],
          correctIndex: 0,
          explanation:
            'Genesis 3:7 says their eyes were opened and they knew they were naked, revealing the entrance of shame and exposure.',
        },
        {
          id: 'foh-l3-q2',
          prompt: 'What did Adam and Eve try to do after realizing they were naked?',
          options: ['Build a city', 'Cover themselves', 'Leave earth', 'Write Scripture'],
          correctIndex: 1,
          explanation:
            'Their attempt to cover themselves shows the human instinct to manage shame and exposure.',
        },
        {
          id: 'foh-l3-q3',
          prompt: 'What did Adam and Eve do when questioned?',
          options: ['Blamed others', 'Sang praises', 'Pretended they had no memory', 'Became angels'],
          correctIndex: 0,
          explanation:
            'Adam blamed Eve and Eve blamed the serpent, showing how shame often leads to deflection.',
        },
        {
          id: 'foh-l3-q4',
          prompt: 'According to Romans 3:23, what have all people done?',
          options: [
            'Sinned and come short of the glory of God',
            'Lived perfectly',
            'Created their own glory',
            'Avoided shame completely',
          ],
          correctIndex: 0,
          explanation:
            `Romans 3:23 teaches that all have sinned and fallen short of God's glory.`,
        },
        {
          id: 'foh-l3-q5',
          kind: 'reflection',
          prompt: "How does God's pursuit of Adam and Eve help you see His response to your shame?",
          explanation:
            'God did not abandon Adam and Eve in shame. He came near, asked questions, and began the work of restoration.',
        },
      ],
    },
  },
  'what-sin-really-is': {
    openingThought: `Most people think of sin as breaking rules.

That is true, but it is not the whole picture.

Sin is deeper than a bad action. It is a break from God's love, God's truth, and God's design for life.

In Eden, sin began when humanity believed a lie about God. That lie damaged trust. Broken trust produced fear, hiding, shame, blame, and rebellion.

So sin is not only about what humans do.

It is about what happens when the heart disconnects from God.

This lesson helps us see sin clearly so we can understand why we need Jesus so deeply.`,
    scriptureRef: 'Romans 3:23',
    scriptureQuote: `For all have sinned, and come short of the glory of God.`,
    scriptureSecondaryRef: '1 John 3:4',
    scriptureSecondaryQuote: `Sin is the transgression of the law.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Romans 13:10',
        quote: `Love worketh no ill to his neighbour: therefore love is the fulfilling of the law.`,
      },
      {
        type: 'scripture',
        reference: '1 John 4:8',
        quote: `He that loveth not knoweth not God; for God is love.`,
      },
    ],
    teachingPoints: [
      `1. Sin is falling short of God's glory

Romans 3:23 says all have sinned and come short of God's glory.

God's glory is the beauty of His character revealed.

Humanity was created to reflect His love, truth, purity, mercy, and faithfulness.

Sin means we have fallen out of harmony with that glory.

We were made to reflect God.

Sin bends us inward.`,
      `2. Sin is lawlessness

1 John 3:4 defines sin as transgression of the law.

But God's law is not random control.

Romans 13:10 says love is the fulfilling of the law.

That means sin is not only rule-breaking.

It is life out of alignment with love.`,
      `3. Sin turns love into selfishness

God created humanity for relational love.

Sin distorts that design.

Instead of self-giving love, sin produces self-protection, self-exaltation, self-indulgence, and self-justification.

That is why sin damages everything it touches.

It turns people inward when they were created to live outward in love.`,
      `4. Sin begins with a false picture of God

In Genesis 3, Satan's lie made God look restrictive and untrustworthy.

Once that lie was believed, disobedience followed.

This pattern still matters.

When we believe false things about God, our desires and actions begin to shift.

Right belief about God is not a small issue.

It shapes the whole life.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: 'Scripture ties sin to stepping across a line God draws in love.',
    wordStudy: {
      surface: 'Transgression',
      lemma: 'παράβασις (parabasis)',
      transliteration: 'parabasis',
      meaning: 'To step across a boundary, violate a command, or move outside what is right.',
      strongs: 'G3847',
      reference: '1 John 3:4',
      note: `Sin is transgression, but the boundary being crossed is not arbitrary.

God's law is the law of love.

To sin is to step outside the way of love and move against the character of God.

Jesus came to bring us back into harmony with God's love.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'doctrine_clarity',
      body: `Sin is not just a list of bad behaviors.

It is a deeper condition of the heart.

The Bible shows sin as a break from God's glory, a violation of love, and a distortion of human identity.

This means we cannot fix sin by simply trying harder to look good.

The problem is deeper than appearance.

We need restoration at the level of trust, desire, thought, and love.

That is why Jesus did not come merely to improve our behavior.

He came to save us, renew us, and restore God's image in us.

A clear way to understand sin is this:

False view of God
Broken trust
Distorted desire
Self-centered action
Damaged relationships

The gospel reverses that movement through Christ.`,
    },
    studyInsightBlocks: [
      sinHeartDownwardSequenceVisual,
      sinInwardVsLoveVisual,
      {
        type: 'scriptureChain',
        title: 'What Sin Really Is',
        references: [
          { reference: 'Romans 3:23' },
          { reference: '1 John 3:4' },
          { reference: 'Romans 13:10' },
          { reference: '1 John 4:8' },
        ],
      },
      {
        type: 'paragraph',
        text: "Takeaway: Sin is not only breaking rules. It is falling out of harmony with God's glory and love.",
      },
    ],
    reflectPrompt: `How does your understanding of sin change when you see it as life disconnected from God's love?

Think beyond behavior. Consider how sin affects trust, desire, relationships, identity, and your picture of God.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, when you notice sin in your life, do not stop at behavior.

Ask the deeper question:

"What am I believing about God right now?"

Then ask:

"How is Jesus calling me back into love?"

This does not excuse wrong choices.

It helps you bring the root to God, not just the fruit.

Prayer:

Father, help me see sin honestly. Do not let me minimize it or misunderstand it. Show me where I have stepped outside Your love and trusted lies about You. Restore my heart through Jesus. Bring my thoughts, desires, and actions back into harmony with Your character. Amen.`,
    prayer: '',
    completionSummary:
      "Sin is more than broken rules. It is broken harmony with God's love. But Jesus came to restore what sin has damaged.",
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'foh-l4-q1',
          prompt: 'According to Romans 3:23, what have all people done?',
          options: [
            'Sinned and come short of the glory of God',
            'Avoided every temptation',
            'Fully restored themselves',
            'Created their own law',
          ],
          correctIndex: 0,
          explanation:
            'Romans 3:23 says all have sinned and come short of the glory of God.',
        },
        {
          id: 'foh-l4-q2',
          prompt: 'According to 1 John 3:4, what is sin?',
          options: [
            'Transgression of the law',
            'A harmless mistake only',
            'A lack of information',
            'A physical weakness only',
          ],
          correctIndex: 0,
          explanation: '1 John 3:4 defines sin as transgression of the law.',
        },
        {
          id: 'foh-l4-q3',
          prompt: 'According to Romans 13:10, what fulfills the law?',
          options: ['Love', 'Fear', 'Pride', 'Control'],
          correctIndex: 0,
          explanation:
            "Romans 13:10 says love is the fulfilling of the law, showing that God's law is rooted in love.",
        },
        {
          id: 'foh-l4-q4',
          prompt: 'What is sin at its deepest level according to this lesson?',
          options: [
            "Life disconnected from God's love",
            'A problem God cannot solve',
            'Something only angels experience',
            'A small issue with no consequences',
          ],
          correctIndex: 0,
          explanation:
            `Sin is deeper than outward behavior. It is life disconnected from God's love, truth, and design.`,
        },
        {
          id: 'foh-l4-q5',
          kind: 'reflection',
          prompt: "What is one area where Jesus may be calling you back into harmony with God's love?",
          explanation:
            'The gospel does not only forgive sin. It restores the heart back into trust, love, and relationship with God.',
        },
      ],
    },
  },
  'how-lies-shape-lives': {
    openingThought: `A lie does not stay small when the heart believes it.

In Eden, the serpent's lie reshaped how Adam and Eve saw God. Then it reshaped how they saw themselves. Then it reshaped how they treated each other.

That is how deception works.

It does not only change what we think.

It changes what we trust, what we desire, what we fear, and what we choose.

The fall shows us that wrong beliefs about God never stay theoretical. They become patterns of life.

This is why truth matters so much.`,
    scriptureRef: 'Proverbs 4:23',
    scriptureQuote: `Keep thy heart with all diligence; for out of it are the issues of life.`,
    scriptureSecondaryRef: 'John 8:44',
    scriptureSecondaryQuote: `He was a murderer from the beginning, and abode not in the truth, because there is no truth in him.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Genesis 3:6',
        quote: `And when the woman saw that the tree was good for food, and that it was pleasant to the eyes, and a tree to be desired to make one wise.`,
      },
    ],
    teachingPoints: [
      `1. What enters the heart shapes the life

Proverbs 4:23 says to keep the heart with all diligence because the issues of life flow from it.

In Scripture, the heart is not just emotion.

It includes desire, trust, thought, will, and direction.

When a lie enters the heart, it begins shaping the whole person.

That is why deception is so dangerous.`,
      `2. Satan's lies reshape desire

Genesis says Eve saw that the tree was good for food, pleasant to the eyes, and desirable to make one wise.

The tree had been present before.

But after the lie, she saw it differently.

Deception changed perception.

What God warned against began to look attractive.

Sin often works this way.

It makes danger look beautiful and obedience look unnecessary.`,
      `3. Lies about God produce distorted living

If we believe God is withholding good from us, we will start reaching outside His will.

If we believe God is harsh, we will hide.

If we believe God is distant, we will try to save ourselves.

If we believe God is not enough, we will chase substitutes.

Wrong pictures of God produce wrong patterns of life.`,
      `4. Jesus restores us through truth

Satan works through lies.

Jesus restores through truth.

The answer to deception is not merely trying harder.

The answer is letting God's word reshape how we see Him, ourselves, and the world.

Truth does not only inform the mind.

Truth heals perception.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: 'Proverbs points to the heart as the riverhead of daily life.',
    wordStudy: {
      surface: 'Heart',
      lemma: 'לֵב (lev)',
      transliteration: 'lev',
      meaning:
        'In Scripture, the heart often refers to the inner life, including thoughts, desires, motives, trust, and choices.',
      strongs: 'H3820',
      reference: 'Proverbs 4:23',
      note: `Proverbs 4:23 teaches that life flows from the heart.

This means spiritual growth is not only about outward behavior.

God wants to restore the inner place where trust, desire, and decisions are formed.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'doctrine_clarity',
      body: `The fall was perceptual before it was behavioral.

That means Adam and Eve's view of reality was distorted before their action followed.

The serpent changed the way they perceived God's command, God's character, and the forbidden tree.

Then the behavior came.

This matters because many people try to fight sin only at the behavior level.

But Scripture goes deeper.

What am I believing?
What am I trusting?
What am I desiring?
What picture of God is shaping this choice?

Jesus came to heal the roots, not only trim the branches.

When truth about God returns to the heart, the life begins to change.`,
    },
    studyInsightBlocks: [
      lieToLifeSequenceVisual,
      truthRenewalSequenceVisual,
      {
        type: 'scriptureChain',
        title: 'Lies and the Heart',
        references: [
          { reference: 'Proverbs 4:23' },
          { reference: 'Genesis 3:6' },
          { reference: 'John 8:44' },
          { reference: 'John 8:32' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: Lies reshape how we see God, ourselves, and sin. Jesus restores us by bringing truth back into the heart.',
      },
    ],
    reflectPrompt: `What is one lie about God, yourself, or sin that has shaped your choices more than you realized?

This may be a lie like "God is holding out on me," "I have to fix myself first," "This sin will satisfy me," or "I am too far gone."`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, practice tracing your choices back to belief.

When you feel pulled toward a harmful pattern, ask:

"What lie is making this look good?"

Then answer it with Scripture.

For example:

Lie:
"This will satisfy me."

Truth:
God's presence gives fullness of joy.

Lie:
"I am too far gone."

Truth:
Jesus came to seek and save the lost.

Do not just fight the behavior.

Bring the lie to Jesus.

Prayer:

Father, help me guard my heart. Show me the lies I have believed about You, myself, and sin. Let Your truth reshape my desires and choices. Teach me to see clearly again. Restore my trust in Your love, and lead me into the freedom Jesus gives. Amen.`,
    prayer: '',
    completionSummary:
      'Lies shape lives, but truth restores them. Jesus does not only change behavior. He brings truth back into the heart so trust, desire, and choices can be healed.',
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'foh-l5-q1',
          prompt: 'According to Proverbs 4:23, why should we guard the heart?',
          options: [
            'Because out of it are the issues of life',
            'Because emotions do not matter',
            'Because the heart cannot be changed',
            'Because God only cares about behavior',
          ],
          correctIndex: 0,
          explanation:
            'Proverbs 4:23 teaches that the heart must be guarded because the direction of life flows from it.',
        },
        {
          id: 'foh-l5-q2',
          prompt: 'According to John 8:44, what is true about the devil?',
          options: [
            'There is no truth in him',
            'He always tells the truth',
            'He created humanity',
            'He restores the heart',
          ],
          correctIndex: 0,
          explanation:
            'Jesus said there is no truth in the devil, showing that deception is central to his work.',
        },
        {
          id: 'foh-l5-q3',
          prompt: "What changed in Eve's perception after the serpent's lie?",
          options: [
            'The tree began to look desirable',
            'God disappeared',
            'The garden stopped existing',
            'Adam became an angel',
          ],
          correctIndex: 0,
          explanation:
            `Genesis 3:6 shows that Eve saw the tree as desirable after the serpent's deception reshaped her perception.`,
        },
        {
          id: 'foh-l5-q4',
          prompt: 'What is one major lesson from this study?',
          options: [
            'Behavior is never important',
            'Lies can shape desire, choices, and life patterns',
            'Sin only affects the body',
            'Truth is unrelated to spiritual growth',
          ],
          correctIndex: 1,
          explanation:
            'The lesson shows that deception shapes perception, desire, choices, and patterns of living.',
        },
        {
          id: 'foh-l5-q5',
          kind: 'reflection',
          prompt: 'What truth from Scripture do you need to use against a lie you have believed?',
          explanation:
            'Jesus restores the heart through truth. Naming the lie and answering it with Scripture helps rebuild trust in God.',
        },
      ],
    },
  },
  'jesus-reversed-the-fall': {
    openingThought: `The fall began when humanity believed a lie.

Jesus entered the world and answered that lie with truth.

Where Adam and Eve distrusted God in a garden, Jesus trusted the Father in a wilderness. Where humanity reached for what God had not given, Jesus refused to use His power outside the Father's will.

The enemy came to Jesus with temptation, pressure, and distortion.

But Jesus stood firm.

He did not fall into distrust.
He did not turn inward.
He did not use freedom for selfishness.

Jesus came as the faithful Son who reversed the path of the fall.`,
    scriptureRef: 'Matthew 4:4',
    scriptureQuote: `But he answered and said, It is written, Man shall not live by bread alone, but by every word that proceedeth out of the mouth of God.`,
    scriptureSecondaryRef: 'Matthew 4:10',
    scriptureSecondaryQuote: `Then saith Jesus unto him, Get thee hence, Satan: for it is written, Thou shalt worship the Lord thy God, and him only shalt thou serve.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'John 8:32',
        quote: `And ye shall know the truth, and the truth shall make you free.`,
      },
      {
        type: 'scripture',
        reference: 'Romans 5:19',
        quote: `For as by one man's disobedience many were made sinners, so by the obedience of one shall many be made righteous.`,
      },
    ],
    teachingPoints: [
      `1. Jesus faced temptation with trust

In the wilderness, Satan tempted Jesus to question the Father's care, timing, and word.

Jesus had real hunger.
Real pressure.
Real opportunity to choose another way.

But He answered every temptation with Scripture.

His trust in the Father remained unbroken.`,
      `2. Jesus refused selfish independence

The serpent tempted Eve to take life apart from God's word.

Satan tempted Jesus to use His power apart from the Father's will.

Jesus refused.

He would not use divine power to serve self.

He lived in perfect dependence on the Father.`,
      `3. Jesus restored truth where lies had entered

The fall began with deception.

Jesus answered deception with truth.

John 8:32 says truth makes us free.

This freedom is not merely intellectual. It is spiritual freedom from lies, bondage, shame, and distrust.

Jesus does not only tell the truth.

He is the truth that restores us.`,
      `4. Jesus succeeded where humanity failed

Romans 5 contrasts Adam and Christ.

Through Adam's disobedience, sin spread through humanity.

Through Christ's obedience, righteousness and restoration are made available.

Jesus came as the new representative of humanity.

He did what fallen humanity could not do.

He remained faithful.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: 'Romans names obedience as the path that righteousness follows in Christ.',
    wordStudy: {
      surface: 'Obedience',
      lemma: 'ὑπακοή (hypakoē)',
      transliteration: 'hypakoē',
      meaning: 'Faithful listening, trustful response, and alignment with God\'s will.',
      strongs: 'G5218',
      reference: 'Romans 5:19',
      note: `Jesus' obedience was not cold rule-keeping.

It was love-filled trust in the Father.

Where sin says, "I will decide apart from God," obedience says, "I trust the Father's way."

Jesus' obedience reveals what humanity was created for.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The temptation of Jesus is not just an isolated story.

It is a reversal story.

In Eden, humanity was surrounded by food and failed to trust God.

In the wilderness, Jesus was hungry and still trusted the Father.

In Eden, the serpent twisted God's word.

In the wilderness, Jesus stood on God's word.

In Eden, humanity reached for exaltation.

In the wilderness, Jesus refused self-exaltation.

In Eden, the fall began.

In Christ, restoration began.

This is why Jesus is not only our example.

He is our Savior.

He succeeds where we failed, then invites us into His victory.`,
    },
    studyInsightBlocks: [
      edenWildernessReversalVisual,
      {
        type: 'scriptureChain',
        title: 'Christ Reverses the Fall',
        references: [
          { reference: 'Genesis 3:6' },
          { reference: 'Matthew 4:4' },
          { reference: 'Matthew 4:10' },
          { reference: 'Romans 5:19' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: Where humanity fell through distrust and disobedience, Jesus stood faithful through trust, Scripture, and obedience to the Father.',
      },
    ],
    reflectPrompt: `Where do you most need Jesus to restore trust in God's word and God's character?

Think about an area where temptation feels strong, obedience feels difficult, or God's way feels hard to trust.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, practice answering temptation with truth.

When temptation speaks, do not only argue with your feelings.

Bring Scripture into the moment.

Use a simple pattern:

Temptation:
"I need this to be satisfied."

Truth:
"Man shall not live by bread alone."

Temptation:
"God's way is holding me back."

Truth:
"The truth shall make you free."

You are not fighting alone.

Jesus has already stood where humanity fell, and He gives strength to those who trust Him.

Prayer:

Jesus, thank You for succeeding where humanity failed. Thank You for trusting the Father perfectly and standing firm against temptation. Help me bring Your truth into the places where I am tempted to distrust God. Restore my heart, strengthen my faith, and teach me to walk in Your victory. Amen.`,
    prayer: '',
    completionSummary:
      'Jesus reversed the path of the fall. Where humanity believed lies and turned from God, Christ trusted the Father, stood on Scripture, and opened the way back to restoration.',
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'foh-l6-q1',
          prompt: 'How did Jesus respond to temptation in Matthew 4?',
          options: ['By quoting Scripture', 'By ignoring the Father', 'By giving in slowly', 'By asking Satan for advice'],
          correctIndex: 0,
          explanation:
            `Jesus answered temptation with "It is written," showing His trust in God's word.`,
        },
        {
          id: 'foh-l6-q2',
          prompt: 'What did Jesus refuse to do in the wilderness?',
          options: [
            'Trust the Father',
            'Use His power selfishly outside the Father\'s will',
            'Pray',
            'Remember Scripture',
          ],
          correctIndex: 1,
          explanation:
            'Jesus refused to use His power for selfish independence and remained surrendered to the Father.',
        },
        {
          id: 'foh-l6-q3',
          prompt: 'According to John 8:32, what does truth do?',
          options: [
            'Makes people free',
            'Makes sin harmless',
            'Removes the need for faith',
            'Hides deception',
          ],
          correctIndex: 0,
          explanation:
            `Jesus said the truth shall make you free, showing that truth breaks the power of lies and bondage.`,
        },
        {
          id: 'foh-l6-q4',
          prompt: 'According to Romans 5:19, what comes through Christ\'s obedience?',
          options: [
            'Many are made righteous',
            'Sin becomes stronger',
            'Humanity is forgotten',
            'God stops loving the world',
          ],
          correctIndex: 0,
          explanation:
            'Romans 5:19 says that through the obedience of One, many are made righteous.',
        },
        {
          id: 'foh-l6-q5',
          kind: 'reflection',
          prompt: 'How can Jesus\' victory in the wilderness encourage you when you face temptation?',
          explanation:
            'Jesus stood faithful where humanity failed. His victory gives hope, strength, and restoration to those who trust Him.',
        },
      ],
    },
  },
  'restored-through-truth-and-love': {
    openingThought: `The fall began with a lie.

Restoration begins with truth.

Humanity fell when trust in God was broken. Fear entered. Shame entered. Blame entered. Sin bent the heart inward.

But Jesus came to restore what was lost.

He does not only forgive us and leave us unchanged. He brings us back into truth, trust, love, and new life.

The gospel is not merely God erasing a record.

It is God restoring a relationship.

In Christ, the heart that once hid from God can learn to come near again.`,
    scriptureRef: 'John 17:3',
    scriptureQuote: `And this is life eternal, that they might know thee the only true God, and Jesus Christ, whom thou hast sent.`,
    scriptureSecondaryRef: '1 Timothy 2:4',
    scriptureSecondaryQuote: `Who will have all men to be saved, and to come unto the knowledge of the truth.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: '2 Corinthians 5:17',
        quote: `Therefore if any man be in Christ, he is a new creature: old things are passed away; behold, all things are become new.`,
      },
      {
        type: 'scripture',
        reference: 'John 8:32',
        quote: `And ye shall know the truth, and the truth shall make you free.`,
      },
    ],
    teachingPoints: [
      `1. Salvation restores knowing God

John 17:3 says eternal life is knowing the true God and Jesus Christ.

That means salvation is deeply relational.

God does not only want legal pardon.

He wants restored trust, restored fellowship, and restored knowledge of His character.

The fall damaged how humanity saw God.

Jesus restores the truth about who God is.`,
      `2. God wants people to know the truth

1 Timothy 2:4 says God desires all people to be saved and to come to the knowledge of the truth.

Truth matters because lies brought the fall.

The serpent's deception distorted God's character and led humanity away from trust.

So God's saving work includes bringing truth back into the human heart.`,
      `3. In Christ, new life begins

2 Corinthians 5:17 says anyone in Christ is a new creature.

This does not mean believers never struggle.

It means the old life no longer has final authority.

In Christ, restoration has begun.

The heart can be renewed.
Trust can be rebuilt.
Shame can be healed.
Love can grow again.`,
      `4. Truth makes us free

John 8:32 says truth makes us free.

Not every freedom is real freedom.

Sin promises freedom while producing bondage.

Jesus frees us by revealing what is true about God, true about sin, true about ourselves, and true about His love.

Freedom begins when lies lose their grip.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: 'When Jesus ties eternal life to knowing God, Scripture is speaking personally, not vaguely.',
    wordStudy: {
      surface: 'Know',
      lemma: 'γινώσκω (ginōskō)',
      transliteration: 'ginōskō',
      meaning: 'To know personally, relationally, and experientially.',
      strongs: 'G1097',
      reference: 'John 17:3',
      note: `When Jesus says eternal life is knowing God, He is not talking about religious trivia.

He is describing restored relationship.

The goal is not merely to know facts about God.

The goal is to know Him, trust Him, and live in His love.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The fall affected humanity in three major ways:

Perceptually:
We began seeing God through lies.

Relationally:
We began hiding from God and blaming one another.

Morally:
We began living out of harmony with love.

Jesus restores all three.

He restores perception by revealing the Father.

He restores relationship by drawing us back to God.

He restores morality by renewing the heart through truth and love.

That means the gospel reaches deeper than behavior management.

Jesus heals the roots.

The life of faith is a journey of learning to see God clearly again, trust Him deeply again, and love as we were created to love.`,
    },
    studyInsightBlocks: [
      fallRestorationComparisonVisual,
      {
        type: 'scriptureChain',
        title: 'Restored in Christ',
        references: [
          { reference: 'John 17:3' },
          { reference: 'John 8:32' },
          { reference: '1 Timothy 2:4' },
          { reference: '2 Corinthians 5:17' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: Jesus restores what the fall damaged by bringing us back into truth, trust, love, and new life with God.',
      },
    ],
    reflectPrompt: `Where do you most need Jesus to restore you right now: how you see God, how you trust God, or how you live in love?

Choose one area and be specific. Restoration begins when we stop hiding and allow Christ to meet us honestly.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, practice living restored.

Choose one lie you have believed and replace it with truth.

Example:

Lie:
"God is disappointed and distant."

Truth:
Jesus came to bring me back to the Father.

Lie:
"I am too broken to change."

Truth:
If anyone is in Christ, he is a new creature.

Lie:
"Sin will make me free."

Truth:
The truth in Jesus makes me free.

Do not just read the truth.

Return to it daily.

Let it reshape your trust, your choices, and your view of God.

Prayer:

Father, thank You for restoring what sin has damaged. Help me know You as You truly are. Replace lies with truth, fear with trust, shame with grace, and selfishness with love. Make me new in Christ, and teach me to live as someone who has been brought back to You. Amen.`,
    prayer: '',
    completionSummary:
      'You have completed The Fall of Humanity. The fall began with a lie, but restoration begins with truth. In Jesus, God restores trust, heals shame, renews love, and brings humanity back to Himself.',
    seriesCompleteScreen: {
      title: 'Study Complete',
      message:
        'You have completed The Fall of Humanity. The fall began with a lie, but restoration begins with truth. In Jesus, God restores trust, heals shame, renews love, and brings humanity back to Himself.',
      primaryCta: { label: 'Back to Foundations Path', href: '/paths/foundations' },
      secondaryCta: {
        label: 'Review this study',
        href: '/study-library/the-fall-of-humanity',
      },
    },
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'foh-l7-q1',
          prompt: 'According to John 17:3, what is eternal life?',
          options: [
            'Knowing the only true God and Jesus Christ',
            'Knowing every prophecy chart',
            'Never asking questions',
            'Being naturally perfect',
          ],
          correctIndex: 0,
          explanation:
            `Jesus said eternal life is knowing the only true God and Jesus Christ, showing that salvation is relational.`,
        },
        {
          id: 'foh-l7-q2',
          prompt: 'According to 1 Timothy 2:4, what does God desire?',
          options: [
            'That all people be saved and come to the knowledge of the truth',
            'That people stay confused',
            'That only angels understand truth',
            'That humanity remain afraid',
          ],
          correctIndex: 0,
          explanation:
            '1 Timothy 2:4 says God desires all people to be saved and to come to the knowledge of the truth.',
        },
        {
          id: 'foh-l7-q3',
          prompt: 'What does 2 Corinthians 5:17 say about someone in Christ?',
          options: [
            'They are a new creature',
            'They cannot grow',
            'They are beyond God\'s reach',
            'They are unchanged forever',
          ],
          correctIndex: 0,
          explanation:
            `2 Corinthians 5:17 says that anyone in Christ is a new creature and that old things are passed away.`,
        },
        {
          id: 'foh-l7-q4',
          prompt: 'What does Jesus restore according to this lesson?',
          options: [
            'Truth, trust, love, and new life',
            'Fear, shame, and hiding',
            'Confusion and rebellion',
            'Selfishness and pride',
          ],
          correctIndex: 0,
          explanation:
            'Jesus restores what the fall damaged by bringing us back into truth, trust, love, and new life with God.',
        },
        {
          id: 'foh-l7-q5',
          kind: 'reflection',
          prompt: 'What truth about God do you want to carry with you after finishing this study?',
          explanation:
            'The fall began with lies about God. Restoration continues as we receive and live by the truth revealed in Jesus.',
        },
      ],
    },
  },
}

