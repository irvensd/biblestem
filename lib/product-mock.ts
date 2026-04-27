/**
 * Mock catalog fallback when Supabase is empty or unavailable.
 * Series: “The Bible — God’s Living Word” (Foundations), “The Three Angels' Messages” (Prophecy).
 */

import type {
  Highlight,
  Lesson,
  LessonWordLink,
  Note,
  StudyPath,
  StudySeries,
  UserLessonProgress,
  UserSeriesProgress,
  WordStudy,
} from '@/lib/types/product'

const demoUserId = '00000000-0000-4000-8000-000000000001'

export const studyPaths: StudyPath[] = [
  {
    id: 'b1000001-0000-4000-8000-000000000001',
    slug: 'foundations',
    name: 'Foundations',
    description: 'Core doctrines, first principles, and clarity for new readers.',
    sortOrder: 1,
  },
  {
    id: 'b1000001-0000-4000-8000-000000000002',
    slug: 'prophecy',
    name: 'Prophecy',
    description: 'Last-day themes in Scripture, read with care and hope.',
    sortOrder: 2,
  },
  {
    id: 'b1000001-0000-4000-8000-000000000003',
    slug: 'theology',
    name: 'Theology',
    description: 'Doctrine rooted in Scripture, with clarity and humility.',
    sortOrder: 3,
  },
  {
    id: 'b1000001-0000-4000-8000-000000000004',
    slug: 'life-application',
    name: 'Life Application',
    description: 'Wisdom for daily choices, habits, and relationships.',
    sortOrder: 4,
  },
  {
    id: 'b1000001-0000-4000-8000-000000000005',
    slug: 'state-of-the-dead',
    name: 'State of the Dead',
    description: 'What Scripture teaches about death, the soul, resurrection, and eternal life in Christ.',
    sortOrder: 5,
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

const lessonBible1: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000001',
  slug: 'a-book-unlike-any-other',
  studySeriesId: 'e4000001-0000-4000-8000-000000000010',
  title: 'A Book Unlike Any Other',
  summary: 'Awakening wonder: one book, many voices, one message.',
  durationMinutes: 8,
  scripture: 'John 1:1 · Luke 24:27',
  sortOrder: 1,
  progressState: 'not_started',
  sections: [],
}

const lessonBible2: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000002',
  slug: 'how-the-bible-came-to-us',
  studySeriesId: 'e4000001-0000-4000-8000-000000000010',
  title: 'How the Bible Came to Us',
  summary: 'How did this book reach us? A gentle path into authors, manuscripts, and trust.',
  durationMinutes: 8,
  scripture: '2 Timothy 3:16',
  sortOrder: 2,
  progressState: 'not_started',
  sections: [],
}

const lessonBible3: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000003',
  slug: 'can-the-bible-be-trusted',
  studySeriesId: 'e4000001-0000-4000-8000-000000000010',
  title: 'Can the Bible Be Trusted?',
  summary: 'Why confidence in Scripture is grounded in history, preservation, and truth.',
  durationMinutes: 8,
  scripture: 'Isaiah 40:8 · Psalm 119:160 · Matthew 5:18',
  sortOrder: 3,
  progressState: 'not_started',
  sections: [],
}

const lessonBible4: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000004',
  slug: 'how-to-read-the-bible',
  studySeriesId: 'e4000001-0000-4000-8000-000000000010',
  title: 'How to Read the Bible',
  summary: 'A practical, Scripture-first rhythm to read with clarity, patience, and attention.',
  durationMinutes: 8,
  scripture: 'Psalm 119:105 · James 1:5 · 2 Timothy 2:15',
  sortOrder: 4,
  progressState: 'not_started',
  sections: [],
}

const lessonBible5: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000005',
  slug: 'the-bibles-central-theme',
  studySeriesId: 'e4000001-0000-4000-8000-000000000010',
  title: 'The Bible’s Central Theme',
  summary: 'One unified story centered on Christ, from beginning to fulfillment.',
  durationMinutes: 8,
  scripture: 'Luke 24:27 · John 5:39',
  sortOrder: 5,
  progressState: 'not_started',
  sections: [],
}

const lessonBible6: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000006',
  slug: 'the-bible-as-a-living-word',
  studySeriesId: 'e4000001-0000-4000-8000-000000000010',
  title: 'The Bible as a Living Word',
  summary: 'Scripture not just as information, but as living truth that transforms from within.',
  durationMinutes: 8,
  scripture: 'Hebrews 4:12 · John 6:63 · Isaiah 55:11',
  sortOrder: 6,
  progressState: 'not_started',
  sections: [],
}

const lessonBible7: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000007',
  slug: 'your-response',
  studySeriesId: 'e4000001-0000-4000-8000-000000000010',
  title: 'Your Response',
  summary: 'Move from understanding to response by acting on what God has made clear.',
  durationMinutes: 8,
  scripture: 'James 1:22 · Joshua 1:8 · Luke 11:28',
  sortOrder: 7,
  progressState: 'not_started',
  sections: [],
}

const seriesBibleLivingWord: StudySeries = {
  id: 'e4000001-0000-4000-8000-000000000010',
  slug: 'bible-gods-living-word',
  studyPathId: 'b1000001-0000-4000-8000-000000000001',
  title: 'The Bible — God’s Living Word',
  subtitle: 'One story, many voices, grounded in Christ.',
  shortDescription:
    'Discover Scripture as one unified story across time—written by many, yet pointing in one direction: toward God, and toward Christ.',
  description:
    'Discover Scripture as one unified story across time—written by many, yet pointing in one direction: toward God, and toward Christ.',
  level: 'Beginner',
  durationSummary: '56 min total',
  lessonsCount: 7,
  featured: true,
  collectionLabel: 'Foundational Studies',
  sortOrder: 0,
  whatYouWillLearn: [
    'See how the Bible holds together as one narrative across many authors and centuries.',
    'Understand how Scripture was formed and why it can be read with confidence.',
    'Practice a simple, sustainable rhythm for reading with context and humility.',
    'Recognize Christ as the center of the Bible’s storyline from beginning to fulfillment.',
    'Move from insight to obedience as the Spirit applies the Word to everyday life.',
  ],
  lessons: [lessonBible1, lessonBible2, lessonBible3, lessonBible4, lessonBible5, lessonBible6, lessonBible7],
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
  durationMinutes: 10,
  scripture: 'Genesis 35:18 · Genesis 2:7',
  sortOrder: 2,
  progressState: 'not_started',
  sections: [],
}
const lessonDeathHope3: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000503',
  slug: 'a-thief-and-a-witch',
  studySeriesId: 'e4000001-0000-4000-8000-000000000050',
  title: 'A Thief and a Witch',
  summary:
    'Study the thief on the cross and the witch of Endor without assuming conscious life after death.',
  durationMinutes: 10,
  scripture: 'Luke 23:42–43 · 1 Samuel 28',
  sortOrder: 3,
  progressState: 'not_started',
  sections: [],
}
const lessonDeathHope4: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000504',
  slug: 'absent-from-the-body',
  studySeriesId: 'e4000001-0000-4000-8000-000000000050',
  title: 'Absent from the Body',
  summary: 'Examine Paul’s words in 2 Corinthians 5 and what it means to be present with the Lord.',
  durationMinutes: 10,
  scripture: '2 Corinthians 5:6–8 · Philippians 3:20–21',
  sortOrder: 4,
  progressState: 'not_started',
  sections: [],
}
const lessonDeathHope5: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000505',
  slug: 'pauls-desire-to-depart',
  studySeriesId: 'e4000001-0000-4000-8000-000000000050',
  title: 'Paul’s Desire to Depart',
  summary: 'Study Philippians 1 and Paul’s hope in resurrection, not natural immortality.',
  durationMinutes: 10,
  scripture: 'Philippians 1:21–24',
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
    'Understand Revelation 6 through biblical symbolism, sacrifice, martyrdom, and justice.',
  durationMinutes: 10,
  scripture: 'Revelation 6:9–11 · Genesis 4:10',
  sortOrder: 6,
  progressState: 'not_started',
  sections: [],
}
const lessonDeathHope7: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000507',
  slug: 'the-spirits-of-just-men',
  studySeriesId: 'e4000001-0000-4000-8000-000000000050',
  title: 'The Spirits of Just Men',
  summary: 'Explore Hebrews 12 and what it means for the faithful to be made perfect.',
  durationMinutes: 10,
  scripture: 'Hebrews 12:22–24 · Hebrews 11:39–40',
  sortOrder: 7,
  progressState: 'not_started',
  sections: [],
}
const lessonDeathHope8: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000508',
  slug: 'preaching-to-the-spirits-in-prison',
  studySeriesId: 'e4000001-0000-4000-8000-000000000050',
  title: 'Preaching to the Spirits in Prison',
  summary: 'Study 1 Peter 3 and identify who the spirits in prison are.',
  durationMinutes: 10,
  scripture: '1 Peter 3:18–22 · Genesis 6',
  sortOrder: 8,
  progressState: 'not_started',
  sections: [],
}
const lessonDeathHope9: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000509',
  slug: 'three-doctrines-that-belong-together',
  studySeriesId: 'e4000001-0000-4000-8000-000000000050',
  title: 'Three Doctrines That Belong Together',
  summary: 'See how the judgment, the state of the dead, and the second coming fit together.',
  durationMinutes: 10,
  scripture: 'Ecclesiastes 9:5 · John 5:28–29 · 1 Thessalonians 4:16–17',
  sortOrder: 9,
  progressState: 'not_started',
  sections: [],
}
const lessonDeathHope10: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000510',
  slug: 'the-dead-who-stand-before-god',
  studySeriesId: 'e4000001-0000-4000-8000-000000000050',
  title: 'The Dead Who Stand Before God',
  summary: 'Understand Revelation 20 and the judgment of the dead.',
  durationMinutes: 10,
  scripture: 'Revelation 20:11–15 · John 5:28–29',
  sortOrder: 10,
  progressState: 'not_started',
  sections: [],
}
const lessonDeathHope11: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000511',
  slug: 'the-resurrection-and-the-life',
  studySeriesId: 'e4000001-0000-4000-8000-000000000050',
  title: 'The Resurrection and the Life',
  summary: 'Study John 11 and the hope Jesus gave at the tomb of Lazarus.',
  durationMinutes: 10,
  scripture: 'John 11:25–26 · John 11:43–44',
  sortOrder: 11,
  progressState: 'not_started',
  sections: [],
}
const lessonDeathHope12: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000512',
  slug: 'the-keys-of-hades',
  studySeriesId: 'e4000001-0000-4000-8000-000000000050',
  title: 'The Keys of Hades',
  summary: 'Learn the meaning of Sheol and Hades and why they refer to the grave, not eternal torment.',
  durationMinutes: 10,
  scripture: 'Revelation 1:18 · Psalm 16:10',
  sortOrder: 12,
  progressState: 'not_started',
  sections: [],
}
const lessonDeathHope13: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000513',
  slug: 'the-rich-man-and-lazarus',
  studySeriesId: 'e4000001-0000-4000-8000-000000000050',
  title: 'The Rich Man and Lazarus',
  summary: 'Study the parable of the rich man and Lazarus in context.',
  durationMinutes: 10,
  scripture: 'Luke 16:19–31',
  sortOrder: 13,
  progressState: 'not_started',
  sections: [],
}
const lessonDeathHope14: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000514',
  slug: 'all-live-to-him',
  studySeriesId: 'e4000001-0000-4000-8000-000000000050',
  title: 'All Live to Him',
  summary: 'Understand Luke 20 and how God speaks of the faithful in light of resurrection.',
  durationMinutes: 10,
  scripture: 'Luke 20:37–38 · Exodus 3:6',
  sortOrder: 14,
  progressState: 'not_started',
  sections: [],
}
const lessonDeathHope15: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000515',
  slug: 'the-worm-and-the-fire',
  studySeriesId: 'e4000001-0000-4000-8000-000000000050',
  title: 'The Worm and the Fire',
  summary: 'Study biblical language about unquenchable fire, undying worm, and final destruction.',
  durationMinutes: 10,
  scripture: 'Mark 9:43–48 · Isaiah 66:24',
  sortOrder: 15,
  progressState: 'not_started',
  sections: [],
}
const lessonDeathHope16: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000516',
  slug: 'immortality-or-resurrection',
  studySeriesId: 'e4000001-0000-4000-8000-000000000050',
  title: 'Immortality or Resurrection?',
  summary: 'Contrast the biblical hope of resurrection with the idea of natural immortality.',
  durationMinutes: 10,
  scripture: '1 Corinthians 15:51–54 · 1 Timothy 6:15–16',
  sortOrder: 16,
  progressState: 'not_started',
  sections: [],
}
const lessonDeathHope17: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000517',
  slug: 'the-first-lie',
  studySeriesId: 'e4000001-0000-4000-8000-000000000050',
  title: 'The First Lie',
  summary: 'Trace the first deception in Eden and how it shapes false views of death.',
  durationMinutes: 10,
  scripture: 'Genesis 3:1–4 · Genesis 2:17',
  sortOrder: 17,
  progressState: 'not_started',
  sections: [],
}
const lessonDeathHope18: Lesson = {
  id: 'd3000007-0000-4000-8000-000000000518',
  slug: 'spirits-of-devils',
  studySeriesId: 'e4000001-0000-4000-8000-000000000050',
  title: 'Spirits of Devils',
  summary: 'Study spiritualism, deception, and why Scripture must be our final authority.',
  durationMinutes: 10,
  scripture: 'Revelation 16:13–14 · Isaiah 8:20',
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
  studyPathId: 'b1000001-0000-4000-8000-000000000004',
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
  collectionLabel: 'Growth Studies',
  sortOrder: 2,
  whatYouWillLearn: [
    'Name the difference between quiet trust and spiritual performance.',
    'Apply a few Proverbs-shaped habits in family conversation.',
    'Let generosity grow from gratitude rather than guilt.',
    'Keep application small, repeatable, and grounded in prayer.',
  ],
  lessons: [lessonFaith1, lessonFaith2, lessonFaith3],
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
  seriesBibleLivingWord,
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
    studySeriesId: seriesBibleLivingWord.id,
    startedAt: '2025-03-01T12:00:00.000Z',
    completedAt: null,
    lastLessonSlug: lessonBible1.slug,
    percentComplete: 38,
  },
]

export const mockUserLessonProgress: UserLessonProgress[] = [
  {
    id: 'h7000001-0000-4000-8000-000000000001',
    userId: demoUserId,
    lessonId: lessonBible1.id,
    state: 'in_progress',
    updatedAt: '2025-03-21T10:00:00.000Z',
  },
]

export const mockNotes: Note[] = [
  {
    id: 'n8000001-0000-4000-8000-000000000001',
    userId: demoUserId,
    lessonId: lessonBible1.id,
    verseReference: 'John 1:1',
    body: 'One story, many voices—come back to this when the chapter feels crowded.',
    updatedAt: '2025-03-21T15:00:00.000Z',
  },
]

export const mockHighlights: Highlight[] = [
  {
    id: 'i9000001-0000-4000-8000-000000000001',
    userId: demoUserId,
    lessonId: lessonBible1.id,
    verseReference: 'John 1:1',
    body: 'In the beginning was the Word, and the Word was with God, and the Word was God.',
    updatedAt: '2025-03-20T08:00:00.000Z',
  },
]

export { demoUserId }
