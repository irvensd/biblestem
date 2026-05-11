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

const cosmicConflictLayersVisual: StudyVisualLessonBlock = {
  type: 'studyVisual',
  title: 'From heaven to rescue',
  accent: 'stone',
  description: 'A simple map of how Scripture connects unseen conflict with life on earth.',
  payload: {
    variant: 'sequence',
    steps: [
      { label: 'Heavenly conflict', subtitle: 'War in heaven: loyalty, truth, and God’s character contested.' },
      { label: 'Deception and rebellion', subtitle: 'Sin begins with turning from God’s love.' },
      { label: 'Earth affected', subtitle: 'Our world is swept into the larger story.' },
      { label: 'Jesus enters to rescue', subtitle: 'Truth and love answer darkness.' },
    ],
  },
  footnote: 'Evil began as intrusion, not as something eternal beside God.',
}

const luciferPrideFallVisual: StudyVisualLessonBlock = {
  type: 'studyVisual',
  title: 'When good becomes self-exalted',
  accent: 'sage',
  description: 'A sober progression Scripture ties to pride and rebellion.',
  payload: {
    variant: 'sequence',
    steps: [
      { label: 'Created good', subtitle: 'Made with beauty, wisdom, and a place beneath God’s love.' },
      { label: 'Heart lifted up', subtitle: 'Gifts are received without gratitude, or turned inward.' },
      { label: 'Self-exaltation', subtitle: '"I will" replaces trust; position competes with the Creator.' },
      { label: 'Rebellion', subtitle: 'Love is refused and God’s order is rejected.' },
    ],
  },
  footnote:
    'Sin often begins quietly, when worship becomes comparison and "God is good" becomes "I deserve more."',
}

const truthVersusDeceptionVisual: StudyVisualLessonBlock = {
  type: 'studyVisual',
  title: 'Accusation and revelation',
  accent: 'stone',
  description: 'A sober contrast between the enemy’s story and Jesus’ unveiling of the Father.',
  payload: {
    variant: 'comparison',
    leftTitle: 'Satan’s accusation',
    rightTitle: 'Jesus’ revelation',
    leftItems: ['God cannot be trusted.'],
    rightItems: ['God is self-giving love.'],
  },
  footnote: 'Test passing thoughts against the God Scripture shows us in Christ.',
}

const loveFreedomEvilVisual: StudyVisualLessonBlock = {
  type: 'studyVisual',
  title: 'From love to redemption',
  accent: 'sage',
  description: 'A sober flow Scripture ties to freedom, risk, rebellion, and Christ’s answer.',
  payload: {
    variant: 'sequence',
    steps: [
      { label: 'Love', subtitle: 'God’s character grounds reality; He is not the author of evil.' },
      { label: 'Freedom', subtitle: 'Real love must be freely given, not programmed or forced.' },
      { label: 'Risk', subtitle: 'Freedom includes the possibility of choosing wrongly.' },
      {
        label: 'Rebellion possible',
        subtitle: 'Created beings may turn freedom against love, as with Lucifer and humanity.',
      },
      { label: 'Redemption through Christ', subtitle: 'God responds to rebellion not with abandonment, but with rescue.' },
    ],
  },
  footnote:
    'Love requires freedom. Freedom allows risk. Risk makes rebellion possible. God’s answer is redemption.',
}

const forcedVersusFreelyChosenLoveVisual: StudyVisualLessonBlock = {
  type: 'studyVisual',
  title: 'Love and obedience',
  accent: 'stone',
  description: 'Scripture distinguishes forced performance from freely given love.',
  payload: {
    variant: 'comparison',
    leftTitle: 'Forced obedience',
    rightTitle: 'Free love',
    leftItems: ['No real love'],
    rightItems: ['Real relationship'],
  },
  footnote: 'God wanted relationship that could say yes, not machinery that could only run.',
}

const enemyWorksVsJesusVictoryVisual: StudyVisualLessonBlock = {
  type: 'studyVisual',
  title: 'What Jesus came to overturn',
  accent: 'sky',
  description: 'A calm contrast between the kingdom of darkness and Christ’s victorious work.',
  payload: {
    variant: 'comparison',
    leftTitle: 'Enemy’s works',
    rightTitle: 'Jesus’ work',
    leftItems: ['lies', 'fear', 'bondage', 'death'],
    rightItems: ['truth', 'love', 'freedom', 'life'],
  },
  footnote: 'Jesus confronts darkness with humility, sacrifice, and self-giving love.',
}

const nowVersusThenRestorationVisual: StudyVisualLessonBlock = {
  type: 'studyVisual',
  title: 'The world now and God’s promise',
  accent: 'sage',
  description: 'Revelation and the prophets sketch how suffering ends under God’s rule.',
  payload: {
    variant: 'comparison',
    leftTitle: 'Now',
    rightTitle: 'Then',
    leftItems: ['death', 'sorrow', 'crying', 'pain'],
    rightItems: ['life', 'joy', 'peace', 'restoration'],
  },
  footnote: 'Hope is anchored in Scripture, not denial of pain.',
}

/** Guided reader: "War in Heaven" (Foundations). Shell lessons fill in here over time. */
export const warInHeavenSeriesLessonLibrary: Record<string, LessonReaderContent> = {
  'a-conflict-bigger-than-earth': {
    openingThought: `Most people look at evil and ask, “What is wrong with the world?”

The Bible pushes the question deeper.

It shows us that the pain, deception, violence, and selfishness we see on earth are not random accidents. They are part of a larger conflict between good and evil, truth and lies, love and rebellion.

This conflict did not begin with humanity.

Before sin entered this world, there was a rebellion in heaven. Scripture pulls back the curtain and shows us that earth is connected to a much bigger story.

That may sound intense, but it also gives us hope.

If evil had a beginning, then evil can have an ending.`,
    scriptureRef: 'Revelation 12:7',
    scriptureQuote: `And there was war in heaven: Michael and his angels fought against the dragon; and the dragon fought and his angels.`,
    scriptureSecondaryRef: 'Ephesians 6:12',
    scriptureSecondaryQuote: `For we wrestle not against flesh and blood, but against principalities, against powers, against the rulers of the darkness of this world.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Hebrews 1:14',
        quote: `Are they not all ministering spirits, sent forth to minister for them who shall be heirs of salvation?`,
      },
    ],
    teachingPoints: [
      `1. The Bible reveals an unseen conflict

Scripture does not present our world as isolated. Behind the visible struggles of human life, there is an unseen spiritual conflict.

This does not mean every problem should be blamed directly on demons or spiritual forces. The Bible is more careful than that.

But it does show us that evil is bigger than human weakness alone.

There is a real conflict between God’s kingdom and the kingdom of darkness.`,
      `2. Angels are real beings in Scripture

The Bible describes angels as intelligent, powerful beings created by God.

They are not cute symbols or fantasy creatures. They appear throughout Scripture as messengers, worshipers, protectors, and servants of God.

Hebrews 1:14 says they are “ministering spirits.” This means they serve within God’s purposes and care.

Before humans existed, angels were already part of God’s created order.`,
      `3. Evil began before earth fell

Revelation 12 says there was “war in heaven.”

That means evil did not begin in a broken neighborhood, a corrupt government, or a human family tree.

The roots go deeper.

Sin began as rebellion against God in heaven. Earth became part of that conflict later.`,
      `4. The issue is not just power. It is trust.

When the Bible describes this war, it is not only describing force. It is revealing a conflict over loyalty, truth, and the character of God.

Can God be trusted?

Is His way of love truly good?

Is His government fair?

Those questions sit underneath the entire story of Scripture.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: 'The Greek behind “war” in Revelation 12:7 is worth a calm look.',
    wordStudy: {
      surface: 'War',
      lemma: 'πόλεμος (polemos)',
      transliteration: 'polemos',
      meaning:
        'The word translated “war” is connected to conflict, battle, and struggle. It can describe more than physical fighting.',
      strongs: 'G4171',
      reference: 'Revelation 12:7',
      note: `The war in heaven was not only about strength. It was a conflict over truth, loyalty, and the character of God.

Satan’s weapon was deception.

God’s answer is truth revealed through love.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'doctrine_clarity',
      body: `Revelation 12 gives us one of the Bible’s clearest glimpses behind the curtain.

It tells us that evil is not eternal. Evil is not equal with God. Evil is not something God needed in order to be God.

Evil began when created beings turned away from God’s love and chose rebellion.

That matters because it protects us from blaming God for the darkness He is working to destroy.

The Bible does not say God created evil.

It says war broke out in heaven.

This means evil is an intruder in God’s universe. It has no rightful place here.`,
    },
    studyInsightBlocks: [
      cosmicConflictLayersVisual,
      {
        type: 'scriptureChain',
        title: 'The Bigger Conflict',
        references: [
          { reference: 'Revelation 12:7' },
          { reference: 'Revelation 12:9' },
          { reference: 'Ephesians 6:12' },
          { reference: '1 John 3:8' },
        ],
      },
      {
        type: 'paragraph',
        text: `Takeaway: The Bible shows that evil is part of a larger conflict, but Jesus came to destroy the works of the devil and restore God’s creation.`,
      },
    ],
    reflectPrompt: `When you look at the evil and suffering in the world, what question do you most often find yourself asking God?

Be honest. This is not about giving the “right” answer. It is about bringing your real questions into the light of Scripture.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, do not reduce every struggle to what you can see.

There may be more happening than what appears on the surface.

When you face confusion, temptation, fear, or discouragement, pause and ask:

“What truth about God do I need to remember right now?”

The conflict is real, but you are not left alone in it.

God has not abandoned the world to darkness. Jesus has entered the story, and He is leading us back to truth, love, and life.

Prayer

Father, help me understand the conflict behind the pain I see in the world. Teach me not to blame You for evil, but to trust that You are working to defeat it. Open my eyes to Your truth. Keep my heart close to Jesus, and help me stand on the side of love. Amen.`,
    prayer: '',
    completionSummary: `You have started to see the bigger picture. Evil is real, but it is not eternal. The conflict began before us, but Jesus has entered the story to rescue us.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'wih-l1-q1',
          prompt: 'According to Revelation 12:7, where did war break out?',
          options: ['In Egypt', 'In heaven', 'In Jerusalem', 'In the wilderness'],
          correctIndex: 1,
          explanation:
            'Revelation 12:7 says there was war in heaven, showing that the conflict between good and evil began before earth became involved.',
        },
        {
          id: 'wih-l1-q2',
          prompt: 'What does Ephesians 6:12 teach us?',
          options: [
            'All problems are imaginary',
            'Our struggle is only against people',
            'There is an unseen spiritual conflict',
            'Angels are not real',
          ],
          correctIndex: 2,
          explanation:
            'Ephesians 6:12 explains that our struggle is not merely against flesh and blood, but includes unseen spiritual powers.',
        },
        {
          id: 'wih-l1-q3',
          prompt: 'What are angels described as in Hebrews 1:14?',
          options: ['Ministering spirits', 'Human souls', 'Myths', 'Symbols of nature'],
          correctIndex: 0,
          explanation:
            'Hebrews 1:14 describes angels as ministering spirits who serve within God’s purposes.',
        },
        {
          id: 'wih-l1-q4',
          prompt: 'What is one major issue at the center of the conflict between good and evil?',
          options: [
            'Whether humans are stronger than angels',
            'Whether God’s character can be trusted',
            'Whether heaven is a physical place',
            'Whether evil is stronger than God',
          ],
          correctIndex: 1,
          explanation:
            'The conflict is deeply connected to trust in God’s character, His love, and His way of governing.',
        },
        {
          id: 'wih-l1-q5',
          kind: 'reflection',
          prompt: 'How does it change your view of suffering to know that evil did not begin with God, but with rebellion against Him?',
          explanation:
            'This reflection helps the learner connect the doctrine of the cosmic conflict with real questions about pain, trust, and God’s character.',
        },
      ],
    },
  },
  'the-rise-of-lucifer': {
    openingThought: `Evil did not begin as something ugly.

That is one of the most sobering truths in Scripture.

The rebellion against God did not start with someone who looked obviously dangerous. It began with a created being who was gifted, honored, and close to God.

Lucifer was not created evil.

He was created beautiful, wise, and full of purpose. But something changed inside him. The gift became a reason for pride. The position became a reason for self-exaltation. The heart that was made to reflect God began to turn inward.

This lesson helps us understand how evil could begin in a perfect place.`,
    scriptureRef: 'Ezekiel 28:15',
    scriptureQuote: `Thou wast perfect in thy ways from the day that thou wast created, till iniquity was found in thee.`,
    scriptureSecondaryRef: 'Isaiah 14:12 to 14',
    scriptureSecondaryQuote: `How art thou fallen from heaven, O Lucifer, son of the morning! how art thou cut down to the ground, which didst weaken the nations!

For thou hast said in thine heart, I will ascend into heaven, I will exalt my throne above the stars of God: I will sit also upon the mount of the congregation, in the sides of the north:

I will ascend above the heights of the clouds; I will be like the most High.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Ezekiel 28:17',
        quote: `Thine heart was lifted up because of thy beauty, thou hast corrupted thy wisdom by reason of thy brightness.`,
      },
    ],
    teachingPoints: [
      `1. Lucifer was created good

The Bible does not teach that God created Satan as Satan.

Lucifer was created by God with beauty, intelligence, and purpose. Ezekiel describes him as “perfect” in his ways until iniquity was found in him.

That means evil was not built into him by God.

Sin began through a choice.`,
      `2. Pride began in the heart

Ezekiel says Lucifer’s heart was lifted up because of his beauty.

The problem was not beauty itself. The problem was what he did with it.

Instead of receiving his gifts with gratitude, he began to treat them as reasons for self-exaltation.

This is where pride becomes dangerous.

Pride takes what God gave and uses it to compete with God.`,
      `3. Lucifer wanted God’s position

Isaiah 14 shows the language of self-exaltation:

“I will ascend.”

“I will exalt my throne.”

“I will be like the most High.”

Lucifer did not simply want to serve near God. He wanted to rise above the place God had given him.

His desire shifted from reflecting God to replacing God.`,
      `4. Sin is irrational, but not random

There is no good reason for sin.

Lucifer was not mistreated. He was not neglected. He was not created broken.

But freedom allowed him to choose a direction away from love.

Sin does not make sense because sin is a departure from truth.

It begins when the heart trusts self more than God.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: 'The name tied to this figure is often heard, but Scripture points past the label to the heart behind it.',
    wordStudy: {
      surface: 'Lucifer',
      lemma: 'הֵילֵל (helel)',
      transliteration: 'helel',
      meaning: 'Often understood as light-bearer or morning star (see context in Isaiah 14:12, KJV).',
      strongs: 'H1966',
      reference: 'Isaiah 14:12',
      note: `Lucifer was created to reflect light, not steal glory.

His fall shows what happens when a created being stops receiving identity from God and starts building identity around self.

The tragedy is not just that Lucifer fell.

The tragedy is that a being made to reveal light became a source of darkness.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'doctrine_clarity',
      body: `The Bible’s picture of Lucifer matters because it protects God’s character.

If God created Satan evil, then God would be responsible for evil.

But Scripture shows something different.

Lucifer was created good. He was given freedom. He used that freedom to turn inward, exalt himself, and rebel against God’s order of love.

This helps us understand the difference between God allowing freedom and God causing evil.

Love cannot exist without freedom.

But freedom can be misused.

Lucifer’s story warns us that sin often begins quietly. It begins when the heart stops worshiping and starts comparing. It begins when gifts become identity. It begins when “God is good” gets replaced with “I deserve more.”`,
    },
    studyInsightBlocks: [
      luciferPrideFallVisual,
      {
        type: 'scriptureChain',
        title: 'The Fall of Lucifer',
        references: [
          { reference: 'Ezekiel 28:15' },
          { reference: 'Ezekiel 28:17' },
          { reference: 'Isaiah 14:12 to 14' },
          { reference: 'Revelation 12:9' },
        ],
      },
      {
        type: 'paragraph',
        text: `Takeaway: Lucifer was created good, but pride and self-exaltation led him away from God and into rebellion.`,
      },
    ],
    reflectPrompt: `Where are you most tempted to build your identity around your gifts, appearance, success, knowledge, or position instead of receiving your identity from God?

This question is not meant to shame you. It is meant to help you notice where pride can quietly begin.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `Lucifer’s fall teaches us that pride does not always look loud at first.

Sometimes pride sounds like:

“I deserve more.”

“I should be above them.”

“I do not need correction.”

“I know better than God.”

This week, practice gratitude as a weapon against pride.

Name one gift God has given you, then surrender it back to Him.

Say:

“Lord, this came from You. Help me use it for love, not self-exaltation.”

The safest place for any gift is in the hands of the One who gave it.

Prayer

Father, guard my heart from pride. Help me remember that every good thing I have comes from You. Teach me to receive my gifts with gratitude and use them for love. Keep me from turning inward and trusting myself more than You. Make my life reflect Your light. Amen.`,
    prayer: '',
    completionSummary: `Lucifer’s fall shows that evil did not begin with God. It began when a created being turned from gratitude to pride, from worship to self-exaltation.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'wih-l2-q1',
          prompt: 'According to Ezekiel 28:15, how was Lucifer originally described?',
          options: [
            'Evil from the beginning',
            'Perfect in his ways until iniquity was found in him',
            'A human king only',
            'Weak and powerless',
          ],
          correctIndex: 1,
          explanation:
            'Ezekiel 28:15 shows that Lucifer was created good and became corrupt through rebellion.',
        },
        {
          id: 'wih-l2-q2',
          prompt: 'What did Ezekiel 28:17 say happened to Lucifer’s heart?',
          options: [
            'It was humbled by beauty',
            'It was lifted up because of his beauty',
            'It was destroyed immediately',
            'It became human',
          ],
          correctIndex: 1,
          explanation:
            'Ezekiel 28:17 says Lucifer’s heart was lifted up because of his beauty, showing the beginning of pride.',
        },
        {
          id: 'wih-l2-q3',
          prompt: 'What repeated phrase appears in Isaiah 14:12 to 14 that reveals Lucifer’s self-exaltation?',
          options: ['“I will”', '“God said”', '“They worshiped”', '“It is finished”'],
          correctIndex: 0,
          explanation:
            'The repeated phrase “I will” shows Lucifer’s desire to exalt himself and take a position that belonged to God.',
        },
        {
          id: 'wih-l2-q4',
          prompt: 'What does Lucifer’s fall teach us about evil?',
          options: [
            'God created evil on purpose',
            'Evil is stronger than God',
            'Evil began through the misuse of freedom',
            'Evil only exists on earth',
          ],
          correctIndex: 2,
          explanation:
            'Lucifer was created good, but he misused freedom and chose rebellion against God.',
        },
        {
          id: 'wih-l2-q5',
          kind: 'reflection',
          prompt: 'Why is gratitude an important protection against pride?',
          explanation:
            'Gratitude reminds us that our gifts come from God and are meant to be used for love, not self-exaltation.',
        },
      ],
    },
  },
  'the-war-over-gods-character': {
    openingThought: `Not every war begins with weapons.

Some wars begin with a question.

Can God be trusted?

That question sits at the center of the conflict between good and evil. Lucifer’s rebellion was not only a power struggle. It was an attack on God’s character.

If trust in God could be broken, loyalty to God would begin to weaken.

That is how deception works. It does not always start by denying God exists. Sometimes it starts by making God look selfish, unfair, controlling, or unsafe.

The war in heaven was a war over who God really is.`,
    scriptureRef: 'Revelation 12:9',
    scriptureQuote: `And the great dragon was cast out, that old serpent, called the Devil, and Satan, which deceiveth the whole world.`,
    scriptureSecondaryRef: 'John 8:44',
    scriptureSecondaryQuote: `He was a murderer from the beginning, and abode not in the truth, because there is no truth in him.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Romans 13:10',
        quote: `Love worketh no ill to his neighbour: therefore love is the fulfilling of the law.`,
      },
    ],
    teachingPoints: [
      `1. Satan’s main weapon is deception

Revelation 12:9 describes Satan as the one who deceives the whole world.

That means his power is not only force. It is falsehood.

He works by distorting reality, twisting God’s words, and making lies feel believable.

Deception is dangerous because it does not always feel like deception while it is happening.`,
      `2. The conflict is about God’s trustworthiness

Satan’s rebellion challenged the goodness of God’s rule.

He suggested, directly or indirectly, that God could not be trusted.

This is still how temptation works.

Temptation often begins by making us question God’s heart:

“Is God really good?”

“Is His way really best?”

“Is His law holding me back?”`,
      `3. God’s law is rooted in love

Romans 13:10 says love is the fulfilling of the law.

This means God’s commands are not random restrictions. They are expressions of His character.

God does not govern through selfish control.

He governs through truth, love, and righteousness.

Satan’s goal is to make God’s law look like bondage, when Scripture presents it as the shape of love.`,
      `4. Lies about God lead to rebellion against God

When people believe God is harsh, selfish, distant, or controlling, their hearts naturally pull away from Him.

That is why the enemy attacks God’s character.

If he can damage your view of God, he can weaken your trust in God.

But Jesus came to show us the truth.

God is not like the enemy says He is.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: 'The name Satan is more than folklore. Scripture names the adversary and names his aim.',
    wordStudy: {
      surface: 'Satan',
      lemma: 'שָׂטָן (śāṭān)',
      transliteration: 'śāṭān',
      meaning: 'Adversary or opponent; one who withstands or accuses.',
      strongs: 'H7854',
      reference: 'Revelation 12:9',
      note: `Satan is not merely a symbol of bad behavior. Scripture presents him as the adversary who opposes God by spreading deception.

His attack is aimed at trust.

If he can make God look unsafe, he can make rebellion look reasonable.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'doctrine_clarity',
      body: `The war in heaven was not mainly about who had more strength.

God is Creator. Lucifer was created.

There was never a question of equal power.

The deeper issue was trust.

Would created beings believe God’s character was truly love?

Would they believe His law was good?

Would they trust that His way of life was the only path to freedom and joy?

This is why Jesus matters so much.

Jesus did not come only to forgive sins. He came to reveal the Father.

Every healing, every act of mercy, every word of truth, every moment of patience showed what God is really like.

At the cross, Satan’s accusations were exposed. God’s love was revealed, not as a theory, but as self-giving sacrifice.`,
    },
    studyInsightBlocks: [
      truthVersusDeceptionVisual,
      {
        type: 'scriptureChain',
        title: 'Truth Versus Deception',
        references: [
          { reference: 'Revelation 12:9' },
          { reference: 'John 8:44' },
          { reference: 'John 14:9' },
          { reference: 'Romans 13:10' },
        ],
      },
      {
        type: 'paragraph',
        text: `Takeaway: Satan attacks God’s character through lies, but Jesus reveals the truth about the Father.`,
      },
    ],
    reflectPrompt: `What false picture of God have you struggled with most?

Maybe you have seen God as distant, angry, impossible to please, or uninterested in your pain. Bring that picture honestly before Scripture.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, pay attention to the thoughts that shape your view of God.

When a thought makes God seem cruel, unsafe, or selfish, pause and test it against Jesus.

Ask:

“Does this match the God revealed in Christ?”

The enemy wins ground when lies go unchallenged.

Truth grows stronger when we bring our thoughts into the light of Scripture.

Prayer

Father, show me what You are truly like. Remove false pictures of You from my mind and heart. Help me see Your character through Jesus. Teach me to trust Your love, Your law, and Your way. Guard me from deception, and lead me deeper into truth. Amen.`,
    prayer: '',
    completionSummary: `The war over God’s character is a war over trust. Satan spreads lies, but Jesus reveals the truth: God is love, and His way is life.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'wih-l3-q1',
          prompt: 'According to Revelation 12:9, what does Satan do?',
          options: [
            'Deceives the whole world',
            'Creates the world',
            'Forgives sin',
            'Gives eternal life',
          ],
          correctIndex: 0,
          explanation:
            'Revelation 12:9 describes Satan as the one who deceives the whole world.',
        },
        {
          id: 'wih-l3-q2',
          prompt: 'What does John 8:44 say about the devil?',
          options: [
            'He always tells the truth',
            'There is no truth in him',
            'He created angels',
            'He is equal with God',
          ],
          correctIndex: 1,
          explanation:
            'Jesus said there is no truth in the devil, showing that deception is central to his character and work.',
        },
        {
          id: 'wih-l3-q3',
          prompt: 'According to Romans 13:10, what fulfills the law?',
          options: ['Fear', 'Control', 'Love', 'Power'],
          correctIndex: 2,
          explanation:
            'Romans 13:10 says love is the fulfilling of the law, showing that God’s law is rooted in love.',
        },
        {
          id: 'wih-l3-q4',
          prompt: 'What was the deeper issue in the war over God’s character?',
          options: [
            'Whether God was physically strong enough',
            'Whether created beings would trust God’s goodness',
            'Whether angels needed food',
            'Whether earth existed yet',
          ],
          correctIndex: 1,
          explanation:
            'The conflict centered on trust in God’s character, His love, and His way of governing.',
        },
        {
          id: 'wih-l3-q5',
          kind: 'reflection',
          prompt: 'How does Jesus help correct false pictures of God?',
          explanation:
            'Jesus reveals the Father clearly. His life, mercy, truth, and sacrifice show what God is truly like.',
        },
      ],
    },
  },
  'why-evil-and-suffering-exist': {
    openingThought: `Few questions feel heavier than this one:

Why does evil exist?

It is not just a theological question. It is personal.

We ask it when innocent people suffer. We ask it when tragedy hits close to home. We ask it when life feels unfair and heaven feels quiet.

The Bible does not pretend evil is small. It does not ask us to ignore pain or explain away suffering.

But Scripture does give us a starting point.

Evil exists because created beings misused freedom. God created beings capable of love, and love requires the ability to choose.

That freedom made real love possible.

It also made rebellion possible.`,
    scriptureRef: '1 John 4:8',
    scriptureQuote: `He that loveth not knoweth not God; for God is love.`,
    scriptureSecondaryRef: 'Matthew 22:37 to 40',
    scriptureSecondaryQuote: `Jesus said unto him, Thou shalt love the Lord thy God with all thy heart, and with all thy soul, and with all thy mind.

This is the first and great commandment.

And the second is like unto it, Thou shalt love thy neighbour as thyself.

On these two commandments hang all the law and the prophets.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Ecclesiastes 7:29',
        quote: `God hath made man upright; but they have sought out many inventions.`,
      },
    ],
    teachingPoints: [
      `1. The Bible begins with God’s character

When Scripture says “God is love,” it is not giving us a small devotional thought.

It is telling us the foundation of reality.

God’s character is love. His law is love. His kingdom is built on love.

So any explanation of evil must begin here:

God is not the author of evil.`,
      `2. Love requires freedom

Forced love is not love.

God could have created beings who obeyed automatically, but automatic obedience is not the same as relationship.

Love must be freely given.

That means real freedom had to exist.

And real freedom includes the possibility of choosing wrongly.`,
      `3. Evil is the misuse of freedom

Evil did not arise because God lacked power.

It arose because created beings used freedom against love.

Lucifer chose self-exaltation. Humanity later chose distrust and disobedience.

The result is a world wounded by selfishness, fear, pride, violence, and death.`,
      `4. Suffering is not proof that God is absent

Suffering shows that something has gone terribly wrong.

But it does not mean God has abandoned us.

The Bible shows God entering human pain, confronting evil, and working toward restoration.

The cross proves that God does not watch suffering from a distance.

He steps into it to save us.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: 'John does not soften the claim: God’s nature is anchored in love. The Greek behind it is worth noticing.',
    wordStudy: {
      surface: 'Love',
      lemma: 'ἀγάπη (agapē)',
      transliteration: 'agape',
      meaning:
        'Self-giving, others-centered love, not mere emotion or attraction. It seeks the good of another.',
      strongs: 'G26',
      reference: '1 John 4:8',
      note: `If God is agape, then His government cannot be based on selfish control.

God’s kingdom operates through love, truth, and freedom.

Evil is the rejection of that love.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'doctrine_clarity',
      body: `Many people try to explain evil by blaming God.

But Scripture gives a different picture.

God created life good. He created beings with the ability to love. He gave freedom because love cannot exist without it.

The risk of freedom is that someone may choose selfishness instead of love.

That is what happened with Lucifer.

That is what happened with humanity.

This does not make evil good. It does not make pain necessary. It does not make suffering easy to understand.

But it does show that evil came from rebellion against God’s love, not from God’s heart.

A simple way to remember this lesson is:

Love requires freedom.
Freedom allows risk.
Risk makes rebellion possible.

But God’s answer to rebellion is not abandonment.

His answer is redemption.`,
    },
    studyInsightBlocks: [
      loveFreedomEvilVisual,
      {
        type: 'scriptureChain',
        title: 'Love, Freedom, and Evil',
        references: [
          { reference: '1 John 4:8' },
          { reference: 'Matthew 22:37 to 40' },
          { reference: 'Ecclesiastes 7:29' },
          { reference: 'Romans 5:8' },
        ],
      },
      {
        type: 'paragraph',
        text: `Takeaway: God is love, and love requires freedom. Evil began when freedom was used against love, but Christ reveals God’s plan to redeem what sin has damaged.`,
      },
    ],
    reflectPrompt: `When you think about suffering, what is harder for you to believe: that God is loving, that God is powerful, or that God is still present?

Be honest with your answer. Faith grows deeper when we bring real questions to God instead of hiding them.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, when you see evil or suffering, resist two extremes.

Do not pretend it is fine.

Do not assume God caused it.

Instead, bring it to God honestly.

Pray with open hands:

“Lord, this is painful. Help me see You clearly here.”

The Bible does not call us to deny pain. It calls us to trust God’s character in the middle of pain.

Prayer

Father, I do not always understand why suffering happens. But help me trust that evil does not come from Your heart. Teach me to see Your love clearly, even when the world feels broken. Strengthen my faith, comfort my questions, and keep me close to Jesus. Amen.`,
    prayer: '',
    completionSummary: `Evil exists because freedom was misused, not because God is unloving. Love required freedom, freedom carried risk, and Christ entered the brokenness to redeem us.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'wih-l4-q1',
          prompt: 'According to 1 John 4:8, what is God?',
          options: ['Love', 'Fear', 'Confusion', 'Darkness'],
          correctIndex: 0,
          explanation:
            '1 John 4:8 says “God is love,” which is the foundation for understanding His character.',
        },
        {
          id: 'wih-l4-q2',
          prompt: 'Why does love require freedom?',
          options: [
            'Because forced love is not real love',
            'Because God lacks power',
            'Because evil is stronger than good',
            'Because angels control human choices',
          ],
          correctIndex: 0,
          explanation:
            'Love must be freely given. Forced affection or automatic obedience is not the same as real relationship.',
        },
        {
          id: 'wih-l4-q3',
          prompt: 'According to Ecclesiastes 7:29, how did God make humanity?',
          options: ['Evil from the beginning', 'Upright', 'Unable to choose', 'Without value'],
          correctIndex: 1,
          explanation:
            'Ecclesiastes 7:29 says God made man upright, but humanity sought out many inventions.',
        },
        {
          id: 'wih-l4-q4',
          prompt: 'What is evil according to this lesson?',
          options: [
            'Something God created to teach lessons',
            'The misuse of freedom against love',
            'A force equal to God',
            'A necessary part of heaven',
          ],
          correctIndex: 1,
          explanation:
            'Evil began when created beings used freedom to turn away from God’s love.',
        },
        {
          id: 'wih-l4-q5',
          kind: 'reflection',
          prompt: 'How does the cross help you trust God’s character in a world full of suffering?',
          explanation:
            'The cross shows that God does not remain distant from suffering. Jesus entered human pain to reveal love and bring redemption.',
        },
      ],
    },
  },
  'love-freedom-and-risk': {
    openingThought: `God could have created a universe where no one could ever say no.

No rebellion.
No betrayal.
No broken trust.

But there would also be no real love.

Love cannot be programmed. It cannot be forced into existence. It must be freely given.

That means God’s creation included real freedom.

Freedom is beautiful, but freedom carries risk. A being who can choose love can also reject love. A heart that can worship can also turn inward.

This does not make God responsible for evil.

It shows that God values love enough to create beings who can freely respond to Him.`,
    scriptureRef: 'Galatians 5:22 to 23',
    scriptureQuote: `But the fruit of the Spirit is love, joy, peace, longsuffering, gentleness, goodness, faith, meekness, temperance: against such there is no law.`,
    scriptureSecondaryRef: 'James 1:17',
    scriptureSecondaryQuote: `Every good gift and every perfect gift is from above, and cometh down from the Father of lights.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Matthew 13:28',
        quote: `He said unto them, An enemy hath done this.`,
      },
    ],
    teachingPoints: [
      `1. God’s gifts are good

James 1:17 says every good and perfect gift comes from God.

Freedom was one of those gifts.

God gave created beings the ability to think, choose, love, trust, and respond.

That freedom was not a flaw in creation. It was part of what made love possible.`,
      `2. Freedom is not the same as rebellion

Some people hear about free will and assume freedom caused sin.

But freedom itself is not evil.

Freedom is the setting where love can exist.

Sin entered when created beings used freedom against God’s love.

The gift was good.

The misuse of the gift brought ruin.`,
      `3. God’s kingdom produces the fruit of love

Galatians 5 describes the fruit of the Spirit.

Love.
Joy.
Peace.
Gentleness.
Goodness.
Faithfulness.
Self-control.

This is what life looks like when God’s Spirit rules the heart.

God does not force these qualities into us. He grows them in us as we surrender to Him.`,
      `4. Evil is an enemy intrusion

In Matthew 13:28, Jesus says, “An enemy hath done this.”

That phrase matters.

Not everything painful comes from God.

Not everything broken reflects God’s will.

Evil is an invasion of God’s good creation, not an expression of God’s character.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: 'Freedom sounds simple until sin redefines it. Scripture points toward freedom that heals, not excuses.',
    wordStudy: {
      surface: 'Freedom',
      lemma: 'ἐλευθερία (eleutheria)',
      transliteration: 'eleutheria',
      meaning: 'Often translated liberty; release for life with God rather than autonomy from Him.',
      strongs: 'G1657',
      reference: 'John 8:36',
      note: `Biblical freedom is not the ability to do anything without consequence.

True freedom is the ability to live in harmony with God’s love.

Sin promises freedom but produces bondage.

God’s way may include boundaries, but His boundaries protect life, love, and joy.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'doctrine_clarity',
      body: `The risk of freedom is one of the hardest parts of understanding evil.

God wanted love, not robots.

He wanted relationship, not forced performance.

So He created beings who could say yes to Him freely.

But the same freedom that allowed love also allowed rebellion.

This does not mean God made a mistake.

It means love was worth creating.

In the end, God’s answer to the risk of freedom is not to erase love or remove choice.

His answer is to reveal the truth so clearly that His people freely trust Him forever.

The final victory is not forced obedience.

It is restored love.`,
    },
    studyInsightBlocks: [
      forcedVersusFreelyChosenLoveVisual,
      {
        type: 'scriptureChain',
        title: 'The Gift and Risk of Freedom',
        references: [
          { reference: 'James 1:17' },
          { reference: 'Galatians 5:22 to 23' },
          { reference: 'Matthew 13:28' },
          { reference: 'John 8:36' },
        ],
      },
      {
        type: 'paragraph',
        text: `Takeaway: Freedom is a good gift from God, but it can be misused. Jesus restores true freedom by bringing us back into love and truth.`,
      },
    ],
    reflectPrompt: `Where have you confused freedom with simply doing whatever you want?

Think about one area where God may be inviting you to see His boundaries as protection, not restriction.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, practice using freedom for love.

Before making a decision, pause and ask:

“Will this choice make me more loving, more truthful, and more surrendered to God?”

That question cuts through a lot of noise.

Freedom is not proven by resisting God.

Freedom is restored when the heart is able to love what is good again.

Prayer

Father, thank You for creating me with the ability to love, choose, and respond to You. Teach me to use freedom wisely. Help me stop seeing Your boundaries as burdens. Show me that Your way leads to life. Grow the fruit of Your Spirit in me, and make my heart free in Jesus. Amen.`,
    prayer: '',
    completionSummary: `Love required freedom, and freedom carried risk. But God’s answer is not control. His answer is truth, restoration, and love freely returned.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'wih-l5-q1',
          prompt: 'According to James 1:17, where do good and perfect gifts come from?',
          options: ['From chance', 'From the Father above', 'From human pride', 'From rebellion'],
          correctIndex: 1,
          explanation:
            'James 1:17 teaches that every good and perfect gift comes from God, the Father of lights.',
        },
        {
          id: 'wih-l5-q2',
          prompt: 'What does Galatians 5:22 to 23 describe?',
          options: [
            'The fruit of the Spirit',
            'The fall of Babylon',
            'The creation of angels',
            'The plagues of Egypt',
          ],
          correctIndex: 0,
          explanation:
            'Galatians 5:22 to 23 lists the fruit of the Spirit, showing what God grows in a surrendered life.',
        },
        {
          id: 'wih-l5-q3',
          prompt: 'What did Jesus say in Matthew 13:28 about the source of the problem?',
          options: [
            '“God hath done this”',
            '“An enemy hath done this”',
            '“No one knows”',
            '“It does not matter”',
          ],
          correctIndex: 1,
          explanation:
            'Jesus said, “An enemy hath done this,” showing that evil is an enemy intrusion, not God’s character.',
        },
        {
          id: 'wih-l5-q4',
          prompt: 'What is true freedom according to this lesson?',
          options: [
            'Doing anything without consequence',
            'Living in harmony with God’s love',
            'Rejecting every boundary',
            'Avoiding all responsibility',
          ],
          correctIndex: 1,
          explanation:
            'True freedom is not lawlessness. It is life restored in harmony with God’s love and truth.',
        },
        {
          id: 'wih-l5-q5',
          kind: 'reflection',
          prompt: 'How can you use your freedom this week to choose love instead of selfishness?',
          explanation:
            'Freedom is meant to be used for love, trust, and surrender to God, not self-centered living.',
        },
      ],
    },
  },
  'jesus-enters-the-battle': {
    openingThought: `God did not answer evil from a distance.

He entered the battlefield.

Jesus stepped into a world full of deception, pain, temptation, sickness, fear, and death. He did not come as a distant observer. He came as Savior.

Everywhere Jesus went, He confronted the works of darkness.

He healed the broken.
He exposed lies.
He forgave sinners.
He resisted temptation.
He revealed the Father.
He gave His life.

The war between good and evil reaches its clearest point in Jesus. In Him, we see what God is like and what evil is trying to destroy.`,
    scriptureRef: '1 John 3:8',
    scriptureQuote: `For this purpose the Son of God was manifested, that he might destroy the works of the devil.`,
    scriptureSecondaryRef: 'Luke 11:21 to 22',
    scriptureSecondaryQuote: `When a strong man armed keepeth his palace, his goods are in peace: But when a stronger than he shall come upon him, and overcome him, he taketh from him all his armour wherein he trusted, and divideth his spoils.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'John 13:34',
        quote: `A new commandment I give unto you, That ye love one another; as I have loved you, that ye also love one another.`,
      },
    ],
    teachingPoints: [
      `1. Jesus came with a purpose

1 John 3:8 says Jesus came to destroy the works of the devil.

That means His mission was not vague.

Jesus came to confront sin, expose deception, break bondage, and rescue humanity.

He did not come only to teach better morals.

He came to win back what evil had stolen.`,
      `2. Jesus reveals the Father’s character

Satan’s strategy is to make God look harsh, selfish, distant, or unsafe.

Jesus destroys that lie by showing the Father clearly.

When Jesus touched lepers, welcomed sinners, wept with the grieving, forgave the guilty, and spoke truth to the deceived, He was revealing God’s heart.

Jesus shows us that God is not the author of suffering.

He is the Rescuer entering suffering to save.`,
      `3. Jesus is stronger than the enemy

In Luke 11, Jesus describes a stronger one overcoming the strong man.

The enemy may be real, but he is not equal with Christ.

Jesus has authority over demons, disease, sin, death, and the grave.

The Christian hope is not that evil is weak.

The hope is that Jesus is stronger.`,
      `4. Jesus fights with self-giving love

The kingdom of darkness operates through pride, force, lies, fear, and selfishness.

Jesus defeats evil through truth, humility, obedience, sacrifice, and love.

At the cross, the enemy’s hatred was fully exposed.

At the same cross, God’s love was fully revealed.

Jesus wins by giving Himself.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: 'John uses one Greek verb to say heaven’s answer stepped into plain sight.',
    wordStudy: {
      surface: 'Manifested',
      lemma: 'φανερόω (phaneroō)',
      transliteration: 'phaneroō',
      meaning: 'To make visible, reveal, or bring into the open.',
      strongs: 'G5319',
      reference: '1 John 3:8',
      note: `1 John 3:8 says the Son of God was manifested.

Jesus came to make visible what God is like and to bring evil’s works into the open.

In Christ, God’s love is no longer hidden.

The enemy’s lies are no longer safe.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'doctrine_clarity',
      body: `The battle between good and evil is not solved by human strength.

We do not outthink Satan on our own.

We do not overcome sin by willpower alone.

We need a Savior.

Jesus entered the conflict as the true Son, the faithful human, and the full revelation of God’s love.

Where Adam fell, Jesus stood faithful.

Where humanity believed the serpent’s lie, Jesus trusted the Father completely.

Where sin brought death, Jesus gave His life and rose again.

This is why the gospel is not only forgiveness.

It is victory.

Jesus does not merely tell us that evil will lose.

He has already broken its power.`,
    },
    studyInsightBlocks: [
      enemyWorksVsJesusVictoryVisual,
      {
        type: 'scriptureChain',
        title: 'Jesus Confronts Evil',
        references: [
          { reference: '1 John 3:8' },
          { reference: 'Luke 11:21 to 22' },
          { reference: 'John 14:9' },
          { reference: 'Colossians 2:15' },
        ],
      },
      {
        type: 'paragraph',
        text: `Takeaway: Jesus entered the conflict to reveal God’s character, expose the enemy’s lies, and destroy the works of the devil.`,
      },
    ],
    reflectPrompt: `Where do you most need to remember that Jesus is stronger than the darkness you are facing?

This could be fear, temptation, shame, discouragement, confusion, or a lie about God that has been hard to shake.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, when you face fear or temptation, do not start with your own strength.

Start with Christ.

Pray before you react.

Bring the lie into the light.

Name the truth Jesus reveals.

For example:

Lie:

“God has abandoned me.”

Truth:

“Jesus entered suffering to rescue me. I am not abandoned.”

The enemy works best in confusion.

Jesus brings truth into the open.

Prayer

Jesus, thank You for entering the battle for me. Thank You for revealing the Father and destroying the works of the devil. Help me trust that You are stronger than fear, sin, shame, and death. Teach me to bring every lie into Your light and to stand in Your victory. Amen.`,
    prayer: '',
    completionSummary: `Jesus did not stay distant from the conflict. He entered the battle, revealed the Father, exposed the enemy’s lies, and began the final defeat of evil.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'wih-l6-q1',
          prompt: 'According to 1 John 3:8, why was the Son of God manifested?',
          options: [
            'To destroy the works of the devil',
            'To create fear',
            'To hide God’s character',
            'To avoid human suffering',
          ],
          correctIndex: 0,
          explanation:
            '1 John 3:8 says Jesus was manifested to destroy the works of the devil.',
        },
        {
          id: 'wih-l6-q2',
          prompt: 'In Luke 11:21 to 22, what does Jesus teach?',
          options: [
            'The enemy is stronger than God',
            'No one can overcome evil',
            'A stronger one overcomes the strong man',
            'Evil does not exist',
          ],
          correctIndex: 2,
          explanation:
            'Jesus uses this picture to show that He is stronger than the enemy and able to overcome him.',
        },
        {
          id: 'wih-l6-q3',
          prompt: 'What does Jesus reveal about God?',
          options: [
            'God is distant and unsafe',
            'God is the Rescuer who enters suffering to save',
            'God enjoys human pain',
            'God does not care about evil',
          ],
          correctIndex: 1,
          explanation:
            'Jesus reveals the Father’s heart by healing, forgiving, loving, and entering suffering to save humanity.',
        },
        {
          id: 'wih-l6-q4',
          prompt: 'How does Jesus defeat evil?',
          options: [
            'Through pride and force',
            'Through deception',
            'Through truth, humility, sacrifice, and love',
            'By ignoring suffering',
          ],
          correctIndex: 2,
          explanation:
            'Jesus defeats evil through truth, obedience, self-giving love, and His victory at the cross.',
        },
        {
          id: 'wih-l6-q5',
          kind: 'reflection',
          prompt: 'What lie do you need to bring into the light of Jesus’ truth this week?',
          explanation:
            'Jesus exposes deception and helps us replace lies with the truth of God’s character and love.',
        },
      ],
    },
  },
  'the-final-defeat-of-evil': {
    openingThought: `Evil feels permanent when you are living inside it.

Pain can make the world feel endless.
Grief can make hope feel far away.
Injustice can make it seem like darkness always gets the final word.

But Scripture tells a different story.

Evil had a beginning.

Evil will have an end.

The Bible does not leave us with an eternal war between two equal powers. God is not struggling to survive against darkness. The conflict is real, but it is temporary.

Jesus has already won the decisive victory.

One day, the universe will be fully healed, and sin will not rise again.`,
    scriptureRef: 'Revelation 21:4',
    scriptureQuote: `And God shall wipe away all tears from their eyes; and there shall be no more death, neither sorrow, nor crying, neither shall there be any more pain: for the former things are passed away.`,
    scriptureSecondaryRef: 'Psalm 37:9',
    scriptureSecondaryQuote: `For evildoers shall be cut off: but those that wait upon the LORD, they shall inherit the earth.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Isaiah 11:9',
        quote: `They shall not hurt nor destroy in all my holy mountain: for the earth shall be full of the knowledge of the LORD, as the waters cover the sea.`,
      },
    ],
    teachingPoints: [
      `1. Evil is temporary

The Bible never presents evil as eternal.

Sin began through rebellion, and God will bring it to a complete end.

This matters because suffering is not the final chapter.

The pain we see now is real, but it is not permanent.

God’s plan moves toward restoration.`,
      `2. God will remove suffering completely

Revelation 21:4 gives one of the clearest promises in Scripture.

No more death.
No more sorrow.
No more crying.
No more pain.

God does not merely improve the broken world.

He makes all things new.

This is not shallow optimism.

This is biblical hope.`,
      `3. God’s final victory is rooted in truth

Isaiah says the earth will be full of the knowledge of the Lord.

That means the final world is not built on fear or forced obedience.

It is filled with the knowledge of God’s character.

The lies about God will be answered.

The universe will see that God is love.`,
      `4. Sin will not rise again

God’s final answer to evil will be complete.

The conflict will not repeat forever.

Those who are saved will not obey God because they are afraid of Him. They will trust Him because His character has been fully revealed.

Love will be secure because truth will be clear.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: 'Hope in Revelation leans on a Greek word worth pausing over when God says He makes things new.',
    wordStudy: {
      surface: 'New',
      lemma: 'καινός (kainos)',
      transliteration: 'kainos',
      meaning: 'New in quality, fresh, renewed, not merely recent in time.',
      strongs: 'G2537',
      reference: 'Revelation 21:5',
      note: `When Revelation speaks of God making things new, it is not describing a temporary patch over a damaged world.

God’s restoration is complete.

He renews creation in a way that removes sin, sorrow, death, and pain forever.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'doctrine_clarity',
      body: `The story of the war in heaven does not end with fear.

It ends with restoration.

From the beginning, Satan has attacked God’s character. He has tried to make God look selfish, unfair, distant, and unworthy of trust.

But through Jesus, God has revealed the truth.

God is love.
God is just.
God is patient.
God is merciful.
God is faithful.
God is not the author of evil.
God is the Redeemer of the broken.

When evil is finally removed, it will not be because God was impatient.

It will be because every question has been answered, every lie has been exposed, and every heart has made its choice.

God’s victory is not only that evil ends.

His victory is that love remains.`,
    },
    studyInsightBlocks: [
      nowVersusThenRestorationVisual,
      {
        type: 'scriptureChain',
        title: 'Evil Will End',
        references: [
          { reference: 'Psalm 37:9' },
          { reference: 'Isaiah 11:9' },
          { reference: 'Nahum 1:9' },
          { reference: 'Revelation 21:4' },
        ],
      },
      {
        type: 'paragraph',
        text: `Takeaway: Evil is temporary. God will fully restore creation, remove suffering, and establish a world where sin will never rise again.`,
      },
    ],
    reflectPrompt: `What part of God’s promise to end evil gives you the most hope right now?

Think honestly about where you need hope: grief, injustice, fear, sickness, temptation, or weariness.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, practice living like evil does not get the final word.

That does not mean ignoring pain.

It means refusing to let darkness define the whole story.

When you see suffering, remember that God has promised an ending.

When you face temptation, remember that sin is temporary.

When you feel discouraged, remember that Jesus has already won the decisive victory.

Hope is not pretending the battle is not real.

Hope is trusting the One who has already secured the ending.

Prayer

Father, thank You that evil will not last forever. Thank You that pain, death, sorrow, and crying will come to an end. Help me trust Your promise even when the world feels heavy. Keep my heart anchored in Jesus. Teach me to live with hope, courage, and love until the day You make all things new. Amen.`,
    prayer: '',
    completionSummary: `You have completed War in Heaven. The Bible’s story is clear: evil began through rebellion, but it will not last forever. Jesus has revealed the Father, defeated the enemy’s works, and promised a world made new.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'wih-l7-q1',
          prompt: 'According to Revelation 21:4, what will God remove?',
          options: [
            'Only sadness',
            'Death, sorrow, crying, and pain',
            'Human responsibility',
            'Scripture',
          ],
          correctIndex: 1,
          explanation:
            'Revelation 21:4 promises that death, sorrow, crying, and pain will be no more.',
        },
        {
          id: 'wih-l7-q2',
          prompt: 'According to Psalm 37:9, who will inherit the earth?',
          options: [
            'Those who wait upon the LORD',
            'Those who trust in violence',
            'Those who deceive others',
            'Those who reject God forever',
          ],
          correctIndex: 0,
          explanation:
            'Psalm 37:9 says those who wait upon the Lord will inherit the earth.',
        },
        {
          id: 'wih-l7-q3',
          prompt: 'What does Isaiah 11:9 say the earth will be full of?',
          options: [
            'The knowledge of the LORD',
            'Confusion',
            'Rebellion',
            'Fear of angels',
          ],
          correctIndex: 0,
          explanation:
            'Isaiah 11:9 says the earth will be full of the knowledge of the Lord, showing that truth about God will fill creation.',
        },
        {
          id: 'wih-l7-q4',
          prompt: 'What is the final outcome of the conflict between good and evil?',
          options: [
            'Evil lasts forever',
            'God and Satan share power',
            'God fully restores creation and ends evil',
            'Humanity saves itself',
          ],
          correctIndex: 2,
          explanation:
            'Scripture teaches that evil is temporary and that God will fully restore creation through His final victory.',
        },
        {
          id: 'wih-l7-q5',
          kind: 'reflection',
          prompt: 'How can the promise that evil will end change the way you face discouragement today?',
          explanation:
            'Biblical hope does not deny pain. It anchors the heart in God’s promise that evil will not have the final word.',
        },
      ],
    },
  },
}
