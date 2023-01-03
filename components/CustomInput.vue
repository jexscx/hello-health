<template>
  <div>
    <input
      class="inputField border border-purple-900"
      type="text"
      @keyup.enter="(event) => handleEnter(event)"
      placeholder="Typ hier je vraag"
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
