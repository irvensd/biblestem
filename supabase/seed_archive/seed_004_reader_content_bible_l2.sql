-- Full guided reader JSON for lesson 2 (matches `LessonReaderContent` + `parseLessonReaderContent`).
-- Run after: migrations 001 + 003, and seeds that insert paths/series/lessons (e.g. seed_001, seed_002).
-- The app reads this from `public.lessons.reader_content` at runtime — repo TS is fallback only.

begin;

update public.lessons
set reader_content = $json$
{
  "openingThought": "When you hold a Bible in your hands, it's easy to assume it just appeared.\n\nA finished book.\nBound pages.\nComplete.\n\nBut that's not how it began.\n\nBefore it was printed\nbefore it was translated\nbefore it was even collected\n\nIt was written.\n\nAcross generations.\nThrough real people.\nIn real moments of history.\n\nSo the question is honest:\n\nWhere did these words actually come from?\n\nAre they simply human thoughts about God?\n\nOr something more?",
  "scriptureRef": "2 Timothy 3:16 (ESV)",
  "scriptureQuote": "All Scripture is breathed out by God and profitable for teaching, for reproof, for correction, and for training in righteousness.",
  "scriptureSecondaryRef": "2 Peter 1:21 (ESV)",
  "scriptureSecondaryQuote": "For no prophecy was ever produced by the will of man, but men spoke from God as they were carried along by the Holy Spirit.",
  "scriptureAfterPrimary": "That phrase matters:\n\n\"Breathed out by God.\"\n\nThe original word means something that comes directly from God Himself.\n\nNot invented.\nNot guessed.\n\nGiven.",
  "scriptureAfterPrimaryEmphasisPhrases": [
    "Breathed out by God."
  ],
  "scriptureAfterSecondary": "Notice the balance:\n\nMen spoke.\nBut they were guided.\n\nMoved.\nCarried.\n\nNot controlled like machines\nbut not left on their own either.\n\nGod was actively leading.",
  "teachingPoints": [
    "The Bible was written through real people.\nTheir language, their personality, their experience. God used all of it.",
    "This was not random inspiration or personal opinion.\nGod guided the message while working through human writers.",
    "Different voices, same direction.\nAcross time, the message stays aligned and consistent.",
    "Because of its source, Scripture carries authority.\nNot just helpful words, but reliable truth."
  ],
  "studyInsight": {
    "placement": "after_teaching",
    "body": "The Bible did not just survive history. It was preserved through it.\n\nToday, there are thousands of ancient copies of biblical manuscripts.\n\nNot just one version.\nNot just one source.\n\nMany.\n\nAnd when they are compared, the message stays consistent.\n\nEven discoveries like the Dead Sea Scrolls, written over 2,000 years ago, show that what we read today closely matches what was written long ago.\n\nThat matters.\n\nIt means the Bible has not been quietly changed over time.\n\nIt has been carefully passed down.\n\nPreserved.\n\nProtected."
  },
  "reflectPrompt": "If these words were not just written by people\nbut guided by God\n\nWhat does that mean for how you read them?\n\nDo you approach the Bible like any other book?\n\nOr with expectation?\n\nWhat would change if you truly believed\nGod is speaking through it?",
  "lifeApplication": "This week, shift your approach.\n\nBefore you read, pause.\n\nSlow down.\n\nInstead of rushing through a passage, read with intention.\n\nNot just to understand words\nbut to hear what is being said.\n\nAsk yourself:\n\n\"What is God showing me here?\"\n\nThen take your time.",
  "prayer": "Lord,\n\nThank You for not leaving us without direction.\n\nThank You for speaking through Your Word.\n\nHelp me trust what You have given\neven when I do not fully understand it yet.\n\nOpen my mind.\nSoften my heart.\n\nTeach me to read with attention\nand to receive what You are saying.\n\nAmen."
}
$json$::jsonb
where slug = 'how-the-bible-came-to-us';

commit;
