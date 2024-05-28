<script setup lang="ts">
import { ref } from "vue";

defineProps({
  containerName: {
    type: String,
    required: true
  }
});

const collapsed = ref(true);
</script>

<template>
  <div class="w-full bg-gray-100 rounded-lg p-4 mb-4">
    <div @click="collapsed = !collapsed" class="bg-gray-200 cursor-pointer p-2 hover:bg-gray-300 rounded-xl"
         :class="{ 'rounded-t-xl': !collapsed }">
      <h2 class="text-lg font-semibold">{{ containerName }}</h2>
    </div>

    <div v-if="!collapsed" class="mt-4 pl-4">
      <slot></slot>
    </div>
  </div>
</template>
