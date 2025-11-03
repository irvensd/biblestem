-- Add "Where Bible Came From" Study and Lessons
-- Run this SQL in your Supabase SQL Editor

-- First, insert the study metadata
INSERT INTO public.studies (
  id,
  title,
  description,
  category,
  total_duration,
  difficulty,
  tags,
  image,
  color,
  features,
  created_at,
  updated_at
) VALUES (
  'where-bible-came-from',
  'Where Bible Came From',
  'A foundational study exploring why the Bible matters, how its books were recognized, and how God inspired its authors to create His written Word.',
  'free',
  18,
  'beginner',
  ARRAY['Bible Study', 'Scripture', 'Canon', 'Inspiration', 'Foundational'],
  'bible-origin',
  'from-blue-500 to-indigo-600',
  ARRAY['Biblical foundations', 'Historical context', 'Reflection questions', 'Free content'],
  NOW(),
  NOW()
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  category = EXCLUDED.category,
  total_duration = EXCLUDED.total_duration,
  difficulty = EXCLUDED.difficulty,
  tags = EXCLUDED.tags,
  image = EXCLUDED.image,
  color = EXCLUDED.color,
  features = EXCLUDED.features,
  updated_at = NOW();

-- Insert Lesson 1: Why the Bible Matters
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
  'wcbcf-lesson1',
  'where-bible-came-from',
  'Why the Bible Matters',
  6,
  '2 Timothy 3:16-17',
  'Understanding why God gave us His Word and how it''s foundational for faith.',
  1,
  '{
    "scriptureText": "All Scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness:",
    "teachingPoints": [
      {
        "narrative": "God chose to give His Word in written form so that the message of salvation would be preserved beyond passing generations. The Bible equips believers for every good work (2 Timothy 3:17). It doesn''t just inform—it transforms. When we treat the Bible as optional or secondary, we weaken our ability to know God and do His will. The written Word stands as God''s enduring communication to humanity, more than just history, literature or moral maxims—it is His self-revelation.",
        "scriptures": [
          {
            "verse": "2 Timothy 3:16-17",
            "text": "All Scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness: That the man of God may be perfect, throughly furnished unto all good works."
          }
        ],
        "rhetoricalQuestions": [
          "In what way do I treat the Bible: as a casual read, or as God''s primary voice to me?",
          "How does viewing Scripture as God''s self-revelation change how I approach reading it?"
        ]
      }
    ],
    "lifeApplication": {
      "challenge": "Commit this week to opening your Bible with the expectancy that God is speaking.",
      "journaling": "Write down one moment this week when a Scripture felt alive and personal."
    },
    "prayerPrompt": "Lord, help me recognise that what''s in written page is Your voice to me now. Speak clearly, transform truly."
  }'::jsonb,
  NOW(),
  NOW()
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  scripture = EXCLUDED.scripture,
  description = EXCLUDED.description,
  content = EXCLUDED.content,
  updated_at = NOW();

-- Insert Lesson 2: Canon: How the Books Were Recognised
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
  'wcbcf-lesson2',
  'where-bible-came-from',
  'Canon: How the Books Were Recognised',
  6,
  'Luke 24:44',
  'Why these 66 books? Understanding how God-inspired writings were gathered.',
  2,
  '{
    "scriptureText": "And He said unto them, These are the words which I spake unto you, while I was yet with you, that all things must be fulfilled, which were written in the law of Moses, and in the prophets, and in the psalms, concerning me.",
    "teachingPoints": [
      {
        "narrative": "Jesus Himself affirmed the three-fold division of Old Testament Scripture (Law, Prophets, Psalms) before the formal church lists. The criteria for canonicity included apostolic authority, harmony with previous revelation and widespread acceptance. Recognising the canon doesn''t create Scripture—it recognises what was already inspired. The book has authority because God gave it, not the church made it. This is the set of books He authored through human hands, and the church simply recognized what God had already established.",
        "scriptures": [
          {
            "verse": "Luke 24:44",
            "text": "And He said unto them, These are the words which I spake unto you, while I was yet with you, that all things must be fulfilled, which were written in the law of Moses, and in the prophets, and in the psalms, concerning me."
          }
        ],
        "rhetoricalQuestions": [
          "Do I read Scripture with confidence because it is truly God''s Word, or do I treat it like any other religious book?",
          "How does understanding the canon help me trust the Bible more fully?"
        ]
      }
    ],
    "lifeApplication": {
      "challenge": "Choose one lesser-known book of the Bible this week and read it with the thought: this was selected by God''s Spirit for me.",
      "journaling": "How did this book speak differently when I read it as \"canonical\" rather than \"optional\"?"
    },
    "prayerPrompt": "Father, thank You for preserving Your Word and giving it to us as a complete, authoritative canon. Help me to read it with reverence and trust."
  }'::jsonb,
  NOW(),
  NOW()
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  scripture = EXCLUDED.scripture,
  description = EXCLUDED.description,
  content = EXCLUDED.content,
  updated_at = NOW();

-- Insert Lesson 3: Inspiration: How the Bible Became God''s Word
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
  'wcbcf-lesson3',
  'where-bible-came-from',
  'Inspiration: How the Bible Became God''s Word',
  6,
  '2 Peter 1:20-21',
  'God didn''t merely supervise the writers—He inspired them so their words became His.',
  3,
  '{
    "scriptureText": "Knowing this first, that no prophecy of the scripture is of any private interpretation. For the prophecy came not in old time by the will of man: but holy men of God spake as they were moved by the Holy Ghost.",
    "teachingPoints": [
      {
        "narrative": "Inspiration doesn''t mean divine dictation only; it means God guided human authors so their writings come from God''s mind via human words. Seventh-day Adventist understanding holds that Scripture is reliable, authoritative and beneficial, not just helpful. Because Scripture is God-breathed, reading it involves meeting the living God, not just gathering information. You''re holding divine breath—\"theopneustos\"—writings that bear His authority and life.",
        "scriptures": [
          {
            "verse": "2 Peter 1:20-21",
            "text": "Knowing this first, that no prophecy of the scripture is of any private interpretation. For the prophecy came not in old time by the will of man: but holy men of God spake as they were moved by the Holy Ghost."
          }
        ],
        "rhetoricalQuestions": [
          "When I open the Bible, do I expect to read human ideas, or to hear the voice of God?",
          "How does understanding inspiration change my approach to Bible study?"
        ]
      }
    ],
    "lifeApplication": {
      "challenge": "Before you read Scripture this week, pray: \"Holy Spirit, move me from just reading to being spoken to.\"",
      "journaling": "What difference did it make when I read expecting God to speak?"
    },
    "prayerPrompt": "Holy Spirit, open my heart and mind that I might receive these pages as Your breath. Show me that the words are not merely written—they are alive."
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
SELECT 'Study and lessons added successfully!' as status;
SELECT COUNT(*) as total_studies FROM public.studies WHERE id = 'where-bible-came-from';
SELECT COUNT(*) as total_lessons FROM public.lessons WHERE study_id = 'where-bible-came-from';
