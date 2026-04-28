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

function quiz(
  questions: Array<{
    prompt: string
    options: [string, string, string, string]
    correctIndex: 0 | 1 | 2 | 3
  }>,
): LessonQuizPayload {
  return {
    ...QUIZ_SHELL,
    questions: questions.map((q, i) => ({
      id: `origin-q-${i + 1}`,
      prompt: q.prompt,
      options: q.options,
      correctIndex: q.correctIndex,
    })),
  }
}

export const originOfEvilSeriesLessonLibrary: Record<string, LessonReaderContent> = {
  'did-god-create-the-devil': {
    openingThought: `If God is good,

where did evil come from?

That question has troubled people for centuries.

Some blame God.

Some deny the devil exists.

Some imagine Satan as a cartoon figure with horns and a pitchfork.

But the Bible gives a clearer picture.

Satan is real.

Evil is real.

But God did not create evil.

God created a perfect being with freedom.

That being chose pride,

rebellion,

and deception.

The story of Satan does not begin in darkness.

It begins with light misused.

And that makes the warning personal.

Because evil does not always begin with hatred.

Sometimes it begins with a heart that wants God’s place.`,
    scriptureRef: '1 John 3:8',
    scriptureQuote: `He who sins is of the devil,

for the devil has sinned from the beginning.

For this purpose the Son of God was manifested,

that He might destroy the works of the devil.`,
    scriptureSecondaryRef: 'Revelation 12:9',
    scriptureSecondaryQuote: `So the great dragon was cast out,

that serpent of old,

called the Devil and Satan,

who deceives the whole world;

he was cast to the earth,

and his angels were cast out with him.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture' as const,
        reference: 'Ezekiel 28:15',
        quote: `You were perfect in your ways

from the day you were created,

till iniquity was found in you.`,
      },
      {
        type: 'paragraph' as const,
        text: `The Bible does not say God created the devil as evil.

It says a created being who was once perfect became corrupt.`,
      },
    ],
    teachingPoints: [
      `Sin began with Satan.

The Bible identifies the devil as the one who has sinned from the beginning.`,
      `God created Lucifer perfect.

Ezekiel describes him as created, wise, beautiful, and perfect until iniquity was found in him.`,
      `Evil was not created by God.

God created beings with freedom, but Lucifer misused that freedom.`,
      `Satan is not a myth.

Revelation calls him the dragon, the serpent, the devil, and Satan, and says he deceives the whole world.`,
      `Jesus came to destroy Satan’s works.

The Bible does not end with evil winning. It ends with Christ defeating sin, Satan, and death.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudy: {
      surface: 'Satan',
      lemma: 'שָׂטָן',
      transliteration: 'satan',
      meaning: 'adversary, opponent, accuser',
      strongs: 'H7854',
      note: `The word Satan means adversary or opponent. This name describes what Lucifer became. He placed himself against God, against truth, and against God’s people.

This matters because Satan is not God’s equal.

He is a created being who became an enemy through rebellion.

God is Creator.

Satan is only an adversary.`,
      reference: 'Job 1:6 to 7 and Revelation 12:9',
    },
    studyInsight: {
      title: `The Bible's answer`,
      variant: 'doctrine_clarity',
      body: `The Bible’s answer to evil protects God’s character.

God did not create a devil.

God created Lucifer perfect.

That means evil did not come from God’s design.

It came from rebellion against God’s design.

This also means freedom matters.

God did not make angels or people as machines.

Love requires freedom.

Worship requires choice.

Trust requires the ability to say yes or no.

Lucifer used that freedom to turn inward.

Instead of reflecting God’s glory,

he wanted glory for himself.

That is how the story of evil begins.

Not with weakness,

but with pride.

Not with ignorance,

but with rebellion.

Not with God failing,

but with a created being choosing self over the Creator.`,
    },
    reflectPrompt: `When you think about evil,

do you tend to blame God,

ignore Satan,

or minimize sin?

Why does it matter that Lucifer was created perfect?

What does this teach you about freedom and choice?

Where do you see the danger of self-exaltation in your own heart?`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, pay attention to where your heart wants control.

Pride does not always look loud.

Sometimes it sounds like:

I know better.

I deserve more.

I should be first.

I do not need to listen.

When those thoughts appear,

bring them to God quickly.

Ask Him to keep your heart surrendered.

Prayer:

Lord,

Thank You for showing me the truth about evil.

Help me understand that You are not the author of sin.

Guard my heart from pride,

self-exaltation,

and rebellion.

Teach me to trust Your character.

Keep me close to Christ,

who came to destroy the works of the devil.

Amen.`,
    prayer: '',
    completionSummary:
      'Sin began with Satan’s rebellion; God created Lucifer perfect and did not invent evil as His design.',
    lessonQuiz: {
      ...QUIZ_SHELL,
      eyebrow: 'Quick Review Quiz',
      questions: [
        {
          id: 'origin-q-1',
          prompt: 'According to Scripture, who originated sin?',
          options: ['God', 'Lucifer', 'Adam', 'Gabriel'],
          correctIndex: 1,
        },
        {
          id: 'origin-q-2',
          prompt: 'Did God create Satan as an evil being?',
          options: [
            'Yes, Satan was created evil',
            'No, God created Lucifer perfect',
            'The Bible does not say Satan exists',
            'Satan is equal with God',
          ],
          correctIndex: 1,
        },
        {
          id: 'origin-q-3',
          kind: 'multi',
          prompt: 'Which names or descriptions does Revelation 12:9 use for Satan?',
          options: ['Dragon', 'Serpent of old', 'Devil', 'Savior'],
          correctIndices: [0, 1, 2],
        },
        {
          id: 'origin-q-4',
          prompt: 'What does the name Satan mean?',
          options: ['Light bearer', 'Adversary', 'Messenger', 'King of heaven'],
          correctIndex: 1,
        },
        {
          id: 'origin-q-5',
          kind: 'reflection',
          prompt: 'What does Lucifer’s fall teach you about pride and surrender?',
          explanation:
            'This is a personal reflection. The goal is to recognize that pride can turn the heart away from God if it is not surrendered.',
        },
      ],
    },
  },

  'lucifer-before-the-fall': {
    openingThought: `Before Satan was called Satan,

he was called Lucifer.

That is important.

The story of evil does not begin with a monster.

It begins with a created being of beauty,

wisdom,

honor,

and responsibility.

Lucifer was not created broken.

He was not created dark.

He was not created to deceive.

Scripture shows him as exalted,

gifted,

and placed near the presence of God.

This makes his fall even more serious.

Evil did not begin because God made something defective.

It began when a perfect being turned his gifts inward

and used them against the Giver.`,
    scriptureRef: 'Isaiah 14:12',
    scriptureQuote: `How you are fallen from heaven,

O Lucifer,

son of the morning!

How you are cut down to the ground,

you who weakened the nations!`,
    scriptureSecondaryRef: 'Luke 10:18',
    scriptureSecondaryQuote: `And He said to them,

I saw Satan fall like lightning from heaven.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture' as const,
        reference: 'Ezekiel 28:12 to 15',
        quote: `You were the seal of perfection,

full of wisdom and perfect in beauty.

You were in Eden,

the garden of God;

every precious stone was your covering.

You were the anointed cherub who covers;

I established you.

You were on the holy mountain of God;

you walked back and forth in the midst of fiery stones.

You were perfect in your ways from the day you were created,

till iniquity was found in you.`,
      },
      {
        type: 'paragraph' as const,
        text: `Lucifer began as a perfect created being.

His fall was not caused by God’s failure,

but by his own choice.`,
      },
    ],
    teachingPoints: [
      `Lucifer was created by God.

He was not eternal, equal with God, or independent from God.`,
      `Lucifer was created perfect.

Ezekiel says he was perfect in his ways from the day he was created.`,
      `Lucifer was full of wisdom and beauty.

His gifts were real, but gifts can become dangerous when they are separated from humility.`,
      `Lucifer held an honored position.

He is described as an anointed cherub who covers, pointing to nearness to God’s presence.`,
      `Sin was found in him later.

This shows that evil did not come from how God made him. It came from what Lucifer chose.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudy: {
      surface: 'Lucifer',
      lemma: 'הֵילֵל',
      transliteration: 'heylel',
      meaning: 'shining one, morning star, light bearer',
      strongs: 'H1966',
      note: `The word often translated Lucifer carries the idea of brightness or shining. Before his fall, Lucifer was associated with light, beauty, and glory.

This matters because Satan’s story did not begin with ugliness.

It began with created glory that was corrupted by pride.

The danger was not that Lucifer lacked gifts.

The danger was that he began to love the gifts more than the Giver.`,
      reference: 'Isaiah 14:12',
    },
    studyInsight: {
      title: 'Lucifer’s original beauty',
      variant: 'doctrine_clarity',
      body: `Lucifer’s original beauty teaches an uncomfortable lesson.

Good gifts do not automatically protect the heart.

Wisdom can be corrupted.

Beauty can feed pride.

Position can become entitlement.

Influence can become control.

Lucifer was close to holy things,

but closeness to holy things did not keep him surrendered.

That is a warning.

A person can be around truth,

around worship,

around ministry,

around Scripture,

and still let pride grow in the heart.

The issue is not only what we have received.

The issue is what we do with what we have received.

Lucifer turned created gifts into self-exaltation.

A surrendered heart turns gifts back into worship.`,
    },
    reflectPrompt: `What gifts has God given you?

Do those gifts make you more grateful,

or more self-focused?

Have you ever confused ability with spiritual maturity?

What does Lucifer’s story teach you about the need for humility?`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, name one gift God has given you.

It may be intelligence,

creativity,

influence,

strength,

beauty,

skill,

or opportunity.

Then ask:

Am I using this gift to glorify God,

or to make myself greater?

Prayer:

Lord,

Thank You for every gift You have given me.

Keep me from turning Your blessings into pride.

Teach me humility.

Help me remember that every ability comes from You.

Let my gifts lead me closer to worship,

not closer to self-exaltation.

Amen.`,
    prayer: '',
    completionSummary:
      'Lucifer was created perfect with real gifts; evil entered when he chose pride instead of humility toward God.',
    lessonQuiz: {
      ...QUIZ_SHELL,
      eyebrow: 'Quick Review Quiz',
      questions: [
        {
          id: 'origin-l2-q-1',
          prompt: 'What was Satan’s name before his fall?',
          options: ['Michael', 'Lucifer', 'Gabriel', 'Abaddon'],
          correctIndex: 1,
        },
        {
          id: 'origin-l2-q-2',
          prompt: 'How does Ezekiel describe Lucifer before sin was found in him?',
          options: [
            'Weak and confused',
            'Perfect in his ways',
            'Created evil',
            'Human',
          ],
          correctIndex: 1,
        },
        {
          id: 'origin-l2-q-3',
          kind: 'multi',
          prompt: 'Which descriptions does Ezekiel 28 connect with Lucifer before his fall?',
          options: ['Full of wisdom', 'Perfect in beauty', 'Anointed cherub', 'Created as a sinner'],
          correctIndices: [0, 1, 2],
        },
        {
          id: 'origin-l2-q-4',
          prompt: 'What is one lesson from Lucifer’s original beauty and wisdom?',
          options: [
            'Gifts always make someone faithful',
            'Beauty and wisdom cannot be corrupted',
            'Good gifts still require humility',
            'God gives no special gifts',
          ],
          correctIndex: 2,
        },
        {
          id: 'origin-l2-q-5',
          kind: 'reflection',
          prompt: 'What gift in your life needs to be surrendered more fully to God?',
          explanation:
            'This is personal reflection. The goal is to recognize that every gift should lead back to worship, not self-exaltation.',
        },
      ],
    },
  },

  'the-birth-of-pride': {
    openingThought: `Pride rarely announces itself as rebellion at first.

It begins quietly.

A comparison.

A desire to be noticed.

A feeling of being overlooked.

A belief that we deserve more.

In Lucifer, pride grew until worship was no longer something he gave to God.

It became something he wanted for himself.

That is the terrible shift.

A created being wanted the place of the Creator.

The fall of Lucifer shows that sin begins in the heart

before it becomes visible in action.

The throne he wanted was not only in heaven.

It was first in his own heart.`,
    scriptureRef: 'Ezekiel 28:17',
    scriptureQuote: `Your heart was lifted up because of your beauty;

you corrupted your wisdom for the sake of your splendor.`,
    scriptureSecondaryRef: 'Isaiah 14:13 to 14',
    scriptureSecondaryQuote: `For you have said in your heart:

I will ascend into heaven,

I will exalt my throne above the stars of God;

I will also sit on the mount of the congregation

on the farthest sides of the north;

I will ascend above the heights of the clouds,

I will be like the Most High.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture' as const,
        reference: 'Matthew 4:8 to 10',
        quote: `Again,

the devil took Him up on an exceedingly high mountain,

and showed Him all the kingdoms of the world and their glory.

And he said to Him,

All these things I will give You if You will fall down and worship me.

Then Jesus said to him,

Away with you,

Satan!

For it is written,

You shall worship the LORD your God,

and Him only you shall serve.`,
      },
      {
        type: 'paragraph' as const,
        text: `Lucifer’s rebellion centered on worship.

He wanted the honor that belongs only to God.`,
      },
    ],
    teachingPoints: [
      `Pride began in Lucifer’s heart.

Ezekiel says his heart was lifted up because of his beauty.`,
      `His wisdom became corrupted.

The problem was not lack of intelligence. It was wisdom twisted by self-exaltation.`,
      `Lucifer wanted a throne.

Isaiah shows repeated “I will” statements that reveal ambition against God.`,
      `Lucifer wanted worship.

The same desire appears when Satan tempted Jesus and asked to be worshiped.`,
      `Worship is the center of the conflict.

The question is not only what we believe, but who has first place in the heart.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudy: {
      surface: 'ascend',
      lemma: 'עָלָה',
      transliteration: 'e\'eleh',
      meaning: 'I will ascend',
      strongs: 'H5927',
      note: `Isaiah 14 repeats the language of self-exaltation. Lucifer’s heart speaks in the language of “I will.”

I will ascend.

I will exalt.

I will sit.

I will be like the Most High.

This matters because pride turns the heart inward.

Instead of asking,

What does God desire?

pride asks,

How can I rise?`,
      reference: 'Isaiah 14:13',
    },
    studyInsight: {
      title: 'Worship at the center',
      variant: 'doctrine_clarity',
      body: `The source study points out that worship is a key issue in the conflict between God and Satan.

That is not a small detail.

Lucifer wanted worship in heaven.

Satan demanded worship from Jesus in the wilderness.

Revelation shows worship as the final issue before Christ returns.

The conflict begins with worship

and ends with worship.

But worship is not only singing.

Worship is loyalty.

Trust.

Obedience.

First place.

Whatever owns the heart receives worship.

That is why pride is so dangerous.

Pride does not merely make us arrogant.

It moves God out of the center

and puts self on the throne.`,
    },
    reflectPrompt: `Where do you see “I will” pride in your own life?

Do you want God to lead,

or do you want God to bless your own throne?

What receives the most attention,

trust,

and loyalty in your heart?

Is there anything you are tempted to place above God?`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, listen for the language of pride in your thoughts.

Not just obvious pride.

Subtle pride.

I deserve.

I should be first.

I know better.

I do not need correction.

When you notice it,

pause and surrender it.

Prayer:

Lord,

Search my heart.

Show me where pride is growing quietly.

Remove anything that wants Your place.

Teach me to worship You alone.

Let my life be shaped by humility,

trust,

and surrender.

Amen.`,
    prayer: '',
    completionSummary:
      'Pride begins in the heart with “I will”; true worship keeps God alone on the throne.',
    lessonQuiz: {
      ...QUIZ_SHELL,
      eyebrow: 'Quick Review Quiz',
      questions: [
        {
          id: 'origin-l3-q-1',
          prompt: 'According to Ezekiel 28:17, what caused Lucifer’s heart to be lifted up?',
          options: ['His weakness', 'His beauty', 'His poverty', 'His lack of wisdom'],
          correctIndex: 1,
        },
        {
          id: 'origin-l3-q-2',
          prompt: 'What repeated phrase in Isaiah 14 reveals Lucifer’s self-exaltation?',
          options: ['I will', 'I repent', 'I serve', 'I worship'],
          correctIndex: 0,
        },
        {
          id: 'origin-l3-q-3',
          kind: 'multi',
          prompt: 'Which desires were present in Lucifer’s rebellion?',
          options: [
            'To exalt his throne',
            'To be like the Most High',
            'To receive worship',
            'To surrender fully to God',
          ],
          correctIndices: [0, 1, 2],
        },
        {
          id: 'origin-l3-q-4',
          prompt: 'What did Satan ask Jesus to do in the wilderness?',
          options: [
            'Build a temple',
            'Fall down and worship him',
            'Return to heaven',
            'Destroy the angels',
          ],
          correctIndex: 1,
        },
        {
          id: 'origin-l3-q-5',
          kind: 'reflection',
          prompt: 'What is one area where pride tries to take God’s place in your heart?',
          explanation:
            'This reflection helps the learner apply the lesson personally and identify where surrender is needed.',
        },
      ],
    },
  },

  'war-in-heaven': {
    openingThought: `Sin did not stay hidden in Lucifer’s heart.

It spread.

What began as pride became rebellion.

What began as self-exaltation became conflict.

Revelation describes something almost unthinkable:

war in heaven.

Not because God lost control,

but because Lucifer’s rebellion had to be exposed.

He deceived others.

He accused God.

He challenged God’s government.

And heaven could not remain home to rebellion.

So Lucifer was cast out.

The one once known for brightness became Satan,

the adversary.

The story warns us that sin never stays private forever.

What grows in the heart eventually shapes the world around us.`,
    scriptureRef: 'Revelation 12:7 to 9',
    scriptureQuote: `And war broke out in heaven:

Michael and his angels fought with the dragon;

and the dragon and his angels fought,

but they did not prevail,

nor was a place found for them in heaven any longer.

So the great dragon was cast out,

that serpent of old,

called the Devil and Satan,

who deceives the whole world;

he was cast to the earth,

and his angels were cast out with him.`,
    scriptureSecondaryRef: 'Revelation 12:4',
    scriptureSecondaryQuote: `His tail drew a third of the stars of heaven

and threw them to the earth.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture' as const,
        reference: 'John 8:44',
        quote: `He was a murderer from the beginning,

and does not stand in the truth,

because there is no truth in him.

When he speaks a lie,

he speaks from his own resources,

for he is a liar

and the father of it.`,
      },
      {
        type: 'paragraph' as const,
        text: `Satan’s rebellion involved deception,

lies,

and opposition to God’s truth.`,
      },
    ],
    teachingPoints: [
      `Lucifer’s sin became open rebellion.

What began in the heart eventually became conflict in heaven.`,
      `Satan deceived other angels.

Revelation points to a third of the angels being drawn into his rebellion.`,
      `Satan did not prevail.

He and his angels were cast out because rebellion could not remain in heaven.`,
      `Satan’s names reveal his character.

He is called the dragon, serpent, devil, and Satan.`,
      `Jesus calls Satan a liar and murderer.

His kingdom is built on deception, accusation, and destruction.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudy: {
      surface: 'devil',
      lemma: 'διάβολος',
      transliteration: 'diabolos',
      meaning: 'slanderer, accuser, false accuser',
      strongs: 'G1228',
      note: `The word devil comes from the Greek word diabolos, which means slanderer or false accuser.

This name reveals Satan’s method.

He attacks God’s character.

He twists truth.

He accuses God’s people.

He spreads suspicion where there should be trust.

The war in heaven was not only a battle of power.

It was a battle over truth.`,
      reference: 'Revelation 12:9 and John 8:44',
    },
    studyInsight: {
      title: 'Love and truth',
      variant: 'doctrine_clarity',
      body: `Why did God allow the rebellion to unfold instead of destroying Lucifer immediately?

Because God’s government is built on love,

not fear.

If God had destroyed Lucifer at once,

unfallen beings may not have understood the real nature of sin.

Questions could have remained.

Was Lucifer right?

Was God hiding something?

Is God’s authority safe?

So God allowed Satan’s principles to be revealed.

Not because God was weak.

Not because God approved of evil.

But because love cannot be forced,

and truth must be seen clearly.

The universe would eventually see the difference between God’s government

and Satan’s rebellion.

God’s way leads to life.

Satan’s way leads to death.`,
    },
    reflectPrompt: `Why do you think God values love over forced obedience?

What does Satan’s name as slanderer teach you about his methods?

Have you ever allowed suspicion about God’s character to grow in your heart?

How can truth protect you from accusation and deception?`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, pay attention to accusation.

Satan still works through slander,

suspicion,

and distorted pictures of God.

When a thought makes God seem harsh,

unfair,

or untrustworthy,

bring that thought to Scripture.

Ask:

Is this true?

Does this match the character of Christ?

Prayer:

Lord,

Protect me from deception and accusation.

Help me trust Your character.

Teach me to recognize Satan’s lies.

Keep my heart loyal to Your truth.

Thank You that rebellion will not win

and that Your government is built on love.

Amen.`,
    prayer: '',
    completionSummary:
      'Heaven answered rebellion with judgment; Satan was cast out, exposed as liar and accuser of God.',
    lessonQuiz: {
      ...QUIZ_SHELL,
      eyebrow: 'Quick Review Quiz',
      questions: [
        {
          id: 'origin-l4-q-1',
          prompt: 'According to Revelation 12, where did war break out?',
          options: ['In Eden', 'In heaven', 'In Egypt', 'In Babylon'],
          correctIndex: 1,
        },
        {
          id: 'origin-l4-q-2',
          prompt: 'What happened to Satan and his angels?',
          options: ['They prevailed', 'They stayed in heaven', 'They were cast out', 'They repented immediately'],
          correctIndex: 2,
        },
        {
          id: 'origin-l4-q-3',
          kind: 'multi',
          prompt: 'Which names does Revelation 12 use for Satan?',
          options: ['Dragon', 'Serpent of old', 'Devil', 'Prince of Peace'],
          correctIndices: [0, 1, 2],
        },
        {
          id: 'origin-l4-q-4',
          prompt: 'What does the Greek word diabolos mean?',
          options: ['Messenger', 'Slanderer or false accuser', 'Light bearer', 'Healer'],
          correctIndex: 1,
        },
        {
          id: 'origin-l4-q-5',
          kind: 'reflection',
          prompt: 'Why does it matter that God allowed Satan’s rebellion to reveal its true nature?',
          explanation:
            'This helps the learner reflect on God’s character, freedom, love, and the reason sin had to be exposed.',
        },
      ],
    },
  },

  'the-first-lie-on-earth': {
    openingThought: `Satan’s first recorded lie on earth was not complicated.

He told Eve,

You will not surely die.

That lie did more than question a warning.

It questioned God’s character.

It made disobedience look safe.

It made sin look rewarding.

It made God look restrictive instead of loving.

That is how deception works.

It does not always begin by denying God completely.

Sometimes it begins by slightly twisting what God said.

Eden shows us that every temptation is really a question of trust.

Will we trust God’s Word,

or will we trust another voice?`,
    scriptureRef: 'Genesis 2:16 to 17',
    scriptureQuote: `And the LORD God commanded the man,

saying,

Of every tree of the garden you may freely eat;

but of the tree of the knowledge of good and evil you shall not eat,

for in the day that you eat of it

you shall surely die.`,
    scriptureSecondaryRef: 'Genesis 3:1',
    scriptureSecondaryQuote: `Now the serpent was more cunning than any beast of the field which the LORD God had made.

And he said to the woman,

Has God indeed said,

You shall not eat of every tree of the garden?`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture' as const,
        reference: 'Genesis 3:4 to 5',
        quote: `Then the serpent said to the woman,

You will not surely die.

For God knows that in the day you eat of it your eyes will be opened,

and you will be like God,

knowing good and evil.`,
      },
      {
        type: 'scripture' as const,
        reference: 'Genesis 3:22 to 24',
        quote: `Then the LORD God said,

Behold,

the man has become like one of Us,

to know good and evil.

And now,

lest he put out his hand and take also of the tree of life,

and eat,

and live forever.`,
      },
      {
        type: 'paragraph' as const,
        text: `Satan contradicted God’s Word.

God acted to prevent sin from becoming immortal.`,
      },
    ],
    teachingPoints: [
      `God gave Adam and Eve a clear command.

The command was not confusing. They were told not to eat from one tree.`,
      `The command gave them real freedom.

Love and obedience are meaningful only when choice is possible.`,
      `Satan questioned God’s Word.

He began with, “Has God indeed said?”`,
      `Satan denied death.

His lie, “You will not surely die,” became the foundation of many later deceptions.`,
      `God removed access to the tree of life.

This was judgment, but also mercy. God did not allow sinners to live forever in rebellion.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudy: {
      surface: 'surely die',
      lemma: 'מוּת',
      transliteration: 'mot tamut',
      meaning: 'dying you shall die, you shall surely die',
      strongs: 'H4191',
      note: `The Hebrew phrase intensifies the certainty of death. God was not warning Adam and Eve about a small consequence. He was saying sin would bring death.

Satan’s lie directly contradicted this.

God said,

You shall surely die.

The serpent said,

You will not surely die.

The conflict began over whether God’s Word would be trusted.`,
      reference: 'Genesis 2:17',
    },
    studyInsight: {
      title: 'Questions, then lies',
      variant: 'scripture_connection',
      body: `The fall of Adam and Eve shows how Satan works.

He did not begin by saying,

Reject God.

He began with a question.

Then he mixed truth with error.

It was true that their eyes would be opened.

But what they would see was not freedom.

It was shame,

fear,

guilt,

and death.

Satan made disobedience look like wisdom.

God had withheld evil because He loved them.

Satan made that love look like control.

That is still one of his oldest methods.

He makes God’s commands look restrictive,

then makes sin look like freedom.

But sin never gives what it promises.

It takes.`,
    },
    reflectPrompt: `Where are you tempted to question what God has clearly said?

Have you ever seen sin promise freedom but bring pain?

Why does Satan still attack the truth about death?

What does the tree of life teach you about dependence on God?`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, practice noticing the first question temptation asks.

Has God really said?

When that question appears,

go back to Scripture.

Do not argue with temptation from memory alone.

Return to what is written.

Prayer:

Lord,

Teach me to trust Your Word.

Help me recognize the voice of deception.

Keep me from believing that sin is safe.

Thank You for Your mercy,

even in judgment.

Keep me close to Christ,

the true source of life.

Amen.`,
    prayer: '',
    completionSummary:
      'Eden’s lie attacked trust in God’s Word and denied death; God answered with mercy and guarded access to life.',
    lessonQuiz: {
      ...QUIZ_SHELL,
      eyebrow: 'Quick Review Quiz',
      questions: [
        {
          id: 'origin-l5-q-1',
          prompt: 'What did God say would happen if Adam and Eve ate from the forbidden tree?',
          options: [
            'They would become angels',
            'They would surely die',
            'They would move to heaven',
            'Nothing would happen',
          ],
          correctIndex: 1,
        },
        {
          id: 'origin-l5-q-2',
          prompt: 'What was Satan’s first recorded lie to Eve?',
          options: [
            'God does not exist',
            'You will not surely die',
            'The tree is not real',
            'Adam will protect you',
          ],
          correctIndex: 1,
        },
        {
          id: 'origin-l5-q-3',
          kind: 'multi',
          prompt: 'Which methods did Satan use in Eden?',
          options: [
            'Questioning God’s Word',
            'Mixing truth with error',
            'Making sin look desirable',
            'Openly admitting sin would destroy them',
          ],
          correctIndices: [0, 1, 2],
        },
        {
          id: 'origin-l5-q-4',
          prompt: 'Why did God block access to the tree of life after sin?',
          options: [
            'To prevent sinners from living forever in rebellion',
            'Because the tree had died',
            'Because angels needed food',
            'Because Adam and Eve forgot where it was',
          ],
          correctIndex: 0,
        },
        {
          id: 'origin-l5-q-5',
          kind: 'reflection',
          prompt: 'Where do you need to trust God’s Word more than another voice?',
          explanation:
            'This reflection helps the learner apply Eden’s lesson to personal temptation and trust.',
        },
      ],
    },
  },

  'how-satan-deceives-today': {
    openingThought: `Satan does not always appear as obvious darkness.

Sometimes he appears as light.

That is what makes deception dangerous.

If evil always looked evil,

fewer people would follow it.

But Scripture says Satan can disguise himself.

He can quote Scripture.

He can perform signs.

He can accuse.

He can tempt.

He can make lies sound spiritual.

That means our safety is not found in feelings,

appearances,

or supernatural experiences.

Our safety is found in the Word of God.

The question is not,

Does this feel powerful?

The question is,

Does this agree with Scripture?`,
    scriptureRef: '2 Corinthians 11:14 to 15',
    scriptureQuote: `And no wonder!

For Satan himself transforms himself into an angel of light.

Therefore it is no great thing if his ministers also transform themselves into ministers of righteousness.`,
    scriptureSecondaryRef: 'Matthew 4:5 to 7',
    scriptureSecondaryQuote: `Then the devil took Him up into the holy city,

set Him on the pinnacle of the temple,

and said to Him,

If You are the Son of God,

throw Yourself down.

For it is written:

He shall give His angels charge over you.

Jesus said to him,

It is written again,

You shall not tempt the LORD your God.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture' as const,
        reference: 'Revelation 16:13 to 14',
        quote: `And I saw three unclean spirits like frogs

coming out of the mouth of the dragon,

out of the mouth of the beast,

and out of the mouth of the false prophet.

For they are spirits of demons,

performing signs.`,
      },
      {
        type: 'scripture' as const,
        reference: '1 Peter 5:8',
        quote: `Be sober,

be vigilant;

because your adversary the devil walks about like a roaring lion,

seeking whom he may devour.`,
      },
      {
        type: 'paragraph' as const,
        text: `Satan’s methods are varied,

but Scripture exposes them clearly.`,
      },
    ],
    teachingPoints: [
      `Satan can appear as an angel of light.

Not every spiritual appearance comes from God.`,
      `Satan can quote Scripture.

In the wilderness, he used Scripture wrongly to tempt Jesus.`,
      `Satan performs signs and wonders.

Miracles must be tested by Scripture, not accepted automatically.`,
      `Satan accuses and destroys.

He is described as an adversary, a devourer, a liar, and a murderer.`,
      `Jesus answered temptation with Scripture.

The safest response to deception is, “It is written.”`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudy: {
      surface: 'deceives',
      lemma: 'πλανάω',
      transliteration: 'planaō',
      meaning: 'to deceive, lead astray, cause to wander',
      strongs: 'G4105',
      note: `Revelation says Satan deceives the whole world. The word carries the idea of leading someone away from the right path.

Deception is not always obvious.

It can feel reasonable.

It can sound spiritual.

It can appear beautiful.

That is why truth must be tested by Scripture,

not by appearance.`,
      reference: 'Revelation 12:9',
    },
    studyInsight: {
      title: 'Awake, not defenseless',
      variant: 'doctrine_clarity',
      body: `The source study lists many of Satan’s methods.

He deceives.

He persecutes.

He accuses.

He murders.

He traps.

He misquotes Scripture.

He makes war against God’s people.

He works miracles.

He appears as an angel of light.

This is not meant to make us terrified.

It is meant to make us awake.

The Bible does not leave us defenseless.

Jesus showed us how to stand.

When Satan tempted Him,

Jesus answered with Scripture.

Not opinion.

Not emotion.

Not argument for argument’s sake.

Scripture.

The enemy twists the Word.

Christ uses the Word rightly.

That is the difference.`,
    },
    reflectPrompt: `Do you usually test spiritual claims by Scripture,

or by how they feel?

Have you ever seen a Bible verse used out of context?

Why is it dangerous to trust miracles without testing the message?

What does Jesus’ example teach you about resisting temptation?`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, build your “It is written” reflex.

Choose one temptation or fear you face often.

Find one Bible verse that speaks truth to it.

Write it down.

Pray it.

Use it when the temptation returns.

Prayer:

Lord,

Make me sober and watchful.

Teach me to recognize deception,

even when it looks spiritual.

Help me test every message by Your Word.

Give me the mind of Christ

and the courage to answer temptation with Scripture.

Amen.`,
    prayer: '',
    completionSummary:
      'Deception may wear light or quote verses; Jesus answered with Scripture and calls us to do the same.',
    lessonQuiz: {
      ...QUIZ_SHELL,
      eyebrow: 'Quick Review Quiz',
      questions: [
        {
          id: 'origin-l6-q-1',
          prompt: 'According to 2 Corinthians 11, how can Satan disguise himself?',
          options: [
            'As an angel of light',
            'As a harmless animal only',
            'As a Roman soldier',
            'As a sleeping child',
          ],
          correctIndex: 0,
        },
        {
          id: 'origin-l6-q-2',
          prompt: 'How did Jesus answer Satan’s temptations in the wilderness?',
          options: ['With silence only', 'With Scripture', 'With fear', 'With a miracle show'],
          correctIndex: 1,
        },
        {
          id: 'origin-l6-q-3',
          kind: 'multi',
          prompt: 'Which methods does Scripture connect with Satan?',
          options: ['Deception', 'Accusation', 'False signs', 'Perfect truthfulness'],
          correctIndices: [0, 1, 2],
        },
        {
          id: 'origin-l6-q-4',
          prompt: 'Why should miracles be tested by Scripture?',
          options: [
            'Because miracles can never happen',
            'Because supernatural power does not automatically prove truth',
            'Because the Bible rejects all signs',
            'Because feelings are always correct',
          ],
          correctIndex: 1,
        },
        {
          id: 'origin-l6-q-5',
          kind: 'reflection',
          prompt: 'What is one temptation or fear you need to answer with “It is written”?',
          explanation:
            'This reflection helps the learner practice using Scripture as protection against deception.',
        },
      ],
    },
  },

  'how-god-ends-sin-forever': {
    openingThought: `The Bible does not end with evil surviving forever.

It ends with evil destroyed,

questions answered,

God’s character vindicated,

and creation restored.

Satan will not rule endlessly.

Sin will not keep hurting God’s creation.

Pain will not have the final word.

But before sin is destroyed,

the universe will see the truth clearly.

Every knee will bow.

Every tongue will confess.

God’s justice will be seen.

God’s love will be understood.

And sin will never rise again.

That is the end of evil.

Not because God loses patience,

but because love finally removes everything that destroys.`,
    scriptureRef: 'Revelation 20:10',
    scriptureQuote: `The devil,

who deceived them,

was cast into the lake of fire and brimstone.`,
    scriptureSecondaryRef: 'Matthew 25:41',
    scriptureSecondaryQuote: `Depart from Me,

you cursed,

into the everlasting fire prepared for the devil and his angels.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture' as const,
        reference: 'Ezekiel 28:18 to 19',
        quote: `I brought fire from your midst;

it devoured you,

and I turned you to ashes upon the earth

in the sight of all who saw you.

You have become a horror,

and shall be no more forever.`,
      },
      {
        type: 'scripture' as const,
        reference: 'Philippians 2:10 to 11',
        quote: `That at the name of Jesus every knee should bow,

of those in heaven,

and of those on earth,

and of those under the earth,

and that every tongue should confess

that Jesus Christ is Lord.`,
      },
      {
        type: 'scripture' as const,
        reference: 'Nahum 1:9',
        quote: `Affliction will not rise up a second time.`,
      },
      {
        type: 'paragraph' as const,
        text: `God will end sin completely.

Not manage it forever.

Not preserve it forever.

End it.`,
      },
    ],
    teachingPoints: [
      `Satan will be destroyed.

The Bible shows the devil’s final end in the lake of fire.`,
      `The fire was prepared for the devil and his angels.

God’s desire is not destruction, but sin must finally be removed.`,
      `Satan will become ashes.

Ezekiel says he will be devoured and be no more forever.`,
      `Every knee will bow.

The universe will confess that God is righteous and Jesus is Lord.`,
      `Sin will never rise again.

Nahum says affliction will not rise up a second time.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudy: {
      surface: 'destroy',
      lemma: 'καταργέω',
      transliteration: 'katargeō',
      meaning: 'to destroy, abolish, bring to nothing, render powerless',
      strongs: 'G2673',
      note: `Hebrews says Jesus shared in flesh and blood so that through death He might destroy the one who had the power of death, that is, the devil.

The word points to Christ bringing Satan’s power to nothing.

Jesus does not merely challenge evil.

He defeats it.

The cross guarantees the end of Satan’s kingdom.`,
      reference: 'Hebrews 2:14',
    },
    studyInsight: {
      title: 'Two final truths',
      variant: 'christ_connection',
      body: `The source study emphasizes two final truths.

First,

sin will be fully exposed.

Every being will see the difference between God’s government and Satan’s rebellion.

No honest question will remain unanswered.

Every knee will bow,

not because God forces a fake confession,

but because truth will be undeniable.

Second,

sin will be destroyed.

The devil,

his angels,

and those who cling to rebellion will face final judgment.

This is not eternal cruelty.

It is the permanent removal of evil.

God’s universe will be safe again.

Not because freedom is removed,

but because every creature will fully understand what sin really is.

God will be trusted forever.`,
    },
    reflectPrompt: `What does it mean to you that sin will not rise again?

How does God’s patience with evil reveal His character?

Why does it matter that every knee will confess God’s justice?

Do you see final judgment as cruelty,

or as God ending what destroys His creation?`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, remember that evil is temporary.

Satan is not equal with God.

Sin is not eternal.

Pain is not permanent.

Christ has already made evil’s defeat certain.

Live like the winning side is already clear.

Prayer:

Lord,

Thank You that evil will not last forever.

Thank You that Jesus has defeated the works of the devil.

Help me trust Your justice,

Your patience,

and Your love.

Keep me from Satan’s lies.

Prepare my heart for a world where sin will never rise again.

Amen.`,
    prayer: '',
    completionSummary:
      'Christ destroys the devil’s power; God will end evil fully and renew creation in righteousness.',
    seriesCompleteScreen: {
      title: 'Study complete',
      message: 'You have completed The Origin of Evil.',
      primaryCta: { label: 'Review study', href: '/study-library/origin-of-evil' },
      secondaryCta: { label: 'Explore foundational studies', href: '/study-library?path=foundations' },
    },
    lessonQuiz: {
      ...QUIZ_SHELL,
      eyebrow: 'Quick Review Quiz',
      questions: [
        {
          id: 'origin-l7-q-1',
          prompt: 'What does the Bible say will happen to Satan?',
          options: [
            'He will rule forever',
            'He will be destroyed',
            'He will become equal with God',
            'He will be forgiven without repentance',
          ],
          correctIndex: 1,
        },
        {
          id: 'origin-l7-q-2',
          prompt: 'According to Nahum 1:9, what will not rise up a second time?',
          options: ['The Roman Empire', 'Affliction', 'The temple', 'The sea'],
          correctIndex: 1,
        },
        {
          id: 'origin-l7-q-3',
          kind: 'multi',
          prompt: 'Which truths are part of God’s final answer to sin?',
          options: [
            'Every knee will bow',
            'Every tongue will confess Jesus is Lord',
            'Satan will be destroyed',
            'Sin will continue forever',
          ],
          correctIndices: [0, 1, 2],
        },
        {
          id: 'origin-l7-q-4',
          prompt: 'What did Jesus accomplish through His death according to Hebrews 2:14?',
          options: [
            'He destroyed the power of the devil',
            'He joined Satan’s kingdom',
            'He ended God’s law',
            'He made evil eternal',
          ],
          correctIndex: 0,
        },
        {
          id: 'origin-l7-q-5',
          kind: 'reflection',
          prompt: 'How does knowing the final end of evil strengthen your trust in God?',
          explanation:
            'This reflection helps the learner connect prophecy, judgment, and God’s character personally.',
        },
      ],
    },
  },
}
