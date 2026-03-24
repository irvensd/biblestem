/**
 * Canonical mock catalog — mirrors future Supabase content + sample user data.
 * UI should read through `lib/product-queries.ts` helpers.
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
    slug: 'theology',
    name: 'Theology',
    description: 'Systematic themes—God, humanity, sin, and grace in Scripture.',
    sortOrder: 2,
  },
  {
    id: 'b1000001-0000-4000-8000-000000000003',
    slug: 'life-application',
    name: 'Life Application',
    description: 'Biblical wisdom for relationships, work, and everyday obedience.',
    sortOrder: 3,
  },
  {
    id: 'b1000001-0000-4000-8000-000000000004',
    slug: 'prophecy',
    name: 'Prophecy',
    description: 'Careful, contextual study of prophetic texts.',
    sortOrder: 4,
  },
]

function sec(
  id: string,
  lessonId: string,
  order: number,
  heading: string,
  body: string,
  sectionType: LessonSection['sectionType'],
): LessonSection {
  return { id, lessonId, sortOrder: order, heading, body, sectionType }
}

const wordStudies: WordStudy[] = [
  {
    id: 'c2000001-0000-4000-8000-000000000001',
    lemma: 'λόγος',
    transliteration: 'logos',
    strongs: 'G3056',
    gloss: 'Speech, message, divine expression—embodied in Christ.',
    language: 'greek',
  },
  {
    id: 'c2000001-0000-4000-8000-000000000002',
    lemma: 'δικαιοσύνη',
    transliteration: 'dikaiosynē',
    strongs: 'G1343',
    gloss: 'Righteousness, justice in biblical covenant context.',
    language: 'greek',
  },
]

const lessonJohn1: Lesson = {
  id: 'd3000001-0000-4000-8000-000000000001',
  slug: 'word-made-flesh',
  studySeriesId: 'e4000001-0000-4000-8000-000000000001',
  title: 'The Word Made Flesh',
  summary: 'John 1 and the identity of Christ.',
  durationMinutes: 25,
  scripture: 'John 1:1–18',
  sortOrder: 1,
  progressState: 'in_progress',
  sections: [
    sec(
      's4000001-0000-4000-8000-000000000001',
      'd3000001-0000-4000-8000-000000000001',
      1,
      'Opening observation',
      'John opens with a deliberate echo of Genesis: before time and matter, the Word already was—personal, with God, and truly God.',
      'teaching',
    ),
    sec(
      's4000001-0000-4000-8000-000000000002',
      'd3000001-0000-4000-8000-000000000001',
      2,
      'Word study',
      'The term λόγος (logos) connects God’s creative speech with the person who reveals the Father.',
      'word_study',
    ),
  ],
}

const lessonJohn2: Lesson = {
  id: 'd3000001-0000-4000-8000-000000000002',
  slug: 'new-birth',
  studySeriesId: 'e4000001-0000-4000-8000-000000000001',
  title: 'Born from Above',
  summary: 'Jesus and Nicodemus on new birth.',
  durationMinutes: 22,
  scripture: 'John 3:1–21',
  sortOrder: 2,
  progressState: 'not_started',
  sections: [
    sec(
      's4000001-0000-4000-8000-000000000003',
      'd3000001-0000-4000-8000-000000000002',
      1,
      'Conversation',
      'Nicodemus approaches by night; Jesus speaks of birth “from above”—spiritual renewal by the Spirit.',
      'teaching',
    ),
  ],
}

const lessonJohn3: Lesson = {
  id: 'd3000001-0000-4000-8000-000000000003',
  slug: 'living-water',
  studySeriesId: 'e4000001-0000-4000-8000-000000000001',
  title: 'Living Water',
  summary: 'The Samaritan woman and true worship.',
  durationMinutes: 24,
  scripture: 'John 4:1–42',
  sortOrder: 3,
  progressState: 'not_started',
  sections: [
    sec(
      's4000001-0000-4000-8000-000000000004',
      'd3000001-0000-4000-8000-000000000003',
      1,
      'Reading',
      'Jesus crosses social boundaries to offer living water—worship in spirit and truth.',
      'scripture',
    ),
  ],
}

const seriesJohn: StudySeries = {
  id: 'e4000001-0000-4000-8000-000000000001',
  slug: 'gospel-of-john',
  studyPathId: 'b1000001-0000-4000-8000-000000000001',
  title: 'The Gospel of John',
  description: 'A structured walk through John with theological reflection and key word studies.',
  level: 'Beginner',
  durationSummary: '6 weeks',
  lessonsCount: 3,
  featured: true,
  collectionLabel: 'Foundational Studies',
  sortOrder: 1,
  lessons: [lessonJohn1, lessonJohn2, lessonJohn3],
}

const lessonPs1: Lesson = {
  id: 'd3000002-0000-4000-8000-000000000001',
  slug: 'blessed-is-the-one',
  studySeriesId: 'e4000001-0000-4000-8000-000000000002',
  title: 'Blessed Is the One',
  summary: 'Psalm 1 and the two ways.',
  durationMinutes: 20,
  scripture: 'Psalm 1',
  sortOrder: 1,
  progressState: 'not_started',
  sections: [
    sec(
      's4000002-0000-4000-8000-000000000001',
      'd3000002-0000-4000-8000-000000000001',
      1,
      'Orientation',
      'Wisdom literature contrasts the righteous and the wicked—not pride, but posture toward God’s instruction.',
      'teaching',
    ),
  ],
}

const seriesPsalms: StudySeries = {
  id: 'e4000001-0000-4000-8000-000000000002',
  slug: 'psalms-wisdom',
  studyPathId: 'b1000001-0000-4000-8000-000000000001',
  title: 'Psalms: Wisdom & Worship',
  description: 'Prayer, praise, and lament in Israel’s songbook.',
  level: 'Beginner',
  durationSummary: '4 weeks',
  lessonsCount: 1,
  featured: false,
  collectionLabel: 'Foundational Studies',
  sortOrder: 2,
  lessons: [lessonPs1],
}

const lessonRom1: Lesson = {
  id: 'd3000003-0000-4000-8000-000000000001',
  slug: 'righteousness-of-god',
  studySeriesId: 'e4000001-0000-4000-8000-000000000003',
  title: 'The Righteousness of God',
  summary: 'Why righteousness is revealed in the gospel.',
  durationMinutes: 28,
  scripture: 'Romans 1:16–17',
  sortOrder: 1,
  progressState: 'not_started',
  sections: [
    sec(
      's4000003-0000-4000-8000-000000000001',
      'd3000003-0000-4000-8000-000000000001',
      1,
      'Gospel first',
      'Paul’s thesis: the gospel is God’s power for salvation—righteousness revealed from faith to faith.',
      'teaching',
    ),
  ],
}

const lessonRom2: Lesson = {
  id: 'd3000003-0000-4000-8000-000000000002',
  slug: 'justified-by-faith',
  studySeriesId: 'e4000001-0000-4000-8000-000000000003',
  title: 'Justified by Faith',
  summary: 'Peace with God through Christ.',
  durationMinutes: 24,
  scripture: 'Romans 5:1–11',
  sortOrder: 2,
  progressState: 'not_started',
  sections: [
    sec(
      's4000003-0000-4000-8000-000000000002',
      'd3000003-0000-4000-8000-000000000002',
      1,
      'Peace',
      'Justification brings peace with God and hope that does not disappoint.',
      'reflection',
    ),
  ],
}

const seriesRomans: StudySeries = {
  id: 'e4000001-0000-4000-8000-000000000003',
  slug: 'romans-foundations',
  studyPathId: 'b1000001-0000-4000-8000-000000000002',
  title: 'Romans Foundations',
  description: 'Paul’s gospel framework with clear doctrine, context, and application.',
  level: 'Intermediate',
  durationSummary: '5 weeks',
  lessonsCount: 2,
  featured: true,
  collectionLabel: 'Growth Studies',
  sortOrder: 1,
  lessons: [lessonRom1, lessonRom2],
}

const lessonActs1: Lesson = {
  id: 'd3000004-0000-4000-8000-000000000001',
  slug: 'witnesses-to-the-ends',
  studySeriesId: 'e4000001-0000-4000-8000-000000000004',
  title: 'Witnesses to the Ends of the Earth',
  summary: 'The Spirit’s mission through the early church.',
  durationMinutes: 26,
  scripture: 'Acts 1:6–11',
  sortOrder: 1,
  progressState: 'not_started',
  sections: [
    sec(
      's4000004-0000-4000-8000-000000000001',
      'd3000004-0000-4000-8000-000000000001',
      1,
      'Mission',
      'The church receives a global mandate—empowered by the Spirit, not by mere strategy.',
      'teaching',
    ),
  ],
}

const seriesActs: StudySeries = {
  id: 'e4000001-0000-4000-8000-000000000004',
  slug: 'acts-church-begins',
  studyPathId: 'b1000001-0000-4000-8000-000000000002',
  title: 'Acts: The Church Begins',
  description: 'The Spirit’s work from Jerusalem to the nations.',
  level: 'Intermediate',
  durationSummary: '5 weeks',
  lessonsCount: 1,
  featured: false,
  collectionLabel: 'Growth Studies',
  sortOrder: 2,
  lessons: [lessonActs1],
}

const lessonSm1: Lesson = {
  id: 'd3000005-0000-4000-8000-000000000001',
  slug: 'beatitudes',
  studySeriesId: 'e4000001-0000-4000-8000-000000000005',
  title: 'The Beatitudes',
  summary: 'The character of kingdom citizens.',
  durationMinutes: 26,
  scripture: 'Matthew 5:1–12',
  sortOrder: 1,
  progressState: 'not_started',
  sections: [
    sec(
      's4000005-0000-4000-8000-000000000001',
      'd3000005-0000-4000-8000-000000000001',
      1,
      'Kingdom posture',
      'Blessedness is tied to humility, mercy, and purity of heart—not self-made virtue.',
      'teaching',
    ),
  ],
}

const lessonSm2: Lesson = {
  id: 'd3000005-0000-4000-8000-000000000002',
  slug: 'seek-first',
  studySeriesId: 'e4000001-0000-4000-8000-000000000005',
  title: 'Seek First the Kingdom',
  summary: 'Trust and priorities in discipleship.',
  durationMinutes: 21,
  scripture: 'Matthew 6:25–34',
  sortOrder: 2,
  progressState: 'not_started',
  sections: [
    sec(
      's4000005-0000-4000-8000-000000000002',
      'd3000005-0000-4000-8000-000000000002',
      1,
      'Anxiety and trust',
      'Jesus invites disciples to seek the kingdom first—God knows what you need.',
      'reflection',
    ),
  ],
}

const seriesSermon: StudySeries = {
  id: 'e4000001-0000-4000-8000-000000000005',
  slug: 'sermon-on-the-mount',
  studyPathId: 'b1000001-0000-4000-8000-000000000003',
  title: 'Sermon on the Mount',
  description: 'Kingdom ethics, spiritual formation, and practical obedience.',
  level: 'Intermediate',
  durationSummary: '4 weeks',
  lessonsCount: 2,
  featured: true,
  collectionLabel: 'Growth Studies',
  sortOrder: 1,
  lessons: [lessonSm1, lessonSm2],
}

const lessonDn1: Lesson = {
  id: 'd3000006-0000-4000-8000-000000000001',
  slug: 'faithful-in-babylon',
  studySeriesId: 'e4000001-0000-4000-8000-000000000006',
  title: 'Faithful in Babylon',
  summary: 'Conviction and witness in a hostile culture.',
  durationMinutes: 24,
  scripture: 'Daniel 1',
  sortOrder: 1,
  progressState: 'not_started',
  sections: [
    sec(
      's4000006-0000-4000-8000-000000000001',
      'd3000006-0000-4000-8000-000000000001',
      1,
      'Resolve',
      'Daniel and his friends refuse defilement—exile becomes a classroom for faithfulness.',
      'teaching',
    ),
  ],
}

const lessonDn2: Lesson = {
  id: 'd3000006-0000-4000-8000-000000000002',
  slug: 'visions-and-kingdoms',
  studySeriesId: 'e4000001-0000-4000-8000-000000000006',
  title: 'Visions and Kingdoms',
  summary: 'Interpreting apocalyptic visions responsibly.',
  durationMinutes: 30,
  scripture: 'Daniel 7',
  sortOrder: 2,
  progressState: 'not_started',
  sections: [
    sec(
      's4000006-0000-4000-8000-000000000002',
      'd3000006-0000-4000-8000-000000000002',
      1,
      'Apocalyptic context',
      'Beasts and Ancient of Days—God’s rule over history.',
      'scripture',
    ),
  ],
}

const seriesDaniel: StudySeries = {
  id: 'e4000001-0000-4000-8000-000000000006',
  slug: 'daniel-and-hope',
  studyPathId: 'b1000001-0000-4000-8000-000000000004',
  title: 'Daniel and Hope',
  description: 'Faithfulness in exile and confidence in God’s sovereign plan.',
  level: 'Advanced',
  durationSummary: '4 weeks',
  lessonsCount: 2,
  featured: false,
  collectionLabel: 'Advanced Studies',
  sortOrder: 1,
  lessons: [lessonDn1, lessonDn2],
}

/** All series in one catalog (single source of truth for mock UI). */
export const studySeriesCatalog: StudySeries[] = [
  seriesJohn,
  seriesPsalms,
  seriesRomans,
  seriesActs,
  seriesSermon,
  seriesDaniel,
]

export const wordStudyCatalog: WordStudy[] = wordStudies

export const lessonWordLinkCatalog: LessonWordLink[] = [
  {
    id: 'f5000001-0000-4000-8000-000000000001',
    lessonId: lessonJohn1.id,
    wordStudyId: wordStudies[0].id,
    lessonSectionId: lessonJohn1.sections[1]?.id ?? null,
    sortOrder: 1,
  },
  {
    id: 'f5000001-0000-4000-8000-000000000002',
    lessonId: lessonRom1.id,
    wordStudyId: wordStudies[1].id,
    lessonSectionId: lessonRom1.sections[0]?.id ?? null,
    sortOrder: 1,
  },
]

export const mockUserSeriesProgress: UserSeriesProgress[] = [
  {
    id: 'g6000001-0000-4000-8000-000000000001',
    userId: demoUserId,
    studySeriesId: seriesJohn.id,
    startedAt: '2025-03-01T12:00:00.000Z',
    completedAt: null,
    lastLessonSlug: lessonJohn1.slug,
    percentComplete: 38,
  },
  {
    id: 'g6000001-0000-4000-8000-000000000002',
    userId: demoUserId,
    studySeriesId: seriesRomans.id,
    startedAt: '2025-02-10T12:00:00.000Z',
    completedAt: null,
    lastLessonSlug: null,
    percentComplete: 0,
  },
]

export const mockUserLessonProgress: UserLessonProgress[] = [
  {
    id: 'h7000001-0000-4000-8000-000000000001',
    userId: demoUserId,
    lessonId: lessonJohn1.id,
    state: 'in_progress',
    updatedAt: '2025-03-21T10:00:00.000Z',
  },
]

export const mockNotes: Note[] = [
  {
    id: 'n8000001-0000-4000-8000-000000000001',
    userId: demoUserId,
    lessonId: lessonJohn1.id,
    verseReference: 'John 1:14',
    body: 'Dwelling among us—presence, not abstraction. Need to revisit “glory” in context.',
    updatedAt: '2025-03-21T15:00:00.000Z',
  },
  {
    id: 'n8000001-0000-4000-8000-000000000002',
    userId: demoUserId,
    lessonId: lessonRom1.id,
    verseReference: 'Romans 1:16–17',
    body: 'Righteousness revealed from faith to faith—note for small group prep.',
    updatedAt: '2025-03-19T12:00:00.000Z',
  },
  {
    id: 'n8000001-0000-4000-8000-000000000003',
    userId: demoUserId,
    lessonId: lessonSm1.id,
    verseReference: 'Matthew 5:3',
    body: 'Poor in spirit as humility before God, not self-deprecation.',
    updatedAt: '2025-03-16T09:00:00.000Z',
  },
]

export const mockHighlights: Highlight[] = [
  {
    id: 'i9000001-0000-4000-8000-000000000001',
    userId: demoUserId,
    lessonId: lessonJohn1.id,
    verseReference: 'John 1:5',
    body: 'The light shines in the darkness, and the darkness has not overcome it.',
    updatedAt: '2025-03-20T08:00:00.000Z',
  },
]

export { demoUserId }
