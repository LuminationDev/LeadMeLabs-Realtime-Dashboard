<script setup lang="ts">
import { PropType, ref } from "vue";
import type { AcknowledgementEntry } from "@/interfaces/notification.ts";
import DisplayItem from "@/components/DisplayItem.vue";
import { useStateStore } from "@/store/stateStore.ts";

defineProps({
  labLocation: {
    type: [String, Number],
    required: true
  },
  acknowledgementObject: {
    type: Object as PropType<AcknowledgementEntry>,
    required: true
  }
});

const stateStore = useStateStore();
const collapsed = ref(true);
</script>

<template>
  <div class="w-full bg-gray-100 rounded-lg p-4">
    <div @click="collapsed = !collapsed"
         class="flex flex-row items-center justify-between bg-gray-200
                cursor-pointer p-2 hover:bg-gray-300 rounded-xl"
         :class="{ 'rounded-t-xl': !collapsed }">
      <div>
        <h2 class="text-lg font-semibold">{{ labLocation }}</h2>
      </div>
    </div>

    <!--Notification details-->
    <div v-if="!collapsed" class="mt-4 flex flex-col space-y-3 mx-5">
      <div v-for="(data, key) in acknowledgementObject" :key="key" class="flex flex-col space-y-3 bg-gray-200 rounded-xl pl-4 py-2">
        <DisplayItem data-key="Notification Id" :data="key" />
        <DisplayItem data-key="Title" :data="stateStore.notificationData[key].title" />
        <DisplayItem data-key="Urgency" :data="stateStore.notificationData[key].urgency" />
        <DisplayItem data-key="Acknowledged" :data="data._timeStamp"/>
      </div>
    </div>
  </div>
</template>
