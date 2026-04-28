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

function quiz(
  questions: Array<{
    prompt: string
    options: [string, string, string, string]
    correctIndex: 0 | 1 | 2 | 3
  }>,
): LessonQuizPayload {
  return {
    ...QUIZ_SHELL,
    questions: questions.map((q, i) => ({
      id: `gil-q-${i + 1}`,
      prompt: q.prompt,
      options: q.options,
      correctIndex: q.correctIndex,
    })),
  }
}

/** Guided reader lessons for “God Is Love” (Foundations). Original BibleStem copy. */
export const godIsLoveSeriesLessonLibrary: Record<string, LessonReaderContent> = {
  'the-logic-of-love': {
    openingThought: `Love cannot stay silent forever.

If someone loves you,

they will eventually communicate.

They will reveal something.

They will make themselves known.

That is part of what love does.

So if God is love,

then it makes sense that God would speak.

Not to dominate.

Not to confuse.

Not to crush the mind.

But to reveal His heart.

The Bible begins to make sense when we see it this way.

It is not merely a rulebook.

It is not merely a history book.

It is not merely a collection of religious ideas.

It is God making Himself known.`,
    scriptureRef: '1 John 4:8',
    scriptureQuote: `He who does not love does not know God,

for God is love.`,
    scriptureSecondaryRef: 'Genesis 1:27',
    scriptureSecondaryQuote: `So God created man in His own image;

in the image of God He created him;

male and female He created them.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture' as const,
        reference: 'John 15:15',
        quote: `No longer do I call you servants,

for a servant does not know what his master is doing;

but I have called you friends,

for all things that I heard from My Father

I have made known to you.`,
      },
      {
        type: 'scripture' as const,
        reference: '2 Timothy 3:16',
        quote: `All Scripture is given by inspiration of God,

and is profitable for doctrine,

for reproof,

for correction,

for instruction in righteousness.`,
      },
      {
        type: 'paragraph' as const,
        text: `God is love.

Humanity is made in His image.

And Scripture is one of the ways God makes Himself known.`,
      },
    ],
    teachingPoints: [
      `Love requires communication.

Real love does not remain hidden. It seeks to be known and to know.`,
      `Humanity was made for relationship.

Being made in God’s image means we were created for connection, trust, and love.`,
      `God reveals rather than manipulates.

Scripture is not given to erase thought, but to awaken trust.`,
      `Jesus calls His followers friends.

He does not keep the Father’s heart hidden. He makes it known.`,
      `The Bible is God’s self-revelation.

Through Scripture, God opens truth about Himself, humanity, sin, salvation, and love.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudy: {
      surface: 'love',
      lemma: 'ἀγάπη',
      transliteration: 'agapē',
      meaning: 'self-giving love, committed love, love that seeks another’s good',
      strongs: 'G26',
      note: `When Scripture says “God is love,” it does not mean God is sentimental or weak.

It means His character is self-giving.

His power moves in harmony with goodness.

His truth comes from love.

His commands protect life.

This matters because the Bible must be read through the character of the God who gave it.

If God is love,

then His Word is not an attack on human freedom.

It is an invitation into life.`,
      reference: '1 John 4:8',
    },
    studyInsight: {
      title: 'Reading as revelation',
      variant: 'scripture_connection',
      body: `Many people approach the Bible as if God is trying to win an argument.

But Scripture presents something deeper.

God is revealing Himself.

He wants to be known.

That changes how we read.

A command is not merely a rule.

It reveals what God values.

A prophecy is not merely a prediction.

It shows that God knows history and can be trusted.

A warning is not merely a threat.

It shows that God loves enough to tell the truth.

A promise is not merely comfort.

It reveals God’s faithfulness.

The Bible is not God hiding behind religious language.

It is God speaking so we can know Him.`,
    },
    reflectPrompt: `When you think about the Bible,

do you see it more as information,

instruction,

or communication from God?

What changes if Scripture is God making Himself known?

Do you believe God wants to be known by you personally?

Where have you misunderstood God’s Word as control instead of love?`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, read one short passage with this question in mind:

What does this show me about God?

Do not rush.

Do not try to master the whole passage.

Look for His character.

Look for His heart.

Prayer:

Lord,

Teach me to see Your Word differently.

Help me understand that You speak because You love.

Open my heart to know You,

not just facts about You.

Show me Your character through Scripture.

Make me willing to listen,

trust,

and follow.

Amen.`,
    prayer: '',
    completionSummary:
      'God is love, so His Word reveals His heart and invites us into life with Him.',
    lessonQuiz: {
      ...QUIZ_SHELL,
      eyebrow: 'Quick Review Quiz',
      questions: [
        {
          id: 'gil-l1-q-1',
          prompt: 'According to 1 John 4:8, what is God?',
          options: ['Love', 'Confusion', 'Fear', 'Distance'],
          correctIndex: 0,
        },
        {
          id: 'gil-l1-q-2',
          prompt: 'What does love naturally require?',
          options: ['Silence', 'Communication', 'Control', 'Confusion'],
          correctIndex: 1,
        },
        {
          id: 'gil-l1-q-3',
          kind: 'multi',
          prompt: 'What does Scripture help reveal?',
          options: [
            'God’s character',
            'God’s will',
            'God’s plan of salvation',
            'That God wants to remain unknown',
          ],
          correctIndices: [0, 1, 2],
        },
        {
          id: 'gil-l1-q-4',
          prompt: 'What did Jesus call His followers in John 15:15?',
          options: ['Enemies', 'Strangers', 'Friends', 'Machines'],
          correctIndex: 2,
        },
        {
          id: 'gil-l1-q-5',
          kind: 'reflection',
          prompt: 'What would change if you read the Bible as God personally making Himself known to you?',
          explanation:
            'This reflection helps the learner move from seeing Scripture as mere information to seeing it as communication from a God of love.',
        },
      ],
    },
  },

  'a-god-who-speaks': {
    openingThought: `If God wants to be known,

then He must speak.

Not because we are smart enough to climb up to Him.

Not because human reason can discover everything on its own.

But because love reveals.

A silent God would leave us guessing.

Guessing about His heart.

Guessing about His will.

Guessing about our purpose.

Guessing about salvation.

But Scripture tells a different story.

God speaks.

Through creation.

Through prophets.

Through His Son.

Through His Word.

The Bible is not God hiding from humanity.

It is God coming near through truth.`,
    scriptureRef: 'Hebrews 1:1 to 2',
    scriptureQuote: `God,

who at various times and in various ways spoke in time past to the fathers by the prophets,

has in these last days spoken to us by His Son.`,
    scriptureAfterPrimary: `Hebrews opens with a sweeping promise.

God still speaks clearly.`,
    scriptureSecondaryRef: '2 Peter 1:21',
    scriptureSecondaryQuote: `For prophecy never came by the will of man,

but holy men of God spoke as they were moved by the Holy Spirit.`,
    scriptureAfterSecondary: `Peter anchors prophecy in God’s initiative,

not human guessing.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture' as const,
        reference: '2 Timothy 3:16',
        quote: `All Scripture is given by inspiration of God,

and is profitable for doctrine,

for reproof,

for correction,

for instruction in righteousness.`,
      },
      {
        type: 'scripture' as const,
        reference: 'John 17:17',
        quote: `Sanctify them by Your truth.

Your word is truth.`,
      },
      {
        type: 'paragraph' as const,
        text: `God does not leave humanity in silence.

He speaks through His Word,

and His Word reveals truth.`,
      },
    ],
    teachingPoints: [
      `God speaks because He wants to be known.

The Bible is not random religious writing.

It is God revealing Himself.`,
      `Scripture did not begin with human opinion.

Peter says holy men spoke as they were moved by the Holy Spirit.`,
      `The Bible is inspired by God.

Scripture carries divine authority because its source is God Himself.`,
      `God’s Word teaches and corrects.

Truth does not only comfort us.

It also reshapes us.`,
      `Jesus is God’s clearest message.

God has spoken through prophets,

but His fullest revelation is found in Christ.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudy: {
      surface: 'theopneustos',
      lemma: 'θεόπνευστος',
      transliteration: 'theopneustos',
      meaning: 'God-breathed',
      strongs: 'G2315',
      note: `The word translated “inspiration of God” means God-breathed.

This does not mean God erased the personalities of the Bible writers.

It means Scripture carries God’s breath,

God’s message,

and God’s authority.

Human writers wrote in real language,

real history,

and real situations.

But God was guiding the message.

This matters because the Bible is not merely people talking about God.

It is God speaking through human words.`,
      reference: '2 Timothy 3:16',
    },
    studyInsight: {
      title: 'Communication that reveals love',
      variant: 'scripture_connection',
      body: `Some people think the Bible exists to control people.

But Scripture presents itself differently.

God’s Word reveals.

It teaches.

It corrects.

It invites.

It opens a way to know God.

That does not mean every passage is easy at first.

It does mean the Bible has a purpose.

God is not trying to confuse us.

He is communicating.

And because God is love,

His communication is never empty information.

When God speaks,

He reveals His heart.

When God corrects,

He is protecting life.

When God warns,

He is telling the truth before harm comes.

When God promises,

He is giving us something solid to trust.

The Bible is God speaking so love can be understood,

received,

and lived.`,
    },
    reflectPrompt: `Do you approach the Bible as God speaking,

or only as religious information?

What changes when you see Scripture as communication from a God of love?

Is there a part of God’s Word you have resisted because it corrected you?

How might correction be an expression of love?`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, before you read Scripture,

pause for ten seconds.

Pray simply:

Lord, speak to me through Your Word.

Then read slowly.

Look for one thing God is revealing about Himself.

Not just what you should do.

Not just what you should avoid.

Ask:

What is God showing me about His heart?

Prayer:

Lord,

Thank You for speaking.

Thank You for not leaving me to guess who You are.

Teach me to receive Scripture with humility.

Help me listen when Your Word comforts me,

and when Your Word corrects me.

Show me Your heart through what You have written.

Lead me into truth.

Amen.`,
    prayer: '',
    completionSummary:
      'God speaks through Scripture and His Son so love can be known, not imagined.',
    lessonQuiz: {
      ...QUIZ_SHELL,
      eyebrow: 'Quick Review Quiz',
      questions: [
        {
          id: 'gil-l2-q-1',
          prompt: 'According to Hebrews 1, how has God spoken in these last days?',
          options: ['Through silence', 'Through His Son', 'Through human guesses', 'Through fear only'],
          correctIndex: 1,
        },
        {
          id: 'gil-l2-q-2',
          prompt: 'According to 2 Peter 1:21, how did prophecy come?',
          options: ['By human will alone', 'By political power', 'As men were moved by the Holy Spirit', 'By imagination only'],
          correctIndex: 2,
        },
        {
          id: 'gil-l2-q-3',
          prompt: 'What does the Greek word theopneustos mean?',
          options: ['God-breathed', 'Hidden knowledge', 'Human tradition', 'Ancient law only'],
          correctIndex: 0,
        },
        {
          id: 'gil-l2-q-4',
          kind: 'multi',
          prompt: 'What does Scripture do according to 2 Timothy 3:16?',
          options: ['Teaches', 'Corrects', 'Instructs in righteousness', 'Replaces God'],
          correctIndices: [0, 1, 2],
        },
        {
          id: 'gil-l2-q-5',
          kind: 'reflection',
          prompt: 'What is one way you need to listen more carefully when God speaks through Scripture?',
          explanation:
            'This reflection helps the learner move from merely reading the Bible to receiving it as God’s communication.',
        },
      ],
    },
  },

  'a-god-who-knows-the-future': {
    openingThought: `If God knows the future,

then history is not random.

Human life can feel unstable.

Kingdoms rise.

Nations fall.

People make promises they cannot keep.

Leaders change.

Systems break.

The world often feels like it is moving without direction.

But Scripture gives us a different picture.

God is not surprised by history.

He is not reacting in panic.

He sees the end from the beginning.

Bible prophecy is not given so we can become obsessed with dates.

It is given so we can learn to trust the God who knows what is coming.

Prophecy is not just information about the future.

It is an invitation to confidence.`,
    scriptureRef: 'Daniel 2:27 to 28',
    scriptureQuote: `Daniel answered in the presence of the king,

and said,

The secret which the king has demanded,

the wise men,

the astrologers,

the magicians,

and the soothsayers cannot declare to the king.

But there is a God in heaven who reveals secrets,

and He has made known to King Nebuchadnezzar what will be in the latter days.`,
    scriptureAfterPrimary: `Daniel begins where Babylon’s experts stopped.

There is a God in heaven who reveals what no counselor could unlock.`,
    scriptureSecondaryRef: 'Daniel 2:44',
    scriptureSecondaryQuote: `And in the days of these kings

the God of heaven will set up a kingdom

which shall never be destroyed.`,
    scriptureAfterSecondary: `Daniel will trace kingdom after kingdom,

each one passing,

until God sets up a kingdom that lasts forever.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture' as const,
        reference: 'Isaiah 46:9 to 10',
        quote: `For I am God,

and there is no other.

I am God,

and there is none like Me,

declaring the end from the beginning,

and from ancient times things that are not yet done.`,
      },
      {
        type: 'scripture' as const,
        reference: 'John 14:29',
        quote: `And now I have told you before it comes,

that when it does come to pass,

you may believe.`,
      },
      {
        type: 'paragraph' as const,
        text: `God does not reveal the future to satisfy curiosity.

He reveals enough for us to believe.`,
      },
    ],
    teachingPoints: [
      `God knows what human beings cannot know.

The wise men of Babylon could not reveal the king’s dream,

but God could.`,
      `Prophecy shows that God rules above human kingdoms.

Earthly empires rise and fall,

but God’s kingdom remains.`,
      `Daniel 2 gives a broad picture of world history.

The image in Nebuchadnezzar’s dream points to successive kingdoms and the final victory of God’s kingdom.`,
      `Prophecy builds trust.

Jesus said He tells us things before they happen so that when they happen,

we may believe.`,
      `The goal is not fear.

Biblical prophecy should lead us to faith,

not anxiety.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudy: {
      surface: 'God in heaven',
      lemma: 'אֱלָהּ שְׁמַיָּא',
      transliteration: 'Elah Shemayya',
      meaning: 'God of heaven.',
      strongs: 'H426',
      note: `Daniel tells the king that “there is a God in heaven.”

This phrase matters.

Babylon had power.

Babylon had wealth.

Babylon had soldiers.

Babylon had religious experts.

But Daniel points above Babylon.

There is a God in heaven.

That means there is a throne higher than every earthly throne.

There is wisdom greater than human wisdom.

There is a kingdom greater than every empire.

Daniel’s confidence was not in himself.

It was in the God who reveals what human beings cannot.`,
      reference: 'Daniel 2:28',
    },
    studyInsight: {
      title: 'What the king could not see alone',
      variant: 'prophecy_lens',
      body: `Daniel 2 tells the story of a powerful king who had a dream he could not understand.

Nebuchadnezzar wanted answers.

His wise men could not give them.

But Daniel prayed.

God revealed the dream and its meaning.

The king saw a great image.

Its head was gold.

Its chest and arms were silver.

Its belly and thighs were bronze.

Its legs were iron.

Its feet were partly iron and partly clay.

Then a stone struck the image,

broke it apart,

and became a great mountain that filled the whole earth.

Daniel explained that the image represented kingdoms.

Babylon would not last forever.

Other kingdoms would come after it.

But the final kingdom would not come from human power.

God Himself would establish a kingdom that would never be destroyed.

This is the heart of prophecy.

Human kingdoms are temporary.

God’s kingdom is eternal.

Prophecy is not mainly about proving we are smarter than other people.

It is about seeing that God is faithful,

history is moving somewhere,

and His kingdom will win.`,
    },
    studyInsightBlocks: [
      {
        type: 'scriptureChain',
        title: 'God Reveals the Future',
        references: [
          { reference: 'Daniel 2:28' },
          { reference: 'Isaiah 46:9 to 10' },
          { reference: 'John 14:29' },
          { reference: 'Daniel 2:44' },
        ],
      },
      {
        type: 'compactList',
        items: [
          'Head of gold: Babylon',
          'Chest and arms of silver: Medo-Persia',
          'Belly and thighs of bronze: Greece',
          'Legs of iron: Rome',
          'Feet of iron and clay: Divided kingdoms',
          'Stone becoming a mountain: God’s eternal kingdom',
        ],
      },
      {
        type: 'studyVisual',
        title: 'Daniel 2 Prophecy Map',
        description:
          'A simple overview of Nebuchadnezzar’s dream and Daniel’s interpretation.',
        verseReferences: ['Daniel 2:31 to 45'],
        footnote:
          'Every kingdom in the image is temporary except one. God’s kingdom will never be destroyed.',
        accent: 'stone',
        payload: {
          variant: 'daniel2KingdomsDiagram',
          secondComingLabel: 'Second Coming of Christ',
          enableMobileTapReveal: true,
        },
      },
    ],
    reflectPrompt: `Where do you feel uncertainty about the future right now?

What changes when you remember that God is not surprised by history?

Do you usually think of prophecy as scary,

confusing,

or hope-giving?

Why?

If God’s kingdom is the only kingdom that lasts,

what does that say about where your confidence should be?`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week,

pay attention to what makes you anxious about the future.

News.

Money.

Politics.

Family.

Career.

The unknown.

When anxiety rises,

pause and remember Daniel’s words:

“There is a God in heaven.”

Then pray this:

Lord,

You know the end from the beginning.

You are not confused by history.

You are not threatened by human power.

Teach me to trust Your kingdom more than the kingdoms of this world.

Calm my fear.

Strengthen my faith.

Help me live today with confidence in Your future.

Amen.`,
    prayer: '',
    completionSummary:
      'God unveils enough of tomorrow for us to trust Him today with calm confidence.',
    lessonQuiz: {
      ...QUIZ_SHELL,
      eyebrow: 'Quick Review Quiz',
      questions: [
        {
          id: 'gil-l3-q-1',
          prompt: 'In Daniel 2, who revealed the king’s dream and its meaning?',
          options: [
            'The wise men of Babylon',
            'Daniel’s natural intelligence',
            'The God of heaven',
            'The king’s advisors',
          ],
          correctIndex: 2,
        },
        {
          id: 'gil-l3-q-2',
          prompt: 'What did the stone in Daniel 2 represent?',
          options: [
            'Another temporary empire',
            'God’s eternal kingdom',
            'Babylon’s military power',
            'Human philosophy',
          ],
          correctIndex: 1,
        },
        {
          id: 'gil-l3-q-3',
          prompt: 'According to John 14:29, why does God reveal things before they happen?',
          options: [
            'So people can become afraid',
            'So people can argue about dates',
            'So people may believe',
            'So people can control the future',
          ],
          correctIndex: 2,
        },
        {
          id: 'gil-l3-q-4',
          kind: 'multi',
          prompt: 'What are the main lessons from Daniel 2?',
          options: [
            'Human kingdoms are temporary',
            'God knows the future',
            'God’s kingdom will never be destroyed',
            'Prophecy is meant to replace faith',
          ],
          correctIndices: [0, 1, 2],
        },
        {
          id: 'gil-l3-q-5',
          kind: 'reflection',
          prompt: 'What is one area of your future where you need to trust God more?',
          explanation:
            'This reflection helps the learner connect Bible prophecy to personal trust in God.',
        },
      ],
    },
  },

  'a-god-who-can-be-known': {
    openingThought: `Knowing about someone

is not the same as knowing them.

You can know facts about a person.

Their name.

Their work.

Their history.

Their habits.

But relationship requires more than information.

It requires trust.

Conversation.

Time.

Openness.

The Bible presents God as someone who can be known.

Not fully mastered.

Not reduced to a formula.

Not controlled by human understanding.

But truly known.

God does not reveal prophecy only to prove He is powerful.

He reveals Himself so we can trust Him,

love Him,

and walk with Him.`,
    scriptureRef: 'John 17:3',
    scriptureQuote: `And this is eternal life,

that they may know You,

the only true God,

and Jesus Christ whom You have sent.`,
    scriptureSecondaryRef: 'Jeremiah 9:23 to 24',
    scriptureSecondaryQuote: `Let not the wise man glory in his wisdom,

let not the mighty man glory in his might,

nor let the rich man glory in his riches;

but let him who glories glory in this,

that he understands and knows Me,

that I am the LORD,

exercising lovingkindness,

judgment,

and righteousness in the earth.

For in these I delight,

says the LORD.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture' as const,
        reference: 'Hosea 6:3',
        quote: `Let us know,

let us pursue the knowledge of the LORD.`,
      },
      {
        type: 'scripture' as const,
        reference: 'John 14:7',
        quote: `If you had known Me,

you would have known My Father also;

and from now on you know Him

and have seen Him.`,
      },
      {
        type: 'paragraph' as const,
        text: `Eternal life is not merely endless time.

It is knowing God through Jesus Christ.`,
      },
    ],
    teachingPoints: [
      `God wants to be known.

Scripture does not present God as distant, hidden, or uninterested in relationship.`,
      `Knowing God is central to eternal life.

Jesus said eternal life is knowing the Father and the Son.`,
      `Knowing God means knowing His character.

Jeremiah says God delights in lovingkindness, judgment, and righteousness.`,
      `Knowing God must be pursued.

Hosea invites us to pursue the knowledge of the Lord.`,
      `Jesus reveals the Father.

To know Christ is to see the clearest picture of God.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudy: {
      surface: 'know',
      lemma: 'γινώσκω',
      transliteration: 'ginosko',
      meaning: 'to know through relationship, experience, and personal recognition',
      strongs: 'G1097',
      note: `In John 17:3, Jesus uses a word for knowing that is more than collecting facts.

It points to relational knowing.

Personal knowing.

Knowing that involves trust,

experience,

and connection.

This matters because eternal life is not only about living forever.

It is about entering a restored relationship with God.

Salvation is not merely escape from death.

It is the gift of knowing the God who is life.`,
      reference: 'John 17:3',
    },
    studyInsight: {
      title: 'More than right answers',
      variant: 'christ_connection',
      body: `Many people think religion is mainly about knowing the right answers.

Answers matter.

Truth matters.

Doctrine matters.

But Scripture keeps pushing deeper.

The goal is not information without relationship.

The goal is knowing God.

That changes everything.

Prophecy becomes more than prediction.

It shows we can trust the God who sees history.

Commandments become more than rules.

They reveal the character of the God who protects love.

Correction becomes more than criticism.

It becomes the care of a Father who refuses to leave us broken.

The Bible is not asking us to admire God from a distance.

It is inviting us to know Him.

And Jesus is the center of that knowing.

If we want to know what God is like,

we look at Christ.`,
    },
    studyInsightBlocks: [
      {
        type: 'scriptureChain',
        title: 'Knowing God',
        references: [
          { reference: 'John 17:3' },
          { reference: 'Jeremiah 9:23 to 24' },
          { reference: 'Hosea 6:3' },
          { reference: 'John 14:7' },
        ],
      },
      {
        type: 'paragraph',
        text: `Eternal life is not just endless existence. It is restored relationship with God through Jesus Christ.`,
      },
    ],
    reflectPrompt: `Do you know more about God than you know Him personally?

What has helped you experience God as relational rather than distant?

How does Jesus change the way you understand the Father?

What would it look like to pursue knowing God this week?`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, choose one Gospel story about Jesus.

Read it slowly.

Do not only ask,

What happened?

Ask,

What does this show me about God?

Look at how Jesus speaks.

How He notices people.

How He corrects.

How He heals.

How He tells the truth.

How He shows compassion.

Then pray from what you see.

Prayer:

Lord,

I do not want to know only facts about You.

I want to know You.

Open my eyes to Your character.

Help me see the Father through Jesus.

Teach me to trust Your heart,

pursue Your presence,

and walk with You daily.

Make eternal life real in me now

as I learn to know You.

Amen.`,
    prayer: '',
    completionSummary:
      'God wants you to know Him personally: eternal life is restored relationship through Jesus Christ.',
    lessonQuiz: {
      ...QUIZ_SHELL,
      eyebrow: 'Quick Review Quiz',
      questions: [
        {
          id: 'gil-l4-q-1',
          prompt: 'According to John 17:3, what is eternal life?',
          options: [
            'Knowing the only true God and Jesus Christ',
            'Having no responsibilities',
            'Knowing every prophecy chart',
            'Living without correction',
          ],
          correctIndex: 0,
        },
        {
          id: 'gil-l4-q-2',
          prompt: 'According to Jeremiah 9, what should a person glory in?',
          options: [
            'Wisdom, might, and riches',
            'Understanding and knowing the Lord',
            'Being better than others',
            'Human success only',
          ],
          correctIndex: 1,
        },
        {
          id: 'gil-l4-q-3',
          prompt: 'What does the Greek word ginosko point to in John 17:3?',
          options: ['Random guessing', 'Relational knowing', 'Memorizing facts only', 'Ignoring truth'],
          correctIndex: 1,
        },
        {
          id: 'gil-l4-q-4',
          kind: 'multi',
          prompt: 'What helps us know God more clearly?',
          options: ['Scripture', 'Jesus Christ', 'Pursuing the knowledge of the Lord', 'Avoiding truth'],
          correctIndices: [0, 1, 2],
        },
        {
          id: 'gil-l4-q-5',
          kind: 'reflection',
          prompt: 'What is one step you can take this week to know God more personally?',
          explanation:
            'This reflection helps the learner move from information to relationship with God.',
        },
      ],
    },
  },

  'truth-has-a-center': {
    openingThought: `Truth can feel scattered.

A verse here.

A doctrine there.

A prophecy.

A command.

A promise.

A warning.

At first, the Bible can feel like many separate pieces.

But Scripture has a center.

Not an idea only.

Not a system only.

Not a list of facts only.

At the center is God Himself.

And Scripture tells us something direct about Him:

God is love.

That means Bible truth is not random.

Every true teaching reveals something about God’s character.

If a doctrine makes God look unlike Jesus,

we need to study more carefully.

Truth has a center,

and that center is the God who is love.`,
    scriptureRef: '1 John 4:16',
    scriptureQuote: `And we have known and believed the love that God has for us.

God is love,

and he who abides in love abides in God,

and God in him.`,
    scriptureSecondaryRef: 'John 5:39',
    scriptureSecondaryQuote: `You search the Scriptures,

for in them you think you have eternal life;

and these are they which testify of Me.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture' as const,
        reference: 'Luke 24:27',
        quote: `And beginning at Moses and all the Prophets,

He expounded to them in all the Scriptures

the things concerning Himself.`,
      },
      {
        type: 'scripture' as const,
        reference: 'Psalm 89:14',
        quote: `Righteousness and justice are the foundation of Your throne;

mercy and truth go before Your face.`,
      },
      {
        type: 'paragraph' as const,
        text: `The Bible does not ask us to collect truth without seeing God.

Scripture points us to His character,

and most clearly to Christ.`,
      },
    ],
    teachingPoints: [
      `God’s character is the center of truth.

Scripture says God is love, so every true teaching must agree with His character.`,
      `The Bible points to Christ.

Jesus said the Scriptures testify of Him.`,
      `Truth is not detached from relationship.

Bible truth is meant to lead us into deeper trust, worship, and obedience.`,
      `Mercy and truth belong together.

God’s truth does not cancel His mercy. His mercy does not weaken His truth.`,
      `Doctrine should reveal God more clearly.

If a belief makes God seem cruel, careless, or unlike Christ, it deserves careful Scripture study.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudy: {
      surface: 'truth',
      lemma: 'ἀλήθεια',
      transliteration: 'aletheia',
      meaning: 'truth, reality, what is not hidden',
      strongs: 'G225',
      note: `The word for truth points to what is real,

reliable,

and uncovered.

Jesus prayed,

“Your word is truth.”

He also said,

“I am the way,

the truth,

and the life.”

This matters because truth is not only information.

Truth is revealed in God’s Word,

and truth is embodied in Jesus.

The Bible gives us truth in words.

Jesus shows us truth in a Person.`,
      reference: 'John 17:17 · John 14:6',
    },
    studyInsight: {
      title: 'Nothing stands alone',
      variant: 'doctrine_clarity',
      body: `One mistake people make with the Bible is treating truth like a stack of disconnected topics.

Creation.

Sin.

Law.

Grace.

Prophecy.

Judgment.

The second coming.

Death.

Resurrection.

All of these matter.

But none of them stand alone.

Each one reveals something about God.

Creation shows that God gives life.

The law shows that God protects love.

Grace shows that God saves the undeserving.

Judgment shows that God takes evil seriously.

Prophecy shows that God can be trusted.

The resurrection shows that God has power over death.

The second coming shows that God does not abandon the world.

When truth is separated from God’s character,

it becomes cold.

When truth is seen through God’s love,

it becomes beautiful.`,
    },
    studyInsightBlocks: [
      {
        type: 'scriptureChain',
        title: 'Truth Reveals God',
        references: [
          { reference: '1 John 4:16' },
          { reference: 'John 5:39' },
          { reference: 'Luke 24:27' },
          { reference: 'Psalm 89:14' },
        ],
      },
      {
        type: 'paragraph',
        text: `Bible truth is not a pile of isolated facts. It reveals the character of God and leads us to Christ.`,
      },
    ],
    reflectPrompt: `Have you ever studied Bible truth as facts without seeing God’s heart?

Which doctrine has helped you understand God’s love more clearly?

Have you ever heard a teaching that made God seem unlike Jesus?

How can Scripture help you test whether a belief reflects God’s character?`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week,

choose one Bible teaching you already know.

Maybe prayer.

The Sabbath.

Forgiveness.

The second coming.

Judgment.

Grace.

Ask this question:

What does this show me about God’s love?

Write one sentence if helpful.

Do not only ask,

What is the doctrine?

Ask,

What does this reveal about God?

Prayer:

Lord,

Help me see truth clearly.

Keep me from treating Scripture like disconnected facts.

Show me Your character in every teaching.

Help me understand truth through Jesus.

Let what I believe make me more loving,

more faithful,

and more surrendered to You.

Amen.`,
    prayer: '',
    completionSummary:
      'Every faithful teaching points back to God: His truth and His mercy meet in Christ.',
    lessonQuiz: {
      ...QUIZ_SHELL,
      eyebrow: 'Quick Review Quiz',
      questions: [
        {
          id: 'gil-l5-q-1',
          prompt: 'According to 1 John 4:16, what is God?',
          options: ['Love', 'Confusion', 'Distance', 'Fear'],
          correctIndex: 0,
        },
        {
          id: 'gil-l5-q-2',
          prompt: 'According to John 5:39, whom do the Scriptures testify about?',
          options: ['Moses only', 'Human achievement', 'Jesus', 'Angels only'],
          correctIndex: 2,
        },
        {
          id: 'gil-l5-q-3',
          prompt: 'What does the Greek word aletheia mean?',
          options: ['Truth or reality', 'Hidden fear', 'Human opinion', 'Religious tradition only'],
          correctIndex: 0,
        },
        {
          id: 'gil-l5-q-4',
          kind: 'multi',
          prompt: 'Which statements fit this lesson?',
          options: [
            'True doctrine reveals God’s character',
            'Truth should be separated from Jesus',
            'Mercy and truth belong together',
            'Bible teachings should point us toward God',
          ],
          correctIndices: [0, 2, 3],
        },
        {
          id: 'gil-l5-q-5',
          kind: 'reflection',
          prompt: 'What Bible truth helps you see God’s love more clearly?',
          explanation:
            'This reflection helps the learner connect doctrine to God’s character instead of treating truth as disconnected information.',
        },
      ],
    },
  },

  'jesus-reveals-the-father': {
    openingThought: `Many people believe in God,

but they are not sure what He is like.

Is He distant?

Is He angry?

Is He hard to please?

Is He waiting for people to fail?

Those questions matter.

Because the way we see God shapes the way we relate to Him.

If we think God is harsh,

we hide.

If we think God is careless,

we stop trusting.

If we think God is only power,

we may obey from fear but not love.

Then Jesus comes.

And He says something stunning:

If you have seen Me,

you have seen the Father.

Jesus does not hide God.

He reveals Him.`,
    scriptureRef: 'John 14:8 to 9',
    scriptureQuote: `Philip said to Him,

Lord,

show us the Father,

and it is sufficient for us.

Jesus said to him,

Have I been with you so long,

and yet you have not known Me,

Philip?

He who has seen Me has seen the Father.`,
    scriptureSecondaryRef: 'Hebrews 1:3',
    scriptureSecondaryQuote: `Who being the brightness of His glory

and the express image of His person,

and upholding all things by the word of His power,

when He had by Himself purged our sins,

sat down at the right hand of the Majesty on high.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture' as const,
        reference: 'Colossians 1:15',
        quote: `He is the image of the invisible God,

the firstborn over all creation.`,
      },
      {
        type: 'scripture' as const,
        reference: 'John 1:18',
        quote: `No one has seen God at any time.

The only begotten Son,

who is in the bosom of the Father,

He has declared Him.`,
      },
      {
        type: 'paragraph' as const,
        text: `Jesus is not merely a messenger from God.

He is the clearest revelation of God.`,
      },
    ],
    teachingPoints: [
      `Jesus reveals the Father.

He told Philip that seeing Him is seeing the Father.`,
      `Jesus is the image of the invisible God.

If we want to understand God’s character, we look at Christ.`,
      `Jesus shows God’s glory through self-giving love.

His life, His compassion, His truth, and His sacrifice reveal what God is like.`,
      `Jesus corrects false pictures of God.

Any view of God that contradicts Christ needs to be reexamined.`,
      `The Father and Son are united in love.

Jesus did not come to convince the Father to love us. He came because the Father already loved us.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudy: {
      surface: 'image',
      lemma: 'εἰκών',
      transliteration: 'eikon',
      meaning: 'image, visible representation, likeness',
      strongs: 'G1504',
      note: `Colossians calls Jesus the image of the invisible God.

The word points to a visible representation.

Jesus makes the invisible God known.

This matters because God does not leave His character vague.

In Jesus,

God’s heart becomes visible.

His mercy becomes visible.

His truth becomes visible.

His love becomes visible.

To know what God is like,

look at Christ.`,
      reference: 'Colossians 1:15',
    },
    studyInsight: {
      title: 'The Father is like Jesus',
      variant: 'christ_connection',
      body: `One of the most damaging ideas in religion is that Jesus is loving,

but the Father is mostly severe.

Scripture does not teach that.

Jesus said,

“He who has seen Me has seen the Father.”

That means the compassion of Jesus reveals the Father.

The patience of Jesus reveals the Father.

The holiness of Jesus reveals the Father.

The tears of Jesus reveal the Father.

The cross of Jesus reveals the Father.

Jesus did not come to change God’s mind about humanity.

He came to reveal God’s heart toward humanity.

“For God so loved the world that He gave His only begotten Son.”

The Father gave.

The Son came.

The Spirit draws.

Salvation begins in the love of God.`,
    },
    studyInsightBlocks: [
      {
        type: 'scriptureChain',
        title: 'Jesus Shows Us the Father',
        references: [
          { reference: 'John 14:8 to 9' },
          { reference: 'Hebrews 1:3' },
          { reference: 'Colossians 1:15' },
          { reference: 'John 1:18' },
        ],
      },
      {
        type: 'paragraph',
        text: `Jesus is the clearest picture of God. Any view of the Father must be tested by the life, words, and sacrifice of Christ.`,
      },
    ],
    reflectPrompt: `What picture of God have you carried in your mind?

Does that picture look like Jesus?

When you read the Gospels,

what do you see in Jesus that helps you trust the Father?

Have you ever thought of Jesus as loving but the Father as distant or harsh?

How does Scripture correct that picture?`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week,

read one story from the life of Jesus.

Choose one scene.

Jesus healing someone.

Jesus forgiving someone.

Jesus correcting someone.

Jesus weeping.

Jesus praying.

Jesus going to the cross.

Then ask:

What does this show me about the Father?

Let Jesus reshape your picture of God.

Prayer:

Lord,

Show me the Father through Jesus.

Correct every false picture I have carried.

Help me see Your mercy,

Your truth,

Your patience,

and Your love.

Teach me to trust Your heart.

Let the life of Christ become the lens

through which I understand You.

Amen.`,
    prayer: '',
    completionSummary:
      'In Jesus we see the Father: His love made visible in the life and sacrifice of Christ.',
    lessonQuiz: {
      ...QUIZ_SHELL,
      eyebrow: 'Quick Review Quiz',
      questions: [
        {
          id: 'gil-l6-q-1',
          prompt: 'What did Jesus tell Philip in John 14?',
          options: [
            'No one can know the Father',
            'He who has seen Me has seen the Father',
            'The Father is unlike Me',
            'Stop asking questions',
          ],
          correctIndex: 1,
        },
        {
          id: 'gil-l6-q-2',
          prompt: 'According to Colossians 1:15, Jesus is what?',
          options: [
            'The image of the invisible God',
            'A distant angel',
            'A created myth',
            'A symbol with no connection to God',
          ],
          correctIndex: 0,
        },
        {
          id: 'gil-l6-q-3',
          prompt: 'What does the Greek word eikon mean?',
          options: ['Image or visible representation', 'Fear', 'Hidden command', 'Empty sound'],
          correctIndex: 0,
        },
        {
          id: 'gil-l6-q-4',
          kind: 'multi',
          prompt: 'Which statements fit this lesson?',
          options: [
            'Jesus reveals the Father',
            'Jesus came because the Father loved the world',
            'Jesus corrects false pictures of God',
            'Jesus is loving but the Father is not',
          ],
          correctIndices: [0, 1, 2],
        },
        {
          id: 'gil-l6-q-5',
          kind: 'reflection',
          prompt: 'What story from the life of Jesus helps you see the Father more clearly?',
          explanation:
            'This reflection helps the learner connect the character of Jesus with the character of the Father.',
        },
      ],
    },
  },

  'the-invitation-to-friendship': {
    openingThought: `The Bible does not end with God demanding distance.

It ends with God dwelling with His people.

That is the direction of the whole story.

God speaks because He wants to be known.

God reveals truth because He wants to be trusted.

God sends Jesus because He wants to save.

God gives Scripture because He wants relationship restored.

This is not cold religion.

This is friendship offered by the Creator.

Not casual friendship.

Not shallow friendship.

Not friendship without reverence.

But real nearness.

God does not invite us to know facts only.

He invites us to know Him.`,
    scriptureRef: 'John 15:13 to 15',
    scriptureQuote: `Greater love has no one than this,

than to lay down one’s life for his friends.

You are My friends

if you do whatever I command you.

No longer do I call you servants,

for a servant does not know what his master is doing;

but I have called you friends,

for all things that I heard from My Father

I have made known to you.`,
    scriptureSecondaryRef: 'Revelation 21:3',
    scriptureSecondaryQuote: `And I heard a loud voice from heaven saying,

Behold,

the tabernacle of God is with men,

and He will dwell with them,

and they shall be His people.

God Himself will be with them

and be their God.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture' as const,
        reference: 'James 2:23',
        quote: `And the Scripture was fulfilled which says,

Abraham believed God,

and it was accounted to him for righteousness.

And he was called the friend of God.`,
      },
      {
        type: 'scripture' as const,
        reference: 'Psalm 25:14',
        quote: `The secret of the LORD is with those who fear Him,

and He will show them His covenant.`,
      },
      {
        type: 'paragraph' as const,
        text: `God’s goal is not distant control.

His goal is restored relationship.`,
      },
    ],
    teachingPoints: [
      `Jesus calls His followers friends.

He reveals the Father’s heart and invites us into trust.`,
      `Friendship with God includes obedience.

Jesus said, “You are My friends if you do whatever I command you.”`,
      `Obedience is not the opposite of relationship.

When love is real, trust becomes action.`,
      `God wants to dwell with His people.

Revelation points to the final restoration of nearness between God and humanity.`,
      `Faith is relational trust.

Abraham believed God, and Scripture calls him the friend of God.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudy: {
      surface: 'friends',
      lemma: 'φίλος',
      transliteration: 'philos',
      meaning: 'friend, beloved one, someone dearly loved',
      strongs: 'G5384',
      note: `When Jesus calls His followers friends,

He uses a word that carries affection,

nearness,

and relational trust.

This does not make God common.

It makes His love astonishing.

The holy God of heaven invites human beings into friendship.

Not because we earned it.

Not because we are equal to Him.

But because His love moves toward us.`,
      reference: 'John 15:15',
    },
    studyInsight: {
      title: 'Will we respond?',
      variant: 'christ_connection',
      body: `This study began with a simple idea:

God is love.

If God is love,

then He speaks.

If He speaks,

then His Word matters.

If His Word includes prophecy,

then He is giving us reasons to trust Him.

If truth has a center,

then that center must be His character.

If Jesus reveals the Father,

then God is more beautiful than we imagined.

Now the question becomes personal.

Will we respond?

God does not force friendship.

He invites it.

He opens His Word.

He reveals His heart.

He gives His Son.

He tells the truth.

He calls us near.

The Bible is not merely a book to finish.

It is an invitation to continue walking with the God who wants to be known.`,
    },
    studyInsightBlocks: [
      {
        type: 'scriptureChain',
        title: 'Friendship With God',
        references: [
          { reference: 'John 15:13 to 15' },
          { reference: 'Revelation 21:3' },
          { reference: 'James 2:23' },
          { reference: 'Psalm 25:14' },
        ],
      },
      {
        type: 'paragraph',
        text: `God’s final goal is restored nearness. Through Christ and His Word, He invites us into trust, obedience, and friendship.`,
      },
    ],
    reflectPrompt: `What has this study shown you about God’s character?

Do you relate to God more through fear,

distance,

duty,

or trust?

What would change if you believed God truly wants friendship with you?

What is one response God may be inviting you to make?`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `Do one simple thing this week:

Set aside ten quiet minutes with God.

No performance.

No rushing.

Open Scripture.

Read slowly.

Speak honestly.

Listen prayerfully.

Treat the moment like friendship.

Because the God who made you

also wants to know you

and be known by you.

Prayer:

Lord,

Thank You for revealing Yourself as love.

Thank You for speaking through Scripture.

Thank You for showing me the Father through Jesus.

I do not want to keep You at a distance.

Teach me to trust You as a friend,

honor You as Lord,

and walk with You daily.

Draw me closer to Your heart.

Amen.`,
    prayer: '',
    completionSummary:
      'God invites you into friendship: nearness with Him through trust, obedience, and His Word.',
    seriesCompleteScreen: {
      title: 'Study complete',
      message: 'You have completed God Is Love.',
      primaryCta: { label: 'Review study', href: '/study-library/god-is-love' },
      secondaryCta: { label: 'Explore foundational studies', href: '/study-library?path=foundations' },
    },
    lessonQuiz: {
      ...QUIZ_SHELL,
      eyebrow: 'Quick Review Quiz',
      title: 'Quick Review',
      description: 'Check your understanding before finishing the study.',
      questions: [
        {
          id: 'gil-l7-q-1',
          prompt: 'What did Jesus call His followers in John 15?',
          options: ['Strangers', 'Friends', 'Enemies', 'Machines'],
          correctIndex: 1,
        },
        {
          id: 'gil-l7-q-2',
          prompt: 'According to Revelation 21:3, what is God’s final desire?',
          options: [
            'To remain distant forever',
            'To dwell with His people',
            'To hide from creation',
            'To destroy relationship',
          ],
          correctIndex: 1,
        },
        {
          id: 'gil-l7-q-3',
          prompt: 'What does the Greek word philos mean?',
          options: ['Enemy', 'Friend or beloved one', 'Stranger', 'Judge only'],
          correctIndex: 1,
        },
        {
          id: 'gil-l7-q-4',
          kind: 'multi',
          prompt: 'Which statements fit this lesson?',
          options: [
            'God invites us into restored relationship',
            'Jesus reveals the Father’s heart',
            'Friendship with God includes trust and obedience',
            'God only wants information from us',
          ],
          correctIndices: [0, 1, 2],
        },
        {
          id: 'gil-l7-q-5',
          kind: 'reflection',
          prompt: 'What is one way you can respond to God’s invitation to friendship this week?',
          explanation:
            'This reflection helps the learner move from study to personal response.',
        },
      ],
    },
  },
}
