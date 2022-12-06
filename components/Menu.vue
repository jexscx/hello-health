<template>
  <div class="flex flex-col gap-4 pl-4 pt-12 rounded-md">
    <img src="/img/logo@2x.png" />
    <NuxtLink to="/" class="flex h-12 flex-row items-center pl-4">
      <svg
        class="w-6 h-6 fill-none stroke-sky-900 stroke-2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <use href="/feather-sprite.svg#home" />
      </svg>
      <h1 class="lg:text-center pl-2 font-bold content-center text-sky-900">
        Startpagina
      </h1>
    </NuxtLink>
    <div class="flex h-12 bg-sky-900/20 rounded-md">
      <NuxtLink to="/" class="flex flex-row items-center pl-4">
        <svg
          class="w-6 h-6 fill-none stroke-sky-900 stroke-2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <use href="/feather-sprite.svg#calendar" />
        </svg>
        <h1 class="lg:text-center pl-2 font-bold content-center text-sky-900">
          Agenda
        </h1>
      </NuxtLink>
    </div>
  </div>
</template>
