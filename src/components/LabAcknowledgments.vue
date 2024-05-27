<script setup lang="ts">
import Container from "@/components/BasicContainer.vue";
import SearchBar from "@/components/SearchBar.vue";
import { useStateStore } from "@/store/stateStore.ts";
import { computed, ref } from "vue";
import AcknowledgementCard from "@/components/notifications/AcknowledgementCard.vue";
import TitleHint from "@/components/TitleHint.vue";
import ToggleButton from "@/components/buttons/ToggleButton.vue";
import DisplayItem from "@/components/DisplayItem.vue";
import type { Acknowledgement, AcknowledgementEntry, ResultEntry } from "@/interfaces/notification.ts";
import AcknowledgementCardNotification from "@/components/notifications/AcknowledgementCardNotification.vue";

const stateStore = useStateStore();
const searchQuery = ref('');
const sortByLabLocation = ref(true);

const changeAcknowledgementSorting = (value: boolean) => {
  sortByLabLocation.value = value;
}
const data = computed(() => stateStore.acknowledgementData);
const notificationData = computed(() => stateStore.notificationData);
const uuidsWithEntries = computed(() => {
  const result: Record<string, ResultEntry> = {};
  const dataValue = data.value;
  const notificationDataValue = notificationData.value;

  for (const uuid in notificationDataValue) {
    for (const lab in dataValue) {
      if (dataValue[lab]) {
        result[uuid] ||= {title: notificationDataValue[uuid].title, entries: []};
        result[uuid].entries.push({
          labName: lab
        });
      }
    }
  }
  return result;
});

//TODO make this sort either data item
const filteredData = computed(() => {
  const query = searchQuery.value.trim().toLowerCase();
  if (!query) {
    return data.value;
  } else {
    return Object.fromEntries(
        Object.entries(data.value || {})
            .filter(([acknowledgementId]) => acknowledgementId.toLowerCase().includes(query))
    );
  }
});

const filteredNotificationData = computed(() => {
  const query = searchQuery.value.trim().toLowerCase();
  if (!query) {
    return uuidsWithEntries.value;
  } else {
    return Object.fromEntries(
        Object.entries(uuidsWithEntries.value || {}).filter(([uuid, entry]) =>
            entry.title.toLowerCase().includes(query)
        )
    );
  }
});
</script>

<template>
  <Container container-name="Lab acknowledgments">
    <TitleHint :title="'Sort by ' + (sortByLabLocation ? 'lab location' : 'notification name')" tip="Switch between group by lab location or notification name." hint-colour="black" class="mb-2"/>
    <ToggleButton @update="changeAcknowledgementSorting" :isOn="sortByLabLocation" class="mb-4"/>

    <SearchBar v-model:search-query="searchQuery" place-holder="Search acknowledgements..."/>

    <!-- No data message -->
    <div v-if="!filteredData">
      No data available.
    </div>

    <!-- Filtered acknowledgements -->
    <template v-if="sortByLabLocation">
      <AcknowledgementCard v-for="(acknowledgementObject, labLocation) in filteredData"
                           :labLocation="labLocation"
                           :acknowledgement-object="acknowledgementObject"
                           :key="labLocation"/>
    </template>
    <template v-else>
      <AcknowledgementCardNotification v-for="(uuid, key) in filteredNotificationData" :key="key"
                                       :notification-key="key"
                                       :notification-object="uuid" />
    </template>
  </Container>
</template>
