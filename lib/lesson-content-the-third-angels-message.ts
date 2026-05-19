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

/** Guided reader lessons for "The Third Angel's Message" (Foundations). */
export const theThirdAngelsMessageSeriesLessonLibrary: Record<string, LessonReaderContent> = {
  'true-worship-cannot-be-forced': {
    openingThought: `The third angel's message is one of the strongest warnings in Scripture.

But before we talk about the beast, the image, or the mark, we need to understand the issue underneath all of it:

Worship.

And true worship cannot be forced.

Forced worship is a contradiction.

God is love, and love requires freedom.

You can force behavior.

You can pressure compliance.

You can threaten people into outward submission.

But you cannot coerce love.

The third angel's message warns that a final global crisis will center on worship, allegiance, authority, and conscience. But the warning is not meant to create panic.

It is meant to protect love.

God wants the heart, not robotic compliance.`,
    scriptureRef: 'Revelation 14:9-10',
    scriptureQuote: `And the third angel followed them, saying with a loud voice.

If any man worship the beast and his image, and receive his mark in his forehead, or in his hand.

The same shall drink of the wine of the wrath of God.`,
    scriptureAfterPrimary: `The third angel warns against worshiping the beast and his image and receiving his mark.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Revelation 14:12',
        quote: `Here is the patience of the saints.

Here are they that keep the commandments of God, and the faith of Jesus.`,
      },
      {
        type: 'scripture',
        reference: '1 John 4:8',
        quote: 'He that loveth not knoweth not God; for God is love.',
      },
      {
        type: 'scripture',
        reference: '1 John 4:19',
        quote: 'We love him, because he first loved us.',
      },
      {
        type: 'scripture',
        reference: '2 Corinthians 3:17',
        quote: 'Where the Spirit of the Lord is, there is liberty.',
      },
      {
        type: 'scripture',
        reference: 'John 4:23-24',
        quote: `The true worshippers shall worship the Father in spirit and in truth.

God is a Spirit: and they that worship him must worship him in spirit and in truth.`,
      },
    ],
    teachingPoints: [
      `1. The third angel's message is about worship

Revelation 14:9 warns against worshiping the beast and his image.

That means the final crisis is not merely about information.

It is about allegiance.

Who has your worship?

Whose authority shapes your conscience?

What power defines truth for you?

The third angel's message calls us to see that worship belongs to God alone.`,
      `2. Forced worship cannot be true worship

Jesus said true worshipers worship the Father in spirit and in truth.

That means real worship involves the heart, the mind, the conscience, and the free response of love.

If worship is forced, it is no longer true worship.

It becomes outward compliance.

Babylon and the beast system use coercion.

God uses revelation, truth, love, and invitation.

That difference is not small.

It is the difference between Christ and antichrist.`,
      `3. Love is the only true motive for worship

First John says we love God because He first loved us.

That is the gospel logic of worship.

God's love awakens our love.

Fear can produce compliance.

Pressure can produce silence.

Threats can produce outward conformity.

But only love can produce true worship.

This is why any system that uses civil power to force worship misrepresents God.`,
      `4. Liberty belongs wherever the Spirit of God is

Second Corinthians says where the Spirit of the Lord is, there is liberty.

That does not mean lawlessness.

It means God does not bypass the will.

He does not erase conscience.

He does not demand fake devotion.

God's Spirit leads people into truth while preserving their freedom.

The beast system violates liberty of conscience.

The Spirit of Christ protects it.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Worship',
      lemma: 'προσκυνέω',
      transliteration: 'proskuneo',
      meaning:
        'The heart\'s allegiance, reverence, trust, surrender, and devotion given to the one we recognize as worthy.',
      strongs: 'G4352',
      reference: 'Revelation 14:9',
      note: `True worship cannot be coerced because worship is rooted in love.

The third angel's message warns against a system that uses pressure and civil power to create outward allegiance while violating the freedom God built into love.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The third angel's message is serious because worship is serious.

The warning is strong because coerced worship is a direct attack on the character of God.

If God is love, then true worship must be free.

If God saves through love, then forced religion misrepresents Him.

If Jesus draws people by self-giving sacrifice, then a system that threatens people into worship is working by a different spirit.

This is why the third angel's message must be understood through the gospel.

It is not God trying to scare people into loyalty.

That would contradict the message itself.

It is God warning the world against systems that replace love with force, truth with pressure, and worship with compliance.`,
    },
    studyInsightBlocks: [
      {
        type: 'thirdAngelsMessageBreakdown',
        title: 'The Third Angel\'s Message',
        subtitle: 'Revelation 14:9-12',
        caption:
          'The third angel\'s message warns against coerced worship and calls people to faithful love.',
      },
      {
        type: 'trueWorshipVsCoercion',
        title: 'True Worship Cannot Be Forced',
        caption: 'God seeks love, not forced compliance.',
      },
      {
        type: 'scriptureChain',
        title: 'True Worship Cannot Be Forced',
        references: [
          { reference: 'Revelation 14:9-12' },
          { reference: '1 John 4:8' },
          { reference: '1 John 4:19' },
          { reference: '2 Corinthians 3:17' },
          { reference: 'John 4:23-24' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: The third angel\'s message warns against coerced worship because true worship can only be awakened by love.',
      },
    ],
    reflectPrompt: `Do you relate to God more through love, fear, pressure, or trust?

Think about obedience, worship, guilt, Sabbath, prayer, judgment, religious pressure, and whether your loyalty to God is being awakened by His love or driven by fear.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, examine the motive behind your worship.

Ask:

"Am I worshiping because I love God or because I feel pressured?"

"Do I obey because I trust His character or because I am afraid of being rejected?"

"Do I pressure others in the name of truth?"

"Does my faith preserve liberty of conscience?"

"Does my worship look like love?"

Then practice one act of voluntary worship.

Not rushed.

Not performative.

Not because someone is watching.

Choose one:

Pray honestly.

Read Scripture slowly.

Keep Sabbath with joy.

Serve quietly.

Confess freely.

Worship from gratitude.

God does not want forced compliance.

He wants your heart.

Prayer:

Father, thank You that Your love awakens love in me. Deliver me from fear-based religion, forced obedience, and empty compliance. Teach me to worship You in spirit and in truth. Help me honor the freedom You give while choosing You with my whole heart. Let my worship be rooted in love, trust, and the faith of Jesus. Amen.`,
    prayer: '',
    completionSummary:
      'True worship cannot be forced. The third angel\'s message warns against coerced worship and calls us to faithful, voluntary love rooted in Jesus.',
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'tam-l1-q1',
          prompt: 'According to Revelation 14:9, what does the third angel warn against?',
          options: [
            'Worshiping the beast and his image',
            'Worshiping God as Creator',
            'Keeping the commandments of God',
            'Having the faith of Jesus',
          ],
          correctIndex: 0,
          explanation:
            'The third angel warns against worshiping the beast and his image and receiving his mark.',
        },
        {
          id: 'tam-l1-q2',
          prompt: 'According to 1 John 4:8, what is God?',
          options: ['Love', 'Confusion', 'Coercion', 'Fear'],
          correctIndex: 0,
          explanation: 'John says, "God is love." This means true worship must be rooted in love, not force.',
        },
        {
          id: 'tam-l1-q3',
          prompt: 'According to 1 John 4:19, why do we love God?',
          options: [
            'Because He first loved us',
            'Because we were forced',
            'Because fear is the highest motive',
            'Because civil law required it',
          ],
          correctIndex: 0,
          explanation: 'The Bible says we love Him because He first loved us. Love awakens love.',
        },
        {
          id: 'tam-l1-q4',
          prompt: 'According to 2 Corinthians 3:17, what is present where the Spirit of the Lord is?',
          options: ['Liberty', 'Forced worship', 'Spiritual bondage', 'Coerced allegiance'],
          correctIndex: 0,
          explanation: 'Paul says where the Spirit of the Lord is, there is liberty.',
        },
        {
          id: 'tam-l1-q5',
          kind: 'reflection',
          prompt:
            'What is one area where God is calling you from fear-based compliance into love-based worship?',
          explanation:
            'The third angel\'s message warns against coerced worship and calls us to worship God freely, in spirit and truth, because His love has awakened ours.',
        },
      ],
    },
  },
  'the-beast-and-his-authority': {
    openingThought: `The third angel's message warns against worshiping the beast.

So we need to understand what the Bible means by "beast."

In prophecy, a beast represents a kingdom or power.

Not a movie monster.

Not something designed to make people panic.

A beast is a symbolic picture of a power that operates in history.

Revelation 13 identifies a beast power that receives authority from the dragon, blasphemes God, rules for a prophetic period, and persecutes the saints.

That sounds heavy because it is.

But the purpose of this lesson is not fear.

The purpose is clarity.

God identifies the beast power so His people can recognize systems that use religious authority, political power, and coercion in ways that misrepresent His character.`,
    scriptureRef: 'Revelation 13:1-2',
    scriptureQuote: `And I stood upon the sand of the sea, and saw a beast rise up out of the sea.

Having seven heads and ten horns, and upon his horns ten crowns.

And the beast which I saw was like unto a leopard, and his feet were as the feet of a bear, and his mouth as the mouth of a lion.

And the dragon gave him his power, and his seat, and great authority.`,
    scriptureAfterPrimary: `Revelation identifies a beast power rising from the sea with composite features and authority received from the dragon.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Daniel 7:17',
        quote: 'These great beasts, which are four, are four kings, which shall arise out of the earth.',
      },
      {
        type: 'scripture',
        reference: 'Daniel 7:23',
        quote: 'The fourth beast shall be the fourth kingdom upon earth.',
      },
      {
        type: 'scripture',
        reference: 'Revelation 17:15',
        quote: 'The waters which thou sawest... are peoples, and multitudes, and nations, and tongues.',
      },
      {
        type: 'scripture',
        reference: 'Revelation 12:9',
        quote: 'That old serpent, called the Devil, and Satan, which deceiveth the whole world.',
      },
      {
        type: 'scripture',
        reference: 'Revelation 13:5-7',
        quote: `And there was given unto him a mouth speaking great things and blasphemies.

And power was given unto him to continue forty and two months.

And it was given unto him to make war with the saints, and to overcome them.`,
      },
      {
        type: 'scripture',
        reference: 'Daniel 7:25',
        quote: `And he shall speak great words against the most High.

And shall wear out the saints of the most High.

And think to change times and laws.`,
      },
    ],
    teachingPoints: [
      `1. A beast represents a kingdom or power

Daniel explains that prophetic beasts symbolize kingdoms.

That means Revelation is using symbolic language to describe a real historical power.

The beast is not meant to be understood as a literal animal.

It represents a system of authority.

The question is not, "What weird creature is this?"

The question is, "What power in history matches the identifiers Scripture gives?"`,
      `2. The beast rises from the sea

Revelation says the beast rises from the sea.

Revelation 17 explains that waters represent peoples, multitudes, nations, and tongues.

This means the beast arises from a populated, multinational region.

The symbol points to a power emerging among established nations and peoples.

This is one of the first identifying marks.`,
      `3. The beast receives authority from the dragon

Revelation says the dragon gives the beast power, throne, and great authority.

Revelation 12 identifies the dragon as Satan.

This does not mean every person connected to the system knowingly serves Satan.

Careful. Do not get sloppy.

It means the system operates by principles contrary to God's character.

It uses authority in a way that reflects the dragon's spirit rather than Christ's love.`,
      `4. The beast blasphemes and persecutes

Revelation says the beast speaks blasphemies and makes war with the saints.

Daniel says the same power speaks against the Most High, wears out the saints, and thinks to change times and laws.

This power claims religious authority, misrepresents God, opposes His law, and persecutes His people.

That combination matters.

The beast is not merely political.

It is religious-political power using spiritual claims and coercive authority.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Beast',
      lemma: 'θηρίον',
      transliteration: 'therion',
      meaning: 'In Bible prophecy, a beast symbolizes a kingdom, empire, or ruling power.',
      strongs: 'G2342',
      reference: 'Revelation 13:1',
      note: `The beast in Revelation 13 represents a religious-political power that receives dragon-like authority, misrepresents God, persecutes His people, and opposes His law.

The issue is not sensational imagery. The issue is worship, authority, and the character of God.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `Revelation 13 gives identifiers, not random symbols.

The beast rises from the sea.

It has seven heads and ten horns.

It carries features of the lion, bear, and leopard from Daniel 7.

It receives authority from the dragon.

It rules for forty-two prophetic months.

It speaks blasphemy.

It makes war against the saints.

These details point to a specific kind of power: a religious-political system that rose in the territory of the old Roman world, inherited elements of previous empires, claimed spiritual authority, opposed God's law, and persecuted faithful believers.

The point is not to hate people.

The point is to recognize the principle.

Whenever a system claims to represent God while using power, fear, coercion, and persecution, it is operating against the character of Christ.

Jesus wins hearts by love.

The beast pressures conscience by authority.

That difference is the center of the issue.`,
    },
    studyInsightBlocks: [
      {
        type: 'beastPowerIdentifiers',
        title: 'The Beast Power in Revelation 13',
        caption:
          'Revelation identifies the beast power by its principles, authority, actions, and historical role.',
      },
      {
        type: 'scriptureChain',
        title: 'The Beast and His Authority',
        references: [
          { reference: 'Revelation 13:1-10' },
          { reference: 'Daniel 7:17, 23' },
          { reference: 'Revelation 17:15' },
          { reference: 'Revelation 12:9' },
          { reference: 'Daniel 7:21-25' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: The beast represents a religious-political power that receives dragon-like authority, misrepresents God, opposes His law, and persecutes His people.',
      },
    ],
    reflectPrompt: `Why is it important to focus on the beast's principles and actions rather than turning prophecy into fear-based speculation?

Think about worship, authority, coercion, persecution, false claims about God, religious power, and how Jesus uses love instead of force.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, learn to test authority by the character of Christ.

Ask:

"Does this authority preserve conscience or violate it?"

"Does it reveal God's love or distort it?"

"Does it invite worship or pressure compliance?"

"Does it serve others or control them?"

"Does it look like Jesus?"

That last question is the filter.

Do not be impressed by religious language alone.

Religious power can still be dragon-like if it uses coercion, pride, fear, and control.

Follow the Lamb, not merely the loudest system.

Prayer:

Father, give me wisdom to understand prophecy without fear or arrogance. Help me recognize systems that misrepresent Your character and violate conscience. Keep my eyes on Jesus, the true revelation of Your love. Teach me to follow the Lamb, reject coercion, and stand for truth with humility and courage. Amen.`,
    prayer: '',
    completionSummary:
      'The beast power in Revelation 13 is identified by its authority, actions, and character. It misrepresents God, opposes His law, and uses power against conscience.',
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'tam-l2-q1',
          prompt: 'In Bible prophecy, what does a beast symbolize?',
          options: [
            'A kingdom or ruling power',
            'A literal zoo animal',
            'A private dream only',
            'A random symbol with no meaning',
          ],
          correctIndex: 0,
          explanation: 'Daniel explains that prophetic beasts represent kingdoms or ruling powers.',
        },
        {
          id: 'tam-l2-q2',
          prompt: 'According to Revelation 17:15, what do waters represent?',
          options: [
            'Peoples, multitudes, nations, and tongues',
            'Literal oceans only',
            'The Sabbath',
            'The books of judgment',
          ],
          correctIndex: 0,
          explanation:
            'Revelation explains that waters symbolize peoples, multitudes, nations, and tongues.',
        },
        {
          id: 'tam-l2-q3',
          prompt: 'According to Revelation 13:2, who gives the beast power, throne, and authority?',
          options: ['The dragon', 'The Lamb', 'The saints', 'The New Jerusalem'],
          correctIndex: 0,
          explanation:
            'Revelation says the dragon gives the beast his power, throne, and great authority.',
        },
        {
          id: 'tam-l2-q4',
          prompt: 'According to Revelation 13:7, what does the beast make war against?',
          options: ['The saints', 'The dragon', 'Babylon only', 'The sea'],
          correctIndex: 0,
          explanation: 'Revelation says the beast makes war with the saints and overcomes them.',
        },
        {
          id: 'tam-l2-q5',
          kind: 'reflection',
          prompt:
            'What is one way religious authority can become dangerous when it does not reflect the character of Jesus?',
          explanation:
            'The beast power shows that religious authority becomes dangerous when it misrepresents God, violates conscience, and uses coercion instead of love.',
        },
      ],
    },
  },
  'the-image-of-the-beast': {
    openingThought: `The third angel's message warns against worshiping the beast and his image.

That word image matters.

An image is a likeness.

A copy.

A reflection.

So the image of the beast is not a random symbol. It is a system that reflects the same basic character as the first beast.

The beast uses religious authority and coercive power.

The image of the beast forms when another power repeats that same pattern.

Religion uses civil power.

Worship is enforced.

Conscience is pressured.

Liberty is violated.

That is the issue.

Not politics for politics' sake.

Not fear-based prophecy noise.

The issue is simple: any system that uses civil power to force worship is acting contrary to the God of love.`,
    scriptureRef: 'Revelation 13:11-12',
    scriptureQuote: `And I beheld another beast coming up out of the earth.

And he had two horns like a lamb, and he spake as a dragon.

And he exerciseth all the power of the first beast before him.

And causeth the earth and them which dwell therein to worship the first beast.`,
    scriptureAfterPrimary: `The second beast looks lamb-like but speaks like a dragon, and causes the earth to worship the first beast.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Revelation 13:14-15',
        quote: `Saying to them that dwell on the earth, that they should make an image to the beast.

And cause that as many as would not worship the image of the beast should be killed.`,
      },
      {
        type: 'scripture',
        reference: 'Revelation 14:9',
        quote: `If any man worship the beast and his image, and receive his mark in his forehead, or in his hand.`,
      },
      {
        type: 'scripture',
        reference: 'Daniel 3:4-6',
        quote: `To you it is commanded, O people, nations, and languages.

Fall down and worship the golden image.`,
      },
      {
        type: 'scripture',
        reference: 'Matthew 13:30',
        quote: 'Let both grow together until the harvest.',
      },
      {
        type: 'scripture',
        reference: 'John 18:36',
        quote: `My kingdom is not of this world.

If my kingdom were of this world, then would my servants fight.`,
      },
    ],
    teachingPoints: [
      `1. The image of the beast repeats the beast's method

The first beast uses religious authority, political power, and coercion.

The image of the beast forms when that same method is reproduced.

This is why the word image is important.

It looks like the beast.

It acts like the beast.

It enforces worship like the beast.

The issue is not merely a symbol on a page.

It is a repeated pattern of religious coercion.`,
      `2. The second beast looks lamb-like but speaks like a dragon

Revelation describes the second beast as having two horns like a lamb.

That means it appears gentle, Christian, or liberty-friendly.

But then it speaks like a dragon.

In Bible prophecy, speaking is often connected with laws, authority, and commands.

So this power begins with lamb-like appearance but eventually uses dragon-like methods.

That is the warning.

A system can look harmless and still become coercive when it abandons liberty of conscience.`,
      `3. Daniel 3 previews the same pattern

Nebuchadnezzar built an image and commanded everyone to worship it.

Refusal brought death.

That story helps us understand Revelation 13.

The final worship crisis repeats the Babylonian pattern:

an image,
a command,
a worship test,
civil penalties,
and faithful resistance.

This is why the third angel's message is so serious.

Coerced worship is not new.

It is Babylon wearing updated clothes.`,
      `4. Christ's kingdom does not use force to compel worship

Jesus said His kingdom is not of this world.

If His kingdom were of this world, His servants would fight.

That does not mean Jesus has no authority.

It means His kingdom does not advance by coercion, violence, or civil force.

Jesus wins by truth and love.

The image of the beast uses power to force worship.

Christ uses love to awaken worship.

Those are two different kingdoms.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Image',
      lemma: 'εἰκών',
      transliteration: 'eikon',
      meaning: 'A likeness, copy, representation, or reflection of something else.',
      strongs: 'G1504',
      reference: 'Revelation 13:14',
      note: `The image of the beast is a system that reflects the beast's method: religious authority using civil power to enforce worship.

It is not merely about belief. It is about coerced allegiance and violated conscience.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The image of the beast forms through a process.

First, religious authority makes claims about worship.

Then political power supports those religious claims.

Then law is used to enforce worship.

Then conscience is pressured.

Then the world faces a test of allegiance.

That is the issue Revelation is warning about.

The image of the beast is not just "bad people doing bad things."

It is a system that makes false worship look righteous and makes coercion look holy.

That is dangerous.

Because once people believe God approves of forced worship, they can persecute others while thinking they are defending truth.

Jesus never operated that way.

He invited.

He taught.

He warned.

He wept.

He died.

But He never forced the conscience.`,
    },
    studyInsightBlocks: [
      {
        type: 'imageOfBeastFormation',
        title: 'How the Image of the Beast Forms',
        caption:
          'The image of the beast appears when religion uses civil power to compel worship.',
      },
      {
        type: 'trueWorshipVsCoercion',
        title: 'True Worship Cannot Be Forced',
        caption: 'God seeks love, not forced compliance.',
      },
      {
        type: 'scriptureChain',
        title: 'The Image of the Beast',
        references: [
          { reference: 'Revelation 13:11-15' },
          { reference: 'Revelation 14:9' },
          { reference: 'Daniel 3:1-6' },
          { reference: 'Matthew 13:24-30' },
          { reference: 'John 18:36' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: The image of the beast forms when religious authority uses civil power to enforce worship and violate liberty of conscience.',
      },
    ],
    reflectPrompt: `Why does forced worship contradict the character of God?

Think about love, freedom, conscience, civil power, religious pressure, and the difference between Jesus inviting worship and systems enforcing worship.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, examine how you handle spiritual influence.

Ask:

"Do I invite or pressure?"

"Do I persuade with truth or manipulate with fear?"

"Do I respect conscience, even when I disagree?"

"Do I use spiritual language to control people?"

"Does my method look like Jesus?"

This matters.

You can defend truth in a way that violates the spirit of truth.

You can be correct and still coercive.

That is not a flex. That is a warning label.

Choose the way of Christ.

Speak truth clearly.

Honor conscience.

Trust the Holy Spirit to convict.

Prayer:

Jesus, keep me from every form of coercive religion. Teach me to love truth without using it to control people. Help me honor liberty of conscience and trust Your Spirit to lead others. Give me courage to resist false worship and humility to represent Your character well. Let my witness invite, not manipulate. Amen.`,
    prayer: '',
    completionSummary:
      'The image of the beast forms when religious authority uses civil power to compel worship. Jesus never forces the conscience. His kingdom advances through truth, love, and freedom.',
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'tam-l3-q1',
          prompt: 'In Revelation 13:11, what does the second beast look like?',
          options: ['A lamb', 'A literal horse', 'A golden calf', 'A dove only'],
          correctIndex: 0,
          explanation:
            'Revelation says the second beast has two horns like a lamb, suggesting a gentle or Christian appearance.',
        },
        {
          id: 'tam-l3-q2',
          prompt: 'According to Revelation 13:11, how does the second beast speak?',
          options: [
            'Like a dragon',
            'Like a lamb',
            'Like an angel only',
            'Like a prophet of peace only',
          ],
          correctIndex: 0,
          explanation:
            'The second beast looks lamb-like but speaks like a dragon, showing a contrast between appearance and method.',
        },
        {
          id: 'tam-l3-q3',
          prompt: 'According to Revelation 13:14-15, what does the second beast tell the world to make?',
          options: [
            'An image to the beast',
            'A sanctuary according to Moses',
            'A new heaven',
            'A peaceful garden',
          ],
          correctIndex: 0,
          explanation:
            'Revelation says the second beast tells those who dwell on the earth to make an image to the beast.',
        },
        {
          id: 'tam-l3-q4',
          prompt: 'What Old Testament story previews forced worship before an image?',
          options: ['Daniel 3', 'Jonah in Nineveh', 'Ruth and Boaz', 'Joseph storing grain'],
          correctIndex: 0,
          explanation:
            'Daniel 3 shows Nebuchadnezzar commanding all people to worship the golden image under threat of death.',
        },
        {
          id: 'tam-l3-q5',
          kind: 'reflection',
          prompt:
            'What is one way you can speak truth while still honoring another person\'s conscience?',
          explanation:
            'The image of the beast warns against religious coercion. God\'s people must speak truth clearly while preserving the freedom that love requires.',
        },
      ],
    },
  },
  'the-mark-of-the-beast': {
    openingThought: `Few Bible topics create more fear and confusion than the mark of the beast.

So let's slow down.

The mark of the beast is not a random barcode.

It is not accidentally received.

It is not secretly placed on people before they understand the issue.

Revelation connects the mark to worship, allegiance, authority, and civil enforcement.

The mark is received in contrast to the seal of God.

So the question is not merely, "What is the mark?"

The better question is:

Who has my worship?

Whose authority shapes my conscience?

Am I loyal to God's Word or to human authority when the two come into conflict?

The final issue is worship.

And worship must be rooted in love, not fear.`,
    scriptureRef: 'Revelation 13:16-17',
    scriptureQuote: `And he causeth all, both small and great, rich and poor, free and bond.

To receive a mark in their right hand, or in their foreheads.

And that no man might buy or sell, save he that had the mark.`,
    scriptureAfterPrimary: `The mark is received in the forehead or hand and connected to economic pressure and allegiance to the beast system.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Revelation 14:9',
        quote: `If any man worship the beast and his image, and receive his mark in his forehead, or in his hand.`,
      },
      {
        type: 'scripture',
        reference: 'Revelation 14:12',
        quote: `Here is the patience of the saints.

Here are they that keep the commandments of God, and the faith of Jesus.`,
      },
      {
        type: 'scripture',
        reference: 'Exodus 20:8-11',
        quote: `Remember the sabbath day, to keep it holy.

For in six days the LORD made heaven and earth, the sea, and all that in them is.`,
      },
      {
        type: 'scripture',
        reference: 'Ezekiel 20:12',
        quote: 'Moreover also I gave them my sabbaths, to be a sign between me and them.',
      },
      {
        type: 'scripture',
        reference: 'Ezekiel 20:20',
        quote: 'And hallow my sabbaths; and they shall be a sign between me and you.',
      },
      {
        type: 'scripture',
        reference: 'Romans 6:16',
        quote: 'Know ye not, that to whom ye yield yourselves servants to obey, his servants ye are to whom ye obey.',
      },
    ],
    teachingPoints: [
      `1. The mark is connected to worship

Revelation 14 links worshiping the beast and receiving his mark.

That means the mark is not an isolated symbol.

It is an allegiance issue.

It reveals loyalty to a worship system that stands against God's authority.

The mark belongs to the larger conflict between true worship and false worship.`,
      `2. The mark involves forehead or hand

Revelation says the mark is received in the forehead or in the hand.

The forehead points to the mind, belief, conviction, and settled allegiance.

The hand points to action, compliance, and outward participation.

This suggests two ways people may align with the beast system:

Some believe it.

Others comply with it.

Either way, the issue is loyalty under pressure.`,
      `3. The mark is enforced through civil pressure

Revelation says no one can buy or sell unless they have the mark.

That means economic and civil pressure are involved.

This is not merely a private religious opinion.

It becomes a public worship crisis enforced through worldly power.

The beast system pressures conscience by using law, penalty, and survival pressure.

That is the opposite of Christ's way.`,
      `4. The mark stands in contrast to God's sign

Scripture says the Sabbath is a sign between God and His people.

The Sabbath points to God as Creator, Redeemer, and Sanctifier.

It reminds us that salvation is received by grace, not manufactured by human effort.

The mark of the beast stands in contrast to this.

It represents human authority placed against God's authority, especially in the area of worship.`,
      `5. The mark is not received ignorantly before the final crisis

This is important.

People are not walking around accidentally marked because they misunderstood prophecy or inherited a tradition.

The mark of the beast becomes the mark when the final issue is made clear and false worship is enforced against the known will of God.

God judges with perfect fairness.

The issue is not ignorance.

The issue is informed allegiance under pressure.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Mark',
      lemma: 'χάραγμα',
      transliteration: 'charagma',
      meaning: 'A sign, indication, or identifying symbol of allegiance, loyalty, or ownership.',
      strongs: 'G5480',
      reference: 'Revelation 13:16',
      note: `The mark of the beast identifies allegiance to a coercive worship system that places human authority against God's authority.

It is connected to worship, law, conscience, and enforced compliance.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The mark of the beast must be understood in contrast to the seal of God.

The seal of God points to His authority, His law written in the heart, and His Sabbath as a sign of creation, redemption, and sanctification.

The mark of the beast points to human authority, false worship, enforced rest, and compliance under pressure.

The final issue is not whether someone knows a prophecy chart.

The issue is worship and allegiance.

The beast system says:

"Submit because you must."

God says:

"Worship because love has awakened your heart."

The beast pressures the hand.

God writes His law in the heart.

The beast demands outward conformity.

God seeks inward loyalty.

The beast uses economic pressure.

God uses truth, love, and the Spirit.

That contrast is the whole fight in plain clothes.`,
    },
    studyInsightBlocks: [
      {
        type: 'markVsSealComparison',
        title: 'Mark of the Beast vs Seal of God',
        caption: 'The final issue is worship, allegiance, authority, and love.',
      },
      {
        type: 'scriptureChain',
        title: 'The Mark of the Beast',
        references: [
          { reference: 'Revelation 13:16-17' },
          { reference: 'Revelation 14:9-12' },
          { reference: 'Exodus 20:8-11' },
          { reference: 'Ezekiel 20:12, 20' },
          { reference: 'Romans 6:16' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: The mark of the beast is connected to worship, allegiance, civil enforcement, and human authority placed against God\'s authority.',
      },
    ],
    reflectPrompt: `What authority has the strongest influence over your conscience: God's Word, culture, fear, tradition, convenience, or pressure?

Think about worship, obedience, Sabbath, loyalty, fear of consequences, social pressure, and whether your choices are shaped by love for God or fear of losing comfort.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, practice conscience-level honesty.

Ask:

"Am I willing to follow God's Word when it costs me?"

"Do I obey only when it is convenient?"

"Where am I tempted to comply outwardly while disagreeing inwardly?"

"Do I treat Sabbath as God's sign or as a negotiable preference?"

"Is my loyalty rooted in Jesus or in pressure?"

Then take one small step of faithful obedience.

Not performative.

Not dramatic.

Just real.

Choose one area where God has already made His will clear, and obey from love.

The final crisis will not create character.

It will reveal it.

Prayer:

Father, teach me to worship You from love and not fear. Write Your law in my heart and settle my loyalty in Jesus. Help me resist false worship, human pressure, and every system that violates conscience. Keep me faithful to Your Word, humble in spirit, and confident in Christ. Let my worship belong to You alone. Amen.`,
    prayer: '',
    completionSummary:
      'The mark of the beast is connected to worship, allegiance, civil enforcement, and human authority placed against God\'s authority. God calls His people to loyal, love-based worship.',
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'tam-l4-q1',
          prompt: 'According to Revelation 13:16-17, where is the mark received?',
          options: [
            'In the right hand or in the forehead',
            'Only on clothing',
            'Only in the sky',
            'Only on a scroll',
          ],
          correctIndex: 0,
          explanation:
            'Revelation says the mark is received in the right hand or in the forehead, pointing to action and allegiance.',
        },
        {
          id: 'tam-l4-q2',
          prompt: 'According to Revelation 14:9, the mark is connected with what issue?',
          options: [
            'Worshiping the beast and his image',
            'Resting in Christ alone',
            'Worshiping the Creator',
            'Receiving the everlasting gospel',
          ],
          correctIndex: 0,
          explanation: 'Revelation connects receiving the mark with worshiping the beast and his image.',
        },
        {
          id: 'tam-l4-q3',
          prompt: 'According to Ezekiel 20:12, what did God give as a sign between Him and His people?',
          options: ['His Sabbaths', 'Babylon\'s wine', 'The beast\'s image', 'The dragon\'s authority'],
          correctIndex: 0,
          explanation: 'God says He gave His Sabbaths as a sign between Him and His people.',
        },
        {
          id: 'tam-l4-q4',
          prompt: 'According to Romans 6:16, what does yielding obedience reveal?',
          options: [
            'Whom we serve',
            'That choices do not matter',
            'That worship is meaningless',
            'That pressure creates love',
          ],
          correctIndex: 0,
          explanation:
            'Romans says we become servants to the one we yield ourselves to obey, showing that allegiance matters.',
        },
        {
          id: 'tam-l4-q5',
          kind: 'reflection',
          prompt:
            'What is one area where you need deeper loyalty to God over pressure, convenience, or fear?',
          explanation:
            'The mark of the beast is a final worship and allegiance issue. God calls His people to loyalty rooted in love and the faith of Jesus.',
        },
      ],
    },
  },
  'the-seal-of-god': {
    openingThought: `The third angel's message warns against the mark of the beast.

But God does not only warn His people about the counterfeit.

He shows them the real thing.

Revelation also speaks of the seal of God.

The seal is connected to God's ownership, authority, protection, and settled loyalty in the hearts of His people.

The beast pressures people into false worship.

God seals His people through truth, love, and the work of the Holy Spirit.

The beast marks allegiance through coercion.

God seals allegiance through relationship.

That difference matters.

God is not trying to create terrified people who obey because they are scared.

He is preparing settled people who worship because they know His character and love Him.`,
    scriptureRef: 'Revelation 7:2-3',
    scriptureQuote: `And I saw another angel ascending from the east, having the seal of the living God.

Saying, Hurt not the earth, neither the sea, nor the trees, till we have sealed the servants of our God in their foreheads.`,
    scriptureAfterPrimary: `God's servants are sealed in their foreheads with the seal of the living God before the final events unfold.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Ephesians 1:13-14',
        quote: `After that ye believed, ye were sealed with that holy Spirit of promise.

Which is the earnest of our inheritance.`,
      },
      {
        type: 'scripture',
        reference: 'Deuteronomy 6:6-8',
        quote: `And these words, which I command thee this day, shall be in thine heart.

And thou shalt bind them for a sign upon thine hand, and they shall be as frontlets between thine eyes.`,
      },
      {
        type: 'scripture',
        reference: 'Ezekiel 20:12',
        quote: `Moreover also I gave them my sabbaths, to be a sign between me and them.

That they might know that I am the LORD that sanctify them.`,
      },
      {
        type: 'scripture',
        reference: 'Ezekiel 20:20',
        quote: `And hallow my sabbaths; and they shall be a sign between me and you.

That ye may know that I am the LORD your God.`,
      },
      {
        type: 'scripture',
        reference: 'Exodus 20:8-11',
        quote: `Remember the sabbath day, to keep it holy.

For in six days the LORD made heaven and earth, the sea, and all that in them is.`,
      },
    ],
    teachingPoints: [
      `1. The seal belongs to the living God

Revelation says the angel has the seal of the living God.

That means the seal is about God's ownership and authority.

A seal identifies what belongs to someone.

It shows authenticity.

It points to authority.

God's people are not sealed by fear, pressure, or human control.

They are sealed as servants of the living God.`,
      `2. The seal is placed in the forehead

Revelation says God's servants are sealed in their foreheads.

The forehead points to the mind, conscience, understanding, and settled conviction.

God does not force the hand while bypassing the heart.

He seals the mind with truth.

He settles the conscience in loyalty.

He writes His law into the heart.

The seal of God is not mindless compliance.

It is intelligent, love-based allegiance.`,
      `3. The Holy Spirit seals believers

Ephesians says believers are sealed with the Holy Spirit of promise.

This reminds us that sealing is not merely external.

The Spirit works inwardly.

He convicts.

He teaches.

He transforms.

He settles believers into Christ.

God's seal is not just about knowing the right doctrine.

It is about belonging to Christ and being shaped by His Spirit.`,
      `4. The Sabbath is a sign of God's authority and sanctifying work

Ezekiel says God gave His Sabbaths as a sign so His people would know that He is the Lord who sanctifies them.

The Sabbath points to God as Creator and Sanctifier.

It reminds us that we do not create ourselves.

We do not redeem ourselves.

We do not sanctify ourselves.

We rest in the God who creates, saves, and makes holy.`,
      `5. The Sabbath commandment contains the elements of God's authority

A seal often includes a name, title, and territory.

In the Sabbath commandment, we see:

Name:
The LORD

Title:
Creator

Territory:
Heaven, earth, sea, and all that is in them

This is why the Sabbath is so central in the final worship crisis.

It points directly to the Creator's authority.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Seal',
      lemma: 'σφραγίς',
      transliteration: 'sphragis',
      meaning: 'A sign of ownership, authority, authenticity, protection, and settled allegiance.',
      strongs: 'G4973',
      reference: 'Revelation 7:2',
      note: `The seal of God points to God's authority and His work in the heart.

It is connected to the Holy Spirit, God's law, and the Sabbath as a sign of creation, redemption, and sanctification.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The seal of God is the opposite of the mark of the beast.

The mark is connected to false worship, human authority, civil pressure, and coerced allegiance.

The seal is connected to God's authority, the Holy Spirit, God's law in the heart, and love-based worship.

The beast system pressures people into outward compliance.

God seals people inwardly through truth and the Spirit.

The beast threatens.

God sanctifies.

The beast enforces.

God writes.

The beast demands allegiance through pressure.

God receives allegiance awakened by love.

This is why Sabbath matters.

The Sabbath is not merely a day on a calendar.

It is a sign of the God who creates, redeems, sanctifies, and gives rest.

In the final crisis, the issue will not be random religious trivia.

It will be worship, authority, allegiance, and whether love or force defines our relationship with God.`,
    },
    studyInsightBlocks: [
      {
        type: 'markVsSealComparison',
        title: 'Mark of the Beast vs Seal of God',
        caption: 'The final issue is worship, allegiance, authority, and love.',
      },
      {
        type: 'sealElementsSabbath',
        title: 'The Seal in the Sabbath Commandment',
        caption: 'The Sabbath points to God\'s name, authority, and creative dominion.',
      },
      {
        type: 'scriptureChain',
        title: 'The Seal of God',
        references: [
          { reference: 'Revelation 7:1-3' },
          { reference: 'Deuteronomy 6:4-9' },
          { reference: 'Ezekiel 20:12, 20' },
          { reference: 'Ephesians 1:13-14' },
          { reference: 'Exodus 20:8-11' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: The seal of God points to God\'s authority, His law written in the heart, the Holy Spirit\'s work, and the Sabbath as a sign of creation, redemption, and sanctification.',
      },
    ],
    reflectPrompt: `Is your loyalty to God becoming settled in your mind and heart, or is it still easily moved by fear, pressure, convenience, or confusion?

Think about Sabbath, worship, obedience, conscience, Scripture, the Holy Spirit, and whether your faith is becoming deeply rooted in the character of God.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, treat Sabbath as a sign, not just a schedule.

Before Sabbath begins, ask:

"What does this day reveal about God's authority?"

"What does it remind me about creation?"

"How does it teach me that God sanctifies me?"

"Am I resting in Christ or trying to prove myself?"

"Is my worship rooted in love?"

Then choose one Sabbath practice that deepens loyalty:

Read Exodus 20:8-11 slowly.

Pray over Ezekiel 20:12.

Turn off one distraction.

Rest from unnecessary work.

Spend time in creation.

Worship with intention.

Serve someone quietly.

Do not reduce the seal of God to information.

Let it become settled allegiance.

Prayer:

Father, thank You for calling me Yours. Seal my mind and heart by Your Spirit. Write Your law within me and settle my loyalty in Jesus. Help me see the Sabbath as a sign of Your authority, Your creative power, Your redeeming grace, and Your sanctifying work. Keep me from fear-based obedience and form in me worship that flows from love. Amen.`,
    prayer: '',
    completionSummary:
      'The seal of God points to God\'s authority, His Spirit\'s work, His law written in the heart, and the Sabbath as a sign of creation, redemption, and sanctification.',
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'tam-l5-q1',
          prompt: 'According to Revelation 7:2-3, what does the angel have?',
          options: [
            'The seal of the living God',
            'The mark of the beast',
            'Babylon\'s wine',
            'The dragon\'s throne',
          ],
          correctIndex: 0,
          explanation:
            'Revelation says the angel ascending from the east has the seal of the living God.',
        },
        {
          id: 'tam-l5-q2',
          prompt: 'Where are God\'s servants sealed in Revelation 7:3?',
          options: [
            'In their foreheads',
            'Only in their hands',
            'On their clothing',
            'In Babylon',
          ],
          correctIndex: 0,
          explanation:
            'Revelation says the servants of God are sealed in their foreheads, pointing to settled conviction and allegiance.',
        },
        {
          id: 'tam-l5-q3',
          prompt: 'According to Ephesians 1:13, who seals believers?',
          options: [
            'The Holy Spirit of promise',
            'The beast',
            'Babylon',
            'Human authority',
          ],
          correctIndex: 0,
          explanation: 'Paul says believers are sealed with the Holy Spirit of promise.',
        },
        {
          id: 'tam-l5-q4',
          prompt: 'According to Ezekiel 20:12, what did God give as a sign between Him and His people?',
          options: [
            'His Sabbaths',
            'Babylon\'s image',
            'The dragon\'s mark',
            'Human tradition',
          ],
          correctIndex: 0,
          explanation:
            'God says He gave His Sabbaths as a sign so His people would know that He is the Lord who sanctifies them.',
        },
        {
          id: 'tam-l5-q5',
          kind: 'reflection',
          prompt: 'What is one way you can let Sabbath deepen your loyalty to God this week?',
          explanation:
            'The seal of God points to God\'s authority, His law in the heart, the Spirit\'s work, and the Sabbath as a sign of His creative and sanctifying power.',
        },
      ],
    },
  },
  'the-patience-of-the-saints': {
    openingThought: `After the strongest warning in Revelation 14, Scripture shows us what God's faithful people look like.

They are not described as loud.

They are not described as panicked.

They are not described as arrogant prophecy experts.

They are described as patient.

"Here is the patience of the saints."

That means endurance.

Steadfastness.

Faithfulness under pressure.

The final crisis will test worship, obedience, conscience, and allegiance. But God's people endure because they are anchored in Jesus.

They keep the commandments of God.

They hold the faith of Jesus.

They do not survive by fear.

They endure by love.`,
    scriptureRef: 'Revelation 14:12',
    scriptureQuote: `Here is the patience of the saints.

Here are they that keep the commandments of God, and the faith of Jesus.`,
    scriptureAfterPrimary: `God's faithful people are marked by patience, keeping the commandments of God, and holding the faith of Jesus.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Galatians 5:5-6',
        quote: `For we through the Spirit wait for the hope of righteousness by faith.

For in Jesus Christ neither circumcision availeth any thing, nor uncircumcision; but faith which worketh by love.`,
      },
      {
        type: 'scripture',
        reference: 'John 14:15',
        quote: 'If ye love me, keep my commandments.',
      },
      {
        type: 'scripture',
        reference: 'Hebrews 10:35-36',
        quote: `Cast not away therefore your confidence, which hath great recompence of reward.

For ye have need of patience, that, after ye have done the will of God, ye might receive the promise.`,
      },
      {
        type: 'scripture',
        reference: 'Hebrews 10:38-39',
        quote: `Now the just shall live by faith.

But we are not of them who draw back unto perdition; but of them that believe to the saving of the soul.`,
      },
      {
        type: 'scripture',
        reference: 'James 5:7-8',
        quote: `Be patient therefore, brethren, unto the coming of the Lord.

Be ye also patient; stablish your hearts: for the coming of the Lord draweth nigh.`,
      },
    ],
    teachingPoints: [
      `1. The saints endure under pressure

Revelation says God's people have patience.

This patience is not laziness.

It is not passive waiting.

It is faithful endurance when pressure rises.

The third angel's message shows a world where worship is pressured, conscience is tested, and allegiance becomes visible.

God's people endure because their faith is rooted deeper than circumstances.`,
      `2. The saints keep the commandments of God

Revelation says the saints keep the commandments of God.

This does not mean they earn salvation by obedience.

The gospel already settled that.

They obey because they love God and trust His character.

Their obedience is not fear-based performance.

It is love-shaped loyalty.

When human authority conflicts with God's authority, they remain faithful to God.`,
      `3. The saints hold the faith of Jesus

Revelation does not only say the saints keep commandments.

It says they have the faith of Jesus.

That phrase matters.

God's final people are not merely trying harder.

They are trusting deeper.

They hold to the faithfulness of Christ, the teachings of Christ, and the trust Christ Himself lived.

Their confidence is not in self.

Their confidence is in Jesus.`,
      `4. Faith works by love

Galatians says what matters is faith working by love.

That is the heart of Revelation 14:12.

Commandments without faith become legalism.

Faith without love becomes empty talk.

Love without obedience becomes sentiment.

But faith working by love produces loyal endurance.

That is the patience of the saints.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Patience',
      lemma: 'ὑπομονή',
      transliteration: 'hypomone',
      meaning: 'Endurance, perseverance, steadfastness, and faithful loyalty under pressure.',
      strongs: 'G5281',
      reference: 'Revelation 14:12',
      note: `In Revelation 14:12, patience means more than waiting.

It describes God's faithful people enduring the final worship crisis through the faith of Jesus and love-motivated obedience to God's commandments.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The third angel's message is intense, but Revelation does not leave us staring at the beast.

It points us to the saints.

That matters.

The focus is not fear of the beast.

The focus is faithfulness to Jesus.

God's end-time people are described by three realities:

Patience.

Commandments.

Faith.

They endure.

They obey.

They trust.

And all three must stay together.

Endurance without faith becomes stubbornness.

Commandment-keeping without Jesus becomes legalism.

Faith without obedience becomes empty profession.

But when the faith of Jesus fills the heart, obedience becomes love, and endurance becomes witness.

That is what the final crisis reveals.

Not who had the most dramatic theory.

Who truly trusted Jesus.`,
    },
    studyInsightBlocks: [
      {
        type: 'patienceSaintsTriad',
        title: 'The Patience of the Saints',
        caption: 'God\'s people endure through the faith of Jesus and love-motivated obedience.',
      },
      {
        type: 'scriptureChain',
        title: 'The Patience of the Saints',
        references: [
          { reference: 'Revelation 14:12' },
          { reference: 'Galatians 5:5-6' },
          { reference: 'John 14:15' },
          { reference: 'Hebrews 10:35-39' },
          { reference: 'James 5:7-11' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: God\'s end-time people endure by the faith of Jesus, keeping God\'s commandments through love rather than fear.',
      },
    ],
    reflectPrompt: `When pressure rises, does your faith become more settled in Jesus or more controlled by fear?

Think about obedience, Sabbath, worship, social pressure, family pressure, spiritual fatigue, confidence in Christ, and whether your endurance is rooted in love or anxiety.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, strengthen one area of patient faithfulness.

Choose one:

Keep a commitment to God when it is inconvenient.

Practice Sabbath rest with deeper trust.

Obey one clear conviction without making a scene.

Pray through pressure instead of reacting.

Read Hebrews 10 slowly.

Encourage someone who is spiritually tired.

Do not confuse endurance with emotional hype.

Endurance is often quiet.

It looks like staying faithful when nobody claps.

It looks like choosing Jesus when pressure whispers, "Just compromise."

Faithfulness is built before the crisis.

Prayer:

Jesus, give me the patience of the saints. Teach me to endure by faith, not fear. Help me keep Your commandments because I love You and trust Your character. Strengthen my heart when pressure rises. Keep me from legalism, panic, and compromise. Let Your faithfulness become the foundation of my faithfulness. Amen.`,
    prayer: '',
    completionSummary:
      'The patience of the saints is faithful endurance rooted in Jesus. God\'s people keep His commandments through love and hold the faith of Jesus under pressure.',
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'tam-l6-q1',
          prompt: 'According to Revelation 14:12, what do the saints have?',
          options: ['Patience', 'Fear-based panic', 'Loyalty to the beast', 'Hatred for God\'s law'],
          correctIndex: 0,
          explanation:
            'Revelation says, "Here is the patience of the saints," describing their faithful endurance.',
        },
        {
          id: 'tam-l6-q2',
          prompt: 'According to Revelation 14:12, what do the saints keep?',
          options: [
            'The commandments of God',
            'The mark of the beast',
            'Babylon\'s wine',
            'Human tradition above Scripture',
          ],
          correctIndex: 0,
          explanation: 'Revelation identifies the saints as those who keep the commandments of God.',
        },
        {
          id: 'tam-l6-q3',
          prompt: 'According to Revelation 14:12, what faith do the saints have?',
          options: [
            'The faith of Jesus',
            'Faith in the beast',
            'Faith in human pressure',
            'Faith in forced worship',
          ],
          correctIndex: 0,
          explanation: 'Revelation says the saints keep the commandments of God and the faith of Jesus.',
        },
        {
          id: 'tam-l6-q4',
          prompt: 'According to Galatians 5:6, what kind of faith matters?',
          options: [
            'Faith which works by love',
            'Faith without love',
            'Fear without trust',
            'Performance without Christ',
          ],
          correctIndex: 0,
          explanation: 'Paul says what matters is faith working by love.',
        },
        {
          id: 'tam-l6-q5',
          kind: 'reflection',
          prompt: 'What is one area where Jesus is calling you to patient faithfulness?',
          explanation:
            'The patience of the saints is loyal endurance through the faith of Jesus and love-motivated obedience to God\'s commandments.',
        },
      ],
    },
  },
  'liberty-love-and-final-worship': {
    openingThought: `The third angel's message is not mainly about fear.

It is about worship.

It is about liberty.

It is about love.

It is about whether human beings will give allegiance to a coercive system or remain faithful to Jesus.

The beast system pressures conscience.

Jesus frees conscience.

The beast system enforces worship.

Jesus awakens worship through love.

The beast system demands outward compliance.

Jesus writes His law in the heart.

The final issue is not whether people can memorize prophecy details.

The final issue is whether love, truth, freedom, and loyalty to Jesus have become settled in the heart.

True worship cannot be forced.

And final worship will reveal who has our love.`,
    scriptureRef: 'Revelation 14:12',
    scriptureQuote: `Here is the patience of the saints.

Here are they that keep the commandments of God, and the faith of Jesus.`,
    scriptureAfterPrimary: `God's faithful people endure with patience, keeping the commandments of God and the faith of Jesus.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Revelation 14:9-10',
        quote: `If any man worship the beast and his image, and receive his mark in his forehead, or in his hand.

The same shall drink of the wine of the wrath of God.`,
      },
      {
        type: 'scripture',
        reference: '2 Corinthians 3:17',
        quote: 'Now the Lord is that Spirit: and where the Spirit of the Lord is, there is liberty.',
      },
      {
        type: 'scripture',
        reference: 'John 8:36',
        quote: 'If the Son therefore shall make you free, ye shall be free indeed.',
      },
      {
        type: 'scripture',
        reference: '1 John 4:18-19',
        quote: `There is no fear in love; but perfect love casteth out fear.

We love him, because he first loved us.`,
      },
      {
        type: 'scripture',
        reference: 'John 13:34-35',
        quote: `A new commandment I give unto you, That ye love one another; as I have loved you.

By this shall all men know that ye are my disciples, if ye have love one to another.`,
      },
    ],
    teachingPoints: [
      `1. The final crisis centers on worship

The third angel warns against worshiping the beast and his image.

That means worship is the central issue.

Worship is more than singing or attending a service.

It is allegiance.

It is trust.

It is surrender.

It is whose authority shapes the conscience.

The final crisis reveals whether worship belongs to God or to a system that stands against His character.`,
      `2. The beast violates liberty of conscience

Revelation shows the beast system pressuring worship through civil and economic force.

That is not the way of Jesus.

Where the Spirit of the Lord is, there is liberty.

Jesus does not force worship because forced worship is not love.

The beast system wants compliance.

God wants free, intelligent, love-based loyalty.`,
      `3. The mark and seal reveal two kinds of allegiance

The mark of the beast represents allegiance to human authority and coerced false worship.

The seal of God represents allegiance to God's authority, His law in the heart, the work of the Spirit, and the Sabbath as a sign of Creator worship.

The mark pressures the hand or settles in the forehead.

The seal is placed in the forehead because God wants truth settled in the mind and heart.

The contrast is clear:

Pressure versus love.

Human authority versus God's authority.

Coerced compliance versus Spirit-led loyalty.`,
      `4. God's people endure through the faith of Jesus

Revelation 14:12 describes God's faithful people after the warning.

They have patience.

They keep the commandments of God.

They have the faith of Jesus.

This is the faithful response to the final worship crisis.

Not panic.

Not arrogance.

Not fear-based religion.

Patient, love-shaped loyalty to Jesus.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Liberty',
      lemma: 'ἐλευθερία',
      transliteration: 'eleutheria',
      meaning:
        'Freedom of conscience, freedom from spiritual bondage, and the ability to respond to God by love rather than force.',
      strongs: 'G1657',
      reference: '2 Corinthians 3:17',
      note: `Biblical liberty does not mean rebellion against God.

It means freedom from coercion, fear, and bondage so the heart can worship God in spirit and truth.

The Spirit of Christ protects liberty because love cannot be forced.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The Third Angel's Message has shown a clear contrast.

The beast uses authority to pressure worship.

The image of the beast forms when civil power enforces religious claims.

The mark of the beast shows allegiance to a coercive system of false worship.

The seal of God shows settled loyalty to the Creator through the Spirit, God's law, and the Sabbath sign.

The saints endure through the faith of Jesus.

So what is the final takeaway?

God is not trying to scare people into loyalty.

He is warning the world against systems that replace love with force.

That matters because the God revealed in Jesus does not coerce the conscience.

Jesus draws.

Jesus teaches.

Jesus warns.

Jesus dies.

Jesus loves first.

And when we see His love clearly, worship becomes the free response of the heart.

The final crisis will reveal whether worship is rooted in fear or love.`,
    },
    studyInsightBlocks: [
      {
        type: 'thirdAngelsMessageBreakdown',
        title: 'The Third Angel\'s Message',
        subtitle: 'Revelation 14:9-12',
        caption:
          'The third angel\'s message warns against coerced worship and calls people to faithful love.',
      },
      {
        type: 'trueWorshipVsCoercion',
        title: 'True Worship Cannot Be Forced',
        caption: 'God seeks love, not forced compliance.',
      },
      {
        type: 'markVsSealComparison',
        title: 'Mark of the Beast vs Seal of God',
        caption: 'The final issue is worship, allegiance, authority, and love.',
      },
      {
        type: 'patienceSaintsTriad',
        title: 'The Patience of the Saints',
        caption: 'God\'s people endure through the faith of Jesus and love-motivated obedience.',
      },
      {
        type: 'scriptureChain',
        title: 'Liberty, Love, and Final Worship',
        references: [
          { reference: 'Revelation 14:9-12' },
          { reference: '2 Corinthians 3:17' },
          { reference: 'John 8:36' },
          { reference: '1 John 4:18-19' },
          { reference: 'John 13:34-35' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: The final crisis reveals whether worship is motivated by coercion, fear, and human authority, or by love, freedom, and loyalty to Jesus.',
      },
    ],
    reflectPrompt: `Is your worship becoming more rooted in love and freedom, or still shaped by fear, pressure, and outward compliance?

Think about Sabbath, obedience, judgment, conscience, family pressure, religious pressure, social pressure, and whether your loyalty to God is settled through the love of Jesus.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, practice worship that is free, loving, and loyal.

Choose one area where you have been obeying from pressure instead of love.

Then bring it to Jesus.

Ask:

"What does Your love reveal here?"

"How can I obey from trust instead of fear?"

"Where do I need liberty from people's pressure?"

"Where do I need deeper loyalty to Your Word?"

"Where does my worship need to become more honest?"

Then take one step.

Keep Sabbath with joy.

Pray without pretending.

Obey one conviction quietly.

Stop pressuring someone else.

Respect another person's conscience.

Choose love when fear tries to lead.

The third angel's message is not calling you into panic.

It is calling you into settled love.

Prayer:

Jesus, thank You for revealing the Father's love and protecting the freedom true worship requires. Deliver me from fear-based religion, coerced obedience, and outward compliance without love. Settle my heart in Your truth. Teach me to keep Your commandments through love and hold the faith of Jesus under pressure. Make my worship free, faithful, and full of Your Spirit. Amen.`,
    prayer: '',
    completionSummary:
      'The final crisis reveals whether worship is motivated by coercion and fear, or by love, freedom, and loyalty to Jesus.',
    seriesCompleteScreen: {
      title: 'Study Complete',
      message:
        'You have completed The Third Angel\'s Message. God\'s final warning exposes coerced worship and calls His people to liberty, love, the commandments of God, and the faith of Jesus.',
      primaryCta: { label: 'Back to Foundations Path', href: '/paths/foundations' },
      secondaryCta: {
        label: 'Review this study',
        href: '/study-library/the-third-angels-message',
      },
    },
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'tam-l7-q1',
          prompt: 'What is the central issue in the third angel\'s message?',
          options: [
            'Worship and allegiance',
            'Random technology',
            'Personal popularity',
            'Human entertainment',
          ],
          correctIndex: 0,
          explanation:
            'The third angel\'s message warns against worshiping the beast and his image, showing that worship and allegiance are central.',
        },
        {
          id: 'tam-l7-q2',
          prompt: 'According to 2 Corinthians 3:17, what is present where the Spirit of the Lord is?',
          options: ['Liberty', 'Forced worship', 'Coercion', 'Fear-based compliance'],
          correctIndex: 0,
          explanation: 'Paul says where the Spirit of the Lord is, there is liberty.',
        },
        {
          id: 'tam-l7-q3',
          prompt: 'According to John 8:36, what happens if the Son makes you free?',
          options: [
            'You are free indeed',
            'You remain in bondage forever',
            'You must worship by force',
            'You lose all hope',
          ],
          correctIndex: 0,
          explanation: 'Jesus said, "If the Son therefore shall make you free, ye shall be free indeed."',
        },
        {
          id: 'tam-l7-q4',
          prompt: 'According to 1 John 4:18-19, what casts out fear and awakens love?',
          options: [
            'Perfect love, because God first loved us',
            'Civil pressure',
            'Threats',
            'Forced compliance',
          ],
          correctIndex: 0,
          explanation:
            'John says perfect love casts out fear, and we love God because He first loved us.',
        },
        {
          id: 'tam-l7-q5',
          kind: 'reflection',
          prompt: 'What is one area where your worship needs to move from fear into love?',
          explanation:
            'The final issue is worship, allegiance, liberty, and love. God\'s people remain faithful through the faith of Jesus and love-motivated obedience.',
        },
      ],
    },
  },
}
