import type { LessonReaderContent } from '@/lib/lesson-content'
import type { LessonQuizPayload } from '@/lib/lesson-quiz-types'

function stubQuiz(idPrefix: string, focus: string): LessonQuizPayload {
  return {
    eyebrow: 'CHECK YOUR UNDERSTANDING',
    title: 'Quick Review',
    description: 'Pause before you finish. These questions anchor the lesson goal.',
    settings: {
      quizRequired: false,
      passingScore: 70,
      allowRetake: true,
    },
    questions: [
      {
        id: `${idPrefix}-q1`,
        prompt: `${focus} Which statement fits Scripture best?`,
        options: [
          'God reveals Himself so He can be known, not hidden behind vague guesses.',
          'God refuses to give humanity any reliable names.',
          'Names in Scripture never hint at character.',
          'God speaks only to confuse sincere readers.',
        ],
        correctIndex: 0,
      },
      {
        id: `${idPrefix}-q2`,
        prompt: 'What response fits the tone of this lesson?',
        options: [
          'Slow reading, prayerful trust, and worship shaped by the text.',
          'Rush ahead without returning to the verses.',
          'Replace Scripture with private imagination.',
          'Treat God as distant from human hearts.',
        ],
        correctIndex: 0,
      },
    ],
  }
}

/** Guided reader lessons for “The God Who Wants to Be Known” (Foundations). Stub pass: Scripture-first shell for editorial expansion. */
export const theGodWhoWantsToBeKnownSeriesLessonLibrary: Record<string, LessonReaderContent> = {
  'why-names-matter': {
    openingThought: `Names are not always random.

Sometimes a name carries history.

Sometimes it carries hope.

Sometimes it carries pain.

Sometimes it says something about where a person came from,

or what they became.

In Scripture, names often matter.

They can reveal character.

They can mark a turning point.

They can tell a story in one word.

That matters because the Bible does not introduce God as a vague idea.

It introduces Him by name.

Before we rush past that,

we need to slow down.

If God reveals His name,

He is not hiding.

He is making Himself known.`,
    scriptureRef: 'Genesis 1:1',
    scriptureQuote: `In the beginning God created the heavens and the earth.`,
    scriptureSecondaryRef: 'Genesis 2:7',
    scriptureSecondaryQuote: `And the LORD God formed man of the dust of the ground,

and breathed into his nostrils the breath of life;

and man became a living being.`,
    scriptureSupplementBlocks: [
      {
        type: 'scriptureChain',
        title: 'Names That Reveal Meaning',
        references: [
          { reference: 'Genesis 2:7' },
          { reference: 'Genesis 32:27 to 28' },
          { reference: 'Matthew 1:21' },
        ],
      },
      {
        type: 'paragraph',
        text: `Scripture often uses names to reveal origin, identity, transformation, and mission.`,
      },
      {
        type: 'scripture',
        reference: 'Genesis 32:27 to 28',
        quote: `So He said to him,

“What is your name?”

He said,

“Jacob.”

And He said,

“Your name shall no longer be called Jacob,

but Israel;

for you have struggled with God and with men,

and have prevailed.”`,
      },
      {
        type: 'scripture',
        reference: 'Matthew 1:21',
        quote: `And she will bring forth a Son,

and you shall call His name Jesus,

for He will save His people from their sins.`,
      },
      {
        type: 'paragraph',
        text: `In Scripture,

names are often connected to identity,

calling,

and character.`,
      },
    ],
    teachingPoints: [
      `Names can reveal origin. Adam was formed from the ground, and his name reminds us of humanity’s earthly beginning.`,
      `Names can reveal character. Jacob’s name was connected to his story of grasping, striving, and deception.`,
      `Names can mark transformation. God changed Jacob’s name to Israel after a life-changing encounter.`,
      `Names can reveal mission. Jesus’ name is tied to His work of saving His people from sin.`,
      `God’s name matters most. If human names can carry meaning, then God’s revealed name deserves careful attention.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudy: {
      surface: 'name',
      lemma: 'שֵׁם',
      transliteration: 'shem',
      meaning: 'name, reputation, character, identity',
      strongs: 'H8034',
      note: `In Hebrew thought,

a name can carry more than a label.

It can point to reputation,

character,

identity,

or calling.

That helps us understand why names matter so much in Scripture.

When God asks Jacob his name,

He is not asking because He lacks information.

He is bringing Jacob face to face with his story.

Then God gives him a new name.

The change of name points to a change in identity.`,
      reference: 'Genesis 32:27 to 28',
    },
    studyInsight: {
      title: 'Windows into deeper truth',
      variant: 'scripture_connection',
      body: `The Bible often uses names as windows into deeper truth.

Adam reminds us that human life comes from God’s forming hand.

Jacob reminds us that God can confront dishonesty and still transform a person.

Israel reminds us that struggle with God can become surrender to God.

Jesus reminds us that God’s salvation is not abstract.

It comes personally.

Through Christ.

So when Scripture introduces God by name,

we should pay attention.

God is not an unnamed force.

He is not a distant energy.

He is not merely an idea people invented to explain life.

He is the living Creator who reveals Himself.

Names matter because relationship requires recognition.

You cannot truly know someone who remains nameless.

And the God of Scripture wants to be known.`,
    },
    studyInsightBlocks: [
      {
        type: 'studyVisual',
        title: 'Names Tell a Story',
        subtitle: 'Name Meaning Cards',
        description: 'Four snapshots from Scripture. Each name carries more than sound.',
        accent: 'stone',
        payload: {
          variant: 'sequence',
          steps: [
            {
              label: 'Adam',
              subtitle: 'Connected to the ground',
              reference: 'Humanity depends on God for life.',
            },
            {
              label: 'Jacob',
              subtitle: 'Connected to grasping or striving',
              reference: 'God can confront and transform a dishonest heart.',
            },
            {
              label: 'Israel',
              subtitle: 'One who struggles with God',
              reference: 'God can turn struggle into surrender.',
            },
            {
              label: 'Jesus',
              subtitle: 'The LORD saves',
              reference: 'His name reveals His mission.',
            },
          ],
        },
      },
    ],
    reflectPrompt: `Have you ever thought about why names matter in Scripture?

What does it mean to you that God changed Jacob’s name?

How does Jesus’ name reveal His mission?

If God reveals His name,

what does that say about His desire to be known?`,
    lifeApplication: `This week,

pay attention when you see names in Scripture.

Do not skip over them too quickly.

Ask:

What does this name reveal?

What story is connected to it?

What does this teach me about God?

Then bring that same attention to God’s name.

He is not distant.

He has made Himself known.`,
    prayer: `Lord,

Teach me to slow down when I read Your Word.

Help me notice what You reveal,

even through names I might usually pass over.

Thank You for making Yourself known.

Thank You for giving Jesus,

the name connected to salvation.

Open my heart to know You more clearly.

Amen.`,
    lessonQuiz: {
      eyebrow: 'CHECK YOUR UNDERSTANDING',
      title: 'Quick Review',
      description: 'Check your understanding before moving on.',
      settings: {
        quizRequired: false,
        passingScore: 70,
        allowRetake: true,
      },
      questions: [
        {
          id: 'tgwk-l1-q1',
          prompt: 'In Scripture, names often reveal what?',
          options: [
            'Random sounds only',
            'Identity, character, calling, or story',
            'Someone’s age only',
            'Nothing important',
          ],
          correctIndex: 1,
        },
        {
          id: 'tgwk-l1-q2',
          prompt: 'What happened to Jacob’s name after his encounter with God?',
          options: [
            'It was changed to Israel',
            'It was changed to Adam',
            'It was forgotten',
            'It stayed meaningless',
          ],
          correctIndex: 0,
        },
        {
          id: 'tgwk-l1-q3',
          prompt: 'According to Matthew 1:21, why was Jesus given His name?',
          options: [
            'Because it sounded popular',
            'Because He would save His people from their sins',
            'Because it was a family tradition',
            'Because Rome required it',
          ],
          correctIndex: 1,
        },
        {
          id: 'tgwk-l1-q4',
          kind: 'multi',
          prompt: 'Which statements fit this lesson?',
          options: [
            'Names can reveal character',
            'Names can mark transformation',
            'Names can reveal mission',
            'Names never matter in Scripture',
          ],
          correctIndices: [0, 1, 2],
        },
        {
          id: 'tgwk-l1-q5',
          kind: 'reflection',
          prompt: 'What does it mean to you that God reveals Himself by name?',
          explanation:
            'This reflection helps you notice that God’s revealed name is part of His desire to be known personally.',
        },
      ],
    },
  },

  'elohim-the-first-name-we-meet': {
    openingThought: `The Bible does not begin with an argument for God.

It begins with God.

“In the beginning God created…”

Before laws.

Before kings.

Before prophets.

Before temples.

Before Israel.

Before the cross.

There is God.

And the first name Scripture uses for God is not random.

It is Elohim.

That name appears in the opening sentence of the Bible.

It introduces God as Creator,

but it also invites us to slow down.

The God who creates is not a nameless force.

He is personal.

He speaks.

He forms.

He blesses.

He makes life.

And from the beginning,

He wants to be known.`,
    scriptureRef: 'Genesis 1:1',
    scriptureQuote: `In the beginning God created the heavens and the earth.`,
    scriptureSecondaryRef: 'Genesis 1:26',
    scriptureSecondaryQuote: `Then God said,

“Let Us make man in Our image,

according to Our likeness.”`,
    scriptureSupplementBlocks: [
      {
        type: 'scriptureChain',
        title: 'God the Creator',
        references: [{ reference: 'Genesis 1:1' }, { reference: 'Genesis 1:26 to 27' }, { reference: 'Psalm 100:3' }],
      },
      {
        type: 'paragraph',
        text: `The God who creates also gives identity, dignity, and relational purpose to humanity.`,
      },
      {
        type: 'scripture',
        reference: 'Genesis 1:27',
        quote: `So God created man in His own image;

in the image of God He created him;

male and female He created them.`,
      },
      {
        type: 'scripture',
        reference: 'Psalm 100:3',
        quote: `Know that the LORD,

He is God;

it is He who has made us,

and not we ourselves;

we are His people

and the sheep of His pasture.`,
      },
      {
        type: 'paragraph',
        text: `Scripture begins with God as Creator.

But this Creator is not distant.

He makes humanity in His image

and speaks in relational language.`,
      },
    ],
    teachingPoints: [
      `The Bible begins with God. Genesis does not treat God as an afterthought. He is the starting point of everything.`,
      `Elohim is the first name used for God in Scripture. Genesis 1:1 introduces God as Creator through this Hebrew name.`,
      `God creates by His word. Genesis repeatedly shows God speaking, and creation responding.`,
      `Humanity is made in God’s image. This means human life has dignity, purpose, and relational meaning.`,
      `Genesis uses relational language. When God says, “Let Us make man in Our image,” Scripture opens a window into the richness of God’s being.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudy: {
      surface: 'God',
      lemma: 'אֱלֹהִים',
      transliteration: 'Elohim',
      meaning: 'God, mighty Creator, the powerful One',
      strongs: 'H430',
      note: `Elohim is the first name used for God in the Bible.

The word points to greatness,

power,

majesty,

and creative authority.

There is also something interesting about the word.

Elohim has a plural form,

yet in Genesis 1:1 it is used with a singular verb.

That means Scripture is not teaching many gods.

The Bible is clear that God is one.

But the name does hint that God is not small,

flat,

or simple in the way humans are.

From the beginning,

God is one,

yet there is a fullness within Him that Scripture will reveal more clearly.`,
      reference: 'Genesis 1:1',
    },
    studyInsight: {
      title: 'The first picture of God',
      variant: 'scripture_connection',
      body: `Genesis 1 gives us the first picture of God in Scripture.

He is not silent.

He speaks.

He is not powerless.

He creates.

He is not careless.

He forms an ordered world.

He is not selfish.

He gives life.

He is not distant.

He makes humanity in His image.

This matters because many people imagine God as far away,

cold,

or impossible to know.

But Genesis starts differently.

The first chapter of the Bible shows a God who creates with intention

and moves toward relationship.

When God says,

“Let Us make man in Our image,”

we are being invited to see that human beings were made for more than survival.

We were made to reflect something about God.

We were made for relationship.

We were made to know Him.`,
    },
    studyInsightBlocks: [
      {
        type: 'studyVisual',
        title: 'Elohim',
        subtitle: 'The first name for God in Scripture',
        description:
          'The Bible begins with Elohim, the Creator who speaks, gives life, and makes humanity in His image.',
        accent: 'sky',
        payload: {
          variant: 'sequence',
          steps: [
            {
              label: 'אֱלֹהִים',
              subtitle: 'God, mighty Creator',
              reference: 'Genesis 1:1',
            },
          ],
        },
      },
    ],
    reflectPrompt: `When you read Genesis 1:1,

do you usually slow down and notice how God introduces Himself?

What does it mean to you that God creates by speaking?

How does being made in God’s image shape the way you see yourself?

What changes when you see God as personal and relational,

not distant or cold?`,
    lifeApplication: `This week,

read Genesis 1 slowly.

Do not rush to explain everything.

Notice what God does.

He speaks.

He separates.

He forms.

He fills.

He blesses.

He gives life.

Then ask:

What does this reveal about the God who wants to be known?`,
    prayer: `Lord,

You are the Creator.

You spoke,

and life began.

Help me see You clearly in the opening pages of Scripture.

Teach me to understand Your name with reverence.

Remind me that I am made in Your image,

created for relationship,

and invited to know You.

Amen.`,
    lessonQuiz: {
      eyebrow: 'CHECK YOUR UNDERSTANDING',
      title: 'Quick Review',
      description: 'Check your understanding before moving on.',
      settings: {
        quizRequired: false,
        passingScore: 70,
        allowRetake: true,
      },
      questions: [
        {
          id: 'tgwk-l2-q1',
          prompt: 'What is the first name used for God in Genesis 1:1?',
          options: ['Elohim', 'Jacob', 'Israel', 'Caesar'],
          correctIndex: 0,
        },
        {
          id: 'tgwk-l2-q2',
          prompt: 'What does Genesis 1:1 reveal God as?',
          options: ['Creator', 'A created being', 'A confused ruler', 'A distant myth'],
          correctIndex: 0,
        },
        {
          id: 'tgwk-l2-q3',
          prompt: 'What does Genesis 1:26 say humanity is made in?',
          options: ['The image of angels', 'The image of God', 'The image of animals', 'The image of kings'],
          correctIndex: 1,
        },
        {
          id: 'tgwk-l2-q4',
          kind: 'multi',
          prompt: 'Which truths are shown in Genesis 1?',
          options: ['God speaks', 'God creates', 'God gives life', 'God is powerless'],
          correctIndices: [0, 1, 2],
        },
        {
          id: 'tgwk-l2-q5',
          kind: 'reflection',
          prompt: 'What does it mean to you that the Creator wants to be known?',
          explanation:
            'This reflection helps you connect Genesis 1 with God’s desire for relationship.',
        },
      ],
    },
  },

  'love-at-the-heart-of-god': {
    openingThought: `Some people think of God mainly as power.

A ruler.

A judge.

A force above everything.

Scripture does reveal God as powerful.

But when the Bible tells us the deepest truth about God’s character,

it says something personal.

God is love.

Not God sometimes loves.

Not God acts loving when people behave.

Not God becomes loving after we improve.

God is love.

That means love is not a mood God enters.

It is not a temporary feeling.

It is not a reaction to human goodness.

Love belongs to His very nature.

Before we can understand His commands,

His warnings,

His promises,

or His judgments,

we need to begin here.

God is love.`,
    scriptureRef: '1 John 4:7 to 8',
    scriptureQuote: `Beloved,

let us love one another,

for love is of God;

and everyone who loves is born of God

and knows God.

He who does not love does not know God,

for God is love.`,
    scriptureSecondaryRef: '1 John 4:16',
    scriptureSecondaryQuote: `And we have known and believed the love that God has for us.

God is love,

and he who abides in love abides in God,

and God in him.`,
    scriptureSupplementBlocks: [
      {
        type: 'scriptureChain',
        title: 'God Is Love',
        references: [
          { reference: '1 John 4:7 to 8' },
          { reference: '1 John 4:16' },
          { reference: '1 Corinthians 13:4 to 5' },
          { reference: 'Jeremiah 31:3' },
        ],
      },
      {
        type: 'paragraph',
        text: `God’s love is not temporary emotion. It is the self-giving center of His character.`,
      },
      {
        type: 'scripture',
        reference: '1 Corinthians 13:4 to 5',
        quote: `Love suffers long and is kind;

love does not envy;

love does not parade itself,

is not puffed up;

does not behave rudely,

does not seek its own.`,
      },
      {
        type: 'scripture',
        reference: 'Jeremiah 31:3',
        quote: `Yes,

I have loved you with an everlasting love;

therefore with lovingkindness I have drawn you.`,
      },
      {
        type: 'paragraph',
        text: `The Bible does not present love as optional to God.

Love is central to who He is.`,
      },
    ],
    teachingPoints: [
      `God is love. This is one of Scripture’s clearest statements about God’s character.`,
      `Love begins with God. We do not invent love. We receive it from the One who is love.`,
      `God’s love is self-giving. Biblical love does not seek its own. It moves toward the good of another.`,
      `God’s love is everlasting. His love is not unstable or temporary.`,
      `Knowing God changes how we love. John connects knowing God with learning to love others.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudy: {
      surface: 'love',
      lemma: 'ἀγάπη',
      transliteration: 'agape',
      meaning: 'self-giving love, committed love, love that seeks another’s good',
      strongs: 'G26',
      note: `The Greek word often used for love in the New Testament is agape.

This kind of love is not shallow emotion.

It is not selfish desire.

It is not love that exists only when it is convenient.

Agape is self-giving.

It seeks the good of another.

It gives without needing to control.

When Scripture says God is love,

it is pointing to a love that is generous,

faithful,

patient,

and deeply other-centered.`,
      reference: '1 John 4:8',
    },
    studyInsight: {
      title: 'Love at the center',
      variant: 'scripture_connection',
      body: `When Scripture says God is love,

it changes how we read everything else.

God’s power is loving power.

God’s justice is loving justice.

God’s correction is loving correction.

God’s law protects love.

God’s warnings come from love.

God’s promises reveal love.

God’s judgment removes what destroys love.

This does not make God soft or careless.

Love is not weakness.

Love tells the truth.

Love protects.

Love corrects.

Love sacrifices.

Love refuses to call evil good.

The cross shows this most clearly.

God does not ignore sin.

He enters our brokenness to save us from it.

If we want to understand God,

we cannot separate His truth from His love.

And we cannot separate His love from His truth.`,
    },
    studyInsightBlocks: [
      {
        type: 'studyVisual',
        title: 'What Biblical Love Looks Like',
        subtitle: 'Four glimpses from Scripture',
        description: 'Patient, kind, other-centered, enduring: love matches God’s character.',
        accent: 'sage',
        payload: {
          variant: 'sequence',
          steps: [
            {
              label: 'Patient',
              subtitle: '1 Corinthians 13:4',
              reference: 'God’s love is not rushed or unstable.',
            },
            {
              label: 'Kind',
              subtitle: '1 Corinthians 13:4',
              reference: 'God’s love moves toward the good of another.',
            },
            {
              label: 'Not self-seeking',
              subtitle: '1 Corinthians 13:5',
              reference: 'God’s love is other-centered.',
            },
            {
              label: 'Everlasting',
              subtitle: 'Jeremiah 31:3',
              reference: 'God’s love is faithful and enduring.',
            },
          ],
        },
      },
    ],
    reflectPrompt: `When you hear the phrase “God is love,”

what comes to mind first?

Do you tend to see God as loving,

or mainly as distant and severe?

How does biblical love differ from selfish or sentimental love?

What part of God’s character becomes clearer when you understand that love is central to who He is?`,
    lifeApplication: `This week,

read 1 John 4 slowly.

Every time you see the word love,

pause.

Ask:

What does this show me about God?

Then ask:

What does this show me about how I should treat others?

Do not rush past the simple truth.

Let it settle.

God is love.`,
    prayer: `Lord,

Help me believe what Your Word says about You.

You are love.

Not distant.

Not careless.

Not selfish.

Teach me to understand Your character more clearly.

Let Your love correct my false pictures of You.

And let Your love shape the way I treat others.

Amen.`,
    lessonQuiz: {
      eyebrow: 'CHECK YOUR UNDERSTANDING',
      title: 'Quick Review',
      description: 'Check your understanding before moving on.',
      settings: {
        quizRequired: false,
        passingScore: 70,
        allowRetake: true,
      },
      questions: [
        {
          id: 'tgwk-l3-q1',
          prompt: 'According to 1 John 4:8, what is God?',
          options: ['Love', 'Confusion', 'Fear', 'Distance'],
          correctIndex: 0,
        },
        {
          id: 'tgwk-l3-q2',
          prompt: 'What does agape describe?',
          options: ['Self-giving love', 'Selfish desire', 'Temporary emotion only', 'Religious noise'],
          correctIndex: 0,
        },
        {
          id: 'tgwk-l3-q3',
          prompt: 'According to Jeremiah 31:3, God’s love is described as what?',
          options: ['Temporary', 'Everlasting', 'Conditional only', 'Unknown'],
          correctIndex: 1,
        },
        {
          id: 'tgwk-l3-q4',
          kind: 'multi',
          prompt: 'Which statements fit this lesson?',
          options: [
            'Love is central to God’s character',
            'God’s truth and love belong together',
            'God’s love is self-giving',
            'God’s love means He ignores evil',
          ],
          correctIndices: [0, 1, 2],
        },
        {
          id: 'tgwk-l3-q5',
          kind: 'reflection',
          prompt: 'What false picture of God does the truth “God is love” challenge in you?',
          explanation:
            'This reflection helps you let Scripture correct shallow or distorted views of God.',
        },
      ],
    },
  },

  'one-god-more-than-alone': {
    openingThought: `The Bible is clear.

There is one God.

Not many gods.

Not competing divine powers.

Not a universe ruled by spiritual confusion.

One God.

But as Scripture unfolds,

we also see something deeper.

The Father speaks.

The Son reveals.

The Spirit moves.

They are not three separate gods.

And they are not merely different masks worn by one person.

The Bible presents one God,

yet reveals Father,

Son,

and Holy Spirit in loving unity.

That may stretch our minds.

It should.

God is not small enough to fit inside our categories.

But He has revealed enough for us to know this:

He is one,

and He is relational.`,
    scriptureRef: 'Deuteronomy 6:4',
    scriptureQuote: `"Hear,

O Israel:

The LORD our God,

the LORD is one!"`,
    scriptureSecondaryRef: 'Genesis 1:26',
    scriptureSecondaryQuote: `Then God said,

“Let Us make man in Our image,

according to Our likeness.”`,
    scriptureSupplementBlocks: [
      {
        type: 'scriptureChain',
        title: 'One God, Revealed in Love',
        references: [
          { reference: 'Deuteronomy 6:4' },
          { reference: 'Genesis 1:26' },
          { reference: 'Matthew 3:16 to 17' },
          { reference: 'Matthew 28:19' },
        ],
      },
      {
        type: 'paragraph',
        text: `Scripture teaches one God while revealing Father, Son, and Holy Spirit in perfect unity.`,
      },
      {
        type: 'scripture',
        reference: 'Matthew 3:16 to 17',
        quote: `When He had been baptized,

Jesus came up immediately from the water;

and behold,

the heavens were opened to Him,

and He saw the Spirit of God descending like a dove

and alighting upon Him.

And suddenly a voice came from heaven,

saying,

“This is My beloved Son,

in whom I am well pleased.”`,
      },
      {
        type: 'scripture',
        reference: 'Matthew 28:19',
        quote: `Go therefore and make disciples of all the nations,

baptizing them in the name of the Father

and of the Son

and of the Holy Spirit.`,
      },
      {
        type: 'paragraph',
        text: `Scripture holds two truths together.

God is one.

And God reveals Himself as Father,

Son,

and Holy Spirit.`,
      },
    ],
    teachingPoints: [
      `The Bible teaches one God. Scripture rejects the idea of many competing gods.`,
      `God speaks with relational language. Genesis 1 says, “Let Us make man in Our image.”`,
      `Jesus reveals the Father. The Son does not compete with the Father. He makes the Father known.`,
      `The Spirit is active in God’s work. At Jesus’ baptism, the Spirit descends while the Father speaks and the Son is present.`,
      `Father, Son, and Spirit are named together. Matthew 28 places all three together in the baptismal command.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudy: {
      surface: 'one',
      lemma: 'אֶחָד',
      transliteration: 'echad',
      meaning: 'one, united, oneness',
      strongs: 'H259',
      note: `Deuteronomy says,

“The LORD our God,

the LORD is one.”

The Hebrew word echad can describe oneness.

This does not mean God is divided.

It means God is truly one.

But Scripture also shows that God’s oneness is not lonely or empty.

The Bible reveals Father,

Son,

and Holy Spirit working in perfect unity.

This matters because God’s love is not something He invented later.

God has always been relational.`,
      reference: 'Deuteronomy 6:4',
    },
    studyInsight: {
      title: 'Receiving what God has revealed',
      variant: 'scripture_connection',
      body: `Some truths are simple enough to say,

but too deep to fully exhaust.

God is one.

That is simple.

Father,

Son,

and Holy Spirit are revealed in Scripture.

That is also clear.

But how God’s being works is greater than human explanation.

The goal is not to solve God like a puzzle.

The goal is to receive what He has revealed.

This truth matters because it protects the meaning of love.

If God were eternally isolated,

then love would begin only after creation.

But Scripture says God is love.

That means love did not begin when humans appeared.

Love belongs to God’s eternal life.

Before creation,

there was communion.

Before humanity,

there was self-giving love.

Before we ever loved God,

God already was love.`,
    },
    studyInsightBlocks: [
      {
        type: 'studyVisual',
        title: 'One God, Revealed in Love',
        subtitle: 'One God',
        description:
          'Scripture reveals one God and names Father, Son, and Holy Spirit together in perfect unity.',
        accent: 'stone',
        payload: {
          variant: 'sequence',
          steps: [{ label: 'Father' }, { label: 'Son' }, { label: 'Holy Spirit' }],
        },
      },
    ],
    reflectPrompt: `Do you tend to think of God as distant and solitary,

or relational and loving?

Why does it matter that love did not begin with creation?

How does Jesus’ baptism help you see Father,

Son,

and Spirit together?

What part of this truth feels beautiful,

even if it stretches your understanding?`,
    lifeApplication: `This week,

do not try to master everything about God.

Instead,

worship Him for what He has revealed.

God is one.

God is love.

God is relational.

God has made Himself known through Father,

Son,

and Holy Spirit.

Let that truth lead you to trust,

not confusion.`,
    prayer: `Lord,

You are greater than my understanding.

Thank You for revealing Yourself in Scripture.

Teach me to hold Your truth with humility.

Help me see Your unity,

Your love,

and Your nearness.

Draw me into deeper trust

through the Father,

the Son,

and the Holy Spirit.

Amen.`,
    lessonQuiz: {
      eyebrow: 'CHECK YOUR UNDERSTANDING',
      title: 'Quick Review',
      description: 'Check your understanding before moving on.',
      settings: {
        quizRequired: false,
        passingScore: 70,
        allowRetake: true,
      },
      questions: [
        {
          id: 'tgwk-l4-q1',
          prompt: 'What does Deuteronomy 6:4 teach?',
          options: [
            'There are many competing gods',
            'The LORD is one',
            'God cannot be known at all',
            'Love is not part of God’s character',
          ],
          correctIndex: 1,
        },
        {
          id: 'tgwk-l4-q2',
          prompt: 'Which three are named together in Matthew 28:19?',
          options: [
            'Moses, Elijah, and David',
            'Father, Son, and Holy Spirit',
            'Abraham, Isaac, and Jacob',
            'Peter, James, and John',
          ],
          correctIndex: 1,
        },
        {
          id: 'tgwk-l4-q3',
          prompt: 'What does the Hebrew word echad mean?',
          options: ['One or oneness', 'Fear', 'Stranger', 'Hidden place'],
          correctIndex: 0,
        },
        {
          id: 'tgwk-l4-q4',
          kind: 'multi',
          prompt: 'Which statements fit this lesson?',
          options: [
            'Scripture teaches one God',
            'Scripture reveals Father, Son, and Holy Spirit',
            'God’s love did not begin with creation',
            'The Bible teaches three competing gods',
          ],
          correctIndices: [0, 1, 2],
        },
        {
          id: 'tgwk-l4-q5',
          kind: 'reflection',
          prompt: 'How does seeing God as relational help you understand the phrase “God is love”?',
          explanation:
            'This reflection helps you connect God’s oneness, God’s relational nature, and God’s love.',
        },
      ],
    },
  },

  'love-has-always-existed': {
    openingThought: `Love did not begin with us.

That is easy to forget.

We often think of love as something humans experience,

something families share,

something friends offer,

something we hope to receive.

But Scripture takes us deeper.

Before there were people to love,

God was love.

Before earth existed,

God was love.

Before angels sang,

God was love.

Before anything was created,

love was already real.

That means God did not create because He was lonely.

He did not create because He lacked something.

He created because love gives.

Creation is not God trying to fill an emptiness.

It is God sharing life.`,
    scriptureRef: 'John 17:24',
    scriptureQuote: `"Father,

I desire that they also whom You gave Me

may be with Me where I am,

that they may behold My glory which You have given Me;

for You loved Me before the foundation of the world."`,
    scriptureSecondaryRef: '1 John 4:8',
    scriptureSecondaryQuote: `He who does not love does not know God,

for God is love.`,
    scriptureSupplementBlocks: [
      {
        type: 'scriptureChain',
        title: 'Love Before Creation',
        references: [
          { reference: 'John 17:24' },
          { reference: '1 John 4:8' },
          { reference: 'John 1:1 to 3' },
          { reference: 'Ephesians 1:4 to 5' },
        ],
      },
      {
        type: 'paragraph',
        text: `God’s love did not begin with creation or human response. Love belongs to His eternal character.`,
      },
      {
        type: 'scripture',
        reference: 'John 1:1 to 3',
        quote: `In the beginning was the Word,

and the Word was with God,

and the Word was God.

He was in the beginning with God.

All things were made through Him,

and without Him nothing was made that was made.`,
      },
      {
        type: 'scripture',
        reference: 'Ephesians 1:4 to 5',
        quote: `Just as He chose us in Him

before the foundation of the world,

that we should be holy and without blame before Him in love,

having predestined us to adoption as sons by Jesus Christ to Himself.`,
      },
      {
        type: 'paragraph',
        text: `Before the foundation of the world,

there was already love.`,
      },
    ],
    teachingPoints: [
      `God’s love is eternal. Jesus said the Father loved Him before the foundation of the world.`,
      `Love did not begin with creation. God did not need to create in order to become loving.`,
      `Creation flows from love. God gives life because His nature is generous and self-giving.`,
      `Salvation was not an afterthought. Scripture speaks of God’s purpose in Christ before the foundation of the world.`,
      `God invites us into a love that existed before us. We do not create God’s love. We receive it.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudy: {
      surface: 'before the foundation of the world',
      lemma: 'πρὸ καταβολῆς κόσμου',
      transliteration: 'pro kataboles kosmou',
      meaning: 'before the foundation of the world',
      strongs: 'G4253 G2602 G2889',
      note: `This phrase points to something before creation,

before human history,

before the world as we know it.

Jesus says the Father loved Him before the foundation of the world.

That means love is not a temporary reaction inside God.

Love belongs to God’s eternal life.

Before we existed,

love was already present.

Before we responded,

God’s heart was already giving.`,
      reference: 'John 17:24 · Ephesians 1:4',
    },
    studyInsight: {
      title: 'Overflow, not emptiness',
      variant: 'scripture_connection',
      body: `This truth changes how we understand creation.

God did not make humanity because He was incomplete.

He did not need worship to become secure.

He did not need angels to become happy.

God was already love.

Already full.

Already good.

Already relational.

Creation is the overflow of divine generosity.

That also changes how we understand salvation.

When sin entered the world,

God did not suddenly discover love.

He revealed the love that was already in His heart.

The cross did not make God loving.

The cross showed how far God’s love was willing to go.

Before creation,

love was real.

At creation,

love gave life.

After sin,

love pursued.

At the cross,

love sacrificed.

At the end,

love restores.`,
    },
    studyInsightBlocks: [
      {
        type: 'studyVisual',
        title: 'Love Through the Story',
        description:
          'God’s love is not a late response to human need. It is the eternal center of His character.',
        accent: 'amber',
        payload: {
          variant: 'sequence',
          steps: [
            { label: 'Before creation', subtitle: 'Love already existed' },
            { label: 'Creation', subtitle: 'Love gave life' },
            { label: 'The fall', subtitle: 'Love pursued' },
            { label: 'The cross', subtitle: 'Love sacrificed' },
            { label: 'Restoration', subtitle: 'Love makes all things new' },
          ],
        },
      },
    ],
    reflectPrompt: `Have you ever thought God created because He needed something?

What changes when you see creation as the overflow of love?

How does John 17:24 deepen your understanding of “God is love”?

What does it mean that God’s love existed before you ever responded to Him?`,
    lifeApplication: `This week,

when you feel unworthy of God’s love,

remember this:

His love did not begin with your performance.

It did not begin with your obedience.

It did not begin when you noticed Him.

God’s love existed before the foundation of the world.

Receive it with humility.

Respond to it with trust.`,
    prayer: `Lord,

Thank You that Your love did not begin with me.

Thank You that before creation,

You were already love.

Teach me to receive Your love without trying to earn it.

Help me see creation,

salvation,

and restoration as the overflow of Your heart.

Draw me into the love You have always had.

Amen.`,
    lessonQuiz: {
      eyebrow: 'CHECK YOUR UNDERSTANDING',
      title: 'Quick Review',
      description: 'Check your understanding before moving on.',
      settings: {
        quizRequired: false,
        passingScore: 70,
        allowRetake: true,
      },
      questions: [
        {
          id: 'tgwk-l5-q1',
          prompt: 'According to John 17:24, when did the Father love the Son?',
          options: [
            'Only after creation',
            'Before the foundation of the world',
            'Only after the cross',
            'Only after humanity sinned',
          ],
          correctIndex: 1,
        },
        {
          id: 'tgwk-l5-q2',
          prompt: 'Why did God create?',
          options: [
            'Because He was lonely and incomplete',
            'Because love gives and shares life',
            'Because He needed worship to feel secure',
            'Because He lacked something',
          ],
          correctIndex: 1,
        },
        {
          id: 'tgwk-l5-q3',
          prompt: 'What does the phrase “before the foundation of the world” point to?',
          options: ['Before creation', 'After the flood', 'During the Exodus', 'After the second coming'],
          correctIndex: 0,
        },
        {
          id: 'tgwk-l5-q4',
          kind: 'multi',
          prompt: 'Which statements fit this lesson?',
          options: [
            'God’s love is eternal',
            'Love did not begin with creation',
            'Creation flows from God’s generosity',
            'God became loving only after humans sinned',
          ],
          correctIndices: [0, 1, 2],
        },
        {
          id: 'tgwk-l5-q5',
          kind: 'reflection',
          prompt: 'How does eternal love change the way you see your relationship with God?',
          explanation:
            'This reflection helps you receive God’s love as something rooted in His character, not in your performance.',
        },
      ],
    },
  },

  'jesus-makes-god-visible': {
    openingThought: `Many people wonder what God is really like.

Not what religion says.

Not what pain has made them assume.

Not what fear has taught them to imagine.

But what God is actually like.

Is He distant?

Is He harsh?

Is He waiting to condemn?

Is He hard to approach?

Jesus answers those questions.

He does not merely talk about God.

He reveals God.

When Jesus touches the untouchable,

forgives the guilty,

weeps with the grieving,

welcomes the rejected,

confronts hypocrisy,

and gives His life for sinners,

He is showing us the heart of the Father.

If you want to know what God is like,

look at Jesus.`,
    scriptureRef: 'John 14:8 to 9',
    scriptureQuote: `Philip said to Him,

“Lord,

show us the Father,

and it is sufficient for us.”

Jesus said to him,

“Have I been with you so long,

and yet you have not known Me,

Philip?

He who has seen Me has seen the Father.”`,
    scriptureSecondaryRef: 'John 1:18',
    scriptureSecondaryQuote: `No one has seen God at any time.

The only begotten Son,

who is in the bosom of the Father,

He has declared Him.`,
    scriptureSupplementBlocks: [
      {
        type: 'scriptureChain',
        title: 'Jesus Makes God Visible',
        references: [
          { reference: 'John 14:8 to 9' },
          { reference: 'John 1:18' },
          { reference: 'Colossians 1:15' },
          { reference: 'Hebrews 1:3' },
        ],
      },
      {
        type: 'paragraph',
        text: `Jesus is the clearest revelation of God’s heart, character, and love.`,
      },
      {
        type: 'scripture',
        reference: 'Colossians 1:15',
        quote: `He is the image of the invisible God,

the firstborn over all creation.`,
      },
      {
        type: 'scripture',
        reference: 'Hebrews 1:3',
        quote: `Who being the brightness of His glory

and the express image of His person,

and upholding all things by the word of His power,

when He had by Himself purged our sins,

sat down at the right hand of the Majesty on high.`,
      },
      {
        type: 'paragraph',
        text: `Jesus makes the invisible God visible.`,
      },
    ],
    teachingPoints: [
      `Jesus reveals the Father. He told Philip, “He who has seen Me has seen the Father.”`,
      `Jesus is the image of the invisible God. God’s character becomes visible in the life of Christ.`,
      `Jesus corrects false pictures of God. Any view of God that contradicts Jesus must be reexamined.`,
      `Jesus shows truth and mercy together. He never separates compassion from holiness.`,
      `The cross reveals God’s heart most clearly. God’s love is not only spoken. It is demonstrated through sacrifice.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudy: {
      surface: 'Father',
      lemma: 'εἰκών',
      transliteration: 'eikon',
      meaning: 'image, visible representation, likeness',
      strongs: 'G1504',
      note: `Colossians calls Jesus the image of the invisible God.

The word eikon points to a visible representation.

Jesus does not leave God’s character vague.

He makes the Father known in human history.

When we see Jesus healing,

teaching,

forgiving,

correcting,

suffering,

and giving Himself,

we are seeing what God is like.

This matters because Jesus is not a softer version of God.

He is the clearest picture of God.`,
      reference: 'Colossians 1:15',
    },
    studyInsight: {
      title: 'Removing the fog',
      variant: 'christ_connection',
      body: `One of the enemy’s oldest methods is to misrepresent God.

If people believe God is cold,

they will avoid Him.

If they believe God is cruel,

they will fear Him but not love Him.

If they believe God is careless,

they will stop trusting Him.

Jesus came to remove the fog.

He shows that God is holy without being heartless.

Truthful without being cruel.

Powerful without being selfish.

Near without being common.

Merciful without ignoring sin.

At the cross,

God’s character is revealed with stunning clarity.

Sin is serious.

Love is deeper.

Justice is real.

Mercy is costly.

Jesus does not hide the Father.

He reveals Him.`,
    },
    studyInsightBlocks: [
      {
        type: 'studyVisual',
        title: 'What Jesus Shows Us',
        subtitle: 'Jesus reveals the Father',
        description: 'The life of Jesus is the clearest window into the Father’s heart.',
        accent: 'sky',
        payload: {
          variant: 'sequence',
          steps: [
            {
              label: 'Compassion',
              subtitle: 'Matthew 9:36',
              reference: 'God sees human need with mercy.',
            },
            {
              label: 'Truth',
              subtitle: 'John 18:37',
              reference: 'God does not lie or flatter.',
            },
            {
              label: 'Forgiveness',
              subtitle: 'Luke 23:34',
              reference: 'God’s mercy reaches sinners.',
            },
            {
              label: 'Sacrifice',
              subtitle: 'John 3:16',
              reference: 'God’s love gives.',
            },
          ],
        },
      },
    ],
    reflectPrompt: `What picture of God have you carried in your mind?

Does that picture look like Jesus?

Which part of Jesus’ life helps you trust the Father more?

Where do you need Christ to correct a false view of God?`,
    lifeApplication: `This week,

choose one story from the life of Jesus.

Read it slowly.

Watch what He does.

Notice how He treats people.

Notice what He corrects.

Notice what He reveals.

Then ask:

What does this show me about the Father?`,
    prayer: `Lord,

Show me the Father through Jesus.

Correct every false picture I have believed about You.

Help me see Your compassion,

truth,

holiness,

mercy,

and love.

Teach me to trust Your heart

as I look at Christ.

Amen.`,
    lessonQuiz: {
      eyebrow: 'CHECK YOUR UNDERSTANDING',
      title: 'Quick Review',
      description: 'Check your understanding before moving on.',
      settings: {
        quizRequired: false,
        passingScore: 70,
        allowRetake: true,
      },
      questions: [
        {
          id: 'tgwk-l6-q1',
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
          id: 'tgwk-l6-q2',
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
          id: 'tgwk-l6-q3',
          prompt: 'What does the Greek word eikon mean?',
          options: [
            'Image or visible representation',
            'Fear',
            'Hidden command',
            'Empty sound',
          ],
          correctIndex: 0,
        },
        {
          id: 'tgwk-l6-q4',
          kind: 'multi',
          prompt: 'Which statements fit this lesson?',
          options: [
            'Jesus reveals the Father',
            'Jesus corrects false pictures of God',
            'The cross reveals God’s love and justice',
            'Jesus is loving but the Father is not',
          ],
          correctIndices: [0, 1, 2],
        },
        {
          id: 'tgwk-l6-q5',
          kind: 'reflection',
          prompt: 'What story from the life of Jesus helps you see God more clearly?',
          explanation:
            'This reflection helps you connect the character of Jesus with the character of the Father.',
        },
      ],
    },
  },

  'the-invitation-to-come-near': {
    openingThought: `God does not reveal Himself just to satisfy curiosity.

He reveals Himself because He wants relationship.

That has been the thread through this whole study.

Names matter because God wants to be recognized.

Elohim creates because life flows from Him.

God is love because love is central to His nature.

Father,

Son,

and Spirit reveal that God is not lonely or cold.

Love has always existed.

Jesus makes the invisible God visible.

Now the question becomes personal.

If God wants to be known,

will we come near?

Not as spectators.

Not only as learners.

Not only as people collecting Bible facts.

But as people invited into trust,

worship,

and fellowship with the living God.`,
    scriptureRef: 'James 4:8',
    scriptureQuote: `Draw near to God

and He will draw near to you.`,
    scriptureSecondaryRef: 'Hebrews 4:16',
    scriptureSecondaryQuote: `Let us therefore come boldly to the throne of grace,

that we may obtain mercy

and find grace to help in time of need.`,
    scriptureSupplementBlocks: [
      {
        type: 'scriptureChain',
        title: 'The Invitation to Come Near',
        references: [
          { reference: 'James 4:8' },
          { reference: 'Hebrews 4:16' },
          { reference: 'John 17:3' },
          { reference: '1 John 4:16' },
          { reference: 'Revelation 21:3' },
        ],
      },
      {
        type: 'paragraph',
        text: `God reveals Himself because He wants restored relationship. The Bible’s story moves toward nearness with Him.`,
      },
      {
        type: 'scripture',
        reference: 'John 17:3',
        quote: `And this is eternal life,

that they may know You,

the only true God,

and Jesus Christ whom You have sent.`,
      },
      {
        type: 'scripture',
        reference: '1 John 4:16',
        quote: `And we have known and believed the love that God has for us.

God is love,

and he who abides in love abides in God,

and God in him.`,
      },
      {
        type: 'scripture',
        reference: 'Revelation 21:3',
        quote: `Behold,

the tabernacle of God is with men,

and He will dwell with them,

and they shall be His people.

God Himself will be with them

and be their God.`,
      },
      {
        type: 'paragraph',
        text: `God with His people.

His people with Him.`,
      },
    ],
    teachingPoints: [
      `God invites us to draw near. James says when we draw near to God, He draws near to us.`,
      `Nearness is possible because of grace. Hebrews invites us to come boldly to the throne of grace, not fearfully to a throne of rejection.`,
      `Eternal life is relational. Jesus defines eternal life as knowing the Father and the Son.`,
      `Abiding in love means abiding in God. God’s love is not just something to study. It is something to receive and live in.`,
      `God’s final goal is restored presence. Revelation shows God dwelling with His people forever.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudy: {
      surface: 'near',
      lemma: 'μένω',
      transliteration: 'meno',
      meaning: 'to abide, remain, stay, dwell',
      strongs: 'G3306',
      note: `John says the person who abides in love abides in God,

and God abides in him.

The word meno means to remain,

stay,

or dwell.

This is more than a quick religious moment.

It points to ongoing relationship.

God does not invite us to visit His love once,

then leave unchanged.

He invites us to remain in Him.

To live from His love.

To let His love become the place where our hearts learn to stay.`,
      reference: '1 John 4:16',
    },
    studyInsight: {
      title: 'Nearness was always the goal',
      variant: 'scripture_connection',
      body: `This study began with the idea that God wants to be known.

That truth changes how we see the whole Bible.

Scripture is not God hiding.

Creation is not God staying distant.

Prophecy is not God showing off.

Doctrine is not God giving cold facts.

Jesus is not God sending someone unlike Himself.

All of it is God moving toward us.

God reveals.

God speaks.

God creates.

God saves.

God invites.

The Bible’s final picture is not human beings escaping earth to find a distant God.

It is God dwelling with His people.

That means nearness was always the goal.

Sin brought distance.

Christ restores relationship.

The Spirit pours God’s love into the heart.

And one day,

God’s people will live fully in His presence.`,
    },
    studyInsightBlocks: [
      {
        type: 'studyVisual',
        title: 'The Story Moves Toward Nearness',
        description: 'The Bible is the story of God restoring nearness through love.',
        accent: 'sage',
        payload: {
          variant: 'sequence',
          steps: [
            {
              label: 'Creation',
              reference: 'God gives life and makes humanity in His image.',
            },
            {
              label: 'Revelation',
              reference: 'God speaks so He can be known.',
            },
            {
              label: 'Jesus',
              reference: 'God makes His heart visible.',
            },
            {
              label: 'Grace',
              reference: 'God invites sinners to come boldly.',
            },
            {
              label: 'Restoration',
              reference: 'God dwells with His people forever.',
            },
          ],
        },
      },
    ],
    reflectPrompt: `What has this study helped you see about God?

Do you tend to keep God at a distance?

What would it look like to draw near to Him this week?

Is there a false picture of God you need to let go of?

How does Jesus make it easier to trust God’s heart?`,
    lifeApplication: `This week,

practice nearness.

Choose one simple rhythm:

Read one passage slowly.

Pray honestly.

Sit quietly for a few minutes.

Write one sentence about what God is showing you.

Do not make it complicated.

Come near.

Stay open.

Respond with trust.`,
    prayer: `Lord,

Thank You for wanting to be known.

Thank You for revealing Yourself through Scripture,

creation,

Jesus,

and love.

I do not want to keep You at a distance.

Teach me to draw near.

Help me abide in Your love.

Correct false pictures of You.

Lead me into deeper trust,

worship,

and friendship with You.

Amen.`,
    completionSummary:
      'You walked Scripture’s invitation from names and creation to love, unity, Jesus, and drawing near to the living God.',
    seriesCompleteScreen: {
      title: 'Study complete',
      message: 'You have completed The God Who Wants to Be Known.',
      primaryCta: { label: 'Review study', href: '/study-library/the-god-who-wants-to-be-known' },
      secondaryCta: { label: 'Explore foundational studies', href: '/study-library?path=foundations' },
    },
    lessonQuiz: {
      eyebrow: 'CHECK YOUR UNDERSTANDING',
      title: 'Quick Review',
      description: 'Check your understanding before finishing the study.',
      settings: {
        quizRequired: false,
        passingScore: 70,
        allowRetake: true,
      },
      questions: [
        {
          id: 'tgwk-l7-q1',
          prompt: 'According to James 4:8, what happens when we draw near to God?',
          options: [
            'He draws near to us',
            'He hides from us',
            'He rejects us immediately',
            'He stops speaking',
          ],
          correctIndex: 0,
        },
        {
          id: 'tgwk-l7-q2',
          prompt: 'According to Hebrews 4:16, what throne are we invited to approach?',
          options: [
            'The throne of fear',
            'The throne of grace',
            'The throne of confusion',
            'The throne of human power',
          ],
          correctIndex: 1,
        },
        {
          id: 'tgwk-l7-q3',
          prompt: 'What does the Greek word meno mean?',
          options: [
            'To run away',
            'To abide, remain, or dwell',
            'To argue',
            'To hide',
          ],
          correctIndex: 1,
        },
        {
          id: 'tgwk-l7-q4',
          kind: 'multi',
          prompt: 'Which statements fit this lesson?',
          options: [
            'God invites us to draw near',
            'Eternal life is knowing God',
            'God’s final goal is restored presence with His people',
            'God only wants distant observers',
          ],
          correctIndices: [0, 1, 2],
        },
        {
          id: 'tgwk-l7-q5',
          kind: 'reflection',
          prompt: 'What is one practical way you can draw near to God this week?',
          explanation:
            'This reflection helps you turn the whole study into a personal response.',
        },
      ],
    },
  },
}
