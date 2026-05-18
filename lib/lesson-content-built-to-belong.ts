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

/** Guided reader lessons for "Built to Belong" (Foundations). */
export const builtToBelongSeriesLessonLibrary: Record<string, LessonReaderContent> = {
  'born-into-a-family': {
    openingThought: `No one is born to grow alone.

At physical birth, we enter a family because human beings need nurture, protection, teaching, correction, and love in order to mature.

The same is true spiritually.

When we are born again, God does not save us into isolation.

He brings us into a spiritual family.

That family is called the church.

The church is not meant to be a cold institution, a weekly event, or a religious crowd.

It is meant to be a healing community where people learn to love God, love one another, grow in truth, and reveal His character to the world.`,
    scriptureRef: '1 John 1:3',
    scriptureQuote: `That which we have seen and heard declare we unto you, that ye also may have fellowship with us.

And truly our fellowship is with the Father, and with his Son Jesus Christ.`,
    scriptureAfterPrimary: `The gospel creates fellowship with God and with one another, not private religion alone.`,
    scriptureSecondaryRef: '1 John 1:4',
    scriptureSecondaryQuote: 'And these things write we unto you, that your joy may be full.',
    scriptureAfterSecondary: `Fellowship is part of God's design for full joy.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'John 13:34-35',
        quote: `A new commandment I give unto you, That ye love one another; as I have loved you.

By this shall all men know that ye are my disciples, if ye have love one to another.`,
      },
      {
        type: 'scripture',
        reference: 'Ephesians 2:19-22',
        quote:
          'Now therefore ye are no more strangers and foreigners, but fellowcitizens with the saints, and of the household of God.',
      },
    ],
    teachingPoints: [
      `1. Spiritual life includes fellowship

John says the message of Jesus creates fellowship.

The gospel does not only connect us to God privately.

It also connects us to one another.

To follow Jesus is to enter shared life with the Father, the Son, and the family of believers.

Christianity was never designed to be a solo mission.`,
      `2. Fellowship brings joy

John says he writes these things so "your joy may be full."

That means biblical fellowship is not a side benefit.

It is part of God's design for joy.

We were made for relationship.

Isolation weakens the soul.

Godly community helps nurture faith, healing, accountability, encouragement, and spiritual growth.`,
      `3. The church is a household

Paul says believers are no longer strangers and foreigners, but members of the household of God.

That is family language.

The church is not merely a building.

It is not merely an audience.

It is a household of people being built together in Christ.

Believers are not spectators.

They are family members.`,
      `4. Love identifies the disciples of Jesus

Jesus said the world would know His disciples by their love for one another.

Not by noise.

Not by performance.

Not by religious branding.

Love is the evidence.

The church reveals Jesus most clearly when its members practice the same self-giving love He has shown them.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Fellowship',
      lemma: 'κοινωνία',
      transliteration: 'koinonia',
      meaning: 'Shared life, spiritual connection, community, participation, and belonging.',
      strongs: 'G2842',
      reference: '1 John 1:3',
      note: `Biblical fellowship is deeper than casual socializing.

It means sharing life with God and with one another through truth, love, prayer, service, worship, and mutual care.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `God is a relational God.

The Father, Son, and Holy Spirit live in perfect love.

Human beings were created in God's image, which means we were designed for relationship.

Sin breaks relationship.

It separates us from God.
It separates us from one another.
It creates hiding, fear, pride, selfishness, and distrust.

Salvation restores relationship.

That restoration does not stop with private belief.

God gathers people into a community where His love can be practiced and revealed.

The church is meant to be that community.

Not perfect people.

Restored people.

Not people who never struggle.

People learning to love, forgive, serve, grow, and reveal Jesus together.`,
    },
    studyInsightBlocks: [
      {
        type: 'churchCommunityPattern',
        title: 'Born Into a Family',
        caption:
          'God saves us into a family where His love can be received, practiced, and revealed.',
      },
      {
        type: 'scriptureChain',
        title: 'Born Into a Family',
        references: [
          { reference: '1 John 1:1-4' },
          { reference: 'John 13:34-35' },
          { reference: 'Ephesians 2:19-22' },
          { reference: 'Acts 2:42' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: God does not save people into isolation. He brings believers into a spiritual family where fellowship, love, and growth can flourish.',
      },
    ],
    reflectPrompt: `Do you tend to see church more as a family, an event, an institution, or an obligation?

Think honestly about your experiences, disappointments, hopes, fears, and what kind of spiritual community you believe God wants for you.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, take one step toward healthier spiritual community.

Do not overcomplicate it.

Reach out to one believer.
Pray with someone.
Attend a Bible study.
Join a small group.
Encourage someone at church.
Ask someone how they are really doing.
Look for a place to serve.

If you have been hurt by church, do not pretend that pain is small.

But also do not let broken examples erase God's design.

The answer to unhealthy community is not permanent isolation.

It is healing, wisdom, and restored fellowship centered in Christ.

Prayer:

Father, thank You for not saving me into isolation. Thank You for calling me into Your family. Help me understand the church through Your love, not through fear, disappointment, or cold religion. Teach me how to give and receive fellowship in a healthy way. Grow me with other believers so Your love can be practiced and revealed through us. Amen.`,
    prayer: '',
    completionSummary: `God does not save people into isolation. He brings believers into a spiritual family where fellowship, love, healing, and growth can take place.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'btb-l1-q1',
          prompt: 'According to 1 John 1:3, what does the message of Jesus invite believers into?',
          options: [
            'Fellowship with God and one another',
            'Complete isolation',
            'Religious pride',
            'A life without community',
          ],
          correctIndex: 0,
          explanation:
            'John says the message is declared so believers may have fellowship with one another, and that fellowship is with the Father and His Son Jesus Christ.',
        },
        {
          id: 'btb-l1-q2',
          prompt: 'According to 1 John 1:4, what does fellowship help make full?',
          options: ['Joy', 'Fear', 'Pride', 'Confusion'],
          correctIndex: 0,
          explanation: 'John says these things are written so that our joy may be full.',
        },
        {
          id: 'btb-l1-q3',
          prompt: 'According to Ephesians 2:19, what are believers called?',
          options: [
            'Members of the household of God',
            'Strangers forever',
            'Spiritual outsiders',
            'People without belonging',
          ],
          correctIndex: 0,
          explanation:
            'Paul says believers are no longer strangers and foreigners, but fellow citizens with the saints and members of God\'s household.',
        },
        {
          id: 'btb-l1-q4',
          prompt: 'According to John 13:35, how will people know who Jesus\' disciples are?',
          options: [
            'By their love for one another',
            'By their arguments',
            'By their popularity',
            'By their isolation',
          ],
          correctIndex: 0,
          explanation: 'Jesus said all people would know His disciples by their love for one another.',
        },
        {
          id: 'btb-l1-q5',
          kind: 'reflection',
          prompt: 'What is one step you can take toward healthier fellowship with other believers?',
          explanation:
            'God designed spiritual growth to happen in community. The church is meant to be a family where His love is practiced and revealed.',
        },
      ],
    },
  },
  'the-fellowship-of-love': {
    openingThought: `Fellowship is deeper than sitting in the same room.

People can attend the same church and still remain strangers.

Biblical fellowship is shared life.

It is worshiping together.
Learning together.
Praying together.
Eating together.
Serving together.
Growing together.
Carrying one another through the ordinary and difficult parts of life.

God's church is meant to be a community where His love becomes visible through real connection.

Not surface-level religion.

Shared life with God and one another.`,
    scriptureRef: '1 John 1:3',
    scriptureQuote: `That which we have seen and heard declare we unto you, that ye also may have fellowship with us.

And truly our fellowship is with the Father, and with his Son Jesus Christ.`,
    scriptureAfterPrimary: `Christian fellowship begins with shared life in God, not mere social connection.`,
    scriptureSecondaryRef: '1 John 1:4',
    scriptureSecondaryQuote: 'And these things write we unto you, that your joy may be full.',
    scriptureAfterSecondary: `Full joy grows in fellowship shaped by the gospel.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Acts 2:42',
        quote:
          'And they continued stedfastly in the apostles\' doctrine and fellowship, and in breaking of bread, and in prayers.',
      },
      {
        type: 'scripture',
        reference: 'Acts 2:46-47',
        quote: `And they, continuing daily with one accord in the temple, and breaking bread from house to house, did eat their meat with gladness and singleness of heart.

Praising God, and having favour with all the people.`,
      },
      {
        type: 'scripture',
        reference: 'Hebrews 10:24-25',
        quote: `And let us consider one another to provoke unto love and to good works.

Not forsaking the assembling of ourselves together.`,
      },
    ],
    teachingPoints: [
      `1. Fellowship begins with God

John says our fellowship is with the Father and with His Son Jesus Christ.

That means Christian fellowship is not merely social connection.

It begins with shared life in God.

Believers are drawn together because they are first drawn into relationship with Him.

The church becomes healthy when fellowship with God shapes fellowship with one another.`,
      `2. Fellowship includes truth

Acts says the early believers continued in the apostles' doctrine.

They did not build community on shallow emotion alone.

They gathered around truth.

Scripture shaped their worship, beliefs, decisions, and shared life.

A healing community must be loving, but it must also be rooted in the truth of Jesus.`,
      `3. Fellowship includes prayer and shared life

The early church prayed together, broke bread together, and spent time together.

Their faith was not isolated.

They shared spiritual life and ordinary life.

This kind of fellowship creates space for encouragement, accountability, joy, and care.

The church is not only a place to attend.

It is a people to belong with.`,
      `4. Fellowship stirs love and good works

Hebrews says believers should consider one another and stir one another up to love and good works.

Healthy fellowship does not make people passive.

It helps them grow.

The right community encourages us to love better, serve more faithfully, and keep following Jesus when we feel weak.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Koinonia',
      lemma: 'κοινωνία',
      transliteration: 'koinonia',
      meaning: 'Fellowship, shared life, partnership, participation, and deep spiritual community.',
      strongs: 'G2842',
      reference: 'Acts 2:42',
      note: `Koinonia is more than friendship or casual church attendance.

It is a Spirit-shaped community where believers share life with God and one another through truth, prayer, love, service, and mission.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The early church gives us a pattern for biblical fellowship.

They were devoted to truth.
They prayed together.
They shared meals.
They worshiped together.
They cared for one another.
They lived with gladness and sincerity.
They had favor with the people around them.

That kind of community is powerful.

Not because it is flashy.

Because it is real.

The church becomes attractive when love is visible, truth is lived, needs are noticed, and people are not left to walk alone.

Fellowship is not optional decoration on the Christian life.

It is part of how God grows His people.`,
    },
    studyInsightBlocks: [
      {
        type: 'churchCommunityPattern',
        title: 'The Fellowship of Love',
        caption: 'Biblical fellowship is shared life with God and one another.',
        pillars: [
          { label: 'Truth', tagline: 'Scripture, doctrine, teaching, wisdom' },
          { label: 'Prayer', tagline: 'dependence, worship, intercession, surrender' },
          { label: 'Shared Life', tagline: 'meals, care, encouragement, belonging' },
          { label: 'Mission', tagline: 'love, good works, witness, service' },
        ],
      },
      {
        type: 'scriptureChain',
        title: 'The Fellowship of Love',
        references: [
          { reference: '1 John 1:3-4' },
          { reference: 'Acts 2:42-47' },
          { reference: 'Hebrews 10:24-25' },
          { reference: 'John 13:34-35' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: The church is a fellowship of shared life where believers grow through truth, prayer, love, and encouragement.',
      },
    ],
    reflectPrompt: `What kind of fellowship are you currently experiencing: surface-level attendance or shared spiritual life?

Think about whether you are known, encouraged, challenged, prayed for, connected, and growing with other believers.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, move one step from attendance toward fellowship.

Choose one simple action:

Pray with someone.
Invite someone into a real conversation.
Join a Bible study or small group.
Share a meal.
Ask for prayer.
Encourage someone who has been quiet.
Check on someone who may feel unseen.

Do not wait for perfect community before practicing fellowship.

Be the kind of person who helps make community healthier.

Prayer:

Father, thank You for calling me into fellowship with You and with other believers. Teach me to move beyond surface-level religion into shared life shaped by truth, prayer, love, and service. Help me give and receive encouragement with humility. Make Your church a healing community where people can grow together in Jesus. Amen.`,
    prayer: '',
    completionSummary: `Fellowship is shared life with God and one another. The church grows healthy when truth, prayer, love, and encouragement shape the community.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'btb-l2-q1',
          prompt: 'According to 1 John 1:3, Christian fellowship is with whom?',
          options: [
            'The Father, His Son Jesus Christ, and fellow believers',
            'Human popularity only',
            'Religious systems without God',
            'No one',
          ],
          correctIndex: 0,
          explanation:
            'John says believers have fellowship with one another, and truly their fellowship is with the Father and His Son Jesus Christ.',
        },
        {
          id: 'btb-l2-q2',
          prompt: 'According to Acts 2:42, what did the early believers continue in?',
          options: [
            'Doctrine, fellowship, breaking of bread, and prayers',
            'Isolation and pride',
            'Arguments only',
            'Entertainment without truth',
          ],
          correctIndex: 0,
          explanation:
            'Acts says the early church continued steadfastly in doctrine, fellowship, breaking of bread, and prayers.',
        },
        {
          id: 'btb-l2-q3',
          prompt: 'According to Hebrews 10:24, what should believers stir one another toward?',
          options: ['Love and good works', 'Fear and isolation', 'Pride and performance', 'Neglect and selfishness'],
          correctIndex: 0,
          explanation: 'Hebrews says believers should consider one another to provoke, or stir up, love and good works.',
        },
        {
          id: 'btb-l2-q4',
          prompt: 'What does biblical fellowship include?',
          options: [
            'Shared life with God and one another',
            'Mere attendance with no connection',
            'Private faith only',
            'Avoiding other believers',
          ],
          correctIndex: 0,
          explanation:
            'Biblical fellowship is shared life with God and other believers through truth, prayer, love, service, and mission.',
        },
        {
          id: 'btb-l2-q5',
          kind: 'reflection',
          prompt: 'What is one step you can take this week to move from attendance toward true fellowship?',
          explanation:
            'Fellowship grows when believers intentionally share life, pray together, encourage one another, and practice love.',
        },
      ],
    },
  },
  'a-community-being-healed': {
    openingThought: `The church is not a museum for perfect people.

It is a healing community for people being restored by Jesus.

That matters because many people avoid church because they know they are broken.

Others leave church because they discovered brokenness there.

But Scripture never describes the church as a place where flawless people gather to admire themselves.

The church is a family where forgiven people learn to heal, grow, confess, forgive, serve, and become whole together.

Jesus does not build His church with people who have never been wounded.

He builds it with people He is healing.`,
    scriptureRef: 'Acts 2:47',
    scriptureQuote: 'And the Lord added to the church daily such as should be saved.',
    scriptureAfterPrimary: `Salvation is a healing process. God adds people to the church so they can grow and be restored together.`,
    scriptureSecondaryRef: 'Galatians 6:1-2',
    scriptureSecondaryQuote: `Brethren, if a man be overtaken in a fault, ye which are spiritual, restore such an one in the spirit of meekness.

Bear ye one another's burdens, and so fulfil the law of Christ.`,
    scriptureAfterSecondary: `Restoration takes sin seriously and treats people gently. Burdens are meant to be carried together.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'James 5:16',
        quote:
          'Confess your faults one to another, and pray one for another, that ye may be healed.',
      },
      {
        type: 'scripture',
        reference: 'Matthew 9:12-13',
        quote: `They that be whole need not a physician, but they that are sick.

I am not come to call the righteous, but sinners to repentance.`,
      },
    ],
    teachingPoints: [
      `1. The church is a place where people are being saved

Acts says the Lord added to the church those who were being saved.

Salvation is not only a moment of decision.

It is also a healing process.

God brings people into community so they can grow, learn, be restored, and become whole.

The church is not made of finished products.

It is made of people under grace.`,
      `2. Restoration requires meekness

Galatians says when someone is overtaken in a fault, the spiritual response is restoration in meekness.

Not gossip.

Not superiority.

Not public humiliation.

Not pretending sin does not matter.

Restoration means we take sin seriously while treating people gently.

A healing community tells the truth with humility.`,
      `3. Burdens are meant to be carried together

Paul says, "Bear ye one another's burdens."

That is church language.

Nobody should have to carry grief, temptation, weakness, doubt, or pain alone.

Healthy fellowship makes room for burden-bearing.

Sometimes healing begins when someone finally has a safe place to say, "I'm not okay."`,
      `4. Confession and prayer create healing

James says to confess faults and pray for one another so healing can happen.

This does not mean careless oversharing with unsafe people.

It means that in godly community, honesty and prayer become part of restoration.

Sin grows in secrecy.

Healing grows in truth, grace, and prayer.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Restore',
      lemma: 'καταρτίζω',
      transliteration: 'katartizo',
      meaning: 'To mend, repair, bring back, or make whole again.',
      strongs: 'G2675',
      reference: 'Galatians 6:1',
      note: `Biblical restoration is not ignoring sin or crushing the sinner.

It is God's loving work of bringing wounded and fallen people back into wholeness through truth, grace, repentance, and community.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `A healing church must avoid two dangerous extremes.

The first extreme is pretending sin does not matter.

That is not love.

Sin damages people, relationships, and community.

The second extreme is treating broken people like they are disposable.

That is not love either.

Jesus restores.

So His church should become a place where restoration is practiced.

That means truth without cruelty.

Grace without compromise.

Accountability without shame.

Prayer without performance.

Honesty without gossip.

Support without superiority.

The church becomes healing when people stop pretending they are whole and start bringing their brokenness to Jesus together.`,
    },
    studyInsightBlocks: [
      {
        type: 'churchCommunityPattern',
        title: 'A Community Being Healed',
        caption: 'The church is not a museum for perfection. It is a family where Jesus restores people.',
        pillars: [
          { label: 'Truth', tagline: 'sin is named honestly' },
          { label: 'Grace', tagline: 'people are not discarded' },
          { label: 'Prayer', tagline: 'burdens are brought to God' },
          { label: 'Restoration', tagline: 'people are helped back toward wholeness' },
        ],
      },
      {
        type: 'scriptureChain',
        title: 'A Community Being Healed',
        references: [
          { reference: 'Acts 2:47' },
          { reference: 'Galatians 6:1-2' },
          { reference: 'James 5:16' },
          { reference: 'Matthew 9:12-13' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: The church is a healing community where broken people are restored through truth, grace, prayer, and burden-bearing love.',
      },
    ],
    reflectPrompt: `Where do you need healing, restoration, or burden-bearing within spiritual community?

Think about guilt, grief, temptation, church hurt, loneliness, shame, conflict, weakness, or a burden you have been carrying alone.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, take one honest step toward healing community.

Choose one:

Ask someone trustworthy to pray with you.
Encourage someone who is struggling.
Stop gossiping and start restoring.
Carry someone's burden in a practical way.
Confess a struggle to a spiritually mature person.
Apologize where you have caused harm.
Offer grace to someone without pretending sin does not matter.

Do not confuse privacy with isolation.

Not everyone needs access to your wounds, but someone godly should be able to walk with you toward healing.

Prayer:

Father, thank You for creating a church where broken people can be restored by Jesus. Help me stop pretending, hiding, or judging from a distance. Teach me to receive healing and to help others heal with humility. Make me the kind of person who carries burdens, prays honestly, speaks truth in love, and reflects Your restoring grace. Amen.`,
    prayer: '',
    completionSummary: `The church is a healing community, not a museum for perfect people. Jesus restores broken people through truth, grace, prayer, and love.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'btb-l3-q1',
          prompt: 'According to Acts 2:47, who added people to the church?',
          options: ['The Lord', 'Human pride', 'Religious popularity', 'Political power'],
          correctIndex: 0,
          explanation: 'Acts says the Lord added to the church daily those who were being saved.',
        },
        {
          id: 'btb-l3-q2',
          prompt: 'According to Galatians 6:1, how should someone overtaken in a fault be restored?',
          options: ['In the spirit of meekness', 'With arrogance', 'Through gossip', 'By public shame'],
          correctIndex: 0,
          explanation: 'Paul says restoration should happen in a spirit of meekness, showing humility and grace.',
        },
        {
          id: 'btb-l3-q3',
          prompt: 'According to Galatians 6:2, what should believers bear for one another?',
          options: ['Burdens', 'Pride', 'Resentment', 'Suspicion'],
          correctIndex: 0,
          explanation: 'Paul says believers should bear one another\'s burdens and so fulfill the law of Christ.',
        },
        {
          id: 'btb-l3-q4',
          prompt: 'According to James 5:16, what should believers do for one another?',
          options: [
            'Confess faults and pray for one another',
            'Hide everything forever',
            'Compete spiritually',
            'Ignore each other\'s pain',
          ],
          correctIndex: 0,
          explanation: 'James connects confession, prayer, and healing within the community of faith.',
        },
        {
          id: 'btb-l3-q5',
          kind: 'reflection',
          prompt: 'What is one burden you need to stop carrying alone?',
          explanation:
            'God designed the church to be a healing community where believers carry burdens, pray together, and restore one another in love.',
        },
      ],
    },
  },
  'called-to-proclaim-his-praise': {
    openingThought: `The church does not exist just to gather.

It exists to reveal.

God calls His people to proclaim who He is.

Not merely to argue religious facts.

Not merely to defend a label.

Not merely to win debates.

The church is called to show the world the beauty of God's character as revealed in Jesus.

Truth matters.

Doctrine matters.

But truth is meant to reveal a Person.

The church's message is not, "Look how right we are."

The church's message is, "Look how good God is."`,
    scriptureRef: '1 Peter 2:9',
    scriptureQuote: `Ye are a chosen generation, a royal priesthood, an holy nation, a peculiar people.

That ye should shew forth the praises of him who hath called you out of darkness into his marvellous light.`,
    scriptureAfterPrimary: `God calls His people into light so they can show forth His praises to the world.`,
    scriptureSecondaryRef: '2 Corinthians 4:6',
    scriptureSecondaryQuote: `For God, who commanded the light to shine out of darkness, hath shined in our hearts.

To give the light of the knowledge of the glory of God in the face of Jesus Christ.`,
    scriptureAfterSecondary: `The glory of God is seen most clearly in the face of Jesus Christ.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: '2 Corinthians 4:4',
        quote:
          'The light of the glorious gospel of Christ, who is the image of God, should shine unto them.',
      },
      {
        type: 'scripture',
        reference: 'Matthew 28:19-20',
        quote: `Go ye therefore, and teach all nations.

Teaching them to observe all things whatsoever I have commanded you.`,
      },
      {
        type: 'scripture',
        reference: 'John 17:18',
        quote: 'As thou hast sent me into the world, even so have I also sent them into the world.',
      },
    ],
    teachingPoints: [
      `1. God calls His people out of darkness

Peter says God calls His people out of darkness into His marvelous light.

This is the story of salvation.

God does not leave us in confusion, guilt, fear, and brokenness.

He brings us into light.

But the light we receive is not meant to stop with us.

Those who are brought into light are called to reflect it.`,
      `2. The church proclaims God's praises

Peter says God's people are called to show forth His praises.

This means the church's message is centered on God's character.

We proclaim His mercy.
His justice.
His faithfulness.
His patience.
His holiness.
His grace.
His self-giving love.

The church exists to make God known.`,
      `3. Jesus is the clearest revelation of God

Second Corinthians says the glory of God is seen in the face of Jesus Christ.

That means the church must keep Jesus at the center.

If our message does not look like Jesus, something is off.

Every doctrine, teaching, sermon, study, and act of witness should help people see God more clearly through Christ.`,
      `4. Proclamation includes teaching and sending

Jesus told His followers to go, teach, and make disciples.

The church is not called to hide with truth.

It is sent into the world with truth.

But the spirit of the message matters.

Truth should be spoken with love, humility, clarity, and the desire to restore.

A harsh spirit can make a true message look false.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Proclaim',
      lemma: 'ἐξαγγέλλω',
      transliteration: 'exaggello',
      meaning: 'To announce, declare, make known, or openly communicate a message.',
      strongs: 'G1804',
      reference: '1 Peter 2:9',
      note: `Biblical proclamation is not merely repeating religious information.

It is revealing the character of God through the message of Jesus, the witness of the church, and a life shaped by love.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The church's message is powerful because it is positive at its core.

It announces who God is.

God is not trying to remain hidden.

He has revealed Himself in Jesus.

The church is called to hold up that revelation before the world.

This means proclamation is more than content.

It is also character.

The way believers treat one another affects the believability of the message.

The way truth is spoken matters.

The way service is practiced matters.

The way conflict is handled matters.

The way mercy is shown matters.

A church may have correct words, but if those words are wrapped in pride, hostility, or coldness, the world will struggle to see the beauty of God.

Truth must be carried by love.`,
    },
    studyInsightBlocks: [
      {
        type: 'studyVisual',
        title: 'Proclaim His Praise',
        accent: 'sky',
        description: 'The church proclaims God\'s praise by revealing His character through Jesus.',
        payload: {
          variant: 'sequence',
          steps: [
            {
              label: 'God\'s Character',
              subtitle: 'love, justice, mercy, holiness, faithfulness',
            },
            {
              label: 'Revealed in Jesus',
              subtitle: 'the face of God\'s glory',
            },
            {
              label: 'Proclaimed by the Church',
              subtitle: 'teaching, witness, service, love',
            },
            {
              label: 'Seen by the World',
              subtitle: 'light in darkness',
            },
          ],
        },
      },
      {
        type: 'scriptureChain',
        title: 'Proclaim His Praise',
        references: [
          { reference: '1 Peter 2:9' },
          { reference: '2 Corinthians 4:4-6' },
          { reference: 'Matthew 28:19-20' },
          { reference: 'John 17:18' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: The church exists to proclaim the beauty of God\'s character, revealed most clearly in Jesus Christ.',
      },
    ],
    reflectPrompt: `When people see your faith, what picture of God do they receive?

Think about your tone, words, relationships, online presence, service, humility, truthfulness, and whether your life makes God look beautiful or burdensome.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, proclaim God's praise in one simple way.

Not with pressure.

Not with performance.

Make God visible through your life.

Share a Scripture that reveals His character.
Tell someone what God has done for you.
Speak truth with gentleness.
Serve someone quietly.
Encourage someone with hope.
Apologize where your attitude misrepresented Him.
Let your online words look more like Jesus.

Ask one honest question before you speak or post:

"Does this help someone see God more clearly?"

That question will save you from a lot of spiritual nonsense. Necessary medicine. Take it.

Prayer:

Father, thank You for calling me out of darkness into Your marvelous light. Help me proclaim Your praises with my words, actions, tone, and relationships. Keep Jesus at the center of my witness. Teach me to speak truth with love and to live in a way that makes Your character clear and beautiful to others. Amen.`,
    prayer: '',
    completionSummary: `The church is called to proclaim the beauty of God's character. Truth becomes believable when it is centered in Jesus and carried by love.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'btb-l4-q1',
          prompt: 'According to 1 Peter 2:9, what has God called His people out of?',
          options: [
            'Darkness into His marvelous light',
            'Love into fear',
            'Truth into confusion',
            'Fellowship into isolation',
          ],
          correctIndex: 0,
          explanation: 'Peter says God has called His people out of darkness into His marvelous light.',
        },
        {
          id: 'btb-l4-q2',
          prompt: 'According to 1 Peter 2:9, what are God\'s people called to show forth?',
          options: [
            'The praises of Him who called them',
            'Their own superiority',
            'Their personal fame',
            'Their religious arguments only',
          ],
          correctIndex: 0,
          explanation:
            'Peter says God\'s people are called to show forth His praises, meaning they reveal His character and goodness.',
        },
        {
          id: 'btb-l4-q3',
          prompt: 'According to 2 Corinthians 4:6, where is the glory of God revealed?',
          options: [
            'In the face of Jesus Christ',
            'In human pride',
            'In selfish ambition',
            'In darkness',
          ],
          correctIndex: 0,
          explanation: 'Paul says the knowledge of the glory of God is seen in the face of Jesus Christ.',
        },
        {
          id: 'btb-l4-q4',
          prompt: 'According to Matthew 28:19-20, what did Jesus command His followers to do?',
          options: [
            'Go, teach, baptize, and make disciples',
            'Hide the gospel',
            'Avoid teaching truth',
            'Keep faith private forever',
          ],
          correctIndex: 0,
          explanation:
            'Jesus gave His followers the mission of teaching all nations, baptizing, and making disciples.',
        },
        {
          id: 'btb-l4-q5',
          kind: 'reflection',
          prompt: 'What is one way your life can make God\'s character clearer to someone this week?',
          explanation:
            'The church proclaims God\'s praise not only through words, but through a life that reflects Jesus.',
        },
      ],
    },
  },
  'truth-spoken-in-love': {
    openingThought: `Truth matters.

But the way truth is carried matters too.

A church can say true things in a way that wounds people unnecessarily.

A person can defend doctrine while misrepresenting the character of Jesus.

That is not spiritual maturity.

God calls His people to speak the truth in love.

Not truth without love.

Not love without truth.

Both.

Truth gives love direction.

Love gives truth the right spirit.

The church grows healthy when believers learn to hold conviction and compassion together.`,
    scriptureRef: 'Ephesians 4:15',
    scriptureQuote:
      'But speaking the truth in love, may grow up into him in all things, which is the head, even Christ.',
    scriptureAfterPrimary: `Truth spoken in love helps believers grow up into Christ, the head of the church.`,
    scriptureSecondaryRef: 'Ephesians 4:1-3',
    scriptureSecondaryQuote: `Walk worthy of the vocation wherewith ye are called.

With all lowliness and meekness, with longsuffering, forbearing one another in love.

Endeavouring to keep the unity of the Spirit in the bond of peace.`,
    scriptureAfterSecondary: `Worthy living includes humility, patience, love, and unity in the Spirit.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Colossians 3:12-14',
        quote: `Put on therefore... bowels of mercies, kindness, humbleness of mind, meekness, longsuffering.

And above all these things put on charity, which is the bond of perfectness.`,
      },
      {
        type: 'scripture',
        reference: 'John 17:21',
        quote:
          'That they all may be one... that the world may believe that thou hast sent me.',
      },
    ],
    teachingPoints: [
      `1. Truth is necessary for growth

Ephesians says believers grow up into Christ by speaking the truth in love.

Truth helps the church mature.

Without truth, community becomes shallow.

Sin gets ignored.
Confusion spreads.
People stay stuck.
Love loses direction.

God's people need truth because truth protects, corrects, guides, and heals.`,
      `2. Love is necessary for how truth is spoken

Paul does not say, "Speak truth however you want."

He says to speak the truth in love.

Love shapes the tone, timing, motive, and method.

Truth spoken with pride can crush.

Truth spoken with impatience can harden.

Truth spoken with love can restore.`,
      `3. Unity requires humility

Ephesians calls believers to lowliness, meekness, patience, and love.

Unity does not happen because everyone is naturally easy to love.

Unity grows when people choose humility over ego.

The church becomes healthier when believers are willing to listen, forgive, learn, and pursue peace without compromising truth.`,
      `4. Love holds the community together

Colossians says love is the bond of perfectness.

Love does not mean avoiding difficult conversations.

It means difficult conversations are carried with Christlike character.

God's people are called to be truthful and tender.

Clear and patient.

Convicted and humble.

That combination is rare, but it is deeply needed.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Unity',
      lemma: 'ἑνότης',
      transliteration: 'henotes',
      meaning: 'Oneness, harmony, shared purpose, and spiritual togetherness.',
      strongs: 'G1775',
      reference: 'Ephesians 4:3',
      note: `Biblical unity is not pretending differences do not exist.

It is believers being joined together in Christ through truth, love, humility, and the Spirit.

Unity is not built by avoiding truth or weaponizing it.

It is built by speaking truth in love.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The church must reject two unhealthy extremes.

The first extreme is truth without love.

This creates cold religion, harsh correction, pride, fear, and spiritual injury.

The second extreme is love without truth.

This creates shallow community, confusion, compromise, and avoidance.

Jesus gives us a better way.

He is full of grace and truth.

He tells the truth without cruelty.

He shows mercy without pretending sin is harmless.

He corrects because He loves.

He restores because He is faithful.

A healthy church learns to sound more like Jesus.

Not just right.

Christlike.`,
    },
    studyInsightBlocks: [
      {
        type: 'studyVisual',
        title: 'Truth Spoken in Love',
        accent: 'sage',
        description: 'The church grows when truth is carried by love.',
        payload: {
          variant: 'sequence',
          steps: [
            {
              label: 'Truth Without Love',
              subtitle: 'harsh, cold, proud, wounding',
            },
            {
              label: 'Love Without Truth',
              subtitle: 'shallow, unclear, avoidant, weak',
            },
            {
              label: 'Truth in Love',
              subtitle: 'clear, humble, patient, restoring',
            },
          ],
        },
      },
      {
        type: 'scriptureChain',
        title: 'Truth Spoken in Love',
        references: [
          { reference: 'Ephesians 4:1-16' },
          { reference: 'Colossians 3:12-14' },
          { reference: 'John 17:20-23' },
          { reference: 'John 1:14' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: God calls the church to grow in maturity by speaking truth with humility, patience, unity, and love.',
      },
    ],
    reflectPrompt: `Which do you struggle with more: speaking truth without enough love, or avoiding truth because you want to keep peace?

Think about conflict, correction, family, church relationships, social media, and the way you respond when people disagree with you.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, practice truth with love.

Before you correct, respond, post, or confront, ask:

"Is this true?"

Then ask:

"Is this loving?"

Then ask one more question:

"Does this sound like Jesus?"

That last question is where most people get exposed. Good. Let it do its job.

If the answer is no, pause.

Pray.

Adjust your tone.

Choose humility.

Speak clearly, but do not use truth as a weapon.

Prayer:

Father, teach me to speak truth in love. Keep me from harshness, pride, avoidance, and fear. Help me care about truth without losing compassion, and help me show love without compromising what is right. Make me more like Jesus in my words, tone, motives, and relationships. Build unity in Your church through grace and truth. Amen.`,
    prayer: '',
    completionSummary: `The church grows when truth is spoken in love. God calls His people to carry conviction with humility, patience, unity, and the spirit of Jesus.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'btb-l5-q1',
          prompt: 'According to Ephesians 4:15, how should believers speak the truth?',
          options: ['In love', 'In pride', 'In anger only', 'Without patience'],
          correctIndex: 0,
          explanation: 'Paul says believers grow by speaking the truth in love.',
        },
        {
          id: 'btb-l5-q2',
          prompt: 'According to Ephesians 4:2, what attitudes should believers show?',
          options: [
            'Lowliness, meekness, longsuffering, and love',
            'Pride, impatience, and harshness',
            'Anger, gossip, and coldness',
            'Control, fear, and superiority',
          ],
          correctIndex: 0,
          explanation:
            'Paul calls believers to humility, meekness, patience, and love as part of worthy Christian living.',
        },
        {
          id: 'btb-l5-q3',
          prompt: 'According to Colossians 3:14, what is the bond of perfectness?',
          options: ['Love', 'Pride', 'Popularity', 'Winning arguments'],
          correctIndex: 0,
          explanation: 'Colossians says above all things, believers should put on love, which is the bond of perfectness.',
        },
        {
          id: 'btb-l5-q4',
          prompt: 'Why does unity matter according to John 17:21?',
          options: [
            'So the world may believe the Father sent Jesus',
            'So believers can avoid truth forever',
            'So no one ever grows',
            'So people can become spiritually isolated',
          ],
          correctIndex: 0,
          explanation:
            'Jesus prayed that His people would be one so the world may believe that the Father sent Him.',
        },
        {
          id: 'btb-l5-q5',
          kind: 'reflection',
          prompt: 'What is one conversation where you need to practice truth with love?',
          explanation:
            'Healthy Christian community grows when believers speak honestly with humility, patience, and Christlike love.',
        },
      ],
    },
  },
  'gifts-for-ministry': {
    openingThought: `The church is not built for spectators.

God gives every believer a place in His work.

Not everyone has the same gift.
Not everyone serves in the same way.
Not everyone has the same assignment.

But every believer matters.

The church becomes healthier when people stop asking only, "What can I receive here?" and begin asking, "How has God gifted me to serve here?"

Spiritual gifts are not trophies for personal attention.

They are tools for ministry.

God gives grace to each person so the whole body can grow.`,
    scriptureRef: 'Ephesians 4:7',
    scriptureQuote: 'But unto every one of us is given grace according to the measure of the gift of Christ.',
    scriptureAfterPrimary: `Grace for ministry is given to every believer, not only to visible leaders.`,
    scriptureSecondaryRef: 'Ephesians 4:11-12',
    scriptureSecondaryQuote: `And he gave some, apostles; and some, prophets; and some, evangelists; and some, pastors and teachers.

For the perfecting of the saints, for the work of the ministry, for the edifying of the body of Christ.`,
    scriptureAfterSecondary: `Gifts equip the saints for ministry and build up the body of Christ.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: '1 Corinthians 12:4-7',
        quote: `Now there are diversities of gifts, but the same Spirit.

But the manifestation of the Spirit is given to every man to profit withal.`,
      },
      {
        type: 'scripture',
        reference: 'Romans 12:4-6',
        quote: `For as we have many members in one body, and all members have not the same office.

So we, being many, are one body in Christ.

Having then gifts differing according to the grace that is given to us.`,
      },
    ],
    teachingPoints: [
      `1. Every believer receives grace for service

Ephesians says grace is given to every one of us according to the gift of Christ.

That means ministry is not reserved for a small group of visible leaders.

Every believer has a role.

Some roles are public.

Some are quiet.

Some are teaching roles.

Some are serving roles.

But all of them matter when they are surrendered to God.`,
      `2. Gifts are given to build the church

Ephesians says gifts are given for the perfecting of the saints, the work of ministry, and the building up of the body of Christ.

Spiritual gifts are not about personal spotlight.

They are for strengthening others.

If a gift makes us proud, we are using it wrong.

If a gift helps others grow closer to Christ, it is serving its purpose.`,
      `3. Different gifts come from the same Spirit

First Corinthians says there are different gifts, but the same Spirit.

This protects the church from comparison.

A teaching gift is not more loved by God than a mercy gift.

A visible gift is not more valuable than a quiet gift.

A public role is not more spiritual than faithful service behind the scenes.

The Spirit gives different gifts for one body.`,
      `4. The church is one body with many members

Romans compares the church to a body.

A body needs many parts.

Eyes cannot do what hands do.

Feet cannot do what ears do.

Each part has a function, and the whole body suffers when parts refuse to serve.

Belonging includes participation.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Ministry',
      lemma: 'διακονία',
      transliteration: 'diakonia',
      meaning: 'Service, work, or practical care done for God and for the good of others.',
      strongs: 'G1248',
      reference: 'Ephesians 4:12',
      note: `Ministry is not only preaching from a platform.

Ministry is Spirit-shaped service.

God gives gifts so believers can strengthen the church, meet needs, proclaim truth, show mercy, and help others grow in Christ.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `A healthy church does not treat people like an audience.

It helps people become equipped servants.

That is the point of spiritual gifts.

God gives gifts to the body so the body can grow.

Some people teach.

Some encourage.

Some serve.

Some give.

Some lead.

Some show mercy.

Some organize.

Some pray.

Some welcome.

Some help carry burdens quietly.

The danger is thinking only visible gifts matter.

That is not how the body works.

A church may notice the mouth, but it cannot live without the lungs.

God sees hidden faithfulness.

The question is not, "Do I have an impressive gift?"

The question is, "Am I willing to use what God gave me to bless the body?"`,
    },
    studyInsightBlocks: [
      {
        type: 'studyVisual',
        title: 'Gifts for Ministry',
        accent: 'sage',
        description: 'Every believer receives grace for ministry.',
        payload: {
          variant: 'sequence',
          steps: [
            {
              label: 'One Body',
              subtitle: 'Christ as the head',
            },
            {
              label: 'Many Members',
              subtitle:
                'teaching, service, mercy, giving, leadership, encouragement, prayer, hospitality',
            },
            {
              label: 'Purpose',
              subtitle: 'building up the church and blessing the world',
            },
          ],
        },
      },
      {
        type: 'scriptureChain',
        title: 'Gifts for Ministry',
        references: [
          { reference: 'Ephesians 4:7-12' },
          { reference: '1 Corinthians 12:4-7' },
          { reference: 'Romans 12:4-8' },
          { reference: '1 Peter 4:10' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: God gives every believer grace and gifts so the whole church can serve, grow, and reveal Christ together.',
      },
    ],
    reflectPrompt: `Where might God be calling you to move from only receiving to actively serving?

Think about your abilities, burdens, interests, spiritual gifts, church needs, and the ways people are strengthened when you show up faithfully.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, ask God one direct question:

"Lord, how have You gifted me to serve?"

Then take one practical step.

Offer to help.
Encourage someone.
Join a ministry team.
Pray for someone intentionally.
Use a skill quietly.
Ask a leader where help is needed.
Serve without needing attention.

Do not wait until you feel perfectly ready.

Growth often happens while serving.

Start small.

Be faithful.

Let God develop the gift as you use it.

Prayer:

Father, thank You for giving grace to every believer. Help me stop seeing church as something I only attend and start seeing it as a body I belong to and serve. Show me the gifts, abilities, and opportunities You have placed in my life. Teach me to use them with humility, love, and faithfulness so others are built up in Jesus. Amen.`,
    prayer: '',
    completionSummary: `Every believer receives grace for ministry. God gives different gifts so the whole church can grow, serve, and reveal Christ together.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'btb-l6-q1',
          prompt: 'According to Ephesians 4:7, what is given to every believer?',
          options: [
            'Grace according to the gift of Christ',
            'A reason to boast',
            'The same exact role',
            'Permission to avoid service',
          ],
          correctIndex: 0,
          explanation:
            'Ephesians says grace is given to every believer according to the measure of the gift of Christ.',
        },
        {
          id: 'btb-l6-q2',
          prompt: 'According to Ephesians 4:12, why are gifts given?',
          options: [
            'For equipping the saints, ministry, and building up the body of Christ',
            'For personal attention only',
            'For spiritual competition',
            'For avoiding growth',
          ],
          correctIndex: 0,
          explanation:
            'Ephesians says gifts are given to equip the saints for ministry and build up the body of Christ.',
        },
        {
          id: 'btb-l6-q3',
          prompt: 'According to 1 Corinthians 12:4-7, who gives different gifts?',
          options: ['The same Spirit', 'Human pride', 'Personal ambition only', 'Random chance'],
          correctIndex: 0,
          explanation: 'Paul says there are different gifts, but the same Spirit gives them for the good of all.',
        },
        {
          id: 'btb-l6-q4',
          prompt: 'According to Romans 12, how is the church described?',
          options: [
            'One body with many members',
            'A crowd of isolated spectators',
            'A place where only leaders matter',
            'A community without service',
          ],
          correctIndex: 0,
          explanation: 'Romans compares believers to one body with many members, each having different functions.',
        },
        {
          id: 'btb-l6-q5',
          kind: 'reflection',
          prompt: 'What is one gift, skill, or burden God may be asking you to use for ministry?',
          explanation:
            'Spiritual gifts are not for personal spotlight. They are given so believers can serve, strengthen the church, and bless others.',
        },
      ],
    },
  },
  'love-that-serves-the-world': {
    openingThought: `The church is not called to exist for itself.

God's people are called to reveal His love to the world.

That love is not only spoken.

It is served.

It feeds the hungry.
It lifts the burdened.
It notices the wounded.
It protects the vulnerable.
It treats strangers with mercy.
It brings good news to people who feel forgotten.

A church that only gathers inward but never serves outward has missed part of its mission.

God builds a community of love so His love can move through that community into the world.`,
    scriptureRef: 'Isaiah 58:6-7',
    scriptureQuote: `Is not this the fast that I have chosen? to loose the bands of wickedness, to undo the heavy burdens.

Is it not to deal thy bread to the hungry, and that thou bring the poor that are cast out to thy house?`,
    scriptureAfterPrimary: `True worship includes mercy that meets real needs in real lives.`,
    scriptureSecondaryRef: 'Matthew 22:37-39',
    scriptureSecondaryQuote: `Thou shalt love the Lord thy God with all thy heart, and with all thy soul, and with all thy mind.

And the second is like unto it, Thou shalt love thy neighbour as thyself.`,
    scriptureAfterSecondary: `Love for God and love for neighbor belong together in the life of faith.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Luke 10:33-34',
        quote: `But a certain Samaritan, as he journeyed, came where he was: and when he saw him, he had compassion on him.

And went to him, and bound up his wounds.`,
      },
      {
        type: 'scripture',
        reference: 'Matthew 7:12',
        quote:
          'Therefore all things whatsoever ye would that men should do to you, do ye even so to them.',
      },
    ],
    teachingPoints: [
      `1. God cares about practical needs

Isaiah shows that true religion is not only ritual.

God cares about burdens being lifted, the hungry being fed, the oppressed being helped, and the vulnerable being cared for.

Worship that never becomes mercy is incomplete.

God's love reaches real needs in real lives.`,
      `2. Love for God leads to love for neighbor

Jesus connects love for God with love for neighbor.

These cannot be separated.

If we say we love God but ignore people made in His image, something is broken.

The church reveals God's love by loving people in practical, visible ways.`,
      `3. Mercy moves toward the wounded

In the story of the good Samaritan, the Samaritan sees the wounded man and moves toward him.

He does not simply feel compassion.

He acts.

He comes close.
He binds wounds.
He gives resources.
He carries the burden.

Biblical love does not admire mercy from a distance.

It crosses the road.`,
      `4. Service reflects God's character

Matthew 7:12 teaches us to treat others the way we would want to be treated.

This is simple, but not shallow.

It calls the church to empathy, fairness, kindness, and practical care.

When believers serve with humility, the world gets a clearer picture of God's heart.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Mercy',
      lemma: 'ἔλεος',
      transliteration: 'eleos',
      meaning: 'Compassion in action toward someone in need, weakness, suffering, or distress.',
      strongs: 'G1656',
      reference: 'Luke 10:33',
      note: `Mercy is not only feeling sorry for someone.

Mercy moves.

It sees need, comes near, and acts with love.

God's church is called to be a community where mercy becomes visible.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `Built to Belong has shown one clear picture of the church:

God brings believers into a family.

That family grows through fellowship.

That fellowship becomes a healing community.

That community proclaims God's praise.

That proclamation must be carried with truth and love.

Every believer receives gifts for ministry.

And the whole church is sent to serve the world.

This is the balance.

The church gathers and scatters.

It receives and gives.

It heals inwardly and serves outwardly.

It worships God and loves the neighbor.

A healthy church does not only ask:

"How can we grow bigger?"

It asks:

"How can we reveal God's love more clearly?"

That is the point.

The church exists so the world can see what God's love looks like when it becomes community, truth, mercy, and service.`,
    },
    studyInsightBlocks: [
      {
        type: 'churchCommunityPattern',
        title: 'Love That Serves the World',
        caption:
          'The church is God\'s community for fellowship, healing, proclamation, and service.',
      },
      {
        type: 'scriptureChain',
        title: 'Love That Serves',
        references: [
          { reference: 'Isaiah 58:6-11' },
          { reference: 'Matthew 22:37-39' },
          { reference: 'Luke 10:30-37' },
          { reference: 'Matthew 7:12' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: The church reveals God\'s love by serving practical needs, showing mercy, and blessing the world.',
      },
    ],
    reflectPrompt: `Where is God inviting you to serve someone outside of yourself?

Think about your neighborhood, church, family, workplace, online community, the poor, the lonely, the overwhelmed, or someone wounded who needs mercy.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, practice love that serves.

Choose one concrete act of mercy.

Feed someone.
Check on someone.
Help someone carry a burden.
Give to a practical need.
Visit someone lonely.
Pray with someone hurting.
Serve without needing attention.
Stand up for someone being treated unfairly.

Keep it real.

Do not make service theoretical.

Ask:

"What need can I meet with what God has placed in my hands?"

Then act.

A church becomes healing when its people stop waiting for someone else to be the hands and feet of Jesus.

Prayer:

Father, thank You for building a community that belongs to You. Thank You for calling Your church to fellowship, healing, truth, ministry, and service. Open my eyes to the needs around me. Teach me to love my neighbor with practical mercy. Use my gifts, time, resources, and presence to reveal the heart of Jesus to the world. Amen.`,
    prayer: '',
    completionSummary: `You have completed Built to Belong. God is building a restored community where His love is experienced, practiced, proclaimed, and shared through fellowship, healing, truth, ministry, and service.`,
    seriesCompleteScreen: {
      title: 'Study Complete',
      message:
        'You have completed Built to Belong. God is building a restored community where His love is experienced, practiced, proclaimed, and shared through fellowship, healing, truth, ministry, and service.',
      primaryCta: { label: 'Back to Foundations Path', href: '/paths/foundations' },
      secondaryCta: {
        label: 'Review this study',
        href: '/study-library/built-to-belong',
      },
    },
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'btb-l7-q1',
          prompt: 'According to Isaiah 58:6-7, what kind of service does God care about?',
          options: [
            'Lifting burdens, feeding the hungry, and caring for the vulnerable',
            'Religious activity without mercy',
            'Ignoring people in need',
            'Worship that never touches real life',
          ],
          correctIndex: 0,
          explanation:
            'Isaiah shows that God cares about justice, mercy, feeding the hungry, lifting burdens, and caring for people in need.',
        },
        {
          id: 'btb-l7-q2',
          prompt: 'According to Matthew 22:37-39, what two loves are central?',
          options: [
            'Love for God and love for neighbor',
            'Love for status and comfort',
            'Love for money and attention',
            'Love for power and control',
          ],
          correctIndex: 0,
          explanation: 'Jesus summarized God\'s commands as love for God and love for neighbor.',
        },
        {
          id: 'btb-l7-q3',
          prompt: 'In Luke 10, what did the Samaritan do when he saw the wounded man?',
          options: [
            'He had compassion and helped him',
            'He ignored him',
            'He blamed him',
            'He walked away quickly',
          ],
          correctIndex: 0,
          explanation:
            'The Samaritan saw the wounded man, had compassion, came near, and cared for his wounds.',
        },
        {
          id: 'btb-l7-q4',
          prompt: 'According to Matthew 7:12, how should we treat others?',
          options: [
            'As we would want them to treat us',
            'As if they do not matter',
            'Only when it benefits us',
            'With indifference',
          ],
          correctIndex: 0,
          explanation: 'Jesus teaches us to treat others the way we would want to be treated.',
        },
        {
          id: 'btb-l7-q5',
          kind: 'reflection',
          prompt: 'What is one practical act of mercy God is calling you to do this week?',
          explanation:
            'The church reveals God\'s love when believers serve real needs with humility, compassion, and action.',
        },
      ],
    },
  },
}
