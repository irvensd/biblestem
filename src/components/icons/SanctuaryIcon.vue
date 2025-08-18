<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :class="className"
  >
    <!-- Temple base -->
    <rect x="8" y="48" width="48" height="12" :fill="color" opacity="0.8" />

    <!-- Temple pillars -->
    <rect x="12" y="28" width="4" height="20" :fill="color" />
    <rect x="20" y="28" width="4" height="20" :fill="color" />
    <rect x="40" y="28" width="4" height="20" :fill="color" />
    <rect x="48" y="28" width="4" height="20" :fill="color" />

    <!-- Temple roof -->
    <polygon points="32,16 8,32 56,32" :fill="color" />

    <!-- Inner sanctuary -->
    <rect x="24" y="32" width="16" height="16" :fill="color" opacity="0.6" />

    <!-- Ark of covenant -->
    <rect x="28" y="36" width="8" height="4" :fill="color" />
    <circle cx="30" cy="34" r="1" :fill="color" />
    <circle cx="34" cy="34" r="1" :fill="color" />

    <!-- Heavenly clouds -->
    <circle cx="16" cy="12" r="4" fill="white" opacity="0.7" />
    <circle cx="20" cy="10" r="3" fill="white" opacity="0.7" />
    <circle cx="44" cy="10" r="3" fill="white" opacity="0.7" />
    <circle cx="48" cy="12" r="4" fill="white" opacity="0.7" />

    <!-- Rays of light -->
    <path d="M32 4 L34 14 L30 14 Z" fill="gold" opacity="0.8" />
    <path d="M40 6 L38 16 L42 16 Z" fill="gold" opacity="0.6" />
    <path d="M24 6 L26 16 L22 16 Z" fill="gold" opacity="0.6" />

    <!-- High priest figure (small) -->
    <circle cx="32" cy="40" r="2" :fill="color" opacity="0.8" />
    <rect x="30" y="42" width="4" height="6" :fill="color" opacity="0.8" />
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
  color: '#8B5CF6',
  className: '',
})
</script>
