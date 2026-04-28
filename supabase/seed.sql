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
  );


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
