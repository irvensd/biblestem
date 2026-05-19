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

/** Guided reader lessons for "The Second Coming" (Foundations). */
export const theSecondComingSeriesLessonLibrary: Record<string, LessonReaderContent> = {
  'ready-for-the-bridegroom': {
    openingThought: `Readiness for Jesus' return is not panic.

It is love awake.

Jesus never called His people to live in fear-based obsession, date-setting, or spiritual anxiety.

He called them to watch.

To be faithful.

To keep their lamps burning.

To live awake while the world sleeps.

The Bridegroom is coming.

But readiness is not about acting religious at the last minute.

It is about a heart that has learned to love Him now.

The people who are ready for Jesus are not ready because they cracked every prophecy detail.

They are ready because they know Him, trust Him, love Him, and walk with Him.`,
    scriptureRef: 'Matthew 25:6',
    scriptureQuote: `And at midnight there was a cry made, Behold, the bridegroom cometh; go ye out to meet him.`,
    scriptureAfterPrimary: `The midnight cry announces the bridegroom and calls God's people to go out to meet him.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Matthew 24:42',
        quote: 'Watch therefore: for ye know not what hour your Lord doth come.',
      },
      {
        type: 'scripture',
        reference: 'Matthew 24:44',
        quote: 'Therefore be ye also ready: for in such an hour as ye think not the Son of man cometh.',
      },
      {
        type: 'scripture',
        reference: 'Matthew 25:1-4',
        quote: `Then shall the kingdom of heaven be likened unto ten virgins, which took their lamps, and went forth to meet the bridegroom.

They that were foolish took their lamps, and took no oil with them.

But the wise took oil in their vessels with their lamps.`,
      },
      {
        type: 'scripture',
        reference: 'Luke 12:35-36',
        quote: `Let your loins be girded about, and your lights burning.

And ye yourselves like unto men that wait for their lord.`,
      },
      {
        type: 'scripture',
        reference: '1 John 3:2-3',
        quote: `When he shall appear, we shall be like him; for we shall see him as he is.

And every man that hath this hope in him purifieth himself, even as he is pure.`,
      },
      {
        type: 'scripture',
        reference: '2 Peter 3:11-12',
        quote: `What manner of persons ought ye to be in all holy conversation and godliness.

Looking for and hasting unto the coming of the day of God.`,
      },
    ],
    teachingPoints: [
      `1. Readiness begins with watchfulness

Jesus said, "Watch therefore."

This does not mean anxious staring at world events all day.

It means spiritual alertness.

A watchful believer is awake to God's presence, awake to temptation, awake to mission, and awake to the promise of Christ's return.

Watchfulness is not paranoia.

It is faith paying attention.`,
      `2. Readiness requires oil in the lamp

In the parable of the ten virgins, all had lamps.

But only the wise had oil.

That matters.

A lamp without oil may look prepared for a while, but it cannot keep burning.

Oil points to the inward work of the Holy Spirit.

External religion is not enough.

Borrowed faith is not enough.

Spiritual appearance is not enough.

The heart must be filled with the life of God.`,
      `3. Readiness is faithful daily living

Jesus does not call His people to last-minute religious scrambling.

He calls them to live faithfully while waiting.

Readiness is built in ordinary choices:

Prayer.

Obedience.

Love.

Forgiveness.

Service.

Integrity.

Sabbath rest.

Bible study.

Quiet surrender.

The crisis reveals what daily life has been forming.`,
      `4. Readiness is hope that purifies

First John says everyone who has this hope purifies himself.

Hope is not passive.

Hope shapes the life.

If we truly believe Jesus is coming, we will not treat sin casually.

We will not waste our lives on shallow things.

We will not sleepwalk through our calling.

The hope of Christ's return cleans the lens and sharpens the life.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Ready',
      lemma: 'ἕτοιμος',
      transliteration: 'hetoimos',
      meaning: 'Prepared, awake, faithful, and responsive to the coming of Christ.',
      strongs: 'G2092',
      reference: 'Matthew 24:44',
      note: `Biblical readiness is not panic or performance.

It is Spirit-filled watchfulness, love-shaped obedience, and daily faithfulness while waiting for the Bridegroom.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The parable of the ten virgins is serious because it shows the danger of looking ready without actually being ready.

All ten were waiting.

All ten had lamps.

All ten expected the bridegroom.

But only five had oil.

That means end-time readiness cannot be reduced to religious identity, prophecy knowledge, or outward appearance.

The real question is deeper:

Is the Spirit forming Christ in me?

Am I living in fellowship with Jesus?

Is my love awake?

Is my obedience real?

Is my faith personal or borrowed?

Is my lamp burning because there is oil, or am I just holding religious equipment?

That is not meant to scare you.

It is meant to sober you.

Readiness is not panic.

Readiness is love kept alive by the Spirit.`,
    },
    studyInsightBlocks: [
      {
        type: 'readinessHeartCheck',
        title: 'Ready for the Bridegroom',
        reflectionPrompt: 'Readiness is not panic. Readiness is love awake.',
        caption: 'Jesus calls His people to watchfulness that grows out of love.',
        cards: [
          {
            label: 'Watchful',
            description: 'Awake to the nearness of Christ\'s return.',
          },
          {
            label: 'Faithful',
            description: 'Living with loyalty in daily life.',
          },
          {
            label: 'Loving',
            description: 'Reflecting the character of Jesus.',
          },
          {
            label: 'Spirit-Filled',
            description: 'Prepared by the Spirit, not self-confidence.',
          },
          {
            label: 'Hopeful',
            description: 'Looking for Jesus with joy, not fear.',
          },
        ],
      },
      {
        type: 'scriptureChain',
        title: 'Ready for the Bridegroom',
        references: [
          { reference: 'Matthew 24:42-44' },
          { reference: 'Matthew 25:1-13' },
          { reference: 'Luke 12:35-40' },
          { reference: '1 John 3:2-3' },
          { reference: '2 Peter 3:11-14' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: Readiness for Jesus\' return means living in faithful love, not fear, speculation, or spiritual sleep.',
      },
    ],
    reflectPrompt: `Are you spiritually awake, or are you carrying a lamp without oil?

Think about your prayer life, Bible study, obedience, love, mission, Sabbath, distractions, and whether your faith is personally alive or mostly religious routine.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, check your oil.

Not your image.

Not your religious vocabulary.

Your actual walk with Jesus.

Ask:

"Am I spending real time with Christ?"

"Is the Holy Spirit shaping my character?"

"Am I obeying what God has already shown me?"

"Is my love growing warmer or colder?"

"Am I watching with hope or drifting in distraction?"

Then choose one practical readiness step:

Set a daily prayer time.

Read Matthew 25 slowly.

Apologize where pride has ruled.

Serve someone quietly.

Keep Sabbath with intention.

Remove one distraction that is dulling your faith.

Readiness is not built by hype.

It is built by faithful communion with Jesus.

Prayer:

Jesus, thank You for promising to return as the faithful Bridegroom. Wake my heart where I have grown sleepy. Fill me with Your Spirit. Keep my lamp burning with real faith, love, and obedience. Deliver me from panic, spiritual performance, and empty routine. Make me ready through daily fellowship with You. Amen.`,
    prayer: '',
    completionSummary:
      'Readiness for Jesus\' return is not panic. It is Spirit-filled watchfulness, faithful love, and a heart kept awake for the Bridegroom.',
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'tsc-l6-q1',
          prompt: 'According to Matthew 24:42, what does Jesus tell His people to do?',
          options: ['Watch', 'Panic', 'Set dates', 'Ignore His return'],
          correctIndex: 0,
          explanation:
            'Jesus said, "Watch therefore," calling His people to spiritual alertness and readiness.',
        },
        {
          id: 'tsc-l6-q2',
          prompt: 'In Matthew 25, what did the wise virgins have with their lamps?',
          options: ['Oil', 'Silver coins', 'Political power', 'Extra clothing only'],
          correctIndex: 0,
          explanation:
            'The wise virgins took oil with their lamps, pointing to inward preparation and the Spirit\'s work.',
        },
        {
          id: 'tsc-l6-q3',
          prompt: 'According to Matthew 25:6, what cry was made at midnight?',
          options: [
            'Behold, the bridegroom cometh',
            'The bridegroom is cancelled',
            'There is no wedding',
            'Go back to sleep forever',
          ],
          correctIndex: 0,
          explanation:
            'The midnight cry announced, "Behold, the bridegroom cometh; go ye out to meet him."',
        },
        {
          id: 'tsc-l6-q4',
          prompt: 'According to 1 John 3:3, what does the hope of Christ\'s appearing lead believers to do?',
          options: ['Purify themselves', 'Ignore holiness', 'Stop trusting Jesus', 'Become careless'],
          correctIndex: 0,
          explanation:
            'John says everyone who has this hope purifies himself, even as Christ is pure.',
        },
        {
          id: 'tsc-l6-q5',
          kind: 'reflection',
          prompt: 'What is one practical step you can take this week to keep your lamp burning?',
          explanation:
            'Readiness is not panic. It is Spirit-filled watchfulness, love-shaped obedience, and daily fellowship with Jesus.',
        },
      ],
    },
  },
  'forever-with-the-lord': {
    openingThought: `The Second Coming does not end with Jesus appearing.

It ends with His people being with Him.

That is the point.

Not fear.

Not speculation.

Not spiritual suspense.

Fellowship.

Paul says, "And so shall we ever be with the Lord."

That sentence is the heartbeat of Christian hope.

Jesus returns to end separation.

Separation from loved ones.

Separation from peace.

Separation from wholeness.

Separation from God's visible presence.

The Second Coming brings the redeemed into eternal fellowship with Christ.

The story ends with Jesus receiving His people.

And then, finally, nothing separates us anymore.`,
    scriptureRef: '1 Thessalonians 4:17-18',
    scriptureQuote: `Then we which are alive and remain shall be caught up together with them in the clouds, to meet the Lord in the air.

And so shall we ever be with the Lord.

Wherefore comfort one another with these words.`,
    scriptureAfterPrimary: `Paul promises that believers who meet the Lord will be forever with Him, and he calls the church to comfort one another with this hope.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'John 14:3',
        quote: `And if I go and prepare a place for you, I will come again, and receive you unto myself.

That where I am, there ye may be also.`,
      },
      {
        type: 'scripture',
        reference: 'Revelation 19:6-7',
        quote: `Alleluia: for the Lord God omnipotent reigneth.

Let us be glad and rejoice, and give honour to him: for the marriage of the Lamb is come.`,
      },
      {
        type: 'scripture',
        reference: 'Revelation 19:9',
        quote: 'Blessed are they which are called unto the marriage supper of the Lamb.',
      },
      {
        type: 'scripture',
        reference: 'Revelation 21:1-4',
        quote: `And I saw a new heaven and a new earth.

And God shall wipe away all tears from their eyes.

And there shall be no more death, neither sorrow, nor crying, neither shall there be any more pain.`,
      },
      {
        type: 'scripture',
        reference: 'Romans 8:18',
        quote: 'For I reckon that the sufferings of this present time are not worthy to be compared with the glory which shall be revealed in us.',
      },
      {
        type: 'scripture',
        reference: 'Romans 8:23',
        quote: 'Even we ourselves groan within ourselves, waiting for the adoption, to wit, the redemption of our body.',
      },
    ],
    teachingPoints: [
      `1. The redeemed will be forever with the Lord

Paul says the faithful will meet the Lord and forever be with Him.

That is the center of the promise.

Heaven is not mainly about location.

It is about presence.

Being with Jesus is the reward.

The Second Coming brings God's people into unbroken fellowship with the One who loved them, died for them, rose for them, interceded for them, and returned for them.`,
      `2. The Second Coming fulfills Jesus' promise

In John 14, Jesus said He would come again and receive His people to Himself.

First Thessalonians shows that promise fulfilled.

Jesus does not forget His bride.

He does not abandon His people.

He returns.

The Bridegroom keeps His word.

The promise becomes reunion.`,
      `3. The marriage supper celebrates covenant love

Revelation 19 describes the marriage supper of the Lamb.

This is not random symbolism.

It is the celebration of Christ and His redeemed people.

The long story of salvation reaches a moment of joy, victory, and fellowship.

The Bridegroom returns.

The bride is gathered.

The covenant love of God triumphs.`,
      `4. The Second Coming begins final restoration

Revelation 21 points forward to a new heaven and new earth.

God wipes away tears.

Death ends.

Sorrow ends.

Crying ends.

Pain ends.

The return of Jesus begins the final restoration of all things.

The world does not heal itself.

Jesus comes to make all things new.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Comfort',
      lemma: 'παρακαλέω',
      transliteration: 'parakaleo',
      meaning: 'Encouragement, hope, strength, and reassurance given to someone in sorrow or uncertainty.',
      strongs: 'G3870',
      reference: '1 Thessalonians 4:18',
      note: `Paul says to comfort one another with the promise of Christ's return.

The Second Coming is not meant to produce fear in believers.

It is meant to give hope, strengthen faith, and remind us that we will be forever with the Lord.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The Second Coming brings together every major hope of Scripture.

The Bridegroom returns.

The promise is fulfilled.

The signs give way to the Savior.

The dead in Christ rise.

The living faithful are changed.

The redeemed are gathered.

The marriage supper is celebrated.

God's people are forever with the Lord.

This is why the doctrine matters.

Without the Second Coming, evil continues.

Death continues.

Grief continues.

Injustice continues.

Separation continues.

But because Jesus returns, the story has a real ending.

Not an emotional ending.

Not a symbolic ending.

A visible, personal, glorious, resurrection-filled ending.

And for believers, that ending is actually a beginning.

Forever with the Lord.

That is not escape.

That is restoration.`,
    },
    studyInsightBlocks: [
      {
        type: 'secondComingStudyRecap',
        title: 'The Second Coming',
        caption: 'The story ends with Jesus receiving His people into eternal fellowship.',
        sections: [
          {
            label: 'Bridegroom Promise',
            description: 'Jesus returns because He loves His people.',
          },
          {
            label: 'Visible Return',
            description: 'Every eye will see Him.',
          },
          {
            label: 'Signs of Nearness',
            description: 'The signs awaken hope and readiness.',
          },
          {
            label: 'Resurrection Hope',
            description: 'The dead in Christ rise and the living faithful are changed.',
          },
          {
            label: 'Eternal Fellowship',
            description: 'The redeemed will be forever with the Lord.',
          },
        ],
        highlightedIndices: [4],
      },
      {
        type: 'secondComingLoveStory',
        title: 'The Bridegroom\'s Promise',
        caption:
          'The Second Coming is the promised return of the faithful Bridegroom for His beloved people.',
        stages: [
          {
            label: 'Drawn by Love',
            description: 'Jesus draws hearts by revealing His love.',
          },
          {
            label: 'Covenant Relationship',
            description: 'Christ gives Himself for His church.',
          },
          {
            label: 'Preparing a Place',
            description: 'Jesus promises a place in His Father\'s house.',
          },
          {
            label: 'Returning for His Bride',
            description: 'He comes again to receive His people.',
          },
          {
            label: 'Eternal Fellowship',
            description: 'The redeemed will be forever with the Lord.',
          },
        ],
        highlightedIndices: [4],
      },
      {
        type: 'resurrectionHopeFlow',
        title: 'The Resurrection Hope',
        caption: 'The Second Coming turns grief into resurrection hope.',
        stages: [
          {
            label: 'Jesus Descends',
            description: 'The Lord descends from heaven.',
          },
          {
            label: 'Trumpet Sounds',
            description: 'The trumpet of God announces His return.',
          },
          {
            label: 'Dead in Christ Rise',
            description: 'Believers who died in Christ are resurrected.',
          },
          {
            label: 'Living Faithful Transformed',
            description: 'The living faithful are changed.',
          },
          {
            label: 'Together With the Lord',
            description: 'All the redeemed meet the Lord and remain with Him forever.',
          },
        ],
        highlightedIndices: [4],
      },
      {
        type: 'scriptureChain',
        title: 'Forever With the Lord',
        references: [
          { reference: '1 Thessalonians 4:17-18' },
          { reference: 'Revelation 19:6-9' },
          { reference: 'Revelation 21:1-5' },
          { reference: 'John 14:3' },
          { reference: 'Romans 8:18-23' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: The Second Coming brings the church into eternal fellowship with Jesus and begins the final restoration of all things.',
      },
    ],
    reflectPrompt: `What part of being forever with the Lord gives you the most hope right now?

Think about reunion, resurrection, the end of death, the end of pain, seeing Jesus, the marriage supper of the Lamb, and the promise that separation will not last forever.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, let the hope of being forever with the Lord reshape one area of your life.

Ask:

"What am I treating as permanent that Jesus says is temporary?"

"What grief needs resurrection hope?"

"What fear needs the promise of His return?"

"What priority needs to change because Jesus is coming?"

"What relationship needs more love because eternity is real?"

Then choose one action.

Comfort someone.

Forgive someone.

Pray with hope.

Stop living like this world is the whole story.

Make one decision that reflects eternity.

The Second Coming is not just something to believe.

It is something that should reframe everything.

Prayer:

Jesus, thank You for promising that Your people will be forever with You. Thank You that death, sorrow, crying, and pain will not last forever. Strengthen my hope in Your return. Comfort my heart where I grieve. Teach me to live with eternal perspective, faithful love, and readiness for the day You receive Your people to Yourself. Amen.`,
    prayer: '',
    completionSummary:
      'The Second Coming brings the redeemed into eternal fellowship with Jesus and begins the final restoration of all things.',
    seriesCompleteScreen: {
      title: 'Study Complete',
      message:
        'You have completed The Second Coming. Jesus is the faithful Bridegroom who will return personally, visibly, gloriously, and lovingly to resurrect His people, restore all things, and bring the redeemed into eternal fellowship with Him.',
      primaryCta: { label: 'Back to Foundations Path', href: '/paths/foundations' },
      secondaryCta: {
        label: 'Review this study',
        href: '/study-library/the-second-coming',
      },
    },
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'tsc-l7-q1',
          prompt: 'According to 1 Thessalonians 4:17, what will happen after the redeemed meet the Lord?',
          options: [
            'They will ever be with the Lord',
            'They will be separated forever',
            'They will return to hopelessness',
            'They will miss the promise',
          ],
          correctIndex: 0,
          explanation:
            'Paul says, "And so shall we ever be with the Lord," showing that the Second Coming brings eternal fellowship with Jesus.',
        },
        {
          id: 'tsc-l7-q2',
          prompt: 'According to 1 Thessalonians 4:18, what should believers do with these words?',
          options: ['Comfort one another', 'Terrify one another', 'Ignore one another', 'Argue without hope'],
          correctIndex: 0,
          explanation:
            'Paul says to comfort one another with the promise of Christ\'s return and the resurrection hope.',
        },
        {
          id: 'tsc-l7-q3',
          prompt: 'According to John 14:3, why does Jesus come again?',
          options: [
            'To receive His people unto Himself',
            'To abandon His people',
            'To keep them confused',
            'To cancel His promise',
          ],
          correctIndex: 0,
          explanation:
            'Jesus says He will come again and receive His people to Himself, so they may be where He is.',
        },
        {
          id: 'tsc-l7-q4',
          prompt: 'According to Revelation 21:4, what will no longer exist?',
          options: [
            'Death, sorrow, crying, and pain',
            'God\'s love',
            'Worship',
            'Eternal fellowship',
          ],
          correctIndex: 0,
          explanation:
            'Revelation says God will wipe away every tear, and there will be no more death, sorrow, crying, or pain.',
        },
        {
          id: 'tsc-l7-q5',
          kind: 'reflection',
          prompt:
            'What is one way the hope of being forever with the Lord can change how you live this week?',
          explanation:
            'The Second Coming gives comfort, resurrection hope, and eternal perspective. Jesus returns to receive His people into unbroken fellowship with Himself.',
        },
      ],
    },
  },
}
