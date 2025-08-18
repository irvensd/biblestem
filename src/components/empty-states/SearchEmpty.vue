<template>
  <EmptyState
    illustration="search"
    :title="title"
    :description="description"
    action-text="Browse Studies"
    action-to="/study-series"
    secondary-text="Clear Search"
    @secondary-action="$emit('clear-search')"
  />
</template>

<script setup lang="ts">
import EmptyState from './EmptyState.vue'

interface Props {
  query?: string
}

const props = defineProps<Props>()

defineEmits(['clear-search'])

const title = props.query ? `No results for "${props.query}"` : 'Start your search'

const description = props.query
  ? "Try adjusting your search terms or browse our study series to find what you're looking for."
  : 'Search through our extensive library of Bible studies, lessons, and devotions to find content that speaks to your heart.'
</script>
