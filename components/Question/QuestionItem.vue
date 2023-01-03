<template>
  <div class="flex gap-4" @click="$emit('click', $event)">
    <div
      class="w-8 h-8 border border-purple-900 rounded flex place-content-center items-center"
      :class="{
        'bg-purple-900': selected,
      }"
    >
      <svg
        stroke-linecap="round"
        stroke-linejoin="round"
        :class="{
          'w-6 h-6 fill-none stroke-white stroke-[4px]': selected,
          hidden: !selected,
        }"
      >
        <use href="/feather-sprite.svg#check" />
      </svg>
    </div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  selected: boolean;
}>();
defineEmits(["click"]);
</script>
