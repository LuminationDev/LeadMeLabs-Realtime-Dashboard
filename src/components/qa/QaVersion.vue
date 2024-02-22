<script setup lang="ts">
import { ref } from "vue";
import type { PropType } from "vue";
import type { Version } from "@/types/QaCheck";
import QaCard from "@/components/qa/QaDevice.vue";

defineProps({
  versionId: {
    type: [String, Number],
    required: true
  },
  version: {
    type: Object as PropType<Version>,
    required: true
  }
});

const collapsed = ref(true);
</script>

<template>
  <div class="w-full text-left bg-gray-200 rounded-lg mb-4 relative">
    <div v-if="!collapsed" class="absolute -left-0.5 rounded-xl w-1.5 h-full bg-gray-700"/>
    <div @click="collapsed = !collapsed" class="bg-gray-200 cursor-pointer p-2 hover:bg-gray-300 rounded-xl"
         :class="{ 'rounded-t-xl': !collapsed }">
      <h2 class="text-lg ml-2 font-semibold">{{ versionId }}</h2>
    </div>

    <!--Categories and Id-->
    <div v-if="!collapsed" class="mt-2 px-4">
      <template v-for="(device, deviceId) in version" :key="deviceId">
        <QaCard v-if="device" class="mr-2 my-4" :deviceId="deviceId" :device="device" />
      </template>
    </div>
  </div>
</template>
