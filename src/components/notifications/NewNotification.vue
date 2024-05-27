<script setup lang="ts">
import Container from "@/components/BasicContainer.vue";
import ImageUpload from "@/components/ImageUpload.vue";
import GenericDropdown from "@/components/dropdowns/GenericDropdown.vue";
import TextInput from "@/components/inputs/TextInput.vue";
import GenericButton from "@/components/buttons/GenericButton.vue";
import type { Notification } from "@/interfaces/notification.ts";
import { ref, reactive } from "vue";
import { required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import { useStateStore } from "@/store/stateStore.ts";
import { v4 as uuidv4 } from "uuid";
import { NOTIFICATION_LEVEL_EMERGENCY } from "@/assets/constants/notification.ts";
import MessageField from "@/components/notifications/MessageField.vue";
import AddIcon from "@/assets/vue/AddIcon.vue";
import TitleHint from "@/components/TitleHint.vue";
import ToggleButton from "@/components/buttons/ToggleButton.vue";

const stateStore = useStateStore();
const rules = {
  title: { required },
  messages: { required },
  video: { },
}

const state = reactive({
  title: '',
  messages: [""] as string[],
  video: ''
});

const v$ = useVuelidate(rules, state);
const supportVideo = ref(false);
const response = ref("");
const urgency = ref(NOTIFICATION_LEVEL_EMERGENCY);
const success = ref(false);

const changeUrgency = (value: string) => {
  urgency.value = value;
}

const changeSupportMedia = (value: boolean) => {
  state.video = '';
  supportVideo.value = value;
}

/**
 * Reset the input fields after a successful upload.
 */
const resetFields = () => {
  state.title = "";
  state.messages = [""];
  state.video = '';
  urgency.value = NOTIFICATION_LEVEL_EMERGENCY;
  response.value = "";
  success.value = false;

  v$.value.$reset();
  stateStore.resetPreviewImages();
}

/**
 * Validate the input fields and attempt to upload any supplied images. Any image Urls will be attached to the
 * notification object before it is uploaded to firebase.
 */
const submit = async () => {
  success.value = false;
  response.value = "";

  for (const element of state.messages) {
    if (element.length === 0) {
      response.value = "Each message field must have text.";
      return;
    }
  }

  await v$.value.$validate();

  if (v$.value.$invalid) {
    console.log("Invalid");
    return;
  }

  // Generate a UUID for
  const uuid = uuidv4();

  //Upload any selected images
  if (state.video.length === 0) {
    await stateStore.uploadNotificationImage(uuid);
  }

  //Construct the notification object with an associated timestamp
  const now = new Date();
  let data: Notification = {
    title: state.title,
    messages: state.messages,
    urgency: urgency.value,
    _timeStamp: now.toUTCString()
  }

  //Attach the video url if it is no blank
  if (state.video.length > 0) {
    data.videoLink = state.video;
  }
  else {
    //Attach the image Urls if there are any
    if (stateStore.downloadURLs.length > 0) {
      data.photoLinks = stateStore.downloadURLs;
    }
  }

  //Upload the notification and await any error messages
  response.value = await stateStore.uploadNotificationData(uuid, data);

  //Success if true
  if (response.value.length == 0) {
    resetFields();
    success.value = true;
  }
}

const addMessageField = () => {
  state.messages.push("");
};

const updateMessage = (index: number, text: string) => {
  state.messages[index] = text;
};

const removeMessage = (index: number) => {
  state.messages.splice(index, 1);
};
</script>

<template>
  <Container container-name="Create a notification">
    <!--Notification title-->

    <TextInput
        ref="titleInputRef"
        v-model="v$.title.$model"
        :v$="v$.title"
        field-id="title"
        class="my-2 w-full"
        placeholder="Steam popup">
      <template #label>
        <TitleHint title="Title" tip="The title displayed to the user." hint-colour="black" class=""/>
      </template>
    </TextInput>

    <!--Notification urgency-->
    <TitleHint title="Urgency" tip="Defines how the alert is displayed on the tablet." hint-colour="black" class="mb-3"/>
    <GenericDropdown name="urgency"
                     @update="changeUrgency"
                     :title="urgency"
                     :items="[NOTIFICATION_LEVEL_EMERGENCY]"
                     class="mb-5"/>

    <!--Notification content-->
    <TitleHint title="Messages" tip="Each message will be displayed as a different page on the tablet's notification." hint-colour="black"/>
    <div v-for="(message, index) in state.messages" :key="index">
      <MessageField
          :message="message"
          @update-message="updateMessage(index, $event)"
          @remove-message="removeMessage(index)"
          :isDeletable="index !== 0"
      />
    </div>
    <div class="flex flex-row justify-end">
      <div class="mr-2 font-semibold">Add another message</div>
      <AddIcon class="cursor-pointer" @click="addMessageField" colour="green" border-colour="green" />
    </div>

    <TitleHint title="Support Media" tip="Switch between supported images or a video link (only one video link per notification)." hint-colour="black" class="mb-2"/>
    <ToggleButton @update="changeSupportMedia" :isOn="supportVideo" class="mb-4"/>

    <!--Supporting media-->
    <template v-if="supportVideo">
      <!--Notification supplementary video-->
      <TextInput
          ref="videoInputRef"
          v-model="v$.video.$model"
          :v$="v$.video"
          field-id="video"
          class=" w-full"
          placeholder="https://www.youtube.com/">
        <template #label>
          <TitleHint title="Supporting Video" tip="A video url." hint-colour="black" class=""/>
        </template>
      </TextInput>
    </template>
    <template v-else>
      <!--Notification supplementary images-->
      <TitleHint title="Supporting Images" tip="Each image will be displayed as a different page on the tablet's notification, along with the associated message." hint-colour="black"/>
      <ImageUpload />
    </template>

    <!--Submit notification-->
    <div class="flex flex-row justify-between mt-5">
      <GenericButton
          type="danger"
          class="w-32"
          :callback="resetFields"
      >Reset</GenericButton>

      <GenericButton
          type="primary"
          class="w-32"
          :callback="submit"
      >Submit</GenericButton>
    </div>

    <div class="flex flex-row justify-center">
      <!--Error message-->
      <div v-if="response.length > 0" class="flex flex-row items-center text-red-500">
        <span class="text-xs">{{ response }}</span>
      </div>

      <!--Success message-->
      <div v-if="success" class="flex flex-row just items-center text-green-500">
        <span class="text-xs">Successful upload</span>
      </div>
    </div>
  </Container>
</template>
