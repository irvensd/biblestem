import type { LessonContentBlock } from '@/lib/lesson-content-blocks'
import type { LessonReaderContent } from '@/lib/lesson-content'
import type { LessonQuizPayload } from '@/lib/lesson-quiz-types'
import { SANCTUARY_JOURNEY_STAGES, type SanctuaryJourneyStageData } from '@/lib/sanctuary-journey-stages'

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

const sanctuaryOverviewBlocks: LessonContentBlock[] = [
  {
    type: 'sanctuaryJourneyMap',
    title: 'The Way Back to God',
    subtitle: 'The sanctuary shows the journey from separation to restored relationship.',
  },
  {
    type: 'scriptureChain',
    title: 'God Made a Way',
    references: [
      { reference: 'Isaiah 59:2' },
      { reference: 'Psalm 77:13' },
      { reference: 'John 14:6' },
      { reference: 'Hebrews 10:19-20' },
    ],
  },
  {
    type: 'paragraph',
    text: "Takeaway: Sin separated humanity from God, but Jesus is the living way back into God's presence.",
  },
]

const courtyardDoorSacrificeInsightBlocks: LessonContentBlock[] = [
  {
    type: 'sanctuaryJourneyMap',
    highlightedIndices: [0, 1],
    subtitle: 'Focused on the courtyard entrance and the altar: Jesus is how we enter, and Jesus is the Lamb who bore the cost.',
  },
  {
    type: 'scriptureChain',
    title: 'The Way In',
    references: [
      { reference: 'John 10:9' },
      { reference: 'John 1:29' },
      { reference: 'Hebrews 10:19-20' },
      { reference: '1 Peter 1:18-19' },
    ],
  },
  {
    type: 'paragraph',
    text: 'Takeaway: Jesus is both the door into salvation and the Lamb whose sacrifice opens the way back to God.',
  },
]

const laverRenewalInsightBlocks: LessonContentBlock[] = [
  {
    type: 'sanctuaryJourneyMap',
    highlightedIndices: [2],
    subtitle:
      'Focused on cleansing and renewal: the laver points to the Holy Spirit washing and renewing the heart.',
  },
  {
    type: 'scriptureChain',
    title: 'Washed and Renewed',
    references: [
      { reference: 'Titus 3:5' },
      { reference: 'Ezekiel 36:25-27' },
      { reference: '1 John 1:9' },
      { reference: 'Psalm 51:10' },
    ],
  },
  {
    type: 'paragraph',
    text: 'Takeaway: God does not only forgive sin. He cleanses, renews, and creates a new heart through the Holy Spirit.',
  },
]

const holyPlaceDailyInsightBlocks: LessonContentBlock[] = [
  {
    type: 'sanctuaryJourneyMap',
    highlightedIndices: [3, 4, 5],
    subtitle:
      'Focused on the Holy Place: bread, light, and prayer point to Jesus as our daily Shepherd in word, truth, and intercession.',
  },
  {
    type: 'scriptureChain',
    title: 'Daily Life With Jesus',
    references: [
      { reference: 'John 6:35' },
      { reference: 'John 8:12' },
      { reference: 'Revelation 8:3-4' },
      { reference: 'Hebrews 7:25' },
    ],
  },
  {
    type: 'paragraph',
    text: 'Takeaway: Jesus sustains us as the Bread of Life, guides us as the Light of the world, and ministers for us as our living Intercessor.',
  },
]

const mostHolyLawWrittenInsightBlocks: LessonContentBlock[] = [
  {
    type: 'sanctuaryJourneyMap',
    highlightedIndices: [6],
    subtitle:
      'Focused on the Most Holy Place: the ark pictures God\'s presence, His law of love, and His promise to write that law within His people.',
  },
  {
    type: 'scriptureChain',
    title: 'Written on the Heart',
    references: [
      { reference: 'Exodus 25:21-22' },
      { reference: 'Jeremiah 31:33' },
      { reference: 'Hebrews 10:16' },
      { reference: 'Romans 13:10' },
    ],
  },
  {
    type: 'paragraph',
    text: 'Takeaway: God\'s goal is not only outward obedience. He wants to write His law of love in the heart.',
  },
]

const PRIESTLY_MINISTRY_STAGE: SanctuaryJourneyStageData = {
  stageName: 'Priestly Ministry',
  location: 'Sanctuary service',
  symbol: 'Ongoing mediation',
  meaning: 'Jesus continues to minister and intercede for His people.',
  scriptures: ['Hebrews 7:25', 'Hebrews 9:24'],
}

/** Lesson-only map list: adjusts altar scriptures and appends priestly mediation (does not mutate canonical Foundations data). */
const dailyPathGraceSanctuaryStages: SanctuaryJourneyStageData[] = [
  ...SANCTUARY_JOURNEY_STAGES.map((stage, index) =>
    index === 1 ? { ...stage, scriptures: ['Leviticus 4:31', '1 Peter 1:18-19'] } : stage,
  ),
  PRIESTLY_MINISTRY_STAGE,
]

const dailyGraceInsightBlocks: LessonContentBlock[] = [
  {
    type: 'sanctuaryJourneyMap',
    stages: dailyPathGraceSanctuaryStages,
    highlightedIndices: [1, dailyPathGraceSanctuaryStages.length - 1],
    subtitle:
      'Daily sacrifice in the courtyard pointed to substitution; priestly ministry points to Jesus continuing to minister and intercede for His people.',
  },
  {
    type: 'scriptureChain',
    title: 'Daily Grace',
    references: [
      { reference: 'Leviticus 4:31' },
      { reference: 'Hebrews 9:22' },
      { reference: '1 Peter 1:18-19' },
      { reference: 'Hebrews 7:25' },
    ],
  },
  {
    type: 'paragraph',
    text: 'Takeaway: The daily service showed the seriousness of sin and the availability of grace, pointing to Jesus as both sacrifice and intercessor.',
  },
]

/** Lesson-only map list: Day of Atonement tile uses this lesson's scripture set (does not mutate canonical Foundations data). */
const finalCleansingSanctuaryStages: SanctuaryJourneyStageData[] = SANCTUARY_JOURNEY_STAGES.map(
  (stage, index) =>
    index === 7
      ? {
          ...stage,
          scriptures: ['Leviticus 16:30', 'Daniel 7:9-10', 'Revelation 14:6-7', 'Hebrews 10:22'],
        }
      : stage,
)

const finalCleansingInsightBlocks: LessonContentBlock[] = [
  {
    type: 'sanctuaryJourneyMap',
    stages: finalCleansingSanctuaryStages,
    highlightedIndices: [7],
    subtitle:
      'The final stage of the sanctuary journey: God completes cleansing, judgment, restoration, and the removal of evil through Christ.',
  },
  {
    type: 'scriptureChain',
    title: 'The Final Cleansing',
    references: [
      { reference: 'Leviticus 16:30' },
      { reference: 'Daniel 7:9-10' },
      { reference: 'Revelation 14:6-7' },
      { reference: 'Hebrews 10:22' },
    ],
  },
  {
    type: 'paragraph',
    text: 'Takeaway: God\'s plan does not end with forgiveness. He will fully cleanse, restore, and remove sin through Jesus.',
  },
]

/** Guided reader lessons for "The Way Back to God" (Foundations). */
export const theWayBackToGodSeriesLessonLibrary: Record<string, LessonReaderContent> = {
  'a-map-back-to-god': {
    openingThought: `Sin leaves people feeling far from God.

Sometimes that distance feels obvious. Other times it hides under busyness, success, religion, or distraction. But deep down, humanity still carries the ache of separation.

We were made for life with God.

The Bible says sin has separated us from Him, but it also says God has made a way back.

That way is not a maze.

It is not a guessing game.

In the sanctuary, God gave Israel a picture of the journey from separation to restoration. Every space, symbol, and sacrifice pointed forward to Jesus.

The sanctuary is a map.

Jesus is the way.`,
    scriptureRef: 'Psalm 77:13',
    scriptureQuote: 'Thy way, O God, is in the sanctuary: who is so great a God as our God?',
    scriptureSecondaryRef: 'Isaiah 59:2',
    scriptureSecondaryQuote: 'But your iniquities have separated between you and your God.',
    scriptureAfterSecondary: `Scripture names both truths together.

Sin creates real separation.

Yet God reveals His way where His holiness meets mercy.`,
    scriptureWordInsights: [
      {
        surface: 'way',
        lemma: 'דֶּרֶךְ',
        transliteration: 'derek',
        meaning: 'Path, road, direction, or journey.',
        strongs: 'H1870',
        reference: 'Psalm 77:13',
        note: `Psalm 77:13 says God's "way" is in the sanctuary.

This means the sanctuary reveals a journey. It shows the path God has opened for sinners to come back into restored relationship with Him.

In the New Testament, Jesus brings the meaning into focus when He says, "I am the way."`,
      },
    ],
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'John 14:6',
        quote:
          'Jesus saith unto him, I am the way, the truth, and the life: no man cometh unto the Father, but by me.',
      },
      {
        type: 'scripture',
        reference: 'Hebrews 10:19-20',
        quote:
          'Having therefore, brethren, boldness to enter into the holiest by the blood of Jesus. By a new and living way, which he hath consecrated for us, through the veil, that is to say, his flesh.',
      },
    ],
    teachingPoints: [
      `1. Sin creates separation

Isaiah 59:2 says sin separates humanity from God.

This does not mean God stops loving us.

It means sin damages relationship, trust, desire, and spiritual life.

Separation is the problem the plan of salvation answers.

The sanctuary begins with this reality:

We need a way back.`,
      `2. God's way is revealed in the sanctuary

Psalm 77:13 says God's way is in the sanctuary.

The sanctuary was not just a religious building.

It was a symbolic path.

It showed how God would deal with sin, cleanse His people, restore relationship, and bring humanity back into His presence.`,
      `3. Jesus is the true way back to God

John 14:6 makes the sanctuary's meaning clear.

Jesus is the way.

He is not merely one stop on the path.

He is the path itself.

Everything in the sanctuary points to some part of His saving work.`,
      `4. The sanctuary moves from distance to nearness

The sanctuary journey moved from the outer court toward the Most Holy Place.

That movement matters.

It pictured the journey from separation to restored fellowship.

God's plan is not only to forgive us at a distance.

His plan is to bring us near.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudy: {
      surface: 'Way',
      lemma: 'דֶּרֶךְ',
      transliteration: 'derek',
      meaning: 'Path, road, direction, or journey.',
      strongs: 'H1870',
      reference: 'Psalm 77:13',
      note: `Psalm 77:13 says God's "way" is in the sanctuary.

This means the sanctuary reveals a journey. It shows the path God has opened for sinners to come back into restored relationship with Him.

In the New Testament, Jesus brings the meaning into focus when He says, "I am the way."`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The sanctuary helps us see the plan of salvation in motion.

The courtyard points to sacrifice and cleansing.

The Holy Place points to daily dependence, light, and prayer.

The Most Holy Place points to God's presence, His law of love, and final restoration.

But none of these symbols stand alone.

They all point to Jesus.

He is the Door.
He is the Lamb.
He is the cleansing Savior.
He is the Bread of Life.
He is the Light of the world.
He is our Intercessor.
He is our High Priest.
He is the One who brings us into the presence of God.

The sanctuary is not about ancient furniture first.

It is about Christ.`,
    },
    studyInsightBlocks: sanctuaryOverviewBlocks,
    reflectPrompt: `Where do you most feel the need for God to bring you closer to Him right now?

Think about trust, prayer, obedience, peace, forgiveness, spiritual hunger, or a sense of distance from God.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, do not think of salvation as God keeping you at arm's length.

Think of it as God making a way for you to come near.

When you feel distant, pray simply:

"Jesus, lead me back to the Father."

Then take one step.

Open Scripture.
Pray honestly.
Confess what needs light.
Receive grace.
Follow the next truth God shows you.

The journey back to God is not traveled by human pride.

It is traveled by trusting Jesus as the way.

Prayer:

Father, thank You for making a way back to You through Jesus. Help me understand the sanctuary as a picture of Your saving love. When I feel far from You, remind me that Christ is the way, the truth, and the life. Lead me from distance into restored relationship with You. Amen.`,
    prayer: '',
    completionSummary: `The sanctuary is a map, but Jesus is the way. God has not left humanity in separation. He has opened a living path back to Himself.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'wb-l1-q1',
          prompt: 'According to Isaiah 59:2, what has separated humanity from God?',
          options: ['Iniquities', 'Weather', 'Lack of intelligence', 'Angels'],
          correctIndex: 0,
          explanation: 'Isaiah 59:2 says iniquities have separated between humanity and God.',
        },
        {
          id: 'wb-l1-q2',
          prompt: "According to Psalm 77:13, where is God's way revealed?",
          options: ['In the sanctuary', "In Egypt's throne room", 'In human pride', "In the serpent's lie"],
          correctIndex: 0,
          explanation: 'Psalm 77:13 says, "Thy way, O God, is in the sanctuary."',
        },
        {
          id: 'wb-l1-q3',
          prompt: 'What does Jesus say in John 14:6?',
          options: [
            '"I am the way, the truth, and the life"',
            '"I am one road among many"',
            '"No one can know the Father"',
            '"The sanctuary has no meaning"',
          ],
          correctIndex: 0,
          explanation:
            'Jesus identifies Himself as the way, the truth, and the life. The sanctuary path finds its meaning in Him.',
        },
        {
          id: 'wb-l1-q4',
          prompt: 'What is the sanctuary mainly pointing us toward?',
          options: [
            'Jesus and His work of salvation',
            'Ancient furniture only',
            'Human achievement',
            'A building with no spiritual meaning',
          ],
          correctIndex: 0,
          explanation:
            'The sanctuary symbols point forward to Jesus and the path God opened for humanity\'s restoration.',
        },
        {
          id: 'wb-l1-q5',
          kind: 'reflection',
          prompt: 'What step toward God do you sense Jesus inviting you to take this week?',
          explanation:
            'The sanctuary shows a journey back to God. Jesus leads us one step at a time into restored relationship.',
        },
      ],
    },
  },
  'the-door-and-the-sacrifice': {
    openingThought: `The sanctuary journey began with entrance.

Before a person reached the altar, the laver, the Holy Place, or the Most Holy Place, they first had to come through the door.

That detail matters.

God was teaching Israel that the way back to Him is not self-made. We do not create our own path into His presence.

Jesus makes the meaning clear when He says, "I am the door."

The sanctuary begins where salvation begins:

Access through Christ.

And once inside the courtyard, the first major symbol was sacrifice.

The way back to God is opened by Jesus, and the cost of that way is the life He gave for us.`,
    scriptureRef: 'John 10:9',
    scriptureQuote: 'I am the door: by me if any man enter in, he shall be saved, and shall go in and out, and find pasture.',
    scriptureAfterPrimary: `Jesus is naming something essential.

Sinners do not design their own path into God's presence.`,
    scriptureSecondaryRef: 'John 1:29',
    scriptureSecondaryQuote:
      'Behold the Lamb of God, which taketh away the sin of the world.',
    scriptureAfterSecondary: `The Lamb language continues the courtyard story.

Sacrifice speaks of substitution, seriousness, and the cost God would bear.`,
    scriptureWordInsights: [
      {
        surface: 'door',
        lemma: 'θύρα',
        transliteration: 'thyra',
        meaning: 'An entrance, access point, or way in.',
        strongs: 'G2374',
        reference: 'John 10:9',
        note: `When Jesus says, "I am the door," He is saying that restored relationship with God begins through Him.

The sanctuary door was not just architecture.

It pointed to the truth that sinners need access, and Christ provides it.`,
      },
    ],
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Hebrews 10:19-20',
        quote:
          'Having therefore, brethren, boldness to enter into the holiest by the blood of Jesus. By a new and living way, which he hath consecrated for us, through the veil, that is to say, his flesh.',
      },
      {
        type: 'scripture',
        reference: '1 Peter 1:18-19',
        quote:
          'Ye were not redeemed with corruptible things, as silver and gold. But with the precious blood of Christ, as of a lamb without blemish and without spot.',
      },
    ],
    teachingPoints: [
      `1. Jesus is the door into salvation

Jesus says, "I am the door."

That is not vague religious language.

It means access to God comes through Him.

The sanctuary door pointed forward to Christ as the entrance into restored relationship.

We do not enter by pride, performance, ancestry, intelligence, or religious image.

We enter through Jesus.`,
      `2. The altar showed the cost of sin

Inside the courtyard stood the altar of sacrifice.

The altar taught that sin is serious.

Sin is not a small misunderstanding or harmless mistake.

It brings death, separation, guilt, and brokenness.

The sacrifice showed that restoration would come at a cost.`,
      `3. Jesus is the Lamb of God

John the Baptist saw Jesus and said, "Behold the Lamb of God."

The sanctuary sacrifices pointed beyond themselves.

They pointed to Christ.

Animals could not ultimately remove sin, but they taught the lesson of substitution.

The innocent would stand in the place of the guilty.

Jesus fulfilled that symbol completely.`,
      `4. The blood of Jesus opens the way

Hebrews says we have boldness to enter by the blood of Jesus.

That means the way back to God is not built on denial, excuses, or self-improvement.

It is built on Christ's sacrifice.

The cross opens the way into God's presence.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudy: {
      surface: 'Door',
      lemma: 'θύρα',
      transliteration: 'thyra',
      meaning: 'An entrance, access point, or way in.',
      strongs: 'G2374',
      reference: 'John 10:9',
      note: `When Jesus says, "I am the door," He is saying that restored relationship with God begins through Him.

The sanctuary door was not just architecture.

It pointed to the truth that sinners need access, and Christ provides it.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The courtyard gives us two major truths:

Jesus is the way in.

Jesus is the sacrifice that makes the way possible.

The door tells us we need access.

The altar tells us access is costly.

This keeps us from two wrong ideas.

First, we should not think we can save ourselves.

Second, we should not think God forgives by pretending sin does not matter.

God takes sin seriously.

God takes love seriously too.

At the cross, both truths meet.

Sin is judged.

Love is revealed.

The way back to God is opened.`,
    },
    studyInsightBlocks: courtyardDoorSacrificeInsightBlocks,
    reflectPrompt: `Where are you most tempted to try to enter God's presence by your own effort instead of trusting Jesus?

Think about performance, guilt, religious image, comparison, or trying to make yourself "good enough" before coming to God.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, come to God through Jesus instead of through self-measurement.

When you feel unworthy, do not wait until you feel impressive.

Come through the Door.

When guilt tells you to stay away, remember the Lamb.

Say:

"Jesus, You are my way in."

The Christian life does not begin with proving yourself.

It begins with trusting the One who gave Himself for you.

Prayer:

Jesus, thank You for being the door and the sacrifice. Thank You for opening the way back to the Father through Your blood. Help me stop trusting my performance and start trusting Your finished work. Teach me to come near with humility, faith, and gratitude. Amen.`,
    prayer: '',
    completionSummary:
      'The sanctuary journey begins with Christ. Jesus is the Door who gives access and the Lamb whose sacrifice opens the way back to God.',
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'wb-l2-q1',
          prompt: 'What does Jesus say in John 10:9?',
          options: [
            'I am the door',
            'I am only a symbol',
            'Find your own way',
            'There is no way back',
          ],
          correctIndex: 0,
          explanation:
            'Jesus says, "I am the door," showing that access to salvation and restored relationship with God comes through Him.',
        },
        {
          id: 'wb-l2-q2',
          prompt: 'What did John the Baptist call Jesus in John 1:29?',
          options: [
            'The Lamb of God',
            'The builder of Rome',
            'The hidden prophet',
            'The golden altar',
          ],
          correctIndex: 0,
          explanation:
            'John called Jesus the Lamb of God who takes away the sin of the world.',
        },
        {
          id: 'wb-l2-q3',
          prompt: 'What did the altar of sacrifice teach?',
          options: [
            'Sin is serious and restoration comes at a cost',
            'Sin does not matter',
            'Humans can save themselves',
            'Sacrifice was unrelated to Jesus',
          ],
          correctIndex: 0,
          explanation:
            'The altar showed the seriousness of sin and pointed forward to the cost of redemption in Christ.',
        },
        {
          id: 'wb-l2-q4',
          prompt: 'According to Hebrews 10:19-20, what gives us boldness to enter?',
          options: [
            'The blood of Jesus',
            'Our popularity',
            'Our perfect record',
            'Our intelligence',
          ],
          correctIndex: 0,
          explanation: 'Hebrews says we have boldness to enter by the blood of Jesus.',
        },
        {
          id: 'wb-l2-q5',
          kind: 'reflection',
          prompt:
            'How does seeing Jesus as both the Door and the Lamb change the way you approach God?',
          explanation:
            'Jesus gives access and provides the sacrifice. We come to God through His grace, not our own worthiness.',
        },
      ],
    },
  },
  'washed-and-made-new': {
    openingThought: `After the altar came the laver.

The altar pointed to sacrifice.

The laver pointed to cleansing.

God was teaching something simple but powerful: salvation is not only about forgiveness. It is also about renewal.

Jesus does not simply open the way back to God and leave us unchanged. He cleanses what sin has stained. He renews what sin has damaged. He begins restoring the heart from the inside out.

The way back to God includes being washed and made new.`,
    scriptureRef: 'Titus 3:5',
    scriptureQuote:
      'Not by works of righteousness which we have done, but according to his mercy he saved us, by the washing of regeneration, and renewing of the Holy Ghost.',
    scriptureAfterPrimary: `Mercy reaches us before our performance qualifies us.

Forgiveness connects to regeneration and renewing work by the Holy Spirit.`,
    scriptureSecondaryRef: 'Ezekiel 36:25-27',
    scriptureSecondaryQuote:
      'Then will I sprinkle clean water upon you, and ye shall be clean.\n\nA new heart also will I give you, and a new spirit will I put within you.',
    scriptureAfterSecondary: `God is not only concerned with what we have done.

He is concerned with who we are becoming in Him.`,
    scriptureWordInsights: [
      {
        surface: 'regeneration',
        lemma: 'παλιγγενεσία',
        transliteration: 'paliggensia',
        meaning: 'New birth, renewal, or being made new.',
        strongs: 'G3824',
        reference: 'Titus 3:5',
        note: `Titus 3:5 connects salvation with washing and regeneration.

God's goal is not merely to forgive the old life.

He begins a new life in us through the Holy Spirit.

The laver pointed forward to this cleansing and renewing work.`,
      },
    ],
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: '1 John 1:9',
        quote:
          'If we confess our sins, he is faithful and just to forgive us our sins, and to cleanse us from all unrighteousness.',
      },
    ],
    teachingPoints: [
      `1. The laver pointed to cleansing

The laver was used for washing.

After sacrifice, cleansing was part of the sanctuary journey.

This teaches that God does not only deal with the guilt of sin.

He also deals with the uncleanness sin leaves behind.

Grace forgives.

Grace also cleanses.`,
      `2. God saves by mercy, not self-repair

Titus 3:5 says God saves us according to His mercy.

That matters because cleansing is not something we manufacture.

We do not scrub ourselves into spiritual life.

God washes, renews, and restores through the Holy Spirit.`,
      `3. God promises a new heart

Ezekiel 36 says God will give His people a new heart and put His Spirit within them.

This is deeper than behavior management.

God wants to change the inner life.

He renews desire, trust, love, and obedience from the heart.`,
      `4. Confession brings sin into the light

1 John 1:9 says God forgives and cleanses when we confess.

Confession is not informing God of something He does not know.

It is agreeing with God about what is true.

When we stop hiding, grace can begin washing what shame tried to cover.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudy: {
      surface: 'Regeneration',
      lemma: 'παλιγγενεσία',
      transliteration: 'paliggensia',
      meaning: 'New birth, renewal, or being made new.',
      strongs: 'G3824',
      reference: 'Titus 3:5',
      note: `Titus 3:5 connects salvation with washing and regeneration.

God's goal is not merely to forgive the old life.

He begins a new life in us through the Holy Spirit.

The laver pointed forward to this cleansing and renewing work.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The sanctuary journey shows a beautiful order.

First, the sacrifice.

Then, the washing.

This order matters.

We are not cleansed so that Jesus will accept us.

Jesus receives us and then begins cleansing us.

That means transformation is not the price of coming to God.

Transformation is the result of coming to God.

The laver points to the Holy Spirit's work of renewal.

God forgives the record.

Then He begins restoring the person.`,
    },
    studyInsightBlocks: laverRenewalInsightBlocks,
    reflectPrompt: `Where do you need God's cleansing and renewal right now?

Think about guilt, habits, thoughts, desires, shame, or an area where you have been trying to change yourself without surrendering it to God.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, practice honest confession without hiding.

Bring one specific thing to God and say:

"Lord, I agree with You about this. Cleanse me and renew my heart."

Do not stop at guilt.

Ask for renewal.

Do not only ask God to forgive what happened.

Ask Him to restore what sin damaged.

The same grace that brings you through the door also washes you at the laver.

Prayer:

Father, thank You for saving me according to Your mercy. Thank You for forgiveness, cleansing, and renewal. Wash what sin has stained. Give me a new heart and a willing spirit. Help me stop hiding and let Your grace make me new through the Holy Spirit. Amen.`,
    prayer: '',
    completionSummary:
      'The laver reminds us that God does more than forgive. He washes, renews, and begins making the heart new through the Holy Spirit.',
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'wb-l3-q1',
          prompt: 'What did the laver point to in the sanctuary journey?',
          options: [
            'Cleansing and renewal',
            'Pride and performance',
            'Political power',
            'The end of prayer',
          ],
          correctIndex: 0,
          explanation:
            'The laver was used for washing and pointed to God\'s work of cleansing and renewal.',
        },
        {
          id: 'wb-l3-q2',
          prompt: 'According to Titus 3:5, how does God save us?',
          options: [
            'According to His mercy',
            'According to our perfection',
            'According to our popularity',
            'According to our excuses',
          ],
          correctIndex: 0,
          explanation:
            'Titus 3:5 says God saves us according to His mercy, by the washing of regeneration and renewing of the Holy Ghost.',
        },
        {
          id: 'wb-l3-q3',
          prompt: 'What does God promise in Ezekiel 36?',
          options: [
            'A new heart and a new spirit',
            'A life without choices',
            'A reason to keep hiding',
            'A replacement for Jesus',
          ],
          correctIndex: 0,
          explanation:
            'Ezekiel 36 promises that God will give His people a new heart and put His Spirit within them.',
        },
        {
          id: 'wb-l3-q4',
          prompt: 'According to 1 John 1:9, what does God do when we confess our sins?',
          options: [
            'Forgives and cleanses us',
            'Rejects us forever',
            'Pretends sin is harmless',
            'Stops listening',
          ],
          correctIndex: 0,
          explanation:
            '1 John 1:9 says God is faithful and just to forgive our sins and cleanse us from all unrighteousness.',
        },
        {
          id: 'wb-l3-q5',
          kind: 'reflection',
          prompt: 'How does it help you to know that God cleanses after He receives you?',
          explanation:
            'Transformation is not the price of coming to God. It is the result of coming to Him through Jesus.',
        },
      ],
    },
  },
  'bread-light-and-prayer': {
    openingThought: `The sanctuary journey did not stop in the courtyard.

After sacrifice and cleansing, the priest entered the Holy Place.

Inside were three powerful symbols:

Bread.

Light.

Incense.

These were not random decorations. They pointed to the daily life of faith.

God does not only forgive and cleanse us. He sustains us, guides us, and invites us into prayer.

The way back to God is not a one-time moment.

It is a daily walk with Jesus.`,
    scriptureRef: 'John 6:35',
    scriptureQuote:
      'And Jesus said unto them, I am the bread of life: he that cometh to me shall never hunger; and he that believeth on me shall never thirst.',
    scriptureAfterPrimary: `Bread language here is richer than metaphor.

Jesus is naming Himself as spiritual life itself.`,
    scriptureSecondaryRef: 'John 8:12',
    scriptureSecondaryQuote:
      'Then spake Jesus again unto them, saying, I am the light of the world: he that followeth me shall not walk in darkness, but shall have the light of life.',
    scriptureAfterSecondary: `Light contrasts with wandering in confusion and moral darkness.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Revelation 8:3-4',
        quote:
          'And another angel came and stood at the altar, having a golden censer; and there was given unto him much incense, that he should offer it with the prayers of all saints upon the golden altar which was before the throne.\n\nAnd the smoke of the incense, which came with the prayers of the saints, ascended up before God out of the angel\'s hand.',
      },
      {
        type: 'scripture',
        reference: 'Hebrews 7:25',
        quote:
          'Wherefore he is able also to save them to the uttermost that come unto God by him, seeing he ever liveth to make intercession for them.',
      },
    ],
    teachingPoints: [
      `1. Jesus is the Bread of Life

The table of bread pointed to Jesus.

Bread sustains physical life.

Jesus sustains spiritual life.

He feeds the soul with His presence, His word, and His grace.

We do not live by spiritual excitement alone.

We live by daily dependence on Christ.`,
      `2. Jesus is the Light of the world

The lampstand gave light in the Holy Place.

Jesus said, "I am the light of the world."

Sin darkens perception.

Jesus restores sight.

He shows us who God is, who we are, and where the path of life leads.

Following Him means we do not have to walk in darkness.`,
      `3. Prayer rises before God

The altar of incense pointed to prayer and intercession.

Revelation connects incense with the prayers of the saints.

This means prayer is not wasted breath.

Through Christ, our prayers rise before God.

Even weak prayers, honest prayers, and tearful prayers matter.`,
      `4. Jesus ministers for us now

Hebrews says Jesus lives to make intercession.

That means Jesus is not only the sacrifice who died.

He is the living Savior who ministers for us.

He sustains, guides, and intercedes as we continue the journey.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudy: {
      surface: 'Intercession',
      lemma: 'ἔντευξις',
      transliteration: 'enteuxis',
      meaning: 'To plead, represent, or act on behalf of another.',
      strongs: 'G1783',
      reference: 'Hebrews 7:25',
      note: `Jesus intercedes for us.

This does not mean the Father is unwilling to love us and Jesus has to convince Him.

It means Jesus represents us before the Father and applies the benefits of His saving work to our lives.

His ministry is ongoing, personal, and faithful.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The Holy Place shows the daily rhythm of life with God.

Bread points to dependence.

Light points to guidance.

Incense points to prayer.

This is not complicated, but it is deep.

A restored relationship with God grows through daily receiving, daily following, and daily communion.

Jesus is not only the door we enter through.

He is the life we continue with.

He feeds us.
He lights the way.
He carries our prayers.
He ministers for us.

The Christian journey is sustained by Christ from beginning to end.`,
    },
    studyInsightBlocks: holyPlaceDailyInsightBlocks,
    reflectPrompt: `Which part of your daily walk with God needs attention right now: being fed by His word, following His light, or coming to Him in prayer?

Choose one area honestly. The goal is not guilt. The goal is noticing where Jesus is inviting you deeper.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, build a simple Holy Place rhythm.

Bread:
Read one short passage of Scripture each day.

Light:
Ask, "Jesus, what truth do You want me to walk in today?"

Prayer:
Bring one honest prayer to God before the day gets loud.

Keep it simple.

The point is not to impress God.

The point is to stay near Him.

Prayer:

Jesus, thank You for sustaining me, guiding me, and carrying my prayers before the Father. Feed me with Your word. Lead me by Your light. Teach me to pray honestly and consistently. Help me walk with You daily, not only in big moments, but in ordinary ones too. Amen.`,
    prayer: '',
    completionSummary:
      'The Holy Place reminds us that Jesus sustains, guides, and intercedes for us. The way back to God becomes a daily walk with Christ.',
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'wb-l4-q1',
          prompt: 'What did Jesus call Himself in John 6:35?',
          options: ['The bread of life', 'The closed gate', 'The hidden altar', 'The final prophet only'],
          correctIndex: 0,
          explanation:
            'Jesus said, "I am the bread of life," showing that He sustains spiritual life.',
        },
        {
          id: 'wb-l4-q2',
          prompt: 'What did the lampstand point to?',
          options: [
            'Jesus as the Light of the world',
            'Human pride',
            'The end of prayer',
            "The serpent's deception",
          ],
          correctIndex: 0,
          explanation: 'The lampstand pointed to Christ as the Light who guides His people.',
        },
        {
          id: 'wb-l4-q3',
          prompt: 'What is incense connected with in Revelation 8:3-4?',
          options: ['The prayers of the saints', 'The fall of Babylon only', 'The creation of animals', 'The walls of Jericho'],
          correctIndex: 0,
          explanation:
            'Revelation connects incense with the prayers of the saints ascending before God.',
        },
        {
          id: 'wb-l4-q4',
          prompt: 'According to Hebrews 7:25, what does Jesus live to do?',
          options: ['Make intercession', 'Hide from sinners', 'Stop forgiving', 'End Scripture'],
          correctIndex: 0,
          explanation:
            'Hebrews says Jesus ever lives to make intercession for those who come to God through Him.',
        },
        {
          id: 'wb-l4-q5',
          kind: 'reflection',
          prompt: 'What simple daily rhythm could help you stay closer to Jesus this week?',
          explanation:
            'The Holy Place points to daily dependence, guidance, and prayer. Small faithful steps matter.',
        },
      ],
    },
  },
  'gods-love-written-within': {
    openingThought: `The sanctuary journey moved toward the Most Holy Place.

There, behind the veil, was the ark of the covenant.

Inside the ark was God's law.

But God's goal was never to keep His law only on stone. His desire was to write His law in human hearts.

That matters.

The way back to God is not just about being forgiven.

It is about being restored so deeply that God's love begins shaping how we think, desire, choose, and live.

God wants His love written within us.`,
    scriptureRef: 'Hebrews 10:16',
    scriptureQuote:
      'This is the covenant that I will make with them after those days, saith the Lord, I will put my laws into their hearts, and in their minds will I write them;',
    scriptureAfterPrimary: `This promise ties the sanctuary symbols to inward transformation.

God is speaking about a covenant that reshapes desire and direction from within.`,
    scriptureSecondaryRef: 'Jeremiah 31:33',
    scriptureSecondaryQuote:
      'But this shall be the covenant that I will make with the house of Israel; After those days, saith the LORD, I will put my law in their inward parts, and write it in their hearts; and will be their God, and they shall be my people.',
    scriptureAfterSecondary: `God's law moves from outward testimony toward inward relationship.

Heart language is intimacy language.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Exodus 25:21-22',
        quote:
          'And thou shalt put the mercy seat above upon the ark; and in the ark thou shalt put the testimony that I shall give thee.\n\nAnd there I will meet with thee, and I will commune with thee from above the mercy seat, from between the two cherubims which are upon the ark of the testimony, of all things which I will give thee in commandment unto the children of Israel.',
      },
      {
        type: 'scripture',
        reference: 'Romans 13:10',
        quote:
          'Love worketh no ill to his neighbour: therefore love is the fulfilling of the law.',
      },
    ],
    teachingPoints: [
      `1. The ark held God's law

The ark of the covenant was placed in the Most Holy Place.

Inside it were the tables of the law.

This showed that God's law is not a side issue.

His law reflects His character and His way of love.

God's presence and God's law belong together because God's government is built on love.`,
      `2. The mercy seat covered the law

The mercy seat was placed above the ark.

That picture matters.

God's law was not separated from mercy.

Mercy did not erase the law.

Mercy met humanity where the law revealed the seriousness of sin.

In Jesus, justice and mercy meet perfectly.`,
      `3. God wants His law written in the heart

Jeremiah and Hebrews both speak of God writing His law within His people.

This is not forced religion.

It is inward restoration.

God wants His love to become part of how we think, choose, and live.

He does not only want obedience around us.

He wants love within us.`,
      `4. Love fulfills the law

Romans 13:10 says love is the fulfilling of the law.

This means God's law is not cold control.

It is the shape of self-giving love.

When God writes His law in the heart, He is restoring us into the life we were created for.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudy: {
      surface: 'Covenant',
      lemma: 'διαθήκη',
      transliteration: 'diathēkē',
      meaning: 'A binding relationship promise.',
      strongs: 'G1242',
      reference: 'Hebrews 10:16',
      note: `God's covenant is not merely a contract.

It is His faithful promise to restore relationship.

When God says He will write His law in our hearts, He is promising deeper restoration than outward behavior.

He is promising a heart shaped by love.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The Most Holy Place shows us something beautiful about God.

At the center was His presence.

At the center was His law.

At the center was mercy.

That combination tells the truth about God's character.

He is holy.
He is loving.
He is just.
He is merciful.

The sanctuary does not show a God who ignores sin.

It shows a God who makes a way to restore sinners.

The goal is not just forgiveness from guilt.

The goal is a heart made new.

Jesus brings us near to God, cleanses us, sustains us, intercedes for us, and writes love into us by His Spirit.`,
    },
    studyInsightBlocks: mostHolyLawWrittenInsightBlocks,
    reflectPrompt: `Where do you need God to write His love more deeply into your heart?

Think about your thoughts, habits, relationships, desires, reactions, or the way you respond when life presses you.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, ask God for more than behavior change.

Ask Him for heart change.

Pray:

"Lord, write Your love in me."

Then watch one area carefully.

How do you respond when interrupted?
How do you treat people when you are tired?
How do you think about someone who hurt you?
How do you handle temptation when no one sees?

God is not only forming better habits.

He is forming a heart that reflects His love.

Prayer:

Father, thank You for wanting more than outward religion. Write Your law of love in my heart and mind. Shape my thoughts, desires, choices, and relationships by Your Spirit. Bring me near to You, and make my life reflect the love revealed in Jesus. Amen.`,
    prayer: '',
    completionSummary:
      'The Most Holy Place reveals God\'s goal: not only forgiven people, but restored hearts. God wants His law of love written within us.',
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'wb-l5-q1',
          prompt: 'What was placed inside the ark of the covenant?',
          options: ["God's law", 'Roman coins', 'A map of Egypt', 'A crown for Pharaoh'],
          correctIndex: 0,
          explanation:
            'The ark contained the tables of the law, showing the importance of God\'s character and government of love.',
        },
        {
          id: 'wb-l5-q2',
          prompt: 'Where does Hebrews 10:16 say God will write His laws?',
          options: ['In hearts and minds', 'On city walls only', 'In the clouds only', 'On Roman scrolls'],
          correctIndex: 0,
          explanation: 'Hebrews 10:16 says God will put His laws into hearts and write them in minds.',
        },
        {
          id: 'wb-l5-q3',
          prompt: 'What does Romans 13:10 say fulfills the law?',
          options: ['Love', 'Fear', 'Pride', 'Performance'],
          correctIndex: 0,
          explanation: 'Romans 13:10 says love is the fulfilling of the law.',
        },
        {
          id: 'wb-l5-q4',
          prompt: 'What does the mercy seat show us?',
          options: [
            "God's mercy meets humanity where His law reveals sin",
            'God does not care about sin',
            "God's law has no meaning",
            'Prayer is unnecessary',
          ],
          correctIndex: 0,
          explanation:
            'The mercy seat above the ark shows that God\'s mercy and justice meet in His plan to restore sinners.',
        },
        {
          id: 'wb-l5-q5',
          kind: 'reflection',
          prompt: 'What would change if God\'s love shaped your reactions more deeply this week?',
          explanation:
            'God\'s goal is inward restoration. He wants His love to shape not only behavior, but the heart behind it.',
        },
      ],
    },
  },
  'the-daily-path-of-grace': {
    openingThought: `The sanctuary was not only about one big moment.

It had a daily rhythm.

Day after day, sacrifices were offered. Day after day, priests ministered. Day after day, the sanctuary reminded Israel that sin was serious, grace was available, and God was making a way back.

This daily service pointed beyond itself.

It pointed to Jesus.

He is not only the Lamb who died once for all. He is also our living Savior who continues to minister for us.

The way back to God is sustained by daily grace.`,
    scriptureRef: 'Leviticus 4:31',
    scriptureQuote:
      'And the priest shall burn it upon the altar for a sweet savour unto the LORD; and the priest shall make an atonement for him, and it shall be forgiven him.',
    scriptureAfterPrimary: `Forgiveness is named plainly.

Grace met real people in ordinary days, again and again.`,
    scriptureSecondaryRef: 'Hebrews 9:22',
    scriptureSecondaryQuote:
      'And almost all things are by the law purged with blood; and without shedding of blood is no remission.',
    scriptureAfterSecondary: `Sin is costly.

God does not pretend otherwise.

Mercy arrives through God's provided way, not denial.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: '1 Peter 1:18-19',
        quote:
          'Ye were not redeemed with corruptible things, as silver and gold.\n\nBut with the precious blood of Christ, as of a lamb without blemish and without spot.',
      },
      {
        type: 'scripture',
        reference: 'Hebrews 7:25',
        quote:
          'Wherefore he is able also to save them to the uttermost that come unto God by him, seeing he ever liveth to make intercession for them.',
      },
    ],
    teachingPoints: [
      `1. The daily service showed the seriousness of sin

The daily sacrifices taught Israel that sin was not harmless.

Sin damages relationship.
Sin brings guilt.
Sin requires atonement.

The sanctuary did not minimize sin.

It exposed the cost of it.

But it also showed that God had provided a way for forgiveness.`,
      `2. A substitute stood in the sinner's place

The sacrifice pointed to substitution.

The innocent stood in place of the guilty.

This was not because God enjoyed death.

It was because God was teaching that sin leads to death, and only a provided substitute could open the way to forgiveness.

Every sacrifice pointed forward to Jesus, the true Lamb.`,
      `3. Forgiveness was part of the daily path

Leviticus says atonement was made and the person was forgiven.

This matters because God's grace met people in real life.

The daily service reminded Israel that God was not waiting to destroy anyone who failed.

He was providing a way for sinners to come honestly and receive mercy.`,
      `4. Jesus continues to minister for us

Hebrews says Jesus lives to make intercession.

That means His work for us did not end with the cross.

His sacrifice is complete, but His ministry continues.

He applies the benefits of His sacrifice, represents us before the Father, and carries us forward in grace.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudy: {
      surface: 'Atonement',
      lemma: 'כָּפַר',
      transliteration: 'kāphar',
      meaning:
        'The act of making reconciliation, covering sin, and restoring relationship.',
      strongs: 'H3722',
      reference: 'Leviticus 4:31',
      note: `Atonement is not just a religious word.

It is about God dealing with sin so relationship can be restored.

In the sanctuary, atonement pointed forward to Jesus, who brings forgiveness, cleansing, and restored nearness to God.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The daily sanctuary service teaches balance.

Sin is serious.

Grace is real.

Both truths matter.

If we only talk about sin, we can become afraid of God.

If we only talk about grace without the cost of sin, we can treat evil lightly.

The sanctuary holds both together.

Sin brings death.

God provides a substitute.

The sinner comes honestly.

The priest ministers.

Forgiveness is given.

Jesus fulfills the whole pattern.

He is the Lamb who gave His life.

He is the Priest who ministers for us.

He is the grace that keeps the way back to God open.`,
    },
    studyInsightBlocks: dailyGraceInsightBlocks,
    reflectPrompt: `Which truth do you need to take more seriously right now: the seriousness of sin or the availability of grace?

Be honest. Some people minimize sin. Others struggle to believe grace is still available. Bring your real answer to God.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, practice daily grace.

At the end of each day, take two minutes with God.

Ask:

"Where did I step outside Your love today?"

Then ask:

"Where did I see Your grace today?"

Confess honestly.

Receive mercy.

Then rest in Christ's ongoing ministry for you.

You are not saved by pretending you had a perfect day.

You are saved by trusting the perfect Savior.

Prayer:

Jesus, thank You for being my sacrifice and my living intercessor. Help me take sin seriously without running from Your grace. Teach me to confess honestly, receive mercy, and walk with You daily. Keep me close to the Father through Your faithful ministry. Amen.`,
    prayer: '',
    completionSummary:
      'The daily service pointed to Jesus as both sacrifice and intercessor. Sin is serious, but grace is available every day through Christ.',
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'wb-l6-q1',
          prompt: 'What did the daily sanctuary service teach about sin?',
          options: [
            'Sin is serious and requires atonement',
            'Sin is harmless',
            'Sin does not affect relationship',
            'Sin saves humanity',
          ],
          correctIndex: 0,
          explanation:
            'The daily service showed that sin is serious, damages relationship, and requires atonement.',
        },
        {
          id: 'wb-l6-q2',
          prompt: 'What did the sacrifice point to?',
          options: [
            "A substitute standing in the sinner's place",
            'Human pride',
            'A way to ignore sin',
            'A replacement for prayer',
          ],
          correctIndex: 0,
          explanation:
            'The sacrifice pointed to substitution, ultimately fulfilled in Jesus, the Lamb of God.',
        },
        {
          id: 'wb-l6-q3',
          prompt: 'According to 1 Peter 1:18-19, what redeems us?',
          options: [
            'The precious blood of Christ',
            'Silver and gold',
            'Personal popularity',
            'Human perfection',
          ],
          correctIndex: 0,
          explanation:
            'Peter says we are redeemed with the precious blood of Christ, as of a lamb without blemish and without spot.',
        },
        {
          id: 'wb-l6-q4',
          prompt: 'According to Hebrews 7:25, what does Jesus live to do?',
          options: ['Make intercession', 'Hide from sinners', 'Stop forgiving', 'End all prayer'],
          correctIndex: 0,
          explanation:
            'Hebrews says Jesus ever lives to make intercession for those who come to God through Him.',
        },
        {
          id: 'wb-l6-q5',
          kind: 'reflection',
          prompt: 'How can daily confession help you stay close to Jesus instead of hiding from Him?',
          explanation:
            'Daily confession brings sin into the light and helps us receive grace from the Savior who continues to minister for us.',
        },
      ],
    },
  },
  'the-final-cleansing': {
    openingThought: `The sanctuary journey leads somewhere.

It does not stop at forgiveness.
It does not stop at daily grace.

It moves toward complete restoration.

Once a year, Israel observed the Day of Atonement.

It was a solemn day.

A day of cleansing.
A day of truth.
A day of judgment.
A day of putting away sin.

This final step pointed forward to God's last work in dealing with sin completely.

God's plan is not only to forgive sin.

It is to remove it.`,
    scriptureRef: 'Leviticus 16:30',
    scriptureQuote:
      'For on that day shall the priest make an atonement for you, to cleanse you, that ye may be clean from all your sins before the LORD.',
    scriptureAfterPrimary: `Complete cleansing is the goal.

God was teaching that sin would not remain forever.`,
    scriptureSecondaryRef: 'Daniel 7:9-10',
    scriptureSecondaryQuote:
      'I beheld till the thrones were cast down, and the Ancient of days did sit.\n\nThe judgment was set, and the books were opened.',
    scriptureAfterSecondary: `Judgment in Scripture is not only about exposure.

It is about setting things right.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Revelation 14:6-7',
        quote:
          'And I saw another angel fly in the midst of heaven, having the everlasting gospel to preach unto them that dwell on the earth.\n\nSaying with a loud voice, Fear God, and give glory to him; for the hour of his judgment is come: and worship him that made heaven, and earth, and the sea, and the fountains of waters.',
      },
      {
        type: 'scripture',
        reference: 'Hebrews 10:22',
        quote:
          'Let us draw near with a true heart in full assurance of faith, having our hearts sprinkled from an evil conscience, and our bodies washed with pure water.',
      },
    ],
    teachingPoints: [
      `1. The Day of Atonement was about cleansing

Leviticus 16 says the purpose of this day was cleansing.

Not partial cleansing.

Complete cleansing.

God was teaching that sin would not remain forever.

There would be a final dealing with evil.`,
      `2. It was a day of truth and honesty

On this day, the people were called to examine their hearts.

This was not about fear-driven performance.

It was about honesty before God.

No hiding.
No pretending.
No covering.

God's cleansing work happens in truth.`,
      `3. Judgment reveals God's justice and mercy

Daniel 7 and Revelation 14 speak of judgment.

For some, that word feels heavy.

But in Scripture, judgment is not only about exposure.

It is about setting things right.

It shows that God takes sin seriously and that He is just, fair, and faithful in dealing with it.`,
      `4. God's goal is the removal of sin

The sanctuary services moved toward this final step.

Sin would not only be forgiven.

It would be removed.

The brokenness of the world would not last forever.

Through Jesus, God is bringing history toward restoration.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudy: {
      surface: 'Cleanse',
      lemma: 'טָהֵר',
      transliteration: 'taher',
      meaning: 'To make pure, remove defilement, and restore to what is right.',
      strongs: 'H2891',
      reference: 'Leviticus 16:30',
      note: `Cleansing in the sanctuary was not only outward.

It pointed to God's desire to cleanse the heart, remove sin, and restore full relationship.

The final cleansing shows that God's plan includes complete restoration, not partial healing.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The Day of Atonement brings the sanctuary message into focus.

God is not ignoring sin.

God is dealing with it fully.

The same God who:

Came looking in Eden
Promised a Deliverer
Sent His Son
Provided daily grace

Is also the God who will finish the work.

This is good news.

It means evil does not win.
Sin does not last forever.
Brokenness is not the end of the story.

Jesus is not only the Lamb.

He is the High Priest who completes the work of restoration.`,
    },
    studyInsightBlocks: finalCleansingInsightBlocks,
    reflectPrompt: `How does it change your perspective to know that God's plan includes the complete removal of sin, not just temporary forgiveness?

Think about pain, injustice, personal struggle, and the hope of full restoration.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, practice living in the light.

The Day of Atonement was a time of honesty before God.

Do not carry hidden things.

Bring everything into the open with Him.

Ask:

"Lord, is there anything I am holding onto that You want to cleanse?"

Then trust His grace.

God's goal is not to expose you to shame you.

It is to cleanse you and restore you.

You can live with an open heart before Him.

Prayer:

Father, thank You that Your plan does not stop at forgiveness. Thank You that You are bringing all things toward restoration. Search my heart and cleanse what needs to be made new. Help me live honestly before You, trusting Your grace and Your justice. Keep my hope anchored in Jesus, who will complete the work You have begun. Amen.`,
    prayer: '',
    completionSummary:
      'You have completed The Way Back to God. From the door to the final cleansing, God has revealed a clear path through Jesus.',
    seriesCompleteScreen: {
      title: 'Study Complete',
      message:
        'You have completed The Way Back to God. From the door to the final cleansing, God has revealed a clear path through Jesus. He forgives, cleanses, restores, and will one day remove sin completely.',
      primaryCta: { label: 'Back to Foundations Path', href: '/paths/foundations' },
      secondaryCta: {
        label: 'Review this study',
        href: '/study-library/the-way-back-to-god',
      },
    },
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'wb-l7-q1',
          prompt: 'What was the main purpose of the Day of Atonement?',
          options: ['Cleansing from sin', 'Building new cities', 'Increasing wealth', 'Avoiding prayer'],
          correctIndex: 0,
          explanation: 'Leviticus 16:30 shows that the Day of Atonement was about cleansing from all sin.',
        },
        {
          id: 'wb-l7-q2',
          prompt: 'What does Daniel 7:9-10 describe?',
          options: ['A scene of judgment', 'The creation of animals', 'The fall of Egypt', 'A wedding feast'],
          correctIndex: 0,
          explanation: 'Daniel 7 describes a judgment scene where the books are opened.',
        },
        {
          id: 'wb-l7-q3',
          prompt: 'According to Revelation 14:6-7, what has come?',
          options: [
            "The hour of God's judgment",
            'The end of Scripture',
            'The removal of prayer',
            'The destruction of love',
          ],
          correctIndex: 0,
          explanation: 'Revelation 14 says the hour of God\'s judgment has come.',
        },
        {
          id: 'wb-l7-q4',
          prompt: "What is God's ultimate goal regarding sin?",
          options: [
            'To fully remove it and restore what was broken',
            'To ignore it forever',
            'To make it stronger',
            'To leave it unresolved',
          ],
          correctIndex: 0,
          explanation: 'The sanctuary points to complete restoration, not partial forgiveness.',
        },
        {
          id: 'wb-l7-q5',
          kind: 'reflection',
          prompt: 'What would it look like for you to live openly before God instead of hiding anything?',
          explanation:
            'God\'s cleansing work happens in truth. Living openly before Him allows His grace to restore deeply.',
        },
      ],
    },
  },
}
