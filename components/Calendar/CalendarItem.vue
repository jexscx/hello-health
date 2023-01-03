<template>
  <div class="flex flex-col gap-10">
    <div class="pt-6">
      <h2 class="text-2xl font-bold text-purple-900">{{ formatDate(date) }}</h2>
    </div>
    <div class="flex flex-row items-center gap-10">
      <div>
        <h5 class="c-text-lg text-purple-900">{{ formatTime(date) }}</h5>
      </div>
      <NuxtLink
        :to="`appointment/${slug}`"
        class="flex items-stretch rounded-lg flex-row w-full bg-purple-500/20"
      >
        <!-- <div
        class="bg-rose-300 justify-self-auto rounded-tl rounded-bl w-5"
      ></div> -->
        <div class="flex flex-col justify-between p-4">
          <h5 class="mb-2 text-2xl font-bold text-purple-900">{{ name }}</h5>
          <p class="font-normal tracking-wide text-purple-900">
            {{ department }}
          </p>
        </div>
      </NuxtLink>
    </div>
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
