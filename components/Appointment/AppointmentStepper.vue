<template>
  <div class="grid grid-cols-[[numbers]_1fr_[titles]_8fr] gap-2">
    <AppointmentStepp
      v-for="(step, index) in steps"
      :step="step"
      :index="index"
    />
    <div
      v-for="n in steps.length - 1"
      :style="{ gridRowStart: n * 2 }"
      class="h-10 border-l-4 rounded w-px ml-[1.1rem]"
      :class="{
        'border-gray-400': steps[n].status === 'inactive',
        'border-powderblue-300': steps[n].status === 'todo',
      }"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { Step } from "~~/utils/models";

defineProps<{ steps: Step[] }>();
</script>
