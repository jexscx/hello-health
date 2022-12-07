<template>
  <div class="grid lg:grid-cols-2 lg:gap-10" v-if="!pending">
    <!-- <AppointmentProgressBar :progress="1" /> -->

    <div class="flex flex-col gap-4">
      <h1 class="h1 max-md:h1-md">Stappenplan</h1>
      <AppointmentStepper :steps="steps" />
    </div>
    <div class="flex flex-col">
      <h1 class="h1 max-md:h1-md">Afspraak details</h1>
      <div class="grid grid-flow-row content-start h-1/3 striped" v-if="data">
        <div class="w-full h-10 flex items-center">
          <span class="text pl-2">{{ data.person }}</span>
        </div>
        <div class="w-full h-10 flex items-center">
          <span class="text pl-2">{{ data.department }}</span>
        </div>
        <div class="w-full h-10 flex items-center">
          <span class="text pl-2">
            {{ formatDate(convertDate(data.date)) }}
          </span>
        </div>
        <div class="w-full h-10 flex items-center">
          <span class="text pl-2">
            {{ formatTime(convertDate(data.date)) }}
          </span>
        </div>
        <div class="w-full h-10 flex items-center">
          <span class="text pl-2">{{ data.location }}</span>
        </div>
        <div class="w-full h-10 flex items-center rounded-b">
          <span class="text pl-2">{{ data.adres }}</span>
        </div>
      </div>
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

function formatDate(date: DateTime): string {
  return date.toFormat("dd - MM - yyyy", { locale: "nl" });
}

function formatTime(date: DateTime): string {
  return date.toFormat("HH:mm", { locale: "nl" });
}

const steps: Step[] = [
  {
    title: "Vragen invullen",
    status: "todo",
    url: "/questions",
  },
  {
    title: "Afspraak opnemen",
    status: "inactive",
    url: "/questions",
  },
  {
    title: "Rapport bekijken",
    status: "inactive",
    url: "/questions",
  },
];
</script>
