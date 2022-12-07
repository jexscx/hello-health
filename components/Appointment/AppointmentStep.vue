<template>
  <div class="grid grid-cols-[[numbers]_1fr_[titles]_8fr] gap-2">
    <div
      class="row-span-2 col-[numbers] h-10 border-l-4 rounded border-gray-400 w-px ml-[1.1rem]"
    ></div>
    <NuxtLink :to="$route.fullPath + '/questions'" class="col-[numbers]">
      <div
        class="h-10 w-10 border-4 border-powderblue-300 rounded-full flex flex-row justify-center items-center"
      >
        <span class="text-xl text-bold text-powderblue-300">2</span>
      </div>
    </NuxtLink>
    <div
      class="row-span-2 col-[numbers] h-10 border-l-4 rounded border-gray-400 w-px ml-[1.1rem]"
    ></div>
    <NuxtLink :to="$route.fullPath + '/questions'" class="col-[numbers]">
      <div
        class="h-10 w-10 border-4 border-gray-400 rounded-full flex flex-row justify-center items-center"
      >
        <span class="text-xl text-bold text-gray-400">3</span>
      </div>
    </NuxtLink>
    <div class="h-10 flex items-center col-[titles] row-start-1">
      <NuxtLink
        class="w-full rounded-r-md flex content-center"
        :to="$route.fullPath + '/questions'"
      >
        <div class="h2 text-black">Vragen invullen</div>
      </NuxtLink>
    </div>
    <div class="h-10 flex items-center col-[titles] row-start-4">
      <div class="h2">Afspraak opnemen</div>
    </div>
    <div class="h-10 flex items-center col-[titles] row-start-7">
      <div class="h2 text-gray-400">Rapport bekijken</div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
