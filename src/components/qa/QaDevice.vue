<script setup lang="ts">
import { computed, ref } from "vue";
import type { PropType } from "vue";
import type { Device, Category, Check } from "@/interfaces/QaCheck.ts";
import QaCategory from "@/components/qa/QaCategory.vue";

const props = defineProps({
  deviceId: {
    type: [String, Number],
    required: true
  },
  device: {
    type: Object as PropType<Device>,
    required: true
  }
});

const searchQuery = ref('');
const selectedStatus = ref('all');
const collapsed = ref(true);
const deviceName = computed(() => {
  if(props.deviceId === 'nuc') {
    return props.deviceId.toUpperCase();
  } else {
    return `Station ${props.deviceId}`
  }
});


// Compute filtered categories based on search query and selected status
const filteredCategories = computed(() => {
  let filtered: { [key: string]: Category } = {};

  // Filtering based on search query and selected status
  for (const categoryId in props.device) {
    if (categoryId !== '_Timestamp') {
      const filteredChecks: Category = {};
      for (const checkId in props.device[categoryId]) {
        const check: Check = props.device[categoryId][checkId];
        const matchSearch = !searchQuery.value || (check._id && check._id.toLowerCase().includes(searchQuery.value.toLowerCase()));
        const matchStatus = selectedStatus.value === 'all' || check._passedStatus === selectedStatus.value;

        if (matchSearch && matchStatus) {
          filteredChecks[checkId] = check;
        }
      }
      if (Object.keys(filteredChecks).length > 0) {
        filtered[categoryId] = filteredChecks;
      }
    }
  }

  return filtered as unknown as { [key: string]: Category };
});

// Compute the overall status of the filtered categories
const overallCategoryStatus = computed(() => {
  let hasFailed = false;
  let hasWarning = false;
  let hasPassed = false;

  for (const categoryId in filteredCategories.value) {
    for (const checkId in filteredCategories.value[categoryId]) {
      const check: Check = filteredCategories.value[categoryId][checkId];
      if (check._passedStatus === 'failed') {
        hasFailed = true;
      } else if (check._passedStatus === 'warning') {
        hasWarning = true;
      } else if (check._passedStatus === 'passed') {
        hasPassed = true;
      }
    }
  }

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
  <div class="w-full text-left bg-gray-200 rounded-lg px-2 mb-4">
    <div @click="collapsed = !collapsed" class="bg-gray-200 cursor-pointer p-2 hover:bg-gray-300 rounded-xl"
         :class="{ 'rounded-t-xl': !collapsed }">
      <div :class="{
        'text-red-500': overallCategoryStatus === 'failed',
        'text-orange-500': overallCategoryStatus === 'warning',
        'text-green-500': overallCategoryStatus === 'passed',
      }" class="text-lg font-semibold">{{ deviceName }}</div>

      <!-- Render timestamp -->
      <div v-if="device && device._Timestamp" class="text-sm font-semibold mb-2">{{ device._Timestamp }}</div>
    </div>

    <!--Categories and Id-->
    <div v-if="!collapsed" class="px-4">
      <div class="flex flex-row mr-4">
        <!-- Search Input -->
        <div class="w-2/3 flex flex-col">
          <label for="searchInput">Search by check id</label>
          <input id="searchInput" type="text" v-model="searchQuery" placeholder="Search by check id..."
                 class="w-full px-4 py-2 my-1 border border-gray-300 rounded-md focus:outline-none focus:border-gray-800">
        </div>

        <!-- Status Filter Dropdown -->
        <div class="w-1/3 ml-10 flex flex-col">
          <label for="statusFilter">Filter by status</label>
          <select id="statusFilter" v-model="selectedStatus" class="px-4 py-2 my-1 border border-gray-300 rounded-md focus:outline-none focus:border-gray-800">
            <option value="all">All</option>
            <option value="failed">Failed</option>
            <option value="warning">Warning</option>
            <option value="passed">Passed</option>
          </select>
        </div>
      </div>

      <template v-for="(category, categoryId) in filteredCategories" :key="categoryId">
        <QaCategory v-if="categoryId !== '_Timestamp'" class="mr-2"
                    :categoryId="categoryId"
                    :category="category"
                    :search="searchQuery.length !== 0 || selectedStatus !== 'all'"/>
      </template>
    </div>
  </div>
</template>
