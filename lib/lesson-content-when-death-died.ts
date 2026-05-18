import type { LessonContentBlock, StudyVisualLessonBlock } from '@/lib/lesson-content-blocks'
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

const sinVersusJesusVisual: StudyVisualLessonBlock = {
  type: 'studyVisual',
  title: 'What sin brought and what Jesus chose',
  accent: 'stone',
  payload: {
    variant: 'comparison',
    leftTitle: 'What sin brought',
    rightTitle: 'What Jesus chose',
    leftItems: ['guilt', 'sorrow', 'separation', 'death'],
    rightItems: ['surrender', 'love', 'sacrifice', 'rescue'],
  },
  footnote: 'Jesus entered the full weight of sin and death so humanity could be rescued through His self-giving love.',
}

const weightTransferVisual: StudyVisualLessonBlock = {
  type: 'studyVisual',
  title: 'The weight that fell on Him',
  accent: 'stone',
  payload: {
    variant: 'comparison',
    leftTitle: 'Humanity',
    rightTitle: 'Jesus',
    leftItems: ['sin', 'guilt', 'shame', 'separation', 'death'],
    rightItems: ['bears', 'carries', 'suffers', 'restores'],
  },
  footnote: 'The weight that belonged to us fell on Him.',
}

const couldHaveVsChoseVisual: StudyVisualLessonBlock = {
  type: 'studyVisual',
  title: 'No one took His life',
  accent: 'stone',
  payload: {
    variant: 'comparison',
    leftTitle: 'What Jesus could have done',
    rightTitle: 'What Jesus chose',
    leftItems: ['escape', 'call angels', 'avoid suffering'],
    rightItems: ['surrender', 'sacrifice', 'love', 'rescue'],
  },
  footnote: 'No one took His life. He laid it down.',
}

const deathClaimVisual: StudyVisualLessonBlock = {
  type: 'studyVisual',
  title: 'Death had no rightful claim',
  accent: 'stone',
  payload: {
    variant: 'comparison',
    leftTitle: "Death's claim",
    rightTitle: "Christ's victory",
    leftItems: ['Sin brings death'],
    rightItems: ['Jesus bore sin', 'Remained sinless', 'Rose again'],
  },
  footnote: 'Death had no rightful claim over Him.',
}

const deathHadNoClaimInsightBlocks: LessonContentBlock[] = [
  deathClaimVisual,
  {
    type: 'scriptureChain',
    title: 'Death Could Not Hold Him',
    references: [
      { reference: 'Acts 2:24' },
      { reference: 'Romans 6:23' },
      { reference: 'Romans 8:1-4' },
      { reference: '1 Peter 2:22' },
    ],
  },
  {
    type: 'paragraph',
    text: 'Takeaway: Jesus was sinless, bore sin as our substitute, and rose because death had no rightful claim over Him.',
  },
]

const deathPowerVictoryVisual: StudyVisualLessonBlock = {
  type: 'studyVisual',
  title: 'Death is real, but not final',
  accent: 'sage',
  payload: {
    variant: 'comparison',
    leftTitle: "Death's power",
    rightTitle: "Christ's victory",
    leftItems: ['fear', 'bondage', 'separation', 'grief'],
    rightItems: ['life', 'freedom', 'hope', 'resurrection'],
  },
  footnote: 'Death is real, but it is no longer final.',
}

const powerOfDeathBrokenInsightBlocks: LessonContentBlock[] = [
  deathPowerVictoryVisual,
  {
    type: 'scriptureChain',
    title: "Death's Power Broken",
    references: [
      { reference: 'Hebrews 2:14-15' },
      { reference: '2 Timothy 1:10' },
      { reference: 'Revelation 1:18' },
      { reference: '1 Corinthians 15:26' },
    ],
  },
  {
    type: 'paragraph',
    text: 'Takeaway: Jesus broke the power of death, freed humanity from fear, and brought life and immortality to light through the gospel.',
  },
]

const victorySecuredSequenceVisual: StudyVisualLessonBlock = {
  type: 'studyVisual',
  title: 'Victory secured in Christ',
  accent: 'sage',
  description: 'The resurrection of Jesus secures the future resurrection of His people.',
  payload: {
    variant: 'sequence',
    steps: [
      { label: 'Christ rose', subtitle: 'Death could not hold the Lord of life.' },
      { label: 'The dead in Christ rise', subtitle: 'The trumpet sounds and the graves open.' },
      { label: 'The redeemed are changed', subtitle: 'Raised incorruptible, not merely repaired.' },
      { label: 'Death is swallowed up', subtitle: 'Victory answers everything death stole.' },
      { label: 'Life remains forever', subtitle: 'The second death has no power over the redeemed.' },
    ],
  },
  footnote: 'The resurrection of Jesus secures the future resurrection of His people.',
}

const victorySecuredInsightBlocks: LessonContentBlock[] = [
  victorySecuredSequenceVisual,
  {
    type: 'scriptureChain',
    title: 'Death Swallowed Up',
    references: [
      { reference: 'John 11:25' },
      { reference: '1 Corinthians 15:52-55' },
      { reference: 'Revelation 20:6' },
      { reference: 'Revelation 2:11' },
    ],
  },
  {
    type: 'paragraph',
    text: 'Takeaway: Jesus\' resurrection secures the future resurrection and final victory over death for all who belong to Him.',
  },
]

const whenDeathDiedRecapVisual: StudyVisualLessonBlock = {
  type: 'studyVisual',
  title: 'When Death Died',
  accent: 'sage',
  description: 'The gospel movement of this study, from the cross to resurrection hope.',
  payload: {
    variant: 'sequence',
    steps: [
      { label: 'Sin was carried', subtitle: 'Jesus bore the weight that belonged to us.' },
      { label: 'Love was revealed', subtitle: 'He chose the cross willingly.' },
      { label: 'Death was broken', subtitle: 'The grave could not hold Him.' },
      { label: 'Resurrection was secured', subtitle: 'Victory for all who belong to Christ.' },
      { label: 'Hope became alive', subtitle: 'Believers live from His victory now.' },
    ],
  },
  footnote: 'Because Jesus lives, death does not get the final word.',
}

const liveFromVictoryInsightBlocks: LessonContentBlock[] = [
  whenDeathDiedRecapVisual,
  {
    type: 'scriptureChain',
    title: 'Living From Victory',
    references: [
      { reference: 'John 11:25-26' },
      { reference: 'Romans 8:38-39' },
      { reference: '1 John 4:19' },
      { reference: '2 Timothy 1:7' },
    ],
  },
  {
    type: 'paragraph',
    text: 'Takeaway: Because Jesus defeated death, believers can live with love, courage, confidence, and resurrection hope.',
  },
]

const heChoseTheCrossInsightBlocks: LessonContentBlock[] = [
  couldHaveVsChoseVisual,
  {
    type: 'scriptureChain',
    title: 'He Laid It Down',
    references: [
      { reference: 'John 10:17-18' },
      { reference: 'Matthew 26:53' },
      { reference: 'Philippians 2:8' },
      { reference: 'Ephesians 3:19' },
    ],
  },
  {
    type: 'paragraph',
    text: 'Takeaway: Jesus was not forced into death. He willingly laid down His life because of self-giving love.',
  },
]

const theWeightOfSinInsightBlocks: LessonContentBlock[] = [
  weightTransferVisual,
  {
    type: 'scriptureChain',
    title: 'The Weight He Carried',
    references: [
      { reference: 'Matthew 27:46' },
      { reference: 'Isaiah 53:10-12' },
      { reference: 'Psalm 88:3-4' },
      { reference: '1 Peter 2:24' },
    ],
  },
  {
    type: 'paragraph',
    text: 'Takeaway: Jesus bore the full weight of sin, guilt, and separation so humanity could be restored to God.',
  },
]

const heEnteredDeathInsightBlocks: LessonContentBlock[] = [
  sinVersusJesusVisual,
  {
    type: 'scriptureChain',
    title: 'He Entered Our Burden',
    references: [
      { reference: 'Matthew 26:38-39' },
      { reference: 'Isaiah 53:4-6' },
      { reference: '2 Corinthians 5:21' },
      { reference: 'Hebrews 2:9' },
    ],
  },
  {
    type: 'paragraph',
    text: 'Takeaway: Jesus entered the full weight of sin and death so humanity could be rescued through His self-giving love.',
  },
]

/** Guided reader lessons for "When Death Died" (Foundations). */
export const whenDeathDiedSeriesLessonLibrary: Record<string, LessonReaderContent> = {
  'he-entered-death': {
    openingThought: `Jesus did not save humanity from a safe distance.

He entered our darkness.

In Gethsemane, the weight of what He was about to carry pressed so heavily on Him that He said His soul was "exceeding sorrowful, even unto death."

This was not fear of physical pain only.

Jesus was beginning to feel the full weight of sin, guilt, separation, and death.

He stepped into what sin does to the human soul so He could rescue us from it.`,
    scriptureRef: 'Matthew 26:38',
    scriptureQuote: 'Then saith he unto them, My soul is exceeding sorrowful, even unto death.',
    scriptureAfterPrimary: `Gethsemane shows that Jesus' suffering began before the nails.

He was facing more than execution.

He was facing the cup of sin, guilt, separation, and judgment on behalf of humanity.`,
    scriptureSecondaryRef: 'Matthew 26:39',
    scriptureSecondaryQuote:
      'O my Father, if it be possible, let this cup pass from me: nevertheless not as I will, but as thou wilt.',
    scriptureAfterSecondary: `Jesus did not deny the cost.

He surrendered in love.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Isaiah 53:4-6',
        quote:
          'Surely he hath borne our griefs, and carried our sorrows: yet we did esteem him stricken, smitten of God, and afflicted. But he was wounded for our transgressions, he was bruised for our iniquities: the chastisement of our peace was upon him; and with his stripes we are healed. All we like sheep have gone astray; we have turned every one to his own way; and the LORD hath laid on him the iniquity of us all.',
      },
      {
        type: 'scripture',
        reference: '2 Corinthians 5:21',
        quote: 'For he hath made him to be sin for us, who knew no sin.',
      },
    ],
    teachingPoints: [
      `1. Jesus felt the weight before the nails

Gethsemane shows that Jesus' suffering began before the cross.

His sorrow was so deep He described it as being "unto death."

He was not only facing physical execution.

He was facing the cup of sin, guilt, separation, and judgment on behalf of humanity.`,
      `2. Jesus carried what was not His

Isaiah says He bore our griefs and carried our sorrows.

Jesus did not suffer because He had sinned.

He suffered because He chose to carry what belonged to us.

Our sin.
Our shame.
Our guilt.
Our brokenness.

He entered the burden so we could be freed from it.`,
      `3. Jesus became sin for us

2 Corinthians 5:21 says Jesus was made to be sin for us, though He knew no sin.

That does not mean Jesus became sinful in character.

It means He stood in our place and bore the weight, consequence, and condemnation of sin.

The sinless One entered the death-path of sinners.`,
      `4. Jesus surrendered in love

In Gethsemane, Jesus prayed, "Not as I will, but as thou wilt."

This was not weakness.

This was surrender.

He could see the cost, feel the weight, and still choose love.

Jesus entered death willingly because saving us mattered to Him.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Cup',
      lemma: 'ποτήριον',
      transliteration: 'potērion',
      meaning:
        'In Scripture, a "cup" can represent an experience someone must receive or pass through, often connected with suffering, judgment, or deep trial.',
      strongs: 'G4221',
      reference: 'Matthew 26:39',
      note: `When Jesus prayed for the cup to pass, He was facing more than physical pain.

He was facing the full weight of sin and separation.

Yet He surrendered to the Father's will so humanity could be rescued.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `Gethsemane helps us understand the cross more deeply.

Jesus was not simply walking toward Roman execution.

He was entering the full consequence of sin.

Sin separates.
Sin crushes.
Sin brings guilt.
Sin leads to death.

Jesus stepped into that reality for us.

He did not minimize death.

He entered it.

He did not avoid the weight of sin.

He carried it.

This is why His love is not shallow sentiment.

It is costly, deliberate, self-giving rescue.`,
    },
    studyInsightBlocks: heEnteredDeathInsightBlocks,
    reflectPrompt: `What does it mean to you that Jesus did not avoid the weight of sin, but entered it for you?

Think about guilt, grief, shame, fear, or anything that has made you feel spiritually crushed.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, when guilt or shame feels heavy, do not carry it alone.

Bring it to Jesus.

He understands the weight.

He entered it.

He carried what was not His so you would not have to be destroyed by what was yours.

Pray honestly:

"Jesus, I am bringing this weight to You."

Then name it.

Do not hide it.

The Savior who entered death for you can carry what is crushing you now.

Prayer:

Jesus, thank You for entering the weight of sin and death for me. Thank You for carrying what I could never carry and choosing love when the cost was unbearable. Help me bring my guilt, shame, grief, and fear to You. Teach me to trust Your surrender, Your sacrifice, and Your rescuing love. Amen.`,
    prayer: '',
    completionSummary: `Jesus entered the weight of sin and death for us. He did not save from a distance. He stepped into the darkness to rescue humanity through love.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'wdd-l1-q1',
          prompt: 'Where did Jesus experience deep sorrow before the cross?',
          options: ['Gethsemane', 'Babylon', 'Egypt', 'Mount Carmel'],
          correctIndex: 0,
          explanation:
            'In Gethsemane, Jesus said His soul was exceeding sorrowful, even unto death.',
        },
        {
          id: 'wdd-l1-q2',
          prompt: 'According to Isaiah 53, what did Jesus bear and carry?',
          options: ['Our griefs and sorrows', 'His own sin', 'Roman wealth', 'Human applause'],
          correctIndex: 0,
          explanation: 'Isaiah 53 says Jesus bore our griefs and carried our sorrows.',
        },
        {
          id: 'wdd-l1-q3',
          prompt: 'According to 2 Corinthians 5:21, what was Jesus made to be for us?',
          options: [
            'Sin for us',
            'A sinner in character',
            'A political ruler',
            'An angel',
          ],
          correctIndex: 0,
          explanation:
            'Jesus was made to be sin for us, meaning He stood in our place and bore sin\'s weight though He knew no sin.',
        },
        {
          id: 'wdd-l1-q4',
          prompt: 'What did Jesus pray in Gethsemane?',
          options: [
            '"Not as I will, but as thou wilt"',
            '"I will not save them"',
            '"Sin is harmless"',
            '"The grave is stronger than God"',
          ],
          correctIndex: 0,
          explanation:
            'Jesus surrendered to the Father\'s will, choosing the path of sacrifice and rescue.',
        },
        {
          id: 'wdd-l1-q5',
          kind: 'reflection',
          prompt: 'What burden do you need to bring to Jesus instead of carrying it alone?',
          explanation:
            'Jesus entered the weight of sin and death so we could bring our guilt, shame, grief, and fear to Him.',
        },
      ],
    },
  },
  'the-weight-of-sin': {
    openingThought: `Sin is heavier than most people realize.

It is not just a mistake.
It is not just a bad habit.
It is not just breaking a rule.

Sin separates the heart from God, damages the conscience, bends love into selfishness, and ends in death.

At the cross, Jesus carried the full weight of what sin does.

He carried guilt that was not His.
He entered sorrow He did not deserve.
He bore shame He did not create.

The weight of sin fell on the sinless One so the guilty could be restored.`,
    scriptureRef: 'Matthew 27:46',
    scriptureQuote:
      'And about the ninth hour Jesus cried with a loud voice, saying, Eli, Eli, lama sabachthani? that is to say, My God, my God, why hast thou forsaken me?',
    scriptureAfterPrimary: `This was not theater.

Jesus was entering the terrible weight of sin's separation.

He had lived in perfect fellowship with the Father, yet now He bore the darkness sin brings.`,
    scriptureSecondaryRef: 'Isaiah 53:10',
    scriptureSecondaryQuote: 'Yet it pleased the LORD to bruise him; he hath put him to grief.',
    scriptureAfterSecondary: `Isaiah points to deep inward suffering, not wounds on the surface only.

The cross reveals that sin is crushing.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Isaiah 53:11',
        quote:
          'He shall see of the travail of his soul, and shall be satisfied: by his knowledge shall my righteous servant justify many; for he shall bear their iniquities.',
      },
      {
        type: 'scripture',
        reference: 'Psalm 88:3-4',
        quote:
          'For my soul is full of troubles: and my life draweth nigh unto the grave. I am counted with them that go down into the pit.',
      },
    ],
    teachingPoints: [
      `1. Jesus entered the feeling of separation

On the cross, Jesus cried, "My God, my God, why hast thou forsaken me?"

This was not theater.

Jesus was entering the terrible weight of sin's separation.

He had lived in perfect fellowship with the Father, yet now He bore the darkness sin brings.

He stepped into the place humanity deserved so humanity could be brought back to God.`,
      `2. Sin crushes the soul

Isaiah speaks of the "travail of his soul."

This points to deep inward suffering.

Jesus did not only experience wounds on His body.

He carried anguish in His soul.

The cross reveals that sin is not light, casual, or harmless.

It is crushing.`,
      `3. Jesus carried guilt that was not His

Jesus had no sin of His own.

He did not lie, rebel, abuse, deceive, or turn from the Father.

Yet He carried human guilt as our substitute.

The innocent One stood in the place of the guilty.

This is the heart of the gospel.`,
      `4. Jesus bore the weight to rescue us

The weight of sin did not fall on Jesus by accident.

He chose to carry it.

He carried what would have destroyed us so that we could receive forgiveness, cleansing, and life.

The cross shows both the seriousness of sin and the depth of God's love.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Forsaken',
      lemma: 'ἐγκαταλείπω',
      transliteration: 'egkataleipō',
      meaning: 'Abandoned, left alone, or given over.',
      strongs: 'G1459',
      reference: 'Matthew 27:46',
      note: `When Jesus cried, "Why hast thou forsaken me?" He was expressing the terrifying experience of sin's separation.

He entered that darkness for us.

The Son felt forsaken so sinners could be brought near.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The cross shows us what sin really costs.

Sin does not merely create bad behavior.

It creates separation from God, heaviness in the soul, guilt before heaven, and death.

Jesus carried that full reality.

He did not carry a symbol.

He carried the burden.

This is why the cross must never be treated lightly.

It reveals two truths at once:

Sin is worse than we imagined.

God's love is deeper than we believed.

Jesus entered the crushing weight of sin so that the weight would not have the final word over us.`,
    },
    studyInsightBlocks: theWeightOfSinInsightBlocks,
    reflectPrompt: `What does the weight Jesus carried reveal about how serious sin is and how deep His love is?

Hold both truths together. Sin is not small, and God's love is not weak.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, stop treating sin casually and stop treating grace cheaply.

Bring both honesty and hope to Jesus.

Name one sin, burden, or guilt you have minimized.

Then bring it to the cross.

Say:

"Jesus, this is heavier than I admitted. Thank You for carrying what I could not."

Do not hide from the weight.

Let the weight lead you to the Savior.

Prayer:

Jesus, thank You for carrying the weight of sin for me. Help me see sin honestly without running from Your mercy. Thank You for entering separation so I could be brought near. Teach me to hate what destroys and trust the love that restores. Amen.`,
    prayer: '',
    completionSummary: `Jesus carried the weight of sin, guilt, shame, and separation. The cross shows how serious sin is and how deeply God loves.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'wdd-l2-q1',
          prompt: 'What did Jesus cry out on the cross in Matthew 27:46?',
          options: [
            '"My God, my God, why hast thou forsaken me?"',
            '"I have no love for them"',
            '"Sin is harmless"',
            '"Death has won"',
          ],
          correctIndex: 0,
          explanation:
            'Jesus cried, "My God, my God, why hast thou forsaken me?" showing the deep experience of sin\'s separation.',
        },
        {
          id: 'wdd-l2-q2',
          prompt: 'What does Isaiah 53 describe Jesus experiencing?',
          options: [
            'The travail of His soul',
            'Personal guilt for His own sin',
            'Political victory only',
            'A painless death',
          ],
          correctIndex: 0,
          explanation:
            'Isaiah 53 speaks of the travail of His soul, showing the inward suffering Jesus carried.',
        },
        {
          id: 'wdd-l2-q3',
          prompt: 'Why did Jesus carry guilt?',
          options: [
            'Because He stood in humanity\'s place',
            'Because He had sinned',
            'Because He was forced by Rome only',
            'Because He failed the Father',
          ],
          correctIndex: 0,
          explanation:
            'Jesus had no sin of His own. He carried guilt as our substitute, standing in humanity\'s place.',
        },
        {
          id: 'wdd-l2-q4',
          prompt: 'What does the cross reveal?',
          options: [
            'Sin is serious and God\'s love is deep',
            'Sin does not matter',
            'God abandoned His plan',
            'Death is stronger than Christ',
          ],
          correctIndex: 0,
          explanation:
            'The cross reveals both the seriousness of sin and the depth of God\'s self-giving love.',
        },
        {
          id: 'wdd-l2-q5',
          kind: 'reflection',
          prompt: 'What burden have you been carrying that Jesus invites you to bring to the cross?',
          explanation:
            'Jesus carried the weight of sin and separation so we do not have to hide under guilt and shame.',
        },
      ],
    },
  },
  'he-chose-the-cross': {
    openingThought: `Jesus was not trapped by the cross.

That matters.

He was not overpowered by Rome.
He was not defeated by religious leaders.
He was not caught in a plan gone wrong.

Jesus chose the cross.

He saw the cost.
He felt the weight.
He knew the suffering ahead.

And still, He stayed.

That kind of love is not passive.

It is deliberate.

Jesus laid down His life willingly so humanity could be brought back to God.`,
    scriptureRef: 'John 10:18',
    scriptureQuote: 'No man taketh it from me, but I lay it down of myself.',
    scriptureAfterPrimary: `Jesus was not helpless.

The cross was not the moment love lost control.

It was the moment love chose sacrifice.`,
    scriptureSecondaryRef: 'John 10:17',
    scriptureSecondaryQuote:
      'Therefore doth my Father love me, because I lay down my life, that I might take it again.',
    scriptureAfterSecondary: `The Father's love rests on the Son's willing surrender.

Jesus lays down His life so He might take it again in resurrection victory.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Matthew 26:53',
        quote:
          'Thinkest thou that I cannot now pray to my Father, and he shall presently give me more than twelve legions of angels?',
      },
      {
        type: 'scripture',
        reference: 'Ephesians 3:19',
        quote: 'And to know the love of Christ, which passeth knowledge.',
      },
      {
        type: 'scripture',
        reference: 'Philippians 2:8',
        quote: 'And being found in fashion as a man, he humbled himself, and became obedient unto death, even the death of the cross.',
      },
    ],
    teachingPoints: [
      `1. No one took Jesus' life from Him

Jesus said plainly, "No man taketh it from me."

This means the cross was not an accident.

Jesus was not helpless.

He willingly laid down His life.

The cross was not the moment love lost control.

It was the moment love chose sacrifice.`,
      `2. Jesus had power to escape

In Matthew 26, Jesus said He could have called more than twelve legions of angels.

He was not without options.

He could have ended the suffering.

He could have stepped away from the cup.

He could have refused the cross.

But He did not.

He stayed because love held Him there.`,
      `3. Jesus humbled Himself

Philippians says Jesus humbled Himself and became obedient unto death.

The cross shows humility deeper than words.

Jesus did not cling to status, comfort, or self-protection.

He surrendered Himself fully to the Father's will and humanity's rescue.`,
      `4. His love passes knowledge

Ephesians says the love of Christ passes knowledge.

That means His love is deeper than we can fully measure.

The cross reveals a love that is not shallow, sentimental, or temporary.

It is costly.

It is faithful.

It goes all the way.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Lay Down',
      lemma: 'τίθημι',
      transliteration: 'tithēmi',
      meaning: 'To place, set aside, surrender, or give willingly.',
      strongs: 'G5087',
      reference: 'John 10:18',
      note: `Jesus did not say His life was taken first.

He said He laid it down.

This reveals voluntary love.

The cross was not forced on Jesus. He chose it for our salvation.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The voluntary nature of Jesus' death matters because it shows the heart behind the cross.

If Jesus had been forced, the cross would look like tragedy only.

But because He chose it, the cross reveals love.

He chose surrender.
He chose humility.
He chose suffering.
He chose the burden.
He chose us.

This does not make the cross less painful.

It makes His love more visible.

Jesus knew what death would cost, and He still moved forward.

The nails did not hold Him there first.

Love did.`,
    },
    studyInsightBlocks: heChoseTheCrossInsightBlocks,
    reflectPrompt: `How does it change your view of the cross to know Jesus chose it willingly?

Think about what this reveals about His love, His courage, and His desire to save you.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, let the willing love of Jesus confront the lie that God is reluctant to save.

Jesus did not have to be convinced to love you.

He chose the cross.

When guilt says, "God does not want me," answer with Christ's words:

"No man taketh it from me, but I lay it down of myself."

His sacrifice was not reluctant.

His love moved first.

Prayer:

Jesus, thank You for choosing the cross. Thank You that no one took Your life from You, but You laid it down in love. Help me trust that You are not reluctant to save me. Teach me to receive Your sacrifice with humility, gratitude, and faith. Amen.`,
    prayer: '',
    completionSummary: `Jesus was not trapped by death. No one took His life from Him. He chose the cross in love and laid down His life to rescue us.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'wdd-l3-q1',
          prompt: 'According to John 10:18, what did Jesus say about His life?',
          options: [
            'No one takes it from Him, but He lays it down Himself',
            'Rome had full control over Him',
            'He could not choose obedience',
            'He was surprised by the cross',
          ],
          correctIndex: 0,
          explanation: 'Jesus said no one takes His life from Him. He willingly lays it down.',
        },
        {
          id: 'wdd-l3-q2',
          prompt: 'What did Jesus say He could ask the Father for in Matthew 26:53?',
          options: [
            'More than twelve legions of angels',
            'A Roman army',
            'A golden throne immediately',
            'A different gospel',
          ],
          correctIndex: 0,
          explanation:
            'Jesus said He could call more than twelve legions of angels, showing He had power to escape but chose surrender.',
        },
        {
          id: 'wdd-l3-q3',
          prompt: 'According to Philippians 2:8, what did Jesus become obedient unto?',
          options: [
            'Death, even the death of the cross',
            'Personal pride',
            'Human applause',
            'Sinful desire',
          ],
          correctIndex: 0,
          explanation:
            'Philippians 2:8 says Jesus humbled Himself and became obedient unto death, even the death of the cross.',
        },
        {
          id: 'wdd-l3-q4',
          prompt: 'What does Jesus choosing the cross reveal?',
          options: [
            'His self-giving love',
            'His lack of power',
            'His confusion',
            'His defeat by evil',
          ],
          correctIndex: 0,
          explanation: 'Jesus chose the cross willingly, revealing deliberate, self-giving love.',
        },
        {
          id: 'wdd-l3-q5',
          kind: 'reflection',
          prompt: 'What does Jesus\' willing sacrifice tell you about how much He wants to save you?',
          explanation:
            'The cross shows that Jesus was not reluctant. He laid down His life freely because of love.',
        },
      ],
    },
  },
  'death-had-no-claim': {
    openingThought: `Death had power over humanity because of sin.

But Jesus had no sin.

That changes everything.

He entered death carrying the sins of the world, but death had no rightful claim over Him. He bore sin without becoming sinful. He carried guilt without yielding to rebellion. He stepped into the grave, but the grave could not keep Him.

Death met the only Person it had no legal right to hold.

That is why the resurrection was not just surprising.

It was necessary.`,
    scriptureRef: 'Acts 2:24',
    scriptureQuote:
      'Whom God hath raised up, having loosed the pains of death: because it was not possible that he should be holden of it.',
    scriptureAfterPrimary: `This is a massive statement.

Death held every other human being because all had sinned.

But Jesus was sinless.

The grave could not keep the Lord of life.`,
    scriptureSecondaryRef: 'Romans 6:23',
    scriptureSecondaryQuote:
      'For the wages of sin is death; but the gift of God is eternal life through Jesus Christ our Lord.',
    scriptureAfterSecondary: `Death is connected to sin.

Sin disconnects from the Source of life.

That is why death has power over fallen humanity.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Romans 8:1',
        quote: 'There is therefore now no condemnation to them which are in Christ Jesus.',
      },
      {
        type: 'scripture',
        reference: 'Romans 8:3',
        quote:
          'For what the law could not do, in that it was weak through the flesh, God sending his own Son in the likeness of sinful flesh, and for sin, condemned sin in the flesh.',
      },
    ],
    teachingPoints: [
      `1. Death is connected to sin

Romans 6:23 says the wages of sin is death.

Death is not random.

It is the result of separation from God, who is life.

Sin produces death because sin disconnects from the Source of life.

That is why death has power over fallen humanity.`,
      `2. Jesus had no sin of His own

Jesus entered human flesh, but He never yielded to sin.

He was tempted.
He suffered.
He felt pressure.
He faced darkness.

But He never rebelled against the Father.

He carried sin as our substitute, but sin never became His character.`,
      `3. Death could not hold Him

Acts 2:24 says it was not possible for death to hold Jesus.

Death held every other human being because all had sinned.

But Jesus was sinless.

Death had no rightful claim over Him.

The grave could not keep the Lord of life.`,
      `4. Jesus condemned sin in the flesh

Romans 8 says God condemned sin in the flesh through His Son.

Jesus did not merely escape death.

He defeated the power behind it.

He entered the human condition, overcame sin from within human life, and broke condemnation for those who are in Him.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Claim',
      lemma: 'κατέχω',
      transliteration: 'katecho',
      meaning: 'A right, demand, or legal hold over something or someone.',
      strongs: 'G2722',
      reference: 'Acts 2:24',
      note: `Death had a claim over humanity because of sin.

But death had no claim over Jesus.

He carried our sin without becoming sinful, and His resurrection proves that death's power was broken.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The resurrection was not only a miracle of power.

It was a declaration of victory.

Jesus entered death with our sins upon Him, but He was personally sinless.

Death could not accuse Him.
Death could not own Him.
Death could not keep Him.

When God raised Jesus, He was showing that sin had been defeated and death had lost its grip.

This is why Romans 8 begins with such strong hope:

"There is therefore now no condemnation to them which are in Christ Jesus."

Jesus broke the claim of death so condemnation would not have the final word over those who trust Him.`,
    },
    studyInsightBlocks: deathHadNoClaimInsightBlocks,
    reflectPrompt: `How does it change your view of salvation to know Jesus broke death's claim, not just your fear of death?

Think about guilt, condemnation, sin, and the confidence believers can have in Christ.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, when condemnation speaks, answer it with the resurrection.

Condemnation says:

"You are still owned by your failure."

The resurrection says:

"Death could not hold Christ, and condemnation does not get the final word over those in Him."

Do not build confidence on your record.

Build it on Jesus.

He carried sin.
He defeated death.
He rose in victory.

Prayer:

Jesus, thank You that death had no claim over You. Thank You for bearing sin without becoming sinful and for rising in victory. Help me stop living under condemnation and start trusting what You have done. Anchor my confidence in Your resurrection, not in my performance. Amen.`,
    prayer: '',
    completionSummary: `Death had no rightful claim over Jesus. He bore sin, remained sinless, and rose again, breaking condemnation for all who are in Him.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'wdd-l4-q1',
          prompt: 'According to Acts 2:24, why was death unable to hold Jesus?',
          options: [
            'It was not possible that He should be held by it',
            'The disciples hid His body',
            'Rome changed its mind',
            'Jesus only appeared to die',
          ],
          correctIndex: 0,
          explanation:
            'Acts 2:24 says God raised Jesus because it was not possible for death to hold Him.',
        },
        {
          id: 'wdd-l4-q2',
          prompt: 'According to Romans 6:23, what are the wages of sin?',
          options: ['Death', 'Eternal life', 'Popularity', 'Wisdom'],
          correctIndex: 0,
          explanation:
            'Romans 6:23 says the wages of sin is death, showing the connection between sin and death.',
        },
        {
          id: 'wdd-l4-q3',
          prompt: 'What does Romans 8:1 say about those who are in Christ Jesus?',
          options: [
            'There is no condemnation',
            'There is no hope',
            'They are still owned by death',
            'They must save themselves',
          ],
          correctIndex: 0,
          explanation:
            'Romans 8:1 says there is now no condemnation to those who are in Christ Jesus.',
        },
        {
          id: 'wdd-l4-q4',
          prompt: 'What did Jesus do according to Romans 8:3?',
          options: [
            'Condemned sin in the flesh',
            'Became sinful in character',
            'Avoided human suffering',
            'Denied the Father',
          ],
          correctIndex: 0,
          explanation: 'Romans 8:3 says God condemned sin in the flesh through His Son.',
        },
        {
          id: 'wdd-l4-q5',
          kind: 'reflection',
          prompt: 'Where do you need to believe that condemnation does not have the final word over you?',
          explanation:
            'Jesus broke death\'s claim through His sinless life, sacrificial death, and victorious resurrection.',
        },
      ],
    },
  },
  'the-power-of-death-broken': {
    openingThought: `Death has ruled the human story like an enemy no one could escape.

Every generation has faced it.
Every family has felt it.
Every heart has feared it.

But Jesus stepped into death and broke its power from the inside.

He did not merely survive death.

He conquered it.

Through His death and resurrection, Jesus destroyed the enemy's hold and freed humanity from the fear that death gets the final word.

The grave is still real.

But because of Jesus, it is no longer final.`,
    scriptureRef: 'Hebrews 2:14',
    scriptureQuote:
      'That through death he might destroy him that had the power of death, that is, the devil.',
    scriptureAfterPrimary: `This sounds strange at first.

But this is the wisdom of God.

Jesus did not defeat death by avoiding it.

He defeated death by entering it, carrying sin's weight, remaining faithful, and rising victorious.`,
    scriptureSecondaryRef: 'Hebrews 2:15',
    scriptureSecondaryQuote:
      'And deliver them who through fear of death were all their lifetime subject to bondage.',
    scriptureAfterSecondary: `Death does not only affect the end of life.

It can shape how people live now.

Jesus came to free us from that bondage.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: '2 Timothy 1:10',
        quote:
          'But is now made manifest by the appearing of our Saviour Jesus Christ, who hath abolished death, and hath brought life and immortality to light through the gospel.',
      },
      {
        type: 'scripture',
        reference: 'Revelation 1:18',
        quote: 'I am he that liveth, and was dead; and, behold, I am alive for evermore.',
      },
      {
        type: 'scripture',
        reference: '1 Corinthians 15:26',
        quote: 'The last enemy that shall be destroyed is death.',
      },
    ],
    teachingPoints: [
      `1. Jesus defeated death by entering it

Hebrews says Jesus destroyed the power of death through death.

The enemy used death as a weapon.

Jesus turned death into the place of victory.

He did not defeat death by avoiding it.

He defeated death by entering it, carrying sin's weight, remaining faithful, and rising victorious.`,
      `2. Death is connected to bondage

Hebrews 2 says people are held in bondage through the fear of death.

Death does not only affect the end of life.

It can shape how people live now.

Fear of death can produce anxiety, hopelessness, selfishness, despair, and spiritual slavery.

Jesus came to free us from that bondage.`,
      `3. Jesus brought life and immortality to light

2 Timothy 1:10 says Jesus abolished death and brought life and immortality to light through the gospel.

That means the gospel gives us a clearer hope than human optimism ever could.

Life is not found in pretending death is small.

Life is found in knowing Christ has defeated it.

Jesus reveals that death is not stronger than God's saving love.`,
      `4. Jesus holds authority over death

In Revelation 1:18, Jesus declares that He was dead and is alive forevermore.

This is resurrection authority.

The One who passed through death now stands alive forever.

Death no longer speaks the final word.

Jesus does.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Destroy',
      lemma: 'καταργέω',
      transliteration: 'katargeō',
      meaning: 'To render powerless, break the hold of, or bring to nothing.',
      strongs: 'G2673',
      reference: 'Hebrews 2:14',
      note: `When Hebrews says Jesus destroyed the one who had the power of death, it means Christ broke the enemy's hold.

The devil still works through fear, deception, and death, but his final power has been defeated by the risen Christ.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The resurrection changes how we understand death.

Without Jesus, death looks like the final wall.

With Jesus, death becomes a defeated enemy waiting for its final removal.

The Bible still calls death an enemy.

It does not ask us to pretend death is good.

But it also tells us that death has been broken by Christ and will one day be destroyed completely.

That means Christians do not grieve like people without hope.

We still feel loss.
We still cry.
We still hate what death has done.

But we do not bow to death as ultimate.

Jesus has already entered the grave and come out alive.`,
    },
    studyInsightBlocks: powerOfDeathBrokenInsightBlocks,
    reflectPrompt: `Where has the fear of death, loss, or uncertainty shaped the way you live?

Think about anxiety, control, avoidance, hopelessness, grief, or the pressure to hold everything together.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, name one fear that death has attached itself to.

It may sound like:

"What if I lose someone?"
"What if my life does not matter?"
"What if everything ends in pain?"
"What if I am not safe?"

Then bring that fear to Jesus.

Do not pretend it is small.

Place it under the truth of the resurrection.

Say:

"Jesus, You were dead, and You are alive forevermore."

The fear may not vanish instantly.

But it no longer gets to rule unquestioned.

Prayer:

Jesus, thank You for entering death and breaking its power. Thank You that the grave could not hold You and that fear does not have to rule my life. Help me trust Your resurrection more deeply. Free me from bondage, strengthen my hope, and teach me to live in the light of Your victory. Amen.`,
    prayer: '',
    completionSummary: `Jesus broke the power of death and freed humanity from fear. Because He lives forevermore, death is real, but it is no longer final.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'wdd-l5-q1',
          prompt: 'According to Hebrews 2:14, what did Jesus destroy through death?',
          options: [
            'Him that had the power of death, the devil',
            "God's love",
            'The need for faith',
            'The value of human life',
          ],
          correctIndex: 0,
          explanation:
            'Hebrews 2:14 says Jesus destroyed him that had the power of death, that is, the devil.',
        },
        {
          id: 'wdd-l5-q2',
          prompt: 'According to Hebrews 2:15, what were people delivered from?',
          options: [
            'Bondage through fear of death',
            'The promise of resurrection',
            'The love of God',
            'The hope of salvation',
          ],
          correctIndex: 0,
          explanation:
            'Hebrews 2:15 says Jesus delivers those who were held in bondage through fear of death.',
        },
        {
          id: 'wdd-l5-q3',
          prompt: 'According to 2 Timothy 1:10, what did Jesus bring to light through the gospel?',
          options: [
            'Life and immortality',
            'Confusion and fear',
            'Sin and condemnation only',
            'Human pride',
          ],
          correctIndex: 0,
          explanation:
            '2 Timothy 1:10 says Jesus brought life and immortality to light through the gospel.',
        },
        {
          id: 'wdd-l5-q4',
          prompt: 'What does Jesus declare in Revelation 1:18?',
          options: [
            'He lives, was dead, and is alive forevermore',
            'Death defeated Him forever',
            'The grave is stronger than God',
            'Hope is impossible',
          ],
          correctIndex: 0,
          explanation:
            'Revelation 1:18 shows Jesus\' resurrection authority. He was dead, but He is alive forevermore.',
        },
        {
          id: 'wdd-l5-q5',
          kind: 'reflection',
          prompt: 'How can the resurrection of Jesus challenge the fear that death has the final word?',
          explanation:
            'Jesus entered death and rose victorious. Death is still an enemy, but it is a defeated enemy because of Christ.',
        },
      ],
    },
  },
  'victory-secured': {
    openingThought: `The resurrection of Jesus was not only His victory.

It was a promise of ours.

When Jesus rose from the grave, He proved that death does not have the final word over those who belong to Him.

The resurrection is not just something Christians look back on.

It is something we look forward from.

Because Jesus lives, His people will live.

Because Jesus rose, the dead in Christ will rise.

Because death could not hold Him, death will not hold His people forever.

Victory is not wishful thinking.

Victory has already been secured in Christ.`,
    scriptureRef: '1 Corinthians 15:54',
    scriptureQuote: 'Death is swallowed up in victory.',
    scriptureAfterPrimary: `That is stronger than saying death is ignored.

Death is not explained away.

Death is overcome.

Everything death has stolen will be answered by the life and victory of Christ.`,
    scriptureSecondaryRef: '1 Corinthians 15:52',
    scriptureSecondaryQuote:
      'For the trumpet shall sound, and the dead shall be raised incorruptible, and we shall be changed.',
    scriptureAfterSecondary: `Resurrection is not a return to the same broken condition.

God gives life that death cannot decay.

The future hope is lasting restoration.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Revelation 20:6',
        quote:
          'Blessed and holy is he that hath part in the first resurrection: on such the second death hath no power.',
      },
      {
        type: 'scripture',
        reference: 'Revelation 2:11',
        quote: 'He that overcometh shall not be hurt of the second death.',
      },
      {
        type: 'scripture',
        reference: 'John 11:25',
        quote: 'Jesus said unto her, I am the resurrection, and the life.',
      },
    ],
    teachingPoints: [
      `1. Jesus' resurrection guarantees future resurrection

The resurrection of Jesus is not an isolated miracle.

It is the foundation of Christian hope.

Because He rose, His people will rise.

The Bible does not teach vague survival after death as our final hope.

It teaches resurrection.

God will raise the dead, restore life, and complete what Jesus began.`,
      `2. Death will be swallowed up in victory

Paul says death is swallowed up in victory.

Death is not explained away.

Death is overcome.

Everything death has stolen will be answered by the life and victory of Christ.`,
      `3. The redeemed are safe from the second death

Revelation says the second death has no power over those who share in the first resurrection.

Jesus did not only defeat the first death.

He saves His people from the final death.

Those who trust Him are secure in His victory.`,
      `4. Resurrection means complete change

Paul says the dead will be raised incorruptible and we shall be changed.

Resurrection is not a return to the same broken condition.

God gives life that death cannot decay.

The future hope is not temporary repair.

It is lasting restoration.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Victory',
      lemma: 'νίκη',
      transliteration: 'nikē',
      meaning: 'Triumph, conquest, or the final defeat of an enemy.',
      strongs: 'G3529',
      reference: '1 Corinthians 15:54',
      note: `When Scripture says death is swallowed up in victory, it means death is not merely delayed.

It is conquered.

Jesus' resurrection secures the final victory that His people will experience when He raises the dead and makes all things new.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The resurrection changes the way we read the whole story.

Death entered through sin.

Jesus entered death.

Death could not hold Him.

Now His resurrection becomes the guarantee of what is coming.

The first death will be interrupted by resurrection.

The second death has no power over the redeemed.

The grave will not be the final home of God's people.

This is why Christian hope is so concrete.

It is not floating away into uncertainty.

It is Christ returning, the trumpet sounding, the dead being raised, and death being swallowed up in victory.`,
    },
    studyInsightBlocks: victorySecuredInsightBlocks,
    reflectPrompt: `What does it mean to you that Jesus' resurrection is not only His victory, but the promise of your future resurrection?

Think about grief, fear, hope, and the difference between temporary life and lasting restoration.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, let resurrection hope reshape how you see loss.

Loss is real.

Grief is real.

Death is real.

But none of them are final in Christ.

When fear rises, speak this truth:

"Death is swallowed up in victory."

When grief feels heavy, remember:

"The trumpet shall sound, and the dead shall be raised."

When the future feels uncertain, anchor yourself here:

"Jesus is the resurrection and the life."

Hope is not denial.

Hope is confidence in the risen Christ.

Prayer:

Jesus, thank You that Your resurrection secures victory over death. Thank You that the grave is not the final word for those who belong to You. Help me live with resurrection hope. Strengthen my faith when grief or fear feels heavy, and keep my heart anchored in Your promise of life forever. Amen.`,
    prayer: '',
    completionSummary: `Jesus' resurrection secures the future resurrection of His people. Death will be swallowed up in victory, and the second death has no power over those who belong to Christ.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'wdd-l6-q1',
          prompt: 'According to 1 Corinthians 15:54, what is swallowed up in victory?',
          options: ['Death', 'Faith', 'Hope', 'Love'],
          correctIndex: 0,
          explanation:
            'Paul says death is swallowed up in victory, showing that death will be fully overcome through Christ.',
        },
        {
          id: 'wdd-l6-q2',
          prompt: 'According to 1 Corinthians 15:52, what will happen when the trumpet sounds?',
          options: [
            'The dead shall be raised incorruptible',
            'The dead will remain forgotten',
            'Hope will end',
            'Death will become stronger',
          ],
          correctIndex: 0,
          explanation: 'Paul says the trumpet will sound and the dead will be raised incorruptible.',
        },
        {
          id: 'wdd-l6-q3',
          prompt: 'According to Revelation 20:6, what has no power over those in the first resurrection?',
          options: ['The second death', 'Prayer', 'Scripture', "God's love"],
          correctIndex: 0,
          explanation:
            'Revelation 20:6 says the second death has no power over those who have part in the first resurrection.',
        },
        {
          id: 'wdd-l6-q4',
          prompt: 'What does Jesus call Himself in John 11:25?',
          options: [
            'The resurrection and the life',
            'The end of mercy',
            'The closed door',
            'The fear of death',
          ],
          correctIndex: 0,
          explanation:
            'Jesus says, "I am the resurrection, and the life," placing resurrection hope directly in Himself.',
        },
        {
          id: 'wdd-l6-q5',
          kind: 'reflection',
          prompt:
            'How can resurrection hope help you face grief or fear without pretending those things are easy?',
          explanation:
            'Biblical hope does not deny grief. It anchors grief in Christ\'s victory over death.',
        },
      ],
    },
  },
  'live-from-victory': {
    openingThought: `The resurrection is not only something to believe.

It is something to live from.

Jesus defeated death, but many people still live as if fear has the final word. Fear of loss. Fear of judgment. Fear of failure. Fear of being forgotten. Fear that death will undo everything.

But the gospel gives us a better center.

Jesus died.
Jesus rose.
Jesus lives forever.
Jesus holds the future.

Because death has been defeated, believers can live with courage, hope, love, and confidence.

Not because life is easy.

Because Christ is alive.`,
    scriptureRef: 'Romans 8:38',
    scriptureQuote:
      'For I am persuaded, that neither death, nor life, nor angels, nor principalities, nor powers, nor things present, nor things to come, nor height, nor depth, nor any other creature, shall be able to separate us from the love of God, which is in Christ Jesus our Lord.',
    scriptureAfterPrimary: `Death feels like separation.

But for those who belong to Jesus, death cannot break God's hold.

The grave cannot cancel His love.`,
    scriptureSecondaryRef: '1 John 4:19',
    scriptureSecondaryQuote: 'We love him, because he first loved us.',
    scriptureAfterSecondary: `The victory of Jesus is not only about the future.

It reshapes the present.

Because we are loved, we can love.

Because we are secure, we can serve.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'John 11:25-26',
        quote:
          'Jesus said unto her, I am the resurrection, and the life: he that believeth in me, though he were dead, yet shall he live: And whosoever liveth and believeth in me shall never die.',
      },
      {
        type: 'scripture',
        reference: '2 Timothy 1:7',
        quote:
          'For God hath not given us the spirit of fear; but of power, and of love, and of a sound mind.',
      },
    ],
    teachingPoints: [
      `1. Death cannot separate us from God's love

Romans 8 says neither death nor life can separate us from the love of God in Christ.

That is massive.

Death feels like separation.

But for those who belong to Jesus, death cannot break God's hold.

The grave cannot cancel His love.`,
      `2. Victory removes fear's final authority

Fear may still speak, but it no longer gets the final word.

Jesus has already passed through death and come out victorious.

That means believers do not have to live controlled by fear.

We can face life honestly while trusting the risen Christ.`,
      `3. God's love teaches us how to live

1 John says we love because He first loved us.

Because we are loved, we can love.

Because we are secure, we can serve.

Because Christ lives, we can live with open hands instead of clenched fists.`,
      `4. Resurrection hope gives courage now

Jesus said, "I am the resurrection, and the life."

That truth does not only matter at funerals.

It matters in daily life.

When grief feels heavy.
When obedience feels costly.
When the future feels uncertain.
When fear tries to lead.

The risen Christ gives courage for today.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Persuaded',
      lemma: 'πείθω',
      transliteration: 'peithō',
      meaning: 'Fully convinced, settled, or deeply assured.',
      strongs: 'G3982',
      reference: 'Romans 8:38',
      note: `Paul does not say he is guessing that nothing can separate us from God's love.

He says he is persuaded.

Resurrection faith gives deep assurance.

Because Jesus defeated death, believers can become settled in the love of God.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `When Death Died has shown one clear gospel movement:

Jesus entered death.
Jesus carried sin's weight.
Jesus chose the cross.
Jesus broke death's claim.
Jesus shattered death's power.
Jesus secured resurrection victory.
Jesus now invites us to live from that victory.

This does not mean Christians never grieve.

It means grief does not get the throne.

This does not mean Christians never feel fear.

It means fear does not get to become lord.

This does not mean death is harmless.

It means death is defeated.

The risen Jesus changes how we live now.

We can live forgiven.
We can live loved.
We can live free from condemnation.
We can live with resurrection hope.
We can live knowing that death will not have the last word.`,
    },
    studyInsightBlocks: liveFromVictoryInsightBlocks,
    reflectPrompt: `Where do you need to live more from Christ's victory instead of fear?

Think about death, grief, uncertainty, guilt, judgment, relationships, obedience, or the future.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, identify one fear that has been shaping your decisions.

Name it clearly.

Then place it under the victory of Jesus.

Say:

"Jesus is alive, and this fear does not get the final word."

Then take one faithful step.

Not a dramatic step.

A real one.

Pray honestly.
Forgive someone.
Obey what God has shown you.
Stop rehearsing condemnation.
Encourage someone who is grieving.
Return to Scripture when fear gets loud.

Victory is not only something you celebrate later.

It is something you practice now.

Prayer:

Jesus, thank You for defeating death and giving me resurrection hope. Teach me to live from Your victory instead of fear. Help me trust that nothing can separate me from Your love. Give me courage, a sound mind, and a heart shaped by Your love. Let my life show that death does not have the final word. Amen.`,
    prayer: '',
    completionSummary: `You have completed When Death Died. Jesus entered death, carried sin's weight, chose the cross, rose in victory, and secured resurrection hope. Because He lives, death does not get the final word.`,
    seriesCompleteScreen: {
      title: 'Study Complete',
      message:
        'You have completed When Death Died. Jesus entered death, carried sin\'s weight, chose the cross, rose in victory, and secured resurrection hope. Because He lives, death does not get the final word.',
      primaryCta: { label: 'Back to Foundations Path', href: '/paths/foundations' },
      secondaryCta: {
        label: 'Review this study',
        href: '/study-library/when-death-died',
      },
    },
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'wdd-l7-q1',
          prompt: 'According to Romans 8:38-39, what cannot separate us from the love of God in Christ?',
          options: [
            'Neither death nor life',
            'Only small mistakes',
            'Only difficult emotions',
            'Only human opinions',
          ],
          correctIndex: 0,
          explanation:
            'Romans 8 says neither death nor life can separate believers from the love of God in Christ Jesus.',
        },
        {
          id: 'wdd-l7-q2',
          prompt: 'According to 1 John 4:19, why do we love Him?',
          options: [
            'Because He first loved us',
            'Because we earned His love',
            'Because fear saved us',
            'Because death is stronger than God',
          ],
          correctIndex: 0,
          explanation: '1 John 4:19 says we love Him because He first loved us.',
        },
        {
          id: 'wdd-l7-q3',
          prompt: 'What does Jesus call Himself in John 11:25?',
          options: [
            'The resurrection and the life',
            'The fear of death',
            'The final defeat',
            'The closed door',
          ],
          correctIndex: 0,
          explanation:
            'Jesus says He is the resurrection and the life, making Him the center of our hope.',
        },
        {
          id: 'wdd-l7-q4',
          prompt: 'According to 2 Timothy 1:7, what has God not given us?',
          options: [
            'The spirit of fear',
            'Power',
            'Love',
            'A sound mind',
          ],
          correctIndex: 0,
          explanation:
            '2 Timothy 1:7 says God has not given us the spirit of fear, but of power, love, and a sound mind.',
        },
        {
          id: 'wdd-l7-q5',
          kind: 'reflection',
          prompt: 'What would change this week if you lived like death truly does not have the final word?',
          explanation:
            'The victory of Jesus is not only future hope. It reshapes present courage, love, obedience, and trust.',
        },
      ],
    },
  },
}
