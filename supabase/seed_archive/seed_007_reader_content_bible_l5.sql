-- Full guided reader JSON for lesson 5 (matches `LessonReaderContent` + `parseLessonReaderContent`).
-- Run after: migrations 001 + 003, and seeds that insert paths/series/lessons.
-- The app reads this from `public.lessons.reader_content` at runtime — repo TS is fallback only.

begin;

update public.lessons
set reader_content = $json$
{
  "openingThought": "It is possible to read the Bible and still miss what it is about.\n\nYou can follow the stories.\nLearn the commands.\nUnderstand the history.\n\nAnd still feel like something is missing.\n\nBecause the Bible is not just a collection of ideas.\n\nIt is one unified story.\n\nAnd at the center of that story is a Person.\n\nIf you miss Him, you may understand parts of Scripture,\n\nbut not its meaning.",
  "scriptureRef": "Luke 24:27 (ESV)",
  "scriptureQuote": "And beginning with Moses and all the Prophets, he interpreted to them in all the Scriptures the things concerning himself.",
  "scriptureSecondaryRef": "John 5:39 (ESV)",
  "scriptureSecondaryQuote": "You search the Scriptures… and it is they that bear witness about me.",
  "scriptureAfterSecondary": "After His resurrection, Jesus did something important.\n\nHe walked through the Scriptures\n\nand showed that they were pointing to Him.\n\nNot just a few passages.\n\nNot isolated moments.\n\nBut a consistent direction.\n\nToward Christ.",
  "teachingPoints": [
    "The Bible tells one unfolding story.\nA story of God restoring what was broken.",
    "Jesus is not introduced halfway through.\nHe is present from the beginning, promised and revealed over time.",
    "Every part of Scripture finds meaning in Him.\nLaw, prophecy, sacrifice, and promise all point beyond themselves.",
    "Without Christ, the Bible can feel like separate pieces.\nWith Him, it becomes one clear message."
  ],
  "studyInsight": {
    "placement": "after_teaching",
    "body": "From the beginning, Scripture has been moving in one direction.\n\nA promise given.\nA problem revealed.\nA solution unfolding.\n\nWhat seems hidden early becomes clearer later.\n\nWhat is introduced in one place is fulfilled in another.\n\nDifferent books.\nDifferent writers.\n\nBut one message.\n\nGod revealing Himself and making a way to restore what was lost.\n\nWhen you read the Bible this way, it begins to connect.\n\nNot as separate parts,\n\nbut as one story moving toward fulfillment."
  },
  "reflectPrompt": "When you read the Bible,\n\nwhat are you actually looking for?\n\nRules?\nAnswers?\nUnderstanding?\n\nOr are you looking for Christ?\n\nBe honest.\n\nHave you been reading Scripture\n\nwithout expecting to find Him there?\n\nWhat might change if every passage became an invitation\n\nto know Him more clearly?",
  "lifeApplication": "The next time you read the Bible, try this.\n\nDo not just ask,\n\"What does this mean?\"\n\nAlso ask,\n\n\"How does this point me to Jesus?\"\n\nYou may not always see it right away.\n\nThat is okay.\n\nStay with the question.\n\nOver time, you will begin to notice something.\n\nThe Bible is not leading you in many directions.\n\nIt is leading you to one.",
  "prayer": "Lord,\n\nOpen my eyes to see what I have missed.\n\nNot just words on a page,\n\nbut the One those words reveal.\n\nTeach me to read Scripture in a way that leads me to You.\n\nLet me not settle for information\n\nwhen You are offering relationship.\n\nReveal Yourself to me more clearly,\n\nand draw me closer as I read.\n\nAmen."
}
$json$::jsonb
where slug = 'the-bibles-central-theme';

commit;
