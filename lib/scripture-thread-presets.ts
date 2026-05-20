import type { ScriptureThreadPreset } from '@/lib/scripture-thread-blocks'

/**
 * Scripture Thread presets for lessons that do not yet define a thread in reader content.
 * Keys must match lesson slugs in `lib/lesson-content.ts` and series libraries.
 */
export const SCRIPTURE_THREAD_PRESETS: Record<string, ScriptureThreadPreset> = {
  // —— Death, Resurrection, and the Hope of Life ——
  'the-right-to-the-tree-of-life': {
    title: 'Life From God',
    question: 'Where does Scripture say eternal life comes from?',
    references: ['Genesis 2:7', 'Genesis 2:9', 'Genesis 3:22 to 24', 'Romans 6:23'],
    takeaway:
      'Human life begins as a gift from God. Eternal life is not something we own by nature; it is restored only through Christ.',
  },
  'rachels-departing-soul': {
    title: "Rachel's Death",
    question: 'What happens to a person at death according to Genesis?',
    references: ['Genesis 35:18', 'Genesis 2:7', 'Ecclesiastes 9:5', 'John 11:11 to 14'],
    takeaway:
      'When Rachel died, her life ended. Scripture describes death as the cessation of life, not conscious existence apart from the body.',
  },
  'a-thief-and-a-witch': {
    title: 'Paradise and the Medium',
    question: 'How should Luke 23:43 be read with the rest of Scripture?',
    references: [
      'Luke 23:42 to 43',
      'John 20:17',
      '1 Samuel 28:13 to 14',
      'Deuteronomy 18:10 to 12',
    ],
    takeaway:
      'Jesus had not yet ascended to the Father after the resurrection. The thief received a secure promise; difficult texts must be read beside clear Scripture, not through forbidden practices.',
  },
  'absent-from-the-body': {
    title: 'Absent From the Body',
    question: "What was Paul's hope when he spoke of being absent from the body?",
    references: [
      '2 Corinthians 5:1',
      '2 Corinthians 5:4 to 8',
      '1 Corinthians 15:52 to 54',
      '1 Thessalonians 4:16 to 17',
    ],
    takeaway:
      "Paul's hope was resurrection and being clothed with immortality at Christ's return, not a disembodied conscious state immediately at death.",
  },
  'pauls-desire-to-depart': {
    title: 'To Depart and Be With Christ',
    question: 'What did Paul mean when he desired to depart?',
    references: [
      'Philippians 1:21 to 23',
      '2 Timothy 4:6 to 8',
      '2 Corinthians 5:1 to 8',
      'Revelation 14:13',
    ],
    takeaway:
      'Paul compared death to sleep and looked forward to the crown at Christ\'s appearing. To be with Christ is the hope of resurrection, not conscious life in the grave.',
  },
  'the-souls-under-the-altar': {
    title: 'Souls Under the Altar',
    question: 'How should Revelation 6:9 to 11 be understood?',
    references: [
      'Revelation 6:9 to 11',
      'Genesis 4:10',
      'Hebrews 11:39 to 40',
      'Revelation 20:4',
    ],
    takeaway:
      'Like Abel\'s blood crying from the ground, the martyrs\' cry uses sanctuary symbolism. The dead await vindication and resurrection, not conscious speech in heaven.',
  },
  'the-spirits-of-just-men': {
    title: 'Spirits of Just Men',
    question: 'What is Hebrews 12 speaking about?',
    references: [
      'Hebrews 12:22 to 24',
      'Hebrews 11:39 to 40',
      'Revelation 6:11',
      'John 5:28 to 29',
    ],
    takeaway:
      'The writer points to God\'s heavenly administration and the hope of resurrection. The faithful of old still await the promise, not conscious life apart from the body.',
  },
  'preaching-to-the-spirits-in-prison': {
    title: 'Spirits in Prison',
    question: 'When did Christ preach, and to whom?',
    references: ['1 Peter 3:18 to 20', '2 Peter 2:5', 'Genesis 6:3', '1 Peter 1:10 to 12'],
    takeaway:
      'Peter connects the preaching to the days of Noah while the ark was being prepared. God warned that generation through the Spirit, not conscious dead spirits after the cross.',
  },
  'three-doctrines-that-belong-together': {
    title: 'Death, Sleep, and Resurrection',
    question: 'How do creation, death, and resurrection fit together?',
    references: [
      'Genesis 2:7',
      'Ecclesiastes 12:7',
      '1 Thessalonians 4:16 to 17',
      '1 Corinthians 15:51 to 52',
    ],
    takeaway:
      'Life comes from God, death returns the person to unconscious rest, and Christ raises the dead at His return. These truths belong together.',
  },
  'the-dead-who-stand-before-god': {
    title: 'The Dead Before God',
    question: 'When do the dead stand before God according to Revelation?',
    references: [
      'Revelation 20:11 to 12',
      'Revelation 20:13 to 15',
      'Ecclesiastes 9:5',
      'Daniel 12:2',
    ],
    takeaway:
      'The dead remain in the graves until the resurrection and judgment. Standing before God is a future event, not an immediate experience at death.',
  },
  'the-resurrection-and-the-life': {
    title: 'Resurrection and the Life',
    question: 'What did Jesus mean when He called death sleep?',
    references: [
      'John 11:11 to 14',
      'John 11:23 to 26',
      'John 5:28 to 29',
      '1 Corinthians 15:20',
    ],
    takeaway:
      'Jesus describes the first death as sleep and points hope to the resurrection when He calls the dead from their graves.',
  },
  'the-keys-of-hades': {
    title: 'Keys of Death and Hades',
    question: 'Who holds power over death?',
    references: ['Psalm 16:10', 'Acts 2:27 to 31', 'Revelation 1:18', '1 Corinthians 15:55'],
    takeaway:
      'Christ died, was raised, and holds the keys of death and Hades. The hope of the redeemed is resurrection through Him.',
  },
  'the-rich-man-and-lazarus': {
    title: 'Rich Man and Lazarus',
    question: 'How should Luke 16 be read in light of the rest of Scripture?',
    references: [
      'Luke 16:19 to 21',
      'Luke 16:29 to 31',
      'Matthew 22:29 to 32',
      'John 11:43 to 44',
    ],
    takeaway:
      'Jesus used a parable to confront the Pharisees. Those who reject Moses and the prophets will not be persuaded even by resurrection.',
  },
  'all-live-to-him': {
    title: 'All Live to Him',
    question: 'What was Jesus proving to the Sadducees?',
    references: ['Luke 20:37 to 38', 'Matthew 22:29 to 32', 'Exodus 3:6', '1 Corinthians 15:22'],
    takeaway:
      'Jesus answered Sadducees who denied resurrection. God\'s covenant with the patriarchs guarantees they will rise, not that they are consciously alive now.',
  },
  'the-worm-and-the-fire': {
    title: 'Worm and Fire',
    question: 'What does Scripture say about final punishment?',
    references: ['Matthew 25:41', 'Matthew 25:46', 'Malachi 4:1 to 3', '2 Peter 2:6'],
    takeaway:
      'Unquenchable fire consumes until nothing remains. Scripture describes destruction, ashes, and perishing, not endless conscious torment in the same body.',
  },
  'immortality-or-resurrection': {
    title: 'Immortality or Resurrection',
    question: 'Does the Bible teach natural immortality or resurrection?',
    references: [
      '1 Corinthians 15:16 to 18',
      '1 Corinthians 15:20 to 22',
      '1 Timothy 6:15 to 16',
      'John 3:16',
    ],
    takeaway:
      'Only God has immortality in Himself. Eternal life for believers is the gift of resurrection in Christ, not an immortal soul that never dies.',
  },
  'the-first-lie': {
    title: 'The First Lie',
    question: 'What did God say about death, and what did the serpent say?',
    references: ['Genesis 2:16 to 17', 'Genesis 3:4', 'Romans 6:23', 'Revelation 21:8'],
    takeaway:
      'God said sin brings death. The serpent\'s lie, "You will not surely die," still shapes false views of death and the afterlife.',
  },
  'spirits-of-devils': {
    title: 'Spirits of Devils',
    question: 'How does Scripture warn against end-time deception?',
    references: [
      'Revelation 16:13 to 14',
      'Matthew 24:23 to 25',
      '2 Corinthians 11:14',
      'Deuteronomy 18:10 to 12',
    ],
    takeaway:
      'Deceptive spirits work through signs and false claims. God forbids seeking truth from the dead because only His Word is safe ground.',
  },

  // —— God Is Love (lessons without threads) ——
  'the-logic-of-love': {
    title: 'Love Speaks',
    question: 'Why does a God of love reveal Himself in Scripture?',
    references: ['1 John 4:8', 'John 15:15', '2 Timothy 3:16', 'Hebrews 1:1 to 2'],
    takeaway:
      'Love seeks to be known. God speaks through Scripture and supremely through Christ so we can trust His heart.',
  },
  'a-god-who-speaks': {
    title: 'A God Who Speaks',
    question: 'How has God made Himself known?',
    references: ['Hebrews 1:1 to 2', 'Amos 3:7', '2 Peter 1:21', 'John 1:14'],
    takeaway:
      'God spoke through prophets and fully revealed Himself in Jesus. Scripture is trustworthy because God inspired it to make Himself known.',
  },

  // —— The Bible: God's Living Word ——
  'a-book-unlike-any-other': {
    title: 'One Message, Many Writers',
    question: 'What makes the Bible different from an ordinary library?',
    references: ['John 1:1', '2 Timothy 3:16', 'Luke 24:27', 'Isaiah 40:8'],
    takeaway:
      'Many authors across centuries carry one consistent message pointing to God and His work in Christ.',
  },
  'how-the-bible-came-to-us': {
    title: 'How We Received Scripture',
    question: 'How did the Bible come to us?',
    references: ['2 Peter 1:21', 'Deuteronomy 31:24 to 26', 'Luke 1:1 to 4', 'Revelation 22:18 to 19'],
    takeaway:
      'God moved holy men to write. Communities preserved, collected, and translated Scripture under His providence.',
  },
  'can-the-bible-be-trusted': {
    title: 'Can We Trust the Bible?',
    question: 'Why can we trust what Scripture says?',
    references: ['Psalm 119:160', 'John 17:17', '2 Timothy 3:16', 'Matthew 5:18'],
    takeaway:
      'Jesus treated Scripture as authoritative. Its unity, fulfillment, and preservation support confidence in God\'s Word.',
  },
  'how-to-read-the-bible': {
    title: 'How to Read Well',
    question: 'What habits help us read Scripture faithfully?',
    references: ['Psalm 119:18', 'James 1:22', 'Acts 17:11', 'Luke 24:45'],
    takeaway:
      'Pray for understanding, read in context, compare Scripture with Scripture, and obey what God shows you.',
  },
  'the-bibles-central-theme': {
    title: 'The Central Theme',
    question: 'What story runs through the whole Bible?',
    references: ['Luke 24:27', 'John 5:39', 'Genesis 3:15', 'Revelation 22:20'],
    takeaway:
      'From Eden to Revelation, Scripture points to God\'s plan to rescue humanity through the promised Redeemer.',
  },
  'the-bible-as-a-living-word': {
    title: 'A Living Word',
    question: 'How does God\'s Word act in the believer\'s life?',
    references: ['Hebrews 4:12', 'John 6:63', 'Psalm 119:105', '1 Peter 1:23'],
    takeaway:
      'Scripture is not dead information. God uses His Word to convict, guide, and give new life through the Spirit.',
  },
  'your-response': {
    title: 'Your Response',
    question: 'How should we respond to God\'s Word?',
    references: ['James 1:22', 'John 15:14', 'Romans 10:17', 'Revelation 1:3'],
    takeaway:
      'Hearing must lead to trust and obedience. God invites us to know Him and walk with Him through what He has spoken.',
  },

  // —— The Three Angels' Messages (sample threads for lessons without chains) ——
  'why-revelation-14-matters': {
    title: 'God\'s Final Message',
    question: 'Why does Revelation 14 matter before the end?',
    references: [
      'Revelation 14:6 to 7',
      'Revelation 14:8',
      'Revelation 14:9 to 12',
      'Matthew 24:14',
    ],
    takeaway:
      'Before the harvest, God sends a worldwide message of gospel, judgment, and true worship so people can choose Him.',
  },
  'the-everlasting-gospel': {
    title: 'The Everlasting Gospel',
    question: 'What is the first angel\'s message?',
    references: ['Revelation 14:6 to 7', 'Romans 1:16', 'Galatians 3:8', 'John 3:16'],
    takeaway:
      'The everlasting gospel calls every nation to fear God, give Him glory, and worship the Creator as Judge and Savior.',
  },
  'what-it-means-to-fear-god': {
    title: 'Fear God',
    question: 'What does it mean to fear God in Revelation 14?',
    references: ['Revelation 14:7', 'Proverbs 9:10', 'Ecclesiastes 12:13', 'Hebrews 12:28 to 29'],
    takeaway:
      'Biblical fear is reverent trust, not terror. It turns the heart from sin toward worship and obedience.',
  },
  'how-to-glorify-god': {
    title: 'Give Glory to God',
    question: 'How do we glorify God according to Scripture?',
    references: ['Revelation 14:7', '1 Corinthians 10:31', 'Matthew 5:16', 'John 15:8'],
    takeaway:
      'We glorify God by honoring His character in worship, witness, and daily obedience.',
  },
  'the-hour-of-gods-judgment': {
    title: 'The Hour of Judgment',
    question: 'What does Scripture say about God\'s judgment hour?',
    references: ['Revelation 14:7', 'Daniel 7:9 to 10', 'Acts 17:31', 'Romans 2:16'],
    takeaway:
      'God\'s judgment is real and near. The gospel announces both mercy for the repentant and accountability for sin.',
  },
  'the-foundation-of-true-worship': {
    title: 'Worship the Creator',
    question: 'Whom does Revelation 14 call us to worship?',
    references: ['Revelation 14:7', 'Exodus 20:11', 'John 4:23 to 24', 'Isaiah 42:8'],
    takeaway:
      'True worship belongs to the Creator. The Sabbath memorial points to God as Maker and distinguishes His worship from counterfeit religion.',
  },
  'mystery-babylon-the-great': {
    title: 'Babylon Is Fallen',
    question: 'What is the second angel\'s message?',
    references: ['Revelation 14:8', 'Revelation 17:5', 'Jeremiah 51:6 to 8', '2 Corinthians 6:17'],
    takeaway:
      'Spiritual Babylon is a fallen religious system that has misled nations. God calls His people to come out and remain loyal to Him.',
  },
  'babylons-abominable-wine': {
    title: 'The Wine of Babylon',
    question: 'What does Babylon\'s wine represent?',
    references: ['Revelation 14:8', 'Revelation 17:2', 'Revelation 18:3', 'Isaiah 51:17'],
    takeaway:
      'Babylon\'s wine is false teaching that intoxicates nations with error and turns hearts from God\'s truth.',
  },
  'babylons-filthy-fornication': {
    title: 'Spiritual Fornication',
    question: 'How does Scripture describe Babylon\'s unfaithfulness?',
    references: ['Revelation 14:8', 'Revelation 17:2', 'James 4:4', 'Hosea 2:13'],
    takeaway:
      'Spiritual fornication is unfaithfulness to God through compromise with worldly and false religious powers.',
  },
  'revelations-sea-beast': {
    title: 'The Sea Beast',
    question: 'What does prophecy reveal about the sea beast?',
    references: ['Revelation 13:1 to 2', 'Daniel 7:3 to 8', 'Daniel 7:23 to 25', 'Revelation 13:5 to 7'],
    takeaway:
      'Daniel and Revelation use beasts to symbolize kingdoms. The sea beast rises from history with blasphemy and persecution against God\'s people.',
  },
  'revelations-land-beast': {
    title: 'The Land Beast',
    question: 'How does the land beast support the sea beast?',
    references: ['Revelation 13:11 to 14', 'Revelation 13:15 to 17', 'Matthew 7:15', '2 Thessalonians 2:9 to 11'],
    takeaway:
      'The land beast appears gentle but enforces false worship and economic pressure on those who refuse the sea beast\'s authority.',
  },
  'the-image-of-the-beast': {
    title: 'The Image of the Beast',
    question: 'What is the image of the beast?',
    references: ['Revelation 13:14 to 15', 'Exodus 20:4 to 5', 'Daniel 3:5 to 6', 'Acts 5:29'],
    takeaway:
      'The image is an enforced system of worship copied from the beast. Loyalty to God may conflict with human law.',
  },
  '666-the-number-of-the-beast': {
    title: 'The Number 666',
    question: 'What does the number of the beast signify?',
    references: ['Revelation 13:18', 'Revelation 15:2', '1 Kings 10:14', 'Daniel 3:1'],
    takeaway:
      'Six repeated falls short of seven, the number of completeness. The mark points to human authority set against God\'s law.',
  },
  'the-mark-of-the-beast-part-1': {
    title: 'The Mark of the Beast',
    question: 'What is at stake in the mark of the beast?',
    references: ['Revelation 13:16 to 17', 'Revelation 14:9 to 11', 'Exodus 13:9', 'Deuteronomy 6:8'],
    takeaway:
      'The mark concerns worship and loyalty. Scripture contrasts the beast\'s mark with allegiance to the Creator.',
  },
  'the-mark-of-the-beast-part-2': {
    title: 'Worship and Loyalty',
    question: 'How does the third angel\'s message warn against the mark?',
    references: ['Revelation 14:9 to 12', 'Revelation 13:8', 'Exodus 20:8 to 11', 'Revelation 12:17'],
    takeaway:
      'Those who receive the mark worship the beast. God\'s people keep His commandments and the faith of Jesus.',
  },
  'the-wine-of-gods-wrath': {
    title: 'The Cup of Wrath',
    question: 'What does the third angel say about God\'s wrath?',
    references: ['Revelation 14:10', 'Revelation 16:19', 'Romans 2:5 to 8', 'Psalm 75:8'],
    takeaway:
      'God\'s wrath is His just response to unrepentant sin. The warning is severe because the decision is final.',
  },
  'the-smoke-of-babylons-torment': {
    title: 'Babylon\'s Torment',
    question: 'What happens to Babylon in Revelation 14?',
    references: ['Revelation 14:10 to 11', 'Revelation 18:2 to 8', 'Isaiah 34:9 to 10', 'Revelation 19:3'],
    takeaway:
      'Babylon\'s judgment is complete and irreversible. The smoke of her torment warns the world while the faithful persevere.',
  },
  'the-commandments-of-god': {
    title: 'Commandments of God',
    question: 'What identifies God\'s people in Revelation 14?',
    references: ['Revelation 14:12', 'Exodus 20:3 to 17', '1 John 5:3', 'John 14:15'],
    takeaway:
      'The saints keep the commandments of God through faith in Jesus. Obedience flows from grace, not from earning salvation.',
  },
  'the-faith-of-jesus': {
    title: 'Faith of Jesus',
    question: 'What is the faith of Jesus?',
    references: ['Revelation 14:12', 'Galatians 2:20', 'Hebrews 12:2', 'Romans 3:22'],
    takeaway:
      'Believers live by Christ\'s faithfulness and follow His example of trust and obedience to the Father.',
  },
  'the-remnant-of-her-seed': {
    title: 'The Remnant',
    question: 'Who is the remnant in Revelation 12?',
    references: ['Revelation 12:17', 'Revelation 14:12', 'Micah 2:12', 'Romans 9:27'],
    takeaway:
      'The remnant keeps God\'s commandments and holds to Jesus amid persecution. They remain loyal when the world compromises.',
  },
  'the-144000': {
    title: 'The 144,000',
    question: 'Who are the 144,000 in Revelation?',
    references: ['Revelation 7:4', 'Revelation 14:1 to 5', 'Revelation 7:9', 'Galatians 3:28 to 29'],
    takeaway:
      'The 144,000 represent God\'s sealed people standing with the Lamb. Their loyalty is marked by purity, truth, and endurance.',
  },
  'the-testimony-of-jesus': {
    title: 'Testimony of Jesus',
    question: 'What is the testimony of Jesus?',
    references: ['Revelation 12:17', 'Revelation 19:10', 'John 5:39', 'Acts 1:8'],
    takeaway:
      'The testimony of Jesus is the Spirit of prophecy pointing to Christ. God\'s people bear witness to Him to the end.',
  },
  'the-harvest-of-the-earth-is-ripe': {
    title: 'The Harvest',
    question: 'What does the harvest in Revelation 14 mean?',
    references: ['Revelation 14:14 to 16', 'Matthew 13:39 to 43', 'Joel 3:13', 'Revelation 22:12'],
    takeaway:
      'The harvest separates those who chose God from those who chose rebellion. History moves toward Christ\'s return.',
  },
  'come-out-of-her-my-people': {
    title: 'Come Out of Her',
    question: 'Why does God call His people out of Babylon?',
    references: ['Revelation 18:4', '2 Corinthians 6:17', 'Isaiah 52:11', 'Revelation 14:8'],
    takeaway:
      'God calls believers out of false religion and compromise so they may worship Him in spirit and truth.',
  },
  // —— Did God Create Evil? ——
  'the-mystery-that-began-in-heaven': {
    title: 'Evil Did Not Begin With God\u2019s Design',
    question: 'If God is good, where did evil come from?',
    references: [
      { reference: 'Genesis 1:31', shortNote: 'God\u2019s creation began good. Evil was not part of the original design.' },
      {
        reference: 'Ezekiel 28:14 to 15',
        shortNote:
          'Lucifer was created, not eternal. He was once perfect, honored, and close to God\u2019s throne.',
      },
      { reference: 'Isaiah 14:12', shortNote: 'Lucifer\u2019s fall was from light into rebellion.' },
      { reference: 'Luke 10:18', shortNote: 'Jesus confirms Satan\u2019s fall was real.' },
      { reference: 'James 1:13', shortNote: 'God is not the source of evil and does not tempt His creation into sin.' },
      { reference: '1 John 1:5', shortNote: 'There is no darkness in God\u2019s character.' },
    ],
    takeaway:
      'God did not create the devil. He created Lucifer perfect. Iniquity was found in a free being who turned from worship to self-exaltation.',
  },
  'the-rise-of-self': {
    title: 'The Rise of Self',
    question: 'How did pride turn worship away from God?',
    references: [
      'Isaiah 14:12 to 14',
      'Ezekiel 28:17',
      'Proverbs 16:18',
      'Matthew 4:8 to 10',
      'Romans 1:21 to 25',
    ],
    takeaway:
      'Self-exaltation shifts worship from the Creator toward self and control over others.',
  },
  'the-lie-in-the-garden': {
    title: 'The Lie in Eden',
    question: 'How did Satan deceive Adam and Eve?',
    references: [
      'Genesis 2:16 to 17',
      'Genesis 3:1 to 6',
      'John 8:44',
      '2 Corinthians 11:3',
      'Romans 5:12',
      '1 John 3:8',
    ],
    takeaway:
      'Satan questions God\'s word, denies His warning, and misrepresents His character so sin enters the world.',
  },
  'the-war-behind-the-world': {
    title: 'War Behind History',
    question: 'What is the great controversy, and what are Satan\'s methods?',
    references: [
      'Revelation 12:7 to 12',
      'Job 1:6 to 11',
      'Matthew 4:5 to 7',
      'John 10:10',
      '2 Thessalonians 2:9 to 10',
      'Revelation 13:13 to 14',
    ],
    takeaway:
      'Behind human history is a cosmic conflict. Satan deceives, accuses, misuses Scripture, and works false signs.',
  },
  'the-end-of-evil-and-the-face-of-the-father': {
    title: 'The End of Evil',
    question: 'How does Christ reveal the Father and end sin forever?',
    references: [
      'John 14:8 to 9',
      'John 3:16 to 17',
      'Romans 5:8',
      'Hebrews 2:14',
      'Colossians 2:15',
      'Revelation 20:10',
      'Revelation 21:1 to 5',
      'Nahum 1:9',
    ],
    takeaway:
      'God\'s patience answers rebellion through the cross. Sin and the deceiver are destroyed; God makes all things new.',
  },
  // —— Why Does God Allow Suffering? ——
  'the-question-we-cannot-ignore': {
    title: 'Suffering Was Not God\u2019s Original Design',
    question: 'If God is good, why is there so much suffering?',
    references: [
      'Genesis 1:31',
      'Genesis 3:6 to 7',
      'Genesis 3:16 to 19',
      'Romans 5:12',
      'James 1:13',
      'James 1:17',
      '1 John 3:4',
      'Romans 6:23',
      '1 John 1:5',
    ],
    takeaway:
      'God created good. Sin brought death. God is light, gives good gifts, and is not the author of evil.',
  },
  'why-god-did-not-end-it-immediately': {
    title: 'God\u2019s Delay Is Not Indifference',
    question: 'If God has the power to stop evil, why does He let it continue?',
    references: [
      'Revelation 12:7 to 9',
      'Ezekiel 28:17',
      'Isaiah 14:13 to 14',
      'Matthew 13:24 to 30',
      'Matthew 13:36 to 43',
      '1 Corinthians 4:9',
      '1 John 4:8',
      '1 John 4:18',
      'Nahum 1:9',
    ],
    takeaway:
      'God\u2019s patience exposes evil and reveals His love so affliction will never rise again.',
  },
  'the-god-who-entered-pain': {
    title: 'Christ Came Near to Human Suffering',
    question: 'If God cares, why does He seem distant when people suffer?',
    references: [
      'Isaiah 53:3',
      'Isaiah 53:4 to 5',
      'John 11:35',
      'Matthew 27:46',
      'Romans 5:8',
      'Hebrews 2:14 to 18',
      'Hebrews 4:15 to 16',
      'John 14:9',
    ],
    takeaway:
      'In Jesus, God came near to suffering, bore grief, and revealed the Father\u2019s compassionate heart.',
  },
  'the-furnace-that-refines': {
    title: 'God Can Refine What Suffering Reveals',
    question: 'Why would a loving God allow His people to go through trials?',
    references: [
      '1 Peter 1:6 to 7',
      'James 1:2 to 4',
      'Romans 5:3 to 5',
      'Hebrews 12:5 to 11',
      'Malachi 3:2 to 3',
      'Job 23:10',
      '2 Corinthians 12:7 to 10',
      'Psalm 139:23 to 24',
    ],
    takeaway:
      'God can refine faith through trials without being the author of evil or delighting in pain.',
  },
  'until-there-is-no-more-pain': {
    title: 'From Groaning to Glory',
    question: 'Will suffering ever actually end?',
    references: [
      'Romans 8:22 to 23',
      'John 11:11 to 14',
      '1 Thessalonians 4:13 to 18',
      '1 Corinthians 15:51 to 55',
      '2 Corinthians 1:3 to 4',
      'Matthew 25:35 to 40',
      'Revelation 20:10',
      'Revelation 21:1 to 5',
    ],
    takeaway:
      'Suffering is real, but it is not final. God will end pain, raise His people, judge evil, and make all things new.',
  },
}
