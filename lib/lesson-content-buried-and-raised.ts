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

const inTheNameOfGodVisual: StudyVisualLessonBlock = {
  type: 'studyVisual',
  title: 'Baptized in the name',
  accent: 'stone',
  description: 'Baptism declares who we belong to and whose character is shaping us.',
  payload: {
    variant: 'sequence',
    steps: [
      { label: 'Father', subtitle: 'love, belonging, care' },
      { label: 'Son', subtitle: 'grace, redemption, forgiveness' },
      { label: 'Holy Spirit', subtitle: 'renewal, power, fellowship' },
    ],
  },
}

const waterAndSpiritVisual: StudyVisualLessonBlock = {
  type: 'studyVisual',
  title: 'Water and Spirit',
  accent: 'sky',
  description: 'Baptism is the visible sign. The Spirit is the inward power.',
  payload: {
    variant: 'sequence',
    steps: [
      {
        label: 'Water',
        subtitle: 'public sign, baptism, surrender, cleansing symbol',
      },
      {
        label: 'Spirit',
        subtitle: 'inner renewal, conviction, power, new life',
      },
      {
        label: 'Together',
        subtitle: 'born again into life with Christ',
      },
    ],
  },
}

const loveNotCondemnationVisual: StudyVisualLessonBlock = {
  type: 'studyVisual',
  title: 'Love, not condemnation',
  accent: 'sage',
  description: 'God does not force transformation. His goodness leads the heart to repentance.',
  payload: {
    variant: 'comparison',
    leftTitle: 'Condemnation',
    rightTitle: 'God\'s love',
    leftItems: ['fear', 'hiding', 'pressure', 'despair', 'control'],
    rightItems: ['goodness', 'repentance', 'freedom', 'trust', 'new life'],
  },
}

const bornAgainVisual: StudyVisualLessonBlock = {
  type: 'studyVisual',
  title: 'Born again',
  accent: 'sky',
  description: 'The new birth is God restoring the life from the inside out.',
  payload: {
    variant: 'sequence',
    steps: [
      {
        label: 'Old life',
        subtitle: 'guilt, hiding, self-rule, sin, fear',
      },
      {
        label: 'God\'s love',
        subtitle: 'draws, forgives, restores',
      },
      {
        label: 'New life',
        subtitle: 'renewed heart, Spirit-led mind, surrendered will, life in Christ',
      },
    ],
  },
}

const lovedIntoNewLifeVisual: StudyVisualLessonBlock = {
  type: 'studyVisual',
  title: 'Loved into new life',
  accent: 'sage',
  description: 'God does not force transformation. He draws us with love.',
  payload: {
    variant: 'sequence',
    steps: [
      {
        label: 'God\'s love',
        subtitle: 'draws, heals, restores, frees',
      },
      {
        label: 'Sin',
        subtitle: 'hides, wounds, distorts, enslaves',
      },
      {
        label: 'Baptism',
        subtitle: 'my public yes to God\'s restoring love',
      },
    ],
  },
}

/** Guided reader lessons for "Buried and Raised" (Foundations). */
export const buriedAndRaisedSeriesLessonLibrary: Record<string, LessonReaderContent> = {
  'loved-into-new-life': {
    openingThought: `God does not begin transformation by threatening us.

He begins by loving us.

Before baptism is about water, it is about love.

God sees the real you.

Not the filtered version.
Not the religious version.
Not the version you wish people saw.

The real you.

And still, He says:

"I have loved you with an everlasting love."

That love does not erase your identity.

It restores it.

God does not want to turn you into a spiritual robot. He wants to heal what sin has damaged and grow you into the person He created you to become.

Baptism begins here:

God loves you, draws you, and invites you into new life.`,
    scriptureRef: 'Jeremiah 31:3',
    scriptureQuote:
      'Yea, I have loved thee with an everlasting love: therefore with lovingkindness have I drawn thee.',
    scriptureAfterPrimary: `God's love is not temporary. He draws the heart with kindness, not coercion.`,
    scriptureSecondaryRef: 'Luke 15:20',
    scriptureSecondaryQuote:
      'But when he was yet a great way off, his father saw him, and had compassion, and ran.',
    scriptureAfterSecondary: `The father in the parable shows God's heart: compassion runs toward the returning sinner.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'John 17:23',
        quote:
          'That the world may know that thou hast sent me, and hast loved them, as thou hast loved me.',
      },
      {
        type: 'scripture',
        reference: '1 John 3:16',
        quote: 'Hereby perceive we the love of God, because he laid down his life for us.',
      },
    ],
    teachingPoints: [
      `1. God loves the real you

Jeremiah says God loves with an everlasting love.

That means His love is not temporary, shallow, or easily exhausted.

God does not love an imaginary version of you.

He loves you.

He sees what sin has damaged, but He also sees what grace can restore.

His love is honest enough to confront what harms you and strong enough to heal what is broken.`,
      `2. God draws instead of forcing

God says, "With lovingkindness have I drawn thee."

That word matters.

God draws.

He does not coerce.

He does not manipulate.

He does not bypass the will.

He invites the heart through love.

Baptism is meaningful because it is a free response to God's love, not a forced religious act.`,
      `3. God runs toward the returning heart

In Luke 15, the father sees the son while he is still far away and runs toward him.

That picture shows the heart of God.

God is not coldly waiting for sinners to crawl back.

He moves toward the one who turns home.

His compassion comes before the son's full explanation.

Grace runs first.`,
      `4. The cross reveals our value

First John says we understand God's love because Jesus laid down His life for us.

The cross shows what you are worth to God.

Not because you earned it.

Not because you were perfect.

But because God's love is that deep.

Baptism is our public response to the love revealed at the cross.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Drawn',
      lemma: 'מָשַׁךְ',
      transliteration: 'mashak',
      meaning: 'To pull near, attract, invite, or bring close.',
      strongs: 'H4900',
      reference: 'Jeremiah 31:3',
      note: `God draws us with lovingkindness.

He does not force love because forced love is not love.

Baptism is a voluntary response to the God who lovingly draws us into restored relationship with Himself.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `God's goal is not to erase you.

God's goal is to restore you.

Sin damages the person.

It twists desire.
It wounds identity.
It creates shame.
It breaks trust.
It bends the heart toward fear, pride, selfishness, and hiding.

But God's love does not come to destroy your individuality.

It comes to heal it.

The gospel says:

God loves you.
God draws you.
God values you.
God gave Himself for you.
God wants to make you new.

Baptism is not the beginning of God's love for you.

It is your response to the love that has already been pursuing you.`,
    },
    studyInsightBlocks: [
      lovedIntoNewLifeVisual,
      {
        type: 'scriptureChain',
        title: 'Loved Into New Life',
        references: [
          { reference: 'Jeremiah 31:3' },
          { reference: 'Luke 15:20' },
          { reference: 'John 17:23' },
          { reference: '1 John 3:16' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: God loves the real you, draws you with kindness, and invites you into new life through Jesus.',
      },
    ],
    reflectPrompt: `Do you find it easy or difficult to believe that God loves the real you?

Think about shame, past mistakes, insecurity, religious pressure, fear, or the parts of yourself you try to hide from others.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, sit with Jeremiah 31:3 for a few minutes.

Read it slowly:

"I have loved thee with an everlasting love."

Then ask:

"What would change if I believed God really loves me like this?"

Do not rush to perform.

Do not rush to prove.

Start with receiving.

Then write one sentence:

"Because God loves me, I can…"

Finish the sentence honestly.

Maybe:

Because God loves me, I can stop hiding.

Because God loves me, I can come home.

Because God loves me, I can surrender.

Because God loves me, I can begin again.

Prayer:

Father, thank You for loving me with everlasting love. Thank You for drawing me with kindness instead of forcing me with fear. Help me believe that You love the real me and that Your love can restore what sin has damaged. Prepare my heart to respond fully to Jesus and to walk in the new life You are calling me into. Amen.`,
    prayer: '',
    completionSummary: `God loves the real you with everlasting love. Baptism begins as a response to the God who draws, restores, and invites you into new life.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'bar-l1-q1',
          prompt: 'According to Jeremiah 31:3, what kind of love does God have?',
          options: ['Everlasting love', 'Temporary love', 'Forced love', 'Shallow love'],
          correctIndex: 0,
          explanation:
            'Jeremiah says God loves with an everlasting love and draws us with lovingkindness.',
        },
        {
          id: 'bar-l1-q2',
          prompt: 'According to Luke 15:20, what did the father do when he saw his son far away?',
          options: [
            'He had compassion and ran to him',
            'He ignored him',
            'He rejected him',
            'He waited with anger only',
          ],
          correctIndex: 0,
          explanation:
            'The father in the parable represents God\'s compassionate heart toward the returning sinner.',
        },
        {
          id: 'bar-l1-q3',
          prompt: 'According to John 17:23, how does the Father love believers?',
          options: [
            'As He loved Jesus',
            'Less than He loves Jesus',
            'Only if they are perfect',
            'Only from a distance',
          ],
          correctIndex: 0,
          explanation:
            'Jesus said the Father loves His people as He loves His Son, revealing the depth of God\'s love.',
        },
        {
          id: 'bar-l1-q4',
          prompt: 'According to 1 John 3:16, how do we perceive the love of God?',
          options: [
            'Jesus laid down His life for us',
            'We earned it by performance',
            'God ignored our need',
            'Love never sacrifices',
          ],
          correctIndex: 0,
          explanation:
            'First John says we perceive God\'s love because Jesus laid down His life for us.',
        },
        {
          id: 'bar-l1-q5',
          kind: 'reflection',
          prompt: 'What part of your life do you need to bring into the light of God\'s everlasting love?',
          explanation:
            'God draws with lovingkindness. His love does not erase who we are; it restores us into new life.',
        },
      ],
    },
  },
  'born-again': {
    openingThought: `Jesus once told a deeply religious man that he needed to be born again.

Not improved.

Not polished.

Not merely better informed.

Born again.

That sounds strange at first because we usually think change means behavior management.

Try harder.
Do better.
Stop messing up.
Fix yourself.

But Jesus goes deeper.

He says we need a new beginning from the inside out.

The new birth is not God deleting who you are.

It is God restoring who you were always meant to become.`,
    scriptureRef: 'John 3:3',
    scriptureQuote: 'Except a man be born again, he cannot see the kingdom of God.',
    scriptureAfterPrimary: `Jesus goes deeper than behavior. He speaks of a new spiritual beginning.`,
    scriptureSecondaryRef: 'John 3:5-6',
    scriptureSecondaryQuote:
      'Except a man be born of water and of the Spirit, he cannot enter into the kingdom of God.\n\nThat which is born of the flesh is flesh; and that which is born of the Spirit is spirit.',
    scriptureAfterSecondary: `New birth joins outward commitment with the Spirit's inward work.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'John 3:16-17',
        quote:
          'For God so loved the world, that he gave his only begotten Son.\n\nFor God sent not his Son into the world to condemn the world; but that the world through him might be saved.',
      },
      {
        type: 'scripture',
        reference: '2 Corinthians 5:17',
        quote:
          'Therefore if any man be in Christ, he is a new creature: old things are passed away; behold, all things are become new.',
      },
    ],
    teachingPoints: [
      `1. Religious knowledge is not enough

Nicodemus knew Scripture.

He was respected, educated, and religious.

But Jesus still told him he needed to be born again.

That means spiritual transformation is deeper than information.

We do not only need to know religious ideas.

We need the heart renewed by God.`,
      `2. New birth is an inward transformation

Jesus was not talking about physical rebirth.

He was talking about a new spiritual beginning.

The mind is renewed.

The heart is softened.

The motives are changed.

The will is surrendered.

The life begins moving in a new direction because God is working within.`,
      `3. The Spirit makes new life possible

Jesus said we must be born of water and of the Spirit.

Water points us toward baptism.

The Spirit points us toward God's inward work.

Baptism without the Spirit would be only an outward symbol.

The Spirit without a willing response would not honor human freedom.

God invites us into both: outward commitment and inward renewal.`,
      `4. God's purpose is salvation, not condemnation

John 3 says God loved the world and gave His Son.

Then it says God did not send His Son to condemn the world, but to save it.

That means the new birth is not driven by fear.

It is driven by love.

God is not trying to crush the sinner.

He is trying to restore the sinner into new life.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Born Again',
      lemma: 'γεννάω',
      transliteration: 'gennao',
      meaning: 'A new beginning produced by God\'s Spirit, restoring the heart, mind, motives, and life.',
      strongs: 'G1080',
      reference: 'John 3:3',
      note: `To be born again is not to become a different person in the sense of losing yourself.

It is to become renewed by God from the inside out.

The old life of guilt, hiding, and sin gives way to new life in Christ.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The new birth corrects a common misunderstanding about Christianity.

Christianity is not merely behavior modification.

It is not just cleaning up the outside.

It is not pretending to be better than others.

It is not learning religious language while the heart remains unchanged.

Jesus calls us into new life.

That new life begins with God's love, moves through the work of the Holy Spirit, and becomes visible in a surrendered life.

Baptism connects to this because baptism is the public sign that we are saying yes to new birth.

The old life is being left behind.

A new life in Christ is beginning.`,
    },
    studyInsightBlocks: [
      bornAgainVisual,
      {
        type: 'scriptureChain',
        title: 'Born Again',
        references: [
          { reference: 'John 3:1-17' },
          { reference: 'John 3:16-17' },
          { reference: '2 Corinthians 5:17' },
          { reference: 'Titus 3:5' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: Jesus calls us to be born again: renewed by the Spirit and brought into a new life shaped by God\'s love.',
      },
    ],
    reflectPrompt: `Where do you most need a new beginning with God?

Think about your thoughts, habits, motives, guilt, relationships, fears, hidden struggles, or the parts of life where behavior change alone has not been enough.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, stop asking only, "What behavior do I need to fix?"

Ask a deeper question:

"Lord, what part of me needs to be made new?"

Then sit with that honestly.

Do not hide.

Do not perform.

Do not pretend you can manufacture new birth by willpower.

Bring that area to Jesus and ask for the work of the Spirit.

A new beginning starts when we stop defending the old life and open ourselves to the life God wants to give.

Prayer:

Father, thank You for loving me enough to offer me a new beginning. I confess that I cannot make myself new by effort alone. I need Your Spirit to renew my heart, mind, motives, and will. Help me receive the new life Jesus came to give. Prepare me to follow Him fully and publicly in faith. Amen.`,
    prayer: '',
    completionSummary: `Jesus calls us to be born again. New life is not surface-level behavior change. It is God restoring the heart from the inside out.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'bar-l2-q1',
          prompt: 'According to John 3:3, what did Jesus say a person must experience?',
          options: [
            'Being born again',
            'Becoming famous',
            'Earning salvation',
            'Avoiding all questions',
          ],
          correctIndex: 0,
          explanation:
            'Jesus told Nicodemus that unless a person is born again, they cannot see the kingdom of God.',
        },
        {
          id: 'bar-l2-q2',
          prompt: 'According to John 3:5, what must a person be born of?',
          options: [
            'Water and the Spirit',
            'Fear and pressure',
            'Reputation and effort',
            'Wealth and status',
          ],
          correctIndex: 0,
          explanation:
            'Jesus said a person must be born of water and the Spirit, pointing to baptism and the Spirit\'s inward work.',
        },
        {
          id: 'bar-l2-q3',
          prompt: 'According to John 3:16, what motivated God to give His Son?',
          options: ['Love', 'Condemnation', 'Manipulation', 'Indifference'],
          correctIndex: 0,
          explanation: 'John 3:16 says God so loved the world that He gave His only begotten Son.',
        },
        {
          id: 'bar-l2-q4',
          prompt: 'According to 2 Corinthians 5:17, what is true of someone in Christ?',
          options: [
            'They are a new creature',
            'They remain hopeless forever',
            'They must save themselves',
            'They are rejected by God',
          ],
          correctIndex: 0,
          explanation:
            'Paul says that if anyone is in Christ, they are a new creature and old things are passed away.',
        },
        {
          id: 'bar-l2-q5',
          kind: 'reflection',
          prompt: 'What old pattern do you want God to replace with new life?',
          explanation:
            'The new birth is God\'s work of renewal from the inside out. He restores the heart, mind, motives, and life through His Spirit.',
        },
      ],
    },
  },
  'love-not-condemnation': {
    openingThought: `God does not manipulate people into transformation.

He loves them into it.

That matters because many people imagine God as mainly angry, disappointed, or ready to condemn.

But Jesus gives us a clearer picture.

God gave His Son because He loved the world.

God sent His Son not to condemn the world, but to save it.

Condemnation crushes.

Love restores.

Fear may pressure behavior for a moment, but love reaches the heart and changes the direction of the life.

Baptism is not a response to spiritual bullying.

It is a response to divine love.`,
    scriptureRef: 'John 3:16-17',
    scriptureQuote:
      'For God so loved the world, that he gave his only begotten Son.\n\nFor God sent not his Son into the world to condemn the world; but that the world through him might be saved.',
    scriptureAfterPrimary: `God's motive is love, and His mission is salvation, not condemnation.`,
    scriptureSecondaryRef: 'Romans 2:4',
    scriptureSecondaryQuote: 'The goodness of God leadeth thee to repentance.',
    scriptureAfterSecondary: `Repentance is awakened when we see God's goodness clearly, not when we are manipulated by fear.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: '1 John 4:16',
        quote: 'God is love; and he that dwelleth in love dwelleth in God, and God in him.',
      },
      {
        type: 'scripture',
        reference: '1 John 4:18-19',
        quote:
          'There is no fear in love; but perfect love casteth out fear.\n\nWe love him, because he first loved us.',
      },
    ],
    teachingPoints: [
      `1. God's motive is love

John 3:16 begins with God's love.

That is the foundation.

God did not send Jesus because He hated the world.

He gave His Son because He loved the world.

The cross is not proof that God was reluctant to save.

The cross is proof that God's love moved first.`,
      `2. God's mission is salvation, not condemnation

John 3:17 says God did not send His Son to condemn the world, but to save it.

Jesus does not deny sin.

He came because sin is real.

But His purpose is not to crush sinners under despair.

His purpose is to rescue, heal, restore, and bring people into life.`,
      `3. God's goodness leads to repentance

Romans says the goodness of God leads us to repentance.

Repentance is not produced by manipulation.

It is awakened when we see God clearly.

When we understand His goodness, our minds begin to change.

We stop believing lies about Him.

We stop running from Him.

We start turning toward Him.`,
      `4. Perfect love casts out fear

First John says perfect love casts out fear.

Fear-based religion may create outward compliance, but it does not create deep trust.

God wants more than frightened behavior.

He wants a restored relationship.

His love casts out the fear that makes us hide, perform, or pretend.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Repentance',
      lemma: 'μετάνοια',
      transliteration: 'metanoia',
      meaning: 'A change of mind, a turning of the heart, and a reorientation of life toward God.',
      strongs: 'G3341',
      reference: 'Romans 2:4',
      note: `Repentance is not merely feeling bad.

It is seeing God's goodness clearly enough that the mind changes, the heart turns, and the life begins moving in a new direction.

God's goodness leads us there.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `Condemnation and conviction are not the same thing.

Condemnation says:

"You are hopeless."

Conviction says:

"Come into the light so you can be healed."

Condemnation drives people into hiding.

Conviction invites people into freedom.

Condemnation attacks identity.

Conviction exposes what is damaging the person so grace can restore them.

God does not use condemnation to create new birth.

He uses love.

This matters for baptism.

A person should not be baptized because they were pressured, scared, manipulated, or embarrassed into it.

Baptism should be a free, thoughtful, personal yes to the God whose love has won the heart.`,
    },
    studyInsightBlocks: [
      loveNotCondemnationVisual,
      {
        type: 'scriptureChain',
        title: 'Love, Not Condemnation',
        references: [
          { reference: 'John 3:16-17' },
          { reference: 'Romans 2:4' },
          { reference: '1 John 4:16' },
          { reference: '1 John 4:18-19' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: God transforms through love, not fear. His goodness leads us to repentance and prepares the heart for new life.',
      },
    ],
    reflectPrompt: `Have you been more shaped by fear of God or trust in God's love?

Think about your view of repentance, obedience, baptism, confession, and whether you come to God freely or hide from Him in fear.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, pay attention to the voice you hear when you think about God.

Does it sound like condemnation or conviction?

Condemnation says:

"Hide. You are too far gone."

Conviction says:

"Come. God is ready to restore."

When you feel guilt or fear, bring it into prayer and ask:

"Father, what are You lovingly inviting me to surrender?"

Then respond honestly.

Not because you are being forced.

Because His goodness is drawing you.

Prayer:

Father, thank You for loving the world enough to give Your Son. Thank You that Jesus came not to condemn, but to save. Free me from fear-based religion and help me see Your goodness clearly. Let Your love lead me to repentance, trust, surrender, and new life. Amen.`,
    prayer: '',
    completionSummary: `God does not transform by condemnation. His love reveals His goodness, leads us to repentance, and invites us freely into new life.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'bar-l3-q1',
          prompt: 'According to John 3:16, what motivated God to give His Son?',
          options: ['Love', 'Hatred', 'Indifference', 'Pressure'],
          correctIndex: 0,
          explanation: 'John 3:16 says God so loved the world that He gave His only begotten Son.',
        },
        {
          id: 'bar-l3-q2',
          prompt: 'According to John 3:17, why did God send His Son into the world?',
          options: [
            'That the world through Him might be saved',
            'To condemn the world',
            'To ignore the world',
            'To confuse the world',
          ],
          correctIndex: 0,
          explanation:
            'John 3:17 says God did not send His Son to condemn the world, but that the world through Him might be saved.',
        },
        {
          id: 'bar-l3-q3',
          prompt: 'According to Romans 2:4, what leads us to repentance?',
          options: [
            'The goodness of God',
            'Human pride',
            'Condemnation only',
            'Fear without love',
          ],
          correctIndex: 0,
          explanation: 'Romans says the goodness of God leads us to repentance.',
        },
        {
          id: 'bar-l3-q4',
          prompt: 'According to 1 John 4:18, what does perfect love cast out?',
          options: ['Fear', 'Hope', 'Trust', 'Grace'],
          correctIndex: 0,
          explanation: 'First John says perfect love casts out fear.',
        },
        {
          id: 'bar-l3-q5',
          kind: 'reflection',
          prompt: 'What lie about God\'s character do you need to let His love replace?',
          explanation:
            'God\'s love leads to repentance by showing us who He really is. His goodness draws us into trust and new life.',
        },
      ],
    },
  },
  'water-and-spirit': {
    openingThought: `Jesus said new birth involves water and the Spirit.

That is not random language.

Water points us to baptism.

The Spirit points us to inner transformation.

Baptism is the visible sign.

The Holy Spirit is the inward power.

One without the other misses the point.

Water without the Spirit becomes empty ritual.

Spirit without surrender avoids the public step of faith Jesus gave His followers.

God calls us into a new life that is both inwardly real and outwardly confessed.`,
    scriptureRef: 'John 3:5',
    scriptureQuote:
      'Except a man be born of water and of the Spirit, he cannot enter into the kingdom of God.',
    scriptureAfterPrimary: `New birth joins the Spirit's inward work with baptism as the outward sign of surrender.`,
    scriptureSecondaryRef: 'Matthew 3:16-17',
    scriptureSecondaryQuote:
      'And Jesus, when he was baptized, went up straightway out of the water.\n\nAnd lo a voice from heaven, saying, This is my beloved Son, in whom I am well pleased.',
    scriptureAfterSecondary: `Jesus was baptized as our example, and the Father publicly affirmed Him as His beloved Son.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Acts 2:38',
        quote:
          'Repent, and be baptized every one of you in the name of Jesus Christ for the remission of sins.\n\nAnd ye shall receive the gift of the Holy Ghost.',
      },
      {
        type: 'scripture',
        reference: 'Titus 3:5',
        quote:
          'According to his mercy he saved us, by the washing of regeneration, and renewing of the Holy Ghost.',
      },
    ],
    teachingPoints: [
      `1. Jesus connects new birth with water and Spirit

In John 3, Jesus says we must be born of water and of the Spirit.

This shows that new life is not merely private feeling.

God works within the heart by His Spirit, and baptism becomes the outward sign of that inward surrender.

Baptism is not magic.

It is a visible response to God's saving work.`,
      `2. Jesus Himself was baptized

Jesus did not need baptism because He had sinned.

He was baptized as our example.

When He came up out of the water, the Father publicly affirmed Him as His beloved Son.

Baptism marks a person's public identification with God's love, purpose, and will.`,
      `3. Baptism is connected to repentance

Peter said, "Repent, and be baptized."

Repentance means a change of mind and direction.

It is turning from sin and turning toward God.

Baptism is not a casual religious ceremony.

It is the public sign that a person is responding to the gospel and choosing a new life with Jesus.`,
      `4. The Holy Spirit gives power for new life

Acts 2 connects baptism with receiving the gift of the Holy Spirit.

Titus speaks of washing and renewal by the Holy Spirit.

This matters because baptism is not merely about leaving an old life behind.

It is about receiving power for a new life.

God does not call us into transformation and then leave us alone.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Spirit',
      lemma: 'πνεῦμα',
      transliteration: 'pneuma',
      meaning:
        'The Holy Spirit, God\'s personal presence working within the heart to renew, guide, convict, comfort, and empower.',
      strongs: 'G4151',
      reference: 'John 3:5',
      note: `The Holy Spirit makes the new birth real.

Baptism is the outward sign, but the Spirit does the inward work of changing the heart, renewing the mind, and empowering the life.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `Baptism holds together two truths:

God works inside.

We respond outside.

The Spirit convicts, draws, renews, and empowers.

The water testifies that we are saying yes.

This is why baptism is not supposed to be forced, rushed, or treated like a meaningless tradition.

It should be a thoughtful response to Jesus.

A person is saying:

I am turning from the old life.

I am receiving the cleansing grace of Christ.

I am identifying with Jesus.

I am opening my life to the Holy Spirit.

I am stepping publicly into the new life God gives.`,
    },
    studyInsightBlocks: [
      waterAndSpiritVisual,
      {
        type: 'scriptureChain',
        title: 'Water and Spirit',
        references: [
          { reference: 'John 3:5' },
          { reference: 'Matthew 3:13-17' },
          { reference: 'Acts 2:38' },
          { reference: 'Titus 3:5' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: Jesus connects new birth with water and the Spirit. Baptism is the outward sign of surrender, and the Holy Spirit brings inward renewal.',
      },
    ],
    reflectPrompt: `Have you thought of baptism more as an outward ceremony or as a response to the Spirit's inward work?

Think about repentance, surrender, public commitment, and whether you are allowing the Holy Spirit to renew your heart and direction.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, ask God to show you where the Spirit is inviting you into deeper surrender.

Pray:

"Holy Spirit, what are You renewing in me?"

Then listen honestly.

Maybe He is calling you to confess something.

Maybe He is calling you to let go of an old pattern.

Maybe He is calling you to take baptism seriously.

Maybe He is calling you to stop delaying obedience.

Do not reduce baptism to a symbol only.

Ask what the symbol is calling you to receive and live.

Prayer:

Father, thank You for the new birth Jesus described. Thank You for baptism as a visible sign of surrender and for the Holy Spirit as the power of inward renewal. Teach me to respond honestly to Your love. Wash me, renew me, and lead me into the life You are calling me to live in Christ. Amen.`,
    prayer: '',
    completionSummary: `Jesus calls us to be born of water and the Spirit. Baptism is the outward sign of surrender, and the Holy Spirit brings inward renewal.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'bar-l4-q1',
          prompt: 'According to John 3:5, what must a person be born of?',
          options: [
            'Water and the Spirit',
            'Fear and pressure',
            'Reputation and effort',
            'Tradition only',
          ],
          correctIndex: 0,
          explanation:
            'Jesus said a person must be born of water and of the Spirit, connecting new birth with baptism and the Spirit\'s inward work.',
        },
        {
          id: 'bar-l4-q2',
          prompt: 'What happened when Jesus was baptized in Matthew 3?',
          options: [
            'He came up out of the water and the Father affirmed Him',
            'He avoided the water completely',
            'He rejected baptism',
            'He said baptism had no meaning',
          ],
          correctIndex: 0,
          explanation:
            'Matthew says Jesus came up out of the water, and the Father declared Him His beloved Son.',
        },
        {
          id: 'bar-l4-q3',
          prompt: 'According to Acts 2:38, what did Peter tell the people to do?',
          options: [
            'Repent and be baptized',
            'Ignore repentance',
            'Avoid the Holy Spirit',
            'Wait until they were perfect',
          ],
          correctIndex: 0,
          explanation: 'Peter called the people to repent and be baptized in the name of Jesus Christ.',
        },
        {
          id: 'bar-l4-q4',
          prompt: 'According to Titus 3:5, what renews us?',
          options: ['The Holy Ghost', 'Human pride', 'Fear alone', 'Empty ritual'],
          correctIndex: 0,
          explanation: 'Titus speaks of the washing of regeneration and renewing of the Holy Ghost.',
        },
        {
          id: 'bar-l4-q5',
          kind: 'reflection',
          prompt: 'Where is the Holy Spirit inviting you to surrender more fully to Jesus?',
          explanation:
            'Baptism is the outward sign of a heart responding to God\'s inward work through the Holy Spirit.',
        },
      ],
    },
  },
  'buried-with-christ': {
    openingThought: `Baptism is not just getting wet.

It is a picture of death, burial, and resurrection.

When a person goes under the water, baptism points to the burial of the old life.

When a person comes up from the water, baptism points to new life in Christ.

This is why the Bible connects baptism with Jesus' death and resurrection.

Baptism says:

The old life does not own me anymore.

I belong to Jesus.

I am being raised to walk in newness of life.`,
    scriptureRef: 'Romans 6:4',
    scriptureQuote:
      'Therefore we are buried with him by baptism into death.\n\nThat like as Christ was raised up from the dead by the glory of the Father, even so we also should walk in newness of life.',
    scriptureAfterPrimary: `Baptism pictures burial with Christ and resurrection to walk in newness of life.`,
    scriptureSecondaryRef: 'Romans 6:6',
    scriptureSecondaryQuote:
      'Knowing this, that our old man is crucified with him, that the body of sin might be destroyed.',
    scriptureAfterSecondary: `The old life is crucified with Christ. Sin no longer has final authority over those who belong to Him.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Romans 6:11',
        quote:
          'Likewise reckon ye also yourselves to be dead indeed unto sin, but alive unto God through Jesus Christ our Lord.',
      },
      {
        type: 'scripture',
        reference: 'Colossians 2:12',
        quote:
          'Buried with him in baptism, wherein also ye are risen with him through the faith of the operation of God.',
      },
      {
        type: 'scripture',
        reference: 'Galatians 2:20',
        quote: 'I am crucified with Christ: nevertheless I live; yet not I, but Christ liveth in me.',
      },
    ],
    teachingPoints: [
      `1. Baptism points to burial with Christ

Romans says we are buried with Christ by baptism into death.

This is why baptism by immersion matters.

Going under the water clearly pictures burial.

The old life of sin, self-rule, guilt, and separation is being surrendered to Jesus.

Baptism is not a casual religious gesture.

It is a visible sign that the old life is being laid down.`,
      `2. Baptism points to resurrection with Christ

Romans also says that just as Christ was raised from the dead, we should walk in newness of life.

Coming up from the water points to resurrection.

The person is not only saying goodbye to the old life.

They are saying yes to a new life with Jesus.

Baptism looks backward to Christ's resurrection and forward to a transformed life.`,
      `3. The old self no longer has final authority

Romans says the "old man" is crucified with Christ.

That does not mean believers never struggle again.

It means the old life is no longer master.

Sin may tempt.

Old patterns may speak.

But in Christ, they do not have the final claim.

Baptism declares a new allegiance.`,
      `4. New life is lived through faith

Galatians says, "Christ liveth in me."

The baptized life is not powered by human effort alone.

It is lived by faith in Jesus.

We die to self-rule and rise to a life where Christ becomes the center.

Baptism is the beginning of a daily walk with Him.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Immersion',
      lemma: 'βαπτίζω',
      transliteration: 'baptizo',
      meaning: 'Being fully placed under the water.',
      strongs: 'G907',
      reference: 'Romans 6:4',
      note: `Baptism by immersion best reflects the biblical picture of burial and resurrection.

Going under the water symbolizes burial with Christ.

Coming up from the water symbolizes being raised to new life in Him.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `Baptism is one of the clearest pictures of the gospel.

Jesus died.

Jesus was buried.

Jesus rose again.

In baptism, the believer identifies with that story.

Going under the water says:

My old life is surrendered to Christ.

Coming up from the water says:

I am raised to live a new life in Him.

This does not mean baptism saves by itself.

Jesus saves.

But baptism is the public sign that a person has received His saving grace and is choosing to belong to Him.

It is a visible sermon.

A death.
A burial.
A resurrection.
A new beginning.`,
    },
    studyInsightBlocks: [
      {
        type: 'baptismMeaningPattern',
        title: 'Buried and Raised With Christ',
        caption: 'Baptism is a public sign that the old life is buried and new life begins in Christ.',
        highlightedIndices: [0, 1, 2, 3],
      },
      {
        type: 'scriptureChain',
        title: 'Buried and Raised',
        references: [
          { reference: 'Romans 6:1-11' },
          { reference: 'Colossians 2:12' },
          { reference: 'Galatians 2:20' },
          { reference: '2 Corinthians 5:17' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: Baptism identifies us with Jesus\' death, burial, and resurrection. The old life is surrendered, and new life begins in Christ.',
      },
    ],
    reflectPrompt: `What part of the old life do you sense God calling you to surrender to Jesus?

Think about old patterns, guilt, fear, hidden sin, self-rule, shame, unhealthy relationships, or anything that keeps pulling you away from Christ.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, think about baptism as more than a symbol.

Think of it as a public yes to a new life.

Ask yourself:

"What needs to be buried with Christ?"

Then be honest.

Do not protect the old life.

Do not dress it up.

Do not negotiate with what God is calling you to surrender.

Bring it to Jesus and say:

"Lord, I do not want this to rule me anymore."

Then ask Him to raise you into a new way of living.

Prayer:

Jesus, thank You for dying, being buried, and rising again for me. Thank You that baptism shows the old life being surrendered and new life beginning in You. Help me stop protecting what needs to be buried. Give me faith to walk in newness of life, with You at the center of my heart, choices, and future. Amen.`,
    prayer: '',
    completionSummary: `Baptism points to death, burial, and resurrection with Christ. The old life is surrendered, and new life begins in Jesus.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'bar-l5-q1',
          prompt: 'According to Romans 6:4, what are believers buried with Christ by?',
          options: ['Baptism', 'Fear', 'Popularity', 'Human pride'],
          correctIndex: 0,
          explanation: 'Romans says believers are buried with Christ by baptism into death.',
        },
        {
          id: 'bar-l5-q2',
          prompt: 'What does coming up from the water symbolize?',
          options: [
            'Being raised to walk in newness of life',
            'Returning to the old life',
            'Rejecting Jesus',
            'Avoiding transformation',
          ],
          correctIndex: 0,
          explanation:
            'Romans 6:4 connects baptism with being raised to walk in newness of life.',
        },
        {
          id: 'bar-l5-q3',
          prompt: 'According to Colossians 2:12, what are believers in baptism?',
          options: [
            'Buried with Christ and risen with Him',
            'Separated from Christ forever',
            'Saved by water apart from Jesus',
            'Unchanged by grace',
          ],
          correctIndex: 0,
          explanation:
            'Colossians says believers are buried with Christ in baptism and risen with Him through faith.',
        },
        {
          id: 'bar-l5-q4',
          prompt: 'According to Galatians 2:20, who lives in the believer?',
          options: ['Christ', 'Fear', 'The old life as master', 'Condemnation'],
          correctIndex: 0,
          explanation: 'Paul says, "Christ liveth in me," showing that the new life is centered in Jesus.',
        },
        {
          id: 'bar-l5-q5',
          kind: 'reflection',
          prompt: 'What would it mean for you to walk in newness of life this week?',
          explanation:
            'Baptism points to more than leaving the old life behind. It points to a new life lived by faith in Jesus.',
        },
      ],
    },
  },
  'in-the-name-of-god': {
    openingThought: `Baptism is not only about going into water.

It is about belonging.

Jesus told His disciples to baptize people in the name of the Father, the Son, and the Holy Spirit.

That means baptism is not an empty ceremony.

It is an entrance into a new identity, a new relationship, and a new life shaped by God's love.

To be baptized in God's name means we are identifying with who He is.

His character.
His authority.
His love.
His mission.

Baptism says:

I belong to the God who made me, redeemed me, and is making me new.`,
    scriptureRef: 'Matthew 28:19-20',
    scriptureQuote:
      'Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost.\n\nTeaching them to observe all things whatsoever I have commanded you.',
    scriptureAfterPrimary: `Baptism is commanded in the name of the triune God and connected to a life of discipleship.`,
    scriptureSecondaryRef: 'John 17:26',
    scriptureSecondaryQuote:
      'And I have declared unto them thy name, and will declare it: that the love wherewith thou hast loved me may be in them, and I in them.',
    scriptureAfterSecondary: `Jesus declared the Father's name so His disciples could know God's character and love.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: '1 John 4:8',
        quote: 'He that loveth not knoweth not God; for God is love.',
      },
      {
        type: 'scripture',
        reference: '2 Corinthians 13:14',
        quote:
          'The grace of the Lord Jesus Christ, and the love of God, and the communion of the Holy Ghost, be with you all.',
      },
    ],
    teachingPoints: [
      `1. Baptism is in the name of God

Jesus commanded baptism in the name of the Father, Son, and Holy Spirit.

This shows that baptism is deeply relational.

We are not baptized into a vague idea.

We are baptized into the life, love, authority, and mission of the living God.

Baptism declares that our identity now belongs to Him.`,
      `2. God's name reveals His character

In Scripture, a name often points to character.

Jesus said He declared the Father's name.

That means He revealed what God is like.

When we are baptized in God's name, we are identifying with His character.

And Scripture tells us God is love.`,
      `3. Baptism is connected to discipleship

Jesus did not only say to baptize.

He also said to teach.

Baptism is not the finish line of faith.

It is the beginning of a life of learning, following, obeying, growing, and becoming more like Jesus.

The baptized life is a discipleship life.`,
      `4. God gives grace, love, and fellowship

Second Corinthians speaks of the grace of Jesus, the love of God, and the communion of the Holy Spirit.

This gives us a beautiful picture of the life we enter.

We are not walking alone.

The Father loves.
The Son gives grace.
The Spirit brings fellowship and power.

Baptism places our lives under the care and character of God.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Name',
      lemma: 'ὄνομα',
      transliteration: 'onoma',
      meaning: 'In Scripture, a name can represent identity, character, authority, and relationship.',
      strongs: 'G3686',
      reference: 'Matthew 28:19',
      note: `Being baptized in God's name means more than having words spoken over us.

It means identifying with God's character and entering a life under His authority, love, and mission.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `Baptism in the name of the Father, Son, and Holy Spirit shows that salvation is not isolated from relationship.

God does not merely forgive us and send us away.

He brings us into His life.

The Father receives us.

The Son redeems us.

The Holy Spirit renews us.

This means baptism is not only about what we leave behind.

It is also about who we now belong to.

We are not defined by the old life.

We are not defined by shame.

We are not defined by sin's claim.

We are named by God.

And the God whose name we bear is love.`,
    },
    studyInsightBlocks: [
      inTheNameOfGodVisual,
      {
        type: 'scriptureChain',
        title: 'In the Name of God',
        references: [
          { reference: 'Matthew 28:19-20' },
          { reference: 'John 17:26' },
          { reference: '1 John 4:8' },
          { reference: '2 Corinthians 13:14' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: Baptism in God\'s name means belonging to the Father, Son, and Holy Spirit and entering a life shaped by God\'s love.',
      },
    ],
    reflectPrompt: `What does it mean to you that baptism is not only about leaving the old life, but also about belonging to God?

Think about identity, shame, purpose, discipleship, and what it means to live under the name and character of God.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, practice living as someone who belongs to God.

When shame speaks, answer:

"I belong to the God who loves me."

When fear speaks, answer:

"I belong to the God who redeems me."

When temptation speaks, answer:

"I belong to the God who is making me new."

Then take one action that reflects God's name.

Tell the truth.
Show mercy.
Forgive.
Serve.
Pray.
Choose purity.
Keep your word.
Encourage someone.

If you bear God's name, let your life begin to reflect His character.

Prayer:

Father, thank You for calling me into belonging. Jesus, thank You for redeeming me by grace. Holy Spirit, thank You for renewing and guiding me. Help me understand baptism as a life lived in Your name. Shape my identity, choices, and relationships by Your love. Teach me to follow You as a true disciple. Amen.`,
    prayer: '',
    completionSummary: `Baptism in God's name means belonging to the Father, Son, and Holy Spirit. It marks the beginning of a life shaped by God's love and mission.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'bar-l6-q1',
          prompt: 'According to Matthew 28:19, in whose name did Jesus command baptism?',
          options: [
            'The Father, the Son, and the Holy Ghost',
            'Moses only',
            'The disciples only',
            'Human tradition only',
          ],
          correctIndex: 0,
          explanation:
            'Jesus commanded His disciples to baptize in the name of the Father, the Son, and the Holy Ghost.',
        },
        {
          id: 'bar-l6-q2',
          prompt: 'What does "name" often represent in Scripture?',
          options: [
            'Identity, character, authority, and relationship',
            'Random sound only',
            'Human popularity',
            'A meaningless label',
          ],
          correctIndex: 0,
          explanation:
            'In Scripture, a name often points to identity, character, authority, and relationship.',
        },
        {
          id: 'bar-l6-q3',
          prompt: 'According to 1 John 4:8, what is God?',
          options: ['Love', 'Fear', 'Confusion', 'Selfishness'],
          correctIndex: 0,
          explanation:
            'First John says God is love. Baptism in God\'s name means identifying with the God whose character is love.',
        },
        {
          id: 'bar-l6-q4',
          prompt: 'What does Matthew 28:20 connect with baptism?',
          options: [
            'Teaching and discipleship',
            'Spiritual laziness',
            'Ignoring Jesus\' commands',
            'Rejecting growth',
          ],
          correctIndex: 0,
          explanation:
            'Jesus said to baptize and teach people to observe all things He commanded, showing that baptism begins a life of discipleship.',
        },
        {
          id: 'bar-l6-q5',
          kind: 'reflection',
          prompt: 'What is one way your life can better reflect the name and character of God this week?',
          explanation:
            'Baptism declares belonging to God. The baptized life grows in reflecting His love, grace, truth, and mission.',
        },
      ],
    },
  },
  'a-public-yes-to-jesus': {
    openingThought: `Baptism is personal, but it is not meant to stay hidden.

It is a public yes to Jesus.

A person may believe quietly at first.

They may wrestle privately.
They may pray privately.
They may repent privately.
They may sense God drawing them privately.

But baptism brings that decision into the open.

It says:

I belong to Jesus.

I am turning from the old life.

I am choosing to follow Him.

I am not ashamed to identify with His death, burial, and resurrection.

Baptism is not the finish line.

It is the beginning of a visible life with Christ.`,
    scriptureRef: 'Acts 8:36-38',
    scriptureQuote:
      'And as they went on their way, they came unto a certain water: and the eunuch said, See, here is water; what doth hinder me to be baptized?\n\nAnd he answered and said, I believe that Jesus Christ is the Son of God.\n\nAnd he commanded the chariot to stand still: and they went down both into the water... and he baptized him.',
    scriptureAfterPrimary: `Faith came first. Baptism followed as a visible response to the gospel.`,
    scriptureSecondaryRef: 'Acts 22:16',
    scriptureSecondaryQuote:
      'And now why tarriest thou? arise, and be baptized, and wash away thy sins, calling on the name of the Lord.',
    scriptureAfterSecondary: `Baptism is connected with calling on the name of the Lord and receiving His cleansing grace.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Matthew 28:19-20',
        quote:
          'Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost.\n\nTeaching them to observe all things whatsoever I have commanded you.',
      },
      {
        type: 'scripture',
        reference: 'Romans 6:4',
        quote: 'Even so we also should walk in newness of life.',
      },
    ],
    teachingPoints: [
      `1. Baptism follows personal faith

In Acts 8, the Ethiopian heard the message of Jesus and responded with faith.

He asked, "What doth hinder me to be baptized?"

His baptism was not empty tradition.

It was a personal response to the gospel.

Baptism matters most when it comes from a heart that believes and is ready to follow Jesus.`,
      `2. Baptism is a public step

The Ethiopian did not keep his response hidden.

He stopped the chariot and went down into the water.

Baptism takes an inward decision and makes it visible.

It is not about showing off.

It is about confessing openly that Jesus is Lord and that the old life is being left behind.`,
      `3. Baptism calls on the name of the Lord

Acts 22 connects baptism with calling on the name of the Lord.

This means baptism is not merely joining a religious group.

It is a response to Jesus Himself.

The person being baptized is trusting Christ, receiving His cleansing grace, and publicly identifying with His name.`,
      `4. Baptism begins a life of discipleship

Jesus connected baptism with teaching people to observe His commands.

That means baptism is not the end of growth.

It is the beginning of a lifelong walk.

After baptism, the believer continues learning, surrendering, growing, obeying, serving, and walking in newness of life.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Disciple',
      lemma: 'μαθητής',
      transliteration: 'mathetes',
      meaning: 'A learner, follower, or apprentice.',
      strongs: 'G3101',
      reference: 'Matthew 28:19',
      note: `A disciple is not someone who merely knows facts about Jesus.

A disciple follows Jesus, learns from Him, and grows into a life shaped by His teaching, character, and mission.

Baptism marks the public beginning of that discipleship journey.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `Buried and Raised has shown the meaning of baptism from the inside out.

God loves us with everlasting love.

Jesus calls us to be born again.

God leads us by love, not condemnation.

New birth involves water and the Spirit.

Baptism identifies us with Christ's death, burial, and resurrection.

Baptism in God's name means belonging to the Father, Son, and Holy Spirit.

Now we see baptism as a public yes to Jesus.

This keeps baptism balanced.

It is not a magic ritual.

It is not a way to earn salvation.

It is not religious pressure.

It is not the end of the Christian life.

Baptism is the visible confession of a heart responding to Jesus.

It says:

I believe.
I repent.
I belong.
I surrender.
I am beginning a new life in Christ.`,
    },
    studyInsightBlocks: [
      {
        type: 'baptismMeaningPattern',
        title: 'A Public Yes to Jesus',
        caption: 'Baptism is a public sign that the old life is buried and new life begins in Christ.',
        highlightedIndices: [0, 1, 2, 3, 4],
        stages: [
          { label: 'Old life', subtitle: 'surrendered to Jesus' },
          { label: 'Going under the water', subtitle: 'buried with Christ' },
          { label: 'Coming up from the water', subtitle: 'raised to new life' },
          { label: 'New life', subtitle: 'lived by faith through the Spirit' },
          { label: 'Public meaning', subtitle: 'I belong to Jesus and choose to follow Him' },
        ],
      },
      {
        type: 'scriptureChain',
        title: 'A Public Yes',
        references: [
          { reference: 'Acts 8:35-38' },
          { reference: 'Acts 22:16' },
          { reference: 'Matthew 28:19-20' },
          { reference: 'Romans 6:4' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: Baptism is a personal and public response to Jesus, marking the beginning of a new life of discipleship.',
      },
    ],
    reflectPrompt: `What does it mean for you to publicly say yes to Jesus?

Think about faith, repentance, surrender, identity, baptism, discipleship, and whether there is anything holding you back from fully following Him.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, honestly consider your response to Jesus.

Ask yourself:

"Have I personally said yes to Him?"

"Have I surrendered the old life to Him?"

"Have I been baptized as a public response to His grace?"

"Am I walking as His disciple now?"

Do not answer with pressure.

Answer with honesty.

If you have not been baptized, pray about taking that step.

If you have been baptized, return to what it means.

The old life is buried.

New life has begun.

Now walk with Jesus daily.

Prayer:

Jesus, thank You for calling me into new life. Thank You for loving me, drawing me, forgiving me, and inviting me to follow You. Help me respond with honest faith, not fear or pressure. If baptism is the step I need to take, give me clarity and courage. If I have already been baptized, help me live faithfully from that public yes. Teach me to walk in newness of life with You. Amen.`,
    prayer: '',
    completionSummary: `You have completed Buried and Raised. Baptism is a public yes to Jesus, showing that the old life is buried and new life has begun through faith in Christ.`,
    seriesCompleteScreen: {
      title: 'Study Complete',
      message:
        'You have completed Buried and Raised. Baptism is a public yes to Jesus, showing that the old life is buried and new life has begun through faith in Christ.',
      primaryCta: { label: 'Back to Foundations Path', href: '/paths/foundations' },
      secondaryCta: {
        label: 'Review this study',
        href: '/study-library/buried-and-raised',
      },
    },
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'bar-l7-q1',
          prompt: 'In Acts 8, what did the Ethiopian ask when he saw water?',
          options: [
            '"What doth hinder me to be baptized?"',
            '"Why should I avoid Jesus?"',
            '"Can I follow God without faith?"',
            '"Does baptism mean nothing?"',
          ],
          correctIndex: 0,
          explanation:
            'After hearing the message of Jesus, the Ethiopian asked what prevented him from being baptized.',
        },
        {
          id: 'bar-l7-q2',
          prompt: 'What did the Ethiopian confess before baptism?',
          options: [
            '"I believe that Jesus Christ is the Son of God"',
            '"I do not believe"',
            '"I want to stay the same"',
            '"The old life is better"',
          ],
          correctIndex: 0,
          explanation: 'His confession showed personal faith in Jesus before baptism.',
        },
        {
          id: 'bar-l7-q3',
          prompt: 'According to Acts 22:16, baptism is connected with calling on whose name?',
          options: [
            'The name of the Lord',
            'The name of Caesar',
            'The name of tradition only',
            'The name of self',
          ],
          correctIndex: 0,
          explanation: 'Acts 22:16 connects baptism with calling on the name of the Lord.',
        },
        {
          id: 'bar-l7-q4',
          prompt: 'According to Matthew 28:19-20, what is connected with baptism?',
          options: [
            'Teaching and discipleship',
            'Hiding faith forever',
            'Ignoring Jesus\' commands',
            'Ending spiritual growth',
          ],
          correctIndex: 0,
          explanation:
            'Jesus commanded His followers to baptize and teach, showing that baptism begins a life of discipleship.',
        },
        {
          id: 'bar-l7-q5',
          kind: 'reflection',
          prompt: 'What is one step you need to take to live more fully from your yes to Jesus?',
          explanation:
            'Baptism is a public beginning, but discipleship continues daily as we walk in newness of life with Christ.',
        },
      ],
    },
  },
}
