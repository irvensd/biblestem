import { WHEN_HEAVEN_BROKE_OVERVIEW_HREF } from '@/lib/deeper-lesson-shell'
import {
  EDEN_DECEPTION_PATTERN_CANONICAL_ORDER,
  EDEN_DECEPTION_PATTERN_COMPLETE_SUMMARY,
  EDEN_DECEPTION_PATTERN_SCENARIOS,
  EDEN_DECEPTION_PATTERN_STEPS,
} from '@/lib/deception-pattern-builder-stages'
import {
  FINAL_ANSWER_TO_EVIL_COMPLETE_SUMMARY,
  FINAL_ANSWER_TO_EVIL_REFLECTION_CARDS,
  FINAL_ANSWER_TO_EVIL_TIMELINE_STEPS,
} from '@/lib/great-controversy-resolution-timeline-stages'
import {
  SATANS_METHODS_MATRIX_COMPLETE_SUMMARY,
  WAR_BEHIND_WORLD_METHODS_MATRIX_ROWS,
  WAR_BEHIND_WORLD_METHODS_MATRIX_SCENARIOS,
} from '@/lib/satans-methods-matrix-stages'
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

/** Guided reader: "Did God Create Evil?" (Deeper Studies). */
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
  'the-rise-of-self': {
    openingThoughtStepTitle: DEEPER_STEP_TITLES.objection,
    tensionStepTitle: 'Why This Question Matters',
    coreClaim:
      'If pride could begin in heaven, sin is deeper than environment. A perfect place cannot guarantee a surrendered heart.',
    keyTension: 'If Lucifer was created perfect, how could pride begin in him?',
    openingThought: `This is where the question gets harder.

Lesson 1 showed that God did not create the devil. God created Lucifer perfect. But that raises another serious question:

How does a perfect being become proud?

Lucifer lived in heaven. He had beauty, wisdom, position, honor, and access to the presence of God. He was not surrounded by corruption. He was not wounded by a broken childhood. He was not deceived by a sinful world.

Yet something shifted inside him.

Scripture does not describe sin beginning as an accident. It began in the heart.

Before there was open war, there was inward self-exaltation.

Before Lucifer fought against God, he first imagined himself above others.

Before he became Satan, he allowed self to rise.`,
    scriptureStepTitle: DEEPER_STEP_TITLES.scriptureTrail,
    scriptureRef: 'Isaiah 14:13 to 14',
    scriptureQuote: `For thou hast said in thine heart, I will ascend into heaven, I will exalt my throne above the stars of God... I will be like the most High.`,
    scriptureAfterPrimary: `The repeated language matters. Sin did not begin with confusion. It began with a will turned away from God.

Lucifer was not asking for guidance. He was reaching for a throne that was not his.`,
    scriptureSecondaryRef: 'Ezekiel 28:17',
    scriptureSecondaryQuote: `Thine heart was lifted up because of thy beauty, thou hast corrupted thy wisdom by reason of thy brightness.`,
    scriptureAfterSecondary: `His gifts were real. The danger began when those gifts stopped leading him toward humility and started feeding pride.`,
    scriptureWordInsights: [
      {
        surface: 'I will',
        lemma: 'Repeated resolve (Hebrew idiom in context)',
        transliteration: 'I will',
        meaning: 'Self-exalting resolve that places the creature above surrender to God.',
        reference: 'Isaiah 14:13 to 14',
        note: `In Isaiah 14, Lucifer\u2019s rebellion is revealed through repeated self-exalting language:

"I will ascend."

"I will exalt."

"I will sit."

"I will be like the most High."

This phrase shows more than ambition. It reveals a will turned away from God.

The issue was not that Lucifer had purpose. The issue was that his purpose became detached from surrender.

In Scripture, the safest will is not the strongest will.

It is the surrendered will.`,
      },
    ],
    scriptureTrailHelper: 'Follow the trail. Scripture shows how pride turns worship inward.',
    scriptureTrailSummary:
      'Lucifer\u2019s fall was connected to pride, corrupted wisdom, false worship, and a desire for honor that belongs to God alone.',
    scriptureSupplementBlocks: [
      scriptureThreadBlock({
        title: 'Pride Turns Worship Inward',
        question:
          'Follow the trail. Scripture shows that Lucifer\u2019s fall was not random. It was connected to pride, self-exaltation, corrupted wisdom, and a desire for worship that belongs to God alone.',
        references: [
          {
            reference: 'Ezekiel 28:17',
            verseText:
              'Thine heart was lifted up because of thy beauty, thou hast corrupted thy wisdom by reason of thy brightness.',
            shortNote:
              'Lucifer\u2019s gifts became dangerous when they turned his attention away from God and toward himself.',
          },
          {
            reference: 'Isaiah 14:13 to 14',
            verseText:
              'I will ascend... I will exalt my throne... I will be like the most High.',
            shortNote:
              'Lucifer\u2019s rebellion grew from inward self-exaltation. His desire was not simply freedom from God. He wanted the place that belonged to God.',
          },
          {
            reference: 'Proverbs 16:18',
            verseText: 'Pride goeth before destruction, and an haughty spirit before a fall.',
            shortNote: 'Pride does not remain harmless. When pride is cherished, it moves the soul toward ruin.',
          },
          {
            reference: 'Matthew 4:8 to 10',
            verseText: 'All these things will I give thee, if thou wilt fall down and worship me.',
            shortNote:
              'When Satan tempted Jesus, his desire was still worship. The same issue that began in heaven appeared again in the wilderness.',
          },
          {
            reference: 'Romans 1:21 to 25',
            verseText: 'They worshipped and served the creature more than the Creator.',
            shortNote: 'Sin always disorders worship. It places the created thing above the Creator.',
          },
          {
            reference: 'Revelation 14:6 to 7',
            verseText:
              'Fear God, and give glory to him... and worship him that made heaven, and earth, and the sea, and the fountains of waters.',
            shortNote:
              'The final call of Scripture brings worship back to the Creator. The conflict that began with false worship ends with a call to true worship.',
          },
        ],
        takeaway:
          'Pride does not stay private. It redirects worship, corrupts wisdom, and moves the soul toward ruin unless it is surrendered to God.',
      }),
    ],
    teachingPointsStepTitle: DEEPER_STEP_TITLES.answer,
    teachingPoints: [
      `1. Self Rose Above Surrender

Lucifer\u2019s fall began when self rose above surrender.

God created Lucifer beautiful, wise, and honored. Those gifts were not evil. Beauty was not evil. Wisdom was not evil. Position was not evil.

The danger began when Lucifer stopped receiving those gifts with humility and started treating them as reasons for self-exaltation.

His beauty became pride.

His wisdom became corrupted.

His position became ambition.

His influence became a platform for rebellion.`,
      `2. "I Will" Reveals the Heart

Isaiah 14 reveals the language of his heart:

"I will ascend."

"I will exalt my throne."

"I will sit."

"I will be like the most High."

The repeated phrase matters. Sin began with the creature placing his own will above the will of God.

This was not healthy ambition.

This was worship turned inward.

Lucifer did not simply want to be appreciated. He wanted to be exalted.

He did not simply want purpose. He wanted supremacy.

He did not simply want closeness to God. He wanted equality with God.`,
      `3. Worship Is Central to the Conflict

That is why worship is central to the conflict between God and Satan.

Satan\u2019s goal is not merely to make people behave badly. His deeper goal is to redirect worship away from God.

Sometimes that worship goes to power.

Sometimes to pleasure.

Sometimes to money.

Sometimes to status.

Sometimes to self.

But the root is the same: something created takes the place of the Creator.`,
    ],
    godsCharacter: `Lucifer\u2019s pride reveals something important about God\u2019s government:

God does not force worship.

If God wanted robotic obedience, rebellion could never have happened. But forced worship is not love. Coerced loyalty is not faithfulness.

God created beings capable of love, trust, loyalty, worship, and choice.

That freedom made love possible.

It also made rebellion possible.

This does not make God responsible for evil. It shows that God values love so deeply that He did not create a universe of machines.

God\u2019s kingdom is not built on self-exaltation. It is built on love.

Satan\u2019s kingdom says, "Lift yourself," "Take the throne," "Demand worship," and "Serve yourself."

God\u2019s kingdom says, "Love the Lord thy God," "Serve one another," "Humble yourself," and "Worship the Creator."

Jesus revealed this contrast perfectly.

Satan reached upward for a throne that was not his.

Jesus stepped downward to save people who were His.

Satan grasped for worship.

Jesus humbled Himself to the death of the cross.

That is the difference between the spirit of Satan and the character of God.`,
    wordStudyFullStep: false,
    afterTeachingBlocks: [
      {
        type: 'worshipShift',
        sectionEyebrow: 'Trace the shift',
        sectionSubtitle: 'See how worship moves toward God, self, or control over others.',
        title: 'The Worship Shift',
        subtitle: 'Three directions of worship, then practice identifying them in real life.',
      },
      { type: 'studyCta', label: 'Back to study overview', href: WHEN_HEAVEN_BROKE_OVERVIEW_HREF },
    ],
    reflectStepTitle: DEEPER_STEP_TITLES.heartCheck,
    reflectPlaceholder: 'Write your response. What is God showing you through this study?',
    reflectPrompt: `Pride is easy to condemn in Lucifer and hard to detect in ourselves.

But this lesson is not just about what happened in heaven. It is about what can happen in any heart when God\u2019s gifts are no longer surrendered back to Him.

1. Where am I tempted to make life about my recognition instead of God\u2019s glory?

2. Do I use my gifts to serve God, or to prove my importance?

3. Am I frustrated because God has not given me the position, platform, relationship, or influence I think I deserve?

4. Where has my "I will" become louder than God\u2019s will?

5. Is there anything created that receives more attention, affection, or obedience from me than the Creator?

6. Do I secretly want God\u2019s blessings while resisting God\u2019s authority?

Pride does not always begin by rejecting God. Sometimes it begins by quietly replacing Him.`,
    lifeApplicationStepTitle: DEEPER_STEP_TITLES.practice,
    practiceCalloutTitle: 'Practice for 24 hours',
    lifeApplication: `For the next 24 hours, pay attention to every moment where self wants to be seen, praised, defended, or obeyed.

When you notice pride rising, do three things:

1. Name it honestly.
Say, "This is pride trying to take the throne."

2. Surrender it quickly.
Pray before you explain, defend, post, react, or respond.

3. Redirect worship.
Ask, "How can God receive glory here instead of me?"

Father, search my heart and show me where self is trying to rise. Keep my gifts from becoming idols. Keep my confidence from becoming pride. Teach me to worship You with humility, joy, and surrender. Let my life point back to You, not to myself. Amen.`,
    prayer: '',
    completionSummary: `Lucifer\u2019s fall began when self rose above surrender and worship turned inward.`,
    forwardQuestion: `Where will you notice your own "I will" trying to rise louder than God\u2019s will this week?`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'whb-l2-q1',
          prompt: 'What was one reason Lucifer\u2019s heart became lifted up?',
          options: ['His weakness', 'His beauty', 'His poverty', 'His fear of humans'],
          correctIndex: 1,
          explanation:
            'Ezekiel 28:17 says his heart was lifted up because of his beauty and his wisdom was corrupted by reason of his brightness.',
        },
        {
          id: 'whb-l2-q2',
          prompt: 'Which phrase is repeated in Isaiah 14 and reveals Lucifer\u2019s self-exalting desire?',
          options: ['"I fear"', '"I serve"', '"I will"', '"I repent"'],
          correctIndex: 2,
          explanation:
            'Isaiah 14 records repeated "I will" language that reveals ambition against God\u2019s throne.',
        },
        {
          id: 'whb-l2-q3',
          prompt: 'What did Satan ask Jesus to do in the wilderness?',
          options: [
            'Build a temple',
            'Fall down and worship him',
            'Call down fire from heaven',
            'Return to heaven immediately',
          ],
          correctIndex: 1,
          explanation: 'Matthew 4:8 to 10 shows Satan still seeking worship in the wilderness temptation.',
        },
        {
          id: 'whb-l2-q4',
          prompt: 'According to Romans 1, what happens when worship is corrupted?',
          options: [
            'The creature is served above the Creator',
            'People automatically become wiser',
            'Sin disappears',
            'God removes human choice',
          ],
          correctIndex: 0,
          explanation: 'Romans 1:21 to 25 shows worship and service turned toward the creature over the Creator.',
        },
        {
          id: 'whb-l2-q5',
          prompt: 'What is the main BibleStem conclusion of this lesson?',
          options: [
            'Pride is harmless if a person is gifted',
            'Lucifer fell because God created him evil',
            'Sin began when self rose above surrender',
            'Worship is not connected to the conflict between God and Satan',
          ],
          correctIndex: 2,
          explanation:
            'Lucifer was created perfect, but pride and self-exaltation turned worship away from God.',
        },
      ],
    },
  },
  'the-lie-in-the-garden': {
    openingThoughtStepTitle: DEEPER_STEP_TITLES.objection,
    tensionStepTitle: 'Why This Question Matters',
    coreClaim: `Genesis 3 matters because Satan\u2019s first attack on humanity was not open violence.

It was a question.

"Yea, hath God said?"

Before Satan challenged Eve\u2019s behavior, he challenged her trust.

He wanted her to wonder whether God\u2019s word could be trusted.

He wanted her to believe God was withholding something good.

He wanted her to see God\u2019s command as restriction instead of protection.

That is still how temptation works.

Sin rarely begins by looking ugly.

It often begins by making God seem unreasonable.

It makes obedience look limiting.

It makes rebellion look like freedom.

It makes distrust sound intelligent.

The serpent\u2019s lie was not just about fruit.

It was about the character of God.

If Satan could convince Eve that God was not fully good, then disobedience would seem justified.

That is why this lesson matters.

Every temptation carries a hidden claim about God.`,
    keyTension: 'If God is good, why did He allow Adam and Eve to be tested?',
    openingThought: `The story of evil does not stay in heaven.

After Lucifer\u2019s fall, the conflict came to earth. Genesis 3 shows the moment Satan brought rebellion into human experience.

But this raises a difficult question:

Why place a tree in Eden at all?
Why allow a serpent to speak?
Why give Adam and Eve access to a choice that could bring death?

At first glance, the test in Eden can feel confusing. If God loved humanity, why allow the possibility of sin?

But Scripture shows that the tree was not a trap. It was a place of trust.

Love cannot exist without freedom.

Obedience cannot be meaningful without choice.

Trust cannot be real if there is no possibility of distrust.

The garden reveals that God wanted Adam and Eve to love Him freely, not mechanically.

Satan saw that freedom and turned it into an opportunity for deception.`,
    scriptureStepTitle: DEEPER_STEP_TITLES.scriptureTrail,
    scriptureRef: 'Genesis 3:4 to 5',
    scriptureQuote: `And the serpent said unto the woman, Ye shall not surely die: For God doth know that in the day ye eat thereof, then your eyes shall be opened, and ye shall be as gods, knowing good and evil.`,
    scriptureAfterPrimary: `Two lies stand side by side. Satan denied the consequence God warned about, then promised elevation apart from God.

The attack was not only about fruit. It was about whether the Creator could be trusted.`,
    scriptureSecondaryRef: 'Genesis 3:1',
    scriptureSecondaryQuote: `Yea, hath God said, Ye shall not eat of every tree of the garden?`,
    scriptureAfterSecondary: `The serpent began by twisting God\u2019s generosity into restriction. Distrust often starts with a small distortion of what God actually said.`,
    scriptureWordInsights: [
      {
        surface: 'deceived',
        lemma: 'Beguiled (nasha / planoō context)',
        transliteration: 'beguiled',
        meaning: 'Led astray by subtle distortion rather than brute force.',
        reference: 'Genesis 3:13',
        note: `In Genesis 3, deception does not begin with a loud denial of God.

It begins with a subtle distortion of what God said.

To be deceived is not only to believe false information. It is to be led into seeing God, sin, and self incorrectly.

Satan deceived Eve by making God\u2019s command look restrictive, God\u2019s warning look false, and disobedience look wise.

Biblical deception is dangerous because it does not always feel like rebellion at first.

Sometimes it feels like a better explanation.

Sometimes it feels like freedom.

Sometimes it feels like finally seeing clearly.

But any voice that leads us away from trust in God\u2019s word is not giving us light.

It is repeating the serpent\u2019s lie.`,
      },
    ],
    scriptureTrailHelper: 'Follow the trail. See how Satan attacked trust before he attacked behavior.',
    scriptureTrailSummary:
      'The serpent questioned God\u2019s word, denied His warning, attacked His motive, and made rebellion appear desirable.',
    scriptureSupplementBlocks: [
      scriptureThreadBlock({
        title: 'The Serpent Attacks Trust',
        question:
          'Follow the trail. Scripture shows that Satan\u2019s method in Eden was built on distortion, denial, and distrust. He questioned God\u2019s word, contradicted God\u2019s warning, and made rebellion appear desirable.',
        references: [
          {
            reference: 'Genesis 2:16 to 17',
            verseText:
              'And the LORD God commanded the man, saying, Of every tree of the garden thou mayest freely eat: But of the tree of the knowledge of good and evil, thou shalt not eat of it.',
            shortNote:
              'God\u2019s command began with generosity. Adam and Eve were free to eat from every tree except one. The restriction was surrounded by abundance.',
          },
          {
            reference: 'Genesis 3:1',
            verseText: 'Yea, hath God said, Ye shall not eat of every tree of the garden?',
            shortNote:
              'Satan began by twisting God\u2019s words. He made God sound more restrictive than He actually was.',
          },
          {
            reference: 'Genesis 3:4',
            verseText: 'Ye shall not surely die.',
            shortNote:
              'Satan directly denied God\u2019s warning. The first lie to humanity attacked the reality of sin\u2019s consequence.',
          },
          {
            reference: 'Genesis 3:5',
            verseText: 'Ye shall be as gods, knowing good and evil.',
            shortNote:
              'Satan suggested that God was withholding something that would elevate humanity. He made rebellion look like enlightenment.',
          },
          {
            reference: 'John 8:44',
            verseText:
              'He was a murderer from the beginning, and abode not in the truth... for he is a liar, and the father of it.',
            shortNote:
              'Jesus identifies Satan as the source of lies and murder. Deception and destruction belong to his character.',
          },
          {
            reference: '2 Corinthians 11:3',
            verseText:
              'But I fear, lest by any means, as the serpent beguiled Eve through his subtilty, so your minds should be corrupted.',
            shortNote:
              'The danger of Eden is still present. Satan still works to corrupt the mind by leading people away from simple trust in God.',
          },
          {
            reference: 'Romans 5:12',
            verseText: 'By one man sin entered into the world, and death by sin.',
            shortNote: 'Sin entered human history through disobedience, and death followed sin. Eden shows the cost of distrust.',
          },
        ],
        takeaway:
          'Every temptation still carries a hidden claim about God. The serpent\u2019s lie was simple but deadly: God cannot be fully trusted.',
      }),
    ],
    teachingPointsStepTitle: DEEPER_STEP_TITLES.answer,
    teachingPoints: [
      `1. Eden Was Not a Trap

God did not place Adam and Eve in Eden to make them fall.

He placed them in a world full of life, beauty, purpose, relationship, and freedom.

The tree of the knowledge of good and evil was not evidence that God wanted humanity to sin. It was evidence that love includes the freedom to choose.

God gave one clear boundary.

Satan turned that boundary into an accusation.`,
      `2. The Pattern of Deception

God said, "You may freely eat."

Satan made it sound like, "God is holding you back."

God said disobedience would bring death.

Satan said, "Ye shall not surely die."

God gave a command for their protection.

Satan framed it as a limitation on their potential.

This is the pattern of deception:

First, Satan questions God\u2019s word.

Then he denies God\u2019s warning.

Then he attacks God\u2019s motive.

Then he makes sin look desirable.`,
      `3. Sin Entered Through Distrust

Eve did not fall because the fruit had magical power.

Adam and Eve fell because they chose another voice over God\u2019s voice.

They trusted the serpent\u2019s interpretation of reality more than the Creator\u2019s command.

Sin entered the world through distrust, disobedience, and rebellion against God\u2019s word.

The lie in the garden was simple but deadly:

God cannot be fully trusted.

Every sin since Eden repeats that same lie in a different form.`,
    ],
    godsCharacter: `Genesis 3 does not reveal a cruel God setting humanity up to fail.

It reveals a God who gives freedom, speaks clearly, warns honestly, and seeks His fallen children.

Before there was a prohibition, there was provision.

God gave Adam and Eve life.

He gave them a home.

He gave them food.

He gave them work.

He gave them each other.

He gave them access to His presence.

The command about the tree was not the center of Eden\u2019s story. God\u2019s goodness was.

Satan wanted Eve to focus on the one restricted tree and forget the garden full of gifts.

That is still one of his favorite strategies.

He magnifies what God has withheld until we forget what God has given.

But God\u2019s character is seen in His honesty.

He told them the truth about death.

He did not hide the consequence of sin.

He did not manipulate them with confusion.

After they fell, God did not abandon them.

He came looking.

Genesis 3 reveals that Satan lies to pull humanity away from God, but God comes near to rescue humanity from sin.

The serpent accused God of withholding good.

The rest of Scripture shows God giving His own Son.

That is the answer to the lie.`,
    wordStudyFullStep: false,
    afterTeachingBlocks: [
      {
        type: 'deceptionPatternBuilder',
        sectionEyebrow: 'Trace the pattern',
        sectionSubtitle: 'Arrange the four steps, then identify them in modern examples.',
        title: 'The Deception Pattern',
        subtitle: 'Use Up and Down to order the steps, then check your sequence.',
        steps: EDEN_DECEPTION_PATTERN_STEPS,
        scenarios: EDEN_DECEPTION_PATTERN_SCENARIOS,
        canonicalOrder: EDEN_DECEPTION_PATTERN_CANONICAL_ORDER,
        completionSummary: EDEN_DECEPTION_PATTERN_COMPLETE_SUMMARY,
        caption:
          'Tap each step to see its Scripture reference. Reorder until the sequence matches Eden, then work through the examples.',
      },
      { type: 'studyCta', label: 'Back to study overview', href: WHEN_HEAVEN_BROKE_OVERVIEW_HREF },
    ],
    reflectStepTitle: DEEPER_STEP_TITLES.heartCheck,
    reflectPlaceholder: 'Write your response. What is God showing you through this study?',
    reflectPrompt: `The serpent\u2019s strategy is not outdated.

He still works through the same pattern: question God\u2019s word, deny consequences, attack God\u2019s character, and make sin look like freedom.

This lesson asks us to examine where we may be listening to the wrong voice.

1. Where am I tempted to believe God is withholding something good from me?

2. What command of God feels restrictive to me right now?

3. Have I made any compromise look wise, harmless, or necessary?

4. What voice has been shaping my decisions more than Scripture?

5. Do I trust God\u2019s warnings as protection, or do I see them as control?

6. Where have I focused on what I do not have and forgotten what God has already given?

Temptation does not only ask you to break a rule.

It asks you to believe a lie about God.`,
    lifeApplicationStepTitle: DEEPER_STEP_TITLES.practice,
    practiceCalloutTitle: 'Practice for 24 hours',
    lifeApplication: `For the next 24 hours, identify one area where you are tempted to question God\u2019s goodness, God\u2019s word, or God\u2019s timing.

Write down the specific lie you are tempted to believe.

Examples:

"God is holding me back."

"This compromise will not hurt me."

"I know better than God."

"This command does not apply to my situation."

"I can disobey and still avoid the consequence."

Then answer that lie with Scripture.

Use this simple format:

The lie:
Write the false belief clearly.

The truth:
Write one Bible verse that answers it.

The response:
Write one obedient action you will take today.

Father, help me recognize the voice of the serpent when it questions Your word and misrepresents Your heart. Teach me to trust Your commands as protection, not restriction. Open my eyes to the gifts You have already placed around me. When temptation speaks, anchor me in Scripture and keep my heart loyal to You. Amen.`,
    prayer: '',
    completionSummary: `Satan\u2019s lie in Eden attacked trust in God\u2019s word and character, not merely a rule about fruit.`,
    forwardQuestion: `Where is a temptation this week trying to convince you that God is withholding good or that His warning does not matter?`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'whb-l3-q1',
          prompt: 'What was Satan\u2019s first recorded strategy against Eve?',
          options: [
            'Physical force',
            'A question that distorted God\u2019s word',
            'A public accusation',
            'A miracle in the sky',
          ],
          correctIndex: 1,
          explanation: 'Genesis 3:1 shows Satan beginning with a question that twisted what God had said.',
        },
        {
          id: 'whb-l3-q2',
          prompt: 'What did Satan directly deny in Genesis 3?',
          options: [
            'That Adam existed',
            'That the garden was real',
            'That disobedience would bring death',
            'That Eve could speak',
          ],
          correctIndex: 2,
          explanation: 'Genesis 3:4 records the serpent saying, "Ye shall not surely die."',
        },
        {
          id: 'whb-l3-q3',
          prompt: 'What did Satan suggest about God\u2019s motive?',
          options: [
            'That God was withholding something good',
            'That God had forgotten Adam and Eve',
            'That God did not create the garden',
            'That God wanted them to eat every tree',
          ],
          correctIndex: 0,
          explanation: 'Genesis 3:5 frames God as withholding enlightenment that rebellion would provide.',
        },
        {
          id: 'whb-l3-q4',
          prompt: 'According to Romans 5:12, what entered the world through sin?',
          options: ['Wisdom', 'Death', 'Freedom', 'Worship'],
          correctIndex: 1,
          explanation: 'Romans 5:12 connects sin entering the world with death entering through sin.',
        },
        {
          id: 'whb-l3-q5',
          prompt: 'What is the main BibleStem conclusion of this lesson?',
          options: [
            'The tree was a trap God used to make humanity fall',
            'Satan\u2019s lie attacked trust in God\u2019s word and character',
            'Adam and Eve had no real choice',
            'Sin began because the fruit itself was evil',
          ],
          correctIndex: 1,
          explanation:
            'Eden shows deception working through distrust of God\u2019s word, warning, and goodness before open rebellion.',
        },
      ],
    },
  },
  'the-war-behind-the-world': {
    openingThoughtStepTitle: DEEPER_STEP_TITLES.objection,
    tensionStepTitle: 'Why This Question Matters',
    coreClaim: `Many people look at the condition of the world and quietly wonder if evil is winning.

They see cruelty rewarded.
They see deception celebrated.
They see suffering multiplied.
They see people misuse religion, power, money, media, and influence to control others.

Then they ask:

Where is God?

Revelation 12 does not tell us to ignore the darkness. It tells us to understand it.

The Bible does not present Satan as a harmless symbol or imaginary villain. Scripture identifies him as a deceiver, accuser, adversary, persecutor, and destroyer.

But the Bible also refuses to give Satan more power than he has.

He is real, but he is not sovereign.

He is dangerous, but he is not divine.

He is active, but he is already judged.

This matters because if we misunderstand the conflict, we may either fear Satan too much or take him too lightly.

Scripture calls us to do neither.

We are called to be sober, watchful, faithful, and anchored in Christ.`,
    keyTension: 'If Satan is already defeated, why does evil still seem so powerful?',
    openingThought: `By Lesson 4, the question gets bigger.

Evil did not begin with God.
Lucifer\u2019s fall began with pride.
The serpent brought the lie into Eden.

But now we have to ask:

Why does the conflict still continue?

If God is stronger than Satan, why does evil still rage through the world?
Why do lies spread so easily?
Why do the innocent suffer?
Why does Satan still deceive, accuse, persecute, and destroy?

Revelation 12 pulls back the curtain and shows that human history is not merely political, social, or personal.

There is a war behind the world.

Not a war between equal powers.

Not a war where God might lose.

But a real conflict over truth, worship, loyalty, law, and the character of God.`,
    scriptureStepTitle: DEEPER_STEP_TITLES.scriptureTrail,
    scriptureRef: 'Revelation 12:7 to 9',
    scriptureQuote: `And there was war in heaven: Michael and his angels fought against the dragon; and the dragon fought and his angels... And the great dragon was cast out, that old serpent, called the Devil, and Satan, which deceiveth the whole world.`,
    scriptureAfterPrimary: `The conflict began in heaven and reached the earth. Satan lost his place, but he continues his work with great wrath because his time is short.

His central method is deception.`,
    scriptureSecondaryRef: 'Revelation 12:10',
    scriptureSecondaryQuote: `For the accuser of our brethren is cast down, which accused them before our God day and night.`,
    scriptureAfterSecondary: `Satan does not only deceive. He accuses. He brings charges, shame, fear, and condemnation against God\u2019s people.`,
    scriptureWordInsights: [
      {
        surface: 'accuser',
        lemma: 'Accuser (katēgoros)',
        transliteration: 'katēgoros',
        meaning: 'One who brings charges to condemn, shame, or separate.',
        reference: 'Revelation 12:10',
        note: `In Revelation 12:10, Satan is called the accuser of the brethren.

An accuser brings charges.

Satan\u2019s accusations are not meant to restore. They are meant to condemn, shame, distort, and separate.

This matters because accusation can sound spiritual while pushing the heart away from God.

Conviction from God leads us to repentance, hope, and restoration.

Accusation from Satan drives us toward despair, fear, hiding, and distrust.

The difference is seen in the result.

God exposes sin to heal.

Satan exposes sin to destroy.`,
      },
    ],
    scriptureTrailHelper:
      'Follow the trail. See how Satan\u2019s rebellion became a conflict involving deception, accusation, persecution, and attacks on God\u2019s people.',
    scriptureTrailSummary:
      'Satan is real and active, but Scripture exposes his methods and anchors believers in Christ, who is greater.',
    scriptureSupplementBlocks: [
      scriptureThreadBlock({
        title: 'The Conflict Behind the Visible World',
        question:
          'Follow the trail. Scripture shows that Satan\u2019s rebellion became a larger conflict involving deception, accusation, persecution, false worship, false miracles, and attacks against God\u2019s people.',
        references: [
          {
            reference: 'Revelation 12:7 to 9',
            verseText:
              'And there was war in heaven... the great dragon was cast out, that old serpent, called the Devil, and Satan, which deceiveth the whole world.',
            shortNote:
              'The conflict began in heaven and reached the earth. Satan\u2019s central method is deception.',
          },
          {
            reference: 'Revelation 12:10',
            verseText:
              'For the accuser of our brethren is cast down, which accused them before our God day and night.',
            shortNote:
              'Satan does not only deceive. He accuses. He attacks God\u2019s people by bringing charges, shame, fear, and condemnation.',
          },
          {
            reference: 'Job 1:9 to 11',
            verseText: 'Doth Job fear God for nought?',
            shortNote:
              'Satan questioned Job\u2019s loyalty and implied that God\u2019s servants only love Him because of blessings. His accusations attack both humanity and God\u2019s character.',
          },
          {
            reference: 'Matthew 4:5 to 7',
            verseText:
              'Then the devil... saith unto him, If thou be the Son of God, cast thyself down: for it is written... Jesus said unto him, It is written again, Thou shalt not tempt the Lord thy God.',
            shortNote:
              'Satan can misuse Scripture. A Bible quote twisted away from God\u2019s character is still deception.',
          },
          {
            reference: 'John 10:10',
            verseText: 'The thief cometh not, but for to steal, and to kill, and to destroy.',
            shortNote:
              'Satan\u2019s work is destructive. His promises may sound freeing, but his kingdom produces loss, death, and ruin.',
          },
          {
            reference: '2 Thessalonians 2:9 to 10',
            verseText:
              'Whose coming is after the working of Satan with all power and signs and lying wonders.',
            shortNote:
              'Not every miracle is from God. Scripture warns that Satan can use signs and wonders to support deception.',
          },
          {
            reference: 'Revelation 12:17',
            verseText:
              'And the dragon was wroth with the woman, and went to make war with the remnant of her seed.',
            shortNote:
              'Satan\u2019s anger is directed against those who remain loyal to God. The conflict includes worship, obedience, testimony, and faithfulness.',
          },
        ],
        takeaway:
          'The war behind the world is real, but Christ is greater. Scripture exposes Satan\u2019s methods so believers can stand in truth.',
      }),
    ],
    teachingPointsStepTitle: DEEPER_STEP_TITLES.answer,
    teachingPoints: [
      `1. The Conflict Is Still Unfolding

Evil still appears powerful because the conflict is still unfolding, but Satan is not in control of the final outcome.

Revelation 12 shows that Satan was cast down. He lost his place in heaven, but he continues his work on earth with great wrath because his time is short.

His methods are consistent.

He deceives.
He accuses.
He persecutes.
He misuses Scripture.
He imitates light.
He uses false signs.
He attacks God\u2019s people.
He misrepresents God\u2019s character.`,
      `2. Truth Versus Lies

This means the conflict is not only about bad behavior.

It is about truth versus lies.

It is about worship versus self-exaltation.

It is about trust versus suspicion.

It is about Christ\u2019s kingdom versus Satan\u2019s government.

Satan\u2019s strategy is to make God look harsh, distant, unfair, controlling, or unworthy of trust.

Then he offers rebellion as freedom.

But Scripture exposes the pattern.

Satan does not liberate. He enslaves.

Satan does not heal. He wounds.

Satan does not tell the truth. He distorts it.

Satan does not give life. He steals, kills, and destroys.`,
      `3. Christ Is Greater

The Bible reveals the war behind the world so believers are not confused by the darkness around them.

We do not need to pretend evil is small.

We need to remember Christ is greater.`,
    ],
    godsCharacter: `The fact that God reveals this conflict shows His mercy.

God does not leave His people ignorant of Satan\u2019s methods.

He warns us because He loves us.

He exposes deception because He wants us free.

He reveals the enemy\u2019s strategy because He wants us anchored in truth.

God\u2019s character is not like Satan\u2019s.

Satan hides his motives.

God reveals truth.

Satan uses force and fear.

God calls for trust and love.

Satan accuses.

Christ intercedes.

Satan destroys.

Jesus gives life.

Revelation 12 does not show a frightened God reacting to Satan. It shows a faithful God exposing Satan\u2019s work, preserving His people, and moving history toward final victory.

The cross is the clearest proof.

At the cross, Satan\u2019s hatred was exposed.

At the cross, God\u2019s love was revealed.

At the cross, the Accuser was answered.

At the cross, Christ defeated the one who had the power of death.

The war behind the world is real, but God\u2019s character is not in question for those who look at Jesus.`,
    wordStudyFullStep: false,
    afterTeachingBlocks: [
      {
        type: 'satansMethodsMatrix',
        sectionEyebrow: 'Know the methods',
        sectionSubtitle: 'Match each method to its Scripture, then identify them in modern examples.',
        title: 'Satan\u2019s Methods Matrix',
        subtitle: 'Select the passage that exposes each method, then work through the examples.',
        rows: WAR_BEHIND_WORLD_METHODS_MATRIX_ROWS,
        scenarios: WAR_BEHIND_WORLD_METHODS_MATRIX_SCENARIOS,
        matchScriptures: true,
        completionSummary: SATANS_METHODS_MATRIX_COMPLETE_SUMMARY,
        caption:
          'Tap a method to review its description. Match all six passages, then identify which method appears in each example.',
      },
      { type: 'studyCta', label: 'Back to study overview', href: WHEN_HEAVEN_BROKE_OVERVIEW_HREF },
    ],
    reflectStepTitle: DEEPER_STEP_TITLES.heartCheck,
    reflectPlaceholder: 'Write your response. What is God showing you through this study?',
    reflectPrompt: `This lesson is not meant to make us obsessed with Satan.

It is meant to make us discerning, faithful, and more deeply anchored in Christ.

The enemy works through deception, accusation, fear, false worship, and distorted truth. But the believer\u2019s safety is not paranoia. It is closeness to Jesus and confidence in Scripture.

1. Where am I tempted to believe Satan\u2019s accusations more than God\u2019s promises?

2. Have I mistaken spiritual activity for spiritual truth?

3. Do I test teachings, miracles, claims, and impressions by Scripture?

4. Where has fear made Satan seem bigger than Christ?

5. Am I more focused on the darkness of the world or the victory of Jesus?

6. What lie about God do I need to reject today?

Discernment is not fear.

Discernment is truth guided by Scripture and anchored in Christ.`,
    lifeApplicationStepTitle: DEEPER_STEP_TITLES.practice,
    practiceCalloutTitle: 'Practice for 24 hours',
    lifeApplication: `For the next 24 hours, pay attention to one of Satan\u2019s common methods when it appears in your thoughts, media, conversations, or temptations.

Choose one method to watch for:

1. Deception
A thought or message that twists truth.

2. Accusation
A voice that drives shame without leading to repentance and hope.

3. Fear
A pressure that makes evil seem stronger than God.

4. Misused Scripture
A Bible phrase used without the character, context, or spirit of Christ.

5. False Worship
Anything pulling your loyalty away from God.

When you notice it, respond with Scripture.

Use this format:

The method:
Name what is happening.

The lie:
Write the false message clearly.

The Scripture:
Write one Bible verse that answers it.

The response:
Choose one faithful action.

Father, open my eyes to truth without making my heart afraid. Teach me to recognize deception, reject accusation, and stand on Scripture. Keep me close to Jesus. Let Your word shape my mind, Your love steady my heart, and Your Spirit keep me faithful in the conflict around me. Amen.`,
    prayer: '',
    completionSummary: `The conflict is real, but Christ is greater. Scripture exposes Satan\u2019s methods so believers can stand in truth.`,
    forwardQuestion: `Which of Satan\u2019s methods showed up in your thoughts or conversations today, and what Scripture will you use to answer it?`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'whb-l4-q1',
          prompt: 'According to Revelation 12, where did war break out?',
          options: ['Egypt', 'Heaven', 'Babylon', 'Eden'],
          correctIndex: 1,
          explanation: 'Revelation 12:7 describes war in heaven before Satan was cast to the earth.',
        },
        {
          id: 'whb-l4-q2',
          prompt: 'What is one major method Satan uses according to Revelation 12:9?',
          options: ['Deception', 'Healing', 'Creation', 'Forgiveness'],
          correctIndex: 0,
          explanation: 'Revelation 12:9 calls Satan the deceiver of the whole world.',
        },
        {
          id: 'whb-l4-q3',
          prompt: 'What does Revelation 12:10 call Satan?',
          options: [
            'The healer of the nations',
            'The accuser of the brethren',
            'The prince of peace',
            'The faithful witness',
          ],
          correctIndex: 1,
          explanation: 'Revelation 12:10 identifies Satan as the accuser of God\u2019s people.',
        },
        {
          id: 'whb-l4-q4',
          prompt: 'What does Matthew 4 show about Satan\u2019s use of Scripture?',
          options: [
            'He never quotes Scripture',
            'He only quotes Scripture accurately and faithfully',
            'He can misuse Scripture to support temptation',
            'He does not understand religious language',
          ],
          correctIndex: 2,
          explanation:
            'In Matthew 4:5 to 7, Satan quotes Scripture while Jesus answers with Scripture in its true context.',
        },
        {
          id: 'whb-l4-q5',
          prompt: 'What is the main BibleStem conclusion of this lesson?',
          options: [
            'Satan is equal in power to God',
            'Evil is only imaginary',
            'The conflict is real, but Christ is greater and Satan\u2019s methods are exposed by Scripture',
            'Believers should focus mostly on Satan',
          ],
          correctIndex: 2,
          explanation:
            'Revelation 12 reveals a real conflict, but Satan is judged, limited, and overcome by Christ.',
        },
      ],
    },
  },
  'the-end-of-evil-and-the-face-of-the-father': {
    openingThoughtStepTitle: DEEPER_STEP_TITLES.objection,
    tensionStepTitle: 'Why This Question Matters',
    coreClaim: `If God destroyed Lucifer immediately, the universe may have seen God\u2019s power, but not fully understood God\u2019s justice.

The issue was not whether God had enough strength to remove Satan.

God has never lacked power.

The issue was whether created beings would understand the true nature of Satan\u2019s rebellion and the true character of God\u2019s government.

Sin began through deception.

That means the answer to sin must expose deception.

If lies are destroyed before they are revealed, suspicion can remain.

If rebellion is ended before its fruit is seen, questions can linger.

If fear replaces trust, obedience may continue outwardly while love dies inwardly.

God does not desire forced loyalty.

He wants worship grounded in truth, love, and freedom.

That is why the story of evil has been allowed to unfold long enough for every being to see what sin produces and what God is truly like.

This does not make suffering easy.

It does not make evil acceptable.

But it shows that God\u2019s patience is not weakness.

His delay is not indifference.

His justice is moving toward a final, complete, and permanent end.`,
    keyTension: 'If God is loving and powerful, why did He not destroy evil immediately?',
    openingThought: `This final lesson brings us to one of the hardest questions in the whole study.

If God is good, why did He allow Lucifer to continue after rebellion began?

Why not end Satan immediately?
Why let sin spread to earth?
Why let humanity suffer under deception, death, injustice, and pain?

For many people, this is not just a theological question.

It is personal.

They have seen evil hurt families.
They have watched sickness take loved ones.
They have seen injustice go unanswered.
They have wondered why God did not step in sooner.

Scripture does not treat evil lightly.

But it also shows that God\u2019s answer to evil is bigger than instant destruction.

God is not only ending evil.

He is exposing evil.

He is answering every accusation.

He is revealing His character.

He is saving everyone who will trust Him.

And when evil finally ends, Scripture says it will never rise again.`,
    scriptureStepTitle: DEEPER_STEP_TITLES.scriptureTrail,
    scriptureRef: 'Nahum 1:9',
    scriptureQuote: `What do ye imagine against the LORD? he will make an utter end: affliction shall not rise up the second time.`,
    scriptureAfterPrimary: `God\u2019s answer to evil is not temporary management. It is complete removal.

Sin will not be allowed to begin again. The universe will be safe, healed, and settled in truth.`,
    scriptureSecondaryRef: 'John 14:9',
    scriptureSecondaryQuote: `Jesus saith unto him, he that hath seen me hath seen the Father.`,
    scriptureAfterSecondary: `To understand how God feels about humanity, we look at Christ. The Father\u2019s heart is revealed in the Son.`,
    scriptureWordInsights: [
      {
        surface: 'utter end',
        lemma: 'Complete end (kālâ context)',
        transliteration: 'utter end',
        meaning: 'Final, complete removal with no return.',
        reference: 'Nahum 1:9',
        note: `Nahum 1:9 says God will make an "utter end" and that affliction will not rise up the second time.

This phrase points to finality.

God\u2019s answer to evil is not temporary management.

It is complete removal.

Sin will not be patched, hidden, recycled, or allowed to begin again.

God will end evil in a way that leaves the universe safe, healed, and settled in truth.

The promise is not only that evil will be punished.

The promise is that evil will never return.`,
      },
    ],
    scriptureTrailHelper:
      'Follow the trail. See how God exposes sin, defeats Satan, reveals His love in Christ, and restores creation forever.',
    scriptureTrailSummary:
      'God will end evil completely, reveal His character fully through Jesus, and affliction will never rise again.',
    scriptureSupplementBlocks: [
      scriptureThreadBlock({
        title: 'God Will End Evil Without Leaving Questions Unanswered',
        question:
          'Follow the trail. Scripture shows that God will expose sin, defeat Satan, destroy evil, reveal His love through Christ, and restore creation so completely that affliction will never rise again.',
        references: [
          {
            reference: 'John 14:8 to 9',
            verseText:
              'Philip saith unto him, Lord, shew us the Father... Jesus saith unto him, he that hath seen me hath seen the Father.',
            shortNote:
              'Jesus reveals the Father\u2019s character. To understand how God feels about humanity, we look at Christ.',
          },
          {
            reference: 'John 3:16 to 17',
            verseText:
              'For God so loved the world, that he gave his only begotten Son... For God sent not his Son into the world to condemn the world; but that the world through him might be saved.',
            shortNote:
              'The Father\u2019s heart toward the world is revealed in the gift of His Son. God\u2019s purpose is salvation, not destruction.',
          },
          {
            reference: 'Romans 5:8',
            verseText:
              'But God commendeth his love toward us, in that, while we were yet sinners, Christ died for us.',
            shortNote:
              'God\u2019s love is not shown only after people improve. Christ died for sinners while they were still in rebellion.',
          },
          {
            reference: 'Hebrews 2:14',
            verseText:
              'That through death he might destroy him that had the power of death, that is, the devil.',
            shortNote:
              'Jesus guarantees Satan\u2019s defeat through His own death. The cross is central to the final end of evil.',
          },
          {
            reference: 'Colossians 2:15',
            verseText:
              'And having spoiled principalities and powers, he made a shew of them openly, triumphing over them in it.',
            shortNote:
              'At the cross, Satan\u2019s kingdom was exposed and Christ\u2019s victory was revealed.',
          },
          {
            reference: 'Romans 14:11',
            verseText:
              'As I live, saith the Lord, every knee shall bow to me, and every tongue shall confess to God.',
            shortNote:
              'God\u2019s justice will be openly acknowledged. His character will be vindicated before the universe.',
          },
          {
            reference: 'Revelation 20:10',
            verseText:
              'And the devil that deceived them was cast into the lake of fire and brimstone.',
            shortNote:
              'Satan\u2019s rebellion will not continue forever. The deceiver will face final judgment.',
          },
          {
            reference: 'Revelation 21:1 to 5',
            verseText:
              'And God shall wipe away all tears from their eyes; and there shall be no more death, neither sorrow, nor crying... Behold, I make all things new.',
            shortNote:
              'God\u2019s final answer to evil is not only destruction of sin. It is the restoration of creation.',
          },
          {
            reference: 'Nahum 1:9',
            verseText: 'He will make an utter end: affliction shall not rise up the second time.',
            shortNote: 'Evil will not return. God\u2019s victory will be complete, final, and safe forever.',
          },
        ],
        takeaway:
          'God\u2019s final answer to evil is judgment and restoration through Christ. Affliction will never rise again.',
      }),
    ],
    teachingPointsStepTitle: DEEPER_STEP_TITLES.answer,
    teachingPoints: [
      `1. Sin Had to Be Fully Exposed

God did not destroy Lucifer immediately because the problem of sin had to be fully exposed, not merely forcefully removed.

Sin began in deception.

Lucifer misrepresented God\u2019s character.

He suggested that God\u2019s government could be improved.

He implied that created beings would be better off apart from God\u2019s authority.

If God had ended Lucifer instantly, the rebellion may have stopped outwardly, but questions could have remained inwardly.

Is God fair?

Was Lucifer right?

Does God destroy anyone who questions Him?

Is obedience safe only because God is stronger?

God allowed time for Satan\u2019s principles to reveal their true fruit.`,
      `2. What Sin and God Have Revealed

And what has sin produced?

Lies.
Violence.
Shame.
Accusation.
Fear.
Death.
Broken families.
Corrupted worship.
False religion.
Human suffering.
Separation from God.

Sin has had time to testify against itself.

But God has also revealed Himself.

Most clearly, He revealed Himself in Jesus.

At the cross, Satan\u2019s hatred and God\u2019s love stood face to face.

Satan moved human hearts to reject, accuse, mock, torture, and kill the Son of God.

But Jesus prayed for His enemies.

Jesus carried our sin.

Jesus revealed the Father.

Jesus defeated the devil by giving Himself.`,
      `3. The Final Answer

The final answer to evil is not that God was stronger all along, although He was.

The final answer is that God is good.

His government is just.

His law is love.

His mercy is real.

His judgment is righteous.

His patience is purposeful.

His victory is certain.

Evil will end.

Satan will be destroyed.

Sin will never rise again.

And God will make all things new.`,
    ],
    godsCharacter: `This lesson reveals that God\u2019s character is not careless, cruel, or passive.

God is patient, but not indifferent.

He is merciful, but not unjust.

He is loving, but not permissive toward evil.

He is powerful, but He does not use power the way Satan does.

Satan uses power to control.

God uses power to save.

Satan hides his motives.

God reveals His heart.

Satan destroys life.

God gives His Son.

Satan accuses sinners.

Jesus intercedes for sinners.

Satan wants worship through deception and force.

God receives worship through truth and love.

The Father is not distant from the suffering of humanity.

Jesus said, "He that hath seen me hath seen the Father" (John 14:9).

That means when we see Jesus touching lepers, forgiving sinners, weeping at graves, feeding the hungry, blessing children, confronting hypocrisy, and dying on the cross, we are seeing the heart of the Father.

The Father does not love humanity less than Jesus does.

Jesus came to reveal the Father, not to convince the Father to love us.

The cross does not make God loving.

The cross proves God has always been loving.

The end of evil will not reveal a God who finally lost patience.

It will reveal a God who gave every opportunity for truth to be seen, every soul to choose, and every accusation to be answered.

When sin is finally destroyed, the universe will be safe because God\u2019s character will be fully vindicated.`,
    wordStudyFullStep: false,
    afterTeachingBlocks: [
      {
        type: 'greatControversyResolutionTimeline',
        sectionEyebrow: 'Trace the resolution',
        sectionSubtitle: 'Tap each stage to see Scripture and what it reveals about God.',
        title: 'The Final Answer to Evil',
        subtitle: 'From rebellion to restoration. Explore all seven stages to see the full picture.',
        steps: FINAL_ANSWER_TO_EVIL_TIMELINE_STEPS,
        reflectionCards: FINAL_ANSWER_TO_EVIL_REFLECTION_CARDS,
        completionSummary: FINAL_ANSWER_TO_EVIL_COMPLETE_SUMMARY,
        caption:
          'Work through every stage. When you have opened each one, read the reflection prompts and rest in the hope Scripture gives.',
      },
      { type: 'studyCta', label: 'Back to study overview', href: WHEN_HEAVEN_BROKE_OVERVIEW_HREF },
    ],
    reflectStepTitle: DEEPER_STEP_TITLES.heartCheck,
    reflectPlaceholder: 'Write your response. What is God showing you through this study?',
    reflectPrompt: `The question is not only, "Why has God allowed evil?"

The deeper question is:

Do I trust God\u2019s character while I wait for His final answer?

Faith does not mean pretending evil does not hurt.

Faith means refusing to let evil define who God is when Jesus has already revealed Him.

1. Where have I confused God\u2019s patience with God\u2019s absence?

2. Have I allowed suffering to shape my view of God more than Jesus has?

3. Do I trust that God can be loving and just at the same time?

4. What accusation against God do I need to surrender?

5. Where do I need to remember that delay is not denial and patience is not weakness?

6. How does the cross answer my deepest doubts about the Father\u2019s heart?

Do not judge God\u2019s character by the existence of evil.

Judge evil by the character of God revealed in Jesus.`,
    lifeApplicationStepTitle: DEEPER_STEP_TITLES.practice,
    practiceCalloutTitle: 'Practice for 24 hours',
    lifeApplication: `For the next 24 hours, identify one place where evil, pain, delay, or unanswered questions have made it harder for you to trust God.

Write down the question honestly.

Then bring it to Scripture.

Use this format:

The question:
Write the hard question without pretending.

The Scripture:
Choose one passage from this lesson that speaks to it.

The truth about God:
Write one sentence about what this passage reveals about God\u2019s character.

The response:
Choose one act of trust today.

Examples:

Pray instead of withdrawing.
Read John 14.
Forgive someone instead of rehearsing bitterness.
Stop accusing God for what sin has caused.
Share hope with someone who is discouraged.
Worship even before every question feels resolved.

Father, help me trust Your heart when I do not understand everything You allow. Keep me from believing Satan\u2019s accusations against You. Show me Your character in Jesus. Teach me to wait with faith, live with hope, and worship with confidence. Thank You that evil will not last forever and that You will make all things new. Amen.`,
    prayer: '',
    completionSummary: `God will end evil completely, reveal His character fully in Jesus, and affliction will never rise again.`,
    forwardQuestion: `After this study, what accusation against God will you surrender, and which Scripture will you return to when doubt returns?`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'whb-l5-q1',
          prompt: 'According to Nahum 1:9, what will not happen again after God makes an utter end?',
          options: ['Rain', 'Affliction rising a second time', 'Worship', 'Creation'],
          correctIndex: 1,
          explanation: 'Nahum 1:9 promises that affliction will not rise up the second time.',
        },
        {
          id: 'whb-l5-q2',
          prompt: 'According to John 14:9, what does Jesus reveal?',
          options: [
            'The character of the Father',
            'A different God from the Father',
            'That the Father is less loving than Jesus',
            'That God does not care about earth',
          ],
          correctIndex: 0,
          explanation: 'Jesus told Philip that whoever has seen Him has seen the Father.',
        },
        {
          id: 'whb-l5-q3',
          prompt: 'According to Hebrews 2:14, what did Jesus accomplish through death?',
          options: [
            'He avoided the conflict with Satan',
            'He destroyed him who had the power of death, the devil',
            'He gave Satan more authority',
            'He ended human freedom',
          ],
          correctIndex: 1,
          explanation: 'Hebrews 2:14 says Christ destroyed the devil, who had the power of death.',
        },
        {
          id: 'whb-l5-q4',
          prompt: 'Why did God allow sin to unfold instead of destroying Lucifer immediately?',
          options: [
            'Because God was weaker than Satan',
            'Because sin needed to be fully exposed and God\u2019s character fully revealed',
            'Because evil is part of God\u2019s nature',
            'Because humanity needed suffering to earn salvation',
          ],
          correctIndex: 1,
          explanation:
            'Scripture shows God allowing time for deception to be exposed and His character to be vindicated through Christ.',
        },
        {
          id: 'whb-l5-q5',
          prompt: 'What is the main BibleStem conclusion of this lesson?',
          options: [
            'Evil will continue forever',
            'Satan and God are equal powers',
            'God will end evil completely, reveal His character fully, and sin will never rise again',
            'God created evil to teach humanity a lesson',
          ],
          correctIndex: 2,
          explanation:
            'The study concludes with God\u2019s complete victory, full revelation in Christ, and affliction never rising again.',
        },
      ],
    },
  },
}
