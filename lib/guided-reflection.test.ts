import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { describe, it } from 'node:test'
import {
  approvedGuidedPrompts,
  emptyGuidedResponses,
  guidedSectionAfterKey,
  guidedSectionPrompt,
  parseStoredReflection,
  reflectionHasText,
  reflectionNotePlainText,
  reflectionPersistMessage,
  serializeStoredReflection,
} from './guided-reflection'
import { buildLessonSteps } from './lesson-steps'
import type { LessonReaderContent } from './lesson-content'
import { USER_NOTES_UPSERT_CONFLICT } from './supabase/lesson-notes'

function sampleLesson(guidedReflection?: LessonReaderContent['guidedReflection']): LessonReaderContent {
  return {
    openingThought: 'Opening',
    scriptureRef: 'John 3:16',
    scriptureQuote: 'For God so loved the world.',
    teachingPoints: ['God loves.'],
    reflectPrompt: 'Think about the verse.',
    lifeApplication: 'Live this today.',
    prayer: 'Thank you.',
    wordStudyFullStep: false,
    guidedReflection,
  }
}

describe('guided reflection storage', () => {
  it('keeps an existing plain note as plain text', () => {
    const raw = 'I want to apply this'
    const parsed = parseStoredReflection(raw)
    assert.equal(parsed.note, raw)
    assert.deepEqual(parsed.guided, emptyGuidedResponses())
    assert.equal(serializeStoredReflection(parsed.note, parsed.guided), raw)
    assert.equal(reflectionNotePlainText(raw), raw)
  })

  it('round-trips guided answers in the same note string', () => {
    const stored = serializeStoredReflection('Free note', {
      observe: 'The verse names love.',
      interpret: '',
      apply: 'I can tell the truth gently.',
    })
    const parsed = parseStoredReflection(stored)
    assert.equal(parsed.note, 'Free note')
    assert.equal(parsed.guided.observe, 'The verse names love.')
    assert.equal(parsed.guided.interpret, '')
    assert.equal(parsed.guided.apply, 'I can tell the truth gently.')
    assert.match(reflectionNotePlainText(stored), /Free note/)
    assert.match(reflectionNotePlainText(stored), /Observe\nThe verse names love\./)
    assert.equal(reflectionNotePlainText(stored).includes('"biblestemReflection"'), false)
  })

  it('stores an empty reflection as an empty string', () => {
    assert.equal(serializeStoredReflection('', emptyGuidedResponses()), '')
    assert.equal(reflectionHasText('', emptyGuidedResponses()), false)
    assert.equal(reflectionHasText('  ', { observe: ' ', interpret: '', apply: '' }), false)
  })

  it('does not treat unrelated JSON as a guided note', () => {
    const raw = '{"note":"not ours"}'
    assert.equal(parseStoredReflection(raw).note, raw)
    assert.equal(reflectionNotePlainText(raw), raw)
  })

  it('does not invent passage prompts for an existing lesson', () => {
    const reflect = buildLessonSteps(sampleLesson()).find((step) => step.type === 'reflect_journal')
    assert.ok(reflect && reflect.type === 'reflect_journal')
    assert.equal('guidedPrompts' in reflect, false)

    const partial = buildLessonSteps(
      sampleLesson({ observe: 'Only one section', interpret: '', apply: '' }),
    ).find((step) => step.type === 'reflect_journal')
    assert.ok(partial && partial.type === 'reflect_journal')
    assert.equal('guidedPrompts' in partial, false)

    const approved = buildLessonSteps(
      sampleLesson({
        observe: 'What does John 3:16 explicitly say?',
        interpret: 'What does John 3:16 mean beside the verses around it?',
        apply: 'How should John 3:16 shape a decision this week?',
      }),
    ).find((step) => step.type === 'reflect_journal')
    assert.ok(approved && approved.type === 'reflect_journal')
    assert.equal(approved.guidedPrompts?.observe, 'What does John 3:16 explicitly say?')
  })

  it('uses passage prompts only when all three are present', () => {
    const approved = approvedGuidedPrompts({
      observe: 'What does John 3:16 explicitly say?',
      interpret: 'What does John 3:16 mean beside the verses around it?',
      apply: 'How should John 3:16 shape a decision this week?',
    })
    assert.equal(guidedSectionPrompt('observe', approved), 'What does John 3:16 explicitly say?')
    assert.equal(
      approvedGuidedPrompts({ observe: 'Only one prompt', interpret: '', apply: '' }),
      null,
    )
    assert.equal(
      guidedSectionPrompt('observe', null),
      'What does the biblical passage explicitly say?',
    )
  })

  it('moves between sections without wrapping past the ends', () => {
    assert.equal(guidedSectionAfterKey('observe', 'ArrowRight'), 'interpret')
    assert.equal(guidedSectionAfterKey('interpret', 'ArrowLeft'), 'observe')
    assert.equal(guidedSectionAfterKey('apply', 'ArrowRight'), 'apply')
    assert.equal(guidedSectionAfterKey('interpret', 'Home'), 'observe')
    assert.equal(guidedSectionAfterKey('observe', 'End'), 'apply')
    assert.equal(guidedSectionAfterKey('observe', 'Tab'), null)
  })

  it('does not report an account success when the save fails', () => {
    const failed = reflectionPersistMessage({ localSaved: true, signedIn: true, accountSaved: false })
    assert.equal(failed.reportedAccountSuccess, false)
    assert.match(failed.message, /did not update/)
    assert.equal(failed.message.includes('Saved to your account'), false)

    const localFailed = reflectionPersistMessage({ localSaved: false, signedIn: true, accountSaved: false })
    assert.equal(localFailed.persistedLocally, false)
    assert.equal(localFailed.reportedAccountSuccess, false)

    const account = reflectionPersistMessage({ localSaved: true, signedIn: true, accountSaved: true })
    assert.equal(account.reportedAccountSuccess, true)
    assert.equal(account.message, 'Saved to your account')
  })

  it('keeps notes private to the signed-in owner', () => {
    const sql = readFileSync(new URL('../supabase/migrations/005_user_notes.sql', import.meta.url), 'utf8')
    assert.match(sql, /auth\.uid\(\) = user_id/)
    assert.match(sql, /unique \(user_id, study_id, lesson_id, step_number\)/)
    assert.equal(USER_NOTES_UPSERT_CONFLICT, 'user_id,study_id,lesson_id,step_number')
    const client = readFileSync(new URL('./supabase/lesson-notes.ts', import.meta.url), 'utf8')
    assert.match(client, /\.eq\('user_id', userId\)/)
    assert.match(client, /onConflict: USER_NOTES_UPSERT_CONFLICT/)
  })
})
