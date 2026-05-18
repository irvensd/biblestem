/**
 * Mock catalog fallback when Supabase is empty or unavailable.
 * Foundations include God Is Love and related series; prophecy includes Three Angels’ Messages.
 */

import type {
  Highlight,
  Lesson,
  LessonSection,
  LessonWordLink,
  Note,
  StudyPath,
  StudySeries,
  UserLessonProgress,
  UserSeriesProgress,
  WordStudy,
} from '@/lib/types/product'
import type { LessonContentBlock } from '@/lib/lesson-content-blocks'

const demoUserId = '00000000-0000-4000-8000-000000000001'

export const studyPaths: StudyPath[] = [
  {
    id: 'b1000001-0000-4000-8000-000000000001',
    slug: 'foundations',
    name: 'Foundations',
    description:
      'For new readers who want to understand Scripture clearly and build a strong foundation.',
    sortOrder: 1,
  },
  {
    id: 'b1000001-0000-4000-8000-000000000002',
    slug: 'prophecy',
    name: 'Prophecy',
    description:
      'For readers who want to study Daniel, Revelation, worship, judgment, and last-day messages with care.',
    sortOrder: 2,
  },
  {
    id: 'b1000001-0000-4000-8000-000000000003',
    slug: 'theology',
    name: 'Theology',
    description:
      'For deeper doctrinal studies that require careful context and Scripture-to-Scripture reasoning.',
    sortOrder: 3,
  },
  {
    id: 'b1000001-0000-4000-8000-000000000004',
    slug: 'life-application',
    name: 'Life Application',
    description:
      'For practical studies on prayer, character, temptation, habits, relationships, and daily obedience.',
    sortOrder: 4,
  },
]

const wordStudies: WordStudy[] = [
  {
    id: 'c2000001-0000-4000-8000-000000000001',
    lemma: 'λόγος',
    transliteration: 'logos',
    strongs: 'G3056',
    gloss: 'Speech, message, divine expression—embodied in Christ.',
    language: 'greek',
  },
]

const lessonOrigin1: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000601',
  slug: 'did-god-create-the-devil',
  studySeriesId: 'e4000001-0000-4000-8000-000000000060',
  title: 'Did God Create the Devil?',
  summary:
    'Learn how the Bible explains Satan’s origin and why God is not the author of evil.',
  durationMinutes: 10,
  scripture: '1 John 3:8 · Revelation 12:9 · Ezekiel 28:15',
  sortOrder: 1,
  progressState: 'not_started',
  sections: [],
}

const lessonOrigin2: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000602',
  slug: 'lucifer-before-the-fall',
  studySeriesId: 'e4000001-0000-4000-8000-000000000060',
  title: 'Lucifer Before the Fall',
  summary:
    'Study Lucifer’s original beauty, wisdom, position, and purpose before sin was found in him.',
  durationMinutes: 10,
  scripture: 'Isaiah 14:12 · Luke 10:18 · Ezekiel 28:12 to 15',
  sortOrder: 2,
  progressState: 'not_started',
  sections: [],
}

const lessonOrigin3: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000603',
  slug: 'the-birth-of-pride',
  studySeriesId: 'e4000001-0000-4000-8000-000000000060',
  title: 'The Birth of Pride',
  summary:
    'See how pride, jealousy, and self-exaltation turned Lucifer’s heart against God.',
  durationMinutes: 10,
  scripture: 'Ezekiel 28:17 · Isaiah 14:13 to 14 · Matthew 4:8 to 10',
  sortOrder: 3,
  progressState: 'not_started',
  sections: [],
}

const lessonOrigin4: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000604',
  slug: 'war-in-heaven',
  studySeriesId: 'e4000001-0000-4000-8000-000000000060',
  title: 'War in Heaven',
  summary:
    'Understand why Lucifer was cast out and how rebellion spread among the angels.',
  durationMinutes: 11,
  scripture: 'Revelation 12:7 to 9 · Revelation 12:4 · John 8:44',
  sortOrder: 4,
  progressState: 'not_started',
  sections: [],
}

const lessonOrigin5: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000605',
  slug: 'the-first-lie-on-earth',
  studySeriesId: 'e4000001-0000-4000-8000-000000000060',
  title: 'The First Lie on Earth',
  summary:
    'Study how Satan deceived Eve and introduced sin, suffering, and death to humanity.',
  durationMinutes: 11,
  scripture: 'Genesis 2:16 to 17 · Genesis 3:1 · Genesis 3:4 to 5 · Genesis 3:22 to 24',
  sortOrder: 5,
  progressState: 'not_started',
  sections: [],
}

const lessonOrigin6: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000606',
  slug: 'how-satan-deceives-today',
  studySeriesId: 'e4000001-0000-4000-8000-000000000060',
  title: 'How Satan Deceives Today',
  summary:
    'Learn Satan’s methods of deception and how Scripture protects believers from counterfeit light.',
  durationMinutes: 11,
  scripture: '2 Corinthians 11:14 to 15 · Matthew 4:5 to 7 · Revelation 16:13 to 14 · 1 Peter 5:8',
  sortOrder: 6,
  progressState: 'not_started',
  sections: [],
}

const lessonOrigin7: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000607',
  slug: 'how-god-ends-sin-forever',
  studySeriesId: 'e4000001-0000-4000-8000-000000000060',
  title: 'How God Ends Sin Forever',
  summary:
    'See how God will end sin, vindicate His character, and restore creation through Christ.',
  durationMinutes: 11,
  scripture: 'Revelation 20:10 · Matthew 25:41 · Ezekiel 28:18 to 19 · Philippians 2:10 to 11 · Nahum 1:9',
  sortOrder: 7,
  progressState: 'not_started',
  sections: [],
}

const lessonGodLove1: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000611',
  slug: 'the-logic-of-love',
  studySeriesId: 'e4000001-0000-4000-8000-000000000070',
  title: 'The Logic of Love',
  summary:
    'See why love requires communication and why a God of love would want to be known.',
  durationMinutes: 10,
  scripture: '1 John 4:8 · Genesis 1:27 · John 15:15 · 2 Timothy 3:16',
  sortOrder: 1,
  progressState: 'not_started',
  sections: [],
}

const lessonGodLove2: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000612',
  slug: 'a-god-who-speaks',
  studySeriesId: 'e4000001-0000-4000-8000-000000000070',
  title: 'A God Who Speaks',
  summary:
    'See how God speaks through prophets, apostles, and Scripture so His love can be known with clarity.',
  durationMinutes: 10,
  scripture: 'Hebrews 1:1 to 2 · 2 Peter 1:21 · 2 Timothy 3:16 · John 17:17',
  sortOrder: 2,
  progressState: 'not_started',
  sections: [],
}

const lessonGodLove3: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000613',
  slug: 'a-god-who-knows-the-future',
  studySeriesId: 'e4000001-0000-4000-8000-000000000070',
  title: 'A God Who Knows the Future',
  summary:
    'Walk through Daniel 2 and see prophecy as confidence in the God who knows the end from the beginning.',
  durationMinutes: 12,
  scripture: 'Daniel 2:27 to 28 · Daniel 2:44 · Isaiah 46:9 to 10 · John 14:29',
  sortOrder: 3,
  progressState: 'not_started',
  sections: [],
}

const lessonGodLove4: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000614',
  slug: 'a-god-who-can-be-known',
  studySeriesId: 'e4000001-0000-4000-8000-000000000070',
  title: 'A God Who Can Be Known',
  summary:
    'See why eternal life is knowing God through Jesus Christ, not merely endless time or bare facts.',
  durationMinutes: 10,
  scripture: 'John 17:3 · Jeremiah 9:23 to 24 · Hosea 6:3 · John 14:7',
  sortOrder: 4,
  progressState: 'not_started',
  sections: [],
}

const lessonGodLove5: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000615',
  slug: 'truth-has-a-center',
  studySeriesId: 'e4000001-0000-4000-8000-000000000070',
  title: 'Truth Has a Center',
  summary:
    'See how all true doctrine reveals God’s character, because Scripture’s center is the God who is love.',
  durationMinutes: 10,
  scripture: '1 John 4:16 · John 5:39 · Luke 24:27 · Psalm 89:14',
  sortOrder: 5,
  progressState: 'not_started',
  sections: [],
}

const lessonGodLove6: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000616',
  slug: 'jesus-reveals-the-father',
  studySeriesId: 'e4000001-0000-4000-8000-000000000070',
  title: 'Jesus Reveals the Father',
  summary:
    'See Jesus as the clearest revelation of the Father’s character: mercy, truth, and love made visible.',
  durationMinutes: 10,
  scripture: 'John 14:8 to 9 · Hebrews 1:3 · Colossians 1:15 · John 1:18',
  sortOrder: 6,
  progressState: 'not_started',
  sections: [],
}

const lessonGodLove7: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000617',
  slug: 'the-invitation-to-friendship',
  studySeriesId: 'e4000001-0000-4000-8000-000000000070',
  title: 'The Invitation to Friendship',
  summary:
    'Respond to God’s invitation into friendship: trust, obedience, nearness, and life with Him through Christ.',
  durationMinutes: 10,
  scripture: 'John 15:13 to 15 · Revelation 21:3 · James 2:23 · Psalm 25:14',
  sortOrder: 7,
  progressState: 'not_started',
  sections: [],
}

const godIsLoveLongDescription = `This beginner-friendly BibleStem study explores the character of God through Scripture. It shows that love requires communication, that the Bible is God’s self-revelation, that prophecy gives a rational basis for trust, and that every true doctrine reveals something about God’s heart. The goal is not merely to learn religious information, but to know God personally.`

const seriesGodIsLove: StudySeries = {
  id: 'e4000001-0000-4000-8000-000000000070',
  slug: 'god-is-love',
  studyPathId: 'b1000001-0000-4000-8000-000000000001',
  title: 'God Is Love',
  subtitle: 'Scripture, prophecy, doctrine, and salvation through the lens of God’s love.',
  shortDescription:
    'Discover why Scripture, prophecy, doctrine, and salvation all begin with one central truth: God is love.',
  longDescription: godIsLoveLongDescription,
  description: godIsLoveLongDescription,
  level: 'Beginner',
  durationSummary: '75 min total',
  lessonsCount: 7,
  featured: true,
  collectionLabel: 'Foundational Studies',
  sortOrder: 0,
  whatYouWillLearn: [
    'Help users see Bible truth through the central reality that God is love.',
    'Learn why communication matters if God is love, and how Scripture reveals Him honestly.',
    'See prophecy as evidence that God orders history and invites trust.',
    'Ground doctrine in Christ so teaching stays warm and personal.',
    'Respond to Jesus’s invitation into friendship shaped by grace and truth.',
  ],
  lessons: [
    lessonGodLove1,
    lessonGodLove2,
    lessonGodLove3,
    lessonGodLove4,
    lessonGodLove5,
    lessonGodLove6,
    lessonGodLove7,
  ],
}

const originOfEvilLongDescription = `This BibleStem study explains where evil came from, who Satan is, how Lucifer fell, why God allowed sin to unfold, how deception works, and how Christ will finally end evil forever. The study is Scripture-first, practical, and focused on God’s character.`

const seriesOriginOfEvil: StudySeries = {
  id: 'e4000001-0000-4000-8000-000000000060',
  slug: 'origin-of-evil',
  studyPathId: 'b1000001-0000-4000-8000-000000000001',
  title: 'The Origin of Evil',
  subtitle: 'God created Lucifer perfect, but Lucifer chose pride, rebellion, and deception.',
  shortDescription:
    'A clear Bible study on Lucifer, Satan, sin, deception, free will, and God’s character.',
  longDescription: originOfEvilLongDescription,
  description: originOfEvilLongDescription,
  level: 'Intermediate',
  durationSummary: '80 min total',
  lessonsCount: 7,
  featured: false,
  collectionLabel: 'Growth Studies',
  sortOrder: 2,
  whatYouWillLearn: [
    'Help users understand that God did not create the devil. God created Lucifer perfect, but Lucifer chose pride, rebellion, and deception.',
    'Trace Satan’s origin and methods using Scripture rather than speculation.',
    'See how pride and self-exaltation corrupt trusted roles.',
    'Recognize deception’s patterns from Eden to today.',
    'Anchor hope in Christ’s final defeat of evil and God’s restored creation.',
  ],
  lessons: [
    lessonOrigin1,
    lessonOrigin2,
    lessonOrigin3,
    lessonOrigin4,
    lessonOrigin5,
    lessonOrigin6,
    lessonOrigin7,
  ],
}

const lessonThreeAngels1: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000101',
  slug: 'why-revelation-14-matters',
  studySeriesId: 'e4000001-0000-4000-8000-000000000020',
  title: 'Why Revelation 14 Matters',
  summary:
    'Before the final harvest, God sends a global message of gospel, worship, warning, and decision.',
  durationMinutes: 8,
  scripture: 'Revelation 14:6 to 7',
  sortOrder: 1,
  progressState: 'not_started',
  sections: [],
}

const lessonThreeAngels2: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000102',
  slug: 'the-everlasting-gospel',
  studySeriesId: 'e4000001-0000-4000-8000-000000000020',
  title: 'The Everlasting Gospel',
  summary:
    "The final message begins with good news: Christ, the Lamb foreordained, and eternal life as God's gift.",
  durationMinutes: 9,
  scripture: 'Revelation 14:6 · 1 Peter 1:18 to 20 · Romans 6:23',
  sortOrder: 2,
  progressState: 'not_started',
  sections: [],
}

const lessonThreeAngels3: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000103',
  slug: 'what-it-means-to-fear-god',
  studySeriesId: 'e4000001-0000-4000-8000-000000000020',
  title: 'What It Means to Fear God',
  summary:
    'Fear God is reverence and holy respect, the start of wisdom, not panic, as Revelation and wisdom literature agree.',
  durationMinutes: 9,
  scripture: 'Revelation 14:7 · Proverbs 9:10 · Ecclesiastes 12:13',
  sortOrder: 3,
  progressState: 'not_started',
  sections: [],
}

const lessonThreeAngels4: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000104',
  slug: 'how-to-glorify-god',
  studySeriesId: 'e4000001-0000-4000-8000-000000000020',
  title: 'How to Glorify God',
  summary:
    'Give glory to God: reflect His character in worship, works, body, spirit, and daily choices that point to Him.',
  durationMinutes: 9,
  scripture: 'Revelation 14:7 · Matthew 5:16 · 1 Corinthians 6:19 to 20 · 1 Corinthians 10:31',
  sortOrder: 4,
  progressState: 'not_started',
  sections: [],
}

const lessonThreeAngels5: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000105',
  slug: 'the-hour-of-gods-judgment',
  studySeriesId: 'e4000001-0000-4000-8000-000000000020',
  title: "The Hour of God's Judgment",
  summary:
    'The hour of His judgment is here: truth made clear, books opened, and Jesus our Advocate for those in Him.',
  durationMinutes: 10,
  scripture: 'Revelation 14:7 · Daniel 7:9 to 10 · 1 John 2:1 · 1 John 1:9',
  sortOrder: 5,
  progressState: 'not_started',
  sections: [],
}

const lessonThreeAngels6: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000106',
  slug: 'the-foundation-of-true-worship',
  studySeriesId: 'e4000001-0000-4000-8000-000000000020',
  title: 'The Foundation of True Worship',
  summary:
    'Worship the Creator: creation, Christ at the center, loyalty, and the memorial God placed at the beginning.',
  durationMinutes: 10,
  scripture: 'Revelation 14:7 · Colossians 1:15 to 17 · Psalm 95:6 · Revelation 4:11',
  sortOrder: 6,
  progressState: 'not_started',
  sections: [],
}

const lessonThreeAngels7: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000107',
  slug: 'mystery-babylon-the-great',
  studySeriesId: 'e4000001-0000-4000-8000-000000000020',
  title: 'Mystery: Babylon the Great',
  summary:
    "Babylon from Babel to Revelation: confusion, false worship, and heaven's call to come out of the world's system.",
  durationMinutes: 10,
  scripture: 'Revelation 14:8 · Genesis 11:4 · Revelation 17:5 · Revelation 17:15',
  sortOrder: 7,
  progressState: 'not_started',
  sections: [],
}

const lessonThreeAngels8: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000108',
  slug: 'babylons-abominable-wine',
  studySeriesId: 'e4000001-0000-4000-8000-000000000020',
  title: "Babylon's Abominable Wine",
  summary:
    "False teaching as Babylon's wine: confusion and wrong worship, answered by testing everything in Scripture.",
  durationMinutes: 10,
  scripture: 'Revelation 14:8 · Revelation 17:2 · Jeremiah 51:7 · John 17:17',
  sortOrder: 8,
  progressState: 'not_started',
  sections: [],
}

const lessonThreeAngels9: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000109',
  slug: 'babylons-filthy-fornication',
  studySeriesId: 'e4000001-0000-4000-8000-000000000020',
  title: "Babylon's Filthy Fornication",
  summary:
    'Prophetic fornication: religious authority joined to political power, conscience, and Christ\'s kingdom.',
  durationMinutes: 10,
  scripture: 'Revelation 17:1 to 2 · Revelation 18:3 · Matthew 22:21 · John 18:36',
  sortOrder: 9,
  progressState: 'not_started',
  sections: [],
}

const lessonThreeAngels10: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000110',
  slug: 'revelations-sea-beast',
  studySeriesId: 'e4000001-0000-4000-8000-000000000020',
  title: "Revelation's Sea Beast",
  summary:
    'Daniel and Revelation: beasts as kingdoms, the sea beast as a prophetic system, and why the warning matters.',
  durationMinutes: 10,
  scripture: 'Revelation 13:1 to 2 · Daniel 7:3 · Daniel 7:17',
  sortOrder: 10,
  progressState: 'not_started',
  sections: [],
}

const lessonThreeAngels11: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000111',
  slug: 'revelations-land-beast',
  studySeriesId: 'e4000001-0000-4000-8000-000000000020',
  title: "Revelation's Land Beast",
  summary:
    'The earth beast: lamb-like horns, dragon-like speech, and a prophetic system that restores the first beast.',
  durationMinutes: 10,
  scripture: 'Revelation 13:11 · Revelation 13:12 · Revelation 12:16 · Matthew 22:21',
  sortOrder: 11,
  progressState: 'not_started',
  sections: [],
}

const lessonThreeAngels12: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000112',
  slug: 'the-image-of-the-beast',
  studySeriesId: 'e4000001-0000-4000-8000-000000000020',
  title: 'The Image of the Beast',
  summary:
    'Likeness to the first beast\'s system: enforced worship, Daniel\'s pattern, and conscience in the final crisis.',
  durationMinutes: 10,
  scripture: 'Revelation 13:14 to 15 · Revelation 13:12 · Daniel 3:4 to 6',
  sortOrder: 12,
  progressState: 'not_started',
  sections: [],
}

const lessonThreeAngels13: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000113',
  slug: '666-the-number-of-the-beast',
  studySeriesId: 'e4000001-0000-4000-8000-000000000020',
  title: '666: The Number of the Beast',
  summary:
    '666, wisdom, and counterfeit authority: the beast, blasphemy, and human claims in Christ\'s place.',
  durationMinutes: 10,
  scripture: 'Revelation 13:18 · Revelation 13:5 to 6 · 2 Thessalonians 2:3 to 4',
  sortOrder: 13,
  progressState: 'not_started',
  sections: [],
}

const lessonThreeAngels14: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000114',
  slug: 'the-mark-of-the-beast-part-1',
  studySeriesId: 'e4000001-0000-4000-8000-000000000020',
  title: 'The Mark of the Beast, Part 1',
  summary:
    'Worship, law, and loyalty: the mark, God\'s commandments, the seal, and what Revelation contrasts.',
  durationMinutes: 10,
  scripture: 'Revelation 14:9 to 12 · Revelation 12:17 · Hebrews 8:10 · Isaiah 8:16',
  sortOrder: 14,
  progressState: 'not_started',
  sections: [],
}

const lessonThreeAngels15: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000115',
  slug: 'the-mark-of-the-beast-part-2',
  studySeriesId: 'e4000001-0000-4000-8000-000000000020',
  title: 'The Mark of the Beast, Part 2',
  summary:
    'Creation, Sabbath, authority: Scripture, Jesus as Lord of the Sabbath, and the mark when human rule replaces God\'s command.',
  durationMinutes: 10,
  scripture: 'Genesis 2:2 to 3 · Exodus 20:8 to 11 · Mark 2:27 to 28 · Daniel 7:25',
  sortOrder: 15,
  progressState: 'not_started',
  sections: [],
}

const lessonThreeAngels16: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000116',
  slug: 'the-wine-of-gods-wrath',
  studySeriesId: 'e4000001-0000-4000-8000-000000000020',
  title: "The Wine of God's Wrath",
  summary:
    'Mercy, then judgment: the wine of wrath, the plagues, Christ\'s gift, and chosen response.',
  durationMinutes: 10,
  scripture: 'Revelation 14:9 to 10 · Revelation 15:1 · Revelation 16:1 · Romans 6:23',
  sortOrder: 16,
  progressState: 'not_started',
  sections: [],
}

const lessonThreeAngels17: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000117',
  slug: 'the-smoke-of-babylons-torment',
  studySeriesId: 'e4000001-0000-4000-8000-000000000020',
  title: "The Smoke of Babylon's Torment",
  summary:
    'Smoke, Sodom, and Scripture: final judgment, the second death, and destruction that ends sin.',
  durationMinutes: 10,
  scripture: 'Revelation 14:10 to 11 · Jude 7 · 2 Peter 2:6 · Malachi 4:1',
  sortOrder: 17,
  progressState: 'not_started',
  sections: [],
}

const lessonThreeAngels18: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000118',
  slug: 'the-patience-of-the-saints',
  studySeriesId: 'e4000001-0000-4000-8000-000000000020',
  title: 'The Patience of the Saints',
  summary:
    'Hupomone: endurance, prayer, commandments, and faith in Jesus when pressure rises.',
  durationMinutes: 10,
  scripture: 'Revelation 14:12 · Luke 18:1 · Luke 18:7 to 8 · 1 Peter 5:8',
  sortOrder: 18,
  progressState: 'not_started',
  sections: [],
}

const lessonThreeAngels19: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000119',
  slug: 'the-commandments-of-god',
  studySeriesId: 'e4000001-0000-4000-8000-000000000020',
  title: 'The Commandments of God',
  summary:
    'Love and obedience: God\'s law, the heart, Revelation\'s faithful, and life that answers love.',
  durationMinutes: 10,
  scripture: 'Revelation 14:12 · Revelation 12:17 · Ecclesiastes 12:13 · John 14:15',
  sortOrder: 19,
  progressState: 'not_started',
  sections: [],
}

const lessonThreeAngels20: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000120',
  slug: 'the-faith-of-jesus',
  studySeriesId: 'e4000001-0000-4000-8000-000000000020',
  title: 'The Faith of Jesus',
  summary:
    'Commandments and the faith of Jesus: grace, active faith, and Christ at the center.',
  durationMinutes: 10,
  scripture: 'Revelation 14:12 · Ephesians 2:8 to 10 · James 2:17 · Galatians 2:20',
  sortOrder: 20,
  progressState: 'not_started',
  sections: [],
}

const lessonThreeAngels21: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000121',
  slug: 'the-remnant-of-her-seed',
  studySeriesId: 'e4000001-0000-4000-8000-000000000020',
  title: 'The Remnant of Her Seed',
  summary:
    'Spiritual Israel worldwide: the woman, Christ the Seed, commandments, and the testimony of Jesus.',
  durationMinutes: 10,
  scripture: 'Revelation 12:17 · Genesis 3:15 · Galatians 3:16 · Galatians 3:29',
  sortOrder: 21,
  progressState: 'not_started',
  sections: [],
}

const lessonThreeAngels22: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000122',
  slug: 'the-144000',
  studySeriesId: 'e4000001-0000-4000-8000-000000000020',
  title: 'The 144,000',
  summary:
    'Sealed and standing: the 144,000, victory over the beast, and following the Lamb.',
  durationMinutes: 10,
  scripture: 'Revelation 7:3 · Revelation 14:1 · Revelation 14:4 to 5 · Revelation 15:2 to 3',
  sortOrder: 22,
  progressState: 'not_started',
  sections: [],
}

const lessonThreeAngels23: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000123',
  slug: 'the-testimony-of-jesus',
  studySeriesId: 'e4000001-0000-4000-8000-000000000020',
  title: 'The Testimony of Jesus',
  summary:
    'Spirit of prophecy, testing by Scripture, and guidance that exalts Christ and prepares for His return.',
  durationMinutes: 10,
  scripture:
    'Revelation 12:17 · Revelation 19:10 · Revelation 22:8 to 9 · 1 Thessalonians 5:20 to 21',
  sortOrder: 23,
  progressState: 'not_started',
  sections: [],
}

const lessonThreeAngels24: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000124',
  slug: 'the-harvest-of-the-earth-is-ripe',
  studySeriesId: 'e4000001-0000-4000-8000-000000000020',
  title: 'The Harvest of the Earth Is Ripe',
  summary:
    'From the three angels to the harvest: ripening character, latter rain, and loyalty before Christ returns.',
  durationMinutes: 10,
  scripture: 'Revelation 14:14 to 16 · Revelation 14:18 to 19 · Matthew 13:30',
  sortOrder: 24,
  progressState: 'not_started',
  sections: [],
}

const lessonThreeAngels25: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000125',
  slug: 'come-out-of-her-my-people',
  studySeriesId: 'e4000001-0000-4000-8000-000000000020',
  title: 'Come Out of Her My People',
  summary:
    "Mercy before judgment: Babylon's fall, hearing Christ's voice, and the call to come out to Him.",
  durationMinutes: 10,
  scripture: 'Revelation 18:1 to 4 · John 10:27 · Revelation 14:12',
  sortOrder: 25,
  progressState: 'not_started',
  sections: [],
}

const lessonDeathHope1: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000501',
  slug: 'the-right-to-the-tree-of-life',
  studySeriesId: 'e4000001-0000-4000-8000-000000000050',
  title: 'The Right to the Tree of Life',
  summary:
    'Creation and conditional life: the tree of life, dependence on God, and eternal life as His gift in Christ, from Genesis and Romans.',
  durationMinutes: 10,
  scripture: 'Genesis 2:7 · Genesis 2:9 · Genesis 3:22 to 24 · Romans 6:23',
  sortOrder: 1,
  progressState: 'not_started',
  sections: [],
}
const lessonDeathHope2: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000502',
  slug: 'rachels-departing-soul',
  studySeriesId: 'e4000001-0000-4000-8000-000000000050',
  title: 'Rachel’s Departing Soul',
  summary:
    'Understand the biblical meaning of soul, spirit, breath, and life through Genesis 35:18 and related passages.',
  durationMinutes: 12,
  scripture: 'Genesis 35:18 · Genesis 2:7 · Ecclesiastes 12:7 · James 2:26',
  sortOrder: 2,
  progressState: 'not_started',
  sections: [],
}
const lessonDeathHope3: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000503',
  slug: 'a-thief-and-a-witch',
  studySeriesId: 'e4000001-0000-4000-8000-000000000050',
  title: 'A Thief and a Witch',
  summary: 'The thief on the cross, Paradise, John 20:17, the witch of Endor, and reading by clear Scripture, not appearances.',
  durationMinutes: 12,
  scripture: 'Luke 23:42 to 43 · John 20:17 · 1 Samuel 28:13 to 14 · Deuteronomy 18:10 to 12',
  sortOrder: 3,
  progressState: 'not_started',
  sections: [],
}
const lessonDeathHope4: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000504',
  slug: 'absent-from-the-body',
  studySeriesId: 'e4000001-0000-4000-8000-000000000050',
  title: 'Absent from the Body',
  summary:
    '2 Corinthians 5, the tent, the building, being clothed, and resurrection hope with 1 Corinthians 15.',
  durationMinutes: 12,
  scripture:
    '2 Corinthians 5:1 · 2 Corinthians 5:4 · 2 Corinthians 5:8 to 10 · 1 Corinthians 15:52 to 54',
  sortOrder: 4,
  progressState: 'not_started',
  sections: [],
}
const lessonDeathHope5: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000505',
  slug: 'pauls-desire-to-depart',
  studySeriesId: 'e4000001-0000-4000-8000-000000000050',
  title: 'Paul’s Desire to Depart',
  summary:
    'Paul, departure, the return of Christ, and why the next moment for the believer is resurrection hope.',
  durationMinutes: 11,
  scripture: 'Philippians 1:21 to 23 · 2 Timothy 4:6 to 8 · 1 Thessalonians 4:16 to 17',
  sortOrder: 5,
  progressState: 'not_started',
  sections: [],
}
const lessonDeathHope6: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000506',
  slug: 'the-souls-under-the-altar',
  studySeriesId: 'e4000001-0000-4000-8000-000000000050',
  title: 'The Souls Under the Altar',
  summary:
    'Revelation 6, sanctuary imagery, martyrs, blood, justice, and Scripture explaining Scripture.',
  durationMinutes: 12,
  scripture: 'Revelation 6:9 to 11 · Genesis 4:10 · Leviticus 17:11',
  sortOrder: 6,
  progressState: 'not_started',
  sections: [],
}
const lessonDeathHope7: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000507',
  slug: 'the-spirits-of-just-men',
  studySeriesId: 'e4000001-0000-4000-8000-000000000050',
  title: 'The Spirits of Just Men',
  summary:
    'Hebrews 12, the assembly above, Christ the mediator, the new covenant, and spirits of just men made perfect.',
  durationMinutes: 12,
  scripture: 'Hebrews 12:22 to 24 · Hebrews 11:39 to 40 · Hebrews 10:14',
  sortOrder: 7,
  progressState: 'not_started',
  sections: [],
}
const lessonDeathHope8: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000508',
  slug: 'preaching-to-the-spirits-in-prison',
  studySeriesId: 'e4000001-0000-4000-8000-000000000050',
  title: 'Preaching to the Spirits in Prison',
  summary:
    "1 Peter 3, Noah, the Spirit, preaching, resurrection, and Christ's victory in context.",
  durationMinutes: 12,
  scripture: '1 Peter 3:18 to 20 · 2 Peter 2:5 · Genesis 6:3',
  sortOrder: 8,
  progressState: 'not_started',
  sections: [],
}
const lessonDeathHope9: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000509',
  slug: 'three-doctrines-that-belong-together',
  studySeriesId: 'e4000001-0000-4000-8000-000000000050',
  title: 'Three Doctrines That Belong Together',
  summary:
    'Judgment, the state of the dead, the second coming, and keeping those doctrines with Scripture together.',
  durationMinutes: 11,
  scripture:
    'Genesis 2:7 · Ecclesiastes 12:7 · Daniel 12:2 · 2 Corinthians 5:10 · Revelation 22:12',
  sortOrder: 9,
  progressState: 'not_started',
  sections: [],
}
const lessonDeathHope10: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000510',
  slug: 'the-dead-who-stand-before-god',
  studySeriesId: 'e4000001-0000-4000-8000-000000000050',
  title: 'The Dead Who Stand Before God',
  summary:
    'Revelation 20, the judgment books, the millennium, resurrection, the second death, and Hades.',
  durationMinutes: 12,
  scripture: 'Revelation 20:11 to 12 · Revelation 20:13 to 15 · Daniel 7:10',
  sortOrder: 10,
  progressState: 'not_started',
  sections: [],
}
const lessonDeathHope11: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000511',
  slug: 'the-resurrection-and-the-life',
  studySeriesId: 'e4000001-0000-4000-8000-000000000050',
  title: 'The Resurrection and the Life',
  summary:
    'John 11, Lazarus, resurrection, Christ over death, and the tie to the rich man and Lazarus in Luke 16.',
  durationMinutes: 12,
  scripture: 'John 11:11 to 14 · John 11:23 to 26 · John 11:43 to 44',
  sortOrder: 11,
  progressState: 'not_started',
  sections: [],
}
const lessonDeathHope12: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000512',
  slug: 'the-keys-of-hades',
  studySeriesId: 'e4000001-0000-4000-8000-000000000050',
  title: 'The Keys of Hades',
  summary:
    "Sheol, Hades, the grave, translation, resurrection, and Christ's authority over death.",
  durationMinutes: 12,
  scripture:
    'Psalm 16:10 · Acts 2:27 · Hosea 13:14 · 1 Corinthians 15:54 to 55 · Revelation 1:18',
  sortOrder: 12,
  progressState: 'not_started',
  sections: [],
}
const lessonDeathHope13: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000513',
  slug: 'the-rich-man-and-lazarus',
  studySeriesId: 'e4000001-0000-4000-8000-000000000050',
  title: 'The Rich Man and Lazarus',
  summary:
    'Luke 16, the Pharisees, parable, Moses and the prophets, resurrection, and Scripture as enough.',
  durationMinutes: 12,
  scripture: 'Luke 16:19 to 21 · Luke 16:29 to 31 · John 11:43 to 44',
  sortOrder: 13,
  progressState: 'not_started',
  sections: [],
}
const lessonDeathHope14: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000514',
  slug: 'all-live-to-him',
  studySeriesId: 'e4000001-0000-4000-8000-000000000050',
  title: 'All Live to Him',
  summary:
    'Luke 20, the Sadducees, the God of Abraham, Isaac, and Jacob, resurrection, and all live to Him.',
  durationMinutes: 11,
  scripture: 'Luke 20:37 to 38 · Matthew 22:29 · Acts 23:8 · Hebrews 11:13',
  sortOrder: 14,
  progressState: 'not_started',
  sections: [],
}
const lessonDeathHope15: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000515',
  slug: 'the-worm-and-the-fire',
  studySeriesId: 'e4000001-0000-4000-8000-000000000050',
  title: 'The Worm and the Fire',
  summary:
    'Everlasting fire, unquenchable fire, the worm, final destruction, and God as just and good.',
  durationMinutes: 12,
  scripture:
    'Matthew 25:41 · Matthew 25:46 · Mark 9:43 to 44 · Jude 7 · 2 Peter 2:6',
  sortOrder: 15,
  progressState: 'not_started',
  sections: [],
}
const lessonDeathHope16: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000516',
  slug: 'immortality-or-resurrection',
  studySeriesId: 'e4000001-0000-4000-8000-000000000050',
  title: 'Immortality or Resurrection?',
  summary:
    'Natural immortality versus resurrection: 1 Corinthians 15, athanasia, and Christ as the giver of life.',
  durationMinutes: 12,
  scripture:
    '1 Corinthians 15:16 to 18 · 1 Corinthians 15:20 to 22 · 2 Timothy 1:10 · 1 Timothy 6:15 to 16',
  sortOrder: 16,
  progressState: 'not_started',
  sections: [],
}
const lessonDeathHope17: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000517',
  slug: 'the-first-lie',
  studySeriesId: 'e4000001-0000-4000-8000-000000000050',
  title: 'The First Lie',
  summary:
    'Genesis 3, mot tamut, Satan, the senses, and holding to what God has said in His Word.',
  durationMinutes: 12,
  scripture: 'Genesis 2:16 to 17 · Genesis 3:1 · Genesis 3:4 to 5 · Genesis 3:6',
  sortOrder: 17,
  progressState: 'not_started',
  sections: [],
}
const lessonDeathHope18: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000518',
  slug: 'spirits-of-devils',
  studySeriesId: 'e4000001-0000-4000-8000-000000000050',
  title: 'Spirits of Devils',
  summary:
    'Revelation 16, daimonia, false signs, Isaiah 8, and Scripture as the test of every spirit.',
  durationMinutes: 12,
  scripture: 'Revelation 16:13 to 14 · Matthew 24:23 to 25 · Isaiah 8:19 to 20',
  sortOrder: 18,
  progressState: 'not_started',
  sections: [],
}

const deathResurrectionHopeLongDescription = `A Scripture-first study on misunderstood passages about the soul, death, resurrection, hell, and eternal life.

This advanced study walks through commonly misunderstood Bible passages about death, the soul, spirit, resurrection, hell, and spiritualism. The goal is not to argue, but to carefully let Scripture interpret Scripture. Each lesson helps the learner see that eternal life is not something humanity possesses by nature. It is a gift found in Christ and received fully at the resurrection.`

const seriesDeathResurrectionHopeOfLife: StudySeries = {
  id: 'e4000001-0000-4000-8000-000000000050',
  slug: 'death-resurrection-hope-of-life',
  studyPathId: 'b1000001-0000-4000-8000-000000000003',
  title: 'Death, Resurrection, and the Hope of Life',
  subtitle: 'Theology · State of the Dead · Eternal life as God’s gift in Christ.',
  shortDescription:
    'A Scripture-first study on death, the soul, resurrection, hell, and eternal life through commonly misunderstood Bible passages.',
  longDescription: deathResurrectionHopeLongDescription,
  description: deathResurrectionHopeLongDescription,
  level: 'Advanced',
  durationSummary: '180 min total',
  lessonsCount: 18,
  featured: false,
  collectionLabel: 'Advanced Studies',
  sortOrder: 1,
  whatYouWillLearn: [
    'Help learners understand what the Bible teaches about death, the soul, resurrection, judgment, and eternal life without confusion or speculation.',
    'Let Scripture interpret Scripture on death, soul, spirit, resurrection, and judgment.',
    'See eternal life as God’s gift in Christ—not a natural possession of every human soul.',
    'Understand commonly misread passages in calm context, without argument or fear.',
    'Connect the state of the dead, the second coming, and the resurrection hope.',
    'Recognize deception and spiritualism in light of what the Bible actually says.',
  ],
  lessons: [
    lessonDeathHope1,
    lessonDeathHope2,
    lessonDeathHope3,
    lessonDeathHope4,
    lessonDeathHope5,
    lessonDeathHope6,
    lessonDeathHope7,
    lessonDeathHope8,
    lessonDeathHope9,
    lessonDeathHope10,
    lessonDeathHope11,
    lessonDeathHope12,
    lessonDeathHope13,
    lessonDeathHope14,
    lessonDeathHope15,
    lessonDeathHope16,
    lessonDeathHope17,
    lessonDeathHope18,
  ],
}

const lessonKC1: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000201',
  slug: 'the-story-that-holds-together',
  studySeriesId: 'e4000001-0000-4000-8000-000000000030',
  title: 'The Story That Holds Together',
  summary: 'Why the Bible reads as one unfolding drama rather than scattered fragments.',
  durationMinutes: 10,
  scripture: 'Luke 24:27 · John 5:39',
  sortOrder: 1,
  progressState: 'not_started',
  sections: [],
}

const lessonKC2: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000202',
  slug: 'covenant-and-promise',
  studySeriesId: 'e4000001-0000-4000-8000-000000000030',
  title: 'Covenant and Promise',
  summary: 'How God’s faithfulness ties the Old and New Testaments into one hope.',
  durationMinutes: 10,
  scripture: 'Genesis 12:1 to 3 · 2 Corinthians 1:20',
  sortOrder: 2,
  progressState: 'not_started',
  sections: [],
}

const lessonKC3: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000203',
  slug: 'seeing-jesus-in-the-text',
  studySeriesId: 'e4000001-0000-4000-8000-000000000030',
  title: 'Seeing Jesus in the Text',
  summary: 'Humble habits for noticing how passages point to Christ without forcing the text.',
  durationMinutes: 10,
  scripture: 'Colossians 1:15 to 18 · Hebrews 1:1 to 3',
  sortOrder: 3,
  progressState: 'not_started',
  sections: [],
}

const seriesKnowingChristInScripture: StudySeries = {
  id: 'e4000001-0000-4000-8000-000000000030',
  slug: 'knowing-christ-in-scripture',
  studyPathId: 'b1000001-0000-4000-8000-000000000003',
  title: 'Knowing Christ in Scripture',
  subtitle: 'Reading the Bible as one story that leads to Jesus.',
  shortDescription:
    'A theology-shaped study for readers who want the big picture: covenants, promise, and Christ at the center without losing the plain sense of the text.',
  description:
    'A theology-shaped study for readers who want the big picture: covenants, promise, and Christ at the center without losing the plain sense of the text.',
  level: 'Intermediate',
  durationSummary: '30 min total',
  lessonsCount: 3,
  featured: false,
  collectionLabel: 'Growth Studies',
  sortOrder: 1,
  whatYouWillLearn: [
    'Trace how Scripture’s storyline develops from promise to fulfillment.',
    'Understand covenant themes without reducing the Bible to a code.',
    'Practice Christ-centered reading that respects context and genre.',
    'Connect doctrine to worship and gratitude rather than argument alone.',
  ],
  lessons: [lessonKC1, lessonKC2, lessonKC3],
}

const lessonFaith1: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000211',
  slug: 'when-faith-feels-quiet',
  studySeriesId: 'e4000001-0000-4000-8000-000000000040',
  title: 'When Faith Feels Quiet',
  summary: 'Honest faith on ordinary days, without performance or noise.',
  durationMinutes: 9,
  scripture: 'Psalm 23 · Matthew 11:28 to 30',
  sortOrder: 1,
  progressState: 'not_started',
  sections: [],
}

const lessonFaith2: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000212',
  slug: 'words-that-heal-at-home',
  studySeriesId: 'e4000001-0000-4000-8000-000000000040',
  title: 'Words That Heal at Home',
  summary: 'Small shifts in speech that honor Christ in close relationships.',
  durationMinutes: 9,
  scripture: 'Proverbs 15:1 · Ephesians 4:29',
  sortOrder: 2,
  progressState: 'not_started',
  sections: [],
}

const lessonFaith3: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000213',
  slug: 'generosity-without-drama',
  studySeriesId: 'e4000001-0000-4000-8000-000000000040',
  title: 'Generosity Without Drama',
  summary: 'Simple generosity as a response to grace, not a bid for approval.',
  durationMinutes: 9,
  scripture: '2 Corinthians 9:7 · 1 Timothy 6:18',
  sortOrder: 3,
  progressState: 'not_started',
  sections: [],
}

const seriesFaithThatShowsUp: StudySeries = {
  id: 'e4000001-0000-4000-8000-000000000040',
  slug: 'faith-that-shows-up',
  studyPathId: 'b1000001-0000-4000-8000-000000000001',
  title: 'Faith That Shows Up',
  subtitle: 'Letting Scripture reshape habits, words, and money.',
  shortDescription:
    'A practical series for believers who want faith to be credible in real rooms: calm trust, kind speech, and open hands.',
  description:
    'A practical series for believers who want faith to be credible in real rooms: calm trust, kind speech, and open hands.',
  level: 'Beginner',
  durationSummary: '27 min total',
  lessonsCount: 3,
  featured: false,
  collectionLabel: 'Foundational Studies',
  sortOrder: 2,
  whatYouWillLearn: [
    'Name the difference between quiet trust and spiritual performance.',
    'Apply a few Proverbs-shaped habits in family conversation.',
    'Let generosity grow from gratitude rather than guilt.',
    'Keep application small, repeatable, and grounded in prayer.',
  ],
  lessons: [lessonFaith1, lessonFaith2, lessonFaith3],
}

const lessonTgwk1: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000701',
  slug: 'why-names-matter',
  studySeriesId: 'e4000001-0000-4000-8000-000000000071',
  title: 'Why Names Matter',
  summary:
    'Show that names in Scripture often reveal identity, character, and story, preparing you for God’s revealed name.',
  durationMinutes: 10,
  scripture: 'Genesis 1:1 · Genesis 2:7 · Genesis 32:27 to 28 · Matthew 1:21',
  sortOrder: 1,
  progressState: 'not_started',
  sections: [],
}

const lessonTgwk2: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000702',
  slug: 'elohim-the-first-name-we-meet',
  studySeriesId: 'e4000001-0000-4000-8000-000000000071',
  title: 'Elohim: The First Name We Meet',
  summary:
    'Meet Elohim in Genesis 1:1 as Creator, trace His voice in creation, and see dignity and relationship woven into the opening chapter.',
  durationMinutes: 10,
  scripture: 'Genesis 1:1 · Genesis 1:26 to 27 · Psalm 100:3',
  sortOrder: 2,
  progressState: 'not_started',
  sections: [],
}

const lessonTgwk3: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000703',
  slug: 'love-at-the-heart-of-god',
  studySeriesId: 'e4000001-0000-4000-8000-000000000071',
  title: 'God Is Love',
  summary:
    'See that love is not merely something God does, but central to who He is, from John’s letters and Scripture’s portrait of love.',
  durationMinutes: 10,
  scripture: '1 John 4:7 to 8 · 1 John 4:16 · 1 Corinthians 13:4 to 5 · Jeremiah 31:3',
  sortOrder: 3,
  progressState: 'not_started',
  sections: [],
}

const lessonTgwk4: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000704',
  slug: 'one-god-more-than-alone',
  studySeriesId: 'e4000001-0000-4000-8000-000000000071',
  title: 'One God, More Than Alone',
  summary:
    'Hold together Deuteronomy’s one LORD with Genesis and the Gospels, where Father, Son, and Holy Spirit appear in loving unity.',
  durationMinutes: 11,
  scripture: 'Deuteronomy 6:4 · Genesis 1:26 · Matthew 3:16 to 17 · Matthew 28:19',
  sortOrder: 4,
  progressState: 'not_started',
  sections: [],
}

const lessonTgwk5: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000705',
  slug: 'love-has-always-existed',
  studySeriesId: 'e4000001-0000-4000-8000-000000000071',
  title: 'Love Has Always Existed',
  summary:
    'See that God did not become loving after creation: love belongs to His eternal life before the foundation of the world.',
  durationMinutes: 10,
  scripture: 'John 17:24 · 1 John 4:8 · John 1:1 to 3 · Ephesians 1:4 to 5',
  sortOrder: 5,
  progressState: 'not_started',
  sections: [],
}

const lessonTgwk6: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000706',
  slug: 'jesus-makes-god-visible',
  studySeriesId: 'e4000001-0000-4000-8000-000000000071',
  title: 'Jesus Makes God Visible',
  summary:
    'See Jesus as the clearest revelation of God’s heart, character, and love through His words, compassion, sacrifice, and the Father made known.',
  durationMinutes: 10,
  scripture: 'John 14:8 to 9 · John 1:18 · Colossians 1:15 · Hebrews 1:3',
  sortOrder: 6,
  progressState: 'not_started',
  sections: [],
}

const lessonTgwk7: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000707',
  slug: 'the-invitation-to-come-near',
  studySeriesId: 'e4000001-0000-4000-8000-000000000071',
  title: 'The Invitation to Come Near',
  summary:
    'Respond to God’s revelation with trust and nearness: draw near to Him, abide in His love, and look toward His dwelling with His people.',
  durationMinutes: 10,
  scripture: 'James 4:8 · Hebrews 4:16 · John 17:3 · 1 John 4:16 · Revelation 21:3',
  sortOrder: 7,
  progressState: 'not_started',
  sections: [],
}

const lessonMadeForMore1: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000801',
  slug: 'more-than-mere-survival',
  studySeriesId: 'e4000001-0000-4000-8000-000000000072',
  title: 'More Than Mere Survival',
  summary:
    'Introduce the question of human identity and show that Scripture gives humanity dignity beyond survival.',
  durationMinutes: 10,
  scripture: 'Psalm 8:3 to 5 · Genesis 1:1',
  sortOrder: 1,
  progressState: 'not_started',
  sections: [],
}

const lessonMadeForMore2: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000802',
  slug: 'created-in-gods-image',
  studySeriesId: 'e4000001-0000-4000-8000-000000000072',
  title: 'Created in God’s Image',
  summary:
    'Explain Genesis 1:26 to 28 and show that every human life carries God-given dignity and purpose.',
  durationMinutes: 10,
  scripture: 'Genesis 1:26 to 28 · Genesis 5:1 to 2 · James 3:9',
  sortOrder: 2,
  progressState: 'not_started',
  sections: [],
}

const lessonMadeForMore3: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000803',
  slug: 'made-for-relationship',
  studySeriesId: 'e4000001-0000-4000-8000-000000000072',
  title: 'Made for Relationship',
  summary:
    'Show that being made in God’s image includes the capacity for love, relationship, and community.',
  durationMinutes: 11,
  scripture: 'Genesis 1:27 · 1 John 4:16',
  sortOrder: 3,
  progressState: 'not_started',
  sections: [],
  contentPending: true,
}

const lessonMadeForMore4: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000804',
  slug: 'free-moral-agents',
  studySeriesId: 'e4000001-0000-4000-8000-000000000072',
  title: 'Free Moral Agents',
  summary: 'Explain why love requires freedom and why God created humans with meaningful choice.',
  durationMinutes: 10,
  scripture: 'Deuteronomy 30:19 · Joshua 24:15 · Genesis 2:16 to 17 · John 14:15',
  sortOrder: 4,
  progressState: 'not_started',
  sections: [],
}

const lessonMadeForMore5: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000805',
  slug: 'why-every-life-matters',
  studySeriesId: 'e4000001-0000-4000-8000-000000000072',
  title: 'Why Every Life Matters',
  summary:
    'Show that every person is seen, known, valued, and significant to God.',
  durationMinutes: 10,
  scripture: 'Psalm 139:1 to 14 · Matthew 10:29 to 31 · Acts 17:26 to 28',
  sortOrder: 5,
  progressState: 'not_started',
  sections: [],
}

const lessonMadeForMore6: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000806',
  slug: 'jesus-the-true-image',
  studySeriesId: 'e4000001-0000-4000-8000-000000000072',
  title: 'Jesus, the True Image',
  summary:
    'Show that Jesus reveals both God’s character and what humanity was created to be.',
  durationMinutes: 10,
  scripture: 'Colossians 1:15 · Hebrews 1:3 · 2 Corinthians 4:4 · John 14:9 · Romans 8:29',
  sortOrder: 6,
  progressState: 'not_started',
  sections: [],
}

const lessonMadeForMore7: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000807',
  slug: 'restored-into-his-image',
  studySeriesId: 'e4000001-0000-4000-8000-000000000072',
  title: 'Restored Into His Image',
  summary:
    'Show that God’s purpose is to restore His image in us as we behold Christ.',
  durationMinutes: 10,
  scripture: '2 Corinthians 3:18 · 1 Corinthians 15:49 · Romans 8:29 · Colossians 3:10',
  sortOrder: 7,
  progressState: 'not_started',
  sections: [],
}

const theGodWhoWantsLongDescription = `A beginner-friendly BibleStem study on God’s character, His revealed name, His relational love, and the way Father, Son, and Spirit invite humanity into trust and nearness. This study helps learners see that God does not hide behind power. He reveals Himself so He can be known.`

const seriesTheGodWhoWantsToBeKnown: StudySeries = {
  id: 'e4000001-0000-4000-8000-000000000071',
  slug: 'the-god-who-wants-to-be-known',
  studyPathId: 'b1000001-0000-4000-8000-000000000001',
  title: 'The God Who Wants to Be Known',
  subtitle: 'Names, love, Trinity-shaped revelation, and Christ as God made visible.',
  shortDescription:
    'Discover a God who is not distant or cold, but relational, loving, and revealed through Scripture, Jesus, and the beauty of His name.',
  longDescription: theGodWhoWantsLongDescription,
  description: theGodWhoWantsLongDescription,
  level: 'Beginner',
  durationSummary: '71 min total',
  lessonsCount: 7,
  featured: true,
  collectionLabel: 'Foundational Studies',
  sortOrder: 3,
  whatYouWillLearn: [
    'See why names and titles in Scripture point toward God’s character.',
    'Begin with Elohim and move toward Father, Son, and Spirit without rushing past the text.',
    'Ground love in God’s being, not human mood alone.',
    'Follow Jesus as the clearest revelation of the Father’s heart.',
    'Respond to Scripture’s invitation to draw near in trust and worship.',
  ],
  lessons: [
    lessonTgwk1,
    lessonTgwk2,
    lessonTgwk3,
    lessonTgwk4,
    lessonTgwk5,
    lessonTgwk6,
    lessonTgwk7,
  ],
}

const madeForMoreLongDescription = `A beginner-friendly BibleStem study on human identity, dignity, purpose, moral responsibility, and restoration through Jesus. This study helps learners see that humanity was created for more than survival. We were made in God’s image, called to reflect His love, and invited to be restored through Christ.`

const seriesMadeForMore: StudySeries = {
  id: 'e4000001-0000-4000-8000-000000000072',
  slug: 'made-for-more',
  studyPathId: 'b1000001-0000-4000-8000-000000000001',
  title: 'Made for More',
  subtitle: 'Human identity, dignity, purpose, and restoration through Jesus.',
  shortDescription:
    'Discover what it means to be human through Scripture’s teaching that we are created in the image of God.',
  longDescription: madeForMoreLongDescription,
  description: madeForMoreLongDescription,
  level: 'Beginner',
  durationSummary: '73 min total',
  lessonsCount: 7,
  featured: false,
  collectionLabel: 'Foundational Studies',
  sortOrder: 4,
  foundationOrder: 3,
  whatYouWillLearn: [
    'Humanity',
    'Image of God',
    'Identity',
    'Purpose',
    'Creation',
    'Jesus',
    'Foundations',
  ],
  lessons: [
    lessonMadeForMore1,
    lessonMadeForMore2,
    lessonMadeForMore3,
    lessonMadeForMore4,
    lessonMadeForMore5,
    lessonMadeForMore6,
    lessonMadeForMore7,
  ],
}

const lessonWarHeaven1: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000831',
  slug: 'a-conflict-bigger-than-earth',
  studySeriesId: 'e4000001-0000-4000-8000-000000000073',
  title: 'A Conflict Bigger Than Earth',
  summary:
    'The Bible introduces a cosmic conflict between good and evil that reaches beyond humanity and into the unseen spiritual world.',
  durationMinutes: 8,
  scripture: 'Revelation 12:7 · Ephesians 6:12 · Hebrews 1:14',
  sortOrder: 1,
  progressState: 'not_started',
  sections: [],
}

const lessonWarHeaven2: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000832',
  slug: 'the-rise-of-lucifer',
  studySeriesId: 'e4000001-0000-4000-8000-000000000073',
  title: 'The Rise of Lucifer',
  summary:
    'Lucifer was created good, beautiful, and close to God, but pride and self-exaltation led to rebellion.',
  durationMinutes: 8,
  scripture: 'Isaiah 14:12 to 14 · Ezekiel 28:12 to 17',
  sortOrder: 2,
  progressState: 'not_started',
  sections: [],
}

const lessonWarHeaven3: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000833',
  slug: 'the-war-over-gods-character',
  studySeriesId: 'e4000001-0000-4000-8000-000000000073',
  title: 'The War Over God’s Character',
  summary:
    'The conflict in heaven was not mainly physical. It was a battle over truth, trust, and the character of God.',
  durationMinutes: 8,
  scripture: 'Revelation 12:9 · John 8:44 · Romans 13:10',
  sortOrder: 3,
  progressState: 'not_started',
  sections: [],
}

const lessonWarHeaven4: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000834',
  slug: 'why-evil-and-suffering-exist',
  studySeriesId: 'e4000001-0000-4000-8000-000000000073',
  title: 'Why Evil and Suffering Exist',
  summary: 'The Bible explains evil through the misuse of freedom and the rejection of God’s love.',
  durationMinutes: 8,
  scripture: '1 John 4:8 · Matthew 22:37 to 40 · Ecclesiastes 7:29',
  sortOrder: 4,
  progressState: 'not_started',
  sections: [],
}

const lessonWarHeaven5: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000835',
  slug: 'love-freedom-and-risk',
  studySeriesId: 'e4000001-0000-4000-8000-000000000073',
  title: 'Love, Freedom, and Risk',
  summary:
    'Love requires freedom, and freedom introduces the possibility of rebellion, selfishness, and pain.',
  durationMinutes: 8,
  scripture: 'Galatians 5:22 to 23 · James 1:17 · Matthew 13:28',
  sortOrder: 5,
  progressState: 'not_started',
  sections: [],
}

const lessonWarHeaven6: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000836',
  slug: 'jesus-enters-the-battle',
  studySeriesId: 'e4000001-0000-4000-8000-000000000073',
  title: 'Jesus Enters the Battle',
  summary: 'Jesus came to reveal the truth about God and confront evil through self-giving love.',
  durationMinutes: 8,
  scripture: 'Luke 11:21 to 22 · 1 John 3:8 · John 13:34',
  sortOrder: 6,
  progressState: 'not_started',
  sections: [],
}

const lessonWarHeaven7: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000837',
  slug: 'the-final-defeat-of-evil',
  studySeriesId: 'e4000001-0000-4000-8000-000000000073',
  title: 'The Final Defeat of Evil',
  summary:
    'Evil is temporary. Scripture points forward to a restored world where love and truth reign forever.',
  durationMinutes: 8,
  scripture: 'Psalm 37:9 · Isaiah 11:9 · Revelation 21:4',
  sortOrder: 7,
  progressState: 'not_started',
  sections: [],
}

/** Slug avoids collision with bundled reader key \`the-first-lie\` (Death / Hope advanced study). */
const lessonFallHumanity1: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000841',
  slug: 'the-first-humanity-lie',
  studySeriesId: 'e4000001-0000-4000-8000-000000000074',
  title: 'The First Lie',
  summary:
    'Explore how Satan introduced deception in Eden by attacking God’s character and questioning His goodness.',
  durationMinutes: 8,
  scripture: 'Genesis 3:1 to 5 · Revelation 12:9',
  sortOrder: 1,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}
const lessonFallHumanity2: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000842',
  slug: 'when-trust-was-broken',
  studySeriesId: 'e4000001-0000-4000-8000-000000000074',
  title: 'When Trust Was Broken',
  summary:
    'Discover how sin fractured humanity’s relationship with God and introduced fear, shame, and hiding.',
  durationMinutes: 7,
  scripture: 'Genesis 3:6 to 12 · Genesis 3:8 to 10',
  sortOrder: 2,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}
const lessonFallHumanity3: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000843',
  slug: 'the-birth-of-shame',
  studySeriesId: 'e4000001-0000-4000-8000-000000000074',
  title: 'The Birth of Shame',
  summary:
    'Learn how guilt, blame, fear, and self-protection entered the human experience after the Fall.',
  durationMinutes: 7,
  scripture: 'Genesis 3:7 to 13 · Romans 3:23',
  sortOrder: 3,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}
const lessonFallHumanity4: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000844',
  slug: 'what-sin-really-is',
  studySeriesId: 'e4000001-0000-4000-8000-000000000074',
  title: 'What Sin Really Is',
  summary:
    'Understand sin not merely as rule-breaking, but as life disconnected from God’s self-giving love.',
  durationMinutes: 7,
  scripture: 'Romans 3:23 · 1 John 4:8 · Romans 13:10',
  sortOrder: 4,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}
const lessonFallHumanity5: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000845',
  slug: 'how-lies-shape-lives',
  studySeriesId: 'e4000001-0000-4000-8000-000000000074',
  title: 'How Lies Shape Lives',
  summary:
    'Examine how beliefs influence thoughts, emotions, and actions, and how deception about God reshapes human behavior.',
  durationMinutes: 7,
  scripture: 'Proverbs 4:23 · John 8:44 · Genesis 3:6',
  sortOrder: 5,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}
const lessonFallHumanity6: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000846',
  slug: 'jesus-reversed-the-fall',
  studySeriesId: 'e4000001-0000-4000-8000-000000000074',
  title: 'Jesus Reversed the Fall',
  summary:
    'See how Jesus succeeded where humanity failed by fully trusting the Father and remaining faithful in love.',
  durationMinutes: 7,
  scripture: 'Matthew 4:4 · Matthew 4:10 · Romans 5:19 · John 8:32',
  sortOrder: 6,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}
const lessonFallHumanity7: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000847',
  slug: 'restored-through-truth-and-love',
  studySeriesId: 'e4000001-0000-4000-8000-000000000074',
  title: 'Restored Through Truth and Love',
  summary:
    'Discover how Jesus restores trust in God and begins healing the perceptual, relational, and moral effects of sin.',
  durationMinutes: 7,
  scripture: 'John 17:3 · 1 Timothy 2:4 · 2 Corinthians 5:17 · John 8:32',
  sortOrder: 7,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonPromiseKept1: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000848',
  slug: 'god-came-looking',
  studySeriesId: 'e4000001-0000-4000-8000-000000000075',
  title: 'God Came Looking',
  summary:
    'After Adam and Eve sinned, God moved toward them with grace instead of abandoning them in fear and shame.',
  durationMinutes: 9,
  scripture: 'Genesis 3:9 to 11 · Romans 5:8',
  sortOrder: 1,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}
const lessonPromiseKept2: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000849',
  slug: 'the-first-gospel-promise',
  studySeriesId: 'e4000001-0000-4000-8000-000000000075',
  title: 'The First Gospel Promise',
  summary:
    'Genesis 3:15 reveals the first promise of a coming Deliverer who would defeat the enemy and rescue humanity.',
  durationMinutes: 9,
  scripture: 'Genesis 3:15 · 1 John 3:8 · Hebrews 2:14',
  sortOrder: 2,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}
const lessonPromiseKept3: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000850',
  slug: 'the-promised-seed',
  studySeriesId: 'e4000001-0000-4000-8000-000000000075',
  title: 'The Promised Seed',
  summary:
    'Scripture unfolds the promise of the coming Messiah through the language of the Seed, the One who would bring victory and restoration.',
  durationMinutes: 9,
  scripture: 'Genesis 3:15 · Galatians 3:16 · John 12:31 to 32',
  sortOrder: 3,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}
const lessonPromiseKept4: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000851',
  slug: 'promise-through-the-prophets',
  studySeriesId: 'e4000001-0000-4000-8000-000000000075',
  title: 'Promise Through the Prophets',
  summary:
    'The Old Testament carries the promise forward through Moses, David, Isaiah, and the prophets, pointing to the character and mission of the Messiah.',
  durationMinutes: 9,
  scripture: 'Isaiah 53:5 · Deuteronomy 18:15 · Psalm 22:1 · Luke 24:27',
  sortOrder: 4,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}
const lessonPromiseKept5: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000852',
  slug: 'the-messiah-timeline',
  studySeriesId: 'e4000001-0000-4000-8000-000000000075',
  title: 'The Messiah Timeline',
  summary:
    'Daniel 9 reveals a prophetic timeline pointing to the appearing, ministry, and sacrifice of the Messiah.',
  durationMinutes: 9,
  scripture: 'Daniel 9:25 · Daniel 9:26 to 27 · Ezra 7:13 · Matthew 3:16 to 17',
  sortOrder: 5,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}
const lessonPromiseKept6: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000853',
  slug: 'cut-off-not-for-himself',
  studySeriesId: 'e4000001-0000-4000-8000-000000000075',
  title: 'Cut Off, Not for Himself',
  summary:
    'Daniel foretold that the Messiah would be cut off, not for Himself, revealing the depth of God’s faithful love at the cross.',
  durationMinutes: 9,
  scripture: 'Daniel 9:26 · Romans 5:8 · 1 John 3:16 · Matthew 27:46',
  sortOrder: 6,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}
const lessonPromiseKept7: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000854',
  slug: 'every-promise-says-yes-in-jesus',
  studySeriesId: 'e4000001-0000-4000-8000-000000000075',
  title: 'Every Promise Says Yes in Jesus',
  summary:
    'Jesus is the fulfillment of God\'s promise of faithful love. In Him, the story of Scripture becomes promise made and promise kept.',
  durationMinutes: 9,
  scripture: '2 Corinthians 1:20 · John 3:16 · John 14:6 · 1 Timothy 2:4',
  sortOrder: 7,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const WAY_BACK_STUDY_SLUG = 'the-way-back-to-god'
const WAY_BACK_OVERVIEW_HREF = `/study-library/${WAY_BACK_STUDY_SLUG}`

function wayBackPlaceholderShellSection(
  lessonId: string,
  sectionId: string,
  highlight?: number[],
): LessonSection {
  const mapBlock: LessonContentBlock =
    highlight != null && highlight.length > 0
      ? { type: 'sanctuaryJourneyMap', highlightedIndices: highlight }
      : { type: 'sanctuaryJourneyMap' }

  const body = JSON.stringify({
    blocks: [
      {
        type: 'paragraph',
        text: 'This lesson has been created, but the study content has not been added yet.',
      },
      mapBlock,
      { type: 'studyCta', label: 'Back to study overview', href: WAY_BACK_OVERVIEW_HREF },
    ],
  })

  return {
    id: sectionId,
    lessonId,
    sortOrder: 1,
    heading: 'Lesson content coming soon',
    body,
    sectionType: 'other',
  }
}

const WHAT_HAPPENS_STUDY_SLUG = 'what-happens-when-we-die'
const WHAT_HAPPENS_OVERVIEW_HREF = `/study-library/${WHAT_HAPPENS_STUDY_SLUG}`

function whatHappensPlaceholderShellSection(
  lessonId: string,
  sectionId: string,
  highlight?: number[],
): LessonSection {
  const blocks: LessonContentBlock[] = [
    {
      type: 'paragraph',
      text: 'This lesson has been created, but the study content has not been added yet.',
    },
  ]
  if (highlight != null && highlight.length > 0) {
    blocks.push({
      type: 'deathResurrectionFlow',
      highlightedIndices: highlight,
      title: 'Death and Resurrection',
      subtitle:
        'A simple overview of life, death, resurrection, judgment, and eternal hope in Christ.',
    })
  }
  blocks.push({ type: 'studyCta', label: 'Back to study overview', href: WHAT_HAPPENS_OVERVIEW_HREF })

  const body = JSON.stringify({ blocks })

  return {
    id: sectionId,
    lessonId,
    sortOrder: 1,
    heading: 'Lesson content coming soon',
    body,
    sectionType: 'other',
  }
}

const lessonWhatHappens1: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000870',
  slug: 'death-is-not-the-end',
  studySeriesId: 'e4000001-0000-4000-8000-000000000077',
  title: 'Death Is Not the End',
  summary:
    'The Bible introduces death with clarity and hope, showing that the first death is not final for those who trust in Christ.',
  durationMinutes: 8,
  scripture: 'Revelation 2:11 · Revelation 20:6 · John 11:25-26',
  sortOrder: 1,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonWhatHappens2: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000871',
  slug: 'the-first-death-is-sleep',
  studySeriesId: 'e4000001-0000-4000-8000-000000000077',
  title: 'The First Death Is Sleep',
  summary:
    'Jesus describes the first death as sleep, pointing forward to the resurrection when the dead will be awakened.',
  durationMinutes: 8,
  scripture: 'Luke 8:52-53 · John 11:11-14 · John 11:23-26',
  sortOrder: 2,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonWhatHappens3: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000872',
  slug: 'what-the-dead-know',
  studySeriesId: 'e4000001-0000-4000-8000-000000000077',
  title: 'What the Dead Know',
  summary:
    'Scripture teaches that the dead are unconscious and do not return to communicate with the living.',
  durationMinutes: 8,
  scripture: 'Ecclesiastes 9:5-6 · Psalm 146:3-4 · Job 7:9-10',
  sortOrder: 3,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonWhatHappens4: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000873',
  slug: 'why-god-warns-against-speaking-to-the-dead',
  studySeriesId: 'e4000001-0000-4000-8000-000000000077',
  title: 'Why God Warns Against Speaking to the Dead',
  summary:
    'The Bible warns against necromancy and spiritualistic deception because the dead cannot communicate with the living.',
  durationMinutes: 8,
  scripture: 'Deuteronomy 18:9-12 · Deuteronomy 32:16-17 · 2 Corinthians 11:14',
  sortOrder: 4,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonWhatHappens5: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000874',
  slug: 'the-second-death',
  studySeriesId: 'e4000001-0000-4000-8000-000000000077',
  title: 'The Second Death',
  summary:
    'The second death is different from the first death. It is the final destruction of sin and those who refuse God\'s mercy.',
  durationMinutes: 8,
  scripture: 'Matthew 10:28 · Revelation 20:6 · Revelation 20:14',
  sortOrder: 5,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonWhatHappens6: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000875',
  slug: 'the-resurrection-hope',
  studySeriesId: 'e4000001-0000-4000-8000-000000000077',
  title: 'The Resurrection Hope',
  summary: 'Jesus promises that all who are in the graves will hear His voice and be raised.',
  durationMinutes: 9,
  scripture: 'John 5:28-29 · 1 Thessalonians 4:13-18 · 1 Corinthians 15:51-55',
  sortOrder: 6,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonWhatHappens7: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000876',
  slug: 'forgiven-and-free',
  studySeriesId: 'e4000001-0000-4000-8000-000000000077',
  title: 'Forgiven and Free',
  summary:
    'Jesus tasted death for everyone so we can be forgiven, freed from guilt, and restored before God.',
  durationMinutes: 8,
  scripture: 'Hebrews 2:9 · Colossians 1:13-14 · Psalm 32:1-2 · 2 Corinthians 5:10',
  sortOrder: 7,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonWayBack1: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000855',
  slug: 'a-map-back-to-god',
  studySeriesId: 'e4000001-0000-4000-8000-000000000076',
  title: 'A Map Back to God',
  summary:
    'The sanctuary shows that God has made a path for separated humanity to return to restored relationship with Him.',
  durationMinutes: 9,
  scripture: 'Psalm 77:13 · Isaiah 59:2 · John 14:6',
  sortOrder: 1,
  progressState: 'not_started',
  sections: [],
}

const lessonWayBack2: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000856',
  slug: 'the-door-and-the-sacrifice',
  studySeriesId: 'e4000001-0000-4000-8000-000000000076',
  title: 'The Door and the Sacrifice',
  summary:
    'The courtyard points to Jesus as the only way in and the Lamb who gave His life for our sins.',
  durationMinutes: 8,
  scripture: 'John 10:9 · John 1:29 · Hebrews 10:19-20',
  sortOrder: 2,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonWayBack3: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000857',
  slug: 'washed-and-made-new',
  studySeriesId: 'e4000001-0000-4000-8000-000000000076',
  title: 'Washed and Made New',
  summary:
    'The laver points to cleansing, renewal, and the transforming work of the Holy Spirit.',
  durationMinutes: 8,
  scripture: 'Titus 3:5 · Ezekiel 36:25-27 · 1 John 1:9',
  sortOrder: 3,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonWayBack4: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000858',
  slug: 'bread-light-and-prayer',
  studySeriesId: 'e4000001-0000-4000-8000-000000000076',
  title: 'Bread, Light, and Prayer',
  summary:
    'The Holy Place reveals Jesus as the Bread of Life, the Light of the world, and the One who brings our prayers before God.',
  durationMinutes: 9,
  scripture: 'John 6:35 · John 8:12 · Revelation 8:3-4 · Hebrews 7:25',
  sortOrder: 4,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonWayBack5: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000859',
  slug: 'gods-love-written-within',
  studySeriesId: 'e4000001-0000-4000-8000-000000000076',
  title: "God's Love Written Within",
  summary:
    "The Most Holy Place points to God's desire to write His law of love in the hearts and minds of His people.",
  durationMinutes: 8,
  scripture: 'Hebrews 10:16 · Jeremiah 31:33 · Exodus 25:21-22 · Romans 13:10',
  sortOrder: 5,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonWayBack6: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000860',
  slug: 'the-daily-path-of-grace',
  studySeriesId: 'e4000001-0000-4000-8000-000000000076',
  title: 'The Daily Path of Grace',
  summary:
    'The daily sanctuary service showed the seriousness of sin, the need for a substitute, and the ongoing ministry of grace.',
  durationMinutes: 8,
  scripture: 'Leviticus 4:31 · Hebrews 9:22 · 1 Peter 1:18-19 · Hebrews 7:25',
  sortOrder: 6,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonWayBack7: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000861',
  slug: 'the-final-cleansing',
  studySeriesId: 'e4000001-0000-4000-8000-000000000076',
  title: 'The Final Cleansing',
  summary:
    "The Day of Atonement points to God's final work of cleansing, judgment, restoration, and the complete removal of evil.",
  durationMinutes: 8,
  scripture: 'Leviticus 16:30 · Daniel 7:9-10 · Revelation 14:6-7 · Hebrews 10:22',
  sortOrder: 7,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const fallOfHumanityLongDescription = `This study explores how sin entered the human story through deception, distrust, and self-centeredness. Beginning in Eden, humanity's fall affected the way we think, relate, and live. But Scripture also reveals how Jesus came to restore what was broken and reveal the truth about God's character.`

const seriesFallOfHumanity: StudySeries = {
  id: 'e4000001-0000-4000-8000-000000000074',
  slug: 'the-fall-of-humanity',
  studyPathId: 'b1000001-0000-4000-8000-000000000001',
  title: 'The Fall of Humanity',
  subtitle: 'Sin, deception, broken trust—and Christ’s restorative truth and love.',
  shortDescription:
    'Humanity’s fall began with deception about God’s character and led to broken trust, broken relationships, and moral rebellion.',
  longDescription: fallOfHumanityLongDescription,
  description: fallOfHumanityLongDescription,
  level: 'Beginner',
  durationSummary: 'Approx. 50 min total',
  lessonsCount: 7,
  featured: false,
  collectionLabel: 'Foundational Studies',
  sortOrder: 6,
  foundationOrder: 5,
  whatYouWillLearn: [
    'Themes: sin, humanity, Eden, deception, trust, salvation, genesis, fall, redemption.',
    'How deception about God fractured trust after Eden.',
    'Shame, fear, relational strain, and what sin truly is.',
    'How beliefs about God reshape daily life—and how Jesus restores trust.',
  ],
  lessons: [
    lessonFallHumanity1,
    lessonFallHumanity2,
    lessonFallHumanity3,
    lessonFallHumanity4,
    lessonFallHumanity5,
    lessonFallHumanity6,
    lessonFallHumanity7,
  ],
}

const promiseKeptLongDescription = `After humanity fell, God did not abandon the world to sin, shame, and death. He gave the first gospel promise: a coming Deliverer would defeat the enemy and rescue humanity.

This study traces that promise from Eden to the cross. It shows how the Old Testament points forward to Jesus, how Daniel’s 70-week timeline foretold the Messiah’s mission, and how Christ fulfilled God’s promise of faithful love through His life, death, and resurrection.

The story of Scripture is not God giving up on humanity. It is God keeping His promise at great cost to Himself.`

const seriesThePromiseKept: StudySeries = {
  id: 'e4000001-0000-4000-8000-000000000075',
  slug: 'the-promise-kept',
  studyPathId: 'b1000001-0000-4000-8000-000000000001',
  title: 'The Promise Kept',
  subtitle: 'From Eden’s first gospel promise to the cross: how God kept His word in Jesus.',
  shortDescription:
    'God promised to rescue humanity, and Jesus is that promise fulfilled.',
  longDescription: promiseKeptLongDescription,
  description: promiseKeptLongDescription,
  level: 'Beginner',
  durationSummary: 'Approx. 55–70 min total',
  lessonsCount: 7,
  featured: false,
  collectionLabel: 'Foundational Studies',
  sortOrder: 7,
  foundationOrder: 6,
  whatYouWillLearn: [
    'Themes: Jesus, promise, gospel, Messiah, Genesis 3:15, covenant, prophecy, Daniel 9, cross, redemption, salvation.',
    'Trace God’s rescue promise from Eden through the Old Testament toward Christ.',
    'See how Daniel’s prophecy frames the Messiah’s mission and timeline.',
    'Understand the cross as God’s faithful love keeping covenant at great cost.',
  ],
  lessons: [
    lessonPromiseKept1,
    lessonPromiseKept2,
    lessonPromiseKept3,
    lessonPromiseKept4,
    lessonPromiseKept5,
    lessonPromiseKept6,
    lessonPromiseKept7,
  ],
}

const wayBackLongDescription = `Sin separated humanity from God, but Scripture shows that God has made a way back. The sanctuary was more than an ancient religious structure. It was a living map of salvation.

Through its spaces, symbols, sacrifices, priestly ministry, and Day of Atonement, the sanctuary pointed forward to Jesus. He is the Door, the Lamb, the Bread of Life, the Light of the world, our Intercessor, our High Priest, and the One who writes God's law of love in our hearts.

This study helps beginners understand the sanctuary as a Christ-centered journey from separation to restoration.`

const seriesTheWayBackToGod: StudySeries = {
  id: 'e4000001-0000-4000-8000-000000000076',
  slug: WAY_BACK_STUDY_SLUG,
  studyPathId: 'b1000001-0000-4000-8000-000000000001',
  title: 'The Way Back to God',
  subtitle:
    'The sanctuary reveals the path God opened through Jesus to bring humanity back into restored relationship with Him.',
  shortDescription:
    'The sanctuary reveals the path God opened through Jesus to bring humanity back into restored relationship with Him.',
  longDescription: wayBackLongDescription,
  description: wayBackLongDescription,
  level: 'Beginner',
  durationSummary: 'Approx. 55–70 min total',
  lessonsCount: 7,
  featured: false,
  collectionLabel: 'Foundational Studies',
  sortOrder: 8,
  foundationOrder: 7,
  whatYouWillLearn: [
    'Themes: sanctuary, salvation, Jesus, restoration, atonement, prayer, cleansing, worship, law of love, high priest, judgment, relationship with God.',
    'See the sanctuary as a Christ-centered map from separation to restoration.',
    'Follow courtyard, Holy Place, and Most Holy Place symbols toward Jesus.',
    'Connect daily ministry and the Day of Atonement to grace and final cleansing.',
  ],
  lessons: [
    lessonWayBack1,
    lessonWayBack2,
    lessonWayBack3,
    lessonWayBack4,
    lessonWayBack5,
    lessonWayBack6,
    lessonWayBack7,
  ],
}

const whatHappensLongDescription = `Death raises one of life's deepest questions: what happens when we die?

This study explores the Bible's teaching on the first death, the unconscious sleep of the dead, the resurrection, and the second death. It also shows why Scripture warns against attempts to communicate with the dead and why our hope is not found in fear, speculation, or superstition, but in Jesus.

Most importantly, this study reveals that Christ tasted death for everyone, conquered the power of guilt, and offers complete forgiveness, resurrection hope, and eternal life to all who trust Him.`

const seriesWhatHappensWhenWeDie: StudySeries = {
  id: 'e4000001-0000-4000-8000-000000000077',
  slug: WHAT_HAPPENS_STUDY_SLUG,
  studyPathId: 'b1000001-0000-4000-8000-000000000001',
  title: 'What Happens When We Die?',
  subtitle:
    'Scripture on death, sleep, resurrection, judgment, and the hope Jesus gives over sin, guilt, and fear.',
  shortDescription:
    'The Bible gives a clear and hopeful answer about death, resurrection, judgment, and the victory Jesus gives over sin and guilt.',
  longDescription: whatHappensLongDescription,
  description: whatHappensLongDescription,
  level: 'Beginner',
  durationSummary: 'Approx. 55–70 min total',
  lessonsCount: 7,
  featured: false,
  collectionLabel: 'Foundational Studies',
  sortOrder: 9,
  foundationOrder: 8,
  whatYouWillLearn: [
    'Themes: death, resurrection, sleep, second death, judgment, forgiveness, hope, state of the dead, Jesus, eternal life, deception, spiritualism.',
    'See how Scripture describes the first death and the hope beyond it.',
    'Understand why the dead do not communicate with the living.',
    'Follow Jesus from death conquered to forgiveness, resurrection, and eternal life.',
  ],
  lessons: [
    lessonWhatHappens1,
    lessonWhatHappens2,
    lessonWhatHappens3,
    lessonWhatHappens4,
    lessonWhatHappens5,
    lessonWhatHappens6,
    lessonWhatHappens7,
  ],
}

const warInHeavenLongDescription = `Why does evil exist if God is good?

Scripture presents a cosmic conflict that began before humanity and continues in the world today. At the center of this conflict is the character of God and the question of whether His kingdom truly operates on love.

This study explores the rebellion of Lucifer, the origin of sin, the meaning of free will, and the Bible’s explanation for suffering and evil. Most importantly, it reveals how Jesus entered the battle on our behalf and demonstrated the victory of love over deception, selfishness, and fear.

This beginner Foundations study is designed to help users understand the biblical storyline behind the struggle between good and evil while pointing them toward the hope found in Christ.`

const seriesWarInHeaven: StudySeries = {
  id: 'e4000001-0000-4000-8000-000000000073',
  slug: 'war-in-heaven',
  studyPathId: 'b1000001-0000-4000-8000-000000000001',
  title: 'War in Heaven',
  subtitle: 'Conflict between love and selfishness: where evil began and how Scripture points to hope in Christ.',
  shortDescription:
    'The Bible reveals that our world is caught in a conflict between love and selfishness, truth and deception. This study explores where evil came from, why suffering exists, and how Jesus confronts darkness with truth and self-giving love.',
  longDescription: warInHeavenLongDescription,
  description: warInHeavenLongDescription,
  level: 'Beginner',
  durationSummary: 'Approx. 52 min total',
  lessonsCount: 7,
  featured: false,
  collectionLabel: 'Foundational Studies',
  sortOrder: 5,
  foundationOrder: 4,
  whatYouWillLearn: [
    'Themes: cosmic conflict, spiritual warfare, and redemption in Christ.',
    'Lucifer’s rise, Satan’s work, rebellion, deception, and the character of God.',
    'Freedom, love, moral risk, and why suffering exists.',
    'How Jesus confronted evil through truth and self-giving love.',
    'Heaven’s hope: the end of evil and a world where love reigns.',
  ],
  lessons: [
    lessonWarHeaven1,
    lessonWarHeaven2,
    lessonWarHeaven3,
    lessonWarHeaven4,
    lessonWarHeaven5,
    lessonWarHeaven6,
    lessonWarHeaven7,
  ],
}

const seriesThreeAngelsMessages: StudySeries = {
  id: 'e4000001-0000-4000-8000-000000000020',
  slug: 'three-angels-messages',
  studyPathId: 'b1000001-0000-4000-8000-000000000002',
  title: "The Three Angels' Messages",
  subtitle: 'Revelation 14: gospel, worship, warning, and decision.',
  shortDescription:
    'A careful look at Revelation 14: the closing messages of Scripture, mercy before warning, and a call to worship the Creator.',
  description:
    'A careful look at Revelation 14: the closing messages of Scripture, mercy before warning, and a call to worship the Creator.',
  level: 'Advanced',
  durationSummary: '245 min total',
  lessonsCount: 25,
  featured: false,
  collectionLabel: 'Advanced Studies',
  sortOrder: 0,
  whatYouWillLearn: [
    'Understand Revelation 14 in its biblical context.',
    'See why the everlasting gospel comes first.',
    'Study worship, judgment, Babylon, and the final call.',
    'Learn how prophecy points to loyalty, conscience, and Christ.',
    'Recognize the contrast between God’s seal and false worship.',
    'Trace how patience, commandments, and the faith of Jesus fit together.',
  ],
  lessons: [
    lessonThreeAngels1,
    lessonThreeAngels2,
    lessonThreeAngels3,
    lessonThreeAngels4,
    lessonThreeAngels5,
    lessonThreeAngels6,
    lessonThreeAngels7,
    lessonThreeAngels8,
    lessonThreeAngels9,
    lessonThreeAngels10,
    lessonThreeAngels11,
    lessonThreeAngels12,
    lessonThreeAngels13,
    lessonThreeAngels14,
    lessonThreeAngels15,
    lessonThreeAngels16,
    lessonThreeAngels17,
    lessonThreeAngels18,
    lessonThreeAngels19,
    lessonThreeAngels20,
    lessonThreeAngels21,
    lessonThreeAngels22,
    lessonThreeAngels23,
    lessonThreeAngels24,
    lessonThreeAngels25,
  ],
}

/** All series in the mock catalog. */
export const studySeriesCatalog: StudySeries[] = [
  seriesGodIsLove,
  seriesTheGodWhoWantsToBeKnown,
  seriesMadeForMore,
  seriesWarInHeaven,
  seriesFallOfHumanity,
  seriesThePromiseKept,
  seriesTheWayBackToGod,
  seriesWhatHappensWhenWeDie,
  seriesOriginOfEvil,
  seriesThreeAngelsMessages,
  seriesDeathResurrectionHopeOfLife,
  seriesKnowingChristInScripture,
  seriesFaithThatShowsUp,
]

export const wordStudyCatalog: WordStudy[] = wordStudies

export const lessonWordLinkCatalog: LessonWordLink[] = []

export const mockUserSeriesProgress: UserSeriesProgress[] = [
  {
    id: 'g6000001-0000-4000-8000-000000000001',
    userId: demoUserId,
    studySeriesId: seriesGodIsLove.id,
    startedAt: '2025-03-01T12:00:00.000Z',
    completedAt: null,
    lastLessonSlug: lessonGodLove1.slug,
    percentComplete: 38,
  },
]

export const mockUserLessonProgress: UserLessonProgress[] = [
  {
    id: 'h7000001-0000-4000-8000-000000000001',
    userId: demoUserId,
    lessonId: lessonGodLove1.id,
    state: 'in_progress',
    updatedAt: '2025-03-21T10:00:00.000Z',
  },
]

export const mockNotes: Note[] = [
  {
    id: 'n8000001-0000-4000-8000-000000000001',
    userId: demoUserId,
    lessonId: lessonGodLove1.id,
    verseReference: '1 John 4:8',
    body: 'Come back to this line when the lesson feels crowded.',
    updatedAt: '2025-03-21T15:00:00.000Z',
  },
]

export const mockHighlights: Highlight[] = [
  {
    id: 'i9000001-0000-4000-8000-000000000001',
    userId: demoUserId,
    lessonId: lessonGodLove1.id,
    verseReference: '1 John 4:8',
    body: 'He who does not love does not know God, for God is love.',
    updatedAt: '2025-03-20T08:00:00.000Z',
  },
]

export { demoUserId }
