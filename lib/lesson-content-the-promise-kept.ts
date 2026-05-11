import type { StudyVisualLessonBlock } from '@/lib/lesson-content-blocks'
import type { LessonReaderContent } from '@/lib/lesson-content'
import type { LessonQuizPayload } from '@/lib/lesson-quiz-types'
import {
  PROMISE_KEEP_MESSIAH_TIMELINE_HEADING_LABEL,
  PROMISE_KEEP_MESSIAH_TIMELINE_NOTES,
  PROPHECY_TIMELINE_ITEMS_DANIEL_70_WEEK,
} from '@/lib/prophecy-timeline-daniel-70-weeks'

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

const humanityVsGodPursuitVisual: StudyVisualLessonBlock = {
  type: 'studyVisual',
  title: 'God moves toward us',
  accent: 'sage',
  description: 'After sin, humanity hid in fear and shame. God called, came near, and began rescue.',
  payload: {
    variant: 'comparison',
    leftTitle: 'Humanity',
    rightTitle: 'God',
    leftItems: ['Sin', 'Fear', 'Shame', 'Hiding'],
    rightItems: ['Calls', 'Comes near', 'Reveals truth', 'Promises rescue'],
  },
}

const firstGospelPromiseFlowVisual: StudyVisualLessonBlock = {
  type: 'studyVisual',
  title: 'From Eden to the cross',
  accent: 'stone',
  description: 'One promise runs through Scripture until it rests in Christ.',
  payload: {
    variant: 'sequence',
    steps: [
      { label: 'Eden', subtitle: 'Promise given' },
      { label: 'Old Testament', subtitle: 'Promise carried' },
      { label: 'Jesus', subtitle: 'Promise fulfilled' },
      { label: 'Cross', subtitle: 'Enemy defeated' },
    ],
  },
}

const promiseTrailTowardChristVisual: StudyVisualLessonBlock = {
  type: 'studyVisual',
  title: 'The promise moves toward Christ',
  accent: 'sage',
  description: "From Eden through Israel's story to the promised Seed.",
  payload: {
    variant: 'sequence',
    steps: [
      { label: 'Eden', subtitle: '' },
      { label: 'Abraham', subtitle: '' },
      { label: 'Israel', subtitle: '' },
      { label: 'David', subtitle: '' },
      { label: 'Prophets', subtitle: '' },
      { label: 'Jesus', subtitle: '' },
    ],
  },
}

const propheticWitnessVisual: StudyVisualLessonBlock = {
  type: 'studyVisual',
  title: 'Prophetic witness',
  accent: 'stone',
  description: 'The Old Testament narrows the promise until Christ stands at the center.',
  payload: {
    variant: 'sequence',
    steps: [
      { label: 'Moses', subtitle: 'The coming Prophet' },
      { label: 'David', subtitle: 'The suffering King' },
      { label: 'Isaiah', subtitle: 'The wounded Servant' },
      { label: 'Jesus', subtitle: 'The promise fulfilled' },
    ],
  },
}

const edenLieVersusCrossVisual: StudyVisualLessonBlock = {
  type: 'studyVisual',
  title: 'What the cross answers',
  accent: 'stone',
  description: 'Eden suggested God was withholding. Calvary showed what God was willing to give.',
  payload: {
    variant: 'comparison',
    leftTitle: 'The lie',
    rightTitle: 'The cross',
    leftItems: ['God is withholding.'],
    rightItems: ['God gave Himself.'],
  },
}

const promiseKeptSeriesRecapVisual: StudyVisualLessonBlock = {
  type: 'studyVisual',
  title: 'The promise kept: a study recap',
  accent: 'sage',
  description: 'Promise made, carried, kept, and received. The story centers on Christ.',
  payload: {
    variant: 'sequence',
    steps: [
      { label: 'Promise made', subtitle: 'Genesis 3:15' },
      { label: 'Promise carried', subtitle: 'Prophets and timeline' },
      { label: 'Promise kept', subtitle: 'Jesus Christ' },
      { label: 'Promise received', subtitle: 'Trust, salvation, new life' },
    ],
  },
}

/** Guided reader lessons for "The Promise Kept" (Foundations). */
export const thePromiseKeptSeriesLessonLibrary: Record<string, LessonReaderContent> = {
  'god-came-looking': {
    openingThought: `After humanity sinned, God did not disappear.

He came looking.

Adam and Eve had believed a lie about God. They were afraid, ashamed, and hiding. But God's first move was not abandonment. It was pursuit.

He called to Adam, not because He was confused about Adam's location, but because He was drawing him out of hiding.

That moment tells us something beautiful about God.

Even when humanity ran from Him, He moved toward us.`,
    scriptureRef: 'Genesis 3:9',
    scriptureQuote: `And the LORD God called unto Adam, and said unto him, Where art thou?`,
    scriptureSecondaryRef: 'Genesis 3:10 to 11',
    scriptureSecondaryQuote: `And he said, I heard thy voice in the garden, and I was afraid, because I was naked; and I hid myself.

And he said, Who told thee that thou wast naked? Hast thou eaten of the tree, whereof I commanded thee that thou shouldest not eat?`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Romans 5:8',
        quote: `But God commendeth his love toward us, in that, while we were yet sinners, Christ died for us.`,
      },
    ],
    teachingPoints: [
      `1. God pursued humanity after sin

Adam and Eve hid because sin had filled them with fear and shame.

But God came near.

He did not leave them to figure out sin on their own. He called them out of hiding and began the work of rescue.

This is grace before humanity even knew how to ask for it.`,
      `2. God asked questions to reveal the truth

God asked, "Where art thou?" and "Who told thee?"

These questions were not for God's information.

They were for Adam and Eve's awakening.

God was helping them see what had happened inside them. Fear had entered. Shame had entered. A false view of God had entered.

Grace does not ignore truth.

Grace brings truth into the light so healing can begin.`,
      `3. God's heart was already moving toward redemption

Genesis 3 does not show God panicking.

It shows God taking initiative.

Before Adam and Eve could repair anything, God came looking.

Before they could cover themselves properly, God was preparing a better covering.

Before they understood the full weight of sin, God was already moving toward the promise of a Savior.`,
      `4. The cross proves God's pursuit

Romans 5:8 shows the same pattern on a larger scale.

While we were still sinners, Christ died for us.

God did not wait for humanity to become worthy.

He moved first.

The garden shows God coming near after sin.

The cross shows how far He was willing to go.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: "Listen to what God's voice is doing in Eden.",
    wordStudy: {
      surface: 'Called',
      lemma: 'קָרָא (qara)',
      transliteration: 'qara',
      meaning: 'To summon, invite, address, or call out to someone.',
      strongs: 'H7121',
      reference: 'Genesis 3:9',
      note: `When God called to Adam, it was not the voice of a confused Creator.

It was the voice of pursuing grace.

God's question was an invitation out of hiding and into truth.

He still calls sinners the same way today.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The first thing God does after the fall is deeply important.

He comes looking.

That means the story of redemption does not begin with humans searching for God.

It begins with God searching for humans.

This destroys the idea that God is cold toward sinners.

He hates sin, but He moves toward the sinner with mercy.

He exposes the lie, names the wound, and begins the rescue.

The same heart that called "Where art thou?" in Eden is revealed fully in Jesus.

God comes looking.

God keeps loving.

God moves first.`,
    },
    studyInsightBlocks: [
      humanityVsGodPursuitVisual,
      {
        type: 'scriptureChain',
        title: 'God Moves First',
        references: [
          { reference: 'Genesis 3:9' },
          { reference: 'Genesis 3:10 to 11' },
          { reference: 'Romans 5:8' },
          { reference: 'Luke 19:10' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: After sin entered, God moved toward humanity with truth, grace, and the promise of rescue.',
      },
    ],
    reflectPrompt: `When you feel ashamed or distant from God, do you imagine Him moving toward you or away from you?

Be honest. Your answer may reveal what picture of God you carry when you feel spiritually exposed.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, when you feel the urge to hide from God, remember the question:

"Where art thou?"

Do not hear it as condemnation.

Hear it as invitation.

God is not asking because He has lost you.

He is asking because He wants you to stop hiding and come into the light.

Try praying one honest sentence:

"Lord, this is where I am."

That is enough to begin.

Prayer:

Father, thank You for coming near when humanity ran. Thank You for seeking sinners instead of abandoning us. Help me stop hiding from You. Teach me to hear Your voice as an invitation to healing, not condemnation. Bring me into the light of Your truth and the safety of Your love. Amen.`,
    prayer: '',
    completionSummary:
      'God came looking when humanity hid. His first move after sin was not abandonment, but pursuing grace.',
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'tpk-l1-q1',
          prompt: 'What did God ask Adam in Genesis 3:9?',
          options: ['"Where art thou?"', '"Why are you stronger?"', '"Who created the serpent?"', '"Where is the garden?"'],
          correctIndex: 0,
          explanation:
            'Genesis 3:9 says God called to Adam and asked, "Where art thou?" This was an invitation out of hiding.',
        },
        {
          id: 'tpk-l1-q2',
          prompt: 'Why did Adam say he hid?',
          options: [
            'Because he was afraid and naked',
            'Because he was hungry',
            "Because he forgot God's name",
            'Because the garden was too large',
          ],
          correctIndex: 0,
          explanation:
            'Genesis 3:10 says Adam hid because he was afraid and naked, showing the effects of fear and shame.',
        },
        {
          id: 'tpk-l1-q3',
          prompt: "What does Romans 5:8 reveal about God's love?",
          options: [
            'Christ died for us while we were still sinners',
            'God waited until humanity became perfect',
            'God stopped loving after the fall',
            'Humanity rescued itself',
          ],
          correctIndex: 0,
          explanation:
            'Romans 5:8 shows that God moved toward us in love while we were still sinners.',
        },
        {
          id: 'tpk-l1-q4',
          prompt: 'What is the main point of this lesson?',
          options: [
            'God moves toward sinners with truth and grace',
            'God abandons people when they fail',
            'Shame is stronger than grace',
            'Adam found God first',
          ],
          correctIndex: 0,
          explanation:
            "The lesson shows that God's first move after sin was pursuit, not abandonment.",
        },
        {
          id: 'tpk-l1-q5',
          kind: 'reflection',
          prompt:
            "What would change if you believed God's voice was calling you out of hiding, not pushing you away?",
          explanation:
            "God's question to Adam reveals His pursuing grace. He calls sinners into truth so healing can begin.",
        },
      ],
    },
  },
  'the-first-gospel-promise': {
    openingThought: `The first promise of Jesus was given in the ruins.

Adam and Eve had sinned. Fear had entered. Shame had entered. The serpent had deceived humanity. Everything looked broken.

But God spoke hope before humanity could fix anything.

Genesis 3:15 is often called the first gospel promise because it points forward to a coming Deliverer.

God promised that evil would not have the final word.

A child would come.
The enemy would be defeated.
The Savior would be wounded, but victorious.`,
    scriptureRef: 'Genesis 3:15',
    scriptureQuote: `And I will put enmity between thee and the woman, and between thy seed and her seed; it shall bruise thy head, and thou shalt bruise his heel.`,
    scriptureSecondaryRef: '1 John 3:8',
    scriptureSecondaryQuote: `For this purpose the Son of God was manifested, that he might destroy the works of the devil.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Hebrews 2:14',
        quote: `That through death he might destroy him that had the power of death, that is, the devil.`,
      },
    ],
    teachingPoints: [
      `1. God promised conflict against evil

God said He would put enmity between the serpent and the woman.

Enmity means hostility or opposition.

This is mercy.

After sin, humanity was naturally bent toward distrust and rebellion. But God promised to place within humanity a resistance against evil and a longing for restoration.

Even our hatred of evil is a sign that God has not abandoned us.`,
      `2. God promised a coming Seed

Genesis 3:15 speaks of the woman's Seed.

This points forward to a coming Deliverer from the human family.

The rescue would not come from human strength alone.

God Himself would bring salvation through the promised One.

The rest of Scripture keeps tracing this promise until it reaches Jesus.`,
      `3. The enemy would be defeated

God said the Seed would bruise the serpent's head.

A wound to the head points to decisive victory.

The serpent would not rule forever.

The enemy who deceived humanity would one day be conquered.

Jesus came to destroy the works of the devil.`,
      `4. The Savior would be wounded

The promise also says the serpent would bruise the Seed's heel.

This points to suffering.

Jesus would defeat evil, but He would do it through sacrifice.

At the cross, Christ was wounded for us.

But His wound became our victory.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: 'Notice what God placed between humanity and evil.',
    wordStudy: {
      surface: 'Enmity',
      lemma: 'אֵיבָה (evah)',
      transliteration: 'evah',
      meaning: 'Hostility, opposition, or deep conflict between two sides.',
      strongs: 'H342',
      reference: 'Genesis 3:15',
      note: `Enmity in Genesis 3:15 is not bad news.

It is grace.

God placed opposition between humanity and evil so that sin would not fully own the human heart.

The desire to resist darkness and long for restoration is evidence that God is still working.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `Genesis 3:15 is one of the most important promises in Scripture.

It is the first gospel announcement.

Before there was a nation of Israel, a temple, a cross, or a New Testament, there was this promise:

Someone is coming.

That promise carries the whole Bible forward.

The prophets expand it.
The sacrifices symbolize it.
The covenants preserve it.
The Gospels reveal it.
The cross fulfills it.

Jesus is the promised Seed.

He entered our humanity, faced the enemy, suffered for sin, and defeated the one who held humanity in bondage.

The promise was made in Eden.

The promise was kept in Christ.`,
    },
    studyInsightBlocks: [
      firstGospelPromiseFlowVisual,
      {
        type: 'scriptureChain',
        title: 'The First Gospel Promise',
        references: [
          { reference: 'Genesis 3:15' },
          { reference: '1 John 3:8' },
          { reference: 'Hebrews 2:14' },
          { reference: 'Colossians 2:15' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: God promised a Deliverer who would defeat the enemy. Jesus is that promised One.',
      },
    ],
    reflectPrompt: `How does it change the way you see God to know He gave a promise of rescue immediately after humanity fell?

Think about what this reveals about God's patience, mercy, and commitment to saving us.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, remember that God's grace speaks before you have everything fixed.

Adam and Eve had no plan.
No solution.
No way to undo what they had done.

But God gave a promise.

When you feel like you have failed too badly, return to this truth:

God moves toward sinners with a promise of rescue.

Your hope is not in your ability to repair yourself.

Your hope is in the Promised One.

Prayer:

Father, thank You for giving hope immediately after humanity fell. Thank You for promising a Deliverer before we knew how to ask for rescue. Help me trust Jesus as the promised One who defeats evil, breaks bondage, and brings me back to You. Amen.`,
    prayer: '',
    completionSummary:
      'The first gospel promise was given in Eden. Humanity had fallen, but God promised a Deliverer. Jesus is the promise kept.',
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'tpk-l2-q1',
          prompt: 'What is Genesis 3:15 often called?',
          options: [
            'The first gospel promise',
            'The last commandment',
            'The first parable',
            'The final judgment',
          ],
          correctIndex: 0,
          explanation:
            'Genesis 3:15 is often called the first gospel promise because it points forward to a coming Deliverer.',
        },
        {
          id: 'tpk-l2-q2',
          prompt: 'What does "enmity" mean in this lesson?',
          options: ['Hostility or opposition', 'Forgetfulness', 'Celebration', 'Silence'],
          correctIndex: 0,
          explanation:
            'Enmity means hostility or opposition. In Genesis 3:15, it describes God placing conflict between humanity and evil.',
        },
        {
          id: 'tpk-l2-q3',
          prompt: 'Who is the promised Seed ultimately pointing to?',
          options: ['Jesus', 'Pharaoh', 'Cain', 'Pilate'],
          correctIndex: 0,
          explanation:
            'The promised Seed ultimately points to Jesus, the Deliverer who defeats the enemy and rescues humanity.',
        },
        {
          id: 'tpk-l2-q4',
          prompt: 'According to 1 John 3:8, why was the Son of God manifested?',
          options: [
            'To destroy the works of the devil',
            "To hide God's character",
            'To make sin harmless',
            'To avoid suffering',
          ],
          correctIndex: 0,
          explanation:
            '1 John 3:8 says Jesus was manifested to destroy the works of the devil.',
        },
        {
          id: 'tpk-l2-q5',
          kind: 'reflection',
          prompt: 'What part of Genesis 3:15 gives you the most hope?',
          explanation:
            'Genesis 3:15 shows that God promised rescue before humanity could fix itself. The hope of Scripture begins with God\'s initiative.',
        },
      ],
    },
  },
  'the-promised-seed': {
    openingThought: `God's promise in Eden did not disappear.

It began to move through history.

Genesis 3:15 spoke of a coming Seed, a promised Deliverer who would defeat the serpent. From that moment forward, Scripture begins tracing the promise.

The Bible is not a random collection of spiritual stories.

It is a rescue story.

Again and again, God keeps narrowing our attention toward the One who would come from humanity, enter our brokenness, and defeat the enemy on our behalf.

That promised Seed is Jesus.`,
    scriptureRef: 'Galatians 3:16',
    scriptureQuote: `Now to Abraham and his seed were the promises made. He saith not, And to seeds, as of many; but as of one, And to thy seed, which is Christ.`,
    scriptureSecondaryRef: 'Genesis 3:15',
    scriptureSecondaryQuote: `And I will put enmity between thee and the woman, and between thy seed and her seed.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'John 12:31 to 32',
        quote: `Now shall the prince of this world be cast out.

And I, if I be lifted up from the earth, will draw all men unto me.`,
      },
      {
        type: 'scripture',
        reference: 'Hebrews 2:14',
        quote: `That through death he might destroy him that had the power of death, that is, the devil.`,
      },
    ],
    teachingPoints: [
      `1. The promise centered on a Person

Genesis 3:15 promised a Seed.

Galatians 3:16 identifies the promised Seed as Christ.

This means the hope of humanity was never just a system, a nation, or a moral code.

The hope was a Person.

God promised to send someone who would enter the human family and defeat the enemy from within the human story.`,
      `2. Jesus came through the human family

The promised Seed would come from humanity.

That matters.

Jesus did not save us from a distance. He entered our world, our weakness, our suffering, and our history.

He became truly human while remaining truly divine.

The Rescuer came close enough to carry what we could not carry.`,
      `3. The promised Seed would confront the enemy

John 12 speaks of the prince of this world being cast out.

Hebrews 2 says Jesus destroys the one who had the power of death through His own death.

The promised Seed did not come merely to inspire people.

He came to defeat the enemy, break bondage, and open the way back to God.`,
      `4. The victory came through sacrifice

Genesis 3:15 said the serpent would bruise the heel of the Seed.

That points to suffering.

Jesus' victory came through the cross.

He was wounded, but not defeated.

He died, but rose again.

The enemy struck Him, but Christ crushed the enemy's power.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: 'Trace how Scripture narrows "seed" until it names Christ.',
    wordStudy: {
      surface: 'Seed',
      lemma: 'זֶרַע (zera)',
      transliteration: 'zera',
      meaning: 'Offspring, descendant, or one who comes from a family line.',
      strongs: 'H2233',
      reference: 'Genesis 3:15',
      note: `In Genesis 3:15, the Seed points forward to the coming Deliverer.

The promise becomes clearer through Scripture until Paul identifies the Seed as Christ.

Jesus is the promised descendant who enters humanity to rescue humanity.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The Bible carries one promise forward across generations.

From Eden to Abraham.
From Abraham to Israel.
From Israel to David.
From David to the prophets.
From the prophets to Christ.

The promise keeps moving until it arrives in Jesus.

This matters because Christianity is not built on vague hope.

It is built on God keeping His word.

Jesus is not a backup plan.

He is the promised One.

The cross was not a failure of the promise.

It was the way the promise was fulfilled.

Through His death and resurrection, Jesus defeated the enemy and opened the way for humanity to be restored.`,
    },
    studyInsightBlocks: [
      promiseTrailTowardChristVisual,
      {
        type: 'scriptureChain',
        title: 'The Promised Seed',
        references: [
          { reference: 'Genesis 3:15' },
          { reference: 'Galatians 3:16' },
          { reference: 'John 12:31 to 32' },
          { reference: 'Hebrews 2:14' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: The promised Seed is Jesus, who entered humanity to defeat the enemy and restore us to God.',
      },
    ],
    reflectPrompt: `What does it mean to you that Jesus entered the human family to rescue humanity from within our own story?

Think about the closeness of God's rescue. Jesus did not stay distant from our weakness, pain, or history.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, remember that God's promises may unfold over time, but they do not fail.

The promise of the Seed began in Eden and moved through generations before being fulfilled in Christ.

That means delay is not the same as denial.

God can be trusted even when the promise takes time.

When you feel impatient or discouraged, pray:

"Lord, help me trust Your promise while I wait."

The God who kept His promise in Jesus can be trusted with your life too.

Prayer:

Father, thank You for sending Jesus as the promised Seed. Thank You that He entered our humanity, faced the enemy, and opened the way back to You. Help me trust that Your promises are faithful, even when they unfold slowly. Keep my hope anchored in Christ. Amen.`,
    prayer: '',
    completionSummary:
      'The promise moved through history until it reached Jesus. He is the promised Seed who entered humanity, defeated the enemy, and opened the way back to God.',
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'tpk-l3-q1',
          prompt: 'According to Galatians 3:16, who is the promised Seed?',
          options: ['Christ', 'Pharaoh', 'Caesar', 'Goliath'],
          correctIndex: 0,
          explanation: 'Galatians 3:16 identifies the promised Seed as Christ.',
        },
        {
          id: 'tpk-l3-q2',
          prompt: 'Why does it matter that Jesus entered the human family?',
          options: [
            'He came close to rescue humanity from within our story',
            'He avoided human weakness completely',
            'He stayed distant from suffering',
            'He only appeared as an angel',
          ],
          correctIndex: 0,
          explanation:
            'Jesus entered humanity to carry our burden, defeat the enemy, and restore us to God.',
        },
        {
          id: 'tpk-l3-q3',
          prompt: 'What does Hebrews 2:14 say Jesus destroyed through death?',
          options: [
            'Him that had the power of death, the devil',
            'The need for love',
            "God's law",
            'Human value',
          ],
          correctIndex: 0,
          explanation:
            'Hebrews 2:14 says Jesus destroyed the one who had the power of death, that is, the devil.',
        },
        {
          id: 'tpk-l3-q4',
          prompt: 'What does this lesson teach about the cross?',
          options: [
            'It was the fulfillment of the promise',
            'It was a surprise failure',
            "It ended God's love",
            'It showed Satan was stronger',
          ],
          correctIndex: 0,
          explanation:
            'The cross was not the failure of the promise. It was the way Jesus fulfilled the promise and defeated the enemy.',
        },
        {
          id: 'tpk-l3-q5',
          kind: 'reflection',
          prompt: "Where do you need to trust God's promise even when the timing feels slow?",
          explanation:
            'The promise of the Seed unfolded over time, but God kept His word in Jesus. His timing may stretch us, but His promises do not fail.',
        },
      ],
    },
  },
  'promise-through-the-prophets': {
    openingThought: `God did not give one promise and then go silent.

After Eden, He kept speaking.

Through prophets, patterns, sacrifices, songs, and symbols, God kept pointing forward to the One who would come.

The Old Testament is not just a record of ancient history. It is a promise moving toward fulfillment.

Moses pointed forward.
David sang forward.
Isaiah saw forward.
The prophets kept the hope alive.

God was preparing the world to recognize Jesus.`,
    scriptureRef: 'Isaiah 53:5',
    scriptureQuote: `But he was wounded for our transgressions, he was bruised for our iniquities.`,
    scriptureSecondaryRef: 'Deuteronomy 18:15',
    scriptureSecondaryQuote: `The LORD thy God will raise up unto thee a Prophet from the midst of thee, of thy brethren, like unto me.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Psalm 22:1',
        quote: `My God, my God, why hast thou forsaken me?`,
      },
      {
        type: 'scripture',
        reference: 'Luke 24:27',
        quote: `And beginning at Moses and all the prophets, he expounded unto them in all the scriptures the things concerning himself.`,
      },
    ],
    teachingPoints: [
      `1. Moses pointed to a coming Prophet

In Deuteronomy 18, Moses spoke of a Prophet who would come from among the people.

This promised Prophet would speak for God and call people to listen.

Jesus fulfills this hope.

He does not merely speak messages from God.

He is the Word made flesh, revealing God clearly.`,
      `2. David's songs pointed to the suffering Messiah

Psalm 22 gives language that later echoes at the cross.

"My God, my God, why hast thou forsaken me?"

David's suffering became prophetic language that helped reveal the deeper suffering of Christ.

The Messiah would not come untouched by pain.

He would enter suffering to redeem us.`,
      `3. Isaiah revealed the wounded Servant

Isaiah 53 shows the Messiah as a suffering Servant.

He is wounded for transgressions.
Bruised for iniquities.
Bearing what belongs to others.

This is not random tragedy.

It is self-giving love.

Jesus carries the wound humanity caused so humanity can receive the healing God gives.`,
      `4. Jesus is the center of the prophetic promise

Luke 24 says Jesus explained the things concerning Himself from Moses and the prophets.

That means the Old Testament is not disconnected from Jesus.

It points to Him.

The promise grows clearer until Christ stands at the center of the whole story.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: "A prophet carries God's message. Christ carries something more.",
    wordStudy: {
      surface: 'Prophet',
      lemma: 'נָבִיא (nabi)',
      transliteration: 'nabi',
      meaning: "One who speaks God's message and reveals God's will.",
      strongs: 'H5030',
      reference: 'Deuteronomy 18:15',
      note: `Jesus is greater than every prophet before Him.

The prophets spoke about God.

Jesus reveals God.

The prophets carried the promise.

Jesus is the promise fulfilled.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The Old Testament gives us many windows into the mission of Jesus.

Through Moses, we see the coming Prophet.

Through David, we hear the cry of suffering.

Through Isaiah, we see the wounded Servant.

Through the sacrifices, we see the cost of sin and the need for a substitute.

Through the prophets, we see God's promise becoming clearer.

This matters because Jesus did not appear without context.

He came exactly where Scripture had been pointing.

God's promise was not vague.

It was woven into the story, generation after generation.

The more we read Scripture, the more we see that Jesus was always the center.`,
    },
    studyInsightBlocks: [
      propheticWitnessVisual,
      {
        type: 'scriptureChain',
        title: 'The Prophets Point to Jesus',
        references: [
          { reference: 'Deuteronomy 18:15' },
          { reference: 'Psalm 22:1' },
          { reference: 'Isaiah 53:5' },
          { reference: 'Luke 24:27' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: The Old Testament carries the promise forward through prophets, songs, symbols, and sacrifices until it finds its fulfillment in Jesus.',
      },
    ],
    reflectPrompt: `How does it strengthen your faith to see that Jesus was promised before He came?

Think about what this says about God's faithfulness, patience, and ability to keep His word across generations.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, read the Old Testament with one question in mind:

"How does this point me toward Jesus?"

You may not see it in every detail immediately, and that is fine.

Start with the big picture.

God is faithful.
God keeps speaking.
God keeps promising.
God keeps moving history toward redemption.

When your life feels unclear, remember this:

God knows how to carry a promise through time.

Prayer:

Father, thank You for speaking through the prophets and carrying Your promise through history. Help me see Jesus at the center of Scripture. Strengthen my trust in Your faithfulness, especially when I cannot yet see the full picture. Teach me to read Your word with hope. Amen.`,
    prayer: '',
    completionSummary:
      'God carried the promise through prophets, songs, symbols, and sacrifices. The Old Testament points forward, and Jesus is the promise fulfilled.',
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'tpk-l4-q1',
          prompt: 'What did Moses speak of in Deuteronomy 18:15?',
          options: ['A coming Prophet', 'A Roman emperor', 'A golden statue', 'A new garden'],
          correctIndex: 0,
          explanation:
            'Deuteronomy 18:15 points to a coming Prophet from among the people, ultimately fulfilled in Jesus.',
        },
        {
          id: 'tpk-l4-q2',
          prompt: 'Which Psalm includes the words, "My God, my God, why hast thou forsaken me?"',
          options: ['Psalm 22', 'Psalm 1', 'Psalm 91', 'Psalm 150'],
          correctIndex: 0,
          explanation: 'Psalm 22 contains these words, which Jesus echoes at the cross.',
        },
        {
          id: 'tpk-l4-q3',
          prompt: 'What does Isaiah 53 reveal about the Messiah?',
          options: [
            'He would be a wounded Servant',
            'He would avoid all suffering',
            'He would reject humanity',
            'He would never sacrifice Himself',
          ],
          correctIndex: 0,
          explanation:
            'Isaiah 53 reveals the Messiah as the wounded Servant who bears the suffering connected to human sin.',
        },
        {
          id: 'tpk-l4-q4',
          prompt: 'According to Luke 24:27, what did Jesus explain from Moses and the prophets?',
          options: [
            'The things concerning Himself',
            'How to build Rome',
            'Why Scripture did not matter',
            'How to avoid prophecy',
          ],
          correctIndex: 0,
          explanation:
            'Luke 24:27 shows that Jesus explained how the Scriptures pointed to Him.',
        },
        {
          id: 'tpk-l4-q5',
          kind: 'reflection',
          prompt:
            'What Old Testament picture of Jesus stands out to you most: Prophet, suffering King, wounded Servant, or sacrifice?',
          explanation:
            "Each picture reveals part of Christ's mission and helps us see the promise of redemption more clearly.",
        },
      ],
    },
  },
  'the-messiah-timeline': {
    openingThought: `God did not only promise that the Messiah would come.

He gave a timeline.

That matters.

The coming of Jesus was not random, accidental, or last minute. Long before Bethlehem, long before the Jordan River, and long before the cross, Scripture pointed forward to the mission of the Messiah.

Daniel 9 gives one of the clearest prophetic timelines in the Bible.

It shows that God was not guessing His way through history.

He was keeping His promise with precision.

The same God who promised a Deliverer in Eden also revealed when the Messiah would appear, suffer, and confirm the covenant.`,
    scriptureRef: 'Daniel 9:25',
    scriptureQuote: `Know therefore and understand, that from the going forth of the commandment to restore and to build Jerusalem unto the Messiah the Prince shall be seven weeks, and threescore and two weeks.`,
    scriptureSecondaryRef: 'Daniel 9:26',
    scriptureSecondaryQuote: `And after threescore and two weeks shall Messiah be cut off, but not for himself.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Daniel 9:27',
        quote: `And he shall confirm the covenant with many for one week.`,
      },
      {
        type: 'scripture',
        reference: 'Ezra 7:13',
        quote: `I make a decree, that all they of the people of Israel... which are minded of their own freewill to go up to Jerusalem, go with thee.`,
      },
      {
        type: 'scripture',
        reference: 'Matthew 3:16 to 17',
        quote: `And Jesus, when he was baptized, went up straightway out of the water.

And lo a voice from heaven, saying, This is my beloved Son, in whom I am well pleased.`,
      },
    ],
    teachingPoints: [
      `1. Daniel's prophecy begins with a command

Daniel 9 says the timeline begins with the command to restore and rebuild Jerusalem.

This points to the decree connected with Ezra 7 in 457 BC.

That date becomes the starting point for the 70-week prophecy.

God gave Daniel a timeline that would lead forward to the Messiah.`,
      `2. The 70 weeks represent 490 prophetic years

Daniel 9 speaks of 70 weeks.

In Bible prophecy, symbolic days can represent years.

Seventy weeks equals 490 days, pointing to 490 prophetic years.

This period was connected especially to Daniel's people and the unfolding of God's covenant purpose.`,
      `3. The Messiah would appear after 69 weeks

Daniel says that from the command to restore Jerusalem until Messiah the Prince would be 7 weeks plus 62 weeks.

That equals 69 weeks, or 483 prophetic years.

Starting from 457 BC, this leads to 27 AD.

That is the year Jesus was baptized and anointed by the Holy Spirit, beginning His public ministry.`,
      `4. The Messiah would be cut off, not for Himself

Daniel 9:26 says the Messiah would be cut off, but not for Himself.

This points to the death of Jesus.

In the middle of the final week, Jesus was crucified.

He did not die for His own sin.

He died for us.`,
      `5. The covenant was confirmed through Christ

Daniel 9:27 says He would confirm the covenant with many for one week.

Jesus confirmed God's promise through His life, death, resurrection, and the gospel going forward.

The timeline shows that the cross was not a failure.

It was the fulfillment of God's promise.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: 'The title Messiah helps us recognize the One Scripture was anticipating.',
    wordStudy: {
      surface: 'Messiah',
      lemma: 'מָשִׁיחַ (mashiach)',
      transliteration: 'mashiach',
      meaning: 'Anointed One.',
      strongs: 'H4899',
      reference: 'Daniel 9:25',
      note: `The word Messiah points to One chosen and anointed by God for a special mission.

Jesus was publicly revealed as the Messiah at His baptism when the Spirit descended and the Father declared Him His beloved Son.

Daniel's timeline points forward to that appearing.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'prophecy_lens',
      body: `Daniel 9 can feel intimidating at first, but the main point is clear:

God kept His promise on time.

The prophecy moves from restoration to Messiah.

From decree to baptism.

From baptism to cross.

From cross to covenant confirmed.

This is not just a math lesson.

It is a faith lesson.

God was guiding history toward Jesus.

The Messiah did not arrive too early.
He did not arrive too late.
He came in the fullness of time.

The timeline helps us see that the promise of redemption was not vague hope.

It was planned, foretold, and fulfilled in Christ.`,
    },
    studyInsightBlocks: [
      {
        type: 'prophecyTimeline',
        id: 'tpk-lesson5-daniel9-timeline',
        label: PROMISE_KEEP_MESSIAH_TIMELINE_HEADING_LABEL,
        heading: 'Daniel 9: The Messiah Timeline',
        items: PROPHECY_TIMELINE_ITEMS_DANIEL_70_WEEK,
        footerNotes: PROMISE_KEEP_MESSIAH_TIMELINE_NOTES,
      },
      {
        type: 'scriptureChain',
        title: 'The Messiah Foretold',
        references: [
          { reference: 'Daniel 9:25' },
          { reference: 'Daniel 9:26 to 27' },
          { reference: 'Ezra 7:13' },
          { reference: 'Matthew 3:16 to 17' },
          { reference: 'Acts 10:38' },
        ],
      },
      {
        type: 'paragraph',
        text:
          "Takeaway: Daniel's prophecy points forward to the appearing, ministry, and sacrifice of Jesus the Messiah.",
      },
    ],
    reflectPrompt: `How does seeing God's promise unfold through a timeline affect your trust in Scripture?

Think about what it means that God was guiding history toward Jesus before the events happened.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, remember that God is not careless with time.

His promises may feel slow, but they are not forgotten.

Daniel's timeline shows that God works through history with purpose.

When you feel like God is late, remember Jesus.

The Messiah came at the right time.

The cross happened at the right time.

God's promise was kept at the right time.`,
    prayer: `Father, thank You for revealing Your faithfulness through Scripture. Help me trust that You are guiding history and my life with wisdom. When Your timing feels slow, remind me that Jesus came exactly as promised. Strengthen my confidence in Your word and keep my hope centered on Christ. Amen.`,
    completionSummary:
      'Daniel\'s timeline shows that God kept His promise with purpose. The Messiah appeared, ministered, and was cut off, not for Himself, just as Scripture foretold.',
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'tpk-l5-q1',
          prompt: 'According to Daniel 9:25, what event begins the prophetic timeline?',
          options: [
            'A. The command to restore and build Jerusalem',
            'B. The birth of Moses',
            'C. The fall of Babylon',
            'D. The crossing of the Red Sea',
          ],
          correctIndex: 0,
          explanation:
            'Daniel 9:25 says the timeline begins with the command to restore and build Jerusalem.',
        },
        {
          id: 'tpk-l5-q2',
          prompt: 'How many years are represented by the 70 weeks in this lesson?',
          options: [
            'A. 70 years',
            'B. 490 prophetic years',
            'C. 7 years',
            'D. 1,000 years',
          ],
          correctIndex: 1,
          explanation:
            'Seventy weeks equals 490 prophetic days, understood here as 490 prophetic years.',
        },
        {
          id: 'tpk-l5-q3',
          prompt: 'What major event happened in 27 AD according to this timeline?',
          options: [
            'A. Jesus was baptized and anointed for public ministry',
            'B. Jerusalem was created',
            'C. Moses received the Ten Commandments',
            'D. Paul wrote Revelation',
          ],
          correctIndex: 0,
          explanation:
            'The 483 prophetic years lead to 27 AD, when Jesus was baptized and anointed for public ministry.',
        },
        {
          id: 'tpk-l5-q4',
          prompt: 'What does Daniel 9:26 say would happen to the Messiah?',
          options: [
            'A. He would be cut off, but not for Himself',
            'B. He would build Rome',
            'C. He would avoid suffering',
            'D. He would stop loving humanity',
          ],
          correctIndex: 0,
          explanation:
            'Daniel 9:26 says Messiah would be cut off, but not for Himself, pointing to Christ\'s sacrificial death.',
        },
        {
          id: 'tpk-l5-q5',
          kind: 'reflection',
          prompt: 'What part of the Daniel 9 timeline helps you see Jesus more clearly?',
          explanation:
            'The timeline is meant to point to Christ, showing His appearing, ministry, sacrifice, and covenant faithfulness.',
        },
      ],
    },
  },
  'cut-off-not-for-himself': {
    openingThought: `Daniel said the Messiah would be "cut off, but not for himself."

That phrase is heavy.

It means the promised One would suffer, but not because He deserved it. He would die, but not for His own guilt. He would be wounded, but His wound would become our rescue.

The cross was not an accident.

It was not heaven losing control.

It was God keeping His promise through self-giving love.

Jesus was cut off so we could be brought near.`,
    scriptureRef: 'Daniel 9:26',
    scriptureQuote: `And after threescore and two weeks shall Messiah be cut off, but not for himself.`,
    scriptureSecondaryRef: 'Romans 5:8',
    scriptureSecondaryQuote: `But God commendeth his love toward us, in that, while we were yet sinners, Christ died for us.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: '1 John 3:16',
        quote: `Hereby perceive we the love of God, because he laid down his life for us.`,
      },
      {
        type: 'scripture',
        reference: 'Matthew 27:46',
        quote: `My God, my God, why hast thou forsaken me?`,
      },
    ],
    teachingPoints: [
      `1. The Messiah would suffer for others

Daniel says the Messiah would be cut off, but not for Himself.

This points to substitution.

Jesus did not die because He had sinned.

He died for sinners.

The innocent One carried what belonged to the guilty so the guilty could receive what belonged to Him.`,
      `2. The cross reveals God's love

Romans 5:8 says Christ died for us while we were still sinners.

God did not wait for humanity to become worthy.

He revealed His love at the very place our sin was most exposed.

The cross shows that God's love is not shallow emotion.

It is costly, faithful, self-giving action.`,
      `3. Jesus entered the deepest consequence of sin

On the cross, Jesus cried, "My God, my God, why hast thou forsaken me?"

He entered the darkness, weight, and separation sin brings.

He was not abandoned because He deserved it.

He stepped into the place sin had taken humanity so He could open the way back to the Father.`,
      `4. The cross confirms the promise

Daniel 9 connects the Messiah's death with the confirming of the covenant.

At the cross, God showed that His promise was not empty.

He would rather bear the cost Himself than abandon the world to sin.

The promise made in Eden was kept at Calvary.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: 'Hear what Daniel means when he says the Messiah would be cut off.',
    wordStudy: {
      surface: 'Cut off',
      lemma: 'כָּרַת (karath)',
      transliteration: 'karath',
      meaning: 'To be removed, killed, or separated.',
      strongs: 'H3772',
      reference: 'Daniel 9:26',
      note: `Daniel's phrase "cut off, but not for himself" points to the sacrificial death of Christ.

Jesus was cut off from life, not because of His own sin, but because of ours.

His death reveals the depth of God's promise and the cost of our redemption.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The cross answers the biggest lie from Eden.

The serpent suggested that God was selfish, withholding, and untrustworthy.

At the cross, God answered that lie forever.

Selfish?

Jesus gave Himself.

Withholding?

God gave His Son.

Untrustworthy?

God kept His promise at infinite cost.

The Messiah was cut off, but not for Himself.

He took the wound.
He carried the shame.
He entered the darkness.
He bore the cost.

The cross shows that God's love is not theoretical.

It is proven in sacrifice.`,
    },
    studyInsightBlocks: [
      edenLieVersusCrossVisual,
      {
        type: 'scriptureChain',
        title: 'Cut Off for Us',
        references: [
          { reference: 'Daniel 9:26' },
          { reference: 'Romans 5:8' },
          { reference: '1 John 3:16' },
          { reference: 'Isaiah 53:5' },
        ],
      },
      {
        type: 'paragraph',
        text:
          'Takeaway: Jesus was cut off, not for Himself, but for us. The cross proves God\'s faithful, self-giving love.',
      },
    ],
    reflectPrompt: `What does the phrase "cut off, but not for Himself" reveal to you about the love of Jesus?

Think about the cost of the cross and what it means that Christ suffered for others, not for His own guilt.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, when you question whether God really loves you, return to the cross.

Do not measure God's love only by your current circumstances.

Measure it by Christ crucified.

When shame says, "You are too far gone," answer:

"Jesus was cut off for me."

When fear says, "God has abandoned you," answer:

"Christ entered the darkness to bring me home."

The cross is God's clearest answer to the lie that He cannot be trusted.`,
    prayer: `Jesus, thank You for being cut off, not for Yourself, but for me. Thank You for carrying the cost of sin and revealing the Father's love at the cross. Help me trust Your sacrifice more than my fear, shame, or doubt. Keep my heart near Calvary, where Your promise was kept. Amen.`,
    completionSummary:
      'The Messiah was cut off, but not for Himself. Jesus bore the cost of sin, revealed God\'s love, and kept the promise made from the beginning.',
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'tpk-l6-q1',
          prompt: 'According to Daniel 9:26, what would happen to the Messiah?',
          options: [
            'A. He would be cut off, but not for Himself',
            'B. He would avoid all suffering',
            'C. He would abandon humanity',
            'D. He would deny the covenant',
          ],
          correctIndex: 0,
          explanation:
            'Daniel 9:26 says the Messiah would be cut off, but not for Himself, pointing to Christ\'s sacrificial death.',
        },
        {
          id: 'tpk-l6-q2',
          prompt: 'According to Romans 5:8, when did Christ die for us?',
          options: [
            'A. While we were still sinners',
            'B. After humanity became perfect',
            'C. Before sin existed',
            'D. Only after people earned it',
          ],
          correctIndex: 0,
          explanation:
            'Romans 5:8 says Christ died for us while we were still sinners, showing God\'s initiating love.',
        },
        {
          id: 'tpk-l6-q3',
          prompt: "What does 1 John 3:16 say helps us perceive the love of God?",
          options: [
            'A. That He laid down His life for us',
            'B. That He avoided sacrifice',
            'C. That He stayed distant from suffering',
            'D. That He ignored sin',
          ],
          correctIndex: 0,
          explanation:
            "1 John 3:16 says we perceive God's love because He laid down His life for us.",
        },
        {
          id: 'tpk-l6-q4',
          prompt: 'What lie from Eden does the cross answer?',
          options: [
            'A. That God is selfish and withholding',
            'B. That God created the stars',
            'C. That humanity has value',
            'D. That Scripture matters',
          ],
          correctIndex: 0,
          explanation:
            'The serpent made God look selfish and withholding. The cross reveals that God gives Himself for our rescue.',
        },
        {
          id: 'tpk-l6-q5',
          kind: 'reflection',
          prompt: 'How can the cross help you trust God when your feelings tell you He is distant?',
          explanation:
            "The cross shows God's love most clearly. Jesus entered suffering and separation to bring humanity near.",
        },
      ],
    },
  },
  'every-promise-says-yes-in-jesus': {
    openingThought: `God keeps His promises.

That is the heartbeat of this study.

From Eden to the prophets, from Daniel's timeline to the cross, Scripture shows a God who does not abandon His word.

Humanity fell.
God promised.

The enemy deceived.
God pursued.

Sin wounded the world.
God sent His Son.

Jesus is not one promise among many. He is the fulfillment of God's promise to rescue, restore, and reveal His faithful love.

In Him, the promise was not only spoken.

It was kept.`,
    scriptureRef: '2 Corinthians 1:20',
    scriptureQuote: `For all the promises of God in him are yea, and in him Amen, unto the glory of God by us.`,
    scriptureSecondaryRef: 'John 3:16',
    scriptureSecondaryQuote: `For God so loved the world, that he gave his only begotten Son.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'John 14:6',
        quote: `Jesus saith unto him, I am the way, the truth, and the life.`,
      },
      {
        type: 'scripture',
        reference: '1 Timothy 2:4',
        quote: `Who will have all men to be saved, and to come unto the knowledge of the truth.`,
      },
    ],
    teachingPoints: [
      `1. God's promises find their fulfillment in Jesus

2 Corinthians 1:20 says all the promises of God are yes in Christ.

That means Jesus is the center of God's saving work.

The promise of a Deliverer.
The promise of victory over evil.
The promise of forgiveness.
The promise of restored relationship.
The promise of eternal life.

All of it finds its answer in Him.`,
      `2. Jesus reveals God's faithful love

John 3:16 says God loved the world and gave His Son.

This is the clearest answer to the lie that God is withholding good from humanity.

God gave His best.

He gave Himself through Christ.

The promise was kept through love, not force.`,
      `3. Jesus is the way back to the Father

In John 14:6, Jesus says He is the way, the truth, and the life.

The fall brought distrust, deception, and death.

Jesus brings the way, the truth, and the life.

He does not merely point toward restoration.

He is the restoration path.`,
      `4. God's desire is salvation and truth

1 Timothy 2:4 says God desires all people to be saved and come to the knowledge of the truth.

This matters because the conflict began with lies about God.

Salvation restores truth.

Jesus brings humanity back to the real knowledge of God's character, love, and purpose.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: 'When Paul says God\'s promises are "yea" and "Amen" in Christ, hear the weight of that word.',
    wordStudy: {
      surface: 'Amen',
      lemma: 'ἀμήν (amēn)',
      transliteration: 'amēn',
      meaning: 'Truly, surely, let it be so.',
      strongs: 'G281',
      reference: '2 Corinthians 1:20',
      note: `When Scripture says God's promises are "yea" and "Amen" in Christ, it means Jesus is the trustworthy confirmation of everything God promised.

He is God's yes to redemption.

He is the proof that God keeps His word.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The Promise Kept traces a clear movement:

God came looking.
God gave the first gospel promise.
God pointed to the promised Seed.
God spoke through the prophets.
God revealed the Messiah's timeline.
God kept His promise at the cross.
God fulfilled every promise in Jesus.

This is not just information.

It is an invitation to trust.

The same God who kept His promise across centuries can be trusted today.

Jesus shows us that God is not distant, careless, or uncertain.

He is faithful.

He moves toward sinners.
He speaks hope into ruins.
He carries His promise through history.
He gives Himself at the cross.
He offers salvation to the world.

The promise kept in Jesus becomes the foundation for your faith.`,
    },
    studyInsightBlocks: [
      promiseKeptSeriesRecapVisual,
      {
        type: 'scriptureChain',
        title: 'Every Promise in Christ',
        references: [
          { reference: 'Genesis 3:15' },
          { reference: 'Daniel 9:26' },
          { reference: 'John 3:16' },
          { reference: '2 Corinthians 1:20' },
        ],
      },
      {
        type: 'paragraph',
        text:
          'Takeaway: Jesus is the fulfillment of God\'s promise to rescue humanity and reveal His faithful love.',
      },
    ],
    reflectPrompt: `Which part of this study most helped you see that God keeps His promises?

Think about Eden, the first gospel promise, the promised Seed, the prophets, Daniel's timeline, the cross, or Jesus as the final fulfillment.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, choose one promise of God and hold it seriously.

Not casually.
Not vaguely.
Seriously.

Write it down.
Pray it back to God.
Return to it when fear speaks louder than faith.

Start with this:

"All the promises of God in Christ are yes."

When you feel like God is slow, remember the timeline.

When you feel like God is distant, remember Eden.

When you feel like God is withholding, remember the cross.

When you feel like God has forgotten, remember Jesus.`,
    prayer: `Father, thank You for keeping Your promise in Jesus. Thank You for pursuing humanity, speaking hope, guiding history, and giving Your Son for our rescue. Help me trust Your word more deeply. Teach me to live like Your promises are true, because in Christ they are yes and Amen. Amen.`,
    completionSummary:
      'You have completed The Promise Kept. From Eden to the cross, God kept His word. Jesus is the promised Deliverer, the fulfillment of Scripture, and the clearest proof that God\'s love can be trusted.',
    seriesCompleteScreen: {
      title: 'Study Complete',
      message:
        'You have completed The Promise Kept. From Eden to the cross, God kept His word. Jesus is the promised Deliverer, the fulfillment of Scripture, and the clearest proof that God\'s love can be trusted.',
      primaryCta: { label: 'Back to Foundations Path', href: '/paths/foundations' },
      secondaryCta: {
        label: 'Review this study',
        href: '/study-library/the-promise-kept',
      },
    },
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'tpk-l7-q1',
          prompt: "According to 2 Corinthians 1:20, where do God's promises find their \"yes\"?",
          options: [
            'A. In Christ',
            'B. In human effort',
            'C. In fear',
            'D. In the serpent',
          ],
          correctIndex: 0,
          explanation: "2 Corinthians 1:20 says all the promises of God are yes in Christ.",
        },
        {
          id: 'tpk-l7-q2',
          prompt: "What does John 3:16 reveal about God's love?",
          options: [
            'A. God loved the world and gave His only begotten Son',
            'B. God abandoned the world',
            'C. God withheld His best',
            'D. God stopped speaking after Eden',
          ],
          correctIndex: 0,
          explanation: "John 3:16 reveals that God's love is shown in giving His Son for the world.",
        },
        {
          id: 'tpk-l7-q3',
          prompt: 'What does Jesus say in John 14:6?',
          options: [
            'A. "I am the way, the truth, and the life"',
            'B. "I am only one teacher among many"',
            'C. "I do not know the Father"',
            'D. "Truth cannot be known"',
          ],
          correctIndex: 0,
          explanation:
            'Jesus says He is the way, the truth, and the life, showing that restoration comes through Him.',
        },
        {
          id: 'tpk-l7-q4',
          prompt: 'What is the main message of The Promise Kept?',
          options: [
            'A. God kept His promise to rescue humanity in Jesus',
            'B. God forgot His promise after Eden',
            'C. The prophets were unrelated to Jesus',
            'D. The cross was a failure',
          ],
          correctIndex: 0,
          explanation:
            "The study shows that God's promise of rescue was made in Eden, carried through Scripture, and fulfilled in Jesus.",
        },
        {
          id: 'tpk-l7-q5',
          kind: 'reflection',
          prompt: 'What promise of God do you need to hold onto this week?',
          explanation:
            "Faith grows as we trust God's promises in real life. Jesus is the proof that God keeps His word.",
        },
      ],
    },
  },
}
