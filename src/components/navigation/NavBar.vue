<script setup lang="ts">
import { useStateStore } from '@/store/stateStore.ts';
import NavItem from "./NavItem.vue";
import router from "@/router/router.ts";
const stateStore = useStateStore();

/**
 * Log out the user and return them to the home '/' screen.
 */
const logout = () => {
  stateStore.logout();
  router.push("/LeadMeLabs-Realtime-Dashboard")
};
</script>

<template>
  <nav class="bg-gray-800 p-4 flex justify-between items-center">
    <ul class="flex space-x-7">
      <router-link to="/LeadMeLabs-Realtime-Dashboard/" class="text-white hover:text-gray-300">Home</router-link>
      <NavItem title="Notifications" path="/LeadMeLabs-Realtime-Dashboard/notifications"/>
      <NavItem title="Lab Data" path="/LeadMeLabs-Realtime-Dashboard/labdata"/>
      <NavItem title="QA Data" path="/LeadMeLabs-Realtime-Dashboard/qadata"/>
    </ul>
    <button v-if="stateStore.loggedIn" @click="logout" class="text-white hover:text-gray-300">Logout</button>
  </nav>
</template>
