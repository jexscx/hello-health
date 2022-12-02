<template>
  <button
    class="outline outline-1 outline-orange-300 rounded w-full h-12"
    @click="() => (isOpen = !isOpen)"
  >
    <div class="flex flex-row justify-between mx-4 items-center">
      <h6 class="text-xl font-bold text-orange-300">{{ stepName }}</h6>
      <svg
        width="24"
        height="24"
        fill="none"
        stroke="#fdba74"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <use href=" /feather-sprite.svg#chevron-down" v-if="isOpen" />
        <use href=" /feather-sprite.svg#chevron-left" v-else />
      </svg>
    </div>
  </button>
  <div
    class="transition-all overflow-hidden"
    :style="{ maxHeight }"
    ref="content"
  >
    <div class="flex flex-col gap-4 p-2">
      <AppointmentSubstep
        v-for="substep of substeps"
        :key="substep"
        :text="substep"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  stepName: string;
  substeps: string[];
}>();

const isOpen = useState("isOpen", () => true);
const content = ref<HTMLDivElement | null>(null);
const maxHeight = computed(() => {
  if (content.value) {
    if (isOpen.value) {
      return content.value?.scrollHeight + "px";
    } else {
      return "0px";
    }
  }
});
</script>
