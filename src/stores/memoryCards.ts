import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export interface MemoryCard {
  id: string
  reference: string
  text: string
  category: string
  difficulty: 'easy' | 'medium' | 'hard'
  theme: string
  studyId?: string
  lessonId?: string
  isMemorized: boolean
  reviewCount: number
  lastReviewed?: string
  confidence: 1 | 2 | 3 | 4 | 5 // 1 = need practice, 5 = mastered
  dateAdded: string
}

export interface MemoryDeck {
  id: string
  title: string
  description: string
  category: string
  cardIds: string[]
  isDefault: boolean
  color: string
  icon: string
}

export interface StudySession {
  id: string
  date: string
  cardsStudied: string[]
  correctAnswers: number
  totalCards: number
  duration: number // in minutes
}

export const useMemoryCardsStore = defineStore('memoryCards', () => {
  const cards = ref<Record<string, MemoryCard>>({})
  const decks = ref<Record<string, MemoryDeck>>({})
  const studySessions = ref<StudySession[]>([])

  // Initialize with comprehensive scripture memory collection
  const initializeDefaultCards = () => {
    const defaultCards: MemoryCard[] = [
      // SALVATION & GOD'S LOVE
      {
        id: 'john-3-16',
        reference: 'John 3:16',
        text: 'For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.',
        category: 'Salvation',
        difficulty: 'medium',
        theme: 'God\'s Love',
        isMemorized: false,
        reviewCount: 0,
        confidence: 1,
        dateAdded: new Date().toISOString()
      },
      {
        id: 'romans-6-23',
        reference: 'Romans 6:23',
        text: 'For the wages of sin is death; but the gift of God is eternal life through Jesus Christ our Lord.',
        category: 'Salvation',
        difficulty: 'easy',
        theme: 'Eternal Life',
        isMemorized: false,
        reviewCount: 0,
        confidence: 1,
        dateAdded: new Date().toISOString()
      },
      {
        id: 'ephesians-2-8-9',
        reference: 'Ephesians 2:8-9',
        text: 'For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: Not of works, lest any man should boast.',
        category: 'Salvation',
        difficulty: 'medium',
        theme: 'Grace',
        isMemorized: false,
        reviewCount: 0,
        confidence: 1,
        dateAdded: new Date().toISOString()
      },
      {
        id: 'romans-10-9',
        reference: 'Romans 10:9',
        text: 'That if thou shalt confess with thy mouth the Lord Jesus, and shalt believe in thine heart that God hath raised him from the dead, thou shalt be saved.',
        category: 'Salvation',
        difficulty: 'medium',
        theme: 'Confession',
        isMemorized: false,
        reviewCount: 0,
        confidence: 1,
        dateAdded: new Date().toISOString()
      },
      {
        id: '1john-4-8',
        reference: '1 John 4:8',
        text: 'He that loveth not knoweth not God; for God is love.',
        category: 'Salvation',
        difficulty: 'easy',
        theme: 'God\'s Love',
        isMemorized: false,
        reviewCount: 0,
        confidence: 1,
        dateAdded: new Date().toISOString()
      },

      // COMFORT & PEACE
      {
        id: 'psalm-23-1',
        reference: 'Psalm 23:1',
        text: 'The LORD is my shepherd; I shall not want.',
        category: 'Comfort',
        difficulty: 'easy',
        theme: 'God\'s Care',
        isMemorized: false,
        reviewCount: 0,
        confidence: 1,
        dateAdded: new Date().toISOString()
      },
      {
        id: 'psalm-23-4',
        reference: 'Psalm 23:4',
        text: 'Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me; thy rod and thy staff they comfort me.',
        category: 'Comfort',
        difficulty: 'hard',
        theme: 'Overcoming Fear',
        isMemorized: false,
        reviewCount: 0,
        confidence: 1,
        dateAdded: new Date().toISOString()
      },
      {
        id: 'isaiah-41-10',
        reference: 'Isaiah 41:10',
        text: 'Fear thou not; for I am with thee: be not dismayed; for I am thy God: I will strengthen thee; yea, I will help thee; yea, I will uphold thee with the right hand of my righteousness.',
        category: 'Comfort',
        difficulty: 'hard',
        theme: 'Overcoming Fear',
        isMemorized: false,
        reviewCount: 0,
        confidence: 1,
        dateAdded: new Date().toISOString()
      },
      {
        id: 'john-14-27',
        reference: 'John 14:27',
        text: 'Peace I leave with you, my peace I give unto you: not as the world giveth, give I unto you. Let not your heart be troubled, neither let it be afraid.',
        category: 'Comfort',
        difficulty: 'medium',
        theme: 'Peace',
        isMemorized: false,
        reviewCount: 0,
        confidence: 1,
        dateAdded: new Date().toISOString()
      },
      {
        id: 'romans-8-28',
        reference: 'Romans 8:28',
        text: 'And we know that all things work together for good to them that love God, to them who are the called according to his purpose.',
        category: 'Comfort',
        difficulty: 'medium',
        theme: 'God\'s Sovereignty',
        isMemorized: false,
        reviewCount: 0,
        confidence: 1,
        dateAdded: new Date().toISOString()
      },
      {
        id: 'matthew-11-28',
        reference: 'Matthew 11:28',
        text: 'Come unto me, all ye that labour and are heavy laden, and I will give you rest.',
        category: 'Comfort',
        difficulty: 'easy',
        theme: 'Rest',
        isMemorized: false,
        reviewCount: 0,
        confidence: 1,
        dateAdded: new Date().toISOString()
      },

      // STRENGTH & COURAGE
      {
        id: 'philippians-4-13',
        reference: 'Philippians 4:13',
        text: 'I can do all things through Christ which strengtheneth me.',
        category: 'Strength',
        difficulty: 'easy',
        theme: 'God\'s Power',
        isMemorized: false,
        reviewCount: 0,
        confidence: 1,
        dateAdded: new Date().toISOString()
      },
      {
        id: 'joshua-1-9',
        reference: 'Joshua 1:9',
        text: 'Have not I commanded thee? Be strong and of a good courage; be not afraid, neither be thou dismayed: for the LORD thy God is with thee whithersoever thou goest.',
        category: 'Strength',
        difficulty: 'hard',
        theme: 'Courage',
        isMemorized: false,
        reviewCount: 0,
        confidence: 1,
        dateAdded: new Date().toISOString()
      },
      {
        id: '2timothy-1-7',
        reference: '2 Timothy 1:7',
        text: 'For God hath not given us the spirit of fear; but of power, and of love, and of a sound mind.',
        category: 'Strength',
        difficulty: 'medium',
        theme: 'Overcoming Fear',
        isMemorized: false,
        reviewCount: 0,
        confidence: 1,
        dateAdded: new Date().toISOString()
      },
      {
        id: 'isaiah-40-31',
        reference: 'Isaiah 40:31',
        text: 'But they that wait upon the LORD shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; and they shall walk, and not faint.',
        category: 'Strength',
        difficulty: 'hard',
        theme: 'Renewed Strength',
        isMemorized: false,
        reviewCount: 0,
        confidence: 1,
        dateAdded: new Date().toISOString()
      },

      // GUIDANCE & WISDOM
      {
        id: 'proverbs-3-5-6',
        reference: 'Proverbs 3:5-6',
        text: 'Trust in the LORD with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths.',
        category: 'Guidance',
        difficulty: 'medium',
        theme: 'Trust',
        isMemorized: false,
        reviewCount: 0,
        confidence: 1,
        dateAdded: new Date().toISOString()
      },
      {
        id: 'psalm-119-105',
        reference: 'Psalm 119:105',
        text: 'Thy word is a lamp unto my feet, and a light unto my path.',
        category: 'Guidance',
        difficulty: 'easy',
        theme: 'God\'s Word',
        isMemorized: false,
        reviewCount: 0,
        confidence: 1,
        dateAdded: new Date().toISOString()
      },
      {
        id: 'james-1-5',
        reference: 'James 1:5',
        text: 'If any of you lack wisdom, let him ask of God, that giveth to all men liberally, and upbraideth not; and it shall be given him.',
        category: 'Guidance',
        difficulty: 'medium',
        theme: 'Wisdom',
        isMemorized: false,
        reviewCount: 0,
        confidence: 1,
        dateAdded: new Date().toISOString()
      },
      {
        id: 'jeremiah-29-11',
        reference: 'Jeremiah 29:11',
        text: 'For I know the thoughts that I think toward you, saith the LORD, thoughts of peace, and not of evil, to give you an expected end.',
        category: 'Guidance',
        difficulty: 'medium',
        theme: 'God\'s Plans',
        isMemorized: false,
        reviewCount: 0,
        confidence: 1,
        dateAdded: new Date().toISOString()
      },

      // PRAYER & WORSHIP
      {
        id: 'psalm-119-18',
        reference: 'Psalm 119:18',
        text: 'Open thou mine eyes, that I may behold wondrous things out of thy law.',
        category: 'Prayer',
        difficulty: 'medium',
        theme: 'Understanding',
        studyId: 'how-to-study-bible',
        lessonId: 'htsb-1',
        isMemorized: false,
        reviewCount: 0,
        confidence: 1,
        dateAdded: new Date().toISOString()
      },
      {
        id: 'philippians-4-6-7',
        reference: 'Philippians 4:6-7',
        text: 'Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God. And the peace of God, which passeth all understanding, shall keep your hearts and minds through Christ Jesus.',
        category: 'Prayer',
        difficulty: 'hard',
        theme: 'Peace',
        isMemorized: false,
        reviewCount: 0,
        confidence: 1,
        dateAdded: new Date().toISOString()
      },
      {
        id: '1thessalonians-5-17',
        reference: '1 Thessalonians 5:17',
        text: 'Pray without ceasing.',
        category: 'Prayer',
        difficulty: 'easy',
        theme: 'Constant Prayer',
        isMemorized: false,
        reviewCount: 0,
        confidence: 1,
        dateAdded: new Date().toISOString()
      },
      {
        id: 'psalm-100-4',
        reference: 'Psalm 100:4',
        text: 'Enter into his gates with thanksgiving, and into his courts with praise: be thankful unto him, and bless his name.',
        category: 'Prayer',
        difficulty: 'medium',
        theme: 'Thanksgiving',
        isMemorized: false,
        reviewCount: 0,
        confidence: 1,
        dateAdded: new Date().toISOString()
      },

      // PRIORITIES & CHRISTIAN LIVING
      {
        id: 'matthew-6-33',
        reference: 'Matthew 6:33',
        text: 'But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you.',
        category: 'Priorities',
        difficulty: 'medium',
        theme: 'God\'s Kingdom',
        isMemorized: false,
        reviewCount: 0,
        confidence: 1,
        dateAdded: new Date().toISOString()
      },
      {
        id: 'galatians-2-20',
        reference: 'Galatians 2:20',
        text: 'I am crucified with Christ: nevertheless I live; yet not I, but Christ liveth in me: and the life which I now live in the flesh I live by the faith of the Son of God, who loved me, and gave himself for me.',
        category: 'Priorities',
        difficulty: 'hard',
        theme: 'Living in Christ',
        isMemorized: false,
        reviewCount: 0,
        confidence: 1,
        dateAdded: new Date().toISOString()
      },
      {
        id: 'romans-12-1',
        reference: 'Romans 12:1',
        text: 'I beseech you therefore, brethren, by the mercies of God, that ye present your bodies a living sacrifice, holy, acceptable unto God, which is your reasonable service.',
        category: 'Priorities',
        difficulty: 'hard',
        theme: 'Dedication',
        isMemorized: false,
        reviewCount: 0,
        confidence: 1,
        dateAdded: new Date().toISOString()
      },
      {
        id: '1corinthians-10-31',
        reference: '1 Corinthians 10:31',
        text: 'Whether therefore ye eat, or drink, or whatsoever ye do, do all to the glory of God.',
        category: 'Priorities',
        difficulty: 'medium',
        theme: 'God\'s Glory',
        isMemorized: false,
        reviewCount: 0,
        confidence: 1,
        dateAdded: new Date().toISOString()
      },

      // LOVE & RELATIONSHIPS
      {
        id: '1john-4-19',
        reference: '1 John 4:19',
        text: 'We love him, because he first loved us.',
        category: 'Love',
        difficulty: 'easy',
        theme: 'God\'s Love',
        isMemorized: false,
        reviewCount: 0,
        confidence: 1,
        dateAdded: new Date().toISOString()
      },
      {
        id: 'john-13-35',
        reference: 'John 13:35',
        text: 'By this shall all men know that ye are my disciples, if ye have love one to another.',
        category: 'Love',
        difficulty: 'medium',
        theme: 'Christian Love',
        isMemorized: false,
        reviewCount: 0,
        confidence: 1,
        dateAdded: new Date().toISOString()
      },
      {
        id: 'ephesians-4-32',
        reference: 'Ephesians 4:32',
        text: 'And be ye kind one to another, tenderhearted, forgiving one another, even as God for Christ\'s sake hath forgiven you.',
        category: 'Love',
        difficulty: 'medium',
        theme: 'Forgiveness',
        isMemorized: false,
        reviewCount: 0,
        confidence: 1,
        dateAdded: new Date().toISOString()
      },
      {
        id: '1corinthians-13-4-5',
        reference: '1 Corinthians 13:4-5',
        text: 'Charity suffereth long, and is kind; charity envieth not; charity vaunteth not itself, is not puffed up, Doth not behave itself unseemly, seeketh not her own, is not easily provoked, thinketh no evil.',
        category: 'Love',
        difficulty: 'hard',
        theme: 'True Love',
        isMemorized: false,
        reviewCount: 0,
        confidence: 1,
        dateAdded: new Date().toISOString()
      },

      // BIBLE STUDY & WORD OF GOD
      {
        id: '2timothy-3-16',
        reference: '2 Timothy 3:16',
        text: 'All scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness.',
        category: 'Bible Study',
        difficulty: 'medium',
        theme: 'Scripture\'s Authority',
        isMemorized: false,
        reviewCount: 0,
        confidence: 1,
        dateAdded: new Date().toISOString()
      },
      {
        id: 'hebrews-4-12',
        reference: 'Hebrews 4:12',
        text: 'For the word of God is quick, and powerful, and sharper than any twoedged sword, piercing even to the dividing asunder of soul and spirit, and of the joints and marrow, and is a discerner of the thoughts and intents of the heart.',
        category: 'Bible Study',
        difficulty: 'hard',
        theme: 'God\'s Word Power',
        isMemorized: false,
        reviewCount: 0,
        confidence: 1,
        dateAdded: new Date().toISOString()
      },
      {
        id: 'psalm-1-2-3',
        reference: 'Psalm 1:2-3',
        text: 'But his delight is in the law of the LORD; and in his law doth he meditate day and night. And he shall be like a tree planted by the rivers of water, that bringeth forth his fruit in his season; his leaf also shall not wither; and whatsoever he doeth shall prosper.',
        category: 'Bible Study',
        difficulty: 'hard',
        theme: 'Meditation',
        isMemorized: false,
        reviewCount: 0,
        confidence: 1,
        dateAdded: new Date().toISOString()
      },

      // FORGIVENESS & SIN
      {
        id: '1john-1-9',
        reference: '1 John 1:9',
        text: 'If we confess our sins, he is faithful and just to forgive us our sins, and to cleanse us from all unrighteousness.',
        category: 'Forgiveness',
        difficulty: 'medium',
        theme: 'Confession',
        isMemorized: false,
        reviewCount: 0,
        confidence: 1,
        dateAdded: new Date().toISOString()
      },
      {
        id: 'romans-3-23',
        reference: 'Romans 3:23',
        text: 'For all have sinned, and come short of the glory of God.',
        category: 'Forgiveness',
        difficulty: 'easy',
        theme: 'Sin',
        isMemorized: false,
        reviewCount: 0,
        confidence: 1,
        dateAdded: new Date().toISOString()
      },
      {
        id: 'psalm-103-12',
        reference: 'Psalm 103:12',
        text: 'As far as the east is from the west, so far hath he removed our transgressions from us.',
        category: 'Forgiveness',
        difficulty: 'medium',
        theme: 'God\'s Forgiveness',
        isMemorized: false,
        reviewCount: 0,
        confidence: 1,
        dateAdded: new Date().toISOString()
      },

      // FAITH & TRUST
      {
        id: 'hebrews-11-1',
        reference: 'Hebrews 11:1',
        text: 'Now faith is the substance of things hoped for, the evidence of things not seen.',
        category: 'Faith',
        difficulty: 'medium',
        theme: 'Definition of Faith',
        isMemorized: false,
        reviewCount: 0,
        confidence: 1,
        dateAdded: new Date().toISOString()
      },
      {
        id: 'romans-10-17',
        reference: 'Romans 10:17',
        text: 'So then faith cometh by hearing, and hearing by the word of God.',
        category: 'Faith',
        difficulty: 'easy',
        theme: 'Faith Building',
        isMemorized: false,
        reviewCount: 0,
        confidence: 1,
        dateAdded: new Date().toISOString()
      },
      {
        id: 'ephesians-2-10',
        reference: 'Ephesians 2:10',
        text: 'For we are his workmanship, created in Christ Jesus unto good works, which God hath before ordained that we should walk in them.',
        category: 'Faith',
        difficulty: 'medium',
        theme: 'Good Works',
        isMemorized: false,
        reviewCount: 0,
        confidence: 1,
        dateAdded: new Date().toISOString()
      },

      // HOPE & FUTURE
      {
        id: 'romans-8-18',
        reference: 'Romans 8:18',
        text: 'For I reckon that the sufferings of this present time are not worthy to be compared with the glory which shall be revealed in us.',
        category: 'Hope',
        difficulty: 'medium',
        theme: 'Future Glory',
        isMemorized: false,
        reviewCount: 0,
        confidence: 1,
        dateAdded: new Date().toISOString()
      },
      {
        id: 'revelation-21-4',
        reference: 'Revelation 21:4',
        text: 'And God shall wipe away all tears from their eyes; and there shall be no more death, neither sorrow, nor crying, neither shall there be any more pain: for the former things are passed away.',
        category: 'Hope',
        difficulty: 'hard',
        theme: 'New Earth',
        isMemorized: false,
        reviewCount: 0,
        confidence: 1,
        dateAdded: new Date().toISOString()
      },
      {
        id: '1peter-1-3',
        reference: '1 Peter 1:3',
        text: 'Blessed be the God and Father of our Lord Jesus Christ, which according to his abundant mercy hath begotten us again unto a lively hope by the resurrection of Jesus Christ from the dead.',
        category: 'Hope',
        difficulty: 'hard',
        theme: 'Living Hope',
        isMemorized: false,
        reviewCount: 0,
        confidence: 1,
        dateAdded: new Date().toISOString()
      },

      // JOY & PRAISE
      {
        id: 'nehemiah-8-10',
        reference: 'Nehemiah 8:10',
        text: 'Then he said unto them, Go your way, eat the fat, and drink the sweet, and send portions unto them for whom nothing is prepared: for this day is holy unto our Lord: neither be ye sorry; for the joy of the LORD is your strength.',
        category: 'Joy',
        difficulty: 'hard',
        theme: 'God\'s Joy',
        isMemorized: false,
        reviewCount: 0,
        confidence: 1,
        dateAdded: new Date().toISOString()
      },
      {
        id: 'psalm-118-24',
        reference: 'Psalm 118:24',
        text: 'This is the day which the LORD hath made; we will rejoice and be glad in it.',
        category: 'Joy',
        difficulty: 'easy',
        theme: 'Daily Joy',
        isMemorized: false,
        reviewCount: 0,
        confidence: 1,
        dateAdded: new Date().toISOString()
      },
      {
        id: 'psalm-150-6',
        reference: 'Psalm 150:6',
        text: 'Let every thing that hath breath praise the LORD. Praise ye the LORD.',
        category: 'Joy',
        difficulty: 'easy',
        theme: 'Praise',
        isMemorized: false,
        reviewCount: 0,
        confidence: 1,
        dateAdded: new Date().toISOString()
      },

      // OBEDIENCE & DISCIPLESHIP
      {
        id: 'john-7-17',
        reference: 'John 7:17',
        text: 'If any man will do his will, he shall know of the doctrine, whether it be of God, or whether I speak of myself.',
        category: 'Obedience',
        difficulty: 'medium',
        theme: 'Understanding through Obedience',
        studyId: 'how-to-study-bible',
        lessonId: 'htsb-4',
        isMemorized: false,
        reviewCount: 0,
        confidence: 1,
        dateAdded: new Date().toISOString()
      },
      {
        id: 'luke-9-23',
        reference: 'Luke 9:23',
        text: 'And he said to them all, If any man will come after me, let him deny himself, and take up his cross daily, and follow me.',
        category: 'Obedience',
        difficulty: 'medium',
        theme: 'Discipleship',
        isMemorized: false,
        reviewCount: 0,
        confidence: 1,
        dateAdded: new Date().toISOString()
      },
      {
        id: 'james-1-22',
        reference: 'James 1:22',
        text: 'But be ye doers of the word, and not hearers only, deceiving your own selves.',
        category: 'Obedience',
        difficulty: 'medium',
        theme: 'Action',
        isMemorized: false,
        reviewCount: 0,
        confidence: 1,
        dateAdded: new Date().toISOString()
      },

      // CHILDREN'S VERSES (Easy to memorize)
      {
        id: 'jesus-wept',
        reference: 'John 11:35',
        text: 'Jesus wept.',
        category: 'Children',
        difficulty: 'easy',
        theme: 'Jesus\' Humanity',
        isMemorized: false,
        reviewCount: 0,
        confidence: 1,
        dateAdded: new Date().toISOString()
      },
      {
        id: 'be-kind',
        reference: 'Ephesians 4:32a',
        text: 'And be ye kind one to another.',
        category: 'Children',
        difficulty: 'easy',
        theme: 'Kindness',
        isMemorized: false,
        reviewCount: 0,
        confidence: 1,
        dateAdded: new Date().toISOString()
      },
      {
        id: 'god-is-love',
        reference: '1 John 4:16b',
        text: 'God is love.',
        category: 'Children',
        difficulty: 'easy',
        theme: 'God\'s Love',
        isMemorized: false,
        reviewCount: 0,
        confidence: 1,
        dateAdded: new Date().toISOString()
      },
      {
        id: 'children-obey',
        reference: 'Ephesians 6:1',
        text: 'Children, obey your parents in the Lord: for this is right.',
        category: 'Children',
        difficulty: 'easy',
        theme: 'Obedience',
        isMemorized: false,
        reviewCount: 0,
        confidence: 1,
        dateAdded: new Date().toISOString()
      }
    ]

    // Convert to record format
    defaultCards.forEach(card => {
      cards.value[card.id] = card
    })
  }

  const initializeDefaultDecks = () => {
    const defaultDecks: MemoryDeck[] = [
      {
        id: 'bible-study-basics',
        title: 'Bible Study Basics',
        description: 'Key verses about studying God\'s Word',
        category: 'Bible Study',
        cardIds: ['psalm-119-18', '1cor-13-11', 'psalm-86-11', 'john-7-17'],
        isDefault: true,
        color: 'from-emerald-500 to-emerald-600',
        icon: '📖'
      },
      {
        id: 'essential-verses',
        title: 'Essential Verses',
        description: 'Must-know Bible verses for every Christian',
        category: 'Foundation',
        cardIds: ['john-3-16', 'romans-8-28', 'philippians-4-13', 'psalm-23-1'],
        isDefault: true,
        color: 'from-blue-500 to-blue-600',
        icon: '⭐'
      },
      {
        id: 'comfort-promises',
        title: 'Comfort & Promises',
        description: 'Verses for difficult times and God\'s promises',
        category: 'Comfort',
        cardIds: ['romans-8-28', 'psalm-23-1', 'jeremiah-29-11', 'isaiah-41-10'],
        isDefault: true,
        color: 'from-teal-500 to-teal-600',
        icon: '🤗'
      },
      {
        id: 'guidance-wisdom',
        title: 'Guidance & Wisdom',
        description: 'Verses about seeking God\'s direction',
        category: 'Guidance',
        cardIds: ['proverbs-3-5-6', 'psalm-86-11', 'matthew-6-33'],
        isDefault: true,
        color: 'from-purple-500 to-purple-600',
        icon: '🧭'
      }
    ]

    defaultDecks.forEach(deck => {
      decks.value[deck.id] = deck
    })
  }

  const allCards = computed(() => Object.values(cards.value))
  const memorizedCards = computed(() => allCards.value.filter(card => card.isMemorized))
  const reviewCards = computed(() => allCards.value.filter(card => card.reviewCount > 0 && !card.isMemorized))
  const newCards = computed(() => allCards.value.filter(card => card.reviewCount === 0))

  const cardsByDifficulty = computed(() => {
    return {
      easy: allCards.value.filter(card => card.difficulty === 'easy'),
      medium: allCards.value.filter(card => card.difficulty === 'medium'),
      hard: allCards.value.filter(card => card.difficulty === 'hard')
    }
  })

  const cardsByCategory = computed(() => {
    const categories: Record<string, MemoryCard[]> = {}
    allCards.value.forEach(card => {
      if (!categories[card.category]) {
        categories[card.category] = []
      }
      categories[card.category].push(card)
    })
    return categories
  })

  const getCardsForDeck = (deckId: string): MemoryCard[] => {
    const deck = decks.value[deckId]
    if (!deck) return []
    
    return deck.cardIds.map(cardId => cards.value[cardId]).filter(Boolean)
  }

  const getDueForReview = (): MemoryCard[] => {
    const now = new Date()
    return allCards.value.filter(card => {
      if (card.isMemorized) return false
      if (card.reviewCount === 0) return true
      
      if (!card.lastReviewed) return true
      
      const lastReview = new Date(card.lastReviewed)
      const daysSinceReview = Math.floor((now.getTime() - lastReview.getTime()) / (1000 * 60 * 60 * 24))
      
      // Spaced repetition: review intervals based on confidence level
      const reviewIntervals = { 1: 1, 2: 3, 3: 7, 4: 14, 5: 30 }
      const requiredInterval = reviewIntervals[card.confidence] || 1
      
      return daysSinceReview >= requiredInterval
    })
  }

  const addCard = (cardData: Omit<MemoryCard, 'id' | 'isMemorized' | 'reviewCount' | 'confidence' | 'dateAdded'>) => {
    const id = `${cardData.reference.toLowerCase().replace(/\s+/g, '-').replace(/:/g, '-')}`
    const card: MemoryCard = {
      ...cardData,
      id,
      isMemorized: false,
      reviewCount: 0,
      confidence: 1,
      dateAdded: new Date().toISOString()
    }
    
    cards.value[id] = card
    saveToStorage()
    return id
  }

  const updateCardProgress = (cardId: string, wasCorrect: boolean) => {
    const card = cards.value[cardId]
    if (!card) return

    card.reviewCount++
    card.lastReviewed = new Date().toISOString()

    if (wasCorrect) {
      card.confidence = Math.min(5, card.confidence + 1)
      if (card.confidence === 5) {
        card.isMemorized = true
      }
    } else {
      card.confidence = Math.max(1, card.confidence - 1)
      card.isMemorized = false
    }

    saveToStorage()
  }

  const createDeck = (deckData: Omit<MemoryDeck, 'id' | 'isDefault'>) => {
    const id = `deck-${Date.now()}`
    const deck: MemoryDeck = {
      ...deckData,
      id,
      isDefault: false
    }
    
    decks.value[id] = deck
    saveToStorage()
    return id
  }

  const addCardToDeck = (deckId: string, cardId: string) => {
    const deck = decks.value[deckId]
    if (deck && !deck.cardIds.includes(cardId)) {
      deck.cardIds.push(cardId)
      saveToStorage()
    }
  }

  const removeCardFromDeck = (deckId: string, cardId: string) => {
    const deck = decks.value[deckId]
    if (deck) {
      deck.cardIds = deck.cardIds.filter(id => id !== cardId)
      saveToStorage()
    }
  }

  const startStudySession = (cardIds: string[]) => {
    const sessionId = `session-${Date.now()}`
    const session: StudySession = {
      id: sessionId,
      date: new Date().toISOString(),
      cardsStudied: cardIds,
      correctAnswers: 0,
      totalCards: cardIds.length,
      duration: 0
    }
    
    studySessions.value.push(session)
    return sessionId
  }

  const endStudySession = (sessionId: string, correctAnswers: number, duration: number) => {
    const session = studySessions.value.find(s => s.id === sessionId)
    if (session) {
      session.correctAnswers = correctAnswers
      session.duration = duration
      saveToStorage()
    }
  }

  const getStudyStats = () => {
    const totalCards = allCards.value.length
    const memorizedCount = memorizedCards.value.length
    const reviewCount = reviewCards.value.length
    const dueCount = getDueForReview().length
    
    const totalSessions = studySessions.value.length
    const totalCardsStudied = studySessions.value.reduce((sum, session) => sum + session.cardsStudied.length, 0)
    const totalCorrect = studySessions.value.reduce((sum, session) => sum + session.correctAnswers, 0)
    const accuracy = totalCardsStudied > 0 ? Math.round((totalCorrect / totalCardsStudied) * 100) : 0

    return {
      totalCards,
      memorizedCount,
      reviewCount,
      dueCount,
      totalSessions,
      accuracy,
      streakDays: calculateStreak()
    }
  }

  const calculateStreak = (): number => {
    // Simple streak calculation based on recent sessions
    const now = new Date()
    let streak = 0
    
    for (let i = 0; i < 30; i++) {
      const checkDate = new Date(now.getTime() - (i * 24 * 60 * 60 * 1000))
      const dateString = checkDate.toISOString().split('T')[0]
      
      const hasSession = studySessions.value.some(session => 
        session.date.startsWith(dateString)
      )
      
      if (hasSession) {
        streak++
      } else if (i > 0) {
        break // First gap breaks the streak (unless today has no session yet)
      }
    }
    
    return streak
  }

  const saveToStorage = () => {
    localStorage.setItem('biblestem_memory_cards', JSON.stringify({
      cards: cards.value,
      decks: decks.value,
      sessions: studySessions.value
    }))
  }

  const loadFromStorage = () => {
    const saved = localStorage.getItem('biblestem_memory_cards')
    if (saved) {
      try {
        const data = JSON.parse(saved)
        cards.value = data.cards || {}
        decks.value = data.decks || {}
        studySessions.value = data.sessions || []
        
        // If no cards loaded, initialize defaults
        if (Object.keys(cards.value).length === 0) {
          initializeDefaultCards()
          initializeDefaultDecks()
          saveToStorage()
        }
      } catch (error) {
        console.error('Error loading memory cards:', error)
        initializeDemoData()
      }
    } else {
      initializeDemoData()
    }
  }

  const initializeDemoData = () => {
    initializeDefaultCards()
    initializeDefaultDecks()
    
    // Add some demo progress
    updateCardProgress('john-3-16', true)
    updateCardProgress('john-3-16', true)
    updateCardProgress('psalm-23-1', true)
    updateCardProgress('philippians-4-13', true)
    updateCardProgress('philippians-4-13', true)
    updateCardProgress('philippians-4-13', true)
    
    saveToStorage()
  }

  return {
    cards,
    decks,
    studySessions,
    allCards,
    memorizedCards,
    reviewCards,
    newCards,
    cardsByDifficulty,
    cardsByCategory,
    getCardsForDeck,
    getDueForReview,
    addCard,
    updateCardProgress,
    createDeck,
    addCardToDeck,
    removeCardFromDeck,
    startStudySession,
    endStudySession,
    getStudyStats,
    loadFromStorage,
    initializeDemoData
  }
})
