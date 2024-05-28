<script setup lang="ts">
import DisplayItem from "@/components/DisplayItem.vue";
import { PropType, ref} from "vue";
import { ResultEntry } from "@/interfaces/notification.ts";

defineProps({
  notificationKey: {
    type: [String, Number],
    required: true
  },
  notificationObject: {
    type: Object as PropType<ResultEntry>,
    required: true
  }
});

const collapsed = ref(true);
</script>

<template>
  <div @click="collapsed = !collapsed"
       class="flex flex-row items-center justify-between bg-gray-200
                cursor-pointer p-2 hover:bg-gray-300 rounded-xl my-4"
       :class="{ 'rounded-t-xl': !collapsed }">
    <div>
      <h2 class="text-lg font-semibold">{{ notificationObject.title }}</h2>
      <div class="text-xs">Id: {{notificationKey}}</div>
    </div>
  </div>

  <!--Notification details-->
  <div v-if="!collapsed" class="mt-4 flex flex-col space-y-3 mx-5 bg-gray-200 rounded-xl py-2">
    <div v-for="(data, key) in notificationObject.entries" :key="key" class="flex flex-col space-y-3 pl-4">
      <DisplayItem data-key="Lab location" :data="data.labName" />
    </div>
  </div>
</template>
