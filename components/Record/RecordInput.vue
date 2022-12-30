<template>
  <div class="flex flex-col items-center p-12 gap-8">
    <h3 class="text-2xl font-bold text-purple-900">
      {{ isRecording ? "Aan het opnemen..." : "Start met opnemen" }}
    </h3>
    <span class="text-4xl font-bold text-pinky-400 my-6">{{
      Duration.fromMillis(duration).toFormat("mm:ss")
    }}</span>
    <div>
      <button
        class="py-2 px-4 outline outline-2 outline-purple-800 rounded-lg"
        @click="$emit('cancel')"
      >
        Weggooien
      </button>
      <!-- start -->
      <button
        class="py-2 px-4 outline outline-2 outline-purple-800 rounded-lg"
        @click="$emit('start')"
        v-if="state === 'initial'"
      >
        <svg
          class="w-6 h-6 fill-none stroke-purple-800 stroke-2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <use href="/feather-sprite.svg#play" />
        </svg>
      </button>
      <!-- pause -->
      <button
        class="py-2 px-4 outline outline-2 outline-purple-800 rounded-lg"
        @click="$emit('pause')"
        v-if="state === 'started'"
      >
        <svg
          class="w-6 h-6 fill-none stroke-purple-800 stroke-2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <use href="/feather-sprite.svg#pause" />
        </svg>
      </button>
      <!-- resume -->
      <button
        class="py-2 px-4 outline outline-2 outline-purple-800 rounded-lg"
        @click="$emit('resume')"
        v-if="state === 'paused'"
      >
        <svg
          class="w-6 h-6 fill-none stroke-purple-800 stroke-2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <use href="/feather-sprite.svg#play" />
        </svg>
      </button>
      <button
        class="py-2 px-4 outline outline-2 outline-purple-800 rounded-lg"
        @click="$emit('stop')"
      >
        Stop
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Duration } from "luxon";
const { isRecording, duration } = defineProps<{
  isRecording: boolean;
  duration: number;
}>();
defineEmits<{
  (event: "start"): void;
  (event: "stop"): void;
  (event: "pause"): void;
  (event: "resume"): void;
  (event: "clear"): void;
  (event: "save"): void;
}>();

const state = computed(() => {
  if (duration === 0 && !isRecording) {
    console.log("initial");
    return "initial";
  } else if (isRecording) {
    console.log("started");

    return "started";
  } else if (duration > 0 && isRecording) {
    console.log("paused");

    return "paused";
  }
});
</script>
