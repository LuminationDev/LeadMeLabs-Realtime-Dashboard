<script setup lang="ts">
import { computed } from "vue";
import type { PropType } from "vue";
import type { Check } from "@/types/QaCheck";

const props = defineProps({
  checkId: {
    type: [String, Number],
    required: true
  },
  check: {
    type: Object as PropType<Check>,
    required: true
  }
});

const statusClass = computed(() => {
  switch (props.check._passedStatus) {
    case 'failed':
      return 'text-red-500';
    case 'passed':
      return 'text-green-500';
    case 'detail':
      return 'text-blue-500';
    case 'warning':
      return 'text-orange-500';
    default:
      return '';
  }
});
</script>

<template>
  <div class="bg-gray-100 rounded-lg shadow-sm p-2">
    <p class="text-sm">{{ checkId }}</p>
    <div class="flex flex-col mt-1">
      <div v-if="check._message" class="text-xs">
        Message: <span :class="statusClass">{{ check._message }}</span>
      </div>
      <div class="text-xs">
        Status: <span :class="statusClass">{{ check._passedStatus }}</span>
      </div>
    </div>
  </div>
</template>
