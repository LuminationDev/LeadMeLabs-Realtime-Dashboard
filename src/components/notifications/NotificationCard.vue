<script setup lang="ts">
import GenericButton from "@/components/buttons/GenericButton.vue";
import { ref } from "vue";
import type { PropType } from "vue";
import type { Notification } from "@/interfaces/notification.ts";
import DisplayItem from "@/components/DisplayItem.vue";
import DisplayItems from "@/components/DisplayItems.vue";
import { useStateStore } from "@/store/stateStore.ts";

const props = defineProps({
  notificationKey: {
    type: [String, Number],
    required: true
  },
  notificationObject: {
    type: Object as PropType<Notification>,
    required: true
  }
});

const stateStore = useStateStore();
const message = ref("");
const collapsed = ref(true);

const deleteNotification = async () => {
  message.value = await stateStore.deleteNotificationData(props.notificationKey);
}
</script>

<template>
  <div class="w-full bg-gray-100 rounded-lg p-4 mb-4">
    <div @click="collapsed = !collapsed"
         class="flex flex-row items-center justify-between bg-gray-200
                cursor-pointer p-2 hover:bg-gray-300 rounded-xl"
         :class="{ 'rounded-t-xl': !collapsed }">
      <div>
        <h2 class="text-lg font-semibold">{{ notificationObject.title }} - {{notificationObject.urgency}}</h2>
        <h3>{{notificationObject._timeStamp}}</h3>
      </div>

      <div class="flex flex-col items-end">
        <GenericButton
            type="danger"
            class="w-32 h-10"
            :callback="deleteNotification"
        >Delete</GenericButton>

        <!--Error message-->
        <div v-if="message.length > 0" class="flex flex-row items-center text-red-500">
          <span class="text-xs">Please re-login and try again.</span>
        </div>
      </div>
    </div>

    <!--Notification details-->
    <div v-if="!collapsed" class="mt-4 pl-4 flex flex-col space-y-3">
      <DisplayItem data-key="Title" :data="notificationObject.title" />
      <DisplayItems data-key="Messages" :data="notificationObject.messages" />
      <DisplayItem data-key="Urgency" :data="notificationObject.urgency" />

      <!--Supporting media-->
      <DisplayItem v-if="notificationObject.videoLink !== undefined" data-key="Video URL" :data="notificationObject.videoLink" />
      <div v-if="notificationObject.photoLinks">
        <div class="font-semibold w-32 mb-2">
          Images
        </div>

        <div class="flex overflow-x-auto max-w-full space-x-4">
          <img v-for="url in notificationObject.photoLinks"
               class="w-72"
               :key="url" :src="url"
               alt="notification image"/>
        </div>
      </div>
    </div>
  </div>
</template>
