<script setup lang="ts">

defineEmits<{
  (e: 'update', value: boolean): void
}>();

defineProps({
  isOn: {
    type: Boolean,
    required: true,
  },
});

</script>

<template>
  <div @click="$emit('update', !isOn);" :class="['relative cursor-pointer inline-block w-12 h-6 transition duration-200 ease-linear rounded-full', { 'bg-green-500': isOn, 'bg-blue-500': !isOn }]">
    <div :class="['absolute left-0 inline-block w-6 h-6 transform bg-white rounded-full transition duration-100 ease-linear', { 'translate-x-full': isOn }]"></div>
  </div>
</template>
