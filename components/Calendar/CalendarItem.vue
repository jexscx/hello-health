<template>
  <div>
    <h2 class="text-2xl font-bold">{{ formatDate(date) }}</h2>
  </div>
  <div class="flex flex-row items-center gap-10">
    <div>
      <h5 class="mb-2 text-2xl font-bold">{{ formatTime(date) }}</h5>
    </div>
    <NuxtLink
      :to="`appointment/${slug}`"
      class="flex items-stretch border rounded-lg shadow-md flex-row w-full"
    >
      <div
        class="bg-rose-300 justify-self-auto rounded-tl rounded-bl w-5"
      ></div>
      <div class="flex flex-col justify-between p-4">
        <h5 class="mb-2 text-2xl font-bold">{{ name }}</h5>
        <p class="font-normal tracking-wide">{{ department }}</p>
        <p class="font-normal tracking-wide">0/3 stappen voltooid</p>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { DateTime } from "luxon";
defineProps<{
  slug: string;
  date: DateTime;
  name: string;
  department: string;
}>();

function formatDate(date: DateTime): string {
  return date.toFormat("dd MMMM, yyyy", { locale: "nl" });
}

function formatTime(date: DateTime): string {
  return date.toFormat("HH:mm", { locale: "nl" });
}
</script>
