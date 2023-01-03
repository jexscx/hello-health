<template>
  <div>
    <span class="text-purple-900/70"
      >Agenda > Afspraak ><span class="text-purple-900">Details</span></span
    >
    <h1 class="text-4xl font-bold text-purple-900 pb-8">Afspraak details</h1>
  </div>
  <div v-if="!pending">
    <AppointmentDetails v-if="data" :data="data" />
  </div>
  <span v-else>Loading...</span>
</template>

<script setup lang="ts">
import { Appointment } from "~~/utils/models";

definePageMeta({
  validate: async ({ params }) => {
    try {
      await $fetch(`/api/appointments/${params.slug}`);
      return true;
    } catch {
      return false;
    }
  },
});

const { params } = useRoute();
const { data, pending } = useFetch<Appointment>(
  `/api/appointments/${params.slug}`
);
</script>
