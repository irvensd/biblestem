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
import {
  foundationLessonShellSection,
  FOUNDATION_SHELL_PLACEHOLDER_LEGACY,
  PLACEHOLDER_BODY,
} from '@/lib/foundation-lesson-shell'

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
    'Begin with the character of God as the foundation for all truth.',
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
    'Discover how Scripture reveals a personal God who speaks, loves, and invites trust.',
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
    'Learn what it means to be created in God’s image with dignity, purpose, and hope.',
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
    'Understand how sin entered the human story and damaged God\'s good design.',
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
    'Follow God\'s promise of redemption from Eden to Christ.',
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
    'Learn how God restores sinners through grace, repentance, and trust.',
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

const WHEN_DEATH_DIED_STUDY_SLUG = 'when-death-died'
const WHEN_DEATH_DIED_OVERVIEW_HREF = `/study-library/${WHEN_DEATH_DIED_STUDY_SLUG}`

function whenDeathDiedPlaceholderShellSection(
  lessonId: string,
  sectionId: string,
): LessonSection {
  const body = JSON.stringify({
    blocks: [
      {
        type: 'paragraph',
        text: 'This lesson has been created, but the study content has not been added yet.',
      },
      { type: 'studyCta', label: 'Back to study overview', href: WHEN_DEATH_DIED_OVERVIEW_HREF },
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

const lessonWhenDeathDied1: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000880',
  slug: 'he-entered-death',
  studySeriesId: 'e4000001-0000-4000-8000-000000000078',
  title: 'He Entered Death',
  summary: 'Jesus did not avoid death. He stepped into the full reality of it on our behalf.',
  durationMinutes: 8,
  scripture: 'Matthew 26:36-39 · Isaiah 53:4-6 · 2 Corinthians 5:21',
  sortOrder: 1,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonWhenDeathDied2: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000881',
  slug: 'the-weight-of-sin',
  studySeriesId: 'e4000001-0000-4000-8000-000000000078',
  title: 'The Weight of Sin',
  summary: 'At the cross, Jesus carried sin, guilt, and separation so humanity could be restored.',
  durationMinutes: 8,
  scripture: 'Matthew 27:46 · Isaiah 53:10-12 · Psalm 88:3-12',
  sortOrder: 2,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonWhenDeathDied3: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000882',
  slug: 'he-chose-the-cross',
  studySeriesId: 'e4000001-0000-4000-8000-000000000078',
  title: 'He Chose the Cross',
  summary: 'Jesus was not forced into death. He willingly laid down His life because of love.',
  durationMinutes: 8,
  scripture: 'John 10:17-18 · Matthew 26:53 · Ephesians 3:19',
  sortOrder: 3,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonWhenDeathDied4: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000883',
  slug: 'death-had-no-claim',
  studySeriesId: 'e4000001-0000-4000-8000-000000000078',
  title: 'Death Had No Claim',
  summary: 'Because Jesus was sinless, death had no rightful power to hold Him.',
  durationMinutes: 8,
  scripture: 'Acts 2:24 · Romans 6:23 · Romans 8:1-4',
  sortOrder: 4,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonWhenDeathDied5: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000884',
  slug: 'the-power-of-death-broken',
  studySeriesId: 'e4000001-0000-4000-8000-000000000078',
  title: 'The Power of Death Broken',
  summary:
    'Through His death and resurrection, Jesus destroyed the power of death and freed humanity from fear.',
  durationMinutes: 8,
  scripture: 'Hebrews 2:14-15 · 2 Timothy 1:10 · Revelation 1:18 · 1 Corinthians 15:26',
  sortOrder: 5,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonWhenDeathDied6: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000885',
  slug: 'victory-secured',
  studySeriesId: 'e4000001-0000-4000-8000-000000000078',
  title: 'Victory Secured',
  summary: 'The resurrection guarantees eternal life and the future victory over death.',
  durationMinutes: 9,
  scripture: '1 Corinthians 15:51-55 · Revelation 20:6 · Revelation 2:11',
  sortOrder: 6,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonWhenDeathDied7: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000886',
  slug: 'live-from-victory',
  studySeriesId: 'e4000001-0000-4000-8000-000000000078',
  title: 'Live From Victory',
  summary: 'Because Jesus defeated death, believers can live with confidence, freedom, and hope.',
  durationMinutes: 8,
  scripture: 'Romans 8:38-39 · 1 John 4:19 · John 11:25-26',
  sortOrder: 7,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const whenDeathDiedLongDescription = `Death feels final. The grave looks like the end.

But Jesus didn't avoid death—He entered it.

This study reveals what really happened at the cross. Christ bore the full weight of sin, experienced separation, and voluntarily gave His life. But death could not hold Him.

When Death Died shows that the resurrection is not just hope—it is proof. Sin was overcome, death was broken, and eternal life is now offered to anyone who trusts in Him.`

const seriesWhenDeathDied: StudySeries = {
  id: 'e4000001-0000-4000-8000-000000000078',
  slug: WHEN_DEATH_DIED_STUDY_SLUG,
  studyPathId: 'b1000001-0000-4000-8000-000000000001',
  title: 'When Death Died',
  subtitle:
    'The cross, the empty tomb, and the victory Jesus won over sin, death, and fear.',
  shortDescription:
    'See how Christ\'s resurrection defeats death and anchors Christian hope.',
  longDescription: whenDeathDiedLongDescription,
  description: whenDeathDiedLongDescription,
  level: 'Beginner',
  durationSummary: 'Approx. 55–70 min total',
  lessonsCount: 7,
  featured: false,
  collectionLabel: 'Foundational Studies',
  sortOrder: 10,
  foundationOrder: 9,
  whatYouWillLearn: [
    'Themes: death, resurrection, cross, Jesus, victory, second death, sin, guilt, eternal life, salvation, hope.',
    'See how Jesus entered death on our behalf at the cross.',
    'Understand sin\'s weight, Christ\'s willing sacrifice, and death\'s power broken.',
    'Live from resurrection victory with confidence, freedom, and hope in Jesus.',
  ],
  lessons: [
    lessonWhenDeathDied1,
    lessonWhenDeathDied2,
    lessonWhenDeathDied3,
    lessonWhenDeathDied4,
    lessonWhenDeathDied5,
    lessonWhenDeathDied6,
    lessonWhenDeathDied7,
  ],
}

const MADE_NEW_IN_CHRIST_STUDY_SLUG = 'made-new-in-christ'
const MADE_NEW_IN_CHRIST_OVERVIEW_HREF = `/study-library/${MADE_NEW_IN_CHRIST_STUDY_SLUG}`

function madeNewInChristPlaceholderShellSection(
  lessonId: string,
  sectionId: string,
): LessonSection {
  const body = JSON.stringify({
    blocks: [
      {
        type: 'paragraph',
        text: 'This lesson has been created, but the study content has not been added yet.',
      },
      { type: 'studyCta', label: 'Back to study overview', href: MADE_NEW_IN_CHRIST_OVERVIEW_HREF },
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

const lessonMadeNewInChrist1: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000887',
  slug: 'good-news-not-good-advice',
  studySeriesId: 'e4000001-0000-4000-8000-000000000079',
  title: 'Good News, Not Good Advice',
  summary:
    'The gospel is not a self-improvement plan. It is the announcement of what God has already done in Jesus.',
  durationMinutes: 8,
  scripture: '1 Corinthians 15:1-4 · Romans 3:24 · Ephesians 2:8-10',
  sortOrder: 1,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonMadeNewInChrist2: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000888',
  slug: 'what-jesus-already-finished',
  studySeriesId: 'e4000001-0000-4000-8000-000000000079',
  title: 'What Jesus Already Finished',
  summary:
    'Jesus lived, died, rose, and ascended as humanity\'s representative, accomplishing salvation before we ever responded.',
  durationMinutes: 8,
  scripture: 'Ephesians 1:3-7 · Ephesians 2:4-6 · 2 Corinthians 5:14-15',
  sortOrder: 2,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonMadeNewInChrist3: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000889',
  slug: 'the-new-representative',
  studySeriesId: 'e4000001-0000-4000-8000-000000000079',
  title: 'The New Representative',
  summary:
    'Adam represents fallen humanity, but Christ becomes the new representative head who restores what Adam lost.',
  durationMinutes: 8,
  scripture: '1 Corinthians 15:21-22 · 1 Corinthians 15:45-49 · Romans 5:17-19',
  sortOrder: 3,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonMadeNewInChrist4: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000890',
  slug: 'all-things-new',
  studySeriesId: 'e4000001-0000-4000-8000-000000000079',
  title: 'All Things New',
  summary: 'In Christ, God reconciles us to Himself and begins making every part of life new.',
  durationMinutes: 8,
  scripture: '2 Corinthians 5:14-19 · Galatians 2:20 · Colossians 1:13-14',
  sortOrder: 4,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonMadeNewInChrist5: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000891',
  slug: 'faith-receives-the-facts',
  studySeriesId: 'e4000001-0000-4000-8000-000000000079',
  title: 'Faith Receives the Facts',
  summary:
    'Faith does not create salvation. Faith receives and rests in the salvation already accomplished in Christ.',
  durationMinutes: 8,
  scripture: 'Galatians 2:20 · 2 Timothy 1:8-10 · Titus 3:3-8',
  sortOrder: 5,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonMadeNewInChrist6: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000892',
  slug: 'grace-trains-the-life',
  studySeriesId: 'e4000001-0000-4000-8000-000000000079',
  title: 'Grace Trains the Life',
  summary: 'Good works do not earn salvation, but saving grace teaches us how to live in a new way.',
  durationMinutes: 8,
  scripture: 'Titus 2:11-14 · Ephesians 2:10 · Philippians 2:12-13',
  sortOrder: 6,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonMadeNewInChrist7: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000893',
  slug: 'living-as-a-new-creation',
  studySeriesId: 'e4000001-0000-4000-8000-000000000079',
  title: 'Living as a New Creation',
  summary:
    'Because of Christ, believers can live from a new identity, a new motive, and a restored relationship with God.',
  durationMinutes: 8,
  scripture: '2 Corinthians 5:17 · 1 John 4:19 · Romans 8:1-4',
  sortOrder: 7,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const madeNewInChristLongDescription = `Many people think Christianity is mainly about trying harder, behaving better, or fixing themselves. But the gospel begins somewhere else.

Made New in Christ shows that salvation is not earned by right doing. It is received by faith in what Jesus has already accomplished. Through His life, death, resurrection, and ascension, Christ became the new representative head of humanity.

This study explores how the gospel changes our identity, reconciles us to God, creates a new life within us, and teaches us to live from grace instead of striving for acceptance.`

const seriesMadeNewInChrist: StudySeries = {
  id: 'e4000001-0000-4000-8000-000000000079',
  slug: MADE_NEW_IN_CHRIST_STUDY_SLUG,
  studyPathId: 'b1000001-0000-4000-8000-000000000001',
  title: 'Made New in Christ',
  subtitle:
    'The gospel of grace: what Jesus finished, who we become in Him, and how to live from new life.',
  shortDescription:
    'Discover the new life Jesus gives through forgiveness, renewal, and faith.',
  longDescription: madeNewInChristLongDescription,
  description: madeNewInChristLongDescription,
  level: 'Beginner',
  durationSummary: 'Approx. 55–70 min total',
  lessonsCount: 7,
  featured: false,
  collectionLabel: 'Foundational Studies',
  sortOrder: 11,
  foundationOrder: 10,
  whatYouWillLearn: [
    'Themes: gospel, salvation, grace, faith, new creation, Jesus, identity, transformation, reconciliation, second Adam, good works, life in Christ.',
    'See that salvation is received by faith in what Christ has already accomplished.',
    'Understand Christ as the new representative head and our reconciliation to God.',
    'Learn to live from grace, new identity, and the life Christ creates within us.',
  ],
  lessons: [
    lessonMadeNewInChrist1,
    lessonMadeNewInChrist2,
    lessonMadeNewInChrist3,
    lessonMadeNewInChrist4,
    lessonMadeNewInChrist5,
    lessonMadeNewInChrist6,
    lessonMadeNewInChrist7,
  ],
}

const THE_LAW_OF_LOVE_STUDY_SLUG = 'the-law-of-love'
const THE_LAW_OF_LOVE_OVERVIEW_HREF = `/study-library/${THE_LAW_OF_LOVE_STUDY_SLUG}`

function theLawOfLovePlaceholderShellSection(lessonId: string, sectionId: string): LessonSection {
  const body = JSON.stringify({
    blocks: [
      { type: 'paragraph', text: 'This lesson content has not been added yet.' },
      { type: 'studyCta', label: 'Back to study overview', href: THE_LAW_OF_LOVE_OVERVIEW_HREF },
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

const lessonTheLawOfLove1: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000894',
  slug: 'what-love-looks-like',
  studySeriesId: 'e4000001-0000-4000-8000-00000000007a',
  title: 'What Love Looks Like',
  summary: 'God\'s law describes a life of perfect love toward God and others.',
  durationMinutes: 8,
  scripture: 'Exodus 20:1 to 17 · Matthew 22:36 to 40 · 1 John 4:8',
  sortOrder: 1,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonTheLawOfLove2: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000895',
  slug: 'the-problem-within-us',
  studySeriesId: 'e4000001-0000-4000-8000-00000000007a',
  title: 'The Problem Within Us',
  summary:
    'Humanity is not naturally aligned with God\'s law of love and cannot fulfill it on its own.',
  durationMinutes: 8,
  scripture: 'Romans 7:12 to 15 · 1 John 3:4 · Romans 13:10',
  sortOrder: 2,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonTheLawOfLove3: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000896',
  slug: 'why-we-need-a-savior',
  studySeriesId: 'e4000001-0000-4000-8000-00000000007a',
  title: 'Why We Need a Savior',
  summary: 'Our inability to live in love reveals our need for salvation outside of ourselves.',
  durationMinutes: 8,
  scripture: 'Romans 7:24 to 25 · Romans 5:19 · Isaiah 64:6',
  sortOrder: 3,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonTheLawOfLove4: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000897',
  slug: 'righteousness-as-a-gift',
  studySeriesId: 'e4000001-0000-4000-8000-00000000007a',
  title: 'Righteousness as a Gift',
  summary:
    'God provides righteousness through Jesus, not as something we earn but as something we receive.',
  durationMinutes: 8,
  scripture: 'Romans 3:24 · Romans 5:15 to 17 · Jeremiah 23:6',
  sortOrder: 4,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonTheLawOfLove5: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000898',
  slug: 'the-new-covenant',
  studySeriesId: 'e4000001-0000-4000-8000-00000000007a',
  title: 'The New Covenant',
  summary: 'God promises to write His law in our hearts and transform us from the inside out.',
  durationMinutes: 8,
  scripture: 'Jeremiah 31:31 to 34 · Hebrews 8:7 to 12 · Romans 7:6',
  sortOrder: 5,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonTheLawOfLove6: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000899',
  slug: 'the-law-of-liberty',
  studySeriesId: 'e4000001-0000-4000-8000-00000000007a',
  title: 'The Law of Liberty',
  summary: 'God\'s law is not restrictive but liberating, leading to true freedom and fulfillment.',
  durationMinutes: 8,
  scripture: 'James 1:25 · Psalm 119:32 · Romans 13:10',
  sortOrder: 6,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonTheLawOfLove7: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000900',
  slug: 'living-a-life-of-love',
  studySeriesId: 'e4000001-0000-4000-8000-00000000007a',
  title: 'Living a Life of Love',
  summary: 'Those who receive God\'s love begin to live it out in real, practical ways.',
  durationMinutes: 8,
  scripture: '1 John 4:19 · John 13:34 to 35 · Galatians 5:13 to 14',
  sortOrder: 7,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const theLawOfLoveLongDescription = `This study explores the true nature of God's law as a reflection of His character of love. It reveals that the commandments are not restrictive rules but relational principles that lead to life, freedom, and human flourishing.

The Law of Love shows that obedience is not a means of earning salvation, but the natural result of experiencing God's grace. Through Christ, believers enter a new covenant where God writes His law on the heart, producing love from the inside out.`

const seriesTheLawOfLove: StudySeries = {
  id: 'e4000001-0000-4000-8000-00000000007a',
  slug: THE_LAW_OF_LOVE_STUDY_SLUG,
  studyPathId: 'b1000001-0000-4000-8000-000000000001',
  title: 'The Law of Love',
  subtitle: 'God\'s law reflects His love and leads to freedom, grace, and life through Jesus.',
  shortDescription:
    'Understand God\'s law as a revelation of love, not a system of earning salvation.',
  longDescription: theLawOfLoveLongDescription,
  description: theLawOfLoveLongDescription,
  level: 'Beginner',
  durationSummary: 'Approx. 55–70 min total',
  lessonsCount: 7,
  featured: false,
  collectionLabel: 'Foundational Studies',
  sortOrder: 12,
  foundationOrder: 11,
  whatYouWillLearn: [
    'Themes: love, law, commandments, obedience, grace, covenant, righteousness, faith, transformation, freedom.',
    'See God\'s law as loving relational truth that leads to life, not control for its own sake.',
    'Understand human need for a Savior and righteousness as God\'s gift through Jesus.',
    'Explore the new covenant and the law written on the heart, growing from grace.',
  ],
  lessons: [
    lessonTheLawOfLove1,
    lessonTheLawOfLove2,
    lessonTheLawOfLove3,
    lessonTheLawOfLove4,
    lessonTheLawOfLove5,
    lessonTheLawOfLove6,
    lessonTheLawOfLove7,
  ],
}

const THE_REST_GOD_GIVES_STUDY_SLUG = 'the-rest-god-gives'
const THE_REST_GOD_GIVES_OVERVIEW_HREF = `/study-library/${THE_REST_GOD_GIVES_STUDY_SLUG}`

const lessonRestGodGives1: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000901',
  slug: 'a-gift-in-time',
  studySeriesId: 'e4000001-0000-4000-8000-00000000007b',
  title: 'A Gift in Time',
  summary:
    'The Sabbath begins at creation as a sacred space in time where God invites humanity into rest, blessing, and relationship.',
  durationMinutes: 8,
  scripture: 'Genesis 2:1-3 · Mark 2:27-28 · Exodus 20:8-11',
  sortOrder: 1,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonRestGodGives2: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000902',
  slug: 'rest-before-work',
  studySeriesId: 'e4000001-0000-4000-8000-00000000007b',
  title: 'Rest Before Work',
  summary:
    'Human beings entered life after God’s work of creation was finished, showing that life begins by receiving before producing.',
  durationMinutes: 8,
  scripture: 'Genesis 1:26-31 · Genesis 2:1-3 · Psalm 100:3',
  sortOrder: 2,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonRestGodGives3: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000903',
  slug: 'remember-the-creator',
  studySeriesId: 'e4000001-0000-4000-8000-00000000007b',
  title: 'Remember the Creator',
  summary:
    'The Sabbath reminds us that God is Creator and that our lives depend on His power, provision, and care.',
  durationMinutes: 8,
  scripture: 'Exodus 20:8-11 · Psalm 95:6-7 · Revelation 14:6-7',
  sortOrder: 3,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonRestGodGives4: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000904',
  slug: 'remember-the-redeemer',
  studySeriesId: 'e4000001-0000-4000-8000-00000000007b',
  title: 'Remember the Redeemer',
  summary:
    'The Sabbath also points to redemption, reminding us that salvation is God’s work and not something we earn.',
  durationMinutes: 8,
  scripture: 'Deuteronomy 5:12-15 · Ephesians 2:8-10 · Psalm 51:10-12',
  sortOrder: 4,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonRestGodGives5: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000905',
  slug: 'it-is-finished',
  studySeriesId: 'e4000001-0000-4000-8000-00000000007b',
  title: 'It Is Finished',
  summary:
    'Jesus completed the work of salvation, and the Sabbath points us to rest in His finished work.',
  durationMinutes: 8,
  scripture: 'John 17:4 · John 19:30 · Luke 23:54-56',
  sortOrder: 5,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonRestGodGives6: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000906',
  slug: 'the-sabbath-and-the-new-covenant',
  studySeriesId: 'e4000001-0000-4000-8000-00000000007b',
  title: 'The Sabbath and the New Covenant',
  summary:
    'The Sabbath belongs within the new covenant life where obedience flows from grace, love, and a renewed heart.',
  durationMinutes: 8,
  scripture: 'Isaiah 56:1-7 · Jeremiah 31:31-34 · Hebrews 8:7-12 · Acts 13:42-44',
  sortOrder: 6,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonRestGodGives7: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000907',
  slug: 'rest-for-your-soul',
  studySeriesId: 'e4000001-0000-4000-8000-00000000007b',
  title: 'Rest for Your Soul',
  summary:
    'Jesus invites the weary to receive deep soul rest, and the Sabbath becomes a weekly reminder of that grace.',
  durationMinutes: 9,
  scripture: 'Matthew 11:28-30 · Mark 2:27-28 · Hebrews 4:9-10',
  sortOrder: 7,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const theRestGodGivesLongDescription = `The Rest God Gives explores the Sabbath as a weekly reminder of creation, redemption, grace, and restored relationship with God.

This study shows that Sabbath rest is not about earning God’s favor. It is a sign that we receive life and salvation as gifts from Him. From Genesis to the life of Jesus and the New Testament church, Scripture presents the Sabbath as a sacred space in time where humanity is invited to rest in God’s completed work.

The Sabbath teaches us to stop striving, remember our Creator, trust our Redeemer, and receive the deeper rest Christ gives to the soul.`

const seriesTheRestGodGives: StudySeries = {
  id: 'e4000001-0000-4000-8000-00000000007b',
  slug: THE_REST_GOD_GIVES_STUDY_SLUG,
  studyPathId: 'b1000001-0000-4000-8000-000000000001',
  title: 'The Rest God Gives',
  subtitle: 'Sabbath rest as a weekly sign of creation, redemption, and grace in Christ.',
  shortDescription:
    'Explore the gift of Sabbath rest and what it reveals about trust in God.',
  longDescription: theRestGodGivesLongDescription,
  description: theRestGodGivesLongDescription,
  level: 'Beginner',
  durationSummary: 'Approx. 55–70 min total',
  lessonsCount: 7,
  featured: false,
  collectionLabel: 'Foundational Studies',
  sortOrder: 13,
  foundationOrder: 12,
  whatYouWillLearn: [
    'Themes: Sabbath, rest, creation, redemption, grace, salvation, covenant, Jesus, worship, commandments, freedom, faith.',
    'See the Sabbath as God’s gift in time, rooted in creation and fulfilled in Christ.',
    'Understand rest before work: life begins by receiving God’s completed work.',
    'Follow Scripture from Creator and Redeemer to soul rest in Jesus.',
  ],
  lessons: [
    lessonRestGodGives1,
    lessonRestGodGives2,
    lessonRestGodGives3,
    lessonRestGodGives4,
    lessonRestGodGives5,
    lessonRestGodGives6,
    lessonRestGodGives7,
  ],
}

const THE_LIFE_THAT_GIVES_STUDY_SLUG = 'the-life-that-gives'
const THE_LIFE_THAT_GIVES_OVERVIEW_HREF = `/study-library/${THE_LIFE_THAT_GIVES_STUDY_SLUG}`

const lessonLifeThatGives1: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000908',
  slug: 'god-gives-first',
  studySeriesId: 'e4000001-0000-4000-8000-00000000007c',
  title: 'God Gives First',
  summary:
    'All true generosity begins with God, the Great Giver, who gives life, every good gift, and ultimately His Son.',
  durationMinutes: 8,
  scripture: 'James 1:17 · John 3:16 · Romans 8:32',
  sortOrder: 1,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonLifeThatGives2: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000909',
  slug: 'the-circle-of-blessing',
  studySeriesId: 'e4000001-0000-4000-8000-00000000007c',
  title: 'The Circle of Blessing',
  summary:
    'God\'s love moves outward in giving, creating a circle of blessing where receiving leads to giving.',
  durationMinutes: 8,
  scripture: 'Luke 6:38 · Philippians 2:1-6 · 1 John 4:19',
  sortOrder: 2,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonLifeThatGives3: Lesson = {
  id: 'd3000007-0000-4000-8000-00000000090a',
  slug: 'from-taking-to-giving',
  studySeriesId: 'e4000001-0000-4000-8000-00000000007c',
  title: 'From Taking to Giving',
  summary:
    'Sin turns the heart inward, but Jesus redeems us from self-centered living into other-centered love.',
  durationMinutes: 8,
  scripture: 'Titus 2:14 · Galatians 1:3-5 · 2 Timothy 3:1-5',
  sortOrder: 3,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonLifeThatGives4: Lesson = {
  id: 'd3000007-0000-4000-8000-00000000090b',
  slug: 'everything-belongs-to-god',
  studySeriesId: 'e4000001-0000-4000-8000-00000000007c',
  title: 'Everything Belongs to God',
  summary:
    'Stewardship begins with recognizing that all material blessings belong to God and are entrusted to us.',
  durationMinutes: 8,
  scripture: 'Psalm 24:1 · Haggai 2:8 · Deuteronomy 8:18 · 1 Chronicles 29:14',
  sortOrder: 4,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonLifeThatGives5: Lesson = {
  id: 'd3000007-0000-4000-8000-00000000090c',
  slug: 'returning-the-tithe',
  studySeriesId: 'e4000001-0000-4000-8000-00000000007c',
  title: 'Returning the Tithe',
  summary:
    'Tithe is an act of faith that acknowledges God as the source of all increase and supports His work.',
  durationMinutes: 8,
  scripture: 'Genesis 28:22 · Leviticus 27:30 · Numbers 18:21 · Malachi 3:8-10',
  sortOrder: 5,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonLifeThatGives6: Lesson = {
  id: 'd3000007-0000-4000-8000-00000000090d',
  slug: 'offerings-from-the-heart',
  studySeriesId: 'e4000001-0000-4000-8000-00000000007c',
  title: 'Offerings From the Heart',
  summary:
    'Beyond tithe, God invites cheerful, willing generosity that flows from love, gratitude, and trust.',
  durationMinutes: 8,
  scripture: 'Deuteronomy 16:17 · 2 Corinthians 9:6-10 · Matthew 6:19-21',
  sortOrder: 6,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonLifeThatGives7: Lesson = {
  id: 'd3000007-0000-4000-8000-00000000090e',
  slug: 'giving-as-love-in-action',
  studySeriesId: 'e4000001-0000-4000-8000-00000000007c',
  title: 'Giving as Love in Action',
  summary:
    'Tithes, offerings, service, and generosity become practical ways to reflect God\'s heart to the world.',
  durationMinutes: 9,
  scripture: 'Matthew 23:23 · Luke 11:42 · Acts 20:35 · 1 John 3:16-18',
  sortOrder: 7,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const DESIGNED_TO_THRIVE_STUDY_SLUG = 'designed-to-thrive'
const DESIGNED_TO_THRIVE_OVERVIEW_HREF = `/study-library/${DESIGNED_TO_THRIVE_STUDY_SLUG}`

const designedToThriveShell = (lessonId: string, sectionId: string, extra?: Parameters<typeof foundationLessonShellSection>[3]) =>
  foundationLessonShellSection(lessonId, sectionId, DESIGNED_TO_THRIVE_OVERVIEW_HREF, {
    placeholderText: FOUNDATION_SHELL_PLACEHOLDER_LEGACY,
    ...extra,
  })

const lessonDesignedToThrive1: Lesson = {
  id: 'd3000007-0000-4000-8000-00000000090f',
  slug: 'choices-have-consequences',
  studySeriesId: 'e4000001-0000-4000-8000-00000000007d',
  title: 'Choices Have Consequences',
  summary:
    'God designed life with cause and effect, meaning our choices shape real outcomes in our bodies, minds, relationships, and spiritual lives.',
  durationMinutes: 8,
  scripture: 'Proverbs 26:2 · Galatians 6:7 · Proverbs 8:34-36',
  sortOrder: 1,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonDesignedToThrive2: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000910',
  slug: 'wisdom-for-whole-life',
  studySeriesId: 'e4000001-0000-4000-8000-00000000007d',
  title: 'Wisdom for Whole Life',
  summary:
    'Biblical wisdom helps us understand the principles of life and make choices that lead to blessing, health, and well-being.',
  durationMinutes: 8,
  scripture: 'Proverbs 3:5-8 · Proverbs 4:20-23 · James 1:5',
  sortOrder: 2,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonDesignedToThrive3: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000911',
  slug: 'saved-means-made-whole',
  studySeriesId: 'e4000001-0000-4000-8000-00000000007d',
  title: 'Saved Means Made Whole',
  summary:
    'The Bible\'s picture of salvation includes healing, restoration, freedom, and wholeness in the present life.',
  durationMinutes: 8,
  scripture: 'John 10:10 · 3 John 1:2 · Romans 12:1-2',
  sortOrder: 3,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonDesignedToThrive4: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000912',
  slug: 'your-body-matters-to-god',
  studySeriesId: 'e4000001-0000-4000-8000-00000000007d',
  title: 'Your Body Matters to God',
  summary:
    'God cares about the body because it belongs to Him and is meant to glorify Him.',
  durationMinutes: 8,
  scripture: '1 Corinthians 6:19-20 · 1 Corinthians 10:31 · Romans 12:1',
  sortOrder: 4,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonDesignedToThrive5: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000913',
  slug: 'the-original-design-for-food',
  studySeriesId: 'e4000001-0000-4000-8000-00000000007d',
  title: 'The Original Design for Food',
  summary:
    'Scripture points back to God\'s original food design and invites us to consider eating in ways that support life and health.',
  durationMinutes: 8,
  scripture: 'Genesis 1:29 · Daniel 1:8-16 · Proverbs 23:20-21',
  sortOrder: 5,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonDesignedToThrive6: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000914',
  slug: 'clear-mind-clean-life',
  studySeriesId: 'e4000001-0000-4000-8000-00000000007d',
  title: 'Clear Mind, Clean Life',
  summary:
    'God calls us to temperance and clear-minded living, avoiding what damages the body, clouds judgment, and harms others.',
  durationMinutes: 8,
  scripture: 'Proverbs 20:1 · Proverbs 23:29-35 · 1 Corinthians 6:9-11',
  sortOrder: 6,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonDesignedToThrive7: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000915',
  slug: 'jesus-the-healer',
  studySeriesId: 'e4000001-0000-4000-8000-00000000007d',
  title: 'Jesus the Healer',
  summary:
    'Jesus came as the healer of hearts and bodies, revealing that God cares about our spiritual and physical restoration.',
  durationMinutes: 9,
  scripture: 'Isaiah 53:5 · Matthew 1:21 · Acts 10:38 · John 10:10',
  sortOrder: 7,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const designedToThriveLongDescription = `Designed to Thrive explores the biblical view of health as part of God's loving design for human flourishing.

Because God is love, He cares about the whole person: body, mind, heart, and spirit. This study introduces the principle of cause and effect, the meaning of biblical wisdom, and the way daily choices shape well-being.

Through Scripture, students will see that salvation is not only about future hope, but also about God's desire to restore, heal, and make us whole. This study also explores the original diet, temperance, health stewardship, and the healing ministry of Jesus.

Designed to Thrive helps beginners understand that health is not about perfection, pride, or legalism. It is about responding to God's love by caring for the life He has entrusted to us.`

const BURIED_AND_RAISED_STUDY_SLUG = 'buried-and-raised'

const lessonBuriedAndRaised1: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000916',
  slug: 'loved-into-new-life',
  studySeriesId: 'e4000001-0000-4000-8000-00000000007e',
  title: 'Loved Into New Life',
  summary:
    'God does not erase who we are. He loves us, draws us, and begins transforming us into the people He created us to become.',
  durationMinutes: 8,
  scripture: 'Jeremiah 31:3 · Luke 15:20 · John 17:23 · 1 John 3:16',
  sortOrder: 1,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonBuriedAndRaised2: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000917',
  slug: 'born-again',
  studySeriesId: 'e4000001-0000-4000-8000-00000000007e',
  title: 'Born Again',
  summary:
    'Jesus teaches that salvation includes a deep rebirth of the heart, mind, motives, and will.',
  durationMinutes: 8,
  scripture: 'John 3:1-17 · John 3:16-17 · 2 Corinthians 5:17',
  sortOrder: 2,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonBuriedAndRaised3: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000918',
  slug: 'love-not-condemnation',
  studySeriesId: 'e4000001-0000-4000-8000-00000000007e',
  title: 'Love, Not Condemnation',
  summary:
    'God motivates transformation through love, not manipulation, fear, or condemnation.',
  durationMinutes: 8,
  scripture: 'John 3:16-17 · Romans 2:4 · 1 John 4:16-19',
  sortOrder: 3,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonBuriedAndRaised4: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000919',
  slug: 'water-and-spirit',
  studySeriesId: 'e4000001-0000-4000-8000-00000000007e',
  title: 'Water and Spirit',
  summary:
    'Jesus connects new birth with water and the Spirit, pointing to baptism and the transforming work of the Holy Spirit.',
  durationMinutes: 8,
  scripture: 'John 3:5 · Matthew 3:13-17 · Acts 2:38',
  sortOrder: 4,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonBuriedAndRaised5: Lesson = {
  id: 'd3000007-0000-4000-8000-00000000091a',
  slug: 'buried-with-christ',
  studySeriesId: 'e4000001-0000-4000-8000-00000000007e',
  title: 'Buried With Christ',
  summary:
    'Baptism identifies us with the death, burial, and resurrection of Jesus, declaring that the old life is dead and new life has begun.',
  durationMinutes: 8,
  scripture: 'Romans 6:1-11 · Colossians 2:12 · Galatians 2:20',
  sortOrder: 5,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonBuriedAndRaised6: Lesson = {
  id: 'd3000007-0000-4000-8000-00000000091b',
  slug: 'in-the-name-of-god',
  studySeriesId: 'e4000001-0000-4000-8000-00000000007e',
  title: 'In the Name of God',
  summary:
    'To be baptized in the name of the Father, Son, and Holy Spirit is to identify with God\'s character and enter a life shaped by His love.',
  durationMinutes: 8,
  scripture: 'Matthew 28:19-20 · John 17:26 · 1 John 4:8',
  sortOrder: 6,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonBuriedAndRaised7: Lesson = {
  id: 'd3000007-0000-4000-8000-00000000091c',
  slug: 'a-public-yes-to-jesus',
  studySeriesId: 'e4000001-0000-4000-8000-00000000007e',
  title: 'A Public Yes to Jesus',
  summary:
    'Baptism is a public, personal decision to belong to Jesus, follow Him, and grow as His disciple.',
  durationMinutes: 9,
  scripture: 'Acts 8:35-38 · Acts 22:16 · Matthew 28:19-20 · Romans 6:4',
  sortOrder: 7,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const buriedAndRaisedLongDescription = `Buried and Raised explores the meaning of baptism as a personal response to God's love and saving work in Jesus Christ.

This study shows that God does not force transformation. He draws us with everlasting love, invites us into new birth, and calls us to identify with Christ through baptism by immersion. Baptism symbolizes the death of the old life, burial with Christ, and resurrection into a new life shaped by the Holy Spirit.

Students will discover what it means to be born again, to repent, to receive the Holy Spirit, to be baptized in the name of the Father, Son, and Holy Spirit, and to begin a life of growing discipleship with Jesus.`

const BUILT_TO_BELONG_STUDY_SLUG = 'built-to-belong'
const BUILT_TO_BELONG_OVERVIEW_HREF = `/study-library/${BUILT_TO_BELONG_STUDY_SLUG}`
const SERIES_ID_BUILT_TO_BELONG = 'e4000001-0000-4000-8000-00000000007f'

const BUILT_TO_BELONG_SECTION_IDS = {
  lesson1: 'eab2bf01-0000-41b7-9191-d300091d0101',
  lesson2: 'eab2bf01-0000-41b7-9192-d300091e0102',
  lesson3: 'eab2bf01-0000-41b7-9193-d300091f0103',
  lesson4: 'eab2bf01-0000-41b7-9194-d30009200104',
  lesson5: 'eab2bf01-0000-41b7-9195-d30009210105',
  lesson6: 'eab2bf01-0000-41b7-9196-d30009220106',
  lesson7: 'eab2bf01-0000-41b7-9197-d30009230107',
} as const

const builtToBelongLessonShellSection = (
  sectionId: string,
  lessonId: string,
  extra?: Parameters<typeof foundationLessonShellSection>[3],
) =>
  foundationLessonShellSection(lessonId, sectionId, BUILT_TO_BELONG_OVERVIEW_HREF, {
    placeholderText: FOUNDATION_SHELL_PLACEHOLDER_LEGACY,
    ...extra,
  })

const lessonBuiltToBelong1: Lesson = {
  id: 'd3000007-0000-4000-8000-00000000091d',
  slug: 'born-into-a-family',
  studySeriesId: SERIES_ID_BUILT_TO_BELONG,
  title: 'Born Into a Family',
  summary:
    'Just as physical birth brings us into a family, spiritual rebirth brings us into the family of God for growth, healing, and belonging.',
  durationMinutes: 8,
  scripture: '1 John 1:1-4 · John 13:34-35 · Ephesians 2:19-22',
  sortOrder: 1,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonBuiltToBelong2: Lesson = {
  id: 'd3000007-0000-4000-8000-00000000091e',
  slug: 'the-fellowship-of-love',
  studySeriesId: SERIES_ID_BUILT_TO_BELONG,
  title: 'The Fellowship of Love',
  summary:
    'The church is a community of shared life with God and one another, where believers grow through love, truth, prayer, and connection.',
  durationMinutes: 8,
  scripture: '1 John 1:3-4 · Acts 2:40-47 · Hebrews 10:24-25',
  sortOrder: 2,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonBuiltToBelong3: Lesson = {
  id: 'd3000007-0000-4000-8000-00000000091f',
  slug: 'a-community-being-healed',
  studySeriesId: SERIES_ID_BUILT_TO_BELONG,
  title: 'A Community Being Healed',
  summary:
    'The church is not a museum for perfect people, but a fellowship where broken people are being restored by Jesus.',
  durationMinutes: 8,
  scripture: 'Acts 2:47 · Galatians 6:1-2 · James 5:16',
  sortOrder: 3,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonBuiltToBelong4: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000920',
  slug: 'called-to-proclaim-his-praise',
  studySeriesId: SERIES_ID_BUILT_TO_BELONG,
  title: 'Called to Proclaim His Praise',
  summary:
    'The church exists to proclaim the beauty of God\'s character and the good news of His love revealed in Jesus.',
  durationMinutes: 8,
  scripture: '1 Peter 2:9 · 2 Corinthians 4:4-6 · Matthew 28:19-20',
  sortOrder: 4,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonBuiltToBelong5: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000921',
  slug: 'truth-spoken-in-love',
  studySeriesId: SERIES_ID_BUILT_TO_BELONG,
  title: 'Truth Spoken in Love',
  summary:
    'God calls His people to grow in maturity by speaking truth with humility, patience, unity, and love.',
  durationMinutes: 8,
  scripture: 'Ephesians 4:1-16 · Colossians 3:12-14 · John 17:20-23',
  sortOrder: 5,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonBuiltToBelong6: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000922',
  slug: 'gifts-for-ministry',
  studySeriesId: SERIES_ID_BUILT_TO_BELONG,
  title: 'Gifts for Ministry',
  summary:
    'Every believer receives grace and spiritual gifts so the whole church can serve, grow, and bless others.',
  durationMinutes: 8,
  scripture: 'Ephesians 4:7-12 · 1 Corinthians 12:4-7 · Romans 12:4-8',
  sortOrder: 6,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonBuiltToBelong7: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000923',
  slug: 'love-that-serves-the-world',
  studySeriesId: SERIES_ID_BUILT_TO_BELONG,
  title: 'Love That Serves the World',
  summary:
    'The church reveals God\'s love by serving practical needs, pursuing justice, showing mercy, and blessing the world.',
  durationMinutes: 10,
  scripture: 'Isaiah 58:6-11 · Matthew 22:37-39 · Luke 10:30-37 · Matthew 7:12',
  sortOrder: 7,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const builtToBelongLongDescription = `Built to Belong explores the biblical meaning and purpose of the church.

God did not save people into isolation. He calls believers into a spiritual family where fellowship, healing, discipleship, truth, service, and mission can grow. The church is meant to be a living community that reflects the self-giving love of God to its members and to the world.

This study shows that the church exists for more than attendance, programs, or religious activity. It is God\'s appointed community for restoring relationships, proclaiming His character, serving practical needs, and helping believers grow into the likeness of Christ.

Built to Belong helps beginners see the church as a healing community where love is received, practiced, and revealed.`

const seriesBuiltToBelong: StudySeries = {
  id: SERIES_ID_BUILT_TO_BELONG,
  slug: BUILT_TO_BELONG_STUDY_SLUG,
  studyPathId: 'b1000001-0000-4000-8000-000000000001',
  title: 'Built to Belong',
  subtitle: 'The church as God\'s community for fellowship, healing, proclamation, and service.',
  shortDescription:
    'God is building a restored community where His love is experienced, practiced, proclaimed, and shared with the world.',
  longDescription: builtToBelongLongDescription,
  description: builtToBelongLongDescription,
  level: 'Beginner',
  durationSummary: 'Approx. 55–70 min total',
  lessonsCount: 7,
  featured: false,
  collectionLabel: 'Foundational Studies',
  sortOrder: 17,
  foundationOrder: 16,
  whatYouWillLearn: [
    'Themes: church, fellowship, belonging, discipleship, service, unity, spiritual gifts, love, mission, healing.',
    'See how Scripture pictures the church as a spiritual family, not isolation.',
    'Understand fellowship, healing, gospel proclamation, truth in love, gifts, and service to the world.',
    'Grow in beginner-friendly biblical hope for living community rooted in Jesus.',
  ],
  lessons: [
    lessonBuiltToBelong1,
    lessonBuiltToBelong2,
    lessonBuiltToBelong3,
    lessonBuiltToBelong4,
    lessonBuiltToBelong5,
    lessonBuiltToBelong6,
    lessonBuiltToBelong7,
  ],
}

const POWER_UNDER_LOVE_STUDY_SLUG = 'power-under-love'
const POWER_UNDER_LOVE_OVERVIEW_HREF = `/study-library/${POWER_UNDER_LOVE_STUDY_SLUG}`
const SERIES_ID_POWER_UNDER_LOVE = 'e4000001-0000-4000-8000-000000000080'

const POWER_UNDER_LOVE_SECTION_IDS = {
  lesson1: 'eab2bf01-0000-41b7-9201-d30009240101',
  lesson2: 'eab2bf01-0000-41b7-9202-d30009240202',
  lesson3: 'eab2bf01-0000-41b7-9203-d30009240303',
  lesson4: 'eab2bf01-0000-41b7-9204-d30009240404',
  lesson5: 'eab2bf01-0000-41b7-9205-d30009240505',
  lesson6: 'eab2bf01-0000-41b7-9206-d30009240606',
  lesson7: 'eab2bf01-0000-41b7-9207-d30009240707',
} as const

const powerUnderLoveLessonShellSection = (
  sectionId: string,
  lessonId: string,
  extra?: Parameters<typeof foundationLessonShellSection>[3],
) =>
  foundationLessonShellSection(lessonId, sectionId, POWER_UNDER_LOVE_OVERVIEW_HREF, {
    placeholderText: FOUNDATION_SHELL_PLACEHOLDER_LEGACY,
    ...extra,
  })

const lessonPowerUnderLove1: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000924',
  slug: 'the-upside-down-kingdom',
  studySeriesId: SERIES_ID_POWER_UNDER_LOVE,
  title: 'The Upside-Down Kingdom',
  summary:
    'Jesus reveals a kingdom where greatness is measured by humility, service, and self-giving love instead of domination and control.',
  durationMinutes: 9,
  scripture: 'Luke 22:24-30 · Matthew 11:29 · John 13:1-17',
  sortOrder: 1,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonPowerUnderLove2: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000925',
  slug: 'power-over-or-power-under',
  studySeriesId: SERIES_ID_POWER_UNDER_LOVE,
  title: 'Power Over or Power Under',
  summary:
    'The world uses authority to rule over others, but Jesus uses power to serve, heal, and lay down His life.',
  durationMinutes: 9,
  scripture: 'Luke 12:37 · John 13:1-17 · Luke 6:27-38 · 1 Peter 2:21-24',
  sortOrder: 2,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonPowerUnderLove3: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000926',
  slug: 'the-falling-away',
  studySeriesId: SERIES_ID_POWER_UNDER_LOVE,
  title: 'The Falling Away',
  summary:
    'Scripture foretold an apostasy that would set up a counterfeit religious system while claiming to represent God.',
  durationMinutes: 9,
  scripture: '2 Thessalonians 2:3-7 · Acts 20:28-31 · 1 Timothy 4:1',
  sortOrder: 3,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonPowerUnderLove4: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000927',
  slug: 'the-little-horn',
  studySeriesId: SERIES_ID_POWER_UNDER_LOVE,
  title: 'The Little Horn',
  summary:
    'Daniel\'s prophecy reveals a religious-political power that would rise from Rome and oppose God\'s truth.',
  durationMinutes: 9,
  scripture: 'Daniel 7:2-8 · Daniel 7:17, 23-25 · Revelation 17:15',
  sortOrder: 4,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonPowerUnderLove5: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000928',
  slug: 'when-religion-misrepresents-god',
  studySeriesId: SERIES_ID_POWER_UNDER_LOVE,
  title: 'When Religion Misrepresents God',
  summary:
    'The apostasy is marked by self-exaltation, coercion, persecution, and attempts to change God\'s law.',
  durationMinutes: 9,
  scripture: 'Daniel 7:25 · 2 Thessalonians 2:4 · Matthew 15:3-9',
  sortOrder: 5,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonPowerUnderLove6: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000929',
  slug: 'truth-without-arrogance',
  studySeriesId: SERIES_ID_POWER_UNDER_LOVE,
  title: 'Truth Without Arrogance',
  summary:
    'God\'s people must identify false systems without hatred, pride, or condemnation toward the people trapped within them.',
  durationMinutes: 9,
  scripture: '1 Corinthians 8:1 · Ephesians 4:15 · 2 Timothy 2:24-26',
  sortOrder: 6,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonPowerUnderLove7: Lesson = {
  id: 'd3000007-0000-4000-8000-00000000092a',
  slug: 'holding-truth-with-love',
  studySeriesId: SERIES_ID_POWER_UNDER_LOVE,
  title: 'Holding Truth With Love',
  summary:
    'God\'s love moves Him to tell the truth, and His love in us moves us to hold truth with humility, compassion, and faithfulness.',
  durationMinutes: 10,
  scripture: 'John 8:31-32 · 1 John 4:7-8 · Revelation 14:6-12',
  sortOrder: 7,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const powerUnderLoveLongDescription = `Power Under Love explores the biblical contrast between Christ's kingdom and counterfeit religion.

Jesus founded His church on self-giving, non-coercive love. His kingdom operates by humility, service, and sacrifice. But Scripture foretold a great apostasy that would distort God's character, exalt human authority, and replace Christlike love with religious control.

This study introduces beginners to the biblical teaching of apostasy through Jesus' upside-down kingdom, Paul's warning of a falling away, and Daniel's prophecy of the little horn. Students will learn how prophecy exposes systems that misrepresent God while still calling believers to hold truth with humility, love, and compassion for all people.

Power Under Love helps students see that God tells the truth because He loves people, and His people must hold prophetic truth with the same spirit of love.`

const seriesPowerUnderLove: StudySeries = {
  id: SERIES_ID_POWER_UNDER_LOVE,
  slug: POWER_UNDER_LOVE_STUDY_SLUG,
  studyPathId: 'b1000001-0000-4000-8000-000000000001',
  title: 'Power Under Love',
  subtitle: 'Christ\'s kingdom of humble love contrasted with counterfeit religion and coercive power.',
  shortDescription:
    'Jesus builds His kingdom on humble, self-giving love, while false religion replaces love with control, self-exaltation, and coercive power.',
  longDescription: powerUnderLoveLongDescription,
  description: powerUnderLoveLongDescription,
  level: 'Beginner',
  durationSummary: 'Approx. 60–75 min total',
  lessonsCount: 7,
  featured: false,
  collectionLabel: 'Foundational Studies',
  sortOrder: 18,
  foundationOrder: 17,
  whatYouWillLearn: [
    'Themes: apostasy, prophecy, Daniel 7, kingdom of God, humility, self-giving love, truth, deception, law, Sabbath, Jesus.',
    'See Jesus\' upside-down kingdom of humility and service contrasted with worldly power.',
    'Understand apostasy, the little horn, and how prophecy exposes systems that misrepresent God.',
    'Hold prophetic truth with humility, compassion, and Christlike love for all people.',
  ],
  lessons: [
    lessonPowerUnderLove1,
    lessonPowerUnderLove2,
    lessonPowerUnderLove3,
    lessonPowerUnderLove4,
    lessonPowerUnderLove5,
    lessonPowerUnderLove6,
    lessonPowerUnderLove7,
  ],
}

const FAITHFUL_IN_THE_WILDERNESS_STUDY_SLUG = 'faithful-in-the-wilderness'
const FAITHFUL_IN_THE_WILDERNESS_OVERVIEW_HREF = `/study-library/${FAITHFUL_IN_THE_WILDERNESS_STUDY_SLUG}`
const SERIES_ID_FAITHFUL_IN_THE_WILDERNESS = 'e4000001-0000-4000-8000-000000000081'

const FAITHFUL_IN_THE_WILDERNESS_SECTION_IDS = {
  lesson1: 'eab2bf01-0000-41b7-9208-d30009250101',
  lesson2: 'eab2bf01-0000-41b7-9209-d30009250202',
  lesson3: 'eab2bf01-0000-41b7-920a-d30009250303',
  lesson4: 'eab2bf01-0000-41b7-920b-d30009250404',
  lesson5: 'eab2bf01-0000-41b7-920c-d30009250505',
  lesson6: 'eab2bf01-0000-41b7-920d-d30009250606',
  lesson7: 'eab2bf01-0000-41b7-920e-d30009250707',
} as const

const faithfulInTheWildernessLessonShellSection = (
  sectionId: string,
  lessonId: string,
  extra?: Parameters<typeof foundationLessonShellSection>[3],
) =>
  foundationLessonShellSection(lessonId, sectionId, FAITHFUL_IN_THE_WILDERNESS_OVERVIEW_HREF, {
    placeholderText: FOUNDATION_SHELL_PLACEHOLDER_LEGACY,
    ...extra,
  })

const lessonFaithfulInTheWilderness1: Lesson = {
  id: 'd3000007-0000-4000-8000-00000000092b',
  slug: 'the-woman-in-the-wilderness',
  studySeriesId: SERIES_ID_FAITHFUL_IN_THE_WILDERNESS,
  title: 'The Woman in the Wilderness',
  summary:
    'Revelation 12 introduces a symbolic woman who represents God\'s faithful people, clothed with the light of Christ and opposed by the dragon.',
  durationMinutes: 9,
  scripture: 'Revelation 12:1-6 · Jeremiah 6:2 · Ephesians 5:22-27 · Malachi 4:2 · John 8:12',
  sortOrder: 1,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonFaithfulInTheWilderness2: Lesson = {
  id: 'd3000007-0000-4000-8000-00000000092c',
  slug: 'the-dragon-and-the-child',
  studySeriesId: SERIES_ID_FAITHFUL_IN_THE_WILDERNESS,
  title: 'The Dragon and the Child',
  summary:
    'The dragon seeks to destroy Christ, but Jesus fulfills His mission, defeats Satan, and is caught up to God\'s throne.',
  durationMinutes: 9,
  scripture: 'Revelation 12:3-5 · Genesis 3:15 · Matthew 2:13-16 · John 12:31-32 · Colossians 2:15',
  sortOrder: 2,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonFaithfulInTheWilderness3: Lesson = {
  id: 'd3000007-0000-4000-8000-00000000092d',
  slug: 'preserved-through-the-dark-years',
  studySeriesId: SERIES_ID_FAITHFUL_IN_THE_WILDERNESS,
  title: 'Preserved Through the Dark Years',
  summary:
    'During the wilderness period, God preserved His faithful people and nourished the truth of the gospel through persecution.',
  durationMinutes: 9,
  scripture: 'Revelation 12:6 · Revelation 12:13-16 · Ezekiel 4:6 · Daniel 7:25',
  sortOrder: 3,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonFaithfulInTheWilderness4: Lesson = {
  id: 'd3000007-0000-4000-8000-00000000092e',
  slug: 'the-war-behind-history',
  studySeriesId: SERIES_ID_FAITHFUL_IN_THE_WILDERNESS,
  title: 'The War Behind History',
  summary:
    'Revelation 12 connects the original war in heaven with Christ\'s victory at the cross and Satan\'s continued opposition to God\'s people.',
  durationMinutes: 9,
  scripture: 'Revelation 12:7-12 · John 12:31-32 · Colossians 2:15 · 1 Peter 5:8-9',
  sortOrder: 4,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonFaithfulInTheWilderness5: Lesson = {
  id: 'd3000007-0000-4000-8000-00000000092f',
  slug: 'the-remnant-of-her-seed',
  studySeriesId: SERIES_ID_FAITHFUL_IN_THE_WILDERNESS,
  title: 'The Remnant of Her Seed',
  summary:
    'Revelation identifies the remnant as those who keep the commandments of God and have the testimony of Jesus Christ.',
  durationMinutes: 9,
  scripture: 'Revelation 12:17 · Revelation 14:12 · Isaiah 10:20-22 · Jeremiah 23:3',
  sortOrder: 5,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonFaithfulInTheWilderness6: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000930',
  slug: 'truth-recovered-for-the-world',
  studySeriesId: SERIES_ID_FAITHFUL_IN_THE_WILDERNESS,
  title: 'Truth Recovered for the World',
  summary:
    'After centuries of persecution and confusion, God raised up a movement to recover biblical truth and proclaim the gospel with clarity.',
  durationMinutes: 9,
  scripture: 'Revelation 12:17 · Revelation 14:6-12 · Daniel 8:14 · John 17:17',
  sortOrder: 6,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonFaithfulInTheWilderness7: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000931',
  slug: 'faithful-until-the-end',
  studySeriesId: SERIES_ID_FAITHFUL_IN_THE_WILDERNESS,
  title: 'Faithful Until the End',
  summary:
    'God\'s final people endure by trusting Jesus, keeping His commandments, and holding fast to His faithful promise.',
  durationMinutes: 9,
  scripture: 'Revelation 14:12 · Revelation 12:17 · Matthew 24:13 · Hebrews 10:23',
  sortOrder: 7,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const faithfulInTheWildernessLongDescription = `Faithful in the Wilderness explores Revelation 12 and the prophetic story of God's faithful church through history.

This study shows that God has always had a people in the world to preserve and proclaim the truth of His character, even during seasons of darkness, persecution, and religious confusion. Revelation 12 presents a symbolic picture of the woman, the dragon, the wilderness, the 1260-year period, and the remnant of her seed.

Students will learn how Scripture identifies the faithful church as a community centered on Jesus, preserved by God, committed to His commandments, and carrying the testimony of Jesus. This study also emphasizes that remnant truth must never create arrogance. God's people are called to speak the truth in love and take the gospel to the world with humility, clarity, and compassion.`

const seriesFaithfulInTheWilderness: StudySeries = {
  id: SERIES_ID_FAITHFUL_IN_THE_WILDERNESS,
  slug: FAITHFUL_IN_THE_WILDERNESS_STUDY_SLUG,
  studyPathId: 'b1000001-0000-4000-8000-000000000001',
  title: 'Faithful in the Wilderness',
  subtitle: 'Revelation 12 and God\'s faithful remnant preserved through history to proclaim truth in love.',
  shortDescription:
    'God has always preserved a faithful people to reveal His character, proclaim His truth, and carry the gospel through history.',
  longDescription: faithfulInTheWildernessLongDescription,
  description: faithfulInTheWildernessLongDescription,
  level: 'Beginner',
  durationSummary: 'Approx. 60–75 min total',
  lessonsCount: 7,
  featured: false,
  collectionLabel: 'Foundational Studies',
  sortOrder: 19,
  foundationOrder: 18,
  whatYouWillLearn: [
    'Themes: Revelation 12, remnant, wilderness, prophecy, persecution, commandments of God, testimony of Jesus, gospel, mission.',
    'See Revelation 12\'s symbolic picture of God\'s faithful people, Christ\'s victory, and Satan\'s opposition.',
    'Understand how God preserved truth through the wilderness period and identifies the remnant.',
    'Hold remnant mission with humility, love, and global gospel proclamation.',
  ],
  lessons: [
    lessonFaithfulInTheWilderness1,
    lessonFaithfulInTheWilderness2,
    lessonFaithfulInTheWilderness3,
    lessonFaithfulInTheWilderness4,
    lessonFaithfulInTheWilderness5,
    lessonFaithfulInTheWilderness6,
    lessonFaithfulInTheWilderness7,
  ],
}

const THE_FAITHFUL_WITNESS_STUDY_SLUG = 'the-faithful-witness'
const THE_FAITHFUL_WITNESS_OVERVIEW_HREF = `/study-library/${THE_FAITHFUL_WITNESS_STUDY_SLUG}`
const SERIES_ID_THE_FAITHFUL_WITNESS = 'e4000001-0000-4000-8000-000000000082'

const THE_FAITHFUL_WITNESS_SECTION_IDS = {
  lesson1: 'eab2bf01-0000-41b7-920f-d30009250801',
  lesson2: 'eab2bf01-0000-41b7-9210-d30009250902',
  lesson3: 'eab2bf01-0000-41b7-9211-d30009251003',
  lesson4: 'eab2bf01-0000-41b7-9212-d30009251104',
  lesson5: 'eab2bf01-0000-41b7-9213-d30009251205',
  lesson6: 'eab2bf01-0000-41b7-9214-d30009251306',
  lesson7: 'eab2bf01-0000-41b7-9215-d30009251407',
} as const

const theFaithfulWitnessLessonShellSection = (
  sectionId: string,
  lessonId: string,
  extra?: Parameters<typeof foundationLessonShellSection>[3],
) =>
  foundationLessonShellSection(lessonId, sectionId, THE_FAITHFUL_WITNESS_OVERVIEW_HREF, {
    placeholderText: FOUNDATION_SHELL_PLACEHOLDER_LEGACY,
    ...extra,
  })

const lessonTheFaithfulWitness1: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000932',
  slug: 'guardians-of-the-law',
  studySeriesId: SERIES_ID_THE_FAITHFUL_WITNESS,
  title: 'Guardians of the Law',
  summary:
    'The remnant is identified as a people who keep, guard, and preserve the commandments of God in a world that has attacked His law.',
  durationMinutes: 9,
  scripture: 'Revelation 12:17 · Revelation 14:12 · 2 Thessalonians 2:7-8 · John 14:15 · Romans 13:10',
  sortOrder: 1,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonTheFaithfulWitness2: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000933',
  slug: 'law-and-gospel-together',
  studySeriesId: SERIES_ID_THE_FAITHFUL_WITNESS,
  title: 'Law and Gospel Together',
  summary:
    'God\'s end-time people hold together the harmony of grace and obedience, showing that love fulfills the law.',
  durationMinutes: 9,
  scripture: 'Revelation 14:12 · Romans 3:31 · Ephesians 2:8-10 · Galatians 5:6 · 1 John 5:3',
  sortOrder: 2,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonTheFaithfulWitness3: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000934',
  slug: 'the-testimony-of-jesus',
  studySeriesId: SERIES_ID_THE_FAITHFUL_WITNESS,
  title: 'The Testimony of Jesus',
  summary:
    'The remnant bears witness to Jesus as the true revelation of the Father\'s character and love.',
  durationMinutes: 9,
  scripture: 'Revelation 12:17 · John 1:18 · John 14:9 · John 16:27 · Revelation 3:14',
  sortOrder: 3,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonTheFaithfulWitness4: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000935',
  slug: 'the-spirit-of-prophecy',
  studySeriesId: SERIES_ID_THE_FAITHFUL_WITNESS,
  title: 'The Spirit of Prophecy',
  summary:
    'Revelation identifies the testimony of Jesus as the Spirit of prophecy, showing God\'s continued guidance through inspired witness.',
  durationMinutes: 9,
  scripture: 'Revelation 19:10 · 2 Peter 1:21 · Numbers 12:6 · Joel 2:28-29 · 1 Thessalonians 5:19-21',
  sortOrder: 4,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonTheFaithfulWitness5: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000936',
  slug: 'christ-at-the-center',
  studySeriesId: SERIES_ID_THE_FAITHFUL_WITNESS,
  title: 'Christ at the Center',
  summary:
    'Every truth entrusted to God\'s people must be centered in Christ and His self-sacrificing love.',
  durationMinutes: 9,
  scripture: 'John 5:39 · 1 Corinthians 2:2 · 2 Corinthians 4:6 · Colossians 1:15-20 · Hebrews 1:1-3',
  sortOrder: 5,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonTheFaithfulWitness6: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000937',
  slug: 'obedience-without-force',
  studySeriesId: SERIES_ID_THE_FAITHFUL_WITNESS,
  title: 'Obedience Without Force',
  summary:
    'The remnant reveals the harmony of faith, love, and obedience as the natural fruit of God\'s saving grace.',
  durationMinutes: 9,
  scripture: 'John 14:15 · 1 John 4:19 · Romans 13:10 · Philippians 2:13 · Hebrews 8:10',
  sortOrder: 6,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonTheFaithfulWitness7: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000938',
  slug: 'truth-with-humility',
  studySeriesId: SERIES_ID_THE_FAITHFUL_WITNESS,
  title: 'Truth With Humility',
  summary:
    'God calls His people to hold remnant truth without arrogance, speaking the truth in love and pointing the world to Jesus.',
  durationMinutes: 9,
  scripture: 'Ephesians 4:15 · 1 Corinthians 8:1 · 1 Peter 3:15 · Revelation 14:6-12 · Matthew 24:14',
  sortOrder: 7,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const theFaithfulWitnessLongDescription = `The Faithful Witness explores the biblical identity and mission of God's remnant people.

Building on Revelation 12, this study looks more deeply at the two identifying marks of the remnant: they keep the commandments of God and have the testimony of Jesus Christ. Students will see how the remnant preserves God's law without legalism, points to Jesus as the true revelation of the Father, and holds together the gospel and obedience, faith and works, love and truth.

This study also introduces the testimony of Jesus as the Spirit of prophecy and shows how God restores truth in the final phase of history to reveal His character to the world. The remnant is not presented as an elite group, but as a mission-driven people called to guard truth, reflect Jesus, and speak with humility, kindness, and love.`

const seriesTheFaithfulWitness: StudySeries = {
  id: SERIES_ID_THE_FAITHFUL_WITNESS,
  slug: THE_FAITHFUL_WITNESS_STUDY_SLUG,
  studyPathId: 'b1000001-0000-4000-8000-000000000001',
  title: 'The Faithful Witness',
  subtitle: 'The remnant identity and mission of God\'s people in the final message to the world.',
  shortDescription:
    'God\'s end-time people preserve His commandments, point to Jesus, and witness to His character with humility and love.',
  longDescription: theFaithfulWitnessLongDescription,
  description: theFaithfulWitnessLongDescription,
  level: 'Beginner',
  durationSummary: 'Approx. 60–75 min total',
  lessonsCount: 7,
  featured: false,
  collectionLabel: 'Foundational Studies',
  sortOrder: 20,
  foundationOrder: 19,
  whatYouWillLearn: [
    'Themes: remnant, Revelation 12, Revelation 14, commandments of God, testimony of Jesus, faith of Jesus, law and gospel, Spirit of prophecy, mission, truth, love, obedience.',
    'See how the remnant keeps God\'s commandments and holds the testimony of Jesus without legalism or arrogance.',
    'Understand the harmony of grace and obedience, gospel and law, faith and love.',
    'Carry remnant truth with humility, clarity, and Christ-centered mission to the world.',
  ],
  lessons: [
    lessonTheFaithfulWitness1,
    lessonTheFaithfulWitness2,
    lessonTheFaithfulWitness3,
    lessonTheFaithfulWitness4,
    lessonTheFaithfulWitness5,
    lessonTheFaithfulWitness6,
    lessonTheFaithfulWitness7,
  ],
}

const THE_DAY_OF_ATONEMENT_STUDY_SLUG = 'the-day-of-atonement'
const THE_DAY_OF_ATONEMENT_OVERVIEW_HREF = `/study-library/${THE_DAY_OF_ATONEMENT_STUDY_SLUG}`
const SERIES_ID_THE_DAY_OF_ATONEMENT = 'e4000001-0000-4000-8000-000000000083'

const THE_DAY_OF_ATONEMENT_SECTION_IDS = {
  lesson1: 'eab2bf01-0000-41b7-9216-d30009251508',
  lesson2: 'eab2bf01-0000-41b7-9217-d30009251609',
  lesson3: 'eab2bf01-0000-41b7-9218-d30009251710',
  lesson4: 'eab2bf01-0000-41b7-9219-d30009251811',
  lesson5: 'eab2bf01-0000-41b7-921a-d30009251912',
  lesson6: 'eab2bf01-0000-41b7-921b-d30009252013',
  lesson7: 'eab2bf01-0000-41b7-921c-d30009252114',
} as const

const theDayOfAtonementLessonShellSection = (
  sectionId: string,
  lessonId: string,
  extra?: Parameters<typeof foundationLessonShellSection>[3],
) =>
  foundationLessonShellSection(lessonId, sectionId, THE_DAY_OF_ATONEMENT_OVERVIEW_HREF, {
    placeholderText: PLACEHOLDER_BODY,
    ...extra,
  })

const lessonTheDayOfAtonement1: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000939',
  slug: 'sealed-and-opened',
  studySeriesId: SERIES_ID_THE_DAY_OF_ATONEMENT,
  title: 'Sealed and Opened',
  summary:
    'Daniel\'s sealed prophecy is opened in Revelation 10, showing that God would bring understanding to the 2300-day prophecy in the end-time period.',
  durationMinutes: 12,
  scripture: 'Daniel 8:14 · Daniel 8:26 · Daniel 12:4-10 · Revelation 10:1-11',
  sortOrder: 1,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonTheDayOfAtonement2: Lesson = {
  id: 'd3000007-0000-4000-8000-00000000093a',
  slug: 'the-2300-days',
  studySeriesId: SERIES_ID_THE_DAY_OF_ATONEMENT,
  title: 'The 2300 Days',
  summary:
    'The 2300-day prophecy points from the command to restore Jerusalem to the beginning of the final phase of Christ\'s heavenly ministry.',
  durationMinutes: 12,
  scripture: 'Daniel 8:14 · Daniel 9:24-27 · Ezra 7:11-12 · Ezekiel 4:6 · Numbers 14:34',
  sortOrder: 2,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonTheDayOfAtonement3: Lesson = {
  id: 'd3000007-0000-4000-8000-00000000093b',
  slug: 'sweet-in-the-mouth-bitter-in-the-belly',
  studySeriesId: SERIES_ID_THE_DAY_OF_ATONEMENT,
  title: 'Sweet in the Mouth, Bitter in the Belly',
  summary:
    'Revelation 10 foretells the bittersweet experience of believers who expected Christ\'s return but later discovered a deeper sanctuary truth.',
  durationMinutes: 12,
  scripture: 'Revelation 10:8-11 · Habakkuk 2:2-3 · Hebrews 10:35-39',
  sortOrder: 3,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonTheDayOfAtonement4: Lesson = {
  id: 'd3000007-0000-4000-8000-00000000093c',
  slug: 'the-heavenly-sanctuary',
  studySeriesId: SERIES_ID_THE_DAY_OF_ATONEMENT,
  title: 'The Heavenly Sanctuary',
  summary:
    'The earthly sanctuary was a symbolic outline of the plan of salvation and pointed to the true sanctuary in heaven where Jesus ministers.',
  durationMinutes: 12,
  scripture: 'Hebrews 8:1-5 · Psalm 102:19 · Exodus 25:8-9 · Hebrews 9:11-12',
  sortOrder: 4,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonTheDayOfAtonement5: Lesson = {
  id: 'd3000007-0000-4000-8000-00000000093d',
  slug: 'jesus-our-high-priest',
  studySeriesId: SERIES_ID_THE_DAY_OF_ATONEMENT,
  title: 'Jesus Our High Priest',
  summary:
    'Jesus ministers for humanity as our sympathetic High Priest, Mediator, and source of mercy, grace, cleansing, and confidence before God.',
  durationMinutes: 12,
  scripture: 'Hebrews 4:14-16 · Hebrews 7:25-28 · Hebrews 9:12-14 · 1 Timothy 2:5 · 1 John 2:1',
  sortOrder: 5,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonTheDayOfAtonement6: Lesson = {
  id: 'd3000007-0000-4000-8000-00000000093e',
  slug: 'the-final-cleansing',
  studySeriesId: SERIES_ID_THE_DAY_OF_ATONEMENT,
  title: 'The Final Cleansing',
  summary:
    'The Day of Atonement points to God\'s final work of cleansing, judgment, and full resolution of the sin problem through Christ.',
  durationMinutes: 12,
  scripture: 'Leviticus 16:29-34 · Daniel 8:14 · Hebrews 9:23-28 · 1 John 1:9 · Revelation 14:6-7',
  sortOrder: 6,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const lessonTheDayOfAtonement7: Lesson = {
  id: 'd3000007-0000-4000-8000-00000000093f',
  slug: 'boldness-in-the-judgment',
  studySeriesId: SERIES_ID_THE_DAY_OF_ATONEMENT,
  title: 'Boldness in the Judgment',
  summary:
    'Because Jesus is our High Priest and Mediator, believers can face the judgment with confidence, assurance, and love.',
  durationMinutes: 12,
  scripture: '1 John 4:16-18 · Hebrews 6:18-20 · Hebrews 10:19-23 · Romans 8:31-34',
  sortOrder: 7,
  progressState: 'not_started',
  sections: [],
  contentPending: false,
}

const theDayOfAtonementLongDescription = `The Day of Atonement explores Daniel 8:14, Revelation 10, and the sanctuary message as a Christ-centered explanation of what Jesus is doing now as our heavenly High Priest.

This study explains the sealed and opened prophecies of Daniel, the 2300-day prophecy, the bittersweet experience of the early Advent believers, and the discovery that the sanctuary to be cleansed was not the earth, but the heavenly sanctuary where Jesus ministers for humanity. Students will learn how the ancient sanctuary pointed forward to the life, death, resurrection, mediation, and final priestly work of Christ.

The study presents the Day of Atonement not as fear-based judgment, but as the final phase of God's plan to resolve the sin problem through Jesus. It emphasizes assurance, cleansing, mediation, confidence before God, and the beauty of Christ's ongoing ministry.`

const seriesTheDayOfAtonement: StudySeries = {
  id: SERIES_ID_THE_DAY_OF_ATONEMENT,
  slug: THE_DAY_OF_ATONEMENT_STUDY_SLUG,
  studyPathId: 'b1000001-0000-4000-8000-000000000001',
  title: 'The Day of Atonement',
  subtitle: 'Jesus as our heavenly High Priest in the final phase of redemption history.',
  shortDescription:
    'Jesus is our heavenly High Priest, ministering for us in the final phase of redemption history and bringing full resolution to the sin problem.',
  longDescription: theDayOfAtonementLongDescription,
  description: theDayOfAtonementLongDescription,
  level: 'Beginner',
  durationSummary: 'Approx. 70–85 min total',
  lessonsCount: 7,
  featured: false,
  collectionLabel: 'Foundational Studies',
  sortOrder: 21,
  foundationOrder: 20,
  whatYouWillLearn: [
    'Themes: Day of Atonement, sanctuary, Daniel 8:14, Revelation 10, 2300 days, Jesus our High Priest, judgment, atonement, heavenly sanctuary, mediation, cleansing of the sanctuary.',
    'Understand how Daniel\'s sealed prophecy was opened and how the 2300-day prophecy points to Christ\'s heavenly ministry.',
    'See the earthly sanctuary as a model of salvation and Jesus as Mediator, Advocate, and source of assurance.',
    'Face the judgment with confidence in Christ, not fear-based religion.',
  ],
  lessons: [
    lessonTheDayOfAtonement1,
    lessonTheDayOfAtonement2,
    lessonTheDayOfAtonement3,
    lessonTheDayOfAtonement4,
    lessonTheDayOfAtonement5,
    lessonTheDayOfAtonement6,
    lessonTheDayOfAtonement7,
  ],
}

const seriesBuriedAndRaised: StudySeries = {
  id: 'e4000001-0000-4000-8000-00000000007e',
  slug: BURIED_AND_RAISED_STUDY_SLUG,
  studyPathId: 'b1000001-0000-4000-8000-000000000001',
  title: 'Buried and Raised',
  subtitle: 'Baptism as a loving response to salvation and union with Christ in death, burial, and resurrection.',
  shortDescription:
    'Understand baptism as a public sign of death to sin and new life in Christ.',
  longDescription: buriedAndRaisedLongDescription,
  description: buriedAndRaisedLongDescription,
  level: 'Beginner',
  durationSummary: 'Approx. 55–70 min total',
  lessonsCount: 7,
  featured: false,
  collectionLabel: 'Foundational Studies',
  sortOrder: 16,
  foundationOrder: 15,
  whatYouWillLearn: [
    'Themes: baptism, immersion, born again, repentance, Holy Spirit, new life, Jesus, resurrection, discipleship, surrender, identity, transformation.',
    'See how God draws people into new life through love, not coercion.',
    'Understand baptism by immersion as union with Christ in death, burial, and resurrection.',
    'Follow Scripture from new birth to public commitment and growing discipleship with Jesus.',
  ],
  lessons: [
    lessonBuriedAndRaised1,
    lessonBuriedAndRaised2,
    lessonBuriedAndRaised3,
    lessonBuriedAndRaised4,
    lessonBuriedAndRaised5,
    lessonBuriedAndRaised6,
    lessonBuriedAndRaised7,
  ],
}

const seriesDesignedToThrive: StudySeries = {
  id: 'e4000001-0000-4000-8000-00000000007d',
  slug: DESIGNED_TO_THRIVE_STUDY_SLUG,
  studyPathId: 'b1000001-0000-4000-8000-000000000001',
  title: 'Designed to Thrive',
  subtitle: 'Health, wisdom, and wholeness as part of God\'s loving design for life.',
  shortDescription:
    'Discover how God\'s design touches the whole life, including body, mind, and spirit.',
  longDescription: designedToThriveLongDescription,
  description: designedToThriveLongDescription,
  level: 'Beginner',
  durationSummary: 'Approx. 55–70 min total',
  lessonsCount: 7,
  featured: false,
  collectionLabel: 'Foundational Studies',
  sortOrder: 15,
  foundationOrder: 14,
  whatYouWillLearn: [
    'Themes: health, wholeness, body, mind, wisdom, choices, healing, lifestyle, diet, temperance, stewardship, Jesus, abundant life.',
    'See how choices have consequences and how biblical wisdom guides whole-life well-being.',
    'Understand salvation as restoration and stewardship of body, mind, heart, and spirit.',
    'Follow Scripture from God\'s design for life to Jesus as healer and hope.',
  ],
  lessons: [
    lessonDesignedToThrive1,
    lessonDesignedToThrive2,
    lessonDesignedToThrive3,
    lessonDesignedToThrive4,
    lessonDesignedToThrive5,
    lessonDesignedToThrive6,
    lessonDesignedToThrive7,
  ],
}

const theLifeThatGivesLongDescription = `The Life That Gives explores the biblical principle of generosity as a reflection of God's own heart.

God is the Great Giver. Every good gift comes from Him, and the greatest gift is Jesus Christ. In response to His grace, believers are invited into a life of giving, stewardship, tithe, offerings, service, and practical love.

This study shows that Christian giving is not about religious pressure or self-righteous performance. It is a grace-shaped response to the God who gave first. Through tithes, offerings, generosity, and service, believers participate in God's circle of blessing for the advancement of the gospel and the relief of human need.`

const seriesTheLifeThatGives: StudySeries = {
  id: 'e4000001-0000-4000-8000-00000000007c',
  slug: THE_LIFE_THAT_GIVES_STUDY_SLUG,
  studyPathId: 'b1000001-0000-4000-8000-000000000001',
  title: 'The Life That Gives',
  subtitle: 'Generosity as a grace-shaped response to the God who gives first.',
  shortDescription:
    'Learn how stewardship, service, and generosity flow from God\'s love.',
  longDescription: theLifeThatGivesLongDescription,
  description: theLifeThatGivesLongDescription,
  level: 'Beginner',
  durationSummary: 'Approx. 55–70 min total',
  lessonsCount: 7,
  featured: false,
  collectionLabel: 'Foundational Studies',
  sortOrder: 14,
  foundationOrder: 13,
  whatYouWillLearn: [
    'Themes: giving, generosity, stewardship, tithe, offerings, love, grace, money, faith, kingdom, service, gratitude, mission.',
    'See that all true generosity begins with God, the Great Giver.',
    'Understand stewardship, tithe, offerings, and practical love as responses to grace.',
    'Follow Scripture from God\'s giving heart to generosity that blesses others and glorifies God.',
  ],
  lessons: [
    lessonLifeThatGives1,
    lessonLifeThatGives2,
    lessonLifeThatGives3,
    lessonLifeThatGives4,
    lessonLifeThatGives5,
    lessonLifeThatGives6,
    lessonLifeThatGives7,
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
    'Study what Scripture teaches about death, sleep, resurrection, and hope.',
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
    'See how Scripture explains the origin of evil and the conflict behind human history.',
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
  seriesWhenDeathDied,
  seriesMadeNewInChrist,
  seriesTheLawOfLove,
  seriesTheRestGodGives,
  seriesTheLifeThatGives,
  seriesDesignedToThrive,
  seriesBuriedAndRaised,
  seriesBuiltToBelong,
  seriesPowerUnderLove,
  seriesFaithfulInTheWilderness,
  seriesTheFaithfulWitness,
  seriesTheDayOfAtonement,
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
