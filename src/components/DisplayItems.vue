<script setup lang="ts">
defineProps({
  dataKey: {
    type: String,
    required: true
  },
  data: {
    type: Array<string>,
    required: true
  }
});
</script>

<template>
  <div class="flex flex-col">
    <div class="font-semibold w-32">
      {{dataKey}}:
    </div>
    <div class="ml-32">
      <div v-for="(item, index) in data" :key="index">
        {{index}}: {{item}}
      </div>
    </div>
  </div>
</template>
