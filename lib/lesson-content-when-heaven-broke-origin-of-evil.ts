import { WHEN_HEAVEN_BROKE_OVERVIEW_HREF, buildDeeperShellLesson } from '@/lib/deeper-lesson-shell'
import { DEEPER_QUIZ_TITLE, DEEPER_STEP_TITLES } from '@/lib/deeper-lesson-workflow'
import { FROM_LIGHT_TO_REBELLION_STAGES } from '@/lib/from-light-to-rebellion-timeline-stages'
import type { LessonReaderContent } from '@/lib/lesson-content'
import type { LessonQuizPayload } from '@/lib/lesson-quiz-types'
import { scriptureThreadBlock } from '@/lib/scripture-thread-blocks'

const QUIZ_SHELL: Pick<LessonQuizPayload, 'eyebrow' | 'title' | 'description' | 'settings'> = {
  eyebrow: 'CHECK YOUR UNDERSTANDING',
  title: DEEPER_QUIZ_TITLE,
  description: 'Review what Scripture showed before you continue.',
  settings: {
    quizRequired: false,
    passingScore: 70,
    allowRetake: true,
  },
}

const LESSON_1_SCRIPTURE_THREAD = scriptureThreadBlock({
  title: 'Evil Did Not Begin With God\u2019s Design',
  question: 'If God is good, where did evil come from?',
  references: [
    { reference: 'Genesis 1:31', shortNote: 'God\u2019s creation began good. Evil was not part of the original design.' },
    {
      reference: 'Ezekiel 28:14 to 15',
      shortNote:
        'Lucifer was created, not eternal. He was once perfect, honored, and close to God\u2019s throne.',
    },
    { reference: 'Isaiah 14:12', shortNote: 'Lucifer\u2019s fall was from light into rebellion.' },
    { reference: 'Luke 10:18', shortNote: 'Jesus confirms Satan\u2019s fall was real.' },
    { reference: 'James 1:13', shortNote: 'God is not the source of evil and does not tempt His creation into sin.' },
    { reference: '1 John 1:5', shortNote: 'There is no darkness in God\u2019s character.' },
  ],
  takeaway:
    'God did not create the devil. He created Lucifer perfect. Iniquity was found in a free being who turned from worship to self-exaltation.',
})

/** Guided reader: "When Heaven Broke" (Deeper Studies). */
export const whenHeavenBrokeOriginOfEvilSeriesLessonLibrary: Record<string, LessonReaderContent> = {
  'the-mystery-that-began-in-heaven': {
    openingThoughtStepTitle: DEEPER_STEP_TITLES.objection,
    coreClaim:
      'God did not create evil. He created free beings capable of love, and one created being turned from trust to rebellion.',
    keyTension: 'If God created everything good, where did evil come from?',
    openingThought: `If God is good, where did evil come from?

Evil is not hard to see. We see it in violence, lies, betrayal, addiction, abuse, pride, death, and the quiet damage sin leaves inside the human heart.

But the deeper question is not only, "Why is the world broken?" The deeper question is where evil began if God created everything good.

The Bible does not begin the story of evil with humanity. It points us higher. Before sin entered Eden, rebellion began in heaven. Before Adam and Eve fell, Lucifer turned from the God who made him.

God did not create the devil. God created Lucifer. Lucifer made himself Satan.`,
    scriptureStepTitle: DEEPER_STEP_TITLES.scriptureTrail,
    scriptureRef: 'Ezekiel 28:15',
    scriptureQuote: `Thou wast perfect in thy ways from the day that thou wast created, till iniquity was found in thee.`,
    scriptureAfterPrimary: `This verse is one of the clearest statements in Scripture that evil had a beginning. Lucifer was not created corrupt. Something changed.`,
    scriptureSecondaryRef: 'Ezekiel 28:14',
    scriptureSecondaryQuote: `Thou art the anointed cherub that covereth; and I have set thee so: thou wast upon the holy mountain of God; thou hast walked up and down in the midst of the stones of fire.`,
    scriptureAfterSecondary: `Lucifer was honored with nearness to God. His position was a gift, not a right to compete with the Creator.`,
    scriptureWordInsights: [
      {
        surface: 'perfect',
        lemma: 'תָּמִים (tamim)',
        transliteration: 'tamim',
        meaning: 'Complete, sound, upright, without moral corruption.',
        strongs: 'H8549',
        reference: 'Ezekiel 28:15',
        note: `Lucifer was not divine. He was created upright and without corruption until iniquity was found in him.

Sin did not begin because God made a flawed being. It began when a free being turned from God\u2019s order and love.

The fall was not a creation defect. It was a worship defect.`,
      },
    ],
    scriptureTrailHelper: 'Follow the evidence through Scripture.',
    scriptureTrailSummary:
      'This trail moves from creation\u2019s goodness to Lucifer\u2019s fall, then anchors the answer in God\u2019s unchanging character.',
    scriptureSupplementBlocks: [LESSON_1_SCRIPTURE_THREAD],
    teachingPointsStepTitle: DEEPER_STEP_TITLES.answer,
    teachingPoints: [
      `1. God Created Lucifer, Not Satan

Satan is not a myth or a cartoon villain. Scripture presents him as a real fallen being once called Lucifer.

Lucifer was created perfect. Evil did not begin because God created something corrupt. Evil began when a created being turned from trust to pride, from worship to self-exaltation, and from love to rebellion.

Lucifer corrupted what God gave him. His beauty became pride. His wisdom became self-deception. His position became ambition.`,
      `2. The First Sin Was Not Atheism. It Was Self-Exaltation.

Worship is central to the conflict. Satan wanted God\u2019s place, not simply independence from God.

Isaiah 14 and Ezekiel 28 show a heart that began to rise. "I will ascend." "I will exalt my throne." The language is not confusion. It is ambition against the throne of God.

The first sin in heaven was not ignorance. It was the desire to be honored like God.`,
      `3. Evil Has a Beginning, But God Has No Darkness

Evil is not equal to God. Satan is a created being in rebellion against the Creator.

James 1:13 refuses to place temptation at God\u2019s feet. 1 John 1:5 declares that God is light and in Him is no darkness at all.

God\u2019s character is revealed by how He deals with evil, most clearly through Jesus Christ. The cross will later show that God does not answer rebellion with indifference. He answers it with truth, sacrifice, and love.`,
    ],
    godsCharacter: `James 1:13 refuses to place temptation at God\u2019s feet. 1 John 1:5 declares that God is light and in Him is no darkness at all.

God\u2019s character is revealed by how He deals with evil, most clearly through Jesus Christ. He does not answer rebellion with indifference. He answers it with truth, sacrifice, and love so the universe can see who He truly is.`,
    wordStudyFullStep: false,
    afterTeachingBlocks: [
      {
        type: 'heavenToRebellionTimeline',
        sectionEyebrow: 'Trace the Fall',
        sectionSubtitle: 'From created perfection to open rebellion.',
        title: 'From Light to Rebellion',
        stages: FROM_LIGHT_TO_REBELLION_STAGES,
      },
      { type: 'studyCta', label: 'Back to study overview', href: WHEN_HEAVEN_BROKE_OVERVIEW_HREF },
    ],
    reflectStepTitle: DEEPER_STEP_TITLES.heartCheck,
    reflectPlaceholder: 'Write your response. What is God showing you through this study?',
    reflectPrompt: `1. Where am I tempted to blame God for brokenness that sin has caused?

2. Are there areas where I want God\u2019s blessings, but not God\u2019s authority?

3. What gifts, talents, beauty, intelligence, or influence could become dangerous if they are not surrendered to God?

4. Is there anything in my life slowly taking the place of worship?

5. Do I see God as light, or have painful experiences made me suspicious of His character?

The safest heart is not the most gifted heart. The safest heart is the surrendered heart.`,
    lifeApplicationStepTitle: DEEPER_STEP_TITLES.practice,
    practiceCalloutTitle: 'Practice for 24 hours',
    lifeApplication: `Watch for any moment where self tries to take the throne.

Look for thoughts like:

"I deserve more recognition."

"I should be in control."

"I know better than God."

"I can make this decision without prayer."

"I want the blessing, but not the surrender."

When you notice it, stop and pray:

"Lord, keep my heart surrendered before pride has room to grow."

Father, You are light, and there is no darkness in You. Help me see evil for what it is, but help me see You for who You are. Guard my heart from pride, self-exaltation, and distrust. Teach me to worship You with a surrendered spirit. Keep me close to Jesus, who reveals Your love and truth. Amen.`,
    prayer: '',
    completionSummary: `Evil began in heaven, not in God\u2019s character. Lucifer was created perfect, but pride turned worship toward self.`,
    forwardQuestion: `If self-exaltation began the conflict in heaven, where will you notice that same pattern trying to grow in your own heart this week?`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'whb-l1-q1',
          prompt: 'According to Scripture, was Lucifer created evil?',
          options: [
            'Yes, God created him as Satan',
            'No, he was created perfect before iniquity was found in him',
            'The Bible does not say anything about his origin',
            'He was always equal with God',
          ],
          correctIndex: 1,
          explanation:
            'Ezekiel 28:15 says Lucifer was perfect from the day he was created until iniquity was found in him.',
        },
        {
          id: 'whb-l1-q2',
          prompt: 'Which passage says Lucifer was perfect from the day he was created until iniquity was found in him?',
          options: ['Genesis 3:15', 'Ezekiel 28:15', 'Matthew 4:10', 'Revelation 21:4'],
          correctIndex: 1,
          explanation: 'Ezekiel 28:15 describes Lucifer\u2019s original condition before rebellion.',
        },
        {
          id: 'whb-l1-q3',
          prompt: 'What was central to Lucifer\u2019s rebellion?',
          options: ['Hunger', 'Fear of humanity', 'Pride and self-exaltation', 'Lack of intelligence'],
          correctIndex: 2,
          explanation:
            'Isaiah 14 and Ezekiel 28 show pride and the desire to rise above the place God gave.',
        },
        {
          id: 'whb-l1-q4',
          prompt: 'Which statement best reflects the lesson?',
          options: [
            'God created Satan evil to test humanity',
            'Evil is eternal like God',
            'Satan is equal in power to God',
            'God created Lucifer perfect, but Lucifer chose rebellion',
          ],
          correctIndex: 3,
          explanation:
            'Scripture presents Lucifer as a created being who turned from God, not as evil by divine design.',
        },
        {
          id: 'whb-l1-q5',
          prompt: 'Why does the origin of evil matter?',
          options: [
            'It helps us understand that God\u2019s character is not the source of evil',
            'It proves humans are not responsible for choices',
            'It shows Satan is stronger than humans',
            'It means sin is not serious',
          ],
          correctIndex: 0,
          explanation:
            'Knowing where evil began protects us from blaming God for darkness He is working to end.',
        },
      ],
    },
  },
  'the-rise-of-self': buildDeeperShellLesson({
    primaryScripture: 'Isaiah 14:13 to 14',
    visualBlock: { type: 'worshipDirectionDiagram' },
  }),
  'the-lie-in-the-garden': buildDeeperShellLesson({
    primaryScripture: 'Genesis 3:4 to 5',
    visualBlock: { type: 'deceptionPatternBuilder' },
  }),
  'the-war-behind-the-world': buildDeeperShellLesson({
    primaryScripture: 'Revelation 12:7 to 9',
    visualBlock: { type: 'satansMethodsMatrix' },
  }),
  'the-end-of-evil-and-the-face-of-the-father': buildDeeperShellLesson({
    primaryScripture: 'Nahum 1:9',
    visualBlock: { type: 'greatControversyResolutionTimeline' },
  }),
}
