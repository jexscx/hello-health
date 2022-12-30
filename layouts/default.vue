<template>
  <div class="grid grid-cols-[1fr_4fr] h-full w-full gap-4 max-md:grid-cols-1">
    <Menu class="max-md:hidden" />
    <div class="shadow-lg lg:px-12 lg:pt-12 md:pt-12 md:px-12 sm:pt-5 sm:px-5">
      <slot></slot>
    </div>
  </div>
</template>
