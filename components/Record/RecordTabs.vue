<template>
  <div class="flex flex-col gap-10">
    <div>
      <span class="text-purple-900/70"
        >Agenda > Afspraak >
        <span class="text-purple-900">Gesprek opnemen</span></span
      >
      <h1 class="text-4xl font-bold text-purple-900">Gesprek opnemen</h1>
    </div>
    <div>
      <ul class="flex flex-row">
        <RecordTab
          icon="mic"
          :active="activeTab === 'record'"
          name="record"
          @click="(tab) => $emit('change', tab)"
          >Opnemen</RecordTab
        >
        <RecordTab
          icon="help-circle"
          :active="activeTab === 'questions'"
          name="questions"
          @click="(tab) => $emit('change', tab)"
          >Vragen stellen</RecordTab
        >
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
export type Tab = 'record' | 'questions';

defineProps<{
  activeTab: Tab;
}>();
defineEmits<{
  (event: 'change', tab: Tab): void;
}>();
</script>
