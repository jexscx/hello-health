<template>
  <NuxtLink
    to="/questions"
    class="shadow-3xl rounded w-full h-12 flex flex-row justify-between items-center"
  >
    <span class="pl-2 text-base font-bold tracking-wide">{{ text }}</span>

    <span class="text-base tracking-wide pr-2">Bekijken</span>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  text: string;
}>();
</script>
