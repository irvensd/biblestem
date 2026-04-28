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
  'rachels-departing-soul': {
    openingThought: `Some Bible verses sound obvious until we bring assumptions to them.

Genesis says Rachel's soul was departing,

for she died.

Many read that and picture an immortal soul leaving the body and going somewhere else.

But the verse does not say that.

It does not say her soul went to heaven.

It does not say her soul remained conscious.

It does not say her soul lived apart from her body.

It simply says her life was leaving her,

for she died.

To understand Rachel's death,

we have to go back to human creation.

What is a soul?

What is spirit?

What leaves at death?

And what does the Bible actually say?`,
    scriptureRef: 'Genesis 35:18',
    scriptureQuote: `And so it was,

as her soul was departing,

for she died,

that she called his name Ben-Oni;

but his father called him Benjamin.`,
    scriptureSecondaryRef: 'Genesis 2:7',
    scriptureSecondaryQuote: `And the LORD God formed man of the dust of the ground,

and breathed into his nostrils the breath of life;

and man became a living being.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture' as const,
        reference: 'Ecclesiastes 12:7',
        quote: `Then the dust will return to the earth as it was,

and the spirit will return to God who gave it.`,
      },
      {
        type: 'scripture' as const,
        reference: 'James 2:26',
        quote: `For as the body without the spirit is dead,

so faith without works is dead also.`,
      },
      {
        type: 'paragraph' as const,
        text: `The Bible's picture is consistent.

Body without breath is death.

Body with God-given breath is a living person.`,
      },
    ],
    teachingPoints: [
      `• Rachel's "departing soul" means her life was leaving.
The verse explains itself with the phrase, "for she died."`,
      `• Genesis 2:7 defines a living soul.
Dust plus breath equals a living being.`,
      `• The Bible does not describe the soul as an immortal person inside the body.
The soul is the living person.`,
      `• Spirit and breath describe the life principle God gives.
They do not describe a conscious immortal being that functions apart from the body.`,
      `• At death, the body returns to dust and the life breath returns to God.
The person does not continue living consciously apart from resurrection.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudyInsights: [
      {
        surface: 'nephesh',
        lemma: 'נֶפֶשׁ',
        transliteration: 'nephesh',
        meaning: 'soul, living being, person, life',
        strongs: 'H5315',
        language: 'Hebrew',
        reference: 'Genesis 2:7 and Genesis 35:18',
        note: 'Nephesh often refers to the whole living person. In Genesis 35:18, Rachel\'s nephesh departing means her life was leaving. The verse itself says, "for she died."',
      },
      {
        surface: 'neshamah',
        lemma: 'נְשָׁמָה',
        transliteration: 'neshamah',
        meaning: 'breath, breath of life',
        strongs: 'H5397',
        language: 'Hebrew',
        reference: 'Genesis 2:7',
        note: 'Neshamah is the breath God gives. It is not a conscious person living inside the body. It is the life breath that makes the body alive.',
      },
      {
        surface: 'ruach',
        lemma: 'רוּחַ',
        transliteration: 'ruach',
        meaning: 'breath, wind, spirit',
        strongs: 'H7307',
        language: 'Hebrew',
        reference: 'Ecclesiastes 12:7',
        note: 'Ruach can describe the life principle that returns to God at death. It does not mean the dead person remains conscious.',
      },
      {
        surface: 'pneuma',
        lemma: 'πνεῦμα',
        transliteration: 'pneuma',
        meaning: 'spirit, breath, wind',
        strongs: 'G4151',
        language: 'Greek',
        reference: 'James 2:26',
        note: 'Pneuma functions like the Hebrew words for breath and spirit. James says the body without the spirit is dead. The point is simple: when the life breath is gone, death has occurred.',
      },
    ],
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching' as const,
      body: `Genesis gives the formula clearly.

Dust plus breath equals a living being.

Remove the breath,

and the person dies.

That is not cold or mechanical.

It is honest.

It means life is not self-generated.

It is received from God.

When Rachel died, her life departed.

But Scripture does not turn that moment into proof of a conscious immortal soul.

It calls death what it is.

Death.

The hope is not that Rachel was secretly alive somewhere else.

The hope is that God remembers His people

and will raise them when Christ calls.`,
    },
    reflectPrompt: `When you hear the word soul,

what do you automatically picture?

Is that picture coming from Scripture,

or from tradition?

How does Genesis 2:7 challenge common ideas about human nature?

Why does resurrection matter more if the dead are truly dead?`,
    lifeApplication: `This week, let Genesis 2:7 become your starting point.

Before jumping to difficult verses,

ask:

How did the Bible first define human life?

What is a person?

What happens when breath leaves the body?

Build your understanding from Scripture,

not assumption.

Prayer:

Lord,

Teach me to read carefully.

Help me not add ideas to Your Word.

Show me what life is,

what death is,

and where my hope truly belongs.

Thank You that my life is held by You,

and that those who sleep in Christ are not forgotten.

Amen.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    prayer: '',
  },
  'a-thief-and-a-witch': {
    openingThought: `Two stories are often used to defend the idea that the dead remain conscious.

The thief on the cross.

And Saul at the witch of Endor.

One sounds comforting.

The other sounds mysterious.

But both require careful reading.

Did Jesus promise the thief that he would be in Paradise that very day?

Did Saul really speak with the conscious spirit of Samuel?

Or have these passages been read through assumptions the Bible itself does not teach?

Difficult texts should not lead us away from clear Scripture.

They should send us deeper into it.`,
    scriptureRef: 'Luke 23:42 to 43',
    scriptureQuote: `Then he said to Jesus,

Lord,

remember me when You come into Your kingdom.

And Jesus said to him,

Assuredly,

I say to you,

today you will be with Me in Paradise.`,
    scriptureSecondaryRef: 'John 20:17',
    scriptureSecondaryQuote: `Jesus said to her,

Do not cling to Me,

for I have not yet ascended to My Father.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture' as const,
        reference: '1 Samuel 28:13 to 14',
        quote: `And the king said to her,

Do not be afraid.

What did you see?

And the woman said to Saul,

I saw a spirit ascending out of the earth.`,
      },
      {
        type: 'scripture' as const,
        reference: 'Deuteronomy 18:10 to 12',
        quote: `There shall not be found among you anyone who makes his son or his daughter pass through the fire,

or one who practices witchcraft,

or a soothsayer,

or one who interprets omens,

or a sorcerer,

or one who conjures spells,

or a medium,

or a spiritist,

or one who calls up the dead.`,
      },
      {
        type: 'paragraph' as const,
        text: `The Bible does not invite us to build doctrine from appearances.

It calls us to test everything by what God has clearly revealed.`,
      },
    ],
    teachingPoints: [
      `• The original New Testament manuscripts did not contain modern punctuation.
Where the comma is placed in Luke 23:43 affects how the sentence is read.`,
      `• Jesus did not ascend to the Father on the day He died.
After the resurrection, He told Mary He had not yet ascended.`,
      `• The thief asked to be remembered when Jesus came into His kingdom.
His hope was tied to Christ's future kingdom, not immediate entrance that same day.`,
      `• Saul's visit to the medium was forbidden by God.
The passage should not be treated as a model for understanding death.`,
      `• Scripture warns against consulting the dead.
God does not teach truth through practices He condemns.`,
    ],
    wordStudy: {
      surface: 'Paradise',
      lemma: 'παράδεισος',
      transliteration: 'paradeisos',
      meaning: 'paradise, garden, place of restored life',
      strongs: 'G3857',
      reference: 'Luke 23:43',
      note: `Paradise is connected with God's restored dwelling place and the tree of life. The question in Luke 23:43 is not whether Paradise is real. It is when the thief would be with Christ there. Since Jesus had not ascended to the Father on resurrection morning, the promise is best understood as assurance given that day, not arrival in Paradise that day.`,
    },
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching' as const,
      body: `Luke 23:43 is often treated as if punctuation were inspired.

But commas were added later.

That matters.

The sentence can be read two ways:

"I say to you, today you will be with Me in Paradise."

Or,

"I say to you today, you will be with Me in Paradise."

The second reading fits the wider Bible story.

Jesus died that day.

The thief died that day.

But Jesus had not yet ascended to the Father by resurrection morning.

The thief's hope was still certain,

not because he went somewhere that Friday,

but because Jesus gave him a promise that Friday.

The promise was secure.

The timing belongs to the resurrection.`,
    },
    reflectPrompt: `Have you ever built a belief from one difficult verse

while ignoring clearer passages?

What does John 20:17 do to the common reading of Luke 23:43?

Why is it dangerous to build doctrine from Saul's experience with a medium?

Where do you need Scripture to correct an assumption you inherited?`,
    lifeApplication: `This week, practice careful interpretation.

When you face a difficult text,

do not panic.

Do not force it.

Do not isolate it.

Ask:

What does the rest of Scripture say?

What is the clear teaching?

What assumptions am I bringing to the text?

Truth can handle careful reading.

Prayer:

Lord,

Give me patience with difficult passages.

Teach me not to build doctrine on assumption.

Protect me from deception,

especially where spiritual things appear convincing.

Keep my hope anchored in Christ,

His promise,

and the resurrection.

Amen.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    prayer: '',
  },
  'absent-from-the-body': {
    openingThought: `Some phrases become so familiar that we stop reading them carefully.

"Absent from the body."

"Present with the Lord."

For many people, those words seem to settle the whole question.

They assume Paul means this:

The moment a believer dies,

the soul leaves the body

and goes consciously into heaven.

But 2 Corinthians 5 says more than that.

Paul is not describing an immortal soul escaping the body.

He is contrasting two conditions.

This present mortal life,

and the future resurrection life.

A temporary tent,

and a permanent building from God.

Paul does not long to be unclothed.

He longs to be further clothed.

Not death as the final hope,

but mortality swallowed up by life.`,
    scriptureRef: '2 Corinthians 5:1',
    scriptureQuote: `For we know that if our earthly house,

this tent,

is destroyed,

we have a building from God,

a house not made with hands,

eternal in the heavens.`,
    scriptureSecondaryRef: '2 Corinthians 5:4',
    scriptureSecondaryQuote: `For we who are in this tent groan,

being burdened,

not because we want to be unclothed,

but further clothed,

that mortality may be swallowed up by life.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture' as const,
        reference: '2 Corinthians 5:8 to 10',
        quote: `We are confident,

yes,

well pleased rather to be absent from the body

and to be present with the Lord.

Therefore we make it our aim,

whether present or absent,

to be well pleasing to Him.

For we must all appear before the judgment seat of Christ.`,
      },
      {
        type: 'scripture' as const,
        reference: '1 Corinthians 15:52 to 54',
        quote: `For the trumpet will sound,

and the dead will be raised incorruptible,

and we shall be changed.

For this corruptible must put on incorruption,

and this mortal must put on immortality.

So when this corruptible has put on incorruption,

and this mortal has put on immortality,

then shall be brought to pass the saying that is written:

Death is swallowed up in victory.`,
      },
      {
        type: 'paragraph' as const,
        text: `Paul's hope is not being a bodiless soul.

His hope is being clothed with immortality at the resurrection.`,
      },
    ],
    teachingPoints: [
      `• Paul compares the present body to a tent.
A tent is temporary, fragile, and easily taken down.`,
      `• Paul compares the future resurrection body to a building from God.
This points to something permanent, heavenly, and incorruptible.`,
      `• Paul does not want to be unclothed.
He does not present death as the ideal condition.`,
      `• Paul wants to be further clothed.
His desire is for mortality to be swallowed up by life.`,
      `• The timing is explained in 1 Corinthians 15.
Mortality is swallowed up by life when Christ returns and the dead are raised.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudyInsights: [
      {
        surface: 'skene',
        lemma: 'σκηνή',
        transliteration: 'skene',
        meaning: 'tent, tabernacle, temporary dwelling',
        strongs: 'G4633',
        language: 'Greek',
        reference: '2 Corinthians 5:1',
        note: 'Paul uses the image of a tent to describe our present mortal body. A tent is real, but temporary. It can be taken down. This does not mean the soul is the real person and the body is disposable. Paul is contrasting the weakness of this present life with the permanence of resurrection life.',
      },
      {
        surface: 'oikodome',
        lemma: 'οἰκοδομή',
        transliteration: 'oikodome',
        meaning: 'building, structure, something built',
        strongs: 'G3619',
        language: 'Greek',
        reference: '2 Corinthians 5:1',
        note: "Paul's \"building from God\" points to the resurrection body prepared by God. It is not a floating soul in heaven. It is the future life God gives when mortality is replaced by immortality.",
      },
      {
        surface: 'enduo',
        lemma: 'ἐνδύω',
        transliteration: 'enduo',
        meaning: 'to clothe, to put on',
        strongs: 'G1746',
        language: 'Greek',
        reference: '2 Corinthians 5:4 and 1 Corinthians 15:53',
        note: "Paul's language of being clothed connects 2 Corinthians 5 with 1 Corinthians 15. He does not want to be unclothed. He wants to be clothed with immortality when Christ raises the dead.",
      },
    ],
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching' as const,
      body: `The key phrase is not only "absent from the body."

The key phrase is also "not because we want to be unclothed."

Paul gives us three pictures.

Living now in the tent.

Being unclothed in death.

Being further clothed with the heavenly building.

He does not prefer the unclothed state.

He prefers the final state.

The resurrection state.

The moment when mortality is swallowed up by life.

That phrase matters because Paul uses the same idea in 1 Corinthians 15.

When does mortality put on immortality?

At the last trumpet.

When the dead are raised.

When Christ returns.

So Paul's hope is not death itself.

Paul's hope is the life Christ gives beyond death.`,
    },
    reflectPrompt: `When you hear "absent from the body," what do you assume?

Have you read 2 Corinthians 5 together with 1 Corinthians 15?

Why does it matter that Paul says he does not want to be unclothed?

How does resurrection hope give a stronger picture than a bodiless soul in heaven?`,
    lifeApplication: `This week, read 2 Corinthians 5 slowly.

Do not isolate one phrase.

Follow Paul's whole argument.

Ask:

What is the tent?

What is the building?

What does it mean to be unclothed?

When is mortality swallowed up by life?

Let Scripture define the hope.

Prayer:

Lord,

Teach me to read carefully.

Help me not build beliefs on one phrase removed from context.

Thank You that my hope is not death,

but resurrection.

Thank You that mortality will be swallowed up by life.

Keep my eyes fixed on Christ,

the One who raises the dead

and gives immortality as a gift.

Amen.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    prayer: '',
  },
  'pauls-desire-to-depart': {
    openingThought: `Paul once said he had a desire to depart and be with Christ.

For many people, that sounds simple.

Paul expected to die,

leave his body,

and immediately enter conscious fellowship with Jesus.

But we have to ask a better question.

What did Paul consistently teach about death,

resurrection,

and the return of Christ?

Paul did not build his hope on an immortal soul escaping the body.

He built his hope on Christ raising the dead.

For the believer,

death is like sleep.

The next conscious moment is the voice of Jesus,

the resurrection,

and being with the Lord.

So Paul could speak of death and being with Christ closely,

not because death itself gives life,

but because Christ does.`,
    scriptureRef: 'Philippians 1:21 to 23',
    scriptureQuote: `For to me,

to live is Christ,

and to die is gain.

But if I live on in the flesh,

this will mean fruit from my labor;

yet what I shall choose I cannot tell.

For I am hard-pressed between the two,

having a desire to depart and be with Christ,

which is far better.`,
    scriptureSecondaryRef: '2 Timothy 4:6 to 8',
    scriptureSecondaryQuote: `For I am already being poured out as a drink offering,

and the time of my departure is at hand.

I have fought the good fight,

I have finished the race,

I have kept the faith.

Finally,

there is laid up for me the crown of righteousness,

which the Lord,

the righteous Judge,

will give to me on that Day.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture' as const,
        reference: '1 Thessalonians 4:16 to 17',
        quote: `For the Lord Himself will descend from heaven with a shout,

with the voice of an archangel,

and with the trumpet of God.

And the dead in Christ will rise first.

Then we who are alive and remain shall be caught up together with them in the clouds

to meet the Lord in the air.

And thus we shall always be with the Lord.`,
      },
      {
        type: 'paragraph' as const,
        text: `Paul's hope was not death itself.

Paul's hope was Christ,

resurrection,

and the appearing of the Lord.`,
      },
    ],
    teachingPoints: [
      `• Paul wanted to be with Christ.
That desire was real, personal, and full of hope.`,
      `• Paul did not teach natural immortality.
His letters point again and again to resurrection at Christ's return.`,
      `• Death feels immediate to the believer because the dead do not experience passing time.
The next conscious moment after death is not waiting in darkness. It is the call of Christ.`,
      `• Paul expected his reward on "that Day."
In 2 Timothy 4, he says the crown would be given at the appearing of Jesus.`,
      `• Being with Christ is the final hope.
The question is not whether believers will be with Jesus. The question is when Scripture says that happens.`,
    ],
    wordStudy: {
      surface: 'depart',
      lemma: 'ἀναλύω',
      transliteration: 'analusai',
      meaning: 'to depart, to loose, to release, to return',
      strongs: 'G360',
      reference: 'Philippians 1:23',
      note: `Paul uses a word connected with departure. But the word itself does not explain the full doctrine of death. We must read Paul with Paul. In other passages, Paul connects the believer's hope with the resurrection and the second coming of Christ.

The word shows Paul's desire to leave this painful life and be with Christ.

It does not cancel Paul's clear teaching that the dead in Christ rise when the Lord descends from heaven.`,
    },
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching' as const,
      body: `Paul's writings hold the answer together.

In Philippians, Paul says he desires to depart and be with Christ.

In 2 Timothy, Paul says his crown will be given on that Day.

In 1 Thessalonians, Paul says the dead in Christ rise when Jesus returns.

These are not contradictions.

They fit together when we understand death as sleep.

When a believer dies,

there is no awareness of centuries passing.

No waiting room.

No conscious delay.

The next thing they know is Christ.

That is why Paul could speak with confidence.

Death could not rob him.

Time could not trap him.

The grave could not win.

Christ would call,

and Paul would rise.`,
    },
    reflectPrompt: `When you think about death,

do you think more about the grave,

or about the voice of Christ?

Have you assumed Paul taught immediate conscious life after death,

or have you read his full teaching on resurrection?

Why does the promise of resurrection matter so much?

What changes when your hope is not escape from the body,

but restoration by Jesus?`,
    lifeApplication: `This week, read Philippians 1 and 1 Thessalonians 4 together.

Let Paul explain Paul.

Notice his confidence.

Notice his focus.

Notice where he places the believer's hope.

Then ask yourself:

Is my hope built on ideas I inherited,

or on the promise Jesus will fulfill?

Prayer:

Lord,

Thank You that death does not have the final word.

Thank You that those who sleep in Christ are not forgotten.

Teach me to hope the way Paul hoped.

Not in death,

not in escape,

but in Christ,

resurrection,

and Your return.

Keep my faith steady until that Day.

Amen.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    prayer: '',
  },
  'the-souls-under-the-altar': {
    openingThought: `Revelation can sound strange when we read it too literally.

Souls under an altar.

Voices crying out.

White robes given.

A request for judgment.

Many people read Revelation 6 and assume it proves that dead believers are conscious in heaven.

But Revelation is a symbolic book.

It speaks in images drawn from the sanctuary,

the prophets,

and the rest of Scripture.

Before we ask what the souls are doing,

we should ask what the altar means.

Before we assume the dead are speaking,

we should ask where the Bible has already described blood as crying out.

Revelation is not trying to undo the Bible's teaching on death.

It is showing that God remembers the blood of His faithful witnesses

and will judge righteously.`,
    scriptureRef: 'Revelation 6:9 to 11',
    scriptureQuote: `When He opened the fifth seal,

I saw under the altar the souls of those who had been slain for the word of God

and for the testimony which they held.

And they cried with a loud voice,

saying,

How long,

O Lord,

holy and true,

until You judge and avenge our blood on those who dwell on the earth?

Then a white robe was given to each of them;

and it was said to them that they should rest a little while longer,

until both the number of their fellow servants and their brethren,

who would be killed as they were,

was completed.`,
    scriptureSecondaryRef: 'Genesis 4:10',
    scriptureSecondaryQuote: `And He said,

What have you done?

The voice of your brother's blood cries out to Me from the ground.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture' as const,
        reference: 'Leviticus 17:11',
        quote: `For the life of the flesh is in the blood,

and I have given it to you upon the altar to make atonement for your souls.`,
      },
      {
        type: 'paragraph' as const,
        text: `Revelation 6 does not stand alone.

The Bible has already taught us that blood can cry out symbolically for justice.`,
      },
    ],
    teachingPoints: [
      `• Revelation uses symbolic sanctuary language.
The altar points us to sacrifice, blood, witness, and judgment.`,
      `• The souls under the altar are martyrs.
They were slain for the word of God and for their testimony.`,
      `• Their cry is symbolic, like Abel's blood crying from the ground.
Abel was not consciously speaking from the soil. His blood called for justice.`,
      `• Blood represents life.
In Scripture, shed blood can testify that a life was unjustly taken.`,
      `• The martyrs are told to rest.
This fits the Bible's picture of death as sleep while awaiting resurrection and final justice.`,
    ],
    wordStudy: {
      surface: 'blood',
      lemma: 'דָּם',
      transliteration: 'dam',
      meaning: 'blood',
      strongs: 'H1818',
      reference: 'Genesis 4:10',
      note: `In Genesis, Abel's blood cries out from the ground. The Hebrew word dam refers to blood, but the point is not that blood has a literal voice. It is a symbol of life unjustly taken and a call for God's justice.

Revelation 6 uses the same kind of biblical imagery.

The martyrs' blood cries out,

not because the dead are conscious,

but because God remembers their faithful witness

and will answer injustice.`,
    },
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching' as const,
      body: `The altar matters.

In the sanctuary service,

blood was connected with sacrifice.

Lives were represented there.

Revelation shows the souls of martyrs under the altar because they had poured out their lives in faithfulness to God.

Their blood had been shed.

Their testimony had been rejected.

Their lives seemed forgotten by the world.

But not by God.

The cry,

"How long?"

is not proof that dead souls are conscious.

It is the symbolic cry of injustice waiting for God's answer.

Like Abel's blood,

their blood speaks.

Not with literal vocal cords,

but with moral weight.

God hears.

God remembers.

God will judge.`,
    },
    reflectPrompt: `Have you ever read Revelation too literally in one place

while treating it symbolically in another?

What does Abel's blood crying from the ground teach you about Revelation 6?

Why does it matter that the martyrs are told to rest?

How does this passage show God's justice without teaching conscious life after death?`,
    lifeApplication: `This week, read Revelation 6 beside Genesis 4.

Notice the connection.

Blood cries out.

God hears.

Justice may seem delayed,

but it is not forgotten.

If you have ever felt unseen,

mistreated,

or misrepresented,

remember this:

God does not miss faithful suffering.

Prayer:

Lord,

Thank You that You remember every faithful witness.

Thank You that injustice does not escape Your sight.

Teach me to read Revelation carefully.

Help me let Scripture explain Scripture.

Give me confidence that You will judge with truth,

mercy,

and righteousness.

Amen.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    prayer: '',
  },
  'the-spirits-of-just-men': {
    openingThought: `Some Bible passages sound like they are answering one question,

when they are really answering another.

Hebrews 12 speaks of "the spirits of just men made perfect."

Many people read that phrase and assume it means righteous dead people are now conscious in heaven as disembodied spirits.

But Hebrews is not trying to explain what happens the moment a person dies.

Hebrews is comparing two systems.

The old covenant shadows.

And the better reality found in Christ.

The writer is telling believers not to turn back.

Not to leave Jesus.

Not to trade the heavenly reality for the earthly copy.

So before we ask,

Are these conscious spirits in heaven?

we should ask,

What is Hebrews actually trying to prove?`,
    scriptureRef: 'Hebrews 12:22 to 24',
    scriptureQuote: `But you have come to Mount Zion

and to the city of the living God,

the heavenly Jerusalem,

to an innumerable company of angels,

to the general assembly and church of the firstborn who are registered in heaven,

to God the Judge of all,

to the spirits of just men made perfect,

to Jesus the Mediator of the new covenant,

and to the blood of sprinkling that speaks better things than that of Abel.`,
    scriptureSecondaryRef: 'Hebrews 11:39 to 40',
    scriptureSecondaryQuote: `And all these,

having obtained a good testimony through faith,

did not receive the promise,

God having provided something better for us,

that they should not be made perfect apart from us.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture' as const,
        reference: 'Hebrews 10:14',
        quote: `For by one offering He has perfected forever those who are being sanctified.`,
      },
      {
        type: 'paragraph' as const,
        text: `Hebrews is not pointing believers away from Christ.

It is pointing them to the better covenant,

the better sacrifice,

and the better hope found in Him.`,
      },
    ],
    teachingPoints: [
      `• Hebrews was written to believers tempted to turn back.
They were under pressure and needed to see that Christ was better than the old system.`,
      `• The passage is about access, not the natural immortality of the soul.
Believers have come by faith to the heavenly reality because Jesus is their mediator.`,
      `• Hebrews 11 says the faithful were not made perfect apart from us.
This means the text cannot be used to teach that all righteous dead already received the final promise.`,
      `• The word "spirits" does not automatically mean conscious ghosts.
It can refer to persons viewed in relation to their spiritual standing before God.`,
      `• Perfection comes through Christ.
The focus is not human immortality, but Christ's completed work and the final hope He secures.`,
    ],
    wordStudy: {
      surface: 'spirits',
      lemma: 'πνεῦμα',
      transliteration: 'pneuma',
      meaning: 'spirit, breath, wind, inner life',
      strongs: 'G4151',
      reference: 'Hebrews 12:23',
      note: `Pneuma can mean spirit, but context decides how the word is used. In Hebrews 12, the focus is not on disembodied souls living apart from the body. The focus is on the faithful who are counted righteous through Christ and brought into the perfection made possible by His work.

The word does not override Hebrews 11.

The faithful are not made perfect apart from the complete people of God.

Christ is the center of the passage,

not an immortal soul.`,
    },
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching' as const,
      body: `The PDF emphasizes the historical setting of Hebrews.

Believers were tempted to go back to what looked visible and impressive.

Jerusalem.

The temple.

Priests.

Sacrifices.

The old system had weight.

It had history.

It had beauty.

But Hebrews says Christ is better.

The earthly sanctuary pointed forward.

Jesus fulfilled what it symbolized.

The old covenant had shadows.

Christ brought the reality.

So Hebrews 12 is not trying to teach that the dead are conscious in heaven.

It is saying that believers have access to something greater than the earthly system.

They have come to the heavenly Jerusalem,

to God,

to Christ,

to the new covenant,

and to a perfected people whose hope is complete in Him.`,
    },
    reflectPrompt: `Have you ever used one phrase from a passage without asking what the whole book is about?

What does Hebrews 11:39 to 40 do to the idea that the faithful dead have already received the full promise?

Why does it matter that Jesus is the center of Hebrews 12?

What would change if you read this passage as a covenant passage rather than a death passage?`,
    lifeApplication: `This week, read Hebrews 11 and 12 together.

Do not isolate one phrase.

Follow the argument.

Notice the faithful.

Notice the promise.

Notice Jesus.

Then ask:

Am I tempted to trust what looks visible and familiar,

or am I resting in the better reality Christ has opened?

Prayer:

Lord,

Teach me to read Your Word in context.

Keep me from building beliefs on isolated phrases.

Help me see Jesus as the center of the better covenant.

Strengthen my faith when old assumptions feel easier.

Make my hope complete in Christ,

not in human tradition.

Amen.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    prayer: '',
  },
  'preaching-to-the-spirits-in-prison': {
    openingThought: `Some passages become confusing because we start in the middle.

1 Peter says Christ preached to "the spirits in prison."

That phrase has led many people to imagine Jesus going somewhere after His death to preach to conscious spirits of the dead.

But Peter does not leave us guessing.

He tells us when this preaching was connected.

In the days of Noah.

While the ark was being prepared.

He tells us the issue.

Disobedience.

He tells us the larger point.

Christ suffered,

rose again,

and now has authority over all powers.

This passage is not a doorway into speculation.

It is a call to read carefully.

The question is not,

Where did Jesus travel while dead?

The question is,

How did God warn a disobedient world before judgment came?`,
    scriptureRef: '1 Peter 3:18 to 20',
    scriptureQuote: `For Christ also suffered once for sins,

the just for the unjust,

that He might bring us to God,

being put to death in the flesh but made alive by the Spirit,

by whom also He went and preached to the spirits in prison,

who formerly were disobedient,

when once the Divine longsuffering waited in the days of Noah,

while the ark was being prepared,

in which a few,

that is,

eight souls,

were saved through water.`,
    scriptureSecondaryRef: '2 Peter 2:5',
    scriptureSecondaryQuote: `And did not spare the ancient world,

but saved Noah,

one of eight people,

a preacher of righteousness,

bringing in the flood on the world of the ungodly.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture' as const,
        reference: 'Genesis 6:3',
        quote: `And the LORD said,

My Spirit shall not strive with man forever.`,
      },
      {
        type: 'paragraph' as const,
        text: `1 Peter 3 connects the preaching with Noah's day.

God's Spirit was striving.

Noah was preaching.

The world was resisting.`,
      },
    ],
    teachingPoints: [
      `• Peter is writing to suffering believers.
His point is encouragement through Christ's suffering, resurrection, and victory.`,
      `• The preaching is connected to the days of Noah.
Peter specifically points to the time when the ark was being prepared.`,
      `• Noah was a preacher of righteousness.
God warned the ancient world through Noah's message.`,
      `• The "spirits in prison" were formerly disobedient.
They were people bound in sin who rejected God's warning in Noah's day.`,
      `• The passage ends with resurrection and Christ's authority.
Peter's focus is not conscious dead people, but Christ's victory over sin, judgment, and hostile powers.`,
    ],
    wordStudy: {
      surface: 'spirits',
      lemma: 'πνεύματα',
      transliteration: 'pneumata',
      meaning: 'spirits',
      strongs: 'G4151',
      reference: '1 Peter 3:19',
      note: `Pneumata is the plural form of spirit. The word alone does not prove the spirits were conscious dead people. Context matters. Peter identifies them as those who were disobedient in the days of Noah, while the ark was being prepared.

The passage points backward,

not to a hidden mission after the cross,

but to God's warning through the Spirit in Noah's generation.

The same Spirit who raised Christ is the Spirit who had once pleaded with the world before the flood.`,
    },
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching' as const,
      body: `The PDF pushes us to ask the right timing question.

When did the preaching happen?

Peter answers:

when God's longsuffering waited in the days of Noah.

That matters.

Jesus was not preaching a second chance to dead people after the crucifixion.

The Spirit of Christ was working through Noah's message before the flood.

The people were alive then.

They were disobedient then.

They rejected the warning then.

Now Peter can describe them as spirits in prison because their lives ended under judgment.

But the preaching happened before the flood,

not after their death.

This preserves the larger Bible teaching.

The dead do not receive a second probation.

God warns while people are alive.

Judgment follows after persistent rejection.`,
    },
    reflectPrompt: `Have you ever read 1 Peter 3 as if it were mainly about what happened after Jesus died?

What changes when you notice Peter's phrase,

"in the days of Noah"?

Why is it important that God warns people while they are alive?

Where might God be calling you to respond now,

not later?`,
    lifeApplication: `This week, read 1 Peter 3 slowly.

Notice the movement.

Christ suffered.

Christ was raised.

Noah preached.

Only a few responded.

Baptism now points to a life surrendered to God.

Then ask:

Am I responding to the light God has already given me?

Prayer:

Lord,

Teach me to respond while Your Spirit is speaking.

Keep me from delaying obedience.

Help me read difficult passages with patience and care.

Thank You that Christ suffered for sinners,

rose in victory,

and now reigns above every power.

Make me faithful to Your voice today.

Amen.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    prayer: '',
  },
  'three-doctrines-that-belong-together': {
    openingThought: `Some truths stand alone.

Others are connected like roots under the ground.

You may only see one tree above the surface,

but underneath,

everything is intertwined.

The Bible's teaching about death is like that.

It connects to the judgment.

It connects to the second coming.

It connects to resurrection.

It connects to reward.

If we misunderstand one piece,

the others begin to shift.

If the dead are already rewarded at death,

what happens at the second coming?

If everyone goes immediately to heaven or torment,

why does Scripture emphasize resurrection?

If judgment is complete at death,

why does the Bible speak of books,

records,

and future reward?

These doctrines belong together.

And when they are kept together,

the Bible becomes clearer.`,
    scriptureRef: 'Genesis 2:7',
    scriptureQuote: `And the LORD God formed man of the dust of the ground,

and breathed into his nostrils the breath of life;

and man became a living being.`,
    scriptureSecondaryRef: 'Ecclesiastes 12:7',
    scriptureSecondaryQuote: `Then the dust will return to the earth as it was,

and the spirit will return to God who gave it.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture' as const,
        reference: 'Daniel 12:2',
        quote: `And many of those who sleep in the dust of the earth shall awake,

some to everlasting life,

some to shame and everlasting contempt.`,
      },
      {
        type: 'scripture' as const,
        reference: '2 Corinthians 5:10',
        quote: `For we must all appear before the judgment seat of Christ,

that each one may receive the things done in the body,

according to what he has done,

whether good or bad.`,
      },
      {
        type: 'scripture' as const,
        reference: 'Revelation 22:12',
        quote: `And behold,

I am coming quickly,

and My reward is with Me,

to give to every one according to his work.`,
      },
      {
        type: 'paragraph' as const,
        text: `Scripture does not place the final reward at death.

It places reward with the coming of Christ.`,
      },
    ],
    teachingPoints: [
      `• The state of the dead affects how we understand judgment.
If the dead are unconscious, then judgment involves the record of the life, not a conscious soul already rewarded.`,
      `• Judgment affects how we understand the second coming.
Christ brings His reward when He comes.`,
      `• The second coming affects how we understand resurrection.
The dead in Christ rise when the Lord descends from heaven.`,
      `• Death is not the believer's final hope.
The hope is resurrection, restoration, and life with Christ.`,
      `• These doctrines protect each other.
When kept together, they guard the Bible's teaching from confusion and speculation.`,
    ],
    wordStudy: {
      surface: 'judgment seat',
      lemma: 'βῆμα',
      transliteration: 'bema',
      meaning: 'judgment seat, tribunal, place where a verdict is rendered',
      strongs: 'G968',
      reference: '2 Corinthians 5:10',
      note: `Paul says all must appear before the judgment seat of Christ. The word bema points to judgment and accountability. This does not mean the dead are consciously standing there immediately after death. Scripture connects final reward with Christ's coming and resurrection.

The judgment is real.

The record matters.

The reward comes with Jesus.`,
    },
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching' as const,
      body: `The PDF argues that three doctrines must be studied together:

the judgment,

the state of the dead,

and the second coming of Christ.

That is not a minor point.

If death is misunderstood,

judgment becomes confusing.

If judgment is misunderstood,

the second coming loses weight.

If the second coming is misunderstood,

resurrection becomes less important.

But Scripture keeps the order clear.

God gives life.

Death returns humanity to dust.

The dead sleep.

God keeps the record.

Christ judges righteously.

Jesus returns.

The dead in Christ rise.

Reward is given.

The Bible's hope is not scattered.

It is ordered.

And that order protects us.`,
    },
    reflectPrompt: `Have you ever thought about how one doctrine affects another?

If people receive their full reward at death,

why would Jesus say His reward is with Him when He comes?

Why does resurrection matter if the dead are already fully alive somewhere else?

What becomes clearer when judgment,

death,

and the second coming are studied together?`,
    lifeApplication: `This week, trace one Bible theme across several passages.

Do not build your belief from one isolated text.

Follow the pattern.

Ask:

What does Genesis say?

What do the prophets say?

What does Jesus say?

What do the apostles say?

What does Revelation say?

Let Scripture build the doctrine.

Prayer:

Lord,

Help me see how Your truths fit together.

Keep me from isolated conclusions.

Teach me to value the resurrection,

the judgment,

and the return of Christ.

Let my hope rest where Scripture places it.

Not in death,

but in Jesus,

who will come again.

Amen.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    prayer: '',
  },
  'the-dead-who-stand-before-god': {
    openingThought: `Revelation says the dead stand before God.

That can sound strange.

If the dead are truly dead,

how can they stand?

If they do not live again until after the thousand years,

how can they appear in judgment before then?

Some answer by saying the souls of the dead must be conscious before God.

But Revelation gives another answer.

The books are opened.

The record is reviewed.

The judgment is not based on guesswork.

It is based on what has been written.

The dead can stand before God in judgment through the record of their lives.

Then, after the thousand years,

they are raised and stand in person.

The Bible does not need an immortal soul to explain judgment.

It needs a righteous Judge,

an accurate record,

and a resurrection.`,
    scriptureRef: 'Revelation 20:11 to 12',
    scriptureQuote: `Then I saw a great white throne

and Him who sat on it,

from whose face the earth and the heaven fled away.

And there was found no place for them.

And I saw the dead,

small and great,

standing before God,

and books were opened.

And another book was opened,

which is the Book of Life.

And the dead were judged according to their works,

by the things which were written in the books.`,
    scriptureSecondaryRef: 'Revelation 20:13 to 15',
    scriptureSecondaryQuote: `The sea gave up the dead who were in it,

and Death and Hades delivered up the dead who were in them.

And they were judged,

each one according to his works.

Then Death and Hades were cast into the lake of fire.

This is the second death.

And anyone not found written in the Book of Life

was cast into the lake of fire.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture' as const,
        reference: 'Daniel 7:10',
        quote: `The court was seated,

and the books were opened.`,
      },
      {
        type: 'paragraph' as const,
        text: `The judgment is connected with books.

God does not judge from memory loss,

rumor,

or appearance.

He judges from perfect record.`,
      },
    ],
    teachingPoints: [
      `• Revelation 20 shows more than one judgment phase.
The dead are judged by records during the millennium, then raised after the millennium for the final execution of judgment.`,
      `• The books contain the record of the life.
God's judgment is transparent, careful, and just.`,
      `• The dead stand before God through their records.
They do not need to be conscious spirits for their cases to be reviewed.`,
      `• After the thousand years, the dead are raised.
Then they stand in person and see the justice of God's decision.`,
      `• The final result is the second death.
Death and Hades are destroyed, and sin comes to its final end.`,
    ],
    wordStudy: {
      surface: 'Hades',
      lemma: 'ᾅδης',
      transliteration: 'hades',
      meaning: 'grave, realm of the dead, resting place of the dead',
      strongs: 'G86',
      reference: 'Revelation 20:13 to 14',
      note: `Hades is often misunderstood as a place of burning torment. But in Revelation 20, Hades gives up the dead and is then destroyed in the lake of fire.

That means Hades is not the final place of punishment.

It is connected with the grave,

the temporary place of the dead,

until resurrection and final judgment.`,
    },
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching' as const,
      body: `The PDF makes an important distinction.

During the thousand years,

the wicked dead stand before God through the records of their lives.

After the thousand years,

they are raised and stand before God in person.

That distinction matters.

Revelation 20:11 to 12 describes the judgment scene with books opened.

Revelation 20:13 to 15 describes the dead being given up by the sea,

Death,

and Hades.

Then the final sentence is carried out.

This protects the Bible's teaching on death.

The dead are not conscious souls being judged immediately after death.

Their lives are recorded.

Their cases are reviewed.

Their resurrection comes later.

And when God's judgment is revealed,

every question is answered.

God is shown to be just.`,
    },
    reflectPrompt: `When you read about judgment,

do you picture fear,

or fairness?

What does it mean that God judges from records?

How does this help explain how the dead can stand before God

without being conscious after death?

Why does it matter that the final judgment ends with the destruction of death itself?`,
    lifeApplication: `This week, think honestly about the record of your life.

Not to live in fear.

To live awake.

Ask:

What am I choosing?

What am I becoming?

What am I bringing before Christ?

Then remember this:

The safest place in judgment is not denial.

The safest place is Jesus.

Prayer:

Lord,

You are a righteous Judge.

Thank You that nothing is hidden from You,

and nothing is misunderstood by You.

Teach me to live honestly before You.

Search my heart.

Lead me to repentance.

Keep my name in the Book of Life,

and let my hope rest fully in Christ.

Amen.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    prayer: '',
  },
  'the-resurrection-and-the-life': {
    openingThought: `Jesus stood outside a tomb and wept.

That matters.

He did not treat death as normal.

He did not speak of it as a doorway to a better place.

He did not tell Martha that Lazarus was already alive somewhere else.

He pointed her to resurrection.

Then He said something only God could say.

I am the resurrection and the life.

Not merely,

I teach resurrection.

Not merely,

I believe in resurrection.

I am the resurrection.

The hope of the believer is not an immortal soul escaping death.

The hope of the believer is Jesus calling the dead back to life.`,
    scriptureRef: 'John 11:11 to 14',
    scriptureQuote: `Our friend Lazarus sleeps,

but I go that I may wake him up.

Then His disciples said,

Lord,

if he sleeps he will get well.

However,

Jesus spoke of his death,

but they thought that He was speaking about taking rest in sleep.

Then Jesus said to them plainly,

Lazarus is dead.`,
    scriptureSecondaryRef: 'John 11:23 to 26',
    scriptureSecondaryQuote: `Jesus said to her,

Your brother will rise again.

Martha said to Him,

I know that he will rise again in the resurrection at the last day.

Jesus said to her,

I am the resurrection and the life.

He who believes in Me,

though he may die,

he shall live.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture' as const,
        reference: 'John 11:43 to 44',
        quote: `Now when He had said these things,

He cried with a loud voice,

Lazarus,

come forth.

And he who had died came out bound hand and foot with graveclothes.`,
      },
      {
        type: 'paragraph' as const,
        text: `Jesus did not call Lazarus down from heaven.

He called him out of the grave.`,
      },
    ],
    teachingPoints: [
      `• Jesus described death as sleep.
He used the image of sleep, then plainly explained that Lazarus was dead.`,
      `• Martha's hope was resurrection at the last day.
She did not speak of Lazarus already living in heaven.`,
      `• Jesus centered hope in Himself.
He is not only the giver of resurrection. He is the resurrection and the life.`,
      `• Lazarus came out of the tomb.
The miracle points to Christ's power to raise the dead, not to conscious life after death.`,
      `• The resurrection of Lazarus exposed unbelief.
Even after seeing death reversed, some still refused Christ.`,
    ],
    wordStudy: {
      surface: 'resurrection',
      lemma: 'ἀνάστασις',
      transliteration: 'anastasis',
      meaning: 'resurrection, rising up, standing again',
      strongs: 'G386',
      reference: 'John 11:24 to 25',
      note: `Martha said Lazarus would rise again in the resurrection at the last day. The word anastasis points to a real rising from death, not a soul continuing life apart from the body.

Jesus did not correct Martha's hope in the last-day resurrection.

He deepened it.

He showed that resurrection is not only an event.

It is found in Him.`,
    },
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching' as const,
      body: `The PDF connects John 11 with the parable of the rich man and Lazarus.

That connection is important.

In Luke 16, Jesus told a parable using the name Lazarus.

In John 11, Jesus actually raised a man named Lazarus from the dead.

The religious leaders had Moses and the prophets.

They also saw a man raised.

Still, many refused to believe.

That confirms the main lesson.

The problem was not lack of evidence.

It was resistance to truth.

Jesus said,

Lazarus,

come forth.

Not,

come down.

Not,

return from heaven.

The dead man came out of the tomb.

This is the Bible's hope.

Not secret consciousness after death,

but Christ's public victory over the grave.`,
    },
    reflectPrompt: `When Jesus spoke to Martha,

why did He point her to resurrection?

What does it mean that Lazarus came out of the tomb,

not down from heaven?

Have you treated death as the believer's hope

instead of resurrection?

How does John 11 make Christ more central to your hope?`,
    lifeApplication: `This week, read John 11 slowly.

Pay attention to Jesus.

His grief.

His words.

His command.

His power.

Then ask:

Where have I placed my hope?

In an idea about death,

or in the living Christ who raises the dead?

Prayer:

Lord,

You are the resurrection and the life.

Teach me to hope in You.

Not in human ideas.

Not in vague comfort.

Not in death itself.

But in Your power to call the dead back to life.

Strengthen my faith in the resurrection,

and help me trust Your voice.

Amen.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    prayer: '',
  },
  'the-keys-of-hades': {
    openingThought: `Sometimes confusion begins with translation.

One Bible says hell.

Another says grave.

Another simply says Hades.

So which is it?

When Scripture speaks of Sheol in the Old Testament

and Hades in the New Testament,

it is not usually describing a place of burning torment.

It is describing the grave.

The place of the dead.

The resting place until resurrection.

This matters because a wrong definition can create a wrong doctrine.

If Hades means a burning place of conscious torment,

then death looks one way.

If Hades means the grave,

then resurrection becomes the center again.

The Bible does not leave us without help.

It lets Scripture explain Scripture.`,
    scriptureRef: 'Psalm 16:10',
    scriptureQuote: `For You will not leave my soul in Sheol,

nor will You allow Your Holy One to see corruption.`,
    scriptureSecondaryRef: 'Acts 2:27',
    scriptureSecondaryQuote: `For You will not leave my soul in Hades,

nor will You allow Your Holy One to see corruption.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture' as const,
        reference: 'Hosea 13:14',
        quote: `I will ransom them from the power of the grave;

I will redeem them from death.

O Death,

I will be your plagues.

O Grave,

I will be your destruction.`,
      },
      {
        type: 'scripture' as const,
        reference: '1 Corinthians 15:54 to 55',
        quote: `Death is swallowed up in victory.

O Death,

where is your sting?

O Hades,

where is your victory?`,
      },
      {
        type: 'scripture' as const,
        reference: 'Revelation 1:18',
        quote: `I am He who lives,

and was dead,

and behold,

I am alive forevermore.

Amen.

And I have the keys of Hades and of Death.`,
      },
      {
        type: 'paragraph' as const,
        text: `Hades does not defeat Christ.

Christ holds the keys.`,
      },
    ],
    teachingPoints: [
      `• Sheol is the Old Testament word often connected with the grave.
It is where the dead go, righteous and wicked alike.`,
      `• Hades is the New Testament counterpart to Sheol.
Acts 2 uses Hades where Psalm 16 uses Sheol.`,
      `• Translation can create confusion.
When Sheol or Hades is translated as hell, many readers imagine burning torment instead of the grave.`,
      `• Hades is temporary.
Revelation says Death and Hades give up the dead and are later destroyed.`,
      `• Christ has authority over death and the grave.
The keys belong to Him because He died, rose, and conquered the grave.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudyInsights: [
      {
        surface: 'Sheol',
        lemma: 'שְׁאוֹל',
        transliteration: 'sheol',
        meaning: 'grave, place of the dead, resting place of the dead',
        strongs: 'H7585',
        language: 'Hebrew',
        reference: 'Psalm 16:10',
        note: `Sheol does not naturally mean a burning hell. In many Old Testament passages, it points to the grave, the place where the dead rest. Psalm 16 says the Holy One would not be left in Sheol, meaning He would not remain in the grave.`,
      },
      {
        surface: 'Hades',
        lemma: 'ᾅδης',
        transliteration: 'hades',
        meaning: 'grave, realm of the dead, resting place of the dead',
        strongs: 'G86',
        language: 'Greek',
        reference: 'Acts 2:27 and Revelation 1:18',
        note: `Hades is the Greek term used in Acts 2 when Peter quotes Psalm 16. That shows Hades functions as the New Testament equivalent of Sheol. It is not the final lake of fire. It is connected with death and the grave.`,
      },
    ],
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching' as const,
      body: `The PDF emphasizes that Sheol and Hades must be defined by Scripture,

not Greek philosophy,

not tradition,

and not inconsistent translation.

Psalm 16 says the Messiah would not be left in Sheol.

Acts 2 quotes that same text and says Hades.

That gives us the connection.

Sheol and Hades belong together.

They point to the grave.

This also explains 1 Corinthians 15.

When Christ returns,

death is swallowed up in victory.

The grave loses.

Hades loses.

Not because souls escaped long ago,

but because Jesus raises the dead.

And Revelation goes even further.

Death and Hades are finally destroyed.

The grave does not last forever.

Christ does.`,
    },
    reflectPrompt: `Have Bible translations ever shaped your understanding without you realizing it?

What changes when Hades is understood as the grave instead of a place of burning torment?

Why does it matter that Christ has the keys of Death and Hades?

How does this make resurrection more central to your hope?`,
    lifeApplication: `This week, compare Psalm 16:10 with Acts 2:27.

Then compare Hosea 13:14 with 1 Corinthians 15:55.

Let Scripture build the definition.

Ask:

How does the Bible use these words?

What hope does the Bible connect with them?

What does Christ's resurrection prove?

Prayer:

Lord,

Thank You that Jesus holds the keys.

Death does not own the final word.

The grave does not own Your people.

Teach me to define Scripture by Scripture.

Clear away confusion.

Strengthen my hope in the resurrection,

and keep my eyes on Christ,

who lives forevermore.

Amen.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    prayer: '',
  },
  'the-rich-man-and-lazarus': {
    openingThought: `The story of the rich man and Lazarus is one of the most quoted passages about death.

Many read it as a literal window into the afterlife.

A rich man suffering in flames.

Lazarus resting in Abraham's bosom.

A conversation across a great gulf.

But Jesus was not giving a travel guide to the world of the dead.

He was speaking to the Pharisees.

Men who loved money.

Men who trusted in their connection to Abraham.

Men who had Moses and the prophets,

but were resisting the very One those Scriptures revealed.

The question is not only,

What happens after death?

The deeper question is,

Will you listen to Scripture while you still have time?`,
    scriptureRef: 'Luke 16:19 to 21',
    scriptureQuote: `There was a certain rich man who was clothed in purple and fine linen

and fared sumptuously every day.

But there was a certain beggar named Lazarus,

full of sores,

who was laid at his gate,

desiring to be fed with the crumbs which fell from the rich man's table.`,
    scriptureSecondaryRef: 'Luke 16:29 to 31',
    scriptureSecondaryQuote: `Abraham said to him,

They have Moses and the prophets;

let them hear them.

And he said,

No,

father Abraham;

but if one goes to them from the dead,

they will repent.

But he said to him,

If they do not hear Moses and the prophets,

neither will they be persuaded though one rise from the dead.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture' as const,
        reference: 'John 11:43 to 44',
        quote: `Now when He had said these things,

He cried with a loud voice,

Lazarus,

come forth.

And he who had died came out.`,
      },
      {
        type: 'paragraph' as const,
        text: `Jesus points the hearer back to Scripture.

Even resurrection evidence will not persuade a heart that refuses the Word.`,
      },
    ],
    teachingPoints: [
      `• Jesus addressed this parable to the Pharisees.
Luke tells us they loved money and were mocking His teaching.`,
      `• The parable uses imagery familiar to the audience.
Jesus met them on their own ground to teach a deeper truth.`,
      `• The rich man represents those who have privilege but refuse mercy and truth.
He had access, knowledge, and opportunity, but his heart remained unchanged.`,
      `• Lazarus points to the rejected and needy who are received by grace.
The imagery of crumbs, table, and dogs connects with Gentile inclusion and mercy.`,
      `• The central lesson is not conscious torment after death.
The central lesson is that Moses and the prophets are enough, and those who reject Scripture will not be persuaded even by resurrection.`,
    ],
    wordStudy: {
      surface: 'Hades',
      lemma: 'ᾅδης',
      transliteration: 'hades',
      meaning: 'grave, realm of the dead, place of the dead',
      strongs: 'G86',
      reference: 'Luke 16:23',
      note: `In Luke 16, Jesus uses familiar imagery connected with ideas His audience recognized. The word hades appears in the story, but the parable should not be used to overturn the Bible's clearer teaching about death, sleep, and resurrection.

The key point comes at the end.

The rich man asks for Lazarus to go from the dead.

Abraham answers that if they will not hear Moses and the prophets,

they will not be persuaded though one rise from the dead.

The focus is Scripture,

not a new doctrine of conscious torment.`,
    },
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching' as const,
      body: `The PDF highlights why the name Lazarus matters.

Some argue this cannot be a parable because Jesus used a proper name.

But the use of Lazarus is intentional.

Later, Jesus would raise a real man named Lazarus from the dead.

That miracle did not lead the religious leaders to repent.

Instead,

some plotted more intensely against Jesus.

That confirms the point of the parable.

If people refuse Moses and the prophets,

even resurrection will not convince them.

The issue was not lack of evidence.

It was resistance to Scripture.

The rich man wanted a sign from the dead.

Abraham pointed him back to the written Word.

That is still the test.`,
    },
    reflectPrompt: `Have you ever used this parable to answer a question Jesus was not primarily addressing?

What does the ending of the story emphasize most clearly?

Why does Abraham point back to Moses and the prophets?

Are there areas where you are asking for more evidence

while ignoring light God has already given?`,
    lifeApplication: `This week, practice listening to Scripture before asking for signs.

Choose one clear truth you already understand.

Do not wait for something dramatic.

Respond to what God has already made plain.

Ask:

Am I hearing Moses and the prophets?

Am I listening to Christ?

Am I delaying obedience while asking for more proof?

Prayer:

Lord,

Teach me to hear Your Word clearly.

Keep me from demanding signs while ignoring Scripture.

Soften my heart where I have resisted truth.

Help me respond to the light You have already given.

Lead me to trust Your Word,

follow Christ,

and live with mercy.

Amen.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    prayer: '',
  },
  'all-live-to-him': {
    openingThought: `The Sadducees did not believe in resurrection.

So they came to Jesus with a question meant to trap Him.

A woman had been married to seven brothers.

Whose wife would she be in the resurrection?

They thought the question exposed resurrection as impossible.

But Jesus exposed something deeper.

They did not know the Scriptures.

And they did not know the power of God.

Then Jesus went to the writings of Moses,

the very part of Scripture the Sadducees claimed to honor.

God said,

I am the God of Abraham,

the God of Isaac,

and the God of Jacob.

Not because they were conscious in heaven at that moment,

but because God's covenant promise to them could not fail.

To God,

they live,

because resurrection is certain.`,
    scriptureRef: 'Luke 20:37 to 38',
    scriptureQuote: `But even Moses showed in the burning bush passage

that the dead are raised,

when he called the Lord

the God of Abraham,

the God of Isaac,

and the God of Jacob.

For He is not the God of the dead but of the living,

for all live to Him.`,
    scriptureSecondaryRef: 'Matthew 22:29',
    scriptureSecondaryQuote: `Jesus answered and said to them,

You are mistaken,

not knowing the Scriptures

nor the power of God.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture' as const,
        reference: 'Acts 23:8',
        quote: `For Sadducees say that there is no resurrection,

and no angel or spirit;

but the Pharisees confess both.`,
      },
      {
        type: 'scripture' as const,
        reference: 'Hebrews 11:13',
        quote: `These all died in faith,

not having received the promises,

but having seen them afar off.`,
      },
      {
        type: 'paragraph' as const,
        text: `The patriarchs died in faith.

They had not yet received the final promise.

But God speaks of them with certainty,

because His promise to raise them cannot fail.`,
      },
    ],
    teachingPoints: [
      `• The Sadducees denied the resurrection.
Their question was designed to make resurrection look unreasonable.`,
      `• Jesus answered from the writings of Moses.
He used the very Scriptures they accepted to prove resurrection.`,
      `• God's covenant identity proves His faithfulness.
He is still the God of Abraham, Isaac, and Jacob because His promise to them still stands.`,
      `• "All live to Him" does not require conscious life after death.
It means they are alive in God's purpose, memory, covenant, and certain resurrection.`,
      `• Jesus grounded hope in God's power.
The resurrection is not impossible because God is able to raise the dead.`,
    ],
    wordStudy: {
      surface: 'raised',
      lemma: 'ἀνάστασις',
      transliteration: 'anastasis',
      meaning: 'resurrection, rising up, standing again',
      strongs: 'G386',
      reference: 'Luke 20:35 to 37',
      note: `The issue in Luke 20 is resurrection. Jesus is not debating whether immortal souls are conscious after death. He is answering men who denied that the dead rise.

Anastasis points to a real rising from death.

Jesus uses Moses to prove that the dead will be raised,

because God's covenant promise cannot end in the grave.`,
    },
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching' as const,
      body: `The PDF stresses the audience.

Jesus was answering the Sadducees,

not the Pharisees.

That matters.

The Pharisees believed in some form of afterlife.

The Sadducees denied resurrection.

So Jesus shaped His answer to prove resurrection from the books of Moses.

He did not say,

Abraham, Isaac, and Jacob are alive as immortal souls.

He said Moses showed that the dead are raised.

That is the key.

God's statement at the burning bush was not evidence that death is fake.

It was evidence that death cannot cancel God's covenant.

The patriarchs died.

They had not received the promises.

But they live to God because He will raise them.

His promise is as certain as if it had already happened.`,
    },
    reflectPrompt: `Have you read "all live to Him" as a statement about conscious life after death,

or as Jesus' proof of resurrection?

Why does the audience matter in this passage?

What does it mean that God remembers His covenant even after His people die?

How does this strengthen your confidence in resurrection?`,
    lifeApplication: `This week, read Luke 20 and Hebrews 11 together.

Notice the tension.

They died in faith.

They had not yet received the promise.

Yet God still calls Himself their God.

Ask:

Do I trust God's promise even when fulfillment seems delayed?

Do I believe His power is stronger than death?

Prayer:

Lord,

You are the God of the living.

You do not forget Your people.

You do not lose those who sleep in faith.

Teach me to trust Your promise.

Strengthen my hope in the resurrection.

Help me know the Scriptures

and believe the power of God.

Amen.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    prayer: '',
  },
  'the-worm-and-the-fire': {
    openingThought: `Some words in Scripture sound terrifying when they are isolated.

Everlasting fire.

Everlasting punishment.

Unquenchable fire.

The worm that does not die.

Read alone,

those phrases can sound like endless conscious suffering.

But the Bible must explain its own language.

Sodom suffered eternal fire,

yet Sodom is not still burning.

Unquenchable fire cannot be put out,

but it stops when everything is consumed.

Everlasting punishment does not require an everlasting process.

It can mean an everlasting result.

The question is not whether judgment is real.

It is.

The question is what kind of judgment Scripture actually teaches.`,
    scriptureRef: 'Matthew 25:41',
    scriptureQuote: `Depart from Me,

you cursed,

into the everlasting fire prepared for the devil and his angels.`,
    scriptureSecondaryRef: 'Matthew 25:46',
    scriptureSecondaryQuote: `And these will go away into everlasting punishment,

but the righteous into eternal life.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture' as const,
        reference: 'Mark 9:43 to 44',
        quote: `It is better for you to enter into life maimed,

rather than having two hands,

to go to hell,

into the fire that shall never be quenched,

where their worm does not die,

and the fire is not quenched.`,
      },
      {
        type: 'scripture' as const,
        reference: 'Jude 7',
        quote: `Sodom and Gomorrah,

and the cities around them in a similar manner to these,

having given themselves over to sexual immorality

and gone after strange flesh,

are set forth as an example,

suffering the vengeance of eternal fire.`,
      },
      {
        type: 'scripture' as const,
        reference: '2 Peter 2:6',
        quote: `And turning the cities of Sodom and Gomorrah into ashes,

condemned them to destruction,

making them an example to those who afterward would live ungodly.`,
      },
      {
        type: 'paragraph' as const,
        text: `Sodom suffered eternal fire.

Peter says it became ashes.

That gives us a Bible definition.`,
      },
    ],
    teachingPoints: [
      `• Everlasting fire produces everlasting results.
Sodom's fire is called eternal, but the city is not still burning.`,
      `• Everlasting punishment means the result is permanent.
The wicked die and do not live again.`,
      `• Unquenchable fire cannot be stopped while it is doing its work.
It burns until everything that can be consumed is consumed.`,
      `• The undying worm points to complete destruction.
The image comes from corpses being consumed, not immortal souls being tortured forever.`,
      `• God's judgment ends sin.
He does not preserve rebellion forever in endless conscious torment.`,
    ],
    wordStudy: {
      surface: 'quenched',
      lemma: 'ἄσβεστος',
      transliteration: 'asbestos',
      meaning: 'unquenchable, unable to be extinguished',
      strongs: 'G762',
      reference: 'Mark 9:43 and Matthew 3:12',
      note: `Asbestos does not mean a fire that keeps the wicked alive forever. It describes a fire no one can put out while it consumes what is burning. John the Baptist used the same word for the fire that burns up the chaff.

The point is not endless burning bodies.

The point is unstoppable judgment

until destruction is complete.`,
    },
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching' as const,
      body: `The PDF gives a clear pattern.

Everlasting fire means fire with an eternal source and permanent result.

Everlasting punishment means punishment whose result never reverses.

Everlasting destruction means destruction that remains forever.

Unquenchable fire means fire no one can extinguish until it has consumed everything.

The Bible repeatedly uses the language of destruction,

perishing,

ashes,

death,

and consumption.

That matters.

God's final judgment is not weakness.

It is not cruelty either.

It is complete justice.

Sin ends.

Death ends.

Rebellion ends.

The universe is not kept forever with one corner of endless suffering.

God destroys evil

and restores all things.`,
    },
    reflectPrompt: `Has your view of hell made God seem unjust or cruel?

What changes when you let Sodom define eternal fire?

Why does it matter that the Bible uses words like ashes,

death,

perish,

and destruction?

How does final destruction protect both God's justice

and His character of love?`,
    lifeApplication: `This week, compare Jude 7 with 2 Peter 2:6.

Then read Matthew 3:12 and Mark 9:43.

Let Scripture define the symbols.

Ask:

What is consumed?

What remains?

What is eternal,

the process or the result?

Prayer:

Lord,

Help me understand Your judgment through Your Word.

Remove false pictures of Your character.

Teach me to see Your justice clearly.

Thank You that evil will not last forever.

Thank You that death will end.

Give me confidence in Your mercy,

Your holiness,

and Your final restoration.

Amen.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    prayer: '',
  },
  'immortality-or-resurrection': {
    openingThought: `There are two very different ways to think about death.

One says the soul is naturally immortal.

The body dies,

but the real person continues living somewhere else.

The other says death is truly death,

and the hope of the believer is resurrection.

Those two ideas may sound similar at first,

but they are not.

One makes death the doorway to continued life.

The other makes Christ's return and resurrection the moment of restored life.

The Bible does not build hope on something naturally immortal inside us.

It builds hope on Jesus,

who died,

rose again,

and will call the dead from the grave.

The question is simple.

Is our hope in the immortality of the soul,

or in the resurrection of the dead?`,
    scriptureRef: '1 Corinthians 15:16 to 18',
    scriptureQuote: `For if the dead do not rise,

then Christ is not risen.

And if Christ is not risen,

your faith is futile;

you are still in your sins.

Then also those who have fallen asleep in Christ have perished.`,
    scriptureSecondaryRef: '1 Corinthians 15:20 to 22',
    scriptureSecondaryQuote: `But now Christ is risen from the dead,

and has become the firstfruits of those who have fallen asleep.

For since by man came death,

by Man also came the resurrection of the dead.

For as in Adam all die,

even so in Christ all shall be made alive.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture' as const,
        reference: '2 Timothy 1:10',
        quote: `Our Savior Jesus Christ,

who has abolished death

and brought life and immortality to light through the gospel.`,
      },
      {
        type: 'scripture' as const,
        reference: '1 Timothy 6:15 to 16',
        quote: `He who is the blessed and only Potentate,

the King of kings and Lord of lords,

who alone has immortality.`,
      },
      {
        type: 'paragraph' as const,
        text: `Scripture does not say humanity naturally possesses immortality.

It says God alone has immortality,

and Christ brings life and immortality through the gospel.`,
      },
    ],
    teachingPoints: [
      `• Natural immortality and resurrection are not the same hope.
If the soul is already alive after death, resurrection becomes less central.`,
      `• Paul made resurrection essential.
He said if the dead do not rise, faith is empty and those who sleep in Christ have perished.`,
      `• Immortality is not natural to humanity.
God alone possesses immortality by nature.`,
      `• Immortality is brought to light through Christ.
It is not something we already own. It is a gift revealed through the gospel.`,
      `• The biblical hope is embodied restoration.
God does not save a ghost from the body. He restores the whole person.`,
    ],
    wordStudy: {
      surface: 'immortality',
      lemma: 'ἀθανασία',
      transliteration: 'athanasia',
      meaning: 'immortality, deathlessness',
      strongs: 'G110',
      reference: '1 Corinthians 15:53 to 54 and 1 Timothy 6:16',
      note: `Athanasia means immortality or deathlessness. Scripture does not describe humanity as naturally possessing athanasia. Paul says this mortal must put on immortality, and he says God alone has immortality.

That means immortality is received,

not inherent.

It is given through Christ,

not possessed apart from Him.`,
    },
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching' as const,
      body: `The PDF contrasts the biblical view of death with Greek philosophical ideas.

Greek thought often treated the body as a prison

and the soul as naturally immortal.

But Scripture begins differently.

God formed man from dust.

God breathed into him the breath of life.

Man became a living being.

Death reverses that process.

The body returns to dust.

The breath returns to God.

The person sleeps until resurrection.

This is why Paul does not say,

If the soul does not escape, our faith is empty.

He says,

If the dead do not rise, our faith is empty.

The resurrection is not an optional doctrine.

It is the center of Christian hope.`,
    },
    reflectPrompt: `Which idea has shaped your thinking more?

A naturally immortal soul,

or resurrection at the return of Christ?

Why does Paul make resurrection so essential?

What changes when immortality is seen as a gift,

not a possession?

How does this make Jesus more central to your hope?`,
    lifeApplication: `This week, read 1 Corinthians 15 slowly.

Notice how much weight Paul places on resurrection.

Do not read it as a side doctrine.

Read it as the Christian hope.

Ask:

Where is my hope actually resting?

In something naturally alive inside me,

or in Christ who raises the dead?

Prayer:

Lord,

Teach me to hope the way Scripture teaches.

Keep me from ideas that make resurrection less important.

Thank You that Christ has conquered death.

Thank You that immortality is Your gift.

Fix my hope on Jesus,

His return,

and the resurrection of the dead.

Amen.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    prayer: '',
  },
  'the-first-lie': {
    openingThought: `The first lie in Scripture was not complicated.

It was direct.

You will not surely die.

That sentence changed the world.

It challenged God's Word.

It questioned God's character.

It suggested that disobedience would not really bring death.

And it planted an idea that still shapes millions of minds today:

death is not really death.

Satan did not begin by denying religion.

He began by twisting truth.

He used a voice.

A question.

An appeal to desire.

An appeal to the senses.

And a promise of life apart from obedience.

The same strategy still works.

Because deception rarely begins by looking false.

It begins by making God's Word seem less final.`,
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
        reference: 'Genesis 3:6',
        quote: `So when the woman saw that the tree was good for food,

that it was pleasant to the eyes,

and a tree desirable to make one wise,

she took of its fruit and ate.`,
      },
      {
        type: 'paragraph' as const,
        text: `The first deception was a battle over the Word of God.`,
      },
    ],
    teachingPoints: [
      `• Satan began by questioning God's Word.
He did not start with open rebellion. He started with doubt.`,
      `• He misrepresented God's command.
The question made God seem restrictive and unreasonable.`,
      `• He denied the reality of death.
"You will not surely die" became the foundation of false views about death.`,
      `• He appealed to human senses and reasoning.
Eve saw, desired, reasoned, and acted against the clear Word.`,
      `• Deception often spreads through human influence.
After Eve was deceived, Adam followed her influence instead of God's command.`,
    ],
    wordStudy: {
      surface: 'surely die',
      lemma: 'מוֹת תָּמוּת',
      transliteration: 'mot tamut',
      meaning: 'dying you shall die, you shall surely die',
      strongs: 'H4191',
      reference: 'Genesis 2:17',
      note: `The Hebrew phrase intensifies the certainty of death. God was not warning Adam and Eve about a small consequence. He was declaring that sin would bring death.

Satan's first lie directly contradicted this.

God said,

You shall surely die.

The serpent said,

You will not surely die.

The conflict began over whether God's Word would be trusted.`,
    },
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching' as const,
      body: `The PDF identifies several methods Satan used in Eden.

He used a counterfeit miracle,

because serpents do not naturally speak.

He misquoted God's Word.

He led Eve into conversation with temptation.

He appealed to her senses.

He appealed to her desire for wisdom.

Then he used Eve to influence Adam.

The issue was not lack of information.

God had spoken clearly.

The issue was whether His Word would remain the final authority

when another voice sounded persuasive.

That same test continues.

Feelings may speak.

Culture may speak.

Experts may speak.

Religious voices may speak.

Experience may speak.

But the final question remains:

What has God said?`,
    },
    reflectPrompt: `Where are you most tempted to soften what God has clearly said?

Do you trust your senses more than Scripture?

Do you trust popular voices more than God's Word?

How has the lie,

"You will not surely die,"

shaped modern ideas about death?

Where do you need to return to a simple,

"It is written"?`,
    lifeApplication: `This week, practice testing voices.

When a thought,

teaching,

feeling,

or influence challenges Scripture,

pause.

Ask:

What has God said?

Is this adding to His Word?

Is this subtracting from His Word?

Is this making disobedience seem safe?

Then choose Scripture over impulse.

Prayer:

Lord,

Teach me to trust Your Word above every other voice.

Keep me from deception that sounds reasonable.

Help me recognize the first lie wherever it appears.

Give me courage to say,

It is written.

Let Your Word be final in my mind,

my choices,

and my worship.

Amen.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    prayer: '',
  },
  'spirits-of-devils': {
    openingThought: `The Bible does not treat spiritual deception lightly.

At the end of time,

Revelation shows unclean spirits going out to deceive the world.

They perform signs.

They gather kings.

They prepare the world for the final conflict.

This is why the truth about death matters.

If people believe the dead can speak,

appear,

guide,

warn,

or comfort the living,

then they are open to deception.

The enemy does not need people to reject spirituality.

He only needs them to trust the wrong source.

A miracle is not enough.

A feeling is not enough.

A voice is not enough.

A vision is not enough.

The final safeguard is the Word of God.

Not what appears real,

but what is written.`,
    scriptureRef: 'Revelation 16:13 to 14',
    scriptureQuote: `And I saw three unclean spirits like frogs

coming out of the mouth of the dragon,

out of the mouth of the beast,

and out of the mouth of the false prophet.

For they are spirits of demons,

performing signs,

which go out to the kings of the earth

and of the whole world,

to gather them to the battle of that great day of God Almighty.`,
    scriptureSecondaryRef: 'Matthew 24:23 to 25',
    scriptureSecondaryQuote: `Then if anyone says to you,

Look,

here is the Christ,

or,

There,

do not believe it.

For false christs and false prophets will rise

and show great signs and wonders

to deceive,

if possible,

even the elect.

See,

I have told you beforehand.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture' as const,
        reference: 'Isaiah 8:19 to 20',
        quote: `And when they say to you,

Seek those who are mediums and wizards,

who whisper and mutter,

should not a people seek their God?

Should they seek the dead on behalf of the living?

To the law and to the testimony.

If they do not speak according to this word,

it is because there is no light in them.`,
      },
      {
        type: 'paragraph' as const,
        text: `The test is not how convincing something feels.

The test is whether it agrees with the Word of God.`,
      },
    ],
    teachingPoints: [
      `• Spiritual deception will intensify before Christ returns.
Revelation shows demonic spirits performing signs and influencing the world.`,
      `• Miracles alone are not proof of truth.
Jesus warned that false christs and false prophets would show great signs and wonders.`,
      `• False views of death prepare people for deception.
If the dead are believed to be conscious and able to communicate, counterfeit appearances become more persuasive.`,
      `• Scripture forbids seeking the dead.
God's people are called to seek Him and test every message by His Word.`,
      `• The final safeguard is "It is written."
Feelings, senses, experts, voices, and miracles must all submit to Scripture.`,
    ],
    wordStudy: {
      surface: 'demons',
      lemma: 'δαιμόνια',
      transliteration: 'daimonia',
      meaning: 'demons, evil spirits',
      strongs: 'G1140',
      reference: 'Revelation 16:14',
      note: `Revelation says the spirits performing signs are daimonia, demons. The passage does not present them as departed human spirits. It identifies them as deceptive evil spirits working through signs to gather the world for final conflict.

That means supernatural activity can be real

and still be false.

The issue is not whether something has power.

The issue is whether it comes from God

and agrees with His Word.`,
    },
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching' as const,
      body: `The PDF closes by tying the end back to Eden.

At the beginning,

Satan used a counterfeit miracle,

a talking serpent.

He misquoted God's Word.

He appealed to reason,

senses,

desire,

and human influence.

At the end,

the pattern returns.

There will be signs.

There will be voices.

There will be persuasive experiences.

There will be religious claims.

There will be pressure to trust what appears undeniable.

But the protection remains the same.

God's objective Word.

Adam and Eve fell when they moved from what God said

to what seemed true.

The final generation must learn the opposite.

Even if the senses are overwhelmed,

even if miracles appear,

even if the world agrees,

the faithful stand on Scripture.`,
    },
    reflectPrompt: `Are you prepared to test spiritual experiences by Scripture?

Would you recognize deception if it came with emotion,

beauty,

miracles,

or religious language?

Have you treated supernatural experiences as automatically trustworthy?

What does Isaiah 8 mean for your spiritual life?

To the law and to the testimony.`,
    lifeApplication: `This week, strengthen your "It is written" foundation.

Choose one area where feelings or appearances tend to lead you.

Then bring it under Scripture.

Ask:

What does God's Word say?

Does this agree with the law and the testimony?

Does this lead to obedience,

truth,

and Christ?

Do not wait for the final crisis to learn discernment.

Practice it now.

Prayer:

Lord,

Protect me from deception.

Teach me to test every spirit,

every voice,

every sign,

and every claim by Your Word.

Keep me from trusting feelings more than Scripture.

Give me courage to stand on what is written.

Let my mind be clear,

my faith be steady,

and my hope be fixed on Christ.

Amen.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    prayer: '',
    seriesCompleteScreen: {
      title: 'Study complete',
      message: 'You have completed Death, Resurrection, and the Hope of Life.',
      primaryCta: { label: 'Review study', href: '/study-library/death-resurrection-hope-of-life' },
      secondaryCta: { label: 'Explore more advanced studies', href: '/study-library' },
    },
  },
}
