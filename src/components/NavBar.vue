<script setup lang="ts">
import { useStateStore } from '@/store/stateStore.ts'; // Update the path to your store file
const stateStore = useStateStore();

/**
 * Log out the user and return them to the home '/' screen.
 */
const logout = () => {
  stateStore.logout();
};
</script>

<template>
  <nav class="bg-gray-800 p-4 flex justify-between items-center">
    <ul class="flex space-x-4">
      <li>
        <router-link to="/" class="text-white hover:text-gray-300">Home</router-link>
      </li>
      <li>
        <router-link :to="{ path: '/labdata' }" :class="{ 'text-white': stateStore.loggedIn, 'cursor-not-allowed text-gray-400': !stateStore.loggedIn }" :aria-disabled="!stateStore.loggedIn">Lab Data</router-link>
      </li>
      <li>
        <router-link :to="{ path: '/qadata' }" :class="{ 'text-white': stateStore.loggedIn, 'cursor-not-allowed text-gray-400': !stateStore.loggedIn }" :aria-disabled="!stateStore.loggedIn">QA Data</router-link>
      </li>
    </ul>
    <button v-if="stateStore.loggedIn" @click="logout" class="text-white hover:text-gray-300">Logout</button>
  </nav>
</template>
