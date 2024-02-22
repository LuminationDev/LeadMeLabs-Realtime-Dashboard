<script setup lang="ts">
import { computed, ref } from "vue";
import { useStateStore } from "@/store/stateStore.ts";
import QaLab from "@/components/qa/QaLab.vue";

const stateStore = useStateStore();
const searchQuery = ref('');
const data = computed(() => stateStore.qaData);

const filteredData = computed(() => {
  const query = searchQuery.value.trim().toLowerCase();
  if (!query) {
    return data.value;
  } else {
    return Object.fromEntries(
        Object.entries(data.value || {})
            .filter(([labName]) => labName.toLowerCase().includes(query))
    );
  }
});
</script>

<template>
  <div class="w-full h-full flex flex-col overflow-hidden p-6">
    <!-- Search Input -->
    <input type="text" v-model="searchQuery" placeholder="Search by lab name..." class="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-gray-800">

    <!-- Filtered Labs -->
    <QaLab v-for="(lab, labName) in filteredData" :labName="labName" :lab="lab" :key="labName"/>
  </div>
</template>
