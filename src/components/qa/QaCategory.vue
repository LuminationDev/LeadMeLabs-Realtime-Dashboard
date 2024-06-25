<script setup lang="ts">
import { ref, computed } from "vue";
import type { PropType } from "vue";
import type { Category, Check } from "@/interfaces/QaCheck.ts";
import QaCard from "@/components/qa/QaCard.vue";

const props = defineProps({
  categoryId: {
    type: [String, Number],
    required: true
  },
  category: {
    type: Object as PropType<Category>,
    required: true
  },
  search: {
    type: Boolean,
    required: true
  }
});

const collapsed = ref(true);

// Compute the status of the category
const categoryStatus = computed(() => {
  const hasFailed = Object.values(props.category).some((check: Check) => check._passedStatus === 'failed');
  const hasWarning = Object.values(props.category).some((check: Check) => check._passedStatus === 'warning');
  const hasPassed = Object.values(props.category).some((check: Check) => check._passedStatus === 'passed');

  if (hasFailed) {
    return 'failed';
  } else if (hasWarning) {
    return 'warning';
  } else if (hasPassed) {
    return 'passed';
  } else {
    return 'unknown'; // No checks with status 'failed', 'warning', or 'passed'
  }
});
</script>

<template>
  <div>
    <div class="text-md font-semibold px-2 rounded-lg cursor-pointer hover:bg-gray-300" @click="collapsed = !collapsed"
      :class="{
        'text-red-500': categoryStatus === 'failed',
        'text-orange-500': categoryStatus === 'warning',
        'text-green-500': categoryStatus === 'passed',
      }">
      <span class="text-sm" v-if="!collapsed || search">[-]</span><span class="text-sm" v-else>[+]</span> {{ categoryId }}
    </div>

    <!--Checks and Id-->
    <div v-if="!collapsed || search">
      <template v-for="(check, checkId) in category" :key="checkId">
        <QaCard v-if="check" class="mt-2 mr-2" :checkId="checkId" :check="check" />
      </template>
    </div>
  </div>
</template>
