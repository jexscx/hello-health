<template>
  <button class="outline outline-slate-100 h-7" @click="resetLocalStorage()">
    <span class="text-slate-100">Reset test</span>
  </button>
</template>

<script setup lang="ts">
function resetLocalStorage() {
  localStorage.clear();
}
</script>
