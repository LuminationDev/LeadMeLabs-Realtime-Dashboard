<script setup lang="ts">
import { initializeApp } from 'firebase/app'
import { getDatabase, ref as firebaseRef, onValue } from 'firebase/database'
import type { Database } from 'firebase/database'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import type { User } from 'firebase/auth'
import {computed, ref} from "vue";
import type { Ref } from 'vue'
import StationCard from "@/components/StationCard.vue";

const firebaseConfig = {
  apiKey: "AIzaSyC_Dx2fpTHRmU4WaUg1hUYn2O9C4m76Bhg",
  authDomain: "leadme-labs.firebaseapp.com",
  databaseURL: "https://leadme-labs-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "leadme-labs",
  storageBucket: "leadme-labs.appspot.com",
  messagingSenderId: "676443233497",
  appId: "1:676443233497:web:006cb9cec48d3ba53972c8",
  measurementId: "G-8NZCSW9ZNB"
};
const app = initializeApp(firebaseConfig)

const email = ref("")
const password = ref("")

const loggedIn = computed(() => {
  return !!(user.value && user.value.email)
})

const user: Ref<User|null> = ref(null);
var database: Database|null = null;

const auth = getAuth()
auth.onAuthStateChanged(() => {
  user.value = auth.currentUser
  if (user.value) {
    setupConnection()
  }
})

function setupConnection() {
  if (database) {
    return;
  }
  database = getDatabase()
  const dataFirebaseRef = firebaseRef(database, 'lab_realtime_data')

  onValue(dataFirebaseRef, (snapshot) => {
    data.value = snapshot.val()
  })
}

function login() {
  signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        setupConnection()
      })
}


const data = ref(null)

const now = ref(Date.now())

setInterval(() => {
  now.value = Date.now()
}, 1000)

</script>

<template>
  <div>
    <div v-if="!loggedIn" class="flex flex-col">
      <label for="email">Email</label>
      <input id="email" v-model="email" class="border-2 border-black" />
      <label for="password">Password</label>
      <input id="password" v-model="password" type="password" class="border-2 border-black"/>
      <button @click="login" class="bg-gray-300">Login</button>
    </div>
    <div v-else-if="loggedIn && data" class="w-screen h-screen flex flex-col overflow-hidden p-10">
      <div v-for="(lab, labName) in data" :key="labName">
        {{ labName }}
        <div class="flex flex-row last-child:mr-0 overflow-x-scroll">
          <StationCard class="mr-2" v-for="(station, stationId) in lab" :station="station" :key="'1' + labName + '-' + stationId" :now="now" />
        </div>
      </div>
    </div>
  </div>
</template>