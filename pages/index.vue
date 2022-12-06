<template>
  <div class="flex flex-col mb-20" v-if="!pending">
    <div>
      <h1 class="h1">Aankomende afspraken</h1>
    </div>
    <div class="w-full border-3px ring-1 my-4 ring-slate-400"></div>
    <CalendarItem
      v-for="appointment of data?.appointments"
      :slug="appointment.slug"
      :date="convertDate(appointment.date)"
      :name="appointment.person"
      :department="appointment.department"
    />
  </div>
  <span v-else>Loading...</span>
</template>

<script setup lang="ts">
import { Appointment } from "~~/utils/models";

interface ApiResult {
  appointments: Appointment[];
}
const { data, pending } = await useFetch<ApiResult>("/api/appointments");
</script>
