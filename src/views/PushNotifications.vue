<script setup lang="ts">
import NewNotification from "@/components/notifications/NewNotification.vue";
import PastNotifications from "@/components/notifications/PastNotifications.vue";
import LabAcknowledgments from "@/components/LabAcknowledgments.vue";
</script>

<template>
  <div class="w-full h-full flex flex-col overflow-hidden p-6">
    <NewNotification />
    <PastNotifications />
    <LabAcknowledgments />
  </div>
</template>
