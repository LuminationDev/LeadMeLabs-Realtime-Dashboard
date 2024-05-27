<script setup lang="ts">
import { useStateStore } from '@/store/stateStore.ts'; // Update the path to your store file
const stateStore = useStateStore();

defineProps({
  path: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
  <router-link
      :to="{ path }"
      :class="{ 'text-white': stateStore.loggedIn, 'cursor-not-allowed text-gray-400': !stateStore.loggedIn }"
      :aria-disabled="!stateStore.loggedIn"
  >
    {{title}}
  </router-link>
</template>
