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

/** Guided reader lessons for "The Second Angel's Message" (Foundations). */
export const theSecondAngelsMessageSeriesLessonLibrary: Record<string, LessonReaderContent> = {
  'babylon-is-fallen': {
    openingThought: `The second angel's message is direct:

"Babylon is fallen."

That sounds intense because it is.

But we need to understand it correctly.

Babylon is not just a city from ancient history. In Revelation, Babylon becomes a symbol of religious confusion, self-exaltation, false worship, coercion, and systems that claim to represent God while misrepresenting His character.

The second angel's message is not God saying, "I hate people."

It is God saying, "I hate the confusion that keeps people from seeing My love clearly."

That distinction matters.

God has people trapped inside systems of confusion, fear, control, and false teaching.

So He exposes Babylon because He wants people free.`,
    scriptureRef: 'Revelation 14:8',
    scriptureQuote: `And there followed another angel, saying, Babylon is fallen, is fallen, that great city.

Because she made all nations drink of the wine of the wrath of her fornication.`,
    scriptureAfterPrimary: `The second angel announces the fall of Babylon, a symbol of religious confusion that spreads spiritual intoxication throughout the world.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Revelation 18:1-2',
        quote: `And after these things I saw another angel come down from heaven, having great power; and the earth was lightened with his glory.

And he cried mightily with a strong voice, saying, Babylon the great is fallen, is fallen.`,
      },
      {
        type: 'scripture',
        reference: 'Revelation 18:4',
        quote: `And I heard another voice from heaven, saying, Come out of her, my people.

That ye be not partakers of her sins, and that ye receive not of her plagues.`,
      },
      {
        type: 'scripture',
        reference: 'Genesis 11:4',
        quote: `And they said, Go to, let us build us a city and a tower, whose top may reach unto heaven.

And let us make us a name.`,
      },
      {
        type: 'scripture',
        reference: 'Genesis 11:7',
        quote: `Go to, let us go down, and there confound their language, that they may not understand one another's speech.`,
      },
      {
        type: 'scripture',
        reference: 'Jeremiah 51:6',
        quote: 'Flee out of the midst of Babylon, and deliver every man his soul.',
      },
      {
        type: 'scripture',
        reference: '2 Corinthians 4:6',
        quote: `For God, who commanded the light to shine out of darkness, hath shined in our hearts.

To give the light of the knowledge of the glory of God in the face of Jesus Christ.`,
      },
    ],
    teachingPoints: [
      `1. Babylon represents confusion about God

The word Babylon connects back to Babel, where human beings tried to build upward, make a name for themselves, and secure themselves apart from trust in God.

The result was confusion.

That is why Babylon becomes a powerful Bible symbol.

It represents systems that confuse people about God, salvation, worship, authority, and truth.

Where the gospel reveals God clearly, Babylon clouds the picture.`,
      `2. Babylon is fallen because it misrepresents God

Revelation says Babylon has fallen.

That means its system is spiritually bankrupt.

It may look powerful.

It may look organized.

It may look religious.

But if it distorts God's character, replaces the gospel with control, and leads people away from the truth revealed in Jesus, it has fallen.

Religious appearance does not equal spiritual faithfulness.

A system can use God-language and still work against God's character.`,
      `3. Babylon intoxicates the nations

Revelation says Babylon makes all nations drink the wine of her fornication.

Wine here represents false teaching and spiritual intoxication.

It affects judgment.

It clouds perception.

It makes people think wrongly about God.

Babylon's teachings make the world spiritually confused, especially regarding God's character, salvation, worship, and authority.

That is why the second angel's message matters.

It is a warning against deception.`,
      `4. God calls people out because He loves them

Revelation 18 says, "Come out of her, my people."

Do not miss the tenderness in that phrase.

"My people."

God has sincere people in places of confusion.

The message is not hateful toward individuals.

It is merciful toward them.

God exposes Babylon so His people can step out of fear, control, false worship, and distorted pictures of Him into the light of Christ.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Babylon',
      lemma: 'בָּבֶל',
      transliteration: 'Babel',
      meaning:
        'A biblical symbol of confusion, rebellion, self-exaltation, false worship, and systems that misrepresent God while claiming spiritual authority.',
      strongs: 'H894',
      reference: 'Revelation 14:8',
      note: `In Revelation, Babylon is not merely an ancient city.

It represents end-time religious confusion that darkens the truth about God's character.

The second angel's message exposes Babylon so people can come into the light of Jesus.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The second angel's message follows the first angel's message for a reason.

The first angel proclaims the everlasting gospel.

The second angel exposes the counterfeit.

That order matters.

Before God tells people what to leave, He shows them who He is.

The light comes first.

Then the fall of Babylon becomes visible.

Babylon falls under the weight of God's glory, because once people see God's character clearly in Christ, false religion loses its power.

Fear-based religion starts to crack.

Coercive worship starts to look ugly.

Self-exaltation starts to look ridiculous.

Human systems of salvation start to collapse.

The gospel turns the lights on.

And when the lights come on, Babylon cannot keep pretending it is beautiful.`,
    },
    studyInsightBlocks: [
      {
        type: 'secondAngelsMessageBreakdown',
        title: 'The Second Angel\'s Message',
        subtitle: 'Revelation 14:8',
        caption:
          'The second angel exposes Babylon\'s confusion so people can come into the light of Christ.',
      },
      {
        type: 'scriptureChain',
        title: 'Babylon Is Fallen',
        references: [
          { reference: 'Revelation 14:8' },
          { reference: 'Revelation 18:1-5' },
          { reference: 'Genesis 11:1-9' },
          { reference: 'Jeremiah 51:6-9' },
          { reference: '2 Corinthians 4:3-6' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: Babylon represents religious confusion that misrepresents God. The second angel announces its fall so God\'s people can come into the light of Christ.',
      },
    ],
    reflectPrompt: `Where have you seen religion create confusion about God instead of revealing His love?

Think about fear, control, shame, false worship, pride, salvation by works, distorted pictures of judgment, and whether your view of God has been shaped more by Jesus or by human systems.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, identify one false picture of God that needs to fall in your mind.

Ask:

"Do I see God as controlling or loving?"

"Do I see salvation as something I earn or something I receive through Christ?"

"Do I obey from fear or from trust?"

"Do I use truth to serve people or control them?"

"Does my religion look like Jesus?"

Then compare that picture with the life of Christ.

If it does not look like Jesus, let it fall.

Babylon is not only a system out there.

The seeds of Babylon can live in us too: pride, control, self-exaltation, spiritual manipulation, and fear-based religion.

Let God call those things out.

Prayer:

Father, thank You for shining light into darkness. Thank You for exposing confusion because You love people and want them free. Help me see Your character clearly in Jesus. Deliver me from false pictures of You, from fear-based religion, and from every Babylonian principle in my own heart. Call me out of confusion and into the light of Your self-giving love. Amen.`,
    prayer: '',
    completionSummary:
      'Babylon represents religious confusion that misrepresents God. The second angel announces its fall so God\'s people can come out of darkness and into the light of Christ.',
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'sam-l1-q1',
          prompt: 'According to Revelation 14:8, what does the second angel announce?',
          options: [
            'Babylon is fallen',
            'Babylon will rule forever',
            'The gospel has failed',
            'God has forgotten His people',
          ],
          correctIndex: 0,
          explanation:
            'The second angel announces, "Babylon is fallen, is fallen," exposing the collapse of religious confusion under the light of God\'s truth.',
        },
        {
          id: 'sam-l1-q2',
          prompt: 'In Genesis 11, what did the builders of Babel want to make for themselves?',
          options: ['A name', 'A sanctuary according to God\'s pattern', 'A Sabbath blessing', 'A gospel witness'],
          correctIndex: 0,
          explanation: 'The builders of Babel said, "Let us make us a name," revealing the spirit of self-exaltation.',
        },
        {
          id: 'sam-l1-q3',
          prompt: 'According to Revelation 18:4, what does God call His people to do?',
          options: ['Come out of her', 'Stay in confusion forever', 'Worship Babylon', 'Reject Jesus'],
          correctIndex: 0,
          explanation:
            'God says, "Come out of her, my people," showing that He has sincere people in Babylon and calls them out because He loves them.',
        },
        {
          id: 'sam-l1-q4',
          prompt: 'According to 2 Corinthians 4:6, where is the knowledge of God\'s glory revealed?',
          options: [
            'In the face of Jesus Christ',
            'In Babylon\'s pride',
            'In human control',
            'In forced worship',
          ],
          correctIndex: 0,
          explanation:
            'Paul says the light of the knowledge of God\'s glory is seen in the face of Jesus Christ.',
        },
        {
          id: 'sam-l1-q5',
          kind: 'reflection',
          prompt: 'What is one false picture of God that you need to let fall?',
          explanation:
            'The second angel\'s message exposes religious confusion so people can see God clearly through Jesus and come out of every system or mindset that misrepresents Him.',
        },
      ],
    },
  },
  'the-spirit-of-ancient-babylon': {
    openingThought: `To understand end-time Babylon, we first need to understand ancient Babylon.

Babylon did not begin as a random city with impressive architecture.

It began as a spirit.

A mindset.

A system.

A way of thinking that says:

"We can save ourselves."

"We can make a name for ourselves."

"We can build upward without trusting God."

"We can use power to force worship."

That is why Babylon matters in Bible prophecy.

It is not just ancient history.

It is a repeated pattern of rebellion, self-exaltation, confusion, control, and collapse.

Babylon always promises security.

But it always produces confusion.`,
    scriptureRef: 'Genesis 11:4',
    scriptureQuote: `And they said, Go to, let us build us a city and a tower, whose top may reach unto heaven.

And let us make us a name, lest we be scattered abroad upon the face of the whole earth.`,
    scriptureAfterPrimary: `At Babel, humanity tried to build upward and make a name for itself instead of trusting God's covenant promise.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Genesis 10:8-10',
        quote: `And Cush begat Nimrod: he began to be a mighty one in the earth.

And the beginning of his kingdom was Babel.`,
      },
      {
        type: 'scripture',
        reference: 'Genesis 11:7-9',
        quote: `Let us go down, and there confound their language, that they may not understand one another's speech.

Therefore is the name of it called Babel.`,
      },
      {
        type: 'scripture',
        reference: 'Daniel 3:4-6',
        quote: `Then an herald cried aloud, To you it is commanded, O people, nations, and languages.

Fall down and worship the golden image.`,
      },
      {
        type: 'scripture',
        reference: 'Daniel 4:30',
        quote: 'Is not this great Babylon, that I have built?',
      },
      {
        type: 'scripture',
        reference: 'Daniel 5:27-28',
        quote: `Thou art weighed in the balances, and art found wanting.

Thy kingdom is divided, and given to the Medes and Persians.`,
      },
    ],
    teachingPoints: [
      `1. Babylon begins with rebellion and unbelief

Babel appears after the Flood.

God had promised Noah that He would never again destroy the earth with a worldwide flood.

But the builders of Babel did not trust God's covenant promise.

They built upward as an act of self-protection.

That is Babylon's first principle:

Distrust God and secure yourself.

It looks practical.

But underneath it is unbelief.`,
      `2. Babylon exalts self

The builders said, "Let us make us a name."

That is the heart of Babylon.

It wants greatness without surrender.

Security without faith.

Identity without God.

Babylon is the human ego turned into a religious construction project.

The tower may look impressive, but the foundation is pride.`,
      `3. Babylon produces confusion

God confused the language at Babel.

The people could no longer understand one another, and the project collapsed.

That is not random.

When humanity organizes itself around pride and unbelief, confusion follows.

False systems may promise unity, but when they are built apart from God, they eventually fracture.

Babylon always creates the confusion it claims to solve.`,
      `4. Babylon uses force to command worship

In Daniel 3, Babylon reaches another stage.

Nebuchadnezzar builds an image and commands all peoples, nations, and languages to worship it.

Refusal means death.

This is Babylon's mature form:

Religious worship enforced by political power.

God invites worship.

Babylon coerces it.

That difference is massive.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Babel',
      lemma: 'בָּבֶל',
      transliteration: 'Babel',
      meaning: 'Confusion.',
      strongs: 'H894',
      reference: 'Genesis 11:9',
      note: `Babel became a symbol of humanity's attempt to build security, identity, and salvation apart from trust in God.

The result was confusion, because self-exaltation can never produce true unity or peace.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `Ancient Babylon gives us a pattern.

First, unbelief.

Then self-exaltation.

Then confusion.

Then forced worship.

Then fall.

That pattern repeats in Scripture because it exposes a deeper spiritual issue.

Babylon is not only about ancient towers and golden statues.

It is about what happens when human beings try to replace God's way with their own.

The builders of Babel tried to save themselves from future disaster.

Nebuchadnezzar tried to center worship on his own kingdom.

Belshazzar lifted himself up and mocked the God of heaven.

And in each case, Babylon fell under the weight of its own pride.

This is why the second angel says, "Babylon is fallen."

A system built on self-exaltation cannot stand forever.`,
    },
    studyInsightBlocks: [
      {
        type: 'ancientBabylonPattern',
        title: 'The Pattern of Babylon',
        caption:
          'Babylon represents the attempt to replace trust in God with human pride, control, and false worship.',
      },
      {
        type: 'scriptureChain',
        title: 'The Spirit of Ancient Babylon',
        references: [
          { reference: 'Genesis 10:8-10' },
          { reference: 'Genesis 11:1-9' },
          { reference: 'Daniel 3:1-6' },
          { reference: 'Daniel 4:30' },
          { reference: 'Daniel 5:22-28' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: Ancient Babylon reveals the core principles of rebellion, self-exaltation, confusion, forced worship, and collapse.',
      },
    ],
    reflectPrompt: `Where do you see the spirit of Babylon in the world today, or even in your own heart?

Think about self-protection, pride, making a name for yourself, trusting human systems more than God, forcing outcomes, controlling others, and seeking security apart from faith.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, watch for one Babylonian pattern in your own life.

Ask:

"Am I trusting God, or am I building my own tower?"

"Am I trying to make a name for myself?"

"Am I using control because I do not trust God?"

"Am I confusing ambition with calling?"

"Am I trying to force what God has not asked me to force?"

Then choose one act of surrender.

Release control.

Tell the truth.

Stop posturing.

Choose humility.

Trust God's promise.

Babylon builds upward in pride.

Faith bows low and lets God lift.

Prayer:

Father, deliver me from the spirit of Babylon. Remove unbelief, pride, self-exaltation, confusion, and control from my heart. Teach me to trust Your promises instead of building my own tower of security. Help me worship freely, live humbly, and follow the way of Jesus instead of the way of Babylon. Amen.`,
    prayer: '',
    completionSummary:
      'Ancient Babylon reveals the pattern of unbelief, self-exaltation, confusion, forced worship, and fall. God calls His people away from Babylon\'s spirit and into trustful surrender.',
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'sam-l2-q1',
          prompt: 'According to Genesis 11:4, what did the builders of Babel want to make for themselves?',
          options: ['A name', 'A sanctuary according to God\'s pattern', 'A Sabbath rest', 'A gospel mission'],
          correctIndex: 0,
          explanation:
            'The builders said, "Let us make us a name," revealing the self-exalting spirit of Babel.',
        },
        {
          id: 'sam-l2-q2',
          prompt: 'What happened to the language of the builders at Babel?',
          options: [
            'God confused their language',
            'God made them all speak perfectly',
            'They immediately finished the tower',
            'They became more united in rebellion',
          ],
          correctIndex: 0,
          explanation: 'Genesis says God confused their language, and the people were scattered.',
        },
        {
          id: 'sam-l2-q3',
          prompt: 'In Daniel 3, what did Nebuchadnezzar command all people to do?',
          options: [
            'Fall down and worship the golden image',
            'Worship God freely',
            'Study the sanctuary',
            'Keep the Sabbath',
          ],
          correctIndex: 0,
          explanation:
            'Nebuchadnezzar commanded all peoples, nations, and languages to worship the golden image under threat of death.',
        },
        {
          id: 'sam-l2-q4',
          prompt: 'According to Daniel 5, what happened to Babylon under Belshazzar?',
          options: [
            'It fell and was given to the Medes and Persians',
            'It became eternal',
            'It repented completely',
            'It stopped being proud',
          ],
          correctIndex: 0,
          explanation:
            'Daniel 5 says Babylon was weighed, found wanting, divided, and given to the Medes and Persians.',
        },
        {
          id: 'sam-l2-q5',
          kind: 'reflection',
          prompt: 'What is one "tower" you may be building instead of trusting God?',
          explanation:
            'Ancient Babylon shows that unbelief, self-exaltation, and control lead to confusion and collapse. God calls us to trust Him instead.',
        },
      ],
    },
  },
  'the-way-of-self-exaltation': {
    openingThought: `Babylon has a direction.

Upward.

It wants to climb, dominate, control, and make a name for itself.

That was the spirit of Babel.

That was the spirit of Nebuchadnezzar.

That was the spirit behind Lucifer's fall.

But Jesus moves in the opposite direction.

He steps down.

He humbles Himself.

He serves.

He gives Himself.

He refuses coercion.

He wins by love.

Babylon says, "I will ascend."

Jesus says, "I will descend to save."

That contrast exposes the heart of the second angel's message.

God is calling us out of self-exalting religion and into the humble, self-giving love of Christ.`,
    scriptureRef: 'Philippians 2:5-8',
    scriptureQuote: `Let this mind be in you, which was also in Christ Jesus.

Who, being in the form of God, thought it not robbery to be equal with God.

But made himself of no reputation, and took upon him the form of a servant.

And being found in fashion as a man, he humbled himself, and became obedient unto death, even the death of the cross.`,
    scriptureAfterPrimary: `Jesus reveals the opposite of Babylon: humility, service, and self-giving love even to the cross.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Philippians 2:9-11',
        quote: 'Wherefore God also hath highly exalted him.',
      },
      {
        type: 'scripture',
        reference: 'Isaiah 14:13-14',
        quote: `I will ascend into heaven.

I will exalt my throne above the stars of God.

I will be like the most High.`,
      },
      {
        type: 'scripture',
        reference: 'Isaiah 14:15',
        quote: 'Yet thou shalt be brought down to hell, to the sides of the pit.',
      },
      {
        type: 'scripture',
        reference: 'Matthew 23:11-12',
        quote: `He that is greatest among you shall be your servant.

And whosoever shall exalt himself shall be abased; and he that shall humble himself shall be exalted.`,
      },
      {
        type: 'scripture',
        reference: 'Luke 14:11',
        quote: 'For whosoever exalteth himself shall be abased; and he that humbleth himself shall be exalted.',
      },
      {
        type: 'scripture',
        reference: 'James 4:6',
        quote: 'God resisteth the proud, but giveth grace unto the humble.',
      },
    ],
    teachingPoints: [
      `1. Babylon follows the upward path of pride

Isaiah 14 shows the spirit of self-exaltation:

I will ascend.

I will exalt my throne.

I will be like the Most High.

That is the root principle of Babylon.

It is the desire to rise by self-promotion, control, domination, and spiritual independence from God.

The issue is not ambition itself.

The issue is ambition corrupted by pride.

Babylon wants elevation without surrender.`,
      `2. Jesus follows the downward path of love

Philippians 2 shows the opposite movement.

Jesus does not grasp for status.

He makes Himself of no reputation.

He takes the form of a servant.

He humbles Himself.

He becomes obedient unto death.

The cross is the total opposite of Babylon.

Babylon climbs over others to preserve self.

Jesus descends beneath others to save them.`,
      `3. God exalts the humble

Philippians says that because Jesus humbled Himself, God highly exalted Him.

Jesus teaches the same principle:

Whoever exalts himself will be humbled.

Whoever humbles himself will be exalted.

This is not just a motivational quote.

It is how God's kingdom works.

True greatness is not self-exaltation.

True greatness is love, service, humility, and surrender to God.`,
      `4. Babylon can live inside religious people

The danger is thinking Babylon is only "out there."

Babylon is also a principle that can live in the heart.

A person can talk about truth and still be proud.

A person can defend doctrine and still crave control.

A person can condemn Babylon while acting Babylonian.

That is not cute. That is spiritual irony with a bad haircut.

The second angel's message must search us too.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Self-Exaltation',
      lemma: 'רוּם',
      transliteration: 'rum',
      meaning:
        'The attempt to lift oneself up through pride, control, status, domination, or independence from God.',
      strongs: 'H7311',
      reference: 'Isaiah 14:13-14',
      note: `Self-exaltation is the spirit of Babylon.

Jesus reveals the opposite way: humility, service, self-giving love, and trust in the Father.

God's kingdom does not rise by force. It conquers through love.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The contrast between Christ and Babylon is one of the clearest contrasts in Scripture.

Babylon says:

I will ascend.

Jesus says:

I will humble Myself.

Babylon says:

Make a name for yourself.

Jesus says:

Take the form of a servant.

Babylon says:

Control others.

Jesus says:

Wash their feet.

Babylon says:

Use power to preserve self.

Jesus says:

Give yourself to save others.

Babylon's upward path ends in a fall.

Christ's downward path ends in exaltation.

That means the second angel's message is not merely about identifying a false system.

It is about choosing a way.

Will we live by the upward grasping spirit of Babylon, or by the downward self-giving love of Jesus?`,
    },
    studyInsightBlocks: [
      {
        type: 'christVsBabylonContrast',
        title: 'Two Opposite Ways',
        christScriptureRef: 'Philippians 2:5-11',
        babylonScriptureRef: 'Isaiah 14:12-15',
        caption:
          'Jesus reveals greatness through humility. Babylon seeks greatness through self-exaltation.',
      },
      {
        type: 'ancientBabylonPattern',
        title: 'The Pattern of Babylon',
        highlightedIndices: [1],
        caption:
          'Babylon\'s pattern begins with unbelief and grows into pride, confusion, forced worship, and fall.',
      },
      {
        type: 'scriptureChain',
        title: 'The Way of Self-Exaltation',
        references: [
          { reference: 'Isaiah 14:12-15' },
          { reference: 'Philippians 2:5-11' },
          { reference: 'Matthew 23:11-12' },
          { reference: 'Luke 14:11' },
          { reference: 'James 4:6-10' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: Babylon follows the upward path of pride and self-exaltation. Jesus reveals the downward path of humility, service, and self-giving love.',
      },
    ],
    reflectPrompt: `Where are you tempted to choose the upward path of self-exaltation instead of the downward path of Christlike humility?

Think about pride, control, ambition, ministry, social media, relationships, work, being right, being noticed, and whether you are seeking God's glory or your own name.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, practice one downward step.

Choose one:

Serve without being seen.

Apologize without defending yourself.

Let someone else receive credit.

Stop trying to control the outcome.

Choose gentleness when you could flex authority.

Listen before correcting.

Do something kind with no announcement.

Then ask:

"Did this look more like Jesus or more like Babylon?"

This is where the study gets personal.

Babylon is not defeated in us by merely naming it.

It is defeated as we receive the mind of Christ.

Prayer:

Jesus, give me Your mind. Deliver me from pride, self-exaltation, control, and the desire to make a name for myself. Teach me the greatness of humility and the power of self-giving love. Help me follow Your downward path of service, trusting that the Father lifts up the humble in His time and His way. Amen.`,
    prayer: '',
    completionSummary:
      'Babylon follows the upward path of pride and self-exaltation. Jesus reveals the downward path of humility, service, and self-giving love.',
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'sam-l3-q1',
          prompt: 'According to Isaiah 14, what attitude is repeated in the spirit of self-exaltation?',
          options: ['"I will ascend"', '"I will serve"', '"I will humble myself"', '"I will trust God\'s mercy"'],
          correctIndex: 0,
          explanation:
            'Isaiah 14 describes the self-exalting spirit with repeated "I will" statements, including "I will ascend" and "I will exalt my throne."',
        },
        {
          id: 'sam-l3-q2',
          prompt: 'According to Philippians 2, what did Jesus do?',
          options: [
            'He humbled Himself',
            'He exalted Himself by force',
            'He made worship compulsory',
            'He sought His own name above others',
          ],
          correctIndex: 0,
          explanation:
            'Philippians says Jesus made Himself of no reputation, took the form of a servant, and humbled Himself.',
        },
        {
          id: 'sam-l3-q3',
          prompt: 'According to Matthew 23:11, who is greatest among God\'s people?',
          options: ['The servant', 'The most controlling person', 'The proudest person', 'The one who forces worship'],
          correctIndex: 0,
          explanation: 'Jesus said the greatest among you shall be your servant.',
        },
        {
          id: 'sam-l3-q4',
          prompt: 'According to James 4:6, what does God give to the humble?',
          options: ['Grace', 'Rejection', 'Confusion', 'Pride'],
          correctIndex: 0,
          explanation: 'James says God resists the proud but gives grace to the humble.',
        },
        {
          id: 'sam-l3-q5',
          kind: 'reflection',
          prompt:
            'What is one practical way you can choose the humility of Jesus over the pride of Babylon this week?',
          explanation:
            'The second angel\'s message is not only about exposing false systems. It also calls us to reject Babylonian pride in our own hearts and receive the mind of Christ.',
        },
      ],
    },
  },
  'end-time-babylon': {
    openingThought: `Revelation does not leave Babylon vague.

It gives identifiers.

Not so we can become arrogant.

Not so we can attack people.

Not so we can become prophecy detectives with bad attitudes.

Revelation identifies Babylon because God wants His people to recognize systems that misrepresent Him.

End-time Babylon is not merely a political problem.

It is a spiritual problem.

It is a religious system that claims to represent God while operating by principles contrary to His character.

Self-exaltation.

Coercion.

False worship.

Political alliance.

Blasphemous claims.

Persecution.

Confusion.

The point is not to hate people inside Babylon.

The point is to see the system clearly and hear God's loving call to come out.`,
    scriptureRef: 'Revelation 17:1-2',
    scriptureQuote: `Come hither; I will shew unto thee the judgment of the great whore that sitteth upon many waters.

With whom the kings of the earth have committed fornication.`,
    scriptureAfterPrimary: `Revelation 17 portrays end-time Babylon as a global religious system joined to worldly power, not as a call to hate people trapped inside it.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Revelation 17:3',
        quote: 'I saw a woman sit upon a scarlet coloured beast, full of names of blasphemy.',
      },
      {
        type: 'scripture',
        reference: 'Revelation 17:4',
        quote: 'Having a golden cup in her hand full of abominations and filthiness of her fornication.',
      },
      {
        type: 'scripture',
        reference: 'Revelation 17:6',
        quote: 'And I saw the woman drunken with the blood of the saints, and with the blood of the martyrs of Jesus.',
      },
      {
        type: 'scripture',
        reference: 'Revelation 17:15',
        quote: 'The waters which thou sawest... are peoples, and multitudes, and nations, and tongues.',
      },
      {
        type: 'scripture',
        reference: 'Revelation 17:18',
        quote: 'And the woman which thou sawest is that great city, which reigneth over the kings of the earth.',
      },
      {
        type: 'scripture',
        reference: 'John 10:33',
        quote: 'Thou, being a man, makest thyself God.',
      },
      {
        type: 'scripture',
        reference: 'Mark 2:7',
        quote: 'Who can forgive sins but God only?',
      },
    ],
    teachingPoints: [
      `1. Babylon is pictured as an unfaithful woman

In Bible symbolism, a pure woman can represent God's faithful people.

In Revelation 17, Babylon is pictured as an unfaithful woman.

This points to religious unfaithfulness.

Babylon is not secular atheism.

Babylon is corrupted religion.

It claims spiritual identity but operates contrary to the character of God.

That is what makes it so dangerous.

Bad religion can damage people more deeply than open unbelief because it uses God's name while misrepresenting His heart.`,
      `2. Babylon has worldwide influence

The woman sits on many waters.

Revelation 17:15 explains that the waters represent peoples, multitudes, nations, and tongues.

This means Babylon is not a small local influence.

It is global.

Its confusion spreads widely.

Its teachings affect nations.

Its religious influence shapes how masses of people think about God, worship, authority, and salvation.`,
      `3. Babylon joins religion with worldly power

Revelation says the kings of the earth commit fornication with Babylon.

This symbolizes unfaithful religion forming alliances with political power.

When religion seeks state power to accomplish its purposes, coercion follows.

This is one of Babylon's clearest marks.

God invites.

Babylon pressures.

God persuades through love.

Babylon enforces through power.`,
      `4. Babylon makes claims that belong only to God

Revelation says Babylon is full of names of blasphemy.

Scripture defines blasphemy as a human being claiming the position of God or claiming authority that belongs only to God, such as the power to forgive sins.

This matters because Babylon's core issue is self-exaltation in religious form.

It places human authority where only God belongs.`,
      `5. Babylon persecutes God's people

Revelation says Babylon is drunk with the blood of the saints and martyrs of Jesus.

This is a severe warning.

False religion becomes most dangerous when it uses force in the name of God.

Any system that claims to represent Christ while persecuting conscience contradicts the character of Christ.

Jesus laid down His life for others.

Babylon takes life to preserve power.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Blasphemy',
      lemma: 'βλασφημία',
      transliteration: 'blasphēmia',
      meaning:
        'A human claim to occupy God\'s place, speak with God\'s authority apart from Him, or take to oneself what belongs only to God.',
      strongs: 'G988',
      reference: 'Mark 2:7',
      note: `Babylon's blasphemy is not merely verbal disrespect.

It is a system of religious self-exaltation that places human authority in the position of God and distorts the character of Christ.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `Revelation 17 gives a profile of end-time Babylon.

It is religious.

It is global.

It is politically connected.

It makes blasphemous claims.

It spreads corrupting teachings.

It persecutes.

It rules as a great city.

Those identifiers point to a system, not to the sincerity of every individual within it.

That distinction is non-negotiable.

God is not attacking sincere people who have inherited confusion.

God is exposing the system that created the confusion.

And Revelation 18 makes that even clearer when God says:

"Come out of her, My people."

That phrase tells us two things at once:

Babylon is fallen.

God still has people inside it.

So the posture of this message should be clarity without hatred.

Conviction without arrogance.

Truth without cruelty.

If we identify Babylon but speak with Babylon's spirit, we missed the assignment.`,
    },
    studyInsightBlocks: [
      {
        type: 'endTimeBabylonIdentifiers',
        title: 'End-Time Babylon in Revelation 17',
        caption:
          'Revelation 17 identifies Babylon by its character, influence, alliances, claims, corruption, persecution, and ruling power.',
      },
      {
        type: 'scriptureChain',
        title: 'End-Time Babylon',
        references: [
          { reference: 'Revelation 17:1-6' },
          { reference: 'Revelation 17:15' },
          { reference: 'Revelation 17:18' },
          { reference: 'John 10:33' },
          { reference: 'Mark 2:7' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: End-time Babylon is identified as a global religious-political system that claims to represent God while operating by principles contrary to His character.',
      },
    ],
    reflectPrompt: `Why is it important to distinguish between a false religious system and sincere people inside that system?

Think about humility, love, inherited beliefs, spiritual confusion, God's mercy, and how truth can be spoken clearly without contempt.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, practice truth without contempt.

Choose one belief or system you strongly disagree with.

Then ask:

"Can I explain the issue clearly without mocking people?"

"Can I separate the system from the individual?"

"Can I speak with conviction and still sound like Jesus?"

"Am I trying to rescue people or win an argument?"

This is where prophetic truth needs sanctified delivery.

Being right is not enough.

The spirit in which truth is carried matters.

Do not expose Babylon with a Babylonian attitude.

Prayer:

Father, give me discernment to recognize systems that misrepresent Your character. Keep me from arrogance, contempt, and harshness. Help me love people while rejecting confusion. Teach me to speak truth clearly, humbly, and faithfully. Let the character of Jesus shape not only what I believe, but how I share it. Amen.`,
    prayer: '',
    completionSummary:
      'Revelation identifies end-time Babylon by its character, influence, alliances, claims, corruption, persecution, and ruling power. God exposes the system because He loves the people trapped inside it.',
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'sam-l4-q1',
          prompt: 'In Revelation 17, Babylon is symbolized as what?',
          options: ['An unfaithful woman', 'A pure river only', 'A faithful bride', 'A hidden lamb'],
          correctIndex: 0,
          explanation:
            'Revelation 17 portrays Babylon as an unfaithful woman, symbolizing religious unfaithfulness.',
        },
        {
          id: 'sam-l4-q2',
          prompt: 'According to Revelation 17:15, what do the waters represent?',
          options: [
            'Peoples, multitudes, nations, and tongues',
            'Literal rain only',
            'One small village',
            'The throne of God',
          ],
          correctIndex: 0,
          explanation:
            'Revelation explains that the waters represent peoples, multitudes, nations, and tongues.',
        },
        {
          id: 'sam-l4-q3',
          prompt: 'What does Babylon\'s relationship with the kings of the earth symbolize?',
          options: [
            'Unfaithful religion joining with worldly political power',
            'Pure worship',
            'Complete separation from power',
            'The gospel going forward without compromise',
          ],
          correctIndex: 0,
          explanation:
            'Babylon\'s fornication with the kings of the earth symbolizes religious-political alliance and unfaithfulness.',
        },
        {
          id: 'sam-l4-q4',
          prompt: 'According to Revelation 17:6, what is Babylon drunk with?',
          options: [
            'The blood of the saints and martyrs of Jesus',
            'The waters of life',
            'The mercy of Christ',
            'The bread of heaven',
          ],
          correctIndex: 0,
          explanation:
            'Revelation says Babylon is drunk with the blood of the saints and martyrs of Jesus, pointing to persecution.',
        },
        {
          id: 'sam-l4-q5',
          kind: 'reflection',
          prompt:
            'How can you speak truth about Babylon while still showing love for people God is trying to rescue?',
          explanation:
            'Revelation exposes false systems, but God calls sincere people "My people." Truth must be spoken with clarity, humility, and Christlike love.',
        },
      ],
    },
  },
  'confusion-about-god': {
    openingThought: `Babylon's greatest damage is not political.

It is theological.

Babylon confuses people about God.

It makes God look controlling when He is loving.

It makes salvation look earned when it is received by grace.

It makes worship look forced when God invites freely.

It makes judgment look cruel when God is setting things right.

It makes obedience look like fear when Jesus says obedience flows from love.

That is why Revelation 18 says the earth is lightened with God's glory before the call comes out of Babylon.

The cure for Babylon's darkness is not louder religion.

It is a clearer picture of God's character in Jesus.`,
    scriptureRef: 'Revelation 18:1',
    scriptureQuote:
      'And after these things I saw another angel come down from heaven, having great power; and the earth was lightened with his glory.',
    scriptureAfterPrimary: `Before Babylon's fall is fully proclaimed, the earth is lightened with the glory of God's character.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Revelation 18:2-3',
        quote: `Babylon the great is fallen, is fallen.

For all nations have drunk of the wine of the wrath of her fornication.`,
      },
      {
        type: 'scripture',
        reference: '2 Corinthians 4:3-4',
        quote: `But if our gospel be hid, it is hid to them that are lost.

In whom the god of this world hath blinded the minds of them which believe not.`,
      },
      {
        type: 'scripture',
        reference: '2 Corinthians 4:6',
        quote: `For God, who commanded the light to shine out of darkness, hath shined in our hearts.

To give the light of the knowledge of the glory of God in the face of Jesus Christ.`,
      },
      {
        type: 'scripture',
        reference: 'John 14:9',
        quote: 'He that hath seen me hath seen the Father.',
      },
      {
        type: 'scripture',
        reference: 'Matthew 11:28-30',
        quote: `Come unto me, all ye that labour and are heavy laden, and I will give you rest.

For I am meek and lowly in heart.`,
      },
      {
        type: 'scripture',
        reference: 'Romans 8:15',
        quote: `For ye have not received the spirit of bondage again to fear.

But ye have received the Spirit of adoption, whereby we cry, Abba, Father.`,
      },
    ],
    teachingPoints: [
      `1. Babylon darkens the picture of God

Revelation says Babylon makes the nations drink her wine.

That wine represents false teaching and spiritual intoxication.

It clouds the mind.

It distorts worship.

It makes people unable to see God clearly.

Babylon's greatest problem is not that it is merely wrong.

It is that it makes God look unlike Jesus.`,
      `2. God answers confusion with glory

Revelation 18 says the earth is lightened with God's glory.

God's glory is the beauty of His character.

This means the answer to Babylon's confusion is a clearer revelation of who God really is.

God does not defeat darkness by creating more fear.

He shines light.

The final message must reveal the character of God, not just expose error.`,
      `3. Jesus reveals the Father

Jesus said, "He that hath seen me hath seen the Father."

That is the test.

If a teaching makes the Father look unlike Jesus, something is wrong.

Jesus shows us God's heart.

He is meek and lowly.

He gives rest.

He draws sinners.

He heals the broken.

He tells the truth without cruelty.

He exposes hypocrisy without losing love.

He lays down His life.

Any picture of God that contradicts Jesus must fall.`,
      `4. The gospel frees us from religious fear

Romans says believers have not received the spirit of bondage again to fear.

They have received the Spirit of adoption.

Babylon produces fear-based religion.

The gospel produces sonship, daughterhood, belonging, trust, and freedom.

God does not want people trapped in religious dread.

He wants them to know Him as Father through Jesus Christ.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Glory',
      lemma: 'δόξα',
      transliteration: 'doxa',
      meaning: 'The revealed beauty, goodness, weight, and character of God.',
      strongs: 'G1391',
      reference: 'Revelation 18:1',
      note: `Revelation 18 says the earth is lightened with God's glory before Babylon's fall is fully proclaimed.

This means Babylon's confusion is exposed when God's true character is revealed through Jesus Christ.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `Babylon falls when God is seen clearly.

That is the deeper issue.

People can leave a false system physically and still carry a false picture of God mentally.

They can stop believing one error but keep the fear, pride, control, and spiritual suspicion Babylon taught them.

So the second angel's message must go deeper than labels.

It must bring people face to face with Jesus.

Jesus reveals that God is not coercive.

Jesus reveals that God is not arbitrary.

Jesus reveals that God does not save by manipulation.

Jesus reveals that God's power is self-giving love.

Jesus reveals that the Father Himself loves us.

That light exposes Babylon's darkness.

The goal is not merely to prove Babylon wrong.

The goal is to help people see God right.`,
    },
    studyInsightBlocks: [
      {
        type: 'comeOutCallFlow',
        title: 'Come Out of Her, My People',
        caption:
          'God calls people out of Babylon because He loves them and wants them free.',
      },
      {
        type: 'scriptureChain',
        title: 'Confusion About God',
        references: [
          { reference: 'Revelation 18:1-3' },
          { reference: '2 Corinthians 4:3-6' },
          { reference: 'John 14:9' },
          { reference: 'Matthew 11:28-30' },
          { reference: 'Romans 8:15' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: Babylon\'s deepest damage is confusion about God\'s character. Revelation answers that darkness with the glory of God revealed in Jesus Christ.',
      },
    ],
    reflectPrompt: `What false picture of God has most shaped your faith: fear, control, distance, harshness, performance, or distrust?

Think about how you respond to guilt, prayer, obedience, judgment, Sabbath, confession, and whether you relate to God as Father or as a threat.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, compare one belief you have about God with the life of Jesus.

Ask:

"Does this belief look like Jesus?"

"Does it produce trust or fear?"

"Does it lead me into freedom or bondage?"

"Does it make the Father look loving, truthful, and good?"

"Does it make me more like Christ?"

If the belief does not look like Jesus, do not protect it because it is familiar.

Let the light correct you.

Babylon survives through confusion.

Faith grows through seeing God clearly.

Prayer:

Father, shine the light of Your glory into every confused place in my mind and heart. Show me Your character through Jesus. Deliver me from fear-based religion, false pictures of You, and anything that makes You seem unlike Christ. Teach me to trust Your love, receive Your freedom, and reflect Your character clearly to others. Amen.`,
    prayer: '',
    completionSummary:
      'Babylon\'s deepest damage is confusion about God. Revelation answers that darkness with the glory of God\'s character revealed in Jesus Christ.',
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'sam-l5-q1',
          prompt: 'According to Revelation 18:1, what was the earth lightened with?',
          options: ['God\'s glory', 'Babylon\'s pride', 'The dragon\'s darkness', 'Human confusion'],
          correctIndex: 0,
          explanation:
            'Revelation says the earth was lightened with the angel\'s glory, pointing to the revelation of God\'s character.',
        },
        {
          id: 'sam-l5-q2',
          prompt: 'According to 2 Corinthians 4:4, what has the god of this world done?',
          options: [
            'Blinded the minds of those who believe not',
            'Revealed Jesus clearly',
            'Ended all deception',
            'Removed all confusion',
          ],
          correctIndex: 0,
          explanation:
            'Paul says the god of this world has blinded minds so they do not see the light of the gospel.',
        },
        {
          id: 'sam-l5-q3',
          prompt: 'According to 2 Corinthians 4:6, where is the knowledge of God\'s glory seen?',
          options: [
            'In the face of Jesus Christ',
            'In Babylon\'s self-exaltation',
            'In forced worship',
            'In human control',
          ],
          correctIndex: 0,
          explanation:
            'The glory of God is seen in the face of Jesus Christ. He is the clearest revelation of the Father\'s character.',
        },
        {
          id: 'sam-l5-q4',
          prompt: 'According to Matthew 11:29, how does Jesus describe Himself?',
          options: ['Meek and lowly in heart', 'Proud and controlling', 'Harsh and distant', 'Confused and uncertain'],
          correctIndex: 0,
          explanation: 'Jesus describes Himself as meek and lowly in heart, showing the true character of God.',
        },
        {
          id: 'sam-l5-q5',
          kind: 'reflection',
          prompt: 'What is one false picture of God that Jesus is correcting in you?',
          explanation:
            'Babylon confuses people about God. Jesus reveals the Father clearly and leads people into freedom, trust, and love.',
        },
      ],
    },
  },
  'come-out-of-her-my-people': {
    openingThought: `God's call out of Babylon is not cold.

It is personal.

He does not say, "Come out of her, you terrible people."

He says:

"Come out of her, My people."

That phrase matters.

It means God has sincere people inside systems of confusion.

People who love Him.

People who are trying to follow Him.

People who inherited false teaching but still belong to Him.

So the second angel's message is not about hating people.

It is about rescuing people.

God calls His people out because Babylon's confusion damages the soul, distorts worship, and misrepresents His character.

Love tells the truth.

And love also calls people home.`,
    scriptureRef: 'Revelation 18:4',
    scriptureQuote: `And I heard another voice from heaven, saying, Come out of her, my people.

That ye be not partakers of her sins, and that ye receive not of her plagues.`,
    scriptureAfterPrimary: `God's call is merciful: He has people inside Babylon and invites them out before judgment falls.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Revelation 18:5',
        quote: 'For her sins have reached unto heaven, and God hath remembered her iniquities.',
      },
      {
        type: 'scripture',
        reference: 'Hosea 2:23',
        quote: `And I will say to them which were not my people, Thou art my people.

And they shall say, Thou art my God.`,
      },
      {
        type: 'scripture',
        reference: 'John 10:16',
        quote: `And other sheep I have, which are not of this fold: them also I must bring.

And they shall hear my voice; and there shall be one fold, and one shepherd.`,
      },
      {
        type: 'scripture',
        reference: '2 Corinthians 6:17',
        quote: 'Wherefore come out from among them, and be ye separate, saith the Lord.',
      },
      {
        type: 'scripture',
        reference: 'John 8:31-32',
        quote: `If ye continue in my word, then are ye my disciples indeed.

And ye shall know the truth, and the truth shall make you free.`,
      },
      {
        type: 'scripture',
        reference: 'John 8:36',
        quote: 'If the Son therefore shall make you free, ye shall be free indeed.',
      },
    ],
    teachingPoints: [
      `1. God has people inside Babylon

The phrase "My people" is one of the most merciful lines in Revelation.

It means Babylon is fallen, but God's people are still inside it.

This protects us from arrogance.

We should never speak as if everyone inside a confused system is rebellious or insincere.

God knows His people.

He sees hearts we cannot see.`,
      `2. God calls His people out before judgment falls

Revelation says God calls His people out so they do not share in Babylon's sins or receive her plagues.

This is mercy before judgment.

God does not expose Babylon because He enjoys condemnation.

He exposes Babylon so people can leave before its full consequences come.

Warning is love when danger is real.`,
      `3. Jesus gathers His sheep by His voice

Jesus said He has other sheep not of this fold, and He must bring them.

They will hear His voice.

This means the call out of Babylon must sound like Jesus.

Not like hatred.

Not like mockery.

Not like spiritual superiority.

The sheep are gathered by the Shepherd's voice.

If our tone sounds nothing like the Shepherd, we are not helping.`,
      `4. Truth makes people free

Jesus said the truth shall make you free.

Babylon keeps people in bondage through confusion, fear, false worship, human authority, and distorted pictures of God.

Jesus frees people through truth.

Coming out of Babylon is not merely changing religious location.

It is stepping into freedom through Christ.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Come Out',
      lemma: 'ἐξέρχομαι',
      transliteration: 'exerchomai',
      meaning:
        'To separate from, leave behind, or step away from a system, practice, belief, or allegiance that is contrary to God.',
      strongs: 'G1831',
      reference: '2 Corinthians 6:17',
      note: `God's call to "come out" is not rooted in hatred.

It is a loving rescue call.

God invites His people out of confusion, false worship, fear, and control into the freedom of truth in Jesus.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The call out of Babylon teaches us how God handles confused people.

He does not erase them.

He calls them.

He does not treat them as enemies.

He calls them "My people."

He does not leave them in darkness.

He shines light.

He does not force them out.

He speaks truth and invites them into freedom.

That means our spirit must match God's spirit.

We can be clear about Babylon without being cruel to people.

We can expose confusion without mocking those who inherited it.

We can speak truth without sounding like we are happy others are wrong.

That last one needs to land.

God's call out of Babylon should sound like rescue, not ridicule.`,
    },
    studyInsightBlocks: [
      {
        type: 'comeOutCallFlow',
        title: 'Come Out of Her, My People',
        caption:
          'God calls people out of Babylon because He loves them and wants them free.',
      },
      {
        type: 'scriptureChain',
        title: 'Come Out of Her, My People',
        references: [
          { reference: 'Revelation 18:4-5' },
          { reference: 'Hosea 2:23' },
          { reference: 'John 10:16' },
          { reference: '2 Corinthians 6:14-18' },
          { reference: 'John 8:31-36' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: God calls His people out of Babylon, not because He hates them, but because He loves them and wants them free in Jesus.',
      },
    ],
    reflectPrompt: `How can God's call to come out of Babylon shape the way you speak to people who believe differently?

Think about humility, compassion, inherited beliefs, spiritual confusion, tone, truth, freedom, and whether your words sound like the Shepherd's voice.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, practice a rescue tone.

Think of one person or group you believe is caught in spiritual confusion.

Before speaking about them, ask:

"Do I see them as people God loves?"

"Can I speak clearly without contempt?"

"Can I explain truth in a way that sounds like Jesus?"

"Am I trying to win them or win an argument?"

Then pray for them.

Not a fake prayer with attitude.

A real one.

Ask God to shine light, open hearts, and make you safe enough to speak truth with love.

Prayer:

Father, thank You for calling Your people out of confusion because You love them. Help me hear Your voice and follow truth wherever it leads. Remove arrogance, contempt, and harshness from my heart. Teach me to speak clearly and compassionately so others can see Jesus, hear Your call, and walk into freedom. Amen.`,
    prayer: '',
    completionSummary:
      'God calls His people out of Babylon because He loves them. The call is not hatred toward individuals, but a merciful invitation into truth, freedom, and the light of Christ.',
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'sam-l6-q1',
          prompt: 'According to Revelation 18:4, what does God call His people to do?',
          options: [
            'Come out of Babylon',
            'Stay in confusion forever',
            'Worship Babylon',
            'Reject truth completely',
          ],
          correctIndex: 0,
          explanation:
            'God says, "Come out of her, my people," calling His people out of Babylon\'s sins and consequences.',
        },
        {
          id: 'sam-l6-q2',
          prompt: 'What phrase in Revelation 18:4 shows God still has sincere people inside Babylon?',
          options: ['"My people"', '"No people"', '"Forgotten people"', '"Rejected forever"'],
          correctIndex: 0,
          explanation:
            'God calls them "My people," showing His love and ownership even before they come out.',
        },
        {
          id: 'sam-l6-q3',
          prompt: 'According to John 10:16, what will Jesus\' other sheep hear?',
          options: ['His voice', 'Babylon\'s pride', 'The dragon\'s command', 'Human tradition only'],
          correctIndex: 0,
          explanation:
            'Jesus said His other sheep would hear His voice and be gathered into one fold under one Shepherd.',
        },
        {
          id: 'sam-l6-q4',
          prompt: 'According to John 8:32, what does truth do?',
          options: ['Makes people free', 'Keeps people confused', 'Makes people arrogant', 'Replaces Jesus'],
          correctIndex: 0,
          explanation: 'Jesus said, "Ye shall know the truth, and the truth shall make you free."',
        },
        {
          id: 'sam-l6-q5',
          kind: 'reflection',
          prompt: 'Who is someone you need to pray for with more compassion and less contempt?',
          explanation:
            'God\'s call out of Babylon is a rescue call. His people must carry that message with truth, humility, and the love of Jesus.',
        },
      ],
    },
  },
  'babylon-out-of-me': {
    openingThought: `The second angel's message exposes Babylon.

But if we are honest, Babylon is not only a system out there.

Babylon can also live in the human heart.

Pride.

Control.

Self-exaltation.

Religious performance.

Fear-based obedience.

The desire to make a name for ourselves.

The temptation to use truth as a weapon instead of a witness.

God does not only want His people out of Babylon.

He wants Babylon out of His people.

The second angel's message is not complete if we only identify a fallen system but refuse to surrender the same spirit inside ourselves.

Babylon falls when Christ's love rises in the heart.`,
    scriptureRef: 'Revelation 18:7',
    scriptureQuote: `How much she hath glorified herself, and lived deliciously, so much torment and sorrow give her.

For she saith in her heart, I sit a queen, and am no widow, and shall see no sorrow.`,
    scriptureAfterPrimary: `Babylon glorifies herself, but Jesus calls His people to give glory to God and surrender self-exaltation in the heart.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Romans 8:7',
        quote: `Because the carnal mind is enmity against God.

For it is not subject to the law of God, neither indeed can be.`,
      },
      {
        type: 'scripture',
        reference: 'Philippians 2:5-8',
        quote: `Let this mind be in you, which was also in Christ Jesus.

But made himself of no reputation, and took upon him the form of a servant.

He humbled himself, and became obedient unto death, even the death of the cross.`,
      },
      {
        type: 'scripture',
        reference: 'Galatians 5:13',
        quote: 'By love serve one another.',
      },
      {
        type: 'scripture',
        reference: 'Galatians 5:15',
        quote: 'But if ye bite and devour one another, take heed that ye be not consumed one of another.',
      },
      {
        type: 'scripture',
        reference: 'John 13:34-35',
        quote: `A new commandment I give unto you, That ye love one another; as I have loved you.

By this shall all men know that ye are my disciples, if ye have love one to another.`,
      },
    ],
    teachingPoints: [
      `1. Babylon glorifies itself

Revelation says Babylon glorifies herself.

That is the opposite of the first angel's message, which says, "Give glory to God."

Babylon takes the glory that belongs to God and redirects it toward self.

That is the spirit of self-exaltation.

It can show up in religious systems.

It can also show up in us.

Whenever faith becomes about our name, our control, our superiority, or our image, Babylon is closer than we think.`,
      `2. The carnal mind resists God

Romans says the carnal mind is enmity against God.

That means the spirit of Babylon is not only institutional.

It is human.

The natural heart resists surrender.

It wants control.

It wants independence.

It wants to be right without being humble.

It wants religion without dying to self.

Only Christ can change that.`,
      `3. Jesus gives us a different mind

Philippians says, "Let this mind be in you, which was also in Christ Jesus."

Jesus does not operate by Babylon's spirit.

He does not glorify Himself.

He humbles Himself.

He takes the form of a servant.

He gives Himself for others.

The cure for Babylon in the heart is not merely better information.

It is the mind of Christ.`,
      `4. Love is the mark of Christ's disciples

Jesus said His disciples would be known by love.

Not merely by correct prophecy charts.

Not merely by exposing error.

Not merely by being loud about truth.

Love is the identifying mark.

That does not weaken truth.

It proves truth has reached the heart.

If our doctrine is correct but our spirit is proud, something is still fallen.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Carnal',
      lemma: 'σάρξ',
      transliteration: 'sarx',
      meaning: 'A mindset ruled by selfishness, pride, human nature, and resistance to God\'s way.',
      strongs: 'G4561',
      reference: 'Romans 8:7',
      note: `The carnal mind carries the spirit of Babylon because it resists surrender to God.

Only the mind of Christ can replace pride, control, and self-exaltation with humility, service, and self-giving love.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The Second Angel's Message has shown a clear biblical picture.

Babylon is fallen.

Ancient Babylon reveals rebellion, self-exaltation, confusion, forced worship, and collapse.

End-time Babylon represents religious confusion, political alliance, blasphemous claims, persecution, and false worship.

God calls His people out because He loves them.

But the final lesson is personal.

It is possible to leave Babylon physically while carrying Babylon spiritually.

That happens when people leave a false system but keep the pride.

Keep the control.

Keep the fear.

Keep the harshness.

Keep the self-exaltation.

Keep the need to dominate others with truth.

That is not freedom yet.

Jesus calls us into something better.

Not just anti-Babylon.

Christlike.

Not just correct.

Converted.

Not just separated from error.

Filled with love.`,
    },
    studyInsightBlocks: [
      {
        type: 'christVsBabylonContrast',
        title: 'Two Opposite Ways',
        christScriptureRef: 'Philippians 2:5-11',
        babylonScriptureRef: 'Revelation 18:7',
        caption:
          'Jesus calls us out of Babylon\'s pride and into His humility, service, and love.',
      },
      {
        type: 'comeOutCallFlow',
        title: 'Come Out of Her, My People',
        caption:
          'God calls people out of Babylon because He loves them and wants them free.',
      },
      {
        type: 'secondAngelsMessageBreakdown',
        title: 'The Second Angel\'s Message',
        subtitle: 'Revelation 14:8',
        caption:
          'The second angel exposes Babylon\'s confusion so people can come into the light of Christ.',
      },
      {
        type: 'scriptureChain',
        title: 'Babylon Out of Me',
        references: [
          { reference: 'Revelation 18:7' },
          { reference: 'Romans 8:7' },
          { reference: 'Philippians 2:5-11' },
          { reference: 'Galatians 5:13-15' },
          { reference: 'John 13:34-35' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: The second angel\'s message calls us not only to leave false systems, but to let Jesus remove pride, control, self-exaltation, and fear-based religion from our hearts.',
      },
    ],
    reflectPrompt: `Where do you still see the spirit of Babylon in yourself?

Think about pride, control, image, ambition, harshness, religious superiority, fear-based obedience, manipulation, or the desire to be right more than the desire to love.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, ask God to show you one Babylonian pattern in your own heart.

Do not make this vague.

Ask directly:

"Lord, where am I proud?"

"Where am I controlling?"

"Where am I using truth without love?"

"Where am I trying to make a name for myself?"

"Where does my religion not look like Jesus?"

Then choose one act of Christlike humility.

Serve quietly.

Apologize honestly.

Stop performing.

Tell the truth gently.

Release control.

Love someone without needing credit.

Coming out of Babylon is not only about location.

It is about transformation.

Prayer:

Jesus, call me out of every form of Babylon, including the pride and control inside my own heart. Give me Your mind. Replace self-exaltation with humility, fear with trust, coercion with love, and harshness with compassion. Make my life a witness to Your self-giving character. Help me not only leave confusion, but become truly free in You. Amen.`,
    prayer: '',
    completionSummary:
      'The second angel\'s message calls us to leave Babylon\'s confusion and let Jesus remove pride, control, and self-exaltation from our hearts.',
    seriesCompleteScreen: {
      title: 'Study Complete',
      message:
        'You have completed The Second Angel\'s Message. Babylon represents confusion, self-exaltation, false worship, and coercion, but Jesus calls His people into truth, freedom, humility, and self-giving love.',
      primaryCta: { label: 'Back to Foundations Path', href: '/paths/foundations' },
      secondaryCta: {
        label: 'Review this study',
        href: '/study-library/the-second-angels-message',
      },
    },
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'sam-l7-q1',
          prompt: 'According to Revelation 18:7, what did Babylon do?',
          options: ['Glorified herself', 'Humbled herself like Jesus', 'Served quietly', 'Gave glory only to God'],
          correctIndex: 0,
          explanation:
            'Revelation says Babylon glorified herself, revealing the spirit of self-exaltation.',
        },
        {
          id: 'sam-l7-q2',
          prompt: 'According to Romans 8:7, what is the carnal mind toward God?',
          options: ['Enmity against God', 'Fully surrendered to God', 'Naturally humble', 'Always obedient'],
          correctIndex: 0,
          explanation:
            'Romans says the carnal mind is enmity against God and is not subject to the law of God.',
        },
        {
          id: 'sam-l7-q3',
          prompt: 'According to Philippians 2, what mind should be in believers?',
          options: [
            'The mind of Christ Jesus',
            'The mind of Babylon',
            'The mind of self-exaltation',
            'The mind of forced worship',
          ],
          correctIndex: 0,
          explanation:
            'Paul says, "Let this mind be in you, which was also in Christ Jesus," pointing to Christ\'s humility and self-giving love.',
        },
        {
          id: 'sam-l7-q4',
          prompt: 'According to John 13:35, how will people know Jesus\' disciples?',
          options: [
            'By their love for one another',
            'By their pride',
            'By their control over others',
            'By their harshness',
          ],
          correctIndex: 0,
          explanation: 'Jesus said all people would know His disciples by their love for one another.',
        },
        {
          id: 'sam-l7-q5',
          kind: 'reflection',
          prompt: 'What is one Babylonian pattern Jesus is calling you to surrender?',
          explanation:
            'The second angel\'s message is not only about exposing Babylon outside us. It also calls us to let Jesus remove pride, control, and self-exaltation from within us.',
        },
      ],
    },
  },
}
