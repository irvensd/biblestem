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

const adviceVersusNewsVisual: StudyVisualLessonBlock = {
  type: 'studyVisual',
  title: 'Advice or news?',
  accent: 'stone',
  payload: {
    variant: 'comparison',
    leftTitle: 'Good advice',
    rightTitle: 'Good news',
    leftItems: ['Try harder to become accepted'],
    rightItems: ['Jesus has acted to save you by grace'],
  },
  footnote: 'The gospel begins with what Christ has done.',
}

const gospelAccomplishmentVisual: StudyVisualLessonBlock = {
  type: 'studyVisual',
  title: 'What Jesus has already done',
  accent: 'sage',
  description: 'Salvation rests on what Jesus has already accomplished.',
  payload: {
    variant: 'sequence',
    steps: [
      { label: 'Christ came', subtitle: 'God entered humanity in mercy.' },
      { label: 'Christ lived faithfully', subtitle: 'Jesus fulfilled the life we could not live.' },
      { label: 'Christ died for our sins', subtitle: 'He stood in our place at the cross.' },
      { label: 'Christ rose again', subtitle: 'Death could not hold the Lord of life.' },
      { label: 'Christ represents a new humanity', subtitle: 'In Him, God begins the human story again.' },
    ],
  },
  footnote: 'Salvation rests on what Jesus has already done.',
}

const alreadyFinishedInsightBlocks: LessonContentBlock[] = [
  gospelAccomplishmentVisual,
  {
    type: 'scriptureChain',
    title: 'Already Accomplished in Christ',
    references: [
      { reference: 'Ephesians 1:7' },
      { reference: 'Ephesians 2:4-6' },
      { reference: '2 Corinthians 5:14-15' },
      { reference: '1 Corinthians 15:21-22' },
    ],
  },
  {
    type: 'paragraph',
    text: 'Takeaway: Jesus accomplished salvation before we responded. Faith receives and rests in what is already true in Christ.',
  },
]

const adamChristIdentityVisual: StudyVisualLessonBlock = {
  type: 'studyVisual',
  title: 'From Adam to Christ',
  accent: 'stone',
  payload: {
    variant: 'comparison',
    leftTitle: 'In Adam',
    rightTitle: 'In Christ',
    leftItems: ['fall', 'sin', 'death', 'old identity'],
    rightItems: ['grace', 'righteousness', 'life', 'new identity'],
  },
  footnote: 'Jesus is the new representative of humanity.',
}

const newRepresentativeInsightBlocks: LessonContentBlock[] = [
  adamChristIdentityVisual,
  {
    type: 'scriptureChain',
    title: 'From Adam to Christ',
    references: [
      { reference: '1 Corinthians 15:21-22' },
      { reference: '1 Corinthians 15:45-49' },
      { reference: 'Romans 5:17-19' },
      { reference: '2 Corinthians 5:17' },
    ],
  },
  {
    type: 'paragraph',
    text: 'Takeaway: Adam represents humanity\'s fall, but Jesus represents humanity\'s restoration. In Christ, a new human story begins.',
  },
]

const beforeInChristVisual: StudyVisualLessonBlock = {
  type: 'studyVisual',
  title: 'A new life begins',
  accent: 'sage',
  payload: {
    variant: 'comparison',
    leftTitle: 'Before',
    rightTitle: 'In Christ',
    leftItems: [
      'self-centered living',
      'guilt',
      'old identity',
      'broken relationship',
    ],
    rightItems: [
      'new creation',
      'reconciliation',
      'forgiveness',
      'love-driven life',
    ],
  },
  footnote: 'The gospel does not just improve the old life. It begins a new one.',
}

const allThingsNewInsightBlocks: LessonContentBlock[] = [
  beforeInChristVisual,
  {
    type: 'scriptureChain',
    title: 'All Things New',
    references: [
      { reference: '2 Corinthians 5:14-19' },
      { reference: 'Galatians 2:20' },
      { reference: 'Colossians 1:13-14' },
      { reference: 'Romans 8:1' },
    ],
  },
  {
    type: 'paragraph',
    text: 'Takeaway: In Christ, God reconciles us to Himself, gives us a new identity, and begins making the whole life new.',
  },
]

const weakFaithVersusBiblicalFaithVisual: StudyVisualLessonBlock = {
  type: 'studyVisual',
  title: 'What faith is',
  accent: 'stone',
  payload: {
    variant: 'comparison',
    leftTitle: 'Weak view of faith',
    rightTitle: 'Biblical faith',
    leftItems: ['I must believe hard enough to make God accept me.'],
    rightItems: ['I trust what Jesus has already done by grace.'],
  },
  footnote: 'Faith receives. Grace provides.',
}

const faithReceivesGraceInsightBlocks: LessonContentBlock[] = [
  weakFaithVersusBiblicalFaithVisual,
  {
    type: 'scriptureChain',
    title: 'Faith Receives Grace',
    references: [
      { reference: 'Galatians 2:20' },
      { reference: '2 Timothy 1:9-10' },
      { reference: 'Titus 3:5-7' },
      { reference: 'Ephesians 2:8-9' },
    ],
  },
  {
    type: 'paragraph',
    text: 'Takeaway: Faith does not earn salvation. Faith receives and rests in the mercy, grace, and finished work of Jesus.',
  },
]

const graceShapesLifeVisual: StudyVisualLessonBlock = {
  type: 'studyVisual',
  title: 'How grace shapes the life',
  accent: 'sage',
  payload: {
    variant: 'sequence',
    steps: [
      { label: 'Grace received', subtitle: 'Salvation begins with God\'s gift in Christ.' },
      { label: 'Heart renewed', subtitle: 'Grace reaches the center of life.' },
      { label: 'Desires changed', subtitle: 'God begins reshaping what we want.' },
      { label: 'Life trained', subtitle: 'Grace teaches us to deny ungodliness and live godly.' },
      { label: 'Good works flow', subtitle: 'Obedience grows as fruit, not as payment.' },
    ],
  },
  footnote: 'Grace saves first, then grace shapes the life.',
}

const graceTrainsInsightBlocks: LessonContentBlock[] = [
  graceShapesLifeVisual,
  {
    type: 'scriptureChain',
    title: 'Grace That Trains',
    references: [
      { reference: 'Titus 2:11-14' },
      { reference: 'Ephesians 2:10' },
      { reference: 'Philippians 2:12-13' },
      { reference: 'John 15:5' },
    ],
  },
  {
    type: 'paragraph',
    text: 'Takeaway: Grace does not earn salvation through works. Grace saves us in Christ and then trains us to live a new life.',
  },
]

const madeNewInChristRecapVisual: StudyVisualLessonBlock = {
  type: 'studyVisual',
  title: 'Made New in Christ',
  accent: 'stone',
  payload: {
    variant: 'sequence',
    steps: [
      { label: 'Good news announced', subtitle: 'The gospel is news, not advice.' },
      { label: 'Salvation finished', subtitle: 'Jesus has already accomplished the saving work.' },
      { label: 'New representative given', subtitle: 'Christ is the new head of humanity.' },
      { label: 'New creation begun', subtitle: 'In Him, God makes all things new.' },
      { label: 'Faith receives', subtitle: 'We rest in what grace has provided.' },
      { label: 'Grace trains', subtitle: 'Grace saves and teaches the life.' },
      { label: 'New life lived', subtitle: 'We walk as new creations by the Spirit.' },
    ],
  },
  footnote: 'The Christian life is lived from grace, not for acceptance.',
}

const livingNewInsightBlocks: LessonContentBlock[] = [
  madeNewInChristRecapVisual,
  {
    type: 'scriptureChain',
    title: 'Living New',
    references: [
      { reference: '2 Corinthians 5:17' },
      { reference: 'Romans 8:1-4' },
      { reference: '1 John 4:19' },
      { reference: 'Galatians 2:20' },
    ],
  },
  {
    type: 'paragraph',
    text: 'Takeaway: In Christ, believers receive a new identity, live from God\'s love, and walk by the Spirit as new creations.',
  },
]

const goodNewsInsightBlocks: LessonContentBlock[] = [
  adviceVersusNewsVisual,
  {
    type: 'scriptureChain',
    title: 'The Gospel Is Good News',
    references: [
      { reference: '1 Corinthians 15:1-4' },
      { reference: 'Romans 3:24' },
      { reference: 'Ephesians 2:8-10' },
      { reference: 'Titus 3:5' },
    ],
  },
  {
    type: 'paragraph',
    text: 'Takeaway: The gospel announces what Jesus has already done. We receive salvation by grace through faith, and good works flow from that new life.',
  },
]

/** Guided reader lessons for "Made New in Christ" (Foundations). */
export const madeNewInChristSeriesLessonLibrary: Record<string, LessonReaderContent> = {
  'good-news-not-good-advice': {
    openingThought: `Most people think Christianity starts with advice.

Try harder.
Do better.
Fix yourself.
Stop failing.
Become worthy.

But the gospel does not begin with what you must do.

It begins with what Jesus has already done.

That is what makes the gospel good news.

Advice tells you what still needs to happen.

News tells you what has already happened.

The gospel announces that Christ died for our sins, rose again, and opened the way for us to receive salvation by faith.

Right living matters.

But right living is not the root of salvation.

It is the fruit of receiving Christ.`,
    scriptureRef: '1 Corinthians 15:3',
    scriptureQuote: 'For I delivered unto you first of all that which I also received, how that Christ died for our sins according to the scriptures.',
    scriptureAfterPrimary: `Paul begins with what Jesus has done, not what we must accomplish.

Christ died for our sins according to the scriptures.`,
    scriptureSecondaryRef: '1 Corinthians 15:4',
    scriptureSecondaryQuote:
      'And that he was buried, and that he rose again the third day according to the scriptures.',
    scriptureAfterSecondary: `The gospel is news.

Christ died.
Christ was buried.
Christ rose again.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Romans 3:24',
        quote:
          'Being justified freely by his grace through the redemption that is in Christ Jesus.',
      },
      {
        type: 'scripture',
        reference: 'Ephesians 2:8-9',
        quote:
          'For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: Not of works, lest any man should boast.',
      },
      {
        type: 'scripture',
        reference: 'Ephesians 2:10',
        quote: 'For we are his workmanship, created in Christ Jesus unto good works.',
      },
    ],
    teachingPoints: [
      `1. The gospel is good news

Paul summarizes the gospel by pointing to what Jesus has done.

Christ died.
Christ was buried.
Christ rose again.

That is news.

The gospel is not first a command to repair yourself.

It is the announcement that God has acted in Christ to save sinners.`,
      `2. Salvation is received, not earned

Ephesians says we are saved by grace through faith.

Not by works.

Not by spiritual performance.

Not by proving we are good enough.

Salvation is a gift.

Faith receives what grace provides.`,
      `3. Grace comes before good works

Ephesians 2:10 says believers are created in Christ Jesus unto good works.

That order matters.

We are not saved by good works.

We are saved for good works.

Grace does not leave us unchanged, but change begins after receiving Christ, not before.`,
      `4. Jesus moves the focus away from self

Every self-salvation system puts the weight on us.

The gospel puts the focus on Jesus.

His life.
His death.
His resurrection.
His grace.
His finished work.

The Christian life begins by looking away from self and trusting Christ.`,
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
      reference: '1 Corinthians 15:1',
      note: `The gospel is not good advice about how to save yourself.

It is good news about what God has already done in Jesus.

Advice points to what you must accomplish.

The gospel points to what Christ has accomplished for you.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The difference between advice and news is huge.

Advice says:
"Here is what you need to do."

News says:
"Here is what has already happened."

The gospel is news before it becomes instruction.

Jesus has already entered humanity.
Jesus has already lived the faithful life.
Jesus has already died for our sins.
Jesus has already risen from the dead.
Jesus has already opened the way to God.

Faith does not create those facts.

Faith receives them.

That is why Christian transformation begins with trust, not striving.

We do not obey to make God love us.

We begin to obey because His love has already reached us in Christ.`,
    },
    studyInsightBlocks: goodNewsInsightBlocks,
    reflectPrompt: `Where are you most tempted to treat Christianity like self-improvement instead of good news?

Think about guilt, performance, trying to earn God's approval, or feeling like you need to become better before coming to Jesus.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, pay attention to the voice you are living under.

Does it sound like this?

"Do more so God will accept you."

Or does it sound like this?

"Receive what Jesus has done, then walk with Him."

When guilt pushes you into striving, return to the gospel:

Christ died for my sins.
Christ rose again.
Salvation is a gift.
Good works flow from grace.

Do not start with yourself.

Start with Jesus.

Prayer:

Father, thank You that the gospel is good news, not a command to save myself. Thank You for what Jesus has already done through His life, death, and resurrection. Help me receive Your grace by faith. Free me from striving for acceptance, and teach me to live from the salvation I have in Christ. Amen.`,
    prayer: '',
    completionSummary: `The gospel is good news, not good advice. Salvation begins with what Jesus has already done, and the new life flows from receiving His grace by faith.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'mnic-l1-q1',
          prompt: 'According to 1 Corinthians 15:3-4, what are central facts of the gospel?',
          options: [
            'Christ died for our sins, was buried, and rose again',
            'Humans must save themselves',
            'Good advice is enough',
            'Sin does not matter',
          ],
          correctIndex: 0,
          explanation:
            'Paul summarizes the gospel by pointing to Christ\'s death for our sins, His burial, and His resurrection.',
        },
        {
          id: 'mnic-l1-q2',
          prompt: 'According to Ephesians 2:8-9, how are we saved?',
          options: [
            'By grace through faith',
            'By works alone',
            'By being naturally perfect',
            'By comparing ourselves to others',
          ],
          correctIndex: 0,
          explanation:
            'Ephesians says we are saved by grace through faith, and that salvation is the gift of God.',
        },
        {
          id: 'mnic-l1-q3',
          prompt: 'What role do good works play according to Ephesians 2:10?',
          options: [
            'They flow from being created in Christ Jesus',
            'They earn God\'s love',
            'They replace faith',
            'They make grace unnecessary',
          ],
          correctIndex: 0,
          explanation:
            'Ephesians 2:10 says believers are created in Christ Jesus unto good works. Good works are the fruit of salvation, not the root.',
        },
        {
          id: 'mnic-l1-q4',
          prompt: 'What is the main difference between advice and news in this lesson?',
          options: [
            'Advice tells what must be done, news announces what has been done',
            'Advice is always biblical and news is not',
            'News tells people to save themselves',
            'Advice is the same thing as grace',
          ],
          correctIndex: 0,
          explanation:
            'The lesson explains that advice gives instructions, while news announces an accomplished reality. The gospel announces what Christ has done.',
        },
        {
          id: 'mnic-l1-q5',
          kind: 'reflection',
          prompt:
            'What would change if you started your faith with what Jesus has done instead of what you need to prove?',
          explanation:
            'The gospel moves the focus from self-salvation to Christ\'s finished work, freeing us to live from grace instead of striving.',
        },
      ],
    },
  },
  'what-jesus-already-finished': {
    openingThought: `The gospel does not begin with your progress.

It begins with Christ's accomplishment.

Before you prayed perfectly, Jesus had already come.

Before you understood grace, Jesus had already died.

Before you cleaned yourself up, Jesus had already risen.

Before you could earn anything, salvation had already been accomplished in Him.

That is why the gospel is so different from self-improvement.

Self-improvement says, "Become something."

The gospel says, "Receive what Christ has already done, then become who you are in Him."`,
    scriptureRef: 'Ephesians 2:4',
    scriptureQuote:
      'But God, who is rich in mercy, for his great love wherewith he loved us, even when we were dead in sins, hath quickened us together with Christ.',
    scriptureAfterPrimary: `Salvation begins with God's initiative.

We did not climb up to Him.

He came down to us.

The gospel starts with mercy, not human achievement.`,
    scriptureSecondaryRef: 'Ephesians 2:5-6',
    scriptureSecondaryQuote:
      'By grace ye are saved. And hath raised us up together, and made us sit together in heavenly places in Christ Jesus.',
    scriptureAfterSecondary: `Grace saves.

Christ raises.

Believers are seated with Him in heavenly places.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Ephesians 1:7',
        quote:
          'In whom we have redemption through his blood, the forgiveness of sins, according to the riches of his grace.',
      },
      {
        type: 'scripture',
        reference: '2 Corinthians 5:14-15',
        quote:
          'For the love of Christ constraineth us; because we thus judge, that if one died for all, then were all dead: And that he died for all, that they which live should not henceforth live unto themselves, but unto him which died for them, and rose again.',
      },
      {
        type: 'scripture',
        reference: '1 Corinthians 15:21-22',
        quote:
          'For since by man came death, by man came also the resurrection of the dead. For as in Adam all die, even so in Christ shall all be made alive.',
      },
    ],
    teachingPoints: [
      `1. God acted while we were still dead in sin

Ephesians says God made us alive with Christ while we were dead in sins.

That means salvation begins with God's initiative.

We did not climb up to Him.

He came down to us.

The gospel starts with mercy, not human achievement.`,
      `2. Redemption is already in Christ

Ephesians says we have redemption through His blood.

Redemption is not something we manufacture.

It is something already accomplished in Jesus.

His blood secured forgiveness.

His grace opened the way.

Faith receives what Christ has done.`,
      `3. Jesus represented humanity

Paul says that if One died for all, then all died.

This means Jesus did not die as a private individual only.

He died as our representative.

He entered our humanity, stood in our place, and acted on behalf of the human race.

What He accomplished matters for us because He did it for us.`,
      `4. Christ gives a new humanity

In Adam, humanity fell into sin and death.

In Christ, humanity receives life and restoration.

Jesus is not only a helper for broken people.

He is the beginning of a new humanity.

In Him, God starts the human story again.`,
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
      reference: 'Ephesians 1:7',
      note: `Redemption means Jesus has already paid the cost to rescue us.

We are not trying to create redemption through good behavior.

We receive redemption through faith in Christ, whose blood secured forgiveness and freedom.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The gospel is built on what Jesus has already accomplished.

He became human.

He lived faithfully.

He died for our sins.

He rose from the dead.

He ascended in victory.

He represents a new humanity before the Father.

That means salvation is not hanging in uncertainty waiting for you to complete it.

Jesus has already accomplished the saving work.

Your response matters deeply, but your response does not create the gospel.

Faith says yes to the reality already established in Christ.

This is why grace produces security.

Not laziness.

Security.

Because the foundation is not your spiritual mood, your best week, or your ability to perform.

The foundation is Jesus.`,
    },
    studyInsightBlocks: alreadyFinishedInsightBlocks,
    reflectPrompt: `Where do you struggle to believe that Jesus has already accomplished what you could never earn?

Think about forgiveness, acceptance, identity, salvation, or the pressure to prove yourself to God.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, practice starting with Christ's finished work.

When you feel spiritually behind, say:

"Jesus has already accomplished salvation."

When you feel unworthy, say:

"Redemption is in Christ, not in my performance."

When you feel pressure to prove yourself, say:

"I respond by faith to what Jesus has already done."

Then take one faithful step from that place.

Read Scripture.
Confess honestly.
Pray simply.
Serve someone.
Obey the next truth God shows you.

Not to earn salvation.

Because grace has already reached you.

Prayer:

Father, thank You for what Jesus has already finished. Thank You that salvation rests on His life, death, resurrection, and victory, not on my ability to prove myself. Help me receive redemption by faith. Teach me to live from Christ's accomplishment with humility, confidence, and gratitude. Amen.`,
    prayer: '',
    completionSummary: `Jesus has already accomplished salvation through His life, death, resurrection, and victory. Faith receives what grace has already provided in Christ.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'mnic-l2-q1',
          prompt: 'According to Ephesians 2:4-6, what did God do while we were dead in sins?',
          options: [
            'Made us alive together with Christ',
            'Waited for us to become perfect',
            'Ignored humanity forever',
            'Told us to save ourselves',
          ],
          correctIndex: 0,
          explanation:
            'Ephesians says God made us alive together with Christ while we were dead in sins, showing salvation begins with mercy.',
        },
        {
          id: 'mnic-l2-q2',
          prompt: 'According to Ephesians 1:7, where do we have redemption?',
          options: [
            'In Christ',
            'In self-improvement',
            'In human pride',
            'In religious comparison',
          ],
          correctIndex: 0,
          explanation:
            'Ephesians 1:7 says we have redemption through Christ\'s blood, according to the riches of His grace.',
        },
        {
          id: 'mnic-l2-q3',
          prompt: 'What does 2 Corinthians 5:14-15 teach about Jesus\' death?',
          options: [
            'He died for all',
            'He died only as an example with no saving effect',
            'His death did not matter',
            'Humanity must replace His work',
          ],
          correctIndex: 0,
          explanation:
            'Paul says One died for all, showing Christ\'s representative death on behalf of humanity.',
        },
        {
          id: 'mnic-l2-q4',
          prompt: 'What contrast does 1 Corinthians 15 make?',
          options: [
            'In Adam all die, in Christ all shall be made alive',
            'Adam saves and Christ destroys',
            'Death is stronger than resurrection',
            'Sin has no consequence',
          ],
          correctIndex: 0,
          explanation:
            'Paul contrasts Adam and Christ. In Adam came death, but in Christ comes resurrection and life.',
        },
        {
          id: 'mnic-l2-q5',
          kind: 'reflection',
          prompt:
            'How would your faith change if you trusted Christ\'s accomplishment more than your spiritual performance?',
          explanation:
            'The gospel rests on what Jesus has already done. Faith receives His finished work and lives from grace.',
        },
      ],
    },
  },
  'the-new-representative': {
    openingThought: `Every human story begins somewhere.

The Bible says our fallen story is connected to Adam.

Through Adam, humanity entered a broken condition marked by sin, guilt, and death.

But the gospel does not leave us there.

Jesus came as the new representative of humanity.

He did what Adam failed to do.
He lived the faithful life humanity was meant to live.
He died the death sin demanded.
He rose into the life God always intended for us.

In Adam, humanity fell.

In Christ, humanity is restored.`,
    scriptureRef: '1 Corinthians 15:22',
    scriptureQuote: 'For as in Adam all die, even so in Christ shall all be made alive.',
    scriptureAfterPrimary: `Paul places every person in one of two stories.

In Adam, death.

In Christ, life.`,
    scriptureSecondaryRef: '1 Corinthians 15:45',
    scriptureSecondaryQuote:
      'The first man Adam was made a living soul; the last Adam was made a quickening spirit.',
    scriptureAfterSecondary: `Adam stands at the head of the fallen story.

Christ stands at the head of the restored story.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Romans 5:19',
        quote:
          'For as by one man\'s disobedience many were made sinners, so by the obedience of one shall many be made righteous.',
      },
      {
        type: 'scripture',
        reference: '1 Corinthians 15:49',
        quote:
          'And as we have borne the image of the earthy, we shall also bear the image of the heavenly.',
      },
    ],
    teachingPoints: [
      `1. Adam represents fallen humanity

Adam stands at the head of the human story in its fallen condition.

Through him, sin and death entered human experience.

This does not mean we blame Adam while ignoring our own choices.

It means the Bible sees humanity as connected.

We are born into a broken world and a damaged human condition.`,
      `2. Jesus is the last Adam

Paul calls Jesus the last Adam.

That title matters.

Jesus came to begin a new humanity.

He entered our human story, but He did not repeat Adam's failure.

Where Adam distrusted God, Jesus trusted.
Where Adam disobeyed, Jesus obeyed.
Where Adam brought death, Jesus brings life.`,
      `3. Christ's obedience restores what Adam's disobedience damaged

Romans 5 contrasts Adam's disobedience with Christ's obedience.

Adam's failure affected humanity.

Christ's faithfulness is greater.

Jesus does not merely patch the old life.

He becomes the source of a restored life.

In Him, righteousness, grace, and life are offered.`,
      `4. We are invited to identify with Christ

The gospel calls us to move our identity from Adam to Christ.

We no longer have to be defined by the old fallen story.

In Christ, we receive a new representative, a new identity, and a new future.

We have borne the image of the earthly.

God now calls us to bear the image of the heavenly.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Representative',
      lemma: 'ἔσχατος Ἀδάμ',
      transliteration: 'eschatos Adam',
      meaning: 'One who stands in the place of others and acts on their behalf.',
      strongs: 'G2078',
      reference: '1 Corinthians 15:45',
      note: `Jesus represents humanity before God.

He did not come only to give advice from the outside.

He entered our human nature, lived faithfully, died sacrificially, and rose victoriously as the new representative head of humanity.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The gospel is bigger than personal improvement.

It is a transfer of identity.

In Adam:
sin, guilt, death, and brokenness mark the old human story.

In Christ:
grace, righteousness, life, and restoration define the new human story.

This is why salvation is not merely about trying harder.

You need more than a better mood, better habits, or better intentions.

You need a new representative.

Jesus becomes that representative.

He stands where Adam fell and succeeds where humanity failed.

Faith means identifying with Him, trusting His victory, and receiving the new life He gives.`,
    },
    studyInsightBlocks: newRepresentativeInsightBlocks,
    reflectPrompt: `Where do you still define yourself by the old story instead of your new identity in Christ?

Think about guilt, shame, failure, family patterns, old habits, fear, or the belief that you can never really change.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, practice identifying with Christ.

When the old story speaks, answer it with the gospel.

Old story:
"I am defined by my failure."

Gospel truth:
"I am in Christ, and He is making me new."

Old story:
"I can never change."

Gospel truth:
"Jesus is the source of a new life."

Old story:
"Sin and death have the final word."

Gospel truth:
"In Christ, I am made alive."

Do not build your identity on Adam's failure or your own record.

Build it on Christ.

Prayer:

Father, thank You for sending Jesus as the new representative of humanity. Thank You that I do not have to be defined by the old story of sin, guilt, and death. Help me identify with Christ by faith. Restore Your image in me and teach me to live from the new life You have given in Him. Amen.`,
    prayer: '',
    completionSummary: `Adam represents the old fallen story, but Jesus begins a new one. In Christ, humanity receives a new representative, a new identity, and a restored future.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'mnic-l3-q1',
          prompt: 'According to 1 Corinthians 15:22, what happens in Adam and in Christ?',
          options: [
            'In Adam all die, in Christ all shall be made alive',
            'In Adam all live, in Christ all are lost',
            'Adam and Christ do the same work',
            'Humanity does not need Christ',
          ],
          correctIndex: 0,
          explanation: 'Paul says that in Adam all die, but in Christ all shall be made alive.',
        },
        {
          id: 'mnic-l3-q2',
          prompt: 'What title does 1 Corinthians 15:45 give to Jesus?',
          options: [
            'The last Adam',
            'The first sinner',
            'The hidden prophet',
            'The second Pharaoh',
          ],
          correctIndex: 0,
          explanation:
            'Paul calls Jesus the last Adam, showing that Christ becomes the new representative head of humanity.',
        },
        {
          id: 'mnic-l3-q3',
          prompt: 'According to Romans 5:19, what comes through Christ\'s obedience?',
          options: [
            'Many shall be made righteous',
            'Sin becomes stronger',
            'Death wins forever',
            'Grace becomes unnecessary',
          ],
          correctIndex: 0,
          explanation:
            'Romans 5:19 contrasts Adam\'s disobedience with Christ\'s obedience, through which many are made righteous.',
        },
        {
          id: 'mnic-l3-q4',
          prompt: 'What does this lesson teach about salvation?',
          options: [
            'Salvation includes receiving a new identity in Christ',
            'Salvation is only self-improvement',
            'Salvation means Adam saves us',
            'Salvation removes the need for Jesus',
          ],
          correctIndex: 0,
          explanation:
            'The gospel gives us more than self-improvement. It gives us a new representative and a new identity in Christ.',
        },
        {
          id: 'mnic-l3-q5',
          kind: 'reflection',
          prompt: 'What part of your old identity do you need to surrender to your new identity in Christ?',
          explanation:
            'Jesus becomes the new representative of humanity, and faith means learning to live from who we are in Him.',
        },
      ],
    },
  },
  'all-things-new': {
    openingThought: `The gospel does not only change your future.

It changes your whole life.

When a person comes into Christ, God does more than adjust behavior. He begins a new creation.

Old ways of seeing God begin to change.
Old ways of seeing yourself begin to change.
Old ways of seeing people begin to change.
Old motives begin to lose their power.

The love of Christ does not leave the heart untouched.

It reconciles.
It restores.
It renews.

In Jesus, God begins making all things new.`,
    scriptureRef: '2 Corinthians 5:17',
    scriptureQuote:
      'Therefore if any man be in Christ, he is a new creature: old things are passed away; behold, all things are become new.',
    scriptureAfterPrimary: `This does not mean believers instantly become flawless.

It means a new reality has begun.

The old life no longer has final authority.

God is creating a new life through union with Jesus.`,
    scriptureSecondaryRef: '2 Corinthians 5:14',
    scriptureSecondaryQuote: 'For the love of Christ constraineth us.',
    scriptureAfterSecondary: `Christ's love becomes the power that moves the life.

Fear may pressure people.
Guilt may push people.
Pride may perform for people.

But the gospel creates a better motive: love received from Jesus.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: '2 Corinthians 5:18-19',
        quote:
          'And all things are of God, who hath reconciled us to himself by Jesus Christ, and hath given to us the ministry of reconciliation; To wit, that God was in Christ, reconciling the world unto himself, not imputing their trespasses unto them.',
      },
      {
        type: 'scripture',
        reference: 'Galatians 2:20',
        quote:
          'I am crucified with Christ: nevertheless I live; yet not I, but Christ liveth in me: and the life which I now live in the flesh I live by the faith of the Son of God, who loved me, and gave himself for me.',
      },
      {
        type: 'scripture',
        reference: 'Colossians 1:13-14',
        quote:
          'Who hath delivered us from the power of darkness, and hath translated us into the kingdom of his dear Son: In whom we have redemption through his blood, even the forgiveness of sins.',
      },
    ],
    teachingPoints: [
      `1. In Christ, a new creation begins

Paul says that if anyone is in Christ, he is a new creature.

This does not mean believers instantly become flawless.

It means a new reality has begun.

The old life no longer has final authority.

God is creating a new life through union with Jesus.`,
      `2. The love of Christ becomes the new motive

Paul says the love of Christ constrains us.

That means Christ's love becomes the power that moves the life.

Fear may pressure people.

Guilt may push people.

Pride may perform for people.

But the gospel creates a better motive: love received from Jesus.`,
      `3. God reconciles us to Himself

Reconciliation means the broken relationship is restored.

In Christ, God is not holding our sins over us as if He is looking for a reason to reject us.

He is bringing us back to Himself.

The gospel announces that God has acted in Jesus to restore relationship.`,
      `4. New life changes how we see people

Paul says we no longer regard people according to the flesh.

That means the gospel changes our vision.

We stop reducing people to their past, status, weakness, appearance, usefulness, or failure.

We begin seeing people through the possibility of reconciliation in Christ.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Reconciliation',
      lemma: 'καταλλαγή',
      transliteration: 'katallagē',
      meaning: 'The restoration of a broken relationship.',
      strongs: 'G2643',
      reference: '2 Corinthians 5:18',
      note: `Sin broke humanity's relationship with God.

In Christ, God reconciles us to Himself.

This means the gospel is not only about legal forgiveness. It is about restored relationship, renewed identity, and a new way of living with God and others.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `Second Corinthians 5 shows how deeply the gospel transforms a person.

Christ died for all.

That means we no longer live for ourselves.

God reconciled us to Himself.

That means we no longer live as spiritual outsiders.

Christ makes us new.

That means the old life does not get the final word.

This is not self-improvement with Bible language.

It is new creation.

God's love reaches the heart, changes the center, and begins reshaping the whole life from the inside out.

The gospel does not merely tell us to become better people.

It brings us into Christ, where new life begins.`,
    },
    studyInsightBlocks: allThingsNewInsightBlocks,
    reflectPrompt: `What part of your life most needs to be made new by the love of Christ?

Think about your motives, relationships, self-image, habits, fears, or the way you see other people.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, watch what is motivating you.

Ask:

"Am I being moved by fear, guilt, pride, or the love of Christ?"

When you notice the old motive, pause and return to the gospel.

Say:

"Jesus, let Your love become the motive here."

Then choose one response that reflects new creation.

Speak with grace.
Forgive instead of rehearsing offense.
Serve without needing applause.
Tell the truth without hiding.
Pray instead of spiraling.

New creation is practiced in real moments.

Prayer:

Father, thank You for reconciling me to Yourself through Jesus. Thank You that in Christ, old things do not have the final word. Let the love of Christ shape my motives, relationships, thoughts, and actions. Make me new from the inside out, and teach me to live as someone restored by grace. Amen.`,
    prayer: '',
    completionSummary: `In Christ, God begins a new creation. The gospel reconciles us to God, changes our motives, and teaches us to live from love instead of fear.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'mnic-l4-q1',
          prompt: 'According to 2 Corinthians 5:17, what is true of anyone in Christ?',
          options: [
            'They are a new creature',
            'They must save themselves',
            'Nothing can change',
            'They are beyond grace',
          ],
          correctIndex: 0,
          explanation:
            'Paul says that anyone in Christ is a new creature and that old things are passed away.',
        },
        {
          id: 'mnic-l4-q2',
          prompt: 'According to 2 Corinthians 5:14, what constrains or moves the believer?',
          options: [
            'The love of Christ',
            'Fear of people',
            'Pride in self',
            'Confusion about God',
          ],
          correctIndex: 0,
          explanation:
            'Paul says the love of Christ constrains us, meaning Christ\'s love becomes the new motive of life.',
        },
        {
          id: 'mnic-l4-q3',
          prompt: 'What does reconciliation mean?',
          options: [
            'Restoration of a broken relationship',
            'Ignoring sin forever',
            'Trying harder without grace',
            'Hiding from God',
          ],
          correctIndex: 0,
          explanation:
            'Reconciliation means a broken relationship is restored. In Christ, God reconciles us to Himself.',
        },
        {
          id: 'mnic-l4-q4',
          prompt: 'According to Colossians 1:13-14, what has God done for us in Christ?',
          options: [
            'Delivered us from darkness and given redemption and forgiveness',
            'Left us in darkness',
            'Removed the need for grace',
            'Told us to earn forgiveness alone',
          ],
          correctIndex: 0,
          explanation:
            'Colossians says God has delivered us from the power of darkness and that in Christ we have redemption and forgiveness.',
        },
        {
          id: 'mnic-l4-q5',
          kind: 'reflection',
          prompt: 'Where do you need the love of Christ to replace fear, guilt, or pride as your motive?',
          explanation:
            'The gospel creates a new life by changing the heart\'s center. Christ\'s love becomes the motive for how we live.',
        },
      ],
    },
  },
  'faith-receives-the-facts': {
    openingThought: `Faith does not make the gospel true.

The gospel is already true because of what Jesus has done.

Faith receives it.

That matters because many people treat faith like a spiritual performance. They think faith means feeling strong enough, believing perfectly enough, or reaching a certain emotional level.

But biblical faith is not about producing salvation.

Faith rests in salvation already accomplished in Christ.

Jesus lived.
Jesus died.
Jesus rose.
Jesus saves.

Faith says, "I trust Him."`,
    scriptureRef: 'Galatians 2:20',
    scriptureQuote:
      'I live by the faith of the Son of God, who loved me, and gave himself for me.',
    scriptureAfterPrimary: `Faith is not vague positivity.

Faith has an object.

It rests in Jesus.

The heart of faith is trusting the One who loved us enough to give Himself for us.`,
    scriptureSecondaryRef: '2 Timothy 1:9-10',
    scriptureSecondaryQuote:
      'Who hath saved us, and called us with an holy calling, not according to our works, but according to his own purpose and grace, which was given us in Christ Jesus before the world began, But is now made manifest by the appearing of our Saviour Jesus Christ, who hath abolished death, and hath brought life and immortality to light through the gospel.',
    scriptureAfterSecondary: `God saved us, not according to our works.

Our effort does not purchase acceptance.

Our obedience does not force God to love us.

Salvation begins with God's grace in Christ.

Christ abolished death and brought life and immortality to light through the gospel.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Titus 3:5',
        quote:
          'Not by works of righteousness which we have done, but according to his mercy he saved us, by the washing of regeneration, and renewing of the Holy Ghost.',
      },
      {
        type: 'scripture',
        reference: 'Titus 3:7',
        quote:
          'That being justified by his grace, we should be made heirs according to the hope of eternal life.',
      },
    ],
    teachingPoints: [
      `1. Faith rests in Christ's love

Paul says he lives by faith in the Son of God, who loved him and gave Himself for him.

Faith is not vague positivity.

Faith has an object.

It rests in Jesus.

The heart of faith is trusting the One who loved us enough to give Himself for us.`,
      `2. Salvation is not according to our works

Second Timothy says God saved us, not according to our works.

That is direct.

Our works do not create salvation.

Our effort does not purchase acceptance.

Our obedience does not force God to love us.

Salvation begins with God's grace in Christ.`,
      `3. Faith receives mercy

Titus says God saved us according to His mercy.

Mercy comes before spiritual achievement.

This is hard for pride to accept and hard for shame to believe.

Pride wants to earn.

Shame assumes it is too late.

Faith receives what mercy gives.`,
      `4. Grace gives us a new inheritance

Titus says we are justified by grace and made heirs according to the hope of eternal life.

An heir receives because of relationship, not because they built the inheritance themselves.

In Christ, believers receive a new standing and a new future.

Faith receives the facts of grace and begins to live from them.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Faith',
      lemma: 'πίστις',
      transliteration: 'pistis',
      meaning: 'Trust, confidence, reliance, or dependence.',
      strongs: 'G4102',
      reference: 'Galatians 2:20',
      note: `Faith is not spiritual self-confidence.

Faith is confidence in Jesus.

It does not create the facts of the gospel. It receives them, rests in them, and begins to live from them.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `Faith is often misunderstood.

Some people think faith is a feeling.

Others think faith is mental pressure.

Others think faith is pretending to be certain when they are not.

But biblical faith is simpler and deeper.

Faith trusts Jesus.

Faith receives what grace has already provided.

Faith says:

"Christ loved me."
"Christ gave Himself for me."
"Christ saved me by mercy."
"Christ abolished death."
"Christ gives eternal life."

Faith does not stare at itself to see if it is strong enough.

Faith looks to Jesus.

That is where peace begins.`,
    },
    studyInsightBlocks: faithReceivesGraceInsightBlocks,
    reflectPrompt: `Where do you tend to make faith about your strength instead of Christ's finished work?

Think about doubt, guilt, emotional pressure, trying to believe perfectly, or feeling like your faith is never enough.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, stop measuring faith by how strong you feel.

Measure it by where you are looking.

When you feel weak, look to Jesus.

When you feel uncertain, look to Jesus.

When guilt says your faith is not enough, answer:

"My hope is not the strength of my faith. My hope is the strength of my Savior."

Then practice a simple faith statement:

"Jesus, I trust what You have done."

Say it when you pray.

Say it when you feel anxious.

Say it when shame gets loud.

Faith receives the facts of grace one moment at a time.

Prayer:

Jesus, help me trust You more than I trust my feelings. Thank You for loving me and giving Yourself for me. Thank You that salvation rests on Your mercy, not my performance. Teach me to receive grace by faith and live from what You have already done. Amen.`,
    prayer: '',
    completionSummary: `Faith does not create salvation. Faith receives what grace has already provided in Jesus and learns to rest in His finished work.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'mnic-l5-q1',
          prompt: 'According to Galatians 2:20, who loved Paul and gave Himself for him?',
          options: ['The Son of God', 'Adam', 'Caesar', 'Moses'],
          correctIndex: 0,
          explanation:
            'Paul says he lives by faith in the Son of God, who loved him and gave Himself for him.',
        },
        {
          id: 'mnic-l5-q2',
          prompt: 'According to 2 Timothy 1:9, how has God saved us?',
          options: [
            'Not according to our works',
            'By our perfect record',
            'By our natural strength',
            'By comparison with others',
          ],
          correctIndex: 0,
          explanation:
            'Second Timothy says God saved us and called us, not according to our works.',
        },
        {
          id: 'mnic-l5-q3',
          prompt: 'According to Titus 3:5, why did God save us?',
          options: [
            'According to His mercy',
            'According to our works of righteousness',
            'According to our popularity',
            'According to our ability to impress Him',
          ],
          correctIndex: 0,
          explanation:
            'Titus says God saved us according to His mercy, not by works of righteousness we have done.',
        },
        {
          id: 'mnic-l5-q4',
          prompt: 'What does faith do according to this lesson?',
          options: [
            'Receives and rests in what grace has provided',
            'Creates salvation by emotional effort',
            'Replaces Jesus',
            'Makes works unnecessary forever',
          ],
          correctIndex: 0,
          explanation:
            'Faith receives what Christ has already accomplished. It rests in grace rather than trying to earn salvation.',
        },
        {
          id: 'mnic-l5-q5',
          kind: 'reflection',
          prompt: 'How can you practice looking to Jesus when your faith feels weak?',
          explanation:
            'Faith is not confidence in itself. Faith is confidence in Jesus, His mercy, and His finished work.',
        },
      ],
    },
  },
  'grace-trains-the-life': {
    openingThought: `Grace does not only forgive.

Grace teaches.

Some people hear "saved by grace" and think obedience no longer matters.

But Scripture says the opposite.

Grace saves us from trying to earn God's love, but it also trains us to live differently.

The gospel does not leave us trapped in the old life.

It creates a new one.

Good works do not make God accept us.

But once we receive grace, our lives begin to change because grace has reached the heart.`,
    scriptureRef: 'Titus 2:11-12',
    scriptureQuote:
      'For the grace of God that bringeth salvation hath appeared to all men, Teaching us that, denying ungodliness and worldly lusts, we should live soberly, righteously, and godly, in this present world.',
    scriptureAfterPrimary: `Salvation begins with God's gift, not human achievement.

Grace comes first.

The same grace that saves also teaches.

Grace trains us to deny ungodliness and live in a way that reflects God.`,
    scriptureSecondaryRef: 'Ephesians 2:10',
    scriptureSecondaryQuote:
      'For we are his workmanship, created in Christ Jesus unto good works, which God hath before ordained that we should walk in them.',
    scriptureAfterSecondary: `Good works are not the root of salvation.

They are the fruit of salvation.

God does not save us because of our works.

He saves us and then begins shaping our lives for love, service, honesty, purity, justice, and mercy.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Philippians 2:13',
        quote:
          'For it is God which worketh in you both to will and to do of his good pleasure.',
      },
      {
        type: 'scripture',
        reference: 'Titus 2:14',
        quote:
          'Who gave himself for us, that he might redeem us from all iniquity, and purify unto himself a peculiar people, zealous of good works.',
      },
    ],
    teachingPoints: [
      `1. Grace brings salvation

Titus says the grace of God brings salvation.

That means salvation begins with God's gift, not human achievement.

Grace comes first.

Before we can live differently, we must receive what Jesus has done.

The new life grows from grace, not from fear.`,
      `2. Grace teaches us how to live

The same grace that saves also teaches.

Grace trains us to deny ungodliness and live in a way that reflects God.

This is not legalism.

Legalism tries to earn acceptance.

Grace-based obedience grows because we have already been accepted in Christ.`,
      `3. We are created for good works

Ephesians says we are God's workmanship, created in Christ Jesus unto good works.

Good works are not the root of salvation.

They are the fruit of salvation.

God does not save us because of our works.

He saves us and then begins shaping our lives for love, service, honesty, purity, justice, and mercy.`,
      `4. God works in us

Philippians says God works in us both to will and to do His good pleasure.

This means transformation is not self-powered.

God changes desires.

God strengthens obedience.

God forms a new life within us.

We cooperate, but He supplies the power.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Train',
      lemma: 'παιδεύω',
      transliteration: 'paideuō',
      meaning: 'To teach, discipline, guide, or form over time.',
      strongs: 'G3811',
      reference: 'Titus 2:12',
      note: `Grace is not passive.

Grace trains the life.

It teaches the heart to turn away from what destroys and walk in what reflects God's love.

The grace that saves also shapes.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The order of the gospel matters.

Not:

Obey so God will save you.

But:

God saves you by grace, then grace teaches you how to live.

That order protects us from two dangerous errors.

The first error is legalism.

Legalism says, "My obedience earns God's acceptance."

The second error is careless grace.

Careless grace says, "Since I am forgiven, obedience does not matter."

The gospel rejects both.

Grace saves freely.

Grace transforms deeply.

Jesus gave Himself not only to forgive us, but to redeem us from iniquity and purify a people who reflect His character.`,
    },
    studyInsightBlocks: graceTrainsInsightBlocks,
    reflectPrompt: `Which error are you more tempted toward: trying to earn God's acceptance or treating grace like obedience does not matter?

Be honest. Some people live under pressure. Others avoid surrender. The gospel corrects both by showing that grace saves and grace trains.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, choose one area where grace needs to train you.

Not shame.

Grace.

Ask:

"Lord, what are You teaching me to deny?"

Then ask:

"What are You teaching me to become?"

Maybe grace is training your speech.
Maybe it is training your habits.
Maybe it is training your motives.
Maybe it is training your relationships.
Maybe it is training how you use your time.

Do not obey to become loved.

Obey because you are loved in Christ.

Prayer:

Father, thank You for the grace that saves and the grace that trains. Keep me from trying to earn Your acceptance, and keep me from treating obedience lightly. Work in me both to will and to do Your good pleasure. Shape my desires, my habits, and my life through Jesus. Amen.`,
    prayer: '',
    completionSummary: `Grace saves freely, but it does not leave us unchanged. The grace of God trains the heart and shapes a new life in Christ.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'mnic-l6-q1',
          prompt: 'According to Titus 2:11, what has appeared to bring salvation?',
          options: [
            'The grace of God',
            'Human pride',
            'Fear of people',
            'Self-improvement',
          ],
          correctIndex: 0,
          explanation: 'Titus says the grace of God that brings salvation has appeared.',
        },
        {
          id: 'mnic-l6-q2',
          prompt: 'According to Titus 2:12, what does grace do?',
          options: [
            'Teaches us how to live',
            'Makes obedience meaningless',
            'Encourages sin',
            'Removes the need for Jesus',
          ],
          correctIndex: 0,
          explanation:
            'Titus says grace teaches us to deny ungodliness and live soberly, righteously, and godly.',
        },
        {
          id: 'mnic-l6-q3',
          prompt: 'According to Ephesians 2:10, what are believers created for in Christ Jesus?',
          options: [
            'Good works',
            'Self-salvation',
            'Spiritual pride',
            'Fear-based religion',
          ],
          correctIndex: 0,
          explanation:
            'Ephesians says we are God\'s workmanship, created in Christ Jesus unto good works.',
        },
        {
          id: 'mnic-l6-q4',
          prompt: 'According to Philippians 2:13, who works in believers to will and to do His good pleasure?',
          options: ['God', 'Human pride', 'The old life', 'Fear'],
          correctIndex: 0,
          explanation:
            'Philippians says God works in believers both to will and to do His good pleasure.',
        },
        {
          id: 'mnic-l6-q5',
          kind: 'reflection',
          prompt: 'What is one area where grace is training you to live differently?',
          explanation:
            'Grace does not only forgive. It teaches, renews, and shapes the life to reflect Christ.',
        },
      ],
    },
  },
  'living-as-a-new-creation': {
    openingThought: `The gospel does not leave you where it found you.

In Christ, you are not just forgiven.

You are made new.

That does not mean every struggle disappears overnight. It does not mean you never feel temptation, weakness, fear, or old patterns pulling at you.

But it does mean the old life no longer owns you.

You have a new identity.
A new source.
A new motive.
A new future.

The Christian life is learning to live from what is already true in Jesus.`,
    scriptureRef: '2 Corinthians 5:17',
    scriptureQuote:
      'Therefore if any man be in Christ, he is a new creature: old things are passed away; behold, all things are become new.',
    scriptureAfterPrimary: `The new life does not begin with self-confidence.

It begins with union with Jesus.

In Him, the old story of guilt, condemnation, and separation no longer has the final word.`,
    scriptureSecondaryRef: '1 John 4:19',
    scriptureSecondaryQuote: 'We love him, because he first loved us.',
    scriptureAfterSecondary: `This is the new rhythm of the Christian life.

We are not trying to earn God's love.

We are responding to the love we have already received in Christ.

Grace changes the heart's reason for obedience.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Romans 8:1',
        quote:
          'There is therefore now no condemnation to them which are in Christ Jesus, who walk not after the flesh, but after the Spirit.',
      },
      {
        type: 'scripture',
        reference: 'Romans 8:3-4',
        quote:
          'For what the law could not do, in that it was weak through the flesh, God sending his own Son in the likeness of sinful flesh, and for sin, condemned sin in the flesh: That the righteousness of the law might be fulfilled in us, who walk not after the flesh, but after the Spirit.',
      },
    ],
    teachingPoints: [
      `1. New creation begins in Christ

Paul says anyone in Christ is a new creature.

The new life does not begin with self-confidence.

It begins with union with Jesus.

In Him, the old story of guilt, condemnation, and separation no longer has the final word.`,
      `2. Love becomes the new motive

First John says we love because He first loved us.

This is the new rhythm of the Christian life.

We are not trying to earn God's love.

We are responding to the love we have already received in Christ.

Grace changes the heart's reason for obedience.`,
      `3. Condemnation is broken in Christ

Romans 8 says there is no condemnation to those who are in Christ Jesus.

That does not mean sin is harmless.

It means Christ has dealt with sin.

Believers do not live under the crushing verdict of condemnation.

They live under the grace, power, and leadership of Jesus.`,
      `4. The Spirit leads the new life

Romans 8 says God's purpose is fulfilled in those who walk after the Spirit.

The new creation life is not powered by human will alone.

God's Spirit works within us, teaching us to desire what is good, reject what destroys, and reflect the love of Christ.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'New Creation',
      lemma: 'καινὴ κτίσις',
      transliteration: 'kainē ktisis',
      meaning:
        'A new work of God in a person\'s life, where the old identity no longer has final authority and life is restored in Christ.',
      strongs: 'G2937',
      reference: '2 Corinthians 5:17',
      note: `New creation does not mean pretending the past never happened.

It means the past no longer gets to define the future.

In Christ, God begins a new life that is shaped by grace, love, truth, and the Spirit.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `Made New in Christ has followed one clear gospel path:

The gospel is good news, not good advice.

Jesus already finished the saving work.

Christ is the new representative of humanity.

In Him, God makes all things new.

Faith receives what grace has provided.

Grace trains the life.

Now we live as new creations.

This is the balance Scripture gives us.

We do not work to become accepted.

We work because grace has reached us.

We do not obey to make God love us.

We obey because He first loved us.

We do not fight sin to earn a new identity.

We fight sin because we have one.

The gospel changes both our standing and our walk.`,
    },
    studyInsightBlocks: livingNewInsightBlocks,
    reflectPrompt: `What would change if you lived this week from your identity in Christ instead of your fear, failure, or performance?

Think about your thoughts, decisions, relationships, habits, work, private life, and how you respond when you fall short.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, practice living from your new identity.

When condemnation speaks, answer:

"There is no condemnation in Christ."

When fear says you are not enough, answer:

"I am loved before I perform."

When old habits pull at you, answer:

"That is not my master anymore."

Then take one Spirit-led step.

Confess.
Pray.
Choose honesty.
Serve someone.
Turn away from the old pattern.
Return to Scripture.
Ask God for a renewed heart.

Do not live like someone trying to become loved.

Live like someone who has been made new in Christ.

Prayer:

Father, thank You for making me new in Jesus. Help me live from grace instead of fear, from love instead of performance, and from truth instead of condemnation. Teach me to walk by Your Spirit. Shape my thoughts, motives, habits, and relationships so my life reflects the new creation You have begun in me. Amen.`,
    prayer: '',
    completionSummary: `You have completed Made New in Christ. The gospel is good news about what Jesus has already done. In Him, you are forgiven, reconciled, made new, trained by grace, and invited to live from a restored identity.`,
    seriesCompleteScreen: {
      title: 'Study Complete',
      message:
        'You have completed Made New in Christ. The gospel is good news about what Jesus has already done. In Him, you are forgiven, reconciled, made new, trained by grace, and invited to live from a restored identity.',
      primaryCta: { label: 'Back to Foundations Path', href: '/paths/foundations' },
      secondaryCta: {
        label: 'Review this study',
        href: '/study-library/made-new-in-christ',
      },
    },
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'mnic-l7-q1',
          prompt: 'According to 2 Corinthians 5:17, what is true of anyone in Christ?',
          options: [
            'They are a new creature',
            'They are beyond grace',
            'They must save themselves',
            'They cannot change',
          ],
          correctIndex: 0,
          explanation:
            'Paul says that anyone in Christ is a new creature, and old things are passed away.',
        },
        {
          id: 'mnic-l7-q2',
          prompt: 'According to 1 John 4:19, why do we love Him?',
          options: [
            'Because He first loved us',
            'Because we earned His love',
            'Because fear saves us',
            'Because works replace grace',
          ],
          correctIndex: 0,
          explanation:
            'John says we love Him because He first loved us. God\'s love becomes the source of our love and obedience.',
        },
        {
          id: 'mnic-l7-q3',
          prompt: 'According to Romans 8:1, what is true for those in Christ Jesus?',
          options: [
            'There is no condemnation',
            'There is no hope',
            'There is no need for grace',
            'There is no need for Jesus',
          ],
          correctIndex: 0,
          explanation: 'Romans 8:1 says there is no condemnation to those who are in Christ Jesus.',
        },
        {
          id: 'mnic-l7-q4',
          prompt: 'What does this lesson teach about the new life?',
          options: [
            'It is lived from grace and led by the Spirit',
            'It is earned by performance',
            'It is powered by pride',
            'It ignores obedience completely',
          ],
          correctIndex: 0,
          explanation:
            'The new creation life is lived from grace, shaped by love, and led by the Spirit.',
        },
        {
          id: 'mnic-l7-q5',
          kind: 'reflection',
          prompt: 'What is one old identity or pattern you need to stop letting define you?',
          explanation:
            'In Christ, the old life no longer has final authority. God calls believers to live from their new identity in Jesus.',
        },
      ],
    },
  },
}
