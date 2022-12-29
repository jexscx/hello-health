<template>
  <div class="grid grid-flow-row content-start h-1/3 striped">
    <div class="w-full h-10 flex items-center">
      <span class="text pl-2">{{ data.person }}</span>
    </div>
    <div class="w-full h-10 flex items-center">
      <span class="text pl-2">{{ data.department }}</span>
    </div>
    <div class="w-full h-10 flex items-center">
      <span class="text pl-2">
        {{ formatDate(convertDate(data.date)) }}
      </span>
    </div>
    <div class="w-full h-10 flex items-center">
      <span class="text pl-2">
        {{ formatTime(convertDate(data.date)) }}
      </span>
    </div>
    <div class="w-full h-10 flex items-center">
      <span class="text pl-2">{{ data.location }}</span>
    </div>
    <div class="w-full h-10 flex items-center rounded-b">
      <span class="text pl-2">{{ data.adres }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { DateTime } from "luxon";
import { Appointment } from "~~/utils/models";

defineProps<{
  data: Appointment;
}>();

function formatDate(date: DateTime): string {
  return date.toFormat("dd - MM - yyyy", { locale: "nl" });
}

function formatTime(date: DateTime): string {
  return date.toFormat("HH:mm", { locale: "nl" });
}
</script>
