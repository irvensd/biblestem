<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :class="className"
  >
    <!-- Sky background -->
    <rect x="0" y="0" width="64" height="32" fill="url(#skyGradient)" />
    
    <!-- Earth below -->
    <ellipse cx="32" cy="56" rx="32" ry="8" :fill="color" opacity="0.3" />
    
    <!-- First Angel (center, largest) -->
    <g transform="translate(32, 16)">
      <!-- Wings -->
      <path d="M-8 0 Q-12 -4 -8 -8 Q-4 -4 0 -8 Q4 -4 8 -8 Q12 -4 8 0" fill="white" opacity="0.9" />
      
      <!-- Body -->
      <ellipse cx="0" cy="2" rx="3" ry="6" fill="white" />
      
      <!-- Head -->
      <circle cx="0" cy="-2" r="2" fill="white" />
      
      <!-- Halo -->
      <circle cx="0" cy="-2" r="3" fill="none" stroke="gold" stroke-width="0.5" />
      
      <!-- Trumpet/Gospel -->
      <rect x="-1" y="4" width="2" height="4" fill="gold" />
      
      <!-- Light rays -->
      <path d="M0 -6 L-2 -10 L2 -10 Z" fill="gold" opacity="0.7" />
      <path d="M-6 -4 L-10 -6 L-6 -8 Z" fill="gold" opacity="0.5" />
      <path d="M6 -4 L10 -6 L6 -8 Z" fill="gold" opacity="0.5" />
    </g>
    
    <!-- Second Angel (left) -->
    <g transform="translate(16, 20)">
      <!-- Wings -->
      <path d="M-6 0 Q-8 -3 -6 -6 Q-3 -3 0 -6 Q3 -3 6 -6 Q8 -3 6 0" fill="white" opacity="0.8" />
      
      <!-- Body -->
      <ellipse cx="0" cy="2" rx="2" ry="4" fill="white" />
      
      <!-- Head -->
      <circle cx="0" cy="-1" r="1.5" fill="white" />
      
      <!-- Halo -->
      <circle cx="0" cy="-1" r="2.5" fill="none" stroke="gold" stroke-width="0.5" />
      
      <!-- Message scroll -->
      <rect x="-1" y="3" width="2" height="3" fill="#8B4513" />
    </g>
    
    <!-- Third Angel (right) -->
    <g transform="translate(48, 20)">
      <!-- Wings -->
      <path d="M-6 0 Q-8 -3 -6 -6 Q-3 -3 0 -6 Q3 -3 6 -6 Q8 -3 6 0" fill="white" opacity="0.8" />
      
      <!-- Body -->
      <ellipse cx="0" cy="2" rx="2" ry="4" fill="white" />
      
      <!-- Head -->
      <circle cx="0" cy="-1" r="1.5" fill="white" />
      
      <!-- Halo -->
      <circle cx="0" cy="-1" r="2.5" fill="none" stroke="gold" stroke-width="0.5" />
      
      <!-- Warning cup -->
      <path d="M-1 3 L1 3 L1.5 6 L-1.5 6 Z" fill="red" opacity="0.7" />
    </g>
    
    <!-- Message banners -->
    <rect x="8" y="32" width="16" height="6" fill="white" opacity="0.9" stroke="gold" stroke-width="0.5" />
    <text x="16" y="37" text-anchor="middle" font-size="4" fill="#333">GOSPEL</text>
    
    <rect x="24" y="36" width="16" height="6" fill="white" opacity="0.9" stroke="gold" stroke-width="0.5" />
    <text x="32" y="41" text-anchor="middle" font-size="4" fill="#333">BABYLON</text>
    
    <rect x="40" y="32" width="16" height="6" fill="white" opacity="0.9" stroke="gold" stroke-width="0.5" />
    <text x="48" y="37" text-anchor="middle" font-size="4" fill="#333">WARNING</text>
    
    <!-- Global coverage lines -->
    <path d="M4 48 Q32 44 60 48" stroke="#ccc" stroke-width="1" stroke-dasharray="2,2" />
    <path d="M8 52 Q32 48 56 52" stroke="#ccc" stroke-width="1" stroke-dasharray="2,2" />
    
    <!-- Sky gradient -->
    <defs>
      <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color:#87CEEB;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#E0F6FF;stop-opacity:1" />
      </linearGradient>
    </defs>
  </svg>
</template>

<script setup lang="ts">
interface Props {
  size?: number
  color?: string
  className?: string
}

withDefaults(defineProps<Props>(), {
  size: 24,
  color: '#2563EB',
  className: ''
})
</script>
