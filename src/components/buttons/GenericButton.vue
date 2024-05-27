<script setup lang="ts">
import { ref } from 'vue'
import Spinner from './Spinner.vue'
const spinner = ref(false)
const props = defineProps({
  type: {
    type: String,
    required: false
  },
  callback: {
    type: Function,
    required: true
  },
  disabled: {
    type: Boolean,
    required: false
  },
  customClass: {
    type: String,
    required: false,
    default: ''
  },
  buttonId: {
    type: String,
    required: false,
    default: 'button'
  }
})
const onClick = async (): Promise<void> => {
  await asyncCall()
}
const asyncCall = async (): Promise<void> => {
  await new Promise((resolve) => {
    spinner.value = true;
    resolve(props.callback())
  });
  spinner.value = false;
}
</script>

<template>
  <button
      :id="buttonId"
      :class="{
            'rounded-lg text-base': true,
            'w-32 bg-blue-600 text-white hover:bg-blue-400': type === 'primary',
            'w-32 bg-blue-600 hover:bg-blue-400 font-semibold': type === 'secondary',
            'w-32 bg-red-600 hover:bg-red-400 font-semibold text-white': type === 'danger',
            'w-32 bg-white  border-2 border-blue-600 hover:bg-blue-600 hover:text-white text-primary':
                type === 'white',
            'w-32 bg-white border-gray-200 disabled:bg-gray-200 disabled:text-black border-2 hover:bg-gray-100 text-blue-500 font-semibold':
                type === 'light',
            'bg-white border-slate-800 border-2 hover:bg-gray-100 text-slate-800 font-semibold':
                type === 'preview',
            'bg-slate-500 disabled:hover:bg-slate-500 cursor-not-allowed': disabled,
            'w-4 h-4 bg-blue-600 rounded-full': type === 'icon'
        }"
      class="p-2 flex justify-center items-center"
      :disabled="disabled"
      @click="onClick()"
  >
    <Spinner v-if="spinner" />
    <slot v-else />
  </button>
</template>
