export type StudyLevel = 'Beginner' | 'Intermediate' | 'Advanced'

export interface Lesson {
  slug: string
  title: string
  summary: string
  duration: string
  state: 'Not started' | 'In progress' | 'Complete'
  scripture: string
}

export interface StudySeries {
  slug: string
  title: string
  description: string
  category: 'Foundations' | 'Theology' | 'Life Application' | 'Prophecy'
  collection: 'Foundational Studies' | 'Growth Studies' | 'Advanced Studies'
  lessonsCount: number
  duration: string
  level: StudyLevel
  featured?: boolean
  lessons: Lesson[]
}

export const categories = [
  { name: 'Foundations', description: 'Core doctrines and first principles.' },
  { name: 'Theology', description: 'Systematic study of God and Scripture.' },
  { name: 'Life Application', description: 'Biblical wisdom for everyday living.' },
  { name: 'Prophecy', description: 'Careful, contextual study of prophecy.' },
] as const

export const studies: StudySeries[] = [
  {
    slug: 'gospel-of-john',
    title: 'The Gospel of John',
    description: 'A structured walk through John with theological reflection and key word studies.',
    category: 'Foundations',
    collection: 'Foundational Studies',
    lessonsCount: 12,
    duration: '6 weeks',
    level: 'Beginner',
    featured: true,
    lessons: [
      { slug: 'word-made-flesh', title: 'The Word Made Flesh', summary: 'John 1 and the identity of Christ.', duration: '25 min', state: 'In progress', scripture: 'John 1:1-18' },
      { slug: 'new-birth', title: 'Born from Above', summary: 'Jesus and Nicodemus on new birth.', duration: '22 min', state: 'Not started', scripture: 'John 3:1-21' },
    ],
  },
  {
    slug: 'romans-foundations',
    title: 'Romans Foundations',
    description: 'Paul’s gospel framework with clear doctrine, context, and application.',
    category: 'Theology',
    collection: 'Growth Studies',
    lessonsCount: 10,
    duration: '5 weeks',
    level: 'Intermediate',
    featured: true,
    lessons: [
      { slug: 'righteousness-of-god', title: 'The Righteousness of God', summary: 'Why righteousness is revealed in the gospel.', duration: '28 min', state: 'Not started', scripture: 'Romans 1:16-17' },
      { slug: 'justified-by-faith', title: 'Justified by Faith', summary: 'Peace with God through Christ.', duration: '24 min', state: 'Not started', scripture: 'Romans 5:1-11' },
    ],
  },
  {
    slug: 'sermon-on-the-mount',
    title: 'Sermon on the Mount',
    description: 'Kingdom ethics, spiritual formation, and practical obedience.',
    category: 'Life Application',
    collection: 'Growth Studies',
    lessonsCount: 9,
    duration: '4 weeks',
    level: 'Intermediate',
    featured: true,
    lessons: [
      { slug: 'beatitudes', title: 'The Beatitudes', summary: 'The character of kingdom citizens.', duration: '26 min', state: 'Not started', scripture: 'Matthew 5:1-12' },
      { slug: 'seek-first', title: 'Seek First the Kingdom', summary: 'Trust and priorities in discipleship.', duration: '21 min', state: 'Not started', scripture: 'Matthew 6:25-34' },
    ],
  },
  {
    slug: 'daniel-and-hope',
    title: 'Daniel and Hope',
    description: 'Faithfulness in exile and confidence in God’s sovereign plan.',
    category: 'Prophecy',
    collection: 'Advanced Studies',
    lessonsCount: 8,
    duration: '4 weeks',
    level: 'Advanced',
    lessons: [
      { slug: 'faithful-in-babylon', title: 'Faithful in Babylon', summary: 'Conviction and witness in a hostile culture.', duration: '24 min', state: 'Not started', scripture: 'Daniel 1' },
      { slug: 'visions-and-kingdoms', title: 'Visions and Kingdoms', summary: 'Interpreting apocalyptic visions responsibly.', duration: '30 min', state: 'Not started', scripture: 'Daniel 7' },
    ],
  },
]

export function seriesCountForCategory(category: StudySeries['category']): number {
  return studies.filter((s) => s.category === category).length
}
