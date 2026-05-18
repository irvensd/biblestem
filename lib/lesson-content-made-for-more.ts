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

const twoStoriesVisual: StudyVisualLessonBlock = {
  type: 'studyVisual',
  title: 'Two Stories of Humanity',
  accent: 'stone',
  payload: {
    variant: 'comparison',
    leftTitle: 'Mere Survival',
    rightTitle: 'Made by God',
    leftItems: ['accident', 'appetite', 'competition', 'death'],
    rightItems: ['dignity', 'purpose', 'relationship', 'hope'],
  },
  footnote:
    'Mere survival: This story leaves human life without lasting meaning. Made by God: Scripture says humanity begins with the Creator.',
}

const imageOfGodVisual: StudyVisualLessonBlock = {
  type: 'studyVisual',
  title: 'Image of God',
  accent: 'sage',
  payload: {
    variant: 'sequence',
    steps: [
      { label: 'Dignity', subtitle: 'Every person has value because God made them.' },
      { label: 'Relationship', subtitle: 'We were made to know God and love others.' },
      { label: 'Responsibility', subtitle: 'We are called to represent God\'s character.' },
      { label: 'Purpose', subtitle: 'Human life is meant to reflect God in the world.' },
    ],
  },
  footnote:
    'The image of God means human life has worth, calling, and responsibility.',
}

const choiceAndDirectionVisual: StudyVisualLessonBlock = {
  type: 'studyVisual',
  title: 'Choice and Direction',
  accent: 'sky',
  payload: {
    variant: 'comparison',
    leftTitle: 'Life',
    rightTitle: 'Death',
    leftItems: ['trust', 'love', 'obedience', 'relationship'],
    rightItems: ['distrust', 'rebellion', 'selfishness', 'separation'],
  },
  footnote:
    'God invites us to choose life. Sin promises freedom but leads away from life.',
}

const seenByGodVisual: StudyVisualLessonBlock = {
  type: 'studyVisual',
  title: 'Seen by God',
  accent: 'amber',
  payload: {
    variant: 'sequence',
    steps: [
      { label: 'Known', subtitle: 'God understands your life personally.' },
      { label: 'Formed', subtitle: 'God created human life with intention.' },
      { label: 'Valued', subtitle: 'Jesus says you are worth more than many sparrows.' },
      { label: 'Near', subtitle: 'God is not far from each one of us.' },
    ],
  },
  footnote:
    'Your worth is not built on achievement. It begins with the God who made you.',
}

const jesusRestoresTheImageVisual: StudyVisualLessonBlock = {
  type: 'studyVisual',
  title: 'Jesus Restores the Image',
  accent: 'sage',
  payload: {
    variant: 'sequence',
    steps: [
      { label: 'Created', subtitle: 'Humanity made in God\'s image.' },
      { label: 'Damaged', subtitle: 'Sin distorts how we reflect God.' },
      { label: 'Revealed', subtitle: 'Jesus shows the true image.' },
      { label: 'Restored', subtitle: 'God changes us into Christlikeness.' },
    ],
  },
  footnote:
    'Jesus reveals God\'s character and restores God\'s image in humanity.',
}

const beholdingAndBecomingVisual: StudyVisualLessonBlock = {
  type: 'studyVisual',
  title: 'Beholding and Becoming',
  accent: 'sky',
  payload: {
    variant: 'sequence',
    steps: [
      {
        label: 'Behold Christ',
        subtitle: 'Look steadily at His life, words, and sacrifice.',
      },
      {
        label: 'Receive truth',
        subtitle: 'Let Scripture correct false pictures of God and self.',
      },
      {
        label: 'Surrender daily',
        subtitle: 'Respond to God\'s Spirit with trust and obedience.',
      },
      {
        label: 'Reflect His image',
        subtitle: 'Live with growing love, humility, mercy, and faithfulness.',
      },
    ],
  },
  footnote: 'We are changed as we behold Christ.',
}

/** Guided reader lessons for "Made for More" (Foundations). */
export const madeForMoreSeriesLessonLibrary: Record<string, LessonReaderContent> = {
  'more-than-mere-survival': {
    openingThought: `Every person eventually asks the same question.

Who am I?

Not just,

What is my name?

Not just,

What do I do?

But,

What am I?

Why am I here?

Do I matter?

The world gives different answers.

Some say human life is only biology.

A short life.

A few urges.

A little pleasure.

A little pain.

Then death.

But Scripture tells a different story.

Humanity is not an accident.

You are not merely a survival machine.

You were created by God.

And if that is true,

then your life carries dignity,

purpose,

responsibility,

and hope.`,
    scriptureRef: 'Psalm 8:3 to 5',
    scriptureQuote: `When I consider Your heavens,

the work of Your fingers,

the moon and the stars,

which You have ordained,

what is man that You are mindful of him,

and the son of man that You visit him?

For You have made him a little lower than the angels,

and You have crowned him with glory and honor.`,
    scriptureSecondaryRef: 'Genesis 1:1',
    scriptureSecondaryQuote: `In the beginning God created the heavens and the earth.`,
    scriptureWordInsights: [
      {
        surface: 'mindful',
        lemma: 'זָכַר',
        transliteration: 'zakar',
        meaning: 'to remember, call to mind, be mindful',
        strongs: 'H2142',
        reference: 'Psalm 8:4',
        language: 'Hebrew',
        note: `In Psalm 8,

David asks,

"What is man that You are mindful of him?"

The idea is not that God occasionally remembers humanity,

as if He almost forgot.

It points to God's attentive care.

The Creator of the heavens notices human beings.

He is mindful of us.

That means your life is not invisible to God.

You are seen.

Known.

Considered.

And valued.`,
      },
    ],
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Genesis 1:26',
        quote: `Then God said,

Let Us make man in Our image,

according to Our likeness.`,
      },
      {
        type: 'scripture',
        reference: 'Acts 17:26 to 28',
        quote: `And He has made from one blood every nation of men

to dwell on all the face of the earth,

and has determined their preappointed times

and the boundaries of their dwellings,

so that they should seek the Lord,

in the hope that they might grope for Him

and find Him,

though He is not far from each one of us;

for in Him we live and move and have our being.`,
      },
      {
        type: 'paragraph',
        text: `Scripture begins with God as Creator.

That means human identity begins with Him.`,
      },
      {
        type: 'scriptureThread',
        title: 'Made for More',
        question: 'What does Scripture say human beings were created to be?',
        references: [
          { reference: 'Psalm 8:3 to 5' },
          { reference: 'Genesis 1:1' },
          { reference: 'Genesis 1:26' },
          { reference: 'Acts 17:26 to 28' },
        ],
        takeaway:
          'Humanity was created by God with dignity and purpose, made to seek Him and find life in relationship with the Creator.',
      },
      {
        type: 'paragraph',
        text: `Human life is not random or disposable. Scripture begins our identity with the Creator who sees, values, and calls us to seek Him.`,
      },
    ],
    teachingPoints: [
      `The Bible asks the human identity question.

Psalm 8 looks at the vastness of creation and asks why God cares about humanity.`,
      `Human life begins with God.

Genesis does not begin with accident, chaos, or meaninglessness. It begins with the Creator.`,
      `Humanity carries dignity.

Psalm 8 says God crowns human beings with glory and honor.`,
      `Humanity was made for relationship with God.

Acts 17 says God arranged life so people would seek Him and find Him.`,
      `The Bible gives a better story than survival.

We are not merely living, consuming, and dying. We are made by God and for God.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro:
      'Psalm 8 uses a careful Hebrew word when it speaks about God being "mindful" of us. Take a closer look.',
    wordStudyInsights: [
      {
        surface: 'mindful',
        lemma: 'זָכַר',
        transliteration: 'zakar',
        meaning: 'to remember, call to mind, be mindful',
        strongs: 'H2142',
        reference: 'Psalm 8:4',
        language: 'Hebrew',
        note: `In Psalm 8,

David asks,

"What is man that You are mindful of him?"

The idea is not that God occasionally remembers humanity,

as if He almost forgot.

It points to God's attentive care.

The Creator of the heavens notices human beings.

He is mindful of us.

That means your life is not invisible to God.

You are seen.

Known.

Considered.

And valued.`,
      },
    ],
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'doctrine_clarity',
      body: `There are two very different ways to tell the story of humanity.

One story says we are here by accident.

We live for a little while.

We follow desire.

We compete.

We survive if we can.

Then we disappear.

The Bible tells a different story.

It says creation has a Creator.

Human life has meaning.

Every person carries worth.

Our choices matter.

Love matters.

Justice matters.

Mercy matters.

Why?

Because human beings were made by God.

That does not answer every question in one lesson.

But it gives us the right starting place.

You are not random.

You are not disposable.

You are not merely what you feel,

what you own,

what you achieve,

or what others think of you.

You were made for more.`,
    },
    studyInsightBlocks: [twoStoriesVisual],
    reflectPrompt: `When you think about human life,

do you usually see it as random or purposeful?

What does Psalm 8 show you about God's view of humanity?

Have you ever struggled to believe your life matters?

What changes when your identity begins with God instead of achievement,

appearance,

success,

or other people's opinions?`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week,

read Psalm 8 slowly.

Do not rush through the question.

"What is man that You are mindful of him?"

Let that question sit with you.

Then answer it from Scripture.

You are seen by God.

You are known by God.

You were created by God.

You were made for more than survival.`,
    prayer: '',
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'mfm-l1-q1',
          prompt: 'What question does Psalm 8 ask about humanity?',
          options: [
            'Why are humans better at building cities?',
            'What is man that God is mindful of him?',
            'Why do humans need no guidance?',
            'What nation is strongest?',
          ],
          correctIndex: 1,
        },
        {
          id: 'mfm-l1-q2',
          prompt: 'How does Genesis 1:1 begin the story of reality?',
          options: [
            'With human achievement',
            'With God as Creator',
            'With meaninglessness',
            'With Israel\'s kings',
          ],
          correctIndex: 1,
        },
        {
          id: 'mfm-l1-q3',
          prompt: 'According to Psalm 8, God crowns humanity with what?',
          options: ['Glory and honor', 'Fear and confusion', 'Wealth and control', 'Silence and distance'],
          correctIndex: 0,
        },
        {
          id: 'mfm-l1-q4',
          kind: 'multi',
          prompt: 'Which statements fit this lesson?',
          options: [
            'Human identity begins with God',
            'Scripture gives humanity dignity',
            'Human life is only meaningless survival',
            'God is mindful of humanity',
          ],
          correctIndices: [0, 1, 3],
        },
        {
          id: 'mfm-l1-q5',
          kind: 'reflection',
          prompt: 'What does it mean to you that your life begins with God\'s purpose rather than accident?',
          explanation:
            'This reflection helps the learner connect Scripture\'s teaching on humanity with personal identity and worth.',
        },
      ],
    },
    completionSummary:
      'You began with a simple idea: Scripture gives humanity a story that is deeper than survival. Keep that anchor as you move forward.',
  },

  'created-in-gods-image': {
    openingThought: `The Bible does not describe human beings as accidents.

It does not begin our identity with status,

money,

appearance,

race,

talent,

achievement,

or failure.

It begins deeper.

Humanity was created in the image of God.

That means every person carries dignity before they accomplish anything.

Before a resume.

Before a title.

Before applause.

Before success.

Before anyone knows their name.

Human worth begins with the Creator.

To be human is to carry meaning.

Not because we made ourselves important,

but because God made us in His image.`,
    scriptureRef: 'Genesis 1:26 to 28',
    scriptureQuote: `Then God said,

Let Us make man in Our image,

according to Our likeness;

let them have dominion over the fish of the sea,

over the birds of the air,

and over the cattle,

over all the earth

and over every creeping thing that creeps on the earth.

So God created man in His own image;

in the image of God He created him;

male and female He created them.

Then God blessed them,

and God said to them,

Be fruitful and multiply;

fill the earth and subdue it;

have dominion over the fish of the sea,

over the birds of the air,

and over every living thing that moves on the earth.`,
    scriptureSecondaryRef: 'Genesis 5:1 to 2',
    scriptureSecondaryQuote: `In the day that God created man,

He made him in the likeness of God.

He created them male and female,

and blessed them

and called them Mankind

in the day they were created.`,
    scriptureWordInsights: [
      {
        surface: 'image',
        lemma: 'צֶלֶם אֱלֹהִים',
        transliteration: 'tselem Elohim',
        meaning: 'image of God',
        strongs: 'H6754',
        reference: 'Genesis 1:26 to 27',
        language: 'Hebrew',
        note: `The Hebrew word tselem can mean image,

likeness,

or representation.

Genesis says humanity was made in the image of God.

This does not mean we are God.

It means human beings were created to reflect something about Him.

We were made to represent His character in the world.

His love.

His wisdom.

His care.

His justice.

His creativity.

His relational nature.

To bear God's image is a gift,

but it is also a calling.`,
      },
    ],
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'James 3:9',
        quote: `With it we bless our God and Father,

and with it we curse men,

who have been made in the similitude of God.`,
      },
      {
        type: 'paragraph',
        text: `Scripture grounds human dignity in creation.

Human beings matter because they bear God's image.`,
      },
      {
        type: 'scriptureChain',
        title: 'Created in God\'s Image',
        references: [
          { reference: 'Genesis 1:26 to 28' },
          { reference: 'Genesis 5:1 to 2' },
          { reference: 'James 3:9' },
        ],
      },
      {
        type: 'paragraph',
        text: `Every human being carries God-given dignity because humanity was created in the image and likeness of God.`,
      },
    ],
    teachingPoints: [
      `Humanity was created by God.

Our identity begins with the Creator, not with human opinion.`,
      `Humanity was made in God's image.

This gives every person dignity, value, and purpose.`,
      `Male and female are both included.

Genesis says God created humanity in His image, male and female.`,
      `God blessed humanity.

Human life begins under divine blessing, not meaninglessness.`,
      `The image of God affects how we treat people.

James warns against cursing human beings who are made in God's likeness.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro:
      'Genesis ties human dignity to one striking Hebrew phrase. Take a closer look at what "image" means here.',
    wordStudyInsights: [
      {
        surface: 'image',
        lemma: 'צֶלֶם אֱלֹהִים',
        transliteration: 'tselem Elohim',
        meaning: 'image of God',
        strongs: 'H6754',
        reference: 'Genesis 1:26 to 27',
        language: 'Hebrew',
        note: `The Hebrew word tselem can mean image,

likeness,

or representation.

Genesis says humanity was made in the image of God.

This does not mean we are God.

It means human beings were created to reflect something about Him.

We were made to represent His character in the world.

His love.

His wisdom.

His care.

His justice.

His creativity.

His relational nature.

To bear God's image is a gift,

but it is also a calling.`,
      },
    ],
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'doctrine_clarity',
      body: `Genesis 1 gives humanity a high calling.

God creates a world filled with life,

beauty,

order,

and purpose.

Then He creates human beings in His image.

That means people are not disposable.

No human being is merely a body.

No human being is merely a number.

No human being is merely useful or useless.

Every person carries God-given worth.

This truth also gives responsibility.

If we are made in God's image,

then our lives are meant to reflect Him.

The way we speak matters.

The way we treat others matters.

The way we use power matters.

The way we care for creation matters.

The way we love matters.

Being made in God's image is not only about feeling valuable.

It is about living as someone created to reflect the God who made you.`,
    },
    studyInsightBlocks: [imageOfGodVisual],
    reflectPrompt: `What usually shapes the way people define their worth?

How does Genesis 1 correct shallow views of human identity?

What changes when you see every person as made in God's image?

Where do you need to treat yourself or someone else with more dignity?`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week,

practice seeing people through Genesis 1.

The person in traffic.

The coworker.

The stranger.

The difficult family member.

The person you disagree with.

The person in the mirror.

Ask:

How would I treat this person if I remembered they were made in God's image?`,
    prayer: '',
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'mfm-l2-q1',
          prompt: 'According to Genesis 1:26 to 27, humanity was created in whose image?',
          options: [
            'The image of angels',
            'The image of God',
            'The image of animals',
            'The image of kings',
          ],
          correctIndex: 1,
        },
        {
          id: 'mfm-l2-q2',
          prompt: 'What does being made in God\'s image give every person?',
          options: [
            'God-given dignity and purpose',
            'Permission to mistreat others',
            'Freedom from responsibility',
            'Worth only after success',
          ],
          correctIndex: 0,
        },
        {
          id: 'mfm-l2-q3',
          prompt: 'What does James 3:9 warn about?',
          options: [
            'Cursing people made in God\'s likeness',
            'Reading Genesis too slowly',
            'Naming animals',
            'Forgetting geography',
          ],
          correctIndex: 0,
        },
        {
          id: 'mfm-l2-q4',
          kind: 'multi',
          prompt: 'Which statements fit this lesson?',
          options: [
            'Humanity was created by God',
            'Male and female are both included in God\'s image',
            'The image of God affects how we treat people',
            'Human worth depends only on achievement',
          ],
          correctIndices: [0, 1, 2],
        },
        {
          id: 'mfm-l2-q5',
          kind: 'reflection',
          prompt: 'What is one way you can honor the image of God in someone this week?',
          explanation:
            'This reflection helps the learner apply human dignity to real relationships and daily choices.',
        },
      ],
    },
    completionSummary:
      'You anchored dignity where Scripture anchors it: in God\'s image. Carry that lens into how you see yourself and others.',
  },

  'free-moral-agents': {
    openingThought: `Love cannot be forced.

Obedience can be forced.

Behavior can be controlled.

Words can be repeated.

Actions can be pressured.

But love must be chosen.

That is why freedom matters.

God did not create human beings as machines.

He did not make us puppets.

He created us with the ability to think,

respond,

trust,

choose,

and love.

That freedom makes love meaningful.

But it also makes rebellion possible.

The same freedom that allows love to be real

also allows sin to be chosen.

That is serious.

But without freedom,

there can be no real relationship.`,
    scriptureRef: 'Deuteronomy 30:19',
    scriptureQuote: `I call heaven and earth as witnesses today against you,

that I have set before you life and death,

blessing and cursing;

therefore choose life,

that both you and your descendants may live.`,
    scriptureSecondaryRef: 'Joshua 24:15',
    scriptureSecondaryQuote: `And if it seems evil to you to serve the LORD,

choose for yourselves this day whom you will serve.`,
    scriptureWordInsights: [
      {
        surface: 'choose',
        lemma: 'בָּחַר',
        transliteration: 'bachar',
        meaning: 'to choose, select, decide',
        strongs: 'H977',
        reference: 'Joshua 24:15',
        language: 'Hebrew',
        note: `Joshua tells the people,

"Choose for yourselves this day whom you will serve."

The Hebrew word bachar points to a real act of choosing.

God does not treat people as machines.

He calls them to respond.

This matters because love,

worship,

and loyalty only have meaning when they are chosen.

God invites.

God warns.

God teaches.

But He does not force the heart.`,
      },
    ],
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Genesis 2:16 to 17',
        quote: `And the LORD God commanded the man,

saying,

Of every tree of the garden you may freely eat;

but of the tree of the knowledge of good and evil you shall not eat,

for in the day that you eat of it

you shall surely die.`,
      },
      {
        type: 'scripture',
        reference: 'John 14:15',
        quote: `If you love Me,

keep My commandments.`,
      },
      {
        type: 'paragraph',
        text: `God gives commands,

but He also gives meaningful choice.

Love responds freely.`,
      },
      {
        type: 'scriptureChain',
        title: 'Choose Life',
        references: [
          { reference: 'Deuteronomy 30:19' },
          { reference: 'Joshua 24:15' },
          { reference: 'Genesis 2:16 to 17' },
          { reference: 'John 14:15' },
        ],
      },
      {
        type: 'paragraph',
        text: `Love requires freedom, and Scripture calls us to use that freedom to choose life, trust, and relationship with God.`,
      },
    ],
    teachingPoints: [
      `God created humans with moral freedom.

We are able to choose, respond, trust, obey, or reject.`,
      `Choice makes love meaningful.

Forced love is not love. Real love requires freedom.`,
      `God clearly shows the path of life.

He does not leave people without guidance.`,
      `Freedom comes with responsibility.

Our choices matter because they shape life, character, and relationship.`,
      `Obedience is meant to flow from love.

Jesus said, "If you love Me, keep My commandments."`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro:
      'Joshua uses a Hebrew word when he asks Israel whom they will serve. Take a closer look.',
    wordStudyInsights: [
      {
        surface: 'choose',
        lemma: 'בָּחַר',
        transliteration: 'bachar',
        meaning: 'to choose, select, decide',
        strongs: 'H977',
        reference: 'Joshua 24:15',
        language: 'Hebrew',
        note: `Joshua tells the people,

"Choose for yourselves this day whom you will serve."

The Hebrew word bachar points to a real act of choosing.

God does not treat people as machines.

He calls them to respond.

This matters because love,

worship,

and loyalty only have meaning when they are chosen.

God invites.

God warns.

God teaches.

But He does not force the heart.`,
      },
    ],
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'doctrine_clarity',
      body: `Freedom is one of the most powerful gifts God gave humanity.

But freedom is not the same as independence from God.

A fish is free in water,

not on dry land.

A bird is free in the sky,

not underwater.

Human beings are free when they live in harmony with the God who made them.

Sin presents freedom as doing whatever we want.

Scripture presents freedom as choosing life.

Choosing truth.

Choosing love.

Choosing the Creator.

That is why God's commands are not random restrictions.

They are boundaries that protect life and love.

God gives choice,

but He also tells the truth about where choices lead.

Life or death.

Blessing or curse.

Trust or rebellion.

Love cannot be forced.

But love can be invited.`,
    },
    studyInsightBlocks: [choiceAndDirectionVisual],
    reflectPrompt: `Why does love require freedom?

Have you ever thought of God's commands as protection rather than control?

Where are you currently facing a meaningful choice?

What would it look like to choose life in that area?`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week,

pay attention to one choice that keeps coming up.

It may be a habit.

A relationship.

A temptation.

A thought pattern.

A decision you keep delaying.

Ask:

Does this choice lead me closer to life with God,

or farther from it?

Then choose one step toward life.

Prayer:

Lord,

Thank You for creating me with the ability to choose.

Teach me to use freedom wisely.

Help me see Your commands as love,

not control.

Give me courage to choose life,

truth,

obedience,

and relationship with You.

Shape my heart so my choices reflect Your love.

Amen.`,
    prayer: '',
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'mfm-l4-q1',
          prompt: 'Why does freedom matter for love?',
          options: [
            'Because love must be chosen',
            'Because love works best when forced',
            'Because choices do not matter',
            'Because God wants confusion',
          ],
          correctIndex: 0,
        },
        {
          id: 'mfm-l4-q2',
          prompt: 'What does Deuteronomy 30:19 tell people to choose?',
          options: ['Popularity', 'Life', 'Fear', 'Wealth'],
          correctIndex: 1,
        },
        {
          id: 'mfm-l4-q3',
          prompt: 'What does the Hebrew word bachar mean?',
          options: ['To choose or decide', 'To hide', 'To destroy', 'To forget'],
          correctIndex: 0,
        },
        {
          id: 'mfm-l4-q4',
          kind: 'multi',
          prompt: 'Which statements fit this lesson?',
          options: [
            'God created humans with moral freedom',
            'Choice makes love meaningful',
            'Freedom comes with responsibility',
            'God forces the heart to love Him',
          ],
          correctIndices: [0, 1, 2],
        },
        {
          id: 'mfm-l4-q5',
          kind: 'reflection',
          prompt: 'What is one area where God is inviting you to choose life?',
          explanation:
            'This reflection helps the learner apply moral freedom to a real decision.',
        },
      ],
    },
    completionSummary:
      'You saw that love requires freedom, and that God invites us to choose life, trust, and obedience in relationship with Him.',
  },

  'why-every-life-matters': {
    openingThought: `Some people feel invisible.

Unnoticed.

Overlooked.

Easy to replace.

The world often measures people by usefulness.

How much they produce.

How attractive they are.

How successful they become.

How much influence they have.

How much money they make.

But Scripture gives human life a deeper value.

You matter before anyone applauds you.

You matter before you prove yourself.

You matter before you have everything together.

Why?

Because God made you.

God sees you.

God knows you.

God values you.

And that truth does not apply only to you.

It applies to every person you meet.`,
    scriptureRef: 'Psalm 139:1 to 4',
    scriptureQuote: `O LORD,

You have searched me and known me.

You know my sitting down and my rising up;

You understand my thought afar off.

You comprehend my path and my lying down,

And are acquainted with all my ways.

For there is not a word on my tongue,

But behold,

O LORD,

You know it altogether.`,
    scriptureSecondaryRef: 'Psalm 139:13 to 14',
    scriptureSecondaryQuote: `For You formed my inward parts;

You covered me in my mother's womb.

I will praise You,

for I am fearfully and wonderfully made;

Marvelous are Your works,

And that my soul knows very well.`,
    scriptureWordInsights: [
      {
        surface: 'known',
        lemma: 'יָדַע',
        transliteration: 'yada',
        meaning: 'to know, recognize, understand, know personally',
        strongs: 'H3045',
        reference: 'Psalm 139:1',
        language: 'Hebrew',
        note: `Psalm 139 begins with the words,

"O LORD,

You have searched me and known me."

The word yada can point to more than knowing facts.

It can describe personal knowledge,

careful recognition,

and deep awareness.

This matters because God does not know humanity from a distance only.

He knows the person.

He sees the hidden thoughts.

He understands the path.

He notices what others miss.

To be known by God is not the same as being watched coldly.

It means your life is held before the One who created you,

sees you,

and values you.`,
      },
    ],
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Matthew 10:29 to 31',
        quote: `Are not two sparrows sold for a copper coin?

And not one of them falls to the ground apart from your Father.

But the very hairs of your head are all numbered.

Do not fear therefore;

you are of more value than many sparrows.`,
      },
      {
        type: 'scripture',
        reference: 'Acts 17:26 to 28',
        quote: `And He has made from one blood every nation of men

to dwell on all the face of the earth,

and has determined their preappointed times

and the boundaries of their dwellings,

so that they should seek the Lord,

in the hope that they might grope for Him

and find Him,

though He is not far from each one of us;

for in Him we live and move and have our being.`,
      },
      {
        type: 'paragraph',
        text: `Scripture does not present people as invisible.

God sees.

God knows.

God values.

God is near.`,
      },
      {
        type: 'scriptureChain',
        title: 'Every Life Matters',
        references: [
          { reference: 'Psalm 139:1 to 14' },
          { reference: 'Matthew 10:29 to 31' },
          { reference: 'Acts 17:26 to 28' },
        ],
      },
      {
        type: 'paragraph',
        text: `Every human life matters because every person is created, known, seen, and valued by God.`,
      },
    ],
    teachingPoints: [
      `God knows each person deeply.

Psalm 139 shows that God knows our thoughts, movements, and lives with personal attention.`,
      `Human life is formed with intention.

David praises God because he understands that his life was not random or meaningless.`,
      `God values what the world overlooks.

Jesus uses sparrows to show that the Father notices what others may ignore.`,
      `Every nation and person exists under God's care.

Acts 17 teaches that God is involved with humanity's times, places, and search for Him.`,
      `Human value is not earned.

Your worth does not begin with success, beauty, usefulness, or approval. It begins with the God who made you.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro:
      'Psalm 139 opens with a rich Hebrew word for how God knows us. Take a closer look.',
    wordStudyInsights: [
      {
        surface: 'known',
        lemma: 'יָדַע',
        transliteration: 'yada',
        meaning: 'to know, recognize, understand, know personally',
        strongs: 'H3045',
        reference: 'Psalm 139:1',
        language: 'Hebrew',
        note: `Psalm 139 begins with the words,

"O LORD,

You have searched me and known me."

The word yada can point to more than knowing facts.

It can describe personal knowledge,

careful recognition,

and deep awareness.

This matters because God does not know humanity from a distance only.

He knows the person.

He sees the hidden thoughts.

He understands the path.

He notices what others miss.

To be known by God is not the same as being watched coldly.

It means your life is held before the One who created you,

sees you,

and values you.`,
      },
    ],
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'doctrine_clarity',
      body: `Human value is often fragile when it depends on the wrong things.

If worth depends on success,

failure can destroy it.

If worth depends on beauty,

aging can threaten it.

If worth depends on popularity,

rejection can crush it.

If worth depends on usefulness,

weakness can make someone feel disposable.

Scripture gives a better foundation.

You matter because God made you.

You matter because God knows you.

You matter because God values human life.

And this truth is not only comforting.

It is corrective.

If every person matters to God,

then no one should be treated as disposable.

Not the poor.

Not the weak.

Not the unborn.

Not the elderly.

Not the stranger.

Not the enemy.

Not the person who cannot benefit us.

The image of God gives dignity.

The knowledge of God gives comfort.

The love of God gives worth.`,
    },
    studyInsightBlocks: [seenByGodVisual],
    reflectPrompt: `Where do you usually look for your sense of worth?

Success?

Approval?

Appearance?

Usefulness?

Control?

What changes when your value begins with God instead?

Who in your life do you need to see with more dignity?

How does Psalm 139 challenge the idea that anyone is invisible?`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week,

practice seeing people the way Scripture describes them.

Start with the people closest to you.

Then look wider.

The person you pass quickly.

The person you disagree with.

The person who annoys you.

The person who feels forgotten.

The person in the mirror.

Ask:

How would I treat this person if I remembered God sees them,

knows them,

and values them?

Then choose one action that honors someone's God-given dignity.

Listen more carefully.

Speak more gently.

Help quietly.

Encourage honestly.

Refuse to treat anyone as disposable.

Prayer:

Lord,

Thank You for seeing me.

Thank You for knowing me deeply.

Thank You for giving human life value that the world cannot take away.

Teach me to see myself through Your Word.

Teach me to see others with dignity.

Remove pride,

indifference,

and selfishness from my heart.

Help me honor the people You value.

Amen.`,
    prayer: '',
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'mfm-l5-q1',
          prompt: 'According to Psalm 139, what does God do?',
          options: [
            'Ignores human life',
            'Searches and knows us',
            'Only notices important people',
            'Forgets our path',
          ],
          correctIndex: 1,
        },
        {
          id: 'mfm-l5-q2',
          prompt: 'What does Jesus use in Matthew 10 to show that the Father notices even small things?',
          options: ['Sparrows', 'Coins', 'Mountains', 'Ships'],
          correctIndex: 0,
        },
        {
          id: 'mfm-l5-q3',
          prompt: 'What does the Hebrew word yada mean?',
          options: ['To forget', 'To know personally', 'To hide', 'To reject'],
          correctIndex: 1,
        },
        {
          id: 'mfm-l5-q4',
          kind: 'multi',
          prompt: 'Which statements fit this lesson?',
          options: [
            'God knows each person deeply',
            'Human worth depends only on success',
            'Every person should be treated with dignity',
            'God is not far from each one of us',
          ],
          correctIndices: [0, 2, 3],
        },
        {
          id: 'mfm-l5-q5',
          kind: 'reflection',
          prompt: 'Who is one person you need to treat with more dignity this week?',
          explanation:
            'This reflection helps the learner apply the truth that every life matters to a real person and a real action.',
        },
      ],
    },
    completionSummary:
      'You rested on Scripture: God sees, knows, and values every life. Carry that lens into how you see yourself and others.',
  },

  'jesus-the-true-image': {
    openingThought: `If humanity was made in God's image,

then one question matters deeply:

What does that image look like?

We see pieces of it in human love,

creativity,

justice,

mercy,

relationship,

and moral responsibility.

But we also see the damage of sin.

Selfishness.

Pride.

Fear.

Violence.

Dishonesty.

Broken relationships.

So where do we look to understand God's image clearly?

Scripture points us to Jesus.

Jesus is not only the clearest revelation of God.

He is also the clearest picture of what humanity was meant to be.

In Him,

we see the image of God without distortion.`,
    scriptureRef: 'Colossians 1:15',
    scriptureQuote: `He is the image of the invisible God,

the firstborn over all creation.`,
    scriptureSecondaryRef: 'Hebrews 1:3',
    scriptureSecondaryQuote: `who being the brightness of His glory

and the express image of His person,

and upholding all things by the word of His power,

when He had by Himself purged our sins,

sat down at the right hand of the Majesty on high,`,
    scriptureWordInsights: [
      {
        surface: 'image',
        lemma: 'εἰκών',
        transliteration: 'eikon',
        meaning: 'image, visible representation, likeness',
        strongs: 'G1504',
        reference: 'Colossians 1:15',
        language: 'Greek',
        note: `Colossians says Jesus is the image of the invisible God.

The word eikon points to a visible representation,

a likeness,

or an image that makes something known.

This matters because Jesus does not leave God's character unclear.

He makes the invisible God visible.

When we see Jesus,

we see what God's love looks like in human life.

We see truth without cruelty.

Power without selfishness.

Holiness without distance.

Mercy without compromise.

Jesus is the image humanity was created to reflect,

and the image God is restoring in us.`,
      },
    ],
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: '2 Corinthians 4:4',
        quote: `whose minds the god of this age has blinded,

who do not believe,

lest the light of the gospel of the glory of Christ,

who is the image of God,

should shine on them.`,
      },
      {
        type: 'scripture',
        reference: 'John 14:9',
        quote: `Jesus said to him,

Have I been with you so long,

and yet you have not known Me,

Philip?

He who has seen Me has seen the Father;

so how can you say,

Show us the Father?`,
      },
      {
        type: 'scripture',
        reference: 'Romans 8:29',
        quote: `For whom He foreknew,

He also predestined to be conformed to the image of His Son,

that He might be the firstborn among many brethren.`,
      },
      {
        type: 'paragraph',
        text: `Jesus reveals God clearly.

And through Jesus,

God begins restoring His image in us.`,
      },
      {
        type: 'scriptureChain',
        title: 'Jesus, the True Image',
        references: [
          { reference: 'Colossians 1:15' },
          { reference: 'Hebrews 1:3' },
          { reference: '2 Corinthians 4:4' },
          { reference: 'John 14:9' },
          { reference: 'Romans 8:29' },
        ],
      },
      {
        type: 'paragraph',
        text: `Jesus reveals God's character and shows what humanity was created to reflect.`,
      },
    ],
    teachingPoints: [
      `Jesus is the image of the invisible God.

If we want to know what God is like, we look at Christ.`,
      `Jesus shows God's character without distortion.

His love, truth, mercy, holiness, and sacrifice reveal the Father.`,
      `Jesus also shows true humanity.

He lived in perfect trust, obedience, love, and dependence on the Father.`,
      `Sin damaged the image of God in humanity.

But it did not erase God's purpose for humanity.`,
      `God restores His image through Christ.

The goal is not only forgiveness, but transformation into Christlikeness.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro:
      'Colossians uses a Greek word when it calls Jesus the image of God. Take a closer look.',
    wordStudyInsights: [
      {
        surface: 'image',
        lemma: 'εἰκών',
        transliteration: 'eikon',
        meaning: 'image, visible representation, likeness',
        strongs: 'G1504',
        reference: 'Colossians 1:15',
        language: 'Greek',
        note: `Colossians says Jesus is the image of the invisible God.

The word eikon points to a visible representation,

a likeness,

or an image that makes something known.

This matters because Jesus does not leave God's character unclear.

He makes the invisible God visible.

When we see Jesus,

we see what God's love looks like in human life.

We see truth without cruelty.

Power without selfishness.

Holiness without distance.

Mercy without compromise.

Jesus is the image humanity was created to reflect,

and the image God is restoring in us.`,
      },
    ],
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'doctrine_clarity',
      body: `The image of God in humanity was damaged by sin.

Not erased,

but damaged.

That matters.

Human beings still carry dignity.

But we do not naturally reflect God perfectly.

We can love,

but selfishness bends love inward.

We can create,

but pride can turn creativity into self-glory.

We can seek justice,

but anger can twist justice into revenge.

We can desire relationship,

but fear and sin can break trust.

Jesus enters that broken story.

He shows what humanity was meant to be.

He trusts the Father.

He loves enemies.

He serves without needing applause.

He tells the truth.

He resists temptation.

He gives Himself fully.

In Jesus,

we see God clearly.

And in Jesus,

we see restored humanity.`,
    },
    studyInsightBlocks: [jesusRestoresTheImageVisual],
    reflectPrompt: `When you think about Jesus,

do you mostly see Him as Savior,

example,

teacher,

or revealer of God?

What part of Jesus' life shows you God's character most clearly?

Where do you see the image of God damaged in human life?

What would it look like for God to make you more like Christ?`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week,

choose one moment from the life of Jesus.

Read it slowly.

Watch how He treats people.

Watch how He speaks truth.

Watch how He responds to temptation,

pain,

misunderstanding,

and need.

Then ask:

What does this show me about God?

And what does this show me about the kind of person God is restoring me to become?

Do not only admire Jesus from a distance.

Ask God to shape your life into His image.

Prayer:

Lord,

Thank You for revealing Yourself through Jesus.

Thank You that Christ shows me what Your character looks like.

Thank You that He also shows what humanity was meant to be.

Restore Your image in me.

Make me more like Christ in my thoughts,

my words,

my choices,

and my relationships.

Help me reflect Your love more clearly.

Amen.`,
    prayer: '',
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'mfm-l6-q1',
          prompt: 'According to Colossians 1:15, Jesus is what?',
          options: [
            'The image of the invisible God',
            'A distant created myth',
            'Only a political leader',
            'A symbol with no connection to God',
          ],
          correctIndex: 0,
        },
        {
          id: 'mfm-l6-q2',
          prompt: 'What does the Greek word eikon mean?',
          options: [
            'Image or visible representation',
            'Fear',
            'Hidden place',
            'Empty speech',
          ],
          correctIndex: 0,
        },
        {
          id: 'mfm-l6-q3',
          prompt: 'What did sin do to the image of God in humanity?',
          options: [
            'Damaged it',
            'Improved it',
            'Made it unnecessary',
            'Removed all human dignity',
          ],
          correctIndex: 0,
        },
        {
          id: 'mfm-l6-q4',
          kind: 'multi',
          prompt: 'Which statements fit this lesson?',
          options: [
            'Jesus reveals God\'s character',
            'Jesus shows true humanity',
            'God restores His image through Christ',
            'Jesus makes God harder to understand',
          ],
          correctIndices: [0, 1, 2],
        },
        {
          id: 'mfm-l6-q5',
          kind: 'reflection',
          prompt: 'What is one area of your life where you want God to make you more like Jesus?',
          explanation:
            'This reflection helps the learner connect the image of God to personal transformation through Christ.',
        },
      ],
    },
    completionSummary:
      'You anchored the image question in Christ: Jesus shows God plainly and models the humanity God is restoring.',
  },

  'restored-into-his-image': {
    openingThought: `God does not only want to forgive what sin has done.

He wants to restore what sin has damaged.

That matters.

The image of God in humanity was bent by sin.

Love became selfish.

Freedom became rebellion.

Desire became disorder.

Relationship became broken.

Purpose became confused.

But God did not give up on His design.

Through Jesus,

He shows us the true image.

Through the Spirit,

He begins restoring that image in us.

The goal is not merely to be forgiven and stay unchanged.

The goal is to become more like Christ.

To reflect God again.

To live as people made for more.`,
    scriptureRef: '2 Corinthians 3:18',
    scriptureQuote: `But we all,

with unveiled face,

beholding as in a mirror the glory of the Lord,

are being transformed into the same image from glory to glory,

just as by the Spirit of the Lord.`,
    scriptureSecondaryRef: '1 Corinthians 15:49',
    scriptureSecondaryQuote: `And as we have borne the image of the man of dust,

we shall also bear the image of the heavenly Man.`,
    scriptureWordInsights: [
      {
        surface: 'transformed',
        lemma: 'μεταμορφόω',
        transliteration: 'metamorphoo',
        meaning: 'to transform, to change in form',
        strongs: 'G3339',
        reference: '2 Corinthians 3:18',
        language: 'Greek',
        note: `Paul says believers are being transformed into the same image from glory to glory.

The word points to real change.

Not surface change only.

Not pretending.

Not simply acting religious.

God's work reaches deeper.

He changes the heart,

the mind,

the desires,

the character,

and the direction of the life.

This matters because the Christian life is not only about avoiding wrong things.

It is about being restored into the image of Christ.`,
      },
    ],
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Romans 8:29',
        quote: `For whom He foreknew,

He also predestined to be conformed to the image of His Son,

that He might be the firstborn among many brethren.`,
      },
      {
        type: 'scripture',
        reference: 'Colossians 3:10',
        quote: `and have put on the new man

who is renewed in knowledge

according to the image of Him who created him,`,
      },
      {
        type: 'paragraph',
        text: `God's purpose is restoration.

He is forming His people into the likeness of Christ.`,
      },
      {
        type: 'scriptureChain',
        title: 'Restored Into His Image',
        references: [
          { reference: '2 Corinthians 3:18' },
          { reference: '1 Corinthians 15:49' },
          { reference: 'Romans 8:29' },
          { reference: 'Colossians 3:10' },
        ],
      },
      {
        type: 'paragraph',
        text: `God's purpose is not only to forgive us, but to restore His image in us as we behold Christ.`,
      },
    ],
    teachingPoints: [
      `Sin damaged God's image in humanity.

We still carry dignity, but we do not naturally reflect God perfectly.`,
      `Jesus shows the image clearly.

He reveals both God's character and humanity's true purpose.`,
      `Transformation comes by beholding Christ.

Paul says we are changed as we behold the Lord.`,
      `Restoration is the work of God's Spirit.

The change is deeper than behavior management. It is spiritual renewal.`,
      `God's goal is Christlikeness.

He is shaping His people to reflect the character of His Son.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro:
      '2 Corinthians connects transformation with the Spirit and beholding Jesus. Take a closer look at the verb Paul uses.',
    wordStudyInsights: [
      {
        surface: 'transformed',
        lemma: 'μεταμορφόω',
        transliteration: 'metamorphoo',
        meaning: 'to transform, to change in form',
        strongs: 'G3339',
        reference: '2 Corinthians 3:18',
        language: 'Greek',
        note: `Paul says believers are being transformed into the same image from glory to glory.

The word points to real change.

Not surface change only.

Not pretending.

Not simply acting religious.

God's work reaches deeper.

He changes the heart,

the mind,

the desires,

the character,

and the direction of the life.

This matters because the Christian life is not only about avoiding wrong things.

It is about being restored into the image of Christ.`,
      },
    ],
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'doctrine_clarity',
      body: `Restoration happens by beholding.

That is the pattern Paul gives.

We become changed as we behold the Lord.

What we focus on shapes us.

If we constantly behold pride,

we become proud.

If we constantly behold fear,

we become anxious.

If we constantly behold selfishness,

we become self-centered.

But when we behold Christ,

something different begins.

His patience confronts our impatience.

His mercy softens our harshness.

His truth corrects our lies.

His humility exposes our pride.

His love reshapes our hearts.

God restores His image in us by drawing our attention back to Jesus.

The more clearly we see Christ,

the more deeply we are changed.`,
    },
    studyInsightBlocks: [beholdingAndBecomingVisual],
    reflectPrompt: `What do you spend the most time beholding?

How has what you focus on shaped your thoughts,

desires,

or choices?

Which part of Christ's character do you most need restored in you?

What would it look like to behold Jesus more intentionally this week?`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week,

choose one way to behold Christ more intentionally.

Read one Gospel story slowly.

Memorize one verse about His character.

Pray through one scene from His life.

Pause before reacting,

and ask,

How would Jesus shape this moment?

Do not aim for instant perfection.

Aim for surrender.

God restores His image in us as we keep turning our attention back to Christ.

Prayer:

Lord,

Thank You for creating me in Your image.

Thank You for not giving up when sin damaged what You made.

Help me behold Jesus more clearly.

Change what is selfish,

proud,

fearful,

or broken in me.

Restore Your image in my heart.

Make me more loving,

more truthful,

more humble,

and more like Christ.

Amen.`,
    prayer: '',
    lessonQuiz: {
      ...QUIZ_SHELL,
      description: 'Check your understanding before finishing the study.',
      questions: [
        {
          id: 'mfm-l7-q1',
          prompt: 'According to 2 Corinthians 3:18, how are believers changed?',
          options: [
            'By beholding the Lord',
            'By ignoring Scripture',
            'By pretending to be perfect',
            'By comparing themselves to others',
          ],
          correctIndex: 0,
        },
        {
          id: 'mfm-l7-q2',
          prompt: 'What does the Greek word metamorphoo mean?',
          options: ['To transform', 'To hide', 'To forget', 'To accuse'],
          correctIndex: 0,
        },
        {
          id: 'mfm-l7-q3',
          prompt: 'According to Romans 8:29, God wants His people to be conformed to whose image?',
          options: [
            'The image of His Son',
            'The image of worldly success',
            'The image of angels',
            'The image of human pride',
          ],
          correctIndex: 0,
        },
        {
          id: 'mfm-l7-q4',
          kind: 'multi',
          prompt: 'Which statements fit this lesson?',
          options: [
            'God wants to restore His image in us',
            'Transformation happens as we behold Christ',
            'The Spirit changes the heart and character',
            'God only wants forgiveness without change',
          ],
          correctIndices: [0, 1, 2],
        },
        {
          id: 'mfm-l7-q5',
          kind: 'reflection',
          prompt:
            'What is one practical way you can behold Christ more intentionally this week?',
          explanation:
            'This reflection helps the learner respond to the whole study by choosing a real step toward Christlike restoration.',
        },
      ],
    },
    completionSummary:
      'You closed Made for More where Scripture points: forgiven, turning toward Jesus, renewed by His Spirit.',
    seriesCompleteScreen: {
      title: 'Study complete',
      message: 'You have completed Made for More.',
      primaryCta: { label: 'Review study', href: '/study-library/made-for-more' },
      secondaryCta: {
        label: 'Explore foundational studies',
        href: '/study-library?path=foundations',
      },
    },
  },
}
