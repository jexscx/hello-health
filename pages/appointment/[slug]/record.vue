<template>
  <RecordTabs :active-tab="activeTab" @change="(tab: Tab) => activeTab = tab">
  </RecordTabs>
  <RecordInput
    v-if="activeTab === 'record'"
    :is-recording="recording"
    :duration="duration"
    @start="start()"
    @stop="stop()"
    @pause="pause()"
    @resume="resume()"
    @save="save()"
    @cancel="cancel()"
  />
  <RecordQuestions v-else-if="activeTab === 'questions'" />
</template>

<script lang="ts" setup>
import { Tab } from "~~/components/Record/RecordTabs.vue";

const activeTab = ref<Tab>("record");

const mediaRecorder = ref<MediaRecorder | null>(null);
const chunks = ref<Blob[]>([]);
const stream = ref<MediaStream | null>(null);
const recording = ref<boolean>(false);
const duration = ref(0);

// Timer
watch(recording, (value) => {
  if (value) {
    setTimeout(() => (duration.value += 100), 100);
  }
});

watch(
  duration,
  (value) => {
    if (value > 0 && recording.value) {
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
  mediaRecorder.value.onstart = () => (recording.value = true);
  mediaRecorder.value.onpause = () => (recording.value = false);
  mediaRecorder.value.onresume = () => (recording.value = true);
  mediaRecorder.value.onstop = () => {
    stream.value!.getTracks().forEach((track) => track.stop());
    recording.value = false;
  };
};

const resume = () => mediaRecorder.value!.resume();
const pause = () => mediaRecorder.value!.pause();
const stop = () => mediaRecorder.value!.stop();

// To save the recording a new blob has to be made with all de chunks recorded. that will be transfered into an audio file.
const save = () => {
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
