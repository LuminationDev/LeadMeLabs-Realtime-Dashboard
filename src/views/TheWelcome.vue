<script setup lang="ts">
import { reactive, ref } from "vue";
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useStateStore } from "@/store/stateStore";
import { useVuelidate } from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';

const stateStore = useStateStore();
const state = reactive({
  email: '',
  password: ''
});

const rules = {
  email: { required, email },
  password: { required }
};

const $v = useVuelidate(rules, state);
const error = ref();

const login = () => {
  if ($v.value.$invalid) {
    return;
  }
  error.value = null;

  signInWithEmailAndPassword(stateStore.auth, state.email, state.password)
      .then(() => {
        stateStore.setupConnection()
      })
      .catch(e => {
        // Set error message
        error.value = e.message;

        console.log(e);
      });
}
</script>

<template>
  <div class="flex justify-center items-center">
    <div v-if="!stateStore.loggedIn" class="mt-20 flex justify-center items-center">
      <form @submit.prevent="login" class="w-96 flex flex-col space-y-4 p-8 bg-white rounded-lg shadow-md">
        <h2 class="text-2xl font-bold text-center">Login</h2>
        <div class="flex flex-col space-y-2">
          <label for="email" class="text-sm">Email</label>
          <input id="email" v-model.trim="$v.email.$model" @input="$v.email.$touch()" type="email" class="border border-gray-300 p-2 rounded-md" :class="{ 'border-red-500': $v.email.$error }" />
          <span v-if="$v.email.$error && $v.email.required && state.email.length == 0 && $v.email.$dirty" class="text-sm text-red-500">Email is required</span>
          <span v-if="$v.email.$error && $v.email.email  && state.email.length > 0 && $v.email.$dirty" class="text-sm text-red-500">Invalid email format</span>
        </div>
        <div class="flex flex-col space-y-2">
          <label for="password" class="text-sm">Password</label>
          <input id="password" v-model.trim="$v.password.$model" @input="$v.password.$touch()" type="password" class="border border-gray-300 p-2 rounded-md" :class="{ 'border-red-500': $v.password.$error }" />
          <span v-if="$v.password.$error && $v.password.required && $v.password.$dirty" class="text-sm text-red-500">Password is required</span>
        </div>
        <button type="submit" :disabled="$v.$invalid" class="py-2 px-4 bg-gray-800 text-white rounded-md hover:bg-gray-500 transition-colors disabled:bg-gray-300 disabled:hover:bg-gray-300">Login</button>
        <div v-if="error" class="text-red-500 text-sm mt-2">{{ error }}</div>
      </form>
    </div>

    <div v-else class="my-10 text-2xl text-center">
      You are already logged in.
    </div>
  </div>
</template>
