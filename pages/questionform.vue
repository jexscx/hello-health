<template>
  <div class="flex flex-col max-w-md">
    <div>
      <h1 class="text-3xl font-bold">Eigen vragen toevoegen</h1>
    </div>
    <div class="grid grid-cols-2 items-center">
      <span class="text-bold"> Dr. Velden V.d. Linden </span>
      <span class="text-base text-right tracking-wide">Psychologie</span>
    </div>
    <div class="flex flex-col">
      <span class="text">Voeg je eigen vragen toe aan de lijst.</span>
    </div>
    <CustomInput v-model:model-value="question" />
    <ul>
      <li class="text">{{ question }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const question = ref("");
</script>
