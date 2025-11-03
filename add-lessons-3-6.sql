-- Add Lessons 3-6 to "How to Study the Bible" Study
-- Run this SQL in your Supabase SQL Editor

-- First, update the total duration to 42 minutes
UPDATE public.studies SET
  total_duration = 42,
  description = 'A 6-part Bible study series designed to prepare the believer to approach God''s Word with prayer, maturity, teachability, obedience, a teaching spirit, and trust in what God has revealed.',
  updated_at = NOW()
WHERE id = 'how-to-study-bible';

-- Insert Lesson 3: Teachability
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
  'htsb-3',
  'how-to-study-bible',
  'Teachability – The Humble Mindset',
  6,
  'Psalm 25:9',
  'A proud mind can''t receive new truth. God teaches those who come with humility.',
  3,
  '{
    "scriptureText": "The meek will He guide in judgment: and the meek will He teach His way.",
    "openingThought": "The teachable heart is God''s classroom. Imagine approaching a famous teacher with your mind already made up about what they should say. You wouldn''t learn anything—not because the teacher isn''t wise, but because you''ve already closed the door to anything that contradicts your assumptions. In the same way, pride prevents us from receiving divine truth. A proud mind can''t receive new truth because it has already decided what truth looks like.\n\nGod teaches those who come with humility. The meek—those who acknowledge their need for correction and instruction—are the ones God guides in judgment and teaches His way. This isn''t about intelligence or education; it''s about posture. A teachable heart listens for conviction, not confirmation. It''s willing to be corrected, eager to learn, and humble enough to admit when it doesn''t understand. When we approach Scripture with this spirit, God opens His Word to us in ways that pride cannot access.",
    "teachingPoints": [
      {
        "narrative": "Humility is the soil where divine truth grows. The proud heart resists instruction, believing it already knows enough. But God guides and teaches the meek—those who recognize their need for divine wisdom. When we come to Scripture convinced we have all the answers, we''ve already closed the door to deeper understanding. God hides truth from the proud but reveals it to those willing to be corrected. A teachable heart listens for conviction, not confirmation. It doesn''t seek to prove itself right; it seeks to be transformed by truth.\n\nThe key is coming to God''s Word with an open heart, ready to have our assumptions challenged and our understanding deepened. This humility doesn''t mean ignorance—it means acknowledging that God''s wisdom far surpasses our own. When we approach Scripture this way, we position ourselves to receive the instruction and guidance only God can provide.",
        "scriptures": [
          {
            "verse": "Psalm 25:9",
            "text": "The meek will He guide in judgment: and the meek will He teach His way."
          }
        ],
        "examples": [
          "A proud mind cannot receive new truth because it has already decided what truth looks like",
          "Humility acknowledges our need for divine wisdom",
          "God teaches those who are willing to be corrected"
        ],
        "rhetoricalQuestions": [
          "When reading the Bible, do you listen to learn—or to be right?",
          "What assumptions do you bring to Scripture that might blind you to God''s truth?",
          "Are you willing to have your understanding corrected by God''s Word?"
        ]
      }
    ],
    "lifeApplication": {
      "challenge": "Before each study, pray for humility. Ask God to remove bias and open your heart to correction.",
      "journaling": "Write about a time when God corrected your thinking through Scripture."
    },
    "prayerPrompt": "Father, give me a humble spirit. Remove pride and open my mind to receive Your truth in full."
  }'::jsonb,
  NOW(),
  NOW()
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  scripture = EXCLUDED.scripture,
  description = EXCLUDED.description,
  content = EXCLUDED.content,
  updated_at = NOW();

-- Insert Lesson 4: Obedience
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
  'htsb-4',
  'how-to-study-bible',
  'Obedience – The Key to Understanding',
  8,
  'John 7:17',
  'Obedience unlocks insight. When we do what we know, God reveals more.',
  4,
  '{
    "scriptureText": "If any man will do His will, he shall know of the doctrine, whether it be of God.",
    "openingThought": "Light followed is light increased. This is one of the most profound spiritual principles in Scripture: obedience is the key that unlocks deeper understanding. Jesus made this clear when He said, \"If any man will do His will, he shall know of the doctrine.\" This isn''t just good advice—it''s a spiritual law. When we act on what God has revealed, He reveals more.\n\nThis principle transforms how we approach Bible study. We''re not studying to accumulate knowledge for its own sake. We''re studying to know how to live, and when we live what we know, God entrusts us with greater light. Spiritual understanding grows through obedience, not argument. Those who act on God''s Word are the ones who receive clearer insight into its deeper meanings. Truth lived becomes truth understood in ways that mere intellectual knowledge can never achieve.",
    "teachingPoints": [
      {
        "narrative": "Obedience unlocks insight in ways that argument never can. Spiritual understanding grows through practice, not just study. Jesus promises that those who choose to do God''s will will discover whether His doctrine is truly from God. This isn''t theoretical—it''s experiential. When we act on what we know, God reveals more. Those who obey are entrusted with greater light because they''ve proven faithful with what they''ve already received.\n\nThe Holy Spirit teaches through practice. Truth lived becomes truth understood. We might read about faith, but when we step out in faith, we understand it in a way that reading alone cannot provide. This principle means our Bible study must always lead to action. Every truth we learn should have practical application, and every application should open us to receive deeper truth. Obedience isn''t optional for spiritual growth—it''s the pathway to greater understanding.",
        "scriptures": [
          {
            "verse": "John 7:17",
            "text": "If any man will do His will, he shall know of the doctrine, whether it be of God."
          }
        ],
        "examples": [
          "Those who act on God''s Word receive clearer insight into its deeper meanings",
          "Truth lived becomes truth understood in ways intellectual knowledge cannot",
          "Obedience proves our faithfulness and opens the door to greater revelation"
        ],
        "rhetoricalQuestions": [
          "Are you obeying the truths God has already shown you?",
          "What truth have you learned but not yet applied to your life?",
          "How has obedience deepened your understanding of Scripture?"
        ]
      }
    ],
    "lifeApplication": {
      "challenge": "Choose one clear command of God and practice it faithfully this week.",
      "journaling": "Record how obedience changes your understanding of Scripture."
    },
    "prayerPrompt": "Lord, help me walk in the truth I know. Let my actions reflect my understanding of Your Word."
  }'::jsonb,
  NOW(),
  NOW()
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  scripture = EXCLUDED.scripture,
  description = EXCLUDED.description,
  content = EXCLUDED.content,
  updated_at = NOW();

-- Insert Lesson 5: Teaching Spirit
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
  'htsb-5',
  'how-to-study-bible',
  'Teaching Spirit – Sharing What You Learn',
  8,
  'Matthew 10:8',
  'When we share God''s Word, it strengthens both others and ourselves.',
  5,
  '{
    "scriptureText": "Freely ye have received, freely give.",
    "openingThought": "Truth multiplies when it''s shared. Jesus made this clear when He commissioned His disciples: \"Freely ye have received, freely give.\" What we''ve learned from God is never meant to stay locked up in our own hearts. Teaching others reinforces what we''ve learned ourselves. When we explain God''s Word to someone else, we often gain clarity we didn''t have before. The process of sharing forces us to articulate truth clearly, and in that articulation, understanding deepens.\n\nSharing Scripture invites the Holy Spirit to clarify our understanding. Every believer is called to be a teacher, not necessarily from a pulpit or platform, but through lifestyle and love. When you share what God showed you in your study, you''re participating in the Great Commission. You''re helping someone else grow, and in the process, God blesses you with even greater understanding. This isn''t about being an expert—it''s about being faithful with what God has given you.",
    "teachingPoints": [
      {
        "narrative": "Teaching others reinforces what we''ve learned ourselves. When we share Scripture, we''re not just helping someone else—we''re strengthening our own understanding. The process of explaining God''s Word forces us to think carefully about what we''ve learned, and in that thinking, clarity emerges. Sharing invites the Holy Spirit to clarify our understanding because we''re participating in God''s work of multiplication.\n\nEvery believer is called to be a teacher through lifestyle and love. This doesn''t mean we need all the answers or theological degrees—it means we faithfully share what God has shown us. When you teach what you''ve learned, you''re being faithful with the revelation God has given you, and He promises to entrust faithful stewards with more. Freely you received, so freely give.",
        "scriptures": [
          {
            "verse": "Matthew 10:8",
            "text": "Freely ye have received, freely give."
          }
        ],
        "examples": [
          "Explaining truth to others deepens our own understanding",
          "Sharing Scripture opens the door for the Holy Spirit to clarify insight",
          "Teaching multiplies the impact of what we''ve learned"
        ],
        "rhetoricalQuestions": [
          "Who could benefit from something God showed you recently?",
          "How has sharing Scripture deepened your faith?",
          "What''s holding you back from teaching others what you''ve learned?"
        ]
      }
    ],
    "lifeApplication": {
      "challenge": "Share one insight from your study with someone this week.",
      "journaling": "Write about how sharing Scripture deepened your faith."
    },
    "prayerPrompt": "Father, make me a channel of Your truth. Let my words bring light to others."
  }'::jsonb,
  NOW(),
  NOW()
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  scripture = EXCLUDED.scripture,
  description = EXCLUDED.description,
  content = EXCLUDED.content,
  updated_at = NOW();

-- Insert Lesson 6: Trust
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
  'htsb-6',
  'how-to-study-bible',
  'Trusting What''s Revealed – Walking by Faith',
  8,
  'Deuteronomy 29:29',
  'Faith accepts what God has revealed and trusts Him for what He has not yet explained.',
  6,
  '{
    "scriptureText": "The secret things belong unto the Lord our God: but those things which are revealed belong unto us and to our children forever.",
    "openingThought": "Faith begins where explanation ends. Moses made this clear when he said, \"The secret things belong unto the Lord our God: but those things which are revealed belong unto us.\" God has given us everything we need to know—not everything we want to know, but everything we need. The spiritually mature learn to rest in God''s sufficiency, trusting that what He has revealed is what we need for this moment.\n\nThis principle is crucial for Bible study. We can study forever and still have unanswered questions. But faith accepts what God has revealed and trusts Him for what He has not yet explained. God reveals enough to trust Him, not everything to satisfy curiosity. When we can rest in this reality, we find peace even in our questions. Great peace belongs to those who trust God''s revealed Word, not those who demand answers to every mystery.",
    "teachingPoints": [
      {
        "narrative": "God reveals enough to trust Him, not everything to satisfy curiosity. The secret things belong to Him, but what He has revealed belongs to us. This distinction is crucial for spiritual maturity. Faith is choosing to rest in God''s wisdom when answers are missing. The spiritually mature walk by trust, not by full understanding. They know God has given them everything they need, even if He hasn''t answered every question.\n\nThis principle transforms how we approach unanswered questions in Scripture. Instead of demanding explanations or losing faith when mysteries remain, we trust the God who revealed them. We accept what God has made known and trust Him for what He has kept secret. This trust doesn''t mean ignoring hard questions—it means bringing them to God in faith, believing He knows what He''s doing even when we don''t.",
        "scriptures": [
          {
            "verse": "Deuteronomy 29:29",
            "text": "The secret things belong unto the Lord our God: but those things which are revealed belong unto us and to our children forever."
          }
        ],
        "examples": [
          "Faith is choosing to trust God''s wisdom when answers are missing",
          "God reveals enough to guide us, not everything to satisfy us",
          "Those who trust God''s revealed Word find peace even in mystery"
        ],
        "rhetoricalQuestions": [
          "Do I trust God''s Word even when I don''t understand everything?",
          "What questions have I been demanding God answer instead of trusting Him with?",
          "How has trusting God''s revealed Word brought me peace?"
        ]
      }
    ],
    "lifeApplication": {
      "challenge": "Turn one of your biggest Bible questions into a prayer of trust this week.",
      "journaling": "Describe how trusting God''s silence strengthens your faith."
    },
    "prayerPrompt": "Lord, I choose to rest in what You''ve revealed. Help me trust that Your Word is enough for every step of my journey."
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
SELECT 'Lessons 3-6 added successfully!' as status;
SELECT COUNT(*) as total_lessons FROM public.lessons WHERE study_id = 'how-to-study-bible';

