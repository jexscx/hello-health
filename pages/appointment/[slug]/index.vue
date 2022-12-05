<template>
  <div class="flex flex-col space-y-3" v-if="!pending">
    <div>
      <h1 class="h1">Afspraak details</h1>
    </div>
    <div class="grid grid-cols-2 items-end space-y-1 max-w-md" v-if="data">
      <h2 class="h2">{{ data.person }}</h2>
      <span class="text">{{ data.department }}</span>
      <div class="flex space-x-3">
        <svg
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <use href="/feather-sprite.svg#calendar" />
        </svg>
        <p class="text-base text-left tracking-wide">
          {{ formatDate(convertDate(data.date)) }}
        </p>
      </div>
      <p class="text-base text-right tracking-wide">0/3 stappen voltooid</p>
    </div>
    <AppointmentProgressBar :progress="1" />

    <div class="flex flex-col gap-y-2">
      <AppointmentStep
        step-name="Voorbereiding"
        :substeps="['Vragen voorbereiden']"
      />
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
</script>
