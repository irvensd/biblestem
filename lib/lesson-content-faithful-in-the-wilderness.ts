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

/** Guided reader lessons for "Faithful in the Wilderness" (Foundations). */
export const faithfulInTheWildernessSeriesLessonLibrary: Record<string, LessonReaderContent> = {
  'the-woman-in-the-wilderness': {
    openingThought: `God has never been without a witness.

Even when history gets dark, confusing, violent, or religiously corrupted, God preserves a people who carry the light of His character.

Revelation 12 gives us a symbolic picture of that story.

A woman appears.
A dragon attacks.
A child is born.
The woman flees into the wilderness.
God preserves her.

This is not random prophetic imagery.

It is the story of Christ, His church, Satan's opposition, and God's faithfulness through history.

The church may be pressured, persecuted, and pushed into hidden places, but God never abandons His people.`,
    scriptureRef: 'Revelation 12:1',
    scriptureQuote:
      'And there appeared a great wonder in heaven; a woman clothed with the sun, and the moon under her feet, and upon her head a crown of twelve stars.',
    scriptureAfterPrimary: `Revelation opens with a symbolic woman clothed in light, crowned, and set in heaven's vision before the conflict unfolds.`,
    scriptureSecondaryRef: 'Revelation 12:6',
    scriptureSecondaryQuote:
      'And the woman fled into the wilderness, where she hath a place prepared of God.',
    scriptureAfterSecondary: `The wilderness is hard, but God prepares a place for His people there.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Jeremiah 6:2',
        quote: 'I have likened the daughter of Zion to a comely and delicate woman.',
      },
      {
        type: 'scripture',
        reference: 'Ephesians 5:25-27',
        quote: `Christ also loved the church, and gave himself for it.

That he might sanctify and cleanse it with the washing of water by the word.

That he might present it to himself a glorious church.`,
      },
      {
        type: 'scripture',
        reference: 'Malachi 4:2',
        quote: 'But unto you that fear my name shall the Sun of righteousness arise with healing in his wings.',
      },
      {
        type: 'scripture',
        reference: 'John 8:12',
        quote: 'I am the light of the world.',
      },
    ],
    teachingPoints: [
      `1. The woman represents God's faithful people

In Bible symbolism, a woman can represent God's people.

Jeremiah uses woman imagery for Zion, and Paul uses marriage imagery to describe Christ and His church.

So the woman in Revelation 12 is not merely one individual.

She represents God's faithful covenant people, through whom Christ comes into the world and through whom God's truth continues to be preserved.`,
      `2. The woman is clothed with the sun

Revelation says the woman is clothed with the sun.

This points to light, truth, glory, and righteousness.

Malachi calls Christ the "Sun of righteousness," and Jesus says, "I am the light of the world."

God's faithful people are not clothed in their own brilliance.

They are clothed in the light of Christ.

The church's only true beauty is borrowed light from Jesus.`,
      `3. The moon under her feet points to reflected light

The moon does not produce its own light.

It reflects light.

This gives a beautiful picture of the Old Testament symbols, prophecies, and promises that pointed forward to Christ.

The faithful people of God stand on the witness of Scripture.

Everything before Christ was pointing toward Him.

Everything after Christ is understood through Him.`,
      `4. The wilderness shows both danger and preservation

Revelation says the woman flees into the wilderness, but she has a place prepared by God.

That detail matters.

The wilderness is not comfortable.

It represents hardship, obscurity, pressure, and persecution.

But it is also a place of divine preservation.

The same God who allowed His people to be driven into the wilderness also prepared a place for them there.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Wilderness',
      lemma: 'ἔρημος',
      transliteration: 'eremos',
      meaning:
        'A lonely, difficult, uncultivated place often associated with testing, danger, dependence, and divine preservation.',
      strongs: 'G2048',
      reference: 'Revelation 12:6',
      note: `In Revelation 12, the wilderness is not a sign that God abandoned His people.

It is the place where God preserved them.

Even when truth was pressured by persecution and corruption, God kept a faithful witness alive.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `Revelation 12 is a prophetic overview of the conflict between Christ and Satan as it affects God's people.

The woman shows us that God has a faithful people.

The sun shows us that their light comes from Christ.

The moon reminds us that Scripture points to Jesus.

The dragon reminds us that Satan opposes God's purposes.

The wilderness reminds us that God preserves His people, even when they are pressured, hidden, or persecuted.

This matters for the whole study.

Faithful in the Wilderness is not about elitism.

It is about God's faithfulness.

The question is not, "How can we feel superior because we know prophecy?"

Wrong question. Throw it in the trash.

The better question is:

"How has God preserved the truth of His character so the world can still see Jesus?"`,
    },
    studyInsightBlocks: [
      {
        type: 'revelation12Pattern',
        title: 'The Woman in the Wilderness',
        caption:
          'Revelation 12 shows God preserving a faithful people through history to reveal His character.',
        stages: [
          { label: 'Woman', tagline: "God's faithful people" },
          { label: 'Sun', tagline: 'the light of Christ' },
          { label: 'Moon', tagline: 'Scripture pointing to Christ' },
          { label: 'Dragon', tagline: "Satan's opposition" },
          { label: 'Wilderness', tagline: 'God preserving His people' },
        ],
      },
      {
        type: 'scriptureChain',
        title: 'The Woman in the Wilderness',
        references: [
          { reference: 'Revelation 12:1-6' },
          { reference: 'Jeremiah 6:2' },
          { reference: 'Ephesians 5:25-27' },
          { reference: 'Malachi 4:2' },
          { reference: 'John 8:12' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: God has always preserved a faithful people clothed in the light of Christ, even through wilderness seasons of pressure and persecution.',
      },
    ],
    reflectPrompt: `What does it teach you about God that He prepares a place for His people even in the wilderness?

Think about hardship, persecution, church history, personal trials, hidden faithfulness, and seasons where God may seem quiet but is still preserving His people.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, look for one place where God may be preserving you instead of abandoning you.

Not every wilderness means failure.

Sometimes the wilderness is where God protects faith, deepens dependence, and keeps truth alive.

Ask:

"Where do I feel hidden, pressured, or spiritually stretched?"

Then ask:

"What might God be preserving in me there?"

Do not despise the wilderness too quickly.

If God prepared a place there, He can meet you there.

Prayer:

Father, thank You for preserving Your people through every age. Thank You that even in wilderness seasons, You are not absent. Help me see Jesus as the true light of the world and trust Your care when life feels pressured, hidden, or difficult. Keep me faithful to Your truth, humble in spirit, and centered in the character of Christ. Amen.`,
    prayer: '',
    completionSummary: `Revelation 12 shows God's faithful people clothed in the light of Christ and preserved by God, even in the wilderness.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'fitw-l1-q1',
          prompt: 'In Revelation 12:1, what symbolic figure appears in heaven?',
          options: [
            'A woman clothed with the sun',
            'A beast from the sea',
            'A golden image',
            'A city without people',
          ],
          correctIndex: 0,
          explanation:
            'Revelation 12 begins with a woman clothed with the sun, with the moon under her feet and a crown of twelve stars.',
        },
        {
          id: 'fitw-l1-q2',
          prompt: 'In Bible symbolism, what can a woman represent?',
          options: [
            'God\'s people or church',
            'A literal animal',
            'A random political slogan',
            'A meaningless image',
          ],
          correctIndex: 0,
          explanation:
            'Scripture uses woman imagery to describe Zion and the church, helping us understand the woman in Revelation 12 as God\'s faithful people.',
        },
        {
          id: 'fitw-l1-q3',
          prompt: 'Who is called the light of the world in John 8:12?',
          options: ['Jesus', 'Caesar', 'The dragon', 'The wilderness'],
          correctIndex: 0,
          explanation: 'Jesus said, "I am the light of the world," showing that the church\'s true light comes from Him.',
        },
        {
          id: 'fitw-l1-q4',
          prompt: 'According to Revelation 12:6, where did the woman flee?',
          options: [
            'Into the wilderness',
            'Into Babylon\'s palace',
            'Into the sea forever',
            'Into complete destruction',
          ],
          correctIndex: 0,
          explanation:
            'Revelation says the woman fled into the wilderness, where God had prepared a place for her.',
        },
        {
          id: 'fitw-l1-q5',
          kind: 'reflection',
          prompt: 'What is one wilderness season where you need to trust that God is still preserving you?',
          explanation:
            'The wilderness can be difficult, but Revelation 12 shows that God prepares a place for His people and preserves His truth through hardship.',
        },
      ],
    },
  },
  'the-dragon-and-the-child': {
    openingThought: `Revelation 12 does not only show a woman.

It also shows a dragon.

That tells us something important:

The story of redemption has always had opposition.

From the beginning, Satan has tried to stop God's promise, destroy God's people, and prevent Christ's mission from succeeding.

But he failed.

The dragon stood ready to devour the Child.

But the Child was born.

Jesus came into the world.

He revealed the Father's love.

He died for our sins.

He rose from the grave.

He ascended to God's throne.

The dragon could not stop the promise.`,
    scriptureRef: 'Revelation 12:4-5',
    scriptureQuote: `And the dragon stood before the woman which was ready to be delivered, for to devour her child as soon as it was born.

And she brought forth a man child, who was to rule all nations with a rod of iron.

And her child was caught up unto God, and to his throne.`,
    scriptureAfterPrimary: `Satan tried to destroy Christ at birth, but the promised Child was born, fulfilled His mission, and was exalted to God's throne.`,
    scriptureSecondaryRef: 'Revelation 12:9',
    scriptureSecondaryQuote:
      'And the great dragon was cast out, that old serpent, called the Devil, and Satan.',
    scriptureAfterSecondary: `Revelation names the dragon plainly so we understand who stands behind the opposition to Christ and His people.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Genesis 3:15',
        quote: `And I will put enmity between thee and the woman, and between thy seed and her seed.

It shall bruise thy head, and thou shalt bruise his heel.`,
      },
      {
        type: 'scripture',
        reference: 'Matthew 2:13',
        quote: `Arise, and take the young child and his mother, and flee into Egypt.

For Herod will seek the young child to destroy him.`,
      },
      {
        type: 'scripture',
        reference: 'John 12:31-32',
        quote: `Now shall the prince of this world be cast out.

And I, if I be lifted up from the earth, will draw all men unto me.`,
      },
      {
        type: 'scripture',
        reference: 'Colossians 2:15',
        quote: 'And having spoiled principalities and powers, he made a shew of them openly, triumphing over them in it.',
      },
    ],
    teachingPoints: [
      `1. The dragon is Satan

Revelation identifies the dragon clearly as the devil and Satan.

This keeps us from guessing.

Behind the visible conflict in history is a deeper spiritual conflict.

Satan opposes God's character, God's truth, God's people, and God's promised Messiah.

The dragon represents a real enemy working through human systems, violence, deception, and fear.`,
      `2. The Child is Christ

The woman gives birth to a male Child who is caught up to God and His throne.

This points directly to Jesus.

He was born into the world through God's covenant people.

He fulfilled the promise of Genesis 3:15.

He came as the promised Seed who would defeat the serpent.

Satan tried to stop Him, but Jesus completed His mission.`,
      `3. Satan tried to destroy Jesus from the beginning

Matthew shows Herod trying to kill the young Child.

That was not merely political insecurity.

It was the dragon working through human power to destroy Christ.

But God preserved Jesus.

The promise could not be canceled.

The Savior would live, teach, heal, die, rise, and ascend.`,
      `4. Jesus defeated the dragon through the cross

John 12 shows Jesus speaking of Satan being cast out in connection with His death.

Colossians says Jesus triumphed over principalities and powers.

The cross looked like defeat, but it was victory.

Jesus defeated Satan not by using the dragon's methods, but by revealing self-giving love.

The dragon uses force.

Jesus conquers by love.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Dragon',
      lemma: 'δράκων',
      transliteration: 'drakon',
      meaning:
        "In Revelation 12, the dragon is a symbol for Satan, the enemy of God, Christ, and God's people.",
      strongs: 'G1404',
      reference: 'Revelation 12:9',
      note: `The dragon does not only attack openly.

He works through deception, fear, violence, false worship, and corrupt systems.

But Revelation 12 shows that Satan cannot defeat Christ or erase God's faithful witness.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `Revelation 12 pulls back the curtain on history.

What looks like political conflict, religious opposition, or persecution often has a deeper spiritual issue beneath it.

The dragon hates the Child because the Child reveals God's true character and wins the war.

Jesus did not defeat Satan by becoming like Satan.

He did not overcome evil with coercion.

He did not answer violence with selfish violence.

He overcame by truth, humility, sacrifice, and love.

That is why the cross is central.

At the cross, Satan's character was exposed.

God's character was revealed.

The promised Seed was bruised, but the serpent's head was crushed.`,
    },
    studyInsightBlocks: [
      {
        type: 'revelation12Pattern',
        title: 'The Dragon and the Child',
        caption: 'The dragon tried to destroy Christ, but Jesus defeated Satan through self-giving love.',
        stages: [
          { label: 'Dragon', tagline: "Satan's opposition" },
          { label: 'Woman', tagline: "God's covenant people" },
          { label: 'Child', tagline: 'Christ, the promised Seed' },
          { label: 'Cross', tagline: 'Satan exposed and defeated' },
          { label: 'Throne', tagline: 'Christ victorious and exalted' },
        ],
      },
      {
        type: 'scriptureChain',
        title: 'The Dragon and the Child',
        references: [
          { reference: 'Revelation 12:3-5' },
          { reference: 'Revelation 12:9' },
          { reference: 'Genesis 3:15' },
          { reference: 'Matthew 2:13-16' },
          { reference: 'John 12:31-32' },
          { reference: 'Colossians 2:15' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: Satan tried to destroy Christ, but Jesus fulfilled the promise, defeated the dragon, and was exalted to God\'s throne.',
      },
    ],
    reflectPrompt: `Why does it matter that Jesus defeated Satan through self-giving love instead of force?

Think about the cross, God's character, the great controversy, Satan's methods, and how Jesus shows the difference between true power and counterfeit power.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, remember that opposition does not mean God has lost control.

The dragon opposed Christ from the beginning.

Still, Jesus completed His mission.

When you face resistance, fear, spiritual pressure, or discouragement, ask:

"What would it look like to trust Christ's victory here?"

Then choose one Christlike response.

Tell the truth.

Refuse fear.

Pray instead of panicking.

Love instead of retaliating.

Stay faithful when pressure rises.

The dragon is loud, but he is not Lord.

Prayer:

Jesus, thank You for coming into this world and defeating the enemy through truth, sacrifice, and love. Thank You that Satan could not stop Your mission. Help me trust Your victory when I face opposition. Teach me to reject fear, resist deception, and follow Your way of faithful love. Keep my eyes on You, the victorious Son who is seated at God's throne. Amen.`,
    prayer: '',
    completionSummary: `The dragon tried to destroy the Child, but Jesus fulfilled God's promise, defeated Satan through the cross, and was exalted to God's throne.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'fitw-l2-q1',
          prompt: 'According to Revelation 12:9, who is the dragon?',
          options: ['The devil and Satan', 'A faithful angel', 'The church', 'The Child'],
          correctIndex: 0,
          explanation:
            'Revelation 12:9 identifies the dragon as that old serpent, called the Devil and Satan.',
        },
        {
          id: 'fitw-l2-q2',
          prompt: 'In Revelation 12:4, what did the dragon want to do to the Child?',
          options: [
            'Devour Him as soon as He was born',
            'Worship Him faithfully',
            'Protect Him from harm',
            'Follow Him as Lord',
          ],
          correctIndex: 0,
          explanation:
            'Revelation says the dragon stood before the woman to devour her Child as soon as He was born.',
        },
        {
          id: 'fitw-l2-q3',
          prompt: 'In Matthew 2:13, who sought to destroy the young Child?',
          options: ['Herod', 'John the Baptist', 'Joseph', 'The disciples'],
          correctIndex: 0,
          explanation:
            'The angel warned Joseph that Herod would seek the young Child to destroy Him.',
        },
        {
          id: 'fitw-l2-q4',
          prompt: 'According to John 12:31-32, what would happen through Jesus being lifted up?',
          options: [
            'The prince of this world would be cast out, and Jesus would draw all people to Himself',
            'Satan would win completely',
            'God\'s promise would fail',
            'Jesus would stop loving the world',
          ],
          correctIndex: 0,
          explanation:
            'Jesus connected His death with the casting out of the prince of this world and the drawing of all people to Himself.',
        },
        {
          id: 'fitw-l2-q5',
          kind: 'reflection',
          prompt: 'Where do you need to trust Christ\'s victory over the enemy this week?',
          explanation:
            'The dragon opposed Christ, but he could not stop Him. Jesus defeated Satan through the cross and remains victorious.',
        },
      ],
    },
  },
  'preserved-through-the-dark-years': {
    openingThought: `Sometimes God preserves His people in visible ways.

Other times, He preserves them in hidden places.

Revelation 12 says the woman fled into the wilderness, where God had prepared a place for her.

That detail is powerful.

The wilderness was not easy.

It was not glamorous.

It was not comfortable.

But it was prepared by God.

During seasons when truth was pressured, believers persecuted, and counterfeit religion gained power, God still preserved a faithful witness.

The church may have been pushed into the wilderness, but the gospel was not erased.`,
    scriptureRef: 'Revelation 12:6',
    scriptureQuote:
      'And the woman fled into the wilderness, where she hath a place prepared of God, that they should feed her there a thousand two hundred and threescore days.',
    scriptureAfterPrimary: `The wilderness was a long season, but God prepared a place and sustained His people there.`,
    scriptureSecondaryRef: 'Revelation 12:14',
    scriptureSecondaryQuote: `And to the woman were given two wings of a great eagle, that she might fly into the wilderness, into her place.

Where she is nourished for a time, and times, and half a time, from the face of the serpent.`,
    scriptureAfterSecondary: `God did not merely hide His people. He nourished them in the wilderness away from the serpent.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Revelation 12:15-16',
        quote: `And the serpent cast out of his mouth water as a flood after the woman, that he might cause her to be carried away of the flood.

And the earth helped the woman.`,
      },
      {
        type: 'scripture',
        reference: 'Ezekiel 4:6',
        quote: 'I have appointed thee each day for a year.',
      },
      {
        type: 'scripture',
        reference: 'Daniel 7:25',
        quote: 'And they shall be given into his hand until a time and times and the dividing of time.',
      },
    ],
    teachingPoints: [
      `1. The wilderness period was foretold

Revelation says the woman would be in the wilderness for 1,260 prophetic days.

In Bible prophecy, a day can represent a year.

This points to a long historical period when God's faithful people would be pressured, hidden, and persecuted.

But the main point is not simply the length of the period.

The main point is that God knew it ahead of time and prepared a place for His people.`,
      `2. The woman was nourished by God

Revelation says the woman was nourished in the wilderness.

That word matters.

God did not merely hide His people.

He fed them.

He preserved truth.

He sustained faith.

He kept the witness of Jesus alive through Scripture, prayer, courage, and faithful communities.

Even when official religion became corrupted, God did not abandon His people.`,
      `3. The serpent continued persecution

Revelation says the serpent pursued the woman.

This shows that Satan's opposition did not end after Christ's ascension.

When the dragon failed to destroy Christ, he turned his rage toward Christ's followers.

Persecution has never been evidence that God forgot His people.

Often, persecution exposes the conflict between the kingdom of Christ and the kingdom of coercion.`,
      `4. God made a way of escape and preservation

Revelation says the earth helped the woman.

This imagery shows that God provided help, space, and preservation for His people.

Throughout history, God has used unexpected places, people, reforms, movements, and circumstances to keep truth alive.

The wilderness was hard, but it was not hopeless.

God was still working.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Nourished',
      lemma: 'τρέφω',
      transliteration: 'trepho',
      meaning: 'Fed, sustained, strengthened, or kept alive.',
      strongs: 'G5142',
      reference: 'Revelation 12:14',
      note: `God's people were not merely hidden in the wilderness.

They were nourished there.

God preserved His truth and sustained His faithful people even when the visible world was dominated by spiritual darkness and persecution.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The wilderness period teaches us something critical about church history.

The most visible religious system is not always the most faithful one.

During dark periods, the truth of God's character may be carried by small, scattered, persecuted, and overlooked communities.

That should humble us.

God is not dependent on size, popularity, political power, buildings, or institutional prestige.

He can preserve truth in caves, homes, valleys, hidden meetings, translated Scripture, whispered prayers, and faithful families teaching their children the gospel.

The woman in the wilderness reminds us:

God can preserve His people without giving them worldly power.

That is uncomfortable for religious ego, but it is very biblical.`,
    },
    studyInsightBlocks: [
      {
        type: 'revelation12Pattern',
        title: 'Preserved Through the Dark Years',
        caption: 'The wilderness was not abandonment. It was preservation.',
        stages: [
          { label: 'Woman', tagline: "God's faithful people" },
          { label: 'Wilderness', tagline: 'hidden, pressured, persecuted' },
          { label: 'Nourished', tagline: 'truth preserved by God' },
          { label: 'Dragon', tagline: 'continued opposition' },
          { label: "God's Care", tagline: 'a prepared place' },
        ],
      },
      {
        type: 'scriptureChain',
        title: 'Preserved in the Wilderness',
        references: [
          { reference: 'Revelation 12:6' },
          { reference: 'Revelation 12:13-16' },
          { reference: 'Ezekiel 4:6' },
          { reference: 'Daniel 7:25' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: During the wilderness period, God preserved His faithful people and nourished the truth of the gospel through persecution.',
      },
    ],
    reflectPrompt: `Why is visibility not always the same thing as faithfulness?

Think about popularity, religious power, institutions, persecution, hidden believers, and how God can preserve truth through people the world overlooks.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, pay attention to where you may be confusing visibility with spiritual value.

Ask yourself:

"Do I assume bigger always means more faithful?"

"Do I respect hidden faithfulness?"

"Am I willing to obey God even when it does not bring recognition?"

"Can I trust God in a season where I feel unseen?"

Then choose one quiet act of faithfulness.

Pray when nobody notices.

Study Scripture when nobody applauds.

Serve without posting it.

Stand for truth without needing attention.

God knows how to preserve what matters.

Prayer:

Father, thank You for preserving Your people through dark and difficult times. Thank You that the wilderness is not outside Your care. Teach me to value faithfulness more than visibility. Keep me rooted in Scripture, humble in spirit, and faithful to Jesus even when the path feels hidden or hard. Nourish my faith with Your truth and love. Amen.`,
    prayer: '',
    completionSummary: `The wilderness was not abandonment. God prepared a place, nourished His people, and preserved the truth through dark years of pressure and persecution.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'fitw-l3-q1',
          prompt: 'According to Revelation 12:6, where did the woman flee?',
          options: [
            'Into the wilderness',
            'Into Babylon\'s throne room',
            'Into the dragon\'s kingdom',
            'Into complete destruction',
          ],
          correctIndex: 0,
          explanation:
            'Revelation says the woman fled into the wilderness, where God had prepared a place for her.',
        },
        {
          id: 'fitw-l3-q2',
          prompt: 'According to Revelation 12:6, who prepared a place for the woman?',
          options: ['God', 'The dragon', 'The beast', 'Rome'],
          correctIndex: 0,
          explanation: 'The verse says the woman had a place prepared by God.',
        },
        {
          id: 'fitw-l3-q3',
          prompt: 'According to Revelation 12:14, what happened to the woman in the wilderness?',
          options: [
            'She was nourished',
            'She was forgotten by God',
            'She ruled the world politically',
            'She became the dragon',
          ],
          correctIndex: 0,
          explanation:
            'Revelation says the woman was nourished in the wilderness away from the serpent.',
        },
        {
          id: 'fitw-l3-q4',
          prompt: 'In Bible prophecy, what principle does Ezekiel 4:6 help us understand?',
          options: [
            'A prophetic day can represent a year',
            'Every symbol is meaningless',
            'Prophecy cannot be studied',
            'Wilderness always means failure',
          ],
          correctIndex: 0,
          explanation:
            'Ezekiel 4:6 gives the day-for-a-year principle used in prophetic interpretation.',
        },
        {
          id: 'fitw-l3-q5',
          kind: 'reflection',
          prompt: 'Where do you need to trust God\'s preservation in a hidden or difficult season?',
          explanation:
            'Revelation 12 shows that God can preserve and nourish His people even when they are pressured, hidden, or persecuted.',
        },
      ],
    },
  },
  'the-war-behind-history': {
    openingThought: `History is not only what we can see.

Behind the rise and fall of kingdoms, behind persecution, behind deception, behind the pressure against God's people, there is a deeper conflict.

Revelation 12 pulls back the curtain.

There was war in heaven.

Satan rebelled against God.

That war continued on earth.

But the center of the conflict is not merely power.

It is character.

Who is God really like?

Can He be trusted?

Is His government love or control?

At the cross, Jesus answered the accusation forever.

Satan was exposed.

Christ was victorious.

God's love was revealed.`,
    scriptureRef: 'Revelation 12:7-8',
    scriptureQuote: `And there was war in heaven: Michael and his angels fought against the dragon; and the dragon fought and his angels.

And prevailed not; neither was their place found any more in heaven.`,
    scriptureAfterPrimary: `The conflict between good and evil began in heaven before it unfolded on earth.`,
    scriptureSecondaryRef: 'Revelation 12:9',
    scriptureSecondaryQuote:
      'And the great dragon was cast out, that old serpent, called the Devil, and Satan, which deceiveth the whole world.',
    scriptureAfterSecondary: `Satan was cast down as the deceiver who opposes God and misleads the world.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Revelation 12:10-11',
        quote: `Now is come salvation, and strength, and the kingdom of our God, and the power of his Christ.

And they overcame him by the blood of the Lamb, and by the word of their testimony.`,
      },
      {
        type: 'scripture',
        reference: 'John 12:31-32',
        quote: `Now is the judgment of this world: now shall the prince of this world be cast out.

And I, if I be lifted up from the earth, will draw all men unto me.`,
      },
      {
        type: 'scripture',
        reference: 'Colossians 2:15',
        quote: 'And having spoiled principalities and powers, he made a shew of them openly, triumphing over them in it.',
      },
      {
        type: 'scripture',
        reference: '1 Peter 5:8-9',
        quote: `Your adversary the devil, as a roaring lion, walketh about, seeking whom he may devour.

Whom resist stedfast in the faith.`,
      },
    ],
    teachingPoints: [
      `1. The conflict began in heaven

Revelation says there was war in heaven.

That means the conflict between good and evil did not begin on earth.

Before humanity fell, Satan had already rebelled against God.

The war is not merely about armies, politics, or earthly kingdoms.

It is a conflict over God's character, government, truth, and love.`,
      `2. Satan works through deception

Revelation identifies the dragon as Satan, the one who deceives the whole world.

His primary weapon is deception.

He lies about God.

He lies about sin.

He lies about freedom.

He lies about worship.

He lies about what power should look like.

Whenever people believe false pictures of God, the dragon gains ground.`,
      `3. The cross exposed and defeated Satan

Jesus said that through His death, the prince of this world would be cast out.

Colossians says Christ triumphed over principalities and powers.

At the cross, Satan's character was exposed as murderous, coercive, and cruel.

At the same time, God's character was revealed as self-giving, forgiving, patient, and faithful.

The cross is not only the place where our sins were paid for.

It is also the place where the truth about God and Satan became unmistakably clear.`,
      `4. God's people overcome through the Lamb

Revelation says believers overcome by the blood of the Lamb and by the word of their testimony.

They do not overcome by worldly power.

They overcome by trusting the victory of Jesus and bearing faithful witness to Him.

The church in the wilderness survived because Christ had already won the decisive victory.

The dragon may rage, but he is already defeated.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Overcome',
      lemma: 'νικάω',
      transliteration: 'nikao',
      meaning: 'To conquer, prevail, endure faithfully, or gain victory.',
      strongs: 'G3528',
      reference: 'Revelation 12:11',
      note: `In Revelation, God's people overcome through Jesus.

They do not defeat evil by becoming like evil.

They overcome by trusting the Lamb, holding to His truth, and bearing faithful witness even under pressure.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `Revelation 12 connects three major moments in the great conflict.

First, there was war in heaven.

Second, Satan opposed Christ on earth.

Third, after Christ's victory, Satan continued opposing the church.

This means the wilderness story is part of a larger war.

The persecution of God's people was never merely a human issue.

It was part of Satan's attempt to silence the witness of Jesus and bury the truth about God's character.

But the cross changes everything.

At Calvary, Satan was exposed.

Jesus was lifted up.

The Father's love was revealed.

The enemy's accusations were answered.

And God's people were given a victory they could stand on, even in the wilderness.`,
    },
    studyInsightBlocks: [
      {
        type: 'revelation12Pattern',
        title: 'The War Behind History',
        caption:
          "Revelation 12 shows that the visible conflict in history is part of a deeper war over God's character.",
        stages: [
          { label: 'War in Heaven', tagline: 'Satan rebels against God' },
          { label: 'Dragon', tagline: 'deception and accusation' },
          { label: 'Cross', tagline: "Christ reveals God's love and defeats Satan" },
          { label: 'Church', tagline: "God's people bear witness" },
          { label: 'Victory', tagline: 'overcome by the blood of the Lamb' },
        ],
      },
      {
        type: 'scriptureChain',
        title: 'The War Behind History',
        references: [
          { reference: 'Revelation 12:7-12' },
          { reference: 'John 12:31-32' },
          { reference: 'Colossians 2:15' },
          { reference: '1 Peter 5:8-9' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: The conflict behind history is a war over God\'s character. Jesus exposed and defeated Satan through the cross, and His people overcome through the Lamb.',
      },
    ],
    reflectPrompt: `How does the cross help you see the difference between God's character and Satan's methods?

Think about accusation, deception, coercion, violence, forgiveness, self-giving love, and the way Jesus reveals what God is truly like.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, watch for the dragon's methods in ordinary life.

Deception.
Accusation.
Fear.
Control.
Retaliation.
Despair.

When one shows up, do not panic.

Bring it to the cross.

Ask:

"What does Jesus reveal about God here?"

"What lie am I being tempted to believe?"

"How can I overcome through the Lamb instead of reacting like the dragon?"

Choose one Christlike response.

Tell the truth.

Refuse accusation.

Forgive.

Pray.

Stand firm.

Trust the blood of the Lamb.

The enemy is loud, but he is not undefeated. He is already cooked. Keep walking.

Prayer:

Jesus, thank You for defeating Satan through the cross. Thank You for revealing the Father's love and exposing the enemy's lies. Help me recognize deception, accusation, fear, and control when they appear in my life. Teach me to overcome by Your blood, Your truth, and a faithful testimony. Keep me anchored in Your victory. Amen.`,
    prayer: '',
    completionSummary: `Revelation 12 shows the war behind history. Satan deceives and accuses, but Jesus defeated him through the cross, and God's people overcome through the Lamb.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'fitw-l4-q1',
          prompt: 'According to Revelation 12:7, where did war break out?',
          options: [
            'In heaven',
            'In Egypt only',
            'In Babylon only',
            'In a private dream with no meaning',
          ],
          correctIndex: 0,
          explanation:
            'Revelation says there was war in heaven between Michael and His angels and the dragon and his angels.',
        },
        {
          id: 'fitw-l4-q2',
          prompt: 'According to Revelation 12:9, who is the dragon?',
          options: ['The Devil and Satan', 'The faithful church', 'The Child', 'Michael'],
          correctIndex: 0,
          explanation: 'Revelation identifies the dragon as that old serpent, called the Devil and Satan.',
        },
        {
          id: 'fitw-l4-q3',
          prompt: 'According to John 12:31-32, what would happen through Jesus being lifted up?',
          options: [
            'The prince of this world would be cast out, and Jesus would draw all people to Himself',
            'Satan would become ruler forever',
            "God's love would be hidden",
            'The gospel would fail',
          ],
          correctIndex: 0,
          explanation:
            'Jesus connected His death with the casting out of the prince of this world and His drawing of all people to Himself.',
        },
        {
          id: 'fitw-l4-q4',
          prompt: 'According to Revelation 12:11, how do God\'s people overcome?',
          options: [
            'By the blood of the Lamb and the word of their testimony',
            'By worldly force',
            'By fear',
            'By becoming like the dragon',
          ],
          correctIndex: 0,
          explanation:
            'Revelation says God\'s people overcome by the blood of the Lamb and by the word of their testimony.',
        },
        {
          id: 'fitw-l4-q5',
          kind: 'reflection',
          prompt: 'What lie about God or yourself do you need to bring to the cross this week?',
          explanation:
            'The cross exposes Satan\'s deception and reveals God\'s self-giving love. God\'s people overcome through Jesus.',
        },
      ],
    },
  },
  'the-remnant-of-her-seed': {
    openingThought: `Revelation 12 does not end with the woman in the wilderness.

It ends with the dragon angry.

Why?

Because God still has a faithful people.

After centuries of conflict, persecution, and deception, Scripture points to the remnant of the woman's seed.

A remnant is what remains.

Not because they are better than everyone else.

Not because they earned God's favor.

Not because they are allowed to be arrogant.

A remnant exists because God is faithful to preserve truth, reveal Jesus, and carry the gospel to the world.

The remnant is not about superiority.

It is about mission.`,
    scriptureRef: 'Revelation 12:17',
    scriptureQuote: `And the dragon was wroth with the woman, and went to make war with the remnant of her seed.

Which keep the commandments of God, and have the testimony of Jesus Christ.`,
    scriptureAfterPrimary: `Satan's rage continues, but God still has a people marked by obedience to Him and faithful witness to Jesus.`,
    scriptureSecondaryRef: 'Revelation 14:12',
    scriptureSecondaryQuote:
      'Here is the patience of the saints: here are they that keep the commandments of God, and the faith of Jesus.',
    scriptureAfterSecondary: `The same marks appear again: loyalty to God's commandments and faith in Jesus.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Isaiah 10:21-22',
        quote: 'The remnant shall return, even the remnant of Jacob, unto the mighty God.',
      },
      {
        type: 'scripture',
        reference: 'Jeremiah 23:3',
        quote: `And I will gather the remnant of my flock out of all countries whither I have driven them.

And will bring them again to their folds; and they shall be fruitful and increase.`,
      },
      {
        type: 'scripture',
        reference: 'Romans 11:5',
        quote: 'Even so then at this present time also there is a remnant according to the election of grace.',
      },
    ],
    teachingPoints: [
      `1. The dragon makes war against the remnant

Revelation says the dragon is angry with the woman and makes war with the remnant of her seed.

This shows that Satan's opposition continues after the wilderness period.

Why attack the remnant?

Because they carry the witness of Jesus.

The enemy is not threatened by empty religion.

He is threatened by a people who reveal Christ, obey God, and carry truth with love.`,
      `2. The remnant keeps the commandments of God

Revelation identifies the remnant as those who keep the commandments of God.

This is not legalism.

The commandments reveal God's character of love.

Keeping them means loyalty to God's authority above human tradition.

The remnant does not replace grace with law.

They respond to grace with faithful obedience.`,
      `3. The remnant has the testimony of Jesus

Revelation also says the remnant has the testimony of Jesus Christ.

That means they are centered in Jesus.

Their identity is not built on being controversial.

Their mission is not to sound religiously superior.

Their witness must reveal the character, message, and faithfulness of Christ.

If the remnant loses Jesus, it loses its reason to exist.`,
      `4. The remnant exists by grace

Romans says there is a remnant according to grace.

That matters.

The remnant is not self-made.

It is not preserved by human strength.

It exists because God is faithful.

Grace creates, preserves, and sends the remnant.

The proper response is humility, not pride.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Remnant',
      lemma: 'שְׁאָרִית',
      transliteration: 'shearith',
      meaning:
        'What remains, especially a faithful group preserved by God during or after a time of crisis, judgment, or widespread unfaithfulness.',
      strongs: 'H7611',
      reference: 'Isaiah 10:21-22',
      note: `The remnant is not a badge of superiority.

It is a people preserved by grace for mission.

Revelation identifies the remnant by loyalty to God's commandments and the testimony of Jesus.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The remnant concept can be powerful, but it can also be mishandled.

If remnant truth makes people arrogant, they have misunderstood it.

A remnant is not preserved so it can look down on others.

A remnant is preserved so truth can bless others.

God preserves a faithful witness because the world still needs to see His character clearly.

Revelation gives two marks:

The commandments of God.

The testimony of Jesus.

That means the remnant holds together obedience and Christ-centered witness.

Truth and grace.

Loyalty and love.

Faithfulness and mission.

The remnant is not called to hide in a corner polishing its identity.

It is called to carry the everlasting gospel to the world.`,
    },
    studyInsightBlocks: [
      {
        type: 'revelation12Pattern',
        title: 'The Remnant of Her Seed',
        caption: 'The remnant is preserved by grace for mission, not superiority.',
        stages: [
          { label: 'Woman', tagline: "God's faithful people" },
          { label: 'Wilderness', tagline: 'truth preserved through persecution' },
          { label: 'Dragon', tagline: 'continued opposition' },
          { label: 'Remnant', tagline: 'commandments of God and testimony of Jesus' },
          { label: 'Mission', tagline: 'truth carried to the world in love' },
        ],
      },
      {
        type: 'scriptureChain',
        title: 'The Remnant of Her Seed',
        references: [
          { reference: 'Revelation 12:17' },
          { reference: 'Revelation 14:12' },
          { reference: 'Isaiah 10:20-22' },
          { reference: 'Jeremiah 23:3' },
          { reference: 'Romans 11:5' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: God preserves a faithful remnant by grace. They keep His commandments, hold the testimony of Jesus, and carry His truth to the world.',
      },
    ],
    reflectPrompt: `How can someone hold remnant truth without becoming proud or dismissive toward others?

Think about grace, mission, humility, obedience, love, and the difference between being preserved for service and claiming superiority.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, examine how you carry truth.

Ask:

"Does my faithfulness make me more humble?"

"Does obedience make me more loving?"

"Does knowing prophecy make me more compassionate?"

"Does my witness point people to Jesus or to my own identity?"

If the answer exposes pride, do not defend it.

Bring it to God.

Remnant truth is too serious to carry with ego.

Let grace make you faithful and humble at the same time.

Prayer:

Father, thank You for preserving a faithful witness through history. Thank You that Your remnant exists by grace, not human superiority. Keep me loyal to Your commandments and centered in the testimony of Jesus. Remove pride from the way I carry truth. Make me humble, faithful, loving, and useful in Your mission to the world. Amen.`,
    prayer: '',
    completionSummary: `The remnant is not about superiority. God preserves a faithful people by grace to keep His commandments, hold the testimony of Jesus, and carry truth to the world.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'fitw-l5-q1',
          prompt: 'According to Revelation 12:17, who does the dragon make war against?',
          options: [
            'The remnant of the woman\'s seed',
            'The dragon\'s own angels',
            'The throne of Rome only',
            'People with no connection to God',
          ],
          correctIndex: 0,
          explanation:
            'Revelation says the dragon was angry with the woman and went to make war with the remnant of her seed.',
        },
        {
          id: 'fitw-l5-q2',
          prompt: 'According to Revelation 12:17, what are two marks of the remnant?',
          options: [
            'They keep the commandments of God and have the testimony of Jesus Christ',
            'They reject Jesus and ignore God\'s law',
            'They worship the dragon',
            'They avoid all mission',
          ],
          correctIndex: 0,
          explanation:
            'Revelation identifies the remnant as those who keep God\'s commandments and have the testimony of Jesus Christ.',
        },
        {
          id: 'fitw-l5-q3',
          prompt: 'According to Revelation 14:12, what marks the saints?',
          options: [
            'The commandments of God and the faith of Jesus',
            'Human pride and religious superiority',
            'Fear and confusion',
            'Rejection of truth',
          ],
          correctIndex: 0,
          explanation:
            'Revelation 14:12 describes the saints as those who keep the commandments of God and the faith of Jesus.',
        },
        {
          id: 'fitw-l5-q4',
          prompt: 'According to Romans 11:5, the remnant exists according to what?',
          options: ['Grace', 'Human boasting', 'Political power', 'Personal perfection'],
          correctIndex: 0,
          explanation: 'Romans says there is a remnant according to the election of grace.',
        },
        {
          id: 'fitw-l5-q5',
          kind: 'reflection',
          prompt: 'What is one way you can let remnant truth make you more mission-focused instead of prideful?',
          explanation:
            'The remnant is preserved by grace for mission. Truth should produce humility, love, obedience, and Christ-centered witness.',
        },
      ],
    },
  },
  'truth-recovered-for-the-world': {
    openingThought: `God does not recover truth so people can feel superior.

He recovers truth so the world can see Him clearly.

After long seasons of darkness, persecution, tradition, and confusion, God has always worked to bring people back to Scripture.

Back to Jesus.

Back to the gospel.

Back to His commandments.

Back to the truth of His character.

Revelation shows a final message going to every nation, kindred, tongue, and people.

That means recovered truth is not meant to be hidden in a small corner.

It is meant to bless the world.

God preserves truth because He loves people.`,
    scriptureRef: 'Revelation 14:6',
    scriptureQuote: `And I saw another angel fly in the midst of heaven, having the everlasting gospel to preach unto them that dwell on the earth.

And to every nation, and kindred, and tongue, and people.`,
    scriptureAfterPrimary: `The final message begins with the everlasting gospel, sent to the whole world.`,
    scriptureSecondaryRef: 'Revelation 14:7',
    scriptureSecondaryQuote: `Fear God, and give glory to him; for the hour of his judgment is come.

And worship him that made heaven, and earth, and the sea, and the fountains of waters.`,
    scriptureAfterSecondary: `The call goes out to worship the Creator, not human tradition or religious power.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Revelation 12:17',
        quote: `And the dragon was wroth with the woman, and went to make war with the remnant of her seed.

Which keep the commandments of God, and have the testimony of Jesus Christ.`,
      },
      {
        type: 'scripture',
        reference: 'Daniel 8:14',
        quote: 'Unto two thousand and three hundred days; then shall the sanctuary be cleansed.',
      },
      {
        type: 'scripture',
        reference: 'John 17:17',
        quote: 'Sanctify them through thy truth: thy word is truth.',
      },
    ],
    teachingPoints: [
      `1. The final message begins with the gospel

Revelation 14 begins with the everlasting gospel.

That order matters.

The final message is not first about fear, arguments, or religious superiority.

It is good news.

God's final call to the world is rooted in the saving work of Jesus.

Truth must never be separated from the gospel.

If Jesus is not at the center, we are not carrying the message correctly.`,
      `2. The message is global

Revelation says the everlasting gospel goes to every nation, kindred, tongue, and people.

This is not a private message for a small religious club.

It is a worldwide mission.

God recovers truth so it can be proclaimed clearly, compassionately, and faithfully to the whole world.

The remnant exists for mission, not isolation.`,
      `3. The message calls people back to worship the Creator

Revelation 14 calls the world to worship Him who made heaven, earth, sea, and fountains of waters.

This language points back to creation and echoes the Sabbath command.

God calls people back to true worship.

Not worship shaped by human tradition.

Not worship centered in human authority.

Worship centered in the Creator.`,
      `4. God's Word is the foundation of recovered truth

Jesus said, "Thy word is truth."

That means recovered truth must be tested by Scripture.

Tradition may be old.

Culture may be loud.

Religious systems may be powerful.

But God's Word must have the final authority.

The remnant mission is not to invent truth.

It is to recover and proclaim what God has already revealed.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Recover',
      lemma: 'ἀποκαθίστημι',
      transliteration: 'apokathistemi',
      meaning: 'To restore, bring back, regain, or return something that was lost, hidden, neglected, or obscured.',
      strongs: 'G600',
      reference: 'Acts 3:21',
      note: `Recovered truth is not new truth invented by people.

It is biblical truth brought back into view after being obscured by confusion, tradition, persecution, or forgetfulness.

God recovers truth because He wants the world to see His character clearly.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `Revelation 14 shows that God's final message is both ancient and urgent.

It is ancient because it is the everlasting gospel.

It is urgent because it goes to the whole world before the final crisis.

This message calls people back to:

The gospel of Jesus.

The worship of the Creator.

The authority of Scripture.

The commandments of God.

The faith of Jesus.

The truth about God's character.

That means the remnant mission is not about being "the people who know more."

That would be a terrible brand and worse theology.

The mission is to reveal God more clearly.

Truth recovered must become truth shared.

Truth shared must be carried in love.

And love must never weaken truth.`,
    },
    studyInsightBlocks: [
      {
        type: 'revelation12Pattern',
        title: 'Truth Recovered for the World',
        caption: 'God recovers truth so the world can see Jesus clearly.',
        stages: [
          { label: 'Wilderness', tagline: 'truth pressured and obscured' },
          { label: 'Remnant', tagline: 'truth preserved by grace' },
          { label: 'Everlasting Gospel', tagline: 'Jesus at the center' },
          { label: 'Creator Worship', tagline: "return to God's authority" },
          { label: 'Mission', tagline: 'every nation, kindred, tongue, and people' },
        ],
      },
      {
        type: 'scriptureChain',
        title: 'Truth Recovered for the World',
        references: [
          { reference: 'Revelation 12:17' },
          { reference: 'Revelation 14:6-12' },
          { reference: 'Daniel 8:14' },
          { reference: 'John 17:17' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: God recovers biblical truth after seasons of confusion so the everlasting gospel can be proclaimed to the whole world.',
      },
    ],
    reflectPrompt: `Do you see truth mainly as something to protect, something to argue, or something to share for the healing of others?

Think about your view of Scripture, prophecy, Sabbath, gospel mission, online conversations, church identity, and whether truth makes you more loving or more combative.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, choose one recovered truth you believe matters deeply.

Then ask:

"How does this truth reveal Jesus?"

"How does this truth bless people?"

"How can I explain this without sounding proud or hostile?"

"How can I share this as good news?"

Do not just collect doctrine.

Translate truth into witness.

Maybe that means sharing a Bible verse.

Maybe it means explaining Sabbath as rest in the Creator.

Maybe it means pointing someone to Jesus instead of winning a debate.

Maybe it means studying a truth more carefully before speaking on it.

Truth is not weaker when carried with love.

It becomes clearer.

Prayer:

Father, thank You for preserving and recovering truth through history. Thank You for the everlasting gospel and the call to worship You as Creator. Keep Jesus at the center of everything I believe and share. Help me honor Your Word above human tradition. Teach me to carry truth with humility, clarity, courage, and love for the world You are trying to save. Amen.`,
    prayer: '',
    completionSummary: `God recovers truth so the world can see Jesus clearly. The remnant mission is to proclaim the everlasting gospel with Scripture, humility, and love.`,
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'fitw-l6-q1',
          prompt: 'According to Revelation 14:6, what message is preached to the world?',
          options: [
            'The everlasting gospel',
            'A message of human pride',
            'A message without Jesus',
            'A message only for one nation',
          ],
          correctIndex: 0,
          explanation:
            'Revelation 14 begins with the everlasting gospel being preached to every nation, kindred, tongue, and people.',
        },
        {
          id: 'fitw-l6-q2',
          prompt: 'According to Revelation 14:7, who are people called to worship?',
          options: [
            'Him who made heaven, earth, sea, and fountains of waters',
            'Human tradition',
            'The dragon',
            'Religious power',
          ],
          correctIndex: 0,
          explanation:
            'Revelation calls people back to worship the Creator, using language that echoes the Sabbath commandment.',
        },
        {
          id: 'fitw-l6-q3',
          prompt: 'According to John 17:17, what is truth?',
          options: ["God's Word", 'Human opinion', 'Popular tradition', 'Personal preference'],
          correctIndex: 0,
          explanation: 'Jesus said, "Thy word is truth," showing that Scripture is the foundation of recovered truth.',
        },
        {
          id: 'fitw-l6-q4',
          prompt: 'What is the purpose of recovered truth according to this lesson?',
          options: [
            'To reveal God clearly and carry the gospel to the world',
            'To make people arrogant',
            'To create spiritual superiority',
            'To hide the gospel from others',
          ],
          correctIndex: 0,
          explanation:
            'God recovers truth so people can see His character clearly and receive the everlasting gospel.',
        },
        {
          id: 'fitw-l6-q5',
          kind: 'reflection',
          prompt: 'What is one biblical truth you need to learn how to share with more love and clarity?',
          explanation:
            'Recovered truth is not meant to inflate pride. It is meant to bless the world by pointing people to Jesus.',
        },
      ],
    },
  },
  'faithful-until-the-end': {
    openingThought: `Faithfulness is not proven when everything is easy.

It is proven when pressure comes.

Revelation shows that God will have a people who remain faithful to Jesus in the final conflict. They are not faithful because they are naturally stronger than everyone else. They are faithful because they follow the Lamb, trust His Word, and hold to the truth when the world moves another direction.

The wilderness story is not only about survival.

It is about loyalty.

God preserves His people, restores His truth, and sends them into the world with the everlasting gospel.

The question is not only, "Will God have a faithful people?"

The question is, "Will I be faithful to Jesus?"`,
    scriptureRef: 'Revelation 14:12',
    scriptureQuote:
      'Here is the patience of the saints: here are they that keep the commandments of God, and the faith of Jesus.',
    scriptureAfterPrimary: `The final people of God are marked by patient endurance, obedience from love, and faith in Jesus.`,
    scriptureSecondaryRef: 'Revelation 12:17',
    scriptureSecondaryQuote: `And the dragon was wroth with the woman, and went to make war with the remnant of her seed.

Which keep the commandments of God, and have the testimony of Jesus Christ.`,
    scriptureAfterSecondary: `The same marks appear in the remnant: loyalty to God and faithful witness to Christ.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Matthew 24:13',
        quote: 'But he that shall endure unto the end, the same shall be saved.',
      },
      {
        type: 'scripture',
        reference: 'Hebrews 10:23',
        quote: 'Let us hold fast the profession of our faith without wavering; for he is faithful that promised.',
      },
    ],
    teachingPoints: [
      `1. God's people are called to patient endurance

Revelation 14:12 describes the patience of the saints.

This patience is not passive waiting.

It is faithful endurance.

It means staying loyal to Jesus when obedience costs something.

It means refusing to let pressure, fear, popularity, or persecution move the heart away from God.

The final generation is marked by endurance because their trust is anchored in Christ.`,
      `2. Faithfulness includes obedience

Revelation says God's people keep the commandments of God.

This does not mean they are saved by commandment-keeping.

They are saved by Jesus.

But grace does not produce rebellion.

True faith restores love, and love honors God's commandments.

Obedience is not the root of salvation.

It is the fruit of a heart surrendered to Christ.`,
      `3. Faithfulness centers on the faith of Jesus

Revelation 14:12 does not only mention the commandments of God.

It also mentions the faith of Jesus.

That matters.

God's people are not merely trying harder.

They are trusting deeper.

They live by the faithfulness of Christ, the teachings of Christ, and trust in Christ.

The final issue is not human willpower.

It is loyalty to Jesus.`,
      `4. God's faithfulness makes our faithfulness possible

Hebrews 10:23 says God is faithful who promised.

That is the foundation.

We hold fast because God holds His promise.

We endure because Jesus endured.

We remain faithful because He is faithful first.

The remnant is not a monument to human greatness.

It is evidence of God's preserving grace.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Patience',
      lemma: 'ὑπομονή',
      transliteration: 'hypomone',
      meaning: 'Endurance, perseverance, steadfastness, or remaining faithful under pressure.',
      strongs: 'G5281',
      reference: 'Revelation 14:12',
      note: `In Revelation 14:12, patience is more than waiting.

It is loyal endurance.

God's people remain faithful to Jesus even when obedience is unpopular, costly, or misunderstood.

Their strength is not found in themselves, but in Christ's faithfulness.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `Faithful in the Wilderness traces a clear pattern:

The church faced conflict.
Truth was pressured.
God preserved His people.
The wilderness became a place of protection.
The remnant was identified.
Truth was recovered.
The everlasting gospel was sent to the world.

But the study does not end with information.

It ends with a call.

God is not merely asking us to identify the faithful.

He is calling us to become faithful.

Faithful to Jesus.

Faithful to Scripture.

Faithful in worship.

Faithful in obedience.

Faithful in mission.

Faithful when truth is unpopular.

Faithful when compromise is easier.

The final people of God are not described as loud, proud, or combative.

They are described as patient.

They keep God's commandments.

They hold the faith of Jesus.

That is the kind of faithfulness the world needs to see.`,
    },
    studyInsightBlocks: [
      {
        type: 'revelation12Pattern',
        title: 'Faithful Until the End',
        caption: 'Faithfulness is not self-powered survival. It is loyalty to Jesus through the grace of God.',
        stages: [
          { label: 'Wilderness', tagline: 'God preserves His people' },
          { label: 'Remnant', tagline: 'God identifies faithful witnesses' },
          { label: 'Truth', tagline: 'God restores what was obscured' },
          { label: 'Mission', tagline: 'God sends the everlasting gospel' },
          { label: 'Endurance', tagline: "God's people remain faithful to Jesus" },
        ],
      },
      {
        type: 'scriptureChain',
        title: 'Faithful Until the End',
        references: [
          { reference: 'Revelation 12:17' },
          { reference: 'Revelation 14:12' },
          { reference: 'Matthew 24:13' },
          { reference: 'Hebrews 10:23' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: God\'s final people endure by trusting Jesus, keeping God\'s commandments, and holding fast to His faithful promise.',
      },
    ],
    reflectPrompt: `Where is Jesus calling you to become more faithful right now?

Think about your worship, obedience, Bible study, Sabbath, relationships, courage, mission, online witness, or willingness to stand for truth with love.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, choose one area of faithfulness and take one clear step.

Do not make it dramatic.

Make it real.

If your Bible study has been inconsistent, set a time and keep it.

If obedience has become selective, surrender the area you have been protecting.

If you avoid sharing truth, practice explaining one biblical truth with humility and love.

If pressure has made you silent, ask God for courage.

If you have been combative, ask God to make you faithful without becoming harsh.

Faithfulness is built in daily choices before it is tested in public moments.

Prayer:

Father, thank You for preserving Your people and Your truth through every season of history. Make me faithful to Jesus. Teach me to keep Your commandments from love, hold the faith of Jesus with courage, and endure without pride or fear. Help me carry truth with humility and live as a witness to Your character until the end. Amen.`,
    prayer: '',
    completionSummary: `You have completed Faithful in the Wilderness. God preserved His people, recovered His truth, and calls His followers to remain faithful to Jesus with patience, obedience, courage, and love.`,
    seriesCompleteScreen: {
      title: 'Study Complete',
      message:
        'You have completed Faithful in the Wilderness. God preserved His people, recovered His truth, and calls His followers to remain faithful to Jesus with patience, obedience, courage, and love.',
      primaryCta: { label: 'Back to Foundations Path', href: '/paths/foundations' },
      secondaryCta: {
        label: 'Review this study',
        href: '/study-library/faithful-in-the-wilderness',
      },
    },
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'fitw-l7-q1',
          prompt: 'According to Revelation 14:12, what marks the saints?',
          options: [
            'Patience, keeping God\'s commandments, and the faith of Jesus',
            'Popularity and human power',
            'Rejection of Scripture',
            'Fear of the dragon',
          ],
          correctIndex: 0,
          explanation:
            'Revelation 14:12 describes the patience of the saints, those who keep the commandments of God and the faith of Jesus.',
        },
        {
          id: 'fitw-l7-q2',
          prompt: 'According to Revelation 12:17, what two things identify the remnant?',
          options: [
            'They keep the commandments of God and have the testimony of Jesus Christ',
            'They follow the dragon and reject truth',
            'They avoid obedience and mission',
            'They trust tradition above Scripture',
          ],
          correctIndex: 0,
          explanation:
            'Revelation 12:17 identifies the remnant as those who keep God\'s commandments and have the testimony of Jesus Christ.',
        },
        {
          id: 'fitw-l7-q3',
          prompt: 'According to Matthew 24:13, who will be saved?',
          options: [
            'The one who endures unto the end',
            'The one who compromises first',
            'The one who avoids all trials',
            'The one who trusts popularity',
          ],
          correctIndex: 0,
          explanation: 'Jesus said the one who endures unto the end shall be saved.',
        },
        {
          id: 'fitw-l7-q4',
          prompt: 'What makes our faithfulness possible?',
          options: [
            "God's faithfulness and preserving grace",
            'Human pride',
            'Religious superiority',
            'Fear alone',
          ],
          correctIndex: 0,
          explanation: 'We remain faithful because God is faithful first. His grace preserves and strengthens His people.',
        },
        {
          id: 'fitw-l7-q5',
          kind: 'reflection',
          prompt: 'What is one practical step you can take this week to become more faithful to Jesus?',
          explanation:
            'Faithfulness grows through daily surrender, obedience, trust, courage, and love before it is tested in larger moments.',
        },
      ],
    },
  },
}
