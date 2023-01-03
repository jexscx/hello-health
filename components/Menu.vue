<template>
  <div class="flex flex-col gap-4 pl-4 pt-12 rounded-md">
    <div class="w-3/4 pl-4">
      <img src="/img/logo@2x.png" />
    </div>
    <NuxtLink to="" class="flex h-12 flex-row items-center pl-4">
      <svg
        class="w-6 h-6 fill-none stroke-purple-900 stroke-2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <use href="/feather-sprite.svg#home" />
      </svg>
      <h1 class="lg:text-center pl-2 font-bold content-center text-purple-900">
        Startpagina
      </h1>
    </NuxtLink>
    <NuxtLink
      to="/"
      class="flex flex-row items-center pl-4 h-12 bg-pink-200/30 rounded-md"
    >
      <svg
        class="w-6 h-6 fill-none stroke-pink-600 stroke-2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <use href="/feather-sprite.svg#calendar" />
      </svg>
      <h1 class="lg:text-center pl-2 font-bold content-center text-pink-600">
        Agenda
      </h1>
    </NuxtLink>
    <StorageClear />
  </div>
</template>
