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

function millenniumPlaceholderLesson(visualBlocks: LessonContentBlock[]): LessonReaderContent {
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
    studyInsightBlocks: visualBlocks,
    reflectPrompt: PLACEHOLDER_BODY,
    lifeApplication: PLACEHOLDER_BODY,
    prayer: '',
  }
}

/** Placeholder shell lessons for "The Millennium" (Foundations). */
export const theMillenniumSeriesLessonLibrary: Record<string, LessonReaderContent> = {
  'why-the-millennium': {
    openingThought: `The Millennium is one of the most misunderstood teachings in the Bible.

But at its core, it is not about charts for chart people.

It is about God's character.

The Bible teaches that after Jesus returns, there will be a special thousand-year period where the redeemed reign with Christ and participate in judgment.

That raises a real question:

Why?

If God already knows everything, why have a judgment process?

If God is already just, why open the records?

Because God does not govern by secrecy.

He governs by truth.

He does not demand blind trust from His creatures. He reveals enough for intelligent trust.

The Millennium shows that God is so just, so transparent, and so good that He allows the redeemed to examine His judgments and see for themselves that He did everything love could do.`,
    scriptureRef: 'Revelation 20:4',
    scriptureQuote: `And I saw thrones, and they sat upon them, and judgment was given unto them.

And they lived and reigned with Christ a thousand years.`,
    scriptureAfterPrimary: `The redeemed are seated on thrones, given judgment, and reign with Christ for a thousand years.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: '1 Corinthians 6:2-3',
        quote: `Do ye not know that the saints shall judge the world?

Know ye not that we shall judge angels?`,
      },
      {
        type: 'scripture',
        reference: 'Deuteronomy 32:4',
        quote: `He is the Rock, his work is perfect.

For all his ways are judgment.

A God of truth and without iniquity, just and right is he.`,
      },
      {
        type: 'scripture',
        reference: 'Isaiah 5:3-4',
        quote: `And now, O inhabitants of Jerusalem, and men of Judah, judge, I pray you, betwixt me and my vineyard.

What could have been done more to my vineyard, that I have not done in it?`,
      },
      {
        type: 'scripture',
        reference: 'Revelation 15:3',
        quote: `Great and marvellous are thy works, Lord God Almighty.

Just and true are thy ways, thou King of saints.`,
      },
    ],
    teachingPoints: [
      `1. The redeemed are invited into judgment

Revelation says thrones are set, and judgment is given to the redeemed.

That is astonishing.

God does not merely announce conclusions.

He invites His people into the process.

This does not mean the redeemed correct God.

Let's not get cute with it.

It means God allows them to review, understand, and affirm His judgments.

Every question will be answered.

Every case will be seen in the light of truth.`,
      `2. The saints will judge the world and angels

Paul says the saints will judge the world and even angels.

That means the Millennium involves more than personal comfort.

The redeemed will review the great controversy with full clarity.

They will see how God worked.

They will see how people responded.

They will see the destructive reality of rebellion.

They will see that God's judgments are not arbitrary.

They are just, fair, and true.`,
      `3. God voluntarily opens Himself to examination

Isaiah shows God inviting people to judge between Him and His vineyard.

That is wild.

God asks thinking beings to evaluate His actions.

He asks, "What more could I have done?"

This reveals something beautiful about God.

He is not insecure.

He is not hiding.

He is not threatened by honest questions.

He governs by the integrity of His character.`,
      `4. The Millennium protects eternal trust

God will end evil in such a way that it never rises again.

That requires more than force.

If God simply destroyed evil without full disclosure, questions could remain.

But during the Millennium, every question is answered.

The redeemed will see that God was patient.

God was merciful.

God was just.

God did everything love could do.

The universe will be settled in trust.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Judgment',
      lemma: 'κρίσις',
      transliteration: 'krisis',
      meaning: 'The process of discerning what is right, fair, truthful, and just.',
      strongs: 'G2920',
      reference: 'Revelation 20:4',
      note: `In the Millennium, judgment is not about God trying to figure things out.

God already knows.

Judgment is about God opening the record so the redeemed can understand His justice and affirm that His ways are righteous and true.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The Millennium answers the emotional and moral questions that redeemed people may carry.

Why was this person saved?

Why was that person lost?

What opportunities did they have?

What did God do to reach them?

What did they understand?

What did they reject?

What wounds, choices, influences, and responses shaped their story?

God does not silence those questions.

He answers them.

That is the point.

God's justice is not fragile.

His love can handle investigation.

During the Millennium, God seats His redeemed people with Christ and opens the record of history.

The result is not suspicion.

The result is worship.

The redeemed will say:

"Just and true are Your ways."

Not because they were forced to say it.

Because they saw it.`,
    },
    studyInsightBlocks: [
      {
        type: 'millenniumPurposeFlow',
        title: 'Why the Millennium?',
        caption: 'God governs with justice, transparency, and love.',
        stages: [
          {
            label: 'Evil Has Run Its Course',
            description: 'The great controversy has revealed the destructive results of rebellion.',
          },
          {
            label: 'God Opens the Records',
            description: 'The redeemed are invited to review the full story.',
          },
          {
            label: 'Questions Are Answered',
            description: 'Every concern about God\'s justice is addressed.',
          },
          {
            label: 'God\'s Character Is Vindicated',
            description: 'The redeemed see that God\'s judgments are righteous and true.',
          },
          {
            label: 'Evil Never Rises Again',
            description: 'The universe is fully settled in love and trust.',
          },
        ],
      },
      {
        type: 'transparentJudgmentPanel',
        title: 'God\'s Transparent Judgment',
        caption: 'God does not ask for blind trust. He opens the record and reveals the justice of His ways.',
        panels: [
          {
            label: 'Records Opened',
            text: 'God allows the redeemed to review the full story.',
          },
          {
            label: 'Questions Answered',
            text: 'Every case is understood in light of God\'s love and justice.',
          },
          {
            label: 'Judgment Affirmed',
            text: 'The redeemed agree that God\'s ways are just and true.',
          },
        ],
      },
      {
        type: 'scriptureChain',
        title: 'Why the Millennium?',
        references: [
          { reference: 'Revelation 20:4' },
          { reference: '1 Corinthians 6:2-3' },
          { reference: 'Deuteronomy 32:4' },
          { reference: 'Isaiah 5:3-4' },
          { reference: 'Revelation 15:3' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: God provides the Millennium so the redeemed can see the full record of His justice and trust that He did everything love could do.',
      },
    ],
    reflectPrompt: `What question about God's justice, human suffering, or final judgment do you most want answered?

Think honestly about loss, injustice, unanswered prayers, people who rejected God, people who were harmed, and whether you trust that God will handle every case with perfect love and fairness.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, bring one hard question to God without pretending.

Do not sanitize it.

Do not dress it up in religious language.

Just bring it.

Ask:

"God, how were You working here?"

"What do You want me to trust about Your character?"

"Where am I tempted to believe You are unfair?"

"What would it look like to trust that You will reveal what I cannot see yet?"

Then read Deuteronomy 32:4 slowly.

Let this sentence sit with you:

"Just and right is He."

You may not have every answer now.

But the Millennium tells us this:

God is not afraid of the full record being opened.

Prayer:

Father, thank You that You govern with justice, transparency, and love. Help me trust You with the questions I cannot answer yet. Teach me to believe that Your ways are just and true, even when my view is limited. Thank You that one day every question will be answered and every heart will see that You did all love could do. Amen.`,
    prayer: '',
    completionSummary:
      'The Millennium reveals God\'s transparent justice. The redeemed will review the records and see that God\'s ways are righteous, loving, and true.',
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'tm-l1-q1',
          prompt: 'According to Revelation 20:4, what is given to those seated on thrones?',
          options: ['Judgment', 'The mark of the beast', 'Confusion', 'A secret kingdom on earth'],
          correctIndex: 0,
          explanation:
            'Revelation says judgment was given to those seated on thrones, and they lived and reigned with Christ for a thousand years.',
        },
        {
          id: 'tm-l1-q2',
          prompt: 'According to 1 Corinthians 6:2-3, whom will the saints judge?',
          options: ['The world and angels', 'Only themselves', 'No one', 'God\'s law'],
          correctIndex: 0,
          explanation: 'Paul says the saints will judge the world and even angels.',
        },
        {
          id: 'tm-l1-q3',
          prompt: 'According to Deuteronomy 32:4, how are God\'s ways described?',
          options: ['Just and right', 'Confused and unfair', 'Hidden and dishonest', 'Random and unstable'],
          correctIndex: 0,
          explanation: 'Deuteronomy says God is a God of truth, without iniquity, just and right.',
        },
        {
          id: 'tm-l1-q4',
          prompt: 'In Isaiah 5:3-4, what does God invite His people to do?',
          options: [
            'Judge between Him and His vineyard',
            'Ignore His actions',
            'Accuse Him without evidence',
            'Stop thinking about justice',
          ],
          correctIndex: 0,
          explanation:
            'God invites His people to judge between Him and His vineyard, showing His openness and transparency.',
        },
        {
          id: 'tm-l1-q5',
          kind: 'reflection',
          prompt: 'What is one area where you need to trust God\'s justice more deeply?',
          explanation:
            'The Millennium shows that God opens the record, answers every question, and reveals that His judgments are righteous and true.',
        },
      ],
    },
  },
  'the-order-of-events': {
    openingThought: `The Millennium can feel confusing until the order of events is clear.

Once you see the sequence, the doctrine becomes much easier.

The Bible presents the thousand years as a period framed by two resurrections.

Before the Millennium, Jesus returns, the righteous dead are raised, the living faithful are gathered, and the wicked are slain by the brightness of His coming.

During the Millennium, the redeemed reign with Christ, the earth lies desolate, and Satan is bound because he has no one left to deceive.

After the Millennium, the New Jerusalem descends, the wicked are raised, Satan leads one final rebellion, judgment is fully revealed, evil is destroyed, and God makes all things new.

That is the big picture.

No chaos.

No guessing game.

No prophecy fog machine.

The Bible gives a sequence.`,
    scriptureRef: 'Revelation 20:4-6',
    scriptureQuote: `And I saw thrones, and they sat upon them, and judgment was given unto them.

And they lived and reigned with Christ a thousand years.

But the rest of the dead lived not again until the thousand years were finished.

This is the first resurrection.

Blessed and holy is he that hath part in the first resurrection.`,
    scriptureAfterPrimary: `The redeemed reign with Christ for a thousand years, while the rest of the dead do not live again until that period is finished. This is the first resurrection.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Revelation 19:11',
        quote: `And I saw heaven opened, and behold a white horse.

And he that sat upon him was called Faithful and True.`,
      },
      {
        type: 'scripture',
        reference: 'Revelation 19:21',
        quote: 'And the remnant were slain with the sword of him that sat upon the horse.',
      },
      {
        type: 'scripture',
        reference: '1 Thessalonians 4:16-17',
        quote: `And the dead in Christ shall rise first.

Then we which are alive and remain shall be caught up together with them in the clouds, to meet the Lord in the air.`,
      },
      {
        type: 'scripture',
        reference: 'Revelation 20:1-3',
        quote: `And I saw an angel come down from heaven, having the key of the bottomless pit and a great chain in his hand.

And he laid hold on the dragon... and bound him a thousand years.`,
      },
      {
        type: 'scripture',
        reference: 'Revelation 20:7-9',
        quote: `And when the thousand years are expired, Satan shall be loosed out of his prison.

And they went up on the breadth of the earth, and compassed the camp of the saints about, and the beloved city.`,
      },
      {
        type: 'scripture',
        reference: 'Revelation 21:1-2',
        quote: `And I saw a new heaven and a new earth.

And I John saw the holy city, new Jerusalem, coming down from God out of heaven.`,
      },
    ],
    teachingPoints: [
      `1. The Millennium begins after the Second Coming

The Millennium does not begin with the world gradually getting better.

It begins after the visible, glorious return of Jesus.

At the Second Coming, the righteous dead are raised, the living faithful are caught up to meet the Lord, and the wicked are slain by the brightness of His coming.

That means the Millennium begins with a major shift in human history.

The redeemed are with Christ.

The rebellious are dead.

The earth is left desolate.`,
      `2. The first resurrection is the resurrection of life

Revelation says those who have part in the first resurrection are blessed and holy.

This resurrection takes place at the return of Jesus.

Paul says the dead in Christ rise first.

This is the resurrection of the righteous.

Those who belong to Christ are raised to life and reign with Him during the thousand years.`,
      `3. During the Millennium, Satan is bound and the redeemed reign with Christ

Revelation says Satan is bound for a thousand years so that he can deceive the nations no more.

Why can he not deceive the nations?

Because the wicked are dead, the righteous are with Christ, and the earth is desolate.

Satan is bound by circumstances.

At the same time, the redeemed reign with Christ and participate in judgment.

God opens the record.

The redeemed review His justice.`,
      `4. After the Millennium, the second resurrection occurs

Revelation says the rest of the dead do not live again until the thousand years are finished.

That means there is another resurrection after the Millennium.

Jesus described two resurrections: the resurrection of life and the resurrection of condemnation.

After the thousand years, the wicked are raised, Satan is released, and the final rebellion reveals that sin has not changed.`,
      `5. The Millennium ends with final judgment and a new earth

After the final rebellion, judgment is carried out.

Sin, Satan, death, and rebellion are destroyed.

Then God makes all things new.

The story does not end with destruction.

It ends with restoration.

The Millennium leads to a universe where evil has been fully exposed, fully judged, and finally removed forever.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Millennium',
      lemma: 'χίλιοι',
      transliteration: 'chilioi',
      meaning: 'A period of one thousand years.',
      strongs: 'G5507',
      reference: 'Revelation 20:4',
      note: `In Revelation 20, the Millennium is the thousand-year period between the first resurrection of the righteous and the second resurrection of the wicked.

During this time, the redeemed reign with Christ and review God's judgments.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The order of events matters because it protects the meaning of the Millennium.

If the wicked are alive on earth during the Millennium, Satan could still deceive them.

If the redeemed are still scattered on earth during the Millennium, the judgment scene loses its force.

If the first and second resurrections are blurred together, Revelation 20 becomes muddy.

But the text gives a clean sequence:

Jesus returns.

The righteous are raised.

The redeemed are taken to be with Christ.

The wicked are slain.

Satan is bound on a desolate earth.

The redeemed reign with Christ for a thousand years.

The wicked are raised after the thousand years.

Satan leads one final rebellion.

Judgment is executed.

Evil is destroyed.

God makes all things new.

The Millennium is not filler time.

It is God's transparent judgment process before the final end of evil.`,
    },
    studyInsightBlocks: [
      {
        type: 'millenniumEventChart',
        title: 'The Millennium: 1000 Years',
        caption:
          'The Millennium is framed by two resurrections and reveals God\'s transparent justice before evil is finally ended.',
      },
      {
        type: 'twoResurrectionsComparison',
        title: 'The Two Resurrections',
        caption: 'The Millennium is framed by two resurrections with two very different outcomes.',
      },
      {
        type: 'scriptureChain',
        title: 'The Order of Events',
        references: [
          { reference: 'Revelation 19:11-21' },
          { reference: 'Revelation 20:1-6' },
          { reference: 'Revelation 20:7-15' },
          { reference: 'Revelation 21:1-5' },
          { reference: '1 Thessalonians 4:13-18' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: The Bible gives a clear sequence of events before, during, and after the thousand years.',
      },
    ],
    reflectPrompt: `How does seeing the order of events help you understand God's justice more clearly?

Think about the two resurrections, the redeemed reviewing judgment, Satan being bound, the final end of evil, and the new earth.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, memorize the basic sequence of the Millennium.

Say it simply:

Jesus returns.

The righteous are raised.

The redeemed reign with Christ.

Satan is bound.

The wicked are raised after the thousand years.

Final judgment occurs.

Evil ends.

God makes all things new.

Then ask:

"What does this sequence reveal about God?"

It reveals that God is orderly.

Transparent.

Patient.

Just.

Loving.

He does not rush the universe past unanswered questions.

He brings everything into the light before evil is finally ended.

Prayer:

Father, thank You for revealing the order of events surrounding the Millennium. Help me understand Your Word clearly and trust Your justice deeply. Thank You that You do not govern by confusion or secrecy, but by truth, transparency, and love. Teach me to rest in the confidence that You will end evil in the right way and make all things new. Amen.`,
    prayer: '',
    completionSummary:
      'The Millennium is framed by two resurrections. Before, during, and after the thousand years, God reveals His justice, answers every question, ends evil, and makes all things new.',
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'tm-l2-q1',
          prompt: 'According to Revelation 20:4, how long do the redeemed live and reign with Christ?',
          options: ['A thousand years', 'Seven days', 'Forty-two months', 'Ten generations'],
          correctIndex: 0,
          explanation: 'Revelation says the redeemed live and reign with Christ for a thousand years.',
        },
        {
          id: 'tm-l2-q2',
          prompt: 'According to Revelation 20:5, when do the rest of the dead live again?',
          options: [
            'After the thousand years are finished',
            'Before Jesus returns',
            'At creation',
            'Never in any sense',
          ],
          correctIndex: 0,
          explanation:
            'Revelation says the rest of the dead do not live again until the thousand years are finished.',
        },
        {
          id: 'tm-l2-q3',
          prompt: 'According to 1 Thessalonians 4:16, who rises at the return of Jesus?',
          options: ['The dead in Christ', 'Satan', 'The beast system', 'Babylon'],
          correctIndex: 0,
          explanation: 'Paul says the dead in Christ rise first when Jesus returns.',
        },
        {
          id: 'tm-l2-q4',
          prompt: 'According to Revelation 20:1-3, why is Satan bound?',
          options: [
            'So that he should deceive the nations no more during the thousand years',
            'So he can rule the new earth',
            'So he can forgive sin',
            'So the righteous can worship him',
          ],
          correctIndex: 0,
          explanation:
            'Revelation says Satan is bound so that he should deceive the nations no more until the thousand years are finished.',
        },
        {
          id: 'tm-l2-q5',
          kind: 'reflection',
          prompt: 'What part of the Millennium sequence gives you the most confidence in God\'s justice?',
          explanation:
            'The order of events shows that God brings evil to an end with clarity, transparency, judgment, and final restoration.',
        },
      ],
    },
  },
  'satan-in-chains': {
    openingThought: `Revelation says Satan will be bound with a great chain during the Millennium.

That sounds dramatic.

But the Bible is using symbolic language to describe a real condition.

Satan is not bound because God needs better hardware.

The chain is not the point.

The condition is the point.

During the Millennium, the righteous are with Christ, the wicked are dead, and the earth lies desolate.

Satan has no one left to deceive.

That is his "chain."

For thousands of years, he has deceived, tempted, accused, manipulated, and destroyed.

During the Millennium, he is forced to sit in the ruins of what his rebellion produced.

No throne.

No nations.

No worship.

No audience.

Just the devastating evidence of what sin does when separated from the life and love of God.`,
    scriptureRef: 'Revelation 20:1-3',
    scriptureQuote: `And I saw an angel come down from heaven, having the key of the bottomless pit and a great chain in his hand.

And he laid hold on the dragon, that old serpent, which is the Devil, and Satan, and bound him a thousand years.

And cast him into the bottomless pit, and shut him up, and set a seal upon him.

That he should deceive the nations no more, till the thousand years should be fulfilled.`,
    scriptureAfterPrimary: `Satan is bound for a thousand years so that he should deceive the nations no more. He is cast into the bottomless pit, shut up, and sealed until the thousand years are fulfilled.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Revelation 12:9',
        quote: `And the great dragon was cast out, that old serpent, called the Devil, and Satan, which deceiveth the whole world.`,
      },
      {
        type: 'scripture',
        reference: 'Jeremiah 4:23-26',
        quote: `I beheld the earth, and, lo, it was without form, and void.

I beheld, and, lo, there was no man.

And all the cities thereof were broken down at the presence of the LORD, and by his fierce anger.`,
      },
      {
        type: 'scripture',
        reference: 'Isaiah 14:15-17',
        quote: `Yet thou shalt be brought down to hell, to the sides of the pit.

They that see thee shall narrowly look upon thee, and consider thee.

Is this the man that made the earth to tremble, that did shake kingdoms?`,
      },
      {
        type: 'scripture',
        reference: 'Leviticus 16:21-22',
        quote: `And Aaron shall lay both his hands upon the head of the live goat.

And the goat shall bear upon him all their iniquities unto a land not inhabited.`,
      },
    ],
    teachingPoints: [
      `1. Satan is bound so he cannot deceive

Revelation gives the reason for Satan's binding:

"That he should deceive the nations no more."

That tells us what the chain accomplishes.

It stops his work of deception.

Throughout history, Satan has worked through lies, false worship, accusation, pride, coercion, and rebellion.

During the Millennium, that work is interrupted.

He has no nations to deceive.

The righteous are with Christ.

The wicked are dead.

The earth is empty.

His influence is suspended by circumstances.`,
      `2. The earth lies desolate

Jeremiah describes the earth as without form and void, with no man and broken cities.

This language helps us picture the condition of the earth after the Second Coming.

The earth is not filled with thriving nations during the Millennium.

It is desolate.

Ruined.

Empty.

This is the "bottomless pit" condition Revelation describes.

The stage where Satan once ran his rebellion becomes a prison of consequences.`,
      `3. Satan faces the results of his rebellion

Isaiah pictures the downfall of the one who shook kingdoms and made the world a wilderness.

During the Millennium, Satan is confronted with the wreckage of his own principles.

Self-exaltation has produced ruin.

Deception has produced death.

Rebellion has produced emptiness.

Sin promised freedom but created a wasteland.

That is the real exposure.

Satan's government is shown for what it is.`,
      `4. The scapegoat imagery points to Satan's responsibility

In the Day of Atonement service, after atonement was completed, the scapegoat was sent into a land not inhabited.

This symbol points to Satan bearing responsibility as the originator and instigator of sin.

Jesus bears our guilt as Savior.

Satan bears responsibility as destroyer.

Do not mix those up.

Christ saves sinners.

Satan originated sin and led others into ruin.

The Millennium exposes where evil truly belongs.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Bound',
      lemma: 'δέω',
      transliteration: 'deo',
      meaning: 'Restricted, confined, or prevented from continuing a specific work.',
      strongs: 'G1210',
      reference: 'Revelation 20:2',
      note: `Satan is bound during the Millennium because he has no one left to deceive.

His chain is a chain of circumstances: the righteous are with Christ, the wicked are dead, and the earth lies desolate.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `Satan's binding is one of the clearest pictures of divine justice.

God does not merely declare Satan wrong.

He lets the universe see the outcome of Satan's way.

For thousands of years Satan has accused God, deceived humanity, and presented rebellion as freedom.

But during the Millennium, the results are visible.

The earth is ruined.

The nations are gone.

The wicked are dead.

The redeemed are with Christ.

Satan stands exposed as the one whose principles destroy life.

This is not God being petty.

This is God being transparent.

The Millennium reveals that sin does not create liberty.

It creates desolation.

Satan is bound in the world his rebellion helped make.

That is rough, but it is righteous.`,
    },
    studyInsightBlocks: [
      {
        type: 'satanBoundExplainer',
        title: 'Satan Bound During the Millennium',
        caption: 'Satan is bound by a chain of events that removes his power to deceive.',
      },
      {
        type: 'scriptureChain',
        title: 'Satan in Chains',
        references: [
          { reference: 'Revelation 20:1-3' },
          { reference: 'Isaiah 14:12-17' },
          { reference: 'Jeremiah 4:23-26' },
          { reference: 'Leviticus 16:20-22' },
          { reference: 'Revelation 12:9' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: Satan is bound during the Millennium because he has no one left to deceive on the desolate earth.',
      },
    ],
    reflectPrompt: `What does Satan's binding reveal about the real outcome of sin and rebellion?

Think about deception, pride, self-exaltation, destruction, the desolate earth, and the contrast between God's life-giving love and Satan's death-producing rebellion.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, pay attention to the promises sin makes versus the outcomes sin produces.

Ask:

"What did this temptation promise me?"

"What did it actually produce?"

"Where has pride left damage?"

"Where has self-exaltation made things worse?"

"Where do I need to stop believing Satan's marketing?"

Sin always overpromises and underdelivers.

Actually, worse: it invoices you later with interest.

Choose one area where God is calling you out of deception and into truth.

Confess it honestly.

Renounce the lie.

Ask Jesus to replace it with His Spirit and His Word.

Prayer:

Father, open my eyes to the destructive reality of sin. Help me stop believing Satan's lies and see the true outcome of rebellion. Thank You that Jesus saves, heals, and restores. Keep me close to Christ and teach me to love Your truth. May my life reveal confidence in Your character instead of cooperation with the enemy's deception. Amen.`,
    prayer: '',
    completionSummary:
      'Satan is bound during the Millennium because he has no one left to deceive. On the desolate earth, his rebellion is exposed for what it truly produces.',
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'tm-l3-q1',
          prompt: 'According to Revelation 20:3, why is Satan bound during the thousand years?',
          options: [
            'So that he should deceive the nations no more',
            'So that he can rule the new earth',
            'So that he can forgive sin',
            'So that he can become righteous',
          ],
          correctIndex: 0,
          explanation:
            'Revelation says Satan is bound so that he should deceive the nations no more until the thousand years are fulfilled.',
        },
        {
          id: 'tm-l3-q2',
          prompt: 'According to Jeremiah 4:23-26, what condition is the earth pictured in?',
          options: [
            'Desolate, empty, and broken down',
            'Fully populated and peaceful',
            'Already made new',
            'Filled with thriving nations',
          ],
          correctIndex: 0,
          explanation:
            'Jeremiah describes the earth as without form and void, with no man, and its cities broken down.',
        },
        {
          id: 'tm-l3-q3',
          prompt: 'According to Revelation 12:9, what does Satan do to the world?',
          options: [
            'Deceives the whole world',
            'Creates the new earth',
            'Saves sinners',
            'Raises the righteous',
          ],
          correctIndex: 0,
          explanation: 'Revelation identifies Satan as the one who deceives the whole world.',
        },
        {
          id: 'tm-l3-q4',
          prompt: 'In the Day of Atonement imagery, where was the scapegoat sent?',
          options: [
            'Into a land not inhabited',
            'Into the Most Holy Place',
            'Into the New Jerusalem',
            'Into the throne room of heaven',
          ],
          correctIndex: 0,
          explanation:
            'Leviticus says the scapegoat was sent into a land not inhabited, symbolizing the final removal of sin and Satan\'s responsibility as its instigator.',
        },
        {
          id: 'tm-l3-q5',
          kind: 'reflection',
          prompt: 'What is one lie of the enemy that God is asking you to stop believing?',
          explanation:
            'The Millennium exposes Satan\'s deception and shows that rebellion leads to ruin, while God\'s way leads to life.',
        },
      ],
    },
  },
  'the-redeemed-review-the-records': {
    openingThought: `During the Millennium, God does something astonishing.

He opens the records.

Not because He forgot anything.

Not because He needs help making decisions.

Not because the redeemed are smarter than God.

Let's not get wild.

God opens the records because love does not govern through secrecy.

The redeemed will review the history of the great controversy and see how God worked in every case.

Every question will be answered.

Every hidden motive will be brought into the light.

Every opportunity, every rejection, every act of mercy, every decision, every wound, and every response will be seen in the full context of truth.

The Millennium shows that God's judgment is not arbitrary.

It is transparent.`,
    scriptureRef: 'Revelation 20:4',
    scriptureQuote: `And I saw thrones, and they sat upon them, and judgment was given unto them.

And they lived and reigned with Christ a thousand years.`,
    scriptureAfterPrimary: `Judgment is given to those seated on thrones, and they live and reign with Christ for a thousand years.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: '1 Corinthians 6:2-3',
        quote: `Do ye not know that the saints shall judge the world?

And if the world shall be judged by you, are ye unworthy to judge the smallest matters?

Know ye not that we shall judge angels?`,
      },
      {
        type: 'scripture',
        reference: 'Daniel 7:9-10',
        quote: `I beheld till the thrones were cast down, and the Ancient of days did sit.

The judgment was set, and the books were opened.`,
      },
      {
        type: 'scripture',
        reference: 'Psalm 89:14',
        quote: `Justice and judgment are the habitation of thy throne.

Mercy and truth shall go before thy face.`,
      },
      {
        type: 'scripture',
        reference: 'Revelation 15:3-4',
        quote: `Great and marvellous are thy works, Lord God Almighty.

Just and true are thy ways, thou King of saints.

For thy judgments are made manifest.`,
      },
    ],
    teachingPoints: [
      `1. Judgment is given to the redeemed

Revelation says judgment is given to those seated on thrones.

That means the redeemed are brought into a process of review and discernment.

They are not deciding whether God was right from a place of superiority.

They are being shown why God was right.

God allows them to understand His judgments so fully that their trust becomes settled forever.`,
      `2. The books are opened

Daniel describes a judgment scene where the books are opened.

The "books" symbolize the records of life, choices, opportunities, motives, and responses.

God does not need books to remember.

The books are for created beings.

They show that God's judgments are based on truth, evidence, and full knowledge.

No one is saved by accident.

No one is lost by mistake.`,
      `3. The saints will judge the world and angels

Paul says the saints will judge the world and angels.

This points to the redeemed reviewing both human history and the rebellion of fallen angels.

During the Millennium, God answers the questions that love naturally asks.

Why was this person saved?

Why was that person lost?

What happened in the unseen parts of the story?

How did God work when no one else saw it?

The record will show that God's mercy was real and His justice was clean.`,
      `4. God's throne is built on justice and mercy

Psalm 89 says justice and judgment are the foundation of God's throne, and mercy and truth go before His face.

That balance matters.

God is not merciful at the expense of justice.

He is not just at the expense of mercy.

His character holds both perfectly.

The Millennium allows the redeemed to see that every judgment flows from God's good character of love.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Records',
      lemma: 'βιβλίον',
      transliteration: 'biblion',
      meaning:
        'The full account of history, choices, motives, opportunities, responses, and God\'s work in every life.',
      strongs: 'G976',
      reference: 'Daniel 7:10',
      note: `The records are opened during the Millennium so the redeemed can see God's justice clearly.

God does not ask for blind trust. He reveals the truth so every question can be answered.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The redeemed reviewing the records is one of the most beautiful truths about God's government.

God is not hiding anything.

He is not saying, "Trust Me, but do not ask questions."

He is saying, "Look. Understand. See for yourself."

That is not weakness.

That is moral confidence.

Tyrants hide records.

God opens them.

Tyrants silence questions.

God answers them.

Tyrants rule by fear.

God governs by truth, mercy, justice, and love.

During the Millennium, the redeemed will see every case in the full light of God's character.

And when the review is complete, they will not accuse God.

They will worship.

"Just and true are Your ways."`,
    },
    studyInsightBlocks: [
      {
        type: 'transparentJudgmentPanel',
        title: 'God\'s Transparent Judgment',
        caption: 'God does not ask for blind trust. He opens the record and reveals the justice of His ways.',
      },
      {
        type: 'millenniumPurposeFlow',
        title: 'Why the Millennium?',
        caption: 'God governs with justice, transparency, and love.',
      },
      {
        type: 'scriptureChain',
        title: 'The Redeemed Review the Records',
        references: [
          { reference: 'Revelation 20:4' },
          { reference: '1 Corinthians 6:2-3' },
          { reference: 'Daniel 7:9-10' },
          { reference: 'Psalm 89:14' },
          { reference: 'Revelation 15:3-4' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: God invites the redeemed into the judgment process so every question about His justice can be answered.',
      },
    ],
    reflectPrompt: `What does it tell you about God that He is willing to open the records and answer every question?

Think about trust, justice, hidden pain, unanswered questions, people you love, people who rejected God, and whether God's transparency helps you see His character more clearly.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, practice trusting God with unanswered questions without pretending they do not exist.

Write down one question you have about God's justice.

Then write this beneath it:

"God is not afraid of the full record."

Read Revelation 15:3-4 slowly.

Ask:

"What would change if I believed God's ways are just and true?"

"Where am I judging God with incomplete information?"

"Where do I need to wait for the full record?"

Do not fake peace.

Bring the question to God.

Then choose trust while you wait.

Prayer:

Father, thank You that You govern with transparency and love. Thank You that You will open the records and answer every question. Help me trust You where I do not yet understand. Keep me from judging Your character by incomplete information. Settle my heart in the truth that Your ways are just and true. Amen.`,
    prayer: '',
    completionSummary:
      'During the Millennium, the redeemed review the records and see that God\'s judgments are transparent, merciful, just, and true.',
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'tm-l4-q1',
          prompt: 'According to Revelation 20:4, what was given to those seated on thrones?',
          options: ['Judgment', 'Confusion', 'The mark of the beast', 'Babylon\'s wine'],
          correctIndex: 0,
          explanation:
            'Revelation says judgment was given to those seated on thrones, and they lived and reigned with Christ for a thousand years.',
        },
        {
          id: 'tm-l4-q2',
          prompt: 'According to Daniel 7:10, what was opened in the judgment scene?',
          options: ['The books', 'The sea', 'The beast\'s image', 'The gates of Babylon'],
          correctIndex: 0,
          explanation: 'Daniel says the judgment was set and the books were opened.',
        },
        {
          id: 'tm-l4-q3',
          prompt: 'According to 1 Corinthians 6:2-3, whom will the saints judge?',
          options: ['The world and angels', 'Only themselves', 'No one', 'God\'s law'],
          correctIndex: 0,
          explanation: 'Paul says the saints will judge the world and even angels.',
        },
        {
          id: 'tm-l4-q4',
          prompt: 'According to Psalm 89:14, what are the foundation of God\'s throne?',
          options: [
            'Justice and judgment',
            'Fear and confusion',
            'Secrecy and force',
            'Pride and control',
          ],
          correctIndex: 0,
          explanation:
            'Psalm 89 says justice and judgment are the habitation or foundation of God\'s throne.',
        },
        {
          id: 'tm-l4-q5',
          kind: 'reflection',
          prompt: 'What unanswered question do you most need to entrust to God\'s transparent judgment?',
          explanation:
            'During the Millennium, God opens the records so the redeemed can understand His justice and affirm that His ways are righteous and true.',
        },
      ],
    },
  },
  'the-second-resurrection': {
    openingThought: `Revelation says there are two resurrections.

The first resurrection happens at the return of Jesus.

That is the resurrection of the righteous.

The second resurrection happens after the thousand years.

That is the resurrection of the wicked.

This second resurrection is serious because it reveals something painful but necessary:

Even after a thousand years, evil has not changed.

Satan is released, the wicked are raised, and rebellion rises again.

Not because God failed to love.

Not because God withheld evidence.

Not because people needed one more chance.

The second resurrection shows that sin, when fully settled in the heart, still chooses rebellion even when the truth is undeniable.

That is why God must bring evil to a final end.`,
    scriptureRef: 'Revelation 20:5',
    scriptureQuote: `But the rest of the dead lived not again until the thousand years were finished.

This is the first resurrection.`,
    scriptureAfterPrimary: `The rest of the dead do not live again until the thousand years are finished. Revelation distinguishes this from the first resurrection of the righteous.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Revelation 20:6',
        quote: `Blessed and holy is he that hath part in the first resurrection.

On such the second death hath no power.`,
      },
      {
        type: 'scripture',
        reference: 'Revelation 20:7-8',
        quote: `And when the thousand years are expired, Satan shall be loosed out of his prison.

And shall go out to deceive the nations which are in the four quarters of the earth.`,
      },
      {
        type: 'scripture',
        reference: 'Revelation 20:9',
        quote: `And they went up on the breadth of the earth, and compassed the camp of the saints about, and the beloved city.`,
      },
      {
        type: 'scripture',
        reference: 'John 5:28-29',
        quote: `The hour is coming, in the which all that are in the graves shall hear his voice.

And shall come forth; they that have done good, unto the resurrection of life.

And they that have done evil, unto the resurrection of damnation.`,
      },
      {
        type: 'scripture',
        reference: 'Isaiah 14:15-17',
        quote: `Yet thou shalt be brought down to hell, to the sides of the pit.

They that see thee shall narrowly look upon thee, and consider thee.

Is this the man that made the earth to tremble, that did shake kingdoms?`,
      },
      {
        type: 'scripture',
        reference: 'Romans 14:11',
        quote: `For it is written, As I live, saith the Lord, every knee shall bow to me.

And every tongue shall confess to God.`,
      },
    ],
    teachingPoints: [
      `1. The second resurrection happens after the Millennium

Revelation says the rest of the dead do not live again until the thousand years are finished.

That means the wicked are not alive during the Millennium.

They are raised after it.

This gives the Bible's timeline clarity.

The righteous are raised at the Second Coming.

The wicked are raised after the thousand years.

Two resurrections.

Two outcomes.

One God whose judgment is fully transparent.`,
      `2. The second resurrection reveals the settled nature of rebellion

After the thousand years, Satan is released and goes out to deceive the nations again.

That is revealing.

He has seen the results of sin.

He has had a thousand years to behold the ruin his rebellion caused.

Yet he still chooses deception.

The wicked also join him in surrounding the beloved city.

This shows that their hearts have not been transformed.

They are not misunderstood rebels who simply needed better information.

They are still hostile to God's government of love.`,
      `3. The final rebellion exposes evil before the universe

The wicked surround the New Jerusalem.

This final act exposes the spirit of rebellion completely.

Even with the full record opened, even with God's justice revealed, even with the holy city before them, evil still tries to take what God gives only through grace.

This final rebellion removes every doubt.

Sin is not safe.

Sin is not misunderstood freedom.

Sin is war against love.`,
      `4. Every knee will bow

Romans says every knee will bow and every tongue will confess to God.

This does not mean everyone is converted at the end.

It means everyone will acknowledge the truth.

God's justice will be seen.

His character will be vindicated.

The lost will recognize that His ways were right.

Even rebellion itself will be forced to admit that God was just.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Resurrection',
      lemma: 'ἀνάστασις',
      transliteration: 'anastasis',
      meaning: 'The act of being raised from death to life by the power of God.',
      strongs: 'G386',
      reference: 'John 5:29',
      note: `The Bible teaches two final resurrections.

The first resurrection is the resurrection of life at Christ's return.

The second resurrection is the resurrection of condemnation after the Millennium, revealing the final settled choice of rebellion.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The second resurrection answers a hard question:

Why does God finally destroy evil?

Because evil will not repent.

The final rebellion after the Millennium shows that sin is not just a lack of information.

It is a settled rejection of God's love, truth, and authority.

During the Millennium, the redeemed reviewed the records.

God's justice was transparent.

Every question was answered.

But when the wicked are raised, Satan deceives again, and they move against the beloved city.

That final act shows the universe that rebellion has not changed.

God is not ending evil because He is impatient.

He is ending evil because it is irreversibly destructive.

If allowed to continue, it would keep producing death, fear, coercion, pride, suffering, and separation.

God's final judgment is not emotional overreaction.

It is moral necessity.`,
    },
    studyInsightBlocks: [
      {
        type: 'twoResurrectionsComparison',
        title: 'The Two Resurrections',
        caption: 'The Millennium is framed by two resurrections with two very different outcomes.',
      },
      {
        type: 'endOfEvilFlow',
        title: 'The Final End of Evil',
        caption: 'God ends evil in a way that reveals His justice and secures the universe in love.',
      },
      {
        type: 'scriptureChain',
        title: 'The Second Resurrection',
        references: [
          { reference: 'Revelation 20:5-9' },
          { reference: 'John 5:28-29' },
          { reference: 'Isaiah 14:15-17' },
          { reference: 'Revelation 20:7-8' },
          { reference: 'Romans 14:11' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: After the Millennium, the wicked are raised, Satan is released, and the final rebellion exposes that evil has not changed.',
      },
    ],
    reflectPrompt: `What does the final rebellion after the Millennium reveal about the danger of a heart settled against God?

Think about stubbornness, deception, pride, resistance to truth, the difference between information and conversion, and why God must finally end evil.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, ask God to show you where your heart resists correction.

Do not wait for rebellion to become loud before you surrender it.

Ask:

"Where am I resisting truth?"

"Where am I defending sin instead of confessing it?"

"Where am I choosing pride over repentance?"

"Where do I have information but not transformation?"

"Where do I need Jesus to soften my heart?"

Then respond quickly.

Confess.

Repent.

Apologize.

Obey.

Release the argument.

The second resurrection shows that a hardened heart does not become safe with more time.

It becomes more settled.

Do not play games with conviction.

Prayer:

Father, soften my heart before You. Keep me from stubbornness, pride, and settled rebellion. When You bring truth to my conscience, help me respond with humility. Teach me not only to know what is right, but to love what is right. Thank You for being patient, just, and merciful. Keep me surrendered to Jesus. Amen.`,
    prayer: '',
    completionSummary:
      'After the Millennium, the wicked are raised and Satan leads one final rebellion. This exposes that evil has not changed and shows why God must bring sin to a final end.',
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'tm-l5-q1',
          prompt: 'According to Revelation 20:5, when do the rest of the dead live again?',
          options: [
            'After the thousand years are finished',
            'Before the Second Coming',
            'During creation week',
            'Before the first resurrection',
          ],
          correctIndex: 0,
          explanation:
            'Revelation says the rest of the dead do not live again until the thousand years are finished.',
        },
        {
          id: 'tm-l5-q2',
          prompt: 'According to Revelation 20:7-8, what does Satan do after the thousand years?',
          options: [
            'Goes out to deceive the nations again',
            'Repents and surrenders',
            'Creates the new earth',
            'Raises the righteous',
          ],
          correctIndex: 0,
          explanation:
            'After the thousand years, Satan is released and goes out to deceive the nations again.',
        },
        {
          id: 'tm-l5-q3',
          prompt: 'According to Revelation 20:9, what do the wicked surround?',
          options: [
            'The camp of the saints and the beloved city',
            'The old tower of Babel',
            'The throne of the beast',
            'The wilderness only',
          ],
          correctIndex: 0,
          explanation:
            'Revelation says the wicked surround the camp of the saints and the beloved city.',
        },
        {
          id: 'tm-l5-q4',
          prompt: 'According to John 5:28-29, what two resurrections does Jesus describe?',
          options: [
            'The resurrection of life and the resurrection of condemnation',
            'The resurrection of angels and animals',
            'The resurrection of Babylon and Rome',
            'The resurrection of secret symbols',
          ],
          correctIndex: 0,
          explanation: 'Jesus describes a resurrection of life and a resurrection of condemnation.',
        },
        {
          id: 'tm-l5-q5',
          kind: 'reflection',
          prompt: 'Where do you need to respond to God\'s correction before your heart becomes more resistant?',
          explanation:
            'The second resurrection and final rebellion show that evil does not become safe over time. God calls us to surrender while grace is still calling.',
        },
      ],
    },
  },
  'the-final-end-of-evil': {
    openingThought: `The Bible does not teach that evil lasts forever.

That matters.

Sin had a beginning.

Sin will have an end.

Satan had a beginning in rebellion.

Satan will have an end in judgment.

Death entered through sin.

Death will be destroyed.

God does not preserve evil forever in some dark corner of the universe.

He brings it to a complete and final end.

The final destruction of evil is serious, but it is not God losing His temper.

It is God ending the thing that has destroyed His creation.

It is justice.

It is mercy.

It is the final surgery that removes sin forever so the universe can be safe in love.`,
    scriptureRef: 'Revelation 20:9',
    scriptureQuote: `And they went up on the breadth of the earth, and compassed the camp of the saints about, and the beloved city.

And fire came down from God out of heaven, and devoured them.`,
    scriptureAfterPrimary: `After the wicked surround the beloved city, fire comes down from God out of heaven and devours them.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Revelation 20:10',
        quote: 'And the devil that deceived them was cast into the lake of fire and brimstone.',
      },
      {
        type: 'scripture',
        reference: 'Revelation 20:14-15',
        quote: `And death and hell were cast into the lake of fire.

This is the second death.`,
      },
      {
        type: 'scripture',
        reference: 'Malachi 4:1',
        quote: `For, behold, the day cometh, that shall burn as an oven.

And all the proud, yea, and all that do wickedly, shall be stubble.`,
      },
      {
        type: 'scripture',
        reference: 'Malachi 4:3',
        quote: 'And ye shall tread down the wicked; for they shall be ashes under the soles of your feet.',
      },
      {
        type: 'scripture',
        reference: 'Ezekiel 28:18-19',
        quote: `Therefore will I bring forth a fire from the midst of thee, it shall devour thee.

And never shalt thou be any more.`,
      },
      {
        type: 'scripture',
        reference: '2 Peter 3:10',
        quote: `The elements shall melt with fervent heat.

The earth also and the works that are therein shall be burned up.`,
      },
      {
        type: 'scripture',
        reference: '2 Peter 3:13',
        quote: 'Nevertheless we, according to his promise, look for new heavens and a new earth, wherein dwelleth righteousness.',
      },
      {
        type: 'scripture',
        reference: 'Nahum 1:9',
        quote: 'Affliction shall not rise up the second time.',
      },
    ],
    teachingPoints: [
      `1. Evil ends after the final rebellion is exposed

After the thousand years, Satan gathers the wicked in one last attempt against the beloved city.

This final rebellion reveals the settled character of sin.

Even after the records are reviewed.

Even after God's justice is clear.

Even after the truth is undeniable.

Rebellion still tries to fight against God.

That final act shows the universe that evil cannot be rehabilitated while it remains committed to itself.

It must end.`,
      `2. The lake of fire is the second death

Revelation says the lake of fire is the second death.

That phrase matters.

The final punishment is not eternal life in torment.

It is death.

The first death is temporary because resurrection follows.

The second death is final because there is no resurrection afterward.

God destroys sin, Satan, death, and rebellion completely.`,
      `3. Satan will be no more

Ezekiel says the covering cherub who became proud and corrupt will be devoured and "never shalt thou be any more."

That is direct.

Satan is not preserved forever as an eternal rival to God.

He is not locked away to keep evil alive forever.

He is brought to an end.

The great controversy closes because the enemy and his rebellion are destroyed.`,
      `4. God destroys evil to make room for righteousness

Second Peter says the earth will be burned, but then points to new heavens and a new earth where righteousness dwells.

The fire is not the final word.

Restoration is.

God's goal is not destruction for destruction's sake.

God removes evil so He can restore creation.

The end of evil clears the way for a world where love, freedom, joy, and righteousness are no longer threatened.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Second Death',
      lemma: 'θάνατος δεύτερος',
      transliteration: 'thanatos deuteros',
      meaning: 'The final, irreversible death from which there is no resurrection.',
      strongs: 'G2288',
      reference: 'Revelation 20:14',
      note: `The lake of fire is called the second death because it brings sin, Satan, and rebellion to a complete end.

God does not keep evil alive forever. He destroys it so the universe can be fully restored.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The final end of evil must be understood through God's character.

If we picture God as cruel, this doctrine becomes terrifying and distorted.

If we picture God through Jesus, it becomes clear.

God is not preserving torture.

God is ending sin.

God is not delighting in destruction.

God is protecting the universe from eternal rebellion.

God is not acting arbitrarily.

He has opened the records, answered every question, revealed the truth, exposed the final rebellion, and shown that evil has fully chosen separation from life.

The destruction of evil is final because sin must not rise again.

Nahum says affliction will not rise up the second time.

That means God's solution works.

No hidden rebellion.

No lingering enemy.

No eternal torture chamber.

No unresolved evil.

Just the final end of sin and the beginning of a restored universe.`,
    },
    studyInsightBlocks: [
      {
        type: 'endOfEvilFlow',
        title: 'The Final End of Evil',
        caption: 'God ends evil in a way that reveals His justice and secures the universe in love.',
      },
      {
        type: 'scriptureChain',
        title: 'The Final End of Evil',
        references: [
          { reference: 'Revelation 20:9-15' },
          { reference: 'Malachi 4:1-3' },
          { reference: 'Ezekiel 28:18-19' },
          { reference: '2 Peter 3:10-13' },
          { reference: 'Nahum 1:9' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: God brings sin, Satan, death, and rebellion to a final end in perfect justice and transparent love.',
      },
    ],
    reflectPrompt: `How does it change your view of God to see the final judgment as the end of evil, not the eternal preservation of evil?

Think about God's justice, mercy, the second death, Satan's end, the new earth, and why love must finally remove everything that destroys life.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, identify one evil, sin, or destructive pattern that you are tempted to tolerate.

Ask:

"Why am I making peace with something Jesus came to destroy?"

"What is this producing in me?"

"What would it look like to let God end this in my life now?"

"Am I clinging to something that cannot survive in the new earth?"

Then take one honest step.

Confess it.

Remove access to it.

Ask for help.

Make the apology.

Change the habit.

Choose truth.

The final end of evil is not just a doctrine for later.

It is an invitation to stop protecting what God is trying to remove now.

Prayer:

Father, thank You that evil will not last forever. Thank You that sin, Satan, death, and suffering will come to a final end. Help me trust Your justice and Your mercy. Remove every destructive thing from my heart that does not belong in Your kingdom. Teach me to love what You love and surrender what destroys. Prepare me for the world where righteousness dwells. Amen.`,
    prayer: '',
    completionSummary:
      'God will bring evil to a complete and final end. Sin, Satan, death, and rebellion will be destroyed so the universe can be fully restored in righteousness and love.',
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'tm-l6-q1',
          prompt: 'According to Revelation 20:9, what happens after the wicked surround the beloved city?',
          options: [
            'Fire comes down from God and devours them',
            'Satan wins the final battle',
            'The city is destroyed by rebellion',
            'Evil continues forever',
          ],
          correctIndex: 0,
          explanation:
            'Revelation says fire comes down from God out of heaven and devours the final rebellion.',
        },
        {
          id: 'tm-l6-q2',
          prompt: 'According to Revelation 20:14, what is the lake of fire called?',
          options: [
            'The second death',
            'Eternal rebellion',
            'The first resurrection',
            'The marriage supper',
          ],
          correctIndex: 0,
          explanation:
            'Revelation says the lake of fire is the second death, the final and irreversible end of sin and rebellion.',
        },
        {
          id: 'tm-l6-q3',
          prompt: 'According to Ezekiel 28:19, what is Satan\'s final end?',
          options: [
            'He shall never be anymore',
            'He will rule forever',
            'He will keep deceiving forever',
            'He will create a new kingdom',
          ],
          correctIndex: 0,
          explanation:
            'Ezekiel says the fallen covering cherub will be brought to an end and shall never be anymore.',
        },
        {
          id: 'tm-l6-q4',
          prompt: 'According to 2 Peter 3:13, what do believers look for after the cleansing fire?',
          options: [
            'New heavens and a new earth wherein dwelleth righteousness',
            'Eternal sin',
            'Endless rebellion',
            'A ruined earth forever',
          ],
          correctIndex: 0,
          explanation:
            'Peter says believers look for new heavens and a new earth where righteousness dwells.',
        },
        {
          id: 'tm-l6-q5',
          kind: 'reflection',
          prompt: 'What is one destructive thing God is inviting you to stop tolerating in your life?',
          explanation:
            'The final end of evil shows that God does not preserve what destroys life. He removes sin so righteousness, love, and freedom can remain forever.',
        },
      ],
    },
  },
  'god-makes-all-things-new': {
    openingThought: `The Millennium does not end with destruction.

It ends with restoration.

That matters.

God's final goal is not merely to remove evil.

His final goal is to make all things new.

After sin, Satan, death, and rebellion are brought to a complete end, John sees a new heaven and a new earth.

No more death.

No more sorrow.

No more crying.

No more pain.

No more curse.

No more rebellion hiding in the shadows.

The universe is finally safe in love.

The Millennium shows that God does not rush past questions, hide the evidence, or govern by force.

He opens the records.

He answers every question.

He ends evil completely.

Then He restores creation.

That is not panic theology.

That is hope with receipts.`,
    scriptureRef: 'Revelation 21:1-5',
    scriptureQuote: `And I saw a new heaven and a new earth: for the first heaven and the first earth were passed away.

And I heard a great voice out of heaven saying, Behold, the tabernacle of God is with men.

And God shall wipe away all tears from their eyes.

And there shall be no more death, neither sorrow, nor crying, neither shall there be any more pain.

And he that sat upon the throne said, Behold, I make all things new.`,
    scriptureAfterPrimary: `God creates a new heaven and a new earth, dwells with His people, wipes away every tear, and declares that He makes all things new.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Revelation 22:1-3',
        quote: `And he shewed me a pure river of water of life, clear as crystal, proceeding out of the throne of God and of the Lamb.

And there shall be no more curse.`,
      },
      {
        type: 'scripture',
        reference: 'Isaiah 65:17',
        quote: `For, behold, I create new heavens and a new earth.

And the former shall not be remembered, nor come into mind.`,
      },
      {
        type: 'scripture',
        reference: '2 Peter 3:13',
        quote: 'Nevertheless we, according to his promise, look for new heavens and a new earth, wherein dwelleth righteousness.',
      },
      {
        type: 'scripture',
        reference: 'Revelation 15:3-4',
        quote: `Great and marvellous are thy works, Lord God Almighty.

Just and true are thy ways, thou King of saints.

For thy judgments are made manifest.`,
      },
      {
        type: 'scripture',
        reference: 'Nahum 1:9',
        quote: 'Affliction shall not rise up the second time.',
      },
    ],
    teachingPoints: [
      `1. God makes all things new

Revelation does not say God makes all new things.

It says He makes all things new.

That means God restores His creation.

The world damaged by sin is not abandoned to evil forever.

God renews.

God heals.

God rebuilds.

God restores.

The end of the story is not escape from creation.

It is creation made new by the God who never gave up on His purpose.`,
      `2. God's presence returns fully to His people

Revelation says the tabernacle of God is with humanity.

This is the deepest restoration.

God's presence is no longer hidden behind veils, symbols, distance, or separation.

The redeemed dwell with Him.

The fellowship lost through sin is restored.

The whole plan of salvation has been moving toward this:

God with His people.

No separation.

No fear.

No curse.`,
      `3. Pain, death, and sorrow end forever

Revelation says there will be no more death, sorrow, crying, or pain.

That promise is not poetic exaggeration.

It is the final result of God ending sin.

Death ends because sin ends.

Sorrow ends because rebellion ends.

Pain ends because the curse ends.

God does not simply comfort people while evil continues forever.

He removes the cause.`,
      `4. God's judgments are affirmed as just and true

Revelation 15 says the redeemed declare God's ways just and true because His judgments are made manifest.

This connects directly to the Millennium.

The redeemed have reviewed the records.

They have seen the full story.

They have understood God's justice.

And they agree.

The final restoration is built on settled trust.`,
      `5. Evil will never rise again

Nahum says affliction will not rise up the second time.

That is one of the most hopeful promises in Scripture.

God does not merely pause evil.

He ends it.

The universe is not restored with a question mark hanging over it.

The controversy is settled.

God's character is vindicated.

Love wins without coercion.

Freedom remains without rebellion rising again.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'New',
      lemma: 'καινός',
      transliteration: 'kainos',
      meaning:
        'Restored, renewed, made fresh, free from corruption, and brought into the fullness of God\'s purpose.',
      strongs: 'G2537',
      reference: 'Revelation 21:5',
      note: `When God says, "I make all things new," He is announcing full restoration.

The new earth is not a temporary repair job.

It is creation healed from sin, secured in love, and filled with God's presence forever.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The Millennium study has shown the final arc of the great controversy.

Jesus returns.

The righteous are raised.

The redeemed reign with Christ.

Satan is bound on a desolate earth.

The records are opened.

Every question is answered.

The wicked are raised after the thousand years.

The final rebellion exposes evil completely.

God executes final judgment.

Sin, Satan, death, and rebellion are destroyed.

Then God makes all things new.

That sequence reveals God's character.

He is patient.

He is transparent.

He is just.

He is merciful.

He is not afraid of questions.

He does not preserve evil forever.

He does not use force to create fake loyalty.

He lets the full story be seen, then He ends evil in a way that ensures it will never rise again.

The final word is not fire.

The final word is not death.

The final word is not judgment.

The final word is restoration.

"Behold, I make all things new."`,
    },
    studyInsightBlocks: [
      {
        type: 'millenniumStudyRecap',
        title: 'The Millennium',
        caption: 'The Millennium reveals that God governs with justice, transparency, and love.',
      },
      {
        type: 'millenniumEventChart',
        title: 'The Millennium: 1000 Years',
        caption:
          'The Millennium is framed by two resurrections and reveals God\'s transparent justice before evil is finally ended.',
      },
      {
        type: 'endOfEvilFlow',
        title: 'The Final End of Evil',
        caption: 'God ends evil in a way that reveals His justice and secures the universe in love.',
      },
      {
        type: 'transparentJudgmentPanel',
        title: 'God\'s Transparent Judgment',
        caption: 'God does not ask for blind trust. He opens the record and reveals the justice of His ways.',
      },
      {
        type: 'scriptureChain',
        title: 'God Makes All Things New',
        references: [
          { reference: 'Revelation 21:1-5' },
          { reference: 'Revelation 22:1-5' },
          { reference: 'Isaiah 65:17' },
          { reference: '2 Peter 3:13' },
          { reference: 'Revelation 15:3-4' },
          { reference: 'Nahum 1:9' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: After evil is ended forever, God creates the new earth where righteousness, love, freedom, and fellowship with Him will never be threatened again.',
      },
    ],
    reflectPrompt: `What part of God making all things new gives you the most hope?

Think about the end of death, the end of pain, God wiping away tears, every question answered, evil never rising again, and living in a restored world filled with God's presence.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, let the promise of the new earth reshape one part of your life.

Ask:

"What pain am I treating as permanent?"

"What fear needs the promise that God will make all things new?"

"What habit belongs to the old world, not the new one?"

"What relationship needs healing in light of eternity?"

"What would I do differently if I truly believed evil does not get the last word?"

Then choose one action:

Comfort someone who is grieving.

Forgive where bitterness is keeping the old world alive.

Pray with hope instead of despair.

Release one destructive habit.

Read Revelation 21 slowly.

Serve someone as a preview of the world God is restoring.

The new earth is not just future information.

It is future hope pulling your present life toward restoration.

Prayer:

Father, thank You for the promise that You will make all things new. Thank You that death, sorrow, crying, pain, sin, Satan, and rebellion will not last forever. Help me trust Your justice, Your transparency, and Your love. Let the hope of the new earth shape how I live now. Heal what is broken in me, and prepare my heart for the world where righteousness dwells and You are with Your people forever. Amen.`,
    prayer: '',
    completionSummary:
      'You have completed The Millennium. God opens the records, answers every question, ends evil completely, and makes all things new so the universe can remain forever secure in love.',
    seriesCompleteScreen: {
      title: 'Study Complete',
      message:
        'You have completed The Millennium. God opens the records, answers every question, ends evil completely, and makes all things new so the universe can remain forever secure in love.',
      primaryCta: { label: 'Back to Foundations Path', href: '/paths/foundations' },
      secondaryCta: {
        label: 'Review this study',
        href: '/study-library/the-millennium',
      },
    },
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'tm-l7-q1',
          prompt: 'According to Revelation 21:1, what does John see?',
          options: [
            'A new heaven and a new earth',
            'Evil continuing forever',
            'Satan ruling the universe',
            'The earth abandoned forever',
          ],
          correctIndex: 0,
          explanation:
            'John sees a new heaven and a new earth after the first heaven and first earth pass away.',
        },
        {
          id: 'tm-l7-q2',
          prompt: 'According to Revelation 21:4, what will God wipe away?',
          options: [
            'All tears from their eyes',
            'All hope',
            'All worship',
            'All righteousness',
          ],
          correctIndex: 0,
          explanation:
            'Revelation says God will wipe away all tears, and there will be no more death, sorrow, crying, or pain.',
        },
        {
          id: 'tm-l7-q3',
          prompt: 'According to Revelation 21:5, what does God say?',
          options: [
            'Behold, I make all things new',
            'Behold, evil will last forever',
            'Behold, death wins',
            'Behold, I hide My justice',
          ],
          correctIndex: 0,
          explanation: 'God declares, "Behold, I make all things new," announcing full restoration.',
        },
        {
          id: 'tm-l7-q4',
          prompt: 'According to 2 Peter 3:13, what do believers look for?',
          options: [
            'New heavens and a new earth wherein dwelleth righteousness',
            'Endless rebellion',
            'A ruined earth forever',
            'A universe without God\'s presence',
          ],
          correctIndex: 0,
          explanation:
            'Peter says believers look for new heavens and a new earth where righteousness dwells.',
        },
        {
          id: 'tm-l7-q5',
          kind: 'reflection',
          prompt:
            'What is one present struggle you need to view through the promise that God will make all things new?',
          explanation:
            'The Millennium ends in restoration. God answers every question, ends evil forever, and creates a new earth where righteousness, love, and freedom remain.',
        },
      ],
    },
  },
}
