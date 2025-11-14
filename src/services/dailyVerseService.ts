/**
 * Daily Verse Service
 * Provides rotating daily Bible verses based on the current date
 */

export interface DailyVerse {
  text: string
  reference: string
  translation?: string
}

// Collection of inspirational Bible verses
// These will rotate based on the day of the year (1-365)
const DAILY_VERSES: DailyVerse[] = [
  { text: "For I know the plans I have for you,\" declares the Lord, \"plans to prosper you and not to harm you, plans to give you hope and a future.", reference: "Jeremiah 29:11" },
  { text: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.", reference: "Proverbs 3:5-6" },
  { text: "I can do all this through him who gives me strength.", reference: "Philippians 4:13" },
  { text: "Be still, and know that I am God; I will be exalted among the nations, I will be exalted in the earth.", reference: "Psalm 46:10" },
  { text: "The Lord is my shepherd, I lack nothing.", reference: "Psalm 23:1" },
  { text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.", reference: "John 3:16" },
  { text: "Cast all your anxiety on him because he cares for you.", reference: "1 Peter 5:7" },
  { text: "I have been crucified with Christ and I no longer live, but Christ lives in me. The life I now live in the body, I live by faith in the Son of God, who loved me and gave himself for me.", reference: "Galatians 2:20" },
  { text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.", reference: "Philippians 4:6" },
  { text: "The Lord will fight for you; you need only to be still.", reference: "Exodus 14:14" },
  { text: "Jesus looked at them and said, \"With man this is impossible, but with God all things are possible.\"", reference: "Matthew 19:26" },
  { text: "Come to me, all you who are weary and burdened, and I will give you rest.", reference: "Matthew 11:28" },
  { text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.", reference: "Romans 8:28" },
  { text: "Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.", reference: "Joshua 1:9" },
  { text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.", reference: "Psalm 34:18" },
  { text: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.", reference: "Isaiah 40:31" },
  { text: "For the word of God is alive and active. Sharper than any double-edged sword, it penetrates even to dividing soul and spirit, joints and marrow; it judges the thoughts and attitudes of the heart.", reference: "Hebrews 4:12" },
  { text: "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!", reference: "2 Corinthians 5:17" },
  { text: "Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid.", reference: "John 14:27" },
  { text: "But he said to me, \"My grace is sufficient for you, for my power is made perfect in weakness.\" Therefore I will boast all the more gladly about my weaknesses, so that Christ's power may rest on me.", reference: "2 Corinthians 12:9" },
  { text: "The Lord is my light and my salvation—whom shall I fear? The Lord is the stronghold of my life—of whom shall I be afraid?", reference: "Psalm 27:1" },
  { text: "For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.", reference: "Romans 8:38-39" },
  { text: "Be strong and courageous. Do not be afraid or terrified because of them, for the Lord your God goes with you; he will never leave you nor forsake you.", reference: "Deuteronomy 31:6" },
  { text: "Delight yourself in the Lord, and he will give you the desires of your heart.", reference: "Psalm 37:4" },
  { text: "The name of the Lord is a fortified tower; the righteous run to it and are safe.", reference: "Proverbs 18:10" },
  { text: "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.", reference: "Isaiah 41:10" },
  { text: "Your word is a lamp for my feet, a light on my path.", reference: "Psalm 119:105" },
  { text: "He gives strength to the weary and increases the power of the weak.", reference: "Isaiah 40:29" },
  { text: "The Lord will keep you from all harm—he will watch over your life; the Lord will watch over your coming and going both now and forevermore.", reference: "Psalm 121:7-8" },
  { text: "In all your ways acknowledge him, and he will make straight your paths.", reference: "Proverbs 3:6" },
  { text: "For where two or three gather in my name, there am I with them.", reference: "Matthew 18:20" },
  { text: "I can do all this through him who gives me strength.", reference: "Philippians 4:13" },
  { text: "The Lord is good, a refuge in times of trouble. He cares for those who trust in him.", reference: "Nahum 1:7" },
  { text: "But seek first his kingdom and his righteousness, and all these things will be given to you as well.", reference: "Matthew 6:33" },
  { text: "The Lord is my strength and my shield; my heart trusts in him, and he helps me. My heart leaps for joy, and with my song I praise him.", reference: "Psalm 28:7" },
  { text: "For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline.", reference: "2 Timothy 1:7" },
  { text: "Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up.", reference: "Galatians 6:9" },
  { text: "The Lord is my rock, my fortress and my deliverer; my God is my rock, in whom I take refuge, my shield and the horn of my salvation, my stronghold.", reference: "Psalm 18:2" },
  { text: "Commit to the Lord whatever you do, and he will establish your plans.", reference: "Proverbs 16:3" },
  { text: "I will instruct you and teach you in the way you should go; I will counsel you with my loving eye on you.", reference: "Psalm 32:8" },
  { text: "The Lord bless you and keep you; the Lord make his face shine on you and be gracious to you; the Lord turn his face toward you and give you peace.", reference: "Numbers 6:24-26" },
]

/**
 * Get today's verse based on the day of the year
 * This ensures the same verse is shown throughout the day
 */
export function getTodaysVerse(): DailyVerse {
  const now = new Date()
  const startOfYear = new Date(now.getFullYear(), 0, 1)
  const dayOfYear = Math.floor((now.getTime() - startOfYear.getTime()) / (1000 * 60 * 60 * 24)) + 1
  
  // Use modulo to cycle through verses
  const verseIndex = (dayOfYear - 1) % DAILY_VERSES.length
  
  return DAILY_VERSES[verseIndex]
}

/**
 * Get verse for a specific date
 */
export function getVerseForDate(date: Date): DailyVerse {
  const startOfYear = new Date(date.getFullYear(), 0, 1)
  const dayOfYear = Math.floor((date.getTime() - startOfYear.getTime()) / (1000 * 60 * 60 * 24)) + 1
  
  const verseIndex = (dayOfYear - 1) % DAILY_VERSES.length
  
  return DAILY_VERSES[verseIndex]
}

/**
 * Get all available verses
 */
export function getAllVerses(): DailyVerse[] {
  return [...DAILY_VERSES]
}

