<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useStateStore } from "@/store/stateStore";
import NavBar from "@/components/NavBar.vue";

const stateStore = useStateStore();
const router = useRouter();

// Initialise the firebase auth listener
stateStore.initializeAuth();

router.beforeEach((to, from, next) => {
  // Check if the route exists
  const resolved = router.resolve(to.path);
  if (resolved.matched.length === 0) {
    // Route does not exist, redirect to welcome page
    next('/');
    return;
  }

  // Check if the route requires authentication
  if (to.meta.requiresAuth && !stateStore.loggedIn) {
    // If user is not logged in and route requires authentication, redirect to welcome page
    next('/');
  } else {
    // Proceed with navigation
    next();
  }
});
</script>

<template>
  <div>
    <NavBar/>

    <router-view/>
  </div>
</template>