/** Data shape for prophecy-study timelines (e.g. Daniel 9). */
export type ProphecyTimelineItem = {
  dateLabel: string
  title: string
  description?: string
  scriptureReference: string
  /** Visually distinguishes a focal event (e.g. crucifixion). */
  highlight?: boolean
}
