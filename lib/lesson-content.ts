/**
 * Rich lesson copy for the guided reader.
 * Production source of truth: `public.lessons.reader_content` (JSONB) loaded via catalog fetch.
 * This file is the fallback when the DB has no payload (local dev, legacy slugs).
 */
import { deathHopeSeriesLessonLibrary } from '@/lib/lesson-content-death-hope'
import { godIsLoveSeriesLessonLibrary } from '@/lib/lesson-content-god-is-love'
import { madeForMoreSeriesLessonLibrary } from '@/lib/lesson-content-made-for-more'
import { warInHeavenSeriesLessonLibrary } from '@/lib/lesson-content-war-in-heaven'
import { theGodWhoWantsToBeKnownSeriesLessonLibrary } from '@/lib/lesson-content-the-god-who-wants-to-be-known'
import { fallOfHumanitySeriesLessonLibrary } from '@/lib/lesson-content-fall-of-humanity'
import { thePromiseKeptSeriesLessonLibrary } from '@/lib/lesson-content-the-promise-kept'
import { theWayBackToGodSeriesLessonLibrary } from '@/lib/lesson-content-the-way-back-to-god'
import { whatHappensWhenWeDieSeriesLessonLibrary } from '@/lib/lesson-content-what-happens-when-we-die'
import { whenDeathDiedSeriesLessonLibrary } from '@/lib/lesson-content-when-death-died'
import { madeNewInChristSeriesLessonLibrary } from '@/lib/lesson-content-made-new-in-christ'
import { theLawOfLoveSeriesLessonLibrary } from '@/lib/lesson-content-the-law-of-love'
import { theRestGodGivesSeriesLessonLibrary } from '@/lib/lesson-content-the-rest-god-gives'
import { theLifeThatGivesSeriesLessonLibrary } from '@/lib/lesson-content-the-life-that-gives'
import { designedToThriveSeriesLessonLibrary } from '@/lib/lesson-content-designed-to-thrive'
import { buriedAndRaisedSeriesLessonLibrary } from '@/lib/lesson-content-buried-and-raised'
import { builtToBelongSeriesLessonLibrary } from '@/lib/lesson-content-built-to-belong'
import { powerUnderLoveSeriesLessonLibrary } from '@/lib/lesson-content-power-under-love'
import { faithfulInTheWildernessSeriesLessonLibrary } from '@/lib/lesson-content-faithful-in-the-wilderness'
import { theFaithfulWitnessSeriesLessonLibrary } from '@/lib/lesson-content-the-faithful-witness'
import { theDayOfAtonementSeriesLessonLibrary } from '@/lib/lesson-content-the-day-of-atonement'
import { theFirstAngelsMessageSeriesLessonLibrary } from '@/lib/lesson-content-the-first-angels-message'
import { theSecondAngelsMessageSeriesLessonLibrary } from '@/lib/lesson-content-the-second-angels-message'
import { theThirdAngelsMessageSeriesLessonLibrary } from '@/lib/lesson-content-the-third-angels-message'
import { theSecondComingSeriesLessonLibrary } from '@/lib/lesson-content-the-second-coming'
import { theMillenniumSeriesLessonLibrary } from '@/lib/lesson-content-the-millennium'
import { theEndOfEvilSeriesLessonLibrary } from '@/lib/lesson-content-the-end-of-evil'
import { theWorldLoveRestoresSeriesLessonLibrary } from '@/lib/lesson-content-the-world-love-restores'
import { whenHeavenBrokeOriginOfEvilSeriesLessonLibrary } from '@/lib/lesson-content-when-heaven-broke-origin-of-evil'
import { whyDoesGodAllowSufferingSeriesLessonLibrary } from '@/lib/lesson-content-why-does-god-allow-suffering'
import { enrichLessonLibrary } from '@/lib/enrich-lesson-scripture-threads'
import type { LessonContentBlock } from '@/lib/lesson-content-blocks'
import type { LessonQuizPayload, LessonQuizQuestion } from '@/lib/lesson-quiz-types'

/** Clickable Greek/Hebrew “word insight” (popover). */
export interface WordInsight {
  surface: string
  lemma: string
  transliteration: string
  meaning: string
  strongs?: string
  note: string
  /** Optional 1–2 sentence bridge shown in the popover. */
  explanation?: string
  /** e.g. Greek, Hebrew (optional; inferred from Strong’s when omitted). */
  language?: string
  /** Optional context line on the full Word Insight card. */
  reference?: string
}

/** Study Insight card subtype (uppercase label in UI). */
export type StudyInsightVariant =
  | 'prophecy_lens'
  | 'word_insight'
  | 'historical_context'
  | 'scripture_connection'
  | 'doctrine_clarity'
  | 'christ_connection'

export const STUDY_INSIGHT_VARIANT_LABELS: Record<StudyInsightVariant, string> = {
  prophecy_lens: 'Prophecy Lens',
  word_insight: 'Word Insight',
  historical_context: 'Historical Context',
  scripture_connection: 'Scripture Connection',
  doctrine_clarity: 'Doctrine Clarity',
  christ_connection: 'Christ Connection',
}

/** Shown when the learner finishes the final lesson in a series (`nextLesson` is null). */
export interface SeriesCompleteScreenCopy {
  title: string
  message: string
  primaryCta: { label: string; href: string }
  secondaryCta: { label: string; href: string }
}

export interface LessonReaderContent {
  openingThought: string
  scriptureRef: string
  scriptureQuote: string
  /** Optional second passage on the same step (e.g. supporting verse). */
  scriptureSecondaryRef?: string
  scriptureSecondaryQuote?: string
  /** Prose after the primary blockquote (before secondary passage, when present). */
  scriptureAfterPrimary?: string
  /** Optional emphasized phrases inside `scriptureAfterPrimary`. */
  scriptureAfterPrimaryEmphasisPhrases?: string[]
  /** Prose after the secondary blockquote. */
  scriptureAfterSecondary?: string
  /** Optional emphasized phrases inside `scriptureAfterSecondary`. */
  scriptureAfterSecondaryEmphasisPhrases?: string[]
  teachingPoints: string[]
  /**
   * Legacy: one surface + full word-study step after teaching when `wordStudyFullStep` is not false.
   * Prefer `scriptureWordInsights` for scripture-only taps without a full step.
   */
  wordStudy?: {
    surface: string
    lemma: string
    transliteration: string
    meaning: string
    strongs: string
    note: string
    /** Shown on the Word Insight card (e.g. key verse). */
    reference?: string
  }
  /**
   * Multiple Word Insight cards on the Word Insight step. When set, this list drives that step
   * (instead of a single `wordStudy` card). `wordStudy` may still be used for scripture tappables.
   */
  wordStudyInsights?: WordInsight[]
  /**
   * When true with a full word-study step and `studyInsight` after teaching,
   * the word study screen comes before the Study Insight screen.
   */
  wordStudyBeforeStudyInsight?: boolean
  /** Overrides default “Word study” step heading. */
  wordStudyStepTitle?: string
  /** Overrides default intro paragraph above the Word Insight card (use "" to omit). */
  wordStudyStepIntro?: string
  /** Overrides default “Life Application” step heading. */
  lifeApplicationStepTitle?: string
  /** Overrides default “Opening Thought” step heading (e.g. Deeper Studies “The Objection”). */
  openingThoughtStepTitle?: string
  /** Overrides default “Scripture” step heading (e.g. Deeper Studies “Scripture Trail”). */
  scriptureStepTitle?: string
  /** Overrides default “Teaching Points” step heading (e.g. Deeper Studies “The Answer”). */
  teachingPointsStepTitle?: string
  /** Overrides default “Reflect” step heading (e.g. Deeper Studies “Heart Check”). */
  reflectStepTitle?: string
  /** Deeper Studies: tension card after The Objection (before Scripture Trail). */
  coreClaim?: string
  /** Overrides default “The Tension” step heading. */
  tensionStepTitle?: string
  /** Deeper Studies: what the answer reveals about God (after The Answer). */
  godsCharacter?: string
  /** Overrides default “God's Character” step heading. */
  godsCharacterStepTitle?: string
  /** Deeper Studies sidebar: compact tension line under lesson title. */
  keyTension?: string
  /** Deeper Studies: helper above Scripture Thread on the Scripture Trail step. */
  scriptureTrailHelper?: string
  /** Deeper Studies: summary after Scripture Thread (defaults to “What this trail shows:”). */
  scriptureTrailSummaryTitle?: string
  scriptureTrailSummary?: string
  /** Deeper Studies: Heart Check textarea placeholder. */
  reflectPlaceholder?: string
  /** Deeper Studies: Practice callout title (e.g. “Practice for 24 hours”). */
  practiceCalloutTitle?: string
  /** When false, skip the dedicated Word study screen (still use `wordStudy` for scripture highlight if no `scriptureWordInsights`). */
  wordStudyFullStep?: boolean
  /** Tappable words in the primary scripture quote (all occurrences of each `surface`). */
  scriptureWordInsights?: WordInsight[]
  /** Tappable substrings in a teaching bullet (by index). */
  teachingWordInsights?: { pointIndex: number; insights: WordInsight[] }[]
  /** Short contextual card; placement defaults to after teaching. */
  studyInsight?: {
    title?: string
    body: string
    placement?: 'after_scripture' | 'after_teaching'
    variant?: StudyInsightVariant
  }
  /** Optional verse chain on the Scripture step (e.g. cross-refs). */
  scriptureChain?: { reference: string }[]
  /** Optional study blocks below the scripture block on the Scripture step (Word Insight, chains, etc.). */
  scriptureSupplementBlocks?: LessonContentBlock[]
  /** Optional structured blocks rendered after Teaching Points on that step (e.g. `studyVisual`). */
  afterTeachingBlocks?: LessonContentBlock[]
  /** Optional structured blocks rendered after the Study Insight card on that step (when `studyInsight` is set). */
  studyInsightBlocks?: LessonContentBlock[]
  reflectPrompt: string
  lifeApplication: string
  prayer: string
  /** Shown on the completion card under “Lesson complete”. */
  completionSummary?: string
  /** Forward-looking question before the next-lesson preview. */
  forwardQuestion?: string
  /** Overrides the default “series complete” card and CTAs on the last lesson. */
  seriesCompleteScreen?: SeriesCompleteScreenCopy
  /** Optional quick review after Life Application (and Prayer when present). See `buildLessonSteps`. */
  lessonQuiz?: LessonQuizPayload
}

export function wordStudyToInsight(ws: NonNullable<LessonReaderContent['wordStudy']>): WordInsight {
  return {
    surface: ws.surface,
    lemma: ws.lemma,
    transliteration: ws.transliteration,
    meaning: ws.meaning,
    strongs: ws.strongs,
    note: ws.note,
    ...(ws.reference?.trim() ? { reference: ws.reference.trim() } : {}),
  }
}

const libraryRaw: Record<string, LessonReaderContent> = {
  'a-book-unlike-any-other': {
    openingThought: `The Bible is one of the most read books in the world.

Many people own one.
Some read it often.
Others have tried and stopped.

But very few pause to ask a simple question.

What actually makes this book different?

It was written across centuries.
By different people.
In different places.

And yet it speaks with a sense of unity.

That raises a real question.

How can one book, written by many authors, carry one consistent message?`,
    scriptureRef: 'John 1:1 (ESV)',
    scriptureQuote: 'In the beginning was the Word, and the Word was with God, and the Word was God.',
    scriptureAfterPrimary: `That word "Word" carries deeper meaning.

In the original Greek, it is the word logos.

It does not just mean speech or text.

It points to reason, meaning, and expression.

Something that communicates what is unseen.

John is not simply saying words exist.

He is saying that from the beginning, God has made Himself known.

And that expression is not just written.

It is personal.`,
    scriptureAfterPrimaryEmphasisPhrases: ['logos'],
    scriptureWordInsights: [
      {
        surface: 'Word',
        lemma: 'λόγος',
        transliteration: 'logos',
        meaning: 'Reason, meaning, and expression.',
        strongs: 'G3056',
        note: 'John uses logos to show God making Himself known in a personal way.',
      },
    ],
    teachingPoints: [
      `The Bible was written over a long period of time.
Yet its message remains connected from beginning to end.`,
      `It includes different types of writing.
History, poetry, prophecy, and personal letters.`,
      `Even with different authors, the direction stays consistent.
It continues to point toward God and His work.`,
      `This raises an important question.
Is this just a collection of writings, or something more?`,
    ],
    studyInsight: {
      placement: 'after_teaching',
      body: `Most books are written by one person with one perspective.

The Bible is different.

It was written by many people who lived in different times and places.

They did not all know each other.

Yet when their writings are brought together, they form a connected message.

This kind of unity is not common.

It invites a deeper look.`,
    },
    reflectPrompt: `Think about your own experience.

When you look at the Bible,

what do you see?

A book of rules?
A historical record?
Something confusing?

Or something worth understanding?

What has shaped the way you see it?`,
    lifeApplication: `This week, take a simple step.

Choose a short passage to read.

Do not rush it.

Read slowly.

Pay attention to what stands out.

You do not need to understand everything right away.

Just begin.`,
    prayer: `Lord,

Thank You for giving us Your Word.

Help me approach it with an open mind.

Give me a desire to understand it,

and patience as I begin.

Teach me as I read,

and guide me into what is true.

Amen.`,
  },
  'how-the-bible-came-to-us': {
    openingThought: `When you hold a Bible in your hands, it's easy to assume it just appeared.

A finished book.
Bound pages.
Complete.

But that's not how it began.

Before it was printed
before it was translated
before it was even collected

It was written.

Across generations.
Through real people.
In real moments of history.

So the question is honest:

Where did these words actually come from?

Are they simply human thoughts about God?

Or something more?`,
    scriptureRef: '2 Timothy 3:16 (ESV)',
    scriptureQuote:
      'All Scripture is breathed out by God and profitable for teaching, for reproof, for correction, and for training in righteousness.',
    scriptureSecondaryRef: '2 Peter 1:21 (ESV)',
    scriptureSecondaryQuote:
      'For no prophecy was ever produced by the will of man, but men spoke from God as they were carried along by the Holy Spirit.',
    scriptureAfterPrimary: `That phrase matters:

"Breathed out by God."

The original word means something that comes directly from God Himself.

Not invented.
Not guessed.

Given.`,
    scriptureAfterPrimaryEmphasisPhrases: ['Breathed out by God.'],
    scriptureAfterSecondary: `Notice the balance:

Men spoke.
But they were guided.

Moved.
Carried.

Not controlled like machines
but not left on their own either.

God was actively leading.`,
    teachingPoints: [
      `The Bible was written through real people.
Their language, their personality, their experience. God used all of it.`,
      `This was not random inspiration or personal opinion.
God guided the message while working through human writers.`,
      `Different voices, same direction.
Across time, the message stays aligned and consistent.`,
      `Because of its source, Scripture carries authority.
Not just helpful words, but reliable truth.`,
    ],
    studyInsight: {
      placement: 'after_teaching',
      body: `The Bible did not just survive history. It was preserved through it.

Today, there are thousands of ancient copies of biblical manuscripts.

Not just one version.
Not just one source.

Many.

And when they are compared, the message stays consistent.

Even discoveries like the Dead Sea Scrolls, written over 2,000 years ago, show that what we read today closely matches what was written long ago.

That matters.

It means the Bible has not been quietly changed over time.

It has been carefully passed down.

Preserved.

Protected.`,
    },
    reflectPrompt: `If these words were not just written by people
but guided by God

What does that mean for how you read them?

Do you approach the Bible like any other book?

Or with expectation?

What would change if you truly believed
God is speaking through it?`,
    lifeApplication: `This week, shift your approach.

Before you read, pause.

Slow down.

Instead of rushing through a passage, read with intention.

Not just to understand words
but to hear what is being said.

Ask yourself:

"What is God showing me here?"

Then take your time.`,
    prayer: `Lord,

Thank You for not leaving us without direction.

Thank You for speaking through Your Word.

Help me trust what You have given
even when I do not fully understand it yet.

Open my mind.
Soften my heart.

Teach me to read with attention
and to receive what You are saying.

Amen.`,
  },
  'can-the-bible-be-trusted': {
    openingThought: `We trust many things without thinking twice.

A map.
A memory.
A message from someone we know.

But when it comes to the Bible, the question often changes.

Can this really be trusted?

Not just spiritually, but historically.

After all, it was written long ago.
Copied by hand.
Passed down through generations.

So it is fair to ask:

Has it changed?
Has it been altered?
Or has it truly been preserved?`,
    scriptureRef: 'Isaiah 40:8 (ESV)',
    scriptureQuote: 'The grass withers, the flower fades, but the word of our God will stand forever.',
    scriptureSecondaryRef: 'Psalm 119:160 (ESV)',
    scriptureSecondaryQuote: 'The sum of your word is truth, and every one of your righteous rules endures forever.',
    scriptureAfterSecondary: `Jesus Himself spoke with confidence about Scripture:

Matthew 5:18 (ESV)
"Until heaven and earth pass away, not an iota, not a dot, will pass from the Law until all is accomplished."

Scripture does not present itself as fragile.

It presents itself as enduring.

Not temporary.
But lasting.`,
    teachingPoints: [
      `The Bible was not preserved by accident.
It was copied with care, often by trained scribes who treated the text as sacred.`,
      `Today, we have thousands of ancient manuscripts of the Bible.
Far more than any other ancient work.`,
      `When these manuscripts are compared, they show strong consistency.
Not confusion, but alignment.`,
      `This does not remove every question.
But it builds real confidence that what we read reflects what was written.`,
    ],
    studyInsight: {
      placement: 'after_teaching',
      body: `In 1947, a discovery was made in caves near the Dead Sea.

Ancient scrolls were found, some over 2,000 years old.

Among them was a copy of the book of Isaiah.

When it was compared with later manuscripts, something stood out.

The message had not changed.

Across centuries of copying, the text remained remarkably consistent.

Not perfect in every small detail of handwriting.

But faithful in meaning.

The same message.
The same truth.
Preserved through time.`,
    },
    reflectPrompt: `If the Bible has been preserved this carefully,

then the question becomes more personal.

Not just
Has it changed?

But
Am I willing to trust what it says?

Be honest with yourself.

Do you approach Scripture with confidence,
or with quiet hesitation?

What would change if you truly believed
these words have been preserved for you?`,
    lifeApplication: `This week, take a different approach.

Instead of reading casually,
read with intention.

Choose one passage.

Read it slowly.

Sit with it.

And ask yourself:

If this has been faithfully preserved,
what is it asking of me?

Do not rush past the question.`,
    prayer: `Lord,

You have preserved Your Word through time.

Through generations, through history, through human hands,
You have kept Your message.

Help me not to stand at a distance in doubt,

but to come closer with trust.

Give me confidence in what You have spoken,

and a heart willing to receive it.

Amen.`,
  },
  'how-to-read-the-bible': {
    openingThought: `Most people don't struggle because they don't have a Bible.

They struggle because they don't know how to read it.

Where do you start?
What does it mean?
What if you don't understand it?

So reading becomes inconsistent.
Or it stops altogether.

But the Bible was never meant to feel distant or confusing.

It was given to be understood.

Not all at once.
Not perfectly.

But personally.`,
    scriptureRef: 'Psalm 119:105 (ESV)',
    scriptureQuote: 'Your word is a lamp to my feet and a light to my path.',
    scriptureSecondaryRef: 'James 1:5 (ESV)',
    scriptureSecondaryQuote: 'If any of you lacks wisdom, let him ask God… and it will be given him.',
    scriptureAfterSecondary: `2 Timothy 2:15 (ESV)
"Do your best to present yourself to God… rightly handling the word of truth."

The Bible is not meant to overwhelm you.

It is meant to guide you.

Step by step.

Like a lamp.

Not lighting everything at once,

but giving enough light for what is in front of you.`,
    teachingPoints: [
      `Start with a posture, not just a plan.
Come willing to listen, not just analyze.`,
      `Let Scripture explain Scripture.
The Bible connects with itself. One passage often brings clarity to another.`,
      `Look for what it reveals about God.
Even when you do not understand everything, you can understand who He is.`,
      `Do not rush the process.
Understanding grows over time.`,
    ],
    studyInsight: {
      placement: 'after_teaching',
      body: `The Bible was written in real moments of history.

Different people.
Different settings.
Different situations.

So context matters.

Who is speaking?
Who are they speaking to?
What is happening?

These questions do not make Scripture harder.

They make it clearer.

The Bible is not random.

It is connected.

When you read it patiently, that connection begins to unfold.`,
    },
    reflectPrompt: `Be honest for a moment.

When you read the Bible,

do you rush through it?
Do you avoid the parts you do not understand?
Do you expect instant clarity?

Or are you willing to slow down

and let it unfold?

What might change if you approached Scripture

less like a task

and more like a conversation?`,
    lifeApplication: `Try this simple rhythm this week.

Choose one short passage.

Before you read, pause.

Ask:

"God, what are You showing me about Yourself?"

Read slowly.

If something stands out, stay there.

Think about it.
Write it down if needed.

Let it settle.

You do not need to read more.

You need to see more in what you read.`,
    prayer: `Lord,

Teach me how to read Your Word.

Not quickly, not carelessly,

but with attention.

Give me understanding where I lack it,

and patience where I rush.

Help me to hear You clearly,

and to recognize Your voice in what I read.

Form in me a desire not just to learn,

but to know You.

Amen.`,
  },
  'the-bibles-central-theme': {
    openingThought: `It is possible to read the Bible and still miss what it is about.

You can follow the stories.
Learn the commands.
Understand the history.

And still feel like something is missing.

Because the Bible is not just a collection of ideas.

It is one unified story.

And at the center of that story is a Person.

If you miss Him, you may understand parts of Scripture,

but not its meaning.`,
    scriptureRef: 'Luke 24:27 (ESV)',
    scriptureQuote:
      'And beginning with Moses and all the Prophets, he interpreted to them in all the Scriptures the things concerning himself.',
    scriptureSecondaryRef: 'John 5:39 (ESV)',
    scriptureSecondaryQuote: 'You search the Scriptures… and it is they that bear witness about me.',
    scriptureAfterSecondary: `After His resurrection, Jesus did something important.

He walked through the Scriptures

and showed that they were pointing to Him.

Not just a few passages.

Not isolated moments.

But a consistent direction.

Toward Christ.`,
    teachingPoints: [
      `The Bible tells one unfolding story.
A story of God restoring what was broken.`,
      `Jesus is not introduced halfway through.
He is present from the beginning, promised and revealed over time.`,
      `Every part of Scripture finds meaning in Him.
Law, prophecy, sacrifice, and promise all point beyond themselves.`,
      `Without Christ, the Bible can feel like separate pieces.
With Him, it becomes one clear message.`,
    ],
    studyInsight: {
      placement: 'after_teaching',
      body: `From the beginning, Scripture has been moving in one direction.

A promise given.
A problem revealed.
A solution unfolding.

What seems hidden early becomes clearer later.

What is introduced in one place is fulfilled in another.

Different books.
Different writers.

But one message.

God revealing Himself and making a way to restore what was lost.

When you read the Bible this way, it begins to connect.

Not as separate parts,

but as one story moving toward fulfillment.`,
    },
    reflectPrompt: `When you read the Bible,

what are you actually looking for?

Rules?
Answers?
Understanding?

Or are you looking for Christ?

Be honest.

Have you been reading Scripture

without expecting to find Him there?

What might change if every passage became an invitation

to know Him more clearly?`,
    lifeApplication: `The next time you read the Bible, try this.

Do not just ask,
"What does this mean?"

Also ask,

"How does this point me to Jesus?"

You may not always see it right away.

That is okay.

Stay with the question.

Over time, you will begin to notice something.

The Bible is not leading you in many directions.

It is leading you to one.`,
    prayer: `Lord,

Open my eyes to see what I have missed.

Not just words on a page,

but the One those words reveal.

Teach me to read Scripture in a way that leads me to You.

Let me not settle for information

when You are offering relationship.

Reveal Yourself to me more clearly,

and draw me closer as I read.

Amen.`,
  },
  'the-bible-as-a-living-word': {
    openingThought: `It is possible to read the Bible and remain unchanged.

To understand it.
To think about it.
Even to agree with it.

And still nothing shifts.

But the Bible was never meant to be only read.

It was meant to be received.

Because Scripture is not just information.

It is alive.

And living things do not leave us the same.`,
    scriptureRef: 'Hebrews 4:12 (ESV)',
    scriptureQuote: 'For the word of God is living and active, sharper than any two-edged sword...',
    scriptureSecondaryRef: 'John 6:63 (ESV)',
    scriptureSecondaryQuote: 'The words that I have spoken to you are spirit and life.',
    scriptureAfterSecondary: `Isaiah 55:11 (ESV)
"My word... shall not return to me empty, but it shall accomplish that which I purpose."

The Bible does not describe itself as passive.

It speaks.
It works.
It accomplishes something.

Not just around us,

but within us.`,
    teachingPoints: [
      `The Bible does more than inform.
It transforms.`,
      `Change does not come from reading quickly, but from receiving deeply.
The difference is not exposure, it is openness.`,
      `God works through His Word.
It is one of the ways He reaches us personally.`,
      `Transformation is often quiet before it is visible.
What begins within will shape how you live.`,
    ],
    studyInsight: {
      placement: 'after_teaching',
      body: `Jesus often described truth using things that grow.

Seeds.
Light.
Water.

Something small, carrying life within it.

When a seed is planted, nothing seems to happen at first.

But beneath the surface, something begins.

Not forced.
Not rushed.

Alive.

In the same way, Scripture works in us.

Slowly.
Quietly.
Deeply.

It does not only inform.

It changes.`,
    },
    reflectPrompt: `When you read the Bible,

what are you expecting?

Insight?
Clarity?
Answers?

Or change?

Be honest.

Have you been reading without expecting it to affect you?

What would happen if you approached Scripture

believing it could actually reshape your thoughts, your habits, your direction?`,
    lifeApplication: `This week, shift your approach.

Before you read, pause and ask:

"What in me needs to change?"

Then read a short passage.

When something stands out, stay there.

Do not move past it quickly.

Let it challenge you.
Let it correct you.
Let it encourage you.

Then choose one small response.

A decision.
A change in attitude.
An action.

The Word becomes alive in you

when it is lived, not just read.`,
    prayer: `Lord,

Let Your Word do more than pass through my mind.

Let it reach deeper.

Where I need correction, show me.
Where I need change, lead me.
Where I resist, soften me.

Plant Your truth in me,

and bring forth something new in my life.

Amen.`,
  },
  'your-response': {
    openingThought: `You have taken time to read.
To think.
To reflect.

You have seen what the Bible is.
Where it came from.
Why it can be trusted.
How to read it.
Who it reveals.
And what it does.

Now the question changes.

It is no longer
"What is the Bible?"

It becomes:

"What will I do with it?"

Because at some point, understanding is not enough.

A response is required.`,
    scriptureRef: 'James 1:22 (ESV)',
    scriptureQuote: 'But be doers of the word, and not hearers only, deceiving yourselves.',
    scriptureSecondaryRef: 'Joshua 1:8 (ESV)',
    scriptureSecondaryQuote:
      'This Book of the Law shall not depart from your mouth, but you shall meditate on it day and night...',
    scriptureAfterSecondary: `Luke 11:28 (ESV)
"Blessed rather are those who hear the word of God and keep it."

The Bible does not call for passive agreement.

It calls for response.

Not just hearing,

but living.`,
    teachingPoints: [
      `Understanding Scripture is only the beginning.
Its purpose is to guide your life.`,
      `Growth happens when truth is acted on.
Even small steps begin to shape your direction.`,
      `Delay feels small, but it slowly weakens response.
What is clear today should not be ignored.`,
      `God does not force change.
He invites it, and the invitation is meant to be answered.`,
    ],
    studyInsight: {
      placement: 'after_teaching',
      body: `Throughout Scripture, people who encountered truth were brought to a decision.

Not pressure.

Clarity.

Some responded.
Some hesitated.
Some walked away.

The difference was not what they heard.

It was what they chose to do with it.

Truth carries weight.

And with it,

responsibility.`,
    },
    reflectPrompt: `Take a moment and be honest.

What has stood out to you most through these studies?

Not everything.

Just one thing.

Now ask yourself:

Have I responded to it?

Or have I simply noticed it and moved on?

What is one step you already know you should take,

but have not taken yet?`,
    lifeApplication: `Do not overcomplicate this.

Start simple, but be clear.

Choose one response.

Set a consistent time to read.
Act on something you have learned.
Return to a passage and apply it.
Slow down and listen instead of rushing.

Write it down.

Make it specific.

Then follow through.

Real change begins when you act on what you already know.`,
    prayer: `Lord,

Thank You for speaking through Your Word.

Not just to inform me,

but to lead me.

Show me clearly what my response should be.

Give me the willingness not just to hear,

but to act.

Help me take what I have learned

and live it out, one step at a time.

Amen.`,
  },
  'why-revelation-14-matters': {
    openingThought: `The world does not feel stable.

Nations rise and fall.
Economies shake.
Disasters come without warning.
Fear spreads quickly.
Truth feels harder to recognize.

Many people can sense that something is wrong.

But they do not know where history is going.

Revelation 14 speaks directly into that moment.

It is not given to satisfy curiosity.

It is given to prepare a people.

Before the final harvest of the earth, God sends one last message to the world.

A message of gospel.
A message of worship.
A message of warning.
A message of decision.

The question is not whether Revelation 14 matters.

The question is whether we are listening.`,
    scriptureRef: 'Revelation 14:6 to 7',
    scriptureQuote: `"And I saw another angel fly in the midst of heaven, having the everlasting gospel to preach unto them that dwell on the earth,

and to every nation, and kindred, and tongue, and people,

Saying with a loud voice,

Fear God, and give glory to him;

for the hour of his judgment is come:

and worship him that made heaven, and earth, and the sea, and the fountains of waters."`,
    scriptureAfterPrimary: `Revelation 14 begins with a message moving across the whole world.

It is not quiet.

It is not local.

It is not optional.

It is global, urgent, and centered on worship.`,
    teachingPoints: [
      `The three angels represent God's final message to the world.
The word angel means messenger, and in Scripture God often uses human beings to carry His message.`,
      `The message comes from heaven.
The angels are seen flying in the midst of heaven because the message does not originate from human wisdom.`,
      `The message is given with a loud voice.
This means it carries power, urgency, and authority.`,
      `The message goes to every nation, kindred, tongue, and people.
No group is excluded. This is a worldwide call.`,
      `The message comes before the final harvest.
Revelation 14 shows Christ returning after these messages are proclaimed.`,
    ],
    studyInsight: {
      placement: 'after_teaching',
      title: 'Study Insight',
      body: `Revelation 14 is not random.

The messages come in order.

First, the everlasting gospel is proclaimed.

Then Babylon's fall is announced.

Then the warning against the beast, his image, and his mark is given.

That order matters.

You cannot understand the warning if you skip the gospel.

You cannot understand Babylon's fall if you do not know what truth she rejected.

God's final message does not begin with fear.

It begins with the everlasting gospel.

Before God warns the world,

He offers salvation.`,
    },
    reflectPrompt: `When you think about prophecy,

what do you usually feel?

Fear?
Confusion?
Curiosity?
Avoidance?

What if prophecy was not given to scare you,

but to prepare you?

What would change if you saw Revelation 14

as a message of mercy before it is a message of warning?`,
    lifeApplication: `This week, read Revelation 14:6 to 12 slowly.

Do not try to understand every symbol yet.

Just notice the flow.

Look for what God is emphasizing.

Ask yourself:

What is God calling the world to see?

What is God calling me to take seriously?

Let the message become personal before it becomes technical.`,
    prayer: `Lord,

Help me approach prophecy with humility.

Not with fear.

Not with pride.

Not with argument.

Open my heart to understand Your final message.

Show me the gospel at the center of Revelation.

Teach me to listen,

and prepare me to respond.

Amen.`,
  },
  'the-everlasting-gospel': {
    openingThought: `Revelation 14 does not begin with the beast.

It does not begin with the mark.

It does not begin with fear.

It begins with the gospel.

That matters.

Before God warns the world,

He reminds the world of good news.

The final message to humanity is not merely about crisis.

It is about Christ.

It is about a plan that did not begin after sin entered the world.

It reaches back before Eden.

Before failure.

Before shame.

Before the first sacrifice.

The gospel is called everlasting because it was not an emergency plan.

It was God's plan to save before humanity knew it needed saving.`,
    scriptureRef: 'Revelation 14:6',
    scriptureQuote: `"And I saw another angel fly in the midst of heaven, having the everlasting gospel to preach unto them that dwell on the earth."`,
    scriptureSecondaryRef: '1 Peter 1:18 to 20',
    scriptureSecondaryQuote: `"Forasmuch as ye know that ye were not redeemed with corruptible things, as silver and gold,

but with the precious blood of Christ, as of a lamb without blemish and without spot:

Who verily was foreordained before the foundation of the world."`,
    scriptureAfterSecondary: `Romans 6:23

"For the wages of sin is death;

but the gift of God is eternal life through Jesus Christ our Lord."

The gospel is not temporary.

It is not shallow.

It is not merely religious advice.

It is the announcement that Christ has done for us what we could never do for ourselves.`,
    teachingPoints: [
      `The everlasting gospel began before the foundation of the world.
God was not surprised by sin. The plan of salvation was already in place.`,
      `Sin brings death, but Christ brings life.
The law reveals the seriousness of sin, but the gospel reveals the mercy of God.`,
      `The sacrifices in the Old Testament pointed forward to Jesus.
The lambs could not remove sin by themselves. They pointed to the true Lamb.`,
      `Jesus is both the perfect Priest and the perfect Sacrifice.
He lived the life we failed to live and died the death sin demanded.`,
      `The gospel must be received personally.
A gift can be purchased, offered, and placed before someone, but it must still be accepted.`,
    ],
    studyInsight: {
      placement: 'after_teaching',
      title: 'Study Insight',
      body: `The gospel is not only forgiveness.

It is restoration.

When Adam and Eve sinned, they tried to cover themselves.

But human effort could not fix what sin had broken.

God provided the covering.

That picture matters.

The gospel is not humanity reaching high enough to reach God.

It is God coming low enough to reach humanity.

Christ covers our guilt.

Christ restores our standing.

Christ begins changing the life.

The everlasting gospel is not only about being forgiven for the past.

It is about being remade for the future.`,
    },
    reflectPrompt: `When you think of the gospel,

do you mostly think of pardon,

or transformation?

Do you see salvation as something Christ gives,

or something you are still trying to earn?

What would change if you truly believed

that Jesus has already provided what you cannot produce?`,
    lifeApplication: `This week, read Romans 6:23 slowly.

Pause over both sides of the verse.

The wages of sin.

The gift of God.

Do not rush past either one.

Then ask yourself:

Am I trying to cover myself,

or am I receiving what Christ has provided?

Let that question search your heart honestly.`,
    prayer: `Lord,

Thank You for the everlasting gospel.

Thank You that salvation was not an afterthought.

Thank You for Christ,

the Lamb without blemish,

the One who lived for me,

died for me,

and now lives to save completely.

Help me stop trusting in my own covering.

Teach me to receive Your gift fully,

and let that gift change my life.

Amen.`,
  },
  'what-it-means-to-fear-god': {
    openingThought: `When people hear the phrase "fear God," they often think it means to be afraid of Him.

To hide.

To shrink back.

To expect punishment.

But that is not how Scripture uses the phrase at its deepest level.

To fear God is to recognize who He is.

Creator.
Judge.
Father.
Redeemer.
King.

It means awe.

Reverence.

Trust.

Obedience.

Not terror that drives us away,

but holy respect that draws us near.

The first command in the three angels' messages is not asking us to panic.

It is calling us to live before God with our eyes open.`,
    scriptureRef: 'Revelation 14:7',
    scriptureQuote: `"Saying with a loud voice,

Fear God, and give glory to him;

for the hour of his judgment is come."`,
    scriptureSecondaryRef: 'Proverbs 9:10',
    scriptureSecondaryQuote: `"The fear of the Lord is the beginning of wisdom:

and the knowledge of the holy is understanding."`,
    scriptureAfterSecondary: `Ecclesiastes 12:13

"Let us hear the conclusion of the whole matter:

Fear God, and keep his commandments:

for this is the whole duty of man."

The fear of God is not spiritual panic.

It is the beginning of wisdom.

It teaches us to see life clearly.`,
    teachingPoints: [
      `To fear God means to reverence Him.
It is awe before His greatness, holiness, and mercy.`,
      `The fear of God is connected to wisdom.
A person cannot live wisely while ignoring the One who made them.`,
      `The fear of God leads to obedience.
In Scripture, reverence is never just an emotion. It shapes the life.`,
      `The fear of God also affects worship.
We do not come before God casually, proudly, or carelessly.`,
      `The fear of God changes how we treat people.
Those who reverence God learn to honor the weak, the poor, and the vulnerable.`,
    ],
    studyInsight: {
      placement: 'after_teaching',
      title: 'Study Insight',
      body: `The fear of God holds two truths together.

God is high and holy.

And God is near.

If we only see His holiness, we may become afraid.

If we only see His nearness, we may become casual.

Scripture gives us both.

The God who fills heaven also listens to the humble.

The God who judges also saves.

The God who commands also gives mercy.

To fear God is to live with that awareness.

He is not to be handled lightly.

And He is not to be avoided.

He is to be trusted, honored, and obeyed.`,
    },
    reflectPrompt: `How do you usually think about God?

Distant?
Strict?
Casual?
Near?

Does your view of God produce reverence,

or indifference?

If someone looked at your choices,

would they see that God carries weight in your life?`,
    lifeApplication: `This week, choose one area of your life and bring it under the fear of God.

Your speech.
Your worship.
Your habits.
Your private thoughts.
Your treatment of others.

Ask one simple question:

Does this show reverence for God?

Do not answer quickly.

Let the question do its work.`,
    prayer: `Lord,

Teach me what it means to fear You.

Not to run from You,

but to honor You.

Give me reverence without terror,

nearness without casualness,

obedience without pride.

Let my life show that You are holy,

merciful,

and worthy of my trust.

Amen.`,
  },
  'how-to-glorify-god': {
    openingThought: `The first angel's message does not only say,

Fear God.

It also says,

Give glory to Him.

That sounds simple until we ask what it means.

Is glory only praise?

Is it only worship music?

Is it only something we say with our lips?

Scripture gives a deeper answer.

To glorify God is to reveal what He is like.

In our worship.

In our character.

In our choices.

In our bodies.

In the way we treat people.

God's glory is not meant to stay hidden in heaven.

It is meant to be reflected on earth through a surrendered life.`,
    scriptureRef: 'Revelation 14:7',
    scriptureQuote: `"Saying with a loud voice,

Fear God, and give glory to him;

for the hour of his judgment is come."`,
    scriptureSecondaryRef: 'Matthew 5:16',
    scriptureSecondaryQuote: `"Let your light so shine before men,

that they may see your good works,

and glorify your Father which is in heaven."`,
    scriptureAfterSecondary: `1 Corinthians 6:19 to 20

"Do you not know that your body is the temple of the Holy Spirit who is in you,

whom you have from God,

and you are not your own?

For you were bought at a price;

therefore glorify God in your body and in your spirit,

which are God's."

1 Corinthians 10:31

"Therefore, whether you eat or drink,

or whatever you do,

do all to the glory of God."

To give God glory is not only to speak well of Him.

It is to live in a way that points back to Him.`,
    teachingPoints: [
      `God is glorified when His character is reflected.
When mercy, purity, justice, humility, and love are seen in His people, His name is honored.`,
      `God is glorified through good works.
Not works that save us, but works that reveal the One who is changing us.`,
      `God is glorified in the body and spirit.
Our habits, appetites, minds, and choices matter because we belong to Him.`,
      `God is glorified when we bear fruit.
The fruit of the Spirit shows that His life is working within us.`,
      `God is glorified when we remain faithful under pressure.
Even suffering can reveal the worth of God when His people trust Him.`,
    ],
    studyInsight: {
      placement: 'after_teaching',
      title: 'Study Insight',
      body: `The Bible connects glory with character.

When Moses asked to see God's glory, God revealed His goodness, mercy, patience, and justice.

That matters.

God's glory is not merely brightness.

It is who He is.

So when Revelation says,

Give glory to Him,

it is calling for more than religious words.

It is calling for a life that reflects God's character.

This includes the visible parts of life.

What we say.

What we watch.

What we eat.

How we care for the body.

How we treat others.

How we respond when no one is watching.

The body affects the mind.

The mind affects the spiritual life.

And the spiritual life is where God speaks to us.

Glory is not performance.

It is reflection.`,
    },
    reflectPrompt: `When people look at your life,

what picture of God are they seeing?

Do your words reflect Him?

Do your habits reflect Him?

Do your private choices reflect Him?

Where is God inviting you to give Him glory more fully?`,
    lifeApplication: `This week, choose one area where your life can better reflect God.

Your speech.
Your entertainment.
Your eating.
Your rest.
Your attitude.
Your treatment of others.

Do not try to fix everything at once.

Choose one area.

Bring it honestly before God.

Ask:

Does this help me reflect Your character?

Then take one practical step.`,
    prayer: `Lord,

Teach me what it means to give You glory.

Not only with words,

but with my life.

Let my choices reflect Your character.

Let my body and mind be surrendered to You.

Change what needs to change.

Purify what needs to be purified.

Help others see something of You in me.

Amen.`,
  },
  'the-hour-of-gods-judgment': {
    openingThought: `Judgment is not a comfortable word.

For many people, it sounds cold.

Severe.

Threatening.

But Scripture presents judgment as more than punishment.

Judgment is where wrong is exposed.

Where truth is made clear.

Where God shows that He is just.

And for those who are in Christ,

judgment is not a reason to hide.

It is a reason to hold tightly to the Advocate.

The first angel does not say the judgment might come someday.

It says,

The hour of His judgment has come.

That means we are not dealing with theory.

We are dealing with reality.`,
    scriptureRef: 'Revelation 14:7',
    scriptureQuote: `"Saying with a loud voice,

Fear God, and give glory to him;

for the hour of his judgment is come."`,
    scriptureSecondaryRef: 'Daniel 7:9 to 10',
    scriptureSecondaryQuote: `"I beheld till the thrones were cast down,

and the Ancient of days did sit.

The judgment was set,

and the books were opened."`,
    scriptureAfterSecondary: `1 John 2:1

"My little children, these things write I unto you,

that ye sin not.

And if any man sin,

we have an advocate with the Father,

Jesus Christ the righteous."

1 John 1:9

"If we confess our sins,

he is faithful and just to forgive us our sins,

and to cleanse us from all unrighteousness."

The judgment is real.

The records are real.

But so is the Advocate.`,
    teachingPoints: [
      `Revelation presents judgment as already begun before Christ returns.
The message says the hour of His judgment has come before the harvest scene that follows.`,
      `Judgment is connected with records.
Daniel sees the books opened, showing that God's decisions are not careless or arbitrary.`,
      `Satan accuses, but Christ represents His people.
Our hope is not that our record is clean by itself, but that Jesus stands for those who trust Him.`,
      `Confession and repentance matter.
Sin is not ignored. It is forgiven, cleansed, and removed through Christ.`,
      `The judgment reveals who is truly in Christ.
Those who belong to Him receive the reward when He comes.`,
    ],
    studyInsight: {
      placement: 'after_teaching',
      title: 'Study Insight',
      body: `Many people think of judgment as a single moment.

But Revelation shows a process.

There is a judgment before the Second Coming.

There is a judgment during the millennium.

There is a final judgment after the millennium.

This lesson focuses on the judgment before Jesus returns.

That matters because Revelation 14 announces judgment before the final harvest.

The good news is that God has not left us alone in that judgment.

Jesus is not only the Sacrifice.

He is also the Advocate.

He lived the perfect life we failed to live.

He died the death sin deserved.

And He now represents those who come to Him in repentance, confession, and trust.

The safest place in the judgment is not denial.

It is Christ.`,
    },
    reflectPrompt: `When you hear the word judgment,

what rises in you first?

Fear?
Defensiveness?
Avoidance?
Confidence in Christ?

Do you try to hide your sin,

or bring it honestly to Jesus?

What would change if you saw the judgment

not as a reason to run from God,

but as a reason to surrender fully to Christ?`,
    lifeApplication: `This week, take time for honest confession.

Do not be vague.

Ask God to show you anything you have been excusing.

Then bring it to Christ.

Name it.

Confess it.

Turn from it.

Trust His forgiveness.

The goal is not to live terrified.

The goal is to live clean before God,

covered by Christ,

and responsive to His Spirit.`,
    prayer: `Lord,

Thank You that judgment does not leave me hopeless.

Thank You for Jesus,

my Sacrifice,

my Advocate,

and my righteousness.

Search my heart.

Show me what needs to be confessed.

Give me repentance where I have been careless.

Help me trust Your forgiveness,

and stand in Christ with a clean heart.

Amen.`,
  },
  'the-foundation-of-true-worship': {
    openingThought: `The first angel's message ends with a call to worship.

Not just worship in general.

Worship the Creator.

That matters because the final conflict is not merely about belief.

It is about worship.

Who receives your loyalty?

Who defines truth?

Who has authority over your life?

Revelation does not leave that question vague.

It calls the whole world back to the One who made heaven, earth, the sea, and the fountains of waters.

True worship begins with creation.

Because the One who made us

has the right to call us back to Himself.`,
    scriptureRef: 'Revelation 14:7',
    scriptureQuote: `"Saying with a loud voice,

Fear God, and give glory to him;

for the hour of his judgment is come:

and worship him that made heaven, and earth, and the sea, and the fountains of waters."`,
    scriptureSecondaryRef: 'Colossians 1:15 to 17',
    scriptureSecondaryQuote: `"He is the image of the invisible God,

the firstborn over all creation.

For by Him all things were created,

that are in heaven,

and that are in earth,

visible and invisible."`,
    scriptureAfterSecondary: `Psalm 95:6

"O come, let us worship and bow down:

let us kneel before the Lord our maker."

Revelation 4:11

"Thou art worthy, O Lord,

to receive glory and honour and power:

for thou hast created all things."

We worship God because He is Creator.

And Scripture identifies Christ as central in that work of creation.`,
    teachingPoints: [
      `Worship is the central issue in Revelation.
The contrast is between those who worship the Creator and those who worship the beast and his image.`,
      `Creation is the foundation of true worship.
God is worthy because He made all things and sustains all things.`,
      `Christ is not separate from creation.
All things were created through Him and for Him.`,
      `Worship involves loyalty.
It is not only what we sing, but who we obey and trust.`,
      `Revelation's call to worship points us back to creation language.
The wording echoes the fourth commandment and the memorial of creation.`,
    ],
    studyInsight: {
      placement: 'after_teaching',
      title: 'Study Insight',
      body: `Genesis says God rested on the seventh day.

The Hebrew word connected with this rest is **shabbat**.

It means to cease, stop, or rest.

That matters.

The Sabbath was not introduced after sin.

It was placed at creation.

Before Israel.

Before Sinai.

Before the fall.

God made the world in six days.

Then He rested.

Blessed the seventh day.

And made it holy.

Revelation 14 calls the world to worship the Creator.

That call points back to creation.

And at creation, God placed a memorial of His work.

The Sabbath is not merely a day off.

It is a sign that the Creator is worthy of worship.`,
    },
    reflectPrompt: `When you think about worship,

do you think mostly of songs,

or surrender?

Do you see worship as something you attend,

or something that orders your life?

What does it mean for you personally

to worship the Creator?`,
    lifeApplication: `This week, slow down and notice creation.

The sky.
The trees.
Your breath.
Your body.
The rhythm of time.

Let creation remind you that your life is not self-made.

Then ask:

Am I living as though God is Creator,

or as though I belong to myself?

Choose one act of worship this week that reflects loyalty to Him.

Not just words.

A real decision.`,
    prayer: `Lord,

You are my Creator.

You made all things,

and You hold all things together.

Teach me to worship You with more than words.

Call my heart back to Your authority.

Help me remember that I belong to You.

Make my worship faithful,

humble,

and true.

Amen.`,
  },
  'mystery-babylon-the-great': {
    openingThought: `The second angel's message introduces a name that carries heavy meaning.

Babylon.

It is not just a place on a map.

It is a symbol.

A system.

A spirit of confusion and rebellion against God.

The story begins long before Revelation.

At Babel, humanity tried to build upward without surrendering to God.

A tower.

A name.

A system centered on human greatness.

But the result was confusion.

Revelation uses that history to show us something deeper.

End time Babylon is not merely ancient history repeated.

It is a final system that unites the world in rebellion while claiming to offer stability, truth, and worship.

The danger of Babylon is not that it looks obviously evil.

The danger is that it can look religious while leading people away from God.`,
    scriptureRef: 'Revelation 14:8',
    scriptureQuote: `"And another angel followed, saying,

Babylon is fallen, is fallen, that great city,

because she made all nations drink of the wine of the wrath of her fornication."`,
    scriptureSecondaryRef: 'Genesis 11:4',
    scriptureSecondaryQuote: `"And they said,

Come, let us build us a city and a tower,

whose top may reach unto heaven;

and let us make us a name."`,
    scriptureAfterSecondary: `Revelation 17:5

"And upon her forehead was a name written,

Mystery, Babylon The Great,

The Mother Of Harlots And Abominations Of The Earth."

Revelation 17:15

"The waters which thou sawest, where the whore sitteth,

are peoples, and multitudes, and nations, and tongues."

Babylon is more than one city.

It represents a worldwide system of confusion, false worship, and human authority set against the authority of God.`,
    teachingPoints: [
      `Babylon begins with human pride.
At Babel, people tried to reach heaven by their own effort and make a name for themselves.`,
      `Babylon produces confusion.
The name Babel is tied to confusion, and Revelation shows final Babylon confusing the nations spiritually.`,
      `Babylon is worldwide in influence.
Revelation says she sits on many waters, meaning peoples, multitudes, nations, and tongues.`,
      `Babylon is religious, political, and economic.
Revelation shows her connected with kings, merchants, nations, and worship.`,
      `Babylon opposes true worship.
Her influence leads people away from the Creator and toward false worship.`,
    ],
    studyInsight: {
      placement: 'after_teaching',
      title: 'Study Insight',
      body: `Revelation 14 and Revelation 17 are connected.

The first angel's message goes to every nation, kindred, tongue, and people.

Babylon also sits on peoples, multitudes, nations, and tongues.

That means two messages are moving through the world.

One comes from heaven.

One comes from Babylon.

One calls people to fear God, give Him glory, and worship the Creator.

The other intoxicates the nations with false teaching and misplaced loyalty.

This is why the second angel's message matters.

God is not only exposing Babylon.

He is preparing people to come out of confusion.`,
    },
    reflectPrompt: `Babylon is not only about ancient history.

It is about the temptation to build life without surrendering to God.

Where do you see that temptation today?

In culture?
In religion?
In ambition?
In yourself?

Are there places where you want God's name,

but not God's authority?

What would it mean to come out of confusion

and stand fully with truth?`,
    lifeApplication: `This week, ask God to reveal any confusion you have accepted as normal.

Not all confusion looks dark.

Some of it sounds spiritual.

Some of it feels popular.

Some of it comes dressed as success.

Take one belief, habit, or influence in your life and ask:

Does this lead me closer to God's truth,

or deeper into confusion?

Then be willing to follow what God shows you.`,
    prayer: `Lord,

Keep me from spiritual confusion.

Teach me to recognize the difference between what comes from You

and what comes from human pride.

Give me humility to receive truth.

Give me courage to leave what is false.

Help me worship You clearly,

faithfully,

and fully.

Amen.`,
  },
  'babylons-abominable-wine': {
    openingThought: `Revelation says Babylon makes the nations drunk.

Not with literal wine.

With teaching.

With influence.

With ideas that distort truth.

That image matters.

Wine affects the mind.

It changes judgment.

It blurs what is clear.

That is what false teaching does spiritually.

It may still use religious language.

It may still speak of God.

It may even sound comforting.

But if it leads people away from Scripture,

away from God's commandments,

away from Christ's work,

and away from true worship,

then it is not harmless.

Babylon's wine is dangerous because people drink it without realizing they are losing clarity.`,
    scriptureRef: 'Revelation 14:8',
    scriptureQuote: `"And another angel followed, saying,

Babylon is fallen, is fallen, that great city,

because she made all nations drink of the wine of the wrath of her fornication."`,
    scriptureSecondaryRef: 'Revelation 17:2',
    scriptureSecondaryQuote: `"With whom the kings of the earth have committed fornication,

and the inhabitants of the earth have been made drunk with the wine of her fornication."`,
    scriptureAfterSecondary: `Jeremiah 51:7

"Babylon hath been a golden cup in the Lord's hand,

that made all the earth drunken:

the nations have drunken of her wine;

therefore the nations are mad."

John 17:17

"Sanctify them through thy truth:

thy word is truth."

Truth sanctifies.

Falsehood intoxicates.

That is the contrast.`,
    teachingPoints: [
      `Babylon's wine represents false teaching.
It confuses the mind and leads people away from the clear Word of God.`,
      `False teaching is dangerous because it can sound religious.
The issue is not whether something uses spiritual language, but whether it agrees with Scripture.`,
      `Babylon falls because she rejects God's message.
If Babylon received the everlasting gospel, true worship, judgment, and obedience, she would not fall.`,
      `Beliefs shape behavior.
What people believe about God, sin, death, judgment, worship, and obedience changes how they live.`,
      `God's answer to Babylon's wine is truth.
The Word of God must test every teaching, tradition, and spiritual claim.`,
    ],
    studyInsight: {
      placement: 'after_teaching',
      title: 'Study Insight',
      body: `Revelation does not say Babylon keeps her wine to herself.

She gives it to the nations.

That means her teachings spread.

They influence churches, cultures, governments, and ordinary people.

Some false teachings weaken obedience.

Some make sin feel safe.

Some replace God's commandments with human tradition.

Some confuse what happens after death.

Some turn judgment into something distant or unimportant.

Some present worship in a way that ignores the Creator's authority.

The issue is not merely having wrong information.

Wrong teaching produces wrong worship.

And wrong worship leads the heart away from God.

This is why the Bible must remain the test.

Not tradition.

Not popularity.

Not emotion.

Scripture.`,
    },
    reflectPrompt: `What teachings have shaped your view of God?

Did they come from Scripture,

or from assumption?

Are there beliefs you have accepted because they were familiar,

not because you studied them?

Where might God be asking you to test what you believe

by His Word?`,
    lifeApplication: `This week, choose one belief you have always assumed was true.

Do not attack it.

Test it.

Open Scripture.

Pray honestly.

Ask:

Where does the Bible teach this?

Does this belief lead me toward Christ,

obedience,

truth,

and worship of the Creator?

If it does, hold it with confidence.

If it does not, be willing to let it go.`,
    prayer: `Lord,

Protect me from confusion.

Teach me to love truth more than comfort.

Help me test every teaching by Your Word.

Remove what is false.

Strengthen what is true.

Give me a clear mind,

a humble heart,

and courage to follow Scripture wherever it leads.

Amen.`,
  },
  'babylons-filthy-fornication': {
    openingThought: `Revelation uses strong language for a reason.

Fornication.

A harlot.

Kings of the earth.

A religious power joined to political power.

This is not random symbolism.

In Scripture, God's people are often pictured as a woman.

Faithfulness to God is purity.

Unfaithfulness is spiritual adultery.

So when Revelation shows a harlot joined with the kings of the earth, the picture is serious.

Religion has reached for the power of the state.

Spiritual influence has become political control.

Worship is no longer free.

Conscience is no longer protected.

That is Babylon's fornication.

It is the union of religious authority with civil power to enforce false worship.`,
    scriptureRef: 'Revelation 17:1 to 2',
    scriptureQuote: `"Come hither;

I will shew unto thee the judgment of the great whore that sitteth upon many waters:

With whom the kings of the earth have committed fornication,

and the inhabitants of the earth have been made drunk with the wine of her fornication."`,
    scriptureSecondaryRef: 'Revelation 18:3',
    scriptureSecondaryQuote: `"For all nations have drunk of the wine of the wrath of her fornication,

and the kings of the earth have committed fornication with her."`,
    scriptureAfterSecondary: `Matthew 22:21

"Render therefore unto Caesar the things which are Caesar's;

and unto God the things that are God's."

John 18:36

"My kingdom is not of this world."

Jesus recognized the difference between the kingdom of God and the kingdoms of this world.

When religion uses the state to control worship,

it crosses a line Christ never crossed.`,
    teachingPoints: [
      `In Bible prophecy, a woman often represents a religious body.
A pure woman represents faithfulness. A corrupt woman represents spiritual unfaithfulness.`,
      `Babylon's fornication is union with the kings of the earth.
This points to religious power joining itself to political power.`,
      `Christ's kingdom is not built by force.
Jesus never used civil power to compel worship or obedience.`,
      `Forced worship is false worship.
God desires love, faith, and willing obedience, not outward conformity produced by pressure.`,
      `When church and state unite to enforce religious practice, conscience is endangered.
This is one of the central warnings of Revelation.`,
    ],
    studyInsight: {
      placement: 'after_teaching',
      title: 'Study Insight',
      body: `Jesus was clear.

There are things that belong to Caesar.

And there are things that belong to God.

Civil government has a proper role.

It can protect order.

It can punish crime.

It can defend basic justice.

But it has no authority to command worship.

Worship belongs to God alone.

The moment religious power reaches for the sword of the state, persecution follows.

History has shown this again and again.

Revelation shows that it will happen again at the end.

Babylon's fornication is not merely moral corruption.

It is a system where religion and political power unite against the conscience of those who keep God's commandments and follow Jesus.`,
    },
    reflectPrompt: `How do you think about religious freedom?

Do you value it only when it protects people who agree with you?

Or do you value it because worship must be free?

Have you ever confused outward religious control

with genuine spiritual faithfulness?

What does it mean to follow Christ

without using force,

pressure,

or political power to control another person's conscience?`,
    lifeApplication: `This week, examine your own spirit.

It is easy to condemn religious control in history

while practicing pressure in smaller ways.

Ask yourself:

Do I try to control people,

or persuade with truth and love?

Do I respect conscience,

even when I disagree?

Do I trust God's Word and Spirit

more than force?

Choose one relationship or conversation where you can practice the way of Christ.

Clear truth.

Humble spirit.

No coercion.`,
    prayer: `Lord,

Teach me to honor truth without using force.

Help me understand the danger of false worship

and the misuse of power.

Give me courage to stand for conscience.

Give me humility to respect it in others.

Keep me faithful to Your kingdom,

which is not built by pressure,

but by truth,

love,

and the Spirit.

Amen.`,
  },
  'revelations-sea-beast': {
    openingThought: `Revelation 13 introduces a beast rising from the sea.

That image can feel strange at first.

A beast.

A sea.

Horns.

Heads.

Blasphemy.

Authority.

War against the saints.

But prophecy does not use symbols to hide truth from honest seekers.

It uses symbols to reveal truth carefully.

The sea beast is not a monster from imagination.

It represents a real power in history.

A power that receives authority.

A power that claims what belongs to God.

A power that persecutes the faithful.

A power that receives a deadly wound,

and later rises again to global influence.

To understand the final warning,

we must understand the system Revelation is warning about.`,
    scriptureRef: 'Revelation 13:1 to 2',
    scriptureQuote: `"And I stood upon the sand of the sea,

and saw a beast rise up out of the sea,

having seven heads and ten horns,

and upon his horns ten crowns,

and upon his heads the name of blasphemy.

And the beast which I saw was like unto a leopard,

and his feet were as the feet of a bear,

and his mouth as the mouth of a lion:

and the dragon gave him his power,

and his seat,

and great authority."`,
    scriptureSecondaryRef: 'Daniel 7:3',
    scriptureSecondaryQuote: `"And four great beasts came up from the sea,

diverse one from another."`,
    scriptureAfterSecondary: `Daniel 7:17

"These great beasts,

which are four,

are four kings,

which shall arise out of the earth."

Revelation 13 borrows language from Daniel.

In prophecy, beasts represent kingdoms or ruling powers.

The sea beast is not symbolic chaos.

It is a prophetic system with historical features.`,
    teachingPoints: [
      `A beast in Bible prophecy represents a kingdom or ruling power.
Daniel gives the interpretive key before Revelation expands the picture.`,
      `The sea represents populated areas and nations in conflict.
This power rises among peoples, kingdoms, and political struggle.`,
      `Revelation 13 combines features from Daniel 7.
The lion, bear, leopard, and dreadful beast point back to the sequence of world empires.`,
      `The dragon gives this beast power, throne, and authority.
This shows a transfer of political and religious influence.`,
      `The beast speaks blasphemy and persecutes the saints.
Its issue is not merely political power, but religious claims that belong to God alone.`,
    ],
    studyInsight: {
      placement: 'after_teaching',
      title: 'Study Insight',
      body: `Daniel 7 and Revelation 13 belong together.

Daniel shows a sequence of powers:

Babylon.

Medo Persia.

Greece.

Rome.

Divided Rome.

The little horn.

Revelation 13 looks back at that same prophetic line and focuses on the power that follows Rome's division.

This power speaks great words.

It persecutes God's people.

It claims religious authority.

It continues for a prophetic period.

And it receives a deadly wound.

The issue is not whether a system is religious.

The issue is whether that system honors God's authority,

or takes authority that belongs to Him.

Revelation identifies a power that uses religion,

but turns worship and conscience away from Scripture.

That is why the warning is serious.`,
    },
    reflectPrompt: `When you think about religious power,

do you assume it is always safe because it uses spiritual language?

How can something sound religious,

yet still oppose God's truth?

Are there places where you have trusted tradition,

authority,

or popularity

more than Scripture?

What would it mean to let the Bible test every religious claim?`,
    lifeApplication: `This week, practice discernment.

Choose one belief, practice, or tradition you have accepted without much thought.

Do not approach it with pride.

Approach it with prayer.

Ask:

Where does Scripture teach this?

Does this lead me to worship God more faithfully?

Does it honor Christ's authority?

Does it agree with God's commandments?

Truth does not need fear to survive examination.

Let Scripture be the test.`,
    prayer: `Lord,

Teach me to understand prophecy with humility.

Protect me from confusion,

fear,

and pride.

Help me test every claim by Your Word.

Give me courage to follow truth,

even when it challenges what is familiar.

Keep my worship centered on You,

and my conscience surrendered to Scripture.

Amen.`,
  },
  'revelations-land-beast': {
    openingThought: `Revelation does not stop with the sea beast.

Another beast appears.

This one does not rise from the sea.

It rises from the earth.

It looks different.

It has two horns like a lamb.

But it speaks like a dragon.

That is the warning.

Something can begin with gentle principles

and later speak with the voice of coercion.

Something can claim liberty

and later use power to control conscience.

The land beast is not introduced as openly hostile at first.

Its danger is contradiction.

Lamb like appearance.

Dragon like voice.

Religious freedom in profession.

Religious control in practice.`,
    scriptureRef: 'Revelation 13:11',
    scriptureQuote: `"And I beheld another beast coming up out of the earth;

and he had two horns like a lamb,

and he spake as a dragon."`,
    scriptureSecondaryRef: 'Revelation 13:12',
    scriptureSecondaryQuote: `"And he exerciseth all the power of the first beast before him,

and causeth the earth and them which dwell therein

to worship the first beast,

whose deadly wound was healed."`,
    scriptureAfterSecondary: `Revelation 12:16

"And the earth helped the woman,

and the earth opened her mouth,

and swallowed up the flood which the dragon cast out of his mouth."

Matthew 22:21

"Render therefore unto Caesar the things which are Caesar's;

and unto God the things that are God's."

This power rises from the earth,

appears lamb like,

but eventually speaks like the dragon.

Its final role is to lead the world back toward the authority of the first beast.`,
    teachingPoints: [
      `The land beast rises from the earth.
Unlike the sea, the earth points to a less populated area and a different kind of rise.`,
      `It appears after the first beast receives its deadly wound.
The timing matters in identifying its role in prophecy.`,
      `It has two horns like a lamb.
This points to gentle, Christ like principles in appearance.`,
      `It speaks like a dragon.
Its speech reveals a change from liberty to coercion.`,
      `It causes the world to worship the first beast.
Its final role is not neutral. It restores influence to the wounded power.`,
    ],
    studyInsight: {
      placement: 'after_teaching',
      title: 'Study Insight',
      body: `The two horns matter.

In prophecy, horns often represent powers or kingdoms.

This beast has two lamb like horns,

but no crowns.

That picture suggests a nation with two key principles,

not a monarchy.

The PDF connects this with the idea of two kingdoms existing within one nation:

civil authority

and religious liberty.

Jesus recognized this distinction when He said to give Caesar what belongs to Caesar,

and give God what belongs to God.

That separation protects conscience.

But Revelation warns that this power eventually speaks like a dragon.

It keeps its lamb like appearance,

but uses dragon like methods.

This is the danger.

A nation can keep the language of liberty

while beginning to enforce worship.`,
    },
    reflectPrompt: `Why does forced religion always become dangerous?

Can worship still be true if it is pressured?

Have you seen people confuse outward religious behavior

with genuine surrender to God?

Where do you need to protect your own conscience,

and also respect the conscience of others?`,
    lifeApplication: `This week, examine how you use influence.

Not just political influence.

Personal influence.

Family influence.

Spiritual influence.

Ask yourself:

Do I pressure people,

or persuade with truth and love?

Do I respect conscience,

or try to control outcomes?

Do I trust God's Spirit,

or rely on force?

Choose one conversation where you can practice Christ's way.

Clear truth.

Patient spirit.

No coercion.`,
    prayer: `Lord,

Teach me to value the conscience You gave.

Help me recognize the danger of religious force.

Keep me from using pressure where You call for truth and love.

Give me courage to stand for what is right,

and humility to respect the freedom of others.

Make my faith sincere,

not forced,

and my witness faithful,

not controlling.

Amen.`,
  },
  'the-image-of-the-beast': {
    openingThought: `An image is a copy.

A likeness.

A reproduction.

Revelation says an image will be made to the beast.

That means something will be formed that resembles the first beast's system of power.

Not necessarily the same organization.

But the same pattern.

Religious authority joined with civil power.

Worship enforced.

Conscience pressured.

Dissent punished.

This is why the image of the beast matters.

It is not only about what happened in history.

It is about what happens when the same principles return.

When religion reaches for the power of the state,

the image begins to form.`,
    scriptureRef: 'Revelation 13:14 to 15',
    scriptureQuote: `"Saying to them that dwell on the earth,

that they should make an image to the beast,

which had the wound by a sword,

and did live.

And he had power to give life unto the image of the beast,

that the image of the beast should both speak,

and cause that as many as would not worship the image of the beast

should be killed."`,
    scriptureSecondaryRef: 'Revelation 13:12',
    scriptureSecondaryQuote: `"And he exerciseth all the power of the first beast before him,

and causeth the earth and them which dwell therein

to worship the first beast."`,
    scriptureAfterSecondary: `Daniel 3:4 to 6

"Then an herald cried aloud,

To you it is commanded,

O people, nations, and languages,

that at what time ye hear the sound of the cornet,

flute,

harp,

sackbut,

psaltery,

dulcimer,

and all kinds of music,

ye fall down and worship the golden image."

An image connected with forced worship is not new.

Daniel 3 helps us recognize the pattern.`,
    teachingPoints: [
      `An image is a likeness of something else.
The image of the beast reflects the principles and methods of the first beast.`,
      `The first beast used religious authority joined with civil power.
The image repeats that pattern.`,
      `The image speaks.
In prophecy, this points to official action, law, and command.`,
      `The image causes.
It does not merely invite worship. It pressures and enforces.`,
      `The issue is worship and conscience.
Those who refuse false worship become the target of coercive power.`,
    ],
    studyInsight: {
      placement: 'after_teaching',
      title: 'Study Insight',
      body: `Daniel 3 gives a clear preview.

A global empire.

An image.

A command to worship.

Music and public pressure.

A death decree for those who refuse.

The issue was not whether the Hebrews believed in God privately.

The issue was whether they would bow publicly.

Revelation shows the same pattern at the end.

False worship will not remain only a belief.

It will become enforced practice.

The image of the beast forms when religious influence gains civil power to enforce worship.

That is why Scripture calls God's people to patience,

faith,

commandment keeping,

and loyalty to Jesus.

The final crisis reveals who owns the conscience.`,
    },
    reflectPrompt: `What would make false worship powerful?

Fear?

Pressure?

Convenience?

Desire to fit in?

Would you recognize false worship if it was popular,

legal,

and presented as good for society?

Where are you learning now

to obey God over pressure?`,
    lifeApplication: `This week, practice small faithfulness.

Do not wait for a major crisis to learn obedience.

Choose one area where pressure tempts you to compromise.

It may be private.

It may be public.

It may seem small.

Ask:

Am I bowing because it is easier,

or standing because it is true?

Faithfulness grows through repeated choices.

Choose truth now,

so your conscience is trained for later.`,
    prayer: `Lord,

Give me a conscience loyal to You.

Teach me to recognize false worship,

even when it looks acceptable.

Keep me from bowing to pressure.

Strengthen my faith in small decisions,

so I can stand in greater tests.

Help me worship You freely,

faithfully,

and without compromise.

Amen.`,
  },
  '666-the-number-of-the-beast': {
    openingThought: `Few symbols in Revelation have created more speculation than 666.

People have guessed names.

Watched headlines.

Chased theories.

But Revelation does not give this number so we can play with fear.

It gives it so we can understand a system.

The number is connected to the beast.

To worship.

To authority.

To a name.

To a claim that belongs only to God.

So the question is not,

Who can we accuse?

The better question is,

What kind of authority is Revelation warning us about?

Because 666 is not mainly about curiosity.

It is about counterfeit authority.`,
    scriptureRef: 'Revelation 13:18',
    scriptureQuote: `"Here is wisdom.

Let him that hath understanding count the number of the beast:

for it is the number of a man;

and his number is Six hundred threescore and six."`,
    scriptureSecondaryRef: 'Revelation 13:5 to 6',
    scriptureSecondaryQuote: `"And there was given unto him a mouth speaking great things and blasphemies.

And he opened his mouth in blasphemy against God,

to blaspheme his name,

and his tabernacle,

and them that dwell in heaven."`,
    scriptureAfterSecondary: `2 Thessalonians 2:3 to 4

"That man of sin be revealed,

the son of perdition;

who opposeth and exalteth himself above all that is called God,

or that is worshipped."

The number is tied to a power that speaks blasphemy,

exalts itself,

and claims authority that belongs to God.`,
    teachingPoints: [
      `Revelation says the number calls for wisdom.
This is not meant for wild guessing, but careful spiritual discernment.`,
      `The number belongs to the beast system.
It must be studied in the same context as worship, authority, blasphemy, and the mark.`,
      `Revelation says it is the number of a man.
This points to a system centered in human authority rather than God's authority.`,
      `The beast's name is blasphemous.
It claims religious authority and prerogatives that belong only to Christ.`,
      `In this prophetic interpretation, the number is connected with Rome and Latin titles of religious authority.
The issue is not personal insult, but a system that places human authority where Christ alone belongs.`,
    ],
    studyInsight: {
      placement: 'after_teaching',
      title: 'Study Insight',
      body: `Revelation 13 points us toward a name that carries a number.

In ancient languages, letters often carried numerical value.

Because the beast is connected with Rome,

the PDF source argues that the number should be understood through Latin.

The title often discussed in this interpretation is:

**Vicarius Filii Dei**

It means,

Vicar of the Son of God.

The concern is not simply the words themselves.

The concern is the claim behind them.

A representative who stands in Christ's place on earth.

A religious authority claiming power to act for Christ,

even where Scripture gives no permission.

That is why this lesson matters.

The number 666 is not meant to distract us with fear.

It is meant to expose a system that centers human authority in the place of Christ's authority.`,
    },
    reflectPrompt: `When you think about spiritual authority,

what do you trust most?

Scripture?

Tradition?

Religious office?

Popular belief?

Human explanation?

Are there places where you have allowed human authority

to outweigh the Word of God?

What would it mean to let Christ alone hold the highest authority in your faith?`,
    lifeApplication: `This week, practice testing authority.

Choose one belief or practice you have accepted.

Ask:

Where does Scripture teach this?

Does this exalt Christ,

or human authority?

Does this lead me to obey God,

or merely follow tradition?

Do not study with suspicion.

Study with humility.

Christ is not threatened by honest questions.

Truth can be examined.`,
    prayer: `Lord,

Give me wisdom.

Teach me to recognize the difference between Your authority

and human authority.

Keep me from fear,

speculation,

and pride.

Lead me back to Scripture.

Keep Christ at the center of my worship,

my obedience,

and my trust.

Amen.`,
  },
  'the-mark-of-the-beast-part-1': {
    openingThought: `The mark of the beast is not introduced in a vacuum.

It comes after a long conflict.

A conflict over worship.

A conflict over authority.

A conflict over obedience.

Many people want to know what the mark is,

but Revelation first shows us what the conflict is about.

It is not merely about technology.

It is not merely about politics.

It is not merely about a visible sign.

It is about loyalty.

Who has the right to define worship?

Who has the right to command conscience?

Who has the right to shape obedience?

Before we identify the mark,

we must understand the law, worship, and the seal of God.`,
    scriptureRef: 'Revelation 14:9 to 12',
    scriptureQuote: `"If any man worship the beast and his image,

and receive his mark in his forehead,

or in his hand,

the same shall drink of the wine of the wrath of God."

"Here is the patience of the saints:

here are they that keep the commandments of God,

and the faith of Jesus."`,
    scriptureSecondaryRef: 'Revelation 12:17',
    scriptureSecondaryQuote: `"And the dragon was wroth with the woman,

and went to make war with the remnant of her seed,

which keep the commandments of God,

and have the testimony of Jesus Christ."`,
    scriptureAfterSecondary: `Hebrews 8:10

"I will put my laws into their mind,

and write them in their hearts:

and I will be to them a God,

and they shall be to me a people."

Isaiah 8:16

"Bind up the testimony,

seal the law among my disciples."

Revelation contrasts two groups.

One receives the mark of the beast.

The other keeps the commandments of God and the faith of Jesus.`,
    teachingPoints: [
      `The final conflict is connected with worship.
Revelation repeatedly shows the issue as worship of God or worship of the beast.`,
      `The final conflict is connected with God's commandments.
The faithful are described as those who keep the commandments of God.`,
      `The seal of God is connected with the mind and the heart.
God writes His law inwardly, not merely outwardly.`,
      `The forehead and hand matter symbolically.
The forehead points to conviction. The hand points to action.`,
      `The mark of the beast is a counterfeit of God's seal.
It involves false worship, human authority, and obedience against God's command.`,
    ],
    studyInsight: {
      placement: 'after_teaching',
      title: 'Study Insight',
      body: `Think of the final issue like three circles.

The largest circle is the law of God.

The smaller circle is the first table of the law,

the commandments that deal directly with worship and loyalty to God.

The smallest circle is the one commandment that identifies the Creator.

The Sabbath commandment.

That commandment contains the elements of a seal:

the name,

the title,

and the territory of authority.

The Lord your God.

Creator.

Heaven and earth.

This is why the mark of the beast cannot be understood apart from worship and law.

The issue is not simply a day.

It is authority.

God's authority,

or human authority.

God's command,

or human substitution.`,
    },
    reflectPrompt: `When you hear "the mark of the beast,"

do you think first of fear,

or worship?

Have you studied this from Scripture,

or mostly from assumptions?

What does your obedience reveal about whose authority you trust?

Are there places where you follow what is convenient

instead of what is written?`,
    lifeApplication: `This week, read Revelation 14:9 to 12 carefully.

Notice the contrast.

Mark of the beast.

Commandments of God.

Faith of Jesus.

Do not rush.

Ask:

What does this passage say the final issue is?

What kind of people does God call faithful?

Where is God calling me to deeper loyalty?

Let Scripture define the issue before culture does.`,
    prayer: `Lord,

Help me understand this warning with humility.

Remove fear,

speculation,

and confusion.

Teach me to see the real issue.

Worship.

Authority.

Obedience.

Write Your law in my heart and mind.

Strengthen my faith in Jesus.

Make my loyalty clear,

not only in words,

but in my life.

Amen.`,
  },
  'the-mark-of-the-beast-part-2': {
    openingThought: `If the final conflict centers on worship,

then the question becomes practical.

What worship does God command?

What worship has human authority substituted?

Revelation points us back to creation.

To the One who made heaven,

earth,

the sea,

and the fountains of waters.

That language is not accidental.

It echoes the fourth commandment.

The Sabbath stands as a memorial of creation,

a sign of God's authority,

and a test of loyalty when human authority claims the right to change what God has blessed.

The mark of the beast is not about an accidental misunderstanding.

It is about choosing human authority over God's command when the issue is made clear.`,
    scriptureRef: 'Genesis 2:2 to 3',
    scriptureQuote: `"And on the seventh day God ended his work which he had made;

and he rested on the seventh day from all his work which he had made.

And God blessed the seventh day,

and sanctified it."`,
    scriptureSecondaryRef: 'Exodus 20:8 to 11',
    scriptureSecondaryQuote: `"Remember the sabbath day,

to keep it holy.

Six days shalt thou labour,

and do all thy work:

but the seventh day is the sabbath of the Lord thy God."`,
    scriptureAfterSecondary: `Mark 2:27 to 28

"The sabbath was made for man,

and not man for the sabbath:

Therefore the Son of man is Lord also of the sabbath."

Daniel 7:25

"He shall speak great words against the most High,

and shall wear out the saints of the most High,

and think to change times and laws."

The Bible presents the seventh day as blessed,

sanctified,

and connected with the authority of the Creator.`,
    teachingPoints: [
      `The Sabbath began at creation.
It was given before sin, before Sinai, and before any nation existed.`,
      `The Sabbath points to God as Creator.
That is why Revelation's call to worship the Creator matters.`,
      `Jesus identified Himself as Lord of the Sabbath.
The Sabbath belongs to Him, not to human tradition.`,
      `Daniel warned of a power that would think to change times and law.
This connects directly with authority over worship.`,
      `The mark of the beast centers on enforced false worship.
It becomes the mark when human authority is chosen over God's command in the final crisis.`,
    ],
    studyInsight: {
      placement: 'after_teaching',
      title: 'Study Insight',
      body: `The PDF source identifies Sunday observance as the mark of beast authority

when it is knowingly accepted and enforced in place of God's Sabbath.

This distinction matters.

A person is not marked simply because they were taught incorrectly,

or because they have not yet seen the issue clearly.

The final crisis involves light,

choice,

pressure,

and worship.

The Sabbath is God's sign of creation authority.

Sunday, in this prophetic understanding, becomes the sign of human religious authority when it is exalted above God's command and enforced by civil power.

The issue is not calendar preference.

It is authority.

Who has the right to define holy time?

God,

or man?`,
    },
    reflectPrompt: `Have you thought seriously about why you worship when you worship?

Is your practice based on Scripture,

tradition,

family,

culture,

or convenience?

If God has blessed and sanctified the seventh day,

what does that mean for your life?

Are you willing to follow Scripture

even when it challenges what is familiar?`,
    lifeApplication: `This week, study the Sabbath for yourself.

Read Genesis 2:2 to 3.

Read Exodus 20:8 to 11.

Read Mark 2:27 to 28.

Read Revelation 14:6 to 12.

Do not begin with tradition.

Begin with Scripture.

Ask:

What did God bless?

What did God command?

What did Jesus affirm?

What does Revelation call the world back to?

Let the Bible speak clearly.`,
    prayer: `Lord,

Give me a heart that follows Your Word.

Help me lay aside assumption,

tradition,

and convenience.

Show me what You have blessed.

Teach me what true worship means.

Give me courage to follow You

when truth becomes clear.

Keep my loyalty with Christ,

and my conscience surrendered to Scripture.

Amen.`,
  },
  'the-wine-of-gods-wrath': {
    openingThought: `The third angel's message contains one of the strongest warnings in Scripture.

It speaks of the wine of God's wrath.

That phrase is heavy.

It should not be treated carelessly.

But it should also not be misunderstood.

God's wrath is not uncontrolled anger.

It is His settled response to sin,

rebellion,

false worship,

and the final rejection of mercy.

Before the wine of wrath is poured out,

the everlasting gospel has been preached.

Truth has been given.

Warnings have been heard.

Mercy has been offered.

The wine of God's wrath comes only after people choose the beast,

his image,

and his mark,

instead of Christ,

His commandments,

and His truth.`,
    scriptureRef: 'Revelation 14:9 to 10',
    scriptureQuote: `"If any man worship the beast and his image,

and receive his mark in his forehead,

or in his hand,

the same shall drink of the wine of the wrath of God,

which is poured out without mixture into the cup of his indignation."`,
    scriptureSecondaryRef: 'Revelation 15:1',
    scriptureSecondaryQuote: `"And I saw another sign in heaven,

great and marvellous,

seven angels having the seven last plagues;

for in them is filled up the wrath of God."`,
    scriptureAfterSecondary: `Revelation 16:1

"And I heard a great voice out of the temple saying to the seven angels,

Go your ways,

and pour out the vials of the wrath of God upon the earth."

Romans 6:23

"For the wages of sin is death;

but the gift of God is eternal life through Jesus Christ our Lord."

God's wrath is real.

But so is His gift.

The issue is whether a person receives what Christ has provided,

or chooses to stand under sin's final consequence.`,
    teachingPoints: [
      `The wine of God's wrath is connected with the final rejection of mercy.
It is poured out after truth has been proclaimed and choices have been made.`,
      `The wrath of God is revealed in the seven last plagues.
Revelation shows the bowls of wrath being poured out after probation closes.`,
      `God's wrath is unmixed.
That means it is no longer softened by mercy because mercy has been finally rejected.`,
      `The issue is not whether Christ paid for sin.
The issue is whether people receive His payment or choose to carry their own guilt.`,
      `The final consequence of sin is death.
Jesus offers eternal life, but He does not force anyone to receive it.`,
    ],
    studyInsight: {
      placement: 'after_teaching',
      title: 'Study Insight',
      body: `The Bible presents two ways for sin to be dealt with.

Either Christ carries it,

or the sinner does.

At the cross, Jesus paid the price for the world.

The gift is real.

The sacrifice is enough.

The provision has been made.

But a gift can be refused.

That is what makes the wine of God's wrath so serious.

It is not poured out because God failed to save.

It is poured out because people finally reject the only One who can save them.

The wrath of God is not the opposite of His love.

It is what happens when love, truth, and mercy are permanently rejected.`,
    },
    reflectPrompt: `When you think about God's wrath,

do you see only punishment,

or do you also see rejected mercy?

Have you treated grace as something ordinary?

Are there areas where God has been warning you,

but you have delayed responding?

What would it mean to receive Christ fully,

instead of resisting what He is trying to save you from?`,
    lifeApplication: `This week, take grace seriously.

Do not use mercy as an excuse to delay obedience.

Ask God to show you one area where you have been resisting Him.

Then respond.

Confess what needs to be confessed.

Release what needs to be released.

Obey what has already been made clear.

The safest place is not denial.

The safest place is surrender to Christ.`,
    prayer: `Lord,

Thank You for offering mercy before judgment.

Thank You for the gift of eternal life through Jesus.

Help me not to take grace lightly.

Show me where I have resisted Your voice.

Lead me to repentance.

Teach me to receive what Christ has provided,

and to stand on the side of mercy,

truth,

and life.

Amen.`,
  },
  'the-smoke-of-babylons-torment': {
    openingThought: `Some verses in Revelation sound terrifying at first reading.

Fire.

Brimstone.

Torment.

Smoke rising forever.

No rest day or night.

Many people read those words and assume the Bible teaches endless conscious suffering.

But Scripture must explain Scripture.

Revelation uses symbols and language drawn from the Old Testament.

If we read carefully,

the picture becomes clearer.

The fire is real.

The judgment is real.

The consequences are eternal.

But the Bible does not teach that sin will live forever in a corner of God's universe.

God's final judgment destroys sin completely.

The smoke rises because the destruction is final,

not because the wicked live forever.`,
    scriptureRef: 'Revelation 14:10 to 11',
    scriptureQuote: `"He shall be tormented with fire and brimstone

in the presence of the holy angels,

and in the presence of the Lamb:

And the smoke of their torment ascendeth up for ever and ever."`,
    scriptureSecondaryRef: 'Jude 7',
    scriptureSecondaryQuote: `"Sodom and Gomorrha,

and the cities about them in like manner,

giving themselves over to fornication,

and going after strange flesh,

are set forth for an example,

suffering the vengeance of eternal fire."`,
    scriptureAfterSecondary: `2 Peter 2:6

"And turning the cities of Sodom and Gomorrha into ashes

condemned them with an overthrow,

making them an ensample unto those that after should live ungodly."

Malachi 4:1

"For, behold, the day cometh,

that shall burn as an oven;

and all the proud,

yea,

and all that do wickedly,

shall be stubble."

Sodom suffered eternal fire,

but it is not still burning today.

The result was eternal.

The cities were reduced to ashes.`,
    teachingPoints: [
      `Revelation uses Old Testament judgment language.
To understand "forever and ever," we must compare Scripture with Scripture.`,
      `Eternal fire does not mean the fire burns without end.
Jude says Sodom suffered eternal fire, yet Peter says it was turned to ashes.`,
      `The punishment is eternal in result.
The wicked do not receive eternal life in torment. They face final destruction.`,
      `The second death is final.
Revelation 20 describes the lake of fire as the second death.`,
      `God will not preserve sin forever.
The final judgment removes sin, rebellion, Satan, and death from the universe.`,
    ],
    studyInsight: {
      placement: 'after_teaching',
      title: 'Study Insight',
      body: `The phrase "smoke ascending" appears in the Old Testament as a picture of complete judgment.

When Sodom was destroyed,

Abraham saw smoke rising like the smoke of a furnace.

The smoke was evidence that the judgment had taken place.

It did not mean the city would burn forever.

It meant the destruction was complete.

Revelation uses similar language.

The smoke of Babylon's torment rising forever points to a judgment whose result cannot be reversed.

The wicked do not continue living forever in suffering.

They are destroyed.

Sin ends.

Death ends.

The universe is cleansed.

God's justice is not eternal cruelty.

It is final judgment that makes way for eternal restoration.`,
    },
    reflectPrompt: `How has your view of God been shaped by the idea of judgment?

Have you pictured Him as cruel,

or as just?

Does the Bible's teaching about final destruction change how you see His character?

What does it mean to you that God will not allow sin to continue forever?`,
    lifeApplication: `This week, read Jude 7 and 2 Peter 2:6 together.

Notice the connection.

Eternal fire.

Reduced to ashes.

Then read Revelation 20:14 to 15.

Ask:

What is the final result of sin?

Does God preserve evil forever,

or end it completely?

Let Scripture correct fear,

and give you a clearer picture of God's justice.`,
    prayer: `Lord,

Help me understand Your justice through Scripture.

Remove false pictures of Your character.

Teach me to see that You are holy,

fair,

merciful,

and true.

Thank You that sin will not last forever.

Thank You that death will end.

Help me trust Your judgment,

and choose life in Christ.

Amen.`,
  },
  'the-patience-of-the-saints': {
    openingThought: `After the warning against the beast,

his image,

and his mark,

Revelation shows us a different kind of people.

Not loud.

Not powerful in the world's eyes.

Not supported by earthly systems.

But faithful.

They endure.

They keep God's commandments.

They hold to the faith of Jesus.

That is what Revelation calls the patience of the saints.

This is not passive waiting.

It is steady faithfulness under pressure.

It is refusing to let go of God

when the world makes obedience costly.`,
    scriptureRef: 'Revelation 14:12',
    scriptureQuote: `"Here is the patience of the saints:

here are they that keep the commandments of God,

and the faith of Jesus."`,
    scriptureSecondaryRef: 'Luke 18:1',
    scriptureSecondaryQuote: `"And he spake a parable unto them to this end,

that men ought always to pray,

and not to faint."`,
    scriptureAfterSecondary: `Luke 18:7 to 8

"And shall not God avenge his own elect,

which cry day and night unto him,

though he bear long with them?

I tell you that he will avenge them speedily.

Nevertheless when the Son of man cometh,

shall he find faith on the earth?"

1 Peter 5:8

"Be sober,

be vigilant;

because your adversary the devil,

as a roaring lion,

walketh about,

seeking whom he may devour."

The saints endure because they keep praying,

keep trusting,

and keep obeying,

even when the adversary presses hard.`,
    teachingPoints: [
      `The patience of the saints is endurance under pressure.
It is faithfulness when obedience becomes costly.`,
      `The saints are God's faithful people.
In Daniel and Revelation, the saints are opposed, persecuted, and tested by hostile powers.`,
      `Their strength is not earthly support.
Like the widow in Luke 18, their hope is in God's intervention.`,
      `Their endurance is connected with prayer.
Jesus taught His people to pray always and not lose heart.`,
      `Their faithfulness is visible.
They keep God's commandments and hold to the faith of Jesus.`,
    ],
    scriptureSupplementBlocks: [
      {
        type: 'wordInsight',
        study: {
          language: 'Greek',
          originalWord: 'ὑπομονή',
          transliteration: 'hupomone',
          meaning: 'endurance, perseverance, steadfastness under pressure',
          reference: 'Revelation 14:12',
          shortExplanation:
            'In Revelation 14:12, patience is not passive waiting. It is faithful endurance when obedience becomes costly.',
        },
      },
      {
        type: 'scriptureChain',
        title: 'Scripture interprets Scripture',
        verses: [
          {
            reference: 'Revelation 14:7',
            shortNote: 'Fear God and worship the Creator.',
          },
          {
            reference: 'Exodus 20:11',
            shortNote: 'The Sabbath remembers God as Creator.',
          },
          {
            reference: 'Genesis 2:2–3',
            shortNote: 'God rested and blessed the seventh day.',
          },
        ],
      },
    ],
    studyInsight: {
      placement: 'after_teaching',
      title: 'Study Insight',
      body: `The Greek word translated "patience" is **hupomone**.

It means endurance,

perseverance,

steadfastness,

and the refusal to give up under pressure.

This is not weak patience.

It is not simply waiting quietly.

It is a stubborn faith that keeps holding on to God.

The PDF connects this with the persistent widow in Luke 18.

She had no earthly support.

No power.

No protection.

But she kept coming to the judge for justice.

In the same way,

God's faithful people will face pressure,

but they will not stop praying.

They will not stop trusting.

They will not stop obeying.

That is **hupomone**.

Holy endurance.`,
    },
    reflectPrompt: `How do you usually respond when obedience becomes hard?

Do you pull back?

Compromise?

Grow tired?

Or keep holding on?

Where do you need hupomone,

steady endurance,

in your walk with God right now?`,
    lifeApplication: `This week, practice endurance in one small area.

Choose one thing God has made clear to you.

Keep doing it.

Even if it feels slow.

Even if no one notices.

Even if it costs comfort.

Pray instead of quitting.

Obey instead of drifting.

Trust instead of shrinking back.

Endurance is built before the crisis,

not during it.`,
    prayer: `Lord,

Give me the patience of the saints.

Teach me to endure without bitterness.

Teach me to pray without giving up.

Teach me to obey when it costs something.

Strengthen my faith in Jesus.

Write Your commandments in my heart.

Make me steady,

faithful,

and ready to stand with You.

Amen.`,
  },
  'the-commandments-of-god': {
    openingThought: `Revelation does not describe God's final people vaguely.

It gives clear marks of their character.

They have patience.

They have faith.

And they keep the commandments of God.

That phrase matters.

In a world where many people separate love from obedience,

Revelation brings them back together.

Obedience is not the way we earn God's love.

It is the way love becomes visible.

God's commandments are not chains.

They reveal His character.

They show what love looks like toward God and toward others.

The final issue is not whether people talk about God.

It is whether they trust Him enough to obey.`,
    scriptureRef: 'Revelation 14:12',
    scriptureQuote: `"Here is the patience of the saints:

here are they that keep the commandments of God,

and the faith of Jesus."`,
    scriptureSecondaryRef: 'Revelation 12:17',
    scriptureSecondaryQuote: `"And the dragon was wroth with the woman,

and went to make war with the remnant of her seed,

which keep the commandments of God,

and have the testimony of Jesus Christ."`,
    scriptureAfterSecondary: `Ecclesiastes 12:13

"Let us hear the conclusion of the whole matter:

Fear God,

and keep his commandments:

for this is the whole duty of man."

John 14:15

"If ye love me,

keep my commandments."

Revelation's faithful people are not lawless.

They are not legalistic either.

They love Christ,

and that love produces obedience.`,
    teachingPoints: [
      `God's commandments reveal His character.
They show what love, loyalty, worship, truth, purity, and justice look like.`,
      `Obedience does not save us.
Only Christ saves. But saving faith does not produce rebellion against God.`,
      `God writes His law in the heart.
The new covenant does not erase obedience. It moves obedience inward.`,
      `Revelation identifies the faithful by commandment keeping.
This matters because the final conflict centers on worship and authority.`,
      `True obedience is relational.
It flows from love, trust, and surrender, not from fear or pride.`,
    ],
    studyInsight: {
      placement: 'after_teaching',
      title: 'Study Insight',
      body: `The PDF source emphasizes that God's law must be more than posted externally.

It must be written internally.

A commandment can be displayed on a wall

and still be absent from the heart.

God's desire is deeper.

He says He will put His law in the mind

and write it in the heart.

That means obedience is not forced from the outside.

It grows from a changed life within.

This is why force can never produce true righteousness.

Force creates fear.

Force creates hypocrisy.

But the Spirit creates love,

conviction,

and willing obedience.

The commandments of God are not merely rules to defend.

They are truth to be lived.`,
    },
    reflectPrompt: `How do you think about God's commandments?

As restrictions?

As protection?

As a burden?

As a reflection of His love?

Is there a command of God you agree with in theory,

but resist in practice?

What would change if obedience became your response to love,

not your attempt to earn acceptance?`,
    lifeApplication: `This week, choose one command of God and look at it differently.

Do not ask only,

What does this forbid?

Ask,

What does this reveal about God?

What does this protect?

How does this teach me to love?

Then take one practical step of obedience.

Not to earn salvation.

But because you trust the One who gave the command.`,
    prayer: `Lord,

Write Your law in my heart.

Teach me to see Your commandments as good,

wise,

and loving.

Deliver me from legalism.

Deliver me from rebellion.

Give me a heart that trusts You enough to obey.

Let my life show love,

not only in words,

but in faithful action.

Amen.`,
  },
  'the-faith-of-jesus': {
    openingThought: `Revelation 14:12 holds two truths together.

The commandments of God.

And the faith of Jesus.

If we separate them,

we fall into trouble.

Commandments without faith become legalism.

Faith without obedience becomes empty profession.

God's final people are not described as people who choose one and reject the other.

They keep God's commandments,

and they hold to the faith of Jesus.

This is the balance the final message restores.

Not law without grace.

Not grace without obedience.

Christ at the center,

and a life shaped by trust in Him.`,
    scriptureRef: 'Revelation 14:12',
    scriptureQuote: `"Here is the patience of the saints:

here are they that keep the commandments of God,

and the faith of Jesus."`,
    scriptureSecondaryRef: 'Ephesians 2:8 to 10',
    scriptureSecondaryQuote: `"For by grace are ye saved through faith;

and that not of yourselves:

it is the gift of God:

Not of works,

lest any man should boast.

For we are his workmanship,

created in Christ Jesus unto good works."`,
    scriptureAfterSecondary: `James 2:17

"Even so faith,

if it hath not works,

is dead,

being alone."

Galatians 2:20

"I live by the faith of the Son of God,

who loved me,

and gave himself for me."

Faith saves.

Faith works.

Faith follows.`,
    teachingPoints: [
      `We are saved by grace through faith.
Salvation is God's gift, not our achievement.`,
      `Good works are the fruit of salvation.
They do not purchase salvation, but they reveal that Christ is working in us.`,
      `Legalism trusts obedience apart from Christ.
It may look religious, but it centers the self.`,
      `Cheap grace claims faith while resisting obedience.
It wants Christ's pardon without Christ's lordship.`,
      `The faith of Jesus keeps the balance.
Trust in Christ leads to a life shaped by Christ.`,
    ],
    studyInsight: {
      placement: 'after_teaching',
      title: 'Study Insight',
      body: `The phrase "**faith of Jesus**" can be understood in two closely connected ways.

It can mean faith in Jesus.

And it can mean the faithfulness of Jesus.

Both matter.

We trust in Jesus.

And we receive the kind of faithful life that Jesus lived.

This keeps us out of both ditches.

One ditch says,

My obedience saves me.

The other ditch says,

Obedience does not matter.

The gospel says something better.

Christ saves completely,

and the faith that receives Him does not remain dead.

It becomes active.

It loves.

It obeys.

It endures.`,
    },
    reflectPrompt: `Which ditch are you more tempted toward?

Trying to prove yourself by obedience?

Or using grace as a reason to avoid obedience?

Do you trust Christ enough to rest in His salvation,

and follow His commands?

Where does your faith need to become more active?`,
    lifeApplication: `This week, examine your faith honestly.

Choose one area where you say you believe,

but your actions have not followed.

Do not condemn yourself.

Bring it to Christ.

Ask Him for faith that moves.

Faith that obeys.

Faith that loves.

Then take one clear step.

Not to earn God's favor,

but because you already have His grace.`,
    prayer: `Lord,

Keep me from legalism.

Keep me from empty profession.

Teach me the faith of Jesus.

Help me rest in what Christ has done,

and walk in what Christ commands.

Let my obedience come from trust,

not pride.

Let my faith be alive,

not merely spoken.

Make me faithful through Jesus.

Amen.`,
  },
  'the-remnant-of-her-seed': {
    openingThought: `Revelation shows a dragon at war.

But not with everyone in the same way.

He is angry with a woman.

Then with the remnant of her seed.

That phrase matters.

The remnant is not introduced as a random group.

They belong to the woman.

They are connected to Christ.

They keep God's commandments.

They have the testimony of Jesus.

In prophecy, the final conflict is not only about systems of false worship.

It is also about a people who remain faithful to Christ when pressure rises.

The remnant is not defined by pride.

It is defined by loyalty.`,
    scriptureRef: 'Revelation 12:17',
    scriptureQuote: `"And the dragon was wroth with the woman,

and went to make war with the remnant of her seed,

which keep the commandments of God,

and have the testimony of Jesus Christ."`,
    scriptureSecondaryRef: 'Genesis 3:15',
    scriptureSecondaryQuote: `"And I will put enmity between thee and the woman,

and between thy seed and her seed;

it shall bruise thy head,

and thou shalt bruise his heel."`,
    scriptureAfterSecondary: `Galatians 3:16

"Now to Abraham and his seed were the promises made.

He saith not,

And to seeds,

as of many;

but as of one,

And to thy seed,

which is Christ."

Galatians 3:29

"And if ye be Christ's,

then are ye Abraham's seed,

and heirs according to the promise."

The remnant belongs to Christ.

They are His people,

formed by faith,

identified by loyalty,

and marked by obedience.`,
    teachingPoints: [
      `The seed of the woman points ultimately to Christ.
Genesis 3:15 begins the great conflict between Christ and the serpent.`,
      `Those who belong to Christ become part of His people.
Galatians says that if we are Christ's, we are Abraham's seed.`,
      `The remnant is connected to the woman of Revelation 12.
This points to God's faithful people through history.`,
      `The remnant keeps the commandments of God.
Their loyalty is visible in obedience.`,
      `The remnant has the testimony of Jesus.
Their witness is centered on Christ and grounded in His Word.`,
    ],
    studyInsight: {
      placement: 'after_teaching',
      title: 'Study Insight',
      body: `The PDF source emphasizes that the final remnant must be understood spiritually and worldwide.

Babylon is symbolic and worldwide.

Her waters are peoples, multitudes, nations, and tongues.

So the people who stand against Babylon are also worldwide.

They are not gathered around one earthly territory.

They are gathered to Christ.

The issue is not ethnicity,

location,

or national identity.

The issue is union with Jesus.

A true Israelite is not merely someone in a land,

but someone who belongs to the Lord.

Christ is the Seed.

Those who are Christ's are counted as His seed.

The remnant is the final visible expression of that loyalty.`,
    },
    reflectPrompt: `What defines your spiritual identity?

Heritage?

Religious label?

Family background?

Or belonging to Christ?

If someone looked at your life,

would they see loyalty to Jesus?

Would they see obedience to God's commandments?

Would they hear the testimony of Jesus?`,
    lifeApplication: `This week, think carefully about what it means to belong to Christ.

Do not define faith only by what you oppose.

Define it by who you follow.

Ask:

Am I Christ's?

Does my life show it?

Does my obedience come from loyalty to Him?

Does my witness point people to Jesus?

Choose one way to make your loyalty more visible this week.

Quietly.

Faithfully.

Without pride.`,
    prayer: `Lord,

I want to belong fully to Christ.

Not only in name,

but in life.

Make me faithful when pressure rises.

Write Your commandments in my heart.

Give me the testimony of Jesus.

Keep me from pride,

confusion,

and compromise.

Let my life show that I am Yours.

Amen.`,
  },
  'the-144000': {
    openingThought: `Revelation asks a question.

Who shall be able to stand?

Not who can talk about prophecy.

Not who can explain every symbol.

Not who can win an argument.

Who can stand?

That is the question behind the 144,000.

They are shown in connection with crisis,

sealing,

worship,

and victory.

They stand when the world is divided.

They stand when false worship is enforced.

They stand because they belong fully to God.

The 144,000 are not introduced to feed speculation.

They are shown to reveal the kind of people God will have at the end.

Sealed.

Faithful.

Victorious.

Standing with the Lamb.`,
    scriptureRef: 'Revelation 7:3',
    scriptureQuote: `"Hurt not the earth,

neither the sea,

nor the trees,

till we have sealed the servants of our God in their foreheads."`,
    scriptureSecondaryRef: 'Revelation 14:1',
    scriptureSecondaryQuote: `"And I looked,

and, lo,

a Lamb stood on the mount Sion,

and with him an hundred forty and four thousand,

having his Father's name written in their foreheads."`,
    scriptureAfterSecondary: `Revelation 14:4 to 5

"These are they which follow the Lamb whithersoever he goeth.

These were redeemed from among men,

being the firstfruits unto God and to the Lamb.

And in their mouth was found no guile:

for they are without fault before the throne of God."

Revelation 15:2 to 3

"And I saw as it were a sea of glass mingled with fire:

and them that had gotten the victory over the beast,

and over his image,

and over his mark,

and over the number of his name,

stand on the sea of glass,

having the harps of God."

The 144,000 are connected with sealing,

character,

victory,

and worship.

They stand because they follow the Lamb.`,
    teachingPoints: [
      `The 144,000 are sealed for protection.
Revelation 7 shows them sealed before the winds of final strife are released.`,
      `They stand in contrast to those who receive the mark of the beast.
One group has the Father's name in the forehead. The other receives the beast's mark.`,
      `Their character reflects loyalty to Christ.
They follow the Lamb wherever He goes.`,
      `They overcome the beast, his image, his mark, and the number of his name.
Their victory is not political. It is spiritual.`,
      `They accepted the three angels' messages.
Their song reflects fear of God, glory to His name, and worship of the Creator.`,
    ],
    studyInsight: {
      placement: 'after_teaching',
      title: 'Study Insight',
      body: `Revelation places the 144,000 in key moments.

Before the final winds are released,

they are sealed.

After the final crisis,

they stand victorious.

That order matters.

God prepares His people before the crisis fully breaks.

The seal is placed in the forehead,

the place of conviction,

understanding,

and settled loyalty.

This is not surface religion.

It is truth settled deeply in the mind and heart.

The 144,000 are not strong because they are impressive.

They are strong because they are surrendered.

They follow the Lamb.

They do not follow the crowd.

They do not follow the beast.

They do not follow convenience.

They follow the Lamb.`,
    },
    reflectPrompt: `When pressure rises,

what usually guides your decisions?

Conviction?

Fear?

Convenience?

Approval?

Truth?

Is your faith being settled deeply,

or only carried loosely?

What would it mean for God's name,

His character,

His authority,

and His truth

to be written in your mind?`,
    lifeApplication: `This week, practice settled loyalty.

Choose one truth God has already made clear to you.

Do not delay it.

Do not treat it casually.

Live it.

Even if it is small.

Even if no one notices.

Ask:

Am I following the Lamb here?

Faithfulness in the final crisis is formed through faithfulness now.`,
    prayer: `Lord,

Seal my heart and mind with Your truth.

Teach me to follow the Lamb wherever He leads.

Make my loyalty deeper than emotion,

stronger than pressure,

and clearer than convenience.

Prepare me to stand,

not in my own strength,

but in Christ.

Write Your character in me.

Amen.`,
  },
  'the-testimony-of-jesus': {
    openingThought: `God has never left His people without guidance.

Before great moments in sacred history,

He sent light.

Before the flood,

Noah warned the world.

Before the Exodus,

Moses was raised up.

Before the first coming of Christ,

John prepared the way.

Before the final crisis,

Revelation says God's final people have the testimony of Jesus.

That phrase matters.

It is not a decorative detail.

It identifies a people who are guided by Christ's witness,

grounded in Scripture,

and prepared for His return.

The testimony of Jesus does not replace the Bible.

It points back to the Bible,

exalts Christ,

and calls people to be ready.`,
    scriptureRef: 'Revelation 12:17',
    scriptureQuote: `"And the dragon was wroth with the woman,

and went to make war with the remnant of her seed,

which keep the commandments of God,

and have the testimony of Jesus Christ."`,
    scriptureSecondaryRef: 'Revelation 19:10',
    scriptureSecondaryQuote: `"For the testimony of Jesus is the spirit of prophecy."`,
    scriptureAfterSecondary: `Revelation 22:8 to 9

"And I John saw these things,

and heard them.

And when I had heard and seen,

I fell down to worship before the feet of the angel which shewed me these things.

Then saith he unto me,

See thou do it not:

for I am thy fellowservant,

and of thy brethren the prophets."

1 Thessalonians 5:20 to 21

"Despise not prophesyings.

Prove all things;

hold fast that which is good."

The testimony of Jesus is connected with the spirit of prophecy.

But Scripture also commands us to test everything.

Truth is never afraid of examination.`,
    teachingPoints: [
      `The remnant has the testimony of Jesus.
Revelation connects God's final people with Christ's prophetic witness.`,
      `The testimony of Jesus is the spirit of prophecy.
This points to God's work of guiding His people through prophetic testimony.`,
      `Prophetic guidance must never replace Scripture.
The Bible remains the supreme test of truth.`,
      `God raises up messengers to prepare people for decisive moments.
John the Baptist prepared people for Christ's first coming.`,
      `True prophetic witness exalts Christ.
It does not draw attention to itself, but points people to the Word, repentance, obedience, and readiness.`,
    ],
    studyInsight: {
      placement: 'after_teaching',
      title: 'Study Insight',
      body: `John the Baptist helps us understand the pattern.

He was not the Christ.

He was not the center.

He was a voice preparing the way.

His work was to turn hearts back to God,

call people to repentance,

and point them to the Lamb.

That is the purpose of true prophetic witness.

It prepares.

It restores.

It warns.

It points to Jesus.

Revelation says the final remnant has the testimony of Jesus.

That means God's last-day people are not left without guidance.

But every claim to spiritual guidance must be tested.

By Scripture.

By Christ.

By its fruit.

By whether it leads people into truth,

obedience,

humility,

and readiness for the Lord.`,
    },
    reflectPrompt: `How do you respond when God sends correction?

Do you test it by Scripture,

or reject it because it challenges you?

Are you willing to receive guidance

if it leads you closer to Christ?

Do you want truth only when it comforts you,

or also when it prepares you?`,
    lifeApplication: `This week, practice spiritual testing.

Do not believe every claim.

Do not reject every claim.

Test carefully.

Ask:

Does this agree with Scripture?

Does this exalt Christ?

Does this call me to obedience?

Does this produce humility?

Does this prepare me for His coming?

Hold fast what is good.

Let go of what is false.`,
    prayer: `Lord,

Teach me to recognize Your voice.

Keep me from deception.

Keep me from pride.

Give me a heart that tests all things by Scripture.

Help me receive what leads me closer to Christ.

Prepare me for Your coming,

and make my life faithful to the testimony of Jesus.

Amen.`,
  },
  'the-harvest-of-the-earth-is-ripe': {
    openingThought: `Revelation 14 does not end with endless delay.

It ends with harvest.

Messages are given.

Choices are made.

Characters are ripened.

Then Christ comes.

The three angels' messages are not merely information to study.

They are messages that separate the world.

One group worships God and receives His seal.

Another worships the beast and receives his mark.

One group is pictured as harvest.

The other as grapes for the winepress.

This is not because God is careless.

It is because truth brings decision.

And decision forms character.

By the time the harvest comes,

people have shown where their loyalty rests.`,
    scriptureRef: 'Revelation 14:14 to 16',
    scriptureQuote: `"And I looked,

and behold a white cloud,

and upon the cloud one sat like unto the Son of man,

having on his head a golden crown,

and in his hand a sharp sickle.

And another angel came out of the temple,

crying with a loud voice to him that sat on the cloud,

Thrust in thy sickle,

and reap:

for the time is come for thee to reap;

for the harvest of the earth is ripe."`,
    scriptureSecondaryRef: 'Revelation 14:18 to 19',
    scriptureSecondaryQuote: `"And another angel came out from the altar,

which had power over fire;

and cried with a loud cry to him that had the sharp sickle,

saying,

Thrust in thy sharp sickle,

and gather the clusters of the vine of the earth;

for her grapes are fully ripe."`,
    scriptureAfterSecondary: `Matthew 13:30

"Let both grow together until the harvest:

and in the time of harvest I will say to the reapers,

Gather ye together first the tares,

and bind them in bundles to burn them:

but gather the wheat into my barn."

The harvest comes when character is ripe.

The question is not only what we believe,

but what we are becoming.`,
    teachingPoints: [
      `Revelation 14 moves from message to harvest.
The three angels' messages prepare the world for final decision.`,
      `The world is divided into two groups.
One group receives God's seal. The other receives the mark of the beast.`,
      `The righteous are pictured as harvest.
They are gathered to Christ.`,
      `The wicked are pictured as grapes.
They are gathered to the winepress of God's wrath.`,
      `Character ripens over time.
Repeated choices either soften the heart toward God or harden it against Him.`,
    ],
    studyInsight: {
      placement: 'after_teaching',
      title: 'Study Insight',
      body: `The PDF source connects the final harvest with the latter rain.

In ancient Israel,

the latter rain helped ripen the grain before harvest.

In prophecy,

the Holy Spirit prepares God's people for the final harvest.

This is not emotional excitement only.

It is spiritual ripening.

The three angels' messages go to the world.

The Spirit gives power.

Truth is made clear.

People respond.

Some are softened.

Others are hardened.

Like Pharaoh before Moses,

the same message can lead to different outcomes depending on the heart.

The final harvest reveals what repeated choices have formed.`,
    },
    reflectPrompt: `What direction is your character moving?

Toward surrender,

or resistance?

Toward obedience,

or delay?

Toward Christ,

or self?

Are your daily choices ripening you for the harvest of Christ,

or for something else?`,
    lifeApplication: `This week, pay attention to repeated choices.

Not just big decisions.

Small ones.

What you watch.

What you excuse.

What you obey.

What you ignore.

What you return to.

Ask:

What is this forming in me?

Then choose one pattern to surrender to Christ.

Character is not formed in one moment.

It is formed by repeated response to truth.`,
    prayer: `Lord,

Prepare me for Your harvest.

Let Your Spirit ripen what is good in me.

Soften what has become hard.

Remove what resists You.

Teach me to respond to truth now,

not later.

Make me faithful,

settled,

and ready for Your coming.

Amen.`,
  },
  'come-out-of-her-my-people': {
    openingThought: `The final call is not only a warning.

It is an invitation.

Come out of her, my people.

Those words reveal something important about God.

He still has people in places of confusion.

People who love Him.

People who have not yet seen everything clearly.

People who belong to Him,

but must now respond to His voice.

God does not call them out because He hates them.

He calls them out because they are His.

Babylon falls because she rejects truth.

But God's people are called before the plagues fall.

Mercy speaks before judgment comes.

That is the heart of the final message.`,
    scriptureRef: 'Revelation 18:1 to 4',
    scriptureQuote: `"And after these things I saw another angel come down from heaven,

having great power;

and the earth was lightened with his glory.

And he cried mightily with a strong voice,

saying,

Babylon the great is fallen,

is fallen.

And I heard another voice from heaven,

saying,

Come out of her,

my people,

that ye be not partakers of her sins,

and that ye receive not of her plagues."`,
    scriptureSecondaryRef: 'John 10:27',
    scriptureSecondaryQuote: `"My sheep hear my voice,

and I know them,

and they follow me."`,
    scriptureAfterSecondary: `Revelation 14:12

"Here is the patience of the saints:

here are they that keep the commandments of God,

and the faith of Jesus."

The final call is personal.

God speaks to His people.

The question is whether they will hear and follow.`,
    teachingPoints: [
      `God still has people in Babylon.
The call says "my people," which shows His mercy and patience.`,
      `Coming out means leaving confusion and false worship.
It is not merely physical movement. It is spiritual separation.`,
      `Babylon falls because she rejects the first angel's message.
She rejects the everlasting gospel, true worship, judgment, and obedience.`,
      `The final call comes before the plagues.
God warns before judgment falls.`,
      `The faithful are identified by obedience and faith in Jesus.
They keep God's commandments and hold to the faith of Jesus.`,
    ],
    studyInsight: {
      placement: 'after_teaching',
      title: 'Study Insight',
      body: `The PDF source reviews the whole message here.

The everlasting gospel.

Fear God.

Give Him glory.

The hour of judgment.

Worship the Creator.

Babylon's fall.

The warning against the beast,

his image,

his mark,

and his number.

The patience of the saints.

The commandments of God.

The faith of Jesus.

The testimony of Jesus.

All of it leads to a call.

Come out.

This is not only about leaving error.

It is about coming fully to Christ.

The final message does not end with information.

It ends with decision.

Where will you stand?

Whose voice will you follow?

What will you leave behind because Jesus is calling?`,
    },
    reflectPrompt: `Where might God be calling you out of confusion?

A belief?

A habit?

A system?

A compromise?

A fear?

A delay?

Do you hear Christ's voice clearly,

or have other voices become louder?

What would obedience look like now?

Not someday.

Now.`,
    lifeApplication: `This week, make the call personal.

Do not only study Babylon as a symbol.

Ask what God is calling you to leave.

Then take one step.

A clear step.

A costly step if needed.

A faithful step.

It may be a belief you must test.

A practice you must surrender.

A habit you must break.

A truth you must obey.

Do not wait until the call feels easy.

Follow the voice of Christ.`,
    prayer: `Lord,

Help me hear Your voice.

Call me out of confusion.

Call me out of compromise.

Call me out of fear.

Lead me fully to Christ.

Give me courage to obey what You make clear.

Keep me among those who have the patience of the saints,

who keep Your commandments,

and hold to the faith of Jesus.

Amen.`,
    seriesCompleteScreen: {
      title: 'Study complete',
      message: "You have completed The Three Angels' Messages.",
      primaryCta: { label: 'Review study', href: '/study-library/three-angels-messages' },
      secondaryCta: { label: 'Explore more prophecy studies', href: '/paths/prophecy' },
    },
  },
  ...godIsLoveSeriesLessonLibrary,
  ...theGodWhoWantsToBeKnownSeriesLessonLibrary,
  ...madeForMoreSeriesLessonLibrary,
  ...warInHeavenSeriesLessonLibrary,
  ...fallOfHumanitySeriesLessonLibrary,
  ...thePromiseKeptSeriesLessonLibrary,
  ...theWayBackToGodSeriesLessonLibrary,
  ...whatHappensWhenWeDieSeriesLessonLibrary,
  ...whenDeathDiedSeriesLessonLibrary,
  ...madeNewInChristSeriesLessonLibrary,
  ...theLawOfLoveSeriesLessonLibrary,
  ...theRestGodGivesSeriesLessonLibrary,
  ...theLifeThatGivesSeriesLessonLibrary,
  ...designedToThriveSeriesLessonLibrary,
  ...buriedAndRaisedSeriesLessonLibrary,
  ...builtToBelongSeriesLessonLibrary,
  ...powerUnderLoveSeriesLessonLibrary,
  ...faithfulInTheWildernessSeriesLessonLibrary,
  ...theFaithfulWitnessSeriesLessonLibrary,
  ...theDayOfAtonementSeriesLessonLibrary,
  ...theFirstAngelsMessageSeriesLessonLibrary,
  ...theSecondAngelsMessageSeriesLessonLibrary,
  ...theThirdAngelsMessageSeriesLessonLibrary,
  ...theSecondComingSeriesLessonLibrary,
  ...theMillenniumSeriesLessonLibrary,
  ...theEndOfEvilSeriesLessonLibrary,
  ...theWorldLoveRestoresSeriesLessonLibrary,
  ...whenHeavenBrokeOriginOfEvilSeriesLessonLibrary,
  ...whyDoesGodAllowSufferingSeriesLessonLibrary,
  ...deathHopeSeriesLessonLibrary,
  _fallback: {
    openingThought: 'Approach this passage slowly. Let the text set the terms before you draw conclusions.',
    scriptureRef: 'Scripture',
    scriptureQuote:
      'Your word is a lamp to my feet and a light to my path. I have sworn an oath and confirmed it, to keep your righteous rules.',
    teachingPoints: [
      'Observation comes before interpretation: note repeated words, contrasts, and context.',
      'Theology and application should grow out of what the passage actually says.',
      'Original-language insights serve understanding, not speculation.',
    ],
    reflectPrompt: 'What truth in this passage most challenges your assumptions?',
    lifeApplication: 'Choose one response you can practice in the next seven days.',
    prayer: 'Lord, give me a quiet mind, a humble heart, and a willing spirit as I respond to your Word.',
  },
}

const { _fallback: libraryFallback, ...libraryLessons } = libraryRaw
const library: Record<string, LessonReaderContent> = {
  ...enrichLessonLibrary(libraryLessons),
  _fallback: libraryFallback,
}

/**
 * Slug → reader payload for every authored lesson (excludes `_fallback`).
 * Used by `npm run sync:supabase:reader` to push `lib/lesson-content.ts` into `public.lessons.reader_content`.
 */
export function getLessonReaderContentLibraryForSync(): Record<string, LessonReaderContent> {
  const out: Record<string, LessonReaderContent> = {}
  for (const [key, value] of Object.entries(library)) {
    if (key === '_fallback') continue
    out[key] = value
  }
  return out
}

function parseSeriesCompleteScreen(raw: unknown): SeriesCompleteScreenCopy | undefined {
  if (raw == null || typeof raw !== 'object') return undefined
  const o = raw as Record<string, unknown>
  if (typeof o.title !== 'string' || typeof o.message !== 'string') return undefined
  const p = o.primaryCta
  const s = o.secondaryCta
  if (typeof p !== 'object' || p === null || typeof s !== 'object' || s === null) return undefined
  const pr = p as Record<string, unknown>
  const sr = s as Record<string, unknown>
  if (typeof pr.label !== 'string' || typeof pr.href !== 'string') return undefined
  if (typeof sr.label !== 'string' || typeof sr.href !== 'string') return undefined
  return {
    title: o.title,
    message: o.message,
    primaryCta: { label: pr.label, href: pr.href },
    secondaryCta: { label: sr.label, href: sr.href },
  }
}

function parseWordInsight(raw: unknown): WordInsight | null {
  if (raw == null || typeof raw !== 'object') return null
  const o = raw as Record<string, unknown>
  if (
    typeof o.surface !== 'string' ||
    typeof o.lemma !== 'string' ||
    typeof o.transliteration !== 'string' ||
    typeof o.meaning !== 'string' ||
    typeof o.note !== 'string'
  ) {
    return null
  }
  const insight: WordInsight = {
    surface: o.surface,
    lemma: o.lemma,
    transliteration: o.transliteration,
    meaning: o.meaning,
    note: o.note,
  }
  if (typeof o.strongs === 'string') insight.strongs = o.strongs
  if (typeof o.explanation === 'string') insight.explanation = o.explanation
  if (typeof o.language === 'string') insight.language = o.language
  if (typeof o.reference === 'string') insight.reference = o.reference
  return insight
}

const STUDY_INSIGHT_VARIANTS = new Set<StudyInsightVariant>([
  'prophecy_lens',
  'word_insight',
  'historical_context',
  'scripture_connection',
  'doctrine_clarity',
  'christ_connection',
])

function parseStudyInsightVariant(raw: unknown): StudyInsightVariant | undefined {
  if (typeof raw !== 'string') return undefined
  return STUDY_INSIGHT_VARIANTS.has(raw as StudyInsightVariant) ? (raw as StudyInsightVariant) : undefined
}

function parseLessonQuiz(raw: unknown): LessonQuizPayload | undefined {
  if (raw == null || typeof raw !== 'object') return undefined
  const o = raw as Record<string, unknown>
  const st = o.settings
  if (typeof st !== 'object' || st === null) return undefined
  const s = st as Record<string, unknown>
  const quizRequired = typeof s.quizRequired === 'boolean' ? s.quizRequired : false
  const passingScoreRaw = typeof s.passingScore === 'number' ? s.passingScore : 70
  const passingScore = Math.min(100, Math.max(0, Math.round(passingScoreRaw)))
  const allowRetake = typeof s.allowRetake === 'boolean' ? s.allowRetake : true

  if (!Array.isArray(o.questions) || o.questions.length === 0) return undefined
  const questions: LessonQuizQuestion[] = []
  for (const q of o.questions) {
    if (q == null || typeof q !== 'object') continue
    const qr = q as Record<string, unknown>
    if (typeof qr.prompt !== 'string' || !qr.prompt.trim()) continue
    const id =
      typeof qr.id === 'string' && qr.id.trim()
        ? qr.id.trim()
        : `quiz-q-${questions.length + 1}`

    const kind = qr.kind
    if (kind === 'reflection') {
      const explanation = typeof qr.explanation === 'string' ? qr.explanation : undefined
      questions.push({
        id,
        kind: 'reflection',
        prompt: qr.prompt.trim(),
        ...(explanation !== undefined ? { explanation } : {}),
      })
      continue
    }

    const opts = qr.options
    if (!Array.isArray(opts) || opts.length !== 4 || !opts.every((x) => typeof x === 'string')) continue
    const optTuple = opts as [string, string, string, string]

    if (kind === 'multi' || Array.isArray(qr.correctIndices)) {
      const rawIdx = qr.correctIndices
      if (!Array.isArray(rawIdx) || rawIdx.length === 0) continue
      const idxs: number[] = []
      for (const x of rawIdx) {
        if (typeof x !== 'number' || x !== Math.floor(x) || x < 0 || x > 3) continue
        idxs.push(x)
      }
      const uniq = [...new Set(idxs)].sort((a, b) => a - b)
      if (uniq.length === 0) continue
      questions.push({
        id,
        kind: 'multi',
        prompt: qr.prompt.trim(),
        options: optTuple,
        correctIndices: uniq as [number, ...number[]],
      })
      continue
    }

    const ci = qr.correctIndex
    if (ci !== 0 && ci !== 1 && ci !== 2 && ci !== 3) continue
    const explanation = typeof qr.explanation === 'string' && qr.explanation.trim() ? qr.explanation.trim() : undefined
    questions.push({
      id,
      prompt: qr.prompt.trim(),
      options: optTuple,
      correctIndex: ci,
      ...(explanation ? { explanation } : {}),
    })
  }
  if (!questions.length) return undefined

  const payload: LessonQuizPayload = {
    settings: { quizRequired, passingScore, allowRetake },
    questions,
  }
  if (typeof o.eyebrow === 'string' && o.eyebrow.trim()) payload.eyebrow = o.eyebrow.trim()
  if (typeof o.title === 'string' && o.title.trim()) payload.title = o.title.trim()
  if (typeof o.description === 'string' && o.description.trim()) payload.description = o.description.trim()
  return payload
}

/**
 * Sentinel stored in `lessons.reader_content` while a lesson shell exists without authored reader JSON yet.
 * Keeps Supabase lessons from falling through to generic `_fallback` copy.
 */
export function isDraftShellReaderContent(raw: unknown): boolean {
  if (raw == null || typeof raw !== 'object') return false
  return (raw as Record<string, unknown>).draftShell === true
}

/**
 * Parse `lessons.reader_content` from Supabase. Returns null if shape is invalid so the UI can fall back.
 */
export function parseLessonReaderContent(raw: unknown): LessonReaderContent | null {
  if (raw == null || typeof raw !== 'object') return null
  const r = raw as Record<string, unknown>
  const req = (k: string) => (typeof r[k] === 'string' ? (r[k] as string) : null)
  const openingThought = req('openingThought')
  const scriptureRef = req('scriptureRef')
  const scriptureQuote = req('scriptureQuote')
  const reflectPrompt = req('reflectPrompt')
  const lifeApplication = req('lifeApplication')
  const prayer = typeof r.prayer === 'string' ? r.prayer : null
  if (
    !openingThought ||
    !scriptureRef ||
    !scriptureQuote ||
    !reflectPrompt ||
    !lifeApplication ||
    prayer === null
  ) {
    return null
  }
  if (!Array.isArray(r.teachingPoints) || !r.teachingPoints.every((x) => typeof x === 'string')) {
    return null
  }
  const teachingPoints = r.teachingPoints as string[]

  let wordStudy: LessonReaderContent['wordStudy']
  const ws = r.wordStudy
  if (ws !== undefined && ws !== null) {
    if (typeof ws !== 'object') return null
    const w = ws as Record<string, unknown>
    if (
      typeof w.surface !== 'string' ||
      typeof w.lemma !== 'string' ||
      typeof w.transliteration !== 'string' ||
      typeof w.meaning !== 'string' ||
      typeof w.strongs !== 'string' ||
      typeof w.note !== 'string'
    ) {
      return null
    }
    wordStudy = {
      surface: w.surface,
      lemma: w.lemma,
      transliteration: w.transliteration,
      meaning: w.meaning,
      strongs: w.strongs,
      note: w.note,
    }
    if (typeof w.reference === 'string' && w.reference.trim()) {
      wordStudy.reference = w.reference.trim()
    }
  }

  const out: LessonReaderContent = {
    openingThought,
    scriptureRef,
    scriptureQuote,
    teachingPoints,
    reflectPrompt,
    lifeApplication,
    prayer,
  }
  if (typeof r.scriptureSecondaryRef === 'string') out.scriptureSecondaryRef = r.scriptureSecondaryRef
  if (typeof r.scriptureSecondaryQuote === 'string') out.scriptureSecondaryQuote = r.scriptureSecondaryQuote
  if (typeof r.scriptureAfterPrimary === 'string') out.scriptureAfterPrimary = r.scriptureAfterPrimary
  if (Array.isArray(r.scriptureAfterPrimaryEmphasisPhrases)) {
    const list = r.scriptureAfterPrimaryEmphasisPhrases.filter((x): x is string => typeof x === 'string')
    if (list.length) out.scriptureAfterPrimaryEmphasisPhrases = list
  }
  if (typeof r.scriptureAfterSecondary === 'string') out.scriptureAfterSecondary = r.scriptureAfterSecondary
  if (Array.isArray(r.scriptureAfterSecondaryEmphasisPhrases)) {
    const list = r.scriptureAfterSecondaryEmphasisPhrases.filter((x): x is string => typeof x === 'string')
    if (list.length) out.scriptureAfterSecondaryEmphasisPhrases = list
  }
  if (wordStudy) out.wordStudy = wordStudy
  if (typeof r.wordStudyFullStep === 'boolean') out.wordStudyFullStep = r.wordStudyFullStep
  if (Array.isArray(r.wordStudyInsights)) {
    const list = r.wordStudyInsights.map(parseWordInsight).filter((x): x is WordInsight => x != null)
    if (list.length) out.wordStudyInsights = list
  }
  if (Array.isArray(r.scriptureWordInsights)) {
    const list = r.scriptureWordInsights.map(parseWordInsight).filter((x): x is WordInsight => x != null)
    if (list.length) out.scriptureWordInsights = list
  }
  if (Array.isArray(r.teachingWordInsights)) {
    const tw: { pointIndex: number; insights: WordInsight[] }[] = []
    for (const row of r.teachingWordInsights) {
      if (typeof row !== 'object' || row === null) continue
      const rr = row as Record<string, unknown>
      if (typeof rr.pointIndex !== 'number' || !Number.isInteger(rr.pointIndex)) continue
      if (!Array.isArray(rr.insights)) continue
      const insights = rr.insights.map(parseWordInsight).filter((x): x is WordInsight => x != null)
      if (insights.length) tw.push({ pointIndex: rr.pointIndex, insights })
    }
    if (tw.length) out.teachingWordInsights = tw
  }
  const si = r.studyInsight
  if (si != null && typeof si === 'object') {
    const s = si as Record<string, unknown>
    if (typeof s.body === 'string' && s.body.trim()) {
      out.studyInsight = { body: s.body.trim() }
      if (typeof s.title === 'string') out.studyInsight.title = s.title
      if (s.placement === 'after_scripture' || s.placement === 'after_teaching') {
        out.studyInsight.placement = s.placement
      }
      const variant = parseStudyInsightVariant(s.variant)
      if (variant) out.studyInsight.variant = variant
    }
  }
  if (Array.isArray(r.scriptureChain)) {
    const chain = r.scriptureChain
      .map((x) => {
        if (x == null || typeof x !== 'object') return null
        const o = x as Record<string, unknown>
        return typeof o.reference === 'string' && o.reference.trim() ? { reference: o.reference.trim() } : null
      })
      .filter((x): x is { reference: string } => x != null)
    if (chain.length) out.scriptureChain = chain
  }
  if (Array.isArray(r.scriptureSupplementBlocks) && r.scriptureSupplementBlocks.length > 0) {
    out.scriptureSupplementBlocks = r.scriptureSupplementBlocks as LessonContentBlock[]
  }
  if (Array.isArray(r.afterTeachingBlocks) && r.afterTeachingBlocks.length > 0) {
    out.afterTeachingBlocks = r.afterTeachingBlocks as LessonContentBlock[]
  }
  if (Array.isArray(r.studyInsightBlocks) && r.studyInsightBlocks.length > 0) {
    out.studyInsightBlocks = r.studyInsightBlocks as LessonContentBlock[]
  }
  if (typeof r.completionSummary === 'string') out.completionSummary = r.completionSummary
  if (typeof r.forwardQuestion === 'string') out.forwardQuestion = r.forwardQuestion
  const seriesCompleteScreen = parseSeriesCompleteScreen(r.seriesCompleteScreen)
  if (seriesCompleteScreen) out.seriesCompleteScreen = seriesCompleteScreen
  if (typeof r.wordStudyBeforeStudyInsight === 'boolean') {
    out.wordStudyBeforeStudyInsight = r.wordStudyBeforeStudyInsight
  }
  if (typeof r.wordStudyStepTitle === 'string' && r.wordStudyStepTitle.trim()) {
    out.wordStudyStepTitle = r.wordStudyStepTitle.trim()
  }
  if (typeof r.wordStudyStepIntro === 'string') {
    out.wordStudyStepIntro = r.wordStudyStepIntro
  }
  if (typeof r.lifeApplicationStepTitle === 'string' && r.lifeApplicationStepTitle.trim()) {
    out.lifeApplicationStepTitle = r.lifeApplicationStepTitle.trim()
  }
  if (typeof r.openingThoughtStepTitle === 'string' && r.openingThoughtStepTitle.trim()) {
    out.openingThoughtStepTitle = r.openingThoughtStepTitle.trim()
  }
  if (typeof r.scriptureStepTitle === 'string' && r.scriptureStepTitle.trim()) {
    out.scriptureStepTitle = r.scriptureStepTitle.trim()
  }
  if (typeof r.teachingPointsStepTitle === 'string' && r.teachingPointsStepTitle.trim()) {
    out.teachingPointsStepTitle = r.teachingPointsStepTitle.trim()
  }
  if (typeof r.reflectStepTitle === 'string' && r.reflectStepTitle.trim()) {
    out.reflectStepTitle = r.reflectStepTitle.trim()
  }
  if (typeof r.coreClaim === 'string' && r.coreClaim.trim()) out.coreClaim = r.coreClaim.trim()
  if (typeof r.tensionStepTitle === 'string' && r.tensionStepTitle.trim()) {
    out.tensionStepTitle = r.tensionStepTitle.trim()
  }
  if (typeof r.godsCharacter === 'string' && r.godsCharacter.trim()) {
    out.godsCharacter = r.godsCharacter.trim()
  }
  if (typeof r.godsCharacterStepTitle === 'string' && r.godsCharacterStepTitle.trim()) {
    out.godsCharacterStepTitle = r.godsCharacterStepTitle.trim()
  }
  if (typeof r.keyTension === 'string' && r.keyTension.trim()) out.keyTension = r.keyTension.trim()
  if (typeof r.scriptureTrailHelper === 'string' && r.scriptureTrailHelper.trim()) {
    out.scriptureTrailHelper = r.scriptureTrailHelper.trim()
  }
  if (typeof r.scriptureTrailSummaryTitle === 'string' && r.scriptureTrailSummaryTitle.trim()) {
    out.scriptureTrailSummaryTitle = r.scriptureTrailSummaryTitle.trim()
  }
  if (typeof r.scriptureTrailSummary === 'string' && r.scriptureTrailSummary.trim()) {
    out.scriptureTrailSummary = r.scriptureTrailSummary.trim()
  }
  if (typeof r.reflectPlaceholder === 'string' && r.reflectPlaceholder.trim()) {
    out.reflectPlaceholder = r.reflectPlaceholder.trim()
  }
  if (typeof r.practiceCalloutTitle === 'string' && r.practiceCalloutTitle.trim()) {
    out.practiceCalloutTitle = r.practiceCalloutTitle.trim()
  }
  const parsedQuiz = parseLessonQuiz(r.lessonQuiz)
  if (parsedQuiz) out.lessonQuiz = parsedQuiz
  return out
}

export function getLessonReaderContent(lessonSlug: string): LessonReaderContent {
  return library[lessonSlug] ?? library._fallback
}

/** Deeper-only fields that may be missing from older Supabase `reader_content` rows. */
const DEEPER_READER_FIELD_KEYS = [
  'openingThoughtStepTitle',
  'scriptureStepTitle',
  'teachingPointsStepTitle',
  'reflectStepTitle',
  'lifeApplicationStepTitle',
  'coreClaim',
  'tensionStepTitle',
  'godsCharacter',
  'godsCharacterStepTitle',
  'keyTension',
  'scriptureTrailHelper',
  'scriptureTrailSummaryTitle',
  'scriptureTrailSummary',
  'reflectPlaceholder',
  'practiceCalloutTitle',
] as const satisfies readonly (keyof LessonReaderContent)[]

/**
 * Prefer catalog `reader_content` when present, but backfill Deeper workflow fields
 * from the bundled library so stale DB JSON does not drop Core Claim and related UI.
 */
export function resolveLessonReaderContent(
  lessonSlug: string,
  catalogContent?: LessonReaderContent,
): LessonReaderContent {
  const bundled = getLessonReaderContent(lessonSlug)
  if (!hasBundledLessonReaderContent(lessonSlug)) {
    return catalogContent ?? bundled
  }
  if (!catalogContent) return bundled

  const out: LessonReaderContent = { ...catalogContent }
  for (const key of DEEPER_READER_FIELD_KEYS) {
    const current = out[key]
    const missing =
      current === undefined ||
      current === null ||
      (typeof current === 'string' && !current.trim())
    if (missing) {
      const fallback = bundled[key]
      if (fallback !== undefined && fallback !== null) {
        ;(out as unknown as Record<string, unknown>)[key] = fallback
      }
    }
  }
  return out
}

/** True when authored reader JSON exists in the local library for this slug (not the generic `_fallback`). */
export function hasBundledLessonReaderContent(lessonSlug: string): boolean {
  if (lessonSlug === '_fallback') return false
  return Object.prototype.hasOwnProperty.call(library, lessonSlug)
}

/** Lesson 1 of “The Bible — God’s Living Word” — for tests and CMS handoff. */
export const lessonABookUnlikeAnyOther = library['a-book-unlike-any-other'] as LessonReaderContent
/** Lesson 2 of “The Bible — God’s Living Word” — for tests and CMS handoff. */
export const lessonHowTheBibleCameToUs = library['how-the-bible-came-to-us'] as LessonReaderContent
/** Lesson 3 of “The Bible — God’s Living Word” — for tests and CMS handoff. */
export const lessonCanTheBibleBeTrusted = library['can-the-bible-be-trusted'] as LessonReaderContent
/** Lesson 4 of “The Bible — God’s Living Word” — for tests and CMS handoff. */
export const lessonHowToReadTheBible = library['how-to-read-the-bible'] as LessonReaderContent
/** Lesson 5 of “The Bible — God’s Living Word” — for tests and CMS handoff. */
export const lessonTheBiblesCentralTheme = library['the-bibles-central-theme'] as LessonReaderContent
/** Lesson 6 of “The Bible — God’s Living Word” — for tests and CMS handoff. */
export const lessonTheBibleAsALivingWord = library['the-bible-as-a-living-word'] as LessonReaderContent
/** Lesson 7 of “The Bible — God’s Living Word” — for tests and CMS handoff. */
export const lessonYourResponse = library['your-response'] as LessonReaderContent
/** Lesson 1 of "The Three Angels' Messages" (handoff / tests). */
export const lessonWhyRevelation14Matters = library['why-revelation-14-matters'] as LessonReaderContent
/** Lesson 2 of "The Three Angels' Messages" (handoff / tests). */
export const lessonTheEverlastingGospel = library['the-everlasting-gospel'] as LessonReaderContent
/** Lesson 3 of "The Three Angels' Messages" (handoff / tests). */
export const lessonWhatItMeansToFearGod = library['what-it-means-to-fear-god'] as LessonReaderContent
/** Lesson 4 of "The Three Angels' Messages" (handoff / tests). */
export const lessonHowToGlorifyGod = library['how-to-glorify-god'] as LessonReaderContent
/** Lesson 5 of "The Three Angels' Messages" (handoff / tests). */
export const lessonTheHourOfGodsJudgment = library['the-hour-of-gods-judgment'] as LessonReaderContent
/** Lesson 6 of "The Three Angels' Messages" (handoff / tests). */
export const lessonTheFoundationOfTrueWorship = library['the-foundation-of-true-worship'] as LessonReaderContent
/** Lesson 7 of "The Three Angels' Messages" (handoff / tests). */
export const lessonMysteryBabylonTheGreat = library['mystery-babylon-the-great'] as LessonReaderContent
/** Lesson 8 of "The Three Angels' Messages" (handoff / tests). */
export const lessonBabylonsAbominableWine = library['babylons-abominable-wine'] as LessonReaderContent
/** Lesson 9 of "The Three Angels' Messages" (handoff / tests). */
export const lessonBabylonsFilthyFornication = library['babylons-filthy-fornication'] as LessonReaderContent
/** Lesson 10 of "The Three Angels' Messages" (handoff / tests). */
export const lessonRevelationsSeaBeast = library['revelations-sea-beast'] as LessonReaderContent
/** Lesson 11 of "The Three Angels' Messages" (handoff / tests). */
export const lessonRevelationsLandBeast = library['revelations-land-beast'] as LessonReaderContent
/** Lesson 12 of "The Three Angels' Messages" (handoff / tests). */
export const lessonTheImageOfTheBeast = library['the-image-of-the-beast'] as LessonReaderContent
/** Lesson 13 of "The Three Angels' Messages" (handoff / tests). Library key: 666-the-number-of-the-beast. */
export const lessonTheNumberOfTheBeast = library['666-the-number-of-the-beast'] as LessonReaderContent
/** Lesson 14 of "The Three Angels' Messages" (handoff / tests). */
export const lessonTheMarkOfTheBeastPart1 = library['the-mark-of-the-beast-part-1'] as LessonReaderContent
/** Lesson 15 of "The Three Angels' Messages" (handoff / tests). */
export const lessonTheMarkOfTheBeastPart2 = library['the-mark-of-the-beast-part-2'] as LessonReaderContent
/** Lesson 16 of "The Three Angels' Messages" (handoff / tests). */
export const lessonTheWineOfGodsWrath = library['the-wine-of-gods-wrath'] as LessonReaderContent
/** Lesson 17 of "The Three Angels' Messages" (handoff / tests). */
export const lessonTheSmokeOfBabylonsTorment = library['the-smoke-of-babylons-torment'] as LessonReaderContent
/** Lesson 18 of "The Three Angels' Messages" (handoff / tests). */
export const lessonThePatienceOfTheSaints = library['the-patience-of-the-saints'] as LessonReaderContent
/** Lesson 19 of "The Three Angels' Messages" (handoff / tests). */
export const lessonTheCommandmentsOfGod = library['the-commandments-of-god'] as LessonReaderContent
/** Lesson 20 of "The Three Angels' Messages" (handoff / tests). */
export const lessonTheFaithOfJesus = library['the-faith-of-jesus'] as LessonReaderContent
/** Lesson 21 of "The Three Angels' Messages" (handoff / tests). */
export const lessonTheRemnantOfHerSeed = library['the-remnant-of-her-seed'] as LessonReaderContent
/** Lesson 22 of "The Three Angels' Messages" (handoff / tests). Library key: the-144000. */
export const lessonThe144000 = library['the-144000'] as LessonReaderContent
/** Lesson 23 of "The Three Angels' Messages" (handoff / tests). Library key: the-testimony-of-jesus. */
export const lessonTheTestimonyOfJesus = library['the-testimony-of-jesus'] as LessonReaderContent
/** Lesson 24 of "The Three Angels' Messages" (handoff / tests). Library key: the-harvest-of-the-earth-is-ripe. */
export const lessonTheHarvestOfTheEarthIsRipe = library['the-harvest-of-the-earth-is-ripe'] as LessonReaderContent
/** Lesson 25 of "The Three Angels' Messages" (handoff / tests). Library key: come-out-of-her-my-people. */
export const lessonComeOutOfHerMyPeople = library['come-out-of-her-my-people'] as LessonReaderContent
