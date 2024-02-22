<script setup lang="ts">
import { PropType, ref } from "vue";
import { Lab } from "@/types/QaCheck";
import QaVersion from "@/components/qa/QaVersion.vue";

defineProps({
  labName: {
    type: String,
    required: true
  },
  lab: {
    type: Object as PropType<Lab>,
    required: true
  }
});

const collapsed = ref(true);
</script>

<template>
  <div class="w-full bg-gray-100 rounded-lg p-4 mb-4">
    <div @click="collapsed = !collapsed" class="bg-gray-200 cursor-pointer p-2 hover:bg-gray-300 rounded-xl"
         :class="{ 'rounded-t-xl': !collapsed }">
      <h2 class="text-lg font-semibold">{{ labName }}</h2>
    </div>

    <div v-if="!collapsed" class="mt-4 pl-4">
      <template v-for="(version, versionId) in lab" :key="versionId">
        <QaVersion v-if="version" class="mr-2" :versionId="versionId" :version="version" />
      </template>
    </div>
  </div>
</template>
