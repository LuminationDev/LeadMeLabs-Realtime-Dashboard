<script setup lang="ts">
import ToolTip from "@/components/buttons/ToolTip.vue";
import HintIcon from "@/assets/vue/HintIcon.vue";

defineProps({
  title: {
    type: String,
    required: true
  },
  tip: {
    type: String,
    required: true
  },
  hintColour: {
    type: String,
    required: false,
    default: "white"
  }
});
</script>

<template>
  <div class="flex flex-row items-center">
    <p class="font-semibold">{{title}}</p>
    <span class="has-tooltip">
      <HintIcon :colour="hintColour" class="h-4 w-4 bg-red ml-2 cursor-pointer"/>
      <ToolTip
          :tip="tip"
          tool-tip-margin="ml-0"
          arrow-margin="ml-2"
      >
      </ToolTip>
    </span>
  </div>
</template>
