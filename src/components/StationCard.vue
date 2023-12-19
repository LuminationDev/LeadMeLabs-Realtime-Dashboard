<script setup lang="ts">
import {computed, type PropType} from "vue";
import blueBaseStation from '../assets/blue-base-station.svg'
import greyBaseStation from '../assets/grey-base-station.svg'
import greyHeadset from '../assets/grey-headset.svg'
import blueHeadset from '../assets/blue-headset.svg'
import greyController from '../assets/grey-controller.svg'
import blueController from '../assets/blue-controller.svg'
import type {Station} from "@/types/Station";

const props = defineProps({
  station: {
    type: Object as PropType<Station>,
    required: true
  },
  now: {
    type: Number,
    required: true
  }
})

const flashClass = computed(() => {
  var timeDiffMilliseconds = props.now - Date.parse(props.station.latestUpdate)
  var timeDiffSeconds = timeDiffMilliseconds / 1000
  if (timeDiffSeconds < 3) {
    return 'bg-blue-500'
  }
  return 'bg-gray-200'
})

const timeFormat = computed(() => {
  var timeDiffMilliseconds = props.now - Date.parse(props.station.latestUpdate)
  var timeDiffSeconds = timeDiffMilliseconds / 1000
  if (timeDiffSeconds < 30) {
    return "Just now"
  }
  if (timeDiffSeconds < 60) {
    return "< 1 minute ago"
  }
  if (timeDiffSeconds < 120) {
    return "1 minute ago"
  }
  var timeDiffMinutes = timeDiffSeconds / 60
  if (timeDiffMinutes < 60) {
    return `${Math.round(timeDiffMinutes)} minutes ago`
  }
  var timeDiffHours = timeDiffMinutes / 60
  if (timeDiffHours < 24) {
    return `${Math.round(timeDiffHours)} hour(s) ago`
  }
  var timeDiffDays = timeDiffHours / 24
  if (timeDiffDays < 7) {
    return `${Math.round(timeDiffDays)} day(s) ago`
  }
  return 'More than 1 week ago'
})

</script>
<template>
  <div class="rounded-2xl p-2 relative ease-bg font-semibold" :class="flashClass">
    <div class="flex flex-row justify-end ">
      <span class="text-blue-600 font-semibold">{{ station.status }}</span>
    </div>
    <div class="flex flex-row justify-center w-48 mt-2 mb-3">
      <div class="bg-white p-2 rounded-full w-full h-6 font-semibold">{{ station.gameName ?? station.state ?? 'N/A' }}</div>
    </div>
    <div class="flex flex-row justify-between mx-5">
      <div class="flex flex-col justify-between items-center font-semibold">
        <img :src="station.baseStationsActive > 0 ? blueBaseStation : greyBaseStation" class="h-18" />
        {{ station.baseStationsActive }}
      </div>
      <div class="flex flex-col justify-between items-center font-semibold">
        <img :src="station.leftControllerBattery > 0 ? blueController : greyController" class="h-18" />
        {{ station.leftControllerBattery }}
      </div>
      <div class="flex flex-col justify-between items-center font-semibold">
        <img :src="station.rightControllerBattery > 0 ? blueController : greyController" class="h-18" />
        {{ station.rightControllerBattery}}
      </div>
      <div class="flex flex-col justify-between items-center font-semibold">
        <img :src="station.openVRHeadsetTracking === 'On' ? blueHeadset : greyHeadset" class="h-18" />
        {{ station.openVRHeadsetTracking }}
      </div>
    </div>
    <div class="flex flex-row justify-between mt-2">
      <span class="text-xs font-semibold">{{ station.versionCode }}</span>
      <span class="text-xs font-semibold">{{ timeFormat }}</span>
    </div>
  </div>
</template>

<style>
.ease-bg {
  transition: background-color 1s ease;
}
</style>