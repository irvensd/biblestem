<template>
  <EmptyState
    illustration="studies"
    :title="title"
    :description="description"
    :action-text="actionText"
    :action-to="actionTo"
    :secondary-text="secondaryTextValue"
    @secondary-action="$emit('secondary-action')"
  />
</template>

<script setup lang="ts">
import EmptyState from './EmptyState.vue'

interface Props {
  type?: 'completed' | 'in-progress' | 'recommended' | 'favorites'
}

const props = withDefaults(defineProps<Props>(), {
  type: 'completed',
})

defineEmits(['secondary-action'])

const configs = {
  completed: {
    title: 'No completed studies yet',
    description:
      'Complete your first Bible study to see your progress and achievements here. Every finished study brings you closer to deeper spiritual understanding.',
    actionText: 'Start a Study',
    actionTo: '/study-series',
    secondaryText: 'View Study Tips',
  },
  'in-progress': {
    title: 'No studies in progress',
    description:
      'Begin your Bible study journey today. Choose from our collection of free and premium studies designed to deepen your faith and understanding.',
    actionText: 'Browse Studies',
    actionTo: '/study-series',
    secondaryText: 'How to Study',
  },
  recommended: {
    title: 'Discovering recommendations',
    description:
      'Complete a few studies to get personalized recommendations based on your interests and spiritual growth journey.',
    actionText: 'Explore Studies',
    actionTo: '/study-series',
    secondaryText: null,
  },
  favorites: {
    title: 'No favorite studies',
    description:
      'Mark studies as favorites to quickly access them later. Your favorite studies will appear here for easy reference.',
    actionText: 'Browse Studies',
    actionTo: '/study-series',
    secondaryText: 'How to favorite',
  },
}

const config = configs[props.type]
const { title, description, actionText, actionTo, secondaryText } = config

const secondaryTextValue = secondaryText === null ? undefined : secondaryText
</script>
