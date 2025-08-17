<template>
  <component :is="iconComponent" v-bind="iconProps" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import SanctuaryIcon from './icons/SanctuaryIcon.vue'
import ProphecyIcon from './icons/ProphecyIcon.vue'
import ThreeAngelsIcon from './icons/ThreeAngelsIcon.vue'
import SabbathIcon from './icons/SabbathIcon.vue'

interface Props {
  studyId: string
  size?: number
  color?: string
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 24,
  className: ''
})

const iconComponent = computed(() => {
  switch (props.studyId) {
    case 'heavenly-sanctuary':
      return SanctuaryIcon
    case 'daniel-revelation':
      return ProphecyIcon
    case 'three-angels-messages':
      return ThreeAngelsIcon
    case 'sabbath-seal-of-god':
      return SabbathIcon
    default:
      return SanctuaryIcon // fallback
  }
})

const iconProps = computed(() => ({
  size: props.size,
  color: props.color,
  className: props.className
}))
</script>
