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
    class="h-10 flex items-center col-[titles]"
    :style="{ gridRowStart: 1 + index * 2 }"
  >
    <NuxtLink
      class="w-full rounded-r-md flex content-center"
      :to="$route.fullPath + '/questions'"
    >
      <div class="h2 text-black">{{ step.title }}</div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { Step } from "~~/utils/models";

defineProps<{ index: number; step: Step }>();
</script>
