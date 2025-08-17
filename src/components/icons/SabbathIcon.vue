<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :class="className"
  >
    <!-- Sky gradient background -->
    <rect x="0" y="0" width="64" height="40" fill="url(#sabbathSky)" />

    <!-- Ground -->
    <rect x="0" y="40" width="64" height="24" :fill="color" opacity="0.3" />

    <!-- Sun setting -->
    <circle cx="16" cy="20" r="8" fill="url(#sunGradient)" />

    <!-- Sun rays -->
    <path d="M16 4 L16 12" stroke="gold" stroke-width="2" />
    <path d="M4 20 L12 20" stroke="gold" stroke-width="2" />
    <path d="M28 20 L36 20" stroke="gold" stroke-width="2" />
    <path d="M9.17 9.17 L14.34 14.34" stroke="gold" stroke-width="1.5" />
    <path d="M22.83 9.17 L17.66 14.34" stroke="gold" stroke-width="1.5" />
    <path d="M9.17 30.83 L14.34 25.66" stroke="gold" stroke-width="1.5" />
    <path d="M22.83 30.83 L17.66 25.66" stroke="gold" stroke-width="1.5" />

    <!-- Mountains silhouette -->
    <path
      d="M0 32 L8 24 L16 28 L24 20 L32 24 L40 18 L48 22 L56 16 L64 20 L64 40 L0 40 Z"
      fill="#4A5568"
      opacity="0.6"
    />

    <!-- Trees -->
    <path d="M40 32 L42 40 L38 40 Z" fill="#2D5016" />
    <circle cx="40" cy="32" r="3" fill="#22543D" />

    <path d="M52 34 L54 40 L50 40 Z" fill="#2D5016" />
    <circle cx="52" cy="34" r="2.5" fill="#22543D" />

    <!-- Sabbath candles -->
    <g transform="translate(32, 24)">
      <!-- Table -->
      <ellipse cx="0" cy="16" rx="12" ry="4" :fill="color" opacity="0.4" />

      <!-- Candles -->
      <rect x="-6" y="8" width="2" height="8" fill="#8B4513" />
      <rect x="4" y="8" width="2" height="8" fill="#8B4513" />

      <!-- Flames -->
      <ellipse cx="-5" cy="6" rx="1.5" ry="3" fill="orange" />
      <ellipse cx="5" cy="6" rx="1.5" ry="3" fill="orange" />

      <!-- Challah bread -->
      <ellipse cx="0" cy="14" rx="4" ry="2" fill="#DEB887" />

      <!-- Wine cup -->
      <rect x="8" y="12" width="2" height="4" fill="#722F37" />
    </g>

    <!-- Stars beginning to appear -->
    <circle cx="48" cy="8" r="1" fill="white" opacity="0.8" />
    <circle cx="56" cy="12" r="0.8" fill="white" opacity="0.7" />
    <circle cx="52" cy="6" r="0.6" fill="white" opacity="0.6" />
    <circle cx="60" cy="10" r="0.7" fill="white" opacity="0.5" />

    <!-- Sabbath blessing text curve -->
    <path id="blessingCurve" d="M8 48 Q32 52 56 48" fill="none" />
    <text font-size="6" fill="#666" opacity="0.7">
      <textPath href="#blessingCurve" startOffset="50%" text-anchor="middle">
        Remember the Sabbath day
      </textPath>
    </text>

    <!-- Seven day marker -->
    <g transform="translate(4, 52)">
      <circle cx="0" cy="0" r="6" :fill="color" opacity="0.2" />
      <text x="0" y="2" text-anchor="middle" font-size="8" font-weight="bold" :fill="color">7</text>
    </g>

    <!-- Gradients -->
    <defs>
      <linearGradient id="sabbathSky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color: #1a202c; stop-opacity: 1" />
        <stop offset="40%" style="stop-color: #ff6b35; stop-opacity: 1" />
        <stop offset="70%" style="stop-color: #f7931e; stop-opacity: 1" />
        <stop offset="100%" style="stop-color: #ffdc00; stop-opacity: 1" />
      </linearGradient>

      <radialGradient id="sunGradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" style="stop-color: #ffdc00; stop-opacity: 1" />
        <stop offset="70%" style="stop-color: #ff6b35; stop-opacity: 1" />
        <stop offset="100%" style="stop-color: #d63031; stop-opacity: 0.8" />
      </radialGradient>
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
  color: '#4F46E5',
  className: '',
})
</script>
