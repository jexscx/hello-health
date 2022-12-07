<template>
  <div class="grid lg:grid-cols-2 lg:gap-10" v-if="!pending">
    <!-- <AppointmentProgressBar :progress="1" /> -->

    <div class="flex flex-col gap-4">
      <h1 class="h1 max-md:h1-md">Stappenplan</h1>
      <AppointmentStep
        step-name="Voorbereiding"
        :substeps="['Vragen voorbereiden']"
      />
    </div>
    <div class="flex flex-col">
      <h1 class="h1 max-md:h1-md">Afspraak details</h1>
      <div
        class="grid grid-flow-row content-center h-1/3 striped pt-4"
        v-if="data"
      >
        <div class="w-full h-10 flex items-center">
          <span class="text">{{ data.person }}</span>
        </div>
        <div class="w-full h-10 flex items-center">
          <span class="text">{{ data.department }}</span>
        </div>
        <div class="w-full h-10 flex items-center">
          <span class="text">
            {{ formatDate(convertDate(data.date)) }}
          </span>
        </div>
        <div class="w-full h-10 flex items-center">
          <span class="text">
            {{ formatTime(convertDate(data.date)) }}
          </span>
        </div>
        <div class="w-full h-10 flex items-center">
          <span class="text">{{ data.location }}</span>
        </div>
        <div class="w-full h-10 flex items-center">
          <span class="text">{{ data.adres }}</span>
        </div>
      </div>
    </div>
  </div>
  <span v-else>Loading...</span>
</template>

<script setup lang="ts">
import { DateTime } from "luxon";
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

function formatDate(date: DateTime): string {
  return date.toFormat("dd - MM - yyyy", { locale: "nl" });
}

function formatTime(date: DateTime): string {
  return date.toFormat("HH:mm", { locale: "nl" });
}
</script>
