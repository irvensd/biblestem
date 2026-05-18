import { getLessonReaderContent } from '@/lib/lesson-content'
import { extractPrimaryScriptureThreadForCompletion } from '@/lib/lesson-scripture-threads'
import type { LessonScriptureThreadRecap } from '@/lib/scripture-thread-types'

/** Curated Misunderstood Passages — keep in sync with catalog lesson slugs under `studySlug`. */
export const MISUNDERSTOOD_PASSAGES_STUDY_SLUG = 'death-resurrection-hope-of-life' as const

export type MisunderstoodPassage = {
  id: string
  title: string
  reference: string
  commonView: string
  scripturePattern: string
  studySlug: string
  lessonSlug: string
  tags: string[]
  /** When the linked lesson includes a Scripture Thread. */
  scriptureThread?: LessonScriptureThreadRecap | null
}

export const MISUNDERSTOOD_PASSAGES: MisunderstoodPassage[] = [
  {
    id: 'a',
    title: 'The thief on the cross',
    reference: 'Luke 23:42 to 43',
    commonView: 'The thief went to paradise with Jesus that same day.',
    scripturePattern:
      'Jesus said after His resurrection that He had not yet ascended to the Father. Luke 23 must be read with John 20:17 and the resurrection hope.',
    studySlug: MISUNDERSTOOD_PASSAGES_STUDY_SLUG,
    lessonSlug: 'a-thief-and-a-witch',
    tags: ['death', 'paradise', 'resurrection', 'punctuation'],
  },
  {
    id: 'b',
    title: 'Absent from the body',
    reference: '2 Corinthians 5:8',
    commonView: 'Believers go consciously to heaven immediately at death.',
    scripturePattern:
      "Paul's hope centers on being clothed with immortality, resurrection, and Christ's return, not a disembodied state.",
    studySlug: MISUNDERSTOOD_PASSAGES_STUDY_SLUG,
    lessonSlug: 'absent-from-the-body',
    tags: ['death', 'soul', 'resurrection', 'Paul'],
  },
  {
    id: 'c',
    title: 'Souls under the altar',
    reference: 'Revelation 6:9 to 11',
    commonView: 'Dead martyrs are conscious in heaven speaking to God.',
    scripturePattern:
      'Revelation uses sanctuary symbolism. Like Abel’s blood crying from the ground, the martyrs’ blood symbolically calls for justice.',
    studySlug: MISUNDERSTOOD_PASSAGES_STUDY_SLUG,
    lessonSlug: 'the-souls-under-the-altar',
    tags: ['Revelation', 'martyrdom', 'soul', 'judgment'],
  },
  {
    id: 'd',
    title: 'The rich man and Lazarus',
    reference: 'Luke 16:19 to 31',
    commonView: 'Jesus gave a literal description of heaven and hell after death.',
    scripturePattern:
      'Jesus used a parable aimed at the Pharisees to show that those who reject Moses and the prophets will not be persuaded even by resurrection.',
    studySlug: MISUNDERSTOOD_PASSAGES_STUDY_SLUG,
    lessonSlug: 'the-rich-man-and-lazarus',
    tags: ['parable', 'hell', 'death', 'resurrection'],
  },
  {
    id: 'e',
    title: 'Spirits in prison',
    reference: '1 Peter 3:18 to 20',
    commonView: 'Jesus preached to conscious dead spirits after His crucifixion.',
    scripturePattern:
      'Peter connects the preaching to the days of Noah while the ark was being prepared. God warned that generation through the Spirit.',
    studySlug: MISUNDERSTOOD_PASSAGES_STUDY_SLUG,
    lessonSlug: 'preaching-to-the-spirits-in-prison',
    tags: ['Noah', 'spirits', 'death', 'judgment'],
  },
  {
    id: 'f',
    title: 'All live to Him',
    reference: 'Luke 20:37 to 38',
    commonView: 'Abraham, Isaac, and Jacob are consciously alive in heaven.',
    scripturePattern:
      'Jesus was answering Sadducees who denied resurrection. His point was that God’s covenant guarantees the dead will rise.',
    studySlug: MISUNDERSTOOD_PASSAGES_STUDY_SLUG,
    lessonSlug: 'all-live-to-him',
    tags: ['resurrection', 'covenant', 'Sadducees'],
  },
  {
    id: 'g',
    title: 'The worm and the fire',
    reference: 'Mark 9:43 to 48',
    commonView: 'The wicked suffer conscious torment forever.',
    scripturePattern:
      'Unquenchable fire cannot be stopped until it consumes. The Bible uses destruction, ashes, death, and perishing to describe final judgment.',
    studySlug: MISUNDERSTOOD_PASSAGES_STUDY_SLUG,
    lessonSlug: 'the-worm-and-the-fire',
    tags: ['hell', 'judgment', 'destruction', 'fire'],
  },
  {
    id: 'h',
    title: 'The first lie',
    reference: 'Genesis 3:4',
    commonView: 'Death is not really death.',
    scripturePattern:
      'God said sin brings death. The serpent’s first lie was “You will not surely die,” which still shapes false views of death.',
    studySlug: MISUNDERSTOOD_PASSAGES_STUDY_SLUG,
    lessonSlug: 'the-first-lie',
    tags: ['Eden', 'deception', 'death', 'spiritualism'],
  },
]

export function findMisunderstoodPassage(studySlug: string, lessonSlug: string): MisunderstoodPassage | undefined {
  return getMisunderstoodPassagesWithThreads().find(
    (p) => p.studySlug === studySlug && p.lessonSlug === lessonSlug,
  )
}

/** Attach Scripture Thread previews from real lesson reader content. */
export function getMisunderstoodPassagesWithThreads(): MisunderstoodPassage[] {
  return MISUNDERSTOOD_PASSAGES.map((p) => {
    try {
      const content = getLessonReaderContent(p.lessonSlug)
      const thread = extractPrimaryScriptureThreadForCompletion(content)
      return { ...p, scriptureThread: thread }
    } catch {
      return { ...p, scriptureThread: null }
    }
  })
}

export function buildMisunderstoodPassageCopyText(p: MisunderstoodPassage): string {
  return [
    'BibleStem Misunderstood Passage',
    p.title,
    `Reference: ${p.reference}`,
    `Common view: ${p.commonView}`,
    `Scripture pattern: ${p.scripturePattern}`,
  ].join('\n')
}
