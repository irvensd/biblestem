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

/** Guided reader lessons for "The First Angel's Message" (Foundations). */
export const theFirstAngelsMessageSeriesLessonLibrary: Record<string, LessonReaderContent> = {
  'to-every-person-on-earth': {
    openingThought: `God's final message is not local.

It is global.

Revelation 14 shows three angels flying in the midst of heaven, proclaiming God's last message to humanity before the return of Jesus.

The first angel begins with the everlasting gospel.

That matters.

God's final message does not begin with fear.

It does not begin with arguments.

It does not begin with religious superiority.

It begins with good news.

Before God calls the world to fear Him, give Him glory, recognize the judgment hour, and worship the Creator, He first announces the everlasting gospel.

That means the first angel's message is not bad news with religious seasoning.

It is good news for every person on earth.`,
    scriptureRef: 'Revelation 14:6-7',
    scriptureQuote: `And I saw another angel fly in the midst of heaven, having the everlasting gospel to preach unto them that dwell on the earth.

And to every nation, and kindred, and tongue, and people.

Saying with a loud voice, Fear God, and give glory to him; for the hour of his judgment is come.

And worship him that made heaven, and earth, and the sea, and the fountains of waters.`,
    scriptureAfterPrimary: `The first angel carries the everlasting gospel to every nation, kindred, tongue, and people.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Matthew 24:14',
        quote:
          'And this gospel of the kingdom shall be preached in all the world for a witness unto all nations; and then shall the end come.',
      },
      {
        type: 'scripture',
        reference: 'Mark 16:15',
        quote: 'Go ye into all the world, and preach the gospel to every creature.',
      },
      {
        type: 'scripture',
        reference: 'Acts 1:8',
        quote: 'Ye shall be witnesses unto me... unto the uttermost part of the earth.',
      },
      {
        type: 'scripture',
        reference: 'Revelation 14:14',
        quote:
          'And I looked, and behold a white cloud, and upon the cloud one sat like unto the Son of man.',
      },
    ],
    teachingPoints: [
      `1. The message is worldwide

Revelation says the message goes to every nation, kindred, tongue, and people.

This is not a message for one ethnicity, culture, country, or church bubble.

It is for the whole world.

God's heart is global because His love is global.

The first angel's message reveals that before the end comes, God makes sure the world hears the truth about who He is and what He has done in Christ.`,
      `2. The message begins with the everlasting gospel

The first angel has the everlasting gospel.

That means God's final proclamation begins with good news.

The gospel is not merely advice about how to behave.

It is the announcement of what God has done through Jesus.

The message begins with God's faithful love, not human performance.

That is the proper foundation for everything else.`,
      `3. The message has five parts

Revelation 14:6-7 gives five major parts:

The everlasting gospel.

Fear God.

Give glory to Him.

The hour of His judgment has come.

Worship Him who made heaven and earth.

Each part matters.

Together, they form a complete end-time message centered in God's character, Christ's gospel, judgment-hour confidence, and Creator worship.`,
      `4. The message prepares the world for Jesus' return

Revelation 14 moves from the three angels' messages to the coming of the Son of Man on the cloud.

That means this message prepares the world for the return of Jesus.

God is not trying to sneak the second coming onto the calendar like a surprise meeting.

He sends a clear message first.

The gospel goes out.

The world is invited.

The truth is made plain.

Then Jesus comes.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Gospel',
      lemma: 'εὐαγγέλιον',
      transliteration: 'euangelion',
      meaning: 'Good news, especially the good news of God\'s saving love revealed through Jesus Christ.',
      strongs: 'G2098',
      reference: 'Revelation 14:6',
      note: `The first angel's message begins with the everlasting gospel because every part of God's final message must be understood through the good news of Jesus.

Fear, glory, judgment, and worship all make sense only when the gospel comes first.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The first angel's message is often misunderstood because people skip the first phrase.

They hear:

Fear God.

Judgment has come.

Worship.

And they immediately assume the message is heavy, threatening, or fear-based.

But Revelation starts somewhere else.

It starts with the everlasting gospel.

That means the entire message must be interpreted through the gospel.

Fear God means awe in response to His love.

Give glory means reveal the beauty of His character.

Judgment means God is setting things right through Christ.

Worship the Creator means return to the One who made us, sustains us, redeems us, and gives us rest.

So the first angel's message is not a panic announcement.

It is a gospel announcement with end-time urgency.`,
    },
    studyInsightBlocks: [
      {
        type: 'firstAngelsMessageBreakdown',
        title: 'The First Angel\'s Message',
        subtitle: 'Revelation 14:6-7',
        caption:
          'The first angel\'s message is God\'s final gospel call to the whole world.',
      },
      {
        type: 'scriptureChain',
        title: 'To Every Person on Earth',
        references: [
          { reference: 'Revelation 14:6-7' },
          { reference: 'Matthew 24:14' },
          { reference: 'Mark 16:15' },
          { reference: 'Acts 1:8' },
          { reference: 'Revelation 14:14-20' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: The first angel\'s message is a worldwide gospel proclamation that prepares every person on earth for the return of Jesus.',
      },
    ],
    reflectPrompt: `When you think about the first angel's message, do you hear good news first or fear first?

Think about how the everlasting gospel shapes the meaning of fear God, give glory, judgment, and worship the Creator.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, practice putting the gospel first.

When you talk about prophecy, judgment, Sabbath, obedience, or worship, ask:

"Did I start with Jesus?"

"Did I make the good news clear?"

"Did I present God as faithful, loving, and trustworthy?"

"Would someone hearing this feel invited to Christ or simply warned about danger?"

The first angel's message is urgent, but urgency without gospel becomes pressure.

Do not just sound serious.

Sound like someone who has good news.

Prayer:

Father, thank You for sending a message to every nation, kindred, tongue, and people. Thank You that Your final message begins with the everlasting gospel. Help me understand it clearly, receive it deeply, and share it faithfully. Teach me to speak of prophecy, judgment, worship, and obedience through the good news of Jesus. Make my life a witness to Your love. Amen.`,
    prayer: '',
    completionSummary:
      'The first angel\'s message is God\'s final gospel call to every person on earth. It begins with the everlasting gospel and prepares the world for Jesus\' return.',
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'fam-l1-q1',
          prompt: 'According to Revelation 14:6, what message does the first angel have?',
          options: [
            'The everlasting gospel',
            'A message of human pride',
            'A message without Jesus',
            'A message only for one nation',
          ],
          correctIndex: 0,
          explanation:
            'Revelation says the first angel has the everlasting gospel to preach to those who dwell on the earth.',
        },
        {
          id: 'fam-l1-q2',
          prompt: 'According to Revelation 14:6, who is the message for?',
          options: [
            'Every nation, kindred, tongue, and people',
            'Only one local city',
            'Only one family',
            'No one on earth',
          ],
          correctIndex: 0,
          explanation:
            'The first angel\'s message is worldwide, going to every nation, kindred, tongue, and people.',
        },
        {
          id: 'fam-l1-q3',
          prompt: 'According to Revelation 14:7, what are people called to do?',
          options: [
            'Fear God, give Him glory, recognize the judgment hour, and worship the Creator',
            'Ignore God and worship the dragon',
            'Reject the gospel',
            'Trust human tradition above Scripture',
          ],
          correctIndex: 0,
          explanation:
            'Revelation 14:7 gives the major parts of the first angel\'s message: fear God, give Him glory, recognize the judgment hour, and worship the Creator.',
        },
        {
          id: 'fam-l1-q4',
          prompt: 'According to Matthew 24:14, what must be preached in all the world before the end comes?',
          options: [
            'The gospel of the kingdom',
            'Human opinions',
            'Fear without gospel',
            'A message with no hope',
          ],
          correctIndex: 0,
          explanation:
            'Jesus said the gospel of the kingdom would be preached in all the world for a witness before the end comes.',
        },
        {
          id: 'fam-l1-q5',
          kind: 'reflection',
          prompt: 'How can you make sure the gospel comes first when you explain Bible prophecy?',
          explanation:
            'The first angel\'s message begins with the everlasting gospel. Every other part of the message must be understood through Jesus and His good news.',
        },
      ],
    },
  },
  'the-everlasting-gospel': {
    openingThought: `The first angel's message begins with the everlasting gospel.

That word gospel means good news.

Not good advice.

Not spiritual pressure.

Not "try harder and maybe God will tolerate you."

Good news.

And Revelation says this gospel is everlasting.

That means it reveals something about God that has always been true and always will be true.

God is faithful love.

He does not become loving because we behave.

He does not stop being loving because we fail.

In Jesus, God has shown the universe what His heart has always been like.

The everlasting gospel is the good news that God is faithful to love, save, forgive, restore, and remain righteous even at great cost to Himself.`,
    scriptureRef: 'Revelation 14:6',
    scriptureQuote: `And I saw another angel fly in the midst of heaven, having the everlasting gospel to preach unto them that dwell on the earth.

And to every nation, and kindred, and tongue, and people.`,
    scriptureAfterPrimary: `The first angel proclaims the everlasting gospel to every nation, kindred, tongue, and people.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Jeremiah 31:3',
        quote: `Yea, I have loved thee with an everlasting love.

Therefore with lovingkindness have I drawn thee.`,
      },
      {
        type: 'scripture',
        reference: 'Romans 1:16-17',
        quote: `For I am not ashamed of the gospel of Christ: for it is the power of God unto salvation to every one that believeth.

For therein is the righteousness of God revealed from faith to faith.`,
      },
      {
        type: 'scripture',
        reference: 'Romans 3:23-24',
        quote: `For all have sinned, and come short of the glory of God.

Being justified freely by his grace through the redemption that is in Christ Jesus.`,
      },
      {
        type: 'scripture',
        reference: 'Romans 3:26',
        quote: 'That he might be just, and the justifier of him which believeth in Jesus.',
      },
      {
        type: 'scripture',
        reference: '1 Corinthians 15:3-4',
        quote: `For I delivered unto you first of all that which I also received, how that Christ died for our sins according to the scriptures;

And that he was buried, and that he rose again the third day according to the scriptures.`,
      },
    ],
    teachingPoints: [
      `1. The gospel is good news about God

The gospel is not mainly a list of things we must do to make God love us.

It is the announcement of who God is and what He has done in Jesus.

Revelation calls it everlasting because God's love is not temporary.

Jeremiah says God loves with an everlasting love.

The gospel tells us that God's faithful love has always been His character.`,
      `2. The gospel reveals God's righteousness

Romans says the gospel reveals the righteousness of God.

Righteousness is not just rule-keeping.

It is God's faithful, right, covenant love toward sinners.

God does what is right for others even when it costs Him.

At the cross, we see the righteousness of God revealed clearly.

He does not ignore sin.

He does not abandon sinners.

He gives Himself to save.`,
      `3. The gospel justifies sinners by grace

Romans says all have sinned and come short of God's glory.

That is the bad news.

But the gospel says we are justified freely by His grace through Jesus.

Justified means God gives believers a right standing before Him.

Not because we manufactured innocence.

Not because we cleaned ourselves up enough.

But because Christ gave Himself for us.`,
      `4. The gospel centers on Christ crucified and risen

Paul summarizes the gospel simply:

Christ died for our sins.

He was buried.

He rose again.

The cross shows God's self-sacrificing love.

The resurrection shows His victory over sin and death.

The everlasting gospel is not abstract theology.

It is Jesus giving Himself for humanity and rising again to save completely.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Everlasting',
      lemma: 'αἰώνιος',
      transliteration: 'aionios',
      meaning: 'Eternal, lasting forever, without beginning or end in God\'s character.',
      strongs: 'G166',
      reference: 'Revelation 14:6',
      note: `The everlasting gospel reveals the eternal truth of God's faithful love.

Jesus did not make God loving.

Jesus revealed that God has always been love.

The cross shows what God's love looks like when it meets human sin.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The first angel's message starts with the everlasting gospel because everything else depends on it.

Fear God makes sense only in light of the gospel.

Giving glory to God makes sense only when we see His good character.

Judgment becomes good news only when we know the Judge is righteous and loving.

Worship becomes beautiful only when we know the Creator is also the Redeemer.

The everlasting gospel tells us that God is relationally faithful.

He keeps loving.

He keeps reaching.

He keeps drawing.

He keeps forgiving.

He keeps working to restore.

At the cross, Jesus answered the deepest question in the universe:

Does God love others more than Himself?

Calvary answered yes.

The gospel is not God saving His reputation with a speech.

It is God revealing His character through sacrifice.`,
    },
    studyInsightBlocks: [
      {
        type: 'everlastingGospelFlow',
        title: 'The Everlasting Gospel',
        caption: 'The everlasting gospel reveals the kind of God God is.',
      },
      {
        type: 'scriptureChain',
        title: 'The Everlasting Gospel',
        references: [
          { reference: 'Revelation 14:6' },
          { reference: 'Jeremiah 31:3' },
          { reference: 'Romans 1:16-17' },
          { reference: 'Romans 3:20-31' },
          { reference: '1 Corinthians 15:1-4' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: The everlasting gospel is the good news of God\'s faithful love revealed in Jesus Christ, especially through His death and resurrection.',
      },
    ],
    reflectPrompt: `Do you usually think of the gospel as good news about what God has done, or as advice about what you need to do?

Think about grace, guilt, performance, assurance, the cross, God's righteousness, and whether your faith begins with God's love or your effort.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, practice explaining the gospel in one clear sentence.

Use this structure:

"The gospel is good news because God has…"

Then finish the sentence.

Examples:

"The gospel is good news because God has revealed His faithful love through Jesus."

"The gospel is good news because God has justified sinners freely by grace through Christ."

"The gospel is good news because Jesus died for our sins and rose again."

Keep it simple.

If your gospel explanation sounds like a motivational poster wearing church clothes, tighten it up.

Make Jesus clear.

Make grace clear.

Make God's love clear.

Prayer:

Father, thank You for the everlasting gospel. Thank You that Your love is not temporary, fragile, or dependent on my performance. Thank You for revealing Your righteousness through Jesus and for justifying sinners freely by grace. Help me receive the gospel deeply and share it clearly. Let my life proclaim the good news of Your faithful love. Amen.`,
    prayer: '',
    completionSummary:
      'The everlasting gospel reveals God\'s faithful love in Jesus. At the cross, God\'s righteousness is displayed, sinners are justified by grace, and the world sees the kind of God God is.',
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'fam-l2-q1',
          prompt: 'According to Revelation 14:6, what does the first angel have?',
          options: [
            'The everlasting gospel',
            'A message of human pride',
            'A message without Jesus',
            'A temporary gospel',
          ],
          correctIndex: 0,
          explanation:
            'Revelation says the first angel has the everlasting gospel to preach to those who dwell on the earth.',
        },
        {
          id: 'fam-l2-q2',
          prompt: 'According to Jeremiah 31:3, how has God loved His people?',
          options: [
            'With an everlasting love',
            'With temporary interest',
            'With reluctant kindness',
            'With no affection',
          ],
          correctIndex: 0,
          explanation:
            'Jeremiah says God has loved His people with an everlasting love and drawn them with lovingkindness.',
        },
        {
          id: 'fam-l2-q3',
          prompt: 'According to Romans 1:16-17, what is revealed in the gospel?',
          options: [
            'The righteousness of God',
            'The weakness of God',
            'The end of grace',
            'Human superiority',
          ],
          correctIndex: 0,
          explanation: 'Paul says the gospel reveals the righteousness of God from faith to faith.',
        },
        {
          id: 'fam-l2-q4',
          prompt: 'According to Romans 3:24, how are sinners justified?',
          options: [
            'Freely by His grace through the redemption in Christ Jesus',
            'By earning enough spiritual points',
            'By pretending they have no sin',
            'By replacing Jesus with self-effort',
          ],
          correctIndex: 0,
          explanation:
            'Romans says sinners are justified freely by God\'s grace through the redemption that is in Christ Jesus.',
        },
        {
          id: 'fam-l2-q5',
          kind: 'reflection',
          prompt: 'How would you explain the everlasting gospel to someone in one simple sentence?',
          explanation:
            'The everlasting gospel is the good news of God\'s faithful love revealed in Jesus, who died for our sins, rose again, and gives sinners a right standing by grace.',
        },
      ],
    },
  },
  'fear-god': {
    openingThought: `The first angel's message says, "Fear God."

At first, that sounds heavy.

But remember the order.

The message begins with the everlasting gospel.

That means "fear God" must be understood in the light of God's faithful love revealed in Jesus.

There is a kind of fear that makes people run from God.

That is not the gospel response.

There is another kind of fear that means reverence, awe, wonder, humility, and deep respect.

That is the response the gospel creates.

When we see God's mercy, holiness, righteousness, and self-sacrificing love in Christ, we do not treat Him casually.

We stand in awe.`,
    scriptureRef: 'Revelation 14:7',
    scriptureQuote:
      'Saying with a loud voice, Fear God, and give glory to him; for the hour of his judgment is come.',
    scriptureAfterPrimary: `The first angel calls the world to fear God in the light of the gospel and the judgment hour.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Psalm 130:4',
        quote: 'But there is forgiveness with thee, that thou mayest be feared.',
      },
      {
        type: 'scripture',
        reference: 'Psalm 33:8',
        quote:
          'Let all the earth fear the LORD: let all the inhabitants of the world stand in awe of him.',
      },
      {
        type: 'scripture',
        reference: '1 John 4:16',
        quote: `And we have known and believed the love that God hath to us.

God is love; and he that dwelleth in love dwelleth in God, and God in him.`,
      },
      {
        type: 'scripture',
        reference: '1 John 4:18',
        quote: 'There is no fear in love; but perfect love casteth out fear.',
      },
      {
        type: 'scripture',
        reference: 'Ecclesiastes 12:13',
        quote:
          'Fear God, and keep his commandments: for this is the whole duty of man.',
      },
    ],
    teachingPoints: [
      `1. The fear of God must be understood through the gospel

The first angel's message begins with the everlasting gospel before it says "fear God."

That order protects us from misunderstanding.

God is not calling people into panic.

He is calling them into reverent awe because His faithful love has been revealed in Jesus.

The gospel does not make God less holy.

It helps us see His holiness as beautiful.`,
      `2. Forgiveness produces holy reverence

Psalm 130 says there is forgiveness with God so that He may be feared.

That sounds backwards until we understand biblical fear.

God's forgiveness does not make us treat Him lightly.

It makes us reverence Him more deeply.

When we realize how merciful God is, we are moved to awe, gratitude, worship, and surrender.`,
      `3. Perfect love casts out terror

First John says perfect love casts out fear.

This does not cancel reverence.

It removes terror.

When we know and believe the love God has for us, we stop relating to Him as if He is eager to condemn us.

The gospel frees us from the fear that runs away and creates the awe that draws near.`,
      `4. To fear God is to take Him seriously

Ecclesiastes connects fearing God with keeping His commandments.

That means awe is not just an emotion.

It becomes a way of life.

To fear God is to honor His authority, trust His wisdom, respect His Word, and live with awareness that His way is right.

Reverence that never shapes obedience is just religious mood lighting.

Pretty, but not useful.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Fear',
      lemma: 'φόβος',
      transliteration: 'phobos',
      meaning:
        'In Scripture, fear can mean terror before judgment, but it can also mean reverence, awe, wonder, humility, and deep respect for God.',
      strongs: 'G5401',
      reference: 'Revelation 14:7',
      note: `In the context of the everlasting gospel, "fear God" means to stand in awe of God's faithful love, mercy, holiness, and goodness.

The gospel casts out terror and produces reverent worship.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The first angel's message is not saying:

"Be terrified of God because He is dangerous."

It is saying:

"In the light of the everlasting gospel, stand in awe of who God is."

This is a major difference.

Terror pushes people away from God.

Awe draws people near.

Terror hides.

Awe worships.

Terror obeys from pressure.

Awe obeys from love.

The gospel reveals a God who forgives, saves, sacrifices, and remains faithful.

When that truth lands in the heart, casual religion starts to die.

We no longer treat God like an accessory to our plans.

We see Him as Creator, Redeemer, Judge, Father, Savior, and King.

That is what it means to fear God in the first angel's message.`,
    },
    studyInsightBlocks: [
      {
        type: 'fearGloryJudgmentCreatorMap',
        title: 'Our Response to the Good News',
        highlightedIndices: [0],
        caption: 'The gospel produces awe, worship, witness, and confidence before God.',
      },
      {
        type: 'scriptureChain',
        title: 'Fear God',
        references: [
          { reference: 'Revelation 14:7' },
          { reference: 'Psalm 130:4' },
          { reference: 'Psalm 33:8' },
          { reference: '1 John 4:16-19' },
          { reference: 'Ecclesiastes 12:13' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: To fear God in the light of the gospel means to stand in awe of His mercy, goodness, holiness, and faithful love.',
      },
    ],
    reflectPrompt: `Does your view of God produce terror that makes you hide, or awe that makes you draw near?

Think about forgiveness, judgment, obedience, worship, prayer, and whether the love of God has cast out fear in your heart.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, practice reverent awe.

Choose one moment each day to pause and name one thing about God that amazes you.

Examples:

His patience.

His mercy.

His holiness.

His forgiveness.

His faithfulness.

His power.

His love revealed in Jesus.

Then ask:

"How should this truth change the way I live today?"

Do not let awe stay in your head.

Let it shape your choices.

Prayer:

Father, thank You that Your love casts out terror and draws me into reverent awe. Teach me to fear You rightly, not by running from You, but by honoring You, trusting You, and worshiping You. Help me take Your Word seriously and live in response to Your mercy, holiness, and faithful love revealed in Jesus. Amen.`,
    prayer: '',
    completionSummary:
      'To fear God in the light of the everlasting gospel means to stand in awe of His mercy, holiness, goodness, and faithful love revealed in Jesus.',
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'fam-l3-q1',
          prompt: 'According to Revelation 14:7, what does the first angel call people to do?',
          options: ['Fear God', 'Ignore God', 'Worship the dragon', 'Reject the gospel'],
          correctIndex: 0,
          explanation:
            'The first angel\'s message calls people to fear God, give Him glory, recognize the judgment hour, and worship the Creator.',
        },
        {
          id: 'fam-l3-q2',
          prompt: 'According to Psalm 130:4, what is found with God?',
          options: ['Forgiveness', 'Unwillingness to save', 'No mercy', 'No hope'],
          correctIndex: 0,
          explanation:
            'Psalm 130 says there is forgiveness with God so that He may be feared, meaning His mercy produces reverent awe.',
        },
        {
          id: 'fam-l3-q3',
          prompt: 'According to 1 John 4:18, what does perfect love cast out?',
          options: ['Fear', 'Faith', 'Hope', 'Worship'],
          correctIndex: 0,
          explanation: 'John says perfect love casts out fear. God\'s love removes terror and produces confidence.',
        },
        {
          id: 'fam-l3-q4',
          prompt: 'According to Ecclesiastes 12:13, what is connected with fearing God?',
          options: [
            'Keeping His commandments',
            'Rejecting His Word',
            'Ignoring worship',
            'Living without reverence',
          ],
          correctIndex: 0,
          explanation:
            'Ecclesiastes connects fearing God with keeping His commandments, showing that reverence shapes the life.',
        },
        {
          id: 'fam-l3-q5',
          kind: 'reflection',
          prompt: 'What is one truth about God that fills you with awe instead of fear?',
          explanation:
            'Biblical fear in the context of the gospel is reverent awe. God\'s love casts out terror and draws us into worship, trust, and obedience.',
        },
      ],
    },
  },
  'give-glory-to-him': {
    openingThought: `The first angel's message does not stop with "Fear God."

It continues:

"Give glory to Him."

That sounds religious, but it is deeply practical.

To give glory to God means to make His character visible.

It means our words, worship, choices, relationships, habits, and witness should say something true about what God is like.

God's glory is not ego.

God is not insecure, sitting in heaven fishing for compliments.

His glory is the beauty of His character.

When the first angel calls the world to give glory to God, it is calling us to recognize, reflect, and proclaim His goodness.`,
    scriptureRef: 'Revelation 14:7',
    scriptureQuote:
      'Saying with a loud voice, Fear God, and give glory to him; for the hour of his judgment is come.',
    scriptureAfterPrimary: `The first angel calls the world to fear God and give glory to Him as the judgment hour has come.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Exodus 33:18-19',
        quote: `And he said, I beseech thee, shew me thy glory.

And he said, I will make all my goodness pass before thee.`,
      },
      {
        type: 'scripture',
        reference: 'Matthew 5:16',
        quote:
          'Let your light so shine before men, that they may see your good works, and glorify your Father which is in heaven.',
      },
      {
        type: 'scripture',
        reference: '1 Corinthians 10:31',
        quote: 'Whether therefore ye eat, or drink, or whatsoever ye do, do all to the glory of God.',
      },
      {
        type: 'scripture',
        reference: '2 Corinthians 4:6',
        quote: `For God, who commanded the light to shine out of darkness, hath shined in our hearts.

To give the light of the knowledge of the glory of God in the face of Jesus Christ.`,
      },
    ],
    teachingPoints: [
      `1. God's glory is His goodness

When Moses asked to see God's glory, God responded by revealing His goodness.

That tells us something important.

God's glory is not merely brightness, power, or majesty.

It is His character.

His mercy.
His faithfulness.
His justice.
His compassion.
His love.

To give glory to God means to tell the truth about His character.`,
      `2. Jesus reveals God's glory most clearly

Second Corinthians says the glory of God is seen in the face of Jesus Christ.

That means we do not guess what God is like.

We look at Jesus.

Jesus healing the broken.

Jesus forgiving sinners.

Jesus confronting hypocrisy.

Jesus washing feet.

Jesus dying on the cross.

That is the glory of God in human form.`,
      `3. Our lives can lead others to glorify God

Jesus said people should see our good works and glorify our Father in heaven.

This does not mean we perform for attention.

It means our lives should make God's character believable.

When people see kindness, integrity, mercy, justice, patience, generosity, and faithfulness in us, they should get a glimpse of the God we serve.

Bad witness makes God look worse than He is.

Good witness makes His goodness visible.`,
      `4. Giving glory includes everyday choices

Paul says whether we eat, drink, or whatever we do, we should do all to the glory of God.

That means giving glory is not limited to church services.

It includes health, speech, money, work, relationships, social media, sexuality, habits, and how we treat people when we are tired.

Especially when we are tired. That is where the "Christian character" receipt gets printed.

God's glory is reflected in ordinary choices.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Glory',
      lemma: 'כָּבוֹד',
      transliteration: 'kabod',
      meaning: 'The revealed weight, beauty, honor, and goodness of God\'s character.',
      strongs: 'H3519',
      reference: 'Exodus 33:18',
      note: `To give glory to God is to recognize and reflect His character.

The clearest revelation of God's glory is Jesus Christ, and believers are called to make that glory visible in everyday life.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The first angel's message calls the world to give glory to God.

That means the final message is not only something we say.

It is something we embody.

A person can preach correct doctrine and still misrepresent God.

A person can defend truth and still make God look harsh, proud, or cold.

That is a problem.

The message must match the Messenger.

If God is merciful, His people should not be cruel.

If God is faithful, His people should not be dishonest.

If God is patient, His people should not be unnecessarily harsh.

If God is holy, His people should not treat sin casually.

If God is love, His people should not carry truth like a weapon for ego.

Giving glory to God means living in a way that makes His character more visible.`,
    },
    studyInsightBlocks: [
      {
        type: 'fearGloryJudgmentCreatorMap',
        title: 'Our Response to the Good News',
        highlightedIndices: [1],
        caption: 'The gospel produces awe, worship, witness, and confidence before God.',
      },
      {
        type: 'scriptureChain',
        title: 'Give Glory to Him',
        references: [
          { reference: 'Revelation 14:7' },
          { reference: 'Exodus 33:18-19' },
          { reference: 'Matthew 5:16' },
          { reference: '1 Corinthians 10:31' },
          { reference: '2 Corinthians 4:6' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: Giving glory to God means magnifying the beauty of His character in our words, worship, choices, and witness.',
      },
    ],
    reflectPrompt: `What picture of God does your life give to the people around you?

Think about your tone, habits, social media, relationships, work ethic, health choices, patience, honesty, forgiveness, and whether people can see the character of Jesus through you.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, choose one area of ordinary life and intentionally give glory to God there.

Choose one:

Your speech.

Your food choices.

Your work ethic.

Your online behavior.

Your treatment of family.

Your forgiveness.

Your discipline.

Your generosity.

Then ask:

"How can this area say something true about God?"

Do not overcomplicate it.

Glory is not always dramatic.

Sometimes glory looks like honesty when lying would be easier.

Sometimes glory looks like kindness when irritation is justified.

Sometimes glory looks like discipline when nobody is watching.

Prayer:

Father, show me Your glory through Jesus. Help me see the beauty of Your character and reflect it in my life. Let my words, choices, habits, and relationships make You visible. Keep me from misrepresenting You through pride, harshness, carelessness, or hypocrisy. Teach me to give You glory in everything I do. Amen.`,
    prayer: '',
    completionSummary:
      'Giving glory to God means recognizing and reflecting His character. The clearest picture of God\'s glory is Jesus, and our lives are called to make Him visible.',
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'fam-l4-q1',
          prompt: 'According to Revelation 14:7, what are people called to give to God?',
          options: ['Glory', 'Confusion', 'Rebellion', 'Distrust'],
          correctIndex: 0,
          explanation: 'The first angel\'s message calls people to fear God and give glory to Him.',
        },
        {
          id: 'fam-l4-q2',
          prompt: 'According to Exodus 33:18-19, what did God reveal when Moses asked to see His glory?',
          options: ['His goodness', 'His cruelty', 'His indifference', 'His weakness'],
          correctIndex: 0,
          explanation:
            'When Moses asked to see God\'s glory, God said He would make His goodness pass before him.',
        },
        {
          id: 'fam-l4-q3',
          prompt: 'According to Matthew 5:16, what can happen when people see our good works?',
          options: [
            'They may glorify our Father in heaven',
            'They should worship us',
            'They will ignore God completely',
            'They will reject all truth automatically',
          ],
          correctIndex: 0,
          explanation:
            'Jesus said our light should shine so others may see our good works and glorify our Father in heaven.',
        },
        {
          id: 'fam-l4-q4',
          prompt: 'According to 2 Corinthians 4:6, where is the glory of God seen most clearly?',
          options: [
            'In the face of Jesus Christ',
            'In human pride',
            'In religious performance',
            'In worldly power',
          ],
          correctIndex: 0,
          explanation:
            'Paul says the knowledge of the glory of God is seen in the face of Jesus Christ.',
        },
        {
          id: 'fam-l4-q5',
          kind: 'reflection',
          prompt: 'What is one area of your life where God\'s character needs to become more visible?',
          explanation:
            'Giving glory to God means reflecting His character in practical, everyday choices.',
        },
      ],
    },
  },
  'the-hour-of-his-judgment': {
    openingThought: `Judgment sounds frightening when we picture God without Jesus.

But the first angel's message begins with the everlasting gospel.

That means the judgment must be understood through the gospel too.

The judgment is not God having a bad mood at the end of history.

It is God telling the truth.

It is God setting things right.

It is God exposing evil, vindicating His character, defending His people, and bringing the sin problem to its final resolution.

For those who trust Christ, judgment is not hopeless terror.

It is good news.

The Judge is also the Savior.`,
    scriptureRef: 'Revelation 14:7',
    scriptureQuote:
      'Saying with a loud voice, Fear God, and give glory to him; for the hour of his judgment is come.',
    scriptureAfterPrimary: `The first angel announces that the hour of God's judgment has come in the light of the everlasting gospel.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Daniel 7:9-10',
        quote: `I beheld till the thrones were cast down, and the Ancient of days did sit.

The judgment was set, and the books were opened.`,
      },
      {
        type: 'scripture',
        reference: 'Daniel 7:13-14',
        quote: `One like the Son of man came with the clouds of heaven, and came to the Ancient of days.

And there was given him dominion, and glory, and a kingdom.`,
      },
      {
        type: 'scripture',
        reference: 'Daniel 7:21-22',
        quote: `I beheld, and the same horn made war with the saints, and prevailed against them.

Until the Ancient of days came, and judgment was given to the saints of the most High.`,
      },
      {
        type: 'scripture',
        reference: 'Acts 17:31',
        quote:
          'Because he hath appointed a day, in the which he will judge the world in righteousness by that man whom he hath ordained.',
      },
      {
        type: 'scripture',
        reference: '1 John 4:17-18',
        quote: `Herein is our love made perfect, that we may have boldness in the day of judgment.

There is no fear in love; but perfect love casteth out fear.`,
      },
    ],
    teachingPoints: [
      `1. The judgment hour is part of the gospel message

Revelation 14 announces the judgment hour inside a message that begins with the everlasting gospel.

That order matters.

Judgment is not separated from good news.

God's judgment is the final public demonstration that He is righteous, His ways are just, His mercy is real, and evil will not last forever.

The gospel gives us the lens for understanding the judgment.`,
      `2. Judgment reveals the truth

Daniel says the books were opened.

This shows that judgment deals with reality.

God does not judge based on rumor, confusion, manipulation, or appearances.

He brings everything into the light.

That may sound intense, because it is.

But it is also good.

A universe damaged by lies needs truth.`,
      `3. Judgment is given in favor of God's people

Daniel says the little horn made war against the saints until judgment was given to the saints of the Most High.

Do not miss that.

Judgment is not only against evil.

It is also in favor of God's people.

God vindicates those who trust Him.

He answers oppression, injustice, persecution, and accusation.

The judgment shows that God has not forgotten His faithful ones.`,
      `4. Jesus is central in the judgment

Daniel sees the Son of Man come before the Ancient of Days and receive dominion, glory, and a kingdom.

Acts says God judges the world in righteousness through the Man He appointed.

That points to Jesus.

The believer's hope in judgment is not personal perfection.

The believer's hope is Christ.

Because Jesus stands for us, love can cast out fear.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Judgment',
      lemma: 'κρίσις',
      transliteration: 'krisis',
      meaning: 'God\'s work of examining, revealing, deciding, vindicating, and setting things right.',
      strongs: 'G2920',
      reference: 'Revelation 14:7',
      note: `Biblical judgment is not random punishment.

It is God's righteous work of truth, justice, mercy, and final resolution.

For those who trust Christ, judgment is faced with boldness because Jesus is Savior, Advocate, and King.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The first angel says the hour of God's judgment has come.

This message is urgent, but it is not hopeless.

Judgment means God is dealing with the sin problem honestly.

He does not pretend evil is harmless.

He does not ignore suffering.

He does not allow oppression to go unanswered.

He does not leave the dragon's accusations hanging forever.

God opens the books.

God tells the truth.

God vindicates His people.

God exposes false systems.

God reveals the righteousness of His government.

And at the center of it all stands Jesus.

That means judgment is not a call to panic.

It is a call to trust the One who judges righteously and saves completely.`,
    },
    studyInsightBlocks: [
      {
        type: 'fearGloryJudgmentCreatorMap',
        title: 'Our Response to the Good News',
        highlightedIndices: [2],
        caption: 'The gospel produces awe, worship, witness, and confidence before God.',
      },
      {
        type: 'scriptureChain',
        title: 'The Hour of His Judgment',
        references: [
          { reference: 'Revelation 14:7' },
          { reference: 'Daniel 7:9-14' },
          { reference: 'Daniel 7:21-22' },
          { reference: 'Acts 17:31' },
          { reference: '1 John 4:17-18' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: The judgment hour is good news when understood through Jesus. God judges righteously, vindicates His people, exposes evil, and sets all things right.',
      },
    ],
    reflectPrompt: `When you think about judgment, do you picture God against you or Jesus standing for you?

Think about fear, assurance, guilt, justice, oppression, God's character, Christ's advocacy, and whether the gospel shapes your view of judgment.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, replace one fear-based thought about judgment with a Christ-centered truth.

When fear says:

"God is looking for a reason to reject me."

Answer:

"Jesus is my Advocate."

When guilt says:

"My record is too messy."

Answer:

"Jesus is my righteousness."

When injustice says:

"Evil gets the last word."

Answer:

"God's judgment will set things right."

Then read Daniel 7:22 slowly:

"Judgment was given to the saints of the most High."

Let that land.

Judgment is not only about exposure.

It is also about vindication, truth, and the triumph of Christ.

Prayer:

Father, thank You that Your judgment is righteous, honest, and good. Thank You that Jesus stands at the center of judgment as Savior, Advocate, and King. Free me from fear-based religion and help me trust Your love. Give me boldness in Christ, confidence in Your justice, and a heart that lives truthfully before You. Amen.`,
    prayer: '',
    completionSummary:
      'The judgment hour is good news through Jesus. God judges righteously, exposes evil, vindicates His people, and sets all things right in Christ.',
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'fam-l5-q1',
          prompt: 'According to Revelation 14:7, what has come?',
          options: [
            'The hour of God\'s judgment',
            'The end of God\'s mercy',
            'The failure of the gospel',
            'The rule of the dragon forever',
          ],
          correctIndex: 0,
          explanation: 'The first angel announces that the hour of God\'s judgment has come.',
        },
        {
          id: 'fam-l5-q2',
          prompt: 'According to Daniel 7:10, what were opened in the judgment scene?',
          options: ['The books', 'The sea', 'The gates of Babylon only', 'The dragon\'s throne'],
          correctIndex: 0,
          explanation: 'Daniel says the judgment was set and the books were opened.',
        },
        {
          id: 'fam-l5-q3',
          prompt: 'According to Daniel 7:22, judgment was given in favor of whom?',
          options: [
            'The saints of the Most High',
            'The little horn',
            'The dragon',
            'The enemies of God forever',
          ],
          correctIndex: 0,
          explanation:
            'Daniel says judgment was given to the saints of the Most High, showing that judgment includes vindication for God\'s people.',
        },
        {
          id: 'fam-l5-q4',
          prompt: 'According to Acts 17:31, God will judge the world in what?',
          options: ['Righteousness', 'Confusion', 'Injustice', 'Carelessness'],
          correctIndex: 0,
          explanation:
            'Acts says God has appointed a day in which He will judge the world in righteousness through the Man He has ordained.',
        },
        {
          id: 'fam-l5-q5',
          kind: 'reflection',
          prompt: 'What is one fear about judgment you need to surrender to Jesus?',
          explanation:
            'The judgment is real, but believers can have boldness because Jesus is Savior, Advocate, and King.',
        },
      ],
    },
  },
  'worship-the-creator': {
    openingThought: `The first angel's message ends by calling the world back to worship.

Not vague worship.

Not worship shaped by culture.

Not worship built on human authority.

Creator worship.

Revelation says:

"Worship him that made heaven, and earth, and the sea, and the fountains of waters."

That language is not random.

It echoes the fourth commandment, where God tells His people to remember the Sabbath because He made heaven, earth, the sea, and everything in them.

In the final message, God calls the world back to the Creator.

And the Sabbath stands as a living reminder that we belong to the One who made us, sustains us, redeems us, and gives us rest.`,
    scriptureRef: 'Revelation 14:7',
    scriptureQuote:
      'And worship him that made heaven, and earth, and the sea, and the fountains of waters.',
    scriptureAfterPrimary: `The first angel calls the world to worship the Creator who made all things.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Exodus 20:8-11',
        quote: `Remember the sabbath day, to keep it holy.

For in six days the LORD made heaven and earth, the sea, and all that in them is.`,
      },
      {
        type: 'scripture',
        reference: 'Genesis 2:2-3',
        quote: `And on the seventh day God ended his work which he had made.

And God blessed the seventh day, and sanctified it.`,
      },
      {
        type: 'scripture',
        reference: 'Colossians 1:16-17',
        quote: `For by him were all things created, that are in heaven, and that are in earth.

And he is before all things, and by him all things consist.`,
      },
      {
        type: 'scripture',
        reference: 'Mark 2:27-28',
        quote: `The sabbath was made for man, and not man for the sabbath.

Therefore the Son of man is Lord also of the sabbath.`,
      },
    ],
    teachingPoints: [
      `1. The first angel calls the world to worship the Creator

Revelation 14 does not merely call people to believe that God exists.

It calls them to worship Him as Creator.

That means recognizing God as the source of life, authority, identity, purpose, and rest.

The final conflict is not only about behavior.

It is about worship.

Who receives our loyalty?

Whose authority shapes our lives?

Who do we trust as the source of truth?

The first angel answers:

Worship the Creator.`,
      `2. Revelation 14 echoes the Sabbath commandment

The wording in Revelation 14:7 closely echoes Exodus 20:11.

Revelation says God made heaven, earth, sea, and fountains of waters.

Exodus says God made heaven, earth, the sea, and all that is in them.

That connection matters.

The first angel's message points people back to Creator worship, and the Sabbath is the Bible's memorial of creation.

The Sabbath is not a random religious tradition.

It is God's sign of creation, rest, and worship.`,
      `3. The Sabbath was blessed before sin entered

Genesis says God blessed and sanctified the seventh day at creation.

This happened before there was a Jewish nation.

Before Sinai.

Before the fall.

Before sin damaged the world.

The Sabbath begins in God's perfect creation as a gift to humanity.

Jesus later said the Sabbath was made for man.

Not man for the Sabbath.

That means Sabbath is not meant to crush people.

It is meant to bless them.`,
      `4. Jesus is Lord of the Sabbath

Colossians says all things were created by Christ and for Christ.

Mark says the Son of Man is Lord of the Sabbath.

This means the Sabbath is not disconnected from Jesus.

The Creator who made the Sabbath is also the Redeemer who gives rest.

To worship the Creator is to honor Christ as Creator, Redeemer, Lord, and giver of true rest.

The Sabbath points us to Him.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Creator',
      lemma: 'בָּרָא',
      transliteration: 'bara',
      meaning: 'The One who made, sustains, owns, and gives purpose to all things.',
      strongs: 'H1254',
      reference: 'Genesis 2:3',
      note: `Calling God Creator means He is the source of life and the rightful center of worship.

The Sabbath reminds humanity that we are created, dependent, loved, and invited to rest in the God who made and redeems us.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The first angel's message calls the world back to Creator worship.

This is not a small detail.

In the last days, worship becomes the central issue.

Will humanity worship the Creator or follow human systems that replace God's authority?

Will worship be shaped by Scripture or by tradition?

Will people rest in Christ or depend on self-made religion?

The Sabbath answers these questions every week.

It tells us:

God is Creator.

We are not self-made.

Life is a gift.

Rest is holy.

God's authority matters.

Worship belongs to Him.

Jesus is Lord.

The Sabbath is not merely a day to argue about.

Please do not reduce it to a debate trophy. That is spiritually tacky.

The Sabbath is a sign that the Creator is worthy of worship and that His people rest in His love.`,
    },
    studyInsightBlocks: [
      {
        type: 'fearGloryJudgmentCreatorMap',
        title: 'Our Response to the Good News',
        highlightedIndices: [3],
        caption: 'The gospel produces awe, worship, witness, and confidence before God.',
      },
      {
        type: 'creatorWorshipSabbathBridge',
        title: 'Worship the Creator',
        caption:
          'The first angel\'s message calls the world back to the Creator, the Sabbath, and the rest found in Christ.',
      },
      {
        type: 'scriptureChain',
        title: 'Worship the Creator',
        references: [
          { reference: 'Revelation 14:7' },
          { reference: 'Exodus 20:8-11' },
          { reference: 'Genesis 2:1-3' },
          { reference: 'Colossians 1:16-17' },
          { reference: 'Mark 2:27-28' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: The first angel\'s message calls the world back to Creator worship, echoing the Sabbath commandment and pointing to the rest found in Christ.',
      },
    ],
    reflectPrompt: `Do you see the Sabbath mainly as a rule, an argument, or a gift that points you back to the Creator?

Think about worship, rest, creation, Jesus as Lord of the Sabbath, dependence on God, and whether Sabbath reveals God's love or feels like religious pressure.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, practice seeing Sabbath as Creator worship.

Before the Sabbath begins, pause and ask:

"What does this day tell me about God?"

"What does it remind me about my identity?"

"What am I trying to carry that God is inviting me to rest from?"

"How can I honor Jesus as Lord of the Sabbath?"

Then do one intentional Sabbath practice:

Read Genesis 2:1-3.

Pray over Exodus 20:8-11.

Spend time in creation.

Rest from unnecessary work.

Worship without rushing.

Serve someone in love.

Turn off what keeps your soul noisy.

Do not make Sabbath cold.

Make it worship.

Prayer:

Father, thank You for creating heaven, earth, the sea, and all that is in them. Thank You for the Sabbath as a gift of worship, rest, and remembrance. Help me honor You as Creator and trust Jesus as Lord of the Sabbath. Free me from self-made religion and teach me to rest in Your love, authority, and care. Amen.`,
    prayer: '',
    completionSummary:
      'The first angel\'s message calls the world back to Creator worship. The Sabbath reminds us that God made us, sustains us, redeems us, and gives us rest in Christ.',
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'fam-l6-q1',
          prompt: 'According to Revelation 14:7, whom are people called to worship?',
          options: [
            'Him who made heaven, earth, sea, and fountains of waters',
            'The dragon',
            'Human tradition',
            'The beast\'s authority',
          ],
          correctIndex: 0,
          explanation:
            'The first angel calls the world to worship the Creator, the One who made heaven, earth, sea, and fountains of waters.',
        },
        {
          id: 'fam-l6-q2',
          prompt: 'According to Exodus 20:8, what does God command His people to remember?',
          options: [
            'The Sabbath day, to keep it holy',
            'Babylon\'s power',
            'Human tradition above Scripture',
            'The dragon\'s claims',
          ],
          correctIndex: 0,
          explanation: 'The fourth commandment begins, "Remember the sabbath day, to keep it holy."',
        },
        {
          id: 'fam-l6-q3',
          prompt: 'According to Genesis 2:3, what did God do to the seventh day?',
          options: ['Blessed it and sanctified it', 'Ignored it', 'Cursed it', 'Replaced it immediately'],
          correctIndex: 0,
          explanation: 'Genesis says God blessed the seventh day and sanctified it after His work of creation.',
        },
        {
          id: 'fam-l6-q4',
          prompt: 'According to Mark 2:28, who is Lord of the Sabbath?',
          options: ['The Son of Man', 'Human tradition', 'The dragon', 'Caesar'],
          correctIndex: 0,
          explanation: 'Jesus said the Son of Man is Lord also of the Sabbath.',
        },
        {
          id: 'fam-l6-q5',
          kind: 'reflection',
          prompt: 'What is one way you can make Sabbath more centered on worship, rest, and Jesus?',
          explanation:
            'The Sabbath points to God as Creator and Jesus as Lord. It is a gift that calls us into worship, dependence, and rest.',
        },
      ],
    },
  },
  'the-gospel-that-changes-everything': {
    openingThought: `The first angel's message is not a random list of religious commands.

It is a complete gospel-centered call to the world.

It begins with the everlasting gospel.

Then it calls humanity to fear God, give Him glory, recognize the judgment hour, and worship the Creator.

That is not fear-based religion.

That is a paradigm shift.

The world is invited to see God clearly, worship Him rightly, trust His judgment, reflect His character, and return to the Creator who gives life and rest.

The first angel's message changes how we see God.

And when we see God rightly, it changes everything else.`,
    scriptureRef: 'Revelation 14:6-7',
    scriptureQuote: `And I saw another angel fly in the midst of heaven, having the everlasting gospel to preach unto them that dwell on the earth.

And to every nation, and kindred, and tongue, and people.

Saying with a loud voice, Fear God, and give glory to him; for the hour of his judgment is come.

And worship him that made heaven, and earth, and the sea, and the fountains of waters.`,
    scriptureAfterPrimary: `The first angel's message is a complete gospel call to every nation, from the everlasting gospel to Creator worship.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: '2 Corinthians 3:18',
        quote:
          'But we all, with open face beholding as in a glass the glory of the Lord, are changed into the same image.',
      },
      {
        type: 'scripture',
        reference: '2 Corinthians 4:3-6',
        quote: `If our gospel be hid, it is hid to them that are lost.

For God, who commanded the light to shine out of darkness, hath shined in our hearts.

To give the light of the knowledge of the glory of God in the face of Jesus Christ.`,
      },
      {
        type: 'scripture',
        reference: 'Romans 12:1-2',
        quote: `Present your bodies a living sacrifice, holy, acceptable unto God.

And be not conformed to this world: but be ye transformed by the renewing of your mind.`,
      },
      {
        type: 'scripture',
        reference: 'Matthew 5:14-16',
        quote: `Ye are the light of the world.

Let your light so shine before men, that they may see your good works, and glorify your Father which is in heaven.`,
      },
    ],
    teachingPoints: [
      `1. The first angel's message begins and ends with worship

The message begins with the everlasting gospel and ends with worshiping the Creator.

That tells us the goal.

God wants people restored to true worship.

Not worship based on fear.

Not worship based on tradition.

Not worship based on human authority.

Worship rooted in the gospel, centered in Jesus, and directed to the Creator.`,
      `2. Seeing God clearly transforms us

Second Corinthians says we are changed by beholding the glory of the Lord.

This is how transformation works.

We become shaped by what we behold.

If we behold a false picture of God, our faith becomes distorted.

If we behold God's glory in Jesus, we are changed into His image.

The first angel's message calls the world to see God clearly again.`,
      `3. The gospel renews the mind

Romans says we are transformed by the renewing of the mind.

The first angel's message is not only about information.

It reshapes how we think.

We stop seeing God as harsh and distant.

We stop seeing judgment as hopeless terror.

We stop seeing Sabbath as a burden.

We stop seeing obedience as earning.

We begin seeing God through the everlasting gospel.

That renewed vision changes the life.`,
      `4. God's people become witnesses of His character

Jesus said His people are the light of the world.

The first angel's message is not meant to stay on a page.

It becomes visible through people.

Awe.

Glory.

Confidence.

Creator worship.

Christ-centered living.

When the gospel changes us, our lives begin to say something true about God.

That is witness.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Witness',
      lemma: 'μάρτυς',
      transliteration: 'martys',
      meaning: 'A person or community that reveals, testifies, or gives evidence of what is true.',
      strongs: 'G3144',
      reference: 'Matthew 5:14',
      note: `The first angel's message creates a witnessing people.

God's people do not merely repeat the message.

They embody it by reflecting His character, proclaiming His gospel, trusting His judgment, and worshiping Him as Creator.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The First Angel's Message has shown one clear structure:

Everlasting Gospel:
God's faithful love revealed in Jesus.

Fear God:
Awe and reverence in response to His mercy and holiness.

Give Glory:
Reflecting and proclaiming His character.

Hour of Judgment:
God setting things right through Christ.

Worship the Creator:
Returning to the One who made, sustains, redeems, and gives rest.

This message is not meant to make believers sound intense but empty.

It is meant to make them clear, grounded, humble, and full of good news.

The first angel's message is urgent because the world needs to see God rightly before Jesus returns.

And this is where we need to be honest:

If we preach the message but misrepresent God's character, we are not helping.

If we defend judgment but forget Jesus, we are not helping.

If we talk Sabbath but lose the rest, we are not helping.

If we say "everlasting gospel" but sound like we forgot the gospel part, we are definitely not helping.

The message must be carried in the spirit of Christ.`,
    },
    studyInsightBlocks: [
      {
        type: 'firstAngelsMessageBreakdown',
        title: 'The First Angel\'s Message',
        subtitle: 'Revelation 14:6-7',
        caption:
          'The first angel\'s message is God\'s final gospel call to the whole world.',
      },
      {
        type: 'everlastingGospelFlow',
        title: 'The Everlasting Gospel',
        caption: 'The everlasting gospel reveals the kind of God God is.',
      },
      {
        type: 'scriptureChain',
        title: 'The Gospel That Changes Everything',
        references: [
          { reference: 'Revelation 14:6-7' },
          { reference: '2 Corinthians 3:18' },
          { reference: '2 Corinthians 4:3-6' },
          { reference: 'Romans 12:1-2' },
          { reference: 'Matthew 5:14-16' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: The first angel\'s message changes everything by restoring the everlasting gospel, revealing God\'s character, and calling the world back to Creator worship through Jesus.',
      },
    ],
    reflectPrompt: `How has your view of the first angel's message changed through this study?

Think about the everlasting gospel, fear God, give glory, judgment, Sabbath, Creator worship, and whether you now see the message more clearly through Jesus.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, practice living the first angel's message in one specific way.

Choose one response:

Receive the gospel more deeply.

Stand in awe of God instead of living casually.

Reflect His character in one relationship.

Trust Jesus more in the judgment.

Make Sabbath more centered on Creator worship.

Share the good news with someone in simple language.

Then ask:

"Does my life make this message look like good news?"

That question matters.

The first angel's message is not only something to understand.

It is something to embody.

Prayer:

Father, thank You for the first angel's message and for sending the everlasting gospel to the whole world. Help me receive Your faithful love in Jesus, stand in awe of You, give glory to Your character, trust You in the judgment, and worship You as Creator. Let this message change how I live, speak, worship, and witness. Make my life a clear reflection of Your good news. Amen.`,
    prayer: '',
    completionSummary:
      'The first angel\'s message changes how we see God. When we see Him through the everlasting gospel, it transforms worship, witness, and every part of life.',
    seriesCompleteScreen: {
      title: 'Study Complete',
      message:
        'You have completed The First Angel\'s Message. God\'s final gospel call invites the world to receive the everlasting gospel, stand in awe of God, give Him glory, trust His judgment, and worship the Creator through Jesus.',
      primaryCta: { label: 'Back to Foundations Path', href: '/paths/foundations' },
      secondaryCta: {
        label: 'Review this study',
        href: '/study-library/the-first-angels-message',
      },
    },
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'fam-l7-q1',
          prompt: 'What does the first angel\'s message begin with?',
          options: [
            'The everlasting gospel',
            'Human fear without hope',
            'Religious pride',
            'Worship of the dragon',
          ],
          correctIndex: 0,
          explanation:
            'Revelation 14:6 says the first angel has the everlasting gospel to preach to the whole world.',
        },
        {
          id: 'fam-l7-q2',
          prompt: 'According to 2 Corinthians 3:18, what happens as we behold the glory of the Lord?',
          options: [
            'We are changed into the same image',
            'We become less like Christ',
            'We lose the need for transformation',
            'We stop needing the gospel',
          ],
          correctIndex: 0,
          explanation:
            'Paul says that by beholding the glory of the Lord, we are changed into the same image.',
        },
        {
          id: 'fam-l7-q3',
          prompt: 'According to Romans 12:2, how are we transformed?',
          options: [
            'By the renewing of the mind',
            'By copying the world',
            'By ignoring truth',
            'By rejecting God\'s mercy',
          ],
          correctIndex: 0,
          explanation: 'Romans says we are transformed by the renewing of the mind.',
        },
        {
          id: 'fam-l7-q4',
          prompt: 'According to Matthew 5:16, what should people do when they see our good works?',
          options: [
            'Glorify our Father in heaven',
            'Worship us',
            'Ignore God',
            'Reject all truth',
          ],
          correctIndex: 0,
          explanation:
            'Jesus said our light should shine so people may see our good works and glorify our Father in heaven.',
        },
        {
          id: 'fam-l7-q5',
          kind: 'reflection',
          prompt: 'What is one practical way you can live the first angel\'s message this week?',
          explanation:
            'The first angel\'s message is not only a doctrine to understand. It is a gospel-centered witness to embody through awe, glory, judgment confidence, Creator worship, and love.',
        },
      ],
    },
  },
}
