<script setup>
import { computed, ref, toRefs, watch } from 'vue';
import MinusIcon from "@/assets/vue/MinusIcon.vue";

const props = defineProps({
  message: {
    type: String,
    required: true,
  },
  isDeletable: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits(['update-message', 'remove-message']);

const { message } = toRefs(props);
const messageText = ref(message.value);
const charLimit = 250;
const currentChar = computed(() => {
  return messageText.value.length;
});

const update = () => {
  emit('update-message', messageText.value);
};

const remove = () => {
  emit('remove-message');
};

//Limit the characters to 250 (display space on the Android tablet)
watch(messageText, (newValue) => {
  if (newValue.length > charLimit) {
    messageText.value = newValue.slice(0, charLimit);
  }
});
</script>

<template>
  <div class="relative">
    <div class="absolute -top-2 right-0" :class="{'text-red-500': currentChar === charLimit}">{{currentChar}}/{{charLimit}}</div>
    <textarea v-model="messageText" @input="update" placeholder="Type a message"
              class="h-16 mt-4 mb-1 w-full px-2 py-1 border-[1px] border-gray-400 rounded-lg shadow-sm" />
    <MinusIcon class="cursor-pointer" v-if="isDeletable" @click="remove" colour="red" border-colour="black" />
  </div>
</template>
