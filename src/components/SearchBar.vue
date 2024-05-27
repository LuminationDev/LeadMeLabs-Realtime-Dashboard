<script setup lang="ts">
const searchQuery = defineModel('searchQuery');

defineProps({
  placeHolder: {
    type: String,
    required: true
  }
});
</script>

<template>
  <!-- Search Input -->
  <input type="text"
         v-model="searchQuery"
         :placeholder="placeHolder"
         class="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-gray-800">
</template>
