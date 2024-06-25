<script setup lang="ts">
import { computed, ref } from "vue";
import { useStateStore } from "@/store/stateStore.ts";
import QaLab from "@/components/qa/QaLab.vue";
import SearchBar from "@/components/SearchBar.vue";

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
    <SearchBar v-model:search-query="searchQuery" place-holder="Search by lab name..."/>

    <!-- Filtered Labs -->
    <QaLab v-for="(lab, labName) in filteredData" :labName="labName" :lab="lab" :key="labName"/>
  </div>
</template>
