<template>
  <div class="flex flex-col space-y-3" v-if="!pending">
    <div>
      <h1 class="text-3xl font-bold">Aankomende afspraken</h1>
    </div>
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
