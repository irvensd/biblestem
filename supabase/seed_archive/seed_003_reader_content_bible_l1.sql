-- Full guided reader JSON for lesson 1 (matches `LessonReaderContent` + `parseLessonReaderContent`).
-- Run after: migrations 001 + 003, and seeds that insert paths/series/lessons (e.g. seed_001, seed_002).
-- The app reads this from `public.lessons.reader_content` at runtime — repo TS is fallback only.

begin;

update public.lessons
set reader_content = $json$
{
  "openingThought": "The Bible is one of the most read books in the world.\n\nMany people own one.\nSome read it often.\nOthers have tried and stopped.\n\nBut very few pause to ask a simple question.\n\nWhat actually makes this book different?\n\nIt was written across centuries.\nBy different people.\nIn different places.\n\nAnd yet it speaks with a sense of unity.\n\nThat raises a real question.\n\nHow can one book, written by many authors, carry one consistent message?",
  "scriptureRef": "John 1:1 (ESV)",
  "scriptureQuote": "In the beginning was the Word, and the Word was with God, and the Word was God.",
  "scriptureAfterPrimary": "That word \"Word\" carries deeper meaning.\n\nIn the original Greek, it is the word logos.\n\nIt does not just mean speech or text.\n\nIt points to reason, meaning, and expression.\n\nSomething that communicates what is unseen.\n\nJohn is not simply saying words exist.\n\nHe is saying that from the beginning, God has made Himself known.\n\nAnd that expression is not just written.\n\nIt is personal.",
  "scriptureAfterPrimaryEmphasisPhrases": [
    "logos"
  ],
  "scriptureWordInsights": [
    {
      "surface": "Word",
      "lemma": "λόγος",
      "transliteration": "logos",
      "meaning": "Reason, meaning, and expression.",
      "strongs": "G3056",
      "note": "John uses logos to show God making Himself known in a personal way."
    }
  ],
  "teachingPoints": [
    "The Bible was written over a long period of time.\nYet its message remains connected from beginning to end.",
    "It includes different types of writing.\nHistory, poetry, prophecy, and personal letters.",
    "Even with different authors, the direction stays consistent.\nIt continues to point toward God and His work.",
    "This raises an important question.\nIs this just a collection of writings, or something more?"
  ],
  "studyInsight": {
    "placement": "after_teaching",
    "body": "Most books are written by one person with one perspective.\n\nThe Bible is different.\n\nIt was written by many people who lived in different times and places.\n\nThey did not all know each other.\n\nYet when their writings are brought together, they form a connected message.\n\nThis kind of unity is not common.\n\nIt invites a deeper look."
  },
  "reflectPrompt": "Think about your own experience.\n\nWhen you look at the Bible,\n\nwhat do you see?\n\nA book of rules?\nA historical record?\nSomething confusing?\n\nOr something worth understanding?\n\nWhat has shaped the way you see it?",
  "lifeApplication": "This week, take a simple step.\n\nChoose a short passage to read.\n\nDo not rush it.\n\nRead slowly.\n\nPay attention to what stands out.\n\nYou do not need to understand everything right away.\n\nJust begin.",
  "prayer": "Lord,\n\nThank You for giving us Your Word.\n\nHelp me approach it with an open mind.\n\nGive me a desire to understand it,\n\nand patience as I begin.\n\nTeach me as I read,\n\nand guide me into what is true.\n\nAmen."
}
$json$::jsonb
where slug = 'a-book-unlike-any-other';

commit;
