<template>
  <div class="pb-4">
    <div
      class="outline outline-1 outline-powderblue-500 rounded w-full min-h-[3rem] text-left p-2 flex items-center"
      :class="{
        'outline-none bg-powderblue-500/20 text-bold text-powderblue-500':
          selected,
      }"
      @click="$emit('click', $event)"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  selected: boolean;
}>();
defineEmits(["click"]);
</script>
