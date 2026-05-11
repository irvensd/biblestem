-- BibleStem unified seed (catalog + lesson reader content).
-- Use in Supabase SQL Editor, or via CLI with `supabase db reset` (local).
-- Targets schema from `migrations/001_initial_schema.sql`. If your project was created before
-- `006_study_series_card_descriptions.sql`, the block below adds `short_description` / `long_description`.

begin;

do $$
begin
  if to_regclass('public.lesson_sections') is null then
    raise exception
      'Missing table public.lesson_sections. Run migrations/001_initial_schema.sql first.';
  end if;
end $$;

-- Align with migration `006_study_series_card_descriptions.sql` (safe if columns already exist).
alter table public.study_series
  add column if not exists short_description text;

alter table public.study_series
  add column if not exists long_description text;

-- Clear dependent rows first (FKs from progress / links).
truncate table public.lesson_word_links,
  public.user_lesson_progress,
  public.user_series_progress,
  public.lesson_sections,
  public.lessons,
  public.study_series,
  public.study_paths
cascade;

insert into public.study_paths (id, slug, name, description, sort_order) values
  ('b1000001-0000-4000-8000-000000000001', 'foundations', 'Foundations', 'For new readers who want to understand Scripture clearly and build a strong foundation.', 1),
  ('b1000001-0000-4000-8000-000000000002', 'prophecy', 'Prophecy', 'For readers who want to study Daniel, Revelation, worship, judgment, and last-day messages with care.', 2),
  ('b1000001-0000-4000-8000-000000000003', 'theology', 'Theology', 'For deeper doctrinal studies that require careful context and Scripture-to-Scripture reasoning.', 3),
  ('b1000001-0000-4000-8000-000000000004', 'life-application', 'Life Application', 'For practical studies on prayer, character, temptation, habits, relationships, and daily obedience.', 4);

insert into public.study_series (
  id, study_path_id, slug, title, description, short_description, long_description,
  level, duration_summary, lessons_count, featured, collection_label, sort_order
) values (
  'e4000001-0000-4000-8000-000000000060',
  'b1000001-0000-4000-8000-000000000001',
  'origin-of-evil',
  'The Origin of Evil',
  'This BibleStem study explains where evil came from, who Satan is, how Lucifer fell, why God allowed sin to unfold, how deception works, and how Christ will finally end evil forever. The study is Scripture-first, practical, and focused on God''s character.',
  'A clear Bible study on Lucifer, Satan, sin, deception, free will, and God''s character.',
  'This BibleStem study explains where evil came from, who Satan is, how Lucifer fell, why God allowed sin to unfold, how deception works, and how Christ will finally end evil forever. The study is Scripture-first, practical, and focused on God''s character.',
  'Intermediate',
  '80 min total',
  7,
  false,
  'Growth Studies',
  2
);

insert into public.study_series (
  id, study_path_id, slug, title, description, short_description, long_description,
  level, duration_summary, lessons_count, featured, collection_label, sort_order
) values (
  'e4000001-0000-4000-8000-000000000070',
  'b1000001-0000-4000-8000-000000000001',
  'god-is-love',
  'God Is Love',
  'This beginner-friendly BibleStem study explores the character of God through Scripture. It shows that love requires communication, that the Bible is God''s self-revelation, that prophecy gives a rational basis for trust, and that every true doctrine reveals something about God''s heart. The goal is not merely to learn religious information, but to know God personally.',
  'Discover why Scripture, prophecy, doctrine, and salvation all begin with one central truth: God is love.',
  'This beginner-friendly BibleStem study explores the character of God through Scripture. It shows that love requires communication, that the Bible is God''s self-revelation, that prophecy gives a rational basis for trust, and that every true doctrine reveals something about God''s heart. The goal is not merely to learn religious information, but to know God personally.',
  'Beginner',
  '75 min total',
  7,
  true,
  'Foundational Studies',
  0
);

insert into public.study_series (
  id, study_path_id, slug, title, description, short_description, long_description,
  level, duration_summary, lessons_count, featured, collection_label, sort_order
) values (
  'e4000001-0000-4000-8000-000000000071',
  'b1000001-0000-4000-8000-000000000001',
  'the-god-who-wants-to-be-known',
  'The God Who Wants to Be Known',
  'A beginner-friendly BibleStem study on God''s character, His revealed name, His relational love, and the way Father, Son, and Spirit invite humanity into trust and nearness. This study helps learners see that God does not hide behind power. He reveals Himself so He can be known.',
  'Discover a God who is not distant or cold, but relational, loving, and revealed through Scripture, Jesus, and the beauty of His name.',
  'A beginner-friendly BibleStem study on God''s character, His revealed name, His relational love, and the way Father, Son, and Spirit invite humanity into trust and nearness. This study helps learners see that God does not hide behind power. He reveals Himself so He can be known.',
  'Beginner',
  '74 min total',
  7,
  true,
  'Foundational Studies',
  3
);

insert into public.study_series (
  id, study_path_id, slug, title, description, short_description, long_description,
  level, duration_summary, lessons_count, featured, collection_label, sort_order
) values (
  'e4000001-0000-4000-8000-000000000072',
  'b1000001-0000-4000-8000-000000000001',
  'made-for-more',
  'Made for More',
  'A beginner-friendly BibleStem study on human identity, dignity, purpose, moral responsibility, and restoration through Jesus. This study helps learners see that humanity was created for more than survival. We were made in God''s image, called to reflect His love, and invited to be restored through Christ.',
  'Discover what it means to be human through Scripture''s teaching that we are created in the image of God.',
  'A beginner-friendly BibleStem study on human identity, dignity, purpose, moral responsibility, and restoration through Jesus. This study helps learners see that humanity was created for more than survival. We were made in God''s image, called to reflect His love, and invited to be restored through Christ.',
  'Beginner',
  '73 min total',
  7,
  false,
  'Foundational Studies',
  4
);

insert into public.study_series (
  id, study_path_id, slug, title, description, short_description, long_description,
  level, duration_summary, lessons_count, featured, collection_label, sort_order
) values (
  'e4000001-0000-4000-8000-000000000073',
  'b1000001-0000-4000-8000-000000000001',
  'war-in-heaven',
  'War in Heaven',
  'Why does evil exist if God is good?

Scripture presents a cosmic conflict that began before humanity and continues in the world today. At the center of this conflict is the character of God and the question of whether His kingdom truly operates on love.

This study explores the rebellion of Lucifer, the origin of sin, the meaning of free will, and the Bible''s explanation for suffering and evil. Most importantly, it reveals how Jesus entered the battle on our behalf and demonstrated the victory of love over deception, selfishness, and fear.

This beginner Foundations study is designed to help users understand the biblical storyline behind the struggle between good and evil while pointing them toward the hope found in Christ.',
  'The Bible reveals that our world is caught in a conflict between love and selfishness, truth and deception. This study explores where evil came from, why suffering exists, and how Jesus confronts darkness with truth and self-giving love.',
  'Why does evil exist if God is good?

Scripture presents a cosmic conflict that began before humanity and continues in the world today. At the center of this conflict is the character of God and the question of whether His kingdom truly operates on love.

This study explores the rebellion of Lucifer, the origin of sin, the meaning of free will, and the Bible''s explanation for suffering and evil. Most importantly, it reveals how Jesus entered the battle on our behalf and demonstrated the victory of love over deception, selfishness, and fear.

This beginner Foundations study is designed to help users understand the biblical storyline behind the struggle between good and evil while pointing them toward the hope found in Christ.',
  'Beginner',
  'Approx. 52 min total',
  7,
  false,
  'Foundational Studies',
  5
);

insert into public.study_series (
  id, study_path_id, slug, title, description, short_description, long_description,
  level, duration_summary, lessons_count, featured, collection_label, sort_order
) values (
  'e4000001-0000-4000-8000-000000000074',
  'b1000001-0000-4000-8000-000000000001',
  'the-fall-of-humanity',
  'The Fall of Humanity',
  'This study explores how sin entered the human story through deception, distrust, and self-centeredness. Beginning in Eden, humanity''s fall affected the way we think, relate, and live. But Scripture also reveals how Jesus came to restore what was broken and reveal the truth about God''s character.',
  'Humanity''s fall began with deception about God''s character and led to broken trust, broken relationships, and moral rebellion.',
  'This study explores how sin entered the human story through deception, distrust, and self-centeredness. Beginning in Eden, humanity''s fall affected the way we think, relate, and live. But Scripture also reveals how Jesus came to restore what was broken and reveal the truth about God''s character.',
  'Beginner',
  'Approx. 50 min total',
  7,
  false,
  'Foundational Studies',
  6
);

insert into public.study_series (
  id, study_path_id, slug, title, description, short_description, long_description,
  level, duration_summary, lessons_count, featured, collection_label, sort_order
) values (
  'e4000001-0000-4000-8000-000000000075',
  'b1000001-0000-4000-8000-000000000001',
  'the-promise-kept',
  'The Promise Kept',
  'After humanity fell, God did not abandon the world to sin, shame, and death. He gave the first gospel promise: a coming Deliverer would defeat the enemy and rescue humanity.' || E'\n\n' ||
  'This study traces that promise from Eden to the cross. It shows how the Old Testament points forward to Jesus, how Daniel''s 70-week timeline foretold the Messiah''s mission, and how Christ fulfilled God''s promise of faithful love through His life, death, and resurrection.' || E'\n\n' ||
  'The story of Scripture is not God giving up on humanity. It is God keeping His promise at great cost to Himself.',
  'God promised to rescue humanity, and Jesus is that promise fulfilled.',
  'After humanity fell, God did not abandon the world to sin, shame, and death. He gave the first gospel promise: a coming Deliverer would defeat the enemy and rescue humanity.' || E'\n\n' ||
  'This study traces that promise from Eden to the cross. It shows how the Old Testament points forward to Jesus, how Daniel''s 70-week timeline foretold the Messiah''s mission, and how Christ fulfilled God''s promise of faithful love through His life, death, and resurrection.' || E'\n\n' ||
  'The story of Scripture is not God giving up on humanity. It is God keeping His promise at great cost to Himself.',
  'Beginner',
  'Approx. 55–70 min total',
  7,
  false,
  'Foundational Studies',
  7
);

insert into public.study_series (
  id, study_path_id, slug, title, description, short_description, long_description,
  level, duration_summary, lessons_count, featured, collection_label, sort_order
) values (
  'e4000001-0000-4000-8000-000000000020',
  'b1000001-0000-4000-8000-000000000002',
  'three-angels-messages',
  'The Three Angels'' Messages',
  'A careful look at Revelation 14: the closing messages of Scripture, mercy before warning, and a call to worship the Creator.',
  'A careful look at Revelation 14: the closing messages of Scripture, mercy before warning, and a call to worship the Creator.',
  null,
  'Advanced',
  '245 min total',
  25,
  false,
  'Advanced Studies',
  0
);

insert into public.study_series (
  id, study_path_id, slug, title, description, short_description, long_description,
  level, duration_summary, lessons_count, featured, collection_label, sort_order
) values (
  'e4000001-0000-4000-8000-000000000050',
  'b1000001-0000-4000-8000-000000000003',
  'death-resurrection-hope-of-life',
  'Death, Resurrection, and the Hope of Life',
  'A Scripture-first study on misunderstood passages about the soul, death, resurrection, hell, and eternal life.' || E'\n\n' || 'This advanced study walks through commonly misunderstood Bible passages about death, the soul, spirit, resurrection, hell, and spiritualism. The goal is not to argue, but to carefully let Scripture interpret Scripture. Each lesson helps the learner see that eternal life is not something humanity possesses by nature. It is a gift found in Christ and received fully at the resurrection.',
  'A Scripture-first study on death, the soul, resurrection, hell, and eternal life through commonly misunderstood Bible passages.',
  null,
  'Advanced',
  '180 min total',
  18,
  false,
  'Advanced Studies',
  1
);

insert into public.lessons (
  id, study_series_id, slug, title, summary, duration_minutes, scripture, sort_order
) values
  (
    'd3000007-0000-4000-8000-000000000601',
    'e4000001-0000-4000-8000-000000000060',
    'did-god-create-the-devil',
    'Did God Create the Devil?',
    'Learn how the Bible explains Satan''s origin and why God is not the author of evil.',
    10,
    '1 John 3:8 · Revelation 12:9 · Ezekiel 28:15',
    1
  ),
  (
    'd3000007-0000-4000-8000-000000000602',
    'e4000001-0000-4000-8000-000000000060',
    'lucifer-before-the-fall',
    'Lucifer Before the Fall',
    'Study Lucifer''s original beauty, wisdom, position, and purpose before sin was found in him.',
    10,
    'Isaiah 14:12 · Luke 10:18 · Ezekiel 28:12 to 15',
    2
  ),
  (
    'd3000007-0000-4000-8000-000000000603',
    'e4000001-0000-4000-8000-000000000060',
    'the-birth-of-pride',
    'The Birth of Pride',
    'See how pride, jealousy, and self-exaltation turned Lucifer''s heart against God.',
    10,
    'Ezekiel 28:17 · Isaiah 14:13 to 14 · Matthew 4:8 to 10',
    3
  ),
  (
    'd3000007-0000-4000-8000-000000000604',
    'e4000001-0000-4000-8000-000000000060',
    'war-in-heaven',
    'War in Heaven',
    'Understand why Lucifer was cast out and how rebellion spread among the angels.',
    11,
    'Revelation 12:7 to 9 · Revelation 12:4 · John 8:44',
    4
  ),
  (
    'd3000007-0000-4000-8000-000000000605',
    'e4000001-0000-4000-8000-000000000060',
    'the-first-lie-on-earth',
    'The First Lie on Earth',
    'Study how Satan deceived Eve and introduced sin, suffering, and death to humanity.',
    11,
    'Genesis 2:16 to 17 · Genesis 3:1 · Genesis 3:4 to 5 · Genesis 3:22 to 24',
    5
  ),
  (
    'd3000007-0000-4000-8000-000000000606',
    'e4000001-0000-4000-8000-000000000060',
    'how-satan-deceives-today',
    'How Satan Deceives Today',
    'Learn Satan''s methods of deception and how Scripture protects believers from counterfeit light.',
    11,
    '2 Corinthians 11:14 to 15 · Matthew 4:5 to 7 · Revelation 16:13 to 14 · 1 Peter 5:8',
    6
  ),
  (
    'd3000007-0000-4000-8000-000000000607',
    'e4000001-0000-4000-8000-000000000060',
    'how-god-ends-sin-forever',
    'How God Ends Sin Forever',
    'See how God will end sin, vindicate His character, and restore creation through Christ.',
    11,
    'Revelation 20:10 · Matthew 25:41 · Ezekiel 28:18 to 19 · Philippians 2:10 to 11 · Nahum 1:9',
    7
  ),
  (
    'd3000007-0000-4000-8000-000000000611',
    'e4000001-0000-4000-8000-000000000070',
    'the-logic-of-love',
    'The Logic of Love',
    'See why love requires communication and why a God of love would want to be known.',
    10,
    '1 John 4:8 · Genesis 1:27 · John 15:15 · 2 Timothy 3:16',
    1
  ),
  (
    'd3000007-0000-4000-8000-000000000612',
    'e4000001-0000-4000-8000-000000000070',
    'a-god-who-speaks',
    'A God Who Speaks',
    'See how God speaks through prophets, apostles, and Scripture so His love can be known with clarity.',
    10,
    'Hebrews 1:1 to 2 · 2 Peter 1:21 · 2 Timothy 3:16 · John 17:17',
    2
  ),
  (
    'd3000007-0000-4000-8000-000000000613',
    'e4000001-0000-4000-8000-000000000070',
    'a-god-who-knows-the-future',
    'A God Who Knows the Future',
    'Walk through Daniel 2 and see prophecy as confidence in the God who knows the end from the beginning.',
    12,
    'Daniel 2:27 to 28 · Daniel 2:44 · Isaiah 46:9 to 10 · John 14:29',
    3
  ),
  (
    'd3000007-0000-4000-8000-000000000614',
    'e4000001-0000-4000-8000-000000000070',
    'a-god-who-can-be-known',
    'A God Who Can Be Known',
    'See why eternal life is knowing God through Jesus Christ, not merely endless time or bare facts.',
    10,
    'John 17:3 · Jeremiah 9:23 to 24 · Hosea 6:3 · John 14:7',
    4
  ),
  (
    'd3000007-0000-4000-8000-000000000615',
    'e4000001-0000-4000-8000-000000000070',
    'truth-has-a-center',
    'Truth Has a Center',
    'See how all true doctrine reveals God''s character, because Scripture''s center is the God who is love.',
    10,
    '1 John 4:16 · John 5:39 · Luke 24:27 · Psalm 89:14',
    5
  ),
  (
    'd3000007-0000-4000-8000-000000000616',
    'e4000001-0000-4000-8000-000000000070',
    'jesus-reveals-the-father',
    'Jesus Reveals the Father',
    'See Jesus as the clearest revelation of the Father''s character: mercy, truth, and love made visible.',
    10,
    'John 14:8 to 9 · Hebrews 1:3 · Colossians 1:15 · John 1:18',
    6
  ),
  (
    'd3000007-0000-4000-8000-000000000617',
    'e4000001-0000-4000-8000-000000000070',
    'the-invitation-to-friendship',
    'The Invitation to Friendship',
    'Respond to God''s invitation into friendship: trust, obedience, nearness, and life with Him through Christ.',
    10,
    'John 15:13 to 15 · Revelation 21:3 · James 2:23 · Psalm 25:14',
    7
  ),
  (
    'd3000007-0000-4000-8000-000000000701',
    'e4000001-0000-4000-8000-000000000071',
    'why-names-matter',
    'Why Names Matter',
    'Show that names in Scripture often reveal identity, character, and story, preparing you for God''s revealed name.',
    10,
    'Genesis 1:1 · Genesis 2:7 · Genesis 32:27 to 28 · Matthew 1:21',
    1
  ),
  (
    'd3000007-0000-4000-8000-000000000702',
    'e4000001-0000-4000-8000-000000000071',
    'elohim-the-first-name-we-meet',
    'Elohim: The First Name We Meet',
    'Meet Elohim in Genesis 1:1 as Creator, trace His voice in creation, and see dignity and relationship woven into the opening chapter.',
    10,
    'Genesis 1:1 · Genesis 1:26 to 27 · Psalm 100:3',
    2
  ),
  (
    'd3000007-0000-4000-8000-000000000703',
    'e4000001-0000-4000-8000-000000000071',
    'love-at-the-heart-of-god',
    'God Is Love',
    'See that love is not merely something God does, but central to who He is, from John’s letters and Scripture’s portrait of love.',
    10,
    '1 John 4:7 to 8 · 1 John 4:16 · 1 Corinthians 13:4 to 5 · Jeremiah 31:3',
    3
  ),
  (
    'd3000007-0000-4000-8000-000000000704',
    'e4000001-0000-4000-8000-000000000071',
    'one-god-more-than-alone',
    'One God, More Than Alone',
    'Hold together Deuteronomy’s one LORD with Genesis and the Gospels, where Father, Son, and Holy Spirit appear in loving unity.',
    11,
    'Deuteronomy 6:4 · Genesis 1:26 · Matthew 3:16 to 17 · Matthew 28:19',
    4
  ),
  (
    'd3000007-0000-4000-8000-000000000705',
    'e4000001-0000-4000-8000-000000000071',
    'love-has-always-existed',
    'Love Has Always Existed',
    'See that God did not become loving after creation: love belongs to His eternal life before the foundation of the world.',
    10,
    'John 17:24 · 1 John 4:8 · John 1:1 to 3 · Ephesians 1:4 to 5',
    5
  ),
  (
    'd3000007-0000-4000-8000-000000000706',
    'e4000001-0000-4000-8000-000000000071',
    'jesus-makes-god-visible',
    'Jesus Makes God Visible',
    'See Jesus as the clearest revelation of God’s heart, character, and love through His words, compassion, sacrifice, and the Father made known.',
    10,
    'John 14:8 to 9 · John 1:18 · Colossians 1:15 · Hebrews 1:3',
    6
  ),
  (
    'd3000007-0000-4000-8000-000000000707',
    'e4000001-0000-4000-8000-000000000071',
    'the-invitation-to-come-near',
    'The Invitation to Come Near',
    'Respond to God’s revelation with trust and nearness: draw near to Him, abide in His love, and look toward His dwelling with His people.',
    10,
    'James 4:8 · Hebrews 4:16 · John 17:3 · 1 John 4:16 · Revelation 21:3',
    7
  ),
  (
    'd3000007-0000-4000-8000-000000000101',
    'e4000001-0000-4000-8000-000000000020',
    'why-revelation-14-matters',
    'Why Revelation 14 Matters',
    'Before the final harvest, God sends a global message of gospel, worship, warning, and decision.',
    8,
    'Revelation 14:6 to 7',
    1
  ),
  (
    'd3000007-0000-4000-8000-000000000102',
    'e4000001-0000-4000-8000-000000000020',
    'the-everlasting-gospel',
    'The Everlasting Gospel',
    'The final message begins with good news: Christ, the Lamb foreordained, and eternal life as God''s gift.',
    9,
    'Revelation 14:6 · 1 Peter 1:18 to 20 · Romans 6:23',
    2
  ),
  (
    'd3000007-0000-4000-8000-000000000103',
    'e4000001-0000-4000-8000-000000000020',
    'what-it-means-to-fear-god',
    'What It Means to Fear God',
    'Fear God is reverence and holy respect, the start of wisdom, not panic, as Revelation and wisdom literature agree.',
    9,
    'Revelation 14:7 · Proverbs 9:10 · Ecclesiastes 12:13',
    3
  ),
  (
    'd3000007-0000-4000-8000-000000000104',
    'e4000001-0000-4000-8000-000000000020',
    'how-to-glorify-god',
    'How to Glorify God',
    'Give glory to God: reflect His character in worship, works, body, spirit, and daily choices that point to Him.',
    9,
    'Revelation 14:7 · Matthew 5:16 · 1 Corinthians 6:19 to 20 · 1 Corinthians 10:31',
    4
  ),
  (
    'd3000007-0000-4000-8000-000000000105',
    'e4000001-0000-4000-8000-000000000020',
    'the-hour-of-gods-judgment',
    'The Hour of God''s Judgment',
    'The hour of His judgment is here: truth made clear, books opened, and Jesus our Advocate for those in Him.',
    10,
    'Revelation 14:7 · Daniel 7:9 to 10 · 1 John 2:1 · 1 John 1:9',
    5
  ),
  (
    'd3000007-0000-4000-8000-000000000106',
    'e4000001-0000-4000-8000-000000000020',
    'the-foundation-of-true-worship',
    'The Foundation of True Worship',
    'Worship the Creator: creation, Christ at the center, loyalty, and the memorial God placed at the beginning.',
    10,
    'Revelation 14:7 · Colossians 1:15 to 17 · Psalm 95:6 · Revelation 4:11',
    6
  ),
  (
    'd3000007-0000-4000-8000-000000000107',
    'e4000001-0000-4000-8000-000000000020',
    'mystery-babylon-the-great',
    'Mystery: Babylon the Great',
    'Babylon from Babel to Revelation: confusion, false worship, and heaven''s call to come out of the world''s system.',
    10,
    'Revelation 14:8 · Genesis 11:4 · Revelation 17:5 · Revelation 17:15',
    7
  ),
  (
    'd3000007-0000-4000-8000-000000000108',
    'e4000001-0000-4000-8000-000000000020',
    'babylons-abominable-wine',
    'Babylon''s Abominable Wine',
    'False teaching as Babylon''s wine: confusion and wrong worship, answered by testing everything in Scripture.',
    10,
    'Revelation 14:8 · Revelation 17:2 · Jeremiah 51:7 · John 17:17',
    8
  ),
  (
    'd3000007-0000-4000-8000-000000000109',
    'e4000001-0000-4000-8000-000000000020',
    'babylons-filthy-fornication',
    'Babylon''s Filthy Fornication',
    'Prophetic fornication: religious authority joined to political power, conscience, and Christ''s kingdom.',
    10,
    'Revelation 17:1 to 2 · Revelation 18:3 · Matthew 22:21 · John 18:36',
    9
  ),
  (
    'd3000007-0000-4000-8000-000000000110',
    'e4000001-0000-4000-8000-000000000020',
    'revelations-sea-beast',
    'Revelation''s Sea Beast',
    'Daniel and Revelation: beasts as kingdoms, the sea beast as a prophetic system, and why the warning matters.',
    10,
    'Revelation 13:1 to 2 · Daniel 7:3 · Daniel 7:17',
    10
  ),
  (
    'd3000007-0000-4000-8000-000000000111',
    'e4000001-0000-4000-8000-000000000020',
    'revelations-land-beast',
    'Revelation''s Land Beast',
    'The earth beast: lamb-like horns, dragon-like speech, and a prophetic system that restores the first beast.',
    10,
    'Revelation 13:11 · Revelation 13:12 · Revelation 12:16 · Matthew 22:21',
    11
  ),
  (
    'd3000007-0000-4000-8000-000000000112',
    'e4000001-0000-4000-8000-000000000020',
    'the-image-of-the-beast',
    'The Image of the Beast',
    'Likeness to the first beast''s system: enforced worship, Daniel''s pattern, and conscience in the final crisis.',
    10,
    'Revelation 13:14 to 15 · Revelation 13:12 · Daniel 3:4 to 6',
    12
  ),
  (
    'd3000007-0000-4000-8000-000000000113',
    'e4000001-0000-4000-8000-000000000020',
    '666-the-number-of-the-beast',
    '666: The Number of the Beast',
    '666, wisdom, and counterfeit authority: the beast, blasphemy, and human claims in Christ''s place.',
    10,
    'Revelation 13:18 · Revelation 13:5 to 6 · 2 Thessalonians 2:3 to 4',
    13
  ),
  (
    'd3000007-0000-4000-8000-000000000114',
    'e4000001-0000-4000-8000-000000000020',
    'the-mark-of-the-beast-part-1',
    'The Mark of the Beast, Part 1',
    'Worship, law, and loyalty: the mark, God''s commandments, the seal, and what Revelation contrasts.',
    10,
    'Revelation 14:9 to 12 · Revelation 12:17 · Hebrews 8:10 · Isaiah 8:16',
    14
  ),
  (
    'd3000007-0000-4000-8000-000000000115',
    'e4000001-0000-4000-8000-000000000020',
    'the-mark-of-the-beast-part-2',
    'The Mark of the Beast, Part 2',
    'Creation, Sabbath, authority: Scripture, Jesus as Lord of the Sabbath, and the mark when human rule replaces God''s command.',
    10,
    'Genesis 2:2 to 3 · Exodus 20:8 to 11 · Mark 2:27 to 28 · Daniel 7:25',
    15
  ),
  (
    'd3000007-0000-4000-8000-000000000116',
    'e4000001-0000-4000-8000-000000000020',
    'the-wine-of-gods-wrath',
    'The Wine of God''s Wrath',
    'Mercy, then judgment: the wine of wrath, the plagues, Christ''s gift, and chosen response.',
    10,
    'Revelation 14:9 to 10 · Revelation 15:1 · Revelation 16:1 · Romans 6:23',
    16
  ),
  (
    'd3000007-0000-4000-8000-000000000117',
    'e4000001-0000-4000-8000-000000000020',
    'the-smoke-of-babylons-torment',
    'The Smoke of Babylon''s Torment',
    'Smoke, Sodom, and Scripture: final judgment, the second death, and destruction that ends sin.',
    10,
    'Revelation 14:10 to 11 · Jude 7 · 2 Peter 2:6 · Malachi 4:1',
    17
  ),
  (
    'd3000007-0000-4000-8000-000000000118',
    'e4000001-0000-4000-8000-000000000020',
    'the-patience-of-the-saints',
    'The Patience of the Saints',
    'Hupomone: endurance, prayer, commandments, and faith in Jesus when pressure rises.',
    10,
    'Revelation 14:12 · Luke 18:1 · Luke 18:7 to 8 · 1 Peter 5:8',
    18
  ),
  (
    'd3000007-0000-4000-8000-000000000119',
    'e4000001-0000-4000-8000-000000000020',
    'the-commandments-of-god',
    'The Commandments of God',
    'Love and obedience: God''s law, the heart, Revelation''s faithful, and life that answers love.',
    10,
    'Revelation 14:12 · Revelation 12:17 · Ecclesiastes 12:13 · John 14:15',
    19
  ),
  (
    'd3000007-0000-4000-8000-000000000120',
    'e4000001-0000-4000-8000-000000000020',
    'the-faith-of-jesus',
    'The Faith of Jesus',
    'Commandments and the faith of Jesus: grace, active faith, and Christ at the center.',
    10,
    'Revelation 14:12 · Ephesians 2:8 to 10 · James 2:17 · Galatians 2:20',
    20
  ),
  (
    'd3000007-0000-4000-8000-000000000121',
    'e4000001-0000-4000-8000-000000000020',
    'the-remnant-of-her-seed',
    'The Remnant of Her Seed',
    'Spiritual Israel worldwide: the woman, Christ the Seed, commandments, and the testimony of Jesus.',
    10,
    'Revelation 12:17 · Genesis 3:15 · Galatians 3:16 · Galatians 3:29',
    21
  ),
  (
    'd3000007-0000-4000-8000-000000000122',
    'e4000001-0000-4000-8000-000000000020',
    'the-144000',
    'The 144,000',
    'Sealed and standing: the 144,000, victory over the beast, and following the Lamb.',
    10,
    'Revelation 7:3 · Revelation 14:1 · Revelation 14:4 to 5 · Revelation 15:2 to 3',
    22
  ),
  (
    'd3000007-0000-4000-8000-000000000123',
    'e4000001-0000-4000-8000-000000000020',
    'the-testimony-of-jesus',
    'The Testimony of Jesus',
    'Spirit of prophecy, testing by Scripture, and guidance that exalts Christ and prepares for His return.',
    10,
    'Revelation 12:17 · Revelation 19:10 · Revelation 22:8 to 9 · 1 Thessalonians 5:20 to 21',
    23
  ),
  (
    'd3000007-0000-4000-8000-000000000124',
    'e4000001-0000-4000-8000-000000000020',
    'the-harvest-of-the-earth-is-ripe',
    'The Harvest of the Earth Is Ripe',
    'From the three angels to the harvest: ripening character, latter rain, and loyalty before Christ returns.',
    10,
    'Revelation 14:14 to 16 · Revelation 14:18 to 19 · Matthew 13:30',
    24
  ),
  (
    'd3000007-0000-4000-8000-000000000125',
    'e4000001-0000-4000-8000-000000000020',
    'come-out-of-her-my-people',
    'Come Out of Her My People',
    'Mercy before judgment: Babylon''s fall, hearing Christ''s voice, and the call to come out to Him.',
    10,
    'Revelation 18:1 to 4 · John 10:27 · Revelation 14:12',
    25
  ),
  (
    'd3000007-0000-4000-8000-000000000501',
    'e4000001-0000-4000-8000-000000000050',
    'the-right-to-the-tree-of-life',
    'The Right to the Tree of Life',
    'Creation and conditional life: the tree of life, dependence on God, and eternal life as His gift in Christ, from Genesis and Romans.',
    10,
    'Genesis 2:7 · Genesis 2:9 · Genesis 3:22 to 24 · Romans 6:23',
    1
  ),
  (
    'd3000007-0000-4000-8000-000000000502',
    'e4000001-0000-4000-8000-000000000050',
    'rachels-departing-soul',
    'Rachel''s Departing Soul',
    'Understand the biblical meaning of soul, spirit, breath, and life through Genesis 35:18 and related passages.',
    12,
    'Genesis 35:18 · Genesis 2:7 · Ecclesiastes 12:7 · James 2:26',
    2
  ),
  (
    'd3000007-0000-4000-8000-000000000503',
    'e4000001-0000-4000-8000-000000000050',
    'a-thief-and-a-witch',
    'A Thief and a Witch',
    'The thief on the cross, Paradise, John 20:17, the witch of Endor, and reading by clear Scripture, not appearances.',
    12,
    'Luke 23:42 to 43 · John 20:17 · 1 Samuel 28:13 to 14 · Deuteronomy 18:10 to 12',
    3
  ),
  (
    'd3000007-0000-4000-8000-000000000504',
    'e4000001-0000-4000-8000-000000000050',
    'absent-from-the-body',
    'Absent from the Body',
    '2 Corinthians 5, the tent, the building, being clothed, and resurrection hope with 1 Corinthians 15.',
    12,
    '2 Corinthians 5:1 · 2 Corinthians 5:4 · 2 Corinthians 5:8 to 10 · 1 Corinthians 15:52 to 54',
    4
  ),
  (
    'd3000007-0000-4000-8000-000000000505',
    'e4000001-0000-4000-8000-000000000050',
    'pauls-desire-to-depart',
    'Paul''s Desire to Depart',
    'Paul, departure, the return of Christ, and why the next moment for the believer is resurrection hope.',
    11,
    'Philippians 1:21 to 23 · 2 Timothy 4:6 to 8 · 1 Thessalonians 4:16 to 17',
    5
  ),
  (
    'd3000007-0000-4000-8000-000000000506',
    'e4000001-0000-4000-8000-000000000050',
    'the-souls-under-the-altar',
    'The Souls Under the Altar',
    'Revelation 6, sanctuary imagery, martyrs, blood, justice, and Scripture explaining Scripture.',
    12,
    'Revelation 6:9 to 11 · Genesis 4:10 · Leviticus 17:11',
    6
  ),
  (
    'd3000007-0000-4000-8000-000000000507',
    'e4000001-0000-4000-8000-000000000050',
    'the-spirits-of-just-men',
    'The Spirits of Just Men',
    'Hebrews 12, the assembly above, Christ the mediator, the new covenant, and spirits of just men made perfect.',
    12,
    'Hebrews 12:22 to 24 · Hebrews 11:39 to 40 · Hebrews 10:14',
    7
  ),
  (
    'd3000007-0000-4000-8000-000000000508',
    'e4000001-0000-4000-8000-000000000050',
    'preaching-to-the-spirits-in-prison',
    'Preaching to the Spirits in Prison',
    '1 Peter 3, Noah, the Spirit, preaching, resurrection, and Christ''s victory in context.',
    12,
    '1 Peter 3:18 to 20 · 2 Peter 2:5 · Genesis 6:3',
    8
  ),
  (
    'd3000007-0000-4000-8000-000000000509',
    'e4000001-0000-4000-8000-000000000050',
    'three-doctrines-that-belong-together',
    'Three Doctrines That Belong Together',
    'Judgment, the state of the dead, the second coming, and keeping those doctrines with Scripture together.',
    11,
    'Genesis 2:7 · Ecclesiastes 12:7 · Daniel 12:2 · 2 Corinthians 5:10 · Revelation 22:12',
    9
  ),
  (
    'd3000007-0000-4000-8000-000000000510',
    'e4000001-0000-4000-8000-000000000050',
    'the-dead-who-stand-before-god',
    'The Dead Who Stand Before God',
    'Revelation 20, the judgment books, the millennium, resurrection, the second death, and Hades.',
    12,
    'Revelation 20:11 to 12 · Revelation 20:13 to 15 · Daniel 7:10',
    10
  ),
  (
    'd3000007-0000-4000-8000-000000000511',
    'e4000001-0000-4000-8000-000000000050',
    'the-resurrection-and-the-life',
    'The Resurrection and the Life',
    'John 11, Lazarus, resurrection, Christ over death, and the tie to the rich man and Lazarus in Luke 16.',
    12,
    'John 11:11 to 14 · John 11:23 to 26 · John 11:43 to 44',
    11
  ),
  (
    'd3000007-0000-4000-8000-000000000512',
    'e4000001-0000-4000-8000-000000000050',
    'the-keys-of-hades',
    'The Keys of Hades',
    'Sheol, Hades, the grave, translation, resurrection, and Christ''s authority over death.',
    12,
    'Psalm 16:10 · Acts 2:27 · Hosea 13:14 · 1 Corinthians 15:54 to 55 · Revelation 1:18',
    12
  ),
  (
    'd3000007-0000-4000-8000-000000000513',
    'e4000001-0000-4000-8000-000000000050',
    'the-rich-man-and-lazarus',
    'The Rich Man and Lazarus',
    'Luke 16, the Pharisees, parable, Moses and the prophets, resurrection, and Scripture as enough.',
    12,
    'Luke 16:19 to 21 · Luke 16:29 to 31 · John 11:43 to 44',
    13
  ),
  (
    'd3000007-0000-4000-8000-000000000514',
    'e4000001-0000-4000-8000-000000000050',
    'all-live-to-him',
    'All Live to Him',
    'Luke 20, the Sadducees, the God of Abraham, Isaac, and Jacob, resurrection, and all live to Him.',
    11,
    'Luke 20:37 to 38 · Matthew 22:29 · Acts 23:8 · Hebrews 11:13',
    14
  ),
  (
    'd3000007-0000-4000-8000-000000000515',
    'e4000001-0000-4000-8000-000000000050',
    'the-worm-and-the-fire',
    'The Worm and the Fire',
    'Everlasting fire, unquenchable fire, the worm, final destruction, and God as just and good.',
    12,
    'Matthew 25:41 · Matthew 25:46 · Mark 9:43 to 44 · Jude 7 · 2 Peter 2:6',
    15
  ),
  (
    'd3000007-0000-4000-8000-000000000516',
    'e4000001-0000-4000-8000-000000000050',
    'immortality-or-resurrection',
    'Immortality or Resurrection?',
    'Natural immortality versus resurrection: 1 Corinthians 15, athanasia, and Christ as the giver of life.',
    12,
    '1 Corinthians 15:16 to 18 · 1 Corinthians 15:20 to 22 · 2 Timothy 1:10 · 1 Timothy 6:15 to 16',
    16
  ),
  (
    'd3000007-0000-4000-8000-000000000517',
    'e4000001-0000-4000-8000-000000000050',
    'the-first-lie',
    'The First Lie',
    'Genesis 3, mot tamut, Satan, the senses, and holding to what God has said in His Word.',
    12,
    'Genesis 2:16 to 17 · Genesis 3:1 · Genesis 3:4 to 5 · Genesis 3:6',
    17
  ),
  (
    'd3000007-0000-4000-8000-000000000518',
    'e4000001-0000-4000-8000-000000000050',
    'spirits-of-devils',
    'Spirits of Devils',
    'Revelation 16, daimonia, false signs, Isaiah 8, and Scripture as the test of every spirit.',
    12,
    'Revelation 16:13 to 14 · Matthew 24:23 to 25 · Isaiah 8:19 to 20',
    18
  ),
  (
    'd3000007-0000-4000-8000-000000000801',
    'e4000001-0000-4000-8000-000000000072',
    'more-than-mere-survival',
    'More Than Mere Survival',
    'Introduce the question of human identity and show that Scripture gives humanity dignity beyond survival.',
    10,
    'Psalm 8:3 to 5 · Genesis 1:1',
    1
  ),
  (
    'd3000007-0000-4000-8000-000000000802',
    'e4000001-0000-4000-8000-000000000072',
    'created-in-gods-image',
    'Created in God''s Image',
    'Explain Genesis 1:26 to 28 and show that every human life carries God-given dignity and purpose.',
    10,
    'Genesis 1:26 to 28 · Genesis 5:1 to 2 · James 3:9',
    2
  ),
  (
    'd3000007-0000-4000-8000-000000000803',
    'e4000001-0000-4000-8000-000000000072',
    'made-for-relationship',
    'Made for Relationship',
    'Show that being made in God''s image includes the capacity for love, relationship, and community.',
    11,
    'Genesis 1:27 · 1 John 4:16',
    3
  ),
  (
    'd3000007-0000-4000-8000-000000000804',
    'e4000001-0000-4000-8000-000000000072',
    'free-moral-agents',
    'Free Moral Agents',
    'Explain why love requires freedom and why God created humans with meaningful choice.',
    10,
    'Deuteronomy 30:19 · Joshua 24:15 · Genesis 2:16 to 17 · John 14:15',
    4
  ),
  (
    'd3000007-0000-4000-8000-000000000805',
    'e4000001-0000-4000-8000-000000000072',
    'why-every-life-matters',
    'Why Every Life Matters',
    'Show that every person is seen, known, valued, and significant to God.',
    11,
    'Psalm 139:1 to 14 · Matthew 10:29 to 31 · Acts 17:26 to 28',
    5
  ),
  (
    'd3000007-0000-4000-8000-000000000806',
    'e4000001-0000-4000-8000-000000000072',
    'jesus-the-true-image',
    'Jesus, the True Image',
    'Show that Jesus reveals both God''s character and what humanity was created to be.',
    10,
    'Colossians 1:15 · Hebrews 1:3 · 2 Corinthians 4:4',
    6
  ),
  (
    'd3000007-0000-4000-8000-000000000807',
    'e4000001-0000-4000-8000-000000000072',
    'restored-into-his-image',
    'Restored Into His Image',
    'Show that God''s purpose is to restore His image in us as we behold Christ.',
    10,
    '2 Corinthians 3:18 · 1 Corinthians 15:49 · Romans 8:29',
    7
  );

insert into public.lessons (
  id, study_series_id, slug, title, summary, duration_minutes, scripture, sort_order
) values (
  'd3000007-0000-4000-8000-000000000831',
  'e4000001-0000-4000-8000-000000000073',
  'a-conflict-bigger-than-earth',
  'A Conflict Bigger Than Earth',
  'The Bible introduces a cosmic conflict between good and evil that reaches beyond humanity and into the unseen spiritual world.',
  8,
  'Revelation 12:7 · Ephesians 6:12 · Hebrews 1:14',
  1
),
(
  'd3000007-0000-4000-8000-000000000832',
  'e4000001-0000-4000-8000-000000000073',
  'the-rise-of-lucifer',
  'The Rise of Lucifer',
  'Lucifer was created good, beautiful, and close to God, but pride and self-exaltation led to rebellion.',
  8,
  'Isaiah 14:12 to 14 · Ezekiel 28:12 to 17',
  2
),
(
  'd3000007-0000-4000-8000-000000000833',
  'e4000001-0000-4000-8000-000000000073',
  'the-war-over-gods-character',
  'The War Over God''s Character',
  'The conflict in heaven was not mainly physical. It was a battle over truth, trust, and the character of God.',
  8,
  'Revelation 12:9 · John 8:44 · Romans 13:10',
  3
),
(
  'd3000007-0000-4000-8000-000000000834',
  'e4000001-0000-4000-8000-000000000073',
  'why-evil-and-suffering-exist',
  'Why Evil and Suffering Exist',
  'The Bible explains evil through the misuse of freedom and the rejection of God''s love.',
  8,
  '1 John 4:8 · Matthew 22:37 to 40 · Ecclesiastes 7:29',
  4
),
(
  'd3000007-0000-4000-8000-000000000835',
  'e4000001-0000-4000-8000-000000000073',
  'love-freedom-and-risk',
  'Love, Freedom, and Risk',
  'Love requires freedom, and freedom introduces the possibility of rebellion, selfishness, and pain.',
  8,
  'Galatians 5:22 to 23 · James 1:17 · Matthew 13:28',
  5
),
(
  'd3000007-0000-4000-8000-000000000836',
  'e4000001-0000-4000-8000-000000000073',
  'jesus-enters-the-battle',
  'Jesus Enters the Battle',
  'Jesus came to reveal the truth about God and confront evil through self-giving love.',
  8,
  'Luke 11:21 to 22 · 1 John 3:8 · John 13:34',
  6
),
(
  'd3000007-0000-4000-8000-000000000837',
  'e4000001-0000-4000-8000-000000000073',
  'the-final-defeat-of-evil',
  'The Final Defeat of Evil',
  'Evil is temporary. Scripture points forward to a restored world where love and truth reign forever.',
  8,
  'Psalm 37:9 · Isaiah 11:9 · Revelation 21:4',
  7
);

insert into public.lessons (
  id, study_series_id, slug, title, summary, duration_minutes, scripture, sort_order
) values (
  'd3000007-0000-4000-8000-000000000841',
  'e4000001-0000-4000-8000-000000000074',
  'the-first-humanity-lie',
  'The First Lie',
  'Explore how Satan introduced deception in Eden by attacking God''s character and questioning His goodness.',
  8,
  'Genesis 3:1 to 5 · Revelation 12:9',
  1
),
(
  'd3000007-0000-4000-8000-000000000842',
  'e4000001-0000-4000-8000-000000000074',
  'when-trust-was-broken',
  'When Trust Was Broken',
  'Discover how sin fractured humanity''s relationship with God and introduced fear, shame, and hiding.',
  7,
  'Genesis 3:6 to 12 · Genesis 3:8 to 10',
  2
),
(
  'd3000007-0000-4000-8000-000000000843',
  'e4000001-0000-4000-8000-000000000074',
  'the-birth-of-shame',
  'The Birth of Shame',
  'Learn how guilt, blame, fear, and self-protection entered the human experience after the Fall.',
  7,
  'Genesis 3:7 to 13 · Romans 3:23',
  3
),
(
  'd3000007-0000-4000-8000-000000000844',
  'e4000001-0000-4000-8000-000000000074',
  'what-sin-really-is',
  'What Sin Really Is',
  'Understand sin not merely as rule-breaking, but as life disconnected from God''s self-giving love.',
  7,
  'Romans 3:23 · 1 John 4:8 · Romans 13:10',
  4
),
(
  'd3000007-0000-4000-8000-000000000845',
  'e4000001-0000-4000-8000-000000000074',
  'how-lies-shape-lives',
  'How Lies Shape Lives',
  'Examine how beliefs influence thoughts, emotions, and actions, and how deception about God reshapes human behavior.',
  7,
  'Proverbs 4:23 · John 8:44 · Genesis 3:6',
  5
),
(
  'd3000007-0000-4000-8000-000000000846',
  'e4000001-0000-4000-8000-000000000074',
  'jesus-reversed-the-fall',
  'Jesus Reversed the Fall',
  'See how Jesus succeeded where humanity failed by fully trusting the Father and remaining faithful in love.',
  7,
  'Matthew 4:4 · Matthew 4:10 · Romans 5:19 · John 8:32',
  6
),
(
  'd3000007-0000-4000-8000-000000000847',
  'e4000001-0000-4000-8000-000000000074',
  'restored-through-truth-and-love',
  'Restored Through Truth and Love',
  'Discover how Jesus restores trust in God and begins healing the perceptual, relational, and moral effects of sin.',
  7,
  'John 17:3 · 1 Timothy 2:4 · 2 Corinthians 5:17 · John 8:32',
  7
);

insert into public.lessons (
  id, study_series_id, slug, title, summary, duration_minutes, scripture, sort_order
) values (
  'd3000007-0000-4000-8000-000000000848',
  'e4000001-0000-4000-8000-000000000075',
  'god-came-looking',
  'God Came Looking',
  'After Adam and Eve sinned, God moved toward them with grace instead of abandoning them in fear and shame.',
  9,
  'Genesis 3:9 to 11 · Romans 5:8',
  1
),
(
  'd3000007-0000-4000-8000-000000000849',
  'e4000001-0000-4000-8000-000000000075',
  'the-first-gospel-promise',
  'The First Gospel Promise',
  'Genesis 3:15 reveals the first promise of a coming Deliverer who would defeat the enemy and rescue humanity.',
  9,
  'Genesis 3:15 · 1 John 3:8 · Hebrews 2:14',
  2
),
(
  'd3000007-0000-4000-8000-000000000850',
  'e4000001-0000-4000-8000-000000000075',
  'the-promised-seed',
  'The Promised Seed',
  'Scripture unfolds the promise of the coming Messiah through the language of the Seed, the One who would bring victory and restoration.',
  9,
  'Genesis 3:15 · Galatians 3:16 · John 12:31 to 32',
  3
),
(
  'd3000007-0000-4000-8000-000000000851',
  'e4000001-0000-4000-8000-000000000075',
  'promise-through-the-prophets',
  'Promise Through the Prophets',
  'The Old Testament carries the promise forward through Moses, David, Isaiah, and the prophets, pointing to the character and mission of the Messiah.',
  9,
  'Isaiah 53:5 · Deuteronomy 18:15 · Psalm 22:1 · Luke 24:27',
  4
),
(
  'd3000007-0000-4000-8000-000000000852',
  'e4000001-0000-4000-8000-000000000075',
  'the-messiah-timeline',
  'The Messiah Timeline',
  'Daniel 9 reveals a prophetic timeline pointing to the appearing, ministry, and sacrifice of the Messiah.',
  9,
  'Daniel 9:25 · Daniel 9:26 to 27 · Ezra 7:13 · Matthew 3:16 to 17',
  5
),
(
  'd3000007-0000-4000-8000-000000000853',
  'e4000001-0000-4000-8000-000000000075',
  'cut-off-not-for-himself',
  'Cut Off, Not for Himself',
  'Daniel foretold that the Messiah would be cut off, not for Himself, revealing the depth of God''s faithful love at the cross.',
  9,
  'Daniel 9:26 · Romans 5:8 · 1 John 3:16 · Matthew 27:46',
  6
),
(
  'd3000007-0000-4000-8000-000000000854',
  'e4000001-0000-4000-8000-000000000075',
  'every-promise-says-yes-in-jesus',
  'Every Promise Says Yes in Jesus',
  'Jesus is the fulfillment of God''s promise of faithful love. In Him, the story of Scripture becomes promise made and promise kept.',
  9,
  '2 Corinthians 1:20 · John 3:16 · John 14:6 · 1 Timothy 2:4',
  7
);

update public.lessons
set reader_content = '{"draftShell": true}'::jsonb
where study_series_id = 'e4000001-0000-4000-8000-000000000075';

-- The Promise Kept — Lesson 1: God Came Looking (full guided reader JSON; overrides draft shell above).
update public.lessons
set reader_content = $tpk_gcl_reader$
{"openingThought":"After humanity sinned, God did not disappear.\n\nHe came looking.\n\nAdam and Eve had believed a lie about God. They were afraid, ashamed, and hiding. But God's first move was not abandonment. It was pursuit.\n\nHe called to Adam, not because He was confused about Adam's location, but because He was drawing him out of hiding.\n\nThat moment tells us something beautiful about God.\n\nEven when humanity ran from Him, He moved toward us.","scriptureRef":"Genesis 3:9","scriptureQuote":"And the LORD God called unto Adam, and said unto him, Where art thou?","scriptureSecondaryRef":"Genesis 3:10 to 11","scriptureSecondaryQuote":"And he said, I heard thy voice in the garden, and I was afraid, because I was naked; and I hid myself.\n\nAnd he said, Who told thee that thou wast naked? Hast thou eaten of the tree, whereof I commanded thee that thou shouldest not eat?","scriptureSupplementBlocks":[{"type":"scripture","reference":"Romans 5:8","quote":"But God commendeth his love toward us, in that, while we were yet sinners, Christ died for us."}],"teachingPoints":["1. God pursued humanity after sin\n\nAdam and Eve hid because sin had filled them with fear and shame.\n\nBut God came near.\n\nHe did not leave them to figure out sin on their own. He called them out of hiding and began the work of rescue.\n\nThis is grace before humanity even knew how to ask for it.","2. God asked questions to reveal the truth\n\nGod asked, \"Where art thou?\" and \"Who told thee?\"\n\nThese questions were not for God's information.\n\nThey were for Adam and Eve's awakening.\n\nGod was helping them see what had happened inside them. Fear had entered. Shame had entered. A false view of God had entered.\n\nGrace does not ignore truth.\n\nGrace brings truth into the light so healing can begin.","3. God's heart was already moving toward redemption\n\nGenesis 3 does not show God panicking.\n\nIt shows God taking initiative.\n\nBefore Adam and Eve could repair anything, God came looking.\n\nBefore they could cover themselves properly, God was preparing a better covering.\n\nBefore they understood the full weight of sin, God was already moving toward the promise of a Savior.","4. The cross proves God's pursuit\n\nRomans 5:8 shows the same pattern on a larger scale.\n\nWhile we were still sinners, Christ died for us.\n\nGod did not wait for humanity to become worthy.\n\nHe moved first.\n\nThe garden shows God coming near after sin.\n\nThe cross shows how far He was willing to go."],"wordStudyBeforeStudyInsight":true,"wordStudyStepTitle":"Word Insight","wordStudyStepIntro":"Listen to what God's voice is doing in Eden.","wordStudy":{"surface":"Called","lemma":"קָרָא (qara)","transliteration":"qara","meaning":"To summon, invite, address, or call out to someone.","strongs":"H7121","reference":"Genesis 3:9","note":"When God called to Adam, it was not the voice of a confused Creator.\n\nIt was the voice of pursuing grace.\n\nGod's question was an invitation out of hiding and into truth.\n\nHe still calls sinners the same way today."},"studyInsight":{"title":"Study Insight","placement":"after_teaching","variant":"christ_connection","body":"The first thing God does after the fall is deeply important.\n\nHe comes looking.\n\nThat means the story of redemption does not begin with humans searching for God.\n\nIt begins with God searching for humans.\n\nThis destroys the idea that God is cold toward sinners.\n\nHe hates sin, but He moves toward the sinner with mercy.\n\nHe exposes the lie, names the wound, and begins the rescue.\n\nThe same heart that called \"Where art thou?\" in Eden is revealed fully in Jesus.\n\nGod comes looking.\n\nGod keeps loving.\n\nGod moves first."},"studyInsightBlocks":[{"type":"studyVisual","title":"God moves toward us","accent":"sage","description":"After sin, humanity hid in fear and shame. God called, came near, and began rescue.","payload":{"variant":"comparison","leftTitle":"Humanity","rightTitle":"God","leftItems":["Sin","Fear","Shame","Hiding"],"rightItems":["Calls","Comes near","Reveals truth","Promises rescue"]}},{"type":"scriptureChain","title":"God Moves First","references":[{"reference":"Genesis 3:9"},{"reference":"Genesis 3:10 to 11"},{"reference":"Romans 5:8"},{"reference":"Luke 19:10"}]},{"type":"paragraph","text":"Takeaway: After sin entered, God moved toward humanity with truth, grace, and the promise of rescue."}],"reflectPrompt":"When you feel ashamed or distant from God, do you imagine Him moving toward you or away from you?\n\nBe honest. Your answer may reveal what picture of God you carry when you feel spiritually exposed.","lifeApplicationStepTitle":"Life Application and Prayer","lifeApplication":"This week, when you feel the urge to hide from God, remember the question:\n\n\"Where art thou?\"\n\nDo not hear it as condemnation.\n\nHear it as invitation.\n\nGod is not asking because He has lost you.\n\nHe is asking because He wants you to stop hiding and come into the light.\n\nTry praying one honest sentence:\n\n\"Lord, this is where I am.\"\n\nThat is enough to begin.\n\nPrayer:\n\nFather, thank You for coming near when humanity ran. Thank You for seeking sinners instead of abandoning us. Help me stop hiding from You. Teach me to hear Your voice as an invitation to healing, not condemnation. Bring me into the light of Your truth and the safety of Your love. Amen.","prayer":"","completionSummary":"God came looking when humanity hid. His first move after sin was not abandonment, but pursuing grace.","lessonQuiz":{"eyebrow":"CHECK YOUR UNDERSTANDING","title":"Quick Review","description":"Check your understanding before moving on.","settings":{"quizRequired":false,"passingScore":70,"allowRetake":true},"questions":[{"id":"tpk-l1-q1","prompt":"What did God ask Adam in Genesis 3:9?","options":["\"Where art thou?\"","\"Why are you stronger?\"","\"Who created the serpent?\"","\"Where is the garden?\""],"correctIndex":0,"explanation":"Genesis 3:9 says God called to Adam and asked, \"Where art thou?\" This was an invitation out of hiding."},{"id":"tpk-l1-q2","prompt":"Why did Adam say he hid?","options":["Because he was afraid and naked","Because he was hungry","Because he forgot God's name","Because the garden was too large"],"correctIndex":0,"explanation":"Genesis 3:10 says Adam hid because he was afraid and naked, showing the effects of fear and shame."},{"id":"tpk-l1-q3","prompt":"What does Romans 5:8 reveal about God's love?","options":["Christ died for us while we were still sinners","God waited until humanity became perfect","God stopped loving after the fall","Humanity rescued itself"],"correctIndex":0,"explanation":"Romans 5:8 shows that God moved toward us in love while we were still sinners."},{"id":"tpk-l1-q4","prompt":"What is the main point of this lesson?","options":["God moves toward sinners with truth and grace","God abandons people when they fail","Shame is stronger than grace","Adam found God first"],"correctIndex":0,"explanation":"The lesson shows that God's first move after sin was pursuit, not abandonment."},{"id":"tpk-l1-q5","kind":"reflection","prompt":"What would change if you believed God's voice was calling you out of hiding, not pushing you away?","explanation":"God's question to Adam reveals His pursuing grace. He calls sinners into truth so healing can begin."}]}}
$tpk_gcl_reader$::jsonb
where slug = 'god-came-looking'
  and study_series_id = 'e4000001-0000-4000-8000-000000000075';

-- The Promise Kept — Lesson 2: The First Gospel Promise (full guided reader JSON).
update public.lessons
set reader_content = $tpk_l2_reader$
{"openingThought":"The first promise of Jesus was given in the ruins.\n\nAdam and Eve had sinned. Fear had entered. Shame had entered. The serpent had deceived humanity. Everything looked broken.\n\nBut God spoke hope before humanity could fix anything.\n\nGenesis 3:15 is often called the first gospel promise because it points forward to a coming Deliverer.\n\nGod promised that evil would not have the final word.\n\nA child would come.\nThe enemy would be defeated.\nThe Savior would be wounded, but victorious.","scriptureRef":"Genesis 3:15","scriptureQuote":"And I will put enmity between thee and the woman, and between thy seed and her seed; it shall bruise thy head, and thou shalt bruise his heel.","scriptureSecondaryRef":"1 John 3:8","scriptureSecondaryQuote":"For this purpose the Son of God was manifested, that he might destroy the works of the devil.","scriptureSupplementBlocks":[{"type":"scripture","reference":"Hebrews 2:14","quote":"That through death he might destroy him that had the power of death, that is, the devil."}],"teachingPoints":["1. God promised conflict against evil\n\nGod said He would put enmity between the serpent and the woman.\n\nEnmity means hostility or opposition.\n\nThis is mercy.\n\nAfter sin, humanity was naturally bent toward distrust and rebellion. But God promised to place within humanity a resistance against evil and a longing for restoration.\n\nEven our hatred of evil is a sign that God has not abandoned us.","2. God promised a coming Seed\n\nGenesis 3:15 speaks of the woman's Seed.\n\nThis points forward to a coming Deliverer from the human family.\n\nThe rescue would not come from human strength alone.\n\nGod Himself would bring salvation through the promised One.\n\nThe rest of Scripture keeps tracing this promise until it reaches Jesus.","3. The enemy would be defeated\n\nGod said the Seed would bruise the serpent's head.\n\nA wound to the head points to decisive victory.\n\nThe serpent would not rule forever.\n\nThe enemy who deceived humanity would one day be conquered.\n\nJesus came to destroy the works of the devil.","4. The Savior would be wounded\n\nThe promise also says the serpent would bruise the Seed's heel.\n\nThis points to suffering.\n\nJesus would defeat evil, but He would do it through sacrifice.\n\nAt the cross, Christ was wounded for us.\n\nBut His wound became our victory."],"wordStudyBeforeStudyInsight":true,"wordStudyStepTitle":"Word Insight","wordStudyStepIntro":"Notice what God placed between humanity and evil.","wordStudy":{"surface":"Enmity","lemma":"אֵיבָה (evah)","transliteration":"evah","meaning":"Hostility, opposition, or deep conflict between two sides.","strongs":"H342","reference":"Genesis 3:15","note":"Enmity in Genesis 3:15 is not bad news.\n\nIt is grace.\n\nGod placed opposition between humanity and evil so that sin would not fully own the human heart.\n\nThe desire to resist darkness and long for restoration is evidence that God is still working."},"studyInsight":{"title":"Study Insight","placement":"after_teaching","variant":"christ_connection","body":"Genesis 3:15 is one of the most important promises in Scripture.\n\nIt is the first gospel announcement.\n\nBefore there was a nation of Israel, a temple, a cross, or a New Testament, there was this promise:\n\nSomeone is coming.\n\nThat promise carries the whole Bible forward.\n\nThe prophets expand it.\nThe sacrifices symbolize it.\nThe covenants preserve it.\nThe Gospels reveal it.\nThe cross fulfills it.\n\nJesus is the promised Seed.\n\nHe entered our humanity, faced the enemy, suffered for sin, and defeated the one who held humanity in bondage.\n\nThe promise was made in Eden.\n\nThe promise was kept in Christ."},"studyInsightBlocks":[{"type":"studyVisual","title":"From Eden to the cross","accent":"stone","description":"One promise runs through Scripture until it rests in Christ.","payload":{"variant":"sequence","steps":[{"label":"Eden","subtitle":"Promise given"},{"label":"Old Testament","subtitle":"Promise carried"},{"label":"Jesus","subtitle":"Promise fulfilled"},{"label":"Cross","subtitle":"Enemy defeated"}]}},{"type":"scriptureChain","title":"The First Gospel Promise","references":[{"reference":"Genesis 3:15"},{"reference":"1 John 3:8"},{"reference":"Hebrews 2:14"},{"reference":"Colossians 2:15"}]},{"type":"paragraph","text":"Takeaway: God promised a Deliverer who would defeat the enemy. Jesus is that promised One."}],"reflectPrompt":"How does it change the way you see God to know He gave a promise of rescue immediately after humanity fell?\n\nThink about what this reveals about God's patience, mercy, and commitment to saving us.","lifeApplicationStepTitle":"Life Application and Prayer","lifeApplication":"This week, remember that God's grace speaks before you have everything fixed.\n\nAdam and Eve had no plan.\nNo solution.\nNo way to undo what they had done.\n\nBut God gave a promise.\n\nWhen you feel like you have failed too badly, return to this truth:\n\nGod moves toward sinners with a promise of rescue.\n\nYour hope is not in your ability to repair yourself.\n\nYour hope is in the Promised One.\n\nPrayer:\n\nFather, thank You for giving hope immediately after humanity fell. Thank You for promising a Deliverer before we knew how to ask for rescue. Help me trust Jesus as the promised One who defeats evil, breaks bondage, and brings me back to You. Amen.","prayer":"","completionSummary":"The first gospel promise was given in Eden. Humanity had fallen, but God promised a Deliverer. Jesus is the promise kept.","lessonQuiz":{"eyebrow":"CHECK YOUR UNDERSTANDING","title":"Quick Review","description":"Check your understanding before moving on.","settings":{"quizRequired":false,"passingScore":70,"allowRetake":true},"questions":[{"id":"tpk-l2-q1","prompt":"What is Genesis 3:15 often called?","options":["The first gospel promise","The last commandment","The first parable","The final judgment"],"correctIndex":0,"explanation":"Genesis 3:15 is often called the first gospel promise because it points forward to a coming Deliverer."},{"id":"tpk-l2-q2","prompt":"What does \"enmity\" mean in this lesson?","options":["Hostility or opposition","Forgetfulness","Celebration","Silence"],"correctIndex":0,"explanation":"Enmity means hostility or opposition. In Genesis 3:15, it describes God placing conflict between humanity and evil."},{"id":"tpk-l2-q3","prompt":"Who is the promised Seed ultimately pointing to?","options":["Jesus","Pharaoh","Cain","Pilate"],"correctIndex":0,"explanation":"The promised Seed ultimately points to Jesus, the Deliverer who defeats the enemy and rescues humanity."},{"id":"tpk-l2-q4","prompt":"According to 1 John 3:8, why was the Son of God manifested?","options":["To destroy the works of the devil","To hide God's character","To make sin harmless","To avoid suffering"],"correctIndex":0,"explanation":"1 John 3:8 says Jesus was manifested to destroy the works of the devil."},{"id":"tpk-l2-q5","kind":"reflection","prompt":"What part of Genesis 3:15 gives you the most hope?","explanation":"Genesis 3:15 shows that God promised rescue before humanity could fix itself. The hope of Scripture begins with God's initiative."}]}}
$tpk_l2_reader$::jsonb
where slug = 'the-first-gospel-promise'
  and study_series_id = 'e4000001-0000-4000-8000-000000000075';

-- The Promise Kept — Lesson 3: The Promised Seed (full guided reader JSON).
update public.lessons
set reader_content = $tpk_l3_reader$
{"openingThought":"God's promise in Eden did not disappear.\n\nIt began to move through history.\n\nGenesis 3:15 spoke of a coming Seed, a promised Deliverer who would defeat the serpent. From that moment forward, Scripture begins tracing the promise.\n\nThe Bible is not a random collection of spiritual stories.\n\nIt is a rescue story.\n\nAgain and again, God keeps narrowing our attention toward the One who would come from humanity, enter our brokenness, and defeat the enemy on our behalf.\n\nThat promised Seed is Jesus.","scriptureRef":"Galatians 3:16","scriptureQuote":"Now to Abraham and his seed were the promises made. He saith not, And to seeds, as of many; but as of one, And to thy seed, which is Christ.","scriptureSecondaryRef":"Genesis 3:15","scriptureSecondaryQuote":"And I will put enmity between thee and the woman, and between thy seed and her seed.","scriptureSupplementBlocks":[{"type":"scripture","reference":"John 12:31 to 32","quote":"Now shall the prince of this world be cast out.\n\nAnd I, if I be lifted up from the earth, will draw all men unto me."},{"type":"scripture","reference":"Hebrews 2:14","quote":"That through death he might destroy him that had the power of death, that is, the devil."}],"teachingPoints":["1. The promise centered on a Person\n\nGenesis 3:15 promised a Seed.\n\nGalatians 3:16 identifies the promised Seed as Christ.\n\nThis means the hope of humanity was never just a system, a nation, or a moral code.\n\nThe hope was a Person.\n\nGod promised to send someone who would enter the human family and defeat the enemy from within the human story.","2. Jesus came through the human family\n\nThe promised Seed would come from humanity.\n\nThat matters.\n\nJesus did not save us from a distance. He entered our world, our weakness, our suffering, and our history.\n\nHe became truly human while remaining truly divine.\n\nThe Rescuer came close enough to carry what we could not carry.","3. The promised Seed would confront the enemy\n\nJohn 12 speaks of the prince of this world being cast out.\n\nHebrews 2 says Jesus destroys the one who had the power of death through His own death.\n\nThe promised Seed did not come merely to inspire people.\n\nHe came to defeat the enemy, break bondage, and open the way back to God.","4. The victory came through sacrifice\n\nGenesis 3:15 said the serpent would bruise the heel of the Seed.\n\nThat points to suffering.\n\nJesus' victory came through the cross.\n\nHe was wounded, but not defeated.\n\nHe died, but rose again.\n\nThe enemy struck Him, but Christ crushed the enemy's power."],"wordStudyBeforeStudyInsight":true,"wordStudyStepTitle":"Word Insight","wordStudyStepIntro":"Trace how Scripture narrows \"seed\" until it names Christ.","wordStudy":{"surface":"Seed","lemma":"זֶרַע (zera)","transliteration":"zera","meaning":"Offspring, descendant, or one who comes from a family line.","strongs":"H2233","reference":"Genesis 3:15","note":"In Genesis 3:15, the Seed points forward to the coming Deliverer.\n\nThe promise becomes clearer through Scripture until Paul identifies the Seed as Christ.\n\nJesus is the promised descendant who enters humanity to rescue humanity."},"studyInsight":{"title":"Study Insight","placement":"after_teaching","variant":"christ_connection","body":"The Bible carries one promise forward across generations.\n\nFrom Eden to Abraham.\nFrom Abraham to Israel.\nFrom Israel to David.\nFrom David to the prophets.\nFrom the prophets to Christ.\n\nThe promise keeps moving until it arrives in Jesus.\n\nThis matters because Christianity is not built on vague hope.\n\nIt is built on God keeping His word.\n\nJesus is not a backup plan.\n\nHe is the promised One.\n\nThe cross was not a failure of the promise.\n\nIt was the way the promise was fulfilled.\n\nThrough His death and resurrection, Jesus defeated the enemy and opened the way for humanity to be restored."},"studyInsightBlocks":[{"type":"studyVisual","title":"The promise moves toward Christ","accent":"sage","description":"From Eden through Israel's story to the promised Seed.","payload":{"variant":"sequence","steps":[{"label":"Eden","subtitle":""},{"label":"Abraham","subtitle":""},{"label":"Israel","subtitle":""},{"label":"David","subtitle":""},{"label":"Prophets","subtitle":""},{"label":"Jesus","subtitle":""}]}},{"type":"scriptureChain","title":"The Promised Seed","references":[{"reference":"Genesis 3:15"},{"reference":"Galatians 3:16"},{"reference":"John 12:31 to 32"},{"reference":"Hebrews 2:14"}]},{"type":"paragraph","text":"Takeaway: The promised Seed is Jesus, who entered humanity to defeat the enemy and restore us to God."}],"reflectPrompt":"What does it mean to you that Jesus entered the human family to rescue humanity from within our own story?\n\nThink about the closeness of God's rescue. Jesus did not stay distant from our weakness, pain, or history.","lifeApplicationStepTitle":"Life Application and Prayer","lifeApplication":"This week, remember that God's promises may unfold over time, but they do not fail.\n\nThe promise of the Seed began in Eden and moved through generations before being fulfilled in Christ.\n\nThat means delay is not the same as denial.\n\nGod can be trusted even when the promise takes time.\n\nWhen you feel impatient or discouraged, pray:\n\n\"Lord, help me trust Your promise while I wait.\"\n\nThe God who kept His promise in Jesus can be trusted with your life too.\n\nPrayer:\n\nFather, thank You for sending Jesus as the promised Seed. Thank You that He entered our humanity, faced the enemy, and opened the way back to You. Help me trust that Your promises are faithful, even when they unfold slowly. Keep my hope anchored in Christ. Amen.","prayer":"","completionSummary":"The promise moved through history until it reached Jesus. He is the promised Seed who entered humanity, defeated the enemy, and opened the way back to God.","lessonQuiz":{"eyebrow":"CHECK YOUR UNDERSTANDING","title":"Quick Review","description":"Check your understanding before moving on.","settings":{"quizRequired":false,"passingScore":70,"allowRetake":true},"questions":[{"id":"tpk-l3-q1","prompt":"According to Galatians 3:16, who is the promised Seed?","options":["Christ","Pharaoh","Caesar","Goliath"],"correctIndex":0,"explanation":"Galatians 3:16 identifies the promised Seed as Christ."},{"id":"tpk-l3-q2","prompt":"Why does it matter that Jesus entered the human family?","options":["He came close to rescue humanity from within our story","He avoided human weakness completely","He stayed distant from suffering","He only appeared as an angel"],"correctIndex":0,"explanation":"Jesus entered humanity to carry our burden, defeat the enemy, and restore us to God."},{"id":"tpk-l3-q3","prompt":"What does Hebrews 2:14 say Jesus destroyed through death?","options":["Him that had the power of death, the devil","The need for love","God's law","Human value"],"correctIndex":0,"explanation":"Hebrews 2:14 says Jesus destroyed the one who had the power of death, that is, the devil."},{"id":"tpk-l3-q4","prompt":"What does this lesson teach about the cross?","options":["It was the fulfillment of the promise","It was a surprise failure","It ended God's love","It showed Satan was stronger"],"correctIndex":0,"explanation":"The cross was not the failure of the promise. It was the way Jesus fulfilled the promise and defeated the enemy."},{"id":"tpk-l3-q5","kind":"reflection","prompt":"Where do you need to trust God's promise even when the timing feels slow?","explanation":"The promise of the Seed unfolded over time, but God kept His word in Jesus. His timing may stretch us, but His promises do not fail."}]}}
$tpk_l3_reader$::jsonb
where slug = 'the-promised-seed'
  and study_series_id = 'e4000001-0000-4000-8000-000000000075';

-- The Promise Kept — Lesson 4: Promise Through the Prophets (full guided reader JSON).
update public.lessons
set reader_content = $tpk_l4_reader$
{"openingThought":"God did not give one promise and then go silent.\n\nAfter Eden, He kept speaking.\n\nThrough prophets, patterns, sacrifices, songs, and symbols, God kept pointing forward to the One who would come.\n\nThe Old Testament is not just a record of ancient history. It is a promise moving toward fulfillment.\n\nMoses pointed forward.\nDavid sang forward.\nIsaiah saw forward.\nThe prophets kept the hope alive.\n\nGod was preparing the world to recognize Jesus.","scriptureRef":"Isaiah 53:5","scriptureQuote":"But he was wounded for our transgressions, he was bruised for our iniquities.","scriptureSecondaryRef":"Deuteronomy 18:15","scriptureSecondaryQuote":"The LORD thy God will raise up unto thee a Prophet from the midst of thee, of thy brethren, like unto me.","scriptureSupplementBlocks":[{"type":"scripture","reference":"Psalm 22:1","quote":"My God, my God, why hast thou forsaken me?"},{"type":"scripture","reference":"Luke 24:27","quote":"And beginning at Moses and all the prophets, he expounded unto them in all the scriptures the things concerning himself."}],"teachingPoints":["1. Moses pointed to a coming Prophet\n\nIn Deuteronomy 18, Moses spoke of a Prophet who would come from among the people.\n\nThis promised Prophet would speak for God and call people to listen.\n\nJesus fulfills this hope.\n\nHe does not merely speak messages from God.\n\nHe is the Word made flesh, revealing God clearly.","2. David's songs pointed to the suffering Messiah\n\nPsalm 22 gives language that later echoes at the cross.\n\n\"My God, my God, why hast thou forsaken me?\"\n\nDavid's suffering became prophetic language that helped reveal the deeper suffering of Christ.\n\nThe Messiah would not come untouched by pain.\n\nHe would enter suffering to redeem us.","3. Isaiah revealed the wounded Servant\n\nIsaiah 53 shows the Messiah as a suffering Servant.\n\nHe is wounded for transgressions.\nBruised for iniquities.\nBearing what belongs to others.\n\nThis is not random tragedy.\n\nIt is self-giving love.\n\nJesus carries the wound humanity caused so humanity can receive the healing God gives.","4. Jesus is the center of the prophetic promise\n\nLuke 24 says Jesus explained the things concerning Himself from Moses and the prophets.\n\nThat means the Old Testament is not disconnected from Jesus.\n\nIt points to Him.\n\nThe promise grows clearer until Christ stands at the center of the whole story."],"wordStudyBeforeStudyInsight":true,"wordStudyStepTitle":"Word Insight","wordStudyStepIntro":"A prophet carries God's message. Christ carries something more.","wordStudy":{"surface":"Prophet","lemma":"נָבִיא (nabi)","transliteration":"nabi","meaning":"One who speaks God's message and reveals God's will.","strongs":"H5030","reference":"Deuteronomy 18:15","note":"Jesus is greater than every prophet before Him.\n\nThe prophets spoke about God.\n\nJesus reveals God.\n\nThe prophets carried the promise.\n\nJesus is the promise fulfilled."},"studyInsight":{"title":"Study Insight","placement":"after_teaching","variant":"christ_connection","body":"The Old Testament gives us many windows into the mission of Jesus.\n\nThrough Moses, we see the coming Prophet.\n\nThrough David, we hear the cry of suffering.\n\nThrough Isaiah, we see the wounded Servant.\n\nThrough the sacrifices, we see the cost of sin and the need for a substitute.\n\nThrough the prophets, we see God's promise becoming clearer.\n\nThis matters because Jesus did not appear without context.\n\nHe came exactly where Scripture had been pointing.\n\nGod's promise was not vague.\n\nIt was woven into the story, generation after generation.\n\nThe more we read Scripture, the more we see that Jesus was always the center."},"studyInsightBlocks":[{"type":"studyVisual","title":"Prophetic witness","accent":"stone","description":"The Old Testament narrows the promise until Christ stands at the center.","payload":{"variant":"sequence","steps":[{"label":"Moses","subtitle":"The coming Prophet"},{"label":"David","subtitle":"The suffering King"},{"label":"Isaiah","subtitle":"The wounded Servant"},{"label":"Jesus","subtitle":"The promise fulfilled"}]}},{"type":"scriptureChain","title":"The Prophets Point to Jesus","references":[{"reference":"Deuteronomy 18:15"},{"reference":"Psalm 22:1"},{"reference":"Isaiah 53:5"},{"reference":"Luke 24:27"}]},{"type":"paragraph","text":"Takeaway: The Old Testament carries the promise forward through prophets, songs, symbols, and sacrifices until it finds its fulfillment in Jesus."}],"reflectPrompt":"How does it strengthen your faith to see that Jesus was promised before He came?\n\nThink about what this says about God's faithfulness, patience, and ability to keep His word across generations.","lifeApplicationStepTitle":"Life Application and Prayer","lifeApplication":"This week, read the Old Testament with one question in mind:\n\n\"How does this point me toward Jesus?\"\n\nYou may not see it in every detail immediately, and that is fine.\n\nStart with the big picture.\n\nGod is faithful.\nGod keeps speaking.\nGod keeps promising.\nGod keeps moving history toward redemption.\n\nWhen your life feels unclear, remember this:\n\nGod knows how to carry a promise through time.\n\nPrayer:\n\nFather, thank You for speaking through the prophets and carrying Your promise through history. Help me see Jesus at the center of Scripture. Strengthen my trust in Your faithfulness, especially when I cannot yet see the full picture. Teach me to read Your word with hope. Amen.","prayer":"","completionSummary":"God carried the promise through prophets, songs, symbols, and sacrifices. The Old Testament points forward, and Jesus is the promise fulfilled.","lessonQuiz":{"eyebrow":"CHECK YOUR UNDERSTANDING","title":"Quick Review","description":"Check your understanding before moving on.","settings":{"quizRequired":false,"passingScore":70,"allowRetake":true},"questions":[{"id":"tpk-l4-q1","prompt":"What did Moses speak of in Deuteronomy 18:15?","options":["A coming Prophet","A Roman emperor","A golden statue","A new garden"],"correctIndex":0,"explanation":"Deuteronomy 18:15 points to a coming Prophet from among the people, ultimately fulfilled in Jesus."},{"id":"tpk-l4-q2","prompt":"Which Psalm includes the words, \"My God, my God, why hast thou forsaken me?\"","options":["Psalm 22","Psalm 1","Psalm 91","Psalm 150"],"correctIndex":0,"explanation":"Psalm 22 contains these words, which Jesus echoes at the cross."},{"id":"tpk-l4-q3","prompt":"What does Isaiah 53 reveal about the Messiah?","options":["He would be a wounded Servant","He would avoid all suffering","He would reject humanity","He would never sacrifice Himself"],"correctIndex":0,"explanation":"Isaiah 53 reveals the Messiah as the wounded Servant who bears the suffering connected to human sin."},{"id":"tpk-l4-q4","prompt":"According to Luke 24:27, what did Jesus explain from Moses and the prophets?","options":["The things concerning Himself","How to build Rome","Why Scripture did not matter","How to avoid prophecy"],"correctIndex":0,"explanation":"Luke 24:27 shows that Jesus explained how the Scriptures pointed to Him."},{"id":"tpk-l4-q5","kind":"reflection","prompt":"What Old Testament picture of Jesus stands out to you most: Prophet, suffering King, wounded Servant, or sacrifice?","explanation":"Each picture reveals part of Christ's mission and helps us see the promise of redemption more clearly."}]}}
$tpk_l4_reader$::jsonb
where slug = 'promise-through-the-prophets'
  and study_series_id = 'e4000001-0000-4000-8000-000000000075';

-- The Promise Kept — Lesson 5: The Messiah Timeline (full guided reader JSON).
update public.lessons
set reader_content = $tpk_l5_reader$
{"openingThought":"God did not only promise that the Messiah would come.\n\nHe gave a timeline.\n\nThat matters.\n\nThe coming of Jesus was not random, accidental, or last minute. Long before Bethlehem, long before the Jordan River, and long before the cross, Scripture pointed forward to the mission of the Messiah.\n\nDaniel 9 gives one of the clearest prophetic timelines in the Bible.\n\nIt shows that God was not guessing His way through history.\n\nHe was keeping His promise with precision.\n\nThe same God who promised a Deliverer in Eden also revealed when the Messiah would appear, suffer, and confirm the covenant.","scriptureRef":"Daniel 9:25","scriptureQuote":"Know therefore and understand, that from the going forth of the commandment to restore and to build Jerusalem unto the Messiah the Prince shall be seven weeks, and threescore and two weeks.","scriptureSecondaryRef":"Daniel 9:26","scriptureSecondaryQuote":"And after threescore and two weeks shall Messiah be cut off, but not for himself.","scriptureSupplementBlocks":[{"type":"scripture","reference":"Daniel 9:27","quote":"And he shall confirm the covenant with many for one week."},{"type":"scripture","reference":"Ezra 7:13","quote":"I make a decree, that all they of the people of Israel... which are minded of their own freewill to go up to Jerusalem, go with thee."},{"type":"scripture","reference":"Matthew 3:16 to 17","quote":"And Jesus, when he was baptized, went up straightway out of the water.\n\nAnd lo a voice from heaven, saying, This is my beloved Son, in whom I am well pleased."}],"teachingPoints":["1. Daniel's prophecy begins with a command\n\nDaniel 9 says the timeline begins with the command to restore and rebuild Jerusalem.\n\nThis points to the decree connected with Ezra 7 in 457 BC.\n\nThat date becomes the starting point for the 70-week prophecy.\n\nGod gave Daniel a timeline that would lead forward to the Messiah.","2. The 70 weeks represent 490 prophetic years\n\nDaniel 9 speaks of 70 weeks.\n\nIn Bible prophecy, symbolic days can represent years.\n\nSeventy weeks equals 490 days, pointing to 490 prophetic years.\n\nThis period was connected especially to Daniel's people and the unfolding of God's covenant purpose.","3. The Messiah would appear after 69 weeks\n\nDaniel says that from the command to restore Jerusalem until Messiah the Prince would be 7 weeks plus 62 weeks.\n\nThat equals 69 weeks, or 483 prophetic years.\n\nStarting from 457 BC, this leads to 27 AD.\n\nThat is the year Jesus was baptized and anointed by the Holy Spirit, beginning His public ministry.","4. The Messiah would be cut off, not for Himself\n\nDaniel 9:26 says the Messiah would be cut off, but not for Himself.\n\nThis points to the death of Jesus.\n\nIn the middle of the final week, Jesus was crucified.\n\nHe did not die for His own sin.\n\nHe died for us.","5. The covenant was confirmed through Christ\n\nDaniel 9:27 says He would confirm the covenant with many for one week.\n\nJesus confirmed God's promise through His life, death, resurrection, and the gospel going forward.\n\nThe timeline shows that the cross was not a failure.\n\nIt was the fulfillment of God's promise."],"wordStudyBeforeStudyInsight":true,"wordStudyStepTitle":"Word Insight","wordStudyStepIntro":"The title Messiah helps us recognize the One Scripture was anticipating.","wordStudy":{"surface":"Messiah","lemma":"מָשִׁיחַ (mashiach)","transliteration":"mashiach","meaning":"Anointed One.","strongs":"H4899","reference":"Daniel 9:25","note":"The word Messiah points to One chosen and anointed by God for a special mission.\n\nJesus was publicly revealed as the Messiah at His baptism when the Spirit descended and the Father declared Him His beloved Son.\n\nDaniel's timeline points forward to that appearing."},"studyInsight":{"title":"Study Insight","placement":"after_teaching","variant":"prophecy_lens","body":"Daniel 9 can feel intimidating at first, but the main point is clear:\n\nGod kept His promise on time.\n\nThe prophecy moves from restoration to Messiah.\n\nFrom decree to baptism.\n\nFrom baptism to cross.\n\nFrom cross to covenant confirmed.\n\nThis is not just a math lesson.\n\nIt is a faith lesson.\n\nGod was guiding history toward Jesus.\n\nThe Messiah did not arrive too early.\nHe did not arrive too late.\nHe came in the fullness of time.\n\nThe timeline helps us see that the promise of redemption was not vague hope.\n\nIt was planned, foretold, and fulfilled in Christ."},"studyInsightBlocks":[{"type":"prophecyTimeline","id":"tpk-lesson5-daniel9-timeline","label":"490 Years / 70 Weeks","heading":"Daniel 9: The Messiah Timeline","items":[{"dateLabel":"457 BC","title":"Command to Rebuild Jerusalem","description":"The decree to restore and rebuild Jerusalem becomes the starting point of the prophecy.","scriptureReference":"Ezra 7:11 to 13 · Daniel 9:25"},{"dateLabel":"27 AD","title":"Jesus Baptized and Anointed","description":"Jesus begins His public ministry as the Messiah, the Anointed One.","scriptureReference":"Matthew 3:16 to 17 · Acts 10:38","highlight":true},{"dateLabel":"31 AD","title":"Jesus Crucified","description":"The Messiah is cut off, not for Himself, confirming the covenant through His death.","scriptureReference":"Daniel 9:26 to 27 · Matthew 27:46","highlight":true},{"dateLabel":"34 AD","title":"Stephen Stoned","description":"The 70-week period reaches its close as Israel's leadership finalizes its rejection of the Messiah through the stoning of Stephen and the gospel expands more fully beyond Jerusalem.","scriptureReference":"Acts 7:54 to 60 · Acts 8:1 to 4"}],"footerNotes":["70 weeks = 490 prophetic years","7 + 62 weeks = 69 weeks = 483 prophetic years","457 BC to 27 AD points to the appearing of Messiah the Prince","The final week points to Christ confirming the covenant","The middle of the final week points to the crucifixion","The timeline centers on Jesus, not speculation"]},{"type":"scriptureChain","title":"The Messiah Foretold","references":[{"reference":"Daniel 9:25"},{"reference":"Daniel 9:26 to 27"},{"reference":"Ezra 7:13"},{"reference":"Matthew 3:16 to 17"},{"reference":"Acts 10:38"}]},{"type":"paragraph","text":"Takeaway: Daniel's prophecy points forward to the appearing, ministry, and sacrifice of Jesus the Messiah."}],"reflectPrompt":"How does seeing God's promise unfold through a timeline affect your trust in Scripture?\n\nThink about what it means that God was guiding history toward Jesus before the events happened.","lifeApplicationStepTitle":"Life Application and Prayer","lifeApplication":"This week, remember that God is not careless with time.\n\nHis promises may feel slow, but they are not forgotten.\n\nDaniel's timeline shows that God works through history with purpose.\n\nWhen you feel like God is late, remember Jesus.\n\nThe Messiah came at the right time.\n\nThe cross happened at the right time.\n\nGod's promise was kept at the right time.","prayer":"Father, thank You for revealing Your faithfulness through Scripture. Help me trust that You are guiding history and my life with wisdom. When Your timing feels slow, remind me that Jesus came exactly as promised. Strengthen my confidence in Your word and keep my hope centered on Christ. Amen.","completionSummary":"Daniel's timeline shows that God kept His promise with purpose. The Messiah appeared, ministered, and was cut off, not for Himself, just as Scripture foretold.","lessonQuiz":{"eyebrow":"CHECK YOUR UNDERSTANDING","title":"Quick Review","description":"Check your understanding before moving on.","settings":{"quizRequired":false,"passingScore":70,"allowRetake":true},"questions":[{"id":"tpk-l5-q1","prompt":"According to Daniel 9:25, what event begins the prophetic timeline?","options":["A. The command to restore and build Jerusalem","B. The birth of Moses","C. The fall of Babylon","D. The crossing of the Red Sea"],"correctIndex":0,"explanation":"Daniel 9:25 says the timeline begins with the command to restore and build Jerusalem."},{"id":"tpk-l5-q2","prompt":"How many years are represented by the 70 weeks in this lesson?","options":["A. 70 years","B. 490 prophetic years","C. 7 years","D. 1,000 years"],"correctIndex":1,"explanation":"Seventy weeks equals 490 prophetic days, understood here as 490 prophetic years."},{"id":"tpk-l5-q3","prompt":"What major event happened in 27 AD according to this timeline?","options":["A. Jesus was baptized and anointed for public ministry","B. Jerusalem was created","C. Moses received the Ten Commandments","D. Paul wrote Revelation"],"correctIndex":0,"explanation":"The 483 prophetic years lead to 27 AD, when Jesus was baptized and anointed for public ministry."},{"id":"tpk-l5-q4","prompt":"What does Daniel 9:26 say would happen to the Messiah?","options":["A. He would be cut off, but not for Himself","B. He would build Rome","C. He would avoid suffering","D. He would stop loving humanity"],"correctIndex":0,"explanation":"Daniel 9:26 says Messiah would be cut off, but not for Himself, pointing to Christ's sacrificial death."},{"id":"tpk-l5-q5","kind":"reflection","prompt":"What part of the Daniel 9 timeline helps you see Jesus more clearly?","explanation":"The timeline is meant to point to Christ, showing His appearing, ministry, sacrifice, and covenant faithfulness."}]}}
$tpk_l5_reader$::jsonb
where slug = 'the-messiah-timeline'
  and study_series_id = 'e4000001-0000-4000-8000-000000000075';

-- The Promise Kept — Lesson 6: Cut Off, Not for Himself (full guided reader JSON).
update public.lessons
set reader_content = $tpk_l6_reader$
{"openingThought":"Daniel said the Messiah would be \"cut off, but not for himself.\"\n\nThat phrase is heavy.\n\nIt means the promised One would suffer, but not because He deserved it. He would die, but not for His own guilt. He would be wounded, but His wound would become our rescue.\n\nThe cross was not an accident.\n\nIt was not heaven losing control.\n\nIt was God keeping His promise through self-giving love.\n\nJesus was cut off so we could be brought near.","scriptureRef":"Daniel 9:26","scriptureQuote":"And after threescore and two weeks shall Messiah be cut off, but not for himself.","scriptureSecondaryRef":"Romans 5:8","scriptureSecondaryQuote":"But God commendeth his love toward us, in that, while we were yet sinners, Christ died for us.","scriptureSupplementBlocks":[{"type":"scripture","reference":"1 John 3:16","quote":"Hereby perceive we the love of God, because he laid down his life for us."},{"type":"scripture","reference":"Matthew 27:46","quote":"My God, my God, why hast thou forsaken me?"}],"teachingPoints":["1. The Messiah would suffer for others\n\nDaniel says the Messiah would be cut off, but not for Himself.\n\nThis points to substitution.\n\nJesus did not die because He had sinned.\n\nHe died for sinners.\n\nThe innocent One carried what belonged to the guilty so the guilty could receive what belonged to Him.","2. The cross reveals God's love\n\nRomans 5:8 says Christ died for us while we were still sinners.\n\nGod did not wait for humanity to become worthy.\n\nHe revealed His love at the very place our sin was most exposed.\n\nThe cross shows that God's love is not shallow emotion.\n\nIt is costly, faithful, self-giving action.","3. Jesus entered the deepest consequence of sin\n\nOn the cross, Jesus cried, \"My God, my God, why hast thou forsaken me?\"\n\nHe entered the darkness, weight, and separation sin brings.\n\nHe was not abandoned because He deserved it.\n\nHe stepped into the place sin had taken humanity so He could open the way back to the Father.","4. The cross confirms the promise\n\nDaniel 9 connects the Messiah's death with the confirming of the covenant.\n\nAt the cross, God showed that His promise was not empty.\n\nHe would rather bear the cost Himself than abandon the world to sin.\n\nThe promise made in Eden was kept at Calvary."],"wordStudyBeforeStudyInsight":true,"wordStudyStepTitle":"Word Insight","wordStudyStepIntro":"Hear what Daniel means when he says the Messiah would be cut off.","wordStudy":{"surface":"Cut off","lemma":"כָּרַת (karath)","transliteration":"karath","meaning":"To be removed, killed, or separated.","strongs":"H3772","reference":"Daniel 9:26","note":"Daniel's phrase \"cut off, but not for himself\" points to the sacrificial death of Christ.\n\nJesus was cut off from life, not because of His own sin, but because of ours.\n\nHis death reveals the depth of God's promise and the cost of our redemption."},"studyInsight":{"title":"Study Insight","placement":"after_teaching","variant":"christ_connection","body":"The cross answers the biggest lie from Eden.\n\nThe serpent suggested that God was selfish, withholding, and untrustworthy.\n\nAt the cross, God answered that lie forever.\n\nSelfish?\n\nJesus gave Himself.\n\nWithholding?\n\nGod gave His Son.\n\nUntrustworthy?\n\nGod kept His promise at infinite cost.\n\nThe Messiah was cut off, but not for Himself.\n\nHe took the wound.\nHe carried the shame.\nHe entered the darkness.\nHe bore the cost.\n\nThe cross shows that God's love is not theoretical.\n\nIt is proven in sacrifice."},"studyInsightBlocks":[{"type":"studyVisual","title":"What the cross answers","accent":"stone","description":"Eden suggested God was withholding. Calvary showed what God was willing to give.","payload":{"variant":"comparison","leftTitle":"The lie","rightTitle":"The cross","leftItems":["God is withholding."],"rightItems":["God gave Himself."]}},{"type":"scriptureChain","title":"Cut Off for Us","references":[{"reference":"Daniel 9:26"},{"reference":"Romans 5:8"},{"reference":"1 John 3:16"},{"reference":"Isaiah 53:5"}]},{"type":"paragraph","text":"Takeaway: Jesus was cut off, not for Himself, but for us. The cross proves God's faithful, self-giving love."}],"reflectPrompt":"What does the phrase \"cut off, but not for Himself\" reveal to you about the love of Jesus?\n\nThink about the cost of the cross and what it means that Christ suffered for others, not for His own guilt.","lifeApplicationStepTitle":"Life Application and Prayer","lifeApplication":"This week, when you question whether God really loves you, return to the cross.\n\nDo not measure God's love only by your current circumstances.\n\nMeasure it by Christ crucified.\n\nWhen shame says, \"You are too far gone,\" answer:\n\n\"Jesus was cut off for me.\"\n\nWhen fear says, \"God has abandoned you,\" answer:\n\n\"Christ entered the darkness to bring me home.\"\n\nThe cross is God's clearest answer to the lie that He cannot be trusted.","prayer":"Jesus, thank You for being cut off, not for Yourself, but for me. Thank You for carrying the cost of sin and revealing the Father's love at the cross. Help me trust Your sacrifice more than my fear, shame, or doubt. Keep my heart near Calvary, where Your promise was kept. Amen.","completionSummary":"The Messiah was cut off, but not for Himself. Jesus bore the cost of sin, revealed God's love, and kept the promise made from the beginning.","lessonQuiz":{"eyebrow":"CHECK YOUR UNDERSTANDING","title":"Quick Review","description":"Check your understanding before moving on.","settings":{"quizRequired":false,"passingScore":70,"allowRetake":true},"questions":[{"id":"tpk-l6-q1","prompt":"According to Daniel 9:26, what would happen to the Messiah?","options":["A. He would be cut off, but not for Himself","B. He would avoid all suffering","C. He would abandon humanity","D. He would deny the covenant"],"correctIndex":0,"explanation":"Daniel 9:26 says the Messiah would be cut off, but not for Himself, pointing to Christ's sacrificial death."},{"id":"tpk-l6-q2","prompt":"According to Romans 5:8, when did Christ die for us?","options":["A. While we were still sinners","B. After humanity became perfect","C. Before sin existed","D. Only after people earned it"],"correctIndex":0,"explanation":"Romans 5:8 says Christ died for us while we were still sinners, showing God's initiating love."},{"id":"tpk-l6-q3","prompt":"What does 1 John 3:16 say helps us perceive the love of God?","options":["A. That He laid down His life for us","B. That He avoided sacrifice","C. That He stayed distant from suffering","D. That He ignored sin"],"correctIndex":0,"explanation":"1 John 3:16 says we perceive God's love because He laid down His life for us."},{"id":"tpk-l6-q4","prompt":"What lie from Eden does the cross answer?","options":["A. That God is selfish and withholding","B. That God created the stars","C. That humanity has value","D. That Scripture matters"],"correctIndex":0,"explanation":"The serpent made God look selfish and withholding. The cross reveals that God gives Himself for our rescue."},{"id":"tpk-l6-q5","kind":"reflection","prompt":"How can the cross help you trust God when your feelings tell you He is distant?","explanation":"The cross shows God's love most clearly. Jesus entered suffering and separation to bring humanity near."}]}}
$tpk_l6_reader$::jsonb
where slug = 'cut-off-not-for-himself'
  and study_series_id = 'e4000001-0000-4000-8000-000000000075';

-- The Promise Kept — Lesson 7: Every Promise Says Yes in Jesus (full guided reader JSON).
update public.lessons
set reader_content = $tpk_l7_reader$
{"openingThought":"God keeps His promises.\n\nThat is the heartbeat of this study.\n\nFrom Eden to the prophets, from Daniel's timeline to the cross, Scripture shows a God who does not abandon His word.\n\nHumanity fell.\nGod promised.\n\nThe enemy deceived.\nGod pursued.\n\nSin wounded the world.\nGod sent His Son.\n\nJesus is not one promise among many. He is the fulfillment of God's promise to rescue, restore, and reveal His faithful love.\n\nIn Him, the promise was not only spoken.\n\nIt was kept.","scriptureRef":"2 Corinthians 1:20","scriptureQuote":"For all the promises of God in him are yea, and in him Amen, unto the glory of God by us.","scriptureSecondaryRef":"John 3:16","scriptureSecondaryQuote":"For God so loved the world, that he gave his only begotten Son.","scriptureSupplementBlocks":[{"type":"scripture","reference":"John 14:6","quote":"Jesus saith unto him, I am the way, the truth, and the life."},{"type":"scripture","reference":"1 Timothy 2:4","quote":"Who will have all men to be saved, and to come unto the knowledge of the truth."}],"teachingPoints":["1. God's promises find their fulfillment in Jesus\n\n2 Corinthians 1:20 says all the promises of God are yes in Christ.\n\nThat means Jesus is the center of God's saving work.\n\nThe promise of a Deliverer.\nThe promise of victory over evil.\nThe promise of forgiveness.\nThe promise of restored relationship.\nThe promise of eternal life.\n\nAll of it finds its answer in Him.","2. Jesus reveals God's faithful love\n\nJohn 3:16 says God loved the world and gave His Son.\n\nThis is the clearest answer to the lie that God is withholding good from humanity.\n\nGod gave His best.\n\nHe gave Himself through Christ.\n\nThe promise was kept through love, not force.","3. Jesus is the way back to the Father\n\nIn John 14:6, Jesus says He is the way, the truth, and the life.\n\nThe fall brought distrust, deception, and death.\n\nJesus brings the way, the truth, and the life.\n\nHe does not merely point toward restoration.\n\nHe is the restoration path.","4. God's desire is salvation and truth\n\n1 Timothy 2:4 says God desires all people to be saved and come to the knowledge of the truth.\n\nThis matters because the conflict began with lies about God.\n\nSalvation restores truth.\n\nJesus brings humanity back to the real knowledge of God's character, love, and purpose."],"wordStudyBeforeStudyInsight":true,"wordStudyStepTitle":"Word Insight","wordStudyStepIntro":"When Paul says God's promises are \"yea\" and \"Amen\" in Christ, hear the weight of that word.","wordStudy":{"surface":"Amen","lemma":"ἀμήν (amēn)","transliteration":"amēn","meaning":"Truly, surely, let it be so.","strongs":"G281","reference":"2 Corinthians 1:20","note":"When Scripture says God's promises are \"yea\" and \"Amen\" in Christ, it means Jesus is the trustworthy confirmation of everything God promised.\n\nHe is God's yes to redemption.\n\nHe is the proof that God keeps His word."},"studyInsight":{"title":"Study Insight","placement":"after_teaching","variant":"christ_connection","body":"The Promise Kept traces a clear movement:\n\nGod came looking.\nGod gave the first gospel promise.\nGod pointed to the promised Seed.\nGod spoke through the prophets.\nGod revealed the Messiah's timeline.\nGod kept His promise at the cross.\nGod fulfilled every promise in Jesus.\n\nThis is not just information.\n\nIt is an invitation to trust.\n\nThe same God who kept His promise across centuries can be trusted today.\n\nJesus shows us that God is not distant, careless, or uncertain.\n\nHe is faithful.\n\nHe moves toward sinners.\nHe speaks hope into ruins.\nHe carries His promise through history.\nHe gives Himself at the cross.\nHe offers salvation to the world.\n\nThe promise kept in Jesus becomes the foundation for your faith."},"studyInsightBlocks":[{"type":"studyVisual","title":"The promise kept: a study recap","accent":"sage","description":"Promise made, carried, kept, and received. The story centers on Christ.","payload":{"variant":"sequence","steps":[{"label":"Promise made","subtitle":"Genesis 3:15"},{"label":"Promise carried","subtitle":"Prophets and timeline"},{"label":"Promise kept","subtitle":"Jesus Christ"},{"label":"Promise received","subtitle":"Trust, salvation, new life"}]}},{"type":"scriptureChain","title":"Every Promise in Christ","references":[{"reference":"Genesis 3:15"},{"reference":"Daniel 9:26"},{"reference":"John 3:16"},{"reference":"2 Corinthians 1:20"}]},{"type":"paragraph","text":"Takeaway: Jesus is the fulfillment of God's promise to rescue humanity and reveal His faithful love."}],"reflectPrompt":"Which part of this study most helped you see that God keeps His promises?\n\nThink about Eden, the first gospel promise, the promised Seed, the prophets, Daniel's timeline, the cross, or Jesus as the final fulfillment.","lifeApplicationStepTitle":"Life Application and Prayer","lifeApplication":"This week, choose one promise of God and hold it seriously.\n\nNot casually.\nNot vaguely.\nSeriously.\n\nWrite it down.\nPray it back to God.\nReturn to it when fear speaks louder than faith.\n\nStart with this:\n\n\"All the promises of God in Christ are yes.\"\n\nWhen you feel like God is slow, remember the timeline.\n\nWhen you feel like God is distant, remember Eden.\n\nWhen you feel like God is withholding, remember the cross.\n\nWhen you feel like God has forgotten, remember Jesus.","prayer":"Father, thank You for keeping Your promise in Jesus. Thank You for pursuing humanity, speaking hope, guiding history, and giving Your Son for our rescue. Help me trust Your word more deeply. Teach me to live like Your promises are true, because in Christ they are yes and Amen. Amen.","completionSummary":"You have completed The Promise Kept. From Eden to the cross, God kept His word. Jesus is the promised Deliverer, the fulfillment of Scripture, and the clearest proof that God's love can be trusted.","seriesCompleteScreen":{"title":"Study Complete","message":"You have completed The Promise Kept. From Eden to the cross, God kept His word. Jesus is the promised Deliverer, the fulfillment of Scripture, and the clearest proof that God's love can be trusted.","primaryCta":{"label":"Back to Foundations Path","href":"/paths/foundations"},"secondaryCta":{"label":"Review this study","href":"/study-library/the-promise-kept"}},"lessonQuiz":{"eyebrow":"CHECK YOUR UNDERSTANDING","title":"Quick Review","description":"Check your understanding before moving on.","settings":{"quizRequired":false,"passingScore":70,"allowRetake":true},"questions":[{"id":"tpk-l7-q1","prompt":"According to 2 Corinthians 1:20, where do God's promises find their \"yes\"?","options":["A. In Christ","B. In human effort","C. In fear","D. In the serpent"],"correctIndex":0,"explanation":"2 Corinthians 1:20 says all the promises of God are yes in Christ."},{"id":"tpk-l7-q2","prompt":"What does John 3:16 reveal about God's love?","options":["A. God loved the world and gave His only begotten Son","B. God abandoned the world","C. God withheld His best","D. God stopped speaking after Eden"],"correctIndex":0,"explanation":"John 3:16 reveals that God's love is shown in giving His Son for the world."},{"id":"tpk-l7-q3","prompt":"What does Jesus say in John 14:6?","options":["A. \"I am the way, the truth, and the life\"","B. \"I am only one teacher among many\"","C. \"I do not know the Father\"","D. \"Truth cannot be known\""],"correctIndex":0,"explanation":"Jesus says He is the way, the truth, and the life, showing that restoration comes through Him."},{"id":"tpk-l7-q4","prompt":"What is the main message of The Promise Kept?","options":["A. God kept His promise to rescue humanity in Jesus","B. God forgot His promise after Eden","C. The prophets were unrelated to Jesus","D. The cross was a failure"],"correctIndex":0,"explanation":"The study shows that God's promise of rescue was made in Eden, carried through Scripture, and fulfilled in Jesus."},{"id":"tpk-l7-q5","kind":"reflection","prompt":"What promise of God do you need to hold onto this week?","explanation":"Faith grows as we trust God's promises in real life. Jesus is the proof that God keeps His word."}]}}
$tpk_l7_reader$::jsonb
where slug = 'every-promise-says-yes-in-jesus'
  and study_series_id = 'e4000001-0000-4000-8000-000000000075';


update public.lessons
set reader_content = '{"draftShell": true}'::jsonb
where study_series_id = 'e4000001-0000-4000-8000-000000000074';

update public.lessons
set reader_content = $foh_l1_reader$
{"openingThought":"The fall of humanity did not begin with fruit.\n\nIt began with a lie.\n\nBefore Adam and Eve disobeyed, they first listened to a false picture of God. The serpent did not begin by attacking their behavior. He attacked their trust.\n\nHe made God sound restrictive.\nHe made God's word sound questionable.\nHe made disobedience sound like freedom.\n\nThat is still how temptation works.\n\nSin often begins when we start believing something false about God.","scriptureRef":"Genesis 3:1","scriptureQuote":"Now the serpent was more subtil than any beast of the field which the LORD God had made.","scriptureSecondaryRef":"Genesis 3:4 to 5","scriptureSecondaryQuote":"And the serpent said unto the woman, Ye shall not surely die.\n\nFor God doth know that in the day ye eat thereof, then your eyes shall be opened, and ye shall be as gods, knowing good and evil.","scriptureSupplementBlocks":[{"type":"scripture","reference":"Revelation 12:9","quote":"And the great dragon was cast out, that old serpent, called the Devil, and Satan, which deceiveth the whole world."}],"teachingPoints":["1. The serpent attacked trust first\n\nGenesis 3 shows Satan entering the story through deception.\n\nHe did not begin with open rebellion.\n\nHe began with a question:\n\n\"Has God really said?\"\n\nThat question was designed to loosen trust in God's word.\n\nTemptation often begins the same way today. It asks us to treat God's word as uncertain, outdated, unfair, or unnecessary.","2. Satan made God look restrictive\n\nGod had given Adam and Eve a garden full of freedom.\n\nThey were surrounded by abundance.\n\nBut Satan focused attention on the one boundary God gave.\n\nHe made it sound as if God was withholding life, joy, and freedom.\n\nThis is one of the enemy's oldest lies:\n\n\"God is keeping something good from you.\"","3. Satan contradicted God directly\n\nGod warned that disobedience would bring death.\n\nThe serpent said, \"Ye shall not surely die.\"\n\nThis was not just a different opinion.\n\nIt was a direct contradiction of God's word.\n\nThe fall began when humanity listened to a voice that made God seem dishonest.","4. The lie was about God's character\n\nThe deepest issue in Eden was not appetite.\n\nIt was trust.\n\nSatan suggested that God was selfish, controlling, and withholding something humanity needed.\n\nOnce Eve believed that picture of God, disobedience began to look reasonable.\n\nThis is why knowing God's true character matters.\n\nWrong pictures of God lead to wrong responses to God."],"wordStudyBeforeStudyInsight":true,"wordStudyStepTitle":"Word Insight","wordStudyStepIntro":"Genesis describes the serpent as \"subtil.\"","wordStudy":{"surface":"Subtil","lemma":"עָרוּם (arum)","transliteration":"arum","meaning":"Cunning, crafty, shrewd, or deceptive.","strongs":"H6175","reference":"Genesis 3:1","note":"This does not mean the serpent looked obviously dangerous.\n\nIt means his deception was calculated.\n\nThe enemy's first attack was not loud. It was subtle. He twisted God's word just enough to make distrust feel reasonable."},"studyInsight":{"title":"Study Insight","placement":"after_teaching","variant":"doctrine_clarity","body":"The first lie was not only \"you will not die.\"\n\nThe deeper lie was this:\n\nGod cannot be trusted.\n\nThat lie poisoned the human heart.\n\nIf God cannot be trusted, then His boundaries look like control.\nIf God cannot be trusted, then His commands look like restriction.\nIf God cannot be trusted, then rebellion starts to feel like freedom.\n\nBut Scripture tells the truth.\n\nGod's boundary in Eden was not selfish. It was protective.\n\nHe was not withholding life.\n\nHe was protecting life.\n\nThe fall began when humanity accepted a false story about God.\n\nSalvation begins as Jesus reveals the truth about God again."},"studyInsightBlocks":[{"type":"studyVisual","title":"The First Lie","accent":"stone","description":"A simple contrast between deception and truth in Eden.","payload":{"variant":"comparison","leftTitle":"The serpent's lie","rightTitle":"The truth","leftItems":["God is withholding good from you."],"rightItems":["God's word protects life because God is love."]}},{"type":"scriptureChain","title":"The First Lie","references":[{"reference":"Genesis 3:1"},{"reference":"Genesis 3:4 to 5"},{"reference":"Revelation 12:9"},{"reference":"John 8:44"}]},{"type":"paragraph","text":"Takeaway: Satan's first strategy was deception. He attacked God's word and character so humanity would stop trusting God."}],"reflectPrompt":"What false picture of God are you most tempted to believe when life feels difficult?\n\nMaybe you are tempted to see God as distant, restrictive, angry, unfair, or silent. Be honest. The goal is not to pretend trust is easy. The goal is to bring the lie into the light.","lifeApplicationStepTitle":"Life Application and Prayer","lifeApplication":"This week, notice when temptation tries to make God look untrustworthy.\n\nWhen you feel pulled toward something God warns against, pause and ask:\n\n\"What is this temptation telling me about God?\"\n\nThen ask:\n\n\"Does that picture match Jesus?\"\n\nThe enemy works by distortion.\n\nJesus restores truth.\n\nPrayer:\n\nFather, help me recognize lies about Your character. Teach me to trust Your word even when temptation makes disobedience look attractive. Show me that Your boundaries are not meant to steal life, but to protect it. Keep my heart anchored in Jesus, who reveals the truth about You. Amen.","prayer":"","completionSummary":"The fall began with a lie about God. But Jesus reveals the truth: God is not withholding life from us. He is protecting us and calling us back to trust.","lessonQuiz":{"eyebrow":"CHECK YOUR UNDERSTANDING","title":"Quick Review","description":"Check your understanding before moving on.","settings":{"quizRequired":false,"passingScore":70,"allowRetake":true},"questions":[{"id":"foh-l1-q1","prompt":"Where does Genesis 3 place the beginning of humanity's fall?","options":["In a battle between nations","In a conversation involving deception","In a lack of intelligence","In a shortage of food"],"correctIndex":1,"explanation":"Genesis 3 shows the fall beginning through a deceptive conversation where the serpent questioned God's word and character."},{"id":"foh-l1-q2","prompt":"What did the serpent first question?","options":["Adam's name","The beauty of the garden","God's word","The existence of angels"],"correctIndex":2,"explanation":"The serpent began by questioning what God had said, weakening trust in God's word."},{"id":"foh-l1-q3","prompt":"According to Revelation 12:9, who is the serpent connected with?","options":["Moses","Satan, who deceives the whole world","Gabriel","A normal animal only"],"correctIndex":1,"explanation":"Revelation 12:9 identifies the old serpent as the Devil and Satan, the one who deceives the whole world."},{"id":"foh-l1-q4","prompt":"What was the deeper lie behind the serpent's temptation?","options":["God cannot be trusted","Fruit is always dangerous","Humans cannot make choices","The garden was not real"],"correctIndex":0,"explanation":"The serpent's deeper attack was against God's character, making Him appear restrictive and untrustworthy."},{"id":"foh-l1-q5","kind":"reflection","prompt":"How can remembering God's true character help you resist temptation?","explanation":"Temptation often distorts God's character. Remembering that God is loving, truthful, and protective helps us trust Him when sin looks attractive."}]}}
$foh_l1_reader$::jsonb
where slug = 'the-first-humanity-lie'
  and study_series_id = 'e4000001-0000-4000-8000-000000000074';

update public.lessons
set reader_content = $foh_l2_reader$
{"openingThought":"Sin did not only break a rule.\n\nIt broke trust.\n\nAfter Adam and Eve believed the serpent's lie, their relationship with God changed immediately. The God they once welcomed, they now avoided. The voice that once brought peace now made them afraid.\n\nThey hid.\n\nThat one detail tells us a lot.\n\nThe fall was not just legal. It was relational. Humanity began seeing God through fear instead of love.\n\nAnd when trust in God is broken, everything else starts to crack too.","scriptureRef":"Genesis 3:8","scriptureQuote":"And they heard the voice of the LORD God walking in the garden in the cool of the day.","scriptureSecondaryRef":"Genesis 3:9 to 10","scriptureSecondaryQuote":"And the LORD God called unto Adam, and said unto him, Where art thou?\n\nAnd he said, I heard thy voice in the garden, and I was afraid, because I was naked; and I hid myself.","scriptureSupplementBlocks":[{"type":"scripture","reference":"Genesis 3:12","quote":"And the man said, The woman whom thou gavest to be with me, she gave me of the tree, and I did eat."}],"teachingPoints":["1. Sin changed how humanity saw God\n\nBefore the fall, Adam and Eve lived openly before God.\n\nThere was no fear.\nNo hiding.\nNo shame.\n\nBut after sin entered, they heard God's voice and ran from Him.\n\nGod had not changed.\n\nTheir perception of Him had.\n\nSin made the loving Creator look like someone to avoid.","2. God came looking for them\n\nThe first question God asks after the fall is not, \"How dare you?\"\n\nIt is, \"Where art thou?\"\n\nGod knew where Adam was physically.\n\nThe question was relational.\n\nGod was drawing Adam out of hiding and inviting him to face what had happened.\n\nEven after sin, God moved toward humanity.","3. Fear replaced trust\n\nAdam said, \"I was afraid.\"\n\nThat is one of the first emotional consequences of sin.\n\nThe lie about God created distance in the human heart.\n\nWhen people believe God is unsafe, they hide.\n\nThey hide behind performance, excuses, religion, distraction, or silence.\n\nBut hiding never heals what trust has broken.","4. Broken trust led to blame\n\nWhen God questioned Adam, Adam blamed Eve and indirectly blamed God:\n\n\"The woman whom thou gavest to be with me.\"\n\nSin fractured both the vertical relationship with God and the horizontal relationship with another human being.\n\nOnce trust in God was broken, love between people began to break too."],"wordStudyBeforeStudyInsight":true,"wordStudyStepTitle":"Word Insight","wordStudyStepIntro":"Genesis names one feeling that entered when trust broke.","wordStudy":{"surface":"Afraid","lemma":"יָרֵא (yare)","transliteration":"yare","meaning":"Fear, dread, or alarm in the presence of danger.","strongs":"H3372","reference":"Genesis 3:10","note":"Adam's fear shows how deeply sin distorted humanity's view of God.\n\nGod came near, but Adam felt threatened.\n\nSin does not only make us guilty.\n\nIt makes us suspicious of the very One who came to save us."},"studyInsight":{"title":"Study Insight","placement":"after_teaching","variant":"doctrine_clarity","body":"Genesis 3 shows that sin damages relationships before it damages behavior patterns.\n\nAdam and Eve's first response was not confession.\n\nIt was hiding.\n\nThen blame.\n\nThat pattern still shows up in us.\n\nWe hide when we feel exposed.\nWe blame when we feel guilty.\nWe defend ourselves when we feel ashamed.\n\nBut God's response in Eden reveals His heart.\n\nHe came looking.\n\nHe asked questions.\n\nHe invited honesty.\n\nHe did not abandon them in their fear.\n\nThe same God still calls people out of hiding today."},"studyInsightBlocks":[{"type":"studyVisual","title":"From trust broken to blame","accent":"sage","description":"How fractured trust unfolds in Eden and in us.","payload":{"variant":"sequence","steps":[{"label":"Lie believed","subtitle":""},{"label":"Trust broken","subtitle":""},{"label":"Fear enters","subtitle":""},{"label":"Hiding begins","subtitle":""},{"label":"Blame spreads","subtitle":""}]}},{"type":"scriptureChain","title":"From Trust to Hiding","references":[{"reference":"Genesis 3:8 to 10"},{"reference":"Genesis 3:12"},{"reference":"Psalm 139:7 to 10"},{"reference":"Romans 5:8"}]},{"type":"paragraph","text":"Takeaway: Sin broke trust and led humanity into fear, hiding, and blame, but God still moved toward us with mercy."}],"reflectPrompt":"Where do you tend to hide from God when you feel guilty, afraid, or exposed?\n\nThis could be through busyness, silence, excuses, overworking, religious performance, distraction, or pretending everything is fine.","lifeApplicationStepTitle":"Life Application and Prayer","lifeApplication":"This week, practice coming out of hiding.\n\nWhen you feel the urge to avoid God, pause and say:\n\n\"God is calling me toward healing, not away from love.\"\n\nThen bring one honest sentence to Him.\n\nNot a polished prayer.\nNot a perfect explanation.\nJust truth.\n\nSomething like:\n\n\"Lord, I feel ashamed.\"\n\"Lord, I am afraid.\"\n\"Lord, I have been avoiding You.\"\n\nHonesty is often the first step back into trust.\n\nPrayer:\n\nFather, I admit that I sometimes hide from You. When I feel guilty or afraid, I forget Your heart and assume You are against me. Help me trust that You are calling me toward healing. Teach me to come into the light with honesty, and restore my trust in Your love. Amen.","prayer":"","completionSummary":"Sin broke trust and made humanity afraid of God. But even then, God came looking. His first move was not abandonment. It was pursuit.","lessonQuiz":{"eyebrow":"CHECK YOUR UNDERSTANDING","title":"Quick Review","description":"Check your understanding before moving on.","settings":{"quizRequired":false,"passingScore":70,"allowRetake":true},"questions":[{"id":"foh-l2-q1","prompt":"After Adam and Eve sinned, what did they do when they heard God's voice?","options":["They worshiped immediately","They hid themselves","They built an altar","They left the garden peacefully"],"correctIndex":1,"explanation":"Genesis 3:8-10 shows that Adam and Eve hid from God after sin entered."},{"id":"foh-l2-q2","prompt":"What question did God ask Adam?","options":["\"Where art thou?\"","\"Why are you stronger?\"","\"Who made the garden?\"","\"Did you create yourself?\""],"correctIndex":0,"explanation":"God asked, \"Where art thou?\" not because He lacked information, but because He was drawing Adam into honest relationship."},{"id":"foh-l2-q3","prompt":"What emotion did Adam mention in Genesis 3:10?","options":["Pride","Joy","Fear","Excitement"],"correctIndex":2,"explanation":"Adam said, \"I was afraid,\" showing that sin introduced fear into humanity's relationship with God."},{"id":"foh-l2-q4","prompt":"What did Adam do when God questioned him?","options":["Took full responsibility immediately","Blamed Eve and indirectly blamed God","Asked for forgiveness first","Denied that anything happened"],"correctIndex":1,"explanation":"Adam said the woman whom God gave him gave him the fruit—shifting blame to Eve and indirectly toward God."},{"id":"foh-l2-q5","kind":"reflection","prompt":"Why is honesty with God important when trust has been damaged?","explanation":"Honesty brings fear, shame, and guilt into the light where God can begin healing and restoring trust."}]}}
$foh_l2_reader$::jsonb
where slug = 'when-trust-was-broken'
  and study_series_id = 'e4000001-0000-4000-8000-000000000074';
update public.lessons
set reader_content = $foh_l3_reader$
{"openingThought":"Shame was not part of God's original design.\n\nBefore sin, Adam and Eve were fully known and unafraid. There was no hiding, no covering, no blaming, and no need to protect themselves from love.\n\nThen sin entered.\n\nSuddenly, they saw themselves differently. They felt exposed. They tried to cover what was broken. They hid from God and turned against each other.\n\nThat is what shame does.\n\nIt makes us feel unsafe with God, unsafe with people, and unsafe even within ourselves.\n\nBut God did not leave humanity buried under shame.\n\nHe came looking.","scriptureRef":"Genesis 3:7","scriptureQuote":"And the eyes of them both were opened, and they knew that they were naked.","scriptureSecondaryRef":"Genesis 3:12 to 13","scriptureSecondaryQuote":"And the man said, The woman whom thou gavest to be with me, she gave me of the tree, and I did eat.\n\nAnd the woman said, The serpent beguiled me, and I did eat.","scriptureSupplementBlocks":[{"type":"scripture","reference":"Romans 3:23","quote":"For all have sinned, and come short of the glory of God."}],"teachingPoints":["1. Shame changed how humanity saw itself\n\nGenesis says Adam and Eve knew they were naked.\n\nThis was more than physical awareness.\n\nIt was the first experience of guilt, exposure, and inner disconnection.\n\nSin made them see themselves through fear instead of innocence.\n\nThey no longer felt safe being fully known.","2. Shame led to covering\n\nAdam and Eve tried to cover themselves with fig leaves.\n\nThat first covering represents a deeper human instinct.\n\nWhen shame enters, we try to manage how we are seen.\n\nWe cover with image.\nWe cover with performance.\nWe cover with excuses.\nWe cover with silence.\n\nBut human coverings cannot heal the heart.","3. Shame led to blame\n\nWhen God questioned Adam, he blamed Eve and indirectly blamed God.\n\nThen Eve blamed the serpent.\n\nThis is how shame protects itself.\n\nInstead of confessing, it deflects.\nInstead of owning, it accuses.\nInstead of healing, it hides.\n\nBlame may feel safer in the moment, but it keeps the wound open.","4. Shame is connected to falling short of God's glory\n\nRomans 3:23 says all have sinned and come short of the glory of God.\n\nGod's glory is the visible beauty of His character.\n\nHumanity was created to reflect that glory, to live in love, truth, trust, and relational wholeness.\n\nSin damaged that reflection.\n\nShame is what it feels like when we sense that something in us is no longer whole."],"wordStudyBeforeStudyInsight":true,"wordStudyStepTitle":"Word Insight","wordStudyStepIntro":"Romans connects sin with glory, not only guilt.","wordStudy":{"surface":"Glory","lemma":"δόξα (doxa)","transliteration":"doxa","meaning":"In Scripture, glory often points to the visible beauty, weight, and radiance of who God is.","strongs":"G1391","reference":"Romans 3:23","note":"Romans 3:23 says sin causes humanity to fall short of God's glory.\n\nThis means sin is not only breaking rules.\n\nIt is falling out of harmony with God's character.\n\nWe were made to reflect His love.\n\nShame reminds us that sin has damaged that reflection, but Jesus came to restore it."},"studyInsight":{"title":"Study Insight","placement":"after_teaching","variant":"doctrine_clarity","body":"The fall affected humanity at more than one level.\n\nIt affected how we see God.\nIt affected how we see ourselves.\nIt affected how we relate to others.\n\nThat is why Genesis 3 feels so painfully familiar.\n\nWe still hide.\nWe still cover.\nWe still blame.\nWe still defend ourselves when we feel exposed.\n\nBut God's response in Eden shows us something important.\n\nHe did not ignore sin.\n\nBut He also did not abandon the sinner.\n\nHe came near, asked questions, and began the work of redemption.\n\nThe answer to shame is not better hiding.\n\nThe answer is restored trust in God's love."},"studyInsightBlocks":[{"type":"studyVisual","title":"The shame spiral","accent":"stone","description":"How sin often moves from exposure toward blame.","payload":{"variant":"sequence","steps":[{"label":"Sin","subtitle":""},{"label":"Shame","subtitle":""},{"label":"Covering","subtitle":""},{"label":"Hiding","subtitle":""},{"label":"Blame","subtitle":""}]}},{"type":"studyVisual","title":"Christ interrupts with","accent":"sage","description":"Truth, grace, and restoration reverse the downward pull.","payload":{"variant":"sequence","steps":[{"label":"Truth","subtitle":""},{"label":"Grace","subtitle":""},{"label":"Restoration","subtitle":""}]}},{"type":"scriptureChain","title":"From Shame to Restoration","references":[{"reference":"Genesis 3:7"},{"reference":"Genesis 3:12 to 13"},{"reference":"Romans 3:23"},{"reference":"Romans 5:8"}]},{"type":"paragraph","text":"Takeaway: Sin brought shame, hiding, and blame, but God moves toward us with truth and grace to restore what was damaged."}],"reflectPrompt":"What is one way shame causes you to hide, cover, or blame instead of coming honestly to God?\n\nDo not answer this to condemn yourself. Answer it so you can recognize the pattern and bring it into the light.","lifeApplicationStepTitle":"Life Application and Prayer","lifeApplication":"This week, notice one moment when you feel the urge to cover yourself.\n\nMaybe you want to defend.\nMaybe you want to blame.\nMaybe you want to act like you are fine.\nMaybe you want to disappear.\n\nPause and bring that moment to God.\n\nSay:\n\n\"Lord, I feel exposed, but I do not want to hide from You.\"\n\nShame grows in secrecy.\n\nHealing begins in honest surrender.\n\nPrayer:\n\nFather, You see me fully and still move toward me with love. Help me stop hiding behind image, excuses, and fear. Teach me to bring my shame into Your presence instead of running from You. Restore in me the beauty of Your character, and help me trust the grace revealed in Jesus. Amen.","prayer":"","completionSummary":"Shame entered through sin, but shame does not get the final word. God still comes near, calling humanity out of hiding and into restoration.","lessonQuiz":{"eyebrow":"CHECK YOUR UNDERSTANDING","title":"Quick Review","description":"Check your understanding before moving on.","settings":{"quizRequired":false,"passingScore":70,"allowRetake":true},"questions":[{"id":"foh-l3-q1","prompt":"What did Adam and Eve realize after they sinned?","options":["That they were naked","That the garden disappeared","That God had changed","That they were angels"],"correctIndex":0,"explanation":"Genesis 3:7 says their eyes were opened and they knew they were naked, revealing the entrance of shame and exposure."},{"id":"foh-l3-q2","prompt":"What did Adam and Eve try to do after realizing they were naked?","options":["Build a city","Cover themselves","Leave earth","Write Scripture"],"correctIndex":1,"explanation":"Their attempt to cover themselves shows the human instinct to manage shame and exposure."},{"id":"foh-l3-q3","prompt":"What did Adam and Eve do when questioned?","options":["Blamed others","Sang praises","Pretended they had no memory","Became angels"],"correctIndex":0,"explanation":"Adam blamed Eve and Eve blamed the serpent, showing how shame often leads to deflection."},{"id":"foh-l3-q4","prompt":"According to Romans 3:23, what have all people done?","options":["Sinned and come short of the glory of God","Lived perfectly","Created their own glory","Avoided shame completely"],"correctIndex":0,"explanation":"Romans 3:23 teaches that all have sinned and fallen short of God's glory."},{"id":"foh-l3-q5","kind":"reflection","prompt":"How does God's pursuit of Adam and Eve help you see His response to your shame?","explanation":"God did not abandon Adam and Eve in shame. He came near, asked questions, and began the work of restoration."}]}}
$foh_l3_reader$::jsonb
where slug = 'the-birth-of-shame'
  and study_series_id = 'e4000001-0000-4000-8000-000000000074';
update public.lessons
set reader_content = $foh_l4_reader$
{"openingThought":"Most people think of sin as breaking rules.\n\nThat is true, but it is not the whole picture.\n\nSin is deeper than a bad action. It is a break from God's love, God's truth, and God's design for life.\n\nIn Eden, sin began when humanity believed a lie about God. That lie damaged trust. Broken trust produced fear, hiding, shame, blame, and rebellion.\n\nSo sin is not only about what humans do.\n\nIt is about what happens when the heart disconnects from God.\n\nThis lesson helps us see sin clearly so we can understand why we need Jesus so deeply.","scriptureRef":"Romans 3:23","scriptureQuote":"For all have sinned, and come short of the glory of God.","scriptureSecondaryRef":"1 John 3:4","scriptureSecondaryQuote":"Sin is the transgression of the law.","scriptureSupplementBlocks":[{"type":"scripture","reference":"Romans 13:10","quote":"Love worketh no ill to his neighbour: therefore love is the fulfilling of the law."},{"type":"scripture","reference":"1 John 4:8","quote":"He that loveth not knoweth not God; for God is love."}],"teachingPoints":["1. Sin is falling short of God's glory\n\nRomans 3:23 says all have sinned and come short of God's glory.\n\nGod's glory is the beauty of His character revealed.\n\nHumanity was created to reflect His love, truth, purity, mercy, and faithfulness.\n\nSin means we have fallen out of harmony with that glory.\n\nWe were made to reflect God.\n\nSin bends us inward.","2. Sin is lawlessness\n\n1 John 3:4 defines sin as transgression of the law.\n\nBut God's law is not random control.\n\nRomans 13:10 says love is the fulfilling of the law.\n\nThat means sin is not only rule-breaking.\n\nIt is life out of alignment with love.","3. Sin turns love into selfishness\n\nGod created humanity for relational love.\n\nSin distorts that design.\n\nInstead of self-giving love, sin produces self-protection, self-exaltation, self-indulgence, and self-justification.\n\nThat is why sin damages everything it touches.\n\nIt turns people inward when they were created to live outward in love.","4. Sin begins with a false picture of God\n\nIn Genesis 3, Satan's lie made God look restrictive and untrustworthy.\n\nOnce that lie was believed, disobedience followed.\n\nThis pattern still matters.\n\nWhen we believe false things about God, our desires and actions begin to shift.\n\nRight belief about God is not a small issue.\n\nIt shapes the whole life."],"wordStudyBeforeStudyInsight":true,"wordStudyStepTitle":"Word Insight","wordStudyStepIntro":"Scripture ties sin to stepping across a line God draws in love.","wordStudy":{"surface":"Transgression","lemma":"παράβασις (parabasis)","transliteration":"parabasis","meaning":"To step across a boundary, violate a command, or move outside what is right.","strongs":"G3847","reference":"1 John 3:4","note":"Sin is transgression, but the boundary being crossed is not arbitrary.\n\nGod's law is the law of love.\n\nTo sin is to step outside the way of love and move against the character of God.\n\nJesus came to bring us back into harmony with God's love."},"studyInsight":{"title":"Study Insight","placement":"after_teaching","variant":"doctrine_clarity","body":"Sin is not just a list of bad behaviors.\n\nIt is a deeper condition of the heart.\n\nThe Bible shows sin as a break from God's glory, a violation of love, and a distortion of human identity.\n\nThis means we cannot fix sin by simply trying harder to look good.\n\nThe problem is deeper than appearance.\n\nWe need restoration at the level of trust, desire, thought, and love.\n\nThat is why Jesus did not come merely to improve our behavior.\n\nHe came to save us, renew us, and restore God's image in us.\n\nA clear way to understand sin is this:\n\nFalse view of God\nBroken trust\nDistorted desire\nSelf-centered action\nDamaged relationships\n\nThe gospel reverses that movement through Christ."},"studyInsightBlocks":[{"type":"studyVisual","title":"How sin spreads","accent":"sage","description":"False belief about God bends the heart toward self and harm to relationship.","payload":{"variant":"sequence","steps":[{"label":"False view of God","subtitle":""},{"label":"Broken trust","subtitle":""},{"label":"Distorted desire","subtitle":""},{"label":"Self-centered action","subtitle":""},{"label":"Damaged relationships","subtitle":""}]}},{"type":"studyVisual","title":"Sin and God's design","accent":"stone","description":"A simple contrast: life bent inward versus life restored in love.","payload":{"variant":"comparison","leftTitle":"Sin","rightTitle":"God's design","leftItems":["Life turned inward"],"rightItems":["Life restored in love"]}},{"type":"scriptureChain","title":"What Sin Really Is","references":[{"reference":"Romans 3:23"},{"reference":"1 John 3:4"},{"reference":"Romans 13:10"},{"reference":"1 John 4:8"}]},{"type":"paragraph","text":"Takeaway: Sin is not only breaking rules. It is falling out of harmony with God's glory and love."}],"reflectPrompt":"How does your understanding of sin change when you see it as life disconnected from God's love?\n\nThink beyond behavior. Consider how sin affects trust, desire, relationships, identity, and your picture of God.","lifeApplicationStepTitle":"Life Application and Prayer","lifeApplication":"This week, when you notice sin in your life, do not stop at behavior.\n\nAsk the deeper question:\n\n\"What am I believing about God right now?\"\n\nThen ask:\n\n\"How is Jesus calling me back into love?\"\n\nThis does not excuse wrong choices.\n\nIt helps you bring the root to God, not just the fruit.\n\nPrayer:\n\nFather, help me see sin honestly. Do not let me minimize it or misunderstand it. Show me where I have stepped outside Your love and trusted lies about You. Restore my heart through Jesus. Bring my thoughts, desires, and actions back into harmony with Your character. Amen.","prayer":"","completionSummary":"Sin is more than broken rules. It is broken harmony with God's love. But Jesus came to restore what sin has damaged.","lessonQuiz":{"eyebrow":"CHECK YOUR UNDERSTANDING","title":"Quick Review","description":"Check your understanding before moving on.","settings":{"quizRequired":false,"passingScore":70,"allowRetake":true},"questions":[{"id":"foh-l4-q1","prompt":"According to Romans 3:23, what have all people done?","options":["Sinned and come short of the glory of God","Avoided every temptation","Fully restored themselves","Created their own law"],"correctIndex":0,"explanation":"Romans 3:23 says all have sinned and come short of the glory of God."},{"id":"foh-l4-q2","prompt":"According to 1 John 3:4, what is sin?","options":["Transgression of the law","A harmless mistake only","A lack of information","A physical weakness only"],"correctIndex":0,"explanation":"1 John 3:4 defines sin as transgression of the law."},{"id":"foh-l4-q3","prompt":"According to Romans 13:10, what fulfills the law?","options":["Love","Fear","Pride","Control"],"correctIndex":0,"explanation":"Romans 13:10 says love is the fulfilling of the law, showing that God's law is rooted in love."},{"id":"foh-l4-q4","prompt":"What is sin at its deepest level according to this lesson?","options":["Life disconnected from God's love","A problem God cannot solve","Something only angels experience","A small issue with no consequences"],"correctIndex":0,"explanation":"Sin is deeper than outward behavior. It is life disconnected from God's love, truth, and design."},{"id":"foh-l4-q5","kind":"reflection","prompt":"What is one area where Jesus may be calling you back into harmony with God's love?","explanation":"The gospel does not only forgive sin. It restores the heart back into trust, love, and relationship with God."}]}}
$foh_l4_reader$::jsonb
where slug = 'what-sin-really-is'
  and study_series_id = 'e4000001-0000-4000-8000-000000000074';
update public.lessons
set reader_content = $foh_l5_reader$
{"openingThought":"A lie does not stay small when the heart believes it.\n\nIn Eden, the serpent's lie reshaped how Adam and Eve saw God. Then it reshaped how they saw themselves. Then it reshaped how they treated each other.\n\nThat is how deception works.\n\nIt does not only change what we think.\n\nIt changes what we trust, what we desire, what we fear, and what we choose.\n\nThe fall shows us that wrong beliefs about God never stay theoretical. They become patterns of life.\n\nThis is why truth matters so much.","scriptureRef":"Proverbs 4:23","scriptureQuote":"Keep thy heart with all diligence; for out of it are the issues of life.","scriptureSecondaryRef":"John 8:44","scriptureSecondaryQuote":"He was a murderer from the beginning, and abode not in the truth, because there is no truth in him.","scriptureSupplementBlocks":[{"type":"scripture","reference":"Genesis 3:6","quote":"And when the woman saw that the tree was good for food, and that it was pleasant to the eyes, and a tree to be desired to make one wise."}],"teachingPoints":["1. What enters the heart shapes the life\n\nProverbs 4:23 says to keep the heart with all diligence because the issues of life flow from it.\n\nIn Scripture, the heart is not just emotion.\n\nIt includes desire, trust, thought, will, and direction.\n\nWhen a lie enters the heart, it begins shaping the whole person.\n\nThat is why deception is so dangerous.","2. Satan's lies reshape desire\n\nGenesis says Eve saw that the tree was good for food, pleasant to the eyes, and desirable to make one wise.\n\nThe tree had been present before.\n\nBut after the lie, she saw it differently.\n\nDeception changed perception.\n\nWhat God warned against began to look attractive.\n\nSin often works this way.\n\nIt makes danger look beautiful and obedience look unnecessary.","3. Lies about God produce distorted living\n\nIf we believe God is withholding good from us, we will start reaching outside His will.\n\nIf we believe God is harsh, we will hide.\n\nIf we believe God is distant, we will try to save ourselves.\n\nIf we believe God is not enough, we will chase substitutes.\n\nWrong pictures of God produce wrong patterns of life.","4. Jesus restores us through truth\n\nSatan works through lies.\n\nJesus restores through truth.\n\nThe answer to deception is not merely trying harder.\n\nThe answer is letting God's word reshape how we see Him, ourselves, and the world.\n\nTruth does not only inform the mind.\n\nTruth heals perception."],"wordStudyBeforeStudyInsight":true,"wordStudyStepTitle":"Word Insight","wordStudyStepIntro":"Proverbs points to the heart as the riverhead of daily life.","wordStudy":{"surface":"Heart","lemma":"לֵב (lev)","transliteration":"lev","meaning":"In Scripture, the heart often refers to the inner life, including thoughts, desires, motives, trust, and choices.","strongs":"H3820","reference":"Proverbs 4:23","note":"Proverbs 4:23 teaches that life flows from the heart.\n\nThis means spiritual growth is not only about outward behavior.\n\nGod wants to restore the inner place where trust, desire, and decisions are formed."},"studyInsight":{"title":"Study Insight","placement":"after_teaching","variant":"doctrine_clarity","body":"The fall was perceptual before it was behavioral.\n\nThat means Adam and Eve's view of reality was distorted before their action followed.\n\nThe serpent changed the way they perceived God's command, God's character, and the forbidden tree.\n\nThen the behavior came.\n\nThis matters because many people try to fight sin only at the behavior level.\n\nBut Scripture goes deeper.\n\nWhat am I believing?\nWhat am I trusting?\nWhat am I desiring?\nWhat picture of God is shaping this choice?\n\nJesus came to heal the roots, not only trim the branches.\n\nWhen truth about God returns to the heart, the life begins to change."},"studyInsightBlocks":[{"type":"studyVisual","title":"When a lie takes hold","accent":"stone","description":"How deception moves from belief toward life.","payload":{"variant":"sequence","steps":[{"label":"Lie believed","subtitle":""},{"label":"Perception distorted","subtitle":""},{"label":"Desire reshaped","subtitle":""},{"label":"Choice made","subtitle":""},{"label":"Life affected","subtitle":""}]}},{"type":"studyVisual","title":"When truth returns","accent":"sage","description":"Truth reframes trust, desire, and the direction of life.","payload":{"variant":"sequence","steps":[{"label":"Truth received","subtitle":""},{"label":"Trust restored","subtitle":""},{"label":"Desire renewed","subtitle":""},{"label":"Life transformed","subtitle":""}]}},{"type":"scriptureChain","title":"Lies and the Heart","references":[{"reference":"Proverbs 4:23"},{"reference":"Genesis 3:6"},{"reference":"John 8:44"},{"reference":"John 8:32"}]},{"type":"paragraph","text":"Takeaway: Lies reshape how we see God, ourselves, and sin. Jesus restores us by bringing truth back into the heart."}],"reflectPrompt":"What is one lie about God, yourself, or sin that has shaped your choices more than you realized?\n\nThis may be a lie like \"God is holding out on me,\" \"I have to fix myself first,\" \"This sin will satisfy me,\" or \"I am too far gone.\"","lifeApplicationStepTitle":"Life Application and Prayer","lifeApplication":"This week, practice tracing your choices back to belief.\n\nWhen you feel pulled toward a harmful pattern, ask:\n\n\"What lie is making this look good?\"\n\nThen answer it with Scripture.\n\nFor example:\n\nLie:\n\"This will satisfy me.\"\n\nTruth:\nGod's presence gives fullness of joy.\n\nLie:\n\"I am too far gone.\"\n\nTruth:\nJesus came to seek and save the lost.\n\nDo not just fight the behavior.\n\nBring the lie to Jesus.\n\nPrayer:\n\nFather, help me guard my heart. Show me the lies I have believed about You, myself, and sin. Let Your truth reshape my desires and choices. Teach me to see clearly again. Restore my trust in Your love, and lead me into the freedom Jesus gives. Amen.","prayer":"","completionSummary":"Lies shape lives, but truth restores them. Jesus does not only change behavior. He brings truth back into the heart so trust, desire, and choices can be healed.","lessonQuiz":{"eyebrow":"CHECK YOUR UNDERSTANDING","title":"Quick Review","description":"Check your understanding before moving on.","settings":{"quizRequired":false,"passingScore":70,"allowRetake":true},"questions":[{"id":"foh-l5-q1","prompt":"According to Proverbs 4:23, why should we guard the heart?","options":["Because out of it are the issues of life","Because emotions do not matter","Because the heart cannot be changed","Because God only cares about behavior"],"correctIndex":0,"explanation":"Proverbs 4:23 teaches that the heart must be guarded because the direction of life flows from it."},{"id":"foh-l5-q2","prompt":"According to John 8:44, what is true about the devil?","options":["There is no truth in him","He always tells the truth","He created humanity","He restores the heart"],"correctIndex":0,"explanation":"Jesus said there is no truth in the devil, showing that deception is central to his work."},{"id":"foh-l5-q3","prompt":"What changed in Eve's perception after the serpent's lie?","options":["The tree began to look desirable","God disappeared","The garden stopped existing","Adam became an angel"],"correctIndex":0,"explanation":"Genesis 3:6 shows that Eve saw the tree as desirable after the serpent's deception reshaped her perception."},{"id":"foh-l5-q4","prompt":"What is one major lesson from this study?","options":["Behavior is never important","Lies can shape desire, choices, and life patterns","Sin only affects the body","Truth is unrelated to spiritual growth"],"correctIndex":1,"explanation":"The lesson shows that deception shapes perception, desire, choices, and patterns of living."},{"id":"foh-l5-q5","kind":"reflection","prompt":"What truth from Scripture do you need to use against a lie you have believed?","explanation":"Jesus restores the heart through truth. Naming the lie and answering it with Scripture helps rebuild trust in God."}]}}
$foh_l5_reader$::jsonb
where slug = 'how-lies-shape-lives'
  and study_series_id = 'e4000001-0000-4000-8000-000000000074';
update public.lessons
set reader_content = $foh_l6_reader$
{"openingThought":"The fall began when humanity believed a lie.\n\nJesus entered the world and answered that lie with truth.\n\nWhere Adam and Eve distrusted God in a garden, Jesus trusted the Father in a wilderness. Where humanity reached for what God had not given, Jesus refused to use His power outside the Father's will.\n\nThe enemy came to Jesus with temptation, pressure, and distortion.\n\nBut Jesus stood firm.\n\nHe did not fall into distrust.\nHe did not turn inward.\nHe did not use freedom for selfishness.\n\nJesus came as the faithful Son who reversed the path of the fall.","scriptureRef":"Matthew 4:4","scriptureQuote":"But he answered and said, It is written, Man shall not live by bread alone, but by every word that proceedeth out of the mouth of God.","scriptureSecondaryRef":"Matthew 4:10","scriptureSecondaryQuote":"Then saith Jesus unto him, Get thee hence, Satan: for it is written, Thou shalt worship the Lord thy God, and him only shalt thou serve.","scriptureSupplementBlocks":[{"type":"scripture","reference":"John 8:32","quote":"And ye shall know the truth, and the truth shall make you free."},{"type":"scripture","reference":"Romans 5:19","quote":"For as by one man's disobedience many were made sinners, so by the obedience of one shall many be made righteous."}],"teachingPoints":["1. Jesus faced temptation with trust\n\nIn the wilderness, Satan tempted Jesus to question the Father's care, timing, and word.\n\nJesus had real hunger.\nReal pressure.\nReal opportunity to choose another way.\n\nBut He answered every temptation with Scripture.\n\nHis trust in the Father remained unbroken.","2. Jesus refused selfish independence\n\nThe serpent tempted Eve to take life apart from God's word.\n\nSatan tempted Jesus to use His power apart from the Father's will.\n\nJesus refused.\n\nHe would not use divine power to serve self.\n\nHe lived in perfect dependence on the Father.","3. Jesus restored truth where lies had entered\n\nThe fall began with deception.\n\nJesus answered deception with truth.\n\nJohn 8:32 says truth makes us free.\n\nThis freedom is not merely intellectual. It is spiritual freedom from lies, bondage, shame, and distrust.\n\nJesus does not only tell the truth.\n\nHe is the truth that restores us.","4. Jesus succeeded where humanity failed\n\nRomans 5 contrasts Adam and Christ.\n\nThrough Adam's disobedience, sin spread through humanity.\n\nThrough Christ's obedience, righteousness and restoration are made available.\n\nJesus came as the new representative of humanity.\n\nHe did what fallen humanity could not do.\n\nHe remained faithful."],"wordStudyBeforeStudyInsight":true,"wordStudyStepTitle":"Word Insight","wordStudyStepIntro":"Romans names obedience as the path that righteousness follows in Christ.","wordStudy":{"surface":"Obedience","lemma":"ὑπακοή (hypakoē)","transliteration":"hypakoē","meaning":"Faithful listening, trustful response, and alignment with God's will.","strongs":"G5218","reference":"Romans 5:19","note":"Jesus' obedience was not cold rule-keeping.\n\nIt was love-filled trust in the Father.\n\nWhere sin says, \"I will decide apart from God,\" obedience says, \"I trust the Father's way.\"\n\nJesus' obedience reveals what humanity was created for."},"studyInsight":{"title":"Study Insight","placement":"after_teaching","variant":"christ_connection","body":"The temptation of Jesus is not just an isolated story.\n\nIt is a reversal story.\n\nIn Eden, humanity was surrounded by food and failed to trust God.\n\nIn the wilderness, Jesus was hungry and still trusted the Father.\n\nIn Eden, the serpent twisted God's word.\n\nIn the wilderness, Jesus stood on God's word.\n\nIn Eden, humanity reached for exaltation.\n\nIn the wilderness, Jesus refused self-exaltation.\n\nIn Eden, the fall began.\n\nIn Christ, restoration began.\n\nThis is why Jesus is not only our example.\n\nHe is our Savior.\n\nHe succeeds where we failed, then invites us into His victory."},"studyInsightBlocks":[{"type":"studyVisual","title":"Eden and the wilderness","accent":"stone","description":"Where humanity fell versus where Christ stood faithful.","payload":{"variant":"comparison","leftTitle":"Eden","rightTitle":"Wilderness","leftItems":["Abundance","Deception","Distrust","Fall"],"rightItems":["Hunger","Scripture","Trust","Victory"]}},{"type":"scriptureChain","title":"Christ Reverses the Fall","references":[{"reference":"Genesis 3:6"},{"reference":"Matthew 4:4"},{"reference":"Matthew 4:10"},{"reference":"Romans 5:19"}]},{"type":"paragraph","text":"Takeaway: Where humanity fell through distrust and disobedience, Jesus stood faithful through trust, Scripture, and obedience to the Father."}],"reflectPrompt":"Where do you most need Jesus to restore trust in God's word and God's character?\n\nThink about an area where temptation feels strong, obedience feels difficult, or God's way feels hard to trust.","lifeApplicationStepTitle":"Life Application and Prayer","lifeApplication":"This week, practice answering temptation with truth.\n\nWhen temptation speaks, do not only argue with your feelings.\n\nBring Scripture into the moment.\n\nUse a simple pattern:\n\nTemptation:\n\"I need this to be satisfied.\"\n\nTruth:\n\"Man shall not live by bread alone.\"\n\nTemptation:\n\"God's way is holding me back.\"\n\nTruth:\n\"The truth shall make you free.\"\n\nYou are not fighting alone.\n\nJesus has already stood where humanity fell, and He gives strength to those who trust Him.\n\nPrayer:\n\nJesus, thank You for succeeding where humanity failed. Thank You for trusting the Father perfectly and standing firm against temptation. Help me bring Your truth into the places where I am tempted to distrust God. Restore my heart, strengthen my faith, and teach me to walk in Your victory. Amen.","prayer":"","completionSummary":"Jesus reversed the path of the fall. Where humanity believed lies and turned from God, Christ trusted the Father, stood on Scripture, and opened the way back to restoration.","lessonQuiz":{"eyebrow":"CHECK YOUR UNDERSTANDING","title":"Quick Review","description":"Check your understanding before moving on.","settings":{"quizRequired":false,"passingScore":70,"allowRetake":true},"questions":[{"id":"foh-l6-q1","prompt":"How did Jesus respond to temptation in Matthew 4?","options":["By quoting Scripture","By ignoring the Father","By giving in slowly","By asking Satan for advice"],"correctIndex":0,"explanation":"Jesus answered temptation with \"It is written,\" showing His trust in God's word."},{"id":"foh-l6-q2","prompt":"What did Jesus refuse to do in the wilderness?","options":["Trust the Father","Use His power selfishly outside the Father's will","Pray","Remember Scripture"],"correctIndex":1,"explanation":"Jesus refused to use His power for selfish independence and remained surrendered to the Father."},{"id":"foh-l6-q3","prompt":"According to John 8:32, what does truth do?","options":["Makes people free","Makes sin harmless","Removes the need for faith","Hides deception"],"correctIndex":0,"explanation":"Jesus said the truth shall make you free, showing that truth breaks the power of lies and bondage."},{"id":"foh-l6-q4","prompt":"According to Romans 5:19, what comes through Christ's obedience?","options":["Many are made righteous","Sin becomes stronger","Humanity is forgotten","God stops loving the world"],"correctIndex":0,"explanation":"Romans 5:19 says that through the obedience of One, many are made righteous."},{"id":"foh-l6-q5","kind":"reflection","prompt":"How can Jesus' victory in the wilderness encourage you when you face temptation?","explanation":"Jesus stood faithful where humanity failed. His victory gives hope, strength, and restoration to those who trust Him."}]}}
$foh_l6_reader$::jsonb
where slug = 'jesus-reversed-the-fall'
  and study_series_id = 'e4000001-0000-4000-8000-000000000074';
update public.lessons
set reader_content = $foh_l7_reader$
{"openingThought":"The fall began with a lie.\n\nRestoration begins with truth.\n\nHumanity fell when trust in God was broken. Fear entered. Shame entered. Blame entered. Sin bent the heart inward.\n\nBut Jesus came to restore what was lost.\n\nHe does not only forgive us and leave us unchanged. He brings us back into truth, trust, love, and new life.\n\nThe gospel is not merely God erasing a record.\n\nIt is God restoring a relationship.\n\nIn Christ, the heart that once hid from God can learn to come near again.","scriptureRef":"John 17:3","scriptureQuote":"And this is life eternal, that they might know thee the only true God, and Jesus Christ, whom thou hast sent.","scriptureSecondaryRef":"1 Timothy 2:4","scriptureSecondaryQuote":"Who will have all men to be saved, and to come unto the knowledge of the truth.","scriptureSupplementBlocks":[{"type":"scripture","reference":"2 Corinthians 5:17","quote":"Therefore if any man be in Christ, he is a new creature: old things are passed away; behold, all things are become new."},{"type":"scripture","reference":"John 8:32","quote":"And ye shall know the truth, and the truth shall make you free."}],"teachingPoints":["1. Salvation restores knowing God\n\nJohn 17:3 says eternal life is knowing the true God and Jesus Christ.\n\nThat means salvation is deeply relational.\n\nGod does not only want legal pardon.\n\nHe wants restored trust, restored fellowship, and restored knowledge of His character.\n\nThe fall damaged how humanity saw God.\n\nJesus restores the truth about who God is.","2. God wants people to know the truth\n\n1 Timothy 2:4 says God desires all people to be saved and to come to the knowledge of the truth.\n\nTruth matters because lies brought the fall.\n\nThe serpent's deception distorted God's character and led humanity away from trust.\n\nSo God's saving work includes bringing truth back into the human heart.","3. In Christ, new life begins\n\n2 Corinthians 5:17 says anyone in Christ is a new creature.\n\nThis does not mean believers never struggle.\n\nIt means the old life no longer has final authority.\n\nIn Christ, restoration has begun.\n\nThe heart can be renewed.\nTrust can be rebuilt.\nShame can be healed.\nLove can grow again.","4. Truth makes us free\n\nJohn 8:32 says truth makes us free.\n\nNot every freedom is real freedom.\n\nSin promises freedom while producing bondage.\n\nJesus frees us by revealing what is true about God, true about sin, true about ourselves, and true about His love.\n\nFreedom begins when lies lose their grip."],"wordStudyBeforeStudyInsight":true,"wordStudyStepTitle":"Word Insight","wordStudyStepIntro":"When Jesus ties eternal life to knowing God, Scripture is speaking personally, not vaguely.","wordStudy":{"surface":"Know","lemma":"γινώσκω (ginōskō)","transliteration":"ginōskō","meaning":"To know personally, relationally, and experientially.","strongs":"G1097","reference":"John 17:3","note":"When Jesus says eternal life is knowing God, He is not talking about religious trivia.\n\nHe is describing restored relationship.\n\nThe goal is not merely to know facts about God.\n\nThe goal is to know Him, trust Him, and live in His love."},"studyInsight":{"title":"Study Insight","placement":"after_teaching","variant":"christ_connection","body":"The fall affected humanity in three major ways:\n\nPerceptually:\nWe began seeing God through lies.\n\nRelationally:\nWe began hiding from God and blaming one another.\n\nMorally:\nWe began living out of harmony with love.\n\nJesus restores all three.\n\nHe restores perception by revealing the Father.\n\nHe restores relationship by drawing us back to God.\n\nHe restores morality by renewing the heart through truth and love.\n\nThat means the gospel reaches deeper than behavior management.\n\nJesus heals the roots.\n\nThe life of faith is a journey of learning to see God clearly again, trust Him deeply again, and love as we were created to love."},"studyInsightBlocks":[{"type":"studyVisual","title":"What the fall broke, Christ restores","accent":"sage","description":"Three arenas of damage—and how Jesus heals them.","payload":{"variant":"comparison","leftTitle":"The fall damaged","rightTitle":"Jesus restores","leftItems":["Perception","Relationship","Morality"],"rightItems":["Truth","Trust","Love"]}},{"type":"scriptureChain","title":"Restored in Christ","references":[{"reference":"John 17:3"},{"reference":"John 8:32"},{"reference":"1 Timothy 2:4"},{"reference":"2 Corinthians 5:17"}]},{"type":"paragraph","text":"Takeaway: Jesus restores what the fall damaged by bringing us back into truth, trust, love, and new life with God."}],"reflectPrompt":"Where do you most need Jesus to restore you right now: how you see God, how you trust God, or how you live in love?\n\nChoose one area and be specific. Restoration begins when we stop hiding and allow Christ to meet us honestly.","lifeApplicationStepTitle":"Life Application and Prayer","lifeApplication":"This week, practice living restored.\n\nChoose one lie you have believed and replace it with truth.\n\nExample:\n\nLie:\n\"God is disappointed and distant.\"\n\nTruth:\nJesus came to bring me back to the Father.\n\nLie:\n\"I am too broken to change.\"\n\nTruth:\nIf anyone is in Christ, he is a new creature.\n\nLie:\n\"Sin will make me free.\"\n\nTruth:\nThe truth in Jesus makes me free.\n\nDo not just read the truth.\n\nReturn to it daily.\n\nLet it reshape your trust, your choices, and your view of God.\n\nPrayer:\n\nFather, thank You for restoring what sin has damaged. Help me know You as You truly are. Replace lies with truth, fear with trust, shame with grace, and selfishness with love. Make me new in Christ, and teach me to live as someone who has been brought back to You. Amen.","prayer":"","completionSummary":"You have completed The Fall of Humanity. The fall began with a lie, but restoration begins with truth. In Jesus, God restores trust, heals shame, renews love, and brings humanity back to Himself.","seriesCompleteScreen":{"title":"Study Complete","message":"You have completed The Fall of Humanity. The fall began with a lie, but restoration begins with truth. In Jesus, God restores trust, heals shame, renews love, and brings humanity back to Himself.","primaryCta":{"label":"Back to Foundations Path","href":"/paths/foundations"},"secondaryCta":{"label":"Review this study","href":"/study-library/the-fall-of-humanity"}},"lessonQuiz":{"eyebrow":"CHECK YOUR UNDERSTANDING","title":"Quick Review","description":"Check your understanding before moving on.","settings":{"quizRequired":false,"passingScore":70,"allowRetake":true},"questions":[{"id":"foh-l7-q1","prompt":"According to John 17:3, what is eternal life?","options":["Knowing the only true God and Jesus Christ","Knowing every prophecy chart","Never asking questions","Being naturally perfect"],"correctIndex":0,"explanation":"Jesus said eternal life is knowing the only true God and Jesus Christ, showing that salvation is relational."},{"id":"foh-l7-q2","prompt":"According to 1 Timothy 2:4, what does God desire?","options":["That all people be saved and come to the knowledge of the truth","That people stay confused","That only angels understand truth","That humanity remain afraid"],"correctIndex":0,"explanation":"1 Timothy 2:4 says God desires all people to be saved and to come to the knowledge of the truth."},{"id":"foh-l7-q3","prompt":"What does 2 Corinthians 5:17 say about someone in Christ?","options":["They are a new creature","They cannot grow","They are beyond God's reach","They are unchanged forever"],"correctIndex":0,"explanation":"2 Corinthians 5:17 says that anyone in Christ is a new creature and that old things are passed away."},{"id":"foh-l7-q4","prompt":"What does Jesus restore according to this lesson?","options":["Truth, trust, love, and new life","Fear, shame, and hiding","Confusion and rebellion","Selfishness and pride"],"correctIndex":0,"explanation":"Jesus restores what the fall damaged by bringing us back into truth, trust, love, and new life with God."},{"id":"foh-l7-q5","kind":"reflection","prompt":"What truth about God do you want to carry with you after finishing this study?","explanation":"The fall began with lies about God. Restoration continues as we receive and live by the truth revealed in Jesus."}]}}
$foh_l7_reader$::jsonb
where slug = 'restored-through-truth-and-love'
  and study_series_id = 'e4000001-0000-4000-8000-000000000074';






update public.lessons
set reader_content = '{"draftShell": true}'::jsonb
where study_series_id = 'e4000001-0000-4000-8000-000000000073';

update public.lessons
set reader_content = $wih_l1_reader$
{"openingThought":"Most people look at evil and ask, “What is wrong with the world?”\n\nThe Bible pushes the question deeper.\n\nIt shows us that the pain, deception, violence, and selfishness we see on earth are not random accidents. They are part of a larger conflict between good and evil, truth and lies, love and rebellion.\n\nThis conflict did not begin with humanity.\n\nBefore sin entered this world, there was a rebellion in heaven. Scripture pulls back the curtain and shows us that earth is connected to a much bigger story.\n\nThat may sound intense, but it also gives us hope.\n\nIf evil had a beginning, then evil can have an ending.","scriptureRef":"Revelation 12:7","scriptureQuote":"And there was war in heaven: Michael and his angels fought against the dragon; and the dragon fought and his angels.","scriptureSecondaryRef":"Ephesians 6:12","scriptureSecondaryQuote":"For we wrestle not against flesh and blood, but against principalities, against powers, against the rulers of the darkness of this world.","scriptureSupplementBlocks":[{"type":"scripture","reference":"Hebrews 1:14","quote":"Are they not all ministering spirits, sent forth to minister for them who shall be heirs of salvation?"}],"teachingPoints":["1. The Bible reveals an unseen conflict\n\nScripture does not present our world as isolated. Behind the visible struggles of human life, there is an unseen spiritual conflict.\n\nThis does not mean every problem should be blamed directly on demons or spiritual forces. The Bible is more careful than that.\n\nBut it does show us that evil is bigger than human weakness alone.\n\nThere is a real conflict between God’s kingdom and the kingdom of darkness.","2. Angels are real beings in Scripture\n\nThe Bible describes angels as intelligent, powerful beings created by God.\n\nThey are not cute symbols or fantasy creatures. They appear throughout Scripture as messengers, worshipers, protectors, and servants of God.\n\nHebrews 1:14 says they are “ministering spirits.” This means they serve within God’s purposes and care.\n\nBefore humans existed, angels were already part of God’s created order.","3. Evil began before earth fell\n\nRevelation 12 says there was “war in heaven.”\n\nThat means evil did not begin in a broken neighborhood, a corrupt government, or a human family tree.\n\nThe roots go deeper.\n\nSin began as rebellion against God in heaven. Earth became part of that conflict later.","4. The issue is not just power. It is trust.\n\nWhen the Bible describes this war, it is not only describing force. It is revealing a conflict over loyalty, truth, and the character of God.\n\nCan God be trusted?\n\nIs His way of love truly good?\n\nIs His government fair?\n\nThose questions sit underneath the entire story of Scripture."],"wordStudyBeforeStudyInsight":true,"wordStudyStepTitle":"Word Insight","wordStudyStepIntro":"The Greek behind “war” in Revelation 12:7 is worth a calm look.","wordStudy":{"surface":"War","lemma":"πόλεμος (polemos)","transliteration":"polemos","meaning":"The word translated “war” is connected to conflict, battle, and struggle. It can describe more than physical fighting.","strongs":"G4171","reference":"Revelation 12:7","note":"The war in heaven was not only about strength. It was a conflict over truth, loyalty, and the character of God.\n\nSatan’s weapon was deception.\n\nGod’s answer is truth revealed through love."},"studyInsight":{"title":"Study Insight","placement":"after_teaching","variant":"doctrine_clarity","body":"Revelation 12 gives us one of the Bible’s clearest glimpses behind the curtain.\n\nIt tells us that evil is not eternal. Evil is not equal with God. Evil is not something God needed in order to be God.\n\nEvil began when created beings turned away from God’s love and chose rebellion.\n\nThat matters because it protects us from blaming God for the darkness He is working to destroy.\n\nThe Bible does not say God created evil.\n\nIt says war broke out in heaven.\n\nThis means evil is an intruder in God’s universe. It has no rightful place here."},"studyInsightBlocks":[{"type":"studyVisual","title":"From heaven to rescue","accent":"stone","description":"A simple map of how Scripture connects unseen conflict with life on earth.","payload":{"variant":"sequence","steps":[{"label":"Heavenly conflict","subtitle":"War in heaven: loyalty, truth, and God’s character contested."},{"label":"Deception and rebellion","subtitle":"Sin begins with turning from God’s love."},{"label":"Earth affected","subtitle":"Our world is swept into the larger story."},{"label":"Jesus enters to rescue","subtitle":"Truth and love answer darkness."}]},"footnote":"Evil began as intrusion, not as something eternal beside God."},{"type":"scriptureChain","title":"The Bigger Conflict","references":[{"reference":"Revelation 12:7"},{"reference":"Revelation 12:9"},{"reference":"Ephesians 6:12"},{"reference":"1 John 3:8"}]},{"type":"paragraph","text":"Takeaway: The Bible shows that evil is part of a larger conflict, but Jesus came to destroy the works of the devil and restore God’s creation."}],"reflectPrompt":"When you look at the evil and suffering in the world, what question do you most often find yourself asking God?\n\nBe honest. This is not about giving the “right” answer. It is about bringing your real questions into the light of Scripture.","lifeApplicationStepTitle":"Life Application and Prayer","lifeApplication":"This week, do not reduce every struggle to what you can see.\n\nThere may be more happening than what appears on the surface.\n\nWhen you face confusion, temptation, fear, or discouragement, pause and ask:\n\n“What truth about God do I need to remember right now?”\n\nThe conflict is real, but you are not left alone in it.\n\nGod has not abandoned the world to darkness. Jesus has entered the story, and He is leading us back to truth, love, and life.\\n\\nPrayer\\n\\nFather, help me understand the conflict behind the pain I see in the world. Teach me not to blame You for evil, but to trust that You are working to defeat it. Open my eyes to Your truth. Keep my heart close to Jesus, and help me stand on the side of love. Amen.","prayer":"","completionSummary":"You have started to see the bigger picture. Evil is real, but it is not eternal. The conflict began before us, but Jesus has entered the story to rescue us.","lessonQuiz":{"eyebrow":"CHECK YOUR UNDERSTANDING","title":"Quick Review","description":"Check your understanding before moving on.","settings":{"quizRequired":false,"passingScore":70,"allowRetake":true},"questions":[{"id":"wih-l1-q1","prompt":"According to Revelation 12:7, where did war break out?","options":["In Egypt","In heaven","In Jerusalem","In the wilderness"],"correctIndex":1,"explanation":"Revelation 12:7 says there was war in heaven, showing that the conflict between good and evil began before earth became involved."},{"id":"wih-l1-q2","prompt":"What does Ephesians 6:12 teach us?","options":["All problems are imaginary","Our struggle is only against people","There is an unseen spiritual conflict","Angels are not real"],"correctIndex":2,"explanation":"Ephesians 6:12 explains that our struggle is not merely against flesh and blood, but includes unseen spiritual powers."},{"id":"wih-l1-q3","prompt":"What are angels described as in Hebrews 1:14?","options":["Ministering spirits","Human souls","Myths","Symbols of nature"],"correctIndex":0,"explanation":"Hebrews 1:14 describes angels as ministering spirits who serve within God’s purposes."},{"id":"wih-l1-q4","prompt":"What is one major issue at the center of the conflict between good and evil?","options":["Whether humans are stronger than angels","Whether God’s character can be trusted","Whether heaven is a physical place","Whether evil is stronger than God"],"correctIndex":1,"explanation":"The conflict is deeply connected to trust in God’s character, His love, and His way of governing."},{"id":"wih-l1-q5","kind":"reflection","prompt":"How does it change your view of suffering to know that evil did not begin with God, but with rebellion against Him?","explanation":"This reflection helps the learner connect the doctrine of the cosmic conflict with real questions about pain, trust, and God’s character."}]}}
$wih_l1_reader$::jsonb
where slug = 'a-conflict-bigger-than-earth'
  and study_series_id = 'e4000001-0000-4000-8000-000000000073';



update public.lessons
set reader_content = $wih_l2_reader$
{"openingThought":"Evil did not begin as something ugly.\n\nThat is one of the most sobering truths in Scripture.\n\nThe rebellion against God did not start with someone who looked obviously dangerous. It began with a created being who was gifted, honored, and close to God.\n\nLucifer was not created evil.\n\nHe was created beautiful, wise, and full of purpose. But something changed inside him. The gift became a reason for pride. The position became a reason for self-exaltation. The heart that was made to reflect God began to turn inward.\n\nThis lesson helps us understand how evil could begin in a perfect place.","scriptureRef":"Ezekiel 28:15","scriptureQuote":"Thou wast perfect in thy ways from the day that thou wast created, till iniquity was found in thee.","scriptureSecondaryRef":"Isaiah 14:12 to 14","scriptureSecondaryQuote":"How art thou fallen from heaven, O Lucifer, son of the morning! how art thou cut down to the ground, which didst weaken the nations!\n\nFor thou hast said in thine heart, I will ascend into heaven, I will exalt my throne above the stars of God: I will sit also upon the mount of the congregation, in the sides of the north:\n\nI will ascend above the heights of the clouds; I will be like the most High.","scriptureSupplementBlocks":[{"type":"scripture","reference":"Ezekiel 28:17","quote":"Thine heart was lifted up because of thy beauty, thou hast corrupted thy wisdom by reason of thy brightness."}],"teachingPoints":["1. Lucifer was created good\n\nThe Bible does not teach that God created Satan as Satan.\n\nLucifer was created by God with beauty, intelligence, and purpose. Ezekiel describes him as “perfect” in his ways until iniquity was found in him.\n\nThat means evil was not built into him by God.\n\nSin began through a choice.","2. Pride began in the heart\n\nEzekiel says Lucifer’s heart was lifted up because of his beauty.\n\nThe problem was not beauty itself. The problem was what he did with it.\n\nInstead of receiving his gifts with gratitude, he began to treat them as reasons for self-exaltation.\n\nThis is where pride becomes dangerous.\n\nPride takes what God gave and uses it to compete with God.","3. Lucifer wanted God’s position\n\nIsaiah 14 shows the language of self-exaltation:\n\n“I will ascend.”\n\n“I will exalt my throne.”\n\n“I will be like the most High.”\n\nLucifer did not simply want to serve near God. He wanted to rise above the place God had given him.\n\nHis desire shifted from reflecting God to replacing God.","4. Sin is irrational, but not random\n\nThere is no good reason for sin.\n\nLucifer was not mistreated. He was not neglected. He was not created broken.\n\nBut freedom allowed him to choose a direction away from love.\n\nSin does not make sense because sin is a departure from truth.\n\nIt begins when the heart trusts self more than God."],"wordStudyBeforeStudyInsight":true,"wordStudyStepTitle":"Word Insight","wordStudyStepIntro":"The name tied to this figure is often heard, but Scripture points past the label to the heart behind it.","wordStudy":{"surface":"Lucifer","lemma":"הֵילֵל (helel)","transliteration":"helel","meaning":"Often understood as light-bearer or morning star (see context in Isaiah 14:12, KJV).","strongs":"H1966","reference":"Isaiah 14:12","note":"Lucifer was created to reflect light, not steal glory.\n\nHis fall shows what happens when a created being stops receiving identity from God and starts building identity around self.\n\nThe tragedy is not just that Lucifer fell.\n\nThe tragedy is that a being made to reveal light became a source of darkness."},"studyInsight":{"title":"Study Insight","placement":"after_teaching","variant":"doctrine_clarity","body":"The Bible’s picture of Lucifer matters because it protects God’s character.\n\nIf God created Satan evil, then God would be responsible for evil.\n\nBut Scripture shows something different.\n\nLucifer was created good. He was given freedom. He used that freedom to turn inward, exalt himself, and rebel against God’s order of love.\n\nThis helps us understand the difference between God allowing freedom and God causing evil.\n\nLove cannot exist without freedom.\n\nBut freedom can be misused.\n\nLucifer’s story warns us that sin often begins quietly. It begins when the heart stops worshiping and starts comparing. It begins when gifts become identity. It begins when “God is good” gets replaced with “I deserve more.”"},"studyInsightBlocks":[{"type":"studyVisual","title":"When good becomes self-exalted","accent":"sage","description":"A sober progression Scripture ties to pride and rebellion.","payload":{"variant":"sequence","steps":[{"label":"Created good","subtitle":"Made with beauty, wisdom, and a place beneath God’s love."},{"label":"Heart lifted up","subtitle":"Gifts are received without gratitude, or turned inward."},{"label":"Self-exaltation","subtitle":"\"I will\" replaces trust; position competes with the Creator."},{"label":"Rebellion","subtitle":"Love is refused and God’s order is rejected."}]},"footnote":"Sin often begins quietly, when worship becomes comparison and \"God is good\" becomes \"I deserve more.\""},{"type":"scriptureChain","title":"The Fall of Lucifer","references":[{"reference":"Ezekiel 28:15"},{"reference":"Ezekiel 28:17"},{"reference":"Isaiah 14:12 to 14"},{"reference":"Revelation 12:9"}]},{"type":"paragraph","text":"Takeaway: Lucifer was created good, but pride and self-exaltation led him away from God and into rebellion."}],"reflectPrompt":"Where are you most tempted to build your identity around your gifts, appearance, success, knowledge, or position instead of receiving your identity from God?\n\nThis question is not meant to shame you. It is meant to help you notice where pride can quietly begin.","lifeApplicationStepTitle":"Life Application and Prayer","lifeApplication":"Lucifer’s fall teaches us that pride does not always look loud at first.\n\nSometimes pride sounds like:\n\n“I deserve more.”\n\n“I should be above them.”\n\n“I do not need correction.”\n\n“I know better than God.”\n\nThis week, practice gratitude as a weapon against pride.\n\nName one gift God has given you, then surrender it back to Him.\n\nSay:\n\n“Lord, this came from You. Help me use it for love, not self-exaltation.”\n\nThe safest place for any gift is in the hands of the One who gave it.\n\nPrayer\n\nFather, guard my heart from pride. Help me remember that every good thing I have comes from You. Teach me to receive my gifts with gratitude and use them for love. Keep me from turning inward and trusting myself more than You. Make my life reflect Your light. Amen.","prayer":"","completionSummary":"Lucifer’s fall shows that evil did not begin with God. It began when a created being turned from gratitude to pride, from worship to self-exaltation.","lessonQuiz":{"eyebrow":"CHECK YOUR UNDERSTANDING","title":"Quick Review","description":"Check your understanding before moving on.","settings":{"quizRequired":false,"passingScore":70,"allowRetake":true},"questions":[{"id":"wih-l2-q1","prompt":"According to Ezekiel 28:15, how was Lucifer originally described?","options":["Evil from the beginning","Perfect in his ways until iniquity was found in him","A human king only","Weak and powerless"],"correctIndex":1,"explanation":"Ezekiel 28:15 shows that Lucifer was created good and became corrupt through rebellion."},{"id":"wih-l2-q2","prompt":"What did Ezekiel 28:17 say happened to Lucifer’s heart?","options":["It was humbled by beauty","It was lifted up because of his beauty","It was destroyed immediately","It became human"],"correctIndex":1,"explanation":"Ezekiel 28:17 says Lucifer’s heart was lifted up because of his beauty, showing the beginning of pride."},{"id":"wih-l2-q3","prompt":"What repeated phrase appears in Isaiah 14:12 to 14 that reveals Lucifer’s self-exaltation?","options":["“I will”","“God said”","“They worshiped”","“It is finished”"],"correctIndex":0,"explanation":"The repeated phrase “I will” shows Lucifer’s desire to exalt himself and take a position that belonged to God."},{"id":"wih-l2-q4","prompt":"What does Lucifer’s fall teach us about evil?","options":["God created evil on purpose","Evil is stronger than God","Evil began through the misuse of freedom","Evil only exists on earth"],"correctIndex":2,"explanation":"Lucifer was created good, but he misused freedom and chose rebellion against God."},{"id":"wih-l2-q5","kind":"reflection","prompt":"Why is gratitude an important protection against pride?","explanation":"Gratitude reminds us that our gifts come from God and are meant to be used for love, not self-exaltation."}]}}
$wih_l2_reader$::jsonb
where slug = 'the-rise-of-lucifer'
  and study_series_id = 'e4000001-0000-4000-8000-000000000073';

update public.lessons
set reader_content = $wih_l3_reader$
{"openingThought":"Not every war begins with weapons.\n\nSome wars begin with a question.\n\nCan God be trusted?\n\nThat question sits at the center of the conflict between good and evil. Lucifer’s rebellion was not only a power struggle. It was an attack on God’s character.\n\nIf trust in God could be broken, loyalty to God would begin to weaken.\n\nThat is how deception works. It does not always start by denying God exists. Sometimes it starts by making God look selfish, unfair, controlling, or unsafe.\n\nThe war in heaven was a war over who God really is.","scriptureRef":"Revelation 12:9","scriptureQuote":"And the great dragon was cast out, that old serpent, called the Devil, and Satan, which deceiveth the whole world.","scriptureSecondaryRef":"John 8:44","scriptureSecondaryQuote":"He was a murderer from the beginning, and abode not in the truth, because there is no truth in him.","scriptureSupplementBlocks":[{"type":"scripture","reference":"Romans 13:10","quote":"Love worketh no ill to his neighbour: therefore love is the fulfilling of the law."}],"teachingPoints":["1. Satan’s main weapon is deception\n\nRevelation 12:9 describes Satan as the one who deceives the whole world.\n\nThat means his power is not only force. It is falsehood.\n\nHe works by distorting reality, twisting God’s words, and making lies feel believable.\n\nDeception is dangerous because it does not always feel like deception while it is happening.","2. The conflict is about God’s trustworthiness\n\nSatan’s rebellion challenged the goodness of God’s rule.\n\nHe suggested, directly or indirectly, that God could not be trusted.\n\nThis is still how temptation works.\n\nTemptation often begins by making us question God’s heart:\n\n“Is God really good?”\n\n“Is His way really best?”\n\n“Is His law holding me back?”","3. God’s law is rooted in love\n\nRomans 13:10 says love is the fulfilling of the law.\n\nThis means God’s commands are not random restrictions. They are expressions of His character.\n\nGod does not govern through selfish control.\n\nHe governs through truth, love, and righteousness.\n\nSatan’s goal is to make God’s law look like bondage, when Scripture presents it as the shape of love.","4. Lies about God lead to rebellion against God\n\nWhen people believe God is harsh, selfish, distant, or controlling, their hearts naturally pull away from Him.\n\nThat is why the enemy attacks God’s character.\n\nIf he can damage your view of God, he can weaken your trust in God.\n\nBut Jesus came to show us the truth.\n\nGod is not like the enemy says He is."],"wordStudyBeforeStudyInsight":true,"wordStudyStepTitle":"Word Insight","wordStudyStepIntro":"The name Satan is more than folklore. Scripture names the adversary and names his aim.","wordStudy":{"surface":"Satan","lemma":"שָׂטָן (śāṭān)","transliteration":"śāṭān","meaning":"Adversary or opponent; one who withstands or accuses.","strongs":"H7854","reference":"Revelation 12:9","note":"Satan is not merely a symbol of bad behavior. Scripture presents him as the adversary who opposes God by spreading deception.\n\nHis attack is aimed at trust.\n\nIf he can make God look unsafe, he can make rebellion look reasonable."},"studyInsight":{"title":"Study Insight","placement":"after_teaching","variant":"doctrine_clarity","body":"The war in heaven was not mainly about who had more strength.\n\nGod is Creator. Lucifer was created.\n\nThere was never a question of equal power.\n\nThe deeper issue was trust.\n\nWould created beings believe God’s character was truly love?\n\nWould they believe His law was good?\n\nWould they trust that His way of life was the only path to freedom and joy?\n\nThis is why Jesus matters so much.\n\nJesus did not come only to forgive sins. He came to reveal the Father.\n\nEvery healing, every act of mercy, every word of truth, every moment of patience showed what God is really like.\n\nAt the cross, Satan’s accusations were exposed. God’s love was revealed, not as a theory, but as self-giving sacrifice."},"studyInsightBlocks":[{"type":"studyVisual","title":"Accusation and revelation","accent":"stone","description":"A sober contrast between the enemy’s story and Jesus’ unveiling of the Father.","payload":{"variant":"comparison","leftTitle":"Satan’s accusation","rightTitle":"Jesus’ revelation","leftItems":["God cannot be trusted."],"rightItems":["God is self-giving love."]},"footnote":"Test passing thoughts against the God Scripture shows us in Christ."},{"type":"scriptureChain","title":"Truth Versus Deception","references":[{"reference":"Revelation 12:9"},{"reference":"John 8:44"},{"reference":"John 14:9"},{"reference":"Romans 13:10"}]},{"type":"paragraph","text":"Takeaway: Satan attacks God’s character through lies, but Jesus reveals the truth about the Father."}],"reflectPrompt":"What false picture of God have you struggled with most?\n\nMaybe you have seen God as distant, angry, impossible to please, or uninterested in your pain. Bring that picture honestly before Scripture.","lifeApplicationStepTitle":"Life Application and Prayer","lifeApplication":"This week, pay attention to the thoughts that shape your view of God.\n\nWhen a thought makes God seem cruel, unsafe, or selfish, pause and test it against Jesus.\n\nAsk:\n\n“Does this match the God revealed in Christ?”\n\nThe enemy wins ground when lies go unchallenged.\n\nTruth grows stronger when we bring our thoughts into the light of Scripture.\n\nPrayer\n\nFather, show me what You are truly like. Remove false pictures of You from my mind and heart. Help me see Your character through Jesus. Teach me to trust Your love, Your law, and Your way. Guard me from deception, and lead me deeper into truth. Amen.","prayer":"","completionSummary":"The war over God’s character is a war over trust. Satan spreads lies, but Jesus reveals the truth: God is love, and His way is life.","lessonQuiz":{"eyebrow":"CHECK YOUR UNDERSTANDING","title":"Quick Review","description":"Check your understanding before moving on.","settings":{"quizRequired":false,"passingScore":70,"allowRetake":true},"questions":[{"id":"wih-l3-q1","prompt":"According to Revelation 12:9, what does Satan do?","options":["Deceives the whole world","Creates the world","Forgives sin","Gives eternal life"],"correctIndex":0,"explanation":"Revelation 12:9 describes Satan as the one who deceives the whole world."},{"id":"wih-l3-q2","prompt":"What does John 8:44 say about the devil?","options":["He always tells the truth","There is no truth in him","He created angels","He is equal with God"],"correctIndex":1,"explanation":"Jesus said there is no truth in the devil, showing that deception is central to his character and work."},{"id":"wih-l3-q3","prompt":"According to Romans 13:10, what fulfills the law?","options":["Fear","Control","Love","Power"],"correctIndex":2,"explanation":"Romans 13:10 says love is the fulfilling of the law, showing that God’s law is rooted in love."},{"id":"wih-l3-q4","prompt":"What was the deeper issue in the war over God’s character?","options":["Whether God was physically strong enough","Whether created beings would trust God’s goodness","Whether angels needed food","Whether earth existed yet"],"correctIndex":1,"explanation":"The conflict centered on trust in God’s character, His love, and His way of governing."},{"id":"wih-l3-q5","kind":"reflection","prompt":"How does Jesus help correct false pictures of God?","explanation":"Jesus reveals the Father clearly. His life, mercy, truth, and sacrifice show what God is truly like."}]}}
$wih_l3_reader$::jsonb
where slug = 'the-war-over-gods-character'
  and study_series_id = 'e4000001-0000-4000-8000-000000000073';


update public.lessons
set reader_content = $wih_l4_reader$
{"openingThought":"Few questions feel heavier than this one:\n\nWhy does evil exist?\n\nIt is not just a theological question. It is personal.\n\nWe ask it when innocent people suffer. We ask it when tragedy hits close to home. We ask it when life feels unfair and heaven feels quiet.\n\nThe Bible does not pretend evil is small. It does not ask us to ignore pain or explain away suffering.\n\nBut Scripture does give us a starting point.\n\nEvil exists because created beings misused freedom. God created beings capable of love, and love requires the ability to choose.\n\nThat freedom made real love possible.\n\nIt also made rebellion possible.","scriptureRef":"1 John 4:8","scriptureQuote":"He that loveth not knoweth not God; for God is love.","scriptureSecondaryRef":"Matthew 22:37 to 40","scriptureSecondaryQuote":"Jesus said unto him, Thou shalt love the Lord thy God with all thy heart, and with all thy soul, and with all thy mind.\n\nThis is the first and great commandment.\n\nAnd the second is like unto it, Thou shalt love thy neighbour as thyself.\n\nOn these two commandments hang all the law and the prophets.","scriptureSupplementBlocks":[{"type":"scripture","reference":"Ecclesiastes 7:29","quote":"God hath made man upright; but they have sought out many inventions."}],"teachingPoints":["1. The Bible begins with God’s character\n\nWhen Scripture says “God is love,” it is not giving us a small devotional thought.\n\nIt is telling us the foundation of reality.\n\nGod’s character is love. His law is love. His kingdom is built on love.\n\nSo any explanation of evil must begin here:\n\nGod is not the author of evil.","2. Love requires freedom\n\nForced love is not love.\n\nGod could have created beings who obeyed automatically, but automatic obedience is not the same as relationship.\n\nLove must be freely given.\n\nThat means real freedom had to exist.\n\nAnd real freedom includes the possibility of choosing wrongly.","3. Evil is the misuse of freedom\n\nEvil did not arise because God lacked power.\n\nIt arose because created beings used freedom against love.\n\nLucifer chose self-exaltation. Humanity later chose distrust and disobedience.\n\nThe result is a world wounded by selfishness, fear, pride, violence, and death.","4. Suffering is not proof that God is absent\n\nSuffering shows that something has gone terribly wrong.\n\nBut it does not mean God has abandoned us.\n\nThe Bible shows God entering human pain, confronting evil, and working toward restoration.\n\nThe cross proves that God does not watch suffering from a distance.\n\nHe steps into it to save us."],"wordStudyBeforeStudyInsight":true,"wordStudyStepTitle":"Word Insight","wordStudyStepIntro":"John does not soften the claim: God’s nature is anchored in love. The Greek behind it is worth noticing.","wordStudy":{"surface":"Love","lemma":"ἀγάπη (agapē)","transliteration":"agape","meaning":"Self-giving, others-centered love, not mere emotion or attraction. It seeks the good of another.","strongs":"G26","reference":"1 John 4:8","note":"If God is agape, then His government cannot be based on selfish control.\n\nGod’s kingdom operates through love, truth, and freedom.\n\nEvil is the rejection of that love."},"studyInsight":{"title":"Study Insight","placement":"after_teaching","variant":"doctrine_clarity","body":"Many people try to explain evil by blaming God.\n\nBut Scripture gives a different picture.\n\nGod created life good. He created beings with the ability to love. He gave freedom because love cannot exist without it.\n\nThe risk of freedom is that someone may choose selfishness instead of love.\n\nThat is what happened with Lucifer.\n\nThat is what happened with humanity.\n\nThis does not make evil good. It does not make pain necessary. It does not make suffering easy to understand.\n\nBut it does show that evil came from rebellion against God’s love, not from God’s heart.\n\nA simple way to remember this lesson is:\n\nLove requires freedom.\nFreedom allows risk.\nRisk makes rebellion possible.\n\nBut God’s answer to rebellion is not abandonment.\n\nHis answer is redemption."},"studyInsightBlocks":[{"type":"studyVisual","title":"From love to redemption","accent":"sage","description":"A sober flow Scripture ties to freedom, risk, rebellion, and Christ’s answer.","payload":{"variant":"sequence","steps":[{"label":"Love","subtitle":"God’s character grounds reality; He is not the author of evil."},{"label":"Freedom","subtitle":"Real love must be freely given, not programmed or forced."},{"label":"Risk","subtitle":"Freedom includes the possibility of choosing wrongly."},{"label":"Rebellion possible","subtitle":"Created beings may turn freedom against love, as with Lucifer and humanity."},{"label":"Redemption through Christ","subtitle":"God responds to rebellion not with abandonment, but with rescue."}]},"footnote":"Love requires freedom. Freedom allows risk. Risk makes rebellion possible. God’s answer is redemption."},{"type":"scriptureChain","title":"Love, Freedom, and Evil","references":[{"reference":"1 John 4:8"},{"reference":"Matthew 22:37 to 40"},{"reference":"Ecclesiastes 7:29"},{"reference":"Romans 5:8"}]},{"type":"paragraph","text":"Takeaway: God is love, and love requires freedom. Evil began when freedom was used against love, but Christ reveals God’s plan to redeem what sin has damaged."}],"reflectPrompt":"When you think about suffering, what is harder for you to believe: that God is loving, that God is powerful, or that God is still present?\n\nBe honest with your answer. Faith grows deeper when we bring real questions to God instead of hiding them.","lifeApplicationStepTitle":"Life Application and Prayer","lifeApplication":"This week, when you see evil or suffering, resist two extremes.\n\nDo not pretend it is fine.\n\nDo not assume God caused it.\n\nInstead, bring it to God honestly.\n\nPray with open hands:\n\n“Lord, this is painful. Help me see You clearly here.”\n\nThe Bible does not call us to deny pain. It calls us to trust God’s character in the middle of pain.\n\nPrayer\n\nFather, I do not always understand why suffering happens. But help me trust that evil does not come from Your heart. Teach me to see Your love clearly, even when the world feels broken. Strengthen my faith, comfort my questions, and keep me close to Jesus. Amen.","prayer":"","completionSummary":"Evil exists because freedom was misused, not because God is unloving. Love required freedom, freedom carried risk, and Christ entered the brokenness to redeem us.","lessonQuiz":{"eyebrow":"CHECK YOUR UNDERSTANDING","title":"Quick Review","description":"Check your understanding before moving on.","settings":{"quizRequired":false,"passingScore":70,"allowRetake":true},"questions":[{"id":"wih-l4-q1","prompt":"According to 1 John 4:8, what is God?","options":["Love","Fear","Confusion","Darkness"],"correctIndex":0,"explanation":"1 John 4:8 says “God is love,” which is the foundation for understanding His character."},{"id":"wih-l4-q2","prompt":"Why does love require freedom?","options":["Because forced love is not real love","Because God lacks power","Because evil is stronger than good","Because angels control human choices"],"correctIndex":0,"explanation":"Love must be freely given. Forced affection or automatic obedience is not the same as real relationship."},{"id":"wih-l4-q3","prompt":"According to Ecclesiastes 7:29, how did God make humanity?","options":["Evil from the beginning","Upright","Unable to choose","Without value"],"correctIndex":1,"explanation":"Ecclesiastes 7:29 says God made man upright, but humanity sought out many inventions."},{"id":"wih-l4-q4","prompt":"What is evil according to this lesson?","options":["Something God created to teach lessons","The misuse of freedom against love","A force equal to God","A necessary part of heaven"],"correctIndex":1,"explanation":"Evil began when created beings used freedom to turn away from God’s love."},{"id":"wih-l4-q5","kind":"reflection","prompt":"How does the cross help you trust God’s character in a world full of suffering?","explanation":"The cross shows that God does not remain distant from suffering. Jesus entered human pain to reveal love and bring redemption."}]}}
$wih_l4_reader$::jsonb
where slug = 'why-evil-and-suffering-exist'
  and study_series_id = 'e4000001-0000-4000-8000-000000000073';


update public.lessons
set reader_content = $wih_l5_reader$
{"openingThought":"God could have created a universe where no one could ever say no.\n\nNo rebellion.\nNo betrayal.\nNo broken trust.\n\nBut there would also be no real love.\n\nLove cannot be programmed. It cannot be forced into existence. It must be freely given.\n\nThat means God’s creation included real freedom.\n\nFreedom is beautiful, but freedom carries risk. A being who can choose love can also reject love. A heart that can worship can also turn inward.\n\nThis does not make God responsible for evil.\n\nIt shows that God values love enough to create beings who can freely respond to Him.","scriptureRef":"Galatians 5:22 to 23","scriptureQuote":"But the fruit of the Spirit is love, joy, peace, longsuffering, gentleness, goodness, faith, meekness, temperance: against such there is no law.","scriptureSecondaryRef":"James 1:17","scriptureSecondaryQuote":"Every good gift and every perfect gift is from above, and cometh down from the Father of lights.","scriptureSupplementBlocks":[{"type":"scripture","reference":"Matthew 13:28","quote":"He said unto them, An enemy hath done this."}],"teachingPoints":["1. God’s gifts are good\n\nJames 1:17 says every good and perfect gift comes from God.\n\nFreedom was one of those gifts.\n\nGod gave created beings the ability to think, choose, love, trust, and respond.\n\nThat freedom was not a flaw in creation. It was part of what made love possible.","2. Freedom is not the same as rebellion\n\nSome people hear about free will and assume freedom caused sin.\n\nBut freedom itself is not evil.\n\nFreedom is the setting where love can exist.\n\nSin entered when created beings used freedom against God’s love.\n\nThe gift was good.\n\nThe misuse of the gift brought ruin.","3. God’s kingdom produces the fruit of love\n\nGalatians 5 describes the fruit of the Spirit.\n\nLove.\nJoy.\nPeace.\nGentleness.\nGoodness.\nFaithfulness.\nSelf-control.\n\nThis is what life looks like when God’s Spirit rules the heart.\n\nGod does not force these qualities into us. He grows them in us as we surrender to Him.","4. Evil is an enemy intrusion\n\nIn Matthew 13:28, Jesus says, “An enemy hath done this.”\n\nThat phrase matters.\n\nNot everything painful comes from God.\n\nNot everything broken reflects God’s will.\n\nEvil is an invasion of God’s good creation, not an expression of God’s character."],"wordStudyBeforeStudyInsight":true,"wordStudyStepTitle":"Word Insight","wordStudyStepIntro":"Freedom sounds simple until sin redefines it. Scripture points toward freedom that heals, not excuses.","wordStudy":{"surface":"Freedom","lemma":"ἐλευθερία (eleutheria)","transliteration":"eleutheria","meaning":"Often translated liberty; release for life with God rather than autonomy from Him.","strongs":"G1657","reference":"John 8:36","note":"Biblical freedom is not the ability to do anything without consequence.\n\nTrue freedom is the ability to live in harmony with God’s love.\n\nSin promises freedom but produces bondage.\n\nGod’s way may include boundaries, but His boundaries protect life, love, and joy."},"studyInsight":{"title":"Study Insight","placement":"after_teaching","variant":"doctrine_clarity","body":"The risk of freedom is one of the hardest parts of understanding evil.\n\nGod wanted love, not robots.\n\nHe wanted relationship, not forced performance.\n\nSo He created beings who could say yes to Him freely.\n\nBut the same freedom that allowed love also allowed rebellion.\n\nThis does not mean God made a mistake.\n\nIt means love was worth creating.\n\nIn the end, God’s answer to the risk of freedom is not to erase love or remove choice.\n\nHis answer is to reveal the truth so clearly that His people freely trust Him forever.\n\nThe final victory is not forced obedience.\n\nIt is restored love."},"studyInsightBlocks":[{"type":"studyVisual","title":"Love and obedience","accent":"stone","description":"Scripture distinguishes forced performance from freely given love.","payload":{"variant":"comparison","leftTitle":"Forced obedience","rightTitle":"Free love","leftItems":["No real love"],"rightItems":["Real relationship"]},"footnote":"God wanted relationship that could say yes, not machinery that could only run."},{"type":"scriptureChain","title":"The Gift and Risk of Freedom","references":[{"reference":"James 1:17"},{"reference":"Galatians 5:22 to 23"},{"reference":"Matthew 13:28"},{"reference":"John 8:36"}]},{"type":"paragraph","text":"Takeaway: Freedom is a good gift from God, but it can be misused. Jesus restores true freedom by bringing us back into love and truth."}],"reflectPrompt":"Where have you confused freedom with simply doing whatever you want?\n\nThink about one area where God may be inviting you to see His boundaries as protection, not restriction.","lifeApplicationStepTitle":"Life Application and Prayer","lifeApplication":"This week, practice using freedom for love.\n\nBefore making a decision, pause and ask:\n\n“Will this choice make me more loving, more truthful, and more surrendered to God?”\n\nThat question cuts through a lot of noise.\n\nFreedom is not proven by resisting God.\n\nFreedom is restored when the heart is able to love what is good again.\n\nPrayer\n\nFather, thank You for creating me with the ability to love, choose, and respond to You. Teach me to use freedom wisely. Help me stop seeing Your boundaries as burdens. Show me that Your way leads to life. Grow the fruit of Your Spirit in me, and make my heart free in Jesus. Amen.","prayer":"","completionSummary":"Love required freedom, and freedom carried risk. But God’s answer is not control. His answer is truth, restoration, and love freely returned.","lessonQuiz":{"eyebrow":"CHECK YOUR UNDERSTANDING","title":"Quick Review","description":"Check your understanding before moving on.","settings":{"quizRequired":false,"passingScore":70,"allowRetake":true},"questions":[{"id":"wih-l5-q1","prompt":"According to James 1:17, where do good and perfect gifts come from?","options":["From chance","From the Father above","From human pride","From rebellion"],"correctIndex":1,"explanation":"James 1:17 teaches that every good and perfect gift comes from God, the Father of lights."},{"id":"wih-l5-q2","prompt":"What does Galatians 5:22 to 23 describe?","options":["The fruit of the Spirit","The fall of Babylon","The creation of angels","The plagues of Egypt"],"correctIndex":0,"explanation":"Galatians 5:22 to 23 lists the fruit of the Spirit, showing what God grows in a surrendered life."},{"id":"wih-l5-q3","prompt":"What did Jesus say in Matthew 13:28 about the source of the problem?","options":["“God hath done this”","“An enemy hath done this”","“No one knows”","“It does not matter”"],"correctIndex":1,"explanation":"Jesus said, “An enemy hath done this,” showing that evil is an enemy intrusion, not God’s character."},{"id":"wih-l5-q4","prompt":"What is true freedom according to this lesson?","options":["Doing anything without consequence","Living in harmony with God’s love","Rejecting every boundary","Avoiding all responsibility"],"correctIndex":1,"explanation":"True freedom is not lawlessness. It is life restored in harmony with God’s love and truth."},{"id":"wih-l5-q5","kind":"reflection","prompt":"How can you use your freedom this week to choose love instead of selfishness?","explanation":"Freedom is meant to be used for love, trust, and surrender to God, not self-centered living."}]}}
$wih_l5_reader$::jsonb
where slug = 'love-freedom-and-risk'
  and study_series_id = 'e4000001-0000-4000-8000-000000000073';


update public.lessons
set reader_content = $wih_l6_reader$
{"openingThought":"God did not answer evil from a distance.\n\nHe entered the battlefield.\n\nJesus stepped into a world full of deception, pain, temptation, sickness, fear, and death. He did not come as a distant observer. He came as Savior.\n\nEverywhere Jesus went, He confronted the works of darkness.\n\nHe healed the broken.\nHe exposed lies.\nHe forgave sinners.\nHe resisted temptation.\nHe revealed the Father.\nHe gave His life.\n\nThe war between good and evil reaches its clearest point in Jesus. In Him, we see what God is like and what evil is trying to destroy.","scriptureRef":"1 John 3:8","scriptureQuote":"For this purpose the Son of God was manifested, that he might destroy the works of the devil.","scriptureSecondaryRef":"Luke 11:21 to 22","scriptureSecondaryQuote":"When a strong man armed keepeth his palace, his goods are in peace: But when a stronger than he shall come upon him, and overcome him, he taketh from him all his armour wherein he trusted, and divideth his spoils.","scriptureSupplementBlocks":[{"type":"scripture","reference":"John 13:34","quote":"A new commandment I give unto you, That ye love one another; as I have loved you, that ye also love one another."}],"teachingPoints":["1. Jesus came with a purpose\n\n1 John 3:8 says Jesus came to destroy the works of the devil.\n\nThat means His mission was not vague.\n\nJesus came to confront sin, expose deception, break bondage, and rescue humanity.\n\nHe did not come only to teach better morals.\n\nHe came to win back what evil had stolen.","2. Jesus reveals the Father’s character\n\nSatan’s strategy is to make God look harsh, selfish, distant, or unsafe.\n\nJesus destroys that lie by showing the Father clearly.\n\nWhen Jesus touched lepers, welcomed sinners, wept with the grieving, forgave the guilty, and spoke truth to the deceived, He was revealing God’s heart.\n\nJesus shows us that God is not the author of suffering.\n\nHe is the Rescuer entering suffering to save.","3. Jesus is stronger than the enemy\n\nIn Luke 11, Jesus describes a stronger one overcoming the strong man.\n\nThe enemy may be real, but he is not equal with Christ.\n\nJesus has authority over demons, disease, sin, death, and the grave.\n\nThe Christian hope is not that evil is weak.\n\nThe hope is that Jesus is stronger.","4. Jesus fights with self-giving love\n\nThe kingdom of darkness operates through pride, force, lies, fear, and selfishness.\n\nJesus defeats evil through truth, humility, obedience, sacrifice, and love.\n\nAt the cross, the enemy’s hatred was fully exposed.\n\nAt the same cross, God’s love was fully revealed.\n\nJesus wins by giving Himself."],"wordStudyBeforeStudyInsight":true,"wordStudyStepTitle":"Word Insight","wordStudyStepIntro":"John uses one Greek verb to say heaven’s answer stepped into plain sight.","wordStudy":{"surface":"Manifested","lemma":"φανερόω (phaneroō)","transliteration":"phaneroō","meaning":"To make visible, reveal, or bring into the open.","strongs":"G5319","reference":"1 John 3:8","note":"1 John 3:8 says the Son of God was manifested.\n\nJesus came to make visible what God is like and to bring evil’s works into the open.\n\nIn Christ, God’s love is no longer hidden.\n\nThe enemy’s lies are no longer safe."},"studyInsight":{"title":"Study Insight","placement":"after_teaching","variant":"doctrine_clarity","body":"The battle between good and evil is not solved by human strength.\n\nWe do not outthink Satan on our own.\n\nWe do not overcome sin by willpower alone.\n\nWe need a Savior.\n\nJesus entered the conflict as the true Son, the faithful human, and the full revelation of God’s love.\n\nWhere Adam fell, Jesus stood faithful.\n\nWhere humanity believed the serpent’s lie, Jesus trusted the Father completely.\n\nWhere sin brought death, Jesus gave His life and rose again.\n\nThis is why the gospel is not only forgiveness.\n\nIt is victory.\n\nJesus does not merely tell us that evil will lose.\n\nHe has already broken its power."},"studyInsightBlocks":[{"type":"studyVisual","title":"What Jesus came to overturn","accent":"sky","description":"A calm contrast between the kingdom of darkness and Christ’s victorious work.","payload":{"variant":"comparison","leftTitle":"Enemy’s works","rightTitle":"Jesus’ work","leftItems":["lies","fear","bondage","death"],"rightItems":["truth","love","freedom","life"]},"footnote":"Jesus confronts darkness with humility, sacrifice, and self-giving love."},{"type":"scriptureChain","title":"Jesus Confronts Evil","references":[{"reference":"1 John 3:8"},{"reference":"Luke 11:21 to 22"},{"reference":"John 14:9"},{"reference":"Colossians 2:15"}]},{"type":"paragraph","text":"Takeaway: Jesus entered the conflict to reveal God’s character, expose the enemy’s lies, and destroy the works of the devil."}],"reflectPrompt":"Where do you most need to remember that Jesus is stronger than the darkness you are facing?\n\nThis could be fear, temptation, shame, discouragement, confusion, or a lie about God that has been hard to shake.","lifeApplicationStepTitle":"Life Application and Prayer","lifeApplication":"This week, when you face fear or temptation, do not start with your own strength.\n\nStart with Christ.\n\nPray before you react.\n\nBring the lie into the light.\n\nName the truth Jesus reveals.\n\nFor example:\n\nLie:\n\n“God has abandoned me.”\n\nTruth:\n\n“Jesus entered suffering to rescue me. I am not abandoned.”\n\nThe enemy works best in confusion.\n\nJesus brings truth into the open.\n\nPrayer\n\nJesus, thank You for entering the battle for me. Thank You for revealing the Father and destroying the works of the devil. Help me trust that You are stronger than fear, sin, shame, and death. Teach me to bring every lie into Your light and to stand in Your victory. Amen.","prayer":"","completionSummary":"Jesus did not stay distant from the conflict. He entered the battle, revealed the Father, exposed the enemy’s lies, and began the final defeat of evil.","lessonQuiz":{"eyebrow":"CHECK YOUR UNDERSTANDING","title":"Quick Review","description":"Check your understanding before moving on.","settings":{"quizRequired":false,"passingScore":70,"allowRetake":true},"questions":[{"id":"wih-l6-q1","prompt":"According to 1 John 3:8, why was the Son of God manifested?","options":["To destroy the works of the devil","To create fear","To hide God’s character","To avoid human suffering"],"correctIndex":0,"explanation":"1 John 3:8 says Jesus was manifested to destroy the works of the devil."},{"id":"wih-l6-q2","prompt":"In Luke 11:21 to 22, what does Jesus teach?","options":["The enemy is stronger than God","No one can overcome evil","A stronger one overcomes the strong man","Evil does not exist"],"correctIndex":2,"explanation":"Jesus uses this picture to show that He is stronger than the enemy and able to overcome him."},{"id":"wih-l6-q3","prompt":"What does Jesus reveal about God?","options":["God is distant and unsafe","God is the Rescuer who enters suffering to save","God enjoys human pain","God does not care about evil"],"correctIndex":1,"explanation":"Jesus reveals the Father’s heart by healing, forgiving, loving, and entering suffering to save humanity."},{"id":"wih-l6-q4","prompt":"How does Jesus defeat evil?","options":["Through pride and force","Through deception","Through truth, humility, sacrifice, and love","By ignoring suffering"],"correctIndex":2,"explanation":"Jesus defeats evil through truth, obedience, self-giving love, and His victory at the cross."},{"id":"wih-l6-q5","kind":"reflection","prompt":"What lie do you need to bring into the light of Jesus’ truth this week?","explanation":"Jesus exposes deception and helps us replace lies with the truth of God’s character and love."}]}}
$wih_l6_reader$::jsonb
where slug = 'jesus-enters-the-battle'
  and study_series_id = 'e4000001-0000-4000-8000-000000000073';


update public.lessons
set reader_content = $wih_l7_reader$
{"openingThought":"Evil feels permanent when you are living inside it.\n\nPain can make the world feel endless.\nGrief can make hope feel far away.\nInjustice can make it seem like darkness always gets the final word.\n\nBut Scripture tells a different story.\n\nEvil had a beginning.\n\nEvil will have an end.\n\nThe Bible does not leave us with an eternal war between two equal powers. God is not struggling to survive against darkness. The conflict is real, but it is temporary.\n\nJesus has already won the decisive victory.\n\nOne day, the universe will be fully healed, and sin will not rise again.","scriptureRef":"Revelation 21:4","scriptureQuote":"And God shall wipe away all tears from their eyes; and there shall be no more death, neither sorrow, nor crying, neither shall there be any more pain: for the former things are passed away.","scriptureSecondaryRef":"Psalm 37:9","scriptureSecondaryQuote":"For evildoers shall be cut off: but those that wait upon the LORD, they shall inherit the earth.","scriptureSupplementBlocks":[{"type":"scripture","reference":"Isaiah 11:9","quote":"They shall not hurt nor destroy in all my holy mountain: for the earth shall be full of the knowledge of the LORD, as the waters cover the sea."}],"teachingPoints":["1. Evil is temporary\n\nThe Bible never presents evil as eternal.\n\nSin began through rebellion, and God will bring it to a complete end.\n\nThis matters because suffering is not the final chapter.\n\nThe pain we see now is real, but it is not permanent.\n\nGod’s plan moves toward restoration.","2. God will remove suffering completely\n\nRevelation 21:4 gives one of the clearest promises in Scripture.\n\nNo more death.\nNo more sorrow.\nNo more crying.\nNo more pain.\n\nGod does not merely improve the broken world.\n\nHe makes all things new.\n\nThis is not shallow optimism.\n\nThis is biblical hope.","3. God’s final victory is rooted in truth\n\nIsaiah says the earth will be full of the knowledge of the Lord.\n\nThat means the final world is not built on fear or forced obedience.\n\nIt is filled with the knowledge of God’s character.\n\nThe lies about God will be answered.\n\nThe universe will see that God is love.","4. Sin will not rise again\n\nGod’s final answer to evil will be complete.\n\nThe conflict will not repeat forever.\n\nThose who are saved will not obey God because they are afraid of Him. They will trust Him because His character has been fully revealed.\n\nLove will be secure because truth will be clear."],"wordStudyBeforeStudyInsight":true,"wordStudyStepTitle":"Word Insight","wordStudyStepIntro":"Hope in Revelation leans on a Greek word worth pausing over when God says He makes things new.","wordStudy":{"surface":"New","lemma":"καινός (kainos)","transliteration":"kainos","meaning":"New in quality, fresh, renewed, not merely recent in time.","strongs":"G2537","reference":"Revelation 21:5","note":"When Revelation speaks of God making things new, it is not describing a temporary patch over a damaged world.\n\nGod’s restoration is complete.\n\nHe renews creation in a way that removes sin, sorrow, death, and pain forever."},"studyInsight":{"title":"Study Insight","placement":"after_teaching","variant":"doctrine_clarity","body":"The story of the war in heaven does not end with fear.\n\nIt ends with restoration.\n\nFrom the beginning, Satan has attacked God’s character. He has tried to make God look selfish, unfair, distant, and unworthy of trust.\n\nBut through Jesus, God has revealed the truth.\n\nGod is love.\nGod is just.\nGod is patient.\nGod is merciful.\nGod is faithful.\nGod is not the author of evil.\nGod is the Redeemer of the broken.\n\nWhen evil is finally removed, it will not be because God was impatient.\n\nIt will be because every question has been answered, every lie has been exposed, and every heart has made its choice.\n\nGod’s victory is not only that evil ends.\n\nHis victory is that love remains."},"studyInsightBlocks":[{"type":"studyVisual","title":"The world now and God’s promise","accent":"sage","description":"Revelation and the prophets sketch how suffering ends under God’s rule.","payload":{"variant":"comparison","leftTitle":"Now","rightTitle":"Then","leftItems":["death","sorrow","crying","pain"],"rightItems":["life","joy","peace","restoration"]},"footnote":"Hope is anchored in Scripture, not denial of pain."},{"type":"scriptureChain","title":"Evil Will End","references":[{"reference":"Psalm 37:9"},{"reference":"Isaiah 11:9"},{"reference":"Nahum 1:9"},{"reference":"Revelation 21:4"}]},{"type":"paragraph","text":"Takeaway: Evil is temporary. God will fully restore creation, remove suffering, and establish a world where sin will never rise again."}],"reflectPrompt":"What part of God’s promise to end evil gives you the most hope right now?\n\nThink honestly about where you need hope: grief, injustice, fear, sickness, temptation, or weariness.","lifeApplicationStepTitle":"Life Application and Prayer","lifeApplication":"This week, practice living like evil does not get the final word.\n\nThat does not mean ignoring pain.\n\nIt means refusing to let darkness define the whole story.\n\nWhen you see suffering, remember that God has promised an ending.\n\nWhen you face temptation, remember that sin is temporary.\n\nWhen you feel discouraged, remember that Jesus has already won the decisive victory.\n\nHope is not pretending the battle is not real.\n\nHope is trusting the One who has already secured the ending.\n\nPrayer\n\nFather, thank You that evil will not last forever. Thank You that pain, death, sorrow, and crying will come to an end. Help me trust Your promise even when the world feels heavy. Keep my heart anchored in Jesus. Teach me to live with hope, courage, and love until the day You make all things new. Amen.","prayer":"","completionSummary":"You have completed War in Heaven. The Bible’s story is clear: evil began through rebellion, but it will not last forever. Jesus has revealed the Father, defeated the enemy’s works, and promised a world made new.","lessonQuiz":{"eyebrow":"CHECK YOUR UNDERSTANDING","title":"Quick Review","description":"Check your understanding before moving on.","settings":{"quizRequired":false,"passingScore":70,"allowRetake":true},"questions":[{"id":"wih-l7-q1","prompt":"According to Revelation 21:4, what will God remove?","options":["Only sadness","Death, sorrow, crying, and pain","Human responsibility","Scripture"],"correctIndex":1,"explanation":"Revelation 21:4 promises that death, sorrow, crying, and pain will be no more."},{"id":"wih-l7-q2","prompt":"According to Psalm 37:9, who will inherit the earth?","options":["Those who wait upon the LORD","Those who trust in violence","Those who deceive others","Those who reject God forever"],"correctIndex":0,"explanation":"Psalm 37:9 says those who wait upon the Lord will inherit the earth."},{"id":"wih-l7-q3","prompt":"What does Isaiah 11:9 say the earth will be full of?","options":["The knowledge of the LORD","Confusion","Rebellion","Fear of angels"],"correctIndex":0,"explanation":"Isaiah 11:9 says the earth will be full of the knowledge of the Lord, showing that truth about God will fill creation."},{"id":"wih-l7-q4","prompt":"What is the final outcome of the conflict between good and evil?","options":["Evil lasts forever","God and Satan share power","God fully restores creation and ends evil","Humanity saves itself"],"correctIndex":2,"explanation":"Scripture teaches that evil is temporary and that God will fully restore creation through His final victory."},{"id":"wih-l7-q5","kind":"reflection","prompt":"How can the promise that evil will end change the way you face discouragement today?","explanation":"Biblical hope does not deny pain. It anchors the heart in God’s promise that evil will not have the final word."}]}}
$wih_l7_reader$::jsonb
where slug = 'the-final-defeat-of-evil'
  and study_series_id = 'e4000001-0000-4000-8000-000000000073';












update public.lessons
set reader_content = '{"draftShell": true}'::jsonb
where study_series_id = 'e4000001-0000-4000-8000-000000000072'
  and slug not in ('more-than-mere-survival', 'created-in-gods-image', 'free-moral-agents');

update public.lessons
set reader_content = $mfm_l1_reader$
{"openingThought":"Every person eventually asks the same question.\n\nWho am I?\n\nNot just,\n\nWhat is my name?\n\nNot just,\n\nWhat do I do?\n\nBut,\n\nWhat am I?\n\nWhy am I here?\n\nDo I matter?\n\nThe world gives different answers.\n\nSome say human life is only biology.\n\nA short life.\n\nA few urges.\n\nA little pleasure.\n\nA little pain.\n\nThen death.\n\nBut Scripture tells a different story.\n\nHumanity is not an accident.\n\nYou are not merely a survival machine.\n\nYou were created by God.\n\nAnd if that is true,\n\nthen your life carries dignity,\n\npurpose,\n\nresponsibility,\n\nand hope.","scriptureRef":"Psalm 8:3 to 5","scriptureQuote":"When I consider Your heavens,\n\nthe work of Your fingers,\n\nthe moon and the stars,\n\nwhich You have ordained,\n\nwhat is man that You are mindful of him,\n\nand the son of man that You visit him?\n\nFor You have made him a little lower than the angels,\n\nand You have crowned him with glory and honor.","scriptureSecondaryRef":"Genesis 1:1","scriptureSecondaryQuote":"In the beginning God created the heavens and the earth.","scriptureWordInsights":[{"surface":"mindful","lemma":"זָכַר","transliteration":"zakar","meaning":"to remember, call to mind, be mindful","strongs":"H2142","reference":"Psalm 8:4","language":"Hebrew","note":"In Psalm 8,\n\nDavid asks,\n\n\"What is man that You are mindful of him?\"\n\nThe idea is not that God occasionally remembers humanity,\n\nas if He almost forgot.\n\nIt points to God's attentive care.\n\nThe Creator of the heavens notices human beings.\n\nHe is mindful of us.\n\nThat means your life is not invisible to God.\n\nYou are seen.\n\nKnown.\n\nConsidered.\n\nAnd valued."}],"scriptureSupplementBlocks":[{"type":"scripture","reference":"Genesis 1:26","quote":"Then God said,\n\nLet Us make man in Our image,\n\naccording to Our likeness."},{"type":"scripture","reference":"Acts 17:26 to 28","quote":"And He has made from one blood every nation of men\n\nto dwell on all the face of the earth,\n\nand has determined their preappointed times\n\nand the boundaries of their dwellings,\n\nso that they should seek the Lord,\n\nin the hope that they might grope for Him\n\nand find Him,\n\nthough He is not far from each one of us;\n\nfor in Him we live and move and have our being."},{"type":"paragraph","text":"Scripture begins with God as Creator.\n\nThat means human identity begins with Him."},{"type":"scriptureChain","title":"Made for More","references":[{"reference":"Psalm 8:3 to 5"},{"reference":"Genesis 1:1"},{"reference":"Genesis 1:26"},{"reference":"Acts 17:26 to 28"}]},{"type":"paragraph","text":"Human life is not random or disposable. Scripture begins our identity with the Creator who sees, values, and calls us to seek Him."}],"teachingPoints":["The Bible asks the human identity question.\n\nPsalm 8 looks at the vastness of creation and asks why God cares about humanity.","Human life begins with God.\n\nGenesis does not begin with accident, chaos, or meaninglessness. It begins with the Creator.","Humanity carries dignity.\n\nPsalm 8 says God crowns human beings with glory and honor.","Humanity was made for relationship with God.\n\nActs 17 says God arranged life so people would seek Him and find Him.","The Bible gives a better story than survival.\n\nWe are not merely living, consuming, and dying. We are made by God and for God."],"wordStudyBeforeStudyInsight":true,"wordStudyStepTitle":"Word Insight","wordStudyStepIntro":"Psalm 8 uses a careful Hebrew word when it speaks about God being \"mindful\" of us. Take a closer look.","wordStudyInsights":[{"surface":"mindful","lemma":"זָכַר","transliteration":"zakar","meaning":"to remember, call to mind, be mindful","strongs":"H2142","reference":"Psalm 8:4","language":"Hebrew","note":"In Psalm 8,\n\nDavid asks,\n\n\"What is man that You are mindful of him?\"\n\nThe idea is not that God occasionally remembers humanity,\n\nas if He almost forgot.\n\nIt points to God's attentive care.\n\nThe Creator of the heavens notices human beings.\n\nHe is mindful of us.\n\nThat means your life is not invisible to God.\n\nYou are seen.\n\nKnown.\n\nConsidered.\n\nAnd valued."}],"studyInsight":{"title":"Study Insight","placement":"after_teaching","variant":"doctrine_clarity","body":"There are two very different ways to tell the story of humanity.\n\nOne story says we are here by accident.\n\nWe live for a little while.\n\nWe follow desire.\n\nWe compete.\n\nWe survive if we can.\n\nThen we disappear.\n\nThe Bible tells a different story.\n\nIt says creation has a Creator.\n\nHuman life has meaning.\n\nEvery person carries worth.\n\nOur choices matter.\n\nLove matters.\n\nJustice matters.\n\nMercy matters.\n\nWhy?\n\nBecause human beings were made by God.\n\nThat does not answer every question in one lesson.\n\nBut it gives us the right starting place.\n\nYou are not random.\n\nYou are not disposable.\n\nYou are not merely what you feel,\n\nwhat you own,\n\nwhat you achieve,\n\nor what others think of you.\n\nYou were made for more."},"studyInsightBlocks":[{"type":"studyVisual","title":"Two Stories of Humanity","accent":"stone","payload":{"variant":"comparison","leftTitle":"Mere Survival","rightTitle":"Made by God","leftItems":["accident","appetite","competition","death"],"rightItems":["dignity","purpose","relationship","hope"]},"footnote":"Mere survival: This story leaves human life without lasting meaning. Made by God: Scripture says humanity begins with the Creator."}],"reflectPrompt":"When you think about human life,\n\ndo you usually see it as random or purposeful?\n\nWhat does Psalm 8 show you about God's view of humanity?\n\nHave you ever struggled to believe your life matters?\n\nWhat changes when your identity begins with God instead of achievement,\n\nappearance,\n\nsuccess,\n\nor other people's opinions?","lifeApplicationStepTitle":"Life Application and Prayer","lifeApplication":"This week,\n\nread Psalm 8 slowly.\n\nDo not rush through the question.\n\n\"What is man that You are mindful of him?\"\n\nLet that question sit with you.\n\nThen answer it from Scripture.\n\nYou are seen by God.\n\nYou are known by God.\n\nYou were created by God.\n\nYou were made for more than survival.","prayer":"","lessonQuiz":{"eyebrow":"CHECK YOUR UNDERSTANDING","title":"Quick Review","description":"Check your understanding before moving on.","settings":{"quizRequired":false,"passingScore":70,"allowRetake":true},"questions":[{"id":"mfm-l1-q1","prompt":"What question does Psalm 8 ask about humanity?","options":["Why are humans better at building cities?","What is man that God is mindful of him?","Why do humans need no guidance?","What nation is strongest?"],"correctIndex":1},{"id":"mfm-l1-q2","prompt":"How does Genesis 1:1 begin the story of reality?","options":["With human achievement","With God as Creator","With meaninglessness","With Israel's kings"],"correctIndex":1},{"id":"mfm-l1-q3","prompt":"According to Psalm 8, God crowns humanity with what?","options":["Glory and honor","Fear and confusion","Wealth and control","Silence and distance"],"correctIndex":0},{"id":"mfm-l1-q4","kind":"multi","prompt":"Which statements fit this lesson?","options":["Human identity begins with God","Scripture gives humanity dignity","Human life is only meaningless survival","God is mindful of humanity"],"correctIndices":[0,1,3]},{"id":"mfm-l1-q5","kind":"reflection","prompt":"What does it mean to you that your life begins with God's purpose rather than accident?","explanation":"This reflection helps the learner connect Scripture's teaching on humanity with personal identity and worth."}]},"completionSummary":"You began with a simple idea: Scripture gives humanity a story that is deeper than survival. Keep that anchor as you move forward."}
$mfm_l1_reader$::jsonb
where slug = 'more-than-mere-survival';

update public.lessons
set reader_content = $mfm_l2_reader$
{"openingThought":"The Bible does not describe human beings as accidents.\n\nIt does not begin our identity with status,\n\nmoney,\n\nappearance,\n\nrace,\n\ntalent,\n\nachievement,\n\nor failure.\n\nIt begins deeper.\n\nHumanity was created in the image of God.\n\nThat means every person carries dignity before they accomplish anything.\n\nBefore a resume.\n\nBefore a title.\n\nBefore applause.\n\nBefore success.\n\nBefore anyone knows their name.\n\nHuman worth begins with the Creator.\n\nTo be human is to carry meaning.\n\nNot because we made ourselves important,\n\nbut because God made us in His image.","scriptureRef":"Genesis 1:26 to 28","scriptureQuote":"Then God said,\n\nLet Us make man in Our image,\n\naccording to Our likeness;\n\nlet them have dominion over the fish of the sea,\n\nover the birds of the air,\n\nand over the cattle,\n\nover all the earth\n\nand over every creeping thing that creeps on the earth.\n\nSo God created man in His own image;\n\nin the image of God He created him;\n\nmale and female He created them.\n\nThen God blessed them,\n\nand God said to them,\n\nBe fruitful and multiply;\n\nfill the earth and subdue it;\n\nhave dominion over the fish of the sea,\n\nover the birds of the air,\n\nand over every living thing that moves on the earth.","scriptureSecondaryRef":"Genesis 5:1 to 2","scriptureSecondaryQuote":"In the day that God created man,\n\nHe made him in the likeness of God.\n\nHe created them male and female,\n\nand blessed them\n\nand called them Mankind\n\nin the day they were created.","scriptureWordInsights":[{"surface":"image","lemma":"צֶלֶם אֱלֹהִים","transliteration":"tselem Elohim","meaning":"image of God","strongs":"H6754","reference":"Genesis 1:26 to 27","language":"Hebrew","note":"The Hebrew word tselem can mean image,\n\nlikeness,\n\nor representation.\n\nGenesis says humanity was made in the image of God.\n\nThis does not mean we are God.\n\nIt means human beings were created to reflect something about Him.\n\nWe were made to represent His character in the world.\n\nHis love.\n\nHis wisdom.\n\nHis care.\n\nHis justice.\n\nHis creativity.\n\nHis relational nature.\n\nTo bear God's image is a gift,\n\nbut it is also a calling."}],"scriptureSupplementBlocks":[{"type":"scripture","reference":"James 3:9","quote":"With it we bless our God and Father,\n\nand with it we curse men,\n\nwho have been made in the similitude of God."},{"type":"paragraph","text":"Scripture grounds human dignity in creation.\n\nHuman beings matter because they bear God's image."},{"type":"scriptureChain","title":"Created in God's Image","references":[{"reference":"Genesis 1:26 to 28"},{"reference":"Genesis 5:1 to 2"},{"reference":"James 3:9"}]},{"type":"paragraph","text":"Every human being carries God-given dignity because humanity was created in the image and likeness of God."}],"teachingPoints":["Humanity was created by God.\n\nOur identity begins with the Creator, not with human opinion.","Humanity was made in God's image.\n\nThis gives every person dignity, value, and purpose.","Male and female are both included.\n\nGenesis says God created humanity in His image, male and female.","God blessed humanity.\n\nHuman life begins under divine blessing, not meaninglessness.","The image of God affects how we treat people.\n\nJames warns against cursing human beings who are made in God's likeness."],"wordStudyBeforeStudyInsight":true,"wordStudyStepTitle":"Word Insight","wordStudyStepIntro":"Genesis ties human dignity to one striking Hebrew phrase. Take a closer look at what \"image\" means here.","wordStudyInsights":[{"surface":"image","lemma":"צֶלֶם אֱלֹהִים","transliteration":"tselem Elohim","meaning":"image of God","strongs":"H6754","reference":"Genesis 1:26 to 27","language":"Hebrew","note":"The Hebrew word tselem can mean image,\n\nlikeness,\n\nor representation.\n\nGenesis says humanity was made in the image of God.\n\nThis does not mean we are God.\n\nIt means human beings were created to reflect something about Him.\n\nWe were made to represent His character in the world.\n\nHis love.\n\nHis wisdom.\n\nHis care.\n\nHis justice.\n\nHis creativity.\n\nHis relational nature.\n\nTo bear God's image is a gift,\n\nbut it is also a calling."}],"studyInsight":{"title":"Study Insight","placement":"after_teaching","variant":"doctrine_clarity","body":"Genesis 1 gives humanity a high calling.\n\nGod creates a world filled with life,\n\nbeauty,\n\norder,\n\nand purpose.\n\nThen He creates human beings in His image.\n\nThat means people are not disposable.\n\nNo human being is merely a body.\n\nNo human being is merely a number.\n\nNo human being is merely useful or useless.\n\nEvery person carries God-given worth.\n\nThis truth also gives responsibility.\n\nIf we are made in God's image,\n\nthen our lives are meant to reflect Him.\n\nThe way we speak matters.\n\nThe way we treat others matters.\n\nThe way we use power matters.\n\nThe way we care for creation matters.\n\nThe way we love matters.\n\nBeing made in God's image is not only about feeling valuable.\n\nIt is about living as someone created to reflect the God who made you."},"studyInsightBlocks":[{"type":"studyVisual","title":"Image of God","accent":"sage","payload":{"variant":"sequence","steps":[{"label":"Dignity","subtitle":"Every person has value because God made them."},{"label":"Relationship","subtitle":"We were made to know God and love others."},{"label":"Responsibility","subtitle":"We are called to represent God's character."},{"label":"Purpose","subtitle":"Human life is meant to reflect God in the world."}]},"footnote":"The image of God means human life has worth, calling, and responsibility."}],"reflectPrompt":"What usually shapes the way people define their worth?\n\nHow does Genesis 1 correct shallow views of human identity?\n\nWhat changes when you see every person as made in God's image?\n\nWhere do you need to treat yourself or someone else with more dignity?","lifeApplicationStepTitle":"Life Application and Prayer","lifeApplication":"This week,\n\npractice seeing people through Genesis 1.\n\nThe person in traffic.\n\nThe coworker.\n\nThe stranger.\n\nThe difficult family member.\n\nThe person you disagree with.\n\nThe person in the mirror.\n\nAsk:\n\nHow would I treat this person if I remembered they were made in God's image?","prayer":"","lessonQuiz":{"eyebrow":"CHECK YOUR UNDERSTANDING","title":"Quick Review","description":"Check your understanding before moving on.","settings":{"quizRequired":false,"passingScore":70,"allowRetake":true},"questions":[{"id":"mfm-l2-q1","prompt":"According to Genesis 1:26 to 27, humanity was created in whose image?","options":["The image of angels","The image of God","The image of animals","The image of kings"],"correctIndex":1},{"id":"mfm-l2-q2","prompt":"What does being made in God's image give every person?","options":["God-given dignity and purpose","Permission to mistreat others","Freedom from responsibility","Worth only after success"],"correctIndex":0},{"id":"mfm-l2-q3","prompt":"What does James 3:9 warn about?","options":["Cursing people made in God's likeness","Reading Genesis too slowly","Naming animals","Forgetting geography"],"correctIndex":0},{"id":"mfm-l2-q4","kind":"multi","prompt":"Which statements fit this lesson?","options":["Humanity was created by God","Male and female are both included in God's image","The image of God affects how we treat people","Human worth depends only on achievement"],"correctIndices":[0,1,2]},{"id":"mfm-l2-q5","kind":"reflection","prompt":"What is one way you can honor the image of God in someone this week?","explanation":"This reflection helps the learner apply human dignity to real relationships and daily choices."}]},"completionSummary":"You anchored dignity where Scripture anchors it: in God's image. Carry that lens into how you see yourself and others."}
$mfm_l2_reader$::jsonb
where slug = 'created-in-gods-image';

update public.lessons
set reader_content = $mfm_l4_reader$
{"openingThought":"Love cannot be forced.\n\nObedience can be forced.\n\nBehavior can be controlled.\n\nWords can be repeated.\n\nActions can be pressured.\n\nBut love must be chosen.\n\nThat is why freedom matters.\n\nGod did not create human beings as machines.\n\nHe did not make us puppets.\n\nHe created us with the ability to think,\n\nrespond,\n\ntrust,\n\nchoose,\n\nand love.\n\nThat freedom makes love meaningful.\n\nBut it also makes rebellion possible.\n\nThe same freedom that allows love to be real\n\nalso allows sin to be chosen.\n\nThat is serious.\n\nBut without freedom,\n\nthere can be no real relationship.","scriptureRef":"Deuteronomy 30:19","scriptureQuote":"I call heaven and earth as witnesses today against you,\n\nthat I have set before you life and death,\n\nblessing and cursing;\n\ntherefore choose life,\n\nthat both you and your descendants may live.","scriptureSecondaryRef":"Joshua 24:15","scriptureSecondaryQuote":"And if it seems evil to you to serve the LORD,\n\nchoose for yourselves this day whom you will serve.","scriptureWordInsights":[{"surface":"choose","lemma":"בָּחַר","transliteration":"bachar","meaning":"to choose, select, decide","strongs":"H977","reference":"Joshua 24:15","language":"Hebrew","note":"Joshua tells the people,\n\n\"Choose for yourselves this day whom you will serve.\"\n\nThe Hebrew word bachar points to a real act of choosing.\n\nGod does not treat people as machines.\n\nHe calls them to respond.\n\nThis matters because love,\n\nworship,\n\nand loyalty only have meaning when they are chosen.\n\nGod invites.\n\nGod warns.\n\nGod teaches.\n\nBut He does not force the heart."}],"scriptureSupplementBlocks":[{"type":"scripture","reference":"Genesis 2:16 to 17","quote":"And the LORD God commanded the man,\n\nsaying,\n\nOf every tree of the garden you may freely eat;\n\nbut of the tree of the knowledge of good and evil you shall not eat,\n\nfor in the day that you eat of it\n\nyou shall surely die."},{"type":"scripture","reference":"John 14:15","quote":"If you love Me,\n\nkeep My commandments."},{"type":"paragraph","text":"God gives commands,\n\nbut He also gives meaningful choice.\n\nLove responds freely."},{"type":"scriptureChain","title":"Choose Life","references":[{"reference":"Deuteronomy 30:19"},{"reference":"Joshua 24:15"},{"reference":"Genesis 2:16 to 17"},{"reference":"John 14:15"}]},{"type":"paragraph","text":"Love requires freedom, and Scripture calls us to use that freedom to choose life, trust, and relationship with God."}],"teachingPoints":["God created humans with moral freedom.\n\nWe are able to choose, respond, trust, obey, or reject.","Choice makes love meaningful.\n\nForced love is not love. Real love requires freedom.","God clearly shows the path of life.\n\nHe does not leave people without guidance.","Freedom comes with responsibility.\n\nOur choices matter because they shape life, character, and relationship.","Obedience is meant to flow from love.\n\nJesus said, \"If you love Me, keep My commandments.\""],"wordStudyBeforeStudyInsight":true,"wordStudyStepTitle":"Word Insight","wordStudyStepIntro":"Joshua uses a Hebrew word when he asks Israel whom they will serve. Take a closer look.","wordStudyInsights":[{"surface":"choose","lemma":"בָּחַר","transliteration":"bachar","meaning":"to choose, select, decide","strongs":"H977","reference":"Joshua 24:15","language":"Hebrew","note":"Joshua tells the people,\n\n\"Choose for yourselves this day whom you will serve.\"\n\nThe Hebrew word bachar points to a real act of choosing.\n\nGod does not treat people as machines.\n\nHe calls them to respond.\n\nThis matters because love,\n\nworship,\n\nand loyalty only have meaning when they are chosen.\n\nGod invites.\n\nGod warns.\n\nGod teaches.\n\nBut He does not force the heart."}],"studyInsight":{"title":"Study Insight","placement":"after_teaching","variant":"doctrine_clarity","body":"Freedom is one of the most powerful gifts God gave humanity.\n\nBut freedom is not the same as independence from God.\n\nA fish is free in water,\n\nnot on dry land.\n\nA bird is free in the sky,\n\nnot underwater.\n\nHuman beings are free when they live in harmony with the God who made them.\n\nSin presents freedom as doing whatever we want.\n\nScripture presents freedom as choosing life.\n\nChoosing truth.\n\nChoosing love.\n\nChoosing the Creator.\n\nThat is why God's commands are not random restrictions.\n\nThey are boundaries that protect life and love.\n\nGod gives choice,\n\nbut He also tells the truth about where choices lead.\n\nLife or death.\n\nBlessing or curse.\n\nTrust or rebellion.\n\nLove cannot be forced.\n\nBut love can be invited."},"studyInsightBlocks":[{"type":"studyVisual","title":"Choice and Direction","accent":"sky","payload":{"variant":"comparison","leftTitle":"Life","rightTitle":"Death","leftItems":["trust","love","obedience","relationship"],"rightItems":["distrust","rebellion","selfishness","separation"]},"footnote":"God invites us to choose life. Sin promises freedom but leads away from life."}],"reflectPrompt":"Why does love require freedom?\n\nHave you ever thought of God's commands as protection rather than control?\n\nWhere are you currently facing a meaningful choice?\n\nWhat would it look like to choose life in that area?","lifeApplicationStepTitle":"Life Application and Prayer","lifeApplication":"This week,\n\npay attention to one choice that keeps coming up.\n\nIt may be a habit.\n\nA relationship.\n\nA temptation.\n\nA thought pattern.\n\nA decision you keep delaying.\n\nAsk:\n\nDoes this choice lead me closer to life with God,\n\nor farther from it?\n\nThen choose one step toward life.\n\nPrayer:\n\nLord,\n\nThank You for creating me with the ability to choose.\n\nTeach me to use freedom wisely.\n\nHelp me see Your commands as love,\n\nnot control.\n\nGive me courage to choose life,\n\ntruth,\n\nobedience,\n\nand relationship with You.\n\nShape my heart so my choices reflect Your love.\n\nAmen.","prayer":"","lessonQuiz":{"eyebrow":"CHECK YOUR UNDERSTANDING","title":"Quick Review","description":"Check your understanding before moving on.","settings":{"quizRequired":false,"passingScore":70,"allowRetake":true},"questions":[{"id":"mfm-l4-q1","prompt":"Why does freedom matter for love?","options":["Because love must be chosen","Because love works best when forced","Because choices do not matter","Because God wants confusion"],"correctIndex":0},{"id":"mfm-l4-q2","prompt":"What does Deuteronomy 30:19 tell people to choose?","options":["Popularity","Life","Fear","Wealth"],"correctIndex":1},{"id":"mfm-l4-q3","prompt":"What does the Hebrew word bachar mean?","options":["To choose or decide","To hide","To destroy","To forget"],"correctIndex":0},{"id":"mfm-l4-q4","kind":"multi","prompt":"Which statements fit this lesson?","options":["God created humans with moral freedom","Choice makes love meaningful","Freedom comes with responsibility","God forces the heart to love Him"],"correctIndices":[0,1,2]},{"id":"mfm-l4-q5","kind":"reflection","prompt":"What is one area where God is inviting you to choose life?","explanation":"This reflection helps the learner apply moral freedom to a real decision."}]},"completionSummary":"You saw that love requires freedom, and that God invites us to choose life, trust, and obedience in relationship with Him."}
$mfm_l4_reader$::jsonb
where slug = 'free-moral-agents';



update public.lessons
set reader_content = $json_ta_l1$
{
  "openingThought": "The world does not feel stable.\n\nNations rise and fall.\nEconomies shake.\nDisasters come without warning.\nFear spreads quickly.\nTruth feels harder to recognize.\n\nMany people can sense that something is wrong.\n\nBut they do not know where history is going.\n\nRevelation 14 speaks directly into that moment.\n\nIt is not given to satisfy curiosity.\n\nIt is given to prepare a people.\n\nBefore the final harvest of the earth, God sends one last message to the world.\n\nA message of gospel.\nA message of worship.\nA message of warning.\nA message of decision.\n\nThe question is not whether Revelation 14 matters.\n\nThe question is whether we are listening.",
  "scriptureRef": "Revelation 14:6 to 7",
  "scriptureQuote": "\"And I saw another angel fly in the midst of heaven, having the everlasting gospel to preach unto them that dwell on the earth,\n\nand to every nation, and kindred, and tongue, and people,\n\nSaying with a loud voice,\n\nFear God, and give glory to him;\n\nfor the hour of his judgment is come:\n\nand worship him that made heaven, and earth, and the sea, and the fountains of waters.\"",
  "scriptureAfterPrimary": "Revelation 14 begins with a message moving across the whole world.\n\nIt is not quiet.\n\nIt is not local.\n\nIt is not optional.\n\nIt is global, urgent, and centered on worship.",
  "teachingPoints": [
    "The three angels represent God's final message to the world.\nThe word angel means messenger, and in Scripture God often uses human beings to carry His message.",
    "The message comes from heaven.\nThe angels are seen flying in the midst of heaven because the message does not originate from human wisdom.",
    "The message is given with a loud voice.\nThis means it carries power, urgency, and authority.",
    "The message goes to every nation, kindred, tongue, and people.\nNo group is excluded. This is a worldwide call.",
    "The message comes before the final harvest.\nRevelation 14 shows Christ returning after these messages are proclaimed."
  ],
  "studyInsight": {
    "placement": "after_teaching",
    "title": "Study Insight",
    "body": "Revelation 14 is not random.\n\nThe messages come in order.\n\nFirst, the everlasting gospel is proclaimed.\n\nThen Babylon's fall is announced.\n\nThen the warning against the beast, his image, and his mark is given.\n\nThat order matters.\n\nYou cannot understand the warning if you skip the gospel.\n\nYou cannot understand Babylon's fall if you do not know what truth she rejected.\n\nGod's final message does not begin with fear.\n\nIt begins with the everlasting gospel.\n\nBefore God warns the world,\n\nHe offers salvation."
  },
  "reflectPrompt": "When you think about prophecy,\n\nwhat do you usually feel?\n\nFear?\nConfusion?\nCuriosity?\nAvoidance?\n\nWhat if prophecy was not given to scare you,\n\nbut to prepare you?\n\nWhat would change if you saw Revelation 14\n\nas a message of mercy before it is a message of warning?",
  "lifeApplication": "This week, read Revelation 14:6 to 12 slowly.\n\nDo not try to understand every symbol yet.\n\nJust notice the flow.\n\nLook for what God is emphasizing.\n\nAsk yourself:\n\nWhat is God calling the world to see?\n\nWhat is God calling me to take seriously?\n\nLet the message become personal before it becomes technical.",
  "prayer": "Lord,\n\nHelp me approach prophecy with humility.\n\nNot with fear.\n\nNot with pride.\n\nNot with argument.\n\nOpen my heart to understand Your final message.\n\nShow me the gospel at the center of Revelation.\n\nTeach me to listen,\n\nand prepare me to respond.\n\nAmen."
}
$json_ta_l1$::jsonb
where slug = 'why-revelation-14-matters';

update public.lessons
set reader_content = $json_ta_l2$
{
  "openingThought": "Revelation 14 does not begin with the beast.\n\nIt does not begin with the mark.\n\nIt does not begin with fear.\n\nIt begins with the gospel.\n\nThat matters.\n\nBefore God warns the world,\n\nHe reminds the world of good news.\n\nThe final message to humanity is not merely about crisis.\n\nIt is about Christ.\n\nIt is about a plan that did not begin after sin entered the world.\n\nIt reaches back before Eden.\n\nBefore failure.\n\nBefore shame.\n\nBefore the first sacrifice.\n\nThe gospel is called everlasting because it was not an emergency plan.\n\nIt was God's plan to save before humanity knew it needed saving.",
  "scriptureRef": "Revelation 14:6",
  "scriptureQuote": "\"And I saw another angel fly in the midst of heaven, having the everlasting gospel to preach unto them that dwell on the earth.\"",
  "scriptureSecondaryRef": "1 Peter 1:18 to 20",
  "scriptureSecondaryQuote": "\"Forasmuch as ye know that ye were not redeemed with corruptible things, as silver and gold,\n\nbut with the precious blood of Christ, as of a lamb without blemish and without spot:\n\nWho verily was foreordained before the foundation of the world.\"",
  "scriptureAfterSecondary": "Romans 6:23\n\n\"For the wages of sin is death;\n\nbut the gift of God is eternal life through Jesus Christ our Lord.\"\n\nThe gospel is not temporary.\n\nIt is not shallow.\n\nIt is not merely religious advice.\n\nIt is the announcement that Christ has done for us what we could never do for ourselves.",
  "teachingPoints": [
    "The everlasting gospel began before the foundation of the world.\nGod was not surprised by sin. The plan of salvation was already in place.",
    "Sin brings death, but Christ brings life.\nThe law reveals the seriousness of sin, but the gospel reveals the mercy of God.",
    "The sacrifices in the Old Testament pointed forward to Jesus.\nThe lambs could not remove sin by themselves. They pointed to the true Lamb.",
    "Jesus is both the perfect Priest and the perfect Sacrifice.\nHe lived the life we failed to live and died the death sin demanded.",
    "The gospel must be received personally.\nA gift can be purchased, offered, and placed before someone, but it must still be accepted."
  ],
  "studyInsight": {
    "placement": "after_teaching",
    "title": "Study Insight",
    "body": "The gospel is not only forgiveness.\n\nIt is restoration.\n\nWhen Adam and Eve sinned, they tried to cover themselves.\n\nBut human effort could not fix what sin had broken.\n\nGod provided the covering.\n\nThat picture matters.\n\nThe gospel is not humanity reaching high enough to reach God.\n\nIt is God coming low enough to reach humanity.\n\nChrist covers our guilt.\n\nChrist restores our standing.\n\nChrist begins changing the life.\n\nThe everlasting gospel is not only about being forgiven for the past.\n\nIt is about being remade for the future."
  },
  "reflectPrompt": "When you think of the gospel,\n\ndo you mostly think of pardon,\n\nor transformation?\n\nDo you see salvation as something Christ gives,\n\nor something you are still trying to earn?\n\nWhat would change if you truly believed\n\nthat Jesus has already provided what you cannot produce?",
  "lifeApplication": "This week, read Romans 6:23 slowly.\n\nPause over both sides of the verse.\n\nThe wages of sin.\n\nThe gift of God.\n\nDo not rush past either one.\n\nThen ask yourself:\n\nAm I trying to cover myself,\n\nor am I receiving what Christ has provided?\n\nLet that question search your heart honestly.",
  "prayer": "Lord,\n\nThank You for the everlasting gospel.\n\nThank You that salvation was not an afterthought.\n\nThank You for Christ,\n\nthe Lamb without blemish,\n\nthe One who lived for me,\n\ndied for me,\n\nand now lives to save completely.\n\nHelp me stop trusting in my own covering.\n\nTeach me to receive Your gift fully,\n\nand let that gift change my life.\n\nAmen."
}
$json_ta_l2$::jsonb
where slug = 'the-everlasting-gospel';

update public.lessons
set reader_content = $json_ta_l3$
{
  "openingThought": "When people hear the phrase \"fear God,\" they often think it means to be afraid of Him.\n\nTo hide.\n\nTo shrink back.\n\nTo expect punishment.\n\nBut that is not how Scripture uses the phrase at its deepest level.\n\nTo fear God is to recognize who He is.\n\nCreator.\nJudge.\nFather.\nRedeemer.\nKing.\n\nIt means awe.\n\nReverence.\n\nTrust.\n\nObedience.\n\nNot terror that drives us away,\n\nbut holy respect that draws us near.\n\nThe first command in the three angels' messages is not asking us to panic.\n\nIt is calling us to live before God with our eyes open.",
  "scriptureRef": "Revelation 14:7",
  "scriptureQuote": "\"Saying with a loud voice,\n\nFear God, and give glory to him;\n\nfor the hour of his judgment is come.\"",
  "scriptureSecondaryRef": "Proverbs 9:10",
  "scriptureSecondaryQuote": "\"The fear of the Lord is the beginning of wisdom:\n\nand the knowledge of the holy is understanding.\"",
  "scriptureAfterSecondary": "Ecclesiastes 12:13\n\n\"Let us hear the conclusion of the whole matter:\n\nFear God, and keep his commandments:\n\nfor this is the whole duty of man.\"\n\nThe fear of God is not spiritual panic.\n\nIt is the beginning of wisdom.\n\nIt teaches us to see life clearly.",
  "teachingPoints": [
    "To fear God means to reverence Him.\nIt is awe before His greatness, holiness, and mercy.",
    "The fear of God is connected to wisdom.\nA person cannot live wisely while ignoring the One who made them.",
    "The fear of God leads to obedience.\nIn Scripture, reverence is never just an emotion. It shapes the life.",
    "The fear of God also affects worship.\nWe do not come before God casually, proudly, or carelessly.",
    "The fear of God changes how we treat people.\nThose who reverence God learn to honor the weak, the poor, and the vulnerable."
  ],
  "studyInsight": {
    "placement": "after_teaching",
    "title": "Study Insight",
    "body": "The fear of God holds two truths together.\n\nGod is high and holy.\n\nAnd God is near.\n\nIf we only see His holiness, we may become afraid.\n\nIf we only see His nearness, we may become casual.\n\nScripture gives us both.\n\nThe God who fills heaven also listens to the humble.\n\nThe God who judges also saves.\n\nThe God who commands also gives mercy.\n\nTo fear God is to live with that awareness.\n\nHe is not to be handled lightly.\n\nAnd He is not to be avoided.\n\nHe is to be trusted, honored, and obeyed."
  },
  "reflectPrompt": "How do you usually think about God?\n\nDistant?\nStrict?\nCasual?\nNear?\n\nDoes your view of God produce reverence,\n\nor indifference?\n\nIf someone looked at your choices,\n\nwould they see that God carries weight in your life?",
  "lifeApplication": "This week, choose one area of your life and bring it under the fear of God.\n\nYour speech.\nYour worship.\nYour habits.\nYour private thoughts.\nYour treatment of others.\n\nAsk one simple question:\n\nDoes this show reverence for God?\n\nDo not answer quickly.\n\nLet the question do its work.",
  "prayer": "Lord,\n\nTeach me what it means to fear You.\n\nNot to run from You,\n\nbut to honor You.\n\nGive me reverence without terror,\n\nnearness without casualness,\n\nobedience without pride.\n\nLet my life show that You are holy,\n\nmerciful,\n\nand worthy of my trust.\n\nAmen."
}
$json_ta_l3$::jsonb
where slug = 'what-it-means-to-fear-god';

update public.lessons
set reader_content = $json_ta_l4$
{
  "openingThought": "The first angel's message does not only say,\n\nFear God.\n\nIt also says,\n\nGive glory to Him.\n\nThat sounds simple until we ask what it means.\n\nIs glory only praise?\n\nIs it only worship music?\n\nIs it only something we say with our lips?\n\nScripture gives a deeper answer.\n\nTo glorify God is to reveal what He is like.\n\nIn our worship.\n\nIn our character.\n\nIn our choices.\n\nIn our bodies.\n\nIn the way we treat people.\n\nGod's glory is not meant to stay hidden in heaven.\n\nIt is meant to be reflected on earth through a surrendered life.",
  "scriptureRef": "Revelation 14:7",
  "scriptureQuote": "\"Saying with a loud voice,\n\nFear God, and give glory to him;\n\nfor the hour of his judgment is come.\"",
  "scriptureSecondaryRef": "Matthew 5:16",
  "scriptureSecondaryQuote": "\"Let your light so shine before men,\n\nthat they may see your good works,\n\nand glorify your Father which is in heaven.\"",
  "scriptureAfterSecondary": "1 Corinthians 6:19 to 20\n\n\"Do you not know that your body is the temple of the Holy Spirit who is in you,\n\nwhom you have from God,\n\nand you are not your own?\n\nFor you were bought at a price;\n\ntherefore glorify God in your body and in your spirit,\n\nwhich are God's.\"\n\n1 Corinthians 10:31\n\n\"Therefore, whether you eat or drink,\n\nor whatever you do,\n\ndo all to the glory of God.\"\n\nTo give God glory is not only to speak well of Him.\n\nIt is to live in a way that points back to Him.",
  "teachingPoints": [
    "God is glorified when His character is reflected.\nWhen mercy, purity, justice, humility, and love are seen in His people, His name is honored.",
    "God is glorified through good works.\nNot works that save us, but works that reveal the One who is changing us.",
    "God is glorified in the body and spirit.\nOur habits, appetites, minds, and choices matter because we belong to Him.",
    "God is glorified when we bear fruit.\nThe fruit of the Spirit shows that His life is working within us.",
    "God is glorified when we remain faithful under pressure.\nEven suffering can reveal the worth of God when His people trust Him."
  ],
  "studyInsight": {
    "placement": "after_teaching",
    "title": "Study Insight",
    "body": "The Bible connects glory with character.\n\nWhen Moses asked to see God's glory, God revealed His goodness, mercy, patience, and justice.\n\nThat matters.\n\nGod's glory is not merely brightness.\n\nIt is who He is.\n\nSo when Revelation says,\n\nGive glory to Him,\n\nit is calling for more than religious words.\n\nIt is calling for a life that reflects God's character.\n\nThis includes the visible parts of life.\n\nWhat we say.\n\nWhat we watch.\n\nWhat we eat.\n\nHow we care for the body.\n\nHow we treat others.\n\nHow we respond when no one is watching.\n\nThe body affects the mind.\n\nThe mind affects the spiritual life.\n\nAnd the spiritual life is where God speaks to us.\n\nGlory is not performance.\n\nIt is reflection."
  },
  "reflectPrompt": "When people look at your life,\n\nwhat picture of God are they seeing?\n\nDo your words reflect Him?\n\nDo your habits reflect Him?\n\nDo your private choices reflect Him?\n\nWhere is God inviting you to give Him glory more fully?",
  "lifeApplication": "This week, choose one area where your life can better reflect God.\n\nYour speech.\nYour entertainment.\nYour eating.\nYour rest.\nYour attitude.\nYour treatment of others.\n\nDo not try to fix everything at once.\n\nChoose one area.\n\nBring it honestly before God.\n\nAsk:\n\nDoes this help me reflect Your character?\n\nThen take one practical step.",
  "prayer": "Lord,\n\nTeach me what it means to give You glory.\n\nNot only with words,\n\nbut with my life.\n\nLet my choices reflect Your character.\n\nLet my body and mind be surrendered to You.\n\nChange what needs to change.\n\nPurify what needs to be purified.\n\nHelp others see something of You in me.\n\nAmen."
}
$json_ta_l4$::jsonb
where slug = 'how-to-glorify-god';

update public.lessons
set reader_content = $json_ta_l5$
{
  "openingThought": "Judgment is not a comfortable word.\n\nFor many people, it sounds cold.\n\nSevere.\n\nThreatening.\n\nBut Scripture presents judgment as more than punishment.\n\nJudgment is where wrong is exposed.\n\nWhere truth is made clear.\n\nWhere God shows that He is just.\n\nAnd for those who are in Christ,\n\njudgment is not a reason to hide.\n\nIt is a reason to hold tightly to the Advocate.\n\nThe first angel does not say the judgment might come someday.\n\nIt says,\n\nThe hour of His judgment has come.\n\nThat means we are not dealing with theory.\n\nWe are dealing with reality.",
  "scriptureRef": "Revelation 14:7",
  "scriptureQuote": "\"Saying with a loud voice,\n\nFear God, and give glory to him;\n\nfor the hour of his judgment is come.\"",
  "scriptureSecondaryRef": "Daniel 7:9 to 10",
  "scriptureSecondaryQuote": "\"I beheld till the thrones were cast down,\n\nand the Ancient of days did sit.\n\nThe judgment was set,\n\nand the books were opened.\"",
  "scriptureAfterSecondary": "1 John 2:1\n\n\"My little children, these things write I unto you,\n\nthat ye sin not.\n\nAnd if any man sin,\n\nwe have an advocate with the Father,\n\nJesus Christ the righteous.\"\n\n1 John 1:9\n\n\"If we confess our sins,\n\nhe is faithful and just to forgive us our sins,\n\nand to cleanse us from all unrighteousness.\"\n\nThe judgment is real.\n\nThe records are real.\n\nBut so is the Advocate.",
  "teachingPoints": [
    "Revelation presents judgment as already begun before Christ returns.\nThe message says the hour of His judgment has come before the harvest scene that follows.",
    "Judgment is connected with records.\nDaniel sees the books opened, showing that God's decisions are not careless or arbitrary.",
    "Satan accuses, but Christ represents His people.\nOur hope is not that our record is clean by itself, but that Jesus stands for those who trust Him.",
    "Confession and repentance matter.\nSin is not ignored. It is forgiven, cleansed, and removed through Christ.",
    "The judgment reveals who is truly in Christ.\nThose who belong to Him receive the reward when He comes."
  ],
  "studyInsight": {
    "placement": "after_teaching",
    "title": "Study Insight",
    "body": "Many people think of judgment as a single moment.\n\nBut Revelation shows a process.\n\nThere is a judgment before the Second Coming.\n\nThere is a judgment during the millennium.\n\nThere is a final judgment after the millennium.\n\nThis lesson focuses on the judgment before Jesus returns.\n\nThat matters because Revelation 14 announces judgment before the final harvest.\n\nThe good news is that God has not left us alone in that judgment.\n\nJesus is not only the Sacrifice.\n\nHe is also the Advocate.\n\nHe lived the perfect life we failed to live.\n\nHe died the death sin deserved.\n\nAnd He now represents those who come to Him in repentance, confession, and trust.\n\nThe safest place in the judgment is not denial.\n\nIt is Christ."
  },
  "reflectPrompt": "When you hear the word judgment,\n\nwhat rises in you first?\n\nFear?\nDefensiveness?\nAvoidance?\nConfidence in Christ?\n\nDo you try to hide your sin,\n\nor bring it honestly to Jesus?\n\nWhat would change if you saw the judgment\n\nnot as a reason to run from God,\n\nbut as a reason to surrender fully to Christ?",
  "lifeApplication": "This week, take time for honest confession.\n\nDo not be vague.\n\nAsk God to show you anything you have been excusing.\n\nThen bring it to Christ.\n\nName it.\n\nConfess it.\n\nTurn from it.\n\nTrust His forgiveness.\n\nThe goal is not to live terrified.\n\nThe goal is to live clean before God,\n\ncovered by Christ,\n\nand responsive to His Spirit.",
  "prayer": "Lord,\n\nThank You that judgment does not leave me hopeless.\n\nThank You for Jesus,\n\nmy Sacrifice,\n\nmy Advocate,\n\nand my righteousness.\n\nSearch my heart.\n\nShow me what needs to be confessed.\n\nGive me repentance where I have been careless.\n\nHelp me trust Your forgiveness,\n\nand stand in Christ with a clean heart.\n\nAmen."
}
$json_ta_l5$::jsonb
where slug = 'the-hour-of-gods-judgment';

update public.lessons
set reader_content = $json_ta_l6$
{
  "openingThought": "The first angel's message ends with a call to worship.\n\nNot just worship in general.\n\nWorship the Creator.\n\nThat matters because the final conflict is not merely about belief.\n\nIt is about worship.\n\nWho receives your loyalty?\n\nWho defines truth?\n\nWho has authority over your life?\n\nRevelation does not leave that question vague.\n\nIt calls the whole world back to the One who made heaven, earth, the sea, and the fountains of waters.\n\nTrue worship begins with creation.\n\nBecause the One who made us\n\nhas the right to call us back to Himself.",
  "scriptureRef": "Revelation 14:7",
  "scriptureQuote": "\"Saying with a loud voice,\n\nFear God, and give glory to him;\n\nfor the hour of his judgment is come:\n\nand worship him that made heaven, and earth, and the sea, and the fountains of waters.\"",
  "scriptureSecondaryRef": "Colossians 1:15 to 17",
  "scriptureSecondaryQuote": "\"He is the image of the invisible God,\n\nthe firstborn over all creation.\n\nFor by Him all things were created,\n\nthat are in heaven,\n\nand that are in earth,\n\nvisible and invisible.\"",
  "scriptureAfterSecondary": "Psalm 95:6\n\n\"O come, let us worship and bow down:\n\nlet us kneel before the Lord our maker.\"\n\nRevelation 4:11\n\n\"Thou art worthy, O Lord,\n\nto receive glory and honour and power:\n\nfor thou hast created all things.\"\n\nWe worship God because He is Creator.\n\nAnd Scripture identifies Christ as central in that work of creation.",
  "teachingPoints": [
    "Worship is the central issue in Revelation.\nThe contrast is between those who worship the Creator and those who worship the beast and his image.",
    "Creation is the foundation of true worship.\nGod is worthy because He made all things and sustains all things.",
    "Christ is not separate from creation.\nAll things were created through Him and for Him.",
    "Worship involves loyalty.\nIt is not only what we sing, but who we obey and trust.",
    "Revelation's call to worship points us back to creation language.\nThe wording echoes the fourth commandment and the memorial of creation."
  ],
  "studyInsight": {
    "placement": "after_teaching",
    "title": "Study Insight",
    "body": "Genesis says God rested on the seventh day.\n\nThe Hebrew word connected with this rest is **shabbat**.\n\nIt means to cease, stop, or rest.\n\nThat matters.\n\nThe Sabbath was not introduced after sin.\n\nIt was placed at creation.\n\nBefore Israel.\n\nBefore Sinai.\n\nBefore the fall.\n\nGod made the world in six days.\n\nThen He rested.\n\nBlessed the seventh day.\n\nAnd made it holy.\n\nRevelation 14 calls the world to worship the Creator.\n\nThat call points back to creation.\n\nAnd at creation, God placed a memorial of His work.\n\nThe Sabbath is not merely a day off.\n\nIt is a sign that the Creator is worthy of worship."
  },
  "reflectPrompt": "When you think about worship,\n\ndo you think mostly of songs,\n\nor surrender?\n\nDo you see worship as something you attend,\n\nor something that orders your life?\n\nWhat does it mean for you personally\n\nto worship the Creator?",
  "lifeApplication": "This week, slow down and notice creation.\n\nThe sky.\nThe trees.\nYour breath.\nYour body.\nThe rhythm of time.\n\nLet creation remind you that your life is not self-made.\n\nThen ask:\n\nAm I living as though God is Creator,\n\nor as though I belong to myself?\n\nChoose one act of worship this week that reflects loyalty to Him.\n\nNot just words.\n\nA real decision.",
  "prayer": "Lord,\n\nYou are my Creator.\n\nYou made all things,\n\nand You hold all things together.\n\nTeach me to worship You with more than words.\n\nCall my heart back to Your authority.\n\nHelp me remember that I belong to You.\n\nMake my worship faithful,\n\nhumble,\n\nand true.\n\nAmen."
}
$json_ta_l6$::jsonb
where slug = 'the-foundation-of-true-worship';

update public.lessons
set reader_content = $json_ta_l7$
{
  "openingThought": "The second angel's message introduces a name that carries heavy meaning.\n\nBabylon.\n\nIt is not just a place on a map.\n\nIt is a symbol.\n\nA system.\n\nA spirit of confusion and rebellion against God.\n\nThe story begins long before Revelation.\n\nAt Babel, humanity tried to build upward without surrendering to God.\n\nA tower.\n\nA name.\n\nA system centered on human greatness.\n\nBut the result was confusion.\n\nRevelation uses that history to show us something deeper.\n\nEnd time Babylon is not merely ancient history repeated.\n\nIt is a final system that unites the world in rebellion while claiming to offer stability, truth, and worship.\n\nThe danger of Babylon is not that it looks obviously evil.\n\nThe danger is that it can look religious while leading people away from God.",
  "scriptureRef": "Revelation 14:8",
  "scriptureQuote": "\"And another angel followed, saying,\n\nBabylon is fallen, is fallen, that great city,\n\nbecause she made all nations drink of the wine of the wrath of her fornication.\"",
  "scriptureSecondaryRef": "Genesis 11:4",
  "scriptureSecondaryQuote": "\"And they said,\n\nCome, let us build us a city and a tower,\n\nwhose top may reach unto heaven;\n\nand let us make us a name.\"",
  "scriptureAfterSecondary": "Revelation 17:5\n\n\"And upon her forehead was a name written,\n\nMystery, Babylon The Great,\n\nThe Mother Of Harlots And Abominations Of The Earth.\"\n\nRevelation 17:15\n\n\"The waters which thou sawest, where the whore sitteth,\n\nare peoples, and multitudes, and nations, and tongues.\"\n\nBabylon is more than one city.\n\nIt represents a worldwide system of confusion, false worship, and human authority set against the authority of God.",
  "teachingPoints": [
    "Babylon begins with human pride.\nAt Babel, people tried to reach heaven by their own effort and make a name for themselves.",
    "Babylon produces confusion.\nThe name Babel is tied to confusion, and Revelation shows final Babylon confusing the nations spiritually.",
    "Babylon is worldwide in influence.\nRevelation says she sits on many waters, meaning peoples, multitudes, nations, and tongues.",
    "Babylon is religious, political, and economic.\nRevelation shows her connected with kings, merchants, nations, and worship.",
    "Babylon opposes true worship.\nHer influence leads people away from the Creator and toward false worship."
  ],
  "studyInsight": {
    "placement": "after_teaching",
    "title": "Study Insight",
    "body": "Revelation 14 and Revelation 17 are connected.\n\nThe first angel's message goes to every nation, kindred, tongue, and people.\n\nBabylon also sits on peoples, multitudes, nations, and tongues.\n\nThat means two messages are moving through the world.\n\nOne comes from heaven.\n\nOne comes from Babylon.\n\nOne calls people to fear God, give Him glory, and worship the Creator.\n\nThe other intoxicates the nations with false teaching and misplaced loyalty.\n\nThis is why the second angel's message matters.\n\nGod is not only exposing Babylon.\n\nHe is preparing people to come out of confusion."
  },
  "reflectPrompt": "Babylon is not only about ancient history.\n\nIt is about the temptation to build life without surrendering to God.\n\nWhere do you see that temptation today?\n\nIn culture?\nIn religion?\nIn ambition?\nIn yourself?\n\nAre there places where you want God's name,\n\nbut not God's authority?\n\nWhat would it mean to come out of confusion\n\nand stand fully with truth?",
  "lifeApplication": "This week, ask God to reveal any confusion you have accepted as normal.\n\nNot all confusion looks dark.\n\nSome of it sounds spiritual.\n\nSome of it feels popular.\n\nSome of it comes dressed as success.\n\nTake one belief, habit, or influence in your life and ask:\n\nDoes this lead me closer to God's truth,\n\nor deeper into confusion?\n\nThen be willing to follow what God shows you.",
  "prayer": "Lord,\n\nKeep me from spiritual confusion.\n\nTeach me to recognize the difference between what comes from You\n\nand what comes from human pride.\n\nGive me humility to receive truth.\n\nGive me courage to leave what is false.\n\nHelp me worship You clearly,\n\nfaithfully,\n\nand fully.\n\nAmen."
}
$json_ta_l7$::jsonb
where slug = 'mystery-babylon-the-great';

update public.lessons
set reader_content = $json_ta_l8$
{
  "openingThought": "Revelation says Babylon makes the nations drunk.\n\nNot with literal wine.\n\nWith teaching.\n\nWith influence.\n\nWith ideas that distort truth.\n\nThat image matters.\n\nWine affects the mind.\n\nIt changes judgment.\n\nIt blurs what is clear.\n\nThat is what false teaching does spiritually.\n\nIt may still use religious language.\n\nIt may still speak of God.\n\nIt may even sound comforting.\n\nBut if it leads people away from Scripture,\n\naway from God's commandments,\n\naway from Christ's work,\n\nand away from true worship,\n\nthen it is not harmless.\n\nBabylon's wine is dangerous because people drink it without realizing they are losing clarity.",
  "scriptureRef": "Revelation 14:8",
  "scriptureQuote": "\"And another angel followed, saying,\n\nBabylon is fallen, is fallen, that great city,\n\nbecause she made all nations drink of the wine of the wrath of her fornication.\"",
  "scriptureSecondaryRef": "Revelation 17:2",
  "scriptureSecondaryQuote": "\"With whom the kings of the earth have committed fornication,\n\nand the inhabitants of the earth have been made drunk with the wine of her fornication.\"",
  "scriptureAfterSecondary": "Jeremiah 51:7\n\n\"Babylon hath been a golden cup in the Lord's hand,\n\nthat made all the earth drunken:\n\nthe nations have drunken of her wine;\n\ntherefore the nations are mad.\"\n\nJohn 17:17\n\n\"Sanctify them through thy truth:\n\nthy word is truth.\"\n\nTruth sanctifies.\n\nFalsehood intoxicates.\n\nThat is the contrast.",
  "teachingPoints": [
    "Babylon's wine represents false teaching.\nIt confuses the mind and leads people away from the clear Word of God.",
    "False teaching is dangerous because it can sound religious.\nThe issue is not whether something uses spiritual language, but whether it agrees with Scripture.",
    "Babylon falls because she rejects God's message.\nIf Babylon received the everlasting gospel, true worship, judgment, and obedience, she would not fall.",
    "Beliefs shape behavior.\nWhat people believe about God, sin, death, judgment, worship, and obedience changes how they live.",
    "God's answer to Babylon's wine is truth.\nThe Word of God must test every teaching, tradition, and spiritual claim."
  ],
  "studyInsight": {
    "placement": "after_teaching",
    "title": "Study Insight",
    "body": "Revelation does not say Babylon keeps her wine to herself.\n\nShe gives it to the nations.\n\nThat means her teachings spread.\n\nThey influence churches, cultures, governments, and ordinary people.\n\nSome false teachings weaken obedience.\n\nSome make sin feel safe.\n\nSome replace God's commandments with human tradition.\n\nSome confuse what happens after death.\n\nSome turn judgment into something distant or unimportant.\n\nSome present worship in a way that ignores the Creator's authority.\n\nThe issue is not merely having wrong information.\n\nWrong teaching produces wrong worship.\n\nAnd wrong worship leads the heart away from God.\n\nThis is why the Bible must remain the test.\n\nNot tradition.\n\nNot popularity.\n\nNot emotion.\n\nScripture."
  },
  "reflectPrompt": "What teachings have shaped your view of God?\n\nDid they come from Scripture,\n\nor from assumption?\n\nAre there beliefs you have accepted because they were familiar,\n\nnot because you studied them?\n\nWhere might God be asking you to test what you believe\n\nby His Word?",
  "lifeApplication": "This week, choose one belief you have always assumed was true.\n\nDo not attack it.\n\nTest it.\n\nOpen Scripture.\n\nPray honestly.\n\nAsk:\n\nWhere does the Bible teach this?\n\nDoes this belief lead me toward Christ,\n\nobedience,\n\ntruth,\n\nand worship of the Creator?\n\nIf it does, hold it with confidence.\n\nIf it does not, be willing to let it go.",
  "prayer": "Lord,\n\nProtect me from confusion.\n\nTeach me to love truth more than comfort.\n\nHelp me test every teaching by Your Word.\n\nRemove what is false.\n\nStrengthen what is true.\n\nGive me a clear mind,\n\na humble heart,\n\nand courage to follow Scripture wherever it leads.\n\nAmen."
}
$json_ta_l8$::jsonb
where slug = 'babylons-abominable-wine';

update public.lessons
set reader_content = $json_ta_l9$
{
  "openingThought": "Revelation uses strong language for a reason.\n\nFornication.\n\nA harlot.\n\nKings of the earth.\n\nA religious power joined to political power.\n\nThis is not random symbolism.\n\nIn Scripture, God's people are often pictured as a woman.\n\nFaithfulness to God is purity.\n\nUnfaithfulness is spiritual adultery.\n\nSo when Revelation shows a harlot joined with the kings of the earth, the picture is serious.\n\nReligion has reached for the power of the state.\n\nSpiritual influence has become political control.\n\nWorship is no longer free.\n\nConscience is no longer protected.\n\nThat is Babylon's fornication.\n\nIt is the union of religious authority with civil power to enforce false worship.",
  "scriptureRef": "Revelation 17:1 to 2",
  "scriptureQuote": "\"Come hither;\n\nI will shew unto thee the judgment of the great whore that sitteth upon many waters:\n\nWith whom the kings of the earth have committed fornication,\n\nand the inhabitants of the earth have been made drunk with the wine of her fornication.\"",
  "scriptureSecondaryRef": "Revelation 18:3",
  "scriptureSecondaryQuote": "\"For all nations have drunk of the wine of the wrath of her fornication,\n\nand the kings of the earth have committed fornication with her.\"",
  "scriptureAfterSecondary": "Matthew 22:21\n\n\"Render therefore unto Caesar the things which are Caesar's;\n\nand unto God the things that are God's.\"\n\nJohn 18:36\n\n\"My kingdom is not of this world.\"\n\nJesus recognized the difference between the kingdom of God and the kingdoms of this world.\n\nWhen religion uses the state to control worship,\n\nit crosses a line Christ never crossed.",
  "teachingPoints": [
    "In Bible prophecy, a woman often represents a religious body.\nA pure woman represents faithfulness. A corrupt woman represents spiritual unfaithfulness.",
    "Babylon's fornication is union with the kings of the earth.\nThis points to religious power joining itself to political power.",
    "Christ's kingdom is not built by force.\nJesus never used civil power to compel worship or obedience.",
    "Forced worship is false worship.\nGod desires love, faith, and willing obedience, not outward conformity produced by pressure.",
    "When church and state unite to enforce religious practice, conscience is endangered.\nThis is one of the central warnings of Revelation."
  ],
  "studyInsight": {
    "placement": "after_teaching",
    "title": "Study Insight",
    "body": "Jesus was clear.\n\nThere are things that belong to Caesar.\n\nAnd there are things that belong to God.\n\nCivil government has a proper role.\n\nIt can protect order.\n\nIt can punish crime.\n\nIt can defend basic justice.\n\nBut it has no authority to command worship.\n\nWorship belongs to God alone.\n\nThe moment religious power reaches for the sword of the state, persecution follows.\n\nHistory has shown this again and again.\n\nRevelation shows that it will happen again at the end.\n\nBabylon's fornication is not merely moral corruption.\n\nIt is a system where religion and political power unite against the conscience of those who keep God's commandments and follow Jesus."
  },
  "reflectPrompt": "How do you think about religious freedom?\n\nDo you value it only when it protects people who agree with you?\n\nOr do you value it because worship must be free?\n\nHave you ever confused outward religious control\n\nwith genuine spiritual faithfulness?\n\nWhat does it mean to follow Christ\n\nwithout using force,\n\npressure,\n\nor political power to control another person's conscience?",
  "lifeApplication": "This week, examine your own spirit.\n\nIt is easy to condemn religious control in history\n\nwhile practicing pressure in smaller ways.\n\nAsk yourself:\n\nDo I try to control people,\n\nor persuade with truth and love?\n\nDo I respect conscience,\n\neven when I disagree?\n\nDo I trust God's Word and Spirit\n\nmore than force?\n\nChoose one relationship or conversation where you can practice the way of Christ.\n\nClear truth.\n\nHumble spirit.\n\nNo coercion.",
  "prayer": "Lord,\n\nTeach me to honor truth without using force.\n\nHelp me understand the danger of false worship\n\nand the misuse of power.\n\nGive me courage to stand for conscience.\n\nGive me humility to respect it in others.\n\nKeep me faithful to Your kingdom,\n\nwhich is not built by pressure,\n\nbut by truth,\n\nlove,\n\nand the Spirit.\n\nAmen."
}
$json_ta_l9$::jsonb
where slug = 'babylons-filthy-fornication';

update public.lessons
set reader_content = $json_ta_l10$
{
  "openingThought": "Revelation 13 introduces a beast rising from the sea.\n\nThat image can feel strange at first.\n\nA beast.\n\nA sea.\n\nHorns.\n\nHeads.\n\nBlasphemy.\n\nAuthority.\n\nWar against the saints.\n\nBut prophecy does not use symbols to hide truth from honest seekers.\n\nIt uses symbols to reveal truth carefully.\n\nThe sea beast is not a monster from imagination.\n\nIt represents a real power in history.\n\nA power that receives authority.\n\nA power that claims what belongs to God.\n\nA power that persecutes the faithful.\n\nA power that receives a deadly wound,\n\nand later rises again to global influence.\n\nTo understand the final warning,\n\nwe must understand the system Revelation is warning about.",
  "scriptureRef": "Revelation 13:1 to 2",
  "scriptureQuote": "\"And I stood upon the sand of the sea,\n\nand saw a beast rise up out of the sea,\n\nhaving seven heads and ten horns,\n\nand upon his horns ten crowns,\n\nand upon his heads the name of blasphemy.\n\nAnd the beast which I saw was like unto a leopard,\n\nand his feet were as the feet of a bear,\n\nand his mouth as the mouth of a lion:\n\nand the dragon gave him his power,\n\nand his seat,\n\nand great authority.\"",
  "scriptureSecondaryRef": "Daniel 7:3",
  "scriptureSecondaryQuote": "\"And four great beasts came up from the sea,\n\ndiverse one from another.\"",
  "scriptureAfterSecondary": "Daniel 7:17\n\n\"These great beasts,\n\nwhich are four,\n\nare four kings,\n\nwhich shall arise out of the earth.\"\n\nRevelation 13 borrows language from Daniel.\n\nIn prophecy, beasts represent kingdoms or ruling powers.\n\nThe sea beast is not symbolic chaos.\n\nIt is a prophetic system with historical features.",
  "teachingPoints": [
    "A beast in Bible prophecy represents a kingdom or ruling power.\nDaniel gives the interpretive key before Revelation expands the picture.",
    "The sea represents populated areas and nations in conflict.\nThis power rises among peoples, kingdoms, and political struggle.",
    "Revelation 13 combines features from Daniel 7.\nThe lion, bear, leopard, and dreadful beast point back to the sequence of world empires.",
    "The dragon gives this beast power, throne, and authority.\nThis shows a transfer of political and religious influence.",
    "The beast speaks blasphemy and persecutes the saints.\nIts issue is not merely political power, but religious claims that belong to God alone."
  ],
  "studyInsight": {
    "placement": "after_teaching",
    "title": "Study Insight",
    "body": "Daniel 7 and Revelation 13 belong together.\n\nDaniel shows a sequence of powers:\n\nBabylon.\n\nMedo Persia.\n\nGreece.\n\nRome.\n\nDivided Rome.\n\nThe little horn.\n\nRevelation 13 looks back at that same prophetic line and focuses on the power that follows Rome's division.\n\nThis power speaks great words.\n\nIt persecutes God's people.\n\nIt claims religious authority.\n\nIt continues for a prophetic period.\n\nAnd it receives a deadly wound.\n\nThe issue is not whether a system is religious.\n\nThe issue is whether that system honors God's authority,\n\nor takes authority that belongs to Him.\n\nRevelation identifies a power that uses religion,\n\nbut turns worship and conscience away from Scripture.\n\nThat is why the warning is serious."
  },
  "reflectPrompt": "When you think about religious power,\n\ndo you assume it is always safe because it uses spiritual language?\n\nHow can something sound religious,\n\nyet still oppose God's truth?\n\nAre there places where you have trusted tradition,\n\nauthority,\n\nor popularity\n\nmore than Scripture?\n\nWhat would it mean to let the Bible test every religious claim?",
  "lifeApplication": "This week, practice discernment.\n\nChoose one belief, practice, or tradition you have accepted without much thought.\n\nDo not approach it with pride.\n\nApproach it with prayer.\n\nAsk:\n\nWhere does Scripture teach this?\n\nDoes this lead me to worship God more faithfully?\n\nDoes it honor Christ's authority?\n\nDoes it agree with God's commandments?\n\nTruth does not need fear to survive examination.\n\nLet Scripture be the test.",
  "prayer": "Lord,\n\nTeach me to understand prophecy with humility.\n\nProtect me from confusion,\n\nfear,\n\nand pride.\n\nHelp me test every claim by Your Word.\n\nGive me courage to follow truth,\n\neven when it challenges what is familiar.\n\nKeep my worship centered on You,\n\nand my conscience surrendered to Scripture.\n\nAmen."
}
$json_ta_l10$::jsonb
where slug = 'revelations-sea-beast';

update public.lessons
set reader_content = $json_ta_l11$
{
  "openingThought": "Revelation does not stop with the sea beast.\n\nAnother beast appears.\n\nThis one does not rise from the sea.\n\nIt rises from the earth.\n\nIt looks different.\n\nIt has two horns like a lamb.\n\nBut it speaks like a dragon.\n\nThat is the warning.\n\nSomething can begin with gentle principles\n\nand later speak with the voice of coercion.\n\nSomething can claim liberty\n\nand later use power to control conscience.\n\nThe land beast is not introduced as openly hostile at first.\n\nIts danger is contradiction.\n\nLamb like appearance.\n\nDragon like voice.\n\nReligious freedom in profession.\n\nReligious control in practice.",
  "scriptureRef": "Revelation 13:11",
  "scriptureQuote": "\"And I beheld another beast coming up out of the earth;\n\nand he had two horns like a lamb,\n\nand he spake as a dragon.\"",
  "scriptureSecondaryRef": "Revelation 13:12",
  "scriptureSecondaryQuote": "\"And he exerciseth all the power of the first beast before him,\n\nand causeth the earth and them which dwell therein\n\nto worship the first beast,\n\nwhose deadly wound was healed.\"",
  "scriptureAfterSecondary": "Revelation 12:16\n\n\"And the earth helped the woman,\n\nand the earth opened her mouth,\n\nand swallowed up the flood which the dragon cast out of his mouth.\"\n\nMatthew 22:21\n\n\"Render therefore unto Caesar the things which are Caesar's;\n\nand unto God the things that are God's.\"\n\nThis power rises from the earth,\n\nappears lamb like,\n\nbut eventually speaks like the dragon.\n\nIts final role is to lead the world back toward the authority of the first beast.",
  "teachingPoints": [
    "The land beast rises from the earth.\nUnlike the sea, the earth points to a less populated area and a different kind of rise.",
    "It appears after the first beast receives its deadly wound.\nThe timing matters in identifying its role in prophecy.",
    "It has two horns like a lamb.\nThis points to gentle, Christ like principles in appearance.",
    "It speaks like a dragon.\nIts speech reveals a change from liberty to coercion.",
    "It causes the world to worship the first beast.\nIts final role is not neutral. It restores influence to the wounded power."
  ],
  "studyInsight": {
    "placement": "after_teaching",
    "title": "Study Insight",
    "body": "The two horns matter.\n\nIn prophecy, horns often represent powers or kingdoms.\n\nThis beast has two lamb like horns,\n\nbut no crowns.\n\nThat picture suggests a nation with two key principles,\n\nnot a monarchy.\n\nThe PDF connects this with the idea of two kingdoms existing within one nation:\n\ncivil authority\n\nand religious liberty.\n\nJesus recognized this distinction when He said to give Caesar what belongs to Caesar,\n\nand give God what belongs to God.\n\nThat separation protects conscience.\n\nBut Revelation warns that this power eventually speaks like a dragon.\n\nIt keeps its lamb like appearance,\n\nbut uses dragon like methods.\n\nThis is the danger.\n\nA nation can keep the language of liberty\n\nwhile beginning to enforce worship."
  },
  "reflectPrompt": "Why does forced religion always become dangerous?\n\nCan worship still be true if it is pressured?\n\nHave you seen people confuse outward religious behavior\n\nwith genuine surrender to God?\n\nWhere do you need to protect your own conscience,\n\nand also respect the conscience of others?",
  "lifeApplication": "This week, examine how you use influence.\n\nNot just political influence.\n\nPersonal influence.\n\nFamily influence.\n\nSpiritual influence.\n\nAsk yourself:\n\nDo I pressure people,\n\nor persuade with truth and love?\n\nDo I respect conscience,\n\nor try to control outcomes?\n\nDo I trust God's Spirit,\n\nor rely on force?\n\nChoose one conversation where you can practice Christ's way.\n\nClear truth.\n\nPatient spirit.\n\nNo coercion.",
  "prayer": "Lord,\n\nTeach me to value the conscience You gave.\n\nHelp me recognize the danger of religious force.\n\nKeep me from using pressure where You call for truth and love.\n\nGive me courage to stand for what is right,\n\nand humility to respect the freedom of others.\n\nMake my faith sincere,\n\nnot forced,\n\nand my witness faithful,\n\nnot controlling.\n\nAmen."
}
$json_ta_l11$::jsonb
where slug = 'revelations-land-beast';

update public.lessons
set reader_content = $json_ta_l12$
{
  "openingThought": "An image is a copy.\n\nA likeness.\n\nA reproduction.\n\nRevelation says an image will be made to the beast.\n\nThat means something will be formed that resembles the first beast's system of power.\n\nNot necessarily the same organization.\n\nBut the same pattern.\n\nReligious authority joined with civil power.\n\nWorship enforced.\n\nConscience pressured.\n\nDissent punished.\n\nThis is why the image of the beast matters.\n\nIt is not only about what happened in history.\n\nIt is about what happens when the same principles return.\n\nWhen religion reaches for the power of the state,\n\nthe image begins to form.",
  "scriptureRef": "Revelation 13:14 to 15",
  "scriptureQuote": "\"Saying to them that dwell on the earth,\n\nthat they should make an image to the beast,\n\nwhich had the wound by a sword,\n\nand did live.\n\nAnd he had power to give life unto the image of the beast,\n\nthat the image of the beast should both speak,\n\nand cause that as many as would not worship the image of the beast\n\nshould be killed.\"",
  "scriptureSecondaryRef": "Revelation 13:12",
  "scriptureSecondaryQuote": "\"And he exerciseth all the power of the first beast before him,\n\nand causeth the earth and them which dwell therein\n\nto worship the first beast.\"",
  "scriptureAfterSecondary": "Daniel 3:4 to 6\n\n\"Then an herald cried aloud,\n\nTo you it is commanded,\n\nO people, nations, and languages,\n\nthat at what time ye hear the sound of the cornet,\n\nflute,\n\nharp,\n\nsackbut,\n\npsaltery,\n\ndulcimer,\n\nand all kinds of music,\n\nye fall down and worship the golden image.\"\n\nAn image connected with forced worship is not new.\n\nDaniel 3 helps us recognize the pattern.",
  "teachingPoints": [
    "An image is a likeness of something else.\nThe image of the beast reflects the principles and methods of the first beast.",
    "The first beast used religious authority joined with civil power.\nThe image repeats that pattern.",
    "The image speaks.\nIn prophecy, this points to official action, law, and command.",
    "The image causes.\nIt does not merely invite worship. It pressures and enforces.",
    "The issue is worship and conscience.\nThose who refuse false worship become the target of coercive power."
  ],
  "studyInsight": {
    "placement": "after_teaching",
    "title": "Study Insight",
    "body": "Daniel 3 gives a clear preview.\n\nA global empire.\n\nAn image.\n\nA command to worship.\n\nMusic and public pressure.\n\nA death decree for those who refuse.\n\nThe issue was not whether the Hebrews believed in God privately.\n\nThe issue was whether they would bow publicly.\n\nRevelation shows the same pattern at the end.\n\nFalse worship will not remain only a belief.\n\nIt will become enforced practice.\n\nThe image of the beast forms when religious influence gains civil power to enforce worship.\n\nThat is why Scripture calls God's people to patience,\n\nfaith,\n\ncommandment keeping,\n\nand loyalty to Jesus.\n\nThe final crisis reveals who owns the conscience."
  },
  "reflectPrompt": "What would make false worship powerful?\n\nFear?\n\nPressure?\n\nConvenience?\n\nDesire to fit in?\n\nWould you recognize false worship if it was popular,\n\nlegal,\n\nand presented as good for society?\n\nWhere are you learning now\n\nto obey God over pressure?",
  "lifeApplication": "This week, practice small faithfulness.\n\nDo not wait for a major crisis to learn obedience.\n\nChoose one area where pressure tempts you to compromise.\n\nIt may be private.\n\nIt may be public.\n\nIt may seem small.\n\nAsk:\n\nAm I bowing because it is easier,\n\nor standing because it is true?\n\nFaithfulness grows through repeated choices.\n\nChoose truth now,\n\nso your conscience is trained for later.",
  "prayer": "Lord,\n\nGive me a conscience loyal to You.\n\nTeach me to recognize false worship,\n\neven when it looks acceptable.\n\nKeep me from bowing to pressure.\n\nStrengthen my faith in small decisions,\n\nso I can stand in greater tests.\n\nHelp me worship You freely,\n\nfaithfully,\n\nand without compromise.\n\nAmen."
}
$json_ta_l12$::jsonb
where slug = 'the-image-of-the-beast';

update public.lessons
set reader_content = $json_ta_l13$
{
  "openingThought": "Few symbols in Revelation have created more speculation than 666.\n\nPeople have guessed names.\n\nWatched headlines.\n\nChased theories.\n\nBut Revelation does not give this number so we can play with fear.\n\nIt gives it so we can understand a system.\n\nThe number is connected to the beast.\n\nTo worship.\n\nTo authority.\n\nTo a name.\n\nTo a claim that belongs only to God.\n\nSo the question is not,\n\nWho can we accuse?\n\nThe better question is,\n\nWhat kind of authority is Revelation warning us about?\n\nBecause 666 is not mainly about curiosity.\n\nIt is about counterfeit authority.",
  "scriptureRef": "Revelation 13:18",
  "scriptureQuote": "\"Here is wisdom.\n\nLet him that hath understanding count the number of the beast:\n\nfor it is the number of a man;\n\nand his number is Six hundred threescore and six.\"",
  "scriptureSecondaryRef": "Revelation 13:5 to 6",
  "scriptureSecondaryQuote": "\"And there was given unto him a mouth speaking great things and blasphemies.\n\nAnd he opened his mouth in blasphemy against God,\n\nto blaspheme his name,\n\nand his tabernacle,\n\nand them that dwell in heaven.\"",
  "scriptureAfterSecondary": "2 Thessalonians 2:3 to 4\n\n\"That man of sin be revealed,\n\nthe son of perdition;\n\nwho opposeth and exalteth himself above all that is called God,\n\nor that is worshipped.\"\n\nThe number is tied to a power that speaks blasphemy,\n\nexalts itself,\n\nand claims authority that belongs to God.",
  "teachingPoints": [
    "Revelation says the number calls for wisdom.\nThis is not meant for wild guessing, but careful spiritual discernment.",
    "The number belongs to the beast system.\nIt must be studied in the same context as worship, authority, blasphemy, and the mark.",
    "Revelation says it is the number of a man.\nThis points to a system centered in human authority rather than God's authority.",
    "The beast's name is blasphemous.\nIt claims religious authority and prerogatives that belong only to Christ.",
    "In this prophetic interpretation, the number is connected with Rome and Latin titles of religious authority.\nThe issue is not personal insult, but a system that places human authority where Christ alone belongs."
  ],
  "studyInsight": {
    "placement": "after_teaching",
    "title": "Study Insight",
    "body": "Revelation 13 points us toward a name that carries a number.\n\nIn ancient languages, letters often carried numerical value.\n\nBecause the beast is connected with Rome,\n\nthe PDF source argues that the number should be understood through Latin.\n\nThe title often discussed in this interpretation is:\n\n**Vicarius Filii Dei**\n\nIt means,\n\nVicar of the Son of God.\n\nThe concern is not simply the words themselves.\n\nThe concern is the claim behind them.\n\nA representative who stands in Christ's place on earth.\n\nA religious authority claiming power to act for Christ,\n\neven where Scripture gives no permission.\n\nThat is why this lesson matters.\n\nThe number 666 is not meant to distract us with fear.\n\nIt is meant to expose a system that centers human authority in the place of Christ's authority."
  },
  "reflectPrompt": "When you think about spiritual authority,\n\nwhat do you trust most?\n\nScripture?\n\nTradition?\n\nReligious office?\n\nPopular belief?\n\nHuman explanation?\n\nAre there places where you have allowed human authority\n\nto outweigh the Word of God?\n\nWhat would it mean to let Christ alone hold the highest authority in your faith?",
  "lifeApplication": "This week, practice testing authority.\n\nChoose one belief or practice you have accepted.\n\nAsk:\n\nWhere does Scripture teach this?\n\nDoes this exalt Christ,\n\nor human authority?\n\nDoes this lead me to obey God,\n\nor merely follow tradition?\n\nDo not study with suspicion.\n\nStudy with humility.\n\nChrist is not threatened by honest questions.\n\nTruth can be examined.",
  "prayer": "Lord,\n\nGive me wisdom.\n\nTeach me to recognize the difference between Your authority\n\nand human authority.\n\nKeep me from fear,\n\nspeculation,\n\nand pride.\n\nLead me back to Scripture.\n\nKeep Christ at the center of my worship,\n\nmy obedience,\n\nand my trust.\n\nAmen."
}
$json_ta_l13$::jsonb
where slug = '666-the-number-of-the-beast';

update public.lessons
set reader_content = $json_ta_l14$
{
  "openingThought": "The mark of the beast is not introduced in a vacuum.\n\nIt comes after a long conflict.\n\nA conflict over worship.\n\nA conflict over authority.\n\nA conflict over obedience.\n\nMany people want to know what the mark is,\n\nbut Revelation first shows us what the conflict is about.\n\nIt is not merely about technology.\n\nIt is not merely about politics.\n\nIt is not merely about a visible sign.\n\nIt is about loyalty.\n\nWho has the right to define worship?\n\nWho has the right to command conscience?\n\nWho has the right to shape obedience?\n\nBefore we identify the mark,\n\nwe must understand the law, worship, and the seal of God.",
  "scriptureRef": "Revelation 14:9 to 12",
  "scriptureQuote": "\"If any man worship the beast and his image,\n\nand receive his mark in his forehead,\n\nor in his hand,\n\nthe same shall drink of the wine of the wrath of God.\"\n\n\"Here is the patience of the saints:\n\nhere are they that keep the commandments of God,\n\nand the faith of Jesus.\"",
  "scriptureSecondaryRef": "Revelation 12:17",
  "scriptureSecondaryQuote": "\"And the dragon was wroth with the woman,\n\nand went to make war with the remnant of her seed,\n\nwhich keep the commandments of God,\n\nand have the testimony of Jesus Christ.\"",
  "scriptureAfterSecondary": "Hebrews 8:10\n\n\"I will put my laws into their mind,\n\nand write them in their hearts:\n\nand I will be to them a God,\n\nand they shall be to me a people.\"\n\nIsaiah 8:16\n\n\"Bind up the testimony,\n\nseal the law among my disciples.\"\n\nRevelation contrasts two groups.\n\nOne receives the mark of the beast.\n\nThe other keeps the commandments of God and the faith of Jesus.",
  "teachingPoints": [
    "The final conflict is connected with worship.\nRevelation repeatedly shows the issue as worship of God or worship of the beast.",
    "The final conflict is connected with God's commandments.\nThe faithful are described as those who keep the commandments of God.",
    "The seal of God is connected with the mind and the heart.\nGod writes His law inwardly, not merely outwardly.",
    "The forehead and hand matter symbolically.\nThe forehead points to conviction. The hand points to action.",
    "The mark of the beast is a counterfeit of God's seal.\nIt involves false worship, human authority, and obedience against God's command."
  ],
  "studyInsight": {
    "placement": "after_teaching",
    "title": "Study Insight",
    "body": "Think of the final issue like three circles.\n\nThe largest circle is the law of God.\n\nThe smaller circle is the first table of the law,\n\nthe commandments that deal directly with worship and loyalty to God.\n\nThe smallest circle is the one commandment that identifies the Creator.\n\nThe Sabbath commandment.\n\nThat commandment contains the elements of a seal:\n\nthe name,\n\nthe title,\n\nand the territory of authority.\n\nThe Lord your God.\n\nCreator.\n\nHeaven and earth.\n\nThis is why the mark of the beast cannot be understood apart from worship and law.\n\nThe issue is not simply a day.\n\nIt is authority.\n\nGod's authority,\n\nor human authority.\n\nGod's command,\n\nor human substitution."
  },
  "reflectPrompt": "When you hear \"the mark of the beast,\"\n\ndo you think first of fear,\n\nor worship?\n\nHave you studied this from Scripture,\n\nor mostly from assumptions?\n\nWhat does your obedience reveal about whose authority you trust?\n\nAre there places where you follow what is convenient\n\ninstead of what is written?",
  "lifeApplication": "This week, read Revelation 14:9 to 12 carefully.\n\nNotice the contrast.\n\nMark of the beast.\n\nCommandments of God.\n\nFaith of Jesus.\n\nDo not rush.\n\nAsk:\n\nWhat does this passage say the final issue is?\n\nWhat kind of people does God call faithful?\n\nWhere is God calling me to deeper loyalty?\n\nLet Scripture define the issue before culture does.",
  "prayer": "Lord,\n\nHelp me understand this warning with humility.\n\nRemove fear,\n\nspeculation,\n\nand confusion.\n\nTeach me to see the real issue.\n\nWorship.\n\nAuthority.\n\nObedience.\n\nWrite Your law in my heart and mind.\n\nStrengthen my faith in Jesus.\n\nMake my loyalty clear,\n\nnot only in words,\n\nbut in my life.\n\nAmen."
}
$json_ta_l14$::jsonb
where slug = 'the-mark-of-the-beast-part-1';

update public.lessons
set reader_content = $json_ta_l15$
{
  "openingThought": "If the final conflict centers on worship,\n\nthen the question becomes practical.\n\nWhat worship does God command?\n\nWhat worship has human authority substituted?\n\nRevelation points us back to creation.\n\nTo the One who made heaven,\n\nearth,\n\nthe sea,\n\nand the fountains of waters.\n\nThat language is not accidental.\n\nIt echoes the fourth commandment.\n\nThe Sabbath stands as a memorial of creation,\n\na sign of God's authority,\n\nand a test of loyalty when human authority claims the right to change what God has blessed.\n\nThe mark of the beast is not about an accidental misunderstanding.\n\nIt is about choosing human authority over God's command when the issue is made clear.",
  "scriptureRef": "Genesis 2:2 to 3",
  "scriptureQuote": "\"And on the seventh day God ended his work which he had made;\n\nand he rested on the seventh day from all his work which he had made.\n\nAnd God blessed the seventh day,\n\nand sanctified it.\"",
  "scriptureSecondaryRef": "Exodus 20:8 to 11",
  "scriptureSecondaryQuote": "\"Remember the sabbath day,\n\nto keep it holy.\n\nSix days shalt thou labour,\n\nand do all thy work:\n\nbut the seventh day is the sabbath of the Lord thy God.\"",
  "scriptureAfterSecondary": "Mark 2:27 to 28\n\n\"The sabbath was made for man,\n\nand not man for the sabbath:\n\nTherefore the Son of man is Lord also of the sabbath.\"\n\nDaniel 7:25\n\n\"He shall speak great words against the most High,\n\nand shall wear out the saints of the most High,\n\nand think to change times and laws.\"\n\nThe Bible presents the seventh day as blessed,\n\nsanctified,\n\nand connected with the authority of the Creator.",
  "teachingPoints": [
    "The Sabbath began at creation.\nIt was given before sin, before Sinai, and before any nation existed.",
    "The Sabbath points to God as Creator.\nThat is why Revelation's call to worship the Creator matters.",
    "Jesus identified Himself as Lord of the Sabbath.\nThe Sabbath belongs to Him, not to human tradition.",
    "Daniel warned of a power that would think to change times and law.\nThis connects directly with authority over worship.",
    "The mark of the beast centers on enforced false worship.\nIt becomes the mark when human authority is chosen over God's command in the final crisis."
  ],
  "studyInsight": {
    "placement": "after_teaching",
    "title": "Study Insight",
    "body": "The PDF source identifies Sunday observance as the mark of beast authority\n\nwhen it is knowingly accepted and enforced in place of God's Sabbath.\n\nThis distinction matters.\n\nA person is not marked simply because they were taught incorrectly,\n\nor because they have not yet seen the issue clearly.\n\nThe final crisis involves light,\n\nchoice,\n\npressure,\n\nand worship.\n\nThe Sabbath is God's sign of creation authority.\n\nSunday, in this prophetic understanding, becomes the sign of human religious authority when it is exalted above God's command and enforced by civil power.\n\nThe issue is not calendar preference.\n\nIt is authority.\n\nWho has the right to define holy time?\n\nGod,\n\nor man?"
  },
  "reflectPrompt": "Have you thought seriously about why you worship when you worship?\n\nIs your practice based on Scripture,\n\ntradition,\n\nfamily,\n\nculture,\n\nor convenience?\n\nIf God has blessed and sanctified the seventh day,\n\nwhat does that mean for your life?\n\nAre you willing to follow Scripture\n\neven when it challenges what is familiar?",
  "lifeApplication": "This week, study the Sabbath for yourself.\n\nRead Genesis 2:2 to 3.\n\nRead Exodus 20:8 to 11.\n\nRead Mark 2:27 to 28.\n\nRead Revelation 14:6 to 12.\n\nDo not begin with tradition.\n\nBegin with Scripture.\n\nAsk:\n\nWhat did God bless?\n\nWhat did God command?\n\nWhat did Jesus affirm?\n\nWhat does Revelation call the world back to?\n\nLet the Bible speak clearly.",
  "prayer": "Lord,\n\nGive me a heart that follows Your Word.\n\nHelp me lay aside assumption,\n\ntradition,\n\nand convenience.\n\nShow me what You have blessed.\n\nTeach me what true worship means.\n\nGive me courage to follow You\n\nwhen truth becomes clear.\n\nKeep my loyalty with Christ,\n\nand my conscience surrendered to Scripture.\n\nAmen."
}
$json_ta_l15$::jsonb
where slug = 'the-mark-of-the-beast-part-2';

update public.lessons
set reader_content = $json_ta_l16$
{
  "openingThought": "The third angel's message contains one of the strongest warnings in Scripture.\n\nIt speaks of the wine of God's wrath.\n\nThat phrase is heavy.\n\nIt should not be treated carelessly.\n\nBut it should also not be misunderstood.\n\nGod's wrath is not uncontrolled anger.\n\nIt is His settled response to sin,\n\nrebellion,\n\nfalse worship,\n\nand the final rejection of mercy.\n\nBefore the wine of wrath is poured out,\n\nthe everlasting gospel has been preached.\n\nTruth has been given.\n\nWarnings have been heard.\n\nMercy has been offered.\n\nThe wine of God's wrath comes only after people choose the beast,\n\nhis image,\n\nand his mark,\n\ninstead of Christ,\n\nHis commandments,\n\nand His truth.",
  "scriptureRef": "Revelation 14:9 to 10",
  "scriptureQuote": "\"If any man worship the beast and his image,\n\nand receive his mark in his forehead,\n\nor in his hand,\n\nthe same shall drink of the wine of the wrath of God,\n\nwhich is poured out without mixture into the cup of his indignation.\"",
  "scriptureSecondaryRef": "Revelation 15:1",
  "scriptureSecondaryQuote": "\"And I saw another sign in heaven,\n\ngreat and marvellous,\n\nseven angels having the seven last plagues;\n\nfor in them is filled up the wrath of God.\"",
  "scriptureAfterSecondary": "Revelation 16:1\n\n\"And I heard a great voice out of the temple saying to the seven angels,\n\nGo your ways,\n\nand pour out the vials of the wrath of God upon the earth.\"\n\nRomans 6:23\n\n\"For the wages of sin is death;\n\nbut the gift of God is eternal life through Jesus Christ our Lord.\"\n\nGod's wrath is real.\n\nBut so is His gift.\n\nThe issue is whether a person receives what Christ has provided,\n\nor chooses to stand under sin's final consequence.",
  "teachingPoints": [
    "The wine of God's wrath is connected with the final rejection of mercy.\nIt is poured out after truth has been proclaimed and choices have been made.",
    "The wrath of God is revealed in the seven last plagues.\nRevelation shows the bowls of wrath being poured out after probation closes.",
    "God's wrath is unmixed.\nThat means it is no longer softened by mercy because mercy has been finally rejected.",
    "The issue is not whether Christ paid for sin.\nThe issue is whether people receive His payment or choose to carry their own guilt.",
    "The final consequence of sin is death.\nJesus offers eternal life, but He does not force anyone to receive it."
  ],
  "studyInsight": {
    "placement": "after_teaching",
    "title": "Study Insight",
    "body": "The Bible presents two ways for sin to be dealt with.\n\nEither Christ carries it,\n\nor the sinner does.\n\nAt the cross, Jesus paid the price for the world.\n\nThe gift is real.\n\nThe sacrifice is enough.\n\nThe provision has been made.\n\nBut a gift can be refused.\n\nThat is what makes the wine of God's wrath so serious.\n\nIt is not poured out because God failed to save.\n\nIt is poured out because people finally reject the only One who can save them.\n\nThe wrath of God is not the opposite of His love.\n\nIt is what happens when love, truth, and mercy are permanently rejected."
  },
  "reflectPrompt": "When you think about God's wrath,\n\ndo you see only punishment,\n\nor do you also see rejected mercy?\n\nHave you treated grace as something ordinary?\n\nAre there areas where God has been warning you,\n\nbut you have delayed responding?\n\nWhat would it mean to receive Christ fully,\n\ninstead of resisting what He is trying to save you from?",
  "lifeApplication": "This week, take grace seriously.\n\nDo not use mercy as an excuse to delay obedience.\n\nAsk God to show you one area where you have been resisting Him.\n\nThen respond.\n\nConfess what needs to be confessed.\n\nRelease what needs to be released.\n\nObey what has already been made clear.\n\nThe safest place is not denial.\n\nThe safest place is surrender to Christ.",
  "prayer": "Lord,\n\nThank You for offering mercy before judgment.\n\nThank You for the gift of eternal life through Jesus.\n\nHelp me not to take grace lightly.\n\nShow me where I have resisted Your voice.\n\nLead me to repentance.\n\nTeach me to receive what Christ has provided,\n\nand to stand on the side of mercy,\n\ntruth,\n\nand life.\n\nAmen."
}
$json_ta_l16$::jsonb
where slug = 'the-wine-of-gods-wrath';

update public.lessons
set reader_content = $json_ta_l17$
{
  "openingThought": "Some verses in Revelation sound terrifying at first reading.\n\nFire.\n\nBrimstone.\n\nTorment.\n\nSmoke rising forever.\n\nNo rest day or night.\n\nMany people read those words and assume the Bible teaches endless conscious suffering.\n\nBut Scripture must explain Scripture.\n\nRevelation uses symbols and language drawn from the Old Testament.\n\nIf we read carefully,\n\nthe picture becomes clearer.\n\nThe fire is real.\n\nThe judgment is real.\n\nThe consequences are eternal.\n\nBut the Bible does not teach that sin will live forever in a corner of God's universe.\n\nGod's final judgment destroys sin completely.\n\nThe smoke rises because the destruction is final,\n\nnot because the wicked live forever.",
  "scriptureRef": "Revelation 14:10 to 11",
  "scriptureQuote": "\"He shall be tormented with fire and brimstone\n\nin the presence of the holy angels,\n\nand in the presence of the Lamb:\n\nAnd the smoke of their torment ascendeth up for ever and ever.\"",
  "scriptureSecondaryRef": "Jude 7",
  "scriptureSecondaryQuote": "\"Sodom and Gomorrha,\n\nand the cities about them in like manner,\n\ngiving themselves over to fornication,\n\nand going after strange flesh,\n\nare set forth for an example,\n\nsuffering the vengeance of eternal fire.\"",
  "scriptureAfterSecondary": "2 Peter 2:6\n\n\"And turning the cities of Sodom and Gomorrha into ashes\n\ncondemned them with an overthrow,\n\nmaking them an ensample unto those that after should live ungodly.\"\n\nMalachi 4:1\n\n\"For, behold, the day cometh,\n\nthat shall burn as an oven;\n\nand all the proud,\n\nyea,\n\nand all that do wickedly,\n\nshall be stubble.\"\n\nSodom suffered eternal fire,\n\nbut it is not still burning today.\n\nThe result was eternal.\n\nThe cities were reduced to ashes.",
  "teachingPoints": [
    "Revelation uses Old Testament judgment language.\nTo understand \"forever and ever,\" we must compare Scripture with Scripture.",
    "Eternal fire does not mean the fire burns without end.\nJude says Sodom suffered eternal fire, yet Peter says it was turned to ashes.",
    "The punishment is eternal in result.\nThe wicked do not receive eternal life in torment. They face final destruction.",
    "The second death is final.\nRevelation 20 describes the lake of fire as the second death.",
    "God will not preserve sin forever.\nThe final judgment removes sin, rebellion, Satan, and death from the universe."
  ],
  "studyInsight": {
    "placement": "after_teaching",
    "title": "Study Insight",
    "body": "The phrase \"smoke ascending\" appears in the Old Testament as a picture of complete judgment.\n\nWhen Sodom was destroyed,\n\nAbraham saw smoke rising like the smoke of a furnace.\n\nThe smoke was evidence that the judgment had taken place.\n\nIt did not mean the city would burn forever.\n\nIt meant the destruction was complete.\n\nRevelation uses similar language.\n\nThe smoke of Babylon's torment rising forever points to a judgment whose result cannot be reversed.\n\nThe wicked do not continue living forever in suffering.\n\nThey are destroyed.\n\nSin ends.\n\nDeath ends.\n\nThe universe is cleansed.\n\nGod's justice is not eternal cruelty.\n\nIt is final judgment that makes way for eternal restoration."
  },
  "reflectPrompt": "How has your view of God been shaped by the idea of judgment?\n\nHave you pictured Him as cruel,\n\nor as just?\n\nDoes the Bible's teaching about final destruction change how you see His character?\n\nWhat does it mean to you that God will not allow sin to continue forever?",
  "lifeApplication": "This week, read Jude 7 and 2 Peter 2:6 together.\n\nNotice the connection.\n\nEternal fire.\n\nReduced to ashes.\n\nThen read Revelation 20:14 to 15.\n\nAsk:\n\nWhat is the final result of sin?\n\nDoes God preserve evil forever,\n\nor end it completely?\n\nLet Scripture correct fear,\n\nand give you a clearer picture of God's justice.",
  "prayer": "Lord,\n\nHelp me understand Your justice through Scripture.\n\nRemove false pictures of Your character.\n\nTeach me to see that You are holy,\n\nfair,\n\nmerciful,\n\nand true.\n\nThank You that sin will not last forever.\n\nThank You that death will end.\n\nHelp me trust Your judgment,\n\nand choose life in Christ.\n\nAmen."
}
$json_ta_l17$::jsonb
where slug = 'the-smoke-of-babylons-torment';

update public.lessons
set reader_content = $json_ta_l18$
{
  "openingThought": "After the warning against the beast,\n\nhis image,\n\nand his mark,\n\nRevelation shows us a different kind of people.\n\nNot loud.\n\nNot powerful in the world's eyes.\n\nNot supported by earthly systems.\n\nBut faithful.\n\nThey endure.\n\nThey keep God's commandments.\n\nThey hold to the faith of Jesus.\n\nThat is what Revelation calls the patience of the saints.\n\nThis is not passive waiting.\n\nIt is steady faithfulness under pressure.\n\nIt is refusing to let go of God\n\nwhen the world makes obedience costly.",
  "scriptureRef": "Revelation 14:12",
  "scriptureQuote": "\"Here is the patience of the saints:\n\nhere are they that keep the commandments of God,\n\nand the faith of Jesus.\"",
  "scriptureSecondaryRef": "Luke 18:1",
  "scriptureSecondaryQuote": "\"And he spake a parable unto them to this end,\n\nthat men ought always to pray,\n\nand not to faint.\"",
  "scriptureAfterSecondary": "Luke 18:7 to 8\n\n\"And shall not God avenge his own elect,\n\nwhich cry day and night unto him,\n\nthough he bear long with them?\n\nI tell you that he will avenge them speedily.\n\nNevertheless when the Son of man cometh,\n\nshall he find faith on the earth?\"\n\n1 Peter 5:8\n\n\"Be sober,\n\nbe vigilant;\n\nbecause your adversary the devil,\n\nas a roaring lion,\n\nwalketh about,\n\nseeking whom he may devour.\"\n\nThe saints endure because they keep praying,\n\nkeep trusting,\n\nand keep obeying,\n\neven when the adversary presses hard.",
  "teachingPoints": [
    "The patience of the saints is endurance under pressure.\nIt is faithfulness when obedience becomes costly.",
    "The saints are God's faithful people.\nIn Daniel and Revelation, the saints are opposed, persecuted, and tested by hostile powers.",
    "Their strength is not earthly support.\nLike the widow in Luke 18, their hope is in God's intervention.",
    "Their endurance is connected with prayer.\nJesus taught His people to pray always and not lose heart.",
    "Their faithfulness is visible.\nThey keep God's commandments and hold to the faith of Jesus."
  ],
  "studyInsight": {
    "placement": "after_teaching",
    "title": "Study Insight",
    "body": "The Greek word translated \"patience\" is **hupomone**.\n\nIt means endurance,\n\nperseverance,\n\nsteadfastness,\n\nand the refusal to give up under pressure.\n\nThis is not weak patience.\n\nIt is not simply waiting quietly.\n\nIt is a stubborn faith that keeps holding on to God.\n\nThe PDF connects this with the persistent widow in Luke 18.\n\nShe had no earthly support.\n\nNo power.\n\nNo protection.\n\nBut she kept coming to the judge for justice.\n\nIn the same way,\n\nGod's faithful people will face pressure,\n\nbut they will not stop praying.\n\nThey will not stop trusting.\n\nThey will not stop obeying.\n\nThat is **hupomone**.\n\nHoly endurance."
  },
  "reflectPrompt": "How do you usually respond when obedience becomes hard?\n\nDo you pull back?\n\nCompromise?\n\nGrow tired?\n\nOr keep holding on?\n\nWhere do you need hupomone,\n\nsteady endurance,\n\nin your walk with God right now?",
  "lifeApplication": "This week, practice endurance in one small area.\n\nChoose one thing God has made clear to you.\n\nKeep doing it.\n\nEven if it feels slow.\n\nEven if no one notices.\n\nEven if it costs comfort.\n\nPray instead of quitting.\n\nObey instead of drifting.\n\nTrust instead of shrinking back.\n\nEndurance is built before the crisis,\n\nnot during it.",
  "prayer": "Lord,\n\nGive me the patience of the saints.\n\nTeach me to endure without bitterness.\n\nTeach me to pray without giving up.\n\nTeach me to obey when it costs something.\n\nStrengthen my faith in Jesus.\n\nWrite Your commandments in my heart.\n\nMake me steady,\n\nfaithful,\n\nand ready to stand with You.\n\nAmen."
}
$json_ta_l18$::jsonb
where slug = 'the-patience-of-the-saints';

update public.lessons
set reader_content = $json_ta_l19$
{
  "openingThought": "Revelation does not describe God's final people vaguely.\n\nIt gives clear marks of their character.\n\nThey have patience.\n\nThey have faith.\n\nAnd they keep the commandments of God.\n\nThat phrase matters.\n\nIn a world where many people separate love from obedience,\n\nRevelation brings them back together.\n\nObedience is not the way we earn God's love.\n\nIt is the way love becomes visible.\n\nGod's commandments are not chains.\n\nThey reveal His character.\n\nThey show what love looks like toward God and toward others.\n\nThe final issue is not whether people talk about God.\n\nIt is whether they trust Him enough to obey.",
  "scriptureRef": "Revelation 14:12",
  "scriptureQuote": "\"Here is the patience of the saints:\n\nhere are they that keep the commandments of God,\n\nand the faith of Jesus.\"",
  "scriptureSecondaryRef": "Revelation 12:17",
  "scriptureSecondaryQuote": "\"And the dragon was wroth with the woman,\n\nand went to make war with the remnant of her seed,\n\nwhich keep the commandments of God,\n\nand have the testimony of Jesus Christ.\"",
  "scriptureAfterSecondary": "Ecclesiastes 12:13\n\n\"Let us hear the conclusion of the whole matter:\n\nFear God,\n\nand keep his commandments:\n\nfor this is the whole duty of man.\"\n\nJohn 14:15\n\n\"If ye love me,\n\nkeep my commandments.\"\n\nRevelation's faithful people are not lawless.\n\nThey are not legalistic either.\n\nThey love Christ,\n\nand that love produces obedience.",
  "teachingPoints": [
    "God's commandments reveal His character.\nThey show what love, loyalty, worship, truth, purity, and justice look like.",
    "Obedience does not save us.\nOnly Christ saves. But saving faith does not produce rebellion against God.",
    "God writes His law in the heart.\nThe new covenant does not erase obedience. It moves obedience inward.",
    "Revelation identifies the faithful by commandment keeping.\nThis matters because the final conflict centers on worship and authority.",
    "True obedience is relational.\nIt flows from love, trust, and surrender, not from fear or pride."
  ],
  "studyInsight": {
    "placement": "after_teaching",
    "title": "Study Insight",
    "body": "The PDF source emphasizes that God's law must be more than posted externally.\n\nIt must be written internally.\n\nA commandment can be displayed on a wall\n\nand still be absent from the heart.\n\nGod's desire is deeper.\n\nHe says He will put His law in the mind\n\nand write it in the heart.\n\nThat means obedience is not forced from the outside.\n\nIt grows from a changed life within.\n\nThis is why force can never produce true righteousness.\n\nForce creates fear.\n\nForce creates hypocrisy.\n\nBut the Spirit creates love,\n\nconviction,\n\nand willing obedience.\n\nThe commandments of God are not merely rules to defend.\n\nThey are truth to be lived."
  },
  "reflectPrompt": "How do you think about God's commandments?\n\nAs restrictions?\n\nAs protection?\n\nAs a burden?\n\nAs a reflection of His love?\n\nIs there a command of God you agree with in theory,\n\nbut resist in practice?\n\nWhat would change if obedience became your response to love,\n\nnot your attempt to earn acceptance?",
  "lifeApplication": "This week, choose one command of God and look at it differently.\n\nDo not ask only,\n\nWhat does this forbid?\n\nAsk,\n\nWhat does this reveal about God?\n\nWhat does this protect?\n\nHow does this teach me to love?\n\nThen take one practical step of obedience.\n\nNot to earn salvation.\n\nBut because you trust the One who gave the command.",
  "prayer": "Lord,\n\nWrite Your law in my heart.\n\nTeach me to see Your commandments as good,\n\nwise,\n\nand loving.\n\nDeliver me from legalism.\n\nDeliver me from rebellion.\n\nGive me a heart that trusts You enough to obey.\n\nLet my life show love,\n\nnot only in words,\n\nbut in faithful action.\n\nAmen."
}
$json_ta_l19$::jsonb
where slug = 'the-commandments-of-god';

update public.lessons
set reader_content = $json_ta_l20$
{
  "openingThought": "Revelation 14:12 holds two truths together.\n\nThe commandments of God.\n\nAnd the faith of Jesus.\n\nIf we separate them,\n\nwe fall into trouble.\n\nCommandments without faith become legalism.\n\nFaith without obedience becomes empty profession.\n\nGod's final people are not described as people who choose one and reject the other.\n\nThey keep God's commandments,\n\nand they hold to the faith of Jesus.\n\nThis is the balance the final message restores.\n\nNot law without grace.\n\nNot grace without obedience.\n\nChrist at the center,\n\nand a life shaped by trust in Him.",
  "scriptureRef": "Revelation 14:12",
  "scriptureQuote": "\"Here is the patience of the saints:\n\nhere are they that keep the commandments of God,\n\nand the faith of Jesus.\"",
  "scriptureSecondaryRef": "Ephesians 2:8 to 10",
  "scriptureSecondaryQuote": "\"For by grace are ye saved through faith;\n\nand that not of yourselves:\n\nit is the gift of God:\n\nNot of works,\n\nlest any man should boast.\n\nFor we are his workmanship,\n\ncreated in Christ Jesus unto good works.\"",
  "scriptureAfterSecondary": "James 2:17\n\n\"Even so faith,\n\nif it hath not works,\n\nis dead,\n\nbeing alone.\"\n\nGalatians 2:20\n\n\"I live by the faith of the Son of God,\n\nwho loved me,\n\nand gave himself for me.\"\n\nFaith saves.\n\nFaith works.\n\nFaith follows.",
  "teachingPoints": [
    "We are saved by grace through faith.\nSalvation is God's gift, not our achievement.",
    "Good works are the fruit of salvation.\nThey do not purchase salvation, but they reveal that Christ is working in us.",
    "Legalism trusts obedience apart from Christ.\nIt may look religious, but it centers the self.",
    "Cheap grace claims faith while resisting obedience.\nIt wants Christ's pardon without Christ's lordship.",
    "The faith of Jesus keeps the balance.\nTrust in Christ leads to a life shaped by Christ."
  ],
  "studyInsight": {
    "placement": "after_teaching",
    "title": "Study Insight",
    "body": "The phrase \"**faith of Jesus**\" can be understood in two closely connected ways.\n\nIt can mean faith in Jesus.\n\nAnd it can mean the faithfulness of Jesus.\n\nBoth matter.\n\nWe trust in Jesus.\n\nAnd we receive the kind of faithful life that Jesus lived.\n\nThis keeps us out of both ditches.\n\nOne ditch says,\n\nMy obedience saves me.\n\nThe other ditch says,\n\nObedience does not matter.\n\nThe gospel says something better.\n\nChrist saves completely,\n\nand the faith that receives Him does not remain dead.\n\nIt becomes active.\n\nIt loves.\n\nIt obeys.\n\nIt endures."
  },
  "reflectPrompt": "Which ditch are you more tempted toward?\n\nTrying to prove yourself by obedience?\n\nOr using grace as a reason to avoid obedience?\n\nDo you trust Christ enough to rest in His salvation,\n\nand follow His commands?\n\nWhere does your faith need to become more active?",
  "lifeApplication": "This week, examine your faith honestly.\n\nChoose one area where you say you believe,\n\nbut your actions have not followed.\n\nDo not condemn yourself.\n\nBring it to Christ.\n\nAsk Him for faith that moves.\n\nFaith that obeys.\n\nFaith that loves.\n\nThen take one clear step.\n\nNot to earn God's favor,\n\nbut because you already have His grace.",
  "prayer": "Lord,\n\nKeep me from legalism.\n\nKeep me from empty profession.\n\nTeach me the faith of Jesus.\n\nHelp me rest in what Christ has done,\n\nand walk in what Christ commands.\n\nLet my obedience come from trust,\n\nnot pride.\n\nLet my faith be alive,\n\nnot merely spoken.\n\nMake me faithful through Jesus.\n\nAmen."
}
$json_ta_l20$::jsonb
where slug = 'the-faith-of-jesus';

update public.lessons
set reader_content = $json_ta_l21$
{
  "openingThought": "Revelation shows a dragon at war.\n\nBut not with everyone in the same way.\n\nHe is angry with a woman.\n\nThen with the remnant of her seed.\n\nThat phrase matters.\n\nThe remnant is not introduced as a random group.\n\nThey belong to the woman.\n\nThey are connected to Christ.\n\nThey keep God's commandments.\n\nThey have the testimony of Jesus.\n\nIn prophecy, the final conflict is not only about systems of false worship.\n\nIt is also about a people who remain faithful to Christ when pressure rises.\n\nThe remnant is not defined by pride.\n\nIt is defined by loyalty.",
  "scriptureRef": "Revelation 12:17",
  "scriptureQuote": "\"And the dragon was wroth with the woman,\n\nand went to make war with the remnant of her seed,\n\nwhich keep the commandments of God,\n\nand have the testimony of Jesus Christ.\"",
  "scriptureSecondaryRef": "Genesis 3:15",
  "scriptureSecondaryQuote": "\"And I will put enmity between thee and the woman,\n\nand between thy seed and her seed;\n\nit shall bruise thy head,\n\nand thou shalt bruise his heel.\"",
  "scriptureAfterSecondary": "Galatians 3:16\n\n\"Now to Abraham and his seed were the promises made.\n\nHe saith not,\n\nAnd to seeds,\n\nas of many;\n\nbut as of one,\n\nAnd to thy seed,\n\nwhich is Christ.\"\n\nGalatians 3:29\n\n\"And if ye be Christ's,\n\nthen are ye Abraham's seed,\n\nand heirs according to the promise.\"\n\nThe remnant belongs to Christ.\n\nThey are His people,\n\nformed by faith,\n\nidentified by loyalty,\n\nand marked by obedience.",
  "teachingPoints": [
    "The seed of the woman points ultimately to Christ.\nGenesis 3:15 begins the great conflict between Christ and the serpent.",
    "Those who belong to Christ become part of His people.\nGalatians says that if we are Christ's, we are Abraham's seed.",
    "The remnant is connected to the woman of Revelation 12.\nThis points to God's faithful people through history.",
    "The remnant keeps the commandments of God.\nTheir loyalty is visible in obedience.",
    "The remnant has the testimony of Jesus.\nTheir witness is centered on Christ and grounded in His Word."
  ],
  "studyInsight": {
    "placement": "after_teaching",
    "title": "Study Insight",
    "body": "The PDF source emphasizes that the final remnant must be understood spiritually and worldwide.\n\nBabylon is symbolic and worldwide.\n\nHer waters are peoples, multitudes, nations, and tongues.\n\nSo the people who stand against Babylon are also worldwide.\n\nThey are not gathered around one earthly territory.\n\nThey are gathered to Christ.\n\nThe issue is not ethnicity,\n\nlocation,\n\nor national identity.\n\nThe issue is union with Jesus.\n\nA true Israelite is not merely someone in a land,\n\nbut someone who belongs to the Lord.\n\nChrist is the Seed.\n\nThose who are Christ's are counted as His seed.\n\nThe remnant is the final visible expression of that loyalty."
  },
  "reflectPrompt": "What defines your spiritual identity?\n\nHeritage?\n\nReligious label?\n\nFamily background?\n\nOr belonging to Christ?\n\nIf someone looked at your life,\n\nwould they see loyalty to Jesus?\n\nWould they see obedience to God's commandments?\n\nWould they hear the testimony of Jesus?",
  "lifeApplication": "This week, think carefully about what it means to belong to Christ.\n\nDo not define faith only by what you oppose.\n\nDefine it by who you follow.\n\nAsk:\n\nAm I Christ's?\n\nDoes my life show it?\n\nDoes my obedience come from loyalty to Him?\n\nDoes my witness point people to Jesus?\n\nChoose one way to make your loyalty more visible this week.\n\nQuietly.\n\nFaithfully.\n\nWithout pride.",
  "prayer": "Lord,\n\nI want to belong fully to Christ.\n\nNot only in name,\n\nbut in life.\n\nMake me faithful when pressure rises.\n\nWrite Your commandments in my heart.\n\nGive me the testimony of Jesus.\n\nKeep me from pride,\n\nconfusion,\n\nand compromise.\n\nLet my life show that I am Yours.\n\nAmen."
}
$json_ta_l21$::jsonb
where slug = 'the-remnant-of-her-seed';

update public.lessons
set reader_content = $json_ta_l22$
{
  "openingThought": "Revelation asks a question.\n\nWho shall be able to stand?\n\nNot who can talk about prophecy.\n\nNot who can explain every symbol.\n\nNot who can win an argument.\n\nWho can stand?\n\nThat is the question behind the 144,000.\n\nThey are shown in connection with crisis,\n\nsealing,\n\nworship,\n\nand victory.\n\nThey stand when the world is divided.\n\nThey stand when false worship is enforced.\n\nThey stand because they belong fully to God.\n\nThe 144,000 are not introduced to feed speculation.\n\nThey are shown to reveal the kind of people God will have at the end.\n\nSealed.\n\nFaithful.\n\nVictorious.\n\nStanding with the Lamb.",
  "scriptureRef": "Revelation 7:3",
  "scriptureQuote": "\"Hurt not the earth,\n\nneither the sea,\n\nnor the trees,\n\ntill we have sealed the servants of our God in their foreheads.\"",
  "scriptureSecondaryRef": "Revelation 14:1",
  "scriptureSecondaryQuote": "\"And I looked,\n\nand, lo,\n\na Lamb stood on the mount Sion,\n\nand with him an hundred forty and four thousand,\n\nhaving his Father's name written in their foreheads.\"",
  "scriptureAfterSecondary": "Revelation 14:4 to 5\n\n\"These are they which follow the Lamb whithersoever he goeth.\n\nThese were redeemed from among men,\n\nbeing the firstfruits unto God and to the Lamb.\n\nAnd in their mouth was found no guile:\n\nfor they are without fault before the throne of God.\"\n\nRevelation 15:2 to 3\n\n\"And I saw as it were a sea of glass mingled with fire:\n\nand them that had gotten the victory over the beast,\n\nand over his image,\n\nand over his mark,\n\nand over the number of his name,\n\nstand on the sea of glass,\n\nhaving the harps of God.\"\n\nThe 144,000 are connected with sealing,\n\ncharacter,\n\nvictory,\n\nand worship.\n\nThey stand because they follow the Lamb.",
  "teachingPoints": [
    "The 144,000 are sealed for protection.\nRevelation 7 shows them sealed before the winds of final strife are released.",
    "They stand in contrast to those who receive the mark of the beast.\nOne group has the Father's name in the forehead. The other receives the beast's mark.",
    "Their character reflects loyalty to Christ.\nThey follow the Lamb wherever He goes.",
    "They overcome the beast, his image, his mark, and the number of his name.\nTheir victory is not political. It is spiritual.",
    "They accepted the three angels' messages.\nTheir song reflects fear of God, glory to His name, and worship of the Creator."
  ],
  "studyInsight": {
    "placement": "after_teaching",
    "title": "Study Insight",
    "body": "Revelation places the 144,000 in key moments.\n\nBefore the final winds are released,\n\nthey are sealed.\n\nAfter the final crisis,\n\nthey stand victorious.\n\nThat order matters.\n\nGod prepares His people before the crisis fully breaks.\n\nThe seal is placed in the forehead,\n\nthe place of conviction,\n\nunderstanding,\n\nand settled loyalty.\n\nThis is not surface religion.\n\nIt is truth settled deeply in the mind and heart.\n\nThe 144,000 are not strong because they are impressive.\n\nThey are strong because they are surrendered.\n\nThey follow the Lamb.\n\nThey do not follow the crowd.\n\nThey do not follow the beast.\n\nThey do not follow convenience.\n\nThey follow the Lamb."
  },
  "reflectPrompt": "When pressure rises,\n\nwhat usually guides your decisions?\n\nConviction?\n\nFear?\n\nConvenience?\n\nApproval?\n\nTruth?\n\nIs your faith being settled deeply,\n\nor only carried loosely?\n\nWhat would it mean for God's name,\n\nHis character,\n\nHis authority,\n\nand His truth\n\nto be written in your mind?",
  "lifeApplication": "This week, practice settled loyalty.\n\nChoose one truth God has already made clear to you.\n\nDo not delay it.\n\nDo not treat it casually.\n\nLive it.\n\nEven if it is small.\n\nEven if no one notices.\n\nAsk:\n\nAm I following the Lamb here?\n\nFaithfulness in the final crisis is formed through faithfulness now.",
  "prayer": "Lord,\n\nSeal my heart and mind with Your truth.\n\nTeach me to follow the Lamb wherever He leads.\n\nMake my loyalty deeper than emotion,\n\nstronger than pressure,\n\nand clearer than convenience.\n\nPrepare me to stand,\n\nnot in my own strength,\n\nbut in Christ.\n\nWrite Your character in me.\n\nAmen."
}
$json_ta_l22$::jsonb
where slug = 'the-144000';

update public.lessons
set reader_content = $json_ta_l23$
{
  "openingThought": "God has never left His people without guidance.\n\nBefore great moments in sacred history,\n\nHe sent light.\n\nBefore the flood,\n\nNoah warned the world.\n\nBefore the Exodus,\n\nMoses was raised up.\n\nBefore the first coming of Christ,\n\nJohn prepared the way.\n\nBefore the final crisis,\n\nRevelation says God's final people have the testimony of Jesus.\n\nThat phrase matters.\n\nIt is not a decorative detail.\n\nIt identifies a people who are guided by Christ's witness,\n\ngrounded in Scripture,\n\nand prepared for His return.\n\nThe testimony of Jesus does not replace the Bible.\n\nIt points back to the Bible,\n\nexalts Christ,\n\nand calls people to be ready.",
  "scriptureRef": "Revelation 12:17",
  "scriptureQuote": "\"And the dragon was wroth with the woman,\n\nand went to make war with the remnant of her seed,\n\nwhich keep the commandments of God,\n\nand have the testimony of Jesus Christ.\"",
  "scriptureSecondaryRef": "Revelation 19:10",
  "scriptureSecondaryQuote": "\"For the testimony of Jesus is the spirit of prophecy.\"",
  "scriptureAfterSecondary": "Revelation 22:8 to 9\n\n\"And I John saw these things,\n\nand heard them.\n\nAnd when I had heard and seen,\n\nI fell down to worship before the feet of the angel which shewed me these things.\n\nThen saith he unto me,\n\nSee thou do it not:\n\nfor I am thy fellowservant,\n\nand of thy brethren the prophets.\"\n\n1 Thessalonians 5:20 to 21\n\n\"Despise not prophesyings.\n\nProve all things;\n\nhold fast that which is good.\"\n\nThe testimony of Jesus is connected with the spirit of prophecy.\n\nBut Scripture also commands us to test everything.\n\nTruth is never afraid of examination.",
  "teachingPoints": [
    "The remnant has the testimony of Jesus.\nRevelation connects God's final people with Christ's prophetic witness.",
    "The testimony of Jesus is the spirit of prophecy.\nThis points to God's work of guiding His people through prophetic testimony.",
    "Prophetic guidance must never replace Scripture.\nThe Bible remains the supreme test of truth.",
    "God raises up messengers to prepare people for decisive moments.\nJohn the Baptist prepared people for Christ's first coming.",
    "True prophetic witness exalts Christ.\nIt does not draw attention to itself, but points people to the Word, repentance, obedience, and readiness."
  ],
  "studyInsight": {
    "placement": "after_teaching",
    "title": "Study Insight",
    "body": "John the Baptist helps us understand the pattern.\n\nHe was not the Christ.\n\nHe was not the center.\n\nHe was a voice preparing the way.\n\nHis work was to turn hearts back to God,\n\ncall people to repentance,\n\nand point them to the Lamb.\n\nThat is the purpose of true prophetic witness.\n\nIt prepares.\n\nIt restores.\n\nIt warns.\n\nIt points to Jesus.\n\nRevelation says the final remnant has the testimony of Jesus.\n\nThat means God's last-day people are not left without guidance.\n\nBut every claim to spiritual guidance must be tested.\n\nBy Scripture.\n\nBy Christ.\n\nBy its fruit.\n\nBy whether it leads people into truth,\n\nobedience,\n\nhumility,\n\nand readiness for the Lord."
  },
  "reflectPrompt": "How do you respond when God sends correction?\n\nDo you test it by Scripture,\n\nor reject it because it challenges you?\n\nAre you willing to receive guidance\n\nif it leads you closer to Christ?\n\nDo you want truth only when it comforts you,\n\nor also when it prepares you?",
  "lifeApplication": "This week, practice spiritual testing.\n\nDo not believe every claim.\n\nDo not reject every claim.\n\nTest carefully.\n\nAsk:\n\nDoes this agree with Scripture?\n\nDoes this exalt Christ?\n\nDoes this call me to obedience?\n\nDoes this produce humility?\n\nDoes this prepare me for His coming?\n\nHold fast what is good.\n\nLet go of what is false.",
  "prayer": "Lord,\n\nTeach me to recognize Your voice.\n\nKeep me from deception.\n\nKeep me from pride.\n\nGive me a heart that tests all things by Scripture.\n\nHelp me receive what leads me closer to Christ.\n\nPrepare me for Your coming,\n\nand make my life faithful to the testimony of Jesus.\n\nAmen."
}
$json_ta_l23$::jsonb
where slug = 'the-testimony-of-jesus';

update public.lessons
set reader_content = $json_ta_l24$
{
  "openingThought": "Revelation 14 does not end with endless delay.\n\nIt ends with harvest.\n\nMessages are given.\n\nChoices are made.\n\nCharacters are ripened.\n\nThen Christ comes.\n\nThe three angels' messages are not merely information to study.\n\nThey are messages that separate the world.\n\nOne group worships God and receives His seal.\n\nAnother worships the beast and receives his mark.\n\nOne group is pictured as harvest.\n\nThe other as grapes for the winepress.\n\nThis is not because God is careless.\n\nIt is because truth brings decision.\n\nAnd decision forms character.\n\nBy the time the harvest comes,\n\npeople have shown where their loyalty rests.",
  "scriptureRef": "Revelation 14:14 to 16",
  "scriptureQuote": "\"And I looked,\n\nand behold a white cloud,\n\nand upon the cloud one sat like unto the Son of man,\n\nhaving on his head a golden crown,\n\nand in his hand a sharp sickle.\n\nAnd another angel came out of the temple,\n\ncrying with a loud voice to him that sat on the cloud,\n\nThrust in thy sickle,\n\nand reap:\n\nfor the time is come for thee to reap;\n\nfor the harvest of the earth is ripe.\"",
  "scriptureSecondaryRef": "Revelation 14:18 to 19",
  "scriptureSecondaryQuote": "\"And another angel came out from the altar,\n\nwhich had power over fire;\n\nand cried with a loud cry to him that had the sharp sickle,\n\nsaying,\n\nThrust in thy sharp sickle,\n\nand gather the clusters of the vine of the earth;\n\nfor her grapes are fully ripe.\"",
  "scriptureAfterSecondary": "Matthew 13:30\n\n\"Let both grow together until the harvest:\n\nand in the time of harvest I will say to the reapers,\n\nGather ye together first the tares,\n\nand bind them in bundles to burn them:\n\nbut gather the wheat into my barn.\"\n\nThe harvest comes when character is ripe.\n\nThe question is not only what we believe,\n\nbut what we are becoming.",
  "teachingPoints": [
    "Revelation 14 moves from message to harvest.\nThe three angels' messages prepare the world for final decision.",
    "The world is divided into two groups.\nOne group receives God's seal. The other receives the mark of the beast.",
    "The righteous are pictured as harvest.\nThey are gathered to Christ.",
    "The wicked are pictured as grapes.\nThey are gathered to the winepress of God's wrath.",
    "Character ripens over time.\nRepeated choices either soften the heart toward God or harden it against Him."
  ],
  "studyInsight": {
    "placement": "after_teaching",
    "title": "Study Insight",
    "body": "The PDF source connects the final harvest with the latter rain.\n\nIn ancient Israel,\n\nthe latter rain helped ripen the grain before harvest.\n\nIn prophecy,\n\nthe Holy Spirit prepares God's people for the final harvest.\n\nThis is not emotional excitement only.\n\nIt is spiritual ripening.\n\nThe three angels' messages go to the world.\n\nThe Spirit gives power.\n\nTruth is made clear.\n\nPeople respond.\n\nSome are softened.\n\nOthers are hardened.\n\nLike Pharaoh before Moses,\n\nthe same message can lead to different outcomes depending on the heart.\n\nThe final harvest reveals what repeated choices have formed."
  },
  "reflectPrompt": "What direction is your character moving?\n\nToward surrender,\n\nor resistance?\n\nToward obedience,\n\nor delay?\n\nToward Christ,\n\nor self?\n\nAre your daily choices ripening you for the harvest of Christ,\n\nor for something else?",
  "lifeApplication": "This week, pay attention to repeated choices.\n\nNot just big decisions.\n\nSmall ones.\n\nWhat you watch.\n\nWhat you excuse.\n\nWhat you obey.\n\nWhat you ignore.\n\nWhat you return to.\n\nAsk:\n\nWhat is this forming in me?\n\nThen choose one pattern to surrender to Christ.\n\nCharacter is not formed in one moment.\n\nIt is formed by repeated response to truth.",
  "prayer": "Lord,\n\nPrepare me for Your harvest.\n\nLet Your Spirit ripen what is good in me.\n\nSoften what has become hard.\n\nRemove what resists You.\n\nTeach me to respond to truth now,\n\nnot later.\n\nMake me faithful,\n\nsettled,\n\nand ready for Your coming.\n\nAmen."
}
$json_ta_l24$::jsonb
where slug = 'the-harvest-of-the-earth-is-ripe';

update public.lessons
set reader_content = $json_ta_l25$
{
  "openingThought": "The final call is not only a warning.\n\nIt is an invitation.\n\nCome out of her, my people.\n\nThose words reveal something important about God.\n\nHe still has people in places of confusion.\n\nPeople who love Him.\n\nPeople who have not yet seen everything clearly.\n\nPeople who belong to Him,\n\nbut must now respond to His voice.\n\nGod does not call them out because He hates them.\n\nHe calls them out because they are His.\n\nBabylon falls because she rejects truth.\n\nBut God's people are called before the plagues fall.\n\nMercy speaks before judgment comes.\n\nThat is the heart of the final message.",
  "scriptureRef": "Revelation 18:1 to 4",
  "scriptureQuote": "\"And after these things I saw another angel come down from heaven,\n\nhaving great power;\n\nand the earth was lightened with his glory.\n\nAnd he cried mightily with a strong voice,\n\nsaying,\n\nBabylon the great is fallen,\n\nis fallen.\n\nAnd I heard another voice from heaven,\n\nsaying,\n\nCome out of her,\n\nmy people,\n\nthat ye be not partakers of her sins,\n\nand that ye receive not of her plagues.\"",
  "scriptureSecondaryRef": "John 10:27",
  "scriptureSecondaryQuote": "\"My sheep hear my voice,\n\nand I know them,\n\nand they follow me.\"",
  "scriptureAfterSecondary": "Revelation 14:12\n\n\"Here is the patience of the saints:\n\nhere are they that keep the commandments of God,\n\nand the faith of Jesus.\"\n\nThe final call is personal.\n\nGod speaks to His people.\n\nThe question is whether they will hear and follow.",
  "teachingPoints": [
    "God still has people in Babylon.\nThe call says \"my people,\" which shows His mercy and patience.",
    "Coming out means leaving confusion and false worship.\nIt is not merely physical movement. It is spiritual separation.",
    "Babylon falls because she rejects the first angel's message.\nShe rejects the everlasting gospel, true worship, judgment, and obedience.",
    "The final call comes before the plagues.\nGod warns before judgment falls.",
    "The faithful are identified by obedience and faith in Jesus.\nThey keep God's commandments and hold to the faith of Jesus."
  ],
  "studyInsight": {
    "placement": "after_teaching",
    "title": "Study Insight",
    "body": "The PDF source reviews the whole message here.\n\nThe everlasting gospel.\n\nFear God.\n\nGive Him glory.\n\nThe hour of judgment.\n\nWorship the Creator.\n\nBabylon's fall.\n\nThe warning against the beast,\n\nhis image,\n\nhis mark,\n\nand his number.\n\nThe patience of the saints.\n\nThe commandments of God.\n\nThe faith of Jesus.\n\nThe testimony of Jesus.\n\nAll of it leads to a call.\n\nCome out.\n\nThis is not only about leaving error.\n\nIt is about coming fully to Christ.\n\nThe final message does not end with information.\n\nIt ends with decision.\n\nWhere will you stand?\n\nWhose voice will you follow?\n\nWhat will you leave behind because Jesus is calling?"
  },
  "reflectPrompt": "Where might God be calling you out of confusion?\n\nA belief?\n\nA habit?\n\nA system?\n\nA compromise?\n\nA fear?\n\nA delay?\n\nDo you hear Christ's voice clearly,\n\nor have other voices become louder?\n\nWhat would obedience look like now?\n\nNot someday.\n\nNow.",
  "lifeApplication": "This week, make the call personal.\n\nDo not only study Babylon as a symbol.\n\nAsk what God is calling you to leave.\n\nThen take one step.\n\nA clear step.\n\nA costly step if needed.\n\nA faithful step.\n\nIt may be a belief you must test.\n\nA practice you must surrender.\n\nA habit you must break.\n\nA truth you must obey.\n\nDo not wait until the call feels easy.\n\nFollow the voice of Christ.",
  "prayer": "Lord,\n\nHelp me hear Your voice.\n\nCall me out of confusion.\n\nCall me out of compromise.\n\nCall me out of fear.\n\nLead me fully to Christ.\n\nGive me courage to obey what You make clear.\n\nKeep me among those who have the patience of the saints,\n\nwho keep Your commandments,\n\nand hold to the faith of Jesus.\n\nAmen.",
  "seriesCompleteScreen": {
    "title": "Study complete",
    "message": "You have completed The Three Angels' Messages.",
    "primaryCta": {
      "label": "Review study",
      "href": "/study-library/three-angels-messages"
    },
    "secondaryCta": {
      "label": "Explore more prophecy studies",
      "href": "/paths/prophecy"
    }
  }
}
$json_ta_l25$::jsonb
where slug = 'come-out-of-her-my-people';

commit;
