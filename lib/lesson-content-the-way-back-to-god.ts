import type { LessonContentBlock } from '@/lib/lesson-content-blocks'
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
}
