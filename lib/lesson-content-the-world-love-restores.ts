import type { LessonReaderContent } from '@/lib/lesson-content'
import type { LessonContentBlock } from '@/lib/lesson-content-blocks'
import type { LessonQuizPayload } from '@/lib/lesson-quiz-types'
import { PLACEHOLDER_BODY } from '@/lib/foundation-lesson-shell'

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

const OVERVIEW_HREF = '/study-library/the-world-love-restores'

function shellLesson(blocks: LessonContentBlock[]): LessonReaderContent {
  return {
    openingThought: PLACEHOLDER_BODY,
    scriptureRef: 'Scripture',
    scriptureQuote: PLACEHOLDER_BODY,
    teachingPoints: [PLACEHOLDER_BODY],
    studyInsight: {
      title: 'Lesson content coming soon',
      body: PLACEHOLDER_BODY,
      placement: 'after_teaching',
    },
    studyInsightBlocks: [
      ...blocks,
      { type: 'studyCta', label: 'Back to study overview', href: OVERVIEW_HREF },
    ],
    reflectPrompt: PLACEHOLDER_BODY,
    lifeApplication: PLACEHOLDER_BODY,
    prayer: '',
  }
}

/** Placeholder shell lessons for "The World Love Restores" (Foundations). */
export const theWorldLoveRestoresSeriesLessonLibrary: Record<string, LessonReaderContent> = {
  'more-than-a-place': {
    openingThought: `When many people think about heaven or the New Earth, they picture a place.

Streets of gold.

Mansions.

Beauty.

Peace.

No bills.

That last one is not in the text directly, but honestly, we can hope.

But the Bible's picture of eternity is deeper than luxury.

The future God promises is not mainly about having nicer things.

It is about restored relationship.

God with us.

We with God.

The redeemed with one another.

No separation.

No grief.

No betrayal.

No loneliness.

No fear.

No death stealing people from the table.

The New Earth is more than a place.

It is eternal friendship with God in a restored world where love has no enemy left.`,
    scriptureRef: 'Psalm 16:11',
    scriptureQuote: `Thou wilt shew me the path of life.

In thy presence is fulness of joy.

At thy right hand there are pleasures for evermore.`,
    scriptureAfterPrimary: `Psalm 16 says fullness of joy is found in God's presence, not merely in better surroundings.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'John 14:1-3',
        quote: `Let not your heart be troubled.

In my Father's house are many mansions.

I go to prepare a place for you.

And if I go and prepare a place for you, I will come again, and receive you unto myself.

That where I am, there ye may be also.`,
      },
      {
        type: 'scripture',
        reference: 'John 14:6',
        quote: `I am the way, the truth, and the life.

No man cometh unto the Father, but by me.`,
      },
      {
        type: 'scripture',
        reference: 'John 16:27',
        quote: `For the Father himself loveth you.`,
      },
      {
        type: 'scripture',
        reference: 'Revelation 21:3',
        quote: `Behold, the tabernacle of God is with men.

And he will dwell with them.

And they shall be his people.

And God himself shall be with them, and be their God.`,
      },
      {
        type: 'scripture',
        reference: 'Revelation 22:4',
        quote: `And they shall see his face.`,
      },
    ],
    teachingPoints: [
      `1. The center of eternity is God's presence

Psalm 16 says fullness of joy is found in God's presence.

Not merely in better surroundings.

Not merely in perfect health.

Not merely in a beautiful world.

Those things matter, but they are not the center.

God is the center.

The deepest joy of eternity is not that we get stuff from God.

It is that we get God Himself.`,
      `2. Jesus prepares a place so we can be with Him

In John 14, Jesus comforts His disciples by saying He is preparing a place for them.

But notice the heart of the promise:

"That where I am, there ye may be also."

The place matters because the Person is there.

Jesus does not merely promise upgraded real estate.

He promises restored fellowship.

He is saying, "I want you with Me."

That is the gospel's destination.`,
      `3. The Father Himself loves you

John 16:27 is one of the most tender statements in Scripture.

"The Father Himself loves you."

Jesus wants us to know that the Father is not reluctant to receive us.

The Father is not emotionally distant.

The Father is not merely tolerating the redeemed because Jesus convinced Him to calm down.

The Father Himself loves us.

The New Earth is the final home of that love.`,
      `4. God will dwell with His people

Revelation 21 says the tabernacle of God is with humanity.

That means the separation caused by sin is fully healed.

God does not save us so we can live far away from Him.

He saves us so He can dwell with us.

The plan of redemption ends with God and humanity together.

Face to face.

Heart to heart.

No mediator needed because sin is gone.`,
      `5. The redeemed will see His face

Revelation 22 says God's people will see His face.

In Scripture, seeing God's face means direct, intimate fellowship.

No fear.

No hiding.

No shame.

No distance.

The greatest pleasure of eternity is not merely living forever.

It is living forever in the unveiled presence of the God who is love.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Presence',
      lemma: 'παρουσία',
      transliteration: 'parousia',
      meaning: 'Being with someone personally, directly, and relationally.',
      strongs: 'G3952',
      reference: 'Psalm 16:11',
      note: `The Bible's greatest promise is not merely a location called heaven.

It is life in God's presence.

The New Earth is beautiful because God is there, dwelling with His people forever.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The New Earth corrects a shallow view of eternity.

If eternity is only about luxury, it becomes spiritual consumerism.

A bigger house.

A better view.

No suffering.

Endless comfort.

But the Bible gives us something better.

Eternal friendship.

God with us.

The Father loving us.

Jesus receiving us to Himself.

The redeemed seeing His face.

Creation restored as the environment where love can flourish forever.

That means the New Earth is not an escape into private pleasure.

It is entrance into perfect communion.

With God.

With others.

With creation.

With life as it was always meant to be.

The greatest promise is not, "You will have everything."

The greatest promise is, "God Himself will be with you."`,
    },
    studyInsightBlocks: [
      {
        type: 'newEarthRelationalHope',
        title: 'More Than a Place',
        caption: 'The New Earth is not merely a destination. It is eternal life with God.',
        highlightedIndices: [0, 1, 2, 3, 4],
      },
      {
        type: 'scriptureChain',
        title: 'More Than a Place',
        references: [
          { reference: 'Psalm 16:11' },
          { reference: 'John 14:1-6' },
          { reference: 'John 16:27' },
          { reference: 'Revelation 21:3' },
          { reference: 'Revelation 22:4' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: The New Earth is not merely a location of luxury, but eternal friendship with God and His redeemed people.',
      },
    ],
    reflectPrompt: `When you think about eternity, do you mostly picture a place, or do you picture life with God?

Think about God's presence, eternal friendship, restored relationships, seeing His face, and what it means that the Father Himself loves you.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, practice seeing salvation as relationship, not just rescue.

Read John 14:1-3 and Revelation 21:3 slowly.

Then ask:

"Do I want God, or only what God gives?"

"Do I think of eternal life as being with Jesus?"

"Where have I reduced heaven to comfort instead of communion?"

"What would change today if I believed the Father Himself loves me?"

Choose one practical response:

Spend time with God without asking for anything.

Sit quietly with Psalm 16:11.

Thank Jesus for preparing a place so you can be with Him.

Call or message someone God has placed in your life and strengthen that relationship.

Practice eternity now by choosing presence over distraction.

The New Earth is relational.

So start living relationally now.

Prayer:

Father, thank You that Your final purpose is to be with us. Thank You that eternal life is not merely a beautiful place, but forever fellowship with You. Help me desire Your presence more than Your gifts. Teach me to receive the truth that You Yourself love me. Prepare my heart for the world where we will see Your face and live in Your joy forever. Amen.`,
    prayer: '',
    completionSummary:
      'The New Earth is more than a place of beauty. It is eternal friendship with God, restored relationship, and fullness of joy in His presence.',
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'twlr-l1-q1',
          prompt: 'According to Psalm 16:11, where is fullness of joy found?',
          options: [
            "In God's presence",
            'In material luxury',
            'In human achievement',
            'In being alone forever',
          ],
          correctIndex: 0,
          explanation:
            'Psalm 16 says fullness of joy is found in God\u2019s presence, and at His right hand are pleasures forevermore.',
        },
        {
          id: 'twlr-l1-q2',
          prompt: 'According to John 14:3, why does Jesus prepare a place for His people?',
          options: [
            'So that where He is, they may be also',
            'So they can live apart from Him',
            'So they can avoid all relationships',
            'So they can become self-sufficient',
          ],
          correctIndex: 0,
          explanation:
            'Jesus says He prepares a place and will come again so His people may be where He is.',
        },
        {
          id: 'twlr-l1-q3',
          prompt: 'According to John 16:27, who loves the believer?',
          options: ['The Father Himself', 'Only angels', 'Only other humans', 'No one directly'],
          correctIndex: 0,
          explanation: 'Jesus says, "The Father himself loveth you," revealing the Father\u2019s direct affection for His people.',
        },
        {
          id: 'twlr-l1-q4',
          prompt: "According to Revelation 21:3, what is God's tabernacle with?",
          options: ['Humanity', 'Babylon', 'The beast', 'The grave'],
          correctIndex: 0,
          explanation: 'Revelation says the tabernacle of God is with humanity, and He will dwell with them.',
        },
        {
          id: 'twlr-l1-q5',
          kind: 'reflection',
          prompt: 'What does it mean to you that the greatest promise of eternity is God with us?',
          explanation:
            'The New Earth is more than a place. It is restored fellowship with God, face-to-face joy, and love without loss.',
        },
      ],
    },
  },
  'eden-restored': {
    openingThought: `The Bible begins in a garden.

It ends in a garden-city.

That is not random.

God's plan is not to abandon creation, destroy the physical world, and move everyone into a ghostly cloud neighborhood.

The Bible begins with God creating a good world for love, beauty, work, rest, worship, and fellowship.

Sin damaged that world.

But sin did not cancel God's purpose.

Through Jesus, God restores what was broken.

The final picture of Scripture is not creation discarded.

It is creation healed.

Eden lost becomes Eden restored.

The tree of life returns.

The curse is removed.

God dwells with His people.

The world love restores is the world God wanted from the beginning.`,
    scriptureRef: 'Revelation 21:5',
    scriptureQuote: `And he that sat upon the throne said, Behold, I make all things new.`,
    scriptureAfterPrimary: `God does not discard creation. He renews it. The New Earth is His original dream fulfilled through redemption.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Genesis 1:31',
        quote: `And God saw every thing that he had made, and, behold, it was very good.`,
      },
      {
        type: 'scripture',
        reference: 'Genesis 2:8',
        quote: `And the LORD God planted a garden eastward in Eden; and there he put the man whom he had formed.`,
      },
      {
        type: 'scripture',
        reference: 'Genesis 2:15',
        quote: `And the LORD God took the man, and put him into the garden of Eden to dress it and to keep it.`,
      },
      {
        type: 'scripture',
        reference: 'Revelation 21:1',
        quote: `And I saw a new heaven and a new earth.`,
      },
      {
        type: 'scripture',
        reference: 'Revelation 22:1-3',
        quote: `And he shewed me a pure river of water of life.

In the midst of the street of it, and on either side of the river, was there the tree of life.

And there shall be no more curse.`,
      },
      {
        type: 'scripture',
        reference: 'Isaiah 11:6',
        quote: `The wolf also shall dwell with the lamb.

And the leopard shall lie down with the kid.`,
      },
    ],
    teachingPoints: [
      `1. Creation was originally very good

Genesis says God looked at everything He made and called it very good.

That means the physical world is not a mistake.

Bodies are not a mistake.

Food, beauty, work, rest, animals, relationships, and creation are not lesser spiritual things.

They were part of God's original good design.

Sin corrupted creation, but creation itself was God's good gift.`,
      `2. Eden was a place of relationship and purpose

God placed humanity in Eden to dress it and keep it.

That means Eden was not idle luxury.

It was a world of meaningful work, stewardship, beauty, responsibility, and fellowship.

Human beings were made to love God, love one another, and care for creation.

Eden shows that pleasure and purpose belong together.`,
      `3. Revelation brings Eden back

Revelation 22 shows the river of life and the tree of life.

That is direct Eden language.

The Bible is showing us that God's original purpose returns.

The curse is removed.

The tree of life appears again.

Creation is restored.

The story comes full circle.`,
      `4. God makes all things new

Revelation does not say, "I make all new things."

It says, "I make all things new."

That matters.

God restores.

He renews.

He heals.

He brings creation into the fullness of what He intended all along.

The New Earth is not Plan B.

It is God's original dream fulfilled through redemption.`,
      `5. Creation itself will be peaceful

Isaiah pictures animals living without violence and children safe in creation.

The imagery shows a world no longer ruled by fear, predation, and harm.

The peace of God fills the earth.

Life is no longer organized around survival anxiety.

Everything contrary to love is removed.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Eden',
      lemma: 'עֵדֶן',
      transliteration: 'eden',
      meaning: 'Pleasure, delight, or a place of joy.',
      strongs: 'H5731',
      reference: 'Genesis 2:8',
      note: `Eden reveals that God is the Creator of holy pleasure.

The New Earth is Eden restored, a world where joy, work, beauty, friendship, worship, and creation flourish without sin.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The Bible's story is not escape from earth.

It is the restoration of earth.

Genesis shows God creating a physical world and calling it very good.

Revelation shows God creating a new heaven and a new earth.

Genesis shows the tree of life.

Revelation brings back the tree of life.

Genesis shows humanity placed in a garden.

Revelation shows humanity dwelling with God in a renewed creation.

Genesis shows the beginning of God's dream.

Revelation shows that dream restored.

This means the Christian hope is not thin, vague, or ghostly.

It is embodied.

Relational.

Beautiful.

Purposeful.

Creation-filled.

God does not save us from being human.

He saves us from sin so we can finally be fully human as He intended.`,
    },
    studyInsightBlocks: [
      {
        type: 'edenToEdenTimeline',
        title: 'From Eden to Eden',
        caption: 'The Bible begins with Eden and ends with Eden restored.',
        highlightedIndices: [4],
      },
      {
        type: 'scriptureChain',
        title: 'Eden Restored',
        references: [
          { reference: 'Genesis 1:26-31' },
          { reference: 'Genesis 2:8-15' },
          { reference: 'Revelation 21:1-5' },
          { reference: 'Revelation 22:1-3' },
          { reference: 'Isaiah 11:6-9' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: The Bible begins in Eden and ends with creation restored to God\u2019s original purpose.',
      },
    ],
    reflectPrompt: `How does it change your view of eternity to know that God restores creation rather than abandoning it?

Think about bodies, creation, work, beauty, animals, relationships, worship, and the return of the tree of life.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, practice noticing creation as a preview of restoration.

Take a walk.

Sit outside.

Watch the sky.

Notice food, color, sound, texture, sunlight, wind, plants, or animals.

Then say:

"God made this good, and He will make it new."

Ask:

"Where have I treated the physical world as unimportant?"

"What part of creation helps me see God's goodness?"

"How can I care for my body and my environment as gifts from God?"

"What does Eden restored teach me about God's original dream?"

Do not become so "spiritual" that you miss the goodness of what God made.

That is not holiness. That is bad theology wearing church shoes.

Prayer:

Father, thank You for creating a good world and for promising to restore what sin has damaged. Help me see creation as a gift from You. Teach me to value my body, relationships, work, beauty, and the earth through the lens of redemption. Thank You that the story ends with Eden restored and Your presence with Your people forever. Amen.`,
    prayer: '',
    completionSummary:
      'The Bible begins in Eden and ends with Eden restored. God will heal creation, remove the curse, restore the tree of life, and fulfill His original purpose through Jesus.',
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'twlr-l2-q1',
          prompt: 'According to Genesis 1:31, how did God describe everything He made?',
          options: ['Very good', 'Mostly useless', 'Evil by nature', 'Beyond repair'],
          correctIndex: 0,
          explanation: 'Genesis says God saw everything He made, and it was very good.',
        },
        {
          id: 'twlr-l2-q2',
          prompt: 'According to Genesis 2:15, what did God place humanity in Eden to do?',
          options: ['Dress it and keep it', 'Destroy it', 'Ignore it', 'Escape from it'],
          correctIndex: 0,
          explanation:
            'God placed humanity in Eden to dress and keep the garden, showing that work and stewardship were part of His good design.',
        },
        {
          id: 'twlr-l2-q3',
          prompt: 'According to Revelation 21:1, what does John see?',
          options: [
            'A new heaven and a new earth',
            'Creation abandoned forever',
            'Eternal chaos',
            'A world without God',
          ],
          correctIndex: 0,
          explanation: 'John sees a new heaven and a new earth, showing God\u2019s purpose to restore creation.',
        },
        {
          id: 'twlr-l2-q4',
          prompt: 'According to Revelation 22:3, what will no longer exist?',
          options: ['The curse', 'The tree of life', "God's throne", 'Worship'],
          correctIndex: 0,
          explanation: 'Revelation says there will be no more curse in the restored creation.',
        },
        {
          id: 'twlr-l2-q5',
          kind: 'reflection',
          prompt: 'What part of God\u2019s restored creation are you most looking forward to?',
          explanation:
            'The Bible begins with Eden and ends with Eden restored. God\u2019s future includes creation healed, the curse removed, and life flourishing in His presence.',
        },
      ],
    },
  },
  'god-with-us': {
    openingThought: `The deepest promise of the New Earth is not that we get a better environment.

It is that we get God.

From Genesis to Revelation, God's desire has always been to dwell with His people.

In Eden, humanity walked with God.

In the sanctuary, God said, "Let them make me a sanctuary; that I may dwell among them."

In Jesus, God came even closer, taking human flesh and living among us.

In the New Earth, the separation caused by sin is finally gone.

No veil.

No fear.

No distance.

No hiding.

No mediator needed because sin has been removed.

God Himself will dwell with His people, and they will see His face.

That is the whole story in one sentence:

God wants to be with us.`,
    scriptureRef: 'Revelation 21:3',
    scriptureQuote: `Behold, the tabernacle of God is with men.

And he will dwell with them.

And they shall be his people.

And God himself shall be with them, and be their God.`,
    scriptureAfterPrimary: `Revelation says God's tabernacle is with humanity. He will dwell with His people directly.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Revelation 21:16',
        quote: `And the city lieth foursquare.

And the length is as large as the breadth.

And he measured the city with the reed, twelve thousand furlongs.

The length and the breadth and the height of it are equal.`,
      },
      {
        type: 'scripture',
        reference: 'Revelation 21:22-23',
        quote: `And I saw no temple therein.

For the Lord God Almighty and the Lamb are the temple of it.

And the city had no need of the sun, neither of the moon, to shine in it.

For the glory of God did lighten it, and the Lamb is the light thereof.`,
      },
      {
        type: 'scripture',
        reference: 'Revelation 22:4',
        quote: `And they shall see his face.

And his name shall be in their foreheads.`,
      },
      {
        type: 'scripture',
        reference: 'Exodus 25:22',
        quote: `And there I will meet with thee.

And I will commune with thee from above the mercy seat.`,
      },
      {
        type: 'scripture',
        reference: '1 Kings 6:20',
        quote: `And the oracle in the forepart was twenty cubits in length, and twenty cubits in breadth, and twenty cubits in the height thereof.`,
      },
    ],
    teachingPoints: [
      `1. God's desire is to dwell with His people

Revelation says the tabernacle of God is with humanity.

That word matters.

The tabernacle was the place where God's presence dwelled among His people.

The New Earth is the final reality to which the tabernacle pointed.

God does not merely send blessings from a distance.

He comes near.

He dwells with His people.

He gives Himself.`,
      `2. The New Jerusalem echoes the Most Holy Place

Revelation describes the New Jerusalem as a perfect cube.

Its length, width, and height are equal.

That detail is not filler.

In the Old Testament temple, the Most Holy Place was also shaped like a cube.

The Most Holy Place was where God's glory was manifested in a special way.

So when John sees the New Jerusalem shaped like a cube, he is showing us something huge:

The whole city becomes the place of God's immediate presence.

The dwelling place of God is no longer restricted to one sacred room.

God's people live in His presence.`,
      `3. There is no temple because God and the Lamb are there

John says he saw no temple in the city.

That sounds strange at first.

But then he explains why:

The Lord God Almighty and the Lamb are its temple.

The symbol gives way to the reality.

The temple pointed to God's presence.

But in the New Earth, God's presence is direct.

No building is needed to mediate what is now fully experienced.`,
      `4. The glory of God fills the city

Revelation says the city has no need of sun or moon because the glory of God illuminates it, and the Lamb is its light.

This does not mean creation loses beauty.

It means God's presence becomes the central light of life.

Everything is seen by His glory.

Everything is safe in His love.

Everything is alive in His presence.`,
      `5. The redeemed will see His face

Revelation says the redeemed will see God's face.

This is one of the boldest promises in Scripture.

Sin made people hide from God.

Grace brings people back to God.

The New Earth completes that restoration.

God's people no longer live by distant faith alone.

They see Him face to face.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Tabernacle',
      lemma: 'σκηνή',
      transliteration: 'skene',
      meaning: 'A dwelling place, tent, or sanctuary where God\u2019s presence was manifested among His people.',
      strongs: 'G4633',
      reference: 'Revelation 21:3',
      note: `The tabernacle pointed forward to God\u2019s final purpose: to dwell directly with humanity.

In the New Earth, God\u2019s presence is not hidden behind symbols. He Himself is with His people.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The New Jerusalem is not just a beautiful city.

It is a theological announcement.

The whole city is shaped like the Most Holy Place.

That means the place once reserved for the highest manifestation of God's presence now becomes the home of the redeemed.

That is staggering.

In the old sanctuary, the Most Holy Place was entered with reverence and limitation.

In the New Earth, God's people live in the reality to which that sacred space pointed.

No veil.

No separation.

No fear.

No sin.

No shame.

No mediator standing between a holy God and fallen humanity, because humanity has been fully restored through Christ.

The plan of salvation is not merely about getting us out of trouble.

It is about getting us back into God's presence.`,
    },
    studyInsightBlocks: [
      {
        type: 'godWithUsTempleCube',
        title: 'God With Us',
        caption: 'The New Jerusalem is the reality to which the Most Holy Place pointed: God with His people.',
        highlightedIndices: [3],
      },
      {
        type: 'scriptureChain',
        title: 'God With Us',
        references: [
          { reference: 'Revelation 21:3' },
          { reference: 'Revelation 21:16' },
          { reference: 'Revelation 21:22-23' },
          { reference: 'Revelation 22:4' },
          { reference: 'Exodus 25:22' },
          { reference: '1 Kings 6:20' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: The deepest promise of the New Earth is that God will dwell face-to-face with His people forever.',
      },
    ],
    reflectPrompt: `What does it mean to you that God's final plan is not distance, but face-to-face fellowship?

Think about the tabernacle, the Most Holy Place, the New Jerusalem, God's glory, seeing His face, and the end of all separation caused by sin.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, practice living like God actually wants to be with you.

Read Revelation 21:3 and John 16:27 slowly.

Then ask:

"Do I approach God like He wants closeness or like He barely tolerates me?"

"Where has shame made me hide from Him?"

"What would prayer look like if I believed God truly wants fellowship with me?"

"What distraction keeps me from enjoying His presence?"

Take one small step:

Spend ten quiet minutes with God.

No performance.

No big speech.

No religious gymnastics.

Just presence.

Say:

"Father, You want to be with me, and I want to be with You."

That is not shallow.

That is the entire direction of redemption.

Prayer:

Father, thank You that Your desire is to dwell with Your people. Thank You that the New Earth will be filled with Your presence and that the redeemed will see Your face. Heal the shame, fear, and distance sin has created in me. Teach me to enjoy fellowship with You now as a preview of eternity. Amen.`,
    prayer: '',
    completionSummary:
      'The New Jerusalem reveals God\u2019s final purpose: His presence dwelling directly with His people. The redeemed will live face to face with God forever.',
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'twlr-l3-q1',
          prompt: 'According to Revelation 21:3, what is with humanity?',
          options: ['The tabernacle of God', 'The beast', 'Babylon', 'The curse'],
          correctIndex: 0,
          explanation: 'Revelation says the tabernacle of God is with humanity, and He will dwell with them.',
        },
        {
          id: 'twlr-l3-q2',
          prompt: 'According to Revelation 21:16, what shape does the New Jerusalem echo?',
          options: ['A perfect cube', 'A triangle', 'A broken tower', 'A wilderness tent only'],
          correctIndex: 0,
          explanation:
            'The city\u2019s length, breadth, and height are equal, echoing the cube shape of the Most Holy Place.',
        },
        {
          id: 'twlr-l3-q3',
          prompt: 'According to Revelation 21:22, why is there no temple in the New Jerusalem?',
          options: [
            'The Lord God Almighty and the Lamb are its temple',
            'Worship has ended forever',
            'God is absent',
            'The city has no spiritual meaning',
          ],
          correctIndex: 0,
          explanation:
            'John says there is no temple because the Lord God Almighty and the Lamb are the temple of the city.',
        },
        {
          id: 'twlr-l3-q4',
          prompt: "According to Revelation 22:4, what will the redeemed see?",
          options: ["God's face", 'Endless darkness', 'The curse returning', "The beast's throne"],
          correctIndex: 0,
          explanation: 'Revelation says the redeemed will see His face, showing direct fellowship with God.',
        },
        {
          id: 'twlr-l3-q5',
          kind: 'reflection',
          prompt: 'Where do you need to stop hiding from God and receive His desire to be with you?',
          explanation:
            'The New Earth reveals God\u2019s final purpose: restored intimacy, direct fellowship, and God dwelling with His people forever.',
        },
      ],
    },
  },
  'bodies-made-whole': {
    openingThought: `The future God promises is not ghostly.

It is embodied.

Some people imagine eternal life as floating around somewhere without real bodies, real senses, real work, real creation, or real life.

But Scripture gives a much better picture.

God made the physical world good.

Jesus rose from the dead with a real glorified body.

The redeemed will be resurrected.

Our bodies will be transformed.

Creation itself will be delivered from corruption.

That means salvation is not God throwing away the human body.

It is God redeeming it.

The New Earth is not an escape from physical life.

It is physical life healed, glorified, and filled with God's presence forever.`,
    scriptureRef: 'Romans 8:23',
    scriptureQuote: `And not only they, but ourselves also, which have the firstfruits of the Spirit.

Even we ourselves groan within ourselves, waiting for the adoption, to wit, the redemption of our body.`,
    scriptureAfterPrimary: `Paul says believers wait for the redemption of the body. God will fully restore embodied human life.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Romans 8:18',
        quote: `For I reckon that the sufferings of this present time are not worthy to be compared with the glory which shall be revealed in us.`,
      },
      {
        type: 'scripture',
        reference: 'Romans 8:20-21',
        quote: `For the creature was made subject to vanity, not willingly, but by reason of him who hath subjected the same in hope.

Because the creature itself also shall be delivered from the bondage of corruption into the glorious liberty of the children of God.`,
      },
      {
        type: 'scripture',
        reference: 'Philippians 3:20-21',
        quote: `For our conversation is in heaven; from whence also we look for the Saviour, the Lord Jesus Christ.

Who shall change our vile body, that it may be fashioned like unto his glorious body.`,
      },
      {
        type: 'scripture',
        reference: 'Luke 24:39',
        quote: `Behold my hands and my feet, that it is I myself.

Handle me, and see; for a spirit hath not flesh and bones, as ye see me have.`,
      },
      {
        type: 'scripture',
        reference: 'John 20:27',
        quote: `Then saith he to Thomas, Reach hither thy finger, and behold my hands.

And reach hither thy hand, and thrust it into my side.`,
      },
      {
        type: 'scripture',
        reference: '1 Corinthians 15:52-53',
        quote: `The dead shall be raised incorruptible, and we shall be changed.

For this corruptible must put on incorruption, and this mortal must put on immortality.`,
      },
    ],
    teachingPoints: [
      `1. Creation is groaning for restoration

Romans says the whole creation groans.

That means sin damaged more than human spirituality.

It touched the physical world.

Bodies suffer.

Creation suffers.

Relationships suffer.

The environment suffers.

The world is not functioning as God originally designed it.

But Paul says creation groans in hope.

The pain of this world is not the final word.`,
      `2. Our bodies will be redeemed

Paul says we wait for the redemption of our body.

That sentence is important.

God does not merely save an invisible soul and leave the body behind as useless packaging.

He redeems the body.

The body matters because God made human beings embodied creatures.

Your body is not a prison for your spirit.

It is part of God's design for human life.

Sin damages the body, but Jesus will restore it.`,
      `3. Jesus rose with a real glorified body

After His resurrection, Jesus invited His disciples to touch Him.

He had flesh and bones.

He ate food.

He carried the marks of His sacrifice.

His resurrection body was physical, but glorified.

That is our pattern.

The Christian hope is not becoming less human.

It is becoming fully restored human beings in Christ.`,
      `4. The redeemed will be transformed like Christ

Philippians says Jesus will transform our lowly body to be like His glorious body.

That means weakness, decay, disease, limitation, and mortality will not last forever.

The redeemed will receive glorified bodies fit for eternal life in God's restored creation.

No sickness.

No exhaustion from sin's curse.

No bodies breaking down under the weight of a fallen world.`,
      `5. Mortality will put on immortality

First Corinthians says the dead will be raised incorruptible and this mortal will put on immortality.

Immortality is not natural to us.

It is given by God.

At the resurrection, the redeemed receive bodies no longer subject to death.

This is embodied hope.

Not fantasy.

Not vague spirituality.

Resurrection.

Transformation.

Restoration.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Redemption',
      lemma: 'ἀπολύτρωσις',
      transliteration: 'apolutrosis',
      meaning: 'To rescue, restore, reclaim, or set free by paying the cost.',
      strongs: 'G629',
      reference: 'Romans 8:23',
      note: `The redemption of the body means God will fully restore embodied human life.

The future hope is not escape from the body, but the body made whole through Christ.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The Bible's view of the future is surprisingly physical.

Creation restored.

Bodies redeemed.

Senses healed.

Work renewed.

Relationships purified.

Joy embodied.

Jesus did not rise as a ghost.

He rose as the firstfruits of a restored humanity.

His resurrection tells us what God intends to do with those who belong to Him.

This should change how we think about our bodies now.

We should not worship the body.

We should not despise the body.

We should receive it as part of God's creation, care for it as a gift, and trust that Jesus will finish the restoration sin interrupted.

The New Earth is not less real than this world.

It is more real.

This world is damaged by sin.

The world love restores will be creation as God intended, with human beings made whole in body, mind, heart, and relationship.`,
    },
    studyInsightBlocks: [
      {
        type: 'restoredBodyHope',
        title: 'Bodies Made Whole',
        caption: 'God\u2019s future is not ghostly escape. It is embodied restoration.',
        highlightedIndices: [4],
      },
      {
        type: 'scriptureChain',
        title: 'Bodies Made Whole',
        references: [
          { reference: 'Romans 8:18-23' },
          { reference: 'Philippians 3:20-21' },
          { reference: 'Luke 24:36-43' },
          { reference: 'John 20:24-29' },
          { reference: '1 Corinthians 15:51-54' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: God\u2019s future includes the redemption of our physical bodies and the healing of creation itself.',
      },
    ],
    reflectPrompt: `How does it change your view of eternity to know that God will redeem your body, not discard it?

Think about sickness, weakness, aging, exhaustion, disability, resurrection, Jesus\u2019 glorified body, and the hope of being made whole.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, treat your body like something Jesus plans to redeem.

Not an idol.

Not trash.

A gift.

Ask:

"Where have I neglected my body?"

"Where have I hated my body?"

"Where have I used my body in ways that do not honor God?"

"What would it look like to care for my body as part of God\u2019s good creation?"

Choose one simple action:

Take a walk.

Drink water.

Rest properly.

Stretch.

Eat something nourishing.

Put away a habit that harms your body.

Thank God for one physical ability you still have.

Do not get weird and turn health into salvation.

But also do not act like your body is irrelevant.

Jesus bought the whole person.

Prayer:

Father, thank You that Your salvation includes the redemption of my body. Thank You that Jesus rose with a real glorified body and that He will make His people whole. Help me care for my body without worshiping it and trust You with every weakness, pain, and limitation. Prepare me for resurrection life in Your restored creation. Amen.`,
    prayer: '',
    completionSummary:
      'God\u2019s future includes the redemption of the body. Jesus will restore His people to embodied, immortal life in a renewed creation.',
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'twlr-l4-q1',
          prompt: 'According to Romans 8:23, what are believers waiting for?',
          options: [
            'The redemption of our body',
            'Escape from all physical existence',
            'Eternal life as ghosts',
            'The destruction of creation forever',
          ],
          correctIndex: 0,
          explanation:
            'Paul says believers wait for the redemption of the body, showing that God\u2019s future includes embodied restoration.',
        },
        {
          id: 'twlr-l4-q2',
          prompt: 'According to Philippians 3:20-21, what will Jesus do to our body?',
          options: [
            'Transform it to be like His glorious body',
            'Permanently abandon it',
            'Make it sinful forever',
            'Replace it with nothing',
          ],
          correctIndex: 0,
          explanation: 'Paul says Jesus will transform our lowly body to be like His glorious body.',
        },
        {
          id: 'twlr-l4-q3',
          prompt: 'According to Luke 24:39, what did Jesus say after His resurrection?',
          options: [
            'A spirit does not have flesh and bones as He had',
            'He was only an idea',
            'Bodies do not matter',
            'He had no physical reality',
          ],
          correctIndex: 0,
          explanation:
            'Jesus invited His disciples to see and touch Him, showing that His resurrection body was real and physical.',
        },
        {
          id: 'twlr-l4-q4',
          prompt: 'According to 1 Corinthians 15:52-53, what will happen to the redeemed?',
          options: [
            'They will be raised incorruptible and changed',
            'They will remain under death forever',
            'They will lose all personhood',
            'They will become angels',
          ],
          correctIndex: 0,
          explanation: 'Paul says the dead will be raised incorruptible, and the redeemed will be changed.',
        },
        {
          id: 'twlr-l4-q5',
          kind: 'reflection',
          prompt:
            'What is one way you can honor your body this week as something God created and plans to redeem?',
          explanation:
            'The Christian hope is not ghostly escape. God will restore embodied life through the resurrection power of Jesus.',
        },
      ],
    },
  },
  'no-more-curse': {
    openingThought: `The New Earth is not merely a better version of life as we know it.

It is life without the curse.

That means everything sin introduced will be removed.

No more death.

No more sorrow.

No more crying.

No more pain.

No more curse.

No more night.

No more fear hiding in the background.

When Scripture says there will be no more curse, it means the damage of Genesis 3 is finally reversed.

The ground is no longer cursed.

The body is no longer dying.

Relationships are no longer fractured.

Work is no longer mixed with futility.

Creation is no longer groaning.

The world love restores is not patched up sin. It is creation healed.`,
    scriptureRef: 'Revelation 22:3',
    scriptureQuote: `And there shall be no more curse.

But the throne of God and of the Lamb shall be in it.

And his servants shall serve him.`,
    scriptureAfterPrimary: `Revelation says the curse is gone because God and the Lamb reign in the restored city.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Revelation 21:4',
        quote: `And God shall wipe away all tears from their eyes.

And there shall be no more death, neither sorrow, nor crying, neither shall there be any more pain.

For the former things are passed away.`,
      },
      {
        type: 'scripture',
        reference: 'Genesis 3:17-19',
        quote: `Cursed is the ground for thy sake.

In sorrow shalt thou eat of it all the days of thy life.

Thorns also and thistles shall it bring forth to thee.`,
      },
      {
        type: 'scripture',
        reference: 'Isaiah 65:17',
        quote: `For, behold, I create new heavens and a new earth.

And the former shall not be remembered, nor come into mind.`,
      },
      {
        type: 'scripture',
        reference: 'Isaiah 65:21-22',
        quote: `And they shall build houses, and inhabit them.

And they shall plant vineyards, and eat the fruit of them.`,
      },
      {
        type: 'scripture',
        reference: 'Nahum 1:9',
        quote: `Affliction shall not rise up the second time.`,
      },
      {
        type: 'scripture',
        reference: 'Revelation 22:5',
        quote: `And there shall be no night there.

And they need no candle, neither light of the sun; for the Lord God giveth them light.`,
      },
    ],
    teachingPoints: [
      `1. The curse began with sin

Genesis 3 shows the damage sin brought into the world.

The ground was cursed.

Pain increased.

Work became mixed with frustration.

Death entered human experience.

Relationships were distorted.

Creation itself was wounded.

Sin did not merely create private guilt.

It damaged the whole environment of life.`,
      `2. The New Earth removes what sin introduced

Revelation says there will be no more curse.

That means God does not merely manage the symptoms of sin forever.

He removes the root.

Everything that came through rebellion will be undone.

Death ends.

Pain ends.

Sorrow ends.

Fear ends.

The curse ends.

God is not making eternity into a spiritual waiting room with better lighting.

He is restoring creation fully.`,
      `3. The throne of God and the Lamb replaces the curse

Revelation 22:3 says there is no more curse because the throne of God and of the Lamb is there.

That is the key.

Where God's reign is fully welcomed, the curse has no place.

Sin brought disorder.

God's throne brings life, justice, peace, and worship.

The Lamb who was slain now reigns in the world He restored.`,
      `4. Work will be restored, not erased

Isaiah pictures people building, planting, and enjoying the fruit of their labor.

This suggests that the New Earth includes meaningful activity.

Work before sin was good.

The curse made work painful and frustrating.

In the restored world, purpose remains, but futility is gone.

No burnout.

No exploitation.

No thorns in the system.

Just meaningful life under God's blessing.`,
      `5. Affliction will not rise again

Nahum says affliction will not rise up the second time.

That means the New Earth is not fragile.

God does not restore creation while leaving rebellion waiting in the basement.

Evil is ended.

The curse is removed.

The universe is secure in love.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Curse',
      lemma: 'κατάρα',
      transliteration: 'katara',
      meaning:
        'The broken condition brought by sin, including death, pain, sorrow, futility, separation, and disorder.',
      strongs: 'G2671',
      reference: 'Revelation 22:3',
      note: `The curse is everything sin brought into God\u2019s good creation.

When Revelation says there will be no more curse, it means God fully removes sin\u2019s damage and restores creation to life, peace, and fellowship with Him.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `"No more curse" is one of the most powerful promises in Scripture.

It means nothing broken by sin gets the final word.

Not death.

Not grief.

Not anxiety.

Not disease.

Not betrayal.

Not exhaustion.

Not violence.

Not shame.

Not decay.

Not the ache of watching good things fall apart.

The curse touches everything now, which is why life often feels beautiful and painful at the same time.

But Revelation says the curse will end.

God does not merely take people to a better place while leaving creation wounded.

He heals the world.

The same God who planted Eden will restore creation.

The same Lamb who bore the curse will remove the curse.

The same love that came down to save will remake the world until nothing contrary to love remains.`,
    },
    studyInsightBlocks: [
      {
        type: 'noMoreCurseRestoration',
        title: 'No More Curse',
        caption: 'Everything sin introduced will be removed from God\u2019s restored creation.',
        highlightedIndices: [0, 4, 5],
      },
      {
        type: 'scriptureChain',
        title: 'No More Curse',
        references: [
          { reference: 'Revelation 21:4' },
          { reference: 'Revelation 22:3' },
          { reference: 'Genesis 3:17-19' },
          { reference: 'Isaiah 65:17-25' },
          { reference: 'Nahum 1:9' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: Everything sin damaged will be removed, reversed, healed, and restored in the world God makes new.',
      },
    ],
    reflectPrompt: `What part of the curse do you most long for God to remove?

Think about death, sickness, anxiety, grief, painful work, broken relationships, shame, exhaustion, injustice, and the promise that affliction will not rise again.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, name one place where you feel the curse most deeply.

Do not minimize it.

Name it honestly.

Then read Revelation 21:4 and Revelation 22:3 slowly.

Ask:

"What does God promise will not last forever?"

"What pain am I treating as permanent?"

"Where do I need hope instead of numbness?"

"How can I live today as someone who believes the curse will end?"

Choose one response:

Comfort someone who is grieving.

Rest from unnecessary striving.

Pray over a painful area.

Release bitterness.

Care for your body.

Do one act of restoration in your home, work, or relationships.

The New Earth promise should make you a restorer now.

Tiny restorers count. God does not despise small previews.

Prayer:

Father, thank You that one day there will be no more curse. Thank You that death, sorrow, crying, pain, and darkness will not last forever. Help me trust Your promise while I still live in a broken world. Teach me to become a small preview of restoration through love, service, forgiveness, and hope. Amen.`,
    prayer: '',
    completionSummary:
      'The New Earth is life without the curse. Everything sin introduced will be removed, and God\u2019s restored creation will be free from death, sorrow, crying, pain, and darkness.',
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'twlr-l5-q1',
          prompt: 'According to Revelation 22:3, what will be no more?',
          options: ['The curse', "God's throne", 'Worship', 'The Lamb'],
          correctIndex: 0,
          explanation:
            'Revelation says, "There shall be no more curse," showing that sin\u2019s damage will be fully removed.',
        },
        {
          id: 'twlr-l5-q2',
          prompt: 'According to Revelation 21:4, what will be no more?',
          options: [
            'Death, sorrow, crying, and pain',
            'Joy, worship, and fellowship',
            "God's presence",
            'The water of life',
          ],
          correctIndex: 0,
          explanation:
            'Revelation says God will wipe away tears and there will be no more death, sorrow, crying, or pain.',
        },
        {
          id: 'twlr-l5-q3',
          prompt: 'According to Genesis 3:17-19, what happened after sin?',
          options: [
            'The ground was cursed and work became painful',
            'The curse was immediately gone forever',
            'Death disappeared',
            'Creation became better than before',
          ],
          correctIndex: 0,
          explanation:
            'Genesis shows that sin brought a curse upon the ground, sorrow, thorns, sweat, and death.',
        },
        {
          id: 'twlr-l5-q4',
          prompt: 'According to Nahum 1:9, what will not rise up the second time?',
          options: ['Affliction', "God's love", 'Righteousness', 'Worship'],
          correctIndex: 0,
          explanation:
            'Nahum promises that affliction will not rise up the second time, showing that evil will not return.',
        },
        {
          id: 'twlr-l5-q5',
          kind: 'reflection',
          prompt: 'What is one area of brokenness where you want to trust God\u2019s promise of restoration?',
          explanation:
            'The New Earth means the curse will be removed. Everything sin damaged will be healed, reversed, and restored by God\u2019s love.',
        },
      ],
    },
  },
  'pleasures-forevermore': {
    openingThought: `God is not against joy.

That may sound obvious, but many people were taught a version of faith where holiness feels like the death of delight.

But Scripture says something different.

"In thy presence is fulness of joy; at thy right hand there are pleasures for evermore."

Pleasure was God's idea before sin corrupted it.

Beauty was God's idea.

Taste, sound, friendship, creation, worship, work, rest, laughter, wonder, and love were all part of God's good design.

Sin did not invent pleasure.

Sin hijacked it.

The New Earth is where pleasure is finally healed.

No addiction.

No shame.

No selfishness.

No decay.

No loss.

Just holy joy flowing from the presence of God forever.`,
    scriptureRef: 'Psalm 16:11',
    scriptureQuote: `Thou wilt shew me the path of life.

In thy presence is fulness of joy.

At thy right hand there are pleasures for evermore.`,
    scriptureAfterPrimary: `Psalm 16 says fullness of joy and pleasures forevermore are found in God's presence.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Psalm 36:7-9',
        quote: `How excellent is thy lovingkindness, O God!

Therefore the children of men put their trust under the shadow of thy wings.

They shall be abundantly satisfied with the fatness of thy house.

And thou shalt make them drink of the river of thy pleasures.

For with thee is the fountain of life.`,
      },
      {
        type: 'scripture',
        reference: 'Isaiah 35:1-2',
        quote: `The wilderness and the solitary place shall be glad for them.

And the desert shall rejoice, and blossom as the rose.

It shall blossom abundantly, and rejoice even with joy and singing.`,
      },
      {
        type: 'scripture',
        reference: 'Isaiah 35:10',
        quote: `And the ransomed of the LORD shall return.

And come to Zion with songs and everlasting joy upon their heads.

They shall obtain joy and gladness, and sorrow and sighing shall flee away.`,
      },
      {
        type: 'scripture',
        reference: 'Revelation 22:1-2',
        quote: `And he shewed me a pure river of water of life, clear as crystal.

On either side of the river, was there the tree of life.`,
      },
      {
        type: 'scripture',
        reference: 'Revelation 22:3',
        quote: `And his servants shall serve him.`,
      },
      {
        type: 'scripture',
        reference: '1 Corinthians 2:9',
        quote: `Eye hath not seen, nor ear heard, neither have entered into the heart of man.

The things which God hath prepared for them that love him.`,
      },
    ],
    teachingPoints: [
      `1. God's presence is the source of fullness of joy

Psalm 16 says fullness of joy is found in God's presence.

That means joy is not separate from God.

It flows from Him.

The deepest pleasure in eternity will not be disconnected from holiness.

It will be holiness fully experienced as life, beauty, freedom, and delight.

God is not the enemy of joy.

He is the fountain of it.`,
      `2. God's pleasures are abundant and pure

Psalm 36 says God's people drink from the river of His pleasures.

That is strong language.

The Bible does not picture God as stingy with joy.

He is abundant.

He satisfies.

He gives life.

Sin offers polluted pleasure that fades, enslaves, and leaves damage behind.

God gives pleasure that heals, satisfies, and never turns bitter.`,
      `3. Creation itself will rejoice

Isaiah pictures the wilderness blossoming and the desert rejoicing.

That is restoration language.

The New Earth is not sterile.

It is alive.

Beautiful.

Creative.

Filled with color, sound, growth, and gladness.

Creation will no longer groan under the curse.

It will sing under the blessing of God.`,
      `4. The redeemed will serve with joy

Revelation says God's servants will serve Him.

That means eternity is not endless boredom with better lighting.

God's future includes meaningful activity.

Service.

Purpose.

Worship.

Creativity.

Stewardship.

Work without exhaustion.

Responsibility without anxiety.

Joy without decay.

The curse made work painful.

Restoration makes service joyful.`,
      `5. God's future is greater than imagination

Paul says eye has not seen, ear has not heard, and the human heart has not fully imagined what God has prepared for those who love Him.

That does not mean we know nothing.

Scripture gives us real glimpses.

But those glimpses point beyond our current capacity.

God's restored world will be more beautiful, relational, embodied, and satisfying than we can fully picture now.

Our imagination is still running on fallen-world Wi-Fi.

The signal is limited.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Pleasure',
      lemma: 'ἡδονή',
      transliteration: 'hedone',
      meaning: 'Joy, delight, satisfaction, gladness, and holy enjoyment.',
      strongs: 'G2237',
      reference: 'Psalm 16:11',
      note: `God created pleasure before sin distorted it.

In the New Earth, pleasure is restored to its proper source and purpose: joy in God, love, creation, fellowship, worship, and life without corruption.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The phrase "pleasures forevermore" tells us something important about God.

God does not merely remove bad things.

He fills creation with good things.

Some versions of religion make eternity sound like an endless church service where nobody has a body, nobody laughs, nobody explores, nobody creates, and everybody floats politely forever.

That is not the Bible's picture.

The Bible points to fullness of joy.

River of pleasures.

Creation rejoicing.

Everlasting gladness.

Tree of life.

Service before God.

A renewed earth.

Bodies made whole.

Friendship without loss.

Worship without distraction.

Beauty without decay.

This is holy pleasure.

Not selfish indulgence.

Not sin dressed up with spiritual vocabulary.

Not entertainment replacing God.

Pleasure restored under love.

The New Earth is where joy is finally safe because sin is gone.`,
    },
    studyInsightBlocks: [
      {
        type: 'pleasuresForevermoreMap',
        title: 'Pleasures Forevermore',
        caption: 'God is the source of holy pleasure, and His future is filled with joy that never decays.',
        highlightedIndices: [0],
      },
      {
        type: 'scriptureChain',
        title: 'Pleasures Forevermore',
        references: [
          { reference: 'Psalm 16:11' },
          { reference: 'Psalm 36:7-9' },
          { reference: 'Isaiah 35:1-10' },
          { reference: 'Revelation 22:1-5' },
          { reference: '1 Corinthians 2:9' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: God is the source of holy pleasure, joy, beauty, friendship, creation, and eternal fulfillment.',
      },
    ],
    reflectPrompt: `Do you see God as the source of joy or as someone who takes joy away?

Think about pleasure, holiness, beauty, friendship, worship, creation, shame, false religion, and whether sin has distorted your understanding of joy.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, practice receiving holy joy as a gift from God.

Choose one simple pleasure and connect it back to Him:

A good meal.

A walk outside.

Music.

Laughter with a friend.

Rest.

Sunlight.

A creative project.

A quiet Sabbath moment.

Then ask:

"How does this point back to the God who made joy?"

"Has sin distorted this pleasure in my life?"

"Can I receive this with gratitude instead of guilt?"

"Can I enjoy this without making it an idol?"

The goal is not pleasure without God.

That is where things get weird and expensive.

The goal is pleasure restored under God's love.

Prayer:

Father, thank You that in Your presence is fullness of joy. Thank You for creating beauty, delight, friendship, worship, creation, and holy pleasure. Heal every distorted view I have of joy. Teach me to receive good gifts with gratitude and to reject pleasures that damage my soul. Prepare me for the world where joy will be pure, full, and forever in Your presence. Amen.`,
    prayer: '',
    completionSummary:
      'God is the source of holy pleasure. In His restored world, joy, beauty, friendship, creation, worship, and meaningful service will flourish forever without sin or loss.',
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'twlr-l6-q1',
          prompt: 'According to Psalm 16:11, where is fullness of joy found?',
          options: [
            "In God's presence",
            'In sin',
            'In selfishness',
            'In isolation',
          ],
          correctIndex: 0,
          explanation:
            'Psalm 16 says fullness of joy is found in God\u2019s presence, and at His right hand are pleasures forevermore.',
        },
        {
          id: 'twlr-l6-q2',
          prompt: 'According to Psalm 36:8, what does God make His people drink from?',
          options: [
            'The river of His pleasures',
            'The cup of Babylon',
            'The fountain of fear',
            'The waters of confusion',
          ],
          correctIndex: 0,
          explanation: 'Psalm 36 says God makes His people drink from the river of His pleasures.',
        },
        {
          id: 'twlr-l6-q3',
          prompt: 'According to Isaiah 35, what happens to the wilderness and desert?',
          options: [
            'They rejoice and blossom',
            'They remain cursed forever',
            'They disappear without hope',
            'They become Babylon',
          ],
          correctIndex: 0,
          explanation:
            'Isaiah describes the wilderness and desert rejoicing and blossoming, pointing to restoration.',
        },
        {
          id: 'twlr-l6-q4',
          prompt: "According to Revelation 22:3, what will God's servants do?",
          options: ['Serve Him', 'Live without purpose', 'Become idle forever', 'Worship the beast'],
          correctIndex: 0,
          explanation:
            'Revelation says God\u2019s servants will serve Him, showing that eternal life includes joyful purpose.',
        },
        {
          id: 'twlr-l6-q5',
          kind: 'reflection',
          prompt: 'What is one holy joy you can receive from God with gratitude this week?',
          explanation:
            'God is the source of true pleasure. The New Earth will be filled with joy, beauty, friendship, worship, meaningful service, and delight in His presence.',
        },
      ],
    },
  },
  'life-face-to-face': {
    openingThought: `The Bible's final vision is not vague.

It is not cloudy.

It is not distant.

It is face to face.

The redeemed will see God's face.

That means the story ends with intimacy restored.

No hiding like Adam and Eve after sin.

No veil like the sanctuary after the fall.

No distance created by guilt.

No fear.

No shame.

No separation.

The world love restores is not merely beautiful because the streets are gold or the tree of life returns.

It is beautiful because God is there.

And His people are with Him.

Forever.`,
    scriptureRef: 'Revelation 22:3-5',
    scriptureQuote: `And there shall be no more curse.

But the throne of God and of the Lamb shall be in it.

And his servants shall serve him.

And they shall see his face.

And his name shall be in their foreheads.

And there shall be no night there.

And they shall reign for ever and ever.`,
    scriptureAfterPrimary: `Revelation promises face-to-face fellowship with God, no more curse, and eternal service in His presence.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Revelation 21:1-3',
        quote: `And I saw a new heaven and a new earth.

And I John saw the holy city, new Jerusalem, coming down from God out of heaven.

Behold, the tabernacle of God is with men, and he will dwell with them.`,
      },
      {
        type: 'scripture',
        reference: 'Revelation 21:4-5',
        quote: `And God shall wipe away all tears from their eyes.

And there shall be no more death, neither sorrow, nor crying, neither shall there be any more pain.

Behold, I make all things new.`,
      },
      {
        type: 'scripture',
        reference: 'John 17:24',
        quote: `Father, I will that they also, whom thou hast given me, be with me where I am.

That they may behold my glory.`,
      },
      {
        type: 'scripture',
        reference: '1 Corinthians 13:12',
        quote: `For now we see through a glass, darkly; but then face to face.

Now I know in part; but then shall I know even as also I am known.`,
      },
      {
        type: 'scripture',
        reference: 'Psalm 16:11',
        quote: `In thy presence is fulness of joy.

At thy right hand there are pleasures for evermore.`,
      },
    ],
    teachingPoints: [
      `1. The redeemed will see God's face

Revelation says, "They shall see His face."

That is one of the highest promises in Scripture.

Sin made humanity hide from God.

Grace brings humanity back to God.

The New Earth completes that journey.

The redeemed do not merely know about God.

They live before Him.

They see Him.

They enjoy direct fellowship with Him.`,
      `2. Jesus wants His people with Him

In John 17, Jesus prays that His people would be with Him where He is.

That is not small.

Before the cross, Jesus is praying for eternal fellowship.

He wants His redeemed people to behold His glory.

The New Earth is the answer to that prayer.

Jesus does not save us from a distance.

He saves us for relationship.`,
      `3. The curse is gone, but service remains

Revelation says there is no more curse, and His servants will serve Him.

That means service is not erased.

It is restored.

In this world, service can be exhausting, overlooked, corrupted, or mixed with pain.

In the New Earth, service is joyful.

Work is meaningful.

Purpose is free from anxiety.

Love has no selfish competition left.`,
      `4. God's name is in their foreheads

Revelation says God's name is in the foreheads of His people.

This points to settled character, identity, belonging, and allegiance.

The redeemed are not merely living in God's world.

They reflect His character.

His love is written into them.

His name marks their minds.

They are fully His, and they are fully healed.`,
      `5. Face-to-face life is the end of partial knowing

Paul says we now see through a glass darkly, but then face to face.

Now we know in part.

Then we will know more fully.

There are questions we do not yet understand.

There are wounds we cannot yet explain.

There are mysteries that still ache.

But face-to-face life with God means darkness will not have the last word.

Love will answer what confusion could not.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Face',
      lemma: 'πρόσωπον',
      transliteration: 'prosopon',
      meaning: 'The personal presence, relational nearness, and direct fellowship of someone.',
      strongs: 'G4385',
      reference: 'Revelation 22:4',
      note: `To see God\u2019s face means restored intimacy with Him.

The New Earth is the end of hiding, fear, shame, distance, and separation. God\u2019s people live openly in His presence forever.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The World Love Restores has shown the Bible's final hope.

The New Earth is more than a place.

It is God with us.

It is Eden restored.

It is the curse removed.

It is bodies made whole.

It is holy pleasure restored.

It is eternal friendship.

It is life face to face.

That means God's final purpose is not merely to get people out of trouble.

His purpose is to bring His people home to Himself.

This is why the New Earth should not be reduced to luxury.

Luxury without love would still be empty.

Beauty without God would still be incomplete.

Immortality without fellowship would still be lonely.

But the future God promises is full.

God's presence.

Restored bodies.

Restored creation.

Restored relationships.

Restored joy.

Restored purpose.

No curse.

No night.

No death.

No separation.

The whole story ends where love always wanted it to end:

God and His people together.`,
    },
    studyInsightBlocks: [
      {
        type: 'worldLoveRestoresRecap',
        title: 'The World Love Restores',
        caption:
          'The future God promises is restored creation, restored bodies, restored relationship, and joy forever in His presence.',
        highlightedIndices: [5],
      },
      {
        type: 'newEarthRelationalHope',
        title: 'More Than a Place',
        caption: 'The New Earth is not merely a destination. It is eternal life with God.',
        highlightedIndices: [1, 2],
      },
      {
        type: 'edenToEdenTimeline',
        title: 'From Eden to Eden',
        caption: 'The Bible begins with Eden and ends with Eden restored.',
        highlightedIndices: [4],
      },
      {
        type: 'noMoreCurseRestoration',
        title: 'No More Curse',
        caption: 'Everything sin introduced will be removed from God\u2019s restored creation.',
        highlightedIndices: [0, 4],
      },
      {
        type: 'scriptureChain',
        title: 'Life Face to Face',
        references: [
          { reference: 'Revelation 22:3-5' },
          { reference: 'Revelation 21:1-7' },
          { reference: 'John 17:24' },
          { reference: '1 Corinthians 13:12' },
          { reference: 'Psalm 16:11' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: The redeemed will live forever in the direct presence of God, seeing His face and enjoying eternal friendship with Him.',
      },
    ],
    reflectPrompt: `What part of life face to face with God creates the deepest longing in you?

Think about seeing God's face, no more hiding, restored friendship, no curse, no grief, no night, redeemed bodies, eternal joy, and the end of every separation sin created.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, practice living toward face-to-face fellowship.

Ask:

"Where am I still hiding from God?"

"What shame keeps me distant?"

"What relationship needs a preview of restoration?"

"What joy has God given me as a small taste of eternity?"

"What does it mean to live today as someone who will one day see His face?"

Then choose one response:

Pray honestly without pretending.

Confess what you have been hiding.

Spend time with God without rushing.

Repair a damaged relationship where possible.

Enjoy one holy pleasure with gratitude.

Serve someone quietly.

Practice now what eternity will perfect.

God's future is not detached from today.

The New Earth is future hope pulling your present life toward love.

Prayer:

Father, thank You for the promise that Your people will see Your face. Thank You that the story ends with You dwelling with us, the curse removed, and joy made full. Heal every place where I hide from You. Teach me to live in Your presence now as a preview of eternity. Prepare my heart for the world love restores. Amen.`,
    prayer: '',
    completionSummary:
      'The redeemed will live forever in the direct presence of God, seeing His face and enjoying eternal friendship with Him.',
    seriesCompleteScreen: {
      title: 'Study Complete',
      message:
        'You have completed The World Love Restores. God\u2019s future is restored creation, restored bodies, restored relationship, holy joy, and life face to face with Him forever.',
      primaryCta: { label: 'Back to Foundations Path', href: '/paths/foundations' },
      secondaryCta: {
        label: 'Review this study',
        href: '/study-library/the-world-love-restores',
      },
    },
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'twlr-l7-q1',
          prompt: 'According to Revelation 22:4, what will the redeemed see?',
          options: ["God's face", 'The curse returning', 'Endless night', 'Separation forever'],
          correctIndex: 0,
          explanation: 'Revelation says the redeemed will see His face, showing direct fellowship with God.',
        },
        {
          id: 'twlr-l7-q2',
          prompt: 'According to Revelation 22:3, what will be no more?',
          options: ['The curse', "God's throne", 'Service', 'Worship'],
          correctIndex: 0,
          explanation: 'Revelation says there will be no more curse, and God\u2019s servants will serve Him.',
        },
        {
          id: 'twlr-l7-q3',
          prompt: 'According to John 17:24, what does Jesus desire for His people?',
          options: [
            'That they be with Him where He is',
            'That they remain separated forever',
            'That they never behold His glory',
            'That they lose hope',
          ],
          correctIndex: 0,
          explanation: 'Jesus prayed that His people would be with Him and behold His glory.',
        },
        {
          id: 'twlr-l7-q4',
          prompt: 'According to 1 Corinthians 13:12, how will believers know then?',
          options: [
            'Face to face, knowing more fully',
            'Only through darkness forever',
            'With less understanding than now',
            'Without any relationship',
          ],
          correctIndex: 0,
          explanation:
            'Paul says now we see dimly, but then face to face. Now we know in part, but then more fully.',
        },
        {
          id: 'twlr-l7-q5',
          kind: 'reflection',
          prompt: 'What is one way you can live today as someone who will one day see God\u2019s face?',
          explanation:
            'The New Earth is the world love restores: God with His people, creation healed, bodies made whole, the curse removed, and joy forever in His presence.',
        },
      ],
    },
  },
}
