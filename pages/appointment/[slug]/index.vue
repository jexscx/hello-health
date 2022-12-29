<template>
  <div class="grid lg:grid-cols-2 lg:gap-10" v-if="!pending">
    <div class="flex flex-col gap-4">
      <h1 class="h1 max-md:h1-md">Stappenplan</h1>
      <AppointmentStepper :steps="steps" />
    </div>
    <div class="flex flex-col">
      <h1 class="h1 max-md:h1-md">Afspraak details</h1>
      <AppointmentDetails v-if="data" :data="data" />
    </div>
  </div>
  <span v-else>Loading...</span>
</template>

<script setup lang="ts">
import { DateTime } from "luxon";
import { Appointment, Step } from "~~/utils/models";

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

onBeforeMount(() => {
  const json = localStorage.getItem(params.slug.toString());
  if (json) {
    return (steps[0].status = "done"), (steps[1].status = "todo");
  }
});

const { data, pending } = useFetch<Appointment>(
  `/api/appointments/${params.slug}`
);

const steps: Step[] = [
  {
    title: "Vragen invullen",
    status: "todo",
    url: "/questions",
  },
  {
    title: "Afspraak opnemen",
    status: "inactive",
    url: "",
  },
  {
    title: "Rapport bekijken",
    status: "inactive",
    url: "",
  },
];
</script>
