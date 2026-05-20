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

const OVERVIEW_HREF = '/study-library/the-end-of-evil'

function shellLesson(blocks: LessonContentBlock[]): LessonReaderContent {
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
    studyInsightBlocks: [
      ...blocks,
      { type: 'studyCta', label: 'Back to study overview', href: OVERVIEW_HREF },
    ],
    reflectPrompt: PLACEHOLDER_BODY,
    lifeApplication: PLACEHOLDER_BODY,
    prayer: '',
  }
}

/** Placeholder shell lessons for "The End of Evil" (Foundations). */
export const theEndOfEvilSeriesLessonLibrary: Record<string, LessonReaderContent> = {
  'god-is-love-in-final-judgment': {
    openingThought: `Final judgment must begin with one truth:

God is love.

Not God was love before judgment.

Not God is love except when dealing with the lost.

God is love.

Always.

Even in judgment.

That means any doctrine about hell, punishment, wrath, the lake of fire, or the end of evil must be tested by the character of God revealed in Jesus.

Many people have been taught that God will keep the lost alive forever in conscious torment.

But the Bible presents a different picture.

The wages of sin is death.

The wicked perish.

The proud become ashes.

Satan will be brought to an end.

Death itself will be destroyed.

And God will make a universe where there is no more death, sorrow, crying, or pain.

That is not God preserving evil forever.

That is God ending evil forever.`,
    scriptureRef: '1 John 4:8',
    scriptureQuote: `He that loveth not knoweth not God; for God is love.`,
    scriptureAfterPrimary: `John says God is love. This is not a decorative Bible phrase. It is the foundation for understanding everything God does.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Ezekiel 33:11',
        quote: `As I live, saith the Lord GOD, I have no pleasure in the death of the wicked.

But that the wicked turn from his way and live.`,
      },
      {
        type: 'scripture',
        reference: 'John 3:16',
        quote: `For God so loved the world, that he gave his only begotten Son.

That whosoever believeth in him should not perish, but have everlasting life.`,
      },
      {
        type: 'scripture',
        reference: 'Romans 6:23',
        quote: `For the wages of sin is death.

But the gift of God is eternal life through Jesus Christ our Lord.`,
      },
      {
        type: 'scripture',
        reference: 'Revelation 21:4',
        quote: `And God shall wipe away all tears from their eyes.

And there shall be no more death, neither sorrow, nor crying, neither shall there be any more pain.`,
      },
      {
        type: 'scripture',
        reference: 'Revelation 20:14',
        quote: `And death and hell were cast into the lake of fire.

This is the second death.`,
      },
    ],
    teachingPoints: [
      `1. God's love defines His judgment

John says God is love.

That is not a decorative Bible phrase.

It is the foundation for understanding everything God does.

God's justice is loving.

God's mercy is loving.

God's warnings are loving.

God's final judgment is loving.

If our view of final judgment makes God look less loving than Jesus, something is off.

Jesus is the clearest revelation of God's character.

So we must interpret judgment through Christ, not through fear-based religious imagination.`,
      `2. God takes no pleasure in the death of the wicked

Ezekiel says God has no pleasure in the death of the wicked.

That means final judgment is not divine delight in suffering.

God is not eager to destroy.

God pleads.

God warns.

God draws.

God calls sinners to turn and live.

The fact that judgment comes does not mean God stopped loving.

It means God will not allow evil to destroy forever.`,
      `3. The wages of sin is death

Romans does not say the wages of sin is eternal life in torment.

It says the wages of sin is death.

John 3:16 does not say the lost will live forever in pain.

It says those who believe will not perish but have everlasting life.

The contrast is simple:

Perish or live.

Death or eternal life.

Lost or saved.

The Bible's language is not complicated until people try to force eternal torment into it.`,
      `4. God ends evil so there can be no more death

Revelation says death and hell are cast into the lake of fire, and this is the second death.

Then Revelation 21 says there will be no more death, sorrow, crying, or pain.

That could not be true if somewhere in God's universe the lost were still alive in endless agony.

No more pain means no more pain.

No more crying means no more crying.

No more death means death is actually destroyed.

The final judgment clears the universe for restoration.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Perish',
      lemma: 'ἀπόλλυμι',
      transliteration: 'apollymi',
      meaning: 'To be destroyed, brought to ruin, or come to an end.',
      strongs: 'G622',
      reference: 'John 3:16',
      note: `John 3:16 contrasts perishing with everlasting life.

The lost do not receive eternal life in torment. Eternal life is the gift God gives through Christ.

Those who reject life finally perish.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The doctrine of the end of evil is really a doctrine about God's character.

Is God the kind of being who keeps people alive forever in pain?

Or is God the kind of being who finally ends evil, death, and suffering completely?

Scripture gives the answer.

God is love.

God takes no pleasure in the death of the wicked.

The wages of sin is death.

The wicked perish.

The lake of fire is the second death.

God will make a new earth with no more death, sorrow, crying, or pain.

That is a radically different picture from eternal torment.

Final judgment is not God becoming cruel.

It is God being faithful to love.

Love cannot let evil continue forever.

Love cannot preserve suffering forever.

Love cannot keep the universe eternally infected with rebellion.

God ends evil because God is love.`,
    },
    studyInsightBlocks: [
      {
        type: 'endOfEvilCoreContrast',
        title: 'Two Pictures of Final Judgment',
        caption: 'God\u2019s final judgment does not preserve evil forever. It brings evil to a complete end.',
        highlightedIndices: [0, 1, 2, 3, 4],
      },
      {
        type: 'godsHeartInJudgment',
        title: 'God\u2019s Heart in Judgment',
        caption: 'Final judgment must be understood through the love of God revealed in Jesus.',
        highlightedIndices: [0],
      },
      {
        type: 'scriptureChain',
        title: 'God Is Love in Final Judgment',
        references: [
          { reference: '1 John 4:8' },
          { reference: 'Ezekiel 33:11' },
          { reference: 'John 3:16' },
          { reference: 'Romans 6:23' },
          { reference: 'Revelation 21:4' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: Final judgment must be understood through the character of God revealed in Jesus. God ends evil because God is love.',
      },
    ],
    reflectPrompt: `Has your view of final judgment made God look more loving or less loving?

Think about what you have been taught about hell, fear, punishment, eternal torment, death, mercy, and whether your picture of final judgment matches the character of Jesus.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, compare your picture of final judgment with the words of Scripture.

Read these verses slowly:

1 John 4:8

Ezekiel 33:11

John 3:16

Romans 6:23

Revelation 21:4

Then ask:

"What do these verses clearly say?"

"What have I assumed that they do not say?"

"Does my view of judgment make God look like Jesus?"

"Do I believe God is love even when He ends evil?"

Write one sentence completing this thought:

"God's final judgment is loving because..."

Do not rush this.

A distorted picture of judgment can quietly poison your picture of God.

Let Scripture clean the lens.

Prayer:

Father, thank You that You are love in all You do. Thank You that You take no pleasure in the death of the wicked and that Your desire is for people to turn and live. Heal every fear-based picture I have of You. Teach me to understand final judgment through Jesus. Help me trust that You will end evil with perfect justice, mercy, and love. Amen.`,
    prayer: '',
    completionSummary:
      'God is love even in final judgment. He does not preserve evil forever. He brings sin, death, and rebellion to a complete end so creation can be restored.',
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'toe-l1-q1',
          prompt: 'According to 1 John 4:8, what is God?',
          options: ['Love', 'Fear', 'Confusion', 'Cruelty'],
          correctIndex: 0,
          explanation: 'John says, "God is love." This truth shapes how we understand final judgment.',
        },
        {
          id: 'toe-l1-q2',
          prompt: 'According to Ezekiel 33:11, what does God say about the death of the wicked?',
          options: [
            'He has no pleasure in it',
            'He enjoys it',
            'He ignores it',
            'He causes it for entertainment',
          ],
          correctIndex: 0,
          explanation:
            'God says He has no pleasure in the death of the wicked, but desires that the wicked turn and live.',
        },
        {
          id: 'toe-l1-q3',
          prompt: 'According to Romans 6:23, what are the wages of sin?',
          options: [
            'Death',
            'Eternal life in torment',
            'Immediate immortality',
            'Endless rebellion',
          ],
          correctIndex: 0,
          explanation:
            'Romans says the wages of sin is death, while eternal life is the gift of God through Jesus Christ.',
        },
        {
          id: 'toe-l1-q4',
          prompt: 'According to John 3:16, what happens to those who believe in Jesus?',
          options: [
            'They do not perish but have everlasting life',
            'They perish forever',
            'They earn immortality by works',
            'They become naturally immortal apart from Christ',
          ],
          correctIndex: 0,
          explanation:
            'John 3:16 contrasts perishing with everlasting life. Eternal life is given through faith in Christ.',
        },
        {
          id: 'toe-l1-q5',
          kind: 'reflection',
          prompt: 'What changes when you understand final judgment through the truth that God is love?',
          explanation:
            'The end of evil must be understood through God\u2019s character. God does not preserve evil forever. He ends evil so the universe can be restored in love.',
        },
      ],
    },
  },
  'the-incompatibility-of-justice-and-torture': {
    openingThought: `Torture is not justice.

That statement should not be controversial.

Human beings know, deep down, that torture is morally wrong. Even broken human justice systems recognize that endless conscious torment would be cruel, not righteous.

So we need to ask a serious question:

Would the God revealed in Jesus torture people forever?

Many have been taught that He will.

But Scripture presents a very different picture.

God does not delight in the death of the wicked.

Love does no harm to its neighbor.

Perfect love casts out fear.

Jesus rebuked His disciples when they wanted to call fire down on people.

The Bible's final judgment is not eternal torture.

It is the final end of evil.`,
    scriptureRef: 'Jeremiah 19:5',
    scriptureQuote: `They have built also the high places of Baal, to burn their sons with fire for burnt offerings unto Baal.

Which I commanded not, nor spake it, neither came it into my mind.`,
    scriptureAfterPrimary: `God rebukes burning children as offerings to Baal. Such cruelty never entered His mind.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Ezekiel 33:11',
        quote: `As I live, saith the Lord GOD, I have no pleasure in the death of the wicked.

But that the wicked turn from his way and live.`,
      },
      {
        type: 'scripture',
        reference: 'Luke 9:54-56',
        quote: `And when his disciples James and John saw this, they said, Lord, wilt thou that we command fire to come down from heaven, and consume them?

But he turned, and rebuked them.

For the Son of man is not come to destroy men's lives, but to save them.`,
      },
      {
        type: 'scripture',
        reference: 'Romans 13:10',
        quote: `Love worketh no ill to his neighbour.

Therefore love is the fulfilling of the law.`,
      },
      {
        type: 'scripture',
        reference: '1 John 4:18',
        quote: `There is no fear in love.

But perfect love casteth out fear.`,
      },
    ],
    teachingPoints: [
      `1. Torture is foreign to God's character

In Jeremiah, God rebukes the people for burning their children in fire as offerings to Baal.

Then God says something stunning:

It did not come into His mind.

That means the idea of humans burning other humans as religious devotion is foreign to God's character.

Now reason carefully.

If burning people as sacrifices never entered God's mind, then the idea of God burning people alive forever cannot represent His heart.

That picture belongs to false religion, not to the God revealed in Scripture.`,
      `2. God does not delight in death

Ezekiel says God has no pleasure in the death of the wicked.

If God takes no pleasure even in the death of the wicked, He certainly does not take pleasure in eternal torture.

Final judgment is not God indulging cruelty.

It is God ending evil.

The lost are not destroyed because God stopped loving them.

They are destroyed because they have persistently rejected the only Source of life.`,
      `3. Jesus rebuked destructive religious zeal

James and John wanted to call fire down from heaven on people who rejected Jesus.

Jesus rebuked them.

That should sober us up.

It is possible to defend "truth" with a spirit completely unlike Christ.

Jesus did not come to destroy lives, but to save them.

Any doctrine of final judgment must be interpreted through the saving heart of Jesus.`,
      `4. Perfect love casts out fear

John says perfect love casts out fear.

Fear-based religion may produce compliance, but it cannot produce love.

If someone obeys God only because they are terrified of endless torture, that is not true worship.

That is survival.

God wants love, trust, and willing surrender.

Torture theology may scare people into religious behavior, but it misrepresents the Father's character.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Torture',
      lemma: 'βασανισμός',
      transliteration: 'basanismos',
      meaning: 'The intentional infliction of severe pain as punishment, coercion, or cruelty.',
      strongs: 'G929',
      reference: 'Revelation 14:11',
      note: `Torture is incompatible with the character of God revealed in Jesus.

The Bible's final judgment brings evil to an end. It does not preserve suffering forever.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `Eternal torment creates a massive contradiction.

It says God is love, but that He keeps the lost alive forever in pain.

It says death will be destroyed, but conscious misery continues forever.

It says there will be no more pain, but somewhere in God's universe pain never ends.

It says God takes no pleasure in the death of the wicked, but He actively sustains the wicked in endless agony.

That does not match Scripture.

And it does not match Jesus.

The Bible teaches that evil will end.

The wicked perish.

The wages of sin is death.

The lake of fire is the second death.

God makes all things new.

The gospel does not reveal a God who tortures forever.

It reveals a God who gives His life to save, pleads with sinners to turn, and finally removes evil because love cannot let suffering continue endlessly.`,
    },
    studyInsightBlocks: [
      {
        type: 'endOfEvilCoreContrast',
        title: 'Two Pictures of Final Judgment',
        caption: 'God\u2019s final judgment does not preserve evil forever. It brings evil to a complete end.',
        highlightedIndices: [0, 1],
      },
      {
        type: 'godsHeartInJudgment',
        title: 'God\u2019s Heart in Judgment',
        caption: 'Final judgment must be understood through the love of God revealed in Jesus.',
        highlightedIndices: [1, 2],
      },
      {
        type: 'scriptureChain',
        title: 'The Incompatibility of Justice and Torture',
        references: [
          { reference: 'Jeremiah 19:5' },
          { reference: 'Ezekiel 33:11' },
          { reference: 'Luke 9:54-56' },
          { reference: 'Romans 13:10' },
          { reference: '1 John 4:18' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: Eternal torture contradicts both biblical justice and the loving character of God revealed in Jesus.',
      },
    ],
    reflectPrompt: `Have you ever feared God because of the idea of eternal torment?

Think about whether fear-based teaching shaped your view of God, your prayer life, your obedience, or your ability to trust His love.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, test fear-based religion by the character of Jesus.

Read Luke 9:54-56 slowly.

Then ask:

"Do I see God as eager to destroy or eager to save?"

"Has fear made me obey outwardly while my heart stayed distant?"

"Do I believe love does no harm?"

"Where has terror-based religion distorted my picture of the Father?"

Then read 1 John 4:18.

Let this truth sit with you:

Perfect love casts out fear.

God does not want panic-based worship.

He wants your heart.

Prayer:

Father, heal every distorted picture I have of You. Thank You that torture is foreign to Your character and that You take no pleasure in the death of the wicked. Help me understand judgment through Jesus. Remove fear-based religion from my heart and replace it with trust, love, and willing surrender. Amen.`,
    prayer: '',
    completionSummary:
      'Torture is incompatible with God\u2019s justice and love. The Bible reveals a God who saves, warns, pleads, and finally ends evil rather than preserving suffering forever.',
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'toe-l2-q1',
          prompt: 'According to Jeremiah 19:5, what did God say about burning children as offerings?',
          options: [
            'It did not come into His mind',
            'He commanded it',
            'He enjoyed it',
            'It was His highest form of worship',
          ],
          correctIndex: 0,
          explanation:
            'God said He did not command it, speak it, nor did it come into His mind, showing such cruelty is foreign to His character.',
        },
        {
          id: 'toe-l2-q2',
          prompt: 'According to Ezekiel 33:11, what does God desire for the wicked?',
          options: [
            'That they turn and live',
            'That they suffer forever',
            'That they stay deceived',
            'That they never hear truth',
          ],
          correctIndex: 0,
          explanation:
            'God says He has no pleasure in the death of the wicked, but desires that the wicked turn and live.',
        },
        {
          id: 'toe-l2-q3',
          prompt: 'What did Jesus do when James and John wanted to call fire down from heaven?',
          options: ['He rebuked them', 'He praised them', 'He commanded them to continue', 'He ignored them'],
          correctIndex: 0,
          explanation:
            'Jesus rebuked His disciples and said He did not come to destroy lives, but to save them.',
        },
        {
          id: 'toe-l2-q4',
          prompt: 'According to Romans 13:10, what does love do?',
          options: [
            'Works no ill to its neighbor',
            'Delights in harm',
            'Preserves suffering forever',
            'Forces worship',
          ],
          correctIndex: 0,
          explanation:
            'Paul says love works no ill to its neighbor, showing that God\u2019s love cannot be defined as endless harm.',
        },
        {
          id: 'toe-l2-q5',
          kind: 'reflection',
          prompt: 'What fear-based picture of God do you need Jesus to correct?',
          explanation:
            'Final judgment must be understood through the love of God. Torture is foreign to His character, and perfect love casts out fear.',
        },
      ],
    },
  },
  'what-the-bible-says-about-the-wicked': {
    openingThought: `When we want to know what finally happens to the wicked, we should let the Bible use its own language.

Not tradition first.

Not fear first.

Not medieval paintings first.

Not somebody's childhood revival sermon that still has people spiritually ducking under pews.

Scripture uses clear words:

Perish.

Death.

Destroyed.

Consumed.

Ashes.

As though they had never been.

That language matters.

The Bible does not teach that the lost receive eternal life in torment.

It teaches that eternal life is the gift of God through Jesus Christ.

Those who reject the Source of life finally lose life.

The end of evil is not eternal conscious torture.

It is final destruction.`,
    scriptureRef: 'Romans 6:23',
    scriptureQuote: `For the wages of sin is death.

But the gift of God is eternal life through Jesus Christ our Lord.`,
    scriptureAfterPrimary: `Paul contrasts death with eternal life. Sin pays death. Eternal life is God's gift through Christ.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'John 3:16',
        quote: `For God so loved the world, that he gave his only begotten Son.

That whosoever believeth in him should not perish, but have everlasting life.`,
      },
      {
        type: 'scripture',
        reference: 'James 1:15',
        quote: `Then when lust hath conceived, it bringeth forth sin.

And sin, when it is finished, bringeth forth death.`,
      },
      {
        type: 'scripture',
        reference: 'Psalm 37:20',
        quote: `But the wicked shall perish.

And the enemies of the LORD shall be as the fat of lambs: they shall consume; into smoke shall they consume away.`,
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
        quote: `And ye shall tread down the wicked; for they shall be ashes under the soles of your feet.`,
      },
      {
        type: 'scripture',
        reference: 'Obadiah 16',
        quote: `And they shall be as though they had not been.`,
      },
      {
        type: 'scripture',
        reference: 'Matthew 10:28',
        quote: `Fear him which is able to destroy both soul and body in hell.`,
      },
    ],
    teachingPoints: [
      `1. The wages of sin is death

Romans says the wages of sin is death.

That is direct.

Sin pays death.

Not eternal life in pain.

Not immortality in flames.

Death.

By contrast, eternal life is the gift of God through Jesus Christ.

That means eternal life belongs to the saved, not to the lost.

If someone lives forever in torment, they still have eternal life.

The Bible says eternal life is a gift given through Christ.`,
      `2. The wicked perish

John 3:16 gives the same contrast.

Those who believe do not perish but have everlasting life.

Perish and everlasting life are opposites.

The lost perish.

The saved receive everlasting life.

This verse is not confusing unless we import a doctrine into it that the verse itself does not teach.

God gave His Son so people would not perish.

That means perishing is the fate from which Christ saves us.`,
      `3. Sin brings forth death

James says sin, when it is finished, brings forth death.

Sin has a final product.

Death.

Sin may look exciting at first.

It may look powerful, satisfying, freeing, or sophisticated.

But when it matures, it produces death.

This is why God must end sin.

Sin is not a harmless mistake.

It is a death-producing power.`,
      `4. The wicked are consumed and reduced to ashes

Psalm 37 says the wicked will perish and consume away like smoke.

Malachi says the wicked become stubble and then ashes.

That is final destruction language.

Ashes are not conscious.

Smoke that consumes away is not eternal life.

Stubble burned up is not endless torment.

The Bible's picture is clear: evil is consumed until it is gone.`,
      `5. God destroys both soul and body

Jesus said God is able to destroy both soul and body in hell.

That sentence needs to be allowed to speak.

Destroy means destroy.

Jesus does not say God preserves soul and body forever in torment.

He says destruction is possible and final.

The God of love will bring evil to an end.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Death',
      lemma: 'θάνατος',
      transliteration: 'thanatos',
      meaning: 'The end of life, separation from the Source of life, and the final result of sin.',
      strongs: 'G2288',
      reference: 'Romans 6:23',
      note: `The Bible consistently teaches that sin results in death.

Eternal life is not natural to humanity. It is God's gift through Jesus Christ.

Those who reject life finally perish.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The Bible's language about the wicked is consistent.

John says perish.

Paul says death.

James says death.

David says consume away.

Malachi says ashes.

Obadiah says as though they had not been.

Jesus says destroy both soul and body.

That is not the vocabulary of endless conscious torment.

It is the vocabulary of final destruction.

And this matters because bad theology damages people's picture of God.

If we say God keeps the lost alive forever in agony, we make God look like He preserves evil.

But Scripture says God ends evil.

The final judgment is serious.

No one should treat it casually.

But it is also merciful.

God does not allow sin to continue forever.

He removes it completely so the universe can finally be free from death, sorrow, crying, and pain.`,
    },
    studyInsightBlocks: [
      {
        type: 'wagesOfSinFlow',
        title: 'The Wages of Sin',
        caption:
          'The Bible\u2019s consistent language is death, perishing, destruction, and ashes, not endless conscious torment.',
        highlightedIndices: [1, 2, 3, 4],
      },
      {
        type: 'scriptureChain',
        title: 'What the Bible Says About the Wicked',
        references: [
          { reference: 'John 3:16' },
          { reference: 'Romans 6:23' },
          { reference: 'James 1:15' },
          { reference: 'Psalm 37:20' },
          { reference: 'Malachi 4:1-3' },
          { reference: 'Obadiah 16' },
          { reference: 'Matthew 10:28' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: Scripture teaches that the wicked perish, die, are consumed, and are reduced to ashes. Eternal life is God\u2019s gift to the redeemed through Christ.',
      },
    ],
    reflectPrompt: `What changes when you let the Bible's words define the fate of the wicked?

Think about words like perish, death, consumed, ashes, destroyed, and whether those words give you a clearer picture of God's justice and mercy.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, read John 3:16 and Romans 6:23 slowly.

Do not skim them because they are familiar.

Ask:

"What contrast does the verse actually make?"

"Does it contrast eternal torment with eternal life, or perishing/death with eternal life?"

"What does this reveal about God's character?"

"Do I believe eternal life is a gift, not something every soul naturally possesses?"

Then write down one sentence:

"The wages of sin is death, but the gift of God is eternal life through Jesus."

Let the simplicity of Scripture correct complicated fear.

Prayer:

Father, thank You for speaking clearly in Your Word. Thank You that eternal life is a gift through Jesus Christ. Help me understand final judgment by Scripture, not fear or tradition. Teach me to see Your justice and mercy in the truth that evil will finally end. Keep my heart anchored in Your love. Amen.`,
    prayer: '',
    completionSummary:
      'The Bible\u2019s language is clear: the wicked perish, die, are consumed, and become ashes. Eternal life is the gift of God through Jesus, not the natural possession of the lost.',
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'toe-l3-q1',
          prompt: 'According to Romans 6:23, what are the wages of sin?',
          options: ['Death', 'Eternal life in torment', 'Natural immortality', 'Endless joy'],
          correctIndex: 0,
          explanation:
            'Romans says the wages of sin is death, while eternal life is the gift of God through Jesus Christ.',
        },
        {
          id: 'toe-l3-q2',
          prompt: 'According to John 3:16, what happens to those who believe in Jesus?',
          options: [
            'They do not perish but have everlasting life',
            'They perish immediately',
            'They earn salvation without grace',
            'They become naturally immortal apart from Christ',
          ],
          correctIndex: 0,
          explanation:
            'John 3:16 contrasts perishing with everlasting life. Those who believe receive life through Christ.',
        },
        {
          id: 'toe-l3-q3',
          prompt: 'According to James 1:15, what does sin bring forth when it is finished?',
          options: ['Death', 'Eternal rebellion', 'Secret wisdom', 'Natural holiness'],
          correctIndex: 0,
          explanation: 'James says sin, when it is finished, brings forth death.',
        },
        {
          id: 'toe-l3-q4',
          prompt: 'According to Malachi 4:3, what will the wicked become?',
          options: ['Ashes', 'Eternal rulers', 'Immortal rebels', 'Angels'],
          correctIndex: 0,
          explanation: 'Malachi says the wicked will be ashes under the soles of the feet of the redeemed.',
        },
        {
          id: 'toe-l3-q5',
          kind: 'reflection',
          prompt:
            'Which biblical word about the fate of the wicked stands out to you most: perish, death, consumed, ashes, or destroyed?',
          explanation:
            'The Bible consistently teaches that sin ends in death and destruction. God brings evil to a complete end rather than preserving it forever.',
        },
      ],
    },
  },
  'immortality-is-a-gift': {
    openingThought: `A lot of confusion about hell begins with one assumption:

The human soul cannot die.

But where did that idea come from?

In Genesis, the serpent told Eve, "You shall not surely die."

That was the first lie.

Scripture does not teach that humans are naturally immortal.

It teaches that God alone has immortality.

It teaches that eternal life is a gift.

It teaches that the redeemed put on immortality at the return of Jesus.

This matters because if every soul is naturally immortal, then the lost must continue existing somewhere forever.

But if immortality is a gift given only through Christ, then the final end of the wicked makes biblical sense.

The lost perish.

The redeemed receive life.

Immortality is not natural.

Immortality is grace.`,
    scriptureRef: '1 Timothy 6:16',
    scriptureQuote: `Who only hath immortality, dwelling in the light which no man can approach unto.`,
    scriptureAfterPrimary: `Paul says God alone has immortality. Immortality belongs inherently to God alone.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Genesis 3:4',
        quote: `And the serpent said unto the woman, Ye shall not surely die.`,
      },
      {
        type: 'scripture',
        reference: '1 Corinthians 15:51-54',
        quote: `Behold, I shew you a mystery; We shall not all sleep, but we shall all be changed.

For this corruptible must put on incorruption, and this mortal must put on immortality.

So when this corruptible shall have put on incorruption, and this mortal shall have put on immortality.

Then shall be brought to pass the saying that is written, Death is swallowed up in victory.`,
      },
      {
        type: 'scripture',
        reference: 'Romans 2:7',
        quote: `To them who by patient continuance in well doing seek for glory and honour and immortality, eternal life.`,
      },
      {
        type: 'scripture',
        reference: '2 Timothy 1:10',
        quote: `Our Saviour Jesus Christ, who hath abolished death, and hath brought life and immortality to light through the gospel.`,
      },
      {
        type: 'scripture',
        reference: 'Romans 6:23',
        quote: `For the wages of sin is death.

But the gift of God is eternal life through Jesus Christ our Lord.`,
      },
    ],
    teachingPoints: [
      `1. The first lie was "You shall not surely die"

Genesis shows the serpent contradicting God's warning.

God said sin would bring death.

The serpent said humans would not surely die.

That lie has echoed through history.

The idea that humans cannot truly die does not begin with Scripture's view of life.

It begins with Satan's denial of death.

That should make us cautious.

If a doctrine requires us to believe that the wicked cannot finally die, we need to test it carefully by Scripture.`,
      `2. God alone has immortality

Paul says God only has immortality.

That means immortality belongs inherently to God alone.

Human beings are not naturally immortal.

We depend on God for life.

We are not self-existing.

We do not possess endless life inside ourselves apart from Him.

God is the Source of life.

Detached from Him, creation cannot live forever.`,
      `3. The redeemed put on immortality at Christ's return

First Corinthians says this mortal must put on immortality.

That means immortality is something the redeemed receive.

It is not something they already possess by nature.

At the return of Jesus, the dead in Christ are raised and the living faithful are changed.

Then mortality puts on immortality.

Immortality is part of salvation.

Not a default setting.`,
      `4. Immortality comes through the gospel

Second Timothy says Jesus brought life and immortality to light through the gospel.

That is clean.

Immortality is not brought to light through philosophy, superstition, or the serpent's claim.

It is brought through Jesus.

Eternal life is God's gift through Christ.

Those who reject Christ reject the only Source of eternal life.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Immortality',
      lemma: 'ἀθανασία',
      transliteration: 'athanasia',
      meaning: 'The state of being unable to die.',
      strongs: 'G110',
      reference: '1 Timothy 6:16',
      note: `The Bible teaches that God alone possesses immortality inherently.

Human beings receive immortality only as a gift through Christ at the resurrection. Eternal life is not natural to the soul. It is given by grace.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `Conditional immortality clears up the doctrine of final judgment.

The traditional eternal torment view assumes that every human soul must live forever somewhere.

So if the saved live forever with God, the lost must live forever in torment.

But Scripture does not start there.

Scripture says God alone has immortality.

Scripture says eternal life is a gift.

Scripture says the wages of sin is death.

Scripture says this mortal must put on immortality.

That means the lost do not possess endless life by nature.

They perish because they have rejected the only Source of life.

This is not God being weak on judgment.

This is Scripture being honest about life.

Life is not independent.

Life is received.

And eternal life is received only in Christ.`,
    },
    studyInsightBlocks: [
      {
        type: 'conditionalImmortalityPanel',
        title: 'Immortality Is a Gift',
        caption: 'The Bible teaches conditional immortality: eternal life is given in Christ.',
        highlightedIndices: [0, 1, 2, 3],
      },
      {
        type: 'scriptureChain',
        title: 'Immortality Is a Gift',
        references: [
          { reference: 'Genesis 3:1-5' },
          { reference: '1 Timothy 6:16' },
          { reference: '1 Corinthians 15:51-54' },
          { reference: 'Romans 2:7' },
          { reference: '2 Timothy 1:10' },
          { reference: 'Romans 6:23' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: The Bible teaches that immortality belongs to God and is given to the redeemed, not possessed naturally by every soul.',
      },
    ],
    reflectPrompt: `How does it change your view of final judgment to know that immortality is a gift, not a natural human possession?

Think about the difference between eternal life in Christ and the idea that every soul must live forever somewhere.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, let Scripture reset your assumptions about life.

Read Genesis 3:4, 1 Timothy 6:16, 1 Corinthians 15:51-54, and Romans 6:23.

Then ask:

"Where did I get my belief about the soul from?"

"Does my view come from Scripture or inherited tradition?"

"What does it mean that God alone has immortality?"

"Do I treat eternal life as a gift or as something humans naturally possess?"

Then write this sentence:

"Eternal life is not my natural possession. It is God's gift through Jesus."

That sentence will save you from a lot of theological fog.

Prayer:

Father, thank You that life comes from You. Thank You that immortality is not something I possess apart from You, but a gift You give through Jesus Christ. Help me reject the serpent's lie and trust the truth of Your Word. Teach me to value eternal life as grace, not entitlement. Keep my hope fixed on Christ, who brings life and immortality through the gospel. Amen.`,
    prayer: '',
    completionSummary:
      'Immortality is not natural to humanity. God alone has immortality, and He gives eternal life to the redeemed through Jesus Christ.',
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'toe-l4-q1',
          prompt: 'According to Genesis 3:4, what did the serpent tell Eve?',
          options: [
            'You shall not surely die',
            'The wages of sin is death',
            'God alone has immortality',
            'Eternal life is a gift',
          ],
          correctIndex: 0,
          explanation:
            'The serpent contradicted God by saying, "You shall not surely die." This was the first lie.',
        },
        {
          id: 'toe-l4-q2',
          prompt: 'According to 1 Timothy 6:16, who alone has immortality inherently?',
          options: ['God', 'All human souls', 'Satan', 'The wicked'],
          correctIndex: 0,
          explanation: 'Paul says God alone has immortality, meaning immortality belongs inherently to God.',
        },
        {
          id: 'toe-l4-q3',
          prompt: 'According to 1 Corinthians 15:53-54, what must this mortal put on?',
          options: ['Immortality', 'Fear', 'Eternal torment', 'Confusion'],
          correctIndex: 0,
          explanation:
            'Paul says this mortal must put on immortality, showing immortality is received, not naturally possessed.',
        },
        {
          id: 'toe-l4-q4',
          prompt: 'According to Romans 6:23, what is eternal life?',
          options: [
            'The gift of God through Jesus Christ',
            'The natural possession of every soul',
            'The wages of sin',
            'The result of human effort',
          ],
          correctIndex: 0,
          explanation: 'Romans says eternal life is the gift of God through Jesus Christ our Lord.',
        },
        {
          id: 'toe-l4-q5',
          kind: 'reflection',
          prompt: 'What belief about death, hell, or the soul do you need to recheck by Scripture?',
          explanation:
            'The Bible teaches conditional immortality. Eternal life is given in Christ, not naturally possessed by all people.',
        },
      ],
    },
  },
  'forever-eternal-and-unquenchable-fire': {
    openingThought: `Some of the confusion about hell comes from words like:

Forever.

Eternal.

Unquenchable.

Those words sound like they must always mean something continues without end.

But the Bible often uses these words to describe a result that is complete, permanent, and irreversible.

That matters.

When Scripture speaks of eternal fire, it does not always mean fire that is still burning forever.

Jude says Sodom and Gomorrah suffered the vengeance of eternal fire.

But Sodom is not still burning today.

The fire was eternal in its result, not endless in its process.

Same with unquenchable fire.

An unquenchable fire is not a fire that never goes out.

It is a fire no one can put out until it finishes its work.

Scripture is not trying to confuse us.

We just need to let the Bible define its own language.`,
    scriptureRef: 'Jude 7',
    scriptureQuote: `Even as Sodom and Gomorrha, and the cities about them in like manner.

Are set forth for an example, suffering the vengeance of eternal fire.`,
    scriptureAfterPrimary: `Jude points to Sodom and Gomorrah as an example of eternal fire. Peter says those cities were turned into ashes.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: '2 Peter 2:6',
        quote: `And turning the cities of Sodom and Gomorrha into ashes condemned them with an overthrow.

Making them an ensample unto those that after should live ungodly.`,
      },
      {
        type: 'scripture',
        reference: 'Jonah 2:6',
        quote: `I went down to the bottoms of the mountains; the earth with her bars was about me for ever.

Yet hast thou brought up my life from corruption, O LORD my God.`,
      },
      {
        type: 'scripture',
        reference: '1 Samuel 1:22',
        quote: `I will bring him, that he may appear before the LORD, and there abide for ever.`,
      },
      {
        type: 'scripture',
        reference: '1 Samuel 1:28',
        quote: `As long as he liveth he shall be lent to the LORD.`,
      },
      {
        type: 'scripture',
        reference: 'Exodus 21:6',
        quote: `And his master shall bore his ear through with an aul; and he shall serve him for ever.`,
      },
      {
        type: 'scripture',
        reference: 'Matthew 3:12',
        quote: `He will throughly purge his floor.

And gather his wheat into the garner; but he will burn up the chaff with unquenchable fire.`,
      },
      {
        type: 'scripture',
        reference: 'Jeremiah 17:27',
        quote: `Then will I kindle a fire in the gates thereof, and it shall devour the palaces of Jerusalem.

And it shall not be quenched.`,
      },
    ],
    teachingPoints: [
      `1. Eternal fire can describe permanent results

Jude says Sodom and Gomorrah suffered eternal fire.

Peter says those same cities were turned into ashes.

That gives us the biblical explanation.

The fire was eternal in its effect.

The cities were completely destroyed.

The result was permanent.

But the fire is not still burning.

So "eternal fire" does not automatically mean endless conscious torment.

It can mean a fire whose result cannot be reversed.`,
      `2. Forever can mean as long as the context allows

Jonah said he was in the depths "for ever," but he was in the fish for three days.

Samuel was lent to the Lord "for ever," which the passage explains as "as long as he liveth."

A servant in Exodus could serve "for ever," meaning for life.

The point is simple:

The Bible uses "forever" according to context.

It does not always mean endless duration.

A responsible Bible study lets context define the term.`,
      `3. Unquenchable fire cannot be put out until it finishes its work

Matthew says the chaff will be burned with unquenchable fire.

Unquenchable does not mean the chaff keeps burning forever.

It means no one can stop the fire from fully consuming it.

Jeremiah used similar language about Jerusalem's gates and palaces.

The fire would not be quenched, but Jerusalem is not still burning today.

The fire completed its work.`,
      `4. Final judgment language points to complete destruction

When the Bible describes the end of the wicked, the language consistently points to finality.

Ashes.

Consumed.

Perish.

Destroy.

Second death.

These words tell us the result.

Evil is not preserved.

The lost are not kept alive forever in torment.

Sin is brought to an irreversible end.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Eternal',
      lemma: 'αἰώνιος',
      transliteration: 'aionios',
      meaning:
        'Lasting, permanent, age-long, or having an irreversible result, depending on context.',
      strongs: 'G166',
      reference: 'Jude 7',
      note: `In final judgment passages, eternal can describe the permanent result of judgment rather than the endless duration of the burning process.

The fire that destroyed Sodom was eternal in consequence, not still burning in duration.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `This lesson is where a lot of theological fog clears.

The question is not:

"What does the English word forever sound like to me?"

The better question is:

"How does Scripture use this language?"

And Scripture gives us examples.

Jonah's "forever" lasted three days.

Samuel's "forever" meant as long as he lived.

Sodom's "eternal fire" turned the cities into ashes.

Jerusalem's "unquenchable fire" burned until its work was done.

That means when the Bible speaks of eternal fire or unquenchable fire in final judgment, we should not automatically import endless conscious torment.

We should read the language through Scripture's own patterns.

The final judgment is eternal because the result is eternal.

The second death has no resurrection after it.

The destruction is final.

The outcome cannot be reversed.

That is serious enough without turning God into an eternal torturer.`,
    },
    studyInsightBlocks: [
      {
        type: 'foreverLanguageExplainer',
        title: 'How Scripture Uses Forever Language',
        caption: 'In Scripture, final judgment language points to complete and irreversible results.',
        highlightedIndices: [3, 4],
      },
      {
        type: 'scriptureChain',
        title: 'Forever, Eternal, and Unquenchable Fire',
        references: [
          { reference: 'Jonah 2:6' },
          { reference: '1 Samuel 1:22, 28' },
          { reference: 'Exodus 21:6' },
          { reference: 'Jude 7' },
          { reference: '2 Peter 2:6' },
          { reference: 'Matthew 3:12' },
          { reference: 'Jeremiah 17:27' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: The Bible uses words like forever, eternal, and unquenchable to describe complete and irreversible results, not endless conscious torment.',
      },
    ],
    reflectPrompt: `How does Scripture's use of forever, eternal, and unquenchable change how you understand final judgment?

Think about context, Sodom becoming ashes, Jonah's "forever," unquenchable fire finishing its work, and whether the Bible's language points to endless torment or complete destruction.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, practice reading difficult Bible words in context.

Choose one word:

Forever.

Eternal.

Unquenchable.

Then look at how Scripture uses it in more than one passage.

Ask:

"What does the immediate context say?"

"How does another Bible passage use the same word?"

"What result is being described?"

"Am I reading Scripture carefully or repeating an assumption?"

Do not build doctrine from one word isolated from context.

That is how theological spaghetti gets made.

Let Scripture interpret Scripture.

Prayer:

Father, teach me to study Your Word carefully and humbly. Help me understand difficult language through Scripture itself. Deliver me from fear-based assumptions and inherited confusion. Show me the beauty of Your justice, the clarity of Your truth, and the love revealed in Jesus. Amen.`,
    prayer: '',
    completionSummary:
      'Scripture uses forever, eternal, and unquenchable language to describe complete and irreversible results. Final judgment ends evil instead of preserving suffering forever.',
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'toe-l5-q1',
          prompt: 'According to Jude 7, what example is given of eternal fire?',
          options: [
            'Sodom and Gomorrah',
            'The New Jerusalem',
            'The Garden of Eden',
            'Mount Sinai only',
          ],
          correctIndex: 0,
          explanation:
            'Jude says Sodom and Gomorrah are examples of suffering the vengeance of eternal fire.',
        },
        {
          id: 'toe-l5-q2',
          prompt: 'According to 2 Peter 2:6, what happened to Sodom and Gomorrah?',
          options: [
            'They were turned into ashes',
            'They kept burning forever visibly',
            'They became the New Jerusalem',
            'They escaped judgment completely',
          ],
          correctIndex: 0,
          explanation:
            'Peter says Sodom and Gomorrah were turned into ashes, showing that eternal fire produced complete destruction.',
        },
        {
          id: 'toe-l5-q3',
          prompt: 'In Jonah 2:6, Jonah used "forever" to describe what experience?',
          options: [
            'His time in the depths before God delivered him',
            'Endless conscious torment',
            'Eternal life in heaven',
            'A thousand-year reign',
          ],
          correctIndex: 0,
          explanation:
            'Jonah used "forever" to describe his experience in the depths, though the broader story shows he was delivered after three days.',
        },
        {
          id: 'toe-l5-q4',
          prompt: 'What does "unquenchable fire" mean in biblical usage?',
          options: [
            'A fire no one can put out until it finishes its work',
            'A fire that must keep victims alive forever',
            'A symbolic fire with no result',
            'A fire controlled by human beings',
          ],
          correctIndex: 0,
          explanation:
            'Unquenchable fire is fire that cannot be extinguished before it completes its work.',
        },
        {
          id: 'toe-l5-q5',
          kind: 'reflection',
          prompt: 'What is one Bible word you need to study more carefully in context?',
          explanation:
            "Difficult judgment language should be interpreted by Scripture's own usage, not by fear or tradition.",
        },
      ],
    },
  },
  'the-second-death': {
    openingThought: `Revelation does not call the lake of fire eternal life in torment.

It calls it the second death.

That phrase matters.

The first death is temporary because resurrection follows.

The second death is final because no resurrection follows.

This is the final and irreversible end of sin, Satan, death, and rebellion.

God is not keeping evil alive forever.

He is ending it.

The second death is serious. No one should treat it lightly.

But it is also clear.

It is death.

Not eternal survival in suffering.

Not immortal rebellion.

Not endless pain preserved somewhere in God's universe.

The lake of fire is the final destruction of everything that destroys love, freedom, and life.`,
    scriptureRef: 'Revelation 20:14',
    scriptureQuote: `And death and hell were cast into the lake of fire.

This is the second death.`,
    scriptureAfterPrimary: `Revelation defines the lake of fire as the second death. It is final, irreversible destruction.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Revelation 20:9',
        quote: `And they went up on the breadth of the earth, and compassed the camp of the saints about, and the beloved city.

And fire came down from God out of heaven, and devoured them.`,
      },
      {
        type: 'scripture',
        reference: 'Revelation 20:15',
        quote: `And whosoever was not found written in the book of life was cast into the lake of fire.`,
      },
      {
        type: 'scripture',
        reference: 'Ezekiel 28:18-19',
        quote: `Therefore will I bring forth a fire from the midst of thee, it shall devour thee.

And never shalt thou be any more.`,
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
        quote: `And ye shall tread down the wicked; for they shall be ashes under the soles of your feet.`,
      },
      {
        type: 'scripture',
        reference: 'Matthew 10:28',
        quote: `Fear him which is able to destroy both soul and body in hell.`,
      },
      {
        type: 'scripture',
        reference: 'Nahum 1:9',
        quote: `Affliction shall not rise up the second time.`,
      },
    ],
    teachingPoints: [
      `1. The lake of fire is the second death

Revelation gives the definition.

The lake of fire is the second death.

That means we should not redefine it as endless conscious life in torment.

The Bible names it death.

The second death is final, irreversible destruction.

It is the end of those who reject the only Source of life.`,
      `2. Fire devours the final rebellion

Revelation says fire comes down from God and devours the wicked.

Devours means consumes.

It does not mean preserves alive forever.

The final rebellion surrounds the beloved city, and God brings it to a complete end.

This is judgment, but it is not eternal torture.

It is the destruction of evil.`,
      `3. Satan himself will be brought to an end

Ezekiel says the fallen covering cherub will be devoured and will never be anymore.

That means Satan will not live forever as God's eternal enemy.

There will be no eternal dualism.

No endless conflict.

No everlasting rebellion in some dark corner of creation.

Satan's end is final.

The enemy who introduced sin will be destroyed.`,
      `4. The wicked become ashes

Malachi says the wicked become stubble and then ashes.

This language is clear.

Stubble is burned up.

Ashes are what remain after something is consumed.

The Bible is not picturing endless conscious torment.

It is picturing complete destruction.

The wicked do not continue forever as immortal sufferers.

They perish.`,
      `5. Evil will not rise again

Nahum says affliction will not rise up the second time.

This is the beautiful conclusion.

God's judgment works.

Evil is ended so completely that it never returns.

The second death is final because the universe must be fully healed, safe, and free.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Second Death',
      lemma: 'δεύτερος θάνατος',
      transliteration: 'deuteros thanatos',
      meaning: 'The final, irreversible death from which there is no resurrection.',
      strongs: 'G2288',
      reference: 'Revelation 20:14',
      note: `The second death is the final destruction of sin, Satan, death, and rebellion.

It is not eternal conscious torment. It is the complete end of evil so God's restored universe can be free forever.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The second death helps us understand the lake of fire without fear-based distortion.

Revelation says:

Fire devours.

Death and hell are cast into the lake of fire.

This is the second death.

The wicked not found in the book of life are cast into the lake of fire.

That is serious.

But it is also coherent.

The lake of fire destroys death.

It does not preserve death forever.

It ends hell.

It does not keep hell alive forever.

It devours rebellion.

It does not immortalize rebellion.

This matters because the final judgment must match the final promise:

No more death.

No more sorrow.

No more crying.

No more pain.

If eternal torment continued forever, then pain would continue forever.

But Revelation says pain ends.

Death ends.

Evil ends.

God wins completely.`,
    },
    studyInsightBlocks: [
      {
        type: 'secondDeathExplainer',
        title: 'The Second Death',
        caption:
          'The lake of fire is called the second death because it brings evil to a complete and irreversible end.',
        highlightedIndices: [2, 3, 4],
      },
      {
        type: 'wagesOfSinFlow',
        title: 'The Wages of Sin',
        caption:
          'The Bible\u2019s consistent language is death, perishing, destruction, and ashes, not endless conscious torment.',
        highlightedIndices: [4],
      },
      {
        type: 'scriptureChain',
        title: 'The Second Death',
        references: [
          { reference: 'Revelation 20:9-15' },
          { reference: 'Ezekiel 28:18-19' },
          { reference: 'Malachi 4:1-3' },
          { reference: 'Matthew 10:28' },
          { reference: 'Nahum 1:9' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: The lake of fire is the second death, the final and irreversible destruction of sin, Satan, and rebellion.',
      },
    ],
    reflectPrompt: `How does the phrase "second death" clarify what God finally does with evil?

Think about death, destruction, ashes, Satan's final end, the end of pain, and why God's restored universe cannot contain eternal suffering.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, stop treating sin like it is harmless.

The second death shows where sin leads when it is fully grown.

Ask:

"What sin am I minimizing?"

"What lie am I excusing?"

"What destructive pattern am I calling normal?"

"What is God trying to end in me before it destroys more?"

"What would surrender look like today?"

Then take one serious step.

Confess honestly.

Remove the trigger.

Ask for accountability.

Make the hard phone call.

Choose repentance over excuses.

Sin is not your friend.

It is a terrible landlord with hidden fees and no maintenance department.

Jesus is not trying to take life from you.

He is trying to save you from what ends in death.

Prayer:

Father, thank You for revealing the truth about the second death. Help me see sin clearly and stop making peace with what destroys life. Thank You that Jesus offers eternal life as a gift. Lead me into repentance, freedom, and trust. End every rebellion in my heart and prepare me for the world where death will be no more. Amen.`,
    prayer: '',
    completionSummary:
      'The lake of fire is the second death. God will bring sin, Satan, death, and rebellion to a complete and irreversible end so evil never rises again.',
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'toe-l6-q1',
          prompt: 'According to Revelation 20:14, what is the lake of fire?',
          options: [
            'The second death',
            'Eternal life in torment',
            'The first resurrection',
            'The new earth',
          ],
          correctIndex: 0,
          explanation: 'Revelation defines the lake of fire as the second death.',
        },
        {
          id: 'toe-l6-q2',
          prompt: 'According to Revelation 20:9, what does the fire from God do?',
          options: [
            'Devours the final rebellion',
            'Preserves evil forever',
            'Creates eternal life for the wicked',
            'Saves Satan',
          ],
          correctIndex: 0,
          explanation:
            'Revelation says fire comes down from God and devours those who surround the beloved city.',
        },
        {
          id: 'toe-l6-q3',
          prompt: "According to Ezekiel 28:19, what is Satan's final end?",
          options: [
            'He shall never be anymore',
            'He will rule forever',
            'He will keep deceiving forever',
            'He will become immortal in rebellion',
          ],
          correctIndex: 0,
          explanation:
            'Ezekiel says the fallen covering cherub will be brought to an end and will never be anymore.',
        },
        {
          id: 'toe-l6-q4',
          prompt: 'According to Malachi 4:3, what will the wicked become?',
          options: ['Ashes', 'Eternal rulers', 'Immortal sinners', 'Angels'],
          correctIndex: 0,
          explanation:
            'Malachi says the wicked will be ashes under the soles of the feet of the redeemed.',
        },
        {
          id: 'toe-l6-q5',
          kind: 'reflection',
          prompt:
            'What is one sin or destructive pattern Jesus is calling you to surrender before it hardens your heart?',
          explanation:
            'The second death shows the final result of sin. God calls us to surrender now so we can receive life in Christ.',
        },
      ],
    },
  },
  'no-more-death': {
    openingThought: `The Bible's final picture is not eternal screaming.

It is no more death.

That matters.

God does not end the story with evil preserved forever.

He ends the story with evil gone.

No more death.

No more sorrow.

No more crying.

No more pain.

No more curse.

No more fear.

No more rebellion.

This is why the biblical teaching on the end of evil is so powerful.

God's justice does not keep sin alive forever.

God's love destroys what destroys love.

The final judgment clears the universe for restoration.

The end of evil is not the end of hope.

It is the beginning of a world where nothing can hurt God's creation again.`,
    scriptureRef: 'Revelation 21:4',
    scriptureQuote: `And God shall wipe away all tears from their eyes.

And there shall be no more death, neither sorrow, nor crying, neither shall there be any more pain.

For the former things are passed away.`,
    scriptureAfterPrimary: `Revelation promises a restored creation with no more death, sorrow, crying, or pain.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Revelation 21:1-5',
        quote: `And I saw a new heaven and a new earth.

And he that sat upon the throne said, Behold, I make all things new.`,
      },
      {
        type: 'scripture',
        reference: 'Revelation 22:1-3',
        quote: `And he shewed me a pure river of water of life, clear as crystal.

And there shall be no more curse.`,
      },
      {
        type: 'scripture',
        reference: '2 Peter 3:13',
        quote: `Nevertheless we, according to his promise, look for new heavens and a new earth, wherein dwelleth righteousness.`,
      },
      {
        type: 'scripture',
        reference: 'Ezekiel 33:11',
        quote: `As I live, saith the Lord GOD, I have no pleasure in the death of the wicked.

But that the wicked turn from his way and live.`,
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
        quote: `Affliction shall not rise up the second time.`,
      },
    ],
    teachingPoints: [
      `1. God's final world has no more death

Revelation says there will be no more death.

That is not symbolic fluff.

That is the final result of God ending sin.

Death came because of sin.

When sin is fully destroyed, death disappears with it.

If the lost were kept alive forever in conscious torment, death would not truly be gone.

Pain would not truly be gone.

Sorrow would not truly be gone.

But Scripture says those things end.

God's restored universe contains no eternal pocket of misery.`,
      `2. God wipes away every tear

Revelation says God Himself wipes away tears.

That shows the tenderness of His character.

Final judgment is not detached.

God knows the cost of sin.

He knows the grief of the redeemed.

He knows every wound, every loss, every question, every cry.

And after evil is ended, God personally comforts His people.

The God who judges is also the God who wipes tears.`,
      `3. The former things pass away

Revelation says the former things are passed away.

That includes the entire old order of sin, death, suffering, rebellion, and separation.

God is not renovating evil.

He is ending it.

He is not placing a fresh coat of paint over a rotten structure.

He makes all things new.

The old world of pain does not continue forever.

It passes away.`,
      `4. God's judgments are just and true

Revelation 15 says God's judgments are made manifest, and the redeemed declare His ways just and true.

That means the end of evil will not leave the universe suspicious of God.

The record will be clear.

The truth will be seen.

God's character will be vindicated.

Every honest question will be answered.

The redeemed will not say, "God was harsh."

They will say, "Just and true are Your ways."`,
      `5. Affliction will not rise again

Nahum says affliction will not rise up the second time.

This is one of the most comforting promises in Scripture.

Evil will not restart.

Sin will not return.

The universe will not repeat the nightmare.

God's solution is complete.

Love wins without coercion.

Freedom remains without rebellion.

Creation is safe forever.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Restoration',
      lemma: 'ἀποκατάστασις',
      transliteration: 'apokatastasis',
      meaning:
        "The act of bringing something back to wholeness, healing, beauty, and God's intended purpose.",
      strongs: 'G605',
      reference: 'Revelation 21:5',
      note: `The end of evil is not only about destruction.

It is about restoration.

God removes sin, death, and rebellion so creation can be fully healed and filled with His presence forever.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The End of Evil has shown one clear biblical pattern:

God is love.

God does not delight in the death of the wicked.

Torture is incompatible with His character.

The wages of sin is death.

The wicked perish.

Immortality is a gift through Christ.

Forever and eternal judgment language points to irreversible results.

The lake of fire is the second death.

Death itself is destroyed.

God makes all things new.

This is a much more beautiful and biblical picture than eternal torment.

It does not weaken judgment.

It clarifies judgment.

Sin is serious because it ends in death.

Grace is glorious because eternal life is a gift.

God is just because He deals with evil truthfully.

God is merciful because He does not preserve suffering forever.

God is love because He finally removes everything that destroys life.

The final word is not torment.

The final word is restoration.`,
    },
    studyInsightBlocks: [
      {
        type: 'endOfEvilStudyRecap',
        title: 'The End of Evil',
        caption: 'God is love even in the way He brings evil to its final end.',
        highlightedIndices: [4],
      },
      {
        type: 'endOfEvilCoreContrast',
        title: 'Two Pictures of Final Judgment',
        caption: 'God\u2019s final judgment does not preserve evil forever. It brings evil to a complete end.',
        highlightedIndices: [4],
      },
      {
        type: 'secondDeathExplainer',
        title: 'The Second Death',
        caption:
          'The lake of fire is called the second death because it brings evil to a complete and irreversible end.',
        highlightedIndices: [4],
      },
      {
        type: 'godsHeartInJudgment',
        title: 'God\u2019s Heart in Judgment',
        caption: 'Final judgment must be understood through the love of God revealed in Jesus.',
      },
      {
        type: 'scriptureChain',
        title: 'No More Death',
        references: [
          { reference: 'Revelation 21:1-5' },
          { reference: 'Revelation 22:1-5' },
          { reference: '2 Peter 3:13' },
          { reference: 'Ezekiel 33:11' },
          { reference: 'Revelation 15:3-4' },
          { reference: 'Nahum 1:9' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: God ends evil completely so the new earth can be free from death, sorrow, crying, pain, and fear forever.',
      },
    ],
    reflectPrompt: `What gives you the most hope about God's promise that there will be no more death?

Think about grief, fear, suffering, false pictures of God, the end of pain, the end of evil, and the promise that God will make all things new.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, let the promise of "no more death" confront one fear you carry.

Ask:

"What fear has been shaping my view of God?"

"What pain have I assumed will last forever?"

"What false picture of judgment do I need to release?"

"What does Revelation 21:4 tell me about God's final plan?"

"What would change if I believed God's love will fully end evil?"

Then choose one action:

Read Revelation 21 slowly.

Comfort someone grieving.

Stop repeating fear-based theology.

Share the hope that evil will end.

Pray honestly about a painful question.

Thank God that He will make all things new.

Do not let a distorted doctrine of hell steal the beauty of God's character.

God is not preserving evil.

He is ending it.

Prayer:

Father, thank You that Your final plan is no more death, sorrow, crying, or pain. Thank You that You do not preserve evil forever, but bring it to a complete end. Heal every fear-based picture I have of You. Help me trust Your justice, mercy, and love. Teach me to live with hope in the promise that You will make all things new. Amen.`,
    prayer: '',
    completionSummary:
      'God ends evil completely so creation can be restored with no more death, sorrow, crying, or pain.',
    seriesCompleteScreen: {
      title: 'Study Complete',
      message:
        'You have completed The End of Evil. God is love even in final judgment. He brings sin, Satan, death, and rebellion to a complete end so creation can be restored with no more death, sorrow, crying, or pain.',
      primaryCta: { label: 'Back to Foundations Path', href: '/paths/foundations' },
      secondaryCta: {
        label: 'Review this study',
        href: '/study-library/the-end-of-evil',
      },
    },
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'toe-l7-q1',
          prompt: 'According to Revelation 21:4, what will be no more?',
          options: [
            'Death, sorrow, crying, and pain',
            "God's love",
            'Worship',
            'Righteousness',
          ],
          correctIndex: 0,
          explanation:
            'Revelation says there will be no more death, sorrow, crying, or pain because the former things have passed away.',
        },
        {
          id: 'toe-l7-q2',
          prompt: 'According to Revelation 21:5, what does God say He will do?',
          options: [
            'Make all things new',
            'Preserve evil forever',
            'Keep death alive forever',
            'Hide His justice',
          ],
          correctIndex: 0,
          explanation:
            'God declares, "Behold, I make all things new," showing His final purpose is restoration.',
        },
        {
          id: 'toe-l7-q3',
          prompt: 'According to Revelation 22:3, what will no longer exist?',
          options: ['The curse', 'The water of life', 'The throne of God', 'The Lamb'],
          correctIndex: 0,
          explanation: 'Revelation says there will be no more curse in the restored creation.',
        },
        {
          id: 'toe-l7-q4',
          prompt: 'According to Nahum 1:9, what will not happen a second time?',
          options: [
            'Affliction will not rise up again',
            'Evil will rule forever',
            'Death will restart',
            'God will abandon creation',
          ],
          correctIndex: 0,
          explanation:
            'Nahum says affliction will not rise up the second time, showing that evil will be ended completely.',
        },
        {
          id: 'toe-l7-q5',
          kind: 'reflection',
          prompt:
            'What fear-based picture of God do you need to replace with the promise of Revelation 21:4?',
          explanation:
            'The end of evil reveals God\u2019s love. He does not preserve suffering forever. He ends sin, death, and pain so creation can be restored.',
        },
      ],
    },
  },
}
