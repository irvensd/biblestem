-- Add Lessons 4-6 to "Where Bible Came From" Study
-- Run this SQL in your Supabase SQL Editor

-- First, update the study metadata (total duration and description)
UPDATE public.studies SET
  total_duration = 42,
  description = 'A foundational 6-part study exploring why the Bible matters, how its books were recognized, how God inspired its authors, how it was preserved through manuscripts, and how translations bring it to all nations.',
  updated_at = NOW()
WHERE id = 'where-bible-came-from';

-- Insert Lesson 4: Manuscripts & Transmission
INSERT INTO public.lessons (
  id,
  study_id,
  title,
  duration,
  scripture,
  description,
  lesson_order,
  content,
  created_at,
  updated_at
) VALUES (
  'wcbcf-lesson4',
  'where-bible-came-from',
  'Manuscripts & Transmission: How We Received the Texts',
  8,
  'Psalm 119:89',
  'How the Bible was faithfully copied and preserved through generations.',
  4,
  '{
    "scriptureText": "For ever, O Lord, thy word is settled in heaven.",
    "teachingPoints": [
      {
        "narrative": "The original writings (autographs) of Scripture were inspired; later scribes meticulously copied them, counting letters and words to avoid mistakes. Thousands of ancient manuscripts, including the Dead Sea Scrolls, confirm the Bible''s accuracy over centuries. God''s providence preserved the message despite persecution, wars, and attempts to destroy it (Matthew 5:18). The process wasn''t luck—it was divine protection. From Moses'' scrolls to modern translations, God has guided faithful scribes to ensure His truth endures unchanged.",
        "scriptures": [
          {
            "verse": "Psalm 119:89",
            "text": "For ever, O Lord, thy word is settled in heaven."
          },
          {
            "verse": "Matthew 5:18",
            "text": "For verily I say unto you, Till heaven and earth pass, one jot or one tittle shall in no wise pass from the law, till all be fulfilled."
          }
        ],
        "examples": [
          "Scribes counted letters and words to prevent copying errors",
          "The Dead Sea Scrolls confirm biblical accuracy over centuries",
          "God''s Word survived despite persecution and attempts to destroy it"
        ],
        "rhetoricalQuestions": [
          "How does knowing the Bible''s careful transmission strengthen your confidence in Scripture?",
          "What does the preservation of God''s Word tell us about His faithfulness?"
        ]
      }
    ],
    "lifeApplication": {
      "challenge": "Research the history of one biblical manuscript (like the Dead Sea Scrolls or Codex Sinaiticus). Reflect on how God used human hands to protect His Word.",
      "journaling": "Write how this deeper understanding impacts your trust in the Bible."
    },
    "prayerPrompt": "Lord, thank You for preserving Your Word through generations. Help me cherish every page as a testimony of Your faithfulness."
  }'::jsonb,
  NOW(),
  NOW()
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  scripture = EXCLUDED.scripture,
  description = EXCLUDED.description,
  content = EXCLUDED.content,
  updated_at = NOW();

-- Insert Lesson 5: Preservation
INSERT INTO public.lessons (
  id,
  study_id,
  title,
  duration,
  scripture,
  description,
  lesson_order,
  content,
  created_at,
  updated_at
) VALUES (
  'wcbcf-lesson5',
  'where-bible-came-from',
  'Preservation: God''s Protection of His Word',
  8,
  'Psalm 12:6-7',
  'How God ensured His Word remained pure and available through time.',
  5,
  '{
    "scriptureText": "The words of the Lord are pure words: as silver tried in a furnace of earth, purified seven times. Thou shalt keep them, O Lord, thou shalt preserve them from this generation for ever.",
    "teachingPoints": [
      {
        "narrative": "God promised to preserve His Word, and history confirms His faithfulness. Empires have tried to destroy Scripture, but it endures. The words of the Lord are pure—refined like silver, tested seven times. What God speaks, He preserves. The Bible''s survival through persecution, wars, and cultural shifts is not coincidence—it''s divine protection. God keeps His Word from generation to generation, ensuring that what He revealed remains available to all who seek Him.",
        "scriptures": [
          {
            "verse": "Psalm 12:6-7",
            "text": "The words of the Lord are pure words: as silver tried in a furnace of earth, purified seven times. Thou shalt keep them, O Lord, thou shalt preserve them from this generation for ever."
          },
          {
            "verse": "Isaiah 40:8",
            "text": "The grass withereth, the flower fadeth: but the word of our God shall stand for ever."
          }
        ],
        "examples": [
          "The Bible has survived countless attempts to destroy it throughout history",
          "God''s Word remains unchanged despite changing cultures and empires",
          "Scripture is preserved like refined silver, tested and pure"
        ],
        "rhetoricalQuestions": [
          "How does seeing the Bible''s preservation throughout history strengthen your faith?",
          "What does God''s commitment to preserving His Word tell you about His character?"
        ]
      }
    ],
    "lifeApplication": {
      "challenge": "Reflect on one historical period when the Bible faced persecution. Consider how God preserved it despite opposition.",
      "journaling": "How does knowing God preserves His Word change how you value Scripture?"
    },
    "prayerPrompt": "Father, thank You for Your faithfulness in preserving Your Word. Help me trust that what You have revealed will stand forever."
  }'::jsonb,
  NOW(),
  NOW()
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  scripture = EXCLUDED.scripture,
  description = EXCLUDED.description,
  content = EXCLUDED.content,
  updated_at = NOW();

-- Insert Lesson 6: Translations
INSERT INTO public.lessons (
  id,
  study_id,
  title,
  duration,
  scripture,
  description,
  lesson_order,
  content,
  created_at,
  updated_at
) VALUES (
  'wcbcf-lesson6',
  'where-bible-came-from',
  'Translations: Bringing God''s Word to All Nations',
  8,
  'Revelation 7:9',
  'How God''s Word has been translated to reach people in their own languages.',
  6,
  '{
    "scriptureText": "After this I beheld, and, lo, a great multitude, which no man could number, of all nations, and kindreds, and people, and tongues, stood before the throne.",
    "teachingPoints": [
      {
        "narrative": "God''s Word was given in Hebrew, Aramaic, and Greek, but His message is for all nations. From the earliest translations like the Septuagint (Greek Old Testament) to modern versions in thousands of languages, God ensures everyone can access His truth. Translation is not compromise—it''s the Great Commission in action. Faithful translators work carefully to preserve the meaning while making Scripture accessible. The goal is not word-for-word perfection, but meaning-for-meaning accuracy so that people can know God in their own language.",
        "scriptures": [
          {
            "verse": "Revelation 7:9",
            "text": "After this I beheld, and, lo, a great multitude, which no man could number, of all nations, and kindreds, and people, and tongues, stood before the throne."
          },
          {
            "verse": "Acts 2:8",
            "text": "And how hear we every man in our own tongue, wherein we were born?"
          }
        ],
        "examples": [
          "The Septuagint brought the Old Testament to Greek-speaking Jews",
          "Modern translations make Scripture accessible in thousands of languages",
          "Faithful translation preserves meaning while ensuring clarity"
        ],
        "rhetoricalQuestions": [
          "How does the availability of translations show God''s love for all people?",
          "What responsibility do we have to share God''s Word across languages?"
        ]
      }
    ],
    "lifeApplication": {
      "challenge": "Pray for Bible translators working to bring Scripture to unreached languages. Consider supporting translation work if able.",
      "journaling": "How has reading the Bible in your language impacted your faith?"
    },
    "prayerPrompt": "Lord, thank You for making Your Word available in my language. Use me to share it with others, that all nations might know Your truth."
  }'::jsonb,
  NOW(),
  NOW()
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  scripture = EXCLUDED.scripture,
  description = EXCLUDED.description,
  content = EXCLUDED.content,
  updated_at = NOW();

-- Verify the import
SELECT 'Lessons 4-6 added successfully!' as status;
SELECT COUNT(*) as total_lessons FROM public.lessons WHERE study_id = 'where-bible-came-from';
SELECT total_duration, description FROM public.studies WHERE id = 'where-bible-came-from';
