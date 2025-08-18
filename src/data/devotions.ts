export interface DailyDevotion {
  id: string
  date: string
  title: string
  verse: {
    reference: string
    text: string
  }
  reflection: string
  prayer: string
  keyThought: string
}

export const devotions: DailyDevotion[] = [
  {
    id: 'dev-001',
    date: '2024-01-15',
    title: 'Walking in the Light',
    verse: {
      reference: '1 John 1:7',
      text: 'But if we walk in the light, as he is in the light, we have fellowship with one another, and the blood of Jesus, his Son, purifies us from all sin.',
    },
    reflection:
      "Walking in the light isn't about being perfect—it's about being honest. When we live transparently before God, acknowledging our struggles and seeking His grace, we experience true fellowship with Him and others. The light of Christ doesn't expose our flaws to shame us, but to heal us. Today, consider what areas of your life need to be brought into His loving light.",
    prayer:
      "Lord, help me to walk honestly before You today. Show me any areas where I'm hiding in darkness, and give me courage to step into Your light. Thank You for Your grace that purifies and heals. Amen.",
    keyThought: 'Transparency with God leads to transformation by God.',
  },
  {
    id: 'dev-002',
    date: '2024-01-16',
    title: 'Be Still and Know',
    verse: {
      reference: 'Psalm 46:10',
      text: 'Be still, and know that I am God; I will be exalted among the nations, I will be exalted in the earth.',
    },
    reflection:
      "In our fast-paced world, stillness can feel uncomfortable. Yet God invites us to pause, breathe, and remember who He is. The Hebrew word for 'be still' can also mean 'let go' or 'release.' What are you holding onto today that needs to be released into God's capable hands? In the quiet moments, we rediscover His sovereignty and find peace for our souls.",
    prayer:
      'Father, help me to slow down and find moments of stillness with You today. Teach me to release my worries and trust in Your perfect control. In the silence, speak to my heart. Amen.',
    keyThought: 'In stillness, we find strength. In silence, we hear His voice.',
  },
  {
    id: 'dev-003',
    date: '2024-01-17',
    title: 'Love One Another',
    verse: {
      reference: 'John 13:34-35',
      text: 'A new command I give you: Love one another. As I have loved you, so you must love one another. By this everyone will know that you are my disciples, if you love one another.',
    },
    reflection:
      "Love is not just a feeling—it's a choice, an action, a way of life. Jesus didn't say people would recognize us by our theology, our church attendance, or our moral behavior. He said they would know us by our love. This love isn't human affection, but divine love flowing through us. Today, look for opportunities to love as Jesus loves: sacrificially, unconditionally, and practically.",
    prayer:
      'Jesus, fill my heart with Your love today. Help me to love others not based on how they treat me, but based on how You have loved me. Make my life a reflection of Your love. Amen.',
    keyThought: 'Love is the signature of a true disciple.',
  },
  {
    id: 'dev-004',
    date: '2024-01-18',
    title: 'Fear Not',
    verse: {
      reference: 'Isaiah 41:10',
      text: 'So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.',
    },
    reflection:
      "Fear whispers lies: 'You're alone,' 'You're not strong enough,' 'You'll fail.' But God speaks truth over our fears. He promises His presence, His strength, and His unfailing support. Notice that God doesn't promise to remove all challenges, but He promises to walk through them with us. Whatever you're facing today, you don't face it alone.",
    prayer:
      'Lord, when fear tries to overwhelm me, remind me of Your presence. Replace my anxiety with trust, my worry with worship. Thank You for being my strength when I am weak. Amen.',
    keyThought: "Fear fades when faith in God's presence grows.",
  },
  {
    id: 'dev-005',
    date: '2024-01-19',
    title: 'New Mercies',
    verse: {
      reference: 'Lamentations 3:22-23',
      text: "Because of the Lord's great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness.",
    },
    reflection:
      "Yesterday's failures don't define today's possibilities. God's mercy isn't a limited resource that runs out—it's renewed fresh every morning like dew on the grass. No matter what mistakes you made yesterday, no matter how far you feel you've fallen, God's compassions are new today. He gives you a fresh start, a clean slate, another chance to walk in His grace.",
    prayer:
      'Thank You, Lord, for Your mercies that are new every morning. Help me to receive Your grace afresh today and extend that same mercy to others. Your faithfulness gives me hope. Amen.',
    keyThought: 'Every sunrise brings fresh mercy and new hope.',
  },
  {
    id: 'dev-006',
    date: '2024-01-20',
    title: 'Seek First',
    verse: {
      reference: 'Matthew 6:33',
      text: 'But seek first his kingdom and his righteousness, and all these things will be given to you as well.',
    },
    reflection:
      "It's easy to seek God's gifts before seeking God Himself. We pray for provision, healing, and guidance—all good things—but Jesus calls us to seek His kingdom first. When we prioritize God's will, His ways, and His glory, everything else finds its proper place. This doesn't mean we won't have needs, but that our needs will be met as we align our hearts with His purposes.",
    prayer:
      'Father, help me seek You first today—not just Your blessings, but Your heart. Align my desires with Your will and my priorities with Your kingdom. I trust You to provide what I need. Amen.',
    keyThought: 'When God is first, everything else falls into place.',
  },
  {
    id: 'dev-007',
    date: '2024-01-21',
    title: 'Count It Joy',
    verse: {
      reference: 'James 1:2-3',
      text: 'Consider it pure joy, my brothers and sisters, whenever you face trials of many kinds, because you know that the testing of your faith produces perseverance.',
    },
    reflection:
      "James doesn't say 'pretend your trials are joyful' or 'fake happiness in hard times.' He says to consider it joy—to thoughtfully recognize that God uses difficulties to build something beautiful in us. Trials aren't pleasant, but they can be purposeful. Like a muscle grows stronger under resistance, our faith grows stronger under pressure. Today, ask God to show you how He might be working in your challenges.",
    prayer:
      "Lord, I don't enjoy difficult times, but I trust that You can use them for good. Give me patience in trials and help me see how You're growing my faith through challenges. Amen.",
    keyThought: 'Trials test our faith, but they also strengthen our faith.',
  },
]

export const getTodaysDevotion = (): DailyDevotion => {
  // For demo purposes, cycle through devotions based on day of year
  const today = new Date()
  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24),
  )
  const index = (dayOfYear - 1) % devotions.length
  return devotions[index]
}

export const getDevotionByDate = (date: string): DailyDevotion | undefined => {
  return devotions.find((devotion) => devotion.date === date)
}
