<template>
  <NuxtLink
    :to="$route.fullPath + step.url"
    class="flex flex-col w-1/3 items-center gap-4 py-4 bg-purple-500/20 rounded"
    :class="{
      'bg-gray-200/20 pointer-events-none': step.status === 'inactive',
    }"
  >
    <svg
      class="w-8 h-8 fill-none stroke-purple-900 stroke-2"
      :class="{
        'stroke-gray-400': step.status === 'inactive',
      }"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <use :href="`/feather-sprite.svg#${step.icon}`" />
    </svg>
    <span
      class="text-xl text-bold text-purple-900"
      :class="{
        'text-gray-400': step.status === 'inactive',
      }"
      >{{ step.title }}</span
    >
  </NuxtLink>
</template>

<script setup lang="ts">
import { Step } from "~~/utils/models";

defineProps<{ index: number; step: Step }>();
</script>
