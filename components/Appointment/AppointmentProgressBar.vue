<template>
  <div class="h-5 rounded relative shadow-md">
    <span class="block h-full rounded bg-orange-300" :style="{ width }"></span>
  </div>
</template>

<script setup lang="ts">
const { progress } = defineProps({
  progress: {
    type: Number,
    required: true,
    validator(value: number) {
      return value >= 0 && value <= 100;
    },
  },
});

const width = computed(() => {
  return progress + "%";
});
</script>
