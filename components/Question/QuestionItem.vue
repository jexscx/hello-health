<template>
  <div
    class="outline outline-1 outline-violet-300 rounded w-full h-12 text-left pl-4 flex items-center"
    :class="{
      'outline-none outline-violet-900 bg-violet-700 text-bold text-white':
        selected,
    }"
    @click="$emit('click', $event)"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  selected: boolean;
}>();
defineEmits(["click"]);
</script>
