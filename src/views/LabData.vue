<script setup lang="ts">
import StationCard from "@/components/StationCard.vue";
import { computed, ref } from "vue";
import { useStateStore } from "@/store/stateStore";

const stateStore = useStateStore();
const data = computed(() => stateStore.labsData);

const now = ref(Date.now());
setInterval(() => {
  now.value = Date.now()
}, 1000);
</script>

<template>
  <div v-if="data" class="w-full h-full flex flex-col overflow-hidden p-6">
    <div v-for="(lab, labName) in data" :key="labName">
      {{ labName }}
      <div class="flex flex-row last-child:mr-0 overflow-x-scroll">
        <template v-for="(station, stationId) in lab" :key="'1' + labName + '-' + stationId">
          <StationCard v-if="station != undefined" class="mr-2" :station="station" :now="now" />
        </template>
      </div>
    </div>
  </div>
</template>
