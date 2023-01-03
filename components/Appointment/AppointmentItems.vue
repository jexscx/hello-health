<template>
  <div class="flex flex-col justify-center items-center gap-8 pt-10">
    <AppointmentItem
      v-for="(step, index) in steps"
      :step="step"
      :index="index"
    />
  </div>
</template>

<script setup lang="ts">
import { Step } from "~~/utils/models";

defineProps<{ steps: Step[] }>();
</script>
