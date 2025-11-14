/**
 * Daily Devotion Service
 * Provides rotating daily devotions with verses, reflections, and prayers
 * Uses Devotionalium API for verses, with fallback to local verses
 */

import { getTodaysVerse, type DailyVerse } from './dailyVerseService'
import { getTodaysVerseFromAPI } from './devotionaliumApiService'
import { logger } from '../utils/logger'

export interface DailyDevotion {
  scripture: string
  text: string
  reflection: string
  prayer: string
  date: string
}

// Collection of devotion reflections and prayers
// These rotate based on the day of the year to match the daily verse
const DEVOTION_REFLECTIONS: Array<{ reflection: string; prayer: string }> = [
  {
    reflection: 'This verse reminds us that God has a purpose for each of our lives. Even in times of uncertainty, we can trust that He is working for our good. His plans are always for our welfare, to give us hope and a future filled with His blessings.',
    prayer: 'Father, thank you for the plans you have for my life. Help me to trust in your timing and your ways. Give me the faith to believe that you are working everything together for my good, even when I cannot see it. In Jesus name, amen.'
  },
  {
    reflection: 'Trusting God completely means letting go of our own understanding and leaning on His wisdom. When we submit every area of our lives to Him, He promises to direct our paths. This requires humility and faith, but the result is a life guided by the Creator of the universe.',
    prayer: 'Lord, I choose to trust you with all my heart today. Help me to let go of my own understanding and lean on your wisdom. Guide my steps and make my paths straight. In Jesus name, amen.'
  },
  {
    reflection: 'Through Christ, we have access to unlimited strength. This isn\'t about our own ability, but about His power working in us. Whatever challenges we face today, we can face them with confidence knowing that God\'s strength is available to us.',
    prayer: 'Heavenly Father, thank you for the strength you provide through Christ. Help me to rely on your power rather than my own. Give me the courage to face today\'s challenges with confidence in you. In Jesus name, amen.'
  },
  {
    reflection: 'In our busy lives, we often forget to be still and recognize God\'s presence. This verse calls us to pause, quiet our hearts, and remember who God is. When we do, we find peace and perspective that the world cannot give.',
    prayer: 'God, help me to be still and know that you are God. Quiet my heart and mind so I can hear your voice. Remind me of your greatness and sovereignty over all things. In Jesus name, amen.'
  },
  {
    reflection: 'The Lord as our shepherd means we have everything we need. He provides, protects, guides, and cares for us. We can rest in the assurance that our Good Shepherd will never leave us wanting.',
    prayer: 'Thank you, Lord, for being my shepherd. Thank you that I lack nothing because you provide all I need. Help me to trust in your provision and care. In Jesus name, amen.'
  },
  {
    reflection: 'God\'s love for us is so great that He gave His only Son. This is the foundation of our faith - that God loved us first, and through Jesus, we can have eternal life. This love transforms everything.',
    prayer: 'Father, thank you for your incredible love shown through Jesus. Help me to grasp the depth of this love and to share it with others. Thank you for the gift of eternal life. In Jesus name, amen.'
  },
  {
    reflection: 'We don\'t have to carry our worries alone. God invites us to cast all our anxieties on Him because He cares deeply for us. This is both an invitation and a command - to trust Him with everything.',
    prayer: 'Lord, I give you all my worries and anxieties today. Thank you that you care for me and want to carry my burdens. Help me to trust you completely. In Jesus name, amen.'
  },
  {
    reflection: 'When we accept Christ, we become new creations. The old life is gone, and we are transformed. This is not about self-improvement, but about being made new by the power of the Holy Spirit.',
    prayer: 'Thank you, God, for making me a new creation in Christ. Help me to live in the reality of this new identity and to leave behind the old ways. Transform me more into your image. In Jesus name, amen.'
  },
  {
    reflection: 'Prayer is not just asking for things, but presenting our requests with thanksgiving. When we approach God with gratitude, our perspective changes, and we see His goodness even in difficult circumstances.',
    prayer: 'Father, I come to you with thanksgiving in my heart. Thank you for all you\'ve done and all you\'re doing. I present my requests to you, trusting in your perfect will. In Jesus name, amen.'
  },
  {
    reflection: 'Sometimes God calls us to be still and let Him fight our battles. This requires faith and patience, but it also brings peace. When we step back and let God work, we see His power in ways we never could on our own.',
    prayer: 'Lord, help me to be still and let you fight for me. Give me the faith to trust in your timing and your ways. I surrender my battles to you. In Jesus name, amen.'
  },
  {
    reflection: 'With God, nothing is impossible. What seems impossible to us is possible with Him. This truth should give us hope and courage to step out in faith, knowing that God can do far more than we can imagine.',
    prayer: 'God, I believe that with you, all things are possible. Help me to trust in your power and to step out in faith. Give me courage to believe for the impossible. In Jesus name, amen.'
  },
  {
    reflection: 'Jesus invites us to come to Him when we\'re weary and burdened. He offers rest - not just physical rest, but soul rest. In Him, we find peace and restoration that the world cannot provide.',
    prayer: 'Jesus, I come to you today weary and burdened. I need your rest. Give me peace for my soul and strength for my journey. Thank you for your invitation to find rest in you. In Jesus name, amen.'
  },
  {
    reflection: 'God works all things together for good for those who love Him. This doesn\'t mean everything that happens is good, but that God can use even difficult circumstances for our ultimate good and His glory.',
    prayer: 'Father, I trust that you are working all things together for my good. Help me to see your hand even in difficult circumstances. Give me faith to believe in your perfect plan. In Jesus name, amen.'
  },
  {
    reflection: 'God commands us to be strong and courageous, not because we\'re capable on our own, but because He is with us. His presence gives us the strength and courage we need to face any challenge.',
    prayer: 'Lord, thank you for your promise to be with me. Give me strength and courage today. Help me to remember that I\'m not alone, and that you go with me wherever I go. In Jesus name, amen.'
  },
  {
    reflection: 'God is close to those who are brokenhearted. He doesn\'t distance Himself from our pain, but draws near to comfort and heal. In our darkest moments, we can find hope in His presence.',
    prayer: 'God, thank you for being close to the brokenhearted. Draw near to me in my pain and bring healing. Help me to feel your presence and find comfort in you. In Jesus name, amen.'
  },
  {
    reflection: 'When we hope in the Lord, we find renewed strength. This hope is not wishful thinking, but confident expectation in God\'s faithfulness. As we wait on Him, He renews our strength like eagles.',
    prayer: 'Lord, I place my hope in you today. Renew my strength and help me to soar like an eagle. Give me patience as I wait on you, knowing that you are faithful. In Jesus name, amen.'
  },
  {
    reflection: 'God\'s Word is alive and active. It\'s not just ancient text, but living truth that speaks to us today. When we engage with Scripture, it penetrates our hearts and transforms us from the inside out.',
    prayer: 'Thank you, God, for your living Word. Help me to engage with Scripture daily and allow it to transform me. Let your Word penetrate my heart and change me. In Jesus name, amen.'
  },
  {
    reflection: 'In Christ, we are new creations. The old has passed away, and the new has come. This is our identity - not what we were, but who we are in Christ. We can live in the freedom of this new identity.',
    prayer: 'Thank you, God, for making me a new creation in Christ. Help me to live in the reality of this new identity. Give me the courage to leave the old behind and embrace the new. In Jesus name, amen.'
  },
  {
    reflection: 'Jesus gives us a peace that the world cannot give. This peace transcends understanding and guards our hearts and minds. It\'s not the absence of trouble, but the presence of God in the midst of it.',
    prayer: 'Jesus, thank you for your peace. Help me to receive it and not let my heart be troubled. Give me peace that transcends understanding, even in difficult circumstances. In Jesus name, amen.'
  },
  {
    reflection: 'God\'s grace is sufficient, and His power is made perfect in weakness. When we acknowledge our weakness, we make room for God\'s strength. Our weakness becomes an opportunity for God to display His power.',
    prayer: 'Lord, I acknowledge my weakness before you. Thank you that your grace is sufficient and your power is made perfect in weakness. Use my weakness to display your strength. In Jesus name, amen.'
  },
  {
    reflection: 'The Lord is our light and salvation. In Him, we have nothing to fear. When we walk in His light, darkness cannot overcome us. He is our stronghold, our place of safety and security.',
    prayer: 'Thank you, Lord, for being my light and salvation. Help me to walk in your light and not fear the darkness. You are my stronghold, and in you I find safety. In Jesus name, amen.'
  },
  {
    reflection: 'Nothing can separate us from God\'s love. Not circumstances, not failures, not even our own doubts. His love is constant, unchanging, and unconditional. We can rest secure in this love.',
    prayer: 'Father, thank you for your unfailing love. Help me to grasp how wide, long, high, and deep your love is. Remind me that nothing can separate me from your love. In Jesus name, amen.'
  },
  {
    reflection: 'God promises to never leave us or forsake us. This is a promise we can count on, no matter what we face. His presence is constant, and we can find strength and courage in knowing He is with us.',
    prayer: 'Thank you, God, for your promise to never leave me. Help me to remember your presence is always with me. Give me strength and courage knowing you are by my side. In Jesus name, amen.'
  },
  {
    reflection: 'When we delight ourselves in the Lord, He gives us the desires of our heart. This doesn\'t mean He gives us everything we want, but that as we align our hearts with His, our desires become His desires.',
    prayer: 'Lord, help me to delight myself in you. Align my heart with yours, and let my desires be your desires. Thank you for the promise that you will give me the desires of my heart. In Jesus name, amen.'
  },
  {
    reflection: 'The name of the Lord is a strong tower. When we run to Him, we find safety and protection. In times of trouble, we can take refuge in His name, knowing He is our defender and protector.',
    prayer: 'Thank you, Lord, for being my strong tower. Help me to run to you in times of trouble. I find safety and protection in your name. You are my refuge and strength. In Jesus name, amen.'
  },
  {
    reflection: 'God promises to strengthen and help us. We don\'t have to face life\'s challenges alone. He is with us, holding us up with His righteous right hand. We can find courage in His presence.',
    prayer: 'Father, thank you for your promise to strengthen and help me. I don\'t want to fear or be dismayed. Help me to remember you are with me, holding me up. In Jesus name, amen.'
  },
  {
    reflection: 'God\'s Word is a lamp to our feet and a light to our path. It guides us step by step, showing us the way to go. When we follow its guidance, we walk in wisdom and avoid the pitfalls of life.',
    prayer: 'Thank you, God, for your Word that guides me. Help me to read it daily and follow its guidance. Let it be a lamp to my feet and a light to my path. In Jesus name, amen.'
  },
  {
    reflection: 'God gives strength to the weary and increases the power of the weak. When we feel exhausted and powerless, we can turn to Him for renewal. He is the source of our strength.',
    prayer: 'Lord, I come to you weary and weak. Give me strength and increase my power. Renew me and help me to find my strength in you. In Jesus name, amen.'
  },
  {
    reflection: 'The Lord watches over our coming and going, both now and forevermore. He is our protector, keeping us from harm. We can rest in the assurance of His constant watchful care.',
    prayer: 'Thank you, Lord, for watching over me. Thank you for protecting me and keeping me from harm. Help me to trust in your watchful care. In Jesus name, amen.'
  },
  {
    reflection: 'When we acknowledge God in all our ways, He makes our paths straight. This means seeking His guidance in every decision and trusting Him to direct our steps. His way is always best.',
    prayer: 'Lord, help me to acknowledge you in all my ways. Guide my steps and make my paths straight. I trust you to direct my life. In Jesus name, amen.'
  },
  {
    reflection: 'Where two or three gather in Jesus\' name, He is there with them. There is power in community and corporate prayer. When we come together in faith, we experience God\'s presence in a special way.',
    prayer: 'Jesus, thank you for your promise to be with us when we gather. Help me to find community and to pray with others. Let me experience your presence in a special way. In Jesus name, amen.'
  },
  {
    reflection: 'The Lord is good, a refuge in times of trouble. He cares for those who trust in Him. In difficult times, we can find safety and comfort in His goodness and care.',
    prayer: 'Thank you, Lord, for your goodness. Thank you for being my refuge in times of trouble. Help me to trust in you and experience your care. In Jesus name, amen.'
  },
  {
    reflection: 'When we seek first God\'s kingdom and righteousness, He provides all we need. This is about priorities - putting God first and trusting Him to take care of the rest.',
    prayer: 'Lord, help me to seek first your kingdom and righteousness. Help me to put you first in my life and trust you to provide all I need. In Jesus name, amen.'
  },
  {
    reflection: 'The Lord is our strength and shield. When we trust in Him, He helps us and our hearts leap for joy. We can praise Him with songs of thanksgiving for all He does.',
    prayer: 'Thank you, Lord, for being my strength and shield. Help me to trust in you and experience your help. Let my heart leap for joy as I praise you. In Jesus name, amen.'
  },
  {
    reflection: 'God\'s Spirit gives us power, love, and self-discipline. We don\'t have to live in fear or timidity. The Holy Spirit empowers us to live boldly and love others well.',
    prayer: 'Thank you, God, for your Spirit that gives me power, love, and self-discipline. Help me to live boldly and not in fear. Empower me to love others well. In Jesus name, amen.'
  },
  {
    reflection: 'We should not grow weary in doing good. At the proper time, we will reap a harvest if we don\'t give up. Perseverance in doing good is rewarded, and our efforts are not in vain.',
    prayer: 'Lord, help me not to grow weary in doing good. Give me perseverance and strength to keep going. Help me to trust that I will reap a harvest at the proper time. In Jesus name, amen.'
  },
  {
    reflection: 'The Lord is our rock, fortress, and deliverer. He is our refuge, shield, and stronghold. In Him, we find security and protection from all that would harm us.',
    prayer: 'Thank you, Lord, for being my rock, fortress, and deliverer. Thank you for being my refuge and shield. Help me to find security and protection in you. In Jesus name, amen.'
  },
  {
    reflection: 'When we commit our plans to the Lord, He establishes them. This means seeking His will and trusting Him with the outcome. His plans are always better than ours.',
    prayer: 'Lord, I commit my plans to you today. Help me to seek your will and trust you with the outcome. Establish my plans according to your purpose. In Jesus name, amen.'
  },
  {
    reflection: 'God promises to instruct and teach us in the way we should go. He counsels us with His loving eye on us. We can trust His guidance because it comes from a heart of love.',
    prayer: 'Thank you, God, for your instruction and teaching. Help me to listen to your counsel and follow your guidance. Thank you for watching over me with love. In Jesus name, amen.'
  },
  {
    reflection: 'The Lord\'s blessing brings peace and grace. When we receive His blessing, we experience His favor and protection. His face shining on us brings light and life.',
    prayer: 'Lord, thank you for your blessing. Thank you for your grace and peace. Let your face shine on me and give me peace. In Jesus name, amen.'
  },
]

/**
 * Get today's devotion with verse, reflection, and prayer
 * Tries to fetch from Devotionalium API first, falls back to local verses
 */
export async function getTodaysDevotion(): Promise<DailyDevotion> {
  const now = new Date()
  const startOfYear = new Date(now.getFullYear(), 0, 1)
  const dayOfYear = Math.floor((now.getTime() - startOfYear.getTime()) / (1000 * 60 * 60 * 24)) + 1
  
  // Use modulo to cycle through devotions (matching verse rotation)
  const devotionIndex = (dayOfYear - 1) % DEVOTION_REFLECTIONS.length
  const devotionContent = DEVOTION_REFLECTIONS[devotionIndex]
  
  // Try to fetch from API first
  let verse: DailyVerse
  try {
    const apiVerse = await getTodaysVerseFromAPI()
    if (apiVerse) {
      verse = apiVerse
    } else {
      // Fallback to local verse
      verse = getTodaysVerse()
    }
  } catch (error) {
    logger.warn('Failed to fetch verse from API, using local verse:', error)
    verse = getTodaysVerse()
  }
  
  return {
    scripture: verse.reference,
    text: verse.text,
    reflection: devotionContent.reflection,
    prayer: devotionContent.prayer,
    date: now.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
  }
}

/**
 * Get devotion for a specific date
 */
export async function getDevotionForDate(date: Date): Promise<DailyDevotion> {
  const dateStr = date.toISOString().split('T')[0]
  const startOfYear = new Date(date.getFullYear(), 0, 1)
  const dayOfYear = Math.floor((date.getTime() - startOfYear.getTime()) / (1000 * 60 * 60 * 24)) + 1
  
  const devotionIndex = (dayOfYear - 1) % DEVOTION_REFLECTIONS.length
  const devotionContent = DEVOTION_REFLECTIONS[devotionIndex]
  
  // Try to fetch from API for specific date
  let verse: DailyVerse
  try {
    const { fetchDailyVerses } = await import('./devotionaliumApiService')
    const response = await fetchDailyVerses(dateStr)
    if (response && response.verses && response.verses.length > 0) {
      const apiVerse = response.newTestament?.[0] || response.verses[0]
      verse = {
        text: apiVerse.text,
        reference: apiVerse.reference || `${apiVerse.book} ${apiVerse.chapter}:${apiVerse.verse}`,
      }
    } else {
      verse = getTodaysVerse() // Fallback
    }
  } catch (error) {
    logger.warn('Failed to fetch verse from API for date, using local verse:', error)
    verse = getTodaysVerse() // Fallback
  }
  
  return {
    scripture: verse.reference,
    text: verse.text,
    reflection: devotionContent.reflection,
    prayer: devotionContent.prayer,
    date: date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
  }
}

