<template>
  <div
    class="outline outline-2 outline-orange-300 rounded w-full h-12 text-left pl-4 flex items-center"
    :class="{ 'bg-orange-300 text-white font-bold': selected }"
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
