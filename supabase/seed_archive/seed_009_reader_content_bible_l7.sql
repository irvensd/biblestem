-- Full guided reader JSON for lesson 7 (matches `LessonReaderContent` + `parseLessonReaderContent`).
-- Run after: migrations 001 + 003, and seeds that insert paths/series/lessons.
-- The app reads this from `public.lessons.reader_content` at runtime — repo TS is fallback only.

begin;

update public.lessons
set reader_content = $json$
{
  "openingThought": "You have taken time to read.\nTo think.\nTo reflect.\n\nYou have seen what the Bible is.\nWhere it came from.\nWhy it can be trusted.\nHow to read it.\nWho it reveals.\nAnd what it does.\n\nNow the question changes.\n\nIt is no longer\n\"What is the Bible?\"\n\nIt becomes:\n\n\"What will I do with it?\"\n\nBecause at some point, understanding is not enough.\n\nA response is required.",
  "scriptureRef": "James 1:22 (ESV)",
  "scriptureQuote": "But be doers of the word, and not hearers only, deceiving yourselves.",
  "scriptureSecondaryRef": "Joshua 1:8 (ESV)",
  "scriptureSecondaryQuote": "This Book of the Law shall not depart from your mouth, but you shall meditate on it day and night...",
  "scriptureAfterSecondary": "Luke 11:28 (ESV)\n\"Blessed rather are those who hear the word of God and keep it.\"\n\nThe Bible does not call for passive agreement.\n\nIt calls for response.\n\nNot just hearing,\n\nbut living.",
  "teachingPoints": [
    "Understanding Scripture is only the beginning.\nIts purpose is to guide your life.",
    "Growth happens when truth is acted on.\nEven small steps begin to shape your direction.",
    "Delay feels small, but it slowly weakens response.\nWhat is clear today should not be ignored.",
    "God does not force change.\nHe invites it, and the invitation is meant to be answered."
  ],
  "studyInsight": {
    "placement": "after_teaching",
    "body": "Throughout Scripture, people who encountered truth were brought to a decision.\n\nNot pressure.\n\nClarity.\n\nSome responded.\nSome hesitated.\nSome walked away.\n\nThe difference was not what they heard.\n\nIt was what they chose to do with it.\n\nTruth carries weight.\n\nAnd with it,\n\nresponsibility."
  },
  "reflectPrompt": "Take a moment and be honest.\n\nWhat has stood out to you most through these studies?\n\nNot everything.\n\nJust one thing.\n\nNow ask yourself:\n\nHave I responded to it?\n\nOr have I simply noticed it and moved on?\n\nWhat is one step you already know you should take,\n\nbut have not taken yet?",
  "lifeApplication": "Do not overcomplicate this.\n\nStart simple, but be clear.\n\nChoose one response.\n\nSet a consistent time to read.\nAct on something you have learned.\nReturn to a passage and apply it.\nSlow down and listen instead of rushing.\n\nWrite it down.\n\nMake it specific.\n\nThen follow through.\n\nReal change begins when you act on what you already know.",
  "prayer": "Lord,\n\nThank You for speaking through Your Word.\n\nNot just to inform me,\n\nbut to lead me.\n\nShow me clearly what my response should be.\n\nGive me the willingness not just to hear,\n\nbut to act.\n\nHelp me take what I have learned\n\nand live it out, one step at a time.\n\nAmen."
}
$json$::jsonb
where slug = 'your-response';

commit;
