<template>
  <NuxtLink
    :to="$route.fullPath + '/questions'"
    class="col-[numbers] rounded-l-md"
  >
    <div
      class="h-10 w-10 rounded-full flex flex-row justify-center items-center"
      :class="{
        'bg-powderblue-300': step.status === 'done',
        'border-4 border-powderblue-300': step.status === 'todo',
        'border-4 border-gray-400': step.status === 'inactive',
      }"
    >
      <span
        class="text-xl text-bold"
        :class="{
          'text-white': step.status === 'done',
          'text-powderblue-300': step.status === 'todo',
          'text-gray-400': step.status === 'inactive',
        }"
        >{{ index + 1 }}</span
      >
    </div>
  </NuxtLink>
  <div
    class="h-10 flex items-center col-[titles] bg-sky-900/20 rounded-md pl-2"
    :class="{
      'bg-transparent': step.status === 'inactive',
      'bg-powderblue-300/20': step.status === 'todo',
    }"
    :style="{ gridRowStart: 1 + index * 2 }"
  >
    <NuxtLink
      class="w-full rounded-r-md flex content-center"
      :to="$route.fullPath + step.url"
    >
      <span
        class="h2 text-sky-900"
        :class="{
          'text-gray-400': step.status === 'inactive',
        }"
      >
        {{ step.title }}
      </span>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { Step } from "~~/utils/models";

defineProps<{ index: number; step: Step }>();
</script>
