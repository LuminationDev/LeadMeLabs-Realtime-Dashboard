<script setup lang="ts">
import { ref } from 'vue';
import { useStateStore } from "@/store/stateStore.ts";

const stateStore = useStateStore();
const isDragging = ref(false);

const handleFileUpload = (event: any) => {
  const files = event.target.files;
  for (let i = 0; i < files.length; i++) {
    stateStore.previewImages.push({
      url: URL.createObjectURL(files[i]),
      file: files[i]
    });
  }
};

const handleDragOver = (event: any) => {
  event.preventDefault();
  isDragging.value = true;
};

const handleDragLeave = () => {
  isDragging.value = false;
};

const handleDrop = (event: any) => {
  event.preventDefault();
  isDragging.value = false;
  const files = event.dataTransfer.files;
  for (let i = 0; i < files.length; i++) {
    stateStore.previewImages.push({
      url: URL.createObjectURL(files[i]),
      file: files[i]
    });
  }
};

const removeImage = (index: number) => {
  stateStore.previewImages.splice(index, 1);
};
</script>

<template>
  <div>
    <div class="h-32 mt-2">
      <div class="flex justify-center items-center bg-white drag-box w-full h-full relative text-center
                  leading-95 text-gray-700 border border-gray-400 rounded-lg"
           @dragover="handleDragOver"
           @dragleave="handleDragLeave"
           @drop="handleDrop"
      >
        <div class="flex flex-col items-center text-xs transition-transform" :class="{ 'transform scale-105': isDragging }">
          <img class="w-10 mb-2" alt="comment icon" src="../assets/icons/report-upload.svg"/>

          <div class="flex flex-row">
            <label for="uploadFile" class="font-semibold cursor-pointer text-blue-500 z-[1] hover:text-blue-300">Click to upload</label>
            <p class="ml-1 mb-1">or drag and drop</p>
          </div>

          <p>PNG, JPG or MP4 (max. (x)Mb)</p>
        </div>
        <input
            type="file"
            @change="handleFileUpload"
            id="uploadFile"
            class="absolute inset-0 opacity-0"
            multiple
        />
      </div>
    </div>
    <div id="preview" class="text-center">
      <div v-for="(image, index) in stateStore.getPreviewImages" :key="index" class="relative inline-block m-2">
        <img :src="image.url" alt="Preview" style="max-width: 200px; max-height: 200px;" class="border border-gray-300 rounded-lg"/>
        <button @click="removeImage(index)" class="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center">x</button>
      </div>
    </div>
  </div>
</template>
