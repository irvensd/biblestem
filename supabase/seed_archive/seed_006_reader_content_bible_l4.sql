-- Full guided reader JSON for lesson 4 (matches `LessonReaderContent` + `parseLessonReaderContent`).
-- Run after: migrations 001 + 003, and seeds that insert paths/series/lessons.
-- The app reads this from `public.lessons.reader_content` at runtime — repo TS is fallback only.

begin;

update public.lessons
set reader_content = $json$
{
  "openingThought": "Most people don't struggle because they don't have a Bible.\n\nThey struggle because they don't know how to read it.\n\nWhere do you start?\nWhat does it mean?\nWhat if you don't understand it?\n\nSo reading becomes inconsistent.\nOr it stops altogether.\n\nBut the Bible was never meant to feel distant or confusing.\n\nIt was given to be understood.\n\nNot all at once.\nNot perfectly.\n\nBut personally.",
  "scriptureRef": "Psalm 119:105 (ESV)",
  "scriptureQuote": "Your word is a lamp to my feet and a light to my path.",
  "scriptureSecondaryRef": "James 1:5 (ESV)",
  "scriptureSecondaryQuote": "If any of you lacks wisdom, let him ask God… and it will be given him.",
  "scriptureAfterSecondary": "2 Timothy 2:15 (ESV)\n\"Do your best to present yourself to God… rightly handling the word of truth.\"\n\nThe Bible is not meant to overwhelm you.\n\nIt is meant to guide you.\n\nStep by step.\n\nLike a lamp.\n\nNot lighting everything at once,\n\nbut giving enough light for what is in front of you.",
  "teachingPoints": [
    "Start with a posture, not just a plan.\nCome willing to listen, not just analyze.",
    "Let Scripture explain Scripture.\nThe Bible connects with itself. One passage often brings clarity to another.",
    "Look for what it reveals about God.\nEven when you do not understand everything, you can understand who He is.",
    "Do not rush the process.\nUnderstanding grows over time."
  ],
  "studyInsight": {
    "placement": "after_teaching",
    "body": "The Bible was written in real moments of history.\n\nDifferent people.\nDifferent settings.\nDifferent situations.\n\nSo context matters.\n\nWho is speaking?\nWho are they speaking to?\nWhat is happening?\n\nThese questions do not make Scripture harder.\n\nThey make it clearer.\n\nThe Bible is not random.\n\nIt is connected.\n\nWhen you read it patiently, that connection begins to unfold."
  },
  "reflectPrompt": "Be honest for a moment.\n\nWhen you read the Bible,\n\ndo you rush through it?\nDo you avoid the parts you do not understand?\nDo you expect instant clarity?\n\nOr are you willing to slow down\n\nand let it unfold?\n\nWhat might change if you approached Scripture\n\nless like a task\n\nand more like a conversation?",
  "lifeApplication": "Try this simple rhythm this week.\n\nChoose one short passage.\n\nBefore you read, pause.\n\nAsk:\n\n\"God, what are You showing me about Yourself?\"\n\nRead slowly.\n\nIf something stands out, stay there.\n\nThink about it.\nWrite it down if needed.\n\nLet it settle.\n\nYou do not need to read more.\n\nYou need to see more in what you read.",
  "prayer": "Lord,\n\nTeach me how to read Your Word.\n\nNot quickly, not carelessly,\n\nbut with attention.\n\nGive me understanding where I lack it,\n\nand patience where I rush.\n\nHelp me to hear You clearly,\n\nand to recognize Your voice in what I read.\n\nForm in me a desire not just to learn,\n\nbut to know You.\n\nAmen."
}
$json$::jsonb
where slug = 'how-to-read-the-bible';

commit;
