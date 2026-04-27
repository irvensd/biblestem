-- Full guided reader JSON for lesson 3 (matches `LessonReaderContent` + `parseLessonReaderContent`).
-- Run after: migrations 001 + 003, and seeds that insert paths/series/lessons.
-- The app reads this from `public.lessons.reader_content` at runtime — repo TS is fallback only.

begin;

update public.lessons
set reader_content = $json$
{
  "openingThought": "We trust many things without thinking twice.\n\nA map.\nA memory.\nA message from someone we know.\n\nBut when it comes to the Bible, the question often changes.\n\nCan this really be trusted?\n\nNot just spiritually, but historically.\n\nAfter all, it was written long ago.\nCopied by hand.\nPassed down through generations.\n\nSo it is fair to ask:\n\nHas it changed?\nHas it been altered?\nOr has it truly been preserved?",
  "scriptureRef": "Isaiah 40:8 (ESV)",
  "scriptureQuote": "The grass withers, the flower fades, but the word of our God will stand forever.",
  "scriptureSecondaryRef": "Psalm 119:160 (ESV)",
  "scriptureSecondaryQuote": "The sum of your word is truth, and every one of your righteous rules endures forever.",
  "scriptureAfterSecondary": "Jesus Himself spoke with confidence about Scripture:\n\nMatthew 5:18 (ESV)\n\"Until heaven and earth pass away, not an iota, not a dot, will pass from the Law until all is accomplished.\"\n\nScripture does not present itself as fragile.\n\nIt presents itself as enduring.\n\nNot temporary.\nBut lasting.",
  "teachingPoints": [
    "The Bible was not preserved by accident.\nIt was copied with care, often by trained scribes who treated the text as sacred.",
    "Today, we have thousands of ancient manuscripts of the Bible.\nFar more than any other ancient work.",
    "When these manuscripts are compared, they show strong consistency.\nNot confusion, but alignment.",
    "This does not remove every question.\nBut it builds real confidence that what we read reflects what was written."
  ],
  "studyInsight": {
    "placement": "after_teaching",
    "body": "In 1947, a discovery was made in caves near the Dead Sea.\n\nAncient scrolls were found, some over 2,000 years old.\n\nAmong them was a copy of the book of Isaiah.\n\nWhen it was compared with later manuscripts, something stood out.\n\nThe message had not changed.\n\nAcross centuries of copying, the text remained remarkably consistent.\n\nNot perfect in every small detail of handwriting.\n\nBut faithful in meaning.\n\nThe same message.\nThe same truth.\nPreserved through time."
  },
  "reflectPrompt": "If the Bible has been preserved this carefully,\n\nthen the question becomes more personal.\n\nNot just\nHas it changed?\n\nBut\nAm I willing to trust what it says?\n\nBe honest with yourself.\n\nDo you approach Scripture with confidence,\nor with quiet hesitation?\n\nWhat would change if you truly believed\nthese words have been preserved for you?",
  "lifeApplication": "This week, take a different approach.\n\nInstead of reading casually,\nread with intention.\n\nChoose one passage.\n\nRead it slowly.\n\nSit with it.\n\nAnd ask yourself:\n\nIf this has been faithfully preserved,\nwhat is it asking of me?\n\nDo not rush past the question.",
  "prayer": "Lord,\n\nYou have preserved Your Word through time.\n\nThrough generations, through history, through human hands,\nYou have kept Your message.\n\nHelp me not to stand at a distance in doubt,\n\nbut to come closer with trust.\n\nGive me confidence in what You have spoken,\n\nand a heart willing to receive it.\n\nAmen."
}
$json$::jsonb
where slug = 'can-the-bible-be-trusted';

commit;
