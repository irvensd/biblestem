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

/** Guided reader lessons for "The Faithful Witness" (Foundations). */
export const theFaithfulWitnessSeriesLessonLibrary: Record<string, LessonReaderContent> = {
  'guardians-of-the-law': {
    openingThought: `The remnant is not called to invent new truth.

It is called to guard what God has already revealed.

Revelation describes God's final people as those who "keep the commandments of God."

That word keep means more than casual agreement.

It means to guard, preserve, hold close, and remain loyal.

This matters because Scripture warned that counterfeit religion would attack God's law, replace God's authority with human authority, and distort the character of God.

So in the final phase of history, God has a people who preserve His law of love and point the world back to Jesus.

Not with arrogance.

Not with superiority.

Not as legalists.

But as witnesses.`,
    scriptureRef: 'Revelation 12:17',
    scriptureQuote: `And the dragon was wroth with the woman, and went to make war with the remnant of her seed.

Which keep the commandments of God, and have the testimony of Jesus Christ.`,
    scriptureAfterPrimary: `Revelation identifies the remnant by loyalty to God's commandments and faithful witness to Jesus.`,
    scriptureSecondaryRef: 'Revelation 14:12',
    scriptureSecondaryQuote:
      'Here is the patience of the saints: here are they that keep the commandments of God, and the faith of Jesus.',
    scriptureAfterSecondary: `The same marks appear again: the commandments of God and the faith of Jesus.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: '2 Thessalonians 2:7-8',
        quote: `For the mystery of iniquity doth already work.

And then shall that Wicked be revealed.`,
      },
      {
        type: 'scripture',
        reference: 'John 14:15',
        quote: 'If ye love me, keep my commandments.',
      },
      {
        type: 'scripture',
        reference: 'Romans 13:10',
        quote: 'Love worketh no ill to his neighbour: therefore love is the fulfilling of the law.',
      },
    ],
    teachingPoints: [
      `1. The remnant is identified by loyalty to God's commandments

Revelation 12 says the remnant keep the commandments of God.

This is one of the clearest identifying marks of God's end-time people.

They do not treat God's law as disposable.

They do not place human tradition above Scripture.

They do not separate love from obedience.

They preserve God's commandments because His law reveals His character of love.`,
      `2. Keeping means guarding

The word translated "keep" carries the idea of guarding, watching over, preserving, or holding fast.

That is important.

Revelation presents the commandments as something under attack.

If something must be guarded, it means something is trying to damage, replace, or erase it.

The remnant guards God's law because counterfeit religion has tried to distort it.`,
      `3. Lawlessness is part of the apostasy

Paul describes the apostate power as connected to lawlessness.

That means the final conflict is not only about religious labels.

It is about authority.

Will God's Word have final authority?

Will human systems claim the right to change what God has spoken?

Will worship be shaped by Scripture or tradition?

The remnant answers by standing with the commandments of God.`,
      `4. Obedience flows from love

Jesus said, "If ye love me, keep my commandments."

He did not say, "Keep My commandments so I will love you."

That order matters.

Obedience does not purchase love.

Obedience responds to love.

The remnant does not keep God's law to earn salvation.

They keep it because they have been loved, saved, and drawn into loyalty to Jesus.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Keep',
      lemma: 'τηρέω',
      transliteration: 'tereo',
      meaning: 'To guard, preserve, observe, hold fast, or watch over something carefully.',
      strongs: 'G5083',
      reference: 'Revelation 12:17',
      note: `When Revelation says the remnant keep the commandments of God, it is describing more than rule-following.

It means God's people guard His law of love against distortion, neglect, and human replacement.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The commandments of God are not random religious rules.

They reveal what love looks like.

Love for God.

Love for neighbor.

Faithfulness.

Truthfulness.

Worship.

Rest.

Honor.

Purity.

Contentment.

Respect for life.

So when Scripture says the remnant keep the commandments, it is not describing cold legalism.

It is describing a people who preserve the moral picture of God's character.

This is especially important after the rise of counterfeit religion.

If the apostasy attacks God's law, the remnant restores attention to God's law.

If tradition replaces Scripture, the remnant returns to Scripture.

If obedience is called legalism, the remnant shows that obedience is love responding to grace.

No flexing. No spiritual chest-puffing. Just faithful witness.`,
    },
    studyInsightBlocks: [
      {
        type: 'remnantWitnessPattern',
        title: 'Guardians of the Law',
        caption: 'The remnant guards God\'s law as a witness to His character of love.',
        stages: [
          { label: 'Commandments of God', tagline: "God's law of love" },
          { label: 'Keep', tagline: 'guard, preserve, hold fast' },
          { label: 'Apostasy', tagline: 'lawlessness and human authority' },
          { label: 'Jesus', tagline: 'love produces obedience' },
          { label: 'Mission', tagline: "reveal God's character to the world" },
        ],
      },
      {
        type: 'scriptureChain',
        title: 'Guardians of the Law',
        references: [
          { reference: 'Revelation 12:17' },
          { reference: 'Revelation 14:12' },
          { reference: '2 Thessalonians 2:7-8' },
          { reference: 'John 14:15' },
          { reference: 'Romans 13:10' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: The remnant keeps God\'s commandments, not to earn salvation, but to guard and reveal His law of love.',
      },
    ],
    reflectPrompt: `Do you tend to see God's commandments as restrictions, requirements, or revelations of His love?

Think about obedience, grace, Sabbath, worship, relationships, freedom, and whether God's law feels like pressure or a picture of His character.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, choose one commandment of God and study how it reveals love.

Do not study it like a checklist.

Study it like a window into God's character.

Ask:

"What does this commandment show me about God?"

"How does this commandment protect love?"

"How does Jesus embody this truth?"

"What would obedience look like if it came from love instead of fear?"

Then practice one act of love-shaped obedience.

Not to earn God's favor.

Because you already have His love in Christ.

Prayer:

Father, thank You for giving Your law as a revelation of Your love. Help me guard Your commandments without becoming proud, harsh, or legalistic. Teach me to obey from love, not fear. Keep Jesus at the center of my faith, and make my life a faithful witness to Your character. Amen.`,
    prayer: '',
    completionSummary: `The remnant guards God's commandments as a faithful witness to His law of love. Obedience does not earn salvation; it flows from love for Jesus.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'tfwy-l1-q1',
          prompt: 'According to Revelation 12:17, what does the remnant keep?',
          options: [
            'The commandments of God',
            'Human tradition above Scripture',
            "The dragon's teachings",
            'Personal opinions as final authority',
          ],
          correctIndex: 0,
          explanation:
            'Revelation identifies the remnant as those who keep the commandments of God and have the testimony of Jesus Christ.',
        },
        {
          id: 'tfwy-l1-q2',
          prompt: 'According to Revelation 14:12, what marks the saints?',
          options: [
            'They keep the commandments of God and the faith of Jesus',
            'They reject obedience',
            'They follow human authority above God',
            'They deny the gospel',
          ],
          correctIndex: 0,
          explanation:
            'Revelation 14:12 describes the saints as those who keep the commandments of God and the faith of Jesus.',
        },
        {
          id: 'tfwy-l1-q3',
          prompt: 'According to John 14:15, what does love for Jesus lead to?',
          options: [
            'Keeping His commandments',
            'Ignoring His words',
            'Replacing His law',
            'Obeying only human tradition',
          ],
          correctIndex: 0,
          explanation: 'Jesus said, "If ye love me, keep my commandments," showing that obedience flows from love.',
        },
        {
          id: 'tfwy-l1-q4',
          prompt: 'According to Romans 13:10, what is the fulfilling of the law?',
          options: ['Love', 'Pride', 'Fear', 'Control'],
          correctIndex: 0,
          explanation: 'Paul says love works no harm to a neighbor and therefore love is the fulfilling of the law.',
        },
        {
          id: 'tfwy-l1-q5',
          kind: 'reflection',
          prompt: 'What is one commandment you want to understand more deeply as a revelation of God\'s love?',
          explanation:
            'God\'s commandments are not arbitrary rules. They reveal His character and show what love looks like in real life.',
        },
      ],
    },
  },
  'law-and-gospel-together': {
    openingThought: `Some people separate the gospel from God's law.

They think grace means obedience no longer matters.

Others separate God's law from the gospel.

They think obedience is how they earn God's acceptance.

Both miss the point.

The Bible does not place the gospel and God's law against each other.

The gospel saves us by grace.

The law shows us what love looks like.

Grace does not erase obedience.

Grace creates the kind of heart that wants to obey.

The remnant is called to hold these together: the commandments of God and the faith of Jesus.`,
    scriptureRef: 'Revelation 14:12',
    scriptureQuote:
      'Here is the patience of the saints: here are they that keep the commandments of God, and the faith of Jesus.',
    scriptureAfterPrimary: `God's faithful people hold together loyalty to God's commandments and faith in Jesus.`,
    scriptureSecondaryRef: 'Romans 3:31',
    scriptureSecondaryQuote: 'Do we then make void the law through faith? God forbid: yea, we establish the law.',
    scriptureAfterSecondary: `Paul says faith does not cancel God's law. Faith establishes it.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Ephesians 2:8-10',
        quote: `For by grace are ye saved through faith; and that not of yourselves: it is the gift of God.

Not of works, lest any man should boast.

For we are his workmanship, created in Christ Jesus unto good works.`,
      },
      {
        type: 'scripture',
        reference: 'Galatians 5:6',
        quote: 'For in Jesus Christ neither circumcision availeth any thing, nor uncircumcision; but faith which worketh by love.',
      },
      {
        type: 'scripture',
        reference: '1 John 5:3',
        quote: 'For this is the love of God, that we keep his commandments: and his commandments are not grievous.',
      },
    ],
    teachingPoints: [
      `1. The remnant holds commandments and faith together

Revelation 14:12 describes God's faithful people as those who keep the commandments of God and the faith of Jesus.

That balance matters.

Commandments without faith become legalism.

Faith without obedience becomes empty profession.

God's people are called to both.

They trust Jesus fully and obey God faithfully.`,
      `2. Faith does not cancel God's law

Paul asks, "Do we then make void the law through faith?"

His answer is direct: "God forbid."

Faith does not make God's law meaningless.

Faith establishes the law because true faith brings the heart back into harmony with God.

The law reveals God's love.

Faith receives God's grace.

The two belong together.`,
      `3. Salvation is by grace, not works

Ephesians makes this clear.

We are saved by grace through faith, not by works.

Nobody earns salvation.

Nobody obeys their way into God's love.

Nobody builds a ladder to heaven out of commandment-keeping.

Salvation is God's gift in Christ.

That destroys boasting.

Grace puts all pride in the grave where it belongs.`,
      `4. Grace creates good works

Ephesians does not stop with "not of works."

It continues by saying we are created in Christ Jesus unto good works.

Good works are not the root of salvation.

They are the fruit.

God saves us first, then shapes us into people who live differently.

The gospel does not produce rebellion.

It produces love.

And love fulfills the law.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Gospel',
      lemma: 'εὐαγγέλιον',
      transliteration: 'euangelion',
      meaning: 'Good news, especially the good news that God saves sinners by grace through Jesus Christ.',
      strongs: 'G2098',
      reference: 'Revelation 14:6',
      note: `The gospel does not destroy God's law.

The gospel saves us from sin and restores us to love.

When grace reaches the heart, obedience becomes the fruit of love, not the price of salvation.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The remnant is called to show the harmony between law and gospel.

That harmony is simple but powerful:

God's law shows what love looks like.

The gospel shows how God saves loveless sinners.

Faith receives Christ.

Love responds to Christ.

Obedience reveals that love has begun to take root.

This means the remnant must avoid two errors.

Error one:
Using God's law to earn salvation.

That turns obedience into fear and performance.

Error two:
Using grace as an excuse to ignore God's law.

That turns grace into permission for rebellion.

The truth is better.

Jesus saves by grace.

Jesus writes His law in the heart.

Jesus produces obedience through love.`,
    },
    studyInsightBlocks: [
      {
        type: 'remnantWitnessPattern',
        title: 'Law and Gospel Together',
        caption: 'Grace saves the heart. Love fulfills the law.',
        stages: [
          { label: 'Gospel', tagline: 'saved by grace through faith' },
          { label: 'Law', tagline: "reveals God's love" },
          { label: 'Faith', tagline: 'trusts Jesus fully' },
          { label: 'Love', tagline: 'responds to grace' },
          { label: 'Obedience', tagline: 'fruit of salvation, not the root' },
        ],
      },
      {
        type: 'scriptureChain',
        title: 'Law and Gospel Together',
        references: [
          { reference: 'Revelation 14:12' },
          { reference: 'Romans 3:31' },
          { reference: 'Ephesians 2:8-10' },
          { reference: 'Galatians 5:6' },
          { reference: '1 John 5:3' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: The remnant holds the gospel and God\'s law together. Salvation is by grace, and obedience is the fruit of love.',
      },
    ],
    reflectPrompt: `Which error are you more tempted toward: trying to earn God's favor by obedience, or using grace as an excuse to avoid obedience?

Think about your view of salvation, Sabbath, commandments, spiritual habits, guilt, assurance, and whether obedience feels like fear or love.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, practice seeing obedience through the gospel.

Choose one area where God is calling you to obey.

Then ask:

"Am I doing this to earn God's love, or because I have received His love?"

"What would obedience look like if I trusted Jesus more deeply?"

"How does this command protect love?"

"Where do I need grace to change my heart?"

Do not try to muscle your way into holiness.

That gets ugly fast.

Go to Jesus first.

Receive grace.

Then obey from love.

Prayer:

Father, thank You for saving me by grace through faith. Keep me from legalism and keep me from careless rebellion. Teach me to see Your law as a revelation of love and Your gospel as the power that restores my heart. Help me trust Jesus fully and obey You joyfully as the fruit of Your grace. Amen.`,
    prayer: '',
    completionSummary: `The gospel and God's law are not enemies. Grace saves the heart, faith trusts Jesus, and love produces obedience as the fruit of salvation.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'tfwy-l2-q1',
          prompt: 'According to Revelation 14:12, what two things mark God\'s faithful people?',
          options: [
            'The commandments of God and the faith of Jesus',
            'Human pride and religious control',
            'Tradition and popularity',
            'Fear and confusion',
          ],
          correctIndex: 0,
          explanation:
            'Revelation describes the saints as those who keep the commandments of God and the faith of Jesus.',
        },
        {
          id: 'tfwy-l2-q2',
          prompt: 'According to Romans 3:31, does faith make void the law?',
          options: [
            'No, faith establishes the law',
            'Yes, faith destroys all obedience',
            "Yes, God's law no longer matters",
            'No, but only human tradition matters',
          ],
          correctIndex: 0,
          explanation: 'Paul says faith does not make void the law. Instead, faith establishes the law.',
        },
        {
          id: 'tfwy-l2-q3',
          prompt: 'According to Ephesians 2:8-9, how are we saved?',
          options: [
            'By grace through faith',
            'By earning enough good works',
            'By human boasting',
            'By religious status',
          ],
          correctIndex: 0,
          explanation: 'Ephesians says salvation is by grace through faith, not of works, so no one can boast.',
        },
        {
          id: 'tfwy-l2-q4',
          prompt: 'According to Ephesians 2:10, what are believers created in Christ Jesus unto?',
          options: ['Good works', 'Spiritual pride', 'Lawlessness', 'Self-salvation'],
          correctIndex: 0,
          explanation:
            'Good works do not earn salvation, but they are the fruit God produces in those created anew in Christ.',
        },
        {
          id: 'tfwy-l2-q5',
          kind: 'reflection',
          prompt: 'What is one act of obedience you need to begin seeing as a response to grace instead of a way to earn favor?',
          explanation: 'The gospel and the law belong together. Grace saves us, and love moves us to obey.',
        },
      ],
    },
  },
  'the-testimony-of-jesus': {
    openingThought: `The remnant is identified by two major marks.

They keep the commandments of God.

And they have the testimony of Jesus Christ.

That second phrase matters.

The testimony of Jesus is not merely information about Jesus.

It is the witness Jesus gives.

Jesus came into the world to tell the truth about the Father.

He showed us what God is like.

Not by theory only.

By His life.
By His words.
By His mercy.
By His humility.
By His death on the cross.

The faithful witness points people to Jesus as the true revelation of God's character.`,
    scriptureRef: 'Revelation 12:17',
    scriptureQuote: `And the dragon was wroth with the woman, and went to make war with the remnant of her seed.

Which keep the commandments of God, and have the testimony of Jesus Christ.`,
    scriptureAfterPrimary: `Revelation identifies the remnant by loyalty to God's commandments and the testimony of Jesus Christ.`,
    scriptureSecondaryRef: 'John 1:18',
    scriptureSecondaryQuote: `No man hath seen God at any time.

The only begotten Son, which is in the bosom of the Father, he hath declared him.`,
    scriptureAfterSecondary: `No one has seen God, but the Son has declared Him. Jesus reveals the Father.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'John 14:9',
        quote: 'He that hath seen me hath seen the Father.',
      },
      {
        type: 'scripture',
        reference: 'John 16:27',
        quote: 'For the Father himself loveth you.',
      },
      {
        type: 'scripture',
        reference: 'Revelation 3:14',
        quote: 'These things saith the Amen, the faithful and true witness, the beginning of the creation of God.',
      },
      {
        type: 'scripture',
        reference: 'John 5:19',
        quote: `The Son can do nothing of himself, but what he seeth the Father do.

For what things soever he doeth, these also doeth the Son likewise.`,
      },
    ],
    teachingPoints: [
      `1. Jesus is the faithful and true witness

Revelation calls Jesus the faithful and true witness.

That means Jesus gives the accurate testimony of who God is.

Satan has lied about God from the beginning.

False religion has distorted His character.

Human fear has often imagined God as harsh, distant, controlling, or cruel.

Jesus cuts through the fog.

He is the true witness.`,
      `2. Jesus reveals the Father

John says no one has seen God at any time, but the Son has declared Him.

Jesus did not come to reveal a different God from the Father.

He came to reveal the Father Himself.

When we see Jesus healing, forgiving, serving, weeping, teaching, and laying down His life, we are seeing the Father's heart.

Jesus said it plainly:

"He that hath seen me hath seen the Father."`,
      `3. Jesus' testimony is centered on love

Jesus said, "The Father himself loveth you."

That statement destroys many false pictures of God.

The Father is not reluctant to love.

The Son is not trying to convince an angry Father to be kind.

The Father and Son are united in self-giving love.

The testimony of Jesus reveals that God is not against us.

God is for our healing, salvation, restoration, and eternal life.`,
      `4. The remnant bears this witness to the world

Revelation says the remnant have the testimony of Jesus.

This means God's faithful people are called to preserve and proclaim the true picture of God revealed in Christ.

The remnant does not exist to make itself look important.

It exists to make Jesus visible.

If our message does not help people see the Father through Jesus, we are missing the assignment.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Testimony',
      lemma: 'μαρτυρία',
      transliteration: 'marturia',
      meaning: 'A witness, declaration, or firsthand statement of what is true.',
      strongs: 'G3141',
      reference: 'Revelation 12:17',
      note: `The testimony of Jesus is the witness Jesus gives concerning the Father's character.

Jesus reveals God as self-giving love, and the remnant is called to carry that witness to the world.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The remnant has two identifying marks that must stay together.

The commandments of God.

The testimony of Jesus.

The commandments show what love looks like in action.

The testimony of Jesus shows what God's love looks like in person.

Law without Jesus becomes cold.

Jesus without obedience becomes sentimental.

But together, they form a complete witness.

The faithful witness guards God's law and points to Jesus.

That means every doctrine must answer one central question:

"How does this reveal God's character as seen in Christ?"

If a teaching does not lead people to see Jesus more clearly, we need to handle it carefully.

Truth is not just something we prove.

Truth is someone we reveal.`,
    },
    studyInsightBlocks: [
      {
        type: 'remnantWitnessPattern',
        title: 'The Testimony of Jesus',
        caption: "The testimony of Jesus reveals the Father's character of love.",
        stages: [
          { label: 'Jesus', tagline: 'faithful and true witness' },
          { label: 'Father', tagline: 'revealed through the Son' },
          { label: 'Testimony', tagline: 'God is self-giving love' },
          { label: 'Remnant', tagline: 'carries the witness of Jesus' },
          { label: 'Mission', tagline: "make God's character clear to the world" },
        ],
      },
      {
        type: 'scriptureChain',
        title: 'The Testimony of Jesus',
        references: [
          { reference: 'Revelation 12:17' },
          { reference: 'Revelation 3:14' },
          { reference: 'John 1:18' },
          { reference: 'John 14:9' },
          { reference: 'John 16:27' },
        ],
      },
      {
        type: 'paragraph',
        text: "Takeaway: The remnant bears the testimony of Jesus, pointing the world to Christ as the true revelation of the Father's character.",
      },
    ],
    reflectPrompt: `What picture of God do people receive when they listen to the way you talk about Him?

Think about whether your words, tone, doctrine, witness, and lifestyle make God look like Jesus or make Him seem harsh, distant, confusing, or hard to trust.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, practice giving the testimony of Jesus.

Choose one conversation, post, prayer, Bible study, or personal decision and ask:

"Does this make the Father look like Jesus?"

Then take one practical step.

Speak about God's love more clearly.

Correct a false picture of God gently.

Share a story from Jesus' life.

Show mercy where someone expects judgment.

Point someone to Christ instead of religious performance.

Do not just defend truth.

Reveal Jesus.

That is the assignment. No spiritual fog machine needed.

Prayer:

Father, thank You for revealing Yourself through Jesus. Thank You that the Son has shown us Your heart. Help me receive the testimony of Jesus and carry it faithfully. Keep me from misrepresenting You through harshness, fear, pride, or confusion. Let my words, actions, and beliefs point people to Your love as revealed in Christ. Amen.`,
    prayer: '',
    completionSummary:
      "The testimony of Jesus reveals the Father's character. The faithful witness points the world to Jesus as the clearest picture of God's love.",
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'tfwy-l3-q1',
          prompt: 'According to Revelation 12:17, what does the remnant have?',
          options: [
            'The testimony of Jesus Christ',
            'The testimony of the dragon',
            'Human tradition as final authority',
            'A message without Jesus',
          ],
          correctIndex: 0,
          explanation:
            'Revelation identifies the remnant as those who keep the commandments of God and have the testimony of Jesus Christ.',
        },
        {
          id: 'tfwy-l3-q2',
          prompt: 'According to John 1:18, who declares or reveals the Father?',
          options: [
            'The only begotten Son',
            'The dragon',
            'Human tradition',
            'The kingdoms of the earth',
          ],
          correctIndex: 0,
          explanation: 'John says no one has seen God at any time, but the only begotten Son has declared Him.',
        },
        {
          id: 'tfwy-l3-q3',
          prompt: 'According to John 14:9, what did Jesus say?',
          options: [
            'He that hath seen me hath seen the Father',
            'The Father is nothing like Me',
            'God cannot be known at all',
            'The Father does not love you',
          ],
          correctIndex: 0,
          explanation:
            "Jesus said that whoever has seen Him has seen the Father, showing that He is the true revelation of God's character.",
        },
        {
          id: 'tfwy-l3-q4',
          prompt: 'According to John 16:27, what does the Father Himself do?',
          options: ['Loves you', 'Rejects all people', 'Refuses mercy', 'Hides from everyone forever'],
          correctIndex: 0,
          explanation: 'Jesus said, "The Father himself loveth you," revealing the Father\'s heart of love.',
        },
        {
          id: 'tfwy-l3-q5',
          kind: 'reflection',
          prompt: 'What is one way you can help someone see the Father more clearly through Jesus?',
          explanation:
            "The testimony of Jesus reveals God's character. God's people are called to carry that witness with clarity, humility, and love.",
        },
      ],
    },
  },
  'the-spirit-of-prophecy': {
    openingThought: `God does not leave His people without guidance.

Throughout Scripture, the Holy Spirit moved upon men and women to give messages that called people back to God, exposed deception, revealed truth, and pointed forward to Jesus.

Revelation says the remnant has "the testimony of Jesus."

Then Revelation explains that "the testimony of Jesus is the spirit of prophecy."

That means God's final people are not only called to preserve His commandments.

They are also guided by the witness of Jesus through the prophetic gift.

But this gift must always point back to Scripture, back to Christ, and back to the love of God.

Prophecy is not given to replace the Bible.

It is given to lead people more deeply into the truth already revealed in God's Word.`,
    scriptureRef: 'Revelation 19:10',
    scriptureQuote: 'For the testimony of Jesus is the spirit of prophecy.',
    scriptureAfterPrimary: `Revelation connects the testimony of Jesus with the Spirit of prophecy.`,
    scriptureSecondaryRef: 'Revelation 12:17',
    scriptureSecondaryQuote: `And the dragon was wroth with the woman, and went to make war with the remnant of her seed.

Which keep the commandments of God, and have the testimony of Jesus Christ.`,
    scriptureAfterSecondary: `The remnant keeps God's commandments and has the testimony of Jesus Christ.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: '2 Peter 1:21',
        quote: `For the prophecy came not in old time by the will of man.

But holy men of God spake as they were moved by the Holy Ghost.`,
      },
      {
        type: 'scripture',
        reference: 'Numbers 12:6',
        quote: `If there be a prophet among you, I the Lord will make myself known unto him in a vision.

And will speak unto him in a dream.`,
      },
      {
        type: 'scripture',
        reference: 'Joel 2:28',
        quote: 'I will pour out my spirit upon all flesh; and your sons and your daughters shall prophesy.',
      },
      {
        type: 'scripture',
        reference: '1 Thessalonians 5:19-21',
        quote: `Quench not the Spirit.

Despise not prophesyings.

Prove all things; hold fast that which is good.`,
      },
    ],
    teachingPoints: [
      `1. The testimony of Jesus is the Spirit of prophecy

Revelation connects the testimony of Jesus with the Spirit of prophecy.

This means the remnant is marked by more than correct information.

God's people are to receive and bear the witness of Jesus through the guidance of the Holy Spirit.

The prophetic gift always has one central purpose:

To reveal Jesus more clearly.`,
      `2. Prophecy comes through the Holy Spirit

Peter says prophecy did not come by the will of man.

Holy men of God spoke as they were moved by the Holy Ghost.

That means true prophecy is not human imagination, religious hype, or emotional pressure.

It is the Spirit of God communicating truth according to God's will.

The source matters.

If it is truly from God, it will agree with Scripture and exalt Christ.`,
      `3. God has used visions and dreams

Numbers shows that God can communicate through visions and dreams.

Joel says God would pour out His Spirit and that sons and daughters would prophesy.

This tells us not to shut the door on the prophetic gift.

God has used it before.

Scripture says He would use it again.

But every claim must be tested carefully.`,
      `4. Prophetic claims must be tested

First Thessalonians gives balance.

Do not quench the Spirit.

Do not despise prophecy.

But prove all things.

Hold fast what is good.

This means believers should avoid two extremes.

Do not reject the prophetic gift because it makes you uncomfortable.

Do not accept every prophetic claim because it sounds spiritual.

Test everything by Scripture, Christ, and the fruit of the message.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Prophecy',
      lemma: 'προφητεία',
      transliteration: 'propheteia',
      meaning:
        'A message given by the Holy Spirit through a human messenger to reveal, warn, guide, correct, encourage, or point people back to God.',
      strongs: 'G4394',
      reference: 'Revelation 19:10',
      note: `Biblical prophecy is not mainly about predicting dates.

It is about revealing God's truth and calling people back to faithfulness.

True prophecy agrees with Scripture, exalts Jesus, and reveals God's character more clearly.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The Spirit of prophecy must be handled carefully.

It is not above Scripture.

It is not equal to Scripture as the foundation of doctrine.

It does not replace Bible study.

It does not give people permission to stop thinking, testing, or praying.

The Bible remains the standard.

A true prophetic gift points people back to Scripture and places Jesus at the center.

In the final phase of history, God raised up a prophetic witness that consistently pointed people to Christ, the cross, God's law, the great conflict between good and evil, healthful living, mission, and preparation for Jesus' return.

The point is not to create a personality-centered faith.

The point is to recognize that God still guides His people.

And every genuine gift from God will make Jesus clearer, not foggier.`,
    },
    studyInsightBlocks: [
      {
        type: 'remnantWitnessPattern',
        title: 'The Spirit of Prophecy',
        caption:
          "The Spirit of prophecy points God's people back to Scripture and forward in mission with Jesus at the center.",
        stages: [
          { label: 'Testimony of Jesus', tagline: 'the witness Jesus gives' },
          { label: 'Spirit of Prophecy', tagline: 'Holy Spirit-guided witness' },
          { label: 'Scripture', tagline: 'the testing standard' },
          { label: 'Jesus', tagline: 'the center of all truth' },
          { label: 'Mission', tagline: "guidance for God's final people" },
        ],
      },
      {
        type: 'scriptureChain',
        title: 'The Spirit of Prophecy',
        references: [
          { reference: 'Revelation 12:17' },
          { reference: 'Revelation 19:10' },
          { reference: '2 Peter 1:21' },
          { reference: 'Numbers 12:6' },
          { reference: 'Joel 2:28-29' },
          { reference: '1 Thessalonians 5:19-21' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: The testimony of Jesus is the Spirit of prophecy. God guides His people through the Holy Spirit, and every prophetic claim must be tested by Scripture and centered in Christ.',
      },
    ],
    reflectPrompt: `Why is it important to both respect the prophetic gift and test every prophetic claim by Scripture?

Think about discernment, spiritual deception, humility, Bible authority, Jesus as the center, and the danger of either rejecting God's guidance or accepting claims without testing them.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, practice biblical discernment.

When you hear a spiritual claim, message, teaching, dream, vision, or prophetic statement, ask:

"Does this agree with Scripture?"

"Does this exalt Jesus?"

"Does this reveal God's character more clearly?"

"Does this produce humility, obedience, love, and mission?"

"Is this being tested, or just emotionally accepted?"

Do not be gullible.

Also do not be spiritually closed.

The Bible gives the middle path:

Do not quench the Spirit.

Do not despise prophecy.

Test everything.

Hold fast what is good.

Prayer:

Father, thank You for guiding Your people through Your Word and by Your Spirit. Help me honor the testimony of Jesus and understand the Spirit of prophecy with humility and discernment. Keep me from rejecting Your guidance, but also keep me from accepting anything without testing it by Scripture. Let every truth I receive lead me closer to Jesus and make me more faithful in Your mission. Amen.`,
    prayer: '',
    completionSummary:
      'The testimony of Jesus is the Spirit of prophecy. God guides His people by the Holy Spirit, and every true prophetic witness points back to Scripture and centers on Christ.',
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'tfwy-l4-q1',
          prompt: 'According to Revelation 19:10, what is the testimony of Jesus?',
          options: [
            'The Spirit of prophecy',
            'Human tradition',
            'The voice of the dragon',
            'A message without Scripture',
          ],
          correctIndex: 0,
          explanation: 'Revelation 19:10 says, "The testimony of Jesus is the spirit of prophecy."',
        },
        {
          id: 'tfwy-l4-q2',
          prompt: 'According to 2 Peter 1:21, how did prophecy come?',
          options: [
            'Holy men of God spoke as they were moved by the Holy Ghost',
            'By human imagination only',
            'By political authority',
            'By personal preference',
          ],
          correctIndex: 0,
          explanation:
            'Peter says prophecy did not come by human will, but by the Holy Spirit moving upon God\'s messengers.',
        },
        {
          id: 'tfwy-l4-q3',
          prompt: 'According to Numbers 12:6, how can God make Himself known to a prophet?',
          options: [
            'Through a vision or dream',
            'Through pride',
            'Through human tradition only',
            'Through the dragon\'s deception',
          ],
          correctIndex: 0,
          explanation: 'Numbers says God can make Himself known to a prophet in a vision and speak in a dream.',
        },
        {
          id: 'tfwy-l4-q4',
          prompt: 'According to 1 Thessalonians 5:19-21, what should believers do?',
          options: [
            'Do not quench the Spirit, do not despise prophecy, prove all things, and hold fast what is good',
            'Accept everything without testing',
            'Reject all prophecy automatically',
            'Ignore Scripture',
          ],
          correctIndex: 0,
          explanation:
            'Paul gives a balanced approach: do not reject the Spirit\'s work, but test all things and hold fast what is good.',
        },
        {
          id: 'tfwy-l4-q5',
          kind: 'reflection',
          prompt: 'What is one way you can become more careful and biblical in how you test spiritual claims?',
          explanation:
            'God calls His people to honor the Spirit\'s guidance while testing every claim by Scripture and keeping Jesus at the center.',
        },
      ],
    },
  },
  'christ-at-the-center': {
    openingThought: `Truth is safest when Jesus is at the center.

The remnant has been entrusted with serious truths: God's law, prophecy, the testimony of Jesus, the final message, and the call to worship the Creator.

But every truth can be mishandled if Christ is pushed to the side.

Doctrine without Jesus becomes cold.

Prophecy without Jesus becomes fear-driven.

Obedience without Jesus becomes performance.

Mission without Jesus becomes religious activity.

The faithful witness does not merely defend teachings.

The faithful witness reveals Christ.

If Jesus is not clearer by the end of the study, sermon, conversation, or doctrine, we need to go back and rebuild the center.`,
    scriptureRef: 'John 5:39',
    scriptureQuote:
      'Search the scriptures; for in them ye think ye have eternal life: and they are they which testify of me.',
    scriptureAfterPrimary: `Jesus said the Scriptures testify of Him. Bible study is meant to lead us to Christ.`,
    scriptureSecondaryRef: '1 Corinthians 2:2',
    scriptureSecondaryQuote: 'For I determined not to know any thing among you, save Jesus Christ, and him crucified.',
    scriptureAfterSecondary: `Paul centered his message on Jesus Christ and Him crucified.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: '2 Corinthians 4:6',
        quote: `For God, who commanded the light to shine out of darkness, hath shined in our hearts.

To give the light of the knowledge of the glory of God in the face of Jesus Christ.`,
      },
      {
        type: 'scripture',
        reference: 'Colossians 1:15-17',
        quote: `Who is the image of the invisible God, the firstborn of every creature.

For by him were all things created.

And he is before all things, and by him all things consist.`,
      },
      {
        type: 'scripture',
        reference: 'Hebrews 1:2-3',
        quote: `Hath in these last days spoken unto us by his Son.

Who being the brightness of his glory, and the express image of his person.`,
      },
    ],
    teachingPoints: [
      `1. Scripture testifies of Jesus

Jesus told the religious leaders that the Scriptures testify of Him.

That means Bible study is not complete if it collects information but misses Christ.

The whole Bible points toward Jesus.

Prophecy points to Jesus.

The law points to Jesus.

The sanctuary points to Jesus.

The gospel reveals Jesus.

The final message must lift up Jesus.`,
      `2. Christ crucified is the center of the message

Paul said he determined to know nothing among the believers except Jesus Christ and Him crucified.

That does not mean Paul ignored other truths.

It means every truth was centered in the cross.

The cross reveals God's love, exposes Satan's lies, pays for sin, and shows the heart of the gospel.

If the cross is not central, the message becomes distorted.`,
      `3. Jesus reveals the glory of God

Second Corinthians says the glory of God is seen in the face of Jesus Christ.

This is massive.

God's glory is not best understood through human imagination.

It is revealed in Christ.

If we want to know what God is like, we look at Jesus.

The faithful witness must keep pointing people there.`,
      `4. Jesus is the image of the invisible God

Colossians calls Jesus the image of the invisible God.

Hebrews says He is the brightness of God's glory and the express image of His person.

That means Jesus is not a partial picture of God.

He is the clearest revelation of the Father.

Every doctrine must be interpreted in the light of Christ's character.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Center',
      lemma: 'κεφαλή',
      transliteration: 'kephale',
      meaning: 'The main focus, foundation, and organizing point around which everything else is understood.',
      strongs: 'G2776',
      reference: 'Colossians 1:18',
      note: `To keep Christ at the center means every doctrine, prophecy, commandment, and mission must be understood through Jesus.

He is the clearest revelation of God's character and the heart of the faithful witness.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The remnant message is not centered in itself.

It is centered in Christ.

That means the faithful witness must avoid turning identity into an idol.

Yes, God has a people who keep His commandments.

Yes, God has given the testimony of Jesus.

Yes, God restores truth for the final message.

But all of it exists to reveal Jesus.

The commandments show His love in action.

Prophecy reveals His faithfulness in history.

The Spirit of prophecy points back to His Word and forward to His return.

The final message proclaims His everlasting gospel.

The danger is making the remnant the hero.

Wrong move.

Jesus is the hero.

The remnant is a witness.`,
    },
    studyInsightBlocks: [
      {
        type: 'remnantWitnessPattern',
        title: 'Christ at the Center',
        caption: 'The faithful witness does not make itself the center. It points everything back to Jesus.',
        stages: [
          { label: 'Jesus', tagline: 'the faithful and true witness' },
          { label: 'Scripture', tagline: 'testifies of Christ' },
          { label: 'Cross', tagline: "reveals God's love" },
          { label: 'Doctrine', tagline: 'understood through Jesus' },
          { label: 'Mission', tagline: 'point the world to Christ' },
        ],
      },
      {
        type: 'scriptureChain',
        title: 'Christ at the Center',
        references: [
          { reference: 'John 5:39' },
          { reference: '1 Corinthians 2:2' },
          { reference: '2 Corinthians 4:6' },
          { reference: 'Colossians 1:15-20' },
          { reference: 'Hebrews 1:1-3' },
        ],
      },
      {
        type: 'paragraph',
        text: "Takeaway: Every truth entrusted to God's people must be centered in Jesus, the clearest revelation of the Father's character and love.",
      },
    ],
    reflectPrompt: `Is Jesus becoming clearer through the way you study, explain, and live your beliefs?

Think about Bible study, prophecy, Sabbath, obedience, health, church, mission, conversations, and whether your faith points people to Christ or mainly to being right.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, take one belief you care deeply about and put Jesus back at the center.

Ask:

"How does this truth reveal Jesus?"

"How does this connect to the cross?"

"How does this show the Father's character?"

"How can I explain this in a way that makes Christ clearer?"

Then practice saying it simply.

Not to win an argument.

Not to sound deep.

Not to prove your identity.

To help someone see Jesus.

If a doctrine cannot be connected back to Christ, either we do not understand it well enough yet, or we are explaining it badly.

Prayer:

Father, thank You for revealing Yourself fully in Jesus. Keep me from making doctrine, prophecy, identity, or knowledge the center of my faith. Help me search the Scriptures in a way that leads me to Christ. Let every truth I believe reveal Your love more clearly. Make my life a faithful witness that points people to Jesus, not to myself. Amen.`,
    prayer: '',
    completionSummary:
      "Christ is the center of the faithful witness. Scripture, prophecy, law, mission, and final truth all exist to reveal Jesus and the Father's love.",
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'tfwy-l5-q1',
          prompt: 'According to John 5:39, what do the Scriptures testify of?',
          options: ['Jesus', 'Human pride', 'Religious status', "Tradition above God's Word"],
          correctIndex: 0,
          explanation: 'Jesus said the Scriptures testify of Him. Bible study is meant to lead us to Christ.',
        },
        {
          id: 'tfwy-l5-q2',
          prompt: 'According to 1 Corinthians 2:2, what did Paul determine to know among the believers?',
          options: [
            'Jesus Christ and Him crucified',
            'Human wisdom only',
            'Religious fame',
            'Personal superiority',
          ],
          correctIndex: 0,
          explanation: 'Paul centered his message on Jesus Christ and Him crucified.',
        },
        {
          id: 'tfwy-l5-q3',
          prompt: "According to 2 Corinthians 4:6, where is the knowledge of God's glory seen?",
          options: [
            'In the face of Jesus Christ',
            'In human achievement',
            "In the dragon's power",
            'In religious pride',
          ],
          correctIndex: 0,
          explanation: 'Paul says the knowledge of the glory of God is seen in the face of Jesus Christ.',
        },
        {
          id: 'tfwy-l5-q4',
          prompt: 'According to Colossians 1:15, who is Jesus?',
          options: [
            'The image of the invisible God',
            'A distant symbol only',
            'A created idol',
            'A hidden mystery with no revelation',
          ],
          correctIndex: 0,
          explanation: 'Colossians calls Jesus the image of the invisible God, showing that He reveals the Father clearly.',
        },
        {
          id: 'tfwy-l5-q5',
          kind: 'reflection',
          prompt: 'What is one doctrine or belief you need to explain in a more Christ-centered way?',
          explanation:
            'The faithful witness keeps Jesus at the center. Every truth should help people see God\'s character more clearly through Christ.',
        },
      ],
    },
  },
  'obedience-without-force': {
    openingThought: `God does not force obedience.

He invites love.

That matters because forced obedience may control behavior, but it cannot produce a surrendered heart.

Jesus never taught that people should obey because they are being manipulated, threatened, or spiritually cornered.

He said:

"If ye love me, keep my commandments."

That order matters.

Love comes first.

Obedience follows.

The faithful witness reveals the harmony of faith, love, and obedience. God saves by grace, writes His law in the heart, and works in us so obedience becomes the fruit of His love, not the product of religious pressure.`,
    scriptureRef: 'John 14:15',
    scriptureQuote: 'If ye love me, keep my commandments.',
    scriptureAfterPrimary: `Jesus said love for Him leads to keeping His commandments.`,
    scriptureSecondaryRef: '1 John 4:19',
    scriptureSecondaryQuote: 'We love him, because he first loved us.',
    scriptureAfterSecondary: `God always loves first. Our love and obedience respond to His love.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Romans 13:10',
        quote: 'Love worketh no ill to his neighbour: therefore love is the fulfilling of the law.',
      },
      {
        type: 'scripture',
        reference: 'Philippians 2:13',
        quote: 'For it is God which worketh in you both to will and to do of his good pleasure.',
      },
      {
        type: 'scripture',
        reference: 'Hebrews 8:10',
        quote: 'I will put my laws into their mind, and write them in their hearts.',
      },
    ],
    teachingPoints: [
      `1. Obedience begins with love

Jesus said, "If ye love me, keep my commandments."

He did not say, "Keep My commandments so I will love you."

That difference is everything.

Biblical obedience is not the price of God's love.

It is the response to God's love.

The faithful witness does not present obedience as fear-based performance.

It presents obedience as love made visible.`,
      `2. God loves first

First John says we love Him because He first loved us.

God always makes the first move.

Before our surrender, His love was drawing us.

Before our obedience, His grace was reaching us.

Before our faithfulness, His faithfulness was already active.

This keeps obedience humble.

We do not obey to prove we are better.

We obey because we have been loved.`,
      `3. Love fulfills the law

Romans says love does no harm to a neighbor, therefore love fulfills the law.

This shows that God's commandments are not random religious restrictions.

They describe love in action.

True obedience is not cold rule-keeping.

It is a life shaped by love for God and love for others.

If obedience makes us harsh, proud, or loveless, we are doing the right thing in the wrong spirit.`,
      `4. God works obedience into the heart

Philippians says God works in us both to will and to do His good pleasure.

Hebrews says God writes His law in the mind and heart.

This means obedience is not produced by human effort alone.

God changes desire.

God renews the mind.

God gives power to walk differently.

The faithful witness points people to the God who transforms from the inside out.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Obedience',
      lemma: 'ὑπακοή',
      transliteration: 'hupakoe',
      meaning: "Faithful response to God's will, flowing from trust, love, and surrender.",
      strongs: 'G5218',
      reference: 'John 14:15',
      note: `Biblical obedience is not forced compliance.

It is love responding to grace.

God writes His law in the heart so His people can obey from inward transformation, not outward pressure.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `There are two counterfeit versions of obedience.

The first is forced obedience.

This uses fear, shame, pressure, control, and manipulation.

It may produce outward compliance for a while, but it does not reveal God's character.

God does not want robots with religious vocabulary.

The second is rejected obedience.

This says grace means God's commandments no longer matter.

That also misrepresents God.

Grace does not erase love.

Grace restores love.

The true path is obedience without force.

God loves first.

The heart responds.

The Spirit works within.

The law is written in the heart.

The life begins to reflect Jesus.

That is the faithful witness.`,
    },
    studyInsightBlocks: [
      {
        type: 'remnantWitnessPattern',
        title: 'Obedience Without Force',
        caption: 'Obedience is the fruit of love, not the price of salvation.',
        stages: [
          { label: "God's Love", tagline: 'He first loved us' },
          { label: 'Faith', tagline: 'trusts Christ' },
          { label: 'New Covenant', tagline: 'law written in the heart' },
          { label: 'Obedience', tagline: 'love made visible' },
          { label: 'Witness', tagline: "God's character revealed" },
        ],
      },
      {
        type: 'scriptureChain',
        title: 'Obedience Without Force',
        references: [
          { reference: 'John 14:15' },
          { reference: '1 John 4:19' },
          { reference: 'Romans 13:10' },
          { reference: 'Philippians 2:13' },
          { reference: 'Hebrews 8:10' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: God does not force obedience. He loves first, writes His law in the heart, and works in us so obedience becomes the fruit of grace.',
      },
    ],
    reflectPrompt: `Does your obedience usually feel driven by love, fear, pressure, habit, or trust?

Think about Sabbath, worship, prayer, Bible study, moral choices, relationships, and whether your obedience flows from receiving God's love or trying to earn His approval.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, choose one area of obedience and ask what is motivating it.

Ask:

"Am I obeying from fear or love?"

"Am I trying to earn acceptance or respond to grace?"

"Do I believe God is working in me, or am I trying to change myself alone?"

"What would obedience look like if I trusted God's love more deeply?"

Then pray before you act.

Do not just force the behavior.

Bring the heart to God.

That is where the real work happens.

Prayer:

Father, thank You for loving me first. Thank You that obedience is not the price of Your love, but the fruit of receiving it. Write Your law in my heart and change my desires from the inside out. Keep me from fear-based religion and careless rebellion. Teach me to obey from trust, love, and surrender through the power of Your Spirit. Amen.`,
    prayer: '',
    completionSummary:
      'God does not force obedience. He loves first, writes His law in the heart, and works in us so obedience becomes the fruit of grace and love.',
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'tfwy-l6-q1',
          prompt: 'According to John 14:15, what does love for Jesus lead to?',
          options: [
            'Keeping His commandments',
            'Ignoring His words',
            'Replacing His law',
            'Obeying only from fear',
          ],
          correctIndex: 0,
          explanation: 'Jesus said, "If ye love me, keep my commandments," showing that obedience flows from love.',
        },
        {
          id: 'tfwy-l6-q2',
          prompt: 'According to 1 John 4:19, why do we love God?',
          options: [
            'Because He first loved us',
            'Because we earned His love',
            'Because fear created love',
            'Because obedience forced God to love us',
          ],
          correctIndex: 0,
          explanation: 'First John says we love Him because He first loved us. God\'s love comes before our response.',
        },
        {
          id: 'tfwy-l6-q3',
          prompt: 'According to Romans 13:10, what fulfills the law?',
          options: ['Love', 'Pride', 'Fear', 'Control'],
          correctIndex: 0,
          explanation: 'Romans says love does no harm to a neighbor, therefore love is the fulfilling of the law.',
        },
        {
          id: 'tfwy-l6-q4',
          prompt: 'According to Philippians 2:13, who works in believers both to will and to do?',
          options: ['God', 'Human pride', 'Fear alone', 'The dragon'],
          correctIndex: 0,
          explanation: 'Philippians says God works in believers both to will and to do His good pleasure.',
        },
        {
          id: 'tfwy-l6-q5',
          kind: 'reflection',
          prompt: 'What is one area where you need God to change your heart so obedience flows from love?',
          explanation:
            'God writes His law in the heart and works within us so obedience becomes the fruit of grace, not forced compliance.',
        },
      ],
    },
  },
  'truth-with-humility': {
    openingThought: `Truth is powerful.

But truth in the hands of pride becomes dangerous.

God's faithful witness is not called to carry truth like a weapon for ego.

The remnant message is not about proving superiority.

It is about revealing Jesus.

God gives truth because He loves the world.

He restores truth because deception harms people.

He preserves truth so the gospel can be proclaimed clearly.

But the way we carry truth must match the character of the God who gave it.

Truth must be spoken with humility, courage, patience, kindness, and love.

If truth makes us arrogant, we are not carrying it correctly.`,
    scriptureRef: 'Ephesians 4:15',
    scriptureQuote:
      'But speaking the truth in love, may grow up into him in all things, which is the head, even Christ.',
    scriptureAfterPrimary: `Paul says believers are to speak the truth in love so they may grow up into Christ.`,
    scriptureSecondaryRef: '1 Corinthians 8:1',
    scriptureSecondaryQuote: 'Knowledge puffeth up, but charity edifieth.',
    scriptureAfterSecondary: `Paul warns that knowledge can puff up, but love builds up.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: '1 Peter 3:15',
        quote: `Sanctify the Lord God in your hearts.

And be ready always to give an answer to every man that asketh you a reason of the hope that is in you.

With meekness and fear.`,
      },
      {
        type: 'scripture',
        reference: 'Revelation 14:6',
        quote:
          'And I saw another angel fly in the midst of heaven, having the everlasting gospel to preach unto them that dwell on the earth.',
      },
      {
        type: 'scripture',
        reference: 'Matthew 24:14',
        quote: 'And this gospel of the kingdom shall be preached in all the world for a witness unto all nations.',
      },
    ],
    teachingPoints: [
      `1. Truth must be spoken in love

Paul says believers are to speak the truth in love.

That balance matters.

Truth without love becomes harsh.

Love without truth becomes shallow.

God calls His people to both.

The faithful witness does not water down truth to avoid discomfort, but it also does not use truth to crush people.

Christlike truth restores.`,
      `2. Knowledge can make people proud

First Corinthians warns that knowledge can puff up.

That is a serious warning for people who know prophecy, doctrine, Scripture, and end-time truth.

Knowing more does not automatically mean loving better.

If knowledge makes us look down on others, we have turned truth into ego fuel.

And ego fuel burns dirty.

Love builds up.`,
      `3. The faithful witness answers with meekness

Peter says believers should be ready to give an answer, but with meekness and fear.

That means we should be prepared, clear, and biblical.

But also humble.

Meekness does not mean weakness.

It means strength under the control of love.

The goal is not to win the argument.

The goal is to represent Jesus faithfully.`,
      `4. The final message is gospel mission

Revelation 14 begins with the everlasting gospel.

Matthew 24 says the gospel of the kingdom will be preached in all the world as a witness.

That means final truth is not merely information.

It is mission.

God's people are called to carry the gospel to the world in a way that reveals His character.

If people hear our doctrine but cannot see Jesus, we need to fix the witness.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Humility',
      lemma: 'ταπεινοφροσύνη',
      transliteration: 'tapeinophrosune',
      meaning:
        'A surrendered posture that recognizes dependence on God, refuses pride, and treats others with grace.',
      strongs: 'G5012',
      reference: '1 Peter 3:15',
      note: `Biblical humility does not weaken truth.

It protects truth from being misused.

A humble witness can speak clearly without arrogance, correct error without contempt, and point people to Jesus instead of self.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The Faithful Witness has shown the identity and mission of God's remnant people.

They guard the commandments of God.

They hold law and gospel together.

They bear the testimony of Jesus.

They recognize the Spirit of prophecy.

They keep Christ at the center.

They obey from love, not force.

And they speak truth with humility.

This final lesson matters because remnant truth can be mishandled.

A person can know the commandments and still lack love.

A person can talk about prophecy and still sound nothing like Jesus.

A person can defend truth while damaging people.

That is not the faithful witness.

The faithful witness is different.

It holds truth firmly.

It speaks with grace.

It points to Jesus.

It loves people enough to tell the truth, and it loves truth enough to carry it with Christlike character.`,
    },
    studyInsightBlocks: [
      {
        type: 'remnantWitnessPattern',
        title: 'The Faithful Witness',
        caption:
          'The faithful witness preserves truth, reveals Jesus, and carries the gospel with humility and love.',
        stages: [
          { label: 'Commandments of God', tagline: "guarding God's law of love" },
          { label: 'Testimony of Jesus', tagline: 'revealing the Father through Christ' },
          { label: 'Faith of Jesus', tagline: 'trusting Christ, not self' },
          { label: 'Spirit of Prophecy', tagline: 'guidance that points back to Scripture' },
          { label: 'Mission', tagline: 'truth spoken in love to the world' },
        ],
      },
      {
        type: 'scriptureChain',
        title: 'Truth With Humility',
        references: [
          { reference: 'Ephesians 4:15' },
          { reference: '1 Corinthians 8:1' },
          { reference: '1 Peter 3:15' },
          { reference: 'Revelation 14:6-12' },
          { reference: 'Matthew 24:14' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: God calls His people to hold truth without arrogance, speak with humility, and point the world to Jesus through the everlasting gospel.',
      },
    ],
    reflectPrompt: `Does the way you carry truth make Jesus look more beautiful or more burdensome?

Think about your tone, conversations, online posts, Bible studies, debates, correction, and whether people experience humility and love when you speak about what you believe.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, choose one truth you care deeply about and practice explaining it with humility.

Ask:

"Can I say this clearly without sounding proud?"

"Can I correct error without attacking people?"

"Can I make Jesus the center instead of making myself look right?"

"Can I speak this as good news?"

Then write or say one simple sentence that connects that truth back to Jesus.

For example:

The Sabbath is not just a rule. It reveals Jesus as Creator, Redeemer, and giver of rest.

God's law is not legalism. It shows what love looks like in real life.

Prophecy is not about fear. It shows that God tells the truth because He wants people free.

Truth carried well should smell like Christ.

If it smells like pride, clean the delivery.

Prayer:

Father, thank You for preserving truth because You love the world. Help me speak truth in love and carry conviction with humility. Keep me from pride, harshness, fear, and spiritual superiority. Let the commandments of God, the testimony of Jesus, and the everlasting gospel shape my life. Make me a faithful witness who points people to Christ with clarity, courage, and love. Amen.`,
    prayer: '',
    completionSummary:
      "You have completed The Faithful Witness. God's remnant people guard His commandments, bear the testimony of Jesus, keep Christ at the center, and carry truth to the world with humility and love.",
    seriesCompleteScreen: {
      title: 'Study Complete',
      message:
        "You have completed The Faithful Witness. God's remnant people guard His commandments, bear the testimony of Jesus, keep Christ at the center, and carry truth to the world with humility and love.",
      primaryCta: { label: 'Back to Foundations Path', href: '/paths/foundations' },
      secondaryCta: {
        label: 'Review this study',
        href: '/study-library/the-faithful-witness',
      },
    },
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'tfwy-l7-q1',
          prompt: 'According to Ephesians 4:15, how should believers speak the truth?',
          options: ['In love', 'In pride', 'With contempt', 'Without patience'],
          correctIndex: 0,
          explanation: 'Paul says believers are to speak the truth in love so they may grow up into Christ.',
        },
        {
          id: 'tfwy-l7-q2',
          prompt: 'According to 1 Corinthians 8:1, what can knowledge do without love?',
          options: ['Puff up', 'Always humble people', 'Replace charity', 'Remove the need for grace'],
          correctIndex: 0,
          explanation: 'Paul warns that knowledge can puff up, but love builds up.',
        },
        {
          id: 'tfwy-l7-q3',
          prompt: 'According to 1 Peter 3:15, how should believers give an answer for their hope?',
          options: ['With meekness and fear', 'With arrogance', 'With hostility', 'With mockery'],
          correctIndex: 0,
          explanation: 'Peter says believers should be ready to give an answer with meekness and reverence.',
        },
        {
          id: 'tfwy-l7-q4',
          prompt: 'According to Revelation 14:6, what message goes to the world?',
          options: [
            'The everlasting gospel',
            'A message of human pride',
            'A message without Jesus',
            'A message only for one group',
          ],
          correctIndex: 0,
          explanation:
            'Revelation says the everlasting gospel is preached to every nation, kindred, tongue, and people.',
        },
        {
          id: 'tfwy-l7-q5',
          kind: 'reflection',
          prompt: 'What is one way you can speak truth with more humility and love this week?',
          explanation:
            'The faithful witness holds truth clearly, but carries it with the humility, compassion, and character of Jesus.',
        },
      ],
    },
  },
}
