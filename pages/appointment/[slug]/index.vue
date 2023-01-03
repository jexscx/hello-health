<template>
  <div class="" v-if="!pending">
    <div class="flex flex-col gap-4">
      <div>
        <span class="text-purple-900/70"
          >Agenda > <span class="text-purple-900">Afspraak</span></span
        >
        <h1 class="text-4xl font-bold text-purple-900">
          Wat wil je graag doen?
        </h1>
      </div>
      <AppointmentItems :steps="steps" />
    </div>
  </div>
  <span v-else>Loading...</span>
</template>

<script setup lang="ts">
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
    return (steps[0].status = "done"), (steps[1].status = "active");
  }
});

const { data, pending } = useFetch<Appointment>(
  `/api/appointments/${params.slug}`
);

const steps: Step[] = [
  {
    title: "Vragen Bedenken",
    status: "active",
    url: "/questions",
    icon: "help-circle",
  },
  {
    title: "Gesprek opnemen",
    status: "inactive",
    url: "/record",
    icon: "mic",
  },
  {
    title: "Gesprek terugluisteren",
    status: "inactive",
    url: "/record",
    icon: "volume-2",
  },
  {
    title: "Afspraak informatie",
    status: "active",
    url: "/details",
    icon: "info",
  },
];
</script>
