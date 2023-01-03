<template>
  <li
    class="flex flex-row gap-3 flex-grow py-3 px-6 font-bold text-lg cursor-pointer text-purple-900 items-center outline outline-2 outline-purple-200"
    :class="
      active ? 'bg-purple-200 hover:bg-purple-300' : ' hover:bg-purple-50'
    "
    @click="$emit('click', name)"
  >
    <svg
      class="w-6 h-6 fill-none stroke-purple-900 stroke-2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <use :href="`/feather-sprite.svg#${icon}`" />
    </svg>
    <slot></slot>
  </li>
</template>

<script lang="ts" setup>
import { Tab } from "./RecordTabs.vue";

defineProps<{
  name: Tab;
  icon: string;
  active: boolean;
}>();

defineEmits<{
  (event: "click", tab: Tab): void;
}>();
</script>
