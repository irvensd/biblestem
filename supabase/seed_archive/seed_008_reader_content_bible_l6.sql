-- Full guided reader JSON for lesson 6 (matches `LessonReaderContent` + `parseLessonReaderContent`).
-- Run after: migrations 001 + 003, and seeds that insert paths/series/lessons.
-- The app reads this from `public.lessons.reader_content` at runtime — repo TS is fallback only.

begin;

update public.lessons
set reader_content = $json$
{
  "openingThought": "It is possible to read the Bible and remain unchanged.\n\nTo understand it.\nTo think about it.\nEven to agree with it.\n\nAnd still nothing shifts.\n\nBut the Bible was never meant to be only read.\n\nIt was meant to be received.\n\nBecause Scripture is not just information.\n\nIt is alive.\n\nAnd living things do not leave us the same.",
  "scriptureRef": "Hebrews 4:12 (ESV)",
  "scriptureQuote": "For the word of God is living and active, sharper than any two-edged sword...",
  "scriptureSecondaryRef": "John 6:63 (ESV)",
  "scriptureSecondaryQuote": "The words that I have spoken to you are spirit and life.",
  "scriptureAfterSecondary": "Isaiah 55:11 (ESV)\n\"My word... shall not return to me empty, but it shall accomplish that which I purpose.\"\n\nThe Bible does not describe itself as passive.\n\nIt speaks.\nIt works.\nIt accomplishes something.\n\nNot just around us,\n\nbut within us.",
  "teachingPoints": [
    "The Bible does more than inform.\nIt transforms.",
    "Change does not come from reading quickly, but from receiving deeply.\nThe difference is not exposure, it is openness.",
    "God works through His Word.\nIt is one of the ways He reaches us personally.",
    "Transformation is often quiet before it is visible.\nWhat begins within will shape how you live."
  ],
  "studyInsight": {
    "placement": "after_teaching",
    "body": "Jesus often described truth using things that grow.\n\nSeeds.\nLight.\nWater.\n\nSomething small, carrying life within it.\n\nWhen a seed is planted, nothing seems to happen at first.\n\nBut beneath the surface, something begins.\n\nNot forced.\nNot rushed.\n\nAlive.\n\nIn the same way, Scripture works in us.\n\nSlowly.\nQuietly.\nDeeply.\n\nIt does not only inform.\n\nIt changes."
  },
  "reflectPrompt": "When you read the Bible,\n\nwhat are you expecting?\n\nInsight?\nClarity?\nAnswers?\n\nOr change?\n\nBe honest.\n\nHave you been reading without expecting it to affect you?\n\nWhat would happen if you approached Scripture\n\nbelieving it could actually reshape your thoughts, your habits, your direction?",
  "lifeApplication": "This week, shift your approach.\n\nBefore you read, pause and ask:\n\n\"What in me needs to change?\"\n\nThen read a short passage.\n\nWhen something stands out, stay there.\n\nDo not move past it quickly.\n\nLet it challenge you.\nLet it correct you.\nLet it encourage you.\n\nThen choose one small response.\n\nA decision.\nA change in attitude.\nAn action.\n\nThe Word becomes alive in you\n\nwhen it is lived, not just read.",
  "prayer": "Lord,\n\nLet Your Word do more than pass through my mind.\n\nLet it reach deeper.\n\nWhere I need correction, show me.\nWhere I need change, lead me.\nWhere I resist, soften me.\n\nPlant Your truth in me,\n\nand bring forth something new in my life.\n\nAmen."
}
$json$::jsonb
where slug = 'the-bible-as-a-living-word';

commit;
