<script setup lang="ts">
defineProps({
  colour: {
    type: String,
    required: false,
    default: '#fffff'
  },
  borderColour: {
    type: String,
    required: false,
    default: '#fffff'
  }
});
</script>

<template>
  <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-square-x">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path :stroke="borderColour" d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" />
    <path :stroke="colour" d="M9 9l6 6m0 -6l-6 6" />
  </svg>
</template>
