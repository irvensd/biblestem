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

/** Guided reader lessons for "The Day of Atonement" (Foundations). */
export const theDayOfAtonementSeriesLessonLibrary: Record<string, LessonReaderContent> = {
  'sealed-and-opened': {
    openingThought: `God does not hide truth forever.

Sometimes He seals something for a season because the time has not yet come for people to fully understand it.

That is what happened with parts of Daniel's prophecy.

Daniel saw a vision about a long prophetic time period, but he did not fully understand it. The angel told him the vision was for many days in the future.

Later, Daniel was told to shut up the words and seal the book until the time of the end.

But Revelation shows the sealed book opened.

That means God would bring understanding at the right time.

Not for curiosity.

Not for religious flexing.

Not so people could build a prophecy chart and act like they own the universe.

God opens prophecy because He wants His people to know what He is doing and join Him in His mission.`,
    scriptureRef: 'Daniel 12:4',
    scriptureQuote: `But thou, O Daniel, shut up the words, and seal the book, even to the time of the end.

Many shall run to and fro, and knowledge shall be increased.`,
    scriptureAfterPrimary: `Daniel was told to seal the book until the time of the end, when knowledge would increase.`,
    scriptureSecondaryRef: 'Daniel 8:14',
    scriptureSecondaryQuote: 'And he said unto me, Unto two thousand and three hundred days; then shall the sanctuary be cleansed.',
    scriptureAfterSecondary: `Daniel's vision pointed to a long prophetic period connected to the cleansing of the sanctuary.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Daniel 8:26',
        quote: 'Wherefore shut thou up the vision; for it shall be for many days.',
      },
      {
        type: 'scripture',
        reference: 'Daniel 12:9',
        quote: 'Go thy way, Daniel: for the words are closed up and sealed till the time of the end.',
      },
      {
        type: 'scripture',
        reference: 'Revelation 10:2',
        quote: 'And he had in his hand a little book open.',
      },
      {
        type: 'scripture',
        reference: 'Revelation 10:8-9',
        quote: `Go and take the little book which is open in the hand of the angel.

Take it, and eat it up; and it shall make thy belly bitter, but it shall be in thy mouth sweet as honey.`,
      },
      {
        type: 'scripture',
        reference: 'Revelation 10:11',
        quote: 'Thou must prophesy again before many peoples, and nations, and tongues, and kings.',
      },
    ],
    teachingPoints: [
      `1. Daniel's prophecy was sealed for a future time

Daniel was shown a prophecy connected to the cleansing of the sanctuary.

But the angel told him the vision was for many days in the future.

Later, Daniel was told to shut up the words and seal the book until the time of the end.

This means the prophecy was not fully understood in Daniel's day.

God had a specific time when greater understanding would come.`,
      `2. Increased knowledge means Scripture would be searched

Daniel says many would run to and fro, and knowledge would be increased.

This does not mainly mean people would travel more or technology would improve.

In context, it points to people searching through the prophetic Scriptures.

The picture is of serious Bible study.

People would compare Scripture with Scripture and gain clearer understanding of Daniel's sealed prophecy.`,
      `3. Revelation shows the little book opened

In Revelation 10, John sees an angel holding a little book open.

That connects back to Daniel's sealed book.

What was once sealed is now opened.

God is showing that the time would come when Daniel's prophecy would be studied, understood, and proclaimed.

Prophecy is not random spiritual trivia.

It reveals God's activity in history.`,
      `4. The experience would be sweet and bitter

John was told to eat the little book.

It would be sweet in his mouth but bitter in his belly.

This points to a prophetic experience that would begin with joy and expectation but later involve disappointment and pain.

Understanding prophecy would be sweet.

Misunderstanding the event connected to the prophecy would be bitter.

But the story would not end in disappointment.

God would say, "Prophesy again."`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Seal',
      lemma: 'חָתַם',
      transliteration: 'chatham',
      meaning: 'To close, preserve, secure, or reserve something until the proper time.',
      strongs: 'H2856',
      reference: 'Daniel 12:4',
      note: `When Daniel's prophecy was sealed, it did not mean God wanted truth hidden forever.

It meant the prophecy would be preserved until the time when God's people were ready to understand it and proclaim it.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `Daniel and Revelation are connected.

Daniel is told to seal the book.

Revelation shows the little book open.

Daniel points to a future time when knowledge would increase.

Revelation shows a prophetic message that is sweet at first, bitter afterward, and then followed by a renewed mission.

That pattern matters.

God opens truth progressively.

He gives light at the right time.

But people can still misunderstand what that light means.

That is why humility matters in prophecy.

The early Advent believers were not wrong to study Daniel.

They were not wrong to expect God to act.

But they misunderstood the event connected to the prophecy.

They expected Jesus to return to earth.

Instead, Scripture would lead them to see that Jesus had entered the final phase of His heavenly ministry.

The disappointment was bitter.

But the mission was not over.`,
    },
    studyInsightBlocks: [
      {
        type: 'sweetBitterPattern',
        title: 'Sweet and Bitter',
        caption: 'Revelation 10 shows that disappointment did not end the mission. It clarified it.',
        stages: [
          { label: 'Little Book Opened', tagline: "Daniel's prophecy becomes understood", tone: 'neutral' },
          { label: 'Sweet in the Mouth', tagline: 'The message brings excitement and expectation', tone: 'sweet' },
          { label: 'Bitter in the Belly', tagline: 'The disappointment reveals a misunderstood event', tone: 'bitter' },
          { label: 'Prophesy Again', tagline: 'God sends His people back to proclaim truth more clearly', tone: 'neutral' },
        ],
      },
      {
        type: 'scriptureChain',
        title: 'Sealed and Opened',
        references: [
          { reference: 'Daniel 8:14' },
          { reference: 'Daniel 8:26' },
          { reference: 'Daniel 12:4-10' },
          { reference: 'Revelation 10:1-11' },
        ],
      },
      {
        type: 'paragraph',
        text: "Takeaway: Daniel's sealed prophecy would be opened at the time of the end, leading to deeper understanding, bitter disappointment, and a renewed mission.",
      },
    ],
    reflectPrompt: `Why does God sometimes reveal truth progressively instead of giving people full understanding all at once?

Think about timing, humility, Bible study, spiritual readiness, disappointment, and how God can use even misunderstood moments to lead people into clearer truth.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, practice humble Bible study.

Choose one passage you do not fully understand and slow down with it.

Ask:

"What does the text actually say?"

"What other Scriptures help explain it?"

"Am I forcing my assumption onto the passage?"

"Am I willing to let God correct my understanding?"

"Does this lead me closer to Jesus?"

Do not rush prophecy.

Prophecy is not a microwave dinner.

It requires patience, context, prayer, and humility.

God is not afraid of honest study.

But He will not bless arrogant guessing dressed up like certainty.

Prayer:

Father, thank You for revealing truth at the right time. Help me study Your Word with humility, patience, and reverence. Open my understanding where I need light, and correct me where I have misunderstood. Keep Jesus at the center of my study. When I face disappointment, help me trust that You are still leading me into clearer truth and deeper mission. Amen.`,
    prayer: '',
    completionSummary:
      "Daniel's sealed prophecy would be opened at the time of the end. Revelation 10 shows a sweet and bitter experience, followed by God's call to prophesy again.",
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'doa-l1-q1',
          prompt: 'According to Daniel 12:4, what was Daniel told to do with the book?',
          options: [
            'Shut up the words and seal the book until the time of the end',
            'Destroy the book immediately',
            'Give the book to Babylon',
            'Ignore the vision completely',
          ],
          correctIndex: 0,
          explanation:
            'Daniel was told to shut up the words and seal the book until the time of the end, showing that fuller understanding would come later.',
        },
        {
          id: 'doa-l1-q2',
          prompt: 'According to Daniel 8:14, what would happen after the 2300 days?',
          options: [
            'The sanctuary would be cleansed',
            'The dragon would become ruler forever',
            'The commandments would be erased',
            'The Bible would lose its meaning',
          ],
          correctIndex: 0,
          explanation: 'Daniel 8:14 says, "Unto two thousand and three hundred days; then shall the sanctuary be cleansed."',
        },
        {
          id: 'doa-l1-q3',
          prompt: 'In Revelation 10:2, what does the angel have in his hand?',
          options: ['A little book open', 'A sealed stone', 'A sword only', 'A hidden idol'],
          correctIndex: 0,
          explanation:
            'Revelation 10 shows an angel with a little book open, connecting to Daniel\'s previously sealed prophecy.',
        },
        {
          id: 'doa-l1-q4',
          prompt: 'According to Revelation 10:9, what would the little book be like?',
          options: [
            'Sweet in the mouth but bitter in the belly',
            'Bitter in the mouth and sweet nowhere',
            'Meaningless and unreadable',
            'Only pleasant with no disappointment',
          ],
          correctIndex: 0,
          explanation: 'John was told the little book would be sweet as honey in his mouth but bitter in his belly.',
        },
        {
          id: 'doa-l1-q5',
          kind: 'reflection',
          prompt: 'Where do you need more humility and patience in your Bible study?',
          explanation:
            'Daniel and Revelation show that God opens truth at the right time. His people must study carefully, remain humble, and keep following when understanding deepens.',
        },
      ],
    },
  },
  'the-2300-days': {
    openingThought: `Prophecy is not God showing off His ability to predict dates.

Prophecy is God showing that He is active in history.

Daniel 8:14 gives one of the most important prophetic time periods in Scripture:

2300 days.

But in Bible prophecy, symbolic time often follows the day-for-a-year principle.

That means the 2300 days point to 2300 years.

This prophecy stretches from the command to restore and rebuild Jerusalem all the way to the beginning of the final phase of Christ's heavenly ministry.

That is heavy.

But do not panic.

We are not building a conspiracy board with red string.

We are letting Scripture walk us through the timeline.`,
    scriptureRef: 'Daniel 8:14',
    scriptureQuote: 'And he said unto me, Unto two thousand and three hundred days; then shall the sanctuary be cleansed.',
    scriptureAfterPrimary: `Daniel's vision points to a long prophetic period ending with the cleansing of the sanctuary.`,
    scriptureSecondaryRef: 'Daniel 9:24',
    scriptureSecondaryQuote: 'Seventy weeks are determined upon thy people and upon thy holy city.',
    scriptureAfterSecondary: `Daniel 9 explains a 70-week period cut off from the larger prophecy, giving the starting point for the timeline.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Daniel 9:25',
        quote:
          'Know therefore and understand, that from the going forth of the commandment to restore and to build Jerusalem unto the Messiah the Prince shall be seven weeks, and threescore and two weeks.',
      },
      {
        type: 'scripture',
        reference: 'Daniel 9:26',
        quote: 'And after threescore and two weeks shall Messiah be cut off, but not for himself.',
      },
      {
        type: 'scripture',
        reference: 'Daniel 9:27',
        quote: 'And he shall confirm the covenant with many for one week.',
      },
      {
        type: 'scripture',
        reference: 'Ezra 7:11-12',
        quote: `Now this is the copy of the letter that the king Artaxerxes gave unto Ezra the priest.

Artaxerxes, king of kings, unto Ezra the priest.`,
      },
      {
        type: 'scripture',
        reference: 'Ezekiel 4:6',
        quote: 'I have appointed thee each day for a year.',
      },
      {
        type: 'scripture',
        reference: 'Numbers 14:34',
        quote: 'After the number of the days... each day for a year.',
      },
    ],
    teachingPoints: [
      `1. The 2300 days point to the cleansing of the sanctuary

Daniel 8:14 says that after 2300 days, the sanctuary would be cleansed.

This statement is the foundation of the prophecy.

The question is not whether the prophecy matters.

The question is what sanctuary is being cleansed, when the period begins, and how Scripture explains the timeline.

Daniel does not leave us without help.

The next chapter gives the key.`,
      `2. The 70 weeks are part of the larger prophecy

Daniel 9 explains a 70-week prophecy connected to the Jewish people, Jerusalem, and the coming of the Messiah.

Seventy weeks equals 490 prophetic days.

Using the day-for-a-year principle, that means 490 years.

This 490-year period is cut off from the larger 2300-year prophecy.

It gives us the starting point and confirms the reliability of the timeline through the life and death of Jesus.`,
      `3. The prophecy begins with the command to restore and rebuild Jerusalem

Daniel 9:25 says the timeline begins with the command to restore and build Jerusalem.

That command was issued in the days of Artaxerxes, recorded in Ezra 7.

This gives the starting point:

457 BC.

From there, the prophetic timeline moves forward.

Sixty-nine weeks, or 483 years, reaches to the appearance of Messiah the Prince.

That brings us to 27 AD, the beginning of Jesus' public ministry.`,
      `4. The middle of the final week points to the cross

Daniel 9 says Messiah would be cut off, but not for Himself.

In the middle of the final prophetic week, Jesus was crucified.

That brings us to 31 AD.

The prophecy is not centered on human speculation.

It is centered on Christ.

The timeline confirms Jesus as the Messiah and points forward to the completion of the 2300 years in 1844.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Determined',
      lemma: 'חָתַךְ',
      transliteration: 'chathak',
      meaning: 'Cut off, divided, or assigned for a specific purpose.',
      strongs: 'H2852',
      reference: 'Daniel 9:24',
      note: `In Daniel 9:24, the 70 weeks are "determined" for Daniel's people and city.

This means the 490 years are cut off from the larger 2300-year prophecy, giving us the starting point and helping us understand the full prophetic timeline.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The 2300-day prophecy is not floating by itself.

Daniel 8 gives the time period.

Daniel 9 gives the starting point.

The command to restore and rebuild Jerusalem begins the prophetic timeline in 457 BC.

From there:

69 weeks, or 483 years, reach to 27 AD, when Jesus begins His public ministry.

In the middle of the final week, 31 AD, Jesus is crucified.

At the end of the 70 weeks, 34 AD, the gospel moves beyond its initial covenant focus toward a wider mission to the nations.

Then the remaining 1,810 years bring the timeline to 1844.

According to Daniel 8:14, this marks the beginning of the cleansing of the sanctuary.

The point is not date obsession.

The point is Christ's ministry.

The same prophecy that confirms Jesus as Messiah also points to His final work as High Priest.`,
    },
    studyInsightBlocks: [
      {
        type: 'prophecyTimeline2300',
        title: '2300 Days / Years',
        subtitle: 'Daniel 8:14',
        caption:
          "Daniel's 2300-day prophecy points to the beginning of the final phase of Christ's heavenly ministry.",
      },
      {
        type: 'scriptureChain',
        title: 'The 2300 Days',
        references: [
          { reference: 'Daniel 8:14' },
          { reference: 'Daniel 9:24-27' },
          { reference: 'Ezra 7:11-12' },
          { reference: 'Ezekiel 4:6' },
          { reference: 'Numbers 14:34' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: The 2300-day prophecy begins in 457 BC, confirms Jesus as the Messiah, and points to 1844 as the beginning of the cleansing of the sanctuary.',
      },
    ],
    reflectPrompt: `Why does it matter that the 2300-day prophecy is centered on Jesus before it points to 1844?

Think about the Messiah, the cross, prophecy, assurance, the sanctuary, and how God uses time prophecy to reveal Christ's work rather than satisfy curiosity.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, do not study prophecy as a detached timeline.

Study it as a revelation of Jesus.

Look at the key dates and ask:

"What does this show me about Christ?"

457 BC shows God's faithfulness to restore.

27 AD shows Jesus entering His public mission.

31 AD shows Jesus cut off for us.

34 AD shows the gospel moving outward.

1844 points to Jesus' final priestly ministry.

Prophecy is not supposed to make you weird.

It is supposed to make you worship.

Let the timeline lead you to confidence in Christ.

Prayer:

Father, thank You for showing that history is not random. Thank You for giving prophecy that points to Jesus, His sacrifice, and His ministry for us. Help me study carefully, think clearly, and keep Christ at the center. Give me confidence that You are faithful, Your Word is trustworthy, and Jesus is actively working for my salvation. Amen.`,
    prayer: '',
    completionSummary:
      'The 2300-day prophecy begins in 457 BC, confirms Jesus as the Messiah, and points to 1844 as the beginning of the cleansing of the sanctuary.',
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'doa-l2-q1',
          prompt: 'According to Daniel 8:14, what would happen after the 2300 days?',
          options: [
            'The sanctuary would be cleansed',
            'The dragon would win forever',
            'The commandments would be erased',
            'Jerusalem would never be restored',
          ],
          correctIndex: 0,
          explanation: 'Daniel 8:14 says that after the 2300 days, the sanctuary would be cleansed.',
        },
        {
          id: 'doa-l2-q2',
          prompt: "According to Daniel 9:24, how much prophetic time was determined for Daniel's people and holy city?",
          options: ['Seventy weeks', 'Three days', 'One thousand years', 'Forty days only'],
          correctIndex: 0,
          explanation: "Daniel 9:24 says seventy weeks were determined for Daniel's people and holy city.",
        },
        {
          id: 'doa-l2-q3',
          prompt: 'What command begins the 2300-year prophetic timeline?',
          options: [
            'The command to restore and build Jerusalem',
            'The command to build Babylon',
            'The command to destroy the sanctuary',
            'The command to stop studying prophecy',
          ],
          correctIndex: 0,
          explanation:
            'Daniel 9:25 says the timeline begins with the command to restore and build Jerusalem, which is connected to the decree recorded in Ezra 7.',
        },
        {
          id: 'doa-l2-q4',
          prompt: 'According to Daniel 9:26, what would happen to the Messiah?',
          options: [
            'He would be cut off, but not for Himself',
            'He would fail His mission',
            'He would never appear',
            'He would abolish all prophecy',
          ],
          correctIndex: 0,
          explanation: 'Daniel 9:26 says Messiah would be cut off, but not for Himself, pointing to Jesus\' sacrificial death.',
        },
        {
          id: 'doa-l2-q5',
          kind: 'reflection',
          prompt: "How does seeing prophecy fulfilled in Jesus strengthen your trust in God's Word?",
          explanation:
            'The 2300-day prophecy is anchored in Christ. It confirms Jesus as Messiah and points to His ongoing heavenly ministry.',
        },
      ],
    },
  },
  'sweet-in-the-mouth-bitter-in-the-belly': {
    openingThought: `Sometimes God's people can be right about the text and still wrong about what they expect next.

That is exactly what happened in the bittersweet experience of Revelation 10.

The early Advent believers studied Daniel's 2300-day prophecy and saw that the timeline pointed to 1844. Their study was serious. Their expectation was sincere. Their excitement was real.

But they misunderstood the event.

They thought the cleansing of the sanctuary meant Jesus would return to cleanse the earth by fire.

When Jesus did not come, the joy turned bitter.

But disappointment was not the end of the story.

God did not say, "You failed, go home."

He said, "Prophesy again."`,
    scriptureRef: 'Revelation 10:9-10',
    scriptureQuote: `Take it, and eat it up; and it shall make thy belly bitter, but it shall be in thy mouth sweet as honey.

And I took the little book out of the angel's hand, and ate it up.

And it was in my mouth sweet as honey: and as soon as I had eaten it, my belly was bitter.`,
    scriptureAfterPrimary: `John's experience pictures a message that begins with joy and expectation but later brings bitter disappointment.`,
    scriptureSecondaryRef: 'Revelation 10:11',
    scriptureSecondaryQuote: 'And he said unto me, Thou must prophesy again before many peoples, and nations, and tongues, and kings.',
    scriptureAfterSecondary: `After the sweet and bitter experience, God renewed the mission instead of ending it.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Habakkuk 2:2-3',
        quote: `Write the vision, and make it plain upon tables, that he may run that readeth it.

For the vision is yet for an appointed time.

Though it tarry, wait for it; because it will surely come, it will not tarry.`,
      },
      {
        type: 'scripture',
        reference: 'Hebrews 10:35-36',
        quote: `Cast not away therefore your confidence, which hath great recompence of reward.

For ye have need of patience, that, after ye have done the will of God, ye might receive the promise.`,
      },
      {
        type: 'scripture',
        reference: 'Hebrews 10:39',
        quote: 'But we are not of them who draw back unto perdition; but of them that believe to the saving of the soul.',
      },
    ],
    teachingPoints: [
      `1. The little book was sweet in the mouth

The opened little book brought joy because Daniel's prophecy was being understood.

Bible students saw that the 2300-year timeline reached to 1844.

This discovery was sweet because it filled believers with expectation.

They believed Jesus was coming soon.

Their hearts were stirred.

Their preaching became urgent.

Their hope became alive.`,
      `2. The bitterness came from a misunderstood event

The disappointment was not because Daniel's prophecy failed.

It came because the event was misunderstood.

They assumed the sanctuary meant the earth.

They assumed cleansing meant the second coming.

But Scripture would later show that the sanctuary in view was the heavenly sanctuary, where Jesus ministers as High Priest.

That is a big distinction.

The timing was solid.

The expected event was wrong.`,
      `3. Disappointment can lead to deeper Bible study

After the disappointment, scattered believers went back to Scripture.

That is the right move.

They did not throw away the Bible because their expectation failed.

They retraced their steps.

They studied Daniel, Revelation, Hebrews, and the sanctuary.

Through deeper study, they began to see that Jesus had entered the final phase of His heavenly ministry.`,
      `4. God's answer was "prophesy again"

Revelation 10:11 is crucial.

After the sweet and bitter experience, the angel says, "Thou must prophesy again."

That means the disappointment did not cancel the mission.

It clarified the message.

God's people still had truth to proclaim, but now with deeper understanding of Christ's work in the heavenly sanctuary.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Disappointment',
      lemma: 'πικρός',
      transliteration: 'pikros',
      meaning: 'The pain that comes when expectation and reality do not match.',
      strongs: 'G4089',
      reference: 'Revelation 10:10',
      note: `Disappointment does not always mean God was absent.

Sometimes disappointment exposes a wrong assumption and drives God's people back to Scripture for clearer understanding.

In Revelation 10, bitterness becomes the doorway to renewed mission.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The Great Disappointment was painful because sincere believers expected Jesus to return in 1844.

He did not.

That pain was real.

But the disappointment did not mean God's Word failed.

The issue was interpretation of the event.

The prophecy pointed to the cleansing of the sanctuary, but the sanctuary was not the earth.

The book of Hebrews would help believers see that there is a true sanctuary in heaven and that Jesus ministers there as our High Priest.

This matters because God does not waste disappointment.

When handled humbly, disappointment can remove false assumptions, deepen Bible study, and sharpen mission.

That is grown-up faith.

Childish faith quits when embarrassed.

Mature faith goes back to the Word and says, "Lord, show me what I missed."`,
    },
    studyInsightBlocks: [
      {
        type: 'sweetBitterPattern',
        title: 'Sweet and Bitter',
        caption: 'Revelation 10 shows that disappointment did not end the mission. It clarified it.',
        stages: [
          { label: 'Little Book Opened', tagline: "Daniel's prophecy becomes understood", tone: 'neutral' },
          { label: 'Sweet in the Mouth', tagline: 'The message brings excitement and expectation', tone: 'sweet' },
          { label: 'Bitter in the Belly', tagline: 'The disappointment reveals a misunderstood event', tone: 'bitter' },
          { label: 'Prophesy Again', tagline: 'God sends His people back to proclaim truth more clearly', tone: 'neutral' },
        ],
      },
      {
        type: 'prophecyTimeline2300',
        caption:
          'The timeline pointed to 1844, but believers had to restudy what "the sanctuary shall be cleansed" meant.',
      },
      {
        type: 'scriptureChain',
        title: 'Sweet and Bitter',
        references: [
          { reference: 'Revelation 10:8-11' },
          { reference: 'Habakkuk 2:2-3' },
          { reference: 'Hebrews 10:35-39' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: The early Advent believers experienced bitter disappointment, but God used it to lead them into deeper sanctuary truth and renewed mission.',
      },
    ],
    reflectPrompt: `How should you respond when something you sincerely believed turns out to be incomplete or misunderstood?

Think about humility, disappointment, Bible study, correction, pride, patience, and whether you are willing to let Scripture reshape your expectations.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, identify one area where disappointment may have made you defensive instead of teachable.

Ask:

"Did I misunderstand what God was doing?"

"Did I confuse my expectation with God's promise?"

"Have I gone back to Scripture, or just gone quiet?"

"What truth might God be clarifying through this?"

Then do the mature thing.

Do not pretend it did not hurt.

Do not throw away your faith.

Go back to the Word.

Disappointment is bitter, but it does not get the final word.

Jesus does.

Prayer:

Father, thank You for leading even when I misunderstand. Help me not to abandon truth when my expectations fail. Give me humility to return to Scripture, patience to keep studying, and courage to keep following You. When disappointment is bitter, show me the clearer truth You are leading me into. Renew my faith and my mission in Jesus. Amen.`,
    prayer: '',
    completionSummary:
      "The sweet message of Daniel's prophecy became bitter through disappointment, but God used that moment to clarify truth and call His people to prophesy again.",
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'doa-l3-q1',
          prompt: 'According to Revelation 10:9-10, what was the little book like?',
          options: [
            'Sweet in the mouth and bitter in the belly',
            'Bitter in the mouth and sweet in the belly',
            'Completely meaningless',
            'Sealed forever and never opened',
          ],
          correctIndex: 0,
          explanation: 'Revelation says the little book was sweet as honey in the mouth but bitter in the belly.',
        },
        {
          id: 'doa-l3-q2',
          prompt: 'What made the early Advent experience bitter?',
          options: [
            'They misunderstood the event connected to the prophecy',
            "Daniel's prophecy failed",
            'The Bible had no answer',
            'Jesus stopped ministering for humanity',
          ],
          correctIndex: 0,
          explanation:
            'The bitterness came because believers expected the second coming, but later discovered the prophecy pointed to Christ\'s heavenly sanctuary ministry.',
        },
        {
          id: 'doa-l3-q3',
          prompt: 'According to Revelation 10:11, what command came after the bitter experience?',
          options: ['Prophesy again', 'Stop studying forever', 'Hide the Bible', 'Reject Daniel completely'],
          correctIndex: 0,
          explanation: 'After the sweet and bitter experience, John was told, "Thou must prophesy again."',
        },
        {
          id: 'doa-l3-q4',
          prompt: 'According to Habakkuk 2:3, what should believers do when the vision is for an appointed time?',
          options: ['Wait for it', 'Abandon faith immediately', 'Ignore prophecy', 'Replace Scripture with feelings'],
          correctIndex: 0,
          explanation: 'Habakkuk says the vision is for an appointed time and calls believers to wait for it.',
        },
        {
          id: 'doa-l3-q5',
          kind: 'reflection',
          prompt: 'What is one disappointment God may be using to lead you into deeper understanding?',
          explanation:
            'Disappointment can expose wrong assumptions and drive us back to Scripture, where God clarifies truth and renews mission.',
        },
      ],
    },
  },
  'the-heavenly-sanctuary': {
    openingThought: `The early Advent believers were not wrong to expect something important to happen at the end of the 2300 years.

They were wrong about what the sanctuary was.

They assumed the sanctuary meant the earth.

But when they went back to Scripture, they discovered something clearer:

The Bible speaks of a sanctuary in heaven.

The earthly sanctuary was never the final reality. It was a teaching model, a symbolic outline of the plan of salvation.

It pointed to Jesus.

His sacrifice.
His resurrection.
His mediation.
His final work as High Priest.

The sanctuary message is not about buildings and furniture.

It is about Christ's ministry for us.`,
    scriptureRef: 'Hebrews 8:1-2',
    scriptureQuote: `We have such an high priest, who is set on the right hand of the throne of the Majesty in the heavens.

A minister of the sanctuary, and of the true tabernacle, which the Lord pitched, and not man.`,
    scriptureAfterPrimary: `Jesus ministers as High Priest in the true heavenly sanctuary, not in a tabernacle made by human hands.`,
    scriptureSecondaryRef: 'Hebrews 8:5',
    scriptureSecondaryQuote: 'Who serve unto the example and shadow of heavenly things.',
    scriptureAfterSecondary: `The earthly sanctuary was a pattern that pointed to the heavenly reality where Christ ministers.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Exodus 25:8-9',
        quote: `And let them make me a sanctuary; that I may dwell among them.

According to all that I shew thee, after the pattern of the tabernacle.`,
      },
      {
        type: 'scripture',
        reference: 'Psalm 102:19',
        quote: 'For he hath looked down from the height of his sanctuary; from heaven did the Lord behold the earth.',
      },
      {
        type: 'scripture',
        reference: 'Hebrews 9:11-12',
        quote: `But Christ being come an high priest of good things to come.

By his own blood he entered in once into the holy place, having obtained eternal redemption for us.`,
      },
    ],
    teachingPoints: [
      `1. The earthly sanctuary was a pattern

God told Moses to build the sanctuary according to the pattern shown to him.

That means the earthly sanctuary was not random religious architecture.

It was a teaching model.

Every part of it pointed beyond itself.

The altar, laver, holy place, most holy place, priesthood, sacrifices, and Day of Atonement all taught something about God's plan to save and restore humanity.`,
      `2. The heavenly sanctuary is the true tabernacle

Hebrews says Jesus ministers in the true tabernacle, which the Lord pitched, and not man.

This is crucial.

The sanctuary to be cleansed in Daniel 8:14 was not the earth.

Scripture points us to Christ's ministry in the heavenly sanctuary.

The focus shifts from earthly symbols to heavenly reality.`,
      `3. The sanctuary reveals the plan of salvation

The sanctuary shows salvation in movement.

The courtyard points to Christ's sacrifice.

The holy place points to Christ's continual ministry for believers.

The most holy place points to the final resolution of the sin problem.

This is not dry doctrine.

This is the gospel in diagram form.

God gave a visual theology lesson before slide decks were a thing.`,
      `4. Jesus is the center of the sanctuary

Hebrews says Christ is our High Priest.

He enters by His own blood.

He obtains eternal redemption for us.

The sanctuary message is not centered on fear.

It is centered on Jesus.

Without Jesus, the sanctuary becomes confusing religious furniture.

With Jesus, it becomes one of the clearest pictures of the plan of salvation.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Sanctuary',
      lemma: 'מִקְדָּשׁ',
      transliteration: 'miqdash',
      meaning: "A holy place connected to God's presence, worship, mediation, and the plan of salvation.",
      strongs: 'H4720',
      reference: 'Exodus 25:8',
      note: `The earthly sanctuary was a symbolic pattern pointing to the heavenly sanctuary.

The true focus is Jesus, our High Priest, who ministers for us and brings the plan of redemption to completion.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `After the disappointment of 1844, believers had to answer one question:

What sanctuary was Daniel talking about?

They had assumed the earth.

But Scripture did not support that assumption.

Hebrews pointed them to the heavenly sanctuary, where Jesus ministers as High Priest.

That discovery changed everything.

The prophecy did not fail.

The event had been misunderstood.

Daniel 8:14 was not pointing to Jesus coming to earth in 1844.

It was pointing to Jesus entering the final phase of His priestly ministry in heaven.

This is why the sanctuary is so important.

It connects prophecy to Jesus' present work.

It shows that salvation is not only something Jesus did in the past at the cross.

It is also something He is applying, ministering, cleansing, and completing now.`,
    },
    studyInsightBlocks: [
      {
        type: 'sanctuaryDiagram',
        title: 'The Sanctuary',
        caption:
          'The earthly sanctuary was a teaching model pointing to the work of Jesus in the plan of salvation.',
      },
      {
        type: 'scriptureChain',
        title: 'The Heavenly Sanctuary',
        references: [
          { reference: 'Hebrews 8:1-5' },
          { reference: 'Psalm 102:19' },
          { reference: 'Exodus 25:8-9' },
          { reference: 'Hebrews 9:11-12' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: The earthly sanctuary was a pattern pointing to the true sanctuary in heaven, where Jesus ministers as our High Priest.',
      },
    ],
    reflectPrompt: `How does seeing Jesus as your High Priest in the heavenly sanctuary change the way you think about judgment, forgiveness, and salvation?

Think about confidence, mediation, cleansing, God's presence, the cross, and the difference between fear-based religion and Christ-centered assurance.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, when you think about judgment or your standing before God, do not start with yourself.

Start with Jesus.

Ask:

"Where is Jesus right now?"

"What is He doing for me?"

"What does His blood say about my sins?"

"What does His priestly ministry say about God's desire to save me?"

Do not let the sanctuary message become a cold chart.

Let it become assurance.

Jesus is not distant.

He is ministering for you.

Prayer:

Jesus, thank You for being my High Priest. Thank You that the sanctuary points to Your sacrifice, Your mediation, and Your final work to resolve the sin problem. Help me understand Your ministry more clearly. Replace fear with confidence, confusion with truth, and guilt with trust in Your grace. Keep my eyes fixed on You. Amen.`,
    prayer: '',
    completionSummary:
      'The earthly sanctuary was a pattern pointing to the heavenly sanctuary, where Jesus ministers as our High Priest and brings the plan of salvation to completion.',
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'doa-l4-q1',
          prompt: 'According to Hebrews 8:1-2, where does Jesus minister as High Priest?',
          options: [
            'In the sanctuary and true tabernacle in heaven',
            'In a temple built by Babylon',
            "In the dragon's kingdom",
            'Only in an earthly palace',
          ],
          correctIndex: 0,
          explanation:
            'Hebrews says Jesus is seated at the right hand of God and ministers in the true tabernacle, which the Lord pitched, not man.',
        },
        {
          id: 'doa-l4-q2',
          prompt: 'According to Exodus 25:8-9, what was Moses told to build?',
          options: [
            'A sanctuary according to the pattern shown by God',
            'A tower to reach heaven',
            'A golden image',
            'A throne for Pharaoh',
          ],
          correctIndex: 0,
          explanation: 'God told Moses to build a sanctuary according to the pattern He showed him.',
        },
        {
          id: 'doa-l4-q3',
          prompt: 'According to Hebrews 8:5, what did the earthly sanctuary serve as?',
          options: [
            'An example and shadow of heavenly things',
            'A replacement for Jesus',
            'A meaningless ritual',
            "A denial of God's presence",
          ],
          correctIndex: 0,
          explanation: 'Hebrews says the earthly priests served unto the example and shadow of heavenly things.',
        },
        {
          id: 'doa-l4-q4',
          prompt: 'What did the courtyard of the sanctuary point to?',
          options: ["Christ's sacrifice", 'Human pride', "The dragon's throne", 'The end of all grace'],
          correctIndex: 0,
          explanation: 'The courtyard, especially the altar of sacrifice, pointed forward to the sacrifice of Christ.',
        },
        {
          id: 'doa-l4-q5',
          kind: 'reflection',
          prompt: "What part of Christ's sanctuary ministry gives you the most confidence right now?",
          explanation:
            'The sanctuary points to Jesus\' sacrifice, mediation, and final work as High Priest. It is meant to give assurance in Christ.',
        },
      ],
    },
  },
  'jesus-our-high-priest': {
    openingThought: `The sanctuary message only makes sense when Jesus is at the center.

If we talk about judgment without Jesus, people become afraid.

If we talk about cleansing without Jesus, people become confused.

If we talk about prophecy without Jesus, people become weird. And not the fun kind of weird.

But Hebrews gives us the center clearly:

Jesus is our High Priest.

He is not standing far away from humanity.

He understands weakness.

He knows temptation.

He offers mercy.

He gives grace.

He lives to make intercession.

The Day of Atonement is not about God looking for reasons to reject people.

It is about Jesus ministering for the people He died to save.`,
    scriptureRef: 'Hebrews 4:14-16',
    scriptureQuote: `Seeing then that we have a great high priest, that is passed into the heavens, Jesus the Son of God.

For we have not an high priest which cannot be touched with the feeling of our infirmities.

Let us therefore come boldly unto the throne of grace, that we may obtain mercy, and find grace to help in time of need.`,
    scriptureAfterPrimary: `Because Jesus is our compassionate High Priest in heaven, believers are invited to come boldly to God for mercy and grace.`,
    scriptureSecondaryRef: 'Hebrews 7:25',
    scriptureSecondaryQuote: `Wherefore he is able also to save them to the uttermost that come unto God by him.

Seeing he ever liveth to make intercession for them.`,
    scriptureAfterSecondary: `Jesus continues His saving work by living to intercede for those who come to God through Him.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Hebrews 9:12',
        quote:
          'By his own blood he entered in once into the holy place, having obtained eternal redemption for us.',
      },
      {
        type: 'scripture',
        reference: 'Hebrews 9:14',
        quote:
          'How much more shall the blood of Christ... purge your conscience from dead works to serve the living God?',
      },
      {
        type: 'scripture',
        reference: '1 Timothy 2:5',
        quote: 'For there is one God, and one mediator between God and men, the man Christ Jesus.',
      },
      {
        type: 'scripture',
        reference: '1 John 2:1',
        quote: 'And if any man sin, we have an advocate with the Father, Jesus Christ the righteous.',
      },
    ],
    teachingPoints: [
      `1. Jesus is our great High Priest

Hebrews says Jesus has passed into the heavens as our great High Priest.

This means His work did not end when He rose from the grave.

The cross was complete and sufficient.

But Jesus continues applying the benefits of His sacrifice as our living Priest.

He ministers in heaven for those He redeemed on earth.`,
      `2. Jesus understands human weakness

Hebrews says Jesus is touched with the feeling of our infirmities.

That means He is not cold, detached, or impatient with struggling people.

He knows what it means to be tempted.

He knows what it means to suffer.

He knows what it means to be misunderstood, rejected, and pressured.

His priesthood is full of compassion because He came near to us.`,
      `3. Jesus gives mercy and grace

Because Jesus is our High Priest, Hebrews tells us to come boldly to the throne of grace.

Not crawl in terror.

Not hide in shame.

Not perform religious confidence we do not actually have.

Come boldly.

Why?

Because the One ministering for us is merciful, faithful, and able to help in time of need.`,
      `4. Jesus lives to intercede

Hebrews says Jesus ever lives to make intercession.

This does not mean the Father is against us and Jesus has to convince Him to be kind.

No.

The Father sent the Son because He loves us.

Jesus' intercession shows that heaven is actively committed to our salvation.

The whole plan of redemption is working to save, heal, cleanse, and restore.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Intercession',
      lemma: 'ἐντυγχάνω',
      transliteration: 'entynchano',
      meaning: 'The work of representing, pleading for, or ministering on behalf of another.',
      strongs: 'G1793',
      reference: 'Hebrews 7:25',
      note: `Jesus' intercession does not mean He is trying to make an unwilling Father love us.

It means Jesus stands as our living Mediator, applying His sacrifice, giving mercy, and bringing believers into full confidence before God.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The high priestly ministry of Jesus changes how we understand the judgment.

Without Jesus, judgment feels like exposure without hope.

With Jesus, judgment becomes part of God's saving work.

Jesus is our Advocate.

Jesus is our Mediator.

Jesus is our High Priest.

Jesus is our righteousness.

Jesus is the One who cleanses the conscience.

Jesus is the One who saves to the uttermost.

That means the believer does not face God alone.

The sanctuary message is not saying, "Try harder and hope you survive."

It is saying:

Look at your High Priest.

Look at His blood.

Look at His mercy.

Look at His ministry.

Come boldly.`,
    },
    studyInsightBlocks: [
      {
        type: 'dayOfAtonementFlow',
        title: 'The Ministry of Jesus',
        caption:
          'The Day of Atonement points to Jesus bringing the plan of redemption to its final resolution.',
        stages: [
          { label: 'Sacrifice', description: 'Jesus gives Himself for humanity.' },
          { label: 'Resurrection', description: 'Jesus rises victorious over sin and death.' },
          { label: 'Mediation', description: 'Jesus ministers as our High Priest.' },
          { label: 'Cleansing', description: 'Jesus cleanses the conscience and resolves the sin problem.' },
          { label: 'Confidence', description: "Believers stand before God in Christ's love." },
        ],
      },
      {
        type: 'scriptureChain',
        title: 'Jesus Our High Priest',
        references: [
          { reference: 'Hebrews 4:14-16' },
          { reference: 'Hebrews 7:25-28' },
          { reference: 'Hebrews 9:12-14' },
          { reference: '1 Timothy 2:5' },
          { reference: '1 John 2:1' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: Jesus is our High Priest, Mediator, and Advocate. Because He ministers for us, believers can come boldly to God for mercy, grace, cleansing, and help.',
      },
    ],
    reflectPrompt: `Do you usually picture Jesus as distant from your weakness or near to you in mercy?

Think about guilt, temptation, prayer, confession, shame, assurance, and whether you come boldly to God or hide when you feel unworthy.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, practice coming boldly to the throne of grace.

Bring one real weakness to Jesus.

Not the polished version.

The actual one.

Say:

"Jesus, this is where I need mercy and grace."

Then receive what Hebrews says He gives:

Mercy.

Grace.

Help in time of need.

Do not wait until you feel worthy to come to Him.

You come because He is worthy.

That is the whole point of having a High Priest.

Prayer:

Jesus, thank You for being my High Priest, Mediator, and Advocate. Thank You for understanding my weakness and offering mercy instead of rejection. Help me come boldly to the throne of grace. Cleanse my conscience, strengthen my faith, and teach me to trust Your ministry for me. Keep my eyes on You, not on my fear. Amen.`,
    prayer: '',
    completionSummary:
      'Jesus is our High Priest, Mediator, and Advocate. Because He ministers for us, we can come boldly to God for mercy, grace, cleansing, and help.',
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'doa-l5-q1',
          prompt: 'According to Hebrews 4:14, who is our great High Priest?',
          options: ['Jesus the Son of God', 'Moses', 'An earthly king', 'The dragon'],
          correctIndex: 0,
          explanation:
            'Hebrews identifies Jesus the Son of God as our great High Priest who has passed into the heavens.',
        },
        {
          id: 'doa-l5-q2',
          prompt: 'According to Hebrews 4:15, how does Jesus relate to our weakness?',
          options: [
            'He is touched with the feeling of our infirmities',
            'He ignores weakness',
            'He cannot understand temptation',
            'He rejects struggling people',
          ],
          correctIndex: 0,
          explanation: 'Hebrews says Jesus understands human weakness and temptation, yet without sin.',
        },
        {
          id: 'doa-l5-q3',
          prompt: 'According to Hebrews 4:16, how should believers come to the throne of grace?',
          options: ['Boldly', 'Hopelessly', 'With no confidence', 'By hiding from God'],
          correctIndex: 0,
          explanation: 'Because Jesus is our High Priest, believers are invited to come boldly to the throne of grace.',
        },
        {
          id: 'doa-l5-q4',
          prompt: 'According to Hebrews 7:25, what does Jesus live to do?',
          options: ['Make intercession', 'Condemn without mercy', 'Abandon His people', 'End grace immediately'],
          correctIndex: 0,
          explanation: 'Hebrews says Jesus ever lives to make intercession for those who come to God through Him.',
        },
        {
          id: 'doa-l5-q5',
          kind: 'reflection',
          prompt: 'What weakness do you need to bring boldly to Jesus this week?',
          explanation: 'Jesus is our High Priest. He gives mercy, grace, and help in time of need.',
        },
      ],
    },
  },
  'the-final-cleansing': {
    openingThought: `The Day of Atonement was the most serious day in the sanctuary service.

It was not about casual religion.

It was about cleansing.

Sin had been confessed.
Sacrifices had been offered.
Blood had been ministered.
The people had received mercy.

But once a year, the sanctuary itself was cleansed.

This pointed forward to something bigger than ancient Israel.

It pointed to God's final work of dealing with sin completely.

Not just forgiving sin.

Not just covering sin.

Resolving the sin problem forever through Jesus.

The final cleansing is not about fear-based religion.

It is about God bringing the great controversy to a clean, honest, righteous, and loving conclusion.`,
    scriptureRef: 'Daniel 8:14',
    scriptureQuote: 'And he said unto me, Unto two thousand and three hundred days; then shall the sanctuary be cleansed.',
    scriptureAfterPrimary: `Daniel's prophecy points to a final cleansing of the sanctuary at the end of the 2300-day period.`,
    scriptureSecondaryRef: 'Leviticus 16:30',
    scriptureSecondaryQuote: `For on that day shall the priest make an atonement for you, to cleanse you.

That ye may be clean from all your sins before the LORD.`,
    scriptureAfterSecondary: `The Day of Atonement was a day of cleansing for the people and the sanctuary.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Leviticus 16:33-34',
        quote: `And he shall make an atonement for the holy sanctuary.

And this shall be an everlasting statute unto you, to make an atonement for the children of Israel for all their sins once a year.`,
      },
      {
        type: 'scripture',
        reference: 'Hebrews 9:23',
        quote: `It was therefore necessary that the patterns of things in the heavens should be purified with these.

But the heavenly things themselves with better sacrifices than these.`,
      },
      {
        type: 'scripture',
        reference: 'Hebrews 9:26',
        quote: 'But now once in the end of the world hath he appeared to put away sin by the sacrifice of himself.',
      },
      {
        type: 'scripture',
        reference: '1 John 1:9',
        quote:
          'If we confess our sins, he is faithful and just to forgive us our sins, and to cleanse us from all unrighteousness.',
      },
      {
        type: 'scripture',
        reference: 'Revelation 14:7',
        quote: 'Fear God, and give glory to him; for the hour of his judgment is come.',
      },
    ],
    teachingPoints: [
      `1. The Day of Atonement pointed to cleansing

Leviticus says the Day of Atonement was a day of cleansing.

The priest made atonement for the people and for the sanctuary.

This showed that sin is not a small issue.

Sin damages people.
Sin damages relationships.
Sin pollutes worship.
Sin creates a record that must be dealt with.

God's plan does not leave sin unresolved.`,
      `2. Daniel points to a final sanctuary cleansing

Daniel 8:14 says that after the 2300 days, the sanctuary would be cleansed.

Since Hebrews points us to the true sanctuary in heaven, Daniel's prophecy points to Christ's final phase of ministry there.

This cleansing is not about Jesus needing to become more merciful.

He is already merciful.

It is about the final work of judgment, cleansing, and resolution in the plan of salvation.`,
      `3. The heavenly reality is greater than the earthly symbol

Hebrews says the earthly sanctuary was a pattern, but heavenly things require better sacrifices.

Those better sacrifices are centered in Jesus.

Animal sacrifices could never remove sin by themselves.

They pointed forward.

Jesus' sacrifice is the real foundation of cleansing.

His blood is enough.

His ministry is enough.

His righteousness is enough.`,
      `4. Judgment is part of God's cleansing work

Revelation says the hour of God's judgment has come.

That can sound frightening if Jesus is missing from the picture.

But when Jesus is at the center, judgment is not random terror.

It is God's work of truth, justice, cleansing, and final restoration.

God is not sweeping sin under the rug.

He is exposing, judging, cleansing, and ending it through Christ.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Cleansing',
      lemma: 'טָהֵר',
      transliteration: 'taher',
      meaning: 'The removal of defilement, guilt, uncleanness, or sin so that restoration can take place.',
      strongs: 'H2891',
      reference: 'Leviticus 16:30',
      note: `Biblical cleansing is not merely external.

God cleanses the record, the sanctuary, the conscience, and the heart.

The final cleansing points to Jesus bringing the sin problem to its full and righteous resolution.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The final cleansing must be understood through Jesus.

If we begin with fear, we will misunderstand it.

If we begin with human performance, we will distort it.

If we begin with Jesus, the message becomes clear.

The Day of Atonement says:

Sin is serious.

God is honest.

Judgment is real.

Cleansing is needed.

Jesus is enough.

The same Christ who died for us is the Christ who ministers for us.

The same blood that forgives also cleanses.

The same High Priest who invites us boldly to the throne of grace is the High Priest who leads the final work of atonement.

So the final cleansing is not God trying to keep people out.

It is God finishing the work of getting sin out.`,
    },
    studyInsightBlocks: [
      {
        type: 'sanctuaryDiagram',
        title: 'The Sanctuary',
        highlightedIndices: [2],
        caption:
          'The Day of Atonement pointed to the final cleansing work of Christ in the heavenly sanctuary.',
      },
      {
        type: 'dayOfAtonementFlow',
        title: 'The Ministry of Jesus',
        caption: 'The final cleansing is part of Jesus bringing redemption to full resolution.',
        stages: [
          { label: 'Sacrifice', description: 'Jesus gives Himself for humanity.' },
          { label: 'Resurrection', description: 'Jesus rises victorious over sin and death.' },
          { label: 'Mediation', description: 'Jesus ministers as our High Priest.' },
          { label: 'Cleansing', description: 'Jesus cleanses the conscience and resolves the sin problem.' },
          { label: 'Confidence', description: "Believers stand before God in Christ's love." },
        ],
      },
      {
        type: 'scriptureChain',
        title: 'The Final Cleansing',
        references: [
          { reference: 'Leviticus 16:29-34' },
          { reference: 'Daniel 8:14' },
          { reference: 'Hebrews 9:23-28' },
          { reference: '1 John 1:9' },
          { reference: 'Revelation 14:6-7' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: The Day of Atonement points to God\'s final work of cleansing, judgment, and full resolution of the sin problem through Jesus Christ.',
      },
    ],
    reflectPrompt: `When you think about judgment, do you picture fear first or Jesus first?

Think about guilt, assurance, confession, cleansing, God's justice, Christ's blood, and whether you believe Jesus is truly enough for you.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, bring one specific sin, burden, or unresolved place to Jesus for cleansing.

Do not vague-pray it.

Name it honestly before God.

Then read 1 John 1:9 slowly.

Ask:

"Do I believe God is faithful to forgive?"

"Do I believe God is able to cleanse?"

"Am I hiding something Jesus is ready to heal?"

"Am I clinging to guilt that He is ready to remove?"

The Day of Atonement is not a call to panic.

It is a call to come clean before the God who cleanses.

Prayer:

Jesus, thank You for being my sacrifice, High Priest, Mediator, and cleanser. Thank You that You do not ignore sin, but You also do not abandon sinners who come to You. Cleanse my heart, my conscience, and my life. Help me trust Your blood, Your righteousness, and Your final work of redemption. Give me confidence in Your mercy and reverence for Your truth. Amen.`,
    prayer: '',
    completionSummary:
      'The Day of Atonement points to God\'s final cleansing work through Jesus. Judgment is real, sin is serious, and Christ is enough.',
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'doa-l6-q1',
          prompt: 'According to Daniel 8:14, what happens after the 2300 days?',
          options: [
            'The sanctuary is cleansed',
            'The sanctuary is forgotten',
            'Sin becomes harmless',
            'Judgment disappears forever',
          ],
          correctIndex: 0,
          explanation: 'Daniel 8:14 says that after the 2300 days, the sanctuary would be cleansed.',
        },
        {
          id: 'doa-l6-q2',
          prompt: 'According to Leviticus 16:30, what did the Day of Atonement provide for the people?',
          options: [
            'Cleansing from all their sins before the Lord',
            'Permission to keep sin forever',
            'A reason to ignore confession',
            "A replacement for God's mercy",
          ],
          correctIndex: 0,
          explanation:
            'Leviticus says the priest made atonement so the people could be clean from all their sins before the Lord.',
        },
        {
          id: 'doa-l6-q3',
          prompt: 'According to Hebrews 9:23, what did the earthly sanctuary serve as?',
          options: [
            'A pattern of heavenly things',
            'A denial of heaven',
            'A random structure with no meaning',
            'A replacement for Jesus',
          ],
          correctIndex: 0,
          explanation: 'Hebrews teaches that the earthly sanctuary was a pattern pointing to heavenly realities.',
        },
        {
          id: 'doa-l6-q4',
          prompt: 'According to 1 John 1:9, what does God do when we confess our sins?',
          options: [
            'Forgives us and cleanses us from all unrighteousness',
            'Rejects us immediately',
            'Ignores confession',
            'Makes cleansing impossible',
          ],
          correctIndex: 0,
          explanation:
            'First John says God is faithful and just to forgive our sins and cleanse us from all unrighteousness.',
        },
        {
          id: 'doa-l6-q5',
          kind: 'reflection',
          prompt: "What is one area where you need to trust Jesus' cleansing more deeply?",
          explanation:
            'The final cleansing is centered in Jesus. His blood, ministry, and righteousness are enough to cleanse, restore, and bring the sin problem to its final resolution.',
        },
      ],
    },
  },
  'boldness-in-the-judgment': {
    openingThought: `Judgment sounds terrifying when Jesus is missing.

But the Bible does not tell believers to face the judgment alone.

It points us to Christ.

Jesus is our sacrifice.

Jesus is our High Priest.

Jesus is our Advocate.

Jesus is our Mediator.

Jesus is our righteousness.

That changes everything.

The Day of Atonement is not meant to make sincere believers live in panic.

It is meant to call us into honest confession, deeper surrender, and stronger confidence in the One who ministers for us.

The question is not, "Am I impressive enough to survive judgment?"

Wrong question. Terrible question. Throw it off the balcony.

The better question is:

"Am I trusting the One who stands for me?"`,
    scriptureRef: '1 John 4:17-18',
    scriptureQuote: `Herein is our love made perfect, that we may have boldness in the day of judgment.

There is no fear in love; but perfect love casteth out fear.`,
    scriptureAfterPrimary: `God wants believers to face the judgment with boldness rooted in His perfect love, not in fear.`,
    scriptureSecondaryRef: 'Hebrews 6:18-20',
    scriptureSecondaryQuote: `We might have a strong consolation, who have fled for refuge to lay hold upon the hope set before us.

Which hope we have as an anchor of the soul, both sure and stedfast.`,
    scriptureAfterSecondary: `Our hope in Christ anchors the soul when fear tries to pull us away from God.`,
    scriptureSupplementBlocks: [
      {
        type: 'scripture',
        reference: 'Hebrews 10:19-23',
        quote: `Having therefore, brethren, boldness to enter into the holiest by the blood of Jesus.

Let us draw near with a true heart in full assurance of faith.`,
      },
      {
        type: 'scripture',
        reference: 'Romans 8:31-34',
        quote: `If God be for us, who can be against us?

It is Christ that died, yea rather, that is risen again, who is even at the right hand of God.

Who also maketh intercession for us.`,
      },
      {
        type: 'scripture',
        reference: '1 John 2:1',
        quote: 'And if any man sin, we have an advocate with the Father, Jesus Christ the righteous.',
      },
    ],
    teachingPoints: [
      `1. God wants believers to have boldness

First John says we may have boldness in the day of judgment.

That is not arrogance.

That is assurance.

Boldness does not come from pretending we have no sin.

Boldness comes from trusting the love of God revealed in Jesus.

When love is made perfect, fear loses its control.`,
      `2. Jesus gives access to the holiest

Hebrews says we have boldness to enter the holiest by the blood of Jesus.

That language connects directly to the sanctuary.

The most holy place was not entered casually.

But through Christ, believers are invited to draw near with full assurance.

We do not enter because of our performance.

We enter because of His blood.`,
      `3. Hope is an anchor for the soul

Hebrews says our hope is an anchor of the soul.

That means the believer's assurance is not built on emotions.

Feelings rise and fall.

Spiritual confidence must be anchored in something stronger.

Our anchor is Jesus, who has entered within the veil and ministers for us.`,
      `4. Jesus intercedes for us

Romans says Christ died, rose again, is at the right hand of God, and makes intercession for us.

This is judgment-level assurance.

The One who died for us is the One who represents us.

The One who rose for us is the One who ministers for us.

The One who loves us is the One who stands for us.

If God is for us, judgment is not a reason to run from Him.

It is a reason to run to Christ.`,
    ],
    wordStudyBeforeStudyInsight: true,
    wordStudyStepTitle: 'Word Insight',
    wordStudyStepIntro: '',
    wordStudy: {
      surface: 'Boldness',
      lemma: 'παρρησία',
      transliteration: 'parrhesia',
      meaning: 'Confidence, openness, courage, and freedom from fear because of trust in Christ.',
      strongs: 'G3954',
      reference: '1 John 4:17',
      note: `Biblical boldness in judgment is not self-confidence.

It is Christ-confidence.

Believers can stand before God without terror because Jesus is their sacrifice, High Priest, Mediator, Advocate, and righteousness.`,
    },
    studyInsight: {
      title: 'Study Insight',
      placement: 'after_teaching',
      variant: 'christ_connection',
      body: `The Day of Atonement has shown one clear movement:

Daniel's sealed prophecy would be opened.

The 2300-day prophecy pointed to 1844.

The sweet message became bitter through disappointment.

The heavenly sanctuary clarified the misunderstood event.

Jesus ministers as our High Priest.

The final cleansing shows God resolving the sin problem.

Now the final lesson gives the believer's posture:

Boldness in Christ.

Not fear.

Not carelessness.

Not denial.

Not spiritual arrogance.

Boldness.

Judgment is real.

Sin is serious.

Confession matters.

Cleansing matters.

But Jesus is enough.

The sanctuary message should never make Jesus look smaller.

It should make Him look bigger.

Bigger than your fear.

Bigger than your guilt.

Bigger than your record.

Bigger than your failure.

Bigger than the accusation of the enemy.`,
    },
    studyInsightBlocks: [
      {
        type: 'dayOfAtonementFlow',
        title: 'The Ministry of Jesus',
        caption: 'Because Jesus ministers for us, believers can have boldness in the judgment.',
        stages: [
          { label: 'Sacrifice', description: 'Jesus gives Himself for humanity.' },
          { label: 'Resurrection', description: 'Jesus rises victorious over sin and death.' },
          { label: 'Mediation', description: 'Jesus ministers as our High Priest.' },
          { label: 'Cleansing', description: 'Jesus cleanses the conscience and resolves the sin problem.' },
          { label: 'Confidence', description: "Believers stand before God in Christ's love." },
        ],
      },
      {
        type: 'sanctuaryDiagram',
        title: 'The Sanctuary',
        highlightedIndices: [2],
        caption: 'The most holy place points to Christ\'s final work, not fear without hope.',
      },
      {
        type: 'scriptureChain',
        title: 'Boldness in the Judgment',
        references: [
          { reference: '1 John 4:16-18' },
          { reference: 'Hebrews 6:18-20' },
          { reference: 'Hebrews 10:19-23' },
          { reference: 'Romans 8:31-34' },
          { reference: '1 John 2:1' },
        ],
      },
      {
        type: 'paragraph',
        text: 'Takeaway: Because Jesus is our High Priest, Mediator, Advocate, and righteousness, believers can face the judgment with confidence, assurance, and love.',
      },
    ],
    reflectPrompt: `When you think about judgment, what rises first in your heart: fear, denial, confidence, guilt, or trust in Jesus?

Think about your view of God, confession, assurance, Jesus' intercession, your past, and whether you believe Christ is truly enough to stand for you.`,
    lifeApplicationStepTitle: 'Life Application and Prayer',
    lifeApplication: `This week, replace fear-based judgment thinking with Christ-centered assurance.

When fear says:

"You are not enough."

Answer:

"Jesus is enough."

When guilt says:

"You should hide."

Answer:

"I have an Advocate with the Father."

When shame says:

"God is against you."

Answer:

"If God be for us, who can be against us?"

Then take one honest step:

Confess what needs cleansing.

Receive forgiveness.

Draw near in prayer.

Study Hebrews 10 slowly.

Stop rehearsing accusations that Jesus has already answered.

Boldness in judgment is not ignoring sin.

It is bringing sin to the Savior who cleanses.

Prayer:

Jesus, thank You for being my sacrifice, High Priest, Mediator, Advocate, and righteousness. Thank You that I do not have to face judgment alone. Teach me to confess honestly, trust deeply, and draw near with full assurance of faith. Cast out fear with Your perfect love. Anchor my soul in Your ministry and help me live with confidence in You. Amen.`,
    prayer: '',
    completionSummary:
      'Because Jesus is our High Priest, Mediator, Advocate, and righteousness, believers can face the judgment with confidence, assurance, and love.',
    seriesCompleteScreen: {
      title: 'Study Complete',
      message:
        'You have completed The Day of Atonement. Jesus is our heavenly High Priest, Mediator, Advocate, and righteousness. Because He ministers for us, believers can face the judgment with confession, cleansing, assurance, and boldness in His love.',
      primaryCta: { label: 'Back to Foundations Path', href: '/paths/foundations' },
      secondaryCta: {
        label: 'Review this study',
        href: '/study-library/the-day-of-atonement',
      },
    },
    lessonQuiz: {
      ...QUIZ_SHELL,
      questions: [
        {
          id: 'doa-l7-q1',
          prompt: 'According to 1 John 4:17, what may believers have in the day of judgment?',
          options: ['Boldness', 'Hopeless fear', 'No Advocate', 'No confidence in Christ'],
          correctIndex: 0,
          explanation:
            'First John says love is made perfect so that believers may have boldness in the day of judgment.',
        },
        {
          id: 'doa-l7-q2',
          prompt: 'According to 1 John 4:18, what does perfect love cast out?',
          options: ['Fear', 'Grace', 'Hope', 'Faith'],
          correctIndex: 0,
          explanation: 'John says there is no fear in love, but perfect love casts out fear.',
        },
        {
          id: 'doa-l7-q3',
          prompt: 'According to Hebrews 10:19, how do believers have boldness to enter the holiest?',
          options: ['By the blood of Jesus', 'By personal perfection', 'By hiding their sins', 'By human tradition'],
          correctIndex: 0,
          explanation: 'Hebrews says believers have boldness to enter the holiest by the blood of Jesus.',
        },
        {
          id: 'doa-l7-q4',
          prompt: 'According to Romans 8:34, what is Christ doing for us?',
          options: ['Making intercession for us', 'Abandoning believers', 'Accusing without mercy', 'Ending hope'],
          correctIndex: 0,
          explanation: 'Romans says Christ died, rose again, is at the right hand of God, and makes intercession for us.',
        },
        {
          id: 'doa-l7-q5',
          kind: 'reflection',
          prompt: 'What is one fear about judgment that you need to bring to Jesus?',
          explanation:
            'Judgment is real, but believers do not face it without Christ. Jesus is our High Priest, Mediator, Advocate, and righteousness.',
        },
      ],
    },
  },
}
