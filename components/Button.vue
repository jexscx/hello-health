<template>
  <div class="grid justify-end">
    <NuxtLink
      :to="slug"
      class="outline outline-2 outline-purple-900 rounded px-4 h-12 flex justify-center items-center"
      :class="{ 'bg-purple-900 text-white font-bold': !secondary }"
    >
      <slot></slot>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  secondary: boolean;
  slug: string;
}>();
</script>
