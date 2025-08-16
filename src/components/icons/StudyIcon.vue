<template>
  <div class="w-full h-full flex items-center justify-center">
    <!-- Bible Study Preparation Icon -->
    <svg v-if="iconType === 'bible-study-prep'" class="w-12 h-12" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <!-- Open Bible -->
      <path d="M15 30 L85 30 L85 75 L80 80 L20 80 L15 75 Z" fill="currentColor" opacity="0.9"/>
      <!-- Bible pages -->
      <path d="M20 35 L80 35 L80 70 L20 70 Z" fill="white" opacity="0.8"/>
      <line x1="25" y1="40" x2="75" y2="40" stroke="currentColor" stroke-width="1" opacity="0.6"/>
      <line x1="25" y1="45" x2="70" y2="45" stroke="currentColor" stroke-width="1" opacity="0.6"/>
      <line x1="25" y1="50" x2="75" y2="50" stroke="currentColor" stroke-width="1" opacity="0.6"/>
      <line x1="25" y1="55" x2="65" y2="55" stroke="currentColor" stroke-width="1" opacity="0.6"/>
      <!-- Center divider -->
      <line x1="50" y1="35" x2="50" y2="70" stroke="currentColor" stroke-width="2" opacity="0.4"/>
      <!-- Prayer hands above -->
      <path d="M45 15 L45 25 L47 28 L50 25 L53 28 L55 25 L55 15 L50 10 Z" fill="white" opacity="0.9"/>
      <path d="M47 12 L47 22 L50 18 L53 22 L53 12" stroke="currentColor" stroke-width="1.5" fill="none"/>
    </svg>

    <!-- Bible Origins Icon -->
    <svg v-else-if="iconType === 'bible-origins'" class="w-12 h-12" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <!-- Ancient scroll -->
      <ellipse cx="20" cy="50" rx="8" ry="25" fill="currentColor" opacity="0.8"/>
      <ellipse cx="80" cy="50" rx="8" ry="25" fill="currentColor" opacity="0.8"/>
      <rect x="20" y="25" width="60" height="50" fill="white" opacity="0.9"/>
      <!-- Ancient text lines -->
      <line x1="25" y1="35" x2="75" y2="35" stroke="currentColor" stroke-width="1.5" opacity="0.7"/>
      <line x1="25" y1="42" x2="70" y2="42" stroke="currentColor" stroke-width="1.5" opacity="0.7"/>
      <line x1="25" y1="49" x2="75" y2="49" stroke="currentColor" stroke-width="1.5" opacity="0.7"/>
      <line x1="25" y1="56" x2="65" y2="56" stroke="currentColor" stroke-width="1.5" opacity="0.7"/>
      <line x1="25" y1="63" x2="75" y2="63" stroke="currentColor" stroke-width="1.5" opacity="0.7"/>
      <!-- Feather quill -->
      <path d="M65 15 Q70 20 75 25 Q70 30 65 35 L60 30 Q65 25 65 20 Z" fill="currentColor" opacity="0.6"/>
      <line x1="65" y1="25" x2="55" y2="35" stroke="currentColor" stroke-width="2"/>
    </svg>

    <!-- Bible Timeline Icon -->
    <svg v-else-if="iconType === 'bible-timeline'" class="w-12 h-12" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <!-- Timeline arrow -->
      <line x1="15" y1="50" x2="85" y2="50" stroke="currentColor" stroke-width="3"/>
      <polygon points="85,50 80,45 80,55" fill="currentColor"/>
      <!-- Timeline markers -->
      <circle cx="25" cy="50" r="4" fill="white" stroke="currentColor" stroke-width="2"/>
      <circle cx="40" cy="50" r="4" fill="white" stroke="currentColor" stroke-width="2"/>
      <circle cx="55" cy="50" r="4" fill="white" stroke="currentColor" stroke-width="2"/>
      <circle cx="70" cy="50" r="4" fill="white" stroke="currentColor" stroke-width="2"/>
      <!-- Event labels -->
      <text x="25" y="35" text-anchor="middle" fill="white" font-size="8" font-weight="bold">Creation</text>
      <text x="40" y="35" text-anchor="middle" fill="white" font-size="8" font-weight="bold">Fall</text>
      <text x="55" y="35" text-anchor="middle" fill="white" font-size="8" font-weight="bold">Christ</text>
      <text x="70" y="35" text-anchor="middle" fill="white" font-size="8" font-weight="bold">Eternity</text>
      <!-- Crown above -->
      <path d="M45 15 L48 20 L50 18 L52 20 L55 15 L52 12 L48 12 Z" fill="white" opacity="0.9"/>
      <circle cx="47" cy="16" r="1.5" fill="currentColor"/>
      <circle cx="50" cy="14" r="1.5" fill="currentColor"/>
      <circle cx="53" cy="16" r="1.5" fill="currentColor"/>
    </svg>

    <!-- History Prophecy Icon -->
    <svg v-else-if="iconType === 'history-prophecy'" class="w-12 h-12" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <!-- Ancient column -->
      <rect x="35" y="60" width="30" height="25" fill="currentColor" opacity="0.8"/>
      <rect x="32" y="55" width="36" height="8" fill="currentColor" opacity="0.9"/>
      <rect x="30" y="50" width="40" height="8" fill="currentColor" opacity="0.7"/>
      <!-- Column details -->
      <line x1="40" y1="60" x2="40" y2="85" stroke="white" stroke-width="1" opacity="0.6"/>
      <line x1="45" y1="60" x2="45" y2="85" stroke="white" stroke-width="1" opacity="0.6"/>
      <line x1="50" y1="60" x2="50" y2="85" stroke="white" stroke-width="1" opacity="0.6"/>
      <line x1="55" y1="60" x2="55" y2="85" stroke="white" stroke-width="1" opacity="0.6"/>
      <line x1="60" y1="60" x2="60" y2="85" stroke="white" stroke-width="1" opacity="0.6"/>
      <!-- Scroll with prophecy -->
      <rect x="15" y="20" width="25" height="35" rx="3" fill="white" opacity="0.9"/>
      <line x1="20" y1="28" x2="35" y2="28" stroke="currentColor" stroke-width="1" opacity="0.7"/>
      <line x1="20" y1="33" x2="32" y2="33" stroke="currentColor" stroke-width="1" opacity="0.7"/>
      <line x1="20" y1="38" x2="35" y2="38" stroke="currentColor" stroke-width="1" opacity="0.7"/>
      <line x1="20" y1="43" x2="30" y2="43" stroke="currentColor" stroke-width="1" opacity="0.7"/>
      <!-- Star of prophecy -->
      <path d="M75 30 L77 35 L82 35 L78 38 L80 43 L75 40 L70 43 L72 38 L68 35 L73 35 Z" fill="white" opacity="0.9"/>
    </svg>

    <!-- Jesus Center Icon -->
    <svg v-else-if="iconType === 'jesus-center'" class="w-12 h-12" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <!-- Central cross -->
      <rect x="47" y="25" width="6" height="50" fill="white" opacity="0.9"/>
      <rect x="30" y="45" width="40" height="6" fill="white" opacity="0.9"/>
      <!-- Radial light beams -->
      <line x1="50" y1="15" x2="50" y2="5" stroke="white" stroke-width="3" opacity="0.8"/>
      <line x1="50" y1="85" x2="50" y2="95" stroke="white" stroke-width="3" opacity="0.8"/>
      <line x1="15" y1="50" x2="5" y2="50" stroke="white" stroke-width="3" opacity="0.8"/>
      <line x1="85" y1="50" x2="95" y2="50" stroke="white" stroke-width="3" opacity="0.8"/>
      <line x1="25" y1="25" x2="18" y2="18" stroke="white" stroke-width="2" opacity="0.6"/>
      <line x1="75" y1="25" x2="82" y2="18" stroke="white" stroke-width="2" opacity="0.6"/>
      <line x1="25" y1="75" x2="18" y2="82" stroke="white" stroke-width="2" opacity="0.6"/>
      <line x1="75" y1="75" x2="82" y2="82" stroke="white" stroke-width="2" opacity="0.6"/>
      <!-- Crown above cross -->
      <path d="M42 20 L45 15 L48 18 L50 15 L52 18 L55 15 L58 20 L55 22 L45 22 Z" fill="currentColor" opacity="0.8"/>
      <circle cx="46" cy="18" r="1" fill="white"/>
      <circle cx="50" cy="16" r="1" fill="white"/>
      <circle cx="54" cy="18" r="1" fill="white"/>
    </svg>

    <!-- Salvation Cross Icon -->
    <svg v-else-if="iconType === 'salvation-cross'" class="w-12 h-12" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <!-- Large cross -->
      <rect x="45" y="20" width="10" height="60" fill="white" opacity="0.9"/>
      <rect x="25" y="40" width="50" height="10" fill="white" opacity="0.9"/>
      <!-- Cross shadow/depth -->
      <rect x="55" y="22" width="3" height="60" fill="currentColor" opacity="0.3"/>
      <rect x="25" y="50" width="50" height="3" fill="currentColor" opacity="0.3"/>
      <!-- Hearts around cross representing love -->
      <path d="M20 30 Q15 25 10 30 Q15 35 20 30" fill="white" opacity="0.7"/>
      <path d="M90 30 Q85 25 80 30 Q85 35 90 30" fill="white" opacity="0.7"/>
      <path d="M20 70 Q15 65 10 70 Q15 75 20 70" fill="white" opacity="0.7"/>
      <path d="M90 70 Q85 65 80 70 Q85 75 90 70" fill="white" opacity="0.7"/>
      <!-- Chains broken at bottom -->
      <circle cx="35" cy="85" r="4" fill="none" stroke="white" stroke-width="2" opacity="0.6"/>
      <circle cx="45" cy="85" r="4" fill="none" stroke="white" stroke-width="2" opacity="0.6"/>
      <line x1="37" y1="83" x2="43" y2="87" stroke="white" stroke-width="3" opacity="0.8"/>
      <circle cx="55" cy="85" r="4" fill="none" stroke="white" stroke-width="2" opacity="0.6"/>
      <circle cx="65" cy="85" r="4" fill="none" stroke="white" stroke-width="2" opacity="0.6"/>
      <line x1="57" y1="83" x2="63" y2="87" stroke="white" stroke-width="3" opacity="0.8"/>
    </svg>

    <!-- Scripture Study Icon -->
    <svg v-else-if="iconType === 'scripture-study'" class="w-12 h-12" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <!-- Magnifying glass handle -->
      <circle cx="40" cy="40" r="20" fill="none" stroke="white" stroke-width="4" opacity="0.9"/>
      <line x1="55" y1="55" x2="75" y2="75" stroke="white" stroke-width="6" stroke-linecap="round" opacity="0.9"/>
      <!-- Bible text under magnification -->
      <line x1="32" y1="35" x2="48" y2="35" stroke="currentColor" stroke-width="1.5" opacity="0.8"/>
      <line x1="32" y1="40" x2="45" y2="40" stroke="currentColor" stroke-width="1.5" opacity="0.8"/>
      <line x1="32" y1="45" x2="48" y2="45" stroke="currentColor" stroke-width="1.5" opacity="0.8"/>
      <!-- Open Bible behind -->
      <rect x="15" y="60" width="40" height="25" fill="currentColor" opacity="0.7"/>
      <rect x="17" y="62" width="36" height="21" fill="white" opacity="0.8"/>
      <line x1="35" y1="62" x2="35" y2="83" stroke="currentColor" stroke-width="1" opacity="0.5"/>
      <line x1="20" y1="67" x2="32" y2="67" stroke="currentColor" stroke-width="1" opacity="0.6"/>
      <line x1="20" y1="71" x2="30" y2="71" stroke="currentColor" stroke-width="1" opacity="0.6"/>
      <line x1="20" y1="75" x2="32" y2="75" stroke="currentColor" stroke-width="1" opacity="0.6"/>
      <line x1="38" y1="67" x2="50" y2="67" stroke="currentColor" stroke-width="1" opacity="0.6"/>
      <line x1="38" y1="71" x2="48" y2="71" stroke="currentColor" stroke-width="1" opacity="0.6"/>
      <line x1="38" y1="75" x2="50" y2="75" stroke="currentColor" stroke-width="1" opacity="0.6"/>
    </svg>

    <!-- Daily Living Icon -->
    <svg v-else-if="iconType === 'daily-living'" class="w-12 h-12" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <!-- House/home -->
      <polygon points="50,15 20,45 25,45 25,80 75,80 75,45 80,45" fill="currentColor" opacity="0.8"/>
      <rect x="25" y="45" width="50" height="35" fill="white" opacity="0.9"/>
      <!-- Door -->
      <rect x="42" y="60" width="16" height="20" fill="currentColor" opacity="0.7"/>
      <circle cx="52" cy="70" r="1.5" fill="white"/>
      <!-- Windows -->
      <rect x="32" y="52" width="10" height="10" fill="currentColor" opacity="0.6"/>
      <rect x="58" y="52" width="10" height="10" fill="currentColor" opacity="0.6"/>
      <line x1="37" y1="52" x2="37" y2="62" stroke="white" stroke-width="1"/>
      <line x1="32" y1="57" x2="42" y2="57" stroke="white" stroke-width="1"/>
      <line x1="63" y1="52" x2="63" y2="62" stroke="white" stroke-width="1"/>
      <line x1="58" y1="57" x2="68" y2="57" stroke="white" stroke-width="1"/>
      <!-- Heart in center representing love in the home -->
      <path d="M50 35 Q45 30 40 35 Q45 40 50 35 Q55 30 60 35 Q55 40 50 35" fill="white" opacity="0.8"/>
      <!-- Bible on doorstep -->
      <rect x="35" y="78" width="8" height="6" fill="currentColor" opacity="0.9"/>
      <line x1="39" y1="78" x2="39" y2="84" stroke="white" stroke-width="0.5"/>
    </svg>

    <!-- Default fallback - display first letter -->
    <span v-else class="text-white font-bold text-lg">
      {{ fallbackLetter }}
    </span>
  </div>
</template>

<script setup lang="ts">
interface Props {
  iconType: string
  fallbackLetter?: string
}

defineProps<Props>()
</script>
