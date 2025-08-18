<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :class="className"
  >
    <!-- Scroll background -->
    <path
      d="M8 12 Q8 8 12 8 L52 8 Q56 8 56 12 L56 52 Q56 56 52 56 L12 56 Q8 56 8 52 Z"
      :fill="color"
      opacity="0.1"
    />

    <!-- Great Image (Daniel 2) -->
    <!-- Head of gold -->
    <rect x="28" y="16" width="8" height="6" fill="#FFD700" />

    <!-- Chest/arms of silver -->
    <rect x="26" y="22" width="12" height="6" fill="#C0C0C0" />

    <!-- Belly/thighs of bronze -->
    <rect x="28" y="28" width="8" height="8" fill="#CD7F32" />

    <!-- Legs of iron -->
    <rect x="28" y="36" width="3" height="10" fill="#708090" />
    <rect x="33" y="36" width="3" height="10" fill="#708090" />

    <!-- Feet of iron/clay -->
    <rect x="26" y="46" width="4" height="4" fill="#708090" />
    <rect x="30" y="46" width="4" height="4" fill="#8B4513" />
    <rect x="34" y="46" width="4" height="4" fill="#708090" />

    <!-- Beast elements around the image -->
    <!-- Lion (Babylon) -->
    <circle cx="16" cy="20" r="3" :fill="color" opacity="0.6" />
    <polygon points="14,18 18,18 16,16" :fill="color" opacity="0.8" />

    <!-- Bear (Medo-Persia) -->
    <ellipse cx="48" cy="24" rx="4" ry="3" :fill="color" opacity="0.6" />
    <circle cx="46" cy="22" r="1" :fill="color" />
    <circle cx="50" cy="22" r="1" :fill="color" />

    <!-- Leopard (Greece) -->
    <ellipse cx="16" cy="40" rx="3" ry="2" :fill="color" opacity="0.6" />
    <circle cx="14" cy="39" r="0.5" :fill="color" />
    <circle cx="18" cy="39" r="0.5" :fill="color" />
    <!-- Wings -->
    <path d="M13 38 L11 36 L15 36 Z" :fill="color" opacity="0.4" />
    <path d="M19 38 L21 36 L17 36 Z" :fill="color" opacity="0.4" />

    <!-- Dragon (Rome/End-time power) -->
    <path d="M44 40 Q48 36 52 40 Q48 44 44 40" :fill="color" opacity="0.6" />
    <circle cx="46" cy="38" r="1" fill="red" />
    <circle cx="50" cy="38" r="1" fill="red" />

    <!-- Stone from heaven -->
    <circle cx="20" cy="12" r="2" fill="white" stroke="gold" stroke-width="1" />

    <!-- Prophetic timeline arrow -->
    <path d="M10 54 L54 54" stroke="#666" stroke-width="2" marker-end="url(#arrowhead)" />

    <!-- Arrow marker -->
    <defs>
      <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="#666" />
      </marker>
    </defs>

    <!-- Seal/scroll elements -->
    <circle cx="12" cy="8" r="2" :fill="color" opacity="0.3" />
    <circle cx="52" cy="8" r="2" :fill="color" opacity="0.3" />
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
  color: '#DC2626',
  className: '',
})
</script>
