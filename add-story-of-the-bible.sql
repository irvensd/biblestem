-- Add "The Story of the Bible" Study and Lessons
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
  'story-of-the-bible',
  'The Story of the Bible',
  'A comprehensive 6-part journey through the grand narrative of Scripture—from creation to restoration, exploring God''s purpose, humanity''s fall, covenant promises, the Messiah, redemption, and the ultimate restoration of all things.',
  'free',
  42,
  'beginner',
  ARRAY['Bible Study', 'Biblical Narrative', 'Creation', 'Redemption', 'Restoration', 'Theology'],
  'story-bible',
  'from-purple-500 to-indigo-600',
  ARRAY['Biblical narrative overview', 'Covenant understanding', 'Redemptive history', 'Free content'],
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

-- Insert Lesson 1: The Beginning
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
  'story-bible-lesson1',
  'story-of-the-bible',
  'The Beginning: Creation and Purpose',
  6,
  'Genesis 1:27',
  'God''s original design—why He made everything and us in His image.',
  1,
  '{
    "scriptureText": "So God created man in his own image, in the image of God created he him; male and female created he them.",
    "teachingPoints": [
      {
        "narrative": "Being made in God''s image means we carry His character—not just intelligence but relational capacity, moral awareness, and the ability to worship. Creation is not just the background for salvation—it''s the stage. The Fall doesn''t surprise God; it distorts a design, but the design remains. When we forget our purpose—image-bearers designed to reflect God—we lose direction. Our value lies not in what we produce, but in whose image we reflect. The world is His masterpiece, and we are the climax of His creative work.",
        "scriptures": [
          {
            "verse": "Genesis 1:27",
            "text": "So God created man in his own image, in the image of God created he him; male and female created he them."
          },
          {
            "verse": "Genesis 1:31",
            "text": "And God saw every thing that he had made, and, behold, it was very good."
          }
        ],
        "rhetoricalQuestions": [
          "When I look at creation (trees, sky, people), do I see my purpose or just my problems?",
          "How does understanding that I''m made in God''s image change how I view myself and others?"
        ]
      }
    ],
    "lifeApplication": {
      "challenge": "This week, pause three times and thank God for His creative work—then ask: how am I reflecting His image right now?",
      "journaling": "Write one way you will reflect God''s image in a relationship this week."
    },
    "prayerPrompt": "Creator God, thank You for the canvas of the universe and for making me in Your image. Help me to live as Your reflection in every moment."
  }'::jsonb,
  NOW(),
  NOW()
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  scripture = EXCLUDED.scripture,
  description = EXCLUDED.description,
  content = EXCLUDED.content,
  updated_at = NOW();

-- Insert Lesson 2: The Fall
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
  'story-bible-lesson2',
  'story-of-the-bible',
  'The Fall: Brokenness Enters the World',
  6,
  'Genesis 3:17-19',
  'Sin came not just into the world, but into the heart of the image-bearer—what that means for you.',
  2,
  '{
    "scriptureText": "And unto Adam he said, Because thou hast hearkened unto the voice of thy wife… cursed is the ground for thy sake… In the sweat of thy face shalt thou eat bread…",
    "teachingPoints": [
      {
        "narrative": "The Fall wasn''t just moral; it was relational and cosmic—image-bearers rejecting the Creator, breaking the bond meant to define them. Everything changed—nature, human relationships, purpose. The gardener became a laborer; the tree of life became distance. But even in the curse, God provided hope (Gen 3:15). The story didn''t stop—it shifted. Redemption was already planned. The mirror is cracked, but the image remains, and the Restorer has already been promised.",
        "scriptures": [
          {
            "verse": "Genesis 3:17-19",
            "text": "And unto Adam he said, Because thou hast hearkened unto the voice of thy wife… cursed is the ground for thy sake… In the sweat of thy face shalt thou eat bread, till thou return unto the ground."
          },
          {
            "verse": "Genesis 3:15",
            "text": "And I will put enmity between thee and the woman, and between thy seed and her seed; it shall bruise thy head, and thou shalt bruise his heel."
          }
        ],
        "examples": [
          "The perfect garden became a place of struggle and toil",
          "Human relationships were broken and filled with blame",
          "Death entered the world, but so did the promise of a Deliverer"
        ],
        "rhetoricalQuestions": [
          "Where in my life is the glass cracked—where I know the reflection isn''t right?",
          "How does knowing redemption was planned even in the curse give me hope?"
        ]
      }
    ],
    "lifeApplication": {
      "challenge": "Choose one area of your life that''s warped by a \"crack\"—fear, pride, anger—and ask God to begin restoring it.",
      "journaling": "What change did I notice this week when I let God begin that restoration?"
    },
    "prayerPrompt": "Merciful God, sin broke the image, but You promised the Restorer. Help me to let You mend what is broken so I reflect You truly."
  }'::jsonb,
  NOW(),
  NOW()
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  scripture = EXCLUDED.scripture,
  description = EXCLUDED.description,
  content = EXCLUDED.content,
  updated_at = NOW();

-- Insert Lesson 3: The Covenant Story
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
  'story-bible-lesson3',
  'story-of-the-bible',
  'The Covenant Story: God''s Relationship and Promises',
  6,
  'Genesis 17:7',
  'From Noah to Abraham, Moses to David—covenants reveal the heart of God''s rescue plan.',
  3,
  '{
    "scriptureText": "And I will establish my covenant between me and thee and thy seed after thee in their generations for an everlasting covenant...",
    "teachingPoints": [
      {
        "narrative": "Covenants are the backbone of Scripture—they tell us not just what God does but how He chooses to do it (in relationship). Each major biblical covenant—from Noah, Abraham, Moses, David to the New Covenant—builds a story of rescue and restoration, culminating in Christ. When we live unaware of covenant, we treat God as a contractor. But when we live in covenant, we live in His family. God''s promises are not transactions but relational commitments etched in love.",
        "scriptures": [
          {
            "verse": "Genesis 17:7",
            "text": "And I will establish my covenant between me and thee and thy seed after thee in their generations for an everlasting covenant, to be a God unto thee, and to thy seed after thee."
          },
          {
            "verse": "Jeremiah 31:33",
            "text": "But this shall be the covenant that I will make with the house of Israel; After those days, saith the Lord, I will put my law in their inward parts, and write it in their hearts; and will be their God, and they shall be my people."
          }
        ],
        "examples": [
          "Noah''s covenant: God''s promise to preserve creation",
          "Abraham''s covenant: God''s promise to bless all nations",
          "The New Covenant: God''s promise written on our hearts"
        ],
        "rhetoricalQuestions": [
          "Do I think of God primarily as a contractor I hire—or as a covenant-keeper I belong to?",
          "How does understanding covenant change my view of God''s relationship with me?"
        ]
      }
    ],
    "lifeApplication": {
      "challenge": "Find one covenant in Scripture (Noah, Abraham, etc.) and ask: what does it tell me about God''s commitment to me?",
      "journaling": "How does knowing I''m in covenant change the way I live this week?"
    },
    "prayerPrompt": "Faithful God, thank You for entering into covenant with me. Help me trust not just Your promises, but Your presence."
  }'::jsonb,
  NOW(),
  NOW()
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  scripture = EXCLUDED.scripture,
  description = EXCLUDED.description,
  content = EXCLUDED.content,
  updated_at = NOW();

-- Insert Lesson 4: The Messiah
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
  'story-bible-lesson4',
  'story-of-the-bible',
  'The Messiah: God''s Plan Revealed',
  8,
  'John 1:14',
  'God''s promise meets flesh in Jesus—how the rescue took human form.',
  4,
  '{
    "scriptureText": "And the Word was made flesh, and dwelt among us, (and we beheld his glory, the glory as of the only begotten of the Father,) full of grace and truth.",
    "teachingPoints": [
      {
        "narrative": "Jesus is the climax of the story, the one in whom all covenants meet and God''s rescue plan takes visible form. In Him the broken image is restored, the lost relationship renewed, the purpose of creation reclaimed. When we see Jesus, we see that God didn''t just plan salvation—He entered our story so we might join His. The Word became flesh, and in that flesh we see the perfect image of God, the true image-bearer who shows us who we were meant to be.",
        "scriptures": [
          {
            "verse": "John 1:14",
            "text": "And the Word was made flesh, and dwelt among us, (and we beheld his glory, the glory as of the only begotten of the Father,) full of grace and truth."
          },
          {
            "verse": "Colossians 1:15",
            "text": "Who is the image of the invisible God, the firstborn of every creature."
          }
        ],
        "examples": [
          "Jesus fulfilled every covenant promise made throughout history",
          "In Christ, the broken image is perfectly restored",
          "God didn''t just send help—He came Himself in human form"
        ],
        "rhetoricalQuestions": [
          "How does knowing God walked in human shoes change the way I live today?",
          "What does it mean that all of Scripture points to Jesus?"
        ]
      }
    ],
    "lifeApplication": {
      "challenge": "This week, reflect on one attribute of Jesus (humility, service, prayer) and emulate it in a concrete way.",
      "journaling": "Write how the world saw Jesus and how you will reflect Him in one situation."
    },
    "prayerPrompt": "Lord Jesus, thanks for stepping from heaven into my story. Help me follow You, not just believe about You."
  }'::jsonb,
  NOW(),
  NOW()
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  scripture = EXCLUDED.scripture,
  description = EXCLUDED.description,
  content = EXCLUDED.content,
  updated_at = NOW();

-- Insert Lesson 5: Redemption
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
  'story-bible-lesson5',
  'story-of-the-bible',
  'Redemption: Christ''s Work and the Church',
  8,
  'Colossians 1:13-14',
  'The cross, the empty tomb, and the new community of hope.',
  5,
  '{
    "scriptureText": "Who hath delivered us from the power of darkness, and hath translated us into the kingdom of his dear Son: In whom we have redemption through his blood, even the forgiveness of sins.",
    "teachingPoints": [
      {
        "narrative": "Redemption is more than forgiveness—it''s repositioning. We are delivered from darkness and placed into kingdom identity. The Church is not just people gathered—it is the new \"us\" in the story of God, the redeemed community joining His mission. Living redeemed means living with purpose, power, and partnership in God''s ongoing story. The debt is paid, the chains are broken, and we are given a new identity as citizens of His kingdom.",
        "scriptures": [
          {
            "verse": "Colossians 1:13-14",
            "text": "Who hath delivered us from the power of darkness, and hath translated us into the kingdom of his dear Son: In whom we have redemption through his blood, even the forgiveness of sins."
          },
          {
            "verse": "Ephesians 2:19",
            "text": "Now therefore ye are no more strangers and foreigners, but fellowcitizens with the saints, and of the household of God."
          }
        ],
        "examples": [
          "Redemption changes our position from condemned to forgiven",
          "We''re not just saved from something, but saved for something",
          "The Church is God''s redeemed people on mission together"
        ],
        "rhetoricalQuestions": [
          "What chains have I assumed are too heavy to break? What new identity has Christ handed me?",
          "How does being part of the Church change my purpose?"
        ]
      }
    ],
    "lifeApplication": {
      "challenge": "Share the story of your redemption with someone this week. Let your life become part of the narrative of hope.",
      "journaling": "How did sharing my story impact either me or the other person?"
    },
    "prayerPrompt": "Gracious Redeemer, thank You for paying my debt, rescuing me, and setting me in Your kingdom. Use me to bring others into the story."
  }'::jsonb,
  NOW(),
  NOW()
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  scripture = EXCLUDED.scripture,
  description = EXCLUDED.description,
  content = EXCLUDED.content,
  updated_at = NOW();

-- Insert Lesson 6: Restoration
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
  'story-bible-lesson6',
  'story-of-the-bible',
  'Restoration: God''s New Creation',
  8,
  'Revelation 21:3-4',
  'Earth''s renewal, our resurrection, God''s dwelling with us forever.',
  6,
  '{
    "scriptureText": "And I heard a great voice out of heaven, saying, Behold, the tabernacle of God is with men, and he will dwell with them, and they shall be his people, and God himself shall be with them, and be their God. And God shall wipe away all tears from their eyes; and there shall be no more death, neither sorrow, nor crying, neither shall there be any more pain: for the former things are passed away.",
    "teachingPoints": [
      {
        "narrative": "Restoration is the final chapter—but it begins now. We live in the tension of \"already\" and \"not yet\". Creation will be renewed. Sin''s corruption reversed. Believers become stewards and participants in God''s finished masterpiece. Hope changes everything—how we live today, how we miss the world, how we serve others. We are not waiting out the clock—we''re living into the dawn. The future restoration shapes our present reality.",
        "scriptures": [
          {
            "verse": "Revelation 21:3-4",
            "text": "And I heard a great voice out of heaven, saying, Behold, the tabernacle of God is with men, and he will dwell with them, and they shall be his people, and God himself shall be with them, and be their God. And God shall wipe away all tears from their eyes; and there shall be no more death, neither sorrow, nor crying, neither shall there be any more pain: for the former things are passed away."
          },
          {
            "verse": "Romans 8:21",
            "text": "Because the creature itself also shall be delivered from the bondage of corruption into the glorious liberty of the children of God."
          }
        ],
        "examples": [
          "The new creation begins with Christ''s resurrection",
          "We participate in restoration now through kingdom work",
          "The future hope transforms how we live in the present"
        ],
        "rhetoricalQuestions": [
          "How does the promise of restoration affect how I live today—my priorities, my relationships, my resources?",
          "What does it mean to live in the \"already but not yet\"?"
        ]
      }
    ],
    "lifeApplication": {
      "challenge": "This week, invest time in something that points to restoration—help someone healing, plant something, choose patience. Let your action reflect the future.",
      "journaling": "Note one time you acted according to the restoration story and what changed in you."
    },
    "prayerPrompt": "Eternal God, thank You for the world You are making and the place You''ve prepared for me. Help me live as one who carries Your new creation in my heart."
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
SELECT COUNT(*) as total_studies FROM public.studies WHERE id = 'story-of-the-bible';
SELECT COUNT(*) as total_lessons FROM public.lessons WHERE study_id = 'story-of-the-bible';
