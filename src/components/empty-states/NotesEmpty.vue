<template>
  <EmptyState
    illustration="notes"
    title="No notes yet"
    description="Start taking notes during your Bible study sessions to capture insights, questions, and reflections. Your notes will appear here for easy reference."
    action-text="Start Studying"
    action-to="/study-series"
    secondary-text="Learn about note-taking"
    @secondary-action="showNoteHelp"
  />
</template>

<script setup lang="ts">
import EmptyState from './EmptyState.vue'

const showNoteHelp = () => {
  // This could open a modal or navigate to a help section
  alert('Note-taking tips:\n\n• Use different note types for different purposes\n• Tag your notes for easy organization\n• Make notes private if they\'re personal\n• Review your notes regularly for deeper insight')
}
</script>
