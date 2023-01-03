<template>
  <RecordTabs :active-tab="activeTab" @change="(tab: Tab) => activeTab = tab">
  </RecordTabs>
  <RecordInput
    v-if="activeTab === 'record'"
    :state="state"
    :duration="duration"
    @start="start()"
    @stop="stop()"
    @pause="pause()"
    @resume="resume()"
    @cancel="cancel()"
    @download="download()"
  />
  <RecordQuestions v-else-if="activeTab === 'questions'" />
</template>

<script lang="ts" setup>
import { Tab } from "~~/components/Record/RecordTabs.vue";

export type RecorderState = "initial" | "recording" | "paused" | "finished";

const activeTab = ref<Tab>("record");

const mediaRecorder = ref<MediaRecorder | null>(null);
const chunks = ref<Blob[]>([]);
const stream = ref<MediaStream | null>(null);
const duration = ref(0);
const state = ref<RecorderState>("initial");

// Timer
watch(state, (value) => {
  if (value === "recording") {
    setTimeout(() => (duration.value += 100), 100);
  }
});

watch(
  duration,
  (value) => {
    if (value > 0 && state.value === "recording") {
      setTimeout(() => (duration.value += 100), 100);
    }
  },
  { immediate: true }
);

// When button "start" is pushed it checks premission to use mic.
// The ondataavailable event listener is triggered whenever there is new data available from the media stream,
// and it pushes the data (in the form of a Blob) to the chunks.value array. The onstart, onpause, onresume,
// and onstop event listeners are used to update the value of the recording variable based on the state of the media recorder.

const start = async () => {
  const s = await navigator.mediaDevices.getUserMedia({ audio: true });
  stream.value = s;
  mediaRecorder.value = new MediaRecorder(s);
  mediaRecorder.value.start();

  mediaRecorder.value.ondataavailable = (e: BlobEvent) =>
    chunks.value.push(e.data);
  mediaRecorder.value.onstart = () => (state.value = "recording");
  mediaRecorder.value.onpause = () => (state.value = "paused");
  mediaRecorder.value.onresume = () => (state.value = "recording");
  mediaRecorder.value.onstop = () => {
    stream.value!.getTracks().forEach((track) => track.stop());
    state.value = "finished";
  };
};

const resume = () => mediaRecorder.value!.resume();
const pause = () => mediaRecorder.value!.pause();

// To stop and save the recording a new blob has to be made with all de chunks recorded. that will be transfered into an audio file.
const stop = () => {
  mediaRecorder.value!.stop();
  const blob = new Blob(chunks.value, { type: "audio/ogg; codecs=opus" });
  const audioURL = URL.createObjectURL(blob);
  const a = document.createElement("a");
  document.body.appendChild(a);
  a.setAttribute("style", "display: none");
  a.href = audioURL;
  a.download = "recording.ogg";
  a.click();
  window.URL.revokeObjectURL(audioURL);
  document.body.removeChild(a);
};

const download = () => {
  const blob = new Blob(chunks.value, { type: "audio/ogg; codecs=opus" });
  const audioURL = URL.createObjectURL(blob);
  const a = document.createElement("a");
  document.body.appendChild(a);
  a.setAttribute("style", "display: none");
  a.href = audioURL;
  a.download = "recording.ogg";
  a.click();
  window.URL.revokeObjectURL(audioURL);
  document.body.removeChild(a);
};

const cancel = () => {
  chunks.value.length = 0;
};
</script>
