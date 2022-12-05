<template>
  <div>
    <input
      class="inputField shadow-md hover:border-slate-400"
      type="text"
      @keyup.enter="(event) => handleEnter(event)"
      placeholder="Voeg vragen toe"
    />
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["add"]);

function handleEnter(event: Event) {
  const input = event.target as HTMLInputElement;
  emit("add", input.value);
  input.value = "";
}
</script>
