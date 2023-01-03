<template>
  <div class="flex flex-col items-center p-12 gap-8">
    <h3 class="text-2xl font-bold text-purple-900" v-if="state === 'initial'">
      Start met opnemen
    </h3>
    <h3 class="text-2xl font-bold text-purple-900" v-if="state === 'recording'">
      Aan het opnemen...
    </h3>
    <h3 class="text-2xl font-bold text-purple-900" v-if="state === 'paused'">
      Opname is gepauzeerd
    </h3>
    <h3 class="text-2xl font-bold text-purple-900" v-if="state === 'finished'">
      Opname is gestopt
    </h3>
    <span class="text-4xl font-bold text-pinky-400 my-6">{{
      Duration.fromMillis(duration).toFormat("mm:ss")
    }}</span>
    <div
      class="grid grid-cols-[1fr_15%_1fr] gap-10 items-center"
      v-if="state != 'finished'"
    >
      <button
        class="p-4 w-full bg-purple-300/20 rounded-lg"
        @click="$emit('cancel')"
      >
        <div class="flex justify-around gap-4">
          <svg
            class="w-6 h-6 fill-none stroke-purple-900 stroke-2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <use href="/feather-sprite.svg#trash" />
          </svg>
          <span class="text-bold text-purple-900">Weggooien</span>
        </div>
      </button>
      <!-- start -->
      <button
        class="p-8 bg-purple-900 rounded-full flex justify-self-center"
        @click="$emit('start')"
        v-if="state === 'initial'"
      >
        <svg
          class="w-8 h-8 fill stroke-white stroke-[4px] pl-0.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <use href="/feather-sprite.svg#play" />
        </svg>
      </button>
      <!-- pause -->
      <button
        class="p-8 bg-purple-300/20 rounded-full flex justify-self-center"
        @click="$emit('pause')"
        v-if="state === 'recording'"
      >
        <svg
          class="w-8 h-8 fill fill-purple-900 stroke-purple-900 stroke-[2px]"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <use href="/feather-sprite.svg#pause" />
        </svg>
      </button>
      <!-- resume -->
      <button
        class="p-8 bg-purple-900 rounded-full flex justify-self-center"
        @click="$emit('resume')"
        v-if="state === 'paused'"
      >
        <svg
          class="w-8 h-8 fill stroke-white stroke-[4px] pl-0.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <use href="/feather-sprite.svg#play" />
        </svg>
      </button>
      <button class="p-4 bg-purple-300/20 rounded-lg" @click="$emit('stop')">
        <div class="flex justify-around">
          <span class="text-bold text-purple-900">Stop</span>
          <svg
            class="w-6 h-6 fill-none stroke-purple-900 stroke-2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <use href="/feather-sprite.svg#square" />
          </svg>
        </div>
      </button>
    </div>
    <div v-if="state === 'finished'">
      <button
        class="bg-purple-900 text-white text-bold p-4 px-8 rounded-md"
        @click="$emit('download')"
      >
        Luister opname terug
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Duration } from "luxon";
import { RecorderState } from "~~/pages/appointment/[slug]/record.vue";

const props = defineProps<{
  state: RecorderState;
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
</script>
