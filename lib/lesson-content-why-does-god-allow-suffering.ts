import {
  BEFORE_AND_AFTER_EDEN_COMPLETE_SUMMARY,
  BEFORE_AND_AFTER_EDEN_PAIRS,
} from '@/lib/before-and-after-eden-stages'
import {
  JESUS_IN_SUFFERING_PLACES_CARDS,
  JESUS_IN_SUFFERING_PLACES_COMPLETE_SUMMARY,
} from '@/lib/jesus-in-suffering-places-stages'
import {
  FROM_GROANING_TO_GLORY_COMPLETE_SUMMARY,
  FROM_GROANING_TO_GLORY_STAGES,
} from '@/lib/from-groaning-to-glory-stages'
import { REFINERS_FIRE_COMPLETE_SUMMARY, REFINERS_FIRE_STAGES } from '@/lib/refiners-fire-stages'
import {
  WHY_DELAY_IS_NOT_INDIFFERENCE_COMPLETE_SUMMARY,
  WHY_DELAY_IS_NOT_INDIFFERENCE_STAGES,
} from '@/lib/why-delay-is-not-indifference-stages'
import { WHY_DOES_GOD_ALLOW_SUFFERING_OVERVIEW_HREF } from '@/lib/deeper-lesson-shell'
import { DEEPER_QUIZ_TITLE, DEEPER_STEP_TITLES } from '@/lib/deeper-lesson-workflow'
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

/** Guided reader: "Why Does God Allow Suffering?" (Deeper Studies). */
export const whyDoesGodAllowSufferingSeriesLessonLibrary: Record<string, LessonReaderContent> = {
  'the-question-we-cannot-ignore': {
    openingThoughtStepTitle: DEEPER_STEP_TITLES.objection,
    tensionStepTitle: 'Why This Question Matters',
    coreClaim: `Suffering can distort how people see God.

When pain becomes personal, the heart can begin to ask:

Is God punishing me?
Is God ignoring me?
Is God responsible for this?
Is God powerful enough to stop it?
Is God loving enough to care?

These questions matter because Satan has always tried to misrepresent God\u2019s character.

In Eden, the serpent suggested that God was withholding good from humanity.

In suffering, the same accusation often returns in another form:

God cannot be trusted.

That is why this lesson must begin carefully.

If we say God causes all suffering, we make Him look cruel.

If we say suffering has no connection to sin, we ignore Scripture.

If we say suffering means God is absent, we deny the story of Jesus.

The Bible gives a clearer answer.

God created life good.

Sin brought death.

Satan works to misrepresent God.

And God is working through Christ to end suffering forever.`,
    keyTension: 'If God is good, why is there so much suffering?',
    openingThought: `Some questions are not asked from curiosity.

They are asked through tears.

Why did this happen?
Why did God allow it?
Why does pain touch children, families, bodies, minds, and people who were trying to do right?
Why does the world feel so broken if God is loving and powerful?

This is one of the hardest questions people bring to faith.

The Bible does not ask us to pretend suffering is small.

Scripture shows grief, sickness, betrayal, injustice, oppression, death, and unanswered cries.

But the Bible also refuses to blame God\u2019s character for what sin has done to His creation.

The first step in answering suffering is this:

Suffering was not part of God\u2019s original design.

Pain, cruelty, death, and sorrow entered because sin entered.

God is not the author of evil.

Sin is the intruder.`,
    scriptureStepTitle: DEEPER_STEP_TITLES.scriptureTrail,
    scriptureRef: 'Romans 5:12',
    scriptureQuote: `Wherefore, as by one man sin entered into the world, and death by sin; and so death passed upon all men.`,
    scriptureAfterPrimary: `Death spread because sin entered. Scripture traces suffering and death to rebellion, not to a flaw in God\u2019s character.`,
    scriptureSecondaryRef: 'Genesis 1:31',
    scriptureSecondaryQuote: `And God saw every thing that he had made, and, behold, it was very good.`,
    scriptureAfterSecondary: `The story begins with goodness. Evil, suffering, and death were not part of God\u2019s original design.`,
    scriptureWordInsights: [
      {
        surface: 'intruder',
        lemma: 'Intruder (concept)',
        transliteration: 'intruder',
        meaning: 'Something that does not belong in God\u2019s original design.',
        reference: 'Romans 5:12',
        note: `An intruder is something that does not belong.

Sin is not presented in Scripture as a normal part of God\u2019s creation.

God made the world good.

Sin entered.

Death followed.

That means suffering should not be treated as part of God\u2019s ideal design.

It is the result of rebellion entering a world God made for life.

Calling sin an intruder helps us understand two truths at the same time:

God is not responsible for evil.

And God is responsible for ending it.`,
      },
    ],
    scriptureTrailHelper:
      'Follow the trail. See that creation was good, sin brought death, and God remains light without darkness.',
    scriptureTrailSummary:
      'Suffering was not God\u2019s original design. Sin entered, death followed, and God remains good.',
    scriptureSupplementBlocks: [
      scriptureThreadBlock({
        title: 'Suffering Was Not God\u2019s Original Design',
        question:
          'Follow the trail. Scripture shows that God\u2019s creation was good, sin entered through distrust and disobedience, suffering followed sin, and God remains pure, generous, and good.',
        references: [
          {
            reference: 'Genesis 1:31',
            verseText: 'And God saw every thing that he had made, and, behold, it was very good.',
            shortNote:
              'The story begins with goodness. Evil, suffering, and death were not part of God\u2019s original design.',
          },
          {
            reference: 'Genesis 3:6 to 7',
            verseText:
              'And when the woman saw that the tree was good for food... she took of the fruit thereof, and did eat.',
            shortNote:
              'Sin entered human experience through distrust and disobedience. Humanity chose another voice over God\u2019s word.',
          },
          {
            reference: 'Genesis 3:16 to 19',
            verseText:
              'In sorrow thou shalt bring forth children... cursed is the ground for thy sake... in the sweat of thy face shalt thou eat bread.',
            shortNote:
              'After sin entered, pain, struggle, conflict, and death entered human life. The world changed because rebellion separated humanity from the Source of life.',
          },
          {
            reference: 'Romans 5:12',
            verseText: 'By one man sin entered into the world, and death by sin.',
            shortNote:
              'Death entered through sin. Scripture traces suffering and death to the entrance of sin, not to a flaw in God\u2019s character.',
          },
          {
            reference: 'James 1:13',
            verseText: 'God cannot be tempted with evil, neither tempteth he any man.',
            shortNote: 'God is not the source of evil. He does not tempt His creatures into sin.',
          },
          {
            reference: 'James 1:17',
            verseText: 'Every good gift and every perfect gift is from above.',
            shortNote: 'God gives what is good. His character should be judged by His goodness, not by the damage sin has caused.',
          },
          {
            reference: '1 John 3:4',
            verseText: 'Sin is the transgression of the law.',
            shortNote: 'Sin is rebellion against God\u2019s law of love. Suffering grows in a world that has turned from God\u2019s order.',
          },
          {
            reference: 'Romans 6:23',
            verseText:
              'For the wages of sin is death; but the gift of God is eternal life through Jesus Christ our Lord.',
            shortNote: 'Sin pays death, but God gives life. The contrast between sin and God could not be clearer.',
          },
          {
            reference: '1 John 1:5',
            verseText: 'God is light, and in him is no darkness at all.',
            shortNote: 'There is no darkness in God\u2019s character. Evil must not be traced back to a defect in Him.',
          },
        ],
        takeaway:
          'God created good. Sin brought death. God is light, gives good gifts, and is not the author of evil.',
      }),
    ],
    teachingPointsStepTitle: DEEPER_STEP_TITLES.answer,
    teachingPoints: [
      `1. God Allows, But Does Not Author

God allows suffering, but God is not the author of suffering.

That distinction matters.

To allow something temporarily is not the same as causing it, loving it, or approving of it.

Scripture teaches that God created the world good. Sin entered through distrust, rebellion, and separation from God. Once sin entered, suffering followed.

Death is not God\u2019s masterpiece.

Pain is not God\u2019s personality.

Cruelty is not God\u2019s character.

Suffering is what happens when creation is wounded by sin.`,
      `2. Sin Is the Intruder

Romans 5:12 says sin entered the world, and death came through sin. That means death is not natural to God\u2019s original design. It is an invader.

James 1:13 says God does not tempt anyone with evil. James 1:17 says every good and perfect gift comes from above.

So the Bible does not ask us to call evil good.

It asks us to recognize evil as evil while still trusting that God is good.

The world is not suffering because God is cruel.

The world is suffering because sin is destructive.

Sin separates.
Sin corrupts.
Sin deceives.
Sin wounds.
Sin kills.`,
      `3. God Moves Toward Rescue

But God does not abandon His creation to suffering.

From Genesis onward, He begins moving toward rescue.

He seeks Adam and Eve after they fall.

He promises victory over the serpent.

He calls people back to Himself.

He sends prophets.

He enters human suffering in Jesus.

He bears sin at the cross.

And He promises a future where death, sorrow, crying, and pain will be no more.

The first answer to suffering is not that we understand every painful event.

The first answer is that Scripture tells us who is responsible for evil and who is working to end it.

Sin brought suffering.

Christ brings restoration.`,
    ],
    godsCharacter: `This lesson reveals that God\u2019s character must not be judged by the damage sin has caused.

God is not darkness.

God is light.

God is not the tempter.

God is the giver of every good and perfect gift.

God is not the author of death.

God is the giver of eternal life through Jesus Christ.

When people suffer, Satan wants them to believe God is harsh, careless, distant, or unsafe.

But Scripture shows a different picture.

God warns because He loves.

God commands because His law protects life.

God grieves over sin\u2019s damage.

God seeks the fallen.

God promises redemption.

The suffering of the world does not reveal that God is cruel.

It reveals that sin is terrible.

And the fact that God moves toward sinners instead of abandoning them reveals that His heart is merciful.

The clearest picture of God\u2019s character is not the serpent\u2019s accusation.

It is Jesus Christ.

God\u2019s answer to suffering will become clearer as this study continues, but Lesson 1 begins here:

Do not blame God\u2019s heart for sin\u2019s destruction.`,
    wordStudyFullStep: false,
    afterTeachingBlocks: [
      {
        type: 'beforeAndAfterEden',
        sectionEyebrow: 'See the contrast',
        sectionSubtitle: 'Tap each pair to see how sin changed what God made good.',
        title: 'Before and After Eden',
        subtitle: 'Compare God\u2019s original design with life after sin entered.',
        pairs: BEFORE_AND_AFTER_EDEN_PAIRS,
        completionSummary: BEFORE_AND_AFTER_EDEN_COMPLETE_SUMMARY,
        caption:
          'Explore both columns, then work through every contrast pair to see why suffering is sin\u2019s damage, not God\u2019s design.',
      },
      { type: 'studyCta', label: 'Back to study overview', href: WHY_DOES_GOD_ALLOW_SUFFERING_OVERVIEW_HREF },
    ],
    reflectStepTitle: DEEPER_STEP_TITLES.heartCheck,
    reflectPlaceholder: 'Write your response. What is God showing you through this study?',
    reflectPrompt: `Suffering can make the heart tired, angry, confused, or suspicious of God.

God can handle honest questions.

But He also invites us to bring those questions into Scripture instead of letting pain define His character.

1. When I see suffering, do I instinctively blame God, sin, Satan, human choices, or the brokenness of the world?

2. Have I allowed pain to make me suspicious of God\u2019s character?

3. Do I believe God is light, even when life feels dark?

4. Where have I confused God allowing something with God approving of it?

5. What suffering in my life do I need to bring honestly before God instead of hiding it?

6. How does Romans 5:12 help me understand the difference between God\u2019s design and sin\u2019s damage?

Do not let suffering become the lens that defines God.

Let Scripture reveal God, then use Scripture to understand suffering.`,
    lifeApplicationStepTitle: DEEPER_STEP_TITLES.practice,
    practiceCalloutTitle: 'Practice for 24 hours',
    lifeApplication: `For the next 24 hours, identify one painful question, memory, situation, or fear that has affected how you see God.

Write it down honestly.

Then answer it with Scripture.

Use this format:

The pain:
Write what hurts or what confuses you.

The lie I may be tempted to believe:
Write the false thought clearly.

Examples:

"God does not care."
"God caused this because He is angry."
"God is not good."
"God is absent."
"Prayer does not matter."

The Scripture:
Choose one verse from this lesson that answers the lie.

The truth about God:
Write one sentence about what Scripture reveals.

Examples:

"God is light, and there is no darkness in Him."
"God gives good gifts."
"Sin brought death, but God gives life through Jesus."
"God is not the source of evil."

The response:
Choose one act of faith today.

Examples:

Pray honestly.
Read Genesis 3.
Text someone who is suffering.
Stop blaming God for what sin has caused.
Worship even with unanswered questions.

Father, I bring You my questions about suffering. Help me not to confuse the damage of sin with Your character. Teach me to see You through Scripture and through Jesus. Keep my heart from believing the serpent\u2019s lies. Remind me that You are light, You are good, and You are working to end evil forever. Amen.`,
    prayer: '',
    completionSummary: `Suffering exists because sin entered the world, but God is not the author of evil.`,
    forwardQuestion: `What lie about God has pain tempted you to believe, and which Scripture from this lesson will you return to first?`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'wdgas-l1-q1',
          prompt: 'According to Romans 5:12, what entered the world through sin?',
          options: ['Eternal life', 'Death', 'Worship', 'Wisdom'],
          correctIndex: 1,
          explanation: 'Romans 5:12 says death entered the world through sin.',
        },
        {
          id: 'wdgas-l1-q2',
          prompt: 'According to James 1:13, what is true about God?',
          options: [
            'God tempts people with evil',
            'God is the source of sin',
            'God cannot be tempted with evil and does not tempt anyone',
            'God created suffering as His original plan',
          ],
          correctIndex: 2,
          explanation: 'James 1:13 refuses to place temptation or evil at God\u2019s feet.',
        },
        {
          id: 'wdgas-l1-q3',
          prompt: 'What does Genesis 1:31 reveal about God\u2019s original creation?',
          options: ['It was very good', 'It was full of death', 'It was already corrupted', 'It was incomplete and evil'],
          correctIndex: 0,
          explanation: 'Genesis 1:31 says everything God made was very good.',
        },
        {
          id: 'wdgas-l1-q4',
          prompt: 'What is the main BibleStem conclusion of this lesson?',
          options: [
            'God is the author of suffering',
            'Suffering exists because sin entered the world, but God is not the author of evil',
            'Suffering proves God is absent',
            'Sin is not connected to suffering',
          ],
          correctIndex: 1,
          explanation:
            'Scripture traces suffering to sin while insisting God is light and the giver of good gifts.',
        },
        {
          id: 'wdgas-l1-q5',
          prompt: 'According to Romans 6:23, what is the contrast between sin and God?',
          options: [
            'Sin gives life, and God gives death',
            'Sin has no consequence',
            'The wages of sin is death, but the gift of God is eternal life through Jesus Christ',
            'God and sin produce the same result',
          ],
          correctIndex: 2,
          explanation: 'Romans 6:23 contrasts sin\u2019s wages with God\u2019s gift of eternal life in Christ.',
        },
      ],
    },
  },
  'why-god-did-not-end-it-immediately': {
    openingThoughtStepTitle: DEEPER_STEP_TITLES.objection,
    tensionStepTitle: 'Why This Question Matters',
    coreClaim: `If God had destroyed Satan immediately, the universe would have seen God\u2019s power.

But would every created being have understood God\u2019s justice?

Sin began with deception.

Lucifer misrepresented God\u2019s character.

He suggested that God\u2019s government could not be trusted.

He implied that created beings would be better off apart from God\u2019s authority.

If God had ended the rebellion instantly, questions could have remained.

Was God fair?

Was Lucifer right?

Does God destroy anyone who questions Him?

Is obedience only safe because God is stronger?

These questions matter because God does not want worship rooted in fear.

Fear can produce outward obedience.

But fear cannot produce love.

God\u2019s government is built on truth, love, freedom, and trust.

That means sin had to be allowed to reveal what it really is.

The delay does not mean God approves of suffering.

The delay means God is exposing evil so completely that when He ends it, no question will remain about His justice, mercy, and love.`,
    keyTension: 'If God has the power to stop evil, why does He let it continue?',
    openingThought: `This question presses hard on the heart.

If God is powerful, why not stop every act of evil before it happens?

Why not silence Satan the moment rebellion began?

Why not remove pain before it reaches a child, a family, a body, a mind, or a life?

At first, immediate destruction sounds like the obvious answer.

End evil now.

Stop suffering now.

Remove the enemy now.

But Scripture shows that the problem of evil is not only a problem of power.

It is also a problem of truth, trust, love, and freedom.

God could destroy evil in a moment.

But God is not only trying to stop evil temporarily.

He is working to expose it fully, answer every accusation, preserve freedom, reveal His character, and end evil in such a complete way that it will never rise again.`,
    scriptureStepTitle: DEEPER_STEP_TITLES.scriptureTrail,
    scriptureRef: 'Matthew 13:24 to 30',
    scriptureQuote: `Let both grow together until the harvest.`,
    scriptureAfterPrimary: `The servants wanted to remove the tares immediately. The master said to wait until the harvest.

That waiting was not weakness. It was wisdom.`,
    scriptureSecondaryRef: 'Matthew 13:36 to 43',
    scriptureSecondaryQuote: `The harvest is the end of the world; and the reapers are the angels.`,
    scriptureAfterSecondary: `Jesus explains that evil will not continue forever. The harvest represents God\u2019s final separation between righteousness and rebellion.`,
    scriptureWordInsights: [
      {
        surface: 'fear',
        lemma: 'Phobos (fear)',
        transliteration: 'phobos',
        meaning: 'Dread that can drive outward compliance without love.',
        reference: '1 John 4:18',
        note: `Fear can force outward behavior, but it cannot produce true love.

Scripture says perfect love casts out fear.

This matters because God does not want a universe that serves Him only because it is afraid of being destroyed.

God wants worship grounded in truth, love, trust, and freedom.

If God had destroyed Satan immediately, some created beings may have obeyed from terror instead of understanding.

God\u2019s patience allows the true nature of sin to be seen and the true character of God to be revealed.`,
      },
    ],
    scriptureTrailHelper:
      'Follow the trail. See why God allows the conflict to unfold before evil is ended forever.',
    scriptureTrailSummary:
      'God\u2019s delay is purposeful: exposing evil, vindicating His character, and ending affliction permanently.',
    scriptureSupplementBlocks: [
      scriptureThreadBlock({
        title: 'God\u2019s Delay Is Not Indifference',
        question:
          'Follow the trail. Scripture shows that God allows the conflict to unfold so the true nature of evil can be revealed, the character of God can be vindicated, and evil can be ended forever.',
        references: [
          {
            reference: 'Revelation 12:7 to 9',
            verseText:
              'And there was war in heaven: Michael and his angels fought against the dragon; and the dragon fought and his angels... And the great dragon was cast out.',
            shortNote:
              'The conflict began in heaven and reached the earth. Evil is part of a real rebellion against God\u2019s government.',
          },
          {
            reference: 'Ezekiel 28:17',
            verseText:
              'Thine heart was lifted up because of thy beauty, thou hast corrupted thy wisdom by reason of thy brightness.',
            shortNote:
              'Sin began in pride and corrupted wisdom. The issue was not a flaw in God\u2019s creation, but a created being turning from God.',
          },
          {
            reference: 'Isaiah 14:13 to 14',
            verseText:
              'I will ascend into heaven, I will exalt my throne above the stars of God... I will be like the most High.',
            shortNote:
              'Lucifer\u2019s rebellion centered on self-exaltation. He desired a place that belonged to God alone.',
          },
          {
            reference: 'Matthew 13:24 to 30',
            verseText: 'Let both grow together until the harvest.',
            shortNote:
              'Jesus\u2019 parable shows that God allows wheat and tares to grow until the harvest. Delay is not neglect. It is purposeful judgment at the right time.',
          },
          {
            reference: 'Matthew 13:36 to 43',
            verseText: 'The harvest is the end of the world; and the reapers are the angels.',
            shortNote:
              'Jesus explains that evil will not continue forever. The harvest represents God\u2019s final separation between righteousness and rebellion.',
          },
          {
            reference: '1 Corinthians 4:9',
            verseText: 'For we are made a spectacle unto the world, and to angels, and to men.',
            shortNote:
              'The conflict is larger than what humans see. The universe is witnessing the outcome of sin and the faithfulness of God.',
          },
          {
            reference: '1 John 4:8',
            verseText: 'He that loveth not knoweth not God; for God is love.',
            shortNote: 'God\u2019s government is rooted in love. His actions against evil must reveal love, not merely power.',
          },
          {
            reference: '1 John 4:18',
            verseText: 'There is no fear in love; but perfect love casteth out fear.',
            shortNote:
              'God does not want worship based on terror. He wants loyalty grounded in love and truth.',
          },
          {
            reference: 'Nahum 1:9',
            verseText: 'He will make an utter end: affliction shall not rise up the second time.',
            shortNote: 'God\u2019s final answer to evil will be complete. Suffering will not rise again.',
          },
        ],
        takeaway:
          'God\u2019s patience exposes evil and reveals His love so affliction will never rise again.',
      }),
    ],
    teachingPointsStepTitle: DEEPER_STEP_TITLES.answer,
    teachingPoints: [
      `1. Evil Had to Be Exposed

God did not end evil immediately because evil had to be exposed before it could be ended permanently.

Sin began through deception.

That means God\u2019s answer could not be only force.

Force can stop a rebel.

But force alone cannot answer a lie.

Force can silence an accusation.

But force alone cannot heal suspicion.

Force can remove evil from sight.

But force alone cannot reveal why evil is evil.

God allowed Satan\u2019s principles to unfold so that created beings could see the true fruit of rebellion.`,
      `2. The Wheat and the Tares

What has Satan\u2019s kingdom produced?

Lies.

Accusation.

Fear.

Violence.

Self-exaltation.

Broken trust.

False worship.

Human suffering.

Death.

God did not need time to discover what sin would do.

Created beings needed time to see what sin does.

This is why Jesus\u2019 parable of the wheat and tares matters.

The servants wanted to remove the tares immediately.

But the master said to wait until the harvest.

That waiting was not weakness.

It was wisdom.

It prevented confusion.

It protected the wheat.

It made the final judgment clear.`,
      `3. Purposeful Patience

In the same way, God\u2019s patience does not mean He is passive.

His patience is purposeful.

He is allowing the universe to see the difference between His government and Satan\u2019s rebellion.

Satan\u2019s government leads to fear, deception, suffering, and death.

God\u2019s government leads to love, truth, freedom, justice, and life.

When God finally ends evil, no one will be able to say He acted unfairly.

No one will be able to say Satan\u2019s way was better.

No one will be able to say sin was harmless.

Evil will be exposed.

God\u2019s character will be vindicated.

Affliction will not rise a second time.`,
    ],
    godsCharacter: `This lesson reveals that God\u2019s patience is not weakness.

God is not slow because He lacks power.

He is patient because He is just, merciful, transparent, and loving.

God does not rule by panic.

He does not answer lies with insecurity.

He does not demand worship through fear.

He does not preserve loyalty by hiding evidence.

God allows truth to stand in the open.

Satan uses deception because his kingdom cannot survive truth.

God reveals truth because His character has nothing to hide.

This is why forced obedience cannot be the foundation of God\u2019s government.

A universe that obeys only because it is afraid is not a healed universe.

A heart that worships only because it fears punishment is not a surrendered heart.

God wants love.

God wants trust.

God wants worship that understands His character and chooses Him freely.

The cross proves this.

At the cross, Satan\u2019s hatred was exposed.

At the cross, God\u2019s love was revealed.

At the cross, humanity saw what sin does to perfect love.

And humanity saw what perfect love does for sinners.

God\u2019s delay is not indifference.

It is the mercy of a God who will end evil without leaving His character misunderstood.`,
    wordStudyFullStep: false,
    afterTeachingBlocks: [
      {
        type: 'whyDelayIsNotIndifference',
        sectionEyebrow: 'Follow the path',
        sectionSubtitle: 'Tap each stage to see Scripture, explanation, and reflection prompts.',
        title: 'Why Delay Is Not Indifference',
        subtitle: 'Five stages from deception to the permanent end of evil.',
        steps: WHY_DELAY_IS_NOT_INDIFFERENCE_STAGES,
        completionSummary: WHY_DELAY_IS_NOT_INDIFFERENCE_COMPLETE_SUMMARY,
        caption:
          'Explore all five stages. When you have opened each one, read the summary and reflect on God\u2019s purposeful patience.',
      },
      { type: 'studyCta', label: 'Back to study overview', href: WHY_DOES_GOD_ALLOW_SUFFERING_OVERVIEW_HREF },
    ],
    reflectStepTitle: DEEPER_STEP_TITLES.heartCheck,
    reflectPlaceholder: 'Write your response. What is God showing you through this study?',
    reflectPrompt: `Waiting on God can be painful.

When evil continues, the heart can start to interpret delay as absence.

But Scripture invites us to see God\u2019s patience differently.

1. Where have I mistaken God\u2019s patience for God\u2019s indifference?

2. Do I want God to end evil, but still resist His work of removing sin from my own heart?

3. Have I ever wanted God to use force where He is choosing patience?

4. Do I trust that God can be loving and just at the same time?

5. Where has fear shaped my obedience more than love?

6. What accusation against God do I need Scripture to correct?

God\u2019s delay is not proof that He does not care.

It is proof that He is ending evil in a way that will leave the universe safe forever.`,
    lifeApplicationStepTitle: DEEPER_STEP_TITLES.practice,
    practiceCalloutTitle: 'Practice for 24 hours',
    lifeApplication: `For the next 24 hours, identify one area where waiting on God has made you frustrated, fearful, or suspicious of His care.

Write it down honestly.

Then compare your fear with Scripture.

Use this format:

The delay:
Write what you wish God would change immediately.

The fear:
Write what the delay has made you tempted to believe about God.

Examples:

"God does not care."
"God is not listening."
"God is doing nothing."
"God is unfair."
"God is letting evil win."

The Scripture:
Choose one passage from this lesson that speaks to the fear.

The truth about God:
Write one sentence about what Scripture reveals.

Examples:

"God is love."
"God does not want fear-based worship."
"God will make an utter end of affliction."
"God\u2019s patience is purposeful."
"God\u2019s final judgment will be clear and righteous."

The response:
Choose one act of trust today.

Examples:

Pray instead of accusing.
Wait without surrendering to bitterness.
Confess one sin God is trying to remove from your own heart.
Encourage someone who is suffering.
Read Matthew 13 slowly and ask God for trust.

Father, help me trust You when Your timing is hard to understand. Keep me from confusing patience with absence. Teach me to see Your wisdom in the waiting. Remove fear from my obedience and replace it with love. Help me trust that You will end evil completely, justly, and forever. Amen.`,
    prayer: '',
    completionSummary: `God\u2019s delay is purposeful: exposing evil so it can be ended permanently without leaving His character misunderstood.`,
    forwardQuestion: `Where has waiting made you suspicious of God, and which Scripture from this lesson will you use to answer that fear?`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'wdgas-l2-q1',
          prompt: 'According to Matthew 13:24 to 30, what did the master tell the servants to do with the wheat and tares?',
          options: [
            'Burn both immediately',
            'Let both grow together until the harvest',
            'Ignore the tares forever',
            'Remove the wheat and keep the tares',
          ],
          correctIndex: 1,
          explanation: 'The master told the servants to let both grow until the harvest for a clear and wise separation.',
        },
        {
          id: 'wdgas-l2-q2',
          prompt: 'What does 1 John 4:18 teach about love and fear?',
          options: [
            'Fear is the foundation of love',
            'Perfect love casts out fear',
            'God wants worship based on terror',
            'Fear is stronger than love',
          ],
          correctIndex: 1,
          explanation: '1 John 4:18 says perfect love casts out fear.',
        },
        {
          id: 'wdgas-l2-q3',
          prompt: 'Why did God not end evil immediately?',
          options: [
            'Because God was weaker than Satan',
            'Because evil had to be exposed and God\u2019s character revealed',
            'Because suffering is part of God\u2019s original design',
            'Because sin is harmless',
          ],
          correctIndex: 1,
          explanation:
            'Scripture shows God allowing time for deception to be exposed and His character vindicated before final judgment.',
        },
        {
          id: 'wdgas-l2-q4',
          prompt: 'According to Nahum 1:9, what will God do?',
          options: [
            'Allow affliction to rise forever',
            'Make an utter end so affliction will not rise a second time',
            'Ignore evil',
            'Make Satan equal with Christ',
          ],
          correctIndex: 1,
          explanation: 'Nahum 1:9 promises a complete end with no return of affliction.',
        },
        {
          id: 'wdgas-l2-q5',
          prompt: 'What is the main BibleStem conclusion of this lesson?',
          options: [
            'God delays because He does not care',
            'God delays because He cannot stop evil',
            'God\u2019s delay is purposeful, exposing evil so it can be ended permanently',
            'God wants people to obey only because they are afraid',
          ],
          correctIndex: 2,
          explanation:
            'God\u2019s patience exposes evil and reveals His character before ending it forever.',
        },
      ],
    },
  },
  'the-god-who-entered-pain': {
    openingThoughtStepTitle: DEEPER_STEP_TITLES.objection,
    tensionStepTitle: 'Why This Question Matters',
    coreClaim: `When suffering becomes intense, distance can feel like abandonment.

A person may know Bible verses and still feel alone.

A person may believe God is powerful and still wonder if God is present.

This question matters because Satan wants suffering to make God look cold, silent, and detached.

If the enemy can convince people that God is distant from pain, then grief becomes fertile ground for distrust.

But Scripture gives us a different picture.

Jesus does not reveal a God who is unmoved by sorrow.

Jesus reveals a God who comes near.

He was not untouched by human weakness.

He was not protected from grief.

He was not spared rejection.

He was not unfamiliar with suffering.

He was the Man of Sorrows.

That means God\u2019s answer to suffering is not only, "I will explain it."

It is also, "I have entered it."`,
    keyTension: 'If God cares, why does He seem distant when people suffer?',
    openingThought: `Suffering does not only raise questions about God\u2019s power.

It raises questions about God\u2019s nearness.

When people are grieving, sick, betrayed, abandoned, or afraid, they often wonder:

Where is God?
Does He see this?
Does He feel anything?
Is He watching from a distance while people hurt?

The Bible\u2019s answer is not shallow.

God does not respond to human suffering by giving only an explanation.

He gives Himself.

In Jesus, God entered the world of pain.

He took human nature.

He felt hunger, weariness, rejection, temptation, grief, betrayal, injustice, and death.

He stood beside tombs.

He wept with the broken.

He touched the sick.

He carried sin.

He suffered the cross.

The God of Scripture does not stand far away from suffering.

He steps into it to redeem us from it.`,
    scriptureStepTitle: DEEPER_STEP_TITLES.scriptureTrail,
    scriptureRef: 'Isaiah 53:3 to 5',
    scriptureQuote: `He is despised and rejected of men; a man of sorrows, and acquainted with grief.`,
    scriptureAfterPrimary: `Jesus did not avoid human sorrow. He became deeply acquainted with grief and carried our sorrows to bring healing.`,
    scriptureSecondaryRef: 'John 11:35',
    scriptureSecondaryQuote: `Jesus wept.`,
    scriptureAfterSecondary: `At Lazarus\u2019 tomb, divine power did not cancel compassion. Jesus wept before He raised the dead.`,
    scriptureWordInsights: [
      {
        surface: 'compassion',
        lemma: 'Compassion (splagchnizomai context)',
        transliteration: 'compassion',
        meaning: 'Love that moves toward the hurting and acts to save.',
        reference: 'Matthew 9:36',
        note: `Compassion is more than noticing pain.

In Scripture, compassion moves toward the hurting.

Jesus did not look at suffering from a distance.

He touched the sick.

He wept with the grieving.

He welcomed the broken.

He bore sin.

He gave His life.

Biblical compassion is love that comes near and acts to save.

When we see the compassion of Jesus, we are seeing the heart of the Father.`,
      },
    ],
    scriptureTrailHelper:
      'Follow the trail. See how Christ entered sorrow, bore grief, and revealed the Father\u2019s heart.',
    scriptureTrailSummary:
      'Jesus entered human pain. God is not distant. The cross proves He cares.',
    scriptureSupplementBlocks: [
      scriptureThreadBlock({
        title: 'Christ Came Near to Human Suffering',
        question:
          'Follow the trail. Scripture shows that Jesus entered human sorrow, bore our griefs, suffered temptation, carried sin, conquered death, and revealed the Father\u2019s heart.',
        references: [
          {
            reference: 'Isaiah 53:3',
            verseText: 'He is despised and rejected of men; a man of sorrows, and acquainted with grief.',
            shortNote: 'Jesus did not avoid human sorrow. He became deeply acquainted with grief.',
          },
          {
            reference: 'Isaiah 53:4 to 5',
            verseText:
              'Surely he hath borne our griefs, and carried our sorrows... with his stripes we are healed.',
            shortNote:
              'Christ did more than observe suffering. He carried grief, bore sin\u2019s weight, and opened the way for healing.',
          },
          {
            reference: 'John 11:35',
            verseText: 'Jesus wept.',
            shortNote:
              'At Lazarus\u2019 tomb, Jesus showed that divine power does not cancel compassion. He wept before He raised.',
          },
          {
            reference: 'Matthew 27:46',
            verseText: 'My God, my God, why hast thou forsaken me?',
            shortNote:
              'At the cross, Jesus entered the deepest anguish of human lostness so no sufferer would be beyond His reach.',
          },
          {
            reference: 'Romans 5:8',
            verseText:
              'But God commendeth his love toward us, in that, while we were yet sinners, Christ died for us.',
            shortNote: 'God\u2019s love is shown in Christ\u2019s death for sinners, not after humanity made itself worthy.',
          },
          {
            reference: 'Hebrews 2:14 to 18',
            verseText:
              'For in that he himself hath suffered being tempted, he is able to succour them that are tempted.',
            shortNote:
              'Jesus took part in human experience so He could defeat the devil and help those who suffer under temptation.',
          },
          {
            reference: 'Hebrews 4:15 to 16',
            verseText:
              'For we have not an high priest which cannot be touched with the feeling of our infirmities.',
            shortNote:
              'Christ is not distant from human weakness. He understands, sympathizes, and invites us to come boldly for mercy.',
          },
          {
            reference: 'John 14:9',
            verseText: 'He that hath seen me hath seen the Father.',
            shortNote: 'Jesus reveals the Father. When we see Christ\u2019s compassion, we are seeing the heart of God.',
          },
        ],
        takeaway:
          'In Jesus, God came near to suffering, bore grief, and revealed the Father\u2019s compassionate heart.',
      }),
    ],
    teachingPointsStepTitle: DEEPER_STEP_TITLES.answer,
    teachingPoints: [
      `1. God Came Near

God is not distant from suffering.

In Jesus, God entered human pain to redeem humanity from sin and death.

The Bible does not present Christ as untouched by grief.

He was despised.

He was rejected.

He was misunderstood.

He was tempted.

He was betrayed.

He was falsely accused.

He was beaten.

He was crucified.

He died.

This means God\u2019s love is not theoretical.

It has wounds.`,
      `2. The Cross Carries Pain

The cross shows that God does not answer suffering from a safe distance.

He comes close enough to carry it.

Isaiah 53 says Christ bore our griefs and carried our sorrows. Hebrews says He suffered being tempted and is able to help those who are tempted. John shows Him weeping at a tomb. Matthew shows Him crying out under the crushing weight of sin.

Jesus entered suffering at its deepest level.

He did not only suffer physically.

He bore sin.

He felt abandonment.

He carried guilt that was not His.

He faced death.`,
      `3. Victory Through Suffering

And through His suffering, He broke the power of the enemy and opened the way to eternal life.

This does not mean every painful question is instantly resolved.

But it means no one can honestly say God does not care.

The cross is God\u2019s answer to the accusation that He is distant.

God came near.

God suffered.

God gave Himself.`,
    ],
    godsCharacter: `Jesus reveals that the Father is not cold toward human sorrow.

This matters because many people imagine the Father as stern while Jesus is compassionate.

But Jesus said, "He that hath seen me hath seen the Father."

That means the compassion of Christ is the compassion of the Father revealed.

When Jesus touched the sick, He was revealing the Father.

When Jesus fed the hungry, He was revealing the Father.

When Jesus forgave sinners, He was revealing the Father.

When Jesus wept at Lazarus\u2019 tomb, He was revealing the Father.

When Jesus died for His enemies, He was revealing the Father.

The cross does not make God loving.

The cross proves God has always been loving.

God\u2019s character is not seen clearly by staring only at the pain of the world.

God\u2019s character is seen clearly by looking at Jesus in the middle of that pain.

Satan wants suffering to make God look absent.

Jesus shows that God is present.

Satan wants suffering to make God look cruel.

Jesus shows that God is self-giving love.

Satan wants death to look final.

Jesus shows that resurrection is coming.

God is not indifferent to suffering.

He is so committed to ending it that He entered it Himself.`,
    wordStudyFullStep: false,
    afterTeachingBlocks: [
      {
        type: 'jesusInSufferingPlaces',
        sectionEyebrow: 'Where Jesus meets pain',
        sectionSubtitle: 'Tap each card to see Scripture and reflect on what Christ reveals.',
        title: 'Jesus in the Suffering Places',
        subtitle: 'Six places where Jesus enters human suffering and reveals God\u2019s heart.',
        cards: JESUS_IN_SUFFERING_PLACES_CARDS,
        completionSummary: JESUS_IN_SUFFERING_PLACES_COMPLETE_SUMMARY,
        caption:
          'Open every card. When you have explored each place, read the summary and bring your sorrow to Christ in prayer.',
      },
      { type: 'studyCta', label: 'Back to study overview', href: WHY_DOES_GOD_ALLOW_SUFFERING_OVERVIEW_HREF },
    ],
    reflectStepTitle: DEEPER_STEP_TITLES.heartCheck,
    reflectPlaceholder: 'Write your response. What is God showing you through this study?',
    reflectPrompt: `This lesson does not ask us to pretend suffering is easy.

It asks us to bring our suffering to the One who has already entered pain and overcome it.

Jesus does not shame the grieving.

He comes near.

1. When I suffer, do I picture God as near or far away?

2. Have I imagined the Father as less compassionate than Jesus?

3. What does Jesus weeping at Lazarus\u2019 tomb reveal about God\u2019s heart?

4. How does the cross answer the accusation that God does not care?

5. What pain have I been carrying alone instead of bringing to Christ?

6. Do I believe Jesus understands my weakness, or do I hide from Him in shame?

The cross does not remove every question immediately.

But it forever removes the lie that God does not care.`,
    lifeApplicationStepTitle: DEEPER_STEP_TITLES.practice,
    practiceCalloutTitle: 'Practice for 24 hours',
    lifeApplication: `For the next 24 hours, bring one specific sorrow, fear, weakness, or wound to Jesus in prayer.

Do not clean it up first.

Do not make it sound spiritual.

Tell Him honestly.

Use this format:

The pain:
Write what hurts.

The fear:
Write what this pain has made you tempted to believe about God.

Examples:

"God is far away."
"God does not see me."
"God is tired of me."
"God does not understand this."
"God is compassionate toward others, but not toward me."

The Scripture:
Choose one passage from this lesson that answers the fear.

The truth about God:
Write one sentence about what Jesus reveals.

Examples:

"Jesus wept with the grieving."
"Jesus understands weakness."
"Jesus bore grief and sorrow."
"Jesus reveals the Father\u2019s heart."
"God came near through Christ."

The response:
Choose one act of trust today.

Examples:

Pray honestly for five minutes.
Read Isaiah 53 slowly.
Read John 11 and notice Jesus\u2019 compassion.
Ask someone trustworthy to pray with you.
Comfort someone else with the comfort God gives you.

Father, help me see Your heart in Jesus. When suffering makes You feel far away, remind me that Christ entered pain, carried grief, and bore sin for me. Teach me to come boldly for mercy instead of hiding in fear. Thank You for a Savior who weeps with the grieving, strengthens the weak, and will one day end suffering forever. Amen.`,
    prayer: '',
    completionSummary: `In Jesus, God entered human pain and revealed the Father\u2019s compassionate heart.`,
    forwardQuestion: `What sorrow will you bring to Jesus this week instead of carrying it alone?`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'wdgas-l3-q1',
          prompt: 'According to Isaiah 53:3, how is Christ described?',
          options: [
            'A man of sorrows and acquainted with grief',
            'A stranger to pain',
            'A distant observer',
            'A ruler who never suffered',
          ],
          correctIndex: 0,
          explanation: 'Isaiah 53:3 calls Christ a man of sorrows acquainted with grief.',
        },
        {
          id: 'wdgas-l3-q2',
          prompt: 'What does John 11:35 show about Jesus?',
          options: ['He ignored grief', 'He wept', 'He avoided suffering people', 'He did not understand sorrow'],
          correctIndex: 1,
          explanation: 'John 11:35 records Jesus weeping at Lazarus\u2019 tomb.',
        },
        {
          id: 'wdgas-l3-q3',
          prompt: 'According to Hebrews 4:15 to 16, what kind of High Priest do we have?',
          options: [
            'One who cannot understand weakness',
            'One who is touched with the feeling of our infirmities',
            'One who refuses mercy',
            'One who avoids tempted people',
          ],
          correctIndex: 1,
          explanation: 'Hebrews 4:15 to 16 says our High Priest understands our weakness.',
        },
        {
          id: 'wdgas-l3-q4',
          prompt: 'According to John 14:9, what does Jesus reveal?',
          options: [
            'The Father\u2019s character',
            'A different God from the Father',
            'That God does not care about earth',
            'That the Father is less compassionate than the Son',
          ],
          correctIndex: 0,
          explanation: 'Jesus told Philip that whoever has seen Him has seen the Father.',
        },
        {
          id: 'wdgas-l3-q5',
          prompt: 'What is the main BibleStem conclusion of this lesson?',
          options: [
            'God is distant from suffering',
            'Jesus entered human pain and revealed the Father\u2019s compassionate heart',
            'Suffering proves God is absent',
            'The cross does not tell us anything about God\u2019s love',
          ],
          correctIndex: 1,
          explanation:
            'Scripture shows God coming near in Christ, bearing grief, and revealing the Father through compassion.',
        },
      ],
    },
  },
  'the-furnace-that-refines': {
    openingThoughtStepTitle: DEEPER_STEP_TITLES.objection,
    tensionStepTitle: 'Why This Question Matters',
    coreClaim: `This question matters because believers can misunderstand trials in two dangerous ways.

The first danger is despair.

A person may suffer and think, "God must have abandoned me."

The second danger is shallow explanation.

A person may tell someone in pain, "God did this to teach you a lesson," without tenderness, wisdom, or biblical balance.

BibleStem must avoid both errors.

Scripture does not teach that God enjoys afflicting His children.

Scripture does not teach that every painful event should be explained with a quick religious slogan.

But Scripture does teach that God can work through trials.

Trials can reveal what is hidden.

Trials can expose false security.

Trials can deepen dependence.

Trials can strengthen endurance.

Trials can loosen pride.

Trials can prepare people for service.

Trials can teach us to lean on God instead of self.

The furnace is not pleasant.

But in the hands of the Refiner, the furnace is not meaningless.`,
    keyTension: 'Why would a loving God allow His people to go through trials?',
    openingThought: `By now, the study has shown that suffering came through sin, not through God\u2019s original design.

It has also shown that God\u2019s delay is not indifference, and that Jesus entered human pain instead of standing far away from it.

But another hard question remains:

Why does God allow His own people to go through trials?

If someone loves God, why do they still suffer?

Why do faithful people experience loss, sickness, disappointment, pressure, loneliness, grief, and spiritual struggle?

This question can feel confusing because suffering does not always match our expectations.

We may think faith should remove hardship.

But Scripture shows something deeper.

Faith does not mean the furnace never gets hot.

Faith means God does not waste the furnace.

God is not the author of evil.

Pain is not good in itself.

But God is so wise, so present, and so redemptive that He can use even trials to refine what sin tried to destroy.`,
    scriptureStepTitle: DEEPER_STEP_TITLES.scriptureTrail,
    scriptureRef: '1 Peter 1:6 to 7',
    scriptureQuote: `That the trial of your faith, being much more precious than of gold that perisheth... might be found unto praise and honour and glory at the appearing of Jesus Christ.`,
    scriptureAfterPrimary: `Faith can be tested like gold. The test is painful, but God can use it to reveal what is genuine and lasting.`,
    scriptureSecondaryRef: 'James 1:2 to 4',
    scriptureSecondaryQuote: `My brethren, count it all joy when ye fall into divers temptations; knowing this, that the trying of your faith worketh patience.`,
    scriptureAfterSecondary: `James does not call pain enjoyable. He points to what God can produce through tested faith: patience, maturity, and spiritual completeness.`,
    scriptureWordInsights: [
      {
        surface: 'refine',
        lemma: 'Refine (purify)',
        transliteration: 'refine',
        meaning: 'To remove what corrupts so what is precious can remain.',
        reference: 'Malachi 3:2 to 3',
        note: `To refine is to remove what corrupts so what is precious can remain.

In Scripture, refining is often connected to fire, silver, gold, and purification.

The point is not destruction.

The point is restoration.

A refiner does not place worthless material in the fire.

He works with what has value.

When God refines His people, He is not trying to crush them.

He is revealing what does not belong, strengthening what is genuine, and preparing them for His purpose.`,
      },
    ],
    scriptureTrailHelper:
      'Follow the trail. See how God can work through trials without being the author of evil.',
    scriptureTrailSummary:
      'Trials are not proof of abandonment. God can refine faith, deepen dependence, and strengthen character.',
    scriptureSupplementBlocks: [
      scriptureThreadBlock({
        title: 'God Can Refine What Suffering Reveals',
        question:
          'Follow the trail. Scripture shows that trials are not proof of God\u2019s absence. When surrendered to Him, trials can test faith, produce endurance, reveal hidden weakness, deepen dependence, and prepare character for His purpose.',
        references: [
          {
            reference: '1 Peter 1:6 to 7',
            verseText:
              'Though now for a season, if need be, ye are in heaviness through manifold temptations: that the trial of your faith... might be found unto praise and honour and glory.',
            shortNote:
              'Faith can be tested like gold. The test is painful, but God can use it to reveal what is genuine and lasting.',
          },
          {
            reference: 'James 1:2 to 4',
            verseText:
              'My brethren, count it all joy when ye fall into divers temptations; knowing this, that the trying of your faith worketh patience.',
            shortNote:
              'James does not call pain enjoyable. He points to what God can produce through tested faith: patience, maturity, and spiritual completeness.',
          },
          {
            reference: 'Romans 5:3 to 5',
            verseText: 'Tribulation worketh patience; and patience, experience; and experience, hope.',
            shortNote:
              'God can turn pressure into endurance, endurance into proven character, and proven character into hope.',
          },
          {
            reference: 'Hebrews 12:5 to 11',
            verseText:
              'For whom the Lord loveth he chasteneth... but he for our profit, that we might be partakers of his holiness.',
            shortNote:
              'God\u2019s discipline is not rejection. Like a loving Father, He works for our holiness and healing.',
          },
          {
            reference: 'Malachi 3:2 to 3',
            verseText:
              'He is like a refiner\u2019s fire... and he shall sit as a refiner and purifier of silver.',
            shortNote:
              'God\u2019s refining work is careful and purposeful. He does not destroy what is precious. He removes what corrupts.',
          },
          {
            reference: 'Job 23:10',
            verseText: 'When he hath tried me, I shall come forth as gold.',
            shortNote:
              'Job did not understand everything he suffered, but he trusted that God could bring him through refined.',
          },
          {
            reference: '2 Corinthians 12:7 to 10',
            verseText: 'My grace is sufficient for thee: for my strength is made perfect in weakness.',
            shortNote:
              'God does not always remove the thorn immediately. Sometimes He reveals His strength in our weakness.',
          },
          {
            reference: 'Psalm 139:23 to 24',
            verseText:
              'Search me, O God, and know my heart... and lead me in the way everlasting.',
            shortNote:
              'Trials can reveal what we could not see in ourselves. God exposes wounds, motives, and weaknesses so He can lead us into healing.',
          },
        ],
        takeaway:
          'God can refine faith through trials without being the author of evil or delighting in pain.',
      }),
    ],
    teachingPointsStepTitle: DEEPER_STEP_TITLES.answer,
    teachingPoints: [
      `1. God Can Work Redemptively

A loving God allows trials because He can use them to refine faith, reveal hidden weakness, deepen dependence, and prepare His people for His purpose.

This does not mean suffering is good.

This does not mean every tragedy should be explained as a direct lesson.

This does not mean God is cruelly placing people in pain for no reason.

It means God is able to work redemptively in a world where suffering already exists because of sin.`,
      `2. The Image of Refining

The Bible often uses the image of refining.

Gold is placed in fire, not because the gold is worthless, but because it is valuable.

The fire reveals what does not belong.

The fire separates what is corrupt from what is precious.

The fire does not create the gold.

It purifies it.

In the same way, trials can reveal what comfort often hides.

They can reveal whether faith is rooted in God or in circumstances.

They can reveal whether we trust God only when life feels easy.

They can reveal pride, fear, bitterness, impatience, self-reliance, and hidden unbelief.

That exposure is not meant to shame us.

It is meant to heal us.`,
      `3. The Refiner Sees Value

God does not refine His people because He hates them.

He refines because He sees something precious.

The furnace is not proof that God has abandoned the believer.

Sometimes it is the place where the believer discovers that God is the only true refuge.`,
    ],
    godsCharacter: `This lesson reveals that God is not wasteful with pain.

Satan uses suffering to destroy faith.

God can use suffering to deepen faith.

Satan uses trials to accuse God.

God uses trials to reveal His sustaining grace.

Satan wants pain to make us bitter.

God can use pain to make us dependent, compassionate, patient, and mature.

God\u2019s character is not shown by pretending suffering is pleasant.

God\u2019s character is shown by the way He stays present in suffering and works through it for redemption.

He is the Refiner, not the destroyer.

He is the Father, not the enemy.

He is the Potter, not the accuser.

He does not throw away wounded people.

He works carefully with them.

When Scripture says God disciplines His children, it does not mean He is abusive.

It means He is committed to their holiness, healing, and eternal good.

A cruel god would abandon people to their defects.

A careless god would ignore what sin is doing inside them.

But the God of Scripture searches, reveals, corrects, strengthens, and restores.

He loves too deeply to leave His people unrefined.`,
    wordStudyFullStep: false,
    afterTeachingBlocks: [
      {
        type: 'refinersFire',
        sectionEyebrow: 'Trace the process',
        sectionSubtitle: 'Tap each stage to see how the Refiner works through trials.',
        title: 'The Refiner\u2019s Fire',
        subtitle: 'Five stages from pressure to strengthened character.',
        stages: REFINERS_FIRE_STAGES,
        completionSummary: REFINERS_FIRE_COMPLETE_SUMMARY,
        caption:
          'Explore all five stages. When you have opened each one, reflect on what God may be revealing and strengthening in you.',
      },
      { type: 'studyCta', label: 'Back to study overview', href: WHY_DOES_GOD_ALLOW_SUFFERING_OVERVIEW_HREF },
    ],
    reflectStepTitle: DEEPER_STEP_TITLES.heartCheck,
    reflectPlaceholder: 'Write your response. What is God showing you through this study?',
    reflectPrompt: `Trials can reveal what comfort conceals.

This part of the lesson invites the learner to examine what suffering, pressure, delay, or disappointment may be revealing in the heart.

1. What has pressure revealed about my faith recently?

2. Do trials make me run to God or withdraw from Him?

3. What weakness have I been ashamed to admit?

4. Where has God been trying to teach me dependence instead of self-reliance?

5. Am I confusing God\u2019s refining work with God\u2019s rejection?

6. What hidden fear, pride, bitterness, or unbelief might God be trying to heal?

7. How could my suffering make me more compassionate toward someone else?

God does not refine what He plans to throw away.

He refines what He sees as precious.`,
    lifeApplicationStepTitle: DEEPER_STEP_TITLES.practice,
    practiceCalloutTitle: 'Practice for 24 hours',
    lifeApplication: `For the next 24 hours, identify one trial, pressure, disappointment, or weakness that has been weighing on you.

Do not rush to explain it.

Bring it honestly before God.

Use this format:

The trial:
Write what you are facing.

The reaction:
Write what it has revealed in you.

Examples:

Fear.
Anger.
Control.
Bitterness.
Impatience.
Self-reliance.
Discouragement.
Prayerlessness.
Need for approval.

The Scripture:
Choose one passage from this lesson that speaks to the trial.

The refining question:
Ask, "Lord, what are You trying to heal, strengthen, or reveal in me?"

The response:
Choose one faithful action today.

Examples:

Pray instead of withdrawing.
Confess a hidden attitude.
Ask for help.
Encourage someone else who is suffering.
Stop numbing the pain and bring it to God.
Trust God\u2019s grace in weakness.

Father, I do not always understand the furnace. But I trust that You are not careless with my pain. Search my heart and reveal what needs healing. Refine my faith without letting bitterness take root. Teach me to depend on You, receive Your discipline as love, and come through the trial more surrendered to Christ. Amen.`,
    prayer: '',
    completionSummary: `God can use trials to refine faith and deepen dependence without being the author of evil.`,
    forwardQuestion: `What trial is revealing something in your heart right now, and will you bring it to the Refiner in prayer?`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'wdgas-l4-q1',
          prompt: 'According to 1 Peter 1:6 to 7, what can trials test?',
          options: ['God\u2019s weakness', 'The genuineness of faith', 'Whether God loves us', 'Whether sin is harmless'],
          correctIndex: 1,
          explanation: '1 Peter compares the trial of faith to gold tested by fire.',
        },
        {
          id: 'wdgas-l4-q2',
          prompt: 'According to James 1:2 to 4, what can the trying of faith produce?',
          options: ['Patience and maturity', 'Pride and revenge', 'Separation from God', 'Eternal suffering'],
          correctIndex: 0,
          explanation: 'James says the trying of faith works patience and leads toward spiritual completeness.',
        },
        {
          id: 'wdgas-l4-q3',
          prompt: 'What does Malachi 3 compare God\u2019s refining work to?',
          options: ['A thief in the night', 'A refiner\u2019s fire', 'A broken wall', 'A locked door'],
          correctIndex: 1,
          explanation: 'Malachi 3:2 to 3 compares God to a refiner and purifier of silver.',
        },
        {
          id: 'wdgas-l4-q4',
          prompt: 'According to 2 Corinthians 12:9, where is God\u2019s strength made perfect?',
          options: ['In human popularity', 'In weakness', 'In wealth', 'In denial'],
          correctIndex: 1,
          explanation: 'Paul heard Christ say, "My strength is made perfect in weakness."',
        },
        {
          id: 'wdgas-l4-q5',
          prompt: 'What is the main BibleStem conclusion of this lesson?',
          options: [
            'Suffering is good in itself',
            'God is the author of evil',
            'God can use trials to refine faith, reveal hidden weakness, and deepen dependence on Him',
            'Trials prove God has abandoned His people',
          ],
          correctIndex: 2,
          explanation:
            'Scripture shows God working redemptively through trials without claiming pain is good or that He authors evil.',
        },
      ],
    },
  },
  'until-there-is-no-more-pain': {
    openingThoughtStepTitle: DEEPER_STEP_TITLES.objection,
    tensionStepTitle: 'Why This Question Matters',
    coreClaim: `Hope matters because suffering can make people tired.

Not only physically tired.

Soul tired.

There is a kind of weariness that comes from watching pain repeat itself.

Even when people believe in God, they can start to wonder if sorrow is permanent.

This question matters because Christianity does not offer vague optimism.

It offers resurrection hope.

Scripture does not say, "Pain is not real."

Scripture says pain will not have the final word.

The Bible does not minimize tears.

It promises that God Himself will wipe them away.

This final lesson is not asking people to ignore suffering.

It is calling them to see suffering inside the larger promise of restoration.

The story does not end with a grave.

It ends with God making all things new.`,
    keyTension: 'Will suffering ever actually end?',
    openingThought: `This study began with one of the hardest questions people ask:

Why does God allow suffering?

We have seen that suffering was not part of God\u2019s original design.

We have seen that sin entered the world and brought death.

We have seen that God\u2019s delay is not indifference.

We have seen that Jesus entered human pain and revealed the Father\u2019s heart.

We have seen that God can refine His people through trials without being the author of evil.

But the final question remains:

Will suffering ever end?

Is pain just part of existence forever?

Will death always interrupt love?

Will grief always return?

Will evil always find another way to rise?

Revelation gives a clear answer.

No.

God will not manage suffering forever.

God will end it.`,
    scriptureStepTitle: DEEPER_STEP_TITLES.scriptureTrail,
    scriptureRef: 'Revelation 21:4',
    scriptureQuote: `And God shall wipe away all tears from their eyes; and there shall be no more death, neither sorrow, nor crying, neither shall there be any more pain.`,
    scriptureAfterPrimary: `God\u2019s final answer to suffering is not endless management. He removes death, sorrow, crying, and pain forever.`,
    scriptureWordInsights: [
      {
        surface: 'No More',
        lemma: 'No more (ouk eti)',
        transliteration: 'no more',
        meaning: 'Complete and permanent removal, not temporary relief.',
        reference: 'Revelation 21:4',
        note: `In Revelation 21:4, the phrase "no more" carries the sound of final victory.

No more death.

No more sorrow.

No more crying.

No more pain.

This is not temporary relief.

This is complete removal.

God\u2019s final answer to suffering is not endless management.

It is restoration.

The things that have wounded humanity will not be allowed to rise forever.

God will make all things new.`,
      },
    ],
    scriptureTrailHelper:
      'Follow the trail. Scripture shows that creation groans under sin, Christ brings resurrection hope, believers are called to comfort and serve the suffering, Satan is finally judged, and God makes all things new.',
    scriptureTrailSummary:
      'Suffering is real, but it is not final. God will end pain, raise His people, judge evil, and restore creation.',
    scriptureSupplementBlocks: [
      scriptureThreadBlock({
        title: 'From Groaning to Glory',
        question:
          'Follow the trail. Scripture shows that creation groans under sin, Christ brings resurrection hope, believers are called to comfort and serve the suffering, Satan is finally judged, and God makes all things new.',
        references: [
          {
            reference: 'Romans 8:22 to 23',
            verseText:
              'For we know that the whole creation groaneth and travaileth in pain together until now.',
            shortNote:
              'Suffering touches more than individuals. Creation itself groans under the weight of sin and longs for redemption.',
          },
          {
            reference: 'John 11:11 to 14',
            verseText:
              'Our friend Lazarus sleepeth; but I go, that I may awake him out of sleep.',
            shortNote:
              'Jesus describes death as sleep for the believer. Death is real, but it is not final in Christ.',
          },
          {
            reference: '1 Thessalonians 4:13 to 18',
            verseText: 'The dead in Christ shall rise first.',
            shortNote:
              'Believers do not grieve as those without hope. Christ will raise His sleeping people at His coming.',
          },
          {
            reference: '1 Corinthians 15:51 to 55',
            verseText: 'Death is swallowed up in victory.',
            shortNote:
              'The resurrection turns death from a final enemy into a defeated one.',
          },
          {
            reference: '2 Corinthians 1:3 to 4',
            verseText:
              'Who comforteth us in all our tribulation, that we may be able to comfort them which are in any trouble.',
            shortNote:
              'God comforts His people so they can become channels of comfort to others.',
          },
          {
            reference: 'Matthew 25:35 to 40',
            verseText:
              'Inasmuch as ye have done it unto one of the least of these my brethren, ye have done it unto me.',
            shortNote:
              'Ministering to the suffering matters to Jesus. Service to the hurting is received as service to Him.',
          },
          {
            reference: 'Revelation 20:10',
            verseText:
              'And the devil that deceived them was cast into the lake of fire and brimstone.',
            shortNote:
              'Satan\u2019s work will not continue forever. The deceiver and destroyer will face final judgment.',
          },
          {
            reference: 'Revelation 21:1 to 5',
            verseText:
              'And God shall wipe away all tears from their eyes; and there shall be no more death, neither sorrow, nor crying... Behold, I make all things new.',
            shortNote:
              'God\u2019s final answer to suffering is complete restoration. Death, sorrow, crying, and pain will be removed forever.',
          },
        ],
        takeaway:
          'Suffering is real, but it is not final. God will end pain, raise His people, judge evil, and make all things new.',
      }),
    ],
    teachingPointsStepTitle: DEEPER_STEP_TITLES.answer,
    teachingPoints: [
      `Suffering will end.

Not symbolically.

Not partially.

Not temporarily.

God will bring suffering to a complete and permanent end.

Revelation 21 does not describe God helping people cope with pain forever.

It describes God removing pain forever.

No more death.

No more sorrow.

No more crying.

No more pain.`,
      `This is the final direction of Scripture.

The Bible begins with a good creation.

Sin enters and brings suffering.

Christ enters suffering and defeats sin.

God comforts His people in the present.

God calls His people to comfort others.

Satan is judged.

Death is defeated.

Creation is restored.

God makes all things new.

This means Christian hope is not denial.

Christian hope looks directly at suffering and says:

This is real, but it is not final.

Death is real, but resurrection is coming.

Grief is real, but God will wipe away tears.

Evil is real, but Satan\u2019s work will end.

Pain is real, but it will not last forever.`,
      `The believer\u2019s hope is not that life will never hurt now.

The believer\u2019s hope is that Christ has already guaranteed the end of suffering.

Until then, God\u2019s people do not wait passively.

They comfort the grieving.

They feed the hungry.

They visit the lonely.

They pray with the sick.

They bear one another\u2019s burdens.

They live as signs of the coming kingdom.

Every act of compassion becomes a preview of the world God is restoring.`,
    ],
    godsCharacter: `Revelation 21 shows the heart of God.

God does not merely announce that tears will stop.

He wipes them away.

That picture matters.

It is personal.

It is tender.

It is close.

The God who created the universe is also the God who bends near to remove tears from His people\u2019s faces.

This reveals a Father who is not indifferent to sorrow.

He remembers every grief.

He sees every wound.

He knows every funeral.

He hears every cry.

And He will not allow suffering to define His creation forever.

Satan wounds.

God heals.

Satan destroys.

God restores.

Satan deceives.

God makes truth clear.

Satan brings death.

God raises the dead.

Satan\u2019s work ends in fire.

God\u2019s work ends in a new creation.

The final picture of God is not distance.

It is nearness.

Not abandonment.

Restoration.

Not endless suffering.

All things new.`,
    wordStudyFullStep: false,
    afterTeachingBlocks: [
      {
        type: 'fromGroaningToGlory',
        sectionEyebrow: 'Trace the promise',
        sectionSubtitle: 'Tap each stage to follow Scripture from groaning to glory.',
        title: 'From Groaning to Glory',
        subtitle: 'Six stages from creation\u2019s groan to God making all things new.',
        stages: FROM_GROANING_TO_GLORY_STAGES,
        completionSummary: FROM_GROANING_TO_GLORY_COMPLETE_SUMMARY,
        caption:
          'Explore all six stages. When you have opened each one, reflect on how God\u2019s plan gives hope to those who suffer.',
      },
      { type: 'studyCta', label: 'Back to study overview', href: WHY_DOES_GOD_ALLOW_SUFFERING_OVERVIEW_HREF },
    ],
    reflectStepTitle: DEEPER_STEP_TITLES.heartCheck,
    reflectPlaceholder: 'Write your response. What is God showing you through this study?',
    reflectPrompt: `The promise of Revelation 21 is not meant to make us careless about suffering now.

It is meant to give us courage, compassion, endurance, and hope.

If God will wipe away tears then, His people should help wipe tears now.

1. Where have I started to believe that suffering will never change?

2. Do I grieve with resurrection hope or with quiet despair?

3. How does Revelation 21 reshape the way I see pain today?

4. Who around me needs comfort, compassion, or practical help?

5. Am I waiting for the new creation while living selfishly in the old one?

6. What would it look like for my life to become a preview of God\u2019s coming kingdom?

Hope is not escaping the pain of the world.

Hope is living faithfully because God has promised pain will not have the final word.`,
    lifeApplicationStepTitle: DEEPER_STEP_TITLES.practice,
    practiceCalloutTitle: 'Practice for 24 hours',
    lifeApplication: `For the next 24 hours, practice hope through compassion.

Choose one person who is hurting, grieving, discouraged, lonely, sick, overwhelmed, or carrying a burden.

Do one concrete act of comfort.

Examples:

Send a sincere message.
Pray with them.
Bring a meal.
Offer help without making them ask.
Visit or call them.
Share one promise of Scripture.
Listen without rushing to fix.
Give quietly to meet a need.

Then reflect:

The person:
Who did I reach out to?

The burden:
What kind of suffering are they carrying?

The action:
What did I do to show compassion?

The Scripture:
Which promise shaped my response?

The reflection:
How did serving them help me understand God\u2019s heart?

Father, thank You that suffering will not last forever. Teach me to live with resurrection hope. Make me compassionate toward those who hurt. Help me comfort others with the comfort You give. Keep my eyes on the day when You will wipe away every tear, raise the dead in Christ, judge evil, and make all things new. Amen.`,
    prayer: '',
    completionSummary: `Suffering is real, but it is not final. God will end pain, raise His people, judge evil, and make all things new.`,
    forwardQuestion: `Who needs your compassion today, and which promise from Revelation 21 will shape how you respond?`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'wdgas-l5-q1',
          prompt: 'According to Revelation 21:4, what will be removed forever?',
          options: ['Faith, hope, and love', 'Death, sorrow, crying, and pain', 'Worship and joy', 'Scripture and prayer'],
          correctIndex: 1,
          explanation: 'Revelation 21:4 promises no more death, sorrow, crying, or pain.',
        },
        {
          id: 'wdgas-l5-q2',
          prompt: 'According to 1 Thessalonians 4:13 to 18, what will happen to the dead in Christ?',
          options: ['They are forgotten', 'They rise first', 'They remain dead forever', 'They become angels'],
          correctIndex: 1,
          explanation: 'Paul says the dead in Christ shall rise first at His coming.',
        },
        {
          id: 'wdgas-l5-q3',
          prompt: 'According to 2 Corinthians 1:3 to 4, why does God comfort us?',
          options: [
            'So we can ignore others',
            'So we can comfort others in trouble',
            'So we never feel pain again in this life',
            'So suffering has no meaning',
          ],
          correctIndex: 1,
          explanation: 'God comforts us so we can comfort those in any trouble.',
        },
        {
          id: 'wdgas-l5-q4',
          prompt: 'According to Matthew 25:35 to 40, how does Jesus view service to the suffering?',
          options: [
            'As unimportant',
            'As service done to Him',
            'As optional and meaningless',
            'As a replacement for faith',
          ],
          correctIndex: 1,
          explanation: 'Jesus said what we do for the least of His brethren we do unto Him.',
        },
        {
          id: 'wdgas-l5-q5',
          prompt: 'What is the main BibleStem conclusion of this lesson?',
          options: [
            'Suffering will continue forever',
            'Death is final for believers',
            'God will end suffering, raise His people, judge evil, and make all things new',
            'Christians should ignore suffering and wait for heaven',
          ],
          correctIndex: 2,
          explanation:
            'Scripture moves from groaning creation to final restoration where God removes pain forever.',
        },
      ],
    },
  },
}
