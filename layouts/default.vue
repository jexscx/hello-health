<template>
  <div class="grid grid-cols-[1fr_4fr] h-full w-full gap-4">
    <DesktopMenu />
    <div class="shadow-lg grid justify-center pt-32">
      <slot></slot>
    </div>
  </div>
</template>
