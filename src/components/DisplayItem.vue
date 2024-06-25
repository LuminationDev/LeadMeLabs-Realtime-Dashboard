<script setup lang="ts">
defineProps({
  dataKey: {
    type: String,
    required: true
  },
  data: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="flex flex-row">
    <div class="font-semibold w-32">
      {{dataKey}}:
    </div>
    <div>
      {{data}}
    </div>
  </div>
</template>
