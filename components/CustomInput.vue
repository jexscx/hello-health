<template>
  <div>
    <input
      class="inputField"
      type="text"
      :value="modelValue"
      @keyup.enter="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
      placeholder="Voeg vragen toe"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string;
}>();
defineEmits(["update:modelValue"]);
</script>
