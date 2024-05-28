<script setup lang="ts">
import Container from "@/components/BasicContainer.vue";
import SearchBar from "@/components/SearchBar.vue";
import NotificationCard from "@/components/notifications/NotificationCard.vue";
import { useStateStore } from "@/store/stateStore.ts";
import { computed, ref } from "vue";

const stateStore = useStateStore();
const searchQuery = ref('');
const data = computed(() => stateStore.notificationData);

const filteredData = computed(() => {
  const query = searchQuery.value.trim().toLowerCase();
  if (!query) {
    return data.value;
  } else {
    return Object.fromEntries(
        Object.entries(data.value || {})
            .filter(([notificationName]) => notificationName.toLowerCase().includes(query))
    );
  }
});
</script>

<template>
  <Container container-name="Past notifications">
    <SearchBar v-model:search-query="searchQuery" place-holder="Search notification by name..."/>

    <!-- No data message -->
    <div v-if="!filteredData">
      No data available.
    </div>

    <!-- Filtered notifications -->
    <NotificationCard v-for="(notificationObject, notificationKey) in filteredData"
                      :notification-key="notificationKey"
                      :notification-object="notificationObject"
                      :key="notificationKey"/>
  </Container>
</template>
