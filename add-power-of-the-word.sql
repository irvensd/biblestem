-- Add "The Power of the Word" Study and Lessons
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
  'power-of-the-word',
  'The Power of the Word',
  'A transformative 6-part study exploring how God''s Word creates faith, renews minds, pierces hearts, sustains life, guides obedience, and transforms believers into channels of His truth.',
  'free',
  42,
  'beginner',
  ARRAY['Bible Study', 'Scripture', 'Faith', 'Transformation', 'Discipleship', 'Spiritual Growth'],
  'power-word',
  'from-orange-500 to-red-600',
  ARRAY['Faith building', 'Mind renewal', 'Practical application', 'Free content'],
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

-- Insert Lesson 1: Faith Comes by Hearing
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
  'power-word-lesson1',
  'power-of-the-word',
  'Faith Comes by Hearing',
  6,
  'Romans 10:17',
  'The journey from hearing to believing to living.',
  1,
  '{
    "scriptureText": "So then faith cometh by hearing, and hearing by the word of God.",
    "teachingPoints": [
      {
        "narrative": "Hearing the Word is more than ears catching words—it''s the Spirit illuminating truth in our hearts. The Word calls us into a relationship; hearing is the first step toward trust and response. In SDA theology the idea that faith comes from hearing emphasises open Bible-study, proclamation and personal encounter. Faith begins when we hear that voice and recognise it as God''s voice speaking to us personally.",
        "scriptures": [
          {
            "verse": "Romans 10:17",
            "text": "So then faith cometh by hearing, and hearing by the word of God."
          },
          {
            "verse": "John 10:27",
            "text": "My sheep hear my voice, and I know them, and they follow me."
          }
        ],
        "rhetoricalQuestions": [
          "When was the last time I heard Scripture and felt something change inside me?",
          "How does recognizing God''s voice in Scripture differ from just reading words?"
        ]
      }
    ],
    "lifeApplication": {
      "challenge": "This week, choose one short verse to read aloud each day and ask: what voice is speaking to me through this?",
      "journaling": "What did I hear differently when I read the verse aloud?"
    },
    "prayerPrompt": "Lord, open my ears to hear Your Word—not just with my ears, but with my heart. Let me move from listening to faith."
  }'::jsonb,
  NOW(),
  NOW()
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  scripture = EXCLUDED.scripture,
  description = EXCLUDED.description,
  content = EXCLUDED.content,
  updated_at = NOW();

-- Insert Lesson 2: The Word That Changes Minds
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
  'power-word-lesson2',
  'power-of-the-word',
  'The Word That Changes Minds',
  6,
  'Romans 12:1-2',
  'Not just information—but transformation through renewing of the mind.',
  2,
  '{
    "scriptureText": "And be not conformed to this world: but be ye transformed by the renewing of your mind, that ye may prove what is that good, and acceptable, and perfect, will of God.",
    "teachingPoints": [
      {
        "narrative": "Transformation is internal—not merely following rules—but the mind''s renewal by the Word. The Word aligns our thinking with God''s thinking: truth replaces lies, identity replaces shame, purpose replaces drift. In the Seventh-day Adventist tradition, Scripture is viewed as dynamic—not static. It changes how we think, feel, and live. The soil of our mindset must change for the seed of truth to grow.",
        "scriptures": [
          {
            "verse": "Romans 12:1-2",
            "text": "I beseech you therefore, brethren, by the mercies of God, that ye present your bodies a living sacrifice, holy, acceptable unto God, which is your reasonable service. And be not conformed to this world: but be ye transformed by the renewing of your mind, that ye may prove what is that good, and acceptable, and perfect, will of God."
          },
          {
            "verse": "Ephesians 4:23",
            "text": "And be renewed in the spirit of your mind."
          }
        ],
        "examples": [
          "Truth from Scripture replaces lies we believed about ourselves",
          "God''s identity for us replaces shame from past mistakes",
          "Divine purpose replaces the drift of aimless living"
        ],
        "rhetoricalQuestions": [
          "Which beliefs in my mind need renewal by God''s Word?",
          "How has Scripture already changed how I think about myself or God?"
        ]
      }
    ],
    "lifeApplication": {
      "challenge": "Each day this week, pick one challenging thought you have and stand it against one Scripture truth—write the difference it makes.",
      "journaling": "What shift in my thinking did I notice by reading Scripture actively?"
    },
    "prayerPrompt": "Holy Spirit, fill my mind with truth, remove the old imprint of the world, and renew me from the inside out."
  }'::jsonb,
  NOW(),
  NOW()
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  scripture = EXCLUDED.scripture,
  description = EXCLUDED.description,
  content = EXCLUDED.content,
  updated_at = NOW();

-- Insert Lesson 3: The Word That Pierces and Heals
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
  'power-word-lesson3',
  'power-of-the-word',
  'The Word That Pierces and Heals',
  6,
  'Hebrews 4:12',
  'More than book, the Bible is a living instrument in God''s hands.',
  3,
  '{
    "scriptureText": "For the word of God is quick, and powerful, and sharper than any twoedged sword, piercing even to the dividing asunder of soul and spirit, and of the joints and marrow, and is a discerner of the thoughts and intents of the heart.",
    "teachingPoints": [
      {
        "narrative": "Scripture is not passive—it discerns the hidden places of the heart, exposes, transforms and heals. When we approach the Word with openness, we allow God to use it as scalpel and balm. Adventist teaching emphasises the healing and sanctifying power of the Word in the believer''s life. The Word doesn''t just sit on the page—it cuts through deception, heals wounds, and refines character.",
        "scriptures": [
          {
            "verse": "Hebrews 4:12",
            "text": "For the word of God is quick, and powerful, and sharper than any twoedged sword, piercing even to the dividing asunder of soul and spirit, and of the joints and marrow, and is a discerner of the thoughts and intents of the heart."
          },
          {
            "verse": "Jeremiah 23:29",
            "text": "Is not my word like as a fire? saith the Lord; and like a hammer that breaketh the rock in pieces?"
          }
        ],
        "examples": [
          "Scripture exposes hidden sins we didn''t want to face",
          "God''s Word heals wounds from past hurts and failures",
          "The Word refines our character like fire purifies gold"
        ],
        "rhetoricalQuestions": [
          "Where in my heart is the Word revealing what I wouldn''t want others to see?",
          "How have I experienced the Word as both cutting and healing?"
        ]
      }
    ],
    "lifeApplication": {
      "challenge": "Bring a journal and open the Word this week with the question: \"What do You want to show me today?\" Write what is revealed.",
      "journaling": "What did the Word reveal, and how did I respond?"
    },
    "prayerPrompt": "God, You know me better than I know myself. Use Your Word to shed light in me, heal in me, and refine me."
  }'::jsonb,
  NOW(),
  NOW()
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  scripture = EXCLUDED.scripture,
  description = EXCLUDED.description,
  content = EXCLUDED.content,
  updated_at = NOW();

-- Insert Lesson 4: Living by Every Word
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
  'power-word-lesson4',
  'power-of-the-word',
  'Living by Every Word',
  8,
  'Matthew 4:4',
  'Jesus said life comes by more than bread—it comes by every word from God.',
  4,
  '{
    "scriptureText": "But he answered and said, It is written, Man shall not live by bread alone, but by every word that proceedeth out of the mouth of God.",
    "teachingPoints": [
      {
        "narrative": "Just as food nourishes the body daily, the Word must be consumed daily for the soul''s life and growth. In later Adventist thought, this connects to the idea that reading and obeying Scripture is part of daily discipleship. Living by every word means obedience, not just reading—making each passage time-sensitive and life-shaping. Words from God are the bread of the soul—repeated, absorbed, and alive in our daily experience.",
        "scriptures": [
          {
            "verse": "Matthew 4:4",
            "text": "But he answered and said, It is written, Man shall not live by bread alone, but by every word that proceedeth out of the mouth of God."
          },
          {
            "verse": "Deuteronomy 8:3",
            "text": "And he humbled thee, and suffered thee to hunger, and fed thee with manna, which thou knewest not, neither did thy fathers know; that he might make thee know that man doth not live by bread only, but by every word that proceedeth out of the mouth of the Lord doth man live."
          }
        ],
        "examples": [
          "Daily Bible reading is as essential as daily meals",
          "Obedience to Scripture is part of spiritual nutrition",
          "Each word from God shapes and sustains our spiritual life"
        ],
        "rhetoricalQuestions": [
          "Which part of Scripture do I treat as optional rather than essential?",
          "How does treating Scripture as daily bread change my approach to it?"
        ]
      }
    ],
    "lifeApplication": {
      "challenge": "Choose a small passage you''ll \"live\" this week—memorize, speak, act—and note how it shapes your day.",
      "journaling": "What difference did it make when I treated this passage as life-word, not just information?"
    },
    "prayerPrompt": "Lord, let Your Word not just pass through my eyes, but come alive in my steps. Teach me to live by every word You''ve spoken."
  }'::jsonb,
  NOW(),
  NOW()
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  scripture = EXCLUDED.scripture,
  description = EXCLUDED.description,
  content = EXCLUDED.content,
  updated_at = NOW();

-- Insert Lesson 5: Wise Listening, Wise Living
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
  'power-word-lesson5',
  'power-of-the-word',
  'Wise Listening, Wise Living',
  8,
  'James 1:22',
  'Understanding that Scripture doesn''t just direct—it disciplines and guides daily life.',
  5,
  '{
    "scriptureText": "But be ye doers of the word, and not hearers only, deceiving your own selves.",
    "teachingPoints": [
      {
        "narrative": "James challenges passive hearing; true power of the Word is shown in what we do with it. Adventist perspective emphasises both hearing and obeying—to study the Word and to act on it. Obedience isn''t legalism—it''s the soil for the Word''s fruit to grow. Listening is the gateway, but living is the destination. Transformation happens when we move from passive hearing to active doing.",
        "scriptures": [
          {
            "verse": "James 1:22",
            "text": "But be ye doers of the word, and not hearers only, deceiving your own selves."
          },
          {
            "verse": "Luke 11:28",
            "text": "But he said, Yea rather, blessed are they that hear the word of God, and keep it."
          }
        ],
        "examples": [
          "Hearing without doing is like studying a recipe but never cooking",
          "Obedience is the soil where God''s Word produces fruit",
          "True discipleship combines hearing with active obedience"
        ],
        "rhetoricalQuestions": [
          "When did I hear truth lately—and then delay acting on it? What held me back?",
          "How does obedience to Scripture differ from legalistic rule-following?"
        ]
      }
    ],
    "lifeApplication": {
      "challenge": "Pick one command or promise from your study and build a practical habit around it this week.",
      "journaling": "How did acting on the Word change my day, week, or mindset?"
    },
    "prayerPrompt": "Father, help me not just to hear but to do. Let Your Word build in me habits that reflect Your will."
  }'::jsonb,
  NOW(),
  NOW()
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  scripture = EXCLUDED.scripture,
  description = EXCLUDED.description,
  content = EXCLUDED.content,
  updated_at = NOW();

-- Insert Lesson 6: Transformed & Transmitting
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
  'power-word-lesson6',
  'power-of-the-word',
  'Transformed & Transmitting',
  8,
  '2 Timothy 3:16-17',
  'When Scripture changes us, we become channels of transformation to others.',
  6,
  '{
    "scriptureText": "All Scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness: That the man of God may be perfect, throughly furnished unto all good works.",
    "teachingPoints": [
      {
        "narrative": "Scripture''s purpose is not only to change the individual, but to equip for service—transmission becomes transformation. In the rising movement of Adventist discipleship, transformed believers become teachers, not just learners. When the Word lives in us, we live the Word—and then we give it away. A candle passes on its flame without losing its light; so we share God''s truth without losing it ourselves.",
        "scriptures": [
          {
            "verse": "2 Timothy 3:16-17",
            "text": "All Scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness: That the man of God may be perfect, throughly furnished unto all good works."
          },
          {
            "verse": "Matthew 28:19-20",
            "text": "Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost: Teaching them to observe all things whatsoever I have commanded you."
          }
        ],
        "examples": [
          "Transformed believers naturally become teachers of others",
          "Sharing Scripture deepens our own understanding",
          "The Word multiplies when we pass it on to others"
        ],
        "rhetoricalQuestions": [
          "What part of my life is ready to give away what the Word has done in me?",
          "How does sharing Scripture with others change my own faith?"
        ]
      }
    ],
    "lifeApplication": {
      "challenge": "This week share one insight from the Word with someone—verbally, text, or social. See how giving it away shapes you.",
      "journaling": "How did transmitting the Word change my understanding or deepen my faith?"
    },
    "prayerPrompt": "God of the Word, not for myself only, but for others—use me. Let the truth You''ve planted in me flow out and bring life."
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
SELECT COUNT(*) as total_studies FROM public.studies WHERE id = 'power-of-the-word';
SELECT COUNT(*) as total_lessons FROM public.lessons WHERE study_id = 'power-of-the-word';
