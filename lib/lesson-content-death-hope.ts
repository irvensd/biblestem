/**
 * Guided reader copy for “Death, Resurrection, and the Hope of Life.”
 * Thematically aligned with studies on misunderstood texts (e.g. “Misinterpreted Texts on the State of the Dead”).
 */
function baseLesson(openingThought: string, scriptureRef: string, scriptureQuote: string) {
  return {
    openingThought,
    scriptureRef,
    scriptureQuote,
    teachingPoints: [
      'Read the passage in its immediate context: who is speaking, and what question is being answered?',
      'Let clearer Scriptures guide the difficult ones. The Bible is its own best interpreter.',
      'Notice what is said about God, about human life, and about the hope held out in Christ.',
    ],
    reflectPrompt:
      'What in this text most challenges a slogan or assumption you have heard outside Scripture?',
    lifeApplication: 'Choose one phrase from the passage to copy out and revisit once a day this week.',
    prayer:
      'Lord, quiet speculation in me. Teach me from Your Word with patience and humility. In Jesus’ name, amen.',
  }
}

/** Reader payloads for “Death, Resurrection, and the Hope of Life” (18 lessons). Typed at merge site in `lesson-content.ts`. */
export const deathHopeSeriesLessonLibrary = {
  'the-right-to-the-tree-of-life': {
    openingThought: `Most people think of immortality as something humans naturally possess.

Something hidden inside us.

Something death cannot touch.

But Genesis begins somewhere else.

Not with an immortal soul trapped inside a body,

but with God forming a whole person from the dust

and giving that person life.

Human life was never independent.

It was received.

Sustained.

Dependent.

Even in Eden, Adam and Eve did not have life apart from God.

They lived because God gave life.

They continued living because God sustained life.

The tree of life stood in the garden as a visible reminder:

life is not something humanity owns.

Life is a gift.

And eternal life is found only in God.`,
    scriptureRef: 'Genesis 2:7',
    scriptureQuote: `And the LORD God formed man of the dust of the ground,

and breathed into his nostrils the breath of life;

and man became a living being.`,
    scriptureSecondaryRef: 'Genesis 2:9',
    scriptureSecondaryQuote: `And out of the ground the LORD God made every tree grow that is pleasant to the sight and good for food.

The tree of life was also in the midst of the garden,

and the tree of the knowledge of good and evil.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture' as const,
        reference: 'Genesis 3:22 to 24',
        quote: `Then the LORD God said,

Behold, the man has become like one of Us,

to know good and evil.

And now,

lest he put out his hand and take also of the tree of life,

and eat,

and live forever.`,
      },
      {
        type: 'scripture' as const,
        reference: 'Romans 6:23',
        quote: `For the wages of sin is death,

but the gift of God is eternal life in Christ Jesus our Lord.`,
      },
      {
        type: 'paragraph' as const,
        text: `Scripture does not present eternal life as something we naturally possess.

It presents eternal life as a gift.`,
      },
    ],
    teachingPoints: [
      `• God formed man from dust and gave him breath.

Human life began when God united body and breath.`,
      `• Man became a living being.

The Bible does not say God placed an immortal soul inside man. It says man became a living soul, a living person.`,
      `• The tree of life sustained human life.

Adam and Eve were not independent sources of immortality. Their continued life depended on God’s provision.`,
      `• Sin separated humanity from the tree of life.

After sin, God blocked access to the tree so sinners would not live forever in a fallen condition.`,
      `• Eternal life is restored only in Christ.

The Bible gives two final options: life in Christ or death apart from Him.`,
    ],
    wordStudy: {
      surface: 'nephesh',
      lemma: 'נֶפֶשׁ',
      transliteration: 'nephesh',
      meaning: 'living being, person, life, soul',
      strongs: 'H5315',
      reference: 'Genesis 2:7',
      note: `In Genesis 2:7, man does not receive a separate immortal soul. Man becomes a nephesh, a living being. The soul is not a ghost inside the body. In this passage, the soul is the whole living person made alive by God’s breath.

This matters because the Bible begins with life as a gift,

not immortality as a possession.`,
    },
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching' as const,
      body: `Think of the tree of life as a sign of dependence.

Adam and Eve were perfect,

but they were not self-sustaining.

They were holy,

but they were not independent.

They were alive,

but they still needed God.

The tree did not replace God.

It pointed back to God.

It showed that created life must remain connected to the Creator.

When sin entered, humanity was removed from the tree.

That was judgment,

but it was also mercy.

God did not allow sin to become immortal.

He did not allow rebellion to live forever.

The hope of the Bible is not that something inside us cannot die.

The hope of the Bible is that Christ gives life back to those who trust Him.`,
    },
    reflectPrompt: `Where have you absorbed the idea that humans naturally live forever?

Has that idea shaped how you read Scripture?

What changes when you see eternal life as a gift instead of something automatic?

If life comes from God,

what does that say about your dependence on Him today?`,
    lifeApplication: `This week, read Genesis 2 and 3 slowly.

Notice how often life is connected to God’s action,

God’s breath,

God’s provision,

and God’s command.

Then ask yourself:

Am I living like life belongs to me,

or like life has been entrusted to me?

Prayer:

Lord,

You are the source of life.

I do not live by my own power.

I do not possess immortality apart from You.

Teach me to receive life as a gift.

Keep me close to Christ,

where eternal life is found.

Help me trust Your Word more than human assumption.

Amen.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    prayer: '',
  },
  'rachels-departing-soul': baseLesson(
    `Words like soul, spirit, breath, and life appear often in Scripture.

They are easy to read through modern filters.

Here we stay with the text: what happens when Rachel dies, and how do Moses and the patriarchal narratives use language about life and breath?`,
    'Genesis 35:18 · Genesis 2:7',
    'And it came to pass, as her soul was in departing, (for she died) that she called his name Benoni: but his father called him Benjamin.',
  ),
  'a-thief-and-a-witch': baseLesson(
    `Two stories are often used to defend immediate consciousness after death.

Fair reading asks what each passage is actually addressing.

We look at the thief on the cross and the incident at Endor without importing conclusions the narratives do not require.`,
    'Luke 23:42–43 · 1 Samuel 28',
    'And Jesus said unto him, Verily I say unto thee, To day shalt thou be with me in paradise.',
  ),
  'absent-from-the-body': baseLesson(
    `Paul’s words in 2 Corinthians are deeply personal.

They are also easy to lift out of context.

The goal here is to hear Paul’s hope in line with his teaching elsewhere: resurrection, presence with Christ, and the redemption of the body.`,
    '2 Corinthians 5:6–8 · Philippians 3:20–21',
    'We are confident, I say, and willing rather to be absent from the body, and to be present with the Lord.',
  ),
  'pauls-desire-to-depart': baseLesson(
    `Philippians 1 is a letter from someone who knows hardship.

Paul weighs living and dying in light of Christ.

What does he actually say his desire is—and what does he say is “far better”?`,
    'Philippians 1:21–24',
    'For to me to live is Christ, and to die is gain.',
  ),
  'the-souls-under-the-altar': baseLesson(
    `Revelation is rich with Old Testament imagery.

The fifth seal is not a casual newspaper report.

It draws on sacrifice, covenant, and the cry for justice—language God’s people already knew.`,
    'Revelation 6:9–11 · Genesis 4:10',
    'And when he had opened the fifth seal, I saw under the altar the souls of them that were slain for the word of God, and for the testimony which they held.',
  ),
  'the-spirits-of-just-men': baseLesson(
    `Hebrews describes a gathering: Mount Zion, the heavenly Jerusalem, the church of the firstborn.

What does it mean that the spirits of just men are “made perfect”?

We keep the letter’s argument in view.`,
    'Hebrews 12:22–24 · Hebrews 11:39–40',
    '… and to the spirits of just men made perfect.',
  ),
  'preaching-to-the-spirits-in-prison': baseLesson(
    `First Peter is written to people who suffer for doing good.

Chapter three is dense.

We focus on identifying who the spirits in prison are, from clues Peter and the flood narrative supply.`,
    '1 Peter 3:18–22 · Genesis 6',
    'By which also he went and preached unto the spirits in prison.',
  ),
  'three-doctrines-that-belong-together': baseLesson(
    `Some teachings are separated in conversation but connected in Scripture.

Judgment, the state of the dead, and Christ’s return each clarify the others.

This lesson sketches how they fit as a whole—not as debate points, but as a coherent picture.`,
    'Ecclesiastes 9:5 · John 5:28–29 · 1 Thessalonians 4:16–17',
    'Marvel not at this: for the hour is coming, in the which all that are in the graves shall hear his voice.',
  ),
  'the-dead-who-stand-before-god': baseLesson(
    `Revelation 20 speaks of books opened and the dead judged.

Who are the dead?

What is the hope for those who have died in faith—and what is the end of sin and death?`,
    'Revelation 20:11–15 · John 5:28–29',
    'And I saw the dead, small and great, stand before God; and the books were opened.',
  ),
  'the-resurrection-and-the-life': baseLesson(
    `At Lazarus’s tomb, Jesus does not offer a philosophy.

He offers Himself.

Listen for what He claims—and what He does next.`,
    'John 11:25–26 · John 11:43–44',
    'Jesus said unto her, I am the resurrection, and the life: he that believeth in me, though he were dead, yet shall he live.',
  ),
  'the-keys-of-hades': baseLesson(
    `Sheol and Hades language belongs to the world of the Old and New Testaments.

It is easy to read later traditions back into the text.

Here we ask what these words meant in their own setting.`,
    'Revelation 1:18 · Psalm 16:10',
    'I am he that liveth, and was dead; and, behold, I am alive for evermore, Amen; and have the keys of hell and of death.',
  ),
  'the-rich-man-and-lazarus': baseLesson(
    `Jesus told parables for a reason.

This story follows other Lukan parables and sayings.

What is the point of the reversal—and what is Jesus not attempting to teach?`,
    'Luke 16:19–31',
    'There was a certain rich man, which was clothed in purple and fine linen, and fared sumptuously every day.',
  ),
  'all-live-to-him': baseLesson(
    `In Luke 20, Jesus answers a question about marriage and resurrection.

His reply includes a striking statement about God and those who have died.

What does it mean that all live to Him?`,
    'Luke 20:37–38 · Exodus 3:6',
    'For he is not a God of the dead, but of the living: for all live unto him.',
  ),
  'the-worm-and-the-fire': baseLesson(
    `Fiery language in Scripture is vivid.

It is also often drawn from the world Jesus’ hearers knew.

We look at worm, fire, and destruction language without turning metaphor into a physics lesson.`,
    'Mark 9:43–48 · Isaiah 66:24',
    'And if thy foot offend thee, cut it off: it is better for thee to enter halt into life, than having two feet to be cast into hell, into the fire that never shall be quenched.',
  ),
  'immortality-or-resurrection': baseLesson(
    `Paul ties hope to resurrection and to what puts on immortality.

That is a different starting point from “every soul is naturally deathless.”

Compare the two frameworks calmly in the text.`,
    '1 Corinthians 15:51–54 · 1 Timothy 6:15–16',
    'For this corruptible must put on incorruption, and this mortal must put on immortality.',
  ),
  'the-first-lie': baseLesson(
    `Eden’s first recorded deception was about death.

Trace the words carefully.

What did the serpent say—and what did God actually say?`,
    'Genesis 3:1–4 · Genesis 2:17',
    'And the serpent said unto the woman, Ye shall not surely die.',
  ),
  'spirits-of-devils': {
    ...baseLesson(
      `Revelation warns of spirits that gather the nations.

Scripture repeatedly ties deception to the last days.

The answer is not fear, but clarity: hold fast to what is written.`,
      'Revelation 16:13–14 · Isaiah 8:20',
      'For they are the spirits of devils, working miracles, which go forth unto the kings of the earth and of the whole world, to gather them to the battle of that great day of God Almighty.',
    ),
    seriesCompleteScreen: {
      title: 'Study complete',
      message:
        'You have completed Death, Resurrection, and the Hope of Life. May Scripture continue to be your steady light.',
      primaryCta: { label: 'Review study', href: '/study-library/death-resurrection-hope-of-life' },
      secondaryCta: { label: 'Browse studies', href: '/study-library' },
    },
  },
}
