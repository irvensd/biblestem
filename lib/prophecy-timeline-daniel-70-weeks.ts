import type { ProphecyTimelineItem } from '@/lib/prophecy-timeline-types'

/**
 * Timeline data for “The Messiah Timeline” (`the-messiah-timeline`), Daniel 9 / 70 weeks.
 * Embed via `lesson-content` (`prophecyTimeline` blocks) or import into synced reader JSON.
 */

export const PROMISE_KEEP_MESSIAH_TIMELINE_LESSON_SLUG = 'the-messiah-timeline' as const

export const PROMISE_KEEP_MESSIAH_TIMELINE_HEADING_LABEL = '490 Years / 70 Weeks'

export const PROMISE_KEEP_MESSIAH_TIMELINE_NOTES = [
  '70 weeks = 490 prophetic years',
  '7 + 62 weeks = 69 weeks = 483 prophetic years',
  '457 BC to 27 AD points to the appearing of Messiah the Prince',
  'The final week points to Christ confirming the covenant',
  'The middle of the final week points to the crucifixion',
  'The timeline centers on Jesus, not speculation',
]

export const PROPHECY_TIMELINE_ITEMS_DANIEL_70_WEEK: ProphecyTimelineItem[] = [
  {
    dateLabel: '457 BC',
    title: 'Command to Rebuild Jerusalem',
    description:
      'The decree to restore and rebuild Jerusalem becomes the starting point of the prophecy.',
    scriptureReference: 'Ezra 7:11 to 13 · Daniel 9:25',
  },
  {
    dateLabel: '27 AD',
    title: 'Jesus Baptized and Anointed',
    description: 'Jesus begins His public ministry as the Messiah, the Anointed One.',
    scriptureReference: 'Matthew 3:16 to 17 · Acts 10:38',
    highlight: true,
  },
  {
    dateLabel: '31 AD',
    title: 'Jesus Crucified',
    description:
      'The Messiah is cut off, not for Himself, confirming the covenant through His death.',
    scriptureReference: 'Daniel 9:26 to 27 · Matthew 27:46',
    highlight: true,
  },
  {
    dateLabel: '34 AD',
    title: 'Stephen Stoned',
    description:
      'The 70-week period reaches its close as Israel\'s leadership finalizes its rejection of the Messiah through the stoning of Stephen and the gospel expands more fully beyond Jerusalem.',
    scriptureReference: 'Acts 7:54 to 60 · Acts 8:1 to 4',
  },
]
