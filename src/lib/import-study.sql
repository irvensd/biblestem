-- Import "How to Study the Bible" Study and Lessons
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
  'how-to-study-bible',
  'How to Study the Bible: The Preparation',
  'A 6-part Bible study series designed to prepare the believer to approach God''s Word with prayer, maturity, humility, obedience, a teaching spirit, and trust in what God has revealed.',
  'free',
  36,
  'beginner',
  ARRAY['Bible Study', 'Preparation', 'Spiritual Growth', 'Learning'],
  'bible-study-prep',
  'from-emerald-500 to-emerald-600',
  ARRAY['Interactive word study', 'Guided study sections', 'Reflection questions', 'Free content'],
  NOW(),
  NOW()
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  updated_at = NOW();

-- Insert Lesson 1: Prayer
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
  'htsb-1',
  'how-to-study-bible',
  'Prayer',
  6,
  'Psalm 119:18',
  'Opening the Bible without prayer is like walking into a dark room without turning on the light',
  1,
  '{
    "scriptureText": "Open thou mine eyes, that I may behold wondrous things out of thy law.",
    "openingThought": "The foundation of all Bible study is humble prayer, asking God to illuminate His Word.",
    "teachingPoints": [
      {
        "narrative": "Opening the Bible without prayer is like walking into a dark room without turning on the light. Prayer is the essential first step in Bible study because we acknowledge our utter dependence on God for spiritual understanding. The psalmist recognizes that spiritual truths are hidden from our natural understanding and require divine revelation.",
        "scriptures": [
          {
            "verse": "Psalm 119:18",
            "text": "Open thou mine eyes, that I may behold wondrous things out of thy law.",
            "wordStudy": [
              {
                "word": "עיני",
                "language": "Hebrew",
                "transliteration": "einai",
                "meaning": "eyes, sight, vision - representing spiritual perception and understanding",
                "context": "The psalmist is asking for spiritual eyes to see God''s truth, not just physical vision",
                "references": ["Psalm 119:18", "Proverbs 20:12", "Ephesians 1:18"]
              }
            ]
          },
          {
            "verse": "1 Corinthians 2:14",
            "text": "But the natural man receiveth not the things of the Spirit of God: for they are foolishness unto him: neither can he know them, because they are spiritually discerned."
          }
        ],
        "examples": [
          "Without God''s illumination, we can read the words but miss the transformative power of Scripture",
          "This prayer expresses humility - admitting we need God''s help to understand His own Word"
        ],
        "rhetoricalQuestions": [
          "When was the last time you asked God to open your understanding before reading His Word?",
          "Have you ever read a passage multiple times, then suddenly had it illuminated through prayer?"
        ]
      },
      {
        "title": "Why Prayer Matters",
        "narrative": "Without God''s illumination through prayer, we may read the words of Scripture but completely miss the transformative power that God intends for us. Spiritual things must be spiritually discerned. The Bible itself tells us that the natural person cannot understand the things of the Spirit.",
        "scriptures": [
          {
            "verse": "2 Peter 1:20-21",
            "text": "Knowing this first, that no prophecy of the scripture is of any private interpretation. For the prophecy came not in old time by the will of man: but holy men of God spake as they were moved by the Holy Ghost."
          }
        ],
        "rhetoricalQuestions": [
          "How can we expect to understand Scripture if we don''t ask the Author for illumination?"
        ]
      }
    ],
    "lifeApplication": {
      "challenge": "Never open the Bible without first asking God for the Holy Spirit''s guidance. Make it a daily habit: pray before every study session. Before you read, take a moment to ask God to open your eyes, to give you understanding, and to speak to your heart.",
      "journaling": "Write about a time when God opened your understanding to His Word. What difference did prayer make?"
    },
    "prayerPrompt": "Lord, open my spiritual eyes to see Your truth. Give me understanding beyond what I could find on my own, and fill me with Your Spirit so I may walk in obedience. I come to Your Word today, humbly asking You to illuminate it for me."
  }'::jsonb,
  NOW(),
  NOW()
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  scripture = EXCLUDED.scripture,
  description = EXCLUDED.description,
  content = EXCLUDED.content,
  updated_at = NOW();

-- Insert Lesson 2: Maturity
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
  'htsb-2',
  'how-to-study-bible',
  'Maturity - Weaning Off Human Dependence',
  6,
  '1 Corinthians 13:11',
  'God calls us to grow from milk to meat—to move from relying on others for our spiritual food to feeding ourselves',
  2,
  '{
    "scriptureText": "When I was a child, I spake as a child, I understood as a child, I thought as a child: but when I became a man, I put away childish things.",
    "openingThought": "Maturity in Bible study means developing the ability to feed yourself spiritually, not just being fed.",
    "teachingPoints": [
      {
        "narrative": "God calls us to grow from milk to meat—to move from relying on others for our spiritual food to feeding ourselves. Just as a child eventually learns to feed themselves, we must mature in our Bible study. While teachers and pastors are valuable gifts to the church, they are meant to equip us to study independently, not to become our sole source of truth.",
        "scriptures": [
          {
            "verse": "1 Corinthians 13:11",
            "text": "When I was a child, I spake as a child, I understood as a child, I thought as a child: but when I became a man, I put away childish things."
          },
          {
            "verse": "Hebrews 5:13-14",
            "text": "For every one that useth milk is unskilful in the word of righteousness: for he is a babe. But strong meat belongeth to them that are of full age, even those who by reason of use have their senses exercised to discern both good and evil."
          }
        ],
        "examples": [
          "A mature believer can test what they hear against the Word of God",
          "A baby needs to be spoon-fed, but an adult can prepare their own meals"
        ],
        "rhetoricalQuestions": [
          "Are you still relying entirely on others to tell you what the Bible means?",
          "What would happen if you could no longer attend church or Bible study? Would you still grow spiritually?"
        ]
      },
      {
        "title": "The Responsibility of Maturity",
        "narrative": "This isn''t about arrogance or rejecting our teachers—it''s about the responsibility to verify truth yourself. The Bible commends those who, like the Bereans, \"searched the scriptures daily\" to confirm what they were taught.",
        "scriptures": [
          {
            "verse": "Acts 17:11",
            "text": "These were more noble than those in Thessalonica, in that they received the word with all readiness of mind, and searched the scriptures daily, whether those things were so."
          },
          {
            "verse": "1 John 2:27",
            "text": "But the anointing which ye have received of him abideth in you, and ye need not that any man teach you: but as the same anointing teacheth you of all things, and is truth, and is no lie, and even as it hath taught you, ye shall abide in him."
          }
        ],
        "examples": [
          "The noble Bereans listened to Paul but then searched Scripture to confirm his teaching",
          "God gave you the Holy Spirit to guide you into truth - you don''t need to wait for someone else to tell you what it means"
        ],
        "rhetoricalQuestions": [
          "When you hear a teaching, do you automatically accept it or do you test it in Scripture?",
          "Do you know how to study God''s Word for yourself, or do you depend on others for interpretation?"
        ]
      }
    ],
    "lifeApplication": {
      "challenge": "Listen to sermons and read study guides, but always test them in Scripture. Develop your own study routine so you can confirm truth without relying solely on others. Set aside time to read the Bible for yourself, without commentary or study notes, and let the Holy Spirit teach you.",
      "journaling": "Reflect on areas where you might be leaning too heavily on others for spiritual understanding. What steps will you take to develop your own study habits?"
    },
    "prayerPrompt": "Father, grow me from milk to meat. Give me the discipline to study Your Word for myself and the discernment to test all things by Your truth. I pray that I would be like the noble Bereans, searching the Scriptures daily."
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
SELECT 'Study imported successfully!' as status;
SELECT COUNT(*) as study_count FROM public.studies;
SELECT COUNT(*) as lessons_count FROM public.lessons;

